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
    "ryExCYqqdLxHTqLEpfZCj942BYjayEW9agQHDNdjs943zNAc5jGBsw7kysGBEZmwpGq5GUPSD4eiSygsZhRL1P5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "164hDAawQ4oA6uUpqVMMYVr3xRBswkeQcvkMe7aA3hQapLrJ5qTL1qiKxFu1HUfw5NnFDGcNVXdy66BthGJNYxj",
  "key1": "5v3KVN1sEbRifdwmXEz4AXppdfw5W4RpkJGEjtr9p9DUk7rp3FPBTATyDtPmJnFtHD1MpbCuyTJ3Q8r6KBhGFTyX",
  "key2": "3vaWWEvGwxrNH3AwY5BPZAnDthEnVqZ6FuekEwAUTSSbKYzWkxvG9rBwvx7bkWBGp2Qnq1vDVt28dh4KEhcA7jZ3",
  "key3": "2wSbKcdSzg2mJARFE3FWsvofJL2foK1wyHZGQwjkGyW9Vprz6vBJaHwCVgTnJ34rodgbs3cqWS7kvxnpxRYJzePF",
  "key4": "4p7XgmePkFXQ2tLAYEmS8n4PhWE2N4xfc6U2VN7MKsszKFrNzHBHSyeGDsGe4BBF9UV4uNDV8wAwTnTAYjF5hkV3",
  "key5": "2D4iv3sWJSAuh3jA9WpwDAyY5XC32LZznpPnSjaALmTnR8qqoWQRjsTJ9YWtYSnp8EiMySZVGSo1MHAAwrFMswKf",
  "key6": "2Md48knAza9t9d1Xw3CBnqnBYgeLaoSsTG7CpYKQyFcsa7YhWDnSmYJeven1LdvvgWNbC1gggwGcBceCh9nsnE3x",
  "key7": "2qYoXqYfqSAE3GbXRtnw3n8W4QoveACVTbpwwFaoPb8rs1zGQ6BuFdQ851N1U96mrPZj8PD7dFXuWJJ68gybgGD8",
  "key8": "26MrqUdv5yR2yEbvT1rVosB6jwUjnF3WBGFhQkozxWpPNmypYoBMWnpfGLy1rk3mBwKSKRhSg5Adoz5fm1PThkn2",
  "key9": "3v3hE2AdgN4jQTJ83J5to4DsrQLBE41AT3uLhEB8gcLZrQSs3ptb4Jhd1UYNGCXhJoME7jhemSjALEYQPdFDrZEz",
  "key10": "22LQ7gKQzXezghAqwUn7GxK6HWiRwycXuk33CdW9Tf4bCUpQpw1vFRND1MYFmAnnCgvjhFX6AY1RA9UE3JNMd2bW",
  "key11": "6r6iTZvybvY54tEqZZqBKSNz6ZPZxkkEL8sLgRG5rinR9YjzQVBFjrXDid1BS6pAW5vTtGAKNQ1BJz3deAmaki7",
  "key12": "m46VXxQt1S1GtyJuwgm5skbq6onGGordcM6wanTBpzqDLeXZs4a8tVQP97PnrD2b26rGAKULWqzSspVNzv8GmUM",
  "key13": "4dZeH7MvnH7iHcXSw9qnSiD4RDNTGSMfBnzvAYCA1VK53dbSkYxvqknEaXWL4X4SqCXzjcbNBab3WEY9fyAJZsWQ",
  "key14": "4Q4BKVnaDMHTKMv9FP7PhqNNZTDef1GnHxsFR726LgkzvZzXx1qUA8QZzHcVKpENLCn5YeFX99SHemy71NseDgfC",
  "key15": "54d9da9RWorpsSRKrJSbw7M5UnTgR4WT1BTw33dxf4rdVKv4erZruC8STgBjebSUiZRnm2nv4e2V5W13KZjAGrha",
  "key16": "2xmhU9VVV8jU6aunoqgWtMXKp57Gbeavx5tVqMpzQ6SKgA82iZrLxFP2aja8ehPXoHWcEAuTaUNAoGtbwZMRjRYj",
  "key17": "2dkSyqZ67SAzPTj3XJZC3uNPZAzXhqWCv1rbjzVBVPo5CwWfcPRhdgvphiiGWoKDxuUeHB28J3Pg8QfD5TTYXFhP",
  "key18": "3uTb6AYivc34eYsntAC4WsYCJ5MKGQFkz4evbjrodinnQ6RQ339oMrnRm6eKcjfyqSBWbtE4kMAHN8E777d9BG3k",
  "key19": "567TpdMRnPtPKyQrHBzYt8f422sioAJvW7HwkJBefrL6o8FPuCrScRxcWt7KyN8jj8SqCFNvNWrs4fHqY8Mko917",
  "key20": "vGrovecvSDP7WFJAKUajjezYYJm24X6EricjS2eFBrA9HPA5DZDVD1FtqcBp5xzHF6DJ9i4iEvvLgDke2S7cCUJ",
  "key21": "2Eg2im2Fdz4jC67Lrj5jMQrbZ1RpNwkhaufqSmt1bK37WHPqsRUR4nMxP2hT95pF6FSC7sicHWPK4o2x7YPQNbRi",
  "key22": "54mfgiC5widXRWNV3HpnLA6FXgAi6APQhsBfZoCBP3kUJkhXLAvaYgcrjh8CK31NGhYFDk4ASLrqtF831F6y5Lhw",
  "key23": "45QK2oh7V3jJ8PpHPEEWnkxkFa6G5EbY2TuNrG3peqeFVCVaZ7fYr1Ho8rrKnaAfV43tcD7scDK7dkGgA5DHfvXi",
  "key24": "5UDr96Q5xWQibscBwDqzP9P84ih3kK3AuNJcNR8sdh7uDFAi2ZokkN5tU1uXbBwL3izPVmFvdu1Tmqf5165eYyiD",
  "key25": "8UgdLZVEmHX7ZFCHjJR8X5GqXSztHpaieQoDupzBn69yKVittB2DT9i8gS2EvJVHGwvnLiCEJGVmMY7HawY715J",
  "key26": "5tPNBeGaGgxoxW9bhc1sY4N9kwhMgA39MSe7DD6vfmy9TjZcMtrrnFAC6hmtcuYAZTre2qsWJ4RvTvWVEfCfSjdJ",
  "key27": "4mxgeK4ihWuDTSz7Vk8JKyHk3XN3rsEtF9rfoaN13xdYYu2zMEyWeAXPkB6jh96cpr6PyTafDX4L15GbTyK5t3A7",
  "key28": "3ARhWFgFdJhaoxDPzHSXCZTmWebe6Ng7QVtN4z3X96NQHwypWiiFREbZth56cusmvoBM8EDFqcFGQjf7poGNVoK1",
  "key29": "BJftMaX9fgSxY5mzTFv3AoCgYPeeAcNBnYaw9ukhdRipq8kwy9i9V5hvb3SqB9F9WW5Ke64gyku8GjLRGKFwzZY",
  "key30": "4TjXhwS8Ep2eicEu8rtao17VAzkKTM8cVjeA4hvF2TVckFRzzxtPbm8Rx8uSQm5NXPePn79BRhGQYszUfvfysFBb",
  "key31": "b3hLjeXZQjc4JrZPW9A6hTBe3gb5ATb6gdddyP97s5W8xK7a9p8Uh3V4ojEc7WwEBrs9ZAWUofRWAw9NVUKm7zv",
  "key32": "fHjwW977zrssSwEHH3RnXZJgkbSBV3sRtHSmHKzZgV3AayTrEfcEh7cMuZFrqiC3F5547bFGFGPMm1idJ97e151",
  "key33": "5jbKYNz14FNcJnCgEk5zAA6t7vgvqzE5YqTMQAkyo95prqnxDehUcmzaWWM8wtCgNh9foiFpAaAmNMH9e5sAxV3P",
  "key34": "3swz6ijpCFCDC76bbkDPAsvQ8BYNtipqk9pqX8aWbYrUk5A6byFkfBQUqSq6LT7BCeCwc2S4oBUcLLk3Q5QTBn6x",
  "key35": "4nfYZQj8JdQdeoWcg2b6dHGhHLcLBJd9bMxqMV6qUxWSrM9JN7mUCM3NLoybZwmeWipssUAFDFtTh7wVh8Jk7AYX",
  "key36": "2Gp8Jv9ZWQQAuN2fyr4xnjtT7bM41acC7orUQd8BQZjVVtJLkEAXxTQrhnVsjK9CDHGwowiVn35QB5XwbfG9gZfJ",
  "key37": "4Jq8kRsBb4arm5gyX72S1LhWVTj81Duy7PPDWCUTDvHNptJoJ9cnhzUJcHyr9EYtk8zxJFwc6La2GaMTKeDDvG61",
  "key38": "gCNKMqRi1yvgyctkwYFMTyoCNhjhTXzbDGpxj8QnZ1DaBtphqUWwSkMtZWfZa8LmAyshxp816Gv6E2XKe3TaP3Y",
  "key39": "WkqMF9xuDEEWPMzanjSNE5q8RZMyN828QMApMoHBxmTjs9QxAjB3FztgvEWwEfCR43NPmANovaBRJnEjWv32MPh",
  "key40": "S2Y3S2WgzR1Qr616vKdybMp3B7yztQcGRvuUYHEymvrZmR483Cjc4qyf33HeznU3vvWX1uoocBWDdthddT66Ha9",
  "key41": "5WbL2fBQATWN5a54gchSaMypbMXwajRgzYomtbXHRvpXkpse63L5WigfEX79PPv93hVYAXhDn7tegLGBzhkd5tV6"
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
