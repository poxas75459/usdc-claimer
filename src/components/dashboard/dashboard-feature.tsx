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
    "21dyiTs1cP2PjetFAGbapaXqpbfWynfbzvdbNyD5gi3zPYcWRxpiuB6QQ4wLg4ApHck8fWa9nYFKqnohJh5XpPrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CZCUFgcEoe3xH5xBY1Qeu2aVeSyZn1oQmdvuKyRMHnY4YwsvR2QxaScBoADawPwN7VGX4CMVwASop3knZoVNFJ",
  "key1": "5LZrU92muub6WCQNs4BzgSDd8x6qPYixKsvy37KPC6b52tmjxFJRxEAbiTtBKdM65oChZ6TnoojhKo4QLsydFMtE",
  "key2": "5myU2bZZUB2r8y1vJ1NYFUFGwYwfGHMcPpb4PDh51hRpAwbwrmawMA7cuyoTouS8vr3ovjn3ffLibchMA84Nig4D",
  "key3": "c4EGXNPanat9t28RYih7vgvd6TAi4tWQS252M5Ni7UjxFox3Kbtva3C82ax9AUvSPP63mmnHqUdAvdwNwFGcHvY",
  "key4": "4UnzXvS7ShjTBuPBjLcHYb5gua166Zcf2r6SmfsHQZ3sNxTtnuTJK2YaYiosEap2Q6hVVmAVZqAppQsqeidiPfL3",
  "key5": "GSZopJkEgdrbSPJWgfPC57my8JvpM6u6VfqSH2tCtdAyLUzUJ5j54Wwcis1MvSoKhu9E5rBNP26VRNPFug4516S",
  "key6": "SgfBfsk4S1e1jAfuKw7q7hf3LgkE7cBHjsUVwE6i2pLKQ65yrQRjdphhdngqaGQXDCcXTGre7uGTHPg6S8JnVDb",
  "key7": "3jTjARwTJaDEUgyDyo89n1Vu7hGYe54eosy6H18rCEKpU2hTo3HP63BVDvMKYkE1nJPKbMAP724P95iv6SNa6xc6",
  "key8": "3ZcCvhiRbeKFdbdu7532uih2drh6mDT8ojzzqDfSgHWQxbbJFp4UACYQbXYMuD5YJn3f6FfmFBmFgebNZryiecDX",
  "key9": "4vihRo74pGFNZFGLBpX4NaGDUmAPPcUDGaSTp35kvQ1rHffEFDnM9fzmBGkKkjJwc8jtRC6LpUcfkTccoejbjcAq",
  "key10": "3AVvg8sb7V6u7aw2awbcmuPTrJQ4gzFrcruRv4i8yeW6vy3xqTsJ6tBNf6PZgRKFVEMBNt2zGmyYyE6QZWPYPUsQ",
  "key11": "4AuYB8H6uK23RCDFr3wuJeZXu537hbquC941b3GvWFxvJwuopvKbpYhTgnxA8UAyjJQh2snpKHxnkbys84t43YNJ",
  "key12": "3zgDjpJnsWZmN5gYRkf8NkQ25NJZwK8L6KngjfoN7jUSx4JNk7Umd6mnnh8mZERyAnaxWZX3b9cjYr547XSEZrcr",
  "key13": "5T1s9QgAC9RyYARJrVgE9Bj8uGZyEC79P4jhYw94n99NDL2B9PQYmYMo1acZ9469YNYhYjdZc2nqXJy42PMv37QZ",
  "key14": "3c7LJUB39mDKBQUoPcVgN7nAzc9EN16Fq8pipZ6YxwzbqyD1vYpZWUEhd2Dj7oc8gmqy7VKzpKJiZoKgfBe7BkZe",
  "key15": "4ih4rPBm9W9h51kbzuVrHh3vBhVkJKWRkV7Agauga1EkqC2oavEx31aycN5y8ci5iJuqKQe81NPavUXL9q6g63ND",
  "key16": "5rUQkuLBWkbmkhb31i8Gwc2FYGQzoUeMhkkk9Eg7kEXZM1166EdbeZbEmaF5yw8XxRwawmRLUdtMVBPecs3va9U6",
  "key17": "2njcRFmeJ7iZ2SDQqxd1GD5S2jerVzwGEfTkjVWyPrbt2gnAbJ5A6vUcegkTcAttpHUjQBse6p8d7FYTFxN1AXfc",
  "key18": "446QaDpbX3XwxoWUd2yaNTN1yATi8VV9sspiJGoWF9aCsVE5F44LPa3K8urQiQNRns2LB8m2HMmpLSUXbhAs12Y4",
  "key19": "5dQWF8DbcUnk1195322AV1E9SfjNikr7iiEkMDRd1B33BaPjjKkuLE1Pqa8hPDbBaRA5r3mJppfRbhTaKUv9q9it",
  "key20": "2EoocPhoErwboj2u5in6HU8jcoyVpvhCCrHkhyERT8hR9uj8irNyA8HF7xKwf4nnDQAcZPPG9pLnDMvEwKaCTuzy",
  "key21": "4Nmp1qWNyFqwkMVNUdpakWfjnHELMxwpgtvs5kgrfxT8mpp8XwG6erycs9EjAa5rL7LXtW2kYhsHyGEPt6JQPVUg",
  "key22": "4aBe9Wp3PVBGYcwq5iyvsdzpaDLceB2q8C6jigcs8npSAqJy95eZyCezYHF1t28jXTehPUVkjUb4JXWcEawGaotx",
  "key23": "5mZV43hU2r7gyY9ehovcVh4CvdGToVcNbo6AiBoTRL9H7EethU9cXAA8rRfZkRrK3PfhYJPhjyAVXWF2kGiDE2RV",
  "key24": "5C5yXpxRczaxkQZtwUMo78WzVrgVd4t88GS9StcmARTNMMEgBnhguqF3wLAYCCwm8dgjPsqP1uwzeZ4vT3LGcVBZ",
  "key25": "5RA3DYSDoZa1kKr1KtJuYbcqzh9NCv9thDjjqVpgXfYhMQKMHkexHLa2kstAr2WsZvjgUBacEyt9Xe9SKaEvWLvN",
  "key26": "4V1LyAQtEs6KxRHdiLFUU5QtpoVTK71oMEfmqopjP3Ko1aZVLn4DPz9hYk9Kx3Dnykmyrk3dEMnViCYpEZtVzucd",
  "key27": "3ETAbjzsjEdmP3KNFNd4QHwsHCi5d1EWF76i3HTvRwBzY7Swz6hh69W5RB4QamuHbvAsg7Bx5YwjfnE3aewLjZZN",
  "key28": "4vHqvoAk8t9vxrvdqR7C3AdWBZ4m2qiD4BvwGk6DDuL9sTLD8PQF9wLLoArRpCpX8uL8oBaW5eTGitGjyejDPLx1",
  "key29": "AN4XkApGAD7SVCPD4ZBYHsNVuSjYyiTkU36wv3YixUpzPu4J8qx5xf8mosrVGG7SPnnfiyNLqMe6RVvm5QADJKN",
  "key30": "ELgHTVKguiMLbL6C8s1GTsWvTukZ3oMrKzPyfMM8UDxgHGdDRW83bPuLD2njeqaZp1AZ8z2MBEWANbeNJ7McvDB",
  "key31": "58uTPZKKQksBxopme86rt3y6ub7pjdqWEDrqHUt8229qaEW76UgRK2H7ZnS8qLRr9jq2qt9c3j5WWokvvdqFLna9",
  "key32": "2zVJmYCcdAUatdG3GCyS77BG5ZrCsbQSBrS8AtKqRoAjXAVzFSynFKCcrouFGx2gg3ztomVguuH97Dh8zmu8Aj5D",
  "key33": "2p1AB1vTRGHJRCrQoDuQ7wtUpnkh7ctDZpHrtQCMSk5YKMJJ4b3LS8rmD4DBJje3b6YTvoSi9nYUaLdY5GmgLSNu",
  "key34": "iS5T1CvqEUk1FaSznvZPkUvEXJFbN1PULqH4Lu5pbUaNyTnd4w91Dz77DRmoZsPzyNzqZ2JUW4v8B3EByyG3UpM",
  "key35": "2A3jnR5AasP46qoAYnUwvLTnW9tbMR2oAnLrKhaJJDGDhuPGfUy7NBRvmwcTg3Vr5TGH3DEUJcppFEewmgj7fUxY",
  "key36": "2gTFq1AvKXyfX7nLetFTE5Ac6Zj8qyedYyAoD4B8AwsRBhM6fa4iUx4D3QQtFsUJi3oo7Qxgw2ob5uCMDpKGnSUy",
  "key37": "4kffSv16khP6vU6XL4fLVvj38MZSFRr4tCEg5fJJ3PnUF5Qxcub6XAym7omgcrmXwFaSyCTWUDY3ukDCQNEgmJ45"
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
