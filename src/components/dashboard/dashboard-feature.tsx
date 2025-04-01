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
    "5SGjMZQUkN2h2b63gxJwvV29AL4nR3TktcikBPuCm3ZyufwyBDTQQtWEH3NiDamut1WBnxTRn9DyHLvSnBMFGrkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VUvvs4FX5bBofyzTF141dKUcD2upmafrCWca4yPtcUVvQpLatgs6tXQ9usP4tEheJN7xzzZJ38yTNWBWVtXjG3",
  "key1": "NZ9cn85tJPjbA8jRo8mEqqPNAsT6EZBVCZsa7Ci69uWJnQMH6DqhrRRH9t2QRKHvca5XCPxi1jXRTddRA18Pm5b",
  "key2": "Q5ZQeTKZowWpsbDY7gbuFrH9nq8WxiZguBys6g1wHMm5asNeZrTqvvDMEoAQEecPSqHhuZHPgYu4YRLTcCHh96d",
  "key3": "2kVxV2Fg6vSnUnWogKMSMonYUEBiuK86EhpAKD4uPoNY8BmbRQb62vKJ4NyEB69Sz4y9Uwa2TJJ5cSqdX1fJzrAa",
  "key4": "2DZ9Phh5WvcHVsLo4sjz2wpx1G45kdHLR11JhRjaiDDDDcVDD8r45yuGQfrSADE9SKnL3SDcEBvhVw63irURC9oG",
  "key5": "3ZLnwAsKJQNsAtLdFRESHZYUay5UPZq6wJY3k17VoC8xQ6bA1Lyim3PUUepSLs6arFJmExrQ3FAnJC1vQZdboPz3",
  "key6": "25j8TJSgF8md6tW1BwPqGdL535M33gVW7yPEpTZKGYp9Ry7wP2wXyveHKxdaQsh8HGQxZvv9vpYZqZ7rughVAeM1",
  "key7": "4PNTTuRFZ1aChkywcWLLauNbrWXhRxFcMWsSgwTBysBtoB3husD8DPXKYr3bx18CTXDqRMEghNzeiaXNb8BgFHqH",
  "key8": "4G7NNpkRzLxsZsZhk1XK5TMWazvRx2EAGYkqXHgMtgtMR3YWuFDPcZk7vcELgXo8WshCrLFdbeR9hNGDXnz5ub49",
  "key9": "3KinfehQEc6rnCnutJDjAhi8vMFMdWnRzkAQYiEtyqjwBCBZNZkVQFJQ16rduq1DBrXkuYa3D6U6sez6wqUnmooP",
  "key10": "3FpkWqq3FRZ79jp8UJsfxP76LPStjCaqo3vdx8vKqCHrZW9Lm99Jp3SftQD7sPkGeH6jvAwqNRHkakGaPjKpX5k4",
  "key11": "4FqJ3SdA9DQwYNdRHDvZ5SjCe97FnEA7azCcnoqk1DFgoHfRmWXjYGKVrcV7WAxEJgwEtB8xRVyQ8vHNjhoKRr3n",
  "key12": "4b4ybCXjTmRaafvDsiXqbGfEMLqMUWKfAaUam8nG7hRgzDy5iejDHKTq5C1MBnkYykE5UF3RiMAq3jHXN7ymUSZY",
  "key13": "5UVhYVDBer9EzoA9gHVZxmgXwSGpA2GSU2o9ZGfN57QZYmAApnBD4vT9uDcoVG66KUPrArimEWPFG1wycfrxQGoL",
  "key14": "3Dn6DnSmYaxmkBpUjmWEJ5boZugAff1tvitMPQWiPAjR7nfNgfsV5Wirx38okdYeH7qLZm86qTtJNcRKkeJF3ZiC",
  "key15": "2G5vmtDTV39PRUJWgAFb3JARWkf3TPwgS2BaPgNhmNM9njHgpvgHgvM4Uso33e2gcnouVnGDVGeq5PmcadAf5Kcs",
  "key16": "wdfRmzt7RURv2Mwv9BqYgUwptoy5UQgbzA7xLNBkpt8od8eZCe2ojCwVaztwT3dSA7bCyemqGq8563UhUT44rzq",
  "key17": "32ERdD5dLPShAUjFhcpGC5FpozXY7SL4tqpsg3mBFafmXVhkvEHxrt1a7MRhgxSerd6MPKD13wbaK3eV3hjd44tj",
  "key18": "3Rf1FXwBZFfiEGxxNNyrTQdJtuzuNey8FVx7f5r9r89mNokBLtgDCnhkengvs1UytT8unubFNrNV9D2xpHCA3kYk",
  "key19": "3YGBrr5KPhaYNM2hzUem3zi79dy3HkCYU7JKxZM3EGzcsdBujQKffnsoHhm3ev9tCV6biA7ZPvecXyb2H8Y6biJR",
  "key20": "3jB31wxAs9K4Bck6NVXFp7B37NtnxxnApT2Ln622fbGVfvd6tGJjz5uMUqbFxy4v5xoj6d7sxaEccBc5kZG2A65f",
  "key21": "4vkoV7RXfVG3tkJqgSL2oCMT4AgzrcV56FCBA8bCFyiks36LDwHDAgPh64y4vrcRPLuuZDdpaNjSjWtM74gk2N7q",
  "key22": "2pvTAfskm6ipXytTDp18dGSKEMk6uoEdKyj596FcYijKX8HRqhEqZw9er9eG7pRF5MhBkFVAXfajUjYvbc18quPz",
  "key23": "3aQbKSCbMPejQFMLWB2NXzwyt125vhnoYahFXsRV226m4HyWTu7u39XvdRP69K9w2ayt6DDrkZ955Y7zEvqDTrDE",
  "key24": "4AePXHciLLnhDj8Db41t7obcKagoGSnqSxkd7fo5cEk2JGhiFawKZzRZ9SizhXyy36QvvqKYkyX25oj4Dniogv4E",
  "key25": "5RvrWvgVkmNnrsb5av8sato9UPHvS6wMzoKLmU5P7vjeq6HaB8UZ6gsup2sjhe2cmGxAB2Vp7hLVDL5kZ1vTcMNh",
  "key26": "desvymVPmFXPuRcLW942VfZzDrA4G8gsEx7N9K1egxzLfW1ec5sYAyjFnAoErws77Pd9m9g8NnnwhagRLeSvgFv",
  "key27": "2tCbBZUGBd5FrDUjj7VkUhdd8c1LGYwbvWmhZavrGPnyCct1PJLtcVMQ2C1Est88rKHcvqhPHPFTdP19HTuVuxMm",
  "key28": "48mQ7n2AvVFV2Q8UiMAuPZPRtdukPhJzo85MrREnmdQn2g5uM8AfwinhksVzmSnCWmV7sU5pGf44j5LYekqFdznv",
  "key29": "588Hu6dRsXDTtDboCMUMXhActY53sPyVKr1k2y3gEH2fXAE91HwrArJuWXQm858w3HWEuGz7xg7idi94eeVPRwHe",
  "key30": "MWK1AXw61xUwCJBY7kE8Pf96CYNwxzyPCnC2JvnrPShvmupKJq5KbHyg3wBJzbPfjG8i5ouzzRspcmAMHWL5g34",
  "key31": "65UGVcy3UhvFpKbz27ouqsfx34BkNY62LMbttzRVX6LfJWZrcSw3JoYE7zC6XPUZP2w1hEi7AV3rgLKYXyM4gRcq",
  "key32": "Ma6AwgLAXT9HcQw6XqVYHGsbveQcrUxnb5W5p7xMzBDFtg564e8uQcmv7vqDwL2E5X2DHHVgpwxUYozAY55Hcfg",
  "key33": "5rGDkqoWJN2vWXEhSRq5VvxoaAEY1qJCkxLijtMoC2WvDNLQPifxGbVCWV76WXiSLgfNbH6p3vwPmKxkcyVTKrNC",
  "key34": "53MJVWeCG1iwBdxcy2TKUAa7P8zVa2WqZK3phcB4zLPsKu86QDmm7vKpctwDMQw9quurutJFuEMGa9zppRoWvaua",
  "key35": "4PHRE3QWknTixR8FTCkQc8SbskdpHanniu7GW2iv1VYxzxaQ2iJ2RtHKtB3UBVnGdoDpza3EuwKVmdX9cMJK5ZtQ",
  "key36": "2HF8XPmCo57fbeJtEuGienfBzgxnSf12undXL2vL6dRmL6Lr1viDr51w9fDtgSfCNgWDhuHYNYqDvmeye67vHHuW",
  "key37": "ft4YF5ycvZGiCxcv8BZWsahgmfhxZTHvWSc2n3NLuGqNFHFPLNEdP8JajbPVXnNEFUtRbYHrRgSxAwZkzttVwLe",
  "key38": "4RmgARzP8kXVASpgRgVcXCNTYuhkyxd665kkKdwLvKPByRgwv7oTjy9zKLdt6kUFHesXARCNvE3zSuDgHPoCNuNh",
  "key39": "4do15gq1XCXMXjEtFFNd4PRi1Hz4Rhco8x5zV3XjvJaY92rrcfb4M2ghvUMtZthC2Zcb4MoL1c7x3FGNsEMvmjED",
  "key40": "5NmNwgJHnjX3DiFJZ2edY8rnfVQieeZJxTweyMZcd4xDbf5UyR44JKnzQp6uYsfLuoM4cAKCJkLDVbWYR129fw2d",
  "key41": "2yiPJi8EpUZXHkQ9wbm7eaUb1wMdFgvLwvWout9p4kAgMHbJgax6DTKhMH4SG5rL7HeaYwLSAq2CANk3psmoKpXb",
  "key42": "3UXioknu1TNgA9Ak1KNgUoyg2yBi3mEGJYjq6Hb4ikxna74ZE5HnPLr1GSM2ujsiaSRgtTA4tVbcmFBpi9ytN3F2",
  "key43": "poZXJGwXjQ8ZrpNN56WyyzbG98zVwU6yLrwEQMLQqbhcpPgU2wewxpeLUAwRMXmfrcGxAiGPQVuSmZuqjVeXRfs",
  "key44": "5ZVVtS5qVhEU3gQq9HMMPU5g3ZwBcySZVFBr88RiPAuwxi3VcnkbU8DUuswoxTPoWT9JWCQ1CKjc2sRCCkGtbfHy"
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
