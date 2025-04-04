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
    "5rRFS46NnZiP6dNhhs3vbhr6smvGpSAaF6LqZxjnbZ6nhgPUTfonvqhaQHg95p2zTbXQNNiXCfRDrCLNxQSmwTL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d1c8HSzpV2NmLm2uz3m2YQFJKZxShVaXprveyxNDYJwpM5kepMcZgtbTPyFsDNaiUTvNsLD8uVmUVMyS8FD6VBM",
  "key1": "44xRpewXUkFsB59Kq3nh6rKnu3B46xwwWx7tmWKXjPFc9otwnQrAeHJr5owGBtyzAguyowzEEA22n74iBX9MCLjx",
  "key2": "4unLv7YysZ6J45wmzkYq1Jx7CKjEq55JQ7u1edtYm1y4GZhnTMHdFqtJyFTRBdKTPtntKP6wAEbSLSbdYvsRvyuu",
  "key3": "27nxg2sppW8hDpRsn19Fas4KobcPGcA1CPi8WW2TET2ZiZxAuESJQbpU49dPaH2hCYqMHdM58myWEvZ6AwEFNnhp",
  "key4": "3jQZwvgCdVKJAxFzRgiDgFXghWULDBZVL8XU9EjAKr94u7eZAwj6jZekDBetVSRtPCoZGvzK5JDdCeLscBTG3Byc",
  "key5": "5TfQEhTdhuo3AKwpLqiW41dnK6c3vjgQFS9347Z5WVBEy9JMnx7sHD9ua6grp5S9sPP96GA75n9APnpZXKjgCPyj",
  "key6": "4zQGbiN5St4FkYVWsmDmagApwjBYzmmi7LmUM6qd9VapPLnUrgpGNTCYrHkx7PikB4YWmS2AX4Tgn6zn9wkWYn1k",
  "key7": "37XGrBGi9CpTuAHP84zJUDDiLiPs6AjUxq6c7jf9LU2VA86Gw8TdSxTunKNeehnWmCT1hrn9e1P43UH2gG8PTvwG",
  "key8": "2JFmY72ymXrWNPKYpkqWdnayQv2WiEZiLDGPgE2TYm2RF5hN3CrvQiHhLyLyFbrhWZtAVVQPXzEaqeVWiVnY7ed2",
  "key9": "5V4B7izAjtHkq2JwnYa1xcrqQxLyWRebFSEQ1BnCmRYukMNmDVT7YafC9T2boupPtM7tvvmq61UPg8aVkJZ5xzZK",
  "key10": "3X63jjVGz9dAoMpjr6DD8Jik8C1EaRrj3XgQVZhqoeoN8WwVk2HXoU7tjhesYTuFJt5ZWtbMzASdAddJFgT7kxEZ",
  "key11": "2RvCD8wHYJBfQ4o1LSLqu1aKH4ZfUeGBW65Ya78HWTsMybUHi4drMBnc9iHA97hszYxyr3PaDvTDPabrk7kDdi88",
  "key12": "4Zzm44uJm19uf2HhF6zrD4crCqKjed3bM7DvCFae4tn83i2AcENJrDZRSAkCrBPG9JasbfDcdZh2qCHv4h1yvgZN",
  "key13": "3mSw6LFZPcpwtiWxrMpqARtfPQhzjuE3QAkBKb8gXcJpZt3R75MnR6ccRkR8rp4s71ePxGQLhpw1gSb2K35bu5nN",
  "key14": "5SUeqcojraWxCVh3WTAwqdxBigWuMURVfcXQt6umG9QmueuvS3HaSi98bFxMirU6ZR4Ff296vHGzJGQ9Qj9m1wYT",
  "key15": "5XuiqrkjQnmMiAatXRztzM2hnNxz5TmK7XBdM3TrfAyJJapmiECd2Dpjv3Vdtr9QLjzRjasEeoN1yoMPf7pnW2uw",
  "key16": "3ejH8jL2rqCjyRFGJntcDTmEY4UXSbGqiJBLeubG1HrM6YF6sk5YxuSZQ7kCR1SGjiQ9d2puVMduPSAByE4zHXKS",
  "key17": "4Piqm9avp2LZXmEydqatsPftiY7pqYGHgkiciKUMqQVRqguqxWYHQm9jK6eT6kJGeh5B4SSHmW6hCTM3hhLha8YF",
  "key18": "RpiKvqScXr4zxcqo6DXSYHmX7eG4FP3hABrrKyC1DDYh4HVoDc9HgKQr4k9t5Fsr3qMFChsZWoZY3vsJP9g7eKi",
  "key19": "2iGCxVpbYuzzzogZwui6HZHrmG1Gr3zMDnv884u5UNaHaytJjWNhH5uDJsHamv3wC2yWUBja6N6JYWhP6c9zBVTr",
  "key20": "3buYwQU4sWDF8kUSSnum7YTQ2Kgsx2R6J1joLpLbdcbEhkqD82ByD5CKUPRw4cD3pDLn6HfXQZ3Z1hnxn1M3Tz37",
  "key21": "5tmxHHYuAe8r96sWsAFRE8Hu2wsfyxiFQVsBoiFWyuvV44huXkrpw9rJerPQggBE8pUev1vfB37ZXTWtNnj5F57C",
  "key22": "MJpUUWzF7Lpq7qJKBEisdR3L5DwjzAz4mKbXTjLzsi2h1jna6VFK4qeFFiQi9WpMhuhC1XCFsAciD1Q27egHnPt",
  "key23": "5M7G65168coDRDJJUYqCouf9xRREPCasufhPymAkSRDS4m1Xm6CteC35VVqsRUJSgshkjuSyAeLtvf6iD7sPSiea",
  "key24": "3UdphWZpP7Jgjzuos2mWo3BgWpAyBSS94e6shGAq2omoG2fvnxPujfCimj7a3ZibNzcxHJsHuCBxoPBgiB2EmczK",
  "key25": "8JBY9zwj5fG8dXAPvMjEhvKhUg6vbpqcAX7PGFUuPEzddAqCjD9Sm1kp5QAczYPFBcJUbLRFtSUZsTS53DgNDqF",
  "key26": "ZxbgJen3Vx7es5gyG5ks2VjzVFx47HTZAkpHWyftJDBj15KDgsnm8t8ugyQafFhLRi3MS76BTNEF9vFDecGFGyd",
  "key27": "5MgsNMipmZfy8kJSPNF4hnQQoGLiP8Y5t3Cvr492KEXqPjwV5XZmGkwUfxqU2L9kQJqYyvG6v3Nu6HC5r4BRXtRZ",
  "key28": "4kVH2ffa7YjLd6kiHHzqht7RLN1JyTHs6o4pbmKsHBPREKgSxy8xU4CqG5rb2fWncUYxChKrtqo5d4whPpjiP5Bx",
  "key29": "61ydVRmg34rHH3M9JBfXfNRT8icQ9x6Ry575ZdTzAzartKfnvuTiZjZD5zXicgSbgE4ngCP5wDZbfYAcRSoWEaa4",
  "key30": "38rrkLQfyfaKZjCvAnNLoFcN12a3QVaEoMgrxsm3o51Yv2AkmByAW2M5cBrKRR2t7jwto1jr1nVatR1HJZaEh6L5",
  "key31": "4ZYZTK13R4cVMHtpUEUBoHnWakNGeYQCfEozN5w8Ai4SJQitY6tYC2odMcV7D76FJB2tEnbR3RwYZsrFvXDy71bu",
  "key32": "2CbFq3iXZRYUfWyr2CAQfCoDpuavinJbN7Yytt8dp2kQjWTTbbNVJKbB85BqzMSzfydKQonPAR1wxevuqbFMbEXj",
  "key33": "QMVJMz79rqDiPmpd8aYkLp1kAP871537kmeNuhycrcKChC2qAYWvBE9MfL6vWcECVrLbwYQpTAP383NvDCVD84p",
  "key34": "2F5GE4whzpcZWt9WJh5idDYMBYwAYEpaEADdVpsmp2eEpWZGvXEEJbe1S79Nm6CdpQN5ANYkMhySvQHaFyaBMWnv",
  "key35": "4BvWF8wabXYsdbcFu88bo6oXj3Y23ziLmtvUpGyXXYD7gGG5ui9eYQTBEuTVAGiGvDjFKUzA3P6q3FRaYBY9Pedk",
  "key36": "21BKExEokpvSPEWHgCHDp7PmaDts51Pih5tKe5avt8hjiRoV2jP4xT617D8H3imAQqM6tDPqDP3XrveauX1XaS8r",
  "key37": "5CfEhVT2u4rVzkoRTzYtN1Yt9ZCd84gKryLsTw3GqKaxAQDtnX1mCnmzHPmMpDGi7JBKvwdLhoedQ7ctSH7mKy3v",
  "key38": "3yCNJ7Vm3N5Ui4McMBy7Du15ny5xKniss9AkkQKe1jXmePuDL6T7fVdEsDkHZm6gx35UBX4hnPsJeuQeVe2x1vgP",
  "key39": "471pMK9J8FRDdm6BNo7FFaX58ADuXop5WcGvAwyFV2WKDtaNKx9P6Na4Sbe6DENzNhQZBd7HSzowC8jxckqAfiJV",
  "key40": "5ZUWu4fUrzC5Y7EqJTEFBLXHAHbb2ffoXpyfeLffSnsArekkhrtDApn2bzhpJ1QcPYU5sZ1XpqBFMW3Zfu4myc9v",
  "key41": "4HQ3NJiKruK5NeQa4cvySEdkyuid7hfvxuBt6rhcD4KKtJYq35SFBZqM4muo4Azk7jzSeAsqeTimZMbDzzd5rNq5",
  "key42": "4AYP7hSReEK4Y1im2Akf91fEVeQiwJjZ9EMJp6CTqdu9ncNX6oftbCsg8DpmHtM5eBWzgweLLHa5nEpgLYeG3ZMh",
  "key43": "4sj1mPBGxXMZPDEcPPvb1THQZdxRnWeRvdze3spDraKHpj1Vc8389o56QdsHx6DzivjFt896x6m8bmW2oW43UEw3"
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
