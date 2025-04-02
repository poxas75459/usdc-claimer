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
    "2GR8abgBTeNv6u456igb2aBe1H3in7uBrcBYFcV9B8RvQzyF7qNpENSbSbksmsJ8Litdccdf21aR2avuNZARXuGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riwS8wGaZK7H5C1fpJJsBGknPzmjTDNbJeNU3t27HEdq2VTxCLxEkAueRW3z31FJtqBxyhQzgggA7XQyhRPimyt",
  "key1": "5CXoYfKxAYnThpvzGH4uS1AAoEvsjt92G7wTyvsoo8Q9tuop2x7Zd3pASKVZoRGRhWQD63MBna9XTK6X4jNuum8Z",
  "key2": "2MpTu8gS67GFQ4W6FN3j1FrZphMURHKEELuP8E35erBqDCp4jWvfSYqwmdW1M5eQjs2dbkv8kjKyJCgkbJYnJDmK",
  "key3": "2gfGDVQB9Fo5EEQNbHowC9WaE5CiiLpAFBsnQQFJS6J931qxuwpFAc4ySgLvjDFdqmnZLipQjz8EgRKnFcyEFEBi",
  "key4": "2Q2zBayJKN3H58YUuMDDmpStaCT9iY7YyqiCKtd2Mki1G6XjQp1KChhJkkqaXgpoj2yRgGt3RXmL21LCfTCrpX4t",
  "key5": "5FpsDsbMqxiH7BgLCat6KbY87oVN6AmSpDLsPtvQJwZSKg6KhPVth7fMsi4m9Kde3NrtGzJbTW7XazJwiAN3zozd",
  "key6": "5arYqhuN2C3Yw2vRKQtey9gNkbLGSpZ5DUxSmLp29rbSdfsUA17UPp3cKy8mTXkbt8pjdS2jvvLSBrNnd3Xoif5Y",
  "key7": "fgmK7uUWDgx4TCSwxKuTSWFMnqNnf7iKbxL5qQwR2yNRQPJccBexDQR1m3RHKfZ9fJ9z5Aj8efxC3S78cPrP9y9",
  "key8": "3jHPVW2tVEQ4cJPRmjhb1qchtvN9YqpF8pQ6j19354M9fBS8RvCz4TNqQP8Kp1XBvdgH1PXJXsULjzFZ4Xga5U8X",
  "key9": "33M7ooU851sd5c9ZbUBXJ4mT2BvdEWZu8Y8Nd6iC57YQeEdN3V8XPr8TYyGgDX3cpETCYUGdmzCYoPwmyLgBzxF",
  "key10": "3piHHv7qZvqTvCdApf4cndQbCbjWh2eSMdSfFRZVikre7s3ake1yEEL67HvJ6w6Js597Yix5YSpadq31ajr5wjok",
  "key11": "3rRSFq1kJJNViFapah1nfidDrxeNycJ6XdionHxvjjAy5LghCCVDEs3rChFRzBW8XXuyEfXv9UVqeynixkMnMam",
  "key12": "2cDq8VtNbb6pTRFcNnQREYtuMozYXoRkXHjcDS73P98gT7GZBdZke4Qo5Xwwf2PjXeUpwVqjCkWRUUHpn9uEC7Wd",
  "key13": "xeqV7sBp1Y5ButZVefqm9z2Gaz3BvFJfWTAyBvGDXNrzFswUTbbP3Cng6tfaKBNcCkLiQrQ2Tutfgcvjb1pLnrz",
  "key14": "2JohLrmxquz7zjeoCzu3kWiCePge91QWB7md1LP734QGa6s46n38JjcAZccA4vaHGUwyvDXGHxN6wyue1rCLXv3f",
  "key15": "4N6tqFGvacSpsEwXkiixXMvLa3VF7cCo8rAYDP5S8vByNThwqVJrPNQmVCvFLDnkeCEFgxTdQFUk2tKK95WaY8YT",
  "key16": "3Jf3xKjJjLcTLVG9n91R7PZk62Zbjdp6PXgqmY2X5Tpu6AWNULwng1ywXfL6fzsCAYQXhTWBJAoZ26pFTvxBuHt2",
  "key17": "m5epSLu9d2XzTPrs4eddRffit6Yry6Sp54EUH3jmVPEGkGEKxSCqn3V8TM7srWCuSWGXEnYsyrNBH6qtNJw5XVj",
  "key18": "3MmTmbCtcGsZpAu3U8oyRnWhGAdBJPD5ZgivH8XGDu5VvNsebLEWr1VbKqY42n48t4BJ2qdLYnA4yc5L2avqRbC6",
  "key19": "5ASusbErWcCSBV1itgoz3jMqGh6pShvW4DP4iW4UdES6eMHQnFVw1itjTDpyfC9RekDZwC4jKeP1oMHXXhEvpe14",
  "key20": "5LS2tFWi7c3pVxQtLh8vcaemdqYHx6eZawgLg9WS1TYRhB4cxp8gxMLFkn72zHPGTV9HMoXegfz866MKTKpcxGv7",
  "key21": "5YYyEXSP6ENBGTrggW4NYhbK6YsHZLevRemER4g6VccHA8H5Lr3ZKBY6wzHWm4cz2NuccNrfsnvMjwKyJxLuByEM",
  "key22": "3B8PwAAh6wcKVfgFiXz8bMLjorntHhfzmR25eif2fRuYrmSKR6E8R6ycMzVxxZupDmUcRaE9VXPL3cSACsgiCp7m",
  "key23": "4WT2ocURfFtAKoo1CutGxojgWPoHKBVyPKyo52328EbtXyuvD9jBxpVLKMdKMsdYWqZMRdYwuKdVSzQLZaY5wbmA",
  "key24": "4hg1hsnugG82Y71ubxAX4XYMBbqVR6d4V9nLPGcYb2TsxydHZawop2LVyMFr9SaUkeg3PMJZYFBF4dTpYBc41J4X",
  "key25": "6aAdobYH6oACjvXNNes73VkkyAKpxeVsBqgPiU4PRh8qKFDuxrsS7kVRqdryJR5r2EAgzin1yUN23ugzNBTmvcP",
  "key26": "wJ4VvS3KnMzj1Ly568UrbiBzpeYS6jPqedvMV1XsHLfdfJsmWNQucjpnQacP7Z2RZkAbBJaBo2pcqFABY6ErGCt",
  "key27": "5CTfaY5jGLybdjtQrRBC4NotLpt9x3RDsUnTw3ZdY6Awu6V4XXryZwGZRAk6VBZaHm6o3dHb7Aa2p3sj4TjwjYzy",
  "key28": "2JyPpogZrSVQXeCHeY12E7QrFu6Puhyknkt7yGq9kLiDuGbXNRj2ANJ7GAGv7rBiVWZZgVBujDufZ9BWwWi1r46h",
  "key29": "TBVtppZTezL7SasTMeY3RPXEQdrCQepX4gZ3vLCVqXJhZMmMMwDG5Sj2PjV7MQm6KJqz3Paotx91fh48DgReUof",
  "key30": "5E6jPFcnFSbk8WgQubiuKa95hQ6o5Wefrk6ZNxm5rzZTLv14ZiGbwwapYQgbm4kDE3si6ET4ZBoshUN3bVMqiT7H",
  "key31": "5i4t54qSj6H4CaWNKNmmYS9CN9zu6LjH9f2LFjAGM72dpjvhg7NHiD7sHG2994UDsSw92U85Xks4TjqAs138LW5n",
  "key32": "5TFRDjDa5uVwmLy73iog2tgcR2qPreGFypxMcUppAKLhY6yLvwoX6jkD115WKHW3b6JTgBUmRLk68y6V9msdtBFo",
  "key33": "9ULZPCN1FWR8nWFXDNFYU3ox5GUY3SjDA6BtVEk1mSZYYQasUzkT5SWek2jNJjN82atz9NbrWSbuLSQsxzH2Poi",
  "key34": "YqJncYv496Et96ehHjyatZGFFDDNAcGN6EwVA1iqyfiL1dMAoKyNhk9UFK6Vmkw5R8m2yBrYayP5BbFL1BLTzL5",
  "key35": "5QkkAXxXuFhBohTGGXV2xsnumXgxqAQ7QBxaUcZJjDdfooC3AwgUoDtqXLTdVsWv7rDCBpy5Z8k5a4aYkS3FJaoU",
  "key36": "3qkrSaMDWmY6HgQDp7AdqKVA9Tvry8vVRyh3YCJZg9nkKTisyJ1P445QAyZ17khBoBgg24VKFGyjuALyarPNpCU2",
  "key37": "2PEc1WyLrsiDeieXi4rrqQ4XiV6CQUkGgJDcaLFXgCWznXLARB7G755yeVAecMwTfe4FdtWf3SoGpxY5sksVzxiL",
  "key38": "5cGdaoAqu5AZyWxMGsyoRp4gkZt1Tz9M6Y8XNpG1RuJvkeXnnx1LwTwEbxQHt2oEqKiDbtXG2YG8qirvQJDh3RN9",
  "key39": "4HzwdXGGRhsVjjdtXdfheKXGPERZyTWz2XroJrGCkSLLuCEFCKdZC9UZHhcz34eSVWV1csjttsgeJYV2Kzc8iAda",
  "key40": "5usy3MsEXdKuYWVD6j9mFnXEWwXfSswGuKf7urBYyN3JBKmgShZGZFkR32RgrPMc2uuruvcVQ87KipdCawe4vGtE"
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
