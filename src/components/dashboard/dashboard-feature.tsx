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
    "5Rjqtd7jR8RpQ2ALNTJzEbZD4TKPNF3xGsyZ5J3DUhLitmkgWdHT3qdt75CV89c4pbAKQevPL4az789rEWuFmVJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wju5EW1AHsdZN486ujcrRe1EMcyYSzsknNQinjj6Ncg81cQTGopZ6ww1bPx1aNVsRnL5FfZgNzu2T87LEb33WfQ",
  "key1": "4Yu27g8L6RnH1DaMd5imAZKYot7FnRh7szA2hNTtxu19L5581SxAD6HHVNf1MsjtfKmmbEyduBUuMyzY8F6mUgpt",
  "key2": "2a17527EU4rNnr2JsN8Tf3zXbeDQZ7eBxeQa2HDKgbCeinF2khWCrFNeHYrHWtuTe8qqwpZnxpwLRy3Mmy6qX8yW",
  "key3": "2Edk3sHddVbTD1eeYzimZzVKHMsjac4i5PnjppVSVgcHuL9bhQMszZvwspU3MzwpgfHP6GmoJbE78zW82Mt9gedy",
  "key4": "5zX5jgNSiWNdU2ZZfEbq1yeSkoPQrbSQQbraK3jkaHvzckbkjDTDtxzEzZcV1cJxXiYbpSM66gMzYmtghfi4zcyj",
  "key5": "58JmFroLAbPHpA4GjmpLG3HWaKvV3f2DQfxw2hm8MXgQZUezz1y2c6FTrjD3X4ZA6RN1td7YABA5bx4t5cCmtmgD",
  "key6": "tY2UcTMqo8gqaVKmgFq1AdYrQ7NMbNgpUVEw9qboGEjZKSjd1wMfEse8qH29ZUpmmbBWEJwTnj4G3Lh5vWn1zh9",
  "key7": "3pLoyfmN97tyfTrg4uDQbG2ZmgJd6vZiT2ni52Bz1oV3RdBQKkq2Xr8Y1m5t2nkJyQfQkh5kWcc36vRp4EYG2HD4",
  "key8": "3bfx9a3rNRuL8gSoGwmwRqLvRims7dGVLnxmU9QsGYwBPCAbGBz4S9v5EkSJNbQzdEXd5RchLoPa1Q67wUnMQkYa",
  "key9": "2mykKgZBe4J3DWLVUA65AuDZkoZJtAQFRRkwYdHuN1jWVPfjbfqXk7QX5rSEZaRYt8dhyQmwo4zivBQgYrxh82V3",
  "key10": "9vRpxWsSg7Nzp78KKgC4cD2FgDqVK7pQnHvwmEGkN7jZuvFmqqw9HbEBG9A26Q1CBEnfN3oLntg9z2vhxa4cVzp",
  "key11": "634q7SdASaCYEMoHVzZ8qPCmfSZhRGvHmPfRi58GbZAHE6KDneKiJWZxoaCygH3DoYhkkQRULGufp5DkxX4QxxXQ",
  "key12": "XwoeD6zKc8hHqTV9cDScNdhSRJZg6mGz1iApUBS42QwxrDm7SeZwU5KSDVZsMs3GhZpX3njQLwWX5qMVM71cL4n",
  "key13": "2j6kgQvcS5ufRFUTsDD5hWUhjRX7QYxjJb6G14Nhtd9U5Pbi2NTQE6tpQ1kf9F3dy5QHPG5TVomMM2hF2ECs8Nt5",
  "key14": "9NBqwWP95g8hTQraydb18HCf2hsbjygbXDREZYawebr2TdiMw2ueGQaE9YxtohpcGSH5ZHCsSTy2LM36J9jcaac",
  "key15": "53FsFPZycUKfwAufBfx946AaMqAVVu6Q2dqj9nHMh9Zp7bk1jNyMYrjuThTXAqEECwmRG4rNsGVCHYXMxi8FAtQQ",
  "key16": "bRvdnCWzWy99iDDQde31GPr8PBN9BNPXG1rhJVZGqwPZQEjFgLm9ws7wqDAQKeKkDmTP18GhP2d6GDFETvPgnHB",
  "key17": "3cNPtxVDEk2GetWvuB6g6efUWSqhxyyJn76x3Ds7f85HABHy5sFBbDYcSHPFFkBiYYmnKLUWJPqJwCSgEi3CdEbc",
  "key18": "5CSwtwkAB8rH4BoMkH49uH3NLLk3x3Xv9AzLToM4m8EtzEAjbRVTwmb6tJu49HWRcoWA8fegaYSrHebXur144NEM",
  "key19": "2ZSa2AE9opVpdEgWN7FGF8bEU3wXUhpEqfWep6yEgKBWGc9HQ8Tpu5FZhVgAviADbHfLGTvUNr9akCp8ZhS5mUBB",
  "key20": "3VPb71TkF54rZbeDb22oLbBdwHHJGFQL9LxSPMRdQKJdRheyV6vqtipdxqkgRQBmYNKn3PNwikFkaL6oPweegVth",
  "key21": "HoHBhPxwdx9iagxpSfwfRoZDcRZ1QpR8Dz2bVhbWGjgyHm7HzkVzbuZhcGoHyDnKMwpEEYm6CLLPKwNNJD8g2fX",
  "key22": "3D38wH4KW7fipEiwMwArNhiVAatJc1zF4ruxBv7Qmthrfa3bdNrKEbVEhq92BjcWdbGEFYBaAFHMsf7sPL1dg2vx",
  "key23": "ENfWZjPjmtcSHAJJSXTyN96ssMRvew1M7hjE6noCQnyoaYEEcAS53V4h75WDtHAyrJifSzqYkmw2ocZDRDLBXVY",
  "key24": "3afQ5jGopEpBLLRzjRsckdaWL33MpjDdSD22npBdACGjgQzTq4dkRvoWm4rwhSQtmzKa8oeyKXXx6waMgmHkFSrb",
  "key25": "4z2mRDraCacdrajxepWCC9MFVNYdRt7oP9MXi1xpQ8emqD9qE9WrCDRcuWtAcV8oS5WW49V4q3gEU1oPts9SnCF5",
  "key26": "3tFRqrsRy5pMfxT5txtXG6rXq9fAb3hAw3Q8wYJHYGDrn1fZWJjMJi5rNoH4eU8J5QWgpBHsyPNYq7RhxqBSAaDc",
  "key27": "4u8jR1cr259zZ8nQyWRqX979BZFiopZA8VgLbst9VNuVmeVCfT66DTG9S7zwR83WxmWh6rkZnbSFNCuvMjjuoeUk",
  "key28": "4srLwmsk2TbE785379HVd4df7kENmi8iL42JnGPMZhajNr9WQEDfP11K6Y8Fgq97rzsWxEqStnDfhU4Q3bk45whX",
  "key29": "5XrZWFRTK8nam3bxJtMZzhag8Ky8hGii3rBRSA3smypyzCGneTZ9GJQ8V5GVyfnoYKtXEMDd9grNtQavenFvLaa7",
  "key30": "4SzmrG23acRPW9WrJbrxzxmbykJiaPtYP6yuf6HjpMJdX3WCCFPnB5rZpfpkxrEfibby7h2jrE197xVdZZFFY3ge",
  "key31": "5tRDmW3UDH5Wnd7BHn7N5BpSEFtgzYug3eHwXiJYnRJkz6VeYuTYzW3oDEWKdNEg4eAd26cuHdjBWMx9A7M7yWh4",
  "key32": "592S9c6hHWxc76BPSYNH6S5Qb7tTQUMSWPtTDCS25XDEXPCbkFutRjJEUZEg3DuhweziVXH5aKNkhWXK71q4SDCa",
  "key33": "2tzH5NznLTazMR5rkYctLL6TN4P1EBryZjChifogeAL7Vn6kxMLMSQvDLB6PBg5193N6TawNiaBhWG51rzcxfjuV",
  "key34": "2CSzs2i1TTDvRx7dhtTAkehJpLr2X6QbXicfw4cdYF2moo4JBXXLf5H99eUrXujQyiyJjRLRbd3c4NywdPxL9C88",
  "key35": "TaxWHayupiZb1booeJJ5xbG71MQnBB1rKYT6hjSJ4vBkF3RC2Q1qyhzgs9J93V8bxJkfVE2rTiK4ZE5LEekX5BG",
  "key36": "2afZDnFrMzSaMcn3ckASoi9GX7dbH2eDhVbVsjT1xcwEdvLDdZqcHgTBK3vyWiw3upFLEyDiwV8CLbBmuFpTiwkE",
  "key37": "67GrSqdjF9WRCYKFQmxM1xP7tFwv8QCgq5Xryy2kDgU8EhAQqtPbf6Sd1JNjCkwuSeNSyC8xrC6RcdV8uYL5TQ34",
  "key38": "5Fr7EES1rBk7LGWVKm2Czhb9ngBQYFJfgi87WpXNE74eFWsWo22fHZrDQuvYNm5HWtQxwUg6aqm5MmCkEX9pewdn"
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
