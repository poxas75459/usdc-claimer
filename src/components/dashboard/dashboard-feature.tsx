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
    "2mXDW6GjLdNUNxKn8yJX34hM1qdr9ND4vzaFb7n7MhxNNr1r8akYnCz8wnp65bUkP9ucKJSPhheaAW5MJ1nXMhXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6zLTGGGSiZBCN56nUBKVvQBoN1NfHztJkHicDU8C1Fvq8DZYmhnqyf6jJAo7njKgcFE28xGui6jgiwQ52SpKZ3",
  "key1": "3ZAiP3sAzMUPnDn9vWNx2wXf5n2sHe5R7Q4s7xNRCEKRj4UqgRokrqGDUnJbyx8LXL79pEv6uag5dUrmrisH347p",
  "key2": "4dcKy83yjkkEagHJgwKaW85fHLWUkjzqASbhPdkSs389o7sKAtBv1kZk2p3Q2nh2D2W19To5532QxMuaK3ipDyJ1",
  "key3": "4kCZz23qkR9DBoZrykcwaZsofoYP8N44eSKR62RJo2D5vxkxD311MYkN2ZWs8ZdvRcvgFGCihHx8MyyMN87XmsgJ",
  "key4": "5AQGPd3GeFRJ9Sz2C2X2EzU4RearLDdX9qZGMcdAWRubABjLF6UAkRwCxCffx8NC1j4BzGrPMpkg9poaa8D9pAn1",
  "key5": "3th9AVf7N8eZoVjJ9uCWsfoxs2Jnj8U26qkiVhPKqQqUUnDLWZgC4WMCib6yv7zUNtxeLep4W24dLSKvh1V5BZ8e",
  "key6": "2ZuvgpSb7rPaSmKpWoHS9HDoaKCxMywniQCEwpKsjLBtuQmvtEUyUhiS2TwBLBjDjUwZ4EBis3sEqAJ6QEwGzbZg",
  "key7": "3w57mJSmNwYydDZ368Qpm3J6XxYA77dZMh8Vxy1H25MLEu38wMcNLJCsWgouc5LNLEc7vwemZt8t56Yft2nZqZKN",
  "key8": "5ipwNebXLUSRRc8fztq86fN6qPwYrpzoaCeTJmgW3qmeVV9KU9ugWxvpxw8UfwPNdCReeJQECjnVHvCLmhS3AzyH",
  "key9": "2h39uxkTCRP7RofuBgw4uBzRpQpN6FenHj9ecYXBbGF25X78kdnZhzAcwr4uMqjk1mACeszxGGt1HwEchnaZkrrn",
  "key10": "4FBnY4WBbYLtZfDk6GQgSrzZ6Rp2CGV7AeBJbetLtie3mexBqkqhSLUiuyooorbUeVyWS2RQ44aohaKQMaXm2RHC",
  "key11": "5d99sFQ51ErTw5ZDUrC3mXNvJkCeCVrCdxv4HZEn5NFMVCeDxVzmqys21ZXKrpdGZB2khDNjuHbPKDzspgUhXq6B",
  "key12": "2WqWBtFpzuFAySQX3iNsHeaPMhpB5qBK1KYGNDdTQGxfXc9k6sNisKSNpcicrpr5N1yJcr3AaKipc51ZNosgjKtb",
  "key13": "4Lv91WieQyNeGoBDSmmkGcEPyaobCvFxpVho4wBw21t9vUwhgsxTYfYsmc6eSw3PCaAw3FE1gyUFMzoJ4xEiGqy",
  "key14": "3pgbGYZTabFsBaWUevXTAifkH3ipoKsBbFgneHeiWRo7W7Y82BEoYTEqEu9GCmBmtWTXD7MFaPPXtvdEjaLRvtGM",
  "key15": "4zZG44yjVnwiaArkGLuEWfXziuRqhi2m5uWnxbQSejpN1VqrTJPhb3b9xDCRZaSt667RHLMjqBzx6fhZ494H3zi3",
  "key16": "298AExzyMXZm9UpV5YM1KpyWLAMyZbV8PaRm4wnVoNwFen2KMzn4pDbdwVo2HzMdYoXAF3nt9ModYoZr2v9cHgz8",
  "key17": "3p76NpuiSo3m42yaMJ751MbNMa9tgkHCr1aYM6vnRtTFRgJvUiKg3TcaSnAE659QRkRpTMebjKQHjPSQqdPV9rh1",
  "key18": "5Q5s5ZNnXh3zcZEJhGguyUfgxFbDZrMcUxtNHGEUBCwoBHe3pBoRtiNj3UU1cwizHFjjtgcKdmuKa8AvFYcgyPvi",
  "key19": "2EF4pDanETxJJxcgWjUicLZbR8rYkcBFgJP1nPyRkK9T4HiSCEYKhQCRADHpDRP54nJA2jdGHsE15yPB845RXZSY",
  "key20": "5o8YVKcX811Fwf5LZQfWZ3gRSE9unKU4ousjTk9jcbCj2iGGRQ81VbMtXimSX7Wn2565opqEpPG6uxX6bfywey28",
  "key21": "5fKvrhXMHA8T9YMbjWnUQHLAMv5pFHrcx9S88DsFNsksm9X5GWuRznPKTUbGpjQhXxkFvYwMSoo9cDJzGmcpBRaT",
  "key22": "VNTP5f3PL2bk7D3QmuHszxHZF38kwe1nxjMPLq9qtQ8GExF6tbw82PtE5oqHfmwi4dW7G8JBj5qpCtEfKVknxc1",
  "key23": "3QqwgJXytsufWB65uYCdJUo9FqYSeva4Qb9eUwPpG74VX8n3bw832DkikuBswsemtzqkub8KmqwJgo29pYeVnk7b",
  "key24": "4c3RZEC9XaBSstKcsCpyP9xDsLhC1ptPkP6tGyCpaJjHEP4JHixdG7CYVyUAxwWNBPWiRnDM9DjWADgpeMKT4yJa",
  "key25": "5vfN7jouQkYzuEYEq7hxU6EtgwWvGEDdTrbJPH1Vo1htBpnTU8gdCYshYCEZjcpVqkJj2YGK8yAMfr1SSTsTm4vM",
  "key26": "2gzQJ24gkfKKeydC4sDLFjspRJAH4w81JtMeAzm8Dc9q5mADtpeB9qGZ4vue7yqsEWwXJiy3UWmrK8hX5GrdeD4q",
  "key27": "63i8QwUq68tySoEb49HuFhP12pV8PcYTSruGxHqdg9BVCHitgahv9Ubpx7e4bRuNJYdDdnzN3kn2JcMFGoRZB82a",
  "key28": "3Lfi7TqTC9G9qfAzhSymLABV6auaZp4BXAQ8G45hY8P8Ujt4vrj78yZeJpD54QDv9r4eETKMy9iiw6Zhf7L71hzT",
  "key29": "5tCzyBrV2oRZUk76twZ6MD17PQUpsEkoYZAk8wHHJDyqanB3Rea9jNh9EJux58d3DgBByqKWm7CprGWNUsMfYQJV",
  "key30": "2BkxQnMeVBZfiR5nBZ6WaC61wb4ASkNMQg4pfmadvkZJKe9HJDC1QaHCSYmT7A9EzTohDugki73WkJg5XAWUp73L"
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
