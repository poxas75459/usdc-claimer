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
    "3TxNJfZeWgNFo9xtQ1EaktKX65GMstpNRwpDm5vdErX4WjVpgkd9bu1LWEasSfiCRygHgm2cwsZGwhHeTQ1pFUd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HNK7dQnfzT7gbNUZauuG5X9iHmM7YXjsWifSMjUbAqqnAwHd72LqAecdgboExj932d9ET7AiJPsFAUbaDqE9txm",
  "key1": "3ADkSdP6RYvh2DPzaFxNn2Q8WTvajsEZz86Hc3NWM8MoVPqfQ319EHEmBBj4W5xj23rWiUuhUFqJbXnXgtVUcSYS",
  "key2": "3bUuFxFskRPET5vNYF8kJ3jWwZcd6aDvFST1H6HbnS2XvYyC1Gkc1NGn2vGT3PtmhUTB844iWKzyRjbGFZXVormG",
  "key3": "3AdKKp7oVXvnMvomEa95jDZfVXFYFsaE5PGagcrKPFjbuvmav1LRWnSnB3q84GDQ9WU2uf6zs3FzecmRHxDbdtAP",
  "key4": "3ZNAfwCtbeKPyR5ap2L6yYAVZLyGfQYGgfH9efnEvJ6ULkSYHBC981eBxgSvQ42FpJGcrUxTmLMGkq1mR5fkxNpR",
  "key5": "2SBtw3km7D9NQT7ndCCNFuip5ezTZiKRQRc6QTjvVpeRbLFovAxePPD2EG2APrqHvcRqwC28e3GdG2iXBrUmiN9x",
  "key6": "5AW71eEg6zFXoCfTuiZxpRwsdB3rkM3yZqHc4vMjSYQB48YAhxTqz6BVwQiD4szDzxw3CWs513SF1jsnd7fVxSwz",
  "key7": "5WhbBvqobNXR2jpYza7b6ENiNCcovThWtZGnyMGeMDeanc4QN2d9PAhQFnMUfmcqG965W41UhdZQUvnTLjtP71KC",
  "key8": "4SUKzdJKoLupK9a5dmNjAnMrWaKqKhVSXkVJsaeF3sGfURfXfvGgKVVFQ8b4mX8xZwHy2A5vnN1vXNRBoUFzz53R",
  "key9": "3a63oD3gmHGZwHC72cdkWxg7mCFsYeb5mrAC4RL8FnXQ2zKuVRANkhxeuGeZA6xQX8WeBqxa6x4MfBvECexvyiNd",
  "key10": "3AF1fJPUVaVdshuZUWRc9UQ4BZ97pTSoy65tLtZchE8kGZc4vqvgoKMoqfr2KPTXeFeUDYWfxa9xNPvQ93vpUpti",
  "key11": "3H1qu2dZNoMPqfLuZQZMX52dsJzNXB94hHj3CTmNwX4K3SqPNTSH8eatzAFjobzKRkLsdBnbAVQgoCaPvA8a6KGv",
  "key12": "3vn8FK7wCwAmJjqkWYD5rqQiTkjhwgm5kuUSmAoorUKX4SuCTmbcstGMC3ixwBgcTu7jKDnCzuHG9BCtjXm31fnU",
  "key13": "3oLgkziq2xAvXbnZm9EkEg6Etyscd5zDYAxQ7hqsft2ZD7EtH2ViU7hWEgVRAHFrFhYh5Fjtyuw3jtSATT5A1P8g",
  "key14": "8X2WixsbkXQFmWYTUFmAEWMQ94KYKMbmJmDe9AovhZSLVxHBQ42qWd2x1w34nYLK3SvbrV7ng3kUZJDuAd3Pmif",
  "key15": "5MS3MrafMhjuta4tzt5QzfpBYvLXhCdBGSPdqmz8DJZYKdWzQFnPszDNPW1vnjmSFUrwp8nrgnheDYYndCHD64Cx",
  "key16": "3qYTYnzs6HZQsk1hp11WSUNFNodA7xyHVaSwD8WDTAaavmcEW6MLuPn6ByH9zNHryBF24pYC8aVpuqZhzpQY7Ekt",
  "key17": "4wvinbhEC6fkfr5NVkzuZrB2ZTMmiTrGVRBWqtUPGjPyoF3JzyzDKHku8qGb3F1LQ2377ng2FnamaWYLFej39iRw",
  "key18": "EJENyzK2HnY2L4rC3LWeT1S7tPWtZwmuCJignsbikQAWo7UC5AFVsnzzQewQQyVtM3xyfn6dZxn4MHUt9KyGTdF",
  "key19": "4HJqbB2SzTGryFQiVwkCpyKLZq1tbT2Mx1uhrpuwds4YsrQzz1QrQHPKhuvsbDh6Hesci9syhg5dSY2HF6KuRcUi",
  "key20": "2vDcM9YWdr4R7sDgQxq5vp35kvk7VWX9wPVWzwNvmubKWhNLu1irNuGrcsjFrxpMqE6TZL1368VGGAFjWrUgycX2",
  "key21": "5J41iVqDwFyziB1bmUTqA3YcdgGVSxCyVksxV2SsXhUjjgKnXgVJfcYKBAwmmamrrTVcjsjeHaNtbpJRuBpRtfgX",
  "key22": "2SeV2x8NvaVWaJRFCRZEkYPcxyewpH16ou9U7Z4uangZm71Gfoz2PQHEA3VKvvhuwjVwmHCotSSZr3HgEkNmfdZd",
  "key23": "5GnQnoJk8p8EBpuVnzt5aRUHRLLEordug45mxrcAZ74yfeU6r4bDjvhQ9ugcqcmuc7gRtrjX5dSAbWQqVgTkdrxr",
  "key24": "58CA4h5ZbEhPEqMruvY8bSJDpEzLWcuKfBTwemhBdH7dhUc2RF8HJsGzaBw3RDPckyY4sfw717aEq3rB9Nr5hAB",
  "key25": "4NbGTXjmxSvqRcDpWD8GbeA3zPKDMnqZ88aBUEvufb7vZ5yEABkhQBH936X66qz6tEZi8PGuCLaE2n6Pt2B3Qa72"
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
