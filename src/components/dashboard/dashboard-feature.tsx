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
    "4sUS9EFeiExtU1mm2gutpiqodjraYtU4ubZhuksY3PkFrfyNwpPK9igLf5Qth4Kv5mw7Y7oNvpj4dN2VoMghBkqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7j6pKrsVVS6PWiNEH5qMvPnsAk3MTXCCa8n7TPaaFy8qgwj6wosLjqeKeThD5XQR7bmhtc5yzmKcSmg8wy1Z15",
  "key1": "3mVrNSrpkbFicZFHzB4B2P7vVoiabPibwLz1YpYCzSaitpeXRCqMUZUa6bJ6VKJ7pmouSW1X8odqvyhT5reCEdYS",
  "key2": "NeqcLey1HGEwj1Leo4JVJCsLDWXHEGYbPnTN27D94rhfEnpfMMsCScVG7GBgJMMb45HGxfxh7qDYaiJHrbxuQe3",
  "key3": "35MUGPkXAjz3KPkM2cxVMBvnnKguxS8DLkc1H7ZWhK2JfiqKH9H9YaQWRMeFD3J6Chq3n1fctf7prgJh8G6N7Lcg",
  "key4": "2JyJvzTSgSieFsdAeZbRqNyk6XwHkFY6NJm4iWtkhPGfmuJs3Q6kE6UhrwpYQLPrSC956UtLfeWZJM2pvUepS8M",
  "key5": "2CT3Nryi24SF9Ro6qCmD2FPXYUeq4wqmzSpwKcYACGE8tacGA2rZ3xHSbCVwAyhpuEgBWFBgczJ1yEvH7GzNPmDp",
  "key6": "62h5ixdpxFU3E1kmp6Dzcqe9zwpwAdYpf3sYWLB6V6H4X5eYjFT5dd8FVDBhHoN5MoQTEyzoaM7JYCb7cxuV6pJ7",
  "key7": "4ka7vDvDT7uYWW8NEjiXSF1BvqJhUvFUzXt4pD4UJRNP4SLmGiiV1nk4RHpiy4PzQJFNGb4V6QoADwvGdL1rufH3",
  "key8": "4FWmqDrWaDrsc5hnnFEpfTUaq69nDNfQN3SxbJ33xVgHX83DznQ2xre6hfMcBzMRjSkQKF68c8iLna5pvwN2hXwR",
  "key9": "37HgS2zgDndTwa2YyG9AZ6Vbv7qrpzAkCpfauYqMazMZkEGDNqDABQqWDGs1f5gvte5xcXB88YGxcc6mgbfABaGw",
  "key10": "2XAQrAf9wVeyLkuK1vebEgWFVuECM5aktQCbYvuHG6eRwYctV3RwQi4qrJSqSZKqMUEHkRFprnLXthYjpPovSriU",
  "key11": "3rNAQeDh7A4SkKb9zCzdstCGinWHRgk9NM44QCA6FogcXiyFSgwcFGPLsqTKZZ8JEbZ4PKqjcn9zHW4zUG8hFNsC",
  "key12": "2ZY1rC76hTaYKM7DzwmyVzdX6iH2GPtuead7HAuwgD5udxsXsoycegKnwirUPkusR3tBJWfsR9debRVJqorqZ45C",
  "key13": "32bNwUDZNdTnVNeAwhH2zodpTbKpjHyhkChUyrDcnUni84nLTbn1wPabp6p5YWr4LjGvMWAMWTxTHYzNyys8MZUm",
  "key14": "4EX2qvvgp66H2bnLf6a425oNaAWZWD8LhkPVbaAmG2aeadVUtBYqosHh1DxSKMkXQ2h5J8j93wQeBa3zBdkHGh1T",
  "key15": "3nCDGeDh7hFtvZ8HPTAvneDhiqMbb2pQNsyRj4sXnhp4r4voA4aBzT2T6iwh7HJkp6DTbgb3C8JQS9XfM94roodW",
  "key16": "3z2y1ABx2384j2XExwjRmFePUgv2aRDqCPJgj5aZqCmzR9bwQLcagbHxzdsLRNPneRYYyZwJmWARDAVPtFfqU3L8",
  "key17": "5te2kgeKU2y3XAEswb48bo5mTjBYwcwtRDCW3a3EEqcTrx3ABqaoWBddbjFL7PW6dVErqoWSxaHGoNxBHRsKENWU",
  "key18": "QWhfuQzM2iXswjEUVrrv1CyFCnF4Ze79xEMhjt1JXBdQqoD4UcepeXbTj3jBJ7yTMZfKFpNnVN8eAerrin1x4hy",
  "key19": "4oLVQF6JCaAP7FxgVYPKDBEepTJ4CwPWJtmKkcLAQK7DvM4xj9VUo6vNRFd3x3Cp83yaS7WE4vwfSWSNQ8KovZh2",
  "key20": "38Q2QQCYoFyacpCPHDmGKobz44UnghNZquEmQDAK6eQBir4fGt1wDP8KUvGBeZMjLDcvRpVdT8nps186iqU4rfEp",
  "key21": "5gvTre9MdZkq9vPspD6gKckkNAUGgK6tdaWbrSr2NtLBjQ7f7gLiMVJ2VY2RxMXpLzYKGu2tFAV11zYfFGEyqQCA",
  "key22": "4ZT4EnFMFp2MAvgfoPEsg7RXLZJHJR1QYH6yZjYs3sJbqdRQmM65BPDWWvFTbWaqwkvTwVnSxnKUjPNSJNKR2Kbh",
  "key23": "5bZbSDDb3XEdBv9tYeWFxAYeZtMCnD8WFsnMvapqh51fYJio6PRXnacCyUsYaSPDJttNcZYbvhYDuJR4KuFu87ks",
  "key24": "5AoXXpN2p6YEaJEdiCD849U6o3GucHXj7Cv9Ew6j9ju8Ad3HJcxoHupMvk9Eo8d6yY9yv4i1yYJZVMYs3dWvUTwK",
  "key25": "2i6CtDJN8XB3Jmyi2yYjuLR4FoTmtsPfBgbRR9cyDaaBiwJnZTrhxMJrevkGZdJMVSwQaoyAN6HFwCxxTxyZiBUZ",
  "key26": "5GBfEkgaPeguzTgwsVm61W6zYJH5vEHb48BAKS2VmLhQ2Tr8kVnGVozG9gcHKrPUojcvXiMJjarRZmKi5wPnPkmn",
  "key27": "5wArDMXFkfB1FK8Btd8A5ykJTtdrfoXbhKc391HX3CxsAdpaKj9KMrykbwJzYmVGq6zNwKfJJub8nKQRx18uu9vv",
  "key28": "JfuJTjZrpiYcm2dvTik1Bjec5JyZKTU8fnWJu81ib13Muh4vdcjkk7GMGJHpzBfCTyYnpFpTEKMGSD7TSeabdGD",
  "key29": "4jUvY61dqJaTVTmZGzAaiS6gnJ1rWN8wiFJyyRHsp7DYXuNR1NRyDXFZkgeAqMJuvDg2M7fEJK18sSBncFb3rgGq",
  "key30": "3AUCHjEsVC18KrJhFRqnzY6TbkrhKYGjgkbDdza6U48uHA8EnkHH3mkJQMkbbGuU4cdPziUrsxeJDuPTmFKiTtAh",
  "key31": "B2XEhFkX9kjRsKRbdTbpVXVM9TckF37Ji7AAqeLXdW2ZBbgMZUGg42NVr2fSihh9xhEYDvARhQgyNWKVuE3necg",
  "key32": "Rj9Qjh6Yo9WH6VyK3G3bkGYFc5S3nrzPjv8owio7P6qc9qMyWAoeo5ryU87ixt6jDaUiz5qRApZXsujzJT6wN8E",
  "key33": "4XinjLUzWqxAZPdLdj54XRr8xZHmxT2Ex6bdrRuBcmqmhzcaWAxVvUaV3K6YRLPcGQWJcY8n8k21ECqNdYVSp9S4",
  "key34": "32kcBUkQgQCHEYSsUuaMzM11cDVWRA1HTtcn33Vcj7LJLBMEMYgQBVs2YrDT2Tgv7T7McAGPyrFweaFxLFikCQkL",
  "key35": "CATr4tiSBfTmGHy5amcxABnMwrcf7n81KWZWWYgt6g8i3wMiGXSZAJE2LPbqfhKQjLQiEToAAuWV6M74B2vhBoC",
  "key36": "4wwebv7s1evYwsHDzGqUJqPerzTrYkEeW4CCwqVg2nC9LWPzF6v9PdoAKKUmQxEox85tfwHeqPd2NUQ2kbY3CDuW"
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
