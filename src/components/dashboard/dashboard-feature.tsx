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
    "1z6W5SXFYzcAxLnJd1cs8A8U3PeMhHNyXh796inF2aqJJUnmRBjNdjUZHq3jZcunmf1xp1iuGBxNnuaQe9ghyvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J3D4PRNaNVs9CuJ1goAcu9VT2q31JFsxH8c28vj8sqqsjqqfgZX7wd6qZr1zQnVfzsYtUWwEYe2962fYqBmbiEE",
  "key1": "4zqPnJ9s75wdUVdqHXbviFwohg3GMpuTSSYxvaCJZVJUqVSZsPbACextNSQeJYWmdWAJWnCAKSsR4jVwWHnYaQrk",
  "key2": "4RdhBpfUyh9SGhLD1MwjGn2FcW84aEyWbv1jur39dQnmjLsVu1fGz38fTgZv8xgM1CXhSuYDBGzMa4YkFa8rAdzA",
  "key3": "ToTaVRkCKr463m3ggo8dNtCo5ssnqKtfxbMxpyPvuXqsUmU4ZfcJubZiHMdJ4rxu1LXbakTwyaPQoTwgJhAfXTu",
  "key4": "4e7zchL1Nc7MzVvX1M8gugfBaxfPMN4aarpci8qCkz47uE2HMtP32KDrSbUDJm5v1xUcCwGLVXjxgitPcJiyJYWF",
  "key5": "Wrj3hYVUNt3zLtLLmDymaRHiNnMk9Dvnrn1rD7bhYJLd3Zf9rGtmJDeY4yDVJPWus9W4pNaE1Agkn3saJYfG235",
  "key6": "2mYnTwui8UAMYae6Umj5p1J7Zt9jUESj5sdGPFN9tCwbfLPGUjGFRqyiMuuQtccKV5h4Buy51Q44DuuLg7DhAYaL",
  "key7": "4YzT6eMDp3dfpvPS5AkTgkXxMvP7wJmDuAPYQU5eDjo5h5Yvey2WHCGXaWvCeVUpvMcQ596syEuwwZU5MTpwYLRc",
  "key8": "42RiPa4awErcj37aHe7NWdvc2XMCrv7BGZGk8rbS6kQXXXCcJd4BvUjxBRLGgRvJrnkyqA85nd6CouwV2e8Me8b5",
  "key9": "3Q2zrFD7ZF8VzbopEbojz9psaS7EMajikTdvEQr59QhNFjcbijouLyzY3q7WcenpU4WkFxegu8xSgJhMK9hvacQz",
  "key10": "3Npn35pApF8hmMBVwoB9HQUNHEDQ4tugiB1EpZF193n4joqwzcaWMfSJyLhix99sKKb8xjff6khzMibEhn9vkdgv",
  "key11": "5ecJxiQp6V4RFFhH4GRBNiK4iafka9FFTirRHxasUrGx92kEnKMkqyingU2QC1DcTNB4o2iUBxYdxQksoj6ZLgpU",
  "key12": "56NMW2eiDsVP3sgGQeLpZTFF8YptL3pDeYY7YMsZ3iZKaV8mnU1knkBZiyBvCHBDxfXdZY9azqNjzff42Ah1XQ9g",
  "key13": "2vNqLoDgEgyD8nMwPhGCAsBWyH6h5v5HiGgYLfiy4C6KXkhTWFwmTQpY6VhvxqSvUxUcc3eSsNFwj5JL7TMCFLZG",
  "key14": "4uAdnPgyLKKTSV6S895yjcUxUEtWnZ9cqfoj2p8GzJaeEFdjZxbdUyhcstdtwoKeRBgvXcdpZF69r5rcUpLLtzCn",
  "key15": "627RmknrBktZhxgop56qvfmQjtNGEfVxhuNo212iWyVpaRkyXSuTzUTQVNEuQvPVzS22FNLrZyjS8RQRNdEnE2VP",
  "key16": "nc1U3ZrKyMrbLFAm54yLmoDKXvBWBCx2ejT5SmEahxt1LyMix38JDKUhHpGvnFFpfhradAdpdPH63mYRxEp9wns",
  "key17": "5nzkSe4Ez2ZnR9eZJDk6QHqd5emrgodmVbiUtxim3aCpwbShDVJWfCKiV6SFRodpgQWHwTDd8todXYxmKs4PStEF",
  "key18": "5ZE4rJcSpMFVjBXq4HmVanaHNg95r1MiR6BYyZ8cQu4BJ9NiT6Xww3ncb8gPBp67LDXfVMTePGw2APnDUwuBojaq",
  "key19": "27px5PRbv1cYKz2j2AuXbJCaqAPD5jNTpmx2V1zj1qFqdTc11EbabjtjbyYXHCiCN99W6Wev1sSS5bvAPpU7ZGXe",
  "key20": "rhK8MkPMzQbeDjVRinFaBMeAL6Y33j5bv5f2oHqk13upi4JrC8Ug58XpeAaf7vHPbMhftz6aajfkJEeZDsMmQm8",
  "key21": "5n6nX1fXdfLQ7kE2bDxLrTqKvnmiyRHr3nrj7yw5TSiYY4dV9AgSUB7AwzLxbxTzLV1GmEPXa4M1bsSyAGPrj3Wy",
  "key22": "5TNKvmUP7nGYktGB5c4o5w87By8bUJdDCrxpdYPuVYtJgzxTMGxUSDD4D3QKbmMDRyYMrtzab8JPDXaVinyXGYJq",
  "key23": "4DePFPKrz31LMvT2cUDjFWtQ7T39y1FVAuERDn1K3Nc2r4Sdr5CPg8vgCi9XDZ8VanacJGztBG4jVMLK86kxTUXH",
  "key24": "2N8cjUujVDLfmTq1ieNyWYNdwLePJ7ntzDgr5hZVCWihEKBY5evPuRBhWQbAYqjD3otRBX6zN1Qu7ik7sNScvPpn",
  "key25": "4gpPsRoFE4mH8G6WWUkA722n3Zj6oW4GkyaEVScv1rmpVm7VSjug7ZaFLUSfLrhNBSDaHp27vPSEXS5vreGp2jTn",
  "key26": "3RCy5LEchxUbZEn63t151ARHFt8cgyjWENaDFasqGRJsSf5YRnyo4EMmvSHHX3Rt3ejyfmFgbVU1CvrtKdSVbGnL",
  "key27": "2nnRGvjQNii82B1VgwU57s13diL59JPonAnoYJ7qAycQD8bccdikTcx43C4XeUzqKUBRCo7mJHwJdA87kcbvASVF",
  "key28": "22Z4qqpNkkt16YVYkAW6mngcZvB8M4LjQQ4y8t4B9xcneoVVBHTQqynCxKkeqDxMNz3c3c75DNDrWXD3JUC5QcEE",
  "key29": "Wp8E18HB4HS7zdd4AwRKG3GbrKUccL5um5mbQA4QKSFdV1Lv94Z2aTnJo6tH1pPvpJ1KdhxNPJkKMTEZwUTwkee",
  "key30": "5S9Qm5jEU13YM9g3ZWutSi4pBtXtBMkehBejm16QhVG1iVobhdeqtTe4Z4tVBkH1eHsC9vicr3CafmXJVztTBpo9",
  "key31": "3mn29iLm46pkfsXQggkYp4iEEP9cvbgWnnCABGMkc3svESD2W33Ttj5Hmj819RXF8tP6CcJVNHvrfv3Vwk6ToApr",
  "key32": "zjur4Z7n1dBDXgD2DrEVmSt3pRtfnEAwQtXwqMpNzCkEEeuraKVPirYqrRmvxcgsR9NRj3QnKrpYHcNgb4hC6qb",
  "key33": "3hweoPT3ZzfgEhBLLDbr2asasPRX3RYcsWX3vMqwwMjsz3Q9gRrg9SqimNZGk3ci7ejAW5Uiek1tLNq8PyKhfWSu",
  "key34": "g8baKnFayrNwSkdcR8KxhZtfHYc2pDV6okRoxAXdgCE4U5fJWCzmdtGNLKQLF7mfm9zXfuk2KFc6X9C1is5wNcQ"
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
