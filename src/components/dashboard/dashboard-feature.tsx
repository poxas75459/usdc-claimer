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
    "2KdZh2kbtGVFxKARTh14j7ATMkgHUpT1QMFo6Ln7AATrYfjQTzVMgHBDQ7PEpvLbd8Vp8qBAx99uTum3t7TEpFqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBfjFerz96NyPkUAnJSgfi3M8eWGmCcSSNh5Xz8a4x8t893rKb49NckGwwJ4BBKfaxBKanUg9rWXi2YmrV6Nf1T",
  "key1": "5PB9UUF7NHN4tHTpjTFZmo9A4A2pTsh6igAvsV5nfcS455SLYbTeYcbjcmqcJFW3pjspjM7Vuj6yrh7Juzr2WmBU",
  "key2": "5TJfnfy8HRvgJfHhjzdBvBc8TRprfrB9m29LU4NoyGsx1tm7hiG2dNoXF7FHSZwQrRz2WzLkXUuPH4vAxhVHT33w",
  "key3": "5bZmHWq9fhdwpafMrKPpX2nMEg1ceRhpWcawzHKtT2eLEqrJppLLKJnQP5eUKKVgPU65tZMR2LuctT5haHsBY6Nz",
  "key4": "3PreDwzR1GqcKuq8XgpC8hJPg7zuh2n3GvHYf7yksHbvASbRtN8PHcxL93tpiebpDddVYTS4xbRtjDKqXxQHikXa",
  "key5": "5TqDn2GEbtuTnbaysQTdkGr8WYNECD291pVvWqXCZHQe65nGahLd99vTVA3rP8bsyJoE54JeFhcBgJYbEAGxVDYq",
  "key6": "3WEhrDtHkvkK6mn7F8en7AuawQck1jWE56Q27HeghNTBytkpfuEzd5DUwjZYXFNV1hVrq5FLDGYB1mq9pcPdoKBc",
  "key7": "Nkw5uY8NFt4f19LVpm3vke6XHRSjkpSBjdkTuhpa5J6Cc5vbqB6H2PKv12ADAPvoWZHw3nDLa7E5DPr76MM24YV",
  "key8": "5rC5WqfXeSk8FZ8VzzyFt7TeHMawZn22YB2oghDLUJsxivvca3BeAxWDnkziNixnnv5ofRNuA2hZaUMFXrn3MEs8",
  "key9": "4JMAaJHjyxWCmrhN7CEK321o3FYwpiPmTces2CozXnoKoHta5qwGzwCF3CqgEvrCWM3fgRZ6jzV4jUM9GuYohj6A",
  "key10": "2ivTkpPpDqq4N1xbXUtbXD8RpPYXZvfBuYQMhnXbXoi26EPevqwLe3RhxqvCDTmLdjGMkkMKjBnNfGdUGDFukiTQ",
  "key11": "65hU9cpj7REfUWVcDmMEZTombxJxM9cwmbZqGHnEku8KgoL9z8hkMRYwqAme61TrK32D6h7G5jnFHi2Wg16RyEKh",
  "key12": "UxZQxAV1kWT9fjHzPz3TSeXruPoo4TkHPVd1M4v7VeQh7mL2sL2Y5c8UFRm1q2J18TpkwCUcpam9KW6Hi7YFMXU",
  "key13": "cGexPF4CLZGb3hjGMXikuTG6EAk6FtBTpAhBzWHeSghjypCcxMe66iZuNyu8G7hYyWKnokd5L5NxG6q3wFECezL",
  "key14": "3mz93zjMfRJdU9eACH435Z6BA5TCjrYyKBHvd9NjEiLciPpBtKMu2m5DtPPshr5XY1HFF5xpn3d8uSLkB9eGYH86",
  "key15": "3w2KABAdWnBzbhrDMo92NsWJAT9Ti9D8NaaqpJDFH1Njd4ScXozy4wMRZNgq5tdeLkjAYGb56js85FWvoAS5GvUA",
  "key16": "kxor7Jk6jJiU2hfgUkCr9rSBCSwpvXgoaKQZfyM7XvxLaM8hoeDARJzKtZWeNyE3MUSed3n8n7xdwAPSWdEU7D3",
  "key17": "3LHCgAv3oZt4aBWzrag3u3HcAa1Y1J6a1ZJrVcQRYUSjjBCqXUSXnYPJRyX5QJiBPNwW6D5haveAA6biNoiCKexN",
  "key18": "21HupcxN19SPZbnF1vMiWbUP5qLA5rzECF2P5j8osXRLNkjPFxUcUGokL4a3Zys4SapPupRLRVNBA3pKQowmSYpK",
  "key19": "6wroDiNgsEzKx8zGVSXQNTJz72oe3fYugdug3MB7tEsu1J964pXAGmfkkdLEKB6VMmkx92nG4m7uirxC3s3Divb",
  "key20": "5veUCL45A4Jje6JLDxw2eJxkKi8uBDZHeUQvWPm8pStF5Ck3MqvDKNavTxH837uEoJJYbXsgqBYzY691yXwXYRpZ",
  "key21": "61RBxcTvJfqfu9nhrfcWoqcHy8X749tEBnqUMqHt2M4vJv1gRpR2yTV6cGgrpcNLwTPURKauxMS3gfSaUEP8AjS3",
  "key22": "3RS5ZpcXcUJ5omcqiqwRPm2nicLsPJ6jHj4dFVTNbMKptpFAPf3gXoELB8WFLUMGZiQvFs4a6ZJgYJ5iZU2CWECU",
  "key23": "8R9o1bZ71KKZ4hgMkLw4yESyPbdDYdRZoaq75eyd2HXQ76qpqHUr7ZH45ktQA6FNjJCzGsYaTYasYPDgkP3s1yF",
  "key24": "4bbqKmhcYXbFg6djz6YAtroXgwDZ7Z2rBJpJJ72jKUh3PAi3rEryoLyCiFbmLW725gAhv6irL26LjJvfz3sahJjM",
  "key25": "j9N3VChYgjopNTjkazuG3XeBXi2qgdWVRHHWWH8Md312jW1n9sncrXFtGHdysizcmJosLuHWvuACWGZZujMiJE8",
  "key26": "2nCkT1imd17BRYkqaWeoCAMqDx7EQS8aQFLuTZwLcnimwwHfhk18MDFPrYGLjxUHZJD95CD3XapPXrtVrHFdJ8Xq",
  "key27": "4XgFDrtjXASabNpj6yqVu7mzzTcMQywebniQdRiJ4fFRX5phajQ5enwXVr2a4B8pEnkyqktnF3MCXiah8K7t8vMf",
  "key28": "5CNoy9UrAxzCzz1Vs1NLLhs7hx12cYHZyHg7mRwmgcg43W37i46nefGBDH5eQz3c2a7ZaahJ9jEW29h5EDbNdSa5",
  "key29": "2HzVpHEyPfZQf8nMPrSDB9FiV4kRKLK27k9EWAJ5CUKU98BWZQvfKFbXhGhpEMP8e9mvbKdVYxdSzFmmJHWcGYQu",
  "key30": "nAEgJmhTikszPXxBFm1oT7H4T4Zbbk2xVRJP183PNsnvN9NLSVvP4tvDsqyVrwhLxjNa3bVCgtm5Wmr1e2XKTr9",
  "key31": "F7AWhJVRpNVJwbp5hJPYi4y4NKWFMdLBSQJfFtwPhZna1FP6ayyAieSCDVyCvxj7RKnsVqHdANbr7S1Xg5STNz4",
  "key32": "4XQd4kUHdiDH17LxpDUPDoLW8sks3eLBWzAftakTWgzPappcuwN1pvCZ9XRjdnFBoiDG7bc3axneZRCmuRFKsh6b",
  "key33": "hak7wRiY1r4vZa1Zs13d9FUTp8PAyRRUYDBEHqw49z9pJPZt7JBVijmX8Lru7gg4ZYZJTnM7HTss8CPCPvoHRdd",
  "key34": "W4CW2HL6eADpqmY82rqaNkMLoYbkSBKce4J4njm3ME73NDHfFxawA3P6EBYnnkCbfEUErfLmZqAh9Bbanj61zui",
  "key35": "UzTsCHx97UBf41E2QTU4vqaHi9U6JqwbhQ8EWpy9AjfYmsHT4ALXjh1c5dDQcw45gQn66YNChXonqmwrjKNqjpb",
  "key36": "465q4v9YAbmbazUYcWRBi8VWCrXTQLepZUohfnpCXeku1ZWadXwWS4tHuGhcuWQitUQPsQHG2U8aJbxLuee2NsGh",
  "key37": "uDN7wGXEmjyehLb3PLLwSHGxHXA8iPND7HpJmG2MC8n5VZmYFg1gXNWFiyxe6VFZC6sxVhpKZTkaRZxE6ay5yhd",
  "key38": "3WY6TnBEpFLsGezfJMDsLpuDMTsSaptFaRsMrjqXSWVALxvHUyfEcx3cxJNc4AwkbodcgtMsWqG4wRpDZn2qa3nQ",
  "key39": "4YsopiuRwHSbfgwn7id72XDtKVtUmb6HTa9wqJ5rvaY9nuKMxBPfDNEWwpbzpfyGgPwY8vrphtYgG5DrEcGLsMsV",
  "key40": "37FijkiiAycKpuaE3jHLcBpRnBoYiJcW54KDGWvPXbRFwS4BWUPx1LDfhQ5emUkgVeYnWNNPAXTaGHKfmCd7V5hK",
  "key41": "4kqkSZujsiYpNa6aVSGyRvi3JM8DuueFt4ZEv4m8ktA2KJWsESKsLvai2tntgpaX7VkMoHcypC3vP1GaGQxX2Lid",
  "key42": "5qJvNcMSNkNzTp1XeVvycafnYW8MLaoy7KNaF1yLo5p2NYoe6uacSmEJnNTRLASnYX244NAj4z7zPSgjcjG7p15g",
  "key43": "seUoDL7w7uzUSW16YyApiGk8y5d1xx2i9uoYQzEqq4ygywGSqFvfPypWtRpdEcx8e1e52ujfK2oooTryX5KyNNo",
  "key44": "2NmdQfN1gCvLA77MR6nE5nSah8r66bzxTAHCHMafPyBycpGGkmRPnyx2pspoVjX6Cet75bncL3kWkUKn2FEut1cU",
  "key45": "QRnVZifQFSpLBiqAaNKUggYnFjzDz9Mu18kJCXr5Li47CrjY9P7L6rr1EwcY5sioAKmnStxC7aLcTiH1qCtPkhc"
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
