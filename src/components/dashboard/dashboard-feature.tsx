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
    "43WxKBjStoPpE4a2d6BUvtH2puCuJEj2qBKCVvmHPkqCCe1yk6rXRevi1yKijoW7pcbpMA5Uij64LKkka5b2ZVWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AZ7aNfF53SbU8YJrSunbhkeCGFub8ycW7SEgTNPBxSzn5x37qgNDhZVknd4qYHFPzdjr7CD6jCR9b8rLmPaFn5z",
  "key1": "2Kfbm5dGUe1QYzSu1K9UduFErZ6DokJfhUBNmhygazK6xJ2TBV4tDA3SkNkWi1r1qGFBrwLkUw8MxqgK8PbhvAAg",
  "key2": "2G7GRyNwb8Brh14g2DSLsgz2kyDxc4NUJSwna7HDA2u3Foo8uz5GyUfaArCnqYTtJzHVyiEfg2HDgbHwWqomNURE",
  "key3": "4dXy5y1m9a649rYGKhJ6xDrAXqBSqhgHzGcmbCjQyT55xzrxBTuFT43XssVpVLkkSUuUBhh6uDEBiS5tQDaHKebD",
  "key4": "rLPWBGQSPNdJBtvdMEXzerEYubnKTrLc7x3ULKr96ZHmHsGkDofPNR8nWpVwPRfYVLWmft5QNUKeeoZHagnbZWn",
  "key5": "321hXNWDmvTKHTzYKixPSi4GYPREfg8zv34vYhVC6Wx5VGqYrenF6XBHTQXYs9KSYYLsjNBrzkJcf23i5wdhRVuT",
  "key6": "2baqYjbYBjpehmxKCemzN9dzynFts5pZA9qqNVKu3R3sbWW2NN8hivzboQd8rcKEepgXKNs1HCU9K8L7fuACf11X",
  "key7": "5PGjk4zQZ1SpLh3G4UWpxBMoewLpJHvDWJHFmaNXiVRhvWgLcLwC7gjBDZUBWfPzzaFTNucxZjiWwpZhUDVwzmDW",
  "key8": "58ympWmRC15EsQmK4dq5XGH5Cy521eRNBzhgKHv1oE6NA8Q7H8qcSTeWL9QKE87nbm5wV1pSdsEdLa9R6P1887sZ",
  "key9": "3TtdTkZgHYiFE6qMzabAqAu6yAht5CKk99o8FQzcgio28X4ziexcgHj5QHp6iSBver6zmv8jjgU1rJbAo6tgq3m7",
  "key10": "5xHcJPVGvN8Fd1gZcUnwEyBNcmRpwre5VNF6dtN9a9mAP7e9DhxjCzdpqcTLwwT8Lt8PYp5RP98E1zP6UuuQb1ci",
  "key11": "4sfmCMAMDZjnA1iGxwWGnxvWMDGcsYqspM5wzEZpPTRcrrbQezwSQsdGnEA5ihcpc5qCxQgRnBiaRL1yvwuVhtDH",
  "key12": "39hwM3ZKRLZ8oKcDfkE8cfM41FY51njTi3MGwc4kKH4CfDibLNi1zLBCMBzdtv2TAxHs7xtRRo7ijD2dWCefbqej",
  "key13": "DSnERvx6oNv4TeNgGQkw6kXDqY1weWRQRWyxKdCpSQyPz4Uyf3qYAvErGR767hguYwCoEdcP3p1eG2N1MqFpknW",
  "key14": "snDBjVYJGu2efubwB3XMaeAje71HNTo6GkwnVkn3X8LKCAp8XRuq1K9oCJEHkcQVZ1odfRci8HXP55NHBVdv2L3",
  "key15": "3XSi9FbZXRGd5jFroJNp2FZzhfo1gVRuwu76WgQbrCjdV9LXeV5XPLrUS6GA5kmyCepkCtRSv17dqQmaPcee5bt",
  "key16": "5h5bYVDFgsGWxXa4im49Uf5WWHJnXGVumhVJdvHTKVsudgvSpJ5ZUFzGHXLjBfDJbod5wwM7RGwBcDGnDSZoEv7d",
  "key17": "2tABW3sfaPvvLJQSNm7df8ffiLQuYtv7hRk2aBChhma5oWemsvVU861W72FTxqDmt4exM9kZFAciGU36Aqok8iPd",
  "key18": "nboWf2KZ4RBE5AcM5fTPjMKfNKGq8EQMvdtU8mtgH4DoetogkQZCzKiUor2G1pbSdbdkgR7MqMzypWK9WobDRV9",
  "key19": "5CGce8kP5aubh3t2XdLZqkadEngTGDjdWfowTtBFTWAKy9kmdAW1AymbZJvaswUBHpnQtityv2CR9isKstg4tcbr",
  "key20": "2VH3RgGTjFkxEaePvjBF89rFknMQmTAv8ycQnoVkkzAXeBgQtqKhjsDEoEkizHkK9ZJdwL1WSp3V8Jio8ZQdtC2A",
  "key21": "37kZEk4L4ce76DzJUBkmWFeEA97NKJzPSgNxmrfhAAEGj2okb83vWqoQXy2PWfEU44PM9TropikwLeLqEBwfQLgW",
  "key22": "5Mjc6X21FArzvL3HwEXPDAN28eyeM52ghxLPX3G8PAdUCgVaNannpmeX5wDjc6uRvJN6KkQvedKYvzR8PaULBR1v",
  "key23": "23CBm5LCzHsVKHzCK3Wa7SBHpEnTjQBGt3D27VAY3xieFig71Bxd384kh8apirN155gXWtbWogKrDx7p9d2LwU3W",
  "key24": "5MJg2K1rfzMXo3b3aKYAYyyHuwMqj9LVgvD7hCxGoPR14Za8WnKUCpHzLNcrVDjF9foXAKHGyVtTy8g6KpebckQm",
  "key25": "2hMFnYk1vLEJffLtfuomYVzBwCCVPxSbhEiq4QvnVvZibLQai5sPzAN3F1EcmvpYX6zv8y77nsZc4SkVnnGLvHg5",
  "key26": "2MCYg5kKbEfQ3bDK5DtaZA5ed21LSm73DA6cbhSCuTUGcPPoYpAUUyMB7YyorS7M1d83uxvkvzFvZU3PEJETaQfV",
  "key27": "3arx7d1gub8FPp6yCG2aKay91YUh7GCyvuMMx8FmVSDhDxHM5FwzgvYVh669zWVcKBkTVaTua3X1aiQoEAZ7QqsP",
  "key28": "3PZr755YKReuF4Dy3Xtd4M5C2Ry71TwYkVzNhD48YbUuYMDG2GmUy8DzVSuGJuwdUnCsLiDjCjdL9MyL5TpdRnyn",
  "key29": "3FbSrU7WsbLfbxy827bq9aphyyXffMwi6ZvbhremJFAZ2GMLNVHGM3T7rWsUg76PP99WbHvXeCGSEE3nUHzqG4xg",
  "key30": "4fgTbN1v5sMkv87iAGYhkkEGoQdNV8tWK6tnkQvDx96CMQ5tJjDS1jjAQUgTWUryTNw626yFWa4MzRXWM3gySuVL",
  "key31": "2AFvX3Vx8pNkTvq1mcuWRvQnggZtLKimnteSoPiBaWLqiVasbbtSbq5UFr2ZxxhL2EbmrYRRgPnE3xXcziRp8WQx",
  "key32": "3sewZQMs4ZBepPnsu78CaWEyCLu11vQDRWDk9gEszy2W1DbzRzmfGHdqSyrrx2Q8sCPvgEhYokkVJd4eQG32pfDS",
  "key33": "3PTrcygebfBe7hnfLhmJRFE53waHUPpvA6DarxJJhRWvKp7jYQ2m9qMuKecmixodAmz9ACHJvuRDv2ns2ENziGN9",
  "key34": "3NRAyEbHzfAxK1QL7tTMP2QvKis28kUEtrrvkptKgFRxT3i7DoqDC8Kcz7kdo36LjfFs6QGUKSKnw76sVQL6NeY3"
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
