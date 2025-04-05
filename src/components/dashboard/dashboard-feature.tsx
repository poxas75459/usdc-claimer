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
    "2SRHMTaTMAio4ZZsZTEt6xmB8USvtqXZc7rdrvEjMKtAsqU54JTYo2vC44ms9smDzGtc3N1M4Mxm4rHW8TBDZc1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62izS3CYrjuwqcgU2zD2j8RHm67TTXSW2fYkH4SKzzWoMF27Ub8LYyrXSvmHFR4ZCpkvUqBcXuZ6hxctinbYPTGW",
  "key1": "5uz81jvfqNZMnxnuv8chkXNyzEbEEtm8M5BvbZz82WxQKDb5kXR3jFssFRcGfWd7Z6HhCJQZB3cmaq27arSRHPGr",
  "key2": "4DAbqebHH6q7gwx4oypENqxVhChJgcqZNV3d5PywYL28En34RzEL661YfJKeXrZgawi3MQh3KUNUNkMU4WTVrhSB",
  "key3": "tWoEFpKZ4oSzyyXFfFPvsJZWqQyVbxLYtLVCZBTzVNJiEj3r98MwhRBEk5qTWVqihv9WuTkTyAhrL3CoSh5ZCTT",
  "key4": "ivVyDJUgm2A5ngBhmVccY5vttdhz1tHt5jmRkodYBT5u6fyzouEx1rajcUjw7fjWDhf6ZZh8gBVRRVgGb12WEZE",
  "key5": "zzYMxUX1dxmPm77R5VpLeMexKcnHWzC9btfuUk8xrtjVFSUUHH817V2zX75Eadqc27Y2tUe9S2ULFnWvTj81doV",
  "key6": "3irQQ2g1rrSCgmin1jsy7cyGsfqASrkp3CuERuqvtKY1cgdGBohBJakom5hyKcXkkDoVNekTpL4JdGqLjkjgBhQD",
  "key7": "4MEjKHq25SbBWvU4bCYNVAehg6JuEx7SvVwmaa2phmtkfcfpdN2kRVJzr5E6ettTr6wjQjfryfZ3L6MYc5J3ZhE",
  "key8": "LQy8Ja7fvE8KaGrddoorScwXhBmb9X89PjBCHxcToHSZgKx2KTs9FcUwoVeAWRKN3MbQDWJrzwUDZR1hPvqqmfE",
  "key9": "5wS3sywHRcaPCpfeStiKjkZoPdmBL2wCArrfUUYxh2n2izQYLob31oNek2sgwJfQRVh1Wryg5ndqWUTH4V3Laycr",
  "key10": "5Q4hcHMSVmC82RMxgNAXoQ35sygoUAb1QzMRQicrATTx8pA2LTqkfdRvCAKcYfxZqCQRPLyLnViTAJ5QpGmA999e",
  "key11": "3JGehsjKewt7K42KzQh2b7edrrkUmCFQ7CP1E27M8uN7LybYR5qobuw2gmasUQyTKFHqNiNBEWLkUJ4aWtsx45Y3",
  "key12": "3HEDAMEe9qdEpxKeiKUr7oZSvJMPV5x3EgUQL6tDScSbPWwSohqznFLBWxtQLoQdDyefB4Yan1K4YbcHNvJDyLHy",
  "key13": "yT4VEinByYo42y2a3vg8YD9BEQPcJT2TQujw3fJRwgPXNLTwo35gkDmMKPh8ouczzENc1f8E4fE1XcXKU4DVfYk",
  "key14": "vedwuyjeZiS7hMWTT61GwWcQtKieTccX5SfhU8rLbsijrhZ4KH6xu7jypcMUExTNYjD66PjG1sJDytE8A7BBdhi",
  "key15": "4D8BfxgcnyPeZnz8CVqbabdZdmcAf9Pjric1GWJBWaH9CFGVVvg7qdPFJm7KAANAhxQUfSezhXsCfC5xZAESsbcV",
  "key16": "5jLwjtVtdMuXW5tHBiSyw8doaFZb3sT4M86LcchdFad9x3tLVykhLnFDV5DHD41gw3sVZ4YYiByVg5QVhLMif1Nz",
  "key17": "3UHX9NC17SgTwtzT9NBvFX3rMBuoHqU9uH8ZadcyLy3n4Du2Ao8q2MAaztydomW6yrmzUtRszFF6fyrWhJgZQyga",
  "key18": "3DUUJdty811GP367cZaYcoYdbin7RURTAXGcb8VtSgWMxd7yzEdGY1D3TzZqv9zicTLLADfuW72XruuJ7iUfUzG2",
  "key19": "3mzbyGh9csj93Z4USn2GVch8dFqLAneMRGnkkUjC2GyuWV8wJyNa8x6JB8i476SzG69SzoZ9XYn5JjFHXH1eki1c",
  "key20": "4Pws61JYWWJWhs4BTHtLMMST6pr5V7rDHECUMQgzpCiEdudYKYddkrwsxaXGGSRbUrhTQqAmPuYfDgaDptmaKhVh",
  "key21": "2XrUr4orG16fMHy7EWUpCb3AdCh7qD98yX54vY5hrDSwWsmqVogjvv4uv22y4JqPGvGvqhsGorneAVKPQMyviKqv",
  "key22": "5EiGFf7HT3poNLhgAkYuyrJBCqkE1hDNnCbVjzjui2GDakdhiJPW7PbSynAQEYT4UWWFs5tESGpKLDEvCRCXTHAF",
  "key23": "bxu79bGfEHNGn3AzC1i9o4JufRUz1CPpvp69YiGqyVoy9LzmY4WB1vGuwkdQBRPRazkyD5SVq2GK8BBxw3KNRxH",
  "key24": "4AS3JdpBg5t46BXCpQN9oWgfB1oPWVnTLwmp2BM2ZFwoNcATQW7BYVQHTBXLjxEb4he5eNjnWMXVWHGGirDQEb6b",
  "key25": "4SuhG9vRZeAGJTbDECFXeDQnrvvUudU49qPn5wNS9yHKB6fyb1Sf6Cf5qor6q4Kc5vLEj2ACWriosnu3qUNXZCmw",
  "key26": "4ykmKmyNHc5Y56c8Ue4JUKH5BSX93UU67S2zjGDBjpoozFHKyJa9VaM4BuL8yUjDSb9cD7tGLpc92Jg59S1Upu1Y",
  "key27": "2683NQuauh2L6AiAt4tNHCsSE1TAMqkfk9fWHxgTSwoLg37GVdGdk4T4VM17X1DAMp1UBPMicc6x9QecfjmkvnxN",
  "key28": "oSBMD5w8qGDDgXkwAuC2KkpuDDbJYE2t5JtqeKsgbkpe2odHq98psJpUFj1gAjbbp7Qhro7rdRo67qPaWB81JEM",
  "key29": "Tb1Km77ZCWVPEiSUiLSHqRuCXg1H4RDcJ5BfBAQ1tSXeGEfzLmo5hrGRhSR38T8BRBwLjQt8GNZEjNZpkcTnNE6",
  "key30": "rdV62cW4ugPZfYjSg3QNzNv8mQdfJrpGHckN7gV9DVeLxoFkJ9aNYWy426VPNAcRnmti8G6sid6Lx557GN1gE12",
  "key31": "2CVDFDB3ErL55P4bAkoazRT8D29EJvVghgNBN4kwdTPfYodyBX81RSgVExve85yoQP9BvZaF5hvrAepBnFA1HpQX",
  "key32": "k17Zbz5GEAc4YKVFPyEqtXJGrcYr7cqJv4GfrvTMpWcDL8584mRJA9vyJCvepskWtbFYDKFcGavqqHtQEor3PyA",
  "key33": "jLuSnVNwxHwDxo2LVwgQ9QJ4iindtnamndpqFZyuJRY4vRLJ3vqjTYfqd54He8H4wavXvuTxhVVaAAEL2K2G6mk",
  "key34": "2kQkUAmoa1zYGW9DACdD1AvHXH2HHKhMHubvkmpkxook9YT32mm97RmtCq1VGt7NpP1gHeafmMZyABLNqPJFXUE7",
  "key35": "2bK39ehr3cBZzsJaM28ymWxFbP2fXqSr8YbreE3F1McFoFQ2XUuHnqVDmnGQfQXo7J2L4vN4PavHUF4fbp4vey6S",
  "key36": "5T92FwxZaPioagZzKW4G47WjtqQeNktm4S8eFdDeEb57DPpXF6jkFUGdABrUKfaHpofg9qGr97gqxP5qRTAr4N5Y",
  "key37": "WFgyo1GNHMpB1LW6bxc13URHM887u9eZKr2bw7jaQ41D51UdBhUndTh1yFVhf1jCxtyu3vSWVn19WUM1Y1JbZwi",
  "key38": "427rZKUyK57d4nzDcwgBFVo4CJfDi1TsosgZKUdfGk6UDm8wkYDMPsrKaw3LobXNWfP7Q5ufZTK3wu1715Kji1XR",
  "key39": "5JRGCfhPrHRv84UBeSinEnBHjGuKLWsLjgef5foXhVQ7Koc2hofVSdD3HhKq7BPMztFmYTW14wASwuhx7zP1fFAk"
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
