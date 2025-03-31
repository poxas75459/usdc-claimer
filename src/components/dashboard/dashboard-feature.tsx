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
    "2GBYHs2De5EAyczYtvToWhHu6fQyJFi5u4xB64pSadDmH2B3FVtNnprNWmWxa2TWJfWkXYwbv4E8qgPUyYjYpf9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBbzBU8TQW8qTrVRX8Lf1SiD2eHuXskvYNx6p1FQgNXcX13oyw24m16tuZ2p6jZAnpMhsMRu3nzEcuFhZuFKa2E",
  "key1": "4njmJejLDcXEWFx2qLhXDSVEGAf42a3xNeSEcgfZkdcBLGf4q1nDKV3mryjupHKbbrNNtEVBKHQTu4DaWfgnrAZQ",
  "key2": "GYYfQQ14edKJsAj4iMfizkWgDk6BrqJErZ3FBfs87Qdowr98oGtdbYoEBW2fnS1ez4XF426yHbE5pVHPc8wjGpM",
  "key3": "4JXidmsnyiLyyrddGT5AFjni79FGuSX4QfhzgkJAUftJG1W5hUdcziFtycK1VDh2VvMeKZngZGGV6R9kqrc31CpX",
  "key4": "e9Jzn7MGJ6ckLGUxzJGfV1EsU3wbkwtP9y8VkaoBfJYbbt5mmkXuQvC32F6rfYkWAJmLHDFaUi7qjPGqWi6mUBM",
  "key5": "26YeDyzy59cM8b33xc1fa7Gx8mE2d91RzqdrCSTifaCXpmtwZSovVxyybWBGNjAgXbUJWbuPKdpkHz9kpnKiLzAU",
  "key6": "2RKWNWJXXKnJeMXUGe2pUDwFvRAQ5Xf7kSUWx637ZUKNtV7jvBENEQQPhcLYCqyhZAsbB8Kig3eFj15bHXtPtV2n",
  "key7": "2RJ4NgkGMKak3si9HRR1YjQJoe8z4urEdnU4equ3eeTNxW21XANJGPvfPfa9adCTxgGPf1bwC9SdLWvr8FqmUjKf",
  "key8": "45UngQxTLZDpJCc6qwqoJr5CwZ7pyFyS8oh8vuyZLayWXucBPS1tCp3ddkSUHRzSGd54WJ7nBqE8dBsR8NAFtGSj",
  "key9": "4PkLjHp42JQaH3sm7dVqCoGsbVByzUw7qxfW9REAJmYNRGgQArkwLYLi5eK3BP9uy4JyQXdFziNzwdy3BCDm8CwM",
  "key10": "4pSxZNqdrQ81MoGcCVGV83Csk9ido8caTg73EEQPxpKXTMPGAsD9rJXyYKamBKuEQJiNVmQYc6UzjLgMGa4vL5f4",
  "key11": "5xZeRbcvH892uJQQDM2a3bagF7DP9RFpxiQCx44Xo8cXZ7g4dB3YEJTUgWnyycw1xDGaZ3Fzxg4xga6N28dmQEy4",
  "key12": "5JZiogwGFqTV9fAEKa5HzbDZ4JetRY7vubf329zhwrbb6LitdKnsgNhqyi3CwZepEyj81sdLCzaKTXTym7kEG9pZ",
  "key13": "49jgMY2AnJe1AtCywgiokNjsRnoWbukRUy6ShGvhmxpWVRdWwZXkmUU8ms56FhVrTpknLTxxo3EbQm4RgsZMGNPU",
  "key14": "56hyV39uQvMZnNnvQt6ajjGN6s4y8okune8Ui3aioqervMqsUrf8qHvnKEE16FL9LgYpkRXeafmJazXe7mZewzaw",
  "key15": "w7tB17wcDy4qYLxQeyKqD8noG9CugsuejL6PGNsfHAcLiRWkQa6SzM3iUFKNHFkfo8QmGn2mqbqrxKYjjyHGaxN",
  "key16": "3LHN7kL7BPSYnsAytcnFcs4eC1jw1CePSpxAeKEPNejbgXxkG1DoesTiASWemXLdiT1GG4FNpjBBSAa6SghkADu9",
  "key17": "2UxCLmYm6JWFi6Fic5Er6kBUYSXMJYrM4GChck851XEdTEv7PJS1BA4qQfua6NSuH2Me3osAcWJVJ1Csy9sSKutV",
  "key18": "38WHnUdAM1FJtdgk2ZDZ79trLx8fBCQB6QP5tUfbqUtQPWDcvfS8cwRZHXRF6t6CBVJejNKJjp8CfofgiWAbE6iy",
  "key19": "4brdgPhiHBqyJyH7a3Gc2oEYTHDZXRHXDcwdBhEPA5BKnGKEdEkGPpw2GgMHNHR4dS2rKD3Fr5Vcb1usPz9euPS2",
  "key20": "5yhtZXBcB3gw7vD1ebDL7R7Sf53Tso41Wqxf7LEuPtPxk5G6h7qXoSgNqR9v9P4znY5haRwi7sjK8DymXGTiPLY9",
  "key21": "5LFzuqGW5MUe1g53EapJiBR2vedBnvsNanGY2NboQMCWnxaBMikFqvdv6HcGmcv4s4fTumrRijGV4DpMw5HonZbM",
  "key22": "2DPzTPcn3HNo2RVvnSXQ1p8FYgsKFXQubaWAcA1CKR1jY2AVULyStZHhqfHc2gki3f7fJaca4XSNhG1aLR4aojbv",
  "key23": "nHJDXajmU3DXQfut8t55nUrxHe7k9e7AUnD51uhifMPTvhm75RbiiTyVse8yRLw8ibzwCiwV9nSU7vWRL2k7HkN",
  "key24": "5pJEwrvBcz3MpP11AdFeGoLN2DLCKLheN4z7QM7b7n2V2it7kYoxF6vN6rFdLUqkp3LzFbAQejAHyV1oFpNFMRih",
  "key25": "2YqDJHdHTNXznxbijbPd17Jkh1MYuD7haFsFc5zEJaCan6ALUEWkqnAua29woLjomxXf7UyoVdjznGdjaT4WTa6e",
  "key26": "2MF3LT4jyegyL3pkviA911Qw9fs1thjkGuNkbT95vfmcC5Gipd8g5xt13om3WbUhjgetSh4DWKgWdgsryaqPgVEa",
  "key27": "4mfkYEiN4HReGDgbfPRBVphMgSjmSZ9hMN6ZExTKp8XGtXWJeD6Ag33Y1kYkiEXVEa56xHUSFgYeBjzghbheKVme",
  "key28": "3Sxus5P9UG1mAGFcU7FrVhEH2vLbbjun8xwE7EdS9HFQESw3xkuTFum6Sw85uPTRWjafzbjNgoJCpWzQkP6QFPc1",
  "key29": "mtKooK3Yjb9o8Ta8gXBywEnHn8zsqA5nbu8JjnvsD4LuoDjBKwwMf2wooyRE3rnTrJygsz2xgLB8px54LCqvYmQ",
  "key30": "2zFeowtCeHHqC5si9C1TM9niB1NwtgiXUq5aZbPGbZwpSfW9hnR3MNY9Y8gCiPJde6DzigFUDG5M9vxUkQBU3qAF"
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
