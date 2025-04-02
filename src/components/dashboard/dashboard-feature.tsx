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
    "5osK2tJvLq1jnsmgQQvdnaDemXb68Drp1ovLcAAzLL4MLPGZ4j1dyMXe1rc8L7mFQ9FPmB9wgfindnqATDU5EZeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PYMLyJF1vN7potUwmF5mk9vYcpo1U7SkYgxYMNH9kt7cXXtwDFmkrNRFdXJ7WLpZVMdVpkLkhN1XbRqi4h6nd5U",
  "key1": "3BTBztnAN8ukBGEkzF2PhP3rdGAXAaYAwGrf8h5rwcv94i8FpAoBLzjcao8mhf7aocaSWjza666Md6yyCu43GLSN",
  "key2": "ihX7KjWojnG8fcXBpX3VyWKy4qYMwhHb5uagxNEQF1xgreNyhKJzZD5HGGgM5bDeQjthzbQXribPUnwMpbz1yGZ",
  "key3": "3SLyksR5fWGifnt4dnWz7xEtpBZhyFT5MbLy2hzCvMSV413gqei8cqzrcc8rMPA8iwxmnBj1iEjCyKh5VbC13Ksr",
  "key4": "uQtMhwmoLedVmGVf9PBDacpFfF73XTMjoyFnj824tRoev4XErTSvFE83CrHU3WRUjqWR7aovZmrmSJrTfX6Aui9",
  "key5": "4oSSMUE94Um99AaH5PYnaEAbMeFJXtFGim119TVVFBLCbrvbiDBRR7gJGsFkcUec37E8CoM7GLd9NSJAsSro8yid",
  "key6": "3DmoMgUofXdEuUvZSq1RSD1NjbvTWaJoHStDW6FqfujZx3WmpSqSXeSUsvwdjvyoKGsd5V5UKYWGcP5Q4E92e4Rc",
  "key7": "ew6DJMZHpRk9T6LitcxrmZB5EXcttbBS45Ne3dTP6SYqDFXNG7di97RUoQaFnE2fN23zzcEGT2ZXjn5aBct27Co",
  "key8": "2nKtBZ1bnaTMvcUe1Tz2Q5Gnsoyyy7mk9Qkz8r95rjamYZHHpugh1Pa79WKRiy83BtF8RYowHiVo7NBHbUZwbPGu",
  "key9": "PZNwV77c747H4x5Bcoc3oi1WZHB443NeYHqRvgXXWLKodxrWuBY7mr196YHsH2NoD43Lirk2b3j789wnnGjyDfV",
  "key10": "2pQx4kf3jVSESvbd1H8KcdsK3Eiza6gRELxTA8APTnRVWxp5Z8PzmQri7bMUE1Nu2sVkockqHjUeU6LfHNo4vdHq",
  "key11": "2BGiavVfGpeSQQJWV9fqfYNVwXRrrT7Y8WuWYcsxR1bNSdSAJYQ9PdJwT3LwTosKA8GxGYggfP19rd8Br6qe9qgV",
  "key12": "5mdjTTjoAWRASUYZSMWuxNmCe9PCF5sMHynexJgPX2NTGi3snXbZRqYb1jNafRf4dC8sbpTGsS5Pu4FemjLJpn5Y",
  "key13": "3MhsazpCXsWHHbjCYcryxUYeqa39gKn7sLv5ELmVvzk5wNeCEyvwRK1RQENpFyXKqYTR96myed649WBen1zteLLb",
  "key14": "47XsdmijhGaTAqg3xDnkhgHLLxpTQLLqTAebHJWhN6F2UW2zxEmCqzEHtoFbJvX9wcFrsJUg8DtnQvvdgnykTUC6",
  "key15": "4eAz1K11ZxmgdjJKZgX1dW1vykQxhBY7EBondsVAEp9WLad7rbut2SHfoqwEMApsGN7xxfr1NTy19798TwiBgsFp",
  "key16": "5JQEnsAPWiUWGYJkjWYXVNir6q1kkbGp4opZVaq4UALX2XsKpNMZMAgdAN9oUDYnPgTaNbYdKGZu2d11hTbHndFB",
  "key17": "51i7Wv4sudxtccpJRUzKC9mDvDqMc9GNdRepdC4ZuVYgMW5nETutBEgVSiX51aLFruYAhXq4jWtYbW3SQg9wWQ7B",
  "key18": "2mqWuU8LRGQY7ybVVGc6QqQ4YtBGT7wxCLY1MtSk4YENqH8pqpWqoGZnydyC1WHPkTDtddRLNjyqwXtNVt5QNSN9",
  "key19": "3rBDZBvPoHhND4tZGLtXBmGruvRQ24XCs6oruaXXNK7memq9yxPXsAT5HYQ9EdYW25goCSN4CAUiENMiviJARVbg",
  "key20": "4UsaFdhPoBvjrKzVA47s2e1z53d8A3zVmNKbSPsyARr67eugNBdJpEhvu8iKYdmbHsLzawHKfGX54LvQo6ck3cgM",
  "key21": "3TTnwPM5HR5FZsoZonGjD2re7auKYisW4g3qnLxZxSeqmgjNayzQ6D7GkCq9xoNm4MrcMJ63rnmuEgXHtya8GhHT",
  "key22": "3T1iB3xuhnhAxowmrnzJbyghPWnkU4MaLcGSX3TfdU1Ej59cBB1ZkGRQz1YaNhjMGJeV5vtzy7cppnTWuyj9BNdX",
  "key23": "4Y4ci9g7MFdTGUEYkYMFQoQjr29NpxUM252KFQey5gdnFrCaiEEkYxNonx2TS4XEEwPv1VkEUY5ZbVqnRPZB2Ggg",
  "key24": "2x4Xj5xcVB5UuhyyJqmwuYv9tV2aD8UcJgHdjqSXZjfcGfsHJWq6bKsK7jaUqRAuJJRisEmkJStWMwobXTXqUzph",
  "key25": "VH1VDYnGLJaNBNjuspBAuh545A3qhTD8EAco2Us6nqpVFyjUSPLDdbgN6BJV2UBsNCUZj2tbb4dspg5TRfY73Zn",
  "key26": "5ZroaJNpJYyCJrZZUz6b2dwJUe8jFs9LVY2Va2aVW4bF8vfRkvXpYvr2XM4oF5pTztLL6f9ijdTmKQPpX5hFUxT2",
  "key27": "653nwRPh4wMPSMzaDf8v4jwsWTAUd3eAsULnSkRmkuuDPFQCtD2WeZVA7LD4GonGwsQSVVWyvoq35VWoUtDyfruX",
  "key28": "4VstfFCHQCGxtuufehm5gZrS9LEKU1QvRA8eciegr2k9tu6LJ9mLtWnpwGdsTriy9GuERV7FzZdHaQFgAJd7fofx"
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
