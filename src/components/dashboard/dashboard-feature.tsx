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
    "4W2AyHuWTGJbLgkv31pzRFcTqCuehkFsVSWDCSeuYpRcqSY57axgMvXrJzKi5Qr6YwBHGeYZe4ZBRenUZuXVSbN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHub9iDRtQy6BGirH29RhiU2UFwAx3nmroAUVxuRV7MwwESE1rNoq6KnuTRZDZd12xTh76uGitYYREUut143tDc",
  "key1": "4m8HQQpg49BWAjaorEgN3kpq8LgD5WsjuHGmYtFTDzwMXJ7MN4fsQN7dzYWAvkxh9FoV3p4rMhEpaTuYk9s4hc5Y",
  "key2": "5e9C356GijbGss5o9Q7QfULGSgVokmwJDF4pMWwfZRXkf5Awp3pFhg4MdwWkScNoZ8uMM7BQXVhNaHysMiPT1KfB",
  "key3": "5HDXA2XRaw4oChEpmo9VacY7PdJdvfVK7jR9mEkr5SdRbj7sGNNy5HRWP7jXL4eDWyhmi1LWxG5hndJpTXShx4gy",
  "key4": "5aLwD3MHtttp9UJoFob46K34Ukuid8RXfB1NBc2LFKcRKQpVDSbVoYnfhPLd35C4XyzSdxqdaPZR657sKqp9A8Sr",
  "key5": "UXQc2Jq4LuSuzz2NtwXgz5PnKqs7F8NiMTLBjL8Mmze1dYoUdZqnMtj8yjW21wHK2VCzW9bw7gjsjUuhUFttrAR",
  "key6": "3Toa28UUUt47W18qs5no5tWFRyYKyrfaxHrRQnZCtzHbmhyvrP4APfFjDp64rFjpFXVKuraKrpVJmmSBt7ExmToM",
  "key7": "41b35PnALmqKxwU6gydpYXz2vLv4zGVDfFK9qkmB2KasvJQFYydxYj8yMKdyEMXqRhGtWi68omUtLh2YXpZtTdUe",
  "key8": "4KgEEBe9iNS3Q3WE99mKaRoFTNkzFRXUHuiaQ5awWFEpv3q5FDSDAEKKyRfNW2TKSnSCRU2xWFzNQ8xmH6QSpn99",
  "key9": "63PKLQwJcdisoaCfNJAXy39P5HXMXCm8sxLcNYU1emRiDRbK5G5ngVQa6jhHicJ1bGTrBbTJAXwcWaGzvKfqkF79",
  "key10": "3ZNTotA99va1YtsGySbgeDTjK4ozMyawsSs4WJcqe1aArxvcAkm64nqUeVX7ghbA4vuEbNXh4AjqiCRu8w3YQ9XV",
  "key11": "3pPk4bmnEHDWnuw25KGZEnKtcsjgXFPwhkkszwBFGjZqQa8gzvxxg9H5GXQCZNQqYoh3DiFsjDjTdhwWA2UyoBmR",
  "key12": "EzHjpbECNMfCwyyktWzcs5CBytmSwYE6CsWWa7kSdhpnpBr4E4kXNbenkQoeNKtNnV9vSvouHzXbkoqWkH6FxmX",
  "key13": "4zd3ZijDSGGEDRZLQkJYTibkgSnR1kxhFxQeLXhrMo6WcAviKvTjDWUMBkQ56ez7Sp6y343sEfFRmwzc5tFiu89f",
  "key14": "WqJtkuKmoW6KC293FLCaoPmDsvWPXmoJVL5Xc2yr5F3DvsWdr9LzJJBXYGjiMWnfvVUnwvPdTpPxmw3397UKzxb",
  "key15": "5bCa2K8QUfuF9Jn26eieBd6u73o4V9bk4kPn7kQwufymK5b9Byj28yFV71peEbzGLmEmoEchkmXwL2muabsDaeAn",
  "key16": "4wZ6vwNKpMgBgUyKAvE9aVw6JYfmxhxGgbDQjv8FiEucD21TxzsDonmnz5Uk5RrDk44AbhyXvHzjZHb8omrXtT3e",
  "key17": "2dEPf8zfwqpShaHndsS3MCmXko7dFxxysGNjKQe4fnQHGi83CGBU2nuJgjLdq6heatRhtfEC53x1Gd5JJVoF749A",
  "key18": "3bJdMhtaSi3suMn9BAMBDzGf6npZDyFR1h19u2U2iZY73AsB9SwwX3W8iemXGtXWP9u5C1MCcStFxcHTMdMhZukm",
  "key19": "5UsiBKkp6kwofqYkXVEYPAMQtuFpdRdGU8hCyB8f5EUPruwfRZCz7RdDt2wuAT6GaiCmGjHecrghhog913QZk6Ms",
  "key20": "jq6ngBVnj3C3Eyd7DaS3MK5CJpENjLgDh33BNA9gFFS4hBfrpYRoj8Xu3DZwiWjGbedvXrwf2CYwGxqgGTQRB9d",
  "key21": "MsRA5uHaUDSvfLHq37P1ZN2n5dSjF3xhfmYHqyzZpEQwDsGckM4DJ9N9aJJam6JFHSeiLDoKRN9jqsSq9j2FitQ",
  "key22": "36Hdrcx9284JyBu2FLkyiz6RQZBDHWsAowm1XauHy7n8V3EdsAGzTp16ujdNWhSTHGycy7GU3CcR4hZ47wjtcx53",
  "key23": "4QVwpaFi1W7sVAbsrMsY2LjAdMjxUL8rRW4Jr3rvCYp9CdhnKf7NtbDkQaCaatHSprx4rMuLsbaFjsv2auRnQnzC",
  "key24": "YFz88NRjQ6XEAZbx9kaLWPjEyBH8LmqRcTD39b8nBRiYTFsZSa4TchTrGrd34exdFpGR4Ktf1b4d768TBeTP5Gz",
  "key25": "5foTXiU8CYK1C9fxaLZZDdUmbVkuxnQiE42ZsLGAYF3XW22QssXQsK7CuKq9Pdg5nYeAntr2mJvSfkMCYqvZUJQm",
  "key26": "2sdoWcJnV7keAHPQ3HufgBBFh2QPFjfgKxKPLsrXTDT2n9Wb7cZni4YoVxnKdPZAEY7iiva44gY1Q97aYDwynH8c",
  "key27": "39VzpmEvwfCJvR2opSiwfKJM4nStMPSuQgFkTMdeCTCUninbFJwaiqymGUsv5k5Kgim2oPXeFoeKG5jia5x4HewZ",
  "key28": "5Ro8Kw5KyahYit1eCk7xdP3gB3vA2VBcqTj3KWQ6z8CNVWq2VZm7pJdMeLCpkkueSqicsWXALZKP7Ekzyh9oKj4u",
  "key29": "5Ar8AxG6aqxXeYTPEFp8FXd6HkmBK6hTb1j6bTTswsMb7G1Axgbm8hjjCimEdRzrb5YGXdyoWMo8njt2JCCX7T4c",
  "key30": "3tPpxnG2JnzhAsHmL7yA2Pmp6hnX1yAYKuYNMKpzwKE5wkvqjQGUse72VDmQfNfgXa9VXv8vBNaj9U1MbrwfZN7p",
  "key31": "3DP3vVUSvHtodJQ8EARWraDJwnTSjtM19KmyGFfkqCnqwwkTGo3SomoGgUmDSp2P92Gz6Qqdmoih2zMSSQ8Lnzsm",
  "key32": "4UwHqpguzXtszdj1qzNdzWcUHRdmKHpKMUtoADaoCt41ejPUpcQY4Q7fpucpLis52cJYueGzi7wEn78JZ1ajv6q2",
  "key33": "3W3Na9bvJNktJxeT3iWcb3rXGmQZzWmDW3DJuy9efyUK8KSDCJETRKomme1qBxDfDYssxWquK2UmaNN2bSxWiyYV",
  "key34": "5rre81QTpnvX5g18dGCXPztrbSu3mN5qPxyDbNGGN7ndmTwnDm1EAkuLK6fUViv9N6YnCESzuaRnVh1zAziHz1SM",
  "key35": "5tvPPcHumhmg6dr32BQFz53GC3poty7dsDUkLj7LppkSxNJMi7P3drD3YXyd74YxnQo5iqhranKBT2hSfZvxTNgi",
  "key36": "KFQ1NnSjBKmEqQdSQgdPyGyzk3LbS9HF92k7BcB26XJ8HHSoqwrre9gYjXRhkyKxgtZ74iYktK7GUtmde2Tjnf2",
  "key37": "N18SWRs4bQnSA9QNwHYojymyHTmNtJuaXtF4Wr479RF3uA7L5jAA6GELib7dpUGBc2bLq8htvg3Vt79ezqK2sxQ",
  "key38": "4Bgccwhc7mb5GAuafJuhcnT9dJhew3aGHTJ28ZPe1AGoezNQQYNfkjZ5YN4faLgmRbhm2nBQPQg3MjEWU7P5JWyE",
  "key39": "aKyK6sNbSo3sL6e3RaDhXcZ4LELorbypmm2TbkqyAGG9Ggt2BC2BeuvU5ugFC3gZJCTa1G5wbzeNDiPNpsCiBdM",
  "key40": "537GaXYp5AxsX9YjdM2HmytyT3dXWhsKNfFiWsRuEed1o2jZwUPTnwFiGzNpMDtdhRNNNHPK6dekt2me5ZsmTgwe",
  "key41": "5r7KAMZuB8gtdxMbiSxrjr97UuKqzJxHGgQK9N7BSoQvsEi8MwQc7iCLVeYyzpiwBsjfgasg9bhGoqZhr2WeEsZn",
  "key42": "3HSArWqt7AcG6wqKZ7gBMjtfBdff7x3gDfYe2p3UscQntRzuiS5RAdaYbJrDYsYAyDNoNAWVy4ThmGA6pry5AU4W",
  "key43": "4NV7WkZ9uzZ5jGrqDAVoAJpmtz63mToQQ2KM3WqkxwZzrB6QWfr8coSjreuAP3zpaD1hb5dY6k8cKX3rkoGCRnkz",
  "key44": "4RvckRrf6dYZvxaNPXJJgYGSeGsXDEiPndaw7acXMG7REuNsgRGJiBFKEjMiLG86caPnGQ5LAKvy7KMNX6AiU6Zm",
  "key45": "2N6FnkdAujXHaC9XdRzECajesHjfe5XBEBy5DCTPrvBonTVUKgVuqqfZVcNRL2t5q9uyh6WmCbbBEfVWFc8hAjZf",
  "key46": "2HQ5uHqZEe4UqZMYXWVcRydMt5fm3xgQQxnAiSjaABSEiLeJrBEZfkFX6hmRtjspJHhDzYfRYU51K4QadCSpBx53",
  "key47": "2EYBZkxygmKCSJRkhFrENdBtJSuwSLZoc4eCA1FqiMtPtGt6dqi9C2sfM3AxacvMGAhmdFmhoQZPbFfam6ppTjz7",
  "key48": "4mBvBTxDn2YyDrLHeb7aTFgwz6pPFUzBeyV5qpUVZTwH34GGqGfAcft9EqRaTMqBucE912ABSckrha6whjGZpfuf"
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
