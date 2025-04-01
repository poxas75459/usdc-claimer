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
    "4jyHgdmhLnV7YeA8t8RdUWVuVfhh18efxi9RGrEnJfcwqTL6nSBKSYRT5Dw9mANxyzdHbgxmQWankD77xPCheekV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLGRDkkxJbTnhbVUDQvJQoxAjap9iWh51AEtuxRWxaK1ggBkLw8WQmvX14ZFV4JCovMjdGRyAMustA4yjQw93KR",
  "key1": "2sNkiLHazAU1YQEwSJpBetVBYZQBjjDuQQgixuLHifAjw9A12kSzztjM4yTZKVVHtCdnfKCdaBtCCMrTWWyzULwB",
  "key2": "4G2M3E1WaZqFNAxkpSJFjk361xtVxsuGh4Ecg4mPs3xhnskrUAEGqtFfSjrqVE2AZBXKhhgwQCpUAHdg3hYiZaYk",
  "key3": "Az3dPcpAJHRy1aCyANxiWHFKXi5dQP4NLMHBwodMRFnpo1xFgvpqSDYaPjqJ2HoboMTnyYNTQzhhY63uAdySHbh",
  "key4": "v9RsGdCMwhxPG7fEWJJct1VvimauT19QsnSVXM5Bx54KHRqYubCTo6T9YDpW5N8h9gRsjwV3TZd5x72hqgXYKxp",
  "key5": "2SCD1so87wHBv1UASXSX65qajD72vHmjYWR84GVKRtQcPD2EkLCrQiGgejpnfhcrninwkQAiYB4S1P6w9ZWkoUrw",
  "key6": "5ZzfccaQoH87VosASG6y7UMXxgsqypaseKV75pV7NGsH8HBXXv92H7hN4WTrM8R4Poq92vFje5gGKRFHH7gTgUpd",
  "key7": "3bvLacpvW1w8K6mZSwXn2ywbqGMV1Lz7L9PcxoG5SeJ6q4wRfCWq1TsAMswnMTzX8oTBrBe2ALS1J8VBBveF33BC",
  "key8": "3L5g5WyFYSxxY93pXDzgPTLY2m9w1TwLA471tvTLTRunuiJza5PBsAWjQ6feYdRF7dZxnoKtXspa1oFdnBeF2tCv",
  "key9": "5SMDVJm1655ZmFURhEonkEETNDmVDg6MUjJEgWi9yjeFHJxhwuxEoCoiyp7WxgLkisD39Ms4yZLiUakDcu33Fw4h",
  "key10": "4bYjti2uaLVNxoEoujX3PiauPnwypZrzgJNPGkAxYreWVPmJ2hMWuyCjNrSKXNwYv1K2qx38unPzWzKQxgmnW2h2",
  "key11": "2kwXpwwUnsda8P7Me8ro7R5zkBRJvZj1djKcupfJkT6ah72Ec3jhhAyQoxomk1C7WrVhwtpkaqwfA3UtU4G4peXZ",
  "key12": "5ex5ykBAYDhECusjMPBM5ULdXy6hU3ZDhxzpzaMTgUrizjaKPQCRVswhVuNjurcbv84DAnYhERFWrQbMqtdEBHh4",
  "key13": "2YDbDA5TdjCHCu9fYUXxucnxNfVvLnDURYDjS7JETLpVGY6SSMMbQZW1mf4eERSiJTqhbeXR8gXzMhHpHqaANHig",
  "key14": "2tjraUdyDjB6PfayLsjbFBQ7MB2gTJ6WbUAxXnADyAiF9ba3J2mLg2SyLg8wPg6vcNqQKEnYUxXNpDT3qq9h4BNh",
  "key15": "5MJzx1uSg9nWgqB3E4bN9JS3shYsXhTR1YxwVJX4o8NXe6mJqZ6bj9nCLKp5KwEoHhALp2AaSnWtKFViJcHvrRXK",
  "key16": "tELXUyPLi9b1y9vK3dr1mPuT95EoK8CThpEW9StnaiHqMcY7ozduENKmPLU3xJGhn1rcGVY92XzQPuRABVKYKcz",
  "key17": "4nDaDDQmsWMXdmC8Akirq74TsaGpMTCzSMH56RUqGCxRpem9cGdKm2miJPyrVAGNpht9fZL6MiuLn1vi4YvYyD57",
  "key18": "xrSa7NuuYMY2v3YBw5ZsvMH5BjXfNkyJRypE7vtpUbVzqZCuCvsLFc3ZQojgpGXs3gZCGP1RyN9RGBsH8s3amCu",
  "key19": "2UXiBDYJSm64ccqHCvjktSK1XTJxCXdCU1NF8ZyuMDp8QPzGmL6qoZ7zYPFXnN17GJff46kAZerqNWNNG64S4Pfb",
  "key20": "4j4rHX5cd1WkNwwrEgtXmmmgKkGwPQKnyygyVCVy22PtLAjRVLaDsUWvMqYq7gZ3L6bSh2u6oYp5UvAUppY93Uir",
  "key21": "2SPSA9h3Ep6REeof575g4jTEMZvuFUvafrvFKDiih36yEQuSrRWY8dMs7FJcQEgAqdpvpoBCLdMZLYfyRLixz4xC",
  "key22": "2r2uGooZP3HYFDijbQWPGaEcP799wVMkWHZq8FvW4u6P5M31N2wR8EPnSBbc7DfXFeJkVLTN5LXwBDgJ698YReiA",
  "key23": "4QdzFRsy1jwzvWQ46inB3n2BuXsKgYHHJomgomAvjg192sGNnZh3JLEDcJTFThcbB9Hh8JgwErwVvab2WDcS93S1",
  "key24": "gAetsNsNfbJ2AmDSu8jR3WYKjpKqvWyqD15Qxu3Acr5mnFgvjmPbPngvADHd69eGRzetKaqeU9XbSXqCLt5LDRb",
  "key25": "4NvACyVNjD7LxfsvZNo5q6BN5QCJM8hvzM4RGB4fDsMvjiSvbsxGPRVD2yC3Sanjm5udp7pgqLDrEpfqdDDXijK9",
  "key26": "3T3mtm2j6ERLtqdEhY9vHoarub6zKV7CwTFRPuLZa2dy3uZzCxaYGfDeyF7B9A1MeScjiWniWeKD3MjsrTtvEFr4",
  "key27": "32samj6eUMnRDFp72Cn15haR8HKYsLbHrSXqvDikLv5xAmqA44rcWibBB1hQHFd3y3GyStcBNuxY2gufE22pFmQc",
  "key28": "45As1dF2tz4J42k943qjVccsiwi3EdatiLTJAFbH6SQj85iwj2q37cABGBZNEV3exaQTuQhGtCaYgda1LhRX7RSN",
  "key29": "3TG4A8cbzLZYBbrc977uRRBS6wfGKGkmog7jTSx9ZZkTvB7gXaLjjWYLhb1PMzr7PHHwZivrGi644czfQFCYkDMx",
  "key30": "41r6YJBQfy3SsKq9WgG3WSGTqx44vZaWGqvWwunv4kYUU5LjSF8W9BVwNLmbXaXPMJoLP8V3zpv9JvctF52kLvg7",
  "key31": "4h144yJhRujHgmSkytHvb5kVhWymEXzJ6F7Ad1KVGzLt1n6gYDk7Rpt14xMaJcPUQ1wWPbRZAJCfQVKnoYcxHNyw",
  "key32": "36wjAcyrAmGgsK8SFXkWzpNkJuUcyiCnTL5BMi41cbbjCNe8YsUMyNSCfsvib3kcqZWseL8TceF1VaZRW5t4ri6J",
  "key33": "2hbNc9wFzq9KMkVfTqNDhvKoFL3e23UWt9Cgyku9UGWSDmEVGHewibQt2GEu2DoqBuv9zsBimv5uQWM4aQbYiVjX",
  "key34": "3My6QrqX5kfgLJQP1U8eZ6hvadbokqT5UaTidGCTZjdraaE3t9uocweNzkcLeGE2DYtDihNST9HNbv2Bu9UKSjta",
  "key35": "5KMUDuWAfekYUX19zsA73YYoSEMqwZxSpfGQJ2tvPUrtcSRJhYPNiHGjPGMf7LZuXvz1d8rMLcvQps77Ta7zoBF7",
  "key36": "55pfuUCKDSrLf4bEADrM6eRoG3mXPS8vhcnSuAm6geKCENFNDbzduvEkXtBwfXt6EEnHu64oWPEsonK5fGyvpxa1",
  "key37": "NVy1faJSgAYAMcdYHkoreD4hxNbERqQYJxLvszugzpX4eo2vpHf54TrxPV3crg4FHTh3k989en72Y2HTsjjEHmJ",
  "key38": "2oBpMLodAnmzDrdjyj725E7uy6kZuUzQiNdyGKyM5LdD73VT41QMkqQJTtmVrfbsfzHhhn5FMr6kbK9oxuMiiKjM",
  "key39": "5suBPGGmc549uQS7gU6xrGzMssow9vqBDoY7QZnNvKPanLmfwDMiLijabkFhp3UkLCfYuc3Q5rAgFTwvP9hBggHr",
  "key40": "2D4R9XeFAKQwQYpunx6SKyKTtCvoYkGXd8XNpx4wMQfsmrj5ULJrYaFMFaZLwx19VnvhCfHEw7EevyYniYGQMScm",
  "key41": "3PboAif2CYKdZGbKvyPSeoXizRC5Kdzm1w9So2tzdHiSzHrpMnJAJRapGnaixuQUqL7Sjb1zENxNLSVqsDG7wzwU",
  "key42": "3HetUsPfkSxSoVEzrfYhjfVpuLtSFhwtNmb2Mo8cvWcpokc3B5MJHGWKwTJi3XKnPDUMzD1HrXSe369EdwKHiUMm",
  "key43": "3cyh8sWN5AeTFF3Pc5JzTghZHpDUiEpLV4fHqQhRgFs8us3AqR4A2r8bMBtNyYah2cHWqS5kAa81EtUfxyqAQvPm",
  "key44": "5owWNfyV1LJCcvhHLPyxhDA2aCWN6GTVutovrtEwJuwzDd4dbtgzC265RKzLdwA6aukAUKVgYY9WLVsg1ZmWyFRH",
  "key45": "3W2eCzFoUrUWfopuQTmcJu78QPxXX68nm9ninGLKpTSbpHhsjb9gutnVBjHtyPNP2Hri1gcoXJYd76E39evMYDhM",
  "key46": "3hM1RbxJVDUZcKT4kLATK31YvUqYKFSunEtRyAyoqngoRJX97sCkFqWoPAegQTAXWuNFr7LXwbHQ6koe2eu1Gxch",
  "key47": "4joq3je1qbNpgBp4FKSdnYsD7EKMZLWGtD6C9HYoNPYCMhPCUmzETTC961ix5Hu3V2omUjPab2RqZUGPr6wRdXNE",
  "key48": "2L12BuziM8MsoghoPSec36gEpBJwk61gopHLzarbovBBzGVyC28RphYYkQAhnykxGagK5DpTML5bojjMQDDfbvbP",
  "key49": "5omXS7L727i3rnhvZVWhcKakDot3KnJsdJqw998JW8EYJbe7D2JpKQ9LvJaZps4RsDEAX2sYrueAPx4Vmjeqhdqd"
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
