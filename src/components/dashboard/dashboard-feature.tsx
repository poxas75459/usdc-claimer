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
    "2tx7vH1azzzGG4LDES8ti2YGLH3Mr9RKNhHCRD3qnBgPrq8vcb8TZQfsxHDKrHG2MDjHCu9i1x1XwpmMuFfA7HVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZUUHXj96YiB7pwmubZdAf3wie1FbuNoq7ibd7NbkwJDDUaRVv4Rdr6QCQN6H9yKAeQ2QNoG6Srnd7Zk5etYomV",
  "key1": "3mmmUomUx7VkDbU9HSvLV4mHqpagPvCQVsxhS6ZVTSXBXBqQxY1ovh6aCXbi7G1aPeDvwEPzsfwCfwk88r5yGKYY",
  "key2": "3FwnLcPb5xsKkqHXNRJ5FSDmv86fUcgC7v6yhqxCcZ5sWcgNcN1iwbEa7KZezZaWzdaUpagKCZXjwoXXL3ptRPee",
  "key3": "9pgbFs15pP6L2NR8MdV5qp5GpaYCgF8cbUoMdn7GtSQeAspZ42dqySgrE5qiCUVAPzTjBfgqAgE79uKTSGrfLkN",
  "key4": "5XE6RZZ6ySFADK73DqLCNYPwaNL8HQ5nVQc6yxE5xpXxMs9uCJDXqtq7mWEKeN71MxseJAaEKRkeHZG2qGysRd25",
  "key5": "2PGR4HLvf85rsMMHPYhrBdN7Rq1rqYD1vLzXbXEircuxrJTs3G1yX3pqL4VmbUJLksBdMCvdV8MKhkRy6aGcHJQf",
  "key6": "4i4AxFb42godqzeoVFQWaWLiin9q47cZBqVvxwKaBaiY685EoFD5PLBVYqerbEcgHk1jvTQdFrdssE1nVMc2E3Jb",
  "key7": "62DRZBNHd8jJHXGoAehGLC8Fv1D1CX7peiZqmdX3Efq3AsY5pz9bKogqUb9BsF4NeqRDyuY4veUsJdoaj4MAiaN",
  "key8": "3WhcKyowNzoymCtLMsno2xyPAv48GG3FXr3MpoFBxmLqVXBd8TxW2BxHJsCLQwcMQTpbgMNrcnAAoxonvnBxb3YD",
  "key9": "2uXjdU2afACRohpWdXmxhMEF4YFtipNk2vecjNK3n2mr66nus3HCafEndfe3aitLE9GQCkSoPxGbbSz15zn1AT5f",
  "key10": "2JbiLrsH9WdYQftpSruwhTAw7DvkQd1dUXCtYJQDBPips7kPG1aLJZsjdttDSWZifjksxH9aqemgkRAT1H8WANGS",
  "key11": "2Ncg8wuQM7wMoXgy9md6qFgQYg6JV9yp1HTFVLw4UcSX8Xb8FP4vUfYGSuh4u4cA8gS6nKKdbChrSvt2iGcJkrav",
  "key12": "3c38WqvSDCMgL1V8cCdgwg18VvAqR1uHprJZMv1zQCoRKezxJk1b1vrrK9N1WkiVgAhE42xs6vzcJ1wiCAk1awUZ",
  "key13": "5o5n5rz5UF38GhCCCdWAG1Vdsk48fAcb5Rtx5PX9pgJ4dmpbnFipwVVHxshziAou5gZvzc7WpWHb1XiFX8q9S5iG",
  "key14": "SLUr1eadzF4cixEHD1m9Mf5i3yTCrHWCvV6TunfsGgpAYoSPYiY6AtaDyyXoHXcoWgraAd7By8FHtQGvXda4Wst",
  "key15": "5p28mAuEcXKPy43Qn3fb8g2SndfvLrSSTyWbnhhPFUU2qBWE9EQHr3JCQcDTd9fGedyBfFaiRmFv8UEbj2y1nz54",
  "key16": "4sBvvmjs9utcsuyTQFzyFUMhs7475YQoPhaMEuTNcTuZgt4gtW3wo3wS1yhwdpt4oj4m3sqm7gFbyAVKb15HZjdv",
  "key17": "wygNhRtx6aZmxZVW8785pYwnF7JNqp7nNr6UB57gikH9pHRof15Ah2NASXAbatBdGmXkn2o3iDEHp7F5zWXuBv3",
  "key18": "4RCcx1Syg917ZWxLXzgL5jE26o8fqBSug8PEKWhAEjYMK9ebHcDixBTxef5Qo44spND8xfkBY18kSzqvDVuJsAe3",
  "key19": "21qiXmropjMcjpXuh1hUsNS91YVqtYUWu2amPqD8RGmutfrmKwk6Vsfi74sQ4QURPAvWiAF2n8QcToNSC8VMaGbL",
  "key20": "44sw4qFcn8XsxU6KJbv5hCb7Uw8EK58tTdezzPh3zmgxM3H9fTHCTVEBz6aS4TsMCG64BVuX8qdG3pQPHTpohySY",
  "key21": "5n7GKWumMHn4wn2DVfo1Bq4jgocqtTs2ECQJAs2EgYUFQ5RaCb7UZtSAhuxo3x6HgxUeWrdffUt8vLPQyzSApZ1b",
  "key22": "2uPr5EKTNrzqF8Kn9J3ihhUPdSiuunHeA7Lp67QZbu4pz4icFw4vC25rHCDwcDvemuaQmDwPk5iGcTPvFgNmiwPs",
  "key23": "4GagvQHoTbwk3Mt6dLMJmjfVapNXQzAGmTJAMLVwj7hemCcdQjBULNWPPdUb6X5RXLPo5e4CjCwXTpsS1VqVKKj7",
  "key24": "4KxKTFVBtWhgXE2AgfLhcan6gRE7aDMA2NxiSxNEoG4vx7QrsiWrLFECoBwgyGjRHVHZj11i5QJKTNEYVPQqSeug",
  "key25": "3RyZiWvUL4pv3CBYLfjiD6tr5d4rSKjCFvTKHVvCpvrqNxkyBpUf5GCv5aPC4JgokfC7r49LWnwtF4iTA6ivHibd"
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
