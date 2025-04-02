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
    "2W19iWY3KAErMUdHSXyFwkueDzH4dMopZDDa2pjxUbTHhbBjyHQprzh3U9eVMc7qzAyqHjuqq8oRLa7ZEgX8iUj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwDANjM4HjL4GjRm6g5doP17Lfgy31DM5fGcQCB5VvB5mMaqtT8WaZ1FK56P3pR65EqEexvJAjpiBsQQ5ntbdC7",
  "key1": "a1EsmckPZvfJ9xJhTvQeVMirRS3nfVu562ZZ3i16vNdqHQtGi8rBQXPdcsVsBsh7LsckQbYRfgVY9qddmA8EsWs",
  "key2": "2Czcxi9VhD5geY2FPpgXW5GfSLAGaBezYLrBNdLzABWQ4wLHxAKyZAJuoU9te2dsdJrzNuPvkWmY8w5wxdBvRRPn",
  "key3": "5XxTvLXQtAPFPuBzcnV6KLx9R2MCs2hZRrRv5UgsGKggq6Ad1PMtcFTJD4Cz1vprBhJJFuV5m4m596fea2RB8o6Z",
  "key4": "3WMo6Q22Um86fbt9ps8PrTJhcXBnUSfSpL5ejKrBidf3mdyDPdWD2teeUpodFhPCTaKcApcjKQhoYoWtVTbFxtKr",
  "key5": "4kZNPqD6qw2vms5fjwF7r2KyVfVRhbZbbR7KGYYY8tPkFDrs8KKe8LApSUTCh5Xt7JjW3WZNhq4PnVv1pF1L81pF",
  "key6": "3qbt7ZgJgGFZoGNDeXC5eMNBFAtbV5dS4T8BYincQRsUDAgM1n7K4B7bwLYDivPE8ogGTtfEHXWttxLFdAh5adVy",
  "key7": "2M6fhg71Dqb3Z5jnHyHDes9pWQxNz6U3EvJRsQAnnHtMNdS7EU4aXTaC6CYuPUHqUvQsz9Nva1bGnVAhkf1eKA1p",
  "key8": "79F2tUGArW29bzX5NWZ2wA1wmpPApjDUonWrFPTQpiJ1PkhN6gy7FtAGg1V6f7mRbYj9c2HcjuBVD8R2jbuh9Pg",
  "key9": "4cHLNdetMDYvjGtjqAEWrtLqFa5R4mRxqa4WVL6Wa1nzGu5RCx3QTVp6PPrMiyAhRQWpKR5KyRTUh8LzBTLYArHq",
  "key10": "4ykQgGQmjsUorXNt5nfPQKNNPdub5YeVvsrP5mqoNGQuxGiVByJSascXs4aGYJEMAWxKUoze45dwC6MVP9PUgNo5",
  "key11": "4rfgkeKZQYuYxFue9xEHomo3znXiVpst24DJ2HSV8TaNTAY8CNLK3WzHGuYsWPkg7aoaVAbHBMgkGzDNCoPV4iiG",
  "key12": "64Bm83CZEozjvUWgb9vMEEAZ5ZqjuCtyTQnjPdD6176xLKpJN6gCWLUr2efp85K9UoMw1mdtKtLougF13ULb6E5K",
  "key13": "63Aq2zxb2NLHWRp1qCwPNFWgHNzwxxKChAGkqP761F9HRvqrKY3tJR4zFs8wrQXmufVXu6X8MQoccUTWFdUSLbi4",
  "key14": "2jZ4wsodp5AtR5VhjvTuuVeR5RM785J481i6X5KbpASqmELyWXFWm56WikXEoe7LRJrQ4CjXYtAziWM78tLSN8ND",
  "key15": "Uic4apkyUvnnuzryDUVqWpAGWtnK5egxTnHhjC1ux6BV3wVK6uQrB92k3KakPf9DLqZFF4KQcapzoKrsJL1CFZX",
  "key16": "3f8MEPEADEfkhRoDi4eQcZeVTCtKyiyEgVShZTscJ3z35ASpfzPdu1vBsjYqTt3eGiVWAnv4NRQi6WCdbyhB2EfE",
  "key17": "qPRNLFedK7U5g3P8aYZWLgwXXwKpfVtLspyTSPY74wXmabTg32BGtswE9CBaxiT5Nasxf2jjL6YQoqFqZBzYtD2",
  "key18": "J4mweyFNFVufpi5PisyZ2tNWxFmXNphgmDo8mVNk2d546EDd4BCegocFNMsMjYJfTdEgRz88ihcWFf3zxz8Ygf4",
  "key19": "3ekF8cpC7dVqyzKkmRJgtZbTZ8bLE6cVxby13UbsgMnwXVMs1jH8k8xZREZqq2WxBwYi8UnbASz51LqMVAz2eATC",
  "key20": "31rJ8Rum2TMKvHqF9RHxqtsM3ADvfg1HVw4n9bZFEzibv7d6U7ucvRsrBFDKkWcLznp6v618s5NkD9jY8S8pa7C8",
  "key21": "3dg7c4UufZLAh1ikU3hrJvzN3DK2kWD7Ciomdd1PZmQgDZToVBT5Cz6GqepDyZpKWNtpE1ijkQbHi7JS2Hj21CLz",
  "key22": "2xDyMyNBBJWVvackoSmbStJyEajZH5p7xk3TDqCeaSJDmx4UocnPS9p61piq8z27uiXC8JCHHWVa9o9umYcyDWcJ",
  "key23": "2TgXm2nf4t47DkcYDex1zXz5wpmMMmRAAYCwrWTpgPzZpuyJhk2BroSSWjV7QcPsUHpahsVMF13tMT74FNMj3zVG",
  "key24": "2uKUgrTeuaMN6X7bwucRRByMN4kUfqhGjvHsbSSHd9bpQjEYjPCvnBKci3jLLSREaa8UWtiMXnyu3vmTyD75ZVk7",
  "key25": "2GEvr1rUgL4fsHKjizSjcREcV5UKhjAuow8swMKiqcMDRCBTiyTi6md9EFaeU5ia3B7a26v5j3z5XBk93hqfJogU",
  "key26": "35zrN8iMkZrwY33qyf7GgqYNd92YEzm6tBE2E4NtCH7szMTRdM3ccuZ8Seoy2jHu9pkReci8uhAQ7FcAce2j4XwU",
  "key27": "4TKMzWHGWEo3vdp4NTW2q9z1uTZd68uDjQGGbVfd2XT8rrEspzCuNytUTk2ZP9jo2UCVx5qQ5YWL6YszUNtzoTEE",
  "key28": "2zdS4sSxofQRGSh9k9BBqjFy9oYKZFPbJXY35BZwTkPb6frwd2Gk7f99fU7Kbr6JNJLw5Sd9SKVNsSpBmgHfMmnb",
  "key29": "4VGecXdDoQ1fRkrLNx6grnMwnEZbWMLxzpgGraBPL9XjFgUgPUWfSAFQViRqbqYt9iGMwb4PCWn1jEHJA7Ne9ACe",
  "key30": "5HRFaGtT7tbhme4wXhgkTeD2B3xTusp8RqWZqDN2uDLY9FmYyWKYr85wiSw9TjoUX5MaaspyKMSf5Apkd7YNeHKe",
  "key31": "5YWtKXvPMubereJdFstBBcRcmsMnu5nHKSUxAYNV7adeUuBh8kme8VhQF4GxmTcehm9jYMVi3eLqnd67eWAybsJF",
  "key32": "tmBuUvRmpqwXsaprzaeP9fyueg8R6i9bsjkMqsWRt1NBmpDer5zYKR1haEeBgXeLSB2BNMSMvz256v4hdPMUZZv",
  "key33": "2DtVmy8fw1DoAWnaMkPd7dtvdyw6dMGV4zGUhbzMLQBqgJKBoV6WnyXFj97bfw7JMt6LRX5ocjLADkasnaok6qj",
  "key34": "32gZbcGG5ftoH2eAjtCUs8sSCxTKDMeH4k4MdV5ZGhv5WpjMgB51UCYpUx7GbVLtZRhh8Qj6Jwa2LzfSFmeKvQbZ",
  "key35": "32Pp7fTW4ptnFrqvk2EK7cBgSfBiP8sxkige1nCmhAyXTwsVBzf2VBuweHVWHEGeve5mFadCiJ9Po1zReUYVziHe",
  "key36": "3bEASsqYkTjSETewVXKqVV4R2xBuNMH6kEZA7zRnJKB9kqXvr7pAJwo2a7HyXvzSdctxmrMKHikkmzEEk9ud3UDY",
  "key37": "JXosrBgsVv2xQuBkdHYqxxfxb3ARMMHbbLRPLUB8bWLVwMaCyS2KZxjRCsTC2uk9FH2TfwXRmtT3YE2kQrqVnNz",
  "key38": "5Xb5JnqJ4bhaxb6pAbBdyLeYDRbQogKsHFJrrNCGE8ccpBbxFuPAVJr73C8MCjmYyQHjscfmyzRyyqaSvVhPDotA",
  "key39": "672BFZA62GZuvGNdf5qp1umGZ5pkozw6TQHmTQ8SnpSLB89AEaQM61BemktJtvd9DjVbL8StWTVePZ7kuxDVhMJu",
  "key40": "26uC63Yxor2XN5fTZg7u3u1uudfhvxXULrUW62snhjVMYZTdmBU72bwA28HRWkWhSEXpSWa8WjefCe2Zk9itZzQN",
  "key41": "3NA1qs1TthRxsa2gzMANF6aHDhhhADU5JN3LSCeWhumPpWtsGAKEhuFi6APv9juZXz8T4a94nV3L4Jqm3xYzspXc",
  "key42": "3XT3ezzpNPN1h1hv19n82t4hsFWgStD5xb6CvBm8GRDJWkE7JvrXPucbvyF2e8KHTmCpG152MTbcefRWfL9fkuLU",
  "key43": "4P1Z4GN1H1fphTpmisuJJxjZNhEvE2R1Je6w36T6E1Rcatxdc5UA98sPgPedQ3Jnm3BDrFAwmvUgZEUtEKYCvVQb",
  "key44": "3SkijLLACuSYzUhLeSokkGsJDwGUU8miCdkwHiuWC1wpuupsFhFtAVLY2WCAkQcv2uCK5e6NggxwrythSfvbuLhr",
  "key45": "EDiD49ZzczpfE5Xfut2AhSrTZpu9u3edo53BVPwmroQuerAtrFesNdxGC3iSZSNWbaML5QAszxf9sXwKfb399bY",
  "key46": "5M4GLMvw8eLcrY65pYzv5w3epMctR8iK5kK2ErpapueTxZ6ymSTyJtCfVPzNmtgMRkBmd5B4SSgEeh1ghjuAkuCm"
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
