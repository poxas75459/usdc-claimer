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
    "2AuV1vbbhwg6PcUhJV1cf2McHgme4vGP81uih3hT4EEG9T8xXHvfMSsfC81XxsqTf7WNdstx754JQQxthKoV6mtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBhhMGRfQpq5neSJe3Qmwq36y6C4zV2WfzGkpJTfMpkHUQuWg3Gn38kpJaD4hq9tm567o9prazqUAmfrhwADGmn",
  "key1": "3SSU5noLdNYgQEoYDDMGfvTLoeMPjwxk8CWmugJwjQShDdpyPw4JEU98hT3e5tan5rKvnu8qA9G2ywob4xZTJaG8",
  "key2": "2xq7aZtLDUaCdebhcng9WoCw88uaTY5mXtHFjbkyLXFt5cNqDaC6393Dp927cm2Mf86kjFzVAfsFhk4MhG8ZYLVc",
  "key3": "2Na2Ld9y2VTrDsneZnFLjvLGAnof3Fbfx2wbERVcVtZXCBaYaBssGyP51vkg5DgcmW9GZbjnUqQy4V2oJK8Uqejz",
  "key4": "5rwBKy4ciACiCwn4WzorjpSJ2MNUXicA8eHEVMsGxcBDxJBhaKvLJDhFvX7qUd7MUcNoZXjpyPjhZ2UZgRAfijC3",
  "key5": "2rBi8cVwK1tToeJM86Hej5nFgvMwszkTxeTiueMoRn2sWSwUQCVUzAnGPZPNLwtHXxfjNedYN7DoVWiHnakLebkm",
  "key6": "5RFd3h5ucx3Sc9Fg8GWipjQSSMkN6RNRhX2gksLShULjseQTkgwwqcQjtvJeQ2mVFbutta42CcCkpPSDFdxa5Sxb",
  "key7": "4GohNoGGhScb2TBqb7WiCV61WEP2bEc5yKeS2FFUvJ6oot1F59objQ8ygPuaXg5K5NAGoyXBCmaafVyBG9QEWAuS",
  "key8": "4wYt7JWynmMHyeyxnE8nSg5y7NaHPNWzi9Rr4XaowrWgq29PtcoQx6GcgzWBcLubmiudt9ibGDna6K59ikd1etBa",
  "key9": "65YRFoeKgyqaJ8heQcKgNsByMMtjQaRLvArkxM2d64f54geUTXTJJonfJiHsC2iBpe8LTe7ggBB4kyE5gkJEnbu1",
  "key10": "5jx5CRMP5DAJw8uTzAdQNrr1B75fc9HMZ4VHtPfkgZRLPEvpawPdG19ztF1Q8o45bTQpjZUkktudmCdnyutdxjWg",
  "key11": "3Ldv2xdRJaBjoArCXBFqbKLFNKGmEmwse6aQXbnzBF9neC1RvccEZSAs36UU5pBBfEMWexyShLBRyYSwnVpNH1YY",
  "key12": "4LkiZ8qqQaWV22GMwygtXbrZZcvB5DcfMXCv8GVM44SuK8m7soKascZWtuHnY9LEFtTs2CEHJaZ1Q3Mo7GHSB76q",
  "key13": "4edKe9mkWk7BX2vr4YNUdFoQttGrkNAhU6Ka73K2nSzaKfX8xHmf6RPRp79KV2zuBhy96yD5afeLBqDuuev13R4N",
  "key14": "2ZtvmNKzqVShyGb1Nwis4MZVZvBSCP3sxCYqv2BF4eGyyqjUBzDKAqcUSoSSTvnrQ2L5LE3sG2hmw3Ery21brc6Y",
  "key15": "4Xae8mvnsfZS3KfrQdo2Gn8Wq5HvgYvm2tRaESFdj3JFNujyvLbXHKUw9idj4NsAijwBjJNhmeLqfyKekL9jnViE",
  "key16": "qkjMGTEJ7wPKsNrM4oL9Rdxs1EbFRYD46iaQpoeDagkGtkoK3RrBxeEJgzJpUX7kdjSLaALBeipgMimuMkXNgYm",
  "key17": "62LstQQh1F447yU8tRebWHmTntoVGkBrx7xWBd3QNGQrGrGSdKPya6fmRLQvp3Mwa6yvCyNbTdnrwsYmingiDmdn",
  "key18": "4zQP8xE9dU6rhrcL8BymkE7NYz59uLQLMKZEzazFo9yzjJSU6R3kKA1eTZZYjmthFZndXGXL7gDDEAAyp7oMTYjC",
  "key19": "3XrptB63submsRw7yNppUayCmzQKfBGhzFyusGTCd3jA8KEiE7TbmSnyUTwBsLQ3cJzQniE1W8v3smsKhCVia4cT",
  "key20": "2Ek1vrRwxyzsJLMiXmTiciPChyRiiAWWXHX1rqhAD3FyzGar8rracTeC6qPNvFYMUUoECEY5FjaZNr2XSyskR1R9",
  "key21": "EF1vjQVzsnqes9WbqRskMA3pEoveKgcRQVTFoGNZbrnArdyiSCQe3sbqKSdfeEJ67KuanDJx1VrYZCYDQn6p6wx",
  "key22": "3WMSuM8afjG1Y4iQ7sGsy5MQ8H2roQj6NNRrTr9FAF3qDXt1eKQbYPF546Vjfd9Nchiy4DAvdxsdzAmSLVbGqU3d",
  "key23": "5iHVzayKAuEkzGV5XBxfUPvVFPXBBhKMtYB3PhnvTKYToHVcxMtd2Se9f13yHsWK3zUWSKvTPuM63KUoyJzq3qPw",
  "key24": "5Ya26YrpJgt6D5bzb5k3hJMKyQcBhaopAnUdrdaGxaoEB9A1RppLmtDbLXYQBvr7YcLXYcWr2DaVjr9KLPDwcDwh",
  "key25": "2mtv6PXb7hNAVv8adEH3VYMcqW9BhcZPD1KduZXN59MCYt83tCGs8f9d36GvfwZJfXUy3thLwTZU8sWFrHUhTv3v",
  "key26": "61ABgGDuQY62ZPKcqGxTV2YqJQXaGsrV8hs7vPgFw2JwRrzJZZQL9yWSKbXyF1pNn48rYoXnTkfRhe66rf2zrKbJ",
  "key27": "2GZECBq1mgfKDwuegciRfz9t5kJMsNBY2RPuM1y5mYrmdA5hwkjwJDPVX4NoGHrXPJyn8GH3HvhZY7X5edGwB6qq",
  "key28": "UoRFtXbBguaSjyj9dEhhNPDKohjRrdvg8gyRDsBL8z7ud67af7Pv8UotzXcAPDmuGF97oowU5FLxeoAAUqNE7vm",
  "key29": "5YWEggy4Cwh5ANE9mrqdSEfjEaaHEjPmyroT35XVpbFc9NCwXXbLzhy4kJ1Ptd8SJCsw3zr4XDFahfTxqa1HK4R",
  "key30": "4KQaikxsyXV5cyLpMAhv8uEmu2Dj7MGG3H8toBeBsW85xxFkE6oQqr57mb2StyfbVcknsZ9i7KYrM8yrXjjjgKZH",
  "key31": "4hPt61JvyGoKkFaAVbi9JbZA9c61w6tnEco6LtKVtiHAVb1fwrxygd7ZRuiVzX1F4m3hxHkYEAceALDgnhD7oV1c",
  "key32": "26F7ZVRaaoC8c578acBDWgYcFUs7HXsPL72TNF45W9cDBvwDUQGcsvhGMvd51Baapkn4GLMDaWCxbn8Utb3jMpbv",
  "key33": "3YbFw3vd1ED8r8yDSCGSrHXH8ZfWrQukJxCC1pQFvoXAqJ3771pdxHV7FvaGGAtcryxCWJZvzbWBbS3hAKAQTVb7"
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
