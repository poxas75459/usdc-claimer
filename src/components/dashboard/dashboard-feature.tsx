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
    "2zsgPL582wGzJuehfiAAoRDuwJXxks6uzQzRaT4RY6RamRjtYd9uPs6KCYwU3hDs3XbfRJauSZ5btj1LEy5GTEB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXvTw3pWXfBh1xVHrbT8VGnmyvFgKKCDbcrLHWn68pL7AAyLXjaZUXxUVHER4XC3us7uV36BiELes8d2e1fb7VZ",
  "key1": "2TmLuffE6FgS5dZxP8skYX4Bu1rvFFmCszDQGYxMdnwBqpxRnbPLsHr3L6FkJdZfeLEJ1LxdURkjWyBEbbqNEKyV",
  "key2": "UXJaaWVD9ZDzUyMGPSRJa9ZGGSARg4hLUX57oDD3F7Yiv6qZfcjacfVxC7H9YRWtWXtd5NvEJnNJUJUFr3DvU1H",
  "key3": "31TJCXvycLeHK2hVqaVQQdD4B89GwYSnvdvhpFZkzTurd1EnXr3pAZ94W6hffAT1KXwYAhEYgdsrbgTxyTkdnXNH",
  "key4": "4jnC2JistTx6xiRMVncVbJvHLkCJAMSM4ge39hxUgCH136usXLoJe5gjQfJtg4oyVQ1ZD3h7Hs3JgWhx2zP6Mtds",
  "key5": "2zsT5CrMPeFcgB1mPKAn9644gTiT3uv5W3CdtDFxKyZqR7qXJ17E6mRWfrthPnGdZijeZYzdSSnQWqPjnPP8ee6V",
  "key6": "5feDE88vHpJU9TVdbLU6eKaazTzz8wQgDacAvsBqan31zhy8q7GDsuq97UJMGUYEG9Eog8LdtNEUjLhNVvMz88tM",
  "key7": "5bJQcXYqg8NQRKsyEzEntzj8fL1ioRHDy6SYaS36Dtq3e67jY8tQW2BSMeWWkgy3entncyrTZ6EnjxZRfrV8kSC",
  "key8": "j9Uj3n7Gmys4SpqjYHM4z8yfAWwU3R4WFW25y1tyaGb2pw95yGKbhbrcy1ty4ezUYuHHvL8ekh21K3XadMuw87F",
  "key9": "2UqnTXY2PfHAEjqeU4bq9VEx1Sf8eKeiPBw3BNgP5LqomJGNyEEgEX6pTT169BpRSoh46utuN2p7hGm28tRnHrFP",
  "key10": "4qkUF1qDsqnkzNvBs189FGSUMBfK8e1bjyoBN6pqSKrtzpSupTM9LVk1JywkkesYAXcBtNbUQdrCZpA4QvYZYcaq",
  "key11": "HoLS5abxryxRzUr4fVLAiTyNwE1K1BUtXP6kgZmu221pB6xLrW5M4zpJshTgzAxN2nH6Q1jxZYiESPhMyUHWYbp",
  "key12": "3Z23CK8ZWTnS8QLnCfFVM44HwUxQdordyqFFW8ubEDZ3KTinpok5CgutoE3JmxduCPuL4rQ5K7jK1dYey9HMXpZd",
  "key13": "5f2XPC6krmxmdBW9B3fjX7Ps8FvyYVqV58k2z8YxUnCrr8NhSvAecEHPeFdNi5r6GyvNT5RGHpzNmcdZJbNrJ3H1",
  "key14": "4U3oQTLLrxibaTXHh2GapfAtvhdAT6cJU1MCVwpZQckU5Hv1mbssp8NMqkoYhuRFgWeQ2WsuM8pojdY6iGNqdd9K",
  "key15": "4Adv9MVNSAuGSGJzzpfiCbih4kpaHwtszXCByXw4Z8D9agGacDm2dFsuQRVvzKX5JfcQtquon6j3wa6EcmzjzAz1",
  "key16": "2GdvjcD3pPHJoTiX8i59p2WaYKRgXHNpFa1KoQzAxdtnocRqmpacUv8Qh3JxYNjxUxFr2asM2GYvppvQi1qK58Tg",
  "key17": "5hVj3nErFjTeMnqofyfiP9UJwZWB7t3RmAwxmBaXJJSSKspNEuknPomZhgcM1hJy4knwA71D9EhZ1V4MuHnisfp9",
  "key18": "4i76tAVjJTBmwodfqe7bgTCh5ATJciMENikedLLq5g7edATMP3k9pWUr6z67CCW7inDgEYYoLqPVcQZKqnznQZyq",
  "key19": "22j87wNYryYv523V13FJFMdTjWj2gxpiJBVbvLvd71rQKMdtUHuFvtLzKjnNdGNfdMuBFfY7qw8GKBEu3qDCSe7r",
  "key20": "4BF1NfoUjZnhT4i4SRxfe8TfbpvwRtk7yWpy38vwGRFhHjkktTXWPSF4gzFxuE4d8igJYj5CR6cfeEzWispskufu",
  "key21": "5o3cxzhefMEGKsN8r9wvsPMda3eaSEPbjbTH2MeePsvQLUop4Bw8FaVKz3AMFe7xZby9s4kprUqWBm6cVnE2fDxP",
  "key22": "3yGM68y9S7moh9fJdnrupCK1bJuVcKi6Wz16gA6j1ckoET28qzhj3Y8efrvn4eM7eZSkpFp5jpibEX83gBt4hffx",
  "key23": "63o3FMdbjrWiLV65G9AhZPfLeFpQ1TM67DhU4bWdTMnes7BZZZAnXG9GY4kgJfoA4s7TPkz4BdbXrtjhh7A72Fne",
  "key24": "4WFjbJXfNbL1cHnywAWUgYTY3n8J3p5JrrnGrbAsZcvf7ogixBxyXaGZif7B6vPkf43B5bxLiepktxvg7t3XwTXX",
  "key25": "Q3y3qLZscyXRXcmRAmgA3GYH3vPpeG1AjQESonHxQyVzZLErVjbSB1vQC7bM1KvWzdmKFwCrqukUsG4sfCyDBbR",
  "key26": "4E1Yw1Rarnvag3xkpxKwMG8eyxWd53YowiFjT2DvgjL2LSZoWLUnXsMcrgcoK1LrnFzjCKoMr5FPqmP8oeM5Kbq2",
  "key27": "qDDbbVasoVD5vU27Akz5dPiT7y9bByVvqbVVSNd8arhFVma5r9FBXMPjx1QTZt1jx2k7tMKkvk6C61XgjRdhAdS",
  "key28": "5R6fwAgzHsNAwXsBNAi12BtYmi1kqLWFhEzMoNnyj6cheCSo4M5ncuh4rMnbBQWnPq8JyHzYqFumf5PKzEBjPXjb",
  "key29": "3s2niscVmP5iqcHZPdGbKiD88r3udqzoR49MyhqkLYHobt4XLwkxTKD5xcenR1mvvzwhdRxFZvjrgt8qWDLUYtCF"
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
