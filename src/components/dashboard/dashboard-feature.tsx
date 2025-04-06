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
    "399oZoShzSMDt2iACQxp5ugr36StAkT5o7qEtXFSUDEtuZhqUcRV9tML6Bsmnk5T4e9wy7LGUmVDHq13LLSL8WCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAgDA4bos9kCkPz5JnJZ2XTgZvXBBa1nGsFhKgHnWH2JgNxeg9A3YjocXktDYKGdK92BWLK9Sw2r8MhRNXrwdP1",
  "key1": "4wZPPgexV3X1C72C5Frn5oEgHnbLyqRPa6uLaFGmtdhXF7KNJ4kRbf2mubURTwZ5Vv44jr4AzytczyGYDBPk9ZBv",
  "key2": "4D1r5CZSwwa4sBedMogtKXRTPwr6A7U8mFnk4bMVGss6585SffSPwAaHxpMvqzC4fWpdJFmmdsVQSN4pmUNR2V5y",
  "key3": "7sdytmsSSjCQevZgFRmCHjQxtiAaSiGUNghV3EXNsBJfs8qLMiGiUCNdZ5EUVWBnN5Kuce9DKdvssN6R7VzAuyS",
  "key4": "5WgvuYtbvG8JCPDHnVe6F9uJjevM7V45KbPP5iq2GzAYSwcFw71EQNn9LXRM1E9Br7MPXiVqQ5tWgiKRg1XGu3R8",
  "key5": "34UrSwZh1uPucuzDRYWXn6UHzycK9FqbSBRny1Fs3doR7GXqYe4TC4Qp5sa6qQ51NFAyu6ebSuJdvUYaQKj1V7DY",
  "key6": "2dNPdxjsCbvW5eLAGWzXsEL6M2LpLBPxwjjmZ5hvqFrxGo3pT7DNREnrExfWhGxqP7mRFdhjDfKNyQopC2jBfWAc",
  "key7": "Q29wBLggWSfYou3F87bqEv7rJRrRL5VdQXJgWb1VTCabzGPcDY6vGygn2GYdyna46ahkymWDPs1rsLDq1vzz72P",
  "key8": "2Q2FAnBfAA5y7RBGv4qVUvucfmqHbH74Tiuh25Yum8NcAjyD3Ut9rmesMtVMLWv4A9Hkxq3QgvxPswH4WB31dzX9",
  "key9": "3ahjZPQktYisHxkwdEEtVSrPVPspQKWobFxfs5PCJGEhyyRWkXpHnme8Xo395oAdteVWS9Qgh9nGYVKtzwqGT5fu",
  "key10": "3fdhPUhrgm1PrhNEXFSwJYo78dPe3AvZ4mf7AFRFirQdak8GY542zD76v8WBv3TVsvJuf5DLgfqwYMJQe2UfmLHh",
  "key11": "5VtYa4in8dPKrsw8swiubTe8th143SE9XW89hLKi7Di5igL9gH23B3UtdnQBftSXnDGM4L4u7TLsVuJ8SCKiyZAE",
  "key12": "2dujnhfAWQFiVn6QuG9zvuAu1G7pvh88D4KqVwEtxdY14LxvMAQ92U53EphMor5ADA6y3vBXUBhGgEZYCe3Q7CPJ",
  "key13": "5wWmdPSs4Xt4ZG2rRKhPj7SddBXpb1bNM9iinvW8HhhMqSwwsv7wtRGhFyhNDJcyNKqWcfpJFygW2z27gq5ZvMbd",
  "key14": "263Hj7KQGsuHRPzcpoKyEUxoEDah1tbwrGY5HgNPTnNJVoGDd3TjgU6NiZWdkU6wLoN1QCD5DGH9jAfTVCxSS8vm",
  "key15": "3VZxEpFAak541a8boDkWpPUDjYVxkHrateWVWasXwvirCieFYMaz1MYjqHSdcfg6eYV2JMuxfFMZMxWL5tUhuQdv",
  "key16": "5ooh68fUfUB6bQk2WAZiDrXJtVdhqyZDdEMC9KMcMS6VUQPyx5sWdTX3oN1CvZx8egV1kmAdQUWWTePqtuiGZRSA",
  "key17": "3GoafwXrPzSsdgRk66NSrMA9ddott1VbMCGR6EsqfXceLCzNzWTBr4o9pTvub25gjiL711Ki7RxqrnLk5S88rrxo",
  "key18": "44cZ154V1Dmb67QuQmbjYmup5erJWFCfBmXsvwGFHbsRu1Nd8J1jqjjLQKszuqdZvQ7y8ypcypffT2Vh8YL3ktmW",
  "key19": "3FDsaK65N2awYk6ZDiTVgUYg3jYoYZpkTWuBVCaXSoWNa2K2JjerTB9zcMuYnkLP7tfbDz8xBAvYzoAN1oXLZDZ7",
  "key20": "gck2BPtiXR2xCxpwZYxxgeoJsX92t7a5ibtJkMNjySBj14jV3YaZjJLzqA28WWTrerPfjbrwTpnsEmbQgiFRMpn",
  "key21": "5N5T5oRQr2hCU7rZA99HzfHREY2QkPRF4hUPa123v5i2q7a18dHxf4oeSX3YkfYTy32LyH3pzo8q6hHubaBVgk7j",
  "key22": "YMHb7UTwHqBLJgKeKR85kWJ6P3DQURQiDrrBirDeX8AdZrdsCXJNGo83wTLhpcJpG8d5TLGscmvLoRiqsTTnSGu",
  "key23": "ebXtu2zKRkGFdjwmYrFWkY5KGQT8YHj8Lk7GnEaaYq1jf274Em5ujtHGXuMhKh55aiGsVMNzc4Rut6HSDyY5PrK",
  "key24": "5sNAWuJdhXzYvvBw3sgwDFDqBU39d2U5B5AGu7FouQWENwGP5sNd7Pu9EbPN38LNJYQtPKhS5xT8BWDzBoYPLYcD",
  "key25": "1SojjRgFUj9NQyZheBhaUotVWzQJ3C95psPQTKGjENzA8pfTZLCc2WpUSwpX66HeZRnSGyfcDADro8GbyBfaKY1",
  "key26": "3CVtbetaELAehX6PNXFqUs5ngduDo8XTp6rGZWPdAkkTWjSCe1tCjyMRqBB42ExxsC777Q3cNMJJdXee3F6XMa7D",
  "key27": "3BQEZCJTbdU5GaW3HbFJKwRGaCAafMiK28toKy4Ed8eMbSa7oGa8GzvfNYPRAMCSWnfpqK1VWsni7T65JQKhcPgM",
  "key28": "2cee4rhFGfpgBQiMd6ofRM4rU954Bjexuv4wNKECD3bMsjoEaDJws5nh5Nn5BrPdZprcuPcMF82AHEBQsnEuuHmj",
  "key29": "chufGDF2WrbF8oc32S2GC8MZYnB6WQN9GRCdKfGKzjvT6RSUNP3biv6wNP5jRjaRYUfq6fFJmaefYGAVkzN6HWD",
  "key30": "3ZuJ2DsNDMHavukaCowizwRuXhPN21XGCpVmy9xVmqdoXJNhFZ9D2ow6sfsMRBJBh5hQu4qtbPmDB8BrcHSnZx4s",
  "key31": "4zmzjS3JMyxSBGda89qHBjp1zcc7skmkhCMhiWYC6FVd7J9ExWkPktzEdMZrrvaV9q8GBNrxBLwUzR3VZALpFRMQ",
  "key32": "3nVy4TBAdVK8pFJrSALLZMtgutaMaJS2nTKQckauiDYA7ZGWJembYqUUnixH8aEAMAmoKKczTBYMujgBQXRWecMf",
  "key33": "2Q3mfjk5eRxTb5E9M9XaNCk7nqUjKn1bAG7kgRFKvrrZ2iDGtCpY1FZaGHx4wRFqFNc7rP1EHfkLeaySEAqA7XaC",
  "key34": "5GPdLjwQ4eCgL7UG1hiGSP1crJeeRpSkKT6GYH88by7fjLfKMJBiReD3rp8Cza95EAhHaSgrbAK2zq4TXLo7Aoks",
  "key35": "56Bv5sMA2pk4osa2HSmCQxWXCemFgbhtJ7bK6cLW949u9KmWj9JbvNfRjDoLBD7zGxnjY3Hfk7cHiL5Bc5cBGzZ6",
  "key36": "5sNRL8DYqfok6bb9xFm4otSjAzpYHVezAdNrEynrUQ3mfPDeisGV827BztYzEe2QRAgSu2vnRbmQc9vKDuvfa6Ve",
  "key37": "3bxxKeHCXqA1wqhnC8uHTaC4exMeNSyT66XzBRpLBS4rGd3nsETzj8S4oUXm4JXmujJduedjbJWXeayKumYi3Kzy",
  "key38": "5Kot2SZEZ3t9fxFX98dUqyReohXxBAjdBYJwJ5gpwUSNQKpW19fjVDZ6BUxTumUcw6KAJsnKXKtK2phFRb2UiF4a",
  "key39": "25jmLA2uh4EG5FiTiCB74iheDKjHsbDGQ8wGP1vSv2GE8HkbWukiwiu5vMBPK6B9HN25MD8wVEdLGfGYhrzGqfSL",
  "key40": "4QUg9W17YCFMNj44yx919wzUbPxQ9DJbRZbGQvWUdMNLkxmd5F6JwxFvRP7JJmVADoBU7upP5q4XnWa26THWR7QZ",
  "key41": "5vXVj82QMRMwkNDmCWZxmPDmNix8GFetmEfj1LrWdq9KvYwkSNSh9vSpeYZsP8uWndaqg97FVAbfgYUUHKtvDw3Z",
  "key42": "5ponkHabZ3bb9UcRtYnahjiUcyoumDKDDpbhciepQcusDqZEapRiGddWxvqRzGzKBrukJnZiE1okQgbKyew6MEfk",
  "key43": "4PtwXdRku5UDz938zff8ujBy8GcpSopXLP2qydtvqao2qqULXDnauF9jSRMzJQWJyRM65cf3KvntJoPY2yeqKQe3",
  "key44": "4py6JbWXTwyjNRckRBq9VVAz5ZGG1fhu121xGCrvbcNGtHsvwUN2VcVBtxbQg4P1MKVDEhr1rbpuq9W4KSVXZVWt",
  "key45": "5GaKmbGALqKaA7F6czDPw4qRy8zFXW7f4KjAkiwU7GCfEroZeCZTQcjD8X1kcSrWSbzPndmiBuchHY3V8rsQvesZ",
  "key46": "4UAhVY5nT1ugVnkes6tmHMD77pm5LRDJM4mTfEZUKYaDxZ2mkt14wwHPuKSQbD9o1txcCpx3mFdTsUvYfgdmh2T",
  "key47": "xK3ErLryKzbV28CqSqrBmbpgVX4EMv67VCZMd9XbfGrBapET2D9SS8w7XgaB1dvEtrW3q87qkuid5oeU9ZVBh2T",
  "key48": "49p1nEbLyARJjEpKDgnA9yy2hoWKQdm6JA4eUstHwng8geBE5oq6rzaHMxhr2QH8S11zk76wjQkHBG7avgbaRfau"
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
