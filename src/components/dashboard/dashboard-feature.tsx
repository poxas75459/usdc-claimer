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
    "4Zfb9uXtwHn2ZUMX3GJpg19hadJJGaLj88Kb8DjiwWBvwwwCyyPn6JVbYEaTzK2wPRGPhXUDxW9HJATFvn1Q3mMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f2bNx2qLEaP5mMJcm7mmaq7qUaR5S7uxAHF8u1PdgY41tG5ohwhZdKeTLXHS9fCbsAzFf7zh8wxPPaQWPDBsKoT",
  "key1": "HJ8SDCqwmrHwKviDuAdxmy99RCiqkwN1pBiYKRVtdRDX1xbzq9XLiDEuWn8EUYLgUW7t6jqsxvqQ7MHgBKPAQSK",
  "key2": "2Jssi7EZjZXiEVVE91AccmDekuesMfztiWfrfRB6SvboGZMGwJW1Ui1ks2Td7kWzeoDR7cbyFo8UpMEEuTA13Qk9",
  "key3": "3MYMiYvEYBPScnvPzxS74zSAFWeTtJMJbe9XzW3k5c5JjxT4bh5m2cAU36C5MrciMNRseaGrhiVSjBsjfq1ALoax",
  "key4": "5vLRhBt8xLFoFPHjCrRCwzRjHWsvGMEAtvP69vVZGC4WAfqWUSfLpPioW7mCzLUYxjfgvLWwNFZ5nQocTK15FNoQ",
  "key5": "2AC9M8A6envvcBG9ZWWSUYP2jzkzKmaNWygwwxcbkTja4R9LkZU7a4tfmfh3kn3enRaDg1rXfT1fKVamZi6E35yJ",
  "key6": "2EcA7SoWZpmgdg2d9B9ivUTfU1zvWw63CR74X3s3LxTysAVFb1WdDUsCtS52nJHAGJjBXrDNWZfFr2pKbRMx4Ge8",
  "key7": "5bMNq6QHQsTt7j4DoPss6R67dPh3SssAE36mayR66naJbduY5q7RQGcAzVKV5aeXdJuFo2VDdpCsccecY9yxwYPX",
  "key8": "7pnGwLWF21ersVSHRBuUDuxbRGaky4QVcxpJFzNutxKeQCGVE6DgqkVtVa5HYAFMtxMFaAttYtH3HBNMWhKVqh5",
  "key9": "31VTjjQsqryi6hybMQkhDe2PorhWQbKSAbnfgNuzSK1hvh12nGZXxWQoqGvCDXhUcLjkHLdbteaUKZup2aPCQbG5",
  "key10": "DFwCYJtt1ASxCzkhz1SMycrvv1k6pem1DDELrkLzYG7RougPeS4JNNEKrh3QtJkShM7VMipveYVjH4NNCGChrGP",
  "key11": "3okH9ZVL7w9oMGzAiCM3CakQLiQ4Tutb33LyvgFvrjuwUpyUt3QX2PRvjDfA5Zi1yiL64zans46yqhcVUWzoEov2",
  "key12": "oSvSm72e4zmFkuxQcGs2a9q15cqAF149jvVcjkLCMFcuScRUhJBRUjg45kvL5CpXQnKsKxzfqLa1fWtrPiEaV4u",
  "key13": "5Vz9JdX6oj6ZCXs5csj5dDqBL7gUZTQCpKYhMXJnuCYxFG7LqxASjt442srW3UCQgjnvLTc6knTRUBvEs9c4rmFo",
  "key14": "4BvEZpeMf3g8y2ZkM31GT2z7ZwWM3eF9YRchRLA1f7DDhG6YB8QGsrHEssht77WkMmF64BGtbL9on7KVppH9rG5K",
  "key15": "2DojbEQUGoYbJmSkE7Px2KvDKfLPH6r1iqCXrP8s9YT2xExjkhDuA5AVW8ojKa8ymGSkPM9h7AkHt6Xp3HXFvrWa",
  "key16": "5D61SrrXGuiya7u2hzJkVrkVvfNBSGfsVJ9UUvrrgBesPU32UeCTJq1JC42LzLhNJSrBPTGT6TNfDVg9BGMiAt28",
  "key17": "3JAYaZDcBKCRKHVHoVWh8bRSzkTdY4e5m7pk4dR3y49DSEHXe7QdJ3v7H2zyNwz4dCvUAUHeaqKY1FBtcFPWTfrq",
  "key18": "5PPds2yxvh5VCvVRbedVVgTJ6Lkf4WBbGSngaoFo7x9VPrQYc8kTfUUswJPwwo2kvzmCYSXUsLzLBWQUwVNvuW2i",
  "key19": "5sDRFgyQcZVamHj1ZxwdpaxPA7VPCunKqWfUbJxJBGvcsibYA4xTh7GPirEvtJdwojSYPUszKYi6ehoYS4sV9ne5",
  "key20": "5B4RioMBmfwHt4RxTT5owcTHHHtCEaRn5Y1rE5Kf6jyCaZBvh129sbdHLW5r6ALLvCq52Kr9SFuUq27Ske5nSi73",
  "key21": "Rtpvg8HAnjKMeoA8habizz7h79LwnTQCcGwZSCN1VYMS2pF3cr9zauHKbtyDFsKk8vRT6j48bdt9y7ouvnUQMd9",
  "key22": "5TG2MNijiN3d2mDGYZjChC9Fb9oCZh797B2uBHZs7YM8Ap5L48eLUba52BakZZA59b5PYTDj8dAKUDSSoBy9gu1Q",
  "key23": "28GCAUFxF7devnTCXPggDQb6RLxGXhkGeFUKWpQTYEVkLGmufMabEwq5QtV88dmYHVqw9jodftrcsoeoUEtUbQDk",
  "key24": "2bXEkmV8Qzxm8fKYFfmHJoKbLqvk31YJ5o4tAJSM5gDAFjHP6StA5wdm37dygeF7WTB2pho3UhiYB9azmWH165SG",
  "key25": "2Uby16QH1A1pZW4Krz7DxiDvAYpsHKGhRhhCyAhNXfYpW94CdWunz2sxND6AMdpFVd7ELdop8gEUys4HsJCj1ZFr",
  "key26": "debHxad5oAZpe8GcMcXGXiBKaWDyhpuGRYnczQW188SGRLZf4wj2XbhK6QL4GnSTa7jSWTaSKxeqWEXASvCSugR",
  "key27": "4WKZnXJ4rD7ChBFh4waMYUTRAC3dwCAv7Xgmo4hpJsnES9ZS57FU2qmJ7Lt6G7GHT4zzyrH1R6xSm5r1T7wXMx8F",
  "key28": "5w6vvPi99h57hZ4ahiv92uKLRtv7iCbVmKUgGqG2ALaFh6DCMUhMqxGnnhtAbgJHREAUJAFY89c94K3ayT8hfvDM",
  "key29": "2x2Ss2aBaV9ZPjSQD63iueD5dweVMT2hVvF2nnQvev5N2HdjagpKHXqiqWSh9koSZqvNohzF9xae1teDaZ3DWLUE",
  "key30": "4inRg9TyZ4hJt8V6iSDkKQG5Sgkbq6LvfVoqfHT7ttruMtaSGLE54xYeJQoN9TzMm5ydZG2FxWFDAaBBDRWzH35x",
  "key31": "5XFoD1wMXzdxqn6Rq7zSUGUsioaBZ2GCFfMoQh1kWfQr7RPqV7NLoVZydRvxf63j2Bsdy3Ze3Hg2KRxRPU2iW4yB",
  "key32": "2yPbNHrVMYbKkq7FxzWoXCyQ6uWgtsVg9EpqePNxLyfUSdh9LUATQKt3rKDcVrLvcfBnp2F9wAzLegESj77B6x3Z",
  "key33": "2TPcZyEKWdQyWpbmzEL1aTvABh7mnhp89EfPaKZcou7xBb7UNz172vDyQ1PUjmxyHMRdq6bohjWq69dCzgozsXw9",
  "key34": "2wSQBGiEusmrd5icxUGp7HcU1Z7yDHLgAKH6dLnPGZfuTGHc3LmEpXWHoLgjs6SEUf4PqAKKx521xvXpEw83c1qL",
  "key35": "2V67DaPt1GmurAFgHJ8hK22qdyryr2sDuu1xtxH8kipVJKB3igfyXmYvMQf6V8eZ5p2H2nkNYgn9JRRe35gimk73",
  "key36": "3gRZvU2d4VUsXiDNMpVdfHgcbTqjfZpKW35w7YB9Jh62Z6He2x4PNM5fHiDy8j7ssvqvG1iZTuPoQ19pwpNNMis4",
  "key37": "ymtK6yUJPCZu3JtBTc3j1F22q4pdmRvg7MiDZ5JPGYUnY2eQ3RDTk37kDmMVHdPVdacoGWeUTPZ8n7jqi6F8BSA",
  "key38": "5qZenfs38VjSJKf7sTTBw1U4kF4Wm24M37LzrETJKCizLXTVJMFuMYt8afDC72YdGnVeHE8M1HTicpdtvmwTrv6G",
  "key39": "2ombrkS9vRVctyaYBRRNPqkqio8Af25JeTLfxt5fDyv2ZxcutfmJkDPMheDx7w7nkzXbk4TWAnm6zgA8h95cuj4J"
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
