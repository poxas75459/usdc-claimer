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
    "2YUKSAsa8jZg2iRe7KaQ52QwZCteo8rimFZwvjjybqAfZg7C3WFiSYHE5LFa6yEwHtAdWBedKZYchSsJASa1dYgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDFQ6H6yjLtb3YnmdF9dwaEVyGPe8UyN5XbRiFE7peTj7dnJqJfxcyxXv9NA8w5NGk5QRhCp21cYWPf8L7EzitE",
  "key1": "5ZgazKiQYUBMJXcVEgWv7H3HDdcLyLEFCFeoC98VTe8P1Y243XeTQrodVgNWpBup8Lj4tcTKfHiDaZiogHzbj8vD",
  "key2": "3hYXZgXpmAQBm4JSKenUgkop3bqrD2Yzhcdb6idgGQJgbwM3WFMimM18kTJ5dKTiEcrwqDcFhMRDLbbcQvobx6aL",
  "key3": "4cYeStBGboKrqYnpwmZ1cFUkNRLeXp6rtkiEZ6t8DBtH6rAdK2jafEsg9KVBa1miqB2Esbn8xDcFDLRfTP92tgdZ",
  "key4": "4wRhqfT1yRjKCESm7R7qMk8vsdJEc6Uxh5XoNhtYnoaCszeoX9hRes3ECx8ruQs1j7FgbQVH8hWCBMpNU3nwZv9r",
  "key5": "2d6ztUYgHYi2v1vAvPWQyF2TXYrPohQMEhzD8oMwUfmmbE3XchcfQc1KPC6Dn1ENfi7Z2vrcEWceyyrjVH3JKvFL",
  "key6": "41ToBrEs3QzRDJwP4ybZHFfUzmSxrQS2pZnUNt379uiUo46iHPzV9R2RacCCVx8cANTvUBVMUyHsEhNu1mFXmASo",
  "key7": "3wBpk4qfU5ueqZawCLsUeX2sPiX3KnqaEuGFjtapDT4uVXPczfkRwJad75Rxgn2XidSUdMG1MUDYu8EAer2d7PpE",
  "key8": "61hMoEHi1XoNDmxxkA8moE6DiDtFYiXoe9fV3NTouiijemtk79Fz7EpvyKQvFqgbJYnHk49fK7W8BQYqtm9JaABb",
  "key9": "jdWP3wGw8bnhBi9f6t5iuJChxVehbSMgX14ofaML9wJQyahtyefY1QovyiTN9jxPm1vZhBmL6EW2NrPeeo8Ejqk",
  "key10": "4vqJxkWFU4jbDsq75weRjb27nxSkR7DFH1bBvM4VwQz3Bw7eAiGcpoUjmoahQw3zZJ52nWeDXdwD3nZhkiMGZxtD",
  "key11": "4g8CPXJ6HZuaTbbikodMp1rm7pVVMJbnfKkCgZBK4TPo2Tfdz6m1Q1QB2GtR2yGFKW6sDZowtSErEBmLSacdx5YT",
  "key12": "3jNJ8gk1o36KBuzyw6VknJuVZ5jbJMnALW2LPJ7egMuZRY5DmPD7Hs7nrRreyN3RWpPrPA7KcoS2trTZFy2BSYm4",
  "key13": "2fjSeQM5HmiUQ2Px74DTtobugetB8wgfNSpCN2kSMQN66Smm74wWZK2h8nnJvWz7q7PXFii9u3f9mep3My2R51E3",
  "key14": "4kKACFGCGPbfXFNNmCdCyRfRM2hPjNDQAQicLCNwWxuXhb76wFzdTuCr6xCybgHUiiqAYVJK2Bezi44iXYhGLLLv",
  "key15": "y3QRwp3X264qz89NYSfiZkG5Zm2RDRxvev3ooHST76ofzkeFL83jqnUKfy7dCM34m21noAE3JxPGhS54zqYJfg9",
  "key16": "62DdBn5TnxBr6mbd1m4iKx7iZee2TBiNKwJ9HomamzmLVH1P9His2sFQBGGGDprmrEDQYB2viShAnwGQAd29gp74",
  "key17": "5gs33rWLWsuxfpfN7RjHTv8xa6HfokenvCfDggQzyqMdPm3NAP5fArGfML8tnkHXx6uGfejHqG9kouMBCfASPUtP",
  "key18": "5U8jhVcfjtHxq8B85qp7ad42jrSaRDxYtVbraRzEeb1DYJKma89kv23ntgb1ap67vHP73aHQqnhow1FLuA5nbAx5",
  "key19": "4XjnKPfx3ZzZ6b6bvwMBcCVLLDv3Dmv44NAnkQduXXF7jxMN4nkzWavH3v4YhRuwVu4h2YDCiWPnP2E1QvGTREBT",
  "key20": "5grEL4E8KX1nSoCer67SJWQgdaSLYpwMp1wivKinNAcoUTR1HVbDT7y8aHuHS8CFzfVBQ8Q7aEYWAbQhXdpnSiJn",
  "key21": "4t9wti1EYRmWkLskvVQtqyU7cq9CwmovS6HsGDGCexMuHPBheVEjRFJyQvtVeszXdNFjaHrZ4NTSkEaxNYHNKXC4",
  "key22": "3cawGQLMBYxwaxUtTPqSAd49tN4DkcjCM9n2AfuAXVAys15ewKoQjJV7mPuAeDd1X3xPFRdk1rZHh3VdGM6oVNot",
  "key23": "ujn2Myj18uDqmNyp2UhVZ4wM5a2YLgvrz5VurzbdpMVczMLxYS2nqUDCsHZpAusTKzQ3p4BWPgKoDUniWCUqHKU",
  "key24": "62BZPNZtSfy3EMKXWcxoHbdzc8C9uy4GnZ9UpWgaeCQj6adNKpjGDrqJk9FZJjXsahPfTQKTtuqP7wA4SiF9Fg5m",
  "key25": "9nkR1WLRQ5z88P1ErZCt8KLUNr2ZBPwhskwLJnB7ddPoDrXmiLipM9kwfVsCFyCq86cufFD8cuoMAR9DYxhmWoj",
  "key26": "65jo388CtHNhXWP5r5v9jvWAkGQTMCRUBqb6EG5cGQpAVA3TYfP62Y25yTswrSFpJpcVZ17dUhmemdhmGEQmgUnS",
  "key27": "D6sWQqZwQ6TR4DLkDJrSk5RQtruHyWc39iD1Riatsp2PtjiJJEWLfjJKPKE3J1F4YonqKccFjeCgQ4HkhauGNNH",
  "key28": "9krJYB6MJCTDpSpDAM45ybTpjLj61yWEuydBBLwnr4tHs4PuGUZciLAtzNgxFaFPJB15wyA7s7PXLtqoYCGWj4Z",
  "key29": "5511zxBX5bKaKdYbgANt8waM5JioPD6vMvLxfFe4LzJAHa6nbP7DgJAbUVAMpvR17SjP24bBdNgxY9iH2aSL6655",
  "key30": "3GxsScWQNVdDzRkcg27ipfKg13jSDKmqu9WHpBsrYjjD5gQS6txcMTddzDgcbxd2GJd7BM2sMSwVnc35Q4VweMsw",
  "key31": "p8wFs5HCktGQNq9RuWwixCaggvEPqhm5CJL8WJVLAtM2pdGMqibRSTaCgDFNYtZNZwwyL2osrfj2LC9AuQK9BMT",
  "key32": "2u3MrhyDCGwbLRpV2YxKqY8RBsBdb41kq1yxSD2vKKh8mzN7Z6qmW1Bz3U7Vc6h8AdWLG1DY3zXz24W13d2Yefdc",
  "key33": "eaSkQesnraCNY3NcvAa1bNx8YzRwykSFm2qGGWHSnPT7pWSPZWkP7CkC9PfdpEKxb1jmZ16dtr2SxpZzxAJNTgb",
  "key34": "SGrdU5vQU5beoPvjHwjL9WWh71yxipv5TYDZkKHFntDRmiMT1zpUvMq9bV185kTEQ43zUJQNk62PYiHgLs4RnFF",
  "key35": "4m1MbtnFshF7FtMt2QD4NzVNw9BQNCNbqGRQBFEUJzWeeAnDaAiPjwHLtnWxmKjSXB9iTV7xevpNJiNkgntMyM7k",
  "key36": "5jKhbvGhWhLBA8ys3LZCDer5JgPfZaLGZ75f22bPJACFiT6aBqf5UmYyUjTWHv4F8Tdd3ZM6uFpDwr2CZuSeBbJt",
  "key37": "3Bu866mbWCRKRekWzse7SAFmmpkEN8CtT7fSH1V2qedp39ZAtDkZYCUxzVDBKM6mJZzxBqd4QUZrRL2f8MBdoGSE",
  "key38": "386hhNCfzj1mHnhh24tchcvmmiexRsGdvmGzmDaSbhBxA2bfKsmY4wMMXas8Pp8Vqp82pFnvXEfKUJWKd3wFJWdE",
  "key39": "5BvpBRgkJP6YAGUMTv3Z9tJtLcMGR5L6wqMCNfF87amnhma7nE9oW3VLG5GDUtARXoq9S5TzuDj4pSGsjAyi7Mjw",
  "key40": "xcrR7Bv3JJ1zjdvfH3qwsTdbjJzZYc6ep1qqobNNNtRYU9xxDHhuPX1L8FonZqvkQEiKDqNebt3Pz5dvdxGEDKy",
  "key41": "4HQ5acFbMPMaDav6vDaonAkxarcCHWDCoZGj1NoUDYziRU4cez6arm4yFrEn6eiuSozHGaWQrGaX51DBGgP1xjMJ"
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
