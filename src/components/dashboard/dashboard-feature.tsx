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
    "29GAQUgt463TEJgCCaz2VUwBPkjV4c9zXGKiuyewjm5S9FSZGkhKHgLYMB2pycGLqj6onkmjXauj4pkbAqCAuCqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56MiQf9gBk2tgNZhZTwxPYjiBFjsvK3mDfcfEz9brafJPA9TiQP6snFhiEFjMAgDzNg3MMoLZ63mKjUdcdRYeJ6z",
  "key1": "2PimoGarnxVpc9MGPFsrhMYxVStA2bPBdP8s67M4rJzjA1o5XSCWZnewqqBc8Bfn21d4SAKEK6DoCmwXT9kMQ7nR",
  "key2": "2xtBicms1r18aQBPm4YskG6pVJRd5Ax826qFh9fGqdnL58CzjuuaxuZmuAVjLYU3E3ZL5BazQusNQt6XfhAsnJfi",
  "key3": "3uyQJ2KBVz5ARKLiju6vuXxPYjZtNCWE7h3VE4dTTK2XUL9hSo1m3GR8ijbeYCpJKdxaQxipHrovS73cQMHXzwBz",
  "key4": "5twGuRJqdrHBfuef5g5EaF8bhrCypK3tbJYz9imNeUHycxDAMA2j2XTfrgsjisApMVNfN3TBNUmQRcZ6tb7Y9b9X",
  "key5": "61C7ufz5CZTsXxTg496GAMuYY9w4WYyrHP9pvsG4gjzRSWV9gJtS9GZxpzi2KTgCDFhNQigwFmmR56srXybx3t1x",
  "key6": "2Z8L24DjcWnTNMcZbCJwpzU2CZJcZoXiFqieG5XVoFxSqeeYdVzu14xikmHHnZYFsLFQoLopfmr2ia4f31U3ods8",
  "key7": "3JCWnCcuPPQZ8QXcDWPLeeAgBkP6q3XaotTuYDmUQxXsbeGvJ1oHzYbdeEFLLs3wkzeASLaeJGWHK2ArvYd79EX",
  "key8": "ruycKrfgmgn7abCLZtZKQoBvRBv81i7S4iVRPKmrzH33junWBWc1GMrSPaTLQZZguGmbJivb9rbK8eAd4mfPXvh",
  "key9": "2owvESdX9g6jL6qYGPP3SFbiwWRt9NG29UBtuJwP6DUDDnLDKb4G2Gb8GJ2duEghEpagxhaJizqMfjFD7u6nX1w5",
  "key10": "K7AtoPeCgNBHQQCcytgZcw7JzyRYozdPTTUFofxar2gPGBay1uS1CYwcqbXgLr3sKbBubALGmdbWkjjxRe7iiSv",
  "key11": "4NDHNKaHzBMLhrNWvAkXdGoVyDi6tzTwezbLFQQ21jNSi7EmTjeDQHZhNySYrajhoXKY39Co8UVkQuouftBTp6hX",
  "key12": "3HJ1vQX8GQgZaxG5APC2TZk3WC1pbzNJUi3FyqKfowUWw3zzPPxSf8BdPPcx8iCsXzX9nQTPkU5yjEkCweV2PytW",
  "key13": "5U6yLvvb9xPVRHveLqQdSefcmdzWKxgqdcQm5ojzSw4yWny3Ee5CxToWyRvBzdvRYMLyReLSDUyJ9ccCi3J5eAD9",
  "key14": "4y3iSZ6eHUUio6VjQtsccZ3yHKwF4X55cCzPPSzLrNcGW8jRqWYZzRpZoxNGPYyu1KpvgeQ3EpNbrSS3nZzui93Q",
  "key15": "576oD1d2abcLYQ5bk5AvHKVYTyW7jaQHpbQ2CgWZkLEuXfQdNwkuU5ZFgC5AU6VGWvZXqUmuc2GJgewxDMhUUykw",
  "key16": "4qRQ241CQKv7Xsdd1QdcWA6dkv9wLzU3CHGRaybVzUDCYYqPrTtevkhufwHKxFRTk2fEn3eagNkf3kAtWe7wDemF",
  "key17": "5za9Wr5S1uZF61b9ErAiEHeMe9dXrEaBfiVvSNK7VBoDYL6R8ZfxqEBUnB1fnJEjJeGmSFSdP3Rbgb2ysfq5zYak",
  "key18": "23NyWpxxKfLi8FMtiNarDamo8u6dTuvtgsdFnpnm9TwJSztCF5bcGqq4HSKgXPujCfftM2rjR6cmV6coZJENiUfK",
  "key19": "37AoAUBkmgDpzauk8omTYguhrnxhbTQ68gxbUnjDeVxcAexo1rB8CBpsNvPt828UCyQ3D6eLd7tNaqVQDghoJzHh",
  "key20": "4h9APVCABifF2FQXDBh4NSK8j7jq12A1CHWRKu7ieqhGzA5DRd1tqx3EmX5KiiPfHFdNz6G47z1GqtHqe1w9VTRx",
  "key21": "3vPsAM5z1AdMtWJdXd5T961ek8uJH89tqXV687iaMerBkWRfxNQg1auGF2iyTcqNRJYRAxHHTsM2oCjMvn6hPvEu",
  "key22": "5psBfrXxEasMr3WyeppPTGmzrTFoX6tJgU3SFW438ZJmTnMbQ7nsCV2713hfMR7mCL8YQJAwWzRkAwVqPzk6axdZ",
  "key23": "5d83SJDzxkN1EHoPHR8UkmBrc6t42hhJajQZws7R3brL8hHSSM6VcrQuogPT38MjigfjQVvTHcC3WoNJrxb7ESPD",
  "key24": "T3Rj4JjSacTJ6FbHTMCURueEQUutpE7iAmdrtSHL2ps1z3ABNEo1cw81Hab25sEGPiAmNqaPcFp2qDPAFZUR9nE",
  "key25": "67PMjmG9iekiqrwxrFJ3jR8nopEcXPubwfBU3fYDFjsFnTUwJWTFnwzBtgNefRfGBye4StGhK6PqP6JP1tMAYC9D",
  "key26": "3KoQgxxX2HVAyTn3EWMCt1CYSbYFH1uRwyfR9PD4n5JfNLGqjiLFMpBKS9awxip2HRTM2pVr6khisL5Xfrco1q2c",
  "key27": "46Z8UAF2vEW95pBDeVee6tFEXEVGMUf2SoNM8yPC8Dsba7djtXfwZ82xRjbuwKpDzLWyE1bcJTSsJaK6UMW4vcuk",
  "key28": "5qE9V7D3Mka5TJ8SBeqHzNnNuaxCDkuhAN7y1dUc18fBLhdtor5E8kyz3MARc4KCTui6RmuWVnn7288NWmwb54rb",
  "key29": "3kXKrXjnNsmw9DPdqPYw4fX72S8CTSbqBMFEXF9G7FnsQ87ZMdbFAv8qntbewwu7VTsFRhiGs9adM12uimrmjabU",
  "key30": "4yNzxnL5y5eHchM83bQAbBx2kKUsHvQQzyFyuLFZpVDjR2S3ynqtZrpxdM1o4vLqBX6FWyvS2cAXZqDYoKB57AyL",
  "key31": "64shEeTZa4dGq811JVnfVEfu4NynCcMztTRfkA31BzF1FJ9scsxQ8csLiWdyE1xb5LRREUS9c3MfsEmh3WF1TSnG",
  "key32": "3QKcu52U2MmXWJpL93pjRgDBEeEXUbeyNxET1KHjf719krSrYeQ791jM3ibsUcGkueK3f6xpmmXuzLdPT71qCewx",
  "key33": "4YNJ34UoatUo5zay4GToStH5ojf5MpNCqfSxYcDZ6rS92QQdDLSkUCptgBHMs66dWB4YhphhxGHueagic8XKJGzp",
  "key34": "2ZPjig7tBvCEhJXWT7odMf1DT4JicWZhnSmCm81mKKVL6ttH7edN5cy6W1yfbD8J8oCBE9pUG3SAbBz7gG7GqrXS",
  "key35": "3NypeihXULLiT1dDKcTPMjUcGU8ojYMme8Ck2ccbVAeiyeTfx8QVbo3WzDpP4ugZnDmC4uqLhzkUrAo2YMFdqs65",
  "key36": "36dtZQxpdxwm9EkxxvYqDQz8XM2XkWijy5AzgGvzGJaQ1xAgAH6nrCSVLLkFBtGcaBoqNGCngrL4NfQBTCBQmR6P",
  "key37": "254u3AQwmrTcRBeXf9imEWZB9AwiqckMhVQKDWjfWV7SowPzFArDmM1x6pSXqWH6KfUChP3jEK48ruZ5Sabgb8ob",
  "key38": "2xezeQUFQeJKcNcFEPet4qV1z7QVk85gegJfWJq9nS38KQC7D9e8Y8ZrghZbsT5rdo6ApJUgMJr7uJjgZopRmSuz",
  "key39": "61yfZsf5z4qVZ6ehgfCMrds9ZdkMa29nefxoNnGzDrMhVUxBgQJjM8vhUFtoX3LngBGJMQ5zvogEfX84xkTNjXAJ",
  "key40": "5PKbeb4ppzfPAkVVjUawZs7aEWW5kfmi2cEzTkGPWHrXSFxffshWWMyywcYLrpyYYcEPB8bWQdiExscmArDdPHG3"
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
