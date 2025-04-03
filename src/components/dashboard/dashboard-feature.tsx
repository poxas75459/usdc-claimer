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
    "4gLscPhfJmVDXeHUv9ZtuUcY9xw7CVJHY2Q1vBuUBa9jnpWEcN2JCpN21fdaCcGXHfEQy2A1uUidv83oJNcJ6HKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a9yrFeMehsY7KCW78YtTeD4NvaBbS2PFcM9MRA5vovNYyJSDT8acxRFQU3TPfemodwYZJjujQdRwwZS82nopLKo",
  "key1": "2KbWcSzm3UZfMV1Mx4ySBmphLWYUCru3dGCGe5uK8zEsHRqNSugcenB4pCakd6fEtp1fodfbjZhYZT6UWntxxAJ4",
  "key2": "2v2gFSxRsZahSN8XPP9ixfJv28ssMoQ4He3RehP2kBSc3sjCSmQ7tN7W4URZi29Q37i8jF352nNMtGcSfQd2X5eN",
  "key3": "CVAYveGLvf9jMLPhDME9a3x52hMfYdZwyA2aAbLvSzfme7ZxyoQwFsBo6r2ZCymDwrcqxnk8EDRUUUbMLLnftL8",
  "key4": "4j7jxqwFXz6n1Ryq5rEykkbPSD9cg75YFMVAu7wdwtSFKM4RaTULePkjsGnVtzm2GzyACpDWwfAv8aLJt6v1NL4C",
  "key5": "2rX6dYEehuzugoBhBWrtjSfWFmTisivwznYjftjGACkZssrhqdHh5V2cKbHeBFJKTE5Dfb6jsDwDPrjGyQoB1fnZ",
  "key6": "4Gc5cHLZgwoBrL4hVWg9uxikdN4Xr1gQuK6ni9pdmqZQzF9JDJfrmjMjzRCXUnTosJHrvsSLZCLaYr9ddUKsNWhn",
  "key7": "25Zt7LQBq8Bsshf1i7SDoYR2Kbb9xinhxt8Zy57jtCgabVBmWURtRvdnA9Kg7Gd8B3d8LNHnCQ1BoW9hLECbqTaJ",
  "key8": "2xyg4ei6DfJ7BtcrGAEoLXqnUSvgaZDbKVeQkGVjqFDGLmbniuRscj3K4Rc34XEts1WudQaRzxVuf7W3BAYXJjF",
  "key9": "4kaZhGKLCcQMdawgiqNaFmSrEzvUUbihpn38r5PYnGyfQMx34jgaxQwmo5CBgwrus4TzBQxqCApx8eAPomy8dwtv",
  "key10": "3q2AVjHyYLwXDhNQ6KNahfgP12fVPyiQizfbc7WZBPKEkz6SCaCBoVauuP4b8uCAh1fprkf5Y7VckbhqWpjrHSAo",
  "key11": "4Y6TnvyzgxAEpqRH1oPRCFcqdqRkXT5TgF5gqmTPfWyYhW96KNoEd8GWVSXfPeJaANN4aBJhzZ3KAhKi63fx98xx",
  "key12": "5csZ52Q362pXsk7HUwbVVkrwTwftsY7XuU4fjrAMNbjBWZhvnmdDjEU5jFAY7u5puX5dqbJvffefVMzXYimFEhFE",
  "key13": "4USqM2UykRK9CL61DwVNnhB38ecBh7AVEqfM1Aqw9BX1QwECJHSyCAmBgpKJPiHTjVzRsfYAKXQodwPAhLGKiDnA",
  "key14": "26qinupZcTBSDN8ahCoGoK8iF46bGR8oBTRQyh5Q4fNAygo4N3NP7AM6xVEg9kvH6G61HPeaGUt4P87FHKCF27zX",
  "key15": "4m6FiVuPzwFZD8ecRC9X6giv32E1ttiowiYy3o6C6AFjb4QpFCvcq8ek7zQDiRWa4cuUbVUfTBiEDB9LHgcX6i38",
  "key16": "5cbo3PRnEyGpoAJnpUrddsQt9Nw5MePVyNd7YtcPqQM8XuzhWehBeToFNQmiRm6ApKXCytfdLzaxAXqfCJ8L23BG",
  "key17": "3akDBgQGMpdnEWFvYUk27wpmbogFiRSJFymrQDujGbeoi9dbu9owBWdyNsm2K2gFyfURjyezbvcRQybXu37HXqCj",
  "key18": "JHaA4TdhQqD9nZkpjUX2z5ywwhqEJA6brHyabSJTfgUnFknR3cKgHU84nqb3sPX4PZ1CDswU5YjV5DrX1RfD9Ga",
  "key19": "3faJ32TLTpkzaL5t2RxGfkEovPtj5wuX3Ba7SNogAUxkxxao5V6W4MkVRRCgkcfqHxxY1eVcuR1bgvYKhXHktpHa",
  "key20": "MPBtda5Vued2W9yKKc2KoeDuokteFrHSYRT7pAcE3Ju7TgMxJJp1D4QVdWbtABsDfLgTVS1QtqmWtHoCjGjFVBo",
  "key21": "3irGTcbsoCgGrsf5KHoVxozS6GeKyraeBJvmEetroWW1tXbM2LU71a3GfKgh1FcHPHnpbUTvj7WRME2bzG96sGmu",
  "key22": "4sHcgokGqowc2X4Xa3Q2BJE4393GJTuFzZVp6TqpCj73qwa8CtfBn8UAVSpYSwi6353SsQ4VN9XgKZuLuNPN8VKf",
  "key23": "3MtbotKiqpML1UkUjszS5VQuDWP7obygiVH4pFPrjGpuFxq3u8qFMWLLQLYpZhCNDLHgfjz1Sm1CptAvTjoTXnQH",
  "key24": "26vnTwQMyWmZ1p3fMD83TJhwF3ryVTSL9ruFZX2fQJP5qjH7V7zvBoR5DgFahuoj5MV7ktjeC2u5DvtjrxT4Ytg5",
  "key25": "5b41X6aEWf1EFUzbEyqnJhS779EnhkDt7yyPA8U71VyumNujf7cBrzng2EQRBxN7jEDZRBPbiQbqJZCHbM93vdH5",
  "key26": "4kCXnfeJJEQ4WcQiG8vrJeRccAmQEwqqg5y8kPvL5GDmLJtrHxVhcGTFsPADuSWYu4GT2P2dVbKkg8oSkRXrqeMy",
  "key27": "4f3exn3XHzQ7Ugdr5gAFBMt3QAubF1z9KGqx9hYu2dxCwLahpjaepC7KatYQVjqbTkFSYdeCeL28AqZmRhQqyUdD",
  "key28": "4MHpNPoqyJS8ZrYi7Yex3WKKMLXGpU7nR1FA2XBCzx8SzWJL2BeCv2BFspdZnNbLBNDL3bdF5144RSVbDjKiAvse",
  "key29": "2PAi7Ag6bw8a6VL2DmsHfbPV9wccdAmMUNshr9fYMUtuYr6Aw3hqfZ3fGcEqkpQAZuTJpTJZZp9qoDffsP7exwVk",
  "key30": "5zf7VdiBkgVhxsqgGai9j8KNymPbFNwsLmeHiKiW9CTC4BfkXof8Kr6v2zcZPgw5yhdXP5ZHvGZng1P5q37kTdpG",
  "key31": "5vyAFWWqX5SgSzxY9PnQsLdJJHg7Xbz9Wu7G9b9iJEgNwaTTzJkjDVp4QRE86zDvUKPUtGd3rYWh96C9ERexQyXA",
  "key32": "5w1NBrAANLe1RFR37i1XKgeWmSpmdApyXoH5vDwjh4FiTTdKt56b31UcursmtSVjZeqMkhG1CYrZSgr7a7ZGYdky",
  "key33": "3wiPBzfgubLbWa5qF5XCz3qkueBWzjugf5AKhDNUfFuQU7U1VZ7GtFeComreaTfTM8Yy2Eh9zQpGdXGcozM8Et8c",
  "key34": "3x2D1TZfJj9vFwctCdDnisAt6BcogprF2z9RS8QSk1VaDxHsJDbFETE6LqEeDuczwp8QakodcogDzVjeGpFS3QWw",
  "key35": "5bibKGYjWmLbQ4PzLdMkbwrN3MaYoZZddNixQzcyStiR83bSExeVEXhuiCcnGuUnrfAgzSYVSZfjkGHxesRf3RjH",
  "key36": "5LXfMa8NcuuWT1NPXVLDmVdtjW9wT3ubbzcHZH7FGcxiU266FyW1vzihZyA1ajL8eXNDYakU3paExjfGSiiAncsF",
  "key37": "3hrpwLJ9hErkbGmopvfdFuHpCJzqgBs8QUe3hgCF8igqKTMaKwR8uViE6dfUF7srTLScfz9NkjZC51nWWT89xtJG",
  "key38": "3MPRwwz8b2zX8JLq79qyGU8jWPefgV5RPq8ok1GDoDfQXfCbRMkCXWiRhVmYU4uAsKJkYgJ8ju5AvkbqF19gnADZ",
  "key39": "2FXAAMY7MUSYeoaEY9nvvNVM53RguYhFDEBoNpTiriyLV1ZHB5TudNTddNWe1AQBQU9NJZ59NQafngQkf2yX47Mm",
  "key40": "5XETJo7U41i74VZCewgDPnvU6kNt7hd3DAXi5t67KrVfwnTgSrce7TM7kFWGpwhrLn5J8NaLXJrgE2HZ9CAZVEBo",
  "key41": "3H6ZNqRJeNfTq8b2QBApk9PsC7vx74AkrezeXD5x6YzVRYZNEx14a1SYfBoqPwW337dDyQaDGHSLpCBz2EMnzySa",
  "key42": "5WCwZh1gXzxKjcWB5ngcsH3FuMnSEgahebPuEZ1K4HbU1LC7UD6WpY9z3Qa4wTjKwJJarf2c4sZeerVov5EYCywR",
  "key43": "3QiKQHZrtYuZkzdgYmZcMp5ry7vHJ2mn1ZVrkfo9KEoVMQgunbvnpSXhgWKmkewudMRFYaug7FrvxK4KDNwnSELE",
  "key44": "2JaDmzgEH8rkcA28Pp4UyZWiHpVKHGRLhjdEFRwTMy1WuX5jvJwvFkkx4DE3XBzLwX2u7qFCdrtyfG1Jw3hLXiMZ",
  "key45": "swBXkNdfNjw9WWgR2zBffdL1F6q9ZgWBWLp8Dw33hNa4cpmfLk35YyqcJTYxamU7VG3PuS3cqzWcCekGSVxgDy7",
  "key46": "5odR2aHsr6CHSYj7zNRqpLbyJyuvmAAKJ4QzBSeWRXEdye4GhLygCHhUbhuZAH9CupKR6uYJngpZEBhBQeK5atus"
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
