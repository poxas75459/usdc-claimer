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
    "QRYZkhmHSW6mqc8T2XdFT9ueM9fH7d5Ad8vg56UvhRZosg3pTYBFUzst7JFoc7iz3EqaFHG4RS9G7hEXHF2izNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYuqmAQsqbRHHq13cwwfrsbGrKNz2EUfLrAeMKMrfpWmNNhK7xYbt43Qysm7bDP1XqzXbCTrYUMZG9HpQBmEMGD",
  "key1": "2WSiRUcj4xgr4f8KZ2LGtrrgXm1BP35pQpFjqfavWkyfc34bFECj5zLB9QXuJtuNri6pRC2fprVbhhnXcN33akpS",
  "key2": "28sss9DWfGYxU3HN29v1iMK4thrfnJPorpXDkyXyorJU6EjgH4hUYwRXWktQKeEXBdgN5eLmgrnbSCXBEVc4kerT",
  "key3": "5ofDGm1ArRqsFTjSWvZyid3FggYbNEmhVCEvsCjjXzcBGdv45yt1B1VGFXj6R7oz8e5edBDTtP6HPJEpdPZBuvhL",
  "key4": "4VMVWPJ47LQtJURUrdwMs4BuhsiFJPs37LB7pcxhBFeSJ2ZUUtHPthcQ1XDRt1m2JokPcap3KD2QiBgr7QGbHTrG",
  "key5": "4iFvXTr8UEHd3NJuEEFh96Lnr68dCo4r2LuDc3gRWUGisepGQLnorkdFFZJtZVatdtDWrczPsnWxmQze6fP4YdeF",
  "key6": "3nGULdWUJ22z5uuQnTv9tBh5BpKySDfbnDsEyixUedtSp1cdMmwvtXHsvDaxNHYzAoK2obkJYtTAVfmAXJPgzJ5W",
  "key7": "z1ses87NmAx7o7ytPRwDULZkJEwzwiFJvFGKdv1BWnwYMxbFxM4uiqJHwsyHtMWveSd4yt1w8byoyUYmZ2SvG44",
  "key8": "6msBxa7A6RvwbHS3THgFmubt4pvd6MbnbmsYqKJ5Zk1xY2vidDiS9HGXqfQFHs4XXHUYhzhfUKPoLVPYnoVqkUz",
  "key9": "4NLsAshcntCyL4ZiDviVCE58jEeKMtze61Lutgyeo33VGGWuZxYDnB52ryftoZpcibTx3LqC1mjRsEMfGHwFwcZQ",
  "key10": "3Q6bCacPztBEKMWhuQDbxGb3EAwnhkZQNUnJ1U13go8tx1ut1voj82pye4uJQHA6uGjkafYQyc3gznUmzymcKdZs",
  "key11": "56U65oeu8jD9AHHeWEwsSmitng2cxL8y58b9GWsK93xj6Yfk5jd7cgTRRFQU3ddw3vFShVJ1EQAKbXNjnodQUy2q",
  "key12": "48xin63caksgJNZaFpwmUTsttAZig7p1oR97wb2FtuGNSmgP4ZHE4DUpS96ukSvYg6k1ozStjXHYX6Vckuti2ybu",
  "key13": "2q2c4bGLdwKPUUGABayE6hBz149WjUaX9uKPQ5URgRVXPdVqtZ6mcJwtWBfRTWyTdPNQvpni2JrLtKedK1K3t9HT",
  "key14": "5ym6bxkC4yAPFMkXrEzXko1PeVbNgFKRPrGBuWA4HsSsK9awh8ByysVJPYb5Hp7pAFoNCJua27D3sYkM7MVKC9sE",
  "key15": "5fESTG7eJWN5RPfmxawxerWtWRdFWAYf7nNLLA6c4ZPs7AXAH3EebJxn1EKvrYQoGwdYgbtj2njMwvE2xSGnSPwx",
  "key16": "3hHWzHsWsCQvNg3ygkeonkgcGqWfaw2RH1qWGaFrvWUhNs9VHaVtRcYoRhmuxZkqPQ6LaAm3gw2qYTZ2jnPJxjCo",
  "key17": "67WMzkuQ4wH4YW56nQw2FXmvJ8fodU46sZMBD9kJQfXrsi4weaNtNQX14xqeCZAfDe1mkJFa29dyzz8ThAgtypAr",
  "key18": "5epqcF9A5SKxHbqGpqrKVJwX8L33PQpDc1nfY7wAPuwfxFw9GkNHRpQp45vKwB9mQPT676n67q1qp7ZfhsyYGrwN",
  "key19": "3jpr47jbofANEuX7LzVCsacDF5TF1kqbBZn2RVNk3QzwtLYg8XJXyT5NrPmogAuKVu5fzkVz5NK3YqED6TRoFE5U",
  "key20": "5mJc9AFvQAoCqDw2GMtw8JtqDMj7E88YmffhQpsHUkZafo4D8PdWrsDtSEY6GCyPRdyFEWWA9YNdVSKMKrnsRMAg",
  "key21": "2a9xxtVGJeXFXTYSaWFuBYUiEzYqSUpseS4wa1mNss7cVTTWkuRywA4yfF2zB3osvF6LAS5am1zqLLWVqHpZ4UXe",
  "key22": "uwCcRZyMHjP5YNM3A3AFWX2jGM39xpAmGjHCP7euf1oqMH2PrQTJzRPYiY4sy9uB2SipbB8YBkExgqf3LVwPpe5",
  "key23": "5ezKJiRbXaU6hiCBc52PXeyipnm2UZqCvKubKFfZc4uY9ppZQDGXnZNdBE2EepEYazyTAn6294mm6CWsKNL4s52s",
  "key24": "3wrUf4XZKkTgKagLA9Txar1BGzdg9KENjcPrYUQLvBMwdnTUREcE1c5f4pceoz7kkATCb9N2JGVxdmQkMuPJfhSJ",
  "key25": "4QK3m1egQL9HDq86K3XSyzu2ZZryqj4iBCaa1buFyuqmz2wHrqa9LXMKwzj2BkbCPveLRogrWqVoLG3YnScRHr9G",
  "key26": "maSBAJYZBY7d68rhVE2ssLkKzw15MCJKKvVNvqj2mwuQP3y13ujXAEPdxqPksEEPxozvJZEsPSSo3g22StX1zBf",
  "key27": "3QSMZjJ3HaSjd2Jxqji4nqPuG7FfvdT6W1FuQbAMRbjvAGmx1qMrPKjY9hxyfLjDcdqDJXhL5JS2QumEEcmEVEH4",
  "key28": "gDN3jNvD7Zw2bBuUGR1wpqzW854aNwuuBvoCJ3CSAxse9KcLMT5hx4WJYSy63tqL2XJgeHMYwA3bSjT67U2N47x",
  "key29": "4sVu8XogzL1ddjAnSGR8R5Najih7pxuaFz1fBiuJ3m7Ao6SvP2nmTBGDrPHaM9HuJXGMPtDw7KSdvc8yk78t6gzu",
  "key30": "PEf3CqGfisSA22hReidEHvjreH9NDw96AR1ACXwiE8Cre4Aceeuc54DJK23RvCDv7v7LNzbToXdyjqGDrp5vn75",
  "key31": "g8dWLGnV4tLYri5Mac1VSdMLH6Uxuda8FjQojP9DxUfHkz1Y6MnGoAcjm2F33Rp26Kr3d4PDrQLKdL27eQRoQkV",
  "key32": "5ABZkrhZLvVj44tcEasm6PYHtfWt5WWJMT6qtVcJxfqtxEWfTRaoNTYbz98vDj3tEupe9htKnrZUvJ788YYVVZej",
  "key33": "T4v7sJqtNeNwUqGKX26TosRWNkpTGDqKo3brTxzveErWLRseY3fboMjcRaVcp3eBX5BqNq2iSyQPPKF7TfyeUXe",
  "key34": "1swFd1ia9bNJvRwf8iXCXVbq33e438gKPnaMdGyXhwReT9XrevBm2vVaUrXtqjH3mF7m9kmUBq14uKd7GhcYSFB",
  "key35": "5idvQA3zhY8VY8CfH8JoLGa4k7EPsRYiQgR2jyegM34S9oJGXP5MfTuURxy9NdbV1LeEfU9NG8CbX928JSMHKQ8M",
  "key36": "aGGb7sgvhytGUgdCCAov7w1CZ2qFNLZyvMbB4c9RMmmcqzgEopgxz6S8eiYwAwkRbp3fQXC2a19nmW6eQMqoaiF",
  "key37": "sibv2Xn9k9fpGvQMWh83J27EJMxnRxRkfoSUt71wkjKkrz1Vzd4JfrsfM1N64popaEgC1XAzRd8kmNyaA1nNkRv",
  "key38": "2AGUXR9UjLdEpaai6Bb2zrS3E3SH5wscKvjT9hXcNDnS6S5wAeexQ13RuaVehXMGSwpK96TpuEwH4DPGVMQXtLA3",
  "key39": "BXdtXoxcKT8vmterQkKVo9hYq3rhMcZ3uKNPcJush42HMSkgUN7F4H4S1rq2WwZgjbirVxZ1ytZfdigN8xcjGjv",
  "key40": "5bzeMW6KkUhEkXg7f1ZF3z9QTJ79J8QufhkuA3puq3dxJj3hyu5uSGjt3e6SXavJpfviosCtJio5PH34magr5ftg",
  "key41": "4hQV8NWfaX9rz79X7xAVJ1hqd1tWp3z5dpvJ3gbSh4oK1fQsrkHNQnBDJaGMppYdX26GiDMaWQHZ4qdha669m9Za",
  "key42": "de4rQcAyCQP2m6mHvNyXVPh8VXFVztAVBjGHezjBbkaHxj9TmhnQHGbpLQn2oQs1XkQuFM4UTqZiAnVCGEMJJ4T",
  "key43": "5fa79tkxWsgqwa4a1prtpFhdbuoT1f5rqxf3XShYnFj7bexvz4srxg2xuw7BaH1ZMxDUFT57G2yH9LqMdfdqyX4j",
  "key44": "2Wipi8T7GwFhV9zXdtCRKcHs4qUJVcvbWV6ZSWK6DZWZGF3MV8ncfcDFqT1eMmomnAmjqG2vUj3QEZC3GHFY9iWo",
  "key45": "4nCR8HXa5SSG5k8j6qSyirB3Zob9KUSuvKnBDtsHmpiSGm8RYHuJLfmxUqC5yizH6Nc8bk25dzXkG9nwpHngUxMQ",
  "key46": "2FDKsnk5rXprmfysEcmJs6LdTahzZuc9mS2dFiRwaKJsAS1ryKGo5Ri9FpNCbxCWaPqbQg9FvhdbcefFVBEfQEfw",
  "key47": "4B6wcyHyTicsdh68ZHyyF8AJm1bty5eQCY6pcPrra1FpfPU2CinmcuVFzqWoGSXzMjpzFWfie6ryx3Qaxt5B3xaM",
  "key48": "y4favhj3ckhLCbX9vVoSt3yUweG32oEa6BKvty91QNKHtX5oNvoqXJcRqouoDoFG895TFRAgqWMgHGCAUTKJ7LT",
  "key49": "3RVnSNjgjArBAVeCoo2rvqk5sqEzMcX9rAigfMiiEket2Txd4srsNR392k1u8HMkYsiuumo19VRDbQnnG3GmARv9"
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
