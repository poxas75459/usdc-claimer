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
    "7Mhd8KsbC9nj4JMHQrmy1qdiRLJrYbdkWDozwnkxATBejraRasky9SFCxHm1wvVDFMDFyDiMZaLoAWxv1qqRsSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Ry5tFBN7GZh6MBKMzmbLR3uTq8Pq86yzM5LfnazZBJYxywwBthujHWsZoyLJggpwbcdoQvjhvLQ2tPsp4AffT6",
  "key1": "4qTaQ5uiJJ4d7ogKrRGcDk6MwxZYHjfZVpWqLzXwkMwsr7d2HJ6Qs6EfHKvUqgXU1oJYSzk8AoXhTiXmjaUHaGHh",
  "key2": "5ECSniAVqTsA9EdHZE4dEz1eg2Bs3nWfY7PFWSrQxchMAWEgpp1fjmP3Rg6wGozW8geuqHNdDSiBc4rT5zL7rP3G",
  "key3": "3UXqr4AyFWuVez7ZsCFCBFUGwDEv3GpvXhtktqtQtvG6C3yhc6zwhDT4LXrHMmkCKFgWemmdNPsS6G3j72L6wb2k",
  "key4": "49rKMvhKtd3aNVCBgggYfY5QBwWNNsVHpuRHE2nStfhvnPrufQF7tMfUjJ4yPjxVi37tkgy7qdxtuNLwVokRXCjp",
  "key5": "JojNHCQbeyWdzsTsNgicoVWVoD9XLkPgf2wehv92pJcHx4RJLgnYexsKWyhC7Z3AQ6g5LL5onzSW8qq9XD98FXy",
  "key6": "2DSJK9sbeFVWqc6iUtead3TVsmDcojTfWcyc1jCkp1ChNxFqkAcPiRNWBnv78ivVs6JoWuVts16QviNYrQxXEeDx",
  "key7": "3L4SxqXdmCA4uQxZcRWuDhFzz1RcF5am3kFfpU32fC9c84knDGVCBxaos681pgQ4fdkmcrJgcypcXQJLR6LQBFvN",
  "key8": "29mMKkpUF16j4G9oFJxEqTHEa3BpWHQCoAj1LQhV2rKb7pMsGE1rMx6kkvcyTZx3Q86rFwLTr5DYXq5zBQ5TvZRe",
  "key9": "3KuRYeRNxqsFzH4RbkR21TMz9PjFTyM2E3tgN6Ur8STGVjTEviDkwHrurgqMijdcpAFMAYqUZgNrmyQX5M4E1Jhm",
  "key10": "Dfcf5uxaSC1gLFGV5kRqPJjeYDY9AFovCDXGsj9zRvvd2634WzGhcrVVu5g9n3yPo9nrxzYzYkdMRUmdwvoh5Kx",
  "key11": "5xXz9pCdBqLXt8zygD9Vzse41n43JA4o6RdpZrpfKoT3Jy9PcNM2oAdZVd2ifjaPyaaJ2eTQDSPxi51NMyntudJ9",
  "key12": "2PkG9bwTgsyHoEZR5x2Mn48c1Zrp5mkgPmadU53QRwbXpacFirjSDvBXmGziU8Wu7vvEYN4x26QkPuEgmfGnWCrt",
  "key13": "63g82PThiKZqbJMkjvrVEConhUqED9HQW4KKKTH659yuaNxcXqbzEM2c7egLkQAJoPwAZCUhHBMrPpnoJpU43ozn",
  "key14": "3bf28SqTYW7vEkQjnB7nZ5eGKRBAEPygYyZPVL5uDHtp66S1C7myG5WpZWMsTAVtdwvnxHdQM8zBhumBcKN92Gzz",
  "key15": "81b51mHSDbY7Ub8pvWiRu5Wkm3kzNLHrcNWhioKyqACn1bSnXv5fSekm1AKagT9HGMQrVUVW112xLumQg3awQ6G",
  "key16": "2daax5NtGRhksFC8eCPxVsSSSq7omWF6yDgVhFSkj2mh3AG5uXdVH14YMCNGD7wDTmos5UaJ7dE2idiHcF6KYiwn",
  "key17": "FyXZrFnNFLGvNjJ6pR6ng8XHig7WBQPdFzQ2R6y7uk4A6Jv7rRMxMHoqSrs9GSSoDGQkn3RLQUJq56D2SLozNHR",
  "key18": "5ALjtB8yhsHVp2F2mtoVeN96bdJFZkjv2pDKWheAPwXuvHFuH6nstZ5snGZkVg4HMdzZDPrFQWY1QRuJpc8oWhuk",
  "key19": "WofFg5gVb7vzgCh2h9e95foGcV24HjxnQNBdUNJyviDurKEG6MGRUya4joeQw7DX7f3LCcZZoe1DSsPwnxqogbt",
  "key20": "42iMw28F8pZsvkdXkdnsTiLPkbfzmpWqHkB6iN36Pj5m3GfP1XVANPQJJZuKc6zFPcKkqDGuAz2qBGq5QoTxRPbc",
  "key21": "5fZVEEPdK9X6JTAhz2bKjaDN3hoSbmVcwNTtcrNJ6ahnwpfhYNUNps1LmmBAqFK9oZjFHhbd5ydwDgZnBFjPM4X5",
  "key22": "4MZn2wnJApQmwYZ4mwwiVLTZ7qZG9kof7JcDASaGrG9x8khCnUvDdcftV3q9arNTkv4kEMeCr8ZBCLKCX5MNP3sB",
  "key23": "584eSxpxaJSWd2fCcFpHZGSVGddzhqZCswfxukDsV48PxHyJNF8KGNA9B1zjEdXmJqLnuJDQuR1aNQUCxp4yG94b",
  "key24": "4hYBVPnnNyYDcm4cCpWptEYmwMYkoj7F5KfCPLHxKoGqqUQQQSuvs6CwR91kW2syQN8VoVp3LpdWmSPbzVvLS9wB",
  "key25": "2VD3jYUAnPnyPuB9eVy1Udm7HRk2q2iREhbP8pDFjsHNPkixKcAYpbnigJZioZLdu8DsRKuZgSrcomAJRV6yCYcX",
  "key26": "uVTAtBXgpPfhLKc6njNZ8tMnNx2MGwiPWu78pE9CDykn8rbk3Niqu9uA5HXAERvcout45mSJBfnuJDGqSRz594K",
  "key27": "5PhDd5APdMx9Pb91GtghwXpFZd2vT5aWrmAFoveDkcmTMq3g2u71rxS52v8jrapnmJHbyiraKWTNtAyeo14iEkYP",
  "key28": "4WutQqPkggaUZQEeXdGSJqkDTDNh7MCLyV2M95QpzoNr4XRzrZ5N5VFw4WNeHbijiReeMw9AqDEghpw3KGNniKwu",
  "key29": "gDeesszkY1pzAf8vn5zoWp89BUehmWfVyJydZRddEnpwpyufM5xvuWTnf3aPdGk716fz4sZ79F7yodWjRLNvvht",
  "key30": "4tDu2XRifvmeMQ43DeMFQUHdHRLnFpc25R8GaAZvNY8xgJkgczm2wsVSBt7cdsWPpbM4J8F7Rrk1zg6zLYUuuiFc",
  "key31": "3feWrr7visZngUB4PriQfzVdkqHXgQihFenHshAEcqHE16d8oa8AF2abNJGTzFAfYhwKZu1sDKMoEJHComfhQMNw",
  "key32": "54jcoAF6xb7LEypXgyXPxwW8DdPxrmpWatooSFoEt1N6bAi1cWuwkmrDV6x5o4ia7QsVpoHynnt4PStDS93N28Rd",
  "key33": "44p399USmwRGjozTSNYWg8fcsC6492DAtuAf27WecXycJYVu4tRkJT4a5Pawxcy9zzUh5mAaH4JzQrx5Ub2j6S6D",
  "key34": "563iDGD19kGp4Ex9tW4sfhbZVsgy1JAjHL1LNuSVVrTTcfx4jmSbKsfdmz9vdd46Y9grP3L5i13TY5eJSQJXu4si",
  "key35": "2SGLHRrJbB8KpGqDsJHEP1fL2bEY2iSFF2W7DAsLj6QMXkmA6YQVSrQupyarLL4o1nY96HZcWW1LCS1kZDNoUpvC",
  "key36": "awanMvxAqHvHeC1aUGYCaRarY1Bic1u3UhFNsCiUCaxJeDSudwb45Bni9RrRuiBcKdYEP5Hf6uno8kdwFimJX3R",
  "key37": "5pDVxrUmrbYwuuxdYQhXPChPXBWn4qwjeX94Vpv5pWK6yHvFo4D3hcPqezTHF6tWiWayY86rxasF4UHs68fFcqre",
  "key38": "2NumShjiNGxFVwqwmMnwqEcMBLa8PYM6XjqXRgMJjpBWCFDy7BUG6AvHwaNe3VnvfmfjQiomEQxbSKrWRyX69rF6",
  "key39": "2VWaNLbnZrSL6kJfe5twkPyxZYuKypsxWRWbBrrLNtsdhLqRkXBwvreWubkaUuSCVwYrio39uRDEx7FvtG19mhRW"
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
