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
    "5VxuP6WtXYmtCjABLKKM2v9yH5BtRtqeP17xqqqTiD6gVT7M8Cg3TLFNMYCpbgzgQis2oCeAyo3yoKPt16xf7igq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZr985PqNRqX8Y1tNgZwzWxDHKiB8At3sXt2sSo74VmnDsRsEFyVAEDuqpc4bXPqNZ1ib5xp1t4uyTkvdDTcaR7",
  "key1": "2Knd9wyfJSSNUGbHiNj9k5BxFadDAAvugzGck5Dv5U1C2Qvf8GB9T9TE5rdHcjC9U6WegeztTUVqBeGQ1RPRUBkk",
  "key2": "5FnmRU1GzZ4mFBeBqCPNqiz9RYiH14oY7623paia1WyXwaFUzKwpReHLjxfrLjLDxxRVqfPvfkP9G8yFFCQza719",
  "key3": "4yDoFtPma3thgs1SVqPdg92PRLsaopzoSJqDgoqzMe8DFTrqs3bdeK42yWGHRtKto4MdG8ggEjos9RWjudGcypE3",
  "key4": "5AcpEQV86G8exqC8aUA5DW63NXKfkeJJ1A79m14CGBpf9CsDpUN7JWATuQenFtcnZ9U43LmJuWi9dANcpkWbwnhj",
  "key5": "5zK9CFwGefhqb11NnVqJEAfKrS8Zd2fpTjzcS2Rk7o7j7MdNd35vg3Xbsz5QC6zyLnrajbWwJcP2ZoUWRpC6xDKb",
  "key6": "SmpGYaceKpWS8k9oHr8R2eXvv2w2bhcSCbkFByzxX9erGcevRXJfi7U3kQynqYyEEkknpVc6NQvDs4njnxSqXQt",
  "key7": "C4n8UtMA6Xt65J69dUMKG9nPniwfggaoFszpLS8ebvemNqTcmAUq8YiA8K9ovvsvzdE9yJJUxBwMgXMULrmUd2e",
  "key8": "5ce1VqVBShdWE3iUGNUR4Y5gJfFJmLsEqN9x7kr3V68d4xYZZNehFPZuFGnu725kTCVnorzUaTp9X2ZPoyiMyjp2",
  "key9": "5NhCuc21ZtvMFGdwy41NYsyvimgYrE4jidsxgZqR5zNv3goocAdHSnXYfMNKX4WXqWWUitEDewe5gZJtnLeU9wkd",
  "key10": "53GNW69jkSdtZCvTcZg5SXs6RkFARnC2iAGfknKMwwQeyMoVjHgxJenzBCwPMSDxqCoiCJcTv48rZ3eRpyf4NXG",
  "key11": "M3VBcbnyKbGtSAt4pvnVydYBgpTDWzhEw3WEUw8jbqNVJYEspbtRczfgShqTJFeaWveG4j8pW2BGT9f85zczRhT",
  "key12": "fnSDxJ2R6kDcRTaZNnVrBj3qFW9snbaRoaQXhB6kxet8HoLqmLxUXsGh6Fvtzb9EpqJUTucVVa2Nmgpxqqky3hE",
  "key13": "2NeSJbvfbQfh4nTAaCtzQ25siUVrCZd4oRsTSKqiYA2LYWRD5WEtVdtLt9SYwnpzCUjQjtevTVzhkAR9SWay5GQ1",
  "key14": "62hYhV6u7LadM1e2UEMGbntkWP1aTi8ngj5cCfaVfdukuHtZq9cpaw1uGkmvcWGPBHf5CFnixEHzFdeS4Hw2q4Pi",
  "key15": "4bxGyikqahgr2WsATuC6FEf4pbLcfSjua9CAFaLjQkLoAe9ybZxgpCFN7VChTQ3GpionNce9FjXaRagm5irQYYfv",
  "key16": "279Ui7ghbSVw9Aw9UwshYDS5rXJHqoVxoPeeCJoekzjUgLfS1umwvw9c6f8czYQxKV2S1C2xuyFCQJT2vxmHWuHq",
  "key17": "3TViVWXyeJEUF1AKPHuvmJXsGXeS8sqfGs8EJt8GwVtyPCJkJ9KY8PhrYYH5NDm38u5W3AJ4fGBaERBCV7XDeoxA",
  "key18": "TA2a7AUyDmVkxsqe6Yb4DP3xb3qWPn3cDZNVjEE7gtAiG8enKRxNjSVXVHERwwVzxYXV5wSamqEq2eRv8WLBddw",
  "key19": "2zKDU8HCGVfjQUYtSCiLnkE6XPVK8f98iPaCAdmrs5BUzM3aiht2iJBWB3xg3ytsZRA1xJKP6wTKk7fYGJF3MhGk",
  "key20": "83o2vJsoydivEkbcFvMafgAcVsofd82zuywqt77VxrEGg5P9HYGFKDHiwmjBzdhkbeyXmxV4Kwu4LRyLfrgBzz6",
  "key21": "4nx6TzsfYqfVox3STXr4Z9CpkezNS8zQogB4FpNTVPh8Svi2rQ67RZYbUfVvF81m5a9VwLSp4RnTnnA5arCAX4cE",
  "key22": "sny6jhKSzqF8CqZXqWrjVEV1G9GT8TyM8qo5Mik5d4W6tZog9k54bNtkpd1GUPjxjPENULCY1XPWZSatsTFgtBX",
  "key23": "59h1VKNn3b9cRNbmaoCEbqAuzYpLsLKxE9t2xHYzkyBRc7Hn1pxzHLPq5SDyrM6dhUFnMB5jgXVA8Lk5g4wwd3LS",
  "key24": "zjv6kadjRRmk7iGErhXiaM751WmW3EoS71K9oMXdt3EtyTAerPcyVFQ65iy5sfVQvr3cmrDuCgq5kNmpXxToJoH",
  "key25": "mQDfUme5yheCDKAQMB1Az55gm5eDarQMyDLkfjJzHDyHDvfouf2d5fGQBJ7gSuZY3KjWEU77S5gkpciR8N44oHh",
  "key26": "2Ery1z4fbistvkDtEQYDEWFAcHHoWpshbXK5PxE4QSfQz7SXhcnAVZGw9LXZ2HuHMTjVKyhjTroCjEJuQo4MJ8pU",
  "key27": "2XJ2Cz825SgSaqUcbhVTsz4oyxbgH5kWfFVjR8Sz8abpF2mAbwtJoEJcLJoxZKviinTDmjbpeEgQPTBusTnCzCTM",
  "key28": "4DqJnqR62oahs8ARAZ9L4msTug3fyhDPnv4YCizbB4Jy4aWY9p3gCeQCLGvXASAQ2Jjd3pcT7rqcd5acKuSo8dSk",
  "key29": "C4ewSK7kRZnaETyiVdmLJspyfnoG4mQa8QBFxMAnZADmSayfhqmxCG76BTvSUF1xFPVsikrCygnMaM5SZG2q7fX",
  "key30": "5E1iBzs8f7yah39EKMnFdCZuCrNunciiNW3ZfnYL5FvyKLfjvpfADACSrpkSoG5faYrDtujNWoui1y7gNqZRfMBR"
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
