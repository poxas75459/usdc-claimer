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
    "2WPhCGULcDeGs7fBX9diNwcdNntBR4J8jkov3pYpJYvKVXKRQ6fnnGhSbirnqUZEVSiCQeyTrdMfVJRhifQNBMnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqczVNWdbzVg87qYDVSLrF7wyR8t33GBWoXW7JuqepF9PGJqeewzFz6fZjbvZ6N8R4LU3MQk41veCU5zRUfXiya",
  "key1": "5L7PgPi33z4u5ZQBnSZvE4ov4xXuJWNxJeEcHiW7wuVC449VqjNrEKrpnQj9BEp6L7v1HuUe9kDW9sGZt6LVEWqB",
  "key2": "3p6r9YnLLdgXPCbRyNxSt5bRoypzTwFYtcc9W1GBuHgXbZzdK16BrmJBWuDt2gM7HtKCuiF4w63RqHpiFbVfeDPU",
  "key3": "2aRChoEnh56dSbvyrc2NsYbYo98HGjG3qoKUwWLvaWyYUEakSb9C4vqr1XsSxkbT5D15oZmTuy4ristPEuTpRfqR",
  "key4": "5FJjwS85UgbSm2XiR5x6Wz4JZfZEiXfyqA44Het9cMgYVpt1okBwUW8zWCkVy41PpUrXQpi8SzwtWyK7yLYLkZne",
  "key5": "2z6VbEkfuWmSXT9KcwuUkWGz6Sn7mp3Ng3vb79nyjwRh38wRPVvnn2m6kWwzuJ9QDsTBx6q1H253LhYUrvgNdA4L",
  "key6": "2ZwZmhwFBxLth9wrtQ3ujQFtkMxYZ97WieiV1Bn3LDuLyXNjt5zRwF6TpiY53BjyfvQrx3W13X2igEr7AuSyzsdm",
  "key7": "31cBxNBGNphNtQrUdWy3RwcdFUgeKfKV1YZD5SoFC3CKKZ48sRaFFNVnXCPDhZKUUksEYx7fUZxkCxSt26FuXMfm",
  "key8": "4nLL6gBGfrW5ZFAwmhEteTu9WvMGntHqKCZ5yKFmeXCLg6hy4PUGBtyoK6rh7Hf4GhutAGYWq5Lf3arb2M2RJ5MQ",
  "key9": "48Y9ZL8W7J1AFHoq488dJNh3kvHiQgE16YS8Mo2WXQV2oa7eiLHx8wzKoBp3K8Xp1jMqDzvuNR6YgWD6nT2AgbwQ",
  "key10": "TKEr3mpCKKqgz2wVogD4t9eqZXz4ibTEBjPcJWs5jvKwqpjY5GQfHYc3j431o8b7g52WMjg3YBMy58dnsAUwK2q",
  "key11": "5eMZFjL3D6t2ziKiq2rd3yDCGykGRpGr7Ye77FuJAUfeHbvCUHG3iCmqHoEuSshHp2iGa9CebifdamhNzXvpw2Ld",
  "key12": "3iYYzaVtpjnPUfNdKPCtEp7ZM1A418YSQ9mtJS7BtbfkrMrksoNrZgrxYZF627oa8hXq5HeRqydeQYNRHGniAPy6",
  "key13": "5M4tcxUcnzHztGaoL2NSvZLMjB4MvxvET82CpGKHKrksFpRcKZBLGh3m2Y4VfZK21cbPkzXj5t5qJx8hwY8NzVJE",
  "key14": "2DtDDkubZoUe61HUKeFu1ifWxFzcSpeLQ4ibDEJheu5dKt8CD76kpBWBjL8EYkmAxfFLkkAKZvwfaYsSERT4gqU7",
  "key15": "37gUfPqwDGkQuP42SrYbsThmvDq5H8Az6p6CdifZkcdxE4qtjPCgJeBgPYJGrbTy6wBud33jguJJWAAewsmnTXB2",
  "key16": "57J9AQKq9XyGVnkVL2NMrPeq6Nsbsw5fZ9JSmmMVm7Kn6Bti9YCrNe8HJuyN4sXEMRA5MHLuoFfJamYF7UMxuiHS",
  "key17": "5F2zAVLHryXLgowykJ76XFs1QuscfsFwbvbv5xnYeg7YeqDXCAPxQLLf1qhm9DvraVnAoWmYuD3finTVLpLG9UyQ",
  "key18": "CzHnMNnmAuAtgZ8zqdWe8bKRj3yqSGwnoT3oSjndaZFAnwksCKxjXoiJQJD7tgT8ujkbHpvFCGhP1cGdihfQ31Z",
  "key19": "2BgpdRH2wmvWHEv9L7WF5LS5VQxNECuci2aZA7TBp5XDGJvhXoCZXYYHWtVsfasF4hJJgps5fshQzSA2bZRBZhc2",
  "key20": "3gnKnRbohXzuQ34uroqDnTX1miJSSP6PyQHgeuxgPQELMDNpUgBy9gu5K4YmuSGuh9onEizK6TXvKGat3vMV1bd6",
  "key21": "4kEgP1pi91eoCUZbXhtzxgJC2uPxMppeGpGZTcpoMmNWzPwhZSrGjzjAHVWtDYDiPRuJkGxFfASoMt4DnsmKYRvJ",
  "key22": "HDiS6Dduwq2YU21wfLfc1vvupG9SsWhVjGVhKiAgYVE2jCdcTGF5CZmAzzMFx7n6o5fBdPfm2atSwzQRY1ZBjgg",
  "key23": "5JZXnszPa5Xzzs5vnhMHfoHvvGgQoE3f7LTWKN3HS7NRJSnWwttcX55r7E1WTjjvwiiZcAuppz1bJm9eCxks27Bq",
  "key24": "4iX8AanGcUnXV9ajfGfPGJcEjy68uCF9wU7eoNLv314Qqx5nxEP1ATg5CnebSYbN3wN8W1UHFyHKyiFa5RqzagC8",
  "key25": "54VmYNSLbWvPD1VD69Jnz8FocDJLftKw2rWdVbbFwkKsXXBGfUWTUY1qokPm2y3FSMEB81xyB8yiTvks3EpbPp89",
  "key26": "2Z9D96Av8V1KFSkd5mZG4bS8b3do51nsJ2nv4yxFReNwepRFXR36iYjshxuxMeRb6nCUnUf4YxDyfcgiavjHwmNp"
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
