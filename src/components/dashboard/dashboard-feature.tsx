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
    "36DxLzG23TsF9FHZ3CED7gnkymq237db7K8QYchSCWyxF5pJFqckM95twkrjuWcfqhPj6f8dEa1oDk9u2CLPwqPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24hKTbohx9hCW18can9rbmaJCSK8J8ABMitizDvpmM6ExKXyMcZzJrtTXi7aCqfHjWNhoSPtHBDWDkc7esn3uiRt",
  "key1": "4qRbG3X6v1tonryfwVLDuAqaTuiAU6dFcMsvMbZCGwvZjJujE9JGHCsVFixNBiat9arRY8pjJ6wRyK3Rxdee1EK7",
  "key2": "31izU1mFMnnDdaJN7aYrXNRXytQyf7CgMQJhVgEPqSwX8KHRGxN1SDR6342hMxTnwX2T5VnQMYyxw3DFt4btk3cZ",
  "key3": "3mgxMSuWaRZh2wAmqgucd9raXyQ1aD7temd97PbtFvr71CbPstJvHHiTsLexMBRCJyB6Cv4VKMFvtwtwW7RuCFKz",
  "key4": "2hCPRgbHkoP1XSaPbieF4BgwCATQPwqYoRivkQRqaDVoy7tkQuiNm9hT3TEgfCy8gi67qaMeJjJAhwvpdR1zsKzf",
  "key5": "5Yx2wPej77MqZYLBKtjzFWhw39Zb99PXUMNfU4Uahq7x3X7WnAzLyyEnRJjM1yigjq8oZ827CvNDAadhu14SfCo",
  "key6": "53H1Jet8bRJAy7zR1EFfvm9AYyLK8dq2v56JJoFcBXFCWXvv6Ycy7gpWCuNSU1XmpeDGx1rZqnMn5y7B25Wbvqa3",
  "key7": "3gFEZiYT2aximf4kxTa3CRaypjLGYi2rTWvoxZ7GZwUf96ubFKrpa6k1UXDuzy1WcSUjbiTxbxVx82vBPcudkArT",
  "key8": "4W8SA6TxbY7o5K2EZfKK255Uh9si2Jwdak9FCtCwfag6YRHGyDHvXUU5jJWdzYX2qb4gcPwPoBYjYh8VnRRoDpAc",
  "key9": "4HqkhPN6NHbPrh3xBJt5xvXjubtyFTHCK13eWPJqcWfEvStugm8KG6QLDXBa97uWWTyyi7dp6MGP4LZxP5druHEJ",
  "key10": "4gnz6KSRjbtg8tMbHhosv5YfAuebzutWxXGE16GQu3pNdnT1KMPyZ6sKsKDBKtXCAj5jXtMd3y9h3gdDYrEkCwZg",
  "key11": "5pmrSKLrZDpZca8va25VeaU25r5TqCyh7pbF1WrpBbja1711cgwrVDJCprm7iEKeTEofikn38mWyjBHhH2QutmRe",
  "key12": "52AQyRttaHHMmDddfKT8ma84CBE54jpDUvHKYZ5Rwv2K8AAQznkZMQ3JmU2H9cbAQvFx9eWjkhcbKfJ4Ma185eUe",
  "key13": "4hWuv3v3HNFuUm4AEavs8C6HLjWzWsPjKdE5dx2zRidY25Zm1Nc6QGDQFo6Kaewjnt9vC1b28gvJ5LK5dtPtC6yp",
  "key14": "4yLZaxtd4fBEfEzszdaHFujjf5mceGDjis7hrB5h7eXJiTZ1Ckb1CYcBX1grdXB2SohigW7UdjXD73yeaMyhb9Aq",
  "key15": "4epn86U7kSzmvG9LcPQYquhBDWCGnTCcLcA4Rj5jKQSieuqrfRDgcTduKjXgtt9cGZWjLHTJi3ez8vqiGvKNUhmC",
  "key16": "3dPrMHF8sTQDotUGEqBprCd3b1C1jea8nAGZYm8jzsWpGocTjcDo3t7Be959LTWMvmvSFQv7Pe8sAvAakBNojzGL",
  "key17": "28SJ7dRkHDmMvXAagBQMUQkVeQwoVg5tBGDKAZncFSCUTRg5x4ks7zqBtV3kupziQcgwENicDkGfE3r5vtzocubX",
  "key18": "BpJYYeF9WS3CKydfxp4PLfqGcdYfnt3PBf2zX4KC7L3CjG8CE5pesdcGZKWQNBjUpcku89QG59K19G8PL3y3Lun",
  "key19": "5AeJnGjkDTgSeE79zVfkCtW7aF9qxntsePpHMJbxQwcDYxbwkGUoD3x64AdabD7iHFiAiaEYxbtoRMa1q1jTVp2t",
  "key20": "4s6EtRfpo3BH2cpoW4QxVmhr9LGL5E86PiY3N8GvReBE5upqsZSLJqSgLMvEWjQxVzKtfpypirryTgw7mACzMPzw",
  "key21": "41rtoyspPFrqYybqKXmuWHhxkbPQF2Qo8wr471Jormp9923pY3ipmgV2dHU4TQKWd1uHvCCaYh9p66n8AhgHosny",
  "key22": "5xbEPYs6DJUjkbkRPuZHaB4WbYjGdBGdkJeQpSAvP2ptZsfz8vQZ8qSayDg6mezS44hsYFdVtv3SHRHzirz2mXvA",
  "key23": "5cTHW4poBuT2De8y895vNyVz4yzupX48tbs2oqcCVPr4B891DcLumtvvdsh7ArG2RrBskSrAqb1nhi8Hrzz7nU2L",
  "key24": "449N2Vm56fuLKZi79whxoN6CbbTEaAHTMzyVPEEaDQppQKsfbMGPV5tMTJhUrGpdiL55FiGV3vJmQa5Apsk1x9Yt",
  "key25": "WxuZcM4WSheZTHFGPg2n6ts57SL5Lhvm7RzjW24refvZbLs4CPabqBYmH3QkBwi9FFD5xxmjqkSdj6ytpZPEzad",
  "key26": "4BwFVqe1G1LxhmM8KACsWqq6UtNZLdjCgLb7JJ9p7a2i21eUeNE8HJBayHAcNxTyKNSXzQf8GXw8dFSe4nUw9BPS",
  "key27": "58j5taB6Vr7KiTjLbSVSbbumdPPNkkwi6Xxczwot17F5Ly6HU3Z6fCBa7n3y5MYA474wCwN5MM9e6zhtTxpnu9mm",
  "key28": "4q8Ju16i9u6PDgiwYbBaTZN955Cz2cYGaHpAgWP7AN6q44jxZhS4WDfNUh9wUZTBf2aRqZxDhnJC8QPqgysfPAjZ"
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
