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
    "2f8VZu3szKgcWYyLvbtxWWxqWhz27Ga5b5FwSfk3LY96THrvSBU5m3ZGk7KAp7REbPiPrYeF7NGiij5imhiLAT9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FT7RfYAG8S7gNFGsgXz72UuJBRnUbKjSpnpLbbZH3rJeWebTRGoyPWjHLQcy9aF63tr1jcL747GCi1QTYfCCQNM",
  "key1": "4pz6ZN1K6aX812KT41MFAQxQDVDmAt7fauhq3i5d84LTxXyTcKsEtewthnHopqBkXeBpb98ne9qAFJZucSMczJ3k",
  "key2": "2ACgyXEfqv5oz3fAV3C4pqRp3sJDv6DwjHmFBf9UXHGk9YVQ93DgDcvJPSmCSeA3sQVmJJECkuZcmomnkQvCfDXJ",
  "key3": "2DmvFQai87yQN2hfgqrUzRZThAwyksHQRs4ezvh3a9pRN184FSNVAfnCLtEdf8eg58bCpG6qM8JQ47F54PXiotVr",
  "key4": "4vzzAWfnxSpd4bn3R3qHeuNuPvzWt84xWk2quKKkuQx2XXE1fAwN7SXDSBQyqJG84XsGRfsTZAFiEXDRLmqngHfd",
  "key5": "XT1L7PVM8S6zQFdjhpNe3XakHR8Ri5s8Jvp5psKbQvaVnxzNDQVwiCBQmzxNxTU3ZQPo8LF47jrRTPt8C4eY67R",
  "key6": "2yS7AbsMtqMBkDW71PTMyv24esm1kfbKL4qgYTJFthjkHCwGAhmYte1id35HBh6eQFhxTaFqTHPnx9QBHVBZ2QUc",
  "key7": "67NF5zWsAXSKjZ4roEGJrXnS2FuL8QWWyxejjCfb4a9hrUkgEhuzFaJUniRWPs4smMj1Vmpc4K1iuKWa44FqBFCH",
  "key8": "4gHn4GnL5M9WHvWF3k9xV3LUHNZDy8bBFMaPL6odvQKooaEjNfouGWxZUT3TF41bZbVytTPQt7HK6hRkF8hisYkn",
  "key9": "48sTiejH3xB3JVdHNb1zFUuVjCY23BBrDst8yAaAXgyB66H5SB9ccHKDUKYqUrTurs8gecXoBGVSa1sPBVWhiDNS",
  "key10": "MsoGyJWot7qRG3ffCrLSqnS742r9szR7eN4pf8nypmCdBon5jDEAwcRWdyNE6q78tBLvyh7GYs7VvoCKSZdLU1J",
  "key11": "4y7UWYuPbUsj8yDo5biz4EurcbV874S272AtqvohCKtX97E8WeLNXJ59BKriJ6bKWoLwgDodPyZfD4kz1avT452Z",
  "key12": "zZWmjysZnQXWmjCJkDrTzhknhrwnPQGECN1M9z7TDkGMAcTyt3HSv1CopUJkq5pSaYGoyM8oeNP5KjJwgD3kHvY",
  "key13": "3aq8zQr4HnKBPromw1eG7PTPuQwxxvrS51Bpn1spmp3Ekb6uAXtKmMv9trwmEr1JqpvokjHWLd3GyrK1CN63Pfg1",
  "key14": "229skoGiSnhGLNMxXJVd3eziGPsYifdbcRCQ4ahmvNTjddkjtQvL7ginkxFUrJ2t3rBHT7ibbTM9fwuo1UFqHzjE",
  "key15": "3FDkBWdCDU7Gtf6NFr5k6GaM9HdHbsY7Q1eNS8Twevrm8dqqCjqkpSVU9QW7pLdqEHYjh3qDAW9om7ZRkYJQeJUH",
  "key16": "3u331eYXSZceADczQ6gwFRrTe7189utjeiDUEoj1P1dzbK2UrCY23ZdpNMQjFA8WdedHk2vABPeoUS5pdphMw51e",
  "key17": "4me3CcdrmM4x3SLhPrTJXm6jNXSmV8UHXBKnkNp5NhthnhxEvVMBhJoWbb8ytMuEq4LFekqDmsvdGsatGqCkczN7",
  "key18": "4w2AvpbAxYRHrMtXQt7DFus44n3rjkuM2fJFbP7rvNwCGSvnbDVzxdmKM1deg2puia4zByKaBVsmMkDjRterAnVM",
  "key19": "2bSWuRgeyqyhoZtmRYcyTucEXqsmxWrDvHGrJhweFsycUUUqo1uisnVaqJa7Rf95sJ2zUAb88g42iu2w74Ev5uWZ",
  "key20": "2f6zBugBBxw13LXomZjHuKRrR3SSYkTiWmRxivBugjEJQWpWJr9m5SEBJztrFB5noJz9wCghAd9Lo43Key4dCh1R",
  "key21": "TsmyWDEww6zZqND7f2NmW8zdrB9sns2Vih6X41kXHEZFHrXHZi7MfuafBqEbSEVZj5HiNmhBaBUVYE58krG1p1G",
  "key22": "4aBAm52tpr5KmGQC2RmKzKE74uWU6vtxqaxxwupiBy6Wfsd1oAUL7DEo57tepchoXpMbjbow2CG6bWzghfNHJg1M",
  "key23": "5oxyoWYK2eTiTz4N1ofb52ZuxFqE9rGDu8uP1UGFEm9k2UZHqT2BGd7mQc8jBmqnQxMvp4Epnwd6XjP83Xyhx1yF",
  "key24": "4xLYseHLXqrwa3k4ZiLy5fd97bRath2Dkm6KAB6CHPLmyVkdC9B5WPu3xxNfNsjnZpV7cbRodH1KzRq45Sh9NJWx",
  "key25": "2mwjaQ4b6A93AmfYV6h4G9nSXd96CadsA1BaENcrL6Hbfue59vWQkDSZxmTTz2Q2Q2MBdydihVCZmNus3zYeEko2",
  "key26": "5vvWN5BiR3sWhF5CdrTTdwvKFn8ZWgWZGYm833Eqk2J5BHrZYWSj1u6vFiBkXMhNYNSV5GMFU4t2awrHX7o2HUMR",
  "key27": "vjHyBD3ke1svqnWybykrYfRT3DTQL3XA7b67uihu3Pr7s9N3vSpnzDoHR4mmdkRTCpuyLVE9iwZJ6VrWUntN7XS",
  "key28": "4uTA3Ednb37BWRkB8HXdqAc5Ncwww4r9HuA8rjbuyhfoLWSgHwNw3ZQifoqwogZNFfU7ffHr54GFbAUEWw6i237f",
  "key29": "67TxhDb9rySbRvZyVNQV54DVHY3a3Bk9bPGg4PRKHLZyjXPSZNyJEwntRWV8vkrzDt9HbqhccUBVqZ4h5CMWGWhH"
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
