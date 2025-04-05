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
    "4wKuZn1TKKN1DsNxgEWDvXuFjXBTqsiUptDwH3HuWDLkz3zhjdaysmVizKLaCwd5xsms7pcV9u2pQgCehZshJanQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTXYZ3cz2jf9QUkHF97yGRRvEPJ7hQC7M3mDPfUvq7NJKHARh3sRhB74PZUjU57YNJXz8Y3dsY2GMbZx2foHWXL",
  "key1": "2UeLhCYhNhUvZkMdBCXSe36y3dLWxGHXMqkYFnohidJ2FXnSc3VURvAGe4ZgHzSbPEFhKLVT4SC8VkguV4qb3Q7P",
  "key2": "3RyeQokW7xkCdVGyHrYLZqUP7MekRqNGobpRhjJo3yLzvLUAHeQKN4qFEQ8QAMftdMVRUYeL2XPr5m1tRKNwk1CW",
  "key3": "5EZsBhJFmtkpDam1XvvMyXHob9uafZMx2nBTMzt1AXkB8mjxcLCYxQaMwRgjXKEKpDGdK1yS3fKHKXcPkW5yrihU",
  "key4": "4At5s7pbZzmCdVtzyPfSUp42YsQXJhXe4GHryK2pTxVXPc8327QBVFFNCYKHDmrqyfJL7a4U96Z9VAYoPidPy5Y3",
  "key5": "4okqhwwkg8aWU4T1qUYgzvAWrHhUxMCbUXZtpMTNHywFuVKH1kJ3R5rMGoEo3fadNodz8VThMiE5MfpKLfjzvdxr",
  "key6": "253Trw1vk9AmHQBZFKYisopjntBWbB3eCt23sEhuyA2mWz6qkav7sRPdvtirE5aqVGvTT5Za44W3kZA2SJnhboEp",
  "key7": "2JwkWpvCUY5vafY72g2brB1upiCc9g5ZnJFFVR2QjAZq5LiRFB12ZTUqnqxNxRLiFE6gLVPMmsmjYVD2pwEVhgZy",
  "key8": "3KJk2LG7miamadC7jHf9YWjhYurvCX3NVVftvku1CPqpkmPfmQPraLt1U8hXcWnos9U7UUXHixk6MP8vT3XseBSQ",
  "key9": "gKiVpXM33669rcJyfWXedAzTgaavyt5X18o3woEs31EWC8aaxkXkVQLzhokyEGXN7Fxjz2ojkjEp7CrT4nCi5gG",
  "key10": "4k3CXhYudnsT5gxLze9JewmHLtbHQPzzkk9bGW1ierruabPyKNmLtvMTYqM9ubz1qEWASxtjMPU9uAYHkd8mp5mR",
  "key11": "4soj9Er3DZB5WANvcTrM4qUwR25m8bpqny7JcNteVgrtQczmkX9r9xQXkwj1KrnL6sxr2sEdPuNxNJXP5iqXyrKT",
  "key12": "5yjFnbp2ACB43GF2xdVuAJCNJCUi2pVNsHbSbEvivy9inDc2pq2VG23asf9BVsdNQaQLR2LzJpH7YvKUsJ5w5BYa",
  "key13": "47Xg65GcGyKciHkTei699qypQkLC21DY9mZKCNrFaV2jU6dpxdRVM8urhs33wjkSyaabP6gr5pbnar6EnokLiV8Z",
  "key14": "yeXRv1UhBtTn5rcP7ge8eHG46R93cGdGZiBxrdPpjMEoN9Gn1iNDsVWR4YhvswGQqCu5oMUzTkctLH16bLXyBxk",
  "key15": "2rfX68s3Xyj7LMz55jqSm5VoTz1njyT6mpP9hqghWfyFNETarv4moREZizandVCChZ5boFfTS3MAZdzkz15zBjpS",
  "key16": "5oxezXiJfBKA1oYKqvRs4G7tk7PjNeeYcJCazkzciRXfE61QoxLo92K7fkwbz3kj8rnrDqXkLRET1irveF1LFNbf",
  "key17": "AxEZJoYpvtpuowZDDk6XZYa33YotvFUqr734t2HB3C5iZHWozjj9XtJbHtHEQ4NGuXv4fxqy8eJhgnGnxVaw1g4",
  "key18": "5kg27rCGw1j94fqYDFUeDKWdScPxGb72cSWg2X9iNQRNUQH3tKupLNbjhyC3WArzFkvHkqxXrwHCjUTCDuswPD7y",
  "key19": "33NKSK4iiZCbbUM3doGZNvVwyu3Mv2nqkxKZsanoAm8gyMn8ymLFYNooSNP4enMbf4juAkkoLMxMfkKjKDo61Pej",
  "key20": "2DAyjy1DSHvhp7hGaNmggWGuVbWsZThJbnnBgroBkE7zZGf4ey4DsPLwYdEaq843PBFVo7vzd8WmYdLe3NZrz5im",
  "key21": "2HLWJzevyzeQZqouZ5RSWTfkq69LvtaPtXbTZJJVQGn5wea2emCuckW89pU1yp7n4hMKQvmMb97unZczCT9WDcZi",
  "key22": "51st2CPHBUfGvWfF8Lfdd7BNfM4kdhhx7wmqaMBiHM4mWiR5K4Y2sFBMygFzhdSVJM1vCmfCLvhct2J3eaBjWQbo",
  "key23": "3Fc9NJ9n12PtxEt9g9h3RobNGC6EFHAUMmozA4CDcCAtdQTYq1WAdvtrSh9a9ZC1ugZVQxA7N8kg5CmEuL2pnBt8",
  "key24": "5a7XPX3ZtUykM6sNUwRx47KLkYn2GFi24H2VU56HQYdMrcgBTiSEQMCyUAKnt1p9cRbqGzHTSFZDoNniyYyjdz3P",
  "key25": "523PhdgapgSXg3pPTbLedXyhn2yHbhyHhDPerpJG32fJssfJT8rzv5biNQqRGxvfHFhZGszYtWi7Ccjc1s4konRi",
  "key26": "2boJqS3c37K179p6iTmbws75kQqvQPUUGLVvcZkRQcfQqRLWugH42DWGy5toCoWUh7pDnaXWbcEVvQdj6sUonhLs",
  "key27": "WwQUa8JrtUH3N1VGeMpW3fdzdm8DTfgpZB3Niqi1CuNm4QMR6CBFxNmQCm9YpPYmKXZ7FQdzU59o6UXe4truBYp",
  "key28": "3f2ZYgQPKcNLdLXwL5E73UtccjnuHyNg7F5n61dtHaB53DukyyQyuvKNwrjAbg9MiXUQnZEnNKYkNymVSrJ46yvD",
  "key29": "3cxUnS8vxuwAArCtYLcc1EptyY4VFWmn2XZfTy9WetcK5ZCbfL75WezJsPnXNz2FJnBRXUvtUGg9o2BS1eSRzCio",
  "key30": "2Uj8gcFFev6VcQzoW6LFrUN7VYH6qFQ7zwp3JApwEM5FnEqTN13twNvD4H9dtHqqmxRwdWw1qUr4P6UwhFQ7i5CT",
  "key31": "4LXUc1WrNhv8WwnT86twSEk84LBSyKngXqzjnHiG3kUiAatioLHyLYsXmV7nGN7PBLHNG9Lf7oYHfBtyzEuwsSy8",
  "key32": "5pojpmKEX8U4sJ8TWGze9m1qdtsXJ4QYCLK33PNfvSr79JU5Qyad6ozWdeLwyXUJAhq2o4jMkcpMfcwKyJdVXTV9",
  "key33": "54uGU8e6TheFt9UWhMzKp3rH81CEVxExwC4FaDUgDJMucozCSpXLvngYqeytSHTBqJosvy1xtB39BzUrDQeMD8WP",
  "key34": "wjGDs9qWxbwJKcNFj65sQfrWHzwb9bJzUP7NfFGcVNURYVkPMwhzfNWjDko3dt65XFWV8i9NTz6dnxX6DM7sURN",
  "key35": "5iA6s8MjCq8dkSLtneEMTk6SyV6Pv9gU6HPBM2ARJwbWYsvoYmeNTtVao3ZoYZUZsSFmCUAix7YySuT42TiWprRb",
  "key36": "4icnFrPrPmgKmKU3ht8RQ4Kq9dski4xwyhnfJiVdV7Ya7cxjgMezzu35yttKbtDPC1j1fiDPYJ8kxXvZA4DrcD5t",
  "key37": "3xwnzoNrb6Sn4hJfTW9zhrk6rzPnKvfErZxKR447UXDCZDrVP6rRrGiG1HRxT5wvyKpuLizKvRbnxeEt2c2o33p3",
  "key38": "2K4boGmi5LNnbjxhKgyQj2CUKghJGTEnBWZmR5CQ6c1EJhGLPScT2XEnZJk2NFQgrVrbNhNRLZyUvV9H6sMRP9Qi"
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
