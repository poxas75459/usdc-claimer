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
    "5pFWVNg6yyTEsaYZwWmcJBjnFgu3dVkJi9YHhhjhw16KVg8LCuaDYNFPZGiS2kLQDQZCkumRzFfdtdBetF6Yo27v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUJWKuPSMq7gaHtr8BBZTk3VseE9ra1R6xVLjSfxwPVMwTA2xzQx88kBepobv8vtiJY7pjBwmTUaNdb4SELfKHL",
  "key1": "vrgmEiGM54r3wT7wiRVTB5LvUz5kDFmyKGUgHVKrVqsWQLvZ8an8nZtEpDoxcJMwMRvo31cmMTYCgKyF2EgYwT7",
  "key2": "66HjBFLLn43orPyWUbbB5PoLCoDADjFQfXwT2EnWq5tPF7mW5sbC2jb9mfNwkCTr3tibpoDZGwPn6H4GTuJDvqXX",
  "key3": "61tQjCCvLCS7A3VdeFCrn4GJtpjCAgjZaCCCTmaMuyCa3ABX1cyQNJhNqUHXrbxrQEwHCAdym5BSkdn3vs3c4uqA",
  "key4": "4AAb8irfMDA7iWyGmGiveTA24Rk6HPQMfKvBsnVPobULPetdHABotrLLYRbUUWLGXmF8zrkWQu1XioBL5FjwVKbf",
  "key5": "2m2r1KKB8UV2RPMA66NR1b25cSTcSgtuAmamos4T1hbczqN5PA4rEn48AcNoCUszJyjbKKHCck4V1kEVvtgqwX9z",
  "key6": "5LkKea71cNZmnEVzxsvhzTJDzc1Wo4hp3vXxsjkAGwvUa8PVntP4usWG89r7FfcFyM6wWzGKb5xcsM5e6TtEw1wX",
  "key7": "JvJi4hyqoDq4NidUgTw8ovh1AfLfMRY7KLvApxWmnH1eaKd8ejrVrpFCBGvfEoapBUDkXNBGmkqcLVwUE3ATVM2",
  "key8": "5rP7sqV7AZjmUBsEDLYKgCU7uqMzDF5YwTqSbPEi664L6LoBrfynbv8qVYsco1NMa5U3tmJFsg7bMruRiZrYqHVs",
  "key9": "oEgJn45orMboVQK5seQB23z53aGUtdu3qFAwusUZybfiVWrXxMghsq3iL8ughfCr8WSHpatuwob7q7Trm3k6C16",
  "key10": "4oWtHYaUbPD4CY3sJUAW2udsHzjZtpTT75B9u4kg9LzVb87mZwncTwBRJ8ariEcdMTGR3fdzGqMsoH5nk9znVaPa",
  "key11": "2fKaD4dTrKG6QNRdsiaJysmKU7VXpfEQSNCvbede7MyQ6jVTbAu5fquvjUAMojd28aF8eataaQzPxzbMyoYfJJRH",
  "key12": "3LKYXb6sHMhTDrMuaeuY7dFJMEsKMnbhJ1WtxyYn1AsTnxGedBSqpqSveHrvj6Cuw9gEcnUeXdJvyZZPoLW4FQFZ",
  "key13": "3J8mZjbe81n8stM1UiNv9PMFBBp3Y3myw2NYhEs5irqeWd67s5JZjXipb1eXbT22VYXWzhraCJ3mjsCKpUbd63wB",
  "key14": "4XoWDYE2wo9izVVD88gzHRsd9CyiFPqZapLPPW6GrjyMBG4BDT23e3dgGhscgmM5pLbbfGgY883rKiiFSBADMsE2",
  "key15": "5Bc3NKkbqX7kRYjH2JxD919Ent8wCimXtW61EZLDMWaV4shd6Qu1kXgBgVCT3x8kZPkytkXFMt6cdMk4cDJeZTQP",
  "key16": "PvR8uLx4KY5bpwhaF6ziUVEnMP8J15Um4ShxaNHgcMBNhvaVzpndZRcbsMkkCYgfqwJM8yR5fCN4SYYR4TRHuaa",
  "key17": "4UqDXmAYmJYZ2Kg49ZYiedotHojTAuGExNz6nFXCDmEAXhXc25w3wGYa8QS1Yke9DepDCe3UuhFkwVTn68sLGiAo",
  "key18": "ymr31Axt8mUzDiZYoTmTXa1wCywYU3uN9xQv2ZWSFW67C2Y8627u7BGgQQBXUFVErZNzZbNa36u6huHaSquym3s",
  "key19": "5n9cci1iBQyBTzmqXKPnwAU1dZktyqfBAYdTnmZmGPV9YJTRiZig3WJvLv8VBCKoRSeMPeexNsUNmkdWTdQRGowA",
  "key20": "3mBkiURhH2PdktteAvZXmKfNu9feNd1scXuNhWGCBUQo9HsarF1VwB7sv7dFXT72tJqQ8tnmkvWjdTPQziCsZTXM",
  "key21": "3M3gPc88FTK8x7tiJfxs7rAAmkRsLACEGwVR1PjW8ZvALE2yzWLgUQ8VNJy7aM7WN7TqxLHRziYYtnXG5RFaRPkJ",
  "key22": "2ke6LjQcmSXZD2oiQgfCbsnDP4PFvRZN7HY3XYsvpu7UsnpAva75F9x1DbfXAwuSM8AvrjtUXN3qcpxS9CgSNWaK",
  "key23": "25CZnTioHhx8TLXH7m9mqzoHEjoxKz4KeHMEsciysLmQomBHBZgz1iHzMmfTGSpgevY8ZKE3LyGehx6gyHpFU2hr",
  "key24": "5NvPitoqHvJKu4pWtXy3stGqoKPYMQ92zrZg1AGt1x6vKaRMvyG1DSoNVDWuyByJXxAfSBPDc7SW83rcvyazfnuJ",
  "key25": "46gBj9qWMgezZXzpjzJQNeknbSVLPgsfnXGpDBxtXqF1e4cLHTDdwiQxWZd863iJKbRDF3pr3jgQgKSKv3qeisxQ",
  "key26": "4rSzkuPCGzzF4qeEa1n8xNTGADkEsz3Phero1o6z4DN63DY9ukHzeWSiRRAzqfJZyLEb9rdESYKVEVdytAxea9JA",
  "key27": "5J1XM12UMXX87MSaRUpgjgojyPuDqWTMMnjH5ceQgAi8XvLxQYc1CA5qr2qLpeSJDAqbHFT1GDiz3JF7MUAnerXj",
  "key28": "5WgrZRtKAeEcSBKtSNYJK2vwDJBNT1ndLQ5na7iFGa3VWiGGnAZRqg1AvL6nxq2m4sqK1Xt7XH8ijd8R51s9TWWD",
  "key29": "265tewTTQnWbCcVtSBnEtPgww8ew9nc7TUNJ5sgLKe79VtAWNJ92NZd38bQzTexsTbNwYqudFeaAHSknutQa6REK",
  "key30": "2ADx7HzkhGCAJusFCXG34vBaWhLGXEzJzRDLbNyCtkGRMQcjstSPy9UvDA11cdr9Rh2QfCGMzjUmSjaPtANeSxyw",
  "key31": "5FnNZ7GmPaf2GxTHVs6bXrrMXXRQJW3G8s7gYDg7fmygmVMwsR85mnmtJf1huz6DZeQy7sUeRjTCDQT1JsHT7Nkb",
  "key32": "28bkv73qc425PsVqodWUi9wr4vkpdgU8iiu75jVTTMSkeWCnbGtHL1V45utChanNPGAJWFmWjufUNTrL2xugcKrs",
  "key33": "3qjLcMroS2myRSXxfRA4cShvDsCGyKNfU8VZn7FEm6zDVPXPWdU64wcxQGRn1NyfWxRnGGS5UVFYJWwsjrrcNewW",
  "key34": "3r1ykmboQru1TC8GdAASMTXRnStKFA28rLjdNpSQM5BpgMUNVHrXJqmVtG9woC1NkLiWsobBYZDoVVwabmtXq1Xt",
  "key35": "5sU2vw3HtL9UBKi8nY1bzBRJAF47ZEbonh9nptBG37KMYWJhkaYaGgpW312TDnah3wDh7uudoodzViBBwj8qksvK",
  "key36": "WTfKRR177Mkw9BsHDriJgLuZfn61mmL7ZDZwu7DEaZKjZ7e6a2o1T4LL55JREBnL2mNgLXAn65nJ9PiPku6SVke",
  "key37": "2vFkquPDwE4eethrtzwLs2WwGDgMmzqECUGTrfS5T3TGZqxe2om5e5Do8GMui54xuiRTuh2SRXSK7XXp3sMnypdv",
  "key38": "7entWKoUqTdepq4R9rMNbfKMLrqa1MESJk2kK9coeHQCLHh9AcSsospTApkrcYt8npkTWSudEy4YGam8KLCitYz",
  "key39": "Q1CkKkpdAQAKCyZZwb4EbfogvkdN2rsBveGcp3ohLcktTvgkvX9jndmPXYS9en9DtHHLrUm6CruUdafKmya8bkN",
  "key40": "39m2L3Y3kdoW2d9wAHdwNSf6reSDvU2tfdQcJMWwovgmXxVLpJ6ownpFjQagLtSHn8LTv2BQBDP7WcL2oKGSnFD9",
  "key41": "32n8n5NTAjXoPYJfenivmy6CSrnDkQzpHTmjbBa5BDaovNXFmDVWsFaZREeKpur5B5tvPwhmj4UBH4qQFPghNWw6",
  "key42": "aa9yGZzfi5dfK2krCvv6g2wMAbxhdRrVvMu14hDCZizc3BSsbNZdCwVzoSXyvf13ekJvp7xZQRxgMVq8VMdH7eP",
  "key43": "631xkYJiSEu8fvsV8ShVr4UHssahT3UmNDnGcrwmY1nyNF79M9VdbtqAvgAiUcoJnsqrv1EEDrW6kaFtHne3ZGkm"
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
