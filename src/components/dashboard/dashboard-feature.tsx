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
    "4ukY77rG4NeDFAENatbzFMaFYTMaRkhf5VzBzHJBT9JYTNBsHbHr1mnKXtQMN1fBi5pHprNoFCoUNihLaCyoNVbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eyyF7G8iA2pGcKSuQPjkvRkVpinbH3MyoaoGmz1dUfEiVfd5qJJ8uj8sGcRW9KNMyxguLCYhSsRTraZw38n6FHe",
  "key1": "2HbCkYSoxcy3P38hiNppq1jnTMy9qwR52tWmTGZWKgtcyjswWvUq6jf2BqU8RAhCHZEiK7VLoYhB5bfFc2kc1xhV",
  "key2": "3b1eZ61wdu2DL174qY3fmB4L5n1c8VjQyfqQvoKfmS3XJpS6YBfU2fPTFfgk1aSN3HdBEhcnA6cDfmx1sByp7SZs",
  "key3": "4wKrin8Bc8PT2VgR9EqjikCTT6m6deRUzHswo3FpmQbDv4vn1HN1bYHVu9ftDCJBHrJcAuYKe5HKeZLKhTuHUZwn",
  "key4": "4U4xLKVHQhKwqTDJo4ti99weq15T2R9d1mjBxGYgmsGNQMb9Pr2UVJp1McmSHzHRtoDVUyFJsnTrTW2VpduaXYwh",
  "key5": "3hrgNz87U2QcStakxY2C8kfoYHyjdo4tznJzE8XpNVdvY7h368tPJUd9PzWbuW6qpkT8V1UfV3q92vthtoMQiv5K",
  "key6": "3PBy1FZmkqpbQ4KuW5P4iB2vUtvvDDMoageRxmWWmPbJ1dqmU7vqtmPsb2MxCco67t8eh3XnLch9E58GfYeicTrG",
  "key7": "3B9WYShuj78eENX8im5vGhMAXHXUERAkfpoxLthXyWTFjQWWsxzFXpU2BEDrUcdwGmCVRtjan3xUwiko5VCBg63P",
  "key8": "4NbchDbw1btppMTytKkBJdnWwS68ZjW5yXqJwqteGGXcJK73QTrUwuhxar6WqVH962Fgdan1nbPvsSs3Fb3yfz3M",
  "key9": "hYXMexbg19rzANwwpBxMoMyU3tKv3q6w7ndXDTWbwKmeikyFg2m8D1MHfjjP3HKP9JRQQJobeCjg2xxaCsRowm7",
  "key10": "5wkTPUXcKUuQ3MVepTogMpcTf8YDMgDGLykzEYVbRr7ic4dohkLxbTCA1MdwRhY6d7MttAnxKLHxLjSAbSXKjTkr",
  "key11": "5Lz8qNukingvvvpkC96Uw8v1514wDw4NX9jm4C4JwqW13DnpvpEFH2EMvA9YQAfwnc1eUzbCQdpS4sRR5bw3B8nH",
  "key12": "3vTy2kUSy5UVTeH4xb8HV787fToefdLB2WCvbfFukktVWuHh5TQKDHoX67kYWq3F2rn525EcrJ3FzhmiNjitrDgB",
  "key13": "3e6x1qLiLqgCKabCCAEAxvsE713qwjATr8LDoPpbUDg1jCMX22mGc8NsE79oLizPbQcqiCrjiUS9cMyTKLcCSEsM",
  "key14": "3gbYkSvj9KXpBCwDSDuPSVC42dbmw5dfbofYyECqNNaY1bQ88G6ZqEgm6jPV87C14BC5peRQrVcFtDNUMTer2Bq5",
  "key15": "4mArcjrRMJvHR1QfDuEPT7nLDDkUwqgrsnLPTwQKNosMmXf7e8SQPVUWPeAguVZ6HQfM5MJd6c9iUQZqrCsDiUk8",
  "key16": "5UfLutkPonWM1uEscDtzHXdhkgEgVqV2A3gwyKY5YCVbksYNXR1cnjjXbchkVH1skrj4NAveDST7sTd2D5mMTDJF",
  "key17": "3Hgb38AJrXD3WbogMtk1QxYmQ3wDydJ8ad5DvtPqhztt53C2mkkZnaEzBodMAQ1YpCxa8BHt7U8kdzDwQ6xaJmcQ",
  "key18": "yoDooPpEvYPPQmqiQN8dMkMjB3eicZdXUppoim6AUTBrLgwyX3iAQ7TTD7jNd6TgVJh3x2Z7gmqZHBez1QdHsgz",
  "key19": "2CFHobKVHYDzCY9oM5zBTuPSDQMzcuJXPyxM3pQET8fPfQSA6XWdYEjKpZUkzoHXsFPhr2f9qg7TaaSwD1mGwkbe",
  "key20": "4QPBtwcMS6jgYkuaZ6FAjdnGFzEzAedUGM6GebdYD8vDc3FAVKbhfUvuPhekbemEY1qY2ASfFSxMZJnTsXhojAYn",
  "key21": "2zd9hPW5VnoSyLDXWjjwj5QqttF6uzdVTFy5jWRmpKWZzMAnGo4QkuKUyeYSqVEcMFEm8VfXdkH1gPuF89AYiB99",
  "key22": "2eAydPE5dnbUyZMt88XF2HsxLXbGGjDWSXdCRxN5Qbtfw2qRVmexiw31r69ebkVdyDTDN6SGqSU3usf3c6NxBXME",
  "key23": "2MXapYN7KJVevR3tdZcsXQh3UM6Wx9Kv6G347k3riHi4u4izbT9QU1G4d6svAvQjfkmetFiL4jc1MrSrqwva7M8x",
  "key24": "N76KTu62rJGmB52NuAHq5Z1bgjd1LiGNaE1ZbJKwWn9nQqFsfUk1zeWbSjqMcV3g3nC7k7JVfdXu2qsdDTjtokc",
  "key25": "4GvyFSKjUkd6hMC46RmkgMxq6vJMxbfowou9naGzWYuWkqzcdjenCDzvys8Yxb8aaqsJtvJ4946XJJ1J34qQdzj6",
  "key26": "24zzYhBBeHi6pVvwNAkTPM1AzTMQQQVfuhfeC9EYBafxDpP6obXE6xGyNXjQ8moK8pe7TNztL3jyzbRA5qsQwx1K",
  "key27": "MLciuBDLf2p2P9HkSuw42d2vZr9jFojv1z1eGs31EYZzKPXCrdRuDMnFSdjsdVUjZ7boEew67e2kHYCuzCLNaAc",
  "key28": "2ynBbALD9m3FAQJtTZgRBAVxtWiQfaFf5hVnR5Maa14FDpdQJBHhV4p58qLAPwgdn9fuPtWXuUJwBCW6DBYRi54G",
  "key29": "2hVqPjcED9SUJsUZqV8EP6ehcgZtGBET4MePV9mpNtWciLaEKzWe9ZoVxmsYVbc3uQ3hbNLcEXsLrPDvTUjXjHGZ",
  "key30": "3h8WNTeBenWzSX8SXy6hbVvJYcBbss5hc17uinWg2sxj33A95998o8vrpJ4LANWY3gRUFMZHDnfeAeYG4u87tMBU",
  "key31": "4eM3ASpzN6UUwWyuXGUeWkQuNSC5B4VW7Rzixo9q7iVhohYbJ7acJWS6fWY9Sdmu9Pxe7aCb2q9cxyjofkDkNzQU",
  "key32": "2UtSHMHC5XAwd4vcRExBSZWN2fzZJqL91Zjqkvisc57AwEr3LQ6wjaZrMFrcZfNtkfN5yPSQ5KtQvLjRGHh23JVx",
  "key33": "2si1rz3J3qJuCVU1GGQ9QiXwyQhL7nvRd6kMeStoTGayAHrZdPUqTGaJWLFktfPMPc1GF77EAZ5bwwjh2cZhd8ke",
  "key34": "2cKNDitZu3NfDvoeHijMsnjnk4yphrL9ufbdGtbgA6QeQQ4VXutN5kmcdNZSMoCk2uVTTPU2EDc9Hw93ozsErH33",
  "key35": "4So5GozYJiYTUBcxTwTnViM33EWNitvJqvhDjuegnsum5fXZRFKuDCEe7n6QY5dn2aAP4HJnPB13WbVF397UoALJ",
  "key36": "122GZhTi1AppU4Lm5vHMyvKjV9zxPyidhNGVDT99reniZNsd4qfTC3ohP8utUhfvE9gGwk2azJgMeG62Xvx3TGdz",
  "key37": "maWbbmNSgUHhrvC5TvSGKMQfcg6VcNLsQSEZaGJYujozRK4gzYBUgUL7Dxoqtg8eB1VDAZmQhRVkraSvgnZmBFS",
  "key38": "3DuctTXXfnFitZ5Y8JyFxRMRtdJA2PgRbLmNXN2fNS8JZSTDDi1faRe1H3LmjDybkPfEnsYWR32PpnSoygzV75LD",
  "key39": "2KfdkoXx4GqmR25SbkoD3SZr3NZuTeX6QwY6WMjZo6kF8CWBA9MumSnR4TQ3NUaTpUV1vKm6R7ZX1x3Am7mv35R9",
  "key40": "5wGAVu7XjQgD9pzqeLDemrVT8dBhrws8Jr9oiDiwNeSRYbgySVXc8MqGrQnfGo7avCCng7N7auebiE2Cu8Cqr5Sw",
  "key41": "2BjCYLRS8CLonr8HMX94NZ3FBdeYtvDQyjZH1VWNDYn5Kd1W3UhV2XkTEu9MfQhH1Q26HZ87vTeQyZor82a39Hup",
  "key42": "5iUKa556T55rDqp7vDvZmnCq6mMLxyz8mTRnzvHWAAv6MyzsQkRCvxbRZR6TY2EKUGwboe551gqAiAWLNGf2o3NY"
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
