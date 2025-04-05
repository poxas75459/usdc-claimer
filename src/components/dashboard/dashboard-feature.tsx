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
    "5tJetoenuCvM386d8hk5U1tWkm8r2iVN1KdpDf8FGdeQ6YFGLG6nqcuXhu9Ma8y84fn4HGehHBsPsHRMpFjvmB7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKKB19teJ7u6F5vMcdHZEX8omgFvPnregVX7DjdFwygtb3c8gNtvPPaKcd8cnEHBxdbszEwdK6jSbWUFcGqC5wg",
  "key1": "63iPvQLEMQpC6sKbRAMab6PTfEG8oMHLP2b9t9WHG2vxtm5NUQUNCXdYV3mn1FomJqS4UTsSv7h9D9VbN7PNZfcr",
  "key2": "3qcjBkLQ7vXfzZsYZpU4iZ8sTYuqzVs7fMdfPmPQ5BpF8gp59kPNA4uKEeYFjjKUuHH1mguggEf9xUuhBrR6h5JJ",
  "key3": "2NNfa2wgUKUGtrq4n5jhARdAzTs52c955x9LY4AnkKNR4Cs7xGDp7WScr2gotLy4nBB6AjE4Z8W6TUHbugQomo1J",
  "key4": "2VitV2wbLhA9fAkNtFqhrY6SV2NPANAt9RuvMkuP3BiKDHgUn2uQnrwjheWDUFA8LKoqcCuiJVCVK5s5kcmbEmSX",
  "key5": "KQx1dW11kPbz8GH1NWjkXyokvurdU4rJKMbWz9nWytaUTtSh96D8Mntnt6fjnTvhBmEynXZFyvprv4auUWXgemT",
  "key6": "4HEJvUUP8r5qUmNqMPWGBbKGq43mEHfoXfmhuuiEcaonFfX1qGV1DXTWXQPCggk5tJPvdqP65Dj16jYhLE8ChLdB",
  "key7": "2y9jR1BVnkzoiBevHJCmhurXy3xbyyQoAx2wvEjKs6tZX9ZFeNim81YvmjM5zxP4Pf5ddmhjoCjJZ3uSh1Hyp2JR",
  "key8": "5kUXSqymvdRYgKQkLjjBMGwRchg4sDVs4tJ8DgnLWosUTWbveAzdsKQvBKfH6Dm2p36ouwbGFdoLYjpHm2FhZwsc",
  "key9": "2HQQ5ZBao7TzjJeRPKbiunVGo8go66zCYC4ofZUTmmdyLzsWke24pEiVpVAKr6Cedz7eW3H7XH3Nz3YufJxnzCPU",
  "key10": "3pZnivQv8TofaJ4Yn81HFve4fwvpJ7BKMBQMceYQ3ibxpkpnBgt5dMFpm4zc9Lsu2Eky9mp1rj5MMjXZAeu71fz4",
  "key11": "5QBYFM2nwWpkn6PFJoG7y4YXUwj53HFTMtDyDX7pdpFNDF9wgJkUn4fDd99koy1vk18nkULao4Jb6oc7be1bGeYt",
  "key12": "5RRWgMjVbEYtByo21j9jHptL3arLsXY82ad1ZuNiFNojiUHMfn48CQufGUWmbz9WCBU6Fc7WFE9K4qKFzfVSVFbJ",
  "key13": "29kJXGHWvVNVhjCWT5vgbVnnP9YHPpaK8NYdKzc6N8ZuDvYHprgkHxqJy7eGq3TfgUSueJWrZT5ajEWV8mCPBpdn",
  "key14": "2ybUdJ5FGVXmTN19nZQbDdbpTZXA27yCGhjTXSg5hS8k3niC6rApeNZMxDy8jFmGKDcEzQsmeALpb9TtXHHKbnsh",
  "key15": "gQVcav6amTatheN7okJTQ2129xarsPVsWyz58Fjhq1AE1zrsgsJhVg71DhPFJuYwvHHiSQjkiyELnofA423Ankw",
  "key16": "2cHA2MAzH2ofsKpJaSH8P8yUph8ePY5DJoijqhhDCopznjZfcaGPj9w8C2MAwEgB2uNKbdQCeDWBsdeDK5W5ykVQ",
  "key17": "34VtRqRhLW15izvi6wCLExnD7QkMyFn1P4jgFQMQeYuFcBpCY478MJWCkiNA2kPdK56tn7Fp3DWfh5gCaAXy6uP9",
  "key18": "3MCD6xCf47nqpcr59SBcRMZvjHhZBGkiHjijxwXz1navcGpGQ9n9QwSwfodecu7chzgJYPRHFoXbQd3wBPPkn3pa",
  "key19": "ZKLa2DwKNu5NfT5owPHGDyLZg8CyJuWxJVS7itjvKSLNBfUcMmDseVJs89d4vP3qMsfmXnUH2gj4vUqoWXzR4Et",
  "key20": "2Zg4xFFGS9RHqJNztGGvJcqrW9dnTMXWLoNYGSfto8f3HdyHz1DGH94aCAqBCfkp7FB3V36f7CJw5vSBMgBoAXie",
  "key21": "2SzhJ1BGwZKjcJ91RgexExsX93yZM2sH34wukbdqpTWLJ2e1SGXoCqqeLtEya8a6Sx2G9G1FgKEWU77hYQAMZzWR",
  "key22": "5mrKF6rhhdwmsGwd9s91HJj8g3PiEjjKxncdMFws7vgxkqXbgyhKw3B9pvVFMtbTniKfQWmV1ATzPoJfqRpkU6Zh",
  "key23": "PgwjccpFiF3gMNcZAbUpuNfuuPHU1R7m5owji9dDYhKgnhqZJHGfqT31qLDj3qpJVncb1qwEfV1WyfNnsYh8BAq",
  "key24": "vUeonLSthbsAdND6yC2jdbd9UUT85KrydRdDWhEiVjfM8e4qNFCS2pxLpADw5hX761WweTC4vuLMQzih5Ga1XQx",
  "key25": "2n9K8yuafU171Kr9EYtutUnGregMwzgUB1r1XWbctptryai9BRTs86jY5QbyYbQv96qMF9TPH9rcraAbbRHfBGq5",
  "key26": "2Qt1wYVHZi2Z6zNj6bLAbiLRX2ttmRKhm3X4Dmcz7fFqjgJbADf4L9b7cpf48FSEceszevCt1W4DC4Q5YUihFu8V",
  "key27": "21nJm8t6UBFHmFAW3Xx6hn9HzjaEBo3F7BzSMrpjv5mhdEXcJceJq78Vuy5W4QM7qGhgztz6S37c31VTBiG7MEEE",
  "key28": "3GwnJJizNAhMACidWoMaCAJGJaTMys9UzM2rVaUW9gtHmWVyqEMGBbVwroQ8sZfJDKEH8DtQ4JBZ3TE4Q44p3ELe",
  "key29": "5LpLgFtA53ZVJb3ZBwhJyyVmiT3EprjuNCRXmVm8kEoC25sp4sjqtPootRFhxSZqvpNEC7iHRt4hhcWYBR7BBB2p",
  "key30": "5XUwFFJYVfERhd8RArPAttU9wsJFmXWhDJzqTt99Dr9oCFri6pysEThpZtAKX5r44uFCdb67VhgSGEptNQCZzYs5",
  "key31": "66yjY43zqfkEaA4y7Ah55R19MLntDTDR6TNtr5z6mKYM4HfchMest338J4kQhvLDMxmx5vPDT82ZDf7v8mEdPS5",
  "key32": "362Y3M4H9kume3dxe4EaVWzgPRixpmqoY1z9wCh6zo2tVBQbnQ6dDFNz38qnGULoGhNR4RGiGQWUEhHJRSZ2CLDp",
  "key33": "MSd6BCWNp769j441axjG1ZaCLSyKwwXoLwyKzw4hfyzd3S7Xxt7gGeUooT8DpLBLyYD51iTYcL32RxUUhHwARuR",
  "key34": "4DCMzAaTezUogfDHuvCJxkTydu6VuXToXwAmQ1nzbKVvFNkKKtyyX6fCjwMBx4sHeGUTpzVPqp7ibMwVmAH1UPH3",
  "key35": "2yxMsX1hm67DeeckxXxB4ZgAqAXRsDWXT1fUYW6gD8SXaBTDwTZdxiM5tPCbTa3af9bg4dM1XQuUpeEsYfbtdS7K",
  "key36": "38cAAZbAG5izVbVw2eeK7bquwkSVfX412Hd9bNdpMyekZ7WgiyeUV6K9DQA75HSTrbQpgeTL8U8V2TP6c5WaXRr3",
  "key37": "5BzmnPXTrRcQDm5bhE4BizFjY5UsL2emcXVEuyMzArh2BoysiNyXtqWQhDCsiawh5r7mp8NtBkJbpnh91GXiz6YD",
  "key38": "4hKLtTuLqHLaxyH7JWozNpHsZZXoxeT6x7M6vA8yn6wwNUFQbf34Sbm2coxp1aNNrqViQ6GLgqJWuPjvaj2JipP7",
  "key39": "59nT6W2YU7MJ1P6cqurZrHkwkGzwKJkJxa8HMSws6LmuLhVtLxxugeGpfkm7PZkvJdz5pJ6JbgLWKapWBpzJDKf9",
  "key40": "26oG5ovBuzsNc7aYvPUCRoLCosFj21BCx6iJg8UDUtcyQC8MJGLd1TqHmhEpwchFa9qsuMUkuRw7VK3JsLdc3j8K",
  "key41": "YUV2YbEnZHEANJPEqh11M3X42bQQazEtSXwiiRHxahWw4ZPbCbDeerP6NsczfakyuXqbY1Pyzekv7QpuegbEfJu",
  "key42": "5xonrqfUE4m86kpN1GzwMQxMSk9PNZbZpjM5tsL5ezniou2yXKEvZVQ8WWJy1ZdnRC882STPm5NeAgtvi7jPsT9D",
  "key43": "4vpahPLdMievSqqSAwgj8QqzxzuqMyiEsxwFy2kx8RCviUoB6Xt6hKDRdGxRXypCySuZu7nyZx4H9fptJtRnBDUU",
  "key44": "4gJLVPS43NfPL2gSvzveHzrWAsGLYGLDLWxLq8R9Hv9BYKcF9yHQ9Cy2oDvXsQDzLhSDMyKfHjCEs41miYV1erBB",
  "key45": "4DEGB3LsVDYegJJm4yemnw9zd3zya6y93fTDh9Hqx7d4xow6gTr9vWyeNn5ToKoAZAZ3JvxhTpVk6zYpNf9E3SUt",
  "key46": "38iPCXqX9XUaMb6uv5HzQkJsGJkU2rE6szy8p7EaNAjN5cNdzdf96jz8BCptNkg1XTAERhnWP1sCecre2TtXmf3B",
  "key47": "4H9anA4jyJpmZ2ZAMupwKJHxdGfedCeEHNSLA9Rd9zrnzXQY8dy4V1EYZM6AFZeRH3C5mBNjnvXWTZUmKpnNXwoD",
  "key48": "5prnRP2PnDig51CvcAhkMU7w3RwpZZ2Vvf8JYFEgFgfXjUDPvUWHcHqaZnSi8MBaptpXFKUKDUqrLjEN2GX1pBSG",
  "key49": "3TWdzQjXrQZZLzdCpGmvLUZTgqpCrVi9rtWLngpgAfGd9L7P5Lrit9U7qtMg6vbmToGdtbHTReDRVpvoufeZdhTd"
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
