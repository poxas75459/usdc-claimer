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
    "3dx2DsazJJoJwRtnx46m3WATPkcybqKqqCda6kuhUbUnouGbuFJKnUxj3q1KW5TeczedZfZpyC34qqWamf7HbyWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42MMMg7g6g6fyCraXMS2d3BmGaiUKUcui5SaM1d8Vh3SX7P9QRZWiHseR3wqX3eAA4BmJ8MqVheEq4nVksEYrX8M",
  "key1": "4651pWekn8XCnjexap74XfDiarGqXCq71schkp1v3KN4oHUG1MGChPFrqsynQ1q4ezXDZDnAYSaddGDacxQKXyVJ",
  "key2": "5LH94XaTzNyqzE9fvUsrTKE7RBH2SQkPTR585mBkxq8UgnD8X9xT7nMvRkUeowWLBuA4ojSBgKZxk5K3VJoAdXV8",
  "key3": "ghz3bty9BBej6L25b3dvjoyQV9Es6NR2SUX42WYzjSdQRZY1yPY8BPnCX9V1J2BJHDh38TkdFCSf2zE4J37NHKn",
  "key4": "3ntosddSWBkSau5UkfkZveBjho41CpDdDBDB2aDSVt9VLxfrr31T1o9wu2nUkbucE26qgSfRkFS6s2MHJDd28nfW",
  "key5": "vvBByNRATGP7GKpYEFPkAcL7kvNiLgm6K3TReTu2PNfaTTNQbRsyDQpd214snCnBcMozfrPgwyCLveuUqDucLHK",
  "key6": "FARVx3mEHmsmpruFPD1xW2fu1wwMEaD6cApC9ACyEvLCEMCj3ktmDFgBD5qZho7PfNDqhi7TfbjK2ooGreK3zzc",
  "key7": "4qtafWWz6ChPoWc1iZ4ukDcUJwPiVYGMEd6MpU4tV5voV9jiQ4Z8htSR2aNG5aBT5rg95YnQpC23PXG3GCoyKBiN",
  "key8": "2R7YaDkne7BGBKG8KXVA3FUoNSiaUnU3TyG3zmmTNgAuPCHN5mBxJX2AXB6buY3XwhRw716eFxDHAbD4UT6W4Yta",
  "key9": "4eguYBofs6KLL8BNUFvvaVC7e3NTtTiiscLoPBpCbszGCJRMBguCPvM3a2TreKhnCbxEfoVLyq8vefS5XJLZcLK8",
  "key10": "3nwpM2E5oqCGKEaPxECiPa5fwSwpe33pfczajTdqQJAdMGWnDUaJBDJth7syPaBfWFuBL4H5t1KaAqYRUvCcTyz1",
  "key11": "4W577i6Z2BCUg2ojrvbeNbdEPudwkQxGWU45Aa5UrwPYZu9rbQ9qywW27SADghiiWGJ3cVpgMoW3SxRed3SeaSE",
  "key12": "4eAQ4c5t4yS8TD4QjVfbVWVnCRKqgUb7x7Q6bAjE6mHGiDTPiTUEjFjUdWNAYgnvTHi3mRvtP7XqUHB9RsZ5DuFF",
  "key13": "5LBCjRG2oe6kFk9VaqWUTPaRfW6kbun7bQujvvA5Egep3W6xpcbCuvWVdgZn1XDmVQDj9ifEEgk7hcQbvp5kv5ai",
  "key14": "bytRttfKKY2cMroUAXsxbpYxfmdLUesap6mn9F5Qqs1BhgBSdEJyN7NdU5S9nmZyGNgQL1eiN8gk47fW42Rfq8Q",
  "key15": "2v66oBH1AvwLosovvHZ9F13QhRDKb9ew5qiCauyVXNHTphibmE9DH6KzCDT1wYD2zcF12f9QyC1wCtiYTidXaYSm",
  "key16": "2UtYehctLwwAuSEtghcWpTjJ6HyQ5Kv38xtxM5QFxMuZ6PeHwYd3HhiEFZD5o6J5P2aEJRnczUiUKkLSwVuiuoGH",
  "key17": "4FmvxUHtZpJfNDMBt33H1KaPLNHu3BUQudkwskjB3RdCSWRT1CeyDwFprvfsbJnraS7cC5jyoMPHJJTKKVRLUF7S",
  "key18": "4jjmJqgf3PTjKSUmbfCMv1d4f6H7H74rukkwwNEw89EomSuArc28fjWiPauHHdTq3TkttoSeiwSBKFD66KZ7EmhR",
  "key19": "2xmjM6Z3FKzvEMfG1xUxvXYyYBZ1P6mUHFLUiXkUvRMm6TRfCCSevpWm5FnAC1ycDAYjeUHyvUwWDAbpYG6KSF3s",
  "key20": "2E44XK2CeZWNwLDndgt7JaDyTeAA7xiacFgLY8btLuFZBVmF9n2jDQ7ho9KDAk5H6TPDRF2REEgP3XXkSA2ZAyPK",
  "key21": "57Rsr5jjCwHJzP2ua22FJDz2354egMkvdYmecxxDzLdRq2NCmKW61GCaCgfvsTLdhhVz1EjDJ76zCLrbkNvCXxax",
  "key22": "5U9DTATXe1Fz7CbXCPzZVEztRfjYUab1bHREPBeWPBjmY8BSU8Qw5jrKfdw5aQoDiTKuh3BqVXqsHbCG95AwNNHK",
  "key23": "3Sx2pWFM2X9uMmVnLP6gayiwnbK2TG7PZ8EWxnEHvNRR6atvZJYHHfoePEMD1HhuZSEg49TBoB3x6QoAWbFknNBy",
  "key24": "68Q8ASsVK9ANzRcCc4dwjHEz4fggoRoFk5HQN6zg3vZVXZgprfc5SrUY8jxi6Z1PHJehJHP9jYbwUo7Y5yBMLbp",
  "key25": "6n7kjK8uTzw7oijZznbbp7DtCQQ1eF1a3YXpkMK49seH5Ns65K7JBXmJYsogZYRtvqDMY74jNNqS6CnhWPMSpXv",
  "key26": "2ZSz77DLsevKuJ8jNkoUkYfkrq1dkXuyLjqsyGYi2UUWQzzUJnAgiZ3UqShpzUD2EkpSjmrkt6CvS35rqxjepNhX",
  "key27": "SypP8ocEqQ3tNNCPHEz9fCPZ78UFKkNzmWJmE4sKa162siQPcWEJHeQ16YSHWGap4G7iArfcSgQv5UKMk8DhRFw",
  "key28": "4bo3qY3WC9VTRqX3oZgDkHdC3XTnZU1qR3cg7B783g6m6AFPWnrMTkHn7rJaxeq4S3nBoF7SBnwWru3ZVQqp3D5J",
  "key29": "4yf11ip3n4jpxKXU7US9cx8wPXhunrqbacxHPo2PvD76nPGQGxCdfsRSdT6okWcY4q5sgncKVmVh6VGSJNUiuVq9",
  "key30": "3Ce9CdaoMifX3yH3d3NSJecyBigQm3jMJ7DpMGg7ZeiUx5izawgZnD2EHi8WNLygEQvGbNYE1rAQekhLLYd6Z4qH",
  "key31": "2vRGMirJ4rvP5ag2sR9xggKsKZ6FkBXYpaPSHWrMkA8WEuKA4PcMXc2obPJwNbwbuaQfR8L64FdeKqrbGWQJe52Z",
  "key32": "4hyFxh9xc7AL2cRsYDEkyYMHRww44v98X54TNYGpDcN5Y6zsQ3orjYoYxT6ZkxbNQS7pKLQpavmNFVNCFuC29fbi",
  "key33": "4mrYnXs6Ke7FdrgBJbxx2vUhBZEpgSxBCbkHNvWwiTDYE6VEjePcAyMXJWmXyhdiNrEDsr1fhDRmuuUUka7Re52n",
  "key34": "dTKzaQtxDZJHJLp55iGtNxjPw6XcCo1anEYS9g6JZg7oqhvtQCCXZoU9h5XSS5hTdv2G8DwUPRordEg3rgpVhZR",
  "key35": "2cr4EiTPeT5AJi5RwinFPjNTgQCfQRiEJht5P2zTro4Gd8DNRosJH7qJqXKestzHqXsg3b8w2wZBWisDibZaQzBq",
  "key36": "5sJc73tgDKdAE1R5WFH8rFPtzcSVjyRxtXTXk6T8ExdkAyAxxdd5mSbTd1WZuqskLwn1GAtRdSycNLnbS81dZCLX",
  "key37": "5fXKFDXd6edUhCkaDERawPPjxFBLeMVjiuqQWga9Crx1rNxNBxZwC9b8X8uCwNnmGQTsF5HsVxkfS1Hz9kcUT7zU",
  "key38": "2dqN7oCFvxVhJH5d4ZYJEA2pEd527ueCbNKFJbX9zDh7iGAbow6grsvwkt6dyvNVk2MqrkaJzJThqqY5E8brth4H",
  "key39": "4rTMBWCZFu6j7fTMvzqUnEWC8SgwKjAEgSUFYVy2LkQTtEwVE8jvvuDC7RVkE8aKkfuxMWT1QB9EC9FhHhYHEEgN",
  "key40": "2tYBnjqD7oSRmF3PrKpNkHWJnwBFosbcNbZLPQ4kecWAxmr7SWkjibZBYRmka5qt63WvXQyFcn2934k6HgsmwyPG",
  "key41": "27v6bPBF6q35p5WyFuSUYFZUo6s2XRE2hnrXi6jA6iz7F9cs4AQH7jMkaWPJUyFKbxs1fnuT9q2SLQh9TpefHXRC",
  "key42": "3No6zGXabYW8uHi1JjUkh1SweMb6vANFQg3FDV3dj8gMNVD2pjBhxLuTdzhGfj1Ec8R2Mm8dZf9jRq8QfZsnDvPe",
  "key43": "4gubvTcmsFUCqnKVL9Eimvjv7NH95xK4mZwnfSmSMK3t9bec6JUbdBsLa9ZuGUi9oXuJksYdCG48Umfuu8Zg46NK",
  "key44": "34pf1xo67tQciA4ktqgj9KunFiHbckcPPw6VKcJerxfcp4RSCC1chbnEfLqED23mBFyocJpqnm7dBvfTojXixD5H",
  "key45": "3EkF1fzvHjbDyJzpUDnfZCkb9VCtzuEzsraCRupzuwZk79xebpaG1uzpRqurg2UQV7cJEAPd6NhBYuAK6G7zM3xT",
  "key46": "oEAB5sYuxeTpyj6Qs2ptvo5t6iAdGtoFUUZr3WdpBJgW7e1vUtHAYw7tdH9rQAw5Hr3GEooeDiABDZgFriRCBky"
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
