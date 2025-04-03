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
    "3Ev3CRUtaWM3BhcWUdqs1DZ8vKtHv43rvVPa5e6o9R27YFP5aMqhNGfzPX1zJAP2nLuksv3fjPpfw5ccEraK2piH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAbq1L5ZCPGSbTj5PX3f3HJuv5j2Zw97GAf9dAW5skgYwypaPk6UrPMybdxkBYbNeCwSgG8bpzvw9zdrCaKEaGN",
  "key1": "57gRPjKRtz1Bq7UijfeWncXv8XvoB2KjpfQ1dETzL9FwTNQ17U4EVx3JUN8Gp3nEnQ8dD7A5TrcRLGFeSEWNZ8WM",
  "key2": "5jQuTv2HR1sMSDYHDJMKnjAqkZjpWa5ER3QbW6WPFB7sMYEnoRoCr1GX17ysCQt4p9QqGGk3EAMPvjJ45SCpqyzp",
  "key3": "4cxKdw2FRCcNtDLSeSvobihw7MtcgWD4iwEHBMS9UrW4C8U4pdSZ1K1L4kRYy5Q1J7doBUfsrcUdKXQwXaxXZcGJ",
  "key4": "875ywdguK93nBLDapK949Kbzxv83dBbmGtVo3sJbfx4TNpmBUyjFzzcGa1RhcBkzT2BeftZ6q1zDnTSeMdmWbK5",
  "key5": "55LUJUU5VSTFkb6gEGV6zkfecoDCiCyVoxz7i2pfoNf23xx5Gn6ZcZrF7k1Eaac3G898cfvmuCY6C1d6nkszPeJX",
  "key6": "4AnzjyufNjCUrELex2fwKD2sPQPyE2CfNe6W5Cuz5zTpRg2NDUf4euAhPVC7FamE2J8MVU14dAXpzdU1Kdv2EnKN",
  "key7": "4uQSaiQerYi11jEWiw6C6ciQdYcFqxrbDGcTK9uZntDrbwo8LoTZWswyBD2tCVSJs166qv9jhF6Jzv1DkxDLXDkZ",
  "key8": "5Mwp2PPYmuC1xj7yVCUAxE3swdHN87DkTau8TkjBTfr3fsayvrDywj8HmE4tdhpjNK8SvpjxjwwpTwhPw3HEyKWr",
  "key9": "4Jqj3Tv8Eg1HcPvQw2JARKEeSrSugax3vsPuxf5oejGciuZgF76R5CX2gLsWfmmy7YmNY2iL7kyb6uz73z1abvVj",
  "key10": "5RcbgK8PNzkWVVxjwKkZYEx9pjotVPoUtKAeZFdC5wNxN5n83yQ6DkxLwKbTGeQjrZHxW8vU8UvrrvnDbG3Cjdct",
  "key11": "2bdVnt8SvC6iVLMCNckCrhgiVyPtjrLi2HGCd6aa2c5MsyKU6wmxf2638dCjswd7WEPKfjrEetHhVLt68ukCCES7",
  "key12": "4m7m7XRbsaejUCdBH8PeiGPuoTgDN1HYU1aYnPfFBgDk1hf3YXdJ1tM71nPbQ8PLGtuAzGACJJ5MjWUviSAe6qk5",
  "key13": "4gs3SwZDm3RbKkVdeSjT2v6NDzh7R52AiZxCB8d8sDQBZrX9jQnZgo3BJjgN1Q1c7uU26WWKA84zhjA2F3rEopQ4",
  "key14": "K9fFvuxUrVyNpu29DoXhxHxFKQP4P9rKx5G7Aa8RD8gKU7w4L5jdHbqXhDZu5oxhHRbNu2Gss253fKNnB8dcZwT",
  "key15": "YtbSpsM5sHqi1zsQ7EN6BVoRixnAiHXm1shbWdxi5aYGynKjE2Jt32zmSGkbm5hqLhBQP5krvDUzvRFu8X692i8",
  "key16": "3MDmbArWyJ8TYM5bRSoe3u9ngBgLXUMGjZjbJB7dgeEJJax6PEFZBYnUPWTNkqe1ccgwBYQxSx4xMKi9GmSr24qM",
  "key17": "4t5iAWuxCLDVF9MCT89ouDPytN8CqUk8ynXPCAw1e6UBaGNa1MuWYSNqet3HDmzpC3BzhcoDAyJFHSREPHwbzVsK",
  "key18": "3hoC1tLymnMr8rXdcaycrKjRujGo5t1xWMd2HmuAmpxP8TxAdWxtSJNDXxkSNJCZWs79KAznA3ev1GDKMWcAnQgi",
  "key19": "vdNxgD5zE3Q6eqGix38AYuSCG4iU8hANiKQKaNXPixSs9R6a2iAKKrJtZJEeTbjvX3M8AymwMvDfdocQDHpQryF",
  "key20": "9owdK76R5JUJg59LqSiFTn2qikZGKRMciCLDJ5uibU7m3QesLwnn1atPB4wWinrkeCiPo9i2RmhoYpCkmvgfutA",
  "key21": "5cayB9aREcXVTQnTp7XYaKTQjsTWiyW2txk7mGcoLvqPMGYnzXS6yBH1AMoFvs7dUFBBFqo7M6w1DNpBxQA2Er8p",
  "key22": "28k74iT6822x8kUanrQQ8ZgJAUneJH4pZAx5Sekr7ZwtvRft8nT5VsNF1VjZUM2XKkt77XMkgtZN25rJsDX3YAfK",
  "key23": "5Zp3yPGS2BnPRVSM5SAxLFeuc28UtSY2UmkDfp27vx4CXe9JdD3sNWyq1NPkS7pJTfYsmBGErTX89r2zphADFqXU",
  "key24": "3iKgyLWkgJDJVtd5nxaRoWr4B4oZ7Vf1yxyDmeRN2pEiZgrfX6Xv8rsmxCvmPEZPff4spgJvPLj3AWW8b79HM4WA",
  "key25": "32NnC5xpMeNW2Aed4etzcC6rDr1YfHmgQHjQqkWaQqKCqUTp2H5WcGFiwscpfRANMX2GWu2dET3P1jyJSmeb7LRi",
  "key26": "5NUzmcwXw8i9umv1s487WSF56PM1T6VtAKKbUeGYQXX8AyY9BhgsPCLokHqTSUcSoKZYdYD82Up1rZxGeXZq9sJ2",
  "key27": "2fT975PyYER5ZXFS7GxTtVrq3d6Z55C3aT7kcJEW7hYpGomvboZbwjmGJBMM1S6SoBcLaos92GjrXdrGxJiWJ8TC",
  "key28": "5Qd2yAQggvpdJQQ5wkoHCeStfbt66jUpyw1LBq3r7QaAuHR4vpmfzAF2E2JRNJns6siRAajfodJKq8Mhkn5KqSP",
  "key29": "4zFFjuZfxZnTScUsCZiDBUSHqDyTGBtTmp9FLbi6WLyACAYNauBBqXABuVgzkTvgyxhxyyHC1SWViNE8wuDVn9hf",
  "key30": "2cqnXByqiyrkapx2s2HfbzUP1dqo9ka2BpAQgRcQU8FnZDKqvaM62aopg9yuuKLNS4RpvYQYHsLQBLurq4cyUKnZ",
  "key31": "4KtmPaigR6EgGvPrysycG5iH42th9TPGLGP7DWivA4kr1AyPCfjmPdKcBzmWqCH1nH1aqA8RDabanKJNR2zbgKJA",
  "key32": "2V2dVfmBpYby1LjqS9cyvgqnonpG9afz49XWEL5W5hjXZPPSza4VNUWeBdVEvwHab4YmnPQtnSch3HvMrfYio3y6",
  "key33": "27eY5AyS2NEyHcaQPv9hYCJvYwEihSrA5SMgiBD48mKnk6YXkFCiisUYihtJdLwESme7wdekdFaoJppMe2LRkqDU",
  "key34": "2FdQWnzvKg81ZJ6JGvaBFXsEu4q5mXxR8wW8LmXpqjwVnCmueR9MQyKSYty1QX2ZNKpHSjDgJUYjT6dJqwS3HvuA",
  "key35": "3hmaGUyaLL51mMzm2bKUXF5oAencM44zMmJAgsGymoGc9375AoaAAtfMHikBVt4zSu4qLiDSLH6QcNDFybGZKGBi",
  "key36": "WNSBfSNLuSdiFWFQJhwucpH7Cjz5U2VYAj3edQrrjWztWcivcRRAh4Ws5tS1ByYs2CxGKJi99839TuVSjASTNKX",
  "key37": "5pCqFVj9krgVwZvh5QqaBwQyRGcpe7VRDy2UqwjYwPquBsgbufcTKU8tGzEHy3aTQVvp9UfbfdLdv3otYHqj75Eh",
  "key38": "PQHSAkPLBw7aLXFAJhiyG2Kn5sMVtMwf6GUcFaE3gTemkFweytWW15SLi4SnwP2JU39AqDhDKVZpksLAMD3Lg6K",
  "key39": "2EqGsw7vkJGipuu6nmfacPQMH1vMdV8CkAU4suVYGMVLmLNs1vqouyxLgN6fDQdAbhkTa12tQXfADq4ork1wWpwb",
  "key40": "ML7s2nq6GuiYsrxpTEqWeTefhHsTdtznFenn6DSXHBEsjn6GcdvDWtQgiFuXWz83cmZtvQorUyrWVY2GRgAX46g",
  "key41": "2W4ivEr6gVYLT5wPoC2JsiqJiQ2AKAuQAq59pYooYCFs3m9Jaw5J1xR3X2HvvJqk5o4tdzPXcs7TDR6UsEvZxnMU",
  "key42": "3ZUX66vjk1bxPhCQaapF2yHvMHXEPweMFbHXk4hw6WGKtwcum7gpD2cQWeZo3n2HKM6sTjiguCJbxScuDsXatNtz"
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
