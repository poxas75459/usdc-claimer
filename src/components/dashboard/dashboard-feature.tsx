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
    "4ycvb8vseWUqZUWgqtzvSFPSEvbJXJbb8upcFUBzVCimZSL1peBgnBJaL9xYFpqcbHHoyNdC9As3tJZo9Sf16Rw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPgMY4Z4LUaD8qcFDxuW2smu5tqy13jRL38hhHEQuH8FVjbTeX7UfiKxeH3qcrhain1ULrfFLgP3nup8dxPbGbh",
  "key1": "2gF7BdZBLhe19RER7Cn1WCGYn78GPK6XUqfA8NG38bXiqEcLY5HfU1R3W6y2pv3fLriUuKE7yPvmAz6S1EqAkqh9",
  "key2": "1pXQJYsrd6LPbGEqVtQ4kyKziSTqE9DzwDPfBZGubEn5Rgh9R9W58Vrdzx7QDnNLnfeeLCZXird4RBiu9xHEmEP",
  "key3": "dYqXxPdkhgjLSgoXhMLmJrmfPucpv5nriCjTmTKs5XrgDhVK2RvU4KXDrBo5jaegtbyczCXXQamJy3BLCHsNFWP",
  "key4": "U7BTdPEADsADYHmWdVX5RXj1qvukfohyQV3SWo5XooowRP7GVnVQN68Ui5XBZqHcPN8a2SkBieGcqaS9YR553GU",
  "key5": "3rZ28aPYK2R7eiB4ZxhEGBTYAP2UvvyZgeEuJrYT3xMs76fztwZvD1a9MDfD5kXriT8UD9a5TqxhedBXqR6wPHrn",
  "key6": "NKsmSXrz4JruwNJb5JAfdmiExpJBSqtfTKybKWapLPt1AZZzidyqm2x6kHHDtaKY1EHpcy5fMrhPSjX8kAtGLqv",
  "key7": "2pNEai9Eoz23BWJY1wbRZsA9qcXSM5tbjJ7pgW1JoK9HwWkB4HXS9VWRqDjUWdNKQxzyFM4czoou7NGm5PVbdmbB",
  "key8": "XkVRwXmLDowNVdnbQVCvWsFnKX1mvyz7yz6jsa7JwzWCpQ2Bdd7TKfQHGQV1y5FkCJRJjzp2XbJ5ES1fDVQffs6",
  "key9": "GwckYYRfzBJumxK5ewnFT1zJQFcz7YxziWZnmXP6xgFagz9jNohz5eW1EbW1k5nD5MdZssSawD3pHqtLGMbX9P6",
  "key10": "2wuXR17nRuWQfJ3ec8yirLhXJjPXHXEzJtzYGfzHG1svwdPv2q1wE1mQvUGMgqJdP3a2eoBqh4FKwNKqGJiRncxM",
  "key11": "2UEKfHToZjNXeumDhon9HDHpXD4iSsNfUrf72wPWQx27y9WVA46RvGNoLuCwt2AdGiKr4W2WiyPLSNYaoYm24Wpp",
  "key12": "B5EwEZBcqKm5HY5gy5GnpXSz48xRvCq8yok1eGz9L42dAGTbseYayUU4tNPAEApn6SjmhqydQ72SLYGec3Nrnw4",
  "key13": "FGk5CHhiCnhu2hAKFTwkgvNfJmh7ACfgjKKbPsStEvx6A8zyHumrkYVZrqE1pgTFjEW1UYt5tyEKbdnUCGRwdU6",
  "key14": "4cnQKCzLy2rGoYoZSBwYrm46wFsyevGjnz2Nf1nVhmt8bUhu8dc3CYqCQuwcydnHQytY5jt5sMFkWr8ztSgcNcAM",
  "key15": "44edEHaf1tzaRzJBHUcUyTwFfxSMimWPJDoKQPBTxe5SKPNuoJmk5faSeNuhJxsiWEQNvJ5L954GSTv59VqRNXno",
  "key16": "3928Jbf7fpTQTX6hqvh96n7W6NAZewCBfYjmgHD1RxxxwBP9hSyftQdsZQgTiaAdy9b8SmoNSfT49vhWqRLtScSJ",
  "key17": "4GmH6iaPrk8PGTGsVqu6M5A2uQdTnJUiHdUUDvTkNx6nUYLdn6e5Bef51bo469rZmkVBVWsn5595CNBb9H1usRMm",
  "key18": "5dPPYVn3wgcRqWYarUFLpdaqWuqrJkVLvWwegP7j6Lggs6CygiwKUJbTzyBAUdne93R2NaREZirF94h8wMGzFzS3",
  "key19": "34sLRAz8PLrYsVDn9vmC3dNZgMs9HBdR1KxGTkkdHeseYvUjNzYvLbGvEhamm8XamL5dcWS6pochKaVes9Zdgfrq",
  "key20": "531H22HLAfaMwMG6Y7nPiaGzbcCm2pExmfwdwux7nesmCXN1cZqPmjHBnsYQ4Kb43DMKZ5uEtx1eshYTbjcFjmt2",
  "key21": "31CyRnhrP3XYZBxxUdgEBiQXFdyPiHq5DTXpMw3zy6U2aesbzyc6wa4JD1djUtuBL4aZdVN9GjnTACVNykcsJmS1",
  "key22": "9cbAwGW7NF1YP6iYGJfg59irNZLkGh665DQVUHY1WU7vQxHNSZnNnNnFjjZHzzhmVXoZewL3EHFuDiuUKYUFCHi",
  "key23": "4txu3a4FqEUgSDzcKCbpkDVqPnrxy8JqCc68Dos9qn57ZKmjeY8AHZC5KpZyQiu9HECo2SqyC5erAW9exG4USJPJ",
  "key24": "4iV9HwAsJFpkTe7E3wmeUCCHdsqngXcafSA2g5A59Ln1hM6HNG6UPPVXAqiTYJyNDCz1YKq7uM2C6CpoD4PBNUjW",
  "key25": "21JugpXu4Zz4A85c8csNc5U2ET1CA1vHDjUwteqAhfweiZmhCPFcpBfgyeknUhkCBMWqJWbBLucPmV4Xd8sHbXZz",
  "key26": "4qXBGfTyhryAi7bpfEZDwk6CKm7GNmQDvxbAXN6uzfbRuFfYYKn7iQhGmCywy2GziSzKPdVnk1rAXKCRaxNhDWFg",
  "key27": "4UoAdnPfNXXwnJQYSxdo8rT753wHXPCFShL1DFyuUkTDJ83NKa9MPadv1b77BPZT7WS1ihKj1SehrWDJMzqCWnb4"
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
