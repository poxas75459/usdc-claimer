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
    "23UBsGTQPUbFzss5KAAQG6H2QFp6exEEnyVt6y2XvzPuMNuueuPUpdr78unje9pVAqssz6KZBXdgL7u6XY6LDsNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kFV49SuBdEcv8b2Lr7Hk3d7MUigDP6MQfa5Xyddyfps8KaF18q7rEpjp4CiGPuUpqmMkdEPZFpGpUNuKV2jLunu",
  "key1": "YApYaCGKFGCjqA6EpQQFhwGnx1r15rbnEkMzuhDUC8u16xthsnonrq6jDFWrocNgS7v1DFMJA8PuCafB9xcn8aK",
  "key2": "4RMXzgFkoNMvGdgUkKHmUrGtsWUhS6PzF2uLXEsTH892VJm5dAGuFJXGT2YosREgRBXB7zGVX1KwiG1se7AaT7Zz",
  "key3": "kRZvjFETg9HnBpoXMjviDMFFLPR3giBmLqKkvKRHdCxNirA89VgyG2Bn4o9Hk3pjJjfb1P1qWvAyGpUCyMn9rKj",
  "key4": "2tu36ZT5cAw6KpJZaohRqVG7FjAps2hd7p3U5BUgXCkijjVaTieZ5ThosBFm7sZ4FiRowmdy4GRfybjNnaJ28T49",
  "key5": "3oSw4eFKQqi9SZLuUwRaSqpYGGyb6sdRs87TSvrf2MEUtKxufkcuFYjNtGBYGW93Yvd9GZ9bYok6zG35c7SvHHuv",
  "key6": "57xMYhZNXkZBbjAuaHPedeTBHs1P37QGSGFHBsdGMzXdSpn13ygAXjdLSo6XoKwAvGZsHPjYgDdgKRqDyU12vrg3",
  "key7": "3NPhggTPTShJvQ1ncegT99cECSM4wzefqHcMrYzC4Zh8gDD7MxLbh4aJ8wdhK2NCSgaRnMbS1c9SkCZ3ASJBD2qZ",
  "key8": "47d4NkUqgWK16D9PwizuNUPKhJVpLhBfLsBDG8m2L8ADCA4BGSpdR5sPZvYQupuQi4JA8Us2TdAwDrqr9N8XWA64",
  "key9": "wKePaHieBEjjVpAk56hFm2dL3DpUFGBtwoQ1g79hj4JivGRXnUKaf8b8bGvw1PxL5Sai2usduTVSHAx17rjuA8q",
  "key10": "5yerxoKVnQim6ejwg5c6WqH3hQJadF2SBU9YuSDWf8gGQ6m1kZdtEtMQvwunPDQKCJrk9cbUKkHcHM4vBJF5yfEh",
  "key11": "2qgfEtaWvUbzsNAuj22dx4vc4RfvHacKX8HnhqnW36naUGpKUD42h7CCLJ8cpgkNtAQAU9HEQhztPaCHM4FXxgAe",
  "key12": "559WbFwGSi8dnCvD8PM7oPj8qJzG7JCsZXNbRWikViu2QXpAacDfPfGzE63T97YDJyGv4kacBdX9AWiJpFyAfVaK",
  "key13": "5hPLGH2kQNqeKDdbHkkVEU68BfMFtcrqork99KdueRYporDuiDKSSgSstCGHQk7zW8td4aTtdoSeK1UEVnV1kPQW",
  "key14": "4847Cg2hHHTzTqHGscXk5nJCX1NQZDZVMaiv6rgB2JEATgkpPbxY2YboKWyP3c5VHHpKTtWKrb3Mw7m42K6Qcpmu",
  "key15": "6i6pdyKx9ynkEBnVnefdHc2n85rLRYsj4qYDrzvJpwFj5MzDPB7WP26w3H8akmA7x6Szp8CszTV8LopjSzbFZSi",
  "key16": "3h9Uq5tT1T7he9UZ2KadRAPDaeunMZDqAeK8fMRy3A47LVgrgbv8AL7YgoDvGRaywNiA8QJ5evhfF2GKDC7XsvFi",
  "key17": "67F4fsJr9kXc87PuJkZYzpkX5YHsE6A258LgNWXdoJPS9Q8Mn4B7acah4T1L8Fu8MGsHBwYwhw3MvFit6rEJ5vaC",
  "key18": "g8z9HktKHntYDLkaobgrMpxRc4p42by7Q7FPUdZAQvjz46tiYhXp9TK6HPJBgEja9PX8XwsbGWZrHRenaFquCaX",
  "key19": "5du8FPnZUcnKbK14opTps9jGVgnTijz9Gpq4bGLrAQS5rW4DpZm3vxduLkyrnZbpfs9qEF12NWjaazrEMohf9jF4",
  "key20": "4WKEd2wcf2hJ5XVfHbDJg5UW9XEXweQiXBSznKnqGJCsYyzDYqZRn3eBihHHgWV1AgmZkBconZuwiKb7PfnenA4p",
  "key21": "2vUCizPD81ZPUw7ehryxBXbLMckvT7vPJoEPtb1E3mv97Q81SBbDzC9ek3x5NxwTviccJgc2hUxFbn5L6caQLhjM",
  "key22": "43fgU3Lt1QvgAEpzhhZpjnMZT9N8uz5coBDZGZNf159V9VfLxMBo1pzrt6CoGhC3LCFUD7B5VeGpEpxxdt8GA8nL",
  "key23": "2bsMCDnLp5cmc7or483ugzkSvAME2S51PHqgKZR7zNoMj2hx18YKkytTeghtenzvL1MYCLN1MDHbhhZQ8RmS1Vmj",
  "key24": "568GcJFpU4edKkdy9ZkyhnQohmvcfQKG9ozLDCUpWJsZNcb4GUvJSTibB24zRRToafk5FPA583MVPuBtjFcfy3st",
  "key25": "4d2UAXYtCeWEDPRRB6yCtMbuCTLUL3LM6gey8nRsKAJesWjeGgtDhsM4PAbKpienXtHYs3xybW8Ugd8gxurtyYwB",
  "key26": "2o4d7phVqCLxra9bLMWc1YZnU5indnZmgc4dZs94QbsVDyWsh6uMaiWpbfMQB9Nx35iYWdsmw97mzsKMs4GnWpPJ",
  "key27": "5stTLCV2DV8tcfXDM1vgBDnWNmkDWE2aurxuHvURJ9C42Dhc9jDEcrU6JgWzWypoAYGYB9YAtaTSMDpXgak9Qpd6",
  "key28": "4Vh6RvsoDsbUjSUkPv8hAUPfya2g9KivqJuBqX2kctTMsPh3ymKZqwJzwk8yqG7zGMXUGhkAVb2E5RfZ4Srx5crA",
  "key29": "2aX4S62MbXJMFsEs13VowvsCpnXBFTB5ARjskgZdD7RUujHn6HqqTzA7r6vfwRgWRY3gJHEooaGnZiY5nyEtub4V",
  "key30": "2R63CQXr68EvS5ZBqpzdr7LuTA6x1aH2QHpr3SaN5We67fFmeAko1kHcFQzUfHjFukSmKwvsR1M4Abi3Wy57xcMR",
  "key31": "5EEimmyp9zpDaAGp4s8vMFxVcymGEJSKUrqiAAzfR9hmpBxtqf9mYrXrWEU9q7NHSSdYsofvtJPXYuspnQsb16Nj"
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
