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
    "5YCm2dSHLkabXpM9JVfke8sTMaYDsCf9XH72CJgSB6iGAirEKAFrJhXtTDoA8ijVv7HrV1ACowfFBzFxg6QJ2bnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJsgZBBuGyPaTC4o29RwFVm8GKq3HMdUZbKgrzWw8KMavpDAeZwtnEPzisTHK9MxGwqcHfWZvXGDktzgJHJpEtp",
  "key1": "3eiLqvdU7N2u5MWvbQQhg7Hivh5egYAj2rQ2sVTBTknWUH3VuuXUQ1iiqGohd24yyrxd4e8MGQswgZCRTUGucSjk",
  "key2": "5FrB7txLwuuKiuYqqSJnu6NAmiJ2TJ73aLzMSP7ZP1ahk4qzpNusL3m59eSFPFbayVgfWATgmTpKR2wqaZ8GXy6v",
  "key3": "4yKm2dvtkuqySUdcLyo26UCWUL9XWWd8xGsg3A8yw6eKbqVLyAV3vbmcicsDp6n2X1JvDeZug97AJDVBY2wJ7ru1",
  "key4": "4ALpLQVZZfKJ6DUGiUHSNb8jRmBCM9DR4DYtryPVCZa8s48XGCcJixLUwxFWJdVePfP8oJzqFECAkGLECxtSMYEi",
  "key5": "r6Pd8YqLTvbKJJrZvqmgXgu3VThYVkgZJzzGZ6ZHFxGD7U2jtv4cqnuVsG2zyPXEPiVFzvL3f3mgGwmymRXbSc2",
  "key6": "x8WUdKeFZZkr5Nm3FNzqBrzxA8UaMVZFh2HurQ9RzFmdxnVRVERmJ8SyqeCTP1B4B435PtUjF3tUTri3jE1g57C",
  "key7": "5GQDEX1AptP9u1jxQeTW7aBvWkC7N7D6FWi5MNAR1g33wzFk5e2hjixB7dBbrp2CY1p66FCR5uBjMTsjmrjyahCM",
  "key8": "3t8PpejtPXjC1u5iQwH3SbVMFd4a7JXYqH8hnvsHkZjmoMTExWPTKnsmo2x4gAahMfQFerCe9YSTsZi4TQ9dytXZ",
  "key9": "2j686SfkTzVPzWX7ZZud9RXsRPGUbYADinXpeyZsmS6oPJEC8nMDXyGWnAkww3GacNpDEmGptUnFYBMnjMQT4JjY",
  "key10": "2b191pUA7ZZ1AVwPYXfk3zNPPXq6tg5vp4LS7uSrudWRUuMJuf9qgT9SiHbA7AUJPf12matn6bJcQozssYXG1NQV",
  "key11": "KADh6LtpWU1cZX1pKNLwQ4AVqRnLuk58J9Vaq4Df6gjrPT1koV14RhjyUVxR2FDJC4g6fvxjCd89gdbdc1EZvEd",
  "key12": "3BLB7e4FJyrum96ckhrnQWobfwyoD3sq1F2SrQKsoeCapadvz1bZpMCDPQSarMfWqKDdUmWUCizBL3hBJJhqHz6y",
  "key13": "3HCX9WTK5BXLMBtr92wri9LYbsJzZ5XifdZniRGrr3YSuQpFgeuaUrProKkLNqLaYP5MrnJbRGKwKdBjiVf79vvC",
  "key14": "377dkPMqYSFKRdy3K3sWEg31hR5sjCan4VRqPTbywoxJWUBfSXTxz5fU2dErX7rWLjow4ixxrq8bVrsxdrSKeMWK",
  "key15": "56du5rxJconkrNEEN3v3bXyjgcKQFAWcAizReehmTk1XyC21NUPSomSTkDDc7QjFzppwyjggYAAhXZmf5nqfZDxi",
  "key16": "39npWgiKhhNQoZrRsiihgfHtnGdZgFvcbC6qHix2DH6Pu5AhfMYhTiTpnsn81wHtszVA9vntuNZtJScFjJ3vgar1",
  "key17": "4Hi3k8kSvnrYQ7R4Dfdqapa22GZSrXGJdzYMoSe166aiiBYpCttB6ZwfdR7aZE8cEHoX9sew8JvKeSrpTfuHacTp",
  "key18": "2SLhTvmJCqPcGLDR1EqTNKLpaeNURSR46EyAJKgN8FiLbQkeeE2hex6ovEPkSbmYg1UyvKxj4Fn48nGtJroNmE2H",
  "key19": "2SVCnqLoHTkLMeHZJoRDxAERPb3vE9um4VqAK2ma2ut3jhVJb6wA6i7HYkVQzcdqMph1AgAxqNrdqYNxdZi5q9MT",
  "key20": "b7VRQtHhzsja9n3ze3vo2e2K9hDpwBTLkE8xXiv8aKGaxm3Fjsa8x1cP1Aurucb1Pz57xzZJE36g3MNRwDhnbmG",
  "key21": "QmQSDKsZoTRV1wV6B6oM4GJVwj2vcehDaHAoAh34wvXFgGtUafunCKtsBKKLmBh1tfg7TgKdPRvcwomRHBsTRKx",
  "key22": "4EtSTBqrcR6vDge27rGT7PnNLdboXPngqRbawX5LBZzyAxhUsgDkj3ZfiMax4GQvDKjjk4f5kA5e3AE8DdCnXC9X",
  "key23": "2Rw2T6btWLysaM8wC33EGy5h1g46neDqpNpyGqa1YfDt9ax34epH9ptZmLXhdhP4fx1xGepMywbrcbvqfHC1TeyD",
  "key24": "23C2NteDY43K3h7uiKT7sJz2mJdgB7VpP6LcUtWaXiisa9gUoiXmCYNpr3vvvdvjKaSVx8akdobgYVELMFC4wUub",
  "key25": "mdiWDjoJtiJTNPd5thrSUnh7s4qRXy8CG2rGfsZVc5VLtZuED5u8oMvfXEkHguvqKLLNL5cg1XEDyQFQLqTTUKu"
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
