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
    "5QCE8ELtzvPoBZEyhaP8jrsZwiUFtxFWUVD2kugdM7L7beoH21s71TZdzwNt1jaEcogXBhqJxgJwJqbPeKycWZ9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SAfcqWZVjrUVgiXKxKdiGMNBogvGdCPjVD6YiFvmjQWc68GpEWcGvtoScvM75R49gMCgAN31LKTmamc8Haxove",
  "key1": "5A5ENqwukZyPqCHmkAQVn3ecebi6qzmCdgf1aBDtsbPpiJgjcAMj2C2LMkL1uoNi59UmhS7B92rpLN5M2R9yDQQ4",
  "key2": "3kPJjzt6ti7mMvyaCPMnSwfavu5T8vahhdXsKkVfhQKRwh4exZofhzAy5ZQBSAyh6h68knNGNTuTR2S4fva2SyCN",
  "key3": "3Nvi8Jc8GjB7iF6uZMJVJHsr6BBppjraupEAGd695EW9Z9XufUtetg6KG6hnNNeGWZZ4fcPdQYCmCBujYyhYGhLJ",
  "key4": "4CuamPam8w3RgGLgSnRKcGdrwcN7ZkAuDtSxDPzo6evs2UyJYyXqC9rmcw6fMhJtC12btoyLy8F7RJYaicT1wvXY",
  "key5": "3ZXAAY9utqvDnvYQAjHHqaog7uPghN8aEQBxG9VAcLiesiRosHm3ZYszV5rbyjMtgSCrYrXhVXJRFCrzjv8GKGfR",
  "key6": "3z45g8v74cT7xHpWsbfmWPQ7FQq1DDYRYn4ZKnNU3EnA4uTr9M9PikxiAd99GHD6u3YGaBuAJaniopGHUwHr9qaH",
  "key7": "3ss1Kz7uFCCf18CtqhogyBY7nFpkRx1cqATCMjoY2gm8vVEYjMTNn5k4UA4PTzLRhiYsyDqk31GdjHKpjTeLFCDc",
  "key8": "3vvgDYQZ4aGWJc6RYksZqcCXEqxQgDXBFJiRJ1YHB7ggvqekZLAzMTs7SmCNt8PohkU1zvSs3YV5Cqx1JDKi5hug",
  "key9": "89CKswdBkk5Np3qNucArjDjBesuZzCn2Cue7xr34RqzVDdKzzQDLAS3kVUnweMDrcU9EzWLafavcZTUXpou4tFz",
  "key10": "CsTwhBjo8KESdxBsJEBBQVXXou3uhTCJG7y46T8wvdiKyt7dasb2Z8a1gRcoxs7aDcfg8Hw2PExBeqymcxAsPmS",
  "key11": "5QZoBQFTkC459wFTkdnS77mgB9D1JCiusTkobtGB6QuznfmVxy9orozLMZHPfwux7kByq8aL71VH6JNjWzncWngW",
  "key12": "o1VHoAWikTrPdEe23kBYoe3rgdm4FYzH9bJZVg1qVGXMh7GM9kfU1ZHZfdPGk5UFyLiYNNqBqbywDygYybCvPnK",
  "key13": "36tPuzVVssHVBr1nq7v1vssPWiZBcPH43Ga1AzQP175MN7AX7rK8hva2RkiAv68Ts5JuhtQtBV2w9AXocTFf4qrh",
  "key14": "5j2jpKAAV8ZBHmrSZ56kcumGW579UcXpZQutvfanVXbtWzkrPCfjpWzk2rFmycs8cHoi46XF6WYNbKY9dhqoj7rF",
  "key15": "24ncnkhiRQqQbpqsLNyVdCuXHXf4pDekePFYJRi4YeesBz5FZfK5RVKFsJsHPotXyHaYgjJHKAqSnkMLJ3Mituat",
  "key16": "CZGMWJXhojrbvR6q623ZpP6ysgewGzyV6QiSAxvdwFXjqkydrWzau53Gjrh5hPqKijyC1SAPpoeMcw9Rt1qRMJq",
  "key17": "2wiHE836Y997YwwffXfM3demF9Qw6e4jLHvSb7vFZusXJ1BEABWU84no7wPY4AgiAJ7zWM6PEqBry9oATxhoQxYc",
  "key18": "65CNwDnsEc5KwCJ2wxFCeRoYAAnCeaVvnQ45Yx8LG4CNP5ncPEmukM81fvtmiaExNz7pmmhiD7ECdNGfVJUpRL8N",
  "key19": "SBPpG8CCb9FghXSeoQcy9UmCPc1NBACUFWwDbr47gpvynFccskZ6rNxnNN1EQg5ajVhh4UzKHY23dgNZKWyuAHT",
  "key20": "4nFbAzDbGrQTBcpmYePF4gSCkJhQpsU7AcZKuTRX9NYLrSpG5sLuMMv1gFW4EH6gXKCdocbHLomja9KFCLiE791k",
  "key21": "GPJ2V3x8eG7aF65d7iiHCi966xBhzQ73rfkiFM5UTrHjehcLrZvUqosgxfxUK8hxixzwDKWrSrn1azvbFrXstq5",
  "key22": "2HQCQmRScoRF1fforRQNLvQrbWohiS7j7ghyxT3AKRWgtPVTkvAXd4Phc6JSGjZxdMxbU95QUzeaH3pRJv1scvEq",
  "key23": "4iw9hZenvwEKSZajwTA2rz7mCbT7SgUG5APXrbw5jJQBjNFiANuoFa5CeG88uapstPjXxTZ2SwwU6SkFjffaKdan",
  "key24": "4sUbE6u1TijXZNzMqqS5pB6F92WztsBVBwxqe9Tu9Giq6UTgEZ96gyGK47LoGZxxwnQKvEp8XtBdntsJVWC2ERG7",
  "key25": "48SCPkCPg9hBBfXx5JLmKTVQfvFHpHCPJsQAN4QBHuvah6vB3jTyoEBXdwMgFV3u5u67Eccd2PexShGPMc4UP26d",
  "key26": "34FYfFXtQzgNK4yS4ECvMF6RQ6BjpQ8iY2rBghexoBLPevasVJ3uGCYVztuSmRvzqrE9WdW4cNggcY7W9MEwKyPU",
  "key27": "4TmZF8esjh1pj1K7qQF5QwBp2QWoUiEgnLA3G8cApwt65DkMApzqX7bX3BzWxdh3ujstvsLEr3s8eEgCiU4pDuoE",
  "key28": "2GFV7nmVA4v8hoJYu8dKiZ9AmAa1jetptneCBxSjq62d7XZvuB3Czw2EEg7DM25tWrpsLmdqDEZ4fPV1pisFTAE3",
  "key29": "4voGPxBGPKrca1aDckAyy4Z46yDEBWpSrTVoyXT1k5cSwseeELt5XS6zJDrewKbkRbnynJziYuk3NsXYavJC29f2",
  "key30": "57cybUGbd9MA8NDM9UecAA4vSMqe7x347ZtFpbzfrpiFYNVHQV8Cor5PaH4xNta8Yas1M9ovggiSNLXXE9WCbrzA",
  "key31": "5xpsDL55o4tDYN72aj9i3W9J4KbBYCnKiN9iv89u9mDZ5SdiHzf7SkoHiDmP5rupYxoxCXQ25miFZB8ah6GvB59u",
  "key32": "5YAAHy1S7auZ5z55UKLMX3rKKX2s7WYBK2cjHKGLvPYx3iAyn99LazfEH9RUVFz2zCGPRwcjh8V1KmSST6sVjXHq",
  "key33": "XFzWnSsT4h1aU5bTHXSUAxohMnKSF25iPG8LZV6gJXrC6zaqQaghVZgahF4oP2N38Kz9gqxjT42YhaWUUT3skRy",
  "key34": "qsWnqhrUr8jymUr71L5e682EqfBo6njo5h5ufU78wQtA1VxVNpTg7AYMd2mtTbD7MZXvM1onds8u4G6AdUevLXm",
  "key35": "317chKBrorHH2FrSXqsADMHd9T2n9yMLLSp3VWKgQPYGwQaKxqKQrZXNcQhpG47hXPmdFo1WCF8HP1u63oiiHzs7",
  "key36": "48y9jpMyYH59aDoZwzMuRGxFYThDvSrwrAmRHx3MyRvH8aw3Cb3kYXTUWjiZzb597uzhwvZgKANCjrFo76LhnaVT",
  "key37": "4Ee1E6uZwFhEgnn4yzhaVPQaZzHPzWxQrjHCxy5hHabiR7hNdTZvBpnHiapJVzKxPGym49wtL4PYR4ECHfzg8oqy",
  "key38": "3F5tMU5YyfFSr8mrN8Y7G51zqSb8kCz9eR3Zk3Ee4cq5WphSbVATte3pNsVBUQBFzrJG3TL3u8tw2ADRSCTacCnP",
  "key39": "4bBFoLDGdPnEjPNFMDGTam69At9ERwUjyM4r1K27fNR8sdT6bz5kWgrEMNutW15gw7Txun5UzN9zTmWVTYc8r9BP",
  "key40": "EbV3SKZFzg8siD6TenGJA6CrHBtiWhaTto7zGULdWF3tASyzPPvQ2hK6Cv69fV9iqYYmYUoek7zzvay9BMuYidc",
  "key41": "3CYfumwzwAoMBFFYoDGxDFoyDQmesBLKAU6iP4yz6YggkbwLzAxuP1owUUnTx3Fmn3evZvZPFmMFdRwsq46QoFcC"
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
