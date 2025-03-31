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
    "5cAtQ3GzLMUdWphgvcUnKHqxkHbP3Kq9ccaT2X6CT56x3wyW9L6jqP5CiCuDn9BzpUpmr93Hzv2t5ZhL2gQMUY7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmj4mNXYpnWqMMrDqSGrfBTWZk6wbzZ1gi7gdgA2UmR84gRb2yzCY8trC21qcrf5D2x1bGsbh6RiHs4aCinFcy7",
  "key1": "35XRW7ikdyDpiiTR8kFLAgk29DBrjPVJiYymRoqwQQZ272g5rB7RCgF1LvrGmsG3DUofCkWgqjEsrBf4N4s4XoYe",
  "key2": "NsUY4xGkXCodX4r7UhDNhbVx9J9QxwpfLxkYe86zRejNQEkLvRiVT8XHYicNytw3p3NsA6BgWn13m2JFaLs9UzG",
  "key3": "4cyP6Q6Bne1sA6iyjg7okgooW3yNC4PGQiEXeg31d4VMZh1gWgfNQkj9AqBr17uYvVg8vkbyFsxGKVmKdF3Yz1jm",
  "key4": "5BjDuC2JHGnmczNk6cDknJEvYoFob2DVo85s7e9o22fm7DKdr4VF58z9EXzFXeq2CpRYdZNTowrfxRyS25bePbWP",
  "key5": "LDGzvzjJHBNURQ9eEhV5PUC4VRNj85XDjyidn4BB7e8AEXn26Z2XN3W2oCRmoYC9hk8BNKet4GUAb8kuPd6sdDR",
  "key6": "2KygDBhTCcxbqHK5KSzTqAgx8BudrksxFYMtLa9rkZ8ijBmMgsbTuGf6xtmYRBMFyMJ43MhEpRBPbHLW2HtmV7rf",
  "key7": "41Afd88v2q7YHtZ3nHcrjjyK794oAK5FjaR8Ergf82QFEuNY9YM3BUGo1Zm74Ddgk74LcWvxkKyxUgcFQasipiqq",
  "key8": "2nqrzt1Q13Ep4Ty2wToCUjSpPtkHQ1wHPingYtUJGvUyq1WUaGChiEe5vVhGEnR61HmsszBTibT685exLwEYvYFy",
  "key9": "5hxm8vK9zPteino1ZrSxkLtpCsKVukNiwQyp19x1T8imUuPbCWA9qQDXWXjf65zStnM66pQEynYyDLfsQCYGMYQp",
  "key10": "5iWXCWBAA1xMTUHZTWRRnq6yonoXnkEF64wJPHMh2kQoAijinqhHfgbg8msJ33T5Vt3ekRAodoSL19PKkNu5iCV",
  "key11": "4TctTBiy8E2bUsW3ZTQwKrCxrLiwPycsR1wuVo725HqAP61tTwZFr7QjUUJM9qeVdeypm3tzVRjthnCuUaWgryRb",
  "key12": "2rBkwfLdGUxmn2LmtwCB2FHLsDNmapgaAp5QPWUCvhXCrKLNaLqDXwpi8Yx1umdDSuC16aftqtdi9ruF4GT4bc7y",
  "key13": "2VBULd5pCumRunHikHXsxue86Qsnby4jKhPWWE6vTNNg5Be2nWB6PCjsbnpfim6Fm3PzUYEoyXbSMxD5dzoWH2JX",
  "key14": "EvqEcHBi2UFABPPdx2F4w9Gx2AZKt53a4Xv66CWnVXyZekayXpRzdUjhekzMWfYGTbrMaTvuCdJrBARnEosp1Wv",
  "key15": "5ejsf4rcgsLNwmJk19quPhoAQRBiW76qhV5u71UbLFcfmsQVvg3QZfzZxkx8ASWfidvbavotQU7Hxj8NEs1gogr8",
  "key16": "Eq4h28Z6xvKDQZVruyfrUDagjB2c8No24RZEjoGfWh3LvGtGLYo6gZuaCKazMcCEqsMvXocriCFRr6JbxbtYfmG",
  "key17": "3LykjLvNqzpi6uEgz8RXEMvn94jsEACpPS9hoGRawaggV7ajcCVRpz9jyJJzB6wQeDucVM5QqPnf8m5vkQEjXGiC",
  "key18": "3WH2mUfuSpiiQffKVSCWA59vf2qF91jXdv1t1a5Rn41bEsKcz7pEfLBafPthyrJddaXz1rGPjMCy2hpka3sFTZqe",
  "key19": "2FxuErSYRwZuZxYeLYfJCfQSTfB9Xy2xuSiqUjikYkPCXU6jq9SD1krWr7Mhm57McZJHMC7ba7DtYfRM6fCxBQXh",
  "key20": "G5HhBDzcU9fiwxJKbEZqdxRperQBRq8MGjH4DF1RtAM2APS8KWyJCsyo6DXqNrWr7WYSmYcQ1iAAAmKLecyMBqx",
  "key21": "5b6KssjhNGyvoKKoY5oAbBYFJEnKcDEDMu4h5yMurV1cfYJkbqf35yHZRx4ebPAY6dFtZ7jAqU615WuLyuySBoT7",
  "key22": "3TUs3fvzkNRPjea6d4H37bkiC1SxcJr5nizfdCkVaCszGFUbM9QqF5hfDzWwyN8CV6wWLJuhdZartNKfwhndU5M4",
  "key23": "2hoYEZud1qHWt84seYsVVWK1JXtSYPfSNE1KYfroGUFMZHsSebhSudAsHASmCTpcUtfUS1W42Lu3FZd1Ux38j9Xx",
  "key24": "4JL8xZ7v8Z1heeydaX52TZJwLhK7Yi4KP44jN4tuK5Cx8t7t49Rn4vqhauSRCKobcqTJgMfMw5Pg9CFHN2GVbjkT",
  "key25": "2NkSV3dbw4JNuHxBcc7iPrnFtSSN65dEAWL4wRzgDRNrdacUraYmGfuEFJATFr9RwDRto3h1NgnPyehGmaRRrveF",
  "key26": "2N9k8bj1MobDQSzhz5v54sn8fBeiST1FWpShYuzBocRACd6DV7mXuHuxfcqr8novh1Frs7DkQqnBF9xUq9W9dQCZ",
  "key27": "Mzd5PXMgBSrxTsU9x1ihJUVxoZqFPS49iigwTy2YLKnNHT2FJxbUzXZMRfemXuhq58NLm6JvnFjQGmU2mT218GQ",
  "key28": "41QBRyU7tS3KdD9B8Jr7QA1ukXnKZLpy8uGbu54rpBq1vjeaVUbVrdpeKkFDdmGdsDwzHL6397Ltf5ZDssi8Ycmz"
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
