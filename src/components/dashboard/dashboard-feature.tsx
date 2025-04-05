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
    "5xHRC27WPGxXhwTxTordjFkDPZh8PX2fW3w3uXyTma9WTpdBbT7HhMB1qk3y8AB4dpokqpzA1f1sam4BHi7W5GfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GyonbCGnb8ZTDG8AcGLWM28RU5ddXYqJY78QtEaCyHpvZjaHaeZQYE9MUkxAYnYFU2tGx5ohjaQXvUZuWFjcMJz",
  "key1": "4ZNfQEih35oESHJy4GyLXfLvXzh7N3KbqyPghgRTbYQ18kNTHnrkHBFAAQssufvGUHocxv7YVvFRh6oHZyZK3jum",
  "key2": "uQvqHsxcZonq6m7PE5vdKB18oEpMwaRkKEBaQnab9MZRW4gFjpdpajm65maV1EozU7hJ8wEgGaVnidETJs8Zjhv",
  "key3": "4PBtePfqywJEYemhwCrn7WQf8zw8GswMB7qgNRmHP1skiV8j3hYL47TjtDi123PHxBurj1cu4PwGRqMHCCo2CTJg",
  "key4": "4Hf16DjELb46ixdiZUjCSvLun11vNSb6QZUQCdjD33nDW63LSkHginEnXEu6uoGHBVMLKE94Q81dM39XGMK5pazK",
  "key5": "3NtpqSgkwmJo2VKjezbtRJwqfTVgXa8akM4sTfVmG5CrNYwyee2fmMBQugoYx94jxp7VNKr4QxvCoNH11nzzf3op",
  "key6": "2febuQxL1uma29QhqkXBRV1mHY5umzWdtTgiqjTWUYLaRcnSuGMQrD7BFWvuZyefkuHMaSrLUB5SVvbiaUMuBLhN",
  "key7": "5hfYTaS9aLjUfrk3i9EA7rrgmLZwPvhnxi1itdnSmTbTjEL4MCBVLV576m1Fb6KqRu1bUyMGzVp5WKekUszXYQV5",
  "key8": "2Np661osiMC7GCcdNGsCYeeyAGGRPHARXNybJ2kYxGwbxebSKEZnwSjZqXMbzeu9KxdmfUogReyZZbT4LrqJK5Tn",
  "key9": "YagUsRo8FCE8RjQEt81iBKRxqdy27JVmsjCWsKoSr7vPQ2Suqpgtq99BiD6ypFqJfdaAndhN9qQLgvRnVtYGNxC",
  "key10": "22nUzqThtbnNBrcxkBEz6viRTbzjCV9PgKp5V9D1BrxwB8cLuDXov6RFxUQ4aYsHpyiRdJY2ajjtQRFTthyQyvza",
  "key11": "36KzP6UJ7fTGJtXFuDaijuDLjjnNu1vRdRfyhraR4M2coayxLyrn6t6NpNkwgvn8jLwdZFicUudWyBb4YucVPaas",
  "key12": "2ShQbcDVPX4cayKkvNZ8dBfVQsTw4KZ6DrVLQ6CSXi1y2kS4NmN94C8E6kzmmecxrhxfnwFj45EtjKkrLUHWZ61J",
  "key13": "cWU6yJM97KGzsXc1GDnVgX3acKsCJQgYy8Tc9YW7SATkHSCpAQeRe81xwPjEZyf27XdMtK5ntrmP2okYaHxjf45",
  "key14": "5wPZZPwGrY4ivZpBepG8q73sEBmBXCt1nNC1ixeceyz4UPxdSwPrPhnwuBLnMALYp22PQTE1jov5iJTXZZNd18vf",
  "key15": "59WZYe187rLBmMNQK3yNN6s3hHi6jn1oq1kDk7rYp9yifRYUNAiyU5AAowBzTVeLHRiRb9i6gv5VWeUpezMmprPT",
  "key16": "5UQPMqCkGzDcDstutMSJHG726v8GAT6qmcykz3F6ZLy7YcqaeX4q75dFrZGMjaKhJgzNoLzPVq1mtgU1ygMZDvYJ",
  "key17": "26vdVG94JEQ3NsuRvWxtAah65Zu63TSzjThTHbAgyy2G9n7eGNk2Cco4NmenMQHQLEfNXp87wA4fYE68ZoS1g63n",
  "key18": "5vdeqv7sKoiWY4ctnVcNHYVEFVtARjY4UBaQJBTz3B1hQv6SFzofW6BwtR1ZCYcyzSAo8HVFGbjfA6BB2s7gZnKu",
  "key19": "4N6PHyMmxT8Fo9H1brhSWiycTocp8KzXY81qK8UQKxWUretYDtBAmQMJFH2D5pCsTqdJaW2hTEfefc3amzskrBYm",
  "key20": "ivBfFHGbz23rk1FUWweKBzidAdxxNCAK6BATDqR9Z9jtV8q2HEJjCk2S8kEEfW94iSw9S3HxRVH33nUG1cZYWKX",
  "key21": "5iko48qfdXVR5Lh2S1KAti8p4rZVDFp7xG2vrctwAhVNZJZLggW5NVBasGquUdKK5nfywGztke9DTTUiVCpNoxe",
  "key22": "3gbLuzz4QeXN443Kjs3M8n6DHCEYw4yq3WLaNRXfJuiK11LoyRjvuJACkJvfCa7beoGq9zeZY3c8PcfWu5WFKe65",
  "key23": "e4iyuKXgEaPLsYuK4oxLoTGURATjZTbt6y6seqrFCZYuNbyELeGuzELo8cf9XEMD9ZDkMdhu6gNQbFEF5WdUVsN",
  "key24": "5usMZXKMFtMKug2wGzmHNHiiHK6uS5p95f4RoD6hd54G65MngNVx2NUiMvJdUMh6qFyYdRP1CjaPTuuh5QM1gH8X",
  "key25": "3atGDJS8CUgZvQzCoAkJdZ9FUkpXzdmUYWfubhqTE6MMnKURPQAfhruaVSY46QHtfHnKCu1bMuueZrPKrHfqtmmB",
  "key26": "4QeLBMGQKrszVjBWXSJQBXA1JGj99xFC62XHoc3cKvv8EBD3sTjSnhgZuoo4Wd4kwn59BMJzNhGaKkVQfux9sRgq",
  "key27": "vEqHo66G8LRMcoThwdmDHwH3GzbobySEVvF4QLxRyRM1cdbMNz3N3CK5NbBrjP8j5DMrzZ8wVd6vYKVZoFRfpz5",
  "key28": "2JzBS495C6YNBoGwnx6WETFq4GJPH6Gxra4Wg9SZ4HDVbYfNA9UoCVjcSV2mpav5XkQViCc4z7R1eWMo8K8MJVaM",
  "key29": "62wccf1KtbSoHVQeBq6N2iz47W4dfokMRUC9CioUEPWoQaJJFKsC5a4fcStpLANkPkKD1PvBurpwg9atcC132A55",
  "key30": "4Cj9Jb4jhQ9YEES7n7di85FbmfQnvxG9jbam8jLVsNdQu2DTf2vpxksG58ndNyQREToJriyDf1o4zSGWCKukJHJv",
  "key31": "2WsqfmSSDNRHiPVkGazLtFf8H9ZDKNrJkvZSqaj5sJF7tt2MD2HAooKKS3kjm9ZJHLF4SW5RJ78FWjTKEqdhGWvk",
  "key32": "2VoXokMHEbC41eHHoooAs8XL3czv1cJYAZvRxegAAhzAV6MA3xGKtR1DHxKYW7h3ELhMAKQhYLBp5ob9XddxKdWs",
  "key33": "3CP2csyoXkromxqDET2hD3BhxEx8r5ynt6HFTBPiTmzjUvWvr7YtsJv4V9uugwFsyuyWfcNR12XzqP6eJYoSoEw7",
  "key34": "jxthPTZTmvJTeDVCzMExyomdPEGaoEdxpPrAE6nHodFGkEYJdFZWxYuba5t71ChMu5A29yH9z8n7YoeHFNCzRch",
  "key35": "W89xMmggxxwSTUKe6zX5YhJocyuA2eRJdvBskmqVX58BQFZ99smk5ByrV7vzx3bRKYuSgu4juuzFLkQpwBELKpa"
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
