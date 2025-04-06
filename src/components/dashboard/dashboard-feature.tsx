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
    "4zFD39D9tbz62z8AAGbwf25NZG7G2eVoz3JP8eDVtgRnbHBHz1hXyDckXNapxAopzQaGgAom6CZ326yLPLFfpRwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hrqPzbDvC2oEELX1FMVZAPKVkczhaTrFWJ3SYQkKXfS9kDwgAXvrMN5hbs1VoFdVrKqXJ2TzCjWy2XXvsEoxpRX",
  "key1": "4YRVU8fbmpxHtvtgfKJ2DQ4c5Ep2eX9QToBeAW3T8KarsBq2piSE4RNo2h8bYQLUuH1DML7jhEiUgEDg5h9TgTTc",
  "key2": "5r8dTjY9GzRTovwDF9qzcMAapVg5Zg2b8U3gkUDQancuKWdQzxRgavKhv62pgWBqiyUSd6p7cgikoPscbW45C93N",
  "key3": "4kUY9YYWrLWRkJ9eaGTFhTdeDxkmqknr8KDZcciKnF69AADqMBQ7jgykoN1jpywZhqz6xaFgVcBw1wtdLLwZbwbu",
  "key4": "5y1kuDWeJE5pFm9srp8sYDNTuymcmpeWatiuWstCHqaPo74wXWoTwrjkdo4pNoXua93Pf9HccH9hErUZdc3HkdX1",
  "key5": "2Fhs2CuuvE6kvZeNw7cyJWzK4aK6hmshh7jqnnanak7yxQL9PtMs8gnd29wJw14pncRWDuTS5svdnKPqHQ5iVy7w",
  "key6": "2d5fBvteD57QZx8NSRUMCQyJUKcJ8f3m7tCGWsw5obKnrHceuzdJBkoAqiiZMeWAE6RsGCnLVD7ys1P5bNniimvr",
  "key7": "5T7KNU1qc4NgTQCD4tNimDA4qhCGy5ErDPokKu2n5cXSgMUpYEAnkevn54KRsDAwoTCQLMAdwL7SjAakX7b7y6ec",
  "key8": "T2a2S2YvLmJqTNihwYwbZwm7Zdh9YHi4zekLdxc87QR18KemH58SuNZr42SrcSVjy4Zc7xPw5FXpCxS4kKg8oj1",
  "key9": "HN1j5Bt8mbLriULiCnZrNiHZzydCGitPRBtTUvtWLQRffsNCzDjd9BSKNVvThB6j453CWv6LgwbW7RaeE5cNL3V",
  "key10": "2DeK1BkRfU31utMnyK1mBoLb1sQhMZEy8kvjLcD56uyc5uRP9NgA5bT2wpCSByUVESdyp3kEaLRe4meoCM59faNu",
  "key11": "42eZKvoa5EJivUeacL1i3BBMbhKS2TXb6oHZhMM71YURaherQmuzZvhd5fMty2xt63hidZPKBSJzwAh1wFM49cY",
  "key12": "JrWrKJEvBnEQprs52aX6U1gfvjUy43nA5AJpNsww2RVa322JyCWKtcso6VmnU7dUVRmLQxskRKTzBaLXG4TGjKf",
  "key13": "3ikZ9k9tyPZJZfCZBt4aN2KmsYJaAPGrEjB6fwnoyvwSYH6Ys2FS3GsTY2XxtFMB77qrGfvKSc1Ga41U2Jkadv8Y",
  "key14": "4jSQTz5gJy7u9Vg8ALLR2dyUHprvv2jP4murnFQC3ikxRvquTtnhkGP4byGfpgXJ2rvfFTeJ7gfvmbnLVDSZUcwC",
  "key15": "3fQLDTFVxeVmguNHUAbb9mDJCjmrA3AzQT2vhGoyCQQQMHAfYkex14TgUdZibkuF5eaqd5Z9zgGaGCYRNhXx52GZ",
  "key16": "4gXgHW99Jv6o1v7oaY7kPb2h9Xuc324J21Z1dDvXHqmoyyEPEdEnNHC4z7TeLzj5GuJbQT6FuExHRhMRZam4SDEX",
  "key17": "8RrL7EcKXxjmpe7bpNjqqWsQumBFK9EkrpxS3SJ4tn1HZRXFbyASHUd1Lsv2S7BQyf7ymizMALQYWwCdwez4DnT",
  "key18": "4K8TWrrSrqh1k65rsUi64he6H2Yb17JkrBsbnPhRgKwGD4M13t6hcQwW6KJxi4wR6fgEviSKRFQWSpPtFunRDYBf",
  "key19": "4xiaY92mXAmxHud6xeoM26Q4Rh7F6BssjVfTuRBHQhNX2bsABze1GpkEmgFPLkWnRPy14vxo3o6KgMAnKbBtmBK5",
  "key20": "ki5oUPzDJsA3zem1jBgzADerWnUbFLnmmsX98WBmm9EcVCqadZB6buku1eR7zfYiFr9yuzMCCbbsAFzPJpv8atT",
  "key21": "75m5EvhB1VUrAMzoP2uaqkBVSBaGuBuc3eSK2eb3RCfhSqtzhAqMZmUi5wF3u3Mv6ot9SMVZMKk8sLvpqAMAZ23",
  "key22": "346XiWSjDT18B2wdUP8Ge9sPWAbmsB9d8vWHDu2KeeGYKqTk4YFRxjDGf4yp4fQTQa3d81ivyoK1Wz7kYG1nQkxD",
  "key23": "3tLBKnqLetiboYwQkxgPhie9DvbjjTVCVoCNX1MD48Yw9TzhJb4vsMRtR2p5vsNSd3u39xK8mdpfxxa6H8me1sEn",
  "key24": "2FYuiTTvf9i9hmuj5HsEKTgDsZShC2UkNziTnmwrxmfubWNKaHzjtbmMiDinHc4WS8vn8gjP17hMkQnYUXLLWZyP",
  "key25": "394FdTD8u3oAXu1LveggxqgUpKrM79C6Ruvn9pA7osgMd6iP6uyhUhfJJ588Fa3Ceqwyt2NsxwZXuc5J8ZzuXDm3",
  "key26": "5tke3GEq3tnureGugRfHAdT1GWRqAqiTaSWo3BGpYCcxTr95JWm6MJ4ppkFUta2cppyyVQ8g2J1aLy6LYqHVBNix",
  "key27": "5RN9HKJrZS4eGtdaqu86UMzUXnZP39oiE9My7rMbekxsW4pVKxvsGdq2Djfa7oXPqZ3C4QBb5UTqroRPGFGiSpLz",
  "key28": "4qin9JkJwhY9MCMZ3u9g3dhJjPZU6Whx2iqqq78C97tEWusxq5ScfE324iXzMxWnwW8FYLgNtUju97CMfKYXtyvU",
  "key29": "kgt24BsrBc3kwXhS77h7jjGYiTFXAQzGV5aitqcNcjE3BtbKUEu87UFApUC72EfPtNSGEDzXfYQ2v56iUZJjrVw",
  "key30": "2SAatscbbbJYmeiruLfPDU61n4eYGkVnumviK5ikiDA3GDzhzffRJUeLjFFEH49HGMob33JMVqP8PUHaQCq9DZ7v",
  "key31": "3mcDzQP1Suf17NFbnzTTc9JFdqQ7qEZo5DvFahiG2D5FqziJ6z6nuaTcC2xxPy3Y5mEKirqtum82meZoSfjv23zr",
  "key32": "49DaVs8pbQjj61aAkjoXVfB8hosp3mMXnZDnfc2vFgbD8ocGAGzur15NTpK2hrQipK1LPcZ9y7ATWz7QscWFkr6p",
  "key33": "4f3js2jTBTNJ6QymTzXhtSY3KQRExrwMpYzCa6Y9TCH6vRLfZMKfrU7Vq5C8ncqwz1UBv41457SSfqgU2CSj9ZL9"
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
