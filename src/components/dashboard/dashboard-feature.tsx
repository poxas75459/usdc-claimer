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
    "UY9iXVKNV5h4eiz1at3WZcWYP611iFRpBVKQDjB7JW1q9e5eh7Mi1PpsMXzLMP2gbheceR3PGed3soWLe3nHveo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Efbp8VutvNggAmCfdwQTBA3YXw7gLFC1hx7WMKbmsmAzjU3E4TLeXhahT2zUeeUSbVuJ2vJh1THBP5F7mcEbyrg",
  "key1": "jKXWDR8t8pWtq2oKyaCPg5gmX8f9NdvQYynkpvn6pMGw6Rv5MLGDKJzWooqXKsgN9WwUSHUfNsxA6nxnNuDuqHQ",
  "key2": "Jpn8fYVbEpT74aPt6NehmMZCia9EbJSpTWffoLwTKD6MArjU5Wht3XBKqDoVrXzL4ZrAAeMYrxiXfCdgk1TNPtH",
  "key3": "3JJBShHuJCjWmAhMFAPk21LhwZaYqytF3Rp1rvqLWbVEm7eVsk7s8ro7ZoSJCouGMn8t54KBNtncVJK7wSHagKt6",
  "key4": "29YVF1nN4NC2At1XhkGttS37kWhqXhzU8VczUdy7wAJMFDavvbqWdqtdG5oiCywoAABrRoerv98ziTA4J8JXnVaf",
  "key5": "5b53EALRehUsJVqXW4vQvpokSS8YsmMUZLamMBQrPFyQyawC91VWBnPVudnCxkRQsRWP4HN8V2rjYem27zW2qGaL",
  "key6": "5Gek97iHBTUosi2GfewTs76M1BE23X3A6zQum3L3QXrTsgTuMmXQ8JoXbn8RyrN8VrdfRuc54fadQobNhhS4gop5",
  "key7": "5A4zDajtx7SkBW6G2iwN54XEJ6siNVMMdRYVaqQb4dcf75Wq9RZEZVWP3kzLjp1hAVfPv9JEuBAN3cwccnXX4adW",
  "key8": "pxQGjJiyg1BUafByd2Siw27W9LDAr6eFSTtUzVvaXwdBjKLmBbexRZjXxQnU6aFCpiYYZdW3pFz6ZpLiSwS8Qkc",
  "key9": "R2bSm8Y3evbNAyYtMKDnK1aCMsZokUuXsKbSfQ3ReAwjLv8Xo2coZgoksxW3U6Sw1iNgjoKzK5iD7fLfnid1faY",
  "key10": "5biqZ7bni1UzRpugUMXn9GLvFneHTLL3BwJSNXZZWPk4FEPa3PATA4mxoouvkFdQEUhoZ8Ute3EtVcVXpXU5TTpj",
  "key11": "4yYPE4rBZJEKBxW8sgDjYG5qoXktDeuQzwJsSrwanFJkV9YjmSbg6X1DumGm9vakctWFJhChGvxix2r4GxC7KvXA",
  "key12": "3ufjMKS15D1TrZmunz4iofAqG82kh3cTX4MEVroorqRJ4yak4jtNi3ufGYMywGKDC8BxrpBZ2nxrHwND4deHgt8w",
  "key13": "6o4UewD7KvcC7ed7xEhk9z2bUKpjWCmTc3WuN8wjGgQHMqrcWD27FYykJAb6Scmbu86FMj1L6rQgL5VjQpzcoiz",
  "key14": "5dLnzK3zEmuxyqvNShkpdFV6vHP1KewRMzensW827q6sFRrCpkrjuiJaUgUP4vX9Vts5w1ZbsyVB5ikesagxeXQA",
  "key15": "2JHP9jdjNkwB9DiNhVatJdFDJN9Ci8CsXVv2g7xYivHfnhL63uNBzec1TC41sFbmJ78fWa2tsuBYT4ZSMwM4x21d",
  "key16": "5dmiWoEBBQNFq9rY33Rdp72UnvApZ3nzCTFP8mkmMmVbF3bNits8ZCLQqEPhkf4ATvEPckbi2F6K2XpKt2XNgMqg",
  "key17": "3kMBkrfdLFBSpM6tG2uvQ795sLhAK5Yeq5gJyYrsKbpQEGfi8WDay6hJkGEZravMw8z8NgZ8pwp3xnQLMFGMCZFp",
  "key18": "43uGZJvkrU6ErrkUCMrGbzQa4BE1PDVmgeNamB4ScbKmUGLmCUow8UfLevRFJa6Zaym4w6fkNu4Mqr3oKXqqYjYt",
  "key19": "2ndBLA7wAzyp9sWh7UkcquyjWSEJhEDyWg7EL9454z7ShoFDTbXR6YpGLxTjaARzXZuL1dD3CN1Nb1XEH3MxKnjB",
  "key20": "4N6dg2BBGeP83gSsbchpZ5bQBs8gcpZnUqTHfyzbgxQyBnDs8b8LkSKEjUJEhuKnbg2ALdZbfXxsbZFCjpzqRdzQ",
  "key21": "4n2JZpv1k52RQLiBRbq2y3yfdpGNJcAigz9Rjyqau1UUrgX9DG6Wn8WVMJU7DkBFwGTCMatZHw1P37jg5TPddMAF",
  "key22": "594oJMzxCqg28hxhjvCb4CZiJAqg5J8abynP8bUpHg7sxvhVSQps43kFGrypuDPMPuYdSHx6Rp1jX9qoXnbidb5E",
  "key23": "4RRDf29qC2ptG7VMnY58YfxvSJLpSPJekL3LJugwiTWDv6wtAYtvwz25KTCndkdAyzwnvxCMa6PE9p9CXhj7Z637",
  "key24": "63nF1t397dvd6GqK1yyFbXv3DoZL2CryAeH111UhTE2whjLo7U2GAfnkxGTcnCNoqhnnB9ewbE8kmxcy61Th1W6H",
  "key25": "3fRqdNHWGS37vp8v1BtJEYSe41nkVt9qZJFAyJLQXHJUAi3mRynYccmnussnr9oDgvi4wYfD5uSkvmwtrmhcCJba",
  "key26": "KwYNN9ghDTR9qbT89xNzipLxVeguZbV6qLfdn6Bmd5fgUAQG3BiBKLnawY6BkBmxz7fFt23LwfFTXyPpqdmqLbX",
  "key27": "4BHmX1Prc6nVhDN64h5W33fmUyRp5zkrvxDJVCJd69X6GxZmw8c9UUwkJrJSD7jrp216AtZ94QChkZ2UyhMF2oNE",
  "key28": "AqqpeK3BTfeo4qSSLqkYgVwqQeuGTh1oK4Y3w2md5JDxN5DiDp4ptyLrkPNP6kzEm9JMW1FwqySjAMH96L6a7eF",
  "key29": "5CcHx4JradLupyke2HwgK4SJ8VaQHx4GWgycHG8D8mTeso6xo7oFmRDb82qkTdYN7Q2n94aGPzfemao6hDw1KZEp",
  "key30": "4t9REdXs9UTTwx3U69Hk3dpSKeuQUk3ELjsDE4uFFXwYeDrmRFv5x5HYcjsjACTueaVcaxyXfRZAk4hrxmSZSg3k",
  "key31": "Tj91t5o2jo9rdkCYwfNjUiZ3z9RtqxoovJANYHDz4ssj1tiFnBEyZjNMhHSv9XiXutqYpjVJMCtxA8p4EfMLkBX",
  "key32": "2AV5gzLW1sTiCGXJEhZ7w9hpwuiA46b6QgYiBjxnbLqnHFB9nr6fLTz4rxd5c2Uf6XCh9XJzc7yaMyrijuGGqYrD",
  "key33": "GaZiB4FcbJFYnkMaQvXFEAnqxagyppVSGZSit1rB3Y82nBqJ3dSFQWsVie38APskcUipoDkkVAjvXmd4aMsTS2n",
  "key34": "2Mhes4ctKryiHP9oHVb4vA6DprzzJ4GjP2vw8JU75L3cS34E23rrJqdnpXpApXbFABV6Ho34rwiHr8Ysa6VJNAVm",
  "key35": "3wfxeCXzwbsrbzGMqZvwGsbkcqsqb7D3GkUWV2gLuZVmqeqMjszrz4Ey8TSgnCVxk2wpub2yFm6eBKp6S63G4MA",
  "key36": "5hg7WiujtpaqnNowMBznj7aHhLdvmiuuvxtDPfGEiJzrnBFeSHyP9DdU3VvaRRM2h7tvUq488bD1h7BJCwyndtgY",
  "key37": "3RSBscxLQg3E8rWcE58mvwy3VJmzxHPjaAhMs1CxMNpduzVvF5sSbGpNcGEZtA3VuXVoVy8zNriWmtmmfxjMBpvo",
  "key38": "3V8Hw6i9dVyQPUbjfnkfDPp7mTNea885sXWZqfy4omAK8itWjZAZhPAQXoL67WJBbDt45Saku5JrkgdM16QRVB2R",
  "key39": "2zUCpfd6mt1aiRiyjxDy6Uu361zZ7ssuJD9A4pJgLWDkrowkETz5Noc5VVDfn7E9e3Eejz9qaET8X6kXU7yfCHbi",
  "key40": "55HbJHwYKLHbvY56Bt52jdSgwqRaMtvHt1tgwipUwmoR2cZqXJJir9vwKCoUiQpqxdSoj2Cvmr12KcihJcC1juJg",
  "key41": "sUDKtQrjCqaPNLY48ay19D2BEMAkHguKUzFiAyJph8H9nt5V8oUPNSnmpK59x7yTK3uACKDwoZRLAHsxjtXyJgo",
  "key42": "5dXt8shVom8zMapw3e5kZHbV48GbV9NT4kuEzJQ9DyeDkbec1A77Ldftzx1bZLcK3erXBa7VTSQRrGfE9emsoYc2"
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
