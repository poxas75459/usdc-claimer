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
    "5yCrzJctbEVkgHfvq1doVUZByzvPrX9TDoZfvV5wa7W8KHjdwocVttHnnBBCd13uabXt3Bx2BnkKvsL6WTQmxVVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReEXyJhaFWchYWYZFSb5spA1y841hk9VhWEhw5zPMaX2tmuxJ5nm1VZb5ssMCYDL7nGZrLUJtkW9wDki2c2AwHx",
  "key1": "66Gj66y61YtvkhZP2AoaDPM4EmTNwUDxKYTpYCdvbpJ4Ffk5FB5jTAgMM5ke4XzhcAjfC2BLAn32ZNMxSem1CAHE",
  "key2": "3Ajxy8kw6jS1EgJFVDGupe8gz9pocBt1iLxojM5hb99PqYEHmSvuKwSr4sj3ZyzBmuJA3ZyumNSffGEi3QQaBDmf",
  "key3": "er8SjD79SuPJExgKVRiCyq7fvjJx9Dh2RQSZKqCzy4RLjPWYyHytjLXrom5mLD9hWwRssdA8Aa1n39qVNEjTt2M",
  "key4": "4TN7qruqLkjLYNCzRAa9bpW5NoPcEkeFtdLDgQoNuYnZkhSHyZSB8ibeLHTrvK5rpHcqWWTaNjtyCiV8gqiRGcRM",
  "key5": "NU1JLQjdVhttm3cmcSeTAVyzAvX4p7no9QwJP9DFXBri6PWQy1FyNy8xh8Lcz3QuqUhEddYRMCxarD4B34qWcqi",
  "key6": "32kPnfhEt1Xa48xUk5No8qibnxs9dXERPLEHMdNf6KNf84qnEj1TMqiWYMUepmhwoaDnFRfy8A7dcDEPqvBZyf5D",
  "key7": "5q58wuK5kX989KN4G2krJ22R6PuEUajXbwXfeZejChKsvxmMrPmW4dZMAaTijbndE78ssicnbvk6p3mWYGuVfkAi",
  "key8": "2q6QYLuA49ULWpt8Lfp3PwaeiT3w7BiSTo5uuXEExxye81c8heHNx8fwbgZrcjRc2hr8sMEWogLnjdcqf7Lqw1uP",
  "key9": "5h48Qj7u4C78FgfHwe2fmAVU15C9v7qrZWLRJdfsZccxPFUiaTApBnvaAYcmY75KS7rdvAFhsNZhMCRo7gUBZeym",
  "key10": "5WVKDfN5WqjkQWXAUN9kQozSPAM6yyZ2Pbf6iA5gbjfJpqbb1gRy8fUpxBy7UsWJJC61Dkr2cfqjvuDngy6NkKg2",
  "key11": "5UzSL846Aw6zNnGPuQe9R9tnrkCp4HYbf8B9RBoeNBNUd6Ds272QZKCeN7EkKakAbjdq2e2FyQXZa6v8F8StbpeV",
  "key12": "2wNKGzKtfu5RH7GobvAUz9qsFQw3gfqdjrrkvajnW5eR2ELFpNHT8nJy4Geyuis9n9LgCgufHnsJzk3RZE7Ndzq5",
  "key13": "6CzvxfAZr2GajVLkCqfgZf78YFwfF6KewbycjkLzHh9tdmQYRzsvo6vCrx9wEpUiSPG7zawrbyadiGi3qvSrEoe",
  "key14": "2wQ15VFQ4yq7MzkYq7bruJGJ9B6PRarZa3BjtZAKCnPAms1eL7g3aziMTRc9fjgydizP7wLXBFKFFvPtBnfbnDC9",
  "key15": "43YCfjPadWKx4coWzbW88T5D72GFNCHiexvh7c8os2MkhceHViNBG4HHEdTwJiuB3mJr5MQ46gBnWAxTJBBcTEj5",
  "key16": "4kfZzJ5y6AcEPAETE8n6Dzi27QBrcXRh4EBWacmmkPxJBb4Y2uCvLECsxhkRUqxqtEvWLTN7uCMikVUHUkqaKKaX",
  "key17": "67bDFAXVspEBst9YwNB3x9TU9MBeXEwwFYZTBdK2S3ggR6Sz5oyxEMAboJMkStB8KUqtFGh24f6wGkUzDNm7eaLn",
  "key18": "2CK6FkdCENZXfYsF8rgcWuHraWYJz3nX16Y42qtg1A679DvcD8TuAV6ehB1pjRTkaUGwQkkasgmF9h4anMwPUtaP",
  "key19": "zhQzGoBoaxkh41PVnv8NSH2yN381WyS6VE7xHM2VXcUV8fFW4jU3cUS3sVrWsm9BoMKbfFytjN6zDgubAQ2a1PT",
  "key20": "4K6dLQv2Q7zREnyqadcfs7gRn1dd4NfFh8BRfycVZDgEZedDkRUHazw1Tm9xsX2jnyBNn9V7CnoWFv9YfWWbtbKF",
  "key21": "77TmDCSfJM51WoTrwUzeZ7GLFAgNruZeimfb5Frwwoy1pzscjz3PJAdeLsBBpdGUHTdnEcAdXQCjLErK4eVrbra",
  "key22": "3VCKWY3k9YMbEzGhH6avqWVkK4EVWek6p925wXWJm28a1LX8tt57bLHCBVtYUZzW7oAXz1TE967BujfTghmPjTi8",
  "key23": "3agQ8TNuUYHJq8jvRr9oTs2X8dzbLxvhjwykndLUK8ooxSMWdGdYFLDhiYzNYhf6ZTdqqVeTc8sTYJgyLAWCY6X3",
  "key24": "E8wkGy7A62hYyH72cetJFbkUiKntKavCP9WmbNT1fH188qKkurqpS3pZZbnpopAGUmBoF2b9b8g5aP2cJgSY93L",
  "key25": "nT5UbdubsiZEZVC4SKY4kZrz6ev2E4u2e6hRpvacMhTfQWB7WuGCdYit3ezXVviWooAJQHmFE4KN1wex3xA4UcH"
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
