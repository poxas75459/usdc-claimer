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
    "3Zo5k4kibdtfuD4hspWmMrE7rkj8DdiFNj1rNXdScpmvBhgCHjDPc9Cdhx3TAXbutwFSiAKV8KEoSbcpaCyyuzSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQVAqVWiUXACHthXjCB2vTxUNop6LwENgvSbx6Kh668RpqoyqhBYEdQ2hvsivmA9a3TkZfAvWJdSNdjcXyrWyvw",
  "key1": "5ZqkECFHprxbmM7ozuwy2rRRtLdLLM24473bJPo2i5Vq4Xy3Lr3aUsdWe5jtyjBRgEhLSAXY8HwuT7pzzkCsGPYp",
  "key2": "26BGUR1d2WYCnTupRLQudfXwcvbfpNsxBJbABzjdK5e17evFbfdWRd7B1d9u6jDjUYQ6R5jAxJb7sR3ZLYFAiZic",
  "key3": "5ygb4H27NU2P9RFpuV1MXfG3kzk7VBZ9UPWZjciiMHzmWYkghv49VxWgpAXE5cxy1XwetmV9EX64qmgpMzwy5mRC",
  "key4": "44DKQhDFiyhza9FPV2MUQfJbMm71t8WhS1Ur4PnGSCXt5hA62dDHy9LrGtU7YLT5iMQ7uguzQvfr28KkcyoLuibD",
  "key5": "3pxdVMWtUjmaB4turSyYiJqfXLEZawGv6FWinrFgMgJD5teTZyprzh3gPPG86F9idGz4rphYRxHQBP23SwDoPjxn",
  "key6": "2dHcyE2M6Xy22TUx9aAcPY663sqBEUCfuL894ZFVsosU9z6Pf8LFZuzHEzJ8pmoDRNs3FH9pmTMb2uoEThjzjahC",
  "key7": "HH8vx1sPu8bYy66uh44Z2n1w1JFpZMKKRwxM9hSDUq9MD1r5PN4cezjjpWqMSMgujxMLjfQMF6vzsoGzwZZzz9g",
  "key8": "2Hf14x6GzFryHCSHniv9Y83jpEMSSZNzFmrhxpPkSYbEBdBVXhusF8b1ptnHgTMYnYSkSeZ8gVYXbQ59LnHd23kU",
  "key9": "314AjfNDuWWF2xczpFLrzgdPnsrsh5cn5FUKBjjsYDPEJqSvQvYdFgfKuqsrC239k3N6A9NrWXePVjB5dfKuB9er",
  "key10": "3EyPCPXRWk9gLns6ZpHSpjPEcK2bP7Biq1nyfLV11ByP6fBbGdz4pmNz9y5AN6Fa9oFeHnczw7TEoyfTYf1DiA8d",
  "key11": "3gLKBDVohYd2dEsVaDaYVybPiaFrqnu7gMfRC1oDtw1YyrVWv64zJsLv8yQTobb6NXwUq6rKsd2zfR4MnxzR3s8q",
  "key12": "3YKBAj8FU4JB2tKCMaPJk9c7q6MqUHUaV16sS5wm3H3DoLUPEyRwTcoQs4WnKEszbVwzfSAwULBTKfttPe3bNrNe",
  "key13": "2Fs8cHRxq7zRcbeHg8rT2mbvxg8AvA8kgTjMXkRtdDvHmPBRr76iszj3gb1bHXcLQkfE9UVgkFdfjet1LsFdQA5",
  "key14": "4Aa4oagXwpLYXFUnK7D9NYQnK5t2CLSjrjsRsM44thB4ypupNBhuWEJyG5cbni4Ashg1NTTK5sZ4oktuXvPyzrMy",
  "key15": "51MxaCcMFUcNSidGr8RxYhowFNBpKW37zGZXb3SU887t9P1xT57d2yftgPqyPb7uNEzfqWbjn8BfKetaM1ULQrEr",
  "key16": "4nA2UpwbcP9xzZPSbytE8GewXW4vjehnbHtc6Xs4PK9M9gbRSytX6FVMawoqkBKJqCtwdEctn6qjiWcbEe2ByuWq",
  "key17": "5mtQKZZoALKCU8qFupbTNztfGDzZ6Bdj9EzwjxqnUF3ceeR5PciPkqnQ7hAD6riNkAMY7acuweH8MAy7B4aRCEN2",
  "key18": "5k5fUb2GxMAPad8LE8FKL6yxihoqhS8CkeWWDZwJty34rEiQWbY8dNfPBXDFTKLNty2W8siCezAPPu11A7WDWpWv",
  "key19": "mi1hsPYwFHBKKLdaF2pwGiBjAwB7t5yrnPoKU2j3YH79kuEKiRNPUmcUFbWHmnzJ84SEKjqqH6gG5PFGwbycYaG",
  "key20": "2FQCJpQB9cSWKcEw5ebTdKXxLHU4HgR4sRNtXcVMkVDj5SnvpzZmkgQ6WRETXdvXeCdybnQCgE2kiUsQpkbEfF4p",
  "key21": "3sHuDZuXWkpX9Lnsinq5kx3Xm2GCiSAH2BKzLSSC1qNydm6ZLtqn7ZfNNt8Trm1XZnvARHRzbDbtMLe98EeWbBNd",
  "key22": "S2guRSm1Eh5j8Tf4C3FbydSbuJSbCqbVJ2H8nJiLCUA8m9viUcjERds7sgijZU6KH8yTReNHRjB3i7y5o15QqC6",
  "key23": "4hCPdYXQMQugi9DeUiCk6xiFhNxTJL17xsRtSQxVR9ttE4gKE2EXuGgrUTh4yt8jDs7brKsx2hFVfEiZ8SZcvFo6",
  "key24": "5iwtVXrBnBCEg4QfiZ5u2uNTFmEjXe8S2GShMsTgdXKCSjGUSznfGPANYh65Z1JoC6TzkcnCdrWHXp4xbMa56f9V",
  "key25": "3fbRZfGxff9ow8SB9hnwGcgdEG4pwRrbrtChMp3mnTLk9F7mU7kmRYpU3UjdUhhTPSmSggRbDwHf6xRW7H1iofDR",
  "key26": "2RaVtXD9eP7Jqvz8WBVCgHE4mWEcVttEV9Ef3K238effNpmQgcmouKYsbbruRXpfBZEvXpNFnQe1jK2Rj1UcVKyF",
  "key27": "46Y8sciNZ7DcXuEicfvkZgrGp2cNo5TeicPYm9vnC5ZEhjDBarmZ8asEA6jxh7qLhu5VrixhYH1bzdMfTbyjLGJD"
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
