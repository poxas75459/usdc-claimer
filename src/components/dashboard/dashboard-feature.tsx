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
    "4tutvcLM4eve8Ygo2EWmHtCG4S14SdYC2ojnd8oQpHjokZoLXhXCoFur9t5hzVVXvZDBpNZK5D9RRTsY83vV9Y27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsUhVzJd7UFF2LsD9UHDTUsELJTELskBFAFSFVyEQrnTrBCVVpxE787QC77tjXx7LRo6otifEyowh42t4VDgeai",
  "key1": "5eG5kjeWJroHhfbTaKvcGoeKTUahPVB7kYBdBnuqkEWwQ1qcyBqACBK7wmVyc6bNwGthR25mrEgwJ7HvcatjgNzD",
  "key2": "319Nq92TgjhnueaebHdca2ktS3PuDpoEezMmrTzBWA2AJyUopC8NCdpcCNbdsJXsXqeymn62P9o94fTGZft5nEZ7",
  "key3": "TYGv4jJZjCvUxEwEvs9wKnNt5UvLLyeDndFiygG8e8TLjKm8PnxbZFBFryCEBkvu5osa3vmNE73LF1HB5ySsKV7",
  "key4": "4igc791B3aJpyUyci5kx4WPQC4rvB59U5gU4TiTHbrBrn6r7QCmD58EADuxPxxNJtEyakv7M4aucduuob9AwJS2q",
  "key5": "5nneRS7pUHEko3XkSYjNL5zF2ouk4yrKUruMx7EhnHFTaLtZbfN1g9uT6kqcT1dTJaME2hvQaNnAxGTYRkUehGqj",
  "key6": "4KofV19GmmnMPxZjYTFFnYHYND3D2hZGdykyk4zHvTC4SnMERVfPXUwP7BPcP2Qjoayj13QbCRyPdxvuoZDCr1Lu",
  "key7": "2ZZfDEba9QJeQYhAsWAwf4vCCnixCotFirBUGPruB5MoEYmHqahMHrDH6pwqPrCHDHnKUYmakYsNUtffRTqN7jK4",
  "key8": "3GFVP6G6SknZbdXKRKhvpRExeCkkPdHfo3AJFzVxLUTQ4dzjiu5nSPLaWeqX2Sy5R1SSn5jwTDQnabE2oKCARZ3j",
  "key9": "31PKDCK9gyh8Fhx9UbVFnoVQ7zQEj8fAmUCY5W3xhn6E1NyCci1RGxibgcsWRzm4rr92m1jLYutAhqP7HiSJok1K",
  "key10": "HX2hCaZ8fzCQV8egBENPvQF7yFgQvmhVMEX5Ww7P1HL8sfSPrdZt5PFVRiwJwNBEyqDhSzDLWgHSmbqd3Jyp1CV",
  "key11": "2kwykARSjxf5GuhCVwQkf3QpMiFEqPU7JARWC6v86GhMrR6XoYqV5oUaVGFUU1SdHgPJDP339Drwnf6ELHYhihYr",
  "key12": "5WrwYy99ZzWjmgHDuvpU9yoniM8Z4ZZwshpxhhpqCciMSpRz5NWEKGbw5c54SXnkZxLYGxwTBGSzX5vM8BT75GM7",
  "key13": "5fF3hHd8iMwTCsBcqLQauMnGkwviMvyVbJW6a3v8FVQfesWNYgDV77yRbZV9cqqwKrtTf2HB62hLNKuYMPWSYY2W",
  "key14": "66KuUbxAXGdnNMXV1Y1EPgNCwEPMDARq1bN8j3zbcpp4vsjrynwmayKFSPqNnhA8af6HPkNfuwwaxtAdgBujXTyZ",
  "key15": "PzmnjAqvh7jbmfsD6JX3wnYRvbRMZpPSBZyWEy3dQNa9JU29RJiEP7n8Cz7zFzq3WRpePA6nN1LXKjtM94hdrPL",
  "key16": "4g1xURNZUfe8xaKiStJR6hMhLWzArA1kgoYBhG1Vc7E5S6mmxEydqDYpJ5AvRE7NX2KrbKFRHaQQB9GZaa9o5Q8w",
  "key17": "4D532vC3HUZLMtvrhsDuZ8ikgyfheAoZq98XgQG8amsEzo97hgLYcazdSofWv4fgZh5e6G5qrpCy9JYXNVH9zv3s",
  "key18": "3f63VcHGkX7r9kkzB3bYnkmCrKq92jbwih9VdBm9X2ds14ai86Vw3k7YAv1dMAsqLhKhKoMStFmcwVjchKyxpxJy",
  "key19": "fSkA3HNp7rtfk9DDWEGL7KyXSAVXyiMizkGwqSGJbM5txETDo4jUP6GgZe7FQXPFjkwfr82qBULT74ezc2p2Akt",
  "key20": "3eeAP1srRNmjxnwaSm4vAjMtnTZsATL2ms46bngN2R3hueCNb1HbTKoQrzmrwycueoxhLjhM78e47Bbt5wP6c9hE",
  "key21": "nsRshCtHgbmi51VjWEoY26fYL1iZBudEFpS3t93bBS37RsUnMmq2HsAFNf1R52iiALgrTcXtu9mGDHV15sdxrgh",
  "key22": "3XPVnHHXfGfqd8i74bVWW1eipmVk2Be2QD8zsLZ36LuEQGZfo8TXw4QBiRjCPQGzfGQgfzqWPmZqZUxzXzKLzDQQ",
  "key23": "48vuTEWFT1vAmTHKe1bdFCdJW3WHzN5tmavggKbT7XiNwaWfC4wjxEbV26rFfsXyHmvK3bScWzaswiYsWpmSF3is",
  "key24": "3sF4ghQWQGTwm9kn9MW1yaC4E6P1nqdjaE7tjPESgUqWWr8bLt5T7qY2FFw6uNhBpv67UY8hEq7CzDpr8CVaaTY1",
  "key25": "43dzgDhXXi39M6yroVoXH8ozmD3XEk4wrXYEe8kasYF6jBLitksippWJfStBicnNyNHYwSZPhUYp4C2XUCcbhFuN",
  "key26": "vmuNqH8xb2U8FMEvMPz4XhKXVk4MSptLrxZCgvwDPdndA1FD3VJJnPcrVVJvBjBrcsRHKt7Box4YghqZX6SmqGS",
  "key27": "2YpVdsjFmASKCEgaqSiTtyXmvRPpDfPHtSxSBpP7676o4UFuQ8iKE19qnhHBNmCGYfja74UihVxx4rCU33D2rHFb",
  "key28": "3PZci5bSB2Z14nk3ZikAYm21xSfxpPTQQuoZQJFY5qtLhR7i7b7daWKcBuWUMmBxZ3W2eNoQt6aJgcE6t2Xgb67h",
  "key29": "5gM2FyNhCcvD9ppJSMgSX6L7FoiFhxBAjX85z8co8EQk2sNZifZDKzENhah3retEh1QZBZXzTywTXwpgV41FjDTn",
  "key30": "2dfrqu3d3en7JLexcahGTXTJHpTmykfzVp7ubE1uJLbtGf6EgvT2fLTH6HVsdNU1dA7byx3RDWWNvbd1fAi67R96",
  "key31": "4dsE52TUunM7QqxkRnDX8LwKq8WBpoUhXy33ShVe1fnwtD2wUpa7BxtXZs8aKE8hfRafEe99vJofnfg6Hx5HjgfG",
  "key32": "23xhJzUWQQWeRSMHweffXTU2bPsdXbQ6TiMikA1vZE4AUTDLJ1UxYvTzQuKosCwoUX8eGKeuK3t14soUZnq1iKuJ"
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
