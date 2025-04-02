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
    "MZ7qLeV5RMdAhBXtTa3NQ2VCA6PgmZTkcdeGk3GvmKemsjpLwSsFN4grfCXvE1z9ANZFveASJbGyZJALFsG31S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JrXizqZvdkCcL3UBku3aN8R1PHnBmFCw6mH4bhs3Exk5hkceQoKeVE4S2vWtjZ3zJn7tf6hEmgFpK3CWDKDtomB",
  "key1": "3TiGom41eYGS2eqaT7caJVK2AjjBf3S1V4u3CPt1zeduZxmvf7q6uxWDK3shvzTtvfJXTfdB6oE1nN8BNrQrqK15",
  "key2": "5MnY2Lfzz4QPAYxbjLGMwG9nQyExNxSCjE4TktX5HSK661xL9fJBtYKVikP44gU3szxUL2cLNyo4MB4g5oZ5TY9G",
  "key3": "5ZPHupJznxjdHpdKzoCN7rdunJM7xSJfTUwq6zGZpi2SYzJTDCXYM8YGHDjdu84sgA3m4DXi6zRvjKDgwry6jdSk",
  "key4": "Qw27Qrob8X7yP3E6KyzJ7aB7No8ELozckoXpe6moyz88q1KZuJ9pYEXGVim8Jo28NLAG9WFCXQR5HbpPFT4Za1F",
  "key5": "59wXFUTi4R5tWhavdNGRSwxhsjnfsYWxYiKLwL9tKnBhJe2h2qytymxU8V7v9BJMUiGSErWV2hRos5y4MeCpEbhJ",
  "key6": "4cM4qvqA4UahHSHyLgJCHXc7W6dAxMecMQuPgBMHCcz24RHZwtdFJtjwCgupkXG1TAjoWH5ZUngfCL3q2UbdQFWR",
  "key7": "62tfnkoWnewFQBgQ3WVvVsjQn8Y18REU8n6Ab9bFkqxRLxcprrWH4uEQMRCvmZM7M9Hs77dn4fH3CdHEqHMWcb2q",
  "key8": "3oQp14xsYQtbvfBTCYzvxeQXVkQc2iBFAevFPJqq7a9DLe1gVupnFZGzgndP6iWPKMBDBig6czCK6v5YcqSh57PT",
  "key9": "awrk6CNzR8B6NfpUG88PVwqbHQTu8uXWgq5PS4FQBLHUKxFJ5PV5Z6ExyGVQjPDzDiiWMcvvSujNcuPbyVXDrRG",
  "key10": "47yxTernKpdnhsxTynQAaTtX5GwTpvcPSVhMLXcqhs2Z2aseTwydhVoUKYGxrLWtMdXJbQiJoRneWobZYXvEw9fW",
  "key11": "5nVp7BYyLJSna3S3v4ayszKp1SiFJdwEGVB5QwCqTZu3TBJG7Jo1MdR57CKRzwoLiRzUVsFeNzponjcemnCAb9i5",
  "key12": "5chu9AH5CJnycNDkyDU317RFoYwJbvhVsq5qkksXcqjPrFJr33G4UsEsNNnov2PxPpXUJKnT1XYv48qk57dfizH7",
  "key13": "y77UkP9kaCZfpTgnzaai5snn8ZvPS4tktV5W2krSR68Z9rqSd2ErjMXtUCUiwgWuHS1xiMddqFTmD2i3SZ2G452",
  "key14": "2aX5x6V7PVu9nMSWkmwKvU5fegqZwHbfa4JgRgaNH7u82txvGE8KCQrPPtwcbqupsEKHJ3MPFsRAhz8LKjxrmPNf",
  "key15": "37KeQwQoCSTdraxJjZwsHDJU2TYq7JcBt66iTPzDRYnnPGtpNvj4UH3jzuRqTMmd8jJppBCm617V6mEF5i2EzJdN",
  "key16": "2mXLcuEPyCt5snJfKrymHC91tCMWvwct9uMKzb4MzNYkSYmTVuvWeXCpAXupYPD5Z5xy7vLNx1A5gi1au5JosC4A",
  "key17": "2rksm6gsRtQipfu6u2qwkodnXeSdq9LGMWzMceL5QqqSeMR766EqvuPRNnJKFNyN6GFjdEGamYcmzMLmpGVPsBxk",
  "key18": "5HpoVr2aoohqd33MncanKTeWErvyXM2AEWnVeZ5ceKqtFDQjm9mbjkmYmPzV824X1QzyKRujn3vj7m9T6djvyeLV",
  "key19": "5FvXisgiuuVE7xbfih4Eam3V8wkWhXdgncb5USM9wc5TFskvyfkBNnrzw1xRYeYUtFCyEGkj5EyG31MzjWzCtEg8",
  "key20": "4mX8wtnahYBoYvg7F11S2hRjJPffCnqiJJT1VJic5vs9n7i248REfSHxFvoWzMftxQYR2TJRScXZBnNLJoCkhbZe",
  "key21": "ssLmNjSedBsE3BXwDj1BE1bx86emCCYi1EPDTNDp2vpvjjizmBKs6KwRwUKegcoZJXd6hhtPtfvFZtmejYseKET",
  "key22": "2PGMtq6mxmf1e2pC6FGGdd5qmbYnf5T7nR7Ff3HV7TKVrCTRuFu8hEwmFrJxEUBWBjdbzKemhnGwoHTXPcKbcWmU",
  "key23": "2YzfSkfA9JVtY4jTd8mZ6DhzNwzwARiwKUHywV9LZCuvK68yjkaKVY3Swniwq1sNYcppTZvff54TaoTae6ApNhCn",
  "key24": "4Pzr3cXZeeR4FvAaQUfTEsGVUuKhsbbM3VckkJUSshjqaUKtuBNpC5aEM91Gp8jUF2gMSXEJYUTnxZou5J7ko92u",
  "key25": "2xa3L63JjoYYCKgmgHXc6S6Lyhs1YyFoJzHKxpv7JsEdQ3EbJvsoj4qRVU4T3jRRbUQTgU5Zqub9domdeQx2bZgU",
  "key26": "8fC5BhoQyQMzPCaLHq632WY14T6y7sdK1hqqdhwWdykRe6TJPMu8B6xEcJkPLTvK4vSugLxvXojCXM6T4pHh6Ca",
  "key27": "MkVsmnuGR72iggotJZnmuzj2xhuEDNM157SsZVMXHbLZ2kLhASJhn1VhkdjX6W13CZ7drwxB99H7cbtRd6E925H",
  "key28": "368mZF4bx8qExzpwmuJ546N4r8euE3naHkX6jpdhPQqUkzx2mR9HRdeMPQpVpnvi6FabwTKFY4L4jSxHFsL1YfD8",
  "key29": "5viTu13br8aNnPRtBYG3iq1M69Xtt2uHtrLko8NEjuQEtHT4rYwL65tqMjkzJZeiVXoxkjP8HxZUiNjfnALYGrJU",
  "key30": "2r6Hqcd2GVjrpTdrzUj2y6592SNEhAEHAfV8gdRnsf4AuXcnHSygM6vdRh4sKQZk3crsMgR1wRWeiw9myeM47rsT",
  "key31": "RbeUQU7mmK7chfRpwKDgVBEz4Qv1yFDxdwA1Bq1QT2rE3kXuLcuWjd4o6fdQ1vU9AaMXzNCxjhvAN2iizGbbukY",
  "key32": "46opFoyYGuj2KSrtUiG8PzfzdQ4MtKsm7q6xGdzXLxAZsmt5QpYPQSEAMVvpCDpvdoHp9PMAFWxLaKxpGZF1NXMv",
  "key33": "5jonw1AQQZSytKvqHFLw54tZo12v65rjdZtXoXPfKgE8fjEc1qB1sk9Z5B61Y4n9DnbTEhXE3hTPSL2ChAV1kxPX",
  "key34": "3CCCBkuPYNJs38bg3UHACqQbzacaPeSdbsj9ykhFR7gN9U36tnh6JfPqtTTWNm6LbqD8quigg4jxUvjid3JhQNXN",
  "key35": "2uAWoSUqmiEJfqEjXrW1bV4rk8hGd1PmGQq2cT941XVwuRELCeWXEDrTkbSnTy1NTxg7sXSyA8dMi8tjC6qWW7dz",
  "key36": "5cSBfiRTuD4ZBEdGCaguV56hSRV8Srdu6sqGKsdZu5hnZHi8yfNqEYuiUZPRrEjWWZhSpmHZqN2EyMit5Ao4SJGz",
  "key37": "3J7Lx6vFuPPQrtcj1SmZja8Z1Nbb54GfwrWYF2emHQT4YNYqxMSFHKinLf9fKk2kgB6pMqEcCGvFBpL8SUMDtyda",
  "key38": "3JUCNKzEqeXQoaJJPGz5BpDZXv45zsDF8FyD5aYrsi57x8mpQnKBUzJ2XetcZGKSFc2qSkxEmTHDMQroJrxCf4gf",
  "key39": "3dFPaC7mjuGtLwJCbiQEjjMLGpZBA3amPPJaQsDk3tfjMVSeb3m1EDsfaFnoTi3fr3ayDvDrEBTaF4x1MaYNzMSr",
  "key40": "4MtTqTdxhrhFUb3uHSoQ57kpQJ9MEz7RTBFec4YB3wk8upExF5DteDDS2F9DmwHqgchnyeazddcVWz7N3Nhu45Rn",
  "key41": "51CL8Xep1XRbdSFMvDrhYgAnApJfi25uLvDPvWLYptTmWtcfWuR8zG3PeeT8YAo5qQ4WbwNh2KUm9ucMLedER9kr",
  "key42": "PU1aKu1ZgxQjjJwyaQvt26oHQ9uFeED63d7UXSbHWmk8ucTDV663c1p1cSM4LYwZdVxt1g2eH2ck46TNKuqV9w1",
  "key43": "myeXuNzDL5QPbF2VaRvxuPKt7QaaF4wRRomqxJh7Dnw5FWnbk2fZVugVWoMDCXKEezvf4FrH6FFpeuTzQjSHo6f",
  "key44": "4JK6B9qLWkMQonFQj54BjktVEa97xcnEg8VgkhjZrQtGXBqb1RJgwL7PN8Morsfgut94CXPsSDeX7T9xnLVeMKWf"
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
