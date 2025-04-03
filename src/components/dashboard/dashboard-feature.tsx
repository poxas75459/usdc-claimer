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
    "42K9VSqAk6XP8pBoK5tace8oKf5Y37RW9yjqiegcdq3czuwjLsnxdGWSp5ypYuUEs7e2Gvw3h2Vp4Ereeq5b9qSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZUsafvkDQ5ebHh5zBrMpg63jGUHyeyo2DapuZoHpU9buYxR59Y93NAKimXLRoFmJYJmsD4qo5dKiS4Y3dTNoEd",
  "key1": "5Bq8LdwVs5hzeQ3dRVDo7vtof8NsBShcr5hFcEFnWvxdsZPKryBA3Ps9m8DHBzjK5wH643hYan5toeq8g8HiGacR",
  "key2": "iN8LcRmTi4nyVxPED5i9EqmA2Nm3DXtSNSurEPcU4qypz6yhvgRnn3w15SkZFrwW6NQf6GcK96SrVuheajCFfWy",
  "key3": "3UzVECu8f3H9A2ow7vGGDZkQz1hSkNCHgrpYpjkEUByzPSbYGqPUjsXqGA1BuFgy7W21H7SNqQW96rWPaQifB4h3",
  "key4": "3ti22Jcr63cAMJG63MCCfRQB3fQCew5U1T1jbWyVxxFKFU3Rd3NHz6pKfn2xGqcpmSd4GysPQGgJTggMRaBhVcAH",
  "key5": "KZ6jQ7YQE33h591axCHKcCjA4AmehR7gRkcCxF26yTD6Bk5zdkwVep7sVGQpf2DYLkXUvbVpKztfjdTwGsNzXBL",
  "key6": "YXmV2UC4nPLPEkXuDfnxD2ajFa6bM6GZbRuUprLnPG15F9t1dZ7JMPMYAhAacNBMSn7s8AexwMLXwGKs97ksheq",
  "key7": "2GhgWcWSwZ1HLsSyNrPnBtQG6oPorFc4MQPUdqfpbZyFjTeQZFqWxNWqWTFzAL8bQwboysoDkJhvTJiRSBYqA6jF",
  "key8": "hqWaQckq9dAc1jgErC2EaQqMdDwC5Wv8RMpufBi3LrewjPCvWGKvSK2cp3B2CvVjstDqWT1fFihFhMEX2hRv9NY",
  "key9": "5yrARukNrcNMq8GiueCp6BPQQPi1e5YqfWyiFBaxYiRrqSAuewdaDuzGNrynaoKMQq1qdQXKaXbcnge4saZZKdpR",
  "key10": "rouKjCJtYfJY5LsoBv6Q1Zoqv4i9WAdX9G1dYHX494d7WjoqWQ2M45HTkpjNH1S2S1Pt7cxMs3A9CKPxQxSB7C6",
  "key11": "3s9rhsAhULbQdeVyURHCAA81nYbVDoow8o87QaAD3SX3sdUVgwe8nUf7fhFAkbWL6JmP4v5H1WKcyNA3x7eLwXoC",
  "key12": "3u1makfBY6CvdiKrsonW9kPgw6n2DwHq7me9Yz2kFoM8PX6CDCy2RAP2MtPXGzGFbofdX9j119cThez4GhSqPGt7",
  "key13": "2T8pDhMhJ9Kt6PYrpnurZZgvSagqmqCGD8FEVkmmgjXvfYQ2XeptGHBMfvhLvydKPEG8tXqcTHXysgRoPdd1tEB7",
  "key14": "4PRGZgpcKLqjieNGpTEzwveE9Uq4VoK1CzzgvEcL2GZaeN6bKSRbh5yzrqpLQaLmLxfPkVXn8gEqhKF91nrYfHC1",
  "key15": "3hgdsT2KcpvAqmDQ4mkEbvQezqQqh6g1FjtKJ23JFAE8WU4PRCuxe5UfHG9rN951AoMqyJ7NZtrmaVLFjWMaQxKE",
  "key16": "42gE8R2w4TxTMwtqJZf6u23b7EfNfwHvoMe1Y591gtMTszqto5f9w49ZCcHuTJWxXcZZKmkcHoZfcjv9j7mV7Fns",
  "key17": "qEMu6PF2n1YKvGKLz5dUFy9ca3Qg2HUhbfrUTjE8DmP2Kvy7QxXX7zZ8Pqhfq9jNGQR7MumSAbtGrJYMaspB1EC",
  "key18": "4Jjv2i3BYJrgSDQsMqMHZcJsnYKiTguweVExbmsLJXSBgNTBT6X6QA4oTA2VweDUKGUExXK8fedbd8nrJHKPqBg8",
  "key19": "4vV5CZLqAaD4LfKeHCaWqddpm6rxPY1pCJA8ccU4vewLKhNFTt9vVvJXVGoU9Do917PDbDaaonHCjN9aPQrQZxT",
  "key20": "3gpJLUawgzAv9SSr8hXfZAwRTvbZGwyMYNtxRmkmyeU6HZmLPGCUSVZtc5hzK1RimGwhPxV5Lox95o2Uf5ESFeuL",
  "key21": "372Z4TnaMTWYqFPejA5Mu14xsxkNYTmgmqs9qYzDzrcbQ6gMjoi85arFYeiuHBezTPdeJnE65ceCCgSUwLJg9K4g",
  "key22": "TSnMoN99YKS97DUyBXdQ2FJf3WdMFYD3b6Qpiz2HLUpsmpgLSRHEnvJRGRNEbt8Eoe9LCPfvKQQVrhtjgVGeAmt",
  "key23": "57Eop7vidp4RGMV8heC44AtZ34v8ShvVu2ixMHtpPrYEn3EoNdE8tyq2wHstDQQRjoTp7eDDYVvdTDBRVuaZntQ4",
  "key24": "4Sv1MExA9TuCC1MtaEVV8DzKDyA2Yj51gnCpij48WcoMHdmLsQjU9tH9db2Rh7UVFe2jWaRtCJu5NWZpwcybuk4U",
  "key25": "2E4YULt5stxMS7K2crtL9h3eN1huhXQZa9sj8jDdazhfVfz9LfRYsFumDMKhkVPkD5s87LoGPwrbrNmzRKBSs6cy",
  "key26": "ZNJzy3oMckNHw7TDTLyJRPh52Te1mmFGMDvF55TVXjVVAn91xRJHP7fb24dBr95MCHrT7L5BoyWjm17JohUuXZG",
  "key27": "3Cuw7sDmhcQopZwFu3cYAfTESLNsoWYiJ7HUKgiyYp6HW9a7Tj7eCzWWKRfbG4HWLdBGsmLvtSJjDSkqsXaoFDEP",
  "key28": "LCv5QaXvQi22YgoVpE9QBNBCKznsjCuKogV3CnFwdudtABGSPXMQcCLyn4VTDySBYqxWiVHgzirPUq8JjkpdhRd",
  "key29": "4oko5PdKrHG9mfbAq5yPPNrggDVsfF1JCBZrRfoBxrtxELevxG8H5w6S9YqeCVizjzmHKzHomQrhMgTgvkFZRR7i",
  "key30": "nqd3WRimAa3M8L3k42vkDvg81VfW4UQEmn3J9FL5S2UG9XotGuSZU3SoozMQELYNz15HKYMdmcw1p4d5znSUEpA",
  "key31": "3HPDRbPmJqBqeNMDA5obV2QFbyJdSsHMdJaMrY7HMtqg9SGVNGnGgeA2BtxhkHyLFm462KVwzPkngJqn5Ftjrt4d",
  "key32": "3CxKSu4HSYNpxGWdw4RkmWXXAD2364xiM2K5c5eLo2Ssp7ixcYARkGQeRnkWT1ixQnDQTsfeNvmLaishUj6VVw7L",
  "key33": "3hnPaGNfUeji1LoKG9noRtsEhKtNDKfCXCRkuCafJfmRcU4BrNdJVZ16WXmy9Wny6y2BTqy1xhdHVh3cBxez68jn",
  "key34": "3h3kBaprJYFvRAMzAB1MK1DzqF5818cDFpM4cVxWnK41Bn3pvm65TgdGWHzCjuPYGtfCokgQMsUo8oe4FgANSTGN",
  "key35": "4pwgTmFCx23Vuwv5Eqv7sTi9YVsefwHkYEmPD4VZw12PwNVk7ew24Y4RwnPjtp6sStNW3Tx4th4kSfnFvLr2y8EM",
  "key36": "54S5nXb3PJyprH18pjnUwsgSquXHqkm3BU2s7cJTY5bkvuWsYpfDVtAkNpXttLE5zqNvmhDuuaDS9e9UmSgqJKvf",
  "key37": "2kzovixyPFnnYoi8EfUvhvVtrBCrDyysaTCSDfu8dzUPfYU8nsKSc3hqyySd3xwBUy9CUyCek1m9yCg54iiS9Ecw",
  "key38": "GRUik5xAJ5ghxN8sRvyGcDCgh1BDJYiH8SD29BAkAuLQdY538e6Lbpj6LLiSZpKtD8UpgBMcB2gybpBPcxaqH3s",
  "key39": "5LPKoC9f5Ab2Ra6qhVnJPJjK1DpT6SV22hgcXTcygAH1ZUD1sg5BiYvydai3g3EYCGvGQv3iTZz4cLzXJ1rCiLYh",
  "key40": "Kc92pdnUNCPWqavpFUYKypNq2ANCpk36yqHQN4BvAxdcFmACPuJ5YQVy17PJQrfhsgMf8R2aVGY2pohbXSbZYWx",
  "key41": "4BLfZ6caWHYUvNSAHUzqe1NPQ3y5xSsnBQPbiZeFYf2yKUcyxc3kK8iYxVTQfEuCgLrSiGoYAG1ExCwLDxXzGVrc",
  "key42": "1bUEP1xnSK55G763N7gVGJswZHdLmo6gbvL6UbjPS44aLqUe8SEyW3HkwUcuzeTtXxh8wHvMv7kT9WVVmkhG9Si"
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
