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
    "3S1eYN3YWud4fJvUK7YeAUqf6s7BAmupQFZFtkTA2z22WtKVf9dic1L1NroM8stdvY8b1jtuMFtSqhLSV9vRLkrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqq4YzGuZk4ggGToS9Xb7Y9tTX9nGoCTDMDWpaqtdpS4jRKMjRJg2mGo2z9Li4cFZRq4SoAvMVmLXHyGm5XCrha",
  "key1": "4CHp6Wm2Nkjo1HijVkQcLRMJSS88LfpMFERR4s46EnbCyMgfHp24yruECZcWbLhfKjT9ZucAQeZRJoABHCLgUas5",
  "key2": "5EFM3s7oLUrg8ivtS4XLvwoRw5PstsNCesgSsCVPVepZPwrrZLzjemU9qCFseAZbcw9iLnaVkVrLXTDeqikdTdNJ",
  "key3": "ushXQmnapZLWjZeEA6CR7fjJqFrGbQvYsAGcJ4L4xKG1a4ewqmJHrz8YY8phEczyf5bX7H34iaTbphxHUKKzJ6U",
  "key4": "4yS1Ncxazve24bgskgE64Ss6sRi34FyQfRwhmu5GyJMQi42WdHgtiajquMd2oHSHK2e7BRcGSUVPBpHRW25nkfYq",
  "key5": "4FR1oTtGSDeQsnYXLEkmYUjBop9XbLjNmLqVueYiyd9gejNWc2Uadwmuq9pfoAYeVNePdghcNw7p1Ln1wHGqWttn",
  "key6": "3jxzNbExMMtoesuvYK36VRDTH1kqGh1Wx59SK6sY4a9gzV3hi1Tf5r6JPggcwwHnAGKXWi1k9RwgM3d965Xbd54s",
  "key7": "4orWuVmEVoK68rEQXamhqgSRAcr7HD5LCW7aKykLvvCpmt7eTGsFzw4TsBJLMSPKbFqdBcLxMYNQ6dxSXXp9HraJ",
  "key8": "3FPPNegNhh1QbnqoMKzeS2dyiGoxEXzPLwhmJqtB5XsZBuADLuhzgrzjRcXNWPCuSs6NK3HWJAC32LZasvmggLwK",
  "key9": "52uZ1Zay76nxyjBwVAvEy3VE3FeLM2VoTMgDD7TVvsYeRCNPNn6P2cixnqWzJS6insYsaosCqSGpR3o1rGfWtBQp",
  "key10": "3viuvUvYu4vJNTR4SFRsC2szXiMgYCXf8GB5DLaM8CtWoQYQj2bt7xNxpcULcvcHS4b9ZuU61PUb6YZZG5mc3orx",
  "key11": "dZrsqGioHWJvjSnMQYc4r5Y8Ji7RAtFWYETEmcGKNWurJbuaw9mAVn8ETMyxTp6we3xXrYMC6DQXsVSQgR7J2wY",
  "key12": "5bu3hMBQycH8RPjodKphfDeBuzRbUmotSpvEp28xneQ2qXQzWwNzJRVZgfauKCTwp3p27QJtu6smJGdRK7krVu2n",
  "key13": "2NUnpjr7BH8ua6dMDHDJancpYFKrNqjrtLny2cvDLg1dkNnpffGJhKaH8fdX5taLYLjxLoD7UvRVZWVztHXs851V",
  "key14": "2JpGD6mxAGqKDMYYxvsAfRjuYs4xo2rXjkbpCBrUyLxGMk7i9ZB8AwR7eT1dt2vmcAQAUQGAGN1MeQ67LDZT2sFX",
  "key15": "2kshuF7mhuBmpjm8jdbNu3rJiK9n9viB6z49L9f5qM5sh8txigZ4dqH5ro7myLY42ihRw6wY864mCcy1YwP58kBd",
  "key16": "4dokTCKu6kgiAdNfM5g471JNsSTcwkoXFdiSxBmPKcJ4CyrwZL9RxmgGVGYq4S43Vi9sjey6niD7ja93NqEco3N7",
  "key17": "3b6WtNte2SbKgcEVM5SyRnahPME8wptzDiVzap1hDB3AQsLxNGYqYxu5ZQbKS6qCjHmHBz9Vde41wGuDVGNG1tNg",
  "key18": "4gqLoACSs2eNDVcy5EJe9XoAdKTHDFdkGZhk8PM5pissCfPgXxA8VxFkUCvfVe3hxFv986bsZ2uM2Etxh1Pf8i9b",
  "key19": "5mTbgE2CJiJtrUpWM6aR1fDUuJ2yV4xa7mCu31snmW1cZDLYKbGYiqfzTXVmubWyd7vEcfCqZkPdLa4mEEpFYeZR",
  "key20": "2rkLEGEt1bwDMMyLar94a1vGVTYLQHdgEHjBJAdpemJqLD1tXYb1hZDiCA1kMdFMsxWum5GHQpxSdqvwbEDRqMFo",
  "key21": "3djx6jxS9Q1tsiPRV2zF5WhgUgHG2BFpm1V8bh7xZSSysJxGLaKd4tz9y6sCh7Z6NpAVYuSMQ8Rj3EvbVpPESdf2",
  "key22": "4C7DVqWyQqNq3pYoY4ecLaxLPBFMudgd6cxJ3CaYpKNyatshpZa1CEXv6sxCsqMD6xxnsnfVCd1pyKCaNmu2BEkF",
  "key23": "2Vzg9dkWVUr1KUDcWPBE7pCfHHuiYMsHiJByjk74BBkWHqpNUmepWVpapmuw6gDgTViUuonQXqvJGpnUEpKtGRkv",
  "key24": "3ZwE4SEgjc5mHgoVZTHFKorzVY1BuqmgKS3zhYhemQPbctGn7xTZNfnC3bPxs37SYgXVXAKAsrvRk3cCvUsNDT6a",
  "key25": "2Fa9773qwx8KLNEomphnrvHMQ7GNr2EcVHUACySTZLzBfrDYnTQB6FKoEpyXLqp1mLKFAvWrnTffd9s2vd89AFdm",
  "key26": "2auLCn4JfEfFpF4o8hkLtYzttoGE4ojWDqsaPXJjj2KgD1pk9vkdp5dYPmmH3yUQw6egM9nnLSjx31aCzAyoCShQ",
  "key27": "2Q3SuFZHkKTTCmGLNDpSBPRzbAv2ytbQyTKxNsqvDuMVwkfoqvefKm811nrL7qXSDtiRqNBvJeywMDGwrffRRKTQ",
  "key28": "4kxYxUDsfc9wS3MSRDndW9YphqAB3TXZoCzsPMJbmCEEFeuTKsuGjcPxosYxAx21LTd4RtNQfhK8fehgb8zNHrh7",
  "key29": "3ZHmbC2btb3Jn68ASTFZn7QxpEurEttCLKomfu4MyjrrfFsCK1ptMn2bTmFHKdXXkSEZwejCmAf982xgDFhcJiKv"
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
