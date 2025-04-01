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
    "4pXr9S2HWzhkBiWKrwqb6SqiwmKkAdCfS92WqR3hLEMq8a5XT26SbhCRnyfndbq6PY8zE46gumcKK4dSPrg8oacT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghfyDWdzShEz1somLf18YFUNqX4nVeDcQnvRxsvs24947shfCjBaEoJHJ8vMmTzCSGQ6vZWDoPJ3qc7WpV1Umaw",
  "key1": "5h5viuutdjypiSz873wRqSfQmRA8i5UHLsRFQZGtmz577tqNb2X3vtUfzEuR1jX3Zwp2uBqK2XqJTddLjY8srFhS",
  "key2": "3SuD6NPzsYqYyQes6EX9rcLG1P7waabxE522MZwCerS9qa5D7Y9ek2mtyGiFKwanFGLzu29hbGxB6eARWsCHDDmo",
  "key3": "4oEjqzcYrNKcreMf8xhy3NKueVfa17Lw1AFeniuWX58QCtXfu7VHCLfqsPGLks9onFB2dqrDu7YqXmf3Fc4YLmAy",
  "key4": "4ZisjHbc3DN4RWtmQfM2YnZZNaDPa7KS6thhqcsLo3Tf14C2bzgv7ZwHwTh8h3sftCm2udgcEcU1ChqAbV9Wjw95",
  "key5": "4146RF2fu2j3Ycp3FJSncR1fXuGRpDLn72fXK5oW8YVcB3ePJ7Vds52H8w7wABfdV5q8dWbncAPGivrMbVJutYgF",
  "key6": "4YcSQ7GoobBK1joH4jngwNDZrke1hLGKar524MC8M3jJULRW7EGrcBpaeoQccj2Fc5PM3eHG4SoF785yAzPE9s1u",
  "key7": "5713dn7Pi1RrCpgXkY4iKf6Cgr3nKvCfm3sSfMEv3YKjMnCBh7gLHMZNnJBRMsyXzUfQ3D1HhbYWqSYHSL7mmyfw",
  "key8": "2dg5Ma2g9E9msRVE9DmxpLhQsatWGqnk8LSFirj97xucZkuLB1Y4WCg55d12k39it4mjb2r1Kw6GTxAJf56XmuS2",
  "key9": "57HwwYhsiAyTWxw87Hofajo2Kdrx3FYb7fXRivsNNAiBUvQyV3u7yG2mSkYhyhJ7hmhFv1YCQoSJoph7rMAXN6mX",
  "key10": "3qz21efGyzHhM2ZcPTJzwy9WirrdyvT2Xf1kE2QGAseqF3LF2xbYsB3tEQLW5q9GtpQzPjw93ATYzKyGpDjDA4Hz",
  "key11": "XPGJhLWNZuf4p2XqrLuftbD6eXbpwLgjHXofqmDhH1YGuMmEVgEGjLy68YmzBB7zjxA9Ndfb73wu9c91PFzTbVW",
  "key12": "3wgP7g1pDSwdhRTGSwDtfVQN6zUsNZL1AvCwydddAM42N8KUANJd5QCpszHAa5MtoVbunjXhUemcT9adBjNU4bzQ",
  "key13": "3tSFUZBb5muuYRmcTSKX9ttbgJRjWaraq9ESWcArxSMWTtanEkN7qMQKQmfZSrm9VTxzBmvJAYMmEiETC2zzwFkr",
  "key14": "4uTaXPyUQQ1FPYZDvwKRC1gAgm1nnyGcL8jdGBJamXyiaUVxoH7wshtRieBjRR3fBXVdCSXWyZW7kZK1xWyMYn2L",
  "key15": "c3FE6BgRbNuUZxDnjA5NxtTCa7WZ7iRMZWgjaRVgsbNiHbKZ6xdVpsc3skpoQ4bA3ucMZBCeGYkiJQL1Lo71gUh",
  "key16": "5qUYrPeXCMwXBHmPSAy298FiBWChoTPichMwssxt7cwCWXWvZKtBCW9RZVkevxZ8bTMgv4hqugR54SrYSSm5wJtC",
  "key17": "2nWhu1RKZw7ePFRopiE9q1VXhNjThSEe7R9VymNdRVAUQ5CAraXisdoNXV628VZKpDNjCvYqWRbzWB2FjiMKyr6M",
  "key18": "zAtSrsz8m8DUGsfZ6RBEbDWL4UcHkzekLwpeebkrUTKXcX6E2Z5erBQtBKhafS88wai4RTsoxMXaVs7uv14WXez",
  "key19": "45Nc8ki7yVQceXnynN7nmW93qFCN3MtSwu231HZU8MoVxWTf7TnmmQM3PZAtP25RzZKneq1GHAriBkEWr95ErF8G",
  "key20": "2QWh4fPpwUGJK9Ym1a4Fnnfm2EbeiAeoAr5eFkc1LYurQVqm8uJyZ4G7svsRyZs5yXuFz2qB2az1mFfPQtutmmrN",
  "key21": "2eS3DnPBYzikp6obJBxF39qCT5j6351NutYQ2bQswEVz9X4zPUJbzkDQN49ky9Xu7PQsR3vZMAEKh2MzmsHRxb5u",
  "key22": "39WJpLPLjKVDEKf35b7jqL3RPshLSLnnQZdJmXpYthKani6BAVajwUL1YW8AR9TKXehNAAFSJuz6pa28CbTQ3Uav",
  "key23": "oCr8XRhd2PHKxLmipPgRmcKU4fj3cQs8e8nxZmccqyfvgZBPe1rMLMuueqiaHzg9qx8dnMwPnN85Skotj8vCKUj",
  "key24": "35zxGSrMUm32ywwsgGjTo5Dn1FWfRNJgAMVkKYj6RT1tmuG5z4c8Jq4PeHgTiu7GTT6KNTG49d4BuBzT1S5rpRZC",
  "key25": "2RV28mpLLewP1d6HV9taGWSGLJugwjmTiBstvxdDVK9kktJSdHSHSzQdNwZ6t1ysdd8RRmE6DZRotiu1gYqD7zn5",
  "key26": "2PLRs2Sjtji1VMzbmBnBPFkA4S1x7jpt2t8gM95vH9tTX6UrmG4sNrLMDLCVfkXW6VaryifQ4eBm87o1ASyArPT1",
  "key27": "4ubngDTjLYxWcvdvRxm9o3sCgd7WkREAxng25V3ozTeZdUEtdX6fRtqn2qAn4KjP1gYwmMn54FBTxxjeBWGsK5tD",
  "key28": "3WvCCVYUeiSdM3EorpxCZjVEhBiFzm7sfeQME8hFSxjj8D2GMj39pjTTXqKb1twbkLdUrbkaWeoNcYH4YvdPRW7M",
  "key29": "KXyNdjGvytAdw2rRy6tSCCJD1sJ6fosWM353Es4HUmFqHBxNPU7uFTzcsMJcUiqGgdtFgy4kDgDgsBVutFn2EAg",
  "key30": "ykiCiDMdW2Dz4zoGHAoopjihiEZVMiPV5pmmMfXQn9Z28tbtHgkseAD6xBSKfW11kYcMb6kpb8U9PBCu1JSnYFK"
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
