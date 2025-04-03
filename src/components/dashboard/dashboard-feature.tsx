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
    "3akTUqt1Gi3K6Lm5VyhAuhxXe9sncnammHjBQzhhTismvWM8v6PJAf8aSHGEacMFEu1axP2Bxy6cdv7q1W9oTuYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5MJw3AhQnNT4MC6Rs1kHSFQ4WAaatCvLDZsTa22y9qEUtEqKVomzGuDzCxAJyhRAgEEFNCgwbhPMwDUJdPsKod",
  "key1": "5szxMqgiXctRB6bg8VH9bGVasUREAuQ9TEHBG6t5ujAPYJvim7iodojbDBGg311vcAVnx1GeR2MdeWNkFtRrr7Cs",
  "key2": "5BJBa3Keu1BMpmHLkccQsoG6oaJ7uBQjMdScQUukvN5UkqWEcZ7vKCQGLi9nGKJqZyZ5tBSewzPL3uEmDBaVsN3L",
  "key3": "2JLGqZJpfskMHVMchugNGA5opc13a2YRST2f6Lru4bWUH2NmbGUCCWkhc2zqXb7quqZvazKW37mqCJ2NkfjgyST3",
  "key4": "268BVzQ5hiNDFZQJaf9hf23soMDEi1yXZJGP5hRLCze676JuQTWQzsn534S4HUC2vXZ5hqrXcbHheigtEakUaDmb",
  "key5": "Xi9T7UEre2zzQHx24PQwuqJQ6WtRWbAuQcTvqpvEHouHYXr8CRjwYKFXRZqKqFwwTNaT7p7SRoPMtk6amLAHYML",
  "key6": "36Ra89BbD4HgUuXGhzm45HGfusLDZogk4SWEJWLmVrjEQt3CYTBxNGWLYU9ShsNWby7gGH21FWLiwmfUXoHd6nHb",
  "key7": "59UELr3VqUjRhUvfPqRJfoaAjnH8XbfhB9WDJE2EYua8gvasYEgnYhgVZZiFSgeB9YbDxbwLhAZ96QKycroscttZ",
  "key8": "2kSy2nxjXgPVwE9vM9nC9xaxwoj5JfXzZV8Her6r4Bkg1Ya6UQdnZJRteUnD2PtWNhJVULtzHd9gpnU1HXbXHwSN",
  "key9": "BNPy3v7sUhGLgKqVtKDn7w6V77QG9vkuzXkZFQRi9LwkUJBZEAZ5apVLKKBYhazAfo2GXQVPewwjwbj5pk6Svcp",
  "key10": "3yrdKwkoqw1epN9SkF5igAikV51eVm7AMPxVydcFQK4vHiymQi8xwnxYvuCA5qLgSTksbY95jmd4kuDd4UH3khtm",
  "key11": "sQ1Zj5PoiG9yDDQxPwmSQdgFrSnhfn4DqiQVFjfYEkBpq8jYECA16KkcRt4WJg8qZeMcpNSywftex83Qzwb179x",
  "key12": "AE6MLWP8hpsK7L2nzwSnrqAffaHsEqRRH1A7h38CmE4wgUj5iP7uwdryDLJrNGaKkGqq9xgKjjAffBUaUGrsw8K",
  "key13": "dB7PjPMzHnKVR9D3RKC5D61nJPun7QU8EkqgGY5pb4iG2BzUkEejcN5CSUvDAv1m7Bvv4KY5HVqykPH1widpUGt",
  "key14": "54XU7NNbH7f37FVnSw1G9wVD2hrL2x7HHQacXvvhftsDRpymbkzf1mJe82xG53mHrjK9RWcnLe9tZ4FvPQbLnFY3",
  "key15": "5C7t9L46fyU2x5S32MduQyEEJgUTd5dEXdAyxwdsg3FUJtFTM9styNxZ1dzgPsDgqKCnTXDgZggdR8Wf5csX4m62",
  "key16": "3W31jewPL7JrECftgxRnDJgwD7G1imy2fDRT9mLfgRpBiiqfUPj1ffSaUMBZ58ofq2nHmbwWc28MKTz6Tqgm9h8x",
  "key17": "5WmvTnxvZPjAwyUQuGW2SjDctKcpUKzy4RULYuMRyucFvFvwTrYMrDPiLefQHPWjUK2vRHrjbykkooCcuEH219qL",
  "key18": "4K4o1F5oxEDynjvxiuwh3tDjKp3EVdnnDxBWvb4bjdnVrxU8PohR51Csvbpht7ZHU4UYaD73GnoafEqfodfz3yBi",
  "key19": "2zp3ZoC3DTxi9oEzsXTkZRJLG3dcRiZdP3tE85JDuJck17dt1Tf26dcKTeSXWihQkXbjoJy6GEX2TzYFbpG6gge6",
  "key20": "6335uCQoFaHWZsbXk4c9XqzKPz3iZb6FxpVPpJuN4dGaqdTNFXe4VTLHQLWd28JXhZ5gkHvjyYhaUf3of6Byf81c",
  "key21": "2VprNVCLV1ic6YuVH7yaBjAVpv2vTamKTevNkRCpGuLFNTWyC98k2EiF7RN31gmCVNsYkuVzNzgvF4Tfwo9Y5NCp",
  "key22": "3n58sW11QGcSQpkAFP3bBG8ujenJgwrdS8qnuxkL4P5P3xA1qBvh4NgLXEr8Ud8xanr8Yg4wWu61H8NGVEoicSjc",
  "key23": "5EsqbHeQvfkU8RtKbBk3Wpmq8M2oiBbcry5rFsKNTJ7MhVFzQe7aL1zLbdiqu8HD7D6A2yNM2N1DiNKFR5H4B1iS",
  "key24": "3taQoUz5vQjfVp7SGG6vgV4PEx9TfU5dG5NvmgN1J7BpxVe2oLnYDJAWLzZMjMsbM1V4wuFqmj6hYkaUe6Ly6e1U",
  "key25": "qjH7X9qWnW3Y371imgPvXamUzR34ex4mkZVwqd6TLLiudDkbSPWUaW5JKYXVfQo2DsAZYR4dT4PPMq5ZxXjjLQZ"
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
