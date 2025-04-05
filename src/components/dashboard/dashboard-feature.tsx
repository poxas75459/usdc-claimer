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
    "29Y9MVUvMDFzSTVY7EqHh7ppkq6AmVPkSst2UJjMaJPNvJcD8HRg6dA7RWeHEH9nuG3HR7rkeUTcbqs3gdgrqxzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RuAwdEZpk1cFZuVJt5mp8NTxh5CnYsmezAD4FsLXik4eTLK4SX3WPBaHSYkqB1hy5msXydr6JL5wVay3QNANU4E",
  "key1": "44JWZntsQrnx9avJnW5vFkqMgTX1DSBzLm88ZMjYyNHqVRoERxw5YBrD9RoXJwC5aWLirYMp1tW7SeJkzED5Rq9E",
  "key2": "2scpUc5nysKDNgLBAR11gxyZhcqk716tDfoAz3BFeZVfFThExog7JszqAetjcpkUEdzzjgwLm5DnEkM3V3vpb3VP",
  "key3": "2N4TSJ15mV29vZodY1N1z2oxjV8hk6tsAfzg3myMhMZiPPvMhkpGZdMDR4nbq6neo3ZvvB5s3KqX5QZjGQvSu41z",
  "key4": "4n7djW9xcMs6sVv77VF5ULBa8jazyrDPZXtKa7i2WHNiY7r1TJTLBq3majd9b1wqHJSN5R2RRZhxpnowCwvMKuL2",
  "key5": "YcoMqvV3eAt7R9yqbtGemnQoESq5KXXnfu9Ti6AZrwNMsjpNd9fgPvtsapxWCTdvaUjqfocqVVuwdkuEore7PLA",
  "key6": "4vT9rJSgL1k2dn3PX6jd4Rojv7qxTZSnEkYB3ZwBC2ZNQspwnkLfJbVnKzkR45SduNJJ82wRZWnrN7hAHYY7Fi4K",
  "key7": "27jQ9qNweDe74bCSadRoXLccFWDCWfHVh253bDUwLCns62etRNQymc4Gw4AEoCYdSNMQuipGRHXtiJhERSKkSQQW",
  "key8": "2aKRkANbZgNiZBqGGkuMFXMyzxCvw5vw7xNNAf6K83tGpLdrNCxSEUA6vKGsFCzkh4kpPLGNgrhkEsCyu9mq2ZUS",
  "key9": "2v3ksSwBoGmHEHWjE1PmZbTN1Wn2ttqETBUFSS6wLv79YUpb43xcSfmGgvAKu8K6w4ojuUJDB2qZtFWH21K62MUy",
  "key10": "5rCHm2g8vVxZJwv7ksVh3h3hLpBpS5DL8SqMjeprEn9TChrQG8BStAyeKU32XEDWxZpeqotJV5F1ncKF3yXRWgru",
  "key11": "5mkc7DRahkEVMT82Cs48RifwFcEJ9ANP6iLaQgcM8KtnXMRDrLnRu3PdanBdbWd4f78pdUYWn9zdszLX532bMdGE",
  "key12": "43NftgcQJhDav6bnyfNB6tHhNWQV9RT6f6u2g1qZvTYfz2Ct1kh2dVzJpa9xAzeezaKcqPqHC9vKC8VdSfPUrKbk",
  "key13": "4rmWghTK12qQc4FXdDnXPEE6BLkdkyWJ6oQSFtUHtmoEZdJF1doZzsabLWRejzTFk9LoAHwWGjKtPNV7ixxfKfDc",
  "key14": "4wqbu4xQNSa3va6KUAhcC1LvNbgfi5nEDueT4rEBJxmH5vf3KaeQq2mRTd73jqwhyVoKUaxwVngjirX1rCZzzXyV",
  "key15": "31yTY4gXrLQQEQRXfJ4ihFtNdFUxVgGANxy28UEVBkxxgfQah427D1be9tQMH45MJfGzxBmLNa4YaUigEZp9vDXk",
  "key16": "3VdhoXWggx1ePZfFkrRBeJnKb8UNDPAQphendgF1asUL3cF7pVE9N29jWv6Ns2Dnq123fUNbpZoRvHcpvv18myxP",
  "key17": "3N4zqsAiMciN3cuDKeJji6BTbMPaosiornSwaiXw2iBYx1E7LEKTPig573VSan24vbVotmq45zTspnZpEWtuFq6E",
  "key18": "3j7p5nFsD8R4dGAZdnZPj1W8izd61B4JEDSdw7E8LyhZZ48yy3kj61jpPCG9UVcDRkqzdBBiuapMuXMgdcX1dpcw",
  "key19": "HKbgJfhxraiqBNdAJgUtXCaCPrH2EUF7fRTyMxGv4ZWVxYGpQsG1B1HGdW9oCUeTZ7SmJyrrVhxDkBmfb42RTez",
  "key20": "5ckUwnBXYtbtfZVzEj7unr29ChmLMXYH7Yu6Df9wCZdmGHpskmDzU4VQjTrfFyLmuuLBs4Un19efuZAUJJx9Y9sM",
  "key21": "2iJvvc5tvKEUGW17qqhHBZnjsLX8WGYKxnHN9rnjnkeCjqv4BpAoVtcLMHiuUfDcRkDJT53xijAqELMSqnEjSTb1",
  "key22": "43CLQda2BnJeuzzirqbK6DivgMyNF1R8FkyMJAWzpgzqWHDvhYfQQePJepo8DWebN7wPMLD9mH4T25VVAMro1k4b",
  "key23": "KNhMbx6jT9UdGfAi79ESTiLeHkJ45PSxJigDHEaL7tP335o4pdxyj3gVPYwGXKDwmayxQBwZs3rfaCDk5oRSUuN",
  "key24": "2p9pKZ54CQCr9gDZ8BFyugB99x1RLBj3Wj4A9t7ozwPqi88q9MDuPSsxk9HnWAPMWTGLYivjpQBt3QkrS7sSktBm",
  "key25": "3KKQ4TkN4EAYkV8kjaYUWC5o383D5kUBvBXVVXfKG5jnZMiMevo9hXWAvP13ECFmSCf4mvTAegdBGNPvKWuqRno7",
  "key26": "33hxq2S1nZzBkTyvsHUokDRxzqHp9Jscp1aE8xvzHqFfo3VHbgJGZbTNUYtAaurtuBhoCw2edvy2H8ycoiN8ka64",
  "key27": "4oUNHa2NKTrRRr1vAW9YtuQ7VoRNoA8PhjWL1YuxtaMvnZ3cR4Ed6vkNLUgCJ3ephPLMqcHULAcejDUrvznwBPQ2",
  "key28": "2FCEoY6XGQxFitiDrWLPoahh4Xr5Bx1BNAAKc1FMcjsFcKBrR1EFGQn8pCMesVCFUdzVtvdeW4Vph2iEeGMturfT",
  "key29": "LQomDiuxeqWuSP18vqp3J2zXb14SNjU2RdoAJS6MabJRKkvTRMYvC1npCFt7ZGgj6GCpS9s1CvxZ2x8c49EVAVw",
  "key30": "3zUwAC1WVrBXVRs4QRvcPnUzi9pvvKPs4gPGiP9qNDH9eWJHErps3uGaPTGeRzwBSXzGvTLsDRWgeHzKn5UghqTx",
  "key31": "4Bd8YHfAeNFhh16Tv4J5Se3JPQgJxQLichYJxYBeqHtjkELXDD1czbsN2vGWdCaJSTAYiZrMrcXYm4gCBKR1M4Xb",
  "key32": "3eGAf24EgWKrkwq6ycxuKPmHz4qRKiYuoGFKpoJbshiwYfjadrMLYVi24QXrJaerpTAX6zTwpaDYPEDEeZM5AaEa",
  "key33": "Cg71PLguct27Lz8eAQQE7HB4UuwoFKbEjoV2pTisQXUQaZKC9ed5eZbbRFsYrVkdyxo2KJNJRXTYr2hWRV1SdA9",
  "key34": "4N5e6YcK8hepFgbyTLZTLEoggNraUUh5R4r2gS33BAVyvyFRvGhbT2FjESyFxpGqsAGkQj2QAB8h7bMK4p3m71ex",
  "key35": "4PW5WcqxRaeuNi2SoS9riQjesZvDf2eFKmKAdXyJXRUhHw5iTCX4kGpvEFLLViN5jzmsqfj2cwhxiV6SqaLYM8uA",
  "key36": "2iE8T5JqbcTVzgRsTYBt124KpaNwMdajr6fLvtNWN7EF8QdgqQxuQEZFkgDQzcN7muSNo59qr4A5oDxfuuy1fjrm",
  "key37": "3QT7UBPfLBohiqfZxLKmt89YjqyaGjE8kfrfvj9YKarTDFt33XuU9ysxucM7xmDsmjUEvNmYKgHZ5UYQZzHub7am",
  "key38": "5kb9iHceEA5gbUi27fvEUNosEoaitxFhLrQVYjQqcS33biVehVmiBVMiGzD1ehzxYbqit7AcJNnMozPUgNJwGCHq",
  "key39": "5xhWtTePtWqWaL75JS4dutBvvwL77rTkYKeM9hfMJAt9oPq5L4cVe1R8dL6XUoc31b11Ss3k3Trfbh9ewSQghbYn",
  "key40": "5Wo8M5cAEkjQ1HYADqALK1dEVAm78uLqhqA1VDJqjNwYrYbDeysDzR1g2bQk7ydb6Ru9LhYS4KHs6BiYSdxLA9p"
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
