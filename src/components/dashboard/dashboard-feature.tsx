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
    "EV9Kh5vR45dUMVd5zV9Fso9uJCgAEaU3KbsphRL6Hv5pumMxqJkadA9GrCe2mFny6Kf7Vat4vMvfPt4FycCwvrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i7d1tTLddH6zaJcMdi28hnjdd85SXHuqidyg6HJ2aKeXaPzZz3UpGKbjqVautm4iTeEp5rfjwn55Z11cD9ssdT8",
  "key1": "5arHaSVkw3HLmgntwLVbvo4pm46AVjiQaqHpSvAYnuxc9YVc73nGiB9cU9czfbuNHcAUs5Ss4CfLjhGYCaTcY9j7",
  "key2": "3YqgZG3qno5xwu6PYsqc82Vvx9bz6BCWednTverkgLbqsSr9ZdVqssyDux7n9G1VAnCdHP9NgSESZCBgkWmH56Vb",
  "key3": "2ZixdRotWWMfF1airSNxvSbjX74pFf2o3kn1eKwQYok4UgqvMK7dH6zbdnVfYg1vNjYLXZVDdCYToabSjTTv1PPJ",
  "key4": "3hB2re9h8Sq3Hg47NXys8JwVx8Vo1y76XhkCTVb18HK8QvEVLtDYAthhyNuibupXxNyNPGB9azQQPe5Lth5WUKcu",
  "key5": "3YJUTe6WXmiZPxt6hWEjUnkrnpmib2weU6iCwGyfuPxeGcs5UeeCT2REjLJ1ujY6HmHy5TAzLE5Nn4RBgg5YQtom",
  "key6": "AAjTLaKrxUqkkeSyubusspchV6vrbp4LgGRXxJv4TTJQoC8kPx4Kba3xhiS1xHzCoxz2uFacum2F5fjzNCWJdw1",
  "key7": "2NaokX92zdQpb5kiFJ45qkCSvDXPo8UugDjfzZuNh4rWJD44VgBxJkVWs2JH8157AoNMsdpiVsGtn13hqM5GJqg4",
  "key8": "2GCJiDG4kP28kkLRy4pLyXvNi61RCWzhGq1NxhcrkK5LC5mR7qrYvKLCKqBYttpQ5Gdh6NmLqDp1mEq8SsEBHknn",
  "key9": "5SEh1vnbnfC9o3QHn5KvSofzKEJL23ZfFt8RntPEGoG4uqS43iTVZ1CaCgzd7LiSysFdw6y2PgAtUPNUUVwHDXqE",
  "key10": "y2KvhrGAEzwwhH44FasxJ1ePbUzzKdag1jmRUMFUt8ZvQEPD2LJdZ53Qm4fBM6DQVios2SFqDFgdnN8AKLFAvYn",
  "key11": "4i3HYUXB3tFA3Bc7n9j4o5kJBoy2HapkwFyNhjUF21wy7Dng7ZPg94D21SxA7uw7GUmYoCR79FdUEvzsr1RWx6Xo",
  "key12": "4DNtoqXpCUrMaXxLMJTKsoAV2jLA9empHZjJX4h2nK7bcGbMQXRjmiESGSdYsSsf4iM3VVHTAaG3if7qVbTMkDHH",
  "key13": "4vk3BPTo2quZwo9MMC8NeGz1PfshacjdC9G6TcsBXP6shxFJ4AZz6va9jJmYjDCzGUuNrCmwC8xsWBuW4z8kZpa7",
  "key14": "3VEiLPkXTYDfL6CqkSS9jShqcX6CB1PYgqQFiCdsxMPYuTGWoirQRd8vYF3kjFBhbLhRY6hu9fDU8fK1LrckDfci",
  "key15": "657WviQ3wMxijRLyaoP2kkWmL8BndrZpUYn34Pd8Pv795N7wzfxY4BfxkpURDM6SXgFUfo6qX4RvTbJkXSyGwhWi",
  "key16": "4sfcz6oCNMgZqb35WWAs5xzF5WDPTDBCcVZFzFGDTCST7gtUnYmycBuoD5MNVXuiSrh2EfsuCXNXjhYZemSKe8hP",
  "key17": "2U5e6U6S1HkAK1SYQKqsRc4JSjKH345JuGQH529rWudCSjFUad1Cn1oFFLRVcAohKmjiTzJjirvLLmSppUGaZSWU",
  "key18": "2fvZm6FXjjmxRLHVEbG72YDHWfL9FSUdmv4EpRCbv5fERHYEmBCAwKvYdKdjDWbtLDct8ECF11mMw269kp4Sretv",
  "key19": "2XDtt1xbJbPvYdQVg6F7FS1Xa4EXNmsWZqW8horfwdiGcC4EE6KgaBnNS2w5K8AdeyESSnEfC9wJkSAZE6Lwu8J6",
  "key20": "29BwWPkPL4ikg9J2XmBi7RkpUyJCgTEJ6FtKGx1vMDide2QNKHxoGs9vsyahHVqSNG1VbuuFv5GyJh6mjbsNxPkC",
  "key21": "3fKN33fJEh4c8PJg9DubNvBLEQuqQTbLE61Jfpwuhoax3TdHJgXMDDyy2hS7ihv8WX3NQqDRFhxEgKS46LdGhNuV",
  "key22": "3ccJXe4uwnqkNAYCdweKhB71uuZrkoUPZS6kJeSYtniaC5sWg4fSSGe561Qz2akcKioxXFrdyKgufSaQGUWzZxwN",
  "key23": "2nXDfoJ57bB5iw9ptspetwjkMs1UqrXPWofKbuNW6wSDWDgysDBGzwzHPasxMhLdpXwLjXVDPDxk8HntjPVNhJ3X",
  "key24": "24ivViFz87E9WLHwVkpdf4RMYN6n9FxRv7wQTud28xnrLzKf2JpgFWQbVFXwF65gaRcVY2Wd7fCgNFyrtbUdJy3X",
  "key25": "3xzk2y6ENsCAaeuCTV89UHvkanD2RBu3XxDnPcveuNmHWrco5v6pdyUNPYnmdt52q7pEkUMKppsPZQ8iCcj5K1hG",
  "key26": "4R3z6ZwzYsmLsiRRPMvdy6VsDWEUubR9jQ4KT4CjigiSXNo3jtRCooJwnzEUHnMH8NWJSXJN6Dtao6r7bJ722gAj",
  "key27": "52rND6EuwZg64GYUcXfkCHaxwmojbimLpiu8fhuNWqsQQZFD1QfyWv6R7BqbQVmjKrNxmE89wD2q5QN6byFixtbz",
  "key28": "57dKQmbUUqNeSNAf8oJUqFKeuCUo2KFKctk5sMmxSUNKpzSLBoVYkLjRY69bnEkk3tZTUN5dJJfaFmv4jFS8PGpj",
  "key29": "2zVDZM6xyDV6Fs9FMP7KWbZBdDzSusNVAHf4B4L4ZDh2Pu3zFC9zFshSFN4pnXmM9DmQNtuLpQwh7vWSahZtWuRk",
  "key30": "43rq5w6koc4n55ZvvrBkb6WmYm17g8Ad4Q14kgi5nWyMYx7VY3FwoLHuf6ij7KMQzSbGmaKGmqJC2EpHBN6vtKD7",
  "key31": "45kYYMQ2Ajo2mceC4xVetP2QyxSsouBwrT2MRZ6KddgePKXM9FaAZMB1a26L2jvUgfeTZ9x5tWkiu741B5QNBPPh",
  "key32": "29PQ6AZMaJLxubMd1FVLAQGCEnE5aE76TmhGAP2NvWeRmf1EaHfm1hL4SZaUXGd95vZ9odBcxUq6fb5CK1axMEPe",
  "key33": "4QGzPDZ6CbD426bso7x49Qm7y4av2gQ6xgm86imjuHeovouhZo9CkYrag4bRZrenVJdTN1h6sXZR5qzj6s4bVABu",
  "key34": "4hQmmUQNNabucN182NMTvB5zTeizTYyegA6HfJfPzDMSzChvwyshoR18xbKXdumcxxK5yKdhSzFb7zAEjACMG2J9",
  "key35": "4x25GngNxVdMJUhzwYxEfgndZU44UAvSTohne2RbSXKufpCFvBhG6oLAHPiFaDZiNgdHNA5s5nJCTsqNCEfN1xA5",
  "key36": "4RBJsitPdxwJxwWb54NbyNGF2M24PEy5XQU3cFvCnyaieHh8TxtNWgkPZjT97NNJT315V5x82kUjN5pRJjNCzSfa",
  "key37": "4n3obNiWz3zCa1mBVPM9N5axSmr8ywZNLSY1P1PcUvEjkYkNudD3mrbKEoRGhvkt9FfjrqPrBjYqK6FSZjV8voWU",
  "key38": "4AMzPVcooPghDGKD93x6DLksy4xykwkeyYrotrAKZaepAc1aLQWHGGhZuW3PJ1NAoJhwxmzXNUJi96tvJpiH2iYD"
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
