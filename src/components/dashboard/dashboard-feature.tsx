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
    "4uvZmxkiZ6QVidLfKwoyoW53y3YBTrNdDSeQQNHRD2mE53RvCcemx6zfUJNJb4WrYbSec41rJZHx8gttHd7oioPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "678iFmfcoXS5bQf222how21ZP7jVgNFZEN7kuAjdhfGW18LtHUcQ7KkDadq6kDQ1CZv5Ek3CqCK21Vdb6i6ob6MC",
  "key1": "2RZdPoCqjDQ4skU6weNgKF1MajXVE4o9KJNEYbQraoMEqTQ8T96Z2xFV3ViyF6EMP85tchqLjXqNfbUwGPbQaNHu",
  "key2": "5NafqfiTDzYB8QgaBtrAvDQXNczym8VvQBWfvrwp9HLXgK11GP3gjEVQjVqfM4SRqzkxyWUpurgbJDizdLzFF9Ub",
  "key3": "2Y4qKniegD3rCeEmGq4Ukng83DV6DG5bKjPyw82Z6wYnLsUBTvUn3peeKHRFEANW8ZysFrZ7euLRkHEGZcXrKgKS",
  "key4": "eTSb8foUdWLMZxiZQAG2CkNwXpQqjFUihLtQZT2SiFC7tLqW81M52cPb2LHABCehqBXoqGbZta6Mubspq7j4F1d",
  "key5": "5Xbtgmyua1qbhAZj78h4SngbNEsVsCr7LccypbwTBetj9FgdZGKcxCyrFgYr77GpYa5eRcuQGGxjC5Z5tJNKtKrj",
  "key6": "2foEQPzKw5KyJLL8LnBYU1VqASk5rbvciWikwyrgvNUFAz1E8DendfV6fqedGYHuCE6vBMaJzmaLBqYZ7TSi378g",
  "key7": "54LgRuny3CaWCAxq3yJ7UPPQp8uYp925VVQ2aoPweiekBsbrNN1drfsJjsDKtdeByUTPyrBV2bdfWFaP1xAG5cVN",
  "key8": "5GZwWzjBjk4V9n6sBzhk8hVhN4d1JMCcLvCugG7zJ2Ym8dtodwt4q5xPzek2cJFLc9w9cykQMvRe6qWzphHUSgXM",
  "key9": "4bXwzHAvQzASJHaTThrzeiR9V83ZhJiETVG4WV8LqnZvmrT5vQrhji1msMMR5bVfZV1RPPDWzTQAapF1otmr9aFC",
  "key10": "548i35hpZges7vbXVbfqEYbBiL8aW65ft9GDjQyc5mPZvbqTQsrWy76WRD2ZCuaxtw5VyMgij8mPjN3HcWWMnpwy",
  "key11": "4xKF9m7KSSk9mG27iaYPAFnMhpBX6375nATbsQhuUFuUrCaSToQ5GoDRfE2ZisU4oW6ch8DmwRbUweGdywyjpYGa",
  "key12": "5YWbMWY3ccjTExVX4gZesb5VDWG71Q1ZS2Vy5mHikyFXuc7gmY2pQA5Y5wKCuaeY9BaEh5jTtBPZNT9hScJHhzUY",
  "key13": "43N3rE5ubhxmeGmujX67spBtLEteGenajgHL8hw2TpV9WUTNpgARs1H6PQjELPG9FsxPLcz5SVd38NakJUx2UVhh",
  "key14": "44wmoBAX6211QebpLV9pQve3tMzWWRjaBhBHr5eUz18fxkBpZ1ESk7WyhLmv4Porw6Cd4AWgcBYjTw9xH14qy6H8",
  "key15": "416j3BVcvdmHU3AMaWtSu1QqdLymSyXrtqzgtpgPzsCoN9nNXKa9ggi4rcrZ9JUsCuPoJfDmc9pipEES3JHXGaE",
  "key16": "2CV3M2DNjrLV8okGehMwtQLRP9zL36UnPqtduLNwJ4HGxfuZ6Dfjcqz1Bb6FKFHdughV2ZcGt1r4wgLUSF4ksZR3",
  "key17": "2a9gnq12teFqzxXmZ1ix1WafAQZmbVtZHFWwatDtsAfHdG9uNUbmo8mnVzVDc3jb5xidDw5tkLV8pZTfrKsGWZjU",
  "key18": "4yCc8unNbLFtrEaEDX4XRj3J7ZpRUwgPuWH6n46yqp97kNL12wEeMERchj87fW3U9HRdBvRADHjsCWnpZkzFGvjN",
  "key19": "4XVu6a1zc8mGNRcwe3oWkP8WGmDfPAF59TuRDzNvnWXtFSriquAva8brp8WFtENZZdR5bVhFYW9Y1GwfjG2LKmWa",
  "key20": "5Kdi1YM79wc6fsreF6UtYmg4SxdBgDEexDAAixXvXDbarNQgmFvnFN4VdeX5bHDfiZDCSdkGccffsLMPouCPW94b",
  "key21": "3XJJcKxFvH9yB7bDSJAZh6ip6a9hZE46VYAaPvh9qYsWbah3xZxFNchGvVybdvrpoGjt56vCk1AtEtssngR7Kg7F",
  "key22": "4yTAK2LCetm5DwQb3kndGGUxevcNzLy3Pt1ep9iFZTz3P84nPKHpJVgGBieYgyjiHduCTF1cxNnbSHYL5LgMnkDk",
  "key23": "5AX3pJSefYiL4ze5xA9wNwvtxamAiC9TevmksxKSewfxyb4ouaeKaV9nfPoCPDwz953TuKCC47xnScUbUs94miv9",
  "key24": "wpbtLZNAwJG2fanN774QFb7GNULFx1wV8NvNdJDwffwX7TRhhLRMBWc3YWp2sqy4u33Xj6BRokZaUF95hEzdvin",
  "key25": "24c4eDrJKnQuRUkbS1pUrXLx2yso68kaxbiMFhPWGyNnphGgNhYmVnDBTdibAGSYXKFdYjqNyk5kFKuo4MLZzicT",
  "key26": "37Rn8zpX1zBbgvdjhvVuyiwEWCJpVvNd1LnBN6uTvwo6xVZf2z9HZ3LbjWVXc6G93oZWWcnUQVNWDViNWJqBNLp2",
  "key27": "5uHCfEhsFWnyd8pnf6ZM3a1WaGyifhLXgZG1M2aEzFPZ6baGVq3Nea8w8G1Bcq15gLUK6nGzTZhx64FFvFBarh1v",
  "key28": "2RJPSmhqQriJiU8EovpKJTT1kjs9bjQ8oiHU4rV4exBMo5Fs311F5cAWUcPRuUzjzFkobZEygwQpERSrfU3FCmLe",
  "key29": "3WpMFSR2xVV9oQ4dN8X6JYjjmZ5UHVqUkN6P2dv1uFrrPF6oEHNqaV3rd6A1kZaJb9LnayX7qkJkrHZbLDmVDm94",
  "key30": "2yBeZEnMtc8NYNHRuMPPZGkVXczbhqeXixrbEaqruE1Hh4jWWifPW6WnYzmpvJrYVaaprDycKpeW1YwpcTFBPFtH",
  "key31": "4MZXDZzyoTJneBGZ5pwdEYTdE86p7qL5CPJae5HZ7JsroqE2ccLdyNkjJGzQR6ZwGHGbHu7csZvT9ymFDd2RTSqH"
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
