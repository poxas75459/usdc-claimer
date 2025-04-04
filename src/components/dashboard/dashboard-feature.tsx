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
    "2W3ygPnUAMcETX2r1n1prXzTEvP3MrtU4AApaenDm9vFeeijHEBVTJi9Qq5uAbJsrU5xpusePDJKVCd1G1vT9wUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35u1xiwC1dHK11N332tYHKSGCB8TxtMaYBwFAzNCWAahhvLdC5Pycx6311CFPxi269feaq4k5ernCjxkNhkw8LkC",
  "key1": "21g8f1znXgyga7DyGB8rMF8sNxvXUxc9kpeBcHLpcUvyS5yja4qpJGfsJkeB7eJgKjr5n5oJfNhio3ADFXqLBhZQ",
  "key2": "2YjafXaDXkEEif9vtaE9rFkJubhv7ZzET2299E5nRLKzJoNxAaRMk4Dtuf7Ro58kHBcU2APjBkCraPStDo5m5ve1",
  "key3": "3fHBhKcAQbgfqcN7M6mGB8VYTSvJeJ5BzEvodTmZWJjkRgb1TuWTnztc9AinZCyULFkDJzp2tLCRxLuMgfMCwZKT",
  "key4": "5hkp7YoRum7vNfnkPCM2cA2rivtYbmsXoV97g9VgMEKdC8qj4fitJD3YZrnDuzgH4i7zCZCQ2t5mHGkijnkxB7fn",
  "key5": "vi6FCvdj1F29RsEn5dgq9uAa5CCQvmk5L3h1VNPELpVkAvM5Ac959qiTTHo99Hvu3mg1ppeMaPZYBeaRjsGEGrG",
  "key6": "3m4HruLUHjvqprAz4LUpRUaFknkikSwdDEFWnTahLvPVQnxw4jsWPo2MECLpDUQzAHVNivG8zsUExbHc5FvrgjKd",
  "key7": "rrRgAWYk2Xt1EsYyym9ibE6uNc7KuKU4igzUYAByFsTi68Xv5xNGCWHxcqUULEAnN9xBS3NQXrjp7Uny677cHxb",
  "key8": "kzAcjKTBmTTVG2SJmsWxEogcpVRthWfiQz5con19V982xn5sxJFDXZbHVtV8Cai1udzVmkP3CaMqSUdGeuY9JXf",
  "key9": "53dWsSKaCMMYtk2JyRs1eGnC1BHSkWD8dJDU1z9Q5oK3By3PUkMirxH84BTE4TEdhQy9Hn5tW6QFtsPKLGTwtL5f",
  "key10": "3h1ZFeQbF2CCNReWjxUixPn1o8cj8SeQXuCUQqHmbV4sozSdSkAhPWEhVxanej2dF6ueWhwc6jqJF4obdawgjAGM",
  "key11": "Fg4YuH7gFnpC9y9kya6gxsLJsL1s1KmpwFB8xDo8C9x6FnQ2QiV1wZ3t9Q3NB7JW1TnqzjNGxASozFSH4KpX1Lq",
  "key12": "348z8paGYzpktJALabpV99j4ZzqL79wajEuNRHbsvtSPmZcR4kT8JAB3yZ4Vtyr6zsPZLMayPpd1fHx4hXrQ7eMF",
  "key13": "43cCSKg5yeaNNE5uJU6sgWzQwc3FsigN7EixM2iCaFwpUkYeMGxwP1NyqivWnVqfuQJao6vPEPYES78ke1kXbbcL",
  "key14": "2F61eaN8gVgAnrF6xYHai6YrUxkPHKEx4qPXV6H2vfCQQSR2MTxMsaLnEryDm8g7eK5s3Gegv3eE228fnAdtiXEZ",
  "key15": "2M49oDQCv7ENT866vpxyD6tGq7oyKdxgNBHqPyqXpVtJaHwYUueu5wXHiWYAoTwLmRHm4vAPCNjgh8YMamd4RnMN",
  "key16": "4nMCSsZdA4LPb3z5he2oTt1zVdJF63mH3ggq4iGPMp6X2CnUBpB1V9EJMYL6HbR4JhgNXRsoKjDtMUPM9k4QGuUj",
  "key17": "33euhSnnYvGdrwhL4kmynUF3LJ34MHawMPV3L35bPybjPZMUDtwMhDUrygEY8HcUBNhRVvsX1TXKWcRJTdvGjfLt",
  "key18": "3YJy1gwPgX4TMkxk8Up3JzYFGi5qXqe7V1hbnR95k87VLBeqL2DTPUeotNkXSzoFZ5r1HcFoyRv757ZCXZrEU6in",
  "key19": "3r5cYi9EnX2YqWKmiH84FVDfxfjArX28zsUzSSH9A18Zu3t8ecTofXScw5VdTQUTcSMrxdAJURrL1nQcWaJYcGeV",
  "key20": "X432VjPD67NDQeCyDZKLTAcXF26jRmnePRcvUxZP7RwXysQFCDexecPW3cVZx1E597RUGqdyy2RG9ec2RV2FtRU",
  "key21": "5K8NhkU6o6z5bB7y3ynuzXyWZn1vmeLaFVv2MxgoNtHSKz5GYv4wKytjDbXcGTvN1gMLKDUZeSbyGAKx1qRxBmAF",
  "key22": "VTJB1HyVys7jpr1MujvXeCgAjcmvbaEpqnJqrhLTDCX2BpVQoh8vqczvDLaWe4WZAbCH4D6Tzivo7xJCJqqk4cs",
  "key23": "4EDtNhUUY6g7cyBrBKfWdZUEUDQg4EtrnuLkWQhsZzcGJKJeuwC39etE4zhytBfzsbMfsfvXYBkkQBGdE1xPtP4z",
  "key24": "5mHwLAz2UKeTv6fripxsey4UZCSFKeBCSptjw8zzzxzJhi84dB5SroyLsziS6tHMw1YaAffV5tCeVnTR64SEj2ri",
  "key25": "mEJRwC9jzZArwndVvx71u9nRNQCZGHeuDCFaZiaasuRSoegx6iocJbyqGn9kU3GphSLSbmJkPhsWhAwqB7kShuN",
  "key26": "3fnXk5F9MVje7VEFNHBTM59WESGRVogLzbBQpJ5PdrEww6chAn2fp7eiLSVdu3Bbcug4DwTtWnm61XCqCSwfip4a",
  "key27": "39XMFCauFtYhW3MmuS35bHnnowT6f48JB8EuoZN9RqNtpSM93oe6XxY7EzTw6ttmzzzcx3jbMnjvjvBkJdPPaWxA",
  "key28": "43Wgm6qpKpbs8pUt1sJvrMsQaUW7B7EaFyBGxG5uu7pJ9aBaAM9RPvSm7f9V7TSq3rMnv9ZoqgeYNzTyLWt7qrVA",
  "key29": "2Hs8nRSf611wph2MEhE2hN7Rv34j8H7pHhMcg8mF8NH3PUaJNMirXkPiApb3UimDXkC7dBDitgvsnrMKDtYbcoZ5",
  "key30": "5J6jiGkxkWayvv4tDssy2wx8NQJqbZgxqqUxtpE4gyXimiyxPv2zTMbCpFMN5iRExan8qN8Qb5XBkEqyaVCDDsZV",
  "key31": "34AAbq3B1iaKyMyG3t8UQ9oB1QqxtLURxGwv26PksyYM5J7NDDfjXNwcsE5TjT1NtVZ8B2fBEvvvNiLHhGe8c3Wz",
  "key32": "3UrGH2Xyv3Tm3bUMiCFrE4hggPNaQBu1361c8ZhAKsGkGb9SwYnzFp3dPku2VNipRHmAkZVDWJuKWSRCFUQj1PAy",
  "key33": "3k4HEnPWDxkdbRn7LeHwMyt6dChwQkcRjZzcvCJ8U2g5SW9kuqtngvANU4AjoMAKdX7KmnHEWAeXqEZqfuuBKwhA",
  "key34": "UJRQTqirAqZAGyLupJKjjz3F3dxiFm2fpaPx75jwciSnE5aBB3dWQWeYb6Aw5bPoZXvgC5vDqs5YXZt6mFeXhRU",
  "key35": "5LPQwvsQRfyLbyoAHiVbf5U6vS6h2dZAN61XnkUusi6b3AaiXRgMeEun74MybNv2r6PMXJnxsqx3i3pkcsduTbz7",
  "key36": "WfmoLQAN1e1LauN4QzCbivVZdFAwUw4qYACYPL5EQM5mUNsvYbMEzofqDMF6A6u41LsVCaZr9fYHKmJUFXbhykV",
  "key37": "54RWMVrDiAANC6wHr3LdPH3PZuaCutUExzTHXv3snvbyA7qmypAqNzPqZE9M7RW4rZEH7x6iQFy4mBnHA1BibPty"
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
