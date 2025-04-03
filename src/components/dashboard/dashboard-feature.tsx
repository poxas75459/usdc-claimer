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
    "49r1FZQtGbr5bLiaMh21UGFvhgoWrkLuo3utXvzQHYNnVbUFeyTzrz2W8p6TDrxXZD7V7Vcoukz3RE6xanCpgDfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bxg5YFvNR59FrcQGPxQsRiRRJ4iEpqQxuJmvpF6ZxH4KPVqbsJtu7TRH6N8h8Xj3AoWPQ8UyyZZnJwuKcmVJqht",
  "key1": "4zisYiqoCnAtDMSXpKLKt8VjJ3ey1GJ1G8LCmdDGtoBopQ7HnnwqTnMo47tYn9NzHfxh3LD4N6pw7PSTthN7tkH4",
  "key2": "2W4Ze4t4W2y71zdghRcEtoN3UeE4XDcnrDGrLhvnCN7ngjwxaobUik3fVPuXHzte5GAgK7hQNEYgyinUHyTWCyYY",
  "key3": "5iRbtb5P5Kk8f3fqs2gzzoHodixD3D3Se7vxYGYJZ2naEk9fvNTJ5iroNpEF7Z5YenvrMuRR2ibfLeg1bYJ7mvwU",
  "key4": "3EgRa64A7jMt8BiSUKMsPYYrigbxi68nbeTvES15takmauL1BdSC4RWi72Py7Tj7vKkhwHDTDJU94CFJQ2bohC6Z",
  "key5": "3BgQsjufrxXiDwabZd6gEi99grbHsyLbkbJEQnehLcgWj8kuE5ADvGwCisXvADj43X8gtNArHXLHx7WZ9GuU1MZN",
  "key6": "3bJcZD7qv8qSnKBnTLNBG6pMjphjN2TawmJLxi3y9NRm3ZHC5FX4WCYF2k9TA8SoGbEGdhVNjPKSFjszMwRz3Jyo",
  "key7": "5fHkEvabzqQJyAc8pJwPZh38oHG94pQ2yWoVx1aqX6pidZJ6o3trysXCY8xsLpTjsnWAFp1MMEkE9XX3PHBx7nfC",
  "key8": "5YZBMHaXAxYHdVLZcG4i5QgMpZGbFz1T5huaKzEhjkhLZEBPKsnxwweqGHdhf4qF5tiHcEfhtoG9fkQggwasKiyU",
  "key9": "4z8Ug8xoyBneRvHSZttTNL5gJuAcgd3spK15sANTNH5H2zwkAmy5LKeb5H6jtT1uSUtxq1HjH2NB8yka7JckFhkt",
  "key10": "4URbBvVrpDV9SzWtqoSep6aR17CvRn4NzB9vTAMBs2VRSr2RfGyiEEk7vUyS7PEiW4oo6Mj6AAeAegzvpTmn1CvV",
  "key11": "4W1WSZJd4SL1vJdMCkduL6eWFezqt5wpQqhV7UACHdFnWw2jcHxBfFicLBJbikic9o8fgZ91zkEBpKHZVjZNSkcA",
  "key12": "5BbYZv7zK1tTVnRgRGWV49m8Fj4kLUm2zBMkL6fjudzigb7scipm76P6jtyu7CdPyGzDLx9ftWRAoog39s3E9UnU",
  "key13": "3nEzrRf1Vh1UC5a8vHA97BfSX8VMZPntpb4Tr1bK6PmKXHNYBvurV4RrnjmJZq9mwjRWGBnjPzVSqjkERbLiWc1k",
  "key14": "3jdmr7SW9RSaDHY9nThgHeApHdrB63RpmwxSyQaRDkgeE5Noj9GPgLczwD8YafoLSoen9RBXYzyQ3BmLgMjMcC2K",
  "key15": "3mV4zXP93eoB2kapza6nRMnRFCy9sSig1dBN78CEFbaAe5oqeV8ht32wEcg1VxSkK15GXFEqQFmiV3g3EJykUVL1",
  "key16": "3aJpvyamcuGNRvNRhiGcxQJV4eATRb1B8S4RbALHByesBsrfZKVRD6QE6Pc9AGqdy6R49ZENNd5Fc2G71yL9tdDo",
  "key17": "42NKoeh8nCpnhSJ2mWDrKfvs7i4uUMTXMoW6QoSzjhCAEhkHfdwwVZnwd86fmu7vEqrJXBiUS2gRbsebwMtDRATo",
  "key18": "2W4Q4sAXwX3MUXfheoTHE5WaugPDNvoGyyuACSW6yRFwfuWXbeCy85rowWDfvcXWgM9Acfu92ZNPFrQqqXpuFm2N",
  "key19": "5dt7LVNVtBqFbEvR91F1PECxcgo5jwhkkrGdWUaB4SfZXu55Tk4pGKL2UTk5n8H1wDW8XtLxLgfZGGcATo17T51H",
  "key20": "5Fc8173eDmX9WcoHTCmvKGz8vbi2zJzrnu6aANjWs9AvrP3VBH5NEjMAabp2sZ8Y8n9v4Y9LL75yB7ttGcHVXs3N",
  "key21": "66ySYCM7KoNriQ2u4G3g6oQq1ZEmR7wrxNnAUgKxTAUYkisJ1EoXtCdPQCcC3wJYUV1ogCz4Z1bez9iDhGdBJyeb",
  "key22": "3DfTBvm8nTVFDeRGVwaWkj9ZzGBwhmU49CdHsKT3GCRNcEyRGWNMWAqKyQRnWHhyxKLTQ89PpJpPKZEmoKimyWoi",
  "key23": "5ZS7Jmyooj5VqNi2genEDu7V4QyUKw75h8JCsJ1X9GQJVMDFQ4CvqWV5h9j4kHM4j4NadaCtDvp4rZ4Z1fRypCuo",
  "key24": "5K1ZhUeXEuKBuYpoPUfCJrJ5HqcDhpvppbZkfLzJpYeW7nDG9XLUgFXjjc3ZApugaojonwvQtRgxZn5f6wsVkPjS",
  "key25": "2nhXK16v1vwwNsShRWzdHhGsKXn8ie3aW2TgFFExzgYfL4C8DMVRLtVxh1ZJG4EhtFfva6s1c6ku1vtgd2tFuzWW",
  "key26": "4Mp9RtkN1bb84iwCzhVuLk53TnjUhsG1p7pbs6jKppggpBy5qz6jkV6CFSMikAPdUwJpR5qVkutLbCNW7hWoDzwS",
  "key27": "4gDxfDKWmH5QdwDRXBKezotzch8te2f4PJLizBc1b7KXAJFyZhstCnWz7R4TK5dfjxGTUMcssRD6dZrCWcG8M3vf",
  "key28": "5kEuwxKAoRVVc2ra9KtTyBGwnMH9EkX5uvvuj7Vk2Fwex8o2iejKfKwQ44zkTpEi4YLm8bwQQPJdfWgCu8zYWRAx",
  "key29": "4JUsaFkPhcTUfANQQVpcf6u5YEL7u4NkCZqvVKwNJkWyFiof4Z6YusB1qzneh1HBTF9tZQjqoGb1DETxFa5jEVfM",
  "key30": "3gF3pALzTLP56L8th3zEo8iKcNGHJZ7YEZSDUNkfNuJMc11FkUyx6bLWXqLKXWHiCcoHmDed6mZg4jmZj7fKHmfC",
  "key31": "4rv14aW6Z9RJh2W1NHQ8mmvngxCCypDTP4RnNNj7KsyEGNkeozTRhJXmpZaybBkB3ThTn3Gx8iu1u4bxiYaCh3ia",
  "key32": "5UN5Av2icqJ6NXBok2FNx8UAMzk7ECDfEZnY1p1Noh1dtn2YCphsZPWyNHr9n4QHHYWzsECoczcMZGRjkVwnkahQ",
  "key33": "5VryaNbndGDcZmJCK2UsR6WwXD2DpsghXdAAyy4cqznLUaEj1aPTWcYa5ekBKveg6owrepnocrTcE9t7xkuscB5w",
  "key34": "43Q4KtUCcF1jdqDYwkjQ3Nc4XBzKWbU4XEG27dgw5AYGEeju7yQJmEU9EMQGr84dR3ieqP3Xa2NALo22NyZ3EdXv",
  "key35": "5Zuq2WtTg8DjzyaX83MsCEY88cHrtLSPqTF8Dpjuvvr4eA6vxSCEJso33yENNmdFV2mDyEoAQymb39gQJ3rSY8ZR",
  "key36": "fxub57GtUdraszKc859Xd65auVDRktZDJCQEXUjAhhYh1fCQq6jQmy2S5fj1ye4woPS7a7amDzkQSDP2vCyLaTW",
  "key37": "5ebZvpT3WLEqgH17xbqmeAoi3pr2zjnydn9RgCYczCDj77t1BCVzov1eUqMzgFJqw7oYL9MKHkQXrbMkQZckDwHM"
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
