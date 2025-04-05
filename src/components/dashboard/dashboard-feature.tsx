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
    "2U4SdL2wttugR1qTdHKrn17axd72nryvjummVQvSR7HLwivRbEQcechsgsgBTgtGgwSK2fQ4LagKkzpRict82vkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCUB7WFUPkBvGsj6jZte64bHTxkpYx4aqvwpBXqvcHxUTaMR4hNpaf3DZW1XmYPAysyrWpti8o4dhnZj7d8jzwr",
  "key1": "3Lgm7mLwyCoSdZvPHnRHBFHqmCcHV1FEfVc9caXP5AELi39osf9Cts7C4fBERNipbgPF4EKPpchZaYuwPxYnBWsf",
  "key2": "ojFMoUx8PsxyqBd8csKq5xLJCeTpZ1AR9QSxv99yu914kRpFaSpG1PNCd1kKdDqyjPHzDoAaECTQmJTbVZDMi96",
  "key3": "5CoTANtMBsHjEWKToxsQoxxPtR2hpTKHXsV3MJCUre1Aoqb69wFJYTC6SuzoPCGxVPCv2KPnXyKycvi51PimoWcu",
  "key4": "4D4NRxWp7x1wCJPL1co37puG5SCmkgBMCzW6ZmLysT1yW7gk8jBeZyFUKsCY7RGkR59LAqTFHsStAZUBeqyGUMwX",
  "key5": "5Ho2iy5U53Si6ah9SgH53dDtPKAnXexD91Dp854b1VMnunWEjstwQBrTtThFg4ZwE41nUe8HysKLCpCuPuokKiSQ",
  "key6": "3VoaDRhnEKhV9QAeAhgtkX2nLxWmvDYRonMhLK395WgE5qCP2Z4bn8hYBsxjfN1wm8hXgcNHQvJDqoGAPX9k7KQe",
  "key7": "jKmCi27eiBtquMj6CV1ATJwoB3gZzgui6C1ekP8WGU69Z2JfHSctwYdCY1KM2WBSFrb4PSxeYydP6fQYaiDdTyu",
  "key8": "2XHNrCuV7v4rXC8Df1YeuYBE6hF9PfWA8orWxKsxvJZF4qABJgyZaPryq7DxqixgzpVAGFkmxJdo6CbU5G2wNcB8",
  "key9": "32Lc8LyVS7BUPvWmhiSEttH1VzcpB6psrGSCESrTg9i9KXvydtFegp9YCn6Yfv8h8teTa7Eav5qyk9pAnyTJm9nx",
  "key10": "3M4PtCgJkoq9B8yLwXHjMfnz6CHnAcyw6kFR5VQJf1WoPq9F9RtzV1HDYw6z8YgHtUCtnueZCNi8WhjeJKrrV4sY",
  "key11": "4jcJYAyCCHSe4kSUGk5nrGmU1Z6qiJVCH2S8KKPEouwSQnZ7Z2v1XbJtv5r3gBfWrJp3UgBSCqPVtHRjiBb3YZem",
  "key12": "4iYngAGmF4A6YSdyCaZR4pLvWaxYRsaA4k8LdXtisKuNe5fAZFp7gdv1fNMMSSvYCgzydLyvJjSQx4EtaEdJiXah",
  "key13": "3GNehAv2gubePUj6hCX9HSRR1gwQ1QG5G4jFJ7aANzUynTB5bGzwUFSFqjxuKVKfR83i4ovDuTJoUbABFcpbqhs9",
  "key14": "5AF87E7jYEk3uCzRbDULvgUezsHKqkB9Ji6AqcDKm4zykUwRW2CVbf5SVmiBjNHJg7NWypke4ZsGyv9eTvLBmNP2",
  "key15": "5MShsiaDhYBi4VYY6iwo5P974Dw6u4zmpqC9GzkXgJMxN8BdkhNnzghMBUBkWWMvnjw5NxTC1NkLar2eVh2EYS41",
  "key16": "4guvPLKJwhMvjAc1fn73xMZTnE176F7qtZPmQg9zNwmcBQatmA5YPxfaoTroEoAGtoeDwy1JPAK82GRQRRuTJ2Hu",
  "key17": "rJyuiuz9qB9dw6j1LDNscrm33U9221nbHR963c1KUSZthVadhcbxfcLcMUKxvBEmsxHBZUEFaqQ7g2iXCZD2RXq",
  "key18": "5Qp8Gq7nm7f8MJnc18LXYnwt9hdf8gyaaJoRGhZ8Q5HBCi2QM9QyUdLA7U3Fn1Rnh6469Js4bWkoukdq2bBWGYDQ",
  "key19": "4BFXUa6KbkhnxhQHmvFkpocyX52E7je9gVLCeovAUrVJffSimFsZpMwoBGL61RXmbD2YtDCcQR2SzEN58nRwiVBF",
  "key20": "2qokvTsyxbstYoYpCCctiQHD7kUzPFGdygXeX1Ep2qKhvLWCiZWbsryLnfVYSXK3h1EoGkXQC7HnJSRJmuFx2MjJ",
  "key21": "5WcXjtemWSAqft4iyFiHYGWr8Q2wCGXqy8aeqFPLkcQjGVe1ncDxUx9kSUaGv7HSRYaqGywmDhDCzwuNZbC7CpXi",
  "key22": "46Ec9w4TUucKkDYAd1WjpkAjmkUztRQgTDaATnPtE3w3NntNsdN33n5spsGs4fZB8pBLixaCbVg3WmU6ks1RmHVK",
  "key23": "4Rhid46d9rQAvg6A6vdX9b7W2N7qik8iCuicG8xtH6jfXWU3yQZEzfAb6pnuYYD5xKQKAM4z1GpucNGJ9EBkoBJU",
  "key24": "bhSb6WohPfrs3c9D9jnUQ8HxH8Ugrr4pfYg9DdkYg9GrXG8FM9CzgpKsNKuwW8LsoH6CWYe57jwzEt5UGissTVm",
  "key25": "5jHX16GXWs491sFJgQm7wzBxsyP6BKMWBwfVbhj4NUSgb1dFrwao474RS5NfCGCtYHtvBjJCug6ygrNwH2kUVwQS",
  "key26": "5P9iHwtm8yU8TaHhhF7HxcqBVFuSCnjgNfk8ChAsGrMSEonxTpiM2wdFa8UR2ns57chi1bxdKXwxfRPHU598rE2j",
  "key27": "5BJYrbUJFwX2yS2cLQetAbhJGj5jP3cGJFYsiHdJBT4La6taiN82TeG7SBbeokH3VQ7vjui6qpGs5NHQij1dDy5b",
  "key28": "4trMSKC2uWQLbRMeUYXVPNDShPNAKKf5LY8QTqk6RTsMSoYtQYBZMS4J5yU8pfT591h78kto94xdnGKm7oHKXKju",
  "key29": "48pXPQgevSVEJHvEe469ui2Gfs82aZE4zGnnGyBmYUpZuchorX1pkhhTBYcjoRn8W4tPiYU2jq5n7u5dVpGEj6Nr",
  "key30": "hTUYUDh6MPLB1DwmnsDp2vVrh6DxUkDToqWfuzyCZZ4XDJ1bq3ah46nv6XbwP8RJm39WyDXmRoo7upJ7h4X9kME",
  "key31": "5NLEvFAwweDR1C2PMzwtf6aiugP47wgUF5oXtD9DGbJYkjU6ufLfJqJir5m6kwbsViggPGF4dztbrnFozb6XkqcS",
  "key32": "5GtLrySfLqmNZj4VhJj1o2dvZY5RDQf9CnVGRhmBuBMnKHUaZBwEk8zdYsep5Jb21xnPN9DcmXPzk4m1ZyR5XQv9",
  "key33": "FY3XdgNoBk4c3X4QgPxrAnSG3ghfKADBoWmybGFM5eFcER8y2mCh3sJoR4ddStFuz45gkCxaP9xiTnyPwRA5Ch7",
  "key34": "5DAEaWoSTP4hN2xcmR2QJ1K7JKHWKqbQza4YvuDbSVs5VKrabkKwc6mo59iTdZTrRmL18gDE44ZqwP6tHduv7Sjs",
  "key35": "5c6wWZCtjep5xdyhnfE4EiWYbMYteBCqn8AnKm7Qai1uxRLJH9VqnCNToqNuVQCs4HB3r5x3u5htQBM4d4ttSsuD",
  "key36": "2gVZr4mb4uNYtsehwzv8CbhtobCCtL1hJfq68YLZ4LdH9UcrUwY1qbwrxTaeLvit2aGmXjbQZynAGeTJNWcvWXzE",
  "key37": "jGGNjMZHLj5AnJ6R5RYZ8Gr2ASzXNFumn7FF8zDVhfMEiBNwFzpsvUb4o4AWLhkCe3TSPJNyHE7VoQKFnYH1s19",
  "key38": "26tUqEahaRbi8MLAatWRYYAGRWi3pFLGvpomT6Cnmo2LgPUPUF6cN9DGueXsKfVzFY92pESvse8w7SRRv8Ci2QWf",
  "key39": "52Naie3oM51gLXkhJwBVAABu5x2XKBmBzSYQRAdFzKS1AcyhAXTxCkYgCE3CmQYxGoAZ4med9T3Ldxs6yes1SjoV",
  "key40": "2j6LYn7iSEYLLztsS5cshwQZUxZHtLdyxneghzoWMqQoMBpNwVdLDDLNctCwZjSnVeoiKjAkWH87oCYrfMU4JnXy",
  "key41": "tiv5irywhX1axSYcVc6QMvacWSnnrqhapLCPC8AHLRJNbmSFoLh8X1YX8yekVXbv51tPqs29kQfoLqRZNoK6fJZ"
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
