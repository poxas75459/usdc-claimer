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
    "3uDtdLt98myJu8ZqsuarrzqF5VY2tx3DZVrcAzGMv1Y2jxkK3RjpouvPpo6keAdSespgsaxhKA9WATk5zFdyRMsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2p8YoYRjKJZUwp92MVxXeGLRZHVyS3TyEzNaxgQHKsmeckfeFaXZGvsTbej9Mvh7ZqZUFfggWzAaLsT2xAc7Yc",
  "key1": "49wyb6JkXNc9S7vrXtmUB8dhDjmqS3coYHyoU8xKNS4eoXmTYE9Zo38Z8ZmRqPT3ggPzfWsJdgR2HhQv3DZLNuC9",
  "key2": "3bf32nVfwZRmXwJdRzm6JeozAvbqHhSbCwn5H8F5eANQ1HhFrtKkr5pwJA7gW52Xga4Yqpxpi1CeS24ymQfjsZkf",
  "key3": "3LoYSHsKn26JMAForjXThMu7VshsWPvnahXg4uRAmPfBxXs8G2XyjY8be9NVoLsL9KLCBhznmZVbM83CVaVuaoAL",
  "key4": "4SL3EQ8qMDfYjyBzcbwoCEQxWE1Dx8cLDcnWC5aZ8io56g5PFuGDbyewi4aQMCqYkAwsRz5QmrnTRnkZunHHhKYe",
  "key5": "5RJxNsJ1Jx4g1uW2aEwwXa7p1HuncjB15bUJuFkoUzxARsnJLWkhe31FPKc7teK6EV1b7xZSHVJaSFPMvULcNbt9",
  "key6": "3Bvf95RMEpU3x8q91NEjpSpxFwomKe1wXf2kVEZnodoqLYtBkqL5gFMvXsytssnfNRqnT2hprNBM4ZXdhneeJjwd",
  "key7": "4WhrCeqTFAb5vvVVWNjep6HxRsjy8EgWvq37bKHUdqJfokMwjFtmaQDfRQSyAZhj9eqCoxqv76zpZnvGT99ZhEE9",
  "key8": "b21pYQwVjmE4UqkztUDbB89QyjP198917U3p7ejKfhGDRy9mvYFzezQyH6jgYCJbYz1iGZ9EsRSQFCRPjgjw795",
  "key9": "5C12bMXnA8DN8hfMUfsFMefzq2nqHJng5mfXvn4wmFJSXNvD6UAj7yxvbjAFpYPHK4EXVeiaTi5pC7x1cbgpF2d",
  "key10": "2G8oHiH7Chg2G6EfTP1Yi71DRYXzGDTNKGG5DZth6L4LVY8P5kGZCrrU3RobqoNrHfyGRjc8VuW4MHMdGEDMasQR",
  "key11": "Uwuq7Hr2akQ8FUiZdWtfheyZpBWreVDohXccXKms9Ra6JGVsaywpZd8J29MqaeM2kGPL1iDUy9PcwwjunjPiMgv",
  "key12": "4uuNrkJ1kd4QXf8P7wvEH2XxqqAusifc958KBYYUEJSmhJx52juQHNKQkmhfrzFC1jiV71N1Akiwi4T5k8AfzRHy",
  "key13": "2EFLVnyMHyFa98PDB4eJu6aMNQF8PzDu8scZtg4RyLbNFS5Nwvm1sMHXZ74FbPYJFKdRocFTvUKDpNuExb3aAzeb",
  "key14": "35hpiH9ost3E4onFvkEJxmjNmtyjTr6jUXivP8hdZ4Q5ceMh1h2XQrkkCXuNM14QQLYGWQ2HDiKQ7SieWENcypGK",
  "key15": "44ftGpTY9BfV9Uzx9HcbuGB3i2zMhDzLEBE2eeg94R244tu2LPBg1ptJWBPgmKKxntyJR7nKykz5iBnf51ky3yhz",
  "key16": "4bY6hsR99n7WbqZ8vCuDU3AafMxkn6jLys3PmHg6jNFGNqUyn6waRgz82ea4Gjk6v6B2LDJvHwfQkpSNNXgSgFHH",
  "key17": "2mzQgBywrSpa6oB49qpiPkuisomijEKu8TcWxS3qH2zaDaXav3YiLqVPzi2kR2ZeuY9MdvA8rwUzEDcJneatW2Na",
  "key18": "V9hC8YVgDrcEZm4uS4bpsgcwhDdcA99FKMA5mJu13c6JQ7MrH3Fg6tMUsUkJUfAZF7xFLQKAFwtjw32ZQzER9G9",
  "key19": "3gU67HXLjR3eD1EFgpewTx2NdVRSEwcpw1jfnaH5qBZDZWnAdrf3wG1rEdSn13veqfUnEU2gaw7LWZkm5iTsyeHM",
  "key20": "FjDJiR45rNkuZjPWRMrup3VwksvEPoUhC1aBLT5TgJWLjnz5Gr1fe84ZZT9QbNcdgvUsSqXWKr7m5CyAvx54HUv",
  "key21": "hpJzCYdVaKunogLZWS3f3kqCfkPBf8139tBCAGqDGpKzQbFCs8ptETN12e12vXqx73HhihZcySR2FP5hm7Ecx43",
  "key22": "42yzuMpwGJDdX3Eh16sWFjwF6ABHSiqQXdVMbeRTRyNUSfRHk4UbCrURFccDm1BQMgjCcPcEqVWRGxXZy6qocEij",
  "key23": "zAT2kiQNKGEj8Kf7DuQ4CuThzFs5gPk9Jm1cCCkfi5bunMzuY9xwoBP7buXG4M2ENoawpsd4SQtjP3MG3d8Gek9",
  "key24": "5qY2XCi8ajephQ96R32ESjyBzybFdqF2HLFT1EW3Ldf6xjh1vyvqsmPwyDr4XCi7xGcxkCJWQc6o11vxbG3ZA2HR",
  "key25": "2MfRiNHz6GrGNa64hbCPpzgC9zhR7MXtQeB7JhfaQrbgcPuEqUER4zEd9fjotsW1qCntJ2xzJ5mDTdizpENBzs7V",
  "key26": "3Y4DioVgYH9X5DPEEKtWg2BijJDY5ysExxY52ynhWpraAB8auLuVauFHkvgffNyxreMCTa5XWsBaAnvXkAxeEVBC",
  "key27": "mRu5yifMPbKzbpCxoGEU7NiwdbPhL1KqKH1o72Zpb1a7ktNVhac453VDcw1UvMuwoaQ6x9CNJgAqUdL9TdwcDMx",
  "key28": "42C9yAReHrzt6xtoS3b4fTGrKW9qpXGt2Z8MvrTzVY5jfTz7gMZaNVjiQWa9eC577CWARYVuitmzFQ8ZvRJiUf4U",
  "key29": "2hxZomA3Rh8un6pj5QmfBzpTQUScHWexzVHJmC9got6XKu53vimdjWJ283qJ2oF4XZqWVfQZjdcME4x4sx7wK1LE",
  "key30": "5F1bH41GPGRt7Fm5khjboY5x65sXFVm65VeXSVh7DdQHWYoYagPVbuoSsFPabbct4VgQhzeWZ2mpfJsYdTKDeDy7",
  "key31": "3rxdvpcHut9MAHU71HQKs1LXMk1i7Xmqqer4nb6TSqo3BdyikUzRURahAJr6bJLuZdUKhuSyTw2p5J1tn4wHR6vN",
  "key32": "2bTLo9kXhTiBsNVRe6PjYzd6349bcJGB3bMfszLGtiu45CfHrdSiQsDMtMvBhye2moLisBec2CxKhQjRjaejVoHS",
  "key33": "61GsRAmTzv6MmsyNJsWeyRJYJrgT6GqeywzBnndhvVD5SeMYViJusruBjAXKrrUzzoMgaqvJGgtayutdNN3XSERa"
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
