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
    "xUsy7Ni7idJRGz4mH3juJGq5gYfqS5VsL2AJEL7aYXQkASjTfdPfDHLRSaDT2Wzkayj6Gt4YzevF5a7afwoF42q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQZFPdiCSK428YH4mp3PfgFSt33nsdQPuoycPSi5L4JNNKosQjk5aYrqxy2AU2GJmhrFeSauL4c5cRU2E59xtyA",
  "key1": "3VmN46Fym2wGQVHhwHafSXiKD9GiMnu5fMVZ6RDRcqNkUTb7gnfoWwXxszFF2rEiBojfLdXqFJL6FoxPwxd1btXK",
  "key2": "5RCVbWpJZJZWaJY1wT9A7PkFX78jPaY2u32HZNorWNMqDxxNytCG3z9TV4b56QHa2rp9M9RZHnP9DoqEgaoeQ8Rh",
  "key3": "2mWZN3AT5CDpRZXfEfp7iE6fU7kWUcUCURvBpghtFVoa2EumVFPUmJtbRukfmpfDcHCgMKfz9Tz1f8hvgsXN6YJp",
  "key4": "3YbQd23Rwgk5HTtHRvMvo6c82qfQJQXM6HxMvtRfXguaSorrSSc5gDvmysqhxTw2x3SgUJRRzqYtNp8AeeMr4EUX",
  "key5": "QuscEqoqLE1SdkUWDNcniyujT7TQcX56dQnpU3dAMNHGm9cqSSBMGWFmprmMJM7EWettBjnKTUsXL61aycTfzKY",
  "key6": "2Mzydz2JcQKGvh3FmjPfPmuqe95pdvam5W2pCVeUFTZzCZvMCa65b1cv4qWSQy2c2y2JJuFw1dPFbyvs4Bmp3WgJ",
  "key7": "2MMnuuAVoUx1SddWZDJ9RMXkYP2XdyZMfzYPxoWzPebfMTgHLYwfcHoQy2AE78XC9yRw8j2sm6jdbyLtrTpuzewS",
  "key8": "5Qe1d1dVPQfkLnrga32o755EqLAJfeRLjc8zD6gWGmbZbsMgMwqGQCsMVJ8BbW3X6XPxcMPZWw784upHmCVH9EQZ",
  "key9": "5BJp65S9QFFeEqrAbgsMKrQZ4Cpji2MAHRMK3HsP3GhtKzZBKrhy5GECbajQaEsQYhzPSSGtDLnm2GXTVyKjpnZV",
  "key10": "3D5wLrShZRiGZwiLsBVd4QuYDaz55eLAg5NM8upGCvwivUuJKtUwK9axZZBTomdwJXmGRyQzJiC9WjS5ukUWu8VN",
  "key11": "aogzQCv49jby5rv5aB4zwAdM7Lfy7P2MohZtZptxMgt2hDyP1DdQALFh9p7s2bomqxpKQvzKPkEKwpbGaewQDKy",
  "key12": "3qMez3kjKiS4V2azJk3nU1jES6aBbgJriStyM2K38Zqj23ZTsE9fG8zzc8ckzuNDpFcFxCroVoT7WgTG6xL9fwxg",
  "key13": "LaYguuB79yyhwXPArWk8CmRXdTPXFg7mZWQVsFGEQ4HzNfBwGLg6jYuxLCV6CuaX3JPMoDQFk3gxPMecyDfW5tr",
  "key14": "5Yvmi99ZNPuz5B9A8BoFHBHp5G5AUuZduaZ1QSs9qoBuaQvTnidnnqWptM8it6artgBYGGr4oLv1CyGgGrBbhBxS",
  "key15": "5BD5L5N7k8goJ4UrowUb4691QNL6HqxX2x8q6swmBqpBt4pqLsswdftWknbJsUUXua6EpzgnC4fF5aKuSwYN52K3",
  "key16": "5he8Kx6kMcX1kNBSKyFEQTmJjJNf9KjEWtFkoRdK4s3GbAEXy5nvhDHKZWrwsto6NymZBdtxkH5GsmjbF2ZnETK7",
  "key17": "2CTSRBv5fc2rqnUpNC8rJn8MumTKd3FyXarcXtirQ3wM5XGNRA6CZDb1xJkPDsJebinVFSKNrnAHNrNtNARUbZpg",
  "key18": "5wp4AuhvAdHMyFG5hKYmo1mff9e7jAwuCP49P5A5foumTAHAUEFq8evnJXb7AGSFXFjS4QcG7MaFnuVhVrCueR6T",
  "key19": "5cXQRaQfyzH6BBv4MPyRdE6zscUyENxfXjpd1dNf4QiEDBJs4udn6mpQEFLxmmAVk4mniDTKpjgb7kqcggfiUwS",
  "key20": "3BcVPbrFKWpBCaFHDF9BmzYAjMnRiEyRQ913Jpedop9cZZCvr7KAt1syGjKYn3PrKxwp8PFz2sEPVftG4JypyoAV",
  "key21": "FSkV9KKCyeJgyJR7dvBARhNHPCEyKe3x9ra8B2kJCvR6T7xCmWMruAJKfUWjCwn8Kryo2okzXeHt7w319Uz3nCw",
  "key22": "62gmnBy9KycXQsmKSvvMQfzXZGHdyRPJcJQ2ABXyUGDcqKrNfJVR9JwpRi3ekUB5sNSfpZRLJgZb2L72K2xbcgsS",
  "key23": "5fVZ3VdjUYvxDxnoMhwnQMaE2XVUp56twZ5JvKJ9hNf5MrKELEA91GWHQCjS8N1fS5EfphQKmiUjE6UuWHd3Uox6",
  "key24": "3ZAgwVF6n1okiTEve7k2VzRRyEwqSCGdqLYKGyagJjeo2kn5S3pNiNPp1dL5zeadtq94RptGrB17kNjfoNANVnVE",
  "key25": "ykfKWhXubeizFntVfJfDCWtKBR6C5GNCMWVLGANYZW3tufAjm5P5MarFq55tHJCAUhGNjDe88v8Nedtuhu8aMqw",
  "key26": "3RX7FoSPConkZgqyGioPxj43nh8Q88R3L93GQCtYwZGX9oZAxSAJskmfCgJ8N6zeE55ucWUQyFYiKToB8vSjQ863",
  "key27": "4hwHaweXMpxvg7scEZfc2q7RxTeH2qCMSZgyxxLZXdt3CcJmDpY9D3rbr34DcXgqeFkUDf45ov3h3ECZDJrA1Z2b",
  "key28": "5f2joyGyj6BGpCXfRba5u4jRAguKMbDaxF1LNEkmgCTp6SbohDhtiMVcA5t8THjex57NsFTwsQKPQvy2i9vdZK2o",
  "key29": "5G4bBuKxyXGXzisJJJrvqKP5cztEbNWiUfAwsPJpXNwBfPeHz1zi9vj9S5CH4Gje9fFhWLkESWuhtn8spM6xJ5wh",
  "key30": "3xWQXrE1UDJZhCkyecSVbFKJs11MGWz1NbX5Koz1u5zTjdh8FB1Sg9ysQ3A729aD2wDj1aULWJbcbEUuEnCVW2dV",
  "key31": "3TNJ1WTcR8h712MnsY7mDSCJ6bQJEJf5SnavVDi3XWVYNZfoHxjNafCiQmMGBKYwX6f1RWvWZTbmrWCJeMff8tyg",
  "key32": "pDP4gvhV2Pvnnnx4icFYbDNyN9euyjfXWHdKzGuwN3zzCDkevPtqXSDwbUmUbDorWRDDDtTqZqKMN5S7RSBiL1U",
  "key33": "2Xa1z31SasU9NfvoGgni5ZTzeTCQqEFKBBC8L5bjRVo9ChLgR9FHtw2ZBcaFPVZZvHnVKGvRNNhW248XpNhYH4xX",
  "key34": "57PLQXvwJnwTXFDMBiEJ3y6xAs874i6jpo4eH3tiJjGMbvbKgnQKPCcrrs86iQz1dTSDkg93Z5p52mRB9bLXSNZR",
  "key35": "ZdHzyGPvnqT7e6e8wFdGLKkNR9PMfXmrxDnuip38991KZaN2JrNLn6SR5RNMqVhP1aLtsEuHGptt4KaPZ1NtcAf"
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
