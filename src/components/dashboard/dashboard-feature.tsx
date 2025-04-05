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
    "2jWn2hYhvbLqTLmKKfEmwTtv3yaj5uWrkV1RWwcfZFUQxSd32Ht11UKWmrLAXwpv1nR4DPDUQSTUT93M2FTmciaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdDVMPm1PdifheiHQ4UC9stARhqmazqw3xeqZdRNuP9Xj24DboJmjv2M1HpywJYqwZ48WCTcED6WLJww6H1eKwa",
  "key1": "3SW8xa6mBLWiwHREQ4sLzLy6xK41yie7hRtwxQrTTzi47CA6EG1KWudqE89TtKir6op4q1uxe9QmjLvRVQdXyv7T",
  "key2": "2WQVi6S4BgWEXazHxdw6Sm8s51BrSh1vqSFvD785vhLjzpo4738fJ1KzGY5qPECWFQqkALpYoaw5jW2hph84sUFm",
  "key3": "2yjMNxuEBxpwCHbdqr468oQjXfdBmBYWw4hrqZx1NNwBBxgrGZfdZnWrG18fS9yn4iXMJ91sb7Vxv7GFkcKGNmUX",
  "key4": "5ZsNC3SvfHBdJQKE8xZAKoXGXyx6mUtrSX7NWb6xYAoCiWaTAwwdFpdDHb9i9EJkCDEFfT1S7pAZRvsmkd7syUWF",
  "key5": "5tZ31U6haZJ57Fiz32aw8L9jqTE8BNTJcjWHfWte49ZU3Y4tJSAvfRaKaMop9VSvyfyHGnPVg7GbGKWmxMpZorGS",
  "key6": "uEg54df5bETsotsvRQzu7sUwGuKaLFELaGWX53w47VjWkADiBZeHak5GEn59aJgDtWC9vzbp1jpYo2QEe3oyWA8",
  "key7": "H8K8dzR4jsHsspgCxhcSDNwTP2AxgWrYK1QcJ3pNRVqiTSVTn1ogRWCmJHD1PJzVQePBrmJEJtgoguUFR9ANaEr",
  "key8": "2pRo6jrMMC7Dgsq64yh6LpNGiDapRhacbJu8jLW5JcNt3sAoPmijF4ZyCyH66CMdpGjatCgTii5FyExuutL6vMNu",
  "key9": "2rU3QhbYEPd7HVjqrfu3FBmZUQBKjfGugB8GzuKwTZUXZJqdNbRy8uXs4wchRY3ZE8BbWQbndvQsyMy8ZCARsuAU",
  "key10": "2qaP9qkenNLnSqFC9HRtv7o9J9aRX7ym5BYAX8yEQHZ8P94rYKCVdwRmLvjCiwH6HncV9ZaJTsPrpdtp8dqLucgP",
  "key11": "3PJj5G2iwvNw9RU4z5zNhDC3v9BNHzZwGoinPGyPvbsq5FPpuW77Ra3L9F2Q5W2rSdcgDyJWuEN5BT8GdRaxUkmT",
  "key12": "4KiPXJZpoXe9aWyN4edaSHXGytu4QsitkH6EXV3cV1UbDR7z7WcCL4u6ikNdUyecpJum6guvZU5oxUmE5JdU4H4T",
  "key13": "239X4RyeR2kuToa2xR5nLfs2n2gctQasFpubzd3yLSH3sHzi4YfdkoP7wPX4GvvrYYd1tygD5cRq4jqkxzFBGXbV",
  "key14": "22PFrP3AtYedz1R37iwqiZXGxZBPSFunVwu6P5BNWuoGNwjimAYGhxVD4LmJ3e5YKdt8iNqsy6VKiii59oTyMVVP",
  "key15": "4FmePPDacEUR6yBvGBvs6kgnAjraYt68JEmL1N2zTkEN8Jy2h63DSpsc7cdD49FHTJaoF4fFQ6o3Rq2gHybuQ7xk",
  "key16": "2fPmrZuo6fheisqukbK1skCsY8ep7qpHsTL8au9RDWJcgZkHXPTqJUerJG43BNkP4kf2j65zgK8p67fEsU7yXyyM",
  "key17": "2hDGGcchWy5UUNH43yEFi3f1hyaCS53HcG38eXgRYU5VqSTUwV1DxpQWhAFrFQ7RFbvFfwityS9QC5DeSahrwEvs",
  "key18": "4g42xGiyLaLDde5UYw93KJy6672WjE3QLomsUt2nRQUTQoNsyJoHUT6Mc3vumVAnom9Fhv5u6v3RyQwerzTAF5h3",
  "key19": "3rvkRJDX6LfWjk4zq6yZB5Zy3wNpLEzrpUi2ZF7TZGMnYDcCY84QrUELoMJ2jVgW62wH2pgGv8FxDDpvKk2nxB41",
  "key20": "57cvFs136BVTQBrk3BkNrYSJn5sgyUW3ZufAYNzRMMnAQBhUDK1QZyGDdHovcv28UwV1rDHFKsK9dHCVTuX3WZ8S",
  "key21": "2wHbKZ2JcQfydBEdwbhoSsSCYxL6gCYZJoT7YhFiejkv6jrjMeyrrfgEuqpS4ccEATuKDX8BHhqJBAMjKCEQtEL9",
  "key22": "2vA5apKbtU1Tpo1QforiRvq17VN6XUnttxkMNY9bqBDYurdnJz14BLpK7R1FMLHMKKgA855DidWPU3AMeEUByitf",
  "key23": "FbfWpgNeuwujFcbcnWEcGHXK3oYGdtDpTSTwqL9A6WWZ79r7DACgYLKn2RFS2wttMxz1W2uJcsC1fEQV8AgqAXb",
  "key24": "5hkfo61UfDFnKb1CrkTts1TGmWhYiBGh6cAQxZTWNuFVFgouLaSzExm1ic63uvSBNkjnghgfJPxKyZ35sRdZjSLz",
  "key25": "5F2fjLtasouaqRtZ3XUNDYGcZkSRcZpYCteZ3M42wgxgH9YMxmZKNwevgrCV67nxkEQbC8QUPehvT9ELhtFQQHpP",
  "key26": "xW8Nx1WV5sJCmzQAHeKpDcEQDCCmL5aAbX2GwL4r2JubtNhG5ESuuNE3fv5gWi4PpSnf7ooNMMje9hkBt4HW1Qm",
  "key27": "4QbtAkRJu3huVrcYKwRR9RsAamquypK73i8UdnCTr7yCZ4kfBERjHXJNG7RyZJoe2CDXSW86SYYX43xWu2wS42Y4",
  "key28": "4iJ5CSpPjQnwMKEGC6svQ7YqZAyeaHxghUoA7JaxP9UPmtYJhEriRdqQvWCvAKdejr6uZCT32P9nGoMLiTn87iqM",
  "key29": "bVD8z8MHkU2RaTnBEULPDD6EkQTrKh67YKzsxB6pZ6HtgVLyygvK2w4KDuECrtBA8dyCwQuYH5vazF6g73PVMU6",
  "key30": "kb9Q9KuGeUYu7SbqcyqfcFZzFYvyfwYWLKoEmBW1PYdDWLKACvefU8hu8CdeuiopmSFcXowRgHKUcwfTgb8w6SS",
  "key31": "H9nZ3Y9NkKsWtPGCoW8KeqryNwLH9a8tJwsytkkZyuJsQ12AeZ7ErQsCuycHcz5XaawrzchhgtqKystiDqqu74o",
  "key32": "4CWp49yFbeEd6FNECvK3bi2GG9sxHibzsYni8CAQnjg7MHSxapneoqNAcv3QvojCqnCYwb2qVmGWmw1qxKXBoNVG",
  "key33": "4khAuhnciviJUe4B4PHxyLwLJCqEkVUcFWuuw7cTQqpqZQJMzLTTk8cqFpz7XrQXZp6xHQpxxoRfehUyGxhBkvU1",
  "key34": "hNpyCziCRt3989QC5jC8zbwikjrydQXRY1rJDguM5MUvV1dmvXPp5pfrZn8M2X7Xuqxf6JwHFTAAt6jjSJ7SWYM",
  "key35": "3q75GM6myuow8pTizGS4UZfwHGNoYBNydUimWCdu3Y7Lhp7sA7He86SiKqVNYMeu489UkTwNw8RqiDvzQTTg27Hy",
  "key36": "4hbJk7sHqm8S32MfdWCVWmyv1zrKTjJS1LoexPp5u3tPTXjhGCertvB9AC9VB4bCnGUXct2t3tmtg3WVcjJk3KdP",
  "key37": "3XSZwnxq82z5MvKyZEALtDuBNbxaK3agMUQG6wvEjtvDYgzLWMXJJvfvD2xZB5Fd4XS9RuP6JUC4AYmd8koJAQn8",
  "key38": "7qUAYAC9KfGFsPdMUPCxQHjBE8USSbbS21iwgmRrbUxwPbmZetTwEoqJ5j93AvykRWKY39DkCp63Z1wR1VNwq7Q",
  "key39": "5LqvYdJUHzJEfnHD4d2nXaU5ABZ9fLKmqUdVYxvZFFzjq7EkccrwPWBqn5jdZpoKyQTLx5GHX9HEvMzkKdedNq1B",
  "key40": "3nK1TyYMXapPJw9tPP7J9757owY5SezciWAFrjGvc3aniwvKgzXzU5b5fYNk1SHQCqfEaEGPrqnkgeQ6Jn2Tnue2",
  "key41": "ng3953kTwv6b9mrx2jrKt2gL44Agpg67q5VuWE3bTKJFyE315Ympb8C3SWactLTAHfsjcAUX6SJW1rzkDpGSTi2",
  "key42": "3iSCE6htbqUjco17SHAGiCT7Ev6JJDbLHrqYn2qyS677S6UHLX7ey5Sn5SxoD3LnNB3bWZygdN3wArcaiG8VRjo2",
  "key43": "A8vPMWAjbg2NnMEch6L6YsLNEhWkpkvecBaSoxYKnDCWLBhTGRJx1Kr7pYrTAvjT6GSM2jqkE7PsGxAkiWk3TyC",
  "key44": "3Qj6uAb1akAJ4CRp9yAhjNwkVdGRhk9iHptnPqwb5SWYMf1t2bwUxUAEWWPouP6XPj2Zh815jtSopoZXTM93rzAv",
  "key45": "3tTxcBumRCjVoE8ogbQNzM1TBYjbaSE7kW1FmFiPrtTUN1E8yGg8srTnHbM7enKN5ebY7r2aBXY6aVPmbdUABd3X"
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
