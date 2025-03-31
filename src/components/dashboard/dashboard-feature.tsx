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
    "3NH6XvRWTgM1zi5McTrMYLPwuMsBcc6MWX8g1N1nM7kDmy9DAQTVsg2yqqgaGUFtCwfa7f3GUe6G9UkfKQZRx8o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMGXNGKafk5DTjiBAYK2hpgFrW4QhprqzZq1ECpQLxhVSqp83QtfRK6GfbyXjjXBeZXjb6id8pNw4tH94tomarD",
  "key1": "2TmMZHEycSnqoo8gthr7LSYigiNPcDyfbqf6Pj6Sk5ZXcxPiQQX1gB9PdgMcwbupBFChoBUk2H9XBrvkYjF2PfX6",
  "key2": "5YbxoiZo8R2yXHxuMzYr2MJaAPj3eUG9McF3fuYHnGzgu9RgMXnvitnr9VRVSFVbY8AUyXdao4GSNSLzgxjdrpVR",
  "key3": "3dZNBVC9aR6kWZNgDyp4qczodmmrmtgTDPMscjwFx68VyyT3s3oqmrfMCoeyX4WJ7E36qV2F1mVNZ536xp7umBnE",
  "key4": "64wW1Xu63nebmbv2b9xpqdcrgKyMpvMDAp3nLWMTURE5YzT5z3YoQw1XsYY5JPjvSZNtzF4jRcKFBBzDSzQG6Ef1",
  "key5": "4o6yeqRy1xsLZrbet41HvjNxuasx2REs93AuaJMZcZZ5esdPW3xsQ5NPybSKBHmAnvfU37iMBd1bPnYKy4Mg1J51",
  "key6": "qgnCZZruEoB1SiYngBQ2vJuYfWNf9oxxHWQAwy39z51QV8L8QgE9cvEhhDsctpxcVswY4Ck8ck2AW6LpNNACFZV",
  "key7": "4E7v3eHpJ4tTLDdTV1sfVXardWyDhMQNuwnZ3ojPqcPeFzVjY8tFqmj7o7zp5yceb8BD1JZsbJvUEwCdZPdav3WZ",
  "key8": "5NSVrAuV44fiy7MhnqZrR1aFwxvLu7fUsVb9LRyoYE1wUY1m5U3ACo3Uz6mk1QhtqFiMbqPsHhkAQgSdH9uK32m9",
  "key9": "AJ4KPKVECmRpWM1BpZtxp8ZxWx9QegXbBRgXFyngkxsz8PMPV12nVXkRhRV1cyC2kPdszq9hx4Ajpoa8cGMHeKe",
  "key10": "46yNb9DS5phxc3aS7iRAHfKN8wzpvQ8iurEsMUB8xDQWxGTrmNnJGV5ECN1UTygoF2SoA43AvqnfN5o8vjBy4m7N",
  "key11": "43SJaG5c3hTEtabam6DqnEAzW3MCEMQqYHMBv85HKaUbwfarsZ27FMSSuZ2AreRuxUgziHqoKcLQoLFMMYVDQiEb",
  "key12": "2oRwZJH49qRDhrDAoF6y5mowVXD82dSW2DoVRHfiEKN5PBUY2fU3p5QX96NkSbCEECBFHgMNeGRQXX3ZjGYeTQes",
  "key13": "5CvHxJciyTEp7hKkFsS3cpKU9ThV7uyUcw5xcNq1tNTsbgmY3uvC7m7QWUhCgpmZyLbhBFiSKFXyhx3rmj86pLgg",
  "key14": "5hVaHXD1s8ELjnrdogFumxwLFefHbwp4iiCptjT5Qqg2vvS1h2hkopNJ4iA4QmhQuJqW6qEkevDxFytGSJCJ4JLZ",
  "key15": "3L9u3g8HUuzKPYkuGyWt4sWT8Se3wyArX9PAAYtwyUr7aLLZAWr1dgMjTE9eqKv9MKcvTYEF4UXDGaVUcVKnYtGW",
  "key16": "66pmVuuBYbaUXpjKvChAcT9uxuaxWYNo6LnVVJu2KAtBgWegfSmpxdKuzuYRGxgwTvn4HTyyoPuV2vnFhgxJ7RLe",
  "key17": "2Uw9xfqVaq6jD4Jh9VFTTCXkNbtshzdZWKvLnt6guDH1ugPDTyyGxAZuG3bptLdB7jtB7VyVjtJLF71LdYCMky9X",
  "key18": "7AoNzbkBAH1xEf1F33hD7jwFEB4cKeNSrhojojnZmGo2TuQUePYhc3x5M978ENF7RULKQHXNEzi2ApyoMdUqrCc",
  "key19": "26gnDzSv5SZU1oDEHbqmoxHEkNPNgEh22iQisbvrxfdRr8j9QfsTFSxTpSaPhFVvCVTjwJdVc7LjJ8rDefZHQVxy",
  "key20": "2cAG4ztUxcFa2hynkeB2EaP78DmdsCjRKpiYkhpKFWBj6DPEuwxjjjLKd7bkZ2RVhSye5VvLr8aVUaxJ9qgG4cYZ",
  "key21": "3TABYjSWRXJYfBf9kma8m2Q3zrytQSKwaLQ9Xj8UoRKuGekwhYycRqpmBLy4tDttMCPjKMu4Ab95Z5zQeWboD9Tp",
  "key22": "2zDTSWUdHhTe5a434bFNaoiV5ggeR1Ds5cWpPwUaUynQ1CkFBbwfm7RBVaxHyYZUoWSi9mCP5MEv49aZpiVDfEbm",
  "key23": "3vrPGwfGYnFf6EV5DLE4qURssVJtSNzmgWU1oeSo6MY6UZR7JmrpsuW3fV3g8g3nxepdV9RkdZzqo6UK25XWhzsG",
  "key24": "54yaBKajep1uKLnA3mRfR6pu2demWEyzErBF13kKMj82vVsoYWjgRNbdGPhVTtXZoWLssHkiUMBiepXmnwCCqNSa",
  "key25": "33tYHtk4mBncBaC7DPTimMFuctwAoKZqky7coSVpMFjpv28vun6sgMcgQCNwQs5hiNwniRTLcUVdfsc1dkKt3QKr",
  "key26": "HgpyCqt6VRwS2hwe2h1cNE8iT8TwcUWwW6SzFgG4CXHmziC4wSfutVuVyWiQANbj7XMhK3XnoMGU7pSZTv4kPky",
  "key27": "2ZnWTF3WymGrxRrvURzBnrT2zDYbksoKGdgduj62AKmApuGhYC7pWFmf7ugxLkAU6ZUVmB8uS4GfZM4eQA4B6SnA",
  "key28": "VXdJetYNoCLCGpVgH6kZySfW8h9sSUVXaUFyrbwDVQcs1F6bmvcH57SNYitLcwfhMzHH1smuZamFG68GmhwLHdV",
  "key29": "4enRzmpf3FQLzemjCQUXGPz96QVTssPdGQNki37DMhsdLfTsW45Wz9wME5aKrkgSPoVRjkSMHe3cuAW13fVSWzPX",
  "key30": "39Un7HXmMPmfbtSWu96nPmoZZhPnwZrQ8cgNDH7RiCnoY5v1Xq4EPFhXoHaA2BY7eSe19RexnVd7Ak8DapireGtC",
  "key31": "2FYj4snXe1hM7bfvXEspeb5abwewgAHPuRzk1YptZXZhZZvfEJt3jcdBsTkSFuaweBMX7wUKA7YBYXHunQjajw2E",
  "key32": "4cEcSPy4fFvNuu1btfPQpeNedogfEdqUyvAWW4vcVD1oQHKofewoU1BYjp1up5phznf3k4AmVcbB7zCYnymaWPg5",
  "key33": "5zaPgKREmLcM2ypwT6TrizQ6hNjbymDDUxEuQFEcm7ZFZTuVw6spWrVeY5o46jnW5eEhDDrqWoi4wPMkaDtqFwJc",
  "key34": "5xRv8Hxw4aqMjwpdWAQ4ZNpPNon1hctu9jS8gE3KJWdbs1Kar44ekLfLtoC73CMbubb8vopFEQkFVDBJBj7bLycd",
  "key35": "ru48Xq9c22267KrPCSTgEo4CmymS8TGYhKP1frPECBMLYJgsfEAjEhpPmbizsuHzQR2zLoKqQCKGxNe51wwmqW9",
  "key36": "5uadBQNDLjfQ85MqgurGif3SdQpAsgFKCjUSbpSaFuyNwM7SGYBZzou6tdB4ZH6Suxecv2jRLZMuQZNcovyxkooi",
  "key37": "4diX9MFn2dkoPr3FDkqYBwzUG1he1xpWngRfvdX5PbLo1DPVvjQQQTGzsteJdhF1Vj562X7ex4826YP3yp4vNcvr",
  "key38": "3oGofyh9xj9Pe1Gw5spfY9NvqvsPhty1YZQd7UotN2HC7o9DjP7AF1BgypT59NyDt7rXAAQuYjj98bAMBMFZLsWp",
  "key39": "3JSDATAAGoxr7NaKtAMnZHrLFfEmR1kX93zX2UXuqwwtfJtYoSRdaNtf4YGX6kA2SrVLYPhJXR82VkveNzLRKQiA"
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
