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
    "2N2HB1mLnmSpw7LeAp9LGa2BLJ5upsegW8xViKXrBVUDZondPPFtDyJzTRhFgv9VHvNSfa85egWeiJaHfWq843Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7GLyRLUPDANaXy4Ru4Q2kH53d7M17j2DwDASyBoTK7KedbnRLb65sLHhtPNh1VyuAdn4xo6UKthHqzAKngQuhV",
  "key1": "4Ww4rtFyazdQyBjbmgjbToJZaTwU1HwncE2VFpBCBqHwiPx9nhL5Dm9ZrhtjmB79fMvACzfVQFGUEbEtDMGinzSx",
  "key2": "4wSEQhThdF9NDMsbwUZ5PvHtFFNr2JRASqK84Rc2oXRLssdV7cxL8Hk4V4SyKYsbMNo5dLqLNnaGDZG7utg82NLw",
  "key3": "3xDW2u4ZJRUab5une4cLi6S6vd5GcBoxFHtJvkvq38o5L66C3F7zkjGmzDBJMNSPxZ4h6Jyu6CuKt1MsAadUQjPq",
  "key4": "4zcN1hoL2hHDc5M8XjSEpZyBNZz4UGGNasXL74RWv11qGDuS4WCrcErf5WTQc2bXp3azWnwQsRSKKamgoLkT3y6m",
  "key5": "5mqTV7cw1Je2LNiLnvpguHUj1XN54WSnsFq755QxBWF2Gq9WApfvrKQ1dqCQm9cS2rNi5h5h5f2mSXLicQGGMNCx",
  "key6": "5XdqkKj854yoZ8NkSJ34coQ5cz2qBZuNzupAcGhfKzwFGmQekbD8vsSeZWhbxBvD5Pfs8drKyLRRbPWF7hocya94",
  "key7": "2yms9KhhyqDH1KzibgDi9m4VBhXceviZJ4ik7SLmrckfPFT9HjpPKvRSHLzsjdJHNhy8ZfXjuRNaSnoDRwPCNCrg",
  "key8": "2Q7F1vS9KH4NaBuimFVNQYquF9s7u13jkiea5wJeKxdcmB65VMKiP7xNpQq9jXzDWZFvsiFixbhwFpNjamJa5iib",
  "key9": "4kjC4sAEd2WS4QypgvNDRxg84PR48gvMBreY21Jha3kBpkw7D5zSKchPV7xC9e7eC4FJfiKon3NgxSEHu1DCgp1v",
  "key10": "3xfqcRc95xYebXFtNu8Ei8TyrCL4LC9hBTLFk4Q4eqERXeCSPP5PFncS82fBKDwBCvZJLkpB1hicBCyMWDgovpc4",
  "key11": "2T8Ndk4zrt8qesVvjtHMyrJ4v9gGjnqRE5QJnqJJBwfYtJG7aJuBbrUYMGMvfCDW6TVCJX1sYfZTKAHqfu9TtREx",
  "key12": "3VgniZMYTMrcAHb8A1UJKhZrjfZEkmwAW5ND1fDvTECPFeWowKVEyrnb1A7kUUsCTeAYhrdvhb3AtGhhVrvdUFhQ",
  "key13": "2fNAkNBS4UzhPi6p9R3inwzrEzs5BKfgjawGbLiu1NLRdD7LDAvck8nwz7Jor9p9uE1v6zBxvv4QiV6Hiffrhgf8",
  "key14": "5uUFZZcFt29EyptSjmEcYRN8vy2h6khNJEpmc8C22XRVeUj4TTcSMwdz7TzyxyD5aHGceEiyVribuv6A7Aa3V3KJ",
  "key15": "4sbNyVTvXugnBb3ZFtikWvids9TKFyB8Fa2cJfHD2pMVNnGkPdoYhJhA8NCFy51L8FZc8ku6KMSG4GYKNzHQ3PK2",
  "key16": "2pkDJRvuXjFg2AWE7cRHhF6oiuLJ9HXRJehFDbs9sRC1noTixhswB8df6bgSZEPagS7SFLWDVMG46eJVumDZsipx",
  "key17": "563BbmyaEGCsNWGh39DFHx96Z11TPYBfKs89iKLn4CCYt7rd2yZ4zEnmqQstn9K5PoBoq2Apy3HUaNtzSAM6j2zP",
  "key18": "3DyzkzBa1Yz1U4MDC2KWheytsZtEqWuZMB4RPGP3FmwrF6dwgeRBeMGjMokpff1xyhqffTW7BAzUMjnCWGeYCJxT",
  "key19": "5FXyevjm9uyAxGWK53h4VR2xL5HUZmoyHKtm3H61GLQtsRyMcbva4P58bRde8YLLJz91YDDwGTHeSxZUTBhjkuYc",
  "key20": "DsotPqKGjPx9QtY7Ey1pRcWvLajMWZYzNqecjw53Wv4cooaRFwvK3nVKfTZxw4YA8ygjKNPYvjqPM6oxEB7dC2Y",
  "key21": "2VjZQK6seYZ4dEJk7djM3bQFjMRRV1YABH6BT3KYxPQrL5BpQhXUBD86xzCTmjMfNCjLDbcDnV4ZmXJUVcgKmsob",
  "key22": "3hqQ95KSukKWUaAvkRRRhj1fhS65i1U4wBUknAeCWZtGMDRQ8qLRGyEuePwMxkbqZDnPgjdC7p4Wr4ztgdkkCjQW",
  "key23": "hGuC71EiQ3Vd3snmFRmRaP4NKXvreANPgxAJt1YWTmHZsBwxUuwmYHzua2QVGxUQ8R3cGKkWeCCABmEFEBje8cf",
  "key24": "5YQ4J5pqN4vHGeKba34JECHYZFQpeV1WnFAXFaC6MgsEQT6k8KmBE2eveuZhsy9f3igDxjHQXG1vhpXXRsRPsKB4",
  "key25": "SYt31gvvP3zfNtd6AZUAfZcFf9o2fLsaWiRZJpDBCZzaEKxLg4iFbC5FK1pewGXqSkvZqxLaHzedQa7AV44X6vE",
  "key26": "3DxU7p1tiKJBmCKg6jPHCMmCezaAD1avvrhqMA4n1e8BFeGn6h9nx19R7FpAzKQUbSZYCSahjUvV4en2MRvNJwaM",
  "key27": "58qAehk9rN76GSM8PpPJGTaCiRxt5xrDMzKyVHCvWVgJ7YagrnfW9v69pU3DZAa6KbY7LNdmF7WS5hwtgVRe3SaY",
  "key28": "5GwF8hsr17Z7pupmzYpVCPBysmrYpuRLXEsEh7Vt2Zzh8J42g8ikTrqWgdyA9iWWCSo3Qwmj721bQgNEnJuJASZg",
  "key29": "4cTZJ5CqrahmfQiGaCACkewDuxhzRUaEHyraYmhcoXKMhXJpwRscVSG4g2awW9DtcWVAfSLByxcgLjkajpM5USVS",
  "key30": "5xRzbyAKXXg75rMZVW8R9eyifEeP5dDYRxcEfuyzSzXujBnnieQM8iUvBFzVZBt1eUkpSRi74qNota27GFpcRWRA",
  "key31": "iAYMecQrua4Xj1o3gThVXV14ZXoRdCXTBT36BwPiT3KindpU5apeBRTrkMzodQA4C5tVMiFG4tqNFrAZa478EVz",
  "key32": "2c9krYRCQegyPrzw8jaLskp1huethYaSMsymJ9Kz8y2XFbHwNFpAfQAxnw7StNABeKRz6Ecz9BKcD4CnhXcyGvN4",
  "key33": "4vZBnCMvVF4mshwKNpaXe2Gc94Rhvi16BbbRNTWMVRJ5BkhsCT8jjHStsu8mEs2cR7n4uu2C9smmLykSq5ai1sbU",
  "key34": "RRveDJTfYxquC5TK3nqt89JW58QMgjTGJQMQwtnUbQXkLU7gdgb1L73p3wipugNeAAEyA9hm6NseESKEtwyEzha",
  "key35": "39JnU7aAZNfDnZ5CnDSpaVnSd842wLiCH6hryNvJRCGzotu74bNFmFtoRPBuwcnxsJmjHrf2ewqwfBbFfZHyBXVT",
  "key36": "Mqf8iafeGeLr82t9DAdQ7kq8MsjnfeEK6xPYzs2G3tcxQVrRbSS8jP5paiuK1eEJjqdkUsHNsAABYDfZZnqeYdN",
  "key37": "5ZwcreF7ibw87zLQLYsyRRU2WBqdbYtmCdLsBQaFmxmTWMbjxHEZRDVs1JnYPpmCjPnac6yspYdKnsuXHRBTL3zo",
  "key38": "5wPWZsQfLyKD6M7XPSYqgkSAvS2rB9uJRYecfGxW5BYE44ojX4HbnqwvGmQUyDVTue18Jm86byvfowMtN5Tw4nh1",
  "key39": "2zKKSzoLDeHzKsitdZKiQ163haQ8AforFgovtjETzATPCXv7hF9C8Jxv2RZmXxSWWG46iBKUY5VjK6WYipnAi4UE",
  "key40": "3rGD8GKqXacCQ9H253vHAxKRvGnFGfdHVJkxiS8kSF5DGm4oxKYi1RCWGwHQKCp5xYgdSfqvk2HydYELZ3nJghQ2"
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
