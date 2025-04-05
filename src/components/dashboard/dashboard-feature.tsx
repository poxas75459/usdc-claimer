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
    "HvEfNTGUDsjUKErSfB2WJou2EBYydVtYeRYiLhneobvEwLvw5Jm8J5mtaNMnoEjVYrY7vdxV7aohURxEdNWKYdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WATbtFzo9YYzKqyKYxgRzfv6aSGQ2xpWoecgjPhKU15xR4JwxgVJibPL38EzeBiS7Zq6tqLVUVidV3KyYewvJCS",
  "key1": "bWsMQBbiW2o787keNiiudJBkWgMeHf8auL19C8XsZoyqrVNGjDJgc2s6tSt4qSJUgYRYSupGhUSEHgkpsU5HZqb",
  "key2": "5EDWmr6XeCo77qhpm7ebAds2SDBpRWdNSu2VascnZqPtY6HtMsUB4D25xwEXTU3B9fmqs5qeSq23Kw4yDymghK8j",
  "key3": "65q8aZYmgaGWhQV8YojxBBga5Tf4MhbXdExwGt8mK2zLLtvSqU2hBb6AL6tpV49mVEq3qjiwCHoVz4y4xiPjuYin",
  "key4": "qfHnjoV9dc4hxPAvWQXEgm2eNu4zEi2WgLRTJGmVD6coKnFbNW2T4JaVGGyrgJe9QxGdSPtVHpo7VwLrsLAuMLp",
  "key5": "28ogWYLPTgQ7dCKaPmC4uMnEoh4hZGVmhGNVZKWZxhPT6EcPcKQWvJqL6SXsUedeA6eSGTvhbd1Xmn9rUyoKmGAh",
  "key6": "31SMwJ6uTfqgFBDEEbV7RjXEBcbDLFBnN5wpvLtLSGn91YunAaH1GYpLHz7fsEXJjMAZvr9ckSdPXW9tM8DDrBgd",
  "key7": "5Az9P52RsvTSAXkGTxfwgvKeBm2jmCQas7W6ZTqJvenAx8bdjBtDS71PsAQCoxaYrRfXvj7q2M7wA2jzjVqhJxfC",
  "key8": "5WzJQ7CPLEb8r3QdwzSVZVnzdMCuVfagmUJGSfWL5XdumfLoogRze43e8QkjzThAYHkSBeHX9ETgB2HJXuZudPD5",
  "key9": "59KzE1JXsBUeejWq7NTZzBJcPBUcBWDBzqcVQcEb2jp89oXQCXqVGQwv5L6sJgr1Az8Muupe9P5fGvwHjkTHTuWE",
  "key10": "67YQhYKb1PB5pJJBLVekRzHwjTX7aB5NNCfRohSaUDxiPfokq35XTCbo34bVX56dpjcEVAip2ou1HzAuPYJtBk5f",
  "key11": "5owNANH8GNR8nd3yGFq4YazFPMYFxfinfXNesif6PdZjzTZ2ZaWtHpA84U2PJ7sSJzHdHZmAsnuwcR25xz1ZLrtJ",
  "key12": "48vHhFqFM3WbtCwMUb1ZHgzAGySAaTsqNugFYEj13XayCW9J3NkwHxZA8wZ4cGxe4t6HeybAZ89uMRs9y9V8vR84",
  "key13": "5sKUzJz1ak6UEMSpC6kQ3LGQuUTG227eMujnP88ruXxd57wSirB3YjZG9w9TApZ7uyVnRGVcZiRwxzPEfKhcqckk",
  "key14": "3WVABgvVNYnqE8HzY3CST9QUQyrNvnA4BBysogh2YiqCK8fGZwgeo9awRkEDBeJmrfmGxhcrjxi9dGm8gxEctt9t",
  "key15": "3gCQbQobc1Zfy32wHXB9yGYk4KrAZuMWHN63zjWCnUKJQsJtEa6dAqM72WbhsVoSX6ZrnM25arkQVGQuH1TH8nUU",
  "key16": "5A2FrQ9ngLxNC6ytti5u4K1i43MP7WfiMioZxmmBd8TmruCSFqkeFvzkXs1hfomy6zJw9rkZzuW5eH38RJhkWw99",
  "key17": "122r5bRtDqwvHq7vKpYYiv6tZR42b96eu6zvocYr8DKCGzdeuRDqK34q1y4FDFVkxGf36iJLpVjWYnu9J5dry81X",
  "key18": "28kBiEXWo9HGpvcmoaG4EeUXbNgjF1ztrgxX7Mxz9cviSaPrWEUXvz3UWtMHjPvUZD9EtB4sAXMcVq6c3obFmBGT",
  "key19": "2Gc7aQZA6J5LDm54YhHn3Fm6EHtQ8mrJhCFWi16eLXuYxSfdrLaZ2LD3cNkkGF63jqcBYBoFiZVuFuPxNYyTdGRm",
  "key20": "5uonAFv1Lrj24kjpWu8NJCiARUgz7wWeSpXC7JjHLPATkeZUL29e81UzWyDvL9usaFHh52rnv7jyAHe35zuW1urf",
  "key21": "2deTjNEKNEED7ZScDzZ9MJ1z3P9v86yWauVk14xjLiCaADcAeQuxVgMEct5q1wEmWyFpKRdcbQqYoxNczpQJvJbd",
  "key22": "5m8pzw6ZEtKd5CsbPUrcbJjR7boXiRV97QAzRQa68duecegRAuTBkQKZonhU1qzTCrE14n53CBSFU1DFaDFcKBtt",
  "key23": "3y5VEuyhE8LAHF5gvQHTqAChs72hdfbPRUbTvwFmjQFr1bCT81raSZHSvcqR417uJ7131DkMaFdpkvbyqDRANoWP",
  "key24": "2svANw9RL5zn4LrX3zRBPqFB9LHDN82KdXWbVSxAM2TNVY9VRcH2UfUMFCWWJqiG6ELWcpjFmd4m7a25NqtEa5Nk",
  "key25": "25PmJEsDtmhptmQRKcgVpAaAfkZFzLov4A2sPmUpVPpQoG15ed8UvmRa6mX7qxiQEmTits1E6DbgUvQrESNpMRvB",
  "key26": "4PhDQquQcdVHmS451acHzQFWVhuqvwAi684hxptpZRiYYVwNpTAerQsypgxpLVHsYicmtavVsXWkwYHoBrhbt1h8",
  "key27": "54WWvcGWTVKsSPNjqsu8dGMzCRUicrEv3RuN8syc39yeXuRJai7FokNiytojURLT2QpvoKfUVNvCEvM15VBWmicX",
  "key28": "4zmnc33W2xtRoneNBGNBM2MaQfGnEyCEWQh4DU5BFSjmxMxBUfoJ21PqExsu44ZSzv2zNvJni31cNmVTZv3ehFfo",
  "key29": "35aY1FCyHafoE6mu4KGHbussPWwJiCq4LpbQcbViV4KUG8Wa72ex2DzwGFoXqRPpdYCngLcQaZSWsZqwXh5bqhsC",
  "key30": "2skjxTkSDASAGVuCvmEywUFmgk4SpVUBZZojFsX9hQhrT2ZE7kBdew8vFeQwEAwaTDvwTph3SSLuHWgJhyXfokxT",
  "key31": "3rSo45NffXHuTVdgde2j9pmkPLTBQZkNqjbuHS3rkC3KBbTuyh9zzKrSjRUckwrWsVHnzD1kTtZXQ4PXMHFyobob",
  "key32": "xsDP3PZKB44rvarE3Wn1MKHWYsCVs5K5qXf6PuMnYSz4VfEVFvA1nxfkX65xzECdsL5FGqT16nWs4f37iorADTn",
  "key33": "uCQh9F9WgFLVrHpPQNfAvrq6a5nvSsRP89sgVEDDFRMnZFHJFg44e9Dp4jTRcKnjsKXyDNa71ewFBKMJkNRBzAc",
  "key34": "4p7vUQQWYmxy5LBgKFEgweFKCWyywGGM54W7Bv6grbYuTXnaAbFbMDyRMp9N2s3fV4GVfsmdsFjwjENg7FoiNDYA",
  "key35": "4RaAr7rtqQVGT4BSeaXQJepeJ8VZuaau9UL9qEM8NzeVAbadpJv9DhpiyyBsB2nuRBjWjPip7GokvmZY4mnx7fCF",
  "key36": "rAtwvNcVP68N1VQofqWiN9KBPfwhgBwSiij6HANPUGyuQVVKF91fSVGQgkrNHyKSdgXNhbaLAWLASUTHfpnqFkS",
  "key37": "2ntusQar2MENzY61xQCgi9zZzFaJHwiAsfkGw4j9WpMqaVBeTBvp9wu5c6Avd7ty6arXnrhtHU1BncsyybC2XJ9Z",
  "key38": "5mhLN1QVPE771cgN7tRpveNZXpGgavQJeK1KDC4VpbgPTqcqVXZCAJgq7HcM6ESDAMFEvt49UTuhPzCT5ekeHzPo",
  "key39": "3oE3VWzaXS2wd7vdpiei576iykcQaZTG3mzEnh9LC7wxTgeR8QMXnhm2szokAEoGA8GRBLUJFqW3LBfVmdsKfS7s",
  "key40": "295t4NCyX2j1YTh7jxDSZSKsURb4ZQYSZ76qWLhAgta2eaPz6LzPMUoUs6wB27jJruyiHnFFjZGnoCcyRRhmUZR1",
  "key41": "4MCkYKxZ4UQd6wPhNNDSgkPifpp7qjzaPGxaP8CBJAXPsSQLKiHbCKtDrdaKVLisqyzzPQjhZhfDSFzbgWaSE5K3",
  "key42": "2x3gYhwY1i2aDyTTuJ1J46yzsbkQPasDqfRBhaojvHNwjjJBmiGofRnb3sHrANMxdtqS5sz8F6xpBsysi1GZ31se"
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
