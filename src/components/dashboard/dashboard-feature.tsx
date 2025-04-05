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
    "3ERyFcSsZUWyVHA4qFzJFitFy8q7CkxrdUUfrjKToqGzuHJnYtVHyvm3XW6hVrmx2DntH7S89sHALEPsTg7Sh4rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "644J8c1UZsbnVsEndjB3b6nXsmJG3NNkodS7CHgPFTKZ3tHBsvb2Mcs7NfAY7Dv4fxvgkp6Q1w7kGVoe1CNywQ1k",
  "key1": "4QSr8Ya4sbres4uF9zjjnzXpfW4gQH2VGCa59KjfCZCpj9w5K7iJiXzJYtLuJfPQJiGJqh1f6bFUjQRen2jyMQL7",
  "key2": "JsmydckJRu2JHRJg8FsDhLj4TDJgYTTHXU8zK68eVxUGhBNvuGCe6YbgqNoMqWjmhzAhL4WsBq4T2WJgc7ZXt1i",
  "key3": "5S4FkuqdfXLLZDHBdLe4Su19x6mYL1ULGtbYjMBsBxsYW5aDLakztqZA27wmyxXqJWdmky4LDagvWLXB1Zy2GfvJ",
  "key4": "nM5crpV1zwFfVJQTKUXR8qmJhpnXxAkBrNbDCsLFEHZo89ZFrwwf1BurqM3uMkKsmSwga2S39FxYcKubZ1C6Kyz",
  "key5": "3VHCV5868xdMi4jxRKr6yrVbgKWdcBNcNR8kvexFZNNVZSe9KXhbNZHJDSRxBXY19QR4joLqpQuLXrJBSSfw4ySX",
  "key6": "3G2PCgCjmVWBSHb1gA2qdGPzBBcW68UbSpWuAxdKEv4utK3Ut5c5zr3ZFsRoor63R4cgeixU1FteQkt3ci8K3LAE",
  "key7": "2y2jPyUsEaqfPr46k51t5uFKiKK2Z35pLKu8vyYi1Sxnp3wY32WZkYbti36YtoaixhhRQSc8fwS9YurcnBg5Tpnk",
  "key8": "4kVn3y6araGPbDvGV7iKBQf7mkkSA4SthB1EhdZB9NhCpuLf5qacQSQGrzpDvKJ9DynLuT599cCm1ybtqWRyLRNF",
  "key9": "22uDpo7WkUNKw9Dcdp5Ad3kickjrX1KZCuYu4cq5vZmju8NxNVXMbFe9BNEQZX8BUJzjamV9xziChKqPppNZSNPg",
  "key10": "4TGBahDCyZhYumWQyrQMuZBpWG4QiSmfuZy5U9HNpHc9MjpgmWqetTgqtFcFjUdodbTGVyycQp8jUpVVQx6YaGRQ",
  "key11": "3ovmuXCxK4giKf3JiBexDVJ2YeQK7ejAaZJqWEtC1hxvMVjVtqyef6kKQuHeyy2PAFEbxWVzeoNtA2zg8WUhAqyE",
  "key12": "5NJ4mK6L81G8dTUBDpEkPiAaQFuPS4PRkVhezjRL1T4kHpdYC964SEc8c31MjEWf6sykwDmXoWdNrKu4DvL7S7ti",
  "key13": "5RUT6nenXzT4yeC2K2YdA9SdPuvL9KCELQYs79Htox2nt3YnB54y8PrcUmRBxUe6Vk9UGL3YLAzWT1rC3R8y5Fdz",
  "key14": "2yXSLTcZVdZ2bX6SxUHFWRaJMZzZSXnZDN6qRBawmoH834uMwXiMDiLREG2voTBcjgsLfCPxaGzzFhuGJjof75ut",
  "key15": "4JbYD9y8nhh2BvdNUEgHxfN18f2CF22N59g8LTrqyzt1jPT8fpgDvsadtGFxbAG9w7BqRnsF441pEH1nkJQj4aKB",
  "key16": "57vdXkG5x4NZz1a7dotGhTRoH6QR8xhFSKe3AQeVm72R5xCH9CnuLjoszAHKDCCnhieF9E2bpCZujk1xBome2LGU",
  "key17": "5WMh3KeHCAcHwfuhGEDz2DMHXtSdztjqfUGarYMHwhN5zeebd9zVQU5ffxr4sjDyhEsBvVmgaQSPchdTtBxPQpM5",
  "key18": "4P1aRFmjGQrtc6FS7Jx5amokoBCtZMch5aK2tu3oSATc7P2DNQTL5sxNQGkyPPhThhRQUCWi6PQfwVagZotQ77Ch",
  "key19": "51QcvPfKgCf4soXRVRtbLsGmSkr9gk6m6TT4oXA3aNDWtnSnnyZ1zA8qPNLtH51Cysv9qTPgXkeRhAza3ztD5c1h",
  "key20": "3MktTi4kgRTBuFkV4kVz3YCa9czF6SuJbmg9mQNeBa19J97Vx8UEBx5o2rhWBnJiRmYQuNSNtb6h4aFyKNXgHg9T",
  "key21": "5N8zyTZVZJKUzW2xMqkrTZwUPWeiC9QScFC2mEGUJfhv2X92CMsS9B8FK9oJafAyBKTRKbmVBWCUrFFVG3zQS5vR",
  "key22": "4LQjnYpCLHe2MWrzbSjfdkM8X7qUaENJwwg77WXXr2VgR4HRvYgpiCXAU81X61HfKZwdEUj6Wps87rBqgLDXvRrg",
  "key23": "4NXCSn8pJn8xGyq8t9pmxfN4A527gB8d1XvPYsKPY55zexFDzQF3F9whVZ6eBiJFNVRfERNEuRC67xftnxqiteuz",
  "key24": "2baabfsNbyjsUMjPzRp9eESbHcuPaEgZ6H4SpuDdfuEZaDDamuk8NpsCuQJcpZqLEiU66A8GfoHwZYkEAK18rn4e",
  "key25": "4VZTYJXKnw8d1mTPCMheTRvnhvSPVK53ti555rHpPisSNBWtXLVYXrKUTh51uw6oWAdgJ8xLhd4AnzgijiwoAuuo",
  "key26": "8ZQDc258tL36Qh9sT3NKtL9Uw1BjhiACKh28oKvpqbaxP89t1tr5EVwL46Kb2GY2LsDP9n4KdB4KfM777GSxB4t",
  "key27": "3cPbutoZpFtEqhuG4YA84FRQoXHKNjm4FF7oHLQbqwdEhEkEm4LJSw3t2nAvfM9DGzhHKRCjMRrqa2Uo2pjuY88o",
  "key28": "2UhesP3TQoqE8vptvsVimcZcMVinVNuqM6NzEP59dC73VAJDznZLBxD9XR257grx8QicTVuNwDhLPywpmh8En5nb",
  "key29": "5L5uUEGrugxLAcvNqHMSA1GBrJSPajq68HoYLS8aDZNdNaFeXQXV6Fj2uKhW7wtUV6rWVUc3rjd37vE3uhwwJfx7",
  "key30": "5WXECGq7w9fuLyXonQeGZfhWnhBshVxDHZMKkHr6Q3tPM4KvYorxYV4wgSdYcjSNrdTi1qPYoVV4QXxA5KocJTBi",
  "key31": "377pk523JEP2zZakuu6DuHCYS9gGoBBJqr5aGshUoLvwVP4ua27rkRXjrr1LwnddZYEnk5G26vuiQn3KfwuuoDQa",
  "key32": "67S1QA3mSBtyFPegyUPAkM7akKrMU9sYGSymCtB3ik3r61krcX5d1Cm3dTgw3LMy1gwPHETawxfCDid89kTq76Gc",
  "key33": "4bkQc7QnudeAisBLUBrb6zDntPWUSjQFRTftJpJDEMe3Trw3WJnNTFGki8PKLMmZA4N4z6ZJKL9vAobVqMgXbt3"
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
