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
    "3BjKa5EZJmBR8BsPCjHg6Exujqqt29FUQZ9r8Uy1mqg1bhRon3WYwhAmCL2xbXx13YJTQcii43Gfh17iUNV25GEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fbz8gK7jsCiNQ8jUYLzztEtZNkunRsL4r8GavGbH53YWfLUp99w3MBG3DLyxBtgM2diTNYjbdk9Ma1yqVVosrxW",
  "key1": "49DuENqHuLQJi1nswUbTp2ayV6F6bXvxGPXFSgufVkJxbGawB9qnUq3exfK1xNTzGmnPzNwcnvwNzqkN3Ht7kDao",
  "key2": "pBGUtQCtca8uZ1noXPheFbu1UQJdBbUFDFcuFsVLHNcLXDxWBioLXJDNcecMaTP3zg6rGq14VWd4ePo7HHpLJeb",
  "key3": "jdu1TsZFJUinM5JqcCPYMdLJVPSHR2VRQ2J9QkGWT1JXzBynX5kxTzYRvGJiRttaNRtytMQt1YjYpMB9rZhEzY9",
  "key4": "4Y8qMAj8LgebhzUR6tdcGrh1CQb4yHGtocqDJ36a8zxKbSm3VszbAYSnCuBFm3WSFCr7bx5eiVGDca9U9pVPh1mh",
  "key5": "2X5mtzxz2LUCGLu12NWRridaVu5RHpFuaJew69FjkNTQGvgZcWeAR9T1ShB5mJkftipUrMeBYYbbtVhYv9rDtuTM",
  "key6": "2CV1fkqW9vQYau5vBeqfr9J35Vbjpv314KTwWigic2v7DeZ5fCNWA5KRPcRD8AYnRrok68AxvTeBWgFZDLN7YqiU",
  "key7": "5CHdqwzDachnF1ccvcsdhFAcHMUuaYbwXjgENZxm5VqJAxJJAS9UcsqPGwzpH3zNopbNfZxShQXJYvyFoY5w41Jh",
  "key8": "38fzu1e4qfjocHsNVXcWKEhetq1ggXcm3CNrEakaEFQGf1iepwM3SuS7bDzoFYVGTMRRxRenxaL7rGz4vUZxTPLy",
  "key9": "3LSr1X2hZqrUmTTjmonbphRqVxt1EFnveUYdBwahSrNex6MPHSzFBd8Mu9K6jkQwkdbPqWYgDRhe81jZ5bjpUQap",
  "key10": "5D6AjECngHSxBAb7duHyA9CRu5UqydKTpZy22ddhXjZmAXWvv4heYAbvZGAZmrqFU1LMgusBWqTrCTiPPeiYfs2Z",
  "key11": "4w4fnymLTXY53GD6DCCRoJiqGYNcuAFcLGGYGFUUvZ7i6Tk6avbi89cL4Gm2iKfqzY67b5b7v73E5qZBLaQ6FjFk",
  "key12": "4JhMyzqJgBi2SCTzhMKGQhcQtjHq2jrD2KqhqK6QHdLRwgGNbZkS8x6hunJpEVQniQpPXULBPCwdu6dF8Tz99Fiw",
  "key13": "2M9ryv1G9o5tYEoGwb7vUUQChHwBo4G8DspdYevTJyQgMMobXsqCzvvHDZEGZbqUyM4GCsXgv9j6QaBqFCTyuai3",
  "key14": "5WXAFFBvuEDudym2gRAKw4co4eur32j7dDy6bunBWKm6pQM6nGEpp22ZZazFaTNofAmaTbKKVuFvR3LMpWLR8MLk",
  "key15": "4UaZnzwLH8s8wmTT7nh3tchCHwRCqLbnDkRz9zvqpjS3Rcr5XtuaV9urYKbZVj3hLWBiM5hayxqTaXA1qCt1iDA7",
  "key16": "4csc3dZAmWjrdxDMph8rxYNJ6RL8kE3jYtZCh4UENDkKVXR6P2bXckMHSQWQtUNGXobjgeoPHdQj9ezwE1tawcTK",
  "key17": "5iXRmqi9YZgGM8RrnD1JGvZKp8H4QhKRTuD5xzNE76tjmJsWowY18xAskkexTaPKjPY2KBAinYfC5oinJkEcu6gq",
  "key18": "5j71XUK1LCGMt1z7otWvu8iU5BABvvEEyn24Um3aVFXVHpEC7ENwDwwTrLQtP64yAkCKPshDdAnK5gJqxoMfb3ku",
  "key19": "4Fh5K4KKp7kZm6HMWuEGoUkTrS4M75HzghHob66a6hwiHoh7Bs5NSYwh3A5NjRg3mzxog4shfsNN4Bp8FMagFUUT",
  "key20": "Gnu8HykuBVeQXuqQ3jZ8fF97qYdgfRzxBCJFh2SHXyqfpEKz1sLsrwwgbnDYniDWsR9P71aRaGNDGBxQBPDeULq",
  "key21": "5Nr9tnWQGRUbRBbzAWmWNtDBMWbLm6KieCSht794y9k982RZpC3wyFrgSyfPeGzYxtyUjotUj7TUVdCx9LmRkwN",
  "key22": "3wBnG9VBMrWGBJhNRmJstHaeqdjtijgyK4h7B33EAbNfnTzDFCV5axbEWtEcJDG8bMyq3CB9pc4eWpmUGMq1xDC4",
  "key23": "4eCoN31yb2NcYjwUhLF5BHs824Gvrp2eodxe97hFziSaKtjRo54o4LStha31vMmYyytkaq8sJE6NdhkdHYQkCfva",
  "key24": "tiB43sprg2rKuHjSV8Aj62iTgHzCzGh7h9oH2ZyBTRe7FgEz49g3vGjXwKNNWmFShLra3sCPhh8RcB5dN3oMCys",
  "key25": "2JmbtYVab1SZR2pdwf88rDXJ5qbf7CaCetKDyDzNLFr5or8GVt2mmycXpwa5AUVr7C9XttNofXAk7tZhsGmD8H7E",
  "key26": "25JBvMC5RnpE8ZeZ55YS82DyLMKCr4v2xDvgLaeCJJh9RXLUUfgsbWFfG9dH9Ag5Kwf92AaQ14Z84YP4r7cLRYE4",
  "key27": "2driWZj6G5uTnsxSNd1WeXaxoeM3EeUKEbRTfGqanva6gYWbCDP98cFN21d5KXjmjMNEo8xmQjLNhn9gEgBbbtdU",
  "key28": "2PWh4fNyZsbMT9vjfPwBWGiWRE6JPCSWevu6ZkvPLMsaiHAPv4xCEAAKcFathfjFRrMAUdQyfr1prZA3uTZuh76D",
  "key29": "3R8fPE82yUG3TA2C9uuXUUSnJYJz82pQdAAzSAj1KQcuAc2czs8tvPvnEKfNhqSYFEXJFh1Rz8pKDy1gT4Eo2DeK",
  "key30": "2tZrtL7j5nEPY5j2PYszgiAMgsQ7zwVVrgvEx2MraSWRzLbHDYJzumtjBb6Z8XX8QD5mkR5tPvzr55cAxoG4Cz6C",
  "key31": "3pzLCMgNqKcdvDUjh4hrynzh4iqhKDqHiSfwsSnhJhpv4tNakHEyQypZ7zitWo2mthZThh7Faxro7U6ATAg62bNv",
  "key32": "41fgYiwaifSNDh4h4jzAdMf9mE3yYVC9rSy8VX7eEgKFKFe57mRUx1kESRSFPq3jSLvdc3PxLw2FFWsqDG4sGGsk",
  "key33": "6xJutbs7Jzs9CKTShQ8z3UnS8MAkbEUpGgQurtdtUrbiArnx5fTo6FtZ68MTLhy4eEi7wAfEP3oKboxBKk9G8rr",
  "key34": "3vnqXktX4RejH2DC18PHzTM83cssXcsfsJdRq9x4ob5pqCsHx1Jn5EQ8CjzJX2PpQJ4CiWrEXBgGo1Nu7Bghsq1n",
  "key35": "2eHB3AriPizVHpZUZccNrmntiAmrTB6p8KuTxffc6kcJDTVnzoLEYmzVuPhTqysyxWwArTXYQR4s6guBQcb92hVK",
  "key36": "4JNAVhf2NxTBDmtDye5zb9as4knuMBW2XeBcppFs8PVSwN3C9hyCM6NQeNNZMmVReBeDETWYGezTrT8v4XmUWBLs",
  "key37": "5Ef2hwgjNrqVmqzjYShYHZ23xs7An3pGpsY2BXtRjKFTXJVFhD8SZMkaoe5EwyBz1xQJeU56u1Lsyo2oLFX3Yveo",
  "key38": "VA8YxpJ9hcPt3ZeHzUC9TqXzk4rHUHQyiaKfvFdpW85d1UtVG8WcU71p28hVM1dEaW3BZFoghc4YhcU7sfwdDvN",
  "key39": "2YQWoDrZU1Rc1BXNogUwpUt14niggzewgYUrRkggPVXfNEoaorad5rNqBPDg9Z835GiXtbS79Uxrup7NvybbeYKQ",
  "key40": "2hb1TsnLbvhrEmcQGb4uS6CY7RdsBx89QE3d5gGYqY7r3ECKXoXqWJNf7UXPA8D3z6ziuomgyQ3Ciyg5hBcLpc9h",
  "key41": "4nsPcw8HWMprQQUEWkBpYChfazy7yRrZySZeF8chE1nN9YP4jSeHH4RzLtkmp1TMVw7RmxvbSMmbB1Y1Pvs7LsMi",
  "key42": "53QofFNzAgKFRyAYmJveAscVFSie5f2bKpJfFYQadJvVpuZKb3UjtewmTpipMxAbUKCcNfzCaWPTc3AgLr3s7jro",
  "key43": "3ENzHsFRsfHLMW8h5ureTnfvkaza6VbgUS7GUyS7MJCoireJhngCHP4UYXpdDUumY1QSYDN7JFFhAAVDZGJU8hjY",
  "key44": "3GsfwSo1EzwfEcN27iadP6SwPbJyC6q8pQvnT1ZFg31i7JxNJ8SGedDXbfa69tX7RHyMjM9tyu6LuqPgYjRZYRpC",
  "key45": "3LkXwcnqYjuQXJFqDVPZfVeQRi3QRAGX3ovgLXpfLUfPV6Kv2umuYpMAKnChjUDJVPRxj9pj9xzGKFEzJJoK6MTP"
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
