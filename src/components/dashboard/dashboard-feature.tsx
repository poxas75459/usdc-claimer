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
    "4jknaHHkuPA9gURm3YpBc6kpRMzyqqQodRt2L9Ayz9uinYN3n9GDHN7o6KenPUgvbeTxoRyYh2vbFhr2o3XjYtHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yCR7AYAojacA5uMFePJr9BPtLFTnTnRkrWndhjeNzCSqdbYTC8coqSMSqWdjv8st5MTdnE49nYcn5Mjn2uhQh9h",
  "key1": "5EfeQkEvBMs1Gp19iyeg3zpssPvakjcJ2kvfqGAhCiYWmARgzgm6ny3yiHBXmMr3r6mMoRFypk9kJRkEW3UH5xjL",
  "key2": "Cc9yb46McddT41KuEMKfnqqGht6bFYvZ3qnjJCNLcGk6a3GGUigNq3zBL672JvFbHWGn4zRgBEyEivfBewE716T",
  "key3": "2GPHzRjzXrV4LqY3wEpye59wWj79stQRrGc2wcAwtESr78zXMe5w8rt48Wuh9wKgugsgi6ZFeHAkxgEwphrNEoA6",
  "key4": "31tAeD299KzGPCHoCtNa3EwKx4bncowJ979UkC5bqvzzRprnTyN1weMQfznsoodyvmKdsRUtQLt2KyMjNEHfgSYp",
  "key5": "3SgU5tJJWj6WT2Ks5PiGnwEXMxqpN9GLYRLv1NpvSqBzs71brSkWgaxaRFBTzja7pzn39iV8EWp7Tcvm5wUjAcY6",
  "key6": "54e1gMZnLWzJuacDcX56jrjYkZV9d7o5w4f7nNgMBjBZrcTFkQxkbKVYYiZDgsXKNWEg3fNVUbsiyCVJVfjPCqze",
  "key7": "V7rEkpS66TpcaUWWjEThq4dKqQSgWJq3otmgSG9Z7D4PkDHUDVxtCAVnRK5wtspmA8jxxegMEeYQDcQpZtYaoSC",
  "key8": "yJatbWaK8Lre6icAdSMVwGgJqDxiX5bziFfeyzJprLpBjFJUDnJ43ZjqPq8j4HPtp89GH2rQ8w5pJMR21aKdq6K",
  "key9": "qTrey7268kkfK7YduznkxbgX3zQ9DcL8iKM5feRnPaqH1Q9ktxR44mqwiGs96evjvDw4CRQtA9g6eG2GKcvPPRk",
  "key10": "5jkZqHEmWcqCh2hhKotEr6RkVuGctezEMfQ4ioebKneXfntTm4C1LZvwnxhUnnTVWnvNsyZpEjzAUzdiwPVkm8W1",
  "key11": "64pRRwBZn7UmVdbQMxPhg573ry2LDPkgZHFYk8CHtxawCxTvZWc3w9P8757AUhkmahW8fg1zRSiT7PqkDNza9Mzk",
  "key12": "4WYb2B7vTb1HmmuFff7ee8Sbk9zTyVjYZwvX3ct4n3wmn3jKp6731HAVfwrWoHbwPZcqCWMEqiGQowBEe6KZmmPY",
  "key13": "Uvp2jTLWXAc3GjdV2Z7ys7bycK2MSE9Ghee1a67QN878qMrsaNJCCkdaeXDPoV8ne3TS5kCaJeFoWAbi4ouw6q7",
  "key14": "2SmBRpMa3wTBSrPet5vRzzQxaerYHWvXpoapE7faYTcEqTNSWiCHA8yAXqACwmjq8SWYzosfwm8hhFPQWe2E23ZS",
  "key15": "Rsras6iHy5FrhpsosDtZ7i19yWrq9wsQuQJeLAmj967incVew7WBNTiPhRqeTrvGBUrhA3rwztSeNeagxSPytoJ",
  "key16": "4gsh7czVr72rezUWHuTuiPeeXmdu9KoxuMVe21dCWdyH4zhwicNNPHWw5NZD8U7F3KDiG1qhwcWpocS6iL2YXQVv",
  "key17": "5r8o5ePcfAcZ2drtaKAHovVKrTdEkL2ZBBkZDkRPVQU8o1uZWgZH8TSy2r7LN38xY38cf23CourrppUZuoH3sfdu",
  "key18": "fcwT9ZGbWvU8MsfLvX82xMaWTvMKFKXu9X52S1K8NjmAehpUVX5BTcZ9jChZPwc2WhvX527WuEwpP3a8e5XmKR5",
  "key19": "354kwg2tCCmLLXDShBGA74MaLSoxn6ABiAjejkYMarUZoZqSJMvNq1Qmhmp5fV3Gt1iCpigoRptmKdCAsjZsHVJ1",
  "key20": "2Sc6xjxXGkGFspwhq4w15tfWG8t42nG7iueHTkMAs3w6CqpX7dUtPgKT33s2x68DjURyVr92iquMmAGqL789HVy5",
  "key21": "5WHACReUcbXgdetWo3GrjiT3FVdH3skmLfRFqKYB7JovPX2mq1xEPPrdVeJMdrbu1wRTGMMXQkY7ihVgks35bPv4",
  "key22": "31wQpQWGNi7FcggqCQApxXT7Z69PQVwV6ZsfYSmnRFRg8tvzNtEfwrJpwbibWnYR8RhF58ikuAeWytxbt9G9Ktfw",
  "key23": "kiBjx3kjwzhe1FxAZTXvoqJavXtaXhHRotiNLfAPmPNqbFKBDVib7JcmEY1h7cLt79JfEzfyh8oFZ9GbAP47QDT",
  "key24": "4jUTHMJgzjofD3xaFW9uUiz4aLCbdyUUz8aMEpnsgTrBFxbefSdx6nCyqA8ViTTcsY2c6T4PFLimyGbVbtA9PKwF",
  "key25": "4umcmqD4hkczFhGVqo5643LoaJ1hptHNaprCxXSSdD8H3gHgXZmzG3JeSdeCwxDQW9MFo8BeWJkPeK3ZGaZ5FnW4",
  "key26": "7aDCTrHi7ULziiCQNPhRNQZWxuAsHMpM7w1fqMkoMbdCvec2xud6ndN2CEb4VRRrfoEGKE2yTVeUyfrkXphpGQF",
  "key27": "386c3tJcYzQpD8i3VLMVVsy8yeaxXffLairuUtEvLLKwnHnBtpCbsqTV9AZx3HY4dzXeXBXJSQp5t1bmEChqrB5q",
  "key28": "XXTsTRC8JzHgpTRGCQ7PL3c15brz73eEJK6UyLAkRq6xB7YVdV9s6WJbtrhbPRW8DNPui2D8jLuHhLXifpZCbvn",
  "key29": "kEWwt9qagAm7EG7ozXMrPvzQnW8NSRy7Z2DXv5XZ5AZQ876TUSAKpqA5m2FZAMGEWsziGhPwxUo2SG1ANCgHfTe",
  "key30": "4iaYTRYowPv7nEaCFKeEo1hZNxYTQk3nwbXpvUXyuVEZGFTi7Wnz53A1w1Qh11XadtoGfMjzq47yahcMgG8KnrBq",
  "key31": "CxrvdAFaVYTe2NfTwGUu6ij3gCeVAqRTC6QcBdnDBY6iLYjBLCL5vk2hAwZ5x82PVr66bhvft122qdr4zc9DRgg",
  "key32": "3eUVScm3sLYaSFium5mPZNKmBEg8uKiJt3x6AhujdtgqYQhAVH6rmPWpL3AvGC1Gs2BSRtFcBu97f1W3q1PvfNZ8",
  "key33": "26kXBWxKowibALXpWD1Ltqox5jNFThjz6U1FCMnV6BPqwxBmbPSjRTi1KZHbhKaGAUXniddDDPB2tsk15FHEkTNt",
  "key34": "4fBHPNKt7nLXKhJDNW44PMGjML9eou63bYU65VYythtBQR4LkeZWbM7uxK8mQd24cY9aLC8XfnUTFiyEzk3uhmsi",
  "key35": "4CKDES8Ps2Pgu87tF82x78GqRiDjNRsNtE2mZJPM13AYNZ1p7W7M85RgqrQvBCqsP1fKGMJKxvEdJUUFX3Jtejxo",
  "key36": "5tYjr6JMTPCuveLTTJGVenNtVmRLNhwcZSJ7TdsaX1EDo3URaL8vABgp9YyBjptoUUfH9QCGUPkRvYojferBWZPk",
  "key37": "FGX6CUtmdpt9HNErAvZyaY4Ywo84pK4NGtKgBx3aGpGf15S94eF9mQREctk2mKqKE4mmEe5fesCEnyjLWevFVaD",
  "key38": "4sF6jdD8nrh2ab8GQAW23VQqy63tDktvHr6PV9HBuEXkrcXbR7zXaWi9mdF1hkZkrU5x1F6cioaJ4XxNtiL1e5vW",
  "key39": "55Uw6LEqwt8YLbx32L4t9wCfTayATgoANVWat2ZXAz3dk3D5evecMEbiEajL5qwNbhLzvFrPRAUknXLQWfNLxK3M",
  "key40": "1NbzycP8PyhEvZZ8bzfwZKSKCLprgDwAW3ps7GgCtWtVcJnSBeyC2bCiGi1Mqco3CfXLdcNNRUqzRV7ZnoVaQMZ"
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
