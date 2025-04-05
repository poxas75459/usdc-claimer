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
    "2SvETyLttgFAjRtSr2WBPTbjRvU359N1f1XodJnk5S7HegXZvdS5eib6e8C1qmSFTsDqHE3SbQoy7w7WS6bhCJKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNATc1bKukAch3rV1LLQGkru8rLGKu2YydgoWBk2rhwUSuydmT1HWgNPkj3TtKFLkHey24PL6myXNKQrBBA5zvh",
  "key1": "Ps6DaxTP1q3tqRDbkBeKdnGBkSPkZdWqq9yrcbwGV2WZXWqxPRnJASCQUqGTvvEbpQ4ns6ptWSo7pTsup7tXupy",
  "key2": "3m3E6MpgdPX2j5zbSwZo8SdF8xbd8MdnDQMxgS58L61YRpMEUwx6CaE8FeCNVsVXh9BQ8dGJqrhttjoAB9386WoP",
  "key3": "4kNRnHDhncm61hYHrkD3A36b7fRgEmaeJRSdF1wDtPUkxN8PS5bnhD8WnzhSXwWur8BkJYQrQ6W3QDytPzFA9zo8",
  "key4": "3pZRk4iSSbDceAZJ1No5P9qXVW7rVNYuoHzDNoZSDBMeBgJFoTdK5jNtRKR1v7nhtyjrcE81mZD9sxqxMuMnWGN5",
  "key5": "5sinrJx7A8yRuza4MQH5NDM4DoMf3PNmegqSHpD9w32o7JPAyQLf38hYSx7LbR5oEVVcyEYx45SmqFKtrHKrqvPg",
  "key6": "6i7vyJmswF8h1U7tRTW63M52LZndcGFpdUP2uyrA8xGYir2jYvJSUSmrPavdj5ZDhZmQyj78ve23vuQSBp2W9eX",
  "key7": "4bUVq5HT9EDvteJhXA88fZJosFME6wVyeCGEWDc2TeiUxfm7fDHG7owvMPk1zM9Qpfaa3AUzpzR6qU1F2gB7mLE8",
  "key8": "5uTh6YubXUbXPoh6pY9TZF1cmj7m2nNZzwNfLfD4eDi5xJbiE95iEoTts66D9TaBAh5NiQFzSbLax4oz83dDqQs1",
  "key9": "4kHoE3PBNngQMSFSaUPgKYzr4fktTfbaVBx4ZqLir6CkyRmg7MDtdBj2HL3RhLZz8VhCtA7SXkScLPHZCkcPvbj8",
  "key10": "8Ag1Pya6wKYH3KL9yxTAqKAwPL165kVzi2TnwuXQgPArtZ7zVqrrj5uyRU34GMdcncrrdQai7MNU2KRMT8UVieZ",
  "key11": "UeKK8XA9Bdj4jjA1CLnT4Yp8mX8hYLtn6PNjrJWTTXhe2ruerf3RYHfV943pnaZdar44qDoqzb5vC1XPuKPHspr",
  "key12": "41RaiPvV5NhDsz4hVo8jPbgbmHLNYGkbYKfuFrJFgVVMzw1pXGky8wXm1W477EnED2YJhMEzKGmr2YsRzoevkZSC",
  "key13": "2MQ7gHGtZiLmhuyiHYapvJiSJw82bN4EEJVGNBAaab1n2ciSvhdkD62EmgJ7mc13Hq9zdHKCa7xTeJyA3F4PAisf",
  "key14": "2mJ5YFRNsZyKADWuBCVGDWtx6JCzhSmg6yn6pgCVoBpsCxcMD95f3b61NJERUNLNtoLaczgfUB2L21ZempgbrJLn",
  "key15": "3J1QXi2FEGvCLcHoCNZruwkLNsGz2rn4bEHBmKaXE7qMtFPLHhcJrunjWENaL57cX1oQJx6EgwKtR4sAbj3msE1A",
  "key16": "5DRTKqQWb1AgMUTb1Q3AUp2S2k8xZwnuF1R3ksqPEd7DAD4WWNtvJZffCe5nLaYvejVwCixhL3CZoSGb6VWo5v7k",
  "key17": "4P6EPkNXEwjzxbpMTerxxqJQnLW78st893WtZx9B6rExBfTZxz87NvVUVTRW69G2LcAPD2HNkWYLM1bbqEFTTZ7J",
  "key18": "4zJvUrPg893Z8hYK4BKAWdFMF5wX6ddmrSdkcWDq7JV45v3CozPNP8KZ6gvXqamZKM586AR13D8bActGXKf9CVvt",
  "key19": "2uSc9hBrY4D5GqJzbWx345g7A7HJWyq4tRCT2N3xp1C2vJqHjgrn3KerrYxhmMCWMkyo6SDSYbhiezgVksiP4i7W",
  "key20": "5ej4jyPkyNB5TNRGvZKDcnyo2cVDEuX6YwhiuqdyhvxwT14PNQJs1DSEsPvuEK9jpjRZupG5sUoLSzBsBmmkxFRU",
  "key21": "3qcNjk3nK2QeUXe68Prs4oDU6btRBb5YU4tRgNLwy5hm325pQi3L2m2bGHDbmkvr8uHq5QWpXCgiacyDhmFv2qDy",
  "key22": "46Xbfo3uYzW7DPo6FTaPnVPCoeBmyyXGiB7dfnUK8EksAEPM5XA5GKUhCoS9BSaVZ5RVcxhuVBkhP6sqpoqKoa6e",
  "key23": "3U2h9jPUTQ4HYJw9JBiGftK2XAzYspxGkdLweHzbNYZy8bHEDUFJf7s9YVGfVGs4u6NMJfygXAxeqTn3JutAgQro",
  "key24": "3A57Ax7XZGQ4yFgTjFRsUG4uyaJPE5jZkCUtKehLNWQfLaQb6H5qZCnnVeLZ4fHh3WZKUPhzMoM6HXkoD2GhPR6X",
  "key25": "5buYP1Z7r6ZhyVL7QWtjguXgFQUug79Hb9rfrg8etQkPQmyCtBj9AYNYno9wgVBcFuQnYZtDnUrpLGob4t15sj54",
  "key26": "pdGiAx4g6GkTvnXfikVEckq22kLdhq6GDwpdwjd8iYawr2BorzX31dHRhrwzsJjU4LFH81GWsoJpwwgm21dWwEH",
  "key27": "57gWmPeGJDrUe8TFeVyXk8j4QheLiVXWALBbPB6eyHRj5yKZRnJxN38DBCbyNwSjYDQppHpqMzThhDJNpAtGd1Hv",
  "key28": "5b4jmMBh33tRDJMzoZBEUPgH29WXvoyHSC9NKnbz4EAjMfgWF8TfehD9M2Ehz8skHX8MsFHGfC4vZrpquEiM75Xa",
  "key29": "55utn7VU2fx61UubtDMHbxY7Hembp3xw9tXvkhESnMU9Nc1XzR2gYiKgVbFpyox3g8XzyDzBH5rTgU4bZfKrYfHB",
  "key30": "48RzizX7Tp8btCvBD6188JaFntdTAUhbCifZTtpAyqhRnxskw7GKfsSJL9rkXodvfcTx4718nAghBuPLdn8ZphhB",
  "key31": "4URb9UYfT2z6F8wrmPohUh2KSxXjdAT5xqEFE71mm9weU1GippQPKAmign63Bm7H4JjwQKH7uBqaQ7CDDL9toVwU",
  "key32": "55ZjwVrseSUUYzaLWcPw4MUGThXh1WKcQ8c6nwiwi1wAkc3URefFjNwTtt4htxjgy692BkC7XFXHeGvdiaQB6zcd",
  "key33": "2Snq65TK6w9vq7tnY5fYkofZ8Djp8Qxyt5pvVmn9aa2C5xqNjdbqigCR378P8x4jacvYLaHcUv3g4Gh5Rdu1p5zQ",
  "key34": "EENW8DwZ9H4EE74LWYFJnT4vvyXejwKzPS1BVaGYhr4YcksJ6zaE54rV845thcpqgiTkMGATvyrtdZ5tvAfejST",
  "key35": "4YAQVvk5JXMMgKq69od4ZiziL3fzgDnAmZjqHzTmYYuBPoCcyqyE91s9XXbHRZFnsohnftcg6uE7GgFSMPzns4rf",
  "key36": "Y3ZUP6dHDyHHjZJyv1m3TCiDb65Lf42pCYnMdN5uDSpUPwg8Yv7udXtC7xvMLNWN24pqE9yXVT68eHcFfV6FtcF",
  "key37": "2w3WNaT8z8iL7fKCRe9MV3DzSoEnAXhsrqpXehkeRFiyY8KpqfHBT9xBJMamN7rHpuYwsndxn81U8xDQMz5gLQw9",
  "key38": "5wGDVTC7b9TELa8kGeSGDACKYdpy6XsCJP7GdqFoSpigMXmq4zPD5i9kuGVocwA5gWUwddw2P1MiSetFYPPZz9Ys",
  "key39": "XZ3byziJbk3VvutakQqdZyAbrZhx4rkyKLtNpJz7txVAY42d8PEnc6jq6j5AWbDs1UoRPv78tzErZi5dYHK2ibL",
  "key40": "2gkdLYzqtj5dTBqquneUr7Lb1L4ucxNzFeJsGVeFQ6idcsGoH7KJppKDdoTzPbrwBo7SyDXQ8UqcvWrGjfamGNZ7"
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
