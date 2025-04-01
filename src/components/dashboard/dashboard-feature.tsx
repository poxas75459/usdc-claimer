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
    "4nv3tnFtE2c2k2SJDZnXBnPjwgejhp8NwLbtv1VLMXAZWdgbRbCkD5mx6Xft2JQQZ44sTmKjSdqJ2C6bEZPAu6Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVBLr4bvyG5NaU8xmm3UDxAJ6kf7zJdoK6VWrn2TdfAxr8vWrf7NE5zdiznkc5kk2iUCwE9VYBwAz7ErWJaafRh",
  "key1": "4tVaPyu1Egg9LYpc6dJQskkJCQtHRnKexDKpMUmVU5bakKhkkw8e3wJieYCh4PQJzhyAooWM7vwv3hFnyC6LeCmg",
  "key2": "LxzbU3SPaXPdzjFJLLnMCrnBqCHATTjpSYP1ZeD8P7VgQtgSoHT2BHwQUJSFvi7x6JmBPYFQCL9YFvfqYjXt4EY",
  "key3": "54fRRjNZGiquBf33JME1bA7Qo8QqvHe8jE7MdhUBRtH4aTMtudnTzipMwbpHxEEtjffaT2C1tuUeso2Cf4LjUV3w",
  "key4": "2eSqVuoFjc5st5Td3Tviv741QiEdZRUquwVQXgas3ij8t6xsH5ucAKpdtTvqHu2WwxEUzbKibSKjwXG18kRRaTuz",
  "key5": "5w3TfuUQRbdgra5UJpGi3cZ4AwkwMnwFq3pkecNPvxkAKGqiNJZZVygRrooMiLXnUVCMi8vRzNr4EcexFSBJLwXy",
  "key6": "4ajYJkaHTGwsaeoRNANWAXc6jmoGxWdKVDn3Uj1kA33m4G1jnZwPX81e6e488EMctDANYf9ot2VLw31gHRTPGAZA",
  "key7": "3H3iA3uiVwZ6EzgPQdwgMBdHsWkKqaYFiRwBv3CSQhadZRe6BG9MKYoy9NuBEze7zw5p4xvUf3tbmEjiGLajkybv",
  "key8": "5UTSGQZWSx1zrxxLZkwWTKF2Fae2qRmYFAgHosQHBcejZRkTCrpQYqPN7cZxuUZTVPve2CHMvxmybmkQySM2tpHP",
  "key9": "5RkieCYtSgtE5mM6zBro67HBe3Zm3joLjjNAqzucEKS7ez64wB2LpXsWKzNUrp9o1DhZWYcnhz5sx9tELjai3wVr",
  "key10": "u7Tj9d9QxCKxF2Hmcf3XxrqNvmtyirfPHNo81gwvwdYLTh7nwrzHwSR8EJs2eAuxkSWz9zWDs82uYYteRPnpP9u",
  "key11": "2woCFE3vgZQXhfgZmc1fhpyPrxoi6vrvrQBZgVxTvWM4ugrnJEd9uZBHMVJmpF271AoP7cXAxmUqzqs7oqHFCYnE",
  "key12": "3qfhecfYxmeGdu4zH4vxTLnbgpXkZs9GEhVNvLrJQsNmFqqnG46k9ERGLqhN8mBaBXebDL77fgzTFnaFvBFpWESf",
  "key13": "2gZi1NY7eVzL5DzydV2hDhUaRyTMShy9vfmq6MXw8UksD1nUjehH3HePZRom5J5PKorwoJ1p7MncmLBHmYAzZTZn",
  "key14": "5gx4UWZtpTrv9dBuvZj7t1sEB9hmESuKepe78rbDcfiVrGh8L5pLMKH7fZwogpxAkLf6KYaY5MP11eathb9LqQtJ",
  "key15": "5SfqbLgVX8MKCdZumqU8NuLoXbbUwPzcRJocdTFYYxFWayeAGjJALhBCPQCdm1sJJsLsTh6XbNr6CiAPWXn39Km6",
  "key16": "5ir7i2vCu7gMowkeyaRe8ZCYzPNNQsjji4PyWKtterodwxvLYLViJGhhHmDZXuVhT5mQHvNHXeF1tgUUSrbJuadg",
  "key17": "2wnv3g1tHVVPXrcHbRgxPG63vJpVYNcvPnv8yZkHu2Qxtvovqu2NA9XoHA8T6NVGCWAXZi26ZXdmUsd4qEhxm3uV",
  "key18": "5LatTmHcU8UCxakYGZzahLadnzQujm3KGvpUDX5YmMZsnoCVdyCg3os4WaDPnewtnquHFyGWc5a93wyYPnbGeV1b",
  "key19": "2gPjbWSJ8R1AKkEC94BDc9rN7nBzN8AFPvKCqgsJAQjGmGUGf5VE2YnEL2rbcNDKhuALdoTNKK1Mnak4qtvz4JYB",
  "key20": "iKMRRkFoFbJ4gWiPnHrwVvsry3YgwEgAWfooqL1xmF6FMkhFz55hRpG8KKKVF451qWaoPdYUSzYoyF3RQ3KxB3a",
  "key21": "3NbkdNH3Xb6uYckkbQuV8GmW4F13HpVhdEJXRaCJx4fb921h9ELXJ5TUihmfRP7Ym97UnLCmbTGJ5heZ5yqZoPR7",
  "key22": "3Je6R9XcgjpuNJW65LjczTJxxFXTDjssVvhKb7pTUUcdtuf7QXfnFVPHRAn5pNunzydkp1toyiqKsDWHWa84Th7o",
  "key23": "RQaCrC93WE2j4UjBoBVu3gQJLNdf6ZhkJL9X1JutNqcaCnf7FXJ9RjfMbjhQi9HJYP9oXtZF3gZYn2PumMAy6Pe",
  "key24": "5TNxMtvKLsNWzZmv8u46Yz4yGG7PrHusMxFon275YGkfRuCMBMXXo7wQ8fJqPWiTNZS5WrsyVRPXNdGmrv9Y14Tc",
  "key25": "4xx4h2bdqFLsKwMzq7z3FrUSosiynbe7xE9myaBUbj6uAHS3ASeqgrtE6d4kASpAZUufYJuL69NnepLa65T6FNuw",
  "key26": "3tGXjke9mnsWmYiPDVAZGuxDe7YSL8fmhtiVHrack7mkSsZLE3UHPW4tfS3sjH421h9Ng6sciJ7z4T5E4rknZtqj",
  "key27": "2iAHkbeEvGcpsnQGp1QXUj2mAEuUuzrMDph9M3C8wuB4Vh2JtQ2ETSXg7iJDdJk2YPr3jEMCBXPPXNYp6BM1twBd",
  "key28": "mwXPmdqGZsLKF8x2Vob3Cm3s8EGS9H3gYsk2bbBf6JyTMrdKdbxM96NX5ZNQGZnW5Jg8uAcFf9qtAENsc7v2kGb",
  "key29": "4h2dzpdLcV85nkXFfYeRAg5VedX2zBTortBEwV5mVJ8U68xDvorDzWwzvyxmXRu3hCTcb3rYkL2K6boThiF33fqf",
  "key30": "5zXQ2cmCZVP9wAANddUxjP8bjCEr3YJMeNXrrd6cPrrqTmpZmdzfwGShLneLeLyR4BnxtBwHXYVsf4JdCyWz1UTa",
  "key31": "2sbJDB4gHjnXgMLWF53uDFWLce3m1EMBjPkH5oovSrQBpHeSjA3ehJ1LrVR9PPNzwrJecrM41rhM6CtPwDnbRhLE",
  "key32": "55RST5cGhuHd1V5sPrS4PCsRq6aoEqHSQCM2ik5TVwgWZnjZqEdiY7UuwRcGHXqmDz6w6W2iMiSbQydqtLHHhwAH",
  "key33": "2h9fDivhND7RJrXLr98LQAFnQobfmyedYDCgRiU7SFRVmt1rvKvz2d8g9HJqVEnezNWxVm1jSkH4pvM9WHx5JuPJ",
  "key34": "5KJt4uQpB1UFh5aL2PfHiHtRJoShCdAwzBns9rYzs5UBZoaek8dgN8k5VJtAWt7DyozGCUr6CW17CeGLfk3j5PtR",
  "key35": "6356f7b2C6bb3Kg6Vu6wbSn1v5s6GKT1wbiZ7qs6H3ZXiFC6GrZinH5LbonCNpa1SBkAHQsyvQGyviqvQUGo9FSh",
  "key36": "53SevMTuxEDQncBDQ5WiZXqoszK3FwR5EQrkETi71nNBdJHDuuxaAuMotYphrzefo8KnkRn1KVz9bjDeYoj59rdr",
  "key37": "5q8FQU8q57zH3nE8JY9XZGP1qjtdT8rhzUiQaRksK7quTtiKMRhV86YVDJp7scvAe7oBf956sr8iiCyYGc2EH7YK",
  "key38": "37LUPTFGbCvEBybkCb3r5gpNyByqUVsrRRHRmsbbPCAeRXbnThYqt9BRfSGF5YpuR8udHen1kJDEdp3barDeoeUt",
  "key39": "3vbKBuoEVAWnnZF1D1exAPHScfEE1VzAE7UuYYBH5rkr2AkEteGtvLgpk67kkeEhU4Mvb1P82TxmvmSsXABHVJRn",
  "key40": "2Lb2iGv5Bq2ed36QMVSnHC7ShYJg5GYWuJivpLj2kisLQBg8mMxfyuwG6wvsM1wLKMcB1GqdUmBkHBarJEveVFA2",
  "key41": "4giNU5BXL4htW4eo7dnKXU3hEKGLMfavQj3rQEvZjT7cZ4pqgy9wYrxXYCKGho4DtDCsyXD3bWbr5awxwCmVgVcb",
  "key42": "46VJMWF6cVztUAdQQdjY3ZgLMdRKEkL3A4G7LVPqzsT4ERodPAxkG5sCuX9muWFTNhDggEpBrw56FXZ12xBQyybE",
  "key43": "2Vu1prbadX1mHo7PTvuz1N8EG7ASymCbnnjtQcw6dbkdkV4eLCSPSCw4uVwkR6Wqct5fJCgVDMhUEAwhGJXvzhto",
  "key44": "3GjjHEAeQXJ1gqcgS63NBQB8uusgWG7r2NryJuLaJoQrjTY1nVRizG4VHpSVcfmKPkYvbdgdvYdM3dVpSpfxyMWD",
  "key45": "tQfjxmx1KNRrJhPYBmWh83sM5duTDSG5No7UFXfQzEMVvsnkF8sdvKeZskoEb56E79Hah1BVvSLQs3yjViJuPYQ",
  "key46": "62gqp4B7Sic4yMaTNJeL2yLRpRQErdB9jXfX4kKZY6squqfCrT9Tu6q6oF7oH4UejPFXqMxeFLj62XZ6kkfdwMrh",
  "key47": "2Td5tKNQ1TkcxuX4ufhPTiuf8xAjqG3KJVFsg6eXuCHdTcLWpu1LA9RCEtnqFfiXcK8V6maAbXAK8c4b2RpYvxVq"
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
