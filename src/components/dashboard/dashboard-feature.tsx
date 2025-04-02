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
    "ujuNt9Eu7Sqn654ke6bh9jahhMssZBVd1JFnvhi8JZqucC2rTsTVu36ZSzyQ4eZ7Fx4fGXUGbzjA7KibdKhLqxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQj6DVrruZ4aQDLeSGPD8prhcTHpjdt7qKrMNkQJahhXSkyFhnEGFW5ENuxckuGRDjgbrjgMHZYFjCHUYhrxXC4",
  "key1": "2W3gNSeZ5HJs1bkZ8uAJvA4sbJ4ZU7BXynnksuWztdkuY8j23ja49n26KednEV2ZvefXJkhY6npM1NTDpJ4pAktM",
  "key2": "3eMbbwbKR5Vbu8NwTTRWEPYBdsxmVyDkgR8JVFJW8L3hx6Q8Ngo57x1GJEcyYcFxozxX6yvkjPLGACqDXDQvQNYF",
  "key3": "29wVVXJvMwxjF64UJKuyjvpRp3Jsun15kC5Ks3mqKmN6q5DNKvrVVTPhyGBcEvy6F4YHDhmJTjb7jC1Ft3NQ3iPC",
  "key4": "5sViMYU3cCNNnrQ7xzjKoHJ6mkUUjYaw2DXXWKgJohe8hKCmHsDtr3f61bYmRNRvHpFCdi9UZfHyTZZgRxPzTXDm",
  "key5": "37Cg4hPcwUy3AwjBaMsN2LYLg9W6nSsgvbGc7JqzL7LPsKweXVvM2nqKCLzg18bfP9eJsRh5Bj921YXMeuSX7cGg",
  "key6": "279Ntuj2FVsYN38oXVmxyyEyG3J7NA3ZGYUxx3tf83i7ykkXrozAicp8g6GVoxGAEmUiVPLtg8gwKoBBDy17VKXw",
  "key7": "478x9taV4vpLkkwLnvafSNavR1JBe3pRu5C9zAzvSsjy4cL27NFQfQtat3V1cpdt6BNBqUg2kkMu4YF5R5z6fP1E",
  "key8": "3rH56U81gS3gY9AZE14vorvDJ5t3Rm6S4KwSzW5mPge62NrqPsLDGSd91wrvxFoUUREQfu8xqsdKsXfokA7oCY19",
  "key9": "2NgYBMREQoXKBjJvWqvWeqEraukqxWryf3b95eZELqhDas8t6tGcdK8n6ypboP7kF5sdzoB9LxLdYK2tSyCjD3Lx",
  "key10": "3KedbAHpDsFsYXNXZJXDQMR3pKqPCAvyfdEU8dsFFMgUQuKrGsxE9y6aeocQDerYBo7RkkZFnc1uqTfLadryuDra",
  "key11": "4bZ6zjiaU5MGAJC9CCJkJuwhT5UEE7EiyaRfxf6Ufuvq5JpsNd7tn4nSTyv6iksRns1mhzwZz2U8JKv7J6xPTe3U",
  "key12": "Zcd8m35eVZj2FiBigfbYKFw3iZEGGbdejeHWCCHdEDWagUakPpRD8Pc5FGbKZMi8pBqctT3caSTbwhfhzQkRrko",
  "key13": "4g7ig9ShSbHjWdSYpGm5uTU9m8kAahHEV4LeLTysjMH3gtchXYuhPUqYrJJjZ1k7KkxSA3sJUwMC1vdsM2t9KssC",
  "key14": "fumddaXsLrTfbgZHyqv3VtXyAk5ZsA76kqDkHPHH7rD6bRZVjChVXyX3cQy1MoocpCLt6KBqDYcpR4EDwjr1Dg3",
  "key15": "3xKX7pDopoYUibHRye2qDLgxTAyJtNC9c4Egadm1Q6oVvrzEow1e2dndAhVoPeHYJAFmXekZrjidKc6HimJNzFkv",
  "key16": "f2PAKwHZdRwnGNkKpU1rZBGu4wFqv5QeoNdx4VDWMtrUkeE52rAuFBruwvKYWViyg5niXbEocPshacoWx1CVwWp",
  "key17": "57zxDFTavZkxDdoUtQr1i4AFxmi2ZJTND1PQuBEPM2fCLCtyFb5tPUDVgvYf4rNpL9ipsnRePzB5EhNCBXqvB199",
  "key18": "5EyvCWueBuVbivK49sveYi1eVeW2Zu7FPSv4U3yxPYo9ntDwCyWYaLKDBoYwFuCwAys8XvYpeV1x36gBB4ZRgMhZ",
  "key19": "2rnx7ZKqXSED51Gg9u15Uau8xQKSRAvwYoHBQJN4yaBYFCYqUYuj2ecQZtYtimvT4wWuasY3zHSo7BVKMponCRQV",
  "key20": "51fr9A7B2ZJGtTS98oiihKZtUq6BvQ7inVwWwWnTRy2Sj46SziLerpvyN4GS7qNsXdQ7fmGWXpR6Dcv59sdEzqZV",
  "key21": "43MuLjrNC8o1JV4rvQaHGHXnZcXtZPKdc9mPFYNLLQkqeVsPKoKYt4c4PKCg5rk14319LEGrhNVtWpnnoC9xSBKE",
  "key22": "4S5JQENzYVS6TvK5WYurk63piNraJDZiMVCH5nhxDE4v1qwdzws56Htt5ejkMQ6GJofkrCN9vLWRBHXtmekUmv9f",
  "key23": "5rC1VHvYvjjoxo6nFXJrADQBxR8bC4fJouKBZJrMMQf9GNnZafiubkNY1Cc3QBCgE3v8ML7QTDaRyWqCaASqiigG",
  "key24": "1AcxDJrSq4G49DBh52fppmHCo7EsPvp79HLbWBiGD2eyWrVWF2kH9zgMy4pz9aWdnhxEReWmeXUnArvhD8VTb6T",
  "key25": "5FCdb29uFD4EguS9jr8wau73EPLvzEBGuAbDGqeNL8h8SSsYwtbBkT5TYCwkPLzhXMvqtpLg3JP1wUFeEVdh38iJ",
  "key26": "3qakAgGxoJuBhjtUQ6L2fftCDiCy69bf8ZUn3YLMeM493gEKnhv4ennmXoUp53zYu3REeKkPRxbALGNc8J5Jx5J",
  "key27": "3YaCGCZfmoaStt3xzADXfy67vBBszYgBBftLw25KsKTD9sNQnjA9Muo3tRHaGungbYSaYnGTepCjbCF6g6FGb22y",
  "key28": "5CX2di2WLfBKrcK6CkMPMuCjHp7DtnCi4QkzCLgj5wAssRQQMhzDaY4XgJjHto5QfxeiRYrrf7cSTL9JXRL31kPi",
  "key29": "3cwA3euM8wxtVMbkUYcjmeERjhSoSVHXkvqA8vuDjNU3ghij5tY59CR4Y4DH4fuCXuRDBJxMqrQ3Bu3VEQPUqr9v",
  "key30": "zsw1dnX6wteLGWUghik9FV9aTangW1JB5DATuBiqF2qWZV5wQTtNX6SpDkRCnD9EMSAKoVYyPfwRDKdMj5Et7fE",
  "key31": "2kq2PBntV3ggEoAAVEZQv82SQosSz4QN77FNU8zHEEMFn8ajwM5ovH7FLNanmSvwgx2PsFyWsj4fkHiRLHUPVHbv",
  "key32": "2aRFJiQ6CpHmRZ4Ds7J23zvgwNoAMrgebF94qswVeM9SyDrhjBEpYk9XsahyT9p7EwagjU64dxPUf6kjhQebgr7c",
  "key33": "2nJrpTo5qyrwJwEg1hRX1np5HZB6DfdQjNwqZk27YgQmiMz1HC6oPRSbF6LzSpw9u9fYKeBnNJ8GToNEXkjdPHhp",
  "key34": "4DTvAWW5dJymkLJd1aLDNjUQ5jvuKeh3BJraTv6hf7qF8rmM7TnHxVbephRGsS13w1eSt87kmbVRXe56yc8rH4U9",
  "key35": "46jNCSNTjTz8XMUyXB9RYTog1UoH2yLZB24pydiRYGWuz7CvaHbzWp9dXtxxxF8Nwr4ypt6df5Sji2p3LQTuJvXg",
  "key36": "3HB1DLZ87Fsvc77yDVQHwD4bHHPfKTAq1XYvYC8S4Rmo551pWM8vkBBfi86ttywZ8omKXAgtPFxbD2RywDYSSddE",
  "key37": "CZbEBsxYkyVEk18E65DnToeUt1ejuzjrtxjF4ou7Lzpe5EupcU2Kt4Wbh4ww1BZHi41XSWGpZtwF31KAS2DoFcz"
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
