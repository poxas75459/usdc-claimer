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
    "QSvy3iR9mdaNVuMPn3f8DDkojXSZVxVpF8ZMEAfCw3pCF7bPgCJU26QSZwjLc54sTzDQvm3uAPgrbJhM6BgQ5NL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEgfpgTsRjNtVvkGWgkMJAcL4aTNDKgA2mNNiNVUZko2nAQPK4f1SpZpPVs9dnVqt5P6jYARKF2TUiDyTjWKP1D",
  "key1": "2WkthytvafZosFLBBm91y3ooRqPGNbyB9a6vBAnd9BTpfwpZ4mRdoK8HGAKNGx9wwNs3BVtA9zED92sh49QkYUW4",
  "key2": "2MA2BXrxZAoHJtWry3qgUC8gM3VhLt2uqS5gTrGxniNTuYQLhAMWf83E1kWo2xjbZjZVJ9GaBFyzXYoV5Ce3yNu",
  "key3": "33mevVmRMFaTEoGVNKT4ojvcgYs1cgCrsSCUTdtQXnL7aTCwH5ZTgNkqoujPmWX2EHEuGETE5taZkhpHAScHUsnz",
  "key4": "4JnSX8DEmQ2rj7VG4wAgnhBFt1DKME5B899oPyB3L6q5mSwbg9gUGWhMr889RLVGPmWMYnQJWjigwvG96JkeiUJr",
  "key5": "NAktFExrAEe5AP4AhUbxjqDYixQjfifnwDN3weFJmusWvQ9YG5xKXdM6QNBDzjhRJYWH1eC2nGQ6eSzHXmPxodv",
  "key6": "52EaTL7qwvnysi5pwfbsWmHYkJaWjoveth3WDbTYieuykbD1btV1XQ7WNrriX3CUiVPxaiTxfSR4AYJvnJwpAac4",
  "key7": "4eTx1gwjreaHZD9uibJYy4AVi9racTfnCanSZBWgVCqoLkz6YQFChpo61Rspm5kyjMdKfrip2js5CZ6EudoY1jE5",
  "key8": "2EPrkEpWCrGRK5XHnUcDv4ADJEjzkJexm4oP29pmsEToWQWb2AJf2A8rrdWS8mPkVXbosowme1V711sSDtUW9ksY",
  "key9": "5u1hRoo1uAQYPUrwsFYxEZhkSLdPsJG4y7mYM7dVZwBPdrAYt47Qd7CNfxn4AGy124gxeBStEFMcB6CZaipR3nk6",
  "key10": "5RrGCRKbf7AmQp9pewPkx82zk5a5PnkgJZyKuuHF3B1SfG9H4Nf46DxuPBM6cZ4LtEjT1P2XCj3v9euZpAx8QhTq",
  "key11": "4E5AXbuEPaZcYnu917hyWURKF1Ahie2zqkYV2sVZaXCypMM9V1BjwcnR7HzthqnHfKwDTWgJ5wq9EZA95Vzx3f2e",
  "key12": "4E8z7NkjB27ajY6vAE68iBMBgdscTFZpDwdVW2wWfN8cf2SLHhxZ3ckdLjXALqYDpXPEhEcDQVJGk6McBznmPXBq",
  "key13": "2yjJWw1CjcGLon9iwR484nSuYHfBHgdC7oKEEEu5eBUDDXsoKgCZ5jMkrXDWfBtPChoWf1W7ppYRCTdhsuNG6deR",
  "key14": "2FALVzxJtaWtFukeh16h87YtgfQZBtrnWNtCrkw3Xxx21eQUA87TZc6eWsmowgu6ddX5GLJ5XwZm3AA5gVmV687g",
  "key15": "2w226AuyZcKwNTVtihfgoALFFrx4xnWvHY5PjpuHwkGqiVVDdMsRmL2eJbsagyqTWz8Ki6jkmUTHU1RQdX9EN8q2",
  "key16": "2v4oN5t2u3XLZsyivL1eyCkZ3mLnVdYjCSK2D5bWtunhKbwj1fNf38owUsKPJApF1wtrxZF51CDGHx7LyUYGXpM2",
  "key17": "52GdVBPjjtcW6GgfPn9cPkZ5eadXZabhtrZy1frPiZumQxPfsjKqT2xpbCwaJfSUEJmkE9oFmgTu2AqDhhvW2xwn",
  "key18": "4zLz89vpNWmR3BNsrhesaZuCPTsXrbS9t7dZjHLuTz2Ms3YQoq2oXe6vsVKsys7wFLBZ1PQupu3WEXuQvv84rDvs",
  "key19": "2w513pb9hhbCY65esET2hZtZ94oY9paJkc9Dpr1CDoMedDVWdY45YhuaFEGEjRTyLHRQNGoJKS41GbEXvg51BH1u",
  "key20": "5WEKzmRKGkFVTCFAJMMLrJgrK4war2GqBoUQjyc8tWiMbxETk7KXqy4Zq5hdrRgDe65Xj1jQyfm9L7pZHkc1LvyL",
  "key21": "5WcGsKXxPX4qNWGTNKXZFr2KLocyJj1jVbSoemtxaACCM9oqnYFDKLU93wzX3q6Gpox1VQhoi7KumEYeTAGUXfi3",
  "key22": "2WXzcNhvtNJvb97G2TtUhdMgS9JgUQmEYPm1JFg9Sb4mh7girwjHsycmZWAotHq5eqGcLN1hkqMgNH4hBDqZuSNZ",
  "key23": "2vV5jCfMtJYgVyshwRmUMV6yYG4QFsH9hc2GXnK6JSrjaxE79CP12f6oDCZBGCxqCUHru22kFVvsXLpa6RZt3V5w",
  "key24": "h4oCEJJNXqbWQnCX39bZoSy8h3dbaYcKf5BEbvJgMo8k48W3bt9rz5SQ8Yi6W7hC1YxdZ4E55eeStL6YV7ijNBZ",
  "key25": "5CvwvuTcBkpcdVhk4iH8acFQrcDEBq3FaRrXS2F38KJ9F6FAAjHzxGnVoWwnx1SRmxKN5MuThJJJA1mqn7mxLHMt",
  "key26": "5eQYYDfCGDxV71JYDvH8Z4HsTMTNgkPb7yLKrcwzEgGNMUQ6r7oUG7ge68g71LWvRwAWRT2GLf2U31A56edP5PHr"
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
