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
    "4qkpztByxkVRfczsUxE3VFe6iEbSheukYTgHTEhGNWq1bb5RoMgAb1wsKrwN5k2Fk2wdKr762GSJboHnhHxVrrPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUjxEof3sdvV7A5RRLC2oZSLyHnqybfeSp6SnrR2U8roL7SuhJvnny3PaqrnKCXxnAuDnnsPv6uQwXTvcGKmGDp",
  "key1": "NERs5SgLDzxowzn9kREbyTkoJWdjWNfsa4eFrpMHHxrgcScZDed1q1nUrwsLJC7sjYSAiNUa4it1yY4iv5r4dQJ",
  "key2": "4qPAzpurNd6cn9AJCsivpkRkxSyzBzwJcwAypXpS8141GYrQfL36fAAPriCWjz1K6wU8jCL5XATw8ZMCu3VrtXEx",
  "key3": "5tjp4mrSoSJR9FhnbTxqciiQvtYngNgz5K5Y8qT3H58wEpKGrHG2SEXGV1uX7dDsNECDqSRkP8ZeTmcJQG3xV3EL",
  "key4": "SADPpd5qhGyEC5z67xpRMaCMj9FMFv2znu6UV2w5uvSn3KRfuq6iDPgEzeNPJyAMj2MzABQa5gKXRdvaLY5QuaM",
  "key5": "2Vx2xj7V3ZVxJoxqR42dVjxs2vX7neHnj9qXyKNehpyvDp9M4RU3BsPuoJ86RTSfJHne82sLGe4fezydrK34NxZJ",
  "key6": "3bWpzEBWn2xG9y4E8YQZ2oUyZhBAFiqR2ifXCrEvUmQ1Ldydgo8njVNY1GGeeF4Nvu5VGecGUTUeKVgNNzdmMXPU",
  "key7": "WH74cGtqrESJoNv7h8pHZHRJatd7HnJPLCgs179nL1XTFbwCUNSs2xWfeChukFNCUydgGN9rzqFNz8CuzSFFmT1",
  "key8": "3Z8nQYorW9GkcehSwgjbhj3C6bL6P8HAt8CrLPnsYQBbykk45tc8RXDMccqqhLf1c3s7Zfe2LZXgmJ3mwUrUp2MA",
  "key9": "mpi8kzMVVoQ5rreswfEKFdzfPtFktTJYRi7DA5SUqLVAJoCLcBzK6QYkDUpL4Cjtc1vCVUuJqyfBUHcpvnUQiqH",
  "key10": "3SrEfxaWxXQCNzym5iZatipojEc76kJzGYFxpmKCrNC9ogTi2imvc9zb7hZjNdUfeAXoN8Ne5PKDnksrGKYhda2Q",
  "key11": "3p63rv5Dy3bwbYNZKhFqAqgzJUfPT5SDGDmfEf9KogizvZyFxyHTpGb2uLeLQD9rDhN2yzTMAM2UJC7jbMcgLLhM",
  "key12": "2ZvPSGZ9fcWExRryGwby1YP3k39Rpbp99pzRExSo3RxhibbDyezaj4brXcnwNM9ueLYFfvUPihZZQag4ekMF3k9C",
  "key13": "4kjvtXWQjTbVesZ5i68sWTszX9yBqTCgwzeLrBVHYsSdZfze3ZyFXGeXLFggNvczHuDGnoLkirnja4tytc3JGLh4",
  "key14": "3bmyKFKifZTp3RZzRrvqBGBBM7NbAaXuXvrDcAy2fKBM6YANLRBhNmX4ceU4pcWxar5oTADA19eNftiembVLFnXK",
  "key15": "5ytqoNurJvQbmi29Dfgwzr4LUkqsfr3bc8DGDuNo8spZeBtuW5b5AEoLkXMcwPAxcepojz9d6eJgv6poXNfrJRr5",
  "key16": "2db1AF5AsFyjCWWAN5rDYyDo4wnx1LorZyzkmHgt8DK5oRwzMB7KFNmeYTUZAE8f1cmowjpLbYEQgwTMByWYm1Nb",
  "key17": "5eUfPHzJb9h7XSYgqC7fbNQRhr7uZXZUwdxNJwfRR2cJHFg7cuUfBwTvJbjB7HheYqnruNUMdA8APRFa97in8GYJ",
  "key18": "4tmVGCvPSEL6i1mCq1YckXeGd1Evcy49DCa27rnqkRHpr7ha58V9hK2oPQ6bcjBxvTyW5ZZF8XsaNoHDSf4P3vxM",
  "key19": "5v4uRMuGeu221ynQk9bbaTLyEcwTXHGag29FbtvyMBMPbKHCjinS95XbWknTo9uWDy9qww7BHK52XayN8WwTcZef",
  "key20": "5mpSgGJjwM16KtcmcVwJUBbu1G9Ydyw8wBGzzotdPhpuQa9jwG7cKmKFGpt9vJuSWfUo3ZkTxAATY1as9bvxSnrB",
  "key21": "2657PYC9W9C75uhFoPawtPHtfAvzUffJPruTjr9ixAzU6kpyNEz7pGH4jKSwqQPedTogGsgrso2WFZ18PtZbodx8",
  "key22": "58MmffQQxnLE32hNcDMfxdG3uoNM6vXUy5Y4H827YJQ5vMqdtfjEw26NMv5Njm5eXVyQVLyE4tKTbbJaDH1jyF3S",
  "key23": "25PyMkFfoe4XD7iVdtFxuRRmDsKZp5vLHgwgyeTXQYJdb4zXQD8KBwbCDWo4H38hwDRP9eP8Z6A7P3aAr9K6XcXD",
  "key24": "4ZgvTT53HcVfqfZKAcsrwiETbvtoeuUfgVRyCf7VAsN3Db7aK3DQ5J2irugWAWbw1opnnu8dCGjB8Giu7nutkz54",
  "key25": "4ULm3vZx5heUp4szFy7oCywDxzbCxNAwE7pzaSkBDjZSNRupVuJRmAzfpsTnbLB4X9vpHevgNhC1yidGBPnD1DpG",
  "key26": "38BZu6E3BrWfVVf4gB6XZFRgNYGj9CVzHidxcVbe42Cr3BqYRkx8LUUBd7bxofUJUYXYiUR2E3xuHhybMVLPTtv5"
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
