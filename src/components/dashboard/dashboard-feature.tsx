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
    "3qCdcYSoVb5kRzC8f8igKzbnDAeKiCthU3HLoDTbdDUAQxY1yA4c9JZSqfkQe4c9bxtGHk36ovTHmWVDZBGcAfUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8btv19iAky1MuvHr3pGuwS9oH5bxHZRH7iiYHXCbspzHFa8oiDvza7g2JyYR6dQwtSxNq3svg4DcgsRZcLdszo",
  "key1": "56dN3GAauVGoakgw1Yz3qkzTmEJZdKMdX4Bg8TfCVGKPepnNJegkjfKrZW7qXSTrQ1rKeYsYVLddahcGF2EZwdeA",
  "key2": "5FSHGE6TxTE32oJDiEBHGbVXRpWMFYgmZfeRPJSd2PWWLcRGzKPoYXP31DrbMdnybDUiAWuvvs2h849cJUezoPt5",
  "key3": "26EyP3HvWoUa64Z9scFrrMi4LWcQVoZUBxazAzDQ55TPbZGdjacn5Wpjj3pGoAKeJh3EBnyxw5siSAtgARDZN1DH",
  "key4": "5mLCvQaX4tBsBkLyRgHWAqWcV3B3phTCSd9cRWTFBLoYy5e5T5WMaVhDqYtyCseUgug32q8AWVio3tUXSk3sTM4U",
  "key5": "5g2uFpqTFPAPxc9AxqhFAbSP4rn2dt2Qs9FY3CfrsuJQZnBbdj6KURLypw3dxMoffvjmhzv4ZNp1JWSRHHpWNurE",
  "key6": "3dGry7QLCqHNJv1znXz1wX2bntxtz6fUM2V8MkKxqK8h5vjzUUyT2dQtX1kxaNKU2EuTQTBpquygLiqRsopck9fT",
  "key7": "3bnqE9LyuqVjvTQi7PPCu3CLAqWrt5EokCy8rCcjyZ3HsnXgjTHsFSPePkpo14iFvtqmdvyuFhcHHouRgghaZ19G",
  "key8": "GnLPg2kz8vpwoFnGCJuKJgSqfciYku739gS8eyoBGE7E7DSUoiGUCnJN6Js2evzQTvktfiXGd6n6cDHJ3ba5Wco",
  "key9": "3VZVB4sxXkjc9hTqZvRxhydDSVN4VZ53m8c4ny2hkLph86WWwwVjz21ivL8b3qqV55LUJe4gg9jSRTtKWUZvQ8QR",
  "key10": "Cge7bCYCNs7geG7tfaCzgsBMbBQa7RgzqY9zXEdHLdyPJxpaqnbEaXp4DrLLYZEZprh2oRMesiWjWSMvdtniD9X",
  "key11": "3vUSZL6ruH11Pw9ap9N9Vfzyz6WfJPYu2B1nqqEq5NbdUZSJ16h3fTGbPZ85uM1gP4Y9RrKuUyvNnHFvVgNDnD3",
  "key12": "4WCiSRrQAeX7oCVX14scPY162sMRnRdKwW2DdGYS7LP5hZM2xvuX8oWJDe1AgBhUe5XXzjDQfdkR872pNCGWHofr",
  "key13": "4K9D5D1XTF3WkaGx4zJpfzyg5KgLgd7SUSGRHNaLQTtSA2Us5yuHbL3Um7dKV66oiWoGnHxda4GQTb2gje1YorqT",
  "key14": "2EXNmyRoeLftw4Y1tYj9PirTLSsEQmQD7QMXXUmWWotrqTggWaZevWwuXLL7AptkSKXEBJpzaKR2f4jE3ES1RGMp",
  "key15": "5mZSzpmNDYWtLEaVYBfgEV3RJZBXn1mBc7HUigCGkSc2QzBTDYUBJUUNkrfzqbX58AuNbZtVhkneCyNAgtNnyBZu",
  "key16": "5T1jDS3euK5wEeLvur44bXuGEb6UQh21yYfEur8BfeZssGmdJmgBVCQe2enwanR8qc2Pa8yWGWMXHYuNV4V8NsD3",
  "key17": "EhPie81GTz1KKo9BJNCmJVqLkcE8c11ySph7sCChcTCkeDntjWCUK1JkdVSDJBT5n3dmTnYtHH9brVdA9zNNSzi",
  "key18": "4yYmDZWQEkcNdMz6fbqMA5QEQiXbwgux9tMbimZTM4FTvAXZCVfbdyS32mtk3gA2WfULJNnyCZ8Z7QGQVJW2LiTT",
  "key19": "5va9wdVj9zbqNLJnitAmcA4CJGSgXfzjJyavCfurd4mEDW9EBMRMpGGBQyA2P2tW2hZZZsMAQU1hxe8n3MLvkRiH",
  "key20": "4ge12H6twTQ9uvsLm5HWaEP5iLiwmwgbf9wbnLnTjo1zaqRP1t4Yq2gGKb5WsuTibDUiqcwtuc7eWiKdGshzxJBd",
  "key21": "4e8dmPRXG6LimTTmLnqZQc3CdVf7fZVGtiFwEF8avozZbX9EtJZMhrSHMfeFPPzmerHhLmBt4eAXGwoUfcsSLQKU",
  "key22": "3eLaweXDXuZmFVmSy1QmgJbHCxvJz9FsvaKxYqd4vZGMMV9hSLPhVDpAZNDpa7PZv4MPwbgE7vBtqQ1cqNmLDsVv",
  "key23": "CY2hg92ht31RKgtbPPfaFJrJNZGJgZHJ2UrkEn4cPHoDXJwBm1p4C3bf86uBMnGi2ntG6Q5KKksqbE6xLg4JWdD",
  "key24": "63SMN7Pg5FimfWvk88sQVCWY49RaHpgTaN5ZgvsXa3MgNpqQQTgn6fMWNBGgvVC9qozBwRGRyP7UrLBk7cgZKhgP",
  "key25": "31N31uxw5JFfoJuDocvQT3LzbmA7LeCB6SFMbeaEiHbyYPfwSUy7eSyxShuuP25Srzxn6u1z6ofz1YManWuFvhs9",
  "key26": "2GsXuvCiqma1ZWExVxECXbr5fwqu4zgBN9YjuwWWQHeWUooeoyXjHQvFC1Kn2KRxnLE9UR7sVfWdDt2nfYWDJb9d",
  "key27": "5EgXZwMCACj6wna8Q26LpjazjE6wezkA1Eiu96UTs9BUbuL2tpnD8QfWTBDTTEp1G3fwxYYGRw148XAo95XvbbVS",
  "key28": "3NRpWqXqcE4xF9taAa1Xe4VQkWTAaPGfav7VquMsPDg4wUgHDix8k4Rgp3ZQdy6XxiekwtHFr3eKvNzvdRYrU5UL",
  "key29": "4b72V99BEobvKayQrqnSk6eJaceVHRzkhio2hw8JjuFnaPqLDWMKFMPueF9UoHiVYXwjyKKEyftSPy3EnyGCY3Q7",
  "key30": "2FDNxPD56LLDTeUVwWkw1EKkNX7qTNRPJu2YSB3mkwCvayBiNmhJBPK78PLayKRAjriaGcE31Mi453QpnP4CYWhF",
  "key31": "4xQCYKVNvfySzqvcrvvUR7MJxSgMEN51n76wV7ZEMdDiUkosVx8gVoZNFtoLtxkiDj8ehkthK6Q229oPRP7PWyi",
  "key32": "5xCzg6iZGyZZDst51Rktdq73p3EEzWSQrfLud5CmQj7pqbBFEEwmYmHkD5mjYh4yQ6wSRW4XwvbsYgjLeAacU2Hb",
  "key33": "tovQwTwigTfUHttZMXtbur6o9iK65SNQsEwrgeTkszFKe6WCKFU6sAnBtJNFoKGPzhxTQv1UA1k5MS4hw5e1ezY",
  "key34": "2uRn2YSoudv2PzwHX37VwQTz3cRZAvTHtcYG8QrLzMVbdsZYS6gvNw1Z6AuEeiJKWcp6Nk68QdjWdbcNXnofgNZo",
  "key35": "2xv4QE2ujXPmRYVa91Wq2bUJxVMYWVqxEiDxtSMYoRzWv78ba9uSvKTPKdJgJ3zZo1P8rj4NmLD8f25Ss1HYhqtf",
  "key36": "2PrKSV49ksCFgCqVvqFgjzUjoEXu2AC6u5YK6nx2NRyH1UEhPUxvGtX5cq3QWRU9sAesUMqjiCuJVv8CzijYikdm"
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
