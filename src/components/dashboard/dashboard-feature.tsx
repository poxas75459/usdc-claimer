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
    "3evoPFZrrc22pxHD7SNHTJcwNQv3dzzPYEgrubrS14WScMu6C19Nng63iN6c1MWtSLmAXAfZGFjaX8LGybomfPzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2og9H3zzxeEtjMWPQLLA3YhmruHQW8zEgihoJv9dsXSHDyCGHgGMWqCLfk63G59SrV8NqiftQdUgqBQbZ5DA8F5y",
  "key1": "4KN5SedKibwBuiE49G2bKzE1KeryF1op6HYPaqMeitrMFRHDaA7VtnYSamzRTWHzY1svyh4hxzNhpAuLKrHnioTS",
  "key2": "3Ygq4u9FbqT1akUU7RPkC77Mpkv5qLT8vg6GhEcHXhh1HSLZe9B9UyzPUssY4Gmk6YWGhnTArfLV5xm7XirivCgg",
  "key3": "3e5HopHCtsf9fdhJAAX9NoGp4E3UkNDK9SdeyaX736c9sNqtWy2Amr6LfhRnmrc6gFkyuarXWk7qUcjXggKzzBrq",
  "key4": "wYrNg7QCkThYh9V75ZNpsKsfVHuPX1kRZqz1dYHSoBDrMNKk5GjJJWLb6BxagAhHcpNuDaKJ3g1ex9y8UbG79bd",
  "key5": "4jZywL7GPJrU5ZHxWG5aZoD8WpCUyZFLTxr5hcVZy1m7ThwzUZxNPcSW6m5chT2Z8NQcw3CJYdnhFN8B96SvVFts",
  "key6": "5s4ksfGqJ85S22a8JkWWzd315ZyS4jmRTMCFZsqxsDjrC3CPbN2DFfcpWpq5GLkz8cM2dUKGAT8zy7udQ6fCSQDu",
  "key7": "438FFSrgQj7d6NjFaEzDCqE7YLjywXiZVx6n3jW7VuLjWCL6zKP8HJtcXiQbieJzdC1iAxrzWQ5Vtd4269qCyaDN",
  "key8": "373ZRDpeQXVmQs4vTKFkipHDjoJ3X6yw8aM3yqxf7CEgT4rY2jxaxpvmi2fHf9u9JqNMJyV8dw82o4kCR8TmcZqF",
  "key9": "4afACT3WXeCThytrz9tQnBuw112SkB8SWV5M4QtRn29bUAWZLFnRsv6jBAWTGN9ZDzqJaC5b15SToT35qMsga4Xi",
  "key10": "2GBXqWmjTqb8J36E3e2qwnDyjXfRNurewmExirA1Nx7nkC75sFNFNqyf39S1YvfetxTPX184QzMyBXCA5ePsiBnH",
  "key11": "5KkJkkawnM2UML1S9bLDHfTH7xAhmbG3i187Pt7NuYnq19C79HUTfdVYzqu63kuTvaQsdNUnSCuwfh5PhC2HW99x",
  "key12": "2wvNp5Jn6y9y9LnUvcxP7V7HGpE2V5HNzNAjH22LjCL9z9H8MpJpN5D1RsfVgSHj7SFxDPMU7a4xRC88yFhqHWSP",
  "key13": "3naBZtWANKJ8CpMygDuTQ5MN5JL2FZak3FLVUaFM3Hf1NDECjLEhnvJCRUWZa32QdZiysb9Kg238a3WfBDhgV1xB",
  "key14": "4YVac2FawvqRXpPX5i3M5zJdXmNzdE15ujhFnGuyiqS1SPFbuUCuvD5bU8FxtT4i6Mo1sNdedaGsxVM4DBL4XX4Z",
  "key15": "doZtDktbXvtWTah9xhHE7FiNMUjxYtwYFHibpGhLkArpkJyFbUbHQvnjgviCV1byvbqWicBBNs2n1mb5bpXusn3",
  "key16": "F3AEJTbXrpbrbCwoaeHzkRGkgJTjDhVE3HM4Sj2TYGor9kFryCZWqdDoXEjvjeV2Sci4jbddnZvenyv5uG3yVDn",
  "key17": "2upFW1uW87DWcNPKHmmHNSnRqioV3erY1mfZVWsM63JCBL5XvQWE9qVXWww5CQfDbZwGSZsK9vFUaMd9tDYfv6Sk",
  "key18": "vcLhSv8Vbs5f64eq7jW8LveuTsTSmEHrkGxkAx6mv93kK6WkGQNCFP44Fjz4EktmkxkPh13uAHVnPLE9yKgQR6y",
  "key19": "y1uxmg8vPsndh7bamWrpANPLr5pEEqxVqBZt8k2vd5hSay221EZznvtL1zbLtZmy8fq76kDeXkNNpBXvqhkdYmY",
  "key20": "2is6q96jthPiKd6SzDiEzM7i3hFAYZ8nLcmeEYj7ftTxz7yC9PBDfBgpsGzTr4X4xmJcsjrFMGYZahqyLU8BbLni",
  "key21": "hZN85NS539pwmVpSWVwRqstkNp1F2BmFdEkQaDV9FP2T6kaiv1sbHV4nscesYtPJvKZ5saARzAJYHVrJBKWh1gH",
  "key22": "2TBi2WT3ZoeNvevhC69q59L4LL3qWJhnmoMqgrZpk2eqZx4WmDPcFs3QRE9ExQSMaT4uRaTiik8NuGWNSUekSw6X",
  "key23": "2YUcRwZ1RBpHQmJeCdNoMBbciigqhjFNB1EaJKAdBGBRs2iQXouWWBdTcL2S8fr5jB48YF6iF18dKaKK5noWWBDZ",
  "key24": "2gyFtU9zjKs1ZmqSZMwAqportsViy2eZziNi1r11RzVC9rKQ1CrwQyaUAsk8xLp44NCJu7wHkFu5N5Hca2QggQ4x",
  "key25": "T5UGk5rpZXaxFrQZKkrpQaWDKL8hM2Tjsu1PA6emNYpwemuDVx1ED2c2BAWcTQL4aUiec8kTT65HXd9h3tcCXay",
  "key26": "2WEQk2rFpHSQRzUtCsHP2g226QtKHwE1rZZakJAedkKrQEAMFqckJmxYtQRF6X7n5uhStHJELUr2oojHafE2kPp7",
  "key27": "5JxhyrZTEgmCMRULpVoAJC6yWtUB6uQbFAVbyms87qdYqdLQVB9Xs6YhhcNkrLVYSeVWVJqq1xSuedYPiKJ4j8cQ",
  "key28": "5zJMpK9HN6LLAV15ihFFbUDuVfDRJbhfxNRtyc1FLSCUcDRX3wW9HsFovJYDBNk4dpAc8fwfKEgJKMoWKy7FKDn6",
  "key29": "2edC5zneKTCj6GzJfx4spc1YY3ohW4yc5ZoFCv7rCPNeLYsXhmBDrCnA6qT4vBeqVKU2377Zi5PkagwfPHj8FiyE",
  "key30": "4UZEjQjhtPZTSStuRA1hTbdiAJiib6m9ycptKhaFgqkvXXNZbuXo4wheZwCM4LSfykX4FQ3scUsM8R1Es7bwsbU6",
  "key31": "2cX4qhZMsPL5GpSVFLw3J24kwZq4HEgLt31pkYozbPE9XAJ8G7hx2RQvegtd5n8rg9kSdCCFqT6RQ9uYeB15L5rt",
  "key32": "2WVLvnPs3xaAMn39KwEtonSUuSWxQsBV4Te2DNbpN2mXgihQsxJRDdFiiPGBtEDx5Czad9krY7rcSkt4ZMBrhXAD",
  "key33": "5RhDEY289hE4qCfXBVwTHdY1MhyEFPrze7mHWdWYmGxZYFkzQ3yQDjLuYynNLAQ1YdLKCXdyJgWgFomJzGxLssah",
  "key34": "2HedMMLN4GJSqgGg849bRuNTaxxj9hjKEXNUdYR77oTGw1ZY7SPVoWiGkoeWQAwSVbvz1wbfTNc3AYmU6eCCWrX3",
  "key35": "4KtTQ9gWQjhUbBk5C7AuvzymWs8umGjdPg6YF3xdbxki8XMeq6VoRKv1GYRSzbB9yFcfEZzi3GKNzfLo8rfMqnQY",
  "key36": "5VdLiPANqtkuMkhSVC9pxAxkB1P97cwUD3TAmjwaVNDLV43fkrjPCSiU63wuwCERgJsvJ5WeDCFh6NxRgJtVabBS",
  "key37": "54F4gYQLMmq67pJPprbgNhP8TSwEGvn5SASvM7e4WFX8rqGqVDKi6kbSXnGtAQhv47SBr1f7AjTHcp2kBBh5gF8X",
  "key38": "2fUxnQhontSb1Fy6Z9S1nDDj2cHME1PZuMDDFYF65y2CgyiSj8n4fbHgfUFFga7xUVCuV13YeYwLB7uv4Xer4nFM",
  "key39": "5hUpmu7YT6pmvxNj6UfdSEVd4G3njqYzPbhbtrQ1A51UibEqenCtTLMbPd5wZVdyom93bkeHkdDHQDknbzkj4SfS",
  "key40": "2tZC3J5mgWCyEpR2QJosRJ2jNUXrv8bQF2Yn3gUqMkSCBzAYh6jtR1sefkAEmu9s72PiKfRuapDB6DptQKZu4A7C",
  "key41": "EC84seRVehvcGthTAHv1dc4eqvnENF3wsm81AkDCixFhruMjpyNktjXQJATkNd3kpPxnfQFmKHRho75DFqGXyTW",
  "key42": "5rsdi7sBhUX3KFXejMztMiNk3VrJj8QPafLUpccdSzoMzgB8aJcj7AXFWxneXxvWexRDYNz6sdV3JGy2PHXHgu5Z",
  "key43": "2BsdHT7cJt2sznXwLZoqUNtPjwh73aECjVijRXBSMj312j4iXb8foxTVF8JspXuEbSohCbjefMLqGXeU29hmfjsY",
  "key44": "3QnPbMvgwkJjPHVFc2cAhCxFTAKnC5A7npGE4mTYAT1dzqAEtwcf4Npytddu9vfZtLN2rHDwKgJgvQoaLR9xDqbd",
  "key45": "73kBS1edp1kBQt1ceRxXsUugHKrxbMuZB8grkYJ8mNDDspb2BCmJTTvt7CtKTzvZMjZB5sp1jQNB1qAZBteffnW",
  "key46": "hQaJy7i4dbeMYVMb85LNZa8Xb8nKvebF1GsXGv9a4bQo6s85Hug24w4TxphWyvtppCbDZ5XNxsymHgiRKecgt7V",
  "key47": "2Bg28jciYqFzUifVMdpMrsBUNb6ARmX5EGWqUjGAp5r9LeUQGRm17tydrP1LLzXEcE3seAa4oEhpFt7Pc5tReSfV"
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
