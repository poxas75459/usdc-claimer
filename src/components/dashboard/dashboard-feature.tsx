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
    "658sJVN5sg33PJwHM6BnYmXvdx4c9F87xnq54aDiM4ZSuLBkEXTG9ack7VXbQKWXHr1KsNDMSFkx98toovvTDsPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhvxMfpuLcwpZK5N8RCrsFnhCd1NQ5GMMF2QuDbwDhKNdavZQ2hX2TcvARt6kKx9YMTBhfnQkFxz8JnLHLnxkFP",
  "key1": "3u34jGkaccpM8NMtCCmtQWChPBwu4jVhgs791JeFy9QqWWsyRfgWnJ8aWtRCUqmYLX7Y5VgoSNAngLEXHFqeGc4V",
  "key2": "2qzFFZD1dVsWe4sfVZvULX4ysUq7DzdM55Ywtqe26doXCgdqsbRTC9Se7fgByRaYifGVNzmAnjZtPGLvrw1u1rsh",
  "key3": "3v34ZBCjAAVfBxiXLxy4sKJiYjRekVD9wQL6m7UYyQohHmRLcXueNjU7YceZNwvx3D3qXFYThkGBV9N6ojpRoXNe",
  "key4": "Y4FHCUFfg7rPQZEGixKzH5Grd5xqgWqx8hVRSex2nmWU13CFgGHE1sA4SaFeVNJYwL4NbEHPgxbPPStktCsqv1L",
  "key5": "P2c7fgUnm7n171mUKjtWcTuuC4dtQ2HUxoZ86LHnNXbqwP2dV1TCM28bRNx3ssfgRqLgXPoMqGZCLfgL6oUHqnk",
  "key6": "5oMDivT88vYPRtumUgjJvANdjxTucURvocxUhihyNzYauNgLQtFpzsjRhu1e1LzrFp2XYy6xqjTGv9hfg5xHAqxs",
  "key7": "8yV8f4Sw2tVa75rNKQPrnC6fDtpedbnUi2Sy5ryBTHzBDjfAh6k7A5ps4CLo5F8agxRJMh2PhQH5BSVBQaEEYpX",
  "key8": "2gpDUEAFx2NK1YEYSrqm48BPkas2mwp8iBwMWKJLA8VgubVusv6ouVBukQt8QC9cSup24qQi84m2cDB9VhbCYCXP",
  "key9": "WXRjW26bCg2mo3BQ9ZEu5Ku2FoisdPDV1wf3LFvMFqu6ftAGaiJEt9K6UcS6nxzEMNkEJWZwwNkTwq79fVmv8fH",
  "key10": "3JUyu6o6dnwxqWaK2UcXftzDiDASEyz9LXaiTJ5fvk28o8hgbpgKtUvm93SroeZg3WsRWCBbqMR2Ty39cvY3fb7U",
  "key11": "RbY2h5H978XhQaTAtkbnUgcuM35vd7S1j5Wj4i5xgQGnNKPjX1oru8kKwhADc5b8ZBVChf65hqAQAVKeQAU2g4b",
  "key12": "4egJoptVWmKR2x7XmacLAEm1Ze3EpfPFCvxGDBWYk4YRejokxiuhSHZgyvvkxRu6RvkR6dnZ44FM9QceD4XitJGd",
  "key13": "UtEB7Gc2ayv7JVRWDDJJzpCvbGdx4LkfNvbgok18Gjd8D1M8gygPcNpjAR3D3nVK7prdnT9XgKjJtmSjQpL3dKr",
  "key14": "5ZDz4iEXjasGCH3B4SbpdF9pumDCLL8a3ZdTsFDhGX8fEb4Jh2tZBVj6u1JZ8V7RaEZ4CxqssaLdeAUnML6cJcUn",
  "key15": "3CxYBNUeEe1eUSpqabk5i5TGq54avziPzmFWjSFcj9NNjFya6JTccXxgxnBM3oebq6biowCZx9hskXS56Y4en9ry",
  "key16": "5UfP7RAfidaPF3pC7XyrYBAhtkMWGmY22v24RnPa3zY3fdMf1N2k26bpWYpikW65XvroEqrpAj5DBBQQq1QML1wP",
  "key17": "3qFXfQ5DTdV7cWC4mkRW99oyirEW6yqF3gzWqiux7XQJQpevzinG5Gp4TNZCGbsHHkXfeZD59sJ6f6S1cYnT3Ti8",
  "key18": "4RigAhSzhgPNDEPQape2vgfWiRMBenwFSEDQVhNE58wu62AtdWLuen38S4zmujGygcqE1abwwg2uDRgq6queVsrC",
  "key19": "5XDfC2RqLkPZ24BGzwqyjfkUdBcSCACYKGHFjTFztfPGabG43MZUkV9FTFpU7HgYEddgfbeYC64Zmnr7QCbdEhFD",
  "key20": "4euiBCdPLMk3rCuuM8SfD52AJMEermYrxg6qbEPRTDPDArLrbK2Ub8Ji1BGbPKQJRbSDuahdnjhbU85mk7qSyoyh",
  "key21": "57wxTthKgdL96qm1NABpnKzhkh78KdBKu1LVj3D5v9LgcVvUT7UqEwwzAxst59fgw2VjyxLdWWXRWbXkeUR6qXmo",
  "key22": "4uHfk8nePqdPT1TeGM5mqUsM6mEQHF4UirnfxQ4qfp5qYQrxjBW8k7htEskXqEdKkPEbSer6g1E3wm42a9DbCvn8",
  "key23": "3z61L9NcAKdN76bMVhRGTSuAo3ZMhJxxdBJrZuvwQJkXb4YSQQRGmuhbhLRNnAMGssXsW6jvNctKJiz79a5XhDzd",
  "key24": "3B8tfN2FRyM26hTWoBCcZtq1swGPxibvgiydKLiCuL8eM1qhXutWx5h4TkKJbGxMg733xFRpKu48D9xbRzoPHuXQ",
  "key25": "2bRDyvdyY33HEKWSi6FsVbxe9dMsz92QbDEj8WFURvGFEe3ptWTtdYd5fzJNiPx1KKGsXr8DgYWwWjPDWoxdMs47",
  "key26": "VBcsGGbyPzsTe13RPAtt5F5jzbk4KFdhasUBTXJ1vwGeS5ARVzU4RoDoRPnUfy4WzCrYWbKxjdphV38apwacSxP",
  "key27": "2C8Bo8RrFqmLsZrMZ4uSL6pVN8wbkp63pZX38GkA1qdSus7VmNMgh5BTjBgaPkf9b5X5A2triwxzfpZVV4gjrBCn",
  "key28": "64LCcA73RSrni7UqMqStsHkN5iSW2HFZ5j5tS3hpMWXVcw7c1utMFZipGzKApPkRXS3eaZVUGd7RmcWDa6cJb5Jy",
  "key29": "4AGtieoaNefxKGFgZ4ngcb4Jg8KuM32N8MtjptQJ4H4B3EgHE7cRjKvCcQttAcRwekDJDGCTUii1Srpi1NFvLy4",
  "key30": "2ce5ba6Xa3Sg7aNBwp4g1Zduwg5o4BiZ62hAdvJJTyRkXjBRS1dxTpiZCEyHKN5tAaNGTGquG8Zw1Zy3nELmgxZ2",
  "key31": "5adAwkZDFrn83sf7Pn1MHhMyGmcCVcGPjNAdf829LKfnGLZy55Pb5DY6PTBu7vVa1qNahRYgaNXvCXzJo7PnLV5G",
  "key32": "7Kh65HnQm2HshmQPtMNnUnXMLGxX3qoq3etJreC9F13LiA9w9XYGTV1aetD5LebX4EvnmjNrNwwfAjp58BeH6zS",
  "key33": "3aPKrdSiVyPA2UHjTyRXCFQmkUAavtxjFK3D4Fnt7FzG3Ew3dSK7tof8Yt8vqyj9LpanuSpv7XgSko7eR5sHJPqN",
  "key34": "3iDEjRPn7ME8LWSekhs4VwDvwnQ74TD89m1ftovADT3xDYdRf6ZpyDvwjkTxTY9Yq39Nr7tHMShN3rwGZxjaPY4P",
  "key35": "5CZoStWer4FVBwnKy1bkZtfwffFyt799EwAG5adSWeQjkDMMGWqhh5QwRcPHGcbaQquQhHrN1jS6gtFchhSsM1qi",
  "key36": "37AVqn8jwjLmjP6LmMV27xTi57nkRRoLVeSVqpCNzrHW2ERQrkHiezNhtWKKQCFNV1L2DMjjHi5u2aedSEQeJQAs",
  "key37": "8n3NAh4REYEtFtM7JNHwmyKuSmgEsq58qzqMotrg32Fn9trwfUSqUbi4qn39oTYjhwVSTGWKtuS2Pbu45Cz1jSP",
  "key38": "3B5s6GTPkjDRVY1TogmBnoYNBnTvApN6SwNPZEpa9NJcMija8MaM2dFeATwpz5oVbjnQ6fQukSBJ2pFpk4Wpvto4",
  "key39": "2kmvQ2P7yTnxYh1B7K7MVkzkigdSbWY9BYiHmGQpkmqq15z35JXnifS1eEXbJpfNR1aSMjbdgpPd3rAs6An7t1P5",
  "key40": "4mHFV3kJHgunMo7o7jfJzdptF94sGzXxQ5CMnWASAwHtvv7kXMgwb1BPkhkJkzS1mKShikmF8M66qtW63fRiC7Ft",
  "key41": "rGF4p71NRkmRjcRZ4fwy6dey5VScHFtTtpcPXKKJWniv9URdEmMUkgaYBcCiXbJAZikMhjw92pXhfjTvxCvRZ1Z",
  "key42": "2VZTaAXDALbAzKTxqh3NAJ1ghvjzL3xseS79kaS3xtrZHhzkNGy8sFLAdn4y1kiM8o7cU2wK67ZgE4wL7Emc4gwa",
  "key43": "42YLCnN3z29TJvkHXAHPitsD3yBN5x9f1s5geyWFvhfzDGbJiGx9udyLjvyZvfFk22bhU5YjEG4uVj8byxw5rNz2",
  "key44": "5Hh1YiTAcQ2N4KHzvZ8pcQqU6YbtWKEFYK7eWY9C9zHkdgHeNQfPYZ46BaZBeBZsGm7DLBwfnTczezeKxUaZiSec",
  "key45": "2VhDm4vN9Up1y6rm2dY34RZrkDgkbq3WS6XY816W3t52b8Xu8FoETBBwS49NhtWe1LVw86jGXyjpoWo8N4Dhnvgw"
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
