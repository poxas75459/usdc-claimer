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
    "wEdVPDHfuQ98Ma2xr9BNTW7amErEEgLS5urziqU5JRREaSLRrYhXH4qpWdZTyZwKKTRAfcFNn1jiimp5ZW6uVdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42EtnjqixwkS4M67Hn7sxJJEH7hMS9YJFRhiY3zgfZzmbEjoXHSigAA1xrNvndAjdQyagUV4vmS1B7afy91pTL13",
  "key1": "3SVnYrK9HQxgS2bVh5XqBjCepxZEz6ccHEbR2itpLcw51zuVLsVPi32xuURJKe6vSUD5qe9rKR7ivMiRjr5mECd4",
  "key2": "39PYCEXLBmfV9ubBroACtyisR8fsXEHCKJ45F5vqEvHwCL6r2EFKGDTu3qvJASxSiC9nTU3RCTikCWFuZqXXR3Do",
  "key3": "2GVK44d2weDTC1L7a1XcutFutagS8FdVU9TDfa4NWgxdWxQQxzgSnLzMT7tq8C8v3DsyPi7Wm9M1ahYWsh8WyZMn",
  "key4": "4M8fsKnGjW6DTMGDrXc11jonqFYijncyF25Pn2QBJyp1EmzXZujCRDQ6yPbgF3JKCsT6MWWe861JMwJoqRpRjSFL",
  "key5": "8h5fCE3YCiqhDxvRurLamKKqUWx4FKmMNX7cyxYZQ2bThvUhEJxhX3TBwR9mekgX1QPxnRE1qcTr5M9dfzVWnr4",
  "key6": "2KNUWRRwan7W4jwtEzvKzpLNTwSwWvFiNBjR6BXWQ2EApQGh8gaoWwQTtdwaaNe8MhLSVgJmkXM4qgjmh3Lfzv7C",
  "key7": "3s1BH8ma8QWM37Sn4G2yybvUGxoxFa5yXLTSCAjUN3WLJDy8uqTN6PftZHANgoAHa9f9HgVVtgTZJsZdLcS2NAcR",
  "key8": "2cSAQgByZ6yQkrQpxRZZxuXFd77c55X8Mo85DKrfB786Z7iLKvus63LhWD4x2WAYVAo1oBpJQ6nNnr2PEsyVhMuf",
  "key9": "33Utmj3TCipybdDNkmh6P9PvDgRw1RnWr7dk6ySHG5Xz73zRWNo5BCuoVi4TLgxePqpcoTpEprX2X6gy3XEBrfpj",
  "key10": "d7vhWdjQuJKXN4etDXQPB9eR81wfGNEh9wo621gRL5tYzMTnG24R7foAhC8d7tFnkm7QvWAvYeAsy4ZNEZrnMsk",
  "key11": "o6hJW7dZhMgzeVsbu9JyPoYHQ3rfbuf45RxgmhumBQ68Gep6FZHMFsTh3oKJVEAhCEgsrgokcW6cUW4WjSNp66n",
  "key12": "3Cr4qRJowvmEW3UMZcgupnLY2mk5eY7mkCiYPyGbRFv2GhsgKgbc7UnTbLrhPCz6hW4jvAoxwVf4hX3bTMAfhBtb",
  "key13": "3yV8hig5VDBUaAH2Z8nJbDrEA1n87fqoAg72xs3DumKkBmu9aXjDaurpDyo5hiWXxNUcLyMb5Pm761ayBXHE5d3h",
  "key14": "65jMNFWYCjcSrS2Lg2u66snDz3BPHSzb5t92MkMA4GYNXcigzWDupVQAYNuaQfh1xSa2D5MzW4Nt4kseF2Pfj4qj",
  "key15": "9GKSDr21St2YNk7j58WqftnuDP1NcfHSzpyuKZPG2gM2wrDRz6NcZqCFKPUF4RfVQtoeQzxanSZyM94euNXhUQD",
  "key16": "3Bnq2fKjxmg1XAyU9yS2zQGeUn7qE4mdqoTCWkngkKMnT9TmVdZJ4f133Tw5htpa9gWwPpQAjvw7NjtHhuKoLX6j",
  "key17": "2XqAAHHtmXBjVjHsZCDSy2GjVjZW7oBq8FSK3mncrKhvv4T9Q5qGxYtUaA5eesT7dhABRY6Mp9BLpmaxyHfubyav",
  "key18": "5SEeXdfWu4rdx7yaAH95kKALHv1Apc5EkSvjfqbnJow37ZdYEqAjJSK5i8gNDLnphhgpWGMfxTzqpGT26DS3isLs",
  "key19": "2KqHuuHwYW9SuKMhxQuAQea2WLcnFNWTWEK35tczRgi2aj1gXCsJ5nHW3pXNDBRDiZBT2VJzQJaYEzryERD9KF6T",
  "key20": "57Awf4xptYTqCGPDeuj1LB3jcLHNrYnuZB5GBVDcMfRi1n1s2nAEUS85tqCeDYmJdLVwp4SHZKCexC6Ntg7rYxTZ",
  "key21": "2mKMpbR6Boyf4ngV9K1RQpRVhdN1RYH9umUeD3g6Hkakuq454tdoFK4idGdDJNS9g5Jb5RJ5Ucbsi53bFqtpUJVH",
  "key22": "smewUfCgmJtDto6qfsgGhQFXWDocqVSCK1PsMYNckNmsoYUggbDA4RMcPht7v8wb215T6CxwTL8xr5i9uK1qGDw",
  "key23": "4JFMMDN8aLceb6zUitiAxrCuEEb7v6SXsvwdxHQnea1uEVjwuvTr74NHfWSNfeEM6CEfgmhHA9AaakxbCEsEQU4n",
  "key24": "5vmGq8wdvNR3xRPgR84LKyFerQeVJLJQwZu6P4o9jkzRshT6McfwszPs8UPYEytNKoCPbZ1eDRYPHj13feJ7qb2z",
  "key25": "5PP3mzNYUPmrk9yHH7dQYtApbRnqoTb3sQzsS4jL71fTcdGWva8zDrGy4Dd5fZRo85r6VuhVxWVBdumRQCFkpn4E",
  "key26": "W4uqQfV4JFvEc7CD2Q67983PJanXSrrxyujdAhyoihD1djsWqSoMreys3KS73T9jzjL9hHUwhRXTrVXJQwtyozv",
  "key27": "4QCbtf431j6hS7St5RimZXWATFRwnv19mxuU9Wf48nWUqevA1UeYaozqLrPXH9cSMm6R28QgySY3fWhTGwaZbtaa",
  "key28": "4ScEpX4aVrafBKrWBJzfBnLXA83FBQ1oZgAH1b8KWcUabUPoJETv8sQGNFMFWgxjY8foNrmEF3Wh2FaafFbCAAT1",
  "key29": "5RNJvRVmrcF8dzkB8TjyLaRfcvsuRHsrjJQuidqVvxPbGYScF7goeUxKcJL13Go9rV1NjdYssk82YDmJvbSS4D9M",
  "key30": "3yCLXouwDBLwvcmJBTtxCw17NAZFnoNeREtUPnSW8am9jZe1W4FNKUtJWfftmycEAw9vY4FBZCebTSGfvVWLym4E",
  "key31": "2AZtfYXtRsyAjbFBRwdxTQqvMqy4W1YviPSLovwLXdbVQK2k77B1vtnpJzjk8GDudTJgt16FZiuBANr8vMH6ZoRQ",
  "key32": "5ubRqCt5xyPsDvtzcdtSXBWPxN6gwrbDbt9weT2g11Xj3Yx8NtYbm4uWnMTN21PKB8Ka41XveDEPrGpHRsBA14Ki",
  "key33": "BgShN4njKTz2PV2632VE82gNJzVknURCSiYU7LfFg6kiYfe5giXiJndoTaQpHkiaK9DRprgmkVnM57YpBqT1t7B",
  "key34": "5scCzEgF2AiQXHrtriobq7f3rzrk2yrtpUA5SNqnP5XJrRJsLwzSrd8SLEsR77N9EFjgr8mjsVxp11hChmn2e1W3",
  "key35": "4PR94EYCqVtynR74FD8oMnFqXsJExcKthUhz9rWZsqmYQvJHdrzVwYQR1sUKn5k8gjYeoX3mphgYZYyMg8jJtAtc",
  "key36": "3ArKkFdjoJvfBLftwcWuFoY8Fq7Tikjzt3Av2tB3BpkaJy5YRvh9BMowxw71u7KYbJDZjXibJDfLB1juWEHJULCN",
  "key37": "5EyUuxZsgxV8oDBxztPGz1YZ8tyx814BYqZXdcNssaonFwz3h3DPe9BwGaxSrKhQ5pBPWzk5gZKh85JBrkjZssSc"
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
