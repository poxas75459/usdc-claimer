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
    "5sgXkFCiCCb3LK7a9UsWN1Ym99xTFdPPj96FwyJrHbDPA6Rce6fmks77iwo55aW9i4QEj1gnAQVWqJXh2TbfLZuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YK1d9v2pe2Nar5Mm4rQrYk9wTG6qykBYJeANs9wofek4v41zGUsPL6Nhcxj4oXwEninNU5kHCVeo49JwA86zL2m",
  "key1": "qjRPaxL4vSgzeBF6AebYiiGXbnZDbYhvqGNyrFSBVxVaMEwtzDrwkUmgjXNoLC3Hg2H4FbGsq2VyFGjak6FdMF7",
  "key2": "4cdcZBDR7GLfMwCsuNJ6SradceXWQomN8N9u6r18AcFiJnKYYNvkBcumBAfCSMGaLEjSrAEQ9ekd5Z3HrjdZsQed",
  "key3": "Ju9wcYVDaaDAbqmT8sLT6qZkW28SrSSCDqydDviuKqawisi2A3Z3gNysFuTuJ5HJL3jGyK5W6KcLmLphUupVaMK",
  "key4": "28rkYZVPjSv2pYCxFc86CsB9MSe4y8Wemt6wBFXNxsEEWF3GZ9fxC6XhaDY7eyGCeqZccoypFwsVQXWHTpk45iav",
  "key5": "3hep2UqpvwD5T5Fi8RiCnGCSuFE4NJTzqEiu8Y2Go5gYcaUTS6cB8i9Kaei7tN3bqz5Z9hZS6P4Qo67a7DKHuhWM",
  "key6": "3Ai8odgDRoMJ6PPnrowyfkj8WCHriNYzrMsKPNgcNbyRjYfG6f9WBAuyQxB3HApj6t7sJvuP8HtVhJ7fpGCtAx1A",
  "key7": "5xhPriHCBHCA4qguxU7PaqCC1SGoaoWdPAaKaiDVEF2UwfEx9ghp4JXtQ1VVMbyEZWnzW1Gd42gdb8WD3SYf6dPn",
  "key8": "5G2TYq3YFwEXfNiRrEZzcDuueqaBuhSGR8BsJw2jTjifuGtZ4w1R4u9uuwVGvzCUi3d9e2QZ4cUVbrTHwSPdePE2",
  "key9": "3sMi8T9yEXq5grzPa6RP8mZmxZNK8mpFgrsSgeZCSRuYaxiPaTioXUbYeLrxPSt7kkudT77bVv6nFQHXX95cWBQT",
  "key10": "5TUYPjXFvAFgSkB4nYkE65EGzsLgopr51EQkZhYD8Q2fvrhF5uXPW7avbWBu1YsgTP8yiJxn7Sy5jCvV2dEb2PCM",
  "key11": "2wtsBE9EXrWMy7hbEJHPfVEFTrXmup1LAnkepkqgvdeFYQX6TMy41DF6DS6irNpuKcZbiRoTfYSxN4EEFJ5sFZ7g",
  "key12": "2MscT8w8wJpFin9mDa2AqbbYo6jQ3cVgQoTSR1fWywrPiDm3JFuKmFRPDkfsQjALHEgsDDpN75mwq89tweossnKr",
  "key13": "o8ErdQZ281Fzu4k46TW7EeaHigCodk8Fv9GQxBC5wVNTQSEr6jGzNMV71MKMbNto2UhhSUbS6VrXe2GAD5p3wAz",
  "key14": "5qkFNdaDdiR6nhYj6EvNkJmeB3Rp6aLFkHE2jE3FgzLPBfJjmX7yfNbyGa6eDwyUYHDNGM6sUPcQiGi4DKZbubgC",
  "key15": "5zZGUitxj28AdPc58eyxyai46U16cZi2CMoGbuzgc4Yv8r8TSaX6vdZ33aTLsbu2CwKmE9PupmWJtCbxTn72Jftm",
  "key16": "2yjVmzczB5K9zuhWdtMcNLV2px1EjmAtFEKrL65D2mnJXPbF1hnzWrPWCqBpNQZ1hpADbhg8JUuP3q3fo5nw9JQx",
  "key17": "3iQr7bqro2hkCW6jZqRPfNTK4W9itPfZo7KqnjeK8jnDtVsBxAdPzCYPyP7k1XrqDTaRQiLLi4MMg4toy4Gs87Kg",
  "key18": "4W94P8M55iyzGQzjSZ4qqR75BVqSEV72N3dJ8xQiVvbR9VWjTqvUMjHfcjEsDZgZ1K5LYuSptFghPemEKXEsqJDE",
  "key19": "qwXnw8NvGqj5xMPdRCW7G7McoSaNqkAtxoV7ihwFWu6J8FaK9euS41kWDst6zq6xgReFvGNLmEpfTCHSmsyjBXu",
  "key20": "2qyBXYgo6SwJKGzQtjk7CkjZTeQiTePVdcZpB3f3i8KAwrQyNPw6KGWzciq8uYj4PSuEEDZX91Rfdu9USqw9RmdG",
  "key21": "gTB48Du4tcVvLhvWZPUHcPq86ALMvLF4EPRvtfHcGBWsfPypSWb1GWFHPEvQNZkwcuLkWpAPwSfG7NfaT9NesVV",
  "key22": "wzBjU88ijeYSomfg6Y6DjFXq2mrpdZ4XaPT1RuszTjM3cwimY64RYuCHGgRKEB9ZcCunYXNJqChb6ms4joo4KyZ",
  "key23": "3hz7G3zBZxBENGqb5tSTXkoSHRokeCTLFKxM8W8oTj6fzjGJESLioRTVdxNiNWNPAhyGoETQzP8xeKozdcT88iYm",
  "key24": "ApYb1C1MQo8ZUXejrBtTcvQjZYVYFZsqN5kiNhV4QE34SdtqjjqYxRKXenJDk9uw5hSKmcFwWxCujhygAwvoD1S",
  "key25": "5Pm6SYWSch7Z9STcNVHdyscMoQAR9aNjYtxxHYyHk3VE7k655A2hDDSquY3rcka6xde3C8Z5nR1dMkiitbBUZQNa",
  "key26": "BvD4EUV7ZXE2KgLQ1RQ3qPMgTyZsKSavkyRV7XeCpnhLHwWCHmTGfRT1HPhKi9h7cYDBPjPq4X6fPPLkuFd6z7D",
  "key27": "2xFd9vReUKHDoge1LpjcXk6iU9CNxkQLMyPo9akZwrEyTKmn253Ekaef4rdTRRz8BAoVkwUWiddA9u4sSCHUszhv",
  "key28": "3mQzmpwtdWQ4DMymLcqyBceY7dnwPKZJKh5eNVQcRuALULzLCwdaLgZcxyYTKKv1oNUgCYJkQBKiVs2bA4HGzxjf",
  "key29": "4QL48TZ7VDcG9NXYsFeTnt3KgWw16NzmZxQPXUujsnCpsKdZLjyptwLaiEwyxgnqjLmKFKfKMNMStinHrjHHft7a",
  "key30": "2hQmWVoEcRuoB1fMgLJL6E1Ny6UGLumv8txzUZvuRUdnQm7FDaTxGBvXNkC1zBBu1kjtvTR1QCw1sGAq8CHsTfS2"
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
