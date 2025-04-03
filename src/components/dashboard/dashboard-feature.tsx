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
    "4TkxjFjDhikWfzjqN5bAsoMdzgyA3raa48AqSM8Db27G82pdcfgXfEzDjgmEEUXjuR5BKME4iuJHFsbJeirRccip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Xs8TXGVJ8E5ZYhh2aWJaZuk21qYxBhK4iWVYpozL4hJ3bqftG98YPZXrvjPuxeB9AzqpvHtBiZDKqYniTzBTE4",
  "key1": "5HoXLuyUUNEx8p6r76sdQppXPToowi6bvR7tFmYqZccb52uzfMX1JxjWy3gEG13EcVgzAWN32EDwtQGv2XYAZb4c",
  "key2": "4AaAZX2os8JukRjXZ5xLhsryvjwtNufQT3DionrZ4rBUF96y8jq64YVZV9bkM3UWrzD9uPDFUdqSDSLtMunChNWX",
  "key3": "3UKYSamegwboSaHsUtMNc7b6NztC6MiZQba5SVLpCpuPV9BtYCMuEwB9nZLMZpWLiRtFRcAXnMvJMihJyCabspxP",
  "key4": "b2epa3tgkERpgUVyQjAkSCYFbAoM4YNBJahYF5x7jBwRPbr34wcrEXCSTT3aTfmdFa2pYSjYDPqfNVFwvF1pHvj",
  "key5": "5ZT9CvTvaSidZ1kfp92BwtSFJSPRE6Pqyan5ecvWmGng8JA5pzxuaAmQkHkdr9cwDCuJXuGoF5TfKSigdjkCk538",
  "key6": "28rFqyq1uxeegMM3e6vHxaNBbSk6BkMBGaZckktPQCQBXirCBB9FainPjfnyP9F2WUyNXEs78svLAQnpVFb4xof4",
  "key7": "669rAvqEpaTtVsLyZJZJGGVQwfq8AUs3CkK2CUEF1XhQXpDnMd8pgXngwmxGgxuqj4fmHUkdivWLwn62Ptqrn2vM",
  "key8": "4MXSkFk7kgbD77MYD2iBf6ySND5d86dFmTunqtfjmXo3LbXmnc8C1612dhWx7pJixq8ovsXMCwxvdtZBNgniuwnt",
  "key9": "5TtH6Bhjgtim5aLkZpSVMRWG2mjtm8SrsynAgWoc3Bd4FKxyXu4KNvyoEzh8WBgujuGaS8FbPXsLxeQGmq13jUGH",
  "key10": "4vtamHt3s1jUGxqxWPLTdEHry4ph9Z8CDWnU2G2WLC4CPqBMV9gZEHua195HnSVqtg5effyFip5TdK6rFgSYtD7i",
  "key11": "3o6JeHoWZUFrbNMPwLyQBFKhjN5PThV9aACnjAyCpxjhgqnbQW9WzueUcdwu2o8vrNWyoPwF3gWekZEWoyv9QayT",
  "key12": "2J9MgkspgiZ4vKkGAWNmepYDoFfEhCZwJjzSGBh71MWQSqrFCUcMxijCtbJbwqMWPhJwAUaqkKu5yDnyYNwQi6bo",
  "key13": "kgbcpdxQm2mPTDZGwWGhXNq2PBQgCbsmbarX66hBhfKrq8CpeK2M3fMvCZwejQTVx2QfG6wD3jP16mQuaZppuw7",
  "key14": "2dV4x3EogvMtKAsTo5Kr4i74NtF1zy2wQth7LXuG1F6aSwbq98pboX6jhxiivKsarFaoHWHubMdNdWqDx6boF9Mv",
  "key15": "5YcFEDDyak2E4fdo1RNJgLb52iS5bvcuL94vNq1mBBeLWnshE5tHCgHs1RyQA5dnCFsCRY9c4M4tzszKXcWoGint",
  "key16": "2u1kk7g828BstUzxUrwiXeyfE7uykkke2CG4jYHUraS71itr6aEfKdp6NNJWNF3qNrC4qxwQmQ54jWQeJnQkrNmx",
  "key17": "2S774WSjj5HErVepUHRQCFtKfGZ7Ew5G7teh47XA2uFTvL6ef4kMZs11Ay9o5323rqafCVAYQF62wXvHqTyQJcc6",
  "key18": "2TaWunk7VgAwuQJeJf26M9HvdAZXAE34zr8QXJKRQh6ZXWvkgS2CKfDeFMWHPJ17gJ6FurFtTqLVfPR37urTM2N7",
  "key19": "4yWmRps7fYFqMNBstbrHgQMVRu2r4sWKN1EGx4GEYr9eKpVSfp4eLi6xop6ssTewna4oJ1xnFjtD1dL9VsLhaRGd",
  "key20": "2Q6g9nJgZRAPGCLCbhG4WJCf1BEowGKYZKXxyN8WafxAGaCgmt3s3W3bfLcXFwm92s82bPixLVG5jRF9b3XkSNMf",
  "key21": "5mRkRkXTBBLd5pemvs1rLMbx6VvR55GnawkuG8oTDmoVxLFdd4EhFVbSXmG9Uob6EUCNMRkNNqkk3Aot9MbUhRE2",
  "key22": "2YPkibu9937wDt8PnfnsvrfbtNTz6a3k88Uv5UmaRN7i4u8fACd9Xb7oTYiv3kfxnWHKTDLva4y2Y6Nz15zfjMQ6",
  "key23": "Jc3pXkyb1s4gQuewxs8QCVfXw4tsZdfVJZ54RJMa6GsGoPuTJzPRwvmVQGiqN9cVkDzVAKT7XaXLfNkLePKitEs",
  "key24": "3tJw7sXRY6TahjAyENFP86DhP7gMRAtYWD3KuQdzn4389fM1UW6pzHew5xTecjZSu86uhMD1MqiN2Tx9L9A4tKkh",
  "key25": "4nRoFfqAUKJmLg3UXbhgfugKxKH3qG8jrN64LpEs81hUJsUXf7XCWAzevHcefn3TYu58BCngmVi3SzgMggjn4AdY",
  "key26": "Ay9hPAWVCdZVAPdkKyLGDbGQKFTHM3zMvvaZQcHnV7b8kGqSjdY3xT7HDHG1TJZoUhhESYvfH4WqpRtFk2W7pk9",
  "key27": "3Zhoe4QhDGQ3ront4JG8kSvAkvmuKgqRYp45YKkxn3qoJrWN17GGu5dk25Hx4G97T7c6N1jf3re1122aEioXRESY",
  "key28": "4scUHLARhGgREhFktbWt2KGNWFJiZyqjdaRtoqqYpzznCZbYNe4tzF5rknpn5KhANMzETpTEYgBQz4HYpFfRVL3E",
  "key29": "5Wa7cYLKtKsBkXYv9d2YoahoPBkFp5vj2ExgDBHWmaV6B6JUgEKN3JEoG7C3je1w5zenJyBxT9CqugBBBYmaDFuS",
  "key30": "rxaF32LpfbmGQ3EMXBKnwcnERLMhmVuwexpnkjCAwX48Uw9zgULyFVya3kwYBXijjT8mro2aKRZdeRNRVRaKSTi"
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
