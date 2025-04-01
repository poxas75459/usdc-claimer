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
    "548BpAW849i7fAZi8Y6FKb1s95v7sirndFmbRYJNpe7FnqGMjBJk63xJNgaeR9tzh7fsUYqTyQYCGPSi4BLZxhik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EtFcETU9Zz8i9KGbmg1TsNyYMsTmgG2xjXwsSqFiRqRazxASbX7m8yFUkiX8dEAGmiQPdzDmsVB1WirEazsa9Ja",
  "key1": "1GUHQ9bn5M1iw75vmg9n1u7BqHhPbVxecnaQWJQFeogJwwzf3PVREbhQvA293B24xwy7UE9W9WU1KVi9PsefRzC",
  "key2": "3Rm7f8y1xCkaXyNnE7AiGhyWixSvkiMQ1SSkG382cBgneG7UpwThPzTUJK97iAEFQvoxEV4EzCtqZj4MDxTrQEJE",
  "key3": "4bC1WKV7JQ64T6ip3Zaj7DJu8hjFpzD4Ecvvk7ApRF8juJruuZcLheFjetiuri2RHTf4d89HG7Ca6sswiwANcoa2",
  "key4": "5hyu8Ke8wcxQRdB2jjxFfGes6BtSbPS81BSqwexPxwcSm4D24nrjD8tXn3j4RiE1FLRXu3qh85KDsGa8UTVCWHPd",
  "key5": "HDusdut4vqLK2YhW87DEwaVG4kB359UFk8zbdGhQBFPpzPMbZzrASfpffBAoDMw7xqMJwdinPb5PSaREfgDXP1D",
  "key6": "3yxW5yvdmnMg6RqGzRXmMGLkAN7WHSQKZ3UhErLBvqDzHG9PxQaThAdwCgDMp3hR9QgPzZEb9p4CfFn33K1Piywi",
  "key7": "6uxu1Qhsp9pPba27ckJvpmQXbatHcU5ESoguvZHQJSn6ngWjqffUA1BtgH6n8mnD4j3AsTKxAeqjD5K51aiU72K",
  "key8": "2P5cu1gVVWJqVLX6WFhT5imFKpcAQgBgaXZzGVZZ8rqgmhryYixbuSfpWp2fTvzUdVXPLkiV3scz2yF7hGsGtu1t",
  "key9": "3NzReXdy9gsCRnfScPn3KRiEe1mynZ4W9X2avH8UVUWohB1bwHTJm7vovVH3sZNC9cUqQ2oXd573JKhEJdvznFQh",
  "key10": "5CfKw4i6RPFLusD5cauMjZmp12hxq7yZw45za6GecKT4xEm1SGAFng9d9vFxNNwwBtrBsePFdPTk4JJmRQWRJnYG",
  "key11": "29rPSbGAgXnv8BH3AsEdXpXBwrbbqADVQB1JheKCNVX4q2aS2kRbcfF1VmcpiXoUiYCqs21BMpecr8rWMBJUBVcg",
  "key12": "63SLgpRs67BxtdJYMgz3hPFWweUWZ8UeZ2zEfy7ctM3Mxh5PD32nrnkyzWj93AV3C29ZtqSNbi6rJwd3VjMuEb2Z",
  "key13": "5fMAbVb14SLTzwoXj3GiKAckDkHEGZiv5URpqVzto5wKnAue3vK17oFX6jYsjfopPHiyw3fkc3HiW1mLRjtLNshT",
  "key14": "4gYtbhn7HhhHMBikrJB3wk9WxvqGKdVrkzvmmF3P1vkLxKVeMCGuF86WnfMPSRYxGgBcHW4FcVnP4o6dBqjnAMuz",
  "key15": "4zn835Zww9w9Sx5q7x9A7t9Rczx38rViFjB5BdeQiHVYoptGRgcAPtZ7L1dx5Cfuw5y8yg3BYU5TtFjMXzSdhpsD",
  "key16": "3gHjP7BRutd4NSncdHBWsrEK2fCLWPBW4hQHgWxFjuiQTr1ncjnmKZJ7nBZj8rgQbTf1uZkx3uPfAs5LEM2Ad9x2",
  "key17": "5hQdMDpL2VEykEBG6fMPkPy3BPk1X1KX29btcpdCJp5RojNp4AKwFGJ5QNXMZQ9m8Vqn6jrJMpTe9Ga2GgvoU8zW",
  "key18": "2zYBUjEXLHXGnf6wxkEcqxFy9kCZMqkf2yYdBLrbsLXzW1YVG9s9Y7Je3KgJdWzj7rVmWrQLd9xKSz24cYqEAiqw",
  "key19": "4W6erF5M4gKzAVLL6zy4RLTC2BLCmjJvsHEja2Jy8THM345QZSiEANbWcNgb9xjxW5s7EpYKPbqKDpH3bMsTjTvz",
  "key20": "47PV6ZmCvgAbmRyTGS3teiZFy7Zrb1yvaRwjU55PWqdxFgHNCmyiGQ4CBfoWLNiMS6M1GADtMgV2kNLDgr5mcUfD",
  "key21": "4gE5PRDdbvv34QPWcBRSMKbDEW5Hi2EwxS39xqemE6bbDH56Uv1FuvXewCJEPu7tF8mLpzBPmJUkrn7KAD7UNhVe",
  "key22": "37hyTUPDdTfz5NxyXrundzSnJcUarvrkSR31E6cdZCNBaLpECysjj3g415jX51TLspVQ2L8ncRyALpMqdMsXK4RV",
  "key23": "4TLqX1HsUkHroRf6GJHFo6ZPWp9EH4W2RsDnaB1SRDUAgX8ksdx7zQKwmhMxNL3afmTAeprTYYq3svUtnTECf4Wi",
  "key24": "45oM8abZ3AehLzDJ3dEmdC1b8AyDWFoyfYYBoFWzVGZ4LeowVYNyMXFAQqGA93iLPszFPQTLPZAouPq7bPcYRBT6",
  "key25": "5yEpRX5ZRQCUHoXkKrz8ZdaZxz77zB997KhRNy3YRSWm7kZ57N1vcmrDoZBAETYPtpYtFAe2z4Ej8TyX1PWVEq4n",
  "key26": "4smSUEiTYDAveGkv3YQdgp2vUpP6hiSJ41PwNYCysjXkNdYYfp5sAiG3rCNFdt8HDs5md6PUBBbEqPZaKkymyjqG",
  "key27": "4bRadwXPQa5zYhmXHh9H6QUrMqWncTNxUxxFU3GLR1V7h5CTqJeswWzPWGVaT1M76MdVXLcoxFGGM9u47a8wYs4b",
  "key28": "5tr71uESHXt6fL2KAHRHVQDSovCnCEN6h5KFee8GLiETz39NyaNRBRDyfj5Ht5B91SDJhehbh8HwnyoMWfWmJdP9",
  "key29": "noWTwqyC1TECpVBjfUzjrusJyFRS39ZXe5M1hRdFjU6uENbPXKMgcfUpW9DH8AFZkYrNTxVTZZiWLuamB5eUioL",
  "key30": "4X92EFJdyXhJtA3hk8LAq7HmkdPe1q2F8ckkxq3qyApWH7KmM7vDVAGbPhZrQyHnkp6tvZibGpAPNX8F8utkQ7iE",
  "key31": "27N7nB8LbtpbtW2MWQhZ79Eb41NQMeU94sKf4Z9gaouTxZBuiFms4D7pHYkzoHfkrb3xebch7LBzQ1HU1xhYA76p",
  "key32": "2K4TpdoF85YQAEwLN2PANZcYausxv8hJihrQDkRQNBUYCedm7XEWqVMvqE2cZGQe3553iGzRsbC25JbAB6jWhptv",
  "key33": "WMrRNGyTTM2NQ6JWSFzrcmK4A5bdRmwMkQ1jDcznTzacetBVJ7QruSPY3vLBFarmQYUm9q6f3hbT3br95NDNNBM",
  "key34": "DrcGAzsTzao3RhySZwHv4NmoF8ZqzkSPotYYvbjBSVFyftyF2BULXK7dseDZaZNTn8GKbhgMVzcMK3HYRKzmoD8",
  "key35": "2sBt6EWRfkAr9mwH3N9FfjweXED4CVWUUQ8gwgd1wk6CJDvARhr27754oWx4xcb419Gy3zyA9qKJEFqLtGmfkhQD",
  "key36": "3gL3ZUJ3r4MBmrEBAUcKkmexDnZjHwd45dRRN3YShnb9Ly4cRYNrcMUhzjaVdgqLmRkgRQhFr5vVwf9jNFnRz78Z",
  "key37": "2TypEDxp4rs9RQZ6y5ECdQBA262gadfawXYm3wpfiryFqtCtP5fjoiYT5x3JPyh16GwYfrvhFgQAfAiYdHoBd5ww",
  "key38": "38DSZQtq9NHvjhHK5PfVbJsSC9o5iT42ZqQvuepZsghhRAQDSGtWL3BbNjJ6iCKjeCnXbWRpyTFUpdDVA8eFGc4b"
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
