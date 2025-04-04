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
    "5d5iroPE8S9Q3j4rKE6NKk3syZkVkZAdj58r4k84PCrW3WnE1FUkT1wfVgbTTT9iseWAEhMnSsGtPuysWn6GPufa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gf8fP7zVQ3KuWVHVMuzpAvdH73BBwiessQwWmizsHV2rWQ2V9eawka3futUjVqCeEy3VzaBdYniYB6hES6YYN3R",
  "key1": "53P7yNhzkvNYB9ovbjujgVnjoQSYE7ZFxyVp7MaBFzQSbvnYesFNHzLLXvCnFRVbxwmSFB4iNf5Q6Y1yWwUYVCHj",
  "key2": "3bQTA8YPDx1qdmk6JRbu9p9xMAGMDM1PL7z6p9F6z3qaY5iZd4LoLtEwi3LfVJQkNN3hSvERo58VBtnN7XfvJjVv",
  "key3": "41VxFV9nh3nbVB6WxpUL5YCBthJEo2ieFzdHXJaosRFQwzpbj5JWpDZwnt3U8hXYCeKg6nvs3L2d3M4gPGWuZp2c",
  "key4": "5PxQKCRYKYdaxi8uzH7CAMmmSkzM5y2i5WyRrdFew1a8pMCUtedfRp3D2XgJhHXeK1m9Ros2c7AfNhYC249F8fLF",
  "key5": "54ZJ55Xko8dWC3S2saGq2UtByzUVuf78genu3vycTgn6nXVgM4W1bY2pS5vyj3r6dyd6Mr95pji3ubSv7NLC4XcA",
  "key6": "Zimi9jjUZc5epYTk4WqxaPc31hRuPTUe8icdwJX19FVqJgRAaCPnHoP87nP4o2txX65MAcrKJiWkwRtE3RbbpPS",
  "key7": "9FyCDaRShnFjDzN1ux1ir3jSEEzdCpWD7ciG6wa2HsYQjpkAzPgP9ytcGrqnEqxNySk7yfPkF5t6ZQWuybQRKc6",
  "key8": "4ms9riRxgk8Lky2qxzHFUpTzPy4Zpgje6nxbYcVrFZtm1yvMUqTkwAe7cc16HxmyE7DABpSX9vNkjirBdQMKb392",
  "key9": "2tYu5r2E72DoWuwA1X5MkWpe8j7G1FZJG66qDRAiPDsqkQt6upYpghLoFDdp3Veh28u9e8KgoE56LssGdCU1hQ5T",
  "key10": "43V4DwzX9dMefJnrcjG9Xevoo3PxkGGPYWrPA9FwTXK79gZ6ppjGwsdxzoohPz3YCRJKWRs4wu9V4WwrmMWuC6Sq",
  "key11": "657kpJwVdXwantkUnDxXZzHGvcDC5mw9nZnm2EhNBGaKvAsoKWQVH3gFrF8XGeLsDpFjEKjbGQ863QcYiKwukT8T",
  "key12": "122M5FuRqmW97VajHnNHQqZKSnjS3uJqkYszM5UGQPqFYYkXgFBgXgDoDUQSc6RyMXsHNx51A2k1pxzmZyghgY3D",
  "key13": "5HVAyUm9P9MxBH54n5zGiyEF3kyWQi6d84Bhs2bxrxb9jepHkB6uCxFVZFTkdrJNAAwSd7v2p6LuxUGKPbs7LrwL",
  "key14": "5t2R3YTPCBEHkfzxMeNJoFNyJWhb6Ncht8aSYJmrY4pGoR367cisxDX6ExdTtgUpuT3z5DNpdGQWuXDb82X53RpA",
  "key15": "53XcVRDMyczkFg6typML3iyepcUJuaazWtDTAzdeeDY93KMXVevv3XBrzAjCCL7gFYbZEBNyBgVBFbAR5nEVM9QM",
  "key16": "cKUfmKaRyocvjnNpWrgFaHLkCf9DBN4iPnwubiDvA48u4Pj546DA3VJA74J86vNCt8gdtrhTowgtd1tFt6rEaMe",
  "key17": "5vXf8rnRQZUzd65Z7d95JVrPssJbtfu8pXKrssHvPUwRG8dp2W5Gqnp6HX378iXYb2b2VxzYjuM259sw6U7b5tpu",
  "key18": "5c3b5GV1UcJEUPH1FNJb5umnp7MVmJ2raa1AbX9jVnEY4cyzoMd4NUrwh7w4Yo7ZkmJDxJ8BX6Na6VJ39gJgdnqk",
  "key19": "4MdMtTHLk2TqbCmwzZQs5mHCV3YsMfN9pj2zSTrvEy11P1bD36i6b2aGhbAbymetsUSn14uu4PzY2DKGq1NbXxCn",
  "key20": "FciFikwjAxNV3g8rUYNXpWbTRE8URGoRVsk6xCfCwdxffYDJdtGYXkyeBeRyGSKCzh3caidpYUif3m4Siu7a97j",
  "key21": "V4PqcC3e9jqYMvZgTjVXKs1hcjTvTfBX33QFZrRUyBc9sPAomPMYk5Zx2MvsDMvWsju8VKrmCpd69Ub3mVMchSD",
  "key22": "4CZHdczFAr1U58AApWboYZtkpDZXYhKU5h7aY93NjuXUxxPQrAp67XX729wrUsrfkspMeC52n6pCkLP4izhymfDc",
  "key23": "53m5FTMs5HJTVavpicCdcBe3ZwjGvDuumSJXKZfSU1oDpeE2L62JFek4msY8ncMeFwgont3yiX8Be6aoPkMaujwA",
  "key24": "2poC1nzR7VwtPaKpr62K8CBybZ8GXf3Nf9RbgVc7fLFiDAEjVANrKQNbC5CtkNJTk5sys9Pmdy6D6qXAmKbYyDTG",
  "key25": "5fdFrTLP8Jaud8Sn6RH4WbNffYgfsgYHAJPJyqqkgnyPjBPJH2pGJVMziWUaQDJHoHFN8rVJF3R6bmMNCyAm1H2c",
  "key26": "2cri2YKZ1En7YBq8RDfc6zGUwy1oGegKic7sCgG37W4St87cdgCsfQcgPQdCBAhv9J4MLKNeKmD7W1HT1pVssjLc",
  "key27": "22KCgAysSfdtLAxUzrmjaSrNkae9Zr2fWmiuMzFpngwU4piGhyggTUEiukW6fwfoUU5M3G1WNW5Uf88PS1Xp7KoQ",
  "key28": "4iPnHz6E7vodQ2RWRXTDU2ND41wWKkXTvLmC1YjrZjeRF3A5n1uLiWgXLLxzn5bsvwpo4uVSQBcnrKcgnvb5KBwA",
  "key29": "5A52vcLL149F5GS4H76zfGX1amFgR4a74kBsoJrTs54JCTZ6ZzFszP1o3MJJDAmteeSiCoRWDUUSXWPzhz1F6ik5",
  "key30": "2nD6qA9KR94u4pNwphYPUggzoTTBEfK8M4UfGcd6VauzZjXc1u7qa2YVVndYh1XaYuCbotBtR8rLp5Ekyw92XJk2",
  "key31": "2DGkSfvEgQN1CAVY9idytBVVXp3RstVLmRNERAi6HSZLNSGzx3tEX1BL1H7DCCT5e1RMCUQx78KXXjyC5GZBevWG",
  "key32": "2DQMLyyjJhsuDpoAs8NdXLmxTs1cgwfJNttccrE81SB3C8J5Z8rD8mJh15mhejLbUef7VKZZeE1L1UfxKTukk2hY"
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
