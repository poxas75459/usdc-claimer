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
    "26a6Zowgnuu5MPbiFtXvyyFeDkwEJtqqLpCBHZRPWXVfbouDKmDMtSZ7Krg7y1nYuRPNvggyAE4tGHd5s3yKaXN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RvUJXAiU2um1qaGcwzKzWop1K5XVE8azbyES7AqmvJQNS9jzdajCtwvmEkWSUk4L8zgCBNRDKkBWESWEBQDJ7cF",
  "key1": "5bJznK356NyhBLDwDcNVjeYTyvjoDK1u4E6PeVKVR2BT8L94CfkGVRZSMwEmE7qh231jb9236uWLYj7qXP7hRNYD",
  "key2": "X9tMwM44vTw2ddiz1EkMiGrqidSjrPqVmks5zQtGjZ5fH8LwXnh2AL4vmVScx7xRGk8e5g1XApKmwL8knJ7Yykm",
  "key3": "ccQgGK4rVfv5Z3YdtKwPhPPAGLo7N3HRiGFtQ3AjvqUriFDTaKvBNhcadPGnLR4epdYJ6q5DghDxgm42n1GR1go",
  "key4": "Pdax1NhWV8WUsvTKdZ9PiyLs1zv1QSF68EanLUrJ1ubZhZ43aBhRzoHkiuiLPLcPS3aE5eauSAwyeaigLNnvt9S",
  "key5": "5RzNe7Mtkm6f2ztFwRcGoHZNja4kYmXeiFRWb5MEf9f9q1awoXVqPZFzu7akHhjRGdwrY9tNVywN1636k2SzP7u8",
  "key6": "3NGaqWrG8gBc4mkvnNmDt3cmnEir7gSn923kNiyVTnGaFo7MMRU7LrPjhLQjqgYpx1sjR92x1S3WCZ84FQ5Ls7CT",
  "key7": "5vYzW4K3QsfhF6BpKZahRq4UbMtjLJy6enKghq3fLkhwEQsMAwg9HHnDjG6zfBmva9uj79txTBY2boattCeNMDa5",
  "key8": "2mqA93a1qNayabzGCySkA19Z3eSstzohWjPgyt2fq85R2SUqj1KkBftc3kzuWykpWvMeQVuVQypZyYChEy9UWoPm",
  "key9": "3QfzCDyJDVeCky3niiZpWQph7KjDXEMniBLm9VNbGe4T4jtJXTGA7jpY6oeme3CxnT4RTYkez2dYwuchFqaM6VSN",
  "key10": "56UJmpHVMsCg7vv7rXt2VZo4xA63KJDXXyN1cAtWkuV72UPChJY8qNyC7N5C3UMYjcHFGq3XZ2n1iNrrJoJ3tGHH",
  "key11": "4By1YfRmWiNiXCowN7LTwY1vNXv5RnwmJgnVAnRoe63AFsoptMmq2Cnd6n5HE46DjyimnonGtsc9MepYLucZRH5S",
  "key12": "54RaMacWvfQxTMp1CGF9y1v2STsdNU8sq8e2G9mrtP85tQw3P4R8HkYoipMBpCFkVGg1sWYs8AM27NnQXbGvKVV8",
  "key13": "64feJ9xU6saLhdbfcDxRBR9EMZmM8ZAjP9h18QiFjtpMnPXV9VTn3VNFqdXEkxR5BA4JoPXZ7QHB4wThLjT89xFJ",
  "key14": "5Eay2cboBDotDwuDyKnt7XitC32iyp9gCfwMhR56Z4VznpJ1cYbBvWDwzdzSUYqYmKjJJhJsTGGM2yW4qwpVGjJq",
  "key15": "qZF9F8ePrxxNwU42qoJt2C9CPe7AsxAxk3B6m3ypveP511kQEK926SC3Lp7xZYnt4gqsCUanrETBi9VTJ8hZjQF",
  "key16": "5ups2Cfa72GsbRDq94tfqq6X1QyBthLNWQ9Tf9uj9GNck1PdWFjWYSqsPkbEXrFcwQdR6f22BPgwrsC1FK9KpTLD",
  "key17": "25biQ6y1Mgt1Sdpx9AWTLbkHdeqMXoJk1ZDuYPZVZ95eweFvc6vop9ma1Fnc7uwTLJCCJUqsA4AAQdAPLjLmHr2E",
  "key18": "4WHe64zmAvtoBmKPCNrdYsveRsSNSFerAu2auCe6wQFv1RP9utGqfgB4p7AJLwSWii4PiWiMGC6TKoT8kYN2uSWf",
  "key19": "5hPoiHdHgJpHcUihEaQYeRrSyNszsZK63emaGYbV5ff21iFjtBpSrqFxwrU221seKN8BGPK51A8HyySL6mhvW8dk",
  "key20": "EPp9oJLGc6iAnCWeBHw7UBmajutgFkX2aNyN5DHDnbxohwiG3trLZEq39WReMtoMXsyTtvF1i3YjKNhetHEvWMz",
  "key21": "2S8AYRxRWTS1CXqBAfVZMT88eja4MEfeE1v1Cbh2yt783j876jFpSweQ9TuDUoAiarFXfhCn3rAriyubk9V18rPx",
  "key22": "9yBvRwFo3mVFcNH3yR2fnLw2xN1Xy2QMwAadbf3uvHNPZRahQ23ea18fcSLr4UqRU3ffmAtSpGpxmDyXSsVkeKx",
  "key23": "3KCGKsZ79gMj2FaX5tk84u93yf11n7q9BztQN72FAj18Dd9EHWNMgEQoS8hFvGHFgDzTjoxrQ89La7fimTQJApWq",
  "key24": "4aXxN3Ge3co3uqKLDpgngV67DPEvmeAJMtKxyiDV9qGLhbHwmbEuAKbc6QCtCBfzAKqAUAHJDPQXgJjEXCNF1PXE",
  "key25": "2WKjFNgweQxnH1FAF9AbSihUWptF2VcsqjaRCFGtik7keuVsZkJ2hkYtFwRUxqe3oUt5ny82f888vSC45YGUbLXa",
  "key26": "2yAUjSBBNUBXoPyyX8DwmfxNB9Fa1UBH28qaCCyCKUQTjf8w7421jZcnHJsGximhFo7vU7vHTBuXh2zfru8FguyZ",
  "key27": "3WS658Kg8ZkzjpHzQ4KD11SkwacPSi3wW115XB4Gdh5pyvtZmjaQgktA8L4MbsHQ3RAZ4nhB16KQrxzd7s5yTSyB",
  "key28": "4zUVK9myWtuZE2WkL8AmTzsLbatqMJ2rEHnDR18uPUUBor72jmsdJLuGx34SkGGYzZLSmVQt9DKdeRRSeQFnopqt",
  "key29": "31vsTcmyfcv3YgQFtEgrcfbKajWpRREUs1jrtWHnrfmrkKMDyCBuj6Zm6pzwBKUZUvom23w3DcRUvPwzJXkLSQPV",
  "key30": "4ErcvfvJ11hB1Lo2mihChqpttVRq8ERavrt9XFosb7DhpmqcwsEqZhxa3e44T117myCYQyyTFsrmgjRy8xUJAuA4",
  "key31": "3jV5NN9ZsEuRdnpQ9sksy4WRCfQ2cP6aspzr4x9GQP6ipR4mz7TNEM6Gzcejvz7y53QaY8xYD96iW3z8TTv7p4hZ",
  "key32": "4qADrdiBwHurijjPuxRmZpqqTMVDPrd9moFUdojd1CtEajYtwhY8bcMa7KvBxq2NSBmG5xchu9s5HqHTGUdXEzbZ",
  "key33": "5THQjnxKERoNwyNfF5kVHyJ7JyhmTS1wpTJ5qGcLwhYd2xpULFL2RERhcT3Dt8vYDZHG9EBALG6bKRG3ba6oRCVB",
  "key34": "3Pv1QnCdhgacbrms7oethZSPZFtVFWptmkGmfUTcGyASiipHzq3qdK81PxTuW9z8LGdhUCgU4gikifRs85FSgPoo",
  "key35": "25evYp6ZpQLSjxchjLnF6C7vWqfeRpox6HM5DnAaWTK18jM1f21tdA51U5EjZnhhZAwigKbDxnmW7XcH5KuHxpfa",
  "key36": "53bU8myAAkxsDG9rZBikgT4yMNg4orA8sHXfCiM4npnpn3VzisnfRvoQLTxeWJjC2JKqK4MfhG7mGcBJB2FQectQ",
  "key37": "45bFVKmFA9eoYuzzLEnrjbR1s29Y8NM8SJiaNhmGvttQ6G4YDM3893V6c34RdsKAyC4ZJLt4x6KfEVroADEQkH5n",
  "key38": "58KaFX6GrgJrKQibbZPW89zHguHRYCVmcYwNRMCrMV3d2jfD35Eh374D6TFeKNQC2ytQMCWNnvgL43v7UtJCJMGi",
  "key39": "HtSBVbDmQ23BwTRUC9fLgAAtBz6Byzaux1jGQaWzkLFQRiXf43pbkbf5bWNysXT4vQHsf8yEp62MNR7KQcs2stv",
  "key40": "2aGpYNw3b9DwhkHSza3GhaKTEZrHy4QLRbbzKXYhBwJAVeqURd53Usvo1tSax4w26BmLf4drVGZP528XRdur812U",
  "key41": "52fYfE4b7eys6ZiemkSMpevkt9NhBhPpRSTsGCcLUuyT31dn5djzu5P7yGqT5xSAPezcxSDXGYiVMpwZXoL55L6p",
  "key42": "3W2uXSxjXbwYUSzfm7vzYWUVJ7FdAjn923XhN64xvLjmUX24SrVVDU7mxMdg2hLrP12H79Jy1YMjj8zERGJr3LZ1",
  "key43": "66Koc6kfFrLwJvaeeJ98UbrK9nCq7UcAozvG3fPwLsMvmUa1ZdQ6aCHY2MVYR9FHVAoMoGcnrFsgunvGX9zP4qBZ",
  "key44": "3ZZkeregLsUKMxGQJwiMptAhatUW52mHZxfiaXLj9KDb84k38F7jYz2JYk5tCELnivoWaYk31pQKFgoVm3okLrJw",
  "key45": "2rRUNnUm3HGPuX3MvoPJ4AN1858tWQPtjzHRfcujKjzi6kJ3EG5fDeWvpnvKiC9wbAZYSYQpNwgkEDfKy5Qhzbmj",
  "key46": "3oNegTfaCiUywSTa5ooFfJSakCxY7ShxRUSAbzgGwbcoWeJXsm6w8EXvM35Xowpfpw7NuXxK6cVZRj5AHQtgvfyC"
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
