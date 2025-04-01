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
    "UKUSFGLTVUrczxKYthwJYJLVhZac6MQYuoRYFy4dTQZTe1xjiHrdkwpoKXiRNmijbLuXwmvPy9oUQXq7Rkrefjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LENZoLLfdLn6fozK6aNuG4K3X1GKFCTHeEaPP97ub2Rv9MV7GkQ5Qyyi96rzFLHEKanWXcJjPE9vh43rDzCbJDp",
  "key1": "363fuGDEcKR2nRooeGzH46D89vJbPGETDytYeSCAss3LmZpRNFvafs4BNR5ahBzj6GZoTRb18gVCdKfbqqSRBg9Q",
  "key2": "4HqJ2XKRPb2CFaZ4yyu93TFSKNqWQc33GwBbBLokEfxRaKrz8tgeWvuSTpN5LysB195d7XWJtgvU12AJNtJR3ixi",
  "key3": "5AejEBqnXSprqKJiuZBFHG1qHHkzqTSFiszN6T5DGippjyzqHataa3VXZ96UXx1rGWNEsYGkQ3u3vhZ3Wfday9kz",
  "key4": "4p9Wad32rZJm8GiHNbW7PF5EasA7pEsqfFHvJhFnCZDRXvY8HT57YNdp91eNShFurgdpGLbYad14Jo8CZC3vtRaR",
  "key5": "4AKiu5yJko4wetd19ESqQanarFB7f2Ex8Hzuh9exGzof6Ev3aUT7YPWnqCjvdEFr3bPEWUmxvNFpg4XBUUk7EYfA",
  "key6": "LbXk4H9WjQCByK1eeQyQZB1Hy6jYY9ZdW1scHCMzk2L3TnEJvMqESW3QvLNu2Skdg7iENahgmrvWoskKn2tchMw",
  "key7": "4qPAiRHBsoRtCMm6w7bPXSGSFJ8BWS22smXG9WBvT9LyBPQ2bxv1XXg1mm3csZbL3ypdtghAmPyfs8MLkBkP7bai",
  "key8": "4PzaTUH9rLxSz7HxjcLEctFDZfZfNAtDHaFWA3K1HR3nVxu3QxGUFTqiLqqPpBuK8xb2KwHEzdMTvZuquwm2gjsU",
  "key9": "26XNQJvHoaXJQbKggasqrEqrJZ5fkhX2SxvYFbhnoj1oMxmAPCMouEsuvijxVDaWqVGwaaknyo2DL1me9pGbXPiF",
  "key10": "3khZyUHJeqJzDt62S97S6k4C4WjDMrGCkWC8C8BaDnSnocGQTB6EeAsirxgKnkd3TrN7n7sLTQ779gdDLzRHCWi2",
  "key11": "3rumdo29vzBTZ7tCopja8F4j98W8xGGAbucTu5nPTAs1kkzk2bchfEhBPRsteUYKjGxU5Dq5rVWkyJ3Ds7HNYacu",
  "key12": "4pGrzycNDY3yULNexahM8B8PcQLihwFpSCSoFwsJC5UQR2bxAS6DZFgpMnphv8X5r17VfgnNSUvX4jsfAB3jzSmt",
  "key13": "3PScVpnEXP9xmnraNALcpuUjN2a5tBzAXZoi34GkNTvujdjyDbjAxhNtKpT6nFiAV9vaeHCXhutTMTQ8mu89QhCb",
  "key14": "3ag3wuxuYzEoiFqpDqH6Db4ZHg2BrP4Pu8Xd33bVDt83kSMQRFVoLbvUnM54tNQM932K3N46zuM5wP7tVoqXYL82",
  "key15": "4BhxYLNW3gP46chsoKHHGA2HUDr7sJ9bxQqBws2WXTW6tno3ZrBFnEzj3Uidc66XC4x1sR2RhLD5mS8Fmvqt9vTb",
  "key16": "2mnjRbka13sVwgQghni71HkUrPyf761QJg2PbNPgjDW9R4mA2xmDK6j8wFmHW4qbDv3oSserfbHGqk1CyN82hxGT",
  "key17": "33o24ioqnpzayfs3LgMbwjb7yDpwVdgEjVWMddhjcKZdZNWHcNp5KbvLrHjcuKtBhk7D4GhKyW8yRQzEdv3JMxiC",
  "key18": "27XvqterLxHhE5GvLEZHmZdhxwATPnYinq4sPHFzWnq4nRhBAVNEQwjA5h5MsmZVdbo8C3xQiUcHtDSduU2LYu4A",
  "key19": "Hng6esjkWPHcgLh9sVHhRew3zopgQBYd8wvd26W6NdD2Lqur2mnxigwKnan5yRNankhsFjgrrpToL64n3akvem8",
  "key20": "CVGuBn8YgkGmAzYcsoEJxaWT4Vq5LmAUfHmqStoJV3Gcg6snPA772BopLzzF6rm1BeX8ofHqwyoF6re84vgi5An",
  "key21": "2iVoch4SK14kGwRfgH81N5Ec1zuLbcWkd8w1gtV6Dncbu95rfm3zkwQkRpEiVd9nhuMXWV4J4p71E6uYTfxQB8K4",
  "key22": "xWVE7tzVHLZCH4u1kXWGaYis2Tg9iJkWR68eiyP8um9J7LqRLjcEWikgQmncUkeE4A2TwTNnDnqPeqkEUAquxBe",
  "key23": "2ev6EhJQT4PDT2gCKSTpGToBa9XJiwQhRr92D1L86pp8nDFZvHmp8dh9FTncgMoLCKAXhXrRpwRrC2GrW5PTsYNK",
  "key24": "4qd1h4WQY1V4gNCsbfaVjGv5L3LwQCrL9wSPjonBZwLYaZ8Na2m1g6hfiSKLUP4AAXafTT5b93QSuN8hjDom6EXz",
  "key25": "3x4edoS4F7T2ugVCUuB7nExZuheMMDVNg41Brbk4zv5WwSKxAwrqtHfwAP5qc8KF7wsSkGGdCBse4NPYBGtS1kQs",
  "key26": "492HNAkfrjgmM4v1ELQWevLG7MjBnzmSvPYVeAAXhUfXn8f7X3hpxbETGHAdjXqqsq5fYzHNLYUpRyHndwegxhs2",
  "key27": "2vwycdh2ufwTgiL8E53DFnPe6YZ96aYWVD2b1DSsqnEDBjpZ5d9gv3pFfVQoFGCiPdK9dgE2AGzAQ9cg1ifC84Eq",
  "key28": "3bskfX2a9eRs9GjHbm3y77HmJzkU8iMXAdZnU55EriH2uWuZ33QRGFAGgRV2t5HGa7UrG5U8vX49Yq6Ae9peRhZo",
  "key29": "2ZNCgx91hMj59nz1nxhfmGVA6c1dGneTz7jWbe3tyToy4jqz1Xd4PFQ5D5AMe14TvKjPATTYZPgzmFm5zzpFLG8K",
  "key30": "3wKjDEFBNudJnEvemsvBjCqv1SYpmGUWANVmXFASZYoh7mf2Jv82UcaQydvpcdT7dhnERLoYahkXgzQgynz6tqTf",
  "key31": "4BvAhuhmu3M8b6bT4fiUJPprFUueN2jr3N6pZh8SJLU5ZeMeXCiJn5B6Dd4mLcrMX2EFpwS98HJLhbBGg14mRPNc",
  "key32": "n3jxSTBFjo94ipbdznrAEqSa9AvhVsiq3VhRwp3QZcwTshjeUoQvj1oQTa4dXppEwEnYWLMFnbZQGzVcfWx1GLf",
  "key33": "2ofaLEE79nskxvXmsW1Udr6PNyEzGELXqu1WCKPRXUyYWf5jUG5DTdehUh5KA5PBQ3R37Y4oKaFm51w87j22fkNT",
  "key34": "2Dy3SbADZh1vFN8zQvS4siviscQ6QwyGuUr9nbfGoZr69tWVS4gYep6m3RCdah64U5EqDhUkvfM7LwKqQwXa6UKB"
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
