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
    "4JLmGH68sSdQD1d7enZcv4hQUAQL7X5BZBpe5RHitWWuJhM53biWAUub8dkBVhgXBnp2JiiosifUdKAb2KBD5HwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hhMXBHvfXCB4CbtkzJuzzmJ3M1GstSxDT7dnHQjPEf7yNKTUYx9CUGe5PZpw1SkrVsBEwAsbCXGapsUa8rFLsr",
  "key1": "3hteu6QzbyChnZWHNZxuk4GebfhUFkjwdgFjEtJ4K87k8KjNSD15wQ9hrkzzEV4mRTmaNLy1yz5Hs5ZuNncunxSc",
  "key2": "4GWCpm6VZ3ApiXDnpwjrfYLpKdzJnhZ8gJzCToBEA7LqCgEupHuxxUzHukjDuZnFiybbSLE4zheH9dqshPPLDn8k",
  "key3": "67afs4CuRekjYL8U61eiV8EaJ7CS5yYwwpcjvf8G1L6jKbRt4X3YxHZ7h4fPwNmTGA3Hu1bWXesJbqNEuAL2Rk2p",
  "key4": "2dXoMz96pZAGgu6a1g1A7VEUDRYsUAkVLdtNUaPcZDpBzW33if137Ro7CAuzkPXXBB9krULC331krUx8WsPxzyMj",
  "key5": "52hpg2yjzS9Yv94VXYbA49bAYHwtN1S9nJ8AAZ5WBqNuXYFuyHEwACKfPEQkSTV9aq4ETHSHYukyFUAsKr2WqBm3",
  "key6": "3J6UuiacNrZc3PwFLH2Av2HDze5YMjNBexSPwPEY6fLoY3QuskqJJGF4AvfGYFZ1EadppNUzi4z2gJwzSwYAGuNf",
  "key7": "5bDzffEGJEzV8PPJAg3GdStXTDBL2BZdnduNDDbaop9fhmXLFaAqVfvpMdsatS2tjimL9T7ahk3pEjKVrzh1S9ob",
  "key8": "4zS2o24Cui5jpjd2bG9PHcB6NZTV2JkhKf4SVq11q6uf9qfRoBYmZUwnKHtEgXv48Y86EA4v9Yu72qgehWqiRfwB",
  "key9": "36rvWpezFsqB7xLgE9vGYLrNrMWFSmLyhZt6tCXqc85wcBekAWfUkhpkUESHgxBsxx6nPm1LhmH4UN1cYwy8GU47",
  "key10": "3NbUnaVxYHZKY5TsBHMqN4sTGbyoNwHpGduww8ce7ANexjVzQw12AUWfpxxgRB2iYMgSk8SfeszG3iyT1vF7isF2",
  "key11": "3pwx4LQXDqvc3nXaYfa797EveEnoU46W7VwgYZRsZ1EW9LWyXPT2t5ER4hsRaw1X6ajyEKAMUrSkU1TWnZmrE8H6",
  "key12": "3jJr2bDTH2Z7JgjTuWH2fnrH5LYVaFVQDoEnsE1mfuH1EGzNdY1t8jdAk1mkGSoPzJtj2ffyXsYb2GpubYBxKa7r",
  "key13": "W9U2QGTHH1ms8YKtdiYwPcJSaR2F3viYiGsczNJSRyahyjQzGXt2HrdV8N2iLfyPBCWVzkzqng3dCmtby72utKn",
  "key14": "3naWGeHQr6jECE7YeFVU1LabqDboqxxt6QfVCa3aDQM3ckaWXJHivpWdAQxz812aZPFVY1zw1k7ZsyCo4uZJh5xE",
  "key15": "5kK9GUhPx1Ynq8bPwx8BVAP5U8jFdBZw24PrkVCfYpThejsYWkACW9Jq4dtSBBZhPFe4xaDQQecwZc8CW1F8i756",
  "key16": "3pnD1RyDFF6uLCjvTAZ1SxT7uXmYP7SLHBeMaPsBSjptzgVEzAeujEiszdBb5MrcmhFtB3QU6E5abL6FMCvN4dPE",
  "key17": "AAy9Pgc5KYRpnmQ16zhXRraxGFpDP4orGTyvNrJmW2ssTyAkJtn1yQKEmGqZbqs7GUi3K2o3racAnsB5AiYuQ8j",
  "key18": "Rqrd5ViGBqRBCr15Rm3yCnhmEUBCkGBVgLT3cnzCD1U8Gj4JkPby2QNMjBZ93Shoyn5qrGYyjEKPcM3nK1J8gdK",
  "key19": "4zngquzNCsMNh3AaKukyuEANeEKrzSw47UkVULmakt2TZ6ySLWY44EDrCAxEGiRYTKPXMe6Wib43iDhkExGCx4Xn",
  "key20": "uG6qF1UcZbbZyUDa8aR8bgENoXELZ9MPUWoPYS7ip6haZXQbFAkLJkn8o5mdqSUfgpYJC12UtadbbJMGi8zoE4f",
  "key21": "3V1w9w8hptFpHeNJ7ui9UFFWMTS6L5qZnmbyY4tQJNdAdmAMvr1CQ2ie4YNKrJAYE5dcPRWX91TMgHHw4rtFn4mU",
  "key22": "59JzdWg42c7fBzEQ6gP1o1HEXdaDbw2f7ZaMowyCQaM1FbUBVhDhbnMPrYTvdm1bGMqj5MtEARrHvnBbM6oggVRf",
  "key23": "2UsKUHVs8PxFtxVrxkxSwSFbdpq9A9ptko99wJPgqcJVSystqPfgsBh4ZXUbdHYjCzK3X5MFNSaWvxdSaPNwAimP",
  "key24": "3ikJKcxF1R2PWMD8L82Vyfuz4WnNvXJGkvaNdMdxjiyqKEhPe84swFsMWJoFRQ2P4V14ZHZFi37KPkXGFr9hjRQH"
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
