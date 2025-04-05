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
    "4hfXzZkgKqYJ3E8der7Kf178zkQVhcVqTDEtqGzWZa63ewqcQPxQnXCidZCD3cymAVBUZpbgEvtbP4RXprSjvpdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AiMqtEZrRVxArSWAdvS9iGqDAkmtJnHJ9oKbxjM1NSEH4iNxeQ8mpAPdkdUTAumscr4RNokVJeo9HYsmyhjLFhB",
  "key1": "52e8zP1BQyctevyo8gyJs3qQsckQcpfNY3ZBiGTPdEGo6ggCxMq3Bd9xGYqkATdXAbtNKGpMTxUK2PQuEmNzx8Pj",
  "key2": "K3boBS7QtXvYXHKKjFs7RAXrvjurRrXTj9wFxGseuebJmEGcHB71RFb6b1nY5qaMUjFC6SwNXVpvp9Fea9URQMJ",
  "key3": "5Mn4StHuRjUyq6kBAFnQrGF2BFkuG9nXMPRvdAT49Yep3S1MGBg6hnMnVFMM5ErcDxY1hpEWvNUBakQYCZexeqcw",
  "key4": "QCwuNyKuxVMjVuRNs5ZnraDaoykJs4yKkjmn67UDkHgWXey3cHLcwkiQkLWthozFGSqf66xj1ZnMabUXFDvNKBH",
  "key5": "2M52RqFqdkRAhaVtwnn8od5HgW14jpmSf61ju6NYcaBgfQ5a9Tug56pY3CFs4jpkvHaerAxPJS1mCgUZawDBH7MD",
  "key6": "4tsteVz11987kCkKww1afQz5TyyuYCqvjWvsVvK8TBk6MXE1TtmzyDQrA2TZAQcYnfVmt4rVFdUBRD3vW62L7JKE",
  "key7": "4knckJHFi4XjJoFyjWYCoeo4NYGyg1kg77iNmng4XZYmjBtnSxjZQmu7qpQ8GjJ8jS7qQwsTmdhTXHKJ6EmoAJzN",
  "key8": "5MYP6sDYHH7wKjmTrdWpfBk2DYJoE2M6RK6vKCMp8s38vUkK56zpHXSqd6oso7KQcn9zKSZH1Vkw8UBDtkZVLB9C",
  "key9": "3ps7z86tdMXExNZazJWFQxfzotkyQargLDqfW9kV3CnhKhFfGS9mQFtG8VfzhSzoJQzo2d3fAMNr2dYdLdxuFbtU",
  "key10": "ye98ko3YkS4LoCiF7VSViN8PVHotJMP4afTqbmbCzrrXYMfTNrNuibcd9Z7ScMMmJ1F3EpGNzahjv3dBvMtmrH6",
  "key11": "3Whs7j1DtHb8QqxzfAC4PnFiKhN5zdM2Q61NmBkYj84hNXVkYumN8X1Lvx8QYHgcpBZsZ5BgHkEHCgDeDkkPDDv",
  "key12": "3Auw9VPuE6vnxf77v8k1cywa9GedpMGdj3C8U4gCKPAvr2k1oW2HKTXTv9rUv5ha4HZaLt4H5L2ScCg3j3NteqFD",
  "key13": "2n1s9Dy8Yyv3GaPgq8KXx4kLmtuZm4b9f3VoXfFSuGLLHrBCDrXeL6LYHyEZb1GbJXS9xtKbgcwRMoYxjdURLwHv",
  "key14": "32f8dQHaxwTSqyRsCbt3Wpa2waYSzv1YQJmwuF2xx7nNEoib3QCX4GPcVoqRDxUEdsG7rZ2rMdEZWsEgne96AHve",
  "key15": "3pJHsmsxkeowAiT61Auoghy2YxiHaSU4vMDh5XRZNX8LcuKTJjQLjeQDmfyhiks3MbxTjxV6X755w6dtjkicny7x",
  "key16": "522PbaEnFk7uZ3ciYc8LzxEEakTZjxn7VnFn289HgkpDbogif5BtA4Vo8QvRbwyjRmFsBnjqM74tNxYY46edB8B2",
  "key17": "2UNhafQbGi7DKMgaALkeVmfpXmqEefy7wiEiC3NXvdSN9bqkW45YWhyyDXNSwrxZTPN652Tu7v9gSoV2ghB3NC3w",
  "key18": "5KTUs3Ntjkn5F2PJdo4R5nbFHjyiMNPQsENhfHPUHdGYKoDcyBGAyVLcfP3T5yaBiEfx6biTCiUnubWKs7wJzbu6",
  "key19": "2Lkmxovi1ePtdjFT5V8KjW8nWXBSs3jP1Up79he3GpDgycNywbXC1rLMVRNBEYGigJ76FZCnbZAmebUGnYAUt3Xn",
  "key20": "3ZvRdRCu1BMEKxVYW1cZg8zQQ1w2DhdffBqxbZPGoU6t8C5gbav2KMfVAxvifQh5pak7vkrix3CCsGMDjQyTpzJT",
  "key21": "4u2noUMF5UBuF6SjJChH5rHMXQZJr5RpFGoXqGgoWjra3jweLsg4ZEXHKNoA3W2w5eEkwbHaoJDSZndkxWjVH87x",
  "key22": "3dCgZPk16AYpPiokk3GDjxTSFsjhSi9A3YM3ZdACBPyFCPRPdzCzgsqXXf6csGyxD8rGfWYZ8wJvbzbkNbAhj2of",
  "key23": "Bomro5vP8cYXheDfJ7wvH3D2fHUu62TFajemf8yn6Vw8hxb45ztscmnyufr1QTM3rJ2kKep9LdsTNHVt5S7bYm8",
  "key24": "4sKPMmqy6sK3qL1opidFMKA8HguPNQoE1Q3HmXRpYxArGtsZbXVTh43bSqm5VzQhJXES7uTk5Ax4fZBePSGKYD4R",
  "key25": "4XdjeEubaBDSX1Q2vsDvQGZBDsTEE1jdT2Un9VAU2Ji7DdqTJrWer6KAhFz4NM5ibKizSync6BW47xuJEKHAzL2e",
  "key26": "4tqweT18p1vZj2M6KGgTqHpbbuAvAEZFo6FaqMMJw2RfqpuDTfTSF1RF9s6TRrx9aPNBjzpXEFTwT9hepBAjJD4u",
  "key27": "58uZLgstvmEXrnLnFjECJiXZtZB4nvDLH8i2LFSdFVKXLVSr62Nw4FzWvVzxAncyLahugWCSvmgbNjtniM59CwXy",
  "key28": "4GQwbhG2eqMdLAmGEFbgkAryTHaYbKsCqYJnLxWmgubzV1keaBv5bXZNhb7CH53bFD2Fp5dzBXFmEsHaSuxWgmAx",
  "key29": "rbaHzZgHNSxCMydN9JDzsLbDZNj72vN3fpiNQHTcwvvff5GGCYxNYU7cTdLvxXyYMt2ihyn3zNdKKhFWhMyPCF8",
  "key30": "3RL3qkrXvqpeBKTfriQPHtpzYNjwVmPqLsCAXQZqR398BwfCEPGcTVx4XxCGTZh6FaxB53UGBfDXfvyMNFDyYodf",
  "key31": "brxXhtKTPZKaYcSV9pzdhPXHVkBQuuh6zjUYZqkduuQYGJUr8LoUvfu34cLpo917qNSh2fRo28NZES2syeW7N1B",
  "key32": "3QEy4NoTjZLjnRYPNHxSx4LX5VyECTkcjho13ZAuzVXx9771cuze7UNLaN8pfy8SKjuZcbR7qaS8VzQjZh3BdrLB",
  "key33": "35FjhJFEpV7bEqVP3xSEC8NNLaecs5zins64aUSawVPoH4X4L6P78QCgKwgnn65SgNf8WpgEhcyKHeUrTDjGD4uK",
  "key34": "4UX7Yoqnb6uvQixG74uUTY8pzuHm7RVdRAMUirjJgybhEMqykRgPe8MWo1FuJcqzH5JSGKUJ9VgVp3zdemJDczi1",
  "key35": "28T1DPVyMy3jp27PEZ3xYZ7YQrT5oaQQDmN3WzPyw54G9tHfSGLzLr5JoaVs8ueNwCNojZ4yxWa7DaVu5CKaS3C3",
  "key36": "4V9oEsC2JAKSTJhn47PururDquhRDevVyyypWfuMXi1Hj4QWfJBFk2A9vq6q7bH7HHEg9Ftc3fyJj7LbowmpTsJh",
  "key37": "3UxSbRoaNay7oEp6FdevqQ1nCyugi821miPH7FFAefurFhCwMnKAAigoQBBFjXY7DNbVQL3r7WHmb43qEfM7pTaW",
  "key38": "3Go6Vhas4cV2Z96yReSdzPhFpWQDWP2NSXSmQLrDQq9npWzYAyydsPnj5Kn6YrRrnP9m3iqUp3pVeDjqgenTWCi4",
  "key39": "51r8PxW4tzBBZmJkgTRbnwhUtRnKcndpKgF3R9SDdwsUtGSu1QZpwj8RNkYiSxHqjxCHLfjZB7GXf1pAsmXq2qzy"
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
