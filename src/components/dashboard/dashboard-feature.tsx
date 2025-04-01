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
    "3cuwbHhGvER9beg47sDeXsX8yHCzHF2HZSzJ4X2QkYn5gXj5uKVo5WYkC2s8Q3wGtCnUkLyH5rPTbMC9744qakak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ct88UWF3vvVPCymdjwt4mfrWAtHJPzQHJGWV6zwN1aKn8V8ZUerDXoqpvkoZfVQ3LtwRz4Gs4LQNjTBB6FXzpU1",
  "key1": "ggMC4TD9aUiwRqy1nwZLcncVraSXffmnCPCfZAeqq4VpdDrm2VRv1S9bQsqbabNg3AKTrCgsYsfgzqL5ACCFUPE",
  "key2": "5gdC1j1tS5U1snMxsX81icjkqMWmXF4ENxkvY9VxsqpuQSS18RQLPSLKpQ7mRWKGvsDEBdg8ncaec8pBUimPobTy",
  "key3": "63JcFZwb6GLzRCVw5WwdzShapjY64gqpHGZvS1jsYDxkMDSx3JyWSnJB9GPZJvMS2dchVPd9vMVXjz549hV7Jde2",
  "key4": "YTSXSXugbcdEXLGJ3Xf9uQ957K5Kdn5PKajSDBkRNb52q72poMN4snmNZbY1JQg7wz4gWp51nvdLrPjZc8eCsi5",
  "key5": "3G7H2CvqEikFbFchKaoq6JL99BEucCsQ5TFvpXkaKBxH4KjuVopnD1qAfFN9d1bYsqEEF6h785su9Gv6znAnShYn",
  "key6": "5ddNE8WJWUTYLsS6QN9XwYfFMDvsekCyoVop9thwf5soikP6jmL8vm8TrYvtk8CkqF1axmBeiGLeyJuH6Ja7CiBx",
  "key7": "3JbT8wuY5HVCYX77dHofkgd21bB1LJV8qNA2GfouYDq3mXx2sCx5E9zrZioXHve6BgFM4oMgxEPkYncJvxC5uDCU",
  "key8": "5Syf1Y5osDPcs2wB4T4Np1ArPHURef3mEafw8Dyt2KoYW5bdV2qTrRtaJ9XoJ2Y5ZzBwHoYMZn9aXRBdkSe4TAQi",
  "key9": "63GUZjBShZyTk1iExAnbwbpa4jPtkAA78u778EwKisqfFP8aLBTSdfCcNWr7XE7foBWz7YT2EJKHnuUopACL638t",
  "key10": "2tcuzrpcKVUbR1Em4Ziaf7DrVP76wVfU36FFtZJgRTYmryn8xWoGujcmGx3xPx3BotguGe3dAMFTyipkfRhCccDG",
  "key11": "3qwj6Scfxek9M6xSTak7A2SLQ9UChyqCLd7GAY9YqfNWKuWVFGmFyZFqJVdLcbVczjv3TxAZfzs4m7vnhWU6yg7",
  "key12": "6HB41kNUCwq11BBSNrEE8iUu8XgW1pvCmnMcoJBWLNVTLj5h6t2cdMWnLsH1XAZ3HVXSbiHCttQvLLwJVnb5VEh",
  "key13": "4199VYRps5K3rkUAGkueTuc11FjDCVAVB57yJLYTFDQpdMjJCEdRwTitSXnshEcr4Lxvpe1gEGgU8JYnk1n7tZ5Y",
  "key14": "2F3rmJ89KBZDXx3bFNQ4DnehVPvykYL4vT9c8x4Q56h6xXjaPAoeAPMhucVqsjmXiiJHzt7R1MDmNWBZHBDfcMBE",
  "key15": "33PAD9diMT9f3E3VzwYj9o91ZSSK3DiFuvMdcKH23zC1rF9ypKvKeHGLCvYk7dqxwUsB4PzLohJq593QLjF2Ev5F",
  "key16": "39nAQ44nTMkKt1cHXDpBm1XbDyW13b24b7JhC8CmXscMWo5WydDF6JQR8oDGWZiw8GLTd61hzZw7avuMBUx8Si9X",
  "key17": "2vP7J6KMf2KFf4P4WX9xtw3AnGPTAo8jKBS6bJcJUQydB3UuTTMEwoDdruqgZkt4FqGWbe66jKhsn2h72KLkvkwv",
  "key18": "5e7q3b3n7r8YSJMTZwRGNLseJL4LnaenY8m4RWTNwnskf3ERTK878Vfons8FD3Qtin7UFCZQpbvpAvpHi6JuyAxX",
  "key19": "52xnfHNsbE1s7KLhJj2tX1e6YH2fCsgHmDQE375onsX3BgmQ16zgwKJYj6JmMEFS3Lrm2TVN6j5gFfJBQhtYLf9i",
  "key20": "5AtNX5iX1P44ZDVUCGzR2ELHUgza1Ut265Ks7Ldv9YvVHN3gRtV5Gx1ada9dptjY4MT6KPzALawgoYx7Xy2Q7nFP",
  "key21": "2G8GAyLqrx9tnXkZvqrA1ecLBwBFv2cQQuBtVtxGGRKV7ZTQSLYSixNLPi1LYMcScET28nNCpq6or28MHTdPdoav",
  "key22": "358JnKHH3UQbq2qVGba1h9bpFqmb8v9fK92xc3qyFn8JfobtWuSUUKA5ysc3JuJir36w3assvjEdf1BHQp5swSiV",
  "key23": "5hAoHZVczNia43LYmVB9Ts5hZMFJAH8qctB4RUxSDxMVVjkqtoiwxU1KcngiMfuuyW9jEGe9U6omYgj241XMhYGJ",
  "key24": "4T87HFwnpcuh4Dr3AeAHtPg1i3rMv9ngftj8joMrLbqqY3A624EHDsf8doZ3G6GX1q1gJLUYGZQznQKvvyavdwfr",
  "key25": "2Sgg9fbmScKsBTANdB4M948kNKB2kGHFYSQ4yW4XDA4tMiR7VuJJWxmsJB1UZLuaTEBze63DtMSuHrNAoiHXbTw4",
  "key26": "3hyiSZfGeB6CE17euuEKuZWErZG8QHg5aB29cbWUom62j1i738dimPejU81Mt5CtEacRr9bmY3r81oS8xRx5pRut",
  "key27": "3XYcX3G8QJQSTGNXL8VZvcxguFoQMxNJhF1bp7A2pQ8pXeH6AHC2bkuhVSjfBdnts31JDoDeMp9L6H3cQNBgoEyh",
  "key28": "3eTvuQzV7dvXo8Y485EPMpxv6t2BGUgUgkYmwrN8eLzTbkyRbG3BvtZSmtAm757xhumNAHF8CMsoYmBoHpTCd8V8",
  "key29": "5Dbwo5BNdM2jmBMsUWUhZdmqB5UYhqLwXN3DJadBveGsDpwaxZnQUSK586CrP7YHREsMg8M2GkJe2cscorXrtuHo",
  "key30": "26uRgK1LzfYm3M64enqKvVUHo5Y6mjwG3Gye4ytFJC5PkTUZou7h7nDxGDD1KCUy8muGWWWZwfdSnxj8ur4Y1SGU",
  "key31": "4dUehd8m9G1Frzry9wMDagu6TBaqqH5mGkZ7L7CgwAd22AMuukfQnwJmwsUvpXDM1rP2D9tPn1euAYxCuiCrny11",
  "key32": "5rce478LQpJGoYGevLMsdYuGB8T4artSWYbESKJCYARoXw6kMconcfHp4dNZ6S1q836XbxZKtszVfV1A81phRnQG",
  "key33": "66TJMFfnsE7QZQvUz5qr1Z6Yq5dC3HAKWV212W4u7dMAWyMXVvqKaPscihZRqd1zw8NLE6Rg1Wc3QKvZ9Em9bNdi",
  "key34": "4MDNR8E9WdkUwQzdS4NWGYGUMXv46uSx9jaQzX3ttjFYJfbuQKUXrShZ4DnMBoAYBYWg5mmNrRsJPbXDGZT5ey8Z",
  "key35": "2YnhzuLWuS4LHSLyCewRs1mLB7CjfRaUicXB19JmiDzSdd7fDPe4ZqTTonxgbxbnZ6o1MtbaZJfK1UEQmTM2X34v",
  "key36": "949xeuqamrMAWeZBeN7vH56y7B2MX6HqzkbhtHb6HghYn7MbpVNnu5uMJqsd42eUvXmikNshuMHQdujnb6vyiiF",
  "key37": "2EbXPJ2e9syQdBAksrXtSTegTv672sfNyKPHfFLo5BGMezn1sMSzx71uSpRhwfjzVXxuoBP6o7ayPwHtGJdCmcHT",
  "key38": "4zEkCMbwKWWqPtCYrbJhBaA2R7hUFtZKCm9G3hjzd4WD9h3ZtQiHgtis44Syr9VhLiab5dCDr9SAmA2TCNrgw3k1",
  "key39": "5CEomMc5ym5YiLcQC5c84SsPTTomGaqTkCrY9cZJRfNr7xfcUey9rQBvmsG9kxMz77dAY6GJ4rDTi7fuiNbiGCSx",
  "key40": "op52GBxCWadoWdFmhfoETLb85XuDzbGuzpLaQRzqMXaEcf5EjkWCFbgCoMCMBjCJGfxzC9JxN7TfZoSo5HddV6b",
  "key41": "3r1r2SeCDHLPezGKnU6ocnURjqqrvkjn1FbNmV7qdYpZc13vEWkbxqQ3midcoXVaKhNDDEXtuBBRZvH5CngsEZ6h",
  "key42": "2HjsKJfm4fagmQddN2huFfj8jxctmCjbN5frKdpKx2QwFDL3a97xo2GPKRNR3RQFa43CRf8NEZ76GV8LAQQhzz1M",
  "key43": "hCSUBPJhpz8ETAKPkGwDAkYpTaSU2P1ZRfA7P5MnCDg7ix4QUJmD8TdFFVwoeiZAV9aJ6e4zpT7CmPEJNN4ZnSq",
  "key44": "g6MuKu7H1k5cGkzcca6uG2xGBVuLPtM76YK8vWgS4rE3LbAYpocv1nMMz6gPet2aUoo9yVcK8BrhiiyDzgoLu1s"
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
