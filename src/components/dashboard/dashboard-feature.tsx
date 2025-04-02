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
    "3TqnRHDU6SNpuPQ8tWzQySvi84RS1UQTrp7x91CiRGwxkQdTZ2gbUfg3aSnGSEA4TzHZHDaRBTr7NSYupWpoRqJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "532QYAYjB9juXBz1HjYstmPneHuGNhB5uCTWRpKXprMKP1rW9ycABd5XrMqYw1gUwBzzhgxDnSmcbx74igBQtQYs",
  "key1": "3AjWkkUAhzwS83N4z23Z1Q9xK9sFrN6kJNmRGEdLbaYT1XPt2atkp8vhAJVsuA4rc5T6Ydue8Fe6XnrvfTVrxpRQ",
  "key2": "255MZiivUjrEF9jB3Dx9FmKqmbMiwDK3ZLjNR1iN6DSVzWKf3LuKZP2Grd3aoQ9ZammSWjfxis3biiEcTX4WbLBE",
  "key3": "3XegJhETAnEcPEGzVvcAyhi2Zh9qPCj6Ro52QT9xPySoMPoV6h1LYm8wjVRrUeotk2CU5WQXEzehAdRaxzF9mzjy",
  "key4": "3zMkLw3zg8xBLknfNnxQQNUCyj9vW6jmxY6CGcZs1DdhzYEfb6ysDfvoRDSc9w3ppJPR46K8JNCJtravE3YK4K6f",
  "key5": "9AKAKEQZjQSFhLbc5k9kQ2xb69GaV4WcbeV5imWoMhioehFumvZJ6HYk6Ep2neZvuiV1pv4rFKdpYaGS7nQihHr",
  "key6": "2PVHRgba2daLCTHdB2UEHCkQgag3JUU737ei1JL54RiNdp71QsWoAZxH4PWjeUPHp5TyeujnxWr7riBusHxXThUs",
  "key7": "626xBWh3hfAw8XMMSW4xRLEmin2UPFbJw8GhdheryZ68GbQrX7uAsg8g1P7YWhGSfcSQSDy8275BbqdaVwa2WPsh",
  "key8": "5zetpZzu7Vu7UYCoiyUePSCxrxT1G6ihwvc3LovGV8k3gDj8V2C6L671FHvrjngNZi4n8vUX4rgG9Ys34ggQyNyA",
  "key9": "2AAwvdDWoLkHCkyn4JguXSZ36V16aidbtN7EFQo72Hc41TDjRsh2Lt3dpbodsYquXBqP2ADa1oLR7TvUq6tP4QaZ",
  "key10": "3NwtPFf4ZQ8oHADLW1NF5fosMSNUjfXfMF7wum43uec8VWGRJXVrWFQEKTRUQE3pz49KnxiiN2uY8tvAMSTNStL2",
  "key11": "53TBrVS47PSjxcS8YAyFenr6rwtkCzy5dA8bnztWQBxLpbnCq63nSjoAhkfGDfMuZ4HyYi1TgKUYNNfmChY5asE",
  "key12": "5tgiLdEFTLzK5GRp4QafqVNaG7hHQBsc34g2uNhRRtAg7vNnC74KPkkMdv49MkxbVxSAVA3sTC73WhD2nsmqeTFA",
  "key13": "2Hky6momv73WvvuXmuFJMTkAnmEPSsdsTXA9piVtzKxGdAfCkFBsedVK8mg6YTDZFHEtHqK1XUbC6g3RErb4i2or",
  "key14": "4mrbH8JVuJYHDHKvVNEkjttXn3Bg2Eyeowfk1qRXE5r8zwZt2ePmvZEnuDnx85D2yVTRbFaYuBcpSxdVjNw8s7DD",
  "key15": "D4QamLAu4ZtgkKGd7vAyU72SXAeSoSmPVJyhb1pdK1581UGgGHEaty9YkioPhzzsLerjFkGyZQoMaHRNdtDU3jh",
  "key16": "36Z8swMnsZBSF9uCvsA36sAjRrt6nnQRUyVd4SDHe2M2CkvTVxVv8UscP48Z3su6aZAVj4hHD4zCSNJcA3bjDGnh",
  "key17": "uuMPe2W7uo32FPFvuf5yugmtwU2e2UtzrMTKfuVc8QkVrScmsDzh9wGg4LN6FL3KizHLaxRYyzkFEQn3NUhdHCL",
  "key18": "fV2Uzb65FetGaBF6tRtiimEnw2bTN53BQHHf43EgRxnka9HbumwdEeLs22EBL3weqgAQdTC5o9WnRPbDsw2hVNv",
  "key19": "41UotBAGbrrk1eeFKdVC4uFziuTxpLeBiRghtThN4qGUT21DQUKpWa7DTEBZXd6zs6RdfE4xZdcqtJGT8E1U3JBh",
  "key20": "66RNv9AKmezKevoz2xg22Bc4udMvDJ9CWGNgv7Sm1YgvcXudLZ1AhTKsabBY2odmJH3dFiJNdNBFcoztHzqkQUGT",
  "key21": "uzyoJKBv7DwiDaJYQLwxU516gznV31YLUmwDrAQiiGBXn9YgNwrkbtxGu6frPigNZ4t5jgjBPKJWpxTgUCXuAak",
  "key22": "4a5oe5KraiB3hpj8EDWwBPjgs8Xj53VbduzWMXABmzV57mSsqJrku6fJb8vfbujXZKimbHGWXPRzsr26drnkpZVK",
  "key23": "PekueDEwVMNmbN5spxPR6u8x8xUPaJ3nHhBCSFARnD418cy4ePqRUk7VVJbUztzj6dx35v5tVqbaLekNrXnJqKM",
  "key24": "yaaySdfdEfQc5mynaZV4Qkufbmv19V3YjcSYsznavx5otz7BH87vMRvmiTmMtpbzQYnc7MJLaXURs6RSzDv5qEZ",
  "key25": "3QcZ9pJT4d64McqaXh2TkWmjkqfAYP9Z9Jk7wnfqqFiNjG13wfCVuJ9Z9XmPTs8tHNyHvJMDTHkYT6Eb8raNg6Ek",
  "key26": "5ZsNuH1VLBTuACqXYgh9KKtWbGj2QKSP9PLmvHvRcSDf2EDWojpstmKyNqAiCeQeEmxyNsk1a2qd2nKRSGC31BWH",
  "key27": "54jB2Rk9AUJFEYjhaD7re8vZTmRpikr5gsb9z2XJbjbbRupTeuaJ4AiMsMHHkYbHXby7MmocfXSgo4ariSnU85oV",
  "key28": "2shkKuijTPHUT8NGY5umegjJjwGu4YzQs7KMkc2vYkDiX144WvYQdfGdN1EAMtv2vYriwkRPPXCqeYp65op2hLZX",
  "key29": "3DLrG2LMNmu82mz9mjmeUhzFf76ZPkrzmaGGUCLmtq7qfquJwpgTMeHFQN51kQBjAVAursiDygdfYU8bx5QtaHz2",
  "key30": "2kMew8skehoXHCdW68Se2jerwQo8iTmu5mq6s8G5Spb77WQhyFzNt3PAhxCzpn8dzp2CQyT3Cfmoe6CZX6QnDkMj",
  "key31": "4UBUHmd3zQ6bKddzo66Q6o3BV9Lu97x5RCGQMDVCAXq3TBAw3Rr5uXjWVwSriMsfUQ1JHbtATakqiwFegpUoGKpj",
  "key32": "2Y5QsZU8Q5Wu7EaNys28Z5u5S8hUU2W5wAhAdS6zTcAE54CQuKNYbVyuFQPvTbgxD9pDXDCwBFHD9PUZV19MV8kV",
  "key33": "2YkSSi44RSBUsnu4ibKig8mEiYRhcf5iCX1yTFFR5VeK3h6PTBrYyJkHBdA9uu2GgLDBv7tajGJtwQSMKp3Nrx6c"
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
