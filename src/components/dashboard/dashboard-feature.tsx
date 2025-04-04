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
    "2kFPpeUEWA8tpf6URMCJ9UJPH2BFogEiPig1mSj89U6vYkUiv2jK8GLS3TgLo6B3SoHYDpx3ghKCcL1F6YrioSEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3as1LRdNLx4EJXhGFjU79S2csbbTantxrQ3DHoQf3rRTbaZBSEbfUBTnnDhCuA3evYwLqiGpoimKC4gShsTP3AKS",
  "key1": "YZAULb4ej7hGzyzcjrG9ECrNgxt6Wi7ep4853J1hxsLpv8RQpXiECbLWxadGiDEKJvAh7vzRMuQMZGQ93nntLNH",
  "key2": "45SmeLq7oUjWJeBddCxKv29KmomeYzzRUogTXghbNJve4F3Nk1LpFKTWJRwcTkPmuW4oRHciJHturRPbpGWRMYFi",
  "key3": "53q8AxCyNoNTqBkjxAbZzy2aYvof6Ne8yZMmAzZ1ZW2hH3RkN7TFNwd4ewThFY9janMrjPnw8QpXKcyjPtqp3D61",
  "key4": "4gZCe44vNVig9w8SDCzYndEj5xF2wiWAkYoGdXVPRWajNjtk4teUWuzPZMGqrPV8vJn5NE9rAfs29j4GmQRiT5z4",
  "key5": "2JWfeAWaPLVwCwnDtAaeFKbGGp42E5RB1YSUfgwbtpyCwfYV6XepBPA61LyRdzzgGDXAsRy2BkZMBeu3iT3AZ45W",
  "key6": "5uCZtpMHj5Ft4xbL3rXM61P2D42D2AeZLhtvWoPZueXTZXhz4nNJ2ki5DnrjGm2mGmBL1NoiwudcWUb283zEz6Nb",
  "key7": "2CcA1wQjZ1jz9zbiSULeaAp3G7Fbmo6588hQX7V6LAequKpb97ho8ysoCXje7hoo9ah4dwL4fHZwBQU4gUgYZJaJ",
  "key8": "2hJogF28Z5fJbZNVTfwmjjkhyoXRWXwr8MiwSQW1sqFWWMWt6nDDeQcnmkNbA66FcDAkXMvp51xYikPTPxmLUwm2",
  "key9": "3wNJVHhLDpymvSXjXbozVSu4DcLbaGgYGLqq3VkaLft3fNsTAbxFVThebPPdUv5VZx5kdPJPEYmd9EtfMvhfr68r",
  "key10": "2Nc7jrSHPXoPK9aw3ejVdPcBqjqL7V75buobqBJK6tMNLyi6StWcaQoWxMDUoxfrQ8ymnMCTDaswNw2222eBEivU",
  "key11": "38bM3dBLyndUhjkB5hNJ6Mfcpr7Jr19XCVw1grEp1Ab39vzJ7M6qhLiCsAFcZUgTbp69FC7T5teiqmL58qeZUY6x",
  "key12": "J2JBEApdVXMaYj9eYPUtRHLvUTLYoFV1rUgLBz229z7PT2WbHzWFaWKkNdn2j4eWvq6StsyF8bf28LQEv3AhoUi",
  "key13": "3gnzuqvdhZ6MpMPDtezbm5yWcqoTKdzu8AGeZspMqufMaKHki6jvGpb7kK85A4XDVEZN1NbDvC4MkMKpTCKdRFAS",
  "key14": "5FLwwsuFMAjMK6RfMmGQzcdTJ1YVcAZE7whSgXRPtAuLNj93mTo87YaL14kU1BGPG1EPcWd2dsFTwK53EEVUZF9N",
  "key15": "4UQ21PM3ZuX4NbmiFUx5WGF72oe5kFqoena8nUxD6mTRiHF6e8d6Eh6zTWTDJd6ARoieFPH2zbdMf162u67vCi7g",
  "key16": "5XKSVDXm3oLAKWkRmrrhyw7tic5Bxjt2VSyjbnrQMdeDJs6WidsronXQj6VW4rG7QWJ7RgBrRDj8Em8T9TjaXMVq",
  "key17": "4vvAYkLHjdAEGukfDmiwfojUh8JfbRQBVSgXKEwbd1ccUHjX4oaSLRGRUZVKavdKuCA3pfvYZienUPTx1ifgQUpK",
  "key18": "62EP1sremweUTwFWEP7sxfvGZjsMNyy3qDf6F4DzdNCPifCktzj7jHUhurUh7zCUFWL5BYHeHdRBtBEK9VerCYjk",
  "key19": "3mjndMfEJsrt9vXe5cvxjM5LyrJDdns7JJPk8QcMnxu2apy4LtUU7GtiAa8Ypacgg4k2XRcJPw5WyVoAMxCWTkH8",
  "key20": "3uQuvX7bcHKteZNQrQ4Twe32gEpw8v5oXBuVSZxmJpBKN7tL1AkW8mDkuSszUBvb2ZBHdfr9b8aRzNm16Le2UZLi",
  "key21": "3g7yDFG2BN2KJBfa2pdF8CUaunggA5E3Eh3Y3asCU6XGzdDfLj9JUM9SLHWHpZAL2qcupbhSjwkqhc824MwNsGB9",
  "key22": "EfqG3z9u2f3YSrdbADpERnLXxs83vKdvDFzTKFD97qS29weuDoHVAwTCZLnHb5z3bwbKX41pCuUqgWivg9mwoJZ",
  "key23": "2gXr17GbXy9PfSfuEqH3dvm8RBEHnDzAQ43rB9mYRfRaxm7PoCYgCKYjKnZ2CVYgSDyv3hRUAgRXk7kZn81UnoWU",
  "key24": "zkd2ecTvSSsy5KCb4HAkDfZna4d4Dmk4GFpTkVJX1mJYNLTbRmsYTALHwTnULdhFdrf2KifquWe3rpLcLbws7ri",
  "key25": "3T9BqqxkZVH5MjrNxVdanKfR3ektoFXZFAqUUJzLSDjUa16tw91iD7J7EVfzGsERtvC5cKsS9DPT7a3b29BteqJo",
  "key26": "24E337ESz3JmjedbGGHSiL7TcNGGL1WYD1W6oWrLvT21xXFhchRKw5GR9J7WWqgmzZQncgngD2tEReU5MTaJi4KQ",
  "key27": "4WPjMFiiD7EdEEqMjxghqj2ejre8tSTqqTDkJEfLwjuE4zsfD4Aw8Lwm3buGt4D2oiChPfkQrBkUYNCPzERXXe49",
  "key28": "49c5hutKnbW3EVLcndnwSRqEnzaGp4iuTtxppTnK4h1NQ7J67v5P5XbjEovghpAGnDQQCTriRQbY9PYBrm8g1rw4",
  "key29": "4cxFKgTMjtmxkBPn4RxfZ1hLnMr5Z59NUEfYZPC4cvB3wcGn9teH4XVHM4xYrrUHpWUwYX2G89g76XGgiM5bMhmg",
  "key30": "4AVgbA4os9fP8S4JpLKmjtUqbxf5fTjjcdasmg8qyTuoFHxVqggRsY6kX3MyS7CcHbJ3TziXZULTydERJKM9mojS",
  "key31": "3keoVDVma6eS9462ujKggeR1W8bpPz58MhEt7CpMVqopV9JYHvh92Yn1MM7pyu6Aj1VNKHbhWUggYYXEXVYpq8tT",
  "key32": "3wpSxk73aL2Ud4332Zg5XEX3Hp32zbiyJ35keRQwv2CxC4d5auybrTBSEnV2G4SsVhnNPDesfq8tbbjK22chXesM",
  "key33": "2LJR1Tar5VQzkGVfin6RHXVvn6oYJD4pZT46byd5P7XnakV88CNWXzrgTqohCJeg6MKZsDYrfkgSBYHe67iFwBYv",
  "key34": "5Rhx7j1h1iViqA6gJE76oNetuRVEGkVFEoUjtYV7GgEs5dcBAu2hDRPAT5YxGHE1BJyjLU3GJ4hGct86fJuTFutA",
  "key35": "2aibPSqMfuMyftjznKusaLMqE8ZqYrT7Nwxstg1H2WCtQ9Ryrp7FcnVzvVitYQx9ZqSYUkCw4Lik78Wi6mqY42bk",
  "key36": "64SCkBqnjPe7C6K7SdLY3j32rfExYh3mjqU1L1mFzy93rXXsgf9cFnqeu6LLSVwyXtFwuw5FGmbN1EGNX3R8cGxN",
  "key37": "4jsNmj5Ya4h3di4gEJN1frSW2L4c8GH7TVv31tyCnqmwVyDABwdNz41eAPffncjpfVMLcXyyWTVTuU2kM5HX2uaj",
  "key38": "2NxvKivouFjrR3mqMKEjr77LahFSsxLHFxkDLpD5vdKjzs7uLdc9QbsuRdrqBaB83k4ru2hEZz9E1Gxt7Wt1BxLM",
  "key39": "4xvbPddyw6yfZamsZmXyrhmMEeiUFRmxria2cv9pNGbqV7bHhN1yifReuc9hJsaBewrMRcBLczBLkZ78XBq5Wbth",
  "key40": "5ryiaqrHt3NAgBWAjEcio1i1192SUhnPdnS2DLagRiVH3djgtCpj45BCZjuZkN8iUGtmRAccDWueSd54Zoqcqe8S"
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
