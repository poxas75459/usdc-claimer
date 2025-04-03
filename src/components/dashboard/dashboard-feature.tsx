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
    "4Phc1Bc9JuRk8XnxoXSDGjftHcx3h8bChQabQsejbPoivqJDP9r2KwCDxvmc69PUAfj9Y9EhPPZLj9WtVCip9Sij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDrE6LVC218rT7VwFQLoRkWa71kXkTPcfxw3mNz7ia8odGUmaMxvFFkkDSYAmsnxsLrcujonfSUxMtHVSfKkAA9",
  "key1": "2FfRZ8hs74GoDx14PK2MDYqBajbawyLa9r3prFP7ByFH6MfDWjo4wcgJ1UfvRLHQinC1S9wXybv2SG2odYTJ9ShQ",
  "key2": "24GXjtaTpC7XDVXJSLqaNjBHbCBFMeaAHpE7Z5dUTMiLPkqWN43SqoBPwQoZ464eeD2547CUbCV1z3JbH7upLMni",
  "key3": "wS2qW6zZbh4QTAUD9SdKasePytwbHrPTG1RHnq26ZGcUy5PQspZH2mrtFcwj6QfesTyWj7hZg6xHvsWoPvsKjP9",
  "key4": "3S8XLZwFdzD7F6JuyTtEd9WMeq4WTt7BdUkTMwtcFeVhVoRJpViTXfoq9iwEVe7ueKxRvj5ZxsZQ3WjGQFwfxsob",
  "key5": "34s9HP4oV3uk1iUbipqFFjP3LYVohw6Jr6z6fWgrMqHnbeWquQg7ZYUBMHspqpsGQWiAiZkTyrtNYx9EJmk7fkPX",
  "key6": "3msYhhWBr1nmxoPbg3Zq1p4VwmWVVCJdnZxG9RG9DzZNUqZvUAvGETUSchJ8HzyBW5ZotJxb4BmqtUuxnVVQd93y",
  "key7": "42PVngGHb77G5oXbd5yDwhoH5LD1Ng19vd1BsewUiMm68JaMfR9a9KRYPvYGjWo6ZNGD7PxSAYwJQw3guPc526K5",
  "key8": "2Fm3GG9YZse8PRe8D9Cb2kfJFMtCAh9FgHyNTfbDk3Ra1LpmLzKbaHQNMuHSKNo8ExF6nVVWxfezV1ye4WCWLc2b",
  "key9": "4QgH9kcWEbfXgDoZGa4YhaccEE1Mg7ZhbxRkHawk47B3GpUsPzCtn8oy4Zxk3oSvSzgeaUTYSkNMPL6bNUh4Wi7e",
  "key10": "2Cvid2hyNUm4x4hbEyHpui1refSjAvWAearxGybUkNUceMLPaLT9gDjmVvs9c9ff1yp6vwxd8AP7ZCsYjdzk7uWy",
  "key11": "4CwYfZefxqtHwVTcEfn7gwG3FnnFAWBvwAwURvXZSu24jj4Fu1K9HQNjCAJsjEaRb2z2443HQBi9fqvZTTuPUkWe",
  "key12": "4QfmB1XeFWkjQjFHroafZZwxLKrmQKQPDXAmAYd4k8zEc1s9rGSFffxqQDmjsX8FEcCLG9jC63X1fQE6PiMdtkP6",
  "key13": "Ha9qQBWf79mkDnYMsPpZS93BYueVwWAm5upkK9MaLDBoR2UYdJRbH1WnfRaSPA7YNtTAcMknAixvJTSujARtbpU",
  "key14": "R344UiwbgLs7EkkV9VR9TzoyJEM22F4wVWAQhRm2qPscVDTXNnFbrnssP4WcNrSmV2cwP4qi87CZYbLjDhuASFb",
  "key15": "61Dwga2NktP8oX1n1TrGBHpdzybH6Qp1AD9rTZKX581mPgRT1qJoQdJaqzurkQivKCvYPsfDq3bCc93QvDZimJsd",
  "key16": "4XwRNStrrzgJEC8j97Wq9v6Rm9D6eD8hcde9DzSLMZ91NkSywuyk9aXogHbSRMfyziehu8Q9V7MSo7PdzQv1iqnH",
  "key17": "2b18nq7aFTzexPN2GtebzcWeZ6sSSPZDuo2C4Bsn4nsLm7ckvLyybux29JRq3Ma9CMm7uC8rNP5tXe7JojoaXScg",
  "key18": "5FhRn9iPK8BEHaQH34j1veyoCd1ZhxRdK6G3RQoVeakB5oQXPwUrYnXcMkxEMnbXoy4isakgMXcekRy9tKJGEmzg",
  "key19": "3nzZ3NBYmEDBRH4RGrB4yR1hgVuc7zpKFo38gvQgygfTU4bHpXCSaAzrEpfKboUa2HxBMEPNYQQkFuLS4W3W4gTn",
  "key20": "3xFoHsZKnrd2aQnq5BcedMHES88Zn8ujc7RokTQh3rpPjwcs14g4SsMy6pXM7Fb4sfVbRJmuvoA8rdpQeHtVqd4r",
  "key21": "DQ9P7Yrrk22NQUMPf29VWEC6yf4C5gqX8XHupwTmbaP4QBDZeG9XU3sGWfdYt7A2srJXAsizfPQo6KdTYk9YUpg",
  "key22": "tAWs6aeuyvi8GSbLaz3xKPtBWScsdukGdWa191nJvupFrRFpRCgaECyPYuPr8kYdudWdnfM5C5X1p26vG1BS7Pt",
  "key23": "3SqppVCBao8gHgpuUh2uhbo9pyLDfEd1K4YKGPKMptfJkn5RwvgC39izdFMJiFaq7i4Sn6nSiMVeGiLSTQkhM8JK",
  "key24": "3sf7SAncjBNPgk3QA2JoD5V6ryRm9nkJFB77GQ2RFa2KEbEH4M7h9TbRy8RFrvyioDJaMCa5BUSPzbK8QP5J8cPm",
  "key25": "2DsUSHaK1QvJLe6tRAA3SNKK1fLPDywpBCh7UfdEKvFsEdSwMtw3vk97GTgGY7T9gNJCsekHgC2jGLXAvxx68rhL",
  "key26": "4EzxepvvVn92C8SNZkt483Eth1WGsHkN2dnAJ6c4abn7BXH3nGaXR9o3FEerMzHLGgyiTyJ17BAHddZvtbUmxhRn",
  "key27": "3W4yJJGxMH7RvAnxAwEVKPJZ474RHbG3R1eYieRF4VXx3dTUrNw4ajdqWPniodWG1tHwCPJM38aqzdXXWaX76hGX",
  "key28": "4QcjoVJLnhg28M9pqJKsq7kHBS2RmYkpLH9fgDovNwa8LEkxXkAk5WyjWqroixDWbm4BebFb5V56yrtfNmWKiTBp",
  "key29": "4ZcDJ6FeX7yGNveUKJXoe9hwEfmPa7tDoJeC2mU3tDiE59NsPgXCgSxndt7ThQPBrM92sUHgvDanRNMzMJBy8icQ"
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
