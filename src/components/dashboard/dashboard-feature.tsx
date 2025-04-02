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
    "62M5Q1uRDsXYo436EmJ5oZqvq7oxQeTuR93qL5hijqzGgt6rpJFsQoVyQTEzBpa2McDJVDRpQpp7wcbfdYC5Dh2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HqbcRUkWu748nz8tNAcLUd7dTiFNztiPXCzbKohQP7edxw2eofuARP9Lzviz6RTuTeGuAEqibs17xE3NCd2khb2",
  "key1": "2gmuydcUxnXfKvLMiSRVxRzAAdie91p842eLQvKV5NZmSLADeTHfjV8ACHWL2zMLrCuQioQAeWXYh2QEG3SoLCi8",
  "key2": "4Bd4jbLaW8Fc91gXZg5q981eVrJg52boG81ndhkReLn2uVPtZfPWbpoPFNir3Qa1zv3SJThoqt5cZxvaNTkj1ZUY",
  "key3": "3qfDpeR1jjjt2pVMqzW5943oPYxUgE3SeGNk6KuYgj7Evt5ZzYTSVJQ4YV6B5kKmJdQNBktAYuQAkqjPFcCZDEq6",
  "key4": "62PmXonZSQo91hEzHFDVGsa9gQqC5LEPNmpeumKgj3gM92gAaT6SAwHNxHw482XMCwbJDtoWiZP7SmaDK4AkA73A",
  "key5": "3WaGyK2TqRR3GTUiXdaD2DbYhy7bHTHp8ySUKAzq2je5bdaGdT79CBYhq5hu2j1a4FVZpGBXmTyBhPr97Fqfei84",
  "key6": "2sfvHmrG94i2WogArw1b2JKexcdCAzTFay8VW2j1QD9Fi3sX3oDby5GYvHFjjkmwMC12JZTp6jibnxzzNHCUHGZt",
  "key7": "4j99rp7CmdLvCxmKr5U5DubxaV4ZtWy1CqJwH27GjFfDhkMYGDckLd7Jw4r6CaRaJuTjryrf9uBy2xcX2C5c89ja",
  "key8": "2PjNDMtPPaPRi4N7Z1eUJhpyyJQAEckkrMZmzNkaWen54n6iP6cedP7rzpBHAgEZUw7jxp7SddShgh3peJpWfwoD",
  "key9": "679AhENeS9uAtEPqqzqyeYYHNpJ3ThUhqCLiLgioetgavYm73v5bqpDMt41voVnCLk1L5dHxmVXHapXhyZTxos8K",
  "key10": "2XUqHRBa2kbqR2kL41whdKga3QYY3yD3eu31BembJvjvxvTdbAbsTYVFQuWe7i1rPGWNY4EqLqyAR8f12zX6keai",
  "key11": "fGCpXFXNV14WxYtf9WWHnuqLK4sxcr2PMZtMtoDi9VQSJw3PPC5mN9e9651v4JZYZuZVVmQYEzim1wAx6k2bMky",
  "key12": "4UBHEDHiD6HinHEwQGqxVDa89UmyD6ed62VjahUxz67qszsnRRXYeXqyWEEQyXkbXF4G1RYAbGBHrh4BKSfzKNbE",
  "key13": "5afSR7FBxMZMu4DmriHD38rDPGJ9RULkvWaPTeAe2j1mboB2kFGDzWSpHQJjFgNBGWs7GyL9TVKzQCggUsQ5Ud8C",
  "key14": "CVvzhreBS8nnaZdtNPzUyfdtTHvXbAm2MwKjfifLPpeDxy6rrbPFxU28PzYRFn26TjvhcbK9upQePWSqdQvf4ZA",
  "key15": "5v1NFxqodyw7D9StvadJDLffM9VqWqB9zkHLeu3V9EmehPKyhW5LZVSrdrh6EVGkRMeukn2bBshS78BzUAVUwFDX",
  "key16": "4UWtajbAPXHezUxFuNtZATK6U9LTCdWTV86KLn2egKTG8q9amL6i374X22TisPbRtWM4RuJUAdT7n49futo3nctw",
  "key17": "3ifdtqGSNmVWc2APHX2j1dvSsSfMGEV6n1byxmdu6WetJAAJbKnym4pxMt8yDyCw1KwTSxzjXxRCBFxCwo9mmMmA",
  "key18": "37NePUAtWVvbDkihNjUZQJBCAcR9e2sAtL7fdYCLV8Zsw5sGfXdKdneLRuTJnBiMNheWya5tWzRufDSiJfdCzVSN",
  "key19": "5MXujauMYypx7EYhDRJLTmFQvHkm4RDzRbmgk1M1mawfiYJQTGFmwdqCnqdTu3C1vUrVwXb5tfQw5rjwrt5bxpTE",
  "key20": "3j1YyzdmVjfF35FgQSkizK8u8n6fuV2i8WVNtnmsckYZW94VA3cKrmBzGsDrrMu9RuyGcBNryZB2ECyYQ5URfw6V",
  "key21": "3v7vGtFqTfvAvW3FdzTZmbFaW6idAjoFXNjYKbqeDkD6keUuTi51hwKRGv93ZFJ6sXuCkf3fxzZDju9My3g2bsny",
  "key22": "2ihdzH4JboAtNU5J7DMvyKegh2MbgGsPpuPvqpsQkZA2vhc2hnwThtfiGXnEcq9a2ETKeVSjR3gRuhjPbD5rcg7D",
  "key23": "3jGEx3Vw6574mrLjA2iUpLGhS9Sk6vUucDQEMuwsrfRatFiveq61Bu28fR4UrvX1k6pCFayUgHMN1jxFZPiYjpq",
  "key24": "44Z8C5tdAsPxkpgS3epeakpfERhNGjRv7H3Typ4gWjUwVPhgKGWnxJdESzVDNBABtMSoAgY6WTwMJRP94Z78vdUh",
  "key25": "cz3JHJEA561BuEUBorq7SGD17fhVjQqiRRCHnEXf5m3AAzWmF3Hcy8SeDgtAwQK7dNDg4bXJFAMoSSNBNFhmB2b",
  "key26": "3tRJo5yVUctRfjzoRW6Xisx85qvCYKxhS5ecTjVJASSP47JDeSeegpjvrV62VK2c3WR8zeA5GigXBmVRhfLH2JCg",
  "key27": "5XTGVnyXkSH7AGXkSucmfM7tFczwK23fjWXveyboY9poyW1hJk1Lz2tTHTa5HnzPRpBcknNhvuiwAv4BiL1tZHHM",
  "key28": "2pDb3MQkbwQUh8Se2VH9DUgpyeV5YcXGNpDP3mXhgBzHk3FQtA3VCD1cBms4aEB14P3nH5Y3SAhcH44qkEFWM83Q",
  "key29": "4Kb5CwQzHj5ho7c8MhGfANit3KWFEKou7y5hegiRVpSBRoNyJCDDDR9pzhJBiPShBjrBiuFkFQrEwQ9feW2AUqZW",
  "key30": "mHMFr6LNJjJzXeWS2BLJ3DUD2ub13mH8VErBLguiMvngjjpFGg7jEr8HxVkKNNcgF5W3dzUadVUPBpFJvcmCLXK",
  "key31": "mY7kWvXfCMsArh7mi3L3rCdUy3vMSE1iwhNkRCyN8d7vnKZ9MugVEH2zmcSN4inQWwFhQEd7JfAW42aQn4yjPHf",
  "key32": "2QcAwZcAF5txSU17BBk6fy7F4ieuyytoX58N72Npw3aJp6bTGcGYjg5B99ZYqcyFewYv6LaH7Ngyj72XK3LwmkrU",
  "key33": "puKEa88gkG1MG2fmEyuZ79ki1GPzpkKhhZMi2kZPSZFM79LBtp4iJ5vorWhqhiYxp188BJfbbmMLVixLb9o2iFA",
  "key34": "4atnwDKi2KUCRBRkLydB8PjntyjTEFAarVNgcZ8BSUTjDJkkduJQAyWGAH8NPoFoq8GgARGwTjMZ4u4B2Ey1fg8b",
  "key35": "ff43s7ErZVeGBBCQyGcnm5ZbKc39hwfNGde8JAPvRkx1zvWA5ULReXdDxkL8gzsq4w957YAUTyQNx7upTrohKq2",
  "key36": "3HMcUbUNRjPs1ssQUnFsi1Ymi7RTozKqTLK8wa1fpVvs9BKn2TKLNJC8hLpv9Hg1A61MKcywYePxDafbkLQQJbV9",
  "key37": "4nS3huZmCwmxuVRUjet9qnS68ACYX86j1SWsTVEMn7NkQ8i7jVGNwhioTG5Y1vJD3PgbmUhsVUxV421eP2oiSAFY",
  "key38": "2jjPA2Js8FPKHxT3Yciy4Tha2ynNK5iQDiAHWEtJ3b7NN4TZo9u2wKMmVNnJKCPx8K927DoQodYS6HH8dTKPpEzs",
  "key39": "2ZzEDbM6D34A2iQgTNVujhBQPFddxa8RCcEEKmKz89aWewryqDDgUwFg91Pvko2i3RBUDgwVGkp45rNJzxfJr9o6",
  "key40": "3dwQ2TDqhh5dV44WEfN3jQ23ndqPD2E3xJ2Z2r1cQeewb3hBeZBNTrT1HQmQurdp1a1XgPYh81dd5DH3VAL2MJ5f",
  "key41": "3bVk2ThrXw6Qn7CA4fSFdCem7n3q4qicmGGykVbYk3QH2pbTKYFz5uSGLUCTAXPJvX7yPpt1D12KiK7zZjvMa5n5",
  "key42": "34Ept4icKbLetU4LQzWVGVvQzc9mqoqaAjvh3em8vspdNdEHAjuwDTZudWgo6w1G3brgYTQUKPdvrBnbP1AAXRm9",
  "key43": "3Qz6YZeieWKa4uEG9mREYWQhd9Kb9NnYrtwixPy6cQhgPJByGTFhgePz7AhVqHdFVX2vgoWpmk5txZyi58m8BSYn"
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
