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
    "2xeExWCUyBc1dvzzCjaDh5DgVez1Y2ayfRDWDYmpJY1H8EFggGB6sbjiqoG1UA51cggaTBDnqDvTdoXE65MDa7bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTyDNP7RGoJ2pochQVgZXV17GRUJ9aesLYrvQ2HVsei6dHfwNN9gmntQP2TgqpaKLnvacjdeNHcnfyyp5JNwx6F",
  "key1": "5Wdd3VnYrgvnpwMD1gzCoVATER8zF2NmmHYFjrNxjcJZd4yWgY38pHqZhteiLMydXxQWTAtpxWKeCoPVGTR7XUVe",
  "key2": "aPd557LVUM6BZg9FqTnqvMZuevoqqK9FXJbQzVv14msmaAfQttH3Sd8ZduKSvWEk5gQtsGZ22vgbkct3fsCthtx",
  "key3": "2EKTBhJPYFbz91csjYp13cyNjM7kpry7GEBw3S1RacbXvqzDdeuuxTqJzgXq1Ysh8xyYNh4npMJNJongzrzrTgYd",
  "key4": "3FuU43w2bxRH3WCP89ewSpDUdsWfZhQxYrpBQc28a88ZnXyMUNBvStkKeZRm4CX4bCNrQMbVPF8CJssVATUT2t2C",
  "key5": "55zQZgL7DfKguekJz4J2MvuTHgQa44Qw6c3EgVsfVrug7F4akkpEYuoFH1SyyhptBmVJVxEdaB6Mu75ZcrPhWFdk",
  "key6": "34FK4USEwBw7229NU4yiHps48FzownHPgBLnHNX3ZTmb2bv8pFwH4HeUXC2AkZHxU8SKFDXy4jEGCvEXjwRLSnDk",
  "key7": "48s9wgUModepJqWLBzPVppAxGVhiAoUBpyPCNpSYz8rSjfZK4tupsjn76bUQbZ4Ecdmx9uNEuaGoQAii87o411b9",
  "key8": "37UWj69CZGDpCjniWb2E8WYraXYAL8tmLkJRLMbqWLdEgFYmjF7bA7JupHLyyAHQaHAKWHarGUVeWbgom3sU5eHJ",
  "key9": "5RJgSzWWcs3UFWLwdihJ6W7BCqLg2ynnqhRnvNv6dHn3sjxhbVqjXtEEtAdd2TaEXU6y3jYmBkHiPaWRMypcY4Vy",
  "key10": "3zjHiPR2rf5zWn47R9TPNVejLZfLrKqi985hSnE53URv4cpFMCcTiwRkoJo169TRhbPAiZNcUeDp9FBdKr4QFdwb",
  "key11": "4tqtN4A2FduYpW8bYQSC1Qi6KEDvV33bfy8QX2ndAwQAFL6rrzST7WA4eZn57pztCjR8VMWkvtRTp9ca1r8kVELR",
  "key12": "54L3F4bipP9fHZCGt8nibT2cUxR7YkR4qZmiwk1aJ4KjUiJgv1yvyy1HdkYGYfdoeHXxdhibEjx6jj1KAKJy7Pe",
  "key13": "5yxonpAiR7jTKf7Kg4CWvshrfp3D33x3Pwe4v2VtGpxKEpbMFKFxoeYvSqf88ZchEtqztubstWL89KfygcgtWysS",
  "key14": "58xdGbhAK6YpVzG7DzYkEDXx1X1MP83kQvhfXsFLgJeV5JawvU4hQU9yCPZSd3tff6dZugXjVd9UKL5L5tW1h22U",
  "key15": "3UFyns8qSdfqW8Q5te2LEqwah6rZ2e8uqMqvYAYfddAzXXgcPidXHSorgxSFvUhyxvfiN4L7yws1wjdG6KW5VqUV",
  "key16": "3g4XhZb4XE82zP1JzW5kVJJi2ayuVcWng8FBr8dy58vCWc7UGnY53X7yTjkoKEmafr96TF8DUW4QKRWsK4v7htay",
  "key17": "3cKDyKkY9vddyt55XPDMcoFuQJH5RJtEiVWWitJstq5QCcoke2v6UUTmEdQ8MgK9adEM91mL4wFudjjk1k4atdLt",
  "key18": "2hNCHyQFz2czdH9p8Dr6S9ZDUTWSxRyK8AxA4WM9vGvZn9yTZnu9qSbGcYCswscCYtM5eLQ9chbMjKfXikGKCVvp",
  "key19": "4bcepkF3wkRAVhSb3pXY1rY7uahqCs8oGPFjLtEVetCod7a8m4nVPG1m5ftc7jdkp7MRKz9UYnzfrHNDPtgqLqzx",
  "key20": "5RFUMWPis5YJcihLktDMvzwCg32HHJVYFNio6GCCcptVaURpkESaH7B4wuB5KYD8syyT5cmMuXPGMC3D9vP4PyqR",
  "key21": "5U3XvwTnSs1nMYnQ2t1cViVbxSq8rbZ9huWiRpG1C7i3hA3yeVc6PBztFFcA5C3M1r2ThV3JLVJ7rd4x5dC5Rzxe",
  "key22": "49ooSGicbwBTisaVFJh4eHEmoAfE4qybTZNASqpTeokLcFeR2vhfVB2xDWxzt4CSpzSfQ8iZnx12k9kGhtPGT9dP",
  "key23": "tn67BJNQaG1TFZjJJp2p1NPzTv8A7rsgzVYdo5Ltb9feQSU8B6E1BFiXEA9kNNAYshZzbxss5XgHdJroRv7jn5K",
  "key24": "3QGSUr2B3kANqM4n1VoueNYHDpGi3JSjuEcMHFscRf54iEyVtXHck1RB2EvRamGPgo78BuuVMvg7LMV674qMEym8",
  "key25": "647dyegM3NsATTkVZUJLP7jpfwBkgB4oExaGSKwWKkE9DEmF2BhmJCWSq9SpQ4rjGUGeaN1EZcnJDhyhG6BfL2ae",
  "key26": "3ro3DFJZx8cPvoBhRdtqaaccTMQBsRHk5vbbEyomdQj6sAnHBZ2Hq1ythbEjTrKvfDAmRNUfwmDmwMZYKvE6YGT1",
  "key27": "3p8sJ4BTegECW4qiLX3fdYMQWuQeTghfwmdQPWzY427HnktEng9JJt4eSseNvddwX2fJURGs6yzCngyKvTbhnuns",
  "key28": "fVC83s5gah6MzARJRtEHGR7Kd2FoP9a6uExrWiqqdewk6ux6Eego7iN3WaEMPjGaxLQxGA4ZQBNABj22cSCDYie",
  "key29": "4dUipCg6FKuyEvRmTARZnLThfYbkmX3UqwDeMTVGJYD8VxMDCATuDxKUFJwncpKWX88tuT6qtVB9mHK2xffeWDH5",
  "key30": "2eu2MjWqmi6yK4saR5w8Ub95z1cnmdz7VC8RBY3PsdioCyR37jQJNPjBcQGgtxqdR41BRC8APvwDNgYDioGNoxgV",
  "key31": "9MmUSfXQrtbHQb62Tk3gFuhnQWKums4DEx84ijJpQNq1mXbqtvtsvHahgssVZFjqnJGMPGJ2J4buEWWwqPfE3cK",
  "key32": "5fcWDLQCSbfonZBsdhb3sMHArMBEvspQjHUXsPdM5KBye4oaJNnq9j9ZtgHg52dEy8D7HgeVoE6dk3b3SQfpqg5x",
  "key33": "3F3fHtjcPVsdU6RW6svet3SVbgs9E9yP5x97mPJ3zg6df58iNB2FaftCBfx1K9VaoaL9bjhTv4UTUUGgt6YzURb8",
  "key34": "3Cc4ypHyfRCDFAJEny7MfMnEtKR4ecuJNdQ8SM6Ywby1bRKY3tRsewMJzyS9WKL9Sw3f8NFvrBsEch771KHx8hSa",
  "key35": "3vJEBnf2w3ATiypiNEM1yXK4XHzDYxefR51Bn7J2LHUPPaQaLxZuvP55udjJFgB4oqeDKYKUggHirLENJwaTa62D",
  "key36": "37xak7bboKrVpiaQF8gR2WU21RXYXEDy9rganmcGn566nRo4g1FUebaJtfyJvvvyTji2xq8GxUHxKc5BHKgSRxkd",
  "key37": "5JTPhMbeWyzcLvdoWGDCBJyMkvxTN6MujUnbsWmo3S9MPN1zPpxJpX6o3EqUspSidaVkjhEeHtMLcFb36xULRuq8"
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
