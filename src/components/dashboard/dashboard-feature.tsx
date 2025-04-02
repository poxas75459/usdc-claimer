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
    "5hny71ynew9LqNrJZymtm1BD5BMwgjdXiZKaiTWgtARZZmExr1AkiXD2nuK91762Roo212cHJfc7VSGQKwkLtEN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oz6TrjEEdomBHqrX4NZRdFAprTF6Tt2K98jvTC1Za3hg3CrE44fvXKMgcUgmihteGfTM59WikxrgnPphvDxUq87",
  "key1": "37JQBqRKPqepAe6yh39KPgcmqbw5nnhMN9XUmmnSNPfqfLJFfMm4Myw5Pwae8RiLB5RVP27gPi5vm5MjMkAEyNjV",
  "key2": "2o7DTq6ntPzBGmRRifD9AkUSzN5LNTbiF68i2oSnV7zPFur2oGj3vUcuD3ezfwmnsjJoapbRipxJMrg4dG6buK7b",
  "key3": "3unR3crTSZxc93aWfQWYzm9g8LUdEbZMCqn93Vx7hUPkaL8UPjNT7kpJcBqS1hnLTVrP1xLxAAttD3xNNYnsag7b",
  "key4": "2z6pvcehLoAyYUYasStT9M7TRjk6nD1vTAPCcfoZi9h3XknUW1swChjN7T11QmY7WMsUCVRXj4ahgoCbm1mPDMy2",
  "key5": "5V1ZZTmb7PJFj9m4gSh32ZgdsEwx72GL49whm7VUsXtWvheuFbHGksq6avaEneFb2Wk1DDZijZycZdrSnoke9xLg",
  "key6": "4Yia2rdBqKR7EwV86KEEJ1F5zyjCKa41PDDCAyY5pKQrTw8X2XrtS5itGwcy1bX1J1PKVPJ9FuCfQTH2SbyYWp1w",
  "key7": "RTcc7dWKSzYiehtHa5yfUyu6MFB18S8bJGyjvybFbC2DLZbzpAex7KjkQ87po6zduE72hoMqVQFwtgGs8Zkec8M",
  "key8": "2C12cJx6qSLbjLtcLVAB2Xjoat6H8f5YEw5ZvpEA4ubGB9tcQ6pY6vmq6RYGU62Kz7U63rPffbaj7bpDmSm1XjN6",
  "key9": "2w9aL4wfEJuLsBuyqiSD8diHWSyu89y8dwFrUPAMJ5zcDREekYq4xuFfLnmLFKiM2ebyPfDMGFoCWJtmQQymuL3N",
  "key10": "86XNF7u7A95DQMDk7o7L9CSpfbX936HthNfckmURkDZKiPXVv2oTdoWjsyLX7BKsfk2RmuLzKNUibpawgmneFCz",
  "key11": "61MMFKm8MqemuBoxhZVUUMkX96DxB6FMwPjAGrt1NSnNkuamrd2TD8aDwKa2Rkxh44rSDn2d3BYdrBhLwj7Viscj",
  "key12": "2uKYgjz5HP6cshtkWKb6zSbFPSotcFRLmkhrDZggL81mjq9VT5HqPdHCMjvth6sEQPPW28C89WY9bq4GdPhifL6K",
  "key13": "316yZZ8BvA7niJmJ37uprqDeMriz2kwbr25nZGakiwhXQfyiKJrqNyyJLjjY8RCLdWGrPd7feaGuBvngxHyZwwJA",
  "key14": "2cBYTiqrz2jdLffaoBCpxW9Pjq21NsfyVJZxiMR9uyYjc9nfTKj4DfNb9Hp29J2epbmufCg99c4qssjDMqp5oXeo",
  "key15": "eJUWpd5nUwG7PxhugipZTvY2gp6dCSBmhWzM6x9hhcVRxJE283P7deMEjrM7V6TQUiYg7ifXUphebA4cn32bUbL",
  "key16": "5vQ5fowhjrwSZC7NKeMiZrhd4rLSb3Wn2SxPLd4BiZgchkZijwpoChQ1xjiRvfDvHzmmFHxLwfNqrqCafdheFqdU",
  "key17": "4JfsLQjThccwqhDAWf7Ku8wqxNzRcaUJAqh51DpiHiDAi112Z9CH7RcCt85HRHrJuviBHEH1NS5AqMqCz7wHiHY5",
  "key18": "D51fcHMyS7HX9mRBrEPnHUv2Zvt22adMMiaLj12ReUk4kgry3awrbfryMFn22gmECFHAybc8B9t8b1hwDD1W6XA",
  "key19": "41aYmhxG9j4dmZe1KEbJEqqSsGzCcYMG2dG1XDKx75PjugkMVDv3HgkkNtWbF2m78UHHCUjDJiuNeAgQSRUd62uW",
  "key20": "25LZRTa65QXLXjtXjeNw9W56cDtBsom55srEBqxaEQ5LFmn6d3sJBaHF8VEZTzRfZqjFgFKrFXA6wXe2gQwMDMJT",
  "key21": "3VEY37rcUKvWkn49q5yjnsenXupiKddQgC5AS2Lkq3EzeTcNeNxguAyFtdRM6tCEBkkHwx26T5toGCPztGCD3qJw",
  "key22": "21y4sWAjPbBNtcEj7qdZx3TNZZMfpEwRNbDd2u78CWt3kdMZ9ToJe6u2mFJbmJ4ZU5Kth1tdmXAEXN5h8Sv1y8sH",
  "key23": "2R9bVacV4GxiAcjNY4qqqNbx6T1KuyVvH5C1QUiGKNeZbSsLFHb7WuMGEe4jc1Zx3cLXgcLLmtjxwEsw8JPQhFsH",
  "key24": "hd6KcKcwy7R2EY2GxFdEH7rADW9of7kkdg5zgAfwb4UdENcL6Rxc7NprPUqro8xud1NNjyqvgmDfAPGBYVKroCD",
  "key25": "4zYZxRM8AnM4JyziNKcRaTZyvMAyvyxv3rSugbKaC4igtQEgQ5sB2JvqXJ7cpKndKfZnyzXx5VksroWeKWFKnWdG",
  "key26": "3oaLGst1QFLv3vgd8YD1v7aoa2QLxduAZnhxby55FCrajtYQp1QiCFsrAWfaDb5YC7f2VbsHN6QZXkQkt4CC4dTw",
  "key27": "2kasn7SpUocns9Cu4QGNxYMX4ffvfJ2Hw1kXGx9dwkvgszx8obeJ79zWKDbsNfxcWS9Fo3rMUaVk3K6TEuUh2DUz",
  "key28": "2Hhc4Qc6oeFr9RKGdvymCyaHhbSr6p5DPCKCgmD9Zk9aXQRXSW4kSMP3Peu1ny5WRACxanTnJcufU3wdufEv3NTn"
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
