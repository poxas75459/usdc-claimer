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
    "2UmAnkJhsXBaLFAnLXTMmCiiKjjckowYVPnA5kc9Digo2eBzvyybmP4sLt3cHD3ra8B8WTsQhN94TkpnPeBrANt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LD4XRPowZd2VXyPT7eeTw1yL3puAsCPzv1LKiiJ3PWaw7jDowH1QoYxcxYYuCS9Yfa7yPRvdT8M9qw6M4estX8A",
  "key1": "4PVUuveb24okYPSod9ETzyUcQdeWX444cr6GurNsMxVJdvanuxabGE1MnBfVQboDgWKfwHL51pCns3v1ZPKRzvhH",
  "key2": "5t5Qk967av45SKcTx8qPdqbtxtnPQ4NCES1dAZBiwVJi9sTDVLaZHv8JF6Mz3DzYbuzYTdDC92LwbdHNHen5dD7N",
  "key3": "3kLVswvGzXXfHS8CgAeSdXJYpspfEde2ibAZfxkk399cqym8D1jYzc8v3UvVxa1Y1A8yMU2zuPijn3b1DE81Bx4a",
  "key4": "3qb9dU5MPbdBPeRDHNk1swWuB5Rm4tVme88BuhDLb73dL2mKRHhJTxwA1GzHWEbuMfJvyPS98y12AvBmYFuB5seS",
  "key5": "2qQuwaVdJXTAxqKRwLz4vNBdoqarMEkoaEnmZ7hLhfrZHw34uPWzp93sNLDLAUa9EaxwPuX1HaqxrXrVKpcymBfy",
  "key6": "41J2RZHDhX2Mw1BeVFtencYyYQgCv5GQnq1BLC8JCfoK3iKA7tMyMCrqA6bS7Mmun7eSzEZQEqQm318BgT7uZfLE",
  "key7": "LAXEcZ7nbQcMHRuYpWNiJbSfsq2RXfsuuK11T79P9FcQxCHCd4N5xup2emFPBiNpufksFAht1tsMkP3HVwG75su",
  "key8": "5SdBHFq6yh8nWe8NwyQBZM1nVNaoHtjfytaJzkEM1xsL5SMM3TBZ3SdymjMs5seCJBwT8HrPoUu8FXXJVxuiRvae",
  "key9": "36finip5DFsuyrcrPDcbjBbkzp9HrBkuZPaRcYpVqEURsXoQZUGKGyJxv2N7jrnLqNZnjRLQsXjggymoyEcH5eVp",
  "key10": "3RwnNxxfGFaPKn9ZvSdWaBzUz7DjKqgU7aWi9B6kGzUWNnaWp2XtFb6sQYms9aToqZwmepJ58Mcg1ivVuyBKYkNA",
  "key11": "4N118aLfBVifddRmfanvwLnhVmYMeChaZTjFu9PXHrF2izqf3CHohPuYH6ajVNHhLjhPNgpar18Ghno68w5ufFSg",
  "key12": "2CoCxWq8rUiJCGEuJZTsEVQ1aAUGXDaiJDttB5dcskTpFWUFuM9xmNijRGPKsLiCv1wbJ8thWneWrAvjYSEp2ZNT",
  "key13": "3eECCLVmT6KXp49aiJpCQym1cg7QdimTmEGvGntBrQXuqyzFceXeiLKBaqbmQ6NEHjtHt2UFMuiYbK65qTwK2KJY",
  "key14": "64zm4s624YuHv93oh9cadH1TmoDz5kQ9Lfcs4tDTKyNQu7JPKD4vLL9AUBb6Np4tGuL6CeJ8bAFF777AWne1kxnt",
  "key15": "4ZxHMRjw9hWzFtaiT4w69hVEE5S3ndESupbJFXokwJTFCERGt8GmwBGJ7v9Bnh8jMNez9kJBjjBReXtUTKXZdgqq",
  "key16": "2iGTYNJH7UrhYosPcPekiS6F7BZiDMNN8PwwmZ7Uv1WYAGxQCRh7C9Xg8mLxfbnw9crBF3bM6z338MYzzXsGF7ms",
  "key17": "526mVw8Z97JAa7pQAe6CChvLtyJn5rPjTFER5kqDz6xweu7EjaE44f1JdzHMBxrBgo7hnZcR8t6sqvannDPkHjqp",
  "key18": "4gF51YAAhZ6pa4RPc4rjmmz2VkhYbuJHkG7YQAAdGriUDRaEMeo4UDbZpoV2SRVfXGJRecdnDUikDS3KCJ3rvh9T",
  "key19": "2x6fPn11tFEgL2DN37mt6NfQEdyrjRqqDnkT1HhYdz9eUXLpvP4S1pNtqTLqXKjf4DmEp9hqSLUf3v8zre5ctezn",
  "key20": "5YvEi5t13LjEoekejSBSKUf5r4hu6TjEbb4FnRDpn1iaa55hYYzruecnoCsHjHWNcDPEtXz1s92eCnhQsDPJ3jqb",
  "key21": "5RW8pL9N37taQ97e6N9SVVYiW9V7BPfVEMJ75wQjnJegS9QQipGCAABRGiXdJKCxLK7vK6VbAj7wSXHwFmakBNt8",
  "key22": "gJmY4RgfP7obgUa97Sn1xm48g2M57NhmuBRsubECw7uBZBuUbQ4zY5A7xvbozP9XqLcMMujfaCMwYANjSSQ3t7d",
  "key23": "34P89KDVTGfUbnmLwUVwUqspYCsuGV5iCeqWzF1mQKRH5yZ9SsFD7Fb5qbfEuECaxqawKE2kVX4ixRT4zSbK48Hx",
  "key24": "2UqSpc96PQoJWoGbck36goKLuwEsK45qHdFDSn12Hdkuqdg8Jmw1pUJqWUm5rAxofXh6yhYYukmaS9yeZY1AuqSk",
  "key25": "XQqYFipJTVLviA2Zwj6WPip3VdhW8nrtZRyhj1U5Xtbu2evj2iY7U1uPcbMUfJ8eijohUmjceffpYjoDS4Ggr2F",
  "key26": "3WiyYQZFWT12BKdiYHgReCbePk5GUJf2rngRWumfiM4UHa6TsL7W6jacwz2w8rUHV6SbNWkMu8koVi91inER8WjF",
  "key27": "4VAXZRVKLF39KQKHD9whaUJaBhhEP8zx8246Qzygk44kK7gKDwyAtLK6uw5ztzNcmJNaDabqCxbmPGK77senGKY2",
  "key28": "5fk95WnwmMhcyboB3dAXRZ5XXrSZuM3ztj1eX4vzrK4AiVw2Vpb5cPx3ZRyGh8apC1nSgZgjtAqVkwk8Z3FWJCys",
  "key29": "3HWw7ibRoWZMYawPiCbvby8WJh32JEyEWZTQoBsuDKcyMXXGJRMGm58qzTxnn7LfD8AoBg9wNhB5VPudBEfcAZNs",
  "key30": "pUjHRmJp31U1H1ihE8RLHK9KASnBtpaxkipjfnYMGCcqKCB8Nj4QX3dvkxy2XpkCZMnTvfntEYnNMx2Dm7BWqYz",
  "key31": "2pSqbwHw1rY57c66kLkDdnPBbigWZeys361GdrqnTo1MR7oNMN1QkFjn3WxRNgM43mbpkRim6T1CXKmcFQEF4Da7",
  "key32": "scDDXYTBdbmX4DJTPyCGz1r9oYLVv3LkVVqb8BkTZ8f6XXgpGqcaxA9qY3rDhpF2KUVzw8ATmU4PTitsm9DotnY",
  "key33": "3VT8kFHDu2LuthPuMxny4P2P2j8HiihXp6P1EboexcrguR58yHcggkM5NScc8F7D7Xr2PNuVk5FkQQfDcfP6D7fm",
  "key34": "4Q6CDwZsFNFc9tbhTzc4Bn7Hfy65pbwwSGwia8X5BaMDWnr83cDp1bz6rWFf4Knc8P3MkNtKFoEcjT1dD772LgA3",
  "key35": "4yuvze2cXwKd2eqsps661Lycux94gLo9AZBXH47WoKg1JD1C31rnu7dWUGdSkdadVAJMdhJGksFS8cuySdJuqPGf",
  "key36": "5tQS3ktcuwWFvhut4SyGFND7DPxBuWcivzcFfASoqdRJGpAb1ZqcHLeDqvsSsJsZuhbQs2cTBDgdee15cZ7xafZW",
  "key37": "5doZ8QhHnnFD5FDHerFk3prABCje9pjQTFvYKSVpWzqQ3oRek3hUnFfiQawfJdz8sQv3Get7dZDsprb8ZmgXQzjx",
  "key38": "4KAbTtNCTmpkyvuEr1wxr88mYFvo4WvT8LGTXfEwUoTyfi964STSzRbgYmRuB1tzVPS3HWv1D2mGckFCLuSYpZz6",
  "key39": "AWYJMBoNynzi9xW7kHZWnU5YgPGUNuWq345tAb7KpsLoMvyLNc6KK6regfvYt1SwAVsyZhT1bKFvXWQx7MV7SWi",
  "key40": "2m1aFrvqgnVsXt1Ki9jQJ2zpBvMU3dw9ezhzfgUHxYbe6uvD6QNzHyUHxE3jELTpun769eePxydZVW4haqK52WYD",
  "key41": "5e2tgkGfG8LNVUic6Wob9wCSYvgrW6TNXji8cK6vYBm3V6hSmHQqENVaniRp4zJJcrcE4mUbMKxb9sG8mG4Jju9Y",
  "key42": "3Ujk2Eap1cnfhEMtYa3Mhp2aYitLe3iejztfaG9dLA2gLCghVdcUzWGqv8Rz9Fa1UxqjXiHQ4fKLdZhC4B9n3ZU5",
  "key43": "2WWQsRh7iFE9AkE7he8SBDsoP3MsWLcFmevySKiLH9rtxoPKsKhDkbJfBV332J4UkGtH5FXZHmxbzGAbSEqMeRha",
  "key44": "5b8vKhzUiHVupzYmwppcQhpP2UKbGiZukMx6CXRh7ZDxFsmuWhgsuTAziuwhSmHgqJ9mRZGNCUn8TfSqHKidMDCo",
  "key45": "5GXB8icK7tCsdYnTPSTuCp1xfUsBXvYiHCMkva3k3LtgZRQ4nzrP9Y9E5FvVttCS3pUpWHk6yQYCwc41XjhWvu2p",
  "key46": "4cgaCivcfTV2XABnENZJ81BMhMYLMUMRJ28D7vvcbTyPYbKWUSN3LkigkfgbZpuiZ1i8H1m7ZKX1yCd9FdhPNKwo"
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
