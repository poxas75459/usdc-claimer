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
    "wZyM5ZSgCTYqMyAwsmMcv7rrvGQAdq2QBGNVrQS7pmDhCMpYDrQSQnVhitJdgDimAEe6qRa6veoDPKDaTS2BfaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWeEf4NKaeq8cus6XxwTwATcAeyEA3cKxpzKCmPBip2VNLxA9gRm5dpYG6ojH6RxbwpBtfuJBYHFbDRXBTosHrD",
  "key1": "23eCeJqZ8YSEi5oYEfDr3hTf5D7gVrc3U5Jd7nBS6L1X7mJxERSwkc5NiZaasVpnU7cV3HmHbjV6htXE3MSx7rMr",
  "key2": "tVqwawebA7JZ2RcKJo8ZNBRgFPXEHwRdbB6RJ42ddfDdL6HGAv3SqTLPUNjAGc73vzvtLu2d6RKMHXJWk1qy3uC",
  "key3": "5RWzGv4FqwHAoBPNSaAmWWXYARQ6wzmhiQfh9CDHzLQgtfjFjJPxwfwp76FajgVz3yuE9obw6c1u3fGKKMdcTFEQ",
  "key4": "CkMfUD6cTgqdH9eoPubWAh9RtNtUyvAuecr5DRtKmzV4r4fD9jHdguK1pvAmD18gsS8qnfhJChQEVveziRwNhwP",
  "key5": "45x83kBTKxrx1XKzUnNvou6vKNdVAWjbxsR2iqEFDLJJxJNocmzV8vt3114c2fmjiNwJSxdqgwdCvjcC1s7V91Gc",
  "key6": "3xHP43Qx4pSf6C13spCqNB3e1Jy7G9UAffWcBSNJghLzM151mjzZHWyj9wF9S9zoTihCbPcambt2DEMD2kawCFKk",
  "key7": "sm29akuzDvAvXU7APRYCyfqaPAFPrSHiZkPY4uWWygxkGo2dSBV4eJzbTR4xdTbDUL6RLMDQVKE9QtnMvxHEWhy",
  "key8": "3E6jRYRMw4Hz44y4gNxDWg7v44Bt5Nv6YubX4uJFLYYTCAburPnbG4J8zkSFVgAebREfGYemorEs3H91TRHKTREG",
  "key9": "16ZFjwQqX2hy1iXzKctA4ErJsaDtNQ7nrHfNUsXs1dec6xyL8zarwCmqfPCWPKxGK2GyJc4eYaJEqw3PGqzsJ9K",
  "key10": "2w9YVnkzmQJHfr9vbJcU673Y9EbXS2HxV73ZAhTSbRpGFevoNK1cYmC6hR8SdW7VDS6CvGKT71GMkus2nG21DDv1",
  "key11": "3RJMEhTp6LRTaFa6wrH6MB66wsuG32aogDbrEojXw9W8uXBKCZfow8VAeeLU2mi9QvrKDeLAxnk6La46V7ibk2cL",
  "key12": "2H4uqQdXbwsHW6eyc86a6EMHiiqo5tE7iQoCPiLFRHfGYfHsGyo9Es4jy7xPPu652R8h57pjT9uN45HRAFcpKUFw",
  "key13": "jcTJfXXt2tDBhav29TGtNPtSWNVqDhvKfqyxEmJCCFjgn2x2nKbAFEvARe1YpC6YmCa4KmuYxgxwotRTNzxKWj9",
  "key14": "5cMQL2qRum6q8yiqJ8gsSVdeHsAQ6f2nfEFuTqVtLvD15H9CXfxRkJhLdsmantTykzFoB7ujqWAq4LXzdb9Lxzf9",
  "key15": "yW5YgErzCtKUD9EhP5Be9caBcmk1mohoZotk5Af6XSuPrriA4QxN6BiG2jQLmwpsqF9txRa4MMkSt4ciT2g4nxG",
  "key16": "jyE8xDkcGDpTsruxLLtB3xCuLLQooyAPqVo4xTaa2WMLmjGkncS6CPcrLJdPxwPqnXtcES67UFhrxQLr4gzkw9d",
  "key17": "3G5enuMjXb4yxkmPrkpyHJci6vTTb61SrUM5EMtzJZkEBvXBMkVEWSdayed4AKv8MQWyAuuputc1U1zKDKGedoFb",
  "key18": "Vz2QDdy46YWtHJss52nzr6c3SiqYybuTwrVAwYVT6Q2Bp99QtEmK2okYT3mUMCUXp1YaHUfK6ZtHoDvjFQP7Pd4",
  "key19": "2HuhWibB3EM4rNXYvYY46VGXdisJFanHwVEEDA92boWVHrTTZJHgHp76PaRSFjPKhzTfxJXXdmeALFiM8Qfzq2AU",
  "key20": "4ajRXe4W8mYRda5FASw1Tosfiqd5yHukhmE7tvrwxxChVFaYLV2osbkFzCPnamkYpRoEtx8Stxxhjp4yeHuwhuEM",
  "key21": "CrHw8kcDKsVNE9ms4Eg6dPHSZYuyr2E1wcEJHyd3K8T5Ekw6ePapGCpd6dJf68XsJCe8wDubtBRfHQknbbAevom",
  "key22": "3JB1BXPfF7HUwixfm7TQoiXxSfvB4Qg1eCrjtEjd27YaJo6b9aRreEqqCbkDXPPmnwuCuDn1Ufu1bFXbQVaxSs8K",
  "key23": "5YJQDyZFqTKwxcxQpgvgEAn3veHNt9g3BGXiHopb9ZSpo3yVkacZ9UJCDPKZCs5tbdPZiRkUdwDFvpfPb8zssJ7P",
  "key24": "Gdi433JjLndF3EE7zGxRBBGi598YD23ZzWckiWCJ2AdyHyfrrq1ktZv48wVbHZuAx86A4gevmhRxCkpqK9yBaDv",
  "key25": "2QocwHFsuDpHSQ3hSsGxQzMS6yvNgP98ev9oTyoWrUzWEUtMQz9WbJn6gLh6pLmAczBmYo9iqr1ruN8tDcQDWSWz",
  "key26": "5mjmGd3XYo3rNh6mZBK5VDebavQqUB8mZR6Q9wg2WstzFN8GPMdswL5BpJ5b5i4sn1Qt3wt7FeueRpvjsjmSCL9C",
  "key27": "4QZYX5NVF5Gwxx4qQFJDNpy9yjuXg3HgmxAcyeBvmPomYdTqnN9c5BNADsjTb3CtuJvqXemjNTrofNgtyo9QFqnH",
  "key28": "5DuhFv15kpeypeN6BJi94YjpfzFnBwsrDgJko2ZtooSsdxBmHi3PfnSeZ9uiYgBLSRu7fe6vmkCCPm9bS5fGWZ2v",
  "key29": "4CCjWzbxp2xLt9SCecLb1pKG86yZZH3aoswfS3WZ4UdWbMFnUNXqHcMP2aKYMs1xLC5Ap61RxjEi8GTHsezQNRpc",
  "key30": "3fRbh3LG1cx8fCC7XLuqQ87DcAEYkKAyScwY2ksL6xpHx5kN8xyhdg9uTmcmWbg3j7UzQzhVtEbZWaewhmDrVHvd",
  "key31": "4Bt33ERpxsfGTmYjyQcQ77q3Pgwx8DgnsLvpwaLLyGEVpDPfNe4eaJY6QZnpWWBMkkT6vUuKJMmykwdm6FrATqs2",
  "key32": "2AoeGWPbZqok1ucqR8SE5VRo2LQQJvckvKWkynLkuxAgRXb2iZrxn6wGbAkcKZ6utHv9Ma7K7mKQmbFjuFPiWR6Q",
  "key33": "4UquUPjaxPH6V7WvLca35dDfLJSHv3cJVZRCoByM3hVsz7tDNDGGcdPQCyZC94YDFS7pgdijDkbitm1U3ov4k1Qt",
  "key34": "5Cgb9ySF929qttmJiHXgfjXSDj7NDeaWFntNkJcy54BYv8HpLchb5pDLcn2HBu2ZCAzj9C3qHR2hR7WXZjuLw28o",
  "key35": "4vtmCtrT3BBviXd52aykrGUf3vpn7aejn5A5z73HxTA8omqe61Gra2AZAnVXd5wdqdPUYLiGv7jRqxx7fqKzkaBs",
  "key36": "4h1ohhzvCXLLZJdsYo5hMfhzPofM4H3jbRuudvFBEzLnD7vCWH6NfDwnjEdVgrimAZTMr4EXJaTgNsJ2LJ2jRdXg",
  "key37": "4BLqoSkt3BmGmnNSzfVJFJgXxgFuC29KxLoxUveZq2XZvuB3H96fmc7mvuK5wgZ5c79oLXFuQKLuFNCShJUDLKPF",
  "key38": "3UmtDfYNC9pASUdqTiyBp3SwCvku1HySixrUtFdaFVR27dCEuvVWRyXm2bNbUjdMB1V1sYdRBLVvusBVGDrqsZWM",
  "key39": "5fUgWWacUQ57beSxPmRE4Y5vzyH7D4NZERwF8wJbdt2bBWpMcHwhC31fr3DD9nnEkJy7m8usrp5DWjNjUtYKU3cK"
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
