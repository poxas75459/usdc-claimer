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
    "239zk1H4Sm7z3DjujhJbXjJGC9MLLQMHz3WfqZyn8QAJRdBSx2kLwWXTmVfT82fgXo2AYNTpaepVQXeqjP5MQRTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mq6oqErEy77Rv2RKdNbo3g5actwXc3WpgqiNCqrJ8QRcUQ8QMdKRZUQRP9miYHndtzjbqKBezh7fAhkysdxtcLo",
  "key1": "3W7pRmsuz1Qy9HFuURGzsGQG5Zpc54wurMFU17Q14AmdmGSPRsSx7AGNsb5mxbhMnu8dsQeEBquQpnxRfuRvCTyJ",
  "key2": "3WgGubUcuAfEEHyBMX72gKmGUoKrwqVbmmbmf7NwrvmYWChfKiLn4pNMKbhvweVJjQJAtwGePUdhXk2HG3LcNvEX",
  "key3": "5fuMUuJK7tkq13sLNa8DPDjijW1vyAA3z66niqJUMgXrF5Mf4F4T3wP7oGTscWu6KeNTwo9MJQ7BoRJaDPMcua2J",
  "key4": "p3iPLygK1bcndTK7Q5ZEPFCfAX2BkiBo7oSGVfUKL7RT4PSTzD763pYWksxRmDtfs8SGwxNbotALuGyLe6Lqixx",
  "key5": "3xj2mn1AnjQaSeKWH3RAByNJ7EAhxyEAeuLKsaEL3tCi7GL4mwfohgzo3hnWhnx2epTPcPdYpftarBUTXX5qbZ6u",
  "key6": "5RVJiWvY1iMXvko73qsn9oQiqWusk49nuhW1u8tHmjdUyxVeyySVmAs55nUcfGvRiK9C1vXWwC67ynXNanH2Aphi",
  "key7": "MKbRTxEmD81pQbLHwfxMvHLh9pb1D7xHnW4emRxuz44KigAWk65yFbyBGFhdEcA75dQ7wt1gRunh6Y8hcuVwEfx",
  "key8": "5PZMkZfUmm5Kj3JLA7A5zqqDM89X6oY8hFwZmCW5KCY488brUSa5iShEsULZtkHQtqEuqQRWT4pkFJqZ45Fd3gWm",
  "key9": "2JVCjjATDmoM5dvyQbBV4NwkEMrJmS1X9ppdxWbWRAgJnSh6KePFXoLd2XM3QtJPzGcS9g6FuUoaCTb633KxHh1w",
  "key10": "4FJ5CcxvU7ESxdQfaRaHJSkAUcjufdteoU3ZMx57KwkSPymFAAnBXwgG1YUXW6TgnpeUrBYmQYsCw8ZzYCL3m6yR",
  "key11": "4ZDTrWGZdczLRvHnM8VMRJAqNpXXkePuDv47wCZEpUffh8itDFfWECFsHgzyJfPeSDrik61P2hGNiFgY3VarPQvv",
  "key12": "5UscwYVmHnnJNun33jH4MmXzfMafdBqcoxvYDv2UKWkPeNLsiD3HbyzT1Cd6gwgTC8YwnQ3aBv98C2GhuN3a7GG2",
  "key13": "4sAad6b3ngiyaRXs2xwF3dAbXGy7bwh2RLAtR2F4wQNw1CZYpLrWw6KhLk2vBrR1bJ8xSQGKCsoB4XCUkRkX3AZ1",
  "key14": "2DBb53kDiFEYjirZWsCC7EUQsFTRX7dqCfEP1KSyiFVkSw5LzRj5VmR2MGgjqc4r7MHmpCoAtF9tU1wTBMW3GnZk",
  "key15": "4UGX9Yo54uijryeZDaqfopnZ3qdt6UfdYLGULj8gVDQNi2FNH77GuLQ6yxyXPtNAENHuTUU5Ug9uoWqasUrkGA1t",
  "key16": "47otzQMCqJv3H4ZvoiiyTKrWfu3hojWsiMKCEivP5nckKvoGcnmLDnMtchDE1jNne2Y59gm8PjYrvjJVRqzfYydv",
  "key17": "zh5DArMnLFvF8xqoeHYzWVmutRsooWyqmrL62Beo6Qs6JYmhiWtTvwAtngA6BZTWSSnnNGCBLLBk6NmeSV1LVsu",
  "key18": "2EW4UjvFMhiMyKUPUhStvPyMwYjobDjWtPVziEfM1qy1Vz1R3qpGMAUSJgeGiKw3iwZtaf1VkMi8NUCZ22sMfPbP",
  "key19": "5UVG7fRhRvrjdVznYXgmLFhTwh5rrUGz3MKiQqH52vhmyo99SfFC5Vgbq9LqgZSWNx9RUb8PoAda4G6XGxPM8RF7",
  "key20": "3wkFbvnSnDr3TgNMeBhjzGQBkc4QwnsG5B8i9HATi5jWSPE3TYNHzz5GiPhNKYnahrYRKgtq9ys2UhqWoTD4aZyp",
  "key21": "3HihXqc6a2acbgywFB6sL4wQXP76eS5c4pbJ32e6Rht951KBDDj7MbagMXNxVgEkPC46t72jg266EjHRq5hmtQYw",
  "key22": "3hCvA9XCHvEYuJHnrPxfHhRbi4SSs55bQgrzuXivh8P1pE9yERhwkaZPM318E5ig7uFg8Fg6wapw2TH9HfnE2dk3",
  "key23": "2ntKqiuANPFayvgCyGLzUqWaEc26a17F7PbkjPq5fr5TMkTzaZW71J8hZxMNXwbpBMjFFHpos3qqpSVQRAVYbYP8",
  "key24": "2aMtwZkfj7MR1Up6LG3wfEzrSksqFwZ6YomGSgKTUwq4vAHC2BWsX6nd4wVGopKuxL9TGgxsR5FgEZMCZkMwFwg7",
  "key25": "26ohZtYqj86BQf4wee6nk2D5fekASaaC6TPoEBndheZBGpnGktBzKKeFriUF7DrM8rEai5j8vzu3UQmhRdxhUr6t",
  "key26": "3ZPM5gBDu8DFoMYRGGqg2kJijM8i3PAdMLRKTPuUpYA7kpQ8XgoAGjDGaUJ9NTsXEyPXwr2jXgbEFF97PKEAzcZH",
  "key27": "4j8jXTuiMdegXsiW4TmFKpux2jnKJS68WeYfKzpHeFeD56WbVQnkGWa3jm2eHLEb6c5qYD6XzsnLNEVWzbfpvATv",
  "key28": "d16XpETzVp2rkPPsPARdejnqrmvZATyBbGUC3eRMWx9fmhHDtZM5fU4Upwb6yoVKNMDevyLkWYXdA4C6Y55ccjw",
  "key29": "4oVTugRiqH1PkSm5tL5may6qFGKzK8UPkHrHJ9tZiKgqRNhv8a88AbeEB8RNqTevSV99CZngeYQYN3gDNYg59wkX",
  "key30": "ZgYJvugN7c9bpa3MbtDLHWKY7NE3QKfdCUsRenr35x1pLRQ8ftuxKxy2UMHxTnXpK7vk9Uy1pfYmedSrD6qwedL",
  "key31": "nvyL5XCQj4agq7qv3PLfFYybXfygzhRPs9UCsSQk1EFLduoEghsZSqhxA2iJME3XaYGqZUuCYiyHep2ZyWqM3b1",
  "key32": "4nSXZc9bMP8u9kWXmyZaRRPyBkWzvu3zcQz1fuUmjXxbyo8V2QdrJrSkqTMkZnLxfbXKJei77KWXSVn5G3McDqgX",
  "key33": "5rpXALHZoPXwdCWRaxgRKkTy7YmSQY1eQJRnupDvTKT38ExKJvVvwQECGVooYJZrGv5DTKGEcHLzfymfq3TCi4Bz",
  "key34": "5fAXTTMKaEjsQzCMEioZmjFVD8v85rrAjFhS6rwAAH64PHR91ao26w9Fkpbc2f2PFF7qhJYUcG8e6miXatYsjfJr"
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
