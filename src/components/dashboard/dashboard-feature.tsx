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
    "NgKnpjSfdJ2SNZmMQFoScGe8c4BZWw6nqwYp25HyFgmPAZQgk9U1TAua1cHsEcpke3z7BfxWCQjDseuTLwArvgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1SeSKYj5LmqBgGgqGEHPdiYQ79gFhAFvnggmLvRpdsWbo5aY4CTTKMCXKZiDZ2zJMeuSXDskG4vzDgPgAmVVXja",
  "key1": "5X7vesQ91aqKNGcYAyFj6fzdwFqQmx49H85iNk3Xw7ycGybEZYs9XZMRPCU4sDwuw5Uvaz15v1fCvM94HnyiUPgZ",
  "key2": "3kckWjQYEDbCsGXa4nP13PJFsbZyMAq7ysbXota9Ac9hm2aczRgsHp4zymqZ1314ePnf2JNwyn6FjsdrcvvQ2Unf",
  "key3": "4nU2HRYu7brbLsN5yP2QUJbsXPFQ7hR6cDrRBCPNoKoB2YTNbT6mpvwPTfKDWya3E2LP1pGtapP9swCkLQTcVvWM",
  "key4": "2gUKxcgT1PjqkjgsmjFyVD8ictDK6dPqNJgkWEQSVT49vYbeP85i2WRWxPN7ALhq6nHdHE3RCVwnrQochF93Cx85",
  "key5": "2QJVYcLWoyMbvVsnNu4X2dhbiVF9n6vhwc3ufrNQ512gjFDV7P8JWWgTs5hbeksw5ttiqhBggGMsDGFb7JAGYLF5",
  "key6": "65x5eWcrGtc77GBeD1nwTdBaCfK64CVhdZXsfFJqLb2ExCuBG4dcpKkmZt3b9KfGGQMrdt6qxp2CEm9PRd4rKiW4",
  "key7": "2SzghwjLKv6euhDak5iMXcasKenKEKTbNVQeng9STYaa9buWqL1hiJXqJr27wfCjMFr8ek5DHUxj2giG2oZxiT4R",
  "key8": "34L5oXrocX8tQx5UYeQYLCFKZMNag5jtTQafCZVSE4xuyKMdoLrQocnQ1bd9qBtLSo9qP46BKZ9vm85Rb4RhXrsJ",
  "key9": "4cb5zQ7GihJeUM2wvWhwZBYNXTPdY6nTLNp7TyK6kWqtbw1VjiV81n4BFYWVbgdgiKDXMR7ZKDYGm4nnasE6gSRm",
  "key10": "211UL6JsPXrfvo6PUUGEKhJGLHgr9MGzvs8ZzCQsPkSt8LLqrVQsHgFXZKEymfewB2ZLAycCt52bZUaLmCEPapvH",
  "key11": "pEDHyawjMak5ybPVtKVizPmvuDJSnJRqciv3TNTy5JfgeCkG9ykHLDnhp6EjaER2JmoA3YWxUfN93fatHjypKoz",
  "key12": "prkskLxottyGu7FPsM9LxhxgnSVdvauZL2bk3JsRnNJjHgjmu4qreZDkG9bJDKjDVY6J8DT7nuQ8EgPjMDCRE9T",
  "key13": "3QUMHhevqXvka1nw9Lj9EAkWYmHdGd9q8MW1T5m3J9iwDH2AyKSAWvrCctyrJ8jM4kyyLj7DYEW3Bxitkx64bKj1",
  "key14": "2QzdCnJEoRs8G3AY46uCNkTrvNNcMVWAJfZkAD8yPw2iuU1mHc5G5YPwW3uJPsaP2mekG2mUWtQ9t7Ze7RQaASwZ",
  "key15": "36rjFLpTKMK8zZZ4FCWz7AbcSHJsLrvaCoeYNfdFGGzVZNHs6aigPb3PbkdoUimkktYUiwaqoHR6p7ucxGydyqWC",
  "key16": "4C4TvkkrK9QJffZupUDT7zWfAApAVt7wHqojjXih7Eme1NSLfGtn4obUHUPeSXT1rPN46H3xmoLRTuKHV384dfJC",
  "key17": "D5ycxf8x5FBPbfBbmgqmTudAiyoxcHRmfZAdwrrSZzCsiMAR28ksMSoVqTVqageaYpJHe96Na27SA6yFwsZsY6j",
  "key18": "2C29CFPAVn5ZEuwwWwhdmGtLrwYxYaM8zQ6gQvsXpd4dk1J4AoMBH2hpbeAF5rir3XbHMUPKjMnfSvHyo6AC3iKf",
  "key19": "3kbC5UAe4gufeUqkfTE82qUvrN4mm6mNCr5kiaAo8DgobuTXsnhQakDv28b2DVvC6fFDSeeYxta6GLZDTB715Zky",
  "key20": "5E3MWqvcpwNKMonsZaSgVuVgT4wBd55xAD7JkWyDKRyyqLCFyt3JEuRiuHnMzTMCawVNZa9Vfg9KpejDhEtL4DEH",
  "key21": "5kjippuFeg4MuroK9FH5PhPGm3V3JHdV5MtKtot5Jmui7mHxcNRsN26UhxWY2LRWpqQnR1QFiTpUafjhNxwrbd3f",
  "key22": "v52M57TKmk3GP7FEZFnWthmgFeQ1fnNtubkVqypJBxpAh5Gtu3zq4WYqMNRjZVcbEqHJuPWiXmrVEqEbWfLQPgd",
  "key23": "2Cr9zZNKriyydPZL9mFPKNbhFyWZNzcuxUaL6s36yE4JFtxthJPBNeKLURfAaNyeMS8ZrSEUvyju23Y8Xu2ziZ8m",
  "key24": "5BuzAwkLLQPCDNPJezUKisGHr5hpzycZmCfFirf7KwTBWtsLxSRrZLCHunuuuUpcfcxGbZ8Wiu781q1h5w98FRPV",
  "key25": "51kNCtExAbkDBK6ihtRPh8kK6H6swhFoeG17nMMrMuGFwDahqhPXWQVVZ1eoDtTG228jpA9yU68Ge81NSRCRdhou",
  "key26": "4CMuwYSu1pgpoqcWEypPfL1Bh6nvEPKyuqH7c7HjqEcf8CstS9iBVXAVng2Dd5f5utzsSkbNWhqbU53epuaspL5G",
  "key27": "drJeo7HqtDCrLNg5zVnVcXaWDeAeadaMN8SD12cCNYzoCnj4DrjJR4sPbofXAYHDp6DYMXdSdwyXxu435YWrqbW",
  "key28": "26jaoJYxtyVF6wqREYR8gyg9Zjo65QeKXdxyRa5mEv1pDiCWDSyfisxx3vyDb9pSLtMHd3U7HE9dNimNEFG1fPGN",
  "key29": "4uVjfG8ZBzPfwaj4t8EJ58PaGykCv88WBmqZhHspkZ57oQA9xuQmBnJZ58VxqWnfFyFyKJJWNjYpkVr5trGDnxmH",
  "key30": "3sngckUDDpZXQ2U9tsTfehm1dXgtcrwn4FZqxAWoJnctjapQRupDpxpKSetZSDvYPFL61NiCNhSkA3wUzXycDXgw",
  "key31": "4aBJfUB3uSFZi9Hgaxe5wEpFu8QhLwEDY6MX8qLxVqPm7eBNQWr4pwAU2pdMvsCzXGvez1w937sr4ecf4cuaVgEW",
  "key32": "3qk1n96aP6hf9NxzPwMwSSgFhY9e6yDBZJxVoNZooDQJ2WTTuCywQN9LXmwEzGrLcnYjcqzuK1TzMLReuVcwpe7R",
  "key33": "33ShaYYM3ru1pDvgX17LyCQDPySzd1Vb1ryYWSQmAtRYcYCds6EbVVU7A4qB11hjxRQdcGgwqDiAaRoqu2LZs2c5",
  "key34": "4D3exv8TeesoYGu8tEYtVZ8bcMsBVK9Py5K6XaHYmfT7UmkUVw85qqjc8bBUMv7E27KUa2FeetveYyCRcsqKP29K",
  "key35": "3Es9G16YNkx2MQt7R6Wzv93qdczKXK5n1H9yL8AZCauqNu3btooxR637JiRnx6mwRUbsb6XJ9EvbA2ZZmx6Tis78",
  "key36": "5ofLJgZopDKH8oCiGbU5DyF9oXWuq5nHEyFSvjJXv43489vpXKrL19pA5bno8Nz361Q4hdq3PVAdtpTA8uEpxCsv",
  "key37": "2aKxdb7DBVgBWCc1XuGkHasMco8RiFrrXyKapACEbCwVShwgxEAAGzd4du3T2BLAqDmbZrZTQApTbgpyCwmNgWVD",
  "key38": "5QUSjcXmywdprEbvmy6kAf77c9fHShn1VznqCu2KFKVDBhiJ2V64H53puPjM1cHNm1rE3vVF8yMoAumkE3dJcbkq",
  "key39": "2QpR93RC7VwjpvL7JiLjhVCPhjjfqmBt8YV4U3cE99FHzBDojbJehMrxd4Nw2PQTtHz8JmtkRHn5KyPjXExbVtWu",
  "key40": "5kqJQvATV7ddk2dhutcXAUJVu3pBLgZDnFsDdFLQbBYyRXNFQd8qhvC7N1hhqUeDUoJa3jxVC3rNTqbSwSSs93KT",
  "key41": "xK6gDscu9cWjNr5CaChjZxAT8HTtFMskop4Wqa5D4V4zY9sAqDnA21JFMJMSwqV5UVH12haEDoaBZ9R6MPKKASs",
  "key42": "365XYaKtSi2Fv9enjBkLxW9x1YbSouSaCaSyj3TWdNYAvNkPnPvAaHsEQyX9VtH4xvXBAExncTPWZNXuFMET7Fta",
  "key43": "3J3ZPKK9BY8aGNQUhwszniqPsmdXUrsAQv3j8vBTgHtWxRjAZMe34Mc6UmZ3zsbBGoxvEkQbuKsfuA94CBMEBptf",
  "key44": "5gt6DbJoxFKfPP9xnfuiTPR5dMR7StANqRF2XHpkQZ6qro8R5J1SDgP13rnqx1AC3fNvrMDEjX1rfQfBbMYwf8TB",
  "key45": "4QPRA5EyZZNTNLoe5JfTajjzn1SjMZkCfgVuxvMJJ1NBN6JnypvrBFEbc4wejWo6z3ueMZyCiJLmTCx4mJvhauu1",
  "key46": "3A2abTxQy6YgJDjiZrQ1pT3fBZ2ZNnTRsewzwt3pm2WwnPiBKSK9cqXmKvQ9hjQJ7DKLkuVnHVQpmZ44cYERE7Go",
  "key47": "3cqLcFNGycz6SVAzzoUmDePWAkdrGW4ZAum2Gt8pPz2bzbCDCTX1pD8svzycKBK8nSFCX1WqUNCDsT8tqqtrSqJu",
  "key48": "3fN3EW9yNbGnRoUU28cE1cyuzZDpAvbsgh5TDPL4L9mRdxzAXYQFyc5rbJU8ZaC3PMyCbXGkNDgUwj6CfSh2sfFx",
  "key49": "2cWGhM1VteahVxpMHArCKtGKDPPvxgRPizBcSgPt2tPtmxFSKKjvz92XCP1NLpeQkv1HDRDNYccJNDjpAAwvhzV7"
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
