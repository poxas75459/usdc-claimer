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
    "kQdFrLY6yWhPyGZ5g5bVuGuEhpuhS3CXwdDDp5cDHPucAWKNccRWr6i3WK2NSfYVaxbHYhXd7Ge4x9pFeEMgbRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VFdsekAzx3DWqohCggTQExUhTQm4cvFfh8i3mbThYwLN1xWw71mHN4ZMxhs8egEHqVMeywgfXQJ43aV3sNbvHNw",
  "key1": "3izgnhgcFS7r3DnFhsfJZza3Mg6YFt3ka3EV2GRqM5A7ZsdtRTNchtQax5Rz9jKTDPtdx9ZnL7eFWAAhwdGtegtB",
  "key2": "24JEoQXSiTrCdKqAdZHhz52MieiUmAhM5eTS3h9R1FogwVAcnQ2FTD2GXgTnEaYTkACrKceS98Wt9oJ82BPYvSMq",
  "key3": "5HHxiWX5TgonUSu63wS2T3sKNx9cXoWwfn4RQj9mdmFUFj5YZHp5ErhJyN6sCtjcYXeZcaZSNwUMWqgmL7kVWgen",
  "key4": "4569AnRaCPs52xxsk8x33cfrM4uAcVN8nLPNVtnLfiMcSEd2xPrxJbsz5BzrBNcSM6hvYTU9BmcYbSJiG1Ge3Tfn",
  "key5": "4iCfbK5vwKfZF5okiodLTNx4gBsGfucUaFVT5JiN7exGcRigZMrpBiuovCt24YAurNGN23tAoGdHojZx5QUwo1xN",
  "key6": "uFfYxiQH4CWNrfn9arGBAmfkpwCzDS4CAYNYnRor37nqxHRmMQ1e9A2SZS7qYo58evk9PqfTbBProUPtYycaz15",
  "key7": "55XJLz6C1VedCZPjRLn84tYYBvPgrQP9kHv1bxc4SiGi4yKKJ295PmJmnk8ZxLf4rjK2F42pHyLHJczeDiY4DErF",
  "key8": "2UQvtd79qGrW2HPFbeMYyvwqsuLJm8gJvw5nyUCLFg8rJpPMkVFDGhq4fJGmGdQwvj8h798rWgMfKDG7jgycDkAT",
  "key9": "4uGCTKmtrcn4obqWMiWcU22yFfqsbmJa6wRzR61MPJK7JNaYzwDojrzgqmuEuChUoFabK2BqUmzcBcTw7QEJzKmJ",
  "key10": "5FQNBbdNeLSr3a4QDJiAQc1iUwWh85m3GezVTo638z42zo718m6Xp5JUNcceMVUJdspiDHnh31GSpHGnXVosrn3A",
  "key11": "ncSGnmCtpurqELd5nV2nY3jYPYM87bDj1N6wMurJdyNoxLEvgKmiG4cwschqye7sUmorpv9XTCHuco3c578Pfc9",
  "key12": "58L3v53EVfwaauWGsjmpx12WveL42tYEaXXanJFS5wDQwnznfNqStPtYdGbaAHhEsTykJbTjDDcYBCo8Ehp13FUB",
  "key13": "3d5huTe6eepiFhWigYTRgk2jXo3NYvmuDHEgagnSWTWvuLQatw3oYUhZZRiRbJyFkNNnekcParGVGeFaoqzR2CGx",
  "key14": "4VfrWJ3zKqdGdxFzRa9Wu7wCvtiEcMhTk2UfVNUfcrHa4e9CuZtrZeamwj3GmrR7HDDFsz5HsAoDcAam2BRCcCfG",
  "key15": "3TT2aG5octaicXLi2vq1xVQFDB3xPc2GqvTpNv3RiT9b4sRs2tzn7RisBf7wpUxg2XKiLRQRDp9guWiMB2rwXSep",
  "key16": "2BCnnRPqERt82Z6o7Nnuno1p1D4iMPXZEDRE8j7d7JwAotNnZfcXf1655MiE6TjyssFMKZWZ3mAwuEP9qSeYzeD4",
  "key17": "5Dbav1agQkQyHbzRpY2AFqqqag5n3SVmZRDxiycTGkrts4nd6aA3BPUYBNoynVZtzu7YwGUjHFE4FJE1mYxHmT7K",
  "key18": "3XMmqbfvFVHXGiA8iZST38YjmkXGDsUkFx4TkdjpAr72MLoFv9e1ifszueVZ3xemzCrmCJHUHKZU8ejgZ61nFjUV",
  "key19": "438xu7gjGqqEhSqhMAcWhDvF39VfttULaSCbDo113nfMeUUSVuFhfCtB3ASrz3iRSxTLAJHY1Ncnh72GyZnk6Lnd",
  "key20": "54eWW3dCn5mPWKcxhbRbVfmYfiNdfRByFzLE98qvY2y7i6nXSotYjpx63avPTVE8SUWW7BkHn3qxTPt1NiqSvBE",
  "key21": "26KGRBAuDczXFAuYZYYpqTiSiNCmifBBJKHezALq9ZqV58cekwhxVPPutqpbTNgJ9tWYJmAJ7QmUGX6R9JzsfeyG",
  "key22": "4BcavgFxDRY5T7c2EtNuXcaQScpERA5hjiKZipfM1eEDCeR7BFbQAHXY3EoNkbJm5xesqQCkzRwRgHaKmsiDSuRm",
  "key23": "3kcLw4y5UynpA8GZZzAGGwoayKE2YHhScTuTZBanYrMhT7UfPAjMsjFboQyQFFAVhxXGLCFYW2kSckZFMW9Hhytc",
  "key24": "2yCmAAMAGYAbd56zQaut8xeuPm318KJz2zUFhhWbKwgzW7nKWPiEWWRG6tdbxGRxVfz1v7iUBnZcyk7ojeLQ71DG",
  "key25": "4ZB1kmSYU45p8Q36LdQjkYoof7a5VpLthGT4W6qMYLV4asLC7NvsittMaYovnQSdAftfrUufPMyFv64P87uMU8Da",
  "key26": "4VcugvcJFpabGZS1qriYmi7xugTPRwWpuiaT85DWrUsxuR1ptKdVEN3W3LGtojcjYeJYmyqbpeidJqLVE4LhjqBa",
  "key27": "3YrL3YMa7Zo8MZN9WhLtba3Lj147X2ddnQcChdXatEgJQ8z8k5Q2eHYs6uktAvTauGyFhxFpwF2V25cJVF8oJAYX",
  "key28": "jeDPcDYcQpr9nxAsKeb2gNisbfwCfMeA8TrAhiZnurhTPhxe1Q7kDngDh1b3t3YL6EYmCXoPa4a4FdgMigQBHHt",
  "key29": "523f16yDuUKWumkKeL3uRwLXQtZGhg884Jswe7WHeQEEHe9WsUNAUviYVKgvu162hpVhQ4rQvo3V3ECoXUGWMBrd",
  "key30": "5H1Nibo76XzrACWHL3PFrfv5JL9TBckF2bLYioJ7eCejmdPspNLpdQLwijBPmnocGQpoXSxt9vX4nXv3UhJRx3xp"
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
