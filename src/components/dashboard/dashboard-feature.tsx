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
    "24LjkJCWHGU4nRK2H86vURRtVRzQxDMVQhndAD2ax3dCikrno4tFeASUo4DdNSsM8ZJtLyyee6HHmLgQYkp72MNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLJ3g9Czm8kHviSnkVvWD95xFJQnv2Sf9obGXrnkLjuiEZ51W5u4fVsfRv3QnHDkyhyStjVMjv2nmQEc9TN3tcG",
  "key1": "PgrDuZmrqHvUUNwYu1S2yfiqYcemkmfu7FMzaTzB5YF2BQ8qmCcsoWXad6Vbj5mAFJsVgkBzvpQP7jsCqXM2WYb",
  "key2": "Qee4r1wBz39hCQTrKbACTS6LyyFcu1fyCggvz98QL3NqPHkbQNErtV3LqLTm6FVkcwtmV8tFsYHpgUQ12JoHr9z",
  "key3": "5QsaZNC2THpJQMEhF9kKMYnzdwjHknhVeNwMvBUyencBvgNAKvd2RCvnTmNnLPVSeyaBKERvwB1D7ZGjqfg6LyqK",
  "key4": "4FAFct4qmbXnoqiAKmfr3BPuRoaiKo622wdaC7Fs3WxLBaUkwp1a8bpAwoUr2Zri6kgApBFDc7s2pt1LxAbqEnTy",
  "key5": "3CpQdDiSJVZCitTFop16JLmrBWpB5sgH8dZMjMUEHE9pHM63BWBsX7kNnmPUc6HFoVz9yenFug3oqqx3REXyoUp8",
  "key6": "2rurEta1MVWajHaYhgkB191XipF4bJWVWLDUr1A7MPfyggakTsZ5hKj387hE7fMHrDaKWb1s6NhKT4zNTCYUfjT",
  "key7": "3WUoL9o8zR9177ZGhdD2o58HnMdjDRBJDMPmdZzdETE1ZgyXPJz6FGFViMKBrQmwE4CfmcqGHwKxhiHC8y4446hG",
  "key8": "25UiTXpeoThfT9eSMKJZ5dSAGo1DeoV8BzMMupvDrzd43sobNaR9afNWXKCWbrEk2rpCqeZvuQzDC9rUUrKg8Ypj",
  "key9": "evJ7BGt8ur4rjaFiqnkxU2HvXkCdKtT3KshrcZCD4j9bAy8cZomPETS4B1xyyRhKdPhCPCtHBidVHPbZDEeLHtF",
  "key10": "4KApJioa7GhGTrLrPrn9hztDWzm2aD7dWuFq1HJEWf7ecy68DJ1UmwkGDznt8dzkxV6tXzAVQaLaR8jtHr5Bmgv",
  "key11": "3dpJXjnR5BcFXTnBi62wcsFGtaJ1D8HLx1fehMieJsGPgreumXLYrBJ2mXaop47STCMiKjZaubTEscdPUta2MLRR",
  "key12": "4psDKMVLGQ1eweNg14ExAaCGGiBeJuP8yA9hr6fXuZ5ErA6c5Dda5u4c9CzpNxoLwRrN9bpT9JCXo9c61C2Tgsm9",
  "key13": "dampsvCb4ADVNjaNxsZKvvrSADxnCY3N8gv98W3fb5ssHJx5toAYw2dsVuiobiQPmUfAAVMDdTi5niZSgdoZPaq",
  "key14": "3rckngupps27ATM9LNLjNMMttnCVeA4bNFFmoYLZtbb1jBP9vr9k98DJdz2uiWF9QFvYiZHG5v7ffuz12dDXZoys",
  "key15": "2UxJwS9so2SHLB3Wv4B9dGhqJb5VzvPzAgeS2TDF6jDkBoAoinKYg9Vnth3mhKiBzHD9mEDcVtXBeV2QsgGaKrYJ",
  "key16": "2Z4ZR9aWfSBp7ZfAAXqRNPFxq8C635TTkCXCxZnJGV9gepFxRx7HNsYunkwt1TnfpSP7WX1VLpG5hsccXNZBTJKS",
  "key17": "4sCuh7xCpBgGuReVHQtHZtr1f63xfKukLrsBmWMotDohYQpom8HCEW5zovFBTcFxLsrBERgYVbZoGsNV2GXTvu22",
  "key18": "3Fqqu48xS2P61q4gBErnM53buMa4D92jrgXuCkLo3J82ioSnBVQ5ZgzmozJJT4UHB3QhmHbVJMrX1hC2aDFZVxHD",
  "key19": "4nDisfzWgDMeYVznG2toTehfh5LRscNKtnnhBZWBLwJwC6os7rvok2KW3zL9ensHwrqvdB85dKDuZ8aAm67k6QSv",
  "key20": "3jk4ZB1fvPDF9Ge4GCcu8yN9QA3RNFGLFAhDNnQX7AqikYa9vAiVTqAWnn8kYFsaL9PuNrGpcWz1ewTXFeRyMgAx",
  "key21": "4ULRLCQdjeYRkWU7nLGz3PhBXoraCLC6WuiGsHphEqMVnepnn7y6CSfAXF6ELG2cSk7X8RjY22bPskZ9aaYALhjb",
  "key22": "5hbonVL251o2gbSWpC8TKvTUaDZ7c8YsuCT2bXyRjc1wWtKWqJBQFnGPg3WHKQZiSLFdFJZF5Ysk82SKktFEfeYF",
  "key23": "5CnTfiNDen9G8kvhXibcZEmRXVjgpwFm5qN15yefPV3tYoyrjuxSBS83vpVvxvSXUFoGm5Ec3YCMwzUF16zK5Jso",
  "key24": "52Pk35QiY2FcceqpkChxoyKxB3cSvVugor6ouk1L2wVZcZ9NZdUL7RUcLK6fjML5LEbTEgP6G7foRALGRvLFndHP",
  "key25": "3cXPveHAs6sLpyAYQKfRM1yovsUZgyqiV4ifu9tQNXAgk8dYnenuUt8QmjiwaYWx7nrpAA3UgVSnN89pNsQjaYQT",
  "key26": "3YVLEoqgmXgpamSNi8sdHudaq2t5Ms7DJHuhb9SiS3HGirK4bMNU1wtvuD1MmLu4w7ipEQgTUWRwqbM4TiqYpj8E",
  "key27": "3t2DfP4nPoKqFwBwXobrXizzSfhFSib4oMQ9PEYAbfgAR2yaDt1AJ1ehsKQKthETV8SbES37X9jrs9MXrEi1yYqu",
  "key28": "4RxjtFrCxag1Kryb8MApPqVuN7C1PvNSDwgqu7tveCggoxK3B2Jdpk5vxm9knxyicxWhTvQ6BUcfUyiUi7uubH1o",
  "key29": "pYvLW8QEznFN5Jf8wM5TU5eyy2V81jdLJZ8EMygcrzLpR89NPfzXwccceMY6wiLzycd8gvist2VMRZ95b24jxK5",
  "key30": "PyPaQupCGdfKsvg4YfoGfwK2rTve4BQxhFHPxzx9kyqgKx6zuvtr1ZDXY1W2qZv4d75wPxWhS8yPXxVJKb5NkPk",
  "key31": "4T5eLNihRZBPqSFEiM5qgmxJBGwoatTgtNy9cw1Hs4Sn2Pg2oChTuB2ULnJLCNfEDQZReX3Cge96VTjXwB1KekEJ",
  "key32": "4Fta9PrYVfHVXi1ug2YVgrrrPt9eGwXukiGjp6Y9JZLpwsEeJ5zUvmGeLtGC1sErn7J6z5vFf7zDKjwXKKim3UeF",
  "key33": "gin85EdW7R953DsMuKVHAkXD6zo8DGSWHqAXSyx6Kp9meSCFVVXi2g7qXT4Kn4TkK8KruQVsTEdaP21SGajPuqn",
  "key34": "2wMvw7CUp9koxcHpLW8GSCPeHkz7FWb6aJusuounR9UiUTm86NEB4i9ahK6iHeoDNx9iVg1UYXdwX7kfP3uyeqp5",
  "key35": "43DzjgPoKkfjHRL5PizvZz7ma1kk6V4HeVijt6ShzBkGiGqu6JJpyNe5JbuDttdwHzJymB6gT4vMJNvjGvoiEvAX",
  "key36": "3ptewJtTaxBa8zfZm3kebEijdzboTRyUzS4cUBgkZo9pu8GnWEk6JqcTKtqtZ7stnABYgVfX6PpnWY8sSUYfTtbB",
  "key37": "Vr8Q4oznj3jp7Lr8fiVyZYKAkpkk5eCjk27WysDpz219iVcXta19qyjCLUN9bsjhAMT9UGN7cK81MU3oYrfKp5T",
  "key38": "4qgYfXwiGWwHdf7DJg9xBWcBsBBLaDrZGcCmX2ax9rmgYZdZhrajYKkK3iz4Mjtup6MWYwVvCf8WZKhH96xnMivN",
  "key39": "439ofTQ3Z9r69pU5ZHr3XXLDAetjQmrfdF7vCB4YKjAx71E251iLhFhgW1DqKpAzdYMbNMrZAvBmouKGzMHsuGaF",
  "key40": "FUr91wn5624RuSKbYyvfjgVovD8YueGoyi4eVtWhSArfHdGqNYjKawniDS6S7abwZeYMgkanzrm89Bdx4x9dY4s"
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
