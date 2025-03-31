/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4XiJT1jG1TRUmYAczBS4uRHHrRswLfRL4eDo5q5DsNVMmKoDNMVBQpRcB8TWR1ZBVYgJcp8yrgJiviSQz8dSLa9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vT7Yos1x3aPTqk2wRAymhVwzMhxczGJuCPVW2yQAFddPTRroe7e81D5X9pqcBCQhMgHMBKnxTxNJ3fZcqQ2uU93",
  "key1": "3QefEi8qjoSDTURDRLiPNTZdFMk5fBhFwDxSas7rSsUCp9t4H8ENacoHjhQ5vA7YkmXqVMd2XPFv633bR5NvnNoE",
  "key2": "52mahsY5rNAKNsgPmC1azJXaifBXjxVSYBVphgpebZz3cPc2mSr1s4R7H35Vc6bpABiH7oN2iZkfTzDbJJBcyR1K",
  "key3": "4rgWfmGo2bisCnVGu98UFoiN4nEnrxW9t2t3szA2W5VYsagj97EPvM97KT1PkRcKrgFFYJ8aSETxQEYKgsQemvio",
  "key4": "Ja9T9PFjf5GZGac55oThMhqmS1AdtAJ5mhE69dhonKWhAZzcNvWRRpbkVczZYQA9owf5mfc2svvi3M7fdHSHJZf",
  "key5": "2UaTLLpk49FUAPC5rkBPJEt3mw8SeBcnCDKFkLJooFjenwHX45kPEfMpAk21npDiByMPR1Gfncj8kz9R1TB4ubDf",
  "key6": "3fGASH88Rg8eJdmEUc6KNs2WE2uWuT6oKVWRAHXAPw3FGfrpqJsVbXikH5VbRxuk6qxxhRfgLGdKKGrDyjpTuRrt",
  "key7": "5xGSLDqhVCBrQrDUTeyPgTqSTaQmt7C3Bmh1aNTXfVKGR4BhHyCHFYryWkAqLYtDcEMXrxs7dqqQBnjVFjhWWc3E",
  "key8": "5xh4aAaXs2s99Dmm8UTSqrDQKzxzC1XYqqrEJ1TCsePH2s6HXW3mDPrW2CdyJ7dMRi5e1Bg38i3bECxqT3tMytBs",
  "key9": "P3Xav853vJjUmNFsaxAFh6syiVGMZf1hoWFSHWVgecxLqerSfAaowkuRDdsFsqDDJL95rwdYVfztf5PLxQwZoW8",
  "key10": "53ZbsevBsq57eAAZiX476TG9xmKb1NX1oQhGKXqb8LrG2bPuroVwU6LzH1FjCN93cXSW9B8uNCpj4xacSQ4sCS9y",
  "key11": "24uSvEypqVvH9iRwLQKCGZMFpUkA9QDjyVzgfbYPgRxNwDkgRTQwjm27WM4vN8FXU58KdecDpJFyp8dHrb3AiiN6",
  "key12": "4e2yLntXprDAisLm7p4w3XFgwM1t8abyx1aBLP6MZvyVz2n41Biru6CRqvXwKMZussDMVC7aCt2QRxA2s4EzUs1i",
  "key13": "2poDMEZXsBvDAxThMv5v5gKyUjDYT7Pbr3iFuQGSW53uXibcs1c63HwdvrYVqw5vsjfKfnYeajQ9V7zakw1FSMnE",
  "key14": "3VtAj1dtGxTGsRBP4HX9Vh9ZdAcxCpFxA15tqrcEZjBr3s4Ac2XRc77En8oXfR4g2tUPByCdSCmJpKJjWs7AgYRN",
  "key15": "2AbmEP1MxcpHPEeggpAdUvHiE1vKrfV2cpCqnAUaGitiu1NGUbKbp6Q8saCRkRdrhTK9EcQ3TWwu1yJJm4StwKxr",
  "key16": "2EqMstiVzbMfaepHnHcfoejJXk7sidDJHnY6rCnK4ekTtt9g2XdYfCkX4dF3LWCXoYfVASSepURtxWeS8Z59jNCc",
  "key17": "52Gu72NdNrB3R8hR67pkyWtM1GkgVHLR3tzmk7ZJeqf9gATrAx3Ar9BvPeiUQAPFc4DMwGHhoRWc3Fw3wsqzqs4r",
  "key18": "4TqwGh58NAjfchrHfU171W9srnCoLSfj2NyxxSxSM9BUACTVnLJuk8weHU98PWUGYRNLrcErVUV6Avhj6ujaHWph",
  "key19": "CJnbNK2WJhkvChRg2wCrWAGyvowEhsbuPP83QFuWPmT9jfViKvgUHnHUzG4xAo8bQcLxBw5ZWR4GoGuvoQZ6w3d",
  "key20": "4xTiErRVYTKzoxa8iEeuAVHDQeQQsfzf5k9DJ1MbnZ2wCKc1FNwSztJUC178ZmjJKUvB5dUkqb7n9ZFCNhHvtgh",
  "key21": "5UhngX41oQsSYY1brH1XQ8mC33QLh3gcoZiCNx2LG9VrG6j3KDAqYTEtbRE3ZPA4LGSCZnpCRXeqYS6xCJ6egNHM",
  "key22": "4DFErrTCby1kQJzdH4onnJqvbks1xWxiy2K2KES1TFWsnTWogE5RfrrsY5X6xQHv5VDrv4C8W9zCV5edcj6sucFk",
  "key23": "5XHmeTk1oZFUSJHVjCtx2QJLm2Uutg9G1tT2cRAYbsxL9SnSYuj5jrhSodgMBKDFaqdSBogTzTkzPfMRVVbCHSTz",
  "key24": "Q7x68sv8yc7ZectYrLCUuQMLMpo1GNbryUtGDc2KEExo4NCitAfqZkXBvcekdtfDRVatVDiEebSjVNCNrrEUpia"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
