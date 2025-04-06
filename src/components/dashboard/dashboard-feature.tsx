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
    "51eCfEDK5vLPXFKkgrNtuKfbooo13jLnxVBsm8kz2fzibN1K42kU3FGUDkupR4HJrCB5YWUAPBDHcngkCnoKtJAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AnDgKikbYWsVBDWxtDxwnZi6isMSXVp6e3iU6LQuzT1yc1S5vJ1692ptGu1aJXFSms5FwtcpWgEua8bMdCeD5mH",
  "key1": "3PohGbwgqFo4FCpDQvBofTsZ8TCYYrdMZa4KsDesyFAspJv4raswRcD5mTYzpB5T2T3CKxNLQ7okkjJGe3NjNVNg",
  "key2": "2fA9oPAHQavyvMjhkuVKtMo8n3zmtDHJd2R2o5DWBUZPUkTHEyzX3YCskRz7L6rgpxH1d82gjhCoVKjaLAckuucs",
  "key3": "52vPEAfLwRZrGBmkVsVVe68b3N4zwGhXZsEVYWxX9z3wNBdfFt5mcMP8zCofrkfgdBsQqprsvnWgJwi5SWLZZudT",
  "key4": "4TFKGhRoCvTWBuQM28JSjQrP7kcrkhzVZNg2nbTrU96nfF8bEQKJSegXxcpg7a4tz4trUYPcpxyWZVjv53RFLRQq",
  "key5": "4U5LUV2ntF9vBGZSw7wHMvtVBSLxAuZyE4zBokEQiSTt4dmNrbLniKubMSbySWAeX2w6PKJYJ6CE4DXN9WTzzVAC",
  "key6": "2KKWSmw754WyjZKecskEk3c52ZWktJ7KPK2CYzUmLE5oyApkRU9FeoDg4hFZSj4pWsnwtEjSMqKMciPeuXQQkQ8p",
  "key7": "4kSkXeyTeyGFZz8ErBg7RGtAejUfdcyepokJf4Cp3pYWwFgzY1ntVHgaJJ49axiB45YFzDB91JZSKwyLcFKeYZi5",
  "key8": "3ZJDRfJs2o8PyiiXg7cRB6Kutke6Cf7EU8u1rrL7rWXLu2HpEyuuGbmkAMnRwLXQjKDWtrR37zVxwLmzDUsTFB3J",
  "key9": "3x7bH59tEf9LPJ271TmcStGaNumyHT3gpbPUYCiz3cfNkRjurVTm98FiBxdthfn2FYeBHNjMbspG38tJCgfXe8EE",
  "key10": "5xRyLHFR7xA45kFcJpfujz2adnkF2yAAY1bJkTpucvUiE1qVqP8fZxqqjJDKeSnbwU1V3ho92vCFUX84TcUy7Aq3",
  "key11": "25M8HsqDssKxy1qxqYnU2w3EWquoovWMAxFHJW4c54EGwAwUESMXH2wETHgyp1PpLSHpap1cjdpyS3YBLVyXUtVQ",
  "key12": "2MCGhJnyR2sWtRnQmFfbLBFwsn39b68ekMwA4pBwUdukCL2SJbFBWv92vG6nJCbKYGNsEHfQn9h328gLyYPhdUj3",
  "key13": "5JZQhSV2p9ieor2x2FrGHqm85cBj7sMiksJX8VADgDDZQWjtkWB9sSYbjxN4M8PWm5chnMaNucHumcLaFWxNBPZx",
  "key14": "2u13MHDrLMHkD21hZ29gEGMEojrArFz1Zf3nyP5aUDbeBP8uPxJM1twvdNXXUmtnVynznMLVX5o6zaMfdfYwiB8",
  "key15": "57sW2uPKLC195oVqHJdKY3jo7QPdtpD9b7ehW96xwTTKpHtZ8hKUJ6aKkkBpzuACgw2Fnd3hUEAmLx8wRvSFBABz",
  "key16": "3bmAwmo2HWj3NzzuNGSWp3JWSeHposzHJJok32aUY4uczjbvvgmhELvnwzVoJNUnJShCf9348QyWvSihp1jMictw",
  "key17": "4MhKnDJr7bTcWG5YmeqTXP1kspggh46swAGEeHdHc6QYmnEJqn57hdNDeYGXpwjUrjaNrDZ8q1v6m38dpRRLh9n8",
  "key18": "3W9PuZkVrBDQSXMAgqr3QjJ48FEF7aQcBctm9xM85T7zqzF4moyG2NowSvAfgPFEF3s4hqV9RRQ53wXpF8bgkR8C",
  "key19": "5bBwxc1fTVeuhsGvnDwDw8G4JCNhqK27fLdbM97w15DpwULrgxituxMi3HgXRUJYyRxkTXpSCko56ytSse6gKAEx",
  "key20": "64uQJ23adMZARuktjNW3pJb3xiXrVJCAw4LxSegLi5thvKK1kGhvNeYLGtRqTDmTjmfUuE5CmV2Sk7fk4Lx8QRuj",
  "key21": "21LXiyWB1a5XjjD9AdMfkJpmepcaJAngVpibLxfA2yY1MdFvo5eV8dk2Hs4SuCgGo1BFzj3rrxg9QDZMdSf8X4Kc",
  "key22": "5oAG4sWTocLNvY1kMfNcZzF4wZFjfcLStQrhaysAR1yzz2gfefjEhLZhEFjEimjFgX8MnZvyksv2Q3H44hMFukEo",
  "key23": "RH6fzRo93qsMxV938tbVnzc3yw2xL2xBx4Sc7iVaR8JXU4ZVUKn1K7FDpNj4mhwiFtYTb6KRhKVyqtUwxA7qHdr",
  "key24": "2ujQqdAdYxpfLzkZjUNUokbhwoY9MyJAoJuJ18FnHDpbKLqQbX2eAKJyADez8WnnB9KbGy2VrN68g6h7DFy9zLtS",
  "key25": "65qg28oB4Wr6cZYRRaGFXcRqHArY89msLa7bnvaUUxjekNwVtaBjT5whwFwRTY4azeQpLC4CJYSAT2r3APPKNMhM",
  "key26": "4ixkcJKC6L5sw9jq7pLcAhDRroMddmynuo4GuepAGHtrDhsaJWYDyywGiQ223A13c8UJR6TpoUPkSob1Bbxt7R1B",
  "key27": "2LhKaju3KdptxGXTucu2dJB8uwY89JTcDzVYGSkd7WBLQjqTP6jiKCMuEZFecyGNH1m4iWgYr9qQU3QYPcMB1aCD",
  "key28": "3QeAkuuuhuZRHoCg7fqaa6Ab5R9fywKhYYdaPzjf7aiXcy8MD17j3X4qePh87ozRJT8HcF1PpWzBFUg5Z3RP8SNF",
  "key29": "4hFfyfTv7haSmugpSvuXEtzck3FNMVx84pwAv6m8ZqZVTVaeEbYV3kbYfeDfvtjcXpM97oHZMiKmeceLVverWHvt",
  "key30": "5dXh8efVw8h12NyXj4WHefQZLPSk1Yvi95tnwpobUnVBNSXjeT2advfBpxSssbKCTroTGSX2gTC4HfwtdEe6ZNp3",
  "key31": "3ay5d7N46umqk6VpamTPbtYvBgH1c2FtFbcoDa3AyxkYzdxN6bcxHxmZUkVRs6ZfmoDxAjPx6RTm4uaUX53njPMR",
  "key32": "8i7kk1HdTHQ5Q5VDCv5jAV6jw7TVMF4JFppZCwhRH9n6T8o3cabRtt7FsfwGVfmxtCsNpX6f4c9DP5qkKj6DDAJ"
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
