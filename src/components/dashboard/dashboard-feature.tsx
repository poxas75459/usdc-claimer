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
    "5Q685sVRv7HN7Dr5AG4nYPZ1LWWFT6yeToG5B85CeJ4TVYWYuqgGCUbCbnw4xUbPVV2dVf5kB4JDFn2w4iA73ioZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DeADruzApdbXKN4tj9Zsv2fGPSJSCBvpinnW23X7i2sDH3Gy5XpNWkgN3C9rBezQRbQGNyTGov5az9KAz3PvbFf",
  "key1": "5EA8Df1LvxSACfh2CLgpB6vobAYwCQPpt5saovbM2NZKzCB9H69zpGG4UDgDrtyhRa1ziMonJfZGWiGPSZYD9mUd",
  "key2": "2Rb9M56NzoXvpAWB35LZw8EWAG9x5bJ5Y1MhmJumcJ3VgBvqEG9mYmF6E1hTAmfDaKxq1bgW1aP43achv9bSJenJ",
  "key3": "ywLxsNsREX2GLMcbziqSoecRTZyhq8a6ignnsNUvNjB68iowfk6HT7ftjCKWUBHSRJPRVgQ7UvGn31BKYYXLfVF",
  "key4": "2fr3RsdNNcuzoRx5bn3xtNkKp6CCZmZANBymEHAGgdgks9AR1m9sugW69oAyKYCY6rS5Sr7X1MoVwR3tAEno6nUi",
  "key5": "4QT4613LDzdQm8a3v9UtCX5dBGqMfYjgYN5epZiiqKAMMGirBcBX67zmmNv5faj4wz9ifTa87YUGWqAENBYi7cNp",
  "key6": "3AfwaLs8tJDDZJRu2Y7AHs3HwjTCkXFDiyqPhhWonbYPwd7yH8cLPf8SCZL9LftekD4PxhdUKiUQD7u1NunjWqDm",
  "key7": "54XRHtMbCEhqrViyUBwoByJSUsJGU5rnpLH9A3vJ16CxhB7fCPJbnxTAH8tCdZjwKUZMDJ6KjpKaoNHnFYAGcPFS",
  "key8": "2ssgoQijzffJkaw7Yn4Yvy1bT2ojzJp3ADa9YyPAj4KN5B8SAiPe9dSs2mGJLWMQ8UzWCVuD2fqF5soRVX4mATsN",
  "key9": "21nvDtzcqka9AZ9ME52GGzhLiEkvibMjVcA98qByjqZNjR3vt5KgK13EPnfcDDG5e5bFR9ZyZv61aqHgMFX2iNeD",
  "key10": "5pAqiUt21x7Pg9161qS6vUiYH1D4f5bPWmh4rZWq2yZ32s3M7dCkopwZuM7jT2AvKZmWUaohdJo3j7x4gnfWJwPJ",
  "key11": "44XDu2NDwRcDXRsBvqzx6guRR3xZA2EGqGiLC6MSPavPoKkVwrRQNgqzNebD5EK7WQTe5cbNZC9XoDPRbwPrac5F",
  "key12": "4NodYtEzrnkNZRNMwtiQCNLRtVWLsLcErRVa94TPvyiVsxq4EQ1kD2an7qHJMNtj2ZYH9X9vKv5soTwZM6afizaZ",
  "key13": "4DueU2UTpf91ZtF97yWLkh85T2k9QQJXefuZXkVntpczYRrWbozG4z1biPiYn248Av9TF2LnT1KXNfktNExCkWC4",
  "key14": "3cuYTGic3R7VeK4E7iAhvmyNpU3kGcmSVXuXnifmqtPc2CvQWJkxJLXJ4a2PNm4DGgouirw2BRFW6uQMnaQ6eaMA",
  "key15": "2hfnQ3DnY89RVB8t4tHHffRFbbJzSSz3Vek7ymN5Jmuk2RUfsF9UE98cncZeCez1HTWNgfNrAQpHUFjrmKJUGXKo",
  "key16": "4QFYCrQpx8HqGrW8BqXiuWiNFHBiNWnZnsCyDZJDZvgUX3toHTUZf4VKnKXu8YuzagG1NLZ86jtFX27Ed5KC3Jtr",
  "key17": "4vFL574TQJpkA1HHDzPCoXSGHTXTKizGcATK2kqkyk5X5xix1HRGBoEfymaoaFRagipRrpT9e261iZu1cQDdr8Mw",
  "key18": "2TxkhYbTSfpQNoixSSHeLGTxLqUtN63au2C9H4ZD3cqQwb49BfKuDGupVX1dgB5noHreUavfrNmHHmvnx1cNXZpk",
  "key19": "3xVRtkEuxw8WHiFNz8MEkcxbBiVo9JW8zppnX7Q7Hfef7UijnxG18FdjBSyk8J1qrPHsDwaGFpG9SQVGxUfhRKdd",
  "key20": "5HEqpGWupH6kjuLjjz5EP9FiLM7moZRqWpEBAcS9WX4gdmZGZDEkzeenzR7cCKGB2HVGvp1K74L1fdMwCye3eNsG",
  "key21": "31Z66e8AUxTSPhgLd3WdyaVhGgiRG4GrHZVRdW67Q9vFPgBQShNLGaSXQq1zAD4VvqRqKFoQLfi2wvcCUzvAKxza",
  "key22": "53mC1gVYfbfjjbk9xUNGpwe9FoYnV4dTL8WuGqqsePCRh1T21ca97VSH4o1RXZUN3Zhm7TdT6WUAvsLCJKH5A9JP",
  "key23": "2Ad4fJX2wKJwP5JegegA6d5hQpzVAZuxpJAFCKeH3Tn8EEF2gty46jEZpzoVtq6yEw148T1ppbYchhtcA2rkFGnk",
  "key24": "3CGEpqbeqcnPstFN5oG7bHjtn5RwYvWM1Bv4GzCcNqG8fzBEkDPhFZzU7PzAkbn439niZV6Rp5WSDTpALtFFvm8G",
  "key25": "548YWoUu2JPAwZ4fb27dbRUVVd5141nzqbAXosYSp9rRxr2eWzz8xW42xQ6JVzL2KqwVVgvmU1YUDH8r4XAEpjp9",
  "key26": "vgw8ST3qoKtBYtMqDP5mtVX3ber1uMmLrDWXJBTguRoKBnNwB93gJSQa2pZmwMe9DbiL1LND7KarSVWLRnapUR9",
  "key27": "2LkPAUi8yCwcVgtQyoRC3Yno7frBfkTNyJiAS3eoAXR9Xb2iAxPmcmZzVAT2yyeJ2FUm9eHiKXhQk8tKdDiCXhMn",
  "key28": "3Z3y4954bbbWc7qx5m6Feu5rXRJv7nnBJnxagYvYzA2AfhCTLiZik8bjKoptD2osv96ff9k8qTgmLCZd2stNnwSs",
  "key29": "3hLEX5QnzaWX5oiwroVVBFdnyQJrQnYwVveubq7w4F7TYFv7YcCmsFhRF4tqrwTLLzDEF5Cm7ZeM2cpZNXeKKWek",
  "key30": "5ojhB5pRhuRWgN32Z8kbYX7fiyjX9KVWJDsTyP3YrodLRqhiYTvmQGXGNVzfZJwWSFMN9ZcPLrDCe8PLrY5bKsTe",
  "key31": "xHGpcKX9zHSNAPav8qnDsmUAFCn1qTRn642E4a9Dxj1Fnbtf3KEUYiDWZvYJ5tuYomW1i5T4gkUYDxPvStFU9vh",
  "key32": "4guKwVjo5F9B9hSwznmhT6Sc1wsEUmAwrUDgGaJWuvNtADZbViKrvXXZHNSWpyPu8pTJgYFBDdDKRichnQ39hHiJ",
  "key33": "34JRY8V1Lb8Aub42ePRqRv5ZcPCivVwG5EdxfEzX28W7Gvak89enRQaTyTcxdP3fdnjbVUKDh8vet8LKceV1wArX",
  "key34": "2o7dVa7LKEWL71tCRFT2bKxqnKwZFmKvfJjZ5w4mnUSiKE7XtYMYivLEmbz4DAB1cBNwWLax8uM48hJAePCVmVYp",
  "key35": "4GW7Tk8x748fJVAN7pTTuCKgJ7SnACqTyNp2faE11QQEmuegiNh5ijpeAZufgpzCvoE7GuhumTMCro57jtyZr58m",
  "key36": "5WDdJeM9vdwbHBxvT5uNceMvAiFFXtQtJRFmEVgCQ7Qs7cPiRd9ayCrgNU1yUfKka9NJVUJjWir83dpgF5fCb5v7",
  "key37": "4za9StjbdDUiPpVrLTWBvUk2sFwWWD58rcSCjQTUFbGdMkjBCwQxFDgiutzQhqMqSUk33ziZYXCNgPFkSH8S8Fa6",
  "key38": "QExJXgBQW9YKtiPPVApSwUnBKUimAvQTFgTwRbnMbHsRWedmfjnG6zps6yabPFD2ujkTCSueKsF35tDFQKiW8My",
  "key39": "4MwxDYAtK76uyL7un11sVK6gxfmissYCvQi6riM728KgaojcoBrUYwC3S1Fv2omgn8CCzrgcBba6oXWTQYRX1Sdn",
  "key40": "2toGPL8QzxQyVSzM2q3DCvKKLTzsPGwwibzihB6TaDJN5HHGbXQXmzViar2QK8WrE6y6tm2mVom4qAi9496dkNBs",
  "key41": "F7uYDEaHNhSaemPKJjGupxCXD1LNtNzuuxstVLmYrbToQPQcpLuwGhY9bFF1fQLv6DeiwiVAtTadujCMZ2gk8r7",
  "key42": "35MGEWcTz8HaWHGaC1GRF8aQ6RPkNCenuA2HBuM8MscguFEAVA2AALKTSTJ1SmHEbJryhEZvoZGvQ7JuBFL5Trjh",
  "key43": "5K67XaFzbsk1zofJHW7zsN85oUBm6wFi323TmRKMYgLAau2u2LNKBPhCKNWTX6r6RbcTM7iPphMc2hGDKndLzBaP",
  "key44": "4EFLWh3QfK3rXoKRTf8HhaS5cwiaKkcg7fhut8wQ7j1nYoh2aqJMZ5J49LZw7ej4MPC2ipw5qpTLV2mYPa5nMqQJ",
  "key45": "5Pteo7aquDLzU1mXzCJQxePo3hKECqsPRY71RRcAFH9STdwa9Lnri8K635cGYWCrVF2XmenrJpRKR4dPyLYAtgbf",
  "key46": "5QuhGaV4XDn3VvToYwWViuhq3EYC6XjsixSJbN6uzwLzC1imtBVrEx1kHZRPEnJ7VHk78HbGJfYRdGTDt9aUAjL5",
  "key47": "4qvqmNSiGoHeQbNfPiAU2Quor4PrtKQNCWmkmBhvgSDM9T5CAVXjsux8YYkhK2cGhw9qy3SHinhDQMQypg6332kb",
  "key48": "5L6Cg8GakJ2ov4Bxdf1bBBDU5wnytwiRNoKrgZNMCJAmVLS5DH9Zm4DHzJ8ob2LMYgTwxFQwKCUeizRp74oAsyp",
  "key49": "5ijBSBauCtHH7rt8h6CV3YtcWK19i6GrtSMMUcGPzdcWpv8c9Hq9XHxLdx4gparqwR3EiPdxwiJjpruiwJkNB5mU"
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
