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
    "ww7YP8ThcJTfPi734rhFt4DTZ5TEtLgRk1mzf8B6v2KX8PpGPcJVMXdJh7XbmBfRaPxrRHodZdKznvFYJBiHERJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYue2iAMdbdCeBXBDVh6JQxcro7oHVcRAVueFLcdf5Yu9Hy8YX43Jt2PZw4aKsiMvYXSLLhqJZQs1FCgN6QCmQT",
  "key1": "61ZeqWBo8HRYAJtqaayA6dUm6xHbPEqAwFKjbV3TGzj59h8EznodUqiMubsowLQ2Lfz9UvwtzN1gGCrL13GLb2HU",
  "key2": "594tR4fidUC863Cyds7Js7ZoYRiLwM7juskMPhwSy4o5MPJBUE3UAToPJcL2JsHbK1Fp6M2mUau4vvcLpo9S1K5F",
  "key3": "2mWbquTA1z2AmhwbMDV1J6FanXc6xakB8kx2Pt3xVy6FBHgmaKjUeWmZBzwhNESD2tsdeR7NNidqaCkMPSDezSTe",
  "key4": "2Qe1jg5VJ4uwggRH1t3Buak3LZRYdUSJY7nYojfFDWNhTsbAfbwKc14eQi38CaWBcsmQ2xzgprdPJGAwnzt45D2K",
  "key5": "29abi68zTnhntEkYHKmbQXVaLnGpQzyXpM2cbTBEh7Q6s6vzz411odxadfXYpdq31PF7nKaW8FrFmsoouFrjmjB4",
  "key6": "44c4bKdeoiT8E2wbhkWsjkCawkRFt4kYn4rTGxCLoDqGDFcTA56QPGkcNpNd97zmQVjBtGHEmntSizzYCyrzq1PW",
  "key7": "F1NfaPWPYn7t1WW5rmXMgBq2mLqGgnFcfF1WtHfLjpQxWmva2K2nvAp4f1AkyqoWbjwTkpn4ZHrH8NxKcLyrxEJ",
  "key8": "53SWXHi9c5EUqYA23o96m2D3FwA3e5cAiZJZravuiZVeb8QYFJ3oxsVSu9pmBGjfDpTqaYdLAtS3Xhq8LDitbTPK",
  "key9": "3iDgXKPCNJ2mA5muDouWD7UhZnqbXAbaG65K25wfBFj8R6cw34BCkmWD8gaW79QNuVtpHtBL3VY8N9SnwKhXmQTa",
  "key10": "5QaPTm7oNP112AM8Q92DU37LmHnGke34CBPfKBHJidf1ECVAZqiuVupn1G5JP3r5dz58cdY34Z8fm6MJ6UV6ykgX",
  "key11": "QU3E2ra3WDzYjzwxEYw2HuaVcrzn8p6Yw5KF1vHg1Sd2C2hou44STNZhvQshLgAW2G5yRwZymJ2JwsahrYYVXsJ",
  "key12": "3TcmttN88DzW8NASRZXJtfyUiHk7HLbt927jcnbFSC1FTww7tfsDau5zhqxA8oMMJdzWFpa7eVGhmJdvkinNk2Zi",
  "key13": "3WRiFkJU7byjQiSDPidt2QSFTVHigXHuRwiPbFKrK4vDBMt1xXDxa8gtWobYywm6TcBXZUuH8VtTVnPq4W1uHWNf",
  "key14": "3REKpwGMZTugaw7TQ85BHWXYmr5iyZJNQWf9EwpLja4RrvNX3AJ1By4yLwYQgkk6mBJJfijd2vCQ1Wpv37r8UftA",
  "key15": "DBc1uFTNqAGwYaZJs8u1Eii5SdoZpbG3aowTXRHgnnpskngpkCC6yHNcZ2H4X4J9xKaw8Z37hTKMztgKqkKw6rA",
  "key16": "3gqiJYTXYggpcRHmT7t2mZFhykGoktsKgjaJbj4tFkZCiYyRB3YaTjmHoGqmNEwMnzZ8iAtzyB7CPYp56USL5R7r",
  "key17": "4gnxvXNaNh1yuUsCArKusbVB4J4PuYcZ7BDs5h6Q78NwXQtWLZKfmQrViRZ52FVFhzBK4REHu6wSi8itYUB3t94o",
  "key18": "FNu2zZ4cm4uq7UYraqe1Y6tcj2KM7nKS9t18rmZXkGrWZUy78EDLSkYoKRpKFbwF2uM6twHJQxfWyyZrNgEkeA5",
  "key19": "YE2HXgQcoGiNDa6Rc1Vge62ViFTMKaNoDgaUqixuKgzvKvBgUF8EDSJSFv8Hbhmzn1Fci2ggyH1LaP6FiV2UJGb",
  "key20": "3x9xiFJV4B9SXS2ezVkozkVqGaD2qMvzJX4NbAG26CtKkrivjM2kpKsJNQQjwaW6LBihAUTomTvMkt1YcsJqPCfV",
  "key21": "4vBZ9TP8pz77HUg5GUhpNZQR36siHSwXf3rcxk7QJrEJ3gP4xNrVBbBidGJ17jaXFKSzXvSCUmKJhBTGNtoUqWUT",
  "key22": "fSuqGwkeUsuQD7Rpu2Lfr9b68qKG9Rot9TWB5zsf4s61f4H8av4Mmcxdtm29oFuKQ9VNngQLwh8TS8ugYgv5Rh5",
  "key23": "3HCjgDrw3aA5mYK8perdjzJTPx8RiwQXcon2mhxkftNov1yWB3xn8z13pZr9u37mEoc9ig7BrRybE8f8z3QQmnVd",
  "key24": "3um8MoPfAhTFqoqJ8JTq9fPMdV4ByZf3NBCNEJ1Z8r4JTQdj6S2Nsr54A5quExDonocdVYxrsBWnbUWJk2fgP1WD",
  "key25": "215zEWCqN8uWKNDkf4X55DCxBf8TK4PZrgRcXVnB7CBuakDr5TaMUn7p5rwJQJaN3Bu1FLaXTmEZukCffpaBC12T",
  "key26": "4bwad6repYPuttbU6BhsmxRpsSzBubxiCYfCTAKscH3MVaMMLW6gZURPnDf91sAxwvaPqYUS4sRHSCLUS6vZNaLk",
  "key27": "5JkjZ32gMjmKpbGQZNLnHQnwDVGAD6XmN5JrfTYV5RnT8TV8vUR7akKGrbCGuGAYDyawdr5RFLmrpe3ZL7RsuWtQ",
  "key28": "5SnSkVc2QbonKnSaMr2H3iSD3aD6p9zbuT2c7VBCMoZTfFwnwNGnhWo69cx6zRfaP6XorsAhfvDUwsNgM7BamCq9",
  "key29": "o9Ask7VUFbGRXC5yYEjXbFTC7mS6bL9tzukx6PM19aBjeFnjLid2QRhmtKGm4G5bBdKyi97guK3KZz98jj82QLd",
  "key30": "5LZ6tXN6ZgA75QDvrA2UGiep186LQZYPYikqwCEayMfssAoQw7sYPJeGUuTc3isECSGXnruWhTr1aBcCdjdNuZ1e",
  "key31": "5596tYPRhbn4Y3yNx3JFSD5reyZ2thDG986FQrqJVtAZdmZBxNphqjSPnyJdp38PP2r328EWuGdBAbXYa9UQ1PKi"
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
