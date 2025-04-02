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
    "2jB8vtvYPVAshJW1PUmE7qvTwMKhwjUzMGK1Fna4ppTUqYdJAFyMBKXWaKzjKowiNjjRajMwKmBQNR9TcBPyiNE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QiNixagvAymtKoRWrvRMFY3HeMKndB9mYWaadBAXuRzFALVw8G92ic25DNLqyZCM4CVrFV4ZBP61fTwm5zoHvh2",
  "key1": "2xFzXoKqfQUXBALip9c7Rym8JxnRyQ4N3EV4rwuLfkReffpLwWfRwgVR3hfTopqFZENBgJqykFY4Kkq62LCQTzm7",
  "key2": "3cTfX8W57w6n9YcX2UczU6t4SKysjFm1YopjX5xpCVzXoHb4RsCePJEymQf4U7MVkBzMGVzgaapYraPN8xnMSiSq",
  "key3": "41qoytejcGU8k4Lw7DW2c4y9aGNdU9MRvHbr39EoivS2RkUZZtddjZFvY3UoJbqXv8TY7pqZBfRHu46r2QR8YXgq",
  "key4": "3tUZ8iqYerX9VsvVJCL4gPwoDeo9x2U3xzCLEbzMk6rrUHe4ENogBSuwnzC7Xnamvr7xDbtM1VJhuFb5gAGA5qNs",
  "key5": "5j6t6z5BRxkqXUBgxdH9CPaDELjtHyGurT9FoUEUXANpDW1qLeYhACw6aGskWMDPt2a6fZSqEVYKMqt22kPnpY6v",
  "key6": "5SL4fKYX9WBv7Y1CEv7b1Vhd9csA9qhu25FEnY8Rgehfd22bU6zfWENej6S58EHNrApcvCGA1gk9FNDRX37Ek9qp",
  "key7": "5ZKwMDdBMbHe67exFKn3teSWpz9kVuthfmq8CfUaUJswJqWSAscNnJSh3AkS94NGJ2snYUjR1WcyZJdQg76QoaXA",
  "key8": "2QHz3AYusCw7yjj1kq4eewBTUxiWXGVguAcE9Lq2gYJ4zkEZFTHDkhs5o1mG4CQCekDifqEjBkUpgFTkLrCkMf1",
  "key9": "w4sxapMMeSi3rpqPu6mtbtQ7H2Ry4nZUxTTx7eZguxVZBJzPGykx4bM9XCXcKyFEU3zVrACPRs4pLBdtPFQEZ8F",
  "key10": "24nqhVjwdx6ibqtyW5nYEVx9TT9EyQSKxBGJCDALvnYHpkGgHGkohjw29yboqH1uoD6TwdKi4itSA7kugT34Yevj",
  "key11": "21jsm1kwtHy2Sa87FtmKGXnERaahUZZpvAryMu6Wk6cyzEGBCSDLnkaDL8tReArNrLHWYaL2WtEC9oDXjL2dBmT6",
  "key12": "5ExZYPu3mBSgRXmoy4jarvdmd71rtLWGok7CLESfMpUj6oei13MS5mkBXAXLWpCKyzqem8Uu75f6fHnFDv77ersG",
  "key13": "3RgXggxMYTPdWzdYh18Nj3gwdfnK6MWggAYojtTTnxcS56D6U4MyYckSrbEdK49d1mXm9aMcengDkEWNdKxSZfms",
  "key14": "5JCUo4k5VHZmoiuUvfv5Fuq7gTy2gWR2V84uwFAif682TRtuVDRVHn5MvLXHe4R4GshDhW2JP9BYnsXBP8TdZhH",
  "key15": "23XPZr1sXkot5NARoLAts67JLkGvmyGuPSsH4jeWJK2MwHmKqGirwj6bnboKmwqLMctg7U4sGmcoLw8kos3ygbhR",
  "key16": "2VNV1rUteYaDVzDp8LmGdf4Xd6TFPCkbr8AqhJ48G86PS2i1m2oZQXyXjbDW92xR8fddRxgL1BvpjNJDGpgAfGRq",
  "key17": "4MSF7W8djWXqho11yXCosUKS9QDvSeMS4AjpA9RBNqFv27vKcwWYa9qBNA1fWgoLegVdV9nNpEZYi9K48emhEzbi",
  "key18": "f663t7Wp16AbGWprYVD22vo5g5mqhWxvGFtK5kP5SCjpUKzkabjPzP62BBg5hwfutRcUhogLxjxdFEZqkA3UP4G",
  "key19": "2iXj2cb2cx7f4xRD1yPWXGQ3FeQGcQBUHvRi85kCHVLn4zKQ4F8pz4am9rUDR1GGAL2nBQUPe4gEEqhDpGyoqwwj",
  "key20": "4cJbVJd7s1eJQLNo5BsSZQ4paj72TS4mjdjKoVR91ozcyMUTZGmYak7E5j3223KtMXBSzhGdvFa1WXnpDfg2oeJP",
  "key21": "334kA52cpuFzDth9DZrnqMcc5qghMVeU8jiUDZFJ8ffZ38ofhxopkuCBjGa69E6QcvbtKo5BZnBLAxchZZbtqVX8",
  "key22": "4Q9jBmKhi8DdxLiKx16zFq6VFw6yVScADWcRNMxAYnL4m1izvvh8hzkVRWMzT48FBUN7swhKbkACgnCFG9vGyfPe",
  "key23": "5K7LbJun83AuDQxYknkie4tJcrcDkqRqz7ubmsZAybHFkDKoCJ8GVxtM2DCnq8CYecZReW8gyyFhAnywXDRUxji1",
  "key24": "2f64SzdSv7xbw7nxJFxDijJyQ8H7eKznxsz2ZjMVC3nZiHj962WE9J354PgXkMpAdSUZscNCGFuYLgWUzcfpU2Vy",
  "key25": "2HiVRepFPqvEycQZJwwQYqN1gqGuqY6iweXo2itGLuoWwm86PHHo4PWviqqKoTs8TCzXg9f1dCPXrEJ9Mt3z6cy",
  "key26": "5bmTVzh972DBuwKuemW3c1hi3oiZgYLmCEs4wu7KLBCnaMHqpkaVBuqtViUXQ3JtcCKqvzuKPcCxMt1N59HvHEHL",
  "key27": "oc32MCiJSu7dvmHy5niDz7nDwbm28FCQuukCjc2L8vWJHaGDTjQrJ5rbtVg7MbkbZNi742yzWfUPVLNUoAxQP8k",
  "key28": "J4oLCAWMa7zCvhRBZ8SizDxQCf3xir2XtwELs7cDBq5Vy5sk6PZZVYaDCvgWSbV7PcwwUHvhPPHnAKTZ2nzH61r",
  "key29": "39UyxHiCoMq4P1gUhiPhDcgiMCMRYSwj1uEvdkydcXAgqbDArgortoYGHuGkBf9YL2eZbyPYq8jukGpEdmzodUXX",
  "key30": "hK4NPSwdhG5khTsADbTz8RDgHMbGTBTWKBmcbm7tpLoBv9injHrM4XAkNNJnsgWP51EwGpKzn7aaDXyWXraVqSa",
  "key31": "5eJmPsE9Vu6b2wmuizNeutaXvQsYMRaqH3w73RkRHp5h9rcUjcsYmkwGjXW5iLAdHjNYmk4AidMVfvXC2LPmR6ZM",
  "key32": "3U3hSDGvnmVoAMDqJDwfUDJ9haSo16WgukqGadA4rBXYnsrp2kMswFLpxvwDYSAjRc19LiboPB4rzcLibRzpNEWy",
  "key33": "4qYjhKhgeNakdMnVLWjZ29tm5KM2bVHvu9TMDTL6RNoJdNjUcaXrJhKMozCdVXTFTuXPiTLwCNAFUukpu8pJ75uD",
  "key34": "4cYEjKUV2fuY7VxrdRedKuyyri6F8NWz7rahWM1okiBY2h1PYBUMw7NsZdF8xEGfaVJMQAGEfWnTBBeCkb6k8oA",
  "key35": "47HjvG6Py7gsgSFDXcpCraRqYZyaATfuYTFDdRtX11cszjrkTy7PNizpB3qJrr1oA7Yfc6oPYQ53ackqp18gDCCF",
  "key36": "5HdKHnKhtEByH6upQN5dhPdT5iWYXfmvwe5Ngk8kkJnoayexrkkiHYZgQjccFqrMMK3tyuHqekc4beC9uZgeshcN",
  "key37": "5DBGzcQhXxG2FzreFisWQCaaiX2gmADv4LLxurBXDZhLXg5jfZTnm4DNTcS1neWkJV2FV6cuzrNohYzceuvonSfo"
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
