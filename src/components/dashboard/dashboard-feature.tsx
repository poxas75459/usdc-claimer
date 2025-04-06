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
    "2RHmjrchntUnAjTy2BYmYAph7eoGzvazE5NncYMPZM3oddB4EJV1u2u7oJjzD4dCGwQ1LZUcg6Bb5Lz9eBpR5PoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfJ6TvykLEmxsSrk2XEz2jv3EaMy8H5XKVX7JtdAq9s7Xmzohine4fbbS2VKGtL2CXE9m7B7oudAJAESaT5GKTd",
  "key1": "4T4YLzaAY5LKmpmv2eFwodWdGjoARjSX4Mkwigo2viJJxp6RP4z8ntBmFCP5464S2PNF5Qh6zLgU4cnZsxVLSACn",
  "key2": "5FbUDmkJHHxFMTFenLGgKny8MEMnwae6X6HzzdFN96Jwquqjn8wEdA2r8ZRU2sWzDKyP448ny1y5b2sfeKP19HVu",
  "key3": "3dX72VbYEyEQuBsV5hrdbQJBSJwfA7aoHuFoyAb3TKm9wGU7vx8rykrsRBkVP1s2UDyhH1RwfXS5wkxXzovuJZB",
  "key4": "5cB9ZDA5F8oR2NbGx5vVsqE1GrLuLNHbK3FJVTW2QU8yBZFJpnSBVVpGmBzcWaPEHPibUCY1141fYKPDFnZtRY45",
  "key5": "Ccv9nCze4XPskkQDNv6rw6x15HQ2aRXyjxSdR9Ek4q3qAS8T12sLPDvm9RKQQYNhhNdFiZUCKrhj8Mcvua6R49Y",
  "key6": "2f3CTwpuHNiVrCbE6sMFZWJSCocnBoVDwVzsjXvd3zw8XeaENBS6k54iiA77DuoFv2VWoosRQXcGsatDiug92afA",
  "key7": "5hKt5Axg3aieo7LyvpwfHg7agDu81cZUKpGJDT93XXVFMSuVtD87YMQvjUSRZfkMgTcQLdCBkN5yMjNXDkzgAU6d",
  "key8": "fxwWhLPyiW3wh4QLjYWiFCf8Tz9Equ83ZpPptzbr6Q9SMtWsXdvbPkZTC6e181qLN1G4XcWK2SsVR93uvhBsG9H",
  "key9": "2TxgQovFQZa4dMtthp8izSxUkLbwfNYbo7Sfa4ZZwaoQVppnYZMDFrCNmXXsoAW7ekPRu5z47K18vypYL9Fk669G",
  "key10": "5yJx6smgb2FGiSMNJr2yT5U3ELQqeDWe16dmTGUt7qaqkgd3rdKgZejVobR8uG6FpdpBpvU3oppCtEQbReFgGmFE",
  "key11": "229X3Ppc84rLU2joqhWqRLYwc62aSnqRUULb9MDRZ4ewWTw9BziMRqh7cMxX2YZLdd9MUD56EpG6mA6A7LyRuXNv",
  "key12": "5Rreu3AdttvSPHnzikaQtpkNhbzYu4oaQFa4XD3wZS1XD5NqhCuX2FGk9mCLxDKFQisPDrRpsqwexsvg6xsMgenC",
  "key13": "3cv7JTJVHbZmmwJt8pJrmduteRWs9ZofPAdPUHgM6tQVmTNRyNNfvViC2GuPmLFiUEiSmNCv7QXjHoQ2hrBTCs3A",
  "key14": "31SfAnnR5hbbmX59V8FFPVnx23tsrWcXs4mWFAc7zYstHEhanVg8VRxVuRH1sogY1Cgmnmzp3DDEgGyiqsF8qRF4",
  "key15": "2PHAfjrGmxvSZWE9XeSETVsADwQXHu95Cna4z5RvMSdeRT9HtCAbmmnUFVMZ36V3csynhDygR8htrUKREDbDLrK6",
  "key16": "2yNSuzgYAPrF3VJVHuV8Lb3mvvfHpQ94YdBwMZxaTt6Z9bA6PZDyJc4ZfpVk4suayxZJZ2QLBZGPg3Z4up9wQMdG",
  "key17": "3U5xgccFT31F9cRW4vKZ7pCz2r2o5EEi1QEQksTFe3qNmuwfHgvpicDqxJbUfboEr96CUoHGkLWfn6Npe7p9tzKa",
  "key18": "2z6iGdzEYut3TZpoKHRUCjhg9LZvPomtoc9A5dL3tp35etM44Qz7oSbyRDLvPX5Nw9MB1ryTKv2JshctBKYrdMM2",
  "key19": "DGJP3sLKCLYKYasiHHcKELz9NHidV5RgrX44JbfYXyB2j7D4SiDnK4aPMyJz1h8FamdLnd4t4vad1qHvFKqf7MA",
  "key20": "4qWZGfVAm5HY54o3qHCUtnd13R7PAV3qUqyt3rPDtPZnBcBX1UYTxsf53upcPLozFM1oWycWKjXUzUQqeH2NhcGi",
  "key21": "2Xh3pSPqagiKc5JostWWX9r7Fb6kBu1GfutfVVmZiMvQrqzdLEyqMeknr8Bup45GXcwDVmMfAVtDXrBx1cPQK8Yr",
  "key22": "i6f2zx8HiVmPmf4jDv53Qxw5UoierFfv3rTZ6vUxpXJzkHYUAprc2UjAgPGrqhmLdvZoD8ri3BEi1pB1VLUs4ZZ",
  "key23": "TwqpmraeN1HLusuEUoGBqTmfcWUGq2EHLhpYvPAYXEFn8RBrx8rkQh9p1yxjbpiD1rre77sixgZSUPHQJ2q28N5",
  "key24": "45THdzD3Lspn8gyFK6djd7YmFGcBmp32w1JWFqbtvSiBa6szQ8mmV2AjXSjr2dUZnCVyMffX6rZZ2yr7ndmwv7S6",
  "key25": "5XK6qJUNFWttZ8DY6YszJzhdzkqiLCKQAVpHBD4YApbBG4GyiCcvLW4umSc8Pvt1JwhvuxDnxgqJXNme1zxuZ5Ny",
  "key26": "oMvJMMDYDj4HE4ZNtEyz6tqtszzesG4jNvX1nvm1EVw6fV36rUix1TdXtr8VdVEvaYYa8DAo8x8kVzLSpwPchzD",
  "key27": "2Hj55sJ8WBB8PQwjmdPibZzS4HHXjLWWRB4idtCimNLZPkMBztcsnN5hynV3RiyU8xShQfUTZMCroKk4FauWntvW",
  "key28": "3ebniQeLLVotjykHnEhnQ3dpAbXuSryzJBQxk3QVsVhtSTXFvphUUi3CMkpjZzWRVkpBsX9GQCdtK2S1CDf7ymo4",
  "key29": "2xggYcaNYekwSV6tzzsbgrLYqeYmeFCqp6BbdHJPEcu7wZv7d6SDpEV5QWL49eXdCTuypbm8NBYiPoFpnHMwbiys",
  "key30": "2oHjGsD8363m4vHi8QfDF7CWEqDfLEPQFBvqdUfY7vqcw1HBERUkd2pQH4ptP4AmCUHpyuzEEZebswa1HE5DEF1o",
  "key31": "rGvCPWiH1G6st4DCRZdmTCWDmT1Z6Qnav73U8fjBbxd8V1U1Xi3SMm2RfP9MWop6SaHDHEPBuGiK37gyr3G3v7U",
  "key32": "6CYYrkaZy2Uos76DhXBwcEnbATHsCmpGjgnhyAeZeiiisBS2xvV8QW8jCkEWZJhUCdrqiCMQgwxHHqx155j4Vcz",
  "key33": "5txEGASLyz1aeNwqKRK8wkzq9hRQLBC12YxKgs7rzuwfbTEgvrAsXxtSYSMjynjr6qvxTFSM8v4khA2ovLBb8CBT",
  "key34": "315kR5mFVAVfPqTGYoHM6R6xGypvZgGMt2GahE7YYR7B3NmiwgdiBqd2ALNDF9UE6rSsFxoYLMmUgTfcSV36gX8q",
  "key35": "WP4wGpxH8SupNUZi9Q6fggbTBjvZYAr1h9Q93Vp7Urh6v6MUGudjJWGPnWAqaXxfQFbgchDCFkaxGnKKtjF4YrU",
  "key36": "eXvtYjGeroYz34iuAirngPWuXny2os1xtLuknhUabnnXV1JNs2E8SBa61qnUcqyp3uZkCodiRbNz1f2ufbpywyo",
  "key37": "4TD8uzXSFRTR3pHmPXSsqtefxsMzNdkRM3g6WQVAUHoiHKktxwzmFYLH3g7WrE63xn12r6NfHcdpSvA3MCPW51Dt",
  "key38": "32TENhWvBzBA4dbciwwopmeyw8AumjnTFe5Hb8S4TyYkadTJhurZRnPx8dyx7ZQs7qkxKwaqfzw5cY65noofnPCh",
  "key39": "3WeGeZchXfr7hQgm3fmBWFQvVzeqhMSiZd1peMEDnN1ypCzpW2EgUGuv3zuZQqoyuYThE9X2PbDS2GWpjFggBY5E",
  "key40": "qDE328hkgatjdoE8pnG1hM1Bj2HekEW23zqjKpWzZg9qRPePvK5KME3JVJ1m55o2i2J4BV5kwjJpWNaH17pS9fz",
  "key41": "2bquvhNnPhi3Dg3EhZkweyQWU1v72mHJWadL1UZZK4a7ZK7pV88a6RbjtTwF8uXiBUEh94yB5EADgDyySuzXRqrB",
  "key42": "4CUMqgdeEZkXeVfPzERQQQCGJyFFdSmmFu38ZLsjHG4pTBAyrHEYU8ggke6P4ydtyGStiTwnsyjPyiN9p8fURDQa",
  "key43": "3F6i9kSaFnSMW5nFHDWwTMfuAkaZZZKHnkMhTDPEAUJjoHt4mX1WF9qC3M1chA2i5iMCtVCLLf1t7pxRMgaWoynE",
  "key44": "4RHAVg8xqfWeCTqeTTKzZXzpSzhqiCNWVotGxsZzbfusjRoHc92RMj2VpSRqYwhVhbWPN7AjDQyxCZCba3z56Tzz",
  "key45": "3UrewSiMdYSJN2EcdhuYBtt4HtfzwumAY2Nc7heywDA717sBgneW3zkUXUV8pELacaGbo2iHe3Z5xwez13ZUu5Db"
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
