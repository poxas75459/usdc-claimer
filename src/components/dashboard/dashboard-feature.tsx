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
    "4NgrifvCQNJoBYspXFMVvRDSo5YzGHh9jPiTWW9YxBDcAj97iaBRxPP75D5N6Nqqnwfpw23W5Ggfyhqo76cbW9YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMRYzgjEkdwDDssT5eGDUzQNBiWmRXuKkuaNw9ThFJYaQjp1XeXkP99zVUif1JBHmVfFFKaM5S142FGb3hysX3d",
  "key1": "5pNB7RBhFLPcsPnqzZX8DXqpPN3te248BKAhXWRppn5sxBs5U2eGkgoVu4qggwkdAEhNXWfF2JyM1v6Gt3FFeZyb",
  "key2": "3npqLya3F88FjGhfDvQzqNkzKBhH7iN9iHTZznKnp9ZKLiMsY8L1LHWvLQDUCQxirSjizAtJauzzc9bD7aNCd88o",
  "key3": "2F3xYhB6KanKnonwagAhaFdo6FYr39DD1YwJ1bFWbu5otME4Vzrn3DWHoEhHPHoVWZzRWmotd4h8fXySFQu3GaXQ",
  "key4": "2hsCbKY49j7KnN5JFzGpGEB52Baw5hwrVyEUtgGzzcYeRa3gSduNbyagAtVh6fQnR5HBuAaUfPvGBYZGpqiZkd12",
  "key5": "5Di8WUQkAFLQbf5Fr9zspFfydW8hJFVZsPebYZJ5LXVcTJgRxkR6Ustzys9PuJs9sffbBQExg7nhDYU5K5hNBjBH",
  "key6": "6mYD2SdBA4jw1Wx3iqFCVEDmy2jESRF9HqDMuHg9MnpNRQwLPqz2csoPWuxKZ7pncnDwRT5oqCyXkZyJmnB1y82",
  "key7": "1p4eDmbLKeYfXFjTQN12ggCUvtAeM5KqsBX76EEJswfoUkn1HDKd9Yq2KcAA7bZ3kF4DJRAq9cXQp2fmKn8T4xm",
  "key8": "3XYj9B3QV9R8GienNGNM6qhx5P5BT9MqmB9akEauCak5yTqimzvMMjANiMdpJHj9VKcTT5PqUNWBTS2mhfZ5ruiq",
  "key9": "52UHiA9rUK8YrYjNvGMpFzseoyyaWYe5dBf86DxcXG432Cr6p1tJ84bVW2BHpcmpJq3J7SXsvA3xHUyeNjdDr45m",
  "key10": "3rTzg9J3kh3gm2FHM5RaWoHPtEamh4Dn7RgXdKAiFVRzkSp9TBdJw1YHCf8Grv1r2VDhoHNWMmhkD4o8pY8587Yh",
  "key11": "vmDCjtiCASLVN2TCgdtNyPNAismTGCLUvHzdwZcep4KAJ8xJ8w5tQEsiTSDxPbfdWcudWpeBuVQF83HQ15sN2Yq",
  "key12": "5hn72zj93tb1Uf95bdifSpsLSTDyi3VHUFvvnwzrAAs7yi1hHTaJwEA7dD744Pu8JPHVec4VuTa62zyJX4T3ijeV",
  "key13": "5RuhyrfHWGvQBh1VonhuRMaWUygfCpoc5nNT3kSKLZBwNcHE9U4oEAeVsmJRhMXVHwCa63EB6HnSWVp9kDecdUM5",
  "key14": "5JjidZQdMsCWUS7KdxMLuZvJrCxET6jNk6rUhzgH8qzwpd2fujwUBPobCrXooXBdJsZHtqB5VmUt1PeGicrDVuYn",
  "key15": "5RoyetjTZ6hJ1w9gSAfDFRHyWtGUvDU8KHHUzRk72fo1Y4nAVWnLmAQKMwSZk5tP7fwSZJacvPpWbG7Vo4BdWyDW",
  "key16": "TeNTpHGAqYnsFUd8TFMUSTTtJa2xCRuUZxCdgtctzTtkLNdLsQCyiuYyVf22YHRX7WoTb7ME3qdii8ZHXCdWZvM",
  "key17": "3CCWLZXytiXQov6riYsphHrqo17979ZJkxeHhsjwcBMrFvRqZNzvhbAfwnGoUba4BjNMGzyR1NZrGh7SakXX4PDx",
  "key18": "5iS1tYpiTrwMVPCPb8EWwEGkXihtG6qrdvsrQK1DTQSrrz1tCjxzKvAmLoFUmmj5vjhm786yqq2Sm6CV2zB1BkhQ",
  "key19": "5XfdZkhg9g4h8WYwQftidHsW3u9QNo3nZo4sSukJPf5aQoqFZDuVH4K9CMSZiUkCmQeyTSPxA4boxhX7gr5Duybm",
  "key20": "3va475pE7arpRqE8CBLZQ3wLUoLN5mtDWMdSP8jgkySDAUoBeDZfHyq7JpTbJ4HEu4CTasmG9UbP1Z82RoE9Wb15",
  "key21": "2u6u6n9mbrap3o4GX7adjCXFmRjZNiuZHACQgiA5dBBwzwJX1pC5cAsBz1zpbDoCAdhXRGiGkR614LqGE1im1Dig",
  "key22": "hwwNADVvwgRE23BgQwB4hzYuA8cvU99e9SxpYAScXKnUiQSgssFLwTX13SsqEojTFrbvdhJpbj3rnEY5SQjAdcx",
  "key23": "212Ys8sk2A9GHMPuB9cfhv9T9yTPCAkX4zBcsxGh3b8wNf5AWQArVq9wPpkjdA2gCLDvfWc4jkDWaWpX7vLqnXSb",
  "key24": "3KeW1bV6wcqkiJ3ffay3axyVs6kKjUuQRaUMFM8Vtcqdn3rJ4yTnuKfTTbxHZY2Bh99YDQjAk2PFhKtWMJVhbAmU",
  "key25": "3c5YgzkCHjkHpWP8g4zPqMzNQoFLyFHa496GPZkKy1BSwWHdKJgLfFL6Y2WFQKuSyBaW8RUsyfWE3RtvS1FfRYGA"
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
