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
    "4QcmLedvyfZh7aVxnbT1NWkw58TTSJ4rd1fZUyo6j35yZUGqNAaRQvd8ZmN6T5uYor4iDmD9eSx7pyth78ku7GFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GRAgFFTrXG37XKKrGFX93V7c2TUC3kaN6cjuHN73Zsb4to9i69bx9fLC72bxEJk5hc4vSVmBrvfDcC5qduh4qrC",
  "key1": "J3sCXWEGhcimGuZvb2nKe6AuudFXfeZXwSheh7sDVveQ4JfVrSa2nY5ah6mkY17UgG4uB3vPtL3sg9A5y668Gve",
  "key2": "22XN5nMYFEg5fXLWq9SX5rrqedqTK6fUimb3dkXt9G9KW4FZUke9hbthdY4oj8DdTVahYyi2yYgwcLeBmnXDCRhF",
  "key3": "5Ti9h81u4VxV1K69BqZjEDGkTBmvv8GXUBigcQibAxKiqpbDx62aavuVWzT1dbAv1aGwj7Q9a8oHJPj7Bu3ySErC",
  "key4": "2NdgEBYLvvfq4tYL38UYUP8SrBwxKWY9jH3hBUae1tNgKwL7fnfbuqpJ7AaKL6bXg2NDcYy1tcE6S6Zu7LVY1K1o",
  "key5": "wGDtmfwBirPmuJF3nJvuTDSB4QFDfE2Q9JVxTYb3w1rmja5zaoDjZiB95fokZMKSRx8urBwnAzgTeqH2bTFcxic",
  "key6": "2iJPHbvMHKoxJFoj9iWB92VS5PhRLwtyzL4s3RzAZnWY8mEEYDS2KDvxuidv8FvdZhXFc7LYmL8LnrXC8upqMbU7",
  "key7": "536oqmVvdeuRE9utgj6fUU4X96jwpZKBbimUwQtRjow89K6DdTvyMx23qSvCJKBeHYkYrYKg2yDfUF1kQxToM6C5",
  "key8": "22SN4c6rRy5t5hWUVYvLFScJWWYwwfgCzqG91fYGvEiHit6udajhjQ5HgT5P1ggRg5KKuaxnfUULodKQz1ptCpLk",
  "key9": "2N7yko4xvYYTfHyxHGdQKUkAewhNHKUp6RjyvLRs5w4nf5qHBbF7g9xo3MZEXtLNksZLQXTjbaZru5wQF9aP58VX",
  "key10": "25mRfNSnEKaVmqeBLNFbAu81kundeZ9R1B5wCod5DPFEDsAXZUJjkqSyL5jKinRoL14dVxPJEA7r9qimgVozQfJP",
  "key11": "LZcvKnKPsjmJKCMiFD3rmR1v5HUcxvnL7YBE4BK2SNyM75i8cqzA7fXXigyVTCsQDvzprHkkB4voUbPSjgFd8cb",
  "key12": "5Eaffkv4WbW715Q6XFm5YhLjwEyA1UYAUExCU6B1nZfmLaAKa8u5ozz1FV5JWUtRXSxMY69jQVQ5NKGpMJjuvKhH",
  "key13": "4X5BmYVhjYrdDm74gbo2HwdymVcGtpC4bs4xwLWNvEpMqvTwxoaiTSAcQt1HKydp44VkLPK9xdb4LU1MfXJkLRPm",
  "key14": "3rVmtb4DqwkVquiKsccYpVKYW1H1gJ1CHwuJ2kqsyZTye7QWswyS6CAbe8Dyyej3rp1CkbVWVWyyLYMT39QAmu5q",
  "key15": "2RL6ivEaZzrrZ6eUkfmDBB7vkuuTQhSTYFggV3uiSAxo8sAhrUPLFrGDRUdLPwW3mdwYjVG7QaPKAUo8Uomtd3jE",
  "key16": "3mUtFa1i5jkLjmVbucNjkLFaMfTpVh48DYNNi9hRfnzfpLUnAYfFVQCBwMMkqjG29u5ZD5GqrxvRnopDs9Tv6ERq",
  "key17": "KEdroKNbSFVcxwV7Vk4nC3mNUjGgVkF9EaN3MMxSrqPTFXUwk2dqd6i7fpawnfSTzFM5aicug6ed2SfhWVkQg4Y",
  "key18": "3DevGwVe9NUF65uKn58oqaStFy1ioXVWbfyyRrRieDrv4PQDFmMQCahHFvPPkqL2iYjSJa1AbCZWmts3kdqMnipe",
  "key19": "yiai5G3h5Vr7uteHs8PYNHkmFQFUS2mWhUCXbuoWvZm922HnE3a1jDs4FnF7tLHMqBrRKaevdQQYwMbstmvaArz",
  "key20": "MmnCtzg44pxbjQKdua3nRVtnR7FeHwoDjJxyGgeibs8E1E3KnHsLhfgFFkZ8y1CQ2JJk2T8HBxkDBhr3ur8kr4U",
  "key21": "4edE3EUwqDFEU3zNzSwc8fV8k1keRAPwwpAZwoJvFPfuuktRmrJW1Xq3EJJZ27hGiVC84eNvnmKM9VY6c9KpFyQd",
  "key22": "62hLXSyg57SxkuauveD6dhe7yRovJxkn1BcGXSog4Q2mTbGiSx8Kmc24knmZtWQoqJa1kBxLMZdFu6whspReEurn",
  "key23": "4MJ4qBcV48tyhQg47PTLYA1KiCkLoVT6kRZpzgosbaWMscT8kzj3YEFEgPG5USWb7mfDv5HdnLAK36DpydwQwVNZ",
  "key24": "p4HSQEkZ725Yz343dACJkoHeYPDpeJA2P593R95iWsQKsKKLS2TEsBbBhyHtybQd9CwY967shXrFtjBFzSkGDiX",
  "key25": "4r8yNAgeHs7ftNAyR6Ueya1wRRvTA6D8w2M4xt348qZ8oTkRCrZUr5mHJgzSVa9Bn3ayaNxJMTnREKNu6koP3oqb",
  "key26": "subVmQ8JAojhL8d7f6T46hew1q879WhUDZvQd6dJvBEmitRMZQQPT5hjooiwKcjcxiPJrjhh8DT6k8uDRBQ2Bqc",
  "key27": "3A3h2bk6FttrkX4gSwxZKFAiTgTziUieofsCVkVcSLa29BmJYJ8Cj9buHm4LGFJpLsMJduEyou1eptWU2AA3EhuZ",
  "key28": "5FtpBJNcHb6cDRzhTGv8AcNMNmDnNCY7dCQe8ZaR55xXYdELpKNyYj7giD3uSMmBRQrWk3jBwKpMp9ZN5sKtqotZ",
  "key29": "2dtNGX4QBa91yoePm3cmkKwN3LSAdjVwgJ95wTvkabw1agHuUX9TuwcEEXme4u2SzK76RRkEjtrDJaViZEqtgLCB",
  "key30": "3yudV8N8D3J4S82aQxV5iZaZgkxYfPjC16ppdo2boBkUuvDZMqtrFtGCKGjFkFnVNi6JJxNpwGdify3mfFfaXg5B",
  "key31": "255XHiKCZzyQ3DhuMZyKLQxDwF4yabVAPa39UaRkCtJXRi9EaHHW6ULbxqq1k8yYrwUHC2PcHgS7gb22zY79tayP",
  "key32": "Q5r1tEtp8cWtz9jeeDVnssHtMuAANCFwnMG2RdsP3oai2mFVWsb39pt4MtEtG3cxUSZRN34yKkn2Wa9ugWJeoAm",
  "key33": "kGaTd1qnKF8bSFKgm1PjRTgTzmEpwhYjCkGfGNQ1BAFHtRzW4YFpkU1vXUpQH1rGQ3d9JACJbkgRLXuv6pYrXEx",
  "key34": "4MshfPzkTQ2Ynu23L7KtQDYCLkZzVBZVLVsMqgx3psxJexRWauQ3xnNdZSFskan5M15MEHnnhe5RJ3a1upAb8Ts8",
  "key35": "4eHQToSZmqgcA9hHesb9xdffU1idJukAYSHtSbswfusgN8c4JCke3bLJXCRUM66gJq6689fFMfsWtQPFZetAkUHz",
  "key36": "3t3jo34bcgDNfAbtvoxRZf9cnzgnEDcofjJGHtfCX3f4hbeyanu5tJN2jToWuQQ2Re8WadQDqXiKZB5S7njvhn9X",
  "key37": "JKWjeHmN9B1FGB9gUF5NZ6sr3693uKc5poSi5VQNVWLtSK8zU8cFJmE8k2TMRmfkMjZqsCYpwfwBoWAc2y9iNpM",
  "key38": "P2kgjVJM6mjj3r75bHspc9RvTGuBjS78n3qqtkPwyqKYCv9ZCskxj8qXCd2w1V6Xgx8YNCD8tkdpmpmctHsn2hy",
  "key39": "3tw1oywmyNr8niMerB8iLzoyM7ZetUyPQBdjgPBUBpaWsQ37RvEtjMMJutCd6d1KaiKQxSGCDQvChuQCseJ7yW9B",
  "key40": "5jFs32x8PgB8VSvHgUzinn9JZguy27H7WWZpnaSdCunWasTc7dLdPktyxk3NyosXsETfxfngCBFkW6tQBeQzPEST",
  "key41": "3YmgyLEfsv9PrpAHuF9uUutbbTYpTpdoLs8nBXLtHJZvsZbuvgGYsmy1z2rWrnS5pK8jC26nFvsrMpfZZcdDFnSf",
  "key42": "627z3aiaVaPrjyVjorU3GeTU3yh1VkaCeFHetLDSgBroZxmki4YfnxgSj6DDw3BHtRgsNoxkxvtoTNFo2zyYrXsR"
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
