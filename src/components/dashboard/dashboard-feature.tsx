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
    "88x8LW76GC25eEEzjwfc4eUmTjn5g1tFpJf8uNLDuRU1jhXDTyy1oXmC8tHo8En7myGyAjyYCdLWbMRnnpK8qNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgyEM4mh3su2aGSBs1XUUc7Gm5KaCu1xe5MgcEEXuTm5acvmKTpdGtbS9pT3nze3vTcSHc3W3uWZPy4Z4WPcJak",
  "key1": "2BuYziw2E7LdEexNVwdpH2QcrvzFAGJg9C2Nx7ZexejGzbCdkZJuexmkETqLsWKFHV1sWfugy6VQCCnMMBDNCJ94",
  "key2": "4Lo1fGWrXLvNytbswx5zHVuxAXX2yRafDBJu4eDUzTFAbPVJGMFjygX4GzBPS7CvGGYEkXWfNk2bdUxEYpF8KjvM",
  "key3": "4nzeLPWDvndLghy99z1JebMLzq7wcQ69T651uksL4KupR71CJvSz9NAFVSw9pT7nUJc56auDtkkruCFRhqZZBcfR",
  "key4": "2wJY5UwfXzefFdHVgKEfx4SYyJAKcSqU48H5X3JLaZaQ2GS1ceBtnWr1kWhR5n2wa8ifY6VxyZ3fAJTbq37U5rVR",
  "key5": "eRdtF8VEL3oknKikYSVFuqFSaqxZrYqwWncifyZn1nZmeHktG6tjguH3ycEt7S29dfw8VisxJncWYpmkWbpxUgP",
  "key6": "Xw8xrc3Ebw8gsu37GqMFqqYxZ8AwWA5BS6ewzT8FqW8SyzcrWL5a1ycsczxPrPFqQZnCXLzAjQGYTGHgJq8FdsT",
  "key7": "3YgunPEmWN1mMZYUN399bNTe9ze12g5dGHhqWJh7UfttDffBs5ZBaEvYvZo4cMq3g8eEhjfpRYHEZHbNpbwSXh6Q",
  "key8": "2LVoLGVCCgJW8VUeRWtYZR7gsCcenoMZS5qKt2oBd2xuSUpbpKxjZfJMWZZtewAruvWtoyemtMDqyFbgJfisC7H5",
  "key9": "3U3Xog2a3soZWHbnDV7etD93KkXYtuR8LwNAe8LzcQKbghA4u59hVRd7hrjMVizzC3NaLrVutc9TzqiRn4CUBdMH",
  "key10": "2h1LUiGtMDQc8xhXzMwEHUCgt3MXuGjm9MA7RsQpHygh5yxw4yab6hwbV31fk4UdFQBuPVEQKDGSZ2CDoSrhcC3Y",
  "key11": "2EGrJEYK8hwFhPwocwkf8wqQsrmV962vQvxwN88YxqRkosuN3mFfwBoKW6hWvxTNgT4GCADjmcw5gEeMhVvb9qZC",
  "key12": "XwNFjXYLur7CEML4dSkevvbFZhRWDeg1J5yxA8QFd2mhi2u2szweBHofTN6bovYV8tFwEdDwrcD9DuNkDbt9qpf",
  "key13": "4o9J79HyFv7yvN9WEJ2Ckdp3KtZxCDPbyxPV7c7GX9BASgDxPHLnKbVEoyKDc8RL2mhU6MqEVxCBSiQQwVf7jUxy",
  "key14": "4SssbLRieHVxDUdXnQzHoF2u7m3cjZ76LDm6rp5kwKGrHRXtfr95ovtAgUU4pnYiXUrxVMHuSqxG1HYA7H7GFDXo",
  "key15": "4nzBQka4E18BA7caFVcuxVuXg2u95SJWHLWgunjuT4JWFEiANBj8MLQyxkGbbwspn6xnHSeEGQnq4DdHZBEAF9fq",
  "key16": "xNH8WxYKWkXwb8vuFwfHyEtfN29tzfWhyUqPiKAY78jMJTe2yf2URDFhHZeAUq5McqsbsyZN5Mq7CgnmvV57VdK",
  "key17": "44VsVSBBb9UP5fj9wc4qZatsSpXJ6fCmd4C2ft9LmrRtGG9z13fguQk5EHbV19FMNBmu9b6myKVr3SuVSbcy56JF",
  "key18": "BYZj7kHHF3X49AcNRBW34kdtBdKFAfr2RkqWMRRe9YHmisNAgsqwmwqcJRJj31KSt5x96aGHni8XSCyEjCdBMYr",
  "key19": "24fMKHbA9JKh1ceMXnSs1XQW2wXk9L3tWcQnXTZucnyhVJn3jHSLbxavGfYTEsR8qrPpoJtbQPXouTEHuTxG3P5b",
  "key20": "55DGaqboSexgn2QtNnSsiaLbJJduMqhCHQeU9VnuxYvoahWpXMhzmWpFMoJcFKHcsdWQaeXw3qZDNxiHryh2n5dW",
  "key21": "5SV2mYen5YnfwLfKPUe1ZqQmpsFxXHuSCpkiL3ZZbPmwaX6jP1sssj9vJA8ZmQ8987Q98j15kp25PMgQPEwZiWVm",
  "key22": "2p7fBh1e9vt7y7SSTHtr66itB7Dq3YQAAnsRmCdkUo4sKWE7uZTmuNzhaYizyHMQ5UcESHRYz3PqFXTha63AScPR",
  "key23": "4R99iRs51YJqZLTZdTBhR5AAEJq8yPJn6kQ27MsKnacePrbNrWaDZiNw4UQVeqLk6S6fDR8xpGtbVaxmVjJkU2dt",
  "key24": "38gRsXfvd8MNL2rWUsJGFov1R7UbGpLiUiKNYgA5D9pxqTzjTaaL3My1HksM7Y8DsVmnEUmbAwMiN8wRxsWzjDqc",
  "key25": "fXSBcF6drqWUpqrB7hfL53ehUvdd4VvRb9eF13BA2j78prW8h9L5BsNRXd8kRqXZag3Rew33nSgd6XAdhtEBLQJ",
  "key26": "24vPrESbmKKVS9pea6epjhxv1M256Rtr3TDgdoiLtGJAFVtBG89KkXQRp4audRThXp8Cmjy7LCJxqnwdM6tvbgPz",
  "key27": "3S3V41gF3TrYLea8g2D9dUrKhDnTqeMKui9ufLduds9kDD6QNkVJWU1aaPgR1q8ejs1EfK8j9dXKY8auD7zvn5EE"
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
