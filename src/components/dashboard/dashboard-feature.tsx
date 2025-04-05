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
    "5rC3kAtuujbcdMJ8sqUGMKn42z1fizppdmp2TeFYvexXKHbJPUUcrVw1hYESu5WmVWoG5Wrqp9br2aVM9rdYQbws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ExYvHpgJ7zvnpq4RqyP6sMtkdvY7ksqTWnBUbST31Nxe8ouPX4d4LRzk5X1E6KG1VHJGdDEDYvrPJ6BwUeD8C9s",
  "key1": "39MPbinZBAU38yXvyspmfqCWtfTGcazD59cCzKy4QJQ7e2454v2Vf3c5EFqf8A1mr4C93Q8dP9qEKVf2QS1vttiq",
  "key2": "cFHTPxjceb9B6H7wpzjReijwHfcHmaDngegSEDnVMzK7647qFr1CtEVpsMB7EQ7h1EzQtw6npyhPxtzxgoz673K",
  "key3": "4z3vgfMHT3FdnStdVVg7Gm13RcpYJ8BvLMh1ByzcnupQCB93uXj8PCCES6Np7zGUAhu2JSRoPstaGeYzBxmMF9bT",
  "key4": "JP76RqZuS2SXhECQ15WYtVxQSzhfxgkJxoEBpXMHmPsUowQXMsYMsabwMDTGsjUPxLGtvwoYQssePENbt6F8dHH",
  "key5": "szx9nc11oakxbinRmRch4JQuD8jMR1zdknSwaeuP3AH6wNPRT7dKYbJS9D2PkfeMa3UCtB4vZHsPAzk4KKr1Qnc",
  "key6": "4BHgi64GRoZUHCdXGc1gwd6w6mXdfkmGV8hizQPqbVTwpa4u6zG53c96PoiN1NyjK5xggvYPJtFVXV2ETo3acUbZ",
  "key7": "59UF6r7qzYMriWQiBbip1EQKhnWCZzeMGLbmdW9YtYhfuwpuRntpszt8qzQZQokM9eassh983Y8Pa3xYf6WGbBwn",
  "key8": "3ZW5FPdhwE9grg2JtTTPr1uRYnEwLwvr1ymA6WbBXir6bRoMpQkrHttX6PedGN9EoaEFQfNc7EddGBQtYVsvGFk7",
  "key9": "2UD5ENBcPd2iRCLSaKkTUSGbxf9Mre9qKpmLXZaBPdNmLe6UUDP4B91jb1MbXWvNsTqkPX8hEV7yriePRuC7fbLU",
  "key10": "4gjZEk9jQ7yBYsugaiXHoi9UzR9xao5vSCaHvTVknJjMK2dMgcvWwvxBDZWt2vE7zdBW8jB12zScKbpfJqGWUkcX",
  "key11": "2fst5j5i8PmqZCeQKhLvKJcLveVqnycUs9ezV1C5WLytUgkYmQmN8KnjRN9VFch76sMiZvWFzhGkHnRbyiq5WRse",
  "key12": "5Y45LNRuPhhVQaFyhkLZSbhzshgcuoV67FZ4CsVLgHzn6EPR2FKnFoPzaiRhqq34VvKrJETx9E8puzvAcjfp9Ts",
  "key13": "5k8xhSm9uQ974R9iiNhpQbKzEYTjBbAGRZ5vtKpdUuSvjokM64DC1Z5xNKncJihpztvdw7UjDWpc2Fds7HqkpUYJ",
  "key14": "4E1rTCPAmC52CJrYRrsZwSgnEsfGWc2LwvE1SXcn8w1ZZ81CqcidFDYp8sw9KnbDPW4z5B7gBBH9HKcJ5opqgrmk",
  "key15": "2Mf4zAnEevVGutkVFtndmUy7eYfpeYSTc8anX75hvmBAVjQ2Jt4WeZpnjjYPJ8j8aTs83L7Abds8hFrXwbThcfFE",
  "key16": "3mVmEDGztkTPUJEGAepvjgqrEo5JueqaR56pMbuQDMxw15Dzy8dYdo7scXd5TVqvpyCUGNeikNhKwCqSbThD8AJT",
  "key17": "2wp5kyDNamttRmmzaywyRdmkDpHMQGvKmgeqaW5LEqEkET3qF2a672SsmgoYJG2uGtdA4L4UUR1KwAAoPrc3NwBX",
  "key18": "5qJLeeWQB7GiLpt5LEWX69BYuh5d8XyytHgKUy56U4VAiKcNnThczZnwrB9hLzZCnYxERYvkhnwQWR4WUMKUmuoK",
  "key19": "2RboVXmbSgWSGTxVKu9JmqkK7wW6u6nEExyfqvQMaDKyFg4d3wzAonU9q8egsdRcNw37v69aJbvJPL3TAA1X3hFA",
  "key20": "4rmMCebh17XheBJxCUEiDzzfjALy8upCdmSNPEA9MW4XMcwNx9APCyyMGMCaoJBu1KG95XBuHjk7i3P7j9z77GcQ",
  "key21": "QkyRdjeLH9qRghKBPTMRjTKecexQGSJK468FNqk68mEfjxtFP8rPwi6jBs4WrN9Pt6Pq7r9DVnGTAoFyshCYcMF",
  "key22": "2diuq46nQuokgqiHnHXLkjtybtepmyaBu6iwV55gVjqhvk3HpY5qhavcMxA8a6LxkysSuNfSHNrWgGazaQQ8Av6i",
  "key23": "Avip1daaHY5goUVAX46QSr3LYXZdkAsF58j9a6scRqHWHJYYptLYEQRHDcLgqUj8BTZdRW98ijwV7Qin3GKexnb",
  "key24": "3t9yhRr4rANsAYVf1ziiS17obA2Ca7cCqjH9ijQUsBemiJBSWSx21Qm1rtMcm9ZBttbNUSwUJkuyfyQiUswWovb7",
  "key25": "5EXif3XR1KGRJFGbuwcHnXhAc3uYivYEnLpnXFrq2bqu7Pgq4sZpZW8AnPJ1UJD6psVsu6PjuCE4oALX8iHGejCB",
  "key26": "5bMC7X2CxwuyPDgm6ituk4iDEseqmxZVJL9JES6B9gy5dtwMabAQSYnJo6738XLLwquzwxowjqubmXTgWEEJ9p6c",
  "key27": "2aRfugbhXyn8bKiDPNpdiu4i8h8sUr8dgkKphx857v6sLiiw5g8shAFCMPxPqs2YKxrRsewhEFDyGaBdQ54yx9kP",
  "key28": "4zFpKGVsrwagQrrHUPWaPUcAzHve7ZaUg5uoEwPKuPAcMZ17c8gNpSkSDyJNGUj2FN1RtgVTNWhJpkbqcS3qLaNe",
  "key29": "58RsVtvEtKgdoNrMmW4d2rnwxXX7Z7P2d7EQyxRJrT6uGW62w2ReuXVvWff4iZkf8dGhyjyhZj1WZ7X159TeU3Zt",
  "key30": "33NM6z151wm2i2b99eKDwNeiejb879fdsxMVA7yyhXeadU1A3jjyQnyr7v66bTMv6tRP494xVj5jzPFUW3cjQvdZ",
  "key31": "2U3KkmdoF2LnyBe8PuDvWbSW9jSbGgbsgHMXJkTTb9o5tZvJgwdBfMTNs7GekbwkdeQA7sAk7Wu4QeNnakSa1Nox",
  "key32": "33jikpz54jmaHdN6cNnuyrqwtREF9x4biYosokHovfdtG55m9pyK1QmuYth5YGf8TwJQfjTDKspP7xgaYByWuut9",
  "key33": "467uu5YKC35f6p6gfxt5ELVigGoX7V337ikuqzJcD8NGLCYkXCJRKBeGNHabxGLAqXt7d5fC2piengiRvDzzFJoc",
  "key34": "4GG7GqnxunVg6UmezCsvz8W9hnSDDCFfgki5YEQ7DJTgwBWydAoWak9ZdSaT3qnMcBPfftQeCt5abUpvi4VDWETH",
  "key35": "4qatvYVNGJQQiy4G3tKfS1uQgUk1wgGu8EXsJtBYQzX2CKjAUJzEeR5yKLWdKix7mV23YuWiKE2tgjAfXruNJu8B",
  "key36": "2pELCj6ctxFPJ8t2tidssR2UgVZve5oSXjX1pdGwLTepTBAvB4QR27Kpq3kW9mw46rELkaPU71v6V9qbTgKS4n85"
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
