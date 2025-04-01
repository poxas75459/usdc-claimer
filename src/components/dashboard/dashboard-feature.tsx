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
    "5fwnwhM8Jo6Z6ixbagkMTx9zEkohxN6YLfYuRepjhwxDhm3T6akXnYgKhBqdYXqXmmPFvYWgBXZDm7qMbT9rSN8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m3CU9bAEGLhezNd1zhC43koHcxwhu2sGDZiNxBDdvofpA7xFKP6r5hi3rDPxdkGKmDyEPFjAv8UCJATa8ApUWFQ",
  "key1": "4mqJzSzDrvb9EiaHn2v2eXQtQvhEzkRZmBKBi5rVnwC3icw4YWSgDTyrj7ysHzB2381xHeRGAoz6p3ZpanfCnwvK",
  "key2": "7uGSauXuEbgzpBZ6EaRsPiMbx17bp7vsEqZ7Vda5uGyKSK8d6t5teEX9d1BWbQC144Pu86r5xsjcXXion1m8gfB",
  "key3": "4jjfSrMw71UjMWDGAdwVi3DyXjM69xLU4xDMBfWnopJCrgtEm3qUTvJxE8ikburutSV3YWX1mpUVxWkGNcGMpz7x",
  "key4": "4QVuEeDdWaDvBV1WCGyhg8fdkhk6UPqQm6XgTCPruvbt3cUh9r9p9FjCRiub5k3WweNTt55NFQmQHccda8AgtN6e",
  "key5": "48cQJJJ2FCfPRxPcvUYGfYFWXehWgrGcwCRDDygFyKgZx3rD76zUkw3MMKaXEhEqLxUtP8bTJ6bj5pf9eab5uUKH",
  "key6": "625fodqiDbC6V87BGBEcoMKABSjr316PXYLyHqtkrhx5mvsqYEPfpn5SSb5ymdmtW5MA6WVLHCEyfxKAtXmRSYRf",
  "key7": "2E5sFLhtGiTP5UpqEMw6JANRJA2g5VUJXEnR42MgRZ5KDVWKxrYfPjpsSh6SUKdUokt1eztx39Y9X66eWEcPNoAL",
  "key8": "mfGBjEesnt1FqHgfDHL2aDjL2eQuQZhKXA2cdrEWa9K1Pgn1X7Sg4dkpZ4Gb5LyknzgxHQVrWGvbsJ47Lc44CK3",
  "key9": "z7Q4So6gYBQniuoZnhFmTDnR8whzzFy6GAbPDTL6qbdR84XmpSCnyWUmk1iNfbequH9MZkMhsmyDv7XesW9EaRG",
  "key10": "3FYAXhJCZjk2PPk6rne7htzfBVnMVbaQLjXx69ygkTXUSk63wWEcw8X93YeUip6MfcLL9bfdYjPKUdjFwmkdT1yA",
  "key11": "6335MFHdEeYzwgxkwfJsMZBjLWPJEA7sfXU7zeqgWgQQ6887XrYHpox2qvvoZD2f8sMSY5YADYTm4LmckqW9pA85",
  "key12": "375CQxWg64nVT42N817WLg6Bp9V3H7KDbEow9tPhxBV6ysBmrxoM8kd6qkomGpDw4b3mDWg9uLTE945TDWwhEYG1",
  "key13": "4921Mi95TJAAvp8yWJDcdNK5S91k2Kxzk3iC35XT98X7t29QVATjFzCqE99UZa1g8Kwg4ihC7fiH2dG9MpdmskyB",
  "key14": "2kjeE3K2Dm9rx6nABNQwHyFg4CYVfeP7tUQh3wAFXC7A9SyS1FxLYTmvJqwEx8aAQToZMus2SGNhRk8KGgVuA52f",
  "key15": "39VWwJ2d8mfvu2RsdwJzWmHhvEaNTQUZVTEY7zDQR72JFpyTxVs88s8rX6d5zuWhHbkGVugMTSqwSMXTtDUKXVM2",
  "key16": "2LCrgji91LSHSuqkzKRBW2NHNppjXq9ggvCkTMPLxPxtUejeTfpX4oKh6wf1BuCyqMCiPq8bKUtGHTJtFmutDm9n",
  "key17": "589NmjgEmYjFMTC11ezwHiyC28u1b34X89MsEmq46E317dw18LS1zhLwFzZkVtzNJrs97Wpy3hnWJxdeYVvokRYS",
  "key18": "3ab8z5LfgqbovMrKgWoawgC3zYRnpCQNEgQ3A3itbh5ujrWKyCxmgswoLZkhsnoViHiUZww3s24zb536z3WqwAs4",
  "key19": "3FmePTuisEHULdMpTJPCerVhiyBTf4g1kWvKdmCDMJCFt6srEgh2DwxPteZivXdMEXwPYP1355TQ4oRp1pVz7qbq",
  "key20": "5oaCovxXbeTMZZcbNTg6RqTSqhueh6zagUiMQ8Aj8Ew5S4HpZJ9vJFcgMuqjDAcooAQNapDZyyN5bXQve2vL4X2u",
  "key21": "ERqfVAyKzvEv3XgcnMTeSC6UTMWFhuPhgagBiPFqbvpN1oEGdv9D6p1m4FwhjEZ1iJ4TfwzzE7xmvMW5GxY82DL",
  "key22": "4MnJ6bnVjPH7jVXPvKQ2uTbxYE5Z5VFVLvp3Zw7VSHTmSwi8WZLmqY1RWpFiLY6q5zttKo4WWhNGCNqnKrw16tgi",
  "key23": "3MRMkptzKruXKQQuQaWvGKUmPF5zBzHUnnT5X59q4RxHNevRZt87APmu5cZ9WCHDjQuuTeUaC3H38S9iEseM4ysN",
  "key24": "39FJHk5MTfJyP5H6KgUZZZMPw8fPDWxidwaFN8WopbN98yzGrRgeyunExJDQiLWgSr2JTMGDUP8QMgLBaEA4DpqT",
  "key25": "2ohs3u55sasK1NpmRWhAFNR86cvVaZewfAcLSk5hYDoGqEvofbyHJezHaBnDoCTpLW8cuyYgdCuFMNRhm299E8oD",
  "key26": "4Hgnh6fBJRHQrBWSuVt6cLxu1dv5rNaRMZMvU4KRJidS4QyqB2FL5JMzmh1CXqV5XcoRW2f56sPKgXTurmaQcNPE",
  "key27": "5WAGaexe2f4Bpt1xEcT1BCd8xzdTuMjLqkaHLcxJU15mr41W3pKK8nreyFXW9fwDJfJD2eAxGSo1nsLKZxpsaVsa",
  "key28": "nkdpRqhL8mB5u7nKAWbVpCzwguHADLbub8LcFoE26eBYFPEUagohJ8JbSvVpDQCStFX1tuTG4WD74GPKt6BnLoB",
  "key29": "3kk7DFkdodfYKQ3cw2bEZgnFNAvjhtj5is5mNfXR6xdh5JeMcmRaUyrFtY2Czy6ocacGscjnnGSQEWhgjHRrwmgt",
  "key30": "51q2YnswonE8pBuiZcL8xAEuQ1kN5Ax5ueudgCgsGhU3sYgi3xyawwknFu6oJe8MheSwrKoQoJcCBFMzTRmrkAuV",
  "key31": "2Wv9A1h93BJ2PoizCHVoSULwNDUrqjY6vnBZL1m7PPhWS6xTFQtmjYhNcyCunZgeZse1T6x7LHVYQjMwWnWVRhBd",
  "key32": "SzNKVXkzbLJV5Dkdri5sTerMCospHc7pn5z6gRPXwcvowTCdmSAEJw1Ja2nsPzW7YjbXYjdHcY8CtLg6JSnP1qK",
  "key33": "2cC9xFYs2dz1xUgNEbF8xWxaf5Et3URZ5PX1BBFzRqtnXhp1fgHsbQbnsfTGTV8tkavPKjQojF7tm6CY4oj7wEw3",
  "key34": "qSgJze56SRH1RJkPD9VDK5zKvLQhnbk3n63GFrsZ34gEuWgBMbfTxddKMnkuTCgFP61vYzPWWwbcvgERHdDXjN2",
  "key35": "hnzaswf1XSPZteWT1Ef988Dvc8DpAaQXs8rehSakuwmaVN6bzeC3wDkqxvEX2uTzzj2gxcZveG7PtddVnQ8aaW7",
  "key36": "HCdpkSUeiym67yqFyHqvRZbpDDhRRhmrpia1ieWogVWSgGyUEwh8j2ie97dBdsbtwNr9tFxewjop24njKGFbQSJ",
  "key37": "4u5xgVz2HjTVW4HqgFY2UWg4vQUuLjTHMM25HySUVfS7ytCJHvRbDo2K1bLzrpr6Ag3vBiGTE2T4Hi3KAZ4SerTk",
  "key38": "2yQoGVnn7fP13wXMcPsHhz2ENfhXjGzvRjvv6fZTRpHb1uMHPK7iH5VZBSnjcLGKKzi7QCJmoJU73jiAHUrC4Rkp",
  "key39": "5DMHFVpJLkvGxhVK34XxvjM8sPqqnsvXY2bCUU44WKymZr4kwWSnvEFKQyjHV1MSErGKKw8ZKthLJcxVcJEXjBL9",
  "key40": "2BP4zSRtZjC8yVfV6fZQqtiZ5Ca2HEtG3b2PUwbjoTCahaaaTh4P5n7kyAMqphYgui9ozbKYuqSvhRq7TtiWtYeq",
  "key41": "4FrHzsyZdXwk6BnMG3EbN2oLUMDdbt1QGb8UFnx4xD4qA5GGJ44VHG3dURVX1dTshBapkzjJaDjhkMhpTgLjdeZg",
  "key42": "WKuo192V31RKu8Q5mMiVK2a9TJjzzVco5CNc72zKMnPqzwmZQPYent78rQaAkpFeL5CsrNajVEhKzcrB4Axp7Ea",
  "key43": "5pUCSUiiq1RzB5qdBsL9Cbrizc2vAtprPPrnMbdywHhyK3ScgoQ8SDjhNsKpgJoEiv6hNmfkMe7XQPCxYrGGmhE8",
  "key44": "sJYzhre7GX1VuEJXHyMXUVv6113HjaykfaTMnium3CjTgbvtbU6nSy5qr5NQajMammR8Q3mF1vpXrG2EXhw3DXz",
  "key45": "1XqkcvnKty5NEih461JqcsE7CjRuKWmypPofonueDdGRqtzXQZf3c3DUjDr8sKtsXf78gDrDTTf6XkuUCYNa8eY",
  "key46": "5V3p8Jk3kMLEbZoXM3AX366sSCe3KDgvuMqKVvZkvz56UrDAWhsPZVGvgQoTHNQgngE4PyuLu8JfCzTb1MgsAjxA"
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
