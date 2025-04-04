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
    "uaWies4ypnWFZSBLukb8XYmdNFn19B2aEJfJU5tpPEsfthdYmCd8f9XPvc7vN4c3yb6pJz8x94vMcvZtHPheCjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjYzVj92LRTWERK1Y8rc6QbrRjPyqta8HWP5Ec67FaGzcC568ZjRGnPLBY5QoKTxiY8xCkeyMPxRBBDJmEjgtrq",
  "key1": "imzD8k3MJuMjW5pQvEJ6NRhjddjzwPLQ8WqpDR8BDnf5GuASLdZ76hQ4VW6jb7SXq18zU34hPL5E3rmLfywwN6W",
  "key2": "38VTuTdvok5TB1s237EvB3kaTq4dYSMPxEYABm4jnPZoae7bWCDKaJ2XVPUwVCSD5qk8WDmCRo5ZLdixfBav8Wr6",
  "key3": "47AzsKqKvRfzexQf6uJVey9fY2MaYii8FYU96RcckQoJzd6kXUsk1C4TrPUGo9DLsrWnsk2xNPLbprb3ZvdrEqWU",
  "key4": "3vbDrD6JcsicefZiSByG6Rk3bh6KvxFmTvgMCmrqcTN4WN8b3asM9VTatHrwnoAAD1qFZZJ8YbkLWgqP6Pjm6xxP",
  "key5": "qAx1V4XptYJSbBTvy5k6hp8D97ZcCsCdBY3ZekL4pSL4QsCvcngC33VscDXSnCF2JEktEeC1ucZCbBQ1QVuKN3y",
  "key6": "3jqi5ZEqpntVhf3dVznNDeWrw6Z48EAp6BwrqY4KWFzFUsn8wZrUAbx5n5BTEhRPvZiCdEkCWmaST86FHmT23nKN",
  "key7": "aZG68jS2tnTm4ktQgEmpZi8v4cCYZUBaHacFPNM3SJRfv67q9k6eF1u9jZc6Mg1C9U8gXDsQMNhiCQh7aEEDQqD",
  "key8": "4b2oGX2Wz1idcDDEqnuQybqQqpvhv1N5XMfAjuk4FRGBcsGkKYwLDDt6awQKLnRdD398J9ffh7o25Xj7EqFJ3Hsi",
  "key9": "3hoSisqgQi2fMY63GqRL9Dc7P6bBnSZycHioS1e2abF1YNa5bo2Qndt9LKczaasjBc8BBcTCjPPzudJ8EwucqfD7",
  "key10": "3aVEdSmZBqxGrSFD9xQWcxygB9PTzepdHiBsXvLbbjY4RMBzcQG1qDiRdecbLSzDTLAme9ZC1xHJ48D5gzob7Qm4",
  "key11": "3rncbiaqF7RsDQrwtXQ7UJqKD7DN4UJ1sF5vrVF2kMx6C6M5zLBzNiqGzFbmYY5b4VCA71oB3NMASJdrNpsKicwR",
  "key12": "UxZ9ELP6nBSWwuKrrAaCjQNJ6tKXhh6MrsQA4edrYwubtctXXUJCuPa82b9Q7CRBW26eAKC7DAArUkJL5GRzUon",
  "key13": "kiCQom8LHKGo3aTaY8kMAdf7BGwjhzSVWBkrW9bYrtN9XzGqbWXsHoyQro87kW2prX9ioLZVjRM6ugpJ8oyW8kQ",
  "key14": "5TBjLx6ZXQuZQyQFpMGZFKmE9X3nWjsfj9jH9gebGaHY31hNYqCtZcJhDkWUprvKPNuYkv7s82K8h7hd4YAVHYa",
  "key15": "2J8m1mfpXrbBnVng3DNWq9qV6rPt8oXPdLaMiNNsLQv72V1BXpzFdgvPA1RD4u1s8XDqCkwncfKWyG7mFRZuWbzU",
  "key16": "4yzhJixvhL4LLDWHjqj1eiByQUare25mqCjdbku91ZSqXesmR4LmqF1gtmftkt5rf41iCKMNz7bGaVVZqFqi3BnK",
  "key17": "2Q1XhZyopLGm3F9BsRy7jFnAW7HcpUebxbQR2dvoYBR7N4hXpgPELnQZEeYUXxWrKkjbui4mdPzrMgFMoZZKc21w",
  "key18": "3BQKLXu6jmnop2mururX7WuQJ1S2nto36Ew3KhNyLQhAp4qgXAj7PrP1YicQWJWy6kFkQyZtwChk3axrb8YwsYCm",
  "key19": "5ZZRYximKJUmVxQ4XFa22dRa7TE5pCqmTStQSZJ1wKXw4LVk12qNG32aYEqfmgqxiHmGMU4m6XShqRiFmhmpbDTS",
  "key20": "3HojwsqBBFZYQSin6UD6TrUq43KpFQ1er2uLWoZ5wgASFbyuChWK5vrBMzfWyBpFTpncHohojuBuv2tUHMovxMvZ",
  "key21": "2yJoATFi24F55v8sq8zRCEPnqLSsaMFSCSmucFyQ17Qg48t9RTQiwGhgzizxU5r8DaCDnuX5h75fEY62b9e4xsg1",
  "key22": "4gcZokb23LkR8E5By7c2CLtvPaH6CeSeTUJfDnm3g65QDcWQyWfgs4kVc8Svpr1JY8qvzttJBfxPGduqfEYqLePS",
  "key23": "3pusavb9FH1exss5DyfMYaRFRyQ9UDMk6hwnpvvZsCUoajR7afeusDoS6WqzfrQxi3sRK2VPbkAcyz6VWe7c3E4x",
  "key24": "4ZAPmXDhRQKUz2sBZBTw1n7UBwPR7Vvs61aBBfDFRxv3HL46dwcDkELQbNGUKrPw2r8woGYCs7JMYHZf8KLKT4dV",
  "key25": "3svro7ukiXy3JVarPG2cuoSxdV9cLAL2xpv1dLRRs23bkDm8nN9oLQFfieFYyYns7YmnxgKyuhoUgzZQ5gQijEpf",
  "key26": "4LdCDuvKYMXDhXEtuoEq6SS26B95VPb5ba1D1pNszpyu6h5yu43aFKVPjgQ4yKTD2jiF6H5ogEqHBwZgoPbAApuz",
  "key27": "2vWT5Ac5mfzht2c2eKgjyyNKs3W4dankHFgQ7t3dG16YwbBAHnR8AUcUfLEXsz8Hzm7Nb7GBjAUMLJXN19eZs982",
  "key28": "4kMJ9GtUYu8o6Wx96Z29sYp4XJjrp1edAMHVkiKYmPQDyvHQ6Ncc4QMrqFbcxp5sLu3A2Zn3Wjw76gLUj8hChY3j",
  "key29": "5tNaie1eq6ApzQoJQVPEkN5N1rdkCyU6wW2ik2MomkKxubJgjKBYyBX4PxTA7pzPGErYDfe36nqocUR1W3UgAQ2q"
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
