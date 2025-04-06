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
    "5huRDNbmG7zEFYq79kboL6f5UPMfXaKqmBQBNNTxTta35WAtr5PV1JncqRRXQ24soGB7oLdhxzaC7A7KxLyEZ7ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8JhZaG6WkjJ9hKw1fLy6owcDtYBYfMns6pJ4KtF2YAWB1H1Z3FCacYseti9wk3Bgut8fWNMVjccE2v5gdfFqtr",
  "key1": "auGG6scH3xdQ37v5nv7F3hgLuq5vzGgxwVJ9GQAN3oHrP2KBojYvRUu5JEdRc5ev71qJvwMcCsS4ZvZQWFfiFrN",
  "key2": "4c27etda6uoNd1yxQBWAFJNSf1jiVeMmDbyqgoJksoEGVy164x794igyor52hKSvKeswjepbmZKAtwRdgoXXiYyy",
  "key3": "365smz6SjvCKnYmuiCKjnc7ns8sMfEefA8xNBfcbxAch3AYaW8XuVGkyRS6eT4T7mYPnvbnCfSv19asviH8Rnt3u",
  "key4": "2GNDrksvMu12XwCN8c21xfHLS2wnyGGrSCbxHyX7om3wbgCzSAkod9ycbBqxmbaWYB93X6CtwNGo5PdLnYD6dAeD",
  "key5": "2bC5VmK8nvL4UZx9tgX9xGHzB4LUze2iCFkWPipFuVKpPNhSBrK7us3WdhGKKvw5B3QFMRKpD4WxkEqt3pa1x6Vp",
  "key6": "43WZTpXUtMhojqfSbVUGv1KDXwF81m9grPk3w6FWCq2jTkrbxnosATR4QAwsYh6KnE2oJ58Ctd3uUREz9SkTcUxn",
  "key7": "2xSx8pNvAiyNFjg84c5UuvzcgssoxKmyiRe8Yiv7DDFjUD2SdzfKVKbeWVamP3RHWvPQraWM6GnjpkUCbhbZAegU",
  "key8": "54UiGzfm9cC9LnYrbhJZAk6RipkirXvmhkpv5ntye8umQLNLDEFXc5ajbnxLbDPDwnS6KnkLKmDPtvdyQ7a1KQcr",
  "key9": "2q21Vg5hzeVdkqVuSxk8Z6qtSD9gSx6xEfLXNcTx3jybkDQdM7TofatqMW16TH4QTVEYCszdcPZJt2ojbgsUe43X",
  "key10": "62m6aSsmAAqSQYViFMWMxugWaSpLjv7TEYgYhmDXfsmR2XXsaC72eFwQWypR9eiGa5K1z7wtxdqcKFYdq5qgeMkR",
  "key11": "5ZgURbUZdFQZtRwAL4RGYrydmQiyYTA4KG8dBwsrTdo1wsFLhzirCNYtjxYLbUHzonAxq7DGnQWwZYuByTMQm4SP",
  "key12": "2WdiALhoj5uS1yzXo5aoMeSCuLqeD6Ve5xvsS9wVEzxF88oKxfTgFvBcrXRpYFsSjh9TK77uUHsHTQ4DjjoqLSXa",
  "key13": "3FRY223ADkhBzXiFPmcb7U4aBS5MQrnWDFNKxDhYfPBeNtDf5vzpXVYCNaYxcAtNKdkEGgLt7mEf5fuVUcS5Yo91",
  "key14": "4Yd1JGFDrjWUXPQmPjr4CUEGFQso9nWwSTmKTd7LxdHcFydg5oYTDP37SHVAUaj8CvqaaaYKahwrjoZHLnvi5jPs",
  "key15": "gzUrRh5SjvqiHtBN6WyTz1FAfw7y8FBhXUwgywDiPsJTK32XS5Qv8fah49A3XX48ZmDm3YCsWNfLm3S35GXRe9V",
  "key16": "4YwhmFNxdWea34qeVjcWv13wq9xe8Q6xetnXoHL4skfEJzHkoKwXzgM88pmvroNT3xn2QUA9gK7crSbgC4WaUK5L",
  "key17": "2fVEqNryeHWngPtpStfbwcW179voqrGS4CeMfkZn2bFXTru8Bhpt2BqDYtt2wKZrEwHpnVa8hvS2EoKNdfMuBg7t",
  "key18": "2AViTTGcUiKbAENQgesPii9GfCzB77jKMHQtM7T9ZEsGaNwipGVSJ6jwbmCBwA1hjxJHsyHeUtW9mDQEdeRW5Gzh",
  "key19": "5rRLBowxtJywXK6GCJLyd9kqijG1QUnsbpTwY5SSnxCwZ7m6NXjKHqHex6jQWktLzr7nkeWCmGEWcEF4pcGmoodd",
  "key20": "5eNeWCrMp79ithXnZkUuUUW1UV3YWtGt3Pv6xNRN3QWUGxgxRiJoNXBq7Hbgy7dPtUh5KHeiFUkmSQWX97YkYJSD",
  "key21": "41t9xiyZdRWy9gD44cUCYdwiq2vAADER95v486koZi83LchPsEnEUmiBA72vyzKtzaTsFSNXMPCWhSFNMCcQfntM",
  "key22": "4PfbgVNH28WPSxtSjLqzDAGFRKyYE73g327g7BQ4KR7ssv3XGEEYrKdw4NMGq5EyRZeotraZcENnQSgKsAfRak3q",
  "key23": "65gTiRy5g8Ebg6pVCWGWYUH1cGx3bLKehXWTa2WHoEJSkh1CELhi2dv547VPkJs4Tj1eVni5dJKs4UkJpf6HCNK3",
  "key24": "22jVrmwzsDQqdNYWBocBsDpLKf2u91qWzYCfiaSNLPJZAY2FE2dEa59QSjECCCVsm1U6y46mvJER7wAiy3WjkAsD",
  "key25": "Gy2qBxiiArkXWSpV82L8m2xYUoZfUymMmnEQzys2XZj3L8vJmMc7wzYGaNWa2uyuMaG4B66vkqXjafgr3zYiGXQ",
  "key26": "3DM86YSTfgrAbbP4dpGxMsgHFM1DkC9ZDufdSLqUR3VsL4QoZgmd55aDvGR1oNdBjxrsX3XrsiY5Z3SLEjxAXqxz",
  "key27": "3GcWXVTTJ7n6c1p3BHBoqSNeDx1dUGKxv54WdZq9fBjdDSJ8wbstWLT8cAV5PfNWMaR6puqGZDNDr47YyC9Lt9kX",
  "key28": "5rha6LwsWMkxzbS2s58eyXBARhvetdaTsikvGAL557UeBT1wAgRuGwNw5mUhM8MGsPnAQvZmEXQ1nfbNaJymUtnS",
  "key29": "2wNq8xUDy6XF1apdE6ojGvP53YmQuTQ1QLQXidSt2yaeoB4ChwBQnjpPadkZAQtxgykb5NNuZyK29dDmoc9obSvx",
  "key30": "23Jo599qCLZPQy6oZuN4Ub4PsoJxYqo19XrQjbhXkyKD47c4oL5cHe6MN5sucwozaxno3fZD2VQ2MstiHegNzG37",
  "key31": "5ZjaL7aSFMJSv975RS5gw4QKaVKSshWeKVxLaKt7QaxXoRM3JHzBezjZRaHboyQYAfckMPzTdNzq7MnC1opHG4ey",
  "key32": "1QwrjumUF6YXpKUoGoTjG9Vo3fxG4upmCXpDrwNj9H9bgLcqhVkeGoqpCYdQ3sBJ5qrCvoH22epmDa3BRSxESJF"
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
