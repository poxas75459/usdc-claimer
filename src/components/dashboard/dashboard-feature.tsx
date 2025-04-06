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
    "4gJmZ3gLquCUmoX6tHHMRjyYK2RGmwUthLvSpSzEQA845nM29JqBenyEcntnzZEASb6EGvwCnTM5YVjcFyRVn4u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4wk6zUCsw5ZW2dkzJ7VFajHiEc5fFDPFn15uDND1BpB84JH4svGrumH3NKKCopd3hZW7QV9R3UBh3ENJER43MU",
  "key1": "2DrJVoq6chuRYtX9qTxBBJoTCrQhgqHYiMvSZ3QvjXsk73UVgXiYui4Qgc7QwsYX24Ve1qWXqDWxRqR3msV3RRxZ",
  "key2": "2vRBY3momoRetQZ4q4tAC3bAJPmngRAedA8MUrRe9XHrPBDfJpBavuaE789zNkX74hWXEsL5KKQgkbXSHB4ZA1eg",
  "key3": "3WHUZMrcx2SHNr5p2DqX1b1ZNYUCHUwgwCqNexLbDdDJaPXgJQwHGYPzxJLsJP2jwjt9vcaGgX6yKUUCYrVsFEnn",
  "key4": "55BbUziwL5Pv9misubPLXci55HLww6JnUvRnmfqSncRDS4XVtpHyYgTGawgthRkXfxAo4EYqefXgEqnPzAcJzEWr",
  "key5": "5rqwdXCy6AmFKVjStrXvGkgBJgAXfeEzcXkqsvcYLsg1jbsPYuwNsvQGvu1nZ2Hhj9gdCDbJyT4Ghn6SpB3A7K4x",
  "key6": "3pzs6z8bRS55rRxLA9sZJoPULdz22PiRTsbNgJA5rY6Hpv3rJv3fsucfkRZVTfYDYi4DAM7GXaD2JXZ8nkMPLFzG",
  "key7": "HBGJYR6UhSURXs8RqY1iyeAAFEK7abCSFwvvgZevKtcY43TwVxLna8o1EQRzadMoipHB1EcW7deDEi35XC1f4bH",
  "key8": "4JTHH2qB3AmU4dZJuQHkGf2LbUt2E6y9FukhNwz1uDqNDYBCz4zU73eTnvYSafyJoa9nBFrxMRQSww6Mu7SPRtaC",
  "key9": "3mDzNU1vAvmSXSn2Ky6ZDKePFaLsXwrga3Uw8HJPnviGGj9DAAkMjhb82bmvZm44HtD5a4Px2QfuoixaYngAvBUk",
  "key10": "3zcgb7x26erNKLLA2kBAJYQvdoj87H6h8BWWsjwr7BifDvd48nK7986an4RJZt5zqLbKkGndv2xgQ12XqAMLCnGK",
  "key11": "24TobqEuFeScuqSuFhAkDqKr1DK1yYy5W9YngrsAy5SqyXEX5T8ZUUvtr3sG5MMWeE7ne2KNYbfuBWmf6qZHGgBB",
  "key12": "42WmiqPG6hUxJd67Syd1XWK7xNkyfJ3nZ36DPyBY89rtv5kt8VhRNN9Vx4PQXnZGoyB5YvRTtVNs82eUVWJ6L2Uz",
  "key13": "4xLxeD4Vmmpf8wGw7JUYUg59TZpjtqBEpwinuNeDxms6MefKwjKRLyt5WWakv18zFt867yeB68r41zqoaVb2sKCg",
  "key14": "5EQtCFomtuqCsmm2qmD2RKHGYdDGXXjSG2dN2rVbeUXEBHh95pGqcFd67VaAiCUHrhDMu65xwkA5A74AXHJVh9N4",
  "key15": "5VY65zVKcCtnWEJ2S4L7K3aHiC7TGCtF1aXyRfcwT3cWqqk9sTi8xV9gebzsq1R9vsLqArEtViR1f5xiLa4afBi",
  "key16": "4E29bD7VQcL9VAvqYpfwoErqKfFhN1LTvMgKu2TbhJf5gUZz7fnSFVUxQRz1gMbDxjPFyvzy24hepXJMoSzJ4apU",
  "key17": "3C4gXsG5GSUBrkqTxcJQHdsSJXgkrnd5Fp34xKHsoR15Pa5ibfEzsgFLSZJhtJZttAq9EqkXe7NotuK2bxq6LibU",
  "key18": "4qdqz17XLQk7Lnf5negjjnH5LHHT64Ngs4KQSeVk9uN4SwtTo3p9FkMG6Ttbp1mdeBahscv7i8mjpBspn6TuKTJx",
  "key19": "4cj6vHyDvRc8nKS3t1F5J22B6Lamjt8fHNbZNgRz6dDWPXpzhGggoKgqBJTE1GuWereQNGaMNz79M8qwEw7a9dm9",
  "key20": "4B4M372d1pHnpxoiHmu8VpsHPzcKz2z56RRJrUS4ASdkPdKLMjGi9YtcU6c55ydyVuvNzJEqKToD4DwZmQ3Vzpw",
  "key21": "5MVDGa5xg7jKp3CySfyJ4QJRdvkBjRtHeYR5LLkzqsiro1jhYCra8xQMypisJvEw2smMUSXYuxz7pAQW8ZZYEjxs",
  "key22": "2PbooCgudtTuZgyv6fGmCiywydn442fWetFYKfGwmvjv8knFTwKNLUp61hbciYhaTtCW28xsZ9fM9WASyQe3Ufvx",
  "key23": "3TFsWp7bB1v3e1CdHAsnKVhPxsJa9AWaqdTwmycM87VS9jmU2ymjopH9aAHj4izFwXZeNvDL417GhRD2PHBvSYJt",
  "key24": "5CHso6eSuXKrxVb7qzpJFGkV81Nxd3hZQ2qxRP5ma3y1MpEsytkZJnNHQ6JoFxQJ6XQtbJj4YEWPZeJYBoEXLbVt",
  "key25": "2KQFYPBmJsRrVfccB6gJasMJTrnEU7ejQZZeCvGWeKAgvyPGskR2TZaNTvub4AbY8kY6JVaMkqqMhisGe3RRFy7q",
  "key26": "4BMqCUwgRbEVptnggUtba2PHZfBXQH7mYMc4pZVZDYGYsajF2N2GaQkAZVNQmUMuV4UcH8eh4HPEpu7sFWS7F3G3",
  "key27": "4SdV77GrQny4PGmVYRJyX4Qc7LFUzM3xqnrfNXU26cMEUWUNzQLD8RAPn9fvrtGAQtny4kvUrQCRHSQnXY7AywqG",
  "key28": "taBnDDozAXE6W2cEuPiPRy2WwVVg62tqdWLJR6AKf4tjc3upPvKiySZMroSRdixM7cFjTs4cUeWtXrkc3FRbiCH",
  "key29": "4Mzmbz2N6RJTuLmH8H2gUF1QrBCJhwYqjMa3spdf2ykPi6kDS6xUwJWKoaiGG1cD6TTKeWfbo73DFmqvZVdneXSK",
  "key30": "5AexUDBm2y8y7QnFFYaipkxPYJ7oiLNn4p951VKWbNvM32GLPNTF4neFvYYt6hi6MzAH51xSuDjCpWzR7u9xPM37",
  "key31": "2ybcjaFaLwa7foyGNU6MW3oxJACx45YJ7UcpXUd4hz1hmd9ndmShgn5FU7S1EbDt646tZTf2ZucTYYjejwUqyam1",
  "key32": "5BHcC9ffSDciXUkwHPPmQ4NPj1J8CewtpfpG6nPxr8Uaw6E5U59UaSQxiY7LuJBdtapKKKEauaBGWTevPayMjCqg",
  "key33": "64g2SKv6Z1rM9Fr9gxuWrjNJXoUTPpseKVsrWMSw5o95JVk5Gx6wfneYqSYSidsATUinWSGdVKXstsvbxtWqkgGr"
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
