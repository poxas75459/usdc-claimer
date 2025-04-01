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
    "276vGsyAJbemozXg4xQBwUyHuiogLaSmiGiC2TAaknB3aQJK87vtnVEWMt7upyrWmFoWcngHhTV85VFAYwPXeXhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RTMXNAi8EX4cXCZMAa45LhRQv5qjSbQ1eieVqPK5wkALChjvMnzxiAuhhdNGtMVQ3XbyqfcLNabfA9wUbEzxzDb",
  "key1": "5us4U5xiFEkbwxxij8dbt6UkPGD5fgWvCzfPgoBKuta7vH2F3aY46g43Qk7T6P29bn5EHxevHG6SnMzgFyNg61sB",
  "key2": "5Pj7msJycbFR6DPeCpfew9D4dc25Xg1tfkUPcyuMhmEjUQF1GmCLdGmwNQY9iSWcmASAeErjJdViDjwjMrq66etL",
  "key3": "3iCZBBm6U77SVmEd4djQADcN55juTBBxhz6mZTCQk7qwvKAPsQbuwDbBYVQd3B93CcmEU3eEs3qRyxc1cqCqKc6z",
  "key4": "2m1TkprXbGaDmESxZTxWSTVPyJPYKXapVQ1vQGEj3GSib7cjzGzmEx9DHA2aFPBkK3Hhv6HH8opbSoFAQ86t7B6e",
  "key5": "4q3nxH5td38bJUtaPTza4SLW2bqiVF7fLkHZ9teQXuUm41DwHNQjftpugbQPgrKm1GWSqBv46LMnzu9aFy4kEr6T",
  "key6": "2j5SjyPXpTR7qMfLincHRRDACkTrcHaN8UZky8p1cwJVrNN1VKaGEEwxXgAG2B4Yryj2Q4EjR68krDyCB7MRCiHV",
  "key7": "4PBf1VJLScsKSXPkc82TTn93ULkHytwtj3cKuePr3P4H5MaWvcJoYDiQQs3Bvzi8d2GppddZ4eiRpyEWh7G9SfHi",
  "key8": "3PtmnxQEqESFxtfhDWsegbq2QAiVaBu7x4HKzRP9kbsRibAPMoD5N8DDhr8XWNyFQR77knwjamrdmSx9TemPQZtJ",
  "key9": "25mvMk3z7XwGNj4vcp18prENJfRq9QLKgXTaEigjLFQs7X31aVxpprU7PqoqgioLi9hMfo86d7FuXCxhzbGpJhRk",
  "key10": "4egYJLweFMeTLSiT5Gx9AP5fgPc9e8jTQuxPEA9QDH17GkN6yBG7oGPYLNERhr5Yx2PrGcHNpzkrUbeqkdJHrq1q",
  "key11": "2EP13tGZPWBg5wocgbyoVjRaUoYpnYLMNsqizK3HLtaAS44W4pzDVLiT62chMiG83pQwsirKzrdyNtiTsSQPjdmq",
  "key12": "64qb2i13E8rTmYoxaJ3Q8C7YZx3kcVtMhamHvSyWDqXt8h5JXUPaTVbR5xBFTE7ArJbKekCeuagaPBG6ZKNxUGjx",
  "key13": "5Wrqvi5deNzusLUHFsMxorbmCxdq7oibHa6vX8pSxXXRcELQP2UPE4bBu3M3BpNL8mMPjqwFdtQyjDQXjyi2C8ek",
  "key14": "xpUup7a46aSEbt9t9vyqmaXWDTw4zEdt4dsfbnMe8dJLnRedU8PRcAEX9HBxYnH85KCfAfAQm74fCs6YwaNhro8",
  "key15": "FJJVv2sf5XAQQuwcM3yt4JRiTcE1YLiSUf4La8EDY4qgdagkbCZXDCDQZBLcn8XuTV8CfkbuN4By3b5JT1o6g91",
  "key16": "5GtA8dT2Wh7KiKywjW8qj5AS7E4dv4ZbPvLT44TyBAHWR1gkxf4vSnQJ3Q7y9hRp2PgexxXEtExaqowTDbWqFPLH",
  "key17": "4VYsEgRHHeP6Src3JNhCnwEJMfeJygN1FvVzTGEJwrdkQdL6rsSvpUPFofYMoSss1p3tnwdxMrtaWSE5DUhTHiUE",
  "key18": "4qzVGTHaU2F2yKCeLbP3q7BYR5nw1cRGrbjX5m5KJJJ3P53YohoMbWHeQfB6RFWAny8bPRZUqv3YsExnukRbCaGx",
  "key19": "4xJX8L8Dee41jSqrK216RLp3veoU5PzjHL4qZnUFFNePsEJuUTsrNCHq6MjbuaFgL63vfGSRuApDXHoh8JodAeDX",
  "key20": "2qspFSLnTs1y4qWX7mpS923Xfmqhw21ddAhrU9mQB5pebaxeFCp4vvD99wBtyQ1DKnHot2GT3kPzrrLE4UwYhZtA",
  "key21": "2sumResP2TQyd1YqDBn7RsKXtkxYUrQHyFs1prEErrGirtgoq1Zg8w74s3ncEbeCYJzkcB82JXNSkF7oonUpYV5e",
  "key22": "5oj3t5ZLpRtEJFVHoGrark92mBJ93L5gXLBBPXdmZxo5hCM2BXRQD3MvSiB4TzcZ4KA276jVUxqn633KKmrBwtoM",
  "key23": "2NyMMS4HbkRdL4BJbBdxVgqGqRFY3kEHCxQedvB41jmKex1C6sTLXJLY7A6LXY5PUE1axCGKjZ7S3t96wkws1iEj",
  "key24": "5GuyUKF8rDPLM1M29vhjA8VwzPfcV9t1ypu6iXwvSsK4pD1USxjiRCPzF8DZtt4nati4msRKnyQKNUq8iNnBK7Bi",
  "key25": "34hidV7AoHmcLfXDMY2E9hXDkYpgVnj2wKsytZtfdL2Np7vbMZQUa5SotfJQuS3ikn4wm7drNygW578NpdyRMmsH",
  "key26": "28BrnGkDebeEyHU7qKUjbB7wUpxGpdsde2RBC9gDVjAV6atCh1MVeq3hJCkyXopKiS4DTazSuo92CbxbuqeHixgF",
  "key27": "8rvXGsctfJtvT2bJPF4CrTdVp4otgVYG59oEPHUTRx6c5bJyaecGogw728q9nRkijQthh9AJBcPSzsAs6eVEdG7",
  "key28": "5MVfBddgcuhSmWYRmvFh6ZNWZLvJq2DezsaB725A3v9gYwggBkJpK2QKjCNF69KFqyy15ZHSRz6GNRBaS4C42bYt",
  "key29": "66RXtfaVNVrAJh1cey2vmvycYJjpfhuZWRUX73q6yVzM8WxAeBjkB81NHoiumzG6qy3Cb1vFrTMMA8S3BwvR4Cd2",
  "key30": "J35Qx2nocK2Tiv6axDjVewB37qNY4WZU1TZpmHa14vcfU2sKQQGDyXb8645x9nVGXwER19VKx5S9VoJbjavaUg5",
  "key31": "2Y3qpyprGKem8yeGbSUNKanCgFZcHrchkEbNEk2uR1jQSH5rAogVeDvmsjc3smufEvr34EaNfdGmfjd8HgwHEPzA",
  "key32": "5XRyApto6YSC6EPoUocJcy8TTDFr7bmvu4ACRsc3DXJJCC59WtzYQKBNT4yvxXzdAUZF5XnvZG4aagH6Jqp3S9T7",
  "key33": "5wg8ZDwdpuDPtjqaVudY8iW7xN3P975iuLJoom5ZhFTBKbPRwdDU3KYtxv6t4kCguzCnTLpT4hvbHNpVASVBR2Y7",
  "key34": "3PELc6Y1uSoArCF81DF6RkB9fVXcRYnWUB5zddDrvRDLY7qpmho9NSGfX9geqJ9j1S2Gd1jM7oCzjhUP1ardkBe6",
  "key35": "4GHGDSTaji4eKkcdGkFGgcAxyYmLYPTTBXPB5hywK7MwTsymCU3kBRepFw86pEMhQJjeYN85XGyuznX6UPYdeLyq",
  "key36": "2L5LKWj9gn22DCW6t6dfXx2TAcR9CWPAS48HzMjHo7PifP5HEaVpks3C8kzUiw1tRjWgeHCPioVw5N1hqxCA4CCY"
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
