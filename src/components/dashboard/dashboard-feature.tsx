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
    "gGPGf5w1zBZpogrQxus7wSwvrZD8xhorifb7Mt2BNQptjkMW9x7PS7BDD5Kj75iJ2S32tkAfquwarZjHRNPrcsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2PfNrwGGoXzR7PFUpgWSDBr511BzMhVAPerhC3mzioQNmEGzkArbfrVhV393VwmS7Hbrzww8Tepu461669PEKh",
  "key1": "4k895nS9ZW7KfQyB9386bVkdiPz3a75t4R2pSvuonKEzd5jF9jVzUKG6u9zQvNgnfCYoMboJZAYsYEuGzddiLS6X",
  "key2": "2PbkDxd8161L3KBY3iN9xjsMAvnhyLf2MvpV5JHmK5eWYW6xbsHiWFov2UNhP8ourLv5zEUEStDF4b83HhxEyAC7",
  "key3": "w4Aqt9Xo6QvTDb4cKs147dnwvDNuAPj6eFkBfhMA5S4Xh7w6hp1yaHopM9mqQ7mJbg7C7MizGTwQVRcrVorsF1i",
  "key4": "5JLHWmx7X8xu66jLSHRrLpjavuDAivz5yuFmAcrr5Jeqcn98rXxA7zJT1695KsrUHK16YQVDJHZ5TWSMFtfFAbP5",
  "key5": "393iyK2r3bJNaY9AGRgthRkx5BPckkzbKCBTdeNvTTL7Nphc5dnk6kjKczPsoVXC85T8osMfFQ14MciGRPzU6eLZ",
  "key6": "3zEEpLBNEs25MXhAQ5zUN2k2FQYWeMnGtYNQkVmP4Cx7pVaStMsFGVxBWBC8j4tLsqSHir83BQ77YFZU2fheS7Am",
  "key7": "5GzFr1LA9DpJsva7MHZJrNnsMHPJDCwYM5mf2HUduYoWufmV5g4Tx98FX1B1GWMmVfeB5YH2VmFfG6SsuGJWfvQM",
  "key8": "Q82YHippwwMbgchw9zBqQHt3wr39FzpFEQ3r7Fz7HG77Ez7aWNCQgrLgVxJaJ7UiW6546UAZkfXFhnMFVqBHwyM",
  "key9": "4WGV6LwKG6jywCr8m5wPNyCzFnrUbgbNNLw9AuxN8HECWTjLes1c5qBoxJSKRRGgjaphJxNS7Pi74Ek72YmSTue2",
  "key10": "2oHiBHieB3cf8P4szoVPP2a6UgoNMCUSSSAhz3YCrCJGBWi1uoLXBQdPWRdLxG1wrTwkmNmWqHmBciH7Rowjt8SU",
  "key11": "5cRtRrQbdSHhntgFwGfFRcTXRf83oFu1guQeqN2KGCSqDLXdcMEb9ovohaBTMqeZHK8AY4HEHux7cd1anqj9pw76",
  "key12": "dVPMw8pwSPXZrBXWaT1gzaERpWPYehkXPGWqJNm2unMCXgq7nyhTbcJZdi5Q5h6zgGcVP5Eq73winaWYhec2rvZ",
  "key13": "27pquD9Yn74tpcmqtuVJQmF8vA6Ev4N98RfrYt3k9gmgyHxGkZa8fXc3p8vwsPnXKgs2v84k81UcxAeQyUB33akn",
  "key14": "4T9b43cE3s4KCC5qq1vaHFN97rP4E8f7n3jxgJdXuXfqTxv6gUM2eX3GjrcvGdS61o9de7W8UxwMyPZcrmBtUht9",
  "key15": "4NmnExRdcTrMsN3TsJSRFHDrZ7SdVEFH9U7Yz2TejDmR1DBjf1kTdo67bARHh839Tpadew5epNSPwRXoQT5v9pt9",
  "key16": "5ZccmLiN3UQGwekGsdbKyci5YzS4YpSjEPHShGnYjxQj8dTbVtDDRs9AsgNSsxeVgpq9kAg4aFwBCHkvr5wCk5ur",
  "key17": "3WoEzd5EepuC2BJHc2QY8TU1UnNxtVdAjDptu3166Z9JXp6VeZG4S8p41ohWSg4WeiAxmKwGvjchcjjomhUMVu9z",
  "key18": "4aZcDc9H4rRUXkNvrNo7J4qkCpzSQPMhPVdPeLik1frs9HBDP82jWPTCBoe8KkoaFArR6covhcCw1pygMkmYvV78",
  "key19": "2tJMd1WCv7BX9mFs14AiWxU1cZZhDGgjqnbNxzwtgjSuCgGmVBuoTrKYD56AjpD7HfZBBLYyGJXQeoRFbW5HD8Hk",
  "key20": "62ExVkspJR5Uo54XZdQ6Cgy3X8DzidJe88DLw7eLiP4nbLxNHGnTPP3bmZxCQHZFdDiKVz7xytKV33P2bZpa1sUF",
  "key21": "4AdXt91EoS2UbgRHnEXEXp8uymoEGUhNjxbLHaUbxzyrnaxPPxYCywL68MgRK9aGuvqCJAXrLspkNWubSHi6u6hd",
  "key22": "4cBYZxXY7mU3bAvaRLQEZda8UWEtTymyFvBn91bS2CWkGKot4kcxtVLVPfUfxz8F8V2xWZrpNR3QFFN8hzZKmN7Y",
  "key23": "5zHN4Em91hb1PQiLvMvofrdYebd8KvocZQGfSyAh4Tged24B12rTxHGSgnU8wZ2JtrrvmLUakFF4EmWDcQYzxoTn",
  "key24": "5QuKDWEFq5BFLFmqirkgffTKDrMGXHjkAy5WBcQ9fhNUQDFxYMLecNuF5p3AdfAsAKRXvZ8D6Acm4amEsKhkMbjP",
  "key25": "4uxS17JSHTn6d3gdwX4e9ku6GjrvtnMxQvBFQzz6MwTnCjJdykjPqqMYi5nBxEi6iJZgaoM8EXuUmy16h1Aptw2B",
  "key26": "4Fb3afo4degUfdi22Md2z1XAgaUdftxxGLyQcJjrPHf6zNQPbxg4Qs1zwitRswbBYsz9xSxK971v1DPtUG2c2HBx",
  "key27": "5WpFJMYPAiuiW8vKc6xhHknTmutcxuWLVgThD9aUgKf4q2pfijHhCZmK8zFQrXBorAhtM1RZ8waxLbyZ2CcR6rji"
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
