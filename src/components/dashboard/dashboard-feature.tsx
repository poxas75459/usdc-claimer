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
    "9DRHcbXBDHC4QtExx382WjEcTGwJiBDn5YGWBapxnzLrw8T9oq8AEA1FNLeowYF15bEVYrVbm7SVvrpYo9XtAMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRv8HuAaj7iiVfWgb6ey4P84ND2Ug1dqAgpQJNAJcdXSAEoLa7UVQTi7FxxNBZxegd7kCnozvscf8mpc3CRDiqZ",
  "key1": "5xEv1DymkysLMaRJEZRBqiwwJkEA7MvNy6NmC6mFMvEhUdtuQFp9fzarqT9KbRhbthqR2FQ49TxpN9drk6AEFx4N",
  "key2": "5xUUCN7vUwyJCw37Whwg2ncWSDHLueEDw93SkDQTw2m9VjTZuvpkt4duMutYp7nwRpzMW1oB1qwKf88kVvyjV9b3",
  "key3": "3eN4gJ9iLptLjcT9qezXHT4oq3DPqGGAq8v2SeVCMvZHTZLztA5rx8Kt9dKajgMLBrjFCAstr2DqzpsSFv1n5wwF",
  "key4": "4puVCVHAUFuPxButzU6xpBRmsA92fr1jHjbQv9y2pzEeJfzjw4jvWzJ1bxunB2vF8x9qKw3zJUNbsQVUAfvaKje9",
  "key5": "2CMQLjYL1dyjPQsQ6rx84DqqGT2hcMXANweDBFAwCVmAV5qr2aVV4jrhhqY2NW5YoxyFjfoVGPbyMhdyW4dze7f4",
  "key6": "5RUeo7VSFN8JaY4kVNEiWYhMFLzRqpeAQ2GBPxeXgPwTGw33FvocHkEjAmAi6FAQ4N5h1XoiKu3JLgsS57HV87SD",
  "key7": "iRfXQkMpAPTsxBtF6QhJgTFq684s2UaiHwqKBqCDYvgbzJneZ8HP1HwNdovHTiMwYRife1WLVgPtM4AJM4ESrf2",
  "key8": "2DwhMD7A3JTVvqC3ptB1GpTR3bnQduu4dF2gxSEL8pEUPFqvhu64AzJ9T3r7MRYkfcAgL7tFLGz4dZSFx9GoftNM",
  "key9": "A6S9ToKm2fb1ehzS8sXAj4wtWwiHDhSDe1AM3C8aVkdwfthWGWipD44ZWg8h1PdL3LcP5wL2dF1b1Ejp1TQfdLr",
  "key10": "xyc4f6KJB8Rt22JUnU3EV8toUkvzadkHtzY5eH17AwJzHEPFLBydBiL7ibMZwhXHvhTb3sBto3Y8p7xqt21b34G",
  "key11": "5GBD7DKDQrkjTatnv8df32DtjDKCBKkTzxnMPUSvoEXu5VhfFXcV6U7PXRThyNmja4J4MQmA3rYJXZeoEm5QVuN2",
  "key12": "26kCv1yXJCet69zTvw2u853ciiYvnjuifbnta4gXrqf2EgcPApZKgtStBLuWh2M1tQmY2o25Uy1tsiRF8GADDYRy",
  "key13": "3xRKU9eqVKaxyeRZf5yu7M7zXgz6q5GdomUB8eohDtSQRVw4CMpugyVHzs3fcwoEkkk8aBhRqcBceZyaw13MxYTh",
  "key14": "2MAmpPGa9nDNX6nFWheB7CZoLcN3yEkvWJNVEsm4wr4rMdd85uUBv9BkCai6uezRc7jKwWeVEKvpitiax1D2jnE9",
  "key15": "5HYujUN6x8HZxVN5HioVFZjQs6fgj7zSRNShtQqhhTtcHGCLLAaRzgZUJjFUJXLkMU1b1tj8XUpasGEbMkaPk23h",
  "key16": "4XiF8TK68sab8oQA4TptWpCwpAy4tEZND7H1WkwB48aX3US8HMEDNDH6G7ZBwGUoEkKKEtz8g1E4k4s8NULcRYcy",
  "key17": "3H8Jp9QS3SmtfBhnoxmn56eKQigfVfL79bju6yA4uVJ6bKoD1TvzWevziTShp7rizycy4rNBhL6H2EMQm8La71WH",
  "key18": "4L541WDrUqsdcntiSaUm5uvEf44gQ8QB6ogxAtvDSJX7YsFa3TtnHcp8DZoj91aSMVMfPajwr5BM4Tp8hr48ZGK8",
  "key19": "5tdruL8hjfH4gSNtRySSVt9JRFpeg8FsnUKFKZHsAKP1cfo72Uvyk3LZTqRxAxCswRKJbasveZF2g67uq9dr8SJe",
  "key20": "5iFWYPPgo5wd1W5uV33ahnJKGhSXs96Sp2q4yY4DTRopvPoCa295QD1NWafdNtDax9aiEQUgyCsmL3RED5T6riT2",
  "key21": "3wVMApuDZAiqP6vFFXApKwc4ZaEAZdgjSfHwPL816xeiZhEDq5T344a5U2NXHdaRodwSZaGX7EGgjayxZ6ofXJi3",
  "key22": "62wfBxsQgba2unDQNjbeRgqRzMBPUvEKzHjnsXtG9QWLjXRCc1MULUCZ5k4p2bomQXYXMuEkNrKrdPA4egNc2QmP",
  "key23": "5Yemy9CwyXJFbCZU1vY11s2ZkJVCo1Mm9mjT7qj1ADP4icEvtT4gSXxB15ig7LTq3B7dpqVsdVW5oGapxCTr2mqm",
  "key24": "3N5B6fBsJe39Lsu7oUuLJDX3UeaocnKdBhrDv9QA7pnwxeKticjWVYBerpVJMsQFUN1qda6BSowJzUyEgRBrSTT4",
  "key25": "28Qxk6WXWAK5qpraqkF4YuLzxTfmUTd3L8wrTbPqwtYob5VnfkkSrom9vACZYpBiVDxitprf3LYW2tBoiPiG5VQ2",
  "key26": "5mP5w1ZFBjUhE8co8KTsiRkdsGq1ZqHBH941e3bqyBNvAxpiMrKPY6mTKuyMLy6KvyacWbnQ7iKZs2ZhzQsRQvzP",
  "key27": "36TcVSLz5sBmEPuJEBWSY4WLj7QujuJbjfWj6uRL2SVVPuSFRoq1MTGwZ7FrpeMee7fBdwN1cLiELcVVgmwRxpoj",
  "key28": "Rh9vPQop2VGeJcYPunhGEZ3F64wCEYEXYroYMCYqcHo3cx8r2JKf22N5CKPDkhTbVGPqtd3gjvs3HoswK3n6h27",
  "key29": "3bZoAUW5ZmhiQpmyfdQT6zip44JDqrAFvxaDeuCMNdWeGrnK6nXugVWv8Ucp2CQmU5Qfw2zVpYeAqCJJ4dmTRu6u",
  "key30": "xF9rNXSoHfQyqoQcuRQf4dUgFceWzPPGoqTaVbXhTbUGh9HpS2G4ju7x3srcwQ5MAig33Dv7J4mWUfrJGuiqpUD",
  "key31": "3cJ6rcYhWWq6wKLgzd1rd5oii5Q6Y1JLwg86nkghk1LUkZrqhMtbShhm8i75q8Gwvg4XFCB63SzB72HLkYnTJcav",
  "key32": "2K9atv3AvYtHTTMfABX3PmUGzJK7xUtoiQspUiNFzrVeJpAZo23qLSeYaY49XrjtV6k4G73CaKDGGibw1CXwuy9v",
  "key33": "UQB6itBPtTY22eNZyYyRtUrckbLew4cvtxE9SRcXhqzeYJJXP8YDX3HSNMWWUr2ZTzBzXBeM9aPZYsuotVYQreu",
  "key34": "2dmNHRBSwZra1iH2nfBMfWeHSiUGKFfcj8BYTVvikwEG7khJGWzDcDXKANEp4bAQ8RZyhVadN4wESrbmSGxvoGuu",
  "key35": "5u6QaiWYC6f6LwVqskh3iRbjszrUkLKCUnruYCLHsr9E67LQZZ2SRocKzQUeJC2YaR5kpgB9eimyes8GxiufWPR1",
  "key36": "3kBFJYJKmedgSWE95mjCLNzjfvZgUiQk6XFARjSgrMAbrvCnE2es2hERmV1KS1tkBBzaqoX5jAvB3W87yq5AhPyv",
  "key37": "5SW3ps96nyjJwYKkJyam9HoFCmfoLj3mDgVqN2S9t5xzTksGY8NPri88nZ2nYtkpAx6PKsfCyRXiqRNiE9gBsYFD"
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
