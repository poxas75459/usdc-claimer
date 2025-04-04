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
    "2LHvtSB4ZDtAf8maWy7xbEZb823LnmBZidfgtuwTwpsXjaPZcCn5gao2njwh9axu2GKaXnpXiMSXtmkHBhBqAQou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkCyR7iH4B3UaW7b1DnmuctU8DumYK7BkkxzJVfKuWoL7aBoFPkR17PUFArHuEhvttzTnXg2pyxx5nyXNogPHyT",
  "key1": "34PxVYP7ujQyHk4b3XHZGiHBbwXf7eSu4DUEoTVu7gK9XuKFYhyitUxUY63i6bcG1VRagpBXf4QPDu985pp8uVtw",
  "key2": "5y3WMAVX8YDASgJnfkJVpQCEzgXV6NhZRm7xtQJUUQBR67KpG7DixQ3zPoi6yWCv6bQYWBmTqbvLq1CA3gJQEJF",
  "key3": "5FNavLUaHp8ALEZdeyXxSC9VyvpdTt4VQ9mQjbKCoS4qBkQVXcYAxi22GBJjKhgcScc1CDrBWVxw9HUdRvzUV9hG",
  "key4": "4HgB6333TMNv8SHJC98Nir85kDchtV6AtMa28Z7nrNxDC8WJf5UXSY6x2RP2vJB1crXsHLbQS1ctZ1euA89zckCK",
  "key5": "5AbvXdPMK8vegMhS4NRoe2Sog4GKtkQ3nHtJ9TqiDWhUhPv9D3wCD8bCG2BsktPSs4ntj55gRmaBL7w5DNi32HXf",
  "key6": "49CMcR2iPEnSzfMuo3SQuJrbTLB4DYUnNy6FDaFfuWdQXWhtzbAWX1gz79LCWa2zpMx2YWBQvigECEEvvdX78M2d",
  "key7": "2NFxnB9xqeU67D9U1uHe6KVMGuzieoMMrCmfvjYDQHN8uwhLpi3u1N8cFTdVfP9qABWQtarrZR61TgtcDigHrQsX",
  "key8": "ATHSZmoiLC25hybDQXtmumsZPdsqYsxgG2bYPoRwmWQAZTjw4dd3VboVnXhSwNUd6xM4BSicA8L3MHWQvA9gfsc",
  "key9": "25n7N4J85vH9q58ovMkKWg68BZdoC8F6i4smMJciQd3HSGmCTu99exkmGEmoHQSKp9ue9njQecFzTJWUp3DmRq6Q",
  "key10": "21Zm9NrNEKnvKRsrik2wQwRB2vi6piNtfZRYecWeD1KZfpBm8QFQZeka8wGxoKNLxVAYVzmbP5spws3CdApNPBJn",
  "key11": "yakFMpVLS8MewQvArQey1VBBe8nR5TaN1y7CPg1P8ioDATt8vEmwMkrmf6Q9tG8RE4HGdeCpRnJLjrTCQGzLxPD",
  "key12": "2ZMJazQBQsEYJWkb22cgcFVQJVgTPn32U4LYak3Nz3tShxa7FQPJ5stF46tZVpjw5NPyVEJTvsCdXWyUuR1unfTD",
  "key13": "4WoWQCRJX1fu1npH8UUzyK6rqs9DYS7u2jntk5K9tnFPNsZgcLP2iL5wqLFAL2Se56dSapMsrh3GGP9XWHJv7qYc",
  "key14": "2s1xrh5Q4Ew15gCAhd9gwyg3zJA3AaGYiT2Zy6mrZwynoqQTsWfAaNh5YC7QHkpWfdaroZu8ZSwPGcEYjyMZkRi5",
  "key15": "u6AoEZghKMwBPdQxjEwZTiBisA9fGktX4WM1zu9deVgWoLMKQSueqFJomCMDKLqqzRQBvJUoLyMNfVFgjh8HxTV",
  "key16": "5WdncD6LtFxL5QnWfXmb6Q88jdJ6QfKDqXMsf2WnhsVzht6CpktB7KPEbTGWzJ89KQP9DeVBzfwuGHHLTXP4Do5n",
  "key17": "3FAFVDDSSoLREcEpGgXGAqqFzuGkZSPy4Mf1dCi22JzUmGX52ryg3K9b5Q19bkh4a71AYAHoxJA9awaW7EreoWMX",
  "key18": "3kBpJLnBqQAHP8sag9sJj1y1EK6x7UQsicjF8aSd5cn5nghuQ6TPgZquqBHAHMBetaRBniv9B7MKggtypndFB2t3",
  "key19": "2nHyFhq6TkWwkYFztzC1xpKsCohx8kE254a3UfVVu2AsVqMPf8pqzD655E1d7cEyThqTmBHh8fetPJFpgYiLmqqA",
  "key20": "3S387CWvPdUismUyySJzgosbv5AiMykpfGUzb35K84iazYZhPoB8wt6TqEk9nJJiVsJq9qxCEHhPk1ukGmvjBsid",
  "key21": "8Nt28yDzdxVd75VdVFfCQQQp9jdmWmfVoAZFechsn6pLWNaptoCQNKDxivbrPzsujkWUYF1Jio4WFMKvjB2reLt",
  "key22": "3ni3bSwebzhW2ZrVGHeTJ2uPCYEzyKdbkf4ZYVqzBMK7g9ABVHFEinLqiLcHBHdL4wz6W5ASRxAYvkcfVy8kyZ4b",
  "key23": "58bZqUrdeZCrr7fQKjGJRU86KnN1ohUbQftaNPZ5qYLXomyJiMXvLoFpK9QevvxzSgHEd5vAmVfSzp1a81JL2J3F",
  "key24": "8HgqGDY4CiagoXoiPfGwqt3MMjp8U9PEjuNN2sBqZi9ytrv8yJLGuqrbnT8BiXVkvYyB2DKVt4b4Bsy1GhhRQRH",
  "key25": "4xpxGqF9UWiCUNQ2D23uHvEUSEakwC8NvS23JSjwb1B7Zzr4CS1DZsGQbRhpNhGiDZqX9TaE9gkkpr7NYjoAVY23",
  "key26": "SoMFnk7TztB7uNN2sRPdw3G119byAjQJiQjR8QoLdj5xsQMMibWtWp6wepuS6yqzK6B1awnMww2EacpeW8K6iL5",
  "key27": "64thwxkwRUb8Q7uYmx6eZ1WDHZKJJiY4K1SkwpkoKPbX1LgX8ZgEyn8jPXLC3SHCxBFvZJHi3aQNHRXjfzv5PyCx",
  "key28": "CX33kUTe4Nj7YsHk1xnaBeHQSHb5jPvk2hbvvrpXX8oTszFazUwxxNV9o8cej5EEuibUDV4nvsssyrjpoBNhaj5",
  "key29": "SakCfvkcm2sTfvBUoqpX5djKom2VNdLxuWmHYHF4h2iaw37mn5iibwsoinc6d15iyB1SiNJi3KxnxfKzAmYVXD6",
  "key30": "4JqqxEyo6EF2asXz2nyNjt78Z6ggf8Smpf5sa9b6HCGjJy1im7tYuAtf1r3n1EHSV5LSZiCPGmSvk83xsqq7vjNK",
  "key31": "4iJBPRqhXi6qVQdmR49mR8p2nQs5rnJfFa4gcBvWTkBECvTgW94mjwKL1UMut2WvHMEegUjFfjDkKehV86mJvZTw",
  "key32": "3TVJQUvVqsNFMUEkVMX8sz3wRRr2uSPhzwp3HVHefzKZRoGuuAro2RLLjcDS2NfCT85mDTVBQjX6mzRixFsvcDEE",
  "key33": "5JqifD2fR6jtWbergweYWGCp9dXvWPxKPD56BMZ7xmSzjptW2fHefvj9Fd4Zp1wCQXHDauarfgEsu52GLh5npQD4",
  "key34": "VikxYsvusQDRKkTQuqfUmoKYd8jX4hjcDytr1JRbnMXo4FrjF3QsJKQXeiwCpVjfYGQNZ2hErXHAtNFJxoRgyjp",
  "key35": "2g4Gqzn4YjGuVokvL7YwGxRJ7tqBDg2rpAm9XhGjvyduYR1XoSjY751QrNnP4E2qiQmLVmnGQ57QnKwdUbjKjudz",
  "key36": "4Enb3vLD3eGRLsDynhTvtPjQFf834LDuwRwF3RbVnSPTuuq55UeJUzVAP8MLjNdXVoVBKvjkywi3ZBrYdjn3VTgw",
  "key37": "4ffi9Ty8bW1dzV6WLbFmnEW1TCu52f84adCC9WYVKnp7DF9eiERyrXYJntCQWdcceD4Pww97r15HTNbS1vizGMQ4",
  "key38": "5tnU8wDzjCTiC1YxaAJHzkFVrNPEKUxHdHMrjtqauudosTidRasLC8JaNzPs541Va6MoUQf1S778R3hcdRhSP4fC",
  "key39": "4QSAMZqzQjzKyGisi83E4HUZtBQsHmkTFqXARiJNVGVKJDgsnxF8BNjkctehzV4vkL4L89GJJuphGwoisbiqiBUt",
  "key40": "2e4meUCve4gAhxy8qH7hVX5bp6b8dYXiz8EEt1oKvMANynC3hV13tyPp5ZHAuof3aY1DxUJ76sgMXxmDsxkb1HLG",
  "key41": "LeCieY5Ltwf39C7FjAkmkmdx7njEfJEJ1QkvupB9wxTm8hFnvkXTanfRKmXiHiFRVcVpbeH2vGJgpfLonD69GAV",
  "key42": "3TyqyznKL3zdwzew9oLD5LxmHNKBsevvdZgavP9jVMusSuqGZ7XL9NZK4xnYedSjhZgHbvBFDaYH2UKc894DKhnq",
  "key43": "4Snn6kpSLsJM6fotyDsxdEuFJxYTU37TmKZW9MciCSuK52sju7z3HTqvtnp7HaChxU2qnGWAQpuWP11Wc4xmSMQd",
  "key44": "5zCgwd9FYbATkQXtvbBN7YJWZdX4bbPXUvz9kB4ihpS1HdLjk9nvphPy1UPThJkrP6542LotUxifteZA1MQYUkTC",
  "key45": "3FyVUDfA6PUPkEETn8HHB1CvEpKbjuvSdAPY95YRwpb1dGQmnMBenoV48S2iTYw6HJ8KbWMfRpcJU5TsZxVKtnfq",
  "key46": "2adf93gJhyHJkYbF5o1wWVUWztL78xQUfevvXqWZT8sCrx61GWVvfKqMirBbwYZUCq6Re8JYvkmi2oBcD8XCTnxH",
  "key47": "529YGP5oKvEDMas8EERdFz9RmyFd3rNkRit5diiaxWdiZrNxwXGvYxcQh83LUzN2fvqHZDrkx7Xd1MYxRsEV8EbZ",
  "key48": "4Do5gEsipds1PtYiGmAFm8RpA91HcmpUWQ8ncVuCnm9ZQQYx1xW3tcqGcnKZmritanNZspPCEL5ucHVhy6ZtVvoB",
  "key49": "3WyKDzPAJC55XPuxAbJp9U3n5oBREzsPjYPzrBP9QKuUoRrAGY18GmM2GjFYPk8F59Vj4ZRgkgjQ2CFGjVcGR3wM"
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
