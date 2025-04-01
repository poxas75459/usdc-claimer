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
    "3W1ZijL5KRNM9SdHXgkw3dfYvFXA5irVdZHgJhtUvckQFFwE3Xztr2NwT4qG3bzqhFCbgev81qesmXtwmvmBuAYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AmfasYQmp8F7wKXV2MBHAoaBoRZBLr2bEBpeoGwKp6mEoGCxjH4qw2DZQjmbmoX1wWG2GZkqG9Drx3TFSgjS3gH",
  "key1": "3oKjP7yDtZwa9GQwSvgt5MvEnSAdzXP2As3ewqbeq4SGMzNc8s13or22UcXAPyioxsPnxrwBRD6jPD4iy8qdmBms",
  "key2": "2W8XYafSNKkDtf21Qzjwwn1mXCpYfSzJxrPDY6HJ5YemBARctaBkKd9usD55EdjdiHk6xvKoSCnVd5jcALYxMZRe",
  "key3": "5HBgAchcBWtxQuxnwwTUsiCs7VWvZK8zLFkNtFF3qDrfVrr3Z6AE1ro1u9vChy7UcBLHW2ZSxW5yAmvcbAYnRuAZ",
  "key4": "5RoTANTLKqsgZ9wUzn3bWaKyDjiHZDk14GqB4JkkZ3syMuMGwvZo5EKTi19JAiR8QYYEduoiAf7A3e1j6DtHoZ3d",
  "key5": "5RTpSu2rkemYh6pBUzvH7EoHciyM79UYSCepCLhr5tMCqcc2rjpLCPd438WgN1masMjkgZr9iZ8gdHA5v48syFpB",
  "key6": "5R9DYnuER4LvM1Ni1Vk1A2raZe9HKp9gTqkqd1ppU7Df1nRUL5EouVYB8zkAo9LSL2JgYr4PsFETip24jHYHX2ik",
  "key7": "4Q9VQuUAJe2GQeNvkoMMYUNMEth4UiuiGumDreyVSEW7F3amxXpC4BFi5shbfshLAFVWEXvPfNowPCpBq9MffcQp",
  "key8": "oKpme2dDQ7ZTJhuKUMcXbYduYgdH4sw465qxj9eyyJZW9KJXBV1YfYK8iaFVA5UHnu7rBFJcCLb56esedG3hrzY",
  "key9": "3B4EBbx8417sS7AooPWYuUTzV4nasWqEvtQxHZVoUe1KBYhjK2rNuJXUg9eGEuAgPyT6K6sMe35umCikhH8f4X5v",
  "key10": "5rugnjXA5MAAYL9CKRAGyFN9xsc35t75iqH9gDkyyBVNMGKXXUFmdqaJu9RTN99CYYa3qiyJuMJryGnKUTwXeJwQ",
  "key11": "3tfsbouUwCFWpUGZag9ZdfpdRpX1GMkvg36hjPCLUohF25LYn9zqz7ZZjGcTWxmgxuxP26beXYKwpxxHKY1ecNYo",
  "key12": "65TKDGb3dXETGogcmnJVZbScDwjsxnyY2BuFrgLqY2fmPeWxVuLgyA5w3BFbfdxMgzBpZbz78hyvfsLBLnsSi4R4",
  "key13": "2FDLZFxqXkxoS4r6B2JndDEp33XHirzRD8otQJspHyWGxWhTrqEGLDhZCRKvM45DyjNrXoH3zsmd7bFVk2m5rJ6D",
  "key14": "46yKJpmzYQtgfBZZhPwSm9CugFwZ8piwCpMGJ2UcpisU8ReedLLNw4c8MgdLiPcwRH73fnYDXXasVjR1MJwb72xh",
  "key15": "2JT75G6aGCz6NMfLtmbeEjKX1JpMaYJ7qfpJRptkGk4DvGU7AZRXTfB29PJLh8KSykqJT4fyyzgfXmaK5YUDGizq",
  "key16": "2KzXMpbzWzJDCiD4c8HR1psfPsrNoveWF3reDsczyorRsNcMVV8CAFYLSrurMt2z1SSngdZJAVLRqAXHQ9ptQQHL",
  "key17": "5N15z7Gk4hRuYwffWbFNLFpDnifYB3xm8a2B3saqpWnxWmZx19nmEoVQvzb27G9Xamwom8pxPiTfzAX2xbnzJBXJ",
  "key18": "45sA9Zdv48rEKyqq6Ag9qmKXzsTkJzqsFV58yuoWNqrm4EkGgCUXodJqqZhQrE19ug85bZYn2MMHY9e2TqdZT9Mb",
  "key19": "4fJxVqXHTEWSFVL2cR6VVjVwU1FxCivERiWrztG1CUAvQeeVsEtsmyPJwLt5qi65dUiWCDJHRf5BntbF6A9VDsmV",
  "key20": "2Zh5wGxpASsNvE5emtQoWeWPBHWNUquAWRrUbK8R9cPbxKvfTbN671YyyxJat1GjPLjaQGCJkVPSNEpGdPaY8qj7",
  "key21": "3gpSESz5Md4kPfB22GqCuTsqbQ7Zux7VcUoNTLfpEKLDW9A2t2VecadK7U3HkeuDJEM57arVq1o3ZJcvqSC6QFZ4",
  "key22": "4a2CgCsxvJm4stgVjsSfNEmUmJdXfJLcD9pEnEiC9DUib7sCKKBuqLF34rfAZmKgoAbHSpEaEvduHYjtj666y4Uk",
  "key23": "3hsqndHAVNSGR7hgAHYVCACeotDRgAKvmmH622KDBfMBhNvjUiPbqd8dKwjsQy7JfpUkiR3HM7tvydRQzM6SQFmL",
  "key24": "3WgBVfSSSyPJKWaYNLGHNYNTkmrWrAQFT79C4HFt2f1cSvbfoRLm84NSMUCnCYSuiAm6pptetF2cvkJyVgrAaEv9",
  "key25": "3iX86REEhiugyZKRSiQxrvzNLXgk7hwESQcsJB3RL5p5ppMTKERpAS1rBjhq1kP6PCdJ5eACULfZKkHrfqt8fo5M",
  "key26": "3y8UcYsrtymdd5Q588zv7YRNsTrjQFkbuvcx6TuzeFhA6t5AhFjVhV89oAJP8U1aTMiLZB73ANaUTsRn6sBpvSdo",
  "key27": "DPUknif7GezjfhUvSmZnkXWzL3Yf2YXb9Vpd6Jck4b8ubeWSdvCGxnVz4vJL8p7HDNSCRdHrQToAWpvBqhJcKxj"
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
