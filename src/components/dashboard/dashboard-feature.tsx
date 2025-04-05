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
    "pa6WJ2y4PdDGK2jU6YqqZhmtguBU83hTCbSkDRie6DsV2njDXPwb3XfiWLNupf9LnTDjqxcikRuXJcyTkLAZ9ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZ79nnRrhVNzQsdEHp3GHx5g5xpRkUFiBmazKXyUtsr9EHJGkt83gLebX94JgmDreikeEPM6P6XKfUD1cVxTo9f",
  "key1": "2Tvqfr5RXQWZU5RWZ7G7pSF1WSfA69317SZQj1pqw9FUb3D397kjkVKrWwNTQSX6MjjVKFarYyjtjw3qtJJN9GvK",
  "key2": "5gtDGP8GSYzELhYbKmWL3pyDu4bDVrK5iWEoiztNQE29fsPg9wgGgJ86YzHEGUc6u1nMF8U85oSxGhmGmTXW8PJ3",
  "key3": "5dz1SRBmtbV5GGM4rjoDK87ELuGXSjXEqyX8ekvgHJjdEQfLtrm6HqhbdowMsUWov65EdtW3e8uYFFQ5KRa6He2X",
  "key4": "5M6Cpaa5XL18Ebwt4dARUmLzVbU5QicfGrERmQWoSEJgEJd2hHL29LZ5djVWCG3ubT3GG15JKhSmBD4bcjF77FuA",
  "key5": "4pnggAg6uWo3NWfJ79qifRQjKUqM8ubNTbuL6qGf1E4VSXPhioWbooxpoa99RJPLSrvwgXqFZYmVjogZhAL9RGCM",
  "key6": "37LKvRoWfq1He51GSdgnHXyU7s6EMWvjc2WD5S1PUBeNyBUPBC9LoZM68pzXk6Rfz8245geBfdFQQttjvMU1g6qi",
  "key7": "5CHB3q1zBBjgMKzYjSEgYzas6XMx7MjuYu3UX8AQpLP7rzMbq3XExyLbUGwdDBuqXbVtJh1mT5ZQLS9uXkBj5S32",
  "key8": "2rKn6vt9Ur7HzfpYgwmtyURFMN7UV8bxjj9X4jMbZky6aYM6LixcZEivKQnB5JnKrHsebeVCb7Hi6tQoEeX9sCD2",
  "key9": "XJZvGveHazJm8eQhsFXX9G8JbLRqEz31Av5qvKmQhntP51upsrkWnV5vLFcpnhkio9mqZz7ACSRR2GYXV5GSrii",
  "key10": "peen5t4nvNKF5ZqaLLPwcaBkBVj843Gjos4s53VfBQGaFY3rxwbS2XrLtSZJLUPuXcDiDi2CMRd4SVhn6twLAmP",
  "key11": "5UVbKa2v31uLS2rTLdMbMzgWMxjzKvqUbFtndPmVRC41jmKaPRWpJszzYESu15ZTTCQQPzUekj5y3yn2HUawQg8B",
  "key12": "2kj8E8tmksekpRNEgF6Wo1511XRHBxTRV7DTfjghzpku1MyXzj9jtNWq9Co1KJ33U8j4zfD1Y6yPZfNTuhi32h9J",
  "key13": "KnQ3pXBPDKheDSNxdwChtFG8bk6BqQ7qgRNHw4zf5uQVHJkNLQUg74z67sPoEDWkRrGGzBu8meQd4tWhaR2zt2g",
  "key14": "D7BEMfRt1vjP2wNHH4Qn2GSF7TyQbnjkayweckm4PueWAudFMx1KJgfG6XsGrSuKmAuN81RLf7A6Je9EzX1v5g7",
  "key15": "4RASrQdUDkEomiAgx8EtCP6M5t9Eoo4S7ZhZ1tvzrFRkhha9Bx3LTp76HJ72AyS4oftCzo3QeQDeBSgGfFJpeWAM",
  "key16": "P9s45W8GJG2vuDvxHuUVshrPvSNDW1MD2zLPyMCyKYuLRLixdUadQrV9HWBPmBXaqVEpSb2Wjva2XUi4eZYzcCv",
  "key17": "4sWJxCZhwFPqx68qykJtM9qK8w78BdCsJBnYHneoSYYUWgh9oPqYRhNQzH9GgwSUb41fpYJuTGY8TGEs2gZpwFNh",
  "key18": "61oG9s4ZvMP1kB4uVsXN2iDXUnf2D4UMjcqC5fWJiQutuMgmDnyJwxxy5xvj3zNzZKjDuPGVVaPEvDfjfWv7d12v",
  "key19": "3MQHde8ePs18GrKxPJ97ZxEV6sZo5XHeAzAKEw1LvZTPp2qzeJDcDWCmSfq1rsBsBcUbXZzfMVuhHnx6hDBnvZVk",
  "key20": "2XFg6Mo3dCnWrnZtHJun8popdxc5wYzXzQXnztgWNuXYoRyAghNSyPZdR3PrL8bg99fXV3uvHHq1YAK6JP7gK46H",
  "key21": "5GTg4NSVRUcP9ZcNGia9hc5EUJXibGnvEUxyR3UXQFd1fPaRGv4Fm6YixKNTjTuULeDQ7Z6TtF2es9s3SJojxhwr",
  "key22": "CRECQGVkVpqcCEPcnhBSUHrXTPphaF6p6ihDJTYKtnMKM63MzCZcmEy6wsXPaPKqBwcqCBE9rHGspt8V8RwRDzU",
  "key23": "4SgxY78G4LxRhP981wrg1KNNwcJJNeKCZggDUEgrD2F4UCaCGDaFvmaYxh288cDRb1ok5zLpsHUs7M1HpkyFfYFq",
  "key24": "2BQcwbYo3NXu3AtDnqGZbnwKVgYvdgfVT8pE1H1mdVDNsxmM2Ba6CB3Ltp7k9bBHuFjYrhypt45iNUBuFGFZfWwR",
  "key25": "Q6UuKLpzLz5EakYTiFu4sHvMrtun8btauyexqjAwxMwFBEkFNnXJwrshC72SQsgPcBfsGEs39eFSwrwEFfP92hj",
  "key26": "3A7wYAt9VT2QhkSG64CHCTSsJordJrS3jEbjbh1puLphpjiGNaB9MDRAAVNw6TfrmAVF2HuzUFB2HB62ozF5uGDZ",
  "key27": "2TNyXsNpCsfpRd9wcWrPnMdzbMs7Hbst3KrrWiXqRjHxe6sJW97cKvR87PgUKBfV7S6PnCaKYAQzRQXU9cjK5pqj",
  "key28": "5yBJC71epvVBvz1FUyJnoHeyoVL5CFoSwiMzBY9fGYLfYiWBmxzgc9jPyNkjDw4QxUyJKHX7123mZZc6SHcJqgRs",
  "key29": "4HeoCmd4de7crn4riTtv3kFcexkS1rBtqLcBYnXzHSwkEy66zZcgx3rzSciJyTCDBQMmnPbaxpb9Lgz6tjykGBrE",
  "key30": "24VFAxUgo4dqa892D2yL31FkQGgm4Dq4JaaFvNXhFB4dppWL2ingfbsxeJzVUg8ett659NMD24osiP4juMEYvkA9",
  "key31": "66CUMmKYwrzzRfEF3EujDD12UxyzYW5pPXrjt6vRuoF65BrC9GuzjwLqwPdL2wTSFrMqncNdSNzUS3cHywpZFsSq",
  "key32": "3ek4ZYiGhagAPL8tTcXDPNwXZRtmbpvrEjcpRwE3Wg1ys38aoyv4gCNHjx1gFNSp6yQiogWUZER7xsrrcKpqBxbC",
  "key33": "4aqqop2SDLK4T4XcRauKDGKaQkhRceUbZ1u177EEv7JA6AX4syu7P1YDp1mdEwoWM7fbr8bKvMXFkZCekiWavjcL"
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
