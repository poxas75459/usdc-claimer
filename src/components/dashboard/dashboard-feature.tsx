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
    "4d7TVTy4CnLLx24v4B2Ldgw9fD26wf8bbbbe4WD2QC4CiYnin5aSt8fDzVdde9KHMDXE6dTiSVVFzceXxmZmDeD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kVwGjUv5mnanmx1H2JhJhMvQ6Xn1T7ToAJewWx3PL4nqb7wNa7uRS7ABBMjCGcpSRzxvfW5Uqgi3iRU1WUL12G",
  "key1": "gXmschfNCs3BqM2DJkm8ZTMFoT9FRUpkcsGXG1FUh9nocx615G8J9ehzuYfh1o3K6GByXzYzD3hxTx5Jz2w5gNx",
  "key2": "9F4M5G1kpoUfXZ7TJRJ8DZGMhoy9joTerKpay87PS82iboHMVmMK9JhnobcXz7f8AsrHRFV1uRb2t2fi36J952i",
  "key3": "4WaDoL1u2a3rhqiCEE3ZdmXPbygvosqPr6cfU6HJ6vzXNZhaAKkHsA4UaN235bedNjCyxHc2NmUMrkcY3Wgqoagm",
  "key4": "41AuRDxpGF1HBqX9UZ8Y5kXDgXMxAqBitSjzBvz1oHnHrEKLuV85UcyYZDqPJZvGAW6bkADWf6vKu5tHRqYVjmaW",
  "key5": "2zYVMzUEWWwpUznEuQKr2t25BBiNKaCn4571NrMU96KVzMRqWZrfXqW5mMsR548HR8G9PksTUTD3kCDpYh4bVMao",
  "key6": "4MbFtNGncv4wEDS4ThS4VfMGiyGSHSW9tUEEDRwidYFiBCjQrbe8w7BsbMC8LLpu2NR2X3KWnehqiZbKBhupCCne",
  "key7": "QPba2WXamSSLjvaDvvLhoREUjcJyVTinpmeWGPP8LF8KprcqkNExHhsZoEfLuq5h59xcQFCadGxX7Yd73A8ZGKF",
  "key8": "QqcmcYeToirbJ13s9Gq7T6kMqidrbf274wVWK4R6B1g7xMQ2EJt74njJ7R483jCwJWdyv65Nv4VGgQ4QEsbUJKP",
  "key9": "5fAKffjhzcTCWr3YPqyFXxg2Rnuc18VMh7jpxypQ8W7AMGJbLdJKqKDc5RCPVNYWioYFKyAcXpDp1PiHTBvubNBH",
  "key10": "2TzSV7jSknQaMiv6tkMbsPm6LmRqxzjij7pqxNViLjuvWMsGG62qgFJtqyCJQY7nvhs4p4JEhmSYBYGVnS7D79vf",
  "key11": "2KW6UV6QwLvEbKLmWPDnYp9wfpMwzb5VNVzBYDAAbeczNEGHhrMDMFj2Asx6yEqt23vBeaXSkG5grLxArqPGunAC",
  "key12": "AMPHVwsDH1Wb6AgLiSCXBq2KU8bTqMeuBTHCBbYwiRrump8JHv9yqSS3BHQi963mycdgd29DDgbWtyfLBX9SjaJ",
  "key13": "VZ1WpHSFADQnSj3PMqgd71y7gQsHYtXwMGzam6FQTgMakDTvSqS8SyE6jY2dUj787gui8Dk4KvwXsws23hvJBuY",
  "key14": "4J54gPeCjXRzXS8LLFoLucaBZX96LqTPcECpkdFsfCoywhLNMKU7VDhG6CVos13bVN6HxkNXxbfgLr9LZJdGzPYN",
  "key15": "3iYPTe7Nw7mLxN4QA6mKDwepHyqwMQ1esSWsBrBSVnGyzWfPCDBVrVwRciPsR4274PFA3Yct3VwAjYNS25ijrxLq",
  "key16": "vy3ZqJh5ao1dWawG1eWKwtPDg5H5uUCd1qriH161Fz4rRvfkLdQAZhWXfZTiXmXZKAaXBQLQ49ciKDhhGnyHZ4S",
  "key17": "4vfxVdUAoDi1kTEoZvi9gn79L3J9Y5LMq2xBUphV46AuwZXw4Vs3KHz6GCJf1GMzmJerh5XhhE4jG8k68mp5WJGQ",
  "key18": "4RGu1ujMV2SXJCMFdMmDd7g7v92x1mF662jQ48hTuRSQMsWm61atBLQMUG9jjiCqdhMyQBEU53q8R65jMtC6gyCj",
  "key19": "5f1tUAjbvHNAciMnyRuEhycou9w4AdaYCXg8tt7aD5mByCD6CfmMTSTxcU3mE1i9QvDZKHQtRbnmyD9tdwYkKr9L",
  "key20": "3eTigekc1URyw2vnH3RjHQSABZqvgynssks7qwF2xSUyZkLZsFz4985bXqmdK5sc2HXWE6LiJhi12FzkA7YRDwLC",
  "key21": "5kXbdQZeXuZRYeCx6C7kHDMHDaJkPbrPT5qdA74cT3Y2nHkiXPopESPCpED1EYry2fMyk41zhfoQKUpHArg1Mg7W",
  "key22": "MWa8ATzatYWZbz31pkR7YY9k6tYTtuRBPPZb8tunmtHSnjpXtLVQJfkvNk6s9v8tWF9UckuHZdj7DCFkuaXyDNi",
  "key23": "bFK7BQi9pYo3fXwQwVgE9nazuscu6ygRNtcurqy4X9n71zhuWRGJBxjBcNZw8HFVGaURj4TSBHS7o4oDDbtHFKh",
  "key24": "2Xq7xbB4rWtmTFHFEHrgReEyk8z6fwcu9E8RHp1HwcfV8fu4ZyfDQdBeNCfhYggufpyNoTj2xbAFdWWvvrYK8w9",
  "key25": "66uJYpwrnpwrqmhkbxKk2JLAGQph1Uej2C7Agni2dcGZs15aD9MrUtA9CoyHNFJ21STExYrAERcywfo9gi2oNio3",
  "key26": "43eEgX9bNqQTGunr32wMYuYtcr8QzacknbeoCDx8cCxVefHBdYfATwj34fLqb8f8gNcgyAMXvkHe9HmLrMxQZoW",
  "key27": "23SRcafCd3PSUk1rPpEkBCVfbvgJ2jYBnHSriGnpUzayXneJ4FPXQTRSS8i3s6oPuGVQQrwthG62wkSmsUqu8GkN",
  "key28": "38SerEAhpNgje71R6Y92sQ37WhHZZEyip9qJPBSWgvzXSQEYieNM4E98zjWYAgUXP43e9HySJSTCE6EM3kZ6bFR",
  "key29": "uo1prXAiJyHCkNK2sxgidWZ5GV32EvQuDnnrpczQdnHZKWc1p4VFNsFrewQYmSg2PhmQgUbMnknaKNLNu7h8heV",
  "key30": "3MvwH1rDHkuHZtoef1QMDS9psgCEcqM7b9qKng7kqHp72ckx8RLE6eYNmBY4qULU3LVz18CAFgDp8dyFuJ99mbQT",
  "key31": "3wR2JkMkxiLwGCtbKsJTHN5pQSmPhQctXeWSTHQL5J9kzHSQaUTjeqoPAcrW7gcxVXA6xR2ndW21nKJg2jdwdijp",
  "key32": "4J4aXmjWSETeAX7TdzFN1KyfxMuQUSYGn9SGX13R6it29ujb6NprxqB7tsffRXUs2dgqVJKCMnmZ9GnNXjdjoMkT",
  "key33": "msxFgXEuvGhoh4E6eUuire1t1REECVC29DXBuTLnAdZ8hCFoiwvKV9ovuc9Pmh3mKGpz7CRdFhSyETgu3HNNdQy"
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
