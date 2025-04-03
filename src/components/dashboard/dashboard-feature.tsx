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
    "2fEHuFKwRNSWeSM96bNtEKu5wDqm753LkXW4LivToNDaTYvQdm9W4eKPsx4mFgXb1QoKdkuNv3iGabMcDBwfwRQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vy5iYAjQHr2WD9qHdB7pNzo9WFZ4WL5ARWT1HJ9rWjzqQjU4nVCnD2YzvLWxX9cLunZrZugsrWTgE2UPd5hpNQf",
  "key1": "3ua4eNioK4RucbAtEskFkbjY8y1wyjz25Z3yfc99VCXXkUt8WPWnPsiEtagvGdG6NgbZYJhaTRJ4Q4sPsxS94q33",
  "key2": "3rnRJ4ZQK5vYSX7UTULoFqPuHWiH1bg8qZpZyRhhPLVwHAcxWHmzf5GhWtR28cQ8bsjA3LzDQ7VjhnBfkZ3ZZdsT",
  "key3": "57hh5E3fvKUqawHuXjfRBWR5EoCtPZ94AXYtetmEj1LpxgDYDMzFvA2LGjyTenFD7bamUyFh7tR6uaVYvYefZAMi",
  "key4": "2XWjRBgNhXgLe9522zH6nAMZqXXDM8XuotrLE4LkymCzZyTDRPQCBmH9XSLc8BcT3feqabXZ8DhJfuucurXYNwG",
  "key5": "5Epspkk5qEK1saL8hsjXA44Ws97hwfAHGwxGmzFMeidRp3C1Si1guTToyMVhV3KGnJMfWDAH9FcoJmYphAo5ZLTm",
  "key6": "3enzfwYSo2QkKbDJp99Qs7qFU1S9Hm8DPiRi78toK5GMZZUGVDjR2eRvxyu1yUsby3ZAogDB3bFWHNSDUmFgC78N",
  "key7": "4y66DEZEBs6Hc2DYwGQpNeDJuWQt9YCVp1ZBbgGAJnqrZgrfavQsKzaDw3deAEjhS7z1cpAHrAP2TWT8saafmVc1",
  "key8": "2vmfANxjXfSiUKnNrhbF3x1Xd588WppPP6GeDC1X3Um7gUuHRk7SxvCtNUy6LgY6gQQ4ezRYQRtrvsmDdEVV868o",
  "key9": "YBxngmt1DXqWXafHXeqfLRXWcaXK4Cxi7yR3CfSRHuYyN3wWeSZALUj7Brrxkg52PQnioKQNksFjKYSTNwd1M96",
  "key10": "3jvPHwmgGPdA21YviwAkUA7c8Rn9mBBohZeMaaNLdrFm6zZf6jJvySAC3nddTo4DsBoPTpuKgLT8ZmF8y3cKsL1Y",
  "key11": "4nhFztVYMLQvddy8vcQNJYWkkqr25jaqioHV8kPz4HP64GymMrwF8khYWEvoHV5QCgNgMfGPSoRitDmEwSAGhPDJ",
  "key12": "5YvY4miGueEyVHnY4mq1FcqdXeZh2VxtbZad1GPywEVt7wNiTdY9cdpgZxy7oxPZsVDzUHCS7PwdKAHUmCUX1cQd",
  "key13": "4B5cDfJka4tWVRupkfeX9HigmBM3pYsTaxkWJYRmQNvwaXe7r6Qi2GSwC7t3oMRgo3mjNns3dywBbr7sn7C1fSAn",
  "key14": "5EfH2XDxggSxK66nwYmQuJ35GGGvNGaJ53wrHxBHXgZcKct2Fpu4qK2eEwRNuNYv5mkSrMZ4wgnX2XGnwu4WH6iv",
  "key15": "5wCbUgZugwpQASX59W81d7qZbqnNLPagyK3dGSjTcwjA9Ng1dzhoV8Gr9Hvme2G3oKnr3v8n9GNbF7JboEerPY6i",
  "key16": "5Et43XYhRLQ5bCCty13Nu2YvEx8GP2t4R3WEpwNqPBRtit3qPGY8ZTNo1bNmq1MTqLCWeNJDCXGu2Te85ievYnMj",
  "key17": "2PWhARv4KjZZ3UHE3sEv4RVZ9YA2kDn5FK3CijJG9ofET1J4fV8yqy8nYRzqbS1dkxYtSSQCAhRwA5MbHtZKUzCx",
  "key18": "5tBPT9TGZtm6XA9HioccndVabzsJUq4uN6u4euBEf496J2a4z81MUxfrE2yu7JAkJw6BGA7xbUE95gr7FHi19ALj",
  "key19": "3oi9MfXAejvWsbAPNXbi7zy2DEAzJxtaPfBsifb3t7XX1gu3zE46fQLX8D8ap3qR5kEcMG153a8qRukTZvWNGMMK",
  "key20": "LdTbokxrm4KjdpngLa4Pqag9pA3M97MPpNNkjnByXX46jpNF6zzp3Fftn43kVD3xYx1yFpTruaJ7K4HYi8WmKeT",
  "key21": "2dGgXYES8L9QWKPNYF5rprwDJ7ow6W3CY3H17QYLLodPK3wi82PBbss1x3TRkqBkgD5SsuRo43hNg9VL1Jo3F12m",
  "key22": "2agAacRgFqeCWhuvKrgiyiSVeVQ4UrA3qKoVXmGtNSWH2F9WTqrj77LASEzkDTB8ph9rWHwoUaxToApqvqXmog5p",
  "key23": "3vpaAiqNSQ6siwDMMdzbnQUVY7Y6mZSozfWW6sqSGHZWV2KeR8VoW8z33P9tHBb5PgycFP1TMHWjUAcvdWWq9p8o",
  "key24": "4pUdWgz5g9JJmcaHhKXt6eNsURpkiCPNn3Fo3QBWVNvdsMyJu3KcS19vEu2HepEmffccXZPuY6yWz2im4RiJmbGm",
  "key25": "4c3zyh9dXiWVjdY3PpPcqh258FapRoMsEo96CkaF5x94rp5uZEZeyhx4UdUFao473tvAYRYUfoTDQqweCY7Xb9bJ",
  "key26": "4uGnv1RWzP7Sd8Beydov8KXswJNe677d1bDKiVS7DG7dQx2jsqCzrefvjFttgq4seNSoqHXe44zqf185F1Bt1yLn",
  "key27": "3AnYcC9N3y8TcwxvKCYQ9QchEocihXvMnWuBxBzHkF1PUNZs8fwy2dkPTZDvz3qRkPAqGRkVSgpA1c8fyqdf4BFS",
  "key28": "4TptR4HNLMihGYTCC5hSZKceNqsWfhUSftpRA6exbZLUr5PNqRj5nwBQ6fzgXYD7Hodb5pcVY3EF8um4hH8xzveT",
  "key29": "3qwf5SgyodpPrcQjjbKTbracqYT6ka2pmSQdohbpFXKS5wPoLLxhu5JWprGfB8jfkzMj5LbTChvpBgQLoZ72uxQ8",
  "key30": "5h2P78mEQ8UY2M3jKaFo7iWoaG4w1yUU1LHBAzzevSNey3kP4Lc8uqZpcZLEBKxKYauynvu748ijn3ukbKwERHuP",
  "key31": "4etZjCG4PH3z7bKHGQQBQE2RY4ssxZye9XyyPHs5XEKrwunzM8gJvut53jPmtzfNnr7TLNUEc4VfC8J4w75FPsf8",
  "key32": "VxDFUUgDfXLsZXTVddfue7wwefJipcRVA9K1L7pjcjTr2nRRJ8zRDuurGGpBUcj5XtfgtFyV6hzvUZ2feyTqzga",
  "key33": "rjzbHjPcgjHmGEsmtkA4ry3nv9ZdDjFZ1YeCQ5z5jHFLqftpMQZydauHcy5vMExH4WKyeH6XdSup2AEH3HbbXpE",
  "key34": "62jdnM4DpuyaYxAoawxwCnF6fyhVuw1ifoskKGhHm8Gtn7VcKWanwQxxJcGQHV2ypS4fLJ8wysMP92BFqv44U4tr",
  "key35": "5Usjyrg3j7NcX7r1Vw73EGA9Ej8REJx8VsvS9PEUDqStka485YSAgmsL6TZ2BUMeJ4qdbfP6XqaaESY9zz5oZYwM",
  "key36": "2mUK2wi8h9VsPf5wq94kfGqLaYczDov5X7kgTnUkX7hL7DSwaSYj2xXcVS7fPsniWRCEswPVScA5Vnko7pRdTGiY",
  "key37": "3QZ65EqyT1WZL3TxcWxZAbo3vQDmfiLpd7ghu4JGMJnkRRM6xGHpcT1KHZda4tdrQtSeCpuHJirk8yGDQQuGBTH6",
  "key38": "3ZjCrhg2QEGHKXkjkqBVLPaL48Y1hHTaTgmqoprRgbPjRoBYww9DnxBA5gceQGX2wxXi4v1Hc3oSfAfBZQUQ9EZM",
  "key39": "437Pt5dVGvMPjVsVfMmtwb35oDWCM5XJtFGvCegUPBJqaPJhniFv9FXBfHnNKyGm4oNnYjEWL7ZP45b8GkHkd3Qi",
  "key40": "4rKBXHq92iNTNeAiDhLh8VatGyj7wKh2ALfeAninVNE1hGixbjbFzMorYKq4W3iLRYG95KQitDkGqPg4E4tNscmV",
  "key41": "4pCutSjCa5eH7Lr3hU3oeWxWdZ9FHm6xSnAFuCvsiNuczKFCiKnDQoiBfWRkURZ2WwaRXkTnwTiF9QxubyxNXHzV",
  "key42": "2LH5Yd1fkPRGRqPuL4NCk8sw3hN5T3PVnv2ekpUq57n8C2p61WMFXgnZvAofiA3xzBWQYLeGiLqMNWKcUfqSrucc",
  "key43": "3XMTAa4NYGiH5kkbZLwbaTiUyeaCheMeTEFZKVwvbdy5EJGrNomW9Ak9FS9NfKFYjribHYBQJja5qtCSfWKbCaiM"
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
