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
    "3xL1PemJGS3kKJBbWqcf8cC68Ji7phLvNdqbTpYAUe46uSTzj4AkHafgQdKMvoPgkJWREvuc7R33EtdgJDwPRkPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFMK4e78EzboiyQco9a5q2qzBNk1X4sDSVtPQQ1hY1G1XyqKBp9Mfjng43YiC1yxsqyEoCE3qmdNHaiocga6sHX",
  "key1": "385AttwCEZJLwH8MRV4XVpfqKHcGwkSCoWa5ibHk72fDExppeVcXZR5XE7GZwjDXhKczPPFFPf4RDNXTt8JBLw8h",
  "key2": "629X7VFM3CsjWTDbTwaZAi1Ncm7iSE8UGa2pSjDAQApxZ7JC6LVvY6vByynk7BYYSHCx35r6w5p52Es1jrftWBT2",
  "key3": "2vRtXJjknsw3TDA7FJAWuTE26sN32FRB36Xhz8sKNi4SLQgHBXq8jNZv7uixcNZRLAcznSjyY1kCULxsyUC3q1xW",
  "key4": "BAjwE7Sn6a61beEWRmkgohjrjV4Q6mPpPyiUQfyzMBdLnNhzRBhCvUjE4bzDgdc53b8ZKN8D1XCqzfnHuJoBcPW",
  "key5": "3ahoLnzg7wRG1v7PngzgBZ8ufPgjvdGB8B2w2cgvQtRqKWimH4D77kuawF3gevAdxZiXGhoA1XUbhqQNbP4zTb3v",
  "key6": "N4FxSSw4bWqEUbt8rsMtGWKXcMAfxehW9SwcnRoRouXMmAhbgprNf4qd91W76EwxcFokeh4G71VxmLZTTmKQojx",
  "key7": "31CdyGrzS3xS3Wu4VDrmqp1konAtAABcqUcvp7Xg7VJYCz6uN4VPtkkSN25HG8VPTkBw3LgCQCwQfRrxaCCWEjt9",
  "key8": "5rZLG5R9Lt6YmhcVet4uHJ1HwmfTRUQrYnbjKBsmvMrSnX2BN2osQtanRCR5FqNJ6LVZuWSnZTwbunS5hHXNW2jv",
  "key9": "6131Ha4EqTXUEQwmfbdfmuzXAcUG3ebyMGsYqohPPY3XKM7KcCY9m3JS8zHnC57EQMAVpvuq41HfUEdjM5DWpogT",
  "key10": "egiw6XcuawnJeaYAnGPgoRPWefM6J4VZfMSgq3nBsDNJhWhJwyMkhTt87ojQsmooSr49jZg1sF9qoq5ZQTN68aF",
  "key11": "3CeScyVGeMxTuWTFpxnZB8c1Tx9y4Gb7gosSacZzVeZKA8yjhxcG3HScSj4uLxxDXiz4fRTFedWLqGFevLaVmhzg",
  "key12": "4k96qFjhxt2SE5epdyKnPJjp89J1vfE8nUd1bjshDCKXGJG4saFBZQeQYfuA4r1RaZwjBudHzg6a41hQ5nTYRy2Y",
  "key13": "4MvxkeJKitGEeU8Rus4JojhWhQ4ApuxSt8QZrGB568gsDTemBVMDGgfRN8FxLaaJwZFwDfWdm45Z4bAZz1HxdhwH",
  "key14": "4hoKscUeAB1is7haBLJWh4AEoscCk7UNesn7dwR4gXGZYmZxHJAisM9wgqPFJsPmKGCrvWLxqdKvoDN9FmRipXqs",
  "key15": "qfkDhKrGT6FUwHyx385QxbLfr1ozGMRVrX84t6hHrjBrUHWfxwjrjrxkbQ2fcrd4WZVBKG8pGYM5RiqysPrq7vG",
  "key16": "3uCFdcrXXDLW211QbWNUYjEodqFjmw9ZQZ45kG8AXqBRzrmBiX6exH6ShKrZnw9hQT6LUtHsqEezGZYJAQvicXFa",
  "key17": "5EDvd5RsnkNvn9fDeXFche4efDT4ER29k7VNMR8pYnqBvMEDe4AG3F8UyNKvmGxJX7dL5nW6vpNWpASW7o3mUPus",
  "key18": "2bL64YAA8T175a1m5fPfZfMWfF6W8kGs7v7Li99kJ5S79Js5MYsvzPf16BSmHbzg4UFF3AxvAYE9ueHGrG7gyYGw",
  "key19": "5QTg14m3BLWuVNS99QxwLd2bnmAPMh5SFQFChqwUnQ4YyzcBqvLVehNCiKjvh1qdM8LXTfoHbTqfpBaw3bCnz5Ca",
  "key20": "4CCqsNXvAyfULU8ycyaqVyC1gDaAFp9HQE6qU7DvGbY4v4DjrGs7Hydm1iNrxHJqddF1ax8DXGFGteNnuZtsnABa",
  "key21": "5BsSMqaPcvT13UNcMCqoTbgCWy53BgAkN464M2e364mZzshHKBdEA2sUmeMA1SixGPwXLf3qyWJzLE6oyjfz5cnW",
  "key22": "3UuWpWyoi2GgV5gZ5ykmfCyTSuEq6UaxxzobQJh7eEUKhuSChgkdHeNQ6trWcPHyn5sxnQjWEgvv7pzbMhs4wU8",
  "key23": "56xnJyTJt6iNZZMEk1ibxcu2bEhcrBv4xG9xgmrquwWUJBJt5V1PMVT3ijQBaCQj8fHEVYv5gGs89fNyG4Z211wW",
  "key24": "33e3r4joVagJsT1MPBeLPhqjJCFfDaQgRAFZGrsJzyoB9Nqb1Juquhk7T3LpV8ipGkwVe7FZDZD1Dk5Ada8EDPzr",
  "key25": "5mMWHPMH5jTpfsLaSEnTBamcaHV5o49RZxSNRPHQ5anA1yzULpfAHh3b76LZb3JHkwYrmnvxXdbRursbTFyQYigh",
  "key26": "5R6VyHWsUKpjCipS7SYcuC3EpgjaRLoBc74QvadeWSUqWuMwo14Kz335zqUP6zX2Ek3LVTetpj7tXgHkTRw6HF94",
  "key27": "3yit9qDejZLNZpxtT1JM8dEdDdAvDhudoeuKkzcZun9EwBFL8yt3p9tXzvNpeWvFptDsauPhy2mAai3p3Qt74CQh",
  "key28": "43urb3xg1T9SHptYEXgzaHcgG2tEeA2B3b4rDvrZrBKWCic6cpJ8zWsCchABXpS6Z6MTPBWtV9D8Ed5nvp6EoEqw",
  "key29": "3KSDpJNqEmTP3utsRDe9faMYD37RW764huTNFpMZsDFagz5vxCYgBAukztE4dFop9WiB25H9Xud7bBr7Gt8qztLA",
  "key30": "3NJqhXWtYragr867cut8ED8Qa215xkmZutGXtHRrcvjr6wLLSeq47rnPBGGDMHPg6uN2HKnrv1jGPLUqFLmiMFie",
  "key31": "53pJ5SkJiDgp6swvKTFbPJpFuiq3uamcjuZoFb2WdNQ1kkhJPW2Xh9Sbb33udpWCks1FUuCmNA7GQHo3E5nj3qqN",
  "key32": "348rLXyv9sPikQ7ur8LEbQ8AEAJvmrrhwP6ocAEoe89LSwgZzamN9fN3BVwi9YzLybe8iMP2CmKLhxy64umL8pW3",
  "key33": "47GMGgHVddhd7dn6ETRosYPQeCvYx3PZ9Z7Py1qJ7YYfXBk5j48RXEnX4T7w2rjgNMsD85obLTqQprd66XFbnQrn",
  "key34": "3KByjJjvrgmbEpbvmP9ViGrSrFYzqDXYwuknqGLHrL7AxZZGJXsL6TYFbN7G4ERwM96yCpYstPmA1jmdKnniykK3",
  "key35": "y8hoLLHvVEy3gw4q1RzTmfygxgvhQwcmVrDVQcy6t6mtU84zxZWbjnRASxKbbjgoro6P3xcc4iDP84cnn3prCHq",
  "key36": "3oKB79nJdUavtZjWMC3w6VEFTtogvjLcThbRzLcRg5BNHCNNVSQJU5rWdMH7vQKNqU3RBed3iAd3Fh3G4Kukm3eh",
  "key37": "3d2rsgzp1wAKSWJQFf9vExx8AnZgLXvuwb8SgTYNEGW3oxvo5kPhKUKCKfGrALzgNi7oGT11qRTvgxPuGmhGTX1r",
  "key38": "5CeNiux1xezxyTz7SwL6q864A1mjkiUufTrVcwQUZuT2nj2Tfc6aUMSXjekzwPw1KmL5m1suHtbN2coCypQJtH6w",
  "key39": "27ruNYJdCEbWMCSEYYeUWEC2opTYFQiXnatJ5q1yvk6Y5CLVpMygmzjMAMdhd26pzTeFvnuBXr8vQtQDDp15KCrq",
  "key40": "xpMgbgva3ErYSX83RunvyEiYaqhDvzpEDh7SvGLXidCF8ggtAT4a6XfWeaXYq5uQrEZa7gFqS1mqz7dZ4qXJsJt"
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
