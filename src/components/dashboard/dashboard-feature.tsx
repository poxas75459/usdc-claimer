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
    "55Y2UT4iQdQ6sHWmM8n75qaw3AbLjGqT455bRumwtjpfbyXxSaRMEMPUVRoXTaMqZs23Xp6MF1xLWRUyCgmCUeRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5myVSLN2RGJrt5AwPxkmo7axsPbVPiNDPKEFgeotvcBCX8NbtCLkexqsHXZFqX2dCHMqRzMLVWSsWm7dqDYEZaw",
  "key1": "2P3z8bbg2wvvFc2BVBsbNFjfxBzTUqRgjjHFecuAFueGGsBm5oUb6JdXu4KjXrHv54Bryyci1ZkrCoT5KprUsnhh",
  "key2": "4jVQkmrTTH1FHcMT8QfJn13oQJo8UQ5QBAGK5Xw184QYopW7S7PQdXkBDDzF387ZG7tc2N71TnMqtpapatWDvpWX",
  "key3": "5qnhXZbFXf5mKATLUBxtGo1REPsDisGG9WA23sGDWbNBS8UKWgm3vSF6GbJ1Hq34aaEfVKZ5qniMXKsUNJKeWMYe",
  "key4": "2t14F8xNQzve7D9Pc83PSgBQhPcz8cMrG3YdvRgN1gnRiFrNEYm3unRWcp8SNPi3YujHjU1pyBkR2HetprpPcxVa",
  "key5": "5QtG8aZnnYocVLcYEnvGhHNZ5rALT6syUNAqQvQtcNdsKbg6WGKGevZvm6pTPsU9J3wDU45MU7Ycrs6Pj6W893s",
  "key6": "tZKRB1hxoxCN7E7ZEn3aq9338LpFXfT1qaoDzd5XZ77qVa68jWqSsscVgY7Pt5ZjToU5nSMqpMw6iiptVcYBKhW",
  "key7": "H4WbTFr2YkkWkwV6QFLgLsQmAwZWz1xMG5cLfWYt2J3FCtPTy8BVaqgoq8m5MibJ84T73RoWE7v8Dv3nVAVT5V5",
  "key8": "2MQNoBs6VoPnfh2LRCrJBoYenqXUMDyeJ26d7W7R3YGGNgY7MW6inaDqRzR9wkJhUCgaVT2E5NV8C7bHTCbshuP4",
  "key9": "4GwWdPrh6TLGvS9igzXQ9wisuULP1R7XkBnsv2SDJLiEsukuEE6t5y3AUcsJyvBkeMrgJXsxb5wkeSzeAkzMSkoT",
  "key10": "2BS8ZD1H7NCL5hvgGVZFZBWEa5Ehr35ZnKW23MKrrVbvoJWgL8Eu2o8bxT6uGm2Q8jYXVN9tNrnxPsMPfxUdaCix",
  "key11": "32RQb3SZK56yf14Muao8PrkG7dLGgTeiuA4gNUvHatMXKMeWasUrzga2QEikYFCnHQczwhGKSjArHokpKoeU3TC8",
  "key12": "3m2RFi9GgD286UweMtxRZKA7x7izz4PALzNydp3r1kjSH7hup2zr8zWDFL65tAAzmtV8wGhEdpzfJ7VWbzmUrNpg",
  "key13": "3DqG7QX8kVzw1Espmp9QvjCYVFFDB6XSA7c3aBLC1JFz4vgu4fJBmYSEiSohLWzqFMRVMbTmMN3UgEoZZpnuGKmb",
  "key14": "uQzVFQVvzgyykSmBmyqiuytWgbnqPN7WY1BVKhe47K2jLwuybzkaCFjVDWMsu35ZKuEnEy2x75PknrqRpoCAaCG",
  "key15": "4XRusPjMH6Gcti3M3LxUddtxeivGeGDvGGkdkG87hoWGhnT6Cagmc2quzXPjtNEkhWSrvbxAenM6bKcD6wqvJL4G",
  "key16": "4w44H8qu1iLh6KXG8A63oHcaZzBNVsvhddtJGqAFPZVmcBVoAqaHD1h2d4GJfUfjh74TQsLg7GKKUwePD8PfKJmP",
  "key17": "YVtmeFSr7XPDTSvMXbrK9u98TpijmJF7wdDtGvs3kUzkz6GANVGerRTBqvNRLYVMqwkQbDRebGo4ZCrBGgjx82N",
  "key18": "3U4ws4LXznfUKfGdDR8LwhMNDmFmWut8JPrhXMnUhvMNaJAgE8hXLQugXFrPjpq3dPvb8pV6T1tZh6wtSHh2UoFe",
  "key19": "3tAkE1NNsgb3TLne2b5hYW6mqqQJt6amipgzxYA72EwNaheqQ7KmxfvXBzdBLHiVYYua5b1vyUg1VDw9BBWDvkFY",
  "key20": "4Xaxo4iLDeSi7J5GotGVDKMw8ZbpniT4ChbkVpKpip4VDb1vtheV1HfzYJfV7DVpffJBRaogYzJpGJCkJg6NmJaW",
  "key21": "3dEbDCpjVKsHCzDahYfKJizS6XtUbD1DjJaXJubEJxbtAkoCA57XgHP85GEsR6GYWsh74tChkeNFRvW1tPEdyZ8z",
  "key22": "3fdT8NPtAqbsMbnY852QotpNRPyrxPbcDfDWadduf9nD7kP7pfFYWEVdum5S94fo8WmrZQstApGy5nTRKh47VfoP",
  "key23": "4koJH3qcR9WaBkHRLQJzUKbWet39CbxnHdcnE7ziST2N23fYKFmmoaad87Q77tH9SGMPyFiSWdWvGU78ChT8mvkT",
  "key24": "2LyeHHNbhWoY7gwmcw2yNHjtmbSoqWcrwxNAaF6ZNko7gbJJdSx175FRJJdsZVMpgFZSxoq4xV5jg8GQLuqqbQSG",
  "key25": "3gZmw3NmkLmjTYgwsiRcEdPQ7VWJNaEWVkJpZXodLpMtP1ybrxc2WJUbyVTE3FFLsk2gQiY7qbGKVAGuKpuL8S7V",
  "key26": "3E2XXkn3RaQmHizQJB759RQbKDvymZJBXvw6zyBAxBzZVsgkKuRaZM8QbCMwWNgJgUrxiwfkZ97LoPSfSNXSKyG7",
  "key27": "5nKRknudLqgmooiFMZV9B6QmKGdDYYdoTJHAy3osDRwGCiUPd5CMNhQdHs9A3jCKRfeyRAFgKp3GGkCMd56XPHgh",
  "key28": "2ye7tfupbKfTEeTjkwvNxsaWu895ZSNQLYYizjdv9bXzvNeAPe5AEaWzijehqcWKqSE9avVbJ3vgf9qU9fEMZ2KB",
  "key29": "zvNHAUdRrWtcAGjZ5py5HsUFj2b12pM5FTZtG48DNnTYNJVqLCpETeLZFVsHXnTFf1D4u7jSbGUEJxH9aucDpfj",
  "key30": "3X3Br7tJBRJ5mPA3q5uvrtFy7h6GwS7o4rotmsA7m5cFiarmLTNvHdi9d7NHz7u284iPyLndqLi9LQUd7iKBwodu",
  "key31": "3XyibvoueP5HV2J5Rt1n2RsVmHwiKEGu1h6KgVuHJoBYtxB12qnW8a5amV7qdcREtQ4QSXQt8W6FS2bLoF4g6n55",
  "key32": "2hzd8pf5phHP9A2yGraunkri3kMuQY2ko4T3ecxE1rcCbzgAJzAo2Nk3ko5qa9FHA1XugeaJXDmSiCPkRwx2foYa",
  "key33": "2QB1MMf1XByqQHsuCc6TQ2wTbnVpLUh35maAVFgCfYZ7UDGPyGKuRPx7BTQdMpnzoCnNzpyc2kdoUFuxtVYzpAbT",
  "key34": "3izfJ2aiuCe3wRvdM38iJ4aAnw3ifXuMTiH48o6p2yw1bd8Vmg5ayDdpTDRkRmKG9tY4gk3Kh6XgnYHNJadG6dkG",
  "key35": "3ZSzg4S63zh47kgcVkZGDEhM3PpyZhxeTDrUdFtkkwjuWeAvrSJfxK4N4T9ahAf9LX2FyYvsqqq9U9uSFWRTKNju"
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
