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
    "4P4v3uanpJfux7q5kC4p7FJqkMhknoAA8jSvfQwHMDorhj7fuzLT8di8ekGnc9HtVEEbjGaUtdX5a1oZ1AJY5tvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PqxHpmc9jgckyEut88dp8ExTxas7N7iv9KZEfCwQkYqxogZ7V7C1jZo1Y5nFbC9Uw7AukVoP9Vu8UoFmW4j1yjo",
  "key1": "2CsRz1t5xhGCZ2sU5RvboF55yzTUPDaWMRC2eVfKjiHAMU4C5BS4m9nMS1gRCm9U4p5MhyeSySkqRMDE4uirw8ix",
  "key2": "3JTEs4t5YWwG7boxjGsxhJVeFa1ZY1vScx5r8gg9uYB7xJFXSwYjEjMH9FAVFDAdeREzEXj9U4jnX4q9QcutJSmh",
  "key3": "499HacjfGjKAq6EpKfDeEtQ8UaARdtygreLQUdUchdLNDQjvpsSjFDs5R4pFrthdVBt1THbFdJ9MTGHSSafXkvW9",
  "key4": "5YzyZdWGXRjC7ZibyMC8hqaXaQnsEXbHqXnfiTsH9Ci37Zqtqq7cZzmpbTwZSsumQkJHTEqPt51ueo5Gv6wfrmSQ",
  "key5": "65BmCGisSuuCqRo17sJwxZLT9gQ4zBTGgPUfMamKHEupmLozNSbT1FXeeSA5EYHG9dtmV7arn5KBrSzBCpusbS86",
  "key6": "5PzRdinS3rk3dHuyFC22Cbubr7AFuGBZnRbjWk8MvLobRJVsGAWqTuRqsV12wzHyfS91bwbsd9zGbmaBdy9vxT2m",
  "key7": "3bcQa8P1vZD8kR7eMx9X9ZSzHMAmat8fdGGnckm5S21VGvLVxE4Tgzis8TbJ5zjEV2jHzSmXxcehbePrK5wqE2UG",
  "key8": "cjgL1VtDC4s5tYrhQTTnAbMksG5rNj9rk1eprkL3unUCzuBo7odDi8ZkXGDdzCss7XNydaUkrRTM52qwVmH1oZX",
  "key9": "4ubPgic2Qa8TVHZsPJQoe8zjB4svffi5Xz6NZxieWzmTR3NAZocDoFhAQfpKJ5nHtEUDGvrgJGpjezPS8ysJsLSM",
  "key10": "2jDR66BRBHkEHX7jcb9gCkP5xeKGAxPGmGdZBezsAM6MpVPVeFj4md6xzF3WhmmWUzPnnZB1maiGaheQg26YMKQx",
  "key11": "ZqLDgD1g1Dxt9hnvNbXNQVWoq875VhxSu1yn6qRYDbVeAQDwXQnHa853KzY6jAEPxSydQQCGKP8zqe43uuerHpm",
  "key12": "4iyCME1ELWBsNZuB2WhknYSCEyZvJc5G6NFsT6C6q5ZTkvZ4fGsEUWy1FbJa1sVbiDZLG7HiHfRwULWugVaWxjC2",
  "key13": "4AY8A2ZYU4EaLSeNQv4s4x6rXP56NU35fRripe79TXkiy2MGfVp125vJknrvPUarvtZ5no6JbyKfJERAQdyfGF6B",
  "key14": "4L4yEds4ELwk3uJXWaiUnoVc4rByon7B6sJ8J9XYJ5hzWH57gYP7Yg3oas4oa6BATgYbABpkfVbL1D8NUwk5jHVj",
  "key15": "5adayqtVqdVzruhuHd8RVNNGnjHvhmtj5wqmcJhPrShN2a1C7JSpjRVhLCUinQytQKmMdwfNBaL8qsGU2Edaq2kp",
  "key16": "4cdNq4fTbgjuqEJpxLJaAncs2HATXteyeCLJqpdSvFK78bBJqfYsNfNhfR6M7B9nqM9GA8nejWT54J6h69b5fUEE",
  "key17": "5sVqzPWB7dRQHYr4wyNnX36Yft339eiegUafwHz2E8iHtyayixtMbbEhMdhbyVyavNfE9zg8j9nH7u9ShyutJcgC",
  "key18": "3KjQPL1Kyn21ZSN8gyEVVZNSy12TrLPoidqWThguKp8cH8N4bVrdsLksVUuH4mNByNq5mFy26QRKuNTEqujvBstx",
  "key19": "33H1yWjBjX9okwWsUQ8gjbbDhr1v3rpaJGBD5j94dKgbF7PG4vrNpjRkfqb57YUXtAajNSuyNDK5LwvrR8AFkhjs",
  "key20": "5iQ2D3jmq6nK2eHwShFnGscCFzJBq3DskKGW7ZawtZmQnByvyZFv8wBnxfDdwdaDDLH4Zr48eRc1xdzuQ9gWNbT3",
  "key21": "5bH6baiHUY6JETTbv47dLRHSShTHrzJrr8XD67Bcu63Jx6DsBaoxX5TFfbsxB6t9kZWbrB8WjB9uhxrewNuSV1mz",
  "key22": "YPtmCdfpujvoTqghRc8P9EGLvmYuSBZiQp3bQaAxuapTJ2ZK4mJimVhpnRKqKVNXe4mjpZaG8pwXoTUtc3oBTzK",
  "key23": "4ViQFoygnZrUjLCVBrYiApKhP92vm9QNwEj5LJSiBH5oWrYF4wXGKH7ubPa1ENzck8Qt8ofJvujTMhNx88SfsU8C",
  "key24": "4T8xZsuMboMhPLr5UTeXSrJY4CNbnn1raMJ4P2SQ56C3YdM3vBi6Kmwy2tu8zwxxfWvvbXpGQUqCMffhii8cSrny",
  "key25": "xmYN2MEjuF1HHtrgD7pvbUHDTnW8NucximpTRMxU99wB5aWVS4i3RP6swbCr3ozQz3C1gKZjo3qU4vyWf2zz1fc",
  "key26": "4dz4mTu1iMDsneXRcoCoTFoYuEF52oJbi8aLVdGp5P2ppMvXq3Z4uVGsWtAoaRqXxj21V7qG4WvVk5qHzU1sbpwd",
  "key27": "42mFFvZc9Pv34DoF39bJRCA2z4PuhkTRVyjSW4aAJZFYbdea44CvhxiQ4wmGwJHnnYPCjhRuLbH5B1XtQ2JgrZXP",
  "key28": "g9HGxDNUvtTXKcpvEZ1XweK55z12i2UvXc1jhNA1RcFsePUYEReG3gjdc3WyXx5UiQZQVDPWYCwsSRyCytvws4j",
  "key29": "4MAXiZNYN1Lm9yWUA3ZexmZDfKBFH5kkQ1wE7rrGjJCnndP6eFyAMTBd3m6q6n6Dbx3UE9Z7DvBN6AoNLMwtei2q",
  "key30": "CVXKUm3hPEfm9e5sL9VT6uxsqQwnquAfRVbFzNDWEbMqUCZabEg3NL2hUxVt1SLh1goSch5QP4pSfHvKCrhtDdu",
  "key31": "dDNBLxjXJSHBDWyMtmJXSAQo9sbDLwMRkPiBdG9eXpvdSrXsf5dNVCDG8MiCuZbwKbiFXqRaskaEJWxtnQqfnFK",
  "key32": "SbjyJWUYPw1sjcx4q6uHDNkNLbxnTACdXJppEnQf1L3BTFKtRVJUpH2zUxcTV5sdJj7hjdVmXTsLPk9Y9tp4GEh",
  "key33": "4knaSDDzRJmwD1Qumn4H3iU1pkEDaoVei4PFAumhhpYFbCbSW52FU3Uq3LuKAdKfJtJpKWqD9puDVfqpnLAuAa5U",
  "key34": "3gCfQ1ug3HK3rJLgtKnEch87C6FQXH6EeMa42rg1usfvntwNNK64wjBe4GWUnPoPwR4bwJ9DJpSJU1xMCEwYkrRY",
  "key35": "4ajjMagMMFPfNzosWv2zus2CtJb6hbZqcHgi5JRqtCffW84pAgTTh6k3GvcWHxEfkBtAqUjzxh1quNm37GbgkrN4",
  "key36": "3kUkftd3QCvvqDZA5ZyXXm5ytmp8rFSrrM2oRGUJKuqF66pe27yGca9W3HWvgGLp98Lrwob9K4dfLX69PDKcdFQZ"
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
