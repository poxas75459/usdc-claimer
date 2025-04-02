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
    "4WBd236f82JMG16VKBNvJFnFr8VYD7YN64QRuyKzx1rN5Z1PbDLusZb6jeV4CWMEwwfaw6dDxdEZyRw5Fym9fzng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5J6o2x9vS17d5V33CtoeZHNAc12M5q3bA3Nn8aKFvMGt2YXeGbCCn91gLHufxWp78bsA3gsvaU9GU5zMmWkTSb",
  "key1": "5xK3RcMJHXSaWxX8fE2wz4m7ZnZi4EeqB9crTpvBMnqBFW5MfX89CZmXdsVPm9QYww3t6RBibQ1NV22uxBFKSEJS",
  "key2": "2HQENDVCcYiTfhxzqcMEvfaZHaVyApJeUUD3NyrVrgbbAGvHBdRejTNwJDtoFTnECyVVFTY8VwSMpNv1ihybLxcL",
  "key3": "5DGqsmg3B3VhXPegwo5jjFmy4QsybqGPhDNekfSMjqqTrHQBGxgeL5sGwVwenwb2zrE5VpND18NT1DSP56zuC57x",
  "key4": "MvzvugM8HVtQpkabduvuULT4K7spgJFgQxdyhRWXQ87dPHfjANs1RB2g8XxuptDH84JP7mTj6LC3tz5aqcKns2B",
  "key5": "277qa3SanrnppgQcz7Am6zNZBRiuStNfL2r2bmzsQEiEWuLiFxpksMzomajhZx6zUcG6e5E2SHkGXgxS5rmiVHsH",
  "key6": "3QVgf5mV66AwieUPZrX8BBs1dTA37HH1EgtJpNWHuX7aHAcAsQH6gUHiLJsuByQmF9q3jZ9iNs1C9RBPmrFWAZgn",
  "key7": "5aA4KC9gwyhq3qPLAfWRtTFXPzWQkaTs6MoTidktQPbm7EZUqrjr71xSRoQJcVek8SzBVAJnb6Srpy7WMHgKMvbd",
  "key8": "5a7DRsrH6fvnixomHTG34GsPoYHut2uvoV59WE5sxrwGo5f5sdKGJyaZbYQFZAzrJSDUi9SuTuR4hNKqKfyX47cg",
  "key9": "4AQ2iAFNU1mwrM4XRMoxWzT5zSN1nFcGTLFR5b8Jw8SdJ85fRGxuiKadBMqMRnUB3XtpffE3S6FmYHLsWPPnrW9j",
  "key10": "3PQH8863tYDpr6dC9TQnRLfALGaVwYGZxHtkuKxGpEXofayptWKUYDDXwqETh5KJYvn3xrztr5cXwH5UbXBgMfbz",
  "key11": "T9Ls6xZfG162sh6x7bkmXPWhb6WJTTNywdcVKufdCbHXqjfJJKYBP2q2hqQkXdXWcjS7uz3HHVKV8zGizX1XwxS",
  "key12": "5DitThkJ7e1su1Bb2JQToqgDsMeZFFYVAXcNYz14pN9j8DpRM9FLh2jnaWi4DaQyDz29coNBJVSV3EGp23j5fDMa",
  "key13": "4xkKbwoteSvaYf8AacLE6nwNCLhjgEYJ64E83N4egW7yMuoTsU6eLmnZTWPjpPzj11uqc2WfCQJHgvnyvgZnAZHs",
  "key14": "53KXpDBMYV8nNkRCpYAQfsX2HNPTjpYT97NEipL34mLsv92Fyymuv2irxAneNXxaDNAHtMrhYoJ97N9QQUnjUJAo",
  "key15": "2NGSHiWcRcDLTqCX3xqnwug1ZT6FaQW45BRCParWwaMvJxjs3iArfqTHumsJi2zjxyc691sEsRnj1g8Y4fE8AYLi",
  "key16": "2Vcg9eQTCbSGAmMV6KGHJVVedByb7reWeFGr5amRZxVFsbMLmXnoeTEcnNoCJmYGb3qjFWJGiEyiEfLvFfYdtJiy",
  "key17": "4qFZTae8MYga2WU8aeAyBhRL5uvkC95YdCUtrHnHuNZnu5euepyLvQNg9pwWFf5pAJmuZ9ah7MgMjPujuFCdQ8Uk",
  "key18": "3doNzGwjQdnsjeQe1Wcmuj9UPUbRBTu68Hp6RHsMj1LMkGWjNcKrNfKjrmnEGFmfvGT5fYj9uSw3MDE2VKWDqb35",
  "key19": "5DZkbmSpZB2ttwXPXEqDAvbLNadFyTXdNPgNPBnUUyopGDQQPp9uoG8ctb7zW2crmmjteM6j93i11YeJxdAaGn2m",
  "key20": "2ne5G8nf2mRYvmKJ1Lf4VaXXxSNCsishoYBxdr9E4JJnrQ8LbQTXSHDdBVTnviaZjZH7Qgv2vXBGiWJUWYV2jJws",
  "key21": "2ffWgB4n5bgBya7adM6tkseVMLqU6RwjdzTXB8EybM7E4edbR5Ga8uLtUkTW4Z8cpvVBbaQ5sSUvxacbvRzEKZ1S",
  "key22": "3Dgfgwfvf9RQMohfJSKATwQuTyAankrL3KwvW2pNWKYzRX3AU3ddz24YQEzKrsQNfVMXd2YHPau3Bqi94fK3fDuP",
  "key23": "4xF3WsnHCu7iZ7naKsDxMPLUz72i9Roayp3hNJqe8rgf3fuRDjidN5CvrNtPyDTrrwPZUJKsKJhYm9fhHEDLaqjS",
  "key24": "F7PQ2spuJjeLcKPBjSkUwsoyNXgtfmi7uRcyKERQJ8xmfViKfDR7nmbG9Cd4paBUs255bAUTZDxToVNrk2dcttC",
  "key25": "SwBagLWXaooAbiEYqtqHZRzgtRxzbQon9oRm2aGcnY6wMzZpQfkdRLcnrkrduPB64eoLYDDtFEcmW74MiHdcNo1",
  "key26": "2aQoyT43dKb8TZ8MHa8S5SoeM9tXqLnAJSt83yDdmB1GGmkjyQAE13hjTf2K1ATLYahaD68Z6Ui9Zke666UsA523",
  "key27": "3Ar2bdWcYeaksM7e64cdQ6eZwiSpxoPy8CUyZc5nxKKpPW2YkcGk4JijcDjqxFxUxuKrFDK5sU1eb3mMDksPjyTT",
  "key28": "3zeRqK28CdqyeD3v2CEhrahuW1PsFJF27oaB1SfRtuY9EDsghKZrXTPBacPhqs72HTpCRmGfGxomGkrCWES1MzbE"
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
