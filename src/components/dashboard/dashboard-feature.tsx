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
    "3GhMWqPYWz4rYVF16tdoJjSXy2vpvbVQ92XXdhBMjJuYPE5QxufDVgUaKJ7EaRFrpKJ13rDf6riUo3kk4MSDrgwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBLNDH1LUCpcNrdHa64wgQ1hUHh2kdZRVHCTamSiLyEG4M4LtTkxzNa6PgXHxVAyZdyu1xkRMkKb9UFZR5a6RL8",
  "key1": "65UuTMxEAgxzJwVcrW7bFiDv7AqhPsS2usd8L4QGBfDRFVZB7wnBWDSUMpeVyWW421pE3ZR1Wcru2GnRF21MuT6u",
  "key2": "62wENEqEESV42XT97FU5ZaozX7KsgJeYAeU4CAEjXcWf1cSbVNxQCTTTd5JG6oh9RH8pT5q9YpJ88U6rvaxb2Dt6",
  "key3": "58GpdPRrmrBFN4XAug4gB8qVcGtGengFBhziTTRaHTmJnciasXbRcDw6vKRQsJwF5YwFgnQtwVWZzGNHQCRMtWpo",
  "key4": "3wDBRWEMPfmBiGq65oiah7MhVspn2GNhCvLmZyep6exmv15K4d4TmiJs7r5TKNphsSE6T4qHRs8g4gBXnTs75cQU",
  "key5": "3SB6WUzMackqPY8jN85DsHVkYcyqB8JoPPinsq9mbSfWmczygNrs4xPfERY7oLhbdr2Xzr5ZwpQmLAhZA3rmQ2Bn",
  "key6": "2r9VRvQFpDjH2zPPgNQu5cKvPHLWoUUiVF46UHBa1LUrw3LkvtYuTPvxprJG4PtxH2KnpWkdw9Lf4BMWjuGb7MR6",
  "key7": "24CuxaesuEB388twfU4eQ8pGcvVonsHS7xgpTDeXWfSc7jbpiyw4WTcMiA4A2NiPdCyx5VAEjbYs4LVQSjRftZFP",
  "key8": "2sDZSm8EmhBmfe5TgcwcL8PTTkPe1jXgFa8vrCAKQkNJ6owbdbTgqJ3bv7zc3tPY761LcEy218DcL9cbhP3H34aV",
  "key9": "4xcwcESkJsmrApBUGVqxnmB53JtpuHWZFNLKw1N4YMRdzX5Lui3qqYRV3RKNutapUc3V4DFWdjujQou32PYLAN7k",
  "key10": "4CeRPhoob2wYKisqrzK5ogU2HYjjk8nDfrnDtc5bEBPgG6S5GFwKoGx5kkogHkUfXuQxhttm6yCKpQvNuqaVrA1H",
  "key11": "639JHdAYfeFz9ShwZuauqxnC3HazN9ZQWjtsdYBrm4NP2hTaFGU4FMeLLyyfPo7sebtQWjAFQ94U6VPGmXsrpaVt",
  "key12": "46pm1ZwkWKRuJX9roqZqDhsaoFJUuTE8kk8gz9a9a5NjUiuAKYbgVidGu1eyRrdS1SfcWxpERyA8kKozrvD5v5Hi",
  "key13": "2hymdRCVEGdgjV6xwyocBobVY8HSkup2K4WpWT8n5EkcWgve2sj4fTM4zTUxLLCYLQ2mzVFPjuqi8RzVNFFmBqt5",
  "key14": "67YJVayv52tGtvip92fFpzqeUyrdoxtosUXcYYEQcrhW8HXayjuiBNfpxKUu4zgeg5vBRa4jL1HHrSEGn6v4kSF",
  "key15": "4JckkEfMu79Av8gNYiYeun7AanGF1c8LMM7SUxyA39BYWv27zZUBgwRgAo8Xzso7BHEzLowYCsRCP7UuJNeZ8emA",
  "key16": "3SihA76TXv5NXCaiP222TDxviNUGLEtHCRRydZ4fkgJnPtoxiDNbCJA59o7thTkNkcgbJTHZF64FELVsEjnnjFCF",
  "key17": "2YaFW9Ev7abk1DUkW6kn42midyobCsMxaLqn7d3dMCazC6Rowcwnjb79qvy97bPvCiJ3Jk2YinV2x9cPmrGDtDKV",
  "key18": "2ZZDE3P7qvja2QMofRZrs3UmGxNfcgzWHpSBTWDxDeE5yv434hoC7aRVGVmC2QfqwrV7VUkEWvrqXSJEpmBWLhWo",
  "key19": "2EzFgBJyY5oEJodoEv6gTM29vmJij2b2qZerfG7QnesrpvacxzNFb1qxvJRkZ8nmLAADfQwMNrFfAR3fdPA1wRhs",
  "key20": "4hxY7xxtCLzgBNV9F33PL5Ggg7ZAw8aLPPHhF6uaLeYCN9AiZn6EveJAwBFRQv4TUCCsJMKM6MzdkVxgmANAXAL3",
  "key21": "2urYD26HoKA5twTwN9vHKFpz2XMK1FWGTyqiNnyVa72hUz6ASvYz72Fu8KbecXA6dB2ERtp8zvDXT48v5M2MXJFX",
  "key22": "3UJcC75HMmeEH7P5wqQhQZmcVEMgyWgHeXdvg28x8HUFXQadbJUgApYaiyJMFcLYtDbvfoJg3yNjWU5KrL45AbYR",
  "key23": "5gDTYV156HQ3rp6StUv5qh1CAbxBiUbS8rDGPHzJqn3zFf4X8Mv97nw6eC16u7uKWWTsAUEQowZatrH2r3qg96tG",
  "key24": "RSxtjgauh9EJiVE992jAfXxyD9CmiMKtcK5TRQ1ZfSUWnuU34PpYdcmX8Yu2yty5VW9DkLSg5RMSxAZ4b3dXwtc",
  "key25": "5JngrsfRLLPHS42dBy97fhRgptViMiXCoMXou3oxD44TRZXqBKtq5rA4g8LX4qmxgv8kCztPbgY1gCBGZcBKKQdr"
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
