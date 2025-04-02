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
    "4WVc2CmRvjZ32hYxpXMnidmu2BNELh1vPjZZEuLyz99oUR9JdVLtMmExkBQVrqKq83zcSGV8LMyCb4bj1SxsWDVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKCZPudnefMijj9TWVNeDmsqGiHcKtjLrdr9NKfvRhhwt5Kihx89z2r8vtmGXd3HdUmxrvMMT2ymuLAykTzWqot",
  "key1": "3iNPH9HYQfUueRUmwx54xdouLJxbc5JDUPohBNMD48Lykg21392sfQn8RqrZkKFgBm91MdGdBpr1xZypKiUhVLPs",
  "key2": "4wupQjHqN3aD4LG46kSExwTbYUrFm9vaTt3VTQvo4YEBayHc8eLTGudb5PdJwyaZg71PFeHwqwNvW74rqY6nUATQ",
  "key3": "5XAGnZ9VfeVZH2UWpQr4p92zw7BfzeCr5MyybGA8srnMEKbMrtP8tGoeaU6FNUynnLHcocvg3fm55BncRvKa7HfK",
  "key4": "h4rcnknbeohEFm5YNDn2B3fBRSYsMGm9bN7ZmoYP19ooMW5GgRoWaaYHyk8mpF8uSGJZjSF9r2tWjmgCqd1XbwA",
  "key5": "3XjjioMZLXPoxuNDWZu7TLNVaJkNUhmCqJwbFPyR4wD7ST5vrFUBohs3TNvgiphqvA7nJgFnPqzqryPjc6GQdGyb",
  "key6": "5vCUXLRNTmY7dLbhPJ4bYy5LUoAWCFTXcreSBqh1g4M3XxnuqTLzx1JxQWQp2Mj44L7cXpCPkiChyk7JEuuQCRpi",
  "key7": "5wCKYbwQabs1vuTnKmUQVFesdEP5pMiqbF2WRFsKzkVZmgG12s9PRZvrZ4mkyZgq5jB8MrSsuMcGZqeh4YFmyrdz",
  "key8": "5WP9sRJdC49ZCESsUzUFS93hzjLFejzzGUqAwtjN75FuTuPCrnfjp6iaUX6xVGzA5AkPBCs8YP1az4oK3u5yv5Ju",
  "key9": "259eatXMN9j3aiE14qDJrsUP1fWSnkessRgcN7pPBKeULiY5fzaz8HhKqqAMS7t2nqQVfph1yJpedRuCoPW48e1E",
  "key10": "5ofzQVvHiC56qNNSuyuppzeBo5Z6bipJaApyhD8qrGB7gAyRoQrBZDarD42QGYBTmhEGK5itJpSsPYt5JN7BjMfh",
  "key11": "3CJ3iXJErqEHsVGzKuRvi65F3nWcVGSWSJvV79vc9iyLmaFaFQkLPwy5R1tZHZXqDBJ9NMb41zXzb6ESSasWM6Ps",
  "key12": "62UWw8cTHHBQf2JFwdTed2abxHv113jyPkdCjmxrr16MGKjkrqBEc39PJmhXvfBG3BPcwkzH6LzRZk5VxAuVHxzk",
  "key13": "4sZLxdTREP6keE4kUPE2cHw1Vru21Y2tKvMLvaxYaoue3iYn2pzsKKJKaQb7mM6D93zB8f25hyXbnMQS7cdio5pE",
  "key14": "4DEq77GKSw4d5fWxaLKfMu7ZhJJBmubQ9bHyqxDL4KCqwLvMPjoExAWdqziMyFm2qMVnXqpR4HFFfiKUHwhYLAEt",
  "key15": "2REzjgSeaANtSjve5RLVXmChhBkh3HSVYyhB8iXcAutGP84QYYscyygQdrQ8nqnCqwpqXGDw3qR8UJt4EMgvqDzp",
  "key16": "2kj89NCZRrhtz7HFktzDo8p9LX3m4ifMsoqB2ypJnGGtZxGBVqPqrciNcu3YAdYop41SroVks2DnhLvq8GKTNoXY",
  "key17": "5HzcKQx8LqpeFiKvhTGcGt14pfZxFHfgxfMiMTaXCXE4u7ahgtvCjdK1rNfnLHC51pDgbj2EQXNtcJ8kjidWvxZi",
  "key18": "5Y71bdFBz77suui7WgYoU5Zk2va9Xc89p5FmqF3LBicCRpFSCG8amyQZgm6eZky2bonALSnmBxanbpbax7177mtV",
  "key19": "2Yk4KypWTnYZWyeH1aNh8BTdiEgAMJqsbHNv6GCc1Pk7vnRuCpU5HdejYmV2bYoGm7EVrcYCPyHJJ5wKiVPnLx7L",
  "key20": "4oHWxypgWmMqmyt23LRBqVxnwQR16rN1baDrCMPg3rbtmo7V4P3MeZ4e194Yv8ieWNnX8Ho2oSD7vxSpHx3c5qzz",
  "key21": "2TKvJ81nN9ZRpt8pJPPs2S7tMN8Fi1FrbG6ifu44Yy8geW7rbym2h3stYYy1ATrW6uXdJ4EREAWdsDo1JNjN58aC",
  "key22": "5ANFVDQh3jQwpNqx5D41pZcZLnUYhtVFeJeFtjdXuh68KkKDERQVpYUVUSkqzpAKmsuNcvovaNw6CFfbY3kWVG2f",
  "key23": "36d5eEbrCSuzKkoNynHLkqZCMiSJ6iLU2cAz823NXbWWQQMiwUkKm3yy2pJAHdkwYvGfWUhiY53BSav4M6s9nwWz",
  "key24": "b4n5VxejUY34BfRsJiVDw19Qh22S7uWUQPMZwXY5kCaxewK7aU4bLxpL8DpWv9SxRzYK2bQhZJoCUYuHFymxQus",
  "key25": "z1tTxQ1R7zW7Qhz89o1FC7qoHbn8wDAdwmXYKZBTcFA7EdmWVfqH2pdFBjgKeNJuVM2gXXKM2apaWcdTmw1GwcU",
  "key26": "4yX3VnpUxHVDegio4tCYsiyKh95muv8ptTQ88sNsgRJsbFd3siTEozzBQn36CW5TcXFiP5CETFUXCvvUM71UFJsb",
  "key27": "Ju8LZKjGwKewxSoJa1JyBfcvsmsqXvngrWmZCXzm18vDwD8TKqrboXtkuksuwk3w2hJ5GsEoLvz98j9GrWi9g5b",
  "key28": "4XetVP8FBHooqpnNXFe3oEAn3Khas3j5uhzB9FyerUwXw6fQCcFKLCyKM98EaqY738D4vK8ZQLNuCkoNideVWgkp",
  "key29": "oC5KM6X376MmBUVjaRQhWpbxZGhzshc5cyFQCpzbSBgYx7d1XWufPXdjgyReDfHXHnn3eAWzU7qKdXUffb7Rnrq",
  "key30": "5BPoJ2md8NyQe79RDPBfNh5a1fbtc9qBYc5wJcjiBQtVP4M12aRBGFATogCdaPQnZhHSRdVXoVdFSAVvobxTzv3u",
  "key31": "4m6PwTefdiRddpPMPcmyvghhw6FDQcHB3WBP6YFfXWVX12FUhdo9P8hxPJMgv73ar78qrafbQTRR4gGCmnJnNGHM",
  "key32": "3YHHNZXjgTgGVMa1vvDr2kGaWZsvd1zh5j5ArBkAxx3H5TMnV2pEiiWxAhSM8dZ3ZUbiy6Uz2Wmfz1qzvA4dPEu3",
  "key33": "bkid7vcPKzT27FBSD7iF99uSoZVZCCtiySJD3y1k13vph6VZkkJT6FmD7oJojdR2MTexgGUJxuiaa4ZBQq9ihxk",
  "key34": "4mVz7eT6zicQkUQZb6YM9Jm5eKAnGkFLmYaNRC4khNxXf5SMh97P9ufQPxN42iQLDwpxdnTGG2475aewucDkFKEG",
  "key35": "3d5fNRZv6dkwvoXeWNNE4LQ5i24j7YwvowBrgkdrTC5qmMrgM8B7JiKrhWa1RieyY8RFT6kuEQNfmTsRxgavz9i9",
  "key36": "cptiyQ7GJE3sSFPPBxHmwY2ktnrGmczSttLV6Ujf2UUaHhNPc3aLgaNo3SQa5mvAiprZSxNpKcfMvQALCQbcBCN",
  "key37": "f2tyFMW3hVL31rYNGuZn1Sk33SvW5WYWAre8AX3gaik1YY2EEekR4rWy5QsGtTHWnPg1np5kzJtSNtMb5YQTZpb",
  "key38": "4D4spQhFDfHmzneSgXuPbsnqEyHphPWE5DS6LSRCLAB82yyEYB8dsQXYSxxYQ5rGJxj4m21NS8M7z98QTxJP91SP",
  "key39": "2Jpebs9183DixWeXjydewVZdWEkACzHqF7ZMueT6z4yfR8uV2mX54VHotKNBvjbYTSiCoP5A6ZMoDjjmAFzsFNwr",
  "key40": "4oXor5sC2JZkdBqa12hCpZtZanKTRNpvTKbaauu7BcdqDZ1hxD6Fae5eNGtJ9y2ZCxB3UjkcY4qg4jJDqZREva5d",
  "key41": "5tKB58ra5xAicbyMQxPiWffMoTBhBLURcPwP6he5xNxKjTCYtank9vaiSDYC3qhj9jnis8RdiurW1Bc1hpxpVfCt",
  "key42": "iRq4u8JS9aztL8KsRo54ToaHHhHSUuFCPqegeZRMV2XomCiL9KA9JocSgYpwVpXPuqUJR9U21iUpANSHqQPqA2C"
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
