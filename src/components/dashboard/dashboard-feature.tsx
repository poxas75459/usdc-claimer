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
    "3cXhy1sqnN8KXanEG5ZJj34BigCfE7GmHD7uBPCCTcipneJcrSPPxxKMEMCxyaG7aUomV4DwxwfmUqK6rWqwZKSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ESpGQGv95sJmM9ZCcCSi4JBKXojo4DZZx9oafmmSroA576BoePNPcWhEnwP4UvwohPu4g8moLPEtLmB69oBogB",
  "key1": "56Ur4BbeTEuWqsvZBPw18qsqmbYy9268JDDRpib3bgQvbGB3NqSK98vLHdLANi71HGkUe2snKuSvrgjfEH2cKYj3",
  "key2": "RLAa4Py5eKWhXnG965RMCmDPp5aENcJNr41BTh4twWELuyJ2P58YdJ3xLVSsyZCQziE4U92D9s42sqE2LH8zMcH",
  "key3": "PmtANUwnRhycBxEvjEZpm3pYp4qPaGsgkxxw4c1zuBgKxFqi28Xtid6UKeD6wqicg7bzKQLzWSr8MBWQ8arU5Lg",
  "key4": "3x7NSEqMa9dr84z51C1ikjLDvmJSHWZQSNTYCVwHknmSQK5pr61DC96freuRV637SEftUqusME7pE6yaPz7xuXoG",
  "key5": "4NUWMRFcC143s8G3SXDL8ffJYv9ZAwKBpypTz1TiKE7JQW7mYagZPGPU9MSjSdzHmc23gDvozSf4TL7ePhBa9odb",
  "key6": "35iTEeS2MAhoNrp3q7Vns5iJuyMxiPiLtmj1uHQkWGFtrtrd5yQ5TLFFsFzmtU1zwEPKqGbWbJPiur6WsNrRroFB",
  "key7": "3Tvc1UgMm9Ye5ke1n5UJgMcxbvSib9SSAKryeHLTERurKxVJN2HqU5FuJTvXHmgTKiMyPYKhyYybea1UthvC9uxw",
  "key8": "4qzuYZuoXyP7qge5Tuvm3JbtRW4ZeL9kUoqMqGDjcdjbusau5imSCBqqWXJxo5xLq8Y5HWaeDNq5x2HvDi7wy5zJ",
  "key9": "3MrpFMzvvhpWQMDYwFXD9LHV9gcoYX3MFC7exfKXUncEpcbjcjBko1qSpEMbFGfNT9HuUYycz4rKoHDrABG1Remr",
  "key10": "2v9fiLrkXhUSaow7WJx9HYize9aHcddzVfQjNraZsuwkfmzD1kFeFBqYxicqaP4vuGCdUskS6Y4ddWSqix7C2K9p",
  "key11": "5NqHqWJFP7NPxAsnry5bXhTMcdMgX2DNZb5wzZJsXueU56quvceSaCNkDgU9wmsjSLoXDngR3N8omp9zDGQ61Upp",
  "key12": "5WGjcbB11RkcswMCbGcWCXL82AMWj1uMBjYTv96MHRVCuzQTdb65f75gu9yMw6g9pAMStj4ZL1axje4ETdMgjBDA",
  "key13": "3RCkSfiviNRqBoV4DmZkWRwCzhyqVEQsRWuzV6H4MwwRbASg9M27cZxUMXK3Ptq5uqTc8fWj2n4hF1yGCjrWPd38",
  "key14": "2JLxBpQ9DhZ8fPcUfdNxH1tbN6UbaeZfgv3gr5KQQ3L9o5boLYnuZeLhzXYTrgF7LsTHZJvfdyr8yzAodSBFvgYe",
  "key15": "5UK7cqKvRTJ3kVGLFRKdsPZyP3ZmGixjHPR5VmV9Z3Ms8Fn1FDHGub9smkkYdLEVXEmLMZWXwUEA8SosPLFftyMb",
  "key16": "2t29jCfJU4C3vZefR19ENAjHT6RVRFBvW6wQXxjBFgsdqj9d2nGZersBLy5gkDnH8EBf8tfubWuuSAvx8spwmMGV",
  "key17": "2QWkj4QaiBgTUWNXpJQTzarNpQFwrYVnMHNvrvCVuNAStGScq44AAGj3j7PCbyke11FQDEY3ZLnUHXiXpGBxJqTo",
  "key18": "3LWD7Q1Gce2yhSjrYrR5BFZsZBbTzuzAamati3mwujtYeEzQ1BNTTabMnc4oA9HyvsPWfC464kHMVEh8M3WaaEZM",
  "key19": "4aiyRnt6X3mkqqt9qLCKZHY4mVfqV9urf8Fd7AN57TuUCotQxga5PXcXoNkwW3roDvYcBCZnYcEX7MwRwL64jBDi",
  "key20": "bHFBbyKSxBKFSTnwNaPGgCENdXaxauERokhQNNd1UdF7ZBSAVdh1xShxqeoFFjkRmyufSadRdD3CuiyALisK4zX",
  "key21": "5pHifDC6NyJM56Bd7Dk36m2Z9JMQdqEh6WwBPcSPBz2DipZTBWW8tY6PjmxsQYwVp6MtJU6QMogH5AyuFDiBpWEU",
  "key22": "4eQytJLQ4R5PyPN8wgDWYAx4Vv98b9oUVpvwGurG4hHYgLe8CkTbBDHrZotnriAeY4A2LJqEFg5z9hwrM2oAAJFZ",
  "key23": "38KzVQQdm2zKfVkH7TAFPGRVe7d3PX1E9pNWoaKMhFRSsUWAcmceT2v1FpMaMzLeYYNN235bFFk7rqiCdzQayBW3",
  "key24": "4JuRwNw71qyxcQMeqnnVCE6jFLNPinpLPowJuGYUajTY9uJGtpvJ48ChFdAkFMwje3gAtHaK7PY1LU22zkdprS3y",
  "key25": "4cUJ15Zqh2RCcL3NbTs7Ca3UnKZYzbYPSi5e3B4GYn4rv11XrSSmu3nc4qTiDXrbic5iJqisCgZL5U3vpgWm3Sk3",
  "key26": "3vo2dNyvrZs5SkeqXZwYe4SX7FFoBiN918Btmp5VYAfdAZu1H41thxgPbW7hdp1GWzhJnVwq2ikApW3XdDnvuKgL",
  "key27": "3UkVm1SWA9Gni5SY6jDywowGbPwyhSyqAJYXE5jaiTxF9NADRR6h81FubpR26US4zEuioaYG3ocjwnF8jPs7xL9P",
  "key28": "2AVUacec3YqCVdaRicb662MsQPkaTHerhQxnNwsTtZZuGKDLiQyEF3k5yzwEyhxzuEmYg9BL6WWmeiqU4MKZWcr6",
  "key29": "5MAV3Y3RjSgmGv6eKQTKFhB2bJ6EKykEdkoSHXCxPDG6bXwwxCcj8MjCC38sH8ixuKmJd61UiZ7pMT4uzwn9rw1Z",
  "key30": "2aDogds6tcE5ftcGyQ3YkHjHYupLyNuztLNh9tfLngWTgU9Wq2wpEusHrbNffG8qWPeJvcEFrxWcWK22yjNc4j2W",
  "key31": "HWgRYawpzCA5XqDjbi4sTwQM2eGVRbCHLdnZnpUm3tQ27fXxKcDdg3wA4ViLeRixMtvTuFUpMoSo135c5oyLV9q",
  "key32": "xwuAJMSL4HvZLQataECoFiuyBhTP3oCi67S8oHLojp1upVehvfEq6GxSfA4PpqrU69TNQgG7mPrCaS9oT4WnEmQ",
  "key33": "2D7SZT8fh6JJcQc6YiiZSdt7MLVoJBRjqBK66eGeK7FC9PGgHD1XVnDkqk1MACdBN7gETmgNH11j9KfmEXqrnXxN",
  "key34": "43JRWnvvX7hJ4ogA8oCFRMmfnQhdbTMSYdvSSYUs1pMkzyN2vxDrw2h82jkFzm9zk78eMB8DksMGSLb4NrRhNBqt",
  "key35": "3UFhwi4r3XLGhD4RbsqTepTVzAXnfeBWEddajdDGMPU1wsqvG1k37UvpKBUEZzZGA1qVxFmUi7jhECuXzrxBYrFA",
  "key36": "41WyXeAWMbErphcrRo42yzpLzaj8w65KCCaEUbANskHeACVKEjMFD9PGYkHuGAhgoLGDbnF4WZHWFJBA25ZTovz4",
  "key37": "2n2RLpLTBTFNQDZozKzEfJGxzWLebp6Hgt2kqfw99uXS9XXzyL4i7opjy6w9YJD1CP4YtLedsGBdB7MTrY6Xgvrb",
  "key38": "iCLNoWDoYoaDn1ggadYV4F852z8Ue71puKGbV2QiBiRFQG2iKRrMmBt6DQpsyCwdbQdhpnxgDEX1BAR5BgDvNpE",
  "key39": "3Npp2extDeHekLzPLsYRsvxeEyCfuYJ5b6H6sxTaPGFm4hzAYRJ5ishV9jtUioti3YVuodyhTG1UwUs2oZDxf7zg",
  "key40": "62nh83i62AffNzSwt8XGr1qk2SqSrRZqMmstCmtL9A6gPqzYq1ge6m7XcMzsbr8fh9AfevYyshW4QjCR7QZjMKf4"
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
