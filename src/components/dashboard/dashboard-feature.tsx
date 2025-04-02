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
    "5QCmWEm5d7UBc1LCXXLhuBe4HzhHuPDD71SnR7u9TBRX8MK3u784Ee9uHFxkehVyBRMuk1rJKGTpCJT9saTE7fQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4La49mDDRM36xWt7BiCL5bXwARSaypyDVm1vQ8NaPgKmkfZNN1Nef7nQtJJjMzQY4yhgTzwkitSsh68GZTbgoJja",
  "key1": "5CWvMtyd6JhGne83L4vCRnUYXJiESAztXt58ZeBufpjKKQd2XP9LyJjX8gqfJBLyyZ33TwCx7hQ74CPv3gdwH6Zk",
  "key2": "5iYyZV3h2EtEocP6J4wvwnXfGYvUBwVrBEydj8h6WvTd9UVJ8UnbFv8Yw8mfQeGxVYJKpuzFn13SnWdjVPPtfdmt",
  "key3": "4BbZQi5aoYoVudVdo2i7Znao1SBz2SD8GjhibRQWG5zxW164TaoHHu5pbfGS7fuca4WeQM7xeNVjyCsBfhyfFezs",
  "key4": "gM6rjg7Xprfh52hN39938zRFafoPpnz8rBFiNXv14XaVzg9eLN48xSTdUPGEhXHCjPQXKwcVaVRiTgY8qTvJTpZ",
  "key5": "48HpWS6b9ggzw88Gt3kG93BhAHyqajammMekosVLTc1Upm8D81Aq8twCHZpuS8QubPAkabpT7gE2V2q1wJT2NEU1",
  "key6": "3XTxe4En3iPF3Kh4WUMk5QAPmPcjvXq2pmjGdbpWhJCrQkxFiUtNt3EVRR9sgvs2RW83SREFTTJHk27peEHpSGMw",
  "key7": "5DfGE5tmEJ1ocpv9ygJfpY1NLpabuWEpK1WCrhX36prvhfAVFf74img6rj8narbbZ6xHoFdctHphts9eQphxJRea",
  "key8": "re81N6jV5Cui62t4ioGCq6ywLf3vVsJSYk1r61ZioKH1HZE9Vud81FLqfyWGjjePpjNMKTqByeQtjFnejvzG4oA",
  "key9": "nbftV1L9sZZAaw14wxCGVkatvB6WFFcRhLGxCpEaEmZSpBzZbmHZUqPTvomZ4iAapS84PGG3avjrXCe3A4sBgcY",
  "key10": "5qtD7jCGtoEXZx96MsYKUTZmw1kTFPXKrxv8SnLkjMQGvrdutx1RjVBLhhAqNFdPZHJYWopGc59irR3uK6XfrgVa",
  "key11": "2ALkd8zfC8MzrdugvoeeinQ3rqTXoJuwZZPMkSiU1DLBjGPEdjzA9MDgPFpmCYvFE7YgHrbtK9sVYojHHJXgQ9ca",
  "key12": "5F8gsgePoFcpPYBAbt6Bn555XCovxgvFzXSZHsdRXPtPXWHSWQMMDjPkuLppWX1CDZ5jgWQ4Z3Pxj4X7U2TKnCnN",
  "key13": "2MzWtMmxxKb7xDiXeAQiZ7LuhDK1vQYxmSv4xdJT8JMUco8tZYfdkZQCyfhAvPXYry6xgFyojsHm1aCdZn89cQch",
  "key14": "5MUj8HTpr9YBcF95NESjkMDxY7RsK2p3orycmFJTEUJSz663EfDas8d6Bi2AiJzE3USEadcro9UFTuRyFRZAPMfK",
  "key15": "iVP1MKgQhG4g7HfAjoc961ugRzaXKFrhQVXzY7FjgvtiVyin1xS6iEvhzVZe4JqDCNrMuohTgk5QHRoPixzsLTK",
  "key16": "7ohypiQYTY9E8DJxa22PoYpcVG4KEwonPGmXT4R4tjc4AdCmPNyyNZkd7WdpncGLfLR7RyFM1rYZyKXfCfqdnmb",
  "key17": "61fUC48w8W6gueu9AHjdgJg7NcT1Ak9SVL5XTXq1Eck5VQmorNJs2Fc7TKPWS5xdtaDox2hTLAHL2pG7neeHaSNr",
  "key18": "DWgY3AugXYyt8BCByytt5p46LFzU8zVNdSgrrUEJDKoNwZ4xmE8sB247UTxJiRNmf9PYoMp46madT6WYh5ZMwsi",
  "key19": "2wWAbfLm5mvYy1yghGigQDiv6iKUUSe9bqgTXYCAmzKVCAqM1igJbvccQmRC8tdoiUDpmVFcBAh8aDpdKpsrSv92",
  "key20": "5PMjFD4VB5zZQSsCCkSjAaAnkhVJpi3Vgb1WeCwRBAgpkXsbv7oKoCKe8RcDYcoQUiAqefMRNXcGGPfzayqH4QRa",
  "key21": "2FCRf9mXQW1Jh4b9c8NdeSqFFZcnbpfndJwdyxSWi213hByUhTHh2fUrkkPnbZbm39rkzzCdNDsDBQYcq3Viopvh",
  "key22": "4rhBy3K8Pmtwu2hLCv2bu74gbXhFCRKLHRVda49zaLF3PXYbcpaRd66vJMV3HTfHtbDqFG871yEkMUXg8wLXVpQG",
  "key23": "4VRUbgY6tmDsQozAc7ZM6rYbnfYqkQkmzFwadjqAWQQe5LtbpWDK3zVzUDBbjURrDvzY6eS1iZHihDZkzhsKmzmD",
  "key24": "5rmBajSv2hdQwY1cnMMGzCdqZRS9EShGkphhNrbyna37NpU65TJpagmgsYxL9URgrACDwJUZkb31PDioMfQUpj1H",
  "key25": "3W6V45Gy1noXppUX2CyDnM13rbjcAStNpTJsKrGJ6esKd1JkesSLSXjvrAtWoCRzTFjogxCRtMJ3cDkJqxLewpXd",
  "key26": "3KqVHymGBCLRfhAHwVXgP1mHB8KjnpTeqBNG4aGUu6gyfFtXB5QpouSoH1rusj4DGm7dB8JAfTD1LZu2EvmXkJFP"
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
