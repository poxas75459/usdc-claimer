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
    "2S6JgYCLeGrP9w6367j2w67SejFowwngJdEU7P8Loy5gsyP3Ef4i3ZzocvWHcUFsjxe79YV7tZMH1jvxuEPFpuuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJWco4cNwUafK6FB2ZQvPby11aEAwGRWZhEqnyWSq6wY4hVw8f3smgknP1vGR94P7xwK1b5UkaHjdmxFS2srCg2",
  "key1": "icVy8iD2LhismNYxatuu8LhgNrfJqPkMThaHc1DxsjX1FjWNZKPsmBAJgyEiTYijZRUZP7kgWJFS8C7WuGWJuAe",
  "key2": "3E83manra7tQDh23yM5abu8dVdMWZzperjLGcmdPQa5REPrahokZAnPWSUnEUAWuMcsKnnPy85szBD7cbNv4SLLZ",
  "key3": "4MGXzn3qToyjidaag172DGHXFVaRXRAhWc19BYBagc4oQkYcwYAMMesSJtaVa9obU9DWkMhTi5JKuK2ZiovrQ5e",
  "key4": "BzduWS8KTA2FYRoAdwxEYK7qjLHLL1U9XvB97N2y9is6e5gyDkpzWMMJ9E2GLqEdR3xdpcUp5kNHqeBpkoPUb1v",
  "key5": "ihJ5ob4hSENUBAGWinqP6LWTme1xMbug4GDUhzs9xsxh5SGbbKzJigfbx4KXy53tKwAzZjE8WrWyYYP6etm4Cxt",
  "key6": "2ATjXaUq2RiTEF1SAMmbkoRCvrepY8p6sxZjH9y3XksTm72mAv3w8JTxqWu5Vf1QiuannkpRWHCfZZYSNnycmdm9",
  "key7": "5DRxrZqGbhXG44CnyjDYFxSzAqzNzbqc1r7MhiNstS3jMzHBgNBHCFpRMBXRTydHj13CWEfgaAY73wR9G6EyjkbB",
  "key8": "2fiwjDqmMGiWxNuJHcHUMhH7NuiR944JjTkse7RtTzZVyYKqVDZ3gkYLHtLnVyd4dGsni27bfHmuLvzRdYQykcST",
  "key9": "456k4Dbb17TcYQufd42o9fufkKcRW1ceXggzd6uN83xbyuJ7wJcYnxWUodt71Z8jnYDjkXkzL3Z1MCPA84YySCUW",
  "key10": "4F3KpVPUoFdFxdE4mDsP4SVreAFWT19z3X1eS5EdQSfTi2SngcvftrA8zBqid9jbpG3oL86gKuaU8xvCebNhWSRi",
  "key11": "oioLeHdcacE1Z4dPr5FTjFNLymcvhMbpaEmB7E7gWqXvgtrii3tytU8gtyEymJ6XPeDSb4J1Df83n1dhSKPHY9L",
  "key12": "66JnaNXiscPpJoHqh4My7yGWxXmytSQ9SfPXFcDEHASeHhVRxes9QajSGS3AWuFPebmep345vtXdyvMM21hyVpd1",
  "key13": "3u8q1uAkuztN9kj8mVF47vkiDf5PX3xiL3urnUkFX8qADKB3g11usxqdhTbDFKKBxLBLC3FDYU1gcy5ngbjG8VZN",
  "key14": "2hCA2FSJbvYJ8V1qydVG58tpxgLa7ZCnzwADue5VGhAewbq6myM6BLdSWiNs7ijrddu7cPUHZwSP69xKzKYB1M2i",
  "key15": "2smJQTAQDDPtwz7crapJ6UjunMEme4eUjZ7Rq2s9qhxS4wcRt4J51xbpePZax2LEy4yzKHXEhXzYryTvrSts542a",
  "key16": "dYgx297q9yQqCohksedmFJ65UQGBCax1bxrDrtDm1c2NCQnfhVYSLahkA9voZsBDD4ggna5xnpqUsxf5giJrpRK",
  "key17": "5K7zcHmi2WZuqHJ92EHDS778KDsEpCaRFvbb26xyhLc9E8kon39ZP7n1FYA2ZGBLR7gawGiFNhGPniwueCYMH4no",
  "key18": "4RHEaGDUFxZfe9uSp1g8b2uhFPMB3k3gJVBE575Zx42eouyMU3Y369iopJEFD4r5LEDGLAfdyzFzanqTh9Y45n2f",
  "key19": "3hnwZbXE6DfBgj5YmJMxLRPktxgxFR62a2wzqk7pnLhKPzaA8edpcHw1JmAFktZR72ouY783Yc9gPtaDfpXZ8UoV",
  "key20": "SQgzorw4A5s9HRy8NNhe5QyCdtQGH87LhtvrTUBHZq1LyXaowV8yw8wHAaAoo1ujGWp7qmr5XHN6EdXxosTvnWx",
  "key21": "43XJ5aXkXqdKeqtTdNpuqzkZVxy8ZEGV1sdEaT4pTnNBiCNX4rCvd2xhsnigTeXZniSDUjh1wsinApdXXifxkBT",
  "key22": "2DG3dxBamvTfBfP1G6B74ueHi4ughmJmtdr7ZQK6mDxfh3fNS9GUbvGtbfKLEk9m1eFe99SdqrNcE9AKHLcjurWh",
  "key23": "w7MRr9WaqpsZ9aeCM55v7rN4Ar3N72V4AVESdZtakkQxG8ManZ66ACVNAFsiqHdLTGWXdLgrnjUPrXSuGAd4VyW",
  "key24": "5SaQcg8UudxZ1iu632mvYWPf9sy3EghAMcYYQf8uMSfAbBtP1gsACZATAJ3At1hgmRo7XBHVxcTt2pkxBBUEa6oD",
  "key25": "u4s38BiASdK9kErvR62uDbJkJuYxgLMduucVFnGt32T8MMD9tXgkX98AU432pcF8zc9w1EUZGocXVUSJarbyXFf",
  "key26": "5t1EMo9AYY1s8VUwABYoMNxTpqVyKKMznxAh439NV7DMKt1wbUj4NUNWAorNV86fk9vw1xNt4B4Fzo1Ms2PXDoDx",
  "key27": "5V1pkLWoxG4iMVpQ1CRVVe5mBuAGZGbt5p11JHtdAJQWtCx4gUJmNAZ9ZHXx2wi74HfxR1vcQYAyDkmPZFUmVgAy",
  "key28": "4pFHUJbKjfJVuG1v1tMdURhp9sG8yK9ttJJ44N1NeuUjVu6ATxfu2nPac72RBvuMaWDPoDs8RPngDHkda2bw2qTf",
  "key29": "3NCxwZcZttkLhHZiX1MEQNXCWGCZ2xtDNFtqaGa97dXnwM48y3f6FbaSEn7cVgA9ye3XPry5jXwoLYukghsjjR66",
  "key30": "3X7MVAap1HizU6QMjaRETNFSxa1PMBhVw7a1n35KYR214MduSTx93EvzNebryzHTWiwETodaZ31CVTpWFPSsEumn",
  "key31": "4tSnGcrz4G8jGyanuJwS2YbYA4FYYit4SADZ3zxotm6rnLaFgqsdbSZ4JiXg8KfZgwMMTUmRfFd48WHV3399DHo7",
  "key32": "Bv9Nk2etR2eGaR4zof3cXFbNT3HQvXdFp13V96oWouhVs9i6AeTpnedouBGeJE43pqh63diEGAjUpDwrn4y1pX8",
  "key33": "2jnSgap2U56rogfyd42yXCUQjvdgZw5Mu7QBEPwp4tTiMgpobmUZfbxjH5n9aNx16WBRzHkVQ6XGnEZVxHs2te5e",
  "key34": "41oRE8RMdKsHCqx5asJJ3YAeEov7dgPgREAF9wh6hhBuRwqRPLwRkvnuno5HPf5CFhoQzhkyqwWdPAbwprqJHHiQ",
  "key35": "56oMrXCm5E6ua1KXzyKzpEvQ7qTbCVuXg9PALaASkbcYRtgk76UFhUt9S2Bimy1wqiNiegghuLvbRSTQC18zSC3z",
  "key36": "2XW6Mz9NPeRXnRX1PPHNXHpykV4xxL1Nm9T7FHWsGqMZGtQhF6HmGmgvCQCCthftudCjBUvDnqRvNDEdDPa1TYnV",
  "key37": "2CDQ2YHCUSrfbN89wb5c8yChRXEvMnVC5uyWgNrZ8mGriTgu7ey2tFG3yY2dZWLAgW2g9UCyiUo2rDfnpLRwG4Um",
  "key38": "VDYc5n56VgayYDbfmtG79cVvDzTHQXA5hECUTvRTWLjXBqChTb5spNSuNUaRCpAjwxLKnn72w9XaJtSMBJAbHiy",
  "key39": "3wNZRFW57yUM3eessiQzyyxooNpHAVTzWaqzJ4uJrzYGZK9yGQFW6bSE5cnRjJd4jxBfhmec4VU7LWytHaFVzz3U"
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
