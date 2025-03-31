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
    "pGENtwbhV8syRRthcbrueWerazdjA64G9dnJ2iChyYk2UGJm32Vj31mBGcwLawKjrbx4ihRowrMJ1X4JuL8cLQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dqkTtFNymhHhjraQL3XvZEPyqazy4nGTHMHgxe3oTPyi9do2wbWakuuzcGxS2TS9YwbQxkXLyFNfBJnLVrd9pvw",
  "key1": "5JeyEJ4x6DD3gn3DjawaUMLevLUJSA4FFf88gK7ZuythPsWkML8K8j6Tm34HtWoRez7ZQojsXx3VocyHHk3aRZHF",
  "key2": "5hDu9pyvTUhvzRfSFbWRVfgJ9r65rgnqCcBCrSyAdrCfDkagxW9kMSLYoLpHfmkhRJULEmAmcngnfTHGGkaN1Pt7",
  "key3": "Swtsc7vU4w4BU5WGiXhg4D5h9KVqxvTzsvSAHcrhbprNjrTzrY6r1b1C1z947UpzGqxp3Ytu4PXxrSmqGTLNwpY",
  "key4": "4DHkDEkspSyLfhatv28aVXHr6UyfrPbcL846Jyy1qefsYp4oL1GASWYFmnTLtjJBRy3ybfd9EfF9x6Wvb5es7EZA",
  "key5": "NtGCGCxp29SYT7NmSE4PpgUuq9bCQhZHZNouzHnn2e7XTQWrJsNNxL4EfEzJkKLe62pduhMXiFZFdnfVYMPTvsH",
  "key6": "DpWrstQotnV2oSbFaWM7aoT9MYV1qmiiAWdWfdkDgRnriQhsLPuA7NqqkghZnzxz54gnsvuq8B7yoiyQcTqhnhu",
  "key7": "5bHcpK3FHS1XPsVUA6rCwu9BVGGbWuHakV8LwCndhkm8YjXbasCiEQqcXpsN1fVadT3RuqPpfbYt18U4Fng2tjJA",
  "key8": "28D2kci14FLnfoYq6mwuJJj4CS3SXBWUXwbxjt7o9XvnW5eZMJn8jJQdpob1q7WoVYgXQecTDLgCeKVkUb8NTwrk",
  "key9": "4ffd3AHGXvQzvkSDQn7de85vitgvmqfumekXMgF5mVNzSq7DhGa1BqaHC4v93EsbK5SBuJ5nzwNhLBGAmZ55tA7b",
  "key10": "4KufVLZfim2qK8CGXX3uBUkZ8wyA7Dipa8PBi6PyHqqq98osu6jCt2Smwak3WhB3ZYGDm4zJjAqBMFnRqNoYDX2P",
  "key11": "2D1qfUe8vCtjfjkEA74xnTsag3ZeYBhGfFZtRErKzQ1oPdrkBCP9r3Du6iGihwta4b4Yzn5etgDBdBP5S5oUfpYD",
  "key12": "5M4nKEccJQspKCWAoQMH6RBmpt3VibXJFzP1v5eYDEeopJpjVr62ERy4mqL7nLEuakPoPvQ4E8ybS5ERU9AoNf2m",
  "key13": "22jPXvYPdsunJsezeTs6TwijWMKWhesbrcEK1bQ4SykHkF2YJ2msndwb55Mj6738dgqNaBYckawLfmTqtWCwSUyZ",
  "key14": "4WXJckdBg8kMv2Jy5gSrEP9fgAvRhRaMYBBsCnEFUFkC62z8iHvqhvi2pA73NRJs8yTjzNvK2U1zc29VhBB6pKay",
  "key15": "2ZZFuShCU8JhvAtSir1Wc83KdsQE9La4GnHJStHujKmhwKq7au2sy9knRNaEoEzmrygZ33dpncjTM7PtiLjQudK1",
  "key16": "2ZoziKNKfpdBh72JenhsVtXpDSNM2vF9RMj2hPHeUeKiDjUqWWZ1Fe8smNaDmfZ6mQyUCdSCfoL3RnzykJb8jq1b",
  "key17": "6Hq9H3bu2qTvkg2Lott3zdbvvDD8Ca9vfZqwwrwXUa9VzWxHBsGaiD4N5DXMV2tykLdR7itrScZuxK3X1USK7gA",
  "key18": "TEAsEvbHaDwrA2fmSW9hcdthWzMcxGWvC7s33tpmy85NeimWmoFa5HigZsH5D48VQUA3zfdbGCF9gpGxikhzjjA",
  "key19": "4sUgxf4K3eyqY8PUBsUQYEn9sAtWTKKEDUpgVvuL3brxodvU9jgnMNpDuQnwyo61VdNPGabH7Fr8R2TMmLzqmGYD",
  "key20": "pjKMwjJ1sXsCM14pUFEqH4CA55rYNBYRETBnfLiRnSfMNRbgFKhWagpqdGWKcTN2uo5dZbEzFFeUabdD3KbSZiY",
  "key21": "36PMpCuKjv2gJj8RWmMAJdsiRKGhxit5vSgMMb2fK23KNM2poGsB9em9aMawZqAtCuxw2dvFgwrW6Sr4kJRLwQoP",
  "key22": "beCShjPWuJBu1RFZKZvLtHpijKLjMgrR8taVXPiDD8zLW9VWBEx8WyZeEuJ62xVdKHM9TotTPWURgxKPY3EpHLZ",
  "key23": "43g6YAubiCJcRaHDpcsaqwvXcsB5uVQtMtVaj5RQkbx2aHaMCBq5pG2zXNQLQxg6geqpiLWCJWXBEyXUiGYnX59t",
  "key24": "3AV1EaXXUjXNB6J5B48MknWjqyj5y9yWrBKRQyT3c8ngWQs5r8cUS2dhS29BwSLc7iPiqHx7rgMqr97HxjHFF98h",
  "key25": "4cMytg2cR26YbYXfEoPpnhzWC2vSXw1nLQdgFiujoLYp3tEZ5nQZPtHVvRPeA2oDy2WMQQAZhoL4HaVRZUcAE1f6",
  "key26": "5xcZLsfWpTBAuGRJiBaRFJs6DGR8LXWwPSCzgQGUV4Ej17Rs4CdiotJdg7CZFGUATsSsNiiXLTqWoy6AB1igiFWZ",
  "key27": "4cyrfJ3H8P8jiYgM2dV2vdvDN3tEaYcNqmQpWQpUEkYuh5N6n8ffgv9f6ZTzRttgYtoQLLYpsNbfe3GSaZT1AB3t"
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
