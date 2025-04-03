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
    "2jCyE1zrTTGpyyuKpaPAFoqj4as2fiM25rMoy4ZZ3MKMnyuA1oUiA95ZtPUkwXQuG5UoiQJTB3bVPrsiQw7YVfpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jNjk9yXG3DpYhJviMKQJ9EUeQzF99sijp2Q3jSRMQPqawoATrGJFGWfgKKa5nFo2BeoKgeqYTkHjRB3SpR6uo1",
  "key1": "5kDKPhKCcRcbnLZ7sGaPzz2cCuwmWXQKrwWbzZ7WVQHPbGvCWjgM33GdPCFMyUGRYsMWvT1m6P4aHtoXEB7Y2g3o",
  "key2": "57YWRvft9UsoKDNFRfwskpj4ZKgUjqUkHzur9bTMzPvHQfDqHRitP21JnEHBPZAkrbwZDtsZJ3EstJyWGXWiSrSM",
  "key3": "25cJoWTbZsvyswKfrkBpwX8nwyVhXSWqEb3f22tCDRU3NnEvnKAJ8wVq4mrUe7aEMzwPvTQSLGsUrZDJLfmoMmxJ",
  "key4": "rZQx9K1BtRSgfMJwmL3HtmWFBdkzJBd43JbKMKpQpchFEQia56AvhXy9PYXySZi4cNkWcxSqECsdbgSYTu84DEb",
  "key5": "NZpYtvXSD4JWRBjc6FsXWcufBsbukLigkpmjw64oi6UnXaokj53kWCAEG4L544wECVgYs9of5jyRUMDrUP5K2fZ",
  "key6": "oka4YpmFfPPQdaYNuxdpL2k8AGmTpRvPXVu9qjftpaUD9dw8SrEar51ziRji39NKfEKt6uMp4ZPn8PMEVBinDcu",
  "key7": "i95zBhsdMUhmfh6cjSMpZfMXTxSS9noMtGhDdWwRjtQ9gm58cfkBMnJNXg6wydkt54cMr4meFj4dcff6h4oFg6e",
  "key8": "53RwymBGeSuGBtALpWLLZyR73vYj7Q73bUZRWz44mozDB29nudhq3Eg2f5hAkniRSkTbAA7FG5Ymx4mwZ2KDQK1J",
  "key9": "2c9Q55pZw6nLB9qgLDCLZXxsPcbXZ4ZdfzTi8amV86jww1ewCnGTLUuGLQUuYqarkbj6jP9RMiiVprSGAZLdv5vs",
  "key10": "2b6R5kgknyTp9UXDE99Fkr8PWLZYW5tAjFiyyu168UCXpwxz35V3Kbjd75ymo6ERJGZ9hWmQRpsvHs6VTEdyHMAd",
  "key11": "649AJgTREe6yQibwSQcLiE9him3YgkBP9M1DZjRZ9R34HiR1YTvqsgWorEWcwa4wcFbefetJRRBRxuc7QHwmQ2Mn",
  "key12": "31vSQMYFfYSkU6RwqXNcVbTJjtHuPuKLeSFktZFwjAwa2PKjwSsJBo1Wm7rxnyZjUzSp9hqRwxeg43r376M5G3DR",
  "key13": "4BFiXR5X7zjiSYjxdqRSNyavuy9CeJRVpJjcChgsciN58rqNGrvMvm8iSoXaCv9hpFXPDx2MhjPto9B59zMspQe5",
  "key14": "5VKYBwgi5R1UimQyq6N6RDVR6ypET4UZ5aZmcUBzfBGWnVDb6yfVocZbqx5Ugp8Hj18ty1aKSrs2fXD45zJFTSFv",
  "key15": "4owwVg6YcaHG3Q8JwpktNSyJf35sMTdve8EVyEYhpLhWgK2cvxncBqyrvzzELLWYhMDMzEd76fRT7TES45kh7ZBf",
  "key16": "4vQ6id6DLV4AeKR4Mmoxvx61d95aLak8vhaMTxyZUZxB512m9i8e5To8hYnfVmDm4tmTqt7csR76Smdg4g571VTT",
  "key17": "UA8WCuH53jTDECwZaPvEhdYadWjsecrDhQZjqxWpujwYx3CajYooeSJKbCbwWGkMV2SG9iPzksLFwstGR98kWi9",
  "key18": "29gqmA9FPsXke6oPyr7Ff2zudvnemwdo6QBnSgH8osZ1irkk9CRmLKSLU5qXc26i8mtziAadWvia1qWqD7xqNjBB",
  "key19": "2jqgmrxA7Qp4mGwRNuJxkEKuFbZYS8Ra5WzJnkwGJmtNiE7ZD2GJSWTZCZfLZkXiAuZwz7SfsGeyaKJ8fsajkwKC",
  "key20": "3bu8ehvCPdrSraDkSkRAvVCUrAH4XCwPKVawhDucSHoGmih66aVS3MnDGBSErd91TyjEN99tzU4n12ZohkNaJzY9",
  "key21": "weCndBab1PBTaLbMirPv6GrmqyaNbA6G9bMYrn8jjGdMUGsa5j7GcgR7qMBJUvvdNvaf5sDcaEgPUKiQBbRJ34W",
  "key22": "3MguskgAPcam4X3cbMhLXhUz79X8VLVMHza29FjGDp2EVpk3xfoquQHZWYK6bC34Kj5D3idTNptiVfkeMGQVVVC8",
  "key23": "4DhsNKoNAB5YXTRAmrnngP1AgZTWWMsEA47DDuuD9t7n6SkxVsWmQVtozL19twyxscini3PcgBgpirjc8EJVUzw1",
  "key24": "5n2W6EJ5TEqmvRJPhHWi6PJJhnCoubHcvs98fdNeeaUnqfdCa6FsEZCihDxBNyPGnEmryz1vWTmqkfo2E3dtz7nF",
  "key25": "XRP1enaRmk8fqs8pzxSL5ReefZu6jjztHUFTCAhXSKjXm7f4u3sHCnMAT4bdMaznN83xdrjFJax3BqHGLrYtw3A",
  "key26": "2JFpCJvExu4nnTNZn6tLRbzJstcZyQxAu6Quy6jxovy5qAiP5svDtZGwwphLcSfwzGhPmGxT37L8Y6TYm1FDAuts",
  "key27": "4bv6CU4ocsThR7pJHvPCJogowDWqwy371b1LGwBRKXZdfF9syGjdTdQ6wUuREjAKq9tBz6HY2au56muyCH244jp3",
  "key28": "4ut83SqAUfNJsQD3ZDZUdUsk3ArZWBFEWMk889oz5eMWRx7zwbqSTkjwuXcSqDHfzAb8G3bEEKW2PLtByPS2MQQ9",
  "key29": "5ZgfDvzMnp5JR6WR7FySGiBbfsFo3139PDUwo2vD6S7P3UhTam4WEERxQx1FWcRRVd77WR8bnGKMcRFqokYt2vVh",
  "key30": "3fDSg9fwTWxbv9rpb7rnGgeXpUPdZ7mK4BjoJ5YNXEhCP9VBWkWXB8zNuBYnQ3MVbGkiPzWLKNmfHZBFgVpkJeMk",
  "key31": "5hGBY65pEo7apt82VADYL3poQLRMBUcugt8pdyd5jR5RyMC54Mv1eD3pCf856WegoWXxFWM4Cr6zKW4T825ztj7F",
  "key32": "5uiGU8YGFowr433rjvsQh1ZR22m4uob9H5UPjSHD4bXtasfn5tgYNEPHWoiXqQ154FY25i7NTVKqVbYXFD441xyW",
  "key33": "tBVUNAvBiRaxLYdrKPUNEe7eZg7MDSyF2fwLgbi6HAijQUkEm9MrvCQT2QkpLV4rkpropAnzChR2T3dNXPXKfDs",
  "key34": "btiJrBTJCDgZRfW138B1h3eiiw94PFBQv88GT7Hrz8KZRq3ED3e63UYRyRDD94y3nRdmJm5XzXbAzFe8gyvMmPv",
  "key35": "41zv7HYyGuVzb1wbc9kYSzYB2wgdq3gMXH4bthJ7DqGvDYnggNqSKraEcAGtLqTe9tgHUJ5V1NxiGdGdM8Ca3pFh",
  "key36": "zBgbSN4w8TGWRdoHDijdzQF5WCo7EdodF7CESAtjbqP6psdrijBBfCNN9BDYMcrvyecbbXRRJ25qqDiAUwKeheu",
  "key37": "57vzGSa1xu3NiQ2vDsBDHKufqP6eRTyrQrn5nVkg5vywhgiFNPwJTkzCpPqRw5YGGYj7i11J4JLM1eGMShFh8D1M",
  "key38": "3P578E4TqwpGNmkFVyhiusW6ZrEJGhXvompUhib9yMoevw2kjNScbuf3KoMg1NWUo6je7qajeXUe7z1UDHEihaYL",
  "key39": "4nz8BvnaLor7NQ4HF2oE2xQw1XChje9ak5sA5BVVLZxq16zYeYAHF8HbBdLzhnXRnZANeohPeRWohcVu14y87se",
  "key40": "4Ygmg1EM8WsChyNP7wrenqoFDg2w8XTPKBwW3oKwLDT9i6U4KFYgQ3qZ6GqsqzVDiofMkqrPrW63Uvf7B5ybMswn",
  "key41": "4D1Z5zgmzNQSyFTddiuEeSm92fuGynN4Nbeh7dwMD71zgGb64odRAKQwHffTb6aCXcugQLt4UVr7DtaZSxasCfBx",
  "key42": "3hWc4xxZRkK6rnBSnUeiiqNS8RnekybF5vNUsvPwmyqcLW2tGJdT9SibX2wYRqBtEwjTNCFeaZnk95uNums24LHd"
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
