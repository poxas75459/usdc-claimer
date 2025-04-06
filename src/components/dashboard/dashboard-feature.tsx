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
    "3D5Dd5UXQnpmBiGPgtYVNSRW5D17R5RGWkPSZqoj6jjeE4oM8Pca6C9o9GnbtuiJ8mUFcPvMEUMX6Xi6QyX19oZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kF2Tcr7ePkPcDndXXzsX5KVrQWV5BfQP8ZxyT2EStAwD3MnQWyxAZBDK4Gg4LQRCKba277LqGcSKrL6dP7S95TV",
  "key1": "9tWKaBSRRcLDwkNUetaJ1GzpAYsvHQXsir64ouuH19GLfJgc5A7X6DKT4DB2b6yy8GgT9m4tGLmz9WHoYfSge9P",
  "key2": "ekERLP9wcaQT6S17zfnZsJtndadRdjGDUphu729P8e5etp6hRetJ9dmPVxoito6KZiuAYY3osbee721xjP72Uo1",
  "key3": "2T6AzKHB8MneXakR9jMgCmeJQnXELhe8MbZcqYuUJn1une5QkEkhgTi316zWDAvHSLWWqnw3Pboy3Zwpw122NdH6",
  "key4": "3RuqyynZKtFH92DpnzCez3dXY7PJD9zEf9GhXbm5RUhNi9vCVSXFBTGsCXK98kDqxAXnRXbYGQcjDcp8bcUf9CDk",
  "key5": "2F6dtJujVBYJ8fMMhoteFGmC3PJi3xWu5NSDQFFydcntitNDHuKMqhJFB3kMFt1GRT8FvBbafKv6RHS2nr5a7aws",
  "key6": "51LPZ654t7dH6sW5YMMDqbRFEgtaxArRs9dGW9FCANXkVHoMEF8MK3bgh2HfYCyfFcfJzLxD3p6gqusHsgNU8sNG",
  "key7": "4p81ky5WymyWWyPffb2aHgBQHmdCHgBQTp6f6MkB4WqTUNAXpWMsM84yPoMw29mHzfMCqZka64eEUMKGCTcAA41n",
  "key8": "56rtjq83rem635k8DseQBuSL1LNLzJiL6CcaCCZRCEhrTst17i8ouM8syTFxnnSHSBbG8BXFPpQnxqVqdtTWxrug",
  "key9": "2DcS3sy6d94y29DH37SM75C8u9D79fGKWxo8gwu5GHLp81sx6rG8S7GWkr4GVc92MgTFu4gGA96Q1pbwAJht85hq",
  "key10": "42KiN3Dv9a1moVWp4bjPsYrkiBnaaSSufmd792wYHUhDEv6UQEaLZKQDQbaED94YNnbqAEMr8T49pVHufkLJMMgw",
  "key11": "3JAUrnABis89rnbVDnjvCFyqCwuodFjwmjDRPCZoadtr96UGexZejE71tS8McvRrvMJf33FT3T58bfHMwX8GCJq",
  "key12": "52Q4oFfNGgWieJsn29ahdhJJ1QeNr64oWGHmT18DLUsoQgM233HGq9hb3Kq64yTod7E2vXTaEYJkvBgHXQwRf7Yw",
  "key13": "4CM1JULMbJHRzFZGfnyseUwoVLQKTyxJ5WXkPTeXzNj2mVi2qUBGEiZHAxrc97etTKKqfsjQd2Y9mijQBFZEqhPR",
  "key14": "2hdjWxBpqnEFH9fQEAwUCVLoHDhNqb6Bjp3fC9C1LUYSWf5rnSvg7pDKLKHiGwXPzXAhErvqRPHPUZXjbGad2ifn",
  "key15": "5KDnWDuynVkWBKGkiDfGGx2yWRkKoKhGHN67heXrNH43ja3pVa2xY66F3rnXVFx1mbFEvPzpfbMxrRYcye8JXtvu",
  "key16": "3ZyEbSa7XF8TMDBzQeXm9FHF4HLXkav5AcgoRwEfw5LhZBUwrTaUPbJqHpE4XxrL9PK5HuAHjFNnZkzmXpPdKR7r",
  "key17": "4cKFT75jrHM5xwnfzFouYed5qUSFwyF5Umxgfzav6r4sQ8i7LyxVaxn11d1njVQGZLNfXfB3ZSaXC9Ptor44t1Mf",
  "key18": "3XeHSGQEu59zgtEMassGwoJcR5CqkK2NSh1ZSf4TwfVKjFYr7mTEteb2P1RcJa6VmeLKhr9dmLfsbQ3idsXKwzXh",
  "key19": "5TLtcDQAGfFpkKAm876iqg5nmjGvf96qBbDtS5uE51Fkx2dkLdqcg1CrkLihGjNUJ4r5JzEGM26ZqMzc5CcfH8Vf",
  "key20": "qikcGrBgFJLCSKrx1V4ezoN6pcezrQcCN42fJqvHZ2HJSfXPue9MdNYmQe6uDeLFeogb5G663atid7LouNRduRy",
  "key21": "2HeifWokUnqPZdTbGcJrStmGQCu6wRcrj93yPkVM4USxe5yB9rjm188J59HWfidjmop7xgybXU3FLFLyNPKe5YJs",
  "key22": "3fkNfMJ9TjsqAQUqinFJQGuLQ3qu4yBHRrGxPnok4up53F4Cd62Rtp8zziEKpQToiuxa2ZMDeK4QtSDzeTwucBt8",
  "key23": "2KvNrZVsvLv6VmqdmK3m47Kvbvm9ueGmYTQLxreF9UWigapWrF7swkHGDFSiWSrnCVxfrc2SHGdzamfAnTFcs6Xp",
  "key24": "4cWTa3dj86a36nAmzVe3Nove9mKuKXLJhZLc4qvNPqnkrGRWm7NBUpnwwupewTAxV7tBskrycCo2Gr2sd763biJK",
  "key25": "3ghLPhWbqjCsGtUNyojmaAnD4aG78qAkbq5WPNgqZ3T1k8gL4jz6qxMmzcTf4D6hdpaYY3Zo1L3Nhesp435W84TL",
  "key26": "3rhxtxgEopCLDRrnnnUrsQsX426KZzzK6zGUFxVnpzF3aerNCiPWY538LYoiYbzjXaN4cSwBGKTNdWVUA8ZFJkMh",
  "key27": "57bfuTMjcssfFYt8r4zKqjnyt9VSgWtyEB73jBPKRexV34yt7iefVezuJ1iFg93qSoc9YTDvhC15GNoXwByBzs7v",
  "key28": "3mitfrVVQw8BdXC6BmHgs4goSWfx3zFFUvPQZPxxDKHT19ox95uxpKFpr11WZYc8tAZGEzFKHpvgTQGjMX49kNmy",
  "key29": "3GHuF6dZngAR3QE6E1jUwx2CoCQHXsfFSL3wQGgnTk6ADw1wCZs8FYtaWpD48H68YYafRf8U5Le2tVdMN3Tr5Fxi",
  "key30": "4z1KPQ7Jaz41QeuQnA8PRR6VYHwhbmcrqQpfaWzKJzKuXhWt4fxnhL7kA51JjKMcGFF6698N7sHuuXViKnnMnCRh",
  "key31": "2Bxwy5hxxxWgLgkWpzbKS342bB1tD6QUUQywgn89MwfxgaQveKHPhLob3q2ZEBPsafFbdJu3tJsAEn1kBUuign3a",
  "key32": "2J6rMrwKjvgHnWkC8y2m3qUtzCpFEeG1kdSuT4dX4pcduLdLwQWUmnTQrSc6af8XKevYw16tmmzATmvHGqmtesKU",
  "key33": "5JEPXx9yRXHs2TptEncTdvG5zxMeFvezguURMmbWjsN8wa1tZMTU5qxGeeBXr5i6CckUZr3TkQYFFL3gjVa22kQ3",
  "key34": "v6VR3uPkcuaUcMAuR3UuBQ9UKfZCeqLW3gdbjv9irKtjBtrMVwQQXp2WyGpGx4TdwFFPSvKsnFKuRryACq4JBpG",
  "key35": "2QU7FcixZHDppDwkcS6m3pbAno82hHsv27NY23CiPsVResAvJEoWKUPPXN2URBfsqvFZt5wJbVR5pqaJ1Auhrdh7",
  "key36": "5pMER6LmSTnJFVGebjaDM5mUz2v2rdoFxPPXim5aKEChtbfnHsKosjUxZ15r49PRy7sWz6vQredKsy4er9qpB2Uj",
  "key37": "4hCdyCSMUmKa1gjFazfcL4eDJtvGT4JQNrZmrQEehJRnVufZFWbTLXsRAt2aVQo88t6Bah5k3QreqabUxQxcJZLn",
  "key38": "4KN4sfBUwMS83Cfp87hAmMLnVxFMC1NuvTpUxsXnhb4WPmJJJFHjWxx3F5NJGsJ9JTERVmv2AGYVVZAHPYa4tKUy"
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
