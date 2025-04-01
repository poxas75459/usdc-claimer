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
    "wnNigrAzbGkZBYRNnuw8EDV69gQH1rGqAkS3YcCscyrgVD32ND9qwgSJ2B2TxaJ2YHhBG7JexhusLUY73cUTSuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJMR18sRBZQiDjW1EQcLLik3FrLstzPDHE3qKmA9no6DwJMdJ9Gg82N4ntqLtEpTgvSMZwyYr5wwQKkt7UsKheK",
  "key1": "5XCiraMd8Wu7d1BGwy3UJyZUvaTv8d2on97o99vjyHaWpMVXQQwPDsUQ9byqttEE94y6h4Zn3C2bt61GY6ANSA1j",
  "key2": "2ZRmas66RKB2hS67oq76wMYbbta2QcwBKKwTTHBPA7JdLEjXbReeQgYsEuQfSA6CGZJuG1AX2bh8fBJRnqCreuKA",
  "key3": "3STNGTdJz3dE9nH4LS6ey6H9ZBteCcBXYGj8231HNyBuUeWzspFeGcCie21wktxS2XNJdmuVdcM8WXAb1hme8777",
  "key4": "58mfV6WcR8hX5kpuvNHhXdqyEckfPhTjFsxKdRxT3C2hEgYhFyAbnDyDP1DW9DaBzfMgmqYK2GEdYJpKiat4Cq4Z",
  "key5": "4wTAAiTKt2HTmdywWmNH8qfHW3gGMMPdQTYyAS7KQQpWveqcHJzo89ypv1YkyEMySigEzW6K1faDqKngznU51Hoo",
  "key6": "2eAmS9QCVxvkLXaTvFA6VJK9MZ12cchQSN2h8D8jhd76GVWYCHeCLhnWtM5L24p3z8vV3TZErH7cTaaUiAuozf1T",
  "key7": "559NLfFxAYkThPNkWGt3aRBQyAtwNWNesFLREZDkyBPmzV3y7sZhaYbyxXuL7toRgzxSy8ad8FF2BZCGVoUcWWME",
  "key8": "5QXq9mdBtoJ3dDnnz27A8rsBfUDdZFv4E7QYexXf9uiaZMmym2ppU5seNj9YDPi1kh6YGhnGdK3vXjbtf4KiVoVq",
  "key9": "mfC4sCo77sSwuKWrPgoUPSjFF4SBBht65hZ7yte4s2BjuN5odNkU5DaQjRVL77jhudhieg7vKWtkDjUDWdx18wi",
  "key10": "3uzjoq9Q8uk6AhpRyvQ4qFbinidBYaryoz1paUBWmsUxPhQUT9qVbR8swFjHg8STagRgTpipwVfdZtLvriAU6z6i",
  "key11": "4G3H9PhJXWwBxxpgn8QwBaevNVbei1p9bJaL1zpc5D36KLCoinvp5jYnh4UTcDNN3YxTuTBZUPLWxxy6MwEiTDL6",
  "key12": "2NUoWs44JGseWMLyhARAozRpaM2bF3mMX4xnakxmvNusaUm9F7fFQG2pv2bT8YzZN3oRfyXDjskxE3PXHUv59RK6",
  "key13": "5dNx4r6fPvMcczhABZk6n24iQEur6FKNhbED8cBYGV1FuxsHDLb3QFi1ERb93xYv4yikbsxkJ7yNkgW4aKydo63A",
  "key14": "5ZZjAqqmUJ2mKsotLghso5DXxWL1zZ4A7USGbztuYYK8kzDBDPgyogRvm2iP55DADz9NzY8xKDBrFSzC8LEyhdBe",
  "key15": "4FBPrVoqpZgwDZ11QhophMR7NqctDBR3tmgQv5nMs2DpQvq6DywZFPKvCFmpnhzPWbrWNbspdX22axCwaixUy1LN",
  "key16": "5EnxeqjD265nFomAWorcN6KPzQqUUA3THUAsgJn9zcXJfGpymnFvDx75s3AJYAj2Py33cyvQRgjCHdNEqt97yYSw",
  "key17": "5gGBUW7pfBLJM8wd5wrHFsMFovgKdf2BAJ4wcrRcz99p97ip1QybtCuUdS2GGVmeTUg9wt4Lzgv7WnbYJoUsetzC",
  "key18": "5S6A5L1sx8zPGy9JfouDD6478J7v7HzDaDe6uRYQdVpsb8c6X7WdPxKUehe1yF6bjpxYBVdTaL4jU7rYYiKXyskc",
  "key19": "49Wr3Yy3AwFsbWXfMDhk3BRdRT2hEHgJYz97GX422dFPrZHb1nkhNb8URbgbm9qAJLvg6CxGx8NXd4o9qpCmQ8rg",
  "key20": "LWSUZm4W8qP9xdXKQicbBbKuJ4dKTfyiXHsLMBtq3psGAuyqYmT2bWD6oqizJv5Jf8ePA35mkG3dvYsY7yz5HFq",
  "key21": "2rNfM7rkDRmoBdJaWzYQCQKFGH9AYfzgZ38joPtMEvbQujy9Bc8ZbgpXDPfbLutBiKQfUQRQGV72k1v98uy381D6",
  "key22": "XrRPsf4nkasMk7sCZuSU6rNJ9yDJeoFs7m3cMAvG1YLoQv36mFwcVcnUXL4SdZ7iLukufUuFKh2CkPeHUg78v2F",
  "key23": "2S1cVf6eUPjc2cbgixBasbWL9xXAURH6BV1dLLU8tfUebcsrUdwXk78aKnS37Ajq7ZSep4FSYLaDUR2C9onv1iui",
  "key24": "3JEKraxwFoun3ien8twep68FNPdpS3feN5T6KUyQk673Bj6uXtfoxuNkKTfdwiGB6EVMa5195PHsaiuBPciLKpYe",
  "key25": "5fhxGVNfSbTKbAjh4JnkiCSsQTspHLHNgPJR9R2cJ8ShT7AXS35hRGqM76u2x3MV6V21j1D7FjQRsZuxTspefXvp",
  "key26": "3JeSPNz4c9hgXKwgK6TPcSEUZYR7mXLwcEWdMADbGBE9aTpz6F737k6YR8b7j35QkhVdBKS8jS9Duz5PVWw4KpEe",
  "key27": "5KwH14hsxHvLDzgaSRDUtrSqs8vtEonn96otxXUQ22MiiNNvmbfmHYbcJSziuW4SdozbH1uVwSNToPKURBDXzzH8"
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
