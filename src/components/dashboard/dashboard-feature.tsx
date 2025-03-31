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
    "4LTjWKdVrLKdisyVQr8C4rC8fN1c4G4zHWY73x33F2Yzp8DrFwoynG9CmouPqUGbYBGCUBaQ3vQ8k3FBzTYp7Kri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGSsNNyW5kwRte22rsbfrWzxpZvVxq5pNqmma5GPxt8g3kyNs3kXc5FcnpcjKsucAryFq6wSa4CbLeFpR8f1FoA",
  "key1": "2PJyWYJ27Y2wJXezuLrmavPKMK8HYpEg4AGsv6BwjybQBH2Nc8H3TRGZ6BdC4mFqcX2o7Qpa7qijs18bPzhCw94v",
  "key2": "4k59w9HhPT4P2dmjqLDtixZsfJibsQSdL4JER9hGB9Fbq2BKrtnbQPE7CciPHfC9Pcd6SFR6YfAoW2SbxHqML4JD",
  "key3": "3B42fN3rJ8uhYzYBw2rSkVYd6dpi8ZNQd2LvGCPfUKsENChaRYWT3NXHCjMHkMsXhiU6qpLbncp9sCWVfg7Nzqk7",
  "key4": "yFbWE9vSYrXu3D5ZLv5ve3g1ev3k2r6VexxwAVJ5nqf8gG3v27bVqLYLminXkaERSLyZ9RZeNohqnqYhbfmWc8e",
  "key5": "2vapeA3ejZLeqXdSvF6iNWhVMcQ4aAFrZjC8w47hjKZiSKd953sXbFa9w7pUgJL1m3yait4QYn6RzWhQ21jVNNiK",
  "key6": "5AMwkvkBsmv8uZXCuH7HudiKh2bJJN8aGjFgbN7SkwCXxLHTVqM4X3mkdRJqvf7iXVVDeCqKBiSVtPNArA1sbcxY",
  "key7": "5Cwnr1gCCMaM1bqA3PkKRdKAxuKgkfPMdLij8x4FffR2g3NAD31DC57cziZASVGuMNRzMshUkPXgpS3LapooT7Gw",
  "key8": "65hZn2ZGiqwg5TT5Zf3UmcQarTFG9CH3v8b34hivxvVVuWxAUruxDPjmvqLW4akvd9UVh33Mb4wZT24BgGrUaj2C",
  "key9": "3WCh1DUcA6fbkGQqDtJXzQq1QVeLjgee1LcVADaJNZ5ZzuypTDLhmNBVS3sSGBiJPaTcRKvq5m39VhNvPWexg8UQ",
  "key10": "2sXJxPkdgpajhnqkdWch2aBhGLMjRGBLQARLgMuEmP4yLUSNjL4fmvHokWruRKcNWDuvmn3TvRYCEkhVHuA1ZaDR",
  "key11": "5EQfY8AHT7ZFUdNMCgkg3QSrwJLbhTn1jp1DBgEuaaCQ4xh3S6QQvSEAFhCVqyXThdqcwss8AjJ9LS6SBJd4mDcC",
  "key12": "2rtsBCaQ9QdXv8xLT3B5Hd1GQhpBonXyPDRf5ykFkc1YsLQ5kMawGyh1SQj7U6NHCFvbAV9WfAwMM6bGwqxYy7Qf",
  "key13": "5we5jsvkQTPCmXghUWb43kGfwV9onryJ89u2akJL9cqf8So85NuvqSgUsMGcYSa2GXsxTtubcNoXTjRhBK1SJJnt",
  "key14": "2xZSNmzLBnGZJixJK7BuGb9NiMiFPLyzRSTG47MHkUwHiSFoaCyfpEZ1U1y2eusFWJAhrCgNBSx7QNVSK5Yskokq",
  "key15": "sJdXSARpg5vm6nRy4J1dwDFQybzu6rVz3B3yWbwUWH9SqMnXVZknqrSJvH7W6MNFHh1BzUg3g4AWDKVZeieSmmo",
  "key16": "2TrXzzYXVmAdzVqL2DcpkeJBryux18dhD4uC2JJVzxthncZ4gimpcyieFz1oPkD5ZyfkXXev2xzjq8z5rNV1A39j",
  "key17": "2NvQAagMR3AjqSDgLWhucFFw7PLAkDqvXiNQzzY2XaHf1AqjSmDxkC4TaPKJQzcDSMkqRTbSmyTpd2EZN49Py7D3",
  "key18": "5VAsWVDjSF2ec3LkzauXDxYsR3EnXNY82oHrgF6S9bFq3zNFYk1Cv8i3Rw3P7BbP2hUmA4HEvTwfnzJTTX3pE4UW",
  "key19": "RCpVHsYUm47dmM9ZPoBviahNqYqybtxrvKGgFfjCUGSRur9cUjrXnduKS1rvfviTZNB3H3j45JfrzKJFNXdyxT3",
  "key20": "HnpRyjkn7tNFcTyKDg6tZTTKqvZ56W577vtyAHDcrgD54FU72avNzGNQk9cuzqsf45SfSNRo3cAcWCamF86KQci",
  "key21": "5ndRKsVbrRmY3b9fbnAngUc8W7yRPn9iSu67ZBiAUjLVwPupfGop5NZu1M8jAJG3jF4rGqAf928T45wRTogaWY2C",
  "key22": "58E7jYr3TKvCccjoDqRMBwGaJAsL3jeMTYTJLFqBrRSbh7U94L5XnHLvo3Ryh5kQeXWVJwXHeZWuzQmCvBaAJ8hP",
  "key23": "2tE5piTcieENimUhDj5V2rgWkwAtLRykrjeM2Sh6ZH1hF24xm36HVymzd3jAAucM1u5bU6ZcR99ZZTEBvfBdwWmr",
  "key24": "4ZgvtN1ZARnop6AuaYj7rc4YNUmEgeWSFVxHLbv5EsmnGFaFXekXGDkw3peV3YkwBPxyHDk4jS77skpNg4ocRURy",
  "key25": "3981VAWY3f2EQarU6uhPc1iDjWcJTTmyPRcE8xo8YWBPxDRTetkfADAUGghW33VnAXXELZMtunTuRGoFYMXRwnQo",
  "key26": "5mZbVifb8sa9Wg9S12vmifLrd6dvyakr3ksveGwX5VdZcV3RKiXS2EuUqYg2nmezB6Jcz8Fg6RDTX9tbfMQGGj3h",
  "key27": "4GzEudjT8A7BU232jRMmENGkJrcVyBBgcLt7VYB75LupG11VsJfARiC2owzXjuVc1MkVLGMVW2wsdVYVsSa4zmJq",
  "key28": "5TkeRCSMBLutuiVFtjnb3zyLEKNLfw8jk4iQ9aTwYGmoAEKB2nj532P8Qycf9qmEk1UPT3AvdsAbY6bqC4DrA4Wc",
  "key29": "4kdH6HfwnA6GKj2nX5s6XMPVMsXHYyiesu9hmCQx8u7PpLcovxQqPnwhtmrRa7XEfwuimvA1MKEGVDccWWZjUUAw",
  "key30": "351qT6nHhjXQESPbUP64VYZjSiqcReCn5F4AbGHz8yoWFaNEKfpyxSbqUS5VBjMZDj8HNPsG5sMJeaV4g4gJahgV",
  "key31": "5bZTUTZgUGN7upDL6ckbv9JYGiwZDhkDwozNiejLqALL5umQMR96VU7KAyr6CKZiDpFTgGFnPdcLLNZmK1RKHR1M",
  "key32": "3vWSE6hTmxkR7AvQYdEMhmjuiqfZ9y38TKZVzuSQcy5bcxP5hg91nMcR19212dQFpi4Nuza9wcPnUECLtk7pF2jn",
  "key33": "2RBvy8b9AZUUTEVXXYJMP2tqsRfWRFgZG6miJNcxoN413D8DHxkcAqW4k9Fet67ng4K5kvmstuQWaAXcsWdHK7W2",
  "key34": "4mCbj4XjYGGW9NMNQ4kn1SBe7CgcakAvfvGbTfsNF3CuwSLLBJh95MDsi4nzW9KqRf3PckfcvPKXrVNduZQAoBox"
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
