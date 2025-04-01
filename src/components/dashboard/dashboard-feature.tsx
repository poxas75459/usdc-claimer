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
    "23TsQtYKPkV82T3DSgYmtt9WJC1taiepyQPz9kWBwEnhcy1N5UCxbfevwn4Yj7BrpT9hErxCGXJKbH1T6GTxC7AW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lek9sMkv5VRkJ8P4FnuJm5Sdtwpkup1ZGFQJkFVdU9sug2gU6XRVqkZN1RsN13XpsiZpRL2GaxLPVbtjY7GQaV1",
  "key1": "4LP2i34Pv8waxWEJFfAf2FaBqdDCVGMC6eU8F5V9qZJ1KGaB51oZ3wriU6ebpBzfYJWs4JiaYZ8ZiiZ4Z3k1ssTs",
  "key2": "24ALivqr98Sp4qgAdpBvheMkh7E2H6jbWL17seBEHHaMpBGLP46UiNtwS15HoDK9XQeh81diRBFDjF9CSrhcj9UR",
  "key3": "5hDVxH9nJabUFxqV9P48V5uYthPDZPFHJXf3TidFLWovT5EZvEPJ6awo9DHhYJagjYwuPTUupohPq7LMhr6op3Tp",
  "key4": "5d6fftPs9sP6ZZ8okc5YZqupsrMbtRySw1TmfT1q6jnnhjq2NVAkrPoQWsHwDQp6bfMmtehxuPvCbv1u21oFzvfX",
  "key5": "65fyfN3CLv7Z2BiZtgXeztzM4MQgY3gtGNLASZrvELPcHJLWpFmYeVXiV4H7QVUFD57NvTiPVHwhUTvZH1ER9zrR",
  "key6": "2Gkx32pjdwDtvgWmU7A41E7ne7y4pWDik21b2UZbCyXYS1gjB9n38t2tr4iPwUd1Tse2UJ8Ctm584PX2ybUiNeHh",
  "key7": "oSfnT27xHVZsFuNxtnxs3aRJCKANCvWGffbeKStBUSJEytyNdsJtxEJW88h1LQ2atiN2gqD85JXHuSRJfk7iv36",
  "key8": "3MWwBEzcskr11FnSAM625e25jhEjHWFgWxPejrYcH3uwyJHvGhpGCkpbVsNnrQAm6XY3XWbpPBHoSkz4iYSKreZN",
  "key9": "WSVZ9x7pppb4gAcFKyqthCJmCYyA5v4DDaMUyKJHM1KfnCUZEnPtr7RiMAiKB3atvmXVrmJK81ZmvMB7him3465",
  "key10": "5tzDbYySxFkaEeqo2AhzvQwKTqFrcr8gK3tjD4BUGDBhiHJKuDyDe1GQYBEEYnVvVgXNnSvCXWeAy1VbVJ7ndRb",
  "key11": "3BbZrdm7hEb5a2WCamXfXTrfbYwmWry3MJwhcmjbQfM8aTbxieNG5MUmnKj5NXnKDgRKQbzM26qqEvPhRDNtSLg3",
  "key12": "2caH32zfykJM1h1SW6X1wxwtjstu6q5nUWcKbCEG9hh6XdxNJVSb3R1tMNJnLjCg4WduR12mqqb1YfQP5iYHuvLV",
  "key13": "SkkZRVRk7CRfzHk686mSQDbBWD7NX6YLvm2ts2GTfPG9RCRySUsH7oEMhSRaxsFYWNRXKmy5JpKcUgHrVfHaZbN",
  "key14": "3u9wdQEsbQmUBeKLVji1d8DZKiKootm4KwXp6KBrHZyavHjXwXQgqhUGVXQB4okLHaZjnoZAvkihJz39VLfVYQ6t",
  "key15": "4igvTyLFsmbXfJfZ5NC5MGLNPEZBXyub1Lm2JNSX42BxG47FZWr9mWgTJxij3BCGh1NCjsKNruM7EawbP3vrMLs8",
  "key16": "cJHiFb5TXjFwXg53YrMHWZo4AX7KGt61GxU7zU1oDTdguE6WCFwyNdQ4BmnVLM7pwaJ4Q2d2EVCzRpz17YwLEWz",
  "key17": "MocRFuRbL87kCxgu4sKUyEWCh6WKeaw31YEwQSnAZZBHpof2bvGW26gpnL2tGeddDApcPLZBj2USov9K3qkWJ2N",
  "key18": "3U7RiX3EYS2Ftf4PShRYbXJaoGxjcJoNp79NdHZxbnFigqj7foGC4YiW9MAnDQF2NmNE3Rp1ZA4RHn9ESzttLEct",
  "key19": "2Xc13yKZu4bCVtyYrswHE6aLGfV8oLLStXFmce5t44CLbNgjeFoMXrogDZoxFzfgJhvva7hEgZk5Ttqtr8hfdgGE",
  "key20": "5VSp9mGctSxc4K1LKJbsUPN5c4T9iX29sfPLGhVUmJ2krgsdLwZ2DKA624uepKYWohgLf6jMW7emASgWfvxsb79S",
  "key21": "2rw8UDqQqg1FGmxXSXomxozbxpDf5BCg142hqZyrKqwrMfREgn7XraoYsBQn18MQna47hKVBsd1uUdboCbo1cjNj",
  "key22": "kitj4BRDK82zaas6WPrLPnUZ6dpNaNcq1mgMyiLnDjvhVFeoUtWVjvCfGM9ZtwD4RdX4tdzhQvcgSQfqLLDN9Tj",
  "key23": "5CZpNvsU97LvRotWhmSkCmrbKmnNCdFTzeDAMQqMspyodgrWD9Tn6Kc5p1TuQKhKdakE3hUedQUkiKb6yhpHRVvq",
  "key24": "3hr9x3A7GX1VhWgdoxfwLaQo5vaewsZxCg2ngWCwJX53vLKZsQBqU9RpcGag9FQ4e9EMiiXumAeNT4rkgcAUHZov",
  "key25": "ycxjuxQ3QuX9tuYbJNYdQUsugxVBqqwAe3b2XvHcEsNCjBSuxdxrLKTMeFZL3Y7F3MgzEAbcbTuYUKFZmECRsSw",
  "key26": "5DbPjq5vtC465aXRLoWhXzY2yPRh9x38TshmXCn5RzKeqqWZaY1B5c6ja6rcBrYcYDnwocjBLzutLRQYd9jiB6BZ",
  "key27": "5hGJcpZjkvuxQ3C4LdSZVTuKudVj6PnwQUtbmzKJbGjvhMJoLUm5yi32hFHpo54ELY1qSxsrF4a7ReysSGhyvfm9",
  "key28": "2JeVje8X5P9sWXwqLNHDBcydiZ7k6F3ibuDjVzAmqttHS37HwuDGeZnZLvVZ6LiuKmCUFhGZUy7SHPqnTH9pyWVi",
  "key29": "uJrCsaHefDG2b4LXEyGGxowH5wrTRYzRh7SP46mCA1XpgQzgqN6pzBinhV8CmZTS9WRWLayEmZaLSWxXvWk7Fwk",
  "key30": "385CWndwFkjiCnBSV3gQPy13yXLmqaUBDqYn84qBBQAUrL9CidpqrMUVBaDeo77W4LKfcXXQiaepbNW89jqhtuvv",
  "key31": "5fYboRymTAuud7qNZKrLKRux18YngUrpirvhZVTYAris4im1d9xZ1WzZzefBnpDHyH8D3twnJtHWUt8o3qHcEcb7",
  "key32": "hnn4mG8XLM5YWJoBm17TUjZLBAnY97jkCjUj48UpNLzn33W6sXCN14bg7T7UR21qgvHijodnwaaZDUFiHavbhXi",
  "key33": "2G9gr1VVUnQHW3o3codwzmLUUxcRRrC1FRcN8n9jJzQo1NzVePqhTh4WncjhggsxK778McwPMrfpq6cY7iUquz1p",
  "key34": "Fo7LZwvVn9GB9MY4Wkr44F7BFiHkB7EqLQRHF9vVTFKQ2n388iizDgE4bNVxzwXrNWvepUn9W9iSZopccgy1Mut",
  "key35": "5N54rHKnGWf28SmM7SqwkrwL2U2fK65wnNLuH7HDkDHANVmzgPD3Ted8TAmgoLpksBmkMN1epYNubt3Wxwf33wif",
  "key36": "XJJtRoAvmQX1UaUQNVGnNoKQmykUchpuR2KVFsMFF7fC9oKMMAMnz7eqP6g8MnuQwTqZGe6Kv6PmnhpRYh8b4Cy",
  "key37": "3Z2tJNp9xz1sNdectSjCCFZws617H4qr8cQCbdtSoYxBSHgX4GeXdEgqXKB8r8ACtKV9hERFF6SbqUa9W1HNmiU5",
  "key38": "5q63Aq3SbqeWcj1HcE9xGuUwwVMzMDikDwwxzNuszSjHCm1wEZe69pL8LqWSekFiqJhZd2Hn6hRwNMc9GyxqELFo"
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
