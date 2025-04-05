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
    "2veiBGR9Xy4LDn4RjXTfwkQdZEhvwQUYaUmzVL4Y3FSBvS36WYwJFjB1PFPUQXbacSKSpbvMNMJpLqRRdGobmSyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rwhQkeQ3C7i4WLDeUaiSdG2QSUcv5dKi7cR22gPxfsfkYNn5bGY3NAU49vaZ5HNgRmpiBQ4beih9B8LceBEr1EX",
  "key1": "3cPMX1sAHakFq1sZWRnTJdwMooqKgcjuxudHx5A7s7umQP75Kot7mVpQhrAQGytCN4PaiEZG95tchi8cMmKSEqYo",
  "key2": "5ZABLCMGbEdovVHF6daHLgLuazkyM3PCNPYJ7a6UYjK7M5xUbR7n327u12TWf9yaye2vywrkfH3a9E77fYVoMPf2",
  "key3": "vLzkvE5a1Ge1tVu56zq9EFSbfoeKLxKzhVbexsCfsmeFxkUudWw1R2P6jUCG3k37uyUkJtZ5X5JCTaAsin3c2it",
  "key4": "4UDawrfuZTMExB6K8xUj3f1YfZfoFaqWuWpYjRT8Ykk9tX84kJMqmF7itYnqJRBAurARddKuozL9YpL4jF5ou1z7",
  "key5": "4ug9Dxx9deBeLtuvMGD1SFCuVN4uifJ8siwaMNviAXybT9W3LKRE2LcXZsBNrrhZk58vXoAzxa5ZeD8zQcB8zSMx",
  "key6": "1FNPxSsKsD3GBefT2kLpuBi5QWjwqvLwbnZJyph2YtAa97cbkvNvo5pXNHprYzeSEUb1oqkq7Ui5YP7pzWZA4KN",
  "key7": "1L7GgKV9MTGSsbNa3DZnynfRwqtJPGr2VcsA4rFGMHAXuifvEgj7YzRbnAnZnocjsm37B8Sj8kYQGSdH94Szuzx",
  "key8": "ZwPvWtYvbDiMzmnBHXHPi4ePFD3FxTf7dwXRLJCN7L7WNgmjsDSsffMrvncR3nu23RS7vzwNBh3W3VUd8M7bUNf",
  "key9": "VpXYFS45xXV6VBjDq3mwsZm2TtCdNfXxPgDWy4fdroMdRquetu3e8nhVC1exy5S3UxbHPzUPqGRTCZ7zhmz6VUs",
  "key10": "5ZJoE6Y3Lbx9p2RhUsi2ZTXsRmTLeqiVuZRk78shp5EHhxpFKG13bzaWPHvHDijnumLmJp5KFCtyi7KvrhuaLLpx",
  "key11": "6m4yRv2foxBHUk2t6smyDR6jEhq62tTeygKNDFgN2ZkxLkdqpuiCKcJLzE2AV2EQbRTXnUHoNbUk4wypHbbdwof",
  "key12": "2jZLXQv1ao27zJNUsvLtdazoDP37d372bTNUSNkztT5QdAeXiLnswSCXTPgriJWFUv5K4FP3GowbSDfExL2Nh4KL",
  "key13": "32QD7R2Groh8Q23tFod7JzhdknvgAzeaUKJfnbKEeptbtVWmVBBmq2fEXMLSkrTH5UJ2pxxRsDvUA9TvmeLtTnHY",
  "key14": "5RSRCS4YDfGhpqhwM5UBgLauFFd4MvfAFUDN8HWj5cuG8vWCEnyLRCsfT7aFscegZNdks5hHhoyNoNf3JEvrkGVq",
  "key15": "2P5hkfGQkXpw3N8Q6ZqNdStwksccd3ooFczWgSVDrMJ96jmPN67j4fGDicowVrfSxzboq6y9781vTDcom1io39NC",
  "key16": "38sNKshUQQPXnUw73SphjwQa4sUkAAh1GX5CTydkiectYCci9L14iCXfCjEzN6dCo9LEK1WRqNbPSZmcTkbUNGj5",
  "key17": "CPBkBhSxPVEhNeAGs5TRYa2xDNuKtRCpNc2iwQ7jMAdkHaemqwKi9gW2aipbejVAYArzAQqzQSgz1F8zvaXGBDC",
  "key18": "5QLmcFmc1QGq4ZjqrmYuzYUe9aeLAaiomAQ9P3cSR9SXnvkfCS1bDqCmcSUXgqvF4MDe36SrYv3amEWWUWbtZjHA",
  "key19": "54QKb2mmPnDYRvdAw2Vm2QeNEMjSXS4GPp2QkFLP6CivSWcQeqYocKSTJDiKeyxjuu3GSJzQ2AYWbkckQgv2wtbt",
  "key20": "2JKb8s5KzqLXusQNeN8dFTY9h87rX1JpDnuHKJLXUTZZGmgDDAE5Ckr6DZBhqEb8QdXgCd8dKNGbuC9nCGraNsjW",
  "key21": "2eyaa9eqVvhyUB7JsHnYjcVDhA5UtqUu5kT8rGauKJjjavz4onMcih3t35EH5dp6Fgo5wPABN9yz5VXGw3oe5xUR",
  "key22": "tdu6nCJS87RHLeNHRHMsBT7Rat3QYCe5TxvmNW7x8U3dXLBQEo33f7pNam7h8jjJi4Tgev4CaKKwVSNFDqGVWHn",
  "key23": "2XYM9PfcSx2WJWww3c1ZsNgL9hYJjETNYVcUhcE1D4X6QBqzugnPPdBCSpXvdrJoxkCdPYT1BPaU5LwDdCbrvMCj",
  "key24": "J9ADHEGgHKtxzSSYSpjPCjXJUYSPPgPqyTAGfH3ecDGc7cCmBwFhMwU7xAuFbZ5GXLLVatoLg9sTQe9Hz3FX2js",
  "key25": "RaVFGP2fvecsZCanLPto28X433Am9eVxb541FvbkvWxhrNUpZzxv6krTZfaCLsHu79CKQtmy3EARVjkFoYJTJ1D",
  "key26": "2SSbr6FZDyskwrj4imyXeC8oHZCVPhgvDYGy2xfVh84sEYGyK5ykaK5M6YDGr8wHAkqnEwGKDsNyprnqd4vEHRFT"
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
