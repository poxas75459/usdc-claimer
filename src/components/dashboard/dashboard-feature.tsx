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
    "5L7qvTbcym91jnEgVtnD9EoNeySG3os7FsFX8KQRdfBh722AP51Z27nn52BkwGPLUMLX83XDXYBxKzHr2QVtsZem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hieZocZEQrbFziKujsvgYiHLKajD1E4BcvVZw3tKLEVSXahYgteEBuUH235992gsrnAuWQ7bq5PrQ8KTVuo8Af5",
  "key1": "329c2ta8fF5hhTZRVi9GyZETxtukdRosydm8koW56GJQonexotJixU3u69FQZnXLGeqSSE6zQVQpxMGs9BjJdREb",
  "key2": "5m7EcrWRT9YBURt1TEWBUtoLnYPj1uM6YJMBb4mYoxECTD9eSm4REzj7JkwjWD1X8yWCHwDHyq736J9n3Y18JJ4c",
  "key3": "whkCQ7kNQVxb84ipGJ2mpnLT2uMxHur2bbYErXF3VmikrcCovrW1J7LT68Y9qMfDgzTATvjRz3NKusHjkzzZsHp",
  "key4": "3dYStJdzk1sB6zSTHxoWJRuhHqSji28wExqt3E7LCmsJBpnRVMUcGzuDBWSqNdEWL2PoAoENUAB3jhX5fvcAz43A",
  "key5": "4oqe1srnezbVnPgL2cbPrTWccSZ4UUV1rNeP41DhmXatTHZ6e9K5fXX8p92ViPjF31sgQeBJjcydkJEpZ4W3bEMW",
  "key6": "zMDEkcvJEBidNm5WLfiSxfMyrAWRAoLCVXcJFTTFGgzWJwnyJB7S57dcEXNawTakKNyQsuL6v3FNXGE6HX3isL8",
  "key7": "5tCBWbwXtFi94QU3J1yvZKavirBnBYdmojZVBv6DreFLGweoHff8oGdpairrmyHcoAyHxK6FaftHYTQxWXPPwci",
  "key8": "2sE1AWpYXY6JECgTNgu6DYzg8Pv7CSrZW5jiDkug6rAEcNB2wPPpsY9hsbuT7y8WGYMiQKrigEvo2k3eQPxxFE2u",
  "key9": "3BiRrx6SMQ9cZWjJvZ8wgXxVibcGLEiiJWJ7afUosTsWuZpHomEMcxLrmEq75A2jzQcvMRHHa62wHT1en4LGCtdZ",
  "key10": "5ygUsJcRKzPFBT39WPiJbUkDo8FLksqucvNZ3ytDx7WMZePgZAqxSQRn7CU4EAi3zj7AVZpRxEVpVJwD6hBjaMgN",
  "key11": "44PtUpTuR3tgPB8GNvnn9dux8RPWnnX2sFoeJ7hJvijiYHdSftoohuhNr5oUTcfScpkVkfwJTaYujcZijrVLHNor",
  "key12": "5tg6BXhKBRXfW8Ynpp62BDJNH8BdYxxGcQP9s2Da1dAWx8fvE5gZtYBdjgUjdmn2gtZF9so3TzhBS8hHcESRxway",
  "key13": "5bFJ5KHggvNBhbxQmBtd9519WLPrtvLnJAQ6xDDrbDBrQX4BKVAfTsvHeb39PSEZRZKpningogiu2y6CKuHYDEMB",
  "key14": "45D1GdqWQDawJUPxD7B4fpifQfMAyDtWSRWdWzwqmKpYZL4jtDFvyq9nrA8aBuYpS5y15JkiCxuRuroSxDW72KHE",
  "key15": "38TcCWRuzHMwmtuJe28UTr1iSF3ViJgPA9oNegsfCCWVP4G4dTBhgvwBjNFT43PqfRwS7rzX65G2H41kLuKpwRHv",
  "key16": "3AbCvzHJLiU22Dz9SzcuiPp1CxRh2uwCEWxtLThp5vKwALVhKmouo3WA9EUDzzXN2K3d6tVkrucwAwga739yZ5kM",
  "key17": "5f2pVBpgQVDAQAu5vmU4Rw31VbVtpQ9mDRxzHZDBTtNS3ssxhNZLjNF8bhnZmrnJZP916RB697RdWgTpam3KWZ2y",
  "key18": "4AFHhnGfSXGHAgbR7kMzTfVLTEnAYBe1vnSFxUUcF2gDEEW6mU8byb4GHi6bXk3ATwXEmU7aPaX5akfJ4Pyp69Gc",
  "key19": "2FgqyM8RMuzdYHKm7qGzrz86Vy2S8sNA2hNAy2MLM3k4CKnGSgyGpRNQhmkTEjcCCtfNmoWzZ3skBn13oWBTZyq5",
  "key20": "4QrhF1tXKWUQC36qfYiZzXJCDJT4GxBXjc4iKnGoLr87jXCnhKXmGkV6q6iZGzkLa8VdcJudUyCTv9ezPRzDjZz7",
  "key21": "5Jc4qHc4SXrMQUQKwDTeFkbn8vyjeYEpDSrdiZV4D2pyxAAbiaKZamrLkzXvkad99H1fiAZtCCWGXiX7g1mmtMZq",
  "key22": "5pyccJrKybDGZ41qNe5C2QTnNJ6bSUM5madAkzRNuvwDU3vkAJrNNFwiFi2Tn1boJGNHBkLc4pJCVz4ELkp1tNv3",
  "key23": "55GyK3Nn145riRTRuD4TCLYoUTHj3QDUVGSfJWv3eSywZANu537hR8G9czFwmbqAQ6u3XPRS6CxMEYjcXERScvr5",
  "key24": "mMmAJ1PSoB6boBePVdGbGBf3WNHzytNn527FFH8PfD6pVQtJcSyetEvWy58vXxyH6qbKGJDzje7w93UM84VUdkX",
  "key25": "5oxnEfjDdnKsqjUSAaV4dM87vHhNGXc4VY91hqZCF7fLN5qzdU8JhpYUnqmxrM98LJiuDdHBVg2gkJ4tqmpBDoxZ",
  "key26": "5FWSuTzypnpoDW7p71y8bsaRPhWaJeg2Kntg3aK3CbxBMMYecnvYWRVNg7TjqFUa71vm7HhGooYJBq8wm9JqsW6w",
  "key27": "bQFfc9WL3DkHaMkTe2c8DSdzsCqnf29RXpgNip67hQnBuZnbPo7gbzFx7p2o29YEiqozT8xwwqYn38MfYguuRd1",
  "key28": "27ZyFgFkpR1RHRk4kuNvN9ftW8rj1pTi9TUakunjCkmjzjhDjDsMhS3dBCT2DCRS8tNN1p3h4zuX7PUF2Wn9c9MN",
  "key29": "2amUU1YExL6J1UmKmjPxY38pseRgxq9XMeVZqTVWQwqvHMZbGgfQ4PZdfR5TqZqma4dHwBUkKXdCmj7rjUv9YQui",
  "key30": "2WTdoYho6BmPnr2JipgJt33hwQMaic2ibcupG4exWvEKec1PqUv9uhhVWiXV4AQsFouEZZqMypR3dinWkdLNw9Es",
  "key31": "2xY2YXd5HGjexqEZySYUH69Tv99WZBDERx3VDiBeBxH4fyU8xLfLhbZ4RFBZvKTWPPe8u7AJ86EWaaotPHRmBxnd",
  "key32": "2FWaBu7S5fUzdMKtkczSu7xk2mfqZAxjvk25fYPuqGkjzpA1QvzaSLaWuZUC2khCU1kukUuBoh5YvQdBssTXc8gT",
  "key33": "2ctAW8TKjon1pTZT5p6K9kQ8kKQp2t584ii1rgv87LaHZZt16dWod2QNqVfomU4iEizMntE6Ngc8cskBuPotbmzm",
  "key34": "4pX46aEeR7Tqhcw7wd2qG3cPr2kvcZLEgVL7dhctzfNbHfc3JMo67UN2RNjVWLLdAPWRSzemyDRAfxjySM18SC5v",
  "key35": "2g6qTXKuJ8qUXNTpMiyJMkmrcUAxcYikcuJ7rL2xpHzkWf9peiDwj5yD4AcyWVHsyBvEmxRKGk8ducD8HHprquFs",
  "key36": "5PYhw3jKsQh7b3j4PRTauPTH5Jq1A8WUf3aq8ghHznouRWJtDjcrNY8cnZbi4FzsyXhkdQdDRBSYk746dYZ38uiU",
  "key37": "2P9jwLCryXKSbtjAjTy5SffKmRWGM5j5hjZk6jCRKYSTTeKZMxta9yQak3P61TpgKR5k2ZCA38uq2YTzPPgjpdp",
  "key38": "CcTDYLpvtT5kDbNy3n7zjAEcbAdnJvPptmitJ2HJshGrHFRVrmAdiDjkQJoUMixWvfqcCPmJCGjRqUPakyj6Lb8"
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
