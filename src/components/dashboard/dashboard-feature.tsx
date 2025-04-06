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
    "46SRkdpsBzRMghWpXS49qKwyXp871rv8SRoagqJQavfi8nmPhZYmGbCRdPKbn45Za44d6TKiJy4dZ5vzrURGZ2Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNdcfuk3LbCQA8aVaxV33sbYHVq7uN7WQ9p2s37FLgfdgw2w33UD1GR7gB8fZAKdNDkdLBGXa5LRMyN3ZU3qir5",
  "key1": "639GvXVvpAjsfHfe2MmkWCddx1jrbjpwkPgsAWDn4G3SVq9NYVwKwFGESx46ojRLYoFnQDmSdB1KES2YrGfCyMsW",
  "key2": "TwKWXXnXtJkwUmMbiU13MAvtPuFmTyTZspoR5nMB5ZTEHNGq1SFL59Kvx4kVptTdtsEFv35LsHpxigu7bejBXSZ",
  "key3": "3i7AUS2CqJGeMFzQJK2uAcWdKMdjh9kwktzwCEgi9cPBebvb6yysX6B7UQ3bazWwg6VTciW7emtk3AuZ9UB2AUaM",
  "key4": "576VBzBLRDVdHvzEasBBRGJGY7iukMxoiUoUcdjQi3NkDsYn3WjufQAwvtWStAvdyNiUK7ySS6w6EfEbBuuZeVmK",
  "key5": "3Lpto1BpieCFQesqvR6u9fJFWaubgS1NL4exnaQYMmjd9yjd2wop6EbUNaBD2eKs7VCSwPqPnUU4r3kfUPvuaCSD",
  "key6": "5hHzUcHUcfkE79NMrA35mWqQaSRZrGWxg6Zeivn1cr4x8x7cn4YD5hCN1qqxyA3bijUGpnpeQKtugDpLQJnd6DKJ",
  "key7": "ZgMadSkyah39XT3AoadmVPs1Wg3YLsDY4yUHSxK43bxYxuxbPyBhLEDUSiqKurdhfBZAzoBqzEWLtGDjraYKzRk",
  "key8": "21su9H9jyVMgn66skjwg9SL4XHyGV4qM6pGQQZ4KBTVBKcuCqDBgTXEdd6gX4Ay3ScDdD6iKYVCXJA114oGuLgUN",
  "key9": "4vgz5H9dRk1Wg2SZ5H7hW52JEHS85VGNbuYC47yGEraMtbRrhz19bWzKwzc8V1UbDtfvXpk8qNiccTqD11XRTexL",
  "key10": "nXsC9LaryMvHgw2szbEay3dqJzr3ctwz7R4NRQbR49beoqjDqrq5cJemiC6p19k55qKVcwMALEjXCC2ALkFboYF",
  "key11": "4AuNZtrU4tsFSCLx5teNbTp8hLrqRNcNmCd6mtWQq2D1rkY8XxLqRkELo7GaaXStS1gZW5me4K9AkTFiXRCHBiHf",
  "key12": "52S87SL5xP7LCSp9J3meQFPippQPFYnDeW56aNUQmMCfXPk3ziWZNMxZDmh2WqEk6J9b7MpirvhuoZkUrvEHgT7B",
  "key13": "54qm8YGwiZH6s6QWwEVV5w5QALnta7QNXq3rbQ4a7YQESW4Ubk3aw1vYLdZ22dHMvYHisaxYF4EvgNcKbvyjB1p8",
  "key14": "3Uopv1t6msrQkhyyfZGv83RCYmBSkkwPLmmpr1PrVebH14sqyWQ2TZDA3n1JVdN6SF1zhCUwWh9SKM9h5BWGjS2y",
  "key15": "4svWWAjam6oxMbWtJZcQGpdfYKqkZQXSwDXH5uvdTCG1s55ZKCURGHCVpwacXegb1sFhKgzDSZ5bW2LdfcfH4ZLk",
  "key16": "3byw1Kw3ZSu3DS9465on1aVaWpk85dMMptdDDe1NkSpDueQVvrvr4oGGfWGoHRXkSfxTvyD7mGrDGiZhFWJd4FX6",
  "key17": "2bQe8sD3YQE4HVJSrfrbFqHKRxUjghyTmz5j7G1vC9253YqejAKUGEUDgCNH9y3zWTh6wFcnUMV32kRJh9LLn9bj",
  "key18": "2dzpoEc2NEpyUZwbPbpqHnkvABpdZNZDUTH8k5sWjaVZgBzjPARuesxYZj1pTPKCYgQ5UZ9y4qPZh66YwZQ9hXLt",
  "key19": "5K8buxTMpxktbJFqXPviYKA7GWD9kyNC2cPi2UH5TMmydkPaiJu2PsKt5PjrB7trpJ9nZx5cMfMExkQ5y1nSdCKf",
  "key20": "4nQstExWTEwteRq4H3MSR9dsRYYCHQtn7NSKTfGnULMjUTvhhHnBoBbxqo3MWDjfMaDgLeUt7KjJ37yyzUMqksNp",
  "key21": "32pT8dZWbe2baQ462tHVfNjwpZCcDgY3vVgqmq1zcjSgVKsjeLzbHVPGfuojsShYNgn5dbyeaupzUqeMeC6UWK5S",
  "key22": "5iWdXRfVKW2r61KYnQg63bWKZJwVrhLkC7vKhxBWxHtcUXFbviSZqLxqE4gxtu8yCCQvL8UHuxTJu9Bh3JJodMeg",
  "key23": "2DqF4SvQH2CjP3VGUKzuYP9uGCASW2nANy8zfx6WpgcNCKPZSkMVJUfL8tJ8NoH3ZwFA9reQkn4zyPoAwyWWkK3s",
  "key24": "3FPqvkBrCnNLpiJ3pv2KAqJc4etQcEeFvez4VniS1Mcqkai41kGLK7h2e4rtoxi1z1VSaEXXBT7fuzUdqhbi46mh",
  "key25": "3JenyvGDgZADyDoBKFwFUFh4iKmhL6FZvnpuQ7yRpcbR9U225oUpWTdyGz3r6XnUdUtA7KcqE8JibnyUNe78eXN6"
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
