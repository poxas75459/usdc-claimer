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
    "4X4ewQFxiKvq1YKpWdThCnRBV8gKTBuaN6u62kj6ai8gqWFyztmkaoMAnt65si9tkMe18eHCjDFyiyPjvJhkpY3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xXwmgK1nYdBpC8WsRpPDdQwH2xyWeAm7C8w3qaWoLBxYYgQLfTVXUKF71r15UZ5jUaq62iSuatMJ1461Zawy2GB",
  "key1": "5djW9gqCViFn8Fmg97r65o4tYGcUoX4YEz2REbyrEbF6J3hKMheHjZprCDpRpGUe8YopKtUefvTHZSAGnPXVUFMt",
  "key2": "49gvuYF4udG82cbGkv1DERAjeeuEx9uYfHhkRHVr6XVCNMdLde6uLhvToZsPQpW84UhVkMFnNxWxDzfQFe8zKheA",
  "key3": "3NEoQNRiqh4RkbrNkuqQF7ehZmhvchG7RijYek4J2TXUeRWzYRgfMUENS58vSUi4CQ2FUyw6P6NUJCP1HhyrTw6s",
  "key4": "49q9Nc5KfWVxo5X5VgU2y2sjg8w2kmkCFbvMcuyehHoaHfqzHD7fCLjR75XnbeiAs1dhyLZJ7z9LU4CsqkmK494o",
  "key5": "AzCP5xYxTaGdsQnsq4cCf1nyvfy8Rep9fN13LQs392orYs4j6h8WAG8twjf47mpEKzegvAffaNGMrnNuhbenyFo",
  "key6": "AAj132PRNpXKkVZqC36y83A6w4yxMwnYrccNCH2Q4oJAoGqdbzPH6oQMPqZbrZzR74qnEGoRrSDa8r43b3ukbMf",
  "key7": "2B5to5zh3ioKpWxCwMfURdhXLNib7WMi65cHDGWPTvs5QshM6upV1tuLnzNoNreAvzvFKsuQnju8qUfZShyk9p5m",
  "key8": "49SkUdDdpU32GNSj78JUwY2vJgM1GECzYLRbyUxReyk3zQxu1XgnsvNes2WWzjmzMXvgnfoSBBHf2tmYJw7dKwJU",
  "key9": "41eTCeDLY8ij3hQe8BaTxx3dy2sXB3pNqBRRfzydUugpTQy9SXABtQJiLJxGmCS726agJfC1mn6BHQJyf9eBWAmi",
  "key10": "2W3E7PfRx99ZwwL7aYjmQ5qxY55dSyjVb9ibmUYpDZsEXTiSzw4KNwWraENUCZW3FvjHHBGuasamBejtVjf54Kiq",
  "key11": "23uxKZF32QpmWzPc9qapG9GEAGvTpLcbMrQoe5zEFvH6UYc3LYGvDdVhEERijCFM8jc1rnD8kAc4Ce65UHiZ4oGp",
  "key12": "AGeGuPyCR8BjNUJzTRxHP22AN58SSKVYXuCp5BavE4TY7sfRanidCdUjtz22xcpMtXVJ4K5huuuWDnC6xhZLvXT",
  "key13": "3zD17VUz6N1PFpnKjPEQMs4e1w1xETXAHweK9Sf6rFJFxPg857g6kMhEeKxHAVUjB6GJPYsbfa26S7o6U2QHEXd7",
  "key14": "3unDhdXNE8Rx5HfHNGAv84aov4rQXrNiCAEhjzn2vSBeitfKWbX2BzFMKgG98zbfGh5nSmKMKVxDMKm8nfVhY2qx",
  "key15": "4tfGoZdw9pK5saA2Pcdk4Drf96fQdBb87q4tFJjPU1BuBag6Ykg9c7gHqLkvN8Li6zM3Dim4bFNmcj8AU38G4K1F",
  "key16": "4oR2QHY1ozeSSrbQC7z6qemgeGS22qvD94h57upBcdZDmJDmKwNHwzVFmjtitUt3Taq2HFYnDDqcsryHeXC7847Q",
  "key17": "488vgZ5YguDFPcwkPW2Th9S1Dok8qFYLB2TYzBqgUHeJBS62wSQw7fDALMGahtrKPsENwLxreovVRUpRr5vEYC3V",
  "key18": "4BX5XwJZPtMeBUhPyswvoKvPrzyxQLpPTZpo5aUhZucP5jpse9JMWc5YcfaYWPbja6fWFf9psakbspv1dRUjRAMN",
  "key19": "5FtFMNNRzmoy6QGDSDMEF22D1rAxsxFhTeKAxtiUsvp4Qz2Dv4ffy5dmfbeh9Gb4xkKCQaGtwzWeh2TXqm5cNLGe",
  "key20": "5qVsedQ5AY6w2KvJqGGf5JmHzqxQxEnw2fvB5Ugj6AWzXSDEurU5t6dUTxcZbod18eFDqSCB2VC2VW8W2oY4AMX5",
  "key21": "3otYqZbtXCd5CrxpnLsGWSMHNUYpGmypm4hcQkVVY5CsbraG244f13QAGFrsP6yQxEuEtCojgWNKumP9EW7yaRvC",
  "key22": "cemZFVEZEG8UxcqJFqfJwwouz15EBN2xu45rfnFhwKcUE1rKh2PAwxKRRYi4HcU1gH5GAMXUqimMToYsoPY7Pq8",
  "key23": "4j7C1CwnVo8cjb8dEwHzGBXhecWJtRR5mxADDbt2V8bLWpiFJ7wyTSj6CyVLYwUQsVoexRbJTWXbEA4MYZi2RQjR",
  "key24": "5ndBPPrkrP6btqXx73GYBmTjW9GNV1PCNhSu9uPEEYtKaZGVgqX7TnBiGVkAFeZxVczds1VJQWRKhaapdD8SC2em",
  "key25": "31zVrwJtsqXge2dKX8LArjqZwAh38ftzmGFym85rGHpRxUDK8mcGoLsDAWAiJALXh5ufEfdg6bxCbzivPUyFsNWa",
  "key26": "3hBonQvHJShVmDEDen131qaxF1rzN951Sf2cvEgthYUPp4DUsdYR6XvitHM3QtjVPmZWYhmUhiJZE5zmSWkamgu8",
  "key27": "312Zu1V3LFeEYNACLLTDHSyC6wULd9XGdYNiXo7p3SjiGwvSyd1VScaEk32q3NJVc2uGQ4gPEz6ttSYxTUekorPm",
  "key28": "3bQSBGMfWDZPZm2Wb2BetqvbhhQecfsdVriMLCgV1TB72MH2U5Yc5ja9pinWURMtbvbsJWhsAaWKMCxUyvWsWoBk",
  "key29": "4M3DTeFpK1e1vLj3Rh83YW82MHyVpvYHHGcvwX3K4qSnXyvaQVmpkF3YTssNf3k2Abm3UvJXro2rGBk86xZxPxzL",
  "key30": "5CxeEVAkvcpyik7ZzRqiwswQULBneUB9VRsH6D81a6KBwY1y8Qw5YqsNWpUXLLdiVvJWsrXuNReLFRnmCiscZzrA",
  "key31": "2CEQ91rpUaJpdX23Ke3uQFkCV1wB1qQtxTubJcAjwd1qHBA7sA5YyagVqv5rRvK6you2fu1yz7QfwPNxiNjGvetN",
  "key32": "5DhNXrqu9p4KvAAR668VdpymtqbeLCTKGAd9b7njSkeGXKGJHY3MsS1xipg94yUnVJSsniAKmDeL5UqcgfZKKgv1",
  "key33": "3JVQ4F6egcPZYQo2dH756GQxrGX3fps77h99uKZxi5MRPrv69QUUdAZiRNt9VRGkbmTcDQrsHgQq9AGLDPSE34Xb",
  "key34": "2VMnfQgoipUMvVaYacq5fjrRhYZDFgoDychfESHRkNL6qpr5S4a2rwMRJPd3ag3yxarP8JDi1xpf6ZkFsNbc63Gs",
  "key35": "3fUQZx251PGVoUn1A3H9UxWpsaS3HNQ6XhdZcEGkGq5qaDxKGjGeETWbLktt2wuVB3xTGmzx7jT2XHb8W5LnHwtC",
  "key36": "5gUirg78MhzXwdgemF1r6bcRv36fQPSdEkME3sHgLhsxg2n6NvYWwrP4FCSzjMMewSL3qQANTuH14tiRGcyDYEGf",
  "key37": "2BqBod5vTGVnTSegq8yBQ9iJ67XiDMaxsfAhRdFx8rgpBgjY2xKErhMqDnUeGKWiyokXm598PrWeNeuCppniTVdj",
  "key38": "4jZbbngG8TTN9XBRUYkF1XmL1PQH3HwyJHSwVacduteVuYfvjJ7VPkskWaHih1EHTGVrFFoiqba72GNr9iRnH6ng",
  "key39": "umyWMETBWVQA1LC4Lm984DGAJd4X4jWQRGESVo57k1FF9qSNGsVMiMXdqw4pM4JY2jrS45mrx53nnm7d4smxfXM"
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
