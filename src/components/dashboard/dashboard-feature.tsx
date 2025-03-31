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
    "656njCWdqMu8qsobYzwoYRCKbL2Z2J3z1zmZNWYcfWTwDPCGqgpPf6QRqXHuAR6QQeBeWiFjmctWhd9QEgi17pqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cM7mvnXR9GNawAfmz41EV15TzK2yhFKUffkGmJMM8A5WgLY6AQSHM4WvphvbeJoX8gkpBMmW4de18RWmkrRvemP",
  "key1": "5Jmpaoc9ZZJ6HUapJ4ekZvyQsnWpVcVwugiqT5nyhxfNEhrYog1cRq36DaBmSPCXYeWGPzA2VKsfX8hL3sCpkMZj",
  "key2": "4CSrWpUry6KgCJrGauBpdit8eUH6YVGssXDePXp2hx1BR84Jjir95g1RVEkdpADMq4Tbvzmisg8bv5nb51QJzFD5",
  "key3": "5XNZnZRxDvQNYtrCUydbaQQc8HrZsv5Vk3auRmH6MtzEpd8DaJuvcmPbwi92wmCthyYQXsfemEbfsNEdCaL9tt8s",
  "key4": "3B4T4EnFwa66KzCmVbt4i3cEJLjRm3TXeWX6ZAa1By1Hbg7pUbDyFc7MheVV1Y21obkRSa4jY5uDHn86yTR1dXGy",
  "key5": "632d45kYRkXyrDLLMFGZn2a2eYtHRxjvvPrU1F1gUzjWv6erizdo8F34rnuFyNkzM3aDztaY5ASvry3nSLHxNSNh",
  "key6": "2Fp6TyZmfagbdhNiB4iDQn93B4MquZXxDimaQYkdKqauCSv93QTRmcfLKwkm6adPbMyBtyYDAoMDhN3mZVJW9nxk",
  "key7": "4AV2LNRs1gzHcW9fQL7g5d11agsjZiNpufjAmAhBnYHAJGpjJQzA5mF7zN7TCYk9eRBfZdYq9WWSRT48CtbfTGsA",
  "key8": "5G6cpB5UBoLfUyPR6u13PR3xGuqFPTecArNoFrnYZBtKyajp3Xzw2PeZPFDzQfVBgyCh3o6mJ68YaCzqXnnubUik",
  "key9": "4koHWj8t4JfGubyfWu4hqNnpSBxdCTP4t3yy85BrTAdiLCz7bWm9CWmks3xfAtsMjA6rKyTPUPdh23Y1ARwQcoBU",
  "key10": "4rHCuK8yX8zd54dwcw9um1mVRjq1qc9oRpSZe1XUARasBzMjBoekZGzc8iC9yw3VS9fJeMgiec2VAKwpnaxmmZF",
  "key11": "WgZjHjRYNkX9FLu6evcdPEBitcwwcVxU24WuX621WXUcpTruBfCCzpcUSq3LQ5VSXpHhi3ERjiQTofMJip4jMrN",
  "key12": "2mSmdip8MmsnSXpQHTL5cxT4kcrd78fjdebwiihykqqphRQmHB9PzXJLfrrCG9JwuWkQHcrSh7ZjY3GpQSXXoVx6",
  "key13": "48mPAjYkCwSju1wPGZTVXffPVxwzHbpXmSdAK7kvYMpg9Px5ttuXA1hRyijJxAFQHWv9EvTTA77Hptvy4tA5kuL",
  "key14": "9r6L68BpacsWqWeiosyYUJx2khx98QgCpNEmgqFM1zfQagh2zBipvZnMi4PDohgcYJg4ceKyKsrNN8iSV351QkY",
  "key15": "3Q1XbdXHmRYcRS6n5M53xErAdgAYud2fatm1AvqsJLKGfPvSLuEaQSuuFZuKs3TPAtkLRUtYws8UjKWy9Xx83YTC",
  "key16": "62TG9yXBZQ4PAPwyZQGU3u3cmevgwA15N8k8qPGN3k7CZfmpUxRcE5AQHSFJ4Wu6zRF7z31XUze3YkCbV4ztKgsz",
  "key17": "2AbHhQw2gvKgmzvPuafHpUxXsjJNSJLviud3HKmgTrf8fLuMBRThHdhRt8skgxiSjsVBqJXSjSMWqnpafbN1fzC1",
  "key18": "43HfJBQvY8g9NYXbnQeNdzRZHMzkkxfseprWMu8LonmBCJfFQESrLL6Gj1FzHNDPND4q7WrdmQ8e1wK7gmwZRniU",
  "key19": "Ma5vikfhZToNeoGU6fDGYdWKbxFZwvEdhBginrmWXyVTZVD3jAs8bkLwoaGUKUXGn8KATcUYoBkg2hXxkQQBu3C",
  "key20": "63ETR5MedgXhzMmomZfUL3HnExH5uf8ZQnZP3sN7MGpG9ezss8FLhuJLB2xe7GRV45VzSyQNXrbLrR7QEtykzNoJ",
  "key21": "5fgokL9YwTu3NGtmHJCugiZ2bDK53LRQ3zJBVcCEL5qRQzpMK72hn2FrG7iuGQLZP9793UTh4HcXvaXpBpTCsGZz",
  "key22": "5sYCmXPZvvMWKYingpd9ym4k3pcTVC5Jw994WFGaASML9c47MMb2GHqac7y3M7euThE5nBTaPPXRcGHEob9GFcAM",
  "key23": "3hN53PBnvixegTi19jdivrniLpQDo6kaCzLwEEJug1wtgLRvphw99cUJgm6MixzH7Zq33LTwVvXF8B5LjLad1kdo",
  "key24": "3mHrXaT7DLCwpYZLcGTk24Vo85VSQ6SL72FQvE5QEHSLpyv2ehXGPaZ2V8xjgdQxZnMrfdeZx1hSo9U67YbULjuy",
  "key25": "3Fh8kU1RG47mCahirSjahHcpKEY9EaQHcKCnRK3iisrgDBE22mw6gBj63eNgaRB6kDzApUj1WBXWVGiFpMVMj97V",
  "key26": "3mYUson4QfXQQkpNigrbGwYvhb8TW6nSpGhw7CZ3PkJEcfMHdG8MH2v4hDnSrTho6xAT3PPu2UmQtp6nCVSWkEJV",
  "key27": "QTXJCRYcNiNiB3bEJkbYQNBCFN6UxxPywuZckQLoUbsBTSpKgbQSYEW9vrAahLTAmB9z8B6BQK7wjTZnDB9ZRwQ",
  "key28": "4sv2S97gEcRT21jZg2JLP5349sn8FkogQzEbiwNsN41eQXFCMr9TGfHy8YANMUkkTKBZyByraVzak7L2WhgUX1Wc",
  "key29": "5bULLeurHA18kfrMkcedbCpV1Zoh4D655HpXevzxJhiYYira1KZw3RECsFF8bK8Kv17TxtXDYY5EV5sDAW385rWJ",
  "key30": "7E1fE7SdqH2bLoyvPsi48UpoQWYsW2ebsEojggjkMUzkZDsyoiqYUQYyVbVvcoXBH6U4sK8EpR4n7JWCVFApsnF",
  "key31": "3qqRs7Ao2JTtbHVuV6ZbyVpwV3dfErPFvFVU7SwEPjawhq5q9WFYtA8sbHEqWmv2AbQvcxtjHWpP8JUed6U97bpy",
  "key32": "2MR9KeqQFF8RGKwDgwWZ7vUSYoxsPbhqT7m5oEJptYvtfxgcjezsTUzUvoToeMApzqVEAeMxSzXxVk5oGhkrRiou",
  "key33": "2UaWvkQKq1Wda829QPhJuBusp6CHnpMqdnFcYMQRp2uHKUS82YRKSSfsHezWfhzYYBc6ntBfafMGir4rGrCke9SM",
  "key34": "48SSbM7VfX2EvPzfnfpiYLrNYWvNWFJRTuv1brjFB7ohoKosTe7psMyFNi4uMNuXPkadMLrRmSoiYfbBLyyBNjbk"
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
