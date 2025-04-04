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
    "61GTWCSN6SK5DcqfP7XPzVLgam22gUxpYrTNC4V8oAkkfenjJSQqaQKqoNQAV82Vp3hBmvChS4dA6WUgZvp85scT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g6Nuu4xKJHQpPMERS8eSdLTAynroLm6Jd1KjKzREV84gyEXAmmE1YNbE1Mgzweq5ghhYbvhsEkDfHhMxJzZkZZ5",
  "key1": "zkA6iXsmzX5DGjZwdtVVZWj49nWiJwkoqan84wYFMfrgXwJavo5grKLEV8EMZ8bZqC5JZiuVvjKSBWthT9L5Fey",
  "key2": "oC7ALqJAcypacvXhK4KF5Q4sfZ8kRcCvfW2yrBgNNVVU76DL7MuEDfTdZwKQkkDWiXZxejTD1AyMBeVZs8rjTCP",
  "key3": "5FRLf2hGUh7LW8u1HR9qcr99E8QRR5CXx9SMucFKMZPpKGmmNV2pXC6QYrFnwhMF87LTY2gsBse8n99A8WiB7bTr",
  "key4": "47WT1j2xCBHCzzPUcznFMNgy7AWhuvHBZamDzoh9SwYMUGSZswwPJpP164fC15z3xbPkS9gpWtHh9HexoVBdZR7k",
  "key5": "5VdiP9epNjq2atrU7UDmGsnotexx9gxuyMyBL3Dp6c6oyaYLaT9WuzvZ37s1KFG3fSvJDBgBEyKGEXg86JKjB4xP",
  "key6": "5QhNVD6a3FtKQzTZ4s4v4HGrzw9MkMpL9YH4vUpuEjL2UNj8Xd4d7iwrgfUKPDCAPENxfcFmwkKPL79eetjWtcRJ",
  "key7": "xVUMswv7c1PX9UyUkf9WndNe9cBC5dP9psCL9ZMN9jUJGTeb2d7uE1mSm6tfZ7KnMXKTZowwyepHCh2vBq3MEax",
  "key8": "4veApQBAHSr5tHTugLnJxLXCHcJeoaCvUmowkhKnjhfJNuWJKJ54iAEUAU9HYWUeLqYuYdiarXjzNnJzLK7PkSbB",
  "key9": "96Gr8x1rfEnab1C6iQCdqGreypULKgkd9CDbjwzj8NtmqF626sVrfNaoU6iee6RpdgaTwrqJVa3GTLiaSPG49Hn",
  "key10": "4L8oZaFMscEsBdMAdPhoHSLCiLA6ct8KvqrxyuNTtb98RqQ5o3qv6M17xyGLSFZ8dPSoehRWumxnKsCF1pXJHHJ5",
  "key11": "5BeoZBzVZkuPmybVpTKrcEuAZwax1HRuNBdgMYo3tEbBDWM8yUM1Da4rRKtyzfm5hEgn2AFVy5X5Eyta6V9rLToS",
  "key12": "3JuNYK1qCo8xS4aGGn61ioNaQtfKu997mrpmsAFFoSX9T3yRTeXwLcsimbH7CyQVLkYP5JbfGCpyHqS6pjFEueQw",
  "key13": "3i9xiG4QmUGN7vMLaZTnRNoMF9NqjJj7Wb8FiA1T6MKVF5zuUDoXm64oBbHyvg3ET1ZY2udN99d7ijTGjotpbHi3",
  "key14": "5XLtUW3FLzvRweg75TEqDR3JpEJhRatznh1khp36JAAdpggMs5XwckSrcgvR9PNttr3LFXsMnAjYAp5ga7qYe8zz",
  "key15": "EToT8m9sAaEkj6hw5n9i7UvuuPaWLaAXh8Rw2pGdLDcZBy7G4zHYZqLPaven4FoKbEZRyebfPEhZTCLEoHPMSi6",
  "key16": "2Yc6cEzXcwEL2G353Dcv74XtyJJcGqdvYf8B7PdphVBw7REYVWQe4bgptqHDmReZGTpBqSzV9Edes3hwondfoCAm",
  "key17": "4H3BPMwyxn6NYYspbc832NSaN51k5ooyHE7FuVKJuDvaH3SsM2Z9tA2RF2xT3rAZtiCaNTrNxYeWWpcgofi9HNzX",
  "key18": "4uPPXLFMYM4X7oQPuGKBzunjUSDMi4HxWfiEMCWd85DXroEMDKJbSee7UPA12u1dADJb6VRm5jiTJFvT577o96mA",
  "key19": "66w82nD9285kTefZ8LpsvKZDKBpBSs2DLNYrdd8Qmerxh47NRrkEYNHUanvyo58Y9LMZH4UyHdvEYfKcANS66zdz",
  "key20": "4SrQsCYuBWWec9ypyTk5BKR5vFYcxziKk17q2yAXaheMb4CGZeo5hscpAuwn5Dat9kwZY3hSAp5J9G1L6SipGWE1",
  "key21": "3BtLwsy6zf8HRPpcSt5WFmq7jwk15FcPrQGG8d5FJeAtvr5eoUYmVx9zbs6jfE8jnDqqBP22wHzuzMtcrcmBm2Dv",
  "key22": "32mCD4Xav26CumBo5mxX78L5LdF1E2AcziTHyRcNZWKSKpxrFFhRS1V66NwyVXymY79gQxxWwrwj6pihPYu1fLJ3",
  "key23": "3DP7oCSgkLo2PKcCZ38nyH81D193AyAPRXp25fUvPw7HfcBue112u3vSSsAngsEYePN3C9UkFE1zLrfF3WFRg7xB",
  "key24": "4hng5iRHFCT6ZdgUxgtPTbpM6dgu93QAp8jBggETxeZTu2bFCZzCUSDX5thhp2NAGiDh46uykRKNcPa8qWS1Cyuc",
  "key25": "2Eas7Luxne5XkhzZoxZgDfTsKbeeqrhg9qV1tYYVpkNR1JWffS48oqcP8Qi8dG5hwBjzY1M8r7iwNWMeeoNxUefT",
  "key26": "UQsCJd7PwZs4vPo4vaVGwceH8P1tNtL1hUMxrHUTdY4GZBGZ9MwJ9ecjqcr2TEitShM6fgNnR99ESLqU6kbSCNu",
  "key27": "4oMauHmP5q9pk4gnak4EYUP5YHEAgzpogqTGLDy1HGqkE5rF2HGTnqKdZHXKRL9uJ3EXWMaQS6KuybfLTA529hM7",
  "key28": "3JGxMQCYS8Snf57uHhprxKUoSbyBwpBNKLqGXaJJPeGva7rAWmwzqNNCxB1Nm9Y2VixRkFKJ6WGrUvTbE39fpSUK",
  "key29": "5YFeMKL18CZwexXwtqWirhY6nzpL8vApDtoTHpL8XukBkotuPUzonsFGgCnPVHiiUj7crgx1MhW1sUS2ggvPgTY2",
  "key30": "5D6sdfzMCBPxbesxzs3BRbbnGwbHqAp4CXd4esfq8bNsKFZ3SCbQniCv3NbjtsSMwbKw4kWcniYoJpCytiHT7pjU",
  "key31": "5EsNQmxocqM6jbCxFtCAjxhp2HMoxcv681bY714nPiu89L4ErbhjMc7MXQa2W5KqVaoVbfeb1wcxhoJz8X9FFBtC",
  "key32": "5Z8QjsSimMXhpqKdHDqQ9WMFqFBLhtCYfffZ4NejCVd7YeHhKDEFvGiiR28PyTb88AaKhPoobtEoYkHURm1FXs2g",
  "key33": "45Jankqk2aWFb8dNaRAJmuv82eh6iWxoGBgG84WWPs1RwySPCbBuVt8Xr6c1ayhpjJ1ybS13ypx2iaCzaoheixNz",
  "key34": "5wYZkzAKF4uiWF3hwgqTMAtQZp3iS8TcaUKf8JqRLHvPHEz9NveGJX3rh8ozNyqd3Ztm2TaL2Fv7daxpcx6Cismu",
  "key35": "4htWKFsDM5MqadxabZNU1YYhRY5PirUDETfDZTkwSzrQaBzeu39WSEUfhUqQAC75dyiPCneHd8mJ5e2nQSbKKKSn",
  "key36": "4sK7vH2iiKuUvbv7sutp4WgJPw4Qkd8ioPX4vQFyGUS5KvvGGFc6XieG8kTpAc5Mv9MnZDvfQzxiS77hMRg5yp7p",
  "key37": "4q7domL8BNpwuGWUW8q5RyYoMP36mPW2biLwUjSANXiw4x1XtwUpKhvqVT8wYi87xdRyehxLDeBe1SzbDXV66RgA",
  "key38": "2jRHeTrknaDChYxP9MHEAPcLeYuFfZVAQLxq7VKMdZH7Wf1HMpafsGxgJApv3tohhAYqZhg74yPBeP7d4ciGn4sV",
  "key39": "4PDpP25AkJ7PSBCe666GLjzBjdf9dyhJoohk1KahJmAnGBJ4ypSh1eMjJ4VD85qiD7BdgyPrcYxrGQPguqvU6Bhy",
  "key40": "3Zsx2wc2HuCF7ppbiGp2BKjtGCtUnoJEgkqNaghH2G92iCWsMo7anopYm3K7N2XYoeubvFYHD1X4T5Wyg3FF4aG5",
  "key41": "4a6D51EJuSWQiLckrAdzuEP9Kcz2LKNbnqZPMV1SRUTLxxoFK3B6stuTyPkBmfjP55TVkNbbahiEtjpZmB3A699T",
  "key42": "3KsCuJuDzi7miVRXVZFdSabLnMJuCUAvXkBFK8ZydeE4LiQ3XAxfNNE5otve9wGUqRWEHUKFkgBhcvyZTnWXQKs3",
  "key43": "24KNXXZLw9xgyQ16hnStBEPxmGtBzVtAyE357otmRSAw4ncJXMEo31Sm7XMV4TKg9SDpgwf3pkra2LgyYncwEPZk",
  "key44": "4oCBZ6J11S95zk9ts2B4AYVCeepLPnETKddLC7LebFfpQv2xiQkpey3NQBXT3JZTwt234Zmesi2iWTh3qGKEtFyM"
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
