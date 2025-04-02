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
    "4UwVivBTCVMVHv5njaBmpsMVpsYnKgLjZ3XiZtnae9Mj4SHvt7Pkx1kFe2m1ThekWV4HQfpCPz6idrF8dRf791LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQXkxWqUurCHUqEwQw8BzW2ynw9UvoB2xVLffGvSDtkLGtv8EKGSKSwhj72Gm5iHCCU7kdQNr7VM71Ak3rX5x93",
  "key1": "5RNdfW27xFRsj8ko8VRch7un1zZwv1JdzYzdxJ7sHAPLaKBp4KRjniZmXy1kGTBQeAPrKmoKVyex65V7hyrmXNhK",
  "key2": "3cBwendQY1TrtiV2kntxDkPbE97f1VqPPFGd9ZJHbZFMF2w2mKhE3yzXgZUxqKTGYLA6JqxE2scXmBQyuaiijuMD",
  "key3": "8vv1R6JwPdX5Lc5UhLXhFdrpbwea4TYmzbiL6tfhYeWnwc8QKDPP7KSF7bnevd2ssvHbmmvaABwhsYnA35x29ZK",
  "key4": "2cfayrKxWhuGv7rSUqzHPM1jUFXd18m48fWaAj2Q5AvwkKhVXWdRMr4zg7fK5RJEBpxSaaomkoJ6FjKx7LTBWWrn",
  "key5": "5nj4b4vtA4DkLijaL8g37zggaQFpj3ZSxVNMXrormxK6L6ixizmqDew3QGtpUHCEmgsvsbR6LWcT4ud4dcNM4cgX",
  "key6": "M6VQ6UCvTcGvzBXyqRbp6WA2Sd2jZos8HgWMw1APBmm6cejauxHNBfhhe5LNjV1RyTvRKRUCiuMozvUqMwJtFhJ",
  "key7": "4ixeD59BWg71fWYYA2Y6z1vUFCS3E6ndDcQTQwEnWFdkzgcG83oDA1sMMworp3RJGxtMcWzFw2PyfiwbKvZSCWLi",
  "key8": "5QTKwBC9GB1qbrJkGvKGNbHNCEU12knDhwY1oqu5uMHkvR7FGKcJoed4UdZtbKaWPUx8rCEwh3txpRDwjLv4gc9g",
  "key9": "UZZVDxpAA6fnqy3MWvZdJqP3fQM8Z4tHVrz1qCuWNWvbtHc33uzSkNEdfmCvgjXHaJ2cgst86VSTmfF58yBgg6M",
  "key10": "3tYqb7neeoXDPSLJYp4555DUV3HPtFdtacbcFvYxCrYC8U7wqv1FyMPGvPSgabofgsGAyKJQcneV8RW1NKphuTmQ",
  "key11": "3Jw7WWQwzG6TvvCWNM7AxQo79HvKwjA3jM2QAf2nLVV5266iqkUnM3r5kiG3czZMRYB5Gj7vqHrmJRuYdeqXu5NE",
  "key12": "4DWXioxBNhHEPPN2Jj4bSvpwvfv59hyKQ6LpeqiQkJMhi826UW2iKjz52Af51bXge3MFsgNYVhHEFgnhjpANcram",
  "key13": "5EVyDJmkP9KgbWCceszwsfXUj1rD6gPsrSS4CXULfoV222SkuifDkPNpvjf5GCBUScPGresXbVKq5AcXt3vv2Len",
  "key14": "4L1RamKDMDfAET9PQx2LbpQktfsnQig5AyqzQ6Hq2U4pgWsY1pi27YaQ8TSoutEvCPTGsDS8RF6NsJwTfM3t7bNE",
  "key15": "M2B3NHt7ZywardWe2e81DYwCvL1JZQHkuKaWhsbageSVvVjUTVbp6isGH4ws5497DNnrPJBduxtrmUCgYh2inYf",
  "key16": "2YB2cY59e51kkeejxMxbFDGr98tbJPew8GE44rjop7Fcr3ZRC4x2JD5akxnAJk8j3KiAr3ert4meRDSfnGWozKwY",
  "key17": "3dyFVYDA9xnzWNCGCRBLixSy8VKXfbj7Jd6uhpEMFDn9EK8jCeR2SWFqBXmfGEnFBSheRzoAafswt2N8tNf8HLGt",
  "key18": "3ANHhX7evBXK5QQnw9RhWtXnX8f4AJaf8acj9doi67LhnhRVehQu4HWZbyPRZUC3hWHLQbJMzmXmaNcnKyXVe4Z6",
  "key19": "44GEDQkvaLVpJF1njPRDnc5HdNkrMLoqmdbsEmq3itiic748QCtfPTchahUNx198NJfPjHUG42st3ia4BCdHNB5a",
  "key20": "2TcVsbjkaThLTAWFXjeB2HLiXMrCmGDuzbUGoqWkfBwa4ySzQy14wuV1NnAe6U5aYdLawkF1RNGi5hjSYqUjzS9J",
  "key21": "T6LGricnjbch2nxtnMR1gv6kNCDwgv8KEZ9GCHLbCieyGjUBjbjGid6cssmZPGb1j1Wdu6jFuD4GxPoynbW4oTP",
  "key22": "QAJucQH2CE2uis3QdjfiDikViu1mBTFG4RfjjjDuLovg3cBMatTjWAV4733sVdKWLiNxRxXV8JKcjk3HenBdrHS",
  "key23": "5TVykroM5JYPT3dAos7wbGjsjRJjq4UgVzT2qjswcCXJXNzeQCMNsEvHUaXT1LAsRid2Mq9s8Ma1aCprpz6eCg2S",
  "key24": "4rHmnaMzySSE42MeN5AsqzUif7Ei6Jf4bykkrsDViRD2ib4CxbjXcppKa7LrQ4LWDLasMwFttxsuqEXqSXAakSD7",
  "key25": "44AEznztMEWdZnNHSWunzSg8nosw1EJSAABW8riGpX6gxDwaYDFsf45AbpDTev5Kr2kQ8MiDeE9eBmsu7Rcxie59",
  "key26": "2B3xeSv2wT3pUMs2ABKagjjBZ7AMJ94tf8Hc9dHUZWkbhWox6uLWXgsiCrhER7Wbg296gmfg7qNACGEcVUXTdCss",
  "key27": "4ionJgFCfwLft5LEt1WkWJLFCQ5iuBwBbKHhxJgyq1TJX17H7J9rmYi2QhaD79kzPnGC4ucfF65V563Dp6coMo9s"
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
