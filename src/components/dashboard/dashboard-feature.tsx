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
    "4r76EVGePu1cVEKyVqAv4VipJe33ycHZrnNeFM2d4yWcPs1wkzMGMndcK3FBnQSiFYxvd11Wo5p39H3n3hc9gmgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66P1dprthPwXy5dCE7vPPB6bpfLyWZzXF8QYuhpGmWPA9ygMNgdLPKMYEyMb6qiodpR2EN5JzqnpSUYdwz57ufkP",
  "key1": "5tXWg17iChnhwdDLv1AuTGTS87DSYBgdG7N64YW5ZJCkq9Un6XTqjpvzaadQqmsfXe2ujTUdcpn4ifyytSUwgz52",
  "key2": "3VRuqmez9gTLxnYVBxo1wi654gp5xnYD1hAjJzyhhMJV2EC3Qs8kyJegE9GqXzMfbvSdKLqU3sX7YU2dSeG9uCrv",
  "key3": "2kxdYRaf91QRCoaA5noGmu9RtrFXJkoRyqmXgpv4QFWNYGFPd6f9LpphWWkgUApLN8oSvr2myJfN5Xh8Hg9eVMRU",
  "key4": "31pQ4gkyR6PmV28WtMWr2Xo4FCfDWsknCjx2HwfnmoJm3bXvudwEcZ3X5v4KDGyQEwJHNo6RMx4FHY5cT8cM7W3z",
  "key5": "5W7jdYkHAyg5N91vt3XyQybnoQz5T5heFMWHHkyJPtj7WYLij6cYpZaeVR8Sy41UaCXXKPkb3ENBzJhKm7w5dC8H",
  "key6": "33x92cGNWoVWjYQTpZ5Uc6UzbqLyj2a7bt62x6UCfHp6q537YQJ87cXjtTjg9pZNiMsE6qhaWXffnQ96CXwxMmw7",
  "key7": "rNrPw3UZmVzrTuzkW2aEVAgPheYMGRVGsJM6QeNRSratF6vjMjGo6ND2s75xzi7K7PfGZ8tfUfkheD9QjKViaBU",
  "key8": "3bGEnkF4g8Z5qJjcRqCpcusdz6i1hRh98CR6C2eveCsEUE23xLUxKk1Grwh8wtEF4eroW9SetzmkBpm2aSw9VaK7",
  "key9": "qWrHKgn7kycabLrtVuLzFFSLDTxesDZGi96uwj2xrDivFuum4W4KG314hssdAa4ZytxAPmtSfbCPGM8xWbkRU26",
  "key10": "5SxajTUznUYEcWn7YimR8Bxja7xmAEGFSJEUpBvnZS3JUsSZPAK3HgqducsPqfhpmx18L1BF2ZWnATwdWuYU8Wh3",
  "key11": "5aRQLVgBErH96yEhgTpS6oFma8kvLWawic5chowb5oJJebRRbxRncVS6Mm1kmHu2JgdEw1aSSRLxTbqDise5Arjt",
  "key12": "ULgN1BS2U5YNovRG5cT5bxzj2dC6LvfiPRRs4eJbXGXAWn89qoUmWErkfiemiChSmJPtzoKesGkenBDpA6Mcp9E",
  "key13": "4kx9erQsYP17rUZcVDPKA9ssgen2vdQm4MjUyAEJ8mUkjQNeqXCDy7VyzuzCwXL32dmqUWGLSUaDwpdWW1Cbhy51",
  "key14": "34GCjuAR7sNQMYCPpN9tE2Qw6Vk2qDYk38aij3LHZCqfgvTEPth7mUqqzU7CDv6ih4bvSQ2Utg664f1kvYu1XE1E",
  "key15": "4S45u1zr4VHpgEmJkVtrcyKp1mCSQEMCoa7xpwDipZkQqAUPYZyLfVDJUbaSFkHxuw6E5EV91zZxwqb5ien6aauR",
  "key16": "2jgeXK24hjxzbaJe8VqaXZfEQCWp24NVkKVjkoks5sPxtLB1bB58sJjksqx6DXj1rtXhyhge6D7kRTA5HMSvTZ3B",
  "key17": "3DbAQZ82BZkGRWmtgEmVQyP8LrqmMCnkrZRgD6HudPwUgyF24CQ1iVdHamsEethmLfu2hi5UZT7ocArsEMFMZtb1",
  "key18": "2Fj96hMiZ2ZPqtnnFgacctrGuNvXo1fxFvoZW6baEbhJZe7wBSZ2Z72jfEGCoaWJ2u8ztScVYMW3ig5f8zArSzzf",
  "key19": "29bJ7Uo3sZYnujYnv5AY5yqV6LMDJoFCWo6T5JMdFKUpvEQpEHLnAvPGN1MiYnQssd7VzVF6QFv8MeieZUtufPRb",
  "key20": "3hfscP88Tn85ZzCPiEMg1PRH3hMVRjwJFnDXPUMd3zrQ33FL6pGHCpustRXdehiH9j7AienChpccaJ31m6UiFd6a",
  "key21": "3Jb7fdSFMysvRhCZuMqmDgvT5Qy61q1JD9PrqM5bWuZ8kCmbwfiyYuZv5oFzf2A1wJtZW68xRsyXRVnnvEfDumzw",
  "key22": "5Y1zF5DG5fG2CziBYF5VN1et5ELTBXLSqjHu8jHQ1WTw6SWBwBRazudz8mKZ4vU2yA41bJ94ymZxNcQQawr1fog",
  "key23": "516ZNR25j6Tx8Cf4y6YCipsr8Sy8phkhoqbSM9D7cHzcLDonahD6jBcWKzt8v5kQ5a6v7CuGo24cNW4dy2mBebbN",
  "key24": "5qJrQshjZi9YxhrxFxhNWY7kGaZAvcFgHgY8QVPn7jtLkJgo5B5gtG8kaa2hjRj7ZudAFa4uV6GmfcDeZbAa6wbD",
  "key25": "3HN2RzdeFMK9eYtestX5VxAZJ6yEw9P2xiAxTJ9KDko7UYjkbgohx5JEvifKuJ3QasAY8Cd78KxHij6RdTddscJA",
  "key26": "2ngbGPe7aFQvqttsPyGWYUnePHJWqWvVUKg7tv2SiXUoDgGGESmVWqVJvTEdUBHpM6CwRvgeXKbtrYKfxaiN1ApG",
  "key27": "4pE9JTP6ZerVmWWu2vPmDoLK1tNfCBHQAJVxaYu5ZNwCKf6htnKS2KGpAV7rwvU2tHuP2x9TsBVwweUAp6yCw6bc",
  "key28": "5ooH4zWLJpmTaLdAT4vdKfebN2erz7MVu1q4AuvmXBFzUPRarU8XUaFgA23d6DYKHp6Hc2xhuxQ6fXvkuL4fosgg",
  "key29": "3FUrqxcfq1S4PcgfNXeLicPf3Bcw4cdevV5RQ5bRJxNNY1jNSuTAwcrEGY7dUkic1LrEtsv4tvNWER6AexFXdyZF",
  "key30": "59PNLG25hrvzjSScG5iQDJucCzb27SNqbzon8YTyE1qJDtreuNPfmy5zZvFqdZ7TknR8W7vgiZLEVZmp4E9cZABT",
  "key31": "NpBnuW9eH8azHcEWeuZvM3WHHfaaZmSxD9Atbi7CeNjbaSujNnRpnKP27nmTdvsnWwMjZ46M7sZT2qpn1XMf9AB",
  "key32": "3NoSoMsWwgVWUDYfhVcVWaxqLCpCwUWJfgrcanXgYYVVrgvgtQiWwNaVkyzjPUjGfcnHdGN4LEAx5LEHua7F5SDv",
  "key33": "2LmtHPKo5rPk7Cqmri2m28LgYBzKQ1rq6xmRBqvNs4JpmcEB4qj5E8qai6e9aGGNg3jCiZKw58TKHevrAe6CnJQi",
  "key34": "5iR32TyrGTrTytL5BXtzsxZP88zpnLHGBE8noWh5dfwRmtCvTPs6GX3ueCH3W9pV8FyFjqdHusHijZww4RpiCGts",
  "key35": "5jbeAhvZVzyi9MkcKqhEzo8A2FoNwfJRCX3fU15cDp2YMQVKbf9nXdigUNpWmYC4N8ZiQ76CPKQD6CF3HyFuyki7",
  "key36": "5LZmJTAZw2jCGUEAcGKLFkMa3Lq74YcKuj9exUSGzDophMWVsYh5G8FMRzDXdN6wvRVnTHjiXkoeMvJUekK9BaPQ",
  "key37": "5GmHf8XQ9XeJs9rZy7RXZyFwgPvgUH6zwbTmgJyMsYNrk6BawQD9HGurs3vBxqRZiJ5RrdFH5KyBSHJnXLx7fcYj",
  "key38": "5rGUB7AhCQvxvUA75e8oDKLH51bY1u6SYvpBNtu2kTsus9KSwBQvj3edT1hsj4YnZMtdafCj1w2X5DtFMzHVpwfM",
  "key39": "3g3aRw8v6UY7gjpMhkoqkkHrA3GFhZph6zJvunGedDNpAshNifZMRycSkihBE81ex1bx4GqJjUX1ujMuJR3PhnEc",
  "key40": "4VYeFXiVdQQ8ZZ6vmuAh428xhMv2jR98nZoXLCsvrKt9tWNXB6mmJinY3UFNAFTKzYsSo44MuTrNUZn29hsYKE1T",
  "key41": "4QX89jTSvd6jtC3CuBj2e4nVbthWusY8MvjpnKon9G9ehtjJbqDqjzT2fi8X9g5A4jBi5gXWZi7FGhdcs2MafQLN",
  "key42": "4AT4915ytV9x4sE5pz32qRiGtfFM1fwygxNtPCyyNeqBW85ccHypoURmdThHTSaPLsosw2wwyZ9zaLzcR8YtL8TB",
  "key43": "4865cMbK86rzXjknPYZeyRdaywgMm9b83UAEhfNBR465m7fSrHc9jv6B1Wj1nS2Qo4Tfm7ute1UtpFmKcygU824S",
  "key44": "5yPcPqp8VdDesLB7fMjwG6XPuHtU1agJ9b7uWdChiTZ6rXnm8kNfcr6xBFodcXhpVyQRBjvcVsE4RryAb1ac3uk6",
  "key45": "NXTLPzU9ohH8cNVE1eoDGSBxpBjRuvf2CS8j9SMeUXjrWDK4tgvJSFbkiWWtS5XN6U9BYhTvYw1gVebTKBFDVtj"
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
