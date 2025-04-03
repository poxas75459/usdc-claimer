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
    "51ij22bcivtu8bnMcx3vYmJ1aU9hHicmX8cd6rknz48SRjsVQbq6GNmXJMYFgfvEeC3WwG6v9bvTaqVHjxDyg4zM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxeZGYW1xoessn9T5fS6fhxNpnQsEFcCVuemSAsAvhLDR3RUoXBzYATNz1sVbwiDQpEHpQ1Wa4P5Cp59RCHSWba",
  "key1": "4HwtR3MuLAGMih3i51gRt3PKuqrwUEgQGqJHLE1KDHTPuYWWmHrVBhoUuJeT7GqKSARFKEDyqyW9BKj4yEP2h4yr",
  "key2": "5PtzLzwMff6K7ijRT8S4MiW8FpcMabVJLmn92iuLaFo5yjvwc8UxmaZnBUZirGDTWAhmcVPLGosustQSonK5oKNA",
  "key3": "5YF72Z6QjLbD2uDUAtzqgW6BhkTN3Hfv4JmwGY5KCNRjHWv3bcZSP6aJjrCu8Z81HQoJ4ex4zLcPZb5mpNYr6gJe",
  "key4": "3wfKaKH4HxfvsKFWMrSBkEZ6Yrw2WDdB54D9BSGn9uqQRCWpckzyyUDvxHZtyNxKeGPguCPHmwXwfMJMaivZM6CP",
  "key5": "4ZmfHTwX77PoqacFWVntRetisY68EtE7wfTSSyyyw88DdM4LJu2nm4VaUYnZRxrcvZQrZkK2uNjBAfB8bwBdKSuk",
  "key6": "rtQawpEC8cHan2rMAZoGCp4uttCdsycrk96BHfTL9r1caosV55tmQdyVHjB4A5ZwPXoKL49jiwG15boPkHmjeca",
  "key7": "5QZH2dsK8yYJEQ5Y8Cc1YCx8UrTW7fGr2CNvVSNFv6fi4vY22cF3yAvbUaWvPBb8B6Lr94dRE1odVoSDxQTd2Zzo",
  "key8": "5QF8V3qaeCvZAKjQ4jyAffqoY3zAf2mBYnqdzoKceLB2CAiXK5ZSXncCox9qWecv98LY3m12vvekPr7iKSj75KhA",
  "key9": "4CvB2p74mS1676qQybwcPCqjPfCjfWTRF1dHRfmFYjCEPKHq7YvvZSuYgjAMdtDnztR2WvzMPXCM6h2QA78wdv5v",
  "key10": "2Qw3VoYZvJx5X4rNPEzfA7b86xyeVPH4AxfdZbc2imGCLpqoi8VYgAogT7dSzq2JHwf11fogTqT2qYRex1iMnScu",
  "key11": "44EchNV5TvQy7cTWM4bwzfrrXxXuzdYXxzJtroLLUHhFSkUXssus6qEFsuFdJAXy2sN2U52RJcV9RAwZzzQGDoeU",
  "key12": "7d4bB4nroy5qacMiXTeG4QMgbahHPPBRvMREZZLu4JbkR6E2Qv4sLnjzno9q7XdaJRWaZa5poFNuctZVgSg3yok",
  "key13": "4BJqN1ywMDAG99GSGeeaQjazRJUWs4Rk1trHeXj4eYo43oudGaE2vnJFQ7hkv4cH5DmrDGu946XmN8J15P5mA7vU",
  "key14": "59vW9ZR9L9dgxY2hJhqGWxEFSJhsVHGgxR7CTfpUnHtL6kBG3vXzYbniEhteRW9eZtVE758pnoqeddXsUJN8exPP",
  "key15": "3rq6nXUHw6GmP8fH1HChRscGK5jTWMXgBvtZXFPw9dqoyanDXS79rrcgYEo1PUTqAtEnWmcvAeNSEpunyjTjAkuy",
  "key16": "3GiRvCzYJKHkiBjJsMcVJ8xDSjWSye4wE1y5Zwe2f9Q25cCoLk32tpMJGngru6HW3GmBw97ymEQwZyNmoF8RPTQU",
  "key17": "4HSU4Z2FohJCqkQXXic8x5ee2B9H3mPqxpYdNtHrZnWiWaqmapyTkgAAD6Mca4TsubNayi8QJvXG3YJbbE81djNv",
  "key18": "5SnR17N5hSX3babt2obV9oe5CP6AD2HPtVWZ45Yv61WmaYo62wmhcEYrftDLEXHLg4jXyFSS24MXLeEbv5VvjKRY",
  "key19": "8AewbTg57Y4RHMdsFnTbU7UHenkG9QtJid6D1a2s551ynZkv72zQCPigcdMx2iGxQDYMTAZZgx2CFSeKKqYbnCd",
  "key20": "zwFTTx2bPaTCZA9dp7czJoTwgFtwYwFeR3fAF7sC7H5yVe2Wg5t7xQndTWZuo9ksqRawdT54e9yb9g1g8e9V52b",
  "key21": "4jV4tr1P9ZGvykzz3FcxD38R51p9jaQV8LMsAepoPZghKPvv6PGVyr1gj4QCAWQhMzSazYz2oifNnBFkZrGbDH8b",
  "key22": "57Wfx9kfbz2BQvMPwK7MSGHYmKnwS7jbD9ayVMuEnMM11LxvSDyKEJJYpFDAGsmK4LqeuDx4qHc3bdiVxQGyUMdS",
  "key23": "5umkwqt7vwKYF7bUSNEnu3PSpzc2zPZ8tpXfv5BfwP6moE6jmbLfRh44747ntvMfYzngs2i3HxJBLpvsKTLg78c6",
  "key24": "5JHnDaMWBr7ES9TwaaMhJoc4QC4cL7RSGXFsbaEprSuLx6hLQKsgmUPU8wHpzBeF4rTKMKPqWjrmaFCjeoFKgy92",
  "key25": "3MwBAEMukg5vFXeuzwJjHjjdL5T7KM6pPrLMZQcrKyMwhb4Poco16R1NmpKuSxYCheTjNJdhAz8ySbzqr55UssxR",
  "key26": "4v6jpTZBhAHA5rKPR72F9R1g3rRRqBxM3M3i7y4EcxnU69WvXi2HG64xhu5FssmGZDm1BmELE9vfd9ucKj4SkbCB",
  "key27": "2qNGBqzgQMsM63MmpDURHKcZqj12Dq23LRciqA2m83mVK1doq4fWmJiLP2gPaXr36VWrueXXyu4uoNmKA6AKuZZE",
  "key28": "5A1h6MPRDLwVYZVrvxCSi3mDJF7629YU2kdHw5ya1SDDKNUkWkovCquTei9nKRzsyB2kF53wssK8FtB4CqMWGFtm",
  "key29": "4RjKi1dher9iQYDcxUEzB7JoCxHBzEDbJepnxVCU3EZQavrTGgXYn8aWLNx6nnEJKWSSNGtF2xgTgUmc2YtSR81b",
  "key30": "5PWXBqK7pJWnkdNhnvu72vuU2zf28goLiu6meSn2U3Ndu5bnJ5RQF7Q1RXU9RKB4pUa8RtcLoLZZPu1AkhyEYAFV",
  "key31": "5SarrDyopA3GN5Zu2kRinUaoFug38csTqR7yoqb3k2wF2JAbM1GxgNRDyYWFjumDnkQu9EvwRsQ1aG8KhSA4Uv2Z",
  "key32": "52u9KqxQ6Gbg65d2RMxUERqZ8XD3LEW3qDfXoJazn5Hn4WxW5Nq81sZRAbgALcfoQ8LvKQbBCc5N85JrXokKDFgF",
  "key33": "3sTW3DgWkiW2MAUAQxSHgXVsjDzCBusmUFjomT2uffTeFuYyGrGG1Soi1Ke9JqUVc49Gb4u9zP5pRJYNiFm5kTUk",
  "key34": "NWrxQ2Uwxx6C1fK637JGMe8eaeRYgN8xnUeZYhLqwSPDXd7mzwjYCzMfGVwBHFA4T34vP82kEssJMYPrC6DZsA3",
  "key35": "2imxFmGHwEWzwECDt9iu77PFX1gAa1Dfao6atbKNLvViHXNUpbyPvnmHbap4xaMDixFHATT8HJUs1Rhk4SfdqgEP",
  "key36": "5jkVfYTKQXEFMZ3dgoLmDA4goEQUNbM5Tjn8QXEoBUSzTbNDG9Z4BNB32NJxX5uspAyxXtWc7omL1QSGuuwoupk3",
  "key37": "4Ygh5S5NoPbubMLwWmfx4Sb9mtKpQxRc4vvtybkwzw5d6QbLKcGHSyahZBtaSoDotUz7Ac8aibuqouMnuKnkjd1Q"
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
