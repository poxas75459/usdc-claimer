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
    "pZZoLtj5wQ2E2ttRhdznHcrzZDTyDRKGEeiwZTFcTHp15iqwKuMA8TfUmG4VsfqVfGJAa3ZtzPvpsxAYkWcPgNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39i2fm2gwM4a8FuPZJnfBohmkvGBYUEpf4A5KDqjx9CgDaM2PRSTsgGa4FsNQwCAZR4rxTy6V3rEMKZtpoMsyYr7",
  "key1": "3tRL7CDrbGpnyExMXFZ2grdEiCxhBe2VtMeZircKxXTekQgYNvrr8XSEGvrpt95qUnSswocx3LDo3zDoB84dohmR",
  "key2": "2ry7n9hTc7ZPA8AveyEUJvAEAd83zdVqDDLPUzgPrnFnobSu3PomZEvK3MJkptPa6mkZ5N3HRA2EaudzPFn6BojU",
  "key3": "4auCnL1GCXSDePT7KeDZWVWvHwnhricaigKrRCYJ6ivbjCiqrPWLegNKJks8nWwvYq5X8QuThteKSkk7JH5reARA",
  "key4": "5L8D2rtp1SMPa84khokrWsHVEspGEWCQSCXtxxGS4GkXYiKMBG9jQ4rAQsmA55aZyAxnaAtHNF4rVJjF3cJbZ6zc",
  "key5": "tKwJ1xTr5n9zmc1BUd3L6Mz2GD9UkmPtPkzA5chpaiPPFTc1H3HCGGFMEKvRK5GcY8WzxKh4zeth6RDjS8LvsRj",
  "key6": "pjeTsMkzTBkDAq2NkFCDifDUHQHQ7QeA6LipdzMDrHFM7RDLFaLJUB1CiKxM45fqnYgdDn9D9N8uaPu98tkjjJj",
  "key7": "27byK2AfH9i9yy9Amt111KapwvQfwxqXb6tLDwRfhKSRMgxkRV4fp1vu9u7B11jgjjChqJozpxFPkokhPQpe3fE3",
  "key8": "wvQYxQLfNSFiCHPmispZYyTMJNaSWXxvLQmyY37nEksbSgBtDa1AxJBJPh3MTVqyEBj63VF4qXs9gs4u8UXW5Ri",
  "key9": "2jXvEhmc81C2MreAmZkUoNDeFDrFw7Vg9DpyMuvRfBNE9y8ZoY9AVKx515fraEATNURBWhcYMJLs5YmkwcQY2w62",
  "key10": "5xfxVwsX62WdJ8AwSUEDWgy7bapRqwPNhqFqgrA3hSSY39ebw7Nefekguj2q7KtdB1iF1zZkn3uKq1FqR4Fowr29",
  "key11": "4XuDY2toUC9rBpZD1PPaTMMd5CYU2sFjpNvA9wwuJiDwWtuU8EjVTJ8e7fsN1crH8RgrhQS4E5iqtoT6qkT7HZ4J",
  "key12": "4tbYoLojBynUF2Td1LPaTgYVFSm6mQLxdjbVUBW8LTXDKn41G7SmRxuqZEnxWAoikhgna52iPGuZqSbJirbeKj5Z",
  "key13": "5SugufY8m8nxkvdgM2LXj7ANGodnnz2UhWrrsM6Z3P6PB4s9xX3TBpf3RrqYys7e8W2Dkdgnp37w2AzZBqEBJXRT",
  "key14": "5cv7sM1tbrMxwHrRou5aaP3zrYrzJV5JgKPQhgcMh9XLYCfey5yZbykbeqLPL4NHSaEjkrpzq8sNgTML1q8z9PJF",
  "key15": "wFs2cWUMxmLWCJfVhVLMfcEUL7Gxz7GLi8ds2zWWsAnYY39PdEDpeG6xacakET6hq9qJWpwP4MBwP1eThE51A3s",
  "key16": "5fGCjnTJHLEQg49PP1JKF4MEEPQ9d2rsyoNPsL3CWkJYyW5m8fRXpemnMKB2cDNFYD66XJyjHXqWwyUSFsD1UdU1",
  "key17": "5GiiypMbSdru6B4Cd3mTKGbC7EbinDHsTUUQWx5UyQMAb2eFXaFQUj9Um5TwXLWrLitkAmpjqeZJsxUPxguj6q7z",
  "key18": "aEJEWDuL76JGSe5cQangBK9cyuqNoiGJB2cAd2U3SvfVpceTzK4dtVSeRQqWFWNCjyndTeFAuviFXmmN7vqsu51",
  "key19": "4FrR9CvhN1P7qRp8KnmaR9pEF2pj7f1po3ZaNJUw9jK8v2hYDT6En374MjxZmq3vA9xP2opCDJ559p5hGixEeXgn",
  "key20": "8npLwQT6vWAKtLEbDTDNhRytyTg3iMyHJsehViLPwZnmVieiPV3sWqKmTV5a23K6K7DayWWC6BbZxE3MS2sMK3U",
  "key21": "4knUSHWPA6aEjXK6BXBqRBArXjeWtAz9gSzDwxgAa5VNz2jeq14ZPmU4GTicwSVutXwEx8WjFwEU5Jo6TWt2pBXW",
  "key22": "4rJXkZfr3v2PbtAbUGZxQ7CnNf9LHpRU5PkgaTfkFvF6tdaXVToq8q8rqAg6e9v6xg9GoPtqrv6G1BrinDbwmjzk",
  "key23": "44WyXZmEthixY7TJaKd8rfgzX476t3pYDCyqjtyKW4cV1UhEuHbDhDMnHSdsswhKBzXyHgZZjjxNDQEC61v7fdxE",
  "key24": "3EEDbyc1uF9vMmCG8rXx8S6Sn5UUqm2zc9o5zSPndBzzsHkwdAcqsU3QXYDuFm7GW1jUhWsWfQ3NobJt5W6LW58v",
  "key25": "5FKCgsv4g1Cy7RocbpaZz7fPZuNApbGD6uXBkDum77skSMbzrCG97nRqYQWjKPX4FLfxPxqPT6DM2K62EUbcrjhV",
  "key26": "45XT22EivbwdhjyEAVTVGY2uj2DBR7fDShkQMnNWpSzHE4YdsLy33CAC4GvhWSHduUCzZnSvCgxZrVNx3vUN4tCt",
  "key27": "3Uga1mX5wTKExKeqP8WdANAiodwhF4hagXuus87aQCqTkks9rN86hVF2WCaZgbq8tD2WVSPj8Cb2tqxrNkF5VLaY",
  "key28": "2GLiw75p4YM8hEevJpHasbGXzQLw7JjHcqAW1EGxbG87ZQ8aRBF9GptyURh3j45nskaPrnSZuLyEUqhgVDnfBAkX",
  "key29": "3sXEXJucbKQjDkemtSM4dhn35ae3athTU1iXhHtpaTRMSSYezoen7HyVS7fKRNTuihUQqG9G6G9PA7tc6ko4txzT",
  "key30": "36pduPmwDcZ3PrWUp6Nhgo6bgtHRYfnerBdP7QNZPPw2qBto2ZsqTgpGqCGjwn15MFUGCTafcAJraq2BiZrCGmzi",
  "key31": "3JzUDEFfC46pNrGZ44NYcUwA9ZH3bXu4wNipkfQVchaGxeMdjfsG5KpxEh8pqg62Hk8qJjAJgJSrhCJasBoHLqrr",
  "key32": "42V6swSm9eCeSH14bSd9P6e4gZzZDYxyr3GHHQSCUmNU2u1X4yLw2tg4Sg6snGGq8ZWeQXEJMqoVifWmWw4Cr8T4",
  "key33": "5z5SxCVfykfe5t9JB3gMYB6pVHpoF5MKMqqX1Z2yqRyKfbCRM98ntnxUC5J1WmPRcjR3UAdngnNURqzdUnsgMjAH",
  "key34": "3tNw4CB8Wfm1LiMX48P44yWV6k615DBBJ3BeEswF9w7uLA4jXG3qaQmAS2433f9YDw2K8Y51fxv3gnTUGH62TPUa",
  "key35": "5dU35GZ1Snnp69aEHonYVyXveP6cy9PW3b7H8ULNUj8mN3VGPHAUfHu8kkKVTSxAqocuouMW38fN3hoVaN6Si6jo",
  "key36": "b8BnBJcNqyaedHjLDDTAX5NukeLV3QyH1fHFTmeaCXMLcALzBtGwaCAosYnjvJx5tX1k9zxU114hzsPuPXhm3vh",
  "key37": "3Wc75m61Atnmnfkbw5fkpQ69YKLp3nPdW4c2137WF19ksY3WSdoni82Xs1qH4JvfQdXJsWeN81ZLuk1eKWe8Fyv1",
  "key38": "YeZrxQxYaGqooDTtTH2MnkD9mebALcf43hJNWD5K3rmb3Enpx3pdf6hw3Jw4a8kgh8Aozfug1UuQDHsKdaTXhQ1",
  "key39": "2V6oUFKpCDK5haFWf5Ze7CYjPdLLvs61YtQqdm945JSRDYaV5cM9UsapXheMNnBAhAEntEM2FdVKXBsmjR3R1dMF",
  "key40": "4eh3xgoQS7gnzC2FrYNyWzK8mNCcaSuEbK6tJnd56jWUkE5wZDkMV2YUKtdxhbmM8M8KKPXHFTFDpro1UWbY7LDv",
  "key41": "5gWqiRdULkrPkxyKNYqDA4JTDDksnctBNSjYjtGrgjrp13EgSE2qj8Ut7dwq3h8JwvJdqJD6h8KZ1og7YUptR5zo",
  "key42": "2HYXgGdr2qwQM92ocqaqHJhDZ68FJKK5WeDdmvCHuhrKVko3zXBmBBgVwtDmDctmgStDTiVBoSX9GJytiFpc3ZN8",
  "key43": "tkUN5ssF1Gr2gAiA5Ay1nqHVngpKhiBZspb4Ub9TYvs1yas6Cfo9Jtc8enwoY1wX4yKAbqJE2YUtxkDcL2MYaNS",
  "key44": "3ShRzAeaVjfstjyEXwvjmvvxcaFmwGd2FxZF7nCAuebBeoFbLKEa2Yazcivz4EwQC5NGE2vVjXYdL7ccRTjTy26v",
  "key45": "21BJvqWPyYps3hshviS4oMbHEK5ZG6DUr4wuWTdq941RkQg4PEbpJ3Ukv1Uz9jAGMq847hgLPc6WmDeMex1k6MtY",
  "key46": "5CjKUvjYvqvgEYSyYoqhQjwC4Sq8BajrnjYgABEX76FJoCxZNLzrsxoi6oLNLrXAxfhk1cwQ4Z1UpVgKnQdiXjJ2"
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
