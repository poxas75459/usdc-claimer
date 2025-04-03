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
    "5Gacodx18ftFXcHrquVrnCg94EixXFZH91wHWdmNFJfV9M479c8qkCtVD9VxJmq81xFSxqrYG5HFQR7X3BHfxwZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TySPBXFiCSupPpQh3QQpLfP6ScVoQhVkoGceiLomg9uEMKBWv6MvHFtR7wMFvEsi76ss7X9yjzw5u928zf6ieDf",
  "key1": "3Am6qPaPg7W8tbuR1ggGbS8Xqfs4gartZHLzgGN7WXNLVotMsq72sTYmVY9G4WdGDTjkvwUdPBwXGVSAjxX2WeZm",
  "key2": "33JQC4es8zc4wJMGPaMhJzL2LzydY46xbwDyhW7NLn9VjJipa77J5M9dM2i8znYVyQ5yZYPyjQA8GapLjs3ukbiZ",
  "key3": "2YC4NEurGGLxxF1FuSwDaPwbrwie68UeS16mnd11A5TNwPCdAv8ySyWoPLry1GWazaM7L1yj5YyzTwpQydJPy57c",
  "key4": "4QkRqUtFw7EYi8awrkY6cUgS3ni7Ziimav23TGypxA1fCt3XBR3bvFHQ2QkMyozQBVFowVNDFeQMWgGRatrkNFP6",
  "key5": "5hLugijHV91LCntzQoTJZef6bsWF2w2bvLxCZ5m5KsaGpYBxKGWuC4ZYLGBju3j1m5KC3nJbjLGuRTJ6Q4r1R7WM",
  "key6": "3b64NQqDnR1gvWeZGqZ6t399nGo44WQVySGy1CUdd3g6kGKTLTdkroo7VcjSpoTuDkAxD6d3GQHXjkquU7pm1kqm",
  "key7": "HLmyMUT42ntA6rbFNUuQqmV2eH1458QFtoECUYnJwRtHdff4WWJnRvvNBd1JoqduMkuaCE8M86VkhLWCGuE3V1x",
  "key8": "57cBE2DXPfjpeQCidX1vnd2WnezmiWVwgzm976SCZD937jv2A3vto1Ec8j3Wyqiqp4n2aUQ1JAwehvr4fmaajRNA",
  "key9": "56X6kzGvGZ99LE9WaDJejtvZ8iqXCqeSJ3scxA9XgZwbLDBs2csn5ufzvRFHMHS8dWuLYBA47SzGX4NYVgGU2Lw1",
  "key10": "3QhjtfnSUqLz6G5Hy91T3Bpf7fEuMcUy7HohuDgVUPXzmrrpLH5yX8aWJiAQtLUKQGaWnyHHWuXNetusHRUEJmwy",
  "key11": "xcUuPjHjR4ddSeFErvjvacjd12ZSuUERWMqFzmoB1MVMYWgkJY7ktBtEZb3cAzXESZm8whGyKWjCfPpg2rSk1WV",
  "key12": "2HvchFr5oi9eCjtvKWCosLKcRXJ9pmoBiwSdD5ZDbhyu5Ns3iBRemJVEZ4sjhgVyjChbwHFPYizS2EdbCTTU2Uv2",
  "key13": "5s3KeKjEjDuGuFQ7iUrPNu8RdFzn16YU71wtehKzRNuqjs2oGds2oqS6svhCbQfVtnsqJhfuuyD51KM32t2ooinJ",
  "key14": "wB9uTnQ1xH4chxoHggr1KxM17JjawTUpjhr7313geApRnwNLBkpCprfCdmNGpHeYcatxbeHBc4uegu75zJTzHAK",
  "key15": "443vTqHerXisgxZu1MiGnBybYjQrFurQ1Huhf2cdT9MAEQVzVeLDMMPn1CnJCFSoPk75dxmHdmmQzhyXnfCo9XBd",
  "key16": "3vnMqWNVnG5Trd3ZmvKHMykoPRGpfzaEAXXso1TbQkgCWtp12xKn8ssc8J5Fs1RCyA9wvmaBTTb5vJnBLq3B67Fe",
  "key17": "3YeLdgLK5skcBWwwXzqd8yArqac1cCwdNUDPdvMDjfnuhQVL5ckugUijg4m5y6WGaxEJpxveNUcyGL6Wikh2RDUE",
  "key18": "5yJ2BAWdoNxvdqYQiafs893xfZppR1r1R5vv1m6xouGaPV8ej5ZimvEKkstFhsQmNLK1uHVpzj57YJfZ3VW9Ma2E",
  "key19": "35i6HBsUfc1cNx6iVeMpY4ExMCCEDMC8dry8gQhUuG9DnGu7PaKB2VyW43F6NrTKqn9MV4MxLVW9hkX8xqVh4DvD",
  "key20": "3TJ5ovdzmCbGvGPR2JoEGM31E6GsYajKo8hHgkdgu44rUdeYHWiv2SA8r6VAbvJZGVvKSvDEPZQQ2sw2x56WVDaD",
  "key21": "4rWDTytqMbUJ5kNNPQk5T36seQvTFPppwrbaDRyr9YXa7iUELEv55mW7dDkPNsVx8PM2CT9MixDg7CjdBvjsxn6x",
  "key22": "5UstDdkHMSXv9eJCAum1aZPvH6SynRc7wJjBdUFafW3C7drbJQybAfiES8bNuDUhzi3TJ8g18YyUQG123WPuU5ny",
  "key23": "5WtP3uiCvitjR4ZkPDXUD8mJciq25UMF9pdqR7mLEvwvhLvwL2CePMuAzcMJ8K5LBDivogheHkZ7vbEDAaG7wYYF",
  "key24": "2CRFGz8mBDiRgSCV3x6agp8jkF7H4byaiiLGLTPQAxKj5m3AYpc2E1KRH1ewBvmdnEGKMnbiKBKEndvxbZKGQSnm"
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
