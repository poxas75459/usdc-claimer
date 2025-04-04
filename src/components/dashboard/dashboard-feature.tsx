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
    "62BCtFvJjhJyTJ4XmFJzfYUv95gQquArjLuTfw3DxzoVJqgX5GyQCxmhEUPs5sV566RmZxRtJ9a26KuAZR6X3bef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7htB1yKDdc3QTkzxasfDUH1S8AKLmocWrGrG3SrkqPgmWJbuGWo3VejuGn6HHz4PZsZXRfUKXnetWoPDAn3GeM8",
  "key1": "31LrW6Zg7KU51HLpnkgLsaaLp5iBypY1inwoCpJabsvszLzo7mv1VEvaYipY8mnLssHPErhMzta1j9Sd1kAPhXrU",
  "key2": "3Sma8q2Gz1vgBVdnVgE4rx13Fu52Chjng3X442by5kJo5ekrye1zTdU7teSqcJBH8TbNgMD9T52NoyU6R4Qw8Lrw",
  "key3": "5VPPBkrCqaThAwmSEsbaEhj9Sw5ZsoNetnPcoXrYP7V3qJZWnjsgCA35qrggg5pA2rLSxK26K37Ym9ZCLRsYJsTd",
  "key4": "KvGxCtHp1terGyuSHt9r78kA2siHUa6bnmRU9ytDnHK7t9MmRzZhvd6VsrX8jpFZoTwT7J2hg5K4i9WgxgPvv52",
  "key5": "64jWQtoEQD9jfxrxVFCiJ6vPfTZHWRdbeAy1aU9Sg8jVknSst8WtPYgwMTz2gCyMypirgYtn89urQzCVZiksivmr",
  "key6": "5RhWSzseS1mXU8Ci9g3MgnbVZFroVx6SudD6rFachvXgZiYb1ewii7kNoTxTYyVJQovWRiGZ3keMAa89kx8oNo6M",
  "key7": "3C9fkhLbacU1eZBUk6fiRyDE3ae8BR61oFPvcYjMVAPB9csGGTFSzbFfW5j6hsNhPqMKixeq4sMphEA5pPtEvine",
  "key8": "5XoVTB6WvWDpv8RJgs5p4TxSciLbQUxLrjXwvBYguJuPY5AGDij39wibXpUUWdpYb1nkrkgDu3CfzxQCfmHjFkhc",
  "key9": "oVZ9e8ng3r9KQ9zCLMSYkcPrGNrjYb1xnK6t76bJufNbLZbUVpJyAyPXfs5KvnnyYEBeCqfpKTT5QP4p5imPFdr",
  "key10": "3s5yLe6SKmNg4EagqF432SyodHusNrDhr8at74S9Xnzaz6zdMJw8RJuaSZzPfreegRQ6EF4YExqGNW6kv3Riq5i2",
  "key11": "3N7RWRd3sZBKhiCcvezc3sRdPkqvpgbCRtJg6PhvyxvEbHXYtj75VyPkgbUUj8PMZhNugFKiJgoADMvzVKrYHbDg",
  "key12": "27DoViWLRHmy2dK8LWdYyu3hhU5fhtMBzw35Q1mehWYnkAKAMD7tWZMJCH8fPso2saRWUTF4Bn54yUUXUUCod5N6",
  "key13": "5v8obFqzd8jCDHFvmoiFAbg1CDtYAByPHf8aKbpatgLgFGWpmWxk3zXyzoPc3kNqEr3HbV6chUYTzfsQcrxSm4X2",
  "key14": "2AP6BQKSeoj6H7FY6yUmfNJfcdQqLE9zbaUt9mVtqrDPQyhUvWy4VJWVVYUS5pkRLJxWNJiSQri3NCXNcTZYQG2i",
  "key15": "ZYG6JoXjjXqjjB7F18jGDuj5msghPaZgLTxWa2EZ7AxJTRMc1XdrEzJD986KBUKwtmJytvX7CqqRkrSbuRVFcma",
  "key16": "3rCXC1a1sePM3nb3fRpXAzzvTSERkT6QzjMeAkGbnMiscYWNqCdCnpeeFnnB6zV4Xo23CziEP7gjm7gN63EBHNVW",
  "key17": "3iduGn6tq92doQ6abv85xxHxxiuZim38qwjX52Qn6St6Zaj45gUc9qibPeH2jsMmUARxsM32MPTgCu86zbVK5vtG",
  "key18": "3qf9RSGKhc3v8V6W7CTxyx1RjV34pvXaocuBauWhFLUtst3j49M4Q8N7kZ62FhVdVbR4YLdMaUa69bzYXmkQvE5Y",
  "key19": "GQDESFY8EyWKCYyrew5tXUJ6aAikmExW58o1AzSgJ7AnyycY7aER4RXWq8FACgx6JEmxrHsLBGiVQA2gfuEvGQi",
  "key20": "1175adcpfEHKJrccG5ojyVcRDUtbSEAUpbHfY5tTmxhQF9BdkP1oYBw1wVf7W1G57Q9tt98ZqXxLssyJbZoJZdv",
  "key21": "2m5zVqMw2zXpazLb7fWU384s9fMb329BZtYq25NbbwWrxsgaccaZgssddBuTh7b2DwFjMkN3m6s624Spcv2Lzjqy",
  "key22": "2TPzvrJjDh1xS4SWJZf4Dn3XZpDHUk5dELGB7zsHKFu42WAFFP5wtEcp7J4HaYtfSBxJfznjpRZQdC4pPLr8ig3E",
  "key23": "4Yk6mr5m7emVB45h1WLk8Y4mxuTMaF6Lgb69Qs8MarkumJum16s2ip8DkJPH1wJ3Hx6QsRD9WJrjmnwGRndAv4py",
  "key24": "5yxkvoZ1WFtaeD9ARHDURyHDiQiVdUoQ8uJmGPc3UVAAtomHsWQnRVbY7S9yjYKcckkJHxX1DMtdiRebnkSShapA",
  "key25": "3WGyDqdixxJph2uqXbujtkVJaXNo2bwH2mHjzzR6VJbbQqPVteuA3unzXMnC5KhtVRSsKLAccvxvc7M5Bhb6KgPH",
  "key26": "AMVqDNpHfMfw5scwWLYVdnUh3ggCgnzWtLhrsFu436oxTMY2t1SfZjAjMLsDdCNbr62yrBDiMM2LSzqjK6mLfQw",
  "key27": "3D7KLAicKXU5EJ69TXiQN97oqryAq1zePkb5mFzfQWuF1h4GPG6yPFkaDJjuzARQAHt1EBGriECCck1HXjwwn6vm",
  "key28": "vLeNQqYCVEThEMVmvmgvQE9r71U7mq1LEmJkzMqhQj2WvaSYtLfVS3o4NDiupUoy9uiWTHgm8gVQfpGDtt18mNT",
  "key29": "5Esu1yoEyGPJLYErcCLncvTaN8Z5xMntZqf5CiPuGD36K5pVEv6ZAj2oehBkps7mYdi8X17pRQACq5jTbkMHAu2f",
  "key30": "29BxtH6BbeqWKzfyNpLx8wjjp51CyfQj3YLzWkvczmuZQLXUAYMf5c8uR5gmxUBF2zi3a7A5SN8VbHcjiTe7V4b8",
  "key31": "2qWcnTHa519CbTWbfBfZeotC2KT51L6h1W59z2T5XsAQ76vyM47dtjX5QKvHVtju5VhPZD2WF8roPERXUyAzvm8",
  "key32": "4h6z9jsnuvEn6MW9XQBvBbPFhH5x4zawAfNxvZrvMAH2kyzCEbQTohKT9cR9FStJQqhB78LnqNRPiHtXvydzPaQo",
  "key33": "3FHmWVtSbyCZRsWzBFjhJkdhDnX4rovua7as4wJurJsR1WZYW3H9tRmfxaQyotWVse1J5XXx6E8wgb5zfiiW5KzT",
  "key34": "3bzQYF7A5Fs4QfvJhYLjwRRnN1GLFRfWtTbiHgTzq5HfNAi1A2hfLY2bPTB6FPMWBjLgwMKPwoQrVyxAMAfwFy2z",
  "key35": "5MDGr4ANvZRnQZu7uRDnJe4uRZvbRLw1185o49ZvWsoen5HbU7rJqckoos9UPuU62odZfq5gzYCtXao69q5rkJyw",
  "key36": "4C3mc5kurGTH7grR7YML4NzWdqjQ6rVfsc5BEi9wUpkhTFrJKVV2k99a6gLnauD88VdKzZpBFD54t3h6H8pENiK3",
  "key37": "4gGb4waiyLripmUwkZkaNi9GfPyQwoMJZiCPk1MVnQniWSggTWdCRHTCPTBCUAQtyur976FwReVRfjWXsWnhx2zo",
  "key38": "HmZ2XMUotNy4bSiQQAHbuQmpKpAndiYup6GKXYpWHUyEiDiTXfa5wo6swbKtNczYtoXq1zNyzeMGBaUEkn9Juiv",
  "key39": "weAk1qAuq5ZYmCNQteKvQcrE3UyPjiJUrUbpksNn3Cca2WvXnVcPVeNMhy3M2un3zJCbww6cLDjziLaE1UGHpXY",
  "key40": "2GRcP8WJRvxRUx476bzXXYJ9bRucJv25cGdLebBqpoNLy4AMzQuj1BF86JW18RQbVtjPsTH7ZMdEbSZMCPR1stew",
  "key41": "5dAPEXZ791SRgV5ZtHa7pPUutL51wbwQietHVF3dd2vpAGJjguGa8EczrkkXv4i4g6Torx12NBWcMitb8mUg3UvB",
  "key42": "2usAsvr2Fnn3HyDZ2JSyDKDe8Ts7jaAU3xSrMRNsPcmr6sSMUwMLJbKYPqaJrQEr32KoNzT3k1BbQsvWJFDrPshZ",
  "key43": "55PPEkJgiQdB4AfT2yYT9ZbzumjgZDZTgZGfSijsZo71MwCTHzRcHWCjDKmAmgiXf8UFqzfQUTvEia5ZXpASCnha",
  "key44": "39j7JgYYXnjrQPoxXGwMSBPCiungYGcxqoXdKfidDuALhgunepGcD147pSttAoi2hW13V27oWcKkvM726twmfQrM",
  "key45": "2icknUH51LM4KFEYLLHEVbR5gCwieJbDGVnNMSSFk56Gg3PwN5ZpgD5NnTqab9dAzJ7GKeYQ8SgJLcHrGon97Uar",
  "key46": "4GyTxCdiJ1ZuAXbMrtaTQftus9SW4KpYoznhC2VbS1xSzE9afUmL3dVGkmF5HiAXa7pneevk6RgLTVXA2ptYFiLK",
  "key47": "5ku52aPUjmT1ui3UT9ovHJqPCsd12ZN6U6vyNkLsGStCPzLt5qZPFCRn34GZYY65QDeMTEfUQbd2RHGMc89KFkMN",
  "key48": "5JUkKnsUEMyxkozt9PzpSVp4iogfsWsMPrEFLe3FXA7n2iC9Uh2cm6Jt7YS89pMru3bvPM8hJ6TEi8S1FCmZ8DTm",
  "key49": "4XJamP4TZvvGdW7nfDqeLMwpGVssoP47wPnM9f9FidrdPbPAgkxwz4tct6APpgjqV5KjHt2jsqbFyUALgW1yHNMw"
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
