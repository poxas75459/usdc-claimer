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
    "2uXucM6DQEdiCn3AXavB25j4vrXjjgLV1DXijCsPxmEhLuZGtaww2hAwM52ddDMqJ61PLFm9z9rFB6yeugcAnLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3BZqh5a8dCVVjaELQ4mJW86L3q4QNyqB8WRgLPceC858bzMTBD9GovPDKL4545CP5aLXWgwdCrV8LzhM7oKjt9",
  "key1": "2XMkfysDFmSwjntNzEhycKYpggNAKicPk65rA9fnQNui58YT6fHejj5fMCYsQTBwdJUq5yAUXS2rXmR2RjFHyAk6",
  "key2": "5dqtw3yr9gUBzBifvErEtx3G1buxmJ4vWfPqSU9W3eLDQQhPwLJMckMWL7XkwiAcYHDanmumGB2x3mWjRNgN3f9q",
  "key3": "2QJF1AHwYLycQUSe5KrUsbuVahLabURn7ifHQ3v1BK9Dhs2rWZXNCjHpHpbARcc7EWVkhivFGUvttV5iFHdQC16",
  "key4": "4kt2fYBvTzDs8QW9GoUxSTuNpLhYjSasodCFdbiTHwVMobuqJgRzDhTB4WKtDQVxYKE67zz38xpxPMwAoLgcvc6Y",
  "key5": "dHZBsmaZnhU2qyH3q3TsYpX4iyDmeissdZaK7cEBwum5uJ4NXDp71sc3e6gHH54oD2Y1S5JHHbRNknEFAoYCcxU",
  "key6": "4KSN9vG2SPJEY1Z1avssfo8GpvYmch7f2bRUiYtHUWk9upXxd6rE1az9WDF3r7WqXhKqWLkKV8CwMeP5EYSiAAV5",
  "key7": "uCQCu9GpJHuqU2q1YS7vt9CC73ZKXuu6utBz4L7dwxQxeK6zv3ptujrMAuduiEPYQ3MFtCq9kMWTiFHGqzfJdrQ",
  "key8": "3A7wo1uiAfZ7m8VooYXxgHGX7cAraXS3ZzZ6YzprFGD5c1edsDWCjmepj4YxRyjkDRtcm2uxCNUDsvuQ5qTKTZmH",
  "key9": "2kBQX5VRhL7EDH6mbDD9CZAWNTPZF3vnBiBS939nyJvAPEP2ffuf9zkcYbcZ4PKZizisCHnqwz8a4p9aukA3viVP",
  "key10": "3KbTbiQcVRk5TggaaJ5oWJWwnyKVgKJhfL9UF5smnkfYX1tEEfyjoEzd7GaoigGh7ng54DyBaKBJKeBrZYZ1yhRb",
  "key11": "GqHNHiabrZkQ5nRu3UQd6ZojbyuGhGwo3pTvSy3zHuDTx5uKNqNoZJLXv44Rgb4Rjy1EAQAuAc9VyYV4MDK9MwD",
  "key12": "2geeRuuKohBdDSx9kfZSJwbPCvZChKeLBGsA5cTzkE1F6SonqSgnKemcXfWG1eNCuCi1UhPiFZq7aSuX3cABgrtB",
  "key13": "Ck9niyJsaQgrk7afxgyYVFWp3ABow81yCtaYzSouoLtqoL6Hy68qiu2cv29zGLMbmf5H1FbCLD6g47ci9fN5CG5",
  "key14": "4cidukCQLrePHF6PzZNE8ckFrfY8RxGVC1WWKA3t2YZoLnmD3dTbwH11oKfLaZnj2gn6E6VoJRK3GckScwqf6Uzw",
  "key15": "4QoHxS7e1FzY85MX3XTi2CQc5c3jntPXAsDmcZDKmp2QhmT8Euvy557BJxaxr3nG7JP5aVdVUA23ST9DVp4rbSe3",
  "key16": "2Za1xrfGLcGwQf8kPvzZNPvDJXdbXS1phF7j68LfLHLghK7pqJo5r8D5Lq8syLGioGBMtUQg9L5LZfv7Ys5GEZZ9",
  "key17": "55Veg97BBA2TkRhC5ojP8Lx1wgN56dnz31Npwj8fPNyQm1YcAcjMZtkn84aEvXsLn1dovhBM5cMimQHVfqWmALCD",
  "key18": "4SYmYqkJKJGu9aB5Pg371mn2MG4B641CAvAB4rErNpQn7JuGUZHGnp6DMdmLSuSGwXPG247EtJhPkNKKjPpHsef3",
  "key19": "2EQVCztpSa9hAJpnHGDJArKGx1e3MXwXJKEWjGPuaVhjaL84c5ZaJrqPoHYAbdbXmP39GnppZ3Q282YJGQt8nFTH",
  "key20": "4RyzL91zqSq8bHSeaAkrq8dqZHM8zjnZRqdxwGhrXSxLpnTjx6LMoJpvf3wJQgztXuYt4wxNrL2YBX5JWP5FLodT",
  "key21": "S4T1c6jBbHWPB3Zqk1k2ddLuDqrXUAd4QxhXHMnBPz7z5QF62uCEdqPpC51Wc9xZHSmBsTeYsSw3iNjWko76T4M",
  "key22": "5x9GmvowUjgmizNyUDFfqvt23PzpMMUEgLNBNfkufGAVTsFNtjSjEzD34ifucmtra96eaToaZfz5Hfe13cLyXCgc",
  "key23": "5xdUaHbqANvdkfZV8Zu2z5wKHHtf5T5xiwBvCUgUaPRQoV1Wx4YT1BdTok5ohjnBW7zFJvxaSDN4wc7sjCpbptnP",
  "key24": "5uTLSG1AGFKXHbZAenTZw2v1DsKBGzM6fvLmNBAE5ZxNgoUAczXxxkikxFNxzQjKTQqUsB8Hq8hfP3V31cuXFHaR",
  "key25": "245yRFAatZCibmySQHfDhgRPXfbZFpzvtPgroYp3Bns5HgcYf23oVN9fDR4XoYhhcymGL3jXM4o3Q4qwHQaTkWhF",
  "key26": "3HZfSfPREWC9jQVHu32Hvd4T913ckH2vdDgnSYTPzTd3Qpv6JeVGpkttf5ow5yP5BiTH3AvECT5Hp2xeDTd5HAaw",
  "key27": "24HmtfGSqhF96G7NfeCRWUKM3RyHinAYoUUacpup9sDFCPbnhTZGAPz2P6x3Y9gBvarsaWaD1XS8ywmmvPh1U1oB",
  "key28": "4YW1n2pragwk1qGQeqxwFKz2uHW7Pq3jyn71S2NAoqzmTBPAoa9txiC6cKfySY3EKFcs3E88c9W2QAZQYiZXyvPp",
  "key29": "5r2kwkqTVCcw4YMhMZVUdtu21euG8EkXgQryT1kUCbCJM3tHLtUVcqBT2NjvHuEZYCFF4mgwypU1hQNXZbtwQAoh",
  "key30": "666wZjkzpEriA6t8kFfeeMufJ69UKy56seFU79CmK5DoPDgVHBPgiFoAan9fqjZPXmgJa7N14rQ3GfEJEQHKCrPQ",
  "key31": "5NCBq4opygxCjYSWWVNNSECc9uqrnZsteDVC6PG3Hptrqz9rZQ7GuPHChfDeXiXtqHJN1ViTJtkw8ARbQAu4U21H",
  "key32": "8L6rwDaULpTN79U2Ljs3eKXHD7WN9KqiR2SvuJMt549PT5oioiDsURF8icT7mfTG1Gb2EtGY83QGSm7yNzKsj17",
  "key33": "3GU1xUAdUkV9Y9YEt7jap6oYitPHy8iKTzsCZR7P4fZDpgbWh4DnbA3ZppYW9cqJkZ1LxMW7aZHt7hGZM724aH87",
  "key34": "3pXKJXUgBsCj9PBYJA31LbsD8irkyMHVeSVqReLKXWhHkNq4FVRC5bdXEWGmFfcd4ptqXuSkxUwzciyrjuscX48a",
  "key35": "51pRL1YKKzcs9TcvGwEQHNtdgkQjWBWY3TFuS5LPZ8kDwTA3ZKwVj26D8X6qLU2svTAr7bL9FAC2ZwMnHcK3Tauu",
  "key36": "2f1gFRjzEPwXxehPVZiw886bLVZ9dSUPv8nRxwhKC8jdmv9VaC8nzNPRuLGY3BWrpPZ7gJKvPn6UYJnsP5GhUpkP",
  "key37": "2kvvrg5Gyfr4atXnB5G5voovNvxPayrVdve9ifoLtZRwTAtKAetg8qrXEqZ1YVQZs3Qf6DfYZPBsiKTGc1ZpdsWz",
  "key38": "4Ach9xryscGrjCoEu71AW7T6x1GkuzB5d16AiG62eZJSyQjANoQf3r5CSuBze1cdKHz96MEbPkCz8amokTpTemG7",
  "key39": "cDkbMXDwSh4t9zigMU4nEgLPGVx9DQw4sGx9g442wuDj7U4wKmqWCzSpVuLBXXXq1d5Bhjmyr1Ns13NzB9Fo95b",
  "key40": "2qZBW8W3oUZnTTp12h8AeoFffxgVXuBxzRo1m1L45hcXFigeLjwQwG8N3CVLn1qa9sNiFoaLb3cHtML5ffB6q77C",
  "key41": "fb4mwS4vjHqm7tFsmhUdT1StHqMBpKKNQZGZi7H9mKkTqm1fbPkQoan9TsDaX65SY4bQhWNAtcHwDoBKHK1HMPR",
  "key42": "3QNwxMpRV8mZRb4pxAhZwFnh3deYQmx9AnzZrqiPjtNDkN1th15EUpzgTAVt6DnAeqMeu2JpvMGmZZAKYvDpdnDN",
  "key43": "4ZKiowqLNX1fCCwMm5LWq9pEku45mc15xHMTEYJKapRt8MKR6U4tdAFAjsf4SU4kmm4rz3vZFgDp7beibZmhWLM2",
  "key44": "5srJEVycmpw7JPDUqxkNqP1s9xETJsVhjGzFwmauhEeBgvzYe1nsjavf96mpAAQdPAAXxjdZ92cXA6c8GZmoHCM8",
  "key45": "4njF4hbRnATNXpn3z8fBCpuradEpKyqNhtFPwRdyaX1vuuCx1HwbW9PoAWvYctvCpC4yZYBDddCWTJXqNUZ8bt6b"
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
