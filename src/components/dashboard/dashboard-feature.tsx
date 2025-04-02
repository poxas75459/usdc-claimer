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
    "62zmQKSetANhV9ZvgfvnaJJ6VKnYL7yU2gwyDAF2eMLc4ezWd4nb5v4iZ4X3BQPNJaZDfEZ1qkoYU7H2zyzF8QZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ovJkNFV91a7CbPf7bCioohxAr26nMeAE7t6jBsP1QjSD4NvnrbkTKuD1ojnmvdq8cmusTMHyXu5WpnHgjEGy1iU",
  "key1": "3b1uGjhTQRwMixGKHW2wNX9Pd5bWuqgqSG3ZhomJbKyUCQXeQL3HCx3wGGfFd7C7upNasQh1d7srr59mkHUDgk4Y",
  "key2": "3RTV3XyDU9o1cwgc5ngEniS6SicqfVMzT4Q8T3BLeCqPYKoxAAYhNk9ZRLqtL7zw372rj9QaebbScsKbf6jGrRDb",
  "key3": "5GKSbr9BPPuvnFYYc9qxotQ2jesiLcpcNsqEJsULv9Le6sQayi7j1ssT36jDcNcH6YTq8uxGTexm8debBPmwNm2G",
  "key4": "45AEBSM5P2zR8tQqzrxGESm58ymvCY4HC89qvmRC49svvUVHZUnbwzNwbycUQNr9HfVq72xdCKNaczKQD3MMzbZd",
  "key5": "2NSbHpvtCxevLT4Ga2Qw8o3uWuu6yjeP1ypNqeVtkp6jqARdqtttXucJgTSiAFsZUMuR4PYjKZVGXPQGFqXLNo8b",
  "key6": "4izMcCVyQxM7XoZTLPcrzJLZcWBYPUsDjFKAVEE3YbejS427Q6LJ55XBuoZ7h4PjHAHwVpi7ccwMpaCwWWPERhfE",
  "key7": "5EPLEAaVvjzwU7y73MxWScSVUUDJRKA5NghXPHAyJvxHTbU5hJeHpECifdMtyxupUH53WsENAz6zNdEC7uUTZhjz",
  "key8": "2etJtRwG1AKzW5ubX21YPEZEoStGpshyQZbD8E331vNsSZNE9eg6z4pLgBAQfb5YRrJyqQcgdisfnR1uowKREtwK",
  "key9": "958ean1d1CjPAt8uibNrUh6bLxzWCcGTjNpWnFst7iLw6fTPSNaaG8UK4dKuXXR87StPxEtsEAHnbQWRccodYeH",
  "key10": "5QZHbEwZYf6bjXFRsu83s4b9mcXh6DpWQn9LZbu7VbqMdT7awXFXPdp1ksgrv74BuUaQoRGxUwcXKCzHPftFKCsW",
  "key11": "5hpcT5f7L1vi7LkpEhCgQruL786zsjfsNMjNtjTuxqJGpuXbiQNjGPXm16aFN5mQtc3Vdf42mSGgUpNSFE1V59yC",
  "key12": "669zanPvJsuYtotEh1NWNuvEsn7Z7XkKDCpdDznTqcdA8D2rS9a4vjnbYcXktPx1ZYeGd9Jm1oDgfccrSzHwRLFE",
  "key13": "53zGAr1cjAp1yc2N9vwFqwR5asK13wquMwBR4tPCcvSBgpWWFfoJhmZFkXBf2jXg81fr6ufsSDTf6KvFqSYGueNh",
  "key14": "4PobncENcaNv7ASd7pDP12j5aYWp7bzrvUEbfCwP82TKL4c1mNae6iqGHuLafpDUtuCq6w8494mFivg4Pjc5Y6dG",
  "key15": "4SmmdcGf2KhwForwUd5RYmL16KwbHhKc754joag5T968zKZekvSABKnw26XagkQXgvs3s3EFaLtPF8uPPm2oU56D",
  "key16": "5tZAkqjFHd76damRdX7csDWUMbd92Mz1ArKzSVDcBFUogTmoqtbcSeFjDVp1Tw8T3fVy3QNDNiJsGDHjHZrNZLsC",
  "key17": "uLrVyLrHmRk2Q6i5fanovezqNLgv937nWbbn9iFa45s53gs8boYVQWoUHZVzonuPo1QFFvMacvFtEDVhjrcDzrc",
  "key18": "3d2JzkrmoWNtnkxuMLjnCuu8SL33Qrr4a5M7KgaP5bsgc7tRkVDdMpSGY52V7MZS1mTZD4apkZ137Rtvoifrj1uH",
  "key19": "4EiJ4ZwXsp9dVYRpR1YeM5bBs4uFR7fEReLgqQBvjQBtApUtoryNki9kGjjFRsY9RrKEJCc5JFxuLGUNpV1e8z4B",
  "key20": "5LnsScy2QQnn34KH6QM7mf1YZ8GG5p2GvGXFtMSh214TfBE1RzhmknrnJUFBGFtV8h68pbxv7AufSiPWjRigQwjq",
  "key21": "4tVzXfnQ6Qp47s6fispKFrcUHqSoarcXAW3R3fL3X4KEHopVW4Q7rSyA7vdqDtUdHd3eSuSZyA6RoxJr31yi6UGf",
  "key22": "5TbWyph2mUEGEymDsszcqqi3AV5XJzD8XpatL4TcHWMSe8jpFGqDgJ9BjeHvAkhxS1Ag22KwPFMWa5oEn2x6TsUi",
  "key23": "oqCeyrCMBR9HCHYBkcY9E6YMkm9e5zxWUSXRfd8EGDtvucppMYcmty9vYfw9kRorKwFsciD7BJtcb216sdRcdmN",
  "key24": "2ejYocBhmFQwVTsnjxxn1se4r6BpKgKGFQ1ZjBd7CwdXWzZx1tzZT4Bgegwg5fq2ToypJqXGptkyzXbTasYZ4j7t",
  "key25": "DDmW13EtUW2GJwy4C6jmaYFwv8wU8DbZqgvKgdACwzxJ5yhCVu3vmMn1NvfAE2DtBCDn18ZnihJeijumv9dcdpT",
  "key26": "2DHvFEf6Na1oDVaybCzn2JPwqL58NYProEFj2i3TZCPNjvemx9od3VkfPCu4NgcvMwxjer1dMX4kLwPRP3Q1Pm4",
  "key27": "31GHB9HA8hPYLMviuxMGuY3SBrCQNQhPqWJaDRtwbRCYw7kqPJWsoqcrMwmfMpCgnNhQwcm6yUFRok6TxUzSp4Bt",
  "key28": "41mZeYvC8NeKgK1EZ8AU5dGK5AGtQU5Z1fcTSMu1rvVSYb5riXtg79h4hnfwK1PaVXM8hzvrrFjCoCPQDxWzwtvQ",
  "key29": "5v9mMyqxYTjXKQBLcQcjVgUabhiPMmqhE1jbvAouADeafgYnj2ddarCC266QbsdiQbdvVRK6dm439hskFfw4FDLK",
  "key30": "hCDURMaNgnzWjz6uo78jPwZpcZvekPmD27EAwmBtEyXjZGNHqxbXnBJ76BEJzLwFD6oMnzuSjoPSrvHQNsCWkL9"
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
