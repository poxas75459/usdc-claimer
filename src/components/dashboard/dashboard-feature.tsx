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
    "4s8VxfH7iEYjMChPQFd9ux3ERba2wuGHYAjM8WFbUWXswuCJQjYnwWmUhMsmLppMyoJWp3Gu1RKqwW8k7GNb3GJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Cp3ftAjWw6Ds8HVTgHfbcRzaUppuvWu4ygQN74KyUT42UPjr5b1DqTGzHfj4pqmKthFj6BZronk2HUc7CqRkFZ",
  "key1": "WZBxdkG9vwa5FcQYMhiRpnxJhWgUNWMzdPqEhv89r7q27vyqx9VyiL9UMCJ2p3dEPeR25x5GZu7x1VExukX7u62",
  "key2": "5K6cXiG3GRtYcjBidziKZznXJEKP9w4jC9AR9Kk2URhEYurBfv5yfBkrtKqbyLJ8oucRQ9pzMP5GHnizmk3VrBBs",
  "key3": "3DyhHGjBZNE428zFdCymGdTd93HRY8cAWAGZ2AeJPRrL1GKeZSzyNFwpJNJNcNmGJNaGzodwG8e9PJnaNP86wwvt",
  "key4": "5cqNWMHEYBGLHjf9hQx3mCH1957HBgPuk7eTPGttbSLF1Avc1ZCDR3QokwB1nFtjeyP8Gtv6JrzqLfUQMU9Gu8u9",
  "key5": "4v3C8RxFHcpn6hWHwYyrZyicPQqcb72GykC9pXyiqZUcCFUatPHWHz9WCknFAaopt4QZS26zWdJA7yxa7Gj5eYw1",
  "key6": "3aX7W8ZHLM3ckJi3s36zmYv4RfBRThSoLarGY6WkQZww27k7eHDJByCoWisjTdrrCvcEEFZQkN6p6U2NtfXnB4vn",
  "key7": "WiHGz6b8QGEx6Hx6FTVxjw8eYUMDNjRc7kVyrnszrsvwUAFvN1LDniqafdhwchrMwpVH3yG38C3Pujd2UfvCxdn",
  "key8": "2jBGkG7sPx5ZAJiZFTeHrkDQUEuoTojTpnPNHDfjXWJ5Jf3f5dzWLZswyqQc3pR7pTd3C5xSDB121BQVYpXyK7Gg",
  "key9": "2RJkmCkPx67JkTvX8oLcuBYqJ9Cvynm31XC3q5HtGZwg7RxvG7rxhJwE8WgmKZqmcRXqWw6LRJr38YmKEo8yo2RS",
  "key10": "2pHzuB1h3FCnpJ8MsC5qA1m8pcSZomM9sVi7PjT4gVUgsRpJtFfMhCoTW7q9WCejWk9T9PV6WvzbjxjRLRaXTAhH",
  "key11": "hiLNEqM97xJfj6t5G8si1RK5bGZK7JMrvrak9bstMLrK6gSqWnZ8ySCuqQH7Sbuy2JTRRiASJhmkmNSXT184Bzw",
  "key12": "3TjvY7A64JCL9h5g8HGLwH6mbbynJuV2gq8N3zki8DN43z3PynzpgnA7nZnogYzHR7ZDmjRksW2TAhxJCyTTeobu",
  "key13": "434bVLAaRFjctdPhDnRzH4rEW5cStCx2UbHEV9HuxKaKgkuMWAcPFBUHDFCck4EoAxRv8g1S8aJ9nvYZHSrqsCqt",
  "key14": "5QB4kxzKHgELwFLaDEG18i3M53dfoonBorMVcReFGZtu7x9fZXkxWsbtusps1xcMMfTMrZnWJetcLV3cR6bWTJKX",
  "key15": "2RGEecm3GgBFx9h3mnucwELkLjBS2eupZWxwt3Utz7jLRY7VWbKUDzssSuzzbofvjw7EgAYx8Xi3wvebCQrj2Re4",
  "key16": "5QnQ5pNE4X6m74hXAq3wkBXuUheoqfBUueefHUKE8h291juo1Pruj9MzY5K6hyWPGxvXKEWAjdjfkEm3vZNqKNwg",
  "key17": "3twpMKfasJ83Nm6qKQ2Cxa27dqd388G7gpseqG7k3YT7zPQmdzcoTkTKr62LKo27hwMvK36nePyH6c3dJ2GUiTT8",
  "key18": "3Bbn9VbbQbhKsoUuRDi1oNteXEKycaLjEcgxqMoCfMFcfEWrqq9z6m9iwjo6cQQHTekxR2DuBrz9kraL2DUTBPYM",
  "key19": "2dP8P1MZp7oUEG6CvfNKpA3rUqAPdiBW4r9xjkeUXFxynaph8qSm5C3s4JknyH87fqsa1ix376TLyA4JPMNCK2Ff",
  "key20": "269QxgRvWrG58EpyV3WtNRJfVrBq7bJS1HjtpgpXGw8sUQuJ5Bmm7q4UCVLcAF3VEJqu4FypHJRheXgo28TNA4zq",
  "key21": "pKUWn7xwcg9EJHnJxU5y9FvqU4HQCGynNtjwfDmWsdp6ur6jtZGaJZpdMpExZd6QPUy57GxaGHWWL13m8pRUEBx",
  "key22": "3r8RX3Djy2RrWJn2z6X5m7EoernzfyDnTHLxwE6jaCFtfwV3xruZEYnh9Cer8xT9uFTzXKnHw9HYr8U6J1iMtiN2",
  "key23": "5n9hgyXc438jDm9E6vb6xufdeER3HoZb22fY6LAoy9NKuDmehnC696Aa2syKhYHp7tniu4U6LLRW8MgxRC2w4XSS",
  "key24": "4KQpedWxr6uGp8rDbsdSCeEBgnVQtc7bJeFqiMeXCPp9zydMryNkCnzefWZFExz5D6r2d3LaBqx8UwTDds5W9iLH",
  "key25": "4DmvXooLTj4BcST16dwCTrHoTgc1jkCpMM1JohW2h6ZvNRUyu7VuHCopup4nW2t37x9g7TPVx1CB3FgCbxTn2nd2",
  "key26": "4iEzQyEk6AF94KghB4u6yzPVeZvBxwW4JFEmwcMXcdbLAmaErr6SBcwuWQkfbottT1ybgsHs1XinnuFBJpxNCcMe",
  "key27": "4Bcy787NpsxSN2MSNn4TjPs8SrLrcNUn294agfohRqvmtz2oFXsUTdBd8PXjNScKXrHH5UxpeNUnZVBy7fHL4DSP",
  "key28": "49ijjDqynanbgFe12zcidAz6v4upxFZ93SGwgZzcRkUfsUsLH17aBLgoNrUXjmCGZLGxMn4q5L7aJkLSyCDV6n5V",
  "key29": "3FfUsQC64TX6jWZHDe4cTCNUZWCcc5Kt54DQPZF6Df22TMZ655yEG7vf9ohbXFa1x2YSkEYVBV3GzkfeEY4Fh2LE",
  "key30": "4SpcAjhFfpnNT6KP4U7Rn5cg4joF5askASbYNr3nxeS9nKKWm8QqYwhzsZxeZVTLnhSPauayVu2NtfeRG88bNdUg",
  "key31": "ouWV3rnaWMr8WDV4d4tb2YdM4JTQezyZHRedC44Q4BaafNzHPLsYxQEdMyN7bFRgCMLYMwwuonT2dHZcseXiCuA",
  "key32": "5GVtdx6Qcsff4HfvWThvLNJTz7pjRieDgntogFSk6KVU2X6N9uit7EitLDEu1kTHSv8samMYiXecye8fMun87zdd",
  "key33": "3SGs1ZxHdYDPG5XZn6uxxMiaSszHDzHcp9AV49zZtsrz7H8PrsCRNDNmFgAaYxQE7b8R8muGdyksHQ2HAtwzuXar",
  "key34": "5EawB3yiwpxvYdAt7P2gLvvubUnqjMSzRLMcsjpw9zN7LXYjbtP2hg9PewmVz61g6BT9GEGcRpG8ZJGZ5ywqfXz9",
  "key35": "5T67ZwLjQ4aP7Yw84E5ujmwmzecfNDyxEhB7p2jpMKxzMns7D7Sh2PNaHRKcVugxZaFMWXiHbFgtQuMzMDgkW5Ak",
  "key36": "5zHR3dj8GCsgK6raAqUninwV9HN8F8eSDjww7JvM2EDaMyKe1zT448TD1kpqtVXAJkwYSnsMqmFYwbn23M5ifnNf",
  "key37": "zGbtLWPByAGT1DZ2Sz51e7FtSXarHjqNKgTGDiGe855dZaJm3DkMf8DtqYhvYtG5UKZ3SM75bxedhPEhfbd5xUK",
  "key38": "LwWp63wUB4eM33S6ce6AXR4Exhyi16bf2ys8Do12QZaKyrmCqJyQLEUhTrniNjdxpaWWUC6Xi97WBdkhCqxnd7u",
  "key39": "2FEYJ2SEskJwYCRE9HpXMfXzAeDC63bTqJgEz5xJNUjx2TXsS1YQWJk1DFr3MkuDKmP4YRfhYx8GkiCHDGVubxvU",
  "key40": "y2iMRei4ct6itf7VcMRx8xMnfPvZFu2bqWG1Bf539vQdGJGuhQsgndsFyJiz88LAgb7qmZSL97qUTUuhQbw2Z8K",
  "key41": "2XFWM3SrY7J64AqoMS6aEoiLMivupYZuV8y9QdEy1HADpT9CGsrBGazAfigQ9AQ1V8rFpf1wQQpuXHdV4Ck7bcG7",
  "key42": "2XhTwLixVwuTRdpGW77icx589C7LUdeNGZVyNUtHegXviF31gNLxhFt8xsRaJ227zM8aAwQazuWFwwTUAYBEeQVK",
  "key43": "3UJZWE9T9tP7nWmj2TdUmrbqwUwUtazgQpVFnHHDWzKLhkufTNhzzRbhcEHzFwwoj6w1uW5UmwR9XEZCtnH5aEt2",
  "key44": "5ggZqxGgig5UhCiNkZiD6m49x3gXn2CFdrS38LbyisBuLejxmtXiX4goZeW1BzWM6EYd8hBUrtgKRFqHFKrtFcJz",
  "key45": "3WUqBWbZwvEBzFnQMvmaJ4WE9iaG4JcCSx6WmrGuanPBQEiqFPsdvHMWLMRN3PzPiYcC1QMGkJpG2irDnf8232PC",
  "key46": "YBY11y14pSgDDxR1e4uYBmaeufZdo8Qn7UGZNFSckPXhoRY5oJHVrG5mqk65cyYqzQyTiUZL4nxhcVf1naSpXnS",
  "key47": "65SQ2Pbay2GnWpxyeAJ6fg35jnN51j8kWx1XSeTkhumCPTTsXFuUiZqRTkf4h6NctHenQYR6pFd9sznZpRKFUxYD"
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
