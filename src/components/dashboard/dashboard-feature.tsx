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
    "3mynjJi4DiTyFkmCaWUn8tvyEftS2tijM3ZACfYdK5ZzidNLpwFKiccQVkDoo43QX65oB9xjrxpbg51fcQBBZhK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yTnty2TsQQpkvHg7VvXm5xPr7aruB5v8ahQBCfvnQcfZ58TLdRqgBkE1JZVzTcPbf5yDgNUXbFjK6vmbBsCJUd",
  "key1": "yhBPygFgP8vHc1aApenPxvKZdEGAUj6koA8QNbsiMLbkRFneGkeJrhHEFQsy2i7Hf6WPv5LJ5ECsBxvw45YUQyK",
  "key2": "32F6oweySTVES37H2R9doaQX44rskRAYZJ7ZZiYwKp2DYbXbkKC29DUdxK8kGEBKf21A7jGsfBnY2hThutLBQBry",
  "key3": "4C76SS1YiH64g51crXTJPRt9zg5457faMKzyXZnk41kyumUGasoURTUAUAsHh2BUY1R1DaoqG3gttNavtRxwQRVS",
  "key4": "5oTKh599k9PYa3MSSJtyRZ7vggfqLZ8S8St8nxiApUvd37MQXrhDR3BYx4x1gFkh3gLqdAyGQNvqRvTXwJDDsFY9",
  "key5": "58BhmUPKjTCb1JLLs6riQYRHxRJ6rNWthpY1XEBwrhK2HT3eAkJi6rJcfGPuFZKbh6pn3mqVkeoqmAp9v2egUYpG",
  "key6": "5uVv2j7NfXH85gLdqGnQUtRiifcUBqjpL8qbQrRcsuzJAnRsqSFRSLsrtydWLC7RPATnqfx4Yg5GYwKQ7xCJgDrp",
  "key7": "RNxS5JukqLQEiCKm639Xg7iZYz4DDVgBVvsKti5Zjd4gXhLxzd7dyVV6rJP2KoE1hBwTWspCjepgkoMWFFTrohe",
  "key8": "5ca51i8ZcCGodQSLL5ZHCMsQAYKdJdv1yudkiSGxCs1vSH323h5XMnv21Agk5uYHEPbLiM84TxcKWFqUcvPVCz8h",
  "key9": "8zTvkfPGnjte4z3qE3nxDsd9PPFJY97JVhrKKoHD7ZYia92wYEKdHdnadGso57KJn6NHG6QNJuPPnHAfBtRT7Qp",
  "key10": "3h8G9ARNF2v9K9i75ztgGWgKG9Y3c2XTWw7vNW2W7zQDTWoLHYwYxRLqJPyWieTPAkicoukG9geA9ZWabKzkJs8i",
  "key11": "53c9WdFr2nZ9nAs98Ydg82evrvsgq61cE6QUiggEy7LFSzUb9wnTQvPRUTgcjm17RCkfLggcuZyRDPfsNYk8koBc",
  "key12": "3QrJ8y5XpqcfSyyNnzhaB3CudbzuLJFWeaj7eqJ1H66SHpyUvuLcM8TypFNuw2DcJnJ4x65FZ1voejppXnE2nAG4",
  "key13": "2wSvsgExpFX5azw8UCfdQFg7cDsovLSwzrBasuYMpB3p1ejNmz6pvTqG6Hrh35GLb3bLxK9WpqkRe5m2pDx6QFGh",
  "key14": "5vhNAKfvcWCFsfnsU7hLXoje1tYSxRuhcTkTpJcS79rLeZjXhZ5aiMshvJep8KGoMaGkZDQWcSrf6s9NDWZF8tPU",
  "key15": "3xZN9FZXWD8UFAhM4H9NphLsDF18EGpkGYpSNmxW3j8f8fz7vcpyASrTSbgDHVh1ma4VVAbcsG5KR2r9SRN2k3qh",
  "key16": "2Eoxb2Qbmw1pUmuAPrghzug5bbMtwbiyuPtf6BCrodSrxJH9MZrck66kVvzEiAmJmFWoz6u1ymUnuxhKSKzxuXNS",
  "key17": "4bcPaq8ChQLRj8q3jcUErv2vCBNoyCZmKn3ExzZmTp2WqytgTUvPyyUiYZapwzZNDTzX3RAAUPJi9wU3cckfoZ32",
  "key18": "4vwxcp38HoMAqtBpdMsMbcutkc4ioeGzstqPf8JC2T4ZmBH9WaQxAs29TxP8z3Y2M3RyE8X5rgVgAUuA7nutuBqJ",
  "key19": "i325k56cP8yPhwSyK8BbGR5KFV4aF6vRJ9zEFHSMkMYyFezMRDKQTzSBjrr4hqhvvWc8Ywi2UYFqgHitWjrGdjP",
  "key20": "5xAKo3cEv1k2yPYDna7S66pAmULwZe9ACmd4MgcLop3W42KfiTVL6cBB6HsRR2kD5vT4zuyGdnBYqokc6vKUKhkJ",
  "key21": "B7JojPZ5q1oR5DaLuzMB6TTBdqv1G8nfV7DHAVgoQdZnH8EiuzBiYQrAtLAoP6iuqKty1qPqvq3zRujpxHAVMta",
  "key22": "yNNrCFjXrYLNotdQSWvVCKvJTe8SJxFDhaswvw5D7XcpH1hPUU7Wb2m6tRry7NbTd2njoTpSCajhtGPc8Ckx4ee",
  "key23": "2wnAnWjPHdUDXdJ4rf2JfHT1MtoPVSLU29UqqUBDaF6huEHnB5MQQyk7TvFuBK92DZBhaa1AHyjLDLS3bB1UpR2i",
  "key24": "3TXFDvuN9gsrxzKp67471GLca7B9SKD4kiW3qA1yThzmEFL2tQUE7hUVRVZHcuKohVFVtFmo95qi4uB996TLVRf8",
  "key25": "3Jo6YtMCRGwP7aV4cM1Dwvd3d8XKZaLqwZp5wjyQTxy1KY5XivszhdKiwZH4YyigvmWKwGo3tCZbGy7bgEzCijdZ",
  "key26": "2qSPH9hsvvt1mQKfdjAzDVdK3p5x7wZtDz3MuJL65y3CTjF8RnmzRvWqby1bPgLfztrSrGtYMiJ2Hvigc7e22usM",
  "key27": "KUhC9J31FbFEPVut26izHodQYQEWSo8YuU5Wpepz6n7TpY6aF5UqxoSE4mWZSqdES9KkzgFCz9umMjZVEcWYZT2",
  "key28": "7U2bHKsunP2Bace2UstHhpVTdc3vU3AcnD6qtZqyFZzpyVaEBSwS54euAvcweiJeAu7bkb7D1sQX9AYo3DF8Gfk",
  "key29": "3LgL2ZJymcU3WKE2vHwSzQbRFSoxZ8NSyh6QFCVj1kY3wGPd2HFmpssA75nXAnJsxreKk75SLgFg5z2mexcRE8jG",
  "key30": "zMhMvdVNCDe34dUh8kAFyEeggnF3Soh7JNmapLa1tw5fUJEHcno49itM4NbgPKgSgFMmZFz5t15rKu81j8CQUKK",
  "key31": "42dHSWomzgtnC1JGvzjZpvp8AvL4fXv52W4eJkYC44LE1XmEi6p2cBSLnioqK8H8bWk2VhDHxcy1yLPxRSENqF15",
  "key32": "5rSwBRnnhg6LJXqzbMDw5VzeSX54NcF6Aq5CeQreRgDwNC3Qz4BHqoLynJoK7zYDGf8ZrHeTo5SKTKfdRUoDemzF",
  "key33": "5Ej4QyH1X5ixbdA9UFWrChm8Mas7dShrdHWP1PBADBTPXeUnG1UKWcKFGu2xK2uFgbJwLh4drdh3saLxvqrzHG45",
  "key34": "5hNjVHSEGMjN37PEa4bzCMAX6BKcZuqYaZHdKDRr6USoRKmLagooawTaJQTmiZqbSs38x4bfRMdXgQfTV4YfWwH9",
  "key35": "53so76DishwQBzL5bSywD5DdmzZDEyhnTUpqy5iMnTMUrWG46DfmNobUfWc9VYyw8UdCNtWQvyZPpZZnTRnggNrX",
  "key36": "67QepQsycfXTxV6BfSpXhmSNawndfU5JmKXJcR2eFVzkPDXxhQcg84337mspULfGgV7eaxtxjjRm2J2oEnje9yjU",
  "key37": "5643jLjfe3Cc6eyEceQ5shaea4hYfvLRy1t5UFQfv5UxiyDqtSczs9FwdMKvo8W2XUpfhCHT8gZ3qzt15GwkswiS",
  "key38": "46VUajDt7pKY4iEM5c8qP8bjr7pj6Hwtt3zHhMKz1gDKdH3Mbk1hQASZ2EDafWqeBBY9jbfpfZHdYMjXh3GQ2LcR",
  "key39": "24c8aDN7qtNjMX2JADtcMRiqs7Y7Am2J2oNrgMT2xQFJ13ZPYSP62jJCocXcWrWpL8x13KJNBGJ2a7oUyqPpuGKz",
  "key40": "Bkc8Gk9L8LSsdtLw5p9oz4PSRGT5ue1G9Q6MjdU53eEvHWnb3Z4jLVoruB3GaNw2VX7HNmnFZJABvzuxXDUJE9o",
  "key41": "niYf8JSEJGTCsTn18apcEjkx5BF4DASfaonfQFQskVtwiTeSTWBpmu1xHzdv62pcv8eB2VxoRENHdPG4cs5ExDx",
  "key42": "5jjYDAUSgUE8TWUtg73PkV5Q1EfpmeqMn6Y6wj1ARW16QXmLouGSRKTsSQ8SrUvDkf8vSMJvAUtDWx29VcoHK8jw",
  "key43": "oeChqQ7iFAKioGPopwNRHzoJcNcjyPWJF2Vh2gLMXC2f4QwuX3nNGL1Adjy5cxLZ3mp6vDgEdfdkLRXcm2TQZ4y"
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
