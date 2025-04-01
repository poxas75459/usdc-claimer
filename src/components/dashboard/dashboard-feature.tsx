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
    "5XgPGjMtykz6QThfthvoi93vfNJd4W9RzFkw5Udg9GdEaxHqEDuQtrZ2CcYdzptHDvPkbHQfRLY7mB4AqA5hXfax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DHbvF3DV5hp1vBXReARJrAPqcDBHc28C5nR3zBLmr5oLisXpTT4WvS84e5UwXag3TtqGDcnPg4fnjpRCpypN6PN",
  "key1": "3Ba28GSwtoV7Udt9oVjf2X3Gm8kotEJ5xN1zyygC6thRas5ZuVap62BpeRkpqnf4pJn75j7uqwQePTqaXCgVboBE",
  "key2": "xMmHeU6snacejFJLvELoQMoCtUnz9c4apfbZRxpqDAwXzFK5cd5TB1H1r6yt9PzzMNxnpYTxzGm5p2iYLwovmbf",
  "key3": "3MjgJDbBTZpUuBFAZCrTuojYgvb8vKbaVxfw26C1aUJfcF7Vg7i64wDzuENtevKaptqT9DvDmwuxGAWUjdVmuKYN",
  "key4": "2tyD7BRn3TgpPb8iKazd9Tr3pBtsEqMJgr11cJDa1JWWcSScLUoRYQwiFWfzFWvFS2xhcdo7u7Fk8numAPzEaNuN",
  "key5": "4rQRCE5moqaw89SKdMf4HauG2s7N1aQeTEx7AJZvHT1khT7tgsKSTtPDu2QSrPFNejzy2BXQdmG6zpPHoLzASatc",
  "key6": "5aS8GAPDZJxnqcqSu9UWDGMgQLEk6Zwq8HP1JwugWD1kPsXbxewMJxccUvVHa56sWEa6cFwJMjzNXoXVcRRrFEXE",
  "key7": "2gHQ7cRJvKf1xTZG44wrBxDTstxd2XzNX6wEZroHf8Bssz5i16i8dm6U1x8wgLVMGj9LeR2TTmNZjFjFrAYP99BT",
  "key8": "2HpP9ysy4qp591XAyiDs9Fz86BgWLZTbLQYbb3Ji8Qam9ZhPLFrD6T99NKZrmWUCyPHwE3DFsiaCmLocJL9p4uVG",
  "key9": "42ep1a4ed3Jt2jAArnu2sMzcWncr7Qgvsu5oUYLjvvebD3shbXXUeKdRdsTm1B9m4FVT1zDauCfb6T9ScHE1EwdE",
  "key10": "tAYFHeP58yNi9emweuWxKocBAyrsCiAuVYsW99ADRcK1X2V23nVPMDfCQvqFfSRqQQgPeZpFVsvc5VAvSrdijsS",
  "key11": "2U8Umjj1pHCXmfauYTtEjTQMJyWmF8Z4C2ojc5MMLR3UnGBKE9Jo5kbCSqMPsYKki9LfQBg41TN4YyLwf8qraCSi",
  "key12": "2CWMHHxspkWRj8MFMgAXBCjiUkkFxotBTNFDda8dFLhkP2jJTxJ3EEgYztzMjDf3EUQhf4RrjBkHQ9mdZ9E5PkZx",
  "key13": "mw4GbVeDBs1enxuFJTywkZTfM1nZJYondiot8Ems3RwZMNRHN2VZwWyLGSD1nbWMSxEKoFb7kdD6d8isqTmUpsY",
  "key14": "c41jo8nbYgsPGKNwKn9W6hM2ty5py2sSgw2VDB9zRf1k7gcVr9gMRAtMHCiVKTp5PSNDrePae9LCx9AiSfDJNaN",
  "key15": "34Gp71fYoy2mhGYPrHG8xa1U4s2wopVnHzhSZg7Aw4GmA5coBZSkVMbzT8AR3o7d6pvM3Fyw6vrtnxR1NwuzPCLf",
  "key16": "5gyA31quFL9HYu1HMjFxSWs1FFBs8dyRS9KRSALZhEGBfiuJNpsb5hZfmRe9nAspfYv5WzgcW7DL2VKu6qPdoUN5",
  "key17": "5qcDMgjYWyowNPheZTTKwd3KKLQVG6dpDFAnJMj396PEbTSEcL51vqje6ob3fGnhPGhkuzNCfNgfL8C79cBofNqC",
  "key18": "54tkEkpqWEfyzxBNJCX5pSGtoNciFabRdcd1KDJ521kz2UjHomzJSVbEUBLhGu6uaXGBoCqAdbUVYEFtYUqHSotY",
  "key19": "5XPV7SxecBB1inYiept5VdUARY1tnWByhtEGCLirumePUoM9yZke2YWEfCJhGyKGd2mxDuYyU1EfBvJVvGU7xrg",
  "key20": "vNnYfJzkS5V4bVvQqyYV3BsEVyTZi4QHw1PwGxmk9YvkuddyYAkoatSvb3Nua1xYvRK2LrMSsiouDDuekyiJvNk",
  "key21": "4QftJb9SeasfmoDCCjbkdoVf8hVEZJ4SUoWU7v4VDEjaqazf87dKF7ytnvqdGC6inuHSTULkknSC67ZnoYCmKCPB",
  "key22": "2vWVdUSYW7oqVbqyjET4HS9W9idLpZa2XhPKCs8CdwRXCv9cJ7PsVDtYkFbqJ9jhHx5UnSL1H4wVTbMhbCEawumU",
  "key23": "3Ue21MYUw4QdYjW49zyUNB6ggVSvr8qwTp36EtCm6Uec1vn22AFjsKsSuBnS2R1F39R9qVLV9YPvzw1zT1UEnS32",
  "key24": "2MMs6EJy4Ygy5ZeCvbr677G5HWjbFLcEkBfW9mK9G3GVxaQK2QmMhEPWwwZt398kZsjRat8cNwgJmuiYWH1gC9ao",
  "key25": "2BKGHZy8cvcfaxYrTHwo8EtY39q3ezHL4MUMRektJrzGr6GCK66wbn91vTXoGCNo1pMyYGo5jW7UiSQBZmApW2i5",
  "key26": "4WSUz4xiA53xoYcrJn1WWEMfkSz9ju9tN1RLGGTT6xrUvoTKvshEWNPGXYsn84UYdmb6Mkr5Ae9qbMSD1xiqw97F",
  "key27": "5nZMgwfhvnqVjVoXZoh39UokpUTyBi2cyjsvLaspem9VCuPSNwcokLSaBVtcqFLphn5y9MfQctQjZ3m5Eqwf7rSy",
  "key28": "HihEAi5KHZ9DrXCn1jGprNe2FeRKUztStkAqU34BGhvf48pKSjQ2A9B81C5ZcLoKtetWMRussEprWycqiz15yZy",
  "key29": "4o15pDsj9wPDxD1sruZGoWBXxphXntcoCEaNKUUASQKZt471woGpLewydrQHVPqg9qFnxbhHCb8cdTaUwtQAiQsP"
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
