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
    "4AqkchMWY2AhCyA71byDqQP7he3QerXTbo1WcacXqPzq65ZGFzcjAk8FZcfaHRyaTrDDcw9oeKpspQgkh8AKiBgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDt4CvqUf5KYQ26xKRg85M4PY7LgrVnCgLWdiLysGBx4rp9pkEwztbjm18cR5Ni4Yvky1KWj86T3i6Jg3NgA1jN",
  "key1": "5fPsgr3GKziy7JSkYKF3duKBfbJxhawGKjboMwra7Xz8uv3ZUXS2H8suXcQ8GgbYihk2WS5oGKyRGsCCrHVNaDtg",
  "key2": "HWYKxG5ush8AkhKrCMUULJemsXTPToM4hDiGjHhComLuKryUd5pac66WAxkGJqBi5ahnk5kvwVnpcoDkEpsAc47",
  "key3": "5d9FEeXMYH6AoL5eeAVigBCETiRji5EM5hgxKAktARkfvEQXA88PV7PKt87sRpzvMg8vjQ6V4CAWSqZAt4aA5qmo",
  "key4": "3CGBRq5aFjCsWbcWZD6CVkrAbxUMB6B6uckUcJuojXr8vcNQdzHCLPjJoqYZzPHLmQR4HfDMLyWypFJfwyCiZJnC",
  "key5": "4C3XXLu6YBxQehfHhmJZPuH6D3pXxiKLtavEABXFZ5MxauVWTHBwMpMHcGDWiE3X7fCDW3MfbYvvf7KR7VhyMKMB",
  "key6": "3AwNbUYGy3jDmBLbQCbXvVZm12EUAXsvQHgQLNCXfzUbjRpGcvhdeois9UUx7JyVAe5GnY6oEhtxbJRMDUurhA7U",
  "key7": "4GYTABjUNS7ZoA8wxGRy1qdUF1ZszN6tbdnX7n8cqsrBx2iQtWsQALoB92dWdtozjDpdUWg7r7BC2iEoheduRBLQ",
  "key8": "5sfsZW5rXDPCeAUfyL8rMzGgyvH4Bfiy6cBTWZj3FpRNhhrpwf2qCnUas4Xoz2gUNpmvRbEiJT6eVS33wzMjrzoV",
  "key9": "mzCYkxmEnMMLhaPJN4JDtCWf9X6a18yxHwtvDFQJKC9g5Uuep4LreSK3kzp3PxWNVGgaMgui7NQCerWk7TgySPY",
  "key10": "3MLQrz3JMbmeaoUzK2FC3UcUzvdFqNenU4FySdqmFm2pjjGkNZngcpCWMUrtYQaZ6QVPosKfpMRPDTtYiUd1QiXe",
  "key11": "2JTpy7Uf2hhQhS2Nx5CWn1jJgE7pcWLYuhz1QbTwg8egMTSuK1U2FsmofDzvGcGHNtwYPaj5BBYDgXZKi9P6MfP2",
  "key12": "2TEe1NNEdwxnvFCNyGFoZT9Wh1mpYqZVnzyvrT4GEcDNV2ge4btUBb6NsKpp3LdFxfx8GhvdZUjSmFBjXY6YpyZa",
  "key13": "3fk31efFNywqKxzu7iyxDnGKd66WHQRnc5jxBEspghfubeYfcwocPm2niGsrMeeq88wWidjcs5KaZbvTYanukboE",
  "key14": "2uhM4gFZkV6HgZarCDANDyoWiU6WPs53zZz4EGr3gvtaLjvnxi5wfmi1xkGxuy2S34tJULPfuZRqFtRJA51PoLUV",
  "key15": "2CzE7m7ntkVbrEoYihL3SZRJrkwsrzEnYUmDjSn7dHG6juYmbMdG8Bwo8ryLGbSWbfpgZTRTRJaR7jVpV4sRAdVo",
  "key16": "5E8kHPFkdbSawtrSRFTwhPY7ea7bMpVgVKA22xKHT7gYZYNRDXGLdMG98UkHBdx1VnnN5gK3aquytKAAkTqQP42f",
  "key17": "3p7uNTm6yCErJeLUmxLTacU3CkGUN3fcLbpKmYHHvJAkSUE2kyUEs4jGsJM5vzS1mN6wjCDTjPx7tJmQWf31xQUW",
  "key18": "4r3N4jZKAYLrKF18Xf383tV5grym5gaddKQkeudMBaDkKNaWWMqeCFLWwXLAvGUf9UBqKHTjCVhraP5z3vW8v7tc",
  "key19": "4n92K8eacewi637onVaytq5YCsnNBzuXPNnihCwpPD1YLsgYtsXxCEF4ULZRpDyfzaXqEyU11oxNwuDEvKmTRGEt",
  "key20": "g4sTo8yd8jv6GjTnCMPSaGEbNwW5PRvV6Cm5srTQtLS1s75K5Vbvt5eq16mfA9mrEZg25fnhnDSXW4J2WMMGpRD",
  "key21": "2bVsUXHoTpV3RedzVEhEFBYuimyE7t4wGZZd1si9LFnegdDoDhdSKPmFGUXJqjMFr2XFEfro8WU6EWhRrGLfuC2g",
  "key22": "23DGRYfQJoGB9woHgWj7fSiQwcLkkVwpaQgkiQZNkQeWqEPSEoKVAEkceL1X2BGSLKwdTBUCm68DYgatkSAgFYoZ",
  "key23": "48borgkNGPWVQxoRKRiQ8fTMpXu2bChBVojZ6EcPyMpGwdxNVHqgNwyNSuhauSjZBJuRQTqTYbvQkLAvyYLXecXV",
  "key24": "26NmCG2278j6x4sN1svTFr6RiXm5YTn96mqmzDqmamNBVxuD68BmfgL2ykGM4s9oF6WY7h63PrSQNFKX7X7LrNTB",
  "key25": "EuQtebJu9fV2D3UsZjKvipLdC26yUbuyhf2nHrFYkb1H4LLSHbDVbVopY5gkeX2vASFCemMcYkNd784NppL8ot5",
  "key26": "Vx6HFhgUhXky96b88Bi17E9Rh4f9xRydnuLUHvC9h6xk3BSpqwXafXjyRGXbMymQaYb5dqCr7HY2r1nD1G2XNU3",
  "key27": "52A7HjCXeUAdwVSD96c3CKBwnFr4iGdSB8t2zPChKzzwebpo3NT2ukzVC7yshZ5cYJYUWKRhX7fLpfbYpdP8G22z",
  "key28": "2FUvPTYQXJft3egEgfgQZM8m9bcx6inVAzGbEMAbCHH54bSeDS8SCtKsPew87HNDbCRFbktpC4izEmYdCY2FkAHt",
  "key29": "2Xgt1zoXZeQf9gm4gdk2C39sPxpcKZza6FjjhwzkjQw5FJGB37mYbsChpMXMEU4pE4q53DMiCK3AJDzScg2x9WC6",
  "key30": "3rXrQ9vdWbYtAM5wc8aktbjnzQMVTFjLmZQcLdszKRzAsC479MsNTXECXTezDyPy8FStZjbET371kF6NjAXt7xuJ",
  "key31": "47f1Lk7ZVhUWeNaQMuPpLCB2KqsVQ4crwm8VV9xEotGRauqs44wo2t7V9SzY1N3TdpGQXHPR3bUdVyWN3RpUqk92",
  "key32": "5uyb4cnDEtJ3xULYtM8SJE3CENnkqk8esSnjsWMwk4TYVPqP6tgcVJ4LtBCo2jx95Ccd6W47rJjbDLuEi35jDWpj",
  "key33": "4vp5YLrvr7pyNjtUKg5it1PiuBqE4m3CXeRZDBvuadwX6WgQDcAvQ1tk7ih8NpfGS7cDsCC6aPoYpafy2CxaSA8W",
  "key34": "zA4hsmZzVzvdFPR5hihmBbXi4vRuFbpKKxRLdn6Wv3e9MAc61mv5DcEkjh8GSwgEhBNJTaCcumY5D8eWJbmwGh6",
  "key35": "3entp2Kn5jwGuHDEwqW4uG5nwE45E9KzsEFSdHSLwQuxzKk8sMZiBJK5imVgvdV1wvRb2TGqjJJsjMBcJbkDbmFd",
  "key36": "5qzCtcC8sQ4191HMuGQXVNEzwTopX8UzCkghHmcyXNdXKh6dyDiJSQZwTQVg67gmNbFRU6fRpafdKf7NBuBDaTMt",
  "key37": "2FUzsvi3crRyRd7SCkJshw5G5WfzApxJnzV8bxLQ23Sp4oMWGuhL3ZzxitppMgCxbsNQjZnAvnSynZPXdX67jn3h",
  "key38": "aje6qhx8ipHsXBocXAtwZ8BeuGatJvF1JHEtgFLfT6eahjhmyLgxAba8z9kBk1vcUP8kTUKLaz4wwMoZScuBQYc",
  "key39": "5HWPhP4R7fyHDvWBpWgL6kqHfeoHCRZgrqxGytYaMitNSULoWR9hVQjXSjJishBHRV49jmNavjWxAs5DbYbxqWGf",
  "key40": "2fEUkNVduyw2V45HdZecRKw8P1kf9hixapHSaKFiSdqWvA8R4EweNfyBQQUqZdUAwhxYmHC76TJNkuusD9SgVWf8"
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
