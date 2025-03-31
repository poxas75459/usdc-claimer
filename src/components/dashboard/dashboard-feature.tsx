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
    "xUMC8vo9qpwRy8kRLdpy814xiad4pMDrVC1nspKe4AsUSutUQW3KwHAUuQx37iVymFMjivs999rkyTMnvv9A9rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h6JvFiyhcN1oEqAPrXoeUcBsineK2AZsBiH3wZydnm2EbbtY3uZkKMZsesc1PqwviykXi3esCFMg8VvUD2VB2FA",
  "key1": "rVivsytgkydgBPsJVFp87KJsrfmNKs6bUJY2QRiwTCiMZm56PK7N1pMCndmjjXqayHConnvKmaA5ynWLyNrj1xT",
  "key2": "nnQjoP9rKkT7RHHdSF3TLdMo34xECPSwD4hDqQNgB8zpsw6gSArbAmQDfvQt99cTwRuAf4SBK9kZWQ2rSE2Z9WA",
  "key3": "2YTVaCH7KgDCcnz9Z1dEs3K7vb547zihAoPFBsrdSZi4z98Ji9Fs7z2jZ4bzccUtCacsRsNSs4dRDufks4AWVWC1",
  "key4": "78Wff6zt1dFoDBWSPy2dHPWnh4V6soHRcp8TEs9fxgmwdyhkkaQbX7cnjhGFwZ4BqdTAbcqtjJnsCprponPmdao",
  "key5": "5vAQcGPpkq749oSXkEjudVGnjDuiMerapUCXnBg1qUpFjKxQ8r6a5A6rFS3gbySuscyGn8vE9G4CHHnQezsXMw3y",
  "key6": "4oQCQpy8EpGA4RrERTjQDrU2zASBgaVgU3jQ4qwnNX5KDDa5bpGoLAMDrKaJE5Xey7k2n4HroudcLxFP71a77HFq",
  "key7": "cgY1zgWgeaHL2zLwWmkFKr63kYefD7K7tAcvxUacv2SBs43A6uCnmTebTpfctWWhxwqepStS7b8CtbbyZLxhvkt",
  "key8": "3yySA9JFciX71XqpW4sSN995vWJtw3MhQXPmHjFhcz6mnSfaPNevLa2E8aNoHrpDieY8ADBPDu7JMYfe186Rhddf",
  "key9": "2uFcC2g77ehaxrrCeStuzHEn1Y91ugywBZincRyfvUQ9DW7SWcHhBSkwyGmJJEo1FPnL6h2vmsdr1iPmHmZp7Vzf",
  "key10": "5Lqvxrr9YCiqX4hQbUtmu6aXRhZdF9TsMwAJRReZ7B1DkCqgvnd1ashRGDdxapaB5pjHrvVDYdunTBXaRaJRgQQQ",
  "key11": "4MYHBEKpNg3QJ34qT6H1c4H1TnscvuDRYNjsps3Lz9E5RtwKEJAki5594jm93KgHLoHNb262vPVQtaaANZicMFPT",
  "key12": "24yYL9CFzXnaGc4WKM6YcqtXo6AhvN6FQQD41Ecr88zPxyqiw8FHTfgYqjzjd8vnXXx1xch5VwwoG53NG3xhqmbh",
  "key13": "55Kwg3fYoaTtRar2gAwoaF3TYMD769u55prYubwR1eRhJgZxYTrzvE2G5q5vYGZ3QyhuviLUogJVvmG88geYrk9s",
  "key14": "37UcfYywMJLtyNd1qHh4ezLLzivVTXtR95zS44i93DhTVM8UZ8b8DKoE6D2ZvcM9MadofwhvBGbyvAt4uk8xGuTc",
  "key15": "BPJbRCFrxRQJrDJeZ3tFdgBjTXa3uKcoafFmpS7PBYt3Qf6HrmAtSkjTJsE8KYxQ5zKaRKuLARVGmGBUErfgN5K",
  "key16": "4utfmQShgyfD7fjLJRKB6F8y8oik9DN2JcAbJLQiW1D8F1h8PPWfbREC33Gw4DMociLHggLYoYzaj7cuwawXM9UR",
  "key17": "4ePwxjz6Mu7DTu11nbV7C9x9xfxXypp2ERjcSyBRUZhkocEuqLvydeEJoynKPZJW6eR5D51rqoCZUAEUUrE9Cy5L",
  "key18": "9fS9ftC836dQqJeHdAvJCGfErcN75btHJv5QVg3L7Jqcv1hMKLNo5qsFprKbAoeMgrhnwo9PVwgRtjDJdbG3j64",
  "key19": "4ouJtKcHDowgzwYw1FxwrqoZShTFXSrFLuoXx43EPETBPRc6kchQ77Xc7G4y7dh9ghbYjq7bkvwFCVQRndJ81QA",
  "key20": "3cqnu8rM9NLgpBTye7YuqL3cwtA9fqLRTbobnjxJ5XRDEWFFaCKbVuu6fKE3npKmzT5XDkvtUNPCCFDTqv6HqVnk",
  "key21": "4V2egCEkBhcuSKqW5pdkC8fGG2F1ZXUAwDfsgZ8gbmpXxPYfSX45BtWtne141rfCcxqcC56PDUBSsJdSQHNNQjR4",
  "key22": "4HsfLUv6e9aYn2vm9pPbYDQWCco51JmUtRyZYgEVF6aphFq9nEJX9YKEUBzM2uSGaYEJ2p2fqwLdaVh6iaMAUDbu",
  "key23": "43cVkzRgUDnwDrTfyHB5ruoK9yN2KcDLpHH2kuGCYk12jgoHcZ6iLdCpr1dNaxVHSWVNAQtdJZjcxW65bMyVgpjz",
  "key24": "3YUSre4Rwx8GN7gQcM7RTKZc7kG2BSvJh24qwGbyPtbmYFFT8aCbMqs5mHHjnbkP5hePohKSiDVgzAU38sAnnKHW",
  "key25": "4tYE7abRa83xLPS85dJARgSs38zY2tabvZrGvKZSJ9kyKR6dLSkztVQZVwXp9bu39KBrNu1L4ch5QtcjBEbwrLEs",
  "key26": "6CRhSzXgxwS9oab9ki8to4ZPQ19VrBHsv4ropFQ5Gr1MMwmNwHt955nnXBq7E56tEFb6FRryDSh2MoGtB7xFhRX",
  "key27": "5tWvcimkmAehwhycRNkrXwECCrQoiWmdCKqUjnXPsLLygd7oQgv9ricQXfXXVTZo7f8o81jT3vFcHwGLcRAJRUJo",
  "key28": "j7zXV68X3X8NVwjTzvnuwbKrYoUv3s4cXg46RHUT2VRwsGUJU3LrVVDjQfmy4hARQAgo8CQpgdtjZC8RLuFTfjs",
  "key29": "5PjJ7chr5MAqbYfpRKodAKs5cXyn61PY8dC4U4cjYB21Q2MWhTZjqycTLbx8oxTteajoheUSKbyhDXzfsS4KT8Fm",
  "key30": "2qWZNB1zuaCQ5zghFLwyGLZ75z41XeT6S76vbo5oNLc1F4cvvbZnEQPyhTtTw9n4YieWvXJNnU5xM1buw2fYcfV3",
  "key31": "yx8djLPny3MYjfqaV1bAmvebxbhpXSHai9NeBsnWkR4NogtHU3w6bhbXsWSkZhkZdGnPogN14N3SNtJ5HFWkcmd",
  "key32": "2Qyvmi7z5k8vSn3ddCmz4mAnDmrdX1fX3VXoyqTQya7z3RLZD2KQRw4YiYRdMQwLomiDhJWyUYoxHxNAdWzKfau6",
  "key33": "51XbKJNCTzookJdVNzJfT69ZSSeUDZtsiqQ1aobWGUMErXDS437cBENVuwfVF9PQSN65cj8rTYBPP6mp1Chfazyh",
  "key34": "HqZDZnpbnBARTXTrYXoAjAMT6Kek9ZuizggzNMj8R6vpFijUaWSTuh2nitMeTHvH9w7rqhvV1ezXi5CpLkuycAP",
  "key35": "5VsEWPz3a1xDZYiGun5uPaWigcoS2GWepW2B3CK8PJmSxEEv3LgHo451GUh6tVB2cMu6FRE7xGwohzvBMevoM8Ln",
  "key36": "4UsBNTiJtCeQaAYzbiNLwMXfExTHrLTJi6zykrrBQJao822Ljh8cQVKvMNyD5tfCGQdupfHGwmuP2jHZSycvLZkb",
  "key37": "3Bse2yLoYSqueTjinkfQF6vxdWVPVeF9p6VnxLfKpnG3vtMwN6XcNtw5ULPRPyvrnzTtwvHr2ejwj5zyDzU5xXwv",
  "key38": "3NNb6z7ksPwhLSXKiQYTmc6R6Zux1H6zJXQ5iwAqgKUUWtYC4YtW79xSLVsxHMKAUAqmo4KxZTeSvtLnsYioCvQm",
  "key39": "3aLHXk6faKzAj3Xsy7wckdHFxcCzCabtcYQf6PZiXUJyU6FqhWVMDQhfz3TvhCMLpheYixga5zrBfQJyP6g2oKiN",
  "key40": "aEb4UV9UEGehT6n2dd3qErg43CkzLtUUSuDozpRVUcYWgs5mya9iw9JRw9HSiJMCcf6fUfxsURoXPp3ab4yHTDj"
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
