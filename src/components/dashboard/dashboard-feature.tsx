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
    "4VFATeAMzRs3RYqxYsk51SK4tCJAx6TPM4HpKofdmPhwLE4KWrpgmkKvdKU3KBovDGzwt1MVx1minAuJ4Qeadvtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjZJKxN5VFp5FBtdP4t9iBfBcvS9AqifshPWyWNiQYs32pBDyaqVpC2oJoW5DBMV98T9aqmg8n9FsdBzvRfYYL5",
  "key1": "GoGQBForaYgmKaToYW7YYmXamLA3VZw9vxKe2MB79Avj8FYEYpSP8bETkNrUG7Z2wXKQyqUMgPbFKmzy6ewfigk",
  "key2": "5m7H96heBavWZUG1oJNgWcoWhtH6ubh5aGg8P6qnk7ttQxeTt9D1uqHgvM1VnYCjW7FVRb5JrqNYmQp7w9mAgrmQ",
  "key3": "2H4iTqfiKeTCaHM5i2PYm7bHQXegf37mb4zkmXi8pGnNM7nLD938nKgQkn9pAfPzPsPTDiVVz1X72HiceURHrxT4",
  "key4": "3aqg6rL4JRhuesKY1mnQGjJeoZ4assG9idozUmcJp5XhXwqUSQAYrW7QK8cNJHoaJQed4iWR35DEe3hi25giGybt",
  "key5": "t9SbS1rNLK2ntM84ysbaTb1ueU2FfxDdedmfUkpBrrGbqgCRnhjnwk6db5xtd4Xtba3ZDhSw1PpXSMPHNfyKFzQ",
  "key6": "52dhfU4TgAWBytrFrBMjYXvKDZWR4VzBfYAR3doe5SrvNsa9SJcpgp7UxnrV6p68P5x68D4eAuwF679RmYH6bf9R",
  "key7": "4ywHKksGAkXWPgaxo7CCYDJQHDqhgKJiYHzBeJpzFQEJ5CJzTa8Lx9yMpxSWPBahUt1qj11XR8MaFu2XB9s7Nike",
  "key8": "5DA9yS9fdgouZ87iCXg5HFi2YWwK5fLkFdCPFVaapJiivMAsGxgU5k7xf3crX9ryd3wxwyqt1VLKB5UAVHAsudJr",
  "key9": "awqNHqMQokqDTULWFgufPPYqKwzbfc1t5LjekEw1jQJXmA8r24QYZBNEWXpv3w3gpxo63PmqpxeXYNKUvzTQW19",
  "key10": "2bXWd2J7dCHHzw9GuGzwb1mgZhmpkQG4y89jmMJsC2DYVQ3TJ2b1Rs6xYY6e7s51V1WVcUTwU6ZK9CyaRohzmkcV",
  "key11": "2bWDcuJCsCTL96ccqad5bBgGH1pN5eE8VivQZqnEx5QhJhp1e77oTHCmXyWwnBsN5ABeQAAe6wtVMP3CGfSj6G14",
  "key12": "fWMCWWKrUwsxLSGuXGCLDn7v5vgXB29WVeHCPK1tvGRyQ3cjgtpBdYYUREkqtajoVKxyVmen17jgEUsBwZvxhfV",
  "key13": "66SA3p7BLCZthzH8eAxAbh5BfZaAXiNkvyw1rBjH2x1LWwQ4VdpSdhDK2X1F67MLCmZLTu1bTSpqeRAyK7KjvoGA",
  "key14": "4LUgErexFfHfgsKg8C6w6VFr9k8sUyFNrdtS1VTk7bTZccZPHnQhoQaupu9X6v8S4MsLaVaW16UB398iLMC7MCA1",
  "key15": "KTvja7KgMYqfLewYS3UcPUXaQ8RN47js5S1EGhRBxZrE1SX8LU52srJdyKoN4fJURmnZjiMvuh8gyAYr7zM1JX8",
  "key16": "4Zv81vomNHBA5pLQUHtXore7XpKMWQek7FZUoFudJhJchfv3YMksNuFuC4Tgqwxkphrc8kA1ZzSYpnGyxyA82aXQ",
  "key17": "3BK2nDYeG31pnEL1xgPo2zYh7v4TEWEPzP2Wo66NwKjNRn7BfWN6roKCsXYJWVkFLLNB92X4Me9jZUzHFrvTS5X1",
  "key18": "5qguQsmNkVAv5xnBgg8XRAtzYU51zPtwWLXJ9GNmk2A8yJyNXbvfduHvNjLbdDbda7BLG2AsDVWMcn9dWc4L5iMC",
  "key19": "39AvnHSWxvQFSQBswgkyd4xCDMg29n96ZgFQfw8XYAQvWRqMJquFdqfD5aZq2pX6g8B9Cv8bY4aPgj845RvNSzY",
  "key20": "TDnL5LMwmnFZMDwJURdnyvCKa9ANSyEkTP1J3FshP75uVXEFv5norBiod4ynsc5VZnvQ2Rx7yVdRdm1SHT6dsHj",
  "key21": "4rCsLeGmc6oqnYHxF1CyjcPkMzJjvgxC6MpKg747Wxx9PuXFkyxwj2eK1JeGN6ntCofFADp2gCJs4q5QifjQDtwP",
  "key22": "9TXSi6V6w5pX4ErFmC4idthcHSahQQGNSZTbAiqHYL1XBUY4k7mRApT1yQhF3cEAskm8Mx6S9zWSrVyRhBEsA4K",
  "key23": "4iXpdAnVigAxdXcYyBamx1np6gfWiZqvZKSbLDTTt1rxR4WTPMPoujDUR9LycZkfpRvMKSDV5TmTeJfMQB3sQMPL",
  "key24": "36cvuNJ4mc2SutKNETwgKsnvcwdd2qPAYmvKbmB1LgitZNQTuCa9n93vY2kUHJc19hv3VsR41T6KZSQpN3d3rhUm",
  "key25": "gbN6ZCLGrBvzDLdFk3Wt7VpJ6ajwEuwua4QkJWZ7gyfuGZjTqCmrfC8WKziUHybFEgHrnDreZwiKnJ9qUZ4ivmH",
  "key26": "365pjTWfKzmPYW8tof5rJ4gxkQNwoTa1p7VhNLMPG1ZHNXxwNuwSAA4pS1KvKdaN9WVmMwV8XbPmHG3MW9FSxZ6n",
  "key27": "BjwEvadFMAX8CfhRNzq8ev5vXwbHDFg8JQiNvcfyRkfVJRZjFicTF6y2h7P2wEkT1Z5y3oR9NtjjC2ztbAF6nA6",
  "key28": "5ZGTHDaNwFQnM9FKp5h4oxpiespbkqxMudLm81dbN8mgvuLgqFLvyNsqpA1PCFMM58BWfdurwZZqwAu3khPC2doz",
  "key29": "4mwzfEpqrPJEVr4yKwBPc5uzZriDtaMrHhStZjpWRgUHN8938BsfQSBr6Gbyg1JFAX7TUTTUNyxkQALcS9fgbccz",
  "key30": "2m2vW2BrFZxTCpHQjCk7o8TqPTAQKMGhq2SSimejGtEcxLPnoK4rzyu3jToDYM5H6nhPMUFRp5pnpBtmozpAj8vK",
  "key31": "5xUrsFYtVqKNMNtVT22ZS8WDY14ULffB3EtbJuPqyYn2bLnVCfzdzWoEVuH5EF8Rzqu7cYLRdUvVBoxZLajDwywx",
  "key32": "5jDDMer2QX3PqFLHKLogPRJ8XfhfX6eJC3734yPAXfqGQHmc9YB1wQyGt82T3QiQF6Gy5g5kwJJSG6LPbxiqvb4K",
  "key33": "4QvmeQHPKpfYbMMUjBN8E8t7ot3BNFZoNCRsbxCqghQAMdF9snsnTaSs2d3CR81fpvmkcqskRUoEEL1drSPCdTkF",
  "key34": "3DibYneiQxxMzoRFW4Vn24ryedS8xsK9BmFxL8BmQwAczKPCNa8APBrHrQKjz2UBz5uZRs8AN7DCbwsxB8gBGJDK",
  "key35": "5vk7TPjmjBF2D4H6H8xhvZJrgu3R5Z3Bj1KNNz4GN6gZV2hTowsU6H3PGj69oayTG6bVSe72ws9QEc8wfz4DAsTN",
  "key36": "4s6EFawRTL96KLjRbpZkGfPeD7YKKyEPNKs7aHGVFq28oX4TQjFn8xNa1mmYJGz4yCHCtNbeKsMvkhxhRtHWJNCz",
  "key37": "nH1HWASE96mxAxEY2igpZdQevkXzKrTynxUGZJJbzB7nTTJxyXjazwf7qRujE8hDzM1Y5KRx2AFWwJZCAMyhuXr",
  "key38": "3hBxSWDRfyrJ8HuiHJxG7sacFu49PvNt7UbgUMwUGE3BRPvuWnQheraGhLjaKQ1Vz8Sd4rC2DuktsDSwZigUfkPB",
  "key39": "4a9YMqMFuHdJL4cYJ3nSEahQGG64vsdXkUPcV4hj65sJw2vvXUf1UGeSht231aVC1cao6QhxHEs4vy6sAUVHP13c",
  "key40": "3urwmkSU2Ckz63TsuATWE5rremtjTn2AVqownbxWir723JNvEa6ibCvRULYGJP9rZMGiWDqmbst3riJDNR7Upkwt",
  "key41": "5YuQTh1afCoCFQUu6kePRLBvxfUYAyQBUw91MZ3q5SnhJw5RVGEdk42b29NCEegURmbQGBFC9Z93Aq6Zz3fVf1L6",
  "key42": "4zf9trEhPDSGbrzLdtiLEfN8tCEQ1pZV8VrC2tDUec1aqoUVqFaEHbW1bF9oZAGofRqWmkRJYeHuRUMGakqhjjjP",
  "key43": "3jfAEer12DMvDrqdLvnvc2Q18Bn9wLsyhmuKAEsxzCbewVnhgzgop6w5DUD8ZsRF8px5XCZafYZJnf93YiztEYCb",
  "key44": "5Tkk4Z7XyBY9T7Z2tzFXTAz1MghCmRJDApqUo9HRo6XPWiwwruYvLYqfJ4jn2PctzSPWGKXnETjwPpoXBZRRV1p4",
  "key45": "4dFyCZCR6cJqhRhS2MS3YV6DFB9SuhJwW8vZx4oUHH2UQrNk9gr2iXSwNdYGKq4WpQPeKSefRewSmzypXyxduAzV",
  "key46": "389V5C7LT5hwPJj7DpfqNzzBdMai2UYq8txp8YAMdypM6U6AEePDrCTMTpjfML72M4SqVHjoyrs3Qozr19Pzf7yd",
  "key47": "5wD3jY54Zd7VY4Wri3MUYk7qjfHbSQmCtYwzswnsjTvMwCSAdNQActnVKVxTi5J9FaHCirB5XPN6Dv7NGCkJu8vy",
  "key48": "apzfLGqqGTzNabE8PLU9cDrtjNdZd6KATAYpW4JmGUHpDdjBHSPhJ4FdYrypjcnujTg5ZnZRJCukUvafJGgpZP9",
  "key49": "XtkAYHDHDBEDb15irL3zQHGuTuGeVqnndadbxR8pN53RGHB1eQxxfmHnRBaCKiTkAZ1p488MP9977cWKkrErc2u"
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
