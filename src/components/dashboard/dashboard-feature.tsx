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
    "4EthQQ41YdSjmjP1W6BcPdVYQQT79s3Xf3xqtse6erymqfsKaGrcY8KjHH8NBLZyRoBqyei3ETd6WvD1maBdv8wM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qmLHtyaAApUGYi6HM2B1BEJnQLuLNXqc7hAvrsJf2iGVy3mZftzgWh48QGrbXTYVBvygRd7ojR1sciRzCrnSV1",
  "key1": "5YboQU5wRo6GRv85eGPcELYDMWSLidT6E8YtmacLPeYFqUBo6F1boWcCqSC3BNcYzSnPHNLeyPhkyMScrdL4jDsZ",
  "key2": "48s8hxz7L6f8XXrkw1vqK4KHigCKDefvfLiQLJU5DB3WHdavMBJT5JRed7ErBKwBYvA7qc2nwCLsC2p45tujYRg1",
  "key3": "3sBugU6oShMc6YZaZyt5SMk82JiunqcM2wR14t9M4wVyAr1hZS8xGvnU4X9JqTf1SspnfYfLMN37mACYWS2PcfDH",
  "key4": "33fk4XkdyeCZAdsigPGqn8kYG9pRmzAnXeJFk8vXEcPcdCuygkjw9oNWhvecS4tuZoMFto3kktDZXjn2tzz6pRst",
  "key5": "3vXkoL3b7G5AMhDbrjGuM3cK363hYh7f4hfQKhLoPBbRi9xqK4Jhz48GCRVNDiwxg6x8yihX59H5cXSihazLNukB",
  "key6": "Xt8M93mNVNktE5tw3ZQF9gGPrzmpxiSVWXBmTKG28rtJKWDS5QKrwRGyZMpZeFGuSD5Niv227LcqfttK9oCYp4v",
  "key7": "2Pt5e73BTiKQyJCZDeqCgDUqQxxcZKdXShiF5N3wbiJoqYwXXEZPQAxbvDRdG1dz3BsNZxZyyKF9CDibPZMRj6wy",
  "key8": "5mKV6NJJC8aA6QmtVNGpgCw4et3T96b8e2upJsqrTEko5uEDKeyTakGEeKS45SU9QStmEa4p4JpUR74pQtMcyRHA",
  "key9": "QUr6AGo9uzyRA9XMTYHrj7TKcaWyUA5boYAAyXjBzq2yYuLvL1vMLbHp45GNep1SthLm2TtU3w9hGn9sRRHQtX2",
  "key10": "4yDzXYGwJcBFRqhZGSc74mcG7g5Q2yQKSyh8ifddVQVWzAgWX8D5akjT4YM8tqyGYcQyyMjoGduTXjcb4hQ6uue3",
  "key11": "2GTnVuAEoD32u1HsGSuzdfWkpaWRzTfnZso42rJAriiGCeQyz9EpBGi4nq3pNvESEpzuDsTAVYwzt7n4wK7KxVc6",
  "key12": "CWhaNr3xkEjFR9AmzySjxc6FMQNMbrphFfgqPVXiHtSbMr5doqwPaup41CwczRkPegcBzXAKVZu78M2JUfTSy2S",
  "key13": "5TBjTXtmRrGCyqejXwWnUepowUQGNUXizbSpQXWBcxqUCH8r42WdxLgSWcGhYLxRY8RfzLjpHdo9EGzHktm2LYP2",
  "key14": "3vW9nxHvhjjsfQny3ageoAB5fUQTV6aq6BDRFjgH9ieSq98TNbvFz77R2YxEQ34i5CYEMjSrkLJTE53utoigtYje",
  "key15": "qPggr4fgn61s5TuUixNWhNTAcrave8EwE7yKTdFJvnhUL78yShuEP1Ybwa1tsU3nRZWMwtpgGqo1r6Dd4hP7Nhx",
  "key16": "4bbXgc85cRi7ZkWwd7cLx6pheVfPKivqaZN4gm42pNrVusYT2Qdu4VE5wnC5TYcFqWL7kv1HRoDbq2bxhoHsowGw",
  "key17": "2gZ11xLDVmCRt68kV3Nbhxi6g8pXvBUnKwmdMZEC1QFoxCNSVTY1emrHijviC4NwAYpbFf2YDVBi22qJgs94wW5a",
  "key18": "2FYYqDsmEs2W5NVoyu7wpHmfWQB9ndpCuXk5GBxuansjZkE9P4CmkSJisPoGifApa6jmNKm4uHPC8ZH7Ha5EUaK7",
  "key19": "yxDeWuYq97Wuk4DFyWbDqNw4MhqysJh9T5ap5gTtikpMUE2oQK63f4P1vmcayCGJjuh8nsvZmC2JyNV8Gd3kqxA",
  "key20": "418kchLPc31Q3EgojEnUdSbQy83gswgUbmnw3NquBrQLUpNmLBLPPeoE78Xii3j8JaStt9YhvoMKzUbmZpbchC6u",
  "key21": "5gzRmGrG1J2BoWFUAZrUwVwo5w6eG31zPZ8bX8d9j4PdZBBGNTEML6CMF8jkxmtr7NQ54Eb5twQVGobCZbjYGVKg",
  "key22": "33Lf5yirq9aGHxuZG346QWJJxM2fpffhSyAnA4y6ehKEhN3x5uWH6FgXkpg6qDpED9MRYG1G7Nj63TbTeWfNwiZs",
  "key23": "PwhY4dUMAcugTCJRnirDeLmEikaHhwshFKPGzKaDodJHuhEyGxzNvAdAPoAA8qHMP9yh23iBgwR2ju79XiUfPzM",
  "key24": "3jjtJxPJxo1oyRADN8K64rrrpDjkFh6ebNBPbDHFmmbydrSBUhRvGcTMpJwzhrQxp4qwuPtJY69jSpnASzfJPokM",
  "key25": "PKfAFB5D7guMHnQFm5KdciJUwEMBFWE8avTqgee95GS3Q53tEEn9Njy2AVz55CVungUzCFeyeiCbdBzP3E1UMFu",
  "key26": "5BpfkTTEeq27vx3iyHkitc1S61VcPTx4Pce5MR3DEndZM3Gr2rYzyCFw65Xr5Htnx8ErPELz8QzU7z5xoEsedGBg",
  "key27": "2JfkaM3gN9NmivhBP59WtJ6gQ9ydZNDfP4JwBfJNdVspUUmS7nmh6fRD4fmCFir3yK6QuFywBWWxmRVsgU3zxrzi",
  "key28": "67Hr3gmBF9hRinAHudFUQ6Nt3NNxDXAu32oA826YvRt7RFTRoRFybnduUSe6NzHbACHPVf4jiGu7PuqZRH6jxM54",
  "key29": "5E3PpL16fMdCXBrCjaLGymKA1khQTZffmKUMWrPqxfqBEEgjHy4qA1jWkVrxjMHP98QjJQsJJmtZbbsS6dW8TRRy",
  "key30": "3cazwgtuk6XbmC5Ch734epYWATMrqTayGrWajbX5ZDVMnbKV5QPsJMYK32bKJdzQy6ixFgh29fxPweowdLQ7Bopd",
  "key31": "5D1iGRbKJtz5BMypfiiBY8PPFyVMNGdV3kqkrBZGFE1RWvrbpRhgPxYi4xZUSFWeMphf5mBUvmwSE1UbZRUvqn9t",
  "key32": "2PBWVzncUFLm3eGZ2r4ExQpPtMRPR1yC2X1k3xcEPXNV72CwmHUeWDRkZumqQMD4Kxv2oEJaRqGw8pXdhGkMrsQX",
  "key33": "2Z1bBmqCxT9Z9YmJNd8T2sTGKQJLqeAuRyt1HS9Kgk2g3r8EYZgTF7tmrN95CBkqXXGzcFAn4qGwto99HRDMTNZR",
  "key34": "2VoSSkmQhWiCYzaV2R67yPyxbfHF2mZKXuCsvgNRX93nGaN2mmAGUK1Lx84X6DkF7G7fiWhaWN48x8ufiKH8xuL",
  "key35": "4HnA35mMcD7X1znxz41i3bXFX8rcByr2w1p4BauFfNkSy6gdFURFytkr6f3sYbRXQoL3E2p9r8cpsPinKC2G9n9y",
  "key36": "2YwfPY4nGE9UYDMkg1kRAdD5MutvWjy1WLkSDg2gA7T7yWYvEifTpFYoa7bDve2Hx188dA6q6fGD6pn4cuXrXK5a",
  "key37": "5rKipTWSuqS3Yt7jUJ4Vc5YQWc7oQXkUA7iY4uXyYQ9yyR2j21aUTJ2wjpzqFjLLf1iGXhfgg2z3nWsYuwS7hUQe",
  "key38": "2jmBgEsub5fzLZxwzRBDPwn5BDi3NVQzeqPVuuT5pzQaGonc5FmNDoWRBoxNJ5fgX7148zkjBXYy2n1fZj9rrLT",
  "key39": "51B37rXpP7fn4D6gNau8RmRD9QryHi1abyozLf3T3hUtoUNkQzi31LjbXNKaiomKzfEiURxkD2DF5hv4Y7TC5muS",
  "key40": "ePebRRK4geRkmyDkqocM4rsn2ip4s4S4MARvpAbqoY9oHB9qnsptrgX7iMatkAGCVpMoVtsBn6ELeprSPTJ2snv",
  "key41": "4VxnWbUDmLuDuFKbiEcSoYwe4xCBn7ZByZrBub6atB4sHdaEeEVyHQcGTGa2zqe4ectgvLwHuiKqyiNqW78DNG3V",
  "key42": "2VAd1bphjndnqb9eZVHumgkPKX3a8gWhH39Jja4N6Apbf4xMUXfRDwqdmCdGFVz7SXdAEvmmhhsuZssHxwHEd27",
  "key43": "3BU2nSLGwQcqwW6iq5XsfdSUjii2ZjY9bBn9p8smPhiBHXkr8eeifY7if4yx2RTNPTSBzvVR2eXsGB8hNk9BV4in"
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
