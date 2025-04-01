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
    "433MorERxrovPbWb4RxNuRqSyZjsEa1wXUzFvKLY1TAsbdM82uy3PTYASxFzDoNer6RF4FhTD2yrN9vwLki5BybP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PsX8dh5KQFJQN48U46qntJewKspkqoyKSXa8XnRVHszjhTecE4zawKyXmFMMAsJuyU74nW5erVbnC1a1J1BDXET",
  "key1": "4XoJuuT8Uk2uAhinymSGWB5DXBZvHPvAxbGEmNGcVTFDrhtyaR6dNFGQnuhqU39Yfh3xtyYLkHPgWw1ZFDHjC1Qx",
  "key2": "3YwbeqmWFZk6GrHAZpCBmKNNqMkdVuYiPGs3Lbzi6rYTLXyHvRXgC29MeCXURGXQ8Ew6fNUkDpsp1Ye9rHX1huBA",
  "key3": "bDrhpbB5hNzAUSNmtAkQVqXUwzfFKzA1eQxs2JNvrYMFLYPxfvDx581emQgBbgLGq3NDvRA7Vt4LaqjEqUjRke5",
  "key4": "2jizNJugMRx5kK8MLYERxsdA5tN9sZxCePBJA9wnqNerCTBSpKAm1vH398aWNHL5F4HJRBV6j8qdS7uSLhTbmSYp",
  "key5": "5BAeqpURzoAXUqXNcfGKPYaJcyxb61bMybS41vz7NEX9ZwKfoiWNuXc1QuNQnPAfe2e444Yx8VcZwJ22KwmDPzAb",
  "key6": "CKhjVa1XQsvtZ9Q1HKvN4ESfnry8Tk9bsu9v8dgMMiFGiRdjwtcZzfoQfFwd5cbPVgLN9U96xhBqCXWxWPDguFb",
  "key7": "5kdBzxf7xF5WtxtptZEurXDFpnFXCTjQt7BvfpwYNnaUJY2YYw3kynmdLT8SkdGmA2VtTUGVzD7NrqSYkLuLMUJF",
  "key8": "4phR1s7dRLd8ut2H7wx4p3xhp9S4JUbg2nTrAVyjs4UgcgmS9WX2dswDmcJVXdaUdHqTH6Bqnmg8dybcD5mVyViu",
  "key9": "4FMmNDfa4mHJP2FyXfyLQ1tUjA5uFWcKkBLKMAt4QdUM2ZXnfcB2XerD67Ny3zyCEVmrVeVL3GYTsbWXER2uUUeA",
  "key10": "2Q6h6xhBsJLhy65pVjbkJ3wyj8FU7JEtC4UqP4pqkaGKL8duad4NQdL5oDyCFihxw2nnvvTLwedQWjKzzzU9ce4g",
  "key11": "36EmtPgM8nKLjsPBohSYgD9wa6oqmeapp3x5TtjadKVjTeBdwUQMY1HmmAcjGBjo5UKUP4iqvCQsERAdm23DmaqE",
  "key12": "5B6gmQNFxETMxjmxgPKE2xmtdcLhJsTA9eTxFTHP5qzdx9ZzxiReFoDEHcDmddCKUot4GHpLWdhfP68K4VDWVB8G",
  "key13": "2QFrhy8teBJAWoGRVWNc5AnLQbs61vbr8NAWtSD7c7YoaVUHXnQiXC51Eb7uA9MgKohyeq4wEMjef91jHZPEgVS",
  "key14": "26w2GXXRHQLDhDRjeHesPHZ4jkvwvhuEbFtFcTkikLuyesRMR1Jqks419jZUrMazafW2kQte1cXbWqNY4iEHyjfv",
  "key15": "3x42pAAZ3Hf5bM5i95F7zVWLrioqRaNWuLTbSyfayfswEMMB2r7stqv12R4JpUNXMpQcV4ECpwUcWuSVDRuXSe2J",
  "key16": "5r7ytt8PHRhYhMHrCVKsGdTDqVehmP8Xd9k4YFAzTtTAtAg8Ppzbsmy84K8rZSpsTXfW7fqVQGfF7yTmSKUezojo",
  "key17": "4cNG9mmhncB21FpX2ohcmhhyz7KLjXmq6gyhRQuxypPAi421rseSaAGGh8pXQkriygga3aP2NKSixDbz6xPygdpg",
  "key18": "5EyeJD7qU4ReZTz2H3ho3mLccZbp8ba5tYjNwaUbPwMDxroBsApww4UzrRhN5HBC4KVWzAPaZfiDq6JRLKfJYHeH",
  "key19": "BRhmAEU6vuuNrkACTG4FiQDAp7icugknHjkd9dBUR6pYNZVz2Vw2cSnuSa1uP5rJip8GJ7taGCWLpxHJxWr1w3L",
  "key20": "qe3zr6kHQ9DhXYLkzzaNgj9rogX7Se8dQcWxcMixP5xMgVYGMmwmDWc2dbSE5Q7GT3sXtMvN7NBJ6T2zKzgTiGF",
  "key21": "2Q2j1dDRkxWe8CXRFdF59WnGKhDsUcVJfsvGSvEudzL6RaJhR4Kogi8YVLBUYyyRMdGc1NhDNZXHpYT8BXSqMFs8",
  "key22": "4T3Cg6xNoKCiseAWHX8JuiXPBM1mJg3dZdCK8ebTn9ShBx9bPhw4DZziJRMvuvy2vzzqFX4P87WRZEAjyXzixFyk",
  "key23": "4vxUnyr8crJcnVQGs1iHq7QxC1r4hgzAgupsm7zSh7VfMNqAZtBi2KExsdviY6gy7EQUyx6fBdthCK4dnuQtF7hd",
  "key24": "2WosEfPUisnJiRcpQx7iCZBq8keZ28D7DKjBMXUb7pWyyKiSTodDTg1AAu4NDBjiWjS7xm6ecvbGL6XcBHFbaPme",
  "key25": "HKqZDoiwrHpDjF3sdD2Lk6e28BTVwfNLtEHhhBX3NXgK8xu7PZDRoX9Ah84dzHr4U4bELVnB4278WTcb9ziTNUR",
  "key26": "2zrJJUYTjd9ZHPnrmAcJoBbzFb32T5hpHuemoHeaqTYoHmGX4rZWe1N4VgrGD9RojEWaf5g54M5yfVQrq3d1Jg5w",
  "key27": "5mWoPDq3bpr5tUHo4Uk8G691HZGDNPvYn7yTALgdtR51TvddtCjMNeAiUHbpxJWQNhyxQuLKpkwfdbiQMsE7XyVF",
  "key28": "65fgtgU7NQ1FvFq9aPKziAUo9kp6tJRsf6VtxrKEd9kCJoj4QHriMpMU8YgzU9apeZ88CqERciUanajyaNgMnJmW",
  "key29": "5dkjbVBrk3AcZzZbEUwdQb6HauTzc5XndzU25pQDg2uSC3pKifUhKpb8ZCHQBa97zXdgwYJWnUWcXaDLCNuZseGz",
  "key30": "2rZF7h7htSiEPppXDZdvPCabG68KCfDmo5Y1UpLExdxY6wDV2cSuCakZS5kHi7gGQsUNZbiQgZXfx9FuBzWBQUPT",
  "key31": "5Zjrm6CFhjRmMHogDRTVsjq4Xsodpw8V64tdZ4ZJkWfRK9DA8mqjUybpZWthhRmH9DUJvhxFACAmVRZHx2tfmQeP",
  "key32": "3yArF2ZdWT5meTbWRp4yqcqqku6nxVhBUxRyoqNSqio6FcTViJF76YwamDi84vjmXNP7ngfaajeEP7fUDTmNbRiq",
  "key33": "5spABN9Xzic6mP32jjoYsB227SgLPgHxap1sF87jsALVj3HBDmioboQ96fcg79r5xZAKztafY7piQ1tY6neXzj2i",
  "key34": "5zfxbWNX42ADZpiBqXCpsnG6qrDUQ7ujExuHMCHpUMp8Fe1Fmvdkz5TUsbn1bUFdSjy8GB2hXXyYs667tpvoB5hu",
  "key35": "5B1uJAjy5Qc452EemkpMguS3Enfi3oH7XoG5jpgEzZA1YrDHW5G65KVSYSznrxS8sZTgzUwSGA4WEjnuUVcPfr5a",
  "key36": "4Njkimrcds3YUF55rBsNqGv4oH4U38cLAeo7Seh2EGxG55k1x1UekSZ16BmFCGFhtCit8mBWobA54Z4urMEkwFcu",
  "key37": "2oyEw5SjkD6Mrf7GohDFLYrqPjP5iP8DGXMc7CV9zya8kNrrcV8wYmqEG8nG2PNTkWf7XvppTHnC2T79XgHHALna",
  "key38": "5smusekf3rHvUrqxsj7VfGWz3otcSiugk9kVkCEAp6FTp9yJh6wPCwP9gUHLSJmeFyau6dWnCnho8S9TkocPrCZ8",
  "key39": "3PSHGjyFWtiRrh9zGFB9x3RJ8e9NFfVuaexqs1dLMhkLVaNi5oaU3uR8nyfUERetgFoKLDeg4eeUq5fLxr34mVwZ",
  "key40": "5oCGPhhtYAqKhyN4FTWrTFWHiMDVHRoLjVaHWrA3SjKy8x6jFvP9ieHQaCexH8yKAEiutELtHk5abSDQLGyJZu3K",
  "key41": "4maQG5hQiJdy8TXKPXKZ399iKeXTY196RcjniKu6tLXTkJkctRdKpK6xhTzENzQC67moHLqyZocbCuHisAteSBdA",
  "key42": "4mGXkUpgnowcTakmxdxPK7gWAbVTMtaBZSPBoa7zy51oj7EMuXGDsNmTrvjDnacVrhGPLE5hdRBTbtdTBWkxwcNm",
  "key43": "3AByj69W1qTCiPs4eC2p9bYPDG6VfLFvfXWScYuHqVEr9Ect5TAmtvEkHxv3Jva7rFjKfrsDWJhpUgGrYKFuJHFw",
  "key44": "5wLno7b4GetWbFPDeJKefZS67HgCGFjx8kNXorYHgmcW2Yeuq5pbsS8ongZ8dhax6WNc3x7T7zh5ZU24FHGfxguP",
  "key45": "2C74KVrM3YZEa6aDu5ZQ9NENENrbicuJ6vhZnrkguN6C6LsneLDbYDFdmfFdsNSyF2xjkJcFKosSKp3TtrzRdvzS",
  "key46": "QgXEMy6xaZi6btVQAjfZ2RAmcEdkJCXQaftLTGA2zBazefg3W2fcjfuJCAPzDdAoG8s2Uy8trAPHKJomqPc9Dt4"
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
