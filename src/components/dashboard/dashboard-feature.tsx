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
    "42Mhx15VephgRiMfUKfAeKsaycHfYjFpn3m11goSc4EJUvGfpKdVKtFWiHnjtXyRw5jUXb2jbxxzAsXHVdUFCkxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3uru9i4BH5KYJJgvA3ziNBpwkoQ6uRr63puCVPh3tHAzR961LU6ZgkGzs13LUiiD1GzK3pT6D5PSaMpFsM3ZWi",
  "key1": "Wa5BmbCp14TuNnpn2wUZFKezbGeCoxXDDU3ditrZVgkZkChQEu5WAWJATm6DsviWQVCZkVyE74def95uRQ96MKm",
  "key2": "2NyVXyZYTWQ3Jm137CAfRMsdqvNnUdyRHDWpYwZit97m3oxUyzDntdt87D6yXeLF12GsTX63YvzzoSQPuEWaNn7n",
  "key3": "4U1kyptPtXk3qhse5Syu6g1X1MeMMsrVfgZyse4s1RWD7JfPtffEEqp9VdsbMWximZoiZvjbwxzYyfUxD49TN2qr",
  "key4": "eGm7g9kfSoJ5YK1QmeqTvhuYnVRQ42CvDC4qpJ1frZTKkkdQTsfFAfzP4nHUDBm1j7BXxwMfYZwxNJDGDxTvZ2M",
  "key5": "51nmBP7Kd9K3F2EnrTwXbnHqqLfNpiF48kubfdPX4Q1zrbi6VFXXC4juVd9dETnkt57PDmZb8NbmQPfYEH2wjGes",
  "key6": "4w7WAaUdFU3RcpkPm63jMLQRxoYYY3hSDMQfU1qKBKnF9WdRTZQfnRGrd9ZJQDXXo6YxGuxuNKx1Mwfk6X6LQaec",
  "key7": "4YKPAabdd1Q4JHmuKER7WsVXfgYxoxTaVnm6x91gr6ckgocbAVtQPXhsf6smZQgsRzGGUJJyqzEWmUyvQLxBcasX",
  "key8": "5ps97kRAYxo9t3GtttYwFnDGP3UkoVNeZN4fUUFB18HgMmznt2k46PHnjJ3ioikKPyP8i5RF6WZmtmhhPe1CYnqU",
  "key9": "64VktHDpyAWHHzk6NGaabhJ8QstNgRBC9MjinggU3DujoxRHCYYSj5vhmstqyvjdKQEETEdx34kzen9bCLuunsz1",
  "key10": "4JGj83i8o4F7r75RcqkZ1cyq3oJDMmKTVKattpD4gBckFDefmzMCxoC86L7pLJ8ehEujENEvMqUUvNq2pHXAPFCr",
  "key11": "5oMh42bMQNtCnA1qaNZkwzBpqPcZB3zccgo1ViaAHH8r2oYD7nKqiRMBdZkHoNh1Jd4RRQVKLS6aGPDHN7Pn7df5",
  "key12": "4DENpT6rxA15uyAQtYY6Aip8tAf75P73jTkWoP3ApNyn5wrF8uYGGiiZZK8Q2Yz2pdYZ7cWCDrNyNZLJwogRPfJN",
  "key13": "29GdPwfFZB5hB9UtaVTXj4WfL2ARtN91szVRmd4WausRYsuF4f5AQcJuNWVn9aG6vNAsHL3LsMY9kw1YWT41cFkS",
  "key14": "2hquDZD5FjG8T5EwhYb8a6WUUahq3FZpoefpBwjgpGyoAhJNNcGgiy1jGc2PU3uqaGMRGV95GSGMQaDmJC9Y1PMs",
  "key15": "258rijB1EdrvWTQd4L5NkMzkKW6LBpkUkvt4kXmkYiQDj4sStD99LbkmyRU15isD3Mw82aMpoQ27r8AdmKz1VGqD",
  "key16": "2j3idh4NuoE9cEsTCiihD6fUMUiDUraFUWAmm5zZ3JVpc6b6pPvqBC44MWWYEmywGH2xbmsSHsqhZtH2VpCjkM3C",
  "key17": "PgZGYYRxYVVp5i4gfrGoqED6PNFwMW6rnjj7otyQKsa54bwNDqAaDzaxnLFJudkehLJu2XYCwNHhnqjjEkib48Y",
  "key18": "5FBo4Qe8fZYty5DVDxXikbrXVg1RGxpnGFXHdyk1RD8eAdJJQo7CVTchJS4WRCVrKDdnezYsHbtYAF3wxgcismG",
  "key19": "5yKSraykE8PpZkKFhh9qZYpMeGbg86cgQrhkZHvVw11G5NCDRQY3vo4gooA5v8pv7W6xz46aATeqMNc7CP83Ai7C",
  "key20": "5HVEN3VjJAw9yfHWKct7CLZrtYd4mANjnj2K5dp92Yz3xZeqcmMD4aGgoSpDRkLLPaNEygBw1c1pbLLKQUP7WwEm",
  "key21": "eemTFTPNFFKqqV2VSjrS7KsbD29CfKssDasMkTkhdqm9aeRcTK7cTVUUrvw4Wxv271horXmh7ukqF4Xdbtw1K13",
  "key22": "3bZhDUEAzV1FUzuduRg8ahwspwFLVLVRQu5mDFQ7TChBtKauA9vtbMCkLRbihuQdVAdW97yNDqNaY8LWLhUUHtJm",
  "key23": "2qAuCp5UJJJFNWB5ebfcy4pUXgQcFV4mPNyZLWYrmxQgxL7YLHYAiUwdo9p2dhJrndHPJxHFoBNpsaVXbdmVPLxX",
  "key24": "FwNW2936smoqTWhSwZENRRYs9x7CjGuKUChTxRenxvQJuDEgDS1kDRKFBsfH9AZDDFNneJBmKrseqiEyxDP7tU1",
  "key25": "4nUjf6Jx5VTAnPJXsQo1WDWC76YS4h182TWXTaFBXiQrhtTwGo2k2RJPSuCADKjPD281VFyTuMFSgjDHjRDEwvVS",
  "key26": "4G2gF2WXqj4UURF1X6o4SkJztnYk5EVhnD8xJp5xxcn3RjPB9wKAWZb5ufbVESk14pXeYyY5cPjCc9VujUy47tbu",
  "key27": "34hWMyBdhUyY1tAjvURPNvo8CPQoo5eHQTaQweDxP6jq6hpMZZySTsoE8dN5ryhBmTvnRmSD8pHQC35t9hi1pexe",
  "key28": "2VhDKL9kCnbE6QL4uWgqpQ3Uy1WFNy4yLQgG2wTCiUb6vQ43MXz8gLvTcQSuTzHZNYnuAAArGLNdkLvEkomPZxHC",
  "key29": "3MJJzcGETr1TTyXvEJqa68sibXuYZK2xbKXH3Zh2xWJevaNDtNQkJWEkA7TbS51fKorpWPg4P5zvTvga2DG6SvfF",
  "key30": "4HJ8CEwa14A49X6VX18vjc9zxKFo8DZ4nziU3myKJsYxtmJrbbWdKM9bZmorSpV8SpCKa4LpFjX96uXF3EgWQ24R",
  "key31": "4b8GaQPuzC8CrtRybyYxJnaZMdX5K6kGdZRivKLAFqZAnGX5Kk6aAjogUqsDK6Ce9T7Dy4xCMBdedJppqZXUVCzH",
  "key32": "KFd8kJijmRpnqWw4PbWN7KfqCM7R7UrmkATXdbzddQcJ1TeZmbD6WMqLtMz4A1Lde5rELUEptb7ScmLRvdPiZRj",
  "key33": "5sLL8y64VBZJG3MWoyXaXwmkC8zNEZn9bWgvVB4FbY3WPTHRwGpzpawXkXnfAuk7iY813Mvcx3V1A1VrQo1SmJ5D",
  "key34": "4EWMhzEmbX7ZW4aZtdLJ6rKLA6TZL6iKRJY4uB1V7MagvDtAnWQWYU2ezL8XmUQ5f2RBxyM4U7TtHpejkFkat6jW",
  "key35": "jFn2Uejm6SqmUqdkFZhPzjwfiUdpxSo1Ed1WkjYfQXvt7SvapkJHyCKfgvyjErPAqFoXJBhVkSTCSAfbfWLuwBZ"
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
