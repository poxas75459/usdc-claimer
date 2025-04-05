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
    "4mbiLqNSVyZTwbFMYyBAJxKnXuvnMphQS7PNixrEGtwYeyk53VXefuyHLPteSU21gtRAnnKrfBVHntvPGAFCQxqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31zhni55vrgHtSvC1XF9wtfyqcRXmf6jdj37Xu4LLec3SBTu5UXJaKYdcCZdjTWgSSGsyqw1jfsrK4qnTnr7NHUN",
  "key1": "Hy1HLaT6x3Yz1xtnaRaz8Bf59zHqYGpkixXQyxS2ZHGct7xpKnV3oNJqUBw25txcMVFtu1FXFgwUSQzM3VfdRCu",
  "key2": "LYcgmnHRka32rLQFNKJFaLGzHHwj1uG1qvddTX2Vwiek2aXvKJJir3TKieug6J42DhhGkh43L4AbHe95T736kyG",
  "key3": "4PDq8v9KW5GUdLWtAHiZ5ZtdUo3uJ6UTKwvRT3L5UPccNuuUbsV2u15NuVsdzbby9h8aktbhi9pnhzvDtup4BtdE",
  "key4": "66Gc9rCPYPZXRMqDXdQceqUvdYRhqCpNJqWEvN4YJs7nRsNkX8HvruJMgQPrX1N8zSjHoSEUTyAoD3qu47nt6PgU",
  "key5": "2qgE5zbE8N2rDi3iHpy7fnz17Ld3dfGQ7VDjrBv4fSiaYZtNDofcwYC2F9tp2BKhC8uoFr6JLdwqKNibfRZd6HDh",
  "key6": "CyuVvha7Cu27dRVsLdrmusewSQMoeZ3xxUsG95wr63rrPWoMAuyqaRFTSBc4Vf1pFC6PN6dzZHbbaHK7rd1pzMo",
  "key7": "3sgujKNFT734i3WfNo25gbESgdja1NSvvGtukyM734hL76SNaANnY4KyshEfnpCfCSNqvBioFRTFzgMQF9MfHWux",
  "key8": "n1ZboBZUi5TwLYBayrSxPJ9rFZZeMg1KKtiSa5bssE1k36r5xHKdadRfRcgFnCKxRVtFyS5LatPFMaAU56tKxZ1",
  "key9": "2MaMhK3mDG2HkbuG5qppexkQzu6uUQcrcGNkhTheANkjso5iCKYXsbcn4ZnH48zyTdeJa6HMJpuv7h28qjwChGh2",
  "key10": "2j2bw9HuhiL9QgArUuVwMH2ct89Gb2aDuricNvk5aWuqGAzGfLbEpFFpP8mryqD5kYKn2oPkGPziBRj9maihu55K",
  "key11": "49oTzJpLucRWvc97yJaeuEV24awv82X7sRQW2thHHYXHmEw9QGEXQQMu4RXNakoXrYGHiLAYYYCE1ctAyTTnLx47",
  "key12": "46XDmQ2MWtRUMfnDG4nQGzhLPPSH2Qyx7oekHnzdWHSeDzeK4gYUZvAGCEQWzBG68kfUkUbn3mDuo4tveV7FJkFc",
  "key13": "3EkUh111nocHa76cd4msTvKAR1cUDvyPW1eHBrtM19P7fK2vxjk8ZyURohA7DskBH5LKEGDNrtTbTPEVcMnQAsRS",
  "key14": "5QnzbjEfMMZGGGYXKs5L4YX2BvhAvzHSX7itg5XebeDhAQ7L7tDU7ZNMpiLp1rgBAU4sWJs5yCjjrhDroGqeebw6",
  "key15": "3jhrHtcj8Poc2LASTHiyFUbd1qbptDXbZsMXcYBxqzTyvCKKSd8yJFaoT5JD9xQ21iLMXmTw2TBSwzSF1NaCuh9J",
  "key16": "2RKm1JUapPBgNUhHooAV6XtFhAJrmQqt5WfDqSonLiXab6qMUZiPeGPGmi2cNYGsKbCSvh3gY7yLj9HRnFiXVX5u",
  "key17": "42hBdTZ2vaC1zeBuJWTZh4EaY2BtpGnEdTBxCrFThBTQpRqCwQcy6oWE1kRGTKFcPaZj3aU36dBM2CSWJXaQAqtd",
  "key18": "4xvNtVheNiK45WTkQoAoSX4Q8yAwTEMH9pVyJBH2AJLG1wEeuX9QKNzmCTMiL6uZ1cm77KMAEsHWMQBKd8AFRS29",
  "key19": "2pXkTY7A3F8bnfuV2g81PFx6QfWv8zCAM4XQE4LVBZ4DGDk8thKMHS45UcEgPUxHK878n4VwESeMRP8Qdbr8bfnV",
  "key20": "2MeJzfukqU1LfmHrcewsCJPy3P6RNuZ77DaX7fQj3XKjgF1RJV5QoXDqhxPeKu5zp37KTmei3eu26UbLcnoswdPB",
  "key21": "5YQKywECR2QFUsTpTw4AseEnTaUJpPPJ4UmCJQp5xALmJWypk8LVydr2if6QtVbbwVz8JySprUhbNgceLq8cdL17",
  "key22": "sMmS3ZNPncZ8dHSqVoizxNQkbVWxRYH867qatB24mGhsMaCBsBtH2bjbRCDTYn3p9PwkFyYyoQGSQtk2SN9yfGR",
  "key23": "2VkAL47TtJmc4MbZakw4opexYi1DeZKu7wz1CVZhgLXf2CGDFkKTpdVuZuUdQ7uRPFNZWLK3VB7kkpymA1QYsckW",
  "key24": "5QkURo53hjsKQDF2ThjUsE51DzsC9KHNZVmTJYzCtJKvxdoyZwZk6yqs6F21YBUMYwDQAmyNVdX7jd5bPkmteJR",
  "key25": "3eDn15XSijazLEhfFBdpJD9vvDNshKpVG8WoYsp1TdP1LRaTFfjb45PJPBT1LFGrFfWdGFnPRNmvMppWNPSGrcTw",
  "key26": "5rGAWnZ9s7oVNa8ywBsyF4iuEAcszLTgSPCz2GWHEBARJsBQhFGTjviwNubELtMXQKsCUSrgPMPxwnJhhRsSv95Q",
  "key27": "5RuNEgaUb7dMmK7fKNrKQRkuz5Cyqyf8rnowGj36zMsPz6HGPSfuEzLEuHCeiS7ejHhXMr83SznE8HmopDzLd1j6",
  "key28": "2JJPx5Khv7LRYXex4rYZchN85LFWByzbhvJfYuzL759QNJJwemcpGc9HZ2JUASrk5D7Rr8r93SdrdWShnFaSorjZ",
  "key29": "28jkF1g9ZrnVvUJ62AxJ46HyHHxNgeHSqubtVYopK5JYKzzLSSaRy4nChjUVDwMfK7BR64asunXcxaSm3KetvoLu",
  "key30": "5GnNjqpHRFvuJWCTWEerCWkkXazfECMqMr8WfSdhxtR6de3rtuwSq3WH2x6QUmf4ox84Vv5Jrg9YktthuCTB1Prp",
  "key31": "5C6RXyVBegbXLUv6vX7Wb3dAH8uP6bpokct3wuNxb828sTEgZVpwgxqYFSA4fxMVA13d4ZbsarhtsUTVFgbBYiaW"
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
