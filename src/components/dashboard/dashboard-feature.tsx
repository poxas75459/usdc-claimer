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
    "4LXwqceR1EnqafxP1EazYPE84xYu5QFLTUwyZwXway1A3s7nF7Ht5JJxRCfCjY6JcYksFNnpjmfcqZygL6xxQzSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebZZcqScRYfxPRFUYANgpgMogJ48Q7shz2KgG6jxHgEkTtZhgZNnj2d63YkPEUDrTrykSYErTMUS9WWbQ7XpY1a",
  "key1": "2rmRmDWJbWHGUKYjA2zN8A1VAgik4QAEVJqqaXtqkMfm128QxPVAizdWyjbCuPtsjicHRrcBa27KPbARVpmfCHnB",
  "key2": "6axXtEBYB2Ti8AwBYoYjAwSqVuRebRSVfTA4rPks4oapWh7N6xHe23n3nfZ5QCevP8e5GKyhsxSbwXEJr5FoVK5",
  "key3": "57PHvVfq9ChMZRQKu3oMnY4z8LKApudZibkLEiniV7Xg1geHewowoKzuh7UfqXXqLeCBTAPxzwcbt9geyzcZQspn",
  "key4": "3uQmcqfKeSshLafTEJSPyV9uUXgMBSMJbTArdVyKZLXYEcdDftYoxiBWjbKH9wwZvhYH8EL4K1bGx8KCwdFRgUrh",
  "key5": "L3dtfo4a8Zw4Yh683ZmWjoDNU7pN4M6MHJfhQCUPiq3PfNbW8cFdduuXvsjqNehb1QtVoc1Ygfc1agGG72VpSLr",
  "key6": "2PX1b4NszofAVPk5H9rwEQjesmZdyJ9fQLqtTvZjdiVDff2A7UcAPEa5vLeGPNdwS91srbWWR5oxTJHv1Boc6Fd1",
  "key7": "4Cumt4pKAecT5SmSRgDMJYu4TfK9xU1JCi3mhuueRXQ3ZrriwgqQ962doh9z77qx4kydBtVgLojDT37F7YkMcRis",
  "key8": "377SqWHRQMpuGqAxASgkBi2pLFmfhXHHA6KnrceLaLfQvcqXohBM6xXAB6tAFRxhc9Mgp9THsQxeUmGwuUTKdD2i",
  "key9": "3vfY2iKkCdyy79So5RZ4cYzh9Ynh9mYSCyHpgZQCYAr9ubxBQZujcJQdKdRFhQ5xGiguZBNwc148zyvkekSosHF4",
  "key10": "4BZ4AcHLJRLP9P1iERZTMFhV7Tq68WofL5ymY98G6Jqe8iB8irzy77gvj9DdsyuvvLzSUHYWuFQuzvK9BFzM3MPF",
  "key11": "ewzdFLcroAgFp35gaoYscyHni8FPBjNE1dVCbUnc9psXWsjdVkUdmYGsUvbcidUSisbqzp7Nou1JiWEeg9CHuHd",
  "key12": "2awMVqs1Engcic4EfQCdZWmeMCdMxWfrtrfmbvJKNs5HrvD4pzKg9y9J1mv8cH3Fg8csuhwtuqEdPBeqYEaDQszc",
  "key13": "3EiFDxoBX2g6aHzv2pnb39KTZ5SjyAMdioQrGQF5CjFV9pXbVdKJgRBn4NnzM2wf2M8Wjhva5pwCMQJMddMWT7CD",
  "key14": "JzMifC436uqRY9e78FdUUNP6eB6c8FY3ZmqGX4QQUmbyCDntoaZ9u5aCreiLRsrtHk5sQZVTHoaE5epQAm8DyLY",
  "key15": "28a7WxtppdZ1QTGdJe4ksU2nepSLxZjvUpP5fA3AfZ5FPGA2edrU1Sn8GBhfEk2xW21pXQA61TQpHS9amuGJ34vY",
  "key16": "4AxfPEibyXdCqorgtSETcsZAHmyCng8H3j3LHDwhLTKL36rsTjQhRkvx96ACjpXgJ1ZRSEncH46aonhphiWArCTV",
  "key17": "63eANrr6PjYLyhUypFAt2sThN1NjTh4cJC2huFyHjrA7BfiPfh2ai8hvCibZ5sf73GVFd18XcSW8wCXsiL33UAsL",
  "key18": "4hFL6UbVMdXq8xQgYN8NYxKFW3NLRzgvvivbpaPm7inCpnmzKicyTPD52q5WE1jtm7bsqBJjAKL4JJoMg1f8xhae",
  "key19": "32sPVJgaAiPNRg1bNmmu2B8BcRjE6P9eynY5nfuwPqfd7THg5RYB98DHBcz6iKYpVW7ySmtutiy63WN3vR7X15uE",
  "key20": "EoxSodjjcQujzikvf7HiWMGdZRiGAY5QYBGKDrUMtLNbpZyossJoyHur9zQzY1CgC75XJVey7pmpT3Q4x3MkumN",
  "key21": "5SktcPRsPS3stUcRUUAfxp6cHaBNutpAdSUdTLoMuSrQrYk8DCTGKFo7CFQLvBMFMUAzBRnJXxDThWdUcDeuQBaW",
  "key22": "HtQAW9bmDsNxk8aqRdaa3x4BfVNsNd2KRnii9aeKFSSLs4aQhrSZGjfzwYVHCPqBdEmJ6MRvnpZy8RveLBDFPd9",
  "key23": "3yeenBC7U3MLusYdRENTqZVDvgKftJCiDnWXe2Qgbo7MFMAo6mLaLTUgvFxW6UQUBEXWeiyREo9Vp1L6JV2Z9xYV",
  "key24": "3tvK3wdcfC5zhbgXtnLKSACPE7s7skZ2ggue5SqtGzY3QZYjNys1CvVn6zXS3K6KrcWpehyKp46P5nKn9RUxZmmH",
  "key25": "m4Uz1QqD3wi32HBsM3MqwBo3usKRuSfpxKLF2VRnY7y4U3649a8YAJhtRyca7M5KYkiipPEfQbS7ENEx5EgHpWe",
  "key26": "4mCiZVYDsFfvYRTM68naetgCk45Xu2iaJTjSbJgLAnqQZ7CnVxkTrumLSffWTW1yJjgXBAJJVfAbyUAgNSgkYSY"
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
