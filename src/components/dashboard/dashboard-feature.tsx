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
    "4TpCS2iXH6rR2JV4ukhhyHjsKeDRctQY7hvPof2YsxdUmby7kZaho5vEYpsLnDPMVgjoyun8VAAwgvVUCEGZxxsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46v4r8MKfuUh5JeFm1HjDftdAwF4kzbsy2BKTE1Din9a2aQyRPJhYjd21kTPgw5bfUCAHwXnLFMkLhN5FcPGtkLN",
  "key1": "2Fwcbkbaa9aFvmL3mXLYYPrFtf2hw4JQwYMKFr2YbyFwuPVME8WCVAPwmsYAMCGdJLSxo5UqUfKfX5jXRBrmv1Lq",
  "key2": "4GXhySttyq3937Sp2i1idmqsETEkcMVU4wwSgUW6RHpNCwe3wkbmi2xnmxBhCdR7xFS19xt76k2mTfnTRFfVCGcx",
  "key3": "5phzA77D4T3Y6BHPS7HqEi4fJ8NCNTiqFwviH5pZgbAAJWap1myGt9B2uxzSthAhcVq9xZx8o6N6FopVQ22FwAZA",
  "key4": "2AjSTFhMzBeFwhVodGZBQfSiio8jzP7Nza7m7fz9Xp7nLn8EcaQfVDtP9d9yg4nm51Mf227sAtnsQHgeufdzkzZw",
  "key5": "5pAeiMP5ZydTarvgscgKtEo6d11AJBeTxhjn9BRZa8s4pDkbsM5a8oWdkPgjonSJdDa3LUx9uMFkrCteo4prAiMB",
  "key6": "3uspM3Hessi8ZccaYMchvW5nXMAeukosL3AmgURz8grtB7vzzMLnJU75bsGgR74Cpat5jsvpaCVzAzct8ccYrp58",
  "key7": "3quraYV4XuiEmwjjGfgpfCrYR1x3AJpnveZxw12JP99Pm8ra8sBWJJ98EPDze28Qji6UbUWtLNtBPRRNNn9phdP3",
  "key8": "vPAU7Mi1kFVjhCP12CRXx8URbcZBJnCiqTFoRRktjd1ACNxD7HVuTKCAE8QBPT7f2gfECZtqMmzCjyRZbz8zy13",
  "key9": "hvLteJiEqTjsccv7HJ9QY4yZLkp1kJFrCJG41EtyjnmqeF6k6FH7APJyi27NPdjxF28xagYd396BPMWTgWxDJRC",
  "key10": "5iJPUMtKq1F9D5HiecbTp7fEF7h6krfk56LgXbn1zdKM2WeEYKPR47E7YHWyCJPPLyJHXuKe2g3NbpUo7UC27HxA",
  "key11": "3XWX7m8q8v7Kw5nJfHHNCsb1wiV662dEuWyTH64JoYvQxzLWXgVYGweKvnUqRu1LfZc4MLMUb6tbr2w7AJBEWvM1",
  "key12": "2vDnn5jVw8vmF8z1wPjjwRPjVuV73ZasnXdANjM7PyCp6ZL4DmBEucCchX8UUU1eAHAThFn1gMWJ8mHPts32b3fh",
  "key13": "3tPeLCP9VdQvuinsxbZMsUBHWi1CMGRWJ4XUzGSz6Xwp4Ei4CfK3LYYsBYxtkY8P1CVdMGKfFLy7a33Jqekz7X2s",
  "key14": "2x8Zqi1C4gm4NfvgeaBGEXcNDWGrtNm9qB3u2f9ML82swAFQjmbCyjuqcgRjf9yS9hCiqmKvEYtnAMZpoJyY788R",
  "key15": "2RFEqdiMEKQfu73jbsBykFBDvEyAPb18anDKQ2CVMosmfhMH6cB2ty672y6T5CeGJCCSTmovWFziyJaiZ6jPizau",
  "key16": "5Xfh8rpEdJzihvDBzsceiErGVrUFJjLUHAUDsyvTdUiwWEKjMtbVmGLj2KZY6rKDPyBY7xS7S7QCutvZkSQtCTBJ",
  "key17": "3g5c3rJJm36hY76qzAsp3V1SYGWaqvGMarWNnRSr19rKHYSjBsR8b3ERsLDM6xqU75hnBohGXzScTXbeuystuZFy",
  "key18": "5LnqvoAX7WWWYqsmjqCrrDm3BCtfPGd6hx1XGA1RcyUHwvHg4fyL7KGA9MLZ3AnCCA7rHveUkzPzhkqXFSEnjrgi",
  "key19": "4UtbbAK6RnGfLPDv51X8BaqQd3Fq6ne52mYRfEtxpsLdJPmqCpvVmFehaUKNjnxCEKbwjd5fh6gCZNRp9ku6LbeP",
  "key20": "5HqUbnSUP1zdBQk54KQamAu2a8EHJFVajrXVyVinPKPZPfRZWYohR9FBy9cS4eZCayUw87YuwgotPx3kfcG3mxmf",
  "key21": "SzRiToWCpFUwnYjLpRhSraC3R6URCF4aZrrMsGW74xPi4caJ5CQsVrRUhgeav1ZsmTYnqivWVeXz4YP2MLKKs2e",
  "key22": "3Kc1msRyW3y46qEDUF651YTPfadgHwjEbGfG6Wu8KY6wByXZanF8xuHsiCdKXA92tq3gGj2ZwH666tfphDQLfkBs",
  "key23": "47YFDprH5uubGyBSYf4vjJFbQjfB43zE4QKnW8nXbJSfTHKHb7cmMLgorQ8E3LfvjGp5pULcmVxvtqe3EZxkM4J3",
  "key24": "2nYmWN2nzymeSHZ3i3CgUB6CPcPQyy6MHUT1MprbNkzM3VF8eYHK3ZvECEU81SsbRibzCDB48wFyPgPEAiv6kbjE",
  "key25": "4dgbEuCCjmCWDABaWrVRmE3BHVsHTAqk9552h2uPDv9kjrr2xSsZpXfdQJcZzrx91bXjhsYSMFfSsyGL2k4iK1a2",
  "key26": "4BGv52uFRXhyVvUkj5Fx5oLfzoZtvHZn2qU8cLySNMSMYJSwjp3LDyfykCe793gW8imMSSZSpJt9B4nbaRCf63Na",
  "key27": "21KY9vc4L62H6P1ZCrnUHU9gXEVdHYYszNrKFdgmVcDEAZGqDtjLyXq13aHoajtJxwF9RRpuyKXCB4CaEoTZoP2X",
  "key28": "2Q9fMz6vfNVWgT3wcwhhsa5mFguduv22PpgZWkWiCRmmch9yEH2gE7Ufg1hueyqvjEnWtWZwNkNk5dDnsLzs3to7",
  "key29": "3fS6vU8B2qHyorTUGNAy6pwCtyy36WHBjDziKoLUF3YRXHftGmZ179YFvYiMwCbHJbaQ9CK22FRhQwJC1mYjAaMz",
  "key30": "5KJ1ghpkWZEA8JYJxWWB4XVgpXWiXyJBYSQdnNBkM38Bte1m34jNQYcKc2sFK8iQJN5RGLHBwtJPkezUATqp3d2p",
  "key31": "2eWvWsdDHMjPc7fDSet7svzX8zE7v6zVm7bSkoT9kYQuwjJLu3WDF31aispPPtykqLU3zfKNkHvYfxurFJnuT7GQ",
  "key32": "5qLU95WTmgkU3ExpDCo9qcd5tsoyY31b2FncSZEZEUfPc58yJjJSTZNTJVgfRLEDiJXtqgk1kyJd7cRhuFnSeFnM",
  "key33": "2gaF7fN86hRF6jMSBvcHH7wMJUjidn4E4FEaJSYcwtHxuLJdbZBDMueYohvyqFNp71wSnFmXJrDMe8JRnLKGqSjt",
  "key34": "3n4yPuvwdADpmgcsyAW1iTc7R3mM2Xeik3X3HHuDpbgsCutu9ZWjjZDJVU2Vca96cjhunM2KYbf8M9NtGGF2chmE",
  "key35": "3G7TisYSfrcwC2YsH5qmsTyCSeSbpryia5Pgs8jDTiwvTWApzLpsNdBQKjs4W5zLMFoB6DuxNMoy8XX4fNKAJG1G",
  "key36": "4jHyy5ReZdqzg3cCzazeC2wMfiS13Le6xQQNsrUwh2gbmqbNmP5MvGTieDCbs2cKASE47x8NKcj79d52PQz2AiDo",
  "key37": "4FYxtPpLmtAbSPVJmMokbfgM6jxEvH4Aed4QgvivnGxhdEDSDHkGyuNFrdRrsAL1KJ7GtUNWGgd7wayMuNVkduNZ",
  "key38": "448EKw17h4weG6kbggsCXdAE6xBdf9GHgx1n4ewXqvvDreR6341KoRLp4eUx5k68wGuNqRNVsm33EwLpQV3J816H",
  "key39": "4SfqNxKy3843zF1yhjZkyERYrF753uSnNBFBzrddAjHYgYmzgBdvEuzvibgTHVEe96umaP3sN1pCSirRt89is8C4",
  "key40": "2ju3osDcBQNW3xY8VwbwrionNZUKEaZMdWN9ZVfS7x2gxFhYzC1degTMhh7KKGepN2qd6NPH6EBVuw5Y2JcFVuXv",
  "key41": "3EKff1vrEz9d8zPTF7gJiCjKmnSr5v3AugRtgJB1nqdQbxQhYEBYfE1uuAfTLFm4mHve1jNHYCSnQaiz2nsk8Qdt",
  "key42": "2dp9rVjfXZxwmD6vVgnePweswSeLc7636uoHuopvKUoaTY4FwLf5H1g8PzEJXDicu3YivGYeoVH1WPXj2d3Dyfki",
  "key43": "5FMvcEm4jobQAEffh5wsoQjF6b4FBeqZLTbCct6TQB5WpqxzV3nM2i5FtQKSQmbzpsev1w6tKYNmgZNFQSyBa3xU",
  "key44": "5QBFP6zuLdUuXVAfNjy54PTLhSDpnMhTxWR4bZPA74mcZZumYoTajRXjJCt5REzfCVZAbdWwiamHMYyD5Y67H8r1",
  "key45": "UHcMwV9nztKfZCzDgGdjfN3bzFVCK8KwroF3Kx8mpHVAc8yqNLHwTEm9LNAKsCLJ9odVuEQRTtgyAKYRJYGDnLW",
  "key46": "3T6zyeUecUA6PhEcSF1u57YYiurM3rt66hRnujcTMqWFs6p7vimzZunYSUK3qEvwBvUhzNVHk1Pi9stp6BRTbNn",
  "key47": "5cZ9adL89bLvm3hQkZ2fRTf2FNqJCo8UFRs2ZYgUpmv2hCdpngk4JzWHoxqREdWYGfmcD518cS3v8ayeoF577G4A"
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
