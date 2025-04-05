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
    "67JXtibhpwiKbXAN6FxmJMJg1y3Thg4Yhsz49ggFTp3WxG1o67ZgfWur2sNeP6zX5xRCN8yLoqYWEfGn1Zjvza4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THVfvFjQq5ocu3amKjZtRjpKqbRiAvGxSjgNrCuy64JWd3aY7k8aNvUHJAnoKBa6acsKHeE4h9raPTq1wNocoyt",
  "key1": "4uTCoPbXW9kbSHdGBXmBKqoGm55i13VVWiTFRVtb684wyr5QYEhLt7DHNZtcPub6rZAAuxHtBWFHwFo67ZU1we1J",
  "key2": "5sUWD6yYdMjq3B1hSjyeACTyZWpRVFDEMBQXKKygjhjyxkTg8sUVJuNbH12EmhkHrLPV8j2R3Rkgt8tFAn5MAc74",
  "key3": "br1GfFnsobNrzCYU7KTMGiBfDretFRvJ7FGJKdLT1ekcHPhgsqvymdbcw42y54ZueMnDpu6qUXxrhtyLm2gmfdC",
  "key4": "4jVH6sv266LEJKjWUPwm6QfVbQx1TaLirCiGqct1BGCmgX8tMSJ4YNbv7AGQPS5Z8QUfn8MpVC1QK12k5au8dt9G",
  "key5": "3PmvzvZHEAKdyqJnxj1B4aKKgwJ2mfwg8hJUzpJcEsSNU98pX7eAeHPpvdub2dE7UTjnhrzYCB5Y3Zby75wMUYrX",
  "key6": "56JeawZvMLg7qeLPzkum83VzpE9XBqC9ArCZ976DzbYTFGzvH3Xmn8GWfcP9xzpCGfraov5Mqcd2YnutaGhMZUtF",
  "key7": "eReHAMirPYBVx9X4F5HLBueKuA91w95eE5eUuw4R72FTqLSJjdhE4NSKJJVqxy4Q6HjUaQL76MHXA2JhD2ceiej",
  "key8": "2oQJpdqAQRH1H26uyE39SrZGco2shBXuatdq4J4ZqPBHrdhTHd6uS25j2duspAnJFuKHCDWb6sXwLevLtddjXySP",
  "key9": "3M1hnVmpAXs8jkABuZ1TWUScSvbkgie7EBBkWNdoGNqvYFEdFPMQDD5ptd8DSG27NbTjTqSEPH8XZr1hsJiGaUC7",
  "key10": "3Ytno1UuwEMqs5VLUsrBws3SB5Fxexev7R4M7JcgTmemHtiwpBUqHsHkLTzUpbPxmghWiE13VKn9Vp2QLezqGZo3",
  "key11": "4du2LXCoohh5EyzkWU6YTUD7mmankWGsZGrMLxCYye6JYpwXydHyCJkhkU96AVWLRwcpgHma1NtcYoTmycTezWRB",
  "key12": "mjiDNnxTpEVqJ3YxJ45wKbFjkonYWNtrPNL4qBbegNnm6zYDbVzZPmbpQ8kX2rVymzF1sDZxJbL5ydwTHQm6UzG",
  "key13": "53JBM2RhwzV3UV5HjWVTnRd3W11qGCQSz8b8rY7uVUodhL7omq5HVDkaUp9qwpd1DFUg5Ab5WLoTBT3YRtLBpkis",
  "key14": "V33APr1zzTpwS2kqVYUcakoSCwF9U9cefEJHoHTfJ9sEyuLs9WN5A7X3wkoV1ips67pHS3q1Vuf6rodUkvKq9Pm",
  "key15": "5rZJDCtz1MKGi6Xrmi7vBbT9VB8BB5qfk9kfYTm62etXbUdsguAc6MgKq9E5hFkQVDomBVGpfRWQrscb3nH1Qxuw",
  "key16": "2xgETZtVdtknxfWrMnHZm8UX5PKVtwnsRgHCvdEYsrueRgQhBJYt3JA3E9Pbj3WkSuJ6o3otydnqrumbN4rXio73",
  "key17": "uK5HChP3psjguC7f7cq3LbEh2NkZYLUXion4dQjCUgGsrNkLawmvjvxe1CAivVnUQ7xRwmtBePxJKYCjmUgsRuC",
  "key18": "8sGRvs2cCYzaHwjM72DSjmabjAunGpCPUeoKbVWdbkWf3bXHRqCGxTywECjVCSJFYJLBaLKmFH5KsjiLpR7pJji",
  "key19": "tvCMmchhkgVq7doTnn7t15hCLNEGBLTpqTXEBnQDWFwyM8o2RU4iy5Vosx3DWSX3a2AHZUyLcXUYd1wmgUKCgkG",
  "key20": "2qHFu5Y7tuqpczkLqpjw9C3psjUZREYFiieKk3uQVx5gmnTY7SRT2L9xatCGyQrs4fKyqzsWwfjz2SKSbbMNfuL6",
  "key21": "3X8vkADHwk29GGtHqUd5VLpMqC45X8MJ5BahALyyVkaHF7VzePCBUCZZSusvyLByPqq2VmM6xgEFEQrrNSZxRNAw",
  "key22": "4pRgzgdXsc882oE74Ljcgki9CRTYh3Dtrzxzg48bkBUVnnK8F4WmZmg7yVyBUn5xyCP4RSnmh59cuQfu6EYz8KUT",
  "key23": "GPecK5w1c5ox3PfQaZ1nrbjotS76Ph83gv26f52fjnNPFVCjA3rG7tavmU4o6CTUyD8NGrShxS9hfkH2dLKduLQ",
  "key24": "4G32xSvRiWmBjEKDx42Wn3qibvpVaouxk1VCEguW9PcRURpyRKu1ZCcg8fjiyDCNYCBLQkmY5B95vn6Qv9NmLqjx",
  "key25": "363gA8kTvCqCLSCdtWitqBMTt6iTpNbfhP7uFg7uTzjFqFjEbjsgBRJYHBQfG7nBhqSEEVyBPvm2uAriSKLjGry9",
  "key26": "2Cr589mXfJbk6fkFwvLjhSAbFhyfZoe57nLnhvZxMh5R6dmyq9BHKzj4aoBpHdXgMi2j5Bn33LkhKdJSznnYbWgU",
  "key27": "3AbyDMG4iiCv8HZeGeRNwCMtQ7bUVCfQN6mh8QFMHCFDWmbNwZJ5MWyZdnwE946V1PezJ2SWN4tFyhBzE2TE6cZm",
  "key28": "4GpA5rWo6h2qPCnytY122v7bSGiSbdgxXZdh42w4k1yJseVXmsxsXuoqFuxds2XNW7kH8xBYaBFVMzwKQACatwV4",
  "key29": "6Bt4L8YbmUATBvLXXTWJu7K13bEUNPwH9KGVUxTG7hsAMJc9s1VeB9HcoRVjn1DTHDZ1xFFqr9FrMyLuVBNSL9B",
  "key30": "5s1CboEcnANQapvTDSmuZP5FE39otortQFQQ7mE3hQ7xp5wT13hqbr2qizm2b5bkNhmXtDpSkK4jdaGnB6fiVvZM",
  "key31": "4AxJnEvEvQBmM7tvyNrrXh5TZacG3BpAbRkfXtv7K1YSiKkUf3uu74UoiiA97QT6Kq1EErQKJqvUBvQ5kdTZmvWP",
  "key32": "3qYxp1aUbNEDCo8D4NxhsbA8vLBXZhGWP116r6A4yCZr9DPk4eEoWK6asG6dMVusUXuXX2RQe4pkVFQBvxVFdGm5",
  "key33": "2Zn9SzdUctqBu6PT41LsMBehMqD8cEMZtpw11Sc1mRsz3XW4QVDdEjJ9W6J91zxuLiJC8xavyXDX2W7pvYuj6RpG",
  "key34": "5Wx6wHsvfZEidbbiPPdrAwiH2S9EZauWbc4DEzf3JUCXXN2PDRZmyP1ufEfVQkG6SGy62fvqL3tw9fo8RyonW1qs",
  "key35": "2Ajh1P1117JYxQ56sPHLTdu2PDepR78ondUtHk8Ks4mNR5sTkwsP83PDZg875vm1cDuaSJkDBmhTkykME3ke98bG",
  "key36": "buHGTJyQ9D8ej58Qwt9Mf3mwKwUb69gtNsa6y5LSM1MY1dztp7hiVK8LEQB4iKNVK3M1esHL2ixbv1pGeYf3N9p",
  "key37": "4vbFd3qyavCKCVDGZ6fJusqDKREWuFSbdubBccKLHJKguChRxhnBGWzva9SZfhUt2cDqG2mvfr3RfkLJzbMKRZv8",
  "key38": "37eDozxfGX8vb55RS1jtjJ6vdhVfya2wXSkFEgbgErfLLCFemA9dg1b6mCaThTyMznyrXs79vrFSKkafnLgfeDGF",
  "key39": "2FbXHGNmCEhcCnQ5fbLo9qd1kxAWBma9zGQPPLR3CkzJdjsXsbwVpQFDsps6AeymM1NGUb9ZspQQuG8TbQ57VTV2",
  "key40": "tPhMqeArzhzWaQEbWSb49iiUD5w7xm8cn8puP3F8KvUofd29Jip8LxTDFAA5YN5A2rpHnAcGFNWhqNC4BvZzXNJ",
  "key41": "fLhfWJvjMiEHm6evh6gvDNbR1S9D1RV5Ci4Tgxng4eqMkagb3GG6ruDgo8dJn3zSGKCLmcZ5vviCGVsGVhU4Bnv"
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
