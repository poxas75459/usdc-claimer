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
    "5e54EDkLnVMmqCdetWUFpbKRfNcu9yj3T3Vh7sLjWMU9TpZnwyJBa7wbeFWnH4WRzXDHjANr6iDMzAFbRiwuVR8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdDFj6ba6k41nJiqHAf5wbcnKWpWCPgTzHzhdQa4FCazJhCCDL1kp9EUc2H82GAFT7guVJoqEctYxBCzCjQEFbZ",
  "key1": "3cLrNenJoYnbqwMGJBnkSagBszNFoLPB5NeWj6QzqoUKXHs9w4mGiQGbt9VApHZVNQuvKWk3fMpnd1yZEg3nzUZD",
  "key2": "5JHdAu36aNdSCGiE1DFSZdsbApf1qcqSriQzgsBfD2ESwj3TTtgbWvPW3hQmGgcUDtHiRtPxX7o3Y5yCEdWnUEKc",
  "key3": "5pn42rKpAGAFWVVBJFyt7m4jXCZ3SQvNEb7e3RK26BwAXrHs4BaoR4P1NLVCtp2CtgDdAA26PDGiBGQv2mA7ZSnV",
  "key4": "2e9RxLoY1YydxvP3ke42xxtNrEvKwGaE8hzmLicQZgupiKjeHFg9twE6D2V2ANbAyk16JmdfEiVTpB5DSgddZxNN",
  "key5": "4bibZkFcpMAB9P23zGEMkdK3EWUQpDYEBCbFVd2EhYscb5pqFXW7hoAk1gWsPD1KyWEEJReqeF2HgLNV59hnsHbb",
  "key6": "4TWk5dxi3q69dUrJnCUJ7bq335Tu5tSj4Wb96kwQVo7b8kJQYh2dQvksbpaMmkxSJnBpdwEitJGPz52RQUppdce9",
  "key7": "hSPikFUxrEGKYBUk1dJ7D4M4kLYh51Qe2x6ZhkHF7xTombToZvmHafwbPSQ3TFWEFrpjdjNdgtupTDaAdCZ79bX",
  "key8": "3fCMzTL5eWBfyEHqVt3SmJmuqmwN1CNhG32rw9v8dnBrMYav7FLTHsUQcnKCiPpzqBVgTF5NjbLUhUuzU5bFxQLM",
  "key9": "4gACu6gHPmMLsaFwn3FAfRoZQ3rh4ncNwuZVAjxfFcMbqNXCkxgaLM3pftzQ7HjZXfDBYNTb3PMfzGrKnRbt1K2f",
  "key10": "3yjZ2bU7UsCLvQNBgbHXf5j3Nufk9T2JCYLjgDH2aEz2FaoSJAiKBPTSAYJSRMvhJXjFKc4BqY11K3hoDE7enpTr",
  "key11": "g4tkqe6EreAPwJfA1JDgikmwLCSwD5Vu5BJ3qv76zHzz8VKjr8WRJpWfWvsXwU7h2cw4xCUPhsTJSMQZogatMPt",
  "key12": "32ru7FrFMyb4tCMcXrrfi3MtoHni8YUgt8pGst8BVf7qMf1os7r6AmEvPt9Mq8F3uw73ij4UMKTd5XbhHF6y94na",
  "key13": "5e3yfwsMEyetuq2ErNtyz9FCsMfV7yqKjdB5TwJZK2SfvKwNRkJ5bbp7J8ZUWJpgwXYCNrqhwKAwcNUfCGpL8CqL",
  "key14": "3cvC9Ncg7P3j8hEsBG57n2oW71o8sfXQqZU5P9eH8MXnHzjuyq5bjGdQxif1nHawsqWiaokVVG98P8EKsVnRf1pJ",
  "key15": "3uY5dqpWSHvKek1Bm2yhAe76eLuHHE8RZyM4QQmK1ej2VgJkfD6SXARnYzDbrkSjdgH8f2sFHKqCnwbb19N34jLz",
  "key16": "4Krgx3T4wQkNx1jA5AK2ZLx9zULJx5WoA5HTe3QdCrAbufXucMk49QS2szjiVba7kDxycjAWGUrtQVgmJcpYLzEv",
  "key17": "2ZrJK2CNQBwGqMVW9urSbFdUqvbSTaMR7FAGnYwHHgzYYyuhcGfiZNXsa9KD8n4XFLBDgFL5vDPRUuVGQ6svLs49",
  "key18": "3ioKGguQC51cYQ8DoQpixZ3frQQo3yKnBZPmvAVGPg9Um4pnNkgmYrQLDx36RFCx3jmY8R3HNqTXFmehicis27PV",
  "key19": "3Fy61mViVAPrauuRPJ9dZ93NhFzmEr8CnD73P4gWjAi3TeTLsVa7QvmwfjXu1e6wEu2Qfk4Xf5C3YV6jX9ijvRc1",
  "key20": "2WZRwNtbpDQxq5nYNvQpqjpcoRPsnJz3t8rrqTxTgHCoERUe6WpMj3BUP8txtQJCKssn2CbywauZpRXauhTu1Nic",
  "key21": "4hyHzKk3hMdHk8DS4t7Eq5xsSS4YpNj9YTf6xfYuwYNY24APzhoi8BBQaYD8QVAS1UTnw5ej7wiMKVwu5PMDswZP",
  "key22": "5tEbYLEbNV697PemQZt5geJjiovj4ykaPWL5gH6eCwfegKP37VR92B6Wv4S2Ra8oACM8dxMS6REtoqiJKj1vxFKt",
  "key23": "4CFuHZCj9k2yja3Jk1VWStvK159EFXRMcZnH2Q3sH1m4CFGo8uPsbwsr6VkfvD7H692JRSuAomfXgG5zy2v5Gn5f",
  "key24": "5z5GkuQSEo9FrJLVWJgMRzXB6yF3vrq6mcc6ggnEQBLCPPigaRChuQFQ8k6azuLArNj1R52oKsM3z6xBHdyDdgza",
  "key25": "TRAXn9WtzwRx1MUBWfQpfsmnsNkNgXPKprH46qQP8r9S9rfLavx7iuvhVYPdWzgXBbMFWcNLE1cET69UVweqFxD",
  "key26": "5ABX433oN8dfjuXaoGDhJ47LHSowijXVPA6wp18DfDCAhHDMZtSCpZHBCivjZVHtXqPGJMZBCXxBgfBWx8mPgcKN",
  "key27": "5PGEmEerZAawpcU9LyrqBCjj91LQKefBmLKPTvsJ1R8ai9E6oogPwPPn3khyvac8zpU8DQJoziAc8W8WSHdwEg8g",
  "key28": "4Lpm6ueo7bkMNQoLMUm74r8EUp3WBZRKGukZgKPDojhcTJbbkFTiH8C4fDtFNv4cYiXcs7QJWXj6iVX4voRZwpuD",
  "key29": "5A6KS6Fs2K9Ct6z2yPXRS4poNyHgrENcy8kfsDoX7FmFW6TyStySUXRRx5CqENHGrAe29ijdtkCV2dvpcwjpei2P",
  "key30": "4sAbtgmEQJxgPfCMPEShcnUnKua5Vgtk7jTptEBGtRzwGazHupocoTeZYGFjecN2RVNjaC4AaEmhVdGZxLqnxEdh",
  "key31": "38Vc2ApyyipzyXxaNTJrUS4cHiFwwwNyt2e5pHEoTtBRdBTCsXD3TDTrHkRkzpcPQtmKFggRi2Bac96Xi3BZX1uX",
  "key32": "23PsBZHckxk2GjvaG7Uqrg9kPccf3gHNE9dBVY61J54o8LV8jkAVxZ8zobn12oBwiejN9QRJT1hhtep6hGRm4RM3",
  "key33": "maSc9D21ShE2kEqFCZ8uHxEBseG5TMoKYF8fBFmMkhnx4WCDpdFD8DrzoTHK3kQY4fvg19AiywssghvukyQBDDx",
  "key34": "2sCDxNznyfmurxSnJfEAM5TK95FaoaeQYMtQRLSThMwBMVwPGfm4A9r8L56AzPFbwTVZ4BTT9oDA34uWJMHcbZnn"
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
