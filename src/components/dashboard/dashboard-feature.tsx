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
    "5Y4S3bgGHZ1ZgLYjWokxNrE5QJoBHaES5pwbQuSKg5FioXV1vxjHN3heBDKk7wUxqJMQEzjusoGFJtrx7UiUDPFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G8AGaT2BR8jHfhfHfAa1CouYgfRX9SqUEsfEXXcUcGgnRAKMFuuKCztcyrgzT1JtsLp96ZwkUprZBYdixx5ZLef",
  "key1": "2okKT3YtHFWWasBCAcS2ywPeWw69qayrMhxkFHwk4SVjDcjyjc7RnbmFDHvw55yYx6AcSSwRRjKU4NPLovT8ZUpU",
  "key2": "3r4MgCe82zpfXmquaZJJnFE8iMzeuqbw4zzdTQQ7m58BQFNWdUDwVMtZbHBEtYbDteR2aqhV3TyersAnn4qKfUMn",
  "key3": "5TwdYVTrmi4ZhtAeS111BzbaDAJYo6Bj3n3tdgfehpEFqS7CkrE5ouiJRG5CLpqv44gXT5CZs6HCBVyWx6DzhDBY",
  "key4": "5W2dpqdPzuLbAdjYSpFffzEDFrhaDKnFLjKbvJc7NbwA6LWbMXi5SwyiDcy3u61QmTg1VZoTE9FALSHGPXyYANCx",
  "key5": "vdweooSNJaPNivo2mSbCRH2EgVpxKkC7L8ic8RDyvKBoTkDt1c3BJw87RA9eM7caUkNAUhwfTBz7MCSjhWNT3zN",
  "key6": "597KELoVoZsZCBFArwkC2fTfhe5GQMmPTZMe9cYQRyAnx3hoEySCmPJyHBkHhjUYRWPcP57PWhhAvi6wt5BkF8sq",
  "key7": "fQdRqJuP2TtDZ1fwrzFoAJZV8jVhGjnZDpQGZYnBJrREMFouVuV496hN6bXoUfZAuy4bGu6qWHwrjzWRuuP3979",
  "key8": "3KmqjnxVsZQyiX2cz6t9YSSK36cXQuSxbnwB1GNi3rKXiHjEHAg5YbXmoGrgA4cLcKz5qvSv1BRUGDTbzDdydYLk",
  "key9": "RcXcMZFv7QDBirtG6APpYAYeuXiNby6qXnUu3pSJ7QMdpFowq9xJ7tg8Ahj8KEa7asoEZgDxgCefGiPYq2v3aZa",
  "key10": "3f1Hn2Y18SkTy2HfPCYSUN9S558NhBtipSTxaMh9zu3Re2TQDUJQzzgHkEnHwL4B7DCMhiRKYLdjWkdxTvQpf35x",
  "key11": "21yNB9FmK2eaFJatiUzKH1LuvgdyunPP8xQPifrxBpGcj2P8PZwLgd34svBsFxfyZfvn8WZVtcrwDgwsjXdG8fj7",
  "key12": "2sxXzcJnRCMuDVZEgVJf2dB2MCVKwasp3vGZYRnJoosAxvESjKCx7spvy8rTA8NxsWuMemgnv9wdHDzomPrQ1drF",
  "key13": "53qS48jwmrGb7VK552z3cfvCak4TND6SiU2TeFub5ek5nU1Y2GiJFRGteZi4zB9nMGBh8u8jv4AxNF8NY3o4xJZq",
  "key14": "3BdnroSzTZePktzTuXn9c7CjbH8VzKZKNzPXMEUSa6k3ZJu9DaBZER8U9SmW3KQrPVL1avmKigmU7Ai6e9S3Tmv2",
  "key15": "2DEyjd4y4ncnvKW1FU5dHt7D6czBErDgXESS7x5a8g2FsqKQHV9LYTHVtrj9kdPCr2LwuQuupXBX8GkbRTiYitRU",
  "key16": "3c9APwbAfDjuodsRcBecEQw9tWy1j1hMRXCZKw34XY6zeE7woRFBWtRonKhAZn4e6855hy1qNvK9WGkbdskCuh4A",
  "key17": "v7RB8L3cerY5pHNkUhpb2JagxJVR9C7ugT8h8xCV19tiyJXGLgzt9jLEiFVgjax8UoJ8UhS2VsbKbhsjFUyPq9W",
  "key18": "3YDVZYdkwzNMMYgNGFDm49oqwfeRsbzVhjG86FBAYtTtGZR1vWiV38r7zcqNAfVa1hCHVUq2uPnrsgm8veAJH8NW",
  "key19": "52ZYz4ee9Ne9fg2nUes48cYEgLQppsoAKGuSBac72w4cVW4yuJbJY3qyEtpwADPegCh6F58th9fUUpkqor4T55Sf",
  "key20": "3NFVeSXmNhwrkYar5i4RUGMoQXubNTr21T5b5io9h14y8BWSB6jttPTnHkdehnsBMxD3QCjsByzLJs4irN4TQY1j",
  "key21": "npfXvXdLK2RVQ1Y5Nvinu1rj5kRRdbXPufYhCVx6BigMTn5fPuYQtbb2jjqigbweUhtvkyUey8hXaRVQ98dsFek",
  "key22": "4SGuaghQM9oNBgamCv1WQVxPcHE93xY8hU5PiDrwYYMTL6stN2B7F6gr9QLGn6vXojuakFTAUgmQvFAyZhUVjTJM",
  "key23": "5qfL9jn8kTEBe8QirPUZCzvnaeroWXeu5ScScG5ZeQohwcKjcAJjFQUxRBFCXWRYQKvCPRYVBFK4BquPiLMYGkjn",
  "key24": "2BHri8rx7HvaATbL8iUjzHuZFV1KacSAcFeMDhZkBkpBniNBBFcxHFv9H3DFywph4Uvbgkqt98knWFLayyhpKCBD",
  "key25": "26ayVwo5fGR5r74iknoH14YF6XfPpsBW86YMFSPHS6vws8QHybmGLrN9HCDHP6dRKYwfqC4X2mNH1sUiSrFt7jpU",
  "key26": "43Edsx7YdQ5Z9LUV89hoG5H3GhS5Nse1BFTnqEbJBdKPWHjcTYSiez4nvwTpfcX9sQWwcDNPqByChPx5p2PLceiU",
  "key27": "itbm1HT1RXqtoeYGUCYduF7Wfe4KaZEf6k6ahpsL11mVqC9suVRWd4z4hDDKuTcWw9EhuURSx3H9Z3rjWd4mDas",
  "key28": "BerjrQWM3CeaoYnXaYvrnnPSqX5GVYtoiydh1gv3oF5UqEybayRKKoXLHVP8tGzcdcRRgUTWDDKnLKYXDLoESy5",
  "key29": "58ZokNXcYpHoKbViKjEjB7mqJUjo9Ny1XYwWdMJRhGVwGyPqvq9pAnDKCRAvqrFyC2bgw8HgUi6MzAaBd2FbhDHb",
  "key30": "5KAu2t8KjyEwJUTPUZjPciVxbySLic1esoRLekTrpQZb6Hd8vZyo9ZndtE5CYZJ4xNfsQBTHru7VKKv5bLNh4RxW",
  "key31": "2DqGw1xoD6snXkcQFoM2Js2daDja3VrM5us4UffYiWj66SW2gRX2MX4dyhVZj9LmHzwZdynsG8apXjEV9QV2YwaH",
  "key32": "5AErnFet41CtJv1hLmLBD2SPAzUJTrfpQm6sqTAjcL3nYV7iNXrWBkFPUpZeFRMj7nqebfpcxLugFFXeNXEaDjQe",
  "key33": "4eSuWQGPpvWdmZNq5p9ZWVK1tNBjLxan9g3Lb6Qf2Y9TbjWWYg34saiMQtcnmzkCdafE4LSf5RPTGSzuXixMCwrN",
  "key34": "4Jq37WSv9134sFhhr1kAJi36NHX54bDBndonvqGXZ3WWG5KRp3i5PJhyuWFpZ6Q5FxkLcyxtgzat36u7NdqjHtQv",
  "key35": "59BoNYjU2X8BPoNNr4ZdN7GtwDZVAn3LNEzQEtfv4KRGyyadYPxcYq9v2KXuwsQESt6HQfkSJHJ1W4Bt8sLzgMX",
  "key36": "22EhUFsWBiX4yA6DS9ZRSTQwEirQ8yubTkX1NUgBaYPJH3N1ztPDt2ELpkUWYCMnSVkyWV37dN8oxh9XggsHjWPz",
  "key37": "Bu2BEtDQFyzVq7CLjyT7o72aNcFmEfM59ck2PLxCJxQDNsWMw7ZeAwaXdaGptLKcWxqo6kJzGokwYdAig8mh5Kb",
  "key38": "5CYCzPzFWvq4XN6ypftykXSd41HL8aLNpyzHzzjT62XHw1mZ8yNcgie6pDu2CwBWFmeVhuZ2mzF1hwdx25K2GnYY",
  "key39": "4rWMmLU8pvjCsF7DWC5d5nEfkjnKMSpcZvo688jXN94HvamCcMiffFqogdZQEzUijR9157jW1w1qwjocUhyqooU6",
  "key40": "2tNGgPriKPabDLCRZbhegncn1b2Gg1N36d2ZBJy93ZpNLXAEaZD7nmLaKzuudRHKgHjwEbehvjJjSsqc6TAJZnT4",
  "key41": "D3qkXqLy3DZBCp7FXKYpKY5r1pbywqNnxzVU24YHChNxuhKUSyuZEqVT83rLr1Q38DcXRU81fNtgxFDQ4LVWc7h"
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
