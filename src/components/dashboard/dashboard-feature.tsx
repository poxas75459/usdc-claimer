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
    "MhDboe8XaW6M7wtiz5AtHTYQ28MDQRWAttJ7fbihLHqnML4td3uA5Z3fDFKHX6EzRxzvR89iVru1NST6nsckDUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbRMucQVYrjzVkGLhwPeq2M3PDWT3bisyW4i6PSUZPsMcHCTSvZhW7CFTPaNdhEYroMEfweMzWVKEFURMn9xCbj",
  "key1": "4tzGtkvxCrVq3qKUm9bLuxGoCqYcDYkMGKVw9zxzP27C7qC71JPcjAe7qYCL6y4FpT6sVBpwKE3nt5pJEUNAGZPL",
  "key2": "46MffEYaH1Do26SRz7XhmETSZZr6TC86p4nYqNEmoe2Px2WLDxuEWn9ynyTxZAgwpxEQaj7qhfRgoxd2GT2gZGFm",
  "key3": "2TTxt1KkWgaqhgXViZFK7o9AAYqFEY97TjnujiwMzcXy5pbgj36iWxnM1Va3h99zL3RNfXuYDKHZepfpywWsHcoF",
  "key4": "2Ua6mfhuRvJNvLibmSyRChBLEFXxJqpfYZCA5bvhk7t9HKPRRujbFj5mm2z8f1aLUttFsn2rUPgEuDzS9u6dsCuR",
  "key5": "4d1ayCtFQLYoy3Vn1GTPmYoQ75uyFnhVfrcKtZHxJRDYwiFA1PEWx1dXh4r46CNHj1FQH6Fpa8zJxdkd71NrVGnv",
  "key6": "Gq6ZhAHx9gsaaXHGZsHiRprjZtqGnxdbiogSn5Po3AXC7nA49k91DF1MZz1ourGCEon61dAbd2c4ABATZFsum9d",
  "key7": "3csoCERkNYgBa8fapojkZA3Jz6k5PALRFVGboZLWWJarpiEKvxpKVWtii2uBPHKnZoZb5syv5fNMp18ywFVZBMBq",
  "key8": "2aHonWXTQyjoGkvCWAxR9tkVc3pWv2CyfSQY2w7cBN2YDi1tEnFwD9gbfqCYdCDYrjGuQbTDAx2eL7aHttHHf2QH",
  "key9": "4yaxiDuuMs8DvsqQWp4tYsWcnrvafcPTvj9H2nodfzvQjs42VFHjL4Z7kSesobqZGzUboES1kbiswNyAqv4txPCL",
  "key10": "4dfEteLXq4XrXUS13KeDwuV3NyCp5Hyky4bjqzekw7BbYQtMMJxoPjxchvD9udG6DghDVWBB3u8HstiDsBwj8iJT",
  "key11": "VupQ3vLGGyV3w293HNqntKHrs5qynEmkwqEUAhoMdQz2RYVyv6C2FPaFP6r3Z3zgr29P2u4eMEpFgrRkAiD9JPP",
  "key12": "51PgRjts89NxLyA3yBAix4WL3CWqpbz1zCfoBR4Q6s71kNvkDXmzBsKEz7wz9h4YJEXYNj4NUR89nY9y4x5zcsp",
  "key13": "4DShkDTqqnV2wFuvS2XxF54yywfSkWVXuhpy1Wj9qCXdsk4CSwedrJbfJN57WKH2vts4sqyDPEWYpH6pRxAPrEB3",
  "key14": "3PAYJtSequpwe2cY2f5RwSZTszpEf9cbCw9JGecpSDQAFhsr9popF2WqMwZTd5YV81eQf1qrkmPUYixbyEUs1P8H",
  "key15": "WGPJa672c8w4uRjspUHYh6KH4RY2nYCSxYBnsnp1PaEtCA6wY6eRDACJjGZBcQp3cGuJ4znUjodVhbY3CGGW2aS",
  "key16": "2JekokL5xJ4RdsehWXLw1hWLPzUrvzebpbn62eY4uokC1uTjaTNcVUJrvEhkaS8x2u1zUu56hNB2VdsCmQMWmMud",
  "key17": "21mLUWEDnsbcZWqHjnsDiNgto6Fic8pxi5sYw3NqYMhLK3i7eNe5dEdGdnVSDDzpTNnc3mFJsSMKeXpnsPRBWC1H",
  "key18": "55DV2QGCoAswMaWaohVfzTjC5FyA2tUnsgDs5tQ4QVFJju8CuGxftguExsxA6YcmyUBPB5hb3ZgdxG9VgAFvsJzY",
  "key19": "4D8p2too4eASGKDXTM9hHCuH4KjJu9UJqZ5oxYXh6BH7g6G33tjSS7eCo1LRW3tjgyHdUmg8WGKdmRhLuWHxx5hc",
  "key20": "rknvJ3Qw9VDZA4u86zbF4m7bw9cjR23f5n2Hw7GBJGtpzQcp9HKipSr2boBXodW1kyitj7jTUt44znQQLabCDe9",
  "key21": "38RXCReFVxddhfMSTGTJ7aiNJ33ef1hCP7u1CWyNrfGXP6CmGD1ZQmzaqRQCy3jWCMA7LqLgtTkMF45qi52rx94C",
  "key22": "3XY7Q6dYzUB3jBixsiLfzDwndHFK7sZyeBkwHJu1fB14GHNaQwNTGabaDQ4tRrusY7XGPgGXjo6S38zoYtar9Utn",
  "key23": "5UGdYSBi6SQFMNe9j8ZP1BtZeiUq6iZJXLTbvx7n3jQtgrfUP4ZDxeZ6Xx8jjPHtq3SUFkcgScqwVyvYZMy5vgCN",
  "key24": "4fCrUpCHQNGsFcUEB58LRkKTuer6Hg89CbThxuUH9Veu41u73HcVex5Jhi34C9aigdYUYuGEzh61G3zbqG9Ytvrb",
  "key25": "4WtnxfiUgm8ZwnsJQCnnmP7W7gHrimRXuUxkpk5mC7hR4hMtL19VtrPpxk7Ybi9vmpyPZjXQLkksJPv3KA2TGUsR",
  "key26": "48UWZsY8dkxa9DPMGd7JDWnQVgWjs34h2jgPdczDwAERSaAE22kUnBWAAJhQvNUFLsTaANPuagmECme15yPqDYVi",
  "key27": "4shWKvoqFgTXtJcAeyAvvyAAXJbRwiT6npjZKW7kyLJG8Nr72CgEgYcF5QFjLqVsK6YwEo1v8jbwbogNxsiWiYMc",
  "key28": "3VmXa5QemNVnpghGMYn4HdsrtQmFy3SJCzp6NyjDkPd4WtJ9Qb9vEGZ4jutrZZUgL2RspTa1fhj2ECovsRQ5zW5F",
  "key29": "2sPsW3U1Bc9ZThCZtZTTyKUHxWkrhZesUFozNdwZ3B3SRMxJwnxDSKSvKztQEPwR3Cw4tGRFLvNxHieXcjuDQLAD",
  "key30": "3Usen2CgD7PpDFP9HFc5cZnamxTZPuw6SZyv3HnsPPUC7XDSFQhW5kJ6QmXSSBtuEgdXAhXib5667BeFCW5eh4SN",
  "key31": "31seXywz867cby3YprYPLGKBxwZqGuPNEziYBHYa6Q9FeZhqPmsdqxsgv7YRATENzvErKMUenZtTtZc79WfMVwxx",
  "key32": "2uJQ4z2N5CmvKbQ4xdne4vnx7ZLwqF4vf2N8CC4c6Nq8RwGGk3sM57xP4veWut8oNHBoAnR8XqCAsAu3Ydj64XZP",
  "key33": "KZ4dPC5fpVjw43PnFJtHGdJk3AmiMkjWPSiR2N9NdoK2oK4rUicVpf6n9VthpKCbRzMA6tqeSH9j9KLw9toqPFy",
  "key34": "2bCW2oLE5pFwd49bCnWfjBAEX4dgJbzRudiFXGms8NNf82M1UmFozywDvuKPpBJEQTsf27VwCxoRvM5QYEDC9gfL",
  "key35": "3eo6g5P63MVabcifpJksEH3DyBRDELDaNV7BRttLDQmy5MixHLdFPBayCSQ1G6KVSVbScCDZXpatfjVwHFzj7S6s",
  "key36": "4NSUAezwy3R3DVPzA5FXyCd53vykNqk8N4fmCwayrCunwChwe1zFpJKrTWNzB7W9ovfgvPjWozNHCWT5EKGxfynh",
  "key37": "3ojQULBu2xo6ijuKxPxeS8vfLzxvgU1AJy8Ld44h5jFFMymNkZVW53fYQeoDvMzCa21ZqFUCMXgqaYTDUqnHkfBN",
  "key38": "5VBaafEo15TTZFLDWSPug5LZ354cmeBCcyG6g7vBcy4wJ9iAJGVWj4XkfkBAdC4bifSwjRb78KChu7Z5NKikFUKF",
  "key39": "92JiHFcPywrB6mtzQhRfrZP3H7PF8VdtKYR17DuJM62LJQHaQpkGkFX84SJCz4Rotd5jeAtJgvePPENWbv5cWDk",
  "key40": "46mwYqAgNDRDwTLzXYDJHhrFEe5wXQAN4BVFjEoqBf4gZvU7xC1GMgrv64Wmu5ZFggmcWywdfziKzmg43DQpTb3g"
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
