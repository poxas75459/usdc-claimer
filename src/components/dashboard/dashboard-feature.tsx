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
    "5Bc6yAd68vtgmUHqMTZkVv1uBXs6XuuYSHJ1Fhfra8pkdL7QDzbJRnYJwVtTgdKgZNnG6SSBvDw7Udr1e8d1wpqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23bpUS1NAXP5fn8KNhtueh5EUWv748Yupjmgef8T7jbc3rpZkTUCXVqPiiSt5W4p6WnmJkqGez4fvcAJe1XjKHcM",
  "key1": "5CiZitsvmveVm6bpzivL7ubJ2xwRuHSvk7pa49ZnXUjbvUocymSXZxpfhG86TCDNBwJemGdc1bMKr6csvvCLdPr8",
  "key2": "hk4yQ973CdQtnNL28dCZYY8ZqEkfQKLHfzapH4rMtKLtJfSGb7erwKiSHDTJsSFPEZsM4RxVNzLeyzn9RGVKjKq",
  "key3": "3wR5dHP97z55qq3b5oErv7VMn5bhgdr9P5V8gJSUJi3urp3ba9mK1DoBv1pbQrJUzh3f1RhspZ7nLYYyn6PUvYCu",
  "key4": "544decYNjV1qNynS1LhePLrTfi8teeQmBYkSGRjyyZQu29KnpDH7umwQU41XtVaZUT9va5j4dsxvDYwuenNBoSeb",
  "key5": "bWQWvnC12EWREcgkq6AdwHoGtTXveJAajhkZfrQXs6C22q9J5SwcLpPjwcFz6yqcuWyQp2WBdL1hK3GmyywweMx",
  "key6": "5qkpaLjyLpMBN6RSQWFMdH268ZkzcEQn3cjnD6gs3XUTKu9d9ossskCAhxaYbrJ6j2oF5379FWwWuxtqro1aWr19",
  "key7": "3cKgikLbjg4W2RMtQtRtue9dtb2Conse3caBongCeJxzJEnSSzBd4pQbDEynkkkjcwu1tDE4pBQqmb4UWCfNyY2E",
  "key8": "64PVzDa3qDzh8THMxPnTq8FCvYuTYFpG3VuZwm76XZ4jyDaimk23vZPh4Bo9ewKkGANo9ynynChUGX1reTHVggYt",
  "key9": "4PhJyKgXkxmiqk9TD5xq1Cu1ic5dsQnUby68pdyqPoxNYCaxchxtiJMcKjor3e7f3af3hMhJRQGvUAQyCs3ghw3e",
  "key10": "NLYVthHMuzoFSdrJ8gozEKjoE1mVPvS2yqTs373YBuRVqFWZmrbNKQ4MCn6u1JCQiSa9gPcqhguHCAS2sN3xgc5",
  "key11": "2XCfiDnrZgYSgo5wYTmdELSPokcVc79NFGaLgK1NcM5qVGLqj4exyrVCsFrmpUmRLG8QeFmJbQSDD7te9Fi4VkKN",
  "key12": "sVSjuxtR1Y9BGrbvmFuwRb58f11vfGVo1ijAtEBrgXzrozKGR9SLcXjawYTv3qqdJRwq4D7hEKXJiPmukqz1WPC",
  "key13": "4Vdh5XZTJaPL7DpHhuSmSTGKX3tVtvJ4G3GNtJBE1GRassgjd76bGfBxtmTnfhB1Uowk9mbTC4tadsr6cFPX6cmh",
  "key14": "HFzo1iF8EsAKtANS4G2xa4GS496ZszvVTJeEE3rUxj7E4JHCRCFJMRuJXMhof2XgrDwb7CkzRUniECKGJXhaZtx",
  "key15": "37tx8NaVBHm6D2L7rQ8iirGmPpXdysBnHfTTj9z6RHjnj6et8SV7XnfrVq6d81RMK1dwHcupmxNJbHEE3PNtaF18",
  "key16": "5BbChb5SJ4w7BvXZFvqho3UKv8P5UeFu6ccxSm7V4jiH7VNWEWpDTkwUUbrW71VWbmKXqZ7dfgv1vGRp7UY4z6pg",
  "key17": "5Regw4cLHfwLMbkquxhZScDtb1VGDut6s98Acwx5ge2UijwU9vk94UyVErLBndymxY9pHCyHboQE7yKCPV7B1NBS",
  "key18": "4WmEhNNfM1r1A3PF3jVswEfJQzCpLvTgTrgtZ3TeTtNnB5ESRbRUac2L9o2hWnrdhnyzYm7miSDE7oaYGsHE6GHP",
  "key19": "59oyn77tn4K5XD9nfScZ4pJ6t5mgcUHXWwHjCJ3jDLjrQB8XwDeMj1jEmo57yvXPgFuJZDbieFtSd9MQ74Yott3A",
  "key20": "5ZVxURXwmcfnt9tzNfek68twY6Ryd7zecLNriFEy5KkqPTALFDGxTy8qSeQ395CHu6mj2HiSx6Ew93x8neytoWLa",
  "key21": "4P141cuxGrMif2XnHEPS9rEFN3ozdD1fKFWysY52k8BNWxkHRr5qmmAy9Eqw5VYRa9QuNSbbyQMNYHWTq7QETZ4k",
  "key22": "64Bx9c2hxVBijD68YwviSKBzbV3tdmftRC7VVrnwXCmPhZWuBgU9DVhgztQLMMZX81us1nNrjAfKMGyMQrfA3a7p",
  "key23": "4yoNADQhNyR3fvTqDvSzyVx3iH7ihC28imH8PUMPp2H4L36FyBQA3aKAc1VmKvFNvn8cBXb3WSu43wbpAt98QRex",
  "key24": "241YNFqc2rfwxDZfkYtKbXRiWH2X4pMjmfk5dnW4MyKWFRFEggD7LuFfRKxNuShnAco7dpxvJo4Q7Ka3qJEBB2c7",
  "key25": "39AyhUNeeCKkGpRmofzhSQEcLSHKk4it3pyX6EkfAhbZ2ZLUBCqo6f94gaF8Chp1AEgM9j5b6ehM6pT8ZoVv215K",
  "key26": "5Zk9X12hHVgzasCvM6HCfLguDgRTC9J9QyBYRPXzv3C2VrLtR7eRBUFdGcLN9Bci8c4FaGWkWBteL1BYbreATKiJ",
  "key27": "cw74WBFs4sZH8GVpmcz7NAhgqT8S7HJ4jH1e3jZXiSLqo2HV8GxvW9iQeGwaDF5FQE1TEW9QQHqFm39EC1hkKBA",
  "key28": "5bkv7yGVkzuJvbpYJt9B2a4DpkejjmNLr7W6AVHdwYrheZjzy9CHHC3biBZL81XuPXe8wVbLUZKDtejrBbudvtHJ",
  "key29": "41vgvvMujXG9qgjyCBojHz2dpLAAP9SPNEvfLmjsGoaHNDiwscoTVHmRUrPFonXw8EvLUckTn4AKekmvdGGrog71",
  "key30": "3hSRYx7SkNgKferJZat9PEZnhqbjj3k6Q9RC7g7HwHaXAKjEoXhoeXFTJLq7zgRBXTAJJ1CoV6sqGPgkgHc1QQgM",
  "key31": "3RBSJ9V3xPP8B63756QVjZJYyE2o79RrNjBD3YLZW3kjmho3RCbLo6FdErB1jYStvRisaJNvBSeoYmr9gp2ncu5F"
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
