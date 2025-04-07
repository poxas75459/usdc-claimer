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
    "3Y7xsnxHoNYAS6wQCahn356CCGwSqehEKpy9dGmXEo2LztJBRsdziQeCt4mAVVeBpxurdunnYmQfMYpH5A52zN1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJgTKWmhgA4t9x1Pv1h6VX744jKcRjP4rQb8Sn4wZpi5c1FvjTFn7J3w9XwxR7kx2nFnGzunRHGsxxbD4VM8qnw",
  "key1": "5u6rWXNUZnvd7BMokeDbw9744eE49oPKQqbgqF478fQYVnChro6PNa1egBQbjMrnt59KnT4mhrKcnqArExu1L8gW",
  "key2": "TpyAsq1psEsTM6JcxXv7qHkB9Fbp8BMwejA6DaJYX9dkw8a1p7kqHrohA3xD38KE2hboZnDmQXiqEjYA4navEDZ",
  "key3": "2vSFrVUNTwiYDJpeVXZ13XnRhtGgLrTME3u22KQ4CnC9iS3BMsAbgmiyFhsS1M2YmpxNZajZexkXrQzXo6Yt3rmH",
  "key4": "3t1MNGErHDDGpxThrdrMTDYdXQEDbSGEeDspBcJPwLqKJzWpf3MbmgU8Acj2qbVHR7AzdgaLCeJNeic4BmR38JKu",
  "key5": "2ZXkG3z9iGVZ9fpK5KbzR2hvjuavVoXs6NzdHhP9f6hWq6KiLRPnqw33YULeAgRPzsFyk8TmxoCAn2kViuUrCNc3",
  "key6": "226ytgiVqKRfPGRqCXcaPqgH33hgdBtkUsH7ULFphg3T3myqQ9nbVtekCxDhhrDJLJx5BXa69pjxVyBaXx1ARQrn",
  "key7": "46sfH1XNvAcHZRoLqPmQap6FXbo6Jd4huna1x21pVwQNqfwa7ZhaKwsyFoiDey5RJ1CPiiVaoTauCJ1E8wYCHmpn",
  "key8": "48Er8FvbYPkHwD24vG4wsoSSrh2uNM8EdvVCCSu7y8ah3EqZyUH7v2Ren1WPBnQsN8GWNNZuenBoAyMd6J62YZzV",
  "key9": "4kwNoXAsTm1Xr3489V7wL9yQPpPYtCCkXwA2YJWsr1p4ovWkmDooo2CAyLFfA5hWgPJEfeGdzbc79L6HWAvpfvc",
  "key10": "SB6WgcBCpWugAv6zvgrSMqF6onFPhCUKaoYvqZSkC5Bo46gQAsqXwahD5isWPzFjPhLomk8Z9q3kmFTnyn5UTZZ",
  "key11": "Pbxv7StXVHaVKMSwgAqeF5i4XG28LvVVp7JQ8ePCc8oJ9Foi9Fhvu2WrqHrXyeyMV9zZeqcwLngC2LmaMrQgzBV",
  "key12": "4XnAL59WQEwqASMHHkoU33t18cAqu5MvEMeVnYjtNUiQj7Vx4STc9qLb8iWNXuTLMVStWgNJMsFrwFk2tvLGfiZX",
  "key13": "qQAsh16RBQFo4PEsAs8BdRG4pi9xSCzRRi258VMokdDFQPSjmXhVKTerRszYXkJEg5brr9N5g5jdZ8jQrkowKFB",
  "key14": "5K2qeJK2DvakecC2qcyVhTCVMLQNgsBPdnRuFTy6KXsYzyF4s5qKDwfotLr8kbA24rrvEvXCkVkyGrPCNXH8XHhe",
  "key15": "527sTRoWgqUKZBMaDBtxonXAqNjUCdb5xqc57JoGzFCquHqbf4YdR6iRytSUhZe7m5XbVQKjLwqmESdEgAU4zCad",
  "key16": "4h5PXiuCvd7L2nfdjQWdj8oFMnA3phoYo3YpdrFSs5DGtJXq91EVAYLfKwJDtH1R45kGXf78Hkuyi9wFrpv3KvbM",
  "key17": "4YeMYK8xruizjiwSXHPc5Y1Ux5Au5LPVYGXq3wo2DpK4igeoJxFvqn4dM16ycQixLzcc8VSoT2BuYmpdUHhKFR8y",
  "key18": "5PTb1sDbXAoN8yv4RUer8f2tt3dJ73Z3rANM5BwWfvxxoYQ5hBojGg9HtxBTwQZjKddSbrJQELj9VwyqzcYi5Gs4",
  "key19": "Qj9nv4w2tooWumFjNhNhBV6Pky7emjueu8H1B9Q5UHAZhiEpQ59CMAJZAFYc4Jf5zEMip99QVcyasqUdUT4nhMS",
  "key20": "43P5nBhbcWfGUMCxEAA7KtfjErUcGTKt2vaEziEEbU95euMaKwTLbR2KDuEiWNpDYkSeGBag96UMJyrCmdmwsiHG",
  "key21": "5eohBKHpGPNDFWNH8aHkYpHoszhjXKULPQa94ZqykkVHrBTNkmto5Ekto64RQthu5FU4jssSgX5TMj5paGm7xrQ5",
  "key22": "37xyV4xn295SnLpTacNmnCc58CCUFWTRMTzKgq4sfLTP57DzqdzzFDm4TYgDJUrKBURcBhnzS95BSXGQtX2bw9AJ",
  "key23": "iKqSMZygKiUg8fupFJcizRVjx7JCo5YhjaTdFRSCkTV75swLNZz4TNdW5GSevxMLBbeN6s8fZp5scw6fbnVSHYK",
  "key24": "3WiizSsBJXZXQUtvbcUEt972aCQSjDiBCyk97PFK4hwZ8YGrKjjp9T1kARXipXCRDdqUkSuqfKFn8gNiBE82KZ4k",
  "key25": "5CSStRyLYMr3eVoreku4DYckdPtgLfo1xjShRD1M3B886Abgx7mrET16rt9Cik4yd2NMqoExWtdA1tgq8afkbiBt",
  "key26": "2Jg4ASLWztywm6w6yT4XZ2jJXnAanfAnYxowDuMM2WrFwpH9vveNbuCnQJv9LDacj5nkpGrkatFEZgFAuyQdpaB2",
  "key27": "DZX9NyXeNnE5mXLuNYvLJxkfMp5itttDFPd4qeBt4MmD2bCgxiQo361ft6B2GY4CXZd9u7trhQJB7r8zkPnALLv"
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
