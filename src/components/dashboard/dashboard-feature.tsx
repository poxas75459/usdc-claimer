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
    "5hMouTWMwdRzokgL3W7yBLJdRbaweYhsaHVRyHZRpCxwvmxENWWhfTECbaaYP6uWHmERQ5bpxNP2oWYKEA86NKvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57T8d1N7BTr4q8cMEW4Hym7LHo7tAQDbeKjP48R7ZKSar1zgaN11EX9TtiwNGFCmLA64MXkP3WKf2NPqmaam2roL",
  "key1": "WGUDrrR3nHPLkY5VrTdSkH8Jsze9xVWBcMvWdTRQZYVRNDUtv4UNR8RnHuY982NRAvHaZmAURVXdwPQf7e7Yfy1",
  "key2": "5zk8whhf9gK6xwerJ669y3hH46K8G9R4PtSfSWGhq8eBiLqZpp9p86p1gEw3tbPnP2uQMZeuKjTNzbtmK438wrkv",
  "key3": "y6DCkDXK9Ejpd7yNPHNgRbgK925iovC5gYFw5nthfftocwJQ5p3uhdkT3funkUT9W9mRs63dJwoCKeDd6f5C2Lq",
  "key4": "3dFgpw5VvJotRvMYUdqp5PWytABavM3k3GaXW6NaioTQLdYC19H9jDRMG6qQBzXChozvYLpuB3EkuER4LL993Bku",
  "key5": "VwMwTi4MYnvgf7QSRx2pCNfXT7BpMgnnhNva3zG4rDWTMKMYu7ADctAdurJAGfwjVyUTLU5haWaXw2NfFRW6obU",
  "key6": "2m5maL3S1aBdJ8U32dbcocbQbtLDMFnS1fy2rBoL27JXS4keb86cZc6wb1sJw52X5wJpJHirsX8bWbEw4rYoxLRG",
  "key7": "3b335jeyU9FXCZtdYWbvr5KxcFDLE6nc1CVbKq4MoqFh2zALSWEVMwrKomqamEepvCpKvWMWbonu5nCXGhQhgCQ",
  "key8": "hQcyihhRoJXyuuUrvi5SmfSUwt5kb6RrMQ8rGkoJxWLzKLdF7sZFonX5i6Yjeo4NnDwxTuAYA1i8dmwE7XvgDXw",
  "key9": "2m5L1JnCyVu6r8AK6feM491WQk627AbuAgo6UMyo95cggnTx5cxx2KEsFk9MUBkuuvFRtiYoEvEiKdY73mU82aZR",
  "key10": "41qU6LAhiDdvTiqpZbHnmJUxTsUokQ1pypBGi7b98wjSdxoc1iMnYndAJ9ymtn2u2a5avqDDYxuZPKWsBat6AxPp",
  "key11": "3GLJfepQRJkKBNz7xeDB4Jj7eJ2VgQ8yGnTcF3MiPaXLCdLCcbU1ndR3ngQhCqLcqxCtHrdqgpbxNNxfKfabHziZ",
  "key12": "2wRmUVNLxDGx7SWM9chdvXfxCV49SLA1aUMt8LQP7N8WKPMhihcyLCJE1j1dzn2BqtC4Z634eC3f5YPRRjGuzrYd",
  "key13": "4jzKcP1omz9kpazDHSWGcXZ32GojZ6XvaKHwNvdSnVvdgqL6ScN5wsMkUp6tL92MTU1UWGMabMrG1o5TuqgkWBiK",
  "key14": "2LqYTytZ713eZuqsQWiPzn5wef3tPk8SxM2wNBwUh7XLgVKLfr1oe4S2oRxyKKHP1oyidDyQLxNirw895sEkAeKZ",
  "key15": "4en7ThAmv336GwynG1wA2fJ2p7THrUtyvYJfhSTfPStxZPeaZcXRrs7PQMVmvAmhZ9JLriWhU1RWHqjZ6ZhQVCai",
  "key16": "2jCFXocwfBPn6avABkxJjYNZ8nWMfLXNjmvY2dS1njpwrESb6ycmHyLSNpEmXLgFZF8kLY7mKVDp7BfMkneEvLDs",
  "key17": "3prmcQ2oLRjDfhfHzYTPFGhWFEfEaEbDJ6LGS8Ug23gu5o8HWWD6Qi9LmUtzHtuWL54kCs7dwzgPVrDyf8eyi7KX",
  "key18": "2X8uMCeQJBHzqNcCergiEkXQdAqSFXwxhnGVCmJ13Z7152g1WrS2VXjubLhxyrnhqAE5AqoJVNHo9mnSGzrZQNZZ",
  "key19": "27DPEzVURKJVBeKfSY2DRk64uoqxRwrixVnbfPQDo4oxJi9B1eVXLWe5LwZb6Ns97uPPdQv5iVQNzraZFrHzsHb2",
  "key20": "59gxPr4wwaYXGHYZrjCi8DeThR9qRW9dioLzAGVnrLnWYZYjN7kwyvbX3ETeqohLmvoX3G5h85B35w24r1UB2tPw",
  "key21": "3bZwSy39PRRZqZns2hZSUReZiytMeMjr8G3nEPZetArzCN6x5NsqyZe5G7aokQuSTqh1e4rB4FPaAPkEnHCYkAQa",
  "key22": "4UA5iY4KyVeG2YM5wCEAw2XgSZHPrqiM4G3kvS6AhNYge7TrNL4h7WnL7puSg6CowpMxL1aGWFjeVwFHSDdS3tUz",
  "key23": "4iucgh28MUyzVigpm9XfikLE7R3toHbTDo9sdLdFqkfHjwL6b3mvwWwCZ2yp8LLhCgoKJVA82w1DaxCnp7cHQnw4",
  "key24": "5y8LGeANu68GK84w5vxf1pyxXxx3CKB9U7EZhj1YLNsiAXcaZy9boifmLZ8hm7skfReANnHHVMLYYXGKNCa2PCjU",
  "key25": "4JsgtsEPZLU7QE8oSnqMRN9cdQMAwcg66WGCN5HE78zbcK6ajhgMvR4NRmeQrfThnUFdbZ7gorgUixAYY8jz9DrJ",
  "key26": "5GYs7y132t9dmcPmNvKQnzeN453E9dhQCqvarRgwNAK7DkuedNe12roLqr2tteC3ARs8PEB3qXVUhDKixxBnaKxD",
  "key27": "3MkiWjhtBLatKPCKZfHipt2EiCkHDjrk9Y592w8Y48jxUTpeJXUYLV3R1CV5BDW7ToBA6WDSE74UxgUi6ixgSVyQ",
  "key28": "4sGSmXULvSY3nUaP4Z3L4YQD2VVyyXCSsCjQaz8q9Kz7k4tS4ra9YtvZUMqR4xYKxzMaz2mRe6Vjn4B6JzQ8HQK8",
  "key29": "4cJmgc7UhREwn31tff8Q6shCsXEoeEYBFy8Nk3KQqjmeX8ifqxnaAWUKj3yo1Pn5XgJcdsKdzpZ4Mu1zEXQATEmo",
  "key30": "21WHhPmXvVC1TfSrswprvfD7nDBhPpsizn2jnNhqoPPemUNxG7fTczrjqiPeF52PTvuWPT2xWftE69y5N7mubwVG",
  "key31": "5sGMmfk9eBXy2mGXySZHpCmFow4ip4sgZM164jWwPyLZA6S2uHX2LWkWHsLLk1dR6ueXEpVSHvEtAPKjTytijry2",
  "key32": "3hRtyG8g8eXFKMCKncarLyzWKmc9JjsMXnEAsc9Sp2PurMFCsYgcymHndQp8ZzrME5wDBMSJjnrmZnNXHnPTqhbv",
  "key33": "2N557zZmCHHHGFrtmEorVEiroGiPxnZgNUy7ZPJaj78jQckU1HDrSWqnCk72g6DN5K3ux81nNkquwVQGysTZdhzc",
  "key34": "3WzwSx9CyoZcXzfxfNXHJC1NeCBoyUqy1UtzrGdupN27QxLpj7WEriBud8YNtcPYvfDeaNeauaFKh5EWYFsyDELu",
  "key35": "57CvkTHjyBgYYRVTHKC9VJULndVLsLX9QhiiHcqXzxKa5T3USFL6pAXyepwVX1PRMiLQjnMbhPy9ovKW35ahSZ92",
  "key36": "5MTdv7mYzz4xnHccBPXh8ny3pB79qEFXJF4TMPHk3yEGAbFPP8n8tkHPvTSfFGTjhBvTqbU3mKBfhLkLU2wafEGG",
  "key37": "48W3DDsCvfXJH1KkynPAw9w9SSdhRPatscRXqopXBQNwmcs2UnsLbtPn6wDhXZ2LBGsQBNvUq6gdjnF41vFpNMLq",
  "key38": "EmVvFGncuShkarjcN1kRMWifF16S4FA6Q9xASPWoApcUgoUZJhVSatTNdbMjG61VEs7931Xj3RBwkrGQMPctMZ7",
  "key39": "4jLJLuughkjVKEDfEW5bbHMTeJGUiMZmGQk42QykFcu2QqByYMNheicXPn3Qv3AnnjHVBCerLc1kiuNUao7vY8Pc",
  "key40": "3i2JHCew2QHVgjDSwY87pr5wLnTfh3G4LBGmoHwdvJkmMEz8JQgan4ZBdTPABW5isPgyqGX1BAh4CknAcrCkqM2m",
  "key41": "28a1o9gHG12kTyt1rN2yBDYaFjmvKWyL1Cqqwk2Zwi2k1ZQt5y7sRNqDmvBXY4Df7AQ8VUeqVXfmJEaViR523Ufm",
  "key42": "M7ENZdrZGHSpbhPnFhp5on8FcjUBN623ZYpsFzSFsxNaTSetZ77ERZDNWfSGBcAVRbepsXWC7pZrkTHCzMQ9cdM",
  "key43": "3rVAubw4DMMJ9eZ5LU6Pwd61rroAUysqXcUWLQZ68vqTQq1SXuYiiktaTrae68bAvjzDQFiWTybwFzEwZWXE7WJr",
  "key44": "4V9JnCo9PEtEaAhwdgs3ifqW2cFMZq7C2agVkesWnaPP9gDfSbNadn2xNELbuW8ZXLZtZFFMzw8vT1rBLggsvzLa",
  "key45": "4a4wDsAkWXy5W2j6gGkZ8p2nCGhUiNCxEERxdXJGwwpRMrXHAgivbkRN2XutnMcqB6yDWbgNsofBX9eL1ZWF2ccr",
  "key46": "4QQUyubetvfXjftWdxVRzi6W9nnFKBhuKgPcyzArrHHt2LwDdqKBvG87n38K3VmxR1v4hLW6kkDXUBTtPkfPSQLF",
  "key47": "5zL2FeJRUnkhpMfxTbCVgGGMVemiER7oosxNPEusQn9N2eHSTTdSVfAAvs7UAm97UyvRrP2T1RGk7jrYVBSsr96a",
  "key48": "5VYuAxSt9vK4CeMmveCHbSamriPQPbf2tZi8qg1BhKBwQ7PkSR8xKW6X4QXTb9aHFYifHsnpVVAsQzUK5n6179RB",
  "key49": "3AXscqDts8hDx3MQ4f156kEtyHwzaVhVC4h3kThhks9BookMZRAZo65RpQXBFVfEs6N1DvSb5oxSv27oY2nsLqHw"
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
