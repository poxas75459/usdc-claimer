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
    "58uR5gjPBMHEACbvGmoVCUx27mfZLicnBxxowEHE8HJE46FVaNu3gbkws6DHWCN3yhwS73ewrpMNzeEdQyxHWsXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRDQy4JbRuhQxEuLHZGCjHtSeyuVaKpNyzte5rCJMAmvB4YGVi5oRbamvHbD4LLShdzM5CzfSLXnS45g8bRDHJP",
  "key1": "3BgC9gDrNqxQucK3bpiXCTx65nHYcgFGw9fiH5bsP9bpwGCNnGsUJtfLznVkuXxv4n8WWAyx1wUesL7JNm3h3gdh",
  "key2": "3YjkVAz6Cg37L9NppUEYWFRuh4ivAFBCU1TRDBacqJGYWE4vHAYKhpk5PmZvQQjkMhW7AopPUXFv8gvjN4SRMK9D",
  "key3": "4zGrHTt73a526MGgthKmfzGpiU2QA3x7g7E5VsrB3G4VqTtY8hod5JNKQZDkZpJ2oyqY3tLJ7LMncnVMn1C4gwpi",
  "key4": "j3Q1xTDkNzo7kprBy7eytZHhijDKDVyRY2YEqFFEsYj81Pxzf3wAaL39s6uw6VGVkKpYB9a9mDWkLftf54TZe6v",
  "key5": "39icNHPrm7yWYayjaVDaqk6fzcNLi7bP3QL2AksabZycDQN77DKfBYjBdUCC1YyoYhF7yfDrg3TiPZfPE1JGntLW",
  "key6": "3RczjRUgZbWKUb2Z1BoyXbm8steMxiKfiJ3WFi3mL1EzYdpzyf5cZg8xSaw5RQyxviUUSKZZV1y5iQrQVXvWrFRr",
  "key7": "4njb3BtwDv8uQyTBF5tACiWC5nNb7mz8sQLHpYgEYc4cybBNBUTzodxzc6xEMZuNYJSSRMHkwgHdrQMG8v1qyUNm",
  "key8": "x7UDadqHo16BvMedmWw1GzB5U8f55M2rxshvuvqPBZwftjbqS5YTbEc7e5j9QWB6sushBQLP4vGn2ay8RZMV5VX",
  "key9": "mtcs56XYfW8rWFXTxKTGdtmZSCMDws3TU2S5qDSLM94GVHt7nqB4TK9PQk6KNwAKFB9gDfWV5vqzP9vem5CkTXY",
  "key10": "2YTtJKHezuoZZfprbUg99RWh37pLXigivTKGWb4kyghqqsVLr1aV9BCPQS7GKUURmyM6XFPEkypVwxq77fauTHfB",
  "key11": "4gmwFVYfgMRvRJic2JEEpUUpKbtnghbTQwwf7sL4CVrPtFs5TKr35LoFGgxo7jggmykQWcqR1x1RV3mVMayrMujN",
  "key12": "RUHPa3zG69hSL61XV14xakitvNfcxPNJMPZfrGn2vDQuAq9o3AqAKqQ73FbsvDAMeLNkrUT8hrW5s32sWa8mjui",
  "key13": "mVyLCyRTKuma1Kv4mQtsQcSi6BcZdNtGvpY6rjzaX8wP8tLzRpHJJj83ioJ654WdDy74vAYAzpBN8Sn2CWLVcPP",
  "key14": "5raacbwdALijCyp5QV1u3WN2YRyXB9NpfkmZaMVxDz9EZjwka8WuzQjxKjiuzhAojVPRH5vqMv8YidXWgt63ffsD",
  "key15": "3rwyRixYDMQKehwzk5aoHUVyVaM1qhsQggbMrEUJ3AH479yh72kkp4YveWFvF9EkAMm47PCQoFTtP5JsP36mdn1e",
  "key16": "5yfZbwUWJ4T1AsLyBqUG2eFKQRU2oGCwt9LFJTEtZF2NtSf7CoRq1nsDbzm81ay6av5jUjSnda9ihpG8TiTRRZ1T",
  "key17": "3TyaTfWf5EHPWUpPmY3Wezt7jhEUy4CftQdxVo9ofhBx7Z98dp3ADFdxb8p4XXYersvtQFFZygQSZdrn92dXcTVf",
  "key18": "4n7RQbuDDXJHyARvMtsHiuV5zH7prPbq1VJipfVXQ8FEhY1dEoP7EfBK64YGgzg6LbUXZ5yXuMHwzo2E67frTbnE",
  "key19": "KVUDpY9ZrAzovuGeCg5sqa4HvpQy7DJ9FiXiwC8XwGFPHHMAPZrKjHxmQqHrWunkCcbbUziCDG2MtMPKp3ePsvC",
  "key20": "5HMJj6mxG3c57zCFnLL2oZodKm4PLiPLtag1vzVV4wqJkhXDtVo3phtvHunn7P2gu4zZVKgXHY7mhoSg62BsjaG1",
  "key21": "2rjtX32a9EvZyRZM4cZrU5NSw6zHRXRWjc3133vUA3XHMEbUPPQJqMwRxPWLJ2S6HNdeBZiwdjnWBVCQg6J7enHt",
  "key22": "5p4dicM9e76RPgJqyis5EwZmPcRFC6EyiAE2KQVaUyULKMw8Ruma9CbgeHWjPHccEDidEDLpsJ1p2sDHvV1F1rCa",
  "key23": "61ag982X5mmm7SUzRkv1wwkieBH7nB9c6V9c8Miu9wakqCHuhzaJ33WyMXdHMS1KMngiWCnK3UeAWn8DT8zxfNm4",
  "key24": "41u4cyFd1fHnTLfavYLTZPgxFMoyjDUnZ72yWKPN7MdZpMxmq8bryYsoMw186adw6oRWYYeg5e7EKfLC4QyQyK9P",
  "key25": "668eyGSTtAtdK5A8utLV2EouJMdjRDh4RfhmtS3JoZkSV5NepHBzSbCtfazH99FXmon8HRgBGTB9ETptT418y9SJ",
  "key26": "4rFsy5t4Bj23YCTUCNTsap9r4cbS13uHX7V4gp5KhK3tgB5FvxRpogNoqL3KzVRxsi71qPDQCukTvG2HMrbRV4aP",
  "key27": "4x2tG53ZQZBnTAiwknpY96hLfZWg7axcvL37vP7kPkjwX1facnZbhpHqZsJWSQjpDDMqRswX6UWJXVqLP4d96wuK",
  "key28": "2NNEWyntRzT6nVgMscc5cHGz6RPq7uTb3PoRbJbRZCFe9vWcoyeGJdgtMuVuDmorMgGedXe77ULb7pcrDQTFXVX5",
  "key29": "26vJ6mSkLBPjhtovYuiMn1hc4wBdWfMtRwuVVe7HnbaiHMcZKkNDxXs5seah11EaiJfh1XSiQQ94md873kdCZL6V",
  "key30": "nhwTiGfHgazbXDxQHPx9AzhxPiSi3hk7HS3iHuGNd2fT6XPxubjhtQbPamQ7pYoRYFnieKgi45CMgjfkqCqPM2u",
  "key31": "4NgqwyTzjtrPWorUzjyfG13KwsNNuNgXoCrQ861N3RxHgQ88pHf4o5iChH8K19adNrWTKVH9YbYrRSNTSPfSghRU",
  "key32": "qwBFrmnYZMMu7nfhtjEkXoHyEUBrnN7qEtAQsBNrqbFDvn1uJeNsAYppHZ7azjYt88bH591ZHoMUAH26K9Qu94m",
  "key33": "4QkH5QHViNuNjqLqFsDTZbFokNs3E6f8TQuuqXCv24bo8yDVA6Q6kMAKh2rbRZtP8xy9YdZqpw2EMB2uCJZZRu1K",
  "key34": "4TVwjfjZN6bFNeJpG6EybynhhNNwqaAjm6EpvQWPtKNDUF7XuGsUexJ9ww7261w5o9Vut43tWBNvXHrJDt78z8uz",
  "key35": "2jpCayyayFF6Js29q8kBhJivGk9B986953ypJZTaRytnfzkzEp4UYQHeoGyAyCmoud2qCNSFprabiBCErFhpfHMY"
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
