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
    "5p6LsEUGG7i249ne3TYvvmUe7NdfARLHxA45wZrJnVdDxi2JikuUyYHtAsAj2ZreUFBB3PJBHNYsaM2ZpozVutZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tet1XcuKwf16hUdDbWazy6fPks6zbxvspKHRr1AU13f8b4qRQVyeS6k5jiLnALgdfs1EfD4mXbySqd32SigWuMB",
  "key1": "2Es1n82Dmrv8Wsxcz6GqARNDjcKVwQ3zN6MZCG8WxfuqPpMDhZiSiquYanYZ6s6JzmGoKi6X6HFFWDYFazJmH5S9",
  "key2": "3TAfqHsfdUFhPmMLe7JFdCkbPUCi3uKNho7mXxdYnBpeEKDePSMpC7yfPBzJ92AJV2oEXiYms2qivdWkVvcF2LKh",
  "key3": "4hYH92obc2bL9i2ddq3fHMs5tdsQkng8Wv3jJog1BZ4teSg6nArvjm1Fi4FyMmYUDEpjcqjf3urKcMAMi4aGWU3A",
  "key4": "3Gtt8sKHUTLWBXqmTT1FqQLEUhpZJ1npkoAcFCoefYwx9nAqSSbfL8idgsc9ecj3bMLV5VASJHL9gZrLr5iNuvDC",
  "key5": "8Nv7zejCa3KfPBrgY7D8rqkx4NivCCYkgyYF9NkJWKjzDEduc4Vt4vnbnWZyLXVfNruoGCVK9MReSqtBYh6Pd8j",
  "key6": "2zBcrUue2v8vuxf1MVVfFimJcRjFnFCLmjQaaeXD8hPXvHGBdJCCwP7J6JvNvyC5u94VEJhSjbNMqgxrvvwNGZNU",
  "key7": "4GGUBZQPW3BA3Zy6khSjziXMevGcmttJj41oxYgqTMgCR3RmNukhvknFvpPMmUCwEConnBQSSDpztRdhEB7ywUK4",
  "key8": "4cYppMQtPC3bHLXUN8inAcpNAfHW4sM4Pq1Ty2wjEhnWASmmCT4D2mZk9BWvxZjgzA5gwwnm16GoK4a2P5JASDGt",
  "key9": "2DV9hfgiSpKeotSkWmTfQaat1Kcd7hMGnvE9HKX7Zy5ELTjMpRrSBJjqnwQgGwoj3ZR3dk3jZbnD4E6iSqkEeyAp",
  "key10": "3eBvH3fafMTSnT2AdJHLBSkvvHH4BnVWyGvCQZ3Zeqrp324CHfFwW8iY92E5RiwUmaPgqivWd6f1pS4bBjYZHFxP",
  "key11": "5z2Zvzx6jeakqic7UJ6fnWhKDmZgfHZ619VP8VCzSa8wWHp4LZ4fmESKV66g7bCAq7iqkEKbBDfpBTMnuqCVHufw",
  "key12": "3TXLZoNt8DpTLNF7ZmNJffTbNpyphSWJGp6tcZm6MUZ3uiav7q78YhTb7tYctUcyoKT15KJeWMa52xnh6tdk4grh",
  "key13": "5mEQz75afETwNhFPLnP4xUagkfpTVcE3nRKmVk8bD3LZBfxczu7d7tPLmpmSDbD6q68e8DBR6nYUUqWBH6rBwpRc",
  "key14": "4BZKry49zsiKjVgvR2sQrHbtEtrSt2u6GVUFzK59yTWj6UtRwx4ZMKBFzDnqzHaUsBWjtUx3WHy5G7TXHch9L5rk",
  "key15": "W5YxkHUXssRN663iLXieCd5xA5KJ5wUTXfLrHBd7kDK6kCa41TUx9ffxLirsaJEWUuknwojq3F53ooBoNKctaAj",
  "key16": "2TYDx7EESktvkTnPyw9PgMaAJRt1ydsBritVQ1L1GQSVXur8hUDMBQgzq7HeVKf2XaTumWYSpdMiDBLbEan9RFC2",
  "key17": "5AwDD6C7L4wc7CHev15i5jtduj23GZQZMCztpzRb9so1i68HYFYL82e8qtqjVFaKrYXj6qgvkd3hYHziEkfHXnuU",
  "key18": "HzQe76iBZRPG1EfXMWqk4iTDxwJaCdJQBxp27kzC9ix7B5k2k44AhmU8noRTJVgcM7pZxE29kGpAUzP6Qvgkma9",
  "key19": "2Do8kBhduApJsuBQYhjJ7ioR9eRpyWmmeegTyzXf26W9TvGmM1YuGT6J2KjioM3rWGBvoEniEHW4tpmTTB55cL1U",
  "key20": "31r4Ainb4Na7xFq775rb5fsCBinuK3b3czDoJ8cV8SJcgjtJntdFzSUgJ1y711m1TZyVpZ9z3y9MHNiGQoyPjgJm",
  "key21": "3svUhnittdtJA87kWNrJWE8L5eBzSgzH9P8jgHdK1LPBujCvDucEzcTKox6MvHts1fQgsLrBapaqszuBtyu2S2by",
  "key22": "59UTyvPHzeDCWNyy9hxJK7VJytNKpFuzVd9m6FDwSLxWF8K84fL1yLXkEHEuJw7qUPxGUuzA5oznm1LgnBTHmub9",
  "key23": "43DPAeqmwyMgeCdeuThA7nbTyWHYxKbbrR7F34DfhM3xeDDxGGnJTBeURGcnQA1SaCqdxufnfXadZo83dF8QuPJo",
  "key24": "67eiwoSbx8yxKBYw3mF3sorMi7pDT2DswQBVcLtFkzhTJVj5Q93MKYRkhx8GL7xtxbSTPpXp9gEBVgtagYA3pv4u",
  "key25": "23hmnHwC1MnDN4CXNSkwwKN7imoVVcP1374nGGg1oHJg4Ei6eLDMicwzXjkvjWAnQWiuSzeUJgdMPDhazCxYuBcU",
  "key26": "PWZp6HGpAKdJAxFD18yUqDjw1Rg9985dgBHEshWbbevWKjG18CRtdUwUejyrfQb9PjXTeBtH8Ttag3xWe9zrc2c",
  "key27": "nt2NSdwnEc58KJyUT3fEQaE7YBKrM7wjqFga82FjwX97hJAgeVXTtE9z2qntQzUic2vX2J2P2BXDSokdZj1VLoJ",
  "key28": "4XiPxhRyZLjc7j5K7byGpvjdKBJLm9SpVP7LfoBdpsrAJQtuQ78GV6WMwoEKv8Gh4g4vBCNubuZENBAoGqutYSPe",
  "key29": "3LasSBTLypnjPrjExC3rJ1pcKZyoafpDtGcAFc1iB6ggxRUm981fpbiU7vAeaHAhkeq7FzojR8mZBCzWKv2P4SJh",
  "key30": "48LRMPU13LHzP2na8fMQfLMvBtwUcygkRvEJs2G6smKj2oNZHFQ7eLuQXzhSVu38yvksNbAxS7UjhT1U44DVyVWk",
  "key31": "63TdAXGNqerqCdgdrwTyFckr7H5Hyh6PJnpn8ChKEYEWxMEMGPXV7PCsowqm1Dx4Zc5QRNTbFwTg8gWB4cQH6KiU",
  "key32": "3XRaMxMoDHXzQ4zhiKs9i8rWFTEubFPX82XpgFowthRGfNe7jNFfSeyZeXX6mLrQ3ds78RAKJ9QwYK7xSFkzZcr",
  "key33": "4drYm41EM582tWQhfC6t85EgCnvy8rbWhwupVzxVLQjTF5PSj7phX6Sx9JWwhJqbS9dBkh74hUP9FXD7pu9DiZFQ",
  "key34": "5dP4g3eegvzkoAgi1XZ3jViycUNnQ4vvnMrZbUnJ4rkso5pfdkifQHppqcaoFawLCFaLPDBKpiaSa77vLwwJHKYf",
  "key35": "63JcFbzrNeFt1ay4McfN1tWXRYxgTYe2ZKGm7o7E9Jnh2jVksfFxpiUGXtSxSNg2s3eHtFj9F1CqfTsAqsaMtMHW"
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
