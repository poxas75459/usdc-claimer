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
    "4J5KuLSywUEQTKkcgxyj4uRvMS1AYGsgzfapSCowznW1uvGv6xWmqayKc3eUfxz9agQZSF13g8b4QebyUWo2sxkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQxTrHQ6d8Ertspkk9XM6hXqctq31hxSWoe5wqvLGPiCNYsoMRnuC7hqZz7XpqsAvN7in7C5L5H1j11CQkR9Jq6",
  "key1": "3DkTYHiAz5Dtdg7Y5KWAVyccXNvuk4EnGUik5r78zGhxYz3AA3RbN3zn36xN2RWoro1R5gKNbAfKFWTNwWXRHGf5",
  "key2": "4uVrG54qM3SCVVUzLjz8rVshNh1AGyHdFKjqErFedCjvBfzkSnqFcgDWa8hSt5QzeFpu4tSv5ExMSQkTyLhdHPPk",
  "key3": "5AnFnAqksocM6tPaiPvwhVe5UgCEReBas5yrZBQ4npi17iEQb9qxXdPHtUgjFrqVuXJ6Z3Z4xSQCuLed9tvVuFwM",
  "key4": "4TdKwiDQkyhmPb241Jkt1rPJe2Ae9stX4znyg81Pb3ECpaFKpJsxjVxhT8gYXZhJ6gRZ8gi8xXPQYJHXPtw2D1sM",
  "key5": "5nJHsHqia6jeKzDu6CTYsMo8veNx7puSSKjVW1oFows7uV1S3vZwFDUp5yWQHGxXWqXQQ5L6CKJekRVSwJFnQFfi",
  "key6": "61qwwWnqaEXy9JnsQcmwbUVX2SVdvqoRQbSQdZXeiE7kGYjKoi54xzsMWKi6o8QAwbDMgu6znF8ZCWvftvLYBND5",
  "key7": "GRMfPHdXAwcr12xtC9sne6RX1hMndF21C7FNZaDsg6ALCmNepdrgJskj4PUcC9y1oQuPJKojkL8giR4ZcskQLuw",
  "key8": "5eypfxHnaF8ZwgfFB1JVDs3mSbDMh2o7mEmpLbw6bPZxQKdeu8ymDLMibEqDXNG5Vz4RT7gaBCUvx8vd39NixEgc",
  "key9": "3RNgPJn9arzKQit5u9XyCRN2xyKnn91jwNXPe48BvMRRpiQ9GqANzAxchS7QSvY1k5dWR1z9gKao2Yb8incpY4vQ",
  "key10": "sEiVNu4GFy2amy5tw4hofkjQnCd965a9M4FL54swuRgGqPaqNHbRQmJtPYQ22sWuG7P1vbrkiQMpm2cFceckm89",
  "key11": "45LgUTU18z5XVw8wLmfic72q8zUKDHAUKCkyji1XdLCMpd9mvAHCuxyUuG7BR5FpqDA8C1gTW5CTrfeSJ3Wa27UA",
  "key12": "4R1uDu3dFNhqz8VW9KLBTzP5pkiopDkTgTXfaj2JCJPm7JDWpkoDNXnNBv4T2pMFn5Qyd2UmThhrV8hUyJLRb4jg",
  "key13": "3AuD1M9aoUpntWJrAxSjTAP8jC9MFU6rxusiyXgSgtwTxuoqyfBXq4uJikWmhg2tB5cfDTAA4NFWYsScMQazT8jB",
  "key14": "356XoTuNt91DB43VWLpmik5CkaKaEpQKxhS16nKK7tF6j4WPrdmY98hzHmrX5aLeh4nxy8H5p5vW8c9GqELSX5mA",
  "key15": "3vsbAcHoTwTBy736SEtLgLqnZo8FxHMY1odzrJq83mN3QsqHKJctoVFgXAHqEoAe8XrCQ1UUekyMqiHaigfGgh5o",
  "key16": "5xaHmr5guZCL4fcyfcFymFijYtSSxURwSWqUuSz5Z4ray6suGiDWz1XyfR5x4eEv61qYKGhJG8iaGbfRrAmReqL2",
  "key17": "2naRtkoc7H3oCXm8j2AKCGFRwdP8AhokgSpBz4vYtWG9ypyuPHVVjsuWwCZFg6j9Ws6FochnDtZxGrS8RRaBpHe8",
  "key18": "4FyjvHSyTQsEdQi6oqYH1f5AVGXG2yiU8ZuYz9EYUYSVqWwKQKHth9oLVqeK5f6gVbgba71mymnWCLvLtq6RwweS",
  "key19": "3efBkHcm9m8953njtp6vL3sBXgrWZbQL6CebyHABiP61Kffcecqy7suLrQ3A672kZWZMdrW4drggCg7dmRJGLuhh",
  "key20": "4WtoFhcWMk5zPoEmHKj4ToxsStdq1eyVSQqTjTyyZdpRQDVv7kLCnZhjTGV8tRnU7WE4YS9h7ZmaBGYTFshNR2ve",
  "key21": "nfoH9DViS7HESKoCb6AG9eh8GovP2yiKKh9h6rcrkj12fg1RiMyctTGUdniahrq61MJuBrA9VwSkt5MisVi9JYY",
  "key22": "iC4TQhqpr6EUVSm8MBi3SmkSBk1CtbzEz9cxqPCaNkoG7Pd92sgoWEdXL3jAMc4jxht4udzJharAjzW4FVZrKFw",
  "key23": "JCBMiFUJvcMxsdt6LRw14nMbARYZ7SSQn3kRhkAu38P9HcZBeeBGD5F7Hzw9EuLugMth5CpXx1Z5X9Xww4wzGeW",
  "key24": "6oNfHBKUUBuR1W1KjeNq6vFDiFJK56fry8daKBw6dutdvEP7YPHH8vaJ8qZi2txFU1We4wATy1DQyUtW6Ca61V9",
  "key25": "38xyAvHswZor97MAANVSCzgM7TmucG6Lw6EKmVbZFVd7kY1AMQ4gu89FNuj6R6NQGJf1KgUcLoUgSzgn1gwBjjGL",
  "key26": "2t3HCXvLuxTu9i8akxQxL7CadZRPPJ4mwKbeKaHvWokr6sAdrGHRedTtiKSDQ6nZ6PWq59QUSCA7vmyqBbKvffWZ",
  "key27": "JbBNv5SkcTxoKZxqFGkhpkKdM1cyKZYXXPs6hwdFBWEKxXRNt2CCJ1J98BAAtd8xa5yyjabi6AiG3XMdf3rRSrg",
  "key28": "4NCZ6nKcivmQu3FpfAK2foXPowQnDLd3NKHmQ9Vx5N7LpxgT49nHeE96Y64r1uePz6qRLBTAjxcNvmrqLCdFvVL",
  "key29": "34pe2K9QAkujgxG25y55DYV5yZA3ukquSYjuCs9x4nUXHk9e2SmTAH3Y4eTXzvanibmyL8JgDUfZqSthk2ZNVLzT",
  "key30": "61nwaKvYinmidy8Dzt2kZ83x93Vqnqv4E8RzfbRZX58wujQyKaYHmVS9NrbXwBNU15CsammfYPmXJ1eWf7AFcSw3",
  "key31": "4fV4Y9uuhs1sXJwTRsMjL8z6Kwx7J15M1prwjTJZf98r2kpxzS9trDzBSSG8w6cFzpd4DnEgiayNnYo533yePTVA",
  "key32": "5oaLKkVc7fRLajtRTz65dWHMnwx6W3pzPs4brJaRednZowmX3KqMbqZ4v5Zp2goBa7ix8yTV4TZUejTUDyvqr9q1",
  "key33": "59H8dRturJEd8vwSzECZUDwHbs2NZ5xTFT3ZU4sdiqco5iD5VWJdLpK17aWHzAJBzLhS9XDk38xhF78CyumGbQM1",
  "key34": "61LfRtHLFkPdL4Eq7ipNBx1n2xhq3NHPUu4sEP92hTYW4ixwX9BvgsFkoMLaQjoKxut8JGShvVpJhfkg937avupr",
  "key35": "3L8yKx9zA1rx6Fi8VHZ1AWMCJaFhTkUWs5ZcLBtDjvGNFW6W4ZFn8HyuiocjyDDPBYMKMX4jCWLNqLE988fVCKwe",
  "key36": "3HXhNWB73v7VLdZ4xq58TE9FxTdBh22jNSmYGdgNG9L1VZixCTEuzmfQ1PRqtJQomDoDRxHZmUit3fwkNfkSGBU1",
  "key37": "5tWsviX7Gdz6sRMEGPJ8ER2tatSyAjE2i5Joaaf1W78JzvAxjK53p4CRuw13Fw58BmzXG2XwLbYweHhovfkvtnBK",
  "key38": "X1idMd2AaDiqt8DgQwA8fa5NU2HX3NTxHRfzdXyucj4Bvh6VyUJyYKpQqpPG3Ag7Ga1MjTntwfUaeKeaacTjpZ7",
  "key39": "6UojRy5fzscEnAJPfrmTDWtF6gNM7CZGmtGBNXEc8iQJEKMxkpNGcmxiH5iCNar2uq9nprPC2emmBaA7diJXqC5",
  "key40": "5DkWYPL4rCqE8Z29WXX3AJCdcotM1eziNn3qWSnUQXTvpjw8Uc2fzYFnoYvtnHB9biyCHae5rt2ZnHJUQicizT8J"
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
