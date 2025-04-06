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
    "5bSsPpcAfw3anT7NnCARubYatEy6ejKhuAEwHruvD6rvqM6XegAhtLRkNCvzqJ4xZBHNiVKHJhnozr97FE4zionb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yXCUzDRyGKn7tdERRbHfkBsKV6s9kasCB3WNWhc1GXMaM7TMsAqu9xsx64PMMPEu7zJgpo8hdNNhzai5CgqxX7r",
  "key1": "3txDh1w6afJRSBz45oBHrfot5oXp4CEAuXro75MiU3etTVnq8NHogS1btPsKfq8R6ocfTB27YU9ZmdtXHpKqj2Pb",
  "key2": "5UTqSFwbWujwXbXEte7t6yNvDtUGYsKz1ELyXzEtJ5sxeAvQs8oC1fuezvj9fJeeMV4YkdSzQ8dM5qySQWZWfQKA",
  "key3": "2THYCw7ggJrPm7xkBCFmdn9AKRyHkHvsVtif2SppTLhrevMdDnAnJPvVMFvyNwpg4JDSWpseiVuJDYFd3Vw9EgHN",
  "key4": "4Hu9yXZH31sMd1seQtpAeWNPDrHLfwesaYZdcv28wpboQTocr5rrxtwji76vNHjt8PmB4WKCdC7YR1aff9yQHMWM",
  "key5": "3FfShzkKxR8uxpggrHsDsdgKhhkEFsx9FxpMjEWKGWUpkDdY6T73zwZuMwCa83X7ZBbE41isca3wMAD4EsqYjMea",
  "key6": "2rD7TBBWG8CwZ5Z3ESzuY3NHWXWD6yqYQjqaK19rc88orHAjrdmDYazPQv8bWkXQA2SpdfxJ4qcGTynLGiwXThk1",
  "key7": "4jRCVgmmWUGQyeMoLepqz8WZHMyLTzKzAnEGP6cEnM12cFw5yttwAZcdPfyjuehak7R2NJKASec7bjLnkevfxXoj",
  "key8": "2JVtMRuAAaTQesQADxk2qh4QsLtCEiy9abb5LwfroTC3memLkEmxMBDeUiK3UDqkwBviKAaLJ6PfWrM9D5mGFex1",
  "key9": "2r4QriAK1BjD9SawMVgSzfeLE7a7mfuWV1BefKGg8Trg54PHZRDSnpGA6CcWPmcG922VkUvWGryi1bjqU9i3RvhU",
  "key10": "3MvCR3cshohtp9WZBJrZR3f3imgqVhfNwZnWXkzYSYGCYPzAy8tUeFSiCDLdstoQotcBmCNtPYYPnb4TtCq3rmMv",
  "key11": "2yeVz1koDAehfUPgAV8fABhmTGtXkzh4n96D413ZAZRLuEMZcfHhHpZs93wHGSi2PkCXxtsj6u9uR8fmVvavfWqV",
  "key12": "2uzNMAvNwFsdtCvBbmc65QJtN8ujisiXYt5GniFRWsCKYYUpuwKx58XgPpUst7JNT8g4dkqQQL7m61m9DmeQoCE2",
  "key13": "4GKSAWJBZNYkBpDxdz4mYc8BhoCfxm1jCAoZwqv9ZgZR5U2nHbNQGUCx6e7kyABQVr9QBYtQTqVtsdBW89GPh8Ui",
  "key14": "2VT1u94oqZotT2DqB6EeAeXwE4Yj2DhgbShBNxbFupYpK5pNfeuaTza1Wuhuv74t8VYAJmbbtaySxJfkNMBJQ683",
  "key15": "52Db41N3aBFcPgycjJryWuKTQHRfJE6Uqqmw4EGFdyhoWBWk1Gr4C84r5G4bnxSFoRYmaKfta465zpxJt5yvjRVr",
  "key16": "3LixHnJDitZfCQh9ppMJF4HPxtdSgsRf7sRzzvduFkw79DKBJ8hwCDbws4WVFLHDiEiesqxkSffxjW1tGf6x2Aoy",
  "key17": "2LLHtrHXRVbye2zpx99z79uF26XBhpWSFGfqZYyS2YCYVSEi4HFouQGrvLqiMZABUsznYQeKGvPtUcXx2JxGYww4",
  "key18": "46hcMAPhH9EdLuFqrgDuFqHmFSHt7YWYUcAEDpabuW3h1ZZWZ88sesygDYvkCYRjDqNPxcJ9rW3ydib9s2jmQ1d6",
  "key19": "31SzS9PMz226tqryczDBfDELK3YMAKWj4RiFiyCUZRoTieSr4x5cMpHwjK4TY6EoqAaYtqgWr9N8t6k3rRsDBmuT",
  "key20": "24Wq9Y1cAW5HLqXJXUtwe4JN23TbJbKXH7qn6L4VyqZuky7QRTJ3hiFjRRK1mbeod5pLMkWNhCFCEczAtY9MrKhg",
  "key21": "3FcspSTUUirSBwKQfkkPsM2ft6KuqFFZ9uqvJmGMgj7WxGMiyZNn4BmZecZBTB4K15NFHNuDYvzaNvXhjtvUaVg6",
  "key22": "NTGMCun3FhQk98kRPoAL77SiYuiWyHf773JQYXcdvYvTVL2eCSKM5xNiXarZbEh3LTBH8fSU71Lc4dKhktDwcnY",
  "key23": "2uruKGPb3qtiLaBRSXSXxiunnaFDPVeGVV4yCTbcZHyebALPQkmpRaYeurUt2g7vLyua6nMn5pm5TDRFHEN3uKDT",
  "key24": "AshiEbx34gGFMrizTaTX4vcheuHNWVBTbgyFWYUksztG6r5q3Bght2kCnUYXvDgvG1w91sF4SXnovJowyPXMNXi",
  "key25": "b8kHsi6LQRi2TvHzXxSpiGHjxuq326px5KwP3Sj2M4mrAF1wexDKAhPwgFpAJ5TRvwbTbmvtcWciXApuvMH3Mf8",
  "key26": "5dHz3d85SS7GJK9u4JNe7BhoqPZB2NzpwkNbMAVt81RRXrvhdz4nMKo3LvXEVKHSJcbV34Nsyp8wTWpBdVC4WBpj",
  "key27": "3dbqqjRAwQXo48uxsxkz8vGwbrsxnGkFfZ753xGBJ9ue4xpAzYhjzAuLU9EhR7iP3FsMqaRHGHgHthhgeKv9GmRN",
  "key28": "5oeBvpBfGdMSiPyKcCCKJWGADMeF6inP3y8e6vMpk4kBWFQ2teR9G6dk1TGRGvvPpueTdZkmNd2rkoVZg1q4z79q",
  "key29": "2xS9BN34Y3jrYWHASCym6UapkN3UE1Mj4Bp3XmzZPBmAf5awMmzZShNmjG3LYmarRS5MT3cK3U31HtHin91HHkQt",
  "key30": "3VDh7tvnau5C9m7XkzRD17v6nBsd2KcRVu3NJTabetxdtwsFCfG9TG15Xnx6J3YWcHLYZdAWmZtpoqmqVHL32So7",
  "key31": "3iYUbJkc7djGog9oRmX3GVyG1UfSAv6frgeYC2BEAd1kALD3YaXoFtHkFcyJipGiPdvV3hwGh2jheNP4fjtgG6Pp",
  "key32": "4sgyFGV977TKp5qadxMPgW1ZuZVeiMCJ1SmtPhkDV9CQi8DiyZAFyaGaGf7KwaLYc6pcdjdr5aEMchr9RrCqGjFP",
  "key33": "3YTCUoFmvxLR7BxBVch8jnASzFEzW3y3Pcj8C31HFfXS7ANDfr42jn9dA2SPGx5v7NH2N42kguKYrRhtiZQUuyee",
  "key34": "356oy4Dq67mqm62rf2RV2NeU2UgFzLD24JCsQyqg5qNSnyUqi6vUqcPMXT6vXe3AnUTGUPR2ZW5pBxHWmAyDFiXo",
  "key35": "ppoLieMB8NgbUS7H1Rg9hv3pZoWgQD4pDrBheY8yJW3PJiMwXLGH2C8JRGTWaugvsxuwuYQUS7DaZCQvJTFQV6s",
  "key36": "5ccTFmcqfJDgxa37vyK4ggb9WXtWoPipyjLHLbkJgrLjoEbdvMUqdoZCvKouDwJGwEv4Z1KfcxjKQZ8LiZrU7Zn6",
  "key37": "4qpTRbhS5LAvg5MB2JAJBsa526z8KwAy5LUABXRjCVMjaPtFtSLbrDEQ6q7DRan3sCLFqiSWx3uwhXjtmJJRQWv1",
  "key38": "3Cu3Qz2gM3midWnocu3FgVXbZRQFAuXpWTKf1N6ZiVb7ozkzKr5Jf4ArAodKhTPKzX2uXt1QXsenPoYvg67kSWWi",
  "key39": "3dTJHMCGmS4jct4bZ313HfaUhE1A6YJuqJeGMbU1tobHbFRhhyVrcXwdXMRYUSa4BcoFH9Aa92aaqWDDk24PjvLA",
  "key40": "fbxAGfg8F73bkvoqRUPaXPGk1mr5XKh9X2QX8f1HBTb5UTvaskmq825H1xWS4PV6m3NHB1q6Mn4xeGBE3UtVxoQ",
  "key41": "2ZGoZNja6ZJBQDfyD7ieo5yBj7vzHcLT8JLMVErFL6DscNR1z8VuztHESHYuvTceATmYyY6YZN3dreMKR9utZyq7",
  "key42": "4rejZvng7kNJZoDy8k45TSDS87Erir6UivrY91LqEERttLdhXoKRd7WHtWnzaQHmtTcsG1pjBuc5H2q5cC1DG3Yh",
  "key43": "5Ksu1reVKarZf6mBP8w5twh2zZJnh4mzmffxf3bUfL9wNixyqoHptvtqr1iBZRQHJfjMsDqACoZawV4uC6cVrrxB",
  "key44": "449rTWMiucQcNzdw75wwBMZkZPjDknZzXMzrgfxwQY7fiso4KpSbgKa179DpwzJNbMDvDw9k7mKsojH6EHjXTMQw",
  "key45": "2tkuR4HxWcKm9EH4tnyAjAv4pp9PywXbsdoBs4kVetqemQk17Q1NmSFzrwrWFDBLpcW8AxDrn6WsMnMqAZzw5ouH",
  "key46": "3CSZENChpkrUwiVFdYehNpkX3J9ECAoRC2nAc7Q3b9R2neboaeYD3MeS2RkGygurgaGw7jep7u216xCvSRYkogwg"
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
