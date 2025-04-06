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
    "3q5EooJ9tPRjNi9UZf86mBXPTcHHafw6ik5tN8hFP4ruD4MzUrFtTHSXrzxTR6DwkcBqBkadnukqFmYYEW5vtqTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abGMuWCkiEdcg4x6UkEMbso3im9TAP4fTLH55uVsqNkB8yJ5i8wWxYE27KtxUivY31ZyoJhcHUrVXTt7f3dHbSi",
  "key1": "mSTkV3wLe5ABzzs5jkKNeKbVfKd4b9xZJUPCnEQcAyrnbiv1NjPdM7qsXvhiuJU4yDRRqqg3WPW7Pwp5HSpxuPt",
  "key2": "HcE1yNg6Cfob4tEMX5vj5J5rSe5Ev2zmGFWL5UaxPshLPJ1KSYbzs1kUDk26sjLnAABoo1MXkn4WegVr2VsCHDW",
  "key3": "4zyCr7BnB9VmvimrQFXL7Jo9n6v1MNs3WzdxpnD9TYKD8uWfyJu8WEnW1xdmcCfeKZzWDwhy3GeREMds9aG2Lf6V",
  "key4": "4Yc75Htx241b5p7ZACEYaG2SDDJMvdNzQAfaBT6wynM6m7abcxwcHF9GUFaWvekpwDieVwMdPL9pJ8kRArBZBo5k",
  "key5": "L4uS7CxuUuB57igDbkUETGHUaJMiuh1xcbahyXj61N9gPBLU2mQ7Bk6mRwCeoiwRUYQSoixMT7xwagHxgK7nYBq",
  "key6": "414KPRcabVpoj9h9gGK54hMs6eNG9mSx3P7CgLbunm996uSZQy3oPeUXkBXfLCh4QkALcuxqVX8DuDPPzopkQfzQ",
  "key7": "3a6WYY9R1ERza7AhCQRZ4dkXcFcZvWZy24Hjwv5jNrYAuWGBHfF1uXQqaKGqutzeFvMu8wBPqJ1VQvhnp3rDKwae",
  "key8": "uQMENbZpTsAVyZH3S5LAuraYzSKqtmJsWEiFuJQxZGECbMGxfwGMcGXjQkC1bij6S87cWk1UmjcBeXt9aaR1o8X",
  "key9": "5RX6mkcRzLceZQMujg9tjqkJuhD1jYN3uNCrbLRbhCJt6GAyb53Xfd9VzwpcuhtzvFdseyByArLC3GFvww9grhER",
  "key10": "2svNZv36ySZcqSCZAAwg1RcEdYFsZ3ABdqguyi3rox2BD5vqVbWRWg6t8sWJ8D7WyiFkCwXjxaUVqcQ5BzWJmZmm",
  "key11": "4iF9ZmXBe7ezdgcYbfkvGffFPmk3RPc6ZmoQGgM275jFbgkHvbhzh1mUPzSSfSa1VCuC5gHSxSdayeANTQpNArxW",
  "key12": "4Wh525bzPrGqcqwTjojxP4kHTQVAJ2Huroaor7djEGt3TqdhVwdW2K89vHPS49W2Pdo3dNq5T71kBgJ43AT2oDoA",
  "key13": "H5bLQEfsxioHy1g6iM6aaay2p7q51BZAz77S8NiG9UjHdHHR73J3UkKe65AAzv2dLZYA9bwKeuPox9CmUTfZNwn",
  "key14": "63TMmZyYXFy4G7pqiy3JYxi8Qi3fJcgmAERqPnJjY8Ttah8tJ14co9cfVVCnws8h9E4eXPYyGyDSNCEyiBmPKXBK",
  "key15": "3jVj5sBdSLQqzyYhFSgHACpXL6Mg2tSYGWUWZLy2BqjeB8R2dm9F6ozeTULyjryNDsEVthdKCXMt5sFQtJQH2Upf",
  "key16": "2HyWkXAH2DMZyM1sWDookF3ejCdqrJANaqD1H1LsCUEUHg28kqmyBYHAtgNvZ1PLey8n56cis4NW5EkKPdfCoK1T",
  "key17": "4jLKDaucD94H1NrAW5zSb2G3ByceR7S5fSZKL6VSgkykjchb6vMtqirJUFXP55699jT8svPucYtiV2rbZBQHX71M",
  "key18": "2qEhACWuyvcS2k2L6bM9ghbfVwdFjo8GzpQYurzcu5QaaiX3LLbGAMmWLujyZZWx2iudGMnxP6nvveCUpsYgqytJ",
  "key19": "3izaZMaiicqzbbyuzAgS4YnbGz4pXziA3rQxAaVSij3F9uHdY7xjejtfkezc3aTz9mew5czMxvE2QvMzSV1tfFp6",
  "key20": "5MPja2RtD7TNqapvhCXt98S1xonX3Mu8r5xCak7iYbb1zAx6j8hhF9Wd6VqzxAPBXMxrjcW6fEFG37AqGSHF7cFB",
  "key21": "2Ud9zVbUdj2z2QZRNb3uQPVkLByGKzhbSJFQ5hacdSGQgR14sD9PpND5LWhfJrmmpw38TB9FHV21kVHGigw3YqB6",
  "key22": "SuLKkhFbNxopkZBJD4QKmi6epKszHzwmMeKbSbYMU8idtsc1yxhSh21hxi15WkPrcVEZvnhBVh4MmXCPZqn2UHC",
  "key23": "ALSWdYJDmasK3kKYf9Wz7gVYuAiknFKfX4DbH5XJjGyoz1uMK8h47MLrQCnjnkZaHQx7FJbRToW9tjXygTWqpLF",
  "key24": "2nzuKJsxvHQCN5DRREUZp8atECUv3DfCV5iMYribbPbzfiXNdx3eHQ4TBaPiXE4CZRb2k3xhXabox3iuM4JJ76Yp",
  "key25": "555dS3gjFnCi5uKzZfKsxyye9j6MJuVTXrYCAPj5r4msZuHGiN1sEYFuQTucy9LT6XBZECT5Ghs5aF9ibaMe5bcH",
  "key26": "WZftnvmqsYqUaDUTjsJCHqMm7bPk6jAuBz9X77t4E47C3JEAdSBuL6gdod8TF6ZWr71qpeTETLaU511Jgp5Ct7f",
  "key27": "aboVhE23SHoYMpzCzoqMSiX2SmVLTumg47nqLQzrVYZzErtRo98Q39eCW5eSdced5LBhQ5Z7h6UBBgL4wcDwyfD",
  "key28": "4T7jC9BJ1GMnj4kxJt6Pqdvpp6hJbGErregctpQpRQp6ZTCy54GaAxmrCoinvHnKfoGxYBJDjh21c8SHgnKrTpus",
  "key29": "3y2GZbpLReU41VzSzavAP557KRafECAdAAw954gvm2TLN3R6EVx69MGtFR6B27vxDM852CZcHrjZEnozvfrdYH2A",
  "key30": "5xdQKNRiPx9ViRsT6iUV3ematJuvdc93pvJ7CHJDHhQ6DY7HQAKwBaA5239S2tySBoKLLPPPAbEp9vDRoLXsf2ZL"
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
