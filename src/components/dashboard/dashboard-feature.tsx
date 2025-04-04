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
    "hiiiqtLBeN4coYQEd9deMUy1VnSZyBLQW4WRuYqDpq68cXozvcyJTK5UjrSWMTgcseW9CWfyxkbDQ12VAxh2A2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qkYEJ6Nc3cQtgNTrr1Gm8ooacPc2X3mwq8DLWnex3sKyMZ3BUNyc31HVnjW5c6AYhKdiXkMYQBZHZYkF33ccjk",
  "key1": "5y7kE8qrADZfZpd8xVfukorV4xoc8v7JY2ZPagqvVGzi9RGs9zgrRrpRqhd8Z2oCnPCqXtj3QxhauCMdBxm6LkZE",
  "key2": "2fRzpPS2W4rvfHs2Jwwkr8fdfZCUqAvVtMJS9eoewgSzyk9bPEcA6J6Wsf8gmreboxicrtgB37Ny4sjDEdcFxxE6",
  "key3": "5iq6gTH6Cm3pnissidVUo5qoXtzH3dqWbAMtCEU15YmimbN4vZHcA5GbTiYkf2YntJBvcpXubzFmfZ3bkrbcVkwM",
  "key4": "3Avy3Uanbgru8dF1UuFznA2Sm74AaB6xKkbRYaWuQUwn24rxjS6baTywXEjsKApEH99cQyU1Hwjn5KKJdmGXXZQ3",
  "key5": "32NkWryxZ2pdpnQbN8dPLaRGQBV2EMfqDp373NV4yAXpTJgALAdnrcmmxGW1M28eDSx5dPVMhrCtrBNf5STNZ53B",
  "key6": "2NHE54gCTMEuVBwTf6cRVDaAKRMBnLcumtjThmKYHQf5n1qxeY3qkq3G1MJRMKT6GCZaXDK8fjsGNXDyTBiQgShT",
  "key7": "4T89gaBfuAJFrHN886nDz5Ur9d4JWreJ52BcmKZBbSApBMqBbgnShGFVnDCtcffzDXsG46mdsETe9z4hTzq7azZ3",
  "key8": "3GWFMPfQsBBYczW5YEuRbwRCj4v1mponMtkWcHxyRCBWHSPUAV9P9Hb4GxoyWJA3vpFzpfocxrC3M6DNF3rZg72a",
  "key9": "mjoeEDZbzjTkd2PNJn3JfGXs2fYX8U3psJXGrUepGZrGyNWHbSAJeYetZbM4fTBYasGv3n7n7AixnGZiNxoZvZW",
  "key10": "UiD8Y5C5F3wzNMRcYcLexyePrWhSu77fS5Z6878YDJTvnMFnEBqRiPUxHAowYohjEoXsA9vmN44r9jJmNja3R7v",
  "key11": "4eKXPFUYMNShEuG4muJvRVxQujUhpryrhKqFhpQpotMaoyEHR9Mb1GiCUkWG5RVoRWZRRrqZuxpSJCADSnckS3q1",
  "key12": "4WtjkBWugSeQBGkzwpZyXhMY3YvsLoZYELBDeMmdU5rWirhxMVA1QBcoUJyHvbXS6dGv85YDiBiNJmJxm9e4t3zC",
  "key13": "53AJp9NTgy8fp4cJCKd4ckU77spCiSAKzNeW5HcAnk9sbcJUf6T1yhDFtufd3fovYunqX2jeouRSuH1GCeEEU13i",
  "key14": "3XdWw3r91p1nFhfdb6gsoMotZrELUxXdmU9cgywMrp7kx98JrwE84B8PSDXAxnoAA5eEvTkqbtRfsdDYz18meEfp",
  "key15": "41JDSFWGS739Xgx6H1HLMswrEPDF2Jsn8ftVRFiD894mZxWhCyUtSP9gMv39N6iXcn8kgAB9VTaTeH8D7yTTZhF5",
  "key16": "4Tu4iTTrBKVDurkXB2tiDts79zxD8YLYaUAP2UTub6SGeUUJbVvGKSmLxeYAvVaCiF4A4umquXw5gK4GEXfRG8iS",
  "key17": "25DboTpucMySWEpSPofbB4bodxaSXPzJNZyeeU9a7YsnQCw8Xv2mK2uCtFEXbgJPTNmYBRpiDX41FSLUePFfYQp5",
  "key18": "DeW9KzX8ttS5wRLynSmS7ZhSjeCWQTcf8JVjp6egVePHbzSUZiMz1x2AiMSn3oQ6UHF5kJYL7ZqpxGLMyhmVNPz",
  "key19": "3Xf85NPrpgTiMu1H3edj1hXBgUz2sMHi1TwKvgMq3iGtBUBHMgX5YJpobuVFikV8C9LgfJtNNHgwFBVZgPoE3os6",
  "key20": "5PeKQG1Tw2nvk3XqcpQu8KB1Dbm7574uUeB9NtEWcue67qbs75JN5yrfpKomGnrCxUq2y9LDFWfc6cd9UepJtmnC",
  "key21": "3vmg6WZSb18SFQQNiqqDCq87wzHnEY8K6QogZ7Se1SicjR71jWAErHW5TmMPkGrcTJ9PmBaJqjdmpA3xWoxVzdxY",
  "key22": "5dvYJQBmnVfCA3ri6XpkxRzZCGbA2QAW4rW9WSqKN8XXvF8gfMzevrPUTkN2TtmmaAK3K3qvSPpJEMVfZN18cqAB",
  "key23": "2f2XM7pCt32pNMAU8hPFbpsPysuw2L8TQKKYyjwHETd83G88fQZeatVcNnqC3s3dWQcDBwjvAxWXwBunUrwvcM69",
  "key24": "2ZkdaPdonbniCXV4huHkp3pA3iAkd7nyrWa4xcfNi5d3YLydevQ6dutwP18xrodaJXMdofNCSa8nNBd8tkXVt3YB",
  "key25": "45iEwtuwb9xZ2mdcHyeaXTGNDzdvhhdPS2g1nVXEy6VpVES61CEbf4mjGNFTB7LhkTemXaSUYxpTDQSnopUCeJmw"
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
