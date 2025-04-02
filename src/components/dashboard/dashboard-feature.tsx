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
    "3812ZaSfWpLmKJwTi6SoBF2dBdZQwhvqPwAPXohEH3jsesaVEbXvFAh3T8JhGnpMUtDRkPSfP1fCfjwSGn3XGxiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBiNieALaxu9CsH7sk7NCkXUqjiGY2egmDaoHtGg6ihdLuiBCBFzDFWx9AXBGtkwNKxkAtK3Usowq4VfqpggPiq",
  "key1": "5S5GYYhZcK5TiNPABqCykUE58UKhgoHSyqF4wTNtr5fkZSWm3hpKmT1VnMu4aaxczY7HsA8wk6c7yZz6hy1BuKnW",
  "key2": "4ecG2iG1eT153gWVYG6Ub73qYcmYnwKVhgbkeUeX1mCVoKn7A2BjSAnG3YLbHgpAKR3XWBLrCzuMFQcgenkn84we",
  "key3": "2qxWLuEKgu6hexMpS7uY7nKRTW9E3qhwYHYJzJDEtc15F4YzEBWJbiHNhwYeNfZJwSjvjN2YW71FcoSGecZvarat",
  "key4": "33BUvxJSzdTcN16d6kAsyCVVJmeM5ruE3LXBQKkUYj6gwDcXW2tc6ze1ncGmTPVj36dhAshxgmebBWV2eQvBc67a",
  "key5": "wByjiyjsZBvJMNzyCvjPjC16R96TH9avQkLXTy4Lb8ufbxKAsUG7h9xpmrXT3siySzVNcb65yR42THXXseqeQ6f",
  "key6": "4CHNefNKkg95F2DTUHJdKMhCWQyEqTKA6uRuqdtcX8RZ4DpXVrW4bNU4bcroDJGB6Cw1ag3M2BBsxRLDVJGp8jbm",
  "key7": "FPN3VmVQyQ7vhosLLDCdjJSFWRE5QJG2Zuh7Mr6mGSjRQRv7Us8VSgN913DueBn9nC1xzEA39fhuNiAA6eeDpK8",
  "key8": "1Zb43QmzzFKpnbYxXtFo7v5GPFSoMQaRAqyYUyEvsRPYPNzKuSgTZvURdRHJnmt6T5cS8KVoxicjKuBWF36Ja5r",
  "key9": "4wM4QG84ACoyHCXgNtsX774o5Tm7sTQhesfAWYZiRzHXPb6vfDRpdbhAsWVvGt19SgivYJPwvbEtjdSF79bfdwQP",
  "key10": "5t5ASWCj2B1WYJrZkC91YaDMVeEQci4cNUNA3mCzgaQeonJg6YP2qiuyhaHcJmsTs9yfWobefbQGrnp7yrMSEt5q",
  "key11": "5DHweVRhvoBhFdS6GTJHxBy6f1RhMoQxNB5bN9rhJ2KoSbmjqav32VFRCAD8apUwEPQ4arczJoPzsNisQKBJ3gpF",
  "key12": "3VMU5VxUGxB8PPHaZgisqowDsduwwhRZjmZuhu5XNUtA5GBkX4aMTQzG6zi2fX2kwe3c3cJehuk1u9LpU3h5JwcA",
  "key13": "fN9vARuhJUFqs2ktyUgihFmW4zb53a6QzTcE2hxf5y9iE13Hccbcci1TgFMHAjCRZySw9mPwhiT4Z6Z2xjnG5Fh",
  "key14": "4GYW1y4MtNBgRNffBVBXYSEK84Ej1ferSKvgaW6pEaDRJTVNmzEyGQH1PbdD1aYpUu26fSoj5QqGuCu9EmjXi2Jp",
  "key15": "5e28YPH4icrCj6wdb8d2Zy9AgbdDFCWUMj97JDQsieiavaB8ewNRZYFgBQFWGQkjDUURKS3MYey5vVkHb9hZsxJr",
  "key16": "3pmqP22ipaAyLPNsNP1SMDG4M4EWM7v22Z4NrEWbKb22bBoGDPhGF3K4K4ZnzVRp6rwe4evwyzmqmwvzdiDXf1E1",
  "key17": "5ByC9jmsSqfyKVbVAcij89SN1WKPNeu3z5PGGM8vhX3mR2xF4N9tPV7qvat2cWSig3Vr6HHmj3FCtJySxiWD3s22",
  "key18": "rVJwbySaNNX8TnN4LjnyfYwDv64BEFn7v9zagohTtqSweBrkS8C4GZuRZPbtsWeCuAQwSXUtp5MUKXyXAQDpgaA",
  "key19": "54xh1mdAQ84R7XLYmeRNHwJQMHcEe7rcwpXQaCM7Yj6SkArZn9jwCiDx6DumWabo2BQ66m7zE2jRzoKwfTQcShFP",
  "key20": "5aeCKpcMUcv4KHkUYTh4DmBW1HKCn9yHayzM4SXMzBy7nVm6mPRYm9rR5hNsGmk6rm21UL8Si9PJChEHzfde6isE",
  "key21": "HgDPE7tyhqNo5nzoyYgKfEVaC2visUJpqM1MvFnw3GuvsTWofWtmGWbTnykgy6NWJbnK4UmEqJEjWyFvKDJvxoX",
  "key22": "5rVDnwcrfbMkAJxCwyV2LyhEKsPwQj9dHnLekNHSJJZZJy8nCYoL8mJRhKSH1cbKgDwM952SXKhfpxTw1JpMQhvg",
  "key23": "5PU3eKRGjnTNBNEuB7bpsapAWFKqaCUeMQDPFXQYgCcaxcPf5y6wvDxi8G4SeCs2jwtDHzbe8RyDLhoZHY42NL6L",
  "key24": "3sU88LaXqTbaBVvNNnwYRj9XDvAmGiCyaTHSt1ieh1CdVgVTVCTcHiUU2RPEEao1CYy8N57xamQ1SM3QXrBg5aeu",
  "key25": "5BpDTBPzNF1jRNGxwkX7utHKFPHMe7S4opL7NYRRu7JohLzsWReDqrnPVyVb5EKbpgV89LKpBeZ1esvT42Qr1s47",
  "key26": "2qtdBnv26o4xzQ9PryqDzBRiFi22umu3gZgBP142PuDbXC63vGqy2KHsrcYxoRAaFR1jne54KrnAQ5oxMfgyvWKm",
  "key27": "5ipPvhrgAZ6Uc4HXz1KAG8dp8XQ74qbjZXssqvazRbBPMDYHrd5EM8MDyNGwzaibo8r8AdgqvUTnZ2pB5Xb9oFyc",
  "key28": "4WxhNViqDzwfvNjRgUbkKhh5kWhcZJAKKEYLfYBMg8x427XEaS4hYJmnbahFDB9jM3TnprXq56q89jfhVKCEXhpb",
  "key29": "k1t76qZ1ud338uYZSD2SevSh2ydQvjUPLdKda6typC6sJz3Bwjdqsr92o4Uc9FAPkJ5KS6pU4iovy4yPyikTVfw",
  "key30": "JsP9H3nVCgHaJ3mQZEKtqshcHjbDWkiRpVBs1tvvJe7Wxotu6StKKx9AdXKGSryE8AszHFdfo2sFGs511R3KL8R",
  "key31": "5oFwLx4EaUCDcjTrRzB5t5UL9LWarU71JsBbQirLjohHeVWbD1nxTVqeikicULqfAwfwMBTG7KYQxK1dcTrshMuR",
  "key32": "5opqKQx7LLyMYWkjr4vA4Cg4au3UYv2K3ahhyZEkFi76AiFt46tuAdohU8vCh8uNeGHuv7V41A5WbfuPesvWYLRo",
  "key33": "5iqY46NkG5wXkp6mbHDPjxuXd6qjFXBRvQgKkVofDe3U8zDw8SrKN8QZYCXLuceg5W7n1gvqJkQBGW2dwpy2rQAN",
  "key34": "5Twzw3LvtK8WgsWfCj7FEtpqG4kMQdg7wfKkdBV8vDJDqHUvL9Y6cHegy143YaPFsTpDULux6ZdMC4zYje3so2rA",
  "key35": "4RFNNR8RoSDMgRv5mZhrDLqQNWwfUbd1akd5d8HdJqcHtjFxQ9qDjo1oWwnwuUyu7asarTuyVweHiCqJ4ejz2KM9",
  "key36": "nMDcth3jcybFvvGN5zgDaUAiWm29YKxMXqBWJZFJrmCZw8ZYC5V79aZJwJf8Vv3oj4zzjeysAXmcGVzCvTKHDid"
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
