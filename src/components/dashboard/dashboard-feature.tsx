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
    "3hSqyjFWnWWydfUBAbjKhVoBtqCCJ3kWfqwRrgJjfWXEvc3HdN2mHFxRNnC59Fdf1cfUUNFxPLs1Pb9DmPhwcPE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652GJfoqRB8jxGjo34SDCkBEUtDFkpJh58QDk5ihihti4SN5cQ6GeQJfNeEbqBJvRkDpLMc3c66mCKAGWm7sHZ7U",
  "key1": "4hiXoiFfSTBEJGSMkMvpSf7tCLu9gxrZmSfyffpTd41wfhZ4Bv8GvShn4VLkyh4jtNk4CW7EUWHbXiiLuu2mABxA",
  "key2": "2iMZvYUcRbqTRUSddFTXQB4z25DdwM4EHuKcpve3Jk1aCDrnxLskRde4BMKEzq76SstKEvTRi6jieXWtHTVo2zFC",
  "key3": "EiQtaVXzQWiKVRBPyHRrsLb3TroDD1QeJwJprnPweXVzkRx4WNMuA7Guwc9xD91KQ8mYDYihGza51DwbMkA4fv5",
  "key4": "5ggUmXw4w94nhxLKScup39ZjKd8iKzDhbVZsgfxihz4vgEao22CBj6bRzwqJ9mwxWB7QLkyAtsJM7kKHRr7ZAxii",
  "key5": "2BtRgXjZm1AWePHsUco727FhmV9AM6GA6srHbEij1nUE47TWU9Le1jyqKYXmTzrXsi4AKWP3QvVZ5qunp2D2Kvyg",
  "key6": "24KExuzSS3CgBTnL9cUhVfkLtuWa9jWaiCp4mb7VhoneHDyavmwuwbFEz195fWJbUxopcwk736EvpGfxVDFUWzwe",
  "key7": "5bjBcJYcA5JKCPu1ZBs5HJ5NvUxphhxz13LP4H3xtwYNic1rSwjvyewDJxjL4BznttY74ivhqZCzGnrShBbFEBvC",
  "key8": "2YzPaGhSb5ithMdUgeTV7fW7AYamQzMibSAKYTapz654d3ibsdD6MbZZcH3fpF3cvWPQByjZiyeyebtCnygBwWWL",
  "key9": "3V3cuWukgTPQx5HqkqvcKpRBBuUdajg5qetLSyYxxo6HiXBLdoe9xJzL3JuiPUpDzVj15Fu3pt9X1uKkirhXUuKN",
  "key10": "3My9RbhyFXYZr9t9ADPHHRypn8FAwTo8AiC3g8mreNkJG9i6VgemZHo856PrCvnBEg57bUmpDh1D3FrLoQmvPgSs",
  "key11": "MQ4vNufbSFNZWwSHUZBuikvBPQguD5j8f7J9AxEmcv3Po8KWxE1AdonJmHGZjCeJN9TyA96ghzo7z5DtTziokcp",
  "key12": "x4eX324arvSZMHKU8QAt1dWjCfnjGm4iCbmGqtMYvzHZzVqysonXp7h18Kh4YPCrtnwk2JTRJr9QhwVzs6zgicg",
  "key13": "5RUxV2v7bEf28idYZJBLREsWcRmhKuRukEsKwvV87bQY8XNiqdqxxBw5WrXrNfJ8oKLB41rMcQEcyziZtNYAQQpe",
  "key14": "52HFvagVRSPmEmADNKANcqiYJr3EEbTLmKJo1RbqDEf2AGPU7xzTZHVU6fPA4aumqXAaNok2xwPFDvGwHayHMpPC",
  "key15": "5tFFywKD3bHJLDCXiin3ghzKJD4z3UZ3JWGmCCwu8tTXuUNuAen81KpMC3h125A3yXr9cGaroLxGEpVyzqG1FbnE",
  "key16": "5iS2DkH7Fg1mX9ib3ofBJs2GFap9zfiNWVh2yLWu5GX3yhfr2BMaVDh17Q39gnjxTmwKY2ejUiQhXJo4AAZsBBaY",
  "key17": "GyiopThi4e78C99Vs5woTKQ5mDjpwJYkwrWFQmcAxKxqcELzoMDZyeDaWbZgNxKXnPChb5pFEjFgEQVacnZUk1C",
  "key18": "5cGi8jhRZstrfnpWRiREnQeRroNkwz7pvi2zokARj9J8Y4EATjununUEva8N98KCKfxwztjTdNDiXJRTdgJWjevV",
  "key19": "5aDhTbqVWz5ngsCCZ3eh6xd4F3nbqHRmbq1iyGDARKKmis3CRYg1sk81c8ub5BxrRxXH9MKmRJ9phtY7QPHvLoUM",
  "key20": "bftonbqMdDY4Ui7RSkpe49Q3VMLHEk3n7U2tCpeWfyXHy4iZzPYV5Wax4hToULMuPGP2aVFwBLcbVAChujkhcM1",
  "key21": "5xK6dSA2VRVyHKEBuo8PTsBA2XDkKiwiowVXbbhUUaPjN2j7uZtax8JWUATALHQHid4wnzNL7TmzRPEe9WuCkihs",
  "key22": "2HpnyxfVRxR2kJ3pDfehrs41X1Nbu2vWp26UTcKR4XsVXfpzT8LchQgQrPn8TBmhBi8WwdKoJp942jchuuLLyJiq",
  "key23": "63G8jGCfpH5nFqq5dnJ66ZUDXGYEU8irBCqgfAA5s4oMrAMSa56Lyc9ovE26pUFyYNXR3EG5gMKScagwD8XLqn1M",
  "key24": "4uGkYJbh6pY4oJPMyLnZ9ncChtQCnBMBP8iJVN8Wj4b66H7Y3A81Wa1BckrjbMGQgPGCV8Hhzp3ouxSZb2gGiaxL",
  "key25": "4aggGuSJhH9ifZEq6UawbDsBCzbq9QRjgEeYDtPRMTL1q6kT5XkQLeeWajbfXMmJrXDStgSUEPHEAdzTaJwsoHRt",
  "key26": "46uv7z5Tm2yVF3mVG6tUSjeyV7YSkquhw8FPvmN6r1gBz8PsH6xbkGbKAPDYXeQsJ5p3zctVeKsKiPQkyHfZJgfA",
  "key27": "eUwzkDh7ikpoUJphQakNPXK5iHqGd2youT7tWM5143ckd3dkqF7D6qztqv3eTyrFXj4fjKGv86EEEhaggfCVCaS",
  "key28": "5aWhyXsy13fpvpNagAECvBdPNhfszqcVhusWDCMWxqX5N4QpeQca3LrnNfNvw9YgA65N85iQEd7C5kGGM6rB71w5",
  "key29": "4kPBjYfb1hruebP4yWMnCiQNe3LPMpwMLqLNNDoveVE3QT8XgJTvqyUbdH3wXoa3NnaNfuQMK4FfbciwK3wiK8gk",
  "key30": "4AuZGkYTkRt57Tfz23SMJQuAVCat8kmDNpAG4dkLZG6Y6cW2AZw96gENaEVtnycn9Np5qH3vX5uu7ecEPK4xBDtm",
  "key31": "2MJwcjwv1ZLthqms8wxG4gXzoDLuvQpf3Qxh2fPbZdSFyqYyXpgWqA1m217oWYBi4YDnASnvTUmKNtWx6z3Ky1FE",
  "key32": "2zaRBgd1scMwTT62FACzh5s7PM28JqcLCGjt7N2Gbyb1GLAa7xwhFi8spzG7DgfjHjGJqC3s8QjakGD1owQdeTaY",
  "key33": "2BHBjeV9TYWmf4GBtzyTwhpNxi6TVmWUNaZBdHFh5sj84ukCrVL3Q1p7Juj7rH5qzW1Z7Ku8kESKJumMckvTZzp5",
  "key34": "5qN5TWMNiaLtXB5h9ie76RdSQpr3jE9ZNuiXQQfcAB8d8GXcvQ7BsCXEpH1C42tad5XzofHtMn6XHf7PZqb3ahpt"
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
