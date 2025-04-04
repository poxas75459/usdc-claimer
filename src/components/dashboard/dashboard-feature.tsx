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
    "47c6wiHkpUhemg6m36af7CufTJrUi3rD4Af7vZuno9WWKQV96XPynW1YrMqQ41V4D9TVTEJKgYUK4AK6sFj7uq8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhtiGW5qfDZtKTSAsk7LX4ixrc7EJRg13htcVcQ6rrThmwSxMMMkt85MAjkVnkTwKXdEERHSLW2dVs7bfEHPM5S",
  "key1": "3if5LydPUAi78P5rtfs9hVUB8G63ZoVgXpBMCD1bDuUb9PjtGntsi9y9aWzxFiufUpGieGfpn4yDRMPwFPf8LnyC",
  "key2": "3mfiP7ekKmC6gEidAjVy2b2a1mUURX3V4BFFWjiszyxJWSxTzwWX3zMuPJzg2vXgT4E67QqXqtW9NYmZGyR9Pcqw",
  "key3": "3iVyyGfK3xCwvBixiYKS2nqEU5BgooK282WTHHmMhzLxg4TETYNJNUxNjNXen4H1kN7PySZbTUFhgAZLk98NZbeo",
  "key4": "56FBPWxwMytBJYFnnChPeFFmG4FbHyt2JT54C8X7JeXEPnc4wDrZA5DmckHmbXxp53fQVRzHDcw8pt7vPC9EzeRT",
  "key5": "a65jFNmBv8ciRMAiguMeTSDmzbnm8oBGCtV6dSRCv1XBxP5kTPJEXo3DwpWGnxomTYrDB2sdsNj9zGN968gC8nc",
  "key6": "3nsWkFYQvCM5d9sKHV3wjVqGdCBhtdHApgUXk6eBwb9p98koNL4dqWkyWqfp3zBXVjMGZrvDeRMtSJzCUyEdq1ev",
  "key7": "5zw9Chi4wN9t9YKwgD7fohzyVJJCZDaGsuvmTaMpxJYakcq4EsZqWBf3fYs9T51rcBkRuBL86qpXudAQi1t9eHjG",
  "key8": "5AnWiRVbcTBQk4yXEKNiz29XYcdzzMfHMPBHSdMBVkfMyhdNd2bL53aUsFYmjRaArVWpgXY2KNWkXLnENVUsCSzk",
  "key9": "5KxgUV9u1XZiBdcYmBAWc9bzzrMhGgoyn3t5QqryVR8VSSVYfekzjRso3GxtZMPBJrkLTGUNJEghnbDJ6iRHfUgL",
  "key10": "5MADmQAfETAAtJydsMiZwdbhAPdwJ3CB13oA9TYxncRMPM2nYc2NJDL9RUhCUiSUxSJj4dpZoZj3bXNrWmsHM8NK",
  "key11": "4uy9t4GknmExZb4bvCLaSV9Rqy8h7j8t5o9Hq2DR9sV7V2uWXRSy6agc21MQqogFKa1VqosP9pDJ7bAtzcMTidQU",
  "key12": "66jUm92CPFR2akXjipcmyrTkkjGT1YrDZ4k8srdgvaLnCHoBHSLh2LDsHkCVUyqU1yru7JpR1krzMdpLjBkidqgw",
  "key13": "4CeggmmFUQyn7UPnJ7cRWbzcrPvajfXxT1T8ThGgpFQ4ej5Vm1xCgnujYVdQs9wx5LhsEWKiPmUzi2VnLL2Nmqwb",
  "key14": "5WpaL6TBv6TqB2v4f15cNwPgEkezb64ma5WwrTL1x2SXnJQTwt823Z4B8ybwU3t8wonubSDs58AwMQYejntY3AGn",
  "key15": "HiknqyjRBXNP6iRjtVuAGs5gsAokfjaiYcD3iCB34FNhKpYZ98aBwfzoH1T9LqBP2ZeWMyvGCr3KNApwhtMEy1Y",
  "key16": "dKhnL7ons5NeQziECCJgsPyYoDxU8qBFygARkHauZfM4q7Bv3eZdcpMq9BuHxQNU8S4JyMtr8x6dPTnySibZo4F",
  "key17": "3zjja2vpnftbJRDH3HSMspSEi9iRWsWLhKU1cfmhVrfXRm3km3159p5KtAiEVdyYbQVV1vqiGBrXo8XdzFVvaSRi",
  "key18": "4TFATaARH31jyxmW5LMVECY2BCoLedbxabkmbe55iqjGLCPsyC9HYTMqnUwybkPFCFBvvvyQZ6CKmfgZ6qc6CvHX",
  "key19": "vbTfg4gz1RnCxBHSdW9pDs1WvsUQFpgLBgk3n4EyueiiHmj3emjWh6RqRfumCAsSskV8a5JT1JqKkxkokxRenBB",
  "key20": "4hqSSaH1x6jBz8CjAz6trZNk3zBFZumaXzBE1whw4hX2u8KYUbKcz78F64BZPxiX1hErPR5BtHkaMz9kTDAZYkEn",
  "key21": "QszqKcUVjsaEQj54au7cxXTg89KMVQQSTbu5VAk7WZBVC5gNu4RB1Ct2v6WVMvYXFpoiNLEG7ftfSCeRMW9bWP7",
  "key22": "61HDFpJztXANzkACtVa6YVnj4L12aZ9hiaM6Gbeb6wo32DEowUG6DoT37dCzPopZDTjYxxZz5HAkVnH8GadVY9xa",
  "key23": "9ho813DtiVS36aRSfRPKPZ7EZFRcVcMQRXmmHmiDqcPjYY4oko3vGHmxw68xwsFcmsqWFzXUN9fHFsBg8uyv4vw",
  "key24": "MJAybxw59EzzpCsGAc1S6D3uMiAD3N5n8LWkbhENUaACjqGw5MSeQ689gdnoqAeK7kRRkqncA5GGyHi9iJgFjLw",
  "key25": "5tbVyvYHCY5H2gwv8313UjuYNTpxjJXpMAsfm8zcDJb6BrpthdnkJVnEKyaC1y4N59ZpBZbe86nuVsCh7WT4hvQx",
  "key26": "a6k48gYjhDmPe3xhNbbbQroeDi5gU1xFdiyyMVAuJ7vT6gNYFF9CtCU256Ugj7UJyqCVmQ2VeqaoVnXN4J8S59e",
  "key27": "5nUCd6oB6X4aQAWFJJkAW5xR6JjmqaL9P6kUMLHjwqcfi9djp3RCuJiae8nbmEFEhPvr8yHVmMKhUViQK6K4oTbw",
  "key28": "4GYAip2urVyWgWBi5fsocCwaC76koYLzdL63cp48SJh23knMbxdhSCvrEbv3WWEK171LkMJVQfQSAmuUK7sEtA7i",
  "key29": "4QuyX2YWpPpbBPFiZ6kCsDfXwSRrqtqAa3F5LPT1CQqpENYpH1pAUqiCtpjs8C2pkQ5g9xUSdHy2zy4c3a3BwaJS",
  "key30": "4NJm2mozecNdHWiproc2v8EcXdxDFNAww3VpCtGnpaNAx2tAMLu1G8t4cWKxgvBt7HrLNt1D8HB26Spz8qzDrbfS",
  "key31": "2Jhk8g16rhyVw7qHqN9tRKqXkw4m6hRWDUwT3GeJw3u48kjvx1vmbEufSguk98bKXGZrC3ufk8eqox5nokURW6Xc",
  "key32": "34F287UwEPKm3u4qdD9z9ysX2RtHz6mmBopgNtAx3ADw2KqGLzDjBcXJv31FNRYXzmEkQxqt2HFrLzwDoEtUie6N",
  "key33": "24VHDk6WcRp88w7Br3MAn1BTUh37YnfGM2aTu9ATpQywXE2VCfzR6WJb9YrvLpeZTM4RG1bmwi2HHt6mpwEcXafi"
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
