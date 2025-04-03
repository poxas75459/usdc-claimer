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
    "3zsHYzQxdngoCBovmyRk5726f4SajqcHzAP5wwUDVDmp5me5G1fQSTDSoVukDe59MWSwDuUDhcRidNZgsr2d7YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmpFoeqqtyCR7KPyNE6SHMRZQB5sTbLKMBe1oxBetTjXojYEKwmzj68MQsnYiuFS5mRLfx9g3JF8mr1xAvrfudz",
  "key1": "jr4iJR6fXR4X96YWcQKiL2pRrXKTUhkzny9XZMV2RTStCoC4mkSiQx3PrEjJ2LEnNoDGCU6jtKjG2HxftU2cVJD",
  "key2": "62H9e7KJQGtPLgy9bRyxjqKaHsoAxMAVxPz3MZhFT5hvfJgQFk5PvVqKrVfaWeqUGpmb9Lmvytq34jzFEmgmTAdW",
  "key3": "2wLTXXrEgnfacLSUTwXuKYByV6SRFgsKnz9fkrCFxVqhuPkEzVrEKixeFYA41GRPjFsGv3zSNwb8Wwyicpx8ezvT",
  "key4": "4KbVVynn86TQEuEyGAM5hZNu1G9sFLDdzbx8xmNAhsVmdP4CuPA2LBoe51VJQw2ZjaSMxwcByqZES6jLfmee4S2Y",
  "key5": "452tBnxwJUu7iEBY4GX2xhGUcyPZHjwCSMdUqj7owj6i7G34RZsmUbkRekc61rdkpoLkAHbkscJixhAAKa13u5aF",
  "key6": "4LV1AgMpGzhC7q4yN2rkitW4NoZt5Feomk54Dakvau5WEC53WBRjRfSrPqV7SsHqarvtg46EjNVjH1rfvD7Fu9Q9",
  "key7": "zezKv2ivSPp27MrprbtyPbneWTYDzrFyMKAuSbTpGPy4dZii42ZpR82EyZfKtZVGseWLrjCiHVax8gNnwtgVFvE",
  "key8": "5FAYx8TqFDARZZmp2KZqe8XCUxzYod6E38MTy1kMosdq3xkAuMVjHYHRxq4n1rw4Jq62Sq866Z1hkjJzS9bPrmGX",
  "key9": "36pX6QLZw25HWo3YwNxF14ni5KBxPkHSdRw2v9UNTwA3FZbktD5f9zYRSaTyrW829mAWBveAWUv5CuZsjNEg5gB",
  "key10": "4uoFjczd8UxKs3ttuzjGbwpDuZ4ALMgY4qeGUPpMNqWaDwTXCSbX8uKMfgBdjXmVcgo7CKrqB2GoaWLJNBvcJj2Y",
  "key11": "pNjXy5Sgek7ddY5Yh3JL6ZKTSmuqRV1g9i2vEsj28wcp16sQ4pf1dCwo1Hto68xWY4krU4uF9Rytg6rPP1X838e",
  "key12": "5QsX6cRvWPb9rZmtpv2t9cNGZ6ChwhmjQysTVu8rinjEPkTa3mGNYFSkhwDJpphMjF36yNtH4Nir54o695tuD7d9",
  "key13": "2dRQQWeZ8p7mfQCiXuDZkkcXYmMTDrSYwPgje6MXJ5ryktURJGby6FTB35udS56ftZRZ9ps5HvniNTHvgnQ4fCbX",
  "key14": "2aXb9uDeoJH64rzGkkgZgox5W73qfMxsMaor8oTb2S4nYprZK3DD3CnE8pkG6fxE6WjpXErQRFBoLVj5cwvGabww",
  "key15": "4oL9LQSAdf8gUoaUbkW9piVDuAJaj9uwu4KUcotxfDcvMmz38KRJt5GMqRcbE2BwgzAsQ4nQNnGqCMJsitH7gsEw",
  "key16": "4u8MEEdr9t97t6MDTkmKVg38xzCNTw9fUdwdfobU5KogrthtfMi6Fcm37W1vhaSoiStDFvhB8TPfmFhSAHvqBFkv",
  "key17": "2tEouReLKXP7rFxdf8mMrLLXudN8nBWJjqSi8CYrp6NUdJC3dSbtMpeRQPMCg1GSMKC4P9MRXfaHjq2ZQubPH5mS",
  "key18": "2CSBEcVRFTVy2aVx9cSSXPxQVXZPj3CTe8mu5VjiPrVe15Ca2SteGCoW8yWVUg8Jfm9fHgZ5vPBsXBozMN4GkQnw",
  "key19": "3TUFXNg29YHNbHL8HV1YiWKX5wvbTTPqzA2Aq518fyxDgaHeBVYDSw6gr6nVGTGBBA7yHDfypmgcgULvcjW9NbM1",
  "key20": "2vrjbbzBVTe5o6vKxdLxVau94n32MeiY1aWLhdY7SRHW9fNifmAEr4h5MhdwqLieJtCBa78tGeaFbwrtZghu7hUq",
  "key21": "5fYcx3cNTXx5AuprDKiCBvonfWbX7soRJE13zYTVYkVAgwUC27UTCPFtDKNXWHiazBED7npLk9GnPQhpNGDK6DRA",
  "key22": "4D6oennQDrrBBrXXb5ujzYH5Uayz9dRqG8jvrVHmPytbJFEg9x91UCG7WwC5BsQZxg611pGomar8MqMj92zvYq8a",
  "key23": "25wV28CoSrn8odfzb87KdS4vc58cP9Pf7ZYxc77Qv7snrEq1C8YUDkkpC9p9nNrcmua7zxHaLLxG25v7cTRmyTFB",
  "key24": "5ynps1g77waKZMjrYhWBNqR21nyNTQdNpyovVP36nMsQraUfqnZK3HhaASKEfGD8ntMyWF2GV9W4dkYqERiyUnGg",
  "key25": "3x79MH5SWjwcCJPCPDxTEud95ya6WbZvssB1FZ2qgkvMQGfnfnkAtcQm6UeCozWb2pVfzrvYtKywEU23Z7npk9jg",
  "key26": "hTeEYbwoxJz3S5FKqs9Q7iXHaryRLFwGhUhvqPaossmmhhNeP1a4FJ42iaGjkXMCnkEihe7uth73BfeyNEqUty1",
  "key27": "5HN55S8reUqfJxoZAZNaJUiNYC2TRcbWB3L2Qcq8jegpxV6fABC1khrSQLgn6ojBBoyj1h6TcXSLyUFWz5KDUFja",
  "key28": "3bSfztG97GGHpjiDvMMxGRmVjqojuc7bne29ButaU4tZAfTwEnuGWVeJxKHJbseJdoCVzBaoKaS7aTVDvYjuoDm2",
  "key29": "ULWK8sprv1ZiDFEF7d76pA1uxJAKuucgZjEtiDq9Su7UW1ibwessfrUv8eSvmnK3HTAqRLjwC6wPGzCrjbaiMym",
  "key30": "2KpSDXEEQ973A3Z4WoYQ8YBG5usyixDa38GtP2uZ8jqGJe7TqFsi8Wu6v9r4KKAkKqHxPLaEuw9cyv8F8htybNpF",
  "key31": "Fv7xoaPnKvq4zta1rXakkzMyMM9iK7BCf433Ehhbd4KcuNv41X92frapr6brj1aDY9C2GG6HDH5nR9SK4apFFAs",
  "key32": "5N9ireqacXpi3z1Bz8ndihW9xkysefu5oiSM5moi5FnavWSHxAxmdZt22owrcfd4MEQk4dtz3eqvgphPn5dxDmL8",
  "key33": "2vHkBnEEZcEtM647eaWNMk3YK8nsexr25yrvoSaH4N8PNPiQFc1HRhhRAJcSeqtzZrSojdRRsSjc8qBBDTtBSoYJ",
  "key34": "4Zb9J3sQiPUyR1fYu5HqhAMn2TiAvGsG6EbSZDht4Pz2hZbaGPaGmU7tU2pMn8o5cfzZDkYE5k3FZk5WniNuQsF2",
  "key35": "UXknoprRqaCiF4qaPpfAEtMUfTxc9XbRXnqNsa8KhE96Ue2ed3J7WXetnt3hq3Ddha5bcRpezyoUkrWjnXUP8F4",
  "key36": "4WfK3P3LhfYQkznDLNJYhaZVBKzGYge936JG4WCmh2W5rgBCoLyiZkCMF9gWsRgcbaHLpGykEpZJv797oPLvGvLK",
  "key37": "4rnbroEHDF9D4Kb1rEwmQSoykqeAf7yGmpzrVMkjBdfTfXKrjozma92yWLtTg52t9UT2tVqrq7Lo8Sp9BkmEEEr9",
  "key38": "583mYE6cz8QwjWgusNLqEmmowT5ewDwcLK374YSHG6CAtzeYKjAzd3NDSkC4xagHmaVSMiYCkzHKnK6z8ksaQzs7",
  "key39": "61mnT48XqYLremZKyaqaeXggzkxKKj2E5EyhjbFnbjGz4snqTXMsdYDss7PaRMMeX9a3P4mRt2JXwbJmP5Dvk7DE"
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
