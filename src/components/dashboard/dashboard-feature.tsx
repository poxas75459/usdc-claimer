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
    "5Kra5LM5nmKhyhYDqHmLHWQk1ZsuEhRKu5tpBe2mkbtCb4iPoyb5y1QmPJStoZmvSgULdpj7xJRF7VTegfdLxbhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ma2G8RewV7Xqo3FYf9hWgTJAuHrSoVsczBbWrLrwCzopCc9ZNkRcH5jnAUxcHV7QB46ef2eH1jUGNbwtmtmMfv9",
  "key1": "42N84p7dQYFSMExLk84UE4jmmzs5GnX44buuboBQReXLCyHXda6D7HWae6pvTgX1y9xVL55AnTFwQvDuwG7UHMCq",
  "key2": "2WfDRVtsYRFbcneo9aULTPeoiYLZdx7KL6RHDUv2d8LwSLWjRNs1EeBmVfcCgDAq8LVSZ4rqNzUFnVC8F3DgS5jb",
  "key3": "2Mm7y3NDDUfSNtDjEDhuEKghgU67SfTNbSwPE7zXABovuCLAHJV1sVyLZCcBXy4borpi7U5tKxRqcpstBP2QMQCr",
  "key4": "5v8aD76ZN84GjgJq5N2EXiMiSGqT6sfcyHQ9eW5u3bKXsQZwxZKErgjosJ2WcvvKj4e36EWgGzrs7j3hed3jMHHa",
  "key5": "dbEUutRTeimKrUignSs2gzkTRabHbn3LtZEnbwAH3tuuz5oqjge8GFj8sdz4tVLTLGUKDRokHr9fKoFpsaEmCbj",
  "key6": "4wkKSwprZ5zatBxEuhgEswuTvVs6VpwHkDLvgqJ4yZh6Da5RAoKphDpPDYtEZVi6KmWKTWmyFhpXf54UgNd8eBwu",
  "key7": "49bAAQKhhCwVihyRPms1zU5zfpfiMyaJfo11Cc4KUabeXSRxgc1a85m1WiHoNLBBBB1jWiNaCoM1VxMxHuXFqXiQ",
  "key8": "3zZBKKXZt4wo5hWJszP798zsxvhqE6y1tGtreK6pUa5yAk4Ce3ZWJKqWiUb4ALWdetKAG1DiWsY9hJW2yeG9o4Ve",
  "key9": "4gqKRHYkFdy5D8cyCQQLpCeQrvsmgXFyZ3rTSNWdga4u2QPYuaU1XaY65Q1nYRwbPeJvvMu6kaM2pFX8CV1m5UNN",
  "key10": "HLxu1HjttBuN4CUK91ZBXPVwLMGWTcnSh9U3D8jNMm2a4my44NVQx8DKP43p5Bpvrybn63YK9mUnH3DLew5kb2j",
  "key11": "66Zu7kq9C9FaA3FjvNmiofd2YefvdxinuF9qXxxF6JFn3s6NfEHSv6ktAfW7VnHYRnSdUN34K1mLhVp42VP284v3",
  "key12": "2jxmiY9m5GstfxbyEcmDhbBkv3i2xHi6xmSLdmNKkC2gsV3xvgrL5Ym9tRLzEqRybUUHVTW4aDtSEyYvef55SBKK",
  "key13": "22pjiQg7hEGYMsxEWMgSXy6qtqjC28u2PYWX36LKMNrvex7saG3tF5URCv3uAZn3zmURY9U37rUbVTHNhVxDcxad",
  "key14": "2gyhh3qav1D5Ux3FiYATtKfdbZEn8Eoh92dPP6Zc8rJKMT5jtwUsmexDCCEwsBAcUNWy2HQXiQ51RgeDUywUBbkn",
  "key15": "PskYBGsSzf28B82MXStQU1i3hMfBHr61rNUkYEQKYmYMjMNkJGx9eHL7KeCkLCFfGgsg5NfkNXEGuBP2buu4j9x",
  "key16": "4mwSV7nKUXVFiQihQHxeYqp6kG3Y9KHBAabXAJCmAyJbQLYtjnenLH935UqJXP4zP4b64KY5TX4HdBBPghtZGsHr",
  "key17": "3mge5n3t68UGDibFVUhCchdmDRPiYzauWzQbjyb6DHyzgkLyHf1g59UHBXZkwXkDsqgxfaAoV7T1nL86teyE7iKV",
  "key18": "4FoNHfYJsVWfmoAhzjeeKpCEdhD9Bi612hACEx7wr5iAD6qujrsqBXy92hUAQY2icQn5GNXQw1eYSenZ5LkVE57H",
  "key19": "hCLsRV8SF3mDzSj5vDGJwUrkrrXCGDsqDHXiFGxJTZHVhnjhGqx9NKkWMKqFwn1Ys7zVVLZTnd54uUg4nJCBe2H",
  "key20": "4c9VUL7A95bJLnm5tG1eEdq9rofnc5qyTduMt37sWQm4jwiPDdeTCi5nX7WfkSKjyWPwVQJscHcHF222AjMPYHYT",
  "key21": "MUJoh77fsoKEUoZ8s8QBtbyE4k31zfxr3HbYQ2uaH7dDWoinJQULkjT57g2rKmk3u7bEp87xGCrZ7u6aiyHKZ5u",
  "key22": "2uRWQ4LZgYswdPi9YrcUPWYkfGkd4Zn53xcBCG5AoB9KGDtxuNH3VAKJtB7bY2Dcgb573Td3NY2bqZEFDgWKboCS",
  "key23": "4MNawW4roLAanVjYAfTDWYHkxERVMZTDsRijNV8CnyUWh6MF8qydm7WVFK8c8jKedc5Y67BdN582VxpqZfVk5kg2",
  "key24": "5FV2aShnr2nt3VU7g2j29Vygjnz1XUEP37Et7ugiDNqRs2kaeTXNSQJNchGd9rppntjE4E8QCHmXvX9f1mjqTy3c",
  "key25": "5p8AiUNTc4qHZUhnYSvqPUt3j5VjgoFRvaA6YZjchqfuUACeTgyc16EeDTPNqKTTfao5tYjBgt7p16UQGtVSJ91a",
  "key26": "3nDoCCX3X43pQntTPp7RLeWNj8DB41YVcHurMvyBCjjJaTaPLvT9Cioon6b5fCLb5UodDt2spePqAfTBt6uzNXYZ",
  "key27": "CPnu5Jkn2Akeu3Wqjrh6JbohqQdxEXZZomszyMwXT43aa8hjrUuh2oggab9grkmHy3UJV2nWTaLqurRq96Pf9aS",
  "key28": "3daHA7aX8PQCvCB3thReBMYvkNj4RHUMRWnj6X6Yzttq3KCnbqJdt84tGkevo41V2VGqStpvD2jPp7wdDfAwbYr9",
  "key29": "D5161LsYRYKKwRvebpsVsUW279k5tk3QCbBAL6K1Z8ZJdoL51GXGoaXyjfR9UmFYrTwbijRsa1Psc4cchufTW8V",
  "key30": "4H7rZ7E4sA2xiCKys3ZdudmXXBxVTEJVjcjqPvFKnS7thrF2NqyqJMBCpqrAGQajbNdLiShebQayhwJtqJC4qRqx",
  "key31": "5RVKuaMnjv2z3uhJBPHmebxrPBtdfzBHeeozSxeZC9iM3JDzo7dR31iNNst3sKcvo6egEXiWLBpRzZq5r4Ftizck",
  "key32": "2FQCmuxineiRfw8PgpSM42jEfDEM9TGw2kK9n2J8N4dq5hTb5kJenybKc1ooBtGn2igNyit2mvJbnAgJG9GxxziE",
  "key33": "3uEXLcrKN1yLR6rnwQLkv9Em5x6WbycjCdg6ugP8Umy7KB5M6zF3jsrSEEPStPhjEXgixPvrRRm3kmw4UE2YVM52",
  "key34": "2iGvd6L4n4T4egWAwZ7MEsBiH9ST85QG7BXMRsnPaRXaKnZRyMuZR4mU4PeNZa1ZsAqJXNCEWFmAixWiumqR1bWB",
  "key35": "2knhaoWr69uV7FR5kyuEPfJ7NfLEAvfmdm1JbUDmnfuCkyMeXtRtLR5KLvvUGWoVGxvxciHZ1kW8WPr4WZA9A1uD",
  "key36": "38bdbGZw3kdBgWLwRytqJDU8WpDD7KFRmSvuhyfqb46eKYFKDroTDF8Qp7FGzA1ek7bt2u2Fw4EHXggwjf2hPDgS",
  "key37": "3E5gnKsVFiE6cLdQWMrov3ayPxdwW3cgJhd1Hze16ApFxnS4j4CNgWjwF9g6yKivEk5Qiz8rFZyuiqFbKyXkMZNy",
  "key38": "4AgbtMmFdrSyDGCyewtiCG2gRMxTeL8txC7KJSBeHZbn8m2jhHBkrnMpQBR1wGQC4om5nFkRaeCVk8ZJY1exgio8",
  "key39": "52EbfXmoh4Hzt1C5rAgkL9Qr3tgMATy8F7NjtbipmLdm86fJjNeugyxxMZEe5CbKH4PBFFqmzW3Q8rdg5LFTrS1x",
  "key40": "2uZkojfufWXcnWWgQcdSstehyDSCA7MY9nfrgSheZTwdBJcHVDkJiFqutMfY6kBFiZUPsFDEXYdP5MKvLYPNyCQQ",
  "key41": "3Grit1XP9gxMqDWegVqfzi7Uz2HQ2k7us1nVZFKU9gWxn3NzNqE1gbn3B9kfdYDFRyRyVvV2WATF4Va3qaC5hmKi"
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
