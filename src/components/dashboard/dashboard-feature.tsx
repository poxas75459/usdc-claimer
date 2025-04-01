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
    "nvbHA4H6ec6Yjtzu7T2DJ5YHHoBuyRba8ADct2nuJ9xnqLTVdBWzwRgJaXS2bUL81XsegsMz9hzjKUQ8wrUNJRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHshMktZ2JGZVap6U7849Jxj7GsBgSuSnJeAMWpePDJt2HQFbVQLsRxJaZd3V9LUp9SDcL2dP6DzEkUxTdSXWJ",
  "key1": "3W8cBZqE5cjkNupmCgNmcgdc2fUBiRSJfDK237a2jW8SEAjQcYL6iFyToB5GgBCMmAvBz2xPe5ZofsnZeobTFXmj",
  "key2": "56M3PVziTZctKkFceaYTuaCHV4C2sGLMud2CxRCKcJsttGyMdXzieULuWDKuVRnAbCNzovCyRjiK2JoTeLRcbowf",
  "key3": "5Q2S3pgApLX1WM3NxoiPKbhswswLxPFKbdb8TeAJkrez2jsx6fgvmgbxMBeePWidSunjnn3hm4GoCgMhVzmRpfnd",
  "key4": "4sb57AjxsfULHR7o7DX6FYHfVwVsi1w2P5ng32T4WmrKdhL5hENza1SSi5B54ZhJaBWpzr7ALMg9butiN5TJ9UyV",
  "key5": "67J2YwsATiB8dq1pEbGN92F8dtRFgNVc8gsS9wd6BHswRTdctWvv5W1aQMMDuTJmjjnJy47MH8FfesYzD9VuaQnG",
  "key6": "51KsaG9TziyANFYvir2zaoZ42UbBc8kWoAvKadNKbcfAQESAQ2hRnZTLLfhpRJ5Pftnq9ScMgXAfmJ2uzCXnFR95",
  "key7": "3YX1umLAZW4couVxBtrw1LqtUTLV8GdrxKkv72RJNw8njFDV1cMPhGu34TbgoZjx7EEVPVtjZgNNiwkVNro2f5pH",
  "key8": "4hQuS2RXU1X861NgPE6eQoxyoytFd73jcjKutnN2ABsiyFCyYo4iytePJjk2FiJ9uwgsEt53vNEkbEP4CShtjyN7",
  "key9": "3PnS6yAs2yix74FK3qmLdruN9MyKuUDJxrMT86bKABqeGxkGWshwgUnGUENTDZyxxWmhDoreWed2k6MeuiFfrc2Y",
  "key10": "5JMAa6M61cetPTUZeWcbbifGJJEBTmLoagh4jNHtv6177bx2NcYMUVUERWfCd9xDL2yKQt7aajQqjV7hoFCRZrbp",
  "key11": "7C3x2N6kWTcJXJCdtd6yo9kz3Z4Erz1JbEp5CyB9joMabWWjjmZi8gucEjNbLoHhum69bDHVFC5hfLtaf4LrBrN",
  "key12": "4mqgqgWTdbbGWHie9aXmvDzZpaRDXmSDpcbtirt7E7nMJtZ4WytFqJvMFxBUwva2MbCnsdkJsrBW8Q1Utascu78Y",
  "key13": "5mFw6U73DjZjrZH6QzfuDBHtu277yt7EhuSRMFWdvNDHdkqzr1uKLbEt9QnXioEqnQd2XC8Fm2y3r6duvbKBpNwL",
  "key14": "44Gt48ht8Z9EjPUgGaLaybTTRxNsjrV4nfoggMCoAeKiSyqXY7f1wJ4HHWYm4YHK8zrxjppRZUcVxAUG6B2TTtK5",
  "key15": "4BTE97PSxjCpuqGzXpuPjhAcRQ9R5mQjxcekE5LgowbK9MR9bTQpkhhkfveH1tkSgP2Ttt32fFTbi9M9BSsXb1b8",
  "key16": "5N9vNzzZCs9ktGnkwHTjHy4e94qJLBntARYoariwiRLQFKp1W4uU9bJb1dWRYrUERgnz4DtE7tcbibzRxz9EsX2c",
  "key17": "5qsyHJE3PCmKSpCgXEz1hYhrEZBD2mcuE7kbUU2uBeWQCiPhQZM8Zuuou7UH6TGiNK6NM5WRRigCTLSLBpByxhLc",
  "key18": "2mH2ePyFnA1fjZxC9PuhNMqj94vz5c6DZS9uTCQZ8WrXcddMkd5HqpjAe7WcXvxaiSV4NXcnP2YVweTcUx6NYP7Z",
  "key19": "5ggxzAWWo7quPYvZFPEFFhVNfwAT9pg3jwU4x93sMMscBKxQX4BUyWmePzXzNoCEL6MdKnkA3xTUNyoYYVdiV1G8",
  "key20": "iMMYRKU6VEccBkVyEX5Whs5Ta2xHwfysdaetkRXmZDp83YrGt4zz4C6b9XhsjzsEpaueFNCSsyRgHvir61Qfbm1",
  "key21": "2wVTsXjnh9ACwdKC498eqoxQD1JGCwG7rgDkEyDz8jpLQ6NZ9Lrb6QSBWMwMoMgzV2P7XtmGRuynSEonYspX8UhX",
  "key22": "3uoQnrutwfrBhLvJmuUwjMYYbG3yEXXN7tAQRW1JyocvVbFYk9jcbEetP7KC8hZRzDUb52nxXkH6TAF2NiMCLkhV",
  "key23": "3EtdJbUHywiT9o7hZh4LpvnSdBR2S4objmTsZfPAsGBZamur8NSKUsxyLqFSZcxSSHZar59Q2Tn8fqZg9Vt6ubpz",
  "key24": "VhJ9k15fpY5RUSes4yVdo4hFsFsGeE9uKgReWebgMLHpsZCxvakSxakpSBFAwEwV673LCBnrhvZeeSdL7rRo8LB",
  "key25": "2DXsBkFQ4m4Z9nEboYE5NTVnxiXuZ6GwjeV2WRLUT75kPJ44hiyhzrjRtAkF4KPHuBdBXwhj6kJp157QagSJU3Rf",
  "key26": "3nZqsua4NRXCpR1MrktSkuxZg44xNJ919VnmWmjeHKL9eLaDN7QCHgTjEUuCogeKKeDUqre6qTbxfwt8mA4KsfzT"
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
