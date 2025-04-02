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
    "2Aq9qBBoogUryrWWwP6JbxHi4ccysPABX3GBJXe3Uet3s4s1fPqALwEcyMmU4PANpZPqnqhQhF4KFpXbrz5tjhkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nCjeJpou45tFFj1eV6YtsBYU1ykToea7wEpq9mdtj3hcVhSuvRGscBkiVgRgRFn77R5XCY66M6hkdLNcnEgTfiD",
  "key1": "5FUU4N1HxGGRKXLMfwegZYFKBSyRAzvmUDc5GVyww5qPcYwumwcnB2X9pQbvTVpnBGz5NQxCTVaVThmMSWvHYeGE",
  "key2": "4knb4ke3vWSvaJsweKUMCBBDiv5x3Q5YnhKv99PWGfxXdQCP2z7bfumqUsGPVnPhjUayJ13LStRFmXwv1rzPCb3s",
  "key3": "2CZHwfpsuD2nt6wXq5uyqBBEX6zG2p423zwsoRBznwe1CybbSLiCJkYPkSW6eRkJTHeTzCzoDXfm11Y1p5NaS94L",
  "key4": "5vCKEAepnwUF9jRouktdzhEU6L4a3GWDLPJBtudMyGngcBGifhzAaMNJK9MytALJCiSV76z52WJX9wyDmPJpBdFb",
  "key5": "2Gf37oY42vqxsQDEg8bi5twh6gtcBKWGVi3LtKVZwHHJ5GuKFNg47iShszZKFhirqyK74vUZKG6Zg9KbLq6oqYwG",
  "key6": "5d2y9TtrSYZr3p83aXcQcm1dyFWCGBRHaxqQFwjGcgTEmjEM6K329BMVbZcEhstTthnAkPJcTb1vXhM2XjgdHhe4",
  "key7": "3YaufNz7mVNEguZpwsoazkLDcAwE8NKZr2jxbUrgNMrnkZRqaHxMbzvaNtGhH23VZjLmFQsKUJsS7BMNHFQutTsh",
  "key8": "qj3Hk6wnsat1PRi7nKfNxkfoL9NfnPhBHfQx55FTc2ynbR2cc6fzJoR1kLbrcWn4aZmQvLEjRPVTA4QbjWfh5hq",
  "key9": "2m3in3fji4Dit3jtnuvs11c98VKTwHW8XDHY5vQAiaTXLvoHkF2uHGctLiErrvNrwnz6iLEdkqvaPUUvyVrkGkFp",
  "key10": "3BvKWEc2BADK5YdAzipv9SZXZzhq84f9Ta9T8r8mM3kRXEiE49qSvn39PV4FCxn3tXy8gSoYbZ8gbjArrfbLbC9Z",
  "key11": "3PfbzYx2ne34ByQxLe43vXvhraUgcMhWu32DtgDbZTWxfkmpDgzNnLbyKU5vWcm4aKTT51ugoQQiaKd4e4m5pzrK",
  "key12": "5fjqJDPpGDKKoRxjCHmrZaS1cgjb6f9FDtMK9tPFGDUd5fvMRrjExLfK6fsf2FosycPLS9hn7p9z5DSwaFQTSw13",
  "key13": "3bZE3ZiwB1Jntopoz2Xr6dZSLKijmDPsBrTBdD3AihXZ4PVKMkiaFB1dSxw5FH1u1uFAF6CzdkUwfwuJwaAGcM3W",
  "key14": "3QGpymVvDKwzUs34sKHeex2v6SRhQu6kBgLavem74TPDC7jKccefCrAF1gBhxgicHrRC8uM8XePf9ehnL81DfmjU",
  "key15": "2z64KuxsHtnPzDVxALZHmfkbvh7pdpYaZZmhHVxgxLfC4LGoowQUSKzR8RcKP4noAuCUAEHsGDQzZvfLCdiQezgN",
  "key16": "wcgWQygJ3abzCwLSAzXPQ1Py6eyEMJCcFRXrcouNT9615GzvaRX1vXQGYRq9ussff5Z6gWxZbTAjxMgg6Vz6fN3",
  "key17": "78YQd1cdSoQkefbkqbVJqX3WYLsyr36SbyAUtVJiYsaGmJZjbQWatyoMg2YJQRQxGoN6o7dqSjvAwzGFx5VCc8W",
  "key18": "WABg59tTuookmk6x5Qjb8TDbKcD3HXFmCasz9UhhyFpE2hubw7EtZoPaq35Eo5xiuSurVHDqj5yek4GW2Czgubg",
  "key19": "34bUNz94V87N8kCTnCgo7spLy6GK6wAFL6yk3ptVb7Juc1i1XPCituMZ6nqXpUDuuGKAHvfWsBe9VNxXZ7sJWxBc",
  "key20": "3eW1Qis7UVHBnUXi78wjNuZpNB713jfB3YeYaA9QHgpUZEUUj1k8xbirwgmWsKWkYk1pwS989aDmN4ojErXNRuKR",
  "key21": "DS9kHpcUBDi9xa1A5kEune9LT13jchFDt5fQZJDGowFZ2XSP9qqu3btixcMAmzNJX2sr6BSkQULehePduTcm99D",
  "key22": "3fko1bhzRvbdXCNuWcuDNxgWdVdUWdpbiitrYM5LophGo6UeQgtNsjaBrfdzq9fkihwgmhfohsJn6uYTXX3Hh9NE",
  "key23": "MkRBh9X4U7qbh2bFxAWBgXYDuqv9hu9aFqb1qG5N6BNWHfQD865QrR2ucWvUsiNd98XNtm6qgWXG5cdSDg66fxc",
  "key24": "3cJoYFxUjDis9Bsdg2z19E71WAZ81dxVBQ9vo9KJGsNRHkzaDxJPGKgB8YhCADdHufGX6KUZrKyQxAzLLb8KyGvt",
  "key25": "61MH71MTdAFRaWD62UmTecG2M4McD247tonLFxiAtWGDdBugLjpNw6apFhp3hwswJgwCUDPFxXy62Y2cCUczZ8hV",
  "key26": "3qzgmdaj92cSqNYfB2EsCkXffLofYjkpktvDMtMiU2L9evshMseHvkfT7zMQCLBk4pWEmpTo5shiAyYsfcqrGQxB",
  "key27": "3EK8MFyDcs4zF5g2kEw27Mco7LM71Uz8c84UaxqiL5s1KwyByrPHHE8rX5E91X1e5kWiW5RarCfceZBREU1zMTG6",
  "key28": "3H2Mu4oENz2crHgzAwE6oBuPQMjkM6a24Qyc8dEgEooUkHAKFQkZ9nxZNsXCxB3sNC3JpJhm5b7ci5iVwXz63PdF"
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
