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
    "YJYdyKES8SkXMYVTJ8iLU6ucZKNzWwdKLwniWN69KqySaJTbXy9UZAzeETvaEqdC9QQUNugKxgusKEVt1HCU3Yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27VsH9kUHzzhrciYbEUe1h4cKJFGTAKkiWpWC3K3vYU8XHUps3AoxjQ77Gq28LE4xB6TynEiW5KvR7xLdouz9vhz",
  "key1": "5SzuGynvxmwXKYhmbimiGaq3Ma3AnXkYeTmBtAWoRuAMo611w2ShqJHZhGboEzzVCtdTc7yFf2tojB4fkpaq9JNn",
  "key2": "AaY5peFhjCravB4qNLz5YaJmVqTWw94CtoqeCUc77jxBKM6MPXtnbmGRWW4TDQUayq6nCBE7AJYV7BvqDg1ohiz",
  "key3": "aryCKqvqJevwhPhV4wK9P7NxxUGwrYZoxSKgveJ3bS8pcgen6CPc4dvkFedxcrVyyv6WMs2RNP3C6QSngTv9G4E",
  "key4": "5wkFhBDvFHDfU93YReZMNQNuoTPRP61pSzUGc1fRHsixuZ7LAKsbneDbKYHSoc831zW4DZgaaxonM26MgfUMaWZc",
  "key5": "5tbADcw6C6m8HCE592fYN4vH8g7qnWrtbwzvFLCcUbQtgTh91k93XYncNxZSny1hCoTCVhVeRRaUZ3nhQ7LpqBGk",
  "key6": "3v8ZfyBgDPSMCWnAyxgnQQGYhC6BcRhDLQMw7xb7GTL6P9s8GjJSp7UHY3tXQLdJYRqMFuSampfQpeUsPgrtBdDY",
  "key7": "3xb7MFgLHnprCZxZ6dJ2JRjamVGkvib2EC1Hy7cPrDDrW32Sk7Q2fFL4u3LWi4HAqM2FPzGswJNEHVC65CyXfr3j",
  "key8": "2RnNJ39awyULSeJoRwTqeP1hqn5ETqLN7ZExeZoW1zVod7j8atjvFqadHNcwuXyobv6dqrCDg7eTcCzBJgRW5pBc",
  "key9": "2Za2EuPKDLuFZcxZrkFueVYPSVUpsWcXRXYhHCyDSLHrcvA7t57M8aAe5RbTRj7utyQsGse3BSEZm8ypaJUWSW3d",
  "key10": "4trku8rUm4KEGD6HFCrNgR1aVw56B553bTHFKAmLR2KuHmvUNvqBcR2TSticC8gtaztXF8iVptSKebYJ1MMeX1tK",
  "key11": "552Hrph5kvjscZXmQtSaavL2vt4nmt2ZfaVJ91St36pM3bBX18rJ8JfGdLXXF8VCN5jfnQVbDJ5k6FEvqjqv7Ux2",
  "key12": "2iDxYS17D8fqjYmgjBDBA8UijJ5cy2wcHsom79QgZZWSiLdzTjJVQiS6metFPX84ZmcdbmHRRa8uXb2BVGcG9Ht1",
  "key13": "3mJtig497Yc8LBzQbhpkLpvkLbaQjwhWvgrXDJPpgMCqw86BMPNgisnMDbukj5x1Epz4vrYQeMMqSsA86vJMhbUn",
  "key14": "379pGUf88wTt6obM3Af5Ln4wr4UyT69ydAW5ZvCtApHCFXnqsZXvjMWYxEFT3NH3fb8e71LufeLaBb6jEg6JDuNK",
  "key15": "65VtfzZtk2xmCDGF8YoC2bLortsu1NMDj2uW1Z3pg1LmNjUR7eo3Ws3F4yGmbaCM6QpoBCniCjbX68z5VD3hRmHQ",
  "key16": "2ri5QEHKHvSeSaQaPdiJdRXgZsUoGsFrcGW4txvfXFrzzjqZXaYrtDB1CtSQgfXq575As7eDyrqQPtKVN7ciFM3K",
  "key17": "4J6H4BphUMbC9xnDrPcCXcFrM5PWHxVBaCyzcWFgVnGH797epUYf1kmGCuLLLpcJDgWCVEePbuUa5MqtGnrj3dJz",
  "key18": "4HD4cAt6YFgutgk6fn6MaUJM9uyuj5aTmLQaerUSob14KUWEDd2jgfDxgyJTnqfDryAWnNnaWkiymrfn5gfLuGg8",
  "key19": "3vrgYon2763FsWok66Bjzk2DJEs1pxfSvB6RPLYJK5pczTp2VowrVuU13ja5BxwS3XrghWxCCLvaYQChPuQNpmBu",
  "key20": "2rviMmdnSR9NZdhjcDdVmvokdMedfiytRvBF8THfz366uq1R6TASsBpRymuiF2YFWkc95YnovmAhQykJa97VFi61",
  "key21": "6bvu3b1Wxmd21MAZpSxooXL7voxPUWkvezRgqwu7CfWqE8pNVafp4nrSVR2Fe5vk1rLWcajoezAi1Mtk25ADu88",
  "key22": "63KRnDQT5qiMYdzdGjGtCfZwgQLAkQdMFr2cKeQht6hXpHyyc5kr3pwjv4ncnymFrigePuHyvpFKd8DcqneATRir",
  "key23": "3bckHjZNeuZZYcijdmxYWYnsR2tdkVwJrsBHHCzpyJe7Hq9aYHoPWw4gCvFu113oL2Dnry1Qp8rVf2rGxV1q9xqy",
  "key24": "4e3HALtBJaYpHWsdbSNZNWTfR17y7FXcoH1LLuT1SXVVce1j3wGMNEuuP5kDhN6QbBVtMJHrutE8eQFdyC9KUbEn",
  "key25": "4d4gz6s5aR5gNhcT53Rtb7jFvgM7y3NhCtX2YM7eq91LuTn4PtNjwX1z2CFqRDC8Jjam7xxqxGv1ziK43rECKq78",
  "key26": "MeWeD4jS3eBvyAY3kZz6QiUCa4YzpChnPGZLJU3uMST6kjQe2nK9RYin3aunZLb3CoXputxrhcCsgkGvmJyXEPa",
  "key27": "5a95HEjDT4LbtaYYUGdiwUKNefnqkceYAkxm3g9V6e7jviw6kXvWmZPtC6ZtBsE8D7JGnPhg35pvMVReqdnmWyKX",
  "key28": "368i28ri4e6di34eKtZUZEee7KjFrsb15v2yXxkDgZoiwiuwA3z1ZqeSfKytWzGkNH5MhCUGKMMvbwEx5tseWd6u",
  "key29": "3Usi7pEfRCztrsKUJ64xskwfXFu3k7SNKG6csxJ1NTcP6RhTAft6wFrn2qVrxsYYeGGLG6w3BfLtsYeuwfczJFK7",
  "key30": "4mBrvicCmuigYSjaTPTx8WRVEfAfJ8hm2X9gMJtpLmyqr16DPqFBeyCSSvNiZW26RMHynhUXs3UGf6HiDgrj6Fqs",
  "key31": "3mYiX1jrWiCGMv8UpaHrd9JA4cxvMAc6s7GSws3MBftba9bJWaqu5yx7p7RK8wWxwjW7Bqrn8t9FbCiud6z7bED1",
  "key32": "3BALjeX3aiUWbkWLNt1q5eZkfMZ93bqoYq34htNf1fLQvvXzxwv5MF3HuRQRREorGVVcYhRo4uvMLwPzREbn6SHb",
  "key33": "3jQm31PX5JCtY7qxrMHWcNCheHevhc52xsWhGfksz9Jbu59w2M2kQcNg58rDbPkzL1sB2D2vA6SWXjcFJx7Q8bwF",
  "key34": "441wTBW3kzmqAPZhnNcMVZgwz7y6Q2mCDDb5c4BqHDS8tmJpzHcsJCnaKm1ypy1DzW7WExWBZd9qZeDaD4Uo7SXT",
  "key35": "2bsy1YK4vvmfuMgDBNE2zkDdPQ5iVy59yBC926eu7WcCBvh2DSt51yac6VtiuUa7APGanFqYzHxuyGaBrnbkmMEa",
  "key36": "3shd6cQKdfToqG6BEBFFshU6w64gWRD9LwMMMJ34aYXwxqULZAFyJsDxSe4fr5ZncGad3rjSW4U91FBy3DzCrPCX",
  "key37": "2JvjBp5FXaYYyMeVV6q6vsoqLLKGvTNH5J2fn4Bkw4AmSkgoxVBf3QXVjBnMyegrZYYe73q1FR87xkveJfzhwc5H",
  "key38": "34cP7FrzWuCxMJHKnf1HcDuFhPjAeducWy1ZbX1KChSMX6bbYGUatjRS26nDipKRWY49W6mnk4C9Zoxxfiehu3c9",
  "key39": "5RbMzcSWbhxkdCbBzsNW9LfSepKSd6VXgJcDqfJFApq1Vuiu497jXzTBNncJqo1UR6APh1ZnLWXfpfncKrn3QnHK",
  "key40": "5CWZby6DDAjBFsQopT1r399fFNr9zCtVJjV9KP1D5uV2jEVbdAxGVtTkbzkXvKmarP6prN78bpKZLqiubn7q4k3d"
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
