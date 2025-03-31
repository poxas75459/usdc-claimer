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
    "25Hz9VzG3BedRKBDLbZHvfw6p3YuRU7KcfbatZPsyFY3PKJFJRsYcPSpofEP5hBbDEu1rC99UxLdN3xqL7C5B5Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ce6fvNGEQ1TQZY9RVZU26kxWmDZVsUHKMJi7mEwef5K1fzw7AhTXdcqXhGeifJjeAUsduYXMLhQRDgvMvkqHndd",
  "key1": "21bcvFr8wEM4rMDooLGHS45C7SDXpTbQpgUjB1bEcJMvGHANh1JR7uVtHwQDrMVKT5qCgsZUW1B68himGN8WtTV1",
  "key2": "zucU7PwvMvBSVod8GbEi5UxdmjGPugQ7uHPRjtq1J8WQ6FQFF4646jgG39Uff9oxmbPhy3CmfuL9r4LpU96TMjR",
  "key3": "5Kjg9Y5H5DptSD2eLwyBx9b5RoiN17RZwufCY5F6exJmuGsPWkUirjkcQdF43s7PGiFR3R6GUhdqdQ4ozwuDEfjL",
  "key4": "5HJuKynxqqkb2USr7gQguyb5LTNBPHbY8q12nEYVaxLUzcDChWjyQ1g9Naw9HbLrz6H77XysHq72mBjETT6SYZYS",
  "key5": "4x9o4fMgkZKRTLeuk715G7hLx3erFbf2UkHXuQHGdX8Zhw8c4W9T4yZK9T31W3gBxmDqbtm9W6T2c1xDfM8qxjDm",
  "key6": "st4ZGCD1uDGEGnmp1qZiXGZLQ58fYPgQRJqrrLQozEG4FiP4KvsBtc6qvmrdcMXpyDsZH1jwj2Yw8fwBqHCtheg",
  "key7": "4vWbpz74EF9NFDYDtYjSPZpsdg5MNLier8rERAYX8uaA7wpzy2NhdGdvfogQZJwxRZUNsmpB8AK2gNBBYPtXCv59",
  "key8": "4FbTZ1cRpqvaPKhvwhY4V4ipv9me71Q88iwiQkjABGJtTXKPRdQYDJy3Qyg17GSRaXNaomi4sHk2ZsH3Bj8er3rn",
  "key9": "5ABXGFwrjBLQUYVLm3Uhn4AJ5gZtiy3WH3sHacccNxEUkZyYj1PcVDViRxiecQVVBtDAVJDPnkHRXSPPscDTLy5v",
  "key10": "JRu1pmysvLjNcuqJTwbLdbn2xLn7M1i8YSW6oNM9Zm8mGvExix9TaTWHdYgWiXNBLUJn8ehWi7XiHvJkb3pubDT",
  "key11": "2embFJT8Re5neokA4AHviyqKbWtT6X63zcCPKgduKgyZYuNF9ibNvHAdhub4x1rP2thCFyxvtyJhsAd6XbMW6sma",
  "key12": "5aNS7vAH7S5tLmmU4uMCxW7rhnXdiXq3rHe8YJgtQobpryt1DLv2vwYiVHqK7DWhC23MhEinehv8jj9hwkUpdVqg",
  "key13": "58CGXTzcQ1W1rqz4QFt3qxC1voxHFGAkq4HUzfzfKLLAph5wYGHDbQL68TMQ17m1gCrtUXB8P8nGUFDHNacS7ziF",
  "key14": "2iE4rGkAJ2KpN551WEyXrb5hEWxo9LmVJ9fZULJaDyVFau8b5fBuMKuvwAiKiMcdp3qyAysB9KzAV64zufgqbQKf",
  "key15": "27BWqxixobs4DcXppixMY584zkQNdQa7gwTQZLZ5tgQi2dZ54SNvk2QvrvXjaBpmWytqVC7BnitcLFyFqvQgrVLc",
  "key16": "58L2bnMh4i4zbvSeKQNaMEdHV8gL1QS2PudCdASfe3Xfev6QVCAPATzxqYG1i7Fpshj3f6HzSUS2gYYeNLNuHiF",
  "key17": "2cFek16cgKUsek3e9vVScK6kLGs8i7ptQ18dr8STaZXGPZfESYptSxGkNp9vLcY7wSWZWA1YGDHtdMAnxA6aAgDq",
  "key18": "4T9yv2XmQJw1aaGww1YpuurDD1Tm6V81TPLmRKqCqp3CuEvNeoSZHDfbd6vCNavS5jtNGgLXuT53UrnVP4NPFr5K",
  "key19": "5pwsrGYEefRSK9Absem5x5nxoDzXKFQLT6YuhjZqoFEAEdYcCgCUp8Du1ZyNg9is4JuFqwv5g4rSXQDs9oNVfQEg",
  "key20": "42p59sSNbiDppjCFZJMbhV8vggCsqXoGgvsh6FVoxjzrTH4Z9iJGTe72tQcxW2ngBRsRZ44yvHwJR8rGNoitxvh3",
  "key21": "53htLMMh4oaUGfaLcjFhYQTo2FcjCVVmJynFPHvHrzC5b7seRNvFK5LobnPq1rLqYKkPQYh5p1X83UCYokbWn3EH",
  "key22": "4n4NxcLBFjw4ho4AVrdyHwT4BLmpgvgKPRJdH16GPi8ciytGQ9hpAUJQmWfYnr77FKjwX9quiJviUPHPzwRUWfKR",
  "key23": "GxBTDwz3g5hjnN8iB3awtPKakRfFEkx7BaWzGE6EwBKexojGpgCi3b8qpd3ecLBjwPiNN3g4hU18y6tQmKpqRqV",
  "key24": "2XgW1Q9giApMw6poWkanZcQjiwQtdeyRbPjK94nTH1zeDSM9sr2ESvYc9LyyQeGS1WH2UXrkQNnQVwd2F8z7f7eX",
  "key25": "5VZdwA2XR23GLCMrXuyAp4P5yhbuBb2twSLAAMzrpVoVik4czrYkUzYp1E9WG6YFLiga2fZSjMhmNBquhkBGWiZu",
  "key26": "4SbuF8eEBQs5QMFV5Pcd8Z9QtprrKnjkKbMFEV28vQhafLzS21QH5YiqotG9kFrz8AhZUS6pxXU3P2SyU8ZPggtd",
  "key27": "4pZtiEpnKcPrhXHk3HV3ajPL5QodUseJCT8YLhRmjbuiaB7j6xX98pjPBwAB5HvzSp1qL1zy3T5ny5ty4T78KNuR"
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
