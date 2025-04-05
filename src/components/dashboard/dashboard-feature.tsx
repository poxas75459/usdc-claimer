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
    "4KKXr7MPVyvaWpQ4s5VbSd1jEg7PaKWxWiHuHGZJobfzGeTRtVqc9VsG6qTdVXecSiR7ZvGsGbzAmzN1GVFXtoRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJo9H4dDryQbp8rT5ZeuHbm88strCh5unyc6DZ5Kd2a7xSRM4Dtk6xzqFtqsJzBGgsPydVZqTHtp3uFKPXq5krC",
  "key1": "3Ppxb8cp733ess8ZgP3gpr2spTvKdBSn1ySc4RR39UWQVMcc9UhSkhqRvoXXH44aN8p2fhYqje7vKKqgahnS22TG",
  "key2": "4qzCbcesWmfXHiUspUsXJHSXtW7Dy5msQZefiFkku3tgZyoHbMGWjJBGi3NYZmYmJAB7KZppyQqwQKMwfJ4Q9w4y",
  "key3": "JDXoiZjHLZkotcAadKWKt2ypN4yNRqejMub1UuXWEbx8ndJYnNCpPKnvvmyw5BuipzdqyLeoASzGTD8FpoD6u1w",
  "key4": "4v7FrLKMSi1gL6JUnN6Q7F7NiUbU31hSbJwK3tCmtEoL24wQg7Ad4rMAXRsZ2xsnQHXu7tbaq8jyZ1A6QrJKPaEU",
  "key5": "2Q1HSfPzjjcb5Y1knRZsH9XeuVQyGbj7ZTpouPs7e3gDCuVdR8yvDEDCKeXqXTwP7Px766jmuT7vUCCATxJnmmDd",
  "key6": "2tHXUhBrFgxmeaKoaB5KmvDoN3enKt7uTNaA47QXtZ5QLJ6uCG629CeQGypf4PbCprncHij2qyRn62pLCoNYQMVG",
  "key7": "2ipGsZGhWPSGcuzYN4uXPTYRUApT74jN8HhZt4gtMJEQXnKotTTHa1FFjDD6tpzGQhZi4uFkJnSRZndgJmzACx1H",
  "key8": "44v43iCFcfzJuYsahD2Zu4uwE8fRb9EnmmwPtGB39gpERjqDEodjFYHLjE2hvM3vG2PUtLDGRcSVnux1K6PkJeyF",
  "key9": "3pfmNQpy5pvRmooJahxZJ3Z1kmkt3S3RnpvAmKYuyHqduZjz6YZWfeBcYmPmiwnvUZBaQ3BhfpzZT8fmBX7hjNgE",
  "key10": "BdqfbXzeizeCP7Tj1BNKtLAsvRnjAYKtLXzuXaw1EtmD85pVA8PL5vYcNPLbpLqt8ozNwfoxRScokfmM9zDqdUY",
  "key11": "4ki41vMGCFNysrM9ndBieXMj6B95XaamqNLvZo5mCAJVJ6ff56ha2bycRyyWcyvWsVwnbGZjYD8GuUYjjg2cq6eV",
  "key12": "5FneoFJmke45SnFYff9bHBWoE4JsGPVisbiDQzijSKuak9zAg88fYE9H4NSE7ep3tL3f8ZWc9oUgxNAnCyVnvEBP",
  "key13": "4ip8k4MxyNDf4v6vdSaVpPNLYJbWKiTXom53NtaxNZPU1eaog3edmMxRts6DQSGStbgyNi9SUHUkFt5ZnMu87uaY",
  "key14": "58J8cvLE7Ke6dkwtNXvrkSRUYmkaWhpebWkHYtXRf1YV31hLw7GWgLf1wTsRbm6GVnZoDNswYbY11fhrxpdbo1TJ",
  "key15": "5VQLG4hVkv4C46umcvkZKhcUzqcCctyN8CRjyieYhPht1htvp7gV7Ckx9GTmXr7BsXa2T88sxpyL6k1ir8TbP4N",
  "key16": "2PcaZBdz5icGniFW6x6u4ry1v2aAZnthVS2ioPxcEcZ8FXJff7oqfn7ia8qbjqZpXAdXJNh4XGLDyB12CGZxCx94",
  "key17": "4iMERemjEGLw51PMWapf4oZkFvj6xAxbfKRkCUbBKyXJ86nDHG8Rx84cgkwF3bQEYuhGpzxzj5H6z6QngT4V8HUS",
  "key18": "C7Cnpg3PVyBvtYVC4DrYb17PsV2A9JSooLfEpNbYswj3rzL351NF4LXGL5dWYYothFeHizTk2MXBzXuLbQKbkMN",
  "key19": "TjxgRfyh7zAKjF5yL846VBmRvh6tDfLgiizgu2ein7M5kumi9SzTf8GHpFyo1WcpGWvDHbY4BwRC4Qm1Hq1H1MG",
  "key20": "4GWen9toLF6vsNo8LZhGdv3MusGQrDoKXrJoiDtXfnuVojKUJyFvZEh7qWM3bxJ5s2K7okfe6ew2PRAzPZhDJDxM",
  "key21": "5kVm9gffj44H3Hu4fVbXnVvjUpng4VBUoJ9xa1vHrd4r8tREuXgbnqmXsFKpdKgTtxg1Fk2iDf8vkVaSca4vWhin",
  "key22": "tfeBJh3cfbZZFCx6ayrWCbay8LjgK2JCMT75zXEvcPP3pSKZ5xPX3A84po3he5aNpHSziAKtDUBzcmZzEbnvGmW",
  "key23": "3eMGJAJw7JLSjj6ry32B2SSCU1wPJqvYwVb9Ln8s4d5kkWLPDNGoRFha7a7ZBoXXfka2VzNA89VatN6YMtpamwcK",
  "key24": "4tcHTho6djpq9QdKETgAsD4NSEgd82yCMaf1BGkRwMKPtUVbAeJHPkyVhWGW5eUZptk5XQkE7mCR2BQqvGfmTFa4",
  "key25": "5qdsr3CNc14z4Hrj7gwDNysvDdoHuHcqKBXMqi5mUKp94kRBrzdj18FurRRhBDKFFkcLvozoM8vbihCKRYsuUA9P",
  "key26": "2q9LYfAsP22CoZPnTWo5gHneruGETqAZjQK1SMZHv5wCiUVEWuyB76J7fEwssbCZt8EdWABxMdubZZR29iNUtbam",
  "key27": "23tM7cCNDfkZ5KkwQkmNWWFM2SFyCwLe2wmZWHHg5EabouFZyfVhXMxa1ZGkPTbdsJ8NLLS5ZLZo8BETwZfS8r9a",
  "key28": "MmaD872RFz65Xxd1acQu8YieNRDKKkQWee6iE8MVZG1DMCBSKUi3Hv5CnBfCSifn6ruCBZVx1pvvafyJnUxman1",
  "key29": "5eYrfxT1hNN8vNm93hKTfD8voT2RQ2TifXVYfmUUPHZTFCqskM3LfoGWxRkcGuEUv9piypn25XtMgf7Ss5PhBpCe",
  "key30": "4S98iu8eLDa4tyD4gN8bcPDxjwYS7ErLk8i1aEBBktvpZrXVpK6KUDKUq9cRYq4bri4vCt4C5b1LDCBsaSEwEzQw",
  "key31": "4WL1QjDHc38H9B7vC2gq2s1k54JKCnTVHgXp6wi1f2xztYQSh7zt7PZv37YVfjeSmtF2L5nmpooFyrXi8LVRN9S"
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
