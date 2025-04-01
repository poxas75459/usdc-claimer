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
    "5tTtvBMgCWhj6Eg8fCDXyCg4rAKKPWrmTSwUnEsuZB4TCfbQaJc5syWspdUbpZX5fBxaK3XawzHKGdaX9Sm4T3Cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vrbiyXJvWzkUCJNstwbQxz2ScQVYgPfVHmzRSaQHfkX2mgJpM4vhWiaNfBZbo5QvbrVqksdQ1AZMeR9u4hYaHUX",
  "key1": "4a26aqGZf99SBNomy3ep6HsuzPrCv1KaQQGKEVbQLNs1HXgkhJ8WCAxyv9gPrNCkEH7DghEMiPQhKsfT6zqjqJYs",
  "key2": "5YdzJ98hHRVzuwF6mnyzry5toqQxMPatWLb3cgnDFjtUPjx3g5TuEf85bksBvxrktj1d2GhemCXw9KfGbJEL2sXS",
  "key3": "BPVsNdWfqm3jhcULSihtcDwUMBuUXksudZGmKms12XGhN3dM8KXmr3D4n6LB1QBjTJ4Qm5ZkajqBfKzAv5CRvrV",
  "key4": "4j2SHRguRPzd1ipbPLeQXvjCqCXc52Bvm6aEHUxgErTCT2DLCd2VnQ7EAHdWJjYJr64GCggVt5ryfUGB1W2MUhiC",
  "key5": "ruU4tchVnX6ZkDNPC1sCCYmCBnJMdsx1yDEzxbdTGEXzacgMej14SGjT54kA2WZdg2mBUpC4gEsVxJ4ad1xXmTB",
  "key6": "4YUCvcprYC7iH9pmk1Mp3ykK5U3HdeBWCgBY5imbMfsNB3Cxi7kEkh8u2v1DKXsRWzpYfNi6ATZxAsadvMfPSHo9",
  "key7": "5kkXtNoYdLrncbs9zYxRcqzZ31xSX1u4jQyt7GjQEm8U7P9ShuNRPm3yyWFVh19Dtq7k5TLtckk6RraH3rqqegcB",
  "key8": "2rmupUZP4o6HC6S7S4XB7JVNMgRpr6zJuPLT6PGKLbYBZwKkrBydWMkCFso2PMjaMPX1RG1JRwdV7dzcSd7LqJLb",
  "key9": "6eUE5P48JUZrcZdAskxhyXvZow1xHD7c1JtBsnyTfTTkL7pWfwqjQAufuSTamuKaBrVWfZyEU7Nk8beN11GvCa8",
  "key10": "N4HCEgg2eS26jBLL9gQwT9KG1m4e83F3iYqsHVWio2fAzctQeDZJRb4SbRTqUeRC8ijAz4nYbctToeE2ogqSUMe",
  "key11": "p2HEv5JygDZy7DDAWNqQFwyt2Zqv8tUnER4DC1eqp6HML55HAhwTkkgsD543BaK4gZxQkdpcywo7BqidJtxpssW",
  "key12": "9oVGfRZUBQ3f66C5yhdrzE9px89EbRiSaARhXnNrnKuQyAJPQenx1zjyjx6w1wMvdZuGhtzUNSZppMe5zvavVnD",
  "key13": "Abw3R1eePa4RJMSPy6AUhzcCZnrFMbmv96USsA6PDbxjyv3sNd8eximbXAjhSd7DHb1EE7uKCvR5GbeMAzYCeNk",
  "key14": "2nfUC9nr11rfZA9KhaFa6Hp9DwYTGHs719zQv4TqCU52w589zTjNKzFdBbwj1URW3HBJhaFeZ1L7AnM2HGEMrCyh",
  "key15": "WinzEsVjLoa1Lk7Xct68xW751w4HkYZCwbKXPcE6Zu7UsYARz6yn8b1JdTBt2GZrY1SEqBUta373kYHb9GukAtK",
  "key16": "4UMMXq5nBEiBieJdohZXBPe7g2rLUkvwchJsmnKqdgUa6oJoJDFABZjKQxNdkPqEXup5Ug7NUAfBNYzb9Tkhhr5u",
  "key17": "4WFNpLV69mMLXboUppmRMdNBBPbKfj1VCKSF5t5Cco6QiDjosvohRuFnFj6mzLxVmUF3MJbsfsFEW32Q8pweX1PW",
  "key18": "5PhBSTVftMFVynppVveZM6fuPStZTAxhB2bxGicrCC4EiZV4seDRgqoHswsmZPzLKkuMHVogaj4KquvUDRvdK6z9",
  "key19": "hsKMZaD8qbnYBuisC9Q8K3zCfh57S4ssjCoZL3xJ3ZbTwJthfGA2rLdj7WNZ9hrYVaArRqm1HGLbt1K7hBLsPUn",
  "key20": "2jQMJuHRPp4wK6UV8ZDVqCcN6k7mSZWxgrUEzqF9U6u8q2uu5JhEFLWoEsNL5QiUMKPjnSRKL8kd3TD5XB87DaR4",
  "key21": "BnBphsW12GxcSLTeYBdmbDBMHTo71dyJTX5DMhyBZFXQsMeS4Tn2262SkKfx8Xzs66MFhisqHwP5w15bp2q36Eg",
  "key22": "5h4pZVkVXBDdHz8s4BQSrm5ywbxF8P9QzN2PZXy5bN6XGh97ojK2xqCbevSY1xWCwCtEDkKLL4Pzr9i1TVkY31jd",
  "key23": "qYpDALAnzi5onKWpkdMri7n3Kc5QeHvEd8GViXDPbcmWg7TmvfN3gsBLSDGvk5CwJL5UvbdqpAQiiRckNKHbmLb",
  "key24": "2YiBG4tSUyNUzxuYH9WfUQzasRk273XUCsKnxeiXjNmw3ui2H9P1CvXSZkKxc5NMzo6bpE2Ahc5CC6KF9NghgHm4",
  "key25": "4GEoCKkZG8w1ozzeB4pT4ooTsqccbQnwwyqFu7wM2abku1j1UiBAPQtUJbARwxmLXzbvadpjq3zDPEJvx7H18WUQ",
  "key26": "3FYvnxK5YrP9gNxQcPUw1nQRjJaha1dgDEDPZYsobbu4K3gUYYtrHRvHc9YntAg6ewgxCh6uKwqDjzEW4gW9gyYv",
  "key27": "3HFrmnXGgAiamLxHPYYciLi1RK2uKxvUZGfpspaXiQMLMBM7M85Lw5NQGinnuKhehESKwn25PPcf5x9QgEvyYwcw",
  "key28": "5rpFgnyBJeG4KoBVZ62VGW4Trc5cBuGe2hAftyBQDUB82NVmoFEFGw8R5mMt9j3kZdvcPNAzVPdskF94igyZY6GA",
  "key29": "4YZBxzzjTmDtFhtMVPUUEF2QEedFAb8Uo5vX6W3QpVPQ88iJsG6Mn18CxtJHUvT3hhUNPXB9Z4mfUMaJWDSVQ1Ko"
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
