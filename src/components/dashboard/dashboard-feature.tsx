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
    "49SFi2kwTCyXEiCcK7Nqw1XRVK38AdCodLbq8ThaXxnPygrpVYA957dy9XJa81vX3KYNnZwYmWxLPmpv27hNK3Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyoFcZ94cEoyq5wc4gq6sVAMXXup4iTPxTb8SU421hJcyBfw8Js7sdEsF5dtJLGkfZ82sv2DTUXnQ11hGDUsePM",
  "key1": "D2pFYGTEokkBtLADej2jqqb5br2veHw2WUwEWpTgsFGKBpWQ2uzTCaxmhvcmPSuL7hB7wgwizqBCWDSvAFScfzQ",
  "key2": "62xWk3FwAsDycQAYWeDiSwQa45fYfZ93T6vypviDU6jvRjiKE8yMh3mzJ7Gq7tumQNNuLstph8tjMEEFXrU77pUB",
  "key3": "gsKwro27JWyqB7BFc6GKPqJTpEpUSdj2V9uaUVvdpsgnC5kxVvLmm1tLw3jpGcxmME2RaEpU4Hd9s3totB7XaWk",
  "key4": "5atUW5UY8mVsmH8vLq1ja9kZZSMbNY8FfrHDi8Hkcs5DM2SDVA2GLFPehTLETwwXuauPm5mxfPfKqwXj6xQt2Yny",
  "key5": "3eev5dFRUpkH2H7ajbqu4YnN62WFUi3Qeo416zXWDxVD2WzgMvK6hq18nm7PgefW5eDb8ojqUvzNsUGz11y4FjqJ",
  "key6": "ckCzcJFq2YHibXf2MKxnGP5c3NLDsgYYkHpRAiqL2vgoH2pzv2tiqjHFwT6RxnGFYyven5gYL1bbadxu7hCaDUE",
  "key7": "32XxAEhg8sPf96VQXTJDTGephScqguWxXNNoxQznHA9EhSmWXsGCt9Lrz7gERK2fwuHxBzvQ5pqrPNGrDjWHevam",
  "key8": "46CnSufRsrYejb1zJ9tKLP2U3aWwsxR8CmyEx45SGp2rJByb5YMR7AsFnmH1wFCiXLD6L8Vms5HZn7YfTE74TFHo",
  "key9": "mvFMcUpmUragKzBsYeXYN6Jvx8u8USHoCk1GmHEcv8ipHrxsCeKz3X2sETMJo2nqmhKurriEy7mejYYncL4Wyf3",
  "key10": "FnwJFejEVtvEDfGVtJkksj2FMZPRJYmYjRbDYSJBD4aMuFp1L2uCMoiqBogPqeWTD3ZKotLH56cKWwV3DkY2K54",
  "key11": "3MJUcgpBLCxeh5B1UtiHYFJc4tiVxBVjoeJHavbcjCTk9asNXrobHgvFrUWTUP4BM8zRDWnzyP6auZZQ5o8FgomG",
  "key12": "72rVpAvo1TwxCWFmWUyB11H9cmyCZ5AxzRh4rLTvwiVFpjTqEsQAeWqpDQFQ2HutSBGyk8b116eR2Dg9C3vs8Mx",
  "key13": "5zbVjk5sBVTS8a264fVjPc7zFaMU4TBMrhePq2munqibsnixUApa1d84pW7WgjjP7qhL1CLhHKa32pzSAehpQzP",
  "key14": "52vMbQGVntAY7CP5NNogiyNEyktUYktxXiVpn92wYm3qs5VAvU7y6jXBsdmt3RWxHYpFstf2rt9Bqad4anhrj2BZ",
  "key15": "3b6jT4SsfQzY1QF3gf1KY1ysEFfvy7tkfgeMUwVg251L69RWckLHxxdZzhawXzTav1U1ScFb9oT8cS4JPVCCB8RP",
  "key16": "3tPBnpXSgSDAMBZqdkXPmLLd2oAb8CeWauaUkXDiaPuZd4oWF1JG11F4mM7HfQA9HrtgapQE4L4BxaaojdbwPB7m",
  "key17": "qur9smxyBJGSiSBGgvPWxdYNSkHcoTft5B1AYmVTJEfRxQ4nEukAb4ZYBkinDiB5jUjwKAf9SaFytMmk4UcBG3V",
  "key18": "D5MUQUgLN4Te6yvyyBbTEXvkcLiH8zsoZw7qnycyh4hWKEyCBaUjL3pf5ajUcMpYrbgZGB49tcfxgu5MVZgDjmQ",
  "key19": "5cMN95tBNgNzD98wvS5WkbZQaiHW5GRp5P5PMt7GgBU6stoaVocfzXGRKXhZgYfoNf55xawCyb3nduGYDqTHCKFp",
  "key20": "2bFNQYMqyzA5ySSu565FvAgLujgTGziL9HSMdyuC1GQV5g8pHYVxjp7MG2B1whY6bWjZcETwRDzaHvU83wNnHoXY",
  "key21": "5Y1aQQX939b1uf8gaQdocbFDqg8CPAMfUPxctjSEJQVZn6DU22xhwpy4QV2rypjHkPgMTqRei3gYLzXazZjUmSyK",
  "key22": "42X9NX4FRE64vBcwxdN2bLsMKGH5P9hETFnZhiLDYbmr8LqRXtTRYajnzjrmnFDhZhA68cJvSqCpWPLNqpn42pMW",
  "key23": "2dRGeDdrEqqq2237sXGrLpngH24h8dfU34bvKKbgQ5qAM9oWSSs3Bh9KgmP9dwbcyYo9timbusrWfA2okyFmXocD",
  "key24": "5ksUNXzBi3hhVpQuTDPS6NjKAige7BdMMXiE8NTzg2qcKrL722VGT3RggR36AemBtD1f2r8KYXCF788BM1wPR82Q",
  "key25": "4wTph2gPErxP7PDZbddMuP1WrC6KGqCeBfTevRsCyvzc8QoNJAgtyw9d3UF4LeomXpuMXWyJqY3ybgyUuqFu1TeH",
  "key26": "4VLrstfLUtSZhB38bbJLpjC43zpLcHReHVhW435q8pHy9jzpFE5WkSpNs2eQpvyCYhRDUK9TmGbQQnBzpkSCP5J",
  "key27": "43PzD6BHuornUQ4PtLnivPXrkxtvxphYHkXCHj56FoNQkpCpRAvsTZfQzMRvkd4ZpwjRdqyhGcY93vwhnHrbhSvp",
  "key28": "5fcgDAa7HDvG4NCxkZCEyYKnSvxTYJhmf6gvVyo5iKLnyNeVq64eX6Ad5wxUnpYZtRua6rD7thbGRpG2qyjkEfAW",
  "key29": "2KuiDJDkrjWtm4xLG2Tf311Ea8jgyG6gFHnkHSZGya1U5mbY4jwFZXhb3CbpADgpWTrmoRSZTEDnFuJvo3QMh9Uj",
  "key30": "5Sx2kneZSE7zupBynx5Q7Dkboaae37VmouWNZhVpJHbGqsQNnDenAHQUNbcchdmpgawujY1K1GR7sgG2wpPdGdia",
  "key31": "4PZkeGpnL2BN3soNNwKbRUqZWn4Y8wEbmoPcrXXb3jmugavTabWuAKgNwJiWtehGaoFgmhiBB7euPNE2brFrMdik",
  "key32": "2sxT3gHFNFc9LMPq6BPKp7K87eJdkjF8esuybTeRBwHDT1u6eKgspyZo9MxHqPkwf88sLgyWGeZ3Hx16zxes2dwM",
  "key33": "3GPcF4jSfmyXKkyd1wQp262ccJMa94mj4oBNVhTxLjQSGoDzFbwUSHYtWATU6p1cc5vzXSPszhxbN8Cz6Lfp7N5w",
  "key34": "49WGwHfTW2nJ2TUwpuS514EMkG5Y4o4ZK9e9qRuPtB4C6M8fcQcQrNPAk5euZ77T9wyS7oQuL6vWFkMbfZxWCtS5",
  "key35": "kAirfgeATbbfKCdNkmdoN49g5uVPG8uA75inDnhVJ2xuXBg4RnGUe8cFEBBSH9gSnC8EE1uBrviN8kPR3mHzYy8"
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
