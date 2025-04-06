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
    "51UryzBXkK8CkWYNQF6nqFjJaMTh4DYgKBcRkCFCuPJ3z8vnXNvimD28rpzTJUB9nWUq9zhFrtoiKsJa2dtg8Cej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNZLdtVyRg2hKe7dwNg3Gqp9EdvcbAqS2s6t7nyQdnE6pBuPagfbCP5ghVbxsbSDs6dcuQWMG1JY3xP2EC23Wcg",
  "key1": "5bbKdbq18odgA1oPhmMa18rRb8mHMsEwSBYATusVmT8cq2Ajag791bTiQcovWBaNByv87eh3yEEynyKDJGtp2ara",
  "key2": "527HSKUtakp85vL3ibgrgxTW6HS5Z47pNMhDWmVa9aWDGEwVWFkJPqP8NWUL2Bn9t5Ngn2urak4T6YJzF6re6twG",
  "key3": "3vbrmjinWawrC9Ksb11j8u2LJqZssgPeS6Kfh9PnL7JzfmsEXeqY7bxPjU1DTtTsJRBpPozHkpEJ3zZHbraGQE4L",
  "key4": "ouuHXtEHnEco2Tu6HVmMRGVRZbW5xW1yWYAx9TfPrgQks1GBdf4djQJ2TNgD8F4eZMJQPHzq2rA4FSQsBx6dQ89",
  "key5": "45NezWa2kW7HEUjMRqBDggAUWJ8iFsF35ZAouWBVeBwRNH1GttQ1zQiqyXQmdwiAPFEKoJKrLd4XGFDS77V2sXkj",
  "key6": "2ayWM2HpGu2AVhLfbTZEPh6GBf4z4e7XdZVu1skwx5wNuZPh4HXE1x7qhmcGdHTcoFzPq8ZSfY4d2T6RBmPqy8w6",
  "key7": "3Br6v2274jcVp3bFfjob1HXUjnfpWuYFMDchrWfN3Hn9PiBsXPdDUimeomENKPXujZ3mBjENRvrj8FGwC24XdFV5",
  "key8": "KDn2ty7yfMUncno3EWPm6Zz3cB97wLfDaSEBUDBTCFT5S1aGwxjBPSUh4iq2TP6jtqX9MuQ3Y8M3bwUp7YBUKea",
  "key9": "4dRxoPnbdBwDKjhaGZZquH9CacthR9VUKnWbqqA7kSghmNsM52Y9A8TuJy2YWVRGFCERunSuxTou2E1QoMeYpVPG",
  "key10": "2Pjawxh6GNJhQFULMCBSM2E9m4kZZWeC69cbo35PaMCisf5VRLvufAmWRxwp2Z5KYE72LfYPmtRpYJPbSr6vtBBC",
  "key11": "4SGY7ENLTot4notcLVfx3G9g87iMQDvVb3i2khRMZDREnE4SmXcvEs41T4quya43frCwskBentRLjnFz2gLxTdnT",
  "key12": "3YguKe9KbZH3VJDQjasGB2ibjPJ45DGftCmYoY4a3DjHtdkQqQsBr1pEhX9SRZZv1MUv7xGSQq3BMnuMfTXU9qhn",
  "key13": "uwUeotR4qRLUaKrnHKQZGXvwhD2JwPdT3NVWuYqpBQhRfCHoa66zbFmNSTspyWYf8zeMaiXczmNyWHFXwhmDdoC",
  "key14": "2ibPuHWjFfwcDFXAt7F2QueqywL58QNiEdFhjt4iefh1kZbN9sqcTM6D2CDCTNwxXDmNyFtopdaW6JAy5qEhq8u1",
  "key15": "3Bf5cANYYyqXTn2VhsHM9yNGYDJHQfWfm2ieqk95qjbZ7ujdtJNpotLUitidBVDnxVbkLa71a4icMBppDxns1f52",
  "key16": "YEFkaSdwuJs3fnoVqFkqpPrWKiz78yy7w85P43WHoLtWHchD6qSGgLYFukC6U8pA8Z6YVjPT8PDMyfFcoCEdXvi",
  "key17": "5yjGM3krZ1oKcceNPYGCafpoAMCBGoB1YTU9f58KTf1jQDKAsz4NS4xG71uHJKiiazSBNR6CsyMt6HFjmtPAPCL9",
  "key18": "5BjcTUAKmzHkJZVm8tuhiSVuXz6vuxFBfyopyWsSdxEE1uY8J8Fz3mtvETLWbCq6PBHbxyHvbkDV4gcLW9EcqqMv",
  "key19": "4uPNSUj3Fn8kpdnMrLXbJ8zmvTBL8X9wtzpbiSugLvsiwggGWxPz71H3g7zxpCFUe8A7vccRN7CBRT9mHefJZ8gV",
  "key20": "k5zDAiF54mgCbYDEAsgEn6BVuwYW5MMvzHetepvoqYXQNtkXNNUcepVQ2y5ZamdF8vpLD8nNWp7MVeaotNGWqva",
  "key21": "451X3GvBWpC2P5DAFom7DcfnpZinQK8rLng3ypehjbq5pEfbdLBPUbccwwhbBEKEXbKnoWpeS78qs2XJSoRvhQTS",
  "key22": "4Fv3Dpvgp9mcU33hHoN1JT15sb5BEEWAn97JbFsnPKZ3CxC96dDZuS69z7nPxNHTuEobjNFwJu9xb5rDJXCqQT14",
  "key23": "JKmtums1FGYr7T1yu4HYJq5Cg81Yqs9BwFSwKAouUiMsVMchGvxu8k2dHqffrHeJyevFfYXVtdwDgXwinE3p741",
  "key24": "4xBtScNJ73HZSmASmE3dRgwuUyJbeDB5u867W5UHiz6SHaM6c7qWu95F8VeYiV38HZUgfZiSzbY5sPSjvwBhA92X",
  "key25": "3BJdgzsxGKUyDGN8AgkJ3CjWxJJ3hhFQgBCWvBmwZ3ZaQJQdxc6Y3ZhGPtWzuiWydWCeiPbvYsGZznWfCRQHHSkZ",
  "key26": "39SnFKADNQMgLUdhufJxZPMdgEn5iwM4UBXDr3UTy7rimK94WugxQ8ewAYXMNySc9pYftTCY4Whwj8eWYKDozQ8V",
  "key27": "3nz4ySyn664AddZsDATnzycaWbBkZmvxJ5etxRT6rmwxDH87RM4TtxirUJZEziYMgmFPGycXYRnSv7aoy7t9rCWE",
  "key28": "33xx2FgrhN1XusGg1Gm9j6tEpv4sWaJzJDasLRAqyaJWFzsYkzAygGGueJmTEXZShcY5zN91MmfNdNE5MDVXGFGR",
  "key29": "5ajyDTJJZM5nBrwZoqkceEz1PbCiZt8pF6Q13PwZb9ZVqwpnzG1StjbmosNQbRQ13mj97qgGWMhxiaYbjGXM2kBs",
  "key30": "j251gWuPzJaCuzuGAzmTk8sbABuYwDNKmXA24rV9v6iPELAT42EycwtDBp54JhYkBkzT9MSrREz8aCFE6mVuDxa",
  "key31": "2ZdDGgxa7irJnJdHgHPeoFGXaAW2oGfKduwRtwXYm8wsuNcZL9WiCVocQJv3jqax9BKvrGSvUi4LG63ea56Z243C",
  "key32": "gHNJJeFicXzF4o7FctLZ1Bji5Dz4ctBNHX7hAx11fYS5KTcAFouBaJEQ2gxezhDWoAu3hYAZ5PU1p1fv3bE6FHt",
  "key33": "51ajerHTTE8Y82pvrGEcoDpTW6z3M4SMNkxSzTTMYmNu349eEEW2cQ4UgCTGuSK5xPZ2fFX3vN1DegVZbM2N2arW",
  "key34": "3mG4jXA3e96zhAEEdQSsAarmB94QLASftFNPjQAUvGxhghLZXBWj3n8cvbRUYgQTEpsLZbyS5HSYNi7ZdC6bib2A"
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
