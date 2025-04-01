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
    "37FzZ4BFfuFvrGhupRsE6YCSVgWWFZgCKUnzh4r2Vcs2AX2pTnyhbtvRFwKqrMMrQRT6k53nmihrsLC4BpEArzpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zgEKY8JePyBeEiuKzUoKFeLwcRBmom87w9zNkTVpwvALjzxT7FM3YXkd33iHotu4inwHnibni81AWCjdQ2qJua8",
  "key1": "4uqt3mjKAm7B82zkGX9fC7J53MUV7FNjzwoZXEfe5e9hmJJ3qhWdrrmbgcPyFm8Q2sH4VCC53wBBkJuNDyVNDvvC",
  "key2": "4nkSH4HELPB4yxXeJwn1mzcJQwy8VUCKrfVjqDoYwjeSk1vQ4twbxA4TKTmLf5C2evmviwqyMWJir1ABZqbhZSbQ",
  "key3": "3Y2mu6fgQhMFy5rb286zsi8rvSX7jRvXB1v7re11uDrhrTDYAsJxwgSFE434CQMnMjhS3ky87b3SUeJNSHKjEVEz",
  "key4": "329jU8MYTuGgc5bnxWb3UP9LwRnFSdhQFbukxZcX5bqPaqQcXnHjdCQnUUzHjtHFDdSh8kNqb2JRmdShwvaMe2HW",
  "key5": "3PeSNxNtjsK2Fd5yZNAZd3HgPyRzFCEc5F6tBAAPNyf72x6tSGxjYH2hHGYKdm1fggbNPyA16s4HBxDBppDsmRVY",
  "key6": "4CQvKuRMCewyR57jdxzxzr3uDhGRxwcN5Tza6KAubxeSBnwV7AkEu1ru9hhfzAvjKspTogXusuRUNKUnizgUMtzu",
  "key7": "5BALB28VHBrr6wmfT4ep5qeqiJuj7KTJsa9UcC1EmpNBe1QQ4LiZHLdo3R6XxyH8uFvWgq8YwkwSvkPtvgiWmot8",
  "key8": "5AruazFMdzMGM9hGXpYQwMVbwh8sfvr9dDKaNCg3sgCfwvTmMtJvBo43L8SbPuPUe5huCLkR3nLPSAAjXXVaL73K",
  "key9": "5xBxk6kUwD2Y5mhbRDCaPm1VXfZv48Uqou9XybbEGJY2S5WdDVfgMFQ5F7gSYc8f4JcgQ3u12VYZzf48xaB5FndY",
  "key10": "48xE7Aaa5QE8Z3ZSX4MdACACFoZeogcSRCLUCgJoWiEKRJbS2HQZJgBTBDk63N2QXzNDaSpsBPuPD5KcfgZKBjuL",
  "key11": "4zyx6yhq8UPojjQZXufaQdx6H3diyCSPZjyjhH7LWmigeYWntU4DEusEvPcmisXwSjtNDSAKoTEGHdJEBNe2Vimq",
  "key12": "4uq2w8MdNiUMum5Vk1Sg1LZtB9v4icPYhFTtxzJoFxUFrGPDx4x7HUAtritdPps4MgyyfpKW9tUEZxBLZUvGTEHs",
  "key13": "2CunCAWpaajxvUtVzxZK5z6h53nVyQhNDnR5gFohBDbuD1YDmG5Cs8ha2CdnK7GL5EVZADjFpTcenuKjeduDMzVN",
  "key14": "5C7ZSVc5cNaVkgHx5wJ4jkCbFsPRBSzK1QE5NtDvAGkon1PudkzWKRixnVgFQBAHk5Au6fvY2Xr7CpMMxx9bRH3v",
  "key15": "4qKcJadyzxQZJ8CDRLBXZEB3FVyoT5jXb8Ay1ab5E2w6RTcDvWucAC2ynszGznw6pszKCwPMaYLXiDZ5SiLjw5W",
  "key16": "3F45WVykVozRyBs8FxBrn1GKCFoF5bjg1SNv5DvrgPusA8YJzbxyLxUxySzvR2bYrPxfHTefv8ewNtQPiodsSJiw",
  "key17": "35W6ujistphghGEUEtxzLLjzg1GGdF8pU38mrns896jBhH2Wrpi7TEvuqN49ofMbK5nBYUxQztZrZZnADNrd5uk1",
  "key18": "iLrVNBTRETKixH9NEQQPYJ8m6kBA5hGo4L8zwQ4hBa4XwrU7mVhogth76Qna8EoWXKFpASc4rijto4Nykq4CvuG",
  "key19": "2HEwfeFYfrs7f9Scgr6GxEr8Ch3i5naNEgBJGk6BRUJuWxEqkWYLLHdXgwtaccWRQCdCNpQaVGw6oiKnvHfCVqjP",
  "key20": "BWxSEQcSDHj6qxR4WRBPC4vqYttVNCL9xCJTJLw4BqwebMDUjJ5SQchr39GuZhXFc2hMc2HvgnyPXd6FbRRBiSj",
  "key21": "4xj8MGMLzFD4trq5frFDcm9g3D1hZX8UrAK3NVZXNNQm3q1QdVAMEftsBdmAeE5AygjGU9GafijXBzzoeiKFWm8m",
  "key22": "5hxHrsF2YrmPr1qjLCGvJHNS3J6mk7sjn9V64pMXLZdT92iKZ1HfXdntYQSVq7hxSvumKWidkcpxE3tTgbAsaGVd",
  "key23": "5i5uSK4p11JgEMNyiKMVci5o3SPLYtE28eDKA14RsypCwRe8QN9XT93zT3xVX9C4j3W2h3AhxaEEorFZgSSYAKzg",
  "key24": "5Njhuvbyip1TomTcH8PkGhweSfTm3KqK3mP6vFBGVZasPRv6ZkyzUCbEDomrG3eziB4xm3MSsYfHFKLnLzTaAEy1",
  "key25": "63yhaAPVCyxtrrWRqsWrm6Z44UA7wRoZroPTS1iTRC2oeVHockhPSSv9txcy6BwZg6yreqUFXY8NUCCtwggbAYpV",
  "key26": "wkkuYpnK1bbziuax5r23V6mjKDx8r4JSpbDwA8enPmydfQJjappkMqMaG86u3uEgTbjoqVmomXvkJCmBG86LtoE",
  "key27": "5jXmgcdgeEAXMgVJ8c73hPc7JdKLnmQQZTD3ainnxoVpU31Msop2NiCJgBcEYZq3QRTBAobgi4FSxK8QcHgNokWe",
  "key28": "26VHqHxx5bZQxhvoTW1h4jNBPhVd8DCt94JUpYag1DJ8Y9M2DhyarZwtb7E5XeaYGUoePkCCxZajrY7jEMsyShEu",
  "key29": "5zNNaKpYZm7PKbp4jyKcLxbg1R3aFPErLVLrDwwyLcNqNuLeYUsANN4a9KpC8kYZzXsYDwmU19UnY2fv9exBW6jP",
  "key30": "5WHavXTgu2r4A19fqyHg47Ge3ac5sCXbKBEkMzxExqnhHAaFZFsgAVaLG3Cfkd1Zm8n91bi1EoinS4ahwf6FLC89",
  "key31": "2jjszYD3j6btXa9HXYtwi6HPjZJj7Y6eeQDuYKufD1u9PwMc8Nv9HS8M8Z6sf8YQYgMdmfjhoCsruxq9FxzBZw4e",
  "key32": "HhyGboupo81eg6VDTYtXQcPzVSfGMqJrmejQ7dEpNLGwsZgGtX7TGqyUTBikCjPsb6UNasmbituk1zMLLnKQ3aQ",
  "key33": "4Ps2dLchiQ1QUAeHwxNyZQhke2BFbfdAJpsGqLjimrgHHxpecmd6gNywahfziGHpTBxE81qvmRBqmgRZ4g3YUDzT",
  "key34": "3HnUSX3XCLX8K89KoDjTcS374GhmDmhroYL6GyCAUiuBvDiaryi67JUsbUxrhp47c45E6LaHsMU3vpj3uWnTNrVN",
  "key35": "ZPZqYFp9pvHLBg3GdCe7CLSMksg1G92T96iq7383zs8tukJwvBpTvY47Y7bcchBUN3EsnXcw2YsynsmbuAfYVL7",
  "key36": "3AiAXYocqh7QpZa4z8WxXxxWX6ANSjyv86Gm8HkYTtJtAcffzuoJPFM7BoWTwBVDQwvsgdeNVJF9XSgdvJP1sxWA",
  "key37": "WZLCXZAbZquktiN6dWLQAec7zqYrqCG6tnp7pD6UDggdCYm5cfyDnz6B5546Rx6tihnh6NEG8dczjJtTEXeqA6E",
  "key38": "2jiDLVMuDBgf2kxhHbPj2foKLwN3H2AB2CoAwURPPNsU2c4bgAQtzJsWnPahhvzGmpiNfG6kiC45xXDr3GrTxSdh",
  "key39": "47ATUmDAdqoZkLkyQQsbfpvJgTiDbumpmQDWbLngdDySLFPneqrTpofEdre2aYi22P1jQVDmNHSbcvdcVRn1cXPV",
  "key40": "yDBCnoHxt6HuJPMj78zRSHvmVVFsK17nrX87XVwDAABMNQohH46HgfxCQwVkiXjR72ua6cBNDgVQadnbYXaC4Cs",
  "key41": "4por1NrLs13vK8SxMML2UrPK1QxPJzBfeh46AKuzUoLRHNoh4tN3THGX2ZfWWehXABwT5yPb4evvdwA3HoXjiLZo",
  "key42": "2jFGb1kGFpscrRvBQpTLvWkgGRLKDRhVNb5aKJuXCH7DRKGWuEWTRZ7PcL4fWDMndZio74MDxNy1NJABJZ1RE9pq",
  "key43": "Me7fg4eDgtR1ArXYkT1CCpJHP2yocqBKsnpbFWujvpF9XXTyEZqwUi5S1vWw2Q2bhcj8EWuLpABAZCoYVcxXmDs",
  "key44": "2vmTMLJMrMLy4Gu4uKnAJBV1S9MVmLcBrYiZCwHJnfb2Lf9Sp1LTS71eS99uQ9iyPrD9o98MRgKn55qakuo9wnyG",
  "key45": "4npTB9nSApNnM8wCvtmKiXEngDZdn9LE1unu9Hw9SirpbqacDhYfD1XWrPPYT7TQ8xUkWkJ4cU6VnsnAWCAeNjoj",
  "key46": "3TkrgYRopbJr4Yd8FCifNekWvbtj3WpG9RGd4CXFMvmnDRxYnrxaS6JgNgkCvYHBxQvpteNsBswEFPhQpAcxdHRs"
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
