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
    "4XvzE5VWKGsPkPAuVnYdcwu1qZ5pXbPBU7qutmor2R1wrWFJjqN7JypKWKB9eaE8V1nEXTegpefQ7kgJCQSvSnHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tXq2XLCHnPjd91Hb5gtBEzMk1msWBi1qT53Q5ZnSyhHfAbUZBhFkcEVCxczzkLmmeUNMETmP6raU6ygMnGspoLP",
  "key1": "5totwfiWqjw2obg86V5NjKVyE6QFYpF6q7XJ3iT8gmhBCctLAmL78P8FAxLz4T2htouCX8FV1Tw851jrA4FzSNVX",
  "key2": "dZX55Ewndb9PXiDmSq7cayy23d2NodpgtoTnAfneEjEZxAJ32Nkn6jXcwHEn7dow8GSk4bC7vAmfcehTyX2AVSc",
  "key3": "2mpMMHszqUXSsBiuhahWeTc8P86YgcqaB4FxVnvHM9uEznUzs8qHTNtbLFirdhU7jP8h8wNYVzurrgcmxSNg75ZR",
  "key4": "4rhhBJHfUU4oa1LvNbEFc6jEUcASLvDH2TTrqLAE5B54RmYfdkg4BguPmCiBdRRxHf7RqvDv8NWnUuh4s6mGkhuX",
  "key5": "mgMthdwMzbfxvh6euvimrjL1cr9PGfpcoBdEgVcj7vnDgTJw6Td5fA1Vb5qUc1GYMG48RJCv6DAxobAn8NogYeo",
  "key6": "4x4x7aHtSHFdexQChhMfpqLnKhqdmXsiVfQbpyyZ6aBXKrdFERj3Cf4Qc8nqAmaeLadAvy8PU48iHrMkDbuztiGB",
  "key7": "5dg6tdZBeFfxYN5QUrkJnnfZCGUCVvbZ4UoNd59saQaNXSzDjgcA3fdY81PjZRLLd4utLE6sydyMSTBnvTSQxd6s",
  "key8": "2frkSeRo5MpjZRBcEzvzo7RzCNAHXUQbX8axP21YsbEJd5Rm1mdTMSdvBNDwq3Sqk9ELeaHJJeaMxVAJXDFXbaWB",
  "key9": "3j7TezFuMEKB4otctWNQEhhATKbAvBdeVDMyB5H7cmNRdRqg4tvFoex7BpraiZbAuVbUpr2UiP5q6qLX2zQrgJ8n",
  "key10": "3M1VCvCHC3bWQMWjM5SpgSJ3HnSJ9NKZeaWj6DNpfaDcLFpBfmpmDfx3RRyKyi3bzN9rYaec1bVns55JXjf6m4fB",
  "key11": "46djbjNt2oLznteYE1aQrSfZ3ihqnvxGZWHVgQVcJrUbAJSDMukTij7WfVv6AwNSyrSa9vwtMUNDmTTaZxFwp7iA",
  "key12": "2J5U7nH3zMy4MLXixmbgor3ySGdvL8VMZzeQkwSRc5u7AQWRRiguHqsSZneYSgQc7czNcaVrRuTKBYuo95NhLc9e",
  "key13": "4QLdPbrnoAK8DYhnzVCYhazZvMfWJZhZSSbDtLoqzqh2U4WvvwS6UoRS3gADfQo5Dczaz4brnrnTKBs2RohSDrGU",
  "key14": "4nDaM6ruwWZwbFMDjALqiHLMRiFavRR4gZucShWPgXcTufZ5s5CNVwtLGfD8YyX4hZzD5CWYUYaJ8qxMNxuzQJY9",
  "key15": "4hT2gajy3joarmiP3uPmpttYzNQVMWicjwq29xEYMHazdcjFejZV4syvCUBohWFHCLmJMD2PxfjCjgDZk7pFg4d3",
  "key16": "FwUD6jmioYeU86Cmtzd2KbE9CWFvoJkyx2Qoo18tb2gXhQSVPtxw7kwUjjmcfv1pGcqz12f5dY7oHw4pXthqMLq",
  "key17": "y7vPtjFdjfFv8qxc49VEVDpW4Ph5BvZqpZfHFQXTfjn1hnGvMfi13cXjcxyuVzpd4Dyquwvmi8L3JNyeCw7uPZ8",
  "key18": "5VxTkxtA8ZNbNE9wzVKrR2Tek2pjf5hqLmjax4ztbtGERNu2d8pHwEBwjJp1nP3nNsi2V1uJs5hWfLVuoD2Exj5e",
  "key19": "4YjzvmurDQaPgfDtGwCK9CNGwm6JcktdjeLtcX6QfNo7mrMDdv3AfoSfXYbTfRt2Gnq2vUkRMcR91TMzWho4YSp2",
  "key20": "91MAb3H1UPdUUAv2WHPiFr1YR8Bnh5xaa3w7wwwVRaVgdZ9LdWmt6P14VSbyyYor4LF5aSa4VtYKaJGBBcWRW6R",
  "key21": "4mvbugFEcQJUQw8xi4t2VfeGF64GkVzMcCXQXkBY97ha7VZguaoK4sDJkn9eys5SYvdfwVZmdwsMD31NHGrqkAbM",
  "key22": "33NZNup7oiHUTUmGRGTNZrD9XYfjhTg95YZR9xcF6C53qSFHfaU8gFYAX4LfawuhxgttoxhAdHWRCHG8w3KTM5kq",
  "key23": "z9h9Mx7nKG4SsterH4qTexXq5J8PBhJmPGic8wwSHewZz9jedQyxASEZfhaeUnzk6eWnJNbhNNwrhiTGKkXeDXU",
  "key24": "42eLytn1RP9EZhm9rNZ9LgxCN3pbJrSs7xSzZ31SWdV4pRaMwgfdqk83V7SwK4A8YBi2JAGvomkdWDheZEhDtAsN",
  "key25": "792RDzXMDQUnRbkjj2yyj54CCq4wNCFjN2TEGegRmhbC5YunNVR6s6q9pmC2aA2uYPAGK2CeTejpt2xTATdtSo3",
  "key26": "ThqmpvtC9Ky5ToJzrSXQerYvaf62s1VxnxtQfaDrEz1BsZXEMJ7peVmCqw1zPty421zybtSsRvfgWywRqprs2uK",
  "key27": "5y28hnzMKeZkdrdARUkw43JyvuauoFhccxnhWQgnf8NdcpYZZRbFFuhnRdDMXmPCb99NgLrEorAXHYr3mTTWcGaY",
  "key28": "4YZtFXtyPYK6WR8deNAFho2eQZrm2y29seeQY3a8Ui1roU3vZzmRyHwEwCJmptdVHY7XdcPJmMMHcVN7jczTdnxn",
  "key29": "5XqzdS13hGwMWL8nySzuZ6ytXj9ziEiXpfUyPxhmBFdmaZudRZ9Cc5rrZCGDqcYDZo6WSbnZpvpFetHmQcRF6gGv",
  "key30": "4fQGq1qGoSTyeKM9dZv1e298dRhRt8XibX5X25XmTaELDaCffk26785risTwrYFd77MBn6XGZq8SMrBdeq2hUb4k",
  "key31": "3kn5pbaiccZVJj4JBMaJNnS9m7vRX7z8mVPqP6GNsgkRa8YkzXCNERrrRf9RWq1aRicfmSHcCrbNwqKdqwBAVijG",
  "key32": "3htq8BxjrEBPHSsfzKcYXvPPKrkK7eJ48KKcSjckzaqDyznDJQyfvX7XqP9aGJ5x5Waj6HXnEBh8AHKPsETYym9F",
  "key33": "4Pf7oM5WxwUdNJL7CN7aEq1dTWUVg1oJnE23XQaFQhir2MuLnVnxvvHcpM4cnqTjXUHHnGGSGJSjbnjrJgHGApxq",
  "key34": "3iLxvQbeipeo1u4pJd4VBcjiTwHCCcaXQ4yqjZUeWBkx1VAYjUoCwHtNP2wi2dqDhrc9LWg22hLi963ZhJMHn4jk"
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
