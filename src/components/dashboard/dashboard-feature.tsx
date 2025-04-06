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
    "2XnPbNtC5KzZF5eVk38iNZBVA9bXhA8Leq8L7KiD3ReufAjQE1qSZgipftCcT2JddrdGCSqEN616sVzcH273DuZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qTeKBuRSoks1syj3bjFjEzcXE1Z8CtAYr2APEdMC6TTwFjdLHHx1FpxXCKgSKvnpu5RL74HndXQo1H16FqYBRdU",
  "key1": "5EP8Vm9BbqFzJDi4xojZgYEHGbW3jMwhukTL9gD75jCR7jyhiZvJ1xeV8ditGMRQWs919YTdKCaipLbFXurhc9n6",
  "key2": "3BhQY7WkzKtX9rEQe6eDGn6TeYHE6hDqiEhPQs2QbuEbxQXBpCREvRcm7sn8CsKp13aYTJZdL8vhHHZErcjiTRkA",
  "key3": "5qR1sNXnB15Ebv1n9RbmHVjNsxm251wBUczC3cKM4caNYkomgk7KXDT8umN6jacJfZDSc3fHBvQAvLrtDu6zetut",
  "key4": "2pDxstsLfKMfKvDgqJZANxRh18iaiUDYwAgygBxPoQFLC5XD79yiZiJh6TiDyWg85uHR9cN4jj2qao8MwzQER2po",
  "key5": "5Nftcm4HAkmAVVsJjwGzBUWcLy5CtyWoF7QMo4jQKRm3gZ5sgVP711rnw6Aa6pGBt5UdKCCPX1uXhGcy1xFWFATV",
  "key6": "LJQ2sbhuAa47V9gBF1RyRCrQNXJtrqARRqtie2FeExSHN7LuQEP3N4cZ3vyvjkwgZu6zcS7ZkT45MqaXbkFgM6f",
  "key7": "2LYacTbSdmnB5CeVjUtcoJZFnZ8s83sRvdMrFttuEM3taCsA73mpWFwcjxLLJ7XTRrNQ1WwkUrp4rPVwZxZUhqU6",
  "key8": "3qVqkPuuFhyxnUXYA5hPvYyPcbFoNzwuihvYzhUr9U1cy6KpinCvvcR53P5YrCCpyMvd3hoDSGqousG7boUTCAUQ",
  "key9": "5Gim2LHSoNesawwLoei2uD64NSKG34Y4kUZknMF4cmhSgNfMUy5b9LG4F16JEiLGuv4BsybPwC621ZjeHx6fLNMQ",
  "key10": "4ppMgpZs1uJhKLSW7z5xfWWSJPmzztzEJzWnPWhspdGcpEXcjGP8o6sHkXq3isv3uN4WcLVFymVouygMsjGKTgKA",
  "key11": "5t3VjSNrDUqd6QGG2nEgty9ZM7CxoAm9WjmLu2ppzkTn8AyGSQU8TSEhcCn5jc2cjyQtRpWbCS5rZa4sN9hfdr1o",
  "key12": "2HQ7QMaYa9FARn2YjQGBVoRRjuvy7rfLuTWT7LNMmZz6BW45dHhE5N33bHqbyDdgJDTtzm2c4Z45Y949k4Xe1y4e",
  "key13": "47yb3mHiXHmKAtpuRWnJU3EV2Lgu5RPn8KiBnB2yxULEsF9fXLs716itWX95ij5w9SrPR9EnTLHfhbyA8FvpTLPz",
  "key14": "2yYZRT7bcYADev3o5nes68UQzysXCi46kKd44ZemYpnNv4vPN2SUMX9qvvcjaebuirYPkg95FdEqe7g15vxYU4sa",
  "key15": "3emnPDYmZ7v2wjt7vxx4NVFPcCs8eWgW8pUjfGunPV7rRA3jUk82dNQKDAaA7sYxxQcLfh6VcsN86vJSzx2YNXfA",
  "key16": "3CNV1Z5NhKTpGrdQwjCZWDLfNMfoZpGzT6YezETqcoKeyPZ8XTJDvi5BKYuFEyxrXEPhH51qs46WwGrHBYdhBu7T",
  "key17": "TVUkgvHMFgQw9isxv3LCduDsSo995ixzWSCf19ehcsk6ZF2fxVyUgjkvE126WfRrmkpMgaJxbxLpgfHSt3d4kZa",
  "key18": "SR1BSJZEZYtjAHZQuzW4dVBZDLDFUGESo6Yuw8wimwydJ1r61GeLTptcUbLCGjYk5s5dc6EAtu5HjUrdTvvVLBm",
  "key19": "3rabSkKRXC4ZcYxtWfVjpTAGsGBV9NkFjNsuVSURUMP3P7GeoSZK9coygZJiNrWHtzVfz42tsaoRSCpwjgUGYuLv",
  "key20": "2vNu1MYmVSzqXToHUWW6YkGRwgaP8kgRi8UzZnZf27hsThTyFHrxDXgkKsZqRHvJVun42pxWR13QeK2Pfk2SUWxp",
  "key21": "48VG2bFx8uzis6fYjb9szhDbgupa9oZEAzvZnFMgLcFwaXjDfV9C3ebXaCy8ZMSvfZHYQNoSSNxn7bUQjvwGhvrP",
  "key22": "4Qyuji7AkN6eTavtic4M847wXhLng7K5FqM9aSTiLkpqCt7cUM4ziBKyn5yV8ZUfwp34ogJfpc1E1cUDzgTBSZGD",
  "key23": "6R6Ue8jGTsisxVvV242Saq34ZqeV2GkBtej3KcghW7NcX1TZquWwNhyovtzENPqhVAvJQXPseh83LTGk97CtpMw",
  "key24": "PXi3HVjnfYPTnHfE89KE4Q9URnhCwxXeJtG7dVCoYZz3n1mG4uRduam4BUsWdK5Su2uRmDzZsoqwY8N6hrT3qJy",
  "key25": "3g2LdL4vcbXnyyWP6EWNyYEkydRBTx3LWE9HBsvV846kjMaZEQeyDQrkjEuZhwnXE6EeE1nxR5e8zPbVbrQPS1iC",
  "key26": "3JZ5DjPkH54V2XDAaHvqaB7tTFrW2Box4AxwRLqToSyJ9FfLTxeRMg7X2wfuxYXs1aLtPPoxKrVXXyQY7gxVbwHS",
  "key27": "54TKbUGaJUoHGSWv8W8rNgnY2fGHsqCaQifQwJcHroiZ2EQQp52wpjAunia8QZtzq2QYELVb9uvmpQiUYSYLLR6X",
  "key28": "rbPVD4C5XyV6KdxdhVoSpBAWe3LfYXDZBMg7UBYSjXynhxcwuEyA6vc2whtvv83My2gGE5g9XZTEpSiKP6Nr9pX",
  "key29": "3krGW5vFoPboV69NYoHSLG94bxwVBdr24gfJzcbHbqAqLZPSzpaAF73yWHBfhep9ERbCwqpAPUGphAvXoPrm2juz",
  "key30": "3dfevKpTmYz1SEvr6NtWY3KM4nmL6toMWozYZZar5LbuTuDJR9Qn5tXiBTi235cT9DTfcUQTRZCfFZBKzNyoe6ea",
  "key31": "5Pp4G2xP9ZAkwf7Gni5xJsuZJdVun3GyQvagjfVzz3qjWkVGGguUMaFAhEo8T3EdW9t86ZMPEyTaiAnrqqxPcX5f",
  "key32": "3RGKSSJytMMYha1s4u9LQswWce4XmkTy62yN71U5csSnfdZAYE6RAx5gjBuSV4as4U1uR1Kfj55op6t978q2KTJV",
  "key33": "3Ym9FYkL2sjNumBBwRwyTXQzoVZ4iHLjXfxoVkEKhPncvYq82CAz5L3sXTXybpwbjmxhhn96pLiLeavHNG1nS2L9",
  "key34": "66bXLw33ndsTBCop1LuQKh53uDVykKoeqxEn1CyRfxsSEAsMkUMqBJfGpEueb3k9CMFE6kxLU7M1r6aboettaPfP",
  "key35": "UhdXHRBhBdxQY9MUmNa9b5eqKWdkMnozZVvv7j3qLyTvXeGfjpPx3nz5RjkEmLW1X2MUexaPizUH1o9WALxdofz",
  "key36": "5LAPwLtMwWrSeK8RBPP5pbFdQvJwa6ZdAxhuPCyH6sgyfeDjmhVRXs4MAvHxdBDmJXsKZCWJmczrXpVyKavzV6XB",
  "key37": "tsDbUFhnAqQYEKJrMK69HYqxke4ZUa1wvzKKSnqq9uhtAFo9JhB1ieBXQnFXPtaUuwNpepFigam9ZFzMoy6q2xH",
  "key38": "4yt95FjcbExVuQxWmJ1XmJrbx211V5bDWSGUTrA3etHMoR28sP3d6iYJympKu2F73xuyN81sGbjSptC2bTCG187i",
  "key39": "2StQnGN8u717sxx7TuEZMcYwtzgB4HWk6zaQKkZCnqAB2Zt7nDiog4uaz56mesJwdYCk8T61SWsB9EFm3aSR8hSb",
  "key40": "3Ky4JmguMgyMM28fhU6JXwFHZXxTtyJ8D9euU1LERL2YPkbJQT83Xod4QVygg6eSHG4R5hYqmDPcV1bYez4Vb3VJ",
  "key41": "2eLQWJQDBFvVjBANyjEU5vAXK11o8ayzdWt3Kdhxe4wz5mn5BQKWAdFnj7d1NPZYMQrzvTVmENzTCBZLrzjyrFmw",
  "key42": "3E1UZdes7Mesv7NDzDf1Dq6rGkNZgo2BzSVtpaCamGzQHdohdUf73PT6QhM9W9G2vuDgzoVWEHpywqGGmbQgQd4q",
  "key43": "ATkW5ocYH7v4WNJcP1bUpyzFRDBYP1uNq1javvpCu1iXrAhBXoQkKPtNwHfFzkvU2UaDpoTdYn3yArjwDC76GQD"
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
