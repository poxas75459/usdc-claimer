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
    "67gKFzMAdGnkgv1BswbAbxnYHCosix2Y9tw4XWF2kB4xRyXWqmw67Maki4qRd4syimHNH3LT1QMgcyZnXBHf6sBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWTDfo3T6zUmwuD8iubpFVsux4E8AKUEnCPLiAndv95ZUcLn9xcbf3BZaHNTBRXca5Y4xpFzZ6k5RdNzh9bRxR3",
  "key1": "4g4RZ7tcEJ5m7qet8mZz6VGwDvBeBC8q4WgSsREHSrVCr68bJZw7eSC3zkVAC1UYHF9XDDUZsE5Jem3Lbe2Hafv4",
  "key2": "34fGSJhR6wnVsiwcXPvgzvsSi9TgpDGcdMewPZyjMkkxEsDeG2yhXxDYyMtTFu9xGZDdLasPWEfJ4TqNaXGSh3Sr",
  "key3": "25RJsXjB2RxC2Geipy9HgpZzgo3t8cyWFthn9c2uSEPEebkPG2gxKZVgV2q6Axo4Ci8RaddUpKH8PYjCAP97ALgF",
  "key4": "5iqJCjj6SDB4AWQcR5jK6T7BNqAr1wfVjSQiChwhvajTdhTJN213AhFkoaSwHvGZsGuwHAK3awL9qSEexk7uxy6t",
  "key5": "vwu1fbQx9UWATemx74ZbCpWkG3RooVYFd9wDnd5LLWD4KoiVanEP5vkYPqjnjsPbfkgYYt4EsJAi4qUTkqc9GPx",
  "key6": "5HwGguq8ndmuayWT98immFP3U8egkrZrJAND9CxpVnncr1X7iDkprX4Kp7EHyYHvgwxeU7Yf4hCpkgGNrhkq8fjB",
  "key7": "64X1Vf7iXy2dbq74Mf3VEtLEetQpL6wZMn4Dbz75qcSomG3HeEieZMRQH9TMT6nVteXTYK8MYMpPADHkdcu1wgUp",
  "key8": "4vEjDQZdpCyjkKi7VDbHVsngtaWw3wHzcZ9Pqb2uh2q5BEw4SrR5Kz9t5L7BFmWR2zQvWsAW833ArWTvJ7FPpLHs",
  "key9": "qDv7qoV47xdgKY8KDDGBG1F9N8AiT4dskciYgpvUaCsnj8KnGe2afJkz4EGXfq4DY2ooLXPqSYdyQZrXeVZtLpV",
  "key10": "3LvzoQWofyycrcjMhqey8JpveiJEkN9DDhm42reoYFtqDv7GYTfzAaRey4f4D4BqrVWBg4PvppQY23Mt7m4aiE7o",
  "key11": "35oEQtSM2HsyX79zjBUgbwAVDQkXcSj3MUAe7HF8FZaV7BhwnYeYNGPVGLnt4kfmJd7VUpGyg1VHUEgKPPZKH52n",
  "key12": "23SouEAn8iEoirYEbgxeLXHZWeKgKg9gdGf1qxArq5vA6c4bBdKr1XMxMs1EPt3nY2igftJBcMHAsYPR434jhb5N",
  "key13": "3DFTrjsUQ7QNPQydTwwCzND4MtEJyjGuthWd6oPYVftqWkw48L2iq31ogN9A1fy8YRyL5K523rCaVxA1jGp65UiH",
  "key14": "ce4fa1WrDAp34fLxsj4T6b6TwccWCK2BKxQN8kwJRSQmAUzC49KLG2whQ2DzCWC7t3qSkXV1pA2UuqRarmWcseQ",
  "key15": "3d3LdAXAeFw6Sdy2DpvKnq38CiERixAVZGrqsmdYC1h6XmK4PXT9VbP4RoKeYUx77EsWuNQvUtdb9VpEan7968VM",
  "key16": "w3mohiY7qqWKDvR4Y97Gt42dkNbAg6utsbUGmrZJzp6rq5TvAM2Fr7P8mKhrkbvn5mdnsPjJw3a3Z8zmJAu3dQM",
  "key17": "2TsP6Rfc4moWX5qfCmyGVKgW1KeNwjy7LYq3fxaGqG6eyv9SG3EwfSbzFUnS2LsUuEdYtcEje2ZCFV5byjc1zJxn",
  "key18": "3nn8H9eKeZgbwoYFDQLccdpZiNjAuhhGYX46NNiuF2HcNihmuZSyw4j8i46nyXug9k8nKiGUSWaJcs8e1ppLea6w",
  "key19": "5Jj5W6kYKwfax391NhR2GvdihTeANNdXtNjmJyyeHYV8hFdchXKXCSVt1xJ13nwZYEQoQReGEUEdBy2rFpUZuuTy",
  "key20": "5MhLZRrTpAV64AQgiewePizXhGYNE32qzFhKmij4GWkgE1ReR2aDJYGTwja28dCsnUMUvGRvUJa4dgv4ZrPQJMzE",
  "key21": "4ytfeYYCx2qoB4T1QyFu5rojypouP96qwptWTRm96Kutg1XHxp9pqdqPLaFQCBgq6g9M6cH5fx1pq21jf3iH4hjb",
  "key22": "yJv5D5tuyBGDDaFmtBbrAwQQmEKvWHBcmmR5aBDV7DBqQvvLda7usVq5BoMG5pUDSwGoeM6zX1de5LLoCjEuk2X",
  "key23": "4FsEJtUFUQv7ThFRf81AeVGqwmgPw2efvWTF2dncomzbhHgze712XfrWfcty294j2DH5oSLM3YARA8JNnmukqB2v",
  "key24": "4Ve5CgsoUwA3TifNJUxGNh9R7c7w93noTHqcL79iLeJMrTMa1TvVNNsHcSTwzYKxWwyZfFYQGBzryao1CL7mXVKs",
  "key25": "Whfenkb3UXQReDTHkApVyTwW6JtXh8bpDssVJYYree3YKyAjvZCai54hQpVDfohXdNrsLopqX64UhGzNsfLV5tR",
  "key26": "4RmCT8wRtqQ6eJXUKTdxWG153kxBJKFnDE4SoGFygCouSUmxpzRXA33tGDrztBSEZ4NZGqcSaejiKGU61DK4syat",
  "key27": "5AY3fqnX1rVpG5M3XhYN1vV6gkuyViUqi2MyJandEwgxWd7g55zczpQNSbzwpPCPnaLFF6WMUJvTxhiKk5MNtwkK",
  "key28": "52Ne9y9wPS4SwsKD913cN3ajRJZwA4C17kTmESe9JhZzQM7h2tjug3Hc2Mj3JBemdFFwKvXzcTgfarP3BELqN97c",
  "key29": "5fDXXxHqx1ys6ccRN1tySxKgSxzThXHR4hbV29bE2Fo6BiyABsQ1pZL2MoTskp66K3fCzAywt9oHHBQboJ89Ahno",
  "key30": "4gbqNf6UPddWhNFxDJRq3nx9T6szdZr89YdckhtzebioxeVLzhHsxXYzRh2n9fpAnRv7GtqhYh7k5XDmR5jmQwbz",
  "key31": "3b8cui4SqSugNKx1taTgPTnEz3nm3ukfd6hcsE2Jb5LDHuFL8F5bKaKtP2ATygyn9jN4LK5a7CSkXYcdMNNPEH4Y",
  "key32": "3BMTtxwA184Vt3GWU7w2LR1H5bGT5stRxkGFytxQ5qtYXZ8CG2FbaipjjxgA51RyLUhiQ1zPB7m4SsZWKUPFUTLh",
  "key33": "4rzM9gCcz7RvvKZV3HD3PqW5EpneCT5B4JGCuiXor1cWW9q4x6kBJ5oS5VBoFYg4YKJxjUAsqXXNfgCUHkayXxXs",
  "key34": "423wLHYYi9k2UQAUrKZUbAA51Lifkhwge5WfQHMJUuk9FVddQ86yKy9dqLWRwzUCsHSwDjHLD2Z154bSj8Qw7b15"
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
