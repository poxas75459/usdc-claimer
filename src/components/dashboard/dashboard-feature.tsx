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
    "4x7riTJB8XAriDAoPtSHbXYXWSBv4qF9eZjWLHaPD7udeZ2eb91BDYgnAdsZHQ8Qe8NTdwcVGjXuY9H1XkdNZduL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3niuVwLrPn4AoHAv5t9AxDQmLjbjrGjKhMVM422UGxL4GRw6Z6yQ77Lmro5hYJRPhHMRocGnkjF7AjaTcUS6SVCp",
  "key1": "56iJiXuMpX2kfTVwUKW7MwScESrmYD7Cwi18vVn1oY6Kfo4qGdMM3xghnuJu25EYRFGCJyfC8CgaagDVPyhL3udC",
  "key2": "2oERmxLy3Rvn3en4wNNGp6fKMYdhaycgwMgEuxkM5e1RtzfXR4T4iuDXA1aEXZJqyHaoZFc2yJqAn2nk513MFwbx",
  "key3": "ddJCSymkv3MSGyzybNDiQnTjCxNZiB8jVTCssXwHCrGSPSPpJeuQmYR8Vhchr24PUazYbtma1Gb3cb1LVy9cTyc",
  "key4": "264QGDybAqVx1rZaGQ3g9rFktRbqhFzmDghRs3T2U6Cj5W63TpUoVvJ4MVS7NNAn6ZKAKP18mRh8uB6K8zJMnxak",
  "key5": "2acDThqMFdP1QZJ3UAjMn9o8s8BuiaWqdkVuXdBU5FBEhgLPXjxgTmTEFJcg2q3YbnxJio1JVFKDhDGn8WyitvuA",
  "key6": "3EZjDZ7QJRLydPTF4D3rsKaCiCtVxQcx5RHNpdzy7A7itMqm4zNE4NfphNkuE6QyzmPHCStvBadGz6hCmTQvh26",
  "key7": "66tVnAKjhZi8AFiFa2MupyndxdPi2r1e3fPjyG8EqAXmwMUecA9q7Aj4EPYwg7f6iFAPgPrqr8pBLcHVSmEUG8XV",
  "key8": "C7VQR4iaXpXJC725tza5eQiDN8A4HV6UXfsZnX1f9BPZ32CY8KMmsgbfPnnXsrAsmT2hNeAj9fpa7b5f2xysPDJ",
  "key9": "5E3iaEi2eB3Yw9GkRRmkL7cZfQaUWcvsbxjnn25ereEWPcgSDHcn5uqa7zYzXu12VXKxwfvfa7LVHdBogV8ZfRbx",
  "key10": "5Kfxzdgs3dUQ7d58qQWAFj4o6UYfHB1BcrdztTywV4w5TTmKANj1Xw37PMBN1QZuZFxaG2P93AuYjmVxS4BfGYrX",
  "key11": "2eKyKC1Kz9CiFSfbsjMaRYb33Erkh9TrVutW6NZzpiQx8rawDDErEpuY3wRBYcLxajyDaXEi35CmZHuiZ6oBLQwg",
  "key12": "5faeSfo84ZNggHPitaopSYQtNLvk8nDjJDMCcysnkHFDZcr7Dv17LTii3tauR4uUPR3oCKfeLR1465UTLkFtK7os",
  "key13": "3mcfRZzpHkkxDZSdbxvQcKF289M2nJxXArxB7FxNxhatvLcQNQQ5p49LNumGr7zupQj99Qyf1hpEtiQ7sx7aiCYV",
  "key14": "gZGqbv7Vrmxq9paa8k2zBTVVN6iUR7vD9Fbm6cqjv7c6h7ddV9GrgDcujD1tX1Y6yPZUXMKR5WbWHLMUtFwVUJY",
  "key15": "4hC25S977BjQcuzWWR4NhsG3sdJ5Y8UCxsYh8GArDqqK7qUjbdXZg9ks7bXGzBh3Tvm1UfeCkQ766eut3qxPegpK",
  "key16": "2rLn3ifhcvqtoput6Da6g7KVXRGKbDj7ayLS5fvDhsiTTKiPGDjvHgg8DGgxtQHbkERcjP47N2z5Qu8DYvuXUDNg",
  "key17": "3QjHXDYfhm26MF5yWnRqAQoaiHtVSQFcaumnKL1GvAYmTYJ9kJc2RUaeumrdDQzWqR7YiotSyFSCCQ5XdQf7mAPN",
  "key18": "4Eh2ym2iGZp8ztkfXyPePu8no9Kj17bWufy436MqTbWzKzTXBsHa4EnxQxqjsSDS5Si9ht5CD6QcpZPXWPC2bA3T",
  "key19": "4PcLUw2hgqNb7nDayz1E7r6k4bbGQLxaghyVh1Sy2oRZQsUe6GEpozn4dPKRjdZKHnFR4ECWnSC8jeFFnoKSmWR1",
  "key20": "2aPJxv7XDDhCeTDkvTd24T4omg3xWQAQngkXF6quEEXsbPSn9ScbK9FCP5g7Laa5uoQDCiyBKDiMH467nS8r58Hb",
  "key21": "s3ks1x5fzrFHzyfBmdWpqJgJxd1j3L1csYY1LtJvEzYoyHtk45Xb8QavEDqUE9uu3LvcY9YmNSNyxj2sGEVU9ny",
  "key22": "5QYe3moY8rUd3p2Q9akysvL6cMEzdqvjXoCXvNA4rEHAzxgmQfVtqptR3CfJ63i8C78MMr8b6iUEdAJo7Zvsginc",
  "key23": "4tJHvuRPZepQGTUqDX7KAuB1pkopModA1eYBeDWpiWZJ5zfU2pLrLVgUxbAHgrTVG7nwyTVYw7GcV57tVrNEYE9X",
  "key24": "3JYQ1G2eNbnnq2nwwvrHiXFKQxZu8VqCxniZkHd6YULTvrbhw6goCtYdSK4fTEyXtFXEozhH3mv46ZHoNfoxqu2C",
  "key25": "3onP9VH3LsErUt7WBtos2nVYKRf63WaQVNeSjd7BRnFALaKCVoZhTR85NfW3y6eB8TSXWHUgguTUnDgyc3YbZdDe",
  "key26": "3DKQm7J4YM1qJ24KeAGWXMbipjyCPTuTQi9PB6xjua3NsS7EDC3WHRywZeaKhxHyxX82ieUUypWybPodG4RAoo3D",
  "key27": "3jCx1apKiz3f3ccReYeUZ4wNGa5mowaEzfDmA7P8XiTz1if8AeCyhFPFwqmwwTT2vfhBtgLMrWSPVUUrJcf1U24U",
  "key28": "4f4vXP6U7HR1drgEdQsWg4d2pVSkwC8SLssh742Y5KMSJDQDcEZkcPZYSnySLpZ2W1zogaZ3Yc6zknUwV3SjCodV",
  "key29": "2oHLxDhBwb1GtEKGx5cJBZd94JztiieHxQNuaNES8Mf16FWG5ESVnBYPLA5jKBBQ2UTo3WwqybEM7augJkXGEFR",
  "key30": "fiQYFfe2pQxmcujk4km5Qo8nBXbXRa4CL2yovX9zvQ15aT82usSBvmWELK33xmMqdV4vtaJYXkiz5szfHW91Pa5",
  "key31": "3HMB2TxkhhKj2g86WM6ja3PyXTjMoVLVrF8uDosnS24x8HAZrDt3KzRXuymTpyFst3dU3uVYSUv46HGxfMVAfrB"
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
