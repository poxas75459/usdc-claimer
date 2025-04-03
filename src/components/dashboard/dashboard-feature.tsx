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
    "3y3QYjfed4xshwnD8WNPgqjYMizcyB9enQzUPazJ6VoDEGeqyL7yc4K6XdA3LCFmb1g5egzHnE7fqnGRN7xzYS9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVgnintm42cGNZSLxwMUrU9u6VEbaeYF6wD5FNbJXJf1ToLgWj68tjhMJxaQ9ZJu1L1a1HLoMjANc9zZw1VFGpt",
  "key1": "2qUkodHYJ8dJ7HXp1h5jNWUcoHFHAg2WLRSzyba8L8uBMT28NZYLM8ENY3G3mPKh7SV2vzDU1Fa1WG2GSW7m4mER",
  "key2": "3bXFPWHRgc9q2QLCNXyDySXiZWaPVTcARBMhvuirbFm2EK9vhQR63d8LVZ5p9qsh43naUVbvtnSoELUDeBvay767",
  "key3": "5ct3CvUUmWkLjkmYjxUSCMwMkNrDmpkVzFHqCuwML4XDRf42xCrnAwgNue1kCKBE8SrynbG2mqNsoThSjkoAm6S5",
  "key4": "3sSCAJpXouZiqzdQammqYswJnbmuLmxueWqo9GqedHc9dtVDZJWRM22rxMygHAw4irxvQDk2JvtixHaanCwfKg42",
  "key5": "LvUER1ejRbijszLPp47vLxrL5yAs5J9iyQtj63mJUFRoSQ1i4xCoP6QqBvyxjQ6a3P52zLsa833cnxMRxYi2ZXB",
  "key6": "32w3s3WWYsbbcVkZLaBkbi9yR1Y9F4ZTXNuw3jjJDRrbrP6Yp77zkdX2QxKHfVotGcJ6ktY1UcUy5jvCK19MTjzQ",
  "key7": "5Lrmi18EbC5ndDgJuXXhFhwp73bP2oKbT8Pt5q1zhBm4ikfGL7BoAwPP7YxU8ZquL7JDfSd5QQJsZrABbwRvARgG",
  "key8": "HzYDvu4AxFKRwuFkYLGVTWqU5CvrE2t5T8kGacSH6DJRvCTA6LRjScGjSVx1DVmaUsPeoZnKCibKDTV112sK3P3",
  "key9": "5ueQi6NYvLzpSnKRZPHfqLomy4iw1DFL2fnr4oJGxKbKxbpgK9dt89bmxAJTrvgEkgirWYy9JXSfMnQoTXoatNBf",
  "key10": "4DacbqUJXoMp19dQguB2b2LaSiuEAfoPCu7d924nRjenLvoBx6tpc4vQ3LkgRkWHuTNB2L8PRadGXFpbm5MHveaB",
  "key11": "4io2VUSfckNdVrvxX7jrUSM892rCbaKjRWwdacp4MkzCfRTAZAAVvEqfXyB2ho6vd8jWqpQ3uZfr8qRf35ibs89n",
  "key12": "367B7jiGqsinoMWw4TaYveKrsuzd1o1m8dGV9NirQyce5wQqkwe1Q96e4w3mQWDzn5JeLyCn6YMcBtxoPxqdWoKA",
  "key13": "4kTVkxUgsUBypi3dVwTQzLez8Vdr8xxP5fkPNmZajqd8uQdYcRG2xaBG8AHTwTw3H33fybpgJRGWZ33zttQiTcXQ",
  "key14": "39JjoLUNwMfrcJNeCCDMeAQRBL1EsUUpTY54cRYJwpN8hnKE4UTS1wfJxAEiiVzunnR4oBFWQgeMuyN1MRpo5q2d",
  "key15": "3htL77TTH94EphwB4bSgJFqxacW8f5Yk51wMgbDMPH5KRrekEn6QZWkchEkwQJ3dJTQkhaPEbZ7rtwTD8Co3LtiK",
  "key16": "5LSuXk8fcGK37Nyvw9Sd2sxaUDwY78KdHamhsKvLaA1VN8sPfAr59ShcJfMYyLdtEYb68fAdPAtTjF6MtZMdXPx1",
  "key17": "3ymXhuD2ZBQWB31S6FfpFYTVb32gCYCjg6RMzz6uN2UAJjNdArdEZinAuCN3PDz6cgwEAFXJYaG5LrPS3SwkF2aZ",
  "key18": "vmPMD5pUgDqaNYXMeX5o9Pgi2N7s7cZ9vd4EYeArpCaRLHC7vtQCphtEap7KTTcj8vmDJtK3UZ1QiifDBbYQCQf",
  "key19": "2A5kdCCQY44qA4wF6tthUSRcmDEvjuJaVKLBjxXRj1E6kh3mg8KRBbeMtZLr1vKyqhRf8uMmo3cZdVaRLs37owg7",
  "key20": "2BSmcZErmWwM8vQxB127rnjQiX8kEUFfT7fTzhwQvBS7ShqJnCSM25xsRfh5tnejgyrdZhCySaM8NbQ2qaqwoHRV",
  "key21": "2dj8bCKGYp6x1tFsLHakaXDR8gbJ5Vfn6nWKbSjba7yNHeJ1PhvuDnYvY7kuNhEiAn2cDef1LjHK4kAao71yW2zW",
  "key22": "3cAKt4cgUBHrdwWQTQATXqW7EbbL68KD7qEsxHvaKKjtPfm6id3icAzsxfrNqNNAHxPSq1G8siro8vNyKe2RZgGa",
  "key23": "4aTLDsVL1nPfWcUKA9cym5Z5M3kpmsJYYA9PQKubrqDp8CcU29cEY8MfC92pgRtmHYLiwkCy56pa3tiryjcJJSjv",
  "key24": "RuhLBVemQT3KVfdpkf9AxXT2JGXRdpe63m7cvFKUHXn9NYgmF42GiQ9ieeq8N1cjeM6tjMdcytYLVfdDQrWoicM",
  "key25": "EhMkapmJNvfPk1LU17QGiEVZ4AzUCF5gBkbJeQn34n5RWYg4UAof2rLzBDX2NS5WzmsmkSR6MG8P3BCJ1aqgiBH",
  "key26": "289mJfJe5X721MSzPvJiDYjZr1Zya6zZvFfHe6hbQFcB5HRR4258GePJZfdZFfnRxz3JusquWqXGnkRKocPnyfTM",
  "key27": "2TAwicLpD6gwschfrKM1n8RreptUjGaWpjKkzgiNkND1YSLDLZ9E3bxxrbed2CqvxStbQJNoisoKPYzdp6BEczAP",
  "key28": "3fTehdJA8bvtyWvXeZn7DGR2x9xv6zSr13mGdoNEqm4eewdmnRs9H3cVBPD6dv4XuAZL8u5E5tTB6SPNqrLMFbgR",
  "key29": "yBAe7doLdpRn36XjUJAbyDSkbQNPPGfsrKx7WJ4Aaom4Wb1zLsDsMhYia6DSFp1GAKa5ZTe6QiWPw5oRCYMkp3i",
  "key30": "4EeKU2GPm2y9AwfAmoNSVri5PZ2qieRDyPEpFJ4Rev2FafT9k2izooJUPH1JratQYCy1PDTwRaUxP5pM37Eoa32F",
  "key31": "5F4NjzfE2evDAtUYTJbTNjTdXQtqCQ2HroDqYnGCmr6am7Hh8CxrYyhjRpAjMPG346e99C1ZZjVvHGUV3uP8xDgS",
  "key32": "4RrCVTo9WYirUn1zi3uiaDRa9Ea6wE9255LRzMPA3hABX8Z8rijUwB9PxRf6oWgveN4qy3FGMEx65WiaVwypp4yq",
  "key33": "45PnEfpKzLYAjoaN4BpKKCqdkcmCKpPE3eaQ18pimzJbEbLRK8pZx5CZCSpxDSABHzjs5Ckxkyk5DkMen3vcXKLt",
  "key34": "5CM2UBNoMq7Q92o4oni4hW3i3jRTpCph87Jv6YqPyWwyxMDvqTW582SX49Dym2XRyjuqq9mo91jqZEhd18NStZV",
  "key35": "cwVcE93Y8vCmeFWsGLddLGUNQfYTqAP8djupEMbEwSMCQuDn7jd9GSWZFTHJ4RfuNvi84bBs3mw136XYTZMAm9m",
  "key36": "5a75ioQjFwJkGnv2MRXWezPBtPJEzhT2R3ViAvd1iFeEgqn3egiwh1T43rYs682y2J3f3YyWCoDR6Vh6Zehr7kWN",
  "key37": "jVZoMYQqkMey1WkDrKvgiA1dr4hhDZRYN24bYdUvpK4JtZHh3xWZBzA4rcDqW88kypEsFG5tegvZhtNuRpcgan3",
  "key38": "3yLFSMwvoEBaDvhGh4RWRbB3VBXwNgoZ4cn7fVtPYx7nGTfjspGUkGxT1CVQZw1VyHyRJfAoswiGT4uE38Z9Lap5",
  "key39": "46ZBFewjiuM5c9UejvrkvdcaaVcqq1Rh5kXuRnoAZVKmLkKS9y6tiRQWKaw8z1PdqXYoSHx9Jf7sPrqe6F272Nz",
  "key40": "GSKvbkoJBEMC5faN6hUooBhixWGSjyZcMPt7D41SrXc3Sb2o7Gi4Sr4UEeX9nLQw62Wtn6Bh7qdm9MW8zY9CroV",
  "key41": "PkbpQnFHMVQVYH4HQSTjrfLuukqDh2LnJyUGaV4T1CqvBLFLAx9hRdxcqMwiBLFn9xQuw7pouRfLUeXuKigE6gR",
  "key42": "2XVJmFLBXpyBb6V8tqqDsvFTwUqSNN5mJs6Pb8swv6e71tKGtzyuGoJfonSKyQkAtvo5hGJUxQgxtJoCCcFj6iCS",
  "key43": "4C4GpcNv4FtNvqxNXaA9qufUvP8zFMCxv1sf5baYW4Ai2ETMkEUbhPDCfmwjHS6HvbfcRHa9eXtStA7YJ3j4RAzx",
  "key44": "5555bbBibvYiS6phLdaiMRURiT9VKF1WGEA1P3etXe6GG3eLiddAGiSExxfvMoeasQfVSNDsdh63EN4qaLCYag7k"
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
