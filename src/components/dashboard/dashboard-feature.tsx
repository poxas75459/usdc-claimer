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
    "57Fj3ktXSM3DPAhPov2B5yAqWY5gEwvzzhoY6WAuJmSNJdTuXhem4Knaw2e4fKBCMmGC7NRMjaCgUzLRgpwztgdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7ryTrKtd71nHNZY7xzxxnsTV4QWRYGWifg8G3ixuMVReNByH3zjJYv2GjvVsDGtnojmkc8PT7NkdQh6PUqjwJi",
  "key1": "41xQ7aWxKo21eHNs2fQY5JsAMsFdN8AdjBja9LEnfLkf4yqfzvvzuiNRCA2Bh3V6couCif3UCs2ak3nZ5yHGbZHh",
  "key2": "4CpWe5uRPBbRAqR6Q5PmKmecHocu5rtokZPNSpxsHTEqkX2LvZQSGoycjw9gxcrmYEEpsCF4vSxmAsUCWZe594V7",
  "key3": "3RHEJyA21c4UpEP7ctFVAgNCaZKLFrL8QnA3Ue33YCTnXRxQBvu3ikeGxk5CTo1cuoRAN6Xjwo2GqcJ4KkGfaQw6",
  "key4": "3qZ35Rvi4u1L82JNZvM3EtoZR9iMrDZbk3uGG3xu5bhPmHsBhp1BTQ9VEP7zmRBRuEXrxWYMEKiuKhtsdoeyCfH6",
  "key5": "23SX7brw6Rbk8zJJgABe36khLAzgHB6hxCh4zUk8u6VriKdSEKxQoxgoQVvteV94T27ADheVC5EXw8mBrbBH4fkE",
  "key6": "cawxRfLAo6ZDTk7ngFWDGfUKMWPmewmsXzhLp36CH9giqadZ1aiqwFPCJy4AdheEYP5HkDR8gXVWN4iUGHw6w4f",
  "key7": "Vzf3D2ctyfmfwXDtv4V5qtpqKh3yr2dr4EQFn4zQwanw8nyGy7M1WhCCbRWZMju26EfPhqNsn8optx3qGSggfi2",
  "key8": "3HGRPsiCJxvU9WPafAz2hAPpFQAUcgCFTCBNNozKNtrk12X8sKYG9bh6Xbf6qbbVYFSRm6VK8dezFRBRg1XjYUmy",
  "key9": "39xCfceT3WsQfgAb6iKFDBrqqNkAF4NJ89e79eVVhrJ3sGzW3T91VKzSMwW298bEKckMbDcNtw7k4RZatcuMDVe2",
  "key10": "33fcS1AGR8Qr1ybA3x3vDuqsKKuiBn6F8JK4fPhndTxwu89x4L5eJHR6CxpTa9C2UCMnyMhNDrynbW6LMY2sN5jE",
  "key11": "369WrmnQ36FaBEc7yRLES2mwoKwxQrg8BbByQVQcAJWNXMbPY9MXraYGKxvAHKcd6Xhabw7QBi1qPHwBLCBu4sHr",
  "key12": "wrbJh2kb71hLjeHHkRYkCkJw39sWJc5yB9CRb27wrFVvCys323NCNeTaBqNcLpZMQzZP9qf5CcNLReVuKwNpY5q",
  "key13": "5F9AUXmx9Vtf2HaywrQLkR1H6s6zRvpu2FWJpxaQBQ5y15N7uBiA4ahMMT1KJ1R6g5Z54Q4c3hmtjokHBAAMuHV9",
  "key14": "5qAXQrhvM4yQxSfdqRtJhTnso8yQ6xcogtreZioHcAJwannguCeSjyYLNkGxZ6pDcxEMQA2ehRFcCmap6SSbM2xv",
  "key15": "4csem3wi1KpF8n4vqnFGpmdr54cPKD8Nk2ujd7HNvxdvmYDjgD6YQQrzNmi3KSEiinGPwmJ2sUosyyTSabTyq89i",
  "key16": "2yz9T2BuH4uA1DpFXeaD95hQ3fsdP3ED98Z8KDsCdDBXaTa2GRxh7GRPpZFaoZbCLvjTPwehrwybaW8TamgaMqPW",
  "key17": "5WdGL7tN2V47u63gqspL5FoQ9Yut7fMCMDeGJKs6RM23eFfCLkh9No9JSFuSZv3E25tq4FeAMaUV3v9ffCMTWq7W",
  "key18": "5zdLJ7DFuaHawKXKr9rqq1m72JFLnwcHaipNA44NxXtoPj3QZZqToyYSYAsY1fwdUxK4zdyrwsjn1ubw1zJDducK",
  "key19": "3QVgF3c24rEGZLbMpJEUjEgwxoEeCwkNfDFozGYQLwYUs1xGNDANs85vdAbtKduwZ4SYL4bPHpa7Do3gFAYp59iz",
  "key20": "4LDKXUghCGzo8kLGaEaT9gayCtKN61GTquuixNzXHK5A4nugLKiUc2LTrz1K24F6B7yQbevhbBQMhW7cZYVPDpB9",
  "key21": "2QMZgwCZgKhu3k38rRpSE3zWMjKq7dfow36QP6GQYxpfZUBKBP6F9NEf4M29Xvq6Qd27P3KKzrmyT4NaDtaavLfa",
  "key22": "2H6T6uwJaWHFyN3R3aGkyRBd7MXQPQakzUXR7Co2cU5i2sVSAipUZY95EU49qcHWrcJxYM5CuwQ4JehaQ3Fx5eyJ",
  "key23": "5Cn51mtrPVGkt6QiDUsE9MMBM4QCFU3TBGYQgKJVLKL6DsXsPv6W4wRexRaRjixVa1j9SYx1p8NgF6FEbSwZ5szQ",
  "key24": "3t1WTCJxkPXtftYn9PajfigTsSdUW7VnhJBq3rs8kYdQhksge61QvehwaemdY3KRrL7RU2XCRbaoQuoGmYhBUrtx",
  "key25": "Z3zCfwF9t5uQx9TU6MrXqoRompCLJ4BbVNxvW2CzB9q5EvZzWMRaAEKkPfCU9TpySCwpJkjs42RUaenZvRkipqH",
  "key26": "2jScTXyM8dUJf4sBriKKMbcWuKNRmukmjyKpK5wZ1YNU1ZabtnqHVkQ1ERXqZm5p3T7H2fN56NUTjW6RkEd7xCiA",
  "key27": "pvZXx151qghKAMLHNFSuSxjqDiPD6oGjdt3MHHkTVB7vSTj79GCbeWAKAnpcbwftNLFKG8QFhmehNwrDoY6hwyP",
  "key28": "3y3xUFRrATiMXqfUAWAniza5LKyY4zMr2aT3hE3JysbCZ6irHpufYNpSRQHdcC1kFCnNZfPSWfov5Dfprb3SBdpy",
  "key29": "3H6Qu6fKXRuA8k8C6K6kR5T3nrCXQtTTuaKJpvboXbYefBBsGQGpJYwYGg8XzvMwjz2jHDbKLKhqMJt8e1d2QTYC",
  "key30": "5eNKKsAeN93zmHJofy7UqkmkcgaTVDLSHzyjsnkJ5PRssyu9ZeqiD17XgfJc7ougE1zmFqfySyUgHvh74Pf2wGt7",
  "key31": "4LwMY5gbZu9f62WdcGXaDxyf3givPuF8D1TvCBMrHHYeeWzDv7YJxFanFmST8LawcS7WSunMvAXABuRHTHCB9r4s",
  "key32": "5xHu7uHtVnmcJ2UpWt83hsasQntF1PnZNxpJ7TyQggTUXxXRdYpCpUkk3a8F4TGaREafEKz84kqXtDrncgH9TWWy",
  "key33": "21DgUtAnqg4p6ZEdVMEAq9LNQDKNazQ29kzwY76jnEMTP61b2NjrFge5iSWaGxzLQZWvpKYB57wpYo4tX8FnWJW5",
  "key34": "5NNx4P1uWJJKRYZ3KDDAERmwSFfyk3YBf4tfSjTgqbkYAzbTnj2vvXDTeL7tL6bbnvR72ZhC5bBXJL3DZMPGoUVr",
  "key35": "3SC5TzG934w1hNowUXyiL4tj37BZ3sgVDDWHFYLVjgj2orjboAMz4cNLFANarFPD4rGN9wiJaFJTBAwRW5qKfSw5",
  "key36": "DVsTmBcWPSJ5QFGJH3BDKcnCp1dHGez1wuahGXTKW3qPK7oNv1gbMZPHPqKZ7hmcbvWPLW2MXGQYGxw9CArp4NU",
  "key37": "5Wwbi4SZyBGdiAM7wxQ5CJY6ACCunw6y9KRdihH2MtsdTQijsm1NkN2Z4z4deHQxyo1SbZcjEn9YLWRdH7tKxZB2",
  "key38": "5itBWxih5EqCwTgXUpUhSA4GgTMdtHyha7Y5g5MyL2p33h59qzeyxtPAfactmaxn3W2QZ6gPfyj3rS2FEJx3v9Zy",
  "key39": "SQZ27VLSrqqDcKgpLjK2CdbTpwHm679DAbYpLbss66nXthNssboq2Fqgcr6ewHpmLx4e19RTRAduRQt9WAKZxXN",
  "key40": "3WcNyeW7GNu9RxgoxdAXPBLbTWuZ5JyFUCa6e3XWQvmoAzcVwtExMPA9mEsmwiK3bCb7iLQwqCJpzLEf1yxbWfz1",
  "key41": "5VurBrQ2QfX9XorXzyCfTZ7F9qUw5HPDvQzEChbrRxJm4dcBchcXhfgCujNke4TuCo3vhsoomkfamDXvUw5D77uB",
  "key42": "37McCDkxVd4E6hAX7gPcEhHMDbR2zaMA2m5oKdjgBgP5iUMSULBUQ69ZKAbuEZNBUEeJQATJnztXccJ1eCK3Ja7a",
  "key43": "3gWkVK9z9Jjd2RWB3bZV4H9n8XiqHxMkBfSKBBdji9743uJj4TMiHuN94NUwNhhSGMAnY3GNSZMxFQBDC5LrNpi",
  "key44": "5KHrBLquFwkNwCseBfiCPJSpyZaYxfiN5erkJYgyPgMn2v1Uzsga1HDQ1Jyq8UvjAMgEEoXrB9Kdd9VtNkpYWEx2",
  "key45": "32HCfumD5iMq2dX3VmYDC7R3gvv5hC5vAHTxWUEzykmh7uNeo5sVMhFGePTdAjEUFokTvv23mPqDsmwkJmx9ENMx",
  "key46": "4t9pL42kLLS6w1aLtAeABgYXTamYLLZFaDDZh3r6w2auREsmp8Eri7PgjYCUBXSWdU9vW4gfPCZJfCwY9NvLCQFk",
  "key47": "dxY7M8xSm2rWr6AApSD8QmYEk7NuNQQs8MkH445aaN28CNSEjH1FLQJ6c63sLLwAhJ9rnp3AA8KxzGNUBncfN6V"
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
