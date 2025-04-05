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
    "291Qk9pucqkue5KBn4rKZKRKTXb1UqCWuS5niVtLXDrVKsvj1DdCBFQ9mbEcPpwhMtqzY1d2EbCYQZCzHPYaDYjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eocmurL6Sra4B4CHTsRwxHpsrbkqgR2DwAcqmhr8JM8cESmyPt7ZVB3jed7aZi2iyKd7vWg8Lar7x8xWU8Q9cek",
  "key1": "3yZN7jbTdd8FEkPgqPutTcBfAg6omB3hAzDBJg1UNT2B8SCHqPrTaA9NVfrND4jkUthhF1YQrEqXseUPDY2fZJpP",
  "key2": "RUk5joReBjsnbe8mGwaX9GSdwktYX46XgGyor7otFWN7wghm5EzWWnxSu8C4B1TrRbTuVZTbZZtWaxQ22TMZze9",
  "key3": "pZPmAddZNxvrBWMdKKkjiqxnVBWfcUZTtCoGeXW6EY5rVpAqSYjrDtHRYMqXjfWdDyjf7Dy6DNWBAfPVPDRJp29",
  "key4": "2eksVaJ7kXbgsuo6DapiUorfwCCFGpVkU3zm27hpF8rJLVEqvQyE9hsGBh4tncknqst3DwWJ6HzCFXP6V5Eycfqf",
  "key5": "2cci1jJ7kXnKZjhsTRdUycWNgUwvjMxF8RFyx7shNv99C8PmBFuW7uEZQJkmB8zRhh9Vq52HPKLaCRNv3DDv8Uu",
  "key6": "55P5XiKfY75yYNMMVVeUJc4fhzCbQvg2R1zKZYrCa8NPXTqiVpo3VBzjYPXnWdkD6VCD5EDnFea4prwxqT2W4ypj",
  "key7": "5mYft4fdD1V2aTVnyhi9Gh8xUCbC1Jxe2WW5j6m1jm2rSMM77u1ywM6P6uo7mzYBY8KXneQqazq4XCKrhFRw12T6",
  "key8": "3zk3xXd97X63g7bRZVTHLwDMrxrguB5Gy8ajcEPGNQWhyS2EJWU139pZ4dENUJth7cEDvQ9FyswRA8bbB7RRashY",
  "key9": "2MPPjT8qZT4tmAML7qoqCtEq7QucqYWMXg1752MpLTbmeWkuBfRgNb1PrbUx2Ncn6J1kQJPso4AkUQtKcQfESTm",
  "key10": "2tzuBMn98wcQHcQCerj7nN4YLf7V3ucCSASWQyTj2fRLske1hRBqyCChsXXaEaWfw1SteUb1Z63JsgfwxS6PPibs",
  "key11": "41YjMurTtoWxuZPimmnU236nzdwqPBTLa3HQE4HQnRQxkhzxnyA2MiKg3xUrzJ8D6yCW1GcpEh81yteycecebBWU",
  "key12": "iYFxFFLJTWGj9FYtJZZaQh7UTqet4CPd5QJjXswUnEQiQnC3QoMAJGGnUsLrVc2y51p7UkX4LZY8gd8FvoXX85x",
  "key13": "2mG5wHMxJMd7ZmzgE2Zz1afJdQ2oFFJcWVdBTBL4kbjvN64Uqyn5nYneEr7gzcd1jkna3NEKMyricNJnJADa7VqE",
  "key14": "e4jG7qtgxvWRCgF79tAZwr8mXY4Av4FxTMShAQ4q8ZJ85mJu4EhVNFmTYJQrSunKp2LtfKwkVJqFCQ3yJxqUmx4",
  "key15": "3NmgtVfyeskbGBsTjUBkHBdZSVhV71284kMBn6R7Fk8eguNvz87bSU9QiYfcyLNpRJDhN525kY8qHLzvGum2rZHi",
  "key16": "312ZAUh1DSQ6yNCzqB2pCjf2Cw82UcM9WQy4z9uQhsfc5ChX1tEJbjBvTTZz26jWgLBL37NV5fa63VWAVkwnUgaf",
  "key17": "2Jt4sNa17MMSi6onKB3tLnrEnZ8FjeJUb4khA8yfthcDCJ35KAi7LX3Boy2oohQ6E3jEEs1jYLp9kN8LXurs7M86",
  "key18": "3rGkvp7cpxaU9Bx6HnDVkzSGf4kZweQSW4uW84zGGJA8zakvm1rqUi31rVBRrTQ3v4rtudv9bvdBn91nXHU3AUev",
  "key19": "41iEbtemTFEr3JXSbrnMijkASaaGLi4598zRCoUBLLwwYDcUHAZSpKdwUNwb8mebQkmt7kuN78UgqGzN9po77Qww",
  "key20": "3tirRHCRiLZdcP5RFQDzYeeFcKs529a5zF1FDHAJ7vXg7MNWmBVTrHF3jNULNjQr4i49godbLf1HBpqWrumHKBeh",
  "key21": "3srf7utVRVDHS6YmedtSUq2c9oCPy7FJsBtNvFhfHgCRpecBxDyqvpjp6bKPuzCAKkb9hGEbzqdWtGUJQkycA19M",
  "key22": "4GmpHi3RmfxuipAhkn8wQNyD6WmaeUSCxCDxT7WEJ24enPVfXSbGshShJvUikV6iefDZyA9MLKpoWPguMQ4dKtr6",
  "key23": "2PMM6cxXxywwMnBxCaS5wqEBK4DPtkkJxeqC2NsY7aeufJrPzJ5ibVNyprYruEJrYtKkcG4dXwdQzgABKhGYFAPN",
  "key24": "5iWMtyfoiFoqsY4yrsFSJTr24KW5fFCbA1npExeNp4suL2dPvwxP4f58RMUFMoASM8Zgkev2EL81u48Y84s3cQxK",
  "key25": "2DUcjFQtJWBvMMHx6UVoGCixQsWwrwwmdhmRR4CqijT4FTnaomTas2i7DYJ3Fp7U8JCoq94xT3f1vUviSrMDvgrm",
  "key26": "5nH7KEdH39yDTxXZAXSbWc27nHqoioagUKBNntE6y4Souka9Wan6TVVPMNNKKy3F4jfV5m3ZC3awUjZJFGFH7bPg",
  "key27": "3vJcPVsT7NgBN43rkrNLmkGiE2eacUoMUFGko4EPFmvpRHbuqU2mrBpCVwKjCMivPPrY4mkdcip8Zy6dLt3Xcfmu",
  "key28": "CPVVoScBBRNjmQTzzFNWTkqFTCNLvjrf6cCzg3y2Mc8dCMHkT1XpzUG7fjo3Z9K8ecZruRHopmFmwd5y9eKLtAQ",
  "key29": "4ySH2WwT8VEVLPDSR4JDd5W3RnVxueJbRS3EueY1u4qDXVPQ8AC6Xktz5C7cJnGnabHL1ZbeRSduySrAdiMbDpNs",
  "key30": "3jVBD7E673GQPmN41iHRfhfX7bfkb7t8Qfn2iS1QD4tMkjH6mJsSUaeNXBLsqnBLFYEAbUXDmEmCSkayXhivF4VF",
  "key31": "3ieFCgp2ypNV64j9Q8Vj9ELCuZ59ma78W2ocPth8xNZ8bYhrpbPLvovmw4LcHfc1d98xbFQHxtUptvQBMDMcj7HS",
  "key32": "3mPE7knoa3uBmY8SvCRxgufvvxTrQxZh3CkPXpk49x56BnX4JMTkJYXvYPU41GAhgGhxqueN3sSV8LT8AxgBxyd9",
  "key33": "GNm8YWZPUFwUT2r1JTGdSq78ARCoXcoJd3dxGaBAW2FBUVrwEjme7qEvwTh7ndBooEQfwECGpszmbvsvwKYNS99",
  "key34": "jw3yWeLawTfwbsuS3i9Ri6fGMG3MTU61zCE5wDBqkmWSKH2wUozeFb1cuE3bB7XQpKKj4pvYUkhKcVpao4PKEnz",
  "key35": "xZSFKATRM5URYpebPTH6o8qp7Uoi58qGZPPut3B4fyVg4ZHTbYLjEjaKNJ3SxVLtJ8johRRf7Mx5m6DW4sBbL1z",
  "key36": "5ucWwCb1KFAYNZprU72iYFTf5aPVSnt7waX3XtErk1sL7VUVyjd68utJwMK6aVLU5hu5kNukR8aKmVj3quhiZTMs",
  "key37": "5UEJwgZNfNoSQ96LoQbXEPeDvAnaT8ASVny9eJvDpTc89VTELAXvy3QZ59K2j5KemNB7BXhuVwDatartTpjdZWyq",
  "key38": "5dxYpnETY6CCiKAo1WMWQxRJF5PtYsrBZmPaBYxCMAkDVJ5fHoWeJJckHd4NJNutYNJLDAMZgT5fmMC13VFcMYtC",
  "key39": "4iwCtNxcEsMisM9qeVbY21VRYcq4ir1XpofyTq2b9vk8ifTf261X9kBezfiA66aHTgjZ8o6gZM9A1ms81Q3t9Z3G",
  "key40": "jxdGKZhdErjMKXhErwwQbxEaykv7s4gJYKBzJVeihG4bFRs1rzrzPcvrvTn2AARfTqAxaP1R252BMr3m5cCkQtu",
  "key41": "3XmmM6qLxUzL8ukzqwwFV8gYZGrYDUAGBoLQdkNonxfHFCQ61NapoEV64iVhaZ65niicFCjS8c1RJmCdjhCKAGQX",
  "key42": "416zesbVgswxQ45ZD2KzHSaC2abnH6ySZTUtE7BEMJMKFA7xLtoJPoGAYn9MP31z7kCCqmNnvQwoZkdBfBiRrwcE",
  "key43": "4bJnBzd7Cgqtsa9tigxFsjab1sSMb7HybQnvN8UTWxYfUFJWgeyp9NmH9NjLR9ZyMfVU6K4TEjSXVh9uuYxhQixX",
  "key44": "jtG13bczsni78PtPEqWUcdd3MJdrr9qtN6D8gdBzoxpKwvvgNZivpXzXHDAb4xyWmZMNpKDjuFGSeWRtiKw8D7G",
  "key45": "5Y37SknkF5SLCLDnVdo1uCW86J1GC6LDBQac6yTRmh5rPEGSTch4NDWf6SE6NVUvJgnKZG3zde8bJR6x49G9a9Fr",
  "key46": "44ckRwKTtXe9KCB5d3tNhnef2NFLmsQaNUq1nn8CwQTckhgiXGQwafnhFpLW5NV7pXpDVYxtqHFo6XnMqDWSKyf6"
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
