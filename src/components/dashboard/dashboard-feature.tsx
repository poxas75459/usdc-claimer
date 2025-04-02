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
    "459Hw1p82uiRU4mfkzoAAqsHef8ThVq77Sb6KDej49GQodV3e7nEvoG6awvAkm1xiiPhzwJre8mF99JJm6nyLGvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EptTufpx1uHRLSkvenarcDZiF2PBobVt6Py2BHvTqMzV5URJY1MAJBAbQN7tM9TcDvZGiWdSsX25EeXYiMmBep",
  "key1": "Six7DRKpPfSfJTEoLFkf4nEDp9Fc7Pdj2H4avJsHnfwpiftTjAJ9yBKrLCDGhCG2PEiqnonZGWEjS68t3BF17bv",
  "key2": "61rPWemKWg9HEVQ8Npo7oZrbL898PgHSdr7B8iHMVFYuUKXzRuaA1e9ugHrasQRsmkL7y57WdmXVcNGxtFddk8YD",
  "key3": "3yBxVpDrAwdeJTa28q7egajVM7Himmio4KsLqHxDmKXEmPAKQUMHNtU6eAdMzPmBikLey6wMYL3erWJPxB9MK4hc",
  "key4": "PUwtsjx3j8CRLdkZETfPTNbkErKovWpSQbpEodWjoTL2V8GnXgwPqP4vsS8beJArZvBLcZEx5zVnf6jWMVaPzAA",
  "key5": "3CVMdnd9Q9BctfjrX3LyKbrQcGp43NnsuPXBuw21kCAbjiRaHLHtxUXaUq2mnoCGVH19rMDwqcxNnBTbygvSkiJ5",
  "key6": "RNFUH4kFJdWsDofMSjRfYXsFXE4yKps2u72GcAXmxNcJwYX5rcG5Mb4iWSGv8wvA8a4imY1FJu42RFSX96mMu2t",
  "key7": "3qqy5K7BVrtUC4mR8ii45SEvfqfjfsdxCPhrvxV2QrBqR4aJzUYBgBpePxAsPjKkpF1J8PM3KcCxTsKbbabD5Xvx",
  "key8": "5hUhX1NCvgBVcr3MRknciCQ2phzUtvz4cbqmcvyWwzzEz1PQajkVrBcTLHchcpkrnvqaG8UY6SanBnazfjU82ZRP",
  "key9": "tPzjw28AAC1vESfFTrxbcj5TB69BoAaNpoujEfRmbLjSugYr1VFudhq8RZnvwd1D17L84za3WpbqnMMnztGLqkY",
  "key10": "5GHVQTPdDsB1gmwaLv6HK3XoeEX5xTZbhvv38LRM7eh4rErddXNMLyv7ZANAocxCMrrLfevp1vRzcvd5XpaRX6av",
  "key11": "2c5vPvJFNx6enqTcsJaAp7BuiEJijFUZmzMvX7XrQtgchMpTctvBVKQkFLyeY1WoNz3tm8svU3onzE3vrRQ1TYEA",
  "key12": "2T27Dr2c7M7vzUkyWg4pgLrRPaNGjxGkLoNk7rxLss2uX8Y9ya46ezTip74Uuai2kQTvzk1G37qitmcSGGGWLqFK",
  "key13": "2P7qkLhPzijNhkcRvE5Xr2cZFJzRoMtmX5kfeFvaSnXQkfTDNGr69vopD7B6piz6dkLg67DD4dH3o4wcap2pB7x2",
  "key14": "4trkL6Jeoyb7SPQEiD3w7euv4JFaCMFKJNaiGFYBKt7UnZ79GhyFint1SCxqsFG1q6oCXvztiy73P4UzwMaTwkMz",
  "key15": "3tRZNpV8HkvDjbU8N7kZvM9wuwM6o8KUUMWTiGAiCwpFVjqjHX7rHT2CmzdGsj6YsyRhoebQ5SYoMDsnJdM1QC1g",
  "key16": "51xTAhPAq2xkRezW3WsU8iNf98sddtFifUCEYKDG1uTUaXMDPFArWSGa9PTHwhP1R7NAqLwk3otvuaGiyR7g7ZGA",
  "key17": "KfxrDUokPmtUchQdffzAxj6AFK1YjddVAt6rSX2zRK5rrkEEZd5uxi3ix4TxSoKrgfDvbGmTW5NTc82fCJvKXQ7",
  "key18": "5mpvnFhvKJSLs9ZYatyrYCRegjdPLhSjsXnkheYZKh8Zwcnk3uEtLdbaf15LbjwoQPQxjYZeC844KG4AJ6ZjR3ye",
  "key19": "zEwA8uNcBeyZ5t9wPBp3GoW4CLYZZbLwVjXSoLW98isxXzQUouDaBpqJWzQj2zvFS7i18Kk769F4HkVuA8Nf3bk",
  "key20": "41eA6XWipCU9n1oAAspJrfSV57d3MXZHa9KthmLN6CNgnJLfTz342iC4uduZxRYthK31XK7RvBWkXrHRUMHqHK5M",
  "key21": "2U2iULGdjkNqPha6X5sK8qFAhPKUXVy1BnPWNiwH53q1KBw55GF1FdsN6j7ThTMaL2HQ2bihm5PdY86xWcea15Xt",
  "key22": "4aVGezMrFvQEKP6sXSboN4kVp6vBtDZaybhL1dYtVnqgFH3QiN86cg1NwupEsHZqT8vKymdCFh3j2xr8oFB1FaKN",
  "key23": "5sdcRoaC53dH5ag9opweTpknZKhvZXsLPag1s39Rcn2hRsBxDVb2Y4sLRzENw4HTFYeSsPmVdYVv3AArxMN3oCXA",
  "key24": "3Zm1Trr8rWkKTVux9J4eQDyLvjiaNVvVwhoFaQwt2gNGZWshrJ9B6v7qRiZPQD43bfNvoAs6KBF4FBBCgRkLMUtk",
  "key25": "486jk7KufoD2KKUU2dtJYyuNn7TVjkpHbhubXvDZVBAuqw54cyM9cJ5RN4QXNQwN9NzDf45zHi9HkmkrhYhYUy76"
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
