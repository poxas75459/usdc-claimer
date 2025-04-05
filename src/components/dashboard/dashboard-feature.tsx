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
    "3xGEsB8XgEtEztSW5frPeaVhRkHU2Ysb6YuZkpLPQ5xghEbeSjeNcSdCafykyjUWWTadRKt7RbWw5k5TdGUM1RVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNC8WXhkXNypAqJNqof7pJtv6oKvUodkH54MDbPJ7AaJyxLpuVNvZznue4yrLA5CT5Cnjik18jTMnZdQqVHFvUb",
  "key1": "32Mbk3ExU2u8vZUNTDs3rC2Mcruj2nm6huu4BSnN2YpCq6TW221qLwrtrrA5anLE72YtoKThES42WoqdtkkcpK6a",
  "key2": "5PnzWCiHD2QVUdVjZJXLfksmTF62Z7ZaugDTxhBjqTTGVvYzQYcf8t9wUXHGHST4yXRhsHhgxKAuqY6YhS6L5g7q",
  "key3": "4MxiXGf2MJKVk5a9QPezWLmCJiptV7hTR11ennadBmTJRjWRjEsFSfKatFnXGuHHuEWygacdfrG9SNtPTaP3BkdM",
  "key4": "2ATaSRMH61h8G1pdwfjHmpRY8Ekf1XFawboyBi4JvJZ4pbMA41wi8CwXoM5fQmbMNQBE95agpe28STiYaLASDknF",
  "key5": "5j668fENniaUXrVdyn1itSvVZ1yUq2ur4yCBukEo1oiNggzSdjt2V3Fc4w7NUdLDAn3xDLM2N62dQjzx1HNV7zVx",
  "key6": "3WyFnjfvFFpD6q6KxPPbEvXmrShrckhjNZgeqrgzp87rEikhLPWFbaHdhN4S9KPPH6fxJ55ekN4Gvhnh1tHZbojG",
  "key7": "32pLAuJTiC2q6tCCxwwrNHL8okPECrveTWiF9hq1czWmwLyfyRgiXr5Xvas1XtWwEGxrr7iyAaBg8Ch3Y3JELqK6",
  "key8": "2sztj7HiKjCkkoteptjqYx9m4e4QpyY4p94ex3QZN9mVuf7rASqCpbjd4ognuuiPHs3WUkpnPmhk2Ry23uZrHS4R",
  "key9": "G71HBB57LvvyP5q1ZSaQyTao2HrC1X7SGooZWQm5CEBNXFV8F9gExFSkJXPSFsqXN33qJoSH1fcPaVERS9HbyS7",
  "key10": "3tp44nqg2tpnesdndSBqF89sGrTEwSaisxstGxUw5TyBSDRtTQtrXTQC2oHxzSuYMyFF7E44GqbTW85kpNJydNgX",
  "key11": "2WU9VgSyz3wcVwbBoPuTAPrY2n5wLrytAQuqFY7NT2vhXkUt8cjYQrN7kAVYPL8qxWbRkkwGpi5ijKdrQnDiLaQc",
  "key12": "5nWXWisPPR2fJxHyC58GiR2v8fKQJND5TMWELh7v2ysonqEgc733MAyqsLZxYbyfiTRFrUxnoSzzgrkXfGjxvvxp",
  "key13": "22K1cH2GYjhEysuEMoZs6RCFioGayc1z3K6VQefqWP1ybp7yajDVm3Zdwq9tCL1vRetW2LnvfHAcWVv7D1iZEyEm",
  "key14": "5zyGg2Po4Fq14AGehRRPduj1dq6AZ4kYMW5JgkNYe7zJTbNjQfaqLg9swKFMnZ3SFLge2zCwPXWeaHcKD9DsPF8f",
  "key15": "oyCaRpLt7PUjCKRuGUSGxpij4PVdV8t8xVhnTn2MeoVdFx4uzhRu5ATR8g14fH6b1k3X7DkvHyuUPq2iWPpQB3P",
  "key16": "2kx3qGccY946jS7wwBGQAy9hmMhrUwUsKBhZUoNh6cg9Varn4uotE6KEE4N4C5JZ4rkJm8KpCEmmRwY1JJmhUXp4",
  "key17": "323mknkWiFrszGdsQoABCP8fpNzfeAAsagc6Muxc4k7THVCVKznjT6aT9t2QrCzbG2PXqhYZGvr8VVBq4W4pqK9z",
  "key18": "5pu3z8KvEVR8CsrSEbSxaDcurgUfgu1pxkR5oKrSeqxDasN7dzpVUxTscT7fZVs6P6X7QrygJs7PbN6Zpsjpxaaw",
  "key19": "2h4jJk9tFeQGPK3DUuyTQub63AaMEkq4NaLkefVTD31RrwB78cVbr4xZXQb6KZpkgnGwy5UQe8NiJk7LeG8wyRTE",
  "key20": "xYoAHfEFdVUZX4MewehiMSGm7oL96xSkwrY1L3fMFt2jWcjg8AZZ79ZVT3cEpL98z77NbbK2Zpdeg6STMXCABpF",
  "key21": "5A7ZK5cY1AawiysH8jAJQVD9E1Hswb3616VY85E4ttYr23D1FiE8f7sf4R2AuLGyJ92PSEwBkUQSknxJXsSB9pKc",
  "key22": "3VxNjuuuhAQbHTkYB93P7vpGtjCbZcaoUQoLrc5xDMNBoTV2qpUHXrCgBrgGpEDVynWkM91ExmQq7tLuMCPgf6bs",
  "key23": "2ipgmtgF3fECZCureEFS969vm476tR1sAnJBB6658kU5NRWhKe4CNFxWmwC3wUpodEE7Q8Tqrapyxp9rEiZN4yFW",
  "key24": "jkn5eB2svtdGfgaXSpfBbv1W91J9rgiWbiii5kWZMj8PtGeo55n4SoDYZCLQds8i4ziRJ2ANEBkNSjfVDhGyapM",
  "key25": "4gk3Dcu8rExaG7cjYoX4zPu8CVDqg9FW7D5YvXqTA9BpEu6eSdmqNy1DY5NakKUtfrdtn6vHNjqfq5M31MkZdYhA",
  "key26": "2SMYQwtfWjxwt3g6ogjkLXdffh3Lw9SXbZz7AJcDpRH3oxKCA6HSRSdMopwbUhnR3H3q1PuG1GiSzMpc78sTN3Cq",
  "key27": "4mrYQY72SqRPsNoqVxj3vWWuw6RaK7YAWYUesFYpt2dn5YkBSvSRFoe95h6PnfQiEJwyNEweKPbHmZszL6wUAHbb",
  "key28": "3r7VLhNPTPFMyBHMhs4KrBkWPnm2VXHDMtT7eUWBDCEXpYonowCYUcgP3TqvEVXDTr1ye1viX9ycUoKPHPjLkHUE",
  "key29": "Xshsi646UDxXNGj6cRcHzzoZarXqK72QLQj8ymbxaKQYvZEkUPsJkpgk5a4US3UYhQJZGZ5mzjCEeDVafoxySdJ",
  "key30": "2FZdKUpDipfJZSZwwk6D5B276Z7fx6DzNbkzdQX5QxCFzfcAc9xiRWSg6YuQApwUpxK1BsTGTwBoUEViUvk8MXki",
  "key31": "4Qn624rL2Q5dD6KwbXAsrpxC52rvQHhVSt2BUaEJE3VD9jKfHw3j1bXbHQg2GofCtZvsai5pVHuq7DDkKm9mohz2",
  "key32": "5xaX3Nvpie6Ym5UkLdw2dUqD197abqyMKS9EN3eKuBFtk93DHtQfyZMY3SiYAQFqLCVu3aPZMLJEEC1mq5Vy32V8",
  "key33": "5r27muEp59dNktYZYJSnKsUCcY3rtGAhUhViEyuYz2EveVE3V3nNYCcNhjxzvB6vPJgASr6JbxAUhLjRVHqrKqpF",
  "key34": "gP7YFkC6j9AMok7dtfScVjqXZfKo8swF1jbwqr1zexoLvEU6oumkv61pZqNpFxQedzHgcwhEApa5vbtzAKMK6iS",
  "key35": "5vqEd3LTheQMhjPWZNSCbjs8QGu9iyQQJDzVP8uBF1iFTNXp1HAgG7RSG5Ptk7rprcaXAY5CkwFk8rfytmjUrNq2"
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
