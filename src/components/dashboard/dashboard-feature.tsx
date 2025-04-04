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
    "2E55JaiURoyFrag7KcLHBxjiqTxUo9Cmr5J58qd1KdytmtPqvTeRR3Gp5axbLwznLjNKvJRYQCbxPvkbv7gp61bC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJ5d3LugfNHkx9VZDg3MA2fG8Tc8vja6TSgYJXT2Jnn3YwQqup2icFjd4SCvBd94SMsuArJwyA4iE86a6xHCfPU",
  "key1": "59qr6cHQ6RpgNCRPCMFozAHuWm4y3odDFuc5dxhM1orZz3ckbDdBRz4Djk3KxHXgFLVRH3nfqYTMYYpNKxitGWuo",
  "key2": "duHT1TaeGkaTNHJhezXBmSe89L4aiNq7pqSE73HqSz3cizYrUKbw19m1TRZRdy2KDdUNM6iFQGygr8b8Uyt42pc",
  "key3": "2b6t1osZ8AdpAfVES21ogcjgz7aw7sgUERKKaEVKxJXTWPwTzDxjBmtA6BdF9NFz8vQ93FFs82zTrPYSQxZP9gYR",
  "key4": "LFYa5sA3uK5XhWBB1NAqMjpvBpuwTqxgBrt2DEu8fU52CZJdLrKHdTcLEK6v2RheMnSBmZAvZULeP1hzpjwAGMK",
  "key5": "4ArN6TqhG7RG4ddcboU3WKq7RE2qXQMQSt6A1x3ETLPpxs3ZaPeC4RdGUM2PAKJVMKiZ7cPEpoaZ2EJzMutZTTWD",
  "key6": "211SZsT9YrWWcS53GoQbPEkwN3bQBQr6HSCTFdGxkJddvcd19uAE3Sx5nq7RU2uHiMjLTbJV8hrDNRJ8dma9UPug",
  "key7": "41z8uB5tHDkP2v6qEF8am9QSv66G9chMSqEF1hrGiPYUg46tmMWxJ9p1CNBBuPMZGh1HDQhxXeygJQiEJcUMbB7j",
  "key8": "5m7YFBC8VtxvG716PAC6aWDihnWjXcwwVKZga6mf4U8UbkYZbQQFuYoGVza8p79pLnHeihQzxoHHXY71dHVYD97m",
  "key9": "2UpGUY4rXpzkwSRbipUDQjaGLGxkz5Dj6pEvY6fRYa69JDTAjtFLmhot1bnm1CX3VeuDakxLcNAtUUhFfk8aKAeZ",
  "key10": "5RWkQzapp1EDAw9jRneqXaLGoq8CAskdNH9Hy6AAcGmVVoU69NSUWNYy3mFd3M6KSe5SoK4aEAbxZTwUH8qWir9Z",
  "key11": "DD9rHQZgH2uP3JRXpUJVxUvEsAMJBw7zxkU1SB2TsSRX7uK9UERCz1MG1cKBaj5tVKevbLJeuiqhJwAEXPi3dfu",
  "key12": "5XmBL9PUXNWGPXr3PBgueCNz5FmHBgRaHxduXgjYTnEBikUCkM7LEvKFM2VEPNTnPQGBBNMhfHp9LbtyJTPnHkB6",
  "key13": "5EMYZ9HCHrrTZa7HyDYnwqgzGAoJK1iuXi925JV4KtpLbGx9q4HyirxKKzwyutz1j7yKgnv6DVzENNs4WdfoRqj1",
  "key14": "5Lzo2HY7A4aY9DE3q1AaCYbW6Y9ddSZ1itFWBUjMFsSSeE5vKRAdx9GjrkHMkSEcJMyikcZRYA1eSkEYevDWfMgD",
  "key15": "4jzpoZ9fh5XinBasJLeMtdmk527jMrNvWT1r7FiFn7CVaqj2KJYNAX9iKK7F3y2ryjiQVnDge4HysM9qG6J8jjEQ",
  "key16": "3dLGoD1Ui22VZKRtLy5ydXjzwZ1amMZjY8rvuEMtshRBAD7oh7fFWqLzyFSR2XndeVLBoxFHto8ThDMxWdfAVv3Z",
  "key17": "3srRTCuJLdPQaF5xgHvnakCyLbXzK4cz7kJpf4YnnPW9npBnJswvTLgDNm4MhUWFvg7PhnKKWyPhwYo63Ykr636y",
  "key18": "3ZHPhSwqsaZHFDVrUDxx2ay1zd5SXpbPoWTe2toPL6EXFZKFTF8qt9Hu8Ld3nTzpzctXyyScEs2cedxKqEwv63Wt",
  "key19": "CcTFXDXd3S935gHTHGTgCiegjqfx9U8LRP9KCco8MvsMZAAB6UQ6ohEdkrFEZzGgF2ye3nVqBjwPJBSbqNaVTaS",
  "key20": "4e4dJNo9CM2jMEHYUGMdTZ1d5eM5YswezwvRMbvt7tcebqGrxvx7TLtbMA9sEGftTRcCJByp9nXzUuot7zfLiQxC",
  "key21": "4fT4HKXPrK29teibHRmt3axd2J6RF3ApQbhVApZF23pxJguJ7NwKciCJej9XEq6q4umb3tdEibEQYonDVQCgS8pZ",
  "key22": "2aTrTeyxYzZZYqQe8SWfkgAMRcGA2SGvwbG5s6jys8v9U8DyM2XBr5qJABUwkgtN57MwLvKwW2sX7xqukSaQ34fR",
  "key23": "BPNc3u1xLtoTrfM77JJnJjt9Qoh8nkTdGyDtDbugQcmw2gTR4BPwXGdCpB9UbGYXQ5u8R1gBN52t6hKZ7hNcFGA",
  "key24": "33rBdAUwo8R8aiBhdAt4uvda4XmDz4fQ5oM4hQVJnPyYSd4Lg3UXv6P62NTdH8rnvkqTFXJJ2CSb5ndPG7vDdEvX",
  "key25": "2Up98LoBgkHjLtPjuGUDYdjvVg87DwNsNwJnCMTQ5hQMKF1KeU8whb5s5YNY4jTpn6NRKnu6LRom2vyvFoixCA2j",
  "key26": "5x4CCRFzpgbS5yqkBuGkYoVRReFyDR3eQVHvRS3SDU5pQCpV6o2QtiRBZ9TKy9XEmdjGs7rRKy8vVA5ixdeZp5Lo",
  "key27": "JiyCeDz7czCqFABDf45wsKXeH9d9yJNenT3mBCBudYAsLaXKfM6Cw62rCKXBKP6nM4FvRPMQAyAWJJagccFJXqc",
  "key28": "R7JEReZnUQ2AunKHcBKKuCKmmVqCvE8hGBTQoeWVitGHFNUEaDCdGwdMqpB3hEFYSJ7c116EX2VssubmMQ4gFCF",
  "key29": "2ETDxdP2GoQMV9GvWMiU3mv6WiGuTZG4QitbFpNrUHfCsuJdriA8VAokqWq1vB1TJyWfkcPbF2oGATBBLnDXMmjS",
  "key30": "QEPefj6Zh3z57YbYT8FHvAAJUDePay7wUgnduTY1AYHvRCjFGviZ4ad1NWggc68EfWsPm4nmA1Ey297r6ytqz2S",
  "key31": "4vheA8rd1XAez8bDLjFALqCqp94JqconcydBt9QGjvmFHTik4hpNwSaaeLB3fKCMNg35FySQL2Y5D17JXAZQET71",
  "key32": "5rdPJTVHCyNtiUUKvs1UwUGKukmSWcG83TYoQf4NNRgkAyr6WMZN17hfAZetV1cPymKu8huG32m6RpjwPTZqK5GB",
  "key33": "2CvuWqDbTGboqu5UjVN88aeaQYiaKxvtNtwzYnsVV9KBq6LkE1obz8KjMgPW9nTBQcQDswfGb6KEpCcKnnZMGPZL",
  "key34": "3ERDo1wJJ3QtVU5hKZian6EbdycuiFNCeazS6t9p5MyXQBGTqcPBheyGAv9ZP59z2tSozpsCHW6eQsGX779ZJfDB",
  "key35": "3NGvo6fnyDGkxRF8C64PPwngnfWYCUfoGBAQNsyyGp75bgk1ihnxTdKW1GUGMR3NbtAjrnUvxhgRJnjaNphVtyQG",
  "key36": "3p3RGmhbqYcdaBLespeGR23kEKCdmSKdmqdkaqUqRpHKjQhoFv1YTtSfGFu2BZvLuiNPp41oYgVTxzErvwo91MsE",
  "key37": "5LwmEoKbLnzN3GNdenQWMyDuejNUaApVBD3XvQwmvVoJYjKgZ1FZPuD4SPJzB7Q78ELP3JjYzgpskEN8XQifcCwc",
  "key38": "5Hz2S5SpiSXTK8KdiZsEEnKHgzKopj6t5cPMWzLipVVXadPghQ1ti6hYY6QzErF7sPkTvFYAPn9UT4szPppSf1qw",
  "key39": "3hrVmTAdB33oP4RWV8mi5unFguQbjwJwNbHjr7rTh7L12HiXXd3xkWwaXJBYLsuwg9Uy6zjEWDkUNYPg32YP45QN",
  "key40": "beBkpykAap1NBcv5i1a1NK5cH3TTt8xAN7DdkfGG3Emt1qrzhBeD6yuhV89oEa2ZvgGAcGQ5N6yc7imvQjxm8ez",
  "key41": "iGPq8cXVw3AXjQj4bJgbLihjJDvQb8nAQwpDmpFebcko2evKWPe7P5aMcdwkctuP6MWXbvjcSC5iuqLhFgUUBkq",
  "key42": "53sVGZb8t7eX6EZToc31F93528KrKiZ6hfNjj7LorLw3WLkmtbMnarHYtxenJZqUo3gYrUC6r5rtaskFZuytaGgn",
  "key43": "2LEPhQF6UWL4KKVLZ7RoMq3RSCEQAqq8yMTy8wZiANdg3Xymgv9roGEvqG16qZppbRh5UzgpX9YQ7kMux2CgbVjY",
  "key44": "26DLJTq1hD4mipv7Lhbx78oxUyJqEJ8LxHEGNeYoryRbWPFzunni51TfRCZcn7ug5hEFCFKJ8ojbXHzm1aLwZHwQ",
  "key45": "GgETmb91xQ7KiiFgVunrUaAs5v1GfvWLz2LqXgnbmTciavtBvkp4MPeaPaqKGc5H7STw7KFyXaYzyMNRe5H6S3z",
  "key46": "4dvCYEHbocB4qsnSDQi5spWUgdyrYLfru612M8TCb9JaMKM7AN9XLnye1h4WqqnQvh8429hUkVE48vCmQ7xmX969",
  "key47": "3r1jC8F89iMzxRw1GAN5YmuK8hRbst7MALsJZLd1fzDmAg2W1vdw1NjUyA3FUCt7Fz6nECLipxYFc7ZRMfhpJDEP"
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
