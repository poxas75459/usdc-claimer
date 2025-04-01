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
    "hRm7H2E21AvTTTEfMskYYuBxMAe29rQt7whv5kR7VFbif6p5tJSAfQ2QDecXyJTarEseCU4dqeJgGqMRLGXMmcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rF1iJtx1rf2AZgx2VE29BK4mPvNKU4oSRMqHWzJ9Jt89QoqE6gR92c3TYbhZutvA6JEf8yck19JoW4Df8ijtDaf",
  "key1": "2taiEYkTYgGFhHwvCrZb1LQkmMQFX7npx1dWM4boC2iCKygvT3aXh4QcXNBTw1RvSWgUKu2PfWoK9n985Hc8sPVH",
  "key2": "5mF95EUGrJdKPNexMoXSJHCiJzjHF7DRNFLBCb8Nq2gUTQtNuwMhwQ7Vs7DoRSikkV1CZQTxSHYpnnzAsNNm4g9p",
  "key3": "3oC8LgXHMm1rvGvZtj63oLtVFQ9wAXJ6v8CTDA6yZZgujSa7eBx1bfAzwPwAQueDecApJQsE2pxJpC5G5LQFbbiJ",
  "key4": "4qoAUXsB11BzjBiS9XQfEQgSsREMkuim7UCY8eq7oNMvj9Wjc1PyPbsF5v5PkNffyzVZc6dCJd2dUTfZ7X7FbkA8",
  "key5": "4NjKhZ8HSquEnnCvhMVzY5Xkrf6NEXkEMvThZxqjV1sfKP53Ho8vpG7C5B9v6GicHSV1gcoJckJiNys9hxThF4fF",
  "key6": "S54voMXNLUVqKdurQzXzG7ySEVx9a71btxhypmty8VidETwNummkEixRfZE19zpD1jYsWM6Ti3dyVK8Yf2ohJzh",
  "key7": "4kCHKpRtxXT24wNQiergUHKxQ6JQ78UGYSuXHMHFgAwbhJcS4CjAiXVtQX2YzWXW2Gk9DTuAfYbpABwU9M2QJt4r",
  "key8": "4UPBBxrsuoqTCGSNhd1Aa7asR1x4UL9ThoUMPx3Z5Sbs6uhdQWuYQERbyGNkw3XujPfZXSbybGXkqJDQ8SbWfyhH",
  "key9": "3ZENydMz2Q2TVS7HBnzbvw4jY8jZhAMnG4oH7qGtkynM126ibZigqgMuyoqvbBcfm9L7aFn4fJ1dNthSh5MKGQSo",
  "key10": "4ZvFXQEDmTgdvd4UaEeV1y3LtkZQKpguhASdGFM3cnxd3xnEc6ZZ466Z7Ug7fJinpFvgpgiCTYfNeZTy3QPWMLqT",
  "key11": "4BwjVTcJuAAMKgMUUvi1bnz22KGjJeXN2XHUkAQhcetbRkk5NaGXt42EicrkPVmfNA2hC3FJMgL3fnkHHiXmRWA1",
  "key12": "49VCUfZpbzfX6TspRAxoof2q8eTvJExVa1TcjcE3dZPU6FgddW1NTHxhyzo8eb1S34Y2YwWMPoPaNgDDfnUjJDfs",
  "key13": "4p2CNJgYqBryR9GJDadGVrNavXjGktpdU82oJ6mjtSZLpCVJzoupEQu6xbvG5PzGn4rRrY2KxgZjQUfkmJ9sDUS9",
  "key14": "46F2QhZ1fWW9J145phYZSZBh5zfhAQPtxxPX3JgV4zsCTv9bpZBqycce43VxkrSw22hcpjEP73XK73hWvkmEfkpp",
  "key15": "2LgWwcfqS3it96ct6kwuzMdkxQCVDttpDhDcLPJb1oj7h1Kb8Y5WNgcerrwrJ973Yrywqr3Ce7sh3NCqw9Z8P9zc",
  "key16": "oBEJM98BgAh5YBRp9yP1PsoAJzxe1DsuTrzYohGFURxWne3ynADV1LTEssRmZsV6j9DywPPtm4fGzgvpPpNzLLP",
  "key17": "3RosmvyvooiGjHXFGdgQxDttF5BxDYnod2hC97coTYjpBkPQAkeQCTJnwE7MuSsq9RpX9SRMhNmPzyYS7kpqdvy7",
  "key18": "4ySbL42z1BRYHfADqxHngrGNj2mQnU3pGiUEpPedLdhhz5aLnDMhi8YbrCbSKeJ4T3VQmPA1rip6x48yoamSp7Bm",
  "key19": "3ox8cBbeVg6qAxFnRs5UDEX6MSham19iTb18uxxdQN1tmxezQABc3aj8MTim3x23okt9wMVH1kGkDJznFQG5RwcJ",
  "key20": "5eAWFmKwTJLXj9eMZveMmRe7jikFMcmMhkuefQwnVgJRDobwhvDhPkwup2EuPosDcWDjh7avJMPn5EZa8yREkPdc",
  "key21": "CgAkEENgq8PPWw44WgFBQhQQxL9nCSZMdVcahbgcv4yeZw1tPVeL4iTR9qKRWgcMgBsvmTPAaKmK2himx3n1bEq",
  "key22": "TpqxJq2HGVGWevcCfyf664FJzDCAfiADYt7mPcXMkMNx3cwSMSyVATnYYZdpGtPQMbWK6cQ4eWXuRRqSmGjoiWq",
  "key23": "rjtDsJ3fuL7FQnwfvMhj4h4ZnLeumeN1wMUULmsu2ZEfDESfcesSoq3npvREomALVrtdDXusPVMsTAPQZwKfDqa",
  "key24": "5wiczNUxxUptRQQkzofSpZ4BzmDfpdqjrG3Nh9GiuiBTQYNbTcpYHzjFUoXL7HRuLSYr52TUAK9Z5A2iVJtsieaT",
  "key25": "2W7eAMZv4gNgYht18Es1caLkkiGWWtnW9nCFs57a6nR7SXBJsmF7Xdabs5xkbWceERStMtd6xnkWzvk97uoaQ4HK",
  "key26": "2edaVjn5QzUSnckRq1cdcmghxqj9WLZMC8wWaGKDhhVwi6Do4J2HPsia6gJnbbdh9AFiVgzj9iSNEpr8X8DEsdpH",
  "key27": "4m12hZRoYa5WWDyVstVSrK1oExabeJ8KmtQoM1Gar111uy6FnS1cK8NP7E2C22s9MgtJdzibDFTVzq52X4ceaFuH",
  "key28": "3Q94vh3gTgXbR9NwrKbo2zUvbPaVyBfLT3SP4diMhG4LE8jby2xCG97esVMrCLuNrXZR13VMwePFP1PQjQ25VTiE",
  "key29": "2ZFSHLZxXvdeojosq4tdvJWA6Du91FBzkM9npFeAweYdc2hGhG6x7xhBqGJT3zyfdJdFSgoPYYsgYXuKfp93a8BK",
  "key30": "28FeJSXNxzWUmjaKL827MVKQ3B3iGEQMY38BcVUvaggGvyqfhQnKn1RsXHmnBW7YY1mVBv5QWVVQs8wE64aE4fKz",
  "key31": "iJpa9zzybthfYz6s888b8geZFggUTGkSAXoF57XdqP95L2E8sMvFoSBqArasU7RD2QRThUPTtvDSerS1uFZREQF",
  "key32": "2ReDhvV26PQEcK5qaALHX7GuTXieUwVip6ghDYWA7RHchtsCwyWh2FR6sycZWZnHnBzFGVGwtwdPfesgiN6RUwG6",
  "key33": "3syJtE6ouvEeyAmtCkNs12wwWi5SMco4S2fpKbtgyrM5Dw9FBw7yCmarYFi3QerUjzqKr7zzNTJq43kYXFxoWpmt",
  "key34": "3RdVRRCwX8iTQK2YBMrbRgXhPyfe43pv9HKsJzXFtpobCZcu7Q2B7V5WFZmGkBxbSwdCwjYCctoWoTkEZ9DLbSz9",
  "key35": "4hktwKSdfH1RSrMpMRzELQvQbXMmERYYauPUijPwktJY4bWSzpuhPNRqSW1wH7N9JNw2Zopf2DbaPN8UgZ3BGyXt",
  "key36": "4Bvmvn9Bu5NdUhAjHNH9y64LUe2qbHXX92F35oNgWhKWCnY6eSdTVxZ74cTmJjhtvRrYBYuUTEVns8vvk3HHG769",
  "key37": "66gPJ7MH4HXFWEgDkopaXbHx5n9kx1oCUGfvaSXPY5qLKRyshp74GvEbNNeS5AzbwWmFruHfhntup6EbdN8eQUDV",
  "key38": "2P7HNSQ1yYEfNVezL8VrTnHvWgCtKZjijpMp36suemJYwTGFMKnEXKwN3rwnKfEHnJwJAxaQEteUxGwKMSjSo8uz"
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
