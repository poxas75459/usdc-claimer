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
    "2qSEwfvgdLrPkmJHmKBo5wRHPbhyxPboCLQPLhsL8sK1vvCU6qoxLGDrZtP3KZ2QKgny54rf96DWjxYm149D8gnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ek8wkmPYjDTCr2fDyWhHw5RjEUYKZPCuAMYsaQp9L48vUBnvPKjCCPzGTz6uwU2Npyar7nZUr2nALEPdENLx8VC",
  "key1": "5srrdvUmfj8zBJjMAtNvazb7TGJW6sxmpew6QhAzz3etkmhDeDandqY7AS6aYNUN4nyhUSQ6Lsf6qqeXyETiFJmK",
  "key2": "4d8V8jpwEvkbvxbh1k2jzzFScE53UFzW14EAXyGKjziF9VfTvtwpJdqPqSE3BHb8aMRsYcT75YDVjHGeNQEm7Uo8",
  "key3": "5EwBFrKs1pnPnTnpwcpyKgBD6QDg4Jo6EQbg7RT1KzfNjSSJv7GrHheSEcjZxgd7Mgio46AEci1XUVLTtCuXkggw",
  "key4": "2bXbBsxPpGxP6jH4pqQe6QMNbJ21z66rRzvjDQsL5SuBEVKvMweHNbCsZWPWj5AR2oSSfzuZ81LaNkvt6miqWG89",
  "key5": "PZ6mzsHTaZR7V2QZAhjkVN7bJX49Crkaz77bXG854oWXRPj1UzkgcyKyJqxCy84VJYDPRYfuTsG7FaCMLCbmZbm",
  "key6": "2rxo64YngpD7ZiCRJFQPAUeGQJRzGKhJ9eAN4XDewGQZ2uFCiTS5cJuQpZX55mXpB7qEmigS7zWb3vFTUKTczG7p",
  "key7": "2Cc83sf3Uj5nrDKQG2eYvsHsVQNmX1Q4rQJNshA4Q1LuTmLdbnGfJJnHLLwJS4rZ2TrNUPUgr5wiK2e1ubmk5nLD",
  "key8": "5G5w26cia8D39NJPCbqm57LuLV4EEL5xk5CtuXGRELdFKCXDW4Lwk8WL1kUrCzALJMaWLP2VYdvEoHesPmxs89md",
  "key9": "5QJLM6Wp4JYd2bLSVeY9wsSKvsjazsZZ8GRNyni1Zef3w21wLaKzB7Mwm4XEe4qqyAYNX55WNiikEuq7nPDqBMRX",
  "key10": "4f7CK8cpHRG8DuuXxY2cE4Ydu7zHh2KBPxqE5Vb1JGgD1fNjTU2UHC5jpnn2AcubR3xix1hL4AJk8xkcDK3gim8L",
  "key11": "e6UQvTUJoLkrSKkXMELJuPqHSYMsKb1j7zn8tgibnnqSWVDkaVF5cqWpCshd3wgBF5ht55VwqVqtA27jEXXds4g",
  "key12": "WGdxssDYATB1mHUPGa6ZTofbM7h6pyc8HJMGBEGdKN3jYcM8CFf8fSG5YmqP9SrMEMAu5XnhMZakAyAMxJernyK",
  "key13": "4CmkysLsJDozGR86xeun4Hbw7bZcyjvUYuvHHBW5YiKJWGSSTnshCHKpRpouED2hVbdRjtGiqZQbwCMBtTS9jUiU",
  "key14": "5cQ5efkP9KevXbDq51UHeh3pA5UtoVgYbk6kDK5HRXLE5fXgDC6XP1ka2XQgDyeiEDXbaMJMVDNQfFownRehs9Yn",
  "key15": "25JrcGcTENtZD9zwortKzkzcemjXkRAComC21NREaxKpcBmmdfUxGzKA1XT71hjoNgW6k9q5bVjH6XEGPHpWGqM9",
  "key16": "4iskhi6WybnqotUjuZFYXgd4E162b8XEicTFneDVG1tiQ4uVvrUsTVNfGYA43gqqkw8jUENdeCjm66dhmSUQWN5B",
  "key17": "3EYYvaf3crxUieqFHYAJXZHuoityqkQwPv2iJhFSkAksKTerbJwJ6FyGiFHAAVuNV1ycnezPJ3X7sUKVFbxAsViu",
  "key18": "jx4jxc2vHtmL3LEh1iV4RWqamMVNihL9BBkbuTHdt5xUSoBq5BMzn2bDJ8cG3dtyYKnU7dLVAmnEGvGg7muu14t",
  "key19": "5oBkZUFdKqQKyin3Kf4y9Bk9s7HxdNEC16i6xgEGPmkbegkSze7vnMB8rX37v31mAWKkbkPYCSvEs9r5jjMGa5nF",
  "key20": "24jdCBWAQduHppZMwKpd1wGoXeXsQCGKnGJcmKtHpscpZkbZ2jPJjtFGWbxLFuersE5tGDX4vkeCv9bkF8GYQnC9",
  "key21": "44S9CNJJS8dSgkkHwSgmZ9sVDc8ygKjvYfaHy1UG1rHYC8gf6tvY5omTiXC7kB2dDibNDpjyAtsYVi69DB1sFD23",
  "key22": "4ayuRcYpb5vfkbkPtWFQ2rJ6H99YpCzRLAL1F2Hs33tDcLkCUFRZTTB1DzRLSoG3pVdoMzunPgtQemknkB7JzdkD",
  "key23": "6Wu4urAdvCUc7GYG9nXHBJ7U4p7pkcn2Lznuoc2WZPViGUjK8RSsJDPmvBVHiw2zv23Zvn79mLmyUTDjJkas6YN",
  "key24": "NgEZT4JZPy6aDFx2GE7KCokX1Sz1wbSgDcLGEdb653G5U67kaYZhpGN4ouuZND84PgNC1KmLHna3UcTYoW51Sey",
  "key25": "2JuK6M8ehb6sC4UxbGjTqN7eQTibXG5sve2bcjaTZdL9WTx8Z1DoJ6uJsKpjYtgsjhmZAk6MvgLzZxoA24pqA48m",
  "key26": "5reyFKJ1B8SRe5NoyKtiuo36PU38fJsqR5ZTWbCjThYSr5T7K5kZjpQEuMvYoyXPQcZU3mMz3RpnTzj5vL2jYHgp",
  "key27": "5AoQMfPJDphJkRp5SGS5aySVhYku7141ETSCnw8tvoFjbeQXEmjamgJexQ5XAmtBYdErwhaRpQ4MULRHKCoQYxp6",
  "key28": "2cg939eD27TnAa31EbgaRAcFt5jNVfqMuYC2NKFheGngZbpkGrMm3q5vRvmFneMJeEPPRWkawaUH6wunqL1t6cqq",
  "key29": "4J91FKWoyThz6xv4RPgKX5Gvicd1tyKjpZ6FHSqFRgM6U3MfFeuVLEvnDKcPt64V6oa51iZ4W8dSgc9biXF6EZ4Y",
  "key30": "5Y95Jh8rXecd8NxUD2TuiRkmhrAdPr2fF9hkbTFvcCQgsyYnAZGdmgmRQmXmxaUoybbVNP8NQXxt2i2TNPvNx36Z",
  "key31": "2FfdjeLrahrwgEgi81S674zYsEkkDDTvwEBUVpna4ssxnMeb5rbVG3LyoXoA7R6mfhPTBujZ1WpLaaPtYRETVoVx",
  "key32": "5ZfJ63W5B6AnHqmQSRN9JBZYRMcuYnh12zj1fpnUTKwTj6U5QxcZEvQydLYJHmtvtHhyyKMKhRDdRBmarE7YsUjZ",
  "key33": "ohqZQWZRNVMNQc3zBScgAejmY8oHt1JktqhLBycctDbM8QHckPwWNNRD3CekpKxqw52FX8iknDvDymkQeWPtUVc",
  "key34": "4hmPG8bvSrfmz66Ngb6hDq51CxxcteczG2tP66jjJ1jw6zs47hnGW8i8ed4Hf7zjoWfut4rpbjuciXCnBwWmH9SZ",
  "key35": "MoRbvcvL6rwvJx9r32LgukAk1GApFnUq7tnRxyufm7FqqVQcBW197HY986E6U7zRQoRwi4hLo6zweXQTHVYCKa9",
  "key36": "2JdmZUADZMpFN89FU6WDXwNnscytv63W2eQkkUkNGdE4vnhUkUkJRKFj59DHSdSrJoUMbQx3qaH8t81eJ8MPJucR",
  "key37": "eNk46gTNi75iY5Z9vopkzPKnGLE8C4Gc7GxSpnKupKcFBS3cUna6rYUveGk4SANZ2GKbLzkEyvc1UmkR2qxCcm5",
  "key38": "2PV3dVmniyXa2LgrJGkkJm13p6JvWpaWPxGm4fVscbew9vE9XUhctQsCJptxdyRCHrujReTYfDSwNyubCeUJFQq4",
  "key39": "4sy2CfhV119AhuWRAJCh2TtMRYPxABrcKYiwKB4UonMqvbQRxyEjpNXEigQkFtsz9VaiJen6HaxMAaUdA1AYUrX7",
  "key40": "JdP5BRAwExkfgDX7s4FUuzg2r3pXyGa2C3iA9d3e2FbG3Uam9peVcM6LypxR3GnqSuq4GffFMefLt6nYxYN9RQT",
  "key41": "2YAvVzL7gBkuXUtTRbd2qXZndaPcZ3vcoW2EkEvQZ8RBj81wuapn3RPDUYNygje55SkDtcEWNQwC3NwwfKzeLZv1",
  "key42": "vy1jJmxS8q4CGW6UrjGZ5nQ9EpJUjXMHTFgngTTMoyLoBz49sKtQneUnncx9kKCTNRyT5bpKsunidEiCR5fFXNy",
  "key43": "3GmNndX9p92EGajg8jRna7Fg64TF2MmuQV68BZmufu31MYdnSw2YbEmNk9QqYkmfcKiFVu8PsDQfrS2ZcweNDBJb",
  "key44": "58YzFAiTJuvGDwRGzmaD4FgoQ7hdWaEPNzSee6FmbwiPgbvJAdKyydf9EDrZceDroAhgp8MkMrXwKBSinKSF75q4",
  "key45": "2mCXeRpaqkJoz9AaqLSFL6LH6d6qUD68PSvqrTMtao2tBk8yQzizsYZSwccZNL3SmwvAtYLajmRQp3CSsMeowLtu",
  "key46": "5QeK5fUX2z3hMi9GkK4uzfejNXZpKf9PVd2a3JM42trwEmMKXMdJYUmrPAW6e3gsKNHcAErifssAQgYBAJkVwkj",
  "key47": "4cDnXdEVpaSznZrz1AVjhaWVrG3edAAKekspWEG9LjP6AVjQE5NTtgsYZyNPQy11W1XLZwkZm3VfSE5HSz2Et8Ke"
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
