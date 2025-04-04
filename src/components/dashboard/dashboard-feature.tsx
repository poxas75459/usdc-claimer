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
    "6NCzY59dkSmbe82zpm6nwaVfo3sn28k4WcqU69x1E5VvxFrWU1a6Mogbw4jsNeHXWTJRvp5YVczJjJABxwsxrDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vBzZ1VQsgNBGq1sR13xnHUjgTcDXMDitYQFMsFLPGfLvTMxyk3ynXkoSCroWnhqVPAMYX4jYRzzTAPkegREYyUG",
  "key1": "3BHTsHw1v44Mod9zD4fj5EwsjkYKpbGDsubJqF4trbbEwxUY6f3sxBW8DNRGhNF7RqFUGk2WJsJzj3STYryJBdkW",
  "key2": "3KkSMJuKPhZub7pfv3yrRzvkfXDpUnPSntATRCZX25aeo2zcDiMtqw2VkjwcxLA7QNyX5mZqh9Q5SpBXN53h4EzX",
  "key3": "X4PgiiHnfLU8Giz5t6ATnmjo3UJKc39ARB8Yj82d1F3SpNY4xVVVh2a6d1fBjADSyxNBo7ZnZW11MwAZTVXzzFw",
  "key4": "4fqgpvEM5M7kENGCkWFhFqHFiBRKdWenSNaGkwCx6BV7sDW1RLAD1qvhbtks2xSK8ESk8prVuooT2NN2BBbHXtmN",
  "key5": "ZePtBePD8DoL2fTSQ5jX4pg5hnZi8QUiyDQB6HMTicSRKM3QCQVdKVnzQ9gUYMWw4Rukg1Q4jwS5EFHnN4e648j",
  "key6": "4qzNvrK7tM9kSKgGKo432KTmvA8cwB3AceQ8brYvzKS2VaXAaYq5SLvGbBfGPUficbEGJ4nzMkxcMe1RgLRwuEXs",
  "key7": "4t97Pc6rd3Ngqt5ZqhAaojzAfYSvAQc1oCvLnowcqAiqVDCf5pKdro5pbUuevv6k9KB1bbG9Gx9dmdAjVSXvHR8o",
  "key8": "29hw917WywGHMuXjAzw6xA7UYG7hx8hFEd1HNFG6ksEzttkwpAXBzJsWDcjFRXanwVY6BAwwibAX9gZEX9sB2xdY",
  "key9": "2ei5Lo5GRtjCgEAERkrVxQVuVVqU12q6KmW3itnfPszvEQHLHhygPBRRFaRKs2UAVLRj7u7DPRyP448drNkmsEem",
  "key10": "4xxYvJLeoifCxDTVsPwBrjFGW8iyQNt9DvUR1qd7TDEfDqHQi9fh8mi7ygdEcV2tqSGZxWHXiiNE8NteQBgpjaQ9",
  "key11": "2CrKbzg6N3zgwrFvrWbijercJZLbnkkxNopqxz7Rkqyjca2Q935A5yz7Po8CXsvL8Qsuj7xywBz22VfbViAgJY84",
  "key12": "33V9xJTaN8ezuB6sBCcopcrtnmaV7vpFRLnx5hTpPc6nexQpX93mkUiRSN5uFduTB8eDA6i2n7isaMpzSr6F24rK",
  "key13": "5E1xhDAtyLNXtqthEMaAYNSZ8d2VEZc9PhSmodWEwoWZH2hsBAjXGAoAvnXiQxrvtkGh62TmC6tbdjXwUL5e4cDb",
  "key14": "z2jWzrgRofmaTpPawvDBRfqjsKr4mZh22CvkacyPL9dKmLUiEB9GAr8q48cvYdSKWpvQaFz8VRnQtWwcAqArepW",
  "key15": "52pXpmUU3HdEfXwPmmLncRuyFSky1Ruj6MahUvHTJuMsVk3FpStpp7o5MtFsFfoRbHEmd9MfTs5CWWQxqHsXNW9h",
  "key16": "3uiMZhneWYWEmK9vVnWe42LeHShFzzSUrnRyfbDk1RBDxpvAzpkFG6SoKSpy2CR1aBbHTiWT6Y4iyfybJJ43i6et",
  "key17": "57dmWdAkuMuTXEbA7fDW33LwKYAYGuzekC5yWtmdg7CQWTLvJKiUs311xCxEFJ3FamZXVZoSFMuCHz1tFz2JfYp",
  "key18": "2dtZQkog5NX1XtMJo3mZnJpLugL8dpbmhKkabCsrxupNrke1Dk3u6YuYcmck5rTJ6pvLHFt7EDbfi35TjaVE5Kdy",
  "key19": "xWgLkkKPW42bCf9xk24PSWQM7KFkAU6xj9F9hB4oBFJrKMoctV7gtmwye1MrzCuBEPma8JEVfP1qay9gVykPi3W",
  "key20": "65iXzAuKkwhaLYHdZXRKBSDpea1WzA7Y5tTQFj1yqoFdztT7eVyDF9a2XdiVLo1QAvjKbkfsKrToUifntfjL57dn",
  "key21": "5J2uKjsGb8edv8ojSurYuJqTSoGEUid2kdxF1GLEUhRVqHiWXavFYrMRMwq1MU6jBVNQcVUTj62BhsYjE8dPK6JY",
  "key22": "ifQ6KwpzDVc63SzAiGqhZYhfrq3rSkE2PuPenabrffqKPJsoFoq3sjXYP7roXMzqSP43rkkSBA4jhfoeFwH13py",
  "key23": "4P1TTYUNUdwN7AVbYANe6SavMdr8fSmGux7wWeMAWUMtZVdWuQCp56dL4GtkhMtuAdsTpWsWEbwECqTcRQ93YcJP",
  "key24": "64WW5oUD9k1qi2BGTxNUkhrnVK7Nv12UR8QKEw89SPBYR629WpFhmkmMWLNYba61mKT59eeaWvNKAXGjfstJv7fC",
  "key25": "3kuoBf9jbbY1GAbu8igpwJnwhFfZvybM3bHMcEWuiD1Fx4iCfNWEtqmFFy5WgSNBCvncQQLkhXtbtoFWYZtCTjCT",
  "key26": "KP9ngrXjPVFKtP9WtCYoMWnCwoMr58usPJnDXT56cdLUg7feQuGDfDvrZuWFPWSK4to1PPc9K2A8fms3CGLZUw3",
  "key27": "3rUvjynGErFCvFMbUtTS66mb6kPebjgwFoYffkaoubUCqaqbmo66pEE9aPg5XjfyvPLGARhhCQnC8aYY1wVtcdwy",
  "key28": "36pwRz6JYNDGKbmXfLeiSQzBdCbBChRrVXk3wFwq67nqVRUXJUKcKp8kFL18ahDxaQiQGimrox5q1UAZDqCWFiFC",
  "key29": "3fdYeu4KvNWdpcd6iUmP8VLwziassgwpxJVKFUvCXSA5TV3YVEbKT38H75MaKmTWNXvk3chdCRWvY3VFW4UQRTFz",
  "key30": "3TVvB81tbHVpFMMu4FUfDRS2wTR4BFfhpqD3vPM6id6N3Hqr44JRJHWZVFgkWxB2cideu1AdxrrCq9JUmjunBoHm",
  "key31": "7UQgCp7XrV5W6zZXAgPG28dnRnuhnZsD3rVbveNEEee61MV544eRgkxUPtsM32JWAwLJmerLWQT5YPSBH5RNM7B",
  "key32": "bmrH1Cg5s4NZeSq8zkgdAkq8Y8SmSpFuqAYMMqzgq9aRGnM23one9GG7tTDXy3GuYEM7HkwjhVNLbfw67CAzrdY",
  "key33": "2F4KKb3CNhnoVA8PUxFjSugJPth1fR8YLPJ8gz9xX1LyVovpBDWCiNdQND5gdMpr6NzMP1eQSUCmQSsHXj21XatY",
  "key34": "4WWGqaFt1ikUpJRP1jxibhxM39S6inYP6BiSoxBhbtFTDJrKFYmKUWeTqScPjdCQCrXvTexxuQxctxiFttZjhABi",
  "key35": "6nTgcFZDzjgu4FKNWMhhQX5du33iP7F3nYMqS1yXe7pF5388nuMbJWhWutLf9JKxPXBGaLzAMCxsAaBmfUjyyZB",
  "key36": "oHBb7d27oNaWk3Q7e7d6cQEKxYpVBMopihFFnWuueVPTotKcdbD8prFq9Cye3GUpoCikVnbJZJ11GUy2RbjhUou",
  "key37": "4caAjNVBmzcij75MiwBwEcqEJxcUpfpTuXaJkQ54HiLPKyZQLp1pDq8hwT4o4zwV7asFytLLEnWM16SkwkK5WBVz",
  "key38": "KRZHpDnR4Mz2RfNn6w4sGzYDAcjZHjFbSKG41vn4GmqtrraJbxuUXbvvVq3VZmg2LHcRBS6K9JnFgWs4d5r4dK9",
  "key39": "648eZFDkwFGorHermiMDCxh5SS7MTT8xHZfA5bkB9PjZZWu9ZbdcKuGYNpgG3kDEHf82onfu7uKbXWXTMphxeppG",
  "key40": "Muqf93EmoyBYyzMc7uKRUqnaG9KsuYpnygb3cMKwdtQYGyHYct1ZaNMdLW1G3u5wQaourHqiqvRezXFqs46wPHK",
  "key41": "3RkFyJvDNaLhYmHmhEXrwpumDgxsbm4iW1hhxngdQg82qqwUby8fDyUkzRimjamucb8MMNi6drRtZTrBuakaPiwt",
  "key42": "3pm8ywCvphTPe5HR7anRETkqucC89fbF4chzD8UWbev4fyHVEhUVHY7DsE3wMCe7EdSBfm99YQ9cHqDsg8T1irJ",
  "key43": "4gxM81sYBmim3n1597oZGwASvjHuV3TWV8khg9R7eytJPuBhenbs857jpRF9a8LBMQ9fS5ZpatuuytuWU4hHJmDY",
  "key44": "4rvU5m2dp7AbQFcQ4MoZS3DarUnGaErctkzimPqoZWaUvAaUhwSPCwqmAXjcQ155LAc6Jvs1xCRhyr6SsLPXgkYq",
  "key45": "5DYphYwuJgDr3tXzVQBmXBujvyyA2qGThCAFR9ppoeHxxStcA3a9QVzwxkH8jNyhrRTyBN3aXphyYsfWy97R3kYA",
  "key46": "3VtGZ2KhRZCVQWQjLgR9jBkHhBKLyYiUeYcg4GqbLmjaP4k28sXVHs3YhUqz4TwbR6m1A8BFDPijqgsNK6PVi5sJ"
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
