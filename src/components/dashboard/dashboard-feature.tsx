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
    "2k7LbvtAQ4Pv9Y6j5mGGsZTwVS2USfCVGTk38B4cw3nNk8RkHBeqnF6ZKR3rvffRRjxe2rXN5SfrcuQiTKVaUBfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wbccA7WifrzqTzvjSYnJGZLS2CJZ5nDCDcTzhtmSF4VbQ34MtptiWn1cnLVbtWM2mnYwuSJ3QQ2F2E9Fue3oxUB",
  "key1": "5GKeD5kQRc45dQASnpcy7JiUzXSV8N7gRRX4EkCD1wTGSiEULxFK6ZYwoK45TjmvsVuVTPkx415HkTv7eVj54aYt",
  "key2": "5EnhqRBKtRD46gUgwj5Lfw75ShKKQ4VRAqRYwCPdDE6tXxmS7d9shxCiddR6aWY4fwqhXGTk6KmAY1KTAEKyZpzS",
  "key3": "4mpvNTTW6ZprQ1RjyQrrLxjid25Lr3o1mj8MNrbezcG6Qvux3Fxh1dGTD3jYU3AhGaJM9zFUAxS2DSsDnMVoTPJW",
  "key4": "2nH3U7DpeFgEBR3YcusRuEYkMEyqcyXdRJDaE1xdTmUFCJUUwCkagAWJ1KWnuq3aeUPNiekxpG4zG4h1LGVsTz1",
  "key5": "51t3mmWapr4Zd8aVbH5ripq3UumSAW4KfRSpcgkHBM2FA9YondaQ6cLzVrhDN6F1gUT1wxzJNV5qx12WJjodbSm4",
  "key6": "38qhGxQ9CBTxpLjPAdWqyhvC3szez6kNq3ZdqFc5cbtBnBoHkS2N5nXJTuGy3z4Qqyu8iC93DgYLPueEgaFWwyWz",
  "key7": "2V9fSnbCv3NmEvbWfMHZrUPcQUch9yodd9jT7jcGXyVD3KfuZ17K4G5KdwrYo5JLYhMgQPqUrBbSZ5jJQMFxshXW",
  "key8": "CtAYc5CSnHsB1kvMmRGP5MpYh9sh6brUyz87gmncae8uZb5isagiArVmUnsG4KLYEKhNwxVRNdueC5m6jQkFD4F",
  "key9": "3eESD9n4hQm1hdRUaxt4LYbXX6w1bEYjYFsXEvcaDq82Zk4KAwghbbAE2bJfbANPjs1uZjXb5QRDhSCFtVt2kgpc",
  "key10": "rUtQozX5uHVV9vARVPweaE7EBr9cfqznbSYZBNVNCwm9oZPyDCPJQX2xEZXRDGTCMe5922qRLfEa1qRq8cXLmgC",
  "key11": "66VktYNPdVVyJY48yhmJQ7Wnj4DzMHuiJomaBAVHn3kUqQ444H6XUfTKHDV77zjq2sp9PbdGsE1D3o27UfQqzb7Z",
  "key12": "2pPrBn2QnncT5FmbpPjvCBaa4qAikqQssquDUsQAd1sUbtoF9vqnwceitVWQYgnrnpHdthSEkNqoEpp4xiw92QD5",
  "key13": "4bLrqSX9CP3ErtnM2qmDtNmGB2Xve494q11he2szWKzYSq4CtS6Uq4YWxEYNwYzy2v3CvgPvZGvMgL1qGEqg5eQn",
  "key14": "4mGh8QhvnRuttjfeteG1krXcjNcnfdTz6Gi8xyqz5vpRfcKFjgq6XKJwb2NcSwxHRuEeC252LXfxG3U7ZbsYGwe",
  "key15": "8YeUVsLTuJSxS85tKATiFs9dAYtkAf3QQznoyp6JmEsghwdpVbhd9ojcqdtvf3TxZPy37dKnTxBfLQjLB1jgymh",
  "key16": "2m6rwft4DsuJua3LShBdNJB9Pa17qooAtF5FbPTfTQUUWPrVF5644SkRLrGRufhZYHa1c1yd3HeUqTUGXCfY3giQ",
  "key17": "3FQWzph32A2w6gS2P7zSzoagffSzmphBRkHeA9q1ozJ3UYzzWeKnafm5nvs8A1i531fpk2vXavUBSUJEHamhssHT",
  "key18": "53REjFq5iZxon6QnCCeKAF9bYMpPtsFFrKEBA9d4MpT121jXuMA8WSmA71hgw61Gbn9pHA7jc54jdYUc9A2EEMmX",
  "key19": "2FKxNCPKKoA2CoMkWpuEGyHNRFZpQSn7Esq8JBYoRL8NK4fpuuewfWcxYdu7pYPJhVxnZsgnHspWY6EphTiBZRvj",
  "key20": "DCVwCpPYK3RczsbrZd16kzJdJvsuS5gdj5NsetpiGRqmaC2Q8ELkhpZNszLDUoTHqHmSRuNgM3UtaCJcYzS1kgR",
  "key21": "CcWZ9RC1LuKyjzbXb53x3iZWujRkmhz9x6NnJDVSRxvdtgK191phinjZgX95zwTmx64owosD2s8YMZjLpX5sgyi",
  "key22": "5ektCPwiE8YvoxhrTeWcyR533trMz2q38ekbzXw1bPAmz4VLUgUeBLe14zdYH35hi45khXKmRBHVKx5VcBQpvq2w",
  "key23": "2QSc5ksdbmPZHjQmm3mPynUU1bPL22EJTYL82FdjenUx8pWZ8UwTCUYistQFaPWMYMwREk7KtcoeEBr98u5UyD7A",
  "key24": "3CR6PYHWLFXgCsVR35XijF1wzQWJwSjWWsJZbrwn151vswcX3cJLgCngusyJYNUHCtnePeSJCfPDPBQvc6C1uwbN",
  "key25": "3RSgg54vegpewevLYfZJcBAp1bSfVA4aB4qR39vLZReozybKKa4BnBNPajCCYxDK3EYUQ124RUbw9KSePpkBPGDL",
  "key26": "36YsHNaYWupYhW6L61Lp5EzZBAnsV63sZeDd2AHjiBxnp7qPZG8jz4QvapRmzvjzfA6iF2TpwJsQzSQQf2dA2NrB"
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
