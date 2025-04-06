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
    "3HDsZ2y6f6wHPXGmkwdPUbmmSybD4vektNJPbJaB6CmHgnhnNuH6kGqSWi76fMhqtzdJKJ9eA7MPfuLr2gC1i7yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ns2L4WjBWguueyjiDkQZTaUbzukuQXgUPNRBGnWYGxEXGWLy5mDajYEvmfNsqwZPBxUHd1tiT7JayaJqfxFp4ZH",
  "key1": "5zMT5RPWKo7pPuiHm9tsF3sbGXYz9aud4dCvB8eZBd1mbjtzDHnjejA1YNiQizWJbHYMCkVCrkWgWYMU7JofCpmL",
  "key2": "4zY3z4mDpeUcyhi991p4JipUCa68M8KqoGQDNxibPKYhTZevAgJKwnzuMakqgyr41bs2hutCWvhmL8VAtXcuFDnN",
  "key3": "PrMnLHtPtWwdrJzsWrVS7QRABteQUrzEQoWJMfmkiHS63WdS7jUCZFRaeYKJZ5oWFKmmuRgyfX4NiDxcmAU4yxH",
  "key4": "4HcdjSJvMy1cNStWyZ6aGAw9rF9pMMda7aVfSU2HwWQUGAidiwro1ixuLAz3owhqw1BdPRsKqF78Fa8NFdHsRb84",
  "key5": "5h1E3Md2H1ZzT9eyHQTYmvZRbkwyG8aEVbdQCra7u58yqw76Nh9xyw6kRBGAvLFSxkWXu5XnEjubV9j3Ug5A7oUx",
  "key6": "3qtEKGYDdutSpmEuGiyX5xn5UzsvPFudd8mjkbNstQxHQGsub9onJC7zyaePq3if9vdv67SsR8SABYLmSNUDPknd",
  "key7": "3nm2EfmRLJjNDQJysQ7V2wpszXTxMV9f4ssyFopzc77YUUGDiYQv5oeXCN6toHeBceqKY3pFySZuAnPsbPtxLJDG",
  "key8": "3G2Ku3PNnrQhcegUuhnz6ASV7LuAdugEtWTkMmSdmZkLyRvuftuJZswDUETJzL9C4dsFL1aA8Aqs7gQgXMKZZd45",
  "key9": "4egYaFFthM9LSEKjSXeHZE57JnxHHC3qQXNSY9tupeBVroN4HsF2wGBc3hrTTDfNJacUJXKFhX3mgwJuG8RUjC7k",
  "key10": "5JFdmXJB6HrgdseCsFNtmHnqWyQRbBzKftQdw4TTgHzZyMwi7FRrKZHaSNdDSdYnL6TkHqkN3mgqSh1vQck4wUJn",
  "key11": "3meBRMc4Zwm1Xs5sNspTsoA5Kh9XnzkBKECocBUnLBzMvP7UaAX4yztQgPaqSW65JV7T9soRKX1D91eebJaQ2WWm",
  "key12": "HY1agKtMgtRgxCqNKnAiRE6WeULKGLYBG6ztsB6irXQ2zyMBJZMTGueWKiQpWirogs8BULBi53ckn21U1Pzv6T8",
  "key13": "42hztMCJ6uXMb7iKo9xSeUQGGTdu4J3DgAtMqoqB3zmT1TcoKUAXqdUrNYA9iAxrBJCjTiiFKvcutwFqNgoAmLnH",
  "key14": "2Y2fcvoE4By3VTUUHGjwqp27sE8k1z2pGSNV7qxMNJ9rcAQtqXg6TrJx16Ud68p1K2EHS511RgQSi1QVnEMQSw2W",
  "key15": "53D7jNUmGs22Sg1uj2HttMzFXnTmvAbxNbct1PyB7iFcc6C3vsgva9XsZrdCNsTwTB1uBecY3xKKFND4mxu6PZrD",
  "key16": "2W79RNyqCEDLjw3kY2xxnGQkpYnEqoBWj4DwdXZYFrtLJLpS78W39iwqxcmB2uKqEQRYzJiL8wKTKuSMHaj1qREc",
  "key17": "4Tof44qNSQRmqrfkn25nThzEzAYKXXCf8ZT3VnWkVTaMRHP62unXhZDuTgRq8rPa5ndysaiN3R4bgfSMFePALyku",
  "key18": "2pnXvUCDgmxNgfZZc5TZSJacEDwDLfpGcRFsiPWaBUxLVyzmLbFE8RKLdfz3Gs8A1zzuW8eVeB5tAJKbis3U9y5n",
  "key19": "5GBsEzqa7aP34CTiFPSNscE8iH2aTbvoXXhuheC6pYAXAB2LpQxjgQAhQtjuMQaUTxANVK8BYjSoZDbixeXCfKxw",
  "key20": "3vaLuoZf3mxoZKXgVP9jSWTuCLTB4DcFs5QDc5xUvAkZCCuhhZJZrFBvgB55SDd9zCsR3bJABeCVHMPqb5rUyuqz",
  "key21": "3H1BGozmE86pG1RuqcLXMCC9Mw2T6KDyHPrt6eS9BGDMqSR7S8Cg7dKiASRvPJtmS7aybmcXgJPW8MbadSSq1bjE",
  "key22": "3f7og77yYRujthxn7LDhzCA3mzVefyi1PZ6ZDGmQuVee8prCrNUzaLwRNvfRujHSUPBEuU2VKqxfhukmSuTNYEAr",
  "key23": "4qXWrE58KVoCUChTF8TqkCtEn2FXuDq1chHuwwgknS2kSaaCxVkJxAv8iq3upqoJptgmUnKt4Rsb6WVsRAWyUjBS",
  "key24": "5LgfiLUV6Y2g2azvu4JCAz47NA9H76eCTsq1M8seStqnoLcoDAAP59hhBRAob5eoaywGUsMS3ebzgXWszEQotLvi"
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
