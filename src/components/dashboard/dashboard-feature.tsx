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
    "2zQodumY13Na5S6j3jnR9SKi16sdRiM5Hgy8p5inBxjGugjkfTnw1jQSDAnCMYJr2bdyXh3iAzvP4tuyovRCo6ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aSjYLzzECyDyYG33iZQ8ztJh9E2KfXKwo3Ln5Yy4mS7i1LFQR5Su3FmUARYcSwu6D5xwXqEFYL7A3WYFzTevk7d",
  "key1": "65SFztcGAFCzSm9JN4AvCHo9Yu4RY9fscXgnpVm28o5zH9GjCkTMscFPwUyxNJhT13X1y4mg83iJzvuPsfo3sWKB",
  "key2": "5Uwp6hYwc5TLWPMgHu5ni8FYB3csCVEmWK6Y9czGMdrez5ae98UHg3iBSCDUhr6TWoQkh4oQ5S62M5xU2n87SBy6",
  "key3": "589zK4fKeUpqYaKGFxo8ukTNuDNAERg4e5jNmPasRYgwnf4dK9T9G9RKhK6CNK2Ec7Xj9ZHz7PvsqaxSsMSDJdzg",
  "key4": "2DiKkBgF9tmC8FTapDaRfGQcFMzH1JV1MbuM6mKBCeaFFRQQTEaMXgBsx2o1iTC8sCS2utM6xbyWFxTdWUWvKqpU",
  "key5": "xcutKwryHhK1vtWQmwf9tQG4os42HrgfwogT47tZAX4fZZz3RjCEoHDxeUaBsuRhrG5T8anFmhbaCVRSx7FaiyM",
  "key6": "3MsjdGBtpBA2GtmDafHZhY2JqUuFQskQ8oHaBtBmpohy2yT39PZjb4DA5kLHTGt1fn5RNoWYEFT6AkNTaE97nqZp",
  "key7": "5aUmsrvWiMZS7hwpcpdwtaML1vzb3Heaj4aJMLDXJmgQYSH3epSMcimVxmPnZ4PYhToh26xwDFRLuh6D3XpoXDGY",
  "key8": "pzVFhd8pyPfTvFygVNQk7TWQr4s5vAAjVGZXBKNPHBNL7uuFe3FPtKF44Fx48gK6JsofBe3Cm8spwhh2pn2NkKd",
  "key9": "MxgenkX8T5YvaeEsY25Mm85hGRTnsbaqBVG6LtpD83uL3BM4uagAHSDdH2eZgAiT77WXsFD6UZeTaBf4JiRZyxf",
  "key10": "4d5HsjhXUTS1fKqvGmWTMWsEbfL4A73VjmahDJEmfStZ7j3YV4GSeS3bJ54f5RzMYHXhegTKUCx6XyKRvCin2vAb",
  "key11": "XUGSDNfgf2Dnayhz64EbVaP8EG78A2PpuQLwXCyFoG2Y2aCEEEwUpB62rzQvvdUVQ7cdarMLLYQ2b53zqPEDUcG",
  "key12": "4WFXrgv1d8zTZUXSWsmRF8eZo8kkuMe5kuatYu3ytqys8fnGf4na98yM2v2PNjVQZFpYGy7TucjAe6NZEcXjt15P",
  "key13": "5eMtggCaBxHw1Ed9QbQ2RFTwPJbkrp1D3NmwpdZXDVhFoLfvcSGcJZuhza3ttiX2fT7k7mHiZ1sBUFW3kbdSQMQa",
  "key14": "eZUBmtj6KLkM3sUBCt1CNpJmSEStvWL3jAiwrYax4NHCCPndkVqmr4gni46zgEbM4AW6ZA65z1ZpTjFMjBFY1Yw",
  "key15": "58kKJSrQTKe1LpFQnMkB4EdWyDXrCKGZFf8uW4jSdGjBMyiBj4oXswa7g3JVqXrqeSiugkfgKYRWevm5szcZ26dD",
  "key16": "2dzuWbaxqTEufPCwYHdA5UDqfDvBKzjUCtapc2Ybsj23RddLG6ggQE3VEZgfQCSCsPTAs33A7dG8rVowMyx2mpX8",
  "key17": "3cM5yn9ggycLZGEC1y3TcRrR8ktGta9ooNtz63RSR8Hd7wBrwCiyrapQLpaA7ZWJ5kHrF5Z2ZDPxreg6CSQkjhWg",
  "key18": "59DiqVWSFdrAexTZGiTTzqsiet8A4biZ7juu29Cf9qH5saCZY8wCoxXGFt2WfYrmAa9dyTGjDekATLs23tJNf4mE",
  "key19": "441MHNpkdkcdXB6ZLr9smU5q4KMPqWhGWr1v98bCCH14RrqEJwuBkE8ksgFubVbHqE7i4cLzJgmEdUDvAXZvNcMf",
  "key20": "5xSXtMx3TdaXd1qcXi62hjqjgrkNpeX1UjAo2zRX7EkYCNfPNC3G2VCzyt5BPQvAwS58ky23qJjhcZetpYT2Bokc",
  "key21": "2C2ZpQaCy777ccyn91JZTutHpKBLtFWXj7sZuLyZdrrnekHGWbzHc7ct54zcPq9FwfT7FUuCJVyGQskudfmaVwNB",
  "key22": "3CgJLxuiWvhTwBkgXfnWCcRkfbBzCbCeLHY6Xfb22kPVqrbSLnUiN6XoyXP7SpnHi4zYbAGVpBfhh9mUU1PJDKYy",
  "key23": "4eUAuwbymcenwsAiTbViJQ7a6mgkvncvB7hZvMTLyu1JLoiqeGBp3kfUtgyBFqJf96HbCHQsU6jjAqT2spKFW2nD",
  "key24": "1215y9t2GBoHhM9LmMfp6cY37LcCGyBCapgUh1Z56E8FLyGbadJWWvzwmzJeJ7JbRgkku6NbcJ5B43MF4gYcs4Qq",
  "key25": "zZ2PGJtRLxuLBFvitEFmZg84qWgMsJjzApgYe7fux6bisUZ9gVBnDNBMLwqGU2hBN6MgyxremuA1sawxM2cG7JH",
  "key26": "3kkmShjzHr3U1MpiqtTxHEUe6XAzaZTYnVkUjWDNZFqsEiu8qpeVDxeNLE7ffy5Q8eVRk3753XJAG54pghRtVXvn",
  "key27": "4q9qy54K66WYZRrc2TR2jaZZZCkqeUuD8dqBHRhYF8d49h4vZgVcRjB232i4wCTe4MJ6ZPJPgJdkfR6cPrwQ7JHT"
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
