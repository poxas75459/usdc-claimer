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
    "1vQAxLRoDoofRdQU4f37FhUh1EvPxuu1NCtPjMvnEvCpU8JorFQHT26Z9Dyh5SLRpCFWY3tR1Zemar3gSbVHbdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2DDeiHNC3uS9JBbS2GeJYZi8Xs6FQ3T4o5AKaPLe7x6zQe8pCAPy2Zxed8eNHihfy7rvR8A5BuwMxPHHx6eje4",
  "key1": "5YVA5qsbKtYFnZDZwvBnM8MNYB4jCaeULtR6e4gb812eBGg48QBeAurJ4XkDKS7XxR8rmmtVFT5UDvTyjNxz4JTy",
  "key2": "5gWwFJDMJWpLWaS6oMVRDVWWvuy5cLxmeNkquhFUCGzQe6JAFqD7UwE1EM9FKLsMXw6XbdZqLYSCsitJkLT2oYnQ",
  "key3": "32GQPPkUTAGJ38y4r8GeXuPNgVUPepUi8QBTfUK6KpDjv2fQyb4Vj6PLodTfZzX8kxcHdGFCpqmdq9WUEUHLivu8",
  "key4": "8twBNGgM1ccvLukzNUKxz6oQDAH7wTJ4PaJtryZdnkg3PDfgUwfcTgtCFn8p49oYTu3SJWjuxZ5wLybdWDupEQR",
  "key5": "4GGVT1XmW8KGxGYkwjzz8pNd9R8zVKH4mG2gmm5iW32xXKXvddun1cYD3XAWZpmf2HTzPW1tfVauaMSWAjHHtLw1",
  "key6": "zv2zkS1JdSc6gjbQHMsa15UfyCj1poRsG2zbMhufXUqaxbpxt5a8jCvosLcDFDSUuomgfSK7LGFLhYWDG25eVHE",
  "key7": "4scrKRNwUaChbyy8vDS2HVBVH7MXJLEcumVsvbAyiQ83BWNpSN4Bx27YxYp4rXTSasjtyWxHXGe8u3vJpNH8vPD4",
  "key8": "3qjCNjyDoeFbCetXN9Rz8Sb5qb29RoDtTQYk72brhFJ7fp5tm4gT4JhVs3LdFMrYtQeMazBf2aC7dVbKS5i8A9ew",
  "key9": "MM6nrR2VRy8hDFVJWRxcVvnZMxebWsBm6LZiqgrad4P1aPGQPEY4bYgQm63tgc6Pg66TH3PevQXNrjcYKDuAjeg",
  "key10": "4t6ULWiM6Arfj9nNYmTGoiZjGCXfFinxmUU6e7KP7uv2cQtdGStz55jgifCAmXhGcQL1wvmF23DNMeZRD7UxdNn9",
  "key11": "2LMMPzCir3w1aauDv7Rs2nhfBQSGp1eHspk2VBeDovhRALrNPk6eHDG6wA1avhRSxx18FJbqC76w4WySErfZfJF7",
  "key12": "54rosuXJc2QzPSh1SLdMcYL7jtuz5MdospAjgmPyLgdbkqJWsNMXEWbLitkC6ifRQPHvAVMxoWQAfXUzN19wk8bW",
  "key13": "2kvz22qtdg4zu2bTP2vLACvVRd37U8n6q2xnJu8tkhL1jgCbyaaruhmZHGypvzk5dQnUUaYnywftT4EjnzmESnj6",
  "key14": "nYrLzxPpuTPN5mBzSEMVnjS4zFtLnyDNisXFggu7dsGVWpfBsWh2cj4WaV5xFLcm5BbmhZ89smnuPFUfLmHXp5U",
  "key15": "Gsd4g1KfGRBatnEHN3SXGyj122PFVb7SKbazpdrEXroRKVJQ95DWkNbFgAJetQETb8MKTHGwiMhjYpFtmGubXJr",
  "key16": "3nXuXWyqzNfhKuymyvJy5JWtST4KMX9DuAfDGQjSdnCjoch3SnSDTneqtFcgLMfU9hSArHFr9fKGqp3wgwTYvsft",
  "key17": "4kwFAib5UtxXEcJLX2YfJ8QsyKcMJdCt8LpHcrwdqpHSeVhe4nWDi4YDFgfUUGXZfAysQGoHEBr1zhYboMTwtGx7",
  "key18": "HPcNXqFipwsvFLCoy6pR8odaygcx8ARovWGJ4ChEdUizbiErh2cWoKGG37RFR1v9Hu5Bcuw7jzmkdFw2dhRL7gj",
  "key19": "3ua2XH4LRiF1bKVoZjrPjfAaKR34j2J3Mf9eVxxrGQu5EghBAD3m6tYNSp7zCkdWT7u833RRc1kvFKWZ2uUZ7mRU",
  "key20": "hdWf4xsop2zqR8G4n4KUdJ33oUdN86bBD3tbTT1WWvqzuxfx3pdsv92KPjSeWidRZ7qagZY9LHc5cWiAJ2K7quo",
  "key21": "42p3zDysq8mCo4AoDvfgf4goH9gwBh2uXUP4aNhZ9AYmaPMwBTT3SBjtVdSQckcAKu5FkraU5Jp7BCqQKGfPWT7n",
  "key22": "5BnarPSt9uoPW5kcmAmLeuGsQ6ZxPMJLfRPyhkDknVK5BZAM4JiR8jJRVstyP8vyfWZmCpi7mbYTGJseat9fBFPp",
  "key23": "QifCnax4V5xVb5nkFgN9mJ2reFdTYNEqPwXDtZzLxg4R6zy7ZnkqqW7yyuuxNKApQiPTJU1fVDLBsJaQRDT2jVk",
  "key24": "rKZ1ahB2em5QqiPkMVS9EZ17hnAukQ4NkV6jRDDmnpZaWvBDHTHSRB1VGGGQsy8hsup4Vq8PFi5kg1F5oizXUwu",
  "key25": "2wtKDKj31viXhxdhz6b3aQ3mY6xigvwkTUSDnH63eEMDiUmd2SPH7BZ1qqL4tApkgbxew5PtSVXstbqtt8A4jWZn",
  "key26": "nEnCm8sWLqBMY8ma2UyGkXs1Xvys1sqVcga2RN17aR2hFtvS3d6oLbWWHZCkHwMpZbzfA1qX4mLohqneZXhn83o",
  "key27": "2bi2c7q1f7HCAY8yb4XkwfCTDeroqLhQy1sGhmjVm47TkAcq64ptePwvDGEDrDG7jHcdH4Lf5bcnA53jkkWR3g6V",
  "key28": "4iLXRKp7wRxKQJzZpbupzt8HV6a84C74fZkzqCNaBwn8CnqfFqFDDoAH6dUS9qk6kGPp2VvbNLkKRKwimHdNknUX",
  "key29": "4kpJR6hPNqw9MFbfLRyrQDHd2QipSnjUn1ZTCGdi6qMbND1zBqn5ALQQQv1F1gw5xqs46A7YUBR56yrgeLXngcdp",
  "key30": "NUxjyvbGsspUVD2xdMaxqSre4uCPhgMyb3Nm6MTL61XfeakfCzTNU8JbFyJNdGNTt8ynmMMNHusj8D3kXWWFdFZ",
  "key31": "38WyKKAiMkyjrLVtPgDqu9QGDgxm8Gim1wqKbkUFxJumdM7m3VF3sYx6qdiCT8EhamNBf1pboeGz6gFX8uvgMrGd",
  "key32": "5fXnHDoqYVAqmMMdqg9vSUDM2fbV49HnsibvY5v8vrdckhyVSfRUxPyC87t8LYGokM9Vq5HoU89MeXUH93oBjJJw",
  "key33": "2qUoiiZdq8uVstgG4QaDzYcwGC28PBDwqJWicTDYEeY3Bd7exeq2kAnPVdPA4AVChFTegQ5TTrC36eVtJFxLTaU9",
  "key34": "ZGggi9YZPALpXiaB7frwRV2yi3ethC9r9kw6Mmv1CRD6H9Mhqxw5o5bSVKMz6cy6STaTrkBEtyKd4Fs5xt21WHU",
  "key35": "2hVTp2qSZ3WVeNuhoG283W7u5DFox57Bff2hexhbEcGB6oaCfJugGiJLiS4YPjCR6hXDhHDWRBx6aM87cL7vJq7Z",
  "key36": "3QvwXKYMevARYGbFAkfeEG6hSQwMETqcph2S7FoYxWu63gYWxh4XLkVTfJP6oGaF9cqhTpEiMgmrBMBjue6pekG",
  "key37": "5usdytFe54C5AeugGjeAFACShoQ9rgtg63LrpenRwAsn7HK9JYD7fgsCNVip891pLWrGjsMtzCRharUhyLtrFoq6",
  "key38": "QkErA8HNTdd2yCupofuaYVypWKU3rKDANMGsbS8gijL5dD1tzCPNAZT7raRrM4sUz1mAMNvn1WnyN45ZS8gTTSb",
  "key39": "43Y1emor8tt4uf4gscptxTkGxuhyH7gxrnW9J5i8vi1g5RDwkZyCMEhUmKhb1rN7x976m9WQaX5pmr6UptPEErq7",
  "key40": "3CPjYSqR4WuvEasBxj1oL8ceeth8fCBiezfa19gEs88iTjGuuSWfvALWuWjVB2TVxyqpSmKdCcxPPtkLM8c8vQzW",
  "key41": "2SvECt9m8bzhL8VDLQLCzJyEjEcLBcMhqh8u8z1TzfqzoJmqgAGpMwAaVX6Ck7HQ6UysUgorZioLJ5eAr9R4sX1s",
  "key42": "bSb6zJFK84Mao4mAJqiPLTrD5NHuxeDsZPMyZ6VCeBe1Jc1BfNRqS7ZnCrRbLsprFAU1k4JSGE3R4zZPdG9ZobW",
  "key43": "SptwmwEMnX5m8SV5RVMBg2zHvPontK1VRdQ6u8VEFaGvpNuFoK2xkzE9Az9EjLV9mJJ9r4rx17UNrB4A62JQ7PC",
  "key44": "2KhV7Yz2qP6EswwvAp5Nz4VcTb9qXDjoBz4yi9YiEsS6jZLEN3ndBUhnY4pURTB8Spb3ZYknuiQNpjxrbNDB4Gt"
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
