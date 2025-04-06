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
    "5bPDsBHcxYtPqazUjaD5zCaNx7Z4m5eXfg3avwDB9eF1ubdfubH9jBLsEUdCR3npuvy1eNk9vz6oweEcEaD8qs3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5onaNCEA6KQ2qK7rNxzHgXf99sX8C8NeCo9Dj7e5sBh11QnQQidabNgZTo7JEGhfH9Q7JP6ne8eoAQyXMezUudqR",
  "key1": "troN6WyzbhRH5i6CRX3Y7zRMuibBgx2B8b8ADeJsNt1Ui8vCT4Lh1iczvbj7ksm558DFSTVSP9e2HojmckGebEF",
  "key2": "5LgN6UqdSDKjwfXdz8SEhBX6PHzYheMQpJS3dDP2YmBTtMZRjwJLDBBjPLphjcx8hD7FaYeJFoSqKrF9Dw9ywPsa",
  "key3": "4c2Pupsh6g2ddDdSnHsjb9UmNtF1sMd1w56pPixtjSFPrUuSMptLgjmVQ1CjJcfhKCcWGkV1vZjkLFri7hgtZohU",
  "key4": "vb9zyC3j2VKiup6C6UoXQcHzbgaibL59YwbyAv18MUesEC4q4gWWvjEvcuKCQWMoLm3t2TcxUafn833ydd9S2mu",
  "key5": "9ZfdXVFDLCr3y3wWP4xKax7cLkoJpHEZ4y2QJ2x9z3sHgRZcoX1m36CUuyao7hHqqaPByqyEUvrTfY6NvSuGp5j",
  "key6": "3PpGPxztNmUM7WdydB5PEq8YeqQM2wvFUp1ejCWjDt4T6RZwkxhPXndM3fay1W8Azv6KG4NszGJZytgCNG5GUEoD",
  "key7": "5TEm3F5j42ycvbMV2H6NjXJN1w1q3hDEfx8aF6P8jmFFyY3vPnPvbuTcxpJhMvjJnGTEzR2Tz9iqqdms98r7WkB9",
  "key8": "58vLcXr3L9nWbn6g9JBFoHfr7CsYdg8i3iSW4MwzYG2CzxEeppn2CunoyeCi3qeYwPZ39Db4tZcd2pxD5qetDghZ",
  "key9": "5dnoFQgkoLe9BQGsVaS7dMxtZAFav2K8o3qu27EbtvQmFCuqPu5aSMpBNKKL5BQdvBeU6bVf1LMzhbgw2vDXnFMD",
  "key10": "44KJ5A9qTFtyBcpjTDYnZTDp6bSUJfGNrhiiZZxqHjXLA2CLCdKq2z49VBwPd7beTJirZD9F2N78pGUfPAcRbgAJ",
  "key11": "3gCvPo3brYQRK169r967s6HEWT4WLhTVvwckkw3Ld52Yf23bABtw8qsFtm3R6SL1nzyB198v2jTab5xKPHzjC3r1",
  "key12": "45QFgRYmRAJHR8PEabkE5vzbdfLsXgL2rEdM4WHkKc5qqHvbigiP1UZaEMo2mF2QWxZyJxukuUYS2TNLyYGdXZ9R",
  "key13": "HZugvDDj3NvYqxjJ7fDtCzXsXHMgwiqJzfnnGnydTLFCAuMZMyDHuiXSqDJSxKYK8foPweyMmmRq5bHP2hVhmJp",
  "key14": "4n9KpnBHCQRarmVSafpe8RNW7i8C1btbtBPxs6UQKqqACoYHdQ9xEz7Y2QgQznFeiFb5iJBoGn4ydMbEyJRYPURm",
  "key15": "216rjs4t57AzhhV699ih7vSXhqBbdsoqj6kwbyfi6pKXhwMoTgsZ2bgMwwLk4gQu5yXNRhWXpb5shTv8f1HjyJkf",
  "key16": "4G2HmY2P8NbKfV128MeRGq7BvSR61pQpGrfRTESQGhq3XcD66yb288ySKoCeuddxbRn1LuuWaeX1uEK1TV5TTdis",
  "key17": "4VDAp3NQcVKYuRuc17aLmj6cY7kANxA4VmbqMKgySNqjjimwMPrMdZaJTZRYKZ9nAGdD9nWERjj6ySHgtD1QYqpP",
  "key18": "Msss73KPUSDbJpYZVHCQnmB3NMseGh9NVKs8CRupq3pD7Gu88iqn49Jgn1cK9UtZvQzRuxVJoJJcwhbcsg1kdQM",
  "key19": "8tnFYxcTZc9hCuQYCkTaEysECTrQP7WPFczgTeQPTVuhrvkwZz6dufF1RFm1hqgxXw55A7xmSdo9CjaXS8Yekz6",
  "key20": "Eo8PgMsv6FEMpEr8Y2CdpZ7ziqCctaE73o3JTiFJVBiPrym4MfPrHGCnsn9t5aKP8RKPkamuuPMZQFeX1apwvT1",
  "key21": "5fGkkvacdjWgFSXBF6vRkisi2aPggTd2yjTaqSDqzdAM9ftF11YBh3uV3b8pCnDkqPvoLNdt5XVX5PSze1Pcnt1E",
  "key22": "62zbtqTR4T1AAEg4XP7qD9osj3Y1DNwB6g1UWieH853aw4KdF4zarQQrjLZfPhua7Y2cfkfUuUHdP3FRVKXgYMsP",
  "key23": "5mqKQ7R66M5memtqBwRgq12RTENr6bLebGFz31zK1yqf8taRZT7Ly2bVNGysymNNZ8mN7je778fihVayvwwcJ2jp",
  "key24": "fNzsmQEQ2HHiBBUZZoScdSyAeph9mHhF6msuFpc8MunutEsYTcsaYadNEdieBUoqpzcn6hAdzzatYyMg1XmtijV",
  "key25": "QhKBGUCYeBNa1pSs36URsXXJqvhqNanXsAyBMN9adUSjgsbndoFzYCvEyJsB5dY8XT5fZK17n3sgHHVBLJveVrY",
  "key26": "2gdcbAHz1yv9kMy2GZ8poRoW97rMquZxmZZZNojzah7XNyGixJTJWBQRoLecuf4qmoCyPpiXoQ6p2jwPdJL5jvmX",
  "key27": "2BkFH86GXQx1J46X13mCHKFNLRCY9hPiY9NqnMYdNZmiw2jPPrutv8dy6bqL2jFDyUNP3c4LLrf7qGS5Giym3caL",
  "key28": "41R4V2aLHQ6FkeSBFYtTyybVDrVnvXXmrxr5DPsKyxSE5ZRQ9K8Q1w2buBGRPwQEpa87mfw2e36FHHnJPqtF3QBD",
  "key29": "5cfjQEAhjBTw7q1CHtKa6mDSGZaMNYZdzSjP29B6wL4MFD9mbQ5nfWJXqEx33CioDykCjNYYUGa3UvmTen3PUbrs",
  "key30": "8G3o1pQY9RtMwD2UXxeUBQcT2SbE2bmpvfpU8zZHw8UWrVqhGr92WUar42D4eYnzWg2pMR1Qu54QwjMvG935JmY",
  "key31": "1LGeTSryQCbbEC9vparyszqNBdyTRU38Te5kEvzuNU2dJ6mfj3Hxus9D54G5j7DhNQ4AzXPuuiV3bVQxiRzVeuJ",
  "key32": "5ei2Tg2gSnF8ZuG8BeCp53Mo9LiqgHjqT2kobX4UcGdKX9w2DxQ7sr23Zog8g8vQE4USLfwEgj6VjUc9hnHoL3xn",
  "key33": "2Gzumef9oNN7HdkojoooRHMysjUxmoFzQTG3VaJDZ4Qhr7GjyVCnffJoxoFXnZQFbNd4Px3DEFFsYA3F6QbhPWdD",
  "key34": "2zVzbhPXc3McW3L3F9seCRMiAeLcCPM2K4zpUAsNrCKehkg52VTr67Wc8EYVHDshZtXLiSzpHntv4tWZTLKYyKQ6",
  "key35": "3RAUBqLyhcudDLrnQv7Y4cSrcg7Y17kQ54DrvVHKGwpfFPQCGQiYDvmFWgLVDSwGDXnu94ud1VKNSJ4D1vKBiHnR",
  "key36": "4raY1kCSoFzVw17n1Hu8pc7jB2xSkwE3EyXSR7kM7sebTaTtTWyf7crWZ9k8B6dVBTLwFerw7s1yWENHhNXuonD2",
  "key37": "2EBxvh3dfUR2kPKbjWfzEymztVoXKTNKwFK1pkT9nDwgKoPDwb5c7BZWEnDCFsowk6tgWdBzfQCe3o6dxUeZZVSh",
  "key38": "5YeBy6U5nCLepKPRPJPeD5bA6RvfHkxUALzDbVMFeXvBmy3RoFccD6m3quNqN7gtWwNBRDnpdvjdh84gtJ1yjcn7",
  "key39": "aCax6WkU21KEQRsi7GeHMYn9piWDNacTxBceqsYXc8eWLoSLLWGFyfLtc1Su1GhhXckswQuSCUrkmoocfDAc3Aj",
  "key40": "4LjHKQfD4knGqHmAPZZ5ssHnExNtyF5mYYhUqPvTH24ChyrTnq1MBWGpdjrPuC763YC2J2G7wPQZvaZNq4rKcDGt",
  "key41": "5MF6nVwixgAmjhGz3gorEmJHaoght9CfXbfDHh9oKZtC2rSX49ZAJpDGyqrpA8Te83rbXULEsaqM9QrQxua2Gsgj",
  "key42": "38Nnp7TEE7bpxfvjFxTiTKL7hb3zFixbqUhhWR6iAGp4k6KkJZoX6Qkm1XGoaCavuuqKWxnHfQeZTktmYeGHdCgv",
  "key43": "5sx9LhnaoExogbxhkhW3yQu22T9aJ81iTE8tBRpXB1S1VnE3w6AVJ2egPvSvpgZqpZA9wMQ5SUkYjJL922wFMw2y"
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
