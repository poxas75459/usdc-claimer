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
    "5dBwJnoAypoWEVFmFU8QUdt9iBdbP99ie8EhxFVGhAxtEw7Dui7sbHitNN46sruYewijQp2wXNeXeKBqp8qPVfc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBeHZ9Abqy5pHYYspN1DijLxEBGqvNmLU3xhaCBX9pcYD7kZeLTmyT6rEfGC87DKp7MzDC227J89ACQHuN5ShQH",
  "key1": "b5HcJ4AGJN6JVL9tD3Xz15KBwqfFNSkjfyWgEAS33bFobcmLP8YcXWLHsHw5cDuxpyJLMZh5WnHD7a8ABGghvrE",
  "key2": "3uVWvj1VyKHJVJnGe8hC83PV5wnFZetvVHCZuaaifBdonDPfREGAMqXCysmXFdVa8cwC3rPDeRgDowRi5rsStteZ",
  "key3": "2YxTRTF2oqFcHugoahKMS9K4iqNDeJYss7TYVkMHmNtLjAKtf7DsmMwbS2N13oM7exmkTE3N3aMQLV6GqvTBvJCS",
  "key4": "32tY52kf3a5HLcns4dNXKsmcS2q8PytpbBq1SMP9Am99kXFf3X6nensNRpk9NJ7hy4pvvuobUC9n4UpSXzUxf4T1",
  "key5": "4RsoTDiMhyaeCQi6cQkw5VZtV18UC88FkDhnbJVjQWRdmGcFnH9nFC4bGPH8vi3rxGsVDYuLKWoBQkdTsbW3wwmE",
  "key6": "4pRirJHFKnX4WFskjKtybr4CYtzhwDXTANHq9NfGTASnLSG9YEdRGmfHMvqDVBEPj6xC3Gw6jnqAw77R9WsNg4PD",
  "key7": "336MzWSavvdoq55PzL6WePiBLJSqM1taToYUnFBKQcES2zF4Y938Eg968yWTT5NbkdkdQwx35YwPdSJX2sLgrbbT",
  "key8": "51Re4Wjf7yietkCiUYxuwoGmkq3r5CY6V4GeUAEW1gJaztEnPME3pGtdS6qGss96dpFprWZQmePiYroMCbLtzeUM",
  "key9": "3n633yRf4DvbnjEgWYmRSLTi9EGGeoryPrgRK6SWQUZZsmxaqKq9kS3NoXjUjCFxMogqGkfrtqKagthJqJmUF4F3",
  "key10": "5EGRU5Jaanz2aU1syYcnWTYHweRymiFcY6rTp2aUprSKnRNyMiW2Mi72q4TJLDwqbmxr3Ft7P6qAKGGWRgVs6xXG",
  "key11": "5SqP2Q5QNAZ39eVmTyZDRYwv8dnFTCp1fKeyFZQZsTBS9B1VCTPBqZ1RrJg31gN6pikrbhQMMiukbYwCE5ToXZ2T",
  "key12": "5a9bqw3duerUWMz7xjUvbWqnMrteVRBmFAVy7w2TM5b8fLaVmGTHQyV1pgXvTbYMptNVq7QvCd45MxjtrjQaPUmV",
  "key13": "3LZ1URRhH46Zz18Nd12KS6FDbp8onNeM1oUc6sCp5jvN6AxnzvbDbG2EKugXzzansGFENkXPNGV5cpGoSSBPGGha",
  "key14": "38Bj6SsLGqM3y92hQW7ws357THiuXu5wnCUppUpcd3XtrJMVCmq8438DkLBseWFuBRwidKYzfmMPGtnyRgwirofN",
  "key15": "2dK337rgDiyRPmEutWyBgu2B1FNnqh8b2sTnWgUfTNoGhiBDK7CHtmDUyoTB93dyQBzHEHHzpQCEVzqjCXZMwhwk",
  "key16": "cCenQqotNnvkiEUugyaLJwcSXcPzneM5HyejfjiNAPFDabzgj48Xtgik347phexaM7vbRRukPnZaQtZFWdbQxju",
  "key17": "UFcD1TxEzWte8nM5gkENyhfXS5iKUU8TUKcoJCv4YhhSD1Vv7a93qeKdg5f6T4ggzfq6dxPVMex2D5LcLkgeGyn",
  "key18": "4WvZY8j1vT8FCAnKc8vDdN7BGcTupznQJqckgL1bNGp8fbdqSAqK58WTPb9dTzfzVnLA2XsbEHoB5ZRoUH9iVC5Q",
  "key19": "5PMJ44xsoSAntxDzZax3nWnfp1kgeCQYumYHTM2UHQ3Pk9Ueg78ni2zZPQ1vwQSAkKwefxpXvaRmYYtHv1n2Jgoi",
  "key20": "2rcjsnRVyofhrFx1SE185SdGFNRSoYFLky1zMfBWJa7ajCCHJYRrfXKZJHhUbvUiUQiGE4VWvRRtTjcWDUWC85n6",
  "key21": "5LsnZdiv65Q9T9ez4SvEXthWQ7Kivcf2atDr8GS8EWhFQ3kKua68B5XqvJpGcbffys7TD2vTLav8gWdZ4o2C1zwb",
  "key22": "DVJ8NsPUg4mLpwe6rkBvTayu6bx6wTRo7xmMFodBhFaQE7PqVE3wmCTGBLvne7puy6raSFTmsyA6cuYZUjCnkwC",
  "key23": "Z5pkW314DbhZJ9J9nz7mXhFvpzc1TQFwFRKJpJdUzRde4BxinRUpyEugwJ8aha3u32XEJCf4sjK1sySpDwaaHjU",
  "key24": "2akakiemH6TUrmVMgczeTNz4GSHYpJAVhgvCvVdQpZyiNDRsA5S4mAQbpRVafZ18fP9Ui6HFNE7qEWhDZMU2wed9",
  "key25": "3t9MX8K2sNXBC6i4DxjLHQMcwzJgmEG7PgyfqovprhdosWto2G8fpB9XUruKXyoHUxUrRSZhM3KCnc66bhC6Bxxr",
  "key26": "5XQ24K3s84bz8qNnSNCsFsX3PmDdYD6r9Cdvi57pn243goZNRzWLGrpmU49rJT8Tns3asUbbHauevHsqEtNhAepH",
  "key27": "meoxxuosG18R43WdQVjGkHTbLrG9eKeRxt84Lgm4jmwqF2swdPmtcSJ7Mtgw6dNaEPtRqfzKBzjjMgtKEgNCpZZ",
  "key28": "4i6Kmd1Kt6GVJmoobXDLKH7peSvK2ghVbhDjhtEn7xnyBG1JJz3mJe3AxMFrGzMDVD8oBDoMD1fVL2322EF3gDCt",
  "key29": "52bZDynfGkXXmMUyNR8owgtUcUZu347i5AuddFQYEFCBRdADwDJYhwzoe7P5FGhTwApSkPsBF4Jr8uJqDmAuno17",
  "key30": "g4HNPgP715QQemoucmcpKiWWCcoteK8YM6cW8ieVKkAL4fjtXdKvCYzmLyCV5KSFH2ztfVWePP4HBs2zeXiPsqV",
  "key31": "5Ci3kgT7HstSSywqNZ2pXVeByPNJYepcpVvAUB9iDkeiUB1StmsQGXpZ3dwWjegMknuV3QG1k5CNj5uQhjoJCGk7",
  "key32": "2Ryd57XnwjVHcBYP9uhmXSdHsWZSVxvFBNR1wM8HXgNFekycWrjLRwQkaGdYPQssb721SFxbqWjg4Bze1ZjTxgPN",
  "key33": "2qNHzKvHtVYYyusSPERnbbovFFaeRrbHKT218oWNeSgdtmEoN8V4d6wyV6rDjF7xdscTmB1SV7JGAh9athAuJTyP",
  "key34": "4oihmb8VfJbEaUkr3gdFHANqwbdxKEdsYqzq2teUUomCfoNrzHyFF8ERycr9oWGAMBtuMPzkwBbjHumcoEQuAr3w",
  "key35": "5ouaAuyc5s6JrT6Mhp7nvKF8qYjLVvENKqrLSVy3eR4ixWBiZuD4paCpFTw26f6rKFG9JAgWoEApYNeRFLkGeqLd"
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
