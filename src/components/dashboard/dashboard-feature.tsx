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
    "2nAB9DJm7zuSFVjAu4h3fVGkGAEoCkphjf3U9JqN49XnxYFFavwepnyzJuWEP1aYt3PSwLndjS9GbtgAdTJGBDso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lv7Xw6Z9HyXFG9MEXALQXztSDhyLWXD8uV2oEKqWdjnD27S45pmB5r2QhjsbCdkiw9ghUbDw4KopWDv6NtwAqj3",
  "key1": "yGxE3hCgirnxL7XJs3ksgufqYG2bosuZWX6yC6FfjrvhH21uo8SeUt8g1STzcp5WMLmbWtySuV3uzWhft9eKqv8",
  "key2": "3e4BTTegT75potRiQU31oMCAR6F5FQNFAcTGZPc1nTVV1RSJjH2eujaGMUF85Mw2EQaCtdzYxaz4nenozn7aerB2",
  "key3": "3uyUCVq7mTRtgCHVLZZA9wwEBd9owXsQRsx1TtCcMtyPYjbv5F26z7oG4UwhBeWUBQv6yjNT6pEgdqGuwrohn5Mv",
  "key4": "28v6UBmuaEvbDjtKW1p1xbSJsNwgPNt51fAnh1yVXHTkBudR9CBj61APV4CtVXAPtVsjM8WRWQdSzvmJET5N3jt9",
  "key5": "3SJvPVLbqb98tpSk44GFVHanKYXBoYcy68jfrnwCUsqtxkSmKk2JW9Qnw94ZrLCpkzLb7s64Vw4dyiEtqo2oEjWG",
  "key6": "5Adgk9DuJyzw2EyvqQ7pb4RLqpvMPxkJUcJqL3j5mYQvt8Yg2GKsamYH5kUTLNxdFXEeuKgeF1DqHTijo5oC8fdC",
  "key7": "2Lx6G8WsDYhkMHrcEKfkbX9LfDt5cjF79Yh37qDho6XTxgh4shFvMftG8SXr7dmdkpfR2extVqf5fQceDUnSgaxa",
  "key8": "5pZ4F2LHjsv2AydRDZSVkTXgXcD1xksnrvbE3Um1Y1yS8mnmU7P8GiRpwha4G7jd39YsiZbztv2A2MtRa4mXWvWt",
  "key9": "2LcuYuJoNNiKp4dAcb5KahMJZ3hxwGZneJnGoA8QyemxUCiqTCakej2KaJdztLpkE5E9few1p7Kzqj2kfXMuwSyG",
  "key10": "2Pmx9uz7Z1PFzEzr9hvAqDJDdso78mt3hvb1vLaQz2zDuK3SkLM5zMpC6sKYuYytuhFo6a1bWKMBGXYB87kU7BQR",
  "key11": "3G6QpJr2nQknfWVQdxZRLyeZ19ZekJhUU5wV5j4qoLFe9j7HT2JmA4AN7WekJXxGZL9q6VQrSNwSGevqBd8eQHu5",
  "key12": "2riN5EyH22VbnfSNAqCi5ANiWbn55obTbGKf8TodtwojPBnVX4SSFx12tM4YhpCwYbWi4JFhAGANoTaLyBwSKBU3",
  "key13": "5nThBHwsGecFgsE3JC4jJ9rZLCWB6puCM2qVKvjWi7WrNTP9QnD35QZq73EumvKPf8fLhsRZfhTt5KKFi5n7JyxU",
  "key14": "3mtrAQTkhcHAn2a7QiLw5UrPcNFunZzHC7HzxZF3QDEnKCyLDKKZQihUvx97aLVN1rhDWUSqFcNtiiuMdz89JNfn",
  "key15": "527FttjfzDDeR19rT3Y7fEFq253YEwNsVi8snP6gkx4WVM5yzNrDzpb6Jb89qkDK6neZNMwHXXxsdFoKV22o975b",
  "key16": "3nRcW132BRjFf7rmFKzVgXzFnbqUitYHDEp3MUvsf2d3tUqzevLPRCneSz6rQG8QfdMoBJ7UJuvBq77dnzcqFi6x",
  "key17": "29Kxj8iAHK8aedsDEsWmWjZJXyZTh8vvqewFtSuxGEaiWAk5FhhW3zCWcfAYG4YmjAjGwvvTWYpfEzYDDE8KViM3",
  "key18": "uzzwct3fGzGAqhb7YDtUP9EkNfhveUEvrCQ2nt9KfeJxQxVwsXcP6ATyQQtsZVMK1oASZzRmw2orSikuN2qx47y",
  "key19": "3UAiYjhMMQuf6Rzp3haTpJ1rf4tEA38sayfyDNJbgirqgXFXe47DX4sG1S3eJEML378T3yre1tvypoXpv1cumVjJ",
  "key20": "5Yw5D6dEVD16DyvrwBsiQGbAXg12AfapG9LEvWSmrUbqGeJPKMySK9UNHhmpkMDiueN3xBHSykSX3YnZVMuUwhpT",
  "key21": "3nKoS8yuiPX7juzYzCJYZhsmGFKKmYmD2i3f9gW7zRXVm1TV8bLrrCQkFzRXsrRHsJizA49WP2m2n3BKwbzt43aM",
  "key22": "2N3BhbbcN7aD9MPpciWwKvNHjNHn12USu8fhrbrhYJBTgHUcQEEAyGuM5AYHfwAuNKv2L5wWSzWEEa1mDpuhgMhT",
  "key23": "5waHtSnD6txKBrA2HwSEA61HvtLTf9raTX5JxrJWUEkWJ2fgXWSg3yofpEFTZnoDXfRW5y2eepvd8svHxDdwkNd6",
  "key24": "38wXUEhaseFogY8Ns7rmroX14MmTEtqF5Nn6rL1d2AaLmVm9qeUJmzob7Lt26rPAtXLK2SZsfCDCTKgBfDPNNruG",
  "key25": "4By2jNTXAprAKXtQhMTeue2S7ZhAhGy29YeoYbjkZJjuyeN7yZJrLB3n65psbTNzNYBfi5cJsigRntPXPymCuUtj",
  "key26": "4ViaM1vf5nztjMmX2HPbiYCyZjP2kvTT4vaALvcNQBAyQMnPbZqSjJbgc4hMLtJRmBh9hG5oLuY8NnDCHgH7QsoZ",
  "key27": "5fVfU9DtFJwX43cjneGGnSVivUsFnSN7wotkv6ZpCfjwQqwzvTPZmzLqsE2m2J2g9yYBd71HL1shP2NcnJ1JzS1y",
  "key28": "46uYXHMuveLq2wxfAjoRRZuVWXPadhR3ggxaMjELLVQBEbtK5HETJ7rw5fjJFj8BAuC4C9dGBnn8Rn3cE9GJcx2c",
  "key29": "5UVRt2upVFidq7w1rGQvmRsgobGqcpfNoZxjYGTK8rcMEMfaG6G1PhEA6XCBq6SdHPFJPHTPXNEmT5QJXcpaZgZT",
  "key30": "39RwGKYoYnzSEmLVjVG3MmHjfDChVKc7xb64Cp5REbnBX4HZuzDkgBvCVec514R54YHCM2EjutoDGLJyjmF912EU",
  "key31": "4ta7F28Uoq1MwbYsCQU78nrRgirfPzijp1bV6ezAK7pFYvBGownpU7pM4TPborcmGNBuWJswGBsKuVCPmqBiS7mG",
  "key32": "U9DMM29pQ9EzxN9Xq1wYA7NsB1TCA3qnjrqGSr5SKnQSxJxypAM8e86agNUzNrZi8dM6Njx4pDvaB4XyRJVPrMp",
  "key33": "Uw3XGNDRHkiDSqqfRtM9twZEYFETW5fD2ijqQP9DCpAtDpQHzxjyb97nDc4HAAeihgFHhDHEKGhoAuQEhn5oGhc",
  "key34": "D8vPxspPXQtVpjCFDXJTjhDsyuurxEXYTyHALFy8MUHn3873ieRRdD54FTorHPfBCwxHAbZyzz99KR3syZWfZyh",
  "key35": "2gDM4BQUWkYTxv8d6c4mjFRL1W1N3BHh9D8fJ5ZPNSoBPKDQSRCHNJ7VWEPvrM4hQbXwKoEe6LK3HnuGGrUxQ8xa",
  "key36": "3uuCtu4Xy7zwn9NrDCmdV5nzUCKTqH5S4Vz1ETv5boWxUvrCR6yDpL1YRMgC4g59L8sN69hgrHh9i5nqAgkmWjvD",
  "key37": "3soRf5WgULHkaS1ddXB8SrGvJk85UnNJFXPT9ZpT2cQ4mbMRbSVaxGCy64F9TxgKRdDYsDer2nQPgcZro8Ci8u6Q",
  "key38": "4H778Y3ExEtYRvjzX8G4EMmBhmBMU7hdwUt221sFnzpjZsxkQRMm5U7xDtYyDaKm9yG1E9DLeMZJFbvyPyFcB8ya",
  "key39": "258JhLYYBRcefyDobjB5hsn37Yt8jFfLURjuPF3yZmj47iJFLKecEsxrG97JQezReSqc36VjunnLNo1qB3KpJ4Pc",
  "key40": "4qnwavuQRgFNhCnSiCphGzqJ6k4kn5aoRttqeWXgLPGfmzT1LBtV1t3ub1dNgLMQQToMDMM6oba1Vjyz8vURqH4M",
  "key41": "2XYmp9GxYpJ46EuqAL81qCuv5rfJMt5mWtUy5nvimAvdXKKka7CSv7EUfHHa5JGEWFTe3uLfSynGSsNa9JhmSh44",
  "key42": "54F56T2wkLtNmTtVSNmURahi5Z3NwdVid4JPhXcVSSR74EcF6qMtqeKWP4acDSNXtzBEXGVgBj7G6zrfqK5Gu4bY",
  "key43": "393pgiy5hYF6qL3ygt2fsYUyg2FWpHJVmvWxfTXQ6DP84pJXbkU5zwyPxwESTBbCDEmnuh6BkHcoyX6wvg8oZoyT",
  "key44": "fu1UiSsYR8nPvK3W7HTAeQxwznXgAzjG2TEYp1UfXcGWE3m9ekMgGMADcD99yWcSchPShDtYHgojzWrKW8AyZJp",
  "key45": "3zzsjeMeF3yZtQ3RPvLMmpXdP5g4W62LP63tcNRJ5NcuAwdNGdydsshvEtNwgWj6wfa9WbM3vcafk34HzjecWSnU"
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
