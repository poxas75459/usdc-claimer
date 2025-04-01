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
    "3YqGwdKu2ix35HCPFE6ycXebczgKVc48RcTSHtpmkNAzPXW6RyPWUwCd4UH2za63tMGM7oQrR2utLx7ZXBYybUFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o14r15Yp2aWFpemLG8i9G48Ho8tPbsyuSuepmVuyfJ9Hp142KubyddS9Ygj5kixf3wyKysK7DjhUavFTJcb71Hh",
  "key1": "5mVNTcxBxA4hha9vaxLjYb49GLfgztK5DT6iRRHdohTvjSLuEQvuc5KMMFUSyhYCsTZUPXcyVy7drTwM4wLm88D5",
  "key2": "2AXxx4P7yuD24FqA5kgEuDfQ4CRKEbnP2G1pSiJX7QikBAXfhnkyL1UaBb6Tn8YpkgPzvCee8kWr4oNJqNMDiHQK",
  "key3": "1fp6kMM3rHNb1ZrxqUsY6z4cerZdTrRUpPo9GhHg7rcK6J7PCG81KVXZn4Fvyku19CF6MZbAK6zwA9BaFsERyNk",
  "key4": "26wQ9qNLpv1J46RoaVaDUNrrKJct3zNXjN2mH1JVV1VgnkZFLGNH6rGy78M4S9TmgvUcQ2w2e7yYKhaYJKigsRaQ",
  "key5": "yuum9wxtJU5PZYks3yFevpaVLXE9iab3C5Ws2fSn68iFEyAZjqmJN4W7quck8arhdz4iRuTZnWtSvwnay4uwjTD",
  "key6": "61U62EZupEnxFDAAnVQh34zp15sLHV73yradHbGWHVaRYAr843Gx1M8edTKMBFmtm5C9GKCot8piCxQuk1MJAm4v",
  "key7": "XByapWoLfArbR61bcGsHjjj5BeBvKjyTLw4aio3mP4RHx1Phk7m7kPadc3gGNNPW6beVR5x2anzr4Pj8X7BfyXL",
  "key8": "24nFShwSCu6bEdJ6V7ycZjCvBDnGwN5qm25t5naocx16SfwmNHs5ce6iYhh7KxoRK4Yajcn1M1szo3xhzUAE4jrD",
  "key9": "5mXszbjbCmZ8K5F6XXTSa5vhaczW6AotR8YXFUPCaBoE3QVycrzhTs76RSj2coTWBoeocbhRqfju1zoSh2ZGnU91",
  "key10": "4VMBnd34GYVUiQLMQUkie9ojhu1ffj2rR7mvFV6wWc9pQxv5LqmfQYWg6TeRyeqTEmtCRgboFsxS28gNraujyc5i",
  "key11": "tVo8aKaEjcpJQbpidBNtyiwX61CSLqCRaU2WEdiFt5jApRiuPouCqiUqp8gn86cTgnvCvDsKEi1yqqQjDJ2NiEN",
  "key12": "4j4uWTRkU6VzHS91rQgBL9hLqHC45SiT5A2MMppdQATLc5dabWNn5V2xTBcrvSd6bVEwT4qjodBWE8pE1B12tbUt",
  "key13": "2WbgXbu7vKGdtvat89WyakaJ9BeGoZmFYtjXvBNxqHvZxekZ7qiSVcgWgZsK9eSDmTRPW43VmkpWKeGV2hDdP3U5",
  "key14": "2Lcw2NWPEu5tD1tuvqGdp4Qf7Gf5abtCTLZxXtTErHWtXVvt4DCZwb8e5M12yW7K8LfvWqUc3VYFBg2dbTBXSGCd",
  "key15": "3FhMaC7UNG1eCsCQJRsXHobVZ7PwM8k3mAAiSeopJ83xSZXEKAcrhiSSRWujt65SC9tQUGbFa3AePHD7kQuKFWG9",
  "key16": "vfJPpuFPzcXnLZ68dCJyG58qksd6YFssqSmJoUdx3ZoGnVYR4Si76vCNBodg26tn7h4GhE3rFsJf6q9hUpmFB4J",
  "key17": "3FeEfFm3sVuYgJrd7EHropm5dzEXVS3nwSMS9yC7mUK7Da1qvQL58USsGVEnsDUPanFT95CJKEQ8mkvuyMK3De3N",
  "key18": "j1thyJ6W2o3XcA1GbyYDH9xZ2ux14dQxnXjHUJPHBFcVPPmt949iUeU8ctrhvbiZUfbxLmRiYPS8xnf2RBSF4V9",
  "key19": "3ewnkvCuA7kFsQaGKheJUkthAWVEejaQNzsWREbANqjTjStUWfU4yWg5Z59K92NAqiZPB8xrfmdiDDZAJkao3X29",
  "key20": "2iRn3zogmTseUTdx7Bc6SrCPDKYqh21M6f72bLMeyVhYpQty5XZgjSLBvMUL6rJwA5BoFWpmJSk5LG4vJYU9H1km",
  "key21": "25upwPqd3JvsQbAXziLyUD1PKHc3ptx7bQb1DbU8eG8hURmZ4Y1NPEz6czZ5AXefvsR3EXvfe5EW8GiUUT8fmWSt",
  "key22": "2Vhd1a55uNU3S4tSpqDMzMmUHHWW1bSQvUHff1uV8r4tpX6f2zfrSAbLSfBJqtH4djLHQuN34KyWpUCRHpvh54zA",
  "key23": "rZGtAt4WYgQ9kHAczPc7ahNVKyPryhHA1E7BkTsJrRuxMBLEWsq18hPt15hEHVAq5qRJzHsAWZTMpsHmxrfqoi9",
  "key24": "2UXdm4yQby8QYX72BTLYJZtDrR85ZBAFn2dWDtTvrhcs3gjZUJvggkPJwU6snvAB82mnjhBYLMLiKRUnJ5cdCwgg",
  "key25": "3SWcRioWSbZfahDk9AT5ePjZhBKknFgJVeKhanYH5ztEKDntDiiQACHW97CKKaNcFevXjGuckxXofGZq2otMAmo6",
  "key26": "WRLPV7RG4j5X7pFLQj2We6FvoMmsPqhXQJy8i2zMFyBXtv7L7xXvyPdE2hqZ3HF5t86xsCkyA5Erm4sYCTVQ41X",
  "key27": "4izbD4UeGuSsUacXK1m1jzfKdEh7dT5gm3Qfa3AThcotzbuUEWa7NppXpGFkLegcaQ2R5SoZSLzezVeMN9UevTqw",
  "key28": "3LzQJPq8opfty2kWRxwQC7i9Dghf9uf7Pkib3bhCfwwt7Y3LxzQ4yJwo531j62YFFdbx4jU4g2Z7B1vdRvGwQdQG",
  "key29": "i1Aq9zpGmrGmuNx4HhxynGwZfQY9hk2HSoowquw6G5QQSnmuoAxKTr48KVj1fJbkab2ohh1ME9AF7F9WMWKo1uf",
  "key30": "4r75SjfB3FJzCyZSxSwHAjUrZc5LZ6TcVxi9GbF9n5FwMnrYY94K99xdWvFuBnZiAZdo4aYN3TdhaeKU3xKYF9As",
  "key31": "68KEZFsBfv5ZVwfHR72nYnT9j3kksdPNbnEkGC9UVMtQe8inrHLrBStv5kU6yxncUJFx2edRj6t3YjL8oSpFwet",
  "key32": "2QxHDfDY3NJP269ACPeGPjUcst5TctqggEUi8CwUQm5zseuVPtrzcr9CEuX4gb98CX22dLfehm9ghMdSkLd7Yi1P",
  "key33": "2W19Avk3AjV7YLbwvrvH6ePHu3XASavjmj9Gd5JPTdhVHUKF1s1TgNHexFo6JLAd55hMfPiX6YgFNB57tUpUZtKs",
  "key34": "3CXeJARnV5LRAr9Eh85d4Yu86FQ7ZHZxnpxNNmsQCgcWX32PFqKBBbUYQEKT3A9cLVjhewGq81tx6r4mqXoc6JtQ",
  "key35": "Xtx4WHtbYDNsJmXj6sGTvbh49bSj6sEU3uFLSvmgM4JxKr5yZMuEsL2Jn4WYpcx6s9UedUeLBqGaVmpkSAUDy14"
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
