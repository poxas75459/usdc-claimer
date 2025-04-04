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
    "CQNvQZY9vmjEdNMN3Ku6vHY5s8cWdBuRRPR9ewJ8WY7JP3VNEbaNZzM7nbdVhBHtFiPiDNA6RDpqsCqU2mZ7B3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2ZEN8VegeSEk3XDFXiMHzKajfvMfQUGjMjA7aQKVJ3m5FvuLGo4oCswqd28RaLL458LWUVKTRRhttu1N6rfWwT",
  "key1": "35yPPFbQ3Zw3t9jkXw2Wd8voH5nzDNrakGACMjGZYPPwdpnveoYVN7dAeENcaDvLPgDeaTCdBtr2uCLLR6SrALHD",
  "key2": "2ZaQkQiD8WmjZAhcEfESwQvcw8wwSzQ3r1MjyXDWtYUkcks5HTiMsWkiVJDTADfhdvYz68a4PcHwchmgA6rbYjNf",
  "key3": "2Y87Wg5ziFQrQRLKDy56d6YYUKa9kPnxp4kGuY1BmxkXNvituF9rRrFAAsJjb5LksJU9A7Ngn3nw76j1mRW35CTo",
  "key4": "4ND3godKLG2xGGsCok8zJNnbGhdtbaVsNQkpMXweoJJPnMGhZQd5Lf6Q5BcTsDKDmkVrAkHr5Lrjj4bYvMTud3Cr",
  "key5": "5eQrf3Kk1HySJuqK7MPq8zg94ZQio66ih1FcyJwEXSXfWft2FF8xmgAUa32aFjHcvEkf4dXmEZGvkGfDvgC2GqQJ",
  "key6": "4LnELD36uHhWtNV6gckrvNe3sGrCZ9mU3UGBswCvi3MFdvNDDsD4v4fnVrvZ3oiuzeDQ4BJSFecYZFZYFnCJvyuF",
  "key7": "5Ue27omaqeXsCmep3Yrk2ASzYmhG1Xfvy3c8vfHgk3NKzZm3HwR2f7Ln5b5JjcYTDuJ7nZyN9NxUXaGArkKmeLCR",
  "key8": "2yiddffSJg9koYqUa49pPV1ccuAA9zmdu2iKkjWLts5RSr25sHd5SUkXUnpPqngZBwYdudkszeRdLCmZTbffvTdJ",
  "key9": "61GmLFK6d6wSXupWRDwv9DnTtjUKzvgvrdmTBxXvxiC3w5SySbEPKfNtxSDqyK9JW2xbEeNXVwTAmGKPxJURmQUg",
  "key10": "3iR58AUd794P31ZxxEskK3UDDhNSvedL8VPeygnWSM7QdK438oqJfv9fVPpPQWru5aud8BpZUrbK2qVYiSc8on4u",
  "key11": "3pUPkCMJudZxm9Az7kvGoGftwzky5GMqjbeW23o7J3JaznSiovBLVYkNg9eBfZCNfj8R3wUt8FHF7bLD2gQcM6Fi",
  "key12": "3NdQPCBKBDAJEhYRNSeoPvPgR3SaEmZQWudfLYHFNqz3Xy5xDRc8unPCk7ahrkSbvbHrtugtZu9AnRiJYB2tt42P",
  "key13": "2yL1nLDY4M1taA8HFV1irsu4Eeh3494GNSyTRXT2g5S92oF6Y3LgYZwf5TFKPrivdqvQNbcGk9aT5TwSZtyyCtrP",
  "key14": "2XuiQ4JrakSCP7zdqfYcybT9yQcLRAmemhKr5sGxMiKWmesrRhAcxhRcHaK1qF1AUR7SoUnpDiQcVjQL4hGhFF8q",
  "key15": "5Hk5jwXPa3kGXa1c7n1vsvQ197sr2mwkKFKttgL7LTuFfzgMqTDKJ7ZKdJuArpYvrzjTF1Q6FKaxYkb33EH15VFg",
  "key16": "4vbELwEswJz37Dm8DipRqUkzpMALzAXQFza8XgAWK9Maa91tuJk4nqfRppqsgjs5CWJDVDj7aoBSpEbrU6Mh9jMh",
  "key17": "48RY6nQeDYnvLXEp9aPMr6xb15NUq7rJFSBH68xoRsQDTbyvpYazf2MTogMg4dGeY7KL7hgtLvjk1SRenkkVw4m8",
  "key18": "4WAF8zrcpEUmudXUtqwgqrubPh7NW4kjcD84vep1QTSNAAxjxMswHWfBETofnYVzQwyxihscwufjLe5MiQ5GKvUm",
  "key19": "4HsfPf9iQuTxg8NLdhCm9sGAaBKE5L6LozM8Qxj68oSdQutrnRA7kxd8qrQ66mjP6XKY2UXmmU2WD5amEYLsCWH6",
  "key20": "2kmirkq5vQE7LA6rxVX84qsNuU9T5wSHcGEVkpVPZgMYixMpf3au4vpe15SbHWwQbhu3aWTrQMfHPWbvXH4LBZQB",
  "key21": "3bs4ZGtr3BLyiQu6eRgRqj3yxCFzKVEwLFgqy1CbrdYLs7Vb6hNgXVXyzpV3m5CWiEADsLYDqqLbvGf6GgT9ZAYu",
  "key22": "44Qe8Xi89Bh6RWo8nCBupywzLzPPb7qxXdf9PcQhADQEpk8j4u6jHwMhgnbnfKGJ5jSdTUjm8Ei2HpvXMAqCbbfq",
  "key23": "2d5h9eKmBpQXyiHioKk4b2yBW3qzbrV7cyFYjeDme37TQnx1qG6DUeCjk2ExCTbvVje6rPoAAPxLeF8yRhGjBU83",
  "key24": "bWoJ5Uk55Kz2NSGnBpqpLDptGdGa1q779THGsnLFTcRYf78WhSeAxgaPYEjPbS4uPuXGCUsr3MqpjiSt47aPTtV",
  "key25": "2Qa3gzEF8F4aRpLWpPKhsg9ivQbLmA256mr2NpbXEcKNdsKekxoxqVGa5PKc1UwbFEzBh9RjehTyDbFjKjH77SJS",
  "key26": "Gg7uaMXrEJEcg4nQ3CTX9wdvWTHT8rgkfdNjRUkA3bhnPXWkLhSuzR1VQRsuaaUSh4wYpkK6XhjL1yDgWTNYJ7F",
  "key27": "4DvT29GBY37815kLtMiEhxcy9mM7y7TUL7mg389Xroip1Cvcb8uHWYDtT243UAQkNkwhTefzNuQf6H1BUHavcbeq",
  "key28": "8G8u5xgujoAVvWRdV2SJCbTyZvxDufJfPEEBm4ubc1RDdUDwNNVbv2bECBhZYjdCmXnYxdd1cGNo2UJpiLY2KyA",
  "key29": "4b3mu6TmFzbV7E82P4GJXPK4HJxhdHak4BpkNYRhjdK1BjW9NcYQcqxZoKUkwuxvj6sPEYKvGeLSfV7zJyVJpozc",
  "key30": "4xzCGCEJCFsYxGPvvDFPqfCJKv7qZ4GG55zfa73AZbwCruMRYRW4qBLZ3HVgww21w9BRvRDoGrbRDfUqZAJT5Aik",
  "key31": "2dooxYJCJFRQziJ5P4QMAknCbeDLpcurPvMZA9VsYgnTVPMLexdTXhBK98CKFWqVFUPrV8SaDugo8pT8UjNtXWqM",
  "key32": "4qMTiXfpWQ2wCurqXNe7TpRBX46qVvtFRcZ7krwZeNyGq9hRC8Ev8yRYdmfJt7oR77VGJLq7ENPmqJw5VJQFy4fb",
  "key33": "5BLK5kZdyjnJaX3nxZgekyBWaMNwLdj8TtsazZL5tGZFYpLTDEMScekYisxvWt4g2cEk61r5qX7tPRGDFXi739Yy",
  "key34": "3G3owEeWqYJ7xZMbhyTiQW9LAL4cHaWsapg2Vco9U15m3rgnceFx6gPQgTYHrUQShzNp6NJTM6f852PEXc4moKX9",
  "key35": "4iPCu5GtUZbY37FN31J5m3s2NMkevLoh4jXD3nheZ5fDoAp1i6rVhFzwj9YPYWjoGZdCsexpGjdrwUXK1M8LmrXe",
  "key36": "Zv7Z6sz1prt5gi8UxijqRtKZRgVVyheUe9727i4btydtTaiFKtD3eJTZ3s2kAjBkkNv8HB3RFonbbdAKgGXAmdm",
  "key37": "4VZdZPvCo7n65c5BzTL2q6QQuokQKSMMtpTktzZqsNg361rZs8yPqZc815z5dScnBYxXjJL21QGn54tCsp5cb7RV",
  "key38": "5y7Acz2bV2QgiQpfAy192dtr4sdRobhq2M2r2ouu4Tnw7wy341vHHa77SHAHRSKqWnhTWN4c3sTFBi51KNNr3amv",
  "key39": "2ViCPuv2swdCEwTSMcNNprAAfexRTsLErMJ3ne43hN58HLVEVmR1kGtj36tjDsX5Cri2HLhXfVW9j7Yru3W9BLSZ",
  "key40": "4skghLDWn1wNnxvxAbUH3zmqe853eBxwWqaTwTCFewK8uaG9gycdc4JZMS6xoStGoUcSvdPk8MzkdCz3WaaqQBAG",
  "key41": "5nxymDw4LubNjVe2hwtpcV4YGMeTSf2yQSgRQsxSqSTC8kYoCbwYTqKsAgJwQSAUmJCKa5tziD5D8pG9YLqMiwZq",
  "key42": "3g7rGbKZhXquGdEzSFjuBeFUwc4muV4ho2uNHPGSfBH5ub3uEooc41Px1prYC6D3NCZdrSBUB1yF2tqKhgBQLtU8",
  "key43": "47AxkFT5URVZSWah3xoqmoZhqibjWNo86PiXVURU5yYEmT7hDRfrowCpdc97m4A5n4uDHFXdYsQQqi3yDZN7w39R",
  "key44": "Bbc4cCZkMe3hwrY3nNpBtryKEtgjxfeNeVE3KKXgXKt9AgzENu8wQgYoe7cE8PGqkGv9bY9bnrG2ux9aqCq4oiC",
  "key45": "66T3mtKCNQ2QjvXRJs8ZGXxZ5rMmtY3DDWhMi2Ty6cuahHxaqEJ1rfjgrW3E6hCGjHrnUxAGiVcC5Xz1FTxMKngs"
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
