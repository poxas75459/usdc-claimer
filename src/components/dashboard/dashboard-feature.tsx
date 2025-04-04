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
    "3WKzG1dsWJ73QGMw17vRgzaHGjSApG3jWDmox2qBYRHr1pccg2vpZG6d9DA9TCkT5iGS7L54qPzSLBc7Zoddgdwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZStWBxqj7C6hUmYEHDdfLC1szgCbZdgJcYDn5Bq8bFBeK3wCt4p95hmmmo1tNuS88PyUFVJqYTJBWCWn94U7k8x",
  "key1": "5JsRKmSsQffm6nctFeYfgNCwFZH8FHjjWo9CKt5cnBFUMtnpMWi6Q32i8JnirinsBfiwDada3edobNtYMu422ikq",
  "key2": "5rSzrwURapmKHPeRapTzXfZGbCiyfDBp5zPoJr9Lymb3bXPEswnaxDa7n7hTg8d6gaFGxMeK9JPBntLH8iuBTTJT",
  "key3": "3KFCcLx7cLhqzrb8JgUxYk9AYqvv1BB8z599uYwD81oRfkv9f2bbZgecrrKQ1S8jeEx9k2c98BivFoSU97x1uTxG",
  "key4": "2LKJ1EwnDbPQNtMZVRNY2BK96B9gjKLhVxsuxK2LsqCpCJtHA2edYrnzSepL78hQAhGq1EorDfXEna1jNdZf4qPz",
  "key5": "5SCHfNzyt9TeJ2sK8QjJyWT8SLxLEwUPCmXhph8HPjjPXcTs4MB5apP6uUYhrRpfhm9zzNAu1UUny3w1c1fdoKWg",
  "key6": "crPMWMmLcX43akeGejrgHGJUDHEqnPvDaoGACLVBrmsodX1Ap7Pg5BtBfLPbzJRVN944T5bKxnFVWn2wpnVUyfr",
  "key7": "2wdNNDD37ydkXthUyo4uu3xbbzi4HCg2KYP42KoYDYxidAgNzatUyUcXBNFAHidQtRv1Db7vQ5d4kLZVR2mEW3C3",
  "key8": "3Dy46dzqSKGigbU5aoy7eKNGwH7uRNGGNKwHL7BBDuepNeua7ZWRZWHRWd6HTvFxee46dNVuxPYatbQWaWSQgZ3q",
  "key9": "2YbfKrhG2g6WEnoLjiLyoWTqPhJgethTjMPkBHkyK9nEfvs7A3AUZrQiowqtgun8dJmKhJip9QF1dAiG2W6yw13v",
  "key10": "57hRD9DsbRrnJ91BKjBWUoFNdf389LJ6zCnVeSbHvAY1VYZ5axEbCsAFjJnmtWEqjNoC9CM3ACAFdccqvFSQxbS8",
  "key11": "2YirJHDFjsHZ25Wo2kmS8Kdt5fzha3Wj3HcQyi999rxRy2YYHUPRYyx3BYhybedjvz4jy1kd8xvgbZUn6RZqXkar",
  "key12": "k3hpDQmkwtd1EBfTmPjVBEEBjTQkDPYcPw4CkXkg5Zx8ACS6HBvqZocBF1JUpzYzpGg4VRmNN3KnVQQUWpM1G6g",
  "key13": "3JnowhXXChByEt8mwh3twfJwDt11MKKUpNyp28a5PxrCJ7ShqWEB2NyS7dCML7k3paPcNiDQ6iKkK3msxCHeu7L4",
  "key14": "4LVn1jGPtaV1HFi3yoB1yLFDiviwX5sRKyU4iezb55R6s2iyiMMyhPjAVLz9XUGsCg4P4TLYD9xRWb2VSTGnJAWq",
  "key15": "Ts5i1nQXjLUvS95NL3LjD9sZCgYw39V88hgugxkctCEcpJHd5Xfv7uvfrm25AmN9JEcbA8Y87HJKchgPDwQJo8x",
  "key16": "4nRH6AA8nceDUhND13Rd3PF8PBE6o3BgdgyjoK21b75gaWNJqpfsgxi1bfAXRhLcG2KRwZnGAt8V2Fc2CNszxSGj",
  "key17": "2GPnbWVn4mhux5htw1EEQnYcqYLF6VQ2VJB4sDJtncWFHSEncLWt5DjRiDntZryzfuHah694xpakz76fY9HT3MCC",
  "key18": "5oP6YchckWUo9yx1QEUdGnMhe4BaoPxC2hAK3qZ9CMtoc7L9Zo56SiKB24rgfrBJ8an2PKkeTDGTj51rhwW4wPeG",
  "key19": "4qRfmo7qA8LbJQKoPruPwSc9vzByJZz4jonZPuiMfSMZf844PpsZTNTpYP3MLD3APWqWMAnbf49oTKJpDz3vUVc4",
  "key20": "3W3i72CeXVDPpwSkUnY3ymx2hLnygR4vtXugXYt3g8fB3SAUZZpCNbyV8bd7CThN6UUTX8QySxS8JwyPd3h43UM7",
  "key21": "2fkU5tRZqRTzfBz1AAVyCQzYgxQwhPQ7JfHWQEKpuJgFYh91N8DKdFXukRT4i4SBjYmTFwr4qYjLduMLmXKRwW1K",
  "key22": "4xgPE78tVodMFVTYEgs9v9h6J8xBdbma3nma5RZ3H1zdgNdNYirKVEADxt6UNVEfeFEsrhtbmix2gu53kBQaQh45",
  "key23": "2Y1vjSiArQLk1bjYALmm2AJ1UCq9HdJHTvkNxHHMy8PwqqJYk789247Pkn3gAYY7YBXXMenJvXJHfbitFsKRwUi4",
  "key24": "2cMAHzKRw7Je5ZTJ17bj8Gu96KX33vgMH8pdRa1KsuRLjdVoPLakx49ShT4FnCQojA5jn7LsZyN53Rw7DGPrjE3e",
  "key25": "5nNvefh61HQWNTgYrqb4Xpk197Nbgm1Zb4341zBXVaFyD7eiRF4VUT4KJrV7V8Wu3NTaiXkr5CrhcGeKTa8DZumi",
  "key26": "4T3shPtYifL9eaTdev1Rc87f6VFSeXNu5yTsHWozpZzBCoFh7DagMAvYUbwQ8GxFTX2abY547ZKkU7CALkaPgPie",
  "key27": "3gaUyboYDxFGEoHCkYe2FCpRKM7s4YSt1ShunrrKQwWHkbPgrDY98WQvf94cNPFRmnoNbuN7tadkhVbCALC3FSuN",
  "key28": "HQGaqnsnCqcj9kE22fkeEawMRo26VJaaUYmnwoths3NEEDaFf4fvyjLjq4g2tc97Wac9mBM76LQSDGHXDtxFJ3U",
  "key29": "64Y6XR1r9A4pJvWLwQVJ4V85AYdhCdQzS5cWLhA4uKKeDQzPZVJPy3xq65ZewukB5697XrkFgfdZKLZPPtzUwua1",
  "key30": "4ghbvoCPD7yajCB1JsAdZudNhKiBgA3FcKdTv7UhCzDXYue3c5RJieEjttnBVR9Hko2x2vKMEmM2C76FSuDLpw8h",
  "key31": "5DpAYMmKn4TJCXVJ24XTTd1wEKUteNshPuBkaxzsWjwU3LNZxBvVpVv21s8EFNe6T48QFkdG8Q8tWa85RckkVM8W",
  "key32": "vvuwzqtYFNSAxnw58qb5MMMa5KbHyQ7v8rMWZCBBPKZR94RBbYQXW1VTK132Ze7HgyAtKYW6hNMzTpdffB5GBbK",
  "key33": "48NoMnqvKmsa6odCVGi2Ld2NJvhS59vrqh4XRCvRLYcjBybnN771dbYa9hzoLEbSBtVhCK34Ffmv66iDu9VnSaQp",
  "key34": "XumqHJhNYaQDeqVrcJVWHfZhorxvzQJTskQ5YpNrk25SKUFDxcCSuBVDdoAnULu19bduEvhv48CaCw9pA4nACfJ",
  "key35": "5zhdoms3zXFKbh8qe35jjMYgtCy63y1eU2wosaWXcnfsqCjsXjGhfhtVF5CqxvaNNHdiZYHYXiFga5i9KVD6b5Sy",
  "key36": "qBvcdhTPJLDLzLS51YouDAGnfJMoRQsV7HZCE3utFFmUimYmRNgAW1GxwnE4BSTYdqk3EPn8ZmM6qkxVqxFGmkX",
  "key37": "4bM5JAXVguVgvBjv8EVbmLzLUDf3n5Zvziuf2g6pn4myBawSi897f6sN9ZXC9M7VY49fEP532bWdezVmntaoU2oZ",
  "key38": "35BUaR5DHU9e5KXeUZpcTdpFRcMTv9ajYmRo8eCQFNnpssVzD94Tmb1ZpmeuwEfACht9hbZC95L8p44mNwjgLbH8"
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
