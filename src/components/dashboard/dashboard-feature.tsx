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
    "5CFQdbZUUyLKY6ife5XN69BPSvo7pX9hXaPwDRzNBM5Bg4ELxbyuXf5TK5HqkqQqnQCuc9fS8GcozMMsLst13rEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxsMcGtyJAzSH98u2zgv7esJ3A2BrDsw72q2vY7Db4FRH3Np7YcEdVBy2CfWdr9rDeaZYB6z2k78SrLZQ1eMxnb",
  "key1": "4jKs3aRFZz6NLrMg7nfBSz1nFBWDLdtzQquN1e1piMmwEB9uFsrsW1CsMWtf6XrHxH8KnwyUH6Ks6KvQiZNDamR6",
  "key2": "PZfqiX4C4oipALwGgGZxa2e9qGtT7hYroFHpx1MpHEja7qJ8MEf49urYi1vZtcRHxm1tvx4b4Ldt2e3gbZAdaKk",
  "key3": "5TSezo9hPgtmoQqRXGehWPth9Ny9BurSgDE3gzTgUuRymqhdmJ2gcyXg5TgjG5LpAzYT3jMB65La3WWXeXBjeXyy",
  "key4": "4mAjh3jpwjReZUMHf8fXNhvrKWWYV23Zz51r5ayauUi8Fb7WKodSPrja8kRAMthkfdGWvz6ETQkMnbd68ggzpHQ6",
  "key5": "ScdM33s4oGP8XKFMVrG2caDtCwB6G8C66Sx8aUrvfeib1WiouuT89W4XBDp8UyZMYwRfGYXjWw3DAZhGAUBKyh1",
  "key6": "3qYxj6HQrmhze5oET2DYd7XtH1oijbqJrPPwd49cQTB6yMYTmiBT8ksTYLhaWDytWr2dJZfLpEmLVyd8dGd2ykjg",
  "key7": "5w81CQBt8QN5PJwkoB1yfgvUkruSXfFWE6PJH68fLzPY2NKFHjn9fb2GuE3gMjgQE4e8gFM5zLeFTEyXVEPXi6Ew",
  "key8": "23fSz7HQmEK6SfcM2fFpjSexvkgqSz7qxZA46HdjDHHs8E6CkVu22RpvesgJYxSWS5P58XF5WnazQfKmuAg4hxW2",
  "key9": "5njPuz8LNTyTPmYCo5XB3iEUHj53n9sSMSEFczG5qgZwW44QxshyoVcwEWbbiXx7DwqDQEitv2heD8qn58S4tupp",
  "key10": "2BKAjg79NjN3FdHqgdiz6X6iiPMRdY9gmknH47fZgMeqBQMEaRzG1oBcZbnrNqhuLG7ov1DcrHUgdeKj5H214T6m",
  "key11": "RBD3m4SVMgMLPTaSbf8gUYL6HWe3om54nSMoKYJ745zBHxeHJqaxErY34QkoM9szR1hRfuLD5DBffoo2i1HVxTY",
  "key12": "D1cMkJUXt3s7z8kyXEYeYCduNZp7JBjUGGBhnWYqS76Cs1jZtRKQT1Rv1CYb6LiveC1A2NRSnvVp1xqBTBufx38",
  "key13": "548i51wuf3shFrCuQxNkGE8bcbMVqjZEpYeFJPamAFSfPRUHXwjoSC2gehqfnVUWv9JuzY1HAWcUFXRXRjyG3Lqk",
  "key14": "zw3dyB9ZiojgRGHCQzDhfdU4MoqK8nAxaZxmSysKRTvKVvxg2BjCcUJpQmk6ZqDqywfNfgHTN6GbHG1kbGsFsEA",
  "key15": "5UQK5ecuw5PLmdfX3ydJMKgmWCTet4GiaAVu5uRyuEC5dHY2kZdZSsU5mEJD4nKnboXowzUy5hJyFA5rZBp1u8cU",
  "key16": "YKEqefrKCSnnkmouQimG657ctq6tjQZsUNTXJYqZAZSkKhG98vjHpCGzUWbjG6euwqwMXrt81pvT2EoUpRfu7zr",
  "key17": "3j2JeS4DbFstCWpDD31W4MZH4o3h83xAT1dg9jQt3sdDSRGTead2K2bwQoy8bqbnmHA3bchURuyc81xVUTUrZ7sU",
  "key18": "21LiX6kDMUAFQq8ekif8DymjWb8mrHtG1EwHuEPhQ1C21MTDV57iKxBwarEwSvHwRw4qG9skDkNwYHJJ7X52pzmf",
  "key19": "5KPRLdLQm2BbVHHFYJguhvmEZoL6mUePe43vzR1FHQVeBfkC1c76xfB67kDFGgMPEyUBRAYfTD4Zm1TZCReERdfF",
  "key20": "4tALwwKR1NGe4EwwHGPhGF7GioGrSJKju6qYM7x7ZK91e6Zw5u4unyaVYYzaDJiGaimh413GydY5vHuU4qvpUmiR",
  "key21": "5kBxg3mcu2deop7y1dt6NvhxvoZi4YqBvhKK8om5yFpGZ6NAKK9fXsdP4xi6zD2m7rVR8NSLHk8wUSpvrfRqn6nz",
  "key22": "25ymjmDxAvyCy5fUyCShjDjoArzcANkMexyJDdiRQytMrqzUsWofyuhayQyvMseNgShUS3gdxHHwDvGXD1wLjgv8",
  "key23": "4TfWgkC4HRiTHnV5hbu7ScePAuuxbgU6L4wWefAJyWpXVWAWByGdVreYGhqHcDDWagy1E8D2Xs1h5vSV2nDaTEPK",
  "key24": "5CRf98KEFWkXFYt1Ew8eEGcgwGoAyjyAx4t3Brhmz9fZ9sDymxjkaXtcFJsVqxjHfqgM6EuurJ4vB5NmGzQ7rhmz",
  "key25": "Yhk2RVm3oGbWRpmM5WctDbsFQt1VReegq83n8AHzYzKYhjkVutxqbfHG2iSJf5S5cwyCZ4sirUeWJxzDndA3Hv4",
  "key26": "5KCzoewmRbe5dRW7bmxHfj58A5KGWT5TgWmgQpRTepgAhcFwhUfbEusJ8TMsB8rRqtgc4V8fk9AprcPzJBdPbyvt",
  "key27": "4wrrKYEQA1T4KYWvqK1ffsvsPyD977ePYKeQesiVMdbkJZyvTZhXCmNRfxRWVpCGUgHRW4UQqFBkGt1ptJdZxWfE",
  "key28": "4xRHdnW56Xedy24GbP81f4h1zovkbDE2ZLqBW7Jm9uDVsPPRnYKqdSxmCoHEka9VPayagH2pyiaRuxVhxwz2vLmk",
  "key29": "5DR3aQjf9q1Bu7hLQA5DZfADS7uPAvoLtfcGbuxZSQHsvyp6MuAxViT5Dc9rtKH4QuESae8sJ3zcerXiXcgcvNMB",
  "key30": "5Q9rSqabxe73vwAbYtdm6UqmbLX5U89oitxrqa1eFJjEUeTc5nvhUVFRb2HY38kXqBcC7t4zaskt1w3qt5ToyMP4",
  "key31": "4mrUw91fabp8UnpKVhiPhjnAzP19Qo4ZxAyU1rDekPEKTrygkeZtvqB94jfqMinrUrhWTEJrCgLdtCNbZJC6qRHf",
  "key32": "Vo884hGBkCaPiowXrwpEHvGgxjkPUE4kCLEeGVZSLUNYHZ3hPBLBDXTnjpxhhdE4nYANKHfv9AfDEzVnZ6C6jhD",
  "key33": "3AFsG3tZagLEGpzSs89UEqT1hdkQrUKGdF6ckw1xpgovip3bRAGXBh1qLvFkMpsTvRVnReh46Y3dTgnk2qx3nbdM",
  "key34": "4MSXFPW9y9aXptXezqnQqCs4u29UKidQisFzSneRs8DrGchou83tuxfwM9o5tTcfsUU9UhNha459cHDwx1NF4uyQ",
  "key35": "5w6UcoYTYvNUfpDAx6z9RhzgoEqqjhstkEEaSTJpyrBeatNrb7WksMnnDnGBLjY3ZsTBWbArDuBSm3X81BoLrQpS",
  "key36": "51NFdos6qb9ijyWz5dhs9tQjwADh7jPfNBVpzPnThHaTeJKPAf2Aeqq2EeVLHNoAM5bxGkPUpXqwdwWgY6vqKLDV",
  "key37": "2HqQXCfG7YgqVdLmQdj6WPNLCFrSYLKWRJWmnBjvzJ1v3GdtAXabFCCE4ST15iX5Frs6D7kXvSMTMmNjU5UtPn92",
  "key38": "2yXbM5RXxEww8teyUFZMxpMDTabVPGw3wfDJtrbSkCrcanKRyfyKdx4FKYUHtdBezEnmsxFEh2Q61zDSbDDyMwCw",
  "key39": "5eiF9Q1xTBjkuHKiK72R8K7pRpXd5BPvrJF65Ry6zuq5nB7Ui3SvJVVkQWfuQGbrZhdab1unWoz1ksF3VSs2g7wM",
  "key40": "vUFtmUPvK6rHh5ZvbU7jg26Qg6cExxivgAdUz6ouG9TugGpiYdyv8MrU6wLkBxE3unwP3kh5FzjpXzYym5B1JE2",
  "key41": "2Tgd9dWpEJ9Ws7Dm5A1VXSh9rwQFpTHKtAqfpxrCLqqjRNXRKddcUjzec84XHRsyXb2rCnESbbQHyn6J1hyrFNBH",
  "key42": "2e4zgWzr5bXuj6yoEbDfY3ktbPeQb2vMyqR64Uk3iYQPygjTpJ1UHj61mYir5arqd1xvjaJyxk2yRqB2BEJPa6JY",
  "key43": "2KN5KV49UcpxJfLimpzXHqNkEHpn7wJqzaz1ZsxvuuK6A5X6SruGbkJQkDWJNZ2e5odEWYFFu1FjT78hTC1ttViK",
  "key44": "9dJ6s577P57NuX8SC3mvxgqYovrwhSwcLNtCfdfrJCxCXZNx2ACSYr9XzYppvbLfnayqj9pbfVFkXeXXga2VWFN",
  "key45": "4RShRTqJsqhEC1SACPrqxUc4am5yH8DEhacZoPV4ZtW1kwvypToGzL62ahQuQMjdJGomSyKTtCwredodf2q3i6PB",
  "key46": "2b7Cp7NLJUqMpkyDnxpRVuLLdEnrxM2syR4jzSPSuRceM53pQ67YJZRRcGjMuydcQY7xk4e5SmFomuNZdJD2MyXo",
  "key47": "25CAoNbRhYzyZR66MPHWrzV5X9tpkuwUyyPMJL6fJ9n8Np6oPM1rbZ6goGk5WKSHPYQuyieo3XfjA5cT13kf5zTh",
  "key48": "4xheT3M96LRTBCcgfAhjCUQFejYfqKaQaUZ1hnyDLtmoEGwjkRYBPiXG5JQUXLnULn1qN65aDdsqTFgSywu8xQZT",
  "key49": "4hHCAHfyhLUYDqs8y1ck9wzuHN7t4obMgn1Yqsw1dRjJ3aZHw7oFXz3RAnjGJC38F2P86c61GjqaZto7oiM4we24"
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
