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
    "32oURz5rYxPceA8gWQyWRAmjJ3DrB5wcS5k2rFVTaeTcEP9aMFoXQxJvBRKUNbmAvT8qzG3o855QoATakMN4X3Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rzJmf4ZSLeFcFZYY35UKN2QNFy4rP256psk7KihkCyxJJi1s9ZqK9RzVthuLDNpV9YuDWefdfvBs1kcYdKDbpnH",
  "key1": "48Q77urcJPBb2BF3yPTHeKvD3m6Re9LUYz6KJwuyPjbTtyaRGxLRUwSjKDVZR9dsx5BKJ5V4YbbJzjptF4MS7fj3",
  "key2": "5Mj9k9ktAqaMtPfQYPHrgL42QZQJP3wG3BfdwVRtxyZQQ71RNRr5DvBdZUU7GiVxS1MBPmxpYTFBkFYuTP23NLZa",
  "key3": "5RdU3inASiffBxQwgnQAppfhtVUeUdM6mygjYbjuwGwJycsiGGYDxxgqCiXqfhpNNTJ5cNgihuYZyEq9xZrCYfss",
  "key4": "5jJAf8FYWR77mbPhau2MsnmzUvvcU6TkktSFCMvgxSBz9xfwyoyZEw2EXH1zmiWhXYxiTxw7RJcksbxFoWjJQxvA",
  "key5": "5eLkNbPsNSD9Bo5jaULJD3UPCYgMk2tGHFZxyHHdrYT1qkswpjz3iCGB5ocuJ3zinLBf4bJgAiNvbVcGf2NDXT8H",
  "key6": "4jx9VMyLNsXTDtX92p8uMnBar1V1wD6pudQfKKPbUXrVWK1ABneSdu91Ynht4aR7BQg3hAKoh3HedhCd6dV3LFc2",
  "key7": "62684q23CCH2hbNXGFSGWnKgKeMW6du4YfYQCHsxqrbGwpbLJyoiTjfPLwLndse6kAN8unoDdwgM9xuayT5YoJfk",
  "key8": "3Vm3v5kvf9JcnkAJBw3Q1rFLiS4WBAFdNAHrrUgw2SgCywvbnV6pbzRqEHpricsKGxBMW229yjmH5EqEFk12yxhk",
  "key9": "4hPBz6ZXGbh64Rq41VcCWvEgfEXeVRNFfmVxMtownkmcY9nXQ8ZKpdGMHn7Y7rxS36gyLZXfYNrBZk7kFj75EirY",
  "key10": "4q2fKvmHHExQ2BToKYtjG8RgU8M7XzLky5bZZNfHHRrxAToFyDBHzvCZk74n9QmzSWn67925P3xPJF211CGEkzek",
  "key11": "De61wwnyGQZysaVVoLxNVmjeiGdJd4AwYeeAC3bTHppKaEDKTq73iusHwwZeEEt7mqVkmhekGuTaLXeBT7Z7u1g",
  "key12": "2vbVjTCqsycmbDwQRiEBVDY3TrZsgzLH2Ho6KXFy8B15NwJDtwx9NnQKke8VbrMakVngshHbKXwdxBU1mkHRxpby",
  "key13": "4PomVxKDhjAYA7vML6TfF4iXo8v6iSZPky8MMLQSQ2FLFG4YQ7sEAPhDMeZoGnLEqKEJ8FBDyV7XaFMQGToYgURX",
  "key14": "66eoK1KiKhbBbwiU6fAT5hPu1E9jLnA3CA6wPq4s9uj5XbrQZbgakLgTAguGmoQump1acvKyG6TS3QJNqsEYPY4P",
  "key15": "2CBUram7afWZHNGA9DdZhnsEngayu9TVHf3CuAQTVYwMPuyE5Vj6rNxk7hrNdSZtG3UAV2Q22TTUkDK6pqPG5acR",
  "key16": "52PVWDzfbrGrqY6XZ5YtKRvsou1hUTag7TiZpdbhXzct9ouGsy45UDJFftimrQ84UoLHr9tmVunx6wsNPZvdX7sW",
  "key17": "5RQT4KfJLgMNYhX2H89y4gPQRk5VuZmZkzfHJUCXefD7iwG2wfrFJGS6s33rDHVyvq6T3hBokNzR5kdUWSQSUaaV",
  "key18": "Z5x2h5kmXL1c6ZKyGtJrn46T5pFLaPWouHhvLqJ2cBjEqNb5EGBFNvBEe8PFwzvhqqiaPzKk7LQauPMcN5xqPup",
  "key19": "4YGY3savfNJUUSWYXnArbGTVfM1YrAn4zoE9Mx4cQbuDATT8HdMxyH9pgrjcHz16Xkcft5y1VeN4QJeHSrnvQHqF",
  "key20": "2oVSsxFdAdNW12w8u8PaThYDaePQyvVHSVfyN7iHkBL7NsFrmxQxsQUnDkFYFkrrV3FnTRq5ZmznFsY6D9uGKonJ",
  "key21": "5p3QV3J7jjA9TF1tkVF6k8hvcowcC62UrVew3spmwc3bk7Un4FMZYffPQ1hpeiQEktqzhjXmaogUjaEY6trcXeaX",
  "key22": "3NowuSLzMeTTfbfr8ktk4MVwiZBu6DdRqAByTuSp5RnFNwf2qG4LVR7F1jM72Z9EdtEwKXWGapfiUBNUy6kYan5o",
  "key23": "5YDyRxnhswPWSUW6dAspuFro3ZMmGDCUvhhizaKw5rCxeXRSmuPWXA7KWyNdJfTZ4SxM5EsYhdLWBcwAadH9PibK",
  "key24": "2wbEvZvB7gN8UHDefttnfLxgwELMEmiYBSAWXQKqUNg4vqeznvroS9uLGVsEVXjFquD2jocnk8ZkoSGq25jn7z9y",
  "key25": "2uAw9GaTnGGDzkpogZxWcsCLW74CmNVPcGcNds7t4jUYjufc6QqQM2e3L3QELCPSWzxiP5g6yKHFjYSDnvHHeRSG",
  "key26": "5ohJ2e8tUUTcberfqnhxhR5mw2nT65fSavG7vef3jd2vSYcx98M3tSeDsCW4xNdXqvE5AjBUF3ni2BKdxHd3vpE2",
  "key27": "38EaV2C1yXuzhtqZJyKiQ8kY3omRuheFXDM75QKgDwoergfKgsgrXxhGug8jZnf7tQauntVQu8D6B8iC6x89qhNK",
  "key28": "25yxJzBViU6eYh15FhiwQYHuNR7HpCAiPNscinqLePH8vMM8zjtoQseBNgxmk48NqxCAifxFv9m7wWFiTMchxisA",
  "key29": "4r2z7tQEoMrF8o216mwcV1EAtTJCCKsNgV2ECBvNxCrbPjcuCtzqhA1NCi7cBi4k3YxqfujqUtYfcXMsAGfLBXyG",
  "key30": "7HQKk52TgBE5CZUX3GBba15V1tUGYCcrCEvLv4qR2whGGHSW9FwFGidNozWrSDG2iA257qeMXSyeb5yAYVUZVqc",
  "key31": "4NaFAg1ZfhMjtjKCFqydfDa7rLgDAdeHemrB6G1RRwBFdmWiP5QwCsvnJ9jeyc3NJrWL4PbYhN79L2Hcy8erSVm3",
  "key32": "nKW8izPxvuvg2RWSa4P5t5wC9bVvMf6gT8CwFe1SntWP4NobMdRyPJ9NR8afksZFP3PuxpBwWbCMQAGyiunpvof",
  "key33": "2XaPRwZbd1PKbozXiv5KKx6mUBZyD4xDpBrafswveZDAFiErMS647Whg6J7gYmBhWVPX1eHVdjfFkEbcmagWzaLx",
  "key34": "cqMQ3ne8wBubtwUSbe6utdJMwaswZ6gTmR9NWNZjcB7ry2dKfCUiFDT5nDEVexTF2FveRRdsR6V29R7UERPEy6o",
  "key35": "5f8nMJMVK5ASb3wQUYn7ejjdM2yPDLCU2t1x93nSVNxMwPu9qeiH6qymzQQ52oX2wSneiwJwHmgFarmCobVJNFDZ",
  "key36": "5y41obokibXnUyWbC2p9xrUq6X7jyWKByeihtkEJ7vscMidBpW3Mqu4WycVPpoNTJeiamdt6F3eDU3jSqcDyg3Z6",
  "key37": "5693KaPf4sURLtyNkH42Nrn67poDoXeCfkGy5K4rU8D4pWsYcUeAVLqnpyxrgkKXG4T8qMNXexvih8pH6gEY2JKY",
  "key38": "X9Qf4D3T5H4gWFWZevHbfuFuPaEvZNJB4nP2ZUQycGRaXuRSy5U6J37cFc2Z4782AcEQUwBTxAgbfuyGddHN9p4",
  "key39": "4oYUxkufLBdmXmwYt7ykTrnCywt9t71vuyadTqhYgbBu71xiHLqRiJuH9PeZH6psNsvdnUmaST84Gb9GNw7p6aVW",
  "key40": "3WqU7uNCLBQHkZpjhvvgi7ScLyGYQFWogu6EvunJrxmhnH8ojPL7MyyZJXA969MqVXwuFn8TnfCEsVYeqtiFAEek"
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
