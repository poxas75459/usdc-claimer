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
    "4UwRRZ6CEzqw7atZjq3vC4uBKFcH3fvqruwnEBFBwC6bUVT4hWrNnSbsU9ZS6Ax2tB3nPwNjgq1NFkNSRDKwR93o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9HQgWXqppXufYyqdnNA7ubQwg8d6s73tEP354z5KAxG6ydoX1DoaEXw8Cqwt8XcBvFSgoZescyxEpePd69Jy2K",
  "key1": "3nnKcD2mJzByt7X3zdXozV8RMe3j6jH4VoPiFMchznrVEzDSyGMWNbf7VVtAsnU7zbN46CP9T4PEGFXKAw1PBuwq",
  "key2": "Qe2JdwffU9UKsWhwhczDJ8fvKrcmtWrb9rt1cXi2M2nMcwLCuWUi7aiohvSJYRC2gUmSFtm6tpcbPyqe1JEYW71",
  "key3": "3DEs88n9Lp5KZqNQa9aLX7V9ePkuSZ8u9QDKYtc5voTdzgnsxzSJMZ3DP7Eu48FFXz4xCfbyHM4fqhMWWaaoRJXU",
  "key4": "3D69FmBbYgx9STzN21qJFpKYZpEbPErzdXbjosEAJQNmBzSfhXGBvwJ9DZrS2a4X8DkpErMNBBmPqx4f73fBCtjn",
  "key5": "5Q7CtJope84SytpstHDkcLAh3TvH82z8WYTzD1uhXs4ZzmtzpZxVS1WoH2AHH664hBM3sKdK9HQs4NRVbxQ8oJee",
  "key6": "5xoXn8bNR2L4ZPdZ1BD83vjeWz2Fg1E8sEXNMkEEHAEJ3u9erd8seUCEVmgLDfQvCGM46PN9X4gkhXY6CpQeGtxa",
  "key7": "5pfYwWV6RZQS4UBoZGiFLU4PzVojC4zgHyvAJJTEy99Ka6PutrKuS6QGP8ErqB43DzqYfNgMKjEGMTVuwf4DrQb4",
  "key8": "Q6qaLiM6vU5rF8qaKKfkPe2AqkZ95p6UTfNYmw3sPSNaono2fHwDZG69vydb8KZbbrJT4BfLnDvTaYhYy9t2mwb",
  "key9": "3DAn99GW3ihVeAsZNu11XfAcTnyXLBPEi5zTE8LYVNMBLwHgvsrCb5YMFtSrBBJ6PQENxb6XioicRNxPc2MdM6RA",
  "key10": "4xz1hSkypUKxdRFEuHBxWYUfMtt98rNUjqxgxXbo3DH9CXjx3MYhJvMzGTYr1g3E8vLDVnrNet7BUu95K9kZyPFj",
  "key11": "4ZZtL4WN1TVfu1zivkfeQukkxLK9o6Hy3rbxmCiRPAUEWLCWu9Jbww2BLrVNzTwWPNW5QeBi85TcC6TC9sw9u2NB",
  "key12": "5mnEjBUJ9xym8s2mdkGaUdq1YZrexQo1mjmA2SbN77P95gLehuirexSJC9FntQg3yD232ejYmpM11hoNQa6qXAvr",
  "key13": "L1gfCcY3YdKdoQtxW9NNWeAB9aXR4uRcAiL1j9e6oCbbzz4GHad1PgPJirUs1Qo4Yv2hghQwMLB1LPQ3wA7i1y2",
  "key14": "3RG7iJP6zMCcgBhyrgYirNGRgQ5iZ8BfiKwU4FCPhUg7TpKrcGtt37YVC8fHWMgFhqvzv9Rbs3w2TfCEYY277K3Q",
  "key15": "5TgZyKqrL1Uxc2bGVwZ2tz6QuWBJSXdwEvvLDjwTvkB1dVgTogCo9j7fuaiQJSC3k2ez3Pd3eBnTYKJd4BJN5iF4",
  "key16": "5X4e2mXKfjgCyLesgisncqVu8AdfhMTKUTrSZ1EVNBSkVXP9AymZhig6EtWcKoCQqW3ePUPKx9VSBjJL9wT7BebV",
  "key17": "4APgSP8xr6K4kX253DKF7trapPUwViZvroua8JE9FVRYpo5C8QkygJcR5H7qQWzqemxdfekso7WkGHyPkrMEqEnL",
  "key18": "4kXcrGb4yQ1XgZAY5StgMF3ixZVN64bwYQGF6ycmkBM89DA16d1SDzArDQ6AVFYDkyo6Vsq5Z1RLm7BNHRvvzka4",
  "key19": "fkyyX2suFPQfpCEtWgD8KhXjAUYVXimrxMfCy1s6yhXgiRXSFZNgNWRgY6azcrJBDxTrack6s74ihJvvuVUpEFP",
  "key20": "3uZtyJ1xkpVaKZatHXhVnv6dp7cUnMfr128szmJ3sFECviAns1qDHau8nZLVreK6fLMDXdWAPEWTzrBXuNqWrCLZ",
  "key21": "5FeK7J4ZsjBRNEDPRRF6Hfgh6Egdb5xawfCbGc9iyLEXbZD9NTjY2yFdpnwmc2J3YyVKVoRJUjPfT9dtbMrWV7KJ",
  "key22": "4pYTBhLYQJFHQ71jWVuF3Z1ZMyuxbas259WFM6CVWQfNiGc4DY8MSeJbcNMh7ujRsgyVkFsTUFu5AQFfXLe19FmN",
  "key23": "2gsJRet2ed6L25ntc3huUwr9Y4F3QAZqgSGVNPSiDfF7TAfFpFRcxx1mc3XqPVbHtfEcibcJS2XCLCaNyoEzNY3t",
  "key24": "2zSBCeVAK53aSUHr8D8NRnyNuMSr8hkYzkMNYGLawbYecTffmanVm6iJf1exsDVQStokN8xKLmokMnpRKPWibpCe",
  "key25": "cQNXLM1by4yE77Enb44KRr4AKZFAP2W9UxUCkSa3zrPw7YAB5CPayPxxM78yaCrL8RxV7CymXMFSBzB5og4nhEE",
  "key26": "3JXezaJBtWNQXpqbWBaunnet9NbBAmNdPc4WQGvLpptJDNbVP2s7UoA4vBswPp58ty6HjtRw1oR2wAgTMGgZ7XGc",
  "key27": "2oFcN9qzmsgogxAEw9UYS9mm33S8kYFNCQd3hBPCZe2X7664kzApgDc5k6vAaosbBWjNXnUPMKWGJMUA8CCJFuuH",
  "key28": "4X6WdHWYcwEDuosMrDuuvp7EZKq4aiHMbH7f4J9GPPvMhpZQvbhHtFFwDf1xdyNvbaMnbp1qmv62bsUVQQuT3zfv",
  "key29": "YkUhL6QftSQWbAq9BMJvba6UHeBfdhMdWe47AtBTVt72SFBhSpL5sr7FPh6ZQtDYsvVWDXh6vassuvarBErQkAG",
  "key30": "5haW4ziXAPm7DY7SceBv81MP1pbmEBRZhTtjxhuGdir92pNqAf6sYZAufkNo1aFirifohW9XsyWWeQtPY2T7mLd4",
  "key31": "3nPC3Fpgjk4D8MAdXQNY4Fdh7um4wBhShywXxzxDqLyKyFwpzaLZ6yAHYpvNMYKFFtVfWoVaWWrdgoqYMBBj1Lvm",
  "key32": "45YWUzpbjuSfWt3oHs99yEEteZ58ZuvkknM4sH8bKsGHfBxWUQ1EDTvznP5e2CUVDL5QA4qodMDtbJvKgh7irRdE",
  "key33": "5AxdofNWCnhHTVg54bXAQQmvrK2rCLw9QNQz1thsMrfbL1vASXrwXm2MjX22G4p95yGiDJenv6kpNzkyy4dN8JJ9",
  "key34": "2m1B64rV5ywi7rzZdvWRFQ2cExiVif6LBCW1Mmtccq9Q91NCwAENEUvpqjC8NtAzgxcgRq67frXPTXGgrvJzgut",
  "key35": "pDqZXSQ9Y7BZX6vRP4qjVQSrsCxghVPeYpsnZYCnF2NoDUTm1Dg4mXncCqgkMaUPLFs6r8d2AS5JX5LFsKtVe6Z",
  "key36": "2Jb4Cg4fpeDCkgPsRKKpGmG44sg93ix7jWxNQZfyxGpUcYZYiNb5tPiyZkjLi6BW6oVwtpbB7kEPh6aAecr4KzwN",
  "key37": "5xXALP3KZiW1dXJRhBiM4eAZGkJ5BbpPcW92MM69icgqdkb6MPKoMij6dZbD2qrPpfkzYSsoqwARTsPzaBg96dqG",
  "key38": "3sumVfXWLgem23VNMKh6TFq77SeQqK67V9TvNQnJKfMHbWmWPUngUPmSkx6LqfhWRhx3LGKZRhsmQkZFtDJJUtZg",
  "key39": "Ga4r15t9eX6Q1zPFv4yMFnTr2RsQgq89YyN4W2bH5MGz9WFDgFegxqozV2QhSCF74LwZpjvd5EcsLXR2H3ZaCxN",
  "key40": "shuBwFEm7sJsA6ipydbU4dSU6ALekiB6QYMgjqbpKtP1XGExGsjQpVWn5DfNQqiQ2dU14bvrjfChWV2cmKMYweA",
  "key41": "4rpW45i2DeeswTD2jMv9CxhYXvjvfq7Hf5dN2kXjQg5Yt4P3jEWrWBymLabm6L1tiyc8W9xWXGsih6gf5GBZb1wp",
  "key42": "2WJrwgLM1m8xGn9novfeteBrbkwkKo8Tre1gYZY5mREW8xZRhQ4zGfoU8P1gewpnf6DZNPS3yu8CXVyN8ibSwbyF",
  "key43": "2gwn2jDMJRCALguMi1Rv1FznbLy31yGuBhZwm23mdNGgdAZwaPHVHsUwSDNSDEm8bb18rr7WBR2B4AC2ptMjbmF2"
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
