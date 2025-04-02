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
    "4bvuLPU9eDDpC1rrDr483D4k7HdctnhuPEe15bvxYQ9pdsWZLH7DyG11Rm5HnyBXisRS6n5APZ8aphmmGknw9qkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KE2qwnFSD2S3hjqxP1Y9EDFzq5FVg1MaoveBWNEirUovSxUULaDrirQfYjtV6AFnjBpKEv97jxPpBXDR6YRu8SG",
  "key1": "34WtdYk6L1uKrpip692WqycooByjVtiT6FGv6QXLpRAXvcqMZbRgLuByLpSdfgBa7GqLbCPtnpnKjU4DKiuE2D3e",
  "key2": "1zKaK4gW48rMxu5WzMcqbEQ8jn8Lax6QEmgqZJXqzDbn992gsUEXJRZdL35kSP1aUe2iz3PRWv6iBxpGrqReyLt",
  "key3": "4Ra6wxc4tjkkCUduxAMFLezomb5wXCcSEZuhRG75mst8cMgdbALsuv1z84ZW3Zc9F6aPPdjHF5L237QJfigwDEu7",
  "key4": "2myvPEoj7kKgRKvDYMy6XjZVGsCvcfXitH1qUVLVeJ7cTVUAjoJ2f12TsmVZ3HpcxNGb5gRTWg69V9mem772dZFj",
  "key5": "625Ubagu1Wem9Va6xkx8TGaq4pbmZ51Q8jv73tCCmCkQb9FXcSxkCJuJ3ssXzD4ZSPkm9Wbqxb6QCnTbixErkqtL",
  "key6": "3TvvobfGb9XkfQrm5toH2nskYdP6ww5rM3c2a6bHFnhUBLECZR3Yy2DRijrgZBN2FWUDd9DJuQ6depiffAg17bw6",
  "key7": "4zZsKYkoXDhAMgJmmqaqP3T6vUMTbmVYTPBg9SjCDb8zKq5ANrDwAqpnNUB2v1Fkrh5ScJDytVDf3ypRXt5X1meP",
  "key8": "5temjwDZ3eMjjvpSx15oCKm7GGvVqkhdLRn7NsC5vEv6QCCzumn67Her1Z4wXu1kob9zgRnXiNPHTKazSG1GcE5M",
  "key9": "3i4SgUJngR5XRnLawumodtfW4rHTbdtUgUpgtiTZPtnHm3rD9Kf1tvzUQLypQmmpwkLamsY8j1dya2f8JvAjKHUE",
  "key10": "59eQ2y7qv9kTscJi5psRnBdmEvN31wvVvrW9364vqbTT9jHMimhqA9hjWjuV62s67VvpBFWMcyPZk4X2kP7D7Wo6",
  "key11": "22fZubMquYNtUZ6ERBhfiFbtAmm2AAF6iwfXg4BvVCUkPvV6aNUZzfknPbiDQASSdvCjPj19oba6RP2TTvj8AWAc",
  "key12": "5oeAFcf5VqZNniPP3QUYgaGyej1w5uvuHVG7aQNXN3LdyMoDk2HjTzhxscA4xAHbCQJEcqgaHUUEgPAPSCQ3BhUi",
  "key13": "5mjjpn9Cwd44zf6Xcmi1AERXuKB1ykYouoUEXvRuaUQk5Sf9dokyeKDWGq8egmG9Fdkrmwn1mwGeKDV4bNsQrMKW",
  "key14": "259e7cPUf449EJ3k3eFiK8uq4Rd7sfbH4HbjrrAbjUL27TbDqQ7JRv1ZMB7FhgCW6TzK8LxfmCs81erH2FGzqRLn",
  "key15": "63RDKxH7sfyytYf6hcx4CeY2yTpPoa4D4tP9rQwnBg6Y8BBEPpHBEs5owHryB2CJ7EynrZbKPEqtsZzerWrwj345",
  "key16": "646AnSB6sKUvuzPKaZPrSLHhwwmDQDT5AeCmmQpfbxmbhSeQ1ovyY36nZT8AAsmCWU6mwcyTNbY9YfHtToeQng7T",
  "key17": "4RtSVAhWP6Y1K1WnzwecAUGGT6wgHTWesJZFCfujvgdzsi8khDV2EuMsS7xQyuukNDWnGg5hW5y6hvfainuEuv9Z",
  "key18": "2hKihc64czvXkCgB823aQeduUjNoM7mwmNbLrD16NNXq182bono9L3q1SSjsGNAb86GMDiu9JmemHYyobKTnRLtV",
  "key19": "2TTxkbR1RwkxXYSTRS66fvr2xAQgQvjZ7aRarvTiszuZJvYyr9t3jrJB62wn4GWynq2xGys7vELJuJmogs2UraXR",
  "key20": "62VfnXjQGJgLZ1qf6WxanZQuE1xQpGBAuEGhoTVVrkugs4tkeotdKcTs9mbdmHfXUL3whhAmhXFJhJZxccLHrq4j",
  "key21": "jLbrw8caCssmarKhaAg621QuAsznMTXzF6g91PjLb3a4DbBaWn5pCEiVD2WHhFHVbFnVsKoijqbhYkdXRZcKJED",
  "key22": "5vy1arYRY2QP2eypMjrb1fYu8fbhHj9Z8wmXVAbwUZxQe5xUZViqnR6aGKM37mc1Sw5Ckh2oTuGA13wL3B2pT2ST",
  "key23": "2SpQXrx4JBj8Br59KEghGBH3Y5Z9bUF4EuCY7xMBd2Czvuv2GTkHv7vi79ruJ1mQqjShWFDWoVMBZQH8srSM1991",
  "key24": "2quBYSd4X16HcAqv88vWrtMa7YoY4RuBY1pna7FxKmzVecqowAgSXpQ4U2pL7F1Z53oA8TMGuZmPwXKUrmkppaMT",
  "key25": "5GqkVHzbpiUQhHP97h83yGtNNDjk8BgU2Zeddkh9XW7HsM86tnge2Jv2pjJxqLS5aAzc1YcZpQt33E4NukHekJAw",
  "key26": "5BRmm8Z2Gvj8ExFKCR6x2Bu6VSAT1m3QZuTngYPNzjTTB8NmpKmZ4UiKGtWAguT3BDpKgBi4HZ139q4zFTqh43J6",
  "key27": "2nXjnVojv3H2ws1hGSy5bw6qxNasr4b2EYi6n1F8TJ6fFzdkFrLwPannZYzzV7Jp3PYzXjnqUR49BrbScZtakZTk",
  "key28": "256KBgtP41DEgChNfCowGtLke8RAzkHL7WQVvdLhfdg7DHnYESN8MQq4umpSzJTeVnug8hefaKvfLG91apMRP7G2",
  "key29": "hMDVCWpNmgoYrqkFNXMxmb4DxWha2jq6oQJf4VPRNqV9enNB15eqVNFq2iiKKjjjvYjs7qkfkWMKYD586TmCi9g",
  "key30": "2GZNm1DrVXxkgWrq2bwCcrqX9oZBfggsAWpUMvjaRLThq7nUDdbwNbq5NQKafTby1d6qX75i1vhB3TDMoRApDJoA",
  "key31": "4yPxZJFpLV8kg8z7LgJuQpEUkKpA1eyMQcDdLHV9aePXedKFJmqQmySibQbRG1iA63bEU9iGK4zyUSnvYbJmaKVi",
  "key32": "2Va3CEbvwX5QW9ntq68GRJGrP4Zq5s7Ui66QSm9s2X37vmQ279wXEhWaB2RF7vS8JdSTNAvwdJNpqLPa1t2QPHHD",
  "key33": "4nWuG2gx3kZgKYxmrQG2998dRDquiziDgj8utwfqmwEm5mCrsMH2nwDkGAMeSMmfnACKM7PqL2gtsLBamBhZStSW",
  "key34": "2siq4H5dX6YuWTKDsKBQokJ4fqAQAEYL2Ndisc8S5xHC6HPFG7Vy1Ft5Gz775rTpwbrBqcnTJAKBXZa1x6qzT2Wg",
  "key35": "2Vm293kWHA2jwe4ygHRQWQu48L46Tze5UvW8fxaXkWgc6wprEA6yoeK5DYp2BBLpPP2SFs4ED9ea8eJUXBMLfzoG",
  "key36": "2dswaimNnVHcTaQUT9KtwBTfWPip7V3XDg4jon4LyCyVGfxXZrmtsyi6c8jkZfZozBfbGMhQBKnxXjuFRHUfdJ1P",
  "key37": "36pcHtHnK79jUuHVuWgNoRKGkknbSRXBSwGx35NrDudzT2qbWcCkf7FQa728rPtoLGZcvCuiQ8NA7cLPXcpGvbom",
  "key38": "5e1uTjKfwj591YuqCrqUPy4UYFVinob7diVCUDmrWt3ptmpN2yGzz9ajKXSyV4LL3ZNm4u8phbgtMLm6J6Cc85o5",
  "key39": "4xyg4cukHeRmT41A8LLKGStTMjqqn7RGwTAwwcehYhp1JhenQcFZNvPoKVikBjNNvxaBcsbA5NTNW52v5BnEk2cu",
  "key40": "5cSJxusQKcEniAXycLamT5ynHudbrrmXwsJHMxyFfSyUEVeXPKu535HJ5cKY7aSafctY2zM3MiQJWazry1uy597x",
  "key41": "KvnURuhTBcgccirhaKqEaYzse8CuLje2oMD48r87Hb3zgzyT6MtBe68dbdnvjSFempfuFztCWoauUgvhWanGap8",
  "key42": "3pFhK5Di1dfh2382Kpg5cz5nQrgCv9xCfshUKJWBEEpYGhxey7TBudrwqW2pEtJuLiYUmvPyF1v7TuszjtmKjHGg",
  "key43": "4v6obszsfsDvy7JFUv4dAGswapAVbjdiCVGvH4WwaQQeShw2fRcMsjheAc6pWNPQFXFdgWfv5qiZbnsWoJMd9zm3"
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
