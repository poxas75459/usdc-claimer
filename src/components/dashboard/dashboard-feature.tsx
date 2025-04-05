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
    "3SXxEq8Xtb3ZLJ654BjvaynqYAvViru8MsU71kfxRQfX5ZCG3vYMbkffykkK84kn7jsgHcnwxHG9HNbD1dC2emuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJoQm9JKUvwy4adz7HXxtuFvU1U1SapxhCjSoMxrZSUavC3JS2Up37LPxF5aCvSFetNMgiga67R5t6BqCNmxHQg",
  "key1": "55gi5TWbkQMs2RUDJYUCLXLJdxxTV62Ud5GWevCMzVkEu8mrGB3ntK4VQtW9KnMZu5fD22mKMvst6nhBZyVYkgmL",
  "key2": "3deSqAnheocWJdiSyPKdxMxxE43LyVAMKmJ8Bc1d2DfLBgTddk99Ds9ZDo6tUmNFXXpkG5FWBhAmAkdSoz7Fcz8e",
  "key3": "3DHJ2VVikP7ZrKns4CuAY11CSpS6KtWNdo4k1tvyGb7xTerERd9ceNyP4WpQJPHPNyNQYm4MxwsNmWRFQLGnHgZS",
  "key4": "4UgEdm2sDJj5AbywkN9MFkS2qLLqd9exPKaoCQZALWr2AejuPFkr3zcZwtvp3DzUidDtHRUBZjUPPxFN7LiqEcwf",
  "key5": "5hLw5YD3hrh3HHUaNFS76TWSnmfjc3995FxKTas5cXhkp1WjGcPpPjarDNdG5kpg1AiGebZcdM8Qby4AZVfHHbf1",
  "key6": "67BtKQfheDKdyXzrcWEbdVsF8mzcNJVuEYDezJTqMakDMqngJY1CMSQc17We7fVihPTaKJtXnD3qpJwnpMKrCPnt",
  "key7": "43imh69MP7VkhXh6jLNyv6ANvgeVMGXEUCYpH8jL3kwue6HJJK4hxwvgjeHhjEDvpd85TgnBp4zafB3eDWEZS8py",
  "key8": "3tnntagzLYaNXZeghFa7LFA5JzJ7BtVHePfMv45swJ3GbFaApDR2B8iTnGKfjqPso5X778y8d4qwbWKnPxiBB6Kc",
  "key9": "24nhRt9pHT8V3Bo9z7cE1LQKk2nCA4SpFC7XuxNv96cuzNwsDjwTE9dVai8i3oQaYiSGsE59945Ee3UvPfViGwV2",
  "key10": "3eKcv8JDNWi6XRsgaiPh1Z2yKMJ5Uj43REC4Co81EYxeMs7mH1Ja6maLFF8bnBTKmUjAfX2LASnmizGMTtdVQgFp",
  "key11": "JgJuWQNXG19HZ1nViCsM4Z2AGT4mynFRGgq1BfZzE9jrx5fEV3NQ9bQvLAJepLZtTACKLdC2UEkrJNDFykni9F5",
  "key12": "58nysPuwr6poXZLqpPKQq92z8w5hj5NcSvxuCeBZ7DfWRdbeNnkaRXmaMQV7oX156qypiWDLHb2mgxU1mq7mPyNe",
  "key13": "3PDcH1kficF9sDgBV9G2vEu9nuwuXf8RVsDo6jmuG7DvcjHqJQLtTPanugA32euXxKiQN5VRCS9pLJVjF6j5m9uU",
  "key14": "3EVYYE8n26Z1bewQ1LJeXjLp5b37aGbjKWpGfMr1PYFP741v4oAgheYFDU6BVK8Z4njG6rRLKMLrvdUuARbMpiG3",
  "key15": "5X8BCZ4kZRrZuxwcHngbKw4LsNiHE7XV9TcJz6fCNfcQvhTx7fvscWMQUY3ZmXwG8urnPSdk7GerUrnsgFNouLQR",
  "key16": "3XUP6usUBhV5wCeJb3qe94PQ3TRf8drnYzgwg8DKkMavwRpjL2NbN2W7rt9o2yHwBJhrVJRvo54tj2ziMnD1cNDv",
  "key17": "3CvgKDRBzMJWNBEXc9LsgXgu8qnHzmbhTfTv9xCYz57wktZdZ8StPjBomQjnbFtFMJckZ2CdVhmzVGtySSoMWCoy",
  "key18": "2GNLCXKefbqdmnTZkp5VThadFT363ozE7djTadVHmbfPCztpYVms6vnT5mxqunsNKBQ96DadtkQbiHotBTHkztJi",
  "key19": "4NJcTqdX1Rep5Wjowiv7p7mZWJEnJECYX5tSjCB9252rAvojRgXhy5X6Wxse7pi6c2mzid8oF9totWBi4mRBQJBx",
  "key20": "65QGqiFgwuuagx4k466HM4mFnvNeVA2rh313gAg3uSsZM22jBVoYkYMaeoww5C9FjYjyH9TSabQco7aqXK5wHftq",
  "key21": "G2kp5RW21j3apU6gaJbekshDZoogRk3vyxyKwi9auiwz3j5aq4wyrirAjoHvSsk3iCMGMqaAfbYnWMDjSpY6LQ3",
  "key22": "59jQrWY1Dh9K6AA4czNaxPcSTBTebeQfkuDFSg3XtMoKxMkWp9WN4DFwHqEWHWPbvdhXjPBXzsyTKSxZ4XVPWyCN",
  "key23": "NSpvtBUtKu9RnqBLWg4Uh3nXThFdovCgXBSfRWX9Z47oeLgqGh2PpTL9umTKheoRGfR7rkWL3e2aFtunrVgE3DK",
  "key24": "5Vw4yPu9WKNkk3TUQpGYaNU6TtC5LTBD9eM3qxzPkG7e3QfPdKv9pwzzkExmYjKnoVQFXE7JHZe4TC5BG9suDsPs",
  "key25": "4kWvYnTWrRCQGFrJSVUSxW4B3SKZvoBPKz9JqHSXcdofKKE7VH4zT2sT9oP22jzrZDVHXBmX3WcsKS4d3FJLTsCr",
  "key26": "4C9RBr5N9umTrfb6sm2BTHXLuX3c3rYQKH7NFnKLHrEhjqkCQcmEedHL7vjMSDwQLwEEeikM5ceoAYTn75mRs22K",
  "key27": "38QouP9FTDsBGiXkd4TMs6r1vDnVJMyGZfdHJK13UiiAHhXuTX2vwRTUGUQGwKqoR2WcRZ9ZqvAfz41hcvM12mzr",
  "key28": "2riSpRpLk2jUMVoSCjcVkvErN3tqm9K1gFQvsBpkyxQonNd4qCBkiCcwfkarNa7uPo2vE5ohymWKW8W3AceK33iY",
  "key29": "4npwMyX52f8WhLZkdbg9ZUZPR5ohRQeaigxih5pqhXc1aUp5mmh1ghQ4AiPKPZujW58KZqViye7dueHzHFWrbK5",
  "key30": "eotqgSASD4oNi96MJeTCJLktBz2CTLoG3K81woutBZgdaaS2Dmq27npgAfdGmShepo9jNxALjrxUCcYtpxsmdum",
  "key31": "3CmkKr2Jy3e8HdupV9Sn2qLRonvhvqAehE491j6Up9YgzG31FSX9sx9v6s9BsSPhcr6RiEr2GXdrj5692fpwjNgn",
  "key32": "2GL8oWBq8tEP2fHHDGg3oSykHkDDCekeSx1sbxZKgNErFuSEEfVvaKdyqynZjncQ68t5AgqyBWRY9swsiKhrn4zC",
  "key33": "5RZJ2aXG6cu3VWyWoKkGTAPsgTPTYXQqpuzLhBuu1zX1L9ak9JU8AwhUkHkaiuNXJAsAYsqPeGAN2qtkToJH4gtF",
  "key34": "7G4mL1PeMaFMrgPm72rskTiiz3QNweDkAPfaf9xCoJCivj9fjWrmdyfEDWmAZ6fmA7jzhgS3hTMm8nHVcB4fuTt",
  "key35": "34aYzU7UkZWYLGfKfHsKEHB9Noi4fGEUFQpSgaNNmbtCkuzZSxWt8syUufmvsLZX9g8FjmbBGYCaDh3GwJHFRBj6",
  "key36": "5mvvNU6TBXYakkJzQFe15gEecr5Jg5B1ocgUC9gUMzSRXXi4qZqYsygptdGnZMex2KN82d62MwM4HBjdEjYR8zwt",
  "key37": "YryoYrpVPq48n1cW4FBT5W7YttqnnT5XPrTFNh89z7TQVZAWtZoH9NzWuiyEpCKdDnDidTBrFDwH8LMPaEUkc3h",
  "key38": "4sRddTFkgdw97F9sgQMhK6L7XPXey4nQgVLP4JxeTn2EHKyn2r7KYDq9VVrdWiYki7C2sTzMWzxQRSNS8uVoAwXB",
  "key39": "3zrgvanKR2JoE3hpHaCkZ2z4bt4g9S6vEuGXY89MAXa8EgPWSxvJPBq4ZeeM3PQNrCCmMB6gtCfYajtuta9EJ3Jz",
  "key40": "24FtKFHVGusTVGC9wn1dbXpBEKDfJMSiVYM8Xesbrk443RCkQpKKUggdJaj6qYDEvXg4RbVmLUzFgYF4S47FSgzV",
  "key41": "5B9fuXDsBNxK85F6iq3g6CXXtqSrF3UAGxYKorCLExbZrj74yYRwCargL29EJX4tKVFkpbiWQwCYCGrsD8n76eX8",
  "key42": "5gMeCutH1ERPxK6b2TMfQuvRWnDABx9fRw9FT2RtLjm8uRuP7nAmBWqi2hCVvheM7ov4Jh4DS8nYzkWtYfznyabV",
  "key43": "4egUi8KCzutrq4tEh5JQoSokWQuEKAinfFwgovGsxwbevFNVQqKTjNANZbDhMrYy61jiZ67GZYwc96w1baqjtD4a",
  "key44": "2m4dhWgPGcwxhKidPd4HHTfSJHk2iLxthm3TYHCqzbeoe9nmcFhKjACnWLtcAwwTVyE22YdA4w5catBa7ZBtvcqA",
  "key45": "653RhvN4VquwCA1kq1ye4tkZ8HWiav2eouHWCVQB8vwZ92KEagp3t4U263zYa83oKSqv2aYL94CSJuE3dznmTpKR",
  "key46": "4eUfWsEyhmkPeWKKn2wVhDSKLz1RdHjvdFdhfPkL19eKVCvHTRH1yybid9TLumjrf7aboi7YyAMUEdZwzgsVG6Pj",
  "key47": "4sfr6oxJVD8x5XN9AYuJ4k15Sp6PEnnR9HwTe3ZdzTdvmaDzrEPLfKZUHvs67hjF7iFU4Y3PKHbDtgBogMkD27mw"
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
