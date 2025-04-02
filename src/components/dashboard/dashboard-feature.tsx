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
    "3LdbGG4fK9hKYg3sHzKemLbtMKFvHu8dJBV2Pj7tgPzz7VFL2N1Zy2v4nFyu8GZbXsm38t2xMaGMCbvL2MfwpRPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rXErELERwFq6KZa5saUfht9tpUazrCQSiXR5uJWhpy5HUpGqN8UMvUd6etbA2DcA6j6ArdTapS6ZUz2YPqw9Cv",
  "key1": "SPYg5JpGZR43uPyby2U3xRsymn59ueBFumsj5AXpsE6dTaJDgag2g5ADaM9SEv6P1xaZCF2Jgv8pTRNuAtsWT3D",
  "key2": "4jAf4SRZvtc7ujiBqB4nCy7LZMSeN7eS9ixiDNcFmK7KK5Gzjzx6ANvkLyeh6znR1aFfvwXT59BTf961Bkwqvesf",
  "key3": "ZVLg5wpXkLqBbuF1duJ6dCGuVxeX9EQ1dXELjYVjUxbgDoqCpM7pP1QoBMaARYLJK77SqBWySLewgSKCiWVKTE2",
  "key4": "4XAAZk2eCd2bgFC8q7N1JZCVw4Pjn7kXVzcisCDPwBew7KkZQoxWRRDveWJBRRJU1UbsxvnovVC39cyHkrxGLqf4",
  "key5": "kot7R9S7jAx2AdHsJpZLgBkQKca4s5655PT7nmTPuSx4DJXhCmxSvdocVSHAXtSQRVq3kL7P97KmzaFVVLp5gEM",
  "key6": "3PdvTgAAR5TP9n5ZKCN8qvo2xvNw4vw7xa3UPTgQrsFnYR2n8bdgfkjWnM7GaGLtj4QEmaeQhHq6mEzeRpJnuV7e",
  "key7": "53GgZEXuif9QL2tuhdGTB4f1NosydasZ4Nz3kj69sRBLNMN8DgsubRb1nFpEQpmws9QtwSQTGep8N6kBVr4wgGNQ",
  "key8": "2eKeW6iTj8NnJMjQGRYJZJxJJJxs6uMVA6jBbBEi4mniWoytnPJKf8QYx9eQyTESpFp6mf2cBGZnHNm2Rteptygs",
  "key9": "5cZpxA41eYqynFXh6FCj4XRwrDifq74MjzN3vY5U7KKkcQqs9CpjYAdeDA5ZQ9t1hLGY1hsuy1ZZdZRwj6JKTzeN",
  "key10": "fXfuo9wtCoZbQYc3GiA83FUQzqA3K5eqivLKEuM8zAAjZV536B3SM89p3D9YBYUxQhjnwhWDEwuTrchLSEMHxLU",
  "key11": "2ogncLkUFwyMoqR69iMEA8fChsjK4FxMo18WKV8Dwk9vn5iGpXWfwvixkq3kjahJdtYbGdukG1LNHUHq4SzXQyPd",
  "key12": "269FZWPj8UTyzxnp4KCsNc7fAGXoDxvhMkHquCWp9QvFiCHR2f9aka7RZ9Z9H3YSCq5JEaqBXFVabxoasnyjf9SF",
  "key13": "2K26JiCqjGkv2cCss7L4QbgdCegxByfZCFzFMoCLZHSbcdQDeCbU2wuA7MsHLEqF9YbxjFHAEUNzbsTMbyJw5pKs",
  "key14": "3ijckBrZgwxRxs4hR6HRa6yAxrBop83G2HrV3JZYUu7JfVuNA6aFamnUZHmbhTsxDeg93wZjxgwLbKFL6eiKyMvh",
  "key15": "3WfuDjLxL9CMiAgeS5bR95DJEq1zbGcAethpoYszPeNwDHUxRFExUwJZuWJamRAR5JJ9rYnVvgupDfmnQnQE8dx7",
  "key16": "3EmcXHmJv9SpQzJf4FL79y7is7chkKfwTRdgKDdAHK42rVF9TTQZbokB2KXm56uHGyMxxrb1Ye4k1rWeNwYVzCmd",
  "key17": "2GcGeu9mCNmDE4Roz1euabr3LXb3f9PzmbxbCJcSZrr8ZkJp3DpNXyHRTDQUnJhCE9A3tVX9Ywoa3aU1JhzVDjNw",
  "key18": "XzW2xtkw1t9QRTmC4WMfeS3M36YHrfNkicFzvMQTQTRUcqEfx4zAE4Lm3oUT1QewdMfKJ275EhTczBUHsQZwvfh",
  "key19": "5QxWxFY3sS2AhSWKU4EDn7zLE6C1QUnxGLN5AzHTEzU1vafogCurPvUakrkzj37dzQUhBrX7xLvWnNsUbJnXdQtV",
  "key20": "tHVecdyM5JYSa4aW6oF345pQEivuvtiY3GX5Vpi1rSBBRsGMqokxzPrQm9wFCvUEEFMpF3Cd92YoP4MVT27fcbD",
  "key21": "3sBjkif8pXsy9YofyU2FPMuuJva3TgKWiVGtV6eApWEvNaGLzis2xkEixRvQoqM4Higc8H7Yfpz1D4kaufr3z4rb",
  "key22": "5kB6UshfiNgenDbmP94vBjLKmTeYmyW5Tg3cbDnWnKeQQE7r2YqZu9M2q6sMqq15FJH54hs3iiZiZDb7mg1APkYa",
  "key23": "47GyKkQiTPTFfnKsnPjPzFckyssJrZAtCttmsGncuKoA6SZqVFtWiPrkXdXBhmZMw3VuYCK475DGRQ3PAPbm98gY",
  "key24": "3wdxo15tFsvvQKhJZtb5PtoMPX4TrJxMn5WY9A3iFZMP8765pKZerXY9UMCYTSEQDvDZLqWhuKMRz78vpSNPperj",
  "key25": "sCW9GLviCgA4eE3Gqnonn9Wdjd8MywzjwTTVVHigfMSZ5H48FKiSYV1NsV5GPZedxGhprcSm3dAZhhjM4NCXZzL",
  "key26": "5d9SabjUKeyDEmXNhijCMxx8zJXJtMpdhrmBPofkAteW1ECB4wB9toXsPoYaG4LMoyfaHpxmcT7zt1teVGXYFuj4",
  "key27": "46seQHv6VxDKX1bSr4TdNbPHzTi8X9GkNW8XGSR635uPRWMqxugpPcAbrzvVinh5wrEQoje8mer3wVLZgAza1pX2",
  "key28": "3Wui8VpJrVL7iJTkcwncj4vnwdRNkcVRbd3Q7Cu6cphZgW3GkrmqvQrN9Nprn1z2CMaivU2DbLRjP6RNtsJw2Pe9",
  "key29": "4N52efGbPKRTbFJZ5HoTonL7BbejsLRBioN5GHF48Pnai8xMgcTRKA8Ea443btqUEC4LybZStSyTmVcGnETUWxW4",
  "key30": "2HmskwVyv8Pmyh7kbVtxYpbyxvv88gqChCtetvAWK4sf61yNkwSy5Bw1FpLb1oQG9mVpcDVCP4NiVWGqxW6LYyzG",
  "key31": "2vByQjVR74m6EqFSfJwQHLPcpAF75NqNCevVfUGgP4SBJ6E12q18fKnyr1sy4LCxFbpSeSgksKnhqDpKnMnD3AMV",
  "key32": "2VB7k8sit2Dc5ZZXJR7U5SoT4Hm4H97YMF5U1KU9d68CJFAZs4ZDNNJtoraph7qtzSGFDHgPgXYEXW7rTmiBHYuo",
  "key33": "2VUfG5wHim2w6okrJXUqBmBiJhuPCm7F7HSdpwCqxQkK54DrdK4bN4Rq7ZgQ5P3McirUyB64G3F6H9qABqobk9zE"
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
