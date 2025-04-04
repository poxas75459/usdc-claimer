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
    "51YDVTjwzTfNTi7Yrzke48p28LgVfnqYYXmFq5G7oBmfXYohGDBKNBLLaAAMuasRNvifZYxWWbcaDKeGxLoGKfDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AoJG4xKDXZ1kAzkUNztyWmVwNATJUHsjxRtaZ5C7XG7SVRzJC7Y1wc6oWgbcS5YXdsr8HnNPqrjmh37gpmvqH7U",
  "key1": "2tbnzu2C13buRz88tbdEra9Rk8GiyU8Rtjk5Mwao9SYbbTBYJkFvyeRJPr553AEcFJ3zT561aHuD3f9eQuTo8mRP",
  "key2": "3aAwnCZxtxcU4rKvXYGm4vE7XLhdnKYSCbxsnoNHCMBLjKdKbhm3NsGJbCifMcS3d6Ta56sWSh7b3bdDZeFWYTAo",
  "key3": "nE36BwaYSDGzriyUxgG3A7qZAFwhfDHmoMdx7V2yZ2n3znHVefNrRoNmTNLHjWKGwYsEminZPT9LpQV2uu3GXwj",
  "key4": "cdEBVKY34BGaym7eEdpwk8smQZa9gnMtXbk5sTW6h8xi4Ms2w2WQPW4mc1JXBvjwvoY1YzzbCfdExfh8ztGzjut",
  "key5": "466jFBW3rCTv5sgGzHohBfCxzgXBAvD36X6WFY2D5VPfyXUpQpCdNM6HSb1ck82xrGfkFQu8xwgPpTNfcsb1nR4Y",
  "key6": "257q7FDikuXTdgtzd51TSudR8R9eR6YNVC7o2BRyfjiSoVmLjFHNjy2wNhbpQARvZMuxzYKwxEyp4iDyQqf8anyn",
  "key7": "4fYiREGsFvu4C4A38VUkn5ZKo1YChq2nJX7U4fhPe4HiN6qSHp1S9uvy8aAqdaweYooeqgJyVffukRP3BW1KHhRX",
  "key8": "4YwaMDehkHT9Lfftc7RdxsmFWYc7uZtPkr414PajNCToQxov2sDaT9YHE7Mzf4GFKpSXUSKPvaLPoX1wcaSLWcGX",
  "key9": "P9c6KFiDg2T36k5vGQRcAyocwSHBSwiHt6ZmyRmBnyCAJ54ZPqpyMWxfRQTqAeKJ2m3vbkgkTzL6r3AmnHaQnyK",
  "key10": "fQj91ingxJzuqCQzDLMD8G4egNUbdfzZYZFfzrxb4B3SrKwE6noJKPC4Vf4UbCxnzr13BPDFpheum5Wv2VNC2Pg",
  "key11": "irhP7HhpJiKwBUQhLXCvCXwAdyJwgo5PgMFWRmipBSAiiASRu2yRiKUfXRWR9hnUCDXnBYTG7nevk5oqxA2GcdF",
  "key12": "1NZ8tbzToHwBMKtzNudgsyHj6WDToMrC1Wd5SpbJjTk9q7cjCpWLcNNuNmmVg7eDYXzxccYY9Y2F63PQHAhJLgN",
  "key13": "4Lhny54dCErveZgmEq7p7xPuFNKJR3QTo7mT1x2EAS3errYjccN8zvWTi6P3LeAnjEFsbReUyh9Bkg2Yt84LkMov",
  "key14": "GvyhMaK7CaVCN2oqjrBQR5Ye3gsG8whGNEt7Qao3cpunTxEJjoRU7n2y6gVYswS7r7U773LXVtY7rGgaFEbSj1R",
  "key15": "5MNcD5XpRfoEPR44MoJgsynmmmYwaEPSeqSEwQ8rHr5JyK6dLkMJ8Aj2gVSpkn2Pn6W3HFSmvsdJdW2op38pEYTm",
  "key16": "3NTop3PAXuSsoZGQmhCWnQ3m5ZEYx2qwonc95nUmFyRPr1ujDCv1GvBDEW56zJf9axWQxcAyHSgkjpnLPHQqzgaU",
  "key17": "2ZtbSy1M6SBW64DmmQozG3AQrAs1vJQibxbRvmCaW4JyZ8Ub4zX2TqNbSu6k7XjsyrCuYi6D5edXjMfKvriS7z2W",
  "key18": "3DdMboukYsuFvRBSEmJT8vtvXfiKMxkXWrY5zP7aTRXXd2om7GDd6trw9j3phUPeyRrBMUt4ZFoKBkVAkWmP2Zms",
  "key19": "2qpJQN4RZBWFgHkqs5Cu6Ji3J4ywX6dKsXBRyZe5YFfP7YQgEWRVKoQKdR8jXj6sXngxM1rnVVNhue3HiBf3CARZ",
  "key20": "5gmmxjbJ633n1uRcTwQcSvQZGnnf2h5duYehbx8oiqobigHGiXeS3GKmGfq6knBUurbLD4M9nCLNz2swoifHeMTJ",
  "key21": "4VKkiV3U9V6v6C5xyx5QNy2KctiYTX75Lndj2pbWuF35oJrZ92iC8Te4ZA5sCkSs9g8S1qaA9FYvXNkHzsGrvUpx",
  "key22": "2vNqqKZb3iFWHSMnhXK4Kxteq4exAWA9nDDSy7mFX5xEsaKjmC1mhNUJrnUCrW6n1uPAxyVpszGiEpVFpD2NG1FD",
  "key23": "5wETGpqKjBuApQ9Jz47TP1PGnC86RsN82q6GMe6zj2UheLB8Ct2xkYvR6J9649djfXFHnxQnZmsxZi2QC6EhCA31",
  "key24": "4rq4n99B3aCYasjPJ1wTFmDxLLANSTcKoMe67bKhW6Q2724vJzDM8Xsr393aJKMUgz6c98dhVhre4hXJaE6t5C17",
  "key25": "4XQrzjSzUBHQAnaQHoB7T6i2WVfqTGhLdXFp7KJ2BFQB7ok98WLLSX5r9ZktqbYzRgtzPbvnCMESMMBiSsY8Lrnb",
  "key26": "65y1tH9H2QTUbW2HxRiix6mnzgGmHim1uxvAdCDhmCaV3Ci2sAQFzrNgviMgsNPkVnhMNjPJoh66i9apbfgdvfuY",
  "key27": "26wBky94aCvYYvmqt8zEbm1uY29iru7gMQjF5wuLtnuSLkUPtqpnsdjZb7Da7N7VWiy276qW7CKUXKjMd56jVSsJ",
  "key28": "3RgyHrJ4ecbEt78PQViQWky5UTfVFNhEXw74enbsHY8YNdoM7DofyjabKK24jbSpUHURKC7WeHVS42eUYYzsoUPk",
  "key29": "i8FQVK1Cphu9oU44Tfn2cVT1eqmYvjgYU5kY2pZSfme97L4oYVWQQMmjnwA7gDoU3XgD7DRuXV6Z3NYWXUziDJW",
  "key30": "2N2hBwyzk5zY1k7mwDSKLbcHx8Pp8vduZokrpJQUvPqa3BkqrK5NpDnaddvr4JH1uFSXGNFF7PcTDN6hNWVJrthH",
  "key31": "4m7ZXj2wMT1Lp6wAxMqQkRjom1T5vusMX7wLeqWeBVEhDo9x83vCC4Y8CnXXAWvhVhkJHYw4on5ktDe4VFQaYXbz",
  "key32": "HQfT1YwDeU8tx7QzDHZi6YN1HR6JyuGiPNAvKvkgMPxcppmqDhvpz2qQJg5aXikf2YMYScEUe1FJyfQ8bhrd2nQ",
  "key33": "tBaDpwFGEhtjQCHMChbJsFimoXpXQMtVURdXoZsDjkc9YYXaZM73EJ5XpUWN8p7X9ZiDq3FSsPjxBBGiLE8tkAK",
  "key34": "3J6mq9pg6n2eASFEbzMZu1UfcdWdeaGWdwgXSGxevAgjNp2cZcJbJKJkRpLW5uYz9u2xpXBUiGKq3GCkqLWuzic6",
  "key35": "61BWi5ezG1LQc2ELsTeYddgawpFbanpVx6131NMuUABKcc41vaZuyTUcgfFvVktzVvnfNb2unVeo8ToGmHknroyp"
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
