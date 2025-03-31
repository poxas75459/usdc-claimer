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
    "4pGu3C1YbNRuk5LvmmqKCaoBASATPD4gyDAbwb1t5T7g6ArjeNbjRmVzQRcg86A6X9bCAvMmE1msNe6WtMzkoXpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNxNx2zucC2wRzuPEPhhcjrHSVMkB2cRqi2yP9SBsMnsFW4Eigw53qxSwnt5kveogM9kkTC4UZbDA5ZHPGEkJWL",
  "key1": "4Qx1KufzK7XZWG9CYuTh9YMWd5w4fYacQbUNHb2E9gbmB1JU8UiNfwkpJZTLUn5uKaQjEFowvraFK6AmgKtJMGhX",
  "key2": "47LeHbMGjEHcDZpdshCzB2a5cxTyR7McrS2V1761rEih25QX8F9RS1TpJSDA6EUNnHgYrdiirJXoD7djqvAvHmNn",
  "key3": "2zSVLTupQbzmQk3DyKKjcJmym2r72rHxHc3bfQKi1TieUNmUHJhRME9mHcXH7y8io4XLgHv5pJ7C18z9aeeXk6fT",
  "key4": "3iBQPmYYX6aztU8SzazhVRSbG4UhbUdtG6SreTWFGhGnHMmtVMgG4FgQAg87vHTP8rzxrNFg4ZxUF3C6aLcWqsLA",
  "key5": "2HuZyVZTau7epN5snyNbKvpwC6F5QrPGiBd96kYNMgMEF7eRYr8o4SoBJjfkC3YfEWA1boBD6sPRCtiogWQ3hUvq",
  "key6": "mNgtTskWwLuDYvovZy2badRsbieYpyeftcSZdRteCpWpzpNncY6Ns5MWrJ5hbV72XvSmkksX4htYTJ3BX6g31aK",
  "key7": "4GyMSdcnjhLLZ7WHhHTKj1QGxqp1gNvGhYwokgEo4yKPtBtLufbH6KkJ2oFwLknjfGFmP5WbzkvtLDv2wJzPizHY",
  "key8": "2RBzsDBmbDjsk7C7d1eAWsiXj3rGwKsujEkEU1TTX76GARMjCdDMzt7RiQiwt8rbfPrpu1PsrmB3N74h9RP1v8kz",
  "key9": "3gbMi6yqkA5ftuT16JQ1e2xFAyVSgsn4cGr5BBFZaQ822x2FUyU6T4MR3tpAQrDHUkevWoTm51qFubZbZ14Dj3Xo",
  "key10": "3nW4c6U2obZxtnA2by4MQe87LnWUGpvjoEmjeD6L8saNewvJATAanB4TycPMQ2CNMiHkyuTVDVjswpbLPiScrXAP",
  "key11": "2H1gHnRiet8Bo47iTJ8stge4dz6RbuGBLNpjiKLHuiQWVRCXBaNHbaqKnkQFP1pqdFxMYYA8iTC9ojFkXVv5tvRR",
  "key12": "4G4WPvgVifFUARb5JxTZeMUBKXBBLT2XdYxqq7mwiX7GQAsAdRKwS6ZCSKK5ckVMc3ArhuCD9ZayKEsBWXPCS55P",
  "key13": "3iGRmpnPvtyKsvFgGLoUq5sV1Mn5pysqhU8UukZGsJTn9NESDUddMKKFZEQ6WNETkZChdDnW9RDktpFpFioDXwjV",
  "key14": "376RdRL7X6CyYnoUcuDrzSYURoAn5EA4BDPP6wNgVBUTdo2xbxuxiLLKTD58iSz3zuzGd6XuegRATL6eastWbPMm",
  "key15": "EbqrV6KK37ivbsbk4CXwVxQWKMLjXvg6hMhaowg4qnvy8F2ZqfM4UeVPvwN3JMqavk5RUGwoH7kJCHdx7wf8RB6",
  "key16": "47ggUzmuEfk8eoKqefhXdNpXHB9ucw18oRWWgXcf39EX3DccKMUDuwQXn67svypaek43WyUaaqyYg7hFJdckrj5S",
  "key17": "2Krs4UZ1KWHe98ax6ELDJCfDenFnseHJMevQSZUfCrekyKGTzcuWyU7SfqV8FppZ6LjY5UsLEvQAv2zTck92g4NE",
  "key18": "5uKq6zGdU1y16jRGPoYCapC2G3ksAoo9C1wD191nQhJempkK7yXvLtShLJQim78sCsL1Xuzb8Hf2muuTFNvK4GV8",
  "key19": "4oGabkhqNw8fPVdoX26CwPq6n141PohKiPMBWDEHJ1yNTVzFkGV8K6q8hhADeu5nWVzFzqvFVs7d7p7ykfU8eeJ3",
  "key20": "4bfFCuAG3fGwmELFZmBFd2hyZ4WzMCJ5ZzQ6Z4qF41iB3eWPXM7PaG6uBhuCAM8Aro1TNaU555awpeyky9Hr9eBG",
  "key21": "EyVADBPyjYAYLARR2nwZE8ekcRaeJ6KmpbSC9Jw4Qhzsp7piEyHEqLV1d8Y9bQpKDhcoVdXLU4FBApsgQHMq4vS",
  "key22": "3Zchoriobc4yJmLb2BLUAXSfy5CB9ycYEnRArZJB9psqj8z2iNFFjBprAspz1qRbCf38V8YdvWJnzEnre4kvsNSn",
  "key23": "ACivyFN1sjEMG7R9egng7RehVbUFby4nG6FxN7jTkzeNtvs2T23jz3t8xTGwGmE4Dxxv3VDdaMMbRzimSkKfbAo",
  "key24": "47mVScKL38r7cujAduT26jpGxGb8FLXMSbcv4Hp5cDiN93aK5TmMv4nPZPs5fzxe2ViZRZUkVaQARRTADKurcg7s",
  "key25": "JSaURrUEWzv6pykZgA3Wr4yW6Xb33tAWaDT6DNGe1WuyaK5M2VQHrB8xgaH9hwg4ASZBYf7LqkPrHrLzY75mSh3",
  "key26": "2arghXMjz2MWVMgPb1MV47b4YKHPJpVyxnb4aKAyh4UpiSYyc9b9i1TdUJpUf32J5ehfMoo2bGVUJRbFKnv9yj86",
  "key27": "bgt9TjPRJwG2aSfgEwoPggJhVa27kCpshhMEWUF8nCHkFP6gySG9upLkt4FebbFj7JjCgSko3gJjV55VAcywjVC",
  "key28": "4DBZW7bh68k4r46ScB6XuSJSP6v4Djbw6W4TewKo82Q8CeKEAmLu319vDiy3rgGP43tqxx4KGFKKwKkdAh8DhfPy",
  "key29": "5WKTeg4jB54Y7ee85dt8kV6qdiX1G8h1V8auQAKboXYbZkGyPjyuLT9XEGxau7PfP312pfnSciKHEf5zsJR8Wvrz",
  "key30": "BgVm1UNptnUz8Jic3MSdiGVVzMauRpWXcMYoC61UziALyT8YFHnu2VXH7LPCney5LdU3eZrfbzRRromQLZHRsuB",
  "key31": "ZTLxPcC1Dyd1gmUjr8BKbeYF4dQ3TQkkjkYCBXxdQ2PqisxqxZHrbDrudhh8eRLdkNJKxdgMatFufMKiAaB3kas",
  "key32": "58yJVfeEGHvrGg6bCsXgWsCAwagxkibYbxddtFhq2mCcn3rSPMrYBz2G4dEaEFv27neZnBsCSe1sGF73Du8CkYsS",
  "key33": "3E8PB1oDTcp1GkF4r5mQyBNNuhWEEjKHyVmdrJVSAeTDUojrVaiKqNi6xbbATApCWm4n9FpYnXT63U3XMn6joEg5",
  "key34": "Sk698b9LHdZNhxJCoxrzrGvJYmUyTzSCkSxZYNqQAeko53cwix49CxZ7prBVP8tCedF6YPVk3FyNsqMmBBG4ooC",
  "key35": "RcSedaegh11QUbuFcFHuaRj1HxkFMEXQBop3YU1H7sPqXGRCyBaaYPnthmrRdAzkmEnD8yUo3iLQhqvoyueAHr7",
  "key36": "2NPivAJXFpdADobUdRivjpGDQpNv5tqE35HtHiovHTQ88eEDov6UQC7KLTXivExZqtsyexELka8wdND8hqfkAkY6",
  "key37": "5pMszHQWtrvvvoQPfRWTzv1GouxWEc3YoypgE5ZaLvpaTkBpfGGUanBkZrLYmgZbNrF8Q81t5ir1XVU7w72suVCz",
  "key38": "3J46BXQdBdFaBqwxtpeQCvjbhc3Ynhk6kMnsoioB8WJCWQ5QPfwFoTnNzmvQpnSXsnEfsBd845JkYAVWzAGxyD7h",
  "key39": "5VZBCLrAUyzjDSBLTZMCoysuBFW2E2S3i4TEcef2uShmhJ2NHm6YSS9pdrdGmbX5bE4QysHbwWM22CajstpjKnRs",
  "key40": "6cuL8xX6T6odAKPFmCBoHaAGQXDwq9k7LrYZ9q6n6XGwiJLy8dpH5zJfkg2cQVRF9jHXJopauHNTuo8uy9ADck8"
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
