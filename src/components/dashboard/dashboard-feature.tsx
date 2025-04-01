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
    "4ngKXHzH6Ed8ReWSxDB9RL5EBx45cyFoykUyrTMkt8NwBszxJDJfhRShWnm7k2Dvp1LuwuHePFNU77Prj3fXUy2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmKzJosRT9JK98jSX1zNw6vtD8hTaR3S7X72kmv3YHh1aaEs2PhBgvdgjZPgqEfYKMN2oeazMomTzSYvY9oN2qV",
  "key1": "4E5dXFJXW3mTszR3dBM4P4B7hEUBLVo9ZSHjjd5GavatNuTVDhapqiMsbVFEVmPN7Cbp5FyjzcjQBRmGFHB6cgDh",
  "key2": "32HzmGgfPhadeLiq9CJXHSonCG8QkmTnY1mxJjcV1jy6Hagcso7jZtH9yQeHNLjqFzqSDGcg6DXUrUz8mGVx3uzQ",
  "key3": "4LGhgCaykSjK2swLw81ngfCrGg6RXehCKpSHWMr6kzaPbzQnwNTtLYhqTdpPdzSnfjvyVvfbLrwvCLyKabXbJ98N",
  "key4": "54nfYtLzzanVXF9tZhgcpHiZpLs9L62BLTWbzcGEia3taV1PAicATMT3wfxA5QJYVzxficrqFPBkmBweDWpnojPe",
  "key5": "3REcaYr4SsHeG2cubUNhGc7w6tHoqymEDFE6PDjjZqyerz2F2DSue1k3aH7BVdN1nMvnK3s7rxAw2HMfzMKhJVCf",
  "key6": "5ULH2oxcXKNSstNenKWAnyaQPDT6h1YWnaeWBkcSBjC97qhsPmJXPwU31CAWmkGiRECHgTsCmpm8tZH7XcB1QjHY",
  "key7": "5Ynq4dnAvY7pu9ZoDS5LhZqad55tSqPRBtT3HMPEaYRCKnswpux6ohZBULk6ypQjC3f7E2vKYHhzmXF3bshCsmQp",
  "key8": "4K4X4SkwNeRPoUdq42CTQ9EabY1kokY2FLJgc3cqxCoj68m9E3GD8dpEQbB43e7o7wyFSVdWmL3X2TGmMYf89ct4",
  "key9": "48BgzhQfTqBcooSxcuPQXFe4p2PZUroXZkPHCZsk1uCSHFcZWe9nZNRYjrwZuo9Q35fbtsoyUtME2WmgGTuvbmPi",
  "key10": "54okPpBxHLfDVsFfARayUSFHjvcbXc6gyoTaDtpKGmRx7D32WggjFmCGNCeWLf3pn3CSHdkEpLLZk35Z3eR34ddH",
  "key11": "657jshzb6sxo8Chzpe3A6USKax8SuS2F29PgRgxXAmmWHV62rKbmQEenUeeD85hEGwmPwBaN2HrJYLcQ7n7Bm5g8",
  "key12": "2Ghh8wKgXLBoji86D8rJk27tVhs9PsbTRGyD5CodCqM6y8f2VsHchbBvtEhWnbbSqHk3fsZMxx1c9UnasrqvGRCs",
  "key13": "5oq2m9yfB6tM2yx7Hy2oPtqA7rRvEpoC4LX2gqTj1EVS7EYNEDgqt9rx5RZwKx2VuFo7TWtvpdDYPr9u97KavTTJ",
  "key14": "2kVxsEjqXnKuCxNPCVWZHkEPH7wRkb9pzXvYivAUjGgQWdWtdnnimPmmwUEZf6qbNui3tqQPv4gxkeoUVo1dmP2s",
  "key15": "4JPsHbCntPxEk5n2ZpgxEK9BB4LzEHHNLCyT4uVNcbkGVkT9Nt1rRZ5rR77AWFPNjghJE4ExtU318Ea58DQxfrif",
  "key16": "2shtvTyyNFNb4HxRFFMqA5grzBddTKeYktyYqx1NnknuiFKZUKxrkk4Py8GhGY1f1gHhGxgkjX3dobcfKFAjdCyt",
  "key17": "f3zTwh6YKgmaiFu5NKxXQoNCnHGSAw856oCz3NP7RG7dYX4JmbjnmbsXU68DX7MTWV34MEv9vED8D6jXcCqDKwL",
  "key18": "PPBjywumkesT1tSToo9kV74ZzBLEYHKiZvFfv2mjRFE86CCNAQSHUS58cxiEjNPDRiit7X73H9M6UZBP7ki83BW",
  "key19": "39dQS1ZQ5x4smJncFRs1hG7TUiZci6b4JEhnG5qseKsELd1Xt33UxbsAvPPxgJyZHcbRBovxkmUJs8epBoBkaQfS",
  "key20": "4mVjtzH2vhEkjtcA7LXSLyXQmeEgAq3u73tdJ3WNX9g5jSH7oQaKUvr4SXP9cMQqCUM9EuCLsW5VgcVpqDmLT8ZU",
  "key21": "3FygBot7teALXA16oTe7nuNvvfzbXaDNwqqyD8A2xd7YxAaDb4YpZY16YJ26LfQMad6SXCbzDshPSTEoxwcEbLQZ",
  "key22": "3bs9QNWR8D6nhmUCDxLkPmhmaAGg1fZ8vTUdafbZdptHFyAAiWrLriK41C5hYeAgHhArqvzXGjdFYCoaMaqbSRpM",
  "key23": "3FksVxK3YxkKqd8yNGeMuej62HjLCNoYoaM2EHptbkCmphPfEDvq2YLhUAQjLZR4QXgJZh3PMapAykhE19tQfTWK",
  "key24": "3FzqfqxmLFKF9ogw6q9qvC58tqABkMQk5rwQ5be2yieQ7VKhWgv7JqsKm7dYFXeYSzxUciwd3zhGPT71n5fTdHtd",
  "key25": "4BBz3CA1bqwAABoEgQPJjkXM54zaHHuGtM5SDYHswCf3ASbxRFzuHZn71WBBhBTX5XWmB7LBsvfNmXyH49byntke",
  "key26": "4f6JPiqXnkxDythcAaLfyc92Htu84dD2oeTNq1GtiahrUCthL7QfWYPucUPuzGSKxjf9ibu6BmybCgRiw4qvM7VR"
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
