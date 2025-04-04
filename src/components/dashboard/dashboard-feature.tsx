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
    "qtSoNiytkfjviqWhzzZzyYtFjTUGEvTpEL7HYVRuCHGcXZbSb2rjxfAYJNCzXArk3TnXYx7ToGGVZzKjqBsjoZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537vFKqTyNgCdk1N8K7ChtHRh76dGeXVTtYpG1k5FtyG35w5JnBFUoa3wp9u2uqtmoKZDMvvACMFfXjcRi3mXrHk",
  "key1": "3RieSTvUUKgJeSy3eYJc3y8twTqhHvEevNNJbBiCmw2Hp6dygbVaMwACfeDxqM5RMPoWzjNsDGGBntZM16poueMV",
  "key2": "41DCTY3o5Gm4gnmQz9sVPSJPZzcpiYbLQ1nCzefACMMKJadPgbNHgVhtcZzCzfAKXiHmRX6DwCSRP8BGM76sGr8X",
  "key3": "3NSfwCQvJiA7V4S7MvfnQGp87FgnMLD548FseyhDW1F6KrxFbg7sy8gyzBeAgecampwmArhDQzXnJ6EL8oTzy7HY",
  "key4": "5DELgKfP2GKPfziKjqfDYQ5dWKTyRWAdGmjWbBig6uVCQTCYDYmFPtA9JSUTLP97CNMq5LtNvpnBadNXR7f7n7my",
  "key5": "xakZNS8E4nuqHnyekQVHYtRvWpmszGVWMjZRrCZYkCv8pMjKoda6iQCi3YMYWuidZ4K2deZEywuJNSdNDvv7GWf",
  "key6": "5XbPTsmAWCPTNkwdfoAoqBNbHttcFSBSbh21LHX6NAyrcp6h5wm8BedFy8Bi2WpVcechKXdTEm269qrYsNzyfuvQ",
  "key7": "52yrvgxwT5fnB5rjeNBQ5uzZs6AofDjvMf4ZjagiLAsjHSx8TeyzNjTLpCQE3dCKPnKSUjg2sRTpNfgRLsP1iPzU",
  "key8": "3Twa3jyTdKMNhwbzQysmQ5rf5GLe6s7ZKZ5uxTvy8TwXoMC5RGup1XHb7rNCNWRXY33xpS6NbRN42n5ZEQviy6V4",
  "key9": "4h7Z93nrBPm1A2MgB8rCfEz2sMGRvQWDDXTwW157kVEHGN1nuqFTraT2PvyAeDxccaEMiN9nkhLarZRCecKaDapX",
  "key10": "37psMzUaXmz73534vcG2FaNQU19F4Aie41Wr3iY67mBvV3x29oPve7JnsV7KsVC8RAQkWtGc6RXvQeRxkETsZZyr",
  "key11": "4a1RJz9Po4HmzKhPqw68bM4ysG1cMjXrqzwXcbhHBxmcrF4wR6c3nYb7LAgx1YKE9R1gLpetSKxFjTFer2uDki66",
  "key12": "3gxyzPTxe8vhUW9ByjLsuS13dBXNLeHHssXqEkf8wS4czsKJobFSUkFqZ4zYiYHsrAHt5vVjtfX1UPZYEGWAqSU8",
  "key13": "3wy63ayNRdFeudfZ1iPbY4YkzjJQJoZZMRfw5FpWp8s9NdpzgCa2r346oaRSt8XeHcq5HQwNuTomD7bEfikUzRuq",
  "key14": "4HztPp7kcqbRSrV9BfEKr1aHYjTyxJqjKr7ZXZTXeGWhLcFExLQudcPMm3iK9e4NSi4h45TCRrDcMVfpSUzjfXx3",
  "key15": "4YshULEd7wV1HXyEuDcosge84Ve8T8zvdFTgGdRKBaenpGAuA3hjpaXpbdBCAwcxVy73ufqtN3wYfBjF6VoUfWyS",
  "key16": "2ochrvqe3k4QJwQdUNfoHysDzdtxKifVi5ZhWMkErWN1dwp1kCXpKvgwZgBR5uynBSt6C6Fx3Py5KHm83dr9KF9r",
  "key17": "Q9XPpvgj3ADjB2MoU9JvtLF9RdXVT7BvHqbMzg2Becapo3iGeDBm5Bpzw4rs7G6qVxfFAu1VMvKk5ZZDKjMaANu",
  "key18": "mN6uMRMAtNh6yyL5NycwhqPAzuiG77efWiJwbu88gQZqvEiK953rWZQ8tzp16yABzyTb1qaQJP9ivn8zr2uY1Ew",
  "key19": "5wjgkNTj1geYiE3cgAfaWHDFAQqNNqqF4MtjRAAkXHqPgh3oYpnNioyJxnMe62rTCgBKQ67zSHXkyq3zekBVAKbC",
  "key20": "iFMBbMwTtNiQma6eDkMWvR6d84Dg5k8BYsmKxLoZBXSrUXGKzUKEVtAVg11jnDdSv6VboM2Mter4C15vBip3GXk",
  "key21": "4P7925yzodunSWtngGEriX8duPnXKw3GNpaWrfDYxoj3ChgVTHSgwH6euJiHHPz89FikTiU47rxjXsax4gUwPECP",
  "key22": "njPAeYfc9CCjw7oaq4ADh5gRGmx9ontouY2ijkwKpDHrNhAUAgfgpMy9HPRazfZ6JVNS7q2J9QaXCxkXoHn8bqb",
  "key23": "4wqPNh22kHUe7wcogmcwvfEETSs2FjmT6LGv68gU54XfJPQ6AQdVnNDYZJC2nPH8EfrHUpCF8EpeidkzxCzYtp2k",
  "key24": "3VMw2f6ejGyY5bUndMHsuqKAeqVdsFwmd1KL8Ej3pjPTYJGKEeiNowFTRzzNrVGjVP9E518tpMPJYJof11QJmkYg",
  "key25": "2dy7eiVigC83gh94YaEP8DNy6gHrebe5ko1ciSopDSN7z7yf6RDUHLfWCX4wThAuZh35mRLwUgKJg6zGomRJ31Gm",
  "key26": "5BxVE98xsAGMQnQpzDB7JGmn6DxWnkKfjF2tP7tKBiU8etxrR2WbX4oPRxXw3wG2G2TR9gzrgob1NtLBwbnKNiPZ",
  "key27": "2j65S5ovvZCk9WYPRhXVni4rois4pGXYyCjJEaXSpRDfVvrQCpnXTcUhiiUADd8epVcpBLDFBLcP15iVGmsGcXsM",
  "key28": "21tTvGG7ELYXTjtq9F2VaNcvhxmGasXuAMKN1XQiDs4UfXFpsDRaZJSkPgswaB2Ft123mc3DgDFZeDyt7ZCndgSn",
  "key29": "5aT8M49BoaNpi244vkBTL42v9BUmY68m2NEXbyXSW6w9pPgcimck72LY2memyHRwvrsfBDQCWJDESiXZRGsybEZN",
  "key30": "3EnfzMRWxyLNtxzNqmaYaTLYg1qhAJ5dM8oky6Fk8NkiyKtJGPsCN3xMjU2xUGz8fwr1mDhpyoomRsve76RWoXHh",
  "key31": "3nHbcLpFyhhNduuWPG8ESJ4Cx5tNUnNJnozdAVF2d5ZF4Jcfc8Sw8kDqAb5W25r95xVrJ3kiqin4KjdjxUTB6q69",
  "key32": "3YrZjZFUgfwdfXVujG1LK5btSTaDQJ7AgYQmBJCZmqFfCY8Zpp33PSYCxRYDZ17t1ZFrTcB7cqwgk4K8W6CDkknJ",
  "key33": "uNw55cLiMLibfY5uiaSXpSL79URci2SpjxPPXa9fYTShZdpPdGjYSeyKzqb1jvvta3p62kaCFKTEpCAmMohrfKX",
  "key34": "2gDbDAveKAFW8u3SsbxQuPrZbXYUb3iwvdxQ5XZy8P6FCgQViC3svfTspxZwXheHTTo9QAERRTfaNNdRfNUbPS3B",
  "key35": "2sw2RRvnE9SifvBumHwAYnyURuawkfujHFdUtw2EFoBxm5EiP8qgrxMEf6CV5C2EDxq5hJqmhyUGrbszRfCagC1N"
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
