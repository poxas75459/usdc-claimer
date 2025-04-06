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
    "5htyqoWjyrJtHb2SRupUHWYrKfSz193md4N7pY8NDbFwsRGSZtoAQJcc92czo69iezAn55SHgTagMkafGbnNQyh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXoU6rPqxS1BaB8o5FVMBGBnRHRFoSBg41WbJBYmJu6fw7MquuJEEpWocLAjg8ppA88Gyu6Pwkom9tPukhrH8t5",
  "key1": "4s9GShZKLJ9jvbWiVjgbwHPyr7gQioJS3LuFsDALqbesoum2hPHSFEsSv4w73iDeKaC95EKdQqJrYpU8VBFdLRgh",
  "key2": "2dHKpStPYDN3CqejjCwTCqpBZ3qJciuhDXA4RWtqAmA5aRxCGPLouw7XtioAmPVqy5WGmEiuc3ULzg5Kdd8iTrYV",
  "key3": "5EewL5PFtiyLGPVtCjAyG5D77Kr6WUPYZvGMB4Es9ZTJhkKvjLJpBW54j8G6E5fe4ixpsYZXNozNDnxXnJj1HRJK",
  "key4": "3J1r8EEFQCCrdjwF5X8KLPd3sWEpoaDzd2eYRQjr175qHSXR6oGuHhdRAXvhDuH4xRx9eeeK8pSpqFdueP7u1qnK",
  "key5": "24SZNsSXZQDQMumyGiKWneX7hFhPzAgqkNxRLBTkS8yJUgWj1JvLvefzaV8snEroiB8NiJcivUpYEiiZ5qk9LyAq",
  "key6": "5gboQXPGC5xUESEejrCDLJa3gQZTarbJVsisWJeaAj4JwvzRAPiPxNRwyh3qeF6pZZVWtPc8ywsQoySJvni1hgLc",
  "key7": "HptbxHGS32rJwpK9BRoojYrDenuG6e6HXvXAs6MqZNb5W6FXJHN5BaSAj2NWU1QL5GSks6CQhyBCLMFfjmMvbqK",
  "key8": "5xj8SfKZ6boUwucoxxCuy7YLTevdhndUN7t5CixzeiGakzu1BF6bafXdbK4qDmoKUdDVTSmRLbH2kbd6gFDNRBJc",
  "key9": "3R9SeUhYavF1E8VMmdQvHyAXtZQbnndsFcZkxNML3gbyifu1Jk984b4tkaDaJi8mtaBcEi8KRCa6hiGiVGMMSm1r",
  "key10": "c4aL6R2QU5iegS6FRXBcJgAv37FZpytP8iL8Ec78XuqqbBU99H9DKQzQn887Gf1z53gr4KvRAd2GQHtdcC43xGM",
  "key11": "4pYsr1GjdpwkmU6sFmwLa3YFM2zEZGyuLSbrF88W9teATRQp8npsnyCLTnfV8WAUts2PC84s7kQFzj9R44dxRygt",
  "key12": "3bwdxZWv7vTrhR6ma1SzCqc4FCND2bFf3d39hyM8W5mtJDmEpA8Sif9JeNFVCDztw1vdUhDDJ5eYD6Dg54YpVH3b",
  "key13": "2iMMmYLnSduUWPW5jsv4ZMR1eQXRxKm89r8V1HjXiQaJsMkZyZtjwrVbh4K7859WF2XYaKAvnmG6w51cZaSxRRap",
  "key14": "2jZw5Gy4UFdEn63QxgrbitFZXgnScSaPpLRLN4RYomaAmYgjTxUdFNYs92EfMWexHMQ9LCP8oqVrMqBW5Vsaz1EH",
  "key15": "3GvPwA877xmZUkK8LuNvAJZQCMdiaAsDiNcn4ZWpAjSbj8PxFo1RnetCtnPRLwuGfvD5wQs8m6a63MQC3wzGxBrF",
  "key16": "5QUijLW3ktSdYmKsDvXKEEyXmnKWZCve2Rsi9kt6ZPUmm12PtXVrwS4XxubHhjq9GYaZdqTDBL8joGb2PfqXm1Dy",
  "key17": "3KR3QDsfi1bhf2uiPkPDP7kWbg3U9S77mnD6WTcUKjRMcyR2Dy3PnfLHCzbj3wPpsEg9GpRZkoJYiVZ1SCz1UAqf",
  "key18": "58EFdc8K5vh5ayt22HtQyuk3T6z2cEJYjr3k2qQL1gzPcH6Z6iCAoUuyHsCDSxgMK3ebur4RbH4okNdokkZqqTYr",
  "key19": "5rbtYhFiL2HSevsEnbxLJc1ny7kcKLWWmXYAF6yeBztyV9zGPbfGAT1ufyW9ZpdujC3Cc6a4ddt1CCwZGkaXb1Am",
  "key20": "1i7wxCVHGTSffx4ARK23vsfuYGUi2vKQsAtJd3B7rDyorAJPYBSJYdqcfmkW785S6Ebr7VDGHbCNkp641XBYJ3Y",
  "key21": "3DdtTvd8pgSLcrZnZr36K4Pc4wZkJyEeeTNqG8hTuiNFu4Q1J3RwXmzeDYzJGeDkChRgEq3tF8afDPANSvoov3CY",
  "key22": "5Jr3hXeAVnnzqXef73UZySdD5xgiQEu9iK4iF3aRZNrY3C8jadnukziEj4xiiHVMFWsQTdvva66vBZ4aT6ZZdUGW",
  "key23": "3th4VVfQHwg1RY1jFi5tMMqTCDxVD9o2Gk9gFZPikcxcZiA5a44mfrNqkRgbqXw8GuuEYyFqc8r62JYThFwfpthX",
  "key24": "3R7CbWvfpnwFE45kYxho21VRyWTuDPzQ3eopLzj1iXS9ut2gtYbFcBDaQx8T87fEJjmKEFZ6d9PejySyZLTNRT2s"
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
