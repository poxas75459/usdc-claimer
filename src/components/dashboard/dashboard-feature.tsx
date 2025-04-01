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
    "3Rd5EghsuWibC9hNzh37VcbpxjDYhkmrfLD8yHybuQ6JiKbCLFsXMu66EeWgjnzSai87RN5xQNaETBe6VaFBYGiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gEokQ56spyVoUGwas1mWEr5TamH1KKU7JtfzMUZA8dwBXkskmNzrjNymi2Deut21zPFpTMVVuE3ywExtsVQj853",
  "key1": "34UyqXMdHPJvuYMfZYFnApEud8qZPfzK61Yy9zpALbQNLGCtq32pY2ty5SKLx962zUpMm7yNpg6xQ4Sz5KQcE2Np",
  "key2": "39tjNC3Nix71ow4JLzPsELD3p2ayLqqMj1TcKeA3UTWB1SdLe24S3jGeiTfPn2nrtKzsbEP8BKyWZE6i43BGQNPk",
  "key3": "4nyu7kEQ8viGGXUfsmNqCXuMByPTtCKkwVVnAia9SP4ohHWvCcRwp6bgMytB52Yo1dzj973wRRDfnxWThsre1egE",
  "key4": "5ZRncT43faiFJqF4G3bzQRXZssyCYVTP7o1P2LhCMp4mmzjkAKr8u2PoNjnopDELRPVSPjuWAbwQuoCUy48fN6a6",
  "key5": "5Gh2EqpeFdKwYotDez4cZmcG37cQaAXFibpSaeqjP1ugQJwnvWCQzjceNic8jrQedmQNhX9nnGvYE3c8ef3s2WYY",
  "key6": "56oQ9X6PohevDvsy25XQSzqBE3kx4b9KZb4it3Ad6bG29yM63HhXEMegDMEF1YMi7EjHVRMuh2BDiUcs91TrX2RK",
  "key7": "UNQBp1Vj5AkAfGyRfmFbx2X9GXTUNM8g4zP3z3uwfWr8VratYAB3dDUVEqFdHKQXu7Hj5VoXPJPVtU5ShhkoPGv",
  "key8": "gEEts7ryss3W7Lk8aYKYoVZzym5Ni9tMKuUVHpQ2K12mL1XbHYhQGnWtdqyAJT4k4JZr5RJZ9Nxt5wJszB84Cik",
  "key9": "2JivNWS2pyBK4NcbBJsaazjV9CW2yRxPaFJJe8BfHqo952L5qjPQzPwfqbd9khhvbUcYxY7PAkgycxy4aeWaPHGn",
  "key10": "3JoPGbR3DC2JwXBssR8UboBFDga4pkSqaw218ux8B4Q6nBz8tmyWnkAB6hdFfbKke2aR3SXybdEVTxxiKw7Nkd49",
  "key11": "Ef789BySDBJi5cJbmmK5kswBZHT6JzhSKSgDXJR1StUxgPEU8JHWTEC9cCjc4NUJ63J1UANdw3wPCuWnxktdoV3",
  "key12": "4MJbJGvmuTKZyFoXQXcfAtwErmMJjMEKdwmoFtKjVFuh9xDFZcrrFnwSm6gmLZpoQuJjz8ArTwkKyphnS4nfpJg9",
  "key13": "5ahV2Hp7cUKDxGaKeGWZJHxoL5FwergAdz8suTNkPYtuor73so5VKbfUDkzrW18kWMGLKgFmqSBe1M3XejgGcTuW",
  "key14": "4b4rFJvgXKTxmuMLQeHc2hf7Jhd1f2PkrwcGYFkPrzTr5wESNTajgP9DPN2UoXj5mM97BPGjJMneJnZ8R5uNZS7V",
  "key15": "FNe98bQ4rNJKmDSKuDJEHDf2tbZnXd5MBDxGQRhc4DNp4DaSYbPs6H7qya9MQSyCw2vejrNMjX72mCdTVL9AYQj",
  "key16": "5p7cvzernSfWdKH1MGLqnTEHMtqHqbow2vUDY3VzpWJvkujmmQu3hW8tkuj16dvsDQya3aF5kBuD33XnRcGV8nR7",
  "key17": "5QuqxAiKJQCnDEwgkj7JMKwoGYuPWTkHhiBFYCB7K7vvKM8sH2Ae2NneqF8x8Sa1W6GDvivvvP2Yba6s6NejYHtf",
  "key18": "5mHtui9A9EWVmUJqsVNSt85N6YzTKd1eZT754gZagtqCfY6gyXfK5bH9fD8MRTim9ycJgBrbdTnZYWexH8Wx3YkC",
  "key19": "2j8SftQheKxWoCuHVJagpnY45cWERwpT1EsTPvKB6kryt1hzZNHNA5SddxsmE1x419PWo151jjhYDCbVN2F24oDn",
  "key20": "43nHFm32PNUQ56LWYVLE9ANe8A4og5xyDeT356jbtNEuYG6XCHCG1EKJNs52k6wTDD1XEYgh7kAiFTpNxag5Dx4m",
  "key21": "4AYXRwqAcrdSCCco4bu4hnBUnmQkU7FCeH6Prw7DkwKVP4ACGr29kyicqTyagfMmd13ybPiAE963cQJkcu6PW3zy",
  "key22": "2NC3NeMi76CiQk2W3xAJoALUWcURw1ZazJned5X7uSxbEL7XUHCQw3svoumqgxnmhHmQVc8CCrg4JDpSMvAHdgon",
  "key23": "4tiqrXWHZjgWGqzQSU7sXRBpUP5Qai5YA9SA1FZaD4RnbxN5aQW6yJstHa2EZw1Fcpq2fKwJJkDjzdpvXKPLSqWt",
  "key24": "N1EhKTdQWYx5J7FptwCzXbu11L3uaP1Vbup8d9eXXesBGeqhGxWZbaHoNggygzQSQU8HJpPSMDVTRCXjbTFK8av",
  "key25": "5yfn9ZZMBuiCydSHWsgiPULyCqqt7D5B3b3MCQGx1eyrUfDWBqdntaRVYN8dHsGJEmWxjLgxWmCgKLF9Ju2r2swS",
  "key26": "3tfdB1VqUrRXh6RjsETmNYyFT6SUDuYjUPVjRYo9hB3dbMPwgXNQhPZEhBYdeb1ge7Y5RYskn52dxErv9fLwd2NG",
  "key27": "4tkVcNNSfZVszGCgojzRKkBxprRvZPHaYH4ppua3347EfcMJAX5S9mM8kUdW3xB4vL9GkC7n8yweYmZoqJ536AwT",
  "key28": "4rbDAMiTJaWEXtUffpJ7r6LFHGSTWJVYdALyKSU7YWqi3jXiDupk98KWUwrPdVfKEmsmvfTn7ATknstDgDFKaXXs",
  "key29": "5cww22zqb4VixAdokTcjLjLakiQBYeVqzqKDvxubPZnKhWgp4mhf1dtFesFtgQp2a2fE7fWihamyogRqzohJzCcx",
  "key30": "3fjqGqP53YBymGp8SehA6mJbjqFn7sigGppH31h8F5rLpAQgeR5XCyy6wCn3S4MwVtEcsMaM9T6WjM6fNS9STTTQ",
  "key31": "vHq53WV1okFRFZF9naURtrXBempFgkx3kjgQrUiHqsFxpUyGMzHt92V95gGRA6RmXLq4j2NLJewZq5FUzWRHPjD",
  "key32": "2qxAvQkzAC8cWS8b3WRkxeAoCq6Qd6vQ8DQVEJSivXyJkUSdoqdmg5BXnbBLCVbYsnbY2ESvpZ3cwxr5TJwu99oS",
  "key33": "3oaEVcoqZecAwUNotPEvXHrUhXpXGvHzGPAbhWSDiaTqjes9T464h6CAZsgupu9VT7FWjLtMF7GABoSz1fZjZnSA",
  "key34": "5Tvgn3zxpM5gDNu1s1kurnGoCgACxjXAw673YSjoA326y1VCoMRzpQQ4YDTCgWL7LyFzLXYSD9PUgX3UwmuhpD1r",
  "key35": "27AXyx2ULEaJgHAGTY1sw5XBLBFJ4wxXHbxsNW1ZLWDpvqt7Td5Pjj66u86xrxwE3oFMTB3sxMVA7YUQzrJkCgSK",
  "key36": "4aigNeoNPiBJV9VbCasPUHfXHUYd6THhrjn3DXpfpTQqkCUGUqPEg5R8ABwSSZcaEEkKvQs9qGgrTjtykMFU3ZUw",
  "key37": "5R1iyizzvbTjcZVSWwhBssXUGiGgx7QbdAo7sEtvms4FiMndXJHiVpm6EErDQdaDu6K99RvFnKdC1qSVbizeLxCc",
  "key38": "22NDaVA7tijhqDzWZNJCGr8KW5Dd22NereGDob6RhFwTRAAdpJDaaH6hNMyP7Thn2KSJfWWGAc6BEtAvyoufoii2",
  "key39": "5mDy9dZmDedaqbvjx8eS8PLoHorFbsTTYzcnXNBwpBSNCXM2X3LGeagu5LB83ukdivtebxhoCcuSddibWBrwsvQu"
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
