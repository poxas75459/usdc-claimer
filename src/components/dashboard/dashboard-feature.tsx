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
    "2tT751yfpb7uPutxzjyiQHyYqPwHPH7iLDTnaREyVD2JYRNTjVchT3kgVPcFUMgeMUJNVVdGMtxRDFLaPVakvrnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQWLTriqtWX8otuEBjNYFStaVd6cyraZECho6mMfU6FjZEuxsqBcLT1LfV55JbAS87m1Pyuudk66HcdnELdzGfx",
  "key1": "4wPnqWZTkngodGgAPJrpaUVBPdBHV1fFgZBfz87vtrSiW13Fgiktv6jgbARAj98iHEz2NKWQKHMh617astxZDEmS",
  "key2": "2AAPcacciXR6odkRSCQ5RzJUHSoS8z5iDBEFJNKcYjQJf3wdrY7yRVQUkCoitsZwoCAKKzQU5URchQs7r6npSTzD",
  "key3": "2hJ7n9sddTxFMTEbfBWogiecXU5fKCTbee2AuhzMDKncCJbyvsRktsoCzUtjz3DvRLExJfYR2XVAFxdnnBNsufax",
  "key4": "2RMttEkEhgWM71t6io5kgosoVWzjYzVtRoUAZYyVPGQujnA9zjVBuAZAv4i6EhWo8v13FR1kkk3JzW3NMA8AeXzY",
  "key5": "2UDNuM5nhopQPEKvzE8mN8G6pWCWwNtE9RHVY9oXR6Q3NBtiaPTFfMtmwDnkLSfsnN5qJmRZASG97v8anA53NMZW",
  "key6": "3ge6sWMWnjv7SiCuMxcLJ8RSr4cpSsi8e1kFK2KtUPKxCceuiAiMi3q7pf5zaEDDjvbGXnMuwa25hNMB24oVFMbJ",
  "key7": "45oC9rHnU8eEugcnxSyxkdXen3RiB7qX8aG54zMJbsnzTDh6ebem961E6Qi64DM1K2aRhQ2nftDgrX72PRspGujM",
  "key8": "2PVkywPuNQk83DGxWnwGNQT7T9xBDTnRJSnqKz8DJxhFgmqPKX3eaGe9DhpWx7xaWCMv4aohxRDgiFq64xVHA9fz",
  "key9": "45yWP5cn74z75Cvm18tFjLkhvPvCwYXk57TDcffEoHXQGTGMyaPz27HsJ9N6WeFC2A8WBB5Z8jizM481vK2wn6dz",
  "key10": "55c1TEE671zz6vjRu65bCTZUm9fJJd5jffmrNmPSLBWEvumAgNYDZcnmFun6gs3k82XzQbxY958P3Lqu3xE3RYPy",
  "key11": "4GKMYfRMkNX7yD3tdVqpbzN3aHzAvEnshg8PgaoB3gFKYmaDebGm1LHhfyQ6dxtDFR5Yj6PrVsgF9xzSm8HR1G3F",
  "key12": "3qrnTc4ap3JuZ3kiHjNJGeFz8pgcLEZzK8NHjGqv18SGX6tnMPU8BD3inThBbRDUexkTJ6V2YfboRMQdvzLAYv4J",
  "key13": "4erEh7M3ZoyQzo51bY5xhJt4R66Fm7au2FPt2MEWmbknucysRH82G5hzXQ6FyPsDJS7i3Ab7QGHnCgVYyDNaAZhR",
  "key14": "2AYZZVzfVZLghqrCtR3uWV3nKWRR35wn3NVxyjV2mYxfEE7NC5jqzWwos1MrjenX8mMj2JfLrjFNsznXDgrVhesU",
  "key15": "23FKdB84Qjy8UGmUaqCwoFuQAqau6WhhKdp31Jg1A2FBhnect9jMqVZN1fmdyhhMCjqGnaUvBMbuUJZX4zBUL96c",
  "key16": "YqGVKbZjdzF4mwfPQYLF4zsCLke9L2WUZbVnVgEujutcVqTnxMrBg6EKjVE4Up3f5N2YQZiJPsvwkEyWktKKBVC",
  "key17": "3DUh518PxPeaZ1GbKy7rvQGMBBcthFwFyjpXLDZpBoX6fVmiDVtejbx8WtB2toKETPgrWLoGEu9mQzdiQywuCDVe",
  "key18": "GaH2bhGckJ9BfJ6X9Qagf4avPSJYcbGhg2fVfETvgaQxUs7HzSGSYvpfsuhuM6jjUBXTX7NuZ3WW3RbUbaF8id5",
  "key19": "32r5j6jiBVJUBgJJ6SGECLUB5q4gQEXs3oAFN4yrXy5BDS4yAzyGHREEZ1K5m6dPnoJFpK3CLgR1CowzF6cCpCBq",
  "key20": "3H9qFCvspEFDyHKqfUwezgyoYWPpYuiMe5Y3AQo44VY7f63nqBFMvAgvN8uhNkQ9D6ACKAZ8nXWM6nSMoD3ZKeRk",
  "key21": "65M7GggPuk4kDspRV315tSvjQx3weqfPGcaRY2C5CCJBd2aJ4hZDa7SPUnqRk62nre2pDsPAE2zMHbvwKExscFt",
  "key22": "2YKtuYG9tvsdzSWQC7xoE6WJntyuN6qVZc9EzPzuRQW6PdjwvGqfPHt1SurXMGPkAmEQFa5FssuZvfd2HbCJ7MLf",
  "key23": "28FjacVHmmM78VkGCH1UQTegnB2umwwBzHpZ12vvJpFyNZpwHzEJhVjsjEdW7wsZLFWrQamhp8fww5yumvNZgfQz",
  "key24": "3CPLQsBnPSerQJCojt4CvBL97a2y69Y7ou4f675Gw9Sqmfiw8qkMhbJHpmKg7FoyttQbwUfb4LMdNHq1LUmVbz9f",
  "key25": "5N2AytS67u7BMBXHg8J4FH3sKeFYzJQKbtX1RNFAHeHksNp6UZb7RhiupBwsnZasCsja3w6kZCCfF9PX9nqQTcd1",
  "key26": "2sCdRKyyrHjvT3CUtDfgL7ZtWCbWpA7SET8SA9dw3qJD8ZJPKdkYPiTag4gLc65qpB2YyYQNviQAqj1aNetT2BaR",
  "key27": "2Hhdh5fi5TyRoBotzK2EotQxUuMwvsDiUf4Fuh42XptT3LZPsf7xr3bkbo9xyHTi68dzGKLAsnaj33nUfbj1rkZs",
  "key28": "3L3fMcQVju7uBFy49onwkAVnVV7PfpZLYnrE39ku7qw3GTJHJ2f5u4YoK3EWTUcZ18tosqB6BnLcbociyHu3mEjh",
  "key29": "121K5d8FfJAgpGjh1vxrGxgK9bfN4fHxm7PSnFK9j2uR7uxV5wh4mZK1EC5HYjcUTR61uRQymu8bEmAsYn3LHtMb",
  "key30": "5to3Tywv5Duc9FEp78FPRN6DtAKRFGwZSuYFo4FPtEUHvtWYXRd9tNdLyT2mHiA3BcHuxAwBR4bMj8yRoL7QcUK",
  "key31": "HrcSEcjdbxefgAsUcxAWvrFb3xiuALXQv7sQSMQd6tiPgoCT1Li2wSuVFW8wy718Sc67UogifnpvKTmaTDEfV1t",
  "key32": "3YNzPUZo795oQiSCeHgidJ1FPWJXLNeZHKjwFndbqPF636AhVuon3N98rY39STwEuSFgKBHmHov47cGMf5mUmF4s",
  "key33": "2G8H3BG47j9QNqBz9emmVLTNQ4hHkjNNvzPT4JW5JCGdDWryTM7kGfs9jWhLdGyy8dyMW8sJbBma57vJB2AC9vAq",
  "key34": "2Ev3oBVkxaUfdTYxECn6hpVBz1GngqFc2LSiMoh8PTqHPYGdyHZTfYLih9BmgNhS5DDDnCjatznUfTLW1YK6JZrR",
  "key35": "3tf2Rt847nQY5ygWUdbDkMW5jfWZGXiLb2V8BpTszFK9AESGihx7Eg7EHhUdv2PYchj4rtWV7TkqXZzGSuwHrrwE",
  "key36": "2A8D8fjG678tiW3s9LHcgXcT9Q4GM6o6LPUejMLn4862tEh885Ge6CNABoQyP52Ggnzr7VzojPxQeb26z31oCXbU",
  "key37": "5BLeRoao7ZzTTgmpd7ZkD6uwf1ci24P2YGZoCmWr22qDNpUUN4zXxbGcxockM5UsfBRDfuwPT894CXGL4TTqWQH3"
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
