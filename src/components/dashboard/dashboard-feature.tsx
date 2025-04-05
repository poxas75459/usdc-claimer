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
    "5ifLaG58SQw9ZXfqAqJAgdDGB4JG6K6Z6WQ2tiNxrx4gUm2rSGAXLnzzTz5WxthvyqLd9UVnNeP6rRZJKKcdVgM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38yKbRDVMqzb2mmsfKAqB5Lp9VCDxHNwwkgXvBLVPFpamaQR4PWScjF2qVmrdp3tXdvn5Ewbi3xc932w38rSxaDS",
  "key1": "5jZLu6RmSo19esQr3KvfrJPPxLZhSbwUGkjkPVKK91cJWXEQec5c7RWwjSNnbbrqMQC9eBw4YDZ7sxN4ErDLNyzh",
  "key2": "BTABDBi2vJV8LEzabqxJAJGiAn8knCmkiZ2LfwVyvimSDdrSz9KmaA9bwbjVSCZ4JnEWxqXzeTimkuP7L1CpyBz",
  "key3": "2m2d4uVCM9t2xx2n7MPnhZXGEbCS7PQTLezKHbqB8Us5q6fu7SNq1WKizTFfAP6SV95SWirCH96Q8RoMyQuPJ8Jr",
  "key4": "4CmBPCHKd68VhCb67xVKci8BvPbs9kgKvGK53tWdjsro2AQaCnVg58zCgtiCBL25EGzVSEEYUmtbyCeGGvqYn1BD",
  "key5": "3pmisZ1VeKufqynke5uQNFh2JrQrqJt9zKjqQNuYqh7avEGThwyvjXqs1AgxQTJ77SeFS4BcVm5VL7CbfxJdCNHH",
  "key6": "fsiFnjPdwtjLrCLPn6dLvBdHWBjjiZZ6MmdKnHPNYSJJFcLyx7SugrfDTh1kTUtHRdW1NJuiT6AvPw7EdutEHnh",
  "key7": "4VDevenssAZnmNDiL6UbNnsqKHdVe8U5MrLmyGcW3jGQy6CsQJW7VfZ2eVA57pGd35evxdN8X7fGT6CLawa4hP5e",
  "key8": "4XB4LQPkDJanvKYiH7E1qBLUpCEoecGB2tQLkrYc3DK8Qp2bBgFAt3QSnpAL9QnGmDo2md2a8RfnHpq4ACtK6CeX",
  "key9": "3BoEtCVmn2e6fdLSdokEQhhh2zSaPV433q32nSLgd9ZBh83ghCSmPZ9ZosWjifH6ekw5P2cpLogLfXy48JgdcNnP",
  "key10": "5pxdLAxCyEhhY1gzz9kJWkoaazoJyFhyQLffCHLX61RwbqzKCjCHHUbtSB3VYX4Gu8MGgufjwKGfykVZt68xjUg6",
  "key11": "53HmEQ7x1uKHfsji4Y5VHcoU5M71pdQyzpAV6CEW9k1CFUnfuS7aRzvxBFVbkJnKY6j2jTB1V9NffXivUtt93fne",
  "key12": "651HfYNeGLJspKXsCrPXPUmfAQ5bM3o6G6PmfxfQkVyt4qcnS9eoDMJmUhTLnR4Q458Zcxy63GbmCwih2ToqGyo1",
  "key13": "6Y2VqGL1gEXa7WgMDMcXQVGgDVr25UdzJyGLUcJMTXFPRuMUTJ6ytxKeSKwMB71rgXkBibF1HigiSfsGJjMfXnV",
  "key14": "312jxP8un5jCosQPnbfSSayXsR8LUivfRWGpw3CdeTEC74Hx8KZKayxgYMtSNAgKhjkaqH7z3BSvdNqBWZU5RSmN",
  "key15": "WKTzTH2cFvv1RgDxT8SVX8U8nTMtTR58TC3D9C2HaqU5jzNhx7Lw6PyHVUr18t98DuYYsF4btzDcynsBWAWTTsG",
  "key16": "5PuPj2W9PQPCjegER358uVxYEoKpWG54uymoWeFwkNVwoAY3bEMT1pQgcGhiZprXSdA2uU573quvQGKKZt5rawaa",
  "key17": "5N2mPCrTQTigPEdwkbmZQJNLEftQ2vnPdqj6nL1f4k6VigjBCR25akNrBCQTB9akF6avB3d8L84cNV4yuGSsJ25B",
  "key18": "5EfVGXV7MWmZgbJDZA4ZaYrikTMmzVcRkanTzGa2E1e5cnFU3XBvpPFtBdjoRyKsdgvtGKjhFBuZ1iKptDdfxfCt",
  "key19": "5JUPer5fJthdr7WTsWPkvfFeyQSKw5ansztUNWLMyVc1qhm2PPPpWMHM1gfubg4YaxqDn3bMFTKiM6Pmd8w7ZWGX",
  "key20": "4fuosnuVw2yPU41ibQPnDmLfHiMe3BZzEaB9yLj3PQW3ZMQknAHxaBEvwhdx5u59MvQvnUGz7WLeQzZiLyeoQvg9",
  "key21": "3p8UXyYq3YLLnpidkhAUFa6FnguLYzSzfJBb6ZuEnMRqcw4YjckLSuytRodrhGzouxA2cmBH2dpB5zrPRANt6r9D",
  "key22": "33ycW4JBSYthCY8niKM2us7M6mbNGhWkZvZGC3GiKpMPwbaqce6vjf71V1CiRkWnbM7vRkQkqVqpz8ubGockZxiS",
  "key23": "wvhQ6NzJoo4UjHstQFZv5gpxsih1x5r5rmjscToAiy6mZcNaU3UbtgvRzyDKX2ortD1g11DiFinzZj6Vc3ypaTn",
  "key24": "5grGTQE7HwccmJBX7T95U8kkuFDU1xTqqzTCzQeoR9A1XxTcScvjb3KP9Zd7fDs2vvkusj2QuM8GCqKjii3Kp7GP",
  "key25": "3nnxsauKD8LpiDy3WvBR3tDAmae792qC9f7hngKxota5eKVySEpj4kT9AZ1nA6GmTGABVN32Wket2uhhKv5UsknT",
  "key26": "WRWLPSbCzs2F6Xv7dagnUgchUYeR5Vh1cP2mcKc5T3M1s41db1AHjYSStd9jxfyB39w7f4m3Qe8KTDov3qucW5C",
  "key27": "3FN3UQ2v3vmE8PjxHG54wyWQZGnmAAmcoYBAxDkezLBTu7W8sKKwCb2QkgdLhwezpBP9QrYvjxfY6CsxhR56KLce"
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
