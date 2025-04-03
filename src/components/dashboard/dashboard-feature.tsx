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
    "3hZte6tab5kgPSQgxxwraE2ptVo8v7Xnr5WL487XoxWNghhyDyo1XDnPdMk7coQmaUVqVQVTXXVHvDYeADwANQFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRV2rtpKTCwWjAMxR3L1aNDzm7GnGx8XxisrcdmhQ7D5EdsCoCDRv34FPcFWnPAnsdB35iNjDscQCTuyxmxqYmQ",
  "key1": "HfrbFkjBAMd3RshtDT24TCFxqtACa1Goig8Rn88J8zeqBhQeESmnd6TsiJK3HoyxEBW2P3XXT1qTJrQoeuRWyG2",
  "key2": "4E84LfoKJRKEuXv3vAHC9QKuyyWd7GcBfjrA4izYMyhELWQNhosTGuc77Xr7wTVmMLQ535aCjoe83pS8woiwuj7k",
  "key3": "cQ2Fpy26WfhxBzXmsDx9vFF8c5yRcxNNAhLhv5GWYxWAWgPzLrHrVpVxKnT2MckTAUUU6vVFGuPNKtZFaiSGjpk",
  "key4": "66vddRBUbu7JTsqq1ypUhdZasPCgNDjiCBbRpuKpFpZDbJU3F9gfBiqpeiNJ7bV8F1aTsz5g5evNVqUYBb78gTPz",
  "key5": "k4yRYEkdy6pR1pCZoB7pyKtNFVjnWixT4xg4mFonpJmZc7ZJcH7ZUQDtWGhua5RzD8r1E3EatoXTxfiYQ11MphT",
  "key6": "3D8Nt1tLjtEfmEZu8dPkMdonmhSTCsAt5QpQn6DTFhURUr2E2bWTCzqzB4cg7x7uXU7VLsXnR7ZcbyxaqhjXUzMG",
  "key7": "3wu32GK7zM27kPmEFMU9UHKE1HUECsd4eMrVDbcCEk9NLKtnaAJnLNmGMEC3S7crnxFZme2nQuhpHZi7o9b49n9n",
  "key8": "44Ajf2ccZ4qn6m5xvEqMSECwCCknRCGRU3B71FyBQpVppeZXAMScmULC4xCwkk8uvMP8eQPRjAbPxqzXUN3DHjpa",
  "key9": "3Htp9LgM5NtDUkzqnmyUApbLNfaNMSa9FWegxhJXTTeg4vBr7q7u36c5h615E4zoxSeyMkW5uG5vy1yXZajGYpbn",
  "key10": "4ZP9p3bca7LTc5XKQ1m5xtvpfv3zzzr6nAARBHsyedGKDWK7imkFSzBfVS8dn6QuXCwK3DQqH2fPfdFTmaRWNbMt",
  "key11": "2g8nNwQDrFhLgqfF5wb4m4GvD7oFsCfFrpSX9igyyYRvLPehvk2fbJzEY6ZrBdBypPi9K3cB2HYv8fG5xaHhE1Ey",
  "key12": "o6AS3Gfn699wHeorhEJyv5VcJMa42h2ovCWnGzY1nZLpyBb2Kh41TxwkV5FwZEwsBQr1gh55SeMDwWPcR35ZtF9",
  "key13": "461Tb66LaMRTY4VfFmmb1w5N4UnvFUTYMzXskn8Uh9hTxisScb6vJ4V45A5xRVR9ageynDFEuspUd9d47bZjkAba",
  "key14": "8ZAd3KQ2wE29e4yvqbJS4S1iFAvvA1TehmeCCoBpUhozTcgP6fzJqZ9mD3CBoGGuWggUuwMZoR6XhPkvVeTfaNA",
  "key15": "4xcLAKKPQvhTEPbK67GgQCCYxo9T2YCvfsFf65VFFzUurK6M1NJG3yYM8EzKquPo4rn3SJ2gmgrhAtQEyFJmD6Ht",
  "key16": "4VPkVerWZnD7giix1dNz1YCqTfxrKzbyNGgtyGzwpTDNguGNPmKBECtQ8bEqTPGgKwAZFtDBNAFeGuxBACB69qju",
  "key17": "5M14f6t9u9UBsg8qBxezd712jVPmnCZpDGwgvcuxGMHX13ogevxkBmGA9pGJmMEc9PvSXYy41v4b48hv83FSKc1c",
  "key18": "T5VkwEshzMMk4VL1JB321UX5e91LUEVt4LkK8LFuWUBXtGEXWnnmMfs6Jbgpa7ck9mo1AmYZiCyae485nyJrZEV",
  "key19": "fHBFVPPq751hyArFdAjDp9iERrHHkWAN68hLeypzcgaSiJJu7dzcBgviE8znhsoYSaW1nFWzm58VdSwaz7tjwhi",
  "key20": "3oPCf48tcENNkohwFGeU5CgsehVDHefdNqPg7n8am137yDvFB5pj4kgaJkrq1ghgTT8B23ocD6SzwzVQ1vNWsEcY",
  "key21": "Msndt5HrsQGKLYv3D7Mbu64E4b4BQcqBweVccoBKZB7nXR8HErFou54hNejmNtFjKxfnPxh3dPXA96LhtGs1biD",
  "key22": "3xWhcP9d6TCAS48EvP7ZthS9bR7uxTewZ7k2ojtRLrxiBLCqiBjzFo819GJ34dHZ65FQDNrLbycuWqHDjHNRaL6Z",
  "key23": "4UT4DS7mE6DZ9h6imeyxGZ78KYK1y1NPu6rSx9vjzMsS4tvQ9rD7nkPeZVUzc3PewaDj8nwoXrW2hdSvr8ExqA9P",
  "key24": "3ERrWQ35z1ua1UNgPxB5rs65UTwedwkt8ohTN879uduiJpLEydE2hWwBupqrqAbam7PfHa8j2vU6xgm6qWABsTUr",
  "key25": "3d7eEbo9ynsD7Uh48q5SHLq4GSrWBGDgNJVXbgNy9kVDzjnQtpSX9Vnu1H6KyQWHobVxtc6pY5rH1Vk7wJdhxA8Z",
  "key26": "4A9TWRmVGx5VimBwEuL3JrWaw3FuNJERfRCtQnwQKCNzQEknB9X4p2M385nS8DshvLTVTLApVzV2fPw5EUok8fTd",
  "key27": "2KxV8AjswX5wXrZrdWta8KoqXEqTii8JTxF3VRpciGgvg7WZi3AZu1pskohcCELWREUQJtBw7QkKWQEAeJSAzb3Y",
  "key28": "GoDzX3kq45QaoR8aK4goYF6ogRgrAxguneeP1dmhrojvgeoCh6YkHWcrPfyFk7EBbz621VEQ4geJswqEZ3pCQas",
  "key29": "3WVSmg3PSfVruoqEqXh2v6tnT1xyCWUbXFM86wEfFponHUUXyLQQ8WVPWeS96yJnScEpobmWSCSy67uwbd3ZV2cR",
  "key30": "dp8KEs55Zu5efTYxoYG6yrVgjHecAda9XhG66izywPsRauHEhXKPdw6NdBHSiP6i3HizBr5RPPFFZqwWFZmGqak",
  "key31": "3LYjAXcXwDTBcjdzHwq2dUsArke9czQPHQBKb2tnS3VK2J5uMgcbQfVjHMSD5AYFG659LFkS2MyDjd8keM6g5RvS",
  "key32": "B9yY6qXQudvbjs7F7oFcnSu59FJXmue3aq5q4tkqyNM8FKbA5axDntG72DEGCZxTfxjGG2B2VX9Tzs4mLfG9j3B",
  "key33": "4FbiTbUKQo1VHWviEptRFPLa8z1kusAq3FcCzz3AM2GoGGh8pw9viKocoJK9GGp1xgv4AP8Vu32QY3hE49hvUgSR"
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
