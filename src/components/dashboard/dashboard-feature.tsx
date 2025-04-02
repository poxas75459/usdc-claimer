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
    "2NNjxhmEATaSMCTrLhmpE2ZiNkfdSxe4KbNCw7vHyWpcxJJxNZEXEDUe33WvEiCVsuJNj2Q4VQDcBCnfs5TASKFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8WU4KDkac17HLkbXDH5kfMYQss1Rz35D3ZqTxjVP3PcVj2CYGV7tSUoJaMvfGD1bR9GnzgsAgRDQbDt9MvF7CU",
  "key1": "2hepfcS75mk39HYeLCpd6zTDiHfpm1U589uhfCuJYMEd1uENcB9DnuEghVrxTwFZVSuJy296zpxUvqYMWCGfdKq3",
  "key2": "5TPhHxbc5s9z4QKr1GeyURTnPtQxJbva6AXSUBU8uf6hf1QG5BuB3QrYRaRTfW98b51bEVrcGqDmaj52gEqxQy9z",
  "key3": "2fvHvski1CwuDawjpZdMCRMEciqr1g4wbp72XicjPm3qaDABi921iLwkKEwgzAQRAtD1Dy2gahBoC3ttQkyihTgj",
  "key4": "3FT2odwHUHy11iKvL1St3Se7aLesD13LJkfuYBNc2GxTLcosG6i3K4WSHwPhewoMWpjnjamv6o5hXuTp2dnSb5gw",
  "key5": "4PHQYhy3VryFW8XccxMV3zaCuwTFrLcDHAfhzEDs4UC8hQ5u2vhsZaKdT1jkbXVi3WA3MnwY5yi3gix1M3xw1vFG",
  "key6": "7bVrPsTGW8iLN9n47y5F1Q6miCMXeVc5NdPhzDn7tSmBECkETLUDB7vWmR9PWkoFYGsGNucRWQZ8vHGwrMNicih",
  "key7": "4jTRjXDGw9oQ1QGcHyzEiRWWKiWqkzYw5WppvkFbJXpHH9CrWfbqSSTM8B2Ei9aJKsT1f4L2yiNQzuApM1GU3J9K",
  "key8": "5ZYEQwPfisbuXH5fQYp7H9Z7ABqax43tW7Ciokbhdy2UGhaWgvGJ77qRn9eYN4cMDJXn7g2QXnAQGmNS9qqVt9Qz",
  "key9": "XaCzMzbAwEu1QpJQC4KA8YmvRTP2uZj8Jv5M6F5QChwJvsgG3ay5K1w3KE4ykm23eTwYpaSB67CfRGT5DMD2L4F",
  "key10": "2v5vSD7fV9v7oTGSR7zr22uTEcvoRed1qTchzvCahJY3apxhVXKiQQFdk7QEtfU1YHeRLJPwvZnGzKsL7umSRWVQ",
  "key11": "4GsPBj1SDYaXupD32rW8qoAq6SjRTydd7VLHAEDi4hMks2v5wmLjiM5gbe3aYcytJZc8UNikdDAqtztauMvuVwNq",
  "key12": "2QKmGdkWYVvvWXWb3aVD4x58edw4jeunbo9hf3mHyu77uk7VrRZwZUkw7EED1WmC2ZwKm9WeLWnEbjRJykfitiQx",
  "key13": "2SVjQckMPHi3mrJ8JxHMevzTmoamUgskeynLLMCecgJ74GLiGiQKHgSNqLJ6yDo87us35KsranEnYKsZxuvuML7J",
  "key14": "ZjayTt5YW82sN9D4eiXwYpsHrCoaAZA2EuHAhtfZ5tNvhsbxRzznrmJmDLRMRTftaS197f5MkNXsNaEPRbfkQdx",
  "key15": "4x18VBPCTc56ypYzGuPWcAm2M1KDXGoatW1rsnPufddxFcT8UHUj4efzqpYSXGG1EPuZUuPMtbnof3WuPPHgLW9",
  "key16": "4t5EANRx3wAA92jJJa8xinm9j9GN2abex9Me2CKnCTndwDv9wFVV6iwHuySxtJAkmpeZMsyqmv8BP4iDigDqXSMd",
  "key17": "39behaoMLJqy3wPCLbv59PfseFj9qjqtWmU5DbstDzsmwP89j8eswKUXwGi9W9CqmcEKMXB7bidUgovaLpCFRCKc",
  "key18": "u3bfjn5zYDZDRUV8v1pw89gDq3TudqMTBCXBBuNK5RQcpSsyJVBmhuwho4EQ61REz6nhytbxjDuJsvF9DFiEube",
  "key19": "5S1ycEeYmuuP6TKqumAkxYLp9nQCEMVJRHr4D1SfkCTZ4Drp1kZMPidcFGBtCTG5fCauCXBZWyYx4uvzCE6nSyMc",
  "key20": "2F5uaD7sPxMcHVX3BUHkH8cQ1eXfumHtVhWSti2oehFKPgPXJ97VcAkpkArhNWDTqFAA6FThuqiVzzpxjNbx6Jky",
  "key21": "64cYZ4mSuJQWJKaMBdw6SPhkumBDA6wYwVB1rbuQArFWTP4jDnJE59BHsRwx33iD2Pe6tjHFy1Fu6rEsj5tCyw43",
  "key22": "3fux4b884aJxRBS2K1MEcdxYm7MTWdJAr1hEAwZuvSwXYFa1nR4nBgbtFX3WT8uFQ53tsawoXpMWTKyHk6fSC6Jj",
  "key23": "3Q5UHvK24BbF6aU32gXG3Dmmqo7sydiLVRSEuyFcvC9TvY9NoAnFTnY3hb88WKmaxwGbM97mAziFfYe19BaqNbwt",
  "key24": "3omnYVUkANZYjWjqEyt2kQkXuUw8C7Cdb17jeR7d7NBrbYwqEQKnW1QKpoR7m6sQuNSj3QqGKEeh2bFeCxE7HLfj",
  "key25": "5KRY8HLv53utWeNJqeK8LuKjsdJNXJZC8faWN3PLshyeZFosKGL4rsrX6y2mWegAx1exH64ZGjTgwfeKu8a1558W",
  "key26": "4JFpj9KFxHLe8L3g5T18u99gsZFNtrmK8vmWsQVqQ1hy5kCSgMZzmBqMkkHyfuyataRkftTGJqzB8zPk5AQ6FFHN",
  "key27": "ADJETuPovpS2EtmyP9R1j95U6ZUNSTGHCPVR7a674hY6s8iSxPhR83izBn4CcGY46QrEJsJHAPWNuU2ropUgwX5",
  "key28": "4bbbAtonjWVcfVy1Dynach1v2ZoTPkdu99KzC6omATiRKa4HrehghJdFLExGfKwSVo8woCF2KxtUFoNzGMVoHpc",
  "key29": "2NgB2d3JvQCtztVtnweivPqzjYftrLvUhED8FWhnksNxNHmH6vaGfsRs2Vp64PjM97b1gvLQXfuABHEdYHhEEuXc",
  "key30": "5dZwRW6XcRoAjoqy496FrqXYrXdpBqbpkeuJXh9ioU41Uma5XQs1MUahUK7EBWrjfKyfg8pgHHZgErHz5cUg64F5",
  "key31": "36Zu87GaYe7v53G1optLyEKDbBABsj4rVteY3mFJp1WY3hT8XRkEQqDnpHjcY4iS7hCnHUQT36JvA2UYNYQuYkpx",
  "key32": "5qDJ4576rGb2Ph9o9DGDNYcqMHyjCvxytia3M7bZZhitH4dvd2buzqwPgoDtv1zztBw1WuWTvzr1ZMqwScPaEFE7"
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
