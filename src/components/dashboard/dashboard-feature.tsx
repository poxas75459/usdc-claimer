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
    "2Pr5D9mWg7fzmKMv776Gjssso96GMtTDJW9668KXrzFbaqGmgzmCVmcvcpfbSmiDfumHL1FCUHt5Ah7SrzzHYXCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1ayi9THqfpyuBX6SaPm9b2a5iSTTMBnmqY7ybwfuGrLeAkTmNQFpJZa5und5Xr5QPk5ESPw746MKEUgNcTRDBe",
  "key1": "TBRi7AUYraC6WsPHgXfXCEiKetE75y2c2KFbCnVFZcijkB8TPW9mikFQW4LCe5gPG3nfDYQ7FMhLe8C1ihsrQkt",
  "key2": "3SrqQik78U7LAYF1Mu2YSkwUX1VbbT2edyJbRZ2FfB6sTtNbTJqXujWoUTcDTpRppDgUpbfBNTQVh5hEymcBSYPP",
  "key3": "2zzBLDMaQtaHdnDkGRyGf4gFExTf1DV7JmoTXjXaEnhiWwdJt9RhKVBuKwDuwCfV2VT1ZWNyL7tBBu7nbWEhGs1e",
  "key4": "3JtHfb94Miqk3UpYiSPtX5gT31wU2DxCF1CFrW5s6R94u2igkAphD7a38jbo86Ss6xvuWN9o9wcmSgyrDvvVdNJo",
  "key5": "2YihHahxznkvQem9CpUyvoUYKtfpJ2yL8c6eWkqjy6fahz1SwMd8nVZX9hEAF8JHeKd991Gt8Wggne8mhxxG3EDF",
  "key6": "4VhnfSLFMSHnSi8mT6ELcH3db1e6MBsnfggCszhWckeBAgyg4FasAyjExtXNwiLQzpRrDVniubSTbRF3LtbJqzqB",
  "key7": "4bFq2P7H5384cTemFGKiECUXrH1ssStws2HHc5n8xTr2XmXvqzkUDLHkuwcouW7BebrfLwUo34d83Kkg6TXJvvkP",
  "key8": "5Ev7zEGPX8c8w739WPUhKTwFyaDBU8aTTZjVetBgJoa2uPWmj9BBxKbv4dnHFYpP2gK4wN7NRG1jv8o1UciJ2bPj",
  "key9": "3raC42zCnc7moFpHvATUE8ZbvovzwJ5qy2cvvfiauVW6Ao5Tj5JV22aVdP7f9DTQfEwa6yLE8RNKubzhjrhkLCqH",
  "key10": "3fa7gQsSpwGriYHhKyPCVBQbR6WcKeAN8c8gSRmpZuiwuWZMKmwLU2h3jG8X32nseQtZvvhpiavvLFCMWeCLDn8w",
  "key11": "5wsehuMub9PXwDLLQgigoTKK9UbBXSuw64av2brForypNxnXQyqjJpYnybw7H79uDPoff47upG1E8kiVvy6wi11x",
  "key12": "ECAYbuqcKCtNDz9uiP9taGzrCQrvdhmmywHswCPvLWNFeBnztzB5CN9K1EadzwZBvQCrh23RmavD5aK4YvdW9qC",
  "key13": "4W1Dogr94hmYW3CyQxaDexYZPjuCR23GU43DMLJLLcF1XaMzdhVz74jSzxrJatsNro2keLLD8ffyKMcFYJa8FDJz",
  "key14": "5ptkveh6BCn2i72JNSo4wyLcCPY166Kuno3hAvkcGZ5gqeNf4tMckKMXmkdbESyScpyK49han6c6tuNooJwNcoP7",
  "key15": "4P2qvRSTrtx4AjvprnyNeSh5qBVR5MR2GFw8dBgrbR5fc6PgxRghSiMbJf9oACVesg24pUzhzcAFAwj6exTo19fn",
  "key16": "KuKicAjuLqpZu6fstG6Jy2DAVt23aMHRyrNK6gn45ETm7iqLBNwjcVPM4VFxS9rPQ837zPm2gSL6RN3y53jZsEY",
  "key17": "4EAMJ999Y4Xn5mpAgaaS4JWEXtw1netBZb6bw7aJ9d5Y76UA1AadqCXdzzipFr2jinA11qcdwX1SBZZkSQm2EorA",
  "key18": "7XeAeEy5pAQaCAeX4zCzdpErAXd22VfFQPg6t6HQsDhBGRF2RyPDncwr84u4EbA5Tx4UffkB2gzj5QgPV3wNS7V",
  "key19": "3RZQvJpDzWbDVQhNnCnTY2tUBm7NRB9z96Zncjux33N8XyTQKNnWVM3yPM8BtfxfLKAsn6qgTEtjyzYdZE8AyiCh",
  "key20": "3qAzj3CwNvxNP2QqjKXxhC9Vf5jGcGPyCRL8CvL8t7HRFoiSDr5K5SnRpjJrGMwzxeaDWeeiSdadnKUMGaZaVgTm",
  "key21": "2A6rLN7BZFbpLV2aCqfN7jzimuoSrNKvwUc9hDQNxY9rGLggdhJNRZk5n4cGae3XMMvQxc4KNfeazYn8wMUL9JJd",
  "key22": "5YkVyFoGZCs92NZwddqkaQ32DcKef2joav3pyWNpgMVJqPnNPUmjPYzP7Bu8jpHFnfi2FsBRnkFtk4wYg83fvzjx",
  "key23": "5MueYvZMi3RxRPhPtzgtJTPzSxRfG5nKepUzz6Xb7CivvoCY5ibZAjZqPTGqzMASMxfHHdPgUfJkNNY327XXwfbP",
  "key24": "4P5c3cafQNbuMyM8P2jR9p8xxexSS5ZhgqjY76ABxKchcU1NxZyiu61ASENLDQum4stcY1eC2okeyyYD2ow9qotP",
  "key25": "2ZEMRY5PgDnYLr1BiLVRQFZxZ5xfDNN1b1WthP5y6As3RtALR6dZAStMDp1UvmK6rA5EDrPFEVh36ju9eiqcNAYy"
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
