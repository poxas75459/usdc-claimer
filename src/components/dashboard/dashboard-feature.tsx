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
    "312ZPqRXGL5MqqevjL5mY423uve4zFm7zEk6bHi5JqHVq71oZgz5FsqnCNrxigwPHkfzDh75hHiHTSzfHWdgxgok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ja4nkdxy8ge5NNFaWxqth5CMWzWA25ACuE3Z1udGr4GVjrUAWMLoSwSzNTRkfmKT2gARVSeNBihwRDiyP6EcHzi",
  "key1": "TroaUGFn3ekBpCAsRkSYgpff5WhvfCgueXqwMFBSjqBRfkvD8Fbb2StwjEfr333wH3m5ynox42Q3eXVZVJLZ72b",
  "key2": "3hbVHMG5TvMU5sa8KGjCG7xdbTCD5JTTqSZ8zKsAMsWLkSFAybU8UcHutYfNABytkzCLiFJzNzsLJR3cTyJ2HX2W",
  "key3": "3Hn6YCYPRhd44muzozadCvYHjw7MvqHfsJwWv13wqSYcuHfyHHysv3TU7o6kEUoQSnJsfsaQoGv2NpgLrkRyj8ja",
  "key4": "4YPDzYcszfWKm9nWE2ofbrcRoU41dyzcgCb9YY9z3FhN8Lf2xcTwsC6MarrGnfNuHhv76VBUz3ejFg2czBFXTTos",
  "key5": "5qxePFtuCyfpESD2vmq1phjwfSHacE9jNhzcpanMse1tGN31jLpaLHwXXLztgPhsHH9Mrdwcy5fbmpo45wbZ9K2v",
  "key6": "3LyJzT3XRhJEjxg4k45RNvcDw6kua18D8AymFUeZRpiQRpfaf5Cec7rNkmVphwTesFeozVDV71guZbSK5Wa6VJM9",
  "key7": "4hqXgKoCALrnLV8SumqNfLqQ8ky2o4TZRDnkZ8AQTuN4ZUgC3CTjoruVZXLbeEemhYTF1MJaFyQhVDvp3ow6PyLm",
  "key8": "62KttNcpFUj4j9YVPefv69KS2M6K48WsP7hTcJUYjztFi5EdqCLSNVBhaW54mVNttHtwtmtopMgsGs3ynJMPUBkT",
  "key9": "36RjGfe9s8ogKNpn4iZr7mxMqGb7q2pQqjAoXDtqNwjUtuJ3o9U7tBTXq69HDtkACJx6KAUxvreAc66e13t1dGdT",
  "key10": "XY5PG97mWKjFzoVFBw1dJLrMatXAaB9H1nySKK9bi29XjqNVSxfWuDFdbJH5JsTqm9v9XKhnjje2er4uUsZ51Fr",
  "key11": "5Kj34g8NnLMMcqAMZmKe1mvhxKHr5WkrFWGkH4GnZDfiqnKu3aju79EJ8dDmAN1N9RCHtXjfZD1huqz9DvRL1E6t",
  "key12": "2MceadXFX5NGg2BEPCHVNrGHtAmpmx4tAsV8zyHGDfXBbmLkj5utufGXYk3ZZbGYd7QPNeAgMtNxz3ByPyB7WTAL",
  "key13": "4jx6yj88bjoztBkDRUcU7FKCBS7rWYgDgmgezGEzDTT5VqmpHZRg4rNFeFFsAx87ejm6BDHfLng1Wh9fYZuTeGMZ",
  "key14": "3UMPzMQDFEAPdP7WcwpCjNuMAKiP6YsxzbmnxkmyW4vYm566QgGyfV4yA17Tw95oGHs7FGWjk4PxqqhshUK4L6B7",
  "key15": "4n3KTET2mXncXpfWLwPAEwCmaUSsEoaPz17oMWUAFEuWkFYDjga2ePbTmJXN9mVzJKrZG1CrQ3tDBNtCXsM3feAA",
  "key16": "3ustw1SLZZkWEKSf8kpwfmPf4kjkLTpBtSeqNxAxdto1foKmJSgNPGqQjh3bVnMTnacrrwZdFXTm3TYePNCayLRJ",
  "key17": "5713mUmYWqmLxHJ6CyqSTU4LX2mpK9X4py2fjsaW2Xn8Nr6iibk8A6NXVqGcgmEvo2ahh1w1Ng33tG5h1eRAGc6w",
  "key18": "32jQdNNo7QvfTxmiLH7DEbTBB5TSf1kanriL8y8MPzceSu3WkjBUme8uWSyXh1f18aw1drGZD4CBY5wsD3NPG3LJ",
  "key19": "E5FeVJKgG963FntMFa79SrMzwMXRzVWLqjVzWM51PpUYzXGKde83V6UsuGdHthYNLdYTNuDLsouKkvqfxib673z",
  "key20": "2HsSZrkta1a18zJFpLVQJsEQM7Y7dVZih27ymNP4ocqUBpNNqL7kf7Uqce4UZ5neSVK3RAzoYAJVdMQVx66VF2ac",
  "key21": "283pTteVdk3UfMfQUL6yVoVYyHdczPptqbXvE8rZSvrUNjiAmKpHTFvK3Ymy3sierpwWotgtVgtLyjwxEvif1Px9",
  "key22": "3MdAgKhtw9t3oGLfzHKrvEbS9dxjRt5HCRhzeVTocXXQLjwge8nX3DDWUBred1LsZFGuKRr39GGwMaGq5BkbZevv",
  "key23": "32PGr96Pw9ASwpohv5oYW7LC3QDsnJjG1EZ9GVjLGz6skVj1HuHy8YDzuCwYSPXv6pNzgqriGUcBqCvyGFMZtV6E",
  "key24": "51hW7CBbmXG6jSrZkxFbxMTu6uVjpNRsxUZNBr4tYW1b2LZ76HW1Zq6npMa2ffsu9bwbtNg5dmFXVnnRvaYNN4V2",
  "key25": "4TwCgSNG1efa19kTcxe35wwsNPm8uZBCPERbQD8YLBPu5fWWs9W88K5p2gFKbPcvCbTHSYAWu5mTonXt7iqoX6gM",
  "key26": "5wcMjAGvmj1nneHNfzoF7CsQkS55rmDRXaTsZrCZxuDEv89ZzcrLbqaivPYoB79o5pFrhHDDbuorbUtyE1W7dkE5",
  "key27": "65CFU1MF5VRLyyiHePmhPRe5LfFaa8Rsi55FFjuH254N8v7QtrGfuunW4hjqYFuk88Z3LeEgrMyo5Dii9qMD3Ko6",
  "key28": "4nWa8e8HBBMEgZdEjngEr58f3GXW5CUuG8QrtzBHqkB2UwXsdpn2hfJqQRBRVN5DnnRRudQX5a16GukQaj9LXVxa",
  "key29": "2EYUQyY6rW8ccJSaEQUc4uH5NyNCGyAMykGuEbX5NsPo54svbscKNQZhwC671vcJqkzRXm7ZJnSMkrU5pj173m3o",
  "key30": "365Rf9vd3H3dpi7yRPVS2utb8vFN4Lc47oRaWhXTuZAZN8u7WHaz9h6pWtnBSZZ4KApYca7FoEDvVnR9ktzaEvL1",
  "key31": "5MfH2DnjWDFYCk9RVyYi4cAwnUtTDErjyGTa1ani4bRYW6rtNPq1ckvjWucQxkFNzHxcNz2GFYJ9QLUPfZKbhR1P",
  "key32": "5yPyUMKTfpwcn9VttGg3RYzdStAoQ3KVUG55XxNzhccFCemZvkZDaTRw9aj3Ue8ZkVng1m8VvJKnyq3CwgC8M43E",
  "key33": "22D5u3xPMJ47Fde5o6s4Bd1Kdmu7xzzu5qijy1y9sk2TiXLaUXXNw7Mep1DjXFJgzkjFZzYG5PHVc6BZ2nqdbnGv",
  "key34": "q2VWPErc2eGbEGh4823JwhAhSFWwRYM8TASgVKC5batuCDKaYMZeBep2h2H8RBo5UdoWrnf7LFw3QMnuZ4Rph4U",
  "key35": "5b4n75APLzzD2RnAEzCgVuxxp3pebhVz4rX9xtVY9RkR37ceSUyxXaxxrZ1uQXGXKAVi3uLdGmsTFETnvxxZjSHi",
  "key36": "2J1fzi9fhupDhfHhxqZ7tvptvs8UcMX94rP6GhZecjK6ZW3ZtQLtyNvQyyBDWWUehvBMe2wpPjhw7nxFviuSNrMu",
  "key37": "4fgQ9uptT2EdHDE9v9TQTCZMhe77L6qN15ZYzeP7eJQRvGmzd7mzsB7zWTTqh9kXbmXAZ7syaqYJhTNM9YbudSBi",
  "key38": "4keZmesXAQNK2e9AnPnS4tp4GAWwC35qBm4uDcgFwrJjtwKTvfVdTD4bcNNah3n64Xvqtfdt1YBXsqhQjjhZmPfs",
  "key39": "3maswfBXd9xbKaA4iExRUAAqrQyekydKjdTVbmXpJUkPKSk7RcSaBoHVRhnd1qKceiPwjLc8ZTYTqcurViHq1YHF",
  "key40": "4DfHhwgxtpfbYaxWB4maiunTUskQLXfocqUXiMoSGxZz4Ua9C39r7eUsWRzpvtGkYDtbjLFRNnHacatP7N6a4ajL",
  "key41": "YRQVmAu79GsME3qpTC1RcanB8Yz7iirdAgvuucGLbEPxkHRwmLohGggjPN6AjXUFP5h8upX2UWACA3ieVqZJME4",
  "key42": "3X6T6ZPkfVta6Tg6LypWSxiY37YxXPRvWG465Qs4hXeuSZWatMkEAeivg8wRFck5ViuM3DbBFkv4XoeDUzKZZz2e",
  "key43": "pF6jebUmbQRRs7FSCnyPmkUruSF6KUAS7q8vM7HWS89ghCQyYER4iBrFXXepGRV1pBs98DAsTMNR3zNBmgrThvj",
  "key44": "2ypqnnAvSZLmq6zPNkWFPMksSHuGwhHzXECGhPNaMF2cEpmjuWHVUmKAjX52yu3gp7cNB44LcbE3SA3vYHnbY8t5",
  "key45": "2mxtexraHanYvdUgNBR1b9Qe3qh1MBUePTF4fX7npaxEbiRCRukU1mV1sxbaRQAgHGY2eQZffAUE5FfZdpi1u66x",
  "key46": "41vUxoGrX8xtqzKMqEktrnRGkUd2NdvJnSnnQr2u6YsmBVi6CCbhdadkjkiU8TRmm3hHYwKveieMmqdRqkYG7PGa"
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
