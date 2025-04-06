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
    "4LtaZHtpSYBUcd2LNTc3txv8rpveQ78peSfiLPyUWivPtbTtC5Lt6PHXVgZY6GBLhfpDiEA9UqphsQ1s3eNpuRbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffGz5DVNJunKWrjLxto6E62wSkbZtd2N2rmqb6qkN4uFWiZHytiodRky8zmLP4SEueVQyNHPY8V9g6R3LbZ3gcL",
  "key1": "sbosbRQ8aWPRvNDgsSwEot4XGEaUxLU1J2vdBxaVykPaerxfY9o31wSu1BwDfQkUygZy1tozpuTyWbTAxnz4mUQ",
  "key2": "4KSQ7nehEuTM4chLpNiPuF4n5ucMcfwkyiuiJ1YVmXAa5xTffRh7RUTN2X8m6qSXeJT98MT8piXsfJePJEgguM6Z",
  "key3": "AKwpn5p4gJineMh6J2efyvHg1tnmKYs3EMu5oUvtyiRRfktUXh8SVdnApoGfGP81ie9QXh1A3fhwkt9dJVZh3Gy",
  "key4": "3qL6QjHAiGywYJ5R5zFarsEcay1NAkGQz3TpNWJNjTL5XRfnCSVUxfTFdYJyaERGooNkn7uKKZSJBAb8aMQDvkGA",
  "key5": "thToEAHpEgjMAQ5ofnWRHJk9W2rU5Bcnm9U5NWXFi6PKz1r5AVFZn1wUxmyLUcscwP36Et3r2PFNkD9oNactt6t",
  "key6": "5AAGketcZCZaKTxxwX2oWqCHw1iRetRYnxHa3kDGHZZdLwAzbyAwGYFEzSA9SLekCWM65TEDzz4sckVqRPVovNpc",
  "key7": "2HutzYufPGTqA8kS2ZE7M4RR7Qzao6Btc4fmUTctjdjxHo3Xm8CrGox3EeoWsVQDi6ky1b8QLS6wh1y2VVDsEUZW",
  "key8": "3euLMabFKBZGyvX4shzMT3SqSAQKsGThJHL6jRjJh7usNH7zKM1BdeVyeFmmKXQEhwWfshfswoRqWfsn3bvxBCUe",
  "key9": "3DwsjkRwSH4MQMprTFPawKs9HoDYKnWbJRD3SEaDfWx8yZsnDMs5zXW7Gw194m6oA3QNR31W6RGabQx37VUTSGN1",
  "key10": "4aUyEkABzNTUAvt5es3qm6H2p2Jehovron5h25gBe63S723dLG77rcqQ2JcpA4ajYhfCQFREq4auH4tFRx2nAc7",
  "key11": "4iawGP68Z4LkkUu5i8kyUyfnNa5smSUkZDsSg4X9yfKmB86d34v4Z2rurWb67QRQbsA9j5iaAaJaVPpMSYCiHEts",
  "key12": "4t9thgG6ak21Uw84W49FcQmb7adBkrATnUb7SV8y8jpbSEb9zYZZEpd2fnQzwqDUi2AmcXUeWrd5BkP8VMwrm9HE",
  "key13": "62Li5iviaHX1vS3XtGtggikiMrPi7gEuviaqHVqkfJEYXF387XrmjLgzGBQR1d1RfEEMkctMig6c3A383xjHqi1R",
  "key14": "yuxpXxqZziSAXrC9F5LyNNmTT9iSb48dEUDdfm2EBr5owhv3PTH8jsFigQh7ch6GQN21dFabf4FyapAiCoUF7Bs",
  "key15": "pHzxNaTV6t1cWAehdjviPmtkrrMx2XZHxJ6VZ62yEqi4ZkXGzdJ3VV9MwTKCcZ2g98k2yTj2fqyaCyYTACNsN9i",
  "key16": "3gPy3bWYrtE4QetGXQzynZvyP69q1GersLvTYAEQLdUHaiBgGf18fnm6e6XmfmqfLPYFDs6SoSxRnTW4eN1HFzDb",
  "key17": "2hvcAM6XoqRPNBsc6HBnN14s9Q3Nq1tPEM3Jb27jVL6rPbGh1yyXiSa46tvSe4DLByCmgtP8Gvq5eVRDGZEywmkZ",
  "key18": "3wBzbAErTjsFqHVFcuKgTSfVGTnbkmb3aqt8pK6dhZHkTQS8G5NLHVeswRaR6zotW4xXoCWvjNB4Va2ZNpchsSSh",
  "key19": "4BJmfbUXCH1dyArMwwrmfLsX37vis1vikqqgPYXiDC3nVexeWCuiVDLw591HwSfJbrVb3VjbrU9YuTu6PbEWETZj",
  "key20": "5iiLhjBZD71vp5jSdpKjqSgL1wU8Qig6zUEu4ocgCptcCL2mTyRo55zTTk6s9ubArHk17i3cuLhnFGShbNnZ3YXc",
  "key21": "Vc8twniPyX73H2X3kg6XRKg98RZJzNRX44ykGqhbSHNwz7MQhCyZkKyrD63XK3SyxcbvANXUQnF99wyBMsMg1tA",
  "key22": "tgdfruFhzSGGxao9ixiWxsvjU5jnRVbj1tVi3mDjpR6HzC4q188h2uCTCQV2jrpbswHrdKRELqP7Hj8nfEj9xEH",
  "key23": "4HaFFBBNdDQVXq95uHmwQmtaGoZKa8nKAnEs7dicdTDEE9JWJtCnkreg6xC3bFCPDVKVPz9tWRvVyHnnbsx5y1kM",
  "key24": "2FMz3ShYhdAEGwWCLv9GnvZQVoNEoe9BqkUkqoJ8KjdmwZq2Dztt93jnJXY2h6wRKEnvQ2FEvUGHQ8rKEgFCCnh4",
  "key25": "5LE2KtkNtYh4dsYRWo1hF4sZWoXJ7q9mYhAuHT6AAjS4UW3kurApwdZoqFhQc7EpSmDrnWRUZFMmHkfFwCaNVtcT",
  "key26": "LrAWeKKnFFoJrE2BfbjNmUw5T5yriEaadAc4Py7GZjRao3CPmRuirEksos73wcx4mcsSNfdQdybS4Kd3EsCCuWY",
  "key27": "j2vmnemeYmcn1SxUt2mHYifsGbpJhRWcNd4q8Bd4y8Nq7pj5iQzdp9133uUd7fUAzuBL6ge4YbHfyxNDfGmzPZx",
  "key28": "2CocBcLEbkSmqNWKCAZm2AcBh9FfD94aj8eP5w8BU9vhAzH4NHDSitn2AgKGmQRX8YnqJiw5guWspwWpetU9u6pc",
  "key29": "5x4j5UmdeUiZvhy7zsfuoL9QgXhPL4v98F3VKMAAqWvF3NMkgoT6vEqvmuVcQaz1vu4eT2QgkQQbxv1rCgbP98dR",
  "key30": "5jm9RD8AvnKCSqE2aZdoGkqSQtACMR46ZnUJ825XqbwBHhrM8SFCZxB1kqN49867aNx8Rwe92Sbpb4ixUSxAi4vB",
  "key31": "2B8DsFg2CSeT4eHXanztXSSKcfG2BPExLYoTMXCcvUX992BuZmwn62DJi7rb4FiaqDd2wTvWTUn15iB3JpGUstkz",
  "key32": "5F4R8npUA5SKi15Re5ENKgrFqvMd71wHuQGCdTC9sPWp7M3kfmGmxGHzm5DTSM3RV84QQQCqTsXWP917cXig3z1v",
  "key33": "23fszsdLighVTjcYprT651C8VSukG6ZN5y9KSsTUxpDGTtkuPdFqMJSRJM9hHCNaUPbmxNVMpNu6wWtnSha8pG4d",
  "key34": "44fJSodnj1cyBoU2S7BLEPpJqpeTQZBVbBbZXKjzMcVnbjjShidBHPueaKoVHJHG9tgR8LpBAfHfNQKAbm1WeLAJ",
  "key35": "5UdzhVdix1Z6ZkFVvX6jzFq3cHFuckrAS4fjZDcpLZBtTpmeNR5bTeGr3scALjYBhYGqcnJqnyNmZNtJsBYJM9s6",
  "key36": "25rgTGRgMSrhYnCQiDEqFdm4FLspa34s2MXyans7dVXNRL6GcwtBZtGni7U1RXnii9xudG2Jajghd5ZyMw5XPeFA",
  "key37": "4Zs8hC2pYs6KUfrpFNqemPAigPtpjjimJyR3cir4tcUrmAeZBpnJCR3z7q7fPzVwL4EPuxR91HjyWAkNcQBc93sH",
  "key38": "38NUKBQaJMWeLyEbmrRLbq945242EAJQTVLZm6eBsC8e3znSZugzeKBEiGFsKywGDtryhpt84sm1ahtWsjcZsCMi",
  "key39": "4M5tMTCADmFVQf4SEVNWRyq2oZ3RUvSVTffDSWK7FVaj2JuEBUvRCkjh3ZL4iUKFqY6N1mAXUseTxGmbrAf15HaJ",
  "key40": "3b23vZ6Hx2KH92GN2ZZavYGHmBEXVtPss5iACGY7VhdiJ6H847UmDfahMcGZoNQv9iRtb2w7vExMDTg3E6HSxDeR",
  "key41": "3Sx2mxtkzaFdrriroDJgNpsK3MrpSLxaRPXerG2MKn9U14X5eDtoi5GVcCekhmycE2npUMvfwaaUVVmdo48eVu15",
  "key42": "42kGc6UxV5Ci7Qgdgc8BK4vrYUZooZ7bDws4vk9nAK6jpJ3fLabHQgunPC4DrdunvfobysHKhF7RecHj9vUzAuPC",
  "key43": "NH4XYWKs19EPRUiuhufNpRTA39j8UjasW8hmqrd42UrYByJ7UJfAw9VqkCe6QeMM2UT8AE9Lr36hjxrGMim1Tyu",
  "key44": "4PFv86DW7QTG9gPGpfDJbA2JgCHD9Hz3VF9Knwidi15yqQVoNfjF56xS8BFaZu4PGrPQNNadivKFCuef7TeVV2BS",
  "key45": "8BwWgq1BmbTi2fSPfh2tf15ysv2HT59QTyfCuAngHecbe3jX1p3PRWQ8bJw1Y2m1r1kE5JnLg2TtHEFUPGyM4hW"
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
