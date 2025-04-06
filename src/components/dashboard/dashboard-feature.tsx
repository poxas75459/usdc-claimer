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
    "mHFN4JLtWmz9CfprYB2tmuByFbSm82nD9BXSdL1Ldf5yhsfDZHPQYp6fswk8f6d9AK1V8nznvwagFkBUbKmHAov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jW8c61T242MXUi6Mhbo1EP6JHJKKjFqSLDUyCqoQtowgkEs2kznLWe8rhy71MFuDofNrvRAtWgnqTn9EvnVNVr9",
  "key1": "z9PzMN7x7K3xSy2ffTyRfgjJUJLV3CK2eF3DGUzyk2Z1CXLPRQwcEr1fmMWoQEfob4ucic7YyPYoQST8PZko8CQ",
  "key2": "5v8Lb3N2obnfmJZ5zVyFpfxMrQLipoe5MevSxFP1dFuAYx8jzAQoYLeu2sf3g4PnyjHAcrkYNwwQv1GPUiPS1yZc",
  "key3": "2ZRpG5hW3jzRHfZct4g5d7t5YtFYGBLdZvME5kmdCVjcFMk7cbuhx5472avZUon4qxjy3GjGGTwA4m6cMzC4d9Gk",
  "key4": "3XeyTTiQWnFytHVvpHxPMJVVTMFVN3BFbv1aeAy6xnDSsconXhVmBT5KaLEiizY4KSRNzEhX5RAZ8L8yhB25BRWJ",
  "key5": "3d7azfa6jatgSxCU2vh8FPmFGTiNBgdEPQQ21FkR9i3Ae514mahiKjkkzb8Nzk2ZSz7cDG1S1qMVSA2QkUEUHs4B",
  "key6": "4zif3LKj7K4jG32YNfzhStgYnJoiNFHdXy1CwKCcWbdohrb3PDdkc8Q43cJCvhVoveztAiCrr4aMsB47m5Pdj17D",
  "key7": "4Tkob9HyjnSJgUJNEmfqYdq7d9kYG81Yc1T6nQKVBMG5qeVYh7g2nucWsgd71r2V6AxGccKZYCnHYm35dhZvKaV9",
  "key8": "3gSbHxTDvJ3BANKCvMG9Uq6EfQz2kFTFgorww67ZiEfRZBMG1QskBoukCDYAcmr6KDFFAr9erBVaEYB45JMnjsus",
  "key9": "sTeq2yDtjqGP1wNj2gKnGGJ1BRH7MvyLdvU2m88GFbSkWg8BuhqzGGLuWQ6NVDsELpRfXit5Rj3aB8MpMgYQdRn",
  "key10": "KRqCS7usucyiXZS892uhkLNgBogkdgZHVvjCsbsHPaf9Fv1ekxy4BZiVFKLkoVuMJvyVDkKR2wfUgQVVDkPSyF9",
  "key11": "4JVLXeeso6QRYpLtAewrCMxAxoSPdmzN4nXtHsSAh9iuRC2pnJd9Mvuv3q4xM1797HiNrwr2VEJkT2z1Bq1PRDcP",
  "key12": "56tz1BwH5SW2tz8nbQ3tgtgvuVMK8cBDk5EFHA6Nb53xgLnjedVh52cqfxQS41Zys6t5TdyE2BURF1kShNMdPZLC",
  "key13": "43NivsyNMnobWhpb2WXWg8uV2q3yNeiC9M57v1Qfz3Zh9KwF4uMz11aSiYFcmpdVbYQXTJqAH142YRozGBbJbqnW",
  "key14": "5chdMzCnjD6VtipQqK7g3vFfJUiD8tzkyBpLetFxir896phjsSNNU4RBihoGw1h3v6nGEguwe8Qf1B6rk1Lm6HVG",
  "key15": "4ePGo8N6H2RARtWmykoAoj3pRsjYZotcsm8vbpAUSToBTGukUjZto4aQu4juhyYSi9obiTURDz94tpYdVRQKvFnw",
  "key16": "282TwtX3yd5VFZbnLfyxHGwKMHcAqfS6G8URjhXGRk4mDr178EReXNkkN7AThKXyZ2eD8VWuPiyFy83LRvX2QzTX",
  "key17": "KR45dmEtHZkuaeWz8iZK5tKYksCb6Bpe1YBRpWgAphKDNBJDDF19oohB9Gzb8Frvs9uPsL2HZ7uCzkB8g7AShBY",
  "key18": "3vF5xFHu7v3YTa4HULssv2inespJsh1JYvuB8jc17jnPzJT7ka4EHqsjmi7ZEHjoDP6Jd4j6ztShR3wgukKvsszr",
  "key19": "4ZcU75BGsQUqKKJXCUyXzwMKmuoyFmAapdXuYnGxzRD6ReazPJ3VGv4YdR7iqdUBMHCAJqNJSaZvsj9NfAPxaXMw",
  "key20": "QxFqXBRi6zPVZdbiG6eae3umaTwzdHPJ6ygEEY8hNQKRUPqWKCSPU41UQ2tmHhWpdvK8HrJ7fS7FvJ3geXbaXna",
  "key21": "4SK2DKDQpibFeqA3R3wLdpwrbfZ3UgFt1uWv4DAicnp4cmBQbJe1hJXimbmqxEYvYQU6b59vjwzXXedQVsbZdx92",
  "key22": "4DtmsP5s5nSN6RV935zXZzixvtbGTaKyntS9VMQKqeVDzYbZnEvRKSGdhiYiUmN5xniX6Zr4Lm5QrQRbnKZuqAqT",
  "key23": "4boGf2zCU2aBGguPXUaWFLQPRtq5abGMMov8iYeZtDLjNfc3hpQvvSB1kFdg1guHt7SYb5cKfK4dRoz7Jmvud57y",
  "key24": "4oFNJkEDtZWmW2L6nES8g1kzXbuYLx7dkswwta3u5NLMUo7jRruecwUvH8p3eth8wzXedeyLx6hDP7uu2oRWNeRU",
  "key25": "5AWFTUehYra2T5YkuZgTm5CgKE6QAPCHHhFEsU85VAGsxDcwTEv7oumG45bXNrScb1rTAkVhZHfrHwCGtFVMwZhJ",
  "key26": "33BQH8RfKgADhYnv1SHDaVrzNtEAMzDVrNtS8N57uge1XpSEPw2oik7zA9SBVoKgVZmbb49Ja9rWwcuV1b9qFWzV",
  "key27": "4JDsPy6p1A15f1VpAgLRgLYXaTD3vXgAzygZQCp2mYg1CwM1WBjqMKifHQMUJ5iMWG3jPKEofUoCF4aPZpt81Qvf",
  "key28": "4VCxsn67CTjhzDtCNtEUsLFApWvCeFGicqYmgrYTxKACruD8PHgMhhDHuHaTBfbQTm8xiUjSoBaY6TacfV6ptDfj",
  "key29": "5BVUToV1c18jT3vYGaa9vQTYSdJdXRPo7F4MWgkTRgwPCgvbbczvwFRh7Lo6KBvx196kDNncY85M67MHBaRiTqNH",
  "key30": "DurijTBPAEBCA69T7C5gXxn8Rq6Cj9kcdC2gU8CCCsoTStic9P54MyanFrqUqX4FADJhpTGXf7rweGuk8iMtNdK",
  "key31": "4hx4Rjn8j1JpL3UEmbFhT5RgXcQZcXpG6cu9kLhtaXzGUUQGh2kNjvmVTFTi2xLxj7Q4tpwku9zYv7sDMG9SS6qm",
  "key32": "4u7ya2gzUfvfeNJdbv5xn5XM46z6Z4L9GBRC5UKK7EhsuRdJEZARdH3QpFcTk1YcGq5nf4qDXv6TUTCjFYJjNx2Z",
  "key33": "49UAzpSMz85ejVvsZ4uUCodfR5Zbsr1WTYdjvKXE3e821CihAXr4YnUcBGDCMaDVauAt34aCAq2Upncm1UN4FVCf",
  "key34": "2aU34Qy3Hzwp9GAJQg4e4jRKvGsEr8saKfP8eBWjrZZijFbeWz1uvHGea8v2P7ZApg4uDpejCRne1EECMi2oYtM6",
  "key35": "5tnxNRehF4TR3dGaNqpaU3BtbxwhhsMUikxB4mvwG4uJ87T7uu5eVgJyeX2mPFfsE8KzYjPNP4Fyh6RTTLSLTCM1",
  "key36": "9zujZpBQ9vmzsby6CH4Ya8TZaxYRpyfRE6RgYiFsRQtaiDzLwAfAPTUed5zULGSqcgivESkaMx248Yw2mBAMuT9",
  "key37": "4AY3j6kK5aMxQyWQoK5XNhmZMMuM5RQtzjRUnYncAXjqPLztN6g8RNPki25eA1Ueoej6K22vHCfajsooBsyDFbau",
  "key38": "4Bz4eamW819hh5ZWhSCy9GaVaSQCidcbJtQT2zj1zv1fXMiMa7K2e9dc2rM15S7MdPQ8xXCG1kznbS6yPXu94dkG",
  "key39": "5HbNTpeZr4kdDYP7aTnwgrB2pZ9ou9TYQw2hNFB1tt7WKd6sRKtXuuHKbNxdvKxD1HnHwwXLbKrr9PYyiLhCJ9YW",
  "key40": "5qkACCKoKo9Mq1vDZAbHE6h8gyx3EZ3qeMFGzz9QKdMpw94ape9pPo6zh111QJvYawmCopM3uz2gg3f2LL3dQeYV",
  "key41": "5DeaSmySiuLMhCHr3Kg2U9rLtJouxbGhS9QUjyMgLhDPAqbn5mDtvF5X38w5hJ2CWFnW1K9q7zkyp9EBnVQi5XqJ",
  "key42": "3Hp6Xmz5qojsCzHD2U3Fp4Vt3av9oXpHcoRuVBrxu3tT2anwiCgZxSB6ne97SPL7iy8qmmMkUgUDkyJPNKagSeyc",
  "key43": "5XfXgupu2pR16RMhXdiM2CSTwpvepoa6GsRE2JAPfNqroB6PdWxJxTpjt67P1hYdwZqMwNPFoTZxXY8SXTtA2QLg",
  "key44": "57x7nxCTEuwUzXo8kwoF4HJV1htP2nyyGkTYxVp69M1BRNJYrvaCoUMvTswpH8CQ9e9a8NKQR6bMRCps9NSo642u",
  "key45": "Rx7XgPSppbdszHsvF539bC2nm7tQ4YPwgXs2mxBwMvxvr3WvYcpQgvZGPZrggnDf2EpbCgmeiBfVt9umBDKEPg6",
  "key46": "3qZKVV5KKNqvgAaBvVu282LbehX9N6dridSu9q3gW76HSTE1uzbo6RznWRTs6QyPNMebWUsvrhsSaK7MpwsRqTWp"
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
