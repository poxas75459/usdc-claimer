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
    "2f8WAdg6t6nWupyGzznaScwfA5eam7UFmuCujGMF4WNyk5Nmx5KiAp8RoJTE5NkjpzHxHBA6Thj4L8P9yTXidvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NJQjzDtyDP4YMVdjaKHgWmUxPdjDapEAb5ThAY2f9yL5FUWCHEQgMybgPyrZb5JfLkogKtgXJH9KtRu1DxcH6UK",
  "key1": "22CJB8o7n4nB57htJkJVJq5Uf5JcqjWikwDvnjHga2zWDjrTk86QrMqz9ohoHtXyfk8hWguTjH2kE4Agfyj9n5Tb",
  "key2": "49ZWHCvSLdZRRDwTdCb3fWzJuuive32L2wpFDMKA6JiNWbPyJn4tkjok1eNPe8TuFe9ijEPua3EKd4uSWGzoN4gn",
  "key3": "5AEZ2FE38hAfZAmBwZgWYPYJpnNsm4jASDUvty8LLyN89hZM8bSNAiNyGkGsbKQrBZKkCPGECgZVt9SaihxhSDwz",
  "key4": "5W5LSmfEmmx8iLXHM3EXwXAuJHhRiY5AazwKeCQEvU2EngeQrNxfi9MAJLvSGdcSVFvpiRAbefhygjhq7th8PPgb",
  "key5": "KBx4bc6CWy1XxVGNXZo32jBo7uUKaowHdbCKEcCRUUVzzP1DzZ9CA7gB6DhhhjB9NwNiE7wPdk9BrEy9AA2BSnE",
  "key6": "433hqQDLNAkxyFEMXqnUsug6UWuAqbXfSXmdkAsSn4aZdTQger9TYLhgsff8dcKh9nR3UL5fQHgLef14LbB8tDGm",
  "key7": "2bLBRmDEhhpeTQSDFiBu8YaAqmqGXVQPgsrnTrdf55dvDupck43tV6gFdfzpz3X8UK11nnhYXZrZYoyw4ojcC8tJ",
  "key8": "SDw77pE9KzvPsN3J6LM73hbvth1KGiQbi5eEDQu3ZMPBvomW9TyA5SRHB2HmHKYki7Hv8kBEEX3b1HVkoBDLCsZ",
  "key9": "5qVvi2L3aj66d2qoSoW9wnUZ2KnA8M7j39QjTu7buLPgZpqrJqxCjzCEuoR8cMkMwqMWiqTS2ySFtVqhc2LXcGjF",
  "key10": "5FWqKxaf1rkVAmGpHmaGJkwTQBiWtcMdjCq4HJDBTqdKHR3uuaiFsH76G2STTyJjnH77WVrSLYngz7puVTftaFvu",
  "key11": "3k6PUC7QPcmqBDeGohmFPMHYki4Nb3W3yt9refiwbLsNbqsx9B4NFWcJ54s1XpyoWAdXuvwFP9ynYuUkwnwdqFPX",
  "key12": "5kARH4TA9xN6jagugzVdtTh8RHYPmRuuyHL1kaZ3fDZs5gnhduTJyYUyEdSeuuaKd5SRUYp2cTvwBtw1PxcXXLW3",
  "key13": "5DtXjcDjbMKQRkR1zoKFUr4X25mRMUh8dgGDX52isJyrNo8enptcbxmSnTYwiTRi2mxdEvRU6hLC6P9jmHPQi2eY",
  "key14": "5e7aMDX4UFYUMvSXdwy8RLgN1U3a2K83P1bYMHeam8mC7gJ8G22o8ej1RHohNhNv3GLZeh1fKQQY9PtfVZ9zJguV",
  "key15": "5gjYb6N5x57xYMmSuuF1gJkonFbWD8oUA6jmaPW1XwTEJnpcgpqUYKCvgF2p9ZBRGHePGTGMurUWgGRhC59tdVPy",
  "key16": "4Qj7ZGi3GSZbCyJ7KcVJ9jWGC4QN7tRGyKm1td8PMux9wioP721ddbEBHmWmZYxxzpFeW39h3jKVGzBkjJaowEL5",
  "key17": "2wHCCn3dLMqtppfZFJN32WuVXwEcokP1FqLpm27dtv6G5azSsszFdQWuRrwdqhw7mrBnKnnCJ7h1eF8MbGbUdKD7",
  "key18": "512YCVXbkKPr1wF1ZKHRPykXBt4jwPXAtSyHqCtCvSJrFqEvNmMoKSjR3mV4bd76hdpe2TJko5rpGuHNhjM8e1ZC",
  "key19": "qjtQ7aSSrXkNcLjriz4rN6PkrzgSRJiEEjTxLr59N4NtTGaGE6FTStsQ8GZi9fuMcHqcJvrsoAfAeFKNp1nMg6W",
  "key20": "24m13j3h3DVryaRn38CvJr7KJBWUfb4AAeCWLPsFNyZ7ZiLJnfRzKFk4e1WcYUQHApRMSp7gm1hCEFyhGEcGcwQS",
  "key21": "4BvWZpxFac4EbzYQLtFFb8fGM3gi2jjxq5dDKH8CL9VzygqHPXbEqPNwXoc1K4LXoyti9jKvRoR664UrsLwRUm1e",
  "key22": "5aU6krfaQryKDBh7b7RH7xwB5vRQpAfLt4RQYjtewh5ACwcUcUP1oBk7z7QtTXtD47sN6meDfpFo3LjDtCM8Jsxw",
  "key23": "3ybnaagTnTWQcA8otRHVBnmcyuQmxPG1x7PYxTMFDhPtZh5n4rKXjx3EQQ8hCss5XXiMCCFAeEU8EJVsGqzXSv4g",
  "key24": "3mKDSSJcZP8XyLySFajbyxY958N4pfbf5s9oDZaGQhcGj3AEN6NvrCkWR67tg4zaSS6pSrRC1WYW41wxdzFXfYD5",
  "key25": "3YBqbigVuBH2FXXWEty1oPtfHsZAjp7QASfphWM1CT2GA21ziqGtpiMYtq78AuDRY53FmHuGCFMvPLrMjCLLeQGg",
  "key26": "3VFSNNXy6ue2sKwUxpUQfxpeNi1VQthDXxd4DTHGCoWbTJ3p6AQYGP446aSbDDcWNL2z8Xj6TtDNJ1FCSK6uVQ18"
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
