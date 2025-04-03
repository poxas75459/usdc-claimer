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
    "5ECoZweVCamZ7Kp69mcCyWCAh93iiLwsi7bMqppQmyfVZkXgiXdB79wKcVQ31pF1mEBrK5Xf3jVX4X53eWNMS5jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tiEJxRbQ3wmycKb8i4ZtByMEGxB9rv8VHJBXSzgoEmG3BF8UdnuZ6giaChyFyPueF25Kqe4JBpFeNpJM5LARYFu",
  "key1": "4121hU2dD2W2GpJUKqccPYpHTwoKbE29NhjnuL6TiKoN4TxiWBKupt6brVBrjNvja8P5zJATP6NyMAUor9n24g5i",
  "key2": "2XMmYKXurUaZ1oZfBZAQvxrA3uAAfJN58hoNQcn7aBcfoirzf14bPbjZze8Q37GBWLt2SvYTZoUgzZtvbce1GLCr",
  "key3": "2BtMHZG53G3yWpyoJRX5p4wwgcoCESFxXcsjn7FZXo6GdYHA6bC83uRY4BptdYCF6EZ2iiPGL28L3RV7wt9fU6Rb",
  "key4": "REc6mV9uRETWGLbLb3MnMTn2F1jHbT56VmjtXb7EYFBMudrp433KVVhtG2jUsErpGH67jDisLMXAeMHmuypftQQ",
  "key5": "3kLXiA9yqNkzp3a2TRVZGtLZWffRpbBfTfhJVEtx2x9Kp3kfyLXWi7BVJ5M9a5JoC1Rkm4vaCGBYEFYWxtG88qRh",
  "key6": "5MsQtWkJobDtSYxZL4eho3stZXEdo5gs3ZJZYt7NuJCZ4V9EGZY4Xm8n9pwS6NcRrhCWneMMWrNYKEYqH6tpGXCD",
  "key7": "5fvTpD3fSHCFWBjybrRkMHyqP56fW9B3D1vLP69NKmcFKcFVQhUrxW3Y9mKquJdwCPYsx7kHRdGMfjk9mxhKcVz9",
  "key8": "5jYi9hT2bbhBLdt9Lvm3GANyvQPc8ESxjXRyYsuFb2XFj5W5Vg7sPaaRtQVr2wBhSmab3JukRFStN8QZmwWfzfd3",
  "key9": "4KggHzJYSnvsJfzmr3Z3qG3tvScCngenuePhV1WP4HhFmnEZij4vaGqZm3yWCRicmRdeNNYcjJBYpjEDWKjHpF9p",
  "key10": "4xTV9A1W1mXNeY8YiBhT32d1vMJmg3gti584wTHum2LMfPmudN7tt3moAJudbtuCZxBU6NHpyf6jj85qLmMQcGyz",
  "key11": "S4QEDq4Hw4LH74c49xJBWgXwqmoQLcKuNmfXRVL8poPTgnNKLoxmnDLjEryjRcv8jUBifu9mQCJhdkSank2WnNb",
  "key12": "3rLnvLU9FXSUXKWV3VyEjYsMmmZfCDMsMsodWfUxrvr2V1cQk635KPymjbr4q7Bj91BwaCN1izGxwg5JeMtpWtkh",
  "key13": "2nwbPTJZLEFgjSMgj56FNSWMhUgcyM6aCpxGvn9N4J3BA5EGfjp2LLTaFp2zXfpGQCdQDMV2S6f734VenW8KzVGV",
  "key14": "2uinpfJQ91EZ3oQr9gZCKbGSn3D539EqiiVPSDMZfDP6X3xc5XQeiD4JBDrmKosWzQoZXZrJBfUdHJ1LCoHi9e6p",
  "key15": "5igf5Pm5utsdD4wPiSV5ciCRmob1bKJRam73b89sxo43yYcH8kiAt1nj1hmN3tShhC2DE1hpudh8tJcrs3Q25NCT",
  "key16": "3rVHAFSUjihTEx7zHy5uQtz3DjATFTmL1Da6ypgGmarXc5r5VyaHphfbeSTWdu34oV4vmdLi2g8ErKyczRoRsjqC",
  "key17": "3fLXFSUP8Hwp2LCNTpvSB3vbSG2bWMpg7j4N4iJifC4GXi31yswxco5gPFW7j11mFqcCRMtzu3i2zUzxaGLhDmPV",
  "key18": "682JFoGwpD4KYcKfYicfBwRQmuTvwo1az8XPV8Xrbx7WQ5c33QhRsjQFmCi92zvU7PBxcEh52MowGVu5xGFv3qf",
  "key19": "67BA5dgC9ogS4PyiSS1DDz1PviaqfyYQPVbaEADeXbXLaaxSbsFJZ57ikvbA3Rxvv3NNkwA2y3cmt2uX5ommY8SD",
  "key20": "2D2ZPK6D3AHd3PGauGrgk15zbZvYr7hpdQTrFHNrEpirT1fjCbhRwuQpBk4HPfbUV3cUrXeUKEXFG2TTtnnmVxbC",
  "key21": "5WMX8BgLSu3S7oc2ueBWMp4JZBGPK992YqT4V1eBBDnwHuCyhov33Rrx3Pvf6M3m9uzVk2aXvAjMABLhgMsXuN3m",
  "key22": "3SzvEmyrcxm5mw54ta4biBvNUioVv9dmDz8QDpSmdJ8gaPUA1kEoxSy9XBKyXGbsysxHKRTJkqaX4GCmhxwtvdw2",
  "key23": "3fRwyKoZCLTXMXMiK2Mc3PgpakSv4uSW2os79becj3ce8oapP3T6wPDSit7QctP7yjaQYpQ7kzgUatGbD3XrQ6dJ",
  "key24": "5yoTBumPPDoVs445QdkrWmNJBNq3BPdDrxVpvGzpapn8HKYP4EuFJ682mvoBtTdySsawXfg7QzkSzFqPTTbLjyB",
  "key25": "3AeZVLNjmwmiJjgYDxPFzFbe5Kwtgo6sHxXMQMqKaeG5TiD6KPEKD32gj3yd9HYswTepruAN8qMiRw3rDzrVod18",
  "key26": "5shiyDbCAMuYxZfGc1nvqWQ3xZQZDPxUG3i38qda8FtY8AXFYDNfh3LZMhYxtPdjhu2xXfcDyfNB114tC1cpxxnc",
  "key27": "5UWQ5y1WQDCidwtc7d6ns5JfCQQUn13htmZxGc5aoFscCY7SRB6atuMByf69yKUxyP6AQaLuuk1QoJvQZPWFUahj",
  "key28": "wFavUKfFLh4EuJgnSbRyXZNyXDZ3b2zntYosmtYc7fAqo7Wgxr7Y7rRdinkPN5gkUQ262KLZMzt3AXQYaKdf8Ss",
  "key29": "3k7P4TrSjNuBfSsEnjBegsGSeuEvUyEmXFH5DMqXG6oWj7qK9MD46JMgtraiVdTbevUiYh3yKRVrQ3p7r6NJPd2x",
  "key30": "G7QtbJdTq5EcLf2tAzMs5S6rcprp8F29cv6VpaXvhV9QzLhfetpuQxsKX5yG8ogeVAwj8i4t1eM553t6LzQ3D1J",
  "key31": "PEHBBmDoYfdhZqNekkg5EfBVHsA4YYdBiXk6E6AP4p3tNUT2fqTUMSceZkUf3Nm2YoHhjuBfkwW4m5KYQVE6onF",
  "key32": "3UFZz94yJ6Sk3JM8LzK7yK7QbCbNeR3da7LsDBXYZqdL9odBeqN6VHy9F4qfpMGeAKwE8sKBiaZAfZsg6HQWLSBP"
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
