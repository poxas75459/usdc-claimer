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
    "3JjiJ5zLFtueSHJjrj3fuVrtbyxbEtcft1UPKqoQrCYJPNT9dcETwZszgRPWcqfhCsU1x44bR1gjhTmM3BzcM2bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U9Dp67DcEs6xdLdz9Yk5WdR7T59M4gzCghgYDKBjMVT1QF9jwD6AoZf6fVrv8BRxyFYvZ3DJxD1ifoZaGAX4q5C",
  "key1": "23rajp51T4o4q8kvkRS6ixS8BvCc1jBj3BWa7qH9uByZYRxndMAgwDchkGtTsVEqK8amEr7Nu8SYM5CJLiQ2encE",
  "key2": "2rk5osgS6SjK2TanpZ4BeLdyxzKD8RwjPGLrVmvhWdhGNEmF8NhubR5nU6X7BvoxMo6UuQ7tbaGupdeqvrjMpe9e",
  "key3": "5eJrxiZutEGWyEeRVPEuK66Pms2rUwzukGqdQXZrmERDvYYWZLvz6CEW54fQAYDoZdjfSjKhbjDbUoPoENMV6nPK",
  "key4": "4KdRtA4WH9SqX7qyz5niTmY6D1orAW3WYjEbjEL7ms5aZUkhiy5kSkXoqvyasBbfPHCpm88thf48pNeAHCKjGNmS",
  "key5": "oEcmaGwCFNEn9iNsXpxNhJ5m6Rg42wX6tnMnd7znFqPWH1NG5YhvyDaPsNLXtZNqacKjT4gjRbkWBzQFQji6aQL",
  "key6": "4enCuNLqEuecSyZyfdYJFxiGLoA4VzAaV1V2eWXxnCHj42AtKgaSAqvFmB6hR8QC1rw8nVBswLge3kKXE9c4u8As",
  "key7": "3b98wppLoZopre3BSziK97oUUGKW9Y5gE6uwPTbNtAZGgjeEvonwKw4PirqezEy79KJ2Prb56Z39EB1aPt7WVeNh",
  "key8": "52mzabZQa6M9PGEULGuFoF6svCEiybFvnM8boRTacuxvBE5VKhno975FSA4qwP1pXkis7jBtavAYvBB9MV7fAjt5",
  "key9": "3j58Geh25rWyGufyGV8QfVgFYBLfBbekNbhHCi7Xiifr7sdU1XoVA3hmW3PgqHzU9akWf1iPn5fWAym96Gq4tTPh",
  "key10": "3FrjfkixMoHZwREtbyBPwtbvj9P71TnbHZ3AaGoihBwVkjXyJiqeZzTpAUbBFqDX9DNRXdJtHhERjLaSfN1x3pLU",
  "key11": "4Tcpfyvy8SFJh7xz733GNpsoY9a4Fz9Tdhk7HGeBoFMV3sUqXs6ui34NJF6VtkNiWRqSQj6VgBzfw9v7Ac6F2Awr",
  "key12": "257tedcqxJVvP7uf3TLudLgS8s8DVrZZScDnxbV27Xv3Pg71e8zYXWR8XSPRV1cBrGPuwHV3FSRdEWP5cgRtUsrZ",
  "key13": "4Te8tXUFrBiWyyT9D5v45tZVG2yTPL5A2JXz7eoNWBktBHgoXMqdTo9R1MXg4Zq1f3SQQhZR2HdhL4y6kFnQ2dtV",
  "key14": "2qydR34xe7fqXG89mqvMUwLGbyuoqY71DGqHyNEYovnHKBWgCZgaUqyDjbvrBRY8MEkViQHy1UDZSRPt21YJq6Jd",
  "key15": "4aDLqGNEYXqpQn9Y1TCRGNAaApngwb2rJY28Su395CcHCFh9rsKrdF2fAzmjXWLXbWTZnsx1UeNPpUdVAsdFJs5o",
  "key16": "3T9sC1WrgH1p66bsDgPZbXBVeYsS3L47ccu18Phw3Ztgc1TyBEDLUisQwQ9HYNBzWWatF8R1Skg2XEntrNvxkDqR",
  "key17": "5fYmjn16SywxndjZ9J3Qz5uvsoRFFcpq85w2boDraUnkg3ic2ssyV5shb1Fg86Sqcwz8n9q1WoZycjkjeXvdFoeB",
  "key18": "2Jb2EBHhqChyUadRW8SBwxwXekfoUVvREnu2ffdheHrqmBioMZCFo4KyZEjjNyy9PNkdLHs5K7VWcDLdYynGf81h",
  "key19": "56iG1BUaGq8NvQwsnneMWZcdqvM9dLZrKSSReKD8vmekeArYY1u6ZtoaXfbnz18gx5rL9bwm9WWQMTsLJQGDAS5r",
  "key20": "5p1T49dPH3qJ1jzb4Lmxs9Sj3S9tExvUjibSaGUfhGYYZ1Y5RjQyKQgiaMgijekCFXQTioDGTMyUaknSJCgDKRtt",
  "key21": "2yTyhFanWxaJJo9mhw9zEuktRGT9CuzS1CUzRhwkvrvoPwoA2r1Dho4xFmzMvRcrKSMAucVMbyKDzJ1snUuwKqcu",
  "key22": "4hVPT1KZzvMxgeyevFZpMCZ5Gg5NTBMZXp9doTYSoSkjtwgNTMPmExaSdgLSQJC3yQWUqbYFMoc4vM4bZCQ2Yqgk",
  "key23": "5GM72na6tTQpbkkwB2sLEkhaMzzT66KvE8r4yX1yZRwSqAX1Zz2S4RCNemMiooBiwVteUEELdEyZ4ZHZYUFxVWAp",
  "key24": "4CZWzmh5K5mULbiTfoK5HibA8pZmfBwKBzZ3vaXnL9MKjwTUnqPmYBWY447LeMUpPL3NoUj8oS1AbRDe6jSPKUVV",
  "key25": "2U4P92rALXvhX8U2VYaeaGb8Qtz1yT31fkzBYwaDaDXHKm4cLK2buEKFGpSMh6e3stJjRFttbLcWikdDuqojf2h",
  "key26": "59ZcdpqsbxiHkD1qMLnFYxv4n4oG1dQV4BLFN3fUxrVdZg6ebCzwTSDTVA4pdtr26KH1zWxZeEZoQJxEF9LZU1p9",
  "key27": "3UcBj114H1vgz2L6Lrvh4yyadY2a1Phv7pa98W3qTuqqiyPeuwTSA47FQEG6PyL4z6Nnm8qYyfuQBLCCeTdWzwXg",
  "key28": "2QU83RvCgvUQpLUDezrdoWjokXfXErdT7fV5SNx1awbyh8hTnuNtjWrthEoHqaXPkTdiJDJobNMtMzhqm3KqYiNf",
  "key29": "4cQTET2cbQ9DFR8xVAChSpAD97fZ6w3WhC9WaSngHT7zABfNTR2fna9XN4wjS28mjsjSpTVnRN39M78kUnm1b23B",
  "key30": "2dQPJdtwDJ34Nku3apzrtUWpShyP9hXWp3Vn4YzzVqFPhGWid9eayrZAHXKMgze9aWvYnWVCsXCTGL8XbDyQyiJu",
  "key31": "218dj65bxPsC1KhxLTGfcX6jFNNsJydMvbveaw3vGXBDXW9BHymtsfsbS35JehzvwLM3hjy6qADhDxYb7TLyzBP6",
  "key32": "2JW2ptfp2QfJ3aGW18G5gDVu2inDwvnLJdQnwhepv1LjAsYo8VkCErGcHBTM6w4V1KptNcnFdTj8zUUs22G9xv3k",
  "key33": "4juDVweAR71gh43UvZG2f6m5k1zJQ5rsimtHhCHMNDTbsXQF5Hvvdz7NGpNrQ9aosfpY1LbKZQV1dFKV2yH6vwGD",
  "key34": "3zBdmmKyx7nyFuKxC52x8waMm4URoK4owKYnXNvWuCqAaVtp68tVXjFx3KdNuxbVxU11kdxAT79zwBxfxvMQrwov",
  "key35": "9jQ4B1hDBR6GC8egWrdAxZMoGKEkw9SibUQazN6sZXmr4w93mDxREid8qxDSQ3ppiMZdXEAtgxaMQjbh5DHXkGf",
  "key36": "2oyRTQQLHDDhJap74yxQ9ahUG8SEkCHef89kTfxMkRwfkV76YpDBDLKjUnxn6CxhLX1DrovssfCShemAVahKxieD",
  "key37": "5jEgiqKxXYJa65QKCVy4wyuUQeSYgMJbZBoHuhgsQqwKErbCSDQBA3jfVjcsjVsgWpMZeu7fxVUta68BqvWLNQCG",
  "key38": "63Q9MsmcB9KSRV83EDFmbN9q2uBR7Df7dBSx1z6pSCX7pXehyi3ViJESU7f3rD3k8ZitEiBSwUGsjvEx4bn3pgqf",
  "key39": "5grMPiFgRCZ5XQU31suBTKTEndXaQc4JqwbFxGqNETUfCUEqLSsWZfzcdj8zC8JUsfqFXxGwgKzx7gGMbi6qK5oR",
  "key40": "5Q3kBNdjwvVJp7FhdpwxZ95aSeNmjrveAzwnVAf4rzrB1JWatAGL86ViSh66GjEDtrAyxGi3AqpUmYB6uHRxMkA7",
  "key41": "2FPGU8VKq1DKBabT1q8RDZe1rjrBCRL899WYWQMNXKRvYzAhJhyeJ8za3N7UjT2P6qDcLR48ZpeBk8RtMNaKR67g",
  "key42": "3XYQrCC9bU9qBYGuRaKRepznmzK1h99UYSP1sFdUjo5BR3edWnCZN7wxZMAzB3QTjZzATmaQgcTcGhPrPXBJ7EE9",
  "key43": "5b5kRZaGN6WRzzhRtT6b7eM4k3F68ev9xZicvBjAYXrmDY2KAUPktS5d95iLTmGCg1VbQSnsqb4NQiiPdP5UeWvC",
  "key44": "bB8EzBwiomuqGNwD1p8P2zg4B8utnstHyQtSgRkPXiy8ZAGEgZp4BSoTXcbYKBxeCBERPtBvHpabk9vh9u7oPcq",
  "key45": "3fZk1SFx66zqL4DBasKPpiTev5ybCTTU4g8eMf72MSWYSjRBZD9ACyB2VcojbLACQaq2GeLW4oDY4CYqdS1FSsy",
  "key46": "2qD5PhjKUFAxo1UbE3mNGxKdix1JiXqhiJXxyyzuNxVp2hqAjE2q7WJtF7GpUzKsiwHB5gyiji1wjVF5m8YmCBEw",
  "key47": "5UH34fEvrp9FBmCp66994aZkuWXWFhAmR9dnseMBZdTTP9axzUAZm5yAudksnrjS4nNpKMhBUt69NC9sdrmmPNx6",
  "key48": "3EabE97TDCRqop8oXfQP2tdjKMkj8Koy7BSq6E7sSfQXkLYhci1r5a4WPMukYTLgs5R9nWLbLQQbRirQ566fP4KF"
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
