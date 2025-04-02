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
    "3qhDSuRrxqnpsedd1wxYu4Wudwurrp6ue5faPWABJaTSmBhZ78dqm92jdvWKMfMuGGbZqPPxHwv869sRvRi6bQJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGCDvXor2jDxLV1iqfVsZLcpWyG3MmGnSPZEipGa8nBB88Y8p1AK5u6VhkwJVqCfZjrdC1Pc6hEZvq8co6aELuH",
  "key1": "2MfTfAhdL2qGwjDUVyj9AhGXvBJoG5rwyfCWe1zBJPDVJhFqzEj2JJ5tKLxLuSAXgH4SdW1EbN98NJ8KuSbvWq4E",
  "key2": "4yc3RX39EvrRUVkH3rhB1DKut3Hxt4my9hXxKa9zQG11FtKwVrj8BwBNTJss9YXYA2LaP2mtAjmNAQ1kFS9MUVnM",
  "key3": "58uD95BFTguWy4DUMSSP9nNgmVUpstniDuX6uaoyxr9KgjrrKqpauyGHYgLSWs1CH2kEweye7BHmp7PZasXARio8",
  "key4": "3z9zfcazomhEeWBNFQqRqqE78EddDJUhaDWVeHTYNXbtn7dVBFz9p5HZhkQe8R4rsYKdophamC1PphNRfBYJQNQ5",
  "key5": "3j4RY9kxZP4SsZZ9o7fTVFHqcwx2VoYsSyYsg5kwnrBJZ5RhfLC7EGh6E9AABy5MM9C99pqJu3xx7XR5f4TDccR3",
  "key6": "5k8SWNKpH76GaMjBiTbTLDpdUWZ9wc23mUuUDVJ7giVHpui2GHsQ5g4KbmFZgj3xwKQKEfNJi52E9hgkAYDJgveC",
  "key7": "49AnG1kH7ntKw67JqGQoDGrZeNQ88H8JvhouU1zQX98U5ky4c7fGu5xq4gmQBpKg62ayPtteJZ49AXYauxkS8GKJ",
  "key8": "5XkBEj9yub2767D566vXedVsjvgJtcNCK9EyLUbiyjDqHRdCb2c9rR23GhaWiZhxvtk7uL8tp1BBbsUewsNt1sdL",
  "key9": "3YARmQQvy3VubfSsKWeLTZKgvkW5TTrXjGAzZnDTNiYmegK9f5BK1wEqy5fgAcpy4UyG1nz8FtMVw9PV6zGHsEfm",
  "key10": "2CETPUawp7GLpppNkLT8WaSSMpTHyiokc2hQpoDszYiGWPfhUwYTKcG6achQc2BTU6zxvHM18UmMvTeS7FPam3m4",
  "key11": "4rETGmChB1w6fseZSu1dFiEbJxo3weCmSXJw1rnf8kaw99CWnZWFFVpag8WhBBToXTRbNQNmFaRZ35K2c2P8wYd4",
  "key12": "2HkhDt3z8d9kUa6TagTozZmB3SFVgisRMoUZSmzWHvhapD8429DTx6NPNQ5ozdp17UkjQp8n8J9yb199THEVaoX8",
  "key13": "R1HhngQLcpL1jeYYx94Wm1f8yMpBgSjndjXkAZSp36bbaHuMy1Hv63aeG4gdcRQuwo6HJygigaBNVR87J7yzwmf",
  "key14": "5Hr4BtswwQ2XCmmw5AApdPeRnyubqHpJsnyJ7BAPDQi3rx4cm2vKpGKYDaJu1s1BVQMW2wc34JXcu6ChwKQn9X48",
  "key15": "5WAaEVhu6EqQkb12VYJutpEReraXSo632pvLXK9D4km34xh5uLcbYJAkodGzBHkTv7mfSseH5Dop1CmRP9wPc4Sx",
  "key16": "m7fbEASp2aNSzshC2wPraehUSDbKazvX3pHcCDjWSFeMY638GpSfmdgjn66Q6sq8JxL9XVjtLvSqUVQZ1DX3Eip",
  "key17": "5uqUvK6WHQc3M6toTTRUv4czp1M6LWSDLZAiA11ZzNWBknZSJeQe4warGERavjARC4wf175UouM1QC59yvJByRM4",
  "key18": "5Yyr4PdgquJkMdXwLf8YXfGgn3x9FffEQFoca5kKNqDCPT5yxQLCXrgrnnbM2hsnSL11u4jg5rNvhxjBM1gdzZUp",
  "key19": "4vEKjXefLmPXCmCiVcS3r5ZCEPVyHEufFAp4QBAE8cxenGjV5F6NsYKixVV5q5y5KxbKm7unX3mEpVSVq7bjy5vw",
  "key20": "2p7jbtRjGzFiMUJKYUvUafEdMzg9gg1wHRqJKjF2yz2vuJVVWPedPQjUWsPUecc73gZbxkJTervbh9e91Z3dA3DR",
  "key21": "2pJCMMu6D9HGbUAqFhLEzUq1z5iXkqYZvuP4a8dEgyQxGb43DL6AHUPNAVv8ibDgeFuUfW5ywhep4yQrNamxWTQB",
  "key22": "3XXEy25cFCexTuZL7cnnrdtfzyDCevhdss1jHRstEF55CM6rkYXT1jA1kVoSByrXfdQqR7FU6xJWvxRtqq7kv4GZ",
  "key23": "5B2nu3HtaxqdauRa1ryXYg7kTY3uADnSM2CtB5KY7kwaQ5dy3oCZNDwgwc6wXmnATrpUymvg4NLtJTr9Za1Vqopy",
  "key24": "641WJ4mHDCv6aei9xbuW8BjDwJwgdRhkk5KGmaFfsxkvKDyAV1QsnCJFcBJLP5H7aSyH1XfLFDGyAh68sdvgr7m9",
  "key25": "YvVe6ppvaTHTyQNvcxvMeYG2NY84ZJqwvLGcp2D9eAYWrXfyMXHJQezQ1YT2k2PPzAyK3o8gYp4V2cFPnWwE6ye",
  "key26": "CND4zJvtFZwcxjeAo6f77sWZ9MZdzhQL16oug2aPod8YpTsMdvjXqRvsfcsA6zCgC4XDcvqndS5FaG8QqkbeXo4",
  "key27": "5MgsVqPhDdzPFLhkdH5mV2JtvHmxFfbkRB8ZJRXTdWws5Y8tsq3eCT3Ye72Tf317nnPwKJmwusCMxTHZGrSg88Ua",
  "key28": "gHfeXQrW2WXurp7ZTAVEtZd7rkFJ36ddGDxCSaVK5k6ZtiN5vHBJcL393cpT1GaKgM7G8BpAvhj9eRHRqdJqyAG",
  "key29": "3qwgezy7jrfrTk5RvJueRpZjFTy1V8QkSpuHovsfbMPgJiqVhdhCsgxk53dg62d324G7iFqSbXd2qo2QwWW5FKzc",
  "key30": "4AySi6vd8RMVx8GzyEuYyzDG9eR9yduEmaPgMJLSJYyG7hrCiquYHqrjuDJvAge47edcQPVJisjuCUeStxcxLdqH",
  "key31": "42idgv5xGtmtNTjcMMLoTD5PTYbs7mBQhmPfZFMk7Bv9qXMSW9x4hncGFwP9SpT1wwr3UB8r1yPZHjmVipPXKZAy"
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
