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
    "32bpJfBTdL6tjBk8XB1AcPvW1x2F2R4Bz6znwWmrepw2uHpTUJyJcU18M4oWr4TLbc8SSAWBrEokr89eG3UvwU6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBg1pPkYhWMoWLAxJsuvFFCBxnU4oUqKJxWDhfFHFLseGj8cGy5PjEoB2dr4BpvhaqoCuM6GmQbVyYkrCMp1fgA",
  "key1": "4dKpZ6Ervxzxjny8fopesWoA9j3ie84JycK2rd77DixGERqb3Sw87Lknq9TPNaeYP9N65qte8hAW1w75p8eVoPjU",
  "key2": "5K5UhmJ23mtD7b4P9RSgfoKQDzau5BRdiHDyBGbjNg8rQEC5EcQ9ug5qnz1f8bPr4dVZuyCmTydDN89xDZswqpox",
  "key3": "5mswYFvw7wZTcpmWf3u5mtHZCv9dgzbdZxpRJG2EfYzdBUPahq3GfvtEoHutEdJoMfYJ9odDATsSKFd4XyC7ChdU",
  "key4": "4sWC8bKvUp65a3BiJjEvYwpTpQ2e42VaUVLKyJ55GSFDZC2gG3jZkJzUjpxSWyt29NdS8ra19wDsUudTxCCiLQNA",
  "key5": "29SFvaexEtWApAQGNFFjVN6Wp5sXbW8c23hqLBHEYhXrjYwiMdN4QbczHzwjmoL5AFs2i58zSt47bxc6J4AboDgV",
  "key6": "2fQX7TcbLoFDRkB9VS447wq39jfVDf1iL6me9CLbmsVrYrjgio9QhfjjqbpB2jmcCFvgrVTUUg7wVhFDApfBDnCs",
  "key7": "2UU7XSHZpmyFWCoWjc6w4oDCMsEdXhXx78RohckbJauAYaBPSD489H7UGzrboHCcQT6ikBW9AfSVhi9zp41LqCWv",
  "key8": "3ezg5fHfni7NLZmQ4A4GYpQFEDZ6Uiuv49bbnNqgVn8SagRHvtYh54GVX9uV2RHrCvisBo9GzY8WFSmMyuLuokK4",
  "key9": "35eqso2UXYDEVrn4uFVcPZzxiaBpDsq14bRQ6TzYZvHryTfszCKSAYYJsi5fuKWKnoYZeMNptoBuwkzaJDh8VGtg",
  "key10": "4RCQos2mcJLzfD5eJf1bCR3s2KkukiRzUejo4myPsEYcAwZE6WH4kifA8ds4Vhmp4KDpczE3bqtZX9RJsT8xtTG3",
  "key11": "2EtnXU62imtiiJhnznq8QaF6a9t5r3THjuuj7ZSjChoAVMDR4Mua2Exxy2iUiy9koX5KzARaSjdf6e17PLXECCsp",
  "key12": "mMS89UY73khgUfH9Q8jef4UckBuVufXVQEdXD1oXiG5xkNv9AjdMkBFqrq13gTegFaKxTqCmMaTJDZAx3ZdmmjJ",
  "key13": "67Ldj7S2x7QYY12ySaAVoEeJgUcidiCJrCwKsnGLDba5rnrP4vyqJvKAcN9CkrAbzaEFKho3HoGftbWowtHHaWYK",
  "key14": "58yJhjgQZHv3VbZVMF5oPEwNpLVJoxJwCRuRqqfNSX4F9n18gc7wxrK33cnXBSpgwEN13drHg7s8UT7maQXtxaPL",
  "key15": "2ovXdipAy8u6mHy9JLeKGAnxhiL72HuEwXWk4WeqWPEwvFH4VtSPjXJEPksZ4pGG68bmehLQzkrxem4jdorD6r3C",
  "key16": "2mzR3DJQk33upVdCwuZibP3d6ZzCSEDKUCGJp5hRg6iyknqQ9PBRtG1TEuiizQQdGTFxKt6PYNJmJUpuFrEMALHL",
  "key17": "54KbpDEprM68xA5q6DT8AnFTMuCtHd2ZWtA42dbABcxotv6gHtbPVV5v3Ea4mKpx2UV3JoVhHKSnJtUMmPAN8i7C",
  "key18": "5pkBzrFMAbFdoReeNiy57mgk3M3ch9XsHiVcAwHoqV22zWp5aoJtfoG1Lh4R8ymv1VXQEL84ZZ4HJ1ryNUwmJmy5",
  "key19": "3S2DjvWBxhWZgwqt9mhN3TzCVyguCXnTukC7P76DaWvnTF6RT8wmsMSLBbwwcVSH4uFdGuSKCiT22DPMeF51UwGn",
  "key20": "HA1dUeVtfB6bzfx8stys1hdZwAXXEJ7YBc8MFY54qZJTn3HMwATEUHKeeSWxPBcUnysLomf1biA9g1oDv2gnMAb",
  "key21": "4RUXV1mtCw8Jd93BhYmX8FyWHrYYoqL6xE4zhtGdkwzLMAzxED3kpXBQvsXdkbJQH7UGwfUpYujaFtgUHSoVi9c8",
  "key22": "2xmh4dyK7JyWTRgJKh8GuKPCyGjPjNQs2eSqJ22GTNmcTCSWWX2i1cn2UTcfMfHPfribaYT6Ewa17pmu9rez9SwG",
  "key23": "5fmSxuTxCuVxt3XfTvAGkUGFd8Wdr8BhF68mMCV1s7eW6an9DV596ZA9b7roHUJAJE8tjCkU1Lo1WLj3YsD9oibj",
  "key24": "NgsZ3RW6FNP9cnMmfWCDipDHDWFJHAurL6hYgNGoRppTjGdDRCxCFy9i7zaKd3ZF2kQtMekXM33u82aXr772Wwd",
  "key25": "5eYPwDQDAG7uLmJ9U1dPPjuHdfS5zP5SzaxMRGLqv8gJunWCgQJ8o8SvomWzLJXkZYq5dUTDxKiWqF8afyTT7eoN",
  "key26": "5t4xPCEFvnDutkA3SESTtH3guLEdPRvAmsqUi75uABSzVaeHKQ7Pdr32toLrdEZFjisT9FAStginowF46KPMAEHs",
  "key27": "au1NvPMo2s63k2REvqqXjPuLQ5HVgXG6gHriH7U3AbgzXqbVKkb3P2Jd1fv9REqhji47K6vQYwsQJmqN18n3VRC",
  "key28": "4xELe4T6yQMcs8QNfYhHd4qitqzZhmStaf1EZf1SFmMJBxysvoXwgN2ap3b58wv2oE9FbQRNMSafraCRWWb7oDkX",
  "key29": "4XDBdc1Yzh4dHNh5GwYSiyfZdYkWcM1QW3PLr831d2zzSY9Ky49mm3mr9Dfes6n6GNC7HwRWgQWXgvQefcuLqgx",
  "key30": "5McZS3DCVmSTwGePP1zitke4qPB7Ue7P2KcqrJPsxeppBYQCMKP3kGRtAqdPPM2HEA4hPZhKzuXzHuUFoXw8Z9r4",
  "key31": "4DUQMD5XZ8sCMCDL6xJeD4CqrgNETDnZR1jfb4P99MPDxvxrwNQBJkrDjjmcFex41Qa5pDghz5ZpuVVJKC731Zjs",
  "key32": "32sE9SNU3ZwAiV9Y2CJ3ZCaJ1hP1rgjo3jYrjiWAsoKLuD6W6vQAJkUzEgvVgE1Jjd1mSdDokukJEP53NW9oYpky",
  "key33": "5SeiEMD4MzXkng3dRDoMPT2ZjycE9kkiHNrfb6vCrhvXQviTjVrsSC5RrB5hzawQaZ2C8KM9ZdBhGQrctBaAk9uB",
  "key34": "33f2KEmRqty6jY2nsft2e8LjuGAsezs5Kde7fapnyT1DRFr2aMELDmvzYknan5J8EzDekj6kvV3foE6xAyf2JJGs",
  "key35": "JwEUFLZNJkWJvhQb4jzumCRF5QvZnkFBdaWkvaHZc8D4jHSjA1jiGKuqdNMHa9iYHuGAaWW2c4udBhWX3fq4N1h",
  "key36": "3FreJNRP2zUJby1wdRAHkWzBvpwzh8RrtBGHpkbJaffoUtpxfAkn1BxDD3qJtRHHD1bswPMgE3jNDFYD5PPxdzmy",
  "key37": "65gEv5vwRFraZsGHUHKuw6rhcCHNnFBDd7q4Nw5xK1DEN4UvcYvrTWWKTfzE8QSnAa5E8rBN3Ag3roD1Typk7fm8",
  "key38": "575J4a39PTaKm3xVKqN7mT3eHMQWUZK7e22fsLL8WmXD6AdR7MoZGxezE44jBAQHr1MigKqAXQHL6T72cLpNDGX1",
  "key39": "3xPmH138cUpcJmJBrKvzsZLoA9Fectd7VnHE4kEDFZJMZiKnhDp7xPx8DaS2wQ3ED6aDwFwQMeoB8YhW8jzWaETw"
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
