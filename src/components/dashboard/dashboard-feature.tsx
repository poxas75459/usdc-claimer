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
    "3wh2uMoNjZFJJKxtomc7oQQyd8K76qsXNp776g6T9PwhuBYGgomEHDjQuQVvjTdqsfhphftHzVUCA2Wx14wS48ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tzfeobLXqTh3964LNMMdh43JLhQdNnVAJKHbaz8pYWbkVCJEBQZ8NMk3VQii2YGxX5QykWsQEooNZrBwvpnAVvm",
  "key1": "64Ub3MN7sJT5QAPUfEPkYHh7uy1i4EFostYbjNSag96ANkwSckJL4uMfTYqXMrSViQ132Dog6xUe3f9K85CXEq94",
  "key2": "3WY3uz8MaXnWuH19guRtyuKP7oPsuS1KqSy5K8bZTQTKkSTQoL4Gc3qDFprHiLJjmdUGXnBMuizUqaGrAhEt82Mk",
  "key3": "3XPkFKHqXndMijrUXp6YcLLjYnh8bwdQwMWbueDYHMfREcLHkrFKDw5MsvyZ743qLAvHKodjW1hVnCbymZcLJFz5",
  "key4": "3bE3fFPUr44K68dXnqe9QJezhum7rZd8Zo65ST1zEqwUH8xTvmLbdvTBU4DS133DhKsrUDsHisrg8yQfAZKmTGfK",
  "key5": "2zK1b2JFpBV4XnUFx3pEhJuDEjnsqDCuFj5htmjMdLipGbaMrGwADgeHiw7SME5bwaXHUxq5WmYpYkxeMSFZqw6x",
  "key6": "5ffoKQdJ8DVHaNxaRvmzpC7Nrwe8Qe1CwNeFAQJ8zfj6igBhXQP7rn1S8LELQJMzVBGqB7MSaphsmounJy7bSCE",
  "key7": "3tasFRtsRrCfjs6UTukYh3SoSKswzgj2i5z44X3CWDsinSFcUAhurbTwxscFTDyndzve4AisboJgEqxNWoSh6e3V",
  "key8": "DCTzFhy2r93yJbbQ1MLkgJTznEQUtoE5nL9fT1DMnZSMrCBU9YeX2BhmydJ4m69dA6TisGK5NsGjKASmLShCXfL",
  "key9": "3D62Xmt9p1SK77GsKuE6MJ3Fe32pYgLxvyatnAP1DnTN6kR3k9actgKAHLWdACHsEkyZYJYf2v3sXkEEeQqze9PK",
  "key10": "4EwcSTzxjG5gWWmJVxMukh6qKAHYJSPN5EqrXSn458pzSeDzjXrCuVzXEp7fE7jvnorHuij2nhiBHFnhSJRxUibg",
  "key11": "2Q3EF57qyzQMkHjzzz8vqXU7ViRfPowFHE2MjtyMHR3dymA1TBP2k6uwqgkT5jxqnZEe6kVqWaWQSS1nBLMFgLnH",
  "key12": "2WUXyynfqhUa6psn2rtcATnMt6FYe3sMabp55dQrSeF3yfmTv8DecrsAZdXps3eXHXTUhZaQcc9eMksioU6wjRjf",
  "key13": "ZabGdKG7Hwnqi4PDZcFc2ncqybPvxU9wNWoTQMDnWXb1DTV9hVWDznMYohE6GLzWhZF7upnYf2zq2XqDc3imcV7",
  "key14": "66Tpic4DeFirqNu97AK8s9PL4EeEewywPK7Tq63vVKmR2KqByJiEd99wUZ6KVuT9iqZXjYHmrkebApz2MrpFAdZ1",
  "key15": "27ZYdAuRgyBGFxq5rvGU46AD81AnyehkyNZVtijR3auci6rkeCGjfB41uCmLcEbfGpjg91ZRUZm4PCmA6pXD1Ugp",
  "key16": "4LM9uFMHFzKM72puhwvxwcKEA7PtEzoLYknUVV9PTh3orqyhiUaQKhUWWr6g4GHFF9KreH8wBnKomFQT8kKUHyGY",
  "key17": "2ExjFrHG2mrJausukBETozoniThCcY5h5sUjLutZ4wL5X4ZSambVFcYJdu3SzDYdsH9K4RsjgJCacfuxohqbWJ7Z",
  "key18": "2AR6DdesWRdxWMjcwxe1qJkqDkRtePU1HijYtrg8dcKWd6V8tLD33ZrVJi7UXKrDa3gETQRwAmgTp8u9ots7HKNa",
  "key19": "z87Krx5zZ5DPPC1QMXxWHd4Xxmg4CYxMuWcQsDeN1wBJASBH2bTCuCGrYaWpwrPXpSYaRa9pw5Fo1X2YHV178wY",
  "key20": "5pcU4wcRxnxZzXdDa5nTxwGZ1pLMA1bDRMT1idpAbGUgRgj1oBxFGvBSL7dC3jdGxLnd9uUSxHb4ibgvuQs413x6",
  "key21": "2tu5aujcmAoaHXVU1r5qgJ1m8Vdr5t7PJ9hd29KCEGnNcm5haAKZvgZQyz6uu9Sj7ja3jj7nHFZMyV4HumUUNEcM",
  "key22": "5NZcbkaTHSrWKERrZ4dfgFQZcV6Ki1TQXG3GaacXBSRuhvCa4XsgXsXAJXzx6BegkyQcWpafyHYRaz5GMjATHnsD",
  "key23": "AEbqKmBa9h92AkK4T3TShad8d74DCmBo4kJsrbVJWChwoE7qDdq94jBpWTVt6xnc634cVCN4e5nYqRiWfh1buBN",
  "key24": "5Ck6oPsVj1pbBshnGUo7PqkqhPpjh6EH2FrgvadAQFUNxdzWC4X5K7XC4MbEv4n3iEsAYLNKyMq7ypiMpD7nouy4",
  "key25": "4go9CxYoj53jtvADMhrAHZFhjhkKwMdy5skiWBRhUSF4ds2LMtZNEUqQMesGP6TJNqcUxCvcZU6fxP6SKJ936D4Y",
  "key26": "5pDVwCY1sdEkyMSVdndsCug1uKYnctjzq4uM3ynZtWcAe4GJ5fko6qhpaxRkJFEHiAMEsf4AFaSwmPyp7DmgKZxH",
  "key27": "67fZTwjRswLJdF9pShpFFThquau5sctyyrVMA5Mm9KrzqyMRcL7guu5fXqfdaZMmniPFsHEv8JcqPsMZDfxE5t6n",
  "key28": "5aEjzXT5jQiA1mqAC1Zw17ziBfeJGRZSzjL7ahVkjVUfKcDPaD4JAYT8Tx9Jxg8v8EHtx2e4hJhHKdqiic9sAMmD",
  "key29": "5tdXJPijjCj7Y1wzjwer2uuNTGsqUqrELGcwMKpJtGrg1G6W7E6afsFz4aS3fx7QfWmDCi6v7LNmtMYJ2tTyRu3Q",
  "key30": "r1KVaMTZXizrWX8emm1oKoB8eAx7oEF7GVsAWNW16ZCMaKEVKD5JPQExWtuevRQZMUvHnG9KmS5GrLhHT8SUoXD",
  "key31": "KqSrDs4xpwrsR6LYt2zdGXTZL26S7AvnpXMPBDvjZjpKKkDHy2WRCXCmQC7Z69iFtAdc9kUtxqjdLz5MExemfRU",
  "key32": "3S86UGw9AVhdviuVZGqRLPQcgx8uUTtqccLYUqyh2YkyFFKFgKJWBNyhg9GqfmubBQxSJGigTitZgxkmxtyd23SL",
  "key33": "EJjDAo3dVdVUpCRUviiFXj8QnUNseA7tyazSfY69qoH7tBCCnjVdueBSPtxnDoguc9p38tF6B1afu46WhwqzKTA",
  "key34": "hPbPQKkAkVTd6L675gFQF6o5tuoGW84M1N1SBFd1UWe6pXtowxzPUCMT9kP9Y58nzHwRkmm5uJnJJbWprm48Hm2",
  "key35": "3ZSANad5SVrNex1z1DvPD7SzdF33ijtdTky1pqsJGZV5ocv6Dpe3v6LKZu8xN28Nc5zg1iGU9Co6CgeCqAeJjCHc"
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
