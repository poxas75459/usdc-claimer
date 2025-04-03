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
    "2ndPmKFv6aRfm7AnfyhnSBj3J5k9aSx4PHHyk2NWDkDCctspYCBvZCADtkGBtpurSvaxtKyFqp7pHpnC8ExazCtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHWA3VUxyHi7uv2SuZBK4b1SFWJZmMe9h6CbACv6kZkrS3yicYR9hdt6W9ed9Z3C7UXqEnn1Pw7abFLpuiCzEnW",
  "key1": "4aFFEqs9kLFhdDZEioWY1LSF43FSsuSuzHAFJ9dsMjVxHiuC7SaAaux5QDKHCNHM7HJ5Eg4RzvxZtazPcs9A6M3h",
  "key2": "vNdhBQKfVXkAAs331d6vMdUYmgoHq7f1tPJUJJQr8V16DDZaXkHQsoLJD1UFGMcYYYMDjkPVe7SCxTHfRfpUAqC",
  "key3": "2Z7BVPPkVxxAgTSQhE1ELViqttT7foYchxZMGbYV7snr97ZJ9XFTwHUUc719r9faSHA8QYtijnXqfNFjVmJ5aWXz",
  "key4": "sPF7MZRk8Doq9UWTQ26NLN24bbjXNvELeN1JZ7tZEkSWqNzs8epQ8JW12xcCjmBFvUmYUKw1NKSq3u3DvGkqjtR",
  "key5": "2Nf2PGsaGK6DsGU8wYz614Q9YeYofPmc1RwcjUGHRZPn8K7h5bBXuZifJMjBRzQ3soP5TV17N7c8pz7WUGtWc7eX",
  "key6": "2jtoKgLHMgSNUCvwEFPcVYiXqKS99YJwFmWq7AywwcTFH5rjRv7dR9mPATChXhdmEbkjxKejWVGXjh1AZe3LJDRH",
  "key7": "2mpsMG7gvXWT6e5wb2P2kJQexparjcV8rdCcQNjmMPQf7Dy9F4dtUyyiNt82rFHK6YqL1WqKcNp6ZoQ4aj4YPs1Y",
  "key8": "kCKGSaW6Es5LHsuJYV5UXpg3KSQy2zEkxyYFYPd4LkHZDscRK7kQWxe3uJpxRtN5jzkWdsNzsfSYf7ZBe6dVzpJ",
  "key9": "5Q1BD34qfwCS65jypj2VTrbkXKpSmaiAU8QZHodpSGts5vkS9xebtep7oT43cp7B3XFEAxg9UoMnwpAh3f3uU1vo",
  "key10": "4JKjvSw8jS9Zfonb9y9Z7cpvk7TMMjZpo7H9RPVgEHeUxJYXrWWzaGHrp2dP5PNXH3YBazgCEqbrcfbASenavPNw",
  "key11": "5c3jotzWx8W7dTRsdZ79jNdhfzVUoRv571Ly6jpPMhAntHFwT9kft23SjuUcwiQwiE7wE881Moq8kf1XSSmkQ4te",
  "key12": "2teF11GobCsxDqQdwZ2yBWnFrzWPt7KejPdQGfue7gaC2EvcTgYKGqJuRWhUzEFseAxYDKRhNzjRAuTo7bhtPTBJ",
  "key13": "4RksKuFk1wqiwLvqSfEmnXtTFo7WC3bHJyJx6ts7JzSPsZZg8BVULNRmigmHT4quznnHWCcycrS1aXYF87eGvPTk",
  "key14": "kn3FEtP91wfQo4RuiSxHM9Jiz3FR2xWHQHkutE1h9hG4Sdd3VXCciHJFADP5G2jj21FYroMVPBznn8bk6qfApGq",
  "key15": "563FQCfFDo5xab7EYQpMjUYJP2wzrzAZ7ygm9a35od4GPYDZLqNMM1CH2VrAgnLQWx1ZH7oHPzwWnwE9LfA7RzT7",
  "key16": "2RSEQz98e72GJonR4o1PdpmtyYddDsByJmUy5uPY14ckjaUHyqaCXgMXHWmJfML2AVCHqDYkdWquAeG9SoUt9gPy",
  "key17": "tgqWcwXqgXnggnXT4rKesKHRJXEwYkK8Q4wymJRW7RweAijvFMpBFKgf4vgFNPkBosYifoHGpEk7MoBEA12WNPn",
  "key18": "2Q3mn7iyrir1D8thdKpcvNfH2ihhD7oLn8XPPGAG4BMi1cqfqHDusqEpa5NVPerFSyKnrs7q2CrgktGPVYV7dc9J",
  "key19": "bFV4xZD5hLMPuQQoyFHeTJPCTvhvRj27nMCRC2aYrzG8WocZNDwGrL1VsouUHqrHqkNH7FiSzwFP4962S6yhGKM",
  "key20": "5yUqbkfboxq7d3jvF6VZmWnrxvZjpHGKubVyXc2gKSLdUXjGjLtrV71pey3fN3iRWdPWofrmctxPsb9Ge4AEkNsX",
  "key21": "2mp3PGNnr69A2GBPosVkjRxuLpviqxCvEuc66x9tsg73qtEEvjW2ZjonDrMgYpPM3SoFWCk79bevY3AYoMPhcZS8",
  "key22": "2m5sTTf1CNVj5hqrd2yb9BA3gJqMmgEUHwMcW7WXNjaiZDkAWRRH6btMV1PZyWLWkNBwAFwpNBkziPoD1nQG3wNK",
  "key23": "4AdCBdhGCJvuYA2CNMwNZq2LJskgwP2sHcpF2gZ2uGfF6NAo1AEzX74ns7s9oqh364STprS4eN6yTR7NxeUAqN4C",
  "key24": "2td4mt6d9qHqfPxAuM7d7fzQS6HQc8YSuA8qVwH4spwpKoqz1FS8TMNa6vxpQwetP15eS45Cy6KjaUdEkiPEngPN",
  "key25": "hKhV54stsN6tieQ57pHD2jYPzFzB2JcdZmipUNfX1GSn8He4NXHg1VsU7pQ469vMdxckKEzJYkPUYHJY8QFQfdp",
  "key26": "ui2mVBmpXaHU6S2uay4gxYesxigVcJDaJDTofpnrZbvrmizhQJQLQFeKVF3fVMUq9x7d2rymBN2mNagv7f6C812",
  "key27": "3CxnnJ9xxC7NttpM2q25JHxqFrnNyi9iFUhN6UHrjwRZ3kfK5c1BTabRR4n2tsG469QTn7c46Kr4F61b686y2Lhu",
  "key28": "xFpZUAcQEdZGxBCK3CKc2LTZWBCBNu6cPz2vUo4ZNdsYrbeURBC2xqaXmstoAAAFDF6DFu9nLybfMnL1Y4sX5ja",
  "key29": "4BUsggbDjYAMjovFZfHk2uofYrFFNf9szuuMjJ9MhRDGX4zJM7HgfG5hJRqxNniBJKZRncjq8hzTjw3Jizofc1hv",
  "key30": "tb9UHiqowaHqkjicccgBAFQZrzRFFcxE4nUHfRDNSMx4aELjmrdsvf9cfpdEogVa9qspdMKcti3m1QEu4NpLW3n",
  "key31": "4vXu63fKFvu9us1kwD8iPEucCf91oay9QZf2Hxtej6hUEdVS5Qzz5CuWsPi1uqe6ZpmQG5hJBKb5G6QgXE1SRWeG",
  "key32": "3PyZhBpx9dTyy72ePMj5fEjeMC647MNLoLNi68A9cbgN8zM84nFWHpj6PUWoBzaYHAfTQ4on9qMWDqQJ5oQ1E5EW",
  "key33": "4Cwmp6wvyu41XQarnssg3Pg77ruSYc8LnJbZZeGoYzHLLjv1aDBX5WQrteDwKMSeXcmypX8aQ1d9bkAThGz59SDZ",
  "key34": "2EaFFvc2xCLU67GywoiVP1RJb9r7nu3NsQZ8xeXZrFsm9gvjYK96q65srg2jRHsYLzTAggLQEoJ4ZrMjUoYiqQns",
  "key35": "24z3tBJpwUF6DKxjW3osZoGoFeoqQYcPBDdVcb9LB5XUDcCBWr3f6W2WWaZMar8cuTDXyQ65RaEPo5czBENWWvpi",
  "key36": "9dxyLkdQYNjRKg8xTmb6by7SmzyARPHuqRpXqDWW2Qa8Qt1VMoNurGeQ5xjBoKrXti5gcMCttfWCyrz2AY1VCMi",
  "key37": "2FNNDfBuECRdvdntZSVrf65UVgmg7bs4HUwcFJ5AKjSnfGAQXjSNspJ4py1WtHz9fXoAf89UQFCRVjQ4JLJo1gAS",
  "key38": "3FLPHTGckRUoWvt3iwsLABeuNdmnV7eoWp44s9HyHgjzKmUTR3KJF4QUXRXZt5droUUgpN5fwNAqURogiPPCocJB",
  "key39": "5pZD31Q5WD6WGovjM79aNQWK2Ymu6zj875pyNAPJSvRibSesHxQDuUtSUi7ZTrN7dDsx2RHkgYBNqXnuxB24ykLT",
  "key40": "3Rk3JhpYyCYP3WiMsxKXD3Pi8EdaSPDQ989j5jY1HqjyUMYQpU1J3NeohqEesWhifLMr8yAfLZGk9HdhNCPLdopf",
  "key41": "MXM5oHUErCjfrqep8m4rMtvyCuxtzuRzNQotmLeWzHirxSaNoFPdURH2yMbEhR9zLTxTQF1SQAseERopQ1uQpfk",
  "key42": "gLAPJJruLBA6xeSzCRNXUeKfmDr7ufnCpgN4QXLjMie1qs2ivbdfaiRjSjhAMmsqUH5pjzSyhM1RvX6Bw2nva5W",
  "key43": "5jDkUyboTa8sd3xgSMJXhaBa9Y7cxVCsE6LMySJzWkdGyu33XDcE3wiEXMN2rnkbxy7gAnJ8k1Nzr29gupFYX2qB",
  "key44": "RfNMkS4MWqu91b5ukXKdLSJnYswCiZQGo29eHzDmCBFsjmKDKj7M5zexjvYRxAi6Movx4JsTj8AACKtzjdCHimY"
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
