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
    "tXGyZqWpezDE6srpcvGWGVRutPxGutkn14hkVDeb13b3ZJTaAwUhKF12K7nUcdYbGN7KJNUBF2YPeoHuX7i392y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBx7gFbSbNaiAbEkfAV6u1tNBnDnvXM74fb1jD7wTVVUesZaPvhfrsq7X5F3BHjDrNytZ3ETePy3Lhyj39B2tK2",
  "key1": "2eHGUXi2enicPWDQHGU4N98o5Zq7jxEvdBddLbUN5x2Ya1NhwzfgRXWSEmW3w4xJPMTtnAQemMdsmJXGQbsQLMWv",
  "key2": "3V9mrdXBQDzmpX2iKie5qp9zYZWfTb2AY4McaFGam8khMaGGNh6YtBYxYX9SvgaCUuP1otGsm4mzraxN6f8pKUnx",
  "key3": "2jwxBKiazUBjenT2Lcorb817oFMA9uGou2pe3QTF9YkjRjkAcUS9GErKezKDjgm3k9vVDp4NnuF719adkBigKbbf",
  "key4": "3woBaVTRiCYouV3mG4UkeHiJTzKHSyNLAJTWDoCZPZbULLkgbu8qpxdS8xJvcVZ7SWg9y2kFfjHjNJtLYSTtuF2v",
  "key5": "4eeqELm8AS2pwxEaBH5XZ7K3dGhQVF66h1HGTdGtVTn5ywkcFo8w931yaxtQcZATFnn3UWSwwAgPSMHtiAEgbBHk",
  "key6": "2VcWujKmD6eZv7CL6WLTr6N2u4FkmFGsh6kkC7L9HRn3PVDETuc8Abi4cxhCBVKAXQWgbgYXgB4wrFJMJzUAJFg2",
  "key7": "4GdjftxoRNJcPeQEVnmxPLJXzTYjBERPhEsK2Xpk9pNWNymMKgqgk59y7mYEhcpDG8oA2mcxvQc3DdrHw1sDyxBA",
  "key8": "2WWqs2oCjXRCQut3CsABkzxZLvsSQLW8NEtSwWPXzf4bkEHKCxjhYD1uBXvDeGrhbJhW3KqNHYfCRJaZ17uMVVot",
  "key9": "epHBATtYecfvXvJJk36G4SPUMVsU4ibtEG5ELdRQ18U2L1PzFWexjYGRCoVpu23cdQgi8cLWee1YhdXc2zvootv",
  "key10": "5iGj4WbkoQxVGVmSKsa1db9r7H7vJtjifooX6fiWMYbcbw6pjARJnv2ksLwHKzjVYqW8k7TvPikn5dsXDJd7DpWh",
  "key11": "4y4H8vqyRY4ZUfyKWfiqjEYDtoS6j7quesxuYXym7hyNHnt8gh7B7MSaVKcyp9fYAaJCbF2BiEKSen8cqCvBQ42M",
  "key12": "4gVxLbtufb2P4gra99mM5Jpucck2E5pEkxvAjBoFxZ2ffBAZF9FjoYGzTixgokYUsnawwd8VcQs3Zb7BxLhM1fpn",
  "key13": "3M9gq2Nh7Y2qXJMw6WALJXHoDf17PgaPRiLuSjHukjb8HAGBgGSfBcScmv9zgasFEG3mBin67XHi95w9e3Xw1tpH",
  "key14": "4Bu1NxeXnQhBy7EXTaWEmRFqdqzafDQ1b4aoTYxyyNBbsDf35Ntu9ErikZcsVvnHhFQF48AA9hXeKd64vTBu2y5c",
  "key15": "66iKSLuBurJMyJPAaScxkTsGsXnjBNnxbAqKH1ZdEw3h1tdnvQjXWKN7AtwPNQ57AxdGG53hSVCkfq2fJXt4MxJm",
  "key16": "5zt5gQSzu4nsBuLvbUX546fcBkDEDZHHyvoWQK1X2CXoFE1qZzJqkVRJjysrio21i8c6334ZtAPP5sQWMfDS5uUx",
  "key17": "aZ6XL38uvVqoNvWnjdrcSTLBJDacZDg8JidVuE2NGyZm5iDL5jza9kcCHND632WtSraXjL4fCAxTWWWLPJHwXTg",
  "key18": "4jFC2RTWehv7ZahywvvqTKi8j65M9Yy6v2hXpSRscG65Q7oRduFfG2J1FQuPxq24di5tnZfvBG7ZSi4Ki1SnYs4c",
  "key19": "2SiDqndnJXzwXSnKf9hCJ3mMzQNTNGLV3usYq93hvzMbFPnFpRTkZ7DphVToYKvRLKpV4QqQjyVz5qDjfuw6U2d7",
  "key20": "3dmhK2iE8Dzk2kKMgTEQzUEWEJb5RhAVYsjwkRRqVkdhfqvaQJC6CQJRSNW9uTpb9UHVvwaDx3GBkocy2PqGPzT7",
  "key21": "5JhEpxcLCD8t4Duc8hcHy1GhrsMUvGiDdYsrCXCuaJroyKmDQu5xocxUZhhUwyvfcPFqFsqcfsiqrKpYrKMWQdwu",
  "key22": "2XZRxDSJyh78tE7XRsrmYVXo9xPkErCJ8Atu7Meqgxbw2N4tXjrBTWDFmZQennNuLPuYMnGmxYmvTT81XHVrfYmk",
  "key23": "4JP73ttSGiSTPHy7komQKZUxHyeBTW91rBWVyXtdxu6MhYjkuFFf52q1bBQRwK5K4KdT61qCgo5PCAQ647rtB3jw",
  "key24": "3en8pA2MdrHDJjyt2TYi6eERfDKkxddeaJD6KEYM2Rm7dXDUZUaL69sJhM1Y2zvHvynNFLMSTopcgTfGzsvAEAh8",
  "key25": "4YvVg1zTiSaAJo1cK8NVhwup1nrXeTkq5LLcd4Qq1RmBxhaURzPDnBdBodY2PmasKudLs2Q7z3o2fk1ojtvQixUH",
  "key26": "4Y7i1DdDS11qqE6vnbPqgVhBzx55Ci55JJZAjfh24sAmzZY6HLNDxdQhHa2FxcDwF6ei9qDxS2ahZa9kbSc2dtcC",
  "key27": "4FeSEDHFyoxUHeJnKgjXbqf57KJ3Mr6KFBxv6HzDYxjdzucZAfDE5pEWbKpioabzxLprPnGVY3Z5BPBXMNXDqDsm",
  "key28": "V1J72YnPnZhi9BAhLDZwGhBzKXfQcVDM1DKtr4k3YdUv9LDKDHxJNnmruxBL61L9Hc6UnwC3djkKap1BEPzrXfD",
  "key29": "2XAMmMH57GzX29XQpdgdmcjp9cGLbr8Ap2BjFq42xDxWksX2zJyb6PSyN7Ze5X6EkzvLzQXQCnG3q5mR35agWN1i",
  "key30": "tWJQbCccrxJh4tBg9msUpVKteviEorN8ixRCYpzLmgQXbNj42YoFckRVpGfJAruHrBmA2DAhVf2xS9hKN8a89aU",
  "key31": "2RCfmiqc8oVYQxAjNKh38TZWrLJyE4GMf7n5Z2fALn7qDyBt2SP9MUPVZ3JBbN1bSPs5EtLD38a3qpzSWiykhL9X",
  "key32": "3aq9UfoAnidMuWADfwFLFYRmmFHzX2G8jkAztAiU98bqwZTBeXBqFHNfAw2GqiqA7BcPZe1FmEsHxqywwonZfwnn",
  "key33": "3KW8T8e6EMHaK2auQ8pYxspayKwMZMakFee3yShk4XY7mhpVvpF5XP1UbaZ1yb9y8FUSv451B2783tbBUhqnuVQW",
  "key34": "5onsGcNR6znaBuJBVnkozJu6Dw1funAaJAw4S9bQs5vuYySjrfqs6cbPLboVP29WrFWNU3s9kFZ8eCTyxpVegUb4",
  "key35": "34ki8MSDgMPs4e2dg7pmi3QQbu5w27uag2ZKschTCRW5Z2eAiZAbyFPPZk3csTNAqUrXkm2AWxusWMSE6kMBJ13z",
  "key36": "3fBYffia9m7FJzh5df94HT2TmoDcUWSJZd2i8GDRsF2MK6LxYfUoJ2tcNGbcTGJcqTHEDX9Rbu9HU8hwsyYmWPMh",
  "key37": "4Fpqb7CSFDap73QDexoUCLHv2asnuQaPgnMnJXPa9PNvDSDvEMF4QY8WBxVXYsD3JpP8g7weK1g91XVig4bD5hCX",
  "key38": "38BXA2bEiVYvugCUXeY55CyUsjAHRZ6hs95krTe6w8jh5CTocsZndQvwHrWcys5xToNh8tvoB8tBBC8XPTESuHSp"
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
