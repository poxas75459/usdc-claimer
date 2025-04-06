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
    "4475oRobH44jfghyaA7C2yvhZtR9mKx22kzL5wEbHR2Wm3jZJJuQtfKYTg45uPe7ZJwGNZjC2aWm213z5QmaEJbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WFqvx9eUyEt7cyPyQpU2p16istimPibEiRHn6Z7KUzTvduyFwaVm2MkYLtDnG61pxq6Q6v1puupwwjSCJXtRX",
  "key1": "2s5ZVwxnAVmto5mY3CHYoNCQ6qS6ELPExdsVswSbUSzg2ndPksubodbG57A34DADEqR8LKKgJpNCNbBPZ3p1WD3A",
  "key2": "3GUQR4wa1RoaXudbwoxMDEqMgQEnXhs3kj12kysWB9JhmoJeVnskAodojuJAV2ymSXhkFd5TuyeHm9a62MtVjH4N",
  "key3": "XMTvGbzk1VzG2t1QMtSYzWLRx5h8vVsXwqVNJq4mARMKmjBwF4HHWnPJHYy4QtcubYDq29Q5f7upf4XtzZBE19B",
  "key4": "3psxHbRnjhTQo9GRwZceyCdBH5zU8YjFph68NjBhjqMkc9QKibNDKqJozsQisiL5GzxpbUKg7WEdnKy6HpxXf3jn",
  "key5": "S67cq4Z4ErpFjRCXaqCB3ideUwXhJ1g35RKDncBH7eHvafwTWJWcPxGqTGeu6FNRgTbTacDtezBo3G6jFS1oBYv",
  "key6": "3VAnr8RFTszhFBRKChER7vd6r2SQJb6gCRrSyEPQ29AyHMzRRC5kq8QTeU4CM8LKJDTEt7FWQZfsEeByC25W3PnC",
  "key7": "qyhTjrNapi5wWnCKg6uCgyFJbEGDN3jFJkFaP6QYXJeVZ42VpRDXrTTcdxm7uwVwCmpkhfhsVpGwQUBHWL3np14",
  "key8": "37caJVLiLrCRrKDQVkyU8gYLCmwZSxx7iSzLTXXojPSzbWQJ26sgaHWN6yw64W2KimnagNjub4WzGaJXDNnMFvkC",
  "key9": "4pJw9AMy8biXAz4rbQkaLWaNqY5hXFEKBJjUs381e3xaczVGWNYuqMVg1qpwB8zznGPksEU58uHeXbDkYUgJCcCx",
  "key10": "5YGYbrGhaVskPeGpLFs1k6KPJ9vrbRurXbrzGhr7GrD5TxfxVf29tZmyGAg4ZWazivtDKW4FwJCybr6i1YYk7anb",
  "key11": "29KT9PpyviVx2jWr2zfv65irH6ZBkjxNPao6dRwBHQRqpxTf36d8FrJSk3Mh18oq1avpArqTL7KYconv8uppydsQ",
  "key12": "2qPC5j5rTXb92Vg8S8J59MqgDyCd47VpTLGhatHtKRjoyZPtrhivqNQ8jhAg81NmxahHr9VQ4LM4Lh8WAQjvUpfd",
  "key13": "5GTiCrjNom7TMTwjMJcT1sniXuww3KjvppyD5yF3CpKWrbyJDiT2Gk25D4eqZMpgoop7SC6qNWDqE6oxCgCY1GQf",
  "key14": "3TmizZR1y5J5wZHRoMh6JRCsDZjNojEG2Pqq4RQjL5KHymjwYww1nBcoWCjk5r5d2irHz5HTW2YmUmw1JsEEAwAn",
  "key15": "4bFQ7tkCcGQdJds1976VMsJTK5rxBkYQbyoEfusNjaUmfFADSzg57A6M1gVbWuErYYDoGKyWsj2AouukZ14vsmxH",
  "key16": "4P2e5n3NHN9XVMDfexEbnrJhEMoGEb8L1y4qpcBmi7DV8Y6aSnchA1tsQaS6KMmbnCVgBT5LobcvyeibSTRxfmnv",
  "key17": "4gbEUQawrtjBMYjUajYUbKyPR6BJVgH5PPXQ2Fg5HMQS4DxpSyJuN63w3rT9J6NSzaFfcZ7kYfC8J6dQNGaJv6ew",
  "key18": "4DkY6rRptYTiacqAMxsWPFiCMgoNhPn2VC8qe4hxN5WgJVtMmUd2eko4rhyVjBVz2r9w4Ku7cW69AqHfhKFSuHk8",
  "key19": "64MUg3M7D36C1kks9bwxG2de594wLGHXrKUzRbqaFZfByRL9wzMc1jnJRC8f5HD79v6UXkq9UToBBpmiYz1it1Z6",
  "key20": "59hNjCRqG8bRYmdQYJ5A42d7b5mJg7Wt3fb39o5PjFZu1pbCJ554dZqPPsboF1M2pe7KqDfVueVjYWtKEgKDX1aL",
  "key21": "2bLwbh4g5dcKKbSyYVMPhg1cX9YdHMZjSupzRxPvvh32etJAPBGZQTUUnMoYeGCw1zfBpmHG9gBP7YS5WLP8bNgH",
  "key22": "5MTSVrD5Kz1TQuCvGDUJk5E71ehspub37NHbfcUUp9EqjSReho6AvAgxykTAY5heorMta2G3WcqVqe5PBcUcrEhX",
  "key23": "5miTWPLFK62CjaFtddWHTGuYktg4o1YM6KK19hTA8ey2pjtYzhR3zUi1DYc8Mf6XUgueAwRVaiaJGdMuMtaB9mAg",
  "key24": "3cVmcRzxeumQjZTFctjuiKNkut2CapA8f8SnhNw7MKJRPnV8joTaSpZuwoj4LbibvGyYRGD7TzZj5ZrgBefktdsd",
  "key25": "sgqbZ9NcnxqexVkRrj7Qvi7VYUNWymTuNfUXZbqRKmT3brauwiDxHnV9soxPiETCJaH719RY3hQVLJkWVRQ3ES4",
  "key26": "2CFtJnCpnQP8m5EcUoMTM1da7Q1Hc9V82Q6Y49AspovzZcKbnBHh3kijkUR31o3AiWsxB3VVQMYULQMcx1oQBRDv",
  "key27": "4fLKgGEz2npddTXSvpMxcDzof7PDHMHBq9bAUgvPugtjbcKHYMGGbyyX6Eha5T5rhyLQZVirBPeFaBqHeFAsPvbm",
  "key28": "3UP8AVkiF9YvsxEJqngyzgpHTHgL3UG176zYpgPEdK6rkqFknt3cohi4zWdhFreTFXNV1wNeUD4cdjRC8nRPXN3p",
  "key29": "13xQ8cRf7Ed2E4YsANSCAyDtXiu2zF6M8tpRJt354mEpWi1ndbgcq6CbUAJvqGdWj7wv2X3t46pxsWK7NDs7yan",
  "key30": "5epu8qLu4d8c3ok4maBdVfYCNBabk8SgbaYvqqu6toPoRcqzUnjCzT3AsBNRRSssCqPm9Sh4mB2Y9c31gnQSfJ8k",
  "key31": "T17JhfQLnHCfQMrweWVms3bnr1oR9LrjFT9XyMQXVvwi92XzG8HgKdZxtZc1a4QkChcnbEQ2PguFU4eXKKdAmEn",
  "key32": "2ruWoMBrNAUjRVrPx6UVzdyVuozVgPNBbFAuyrZcyYTJDRopvkT8eNbxywy7jgCCvbn9SQu7vL9mqtD2wCRzVdrY",
  "key33": "3DXrgG2FsrufHmDVkeBvVmnXxBkFPBrsMqmSPwwpsLCi8BmYay9aLA6zrL57ZQNHu1GCoczdHypBMsp2HFkuz82U",
  "key34": "6Cvrzbg8ZrDPoMEQeFggS47N21371R7gunWYRqwgTTmEk5mwnFNBYzbPSrWLGwcAzgXb3HN8pbnVGW1CiyNjgJp",
  "key35": "2b2mn62kjZ8nZ4UHi7c48Scds4jSdEYGQfPgYCHp9K27G6yjUv77w7C5Upg2g8uBZUWHLUHYFyYcEVN7biLCZfx5",
  "key36": "26iYSrRPPvVecVDtbyjnCW2xB2rdPQq2hDv7KoFTBRNwFwiiqXgu6X6iJQXfUwjxSTtzFVz19eaCfFZ2LwtBGvLx",
  "key37": "o36NYRppDSA62SN1wJTj4kDvCPb6FeZNR3Kd1GJXNyQMd3PNyMf2yvkspgjFxCJEKZTnE6yqNRQajP7YjhGvFty",
  "key38": "26R8oYdWk3QciBAsYfDyTqrwm2NY4ngDvpKny5vJngf7vKhqYh67QfdshfQa66Vwax18PYYPy2XAugqehduhbFGo",
  "key39": "4xVHZL13rCGGtfXwy1uWE18WeTSk33adNHeTfpYuQ38rUP3rZxggRQZcHcCVeyBV3DJP62jT4B9dAuioVqLVpJGg",
  "key40": "51bMwaiMcxuZZo3Wr3T62gowntQNwGHUJJ7FazXrD7bknK9zwo5tuiFosn8hCZdzSfdRdDWXBr8kuu8XPXwLp2Yr",
  "key41": "5dnrTYXM2qR6MNmykP7eo8KdpPeCruDYLaga2jo4nxdpucNZ6C79utUaYcMFeFDQSikg1S6UvCdL3Jpx9TaQ1EiA",
  "key42": "3dxsoziX7rJ1guLZgXZkEFZXX8BGEjoWqEfTc7WfBf5fdmqB9R3qUQW2jzWj4mDd1nAW1cuaNNWBmGfftD6g87mq"
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
