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
    "3PXSuMVgGo7HVCuru7fPG1U2c8o5sfneTgvMtp5Pav5vrka41uMYSioiP47Rfvd6x8pX5ug8uJ7zDgzpHYBTEdnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BGYKpAjss4nhLWbKVg4DE1jNoNc6C3ZLE9eC4y8sCKSbaMwWK5cDPSrPw4tNJVDkrHvNaBCcdmFuZJHqfbvkzou",
  "key1": "2iBo8M1LZAN2W5RUENSLgP5BV6bCjjNFmy6rmHu42C9uEP2RQEFpWvpFLpj4MuWo6sjKeE2H7EHEmBsgNuZC6hZr",
  "key2": "2JEdsz8UizCzMfo2WxfNFzVLiMt3Ls2aLociKuWQdriBMbLzt9Q8NMN4aNBvwL2s9HaH5QnBxpoQioZZLvGerTK4",
  "key3": "5p2nsFjYrH67bgPE3z8jK1HcKXgz5SBELVzic6m7V5YhyFyjFjcRhN9kacmsthE8vKYpS4gF7WaVH72owq5eAfJp",
  "key4": "28qE2VxsA1dTizTrCedhw67KCnGF9ywFZ3Js3mL4VEs5PmgyyRhuNA3wKkiibBvtY8yUhoM4The5opp3mVhnbyZA",
  "key5": "4p5RJ1bARMSu47QcJBgH3whsmez9tmHXvoxBPhnttr92uY42mYjZoejAFc579eTLFf71f6gc2mFPHDB6AUWLuoKD",
  "key6": "5V2oEQxfKzH8aw8BLJzfyJbnA46YZLtXHbcSMAvUBMz2gS9dMmc5szwZUUZt9QNPFnTo6iqBgJEFT2nmR1qdRzqS",
  "key7": "2w4Fuz6RUPPM5SJGbd1s28SCq8x292k9bo66QGNdi8fCUMxjoSLcowdxgg7v4DZrbcKF31rzrB21GbHoZAmnDURR",
  "key8": "3L1VqASyTRvM961mGCzhfQLWqYL4z86vP5yJ3vmhPio4orJtqsp8tZjpms78NvUGCLcsK6i2uNy6njjLmeUgaQJj",
  "key9": "97HzX1C5KR6D6Jbr3StqgKCkqns9J7s8hHBTrH6KgyVEd1kMvmkxmwT2M4sEkot2xfeGEdBi1ZszPpNfHqrmytR",
  "key10": "6EYz77n53DrrTDVrDJm4kLp4ufWAuc3Z8WVjZdfo4M5mDQW4Fkhx3hccZ8NGWdbTiu1GURotMG3BdpsE9XAsoTn",
  "key11": "27Q2G2HikB8LXL8fdUYdHDpmLwMoBGAES3N223yr6py9odpQpqUWwCGUXbaa5xyVAwmbnWM2uHophi9pU2KtoCsS",
  "key12": "kPkiWbr4pSTcvNPdnshrHf8LbgYPFLpJQ4v3gLnNUfj3iQ6Dq3Nu6RzbLQvspkJdfQ7RYZShTKGtPjBaQaXmT5R",
  "key13": "2g3e3NsD64RKE7owhWFDeRcEEZC4RBtzmmp48BH6yRayG6og4iqVwHWMS8WJeJ39nCu5gSRD5rkvgJaQAmjy8Uw7",
  "key14": "2D1uWYECqdxoznSkimXMg9FXpQeHJontTv4MV8ZEVgt8e4smxgNNd5VviX1YgFzCs5Qh9XZNSWpsCXqzrFGDZ1sA",
  "key15": "33ndHAAwmNGFx7WXqetB8nreEiFSUZVaVtNbo6Gz3MDHnKNU3cWasRFqym4V78KmTkHLmckF8kVJbwmuTEucPXw5",
  "key16": "4XgkcRrSQPSw9wWkE5Y1ixMZE1V1r2hmrvvw695eTnoxnhvLCHoZA7XkwuXLhApdP5f63P6ZHVnWWEDLmbgFBV7p",
  "key17": "51ZqhEbCM9PGhQ44XbPWQ3vNB8hnUfHfJwRrJQv9mvYsymwJv2HLHKwNwbo7Xz15yhwQ8h3G3QrBeZZ2dbobae6w",
  "key18": "2Tc7KwenTuhgtczmMXfzhDhMjyFKKns8FtHsbn44ZxZ85zyGU8fToizmrt7jBA7ssgQ3P8VVQvkU7HonfDZFU7ab",
  "key19": "3zv1kekytkXT1hfGqVM8EnJTGQePVKjrgSbz5M7t35Z9HxApKDoUxJkLckpzMpaZdoaStri8CjoZtsYqJWRcc9F4",
  "key20": "5ay6GmS6NwVyaan345pJr5uJnwcjTj78Y6zL5tStCQgUoNxXnoH2MBQxCzUjEpUStLB7pyF8HFiG4wd6ivkHaRwc",
  "key21": "H9PHbCTp615QRqhJj8FBUrtnihduFzdFoaPX3jdmag9PEWtcbMXWw8yuaF6cTG9YWBhD8rJzkN6wdwArFoo17fe",
  "key22": "dGn9qb6rKKpEXJ7dB2dMR8a2c9SWxUTQXPKhuGbnRqjeceD7ZHpsXqqtRDpzMshsthfASXk3S2Mc8Bt46JsKdoA",
  "key23": "2nacEMZqNwg7ZjewYWUi4AnnPRNCtfkyzHsZvYVPyMCkdvP3929ci5EgC238uaTtRSYqoY2QHbsHbnfsw49QJVTP",
  "key24": "pnhNjNC4z6YJe9qpcQ3uuiRwqEBZ5zWrjMBeRp2b6g8sLcAbkCtSrjNynZN5HyZNoiNewjrEzTyiDB1Df8A5FND",
  "key25": "2ypHwx5nnAxMnmyBGMtidxNVw1bkPqnMhNGidNREkqyrFLKqxUNEk9j8AtvEibmuJ2xSbZwvNcfPq7UpiFhjGGYL",
  "key26": "4697YXjua3CLAanByDA8K8FugHH4AH1KrLWRWbyxZT7iyyEGZvrhgWeFr8mh2THtXgi3dXuk3axCkmLGdSyTPmhH",
  "key27": "5k2No5TtcNfZ3UEZ4uazXqysRtedodP2E2NCbPRGkQvEWVqfgXbGkPcCo77mh5aayYCpMvBXCS3i1c44TNLKAuaG",
  "key28": "2CrEUz4g3eCDRTWmjBCMuPbZvrKGY6jgtT9QaqB2XXxTvnc823beSbB4RKNPozrrrCZYWU77aybR6uX7aGtUWpBh",
  "key29": "41sFEuvSywtqeUmMjkVvmrHVQa27edBLFVM6o2AC8brQvHVPVbCkhufeNTSquChtkhpC1BhA8isktTmd9C2Si4nL",
  "key30": "3XfxHX5J2yioQNgUSFT5SW57kuYLWALhyL3ZHQTft8Mcj4urMe627LqBctN4UavvS2rvmWoRHJnAV83o3HKgcjwG",
  "key31": "3BH8XAUg6DDBoCeaWi4ENvQjG2nF3bEkJWy3jej6Gta5e1TQsmCD5RezKFEkhvrAdyt25ZLdUXKLJVRjPiUFamze",
  "key32": "2JdWBr77yqmp1CUP8oYuNbyGaTqUmJZBEd3NVTfBuPxQqJ2BM69aqJnVDovyYQekbJTtj6AJdJLYDkibjnaMHUKn",
  "key33": "buBiFEK2QSNPKaA11wvut4V6goURDLgr4Y3dPACp6k8J8WFwL58UUsvBxUPisz2R5osLGgWaSZsFjwUyEyM198V",
  "key34": "THBuNUxwngjNS8NaCWSRfCGHCQA8D5nmxW5JjA1sLFQr74837AoaC1ZtB22dQ77Vs5fVy5jzKUv2rqHDLAZEZws",
  "key35": "3qwQvTZpKQ5SHzL9kiVQ4hdXr4SkvzQjGM8WFimyJ2ehrHKMUtHEy5doh3vbdEyf1ADwgSLo3dhhoJ7455DAU4QC",
  "key36": "2rNDmsQvVqeEmFZcxZddEbL7tBycBLLaTrDfACGjGmvEqs5qggjvHa7GCtKREKLjkDPuwbm7VtKifaXYnZaGiGy1",
  "key37": "3C6uCA47r81atvPyhHPViWb1R9TXCNnfCwko6xqUuk6Lx45JKt3xjmRiqjRiHCFunrm15JoaBagJ9xkviFhDMxMZ",
  "key38": "5hAYgcEGdTqVzMVUdMEqe3h6Sk3Wm69QU6cs8WnNtDnPBMAnZ8avRjny153pPGpkoJnVGWCvA8exiXaeLtkAxux4",
  "key39": "55jSnw7M2ZzipD7VvNjfRq5EhPox3BfBnvVao9tK6YbsXp7fjx4qBCEqFjPDuAcfLMU1MP3SmQvxRAsJqPTbK3QL",
  "key40": "MdKEXSByHyY9UxxkjJtiozZPKSvapQEPiU4LFTSMdhF4Uhbwvki2FLNeMxQN99gwR5nPDpEvZEmVf7ofMPM3nHP",
  "key41": "52dvehNxojsNXkkq9Uys63ewdoTMHT79xBRCNmXejhbJkZnks41HPynnKGd1yx1CwieBFCAfKjRac2aYeF87v5DC",
  "key42": "31YijhM3rh6WHAZJipwZbuC69EHyCPiswSLxnYoLRwcT3Bq1Uf6h7yXi3gzR65XcL2EVAdEQawozpnJiR7b1oniu",
  "key43": "N4oYVE6GWR75ptZUgBF4t4jZo1oNvFYvW5JKK4ehxV8LbRY9gusVbWL192tDosH9MG1WFveszkqALuBfZNS7UiA",
  "key44": "4cxzMXYhNWoBK7VLFUD1kCAM4pKVZ6FP6VVBiAL4u46ioPQBem5xaA6yAfDF3niRCUzmWQynWb3jK9xDspPNKr4v",
  "key45": "2B8kDjLcubZALPuKtEZNpRvcTUM7zJQLaiJZeku3smn2REXj2UWYHzqtfXbz2JByVo3Eh1yq2JcLkL18HzXxi7my",
  "key46": "5mpU6n7TE3vTNWyC6qxZXXEkzBcaViUZH781BqYb9fLZ2u2TNYeXwpM8HVGeHmLf25qeBtxaogshrddnak8ekMnW",
  "key47": "2vugNZFV8LLjV9PGz1wa2ivV9Egf2RGKdwEGUt4MQuwg2oWupBJ6XKiDvR9j8snwbfDTPghdDkigsx6qJfStUriu",
  "key48": "5S3FFYsb2WnGauL3rPXGzQn9krCnwZJJ5W4J5Zwux4kKVnJNS42xqFN6J38RUbPxNMiqpNohSFq74X7KtVeKJtD",
  "key49": "4RcaSPexJXBMXJ1jYdfK2VDYXz5mFz82VDsungK4BnHBnAvYrWnDYhX4xXD1aRs3NAFjxMrzmg29RBWhS4hyJLGL"
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
