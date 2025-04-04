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
    "2mv5kt4xajW4t5zmL9bmqERG2HsrAbqkzf1EwczwkAJXJWiaBsVVPMeqZfqGGcqioZiAuZrnPfk9jbQCc5viy2Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1ioZ723hbtdv2YRMM4vQ3QrVGihXp51VCqpBUo7w43JPbx8ixqfJHHEf6xgNzF1bRKXR32vgupG7qLpFCG4x1G",
  "key1": "5kCWJLeVzXYo8Qi7KNfbGm8Tx6smCh4HP3ZgYT23kMC8rsndFcBQ9amQkx63c7wP9GaDY8mKizbeHGVLUyi3gigN",
  "key2": "knKLW4YyiNNZrPkTUReK269hiNtSH9Ky452T35GmkzAjqBS3MYYKhChH8zJYYAFmRUGicGDKrs7HpQsC9CtP1Eq",
  "key3": "5pUEYNGRfWucuNJnzXZyE1R3zBqgXSoYkNCup2fA2axMwEM7kzDK6tLohP2a2zVUdA9G6ux8BVog4RSzHQs3C4FM",
  "key4": "4XtB6VitAJ69Wps4S5hfrUbykzNBWtrvtQ8zsnvvBf6P3ZfxgJgXjYTAFyuEHpLUHuSEBw5Ek1anxsLCL6C2CVQZ",
  "key5": "4wrV6xwr76mE7W8QFmpVtCJcUC24Q515DZXbkcnm3imJ5BZUH3hMkR75JcvjV4z7KTFh6jFM2qydoFpi4Nu9r6L8",
  "key6": "2mLSwobVPXMGtwc6BkjgzDrXWWKEJpUQF3FtV1mapHPaA6vgrbidGaF9zsHBS7pnyhJkkc3qoThbqMjea4Q8L1nt",
  "key7": "3e46P2Gx8YcbMdjmbQX4hwpLxwNS47zjWwDk1GEvp3stkZsH4tNJa2CwXQnNpm2Fox3j3kAXfLCD6grs1PMJoH5T",
  "key8": "3ongr62nYJ8v9nThCLQ6V8YvCaEW8YE7XTMckFx67LabowHeM7MvF1SKDv7RpbVP7u7w6PY5jsiqZ7ULYCwSUcN7",
  "key9": "3HZZPgDowA4Ze87116prhYzu1dH3iLxKbcV6SV1UtasfMw6C8J9EbojLKmBiDSqZKQf1Bb2HovPdrGowPyX6ETqm",
  "key10": "2xSnna4g343DQZYbnP4GBCF1vphBeQpkFwPXsj4wGgpZvzYTU7TrR4gbFQgy3g589KCutpcAs3P3zdFt1wZd1fUr",
  "key11": "5GV77iFxE7MQMmC9jTXMEDn4MdzF7DMmJkmuRg2mf4WVowbrqLkCJapMSJD6QyBB1UuDN4VNpEdHTpdXrqKpA8m9",
  "key12": "4tbrS597GPiaSQMgdPcbFn7dips5jBzUZ1FsKML7KARWUNEr43BjHJgPXYWBt2RusgkktJJP3KDrVpiJGZk5Bu8e",
  "key13": "25JKPxBBXtT1eUTPYVVWJMmXcx4JBw5sNeRC2cUxdy4wV4qVZfNQyR1zgk9MBJnYp1c3PwbLqARCZjzgZPf9hVZ7",
  "key14": "5V9LKDfu4V74gx8pG3gKHmrS1bsPjU9FVcyyzwLJqrDovWpwMfQJVGvLgb1rXMHUCRGK33boQefffqBwAq9g7Sdc",
  "key15": "m8KKEDDkQnUHDPW4Zxm8EY2oD3mes74KZXEF1SBDwUp2zrYCyqeVjvW3cNAphLirUJ2KEBPL2e97K9VBeqnHJVd",
  "key16": "5KfswcVhmU9cYKCrqcJjyGb1hhZJVFDzbJ9u6qC2gJcjbKYjBA5VJUjzhHSj55ioaocjcvPdxpYfF7Pe28tV4t9u",
  "key17": "51oxsj4BNr6PjCGTH5UkfTbS7n55x9KHjUMBzJaLeuUyeDcJiPPERLf35UJKheMp53ATtgVdp3qCmFr3S1EPmqMa",
  "key18": "3VpihiZyM8Q3ghupNLLtR1TSqqnWmq4Ck9wCrzKgFHJrkcNikRkiRq2dCqxGGdJP9wHVqHzicps4ZeQAV82LRpXu",
  "key19": "5iUZg3tCZg9pt4rEYBw7CzRZn9PyuaPhzKMm6jqDjpr4ToJk91BcNrxd1HEo8mZEn8KJNHPTzeEMDzkZfyE1kST3",
  "key20": "2SgX2yutR1Kqe9dyocwaBUsh16XQiH8tJeGaurjQkXvE8vC91NcnnFY2tpxs3iqS6pZaVCSNcNxM4Q58HHQSGVp4",
  "key21": "2hFuVLqzz9ch4zweMMGbAsX6ZjcahgZXJv9EXCv9RntC26toUnKvnpj9fUJxaXEPYFZ8yjUDDb3vnMUojH5CDakA",
  "key22": "xZrZhyEtMUaveRLuaQsGwbPA86GSwdEw1iPQvUEQbyTswFyhQWoYDuT51LGoGdfEAGAcoVZh9iV5vsjZNaAJY7K",
  "key23": "5vVJZ5ZUvXpCfTXgMkFvApyRAvtGPU7YRnpU8SiYnTxe4vknnJXvBaHPRBqmFqvasgWvpB5RCxZ6N6BMcZizq4Ji",
  "key24": "4mSmcjC8NJ2egnFt6DA2hXimqtB9AWLSEKvuAEdL2JA1pgXvECZd3DzY4i7Y2Nwdy8xTySRyWjKWYU4zQ4EPQA5e",
  "key25": "5C2Q8Z2Dn3jWh7AqfbhwRvcFTM35pCTXk6HT5i7MDmqsFdjGP5R5CC6LZaRKNBzj2WvbL7HRxPDYwLuXQA2wdZU9",
  "key26": "4js8Tu8wFiMpvmBeweNK2dUZGyXJfeg1bUZFafjnAC2UvvMPymLRvGdHVUQKnHuQgpEqWtgxZ464eZJkhSUwK6Y4",
  "key27": "27KW9vcXj76oTWvrpDo2NSmxBFBfUkZxGrAnNw7rkDQ44rLAqZxPtURJ1JoUbnNirze5jKAqL4LHXENpX9neA3FX",
  "key28": "3V9eDpByCPBkbrkEvfR88h65VJguwVqcx5kNE7ZKqqStmkBy8MxgmEXMAaGVvgbRzwNtbAPtRPhhLv5YrW3o4THp",
  "key29": "3PstaTkzmXs5WbygcAsaAtc8MVEfSwbm2jrrwmT5wVRRj73gPkeKsVuvgyz8E6MqevA6qQ7Z31XMyYGfzfhEVTfH",
  "key30": "22jN6eMdB2SjTfwxh4FqchEobYK4PeiFRXbafEMep6Vp7uTNGN71xyRoqLDeSsEcDTbwf9f9SXFkTUsDqRMvUcUj",
  "key31": "5cx1TFGaynM2JQnkacYfw4oTqmQY3tZQE7vBjaUxrkXWnSAqvXt8cSd6nTTsKuXReNw7yUFAn5zsY2SNELKtuTGe",
  "key32": "67Ckufwj5bPnkPcAzkuQt4kTFjwKFakkqeBLtmAvqYai58nn6bg8eHmPvCeHDak2yEHeGeSLoXScVf8ztnmhJgCC",
  "key33": "UdLrF7WTcoY55YC4urvkpswaocAoLiXHfdqhptrLsGeDSbt8FPBy1wPUKVARv1pCTD9aehreSWHE5rRwmY61bHr",
  "key34": "41jP4gEQ8FY4x44zFNhqKyL3GuA7uv76WdBMXjsrE3umvzTj2HboqbkQXioQNtdvdynoEzc9vaj2wMDbfWHtbSrd",
  "key35": "WBRyLk7mTzS5zj96S1L3Ce92u6r5YbMmSgNmuAjWPMTExhLPQdwHTRfxRzSJdqrMyfqYA2qdJzKV61XmqZRRumK",
  "key36": "2LA7Eh51nJ51GTLGKxDfRGfTCJT5RQhBpoDvCYAJ6jP3u8uHjxtZNyfvtiQ42ykdHToeJNRR5ndJ6ZXcCrr2aatH",
  "key37": "2jmLj3GwJr7MXieybzaDZm48VhjmEnEVNAQCLQcNvZAhXb6W6BT6s7KXWtY2KcYTzuu7coaDmFFK1TJ9yr17dpNs",
  "key38": "uNwQCgSWsVSbFzssd4mVQYSTa8QBu9JH12ca6jCsuGB34UaQ1WqpSLmdVVLLQygfCHWqP3MjxUSkduPqHnWsbSt",
  "key39": "3bFxWAXC6fasVHbjVa5gVHAzmuhae9gu3sXQzk3pnbgv1zS35QLfKnMpNpnQgR44gxJe2wRMAgGbBh44wisqzkL9",
  "key40": "56tYcEDhvgNVrFAFVj5iBNYwBMfx2G3S3mja7khrwULfW9LMFNudWyXiU8QK8dmQtTkkqsaSUKphQ8abnkWTToqm",
  "key41": "4ThUtsYGsZ3bRyW8RK7PRAT8mNAE3zG9G7iFTfYyq4Q6Fp9RMXaZ2FoGPwy18AUd8bUk1cuaBXCcsiVWbA5ehd5",
  "key42": "2LDj99PbvRhVZCAXJd6T9MLKZ5PYMMnBbjgrC8ph856ByBoYSXTsSCwu63rYuwC8gzcv94cTh32aaAMFRq76xq7v"
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
