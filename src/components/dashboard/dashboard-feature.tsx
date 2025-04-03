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
    "65UAKv1DWKa5Mup58GfE1s8SKQCR2xmAEGrmZQxacZcQKQVnCq9mdhHB2Jx5WDxsQnKXDUy5L1u9No5LLES5r8Zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57irb4GTNGaA5ncwa1dj7ZoQvnQVV7SGKvkcQaP6PB9HdaeNQjRuGrKAyWHb561HU5RpFnbfHPf4WwvCVYsUxmCT",
  "key1": "2cexoCnaPZwrkb9kC94pQRKKDS1yw5fyRefGYXBndByJ3wtwvsuYQcjRuxCXFkAxbihkyCjAyH4X1vU3YZMRPcfC",
  "key2": "43JHPn4p6iZvthyLSSGpxMXugirWf5bYP9jZx8kN5ycLJQxrgG1nrQQCvDmifJFeRVbkwXgYk6gk5XMU6gnwcXak",
  "key3": "So563nx3pCKUasE1n4YLriJ1qKCfhZzQagvXrgTShqGwVcXFvHUiJBGvVKoYD5DEQUTk1mpvykzQguu4zgdXyBP",
  "key4": "quZtn8fSw5diESzmKKqzsB2brFWacbrbV6RN2sTQ76HZeXHkbX9MffUjLvuXLYTaHjwYWjgknoCn1hxUVsW3Jg9",
  "key5": "5gDHnL1d9FbN6Z7B9Xfbd49sZdPcNLJ8Q1m1b6RWaNPYXryrQXHSUEw1ckUimjnegqkbcpi4KVGUfHYrZJWPNtg7",
  "key6": "4cntXFTgFktX7LaTJz69xeqmoVJLnnezDA9gPY8WTcFknWSc8pNBJtKCJEXtNboAyFmmMntaerg4be6z4XsEkoin",
  "key7": "3TdNZoZ5bXah3NdjXFVFT4RwxD78V5VstaS3rdDsRzUj4HnxRZriCDkGWQsFD8nE2sg3CyfaNLNwQCdpeEkXTGuu",
  "key8": "4FVGjbkcfwazDuuyqpSqBGwQYbQYcroKSb6XbMRhKyg1FaVm6qDz3Ey8ErQE8bmBHcNBu8pbwiYVJQf1VhTy4Psh",
  "key9": "3iUsvEoGSmG6WYaxcHHrt7qaBzneqcpBDFGbYL6zSix5W1e5NgxHiEiwoHrdPVh5LahJ8KhEZkW1Vp1iYGracnTM",
  "key10": "5p3Vf77JWdAk5ydHd6X9eZQ6nBB4hqz8Gx2cPCwosRsCakcbSkfsa7SVd7wz3A7oasx6xR2NcyrSbp2AGGX5kVAW",
  "key11": "4B7iqQVgcBbSU4ruqTvgHmUbdHtZGUNnARMZTtaNjbhGX4ovhmKmcXiXjy8HCqDvU5E3Ae1ZCdXQjz6ViQtykuA4",
  "key12": "4eKkFCFYaqRy2EmfC4gPpEaovgrQof8cgy6uAVsMu7PtSGY6viQm3RH7hZeaVysr8ZPjtT6S1BHk8JHH85zqmq3d",
  "key13": "67hGZmY2GJKmYozE9ZYDfnBVqi6iaBbmDW73ot6Y3zrfF3mGbUA5dJefruXPpAKVwmp2WhoPM4q69Hpzganj1Be9",
  "key14": "WUt2vB2sdnFHPgxixZBfE6apNgHHAvxAZjELkfYf435htJMVybdQwrVB2egafMKFZwMwV654xA6ApgVyPjsGPUm",
  "key15": "2Uj2DLUQBxFdZ5QY1P9jDT6Tfhkint2NthPaDMbwtQYiTXfpGnuTfFQL4R99djnRYvvLzNm58J7yBvueBfFjuxUm",
  "key16": "4kvycy5Gxdn8t3EpqZiHuHhT25cUN5sAoiGqZoaaNAmTFQAwyoCLdEdtTLJ7ihWibdUQzovx7y4BqMYDn2JwFiNd",
  "key17": "3o2XCcHoK7vuBFV7SR3YvjeuATGTHutFLQCeLapspmrwHe3pqtFfVYWU4pp5ra8m6rsAG3cfCRQmsgbGaCVKfQ4D",
  "key18": "5iiveN5gYsBfjGTLQoG7d7YphimD7sqBEPcY5GQpiaCX5ZWkQGNoCpdNRq9LYE6u96f9wWTM695rdBKTb6CJkabz",
  "key19": "3sPGscHri7xjgWHLrPm6Vx9TTKHU7sJsTqtBu3unjbcWtPYY8zBS8CBJSDjhArEZ6ymVxHjjKreHS4hUMWqWMcSA",
  "key20": "3kygg8RVnp6PyXXRzHM5niaXXwoGziEmp9ECwqnwUz2xuQ9661bJRVzkZG9MD8B529DXq4T1UQRQpY4HJM7pHciz",
  "key21": "TMk8QFKaX9u4ZSDnGkAp3tG53xxNAiJKDmnS5PXuwLo3gDedcQcCWYVyXxVSy5dT3CJY534TcdJS73oGxcLArNc",
  "key22": "47JdDm52BCxBnNQCuUYwShwRovwDcuJx3ZVH8v1v67Am1DzDHRGqiMti3JYmEtaB9Dv7p7HzzX9VX4Jt3FHZCxeK",
  "key23": "5nuL9TA2XNbEV7biMedqeQvcsPhEmE9GxjxEQX4fWCdbf4zdo94gQ8BTtYDRSZS36USeR6t6ofXjVTBVaKMLhjE9",
  "key24": "4WJHbcSjTaz26F1V6eKiH7kDHqbgtyk8R8fdqmVAu8dfAcEZnJcUzsAR6GrtzVXNhcv7w1EEwzgKVGXWszmvW9tx",
  "key25": "3jPBjgoFyAU3y9nYubGqyVvgfDTEdbtBNHxKsGBNLucF8NFDGp2LHHm8tZEbX5Nz6vKfFerACZrEuHkrKUAiTRCi"
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
