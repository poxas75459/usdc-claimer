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
    "5cru93PhdvBEVUTypwr8WJqrEN1o6SphDABVT158kP5fqYAihYseRMQiCZgLXYzg9aQVTzSiTJrsoynFvnSm6XG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6rwd7TxsLeb2nZac2WYnDZCiK75pn8ynLiWJj27yripjLgoTCNy9qp9Ts27LfcDtQCSEDZFbgBiJcBg1RbfewD",
  "key1": "4X2ZV2hdyp272zKdvgjrovQvtoVJzbcPtR6HbrhD1DMd5HW647zGJc4kNZxuT6bwzLReoNLSvWkFiSL4uQuZ15hR",
  "key2": "5dKJ2itwkUikVqJMS3EZC9rwL89csm6jKvUTGCDbcsp9mgScLHS9q1z4GtcjyHF6sMDCaaqSpJ9FftANXStonEW3",
  "key3": "XWaebFr3GhsGCUwWiinE5paBWLkZYhJGbbwt9FCokFbBN4nyKcCfDNfrTzyM8eUXpQE78dzYBBvUQdnZrGF9qPM",
  "key4": "v6tsbUA6CWqis9a8yZPkJ7aDbUtME77FHLtabGATocDAUkJWLEa6QZB7HX4e9kwoi7ARgyfVcBZZjxzfTminkGR",
  "key5": "5tcYaeMJLDuaMcmKbg12aKWWufNPxMqfKp58KDA9SNxPYionBR21aWPQwtorsBfnkWayegNiTo8Cpke5KdBXuhLu",
  "key6": "4Xpv7pWBV9f9qZi7dhhS2anvSkTxMvWayRqjoSYRftesqReqy9M4z1oUWpZpfcnhbuVoYe6MttMhJXCa45AKBonM",
  "key7": "3S92FYKx38tHCdXaRMXW6UeT6MprT9bhXvRuomTUvVda7oirSE8uTXZMoPNrigaSTV3iCeDWVeWEBxaBJ1p2XkUN",
  "key8": "451mb3mkaSMURm87ZGjiRDuFNnK8KePHFfbPWanUgfct2zXc1LKmdeD98EbB9noctuutt8sXGsGTHqB1R2krWGYm",
  "key9": "3Htp4L9a7Yuomti8kVmUyA6o8wjSkQiJjgYxNnnSSyEDgnbZCvYAJWhLQhZqRTMLoS7sx6JqJmNC41VCP4Y345pA",
  "key10": "5JMLMufrvkn7vKJxDsuzw3vi2VNNJ5cCzPb4MCQWq5tCcePxhRm7rsPMWbHcw8mDvV1xf9icAjKdHcMaTTQ9qRAZ",
  "key11": "pUaqbvd3sFTxDLi8iCzKTyoS5krWjgZz3dFBUTwLkhiKL4UST4bNqt3u1bwpF51zayzuhiv8bNBNYr2TpZJXWQg",
  "key12": "44uZYqCpSpf8aK6VKr8w32dwoifhWXWSs4eY7D76SnfJEhCnCgiitUEvYCkoyVJZ87WouzknFzvsA8T33xThH5Hs",
  "key13": "4kL6M1Y7wJRYBfXZJctG3BhUbe46YthoqZJC9m2mwgvw58Z8FoTFcGVJgUFWLDZR1FVMtViUQonMp3G9Yvo23U9d",
  "key14": "jevhdjMsiMmpTbSWmmFd13RKzKmB4b9N7bQGw4v4CwEWxwbjZEhM2eVCN3sP4nf6b89rkhFWLYJTpLgsmpf6mqG",
  "key15": "3DAhbVtUyuA5toStQoz6ktoKfYM6vwsJ7Y71Dv6sL6Mv4pYGCdU5JSZLWLy29BA5wMb7kuYxDMxkG6rK5rW96mPY",
  "key16": "5LAkyA1FSFMeoCd4FwgDi9BRnuR8SPSWNRQskTJKXZAcouMmhVVwRBNhgLKuRfTT5JRQz4rVMErRTs5FNYjdPZUQ",
  "key17": "49YZvvo7ZyWYgQNQUabTAtKbouWzBcdCnaDBZjC9FoaiyZGY4cY33RMGqVbLZmVoyciJrY7e9LsP43M7F9dXVnFW",
  "key18": "3RtVfMec8CSJ5omDYGvQJ93T54NpdHu5MA7t4zDU49nQCXDFG4qofV8aM6Tpcz84ZThrb7Kk3NqDDmwRyoEZhvsc",
  "key19": "4E6kBoygurVNahdEKbYzcsPrKbys5VmPkTeoXdmZhg235qqimENdsGjYiCG4LAtFkNzznCYNLpFJ2zKZwH1kEGMo",
  "key20": "4o61xo5Lr2SLyehXg1LTqbai6sgGE19ythoNydro2bgLcZBQDs1AnBH2A1U2GVGBMaWWWxBQ5fXm1CoafUzCTJWf",
  "key21": "27ZFikwiCwoSWswQD78Dpod4ECbcjH4nMggbdu4K2yn7YKjrRcDcZ5GvmhvifHm7unqYRiajfnu4j8S3PXMpaNoq",
  "key22": "23PFpRaENSfZ74s66xmom4HgCK7Cd3cTDxdWwUxpmtCTCTjQFEvCS4iPxmfe56ggvUPx4QdWUmpxxjZXvKMXP6bz",
  "key23": "2RC9yWUnBAzDHVsKpfdJ3Qe4v8jcn2s8XtfcH85XiXV2VBqYLgPb3hdCufx2EpZLmDnHhhC1XjZqLV1n1u62SM5k",
  "key24": "wnfCf7s9DewJXmKdYbHE5F3g5JmjXqz2PqycWFAkqr5crMWXFSVy8uPWHZ1f5nFcRnjprFkTALMcoJjMv81qXoN",
  "key25": "4CsQSn2P7E6xFQw7j4tWNAq1ftcFQ4bcvvk6KUWT86SR1wwFtffo7fvDfzQn4Mf4sRLL5AaBg4419DWCDaFpZMXN",
  "key26": "3RHeUvDxPL96eajkg6Xmav9kvzniTx4C5iJ61TUEixFPDXY9Dusqr9WC2Sm6dzH6VsAqYPLP1zJm5uET4vVwNm3z",
  "key27": "5QVfrQAA882EvmwmhQaiTwAgPmpAKmSeAPHNj88N6JtAzErV4m2BCNnBeCgfAbqCGBzNbMxKEGeGdmVqWumTR4Vr",
  "key28": "4jiLCcALvQVJDNAK8BPtXvSv78kDf9CijhDCiRnG83wLX6tc3acVBcfQbXqRddVjwqKyt1GVTysbzLS1EN8fuaEY",
  "key29": "4D3yWVt2Wigp42pP5HPW62hDkMJTrVomXXRHMwaF5Bc7BehMW1dqqLTqinCEiSEJNPLb7cVfRREP66XeiUKVdd8n",
  "key30": "3gPj5rNXgKFFzrB3q5xdbSt8qszqW5abBzRsVd99rFETV72xt5ddCKyaH1FJNKbPdMGnFWYgTywXYxdfJBZexqXY",
  "key31": "4aPGxfJFefphLKupc6fcRfDb8Ym1GDz5Tqr4vKGQfv5H8fJ8rSg3uRwWefAoz7Ywg9sKZWa1FJK9JDod6VGxzDbQ",
  "key32": "5MhTL4DmYvTC8GsS5j2mPDKQ1gyTwxfj5bVZ6X48sS9pu5Be2BqJcpna2sJ4fZ7589jxXvUwASvgPRFqWS71yVK7",
  "key33": "3H1J6pt1NcivcZsTkw4n22g7wqyJUQyT48XUKTrVE8XgCFqdQcM3AaQGt7yJFYGZi6cc5mpXDnQwioojVhuFtMDK",
  "key34": "QecJik1X1fLcuEsCzTxU1GUHSBaMyvwoLyqZuwMKy9ixhfa4xwWveiepQvaNBXHMy94NKn2nLTwRsZErq7eXYkB",
  "key35": "63hxTVigKK8LfUEkj6M2NYJbREpzyRaTLQzK4dYQBMn3BEAmqkN62MLLA1PbBLKY4LwU9mxpq2r1gEca5zp4ibrK",
  "key36": "zoNvJKZdhCTH35TVSDf63hXxAhCxskfEJipKvnrrrr7HaC729YW3YokrDuzhmHy7KRat5D2cmr9sRfGfvLxd6g4",
  "key37": "zP2wh5bNfGAg7ER6hfYcrTNxtZjQ7ZD3GpukS1d5SXGnza6izenTYc9SW8q62TkvWi5d6eTZJMekBNDfMjRaXoD",
  "key38": "GhkT8aEbfoKpWnJR14yovSJAmoGvHhAeSRtbAojyzmpjUGiCd2xGf7Fs7z7DtTxin17BSPdDxsdGzq14uHe8tom",
  "key39": "5UqzT7FkyNhhep2aKF3sDyTN4KJ7GFjuCLp5wa5wSx1eDoC4aY8T2uhSS8r2MWz7Ao7uK9evJ3nR9SjDx7G2Vn1R",
  "key40": "4gDj51fhb8owCoeh53fBcfFjHhChG9ru6SevuJniRZYQ9FkxPc4cwSq1i83tn5CdBfyzrvNmyQVa9jUTDQZkxK7M",
  "key41": "23gbaVZyT4VDfKZxzB7KhAMxBaKMDAv5jZsXfp8fGQG166xQ17sirxcdeRNcFQjCDNt2BU5hJqq18RAyGssazwbF",
  "key42": "23ExwZvfHaCYAQvqMEttyfG6WQDgRqpoZFHjfVW38fk9ycsyXqas2F9nYkQMK6SedNTwXHHBXBGPp129F2jSfDWa",
  "key43": "3hyQyk7DAJnwNZJGWELjrg784npg7aUDuFRESNRqnsUj7KNH3UCf3uJmdPnvGVbLYk86ZhCEH9Q9ZTuTQDqBWKyk"
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
