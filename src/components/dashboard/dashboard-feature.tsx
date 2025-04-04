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
    "aCEvDv1gcoj3miUHhEG6k1QrwfPyDdiiS6Fz25GNcAWq3iD2m5T3pAnHm6X7skNgSdWL6Wzu2zZ4U9wnhsw4n9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iaDLm9x8uxRN3Xn9TAEmBYo7wfaBjvUTWfmPXYoL6yHZB5FnYLgA152vEtoH1kASmMi4HUtreJMNk8FMpgkR51o",
  "key1": "2dGr7oVJvLJqZRe4p3NSeT7oBK8xUd894S4MUHhgdxWw6u7uJoFvsqGYscHHGm8dUUqaPpDFpkeqt7nDo2MBnFck",
  "key2": "4iPm4m7v8yQSy1NjoECgi823XFKqEuTtNRqD11PkBsPptmmW6bZveofouvunQ8Dbf5xyzDAUWdbcZ5jZVHL6JAzF",
  "key3": "3exz9eZR95rg8SeuYMctVwrpn5er684WtZrwuavxYxJuEgZcwFhjxkQ1BaWSKPAhPUeFXAu9LZJSxpUQB5GBVnT4",
  "key4": "4zVVeSkaxawt22drUeveiRRmqPbAbY4wFDebDyZMyQUsLxE6xHZuUEShcgLzYVGEeJSSVpFGDZD4f1uCSx3a2YmB",
  "key5": "3fDYDqMUVM1dijcrBZry7e6zLde8xoGq6o3hTsb7tueSuBd3hMvz5YvPeVdQbaUaf8QDM64i8XJuWdgppJxKMsVx",
  "key6": "3QTsZYRxeo39DV2hBMQSVrJ5DH2hwU45So9Zc2JLL7fZxWUPsWKgKFZ9jncwdDWQQzP7r2XQ9nsPHTyhQkBHyrHF",
  "key7": "Qp8bZgvrzcjjuv2HiZv9QG2YT9jdd6PwEPbbcyuKcZNvnZK1XFfvsMKqDQvn393c4XCZjZ6yMP7c9dAYV4zv3UK",
  "key8": "5ZPjmqoNXkY6jRDdr5MCmMNDpDTzKSVcfeuPukjE4LeBwh1GVMqQg9LKB1NYjjKLnousj8PHxJSb5majFiGuSDzL",
  "key9": "3t9b5KeitRWKGTVkUKDF1niVQAkKWJPuNkC6vbNkGPoFH2ScVfD9d6N9NVabyzWsVWRQ89iWQ1HmxAN4eHNgtHzH",
  "key10": "4Y8S2e59sjXkizdqDm1F7HatKzXRy1EJe8DEyzkz97vXEngXn7FtZGAEQPHtcnF6ihF1B53BEXPUFLkd8bFR7MUL",
  "key11": "UZPznoBhF78Wbg7QVrjMSws2F5XNcDRgD5kr9utjhTN2grao15agk25MUq8jrPn8hF5LaS4aBEqTPQQMkX2zB1H",
  "key12": "45m7UPV8Bbv9JaPDGR1PB9Qi78PmBV1GeKz1UArUokLTkH82XAUHzGn6K7MBbxbxPhbNfXJXWcdVmYamDHDPVHbg",
  "key13": "3qxgbHSBF7SEyevofjgVuXvoRQS2jMM6RSjhsvzS47kNpSpr9EJi3rJEyXw7HRShzMYka6MyLU35cYvefwzRdrdW",
  "key14": "5S8XiFSuoKTvKXJc4dtYhpfdCo2WNCk7PYeUcKTVGDeRmbrv93GBdDNBBMtBfXqeo1ZHA7eu64NxcaoxRwkb9C8P",
  "key15": "2BDGNu1fYRpA68YPoZjfnDtk8hNAyAjnVYCeTAufoXqpeGPTqq59s9DoaS7zyqU5toH4UqQcvY9pcqDcmJyYDb7L",
  "key16": "627m6r7W6mxmneBCESKfPwrvMgJzH81nDT9tMF3RD8U2gLpPesEASApVWAqKDAfZ62GR4RT8MbPAAxTVAdUAMTQD",
  "key17": "3qTGf8vQ22zoKbKN3jaBeyWZ4TXHiAP56nCTVooiSexuN4hXSb26p6QZAzrLKmZLwUxQzYomLAniqu1bqk3KNiVF",
  "key18": "5ggcKEcFWXZZTTZtrYysVNitrH197HSpycwBi5juhkTx9nmSLEuxedi4Xk4cRaGaBEudqhFSXGftFKrBDYQJYUWv",
  "key19": "jLRuc9AWQRquQAfgwjBFcT4TQhRN7v5QSgaJpNV2ie1JwEAHHwgvB4VvFqMGPg3vjkbkf4NyMt7vkXegp8M5Vwz",
  "key20": "4y8ZxkkaHTmCPh82q6X5NAEUbMbfmonpRRpk9We2yFMZWktMWTrNkq2RuAwBFPyNeWU6kZy1HaT2Hm4xk6zavXcY",
  "key21": "5zLKw387yF11xjM96X9EHKGo6ueg9PDkM6GPrSJsSD5dtpEK4TS4ugXXBQuFKBvtzEMuKuNmhcLJa192tcg6uXg7",
  "key22": "2y17wwu1V9h7Pp1QvAa27ZFnp5j1GokghUCGkXNKNG15srkx47NH8CBvpGUxTVV9wxg5jQ1SG6kxVwL4B67bEeNB",
  "key23": "2VAAVyHUso9JEhbEC71w6CBZvcfqTaAVwSPJhX4xxbDtjwF5Wp5NcChieanp9VWwxMmbBzwmp2H3aXooqHdab8By",
  "key24": "2V3N3MPj6c62b84quVhA1m9uMNwqezo2hxXyxpMEgkA5dQgdPdoqTYpqyWcnPxYSj3dqkgAktQC6yYHVj4BeN7uD",
  "key25": "4dwpcasmzcwbvGCEUxwpzE3MG24fEyorV4ZJm4Sd9xgM3kfWnBDNTDRjTeqrYQZCJKc4n7D1UkeHpstnMRu46y9w",
  "key26": "4y5x6sCV6KWaRitaiwW6hZVaV5RiprL3uMbditB4PgrYVU2h2JobSh2FMtzL7zFGvrLdrtWqVfkyFiiAfyZ2qj62",
  "key27": "1qgakP1jW4eLvTXjVaGYxtHdgDMMhZ6e4jGZChNedSoda6vdAi1BRpvURmQ3RFNu8YMKgDGQuivK5H2kZCzfffC",
  "key28": "2nnSaTn5txVwrBEcYGvyHqqRw6V31zrZiUgnHopdXtaLf2sdv9xCjoBwEh6PyWddwP2VaUSQLL56MxvbAZs2jpkw",
  "key29": "3gLyDKFdKMzhNW4fnXJCqBtpK15zMEFm8DRwgNzqoWhCPDCmYWMQBeuucA1x7w8tnbZZQ4QVphFswdJhjWwW1dcb",
  "key30": "2Mipzc7Cx3ZaW7UtJmgCc9V8TNqhcrnuLQ8xmCYmBR6Kspb8rvW2cy5drCk2u6ok6i49UrVsPvsUau4dTrmq8J9k",
  "key31": "9zfpiheqWEY2x3tqKCA9vtJ6eWxMua8Fheb55h682Hjag7kxerHZqpFZ8CbTnemDWz1SBH3axYDV6quyLMm378d",
  "key32": "36BH2xbx2j7tAod9NvRNPzUQkKTqFSRsq7AdXoPVGcEscKH9KKBBtbi5nxYDJ6zQSHyPyT9VW8MsFtiY78YZdeZq",
  "key33": "4gw7Eec3g9o5b1B3z3H6nrypjqzBR2MXtRAvnWg4e6J8uKQoFs7qEP4FrWbzS6mYQjgaL3GnDhzz4C1RFrAzna7T",
  "key34": "58fPRVsZAKfhKUgdnWn43t3RVyh2tfUHPLjXQ44MPtng32BbFK7i7e5vMQQBY6ND36ig2jvUC1wiFpE7DY3jWdEG",
  "key35": "9cNVdaqTchxT9fMchK13SX4zmDV3gNHYUCe9UXSkzduX5w7MYd8vSb93NLJjWdcuwxi6Xzh9XcXx26BqEL2rxMq",
  "key36": "5At61jgwb6hVqacqC4MA1EviXZkfAPixSSnhFvAsT8Fi1vBxHnJCQi4rTiHkBVZzq9jTDUcgTBuXJ4R7yZoDb2T3",
  "key37": "5LUbDzm67bxzpE6xGNKz5c3M81wgvWxmFskHQ6dc31p62hMv5jD25BmjAjoJtprJ9Myw7qPcDhekXk84QXr314Ev",
  "key38": "2cw7vqPLkETm1r92fTRsonyhnxrEJkatHznjJSU16xLaoaB6jcN54nXYYAa87kh1KyK1VdTn2FQ7h2Le1dueAPLy",
  "key39": "MDJFFKLpKCqjGVMpHMHs4rXfFXCg2XM5jLZUoW6E45gEvRTi4D8WZmaJKRQpf78d2frkBhuKfR5jC1yvg2N9ZVw",
  "key40": "jvNyuLV7VesvTrYEGfBaK91tTAVMcpBeuvFi4kyT67PPJhms2391wh2Nvjsc93c9wpZLXMPYGjBjYMDMRQAiQcs",
  "key41": "tmxbnjToUQxRqmnvkhZnBsjwbvDjZNmhEor4nSws49ZAoM2yMarPBtk2kHxXqJ1Ukjhj6nAUgM7zmFkxgwBTMH7"
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
