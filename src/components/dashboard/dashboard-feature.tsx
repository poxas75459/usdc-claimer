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
    "3WsVAk4GiHc3cdy63omxj3bE1En3X15FtWGe1CRqSHp5yLXW6Cr2emL3VKvcZJ6726kaQZ57iamELbdAdhU6uxe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNtK1weuCwZeZyd3mhCaRnW5cn9xJ57nzBTDbmqyMJgiHw5KgXAqcmnC9oQEFPkYpYXgYZXRhj1KCBWZqpSoqG8",
  "key1": "5Kkm2u5EZo636h9mhrMK9x7C1oAFPbNVft6MpEpNjxvg9iS9jWrYsvzUJCJxB6KaKbECDBPbyo5eiihCvKZmy4Xg",
  "key2": "3JRYkojwKQCFEqkJ1BSJGBBBhMxs2GLDUoJxTMR7CcnMjSbcuQyQ9gZdc2ZipLeRw4w2buDV92GEE96R5mDWGHMR",
  "key3": "4i1M7CFCvsk81M7SrbhN3ibK7qJBprwsizRhekQnSJBCqqWLgWpudoc3KfwGfDSPaVVYzkWR3LbyjZX5xLfAjkrG",
  "key4": "2pEJkMCEmZy1fQomWwkremcKqH8m4AxrGzargtiLbbQ5J2i8bwtCBZBY3wj5iGvfHJh4C1F37SrREcfzXUrXKEiN",
  "key5": "4M6CiUvAfNMXd3AB46CPPHuYNyig5QQAVRW4TjbQxZUwxXaWM4vqJrrjPwRhMjYAfL46PbG7kxBbGUcr7b2o8kxp",
  "key6": "36iBTsiZxzKnLNkeHU254hPMyQ5U4Jaz5uAreUiaqSVeskPUzi7hpoMBu8PyzE81cgngzYPuUwbSZu2ZdkscWgbo",
  "key7": "U5VG9Fcpde79GD7E7UMEt5qR9ZMdhKqeJQiQKxFsmsmG35MDgkbCTU2Fsx1qzuotGbeCNYKnXMV3Porn7ND3dQi",
  "key8": "3neTR3mWHAxEChvH5bjWUEpDf6WLv8AszXuapoZvkiDqopP1ADuYS7Gn6d8M52BNJBevg8cmjqZ1pcshLreDDBx4",
  "key9": "Je2WkGEYYmcQtSY7bQM6hmeL4C7sCgnwf3jiRnB2GS3JDZ8C82Wv4dPzT8u6mYMRhQRtDAswQfPNkTFWTB2dqgB",
  "key10": "4FW66KHjzy3Hvxfcvnqwgu76aeESxqurcKjvSmwowb7G21qSMxV3ZQy6AJHPmdi9C2yqXEprU5WHAKox3qWMYTjc",
  "key11": "47Gvm1x8SJdqYUBAH2VfZh1arSVPaK2Z1d6TnSALtT9T9ANpDQ26CKvxxy6vsCHG3E8trLDwdECL6gZVFp7KvVoP",
  "key12": "4KdxiwCZbxFFS2V5D9nPVcATH8MKhREEcFhMhXQfCNSDW5yVdxDUNtzzZ1KQUYNh3J1gkgymcE1dnFwLcHs1We6b",
  "key13": "25BFrh5Nc1qTSmUszm15jdYCLiKFPdsQa1g8JGMbyjyCLwChwPhR6rnz1ZD47kE98JwrRtd9BXUsDT9aEmuji4WQ",
  "key14": "2mkrQVA73JXyuNwk4KwjUfpccNsgCUpKFzHLG1vebiwcgpuAceGWciXBsewnGmDocuX966XNJaR9peGandRffEUA",
  "key15": "2goH5sncCKGVe8fnp9e21J7FGBkcFJTuB2d5GzWnFwW1Q5ev85TVkgJJuYqNHib1sLBmjmwt5nZPUu8BMMmevzEw",
  "key16": "X5eyzxZLzwReDSRbfg4sWEsPMC1WxFhh4oAFcattTjRov5QU4RUKp9eq3AJm3NBow1ftoXGerEAEeicNS3SjK9J",
  "key17": "43Ey4QFUx3KmhYb1ie4MzdV9pWsfW2BXe6Mzsfzyo5AoG2P42q7txUFjcDH9X4ZXRVdR359BK7bA9XpEjwcw5ELk",
  "key18": "2E9aGF1r8CjuWArZsgQcEynZ9w7RmgfUmdUmPRWRBDw8kxVk1KpodgavD9Yn5swjFLUqcHwpxFBeRUwYqsSPUbRG",
  "key19": "JB8md9V8Ju4upNcMP7TsuV18smEF3SdMDjVqtD9o7kpGzdiv1MjbZRKkXoBvXvQkhk48X55wtDwoPTHPAY38sCW",
  "key20": "zC9dMmKciSWLt8L4vQNc3MmVk2YueTrfretZ7weNHNm8ehQpcoTmeSKxmWYKMnBAHqFP7D8LZ5NkmbJWJX5RqQ9",
  "key21": "5tAq15cbjzLcBG1a4dKtYSF2nBbFZjpNPxzZKeCa8DmavjUgWp83gvHhoXBfEJGyBEhe3P4PLBvvV32GScYb8Ds8",
  "key22": "5S81Yk1ux77LrYhkZFBuYUNf6acEgDKeNpKTbze83dRP92B6NEUShqSnAWK1sWh29QdsQZi81y32yNrwFZ2kPDZi",
  "key23": "5X1xK9XpsQ9x5r2KGGXqSjMJi56fzNNh4nDeuS5aB8fCJtX57WLW2UDYYXp2yGx9vLge5S2SUkpoSRdtHi2T51iV",
  "key24": "tQAL3cJVPgKLDQXAD9D4Fi7oMWU854G5CcvTu3976asV9hkEL1Dusnfi2bSe7T2qyuQYym2wFfXthamBsAVa5Af",
  "key25": "FM5eHkp3ta1id4HG7rRbKUwTufV63uAchsgrZ3snFVMNF6f1tPMBhmajf6Q7GVWjFyqHP1L33xJpAiiBnpnEqAG",
  "key26": "5iKVNQaaPSwff5XEDwhWwHpw5bBqauwoPbtMmTVsxvS93MLYutHZzsvP1KWhp9gtCwi6ENJciDWB3MKTaKLK6QYb",
  "key27": "2SteRzk7N6L3CyFquD8SMiGqhVJTYu6SKYM8dE39RsVj7FEFizUxtjtYhMpYJDtqATnx18nEcak9QmwAqcUTjFes",
  "key28": "3DMBHQnjm3xhgPmpLxNdWhCHzJ7CnD2Ztf3kQ9tYPym8AG4Gkf68znPHZAumYWii3hBFSb8sVTayVTw6MwdGELVn",
  "key29": "5D1e3C31jVE7R1jBEyJdBuS3ppm7TLZmbaZ1MCfjMWfXWMVjE7oKA2qAKUqXPvGWVe6GBgb49NjbucZ41cpNME1z",
  "key30": "54AZA1wF846KSjZSwht2MoMzb4kVoQjarRwMQSSSBF2eoH8h53D8XqPkxqgBaVrqZ5iqL67obJkkaY3L7M7pWBZh",
  "key31": "5heQYkfv32ctK5B7oXBj2TyiBMeJ8YCu6gfsAy5EgZSy65Dw8FoAmAyDLHh2GWfeQpSV1ujFjaVBVExUHeDYvr5K",
  "key32": "4895akszTbdky8zmcNnZ271LbfoW25ytV8v5d7CpYrXhKL9wAvCCNzhRkBxqwB7BaAELyDBaw4VeccMfCqHwZQTP",
  "key33": "2jiqx8hhc8kEvEUmUzK9K8uS7NLWhixQEcED1aNW1iwAEmKzoMJKmAV57eQbps7vvWe2zRT6TLzhKm2cTTQSHJxT",
  "key34": "2PQtjzbrufqxyRvavE8Zbas2uJd3QePpCNYvUdggrctJjazoxtkdPoPmHU6DjkVFpyP5T5TggMebCe2Q6yPHYMAx",
  "key35": "8tPP9MacWxVRagRj3J31zo8bw5foSW9AiVSbMbpWz3m5ZpjiBv8MHMdQvdjQ4pM1F854LfkazH4N5V6CGzTzdoF",
  "key36": "x5tB9YoGMYzEsMgKJN9oMrqXK78y43BmmGQqQNrcKHqBaGjdegN9oAuSQQZq8eRtrX6uUcM715NFvauKLYTMxbU"
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
