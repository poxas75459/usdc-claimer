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
    "4H6DpwvxTyM2jZ2Nf1dr2DZjpkGoX2yZTrBqsHgF8PQpogwueMZkpxK1Rw46R2f8jEfTzek8HnizraYzFWVjE9Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXhan4yuHds7xbZmXtiigR134tM7aS482ADJBR3i8JEEAUZfznUfdHfvbcV3QDH54ZTBKouEHoDWE8q2b4fKyFf",
  "key1": "3hVX1AsdMHYUPewkj8r2ekUD1FWbqyU7DEgJZ65hcnj8oQ7hnbR8T7theFbS3Y14EmPeKfHFsGqv2mMxDVF2pAmJ",
  "key2": "4PnmEXviJh1ikeeUWcgcHv6QY5JY5oE6NWJBbgTSyutJT6EsQ5DNMVpfaushSAedBJGmFxZqvhqknDWfZLwgFwv",
  "key3": "4AfQqZnTweAMXfQcb17FDpuqMrL78bVxLDwkwLkp1Qw7sfdLchQEL2DugGLepZAkUqmfyTWpNjP1sHZBLhEVsxV8",
  "key4": "5Cf8n5ga81KhgMZZqfVVR2TWwx6qKHvBUs5YDoj6hvkf8BnKnEwM83ART8vrJtwHkouaoYYkmoMGsM5DVyhZk3zf",
  "key5": "3ngfru9fofSduhxM4wyh5EaUgXbjfr54cGJbzMy9JK6FKm258vX8BLLLTA2roxuuCVvHjFWF3Pbcg8mazT38zYn9",
  "key6": "5DaeVW8pCh3CsmzKJ4GQNZFS6RJ8Wk3WLXW9qeZ4XpRVpNAwDqsW9abkiEyRNgksMGE1Fd9PETLZW3i3Sqs6tp6L",
  "key7": "xiZuTrQVW9xRYYVDzkD4VMUiPYTgUNDVan4hMkFr5cvG2Z5s9tkQziUELeKQDckMwYYYcg3wJD4ivDxasoiH9hv",
  "key8": "4eRQnJqiAHHYUmkie9Ms9u2MJfPT52gDj9yqQSe36CuhimzQD3S9AfHnA8Cy8NLXECrDGijTnHkhzrVTqaWRHWGp",
  "key9": "5yfjQWTJk5j1PmaWziLGLNQ4EK96L1W4oBVXdqVyLqXVL5Lo7Jptgd3h3vrkdgd2GMw6bsvN5FCCPfMCGnpdunFm",
  "key10": "3GZYncxcuFN2ycb78BWrsG6Zvznq1BY7b5cbMhzHjsWxf83uw5aX58WU4jHEfQ2QGfSCQv4Zcyhb8KShm4ioEnh1",
  "key11": "6MiYuKmJHb9ENwhBT1WbtPZST44xYwvsbxEy5hgbDr5Lxb4jjPV4gpbYKCarLtfdW1tdSqWScoS759h9RoTSfZt",
  "key12": "2NW6n12YFJFpY6LwgWDDfhZRNSG3mzniV39KNqTTj3atXiZBRzeSMrvTkAMeorpkLPS5EzC6FmqdUoejS1gaGbdY",
  "key13": "3nYi1a5LmbUYTBCKhHF6KJUJxmciWXNSPiNn5Xk8TxaYEL6ED4EdZuonnk9qZhPnmK5iTwXdcREsFW377aRUBqu6",
  "key14": "2jkKygRREA7K2YfbWpLRPpLAGH7UpZXCSHWn4ggdCyFEjdXdfZZZJ2fo4SgyTq8FcHegewurQXtVaVPKTDHdx9Pg",
  "key15": "2wH36XxKU2jwidLmSufR1Vd15fkTGXo9Btk5bHMUGXGAd9MFGDz7F77Xd7BCCpGiy1BbQ42rRN1KMaJ2Tt65LZwH",
  "key16": "2ZaQgRskUX4oc7JVAcpVxadR3sYCSg2bzUx5tfC35MY65Svz6ZsrrcrJPjpz9wmSXxsckcEv89TkQrie8jb325XA",
  "key17": "4z6gK2UCVTCBM3ShTkuRCLgp5A87DDVdJ7Uezd12LZnJZVciLcsJ3N2PvKt6vfXGRC2FweTqqUTugWueFaPSYkZW",
  "key18": "2Q72misvnsZoMarsFBudYBhA1HB2w2ZGxeeeRebFZSvjFbN5c3dKGrzXqtjngk8hKGUpHyCsMWrfgqavXd2KqZUm",
  "key19": "2Eo1XP768BVw6xiVMTCEvvzebgF1ffuAg8aDZzqRjakzT82EA5bkW8h1EzB2NpQgLEE3ATr9Vfdc3FwqekPuDo66",
  "key20": "5M2NBvKWp5CsZS4zb7nvjFJLMchNFumyU4Bf5U8m4UhKXLcwaa5gNDEevTRMuFT4Cfgxw7ucYckV5qEMDAAKZTZr",
  "key21": "5nNY119Z68tURKWF4yzgmn7hN34vTuWXJtwBvjJcEwksA2UZeDTULfKNDkukzVchZyA5DrdrcJdiAZbUWuorx81a",
  "key22": "5vHHZwZxL7s7DJJcrZj4YgXy64nbGw9FAUyUd2hsnshA5uwABaB5VZDK9UdKBYRHNqiresNhBah1BvmEPLTmEKR",
  "key23": "3wRDDHPfdMR86W6ZvsDcqSFKqC9j4hWwZUgGNAtiWS8S1jQzL5rvxoSLP2fLebpvDkaLRiwwuxap6VuLAUATrUxp",
  "key24": "4JroPX6CuCNo96zSRFiCEyDXQnPPshzww4JunJtUR58ZeVXWB9emno1wgawng2FLqkeygikTCppgA1gMfKQLxstb",
  "key25": "436hMtwgaKfvYDj8ewHMHQpCDyb27VRVm8VDUAAuSZXjqHGAKxmrCrqj6DrbQhVdsVir6zigiWTNg4LkXWtXui4P",
  "key26": "46Z8y3WLAAPg7NDrknjF4kmJfYhyGQXHnmRs6FcbJCA1QjzQc7gd37CdMutUddW62vM3UAiWbb5qKru8Y21ptr7z",
  "key27": "4NPtcnYRDm1L4VabyLbRN4zBSxzsbzLSgRu61w9mGSp13xsMnuQAQvK2QNoAjtm6bpB4WsZ4o8nF5AuP28oprF8P",
  "key28": "chWdCwE4wpvR2iySPzyZRxfw94F5cakTNJht1MYoZ7oFmQDYP41fgUnEGXWqne626dSn9wvRokZQhSVjz1huu2U",
  "key29": "54a7rdio9W4m7VKHzskjNPf2Lank5pkgJvRfhfiEDAU95JFq9CDrHHHmioCZncaW3k8EVoNyaRfzFxjdWopp4c3Q",
  "key30": "4hNfMEuXy6ws5Uosptc2Tqgxqzt7ex6EMYoxngegfkt5yZf9ngbYhH8a7q4MuKQMUH3waS3Gy677NdEJEDovgaJr",
  "key31": "46M9d3x3TzT8EMQndLqEkiitqX9Zy8pqPY3demfJpG8Jju9WBdSB84eDgLKEmCuM8x7rRFRdT5ci56RjUHrMCEwX",
  "key32": "53YBfBUYsWrxB1xsEryXiBUUDzzyJ4wT9G42taaoxJ8EBRyvZiKoaK5ukKhWPD735gzn41QakEP91EorD9Rg6Tzc",
  "key33": "2UxBKfC6qkczhkQ2awNSfK3NtgAGSNNwFVq63wVocMVK89TrSZXpaECxd9gMLmY6JsQPV7Xpeork25gVvGwEUEtN",
  "key34": "4yBemnJkgrjjZzcwKoGqCSZAK7awvx5zQoriP7L9UwpjPjUcFjbrAm5sYcHi7R3eqa9g7MoALb88HzrKSJU9aHqA",
  "key35": "5PnuCYN39vCUBWmDeRwuRAABRiDNCUA4p2GtUijP7Dg8R2dHPLXH4iP7d2CuTghURLM3qwfUJFTnyg3PjeZNbedd",
  "key36": "28iByufSpgfD6cGcQfHsHrSSqRyTMc1wBET3ECYcuP4D2eHWjiqafcdburr5Ex17KFoHL3jhbPRaBYvj5ZRxH6SK",
  "key37": "3P3H5QUUGgoKgqqb7vVuwN6rS2WY2rP5Kdcxj2thURKffX5nYLSAYFWxJ9hBaHzSL3LAFY9WVWBEp8kP1wqeWPc2",
  "key38": "2vW75wXgaREqcnJRRuKn2XY5zQG63Ka7VgX8ftxVb3QrQJ4GHZ77q2zGC3ZmdVZSsyzHh7M96jwEZtyXUnvoW4Ee",
  "key39": "2qMajUVBuz4ficPbZgZNztkRnHfWbGeQD6hpenHiDUggQsdaA5DwKzFFF86y3iGojiQCynmTsmTMGYsGTe7YHzMN",
  "key40": "2roe94aYPzNgRYWyizqf3mDGJ1MiMGJ5YdMwQHtUtkcEHxfiPsHgna53qwou3J3MCNLQuYQjySfGk4Za4zF95EyL",
  "key41": "4QdEYnDPJasCWKHaqAyMsKsREjgzwqvoV715Yg4xezhLaxC3na22hjQZoHcj8eaGnRYAgA5RDxD5eHp6hqDyxj8p",
  "key42": "5vM7iMsEwoQMErgAr2CK6x7S3rpADwpxcbN4CoPU9kkvAYyF4fq9Q7QHuTTuqJiJWejKoANx2s1Yx8mqGiXCVUTy",
  "key43": "5zeiSJGJ1LysFzmgfRZtYGqzN1e5ZhfXdv6azcwUxJma32omEsCRG1bHYc1LPSb3ezUSLwZw1ZatqUHML5oa37fz",
  "key44": "5ztmMhhcsHEuS6oz2dfBkdFiQQYNPkg7A4TtJ8AzptvWgvCNGUvfWrm5i5GBxqJiupJcck4SsfT9sEcYY4yXYTH1",
  "key45": "4MQfVidNgPkvBj1wuuhUE8kWtKXn3591vDfnNP7y6yiWGSjq7UNemnTfrVkQMSaDiKckJaruC85MEDYptAejxF2m",
  "key46": "5fHrQyeHTtk5SkPH1VMbZiWDY6g5CtAAE6zzftGnJnZk5d5f9ZMn6BEtiwtaR1PFpcLhEskqGoKpwmAXRUQLLjFw",
  "key47": "4BdCpK5LyQrdU1LceLs5LCTQ94SLc5R9GXFnfk4LdJxNcZ2LsvXaBMuRaqDCp1CbXoTGuXYGh3PT8qaEgbRvhuYB",
  "key48": "4QriUmLah59a5rgpTFLcFfLCsKHQ5nTggWS4Eyg7TKMAvcM874ttZShVRUuC16x8RcW1qvZtXCNHpFk7p5AsoyBc"
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
