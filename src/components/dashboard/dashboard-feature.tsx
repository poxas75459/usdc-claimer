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
    "ZKiS6LTcKWfDCpsLV1zHDrxsw2SzYcCogT6wuBF6HfjUgPevsHPdPRJT4eGBNwY6GGKJJJ8ehwC4FnHPXVwQa9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x2PCAHM8QozZGmiuQp15YDhv1SwR77kukB9kvkL4ZNsREj9j5GkAk8SKWBVdJnMhhtP1RL9S3p3y9bVnUnhMjpP",
  "key1": "5JxM2DuJVpKzUyDeYhzaYWKyE82Eqg5Kd2pvNnQp7fT9eJn3fmKdKx41k6eYqCVC8656kgykufVbrTfLFj1HY5cP",
  "key2": "66ToeyB4qADiTMck3QbsX93wVxQTHxTC6ujJGzEs1E4ZZfwctXUGMG8nPWdjMWwj76zLvx2K9c8w8DsQ7Hs9NZif",
  "key3": "bidyzP85BCu7UQDju8fc7VacDrCqAAHXf9dvSDEWfW3mqbe2eqa2E7yhd4pRdViopjKeFduwtnTYmL4jSxkmTnb",
  "key4": "p13ReSnbQqRuqgTehLX3PUYhDAvCcw34x31UXdgcWrDeyXiraPzXA9FRNrLRhLUTjGp4ih2N3F9VKoavsA6VEY9",
  "key5": "63ttz9q99rmYmE1ngeF3LHbWSeAqBSpPaPobRpigfxumoTKjWNUAH6pdRyecrEiu5WSTNwtPeKcvVwaH5dxBVFpL",
  "key6": "46tjAjUTeBmKKcKLyarhxB33ynPp9ZrzGBCrbYEjRVrLBi5VfsD5WaZQ8p7z97VmzpznZWHPwjxvo8cHNwx3uZqK",
  "key7": "55AB5nfJSdkvdhDBKVZG86jRX8thcDQ8MXUtshnoZTCPVsThCGuNoY9R72V69XYpzjBforpfD6hnHZM1uf1rR263",
  "key8": "5XFLV7S9g7xHX88m8wwuUr1GVwmNfxdhJFLtrZqAswh4AF63kUwTnizpA2LpkoTenihyrBqfMv1w1iWNhgBA8Usi",
  "key9": "2DwnpX7Qw5Un2sMDGeYY9MDsiyLF2afzbAq963gm17PnKpo7L1H56o2kJgc1qJs1jDg87XGyGfErezCGJYJYYt4g",
  "key10": "4LrwFStcCewc586Yoaqi8a7W2kyQTes2G1U5NhFqS4BkT93LCyJfRCKwMFy4CwysWusqu55WzbwMwcEUmKsAeZNg",
  "key11": "4Zv9yeHHwsHwpLRcsY2EqknRuygzKVdH99bKYSrTrTsxiUxGdii5HkioH8fRCPFB11gt4x1BV1G9ZL393ddDUyRy",
  "key12": "2rQgP4qNb7y2wMJ6x3dhxt8RNQRzwLwTpwoh2cnfWmZpd7bc5NRyLoBXaRoECB2GmTbgw4HacQZHfpAJ4rLfgBgZ",
  "key13": "5Z97X2Nm2Pucks5TBy15hpX69fY5TmXDQFnCNGPbrs4bcU47Z86zMkaskNBoGxMu6LvDMZdLydw3tvW7b6MKMSK",
  "key14": "ngFDBWoCKBCV2wqWBCeY4zJ2Ry3FJoevmyirz5nr7YvkDU4xxf8xE2CwKKRLJTaHiRQepFpD4uV7spT9p918TK1",
  "key15": "F3hu8vDtePRJS4Gb5cvr9JLGQh3cfaYGbrb6z99TjxV5TncxTunY6YbrkERToq8a4ksedBvPrQbqmvJ9XscUU7W",
  "key16": "3fWWeFozwbtjFjbfsfJTimCfD6C7FyeucreMfNCBFKd2v1QhwPdF1S1dwBTJAWaBuiL6mqKANLkeQ8Pzn9uQ3Jc7",
  "key17": "2vUEQwPQHC5Rw1h9g5LJy4igjmZGjVYaVQVSLCeXh8MQ5ehc7y8xot4cS7F2nzXFEAYektG11CAdqKyknTzzRxCJ",
  "key18": "3zavSeRB2pHBnspRdUsiKpbJfRGxo43mNTLDrS5kpiBXH8VhsGuoTvEUqSHeJUhvRARhKPFzVZSEy5s2TKjpTmFS",
  "key19": "Mpu9XKmqJUNDmFXAUMDyCnPsRqWuTRDqohqmTFhxWSBWAspD8Wmrh7787faPFSJZHGBs7Rp9LFaBw2TiNpe3ysU",
  "key20": "DBxQMeMsHnCTqft53LdMNR4KJwjKfik3iQAxt56kJhgaY9Hi3LPSNAbAzyiAVteYrsg6Lu55cLp7ckcnES6C1w9",
  "key21": "43bivaN6dRikwUHhcKboFQfwVhAaSbrtqEh4rLcP42mhTsHe2bSG3fiAzx2GEVfQiK8f5Y3LpCj4SnUbS23jivMK",
  "key22": "5cCvuVFQeRC4ywN5hi2fcTqj4FQXehSTPUNUwF8rhNityG3sXpBr72vsnrnr47Xfd14MmFnSxkrJEcDCoQUKVqcf",
  "key23": "2aLa8n839mYKXqH6c6kE2wEeE1gYbLidhgCSee1xHwkApj7MSeEvtcHhgDod5s1tVoMoGTmTe6wQbXt3idCSn6cF",
  "key24": "4nXsbjNcBL9VFgononwnvddgKiGUxeupDuEPkxQj7dJd8sfr8vffik61XA2wJhxTewjjJH9G1bKuk9Xefu3CTbV1",
  "key25": "35y5ExKB34KrVmSoZdqaJJk7E3ARGMaJ5KdhECUwNk4k3EUZiN4Bst2MmNZ579Umv16imJVtMbszUFix1T6KVMfX",
  "key26": "24zuZZH2G23BdhZU1hu6E8UwhxVyxFGsK6KnBsXVLqsjxf2cNWdAsrCKZtjVnkGbpfZnC12TQKpHwfhNcAkwPqWZ"
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
