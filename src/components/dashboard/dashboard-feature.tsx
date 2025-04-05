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
    "2MDo96oSfxDrgPLH1aj8zN5YC4ZxN5W2FQw13sgVeN4KaF195rECzb1rzrSLjBbch14H86CxuchV3nkTmRzvoDa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JzqEZ1A5CaUCVqFwAHc42UgzQKmxjjSexS9dktfU9bHarp3CnH2aC9GhdUWVyk6HnUp9T6x4mv73FdF7jp4W9p",
  "key1": "3C6SvM1e4H8m3XnciJero7D1P8EzW1BphAsBSvH9V8xd85zjE9w4TNxR2UvJJimBFad84PNYp5m9VZT7ACUHa9s4",
  "key2": "2hHG1rmvXeedryGq3CWV98tGXY2BUyxJXhUqTkBJPoAjAAazk2jJFZE9S9sgeivniDZSXCMG5GxALQcBhMEmna9d",
  "key3": "RUAu92aXKrJCZvY9PCvPi25RDbaiBGg9mu4TrZMuGenvaLtjKyVKWZucZuu9nRVCG3xzNzGxVhHVNz5cZcDV3wb",
  "key4": "4McUhwdEkerUT8Wb21GUZqiw2QbwbAWDApXHZCnuViiEN6yPZQz2LPsCayiGGk1HSi5pvRkQQw6KBFGgoENzVvbW",
  "key5": "4wcBSADSyr83WXhsC8HNDqjWchyuNekzakqDmbbnyGDK5GHYGNPBsfk2hLkYZJwRvi77e5WFtmdmtAF3hfqQCENJ",
  "key6": "ZpmpvHsQaT4BYomNCcYFbPyvEXiwCrRoqDjxn5oUaF7RkuuCmDSb16K1bnbMAwwZVuyjqhSw6pntZAdJF3ZhLSD",
  "key7": "dWTX86tbycYarHr2cdpLZuAhqVoX1qXfD2AEwwzZJcMWu5Ksm7bvHSL6m41qyBwcNjMdwFuHWbBf3wCrk4dyK3s",
  "key8": "2YVBoJfqvk9uXcp3F1X4QYoWCwechzomhj3HDFbE58uv86bVt1NLCm4Y7AeUEtxvzu43EcMpC7smYGGEx4UzPwLD",
  "key9": "3rvSDHooQJfyEEUF9s6ee4au27aDdegsFEqB27bk2MtJMLHntWWVKdDQ2nF5rPKV8RGGGvvk7p8D2kLpoaQeBsQK",
  "key10": "2PvobXqwbMiMtBYbMzQC193i2p4tkRyv9hvN9jJAReWWz6ZnUEbb2QgqB7DGzfFEbGECE6YAKUicVvsSdrH3kmuD",
  "key11": "JUZcee2WtDHznHvYRfjYhoxohgJoUWDWqDEpHi9d5VsYBGrnKg4U2sSP5XKArACiZHWxQ1q7V8YBgkRJuX7ARtE",
  "key12": "2af73MbTtMECXqqoySxNc8UCsvDBayXTQNhMRfkYZ7bMRjkcup25kBkC56LkTndyCtGa4Yr9EzHVWjaiQtSsTazD",
  "key13": "5qjTz7h5AudbbYPiSvQVpTXrnjZgeG2dcJjXHBHbLp6VLvwVWmxPrtMNnY5wSgdfWibLeHihTxRUCxC2rCXaAyZC",
  "key14": "5eRA4kbfPQo3KeWMhehzcFQUQUiYR43e51mS3DC4uM6MuqngEMKZGH296E1E6wCzUZoTfeCsjSUZ7M1hQrawwQLY",
  "key15": "4K3TPmChVeChRWKY5db3P4bPW5rbTrTcKy4xYdsPpCPYkzvU2GoYXfrvYpb66DDQ3wFXeeBrBTH6ajFRwJX6SJ46",
  "key16": "42RFTj1PPMX1fSw5jPnAmYLq9hyWSFZHVvvddkswrPWt89itRHec5FWyZ15DwjyZdnLMnr5u7Fvc7ngxGfPVspQA",
  "key17": "gPhjfH5bHvhi933edyCK7uaHm93CdLumD4TGeqawm8mJUeX8rP1dF8NYGHPL9iKwnRuWuMRpsgwSazvdYjbV3Q1",
  "key18": "5Uag7kA14D3zeFWyNkJDUDCjM1AhdbGRwL6CG5NT7tM52z9pveqyYKB4HAVjnzNHgAcdRBbA9w1atFkXwWhuPgeh",
  "key19": "5vRQ7uzkxaXTRd2fFsbZsQYaYcCYEU9VYCsHDX8MBMdn7y2xt23daXPosBsspEy1jDAmQGZaypnDNLbhqZMZxw2A",
  "key20": "2yLHWW5iqsz36tUUGYjCrY8m2Czgn5f153xb89uDP29J2vsMyfSzuvXiSPKZt9Dsm2Bv9rvSJM4J8tsB91Ts6wJW",
  "key21": "mLGkaFUvm6VAyEjhLr8NUUfkoLXNeSXu4K1kcJM4bkxmGbZR5AtbA6fbv5VKYp1HhMCo71A6Ht6FT7FZQ11AVih",
  "key22": "4hyQdJDEKT4HpPKkkj5GtDueJTbeWGoaoYctyszxhDCVT1uJQvNdvbrCizCr8FWyQEk4Nv7FZr5Bt4y3BqjFU5M8",
  "key23": "25hokbdoebpT86Nkd9AqSPoTf7ogKTKpJ33w6pvce2GNd8hbKFUFqvGnFZbZaM9nHYrsCpo3VZb3QC4WU1rWZBom",
  "key24": "2Wip6sfZh5WQoDWv9jBAAXxiU5e2FeRKtJ7D6pnakkK9rabw7it3nvowvL5zmLpvYBjXY1SSrzQqt4ErP7sUjUbD",
  "key25": "32BmQveS34yaeuzMnTBW7pr7AitTdSiWy3rjdmyYCo6zheZVXLoRCx71cdmPCLAwKmLhwo3LtqtueruasLnvfjq",
  "key26": "uoDdd3DHQ29MbWUTfz8uT7CKzRb9VGptEiJdjqCxyDj1Moi1ZASseJCRSEgnFm2AeLwLTdP1FQQ63ViRkcYj3rw",
  "key27": "3omrTdRtM5UcDGrjifPV4s6DFw3pRH4jDJGxmdM2Kod6vDe2T2ZuC2stERQZimmFzTT5dNusyFWvEiEVGuk2ghwF",
  "key28": "2zL3FqnNRs14djFspasXyCDiCqukWcnJdoCxgmy4cagzku6tvGEwiN6BTCJf94798z46nZBnKS4p7mg5mphVs35y",
  "key29": "34FMjm7MvK9kSSymMdyJBe2gqA3CYdNrZQUfvgMkJmtxFGnQL36PiFtHPn4WkaKv5XdoRUYvkkQFD1U3kdvgzM42",
  "key30": "2q5GRaTyNgLCJaszcJpaGTpZFXWQ3bpQafvnP63ojgNvZXf2rwVpxGZ6Mv9iY8DnfkL855NeDv7Auqaku9FsBN3R",
  "key31": "5vnrQjP6iBBKpqQDw4eYBScAnhawPsUKBGyzcMzhUZNzgXxBTkZgWGrzjYuRyrkgoTfb9ptFF3e6FonBumB5uikC",
  "key32": "4XaYQ25tradVVG3gHmSrEADacTkfGsznwZbzWDcTb4jbb2xtUFD2EBRwNNCKvarY36yca3J82tGJwwnoLVY2qqeq",
  "key33": "4M4a1Y2AWV45XSbfY42Rnd2MdVzQ7TXL4uALnDcxygE8vhjA9TSXxLpNGtHFrrkca9kFkXvexcand1phw3fF2NSc",
  "key34": "267v7f1atjjR8CWPgWPhPiCXVEdgTn3sz7UTxHXNiTyXdjmckqeUJ7AsZugnYK2BTW6HCnvzrCjZ7tiSu5hNy39w",
  "key35": "3gcempnfqtCn6Vx6EdTjb7KY24Kx6fcb7d81RZVXKmbDxKZCNQv3Z32pcoDnSJYdKPmMeHiDgftHJcQxkDHdkrdj",
  "key36": "4gahSAbuLCjHokLTEQpZi8KG13qjncpESQ7Aw9snzBesrAqARrMwANjT2qpedF9pn56vu1AzpQ6UcBMvTe1mfXQR",
  "key37": "551ak8M34ugE2aTa2dvCgfHfYbGa6vvnfFUP3Nx2p5nUfS2gSiyZvDeegaceEWHYLg5KZbm36DoPgnXrvuoHGEzw",
  "key38": "64Ny9qUpR7m2vaBm1MgiGs2MoseRMhzKWBcVjHSrQwFgWPAhzyTMw1JFztpqNVCCZUzXaRqaqiBHjPRbJtafk7mZ",
  "key39": "5YGJ1hfY6o2d6ZVRkfQUYUF59RRJQVPzDcjtmVj4UxACXd497CEopPe1dMrW8xguzS1Ea69fiGDT87HxWSjF6pTd",
  "key40": "5MkVsmVbzfGjVFoZGXnGyMqbWDTuyRiun5dgtjT79PBmNKxDEG8UrziwxJ9rqrzr5rmZprSTf98gLVPUgn5PDtkH",
  "key41": "4BJUrsJvF8XVrrJ1xjt4qyrokoy3UzQqFYjZeTHvj8o58C1eK4tY5eavMXqGt99TXj8cFULKs1oukmtMjALAZkdB",
  "key42": "4MBugRsUyd17AhLPz6MMVmSzzr1PGH4yq7ehudbSJpit52TXtQv8pHaUpCV9v2UdympMaJpmh73618Cn6r9P4VXu",
  "key43": "2wYpHc1tQDusTBSxKa8wkePqT7aD5wqpm6ubzgjhn3XU4weDeVHvs7i8N3XMTVo4GP8C9VvnJFvUSQAwvucnUvbv",
  "key44": "26MaQyZw9MrmbrXvz3rzUz1rnSbj4KNMRFEsNAAC1zmzvAKHJ4YqeaSjs1Xb1VW2Ep75AXUxZGzcmvKSmzwZPkWY",
  "key45": "k3jxyvU68HmkCc91ukP3YHaGF2PdzGJGSLEZJc2opP5So8gMGDGoJNGZMk2BzUa5gKgvmSDyRY9St64K5gi7k8z",
  "key46": "4V6bB7tV3PuPrTa9a5XeczugguVpQ5wJ2tizkYSC5k364q9PuHC1Ly8DpXuAvM1jbvwSdJcwxS9oqaYQKNoZwobG"
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
