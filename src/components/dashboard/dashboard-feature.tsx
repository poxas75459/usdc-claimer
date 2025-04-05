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
    "B8Q3HiibTzKrBatpY2qAaHCy6XpAMzyw92x3T24LjSyseyzPd2oUPxJpZDusDZvKMdxDq8XeG5iVYgDbAUTnDxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suUuho4LurP7tZNmztWbFt6nHLfancZcUGaaF22zU82Zo8FPeHv3w1d9ViwGqfDfmVh5P6EeJw1ozscB6tr2Hjb",
  "key1": "EwwoMfbCUQG12gBJyfNmVdf31DCREperVQwB3HYrEdjG3GW16pgmiMSpmuuEk8GD1R1TJqCoHWaQbhRbTBFqdFx",
  "key2": "3GWoSm1mPjaXJtpv3iTdLNaPSEvhYzq5kArKfKH2mkq1zNKCoTZApXsA67gHK3ros2Y9VUbXTGgA3MvuV1pA7BCy",
  "key3": "S4cN9Ys1EmzWKuKzCJcRZoVTQ6M5wnSDWKKYqzeV5jxCZCFADf7DNkZ7QVtKxSvreLSesecpqfWXYD1r5RDS5Q5",
  "key4": "2vPRoF5viRxUArZrjDnSjKbEzJX8Jaaa1xWWG6iQvHWJGfzD1nVH8gdfZChPERtSL1xm4vK5XqVgNVVdKwHggbcp",
  "key5": "3kToxXTqAaUbeiayuRhyJhQdHtmtK4ta6QzFsUQ9t9WzrLJdjr6o2sWbz6MNHZWiSY8qXGrBdpX2xeWSYqGLkKYF",
  "key6": "8ekJrjZ8sC76Hw9KyjHScotG2GsiAuQuWRevWXe4BEDQfzuTN8ipsKfaNhguc6W1Ej6JNzUxV41wSBmnGpB6VJW",
  "key7": "33UDvaa4ipqRrABEdUrzhFfe4tmAj3DowBoRp6dDfy8Gsnhyxfj8S8Q2mMgbGASbe9SaA7oNPC2aQJSW5sm4np2f",
  "key8": "2C3shoqKsoJ9VYZYSXYj1UrJexP953QmdLC8ct1gr4rwq1C9unAfKZrqHbyAK64FAmGVhPB1sKW6qmCXdpUxKqxb",
  "key9": "3HSnab8VPh6nz9tgdBmtRG4aACo4u9VwrEkj61wYGyNzWkbSpCVCDH7iNaez2HmZaqxdLKdQbWDb1nAHhuBBZdes",
  "key10": "ZDNfugKhoQSEHqeAwAe6NBqB7gx8x5pYv9Q7zXrPNKiKQ6dGgtWWjRTUXrwZR8pBQaB2ABaW2TwHehXwdgYtwGA",
  "key11": "dpm4F1W7asCjJbooWeueB3WU2UCVMeFu6etbRA9mkbXqBHY9yX3CL55YsLaWtTKDrQFT2bQFTdfe2inqUgFk3tq",
  "key12": "534veCb8M8MJrXdKS5jguc4mB65NtKAdMmEhRo7w2FnT8f3MeEoA5eWASS7LKL6U6vKxJtBdEfjLuyvu5G4ymEnj",
  "key13": "5TNvEcyFj9Ao3KpjjXxFwsnUdSXhzs3ffNMtpzwP4HKBmj7Cnvhw7kwRVEbZ97D4CNzMGiodqdLVx2sj4oGZn8QT",
  "key14": "2eNziPa9ne4bWpLwMP7LG4utKWH5kRGrxDxxmLFTv4kx5wnkUJcUp5C4v5UdLHMVM4ZoDx1zr8168E9zmborvL3T",
  "key15": "P4rLNM7JNKafSWe4WcJDP4T5cQQVPhZquRyuXbBjg5kTGCF2Uc3seXd5XcbFD5s7ZNALrWVm1xaP4eRpH2ifbAG",
  "key16": "3NW7tsbxKXC7ZPXU84SHrufF67xF9rhRNjGEqcNCWdiumB838vi2jLXk5c84XutmR2Xs8aepwimQF2PRQgyszVnN",
  "key17": "5X8YxAar43Dw9XRxkWDtfCTaorNGutoYoRXk9btYna6e2b4Y3tY9obrHWdyo4BsrVw2paxsejt72AU3gTvoh6uws",
  "key18": "3cCNk1WLFUU7R3ncejoL7aKTAtAk6k5Nhg5RnrJaQKctnc565nv3PjDnbQTkh5upRDMtqBv3DSi5CWCXTT3Ad6gF",
  "key19": "3rAvEaV3MUN2Em8Y7k75vJN42nRvfDAso6o82d2z878KpjeedUVudofg7fM6AAPu94xnC9MSBPjYGgd22Jwqu23B",
  "key20": "52nPENTqtEXgFyipG3TPhuWrj6w3YKGDQQXibcy4viBL3hkDoqgWn9oiFGhN2XU5h57yhEejv3WtM9SfnAG1gJD9",
  "key21": "kKZZJcz9uEv5eaMxGnLH7Fy4z77niX2ztBJzDohCuL7WHn7UueK2jeywF1onyVAP8knb7wKMpKmyy7sB6oNWBh5",
  "key22": "3eFqfzE8AiaDDhhGjStH6jfkcMBB1gwAeFGvkky534ATt8MXkFjnuRHpbdjcnS29zPZ1gM54EkfwC8XSccePoypV",
  "key23": "oJdkYnr9DV4eXb186iv8UZUgMoyVmGEjRgioqGf7ndB7aAE6RHW3TwLFhS1r9XYvEWsD33yWVbySxX3LE598cVZ",
  "key24": "3EAsvzbDkhyGk1XEYmhkJr1XT4PnmgKNhm9s5LYJHatL2DjJJUMjn4f2K4WAPhAvrioSdokchKpaFqEzPjhUBjQM",
  "key25": "4y6VF38J2mr47P46GzN9mqdaPXVWcU37ABWeoWV228NXG3i5nG5aqEx9Vtkja1MUqqHFg2TdRN9cCekVQeZbKVN8",
  "key26": "3dGTUSpEWCxwJfZeWPayKAicTAZRF2QN6PJ9nqLpnaGeCNafjnein3MdWpvknstX2BRFLw4UjGPWjKa7r1guuHBy",
  "key27": "A4ZwYeAEZtjhSWu2uLknV5QFQonZWTMN5zRXaxto4f4n3b5zwo4sKHeRLeaCvCCyTwm6ZeY6wcjz6V3XHr21HBX",
  "key28": "MxfnGg6zoU9TKckxrkqoHcbRg4NsYyf1Rs2WmD7DcGjwdKkGf8TsPb1EHD8XzffkiGiYFHTV1ny5tkusWiaNeMU"
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
