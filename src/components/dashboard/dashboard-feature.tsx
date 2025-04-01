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
    "3vUgqpf3L1gb4LNuxqMbpqKuY1zfWiKojBmSQATxyQj1YdgoaW5SZZXoUh7whDeW32wAAXmdYvtHtJzWnEgR1GUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8mJNmBDLcEKToqtTqei43wH7acs8q1K4T8Q55B5mZXzALTkx5JYgk9vV4b6ypp5GMX1wog6iYUJJfA2YBpAuSm",
  "key1": "3gZDfgPqMCgFyeVCC4ojGnkLRqe6gicTVXaRQ7wB8wwTZHktFxGGfor1cHDQdR55k7bYgJcjF2B8VKHMbupo9Qrf",
  "key2": "2PRy9abYdoSanRtRbikgifRmjrc8HCdwN6fCBGNFrxEhH74QgaW4MnmjuFYEx33aGHUZUrSfEWXQwVLqFh9GtV5N",
  "key3": "5ff2pn5wYJTCWHpmomsE4hrY7KSvfDThKGEKJXJLVVQ9HsCdAZJo2yY6eRWT7n32ngeunsAD2r9dQLA1FZLDuzUw",
  "key4": "2LgEBhCBkfz2LshJUpnBu6Ta41YwVX3rGvae9z6eoae6gq5ZbxLCPihZoqEZ4GkZ6APE4jjT5tpNMyp826Xa4Uyp",
  "key5": "gCFTZidgByoyTKgnLtScHvHeizkt7xnW8m7KSUQa2XJ18wPZN42mFMQkiafFuLmjh15PgNiAayUe67zwtHUXgcz",
  "key6": "5ctGG46mqccfz21nwQY6kREoNJHTh336upUUEpxLAHwKZrYb95aej46T8kEuRLxarNQ7dhiQQuZW8Govb5KfQQg9",
  "key7": "3LfiKDaSB8esAxydVgyH4ZkZS81p4H5KZLVpyoY58j4L2QuN9iq2F5EVdLQH3TMGX7NUWQw3YwptGJRerLhMaKdW",
  "key8": "5f2RQt8jZBCTEkZwFbNEcoA3dvmVvdJLVdMpkXMjfMmY6Y46L8BfADXVRSsCtjwc27LCE6JvUAtJbQGisfJnjDnW",
  "key9": "5yigSx1CptowYfsrNEUwdqr2JanDcCNRbiP9GCMuVhxcLU2Wpz617GTaFeqgPBXmUMD9feghoduXPzt8yjZrTWVL",
  "key10": "LK7ZeLUJcFcZbyB5nKig1wcfv4ZCJxRpxeavJQpNFAbZ9WwXmvcHJ7PRxxsp83LL3aWMHbvwfXfChoE3iG9B7rj",
  "key11": "3MmXk8KkytywJuazFtiiiXnXKas5htGNiq4bwvDNodGZZtNV7cZb1HkN1rKp2qPyrjcfrQy7gJUUGmmgqTMn9XBQ",
  "key12": "2ZPHDo2dc2WbiDkLC3c6VeKzqpn3ZvhMKpvKaGf6adRHRR4qp25N8S4hLs6ErMCZnkWoEM1F4ZtSJ7iQVB2Bu37F",
  "key13": "5Uye8Bpf8586FYqzot7DFy2WgYBMStHbY3rz7piX9UvFgrttdaYe8okQ5v9Q6PerUdihG91gNijdpuBLmohTYx6T",
  "key14": "V2fq8vUs4LKByhHmKsKSiXdNqyTx3LYwzPwARBho28z8iGqqeuT4h7pC6zkLL3vVbLwP3LgCbF62bHCjH6wpCGF",
  "key15": "6Xgtx3acBJhY3AvEW1Soq6jj3FHW5BWVH9YH1NUi8eJiLzkgTkT6Ftq8n1ifeAAswLp7kv8WicgJ7guU1gnP74h",
  "key16": "5PArgyvqZUB235gtoDqxjXbUkvQ1PPFA5VGXv8ScAbTU7QzW58gdqQw9PSk795wVpKoFq5Jkg5rkAbgU2et4PZzT",
  "key17": "Fcqpq53dkUS1xMp1eQN3e5nkmaB5PbXUL2ftwFgduc3S4aHzvN56degr3dbdqr1huYZZ4jebHXWcUqi3fMGKGEF",
  "key18": "FJW1turttNoYg59MrErjK8aMGFuwKapaMnJQKNVVLvc4YUm8gHJFu6DxhvWVuFNkaWkUYPpoDH1KYZaTQKWwYZP",
  "key19": "ZryBqUtQmWe8rbUHoj3pxficHR8cMamchvvTjiQeqPY2yzp9g24ooJo1Cuqkquq7NeLFiKhwoLKYth58y3YGf79",
  "key20": "61QoN5uFujoQQinWbMeWAN4MpzMEYRJwp3QjTExn72m1PhHz2w3qeRi4YRPS8tecjNjB4ZV2mRZFQxW3Y12wkW4f",
  "key21": "21iKcTdZ3c4e8NFG6KgQjAxFQnZoR9xs3ZPUv2wsPvBKU2bmh6x3qWsJPhVRPvR2eyoevLH9ZFFVbHTgTpesAzv4",
  "key22": "jdWmSmBvhHzruzyf23b59EcHyAMvdnvAFR6E9DkfcWSVCPsNGg8mbxq24nHynQw8LDXXoDmPguieBdEyo9g5p1m",
  "key23": "3JBES6andQNnKXeJtVeaRZND5oVbB6xsu5iCf3A6DtabxxHL3wjvPaq5XcdK3Jzy3kqKTHzk7t4MiuEx7jbKGSzY",
  "key24": "opmftUrCbPyoLsRm1qYqd52y2EpQLDpaasSwZ6Ang7uuzRqcCYxW6oh4nufay1U7aeemzUrdyph3HMkk7KDPu5X",
  "key25": "5pxdmu9KhfPA5M2W52njV2KjqqQjScEQeKieq8CxKgyZyESe8we2NFqkJESS2N44iPgsvFHuAdAAixvR4Nh6xNTC",
  "key26": "2YroxapVsfnk3B33jGi2KKyBbQdrXGrJz493Kmi86gXnCiaFDZnzNAZ1ChYyTZn3MNxwtviyszJabxYieYNhFjtX"
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
