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
    "wuxndjxpHeMxTPmJZyyg26nTYZ6ErnPCy3YkYFvVQtmnDv2cjFhuuRrsgaM8wADjZH3DsyiCjx3Tr1GTdgQvggX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbVJsfjfJfPv3CtNyUy64BvaurRvA2wSEtTWFSbewzPF25YcbRqMnmSqvWjsgkqt8nHKnysHu61rqvibFupLBBu",
  "key1": "3gxGdUpPkQXbL43AreMdAJpLcMuDjquAmWS69kZ3FD5ixXwa9ECpg4b75mYecQDAMTdN3PM2gMpF7sYxt25xfMfc",
  "key2": "37oxgiiX6gFLfw7j43wFuyQawpapjHvmj5MZBY2ZZcw2Fcf5JJc4Q5PJK8ENoUuoxA7Nq77TGxKPLNofaCJRBEVk",
  "key3": "3Qx4mh5FjErH1Ncy2Xmaf7mpU4iYpwuMxf9FSZ4gGTuZzisMSZtR5UdnNbxoum4exC7spY6FRHHd85jKvDFoNC6Q",
  "key4": "63ZeAN2WtgDdUu4Dd1wF1B9AszfgjQdN7YYnfPGyBXBuRs4DMKj2QBxDKwtvUJwe6XhNgeVM7CLRkRMPe3qs3Lbt",
  "key5": "2pQRgUVAHX8etRwi9as7soqJaahUYET88Fk76nrPYmAaFwsKrVAo4qnzCTDpFRAPPoy1BEqBFmNqQX7w47uQyqu1",
  "key6": "5QvYLiqXoNmAENFJuu28ix25G7mJQf54Y1W5v5EKMu3R1ThEhTRCLmSfBmkCVFHpgzibxB1xuYMQShV4qLqWH1Gb",
  "key7": "7KvVjzdGBo6B1kVh6SHSCJh5MNk676u3evMsUxoQvpsYigMTDfptdSTJ7h81iCzLPjGz5R2q8MPy3xdRV9Zm7vL",
  "key8": "4pfs5xJkj9tpXHa32sahn1ntX35s8RdQf74HYhaYWFzQ86RhMkcRjACgHcEqHufXPmqpSL6CTiNaCRBGFMvhg6jv",
  "key9": "3YqYstMrDV2U4Mf8mQutGcSTYUPwKfDhb5S3e3Chw52i9ojeFsACkkTVQUBYDK837fiZvFvnD9Qv2J9aJqmZEiqz",
  "key10": "4ntQ5diqJP2X2gtT3JhdEvGdEXgkd4cWxsqLXFf9NH3igdCwwzi5wsXGqKXbg74p55ncA3YEX3NjciQQi479Dv35",
  "key11": "teLTcYpaz2SxJADp9duTGG1zUe1bESi1wVCzpv4pzfCjtNCXFn1MVuHeLitUBTDfgKjbtHQkJwjKqRxAe6NejdL",
  "key12": "5G5s4ViZpUuoBj4YQoufKgW6EbCSXs52byBm2nve38oiWQ3HT1XXAvEi9KHDbzPtcbEWmDsCSVL9tPLgZNfHGAQg",
  "key13": "4bRcXtuC2jpdQWYHBe58tP8vT8LGnwDGpnNo2bruPiMALDHRDpkgyXjPf1zQ39PxH6uWTqVL6P1njMaKzG8fmp4c",
  "key14": "48qD4gzPmeVVw63Scp19CRmpRB1ZZfGE7vmEcboiVd9tzgUW4WwGZCNRH3eh8zX4dPe2uPUyvEsVKrbzGnz38gRG",
  "key15": "2VFBFsUKMhggE5wW75JJyMcB5D7hYAdTV4sPKMa4fVZTE33e6QBwLjjbMZhFAj2nTHytziAB77RBbXPikW4AdxNw",
  "key16": "3RY67D4TB9Rw49gZqf4NYndjymX5P9TVkvvvGNMBbfi1fqnNfGcLEiPVDZKY5K8ksGwPVLR3S4bMEaevzpY5QX7a",
  "key17": "e1vZDe2qCoPetpaqx9PGUkmRLar1tP56VeBABjHNNE4xdAuyJeT6dUAj1w1tGG9huTXx3ZReytpMhxy3icWwn6Z",
  "key18": "53ypQpTFNiBp8t9QH7ytuu3snDsY7TX8yjJFJcHKE4NYFE6w8hRdNkKkV7UYFYfyBSu1mBtMzD61Qpg1BEUCqRdJ",
  "key19": "3Lnczw8yi9pNEBHxLtE56s5btYAyAGfr1e9zrjC3ezaobDWjKCLgvKsoLVo42ccVcc22TVcQCrUYurbpNSRfemeB",
  "key20": "5S8uBLHH4xzu9LVj2Cx4WcwbN78LZ8sPsuXAcdYMza4hp2ikzndYL8CmNLUt3itrbc2dHKqkXx2kHxw79H6VfrVM",
  "key21": "4AqzHwRwMXedGjCdK4dB9rdRpa1BromXhYphkjA6gu28HXgKQQ9178eDESocmtt8C4RHyoSGCJ7LSsfdUVuonVSb",
  "key22": "3JhjpNCFgq8cnDbFe28jdELB4KLBnbkhrtDMQw2wspaxGQSeHX2U2uYP1MNuroYeN9H2cJ7ADJBF41H7BbsV6j4C",
  "key23": "5iK1TFnSaBYKG9B7QiQ4kdEMhLT5pxiPZKnH8zDp6vPuXBGd3WqDGV9FZArkgKKp5nBnM67MkTV5bLpTN7CXRDMM",
  "key24": "2rxu39N1WcU6K2DhrMCNij1EKhmKxcgq9ickFqHZzwPvFv3uZbU6siyeYBA6yzyqqKX2tFwrUJbLnesqC4YEkfze",
  "key25": "34fE7JPgJPgX5kLAXrX2iL4Ziy4weHZYdCYB9fvfhp3eojKKRxGqm9HAUtM8uDhBJd7nxVXMtfHGmawAFhLKyXCV",
  "key26": "3X2eWCskv4XUr7xBwyPSWSGdiZYuLDiskmNRERHwXCQbxXw3yUfXaJnvF86auTzQFBFRoW4YkM5fF3ew6p6bL1Wc",
  "key27": "5gLkzY25hbHALFSKjRMnqybSsy62cZ7GDowcEqXDn3JtzmZW8BrL2EN5BMWrTiGfKbUQW98pwTcKYwwQ3PcnJZog",
  "key28": "3YKHDWtUspkis2v2ZaR5zXPHH7a9iCWspM69H28STR4UkUVDVi2akB2pfrC1DNZmDbWDybSPduAJa89ruyZSvZJU"
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
