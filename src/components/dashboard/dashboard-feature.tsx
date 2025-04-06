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
    "4N6QEBvJKvuBCCBdT1Kp5Sq6DMy418JAM3sJaAUf6ddqSmFtXZ7dVVpck2mhHSZGknLKQXEwKdAtTY5hnnPiMPPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2znWDg5iNKuxv1vcKx1LseX2e6Z4JvPStvrtsrp9rGdNrFCQtPS1kUeCULNcBnX3ECemz7t5naZuho21tY6rini6",
  "key1": "3ekSVhmdo8G1Wzrhak3BbKtJ6zehWkghkUnx4VgUBYgD9VfJckv2RAcaQhGSpbwSZipBHjVE91gboBZ27b4d4bAV",
  "key2": "47SQNwm53yu7JvV4wUkz2BxE1Y1kHorxa3yeLd9ScbhdbLiMVgxEL8sQ7DxfS3ntGLHo6UHoLCqMZJoWEHMz9bkP",
  "key3": "LsGfKSxJ9JJqkHAGHe8BDrU2NSRorY71nWgcSw9JVvmhW6RwYsFPE2jvMSLtvER6JpRPfMr3FKj91PwJycT2PsL",
  "key4": "3veRHMMXBVXBbLSkVGgPC3mRfP3JSDioDvDHG3UEvDoRNZZVWf5gEbCKpMGSNcgy3PPHKeTY2Y7d9f9gSNnYHy35",
  "key5": "2V3gb1ZtggUi5FV52t6Dbx4M5zR7nvc9zHxVdQLNqx6fe57ZLJf14ZmvCiuypy1XXWoafBbAYabRGmNt2YVeMGoy",
  "key6": "3eAbZNtuQVA7gJR59XU1JVKskePcYAPzgpqCpGZef173ppqwbKf9qxb6A5VvKEQrmxKbzfZxzgPiFzZFWSZ3Vdbf",
  "key7": "22HYidVDozfbgNyGvbqAGztMT2xTmfG1P9F7TBs3wJqHpgPThpBhPCePn1ntYvsSCtY1EnmB8rGTZmmVPsepTFpS",
  "key8": "2u2rZSmfsk4uUyrwjaWKzTGTEty1VNSKa1HAxVvdXG8YqNzjMCBdjd3F9LMYNAUcJ1iZsaL2z6KFQyZFDTcARk9T",
  "key9": "3f5VvNdE6qpdcdcoK89fzh5jCwxW2Ry75shdGtm6JfxJJ5ux8AXBAmoLhykMjRNfUuRs5mHkTtqQS4CxcFX3DKgF",
  "key10": "sRzPSssN6fP4iGojTjjtwtvQV1PTe6htGvVP5h9wP7uakgeAKhPqptbHUkpcqwGbKhHckFga7mhWb6ov5BS3jta",
  "key11": "5pFVmCoMEWy4pBAEbRFU6qRPqDiLeNAWpsuZcjuiHqppuxC9SHdQTnDY21YWZjhYUNQr3u5HUeHCP9eJybc9qjmQ",
  "key12": "4iQzhxq9xkhPBV8rGUsDbiqwSzRJgb1r2ZeXdek5JjuShC3mhmfkXJjH3eDStVXrQTE9iHJ5WoMtKpKqiieSEnVe",
  "key13": "5wDLrha7xrwgaNwkMWW9RDn4q7tBerZ43ufChpN4K6xgeCPE3XawQoFfTwXjiHjxcQxJGWTSB2SzSm4LFP4oRaLt",
  "key14": "5px1EWjXeguuWsPQ6zpsYQcTDYbdfqaDak4stGcWFCfyWwzNXHXhMvx4sn9qB8sbEzpCxJ6teP8mQEKi9YK3uSX7",
  "key15": "5h2pCFuy9ucjZ9ayFN9Kpq9AMySs5zQ2q3jz3UXihRA6w6HhkrHRonJuTg2D7hEWP8kuFvhoi1A6JYj4HcwCo3R8",
  "key16": "z8ewNYodPYZdoe1fS5CvQNP83vkg9XnPT6DUJ7qNnZWGqey9b7uFk7vWo8CnFed41aYsbrKSqTgH6n9E3ejtTzo",
  "key17": "5SeRVHKSinTDpPyctQEaZWrpEBtacp1YtPeX54sxukSv9K9sKSSRpMcLGYQjhdS83Cu8jfxspU2DQas1vhJWXC3W",
  "key18": "WrmFtDJysvP5AyxXa4udPFg8PSq7gPzXE2Ruizj2Cm45iiY3eZdZbDLK68kGXTjbUY7fzvng9kNaJH7Hb9qbmt2",
  "key19": "2pdVUm1ysdT4UTb9ZMtSW45ZLDo7Ds8b6wNJXXY54v41Tuo5oWWNDQu9GTst23TpQtgxvSp4kZKN4g8pbUHSPFYq",
  "key20": "4g34AJgL3sfZdG5oHvd9AbdSMsnNw8H1ULvMm2mS1B272d9wyszPNDTNJgmaCN7eaUeXiapB5SoWhcdk2KDb1Ngd",
  "key21": "6mtA4BPVSTHouXcYzNyHRPMcTx4UWa9MGkPC9er2pobTQnuq8UbRDeY6rSABqsACe3ZS8n6Za6ipNj1qE6cvpLP",
  "key22": "3JHhGgQhwvC6wVjeefDVRWHAjqvhcj4X2KndXemQYr9LgEF2unxBY8Gfd3MASgLyMzoMrKUAj3bxJ5Hgj1YKpq4c",
  "key23": "594FdB9mqqCxBejLrX3J1QkbEy9jA54mE17J4KV1e1aS1tvgVWoZ7K8BJD62iJHRPd9fZHgxqJ8bT42pY5P3qFPF",
  "key24": "4L9t367rgLpvXBzHndsmgJysnVwUrqcwU5bRQwCLaLoSxBNqv6sd6pxEv8bHAtpFwBWSkoF6W7FM5d7Es1uDT38U",
  "key25": "3BLuan2R8geJ93rZbcBMLNNqa4zjBcEa7e121yzRcjPALDTa2oJbga7Qhcr2ZDnhPew7BJz49WEpe2bDQEBvGJFq",
  "key26": "2QAYsLTvmxWa5JtJbVF4tKn45yHoAvYgKQCLVAxwpsKxSEHMMvWeQsF7iyM2am2yki5p3RVMQ4A8TR5DPeU4adSa",
  "key27": "217Tdt48hDAMJ3DkUER8A3DLafQ43qbRA1tEDW4dsFptLKJCGMW8bhnPrTboo8kqGLiPtjDzBtSFxXgH2FRoZLLX",
  "key28": "59HRJ5dykVtuYPoT7rpVRtwyw21B359AS3qmfm8qfRuRmbAb1GVx2j8xcbWGLYUGMn2wvfVeoTRqwPE1XLhtzJ59",
  "key29": "22GYwvcFqWVxwVMKBR1RxdGMeAksERg46hAmzTgGrN8jRh9taw25rFw7sZg48k5Ru8UDV2u4PKEV7oMygPyMypPd"
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
