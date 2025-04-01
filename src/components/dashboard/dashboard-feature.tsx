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
    "477sjaZPaFSTpmBiLvWGdWsJA9JTVicAJQakTi2FjCanhTjyHKmsYFAjLU2hRTDb2C964buyTgAphCUe6TqxiajU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1uXXa7EUvYf4uGGNmkHoVnkVwW9D1aefgRPJBe2MCRaMj2njFCpeWxVio4VCZ3hP9H4dmuhroAhNsnrL7eKcs5",
  "key1": "3UDL6G2GuPRG5XxoSp5Uk4nARyMp8XEi9Y8hdPtZtJjs4e7mcodtDA9UpBZthyatLhPrvHAnKMdYDqR864U6Bkwu",
  "key2": "2spq1xWWgdspnkw25wQ9j4ffMC5ui3qnSu1chymXZPUUgKQHEuMkefpFk8mbtxDjGGmYhY7Lj1K5Wh83WU8grZXe",
  "key3": "3KANNLCAAagsz8YjanF4LtMdLDjpjRmHu8fyU8ZUsK745GC1g6a7AvnZJpUGs4cW5P7agmP7LWLkq7tHMT6Zk5Em",
  "key4": "661ZVrat8vhtzvMyLqxqXDdgahqmJE4i6xe3MTfQmuo9coV6KLrZt2Fcpe5yZG42HhHkC4dWLpYxpZaGSZctirpa",
  "key5": "3dZCAgqYgsMhQN7uJ7CvhEBye3XwGLeeb4Aqx59fZ2G2rn9bHvHJGztj4Ubh7oAFSbQX23hrijyLbjhVUNp9png",
  "key6": "2QyGFWYfw2du4jQwX5LtmWtbGXKLGqgeq4vLKKPwu84rAr1FJeovkeJ4EA9zDGW6WU9ydq6E5NRpSCYQQNRJpDGv",
  "key7": "FhJYxHt4W8DQSmPQ64SxNg67VkUVSDXoNcDaSpmVLYZFobv3vPU1vSPPXUeLDByKLYuA5h1H8u95sdUgUHMKVUs",
  "key8": "VK1NbuVCJ4gMZWs6oi1hr33rQVbXduQL1reFbMawcUSAf3Qmfy6QqC2jformDaJR9mtFWPsZ4o24VCXa3wmjfTU",
  "key9": "3YYu952D6m2tJRjuxLsp2dsEBUksaQdW3X3apLrzVYcX6sVsLoEbCVV7BBJD8a6iiKnoQgNqucWFuaUXFF5XVGuQ",
  "key10": "RuKPyRFhXDpqhhJ39rznDvzR8LMJwJbwmfmQ7iySoouYNyb1AwjPaYZtZNggSJGKUK1AcbMr1y4yAgTL975R5X3",
  "key11": "2ZkBRQ1qQfNywo2W97ZdTpe35fzVev55XK4iKcgQhqXZpR3TP8YFpSh7B1ZRKzRx8bEUbZ3AFQvtbpK4SghZHRtD",
  "key12": "65Qu6PbYdHquW4N9rjND5eVKWw2ZLpRPJ3GNpi57W8qPXnWKax8gK3pmNUpswFQZ9sq7GWghmJZmyjk215iuPXyU",
  "key13": "4iFREEatNZCJUSRTrcPPGcQtg2NSnX1k5F38FWE1C5aBU7YCyYnTMWtL6DXACy91EUnxHw8P5GFxKqvQyAujQ8FY",
  "key14": "5GFb93gFMcnHDWmKsyxsUpJwF9KaFqPAdZBFLbzuzYhxvQ8JouZh4Zk65bJNgGq7FpjU2g5vRzccjvZgPegZp4re",
  "key15": "5w3AULNU4iyCowTKv5TDb6SXsMjY4iimpu4f6BXaECyKKu96KcACme8ed53xXXZDHXctsaXUY6jBD2JsdcUpGscB",
  "key16": "2DHRrSqgjVa3Lg6wrAqfi4DSkihbVHtGytgUpQfsUMUf3SpgaNnt9R8UdFSSXAktr5rUBDPZ2jzXFLqmtQkffsLj",
  "key17": "51kWZHXRaYE9zV8dzp6nqyqEo2rdXn5gov87RkrW79KHNuypKhPRiwc6CcmGioe4SrbhkVHCBJ9Uu4MT415VLZ6z",
  "key18": "25yrYE8YJmLKjrMRfNunUzFN67BaHaG1yHSgHkT8TnHboXNP7oyfhYDHtVyku6cwza3QttQvjxayfit3tyU2K9rK",
  "key19": "26S2CiV86MVCwXpezqGh7bwNEocr8M3AcnBNFKdzG1PqeUJK79Pgabc6UTyHXNp5jbLSSpTXAD9eoKQngd9QqkwZ",
  "key20": "5k9c8P9t8P56FZHbxDWQ8srZ1pAs3BAoPsXDs7vGmTk5MZvsXLSVreDPaVAzHNn8tzSoKLo7CLeAr317gw9oC48v",
  "key21": "5Ny687pNErysc9prjHKyCdngK8n232jnhxTJU6ovwfXxkNrHZ1yE9r6JMRPY7eVAnHd4sQDtQoTEsCpKvPvHV3BC",
  "key22": "5Ypv9PSPmXLpnwuJhhd9eULBhAdvL4x199t38vaDwbAzMm4Y7MhKaMhi1eVQpEVs3jBaU2tY24eN1NQ8CpVwRHDt",
  "key23": "4aF7UchuJm3Dy4xYgv98bg5SmXikXo4k53Lsz4K1MqSrauw55cWoXHPMdrSJG4kxcXP4rdYs5Vd3Bh6sCTYoY8NN",
  "key24": "5et9WXveNvgccaAjQ8n9RZ5jhfabeK9LhpugiwWJcvWPMixEtCukFiWkrZgEV43zEzLeQqUXCfMK8gUGt8PvNeiD",
  "key25": "2dqkBKWpkbtZLp9uwTcP8CFfZQBT4kAyZNTB1bpu4E5xaWZefRFVvt8pKiytD7gywE9X7HxWtFUfie1c9jiZFwtv",
  "key26": "5bnuefoDjcJGS77Egw2CAWkAuVM4DkEN1Fza51egK9oHRLeJJE34xtZFW6RCCLH97pkSUocW71jyJ1jUZjEP9tLz",
  "key27": "RC5ZLCLcmGGzMarMdBGZii3uxFiw1NRtyJr5bHqpLFunGer7m5N3tMv7EvK5714RFyk95XMjBaT9soy3g64gY4x",
  "key28": "4xYc7ycN322Yu1WDaJiU8w9WqEWDqDocVUf4GBwmYXcee3hEozuatAFoLPFMd6UyNv96Vmvem4opAwq8QSdWKYps",
  "key29": "R6sWZH6C5dy9WC6onqZ4QvamZMed9F5D6YVvF8wMkPLQCCtdFdDNrHeYbVtMxdAGGTRZCyybZGa2CbHa6Rf7akY",
  "key30": "5nHKivwM6wp2Z3RGMD1W3MeUkRvMPEer6BiHD7mJHHdLHW4HBCUAowAB1CbCfCeXeLFixK4DRhq3qWF9h6ij8DQz",
  "key31": "3gp5pg24HZy7zxgSBumNb1FGuwrsh1q1cF79VyqZbhnTiBKWi8pL9ntvfdk2D9wZdhukGCGmthcyZmemHWs7oNyF",
  "key32": "2FNgoq74NK5mdUrYqBJCSn3DjaBQR8DC9YXFGV7XPHbxLnEzh4iqMUkXAgDeKLTgeCGThpa7Dx2nbFYNnGowWRyj",
  "key33": "2D1raEJbDaqd1MFt2y1URd9p5sddaUm1tNhV78tFXjtc8ZvyWKLAE3futw3HPVtP1fToEbE2oh64qLcaPn7fV7hU",
  "key34": "33SaxumDc8LnMWMMCr7VrL9kXN6Die4idw4zoF1kRZ5tnc4EYuG3rGj8QjavAyDvpg5WjRTNS8qW8wNSCMJ2akty",
  "key35": "2qEFDLdy3gqvwqi3nR4HgBjhChu7kzXg7nAm669GEB7p3cenMYH5CCD1FVKcRQQ9fCDL28BWJMMS6hYpbgrJ3oC5",
  "key36": "5zy5EzHTDpfx2uMmxTiXidZbXVMf5ubfskuFaq6d9ecJVUquFEpCYRn5RZ174KH89d9uBr95FvHPiMokBijczyCg",
  "key37": "2Afp6cPrTzE5UCCa6sZBZXwuGNXT9cD9RCdk2t6UdD3LCNp6bY3GcdmVqphWJYYYywimkQzwzjG3uhLrDZvBKiPN",
  "key38": "5Zq1eno46sjU5j5TNv42vvFD7pXMShwJFKPD2nNyuarUkF5mAPziL3AwdXDoRfp39LJ3pT1rSTUWbjeKyqBDBikN",
  "key39": "2FuhHqnj6mAzdrNXwEsSLmW1dP7xeHHas4VfcU2bcHREgwJKoPrPqtZ5yeX3Zqd2d8e2oimW1H6S9qsQ5oDVUu6y",
  "key40": "3zxByCb4M9x5wAYLRbyeVAtzzjqM3t2aktzs5668AhmfHhfRk62kPzFNEma3xxJCH1U94TwAhvm3c8VvwYyAMcWn",
  "key41": "3K6Gs94vSbdi8BWLQzv8NitzBs1VVaMJprXef6VJnQzU4tAXrx3XFf6WEUaEKu9sEQvugDUfbp8qq8SwtVmWg2gS",
  "key42": "t8FsL8nz7kr9xXfXZGMuLLxYXDngGQ2g9my5Umxv11DbquSzTZgdTQtUw8wJbRTZxX593fDXeH8RwpgWjhda2LD",
  "key43": "UBGBiBN2VTWutL1bZ2gYj7CZS4QVhthiGfeYH3YuiT88qe4hdBCrpgy8w37vZuzLh5kShpuJQy8TJDZqsjhkKpN",
  "key44": "3qsGkzrm4NJujhkRwN12x3yfwybjwBFtWv6Lzf2kJ8RCPPVNhs9y4XHbDfMPZvZ1M2SV4CYsPhExHnoT32Kjytsy",
  "key45": "VFa2GE97HKBegTGonQoGuXXwWMnuVviY6V1zSYstyinAfoMQMYdX54Mx8YgAv7qafQ6S3o7R1YdMwdgBnBzrZmZ"
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
