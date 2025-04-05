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
    "2CPGJqN3thnN1c9pZHCSN832XNp1Qq1fTorxFeh1nZwVpuvG5Ddpzi1gB2gJ2KQjNnjRDJNuLx9DUKAzAVp9DLwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kzcgsYAASgUF1xMfAUi9MfRWgxxi4buKPBUVQTa3111yqWausjzKMWBZfXZ84KUC2AP9B1WyrYhnA6TvM2h9YBs",
  "key1": "4ahrf7DdD8LaxUMdiktBtR14gss1zSBYksGaxRbY6wB7q6ZMhepa37AhN3hKVYAZG4CCqhLjJKmc2cJ5qrdPXAwL",
  "key2": "dGxQi1hjkWxQkjgK3pHedCL21HFm14PobdChnkc5LCtwaS8wB5quanXMrUPXsbLDVU9UmDPmJTjvoLJ82s1PJZR",
  "key3": "5AAJUYkdu1MskgrkjtuMwRdYHCbtCzaEU7cZb4yFi8smZg5rS37585BbiXhm4unci1u59svi1XMtWTJr9tK3ZgTi",
  "key4": "49KZKWENuwSYW8pfpa2gq7wbVLSnJDhqs4PxfDZh1RrcTHiRbfxkpSUV1wUt4yNoyjbdd7r7U7avfpxFLuk8nzYu",
  "key5": "5ioJGG2obp62WUqbowLi1xSLQ91VFSUTWiDmVA1Yuaxy44WuPNwTuzbCGEdG17tkXftT3NpEVp8tCYrnKFWiHDxG",
  "key6": "3z63pbnfDq6wSExBTeg73LUzfSwHafLKprMKSeYLZVCe1zdDRikwuAVNH3Pa5nBuvFjMahLZKX3puP45wcynCz7E",
  "key7": "ZBaufsHoHYBkkT1gkHXGn2qQnPVUnLqCQuK26ey2GBEvRkRBNgexUgbw84EAKy4hCgFrZfmdsN26zVcu1UxJaXJ",
  "key8": "DSf6CtJzSKMAMzgDsAP3NQtCgHTuFcTRGUnTwAomZ2QFk9tUGkNRMg8hv4vobh3MtFRWKzrqFigQcUk1VUmqWCE",
  "key9": "5PN9SN3CzNfcQxTXiTLvCeRJzo3c2ZXVYRrQfwDAF7SUBPWADWpGgy86P7xnMExF5npaWZikuXUSP5mFJFyryCcu",
  "key10": "2fGCR3dY2F2UHUd4CLqcihNNNF3mVvbHEVJ7fzbMMkmnpAqCmFSAuvoCw62i3AC7Ks6jFcpZ7fj3APvKZKpEMtiL",
  "key11": "5e65vva3REHcmABEb9MqEbGPUYQU7qbqJFLvGzd45h88QSw3QFrCprMWU4ZWYyM1nw1u4vsjgU7L74Xis4WcREq",
  "key12": "4iLeKmy3EGyRFFdkNoN7pFyuJkq4hL64vvB8EgFZTBhdsuKXvnXbqddcTpP1EPmy6fSnpFHZZNeq5Jx5Hq95nKwK",
  "key13": "LbjCMXTBntczch8SeiGoy5n86MkcJ2MLpzQ2FLadhxUtoLLENsdRxWkLwuFBLarDWNuua5oK5NmGSDbSZTBYxGQ",
  "key14": "4Loab585grjZNwEVTjbSp8GTrTHwP1Xi6pdBueE2iJxyictgMTXtjRQpd26BJ41DE5uAwoJqX8154zH9B9f12kjm",
  "key15": "3jdGbYGKjpZhvdHQ3u25qdujBequ2dY8fHNsYfgkBLp7Jx3eRgJR3jDe3rBZ6aeqt7G2cFb9nrVSfCjQNestE9YD",
  "key16": "2PLz972L6gEMvCUKXd8NUuDWni8rJqqWEYoM9bdWXy4Pm6cTTYdGKaU9p3qSDzaLXrPtiYUdUqqokxtaGks4GLCJ",
  "key17": "43JrixCkkTw6JAjaaPbqtxyR9B1xxVdbg7ubexhovoTXzRZZoLriXp53SZe5xdYnxz98kfzwdmrgtAtUbrRS7Aso",
  "key18": "4iRzoYbMVCxrfXbUSnWzTpy3jB2Z4VLGz37s4HfXK9scnwyDiff994SkuzFngCDv4ycPiwYjzaTD7CyHMWd1gwWh",
  "key19": "5EQkqzpadtF17cbwdYrYafYyoovGHPUhkK5LrR7QMKaZV66PMLfY7zGT329wep6epVZhwGURPy7tf3qGhSjZDshy",
  "key20": "2jhsjSYycDwyt1uchVkD8Gqn2aT1Xez4H1c4Sv9s5MEQK1VGtPDdtR6tftJgf5Sb6rLi4XF5nGZLoTQMVJfYPgCb",
  "key21": "tsBPWv6CoJ9iqKLRukuBNoqNkWee79U8m4f9k4zfD8h3iKR2ypmT9r96H9CJ1Bg63WSUvce6p98YGAisx981xDu",
  "key22": "3gLZAfnBHRVjG4T2qmLeYpLkGQHK8hxz4Yx3s1GeCfXfxVWHhq8dCFCAHJyoPB9je43bqsSwkXxFHragPyMRcMne",
  "key23": "4bahS6zU156iuM1adF2ww2NbVPDBPC1cXpwMZewiKU3Pk2ARN1EyjuGU49WzyiTAoVU8oCDhxWtmB6sy1tUTbzzY",
  "key24": "4jJwnn16qnctTrzSF4Yz1Hrkhsy6bvs7wB6SKjyaBAESxtEogpZDFCBpPeLQ3ytEET1rZ7Qgj4ATT2zfWY2b2R9F",
  "key25": "L7o9UzvCXJQKh2fVSDUto5U5hxPwrrqyzqyRgyhYUPH1KTEKXGtVjvipq9TyfLRR9BCfcV8iBKCk3QaFc6MDkDG",
  "key26": "4u2bFiLBKssCQRHNBgbcqEZkmRpuJ1JKCY8po1QVJsZ7Xuzr7tW1Af3HaMTASPvxpbkbivgh6arUvkGfR9vauNJU",
  "key27": "zVEn7RiQMGgPHzt8k7NJDYD1bY9bEn3ydYmssz8GsMVwxPnLGCVHEAZLPTnagyoaJhKqHRx2quhWqmv5TscSXts"
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
