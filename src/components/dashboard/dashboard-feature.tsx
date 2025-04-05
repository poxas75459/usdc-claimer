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
    "5oChVfgxHpNdTxyFRtR2soo7MMnDWhhhzFgDHj6Y4mUCouFKoMqUYazFjSPxmWVDi5ztCtz9qW6WZ8rEaKJHTZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QfCvkcbEtYLgMXMJ7V6sVsJeUXu7tC2Vyhz63VSiJm1bGUhg4VEyjGftX2jgSt3TXrwkQqby28bB9iqhGBE5jAh",
  "key1": "qPXtLJsKpP5jQ55Bd14H5QR3YdEVyoD4YRA15mR76kr271mf9XG6SM4VZV4234YgzLoNonDmXF4JcpWwiU4mHNY",
  "key2": "3C64sGTudfioLmY7ZZC2huhdm6wWSq49X8rwDiWWQ5C7W8v8eAbvmbPqWbpDVmPBfM1w4QXrNUX5DYUHWajuNohv",
  "key3": "468e89E1pbDdTARJQN88d8GNSoSREKzFQYGu1HoSJnVxebA5cHarajkFDkPAinhpPdoCb7QNDm8nmqy5LZWyv3nP",
  "key4": "XK4cutm6AwdCHTCtiL7kbYjci8RR7x1VKXmQX9jdAFJojHkAbUXtvWBgexCp92465Ge9frm7eXV23RD9qAKADTG",
  "key5": "2kZUEejeqnq6RhAPj3E3vmUjuUA2hFLUcfUoaP9HWo649rsYS5MxbwxL6dquvhPkHyU4TpppkxPPiW3jFGU4rVoN",
  "key6": "2uhYZPKjHv3S455v5uHANJoMRcqhoRPX5tsAu3MJnajzfHpPGN3ewBfiM1xvYzKuTJBNLEZoNGvG61NVx9GKgBun",
  "key7": "2mxHMwUZdZPmXpzrcAVdtXtcK9hi4UhSLvDFCEBfS5VrH75esgQ8cek6JY3oPyeUZXeYWQWeWKL9yuehcCqN7hng",
  "key8": "5yeX2eoGFfTGH5V3iaFivZaNu8NMN8VGj7dkHgzMEhVFwbfGe45AJgrzEvQzp5fYjXWax9FzuVoaG5RYXdfQK4Ki",
  "key9": "2ukQ7NK6SsofCdBxaCjvjh1QER2LrqqbMpsrJZiciUNPnMFhYqUKUzULqJDhAMx4LoRbqCA7r6S167EGWHNDat1f",
  "key10": "4rUaY9dAS6FoFCAscgqwW86UuWDrYxiYC45v3vUiqXgMbCCQVPyKChnjzDm6PRfHrqLiz5q844BrYcNgRJXbNMNF",
  "key11": "2Y65dhf861LYfGrTD2Cgp5nxfLiyYgDsQ1ZCvXZSho6Xq7rf4PzDcSa73BGcCRcXsw5tYWakAsKXfRGhBgPEZ6vB",
  "key12": "KdpBxCbgrjvNZfUuKumYuenTku8xL5kfpDEB9Fj8oJawPoETGBLpBgUMsNPNH6xr8za1nL7wUgFhN1Keuw2DXqe",
  "key13": "4bpH9pwuY4MFrv35RgS6HJzmdSeWDHhdMe2q9XkoFTs3YqeimxEboSsr9nBevMrPgNgh9SqjjBypv9jgcqqFf5cY",
  "key14": "47xNvvX6Q8kKV2PK7QrV2sPRQitPTqngKxxSmwoYGDxg9QSBy8oyDneu3tSnpYciV8GzD5PPZRKmfsip4JC3m7zy",
  "key15": "5mCJPrdH9oNRkQcsPf8U6489ihdgnhiZ9veRP3i8VscCWXF6tDzzy1yccdtxmpjAMPSB22HuW6sv7SbR6wpQN27u",
  "key16": "5bHcgHuhRJXeHpKY9zNGrUK6kHEiF31No7iA9hby7dVH3Rg533xosXqRFuzrqWoA8Qg1AFqaXcriJiA4rP5kxVY2",
  "key17": "3dH6kph5B4zMGxvPaSu6mX2BJagHePsH9F8W8hjNgCPhwdny4vH645P3zFH3v2PU4cHrevMgs6BY8ZknUPfhHw72",
  "key18": "3ozwswntE2QnaFmn5mUjS3fFR2JHcpB8PzuYPYqgaf6EnhsbMWMQ5oW3FWS5Vz7jv7odYV3PUXsWWvZVaAQvGctH",
  "key19": "315YNVziBLUTMba5B5KqqL6akDZLLpYVjVAXY7vKpMhXXzaBWEXkeRCbb1CYQve4PWVaaqzqb4f6BHtdmedvt5v6",
  "key20": "3PGTixQgJZeFwZZPSLmQeihJFuXxwUCLXsvY2ELCjdQHbkehkVvo2gvbTSsR55qruTJskiK3Y86AknFtEGwGe7Zs",
  "key21": "4eou1CMUv5JRReDgkTAtoWVBQtVNxT2U47z41PYSBgMQhQjHePiMgAY5ora61hwyxMUEHeyDYCNPxBGYam3hX2yX",
  "key22": "5tYGPCxjDjzZ3WMcd7VfaBoTeVXNqA5uBr2U4AiE5e9NtfKRtRyqYk5D3jS6D5nVw9EE69qU1JRviy3c2cnC2SLq",
  "key23": "3ZN9srZ5kDj6Z2iowPc88uEVT6EmT6rYMojL7GYuECtiZu83mTkFPz4Hgb4Wo4rRtWHWRz6rxv7JJKdAmWbZzEFW",
  "key24": "4cajYb4VXPV3i4KYyowfjz9Jx892tmJiQe7gd5YfNqjunAni5Vdnnp7RTHWnv9Gj4GjVeJAb2owP7tQbcFTVbY8F",
  "key25": "5ByvuVqxtDo2cXNLHh6PiD7pg89e476jciAiYeAzHdJYKVjWkd1jDAX9FZAGrE4xEiexKnJDEAHVC7jfr4EuXDKC",
  "key26": "3YA4hApRPA3dHFDhF4MqrHbCj1JUQUhsaw14QKd7VGV2ErmM8v9CarJ7jLs1bcJgvfiaivot1tAwHVU1qDi2qUxJ",
  "key27": "4PskJYkmri4yKLS55fsDFfv1nDK65bCFzg4dUm8yheaQdE4kgQGABP27mTv4xMERmJ2cQSseiUZrxYudv6vM8d1A",
  "key28": "544Z76MEenwxW4mwyMk1K8BzpUARo5EEpjf7QCFKDmqcYVrJJC8ZdTjDhLbbCKjkaC2SNWN7uXSdgqEzC6iinMmm",
  "key29": "3Zt9krDe4qkPZZZRtnNjNEF5jKGQwTjJyfiJtQVQEqqTpeXCJo8PH9oKVVtHLF3NGrDipzSTn7e357LK9Q4QRdWD",
  "key30": "4hPdfzuaaKRZb28GVWQis4eBF1UbkTvdmYw3TTQSTQJUUZ91daRDmUEYeXSemrf48moC7WDwPRYKqGp8WunVGRe2",
  "key31": "2L7vinnixf6yKfa6E7ok3h1SByYR9T4YEoD1NAwteZnTeVzv4yXdaKFemdTM5kTcnp8NsFfJhF35RK8t8hEYUJUi",
  "key32": "2miaPVqFz5bEuXL693Peph2XsZXqjATzWiJYvuHzELYTbDcCoYfCdQwx7Aq3gGLKQe9Zo2Kv1ERdMZZwRpUtBupC",
  "key33": "3tHeJRUT1KBCJRauSGQVmmrKt4DvAvnC36s8mg83ztBK4dELofZ45DVq7ikSratCGpzhUq3xW9ZqtxgAn3rvL4uY",
  "key34": "37iNsMBZN54rkXwTUZo3PtoaQDdPXeGY9fWbjz8NnEhj2Byt8QxocVneaLwGsZGPRA34JcA8qg32V57Tr1yR1ioB",
  "key35": "5qpEaByNjtkrKJ4zz4GLuEoQaom1c2W4kVtTfXeu4bTE7HGqSobccf2F9m5zi8bopzNTDtfWh1Ae4GSDiF5FtiJ2",
  "key36": "3oo7tJpwHmk9BiZQbHww2rpTEqmPDUJ9ZqeWiWHkqSa5b8y8BSDNjvvFyujJk7sXViKPbCVv3qmuYDC8Mv66AzBj",
  "key37": "6PB7iswCY27MvShgPHLNxprM2YDBpSbpgKm7ARRjuJ1sH9vcrBmLiJe2YMhdHFufSCbPxmbhjP8VPMfK6Z2Dodt",
  "key38": "63TZr4Krpk34Nne5FV1BDvxUtdQwcVtxs6yhj6hdWSsGCQYN1WyYeMnyVSuWVT3hmiYe4owWyHgsa8TF2hLxazrk",
  "key39": "2S945WaEGsQ8NgLyP3JP1hJAUnpLR4s4y9gMCKNLw1sGqhDVcnEEjUYatHfiAZBCA7RYaEhJdgX1NkYHTz8A2Y1w",
  "key40": "4LmtqCit74PSMRbjsmbtzcHPvrkJta9LYgh62ybwEXooJiN7oMnRxJSicJM4tmuD7mp1sqXP2rB8KLSUSJsCeCos",
  "key41": "33M6EiMNoxpB2s9oSA9L6HKchwiTHGkFXrsqVF3zhwXyTgRKrvMoEXe1eCeboShKybR3QRzDAtjixAnj8sFyYRoQ",
  "key42": "DVPXnWovm3bDYrsqiBayBzEhSPuDDwvcuQKEmLbjHzYpXAXKsbebSJ42Q5uddcwUhkFiyEFrP8SW17NAosHSpwP",
  "key43": "5bPMFcZPVrba7CGUh6yaGwP1syw5aF3UZZJLjefwDQrBjdXELptHY5Ucojj7fUgWpiDaoZW4iuoiq7bN5Ff9qAun",
  "key44": "4TCDcwmC7CU5Kic1htT3aR71NdVocoEvA76pnoAJRWPqY4XKr96DfwNuCk8BHUER2XhrrguZY98rzsBt5Wd86Bvw",
  "key45": "4Hk9oTF4rdvCBPjWVj47FU5D5hCZ6C62EE8se9MRyoW2kkNH4xq7JsUky148tM5WbrQBR58AH555hyfjUGrWbnN2",
  "key46": "2drSPEPy2wvGpeUEsNZc1SZJP62RJpjj7ferAL1xZ6zV17HXfsn691kxwZzdJWSYdjLoG8WoBCFAa7KeNXvHygTA",
  "key47": "1wAwMqKBag5DXucL3YvmT5jd6vHD4MV2wYz6aQT6XZ8JNmtFBYV6553iJjLhFFU2LR5ComoXanu8f5DVVJW7d6z",
  "key48": "3SNckiTQKrt6TkqbKWzgi4BYr765pSPE9uUShRREsqgoR3vN185gUFbY46Bsv2LnX7sWRi77tnMAM7J8hD6w8KcQ",
  "key49": "65Ch42jWLb4xwAAcTMM328mWbYsNLaYGiEfnjbRcX7216ZseJYbPsquT4cjFwF6o1UkBiCKsDf4LKKCXrUKZWR65"
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
