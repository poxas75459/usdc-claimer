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
    "3A9RTE2MntGjRs6zQ8cx7Z4r7YqqAkSQqUC2nWuBMie8tcWcTyaq5HY75k4T2Bo9f6KRTbHpseFfqtXYHXEViqwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZyTt9tvuns2zufeZb4jqcij4JagxnPHRoZuXh1Y6Qdpd1DpcEywmGhJTdyERmDS7zhALkCxQATFGcNGmqW2XoKi",
  "key1": "39Wm3FQyEQhowAdgsfznU9vedMH23f79cadqwc1v8s2DhvPLSXCgk12CyfzuTzMorVJMqwqePJiBwCXDCLLe2bri",
  "key2": "4QT8kzS4sKP2CgeuL82kAg18ot9u2JUifLgHKVRKPDfqfRK5iDk7g3NLGduSWc53kRuRzAE3nsTPVZHaXHxrU8Hw",
  "key3": "2NuERz4oJQNWYbz998BKB6DeJd21sXaRCdbMVX7xc9ABaQFHRjaEe5G27pUwjELNZU5ZmthnUazN4BCfc1W99JLp",
  "key4": "512L9MNR7pR5CVXddnJNJnT8rb7n9mkHe54ubTcxUtirKncxQt9nPdouyjZCn7EGVMLrdUC7q2WCFZn4iNmm2xj2",
  "key5": "2QecoEA2um1t5fYPkdfBhsxshCvpzXY7kRUch2Uk9FKmrkThdvD1gZbQtV3ssWDY8wiZ8zX9TSQEDZsUm2mNNneh",
  "key6": "2mWPPT4WpYuHowq3bd9oNAJwFet2tegFd5WnvQe95H1Ax9tEWVzhMN85u5GD2WPFDh6fYpySfbM7gTyJeg6jx4h",
  "key7": "68JVH8ZEZsvJJdK7wr265Amhyg9GENzoVyShPut75QKh9ZubWc4XoACUY7cxp6rohFAHQbRvTbSpXDg98r7why6",
  "key8": "66cRYyuDjmKYduthvz5gdgmjb4qNmExRBBP6fBLudevvdW5kjfwi9de1ZXFuD6cp6P8VZ6VdJMKihG6fa8h3YQWs",
  "key9": "4CNbfmKyg2c2sAiShLgyoMXWrZ2fEVnXeNtxbKpP95K3BEBYw4Y1Knzqq3cWgUbuv7X295hf3yW6qrBT4DHBSAmY",
  "key10": "62RTAvUbrJgNBmeCBkfjNYriccnPvT7QgLe98ujZ8texqfbETKuGJGQCknFZS1VZnPcqHJTAaX779Q7aoVnjNNhR",
  "key11": "41upfrKERiDxKVd8peHRod7ZDgLqn77ZVbPRwrjfW1igyUq3rFvm9XTaZoygxj3CzVrM72uqpdLYpY53tD9KCC2e",
  "key12": "aAjB22ryTQ2qQ5vF1B3PdCTGvfkaYXZDZp3y3xjAdEhCPt71NVch4p65oZ7XzBqc3ouRJu4Wm4VJV2bXoGVz3xd",
  "key13": "Bj7z6fsKsmKfFjp8VPxB9McpRDQ9DQj4dL4S14EkmeV7ebZ7BsUN7W2AuTDQUe8hLAnqcsRKf7FXMDU4HuvxzVy",
  "key14": "2Q2DUTThNBGWNhArfeVNVgVeDW3u3te4G1A7VM8upG7kvQYv8FCNoUK2qkogDM4drH6FdSx2kp4hLqzUqB9sjNrw",
  "key15": "64C7y9T6jwBA59RP27Lk9QDzx3JtUcjg7CRH5ru6oWzNkGyne2GikxxsNLbS5jDujsd9nfNQ2gWcyc7JYcA3KKUB",
  "key16": "62q4T2dWUVjsJZuLAwBjvqELxMpcZPpqAMzsZSwgwehsLrxAyciEpb8zSWdCM2gqsFCZghWpxRrqSWUPMrw1pb1N",
  "key17": "4Gz88DcEsnBfsx31NLVbypj87engmkTdLvY8vVVqQe1riUefwFWC8qDNiMpMQW46Hm3JMFztYXpowzW4y871KUcq",
  "key18": "36LFyeHmQfaj9A7RyHkfS4B1Na1DpXUjgJjeRgR5huqsU4SVxWHiJYmbKPgu9b4eNhutd1oCz3zVuqJriH6eKZMB",
  "key19": "5YzvUAoo9uwpCgQcxtPyjkyAGiuw54AbhDg7Tsc6rc36HJGHiKGy1Tr4SBfj1T9GMVgVN6WZagi4WgNcM3H8hACz",
  "key20": "2Qmjty8qPpon7TWrMzDyWwGkhZNb7sSkrTZFs2vFrTqpvZbVtKGLChdJemz13hD1viLzKiuTFzX6ydMSuoV6WniF",
  "key21": "4gQHByJ3iEQwTmBjXQHLitY6CYR5QAHp5p3hEeR8qkTw3uNNZCDysyx4W9nF8SorRQyrxnMq5XaJUb2GULD1fzaF",
  "key22": "2zDVFb9HNAtmBrc6hkjNXFbD8abApCnfekQpJpR77vdYCcTN7ZfpEMqnbBraRSXvu2GwZNNSgG2W6WkasqRv38dk",
  "key23": "iqGMUyGTvYQkzrTtVDAH4dG9bX28JsHt8fUwmjk55S8ubqU9W4imRtA5P8BVR1eCbsSZ6Rg3vC9vJfU4Lv2yta8",
  "key24": "3XLgrApvcx3tyE3SpHceFoUfayM4bruVvGJc6Ma61s5SZJBYoNS9nPY7c8M6aeGXBbCEqgMN24yPgDF1JxyeVRjY",
  "key25": "5dPzGpg4PEUL9TbLXyWfqmzvcBWe5hzGf2RQFyVVxrwS28799jRmE8hBW56bfSKkasQ5iQvV8weNmCdZCvFhh8LV",
  "key26": "ohEVrGmFwHHGxiezKpNnHUNYE1UKzkhNNLuzYhRTpaH6zcWUN6th11MB7X76qZKqSNzQz2xmvwWfwZ4P4VhSckm",
  "key27": "46pGvZiXUMzS6NTbrEN84p1amVHSiTV4V9V6BBXgXzv1JhhGbaWsJXqFrLULfY8kyX2S8MxvushFrUhX35Pybqcr",
  "key28": "2AYbS8siQRxgvR1QcPej6FCUNV8Be7nh15EG1ii3bNeWD85g7ehjJqF5vFsweKEQ6iqzyYUh7RAYUrYakJ5V6QuV",
  "key29": "3AMny2RoxxhjJAei633fp1U5Zuo4koDonnnQzv3CKfgGNAhRbSRi41eXmMwPqdmUTTF2JEAZFXLNtxnqTYPpRXkw",
  "key30": "q57LN858WYhy8NaoHxDUrxj6HEjhytu6KAGWgVN4NJVWUVffC71qYH7sWph3yBV6AoYE5tw2sgR25NNmENwTPFK",
  "key31": "ffZ3shbHTm9PKMwdEVbMPGmonYKHsCSEsb189JkwRqux2jbLreba7fhjxtP2CP1nmUTDAMrT5Nifqb15mFy2Z79",
  "key32": "5xaEZnYbKeVvhukFzZfHnuc52FJfnuJm7v4FFGdK9EqBfF9jk44erVu6AMDr7fqhyjQZuDB5vnPGv6LxSK11TnoQ",
  "key33": "47X4vJwpxQnWePh494ttepd9xYamr8RLLPq385tAevHg6eC5Wa3QgHqjzZgVMTnBzNHiw3Pdwtiq7GeyzfC3ivgT",
  "key34": "5SLrEQ2uEXFzYnEufGYdiuivi4JdzVQXiP2peUTT9CxkYzTcBP2JQhVeMvGg7TKsQwd4q4RNFpuutLFwL7XfbASX",
  "key35": "2JFATGxMJrXz2Kf3AtWmgBfPSCvLpWmBLaV4pS435HATLzjytDFBZbJMRKzZUBivK3ak5YMnozq4MmvDKn84Mkbd",
  "key36": "3mFMewQw6BHNbNTSp3XeWmWDq8c1KfHw2oZGSwMohmHqxCznbG4gPLXR4CVFMLUFbpr2UBCobQ5j3QQn5HTqWbKN",
  "key37": "5S5Kh8yXQ72yLdmyQ3CeWYzwn33V9YEi429QyDDRw5guNZxiEfFv66Wm84haztgqas4QVRUghtLQd78jdDYmZkC3",
  "key38": "2itNXm2mg2uNYw9CqKkvr2J4TjU6NHXULQxsM9bXqjPDPiS7JdfmE14u5KPJYtEkZpgsJm13t1P1hmCb8LMyh4cE",
  "key39": "2ENikQDTdoq9D32ed4TyCFxqYE2oG2heQoXNLsLmkTi5vSZvgeneF534xyTu4YAv3LFkPPpeiF6pVe3LeofacwWr",
  "key40": "DJtHyYpYuuknT3ty9NvFMX278uCaeS8ay92caMFqGjohFzmV8xW5dE2q9Uvj4KSB8QLh64AKCeba9tSuGUVzzmq",
  "key41": "5u9Lehd2NHV5Pi2t9BoBfkJaTVJB5ymCtRLdRZ2cocQLk1Kg7LT95idjR6UxR74r5Bk9APrQe6TD9oguAM8hPVae",
  "key42": "4ehpJX2N4ep72QeDJxNP8rBxJLANrv5dhBQjgs8eAbqW6Td1YHuv1T22jqUziEeBrCQsdCHiXRHZ7UFcbMmx7TDj",
  "key43": "31z9sYR1bAhevbEoGGZDgv27Mosxr2oTtWdhPftKdEdQeF1i1EnjN4uDnE4NjTJNQWSymZkL8t8poUbi7QocfYsu"
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
