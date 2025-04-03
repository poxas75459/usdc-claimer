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
    "4RU2dxbn5cNrXfzXhuD46AHbwvRFZFi9TXX6jTmmu4sMtr6bv1mD33YGwnTHex3WB4MY6i71wQTgFMR5iSawWhV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGCNcTS1uih6xazTmAozWG1TzVvZcga67du4bXDpKY6mu4ioM49UEgqf9WAzRP77Tx29RuAnun9Y16pRiUksHgp",
  "key1": "5RGtvEdnvMQpseev5wxSi1t7NREUeR61thnMGCZqneUUDyJbcmFcyoJB1BBiK8qZ1P8gNqWLJVe1sQf3qNfPQm5r",
  "key2": "63a5cZxeFk5udNaUHaNjHWFjUCbwTW7ju5aBmfSy16bpAhKpgUesqyAszyBy9EBDjNfSaVJrVdiHXptPGuiHdiYW",
  "key3": "4npmBwp6jTFxf5upAsx91pvXvqWZzcvBJ93hT77d9o7QH7gkuupjBHkzbXck2A4gqSz8V1zwP7cXUkWE9ZYMXw3Y",
  "key4": "3r4b9cQEv8vXy5ys7y31yRufBHnDRrx2MyXyMHpy4frZ4riJnic2L7BhTyEd2DZSkCK94189HoPvHnpVNDSE7wbQ",
  "key5": "5vVXaoURwCZsgzLkQV1tXZsLKESdmGbiM122LRDR6gDGBUwoHgPhh3cHHMaTPYygqvy27u6DTLQwWtc3WEHKaxHz",
  "key6": "2r68Xcv9PvxYjqEfkq7hBvr9a4qGwBisZYmGmiP1z76FhLgaWs8CMVeQbjhSkNNj7hqJhqenJjSou1bc9fZ8yqVw",
  "key7": "4YVa3qKZYogQ8G1e26kuZmUoGzs9yr95KvZmX38TCttCSwizN5NYvPRnkgboZdWv6eNp4QxHLRW1zSJQangrKuNt",
  "key8": "4PoZVckBRq7TWE7u7irpnV82tKAHKJJAfwiJ8pfG1rrfR7AGzXQECWKMBq1sg3eXQiBH69S5Jqu2eiHi8ZcNKJs7",
  "key9": "4jpxVLjv8Juxtw14SSVsRaMgwPrSNSFnGwmH8B96YVVQKWqT2zrYTtFCAACBbgpTSwDERUJdJkBGLCQZcrpmD2H",
  "key10": "3ueszkwNeTLEW1q19Q4Bk2Biv16N3okmzbJcfqryYUsfpmKoKLasFbRa9C3zLDMkhhEMVwtJiYssPyHjqAmF7kkH",
  "key11": "3WSy8HtmEe83CPufpKrUgaakyB1fcgXmt24FHcoutgqTiJtL6koCG8piHHLhaT7PKaK1R65KaCcx2qrZHRkQmJ9X",
  "key12": "DdMSr4y5fJY1PryrTjhCtjKmLJ469ShH2VcZUSkyBQH9C2nf7aYbktjvt8uuND8fCKsNE5GJSeDV9zPc3rNL6PQ",
  "key13": "2fsKFYF2saRDKTjrSxktQWRhu955F65t72CZmJ2HcZP8nfGV4SZkRYnonmWjgQfgvDFTib7QQXzFBfzRk6pnhZV6",
  "key14": "5Q5Bu2Ehw6FhrSaXpCTMujm7gbkHUabn57RncdbduMnsHuaZWxrsMgCziyYqXUjaGpV39VP46uUcsBMER27fEBGs",
  "key15": "2pDenzvfcraGKFRDkQTG8qWNBjZJjYVpJSncAQt1r4eGYYdKgym4sy65oZvg6GX1rgTGDptf23h21ccAXWasYo2M",
  "key16": "HGqqFqXGJbV2qGJgZC4M56rkVx7mTZ7eHE7mabHn4N7GyqhF5Y41B211ZFom2AZva3kEHRHdbCqjDb6JWET9tYj",
  "key17": "38SbNzkaaHtyGfS5huXS3b2DV52HDVrByyuf6d6BKXH4ZQEbFvaddqR4BSXnHcpCLiwcvX79q8wTKDenrFA75QQP",
  "key18": "3H2sGYf3zCTjHPKucp62RTJnDGvZgATQqqCFpQe4HG9TB7d3rQsVqE3AP9W4jVXGJyvjyCjKizMLmLY1n675jpUf",
  "key19": "PnWKqH2xVYNJzDEimcJDkG4CGR9oN7d1yLh2S2UD8byJoQ3hGdSqkdXefuRw49NmuDPjH4656vdjqom662TrK4L",
  "key20": "5hkbu1monfMDWArbFPP6Ty2AVjCTn9j4ByMV6Dn7Ge2SpKGWQJTamU7QAzojkgW52Ro4JbHsZrkcpLDpsfN6yVwL",
  "key21": "3zZaVcJXdj5MTxgEDQ6coiHYDKiQ3uGtFnCWbaviHsiiJExBNEC1PU4bQq8tv2CqmuF4U3yor93wfBVpFLuq3QCS",
  "key22": "dVo83aiuguQBd4Mem1KHeMe7ukcCrecfNF5XefjVeoXU3C4dVfxzQhufSJiaCP5EurRszTr6WyEH36GMF44zKf1",
  "key23": "QKWtMfvFBpNT4U4GVeCWaXbnMcZYkGK7xcjnxALUMQ7NFhmjaCsnUJtadDkLZPXKB4MkjvWJ6wqAHAAxSMq2vSM",
  "key24": "4S5gwMPAm3aCaGrEga9CebjWsAgRe9Y4g12UQsCW7q1HnJwS8tZx4hZAgitGZxXxVTMwobLAbJ2YzMxyrSc1TigM",
  "key25": "39jpKmobNFDNTn3qiaKHR4K74YEw4KqX9H8wdKhAfnPnJdi9UsC6ZhSGpTTkwUwV21dz19KMfWZwNuxTWu1ePHVb",
  "key26": "5X5xcQQ9AodSzbGBjhD7ALZNm6hEPQ29qz2PoeTEPrrsvBmJ45HBupPzTkeWsT7F3hWcwB2vuxYo4tfBgrTVgREu",
  "key27": "5t3AvBh7DLUxQ4cD3eU3wMrpfBVixMo2YtMc2zjjkPtFnZQdXGyoxrtYzTgXf5tMJAe2e2TfnUyavW5MZjjZB78H",
  "key28": "2LMoXvXMaiqYHf1EDjQkvZMoSpdkwV3FjiQYFiCbBm4gbmwEXgUGFTam2Mik6BLoBg9Xw7ysrpTNfZ7AnBkaQ6Po",
  "key29": "26kPMCSLtoi9NMGCGENZXRvkAaUqFJ32uyzuxQc8vTyuSa7ruHovGh8PDj5RyB9Xw4Cr2KatVM4YSD6LovJC4jS2",
  "key30": "1KHTsafvCFog7PZaz6mMEbm631xsmSrU3AtEFd5vNwvg4oaXRfb4e7aVXhvVpV3gmBKcZhqDUWmnU4CWj79kmrr",
  "key31": "x5vpNCnEyTtwm7VHuxGnDQUzLciakU1sWQVoG3jkjgWgSFzbmrM7AJQjZTZGTU9vyt9hgnjPhCsLg5VG825dQZu",
  "key32": "3SNMVj4tCYqFu1cD57B2QcGxWY9jD7kcDxJtQpebXAkMPuU2STbhC5vYDez31X9LixcxX1peZMTiUcvzKwRYiDxE",
  "key33": "61PYESyWtJZxad6D1zVfRrVAnVBZNWehdrPqCYVxHokKTmuA9WSpLw5HE1JDrqwKMa9B5PaKL8qMfHrs7MopyHqH",
  "key34": "yLpStN5Pf8fY6BqkfKwE5iM4GiM7evGuTB9Xpmei5219tY2Kz5NzVAkCQEo9jVVNC3qwEWNvdDK53NRTBY8jCcG",
  "key35": "2SQqAqtX4iPRnRBK6MPFSTb9ZfJPZtdtVHeNGLw9xTw8qSDsqWZryf9LVy9Na1UdgjrFY6amCMPFwSgorqweLh1K",
  "key36": "jqyFY8Niric8wE6vFdFUYnfcPoCk61i5J44CREdKGHsU6pSUzt5kTNHNLMBWEtAku96bUca8yG9js4w8mNBdWWu",
  "key37": "5mkxCqekPPpjUfuozgPsunXvtCqv4ATX7oLqPLKB11Cn9X3UiqH5TkQV5xz3ncWYiqYeUpjHzwRbBLjZCKyhGb6q",
  "key38": "55V9CrPTthrR8iKHXjX8JecZx97pVFqZw79sXtu4TfqBCPn6apQXWp1YdpAwYaRGYHvthYhWQLCkAPCKCFRhN9pu",
  "key39": "4CK3SiyGjPB8DRteeFh2AiuSonKvrdsUf91L1dRJT7EQMR5dviX9uoyQxCLwhesKCpF9q63EgMPQnC8oYoj6fNSV",
  "key40": "3C2JhvbuBpdqcidJ52d9RZueZHgMSZidqQVvmpgeSizonFrmsNyXwjfoJ8aNC8CoDarLd9V5mKDmbxcEKk2H5JPn",
  "key41": "a1jVqE2ZX3u68BUhxkWKSRtyevBKN2PDBUy6jvQC7q2YiYnwxtp1bgJ1Sqty7EXDvFo2p8ugYJgnNmp4ukR2HXF",
  "key42": "3r23vQS2uRD567rYTFDhKnNAND9fboEUs5BG32h6MrFSKJuQ5Xbrz7B9AjDZzHVmgwRdwtu9sC7q1wykDxfarc3F",
  "key43": "3hAdGLoMRhUkranqFUFExYMaCw18sGXSsWYgUAHDjwvnpZjTgVnbCbCYUeYMYCsU8kjKmP4AiEQ1FzLgVtzKGgVB",
  "key44": "51aZrQ9kNTfA4p7FDZdvsrEPbJQ1bYX9ZdGPuwmhsywJRvPNKrVFqKPZ89Xhz3xZqaqbFXb294EBE5uc5a14o729",
  "key45": "hNcu77uGi1KcVLFWYtDEuFuKKfMfZmdxHzAReFpSg75yXDUHbREQbQ1tevSms13YHgYsL2FFFLxJk2HohcP6fyA",
  "key46": "4puB6vwDUjrA3nLzePExeM7J6szT7UXwGuzxf82U3mfH9TD6CxZHuiuQHBJPk9YYjoZwF7w4AyExmGkkLQcBRjFL",
  "key47": "5TkujobtTkT6sCWVT9tPzqRZywt9rtHvgEZtBAX3QhM5Utm9Fsz2xe7kDaWQcM3cxdR3MmmtaYDU2EQ3f1hQkhdr"
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
