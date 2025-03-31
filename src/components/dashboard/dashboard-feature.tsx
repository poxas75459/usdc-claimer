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
    "625vzzG6Eh6UyDEws3da6FRgKcYWZnEkTMEf5zaXtk5DVDbQXjnRAbAKj51rLhkP8CSWSPYs3FjVMt7fUZRFmfib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKoVWKGhQKvhpdwy1TNN18DRy5Pe78GB6kBUpzvmpkjrYZ88vBE6LVmDZfVgpscsa2Hdfuia4dNbaKSHZxQVaZy",
  "key1": "3eLH8HPADpP7QoovB4XVd42cJXboivueoapj7NLAjx4YkdUx2mXWvcF6ViKPwzZvQveTEgdTnjojDy61U1wmZdLz",
  "key2": "5vrkSASTKSsRXCwye3MuR1m5yMLhsu8wEMVdbUR9rA8rmRZGAiijqAc6E4w9sMEVzoTbPkkrmge2m1MuMpmE76Uz",
  "key3": "5aa9KmQvHAZWLvSAe4hGk8N8RMeWtDrirvqXTueRf6sTfisv4zu9baaGeGT5UkaoBD3Vd6tG2ZK8ExLNNZxNCoV",
  "key4": "2oAJkMg9sz9xN7KFxKQWquu3wA5nSMGxb7UDFVm7vCEZLiLSqhY5MT7atht6TCDsvZZLqAjjAxs851MMBwdtzm2w",
  "key5": "4PRVSMRxnpwPWfm4VChhMLJNCVkQ6v5RapCSkfahofJtuMswQzE2faWTGYdif7QgbfLnsLZZRBYRRSwyhgo96yN6",
  "key6": "xDLBRphfXSBi89BbwXddBWMxJjpZMwsRyyY4qsNuwXy3oanQNRp2rpdgVMouZ6wTE4CmazjTRDQrxhWEUG5iC8w",
  "key7": "5frDwZtwitD9q5YWk41QZFsdiuvxzTE4ZwN1ARjn8sNaUtGAw38CrfYhfULkpT3VLquDdmjtzWRsTWcUmBLadu2C",
  "key8": "3tnvedyZng1vyzst41tWPdL631CboQJRVsZohJ1yTCc7gHjBF2jWL9zTZpQNcnYMFsGawkS3k3KhHn3zEEcHGbm8",
  "key9": "2vZoCwJZRygjkHEHsCL3De8NSWdUaRgYt2HCKSppf4FKTXXYuc9zNr2dKDiZhnL3vsd6W4h8RBSh3nr94f1eU8vB",
  "key10": "2uEwQHUSdsVvMbGYEotNZWmbd8omZvkKQGU9Pj6VJkK9xRfx2WqY3B1PzRd95Sf5asKkkYK8kiNr5i6S2XhzNT5e",
  "key11": "3z5GbbUCeNWyvwkZRVNuj8Xgj9BM9E6ohECqQdr4cYiGubTaxhyGG2Wno88RtH85kkmFsYnQcZRg2W8ysSW2p5FM",
  "key12": "2t8xcRHAJEZwnCaYvs1ME7zziA4NpVSV2HHFrGVAD1TGPxLMDt9SvoyGj7jBGJ7np6UbvRvLqStygVVrNfEohRYk",
  "key13": "yuJHzd6ManCziYVGwXbriQrFqpXpwSeCqPfGy8mNcGJKGgJEMgJc686KDjXpGhFbg9mRyyzPjdExZogCNZQCkd1",
  "key14": "5xBP3EhrakSA5dHfnJzE9W5KmDhrmZmYfrJ2JaW9nUyW62kD4NntagpZcLZVSJf3rcG7bCV2i1uNEC7UiFszbaZc",
  "key15": "3QyFvuc8BDvE1c8LtmsRRkQtCgXgoHPQ9m3JubW4AH2TzVcftAZyeJALqDQFFosiLV7RwV8JbG6s5RoM7LUyRjRC",
  "key16": "3bgPTWmBVJJxC4vYzZK8iETTno2WG1ivHZwER521a2as324eq1UhYGnFmEYmk1Afok53by34i1YFgJ2M5M9z1UFj",
  "key17": "3ZS6eeuCQB6F8biw1mgQcuhw9osA3BXPyXsHHqgSWVuqx64Nq8L5DNARzeieZFSzTnjbPm9pu4pRUxcUBEY8wosC",
  "key18": "RrsS73sHNkwMQWmuV7hqfZdCfg5Mdb71KGAKqupcXMWZBowVEdLAM6k5J9KhT8MRsMFY8ktVqvLaeo74jMnZirc",
  "key19": "3q2mGJPRdQZonVdHdFmGHsfFcGd4j7pHbeg2EUWGoDgTsEfgLCHico6UZWQUoxtPwgoMgKJGtNFyPnN3Q2GepEsA",
  "key20": "3N2YxZkG5uttNFj7UEzrdsUN3rzYEnFi767ZPxoWNQegFWDes4UewGswuzGqmkHuNjGp2hUiFtYgndPZD347yoUo",
  "key21": "8qfJ4Ripqd4difofdXf5Bad21UM5aQcrLXZLWrzXFKYyAfVhE19XFyxQZdj4BWrwSzWx4yV96v7p4dsHD4BXzg6",
  "key22": "engvuQafve39QtYGx5TUyahSTirxsYomy5T63TFNjEYaQqPjPJ7e2khCLy9m1zVz1f8YQC2J8jRrYe2vS998R1X",
  "key23": "4xphsR39kGyxt45KNw9q41XRJNSxqopYis83jZ6Que9uy58ULcLhH1vmoktbNEVdQ2Mt2qKsL2XohFNLzcWfeHi9",
  "key24": "pgLSHpNhsEYMkBW47UnpNeQPSFzoJ4ufzoDM9qudJZSKcQiHMXo73NsFK1P5inZJD6KLhXCqJDHmsczL7q1yNzn",
  "key25": "3XvhwiMRdY4cEkw1nwFSbd693yLfmPtoZxhGgSPwgVQmyNEuaZh1DgJfSKhhf6rM5rw8rPmi9wifaQaP2L6AP33a",
  "key26": "54n8xoWo7BbVtyb9NLeeh2RQ1Xy4oFUtkNPjXGKDxKCEahNrJvVFeyo1SaXBXfCi9sxwdNFuebFFzPhtr9upNjQM",
  "key27": "2oKgJvEeFzfjWX6eMyatLLMuTnJwzu6EjjPmtMFtAD1h5FrvaaC1cTnfEycWuD4U6c533917M2Xq9jyjqZ2L2ySN",
  "key28": "5TPBxAKLwZBcmdUvn2fjKZgVCcse61nU3G6FiRTPwGsGfuxQqe2F8BCJj4oMukkXVVVpmo8hErnvs8DS7vXrJCVy",
  "key29": "2vYvqKqxV474dMKXC2G3cqhiUiQBiKJ1QuxM8PGpGoSAG5Pzga2pN7x8ddzKT1LBvhNNajoVyuCcHF2V5TMys5vv",
  "key30": "4CKRxXcTUakr8BgVrrzBYxQeUNwZN5cfX34DKvahA3DAFj7psdJN3c6WLgAowqPpnYpYi7x8ULmPxFBkpYzwc1jb",
  "key31": "LZGTzH1GEpYQZfG3BwVEvXGPjBDqmJBt6knPjR8G3xDfAqqKVP1DwvXfpghYYHach9C24sempwq7hykc6jEV17k",
  "key32": "2Z9DCrzwVXxLG2uAmZtUGTJu5f6ZwpyZrK5MFiUkjXyxRUk4QvMK6J3VWQpr3vctpR6i7DDtYpnqWxqVveGXemvB",
  "key33": "2iX1X45APNiRJRsJJkbrzZvN397E6Us2AodLYqZrrL6L9t53Uwt8se5xRnvunU71xmHLVCttbBVh4yrCEK6iUzBE",
  "key34": "oZ1vMxe93Wc3h2Nc7EgiQUjptS7XbFw4kXh5k3gtW3Tv9QagisSLuD46NNNLevYM2tJpx63QbDKuQBoqAh5cd4g",
  "key35": "fa2Ha5ZwzL3fxiFS1JRYtXmda454HPgM1EbhofHW7pvEKEBwdxwBwvUJAaN8H2bk4CA78jBmkPoPsDtzJfTJP9g"
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
