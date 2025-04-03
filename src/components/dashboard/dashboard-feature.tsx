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
    "3JfqC8MHNb3BLD3n8ye8M88gxz1GV1ooSVfeqY6r7J7Sdxza8ArVGjatsusPSpFWVt54SmdPPTYxPH3WZFJVXf4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zmbxYjyspFAYXghK1sWxFsbZqXWDMfxFn8Vs9zHpm5MzaPPnsfZxDox2rWv5pAwDYSm5BSgKLuLkBsyRkPgNKqR",
  "key1": "52kFyUaw4pZM5dmHSJNk1ktNaqGVXirENw5K6AudrSbvieotGaz7sCrgXyVKXXTNFRF45qRqy6fEiiYKgcwkeWvJ",
  "key2": "3yi84wwHai7obq9TznXKqtaNLsCgLYamEpWg5mQbS6xK9bY3e1SK6C1mNaCdRFFEqWiCLW7EWQvSZiWJJaiddoxt",
  "key3": "2T3JvxVivHhJgSyZY18rduury9Ea1Co2UWbjiRtTxvHGkWC5yos3CkJsdf8tm9RwVZahnUh4eeN26TSkpqWQTNMX",
  "key4": "63fGBndnm4CCH9CcD3CfJkLfWyhPysVgQgDWEiGXL9uK7593MvK3JNWAVz1ayycrvSV7eBYGUsYB9GCyByEagEGT",
  "key5": "2CuAv2fYWViXu92k5d1Q3ddNPQaeyv9dD4eB3BRDjyNauaHtvrRQBeRW8hLDRNFSzzNay17MtiuQLPTpANn663Vd",
  "key6": "4zTbo79NFZKxA6gZFxNo3zfDn9daFMTTwA7FMy2tv66LAWwATmRUHMiLegJEJ7u8avBQJxuBD6BBYgayWgzmiYhD",
  "key7": "wFrfBwJTNv9p2b9kgqBtH6feE7x8uA9H91pSNPEMGdhfQW3zmd4iKJdpCvL1PWRTFGp863JDXw1yNCBcVGruuSK",
  "key8": "2aDg7YsypaTX49PSvdUqnphCMFLGbnppsahn8PpwG71BoRBX4MirihPwMVsvMvkTdCMDrwGo1ekGwFhZUtQQjvkk",
  "key9": "3Tc8r8kpwReJtr6xvGc7r2pAR8tQuYDyepnJFco6cHMdPo5XJepvPEN5YbRCitbvQm9ZrndpdkYRboTbNdSEqSMH",
  "key10": "4xwbE4BK4exPLiYh8KFfLBRLEiAycEovqrx2Kd4BttScBzDptehFcKHbLbrLvBaZ64uAyUe7QH9uEW91qXLbfFww",
  "key11": "2D1hA5Tb5fHuaxhvwnVvvgo4W9GXfKUTPgc4WAmrcG3MpWRGMDmmo2pnVy2x8QN8CywA4AtpNa4yDZvTJM3Lwbrw",
  "key12": "3yPq2BjrezwREVPAakU2sKt2QnbuyxMUcDtYRRdPTPuCLRPFCDrWDHzUEUM3jbFeYANFvHh2mstqGYndoFsnn2Sq",
  "key13": "4D5fCEz2ssYdao5s6YHkDJQFpZvPn9SzeF1sUnskod6wB7wcWQcRCFTqWkyqoYH1aH5WYPjKRARrykVNUNh3Yuay",
  "key14": "3J5cJvhULNmddCfXEvRcZZYup3gZxscxZBzYstiBAj9F3dCMhoZkgSBF8ALdxcc5Q1gGjp4zxuF8v7bp5HPcbjMg",
  "key15": "2ApGFjzqTaSnXormYdFnhQhkpTY5grky3pKxcW1ZXJ313AVwvCMPMkJ7T88efH2PKUCBuhzBoARWKdt5Ybqdo625",
  "key16": "3o77fq1kb9dffkEd1TPVRLF4a7gBg5L6atkWSbpPPSgRTJS6UYoUXBHdyb6npumxLpiSb1RuKW4kKn4KMXqFJPKx",
  "key17": "4556zFGD1tdDtLQAjsqZMTvMKx5TVgUNMQxuFmHHBwwPSvLXa2rx3VrMCbiUitazdPXt4dEbhXikaj2vMQKzJNVW",
  "key18": "2a1LWiTPBtYNmyroFDenCoEzYiBviFhLb9WwKbLyaPWchGvDN6pfjd855B6s62Z8xKHvo6cZfN3gMbXZDUJubRTw",
  "key19": "5UEAFq7uKcyZV9tadrLT6AQGvScECz9vfS6Zd3feH6bcxbpeHsAu7dsgTyRiexz1gYiRpraLvAeNzbJDp4ewikCe",
  "key20": "5eKraDCXRorvoijvh5ZvPrZA3nzuFw4SKEMghbcAF4Q7pq2zZrywSUyBkgL1sGgk4o2ZGYviqV59T3j47KqqHdrL",
  "key21": "2JukLoKq2c9JszDutVsKoo2CUeRWYThLmP5s4cQngL2fDVH2ik2wGS2kECbUf2BAeHouCRZh1zbNQBM9Ffxqs7Ck",
  "key22": "347XUysDmEhZJJsRLknpqZz8ihNF8WwFEHxWgDMpXJC7JGwXsGP1HhT4kVKLXPeBBwTnzhH2E1oHM5gj2x7AQLYw",
  "key23": "2zpiLCTcm8yNHDhtoDzWXi4o8xar4cDN9KxAzqNfuA4jZF3VutvVPmqbDVMD1Fiakq9AN7XgU8Hu58Az2WH3GGX",
  "key24": "5jaNF7okXnom6JqFf4UKYdw1ciWmzi8VvjXhHti3TR51o3GAPeQn2rXejx4beTyMrd2t2zKFuyeP5LZ5aNCSCBbb",
  "key25": "64y4GqeUKdnkmNhb4wRis9NYgobfNDypz2uQfj2DyrAd7jswZCXF5WjLVnjcZNv7HAiXb8BYxWaXjpJZjThkCDBX",
  "key26": "65F5G2UwEpBxzcADusy1XwP2PJ7WyEjCTyEgaYXmTM3hQ2LocKrqYCJHp1ZQLhhfcDAo4wgDLiP48Nh7Vzuru1fv",
  "key27": "2d1Jx5GuhAQjMeR3ApZ3ADsUWCVSCntfXWQ8zBZ3HsQfEkGJ5ZfxR96mAF3sAcpJmXSDSjxZ9G8o5UBFSKBgf4Ya",
  "key28": "NYSbBJZ1EouWGHP2WR8yRBspXA2mCd2dMiyRJVXJPAGSGMed3t8iHj7P9UhELrxPyTzhgCD142omSGDnhMZEXEp",
  "key29": "Q3wsLtkhidMUmFw3yygfej6NqmvWqWdsJJdc4rRLg3giSkGEVx1y8Z4K1gwtnBZqFyKAqHd1yhRT6XDioHNwmTS",
  "key30": "2yCHneseTNzzrsqfjJDN58icvMLM3MYoUsUZWxJXYzVvucvQbmLTa2nJegPEUFT4wxLqhqhafBjCatTc7Rcaab7S",
  "key31": "qx35eQeKudvjHBUcQKDmznGGicmaFAN6EeBntV33DQrz9HHWKr4JcNHdBiuqijvEYkhCYYEKDJ1zeW2qu1mqAgr",
  "key32": "3RGxgjmr9Z1KnKSfZAou2uT1yUQxH4gJEf2g9q6wyHVHM194QP7nF4j9dCcXWCb9zDpt527wBm2kKqxGKVfoLbmH",
  "key33": "522yESDo641JgFi5xbyvF8yZ8Ka6k4wyuXWhxsTM496n3SxZK63TCnBFZjKyYB6Krtz5NkazKZUjNtL7BCsRf2hN",
  "key34": "4WcKd4eZYtesu3RKMFHwzSjMtXzzQho8uc3rzuqMyGPhcTfMUTYVJqjBTCqA5FsYYZWWR7NLPTzGkbkCpmuCUi4j",
  "key35": "a3WyPmGzHh5VXsc4qMS8edfsJv5CTcMDrkUBjRKVJoUiKodrwePXHjtunvebCPXmwwKFtJxkdNYx6Wa832FBQ8n",
  "key36": "zkh59m5GgchUg7UMvsRWn4KvDbCwSPDBZpTy9CRBpEvYhUKcR2cU9ES6wovSdPAAEu2Xic27WiN1GEMwnavtuCn",
  "key37": "DS5QXdGepz3mxvuaBdEEw9RiYHegNiZ5TE1NiAbHUHwW5zmsXeTaMUJq9Bd4cMJreCvngRhNPEiT6Sv6BvCFFjU",
  "key38": "29JbwUsB7aGj87anjh4FhFmrnXQSSSfApM9KsUDQc74uztbUafBWt16wQH7MRwfmjkB8MiJwR9YhSvG2o3ENf52u",
  "key39": "5QZTRNnsDySu1TtX9zKYLNcyXo4bhmFFmURre25giKpiUSuQsR6Qetkki3uaGFMBxMcNFQhiiQPnwrkqdCwKBP1J",
  "key40": "5aX1Zu71VPV6JzJ62GwFJitC1nN9PM89f9CiupgxQsw5JxW67WpZrtiJ3AC7mDJz8zZ4xXRBbWWCE7ifnx8S91Zs"
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
