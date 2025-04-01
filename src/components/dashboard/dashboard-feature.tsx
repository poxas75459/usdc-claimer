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
    "46wLcQaynrhZqns6MohwbzPxG72xvnXjsH5FLQDg5Nuvp5oivVDHY2KaVnFd57mWir1omaUWBzXRGbmwDPqdKs9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgRNWbwUkgLBoW3vv125dttAxRPNemJzRGetp36sWk9cqSgBCZdVxBMLebbTKvCQAGJR8GVAJjUvytTFsDJzoBk",
  "key1": "2sKteTSbjqpHEzeekrZ8Hn6YsxfwL6rg6zskBcVB3WPpraJiKpCnHRQfR7zGXcThhMWPzz2UndoRArhQKHPmXiFC",
  "key2": "NHFYRxQG1kdT2N6WRLq5wwxVNJvuGatQbHHY812yYNjVhFm1RKKZETJsmg4EoLdkbsGG7HRXvquRGz2bw8xQY62",
  "key3": "4PAZ1HGfL7iy1WgG8uTaXnYo1jPyDnxxc4ouNruZjMzQ4QnLE3R2SRQut3pNFtwEbvUQ8yq8CmqM6u1owxFqJhhh",
  "key4": "3cNzuKBNjq3EuuLHDnEtgQGqfUUTNWsV4wPM1bj2xoaTWwESpzffvjoW9JQpy449TadyaaiRiKpMuLrMa3uuw6RA",
  "key5": "5YAMZgrwuzyEFtN8VJBu2Au8tywcH9GrH5hL6mcYinn5ZktTyFn25JS9X7DVQoWZhngWBptUnhLND5P2u1SRBJR2",
  "key6": "4E6HCHd5tTdxGrWWuw1ES3rvqHVcSp3DCKFapURr9rdSzFb84qm7SiNn8FhkLu6o2JrbUEX854tkH5fcxkqimKJY",
  "key7": "3DaizZ8zanUGHv8RyKJ6sRxK1ZpzkpxiGjCNBVtnSPsQTd7KtggKCorqmGehfCCYfFSRsDRKa2Hpke47zzne9t7x",
  "key8": "2kJVjzkTjSqonh7FXcbvwsHWmaPcosUaxgpgCY8EYbJynYTZCgBQTAxX5CCBUoUyDEvtGULz1oC1uS7jtvXXQ7v8",
  "key9": "52b12M4NfH5Zvu3edRDEo12zeAERqN5DS6aMcycjdU7iXuBXkuhzhJwAsGLEsdznwjmpoMMGHjymUTYLaCJh3ZjF",
  "key10": "PjbKRGrN1rfzyaBv5s165NPvZySVhiyDr3ncBDHxub59NrW2SySRS6TDAhEhsghQsYmorP2823p52fTw2g9d3sC",
  "key11": "4wxeFjP7KVDt5i6fofPD2kqNyHkAKA6TTYGtBYabw6LL29wTWata8czq38r3M8fVQ82HcoEUch3A22yhkUqungQG",
  "key12": "2mjm7QocaHfbcoSkHkSTiL3TjPUmH7YpbRK1xj1EcmBVp6aTVWwWaUrLEChknB4pNTBYcWqZm7wEMJFUqymLJMWs",
  "key13": "2tviTckuGJDJiUkxijoj7DSryMmQzPcijg6JfS7mZ2irgfb4GLGYeNVKXbmz3AZMyVNok2cJXJrxs5284PdCsovd",
  "key14": "3oNvM8og12Una58xPKtMTPyuAc61vQLnd3fgWWGDVoVGKwAnNKR8fRqagcpEKiJgc8C8rXPy974A9eig4hnTtkjj",
  "key15": "roETCiCE8sCpP94UiNG7oANAicMDUYYt2s1jDEGehiFzDzKGqdu3ju9fHTyTXpMFGnpd9tq2ThxetGwqR7bvADj",
  "key16": "3k8N4aZLosoGZx8Df5ev1nkALfgYgHvbszEBzgPFz6FJG37yGVa4gMjHbej3EwGwHK5roDsCaBPSCaDrfwVbRqUs",
  "key17": "5bAWEsyPPidkWXVLMXvspRhWrzMueg1ZzTcSNQpJEGC8HMyrUdgzCuuWBrYffvhjsRTSQGv2vUepxWNeGA1GKFw1",
  "key18": "3coW7d9mtXU9WojLurJeXe2wCfGHVJiZ3wW4Ytkb4Qp3nPYSWqjx2uq55neegwVfF4Wu7YEaVHk6UbdRK5VMEeaQ",
  "key19": "2jSXMNGTErBVuttLzGbxB1XsvKbSvPzzkymU2Nfu8QLVqFGmWRY4t5Ue4CqyGErsGcfg7NLrJJEtTicEf4F129XC",
  "key20": "rqcDLVLpMAM4EwMxdsfC2pauyDrhbFr1pz4y1eGpqXLzVh5CRzJnCkVq1UYJ8RMbtLpLojWdHvNBBt7eTeJpH29",
  "key21": "4d8uVWUAXe7BKFcW3866BJDkr6qzcPFB2QqxuFDvGpm2rjFUT8YqW5rL22TJY2QuHXDGv8U5dbhPiVrwn2PZNzEt",
  "key22": "2r3hq2BAnm5zHp4PiwR9g3eybLLgKuz3nC5eTz9tffYsFRaSzSWw8WRRRmHXCahEPkSo1mGLRbxasmk7szqhe9Kx",
  "key23": "3cj2pYP3h9eDr3ty7yXdVtwrCHqnEJCj3Jpjj8PDRA2aTpQkqQXymL2gannuqrLTLF5pv16GBT1PxUR51R7UJyzB",
  "key24": "5z1vZyWx51SvdxA1RDawsC2re8pj6HcqhtqGCmUjDskHwq2WzNkyS46mLufvwd7wDS9CCrswvZUpSK7KKuZm4T5x",
  "key25": "PxnvgmkCDNQBo51UK9E6k3uDc3vK3TehwXRUDzMBw7XePQ3kqccTVyyfrziJPdjGDEtjQgeg2gQF584xHVtpoMw",
  "key26": "2Sp8seqZyTJfTk7UB514E74cpMqCyEpV1pka7gbkF6JVAj6jkMeT4HSds2cxuMhRd6sh2xzy7Jc983sXdi6fNHE8",
  "key27": "3QpX3MEFXQ83QTG9NatyPZiRozE4MeyoAnPbZu2QdTybHAfe6fUZCA9mNHFpf2M5UZART9TZcv4FHxm4ytoSVWbV"
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
