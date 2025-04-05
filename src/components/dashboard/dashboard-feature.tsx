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
    "2U1iQnvboZrZSfZtgkU6Dij52nPDUwfUYpZKX9aouNuJxfzw4o4xEYHWnpYRMDefrhps3U77NphLCoLDBLTN5y8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oNbDWrrY94ezN1D1uTsoDajfUhqFhUwBFRXCPbdjkqpj3ieiBD77tZ2vnSxpGjHnjmrGs1jc7Fx18CkdvsmNNug",
  "key1": "4fduoiE4DunF6tAQckVTPR1s3zwJrssAtucTixFb6n7spzW5i89hM6JNS4heLQKehxg2i3y7i1fWxVQGjSq9iwmK",
  "key2": "52wj8MPrx5esgRWU11eHN78ZDMrkamQ4oadUEBNfELjhsTHj1P58EDBroKxoBYw926BgjCqmaGSygvpgkSY66sp4",
  "key3": "4yS3AZSGGVghp8YoYRCW1x8MPmthdU5Tm3bUmpazTAjKJyduBK78ki5DSyopGM1w1y95ERvG5tSwZoVD6kLfbADm",
  "key4": "5etBonkTJkjG1d8h2unhXTEPETphwEFz8diYeZa9SExon4RzuEJZB18ZE8ZkLqVPtTnVCN5zhRTvaBd62kmzmXKD",
  "key5": "US2hCUwUYXVK69B3MALJabe6kwBLRXqSd2hrUtUovMr6YkJ18dqfz2QuqtAQT8bybiW5uwt4mFBPxgYPoE3Yc2y",
  "key6": "39F2hpLyaVXLJ3V6ZGrb6AcZMsARuRrKmG4EcvjBsnwozGTZnMTyd7uSp5MRTQMXRB5tdJPFLcZLJCxRnL3QNXBG",
  "key7": "4HVsev6Qmz3hxaEHcA2KFm7PMsQRyqPtJAJr2ooVmuy4BEBKTHvs56aWs4WafTrAtavbr5RPnqQCXsmHesVmi2AF",
  "key8": "3erY3Z1Zc3Noo6UzLVMYKRLRtVXpCuGNHwNL3ypRxRrxSWD3YBp8BUD5rhUZQNovLTdgGap2KHjSxJDfQr5isstd",
  "key9": "sEUhLcSsqf7E1jjei22GkYHPMyW1xLMr8LbqkynvdqKL3No7UeqaXSra9NWUgNXqsEz1TEq1EHh69SHJgpLh8vL",
  "key10": "5gfeVZzEypeWbgMdyzxif2NRJCt2H7be4Et3CbicXq2o2JDaBXsUGQDMRU7GvGBpWa9UqUpcEhQsEMyeqnqY94R7",
  "key11": "3oWvidznxx69mxWe7rqs5cmAw7W8KG683GSWrRSd2iJjUACXuqAapzrhcwYqgSLrCPygJBK6RXiRkHCPnBHaNmAh",
  "key12": "2Q2FyMeRzYp2Zw5e531X6z1b4iTGKrrbTETRG1yKaKGqpknjkKGNo6ngesZ3tF97XcUUiGxr2JtDNFVrx5UWaanv",
  "key13": "4vCGj9jgcnncuochPztgrUboXWpFxj97LbVWuJidFXDBGdK4qjENPpR6EAv93qCpEMCiiCFrGk5UTYFPdqgrG4f2",
  "key14": "mmhoFFDgZ7qHExQ7npt55mHWRXt69u6pMyTJq9TsFkJpdmnqhkAi5WF8muhSrUS213dhXNwHgEkQRQnJjVqbVwn",
  "key15": "ZrTk69i1Le7JaaadH6U2VYjs7Cghk4p2drp6X78LfkNt7nmTrFzjryeHXoW634VF2Z9SM5GvqPCMfv6vzAdw6LE",
  "key16": "5Hjv1vfA7sdQjiEHYBY8u8AXbgAWxKV2vvTmHihqUFhfUNjpcywoqeVt1tD23EmRohPbh5jhSJHvuowS6g82YGtC",
  "key17": "5dUKF3AmK9RUxbjLBtvHo2W2RzPPoQw9n5yYU4DHxbYskcHN8VCLqUadU8mtdpxfrzgMzYb4gAN2wLhmbqeVxZ8K",
  "key18": "2xde2SJyYYtx9XWCwJw8LzrvWCnX6XPVnvAsURGzQ6ffWMBerXBbY6mWH4tShoTuCBUj2xMuGpczvB9K4qfUD1uD",
  "key19": "2SCq59hCvwW5QAKrAR8G2z82AE6oaxuBuChSFTj6GR9oTVRdduiXDZiiygVf5bAfLb2h248DK6hdLetdbQ8wuP89",
  "key20": "7VEnTnWCNJGVLznPDW42KoD3Ex2SGJHHqW3Wj3Bo75myMDgGT9so8uxiYE2E6yNnLnJ4Cqg31eAWgtaf6S8qw45",
  "key21": "5bMvHz2mAxpp2cMgofkqFsq2eMeDvR2VikYg4cXvBAqy8A5oc5K35f1fKo9bzUpcbiApiNuSRbUHnqQ1sCUuNaXK",
  "key22": "4g1YJRSNvN5rW4xCP8tco88d2Lumyct9bzuYPAf6pvf5zG5sruvxoxc1PRB76ZvANH6tV6asLqhzxP9q8F7TEHMF",
  "key23": "2mZT7jx1hBNbsuvmNuXZjfa9kj8NmgsVWVg9FCKVeTsajBtfRf8hKDQCg4FRY9vd2fLbQUqaSdyF1wvZH5b3FGJJ",
  "key24": "r5Eb5gTeYMdWfnn2c21B3LTfZHc6xKQniByXuNvUZBZEGKj6f6LU63mZaYKeH2cqqBHsjWFN8dBcs5dDkgy4XkY",
  "key25": "3wpMA7ezQ6e3iJmn5WRbkb5dCrxSpuufj75rseLA2mJHsSegDxibqNVVumXsv88h2r1KDJCoi3hfNf4HhwV4u3tx",
  "key26": "21rfbC3JCGg45AT1cn7psthpdYKo62rEfvYL4HU3mxpRxS9sPoZVwgQ8eZfk2Duc26w4jzZBkauGUuhps7ijRhoc",
  "key27": "BXqSwgcesABWEV1UsRWujSVjNYxfZjyf59nDvUV6eKJFaqh1dUR7yKjJAVmk1b4tevYh29Qnepk5Sjao48tDP3m",
  "key28": "2L6kXyk8Uo6mpyxwj8KBBYMdNoHjAH7fhgH7Cc2CGm4742iGxvapp7EJGs2eS68dfGEFwmn6pMBusQSQQi95npgC",
  "key29": "bF1dHqpiaVEV3bxjcfpTNTYD91fB62MkakPvu38ncQQaaED4mcBwjNBh8Dg7yHBpVnAJDePAU4g7UKgoDJv8SGo",
  "key30": "57xcqVzkpcVSjs5YMoqzqv2p1TwwX4w4PQaCbZZkZVXmqz7AUYLbrCwT1SssvA139SSxPMWDh9hAK8bJmvfe1CJp",
  "key31": "5S7ViB1dG1N8xt6tyxKUAiUQhestTr2gjKfDj28sdDXq8Wsjb28bodC9ZPC2J3XJxmeiFxxT4nWNqUkZQkemeMzj",
  "key32": "8NmSFMoYbmt49nxW9uHHSCDpExq49Nf9bJ1qVCkPTzotfhBRTJP7r1zTrWi5A1ZumtD1xoPkkrxsMmdhfj5WLVx",
  "key33": "5xiv4ScWrmuNZj2EL91W9uk513KVP9t7pwbFCfqfA2L1k75LCvRbt6j33r7PCNCcrt9FyFEmxQTB1svkDk7MT64q",
  "key34": "3FUYCbxd2d4XPNR1xYpbzGjkACCejD7F84aRvhaaAFBFirhvoG6iwGYjasXDnt8uUjyaqCmemnu21EDrrJsnXujA",
  "key35": "44S5vhZRcbQ9TagN7CEJsP8Kw8oSMLpUU3DL28KuWCuuauoTBzxoLZSNQ5zXcpNfaHLA8NTiDkCdC56HARqJEwdG",
  "key36": "RZWZtqSyXoeutTP45uuaRaoxeaPiAKzdXYNmoEHhh24tC5gMnQ4dAqRY8HJHHnPKnrhPNodDXahz2E8uXcDtS8s",
  "key37": "4aPLn59cg9SWUBFkr7ExxhhZPAhqWC1G46khJa5ohm7Mx3L8q6PfSWVWXj1BvfrieCfvZdkY6vprnSzbF99j59mN",
  "key38": "3jNSA7qHcDMVc4gkkW9bFaNka8aWqa5kT33vG7ubp7JHLDMqsHTokX2GcD6Kvp4iDRxkQa4CagGhazChyyJWetA2",
  "key39": "4J7s7ZCqFbM3nCkWjdraNiq5VTpKyvjH2t6YCXu9uUqeUKNMrDPpPry4q9uXAutxdnQbtpSwDEURPPzDk11Sfsjt",
  "key40": "4bE7Ey9NT9vdmx2eFvWJyGNiKM2C3VHPJqz99WZ8XWBneuuRgGPmLzj29kXZKpKHbvLMwDER5MourMTLGQcHkXuT",
  "key41": "4h6YHZTZNSotoAsvavWxCYfVnGKTrAxmqYDMSWy8W8RnXS8dqF5NPzwxCfNx9bWageYcm3LKdvA2QYNw3GN6yP9h",
  "key42": "FMGfqPVBWzMw2JYG4cgqubDL84j3pRd9nudygDpgncuPEfTpWzdjdWx5JoLfcAzW9neM74mRYTRUicgWVXgRP5i",
  "key43": "q3s3QWAkf8wvbJyjKQCeBGSkVda4LjBK9MKksxjs75aFnmhWsPVoDhYjzqHSdZ26Dz8idBhGMygrGjVoFQgBbWg",
  "key44": "5SYtNNex8ZvmLcAYW8ugeHDnnphfm1kQ6sAtfRKphXGcZEEEoG43pPtiqDmWEkoJ2S7CBVeTuZw6W4yxhN9Eci2T",
  "key45": "46X7fahnxQdhduncXCbZ8atP3YLDwFqZxjh2T8fo4FxpRa7BM3htDLvukeabudFFgvsSA4xQeBX7qs1uMbS16asa",
  "key46": "4dWhtTEW4b8vYEZ1DLgxSNcrvo85AMxiHeJkLWsbLo4irZT8NEjgNGx8vLQCdxbXpoCkGHxTyaGwXXNccYwusRHd",
  "key47": "35gTRLNHY5bWLB5JXKrXQdKKgxXBTCcq41tBnYhJPzhFRUb6XmSP5YMKFvBFL9KmHk12wd8RPfEGhGeZpzfdxbgs",
  "key48": "5cQbs9Umh2PWEBe4JbVMLioAFw7dRFZJopQjYT4eZxDmtCzCcuJodh2mvwRdWdWWnC4qMw1udrkRFUAq44xbjZXH"
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
