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
    "3ekZ4Qxy2q1jH9shuuXfcwEbhrig1fQchuqsU8LToBza21zgaU3h7XQo1SguWAkxXsgfxDK6hhpDaFtTYYUVFw6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123Dz27RE3kD7cGgXnJX5hGqCtCsyTFEBNsau4yargxDD1m2tCtwwq2dMmaRNzp8fC2E6EFrsGk7Tp2X4s9N4WyH",
  "key1": "4nTgCyU92Crq3xJSBoNaubnPC6zRVjZKAevTMFk3izhpJ9g7B4wYqSTXtWhzQ5NkiZ96yD1LoBNnTWwD7hxFwGPw",
  "key2": "5AJ8UZYiey4NRKECaV3nmsznCZcZE7hw24qyasUB97Y7mE7qLAhxV6F9fjbk4waLRJhLd5oXRVzY1RAJjh6jm8RN",
  "key3": "5LDEYNsqFx6MtBZafTx6SDkkCAA3e3naQt9Bfg1V5dJ43mRjF4dfTUomJG7QpWWfktTnNAZf9EpnoEL1XkZFtYQF",
  "key4": "5SVtbeY4RKZ5dVKkqfTSEXEnnQXg4aERTLzgcpvkJdS6ucEzkCpkBRRhc9Tdkoa1TuAH7fRfHg51aVQSFqtMuHU8",
  "key5": "2dF1ZRAFFmraJNUsh5wt57eJJXNpPEWUaACgyGv2ioD7pSxkjSzvW1dmdUbBnVkuUdA6ay9CFr4RQMoW6YMVBi6G",
  "key6": "66FZCBxh1k3EKnUfiPcrcQU4LS4EwPvcxGsE66hkqwQL5VZ7LHKMiiiATywFnZ5ys98C9AdzqmGcaX6C2k7zx37n",
  "key7": "95E1i2TaRzDrXu42D2zXrMRh4jNMrhPuLhihsHsRJbhV4p3ehQMqTjPEAiF9d4UbBVLYD4z5yCwvpbSP4cdSf1M",
  "key8": "4dYWJge1JVWE4kfvFG7c3fDDWhNckHZjbwc7Tz9w7mHDvp4ebbdbEDRJcm1PepRPqgUELzvFp1BSx5GN8pXnNKyA",
  "key9": "4gmyG1q6d3k9GP4b44LB2ymKM1rZen9frsXm26mBWGadrh9Viwf2EZ8UC4gZGbXMZPrM45bKVDsifn6aS9tsjZjG",
  "key10": "2mV9FVTZD4bPvTjknSPmGbCvfjRj9xHPCgevmJ3HsBjFdVKWQodibGP5htUQayc9oGzCcRsSiDU3oPQzGB8FrdFA",
  "key11": "41BmtV5aQkznyM15RDhsJ3dNMmQD4BBGSXzRYLU2kJNM7hBtPygsJrWEP5e3ipUz4coaT9NdCiRh1TSjnBPuCgc5",
  "key12": "52pEgtmadwPXEEFTBMXjqn8QySwxQvWhFpPia6vWpafUjvRk3Ffsg7YyyfmVVrZZJzkqygGmP9257ixfxruwdUoJ",
  "key13": "rSrz6E28kpifni6QvxG1hy8QJJUhPgaHe1TEvpFpN1u2Ei8DbSiRYekSomaEjUk1N82jVoZ14LXDYver7nJViu2",
  "key14": "4zh1eLV5saCPXQGbSaoztLpvcyVn2XJhdcSWEMfi8ypBkgmoNNYvPDa574eL9MfD8xTMYYbvcs9eyV9dabwg1HJd",
  "key15": "3i7UV6VDD5PqjD967KCfK4cJwPTcJarnhAb5TyVQ47zUGoH7B9ZPiCUAwqMp5qm5xdccTAazee8Ac2L8AURnAMGh",
  "key16": "fpqeVbcxezR4dHqxj4f6K6JE4ApAHgKjivqtDAV4eTJD8bSahot23Ny2mQAyotRP8PRH7VNyZjYPKz92qMNosj1",
  "key17": "2EuHZoiqx5ZMNuz7BD2Hp8RCqgmiiViaKuUBkMgVcfXYzgAbMX8gZqeyS6ch4XrJ93UoF4bndxbcYpeMW1CeMzMS",
  "key18": "5HRTdENUaTmEvZMT1FszBXNK422dqRpKoXgXCCwFsaB9AoNvfMFZxH2YDpZXc9Rozcw5PMDXsCGbEcLUdQHhx2A8",
  "key19": "577azKmNssHEgrii5AmGipjqqcZqWGvMgds2cGCTZacArJnLoihryjpS4Fkn8JzrUsSMuNmZieXbYiW8rGHPYVkY",
  "key20": "7VAqt2YBhHtXacMM3drpy2xzxR4KFbjYb8WV6JQsQWG24bsAvUbyGVHukTGUWBebV7rKTcLvL6tN32ReSYK8kRw",
  "key21": "2q295zH5o4bDajV38bAAa4YFxVgP18Bgnqkej2bnCcCJeXSWTw7hPxQuaDCRh2UYZ3Z5EprhQ8mBPQQmxvVQ2eLZ",
  "key22": "2pFt9ahTdKRHy1ywTqDgozMTT2SUkHkTJ5ravDsRSkFh4evZb8s5RNXTLUHUuyLkvuT5AuXyaxra57h6Y2ADdsZN",
  "key23": "5U1Spst5dc8Hd27KGweR5HfRw8qKhHTDzywXoidEYkCTuzujwQ42VRxc2MHv1P3sv37RizsxDbDbK3yNbNM2RMeB",
  "key24": "qbyb7QbxfNSeKM4o4y2w2e9nRAk1DsZ1geaHQGniMJNVJnYJoXG9az7ghxggYQvA8VfbJFi2YfVivbkiFhaipuW",
  "key25": "5ZY4qQAtqLFuHm2Muk6yeBCGpUVgPw1ScRTGHatWx7X4efHvuNWgCXSewyENc1NCwHvcDrPk3c8KhupXiC1gfVGr",
  "key26": "3ubMnesTGCEZtWb7saMwckuULa8jcSCmEKuTbRCY71noAWzkp7Hyy7F8CNS5S9ndpo7Z6oKDH34V4qL2ss4ym4T6",
  "key27": "46VNgG2bdusmgsqGWHjisXtwCUfoNdMa2R3SKDopGMNTyRnKLuaxj9EZeFirFMS32egMipXMhGA5np3y9pKaMa9f",
  "key28": "4G6HAZC93FFc6EbjPNHQynwQWDHcQmo7B5xPxSH4iXjmJFyah7oBgMu8KdPLfAM76Q1ffHGT8tLnrmzey1wkiB96",
  "key29": "4aQHJ99BenbjXoytsj4VqTNEN8vxAmuvxasWuCPX9xHFLjwCKgqH7ganYVqURj1poovUBFRENrk6D28FbLpJRub9",
  "key30": "57tBdT2JbV3AEo5YmJAxWB1dVbqGcgtfexmrcw7yTjgStLHkoSkZKz5QxQ6YFs5WhDhu6ahn1hxbWweZCF2gmxkV",
  "key31": "4cUY95LqrDAX6SAQP8byxXvbWcUVDGxnqkD8UzcPQQ11h4rG1HnShFi4amsduELd7hFkJK4VS7ymYxM1513r5Uoo",
  "key32": "4xUCbNNGo8PF3mFjKNwUzYBJkAEr4DC8mTHBgytFjxjuz1UdaR13ujdYnBPEKLgaQ21bTzG1afNUKj8NB9Dm2gi8",
  "key33": "5hYnajNgaB3GD2hMTd8wawAqKfWxubvS4paghPYnaVJyVTUNwKdLjhq9HDjs5iVJAvVuabXUMMCv1mwN9sy2S8nk",
  "key34": "2MRB2VWZwnNompPCsmKUMLvo8UujvvyAoZbyzqkiYYF8QKXo32qq683TaA2FHramtheEfx369HTdyBRdGrhbMnqH",
  "key35": "54BUNxvyrc1Ruwa43CaA6QBggGu1gsqayP1bftVPLenMUV9ALi6XXt891Zq2rSE4Gs5xJYtNrpCKNX8oguUj7exC",
  "key36": "24enaZW6iRUjvroSwSTy42FNgu4HV6Sbp97zD1pJkg7D4V7ysNmCtvy2wN5X3FiBmU89y9EmKWKJxjNWgvTy2xv3",
  "key37": "5gETDHdtHgPjeWdyBfyEAxvTW3RZy1gyk3Gyf8HRe2DhvvXnCpA86wjaZMSD8rLDqRKApaNhqM5J3YuEvG13acbA",
  "key38": "2Cu4B5aUA581pF8nxgNukbZZZXsehBYF7iWQGDidMwpU4G6UqkLZPR3vk6ftGSAsym6oRmZHTEEn43yWoSJEpGTv",
  "key39": "KzM6hT2PCqPT9Sgza72ym3xVRwgH28fasdp1ARoQS9h24mbzHb4xnsGnBmrqDEMWfZnN2tqNvdjTaxGjEXJRkK3",
  "key40": "2VATgdt5giQZMgMhyuCkxLsKV3mUSjrifueEYqtK51CB38puKuRUWZcKikmQ7Yf119va3QQSgwmMCm7yrngpdDc4",
  "key41": "3tLin1pYxKtsdAeqDmxDz6zhXnBVV6MSHeb4AMtQsfnrDaEGCspAzpe3Kony8Vq1g8KAHLW85rdMgjysWg9pHxWo",
  "key42": "zddZGZoGPRMKDPcVkXzftyGaGX9kEV7JXQndpMSyfrqSLSfXp4VUSY6mv5e65UYeg6FYFFVytQeeN1GVxWLp8ep",
  "key43": "55ha91oXLLu8mHyXxYYBEtZxVAyB9YjYsPE95MZEqiZPEitKyAKi1v6QehyMhtzjBvGhcpouhjmC8T5uRogzCBgD",
  "key44": "2nVx336HTiqLX5AtaQEmUuCdKKSkunekZsoYdN9SM4G2wCigihdgj7G4BcaSFFaZb5sCfo7MHhTM5ef6dD6G2hYd",
  "key45": "4usbHxmNPRAyBBf7d8CjXQhecSDJ2e83Y6phk5agPPGNiCDdMaddhEp54t3P3iayXci6ZS2cZ6B8DEzobZtoKm7V",
  "key46": "3GYYy1VxmGzrbhhqGUiRZB4Uemf6dcoCV5r52sy1UcgryCHpJ99k4JizcdgHhgzg8CjUbsdv4opvuJAd8GoW9yFB",
  "key47": "2C3Q2Ta4g6TA5yaiepi34c8X46YqVwNoYtpPFF5SywNw7q7fVwuv2B51bfGqtnm7yYUBd3XYPE5jx99N7DsArvLh",
  "key48": "5SJdKwJgfAjkxx4us9MjbvFWX2Wb4Ro3hMMFQhSEb6ZJB7zwFBz41a4jLSNNYzCcGRttdVqoHG41HLK1zUNSvEuS",
  "key49": "2Kd2jQ1ojiX4Dq8CwQViaErB7n6CT1VqikvpWyTk6nQiSeTXBJNGEBuanDAt4vcLCNXduzBtGV2rFidVbrbk8hzm"
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
