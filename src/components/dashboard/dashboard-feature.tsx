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
    "42HPhkTevCgzu2o273YzUWm73xspkpSteheKnpKRsTMj5LZx9YfmZYekSHaDyLcFC8Q6UuQy9xFhjU6bEF6YfPyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DFGp1KWEkveR3FHFhrm8S98RDp6M9FduMSZLQTcWJLDsBzcB75962WiHsiWHzFYCUWzkwHuLm8s3kyPK91zPeCB",
  "key1": "2BuNsiPFDEwXsQjcGAqHs26fpixt3kChBzwaLve51YPEqffBuuoYkdzAvp1U6bXUYENDUzUsQ4g9DUpp2r9pHtFf",
  "key2": "RW5WZ8MWrN5wrSjvJqWf8CfNWSV6YRUgrY3MzKsn35cNN831H7fJuUQvS1Q1MfdMh3Qpta5wfnVvVJtq1Un9Nzh",
  "key3": "29VKpmeYYwm8fMSKfLqbfmFQZ3tkpfvSV1a9bsqAFRescNST8KFsvdsn9HCwkMD3FqsVjTLWSb7bjCBbc1VMYL35",
  "key4": "5amXYoGDAgyF24DcrnmVfFKn8jzHuoZKcZgQPGVPnTVodb9TENeZQcJJ2naWYRYV6tASQfb9K7mtTNvjwrfS8emF",
  "key5": "MJ9U4uFArfJVC5bkQcsknWNqg99niCCYpqpHEFX1mDbXuyKPHLyGhmerPTt4yv9Vnusi74sTkxCsWQRRvT4ivyp",
  "key6": "3prTNQSW3AjuzomauswhoB46JTDquCT7y2zfkZ2P1D8P7NFPzMjgBvxx2XBe9eySPz4NNRpHnqmNkkhGtRvZJDTA",
  "key7": "2GwD1jrwvEz66C3UmbSn67Eg8y824eNfdWJ6fQgye1ixbdsiZGCSfRixiodM9vmDf1voB8bHqExrvXvt5qmBDdq2",
  "key8": "4uRjGU8KjinN93ohBqKEoui853MzzFFgASna6sQ5qjpefRPtaA6CP9ntfE3yzHKoF8dEq3mFrWDJ7Q9KrxwUqcPH",
  "key9": "4n2FC58NpUwsmFn7mFvvQsjMADJLkudCGLfES9ZG2p99AX39BSVv36jXPngiFhbzcQVfj5NZvm98d5JygA82tWt3",
  "key10": "24tfsARv1MyapTdPgaty2yYaJpuCeAxYqBbUBxQ4ud8DJvrXEiaQ93JCphttJ6uvr99vD1GAFgT3rVWnCBSSt8Pm",
  "key11": "5Gasfv41oz6F4NobPP2mMRM9bMFyaLSrK23JAYMFPFpfYp6zXtBBvf5Rv34sCwbLNwZ5ujErEEFD5VXH5Fsf2bAG",
  "key12": "2YT3umjgMiSizdp44Q5nqYkdRRiXjb4G3FaFXGnehxoQHQPfShKX4oWdN2monnKvLH5My9Bk9qnrJ9bi6k2jbxww",
  "key13": "3vYkXhXTNaJLMF28w4tPPBVTBHpcpXA9bWHcKYhdfeDtND3U7WvNoNkBBZ4Tvxj3XuDFwhHi41Nb8tuzkD41Kw7N",
  "key14": "4j5NvuYWuuHHcwGpzJAytT3F7b8QUebxAA6AFyFjKVpT8uccEf1CyiTiyQaZC4YvCCsunmwwiAEzc6R3ptvGgf7",
  "key15": "XVTSMaofGy7CzJGmsmUhytKHZZtpaPWiS83fYtJ8jBDNigFpxpM4XwnvkEmcC6kwHAydg8Go9P9on52wH7EAoqf",
  "key16": "3nk2gQYVvncV6vsToCxKrhSSWrNmHWCadbFHoCi791dm7ruBNuUnqhAe8YopvYXsK6o8PYjgeyQHawiT3wKz7FJ4",
  "key17": "4vxZXjiQH8H61noeup1rZyLA8NyaeDXXJF9mh99kYSUFzigzDuy8PgTWhQJ7PfHrN9HP7hdSpQPfNTfTwP8cjsfW",
  "key18": "PZC7pfv1v8GuUa7QkGZUYJkjGeubunLZ2duXAudY9fEjpnvfTsr3kQNzqdthBgLgCDZaVEtkJeJqjGwfBKwc5mv",
  "key19": "VrCwiYR2RRgjn2HEtvjeSLDpqQBEuSgAzb5ChZ56CKLMA3bNMrqC5AWr3bGTKNAoWdwBs3a9g94J9RNBNuRmt2K",
  "key20": "5RPk79BboVwC6ZisbunJZQ55De3Ug5f1k4phC6JBJZcX7aqoZ2CKhaLG4ruvz4KDKu2Md2nD6WJjHx7YJ4EwtRq6",
  "key21": "5NNL2h8gMPu1P2XLqyGppfpZTnsyKgE8ev5vucZugNNVg51x4Ap8JD49jQUrDoSdD7gW5eDBpnVUAGkmfDSEhB1n",
  "key22": "4Yz7ywh4oH9ZVn1UCp4RuPCedVqXir73j6XU2ryYaqQ18QB56FA6ZYnkoxkNJ6Ek92jUDBh9DQdkbhkz6yHbU1dD",
  "key23": "5HP5MjxMFWZbSa1FGSFb9W9K5S3fioRR85VwnJviN7mUkrDWBnEodxzfv2nsK2B35QcZCZo81KcWw3WZ3YMupsq4",
  "key24": "5wWac1YLL6kR7Egc19QAMZURFGV6dvJTm7bizcXM9iTLDfAS1qJ4UGYZFCgmiKYzEfDEGFNeum861YQWek3W6QTN",
  "key25": "MnAarwGW3tWj2zBr2Cjoue6U2WGqaCPgfdpfS3vuLMSoqSHh3cumNViGE1KuGu8snszxBGDvwpkQ6vW59BqBmWq",
  "key26": "34jRpxZMzRopMUVBtaYdfy2NBwCWZcvzxaofwP8xeCj9BYS3qdDVAZ5BYhJjvdMkaST1BnLyfC5Bh51Rha8jadJW",
  "key27": "2d6zkpVe2QJGddrXDjemdy9ZX7v2x1ttwGnPqeNCT5gffpZTCcb8w2L5tLPMMrC8vKXFsyjC5ASoW1F3Lq2H7UhN",
  "key28": "4xZmakBbaScCV99sSBsNdkB31UtSjAGKN4RHzCXxyoNFfKVDoGoJjuzxB8ReGDVVbVRKeeRVGqyREKrp99vNLbf7",
  "key29": "29fjhFZsVepXBPPtrH3aLhVye3T4pfEpEbkCV8evGWMYbz6DdXiPTwq7w5wXVVb367TDDuKguZUpW3CjQ6nJPDUp",
  "key30": "MoNd4ubUVSf9uKMDm7JnA9345srWcwhepq2cyFytAiaZ3kGTBzG1YZ5J73WBziSE6nLjxniUnayvYBJ3wLByaDy",
  "key31": "3VcQQTcZ26gFTg8ZjEELkwAZqW2LvzFRHM5djLYeRs4rA6xjDPCoLxWFvZvqXjBzbTgDrYZcRwGzgesgke8ELsNG",
  "key32": "cBmHx4NL6jXkV1BLeqJ83qt9cUKpN1W8QWz3y3s9zWSf6U2EhvBpdpLutTkaWLTHgCPoe6sbK7mFB5j8ikS7UnB",
  "key33": "NcWz57ZTphbvbEAE5cvDTEyer3Vzd7hyjK7W6iboZbv9iV4cxW3rKbQYZrxNvBsX7iShT5pwXHP28e5wBkHAtyP",
  "key34": "49h9YEggP3YCMqThsjjCnyoYCpXq7tnTjJoVbrp7wgzguqdCo94ydHVukHZHU1A858X2GtZMzzBh2oyPHnxMeGdo",
  "key35": "33TMAXVZX8fBJ7Q5BDv32CPwuQ9sU5vqRYJJcDRr7WKms1iE9Jk6fbUHhP59SwEcbP12V7NWTyBYs21AKf6GW658",
  "key36": "2nEpuAvvUDBG6YmxCg9bJKanSfgxSBoQJxrfY3jrFNcehk6sM1LGZuFnhRTeVE7vdzihDQmGxHP6YBn7bAKckB2K",
  "key37": "6xuYL81Qv13yenNJANtvj6E31Qam2Er8SFJF2nFN6QCuMeCjZdUNbCJCqVazoJmqYtKi7HtSiz9ohfd5qnRzFi5",
  "key38": "4ooTV7kDGgqjzpCYWp9aSQowzAGXwReU4gSJcYNK6QcnDWQYZCfDTS4YrktaAS4rYrm5zHLAuQtxrhn3MCbgoJnM",
  "key39": "FxHR3azpH7TvLe9MEhJXKQxMcsXrU7itqma8uW97Gn5Grar2MV3r9zbSgaR9BETwe89r1kp3FucJGbZrzEakNZa",
  "key40": "2Hzru7a1PMjxhuKCPZ4HVGRRhcbzAJ8TZfCbrvdRhddePxnpqHqrDdwFKRVEZaAzWFsnAXsxahozur2pXw5zcT1X",
  "key41": "294c39YDvd42Q8v4nECf2dYh11oUK5rZFwRBAHUMgckU74GanSEiW6hwJ6S7qTvUZzwpQGLffDuWAuPQsAo4Fhpr",
  "key42": "2ZVb79BZ8cTNQu6tdeBfkGheG5ndpUhubigKAgZMVfiyeApt1h4NfmwWxGxcHNMym5M2BvUwNPg4etm5wvN66obL",
  "key43": "4M7M4GyMCVfQAQuHFNHcmCdLLaRBYA6AquZ3SyxhPhYVdffd4u7B8cDwcUxFY5QGBDqtF6hd7SqQ77ToCVFjU8Ut",
  "key44": "4bV1YUYvPwVFNYkpFnWxwWE3fc9JeFue9zxAUC2awxpPwD8yAxvQXfU59bqZpZtc3Ss1PYbSyE7UxbLtYQzci2KU",
  "key45": "4LtmNnRmq4rdNPJm946vZcTYatswjCe8NvczuVnWMMm7uU1UYM4Y7Gp81zd7tYCZ7YxNjt6cz2USg3ybvdytov3n"
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
