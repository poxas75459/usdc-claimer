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
    "2j8jATvswzsN1CyZ7RATcLB4iMeWiYQ3wv7A5T8ENjoPZZKfVPZiEMUc1Q4YKvgEJkmoDCaByxCcNEiQnFscXSLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58zcVbQdibMuCWvnmygWMBoU3hDNzTjc8fmoNxUxRNymgybS7S4zGa7koPyWKkJLH1Do8xjmveMdgbiFpXzH5Q46",
  "key1": "29fQzhVSaPSmAGjT6XEvaFoU6BYC9fPhhvmXwfAc47PhCN5smewkaynAowaaMYMuVK8e4rfdS8De2QNavT54L9sF",
  "key2": "3PQZp9euyBTicmM5Kb9W2Xj49pjdXC6ocdJRzEq4t4LodUWruz5AZMGHq5LBNVjcdMqKsQej2Ai8YajKy4oh3BcG",
  "key3": "5U17zxN56jpGptdM2FXs7sY31Ecu5s7TfTgtEweyhMumnYyHmah82X6zRQvyv3aP1gftuTjKsvRjLQxrmerGrb3w",
  "key4": "5qFEMJiztRVk3uy43F3dQhhysCjJ98PLF477Z3T8nqAaJxBbPv629oXrRVSNSGbgmGdFY315jSdAD9TDCXpVvMNC",
  "key5": "3vrczeb6dyCGmkZc3NgMU1hGXV4iu83SMg7TrDLsW9Kid8FfNpgpZYsieuoaPEHmQm88fqtAkEgVovhU4NnRTUem",
  "key6": "3ek1fG9cR1xvoKSSP4di7e8UNvVQvUfTsVACkKKrw5LX7TSkh5nhb1TS5UWnUDRwuSgpERq29uEMqvrTDLiuTGGH",
  "key7": "4mCFLg5rJ7VQPrajwUYvuHXTcYXjuS2aZcVacm9WPWPuzALFwACheNsjvpJF6gnci6nMRvwahjwaUvZxoR5px2VM",
  "key8": "4ttjRq9vjp1o3G8dWaQTe1ZdLPMoKjct7naisvWhUc4QKASbCAiq1nAYp7J5EHwVWvicQCXxKiABZxA6BPgiJzWw",
  "key9": "3Q1yLueWmwjweCUXUz7Yb2R8ty4rpWFYXuTnFYNf37cEi1yvH9ZyGxEoq3ReBcQPFEHAYveuzzWckCkiXFMJiHN6",
  "key10": "2pmipJEYtBdKMs2RXvWxnb54hEkyQQ3pm8t8RQmURLHYjLdebq3gko8ZCmsH2snn7J7xV51jUp5c7jx7FzxqxY4n",
  "key11": "4ggAdYteDdPvGdKxyG8qSvgg46U7s1f5eSkETjhKRtk3nMVZjvx3ZizJV8ehyVdo7phMrMwmjCUxMnrbbB6GpKMN",
  "key12": "4heFm1gM4g8sWg5VVAxEjkHVoYw7uMrNVCnScV5YxjRHp1nuDKfzXwRsuCCHZnphRmk7kxRzCwyNjaVxwii3E2S7",
  "key13": "3Jt3nyXFpxQXM96MTZN4NdwbP4zxNo7rbwzx5Nu5xgF4jq4q4sGZB567QQce1R1yfEqHJcFtENcEYX2PEKsMTyGA",
  "key14": "FQCA6Wo5Rv2BegnbG2nebfM52bPF6kfwVZ5FMqdcQc4Up7KZ76GSXw9zS48SvnxpPeqXVDg1j4VFKxc4nxVGR6H",
  "key15": "2JFK3zD3fP1gUC4QBjxs3NneH8mCPqdJsDFnLtq37RRncwNHnJe4J48XUp2E5XgsKF4qZ3B8QnKLrPD7SmRtJo7U",
  "key16": "53QQy6qMQb8rc4TWJy6iE4CYcXUmjj8KAHoyzUdUNJeFxBm53y1qaxTKgVvzsaxJrMpJU5eg2xPm1gfMpCBxiVWu",
  "key17": "2Jj5SdcDaS4XigYEDt4bgVSLSASpjoHg89iG8pvuuV8jLxeqykL6FA3JgZGBwEAc8HgArAatJeLbTUQP6s8G3G1d",
  "key18": "46CvidaeoFuXBLo3q1QWkeRswyWiGhm5Vtmbd4z5E2vRJVe4oSnBNUyvuKyxupkhNfDDApE6gcyncPveNo5Ydjy6",
  "key19": "2j2jKyFKsvNVsM4b4tNHFDAtfqYjb8w8RarQYtSk827Kt3TN7dJr2spv9rnnRKumVajNHSgx3NBpkvRq436dKqMH",
  "key20": "3MR522TpKwSd3MPKZCPFfz8zM6X4hHDCZtUjxFQUu8uinc4zmb73fkaFa9S3RGQRKjKsYLPMbcDPPEUg96r7RHmZ",
  "key21": "dqnKZjksZhiesNaXZEvkYgvznMiGFXDffinZuRGsqi8fcLQxjyiGWPg7vMAkmCyaqXjSHpLzXs3dFYiuSVRFgF7",
  "key22": "3RLU9uvu2uUZ8mJ3uY79METEYHJbtBQ3cP9TUoecjWsti64a9maCytfx1jQbQB5SqPjy42RXJpBWn5tHiiaTGKFz",
  "key23": "4UofithBogmJbb7HSU7Fx6eh4m2gYJY136Do6LA7Ln9yPmkTYtWECGxAgDAGhUCLHGH5uJFzrm5ATQdMLvVSSnPQ",
  "key24": "2zbqr8JdtKhjKuwWaNHR2EhQgaAPJEvLymGCXP8EaBcqJLANCXkWbrzTBknXaEWVMytAB1ubVPHJvSh8vFRRD7GV",
  "key25": "3CsFcmKPvvwyypR6YApV9zPVMwGTP49sXtitE1ocT3iFn9VkhhJh4gQjpUzMPXxy1BuiZqCq9acMtF5V7vt32TeB",
  "key26": "d3w58QRiNfbSR9dK6JM98MMRLWiVNQwUGRPf5dBUh5NpfJ3PwNf9VbtwfwtnJEDyzdgtU8ZVWiSwnrLeAAV89eD",
  "key27": "5PB9r4wf2fDiB7xE6MgFS6x7j9bLHgUmZteuKNLuC7tAHNNAdcX7CH4kYSxHL4coy8VNaJ2CpRShLXQyCjhfLeyc",
  "key28": "C3ceHWC8363D1LyVo8kRgohQoBDq7KevsuNuHvhxn976k9eh8REYzFjuZPqhBUaFTQQtLkXi77NX79xhFzGESXP",
  "key29": "2s8iYwE2PtqKGTM7pDwzXLSj9vyXSMGKkK5S88ifV1xZ7w7rKoNJGnGtsWeREZjzsc4BaEmhWyziNCht55PV3SH3",
  "key30": "9eWv4hzvNNynfuZnwZnn9YDiS2D3zzunEMZpcjTsshsR9x9o2NqMWnsNSgcVooJEkej2hUUdwW7uaFpv5mkqRX6",
  "key31": "2a1i2xZCJrNbcvk2KeeHhq9w5HiR55TsJA64QxG2ppoek5C4oxePSWWLzz7GyE7gJHTftNLGp6unQ9Kh3cjP3Mur",
  "key32": "4NxY7DvgzkenUGC5ZfibuccMnzKA9rVjZAD4yy9RjxfKLvGaAyAhBT9VAAA67xa9tXpifp76hR9QGH6NeqfCKU5c",
  "key33": "4qA6A71xL7ugaEh6ZDMTC4FexH8CqeSEictQyDWPTZC57b46b1bWqfi6kHEjMF4kVSXYyrgLoefDjJem4xKhReeH",
  "key34": "2fGz9SZFzzuwSQrJrSwZitNcyxzZ4cnubvsM3zp5qvSS5NqnjhnbQa7cDg5Etg62JL62YnKS246CvTGf1d58E1AN",
  "key35": "2qJs3hQawwm7wVSAVPBibdmFo97qnikqno4h5ypRP8CKboT4CKN3LKzcCoksV8zCN3ZGpYRQc6VtwUWrBs24Vez6",
  "key36": "59bYaycL6a8BXFGetSRQgk8sdTFiHfCRVLELqv43Nzx7MQU57iirgiN4Dy4wXKJowbbqX6EondHamCF56HrEY1AJ",
  "key37": "4ySJfQogVYA67qmmtRTWe9k6asd9CF3kgAhU2EMvjbud7MGnD8coyovPeDk7tWcWaMe7L9qaZ8WwpGxvf5kjv5LJ",
  "key38": "2WDkYH1zWbZZZhw9VZbzBHMCR5xHJeoV6eC4Kj9U9daENM1xykEpmBRuduJt43M5NbgzWeFcr3fygtCQBEt3S2HT",
  "key39": "2Ee7j2T27Ls4nH88C43r9TkVYmhjeFcT7PoiE5C9m8tAJEECCi3nMzAo1gb5Z26b8yYHMZ4hwvJG1QogUYy7m8qk"
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
