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
    "67V39auiGtF389EcaLUZ9sPVYY9eLUBheaD7zxCWzMA86nHBYKZMwCwLqn7ike9UwLRpcMKcUaUELER4UeGUw4dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RTkN8zyhNndL8F5DdMciKiZPu42Aeu684qs5c3ZQXXGMeFXE7Vxvx3fcU7LAagdDaz1RsM5xDZVgR6fSyTn2VNH",
  "key1": "5Zq5nUs8hnvEDC5wxiF5vQ3YpXgydpSk8ubMDb8FVkiV3ot9TnEKzaEypoKydffdxd7rEgbqgzJXmtbVxi6etHEV",
  "key2": "3oCqQLAhgXAFso2YKLSZ1LemHpgDjabFNCaDbrk8dZzQTcQKgUzPfGLdgiNguGRgPpDEa8W9HzQXvwba8t4HrQCt",
  "key3": "4E3PB3NXuuKH1VCJxu9XRLKhYeeMwfBMo9t2KB5fDn7bJgo9PvwXpAUDGwbdGDbKrwshh1yW1coFgis5TscBD7Qy",
  "key4": "xFBM9YKwo7Sv5eo8TGNah6HURKN5KxoWjG8sWGfbR3PvLaoYhArXC7iAgu963B2Rz9H9Ts7hb1wmWSpPGor2Ac8",
  "key5": "GqNFV1sSK2kN5X8doNrmoxK7dvBtB4JQ7PzJZ26E1mEFTtxkw6x5orPKMN4f6r1hgqSxvsrMPXHPpi5i82ZdR6R",
  "key6": "3Nh9v2cagnJ9vn1QbV9eC77dRN8peC24WHSb4eDKYsMf2zT4T3DpLHsBSshmveAzYo7WhgJepnAXnHd8Cp7YGDqq",
  "key7": "64cN9Nisun5sd9pWNVo8yCXdeEowZLfFFD6azF8fLAxmGdr3tWrG8rRYZw57skgVea7ZccAwfMGzvHvWxapw6qv7",
  "key8": "3fBb5rEPF719tVfs1nKPsc26mkQhptAhYrCV6MrGVuQsXmyJcdDZk3vrSK5seRSqL91DRgiPaLu7rhoAt526Tguu",
  "key9": "4m8nuZW5GWj2BbFtHjACNiXKrPgHknm4hxYRUYz7vimCeN7bgM2nfK5SW9McJ52KrSDSk6dbGJkCydqwz44SCuFZ",
  "key10": "3pbrCxpUPAdKTU3WtbBgBnUU6cPjHj4ZHAJ2FJc5aZcievUnnoSY8eFmfFXwDsixUKaGr8RjhSMNqqQMYWjmZR1P",
  "key11": "2EoRZ52g317RjpqLCyxcTdu5keZpbJuC55tXQDSrS7t8mi7FWgQFaBnHr5vRj6WWc4tSY57JfxrC1bWqNabuBtgm",
  "key12": "56V8d6r5p9cwGcN4ZY3pLgieF229puUa1WSdBnypKsTGdsaJphVH8pHjUSsJ1aWgFw3SN7HVXMNvtk5KgAcFhAft",
  "key13": "5o3UqsrdWHwBK2ZAs7vZdSb4Wd4vfmUeoqDDsmpJN4ZH7rJfvLwz2PTYRS24bNKYASGMePiFMfBuMHRH9ULTEtE6",
  "key14": "63cpDWAmg8eC5bjhkEAP4ojeofVtTLaCdikQbSD9XM8vEVtfinn2WhSaBE4PZKgziEpLx8m92HuG7LQGf1ukjUf9",
  "key15": "29vq1FSkc94jQdBU4yTUPWyNtfpFFyBdo7ZBTt2HniQzJjcVG5tWN312G1NKHNN5d6AicwRmthViDJW365rTDdVi",
  "key16": "5ZkqCqStFRUtm1gUEYi9o7qNtMN2XWikbhFNiXiV5Zkc9EYCGMGHXX2KKxqxyojVNzPvPt62Hcbt6t3dUuToHAPj",
  "key17": "3FFGynGqBgB9Zbo2YahqvryekpR8dhmzMBGGYtyUhe6qQHTCqWYfYQ9NrbsXQerPEZ9NJRe71AbA2CMB3zeCRpxt",
  "key18": "3V22CbtGqLZRSzcbHqzNaCbv54j66jj1hZHzQsNwTxf6VHobVCYjNRjknxecm6gPEMMNfygQU6NMyo38F7xv7kUb",
  "key19": "4ksu9rnycoBc9qPwimYawNwiycwTtrWwrgXTaZ5PFoUoQCsWg3X4adraDnF2peo2ZgHFa5HnUN4jfSZLm8WJjGex",
  "key20": "3w5LyQGxb5DQH3mGgFjdSvQXKWRRi5RC3B9i48iLBV474jfggF8JRMWF8m6dHgCnJ3a4aD3F9UFwRG4oyVtiKPMJ",
  "key21": "ZppCheUdXfhznEZJq79FCiRi9CYHFJBeCFSfHyfEppzYeqzkNaMiZ4wRQh2dRWdZgK3FbbWxuxYcUHJzYdPEevf",
  "key22": "TuHJ9nhwHpSXnwrvw4pVzfGvNx8mMDs4VxWyc1yoVVQDXWWYM92D9jS1bdYnnu3NwZpAQKapfbhApZp8StNZmz1",
  "key23": "5VK6gHbXpG3brDEXmoopzbxTL7urGaogJpoZzsReM9BhmVPoXCE9GsMY1QPsikhUtfktFJnQazvBVQhJ4BLdVrmW",
  "key24": "ypMGKN7UE6tXV4yS5nKJXQYHQxPdo31e6s15wJGXrZQz1GA3eUsL8VPxTY2LRoq5RsHdFUVezPREAnaAnchBzRB",
  "key25": "WSQ5gz4tWHak78YNpCqAvHhDu1gBLfUdM3iV8wBGwmL79JdaGWZFwc5cgeKsiCi2U2TmXQ6JPtzqxoxqsb7aJxZ",
  "key26": "3VSjjRV2NWY9UK2APtHYkeZNQUQ133jrc9fQsb6y1LMrNhYQFmmpjMK2mhZ6JUjwqU1TXJMaLVZ3PRURq7JvCEXN",
  "key27": "2ckmburKzUi1WX66qMSDg5169myqoSapo44BHguRhS3FCTh2CKPKgGo4SYoh3azXF7KADJcx3EXh89G2GyckZRhk",
  "key28": "iZLktAiJmMmo9zCyEmcyRZrQP7XiWAJrF8vfK9UVDhArdJgpUZUEG8Uwt6k5eZ2vf8Hk7mbDt6hz4rgdAGbrjQ1",
  "key29": "3yy7MFU7JfjZFj7xMbTb1DWwViGstZNj4enSbBKox5gUpo8rTZtps4F2Sx9E2M7Hmr5ctzayTam2uXs6B6sDB9nP",
  "key30": "5HuxgAwRUzxCdDzWXsTwasqWn7bYrqT1uaR7Jt5jw6AGaTpXVFLS3beaGbNA89JV5J52wH4mAkYeMcGWz4sCew5J",
  "key31": "3MQYGASAFdMd2c9SEyBxc4CSVcKyEM298nuGUWTiSthTRQhNxEEY1q3RuAS3hUrYHfjHq574QAWr78fzN5FxbyAK",
  "key32": "5kwHPNTbDkxoqv8hNwhcZzwygNxpAZneoU3VsCrCDvqfJPkWtgDBmn2n91ojBc2kM6itdqjFDk1n7LmgrGLH1CX5",
  "key33": "5gZ5th5ERQwBrywtUfLQWHZxXcBCmpF7oijCY1CC8eCdWyhS7rjeqe77Qc6DRaAeU1N7Zfb4PDJmTNp4CgExzc5C",
  "key34": "chdr6nSJU1aq2d5QpjjaZpiXjQyCrGV6x3AiLek7QAqgVoSwVNdxtEUVAjVX2EPn7TU2EYSYUGNbbfFrx2Zm6rW",
  "key35": "4dRT98TRJiYWp5thXfLbrmUQr8wJPVZHMRa21jtbXzFdLvGab6ymQDchFYJ7oQ8fCu3Fbe9iSKNbfApNnNMxHAZj",
  "key36": "2VRsAb7cZhCdycyDQfj3PipteUA1t1jCwq1MVrf9TTBmQkaqYDh3ztTbuPHyDiwByM9Kgk71oEc2TNts5jdADoMH",
  "key37": "2DFU5iL76YeGdJAmZAEpvfggjojVPYgt6ZQBR3FXdU4wEzDbMHFq9vBe7t2saB9Vj8zDD4vfZjodoHH5T423JMrK",
  "key38": "4PNgwxpt4XQK6Weq35ohEK3fav9RV19HRVWAmjpbZmF6dtRjJFs2cpkMvUnKXvDEDtK7ArELWfmaXfTERNaHRsGn",
  "key39": "2FrgZEVEYEZu39tvu2346u8YEMzPcwoJSGANQ2eBTdKHT8kq9Nmj2Xri17AAEAPiHRKHDAYVa2LbVXFVUrkCGwJa",
  "key40": "4nWWroheRzTiQPdMd5sVfEJC7kfBAJAj4wU55DKRSakPJG33Xr5wJAbuyLKfHccnnYuQxQm75GXpcb4fA8rbWEVG",
  "key41": "3Hu8oibiJTBSKmnJxr4779qLdYeLLHdAV48KYCcePjWX7jMXqEf713EpysMvSba9PkHScHAXAQPXhUY4vcuXjakD",
  "key42": "4fRWhTN6HUdqNB72oeoj72qpmhGY9McHv8Gywxkn9WmHsC6yqzTNZJAMDwWvev34NkBJXuoBx4WBcLKfRTTZQcTL"
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
