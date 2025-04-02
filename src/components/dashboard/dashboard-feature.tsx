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
    "3kTNW231M6DmXyLsLoCRgJME515XZ3WtNR5sXJyPehHt39AhSmHghD5jiiuHa4AXbzv6CpNBb8F69ZMi9iQHxeeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65hh6KrPgvCkNTrPbhbtNBhnjrP1gDYj6TA5ypG95CHe4GYtQcn7L9XU5pn3t2RyAWJF9YaHYv3n5StQWN612Ej6",
  "key1": "2PZdVFFXGL5L5eHbj1tEsXaQJqR9T174r8RvDPVGc1QE5Sn2V5qZR4FVqjobY5sPGWUmqvW4hzYyVZpq4zj6DEfN",
  "key2": "41xfijaXgkF1BBNo9zme8wxAdE8fLEZYZ4PdHmgXA1vGaD8DtkFFoRR9CoEfvCTNhLpxi213wqvKtyxZfchLQyqC",
  "key3": "51dfQS81Ca8WhcsanBpqv5SADoRrSfBTPDbL64xSpghsRw2oozhg1Nj4Z3vTSst1ht5Jixmk9bQvyTDwTzqq8v4j",
  "key4": "2cgJi5d38qaTS23ZRE8igDcGQNFzXvVtnTiqVszoVyTsAYLeJy2hTEtC9p28t56ajFKUqigCN9xi2pwcpKU17e6J",
  "key5": "21FgJKnAPRffsqwEmgALP5VFJKFmck3CCYTwzcHjMcExRWHWxUuRMLnhM3nMjeVdjFSSzt3ECuKJkVpRB7yEB8Kw",
  "key6": "n8vnJ4iemwsk1RxErVe3prWbwpcKx9iPSLxdSSGof6TwjSp6u3YVHpctHzZMhkptZ1HUbhMLoALJJzfXqxqYfbZ",
  "key7": "3Cqufsgj6vMZFbEz3qnxd1rBTucUxJpQ5pvxLYT6KRDVwjUnXqxaCpf1HrqBwuA6Ea3FFRAKyJvx8c7jXZJbPVuC",
  "key8": "2fKAAPy8BMqLsEbm1mUG7MmbZuxKM8ajZ5v79RzRu7xxJwQNT1cDmg2qH2tU8Dd7sgt1aY5L2MxR5ahWA1fyyWKh",
  "key9": "4bANrsZ5qd23eCjhssNQ7cxySV9CfNqDqd92fGRQLRuQj2YxFsjASu97oHwn93yh5SbvobMJL3QegmdoytNyFR9t",
  "key10": "3Y9MUFMPrEh5E4QqAmEQpYzXzbsC4pe44KDnLr3eBuYWRzUpSnjnNKFYfMUu4KvcrJg45D9EbFX3LhNkAA7RDdF3",
  "key11": "5qSjE6Fp1LzJJP1PBhwWenDvb2A9hcfbwTvXEnn3JbVQF1nzmEp2ctiZJmZC7uuuBYx3uAb7h5X5AZdLTb6et3qf",
  "key12": "XatKPgKHz4HVTDoXbk1qt4zsThEh68Nky7hPh6dK5QB6SUzCKmfD1p6w8kn8KBvXjx21ykwXo3hPknZXix2HZHu",
  "key13": "3PwtTnXJDHytUKwrkiFXMucTneZpc6CihZHTxQqCPTT5Lmvne6GRYPKFDYy8xM1n2Rxz243LiQuQHEJGjvtHghcR",
  "key14": "2QgfwEwufQjV5EUcXyQmyfCV98QCA1sb7m7AusWnReDySaAkjcxwdwXp8By6RwZZSzSfBSsGrjcJN8KVsekaQV8W",
  "key15": "26DbPDJHjfxppxuFsb5JerEAnnbMGa3HbojBwSrjykuvkYftCS7po38asn7Dferq9V586PixxGvh4WSzd1tsZEMD",
  "key16": "5ZMKv82xcEwJuodbwASKBSa2cENAMJsVsE1jkgQbbXvCPt1CNXVWx1J8XXJ9ZaSY5rYoMVBZ45wnKh6jnXeELxRs",
  "key17": "a8arxXpgdgTb6ycBkmC7mYAuYN97wcmsvSFKXC8PDCdzcvyn3XSmjJdnzmJxXzxk3KsmXMpGQMuhpJXGpxEMbvL",
  "key18": "3mLoRQqrPCcQ1y9nBxm9iLJHzBNU8PFCkq27meHq5HELkQaYmPKxSGacfEse4soun5ohXnaFWU148hUb6g3WbNCS",
  "key19": "2CDfBiGGRWtW9kVyVTeLQUpZCznVKWKRPYPCtBYZ6RwY9r3g2wXA2Vz723PbacAW45nXKRtuaFVAHFq8DorXD8FP",
  "key20": "3hgFpv2z5kHWsNhZumwvr57XRUo6nqGPoXTjrvJrKRtK9cUEw3yrJSSUbvPKXvZykjwqp8z6fDjhnKpkwss8i39G",
  "key21": "319RptNwKRaX4MNroCLZgJmCeaAPNnCGqcxzs9an8CNXTXubd2kqvm3NFZvhN69bU8FzaYukaq4dFnrnuVTD2cxf",
  "key22": "3Ho1rkHhAAHjQdTAUy2TkmbZgvbGPuWn57Zh8AL63T19Cv1HfLBMLSJQvtnkhE6UzZsUBrwEuJqiKHLu8Cu2KxVH",
  "key23": "JjisSs5Vo4unPWFjiqsNerYYfNJdTAgrMMANRC1SXq9krU9rpFhh3ok9QkiXqueBaEYgP6NPSrTL1xapVungB18",
  "key24": "4hKPgBYLyvBE7Vscg3u4Y9hZ1GLGstapFLUgLYxEwv6EqmkVgTirkkMXPJ1SPX4FBQi5otyH7765xDezpai6BFB7",
  "key25": "2dAJGm4UvHScSXYxJrqsh7Dzqpa9xAYd831iCaWCibG7KpTzaU8fkVNzS2ipX55wXv1Epo42VUgBiseyYBYfdLJM",
  "key26": "47zC5TLhKY5u76oXnWGPxX9FQhNgJPqEPPYxEFKeRpsdQ6tLCEeS2xN4T5Vw3YNgnDSnt9bebKR5Qz1sF73rzDKZ",
  "key27": "3FEius9T7MjFMoyxjPecpG2vzETyvPHt4bAQpNeLepLmvDapgvCyUyPFj8HDX5yvuG4U73ZTNg5rRn9UvNpXJ2X3",
  "key28": "5T2dfRszNKDb3gyEVneuqWy1mErEHFyDXi3P1iu9bYqQCfVag7JqM9upcdnrUSVmsQMxtXtWEw5gmjcEwyJC7APP",
  "key29": "2B8CVx4egRvE76tnB3N7yP6MGE9rhN8vEahLuQy5TRHNDroYSvKY3TFyvQyiixg9stysrjjC493gK6c7N5fxKbYM",
  "key30": "4risVVaoMs9MtuH9Zfz6EMtD5ZqMeV7pBpTHKMLoA32v2UqJVp9i1gYqYu4vFUydbEiCmRk8Auf28xMV19kW9HTJ",
  "key31": "3adG2mSSae9cn91ov9sDLJDBdjYQvE91bkixE9ZQKn3RyxZb9y6T6rBwzgPnFP7eacJvCHNXjQafKtvNthYc2C1B",
  "key32": "374GHyMcHbyNMCJMrc39GaFAwZC424JpFYPP8q4E97wz5mYfERcSvPsoVV8JvDotp2G2zzcCfmZTyuuQxaCHvhGR",
  "key33": "21XN7FdWX6tXTsQs63FCLqmJhV9wUbL6LFCfRP6hSo9HQds3H6htuyB9Btb4EEZx17FdZTpxdy44wsp9ap2JneuU",
  "key34": "2aCGvAmgxVpdLbXUitaLXdnEBHivFgjURBa65KoNrVxEWB8bKsUbdoZohi7uiTmJDouFRAvpBR7HCoUtrM8i5rYE"
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
