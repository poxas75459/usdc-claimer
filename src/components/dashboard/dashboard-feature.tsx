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
    "mKmCNFwHw8motPCu8w346F9XkhmQz6rnGYz9gogqhqg1VrUj3kMMnfvdk4Ap2aLi33DGse1dNQ1BQJquwxGiiiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63nWs3zMEzTuRyxQJWsU2qJAXLgJA8niGpuVg6P94z7WC78duwUYtVpWUkp6hiPHoqG5rXdyJxMxrSVCBxh2dHJx",
  "key1": "4Diqcm8LFG8f1VsTrZmrUkDCsVEzi4XfJF1nZ6K3iiht8kq2K1W23PscLzPcSwLjehZ3Pz4881UZieUm9BvvSzGS",
  "key2": "4E6uqcCHD4qsSZDRTxzyE2czD3pFpn7iq44Q2wEzJWHHiWuoH6wXeA5RRH34Z9mtFyHoosyzk73pdWhKT1BKbJcZ",
  "key3": "2wUtyqTH8UFgqeUdTZqdEZ7RHYrbPS6hY8CF63ZNorDBdW6zQwszPbiC5r6427xNcMobAHcR47wKaRgJdKUTDSyo",
  "key4": "2RHCWQY5jwhrfjh649wgsgcSPP6hy3obxijcwc6s22XARVVkrkKrz8YwcPj4sc7EQ9CS1ANVpK83yDQtN84QZZBy",
  "key5": "3LBHzfX99qndRMAAHkzEHR5h424vXppWTu7afjsynY32dGmEHFf4f7c4VEDW2hyxp22oCNjsK2HDEoeibudo2LQP",
  "key6": "3oxxffFSnVm8g1BzwRj9pPCPKcfFJgTFHM4xVLNa68tQVdWhLDufwLFM4bvNUgB2Q7Yz1NXQxFFo3VW5RvuzEaGe",
  "key7": "5dqUuqK9NaiqTJepJN4YEXRFGYRN1G5F25CgBKU4tk71be6ip7FLbzPPNzUPBTTNy1JmCQ53kLSbqq5TEbAFsJuW",
  "key8": "3ZSxuFn6kuazeofGUzmSHLMkUqMQjpFVWYNF4sijqZMHAQwVgikpeYYFpaPvD7yAo86H5KStuXGTE44pdM7gFDNE",
  "key9": "4s3AWjUwjw8e1sHYK8pdF1aBgqfZLTvpzzZukc651CHzrAWA2V3o7axEMpS5uh5us98voXqCL6n5JJCxwSvs84QS",
  "key10": "3PKYaSwbQrpxGEE8124URgu4Vh4NWUfEgtWtjADDqkNY5EJ6ayTQNeDpKs1WGw8gBpt8deaUPabCvqN8qr8WGUxE",
  "key11": "Tt8EeEEiKM7ZxcJDYeSYqP9SW8ZmsVDWBQ2A4kThGM2W6BCTVepM6FWPieB6kWvDwo9zJcMmvpZ7a4K7kQerugy",
  "key12": "2nADoJv2En1YAz42cEAstnyVv8q1Zbk41tUp2hxWzFBLpRphFGoiRCVNdzYFR5f5v5Jf9h24a3HCmCDZRuCsDAug",
  "key13": "2KVSWfqDgy6R7vkq4ePD2bLQhgwS4JqYNGJZLWbNfTmYT28ZtDnXf7Dxu9bsqNbihiF1QP7Agsski7JjBATdmpoy",
  "key14": "VTnQrxXmQXUfX5XdRdDgRM7BqBVWUedEiQcDu4i3GEkEGbBvVFWMa2jJhAiQEWQsCWD8d7Ed58A3qSHxch6mP66",
  "key15": "63Gdr7fpFoobGh5N8BvuYVFkKz4k89jMbx44TGeW51SZUMayb5XEmt3UUGba1frsX2qzFLBy9BWWYq1GjPXwK6kw",
  "key16": "26KRoaex6GPi9g78W9h1zxZLNadJL5kAPVsePrPsGBoNs1KebVmFcUved3RWfDnyZR3tuS8w6iQW62KvQs4XECZB",
  "key17": "5fdXoKupXnv4GsLKgm8vt9JqSYLck8gLSh9MMLhLoABPndNgW3sbukN5zGoWShoQSgaG8HPuFF5CAc7mGf2KkUpm",
  "key18": "2ydJeEhm8uuhMQ5JYuDFoLWg7JxmVU6YZWqC3X1KsXvtyxArhyR8yqm6BtqA85gFACc8VAijcCvWNYKC9a5cTsXf",
  "key19": "29qXHyNx79gb8HkUXfGyS1fnZY5gSEdCNrQ12UZ4ZVG4QhXvsZudeE7GojZzYHFR7LPkvynNPY59xr9rNqzw6G4S",
  "key20": "2K7JSndF2WdiGFGHfBmpGHnpCYBbaJwuurBUuqREr7pTMJ8qQmDkHhP4uwoGXpwiC1iYnZjBGFWJPjR4qib4ug6p",
  "key21": "246jsB6vt4BZSH1npvPnATQaUrvwbwvNfKdXeLJmomgiUsB4TC7wJoFj1PLbCnkVU7eQTJ9HG2Pq4gCE8E1SJgEM",
  "key22": "4bq8eGGD8qpYqpERfjhXjjBeeLAxfAsr99t7MyK3r9MKXpSgtNzsufQBeUgjqVSPbsA31LEsjg2U7gkeQzJbqk8Y",
  "key23": "2vwBUVHwEDyYFU2nGR1VqsahsrAJfU8Za36Gu7URYCwbUpe1Mp73EtFpRkSK9a5vuQC1LnkNoiEYN1zqZkGLrFkY",
  "key24": "3xADBnfYs71Y33jpv3mziAxX7pV7f9BqZe5pGjKc4k18tioj1kvfLTXaxwQoAiXRDbhBfVizT9YXnM3qWkVoBwiE",
  "key25": "4zqg9c94dCVm9QHXMrvdu8fe35G6L7gZLbQy95jZ4Si6DwXBZP5iTNc4tiuVwRkHwn7s7tFjKkTbfhXA2hSqDNE8",
  "key26": "2HRFt6XdiAJNWPvpK1kCYYo6gWHnKR4Y85iJfWvDMb5gqHz9PbakrzeocKxfARtrwbGhu9qM7yF4Em6Dd7YEEQFC",
  "key27": "3doELM4Ln9vjKZ58NLiNv9oDRdzX4KEvFi5mcJQ278Ff9BvyxE6w1HcXcuMR1u8MkCDYAL7GJTd1NkfwJNtsvgND",
  "key28": "4QbDMsEbUWnGNcwS6t5qYkFXGbn2WWcVKNWFnpfMV7wzmNaSTSR7ZNkmhk4wrM2cBnLjtSX2xnna19xqwwCTbyng",
  "key29": "367DDKDcgkSzqeZYEUWCKDj7iWPiiQgSt7MPfVxxTc8k5SVohfehxbfRgev9LukxC1mRZE5PhzrAGm2hjhFeierF",
  "key30": "5AAxegB4S4MBSDBaJ9SLckTcfN8zL9NY8uvy8anrVr92jSFiRKhsaYZ9xpqD7hLhtYUPtKcwqrgNuEpoYWRjiMT5",
  "key31": "29H9wYoE2SUsBHpzbGC6CVZzAzrjE1azwsvF4Ggus996RYNpwN1kLyAQKTBusMKaa2wrdgSNSW6K3FjEQ5XKsrSq",
  "key32": "2RKkohSHnL47YeDXDGShnRiRAc4TDV4mq3mSideY7NZzDfS9W58F4yV1c8QDnoKH3VoivsmNAnh7UCc4DEcKfsbj"
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
