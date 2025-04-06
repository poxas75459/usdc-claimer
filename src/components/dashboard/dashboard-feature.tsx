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
    "2rRmHQcispNHvrps8F9AMRPQz7PSq2nbL95F9bL5sBqaDe8GNuJKqCVN6LQVpzYyFxL1gQp7P94zuwXCXyvesWUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36uRpUioZR661PcLiAzyNhdnx5jrxT9ULPGRRsKHbf5dZqZB6swgXEDykEj9cGGDC2weigJ9JqAEjoCVJPxrPFRe",
  "key1": "4Y8bDsHPPsKdd4nDynMfhTGComcSsvGmrfJ4qxwBQfBsSXNjFTjkZ4JRLYE5QsG9CMfREeefvkNe17priBAygD5w",
  "key2": "3yawZtfTKz2j99JGvx4A7p3BbS34v1n2kFfnGpTWKgZp4pnzwgwD7Tj9H9JvbSfy4RKXPXwWtRsRGYo4Fzf4rLBL",
  "key3": "9WcJAR7TiBNvUEkk1m5zwJc4LXcgam2mucagVEED9RfdNCqru6XuNAwQsEqQvxtBR1ccQ5Jz5oi7VGw32uoSL6a",
  "key4": "4wa6BTcZ6cNvmKvX4tkbLQ1u4NB7hyBMwyCdppYUa4i5FQFYQumtk5EPWNz44eTeGh1PCHjJD7a1jc7fYgDKjFbW",
  "key5": "2QgGiND5EgU6SUbaCR6fvT9KqZpPvcZsyZNuEggXZnv85KnoRPUn1ZoQFwiRor2EcwTGgPGXH9p3F45RW6BbKYEy",
  "key6": "5ShPfhsJkDhjWmmXbFqahYzKo7Ne13G47M7VGdHXRpFg7avVWcmw341uJjirqP5V5TJEi9GnvPJQR9DY1bgjuLGu",
  "key7": "5Kufq6HyS8rNRrFiLADaZymhVgkgQdco72FgSyBW2BweHfmty9n9UNLiNW5Lj3s8TM7ycvGc6nmrcZuCsJaDzAmW",
  "key8": "3PNPKhxf7ybDsCNJhciWc84X5SQYpWacVE2QzQDtVg3mWLA7Fyogwer5SxsY6Jx6PmDSr7YWGBvKwzVsTsWtff1h",
  "key9": "2SKgHMobE2YsRQb4Z1PTpSWZkPDp2gPE9fzLFZg9Hj4qyxTfgPFhs8d9vDTYneCynLjTdQjamz1EgKsbLb4gp3FP",
  "key10": "2iBhYXeGfnZEug5kJ1gUSkW23PcBUZqqSEFUM46cSVgD3pXUALh8bUbtJeUtGkHy2pCVbeXrwuBbQ4QstS62j9R2",
  "key11": "5iU1Afvy9YPP48WgbBoqM6a6bZ8MLxkXF7VGN1ooqsy3R9p3EnyFtYAhVBQFUgkg1TmKyBJekWv2Kst1kZ6zbD8v",
  "key12": "42oyxVEUWQAiKbG2qrYao2qftXYjqUFXaceVAaz2JZeUi11rsE9dN2deZUPqsRPYSkrwGhhR44s1YyEnRxHmnzMq",
  "key13": "2qtifke23vto2NUxpC9rbGPey7Rmo1wtmkWc8YTeAAJs9e3jHWxEAvY91VVkLCWH79iEkp1nMrQG8MRgnDFYCsge",
  "key14": "2TqhtBiwEUtLF5XvUDVp8LUQwHC9TeVayPvnCYovSL9J4YUguu7ShvejjnRCiLG12CPuWvRqpU1Jg8oRxYBvY6uG",
  "key15": "2PNGKymuFQkMsFo7N1ex3PStNfJ46VjnFRh3mLx3QuiG1HaYNRunV73i7kxjFEXQFmqYUCAxCFiDBzn1EUhdSecS",
  "key16": "hXnNxt8xGiMBpetR4FgcrijhbwXZjG9YA2TyAvKcwvGEVg8zXHujFzsYHTcHRwrnmcJLfuFJxYg93FfueoQr5aF",
  "key17": "5tVvZuTkzCasPEPtdffKagjNxvHe5hn4VmJeujEnCuU7kL2EEmrbbWDncGmoHjhFHmBznhhmADwvZNPVZjPtgxNP",
  "key18": "3e6kmrJdz4mPbABuYevDKiR8bFv7yc1iJYDqjtajJ2fnEPctcFxmyawAULHbKbEQiSdrtv8aLiYnVME7FdE5g8P6",
  "key19": "UXPyaUnPGCmorysX3B3xJmE9NT6bK2gZToK6JPYGWGCbeamuVmuAbQMNsL74M3vFmtpNsPs7jUCQFxHFEmPUsMH",
  "key20": "4ztZSQKiBbh6Kvm3SyNtqEKN3RYSj5deDAEkhnUAKcDL4K4DEMD6fWsu7F61M3zNosHCE398z1fpo4DkbdWaVfAB",
  "key21": "2uyFUfmvvTCy8UdANAtbAooJ3rwRwM7U6XuVjvhyitwE3qjisbeTHSYFrwiCzrJSHq9Z6yuV7Kh2WtmqU6SppTcz",
  "key22": "3B7abLeS1hCedqiqrJnGhRM9po7vYNEC2oXKJiwGzNBHwsAcvfPbE7wpcnTNiQjKtZMhbA1raDkdAuxKyxUWwdzU",
  "key23": "3GqFSh6WjFDSKpQMj1dDz8MKLsYiGCkMESMxjNcdMpf4SeCK31vmev5fpJiFT1BBpfQKN4RsbiR3pXVioT7u59iZ",
  "key24": "sdex5HQUwS93Xf8AW5trN1LpiUeBQwZr6w32m9Cw5gw4CVFnRr2tdv5mTkjZdb7oETFqgyYoaNorQEkjkqqiNt6",
  "key25": "5MWqR4pg6on7jz9yZRdgQQo92pKUFuugfqY8h55CR1YCcnFPjgLpShBa9tXpU9Sp6NK4DrQd9iyCVeAFNMh6m7HL"
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
