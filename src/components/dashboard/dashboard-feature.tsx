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
    "5xR2Ka2nMSZYAq8UYYBZqzBdBoq2EHypCPUhD127TsX4yEWUg99uhBkZpRYwwHyy8LARhzbVmiivB1v9ceLZqW5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mcZ8wQvghJ1izUUEHg7qQw1oNqapsR6fwLV18wTnKoKxYZEzPzEJsQagUdxza1sJ5pnDhvzTX61d5haQW1dMAdJ",
  "key1": "4Y11RKWYuhyr2aXsKXvP17cnxZVXyPn5gDg2J9H38LJEteCoGdSmvqB9ogYWqRUpL1SC9B1iDX8jVbLRdLXRcsTF",
  "key2": "5FjcAkoPJ6yvHbVZcnifbLFyz5GxadySra34wuKL8yJ718NCRKyKfZEWZfUc3CthnCWvq7nCiWX2hkBG2LYYTg7b",
  "key3": "24vMFTYd6cQSG6hohGEtDMr498Sq5tStkw4EbwrUCkDS9Jta3rNXBt16dpA3G7WAnWLQcmuJRDN56ykfWqHzG6aX",
  "key4": "4hmzZnLdAXvE469qZeXnjVGe9EM5oiv4Ldovw8Z2GyaFsqvSsyLX3eYt75a4SNWoApWfXV1bVfTqKMWmfPHqwPmk",
  "key5": "63btAv8UtvLRZUgZHdqDgKZpVE5VZQ6KrTeYG3hbJwunkdoV55r696FUz8yQcGQ7BEo82em4KRZPKuQkgnsmRZx3",
  "key6": "21XAE67vHMetTsyirHiCzLDu5731WjotethDp72buJset7DFpX2hxVRNAN8SC7exTBEwt2PWuaSf6RpZUCUbWH2B",
  "key7": "39YiiuuAuNkWGBgseneoVNp4t5feJozG7r6WVGJac5Ry9BQA8SBrtTVs8qBj4uKZwB62Vrr2FGzVVmc1eXmrAX1F",
  "key8": "4oxxPxSq3SBvuX9LCVcJGXU1KuewZbZiMZ7T4HswfVrV7KcbkpPTsmF7ZeQvx8Cjh9Fh6PqgKfjKCwhatSBvdnuw",
  "key9": "4qUmiYWETKFnXTm3sjS5N9PDbDHYBUxaR1WbUWRB8gXSfRaXDEhkoXoCb5fDJRppe1Gf69DYQLRJT12ikAPKVVyz",
  "key10": "xKo5qto6oxknTfTPSjTHZi6ybvSRAdMX2gmgjBJUqTS35niENudjLuYFE1fYqrC3yho15KzavRsrxNj2dSbZkYi",
  "key11": "2ids2kYri3BFF2xUk5t6fTn9FBVvHkBUvtvH4N51zN7y5DTrwKhBaWPg4WVcxmDQqdzvZTcPb6uiU6SQpmLD76z5",
  "key12": "4Rd9vUGnVk1EN7Q4BorU6yBZ8qHPoBNutMDoZxuQkFr7TSmxEwUHCngQc6KXFWdr2ahjYQbVy7ayqWjprB1Z2HjX",
  "key13": "2zhSUD2cAHhbrNnwQvJYmA3tnj7onyQmf9LQGThKq5uFYWQSK7JxpfGzQhUnYUn2m6j8AS69cezcSW4qFuwBjUCd",
  "key14": "H9rtSp1QjoVVjuFnDNseDJHhMuSh6unB52AWjPsfGVer3DRvxpNTVEFLh7UbstBWNCwVgE5quurPQDf6vC25CRW",
  "key15": "5Ro2AGQy6RSbV41wocYA9ESnQpd2z79i7ocsZnjXVMD2ez9VFWkyAx3WqaCqtWGNdjXeRWz8sF6MuyWnAoP7kFZF",
  "key16": "3oTM9A9SiKw2FCSPs2SwJNvbrGLnUpDFB4L4rzr35WV5n32RoMh2MuPzxvT3YHNhXb8ir86W39McnZeyKpDMVuWy",
  "key17": "4F6XdHphvrjFffEnaTvemoJQ8PbFYbVk1GgAarzptMYnDfhyrb2vkn4sVrjXYMebyEoBpyVnm93J13ZChXd6cB1d",
  "key18": "5b3t9cqoVvsTteASDLhFjiWwADhkPXCoABwyz7fqTRNkm4fVu7XDimG4e6QXERMPPdZvknHjdHLQEPz1v9q7AGsj",
  "key19": "5ccVvKoS13e2UMJ7XSs9QPXbkvvNYYkjWCHvfzUC8uSSrkdbLzY4PDnaofMwLPaBWtGDmS7FfSXAH8nmJUHhRKdj",
  "key20": "DZydsRksNmFA22UNHnxb144NeqfCCEafMHNarneyfK99udG7HJdgAvtFTYCEtMx7riGxZ7Yg1YbSyUfuvQw7XW9",
  "key21": "3gGucHUc9gqREus4Dpzq62rL4SL9f3JHPCAyFMuxrXXjV1i8qnyyt6MnRrq6fpnL97VX8GwXeMGhEpcFFCM9aoZ6",
  "key22": "5pZyxRhHpa2FXhsXUbJZNtC9X1eTpg79vfcDmRg5bemLhv6dCWoaurVXRWaTrsEH9Gh9knxd2KfHMD86Z3cyqSUW",
  "key23": "Sxy6KRmX7pE24SXcWtifkWXcipLZayR3ZCLqeaFT7dvm6GPpyyPwjKBTmtMcYTky9XuEcsPX55Xu6fkjP3atDrY",
  "key24": "24PFYG8dq2q3kse6cjjnbTQLqd5acN9E96mKZfvWjnF6vzyK853nJPLD6wMcSAVxca4uCiyuLuSh6F6rZ3fFFCG7"
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
