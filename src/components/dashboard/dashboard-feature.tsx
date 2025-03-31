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
    "2quoD98tN3Rj7c1D8VkuBh5e1Rq9Hi3HbFyhhNkpJRyj4jEBNaXnAVL4d1qmNPrxd6xph9zoEudnbT4v8AVTqKtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f6DaQrPCGT8KNb3f2zADf54oGGGLaLdBrmNSqrTWLt1uYZd4EppEFtAMXMw4AywgRUSwRGnEaV12ENwxGdAiNNa",
  "key1": "2jYqgCAq8VgRSvsFYrqQRMjRFHxmd5Q3GiNjhtRsp6KeXdq2TtMEQo6UPT43sk1J5Y1xHQeN2gBiV2dubQfd2ZLc",
  "key2": "DpSNpx9aTdEDUGot7N4hdvUA7QRRpPypvUi7fzn93TLvNoRcmiGWMRstonm8sf3FtnYnXj9SAAAWA2K21DXeyUh",
  "key3": "5mmia5RModickS89Qiv1US9WCqCzPLsTdUkGgJWXXA2jDm6ozu34QryTPct8C6swB1jdZuoDfe2cDeoMsG1md2Pr",
  "key4": "43F4Ngk55n8NLgsiXshYMZd5RsEDfYE6MBQTw8vLk56PRgrcaNiVywNJM5fcxsvwTjkdiDTo3s4gLT1KXbdRVRfq",
  "key5": "38528Z1mAuwGWdyjqdwE6KvaXLCyHkCMikD1tQKpCVpH78VpzpXUjtFa3fnkW9LkEe3xDL7q94KzJ1sb53NgrnW5",
  "key6": "3WgUGxyUkCSZgR7szqXfWjAEoU1TefUYdNS1oRN35YaThuxHDSCaQqVgVAxZ8qVmgnnaABAVHpgw7PPBCJLteLgk",
  "key7": "5JdqxWun5XRq5WRqGCRys6hQEFWbcoB5bW88V6nAr2rVn9Vh2mWYLe2ECmAdn3dtQqYBkquSTw33ZarxP7beTxES",
  "key8": "38n8oYUqPno8pe5XCfJ5NNTepm6ivmAh8GyEQkWuro779gjy1DpeFcxjftaKdCoss5SKV7vgPd2sRtoyg4YtjhVP",
  "key9": "37PTMEt61hgbWQbcuXjLFxgUyyShchz6NUUtDC4CGQUWcAPP2GryzKxV2ugs27UBTXJiep3rL6dPXuQ2TyPb65QG",
  "key10": "4GRxc3btgU4nqLcCexYZgSs2kALTVuNUuLvkoMkYneFxzsMeCxQxyY7oVAXBNxgSMqvSpj1kaNQDhrbUw4G9zXVP",
  "key11": "3mkaDLgLFaP8vaB8e2zc69n7fEpCcm375c8QpzCohgcSZEfgFRQTAnbS8SJitg12xwXC1KbzYzxnUtwCoZ6GQnva",
  "key12": "3hBRY26J26oM75vJAW7N9U6biUt6G9HFqYNuqfQWaskNQ7LTTGZhKBC9bgLk53jpGUdqeptSPTz8xHicYuoPsUAV",
  "key13": "3t64ttEDWsK2wtZ3ZrK3stWqKTgZMNii2VprUkuH4nyg9Q2Wsh1ipGEjfBtwdbTzZgbyZAf3F7VsobjyRkhyZ5MU",
  "key14": "4juhswK1fmk5ixKNaH9yoPDhiWZwNmJto8wBLrUibE5ByngAcDbdFNkacCHUiBkwntoZK2g7e9GsFpKjSzHGTQTC",
  "key15": "4L5PcDZjvLL2uftvbTnKopAYzhptriuhN8Sx4xRRJbbmJGiBfvaQf5qiE8wxR8k6TB9E4nakMa3P6GvuUCbEg4GU",
  "key16": "43yiFwXj31MrF8BNN3aseDyeVx2zLQRtDQFMUvY1ezkAMf4dgoqNkT3Z8tyXakv7Fpa72hPiacragZnNwM8w7U84",
  "key17": "a7rPsRpXuEdHJzbLsLPHhQK1infT8ekHpa9CB67Ng62xJZJS17RKrjoPdGGv3fGoHfFHY2T4U2J6g2VFZFynJ2N",
  "key18": "2D5vJpnwCAYDmKTQNe7oFFoV7RRPGokKFci3WDSusPbof8wFiV3Cg6YnEv6H3YvHQkmLvgaeXsw1L8vckJhyZx6",
  "key19": "4qEzRavgtZPxLkTgkYjAogDVi7CL6U5GdByZMQQUe1eSAWLUfkpec3Qyp1nW2vHAMFGjEuBSdLiRj9EamZcXnuS5",
  "key20": "4qe5FMTYkg8SKPNE9kiCohzeCYYyA8YNEK34JXHu2kqYfC1WVAG5MQtRdetQtDVoGGwJJw1yoTQjHeKt33sLrdZ8",
  "key21": "9enDLPNPGah9qFvNEjNxTjgUadN8q5gR4juqXG6KdiMbZXEimWC3xFGAzxGg4rGx9SsWQHUrXQ26g6oNXewGnJc",
  "key22": "3VnohHrdJgszfVWD3qAZGANrzWNLepPviAxMLogQJG6fy1YoKjXpzLin2KbhZLuXoBmD2ZXw2LevMtGqoZ4v55LX",
  "key23": "31zYhpZJVTvVrTVE3tu4LFbQyAcFaYzPtLi3QypTGvbw7eV4LUFcjwtBUAh85XkwR1U1KsvmGN36eqbS3KrbUE9v",
  "key24": "3wYA4ZjcEyYuFpH4tYDTvFABrBgWUqBXqYPmpDJGbTptgyNjeFLVDZMAga6vJoxabnHk4hSoyLC2dk8BCiivTTkM",
  "key25": "2rEyWhhCokXwXN6ii4CsDr8gk5i17To2dTXnZgtKPMKCVyXecLYp93ZJrTXCRD7SvPUMzuWCeF3JXhM6MVu3T1w4",
  "key26": "2T6mBGm1vfps1EaTzSbqi8wYFEt28bGW4vXyRf4eo8jfK2Jnx2csCpHtyQLenG52FuZVtnzgnaQwRZMYP2o3rZ2M",
  "key27": "58YFJ3FyA6Fs1gkgWer1VRTTDBy7pdHVqzQvVY2DDgd23DG5RsYT9eb12DGPZJSbDEHYUMGRDaC4FuGZRDYCmkjM",
  "key28": "YH8ZJzVfYy4YRB2inx2pCRhfyNCu7sK5ZpBdw9Vb7WpoR9YojJ7Vn7f9omBHngJd299WWLEYPLX9k2af2MekdT1",
  "key29": "5uHbLsLLJDNSqZW7NiTc6ruRci2gdtvFPg6bxnuG98mAXLU9yQLFHcuPvBKbfnDcAAN6ohJq5RN5AM3Eqn3wmQmv",
  "key30": "3daW8TnpbYcmFN55ZnUYr2UZSAYFRZkfUVFs5aym14jy5cAup3hZ7yiSnKDRQK1dbyXiyHhNUEbpKYdfVYkMXbRX",
  "key31": "5QvUviSAhHT95qqwZfMnZ8u2q1G5Wurb8SeuC7ts6BMtaLMGwQtB8G3GH6SpmKM5uXRn5wrjRujfFiQq7oJsdDXT",
  "key32": "2negMe5TqGrETkWeebhu2mt9ABK4gUWoMuVUsTMhSCif4DCkSiTGHMxAP9mdfCM8mafbZiCiZh7tudDAv8jVMXmk",
  "key33": "57ajMM5bTWGokmn4UeFS1opA4T5ZJEh6jxQ9RcKYdfbatqKa6NsPjvw1hqqqXW5VxMZHpwKEeXaV6578xoiqtKrJ",
  "key34": "4U5Lk4dtDktUZrY8iGpQVUt24SQCSQic2Ts5D1JJmNAcKAYENcnUzfvDSUjRCDTk3Mvxzq5m8jEH38J6QbjeB54d"
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
