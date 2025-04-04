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
    "61sbhosL2BtnEreMbYMtMvR2rzJzyhLF1DgVgARq5ruhpUEqMaUGayyU7MrRbSKQvrN2dhuYm5SWYTKqGNTQ6Xsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZPx5ej23YY85keX2jdUgD7QGtJsKRoYoLsTdhmhEu7ciZXJq4sg57bEsgsFMRLmf394AqUVLZtFPdkvBK2nbhK",
  "key1": "3UYmVydHtSPDrtb8A5nKkY7Fx6bHMQ9D3WNP2i7LgHjJfYHApS3PxykoaN2JvgPgKAX2EeKHdyNvKeM6QFxEX3SG",
  "key2": "5aXqZnaKLPvCe3bwePvj9hk9Cw4xtPxvWVMTxyVw8jemVQaPkUnKmgimuPQTVY6U558DMtpxgVfzjY33pvVzt2EQ",
  "key3": "aVC9dUMNy1LTUMiVcsaD8cFiXUNr7bEEk6Vhk1Q9RBfn6n6c3SodRHsvnNpwUbWhgWXKCK63RNFwDddUUgebwvP",
  "key4": "8jhqN7XS8jodR2eGvutG5gFEjqiwtWG3Uw9EYuU3618FgXzXPZnBTv9GwtQyQf1hz3ErBaXiE5NVFCvnUjBKv1f",
  "key5": "2ShPcyfW79F969kXM9MZD59X2b3P8JowCA3sX4rdyHe72wwr88TDJmpXVYauBh3TE61iQFK7h8BP87iUNsKcYHsT",
  "key6": "5N1zHtCPZmHgH7ZiakhCrNSNKZUAkYV3rpcSqDNDGTJyGo75c1QNvVmjGS7iCKXz1SiVUL4nZPH56hkMxVtduTKs",
  "key7": "2CR6MgNft5jYvTr6Qc8mofiqyX4ks17noQ2Xih6WcTVN9UrANgHN7vj8y3LEDFKEA8ThW1wEc1YqaJUdCHGM1rAW",
  "key8": "2TEZD7Pjob1pJJT5KdxVbRnQfnuzN12xXSUDL5FPepHEyjDHYJsYLDx2AW5hKnz6oR4UDMyPMUaspeYxXqGYpaTB",
  "key9": "4ySGudiM1UTdsyRwcmVoXqEaH4jnbx33xhCGotgodc4YtY1ASuETsgE4qkHa4XF6jZnrCgAxtEpDKwgNEYySw76S",
  "key10": "3qxWFfR26eYEKUUUzvzRe7ytRZp38fKNftZyuk3TDa1DYV3P5mPihwNwnV6K9b7WTRgdngD2KDLKrntcFi9wucVB",
  "key11": "SPuKbptRFdT7KitadYvWiceFPt6BBM6B2oMLiJrjnN4JdVVgdcyjs55pyKAZPZ7YXdwRunsjJEsmioECF19oVKN",
  "key12": "4sdpg7mpV9EKfNJTuQL7QjqprBv21EqEq32EsUmq59oabN6ELX72dfjRdeTpmvqLQ59moeyCryx8oqJEfEYPRFB",
  "key13": "2JL69EBfqQgZ7wjMifh7RDXfdg6cpcwDykudRrgZUWEpx1rVLYQdob63mMWTRYqbBMgNw3VjRB3U2SuXRD87GUgS",
  "key14": "5hQsvhnD4Jo5jq2vyGZxDHCNGfKovd2VXyFcNjHmXnGNiDWCqeq77FAN2hfgtK7SXUyPFYb99BNAsigdS51ScQRd",
  "key15": "2Rwsqqdv86BoPJuGBZkppXquDh3YiusGUsjv7Ur8pevMwc5eM8VpfaNFR93KMYHHwpUokD7fDAaeBSfEsSxYBjRv",
  "key16": "5FJoQPv397DEBkLDnm19PZQrYXF2tUa32ed2phcLJiPkHxBv4XaZmetYCrwcMhGGhQg5hvWRJDxeeqQbDeAFMJuc",
  "key17": "4UkQ3ssgdjyjANganh7oWSSCcM9bdKFPkWELbScb6dhsJ6LxGrh1fh6WDDXaRCyMWBE1sFw1nFq27uh8CwtPaaCS",
  "key18": "28kK8a7Lk2LYFFokRBm8wbsgRZJ1K1kKBsbvZ7RVL7N3KKGiJW5nLoxZZLYx9XrUP6WpATwR1iJADX5R1B6EhKvE",
  "key19": "TECww3ZnwgaLgYbS4xjchFCgnbhZ1CNxPCLjYpUrwck2PD98J8aTfwQ3Bcud4vRz72QpVZxyK4taQVg9zwn6crB",
  "key20": "5diQgzmzjAdxDgJ2m4UhgZUgedKcTbGXcbsoFUC4N22BURAN6aXSzM75MS8myoJHf2dzvk2U1QBNbc67Lch7uBmN",
  "key21": "5Q5u7xvN66czQPv1Ka2psLVv5Qs6MyWdVpE1cJX63vsNhb9BVW7SdhUg1GvLBNNjT9R63uJj5NN9uycDtCVwkcZK",
  "key22": "3iRh3Pu86X5w9tAVTybKqAZ6UWTFzJkRgpkNWW8ydvoA4p5KmNQUnTbHRXDnLLvjRk7xyefm4oCyEKWDiKjWPvDY",
  "key23": "5JoNdsqPMe2f2ZaW46izMKk3SAVkLx5nTQ2aT8Qwpqs4wy1ei6B1zrNs3T4rGc1jHNmcxZKNZ37VANRYKLExU6GG",
  "key24": "4Xpw5ZZKXvM6FMiFuHyaPAL6sKE1DXfPsVcNzZ3YKcdq5cRqfdfFpgBZTVLtyVY61dAMLxX25SisxFJNhUuZGmP",
  "key25": "5uiX6JnMCVD4ba7eRuiHPbW1y8TokfAcGVYY83sYEJSnut8vRidCNqpTGcUK42gB5G2VYCmcmxZVcS9vWzP1VnoY",
  "key26": "65tPm2VnY61ox8Y7uhQKo1tuUunoDA87T3J15qBJVmbWuwftTBT3iLxhithJ2KJVZVmQ5thCZwu5LaBjCkr4DWyZ",
  "key27": "31iJak71ftCYf37mgnxPkkaQ4jGsxrQLLyHf4P12xfDtLNPbxdzd7RugvxPvBaAGWmFDWFG9qvidg2NBLXyX4UbG",
  "key28": "3aoeiNacwjFvj2uqnvzdy78bQzqgSwAeqjWAiQN3zEKrnj9JX74BRGjBm45cy6rcfgiDNiU26eFYVWrHvYmqjxFN",
  "key29": "4nKK7pQKzSRrGUZFXLmnuFL2oDXyTr7Fz98dEZZPeLTZ6RYG9U7Z8fyodK3ZGEGner7DYmWhRMChTLwGZZDUmcfG",
  "key30": "NcV5GL7rLoqxsmVqdpKkkisoZ7YUvkLc5UX9RwRcV2NH7gm6Vx7wsVZaUQ4eheQUESsnxmz1bmtHFM3gLPrLRb3",
  "key31": "kpV93kroiDzTqkwkwnyxtMEcrR1w3zzDE3Qpj4tcwX2cCmYtjxxaKE1Us5dFwzS5FMr82ffgaFheXZN1CmXLFQ4",
  "key32": "xWTtoqAAL29JQBVynqH6QqTpWNzz7dHyPepRPizK6MXuBTYoVmfyYBQA5AeFUbmzmrCCp5Jd5JciXsVBo1knZZ2",
  "key33": "EhPoL9NCeCqRwnvhp2H8dtSTM5sjNAwMesCrcArL5eQ41s5TMUGeCrRekWcL7SaA8rp41r2Y1FmVsauMQMhBg89",
  "key34": "3sDSsKrNWANQxQjHLAtqtvahAVp7vuNacAQNzPgPYc11gkRCkS329yoHRYjYMxtEFRyehp6U1jqEZSjZQwMuPhpv",
  "key35": "3MsH8PfQQBF4CY7GX7Eyj2N7VD7xcVG57QmuLf5X1fAJ9fixt6kFDZDJDY5vV1jbtnomsoPhEdEczN93JMPwqZ5n"
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
