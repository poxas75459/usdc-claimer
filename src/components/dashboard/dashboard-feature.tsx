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
    "2K5HQeVkCUv7Jy8wKE5bUSPfSNFe42rqcnHyteKTHDDAdHCGaobfsT27a1cfpmG8UwsGShbPam2qmtAsFLa1a2Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c214G3PNvEGvks1sR8u93AhDStcuUXeBZZo5z9Kb73VCe6SLLWPrXEuh6aW7aNc5hvpj6R5jYbSxz2pX2iwe3HG",
  "key1": "26HZGwASDsaZMMp4TUrKFZN57UTHgAEswmqaGiFEB2RKkMYpbVxFfqdpcBTXMYvN8PZmQfowEvy96ECt5q7g6r1F",
  "key2": "4PU41nzqf9Smnr769KoUGLZyHivAMgJk52GbFDe7hFM7AHzhCNnMbfuQDtGpRoRrhLFBpzFa7Hndq6gzk5bHecjH",
  "key3": "2axdUi8kg1DwgiPPACBW2zR4aimcjSWktX3Ed8BiStDk6qi2q9CeyEo64zTQtSN6bHmSZP8Rf9bJT4K4iPzL3vfd",
  "key4": "RmKBQ5Su4Zvk5BQSgVZEtEHpbhSexUZDfq2bhsJFmFpm1cLSHNqVTGzGYpwbdk6b15PQf1QRWCifXKbhpdHBwpU",
  "key5": "2T6fd5X7TnSxFHzrpK2fVuMD7PY6vhdLPJ5vYVa3nWcJV61HBdRvdxiorxaArQqZ3hSRcnoUUEGTE7439XEqTrm7",
  "key6": "3A4vLyfGqDqd9c7Nc2B2okio3DLr76eqCM8y6uJajrFGPozvPZwuenYyjjDLAiXfDgXjbU123Js9gYXKsLKNQDJ1",
  "key7": "2HGHRc3yqkFcD8j9ShjuLz3YSZRhr9kfmkeUfSpwUiyWFSmmF9VXL8PTnkv24rQkWg8vXSvKYbzGP9hmmvD4bsx9",
  "key8": "5yGeotbWZuvPcx3qtju9PgYfxMK6oveNQ59qy6B972vVWc2BuUfqzxugV8mw76iJRqaGU78KVhevH8SbUu5X8zhq",
  "key9": "3LiEzJPZ6yuJcCBeMmQB4gHCG2RUToWqkWGUM11tDnkh16j9RtqzEHNJqtrSgdDXv442JPwy7PwVEVrySoQSSUEb",
  "key10": "3CMv4wotXLtwx9JZs9bQZmuE6FAQWfdZz4NkTsbtRdQYUP16CMdzVMzZysrKQ351FTp1wGwLSnFpStwkzw43p9pp",
  "key11": "2iLkDqxMDacyfmkKCiP6ndbZfFgiBeerq5VEu6JP2FF7jL7wF1WsxTBE1YWGB8qDmW2z6GNu2qaQaz3d1ymNAgh",
  "key12": "Nk7jLSaEvXL8VHhASpKRCZQa6YZvi6BxuKn7eRrq3kGnanmtKXRnJJxo9XUFgR3xezEtutTZyrCt2EQmxaiXqbr",
  "key13": "av3dGZYb1HhoNtCmQ8jUZbiYXcDY1o9qjQiYSfBREfpQg2V8912FDA18GVPPjnxkbQuDAmGH6ZybFYcqRAW5FQc",
  "key14": "4FMfrqKYsFTqjDHG4ZCwouRNgx6yafqy4siQyFptm1Z1p7kGgPvbYA5Cxmg6DCM3UTF7YnFVMRxVJSiZfvy3Rabr",
  "key15": "3P88L8jXJs32cXQtkyZfogyPmwmKXcnFo4z6wssY3ExJMVMcTfLEMfnhpC7MGxbXv9TknVrZAfWbmKo54JKFvZtg",
  "key16": "48oxvLRePekqZVbYFwdjg49kJxSGm8hzmnzC9zWk1DBumWGNKcoaDB1ku9xbhvLMS8jsjBEpRnojiZ2w5jUTmcaM",
  "key17": "62juSB7sXEHqEAvifW4cjStxKYpiaqQq2uVMN9eVDtvQbLyw6Jesm5N4HwFJ9LUDq5uwHYoo9VgVDFDdSLmtPDkQ",
  "key18": "2XgUzxd7mQ3cm3UeWD1oK7miDWVRetSoqJmWbcyJxzqU7htBwQD9rqBx5TKmmNmdjTrLbDocsLhNnvxLbp3VaHew",
  "key19": "3Q5717Se6Git4kpnchMYJvRM3RgtnRfXA4CS3uBmfa163hh4VmkJCEhkBXj1fc7iBEZBvtVzQRsHtNfg5G4bomh9",
  "key20": "dVbcXEmshSp7yqBS8FPzvqfdZwAsmcUzMxosPnxz6U7DAbaKfAjEf2RRWXT2yv5HK3DgZHosxNHDbEYAY3kyfji",
  "key21": "2NJKRi6mW3D3xEvNbZZoMtnzDKesLMw66UVAsWzPNBSMEUaVnbwh1PnXKazPG21EFFmNyo6iD28UwsY99xGJN27b",
  "key22": "39L3ZbUa87oJAqNcpDXmbQiRsKA5QGdNkWbUVuaTdZivVKskY9SdrTMxJCPtpwdCGP7ZdAxnerTgF1TnTxRTCPig",
  "key23": "5ynW5H6nJH1AYfChDxKKRKBGyyuHzDgdK1wyaXBw5NHhJAgHzb2qATvi9eEkDSYTFWcrXJnRSKbEMoFVBx8TtdZu",
  "key24": "3btKQiW6X1cN58yHkDhXMy4JccNiegJNZGS45XW3uinE3ReCLeCX3VuG6maqR3WWQyvDvBQdWStMUGjxiBXoBuTC",
  "key25": "3BsWGgj1PwkqtNvDShhndgd5nXLYhQNdWGd9GTNoZNGEpmLtgkajWxySegJa5wAdnY7gq9PKyCGthvhGQseDizjz",
  "key26": "2RDySjBoaPQZFXnouz7KRtoPYqf6nPpzpqzUS6kvfQEVnR2zx6BbW9zw6HY1ZBSf6Pm7VryXArBhjDNiJBU1voPj"
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
