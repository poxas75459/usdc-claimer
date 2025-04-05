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
    "334j7EgF947a6hUV9kLhVoujvB6nNQugesFj3TdJ5n9qLf5TzVkjqHqBrrdEfECUib5uMfgXRcUgNyPNFhD2JiBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39dTZVpmf3GcQqMNGBsQjoGfMeiXS5a2fTu3FE1nSktcqP9qsUYFvKm9SUKwc3XTcVUF3xyjhseaoWYCuTF5qtU3",
  "key1": "LYhQMB9HriyxqbZNqKvq2cFvnkuos3zLXz5JkbEadSMVf1vDsGHQuniDDiTHSXva5HV8LHtwJgNEEvRnKKsZQmG",
  "key2": "3FaW4tpjZ7qtWs43AYVMgE2B46SL8vRpDbSFhHmFnw6bp4Ho9gD72wF5Qo11GwAyk1e184DGpqDVhrgQEEA8gEgC",
  "key3": "2fHEpjpqVRaENuNz2oH9mTCEM6aPsgQWkZgtbQNrYXyQ4qNz6nYyNSwYFss9YVAfEMoSCk4Kgtqtg4PV2oaQ3U95",
  "key4": "4YpuP8Wyhd8fy8XKoBxkyj9YXYkSEHnw8wNk84Kup2f24UAeLXBxPGjSzppz5qZ1NPMCp8djxuFuwd3wYypQSnar",
  "key5": "SwsstUmz1SVMXNR4jfAkosi8mREMfLnbQonFftLUS1xL3XJKud7byotfpK5g26RxxBaX817U5oZiyttVe4NZxhQ",
  "key6": "35NP9NxkNeJpdaNgEk9zZpSyid99uBiCrA4pmjRi6k3udcGCrx9qYCpPZ2k3i7ibQNy2Wpa3oCPkxwi4dz45NiLm",
  "key7": "2pHjs8fSHk2krc6mX2eaP1Bs6yoK8bZ6oza81q56fYFtJ15ouXwXgofTsUZ1eWgjSQoPJoB4go7rq1phmEsvpXAt",
  "key8": "2GZHZ6k7ankyaK67vc26KUo85NLgJuvBj8k8rffATCsnCT5CXhMbWHRmSSKpEmCXkrmkhTcXCFRArSAvWYc5hNaD",
  "key9": "Qc75Xh9k1V8w1b54k231qUpegjFZZ3atVGJSznzXBTHkHjNSdHM8DUU6yKD34im2UFhtwUy7QbYZNXXcRfw521a",
  "key10": "22p22HNHvs13FoCNBPEfqC4ji1bd3xK6FCHMEguwZrSW3Pki91YxxQssP7joBLVZAh7jkCQzwKz5EcQDnRDffKnN",
  "key11": "4jzaB3jxFeGSEsNtaWPehUfeVcdTG7VxbAz9XnsUG45JKk1usN1N9TEDy31HeW9R9URJHsJzh71YnMHFxnuHHsvH",
  "key12": "4oxhzgtYT53XgjG9fNdqpthaRJqhERQ96RNfrL7zecnHFes3UiTYrs5un5XjCq6AF7HPqEa4Ewwi3tZNJZeQkjTh",
  "key13": "2fgm85jRFYv2jMGz1PhQp9onXSbWAJPST9Napk4y9ogufC3TK5GkqcuEMACmdafNU782W4RvMBGtteQ5XNmqo6u2",
  "key14": "UDodeevu3guU6AqEVqMwWvCfZiwvk7EDDuRVzR1VE2nrTTupxuJW3bErdkd41AZT8FF1NRfXBGGAwrDH7BYVz7y",
  "key15": "3qCJKptfYAepduW1HJu3LaZXTfe4jbXakjjAmxXgsfKXjwuhMJ2Zy4BS7xJnXMaJFkEkbCNu3EibCMHKpWDn9NRu",
  "key16": "59eSTGASoufoZW2YMpCZDAoVNdpnTqA8FhikhqhhNb2JatHKNUTk7zgUwe1XGEpaYSUvBeYc2vhWoge36KxYFbtq",
  "key17": "57QW1JEMjCGK58KQgnjqPjnsKMQkSDG8X4xQtLjPWvkZRscJVAJep2VcVK7rv5uQtJ9Nx94uR3btMy7Y7i4FLSDv",
  "key18": "3NQz6psCbo1rsP2kixZxdJeMCTpsAn4rQq682YU3fKR8GP5K8goVW6tCP2FThbpgoyduSVcc848n7nYbxR4iMqBc",
  "key19": "4zA8ocwFmmktkKraZcgLGoapgF8X8ra9G8hCndAErBnWnL1hAiffhLVWzbM5ZLpjtwEYoz8yQcrR418wJE1CBKK4",
  "key20": "gZXhpUPCmKKnJCvQfdcYUZ7m7ZEafMqLuJNuVVNDgVv6Jwzqb7GHwgYmUF6roehpCuncJoYMyrAUjiQH3fjygt7",
  "key21": "VVXZeSK9gEcqVoDmQDAtGYYHhcpnnt4DpwogeUfGMKiXfV31FTHsLfBkc2HZDg5uoDvAP3xYykpZjKm9uiVEjkJ",
  "key22": "3HMPoUJVR6LzXiadKAvVQd9HEeFsrLjVfygdhfrZjCbucRUgSprNXjaeoqJNACZiHvMJMADa12PxeMn56CJc5WiG",
  "key23": "3A2SBPuWhfLYiRyqFN6Ap5o6tQ3KgYe1DacosQXrGCuVo4xrAbE551DBj7Vqc4UB6scKURxwsdW3VxivyV9r2sMy",
  "key24": "48ttyMoAdYogBaNmVSDuGwj28s9Bu7T4e9871bUNRaEsSC2BhMcVBE8qXEasndNj7HLqdqHuiqTyEFQLJdkeqRYw",
  "key25": "5K1XD3eckDAXypxaact6dtouF5qaZmiEhvcr3yi8t4jyypQ8pFKE4SpwhsBCyeqywtwWMBQNtpJQ1YzAvF2GhYfd",
  "key26": "24NGP41CYZzpG7DZinxrE3wLNZ3FMoB1Pg9tSqfKfSiJZagAkecrxVrdML7Fy7evwL8ofcZMLznUoWy3AJXtpY8S",
  "key27": "nDpH44V44kgvchs6Li6LCovRVQTiRRuzzSkEAaaL85upBN8BhrXgzZV6rBFBpzKr8N3jw6wYdKm5bzkVgm6aw5v",
  "key28": "319zpXujYZJWaQMiXnweAqvTJjHcoHQfiHSkuG3c6tvVeW8L9Q7QiqoVzH2t7BQE95DjCnkNM8MQWWcNcGqfa5RJ",
  "key29": "5QeK3S2AbgBxtbn3EkrYZTCbBgBZ5MySw4nkgJqtPCjhSiSwcRqQ5xyz6HogdxrKYtDN97UWF4GKSeumJqznaQz1",
  "key30": "YQwp9yStEaG6NgmUR2SpM8KvCahnU9e5wJYZJ1o35s1CRkj8ZWoMPxrhx63PaNStDhEZirDX7F7fX1kSZeK8TjE",
  "key31": "5hWYvtqzjKDiR2YrRedKGz9Kmsk3cADtD1pnWfnHRxfcMTNWmo9gxnMYHzHr4UJgdgx9GCN5iUFzKet66n4zKMc4",
  "key32": "PAJoCrToo1p4Jj7Wd2TRCB8orJ31svgPJ9vVdryTDu98idzkNgi2QWaBJcUZieNXnk3QWMUkc6HUKX8FdiSJc3v"
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
