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
    "39UyBQqnxvrKwnzUBanAimdUDmXr4V9AisFd7YQSy8221JcEeDr8vYw5ii7UHTX7AufKRRPfej9n8qUo7j5xPfMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSBWUCU37WYhiWoziNBfyJQsNd7oHACeMkWjYBVfBYs2YoYxBJ79qq4j2LHh4ZGUYhpUQjdao1XRuhiqCcf7to9",
  "key1": "2TT512pCdFxUyJA4ZJvpyrNPWBHfVzzp9Ypzf3755iviSwyefV8jwAiHRo4GGrQrVVKfdeyXkUo36BkNftQsS7pE",
  "key2": "2XVe7x4qopV4BaJygkPcXL1qrVcZkZiwiZHpyyuuykjDSFScezUBdQem3Y62yQKU4h7ZaJ13h8atEyshbPYr2ipY",
  "key3": "25hTpaQkhepVd4HLGqrZPmf7yNPnbErqbqvxpDSx9vRafQPtKU6ARZ8iy9PfyNEzaVWJo8NmYRGzmnFv2CnSy6vE",
  "key4": "2CMGicuue2Zt2Ljao2Q7sT57FSoGESxr72kq6zZgrWApVEUxg28UxAkCBkwQHhBCAC2vQWDfQY4RB3oR6ZrAGMWk",
  "key5": "4f71HkNK4B3s1HQvRF5k9q7KnN66Aefg6yJm93fEha97DjVqpmGzFWwxCmU29GNK2FJD11Un6ampKdKFqeVhPcQ2",
  "key6": "2JYq7WVLd5UBf7AJ7UYhKUDvmPa8hQK23s6NpzFN289j7SnUjwmsgaH1PbqLgrgY1KgHwW2RSyG9dQvuGcFGCx6Q",
  "key7": "3xER7PbEPJFiXSiJHhE3aJhw2wwPau5V6dZA9XTQGFfAGSFDvAnaZuk22fu6WT2qcv2WSDdBLLpSeAVQBAfyoZE",
  "key8": "2wYoYSzReKiyiLreRHdNRJVQW66LXWNXF7yRqJWsE5GWGVYNHLUcHWPqFaAk9zEyjSXdAzKPJ8YqL826tCRYur3S",
  "key9": "641bMT4SKCKoj1WavV7F45seHfujmP2Q83CQboJw42fZjxs6EHtaxcGUhEhvi4xw1ZYPz2QuZVym1NK4F56jLPPQ",
  "key10": "5whTxUw38g7uckByY2QtKnjJSJWqJGuThDCQv5BnYPigBqx4f1d6KMnYXYwqA6YFqVAP8BKu2L434a9tNeqY8n7f",
  "key11": "3febZ8Km3QJUevvUksp7FyLUCys8cN5oTwFfPrpozPgD4FLD94EChaUnbGWHpLw3Fib6sp67y2924wnpNWNC4FuH",
  "key12": "NcueDQbidTmiH6pxXRdGycXHrEEdb1qiiGvNDvTAmoM4xgRTDkbnYFV183bBz9UTgLH2nKLv1FBgXsyZdN2EG83",
  "key13": "5Nt9957fUWDULMUUJwKD74FJFNFYjDJuYQGPNR3GZTztkcnoDydpHWsDiSoWth9iRXjUrFPwF3LMNDcAsNZmBbjx",
  "key14": "61hJfCs7e1v1Rd8uoeynP1THY1ART3GapydJgdnWoQW4k44zYVkx1QkhrHbRBbj57gqbY5eva2LLdcBJ4Cu4jUmM",
  "key15": "2VAKyxYzQExcBMnMcezwctAdwxdvUBsEmJY5Rn2JLzquydoEjjwN3knVAoTAjKCQosbyJwB8mphXtiiMowhzZFjU",
  "key16": "KsydUBEazwyruDNeqxnL13cPLAgcBMsNCZvpLjqWoPuRus6BdE8MrjkwfYiXZ6JDhp39j6zQsDJtUwPp5jrNLtT",
  "key17": "45xaq8m4sr4RVZwj8btHM2RNwZavS1cspMf7pfiwys7Bb4V8dasF8BU1KvYXGvr4zKmNrAjk2NJceuHuhjxrnovo",
  "key18": "NUE8qBmwRsXbehBgj95ie2P9xMVD12vWUzU6GmT8Ge5W1HC2PfqEy52wiUdn7s2Y4G3TBayM2MrHHKwvqJMVjYB",
  "key19": "23h5dhio64zFrCQfnT8cg5Ypb85xYaZXur9ajWrLvMxnCXMzVrJWN3YSNqgdwsz9Ar3X8wpivxtuLddZrZep9fLr",
  "key20": "XpbzZEixq52knzSs3CqFsKRMFFX1o9fZePamiaohwZ4YrB8911C8wYrEB8Qu6yDsDNRvKc3hEzdHoWL8wo2UWgN",
  "key21": "4ZcJbv3vYEqrJGBzznLAor2mZD33c58eEjozF2AYuz83sLFd4tKWmuVo62MkkK4xjJDihEnGtxWrxP8VWuZBYeRC",
  "key22": "5i4EGHZ4tJwiFytAdKwfmXt3GFijRhvNWyLCHfrQJEMs4zNRbj9ZjKye4fwJFiMaC1Z8asxXES8qepMP6kHEjPhF",
  "key23": "Nr2mM4nQiwyWHhrXGc6rm4t2XsdMu5Df3UoEUq1XmireztdpE1TVsBnS4Qw5ZjoDnntoV48H1z5ukQeymtjZan6",
  "key24": "Kx6PG1F35kgrYTKDd85H6rLvSqnxaVaj1CnAPyp9nxAxjeFxwQGQTao1UcRDYiDP5hipWv5B8nvDDo6DK1hpffe",
  "key25": "42u5z7eCkqzF8FGPvYfk6JGcgXWT7bSbE1kzw5BbQvxS7DKyoH2Uq5Y7BWskA1XJxvKA7d14ci4n6j5c1X72hSM8",
  "key26": "5j4TQ8EtVYaxsCNLnYGzcHMvNoPqLNCPPPQEjwKDTHuVuJwKUsyaF3JqpvZUyP2VoUV8wdL58Ch5W87hhqjLQghN",
  "key27": "2y19cZ8PoVHQ4mo6z2Sbg1ZRvNXZGz7rFTvLhCGmKEfA1WvDnqkyp2tTmwBwWam81ACwBfRXGv5UeWoWsm6Fg3ur",
  "key28": "2e5SWiMewcwXPoQ5dDfVpMMenCYXp6ecL2EPejkiUH3pKbfFBFiDkeU9XMD1UedjRHCM6fyQKdU2DRF5a4UCVG9Z",
  "key29": "65DWVgUBLLb62p27EP8DwE9sMoy52v6CQmDUwzUF58mh2AvrQP9rufoJC1n5kS6JYsZoijyV85ZADai7LtUV74Lg",
  "key30": "39VYAX4Z64ubo2ZDKGREhiftXyGQ8ezjRbLh8BSZsZVPZRSnDLVw1NTPJyhcDCjUBasCcFVhFje6cqhGdJNvrgT8",
  "key31": "4tWr5ttgcbkeXqmFSDDabH52XEXeLyR9XQwnu2SSSs3C45niXufEASSjmzkhcZjuvXQ2WUgHK7eRMjp4vmRWGNHk",
  "key32": "3soi5aJqNZbwyRiDbcBGx2Wi3KepF1575yqmm3aZCp87BMnNq9KHrSsGfjeDLM9nEibSmrNwoE8VgbrneZJx9By7",
  "key33": "4M2XgMucMPHAhX8wpsEunok4tuQhJJkczi1XhEMXJWf9tM2LRVcNBVF5uiN9oEwuxsWX1pBvUxRnFw1ZAPJjRX7w",
  "key34": "3LLwcC3gs7H9QF4SoaJMKH1JPLiz1Pfww42E5eUe2Q97sF3CgTatpygub2xoShVuPGoH2dBsqTnjcU3Qjy9pQ8rg",
  "key35": "57FxFeD3vaLAZVLP2Swmf8tS6zPF1JKhB18kiMwCSoL99sUK6Tpg2nGWsbuz5hdNYzBLvto7dH8EdTmUvXscHrpS",
  "key36": "5nWWJguPUEmvzZ1oFp3WtBgfmt5jhzaZPvj1HoBALmyCWAzCZettKhVuihWENHyYxL837z3eXQnQXe6MEnFZgobD",
  "key37": "4qcZs6jgK2DhYuFU8Rwfsj1TZwg4B2KAkmvo99jNTB6CQaHjDaDKChYjip6T9EcbBx5YQEGLbtnLaqxJYBtHC2UL",
  "key38": "48WVdMKbPqnNrMc3ekxQ98JRcMrWoXYyH3zWNXnwD8JAJe8nvJfVHxPfnqPXLcFpDkXbq4gC3gi1cgSU1qeV6onU",
  "key39": "TvJBWewwaizQoSb3jStQk34JL7JFnv9fKGZFVzWrz3vXWFjPsXpcQgr1K7JamHj6HMoPdmKCPgrh6wPk9GCebEj",
  "key40": "AztfDJzpzx84oQmdEWPUZfKojzV27Y78uAzpeFTSvR1TpYKynWnVVm1EFwsWQhUMqx4NDpw4F7UiApKV1Du8dGb",
  "key41": "4shXxRZeWSUAepcgqmUiBmkTvYEF2J212YzzkfwWGP4RzKYwnU8RkFF1XN4DUUdnvcxzZFeE5mk8zf1FhgBUSGxp",
  "key42": "4VMNykPwFCadBTmDkVbL53aMHoYB8qChcxsx62Dgv7V1M6bB322emD8Sz716KLE3BDGDpCCUWBfHuCN7rzkEaYPz",
  "key43": "4kzfrLWNrjLKkonp73nDUr7ewVJdDzjPV3EfJpWyBSj1woDcawsGdKoNebhphHPzXGJNtCs6btbVDmmTLRo8K4gh",
  "key44": "qExBua2D5sr5Ks8QyhQS1zwJv53pZ9zWQomCaUfJysCGBf1xK7CG4RfFNR4UYGvYYcYPrG1ZgRAfYFcWNKJrJ7z"
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
