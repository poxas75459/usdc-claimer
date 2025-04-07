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
    "2jpbHGAeemZ8meKaZRk8FxGAuYGyRhsbaAdKpBugqNRa3tkNKTcrKxXCVEqvT3WtKWDmXkPUpRnVztRGYfFvL6RR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qKPmhYbQtyCMEumkphCi24kBEZWkHu8g817DP9NXg7JUGoN6EJMSqFxzXsm657wc4aNRjgv4F1ta7tFArpqQfz",
  "key1": "2dJvBaTg8S81Ze4UoYkbCC7MJDE8JLpwv7CMeaqUj8h5EYt4W83nc3iRNX2b1FbqzP8eRcHFc4M5VgWZ1BBNuaAC",
  "key2": "4csFsJmsXHbw4xNzuiqqo1TDWgAg9yugwhHS3aR8fLMsu1wRmdsN1gL7TDy5DSyU9FZU7fn4YpLLXyvbRo6fjJqw",
  "key3": "5QJj1AM7XHZecpn6Mjjyw93GGs9y1xkufsBKQ2GPGcwdGEyx5iHvXSiA9SC3Lt3fo2ybWfXBdHUiCMScXSvXasvd",
  "key4": "4pNrSiQF9kXbXNbQS6K13cpjNAQDcNMsUa9tM8NydjciVWU5p6wVirTWXPjtg7aeqCq4ZddAx8w1dE4bm9q79RMa",
  "key5": "2xvv48q5K3buwmahfqPm3doSVMtWESx7Pb3gStHKBpmmPqRTjVcs3YVnceWqy93GyVV5rUdqWZAYgiPCYmT3C1xQ",
  "key6": "2fRfq9z4kg9UvqEVXoDBuDu58YvzV98Dco8bhzAuUDCc2jr6vMnRzNvqCCvnJHkLNPF3ohzwQwUChR9ZdbPxTGTS",
  "key7": "3bPySULPhbhNKUhUcgS7j4Ur5diwqLiVkZbacXNzuKcoM7C8M7BsMuBVfgLT2bGytdYQBZDGatEcsur1b2xTLGTH",
  "key8": "5SATE88ZCboaWUrbVRZLpVDBLkRFkgXkVnWNqPMShNktb7W5s9BS2EPitZyr71RRJgUWJC9H29xpYcP7AoVjDjxw",
  "key9": "2Kg4VrnrGceoXXKvRCKLVaaXgkLf5m1VVQhXNHbAYR7RsoHyKVj8msQN9wKc2F2q3zqYwd3A1MM5phqZCK9cdfWW",
  "key10": "5a4WXaiHPocNjEhM2e7mL1F67ioU57AAvRZLxL4knboujz3oop1T4z3szU76X1hogH6juFT4tGSCJnLir98QXVfc",
  "key11": "zeZU2ZMM13dRHpeXLT8EkvoHZ9BZvywyzDm2fPH4JoNfezq4N2JAYX6KYhoT9bDTBJf9TuRoiBxsUrQEYdcgaWX",
  "key12": "5xCLRPTf4Ft8aKfgMaS1hvjE2EcV4eegGWcWXoN8JZ5vnHMUviRNCunSq4qVe8trB1vZLL3SuEpt8FoeTmj9xsHm",
  "key13": "vXYt3xjsALrpk1GbTtLkrrcq6BLspzAzQufCEF8SiqpPFiiYk3NtUv2UtyR78FSVAU4vFDm9VYhQVkx8nfWnsRv",
  "key14": "4LAwnQkAZPxhC2DcqjZF1DN5Sc1KHrSfaNmYsKsgJ5wkJAyxW4zh4ab3fAbptQx8u6u9vCBynBDjNLGXJj3QaN85",
  "key15": "2zEPVifaD52WT9A387oguj9TTEEpNLENk5YodPF75kv2tkwiEbJwwWzjMnkmfDKz5BafaZHxdFniNmpan1w6dnPD",
  "key16": "2LXCkmpVcodDqa2KHJaXnxUiX3i3stVy8TeAE9CTo2Y9VZfgm7Sr7pAXgKy9vFrbLziiTJiAPyVi9XrX938ubxA5",
  "key17": "5ozGSKVeAZqCZeGkZ997HNQA5LVBr9vErUMJPMy736vJLjFxqyMezLyWrzMy7RRKV5smm3redh1CNGijBPE39bMZ",
  "key18": "2YB7hek87UC1GjA9N8ePwPqu8eANYGr6sAyJ3kGzHn1QBTJe7q3GWeygKccyYc5fgyeTiM2jnBXPYDh9G3K4Whb9",
  "key19": "MFvwFCqUCf23kNZ7AVHpVNK6MBzGPpY9FfqzfGKWtgskWqo5uUR4RcV41KPo7ScJngoxp1GhQY3j9keVpNwmEms",
  "key20": "4r2RgpCDrstKZuSGB5reXZW81HQGgYUtGoQudd4QHzoLsbpkYYTyGYsx4fZyTmRceRSTsu7Gn7ghbyvvCbLNuaJ1",
  "key21": "3zcwaRje8X5FqpdRhRmsuDBXemnAHKkfAxiCkmjwtDb3aCtw8zHTNSzE3Hi9cW5bwh6QftPUGEod97NLQ27fAGWn",
  "key22": "5PdGdLQp9MCCxT9AWQYzURLDGrnyXiExBBhLk5BpjeKeoBepd7pk7EpRi79s6QGb7NU5sPyuLkGmvp8iea1m4v2K",
  "key23": "4msfqgurJQrA12CqScGZRB64RWnj4wUyhqS7NHhBDPSVEyoZaubCgqssaTc3CB49HQXD5vW17b83a4yZpk3rcSjg",
  "key24": "2qYxchESKnPqfPz2TJ1cgPGpd8hNapT2itX8ZcZWhDnkhYzPCtmH3dsuamcvbEKydd1SAGUzXvqTNbYr68nTycd8",
  "key25": "4viic4AaQJUoRsF4iwhzLAkUMdKhrY8M6qupMahbCVx9y7XptbT6QQ6RcaFLoegXq4ETXH7zayuxrRB4MyGkWpnA",
  "key26": "DKq87bwNv7xyEfvMSzpVi6ofgRY6NKvGMtdM3aFF9o8pGxaMXEGoVMDrxE8g1Z7Cud6D1bhAyYYPebCd4A6dDRe",
  "key27": "3tJ3pwPRXhxgxgonLS77jWwq92qXRs2aAqLupvWq8ZSepzfpi5yC9TpUiXVMv2TjpkG5P3PmNkTFeRybKe5MEdAU",
  "key28": "2BuRjKnKVH6EyY4MeTYmq9PAFkZHRuAhnjfmBzF12F2WzmUMnzNSTjXYyHWgvKBrdDb6b57TWzMkQ2LiiHCEmc2U",
  "key29": "4NNkFyMXgCjobetDSC5YyhWnDGqKrf3MddtDg52ixYGCad2haQUA112zisxyZshkj6mUKwuC1Wfw6K6KAEC3neyH",
  "key30": "59se9nWGxTUezcQPZhGuCwMFvHUoRWUEFCvXF2DqtbjF3HHG5ninW8mr2ynjoKyUJm2JEH1PvKr5bujUMh2F6jdi",
  "key31": "54jav5oqjXyYLMwSh3aJjHYVwaQ7uSjwMHHcGD1EZLRrh6UMpkizHfySpT44xjpWUjru14WNCSxTj9NCb6MaKSdn",
  "key32": "BxTEvoYozWrHrNXv16anSK9fk4zPoYAt8nvgHcLh2acrGaXxALRazj5LHGPoPjmYHU2G4qJbH29p3beDUMVHcKF",
  "key33": "Py5ZXHkvaSpVMCXfbfAeyCYJ7idC9yGszezwGuQ6dNb78SNz7pWP2FdaDLMv7BhUY6u243P3vNSNuY8UMUux3wx"
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
