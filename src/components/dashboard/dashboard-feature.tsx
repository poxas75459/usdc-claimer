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
    "5cVWkU5Ed1gQBTgHfe5Ea773Ekg8bzGybheqjU78Hvj38xMwd1Bkc7qBEn63C57EAnHZRSThWG51ATswcqvu2wLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58A25cSbR1nUHe6J5YLaTRNEuvpaA3uog5mLbNMwK5m99vb3SiySYTMGEhvsZbexPxGKdgVCbYwmystn1bV8rcUn",
  "key1": "5v7yrFDNkKeTbgydpKJ7PMgMYWMX839KE2NnAkXvMKJmakTdpN72HT4xgFUvxUPzzw13uCJNLMguAuvNZniFbW2R",
  "key2": "4gKmvSaZCXwLPSu1bGo5wo6hsdkhmGrjvXGxWEmw55CrXmhNaGjVzWSvZmJGjHGY2LaFJkSMCSKTmjDDSd1heGG6",
  "key3": "5WBnUsQN6A3iXqGFg1ihLFxM2x1GegpZNJf4cM1CkUsGzzcnUn8AetTaLshJHSDenfMy9cZhAMiM14s2yNZcbE6b",
  "key4": "5xppQEHZthUu1JauWmPrFZNyt1BFdTZJLPXvBUxohpT5c25XvFPijJoUVq7E93NJeQzVKKHLu7pPY8ZSoHeWViqA",
  "key5": "64KWhMzEEPXHkEpb5C1gGBtLrwm8FRLUw4X7CCe5S1BG5Dmpja88Tj9RZLrrBGq1XtPi6ApY9ESerfSp3AoAyhoZ",
  "key6": "2ARokPuBMXFuiwKcXM55Jfqr1e3APsbJTw65iUh6bfJnPTrzcozKBV6XwARK67wUDmqxBsuHYDarQRYKMm7SWHkT",
  "key7": "3eqAZ8dAFuqzJnnevT5BieBn2mnEsDy1X9VDxsnKrAbAnGt3tME4M45VKTPD5B4QwBHHUHwz2gqa8FEp9T2gyRV4",
  "key8": "2S7ap3R8C3V5YZdGUTEZ3fSGZX8piDY47BxNdnmZwV67zUd6EHn5qZm6o5WhVBwhRD352oUHYETiUN5E4NUJ8zts",
  "key9": "5eWpCiK5p13damdqZw1z88TLELn2tCjnWvS2cnAMnYujjksx8QP92VjN9mwoc9epBHfZHjYr8JNoPXSpi65B39Wd",
  "key10": "dbFeANB35qKGnqJ5yUEpWd9tbzvkPNpotmxpumMGFWoKvrL2sMmcTMY8nsgbs14MPKsajX1bigmMTuw6bQwUkK5",
  "key11": "3TLDRkauaMRBAWzt88UYhzHiYAY93eXE6DewDuk3xDYpHCEB1XT3jLwnZ4CE6Usi1WPP8w3iQjL2duTRVRBCuKrH",
  "key12": "5TH9J3Yq6GyBYrUwcGM4PafEdpB6KwdB47FpbGvapfj5R2xpJ5EJGaftcfovX6hw3JRWQiE3DHJX7j8Qb7xKM6DV",
  "key13": "3JE1ceNyWLEKeYDGXjCpX4k5otGE4JE9x7CU54w6imYJEtw7ghJagBzgvfA5U2gEowWYn482mUe9DDJFRHLNScc1",
  "key14": "4a2ZEk8AKTPgy7t4k89j5AtV5jv3og1EjJ2tPJ5UKAH6ibHct46UZAvBDbji6ekBJVvpDbDzWcY2XEmskFeQ85Dt",
  "key15": "3UwKtwpvmw6KG3CK8wao61myk3G4oMQSc3GLfcoe14dqaU8oANxoVVmXXvyukXUtYbi2qf4SLeoGxZf8hrDRMi9p",
  "key16": "5fdFx6pHNSS79FonFG8xUW4tyGDmEbmLVJQRsuH191rdKMzSiMCN94ZCbaY6RZfg3gHCvi3bD9CC65YLMcvyiZeE",
  "key17": "NQY8RSLu7dwrnhGCrkkGRGCnyLucPUAvWHfch1HnfmrCM9fi3qhiNcg7FZsdoqTKU2AZRsjv9J8NvBCBgk6ZQtM",
  "key18": "2JTKcKRFSJHdwd8TwULiZK7UpW25U8aTSxrktdb4oSnkeZuJrvT9tRFhS5qRFcCoZL3Wbryrge8ZHLaRM9LWfrsa",
  "key19": "4JjnYK7SubqkjjU2dxjFJKK3LrLaTLyd9RewSuF2t38QYSKASdngyUwJt7bGRe3mBqbu6upLZG3aQD7FexogRtGw",
  "key20": "63HLNwE8req3Pku2bNXoFtw8upCo8aw2Xhzz2yYnbxZTUToDxLEdCLmTv7NmQTqNh1Q9kJv6DbjDFyHZ5fw4JJCP",
  "key21": "Ht3tuDH64gUZubFsPAwMd48ETQv9ktg16NCJDtWc4PMfRtXCJhUS9jKeh2nZoxbk5yB2R2728n8y1Mat6M94Bn4",
  "key22": "5zcPJEVDeoiExGQvKdjzi3ydtL1XfyN5jLevYPjPERfm4GubWT1wpbQX4sThiKWXXeT8FBzE5LEGonjhLUTk1DWJ",
  "key23": "23cYnhuzuWNBoS1Hr2NkTBKj9a1m8Dpvbr9f9aqiguAte8Ez8zaWtXYrBpzTaoKFhwNw6rHuouMcfFwQYJZpupy8",
  "key24": "3ANu48gMGSKCyzF4mnrEJJdrjbm2D2NF7wRMXAzue5zoSpzANXAfHmnEXbLstAs3EiaVRy4mBw15QsLM1Fo1ghSm",
  "key25": "TeKZfJ5MxBx5feyyjxS8oF6Hempt3kV66ynQL4jxvaC3Q7VoexSh4wS3z54Eda3MHjbzrNT5VHckYLd5WtCKdVq",
  "key26": "5FwU5SZAWGNhof7584rm9VbECQPE28YaCPGgNRhtwagm8YQ2HkHZmycUEjRprnnsqywQKMJq7ec7N4x8pDaWrQEP",
  "key27": "22BG9F2ok48XWYs1DgnXd8e8HYuPm9erXQDSmBzzvwHKwteyqMR42t6Gq5jjP9Rnp9gVzmhJmeyYetDLLLY5vnTq",
  "key28": "4VXZY959pD1xqEcnCF7yKfnBLWsoEnhJHfvVEfDpEneVn2jvzpP4yWrZkmQg2x9N1sf87pPUPdDrGaQDrQ4kighm",
  "key29": "2pNhF9HE9SAHm67PPacLNS93d6ibDmg1WErfE9uXLJRdrfnqauXy9ASpNmFHeW1Lr51YYwtMVLoh9vFwALFqLivJ",
  "key30": "5qPZWCRFGngUxPK3beG3JXhLRt3q2L4uXFvuiZEqPUW58QASQFiRpoRMnhe6BsdJhKjXfb2CEBEjuPizbV7we9Ew",
  "key31": "42T1BoCK5NjediZGhTEaWj4zEomgDbRrbw9rmk3PKB9aH8CuovQuRjeAwCW2ymtRHEYbX5XSuiGsjm3BQhdZW2ak",
  "key32": "ZZ25RuQMWG1arSzTxh531tYsvokKAbPtqC2SUFcsexR2Z12cNMvdVrrCZeAQfenJD11kAsTLpSStQgofWWg2Dak"
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
