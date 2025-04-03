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
    "2tZed5kjxJEskyW9N2vF3t1NuMnTzAGgXr7GorJ8sHqw8bomeSmHycN4hg3x4VPUxFeYMTEq9dqED6EysZfY8Biy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LjEb7TeKQEAYBTSq2pWmhDyuFQDi1DNoTAuodQ1rfuHVc9eg5x63d88tb8RL9PSnWUAG41ZhzVtfpgujyXxTBBC",
  "key1": "4VEdp8Jt1XLXmvSago6CVDG1arq52ZDGed6qsHYupUxrncX1n4Af3X8QUwbz2X9BnXvrYeSfmeTjJryPkiLGhYdy",
  "key2": "61pm3zeae4nG6FhmmYGd82VHk5DN6VkKwYVa4QCwmkrphHmxDJ2ZJAg7fhs5Dxi3WtD39h1fEJ1fWXe8Ejw1pfPa",
  "key3": "5xwZJ49KYsET2At2VRxB6meyaftppNrBohsENUeM2aKJDVSrToxX1WQzY1ceDBBCZR79wAJ5E5T3esTueY1ACb35",
  "key4": "5qxXGHj25yDPKDPEJzKKxSCKhXViAXHABrL7RpbKZysmZP87qZMm6W6wPyFRc82LGxz8jSbLKKCDSA8MF474uym7",
  "key5": "m9XDbyx1Aa7ACLxZEe2BwTuEoRmtRV9NSzPzGDN1PHVNEbXgcgNZ8kjFXsP63GspXRBqtBMeHvZWCdQJvQYF318",
  "key6": "5WUeKqRf7BftDSxbViLSsrLTE1fqmsPfyTUmrbcGWzYWzXAybohTGykd6q6oEvHAyMFbXUSy1Cgr7BZ4o4RkkBL6",
  "key7": "2WPK169V7ZZPoB6GW8F31ozhGqHGjRccQLoeaFv57uaiKhD3gCrZXju8Tev4ZwNip3WSiJWodZe1JHQ9kcMosGqr",
  "key8": "4NPbrR6CyF4KYGaPqzhYVKRNvD7ckunzFFSVTZ6MDpQoBv2nQpdZ6QGs4TW1bJvfheNSLEqXSBScX4hbJsrUWGiv",
  "key9": "4qFdaaU1GHNHdZ9UAdQ8onsz4HJSYBBabqZRxdgCTxHqfukQnMwWWofSJCMtYA24LCmJLHWzqhTyrRe3wr7HF7zx",
  "key10": "3LgUWnvtr8pUBzhyK7WQtaKRZoXBJWPUJBzaKPgA7P3nA7jEBU7o4jHedN6QEimxTq3CMwpnvccupMrF34SzkqnB",
  "key11": "5FA8eycSMzEf171LkiSSGo9MPa4vhrKYHr5jTEybxjit5G1spSJEH8LTg7AAtbgT5975mThbGruL5R2C1Ganyqa8",
  "key12": "5FmAUjGQVqiFLW1X5crF1zr6LBkrVo6Rid8jvMnanJkeiLW4MmAZFhLXTZEY5RNE8tx4L9VogQr7XYtpWmdiLKTB",
  "key13": "5mx6EUNs4QdiH8vueUf4o6f7eyoemUTWzrsgivwUz8joBkQZDgVvknWHZQRg3YCnMibojAEmjkRZphLq725PXo79",
  "key14": "zPXoxb1aii68e5Tvma2TkSx2ELviPGExaDBUjfGg2hPaRuc8MxrYws8ffnGax9Ph53kdotQBwBuVpEZiFj6Jrrf",
  "key15": "5QxNUj5awpux9XqNCGktFzhdotR1QKQbvmFEFJS8qyhTvHXdEwvbCdTh82MpBK8g6RHxqzfcTZ6hW7UFJEb8Cn8W",
  "key16": "4XuboLVs796sdFmcP49U5K3bRFENe3mVEwgeG3tLhpUtXYALbZFPDXGc89XvGH7AvN96p6bmapUs9m27tc6xAE88",
  "key17": "4HyzsEMRg35bRtrueRECVLNESHGMfZxBggj8QmqEcVm5QP6LtXjyz5oVoofJhCDmB5N3DXrMHDpEfJyTonxL7Tw3",
  "key18": "5MSinxZ2SqwQm9Tt9wH2U8aWW6ZwymeirXWj3s2ZsJ7bDCHUaNh3Zem5sN8y5R76Yon85aAw7TrKQY3yFpYcLBms",
  "key19": "3usKyb3gE5DTQNGFeyeHmgpRUFHhAoWycnCMR45B8ELzsptKoBmRdzY73iNg4VAHHT6wACbXfWFwRqwpWHURCfBG",
  "key20": "4e8PZxmL6LxMU3rqnGZ5A73WviM3rvfx79QAy1qsBmYEad4dQgKdQas2svpio6ppfuH4NfKVVkgn1KGL88H8fnFr",
  "key21": "3ZizQ6JJJQ5dUbXorzwj98fLHA75wYDrRjcSKJ3htURfXwoT1N7G8AesqQhMikQ9eRDyiaqG2AqX3U7JKDBMbWyY",
  "key22": "67dHBZsfNwZqbZCaidqz9SnQU958RnwejkWNcnQt9bPNnxDQBGsxxbEctQzoStLYyq9U6sW7x4tf6fcX5t74WXYe",
  "key23": "5UjggQVxsD82bGe83w2HXKesC7aupKKfmbisU5q1zgL3GyTEUQKLXY9ryCLYEwMXPTfSUQoJGQuqvLR2sE9vCnSR",
  "key24": "2wyoTMDrA1U3x31nkXfL6MEPVGAbymRTGKySSAHWQnU3EscXpYPnp9Y1Ed2Vfzku1cTrpccqVs1p8VLSMKJFz7M8",
  "key25": "5bnoektEzWf6QviSH5j5gDWpErGsSCvpYq3BhdVtsp3DzLAgYopZdypgsqf76ZtamJPKNrhD3z3DmGoSRdQex7Yc",
  "key26": "5uMzwDZwuEsojNRFtMhuFXGwefGac8GJtYTtVCzJnmPX7bfHHoYeWdxrXU8EgAxtecPwHNqpy7wA6fkdzrdtefwf",
  "key27": "3vJDWHDyUasZH1vg1fDxrrqEKiJbzTZyu1AMe8j34QZrFzsRLFD5zc5MTjgyPfuVE3jJwTuskGsjfspPkUhEW7Uf",
  "key28": "2ujH4Mt2QHViFzJzBu9KwxqC76LWiVVhGkxrmHQ3YayAJBqXq41qn8VcCagKpdZPdHhwz8e5zPwpBXuksRPivcBr",
  "key29": "3k5hxGYLAQ5WTuk1to7bUZWiDQK1Ln4sAMzY6xcVu9i4aA68AZPteDbRfZqnbQy4VHSiP3EZrSseHsrSkTWstDA1",
  "key30": "2E78udGZoMe8D5HZHGtxn7HRXKZkpMRbLGGFbuwo5dfaDcgTfdgBARvvLX46HYnHBhWP4oozuki1Gt2ryCLfCGK8"
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
