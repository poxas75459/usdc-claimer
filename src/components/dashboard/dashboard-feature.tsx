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
    "2h4p7poXdU2WTY4w7SQ2VDpsMTRcyWh2xRZ3pWsyUe82NKE14cjgshtuo6zitreSTR3eSP2pUk2CsZarCDRMnaKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kva1ZoA4rTjS4VuHiynERSQXtaytRBpk9xn2byp2tEoTTw1aThBkWuaZA4ZNnfx1ANCaD7fLer2H5fpDVYuXSN8",
  "key1": "3XVjaMs93osHNeCDNoKs1L2dXXoMCYG3nw9xPxEntFGKwk7vcZeQVuSzGmBXFYKKH37exxVNEVA2BRLDJbDbnMXd",
  "key2": "5mpdnzXtqb1CAUa9qwCHfU2M2AUAcCEbWS93k2Jx3VtZfBwessYoA71rnhtn2iVcec6uheyCKCPEyUndmBZJpR6J",
  "key3": "5HMyGq1XXAe1LNHdeC9Yi7tHjqBbQybyx24D1bozow5sToN5Gh3AKPPYkdTXrjxu1jQmKtXqtgfPYGE1P8kNR4JR",
  "key4": "o8v1vF3XHaK64SnhLKe6sab1fT5LFESNEaBzh533VMaTQV3tC6coiv2swXjp86x1FfkogvnkNZCd5wgHBGk7eYm",
  "key5": "48r2MNY7Tjetn9qd2cicJTSgcvstDp7ipPfHFCEChKuXjLdbb6y7roa3Zrc7WYsRdxGrjhEUu6tSCwuKKvS6Hysa",
  "key6": "6hJT2EPee3ATbTzB5AuNN2vwGJ9f9oGjxdFK8zwHPH4zx2NUNoLsZCUhJke1ScXsA2HTWsC8wLWK83GiRmgDSRz",
  "key7": "658CYa8Lb2PZcPLPphMiuxQauTGuqH8PzW4KkWyduKdiAukz83oFaDt7iKhcKS7zS5uPgN1DWT1XDwtrfkNrMMst",
  "key8": "Uwe8bBiL2SSTfLNDG4HqeEeiZncrjGEkP8q42qdg7Vyay6TF2ayaPszvmrHafYRdZ6bFLKLXDb4jk1YLAVSjwYk",
  "key9": "3j5jTmXqqzNMesX9q2hmd55LFk8tokzbHrvSx3vy4Xc7rwfxPetR8kRXgH5Ls4Cpx8cDeB26eEaKP1oi42LeiCTd",
  "key10": "2vUY5hncD8TXFBbEuLtkgYwbdCQgf2BfQQ5gNzVJYJz4bhwgiotDALmaLMov6DrVpQT1eqSYEXfMkMkMtaXTFfu8",
  "key11": "65hMoQiDDoSqBn4xa6XWEWJEye3ddQz3AWPqjcEDaYkJdZRoj6Q7R2ww7e9rDxPVNnwjjFoNw6cKVgzpySUtm8Eb",
  "key12": "3yNg2nAAL2QxRZdoVkL3GBCFsZBPLprEBGXd615ieW1cy1mjtHirJsgu1qSYXK5y1eb5mCArJoWuiGeQvapfCt6g",
  "key13": "3jTgTRsXbkqBjpKW2aGHGTyCft8u38vpnHWKQ7FPTbbXzM11vxacbjV7zk4ZTsPq94K6dGB6YsnAHqLWBzsAimPe",
  "key14": "2JZFvjYeHF4vp4TTMLBWUnUFZ1f1ok92YMeJts8HZhxWZPgmRX4vTPuM4TpAGtpabeygrAoawPWH7TgpFcySd6YG",
  "key15": "5rG9WFazTd8MLMAB2vNSck4RXY9c2hdNnwMgMeF46UEaL4qYQQHD8EB28nfkKrghaJN8JLGoXGKZhjHVAfy73bnx",
  "key16": "mY6bb6pnD9b7wy8S6mqJW5pK6kZix8nWjGivdSomqu1fiK1JNjNgm3rhMPywzipgn1i3mYK4YhL1CGPQPZqkqWp",
  "key17": "5mfs6p5s6XT7of3F3xZRo4X9SbcfDy4SeCahGRErR4rgMqPTU4x63ZVLX9MnJZD62PL3YHiqFrLCwKTTKWdVxUMt",
  "key18": "4EQKJvBTCtaw7V3wfs1vWK6n21GcFka4rE9CAG1FhV1WDq4FXddPyvkdEDz3aqhBQsfodbtxtFVXM8TDJW5J2fj3",
  "key19": "4XjgxkUzopGZyiYpiQ5dy8gJMGBGYLPsWHzyNf54exDsxZ6Scv6osK4JYA4j3x9GrPhNqR5x4goF7NkCEDE4vxDw",
  "key20": "3xxmeWqFJU8aFXPjdknh2tQxGefsGKZtP8jgrWDKyuXAT6sU4V8YmoN11Es865kCeBYf8jq7vPkizsoMmsQNcSZM",
  "key21": "217NEn4G6t9SkxPqNz7kr298CcYURe7Rk7hX3F9HFgFDTNyDebbgGryhSzxEa1NxuJkmKMfsjLh82RnBqANwHdM5",
  "key22": "4HBCb1Dhbk61z7TkYwtoqVTJvBvURLDPgPfZTaqxvCL5MzE1CSEhFbZGmQi4aJVdQozBuRJxeunRLszZxYqeH3MS",
  "key23": "4es43kBgBUgp6vb1PK3Kkt2G6EX3GFksSynYkfeCyDgCKWdgnop7rjyMw869mHNTGAgY54ff2rZ5ZJUnKWEKZHoo",
  "key24": "3r9iJoGDZPhDVNPmdBXtwggyG8a4iAZcDy5699RCAV2kFUty3XLqtt5pKYDpcMgxajZxtyZBSwUtyuig7vqJo896",
  "key25": "4tmHGb1SFTgGLLRhYNVRuf5Nz8CiBuq61TZoGNiAU2KryQoCTLQ2bGdGgaehSy2fokzY1EWCAX3bdirfdZU7iiDw",
  "key26": "5v3R1sLYVdpMXH9x6VkTCWZam7KfuF25dFfxScWE1y8quC6u7DSMpHmsirsqnuJxx9WQrtccdWCFccekonyBrNyQ",
  "key27": "5urAG6LebvJyKfqZRqZmnhaeLVpK6pcCjDhXFTticLxfzKVVnneZAGBd49Rec1s6RHoCrnD9WZBVm5FRcHLMJ9XP",
  "key28": "48jN5GjKuEdUPJQkPxA6sEVSuMWJn5aAkdrMc9rsD7aDKETazBiBKUdeMX4TKxco8CpMb7Ay2eifZNQTduQrBV1b",
  "key29": "4vtFKM6UQZB7B2zpCJNM6dMwEhKiCP9ZDtcuV2JKRD2ZJvZUSJw3YFBhQd913Q6RGE9FGgE7HeU12ELed6wcV5rJ",
  "key30": "4TMSauSDHW8qUwdFb2X4j4KRzuSpShafVPAbpyLmKQFefP1k8Y9qf2fVGnAYfxaxjTAGXjaMcDP62GLKJQiwKXPH",
  "key31": "vALGM6CGgRUVYpGWX1vVHJNsnAJwiLax73J8MPJ4sc9xoznN3A34BTLDvoSyD8vmqtqMNum5NXLNoxdyUC82Hfu",
  "key32": "3ogKtJyqNQhEFaipFjU43HANtres3HTDWEkyaMpj6njXxtd1PDLJH79UHx2kgAUNL3igdFpkhCE3i91PCCkayxFv",
  "key33": "yQsEvknLxwomtMoBdky8XgpcwWf14fthaUE9h21ryQTFN3mavocfjQd4uKvK1G95ePB1977U9RWtWUN2uDAoAwJ",
  "key34": "31ubPqTfXiiha7k4fRUGKPxsa5CY593xin5bh9zDdGPe29B1Se7H3XrVpVTTiKfrTnnaGNpPHyxmW4vHwGrqdyaB",
  "key35": "4MDNPFouV6cG4P9Xa55Wuw9cPR9PkaAYY21gtNBtUs783ZM8wwZHvVSnfvGMYt9pB3P6cQZcHFBuoQD5kwJyWi8Q",
  "key36": "575spEpGhhVs2tGqpvkTZvThUVJMPgouATwYDeRGkGQNYACaVVwRsXhFQTLUfoQt93uW6LBajetEvTGMdtmrrN33",
  "key37": "onXP4ARXSfoa1GbtVAecw5JnCkyGrVgzxEoX5jHvdbMEY9VJZXhWkK36FnhmjsQh1dHFbHjEop5LSfn4RGLXcpe",
  "key38": "3H15LGCzkbqFJu1QWdNWpL11kMG7UWPdmnrYX2u2LK1kfXy7nfUQMkU4qJq9nDt7y9nsQgeJciB6QBVTBaVAtMZL",
  "key39": "WRcRx6mG8Di24ZiPod2suxXQjbyt2NT2px9vmYvMWdhhCa1DiNmsLrt3K7VXTanKGfjv4eCuT4dKEXV2HtkuFMU",
  "key40": "3Zdh2fPRHR7eshFH4f53iytrRp7eXztsmEk3H755uvYDEx6XseaijpbCEn486oMTbXGkhJF7pJXzhqYe1Ddu4FX4",
  "key41": "9Ay2zSFLswByb8u912SDoNTtBTAtw8brNLZY4CxkmmKfeRj2wMkeFHM1SfCarPNHrdCphGqUfkPipi1d26LFV66",
  "key42": "38gy8ZGUoi535HqWgEm1NezruCbxdAQPUQaynoCDgveCi6jjkxgYM51SK4gdV9D9u8iZaSgnQ1GuhQsBGpZH5N5U",
  "key43": "tG9EtC18keVwGanEC3z5LTBYkL2jeNYYDGXak3EwLWQYeNyvfFAQLqCiwPd3j29jsSU3G38U5ivBe3R5geqJv18",
  "key44": "5g73i52K36UtJtJvNohWJcU2irU5rpHyMaAFxnaz2hsEm2HJfZdXR4vQgukYgtDuVWF5AQyhi9GnCXZyWvzcDAWU",
  "key45": "3xZ8am323gATnQdjCYm5gBjw9YZZenza3fvDtXViB5ZLaKV7nPmtMqboLtjdsucshRH24M5n9ZtmzD89MVqLFvyZ",
  "key46": "3CU3x8vTwsxx3oiJPw3qEkWxouYGVPYke3W5nyxfoEsPPCxnt2ywqXFgttCavBgzV9ttNdWDmMyqmzZAM71mp7xq",
  "key47": "MhySHaAt6JFYMM3n4PK676SwrnzMXpZzqJFtxyGCChYfDscSGXxYzTEYvWiDjhq7AUpCpGtAzTvvRdUvKttm8GN",
  "key48": "cffotmatdYBgmcBK7sYmofc2yhAG3hL7KH8tRZsqbQEeH4YhDexMMSgMy38xQ4iHf29tgzwxxZyuZVKJVURaqMf"
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
