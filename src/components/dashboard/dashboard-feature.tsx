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
    "2Yixd8rAaGG5UzwZ3xZzpwJmjSnahwc2m4kCVy9cmKBanDs3amn8bUN4fYfnUGaJSSFxiKY3o6Wdmi6ZpqEpyeGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQtFoVLxaefiZBGnYy7PyKZGW7KjUkjqZb5gXYrFkLX81HKeRzrWbNTk6HqoEUU6691KcLcyZub8xFDGbEszTKD",
  "key1": "2kkFdD6h4z6KdbC3KBjjCPpth5LY8sQTWRxuyL86T3fY1hNnauXWoyUyDRzNBCRpQ3maeCMuHtCJzcRLvkdbZJNu",
  "key2": "4PwAXub3BfnE773pb5kvs3DZ1Xm79P3HsPvuTftu6qwDBG7aCSU4ByAo9dxmTYLfmxAUcjMfr6ukcRSJTuTv9PXp",
  "key3": "3YxexVAtBBiE5Jzv4w3JPs89dt5JjJP8QKqyHGAdN8NJzEGfsnKNFddFhAVbB4fvjzuWfApSxYPduTnRZ4bLGqbr",
  "key4": "FTvEmn6UzGhzdu3fHPWp1y84kXhduSR7vP6mSP94q2T6oQ2LRhRXaFWErgFraFbbRcDdWwnoheMacWUzvCsRy25",
  "key5": "kTGcaTDH4WkgdTbRFsQW753rAGa31VavL1dPqvU3SP6HsNETkzobvwYKzYzUHKror7mrH5sG1XqBzVFTTNTBQKH",
  "key6": "2H7Jg3GgPNjv4cqEv99HyHpiNuS5z7312ZVGGhXHxE8JWowfcRJYKDbEdeBin6BDMChwnRexZNA1UrH6Gw5skd2W",
  "key7": "NDCGkbazTA1RERNytxPA28ny85pXM2TuFYrqp2FftN2wMCp8wXFyWpbCE8B7qQmpZRBUvKUSDESWipXQy6ADNAN",
  "key8": "3ZUzPNigmiKpcP17vWMcwDVwPQiJFTfUNAJZsPraaLeHHXpf8yeDCN9TL4KSM6btLVTxedGg5Qo557hudW3pfGSS",
  "key9": "2xCJhjkwKmr5dcJrCPb7ueYuRVYtnXTWcuuvJRoGk978x8EkSmY7C7RRDuuQAGi2MsJKTK8guuu5hDSSaawRfmpK",
  "key10": "4vBU1bSXq5XuzW1oiB8zZXC7qXgJGKwjGvsG4EBJeP3aRYtaTQtKD5vKogbvyX7PJh6XA1V92BWTzZ4CDKjmcJWL",
  "key11": "3ovzHQnDrJZKEvktFg5d37eYcsJaYG28phMk2feKah6RSadREnvPPk6H6vHK1UyaqQDRiX2rRNsMyH9A3mCQnRGE",
  "key12": "3d57jEVedhnvJ8hiLQwQqyDGmiDe8NCdeofeKFLRXqhoeTzfm4ka9MKQgQSYbsWGgB7Dv771vte16rPXHW7YkZYG",
  "key13": "3ikS85pfUFgbqeZSSwL5ioydXC8aJw9muQ2TVeGkXfnasGazJLWy3W54pBfxnYo3oVaL112WXXRUfLzYk1mY1iGs",
  "key14": "2s8hozmTjGxmWU54KDfiCowwuE1ZFQS32UBnwZMZyFZuXHz7Wyxu6Aqr3dVgoCmEaYu8jNfgc43srta81KMogxkw",
  "key15": "xYHdNoTUZEAapBF4yZcBGc4wemh7Mea2nJDS5W1w4FCEt3nyEWLkHfMZrSZWHTAdu78qJ8rzDKsoCMQhiCHa5fJ",
  "key16": "5GjeNGDvC37gL8uyPqFrCyPT9ysjwnHF2AqDd6riThi3xyxWd4X6WRG682KZyzm5ZC64FgNjuPyUn37wWXHQgaK7",
  "key17": "a7YDo7vm7SWtw7MXqQEzXt16cJ5pcRxddja6S2Dma7Sz55Efz2cLMHHNcwXGx94qbyUHxECqpUSf7rhbF2mgdcZ",
  "key18": "4QJmojZ6kpUniMnT9ADhuHJaTV5LGmSQwW4ANAJ58HeHqrLE8nz6kN1n6bRYAq2cDdP6ZkkeukaDsGhvGKYZEnZe",
  "key19": "5eSXqGqXfxqP2pJYYGU9DgGuHjmmVpDi8BxqEhueS1tqawWXCRtjRgqmjspAb8BYs58prhVWpe4BmES8qdBJ19rC",
  "key20": "51pUwiGcqZtHGtQsa9f6GFPgiyuSU13HmkjwCsKGJ35M1jwfKYbqoSpuKDomb9z9dN8uFJv2JxcjqHsaHoS4n4rh",
  "key21": "3eaYYcYPD4AjCvNWjzT6LESEZbg9wehoVAv36N5QzSe3mh9GznCFWPF2QK2hR3q4U4qJTr3fTdCBn1GJYnjd2JSP",
  "key22": "3W9coeJrtt4C2NvEk2u6dLBe15rrWbFg4ysEFxsg9bsfsfmwifiqkF3hgtv3z3t9EhaCCTensLvGLNsVJjakz64b",
  "key23": "2aJsxPZPcbPdwd1Qe9BGwcKqMGxpzMbkijNKoRMMiCN1t5q97bQRjjmtha1ekUmJmnXbbzixf8LwANWbH79ukvfN",
  "key24": "4GtLfpWF2NeH337hQeSzL1NLCH8kWUXzemFeVAEEeNKDXShizHmXr8ztMW9Tr9KLEWeyS5AvJnZbFrKxEesNMYMd",
  "key25": "2ebaBR1gkaPpmJkJHT8qUh1fKEDm3FYGkQ7YcgoM2F2ACgpCvzoTn5BUecLQ4UE5xXCmHibwo4ooZC4efDxYTWvQ",
  "key26": "4dd5gjXw71hc1eHmZzcCArBroKYiCPKrQgwgd6ZC3i9aXu4pzZHjVCe3BapzTFJDNfb11rm2AxfsVCSVo9VTJPZz",
  "key27": "FLpJhcHamH1zFkJKAuDaU7bQNJBibGc14ro9bhfgKv2t4RTTJujTpq6YZkQhfbQdZQT88DXHMm53Snf7JXRSrwa",
  "key28": "5kaqbGMFgbXRi2dk3AYgfqEjWVQgvyFQ9QUEbWN4b5vHzdfjf4pGqUkNMMkJi2qhuZYZTUTkvceUK2AryHiuFzWe",
  "key29": "PDvhjr5uw412cQ4Mwur3hzf9mibHapLE5vzqcpAUpjpCMDiMRqGw99j7bna8QAQfQ5YeJrkccj9K35DbpggQfBe",
  "key30": "4BsAws17vzpJQ9Tvz4PDk5swwYpPa9drZ7sZVVp2rN76HtyF77opRL3ybkcwm7axhMDiskAPQmxJbrzpGvXPGDYS",
  "key31": "5sUiVP1ix8zrHGbb1sSgCSciy4j1ugn6NiUTSRQsEDdUVpHvycfdDWtFASoChyBWEKbaJZbXieka35ZFsQus9hNd",
  "key32": "3AxeAHeT82TJEMYXWynep7vKM6Z4RXoQrz2wbEc5NM7aW8bSzNiYrK91a15VJsNCWutk1zhSoYHwazDKhKpwkK9u",
  "key33": "2Km2mWPjPp5ZTSffTMjAeRocV6oEi1m3TFDwjqRC6o2p1tVHk2qJsJU1PtZvDeH3TTkcYUzMerwBkF1izkCVne6z",
  "key34": "4w9az1BbPVEq8uAyxsSycJ764ZB1vWW52bKbYWMPxc7wcKZjQrZm3BspUxGxu85rH1p55DcHnM8KxbZnKow3Nhmr",
  "key35": "39hGMuarfTbgRgwx25EZGB6ZzNPsxgjp5Z6GcyRQbqxj4YrSBg6k4VveompzFsiA239wknbjhMAHd2VNheCwJy12",
  "key36": "22h6jUC2SBupwZ9Q41e7MZhEsxttKuVxeuyUY4WvR136sb6eqzXdM2kQYfJqytzWmMivsxR6kk6Nf3EUcpVkpY6d",
  "key37": "2L4w6UNp26JdtoAgNLdPphGoadyQyx26TsQYX1r832ff8SLBGKCKNBuzfzXRkuTk5nQwSU4zkjBYmJ5kVAbiAF7G",
  "key38": "4HGEH3gMHwMvEDWsAn5cYmxmPJU2xh2RyMzFk3Qg6mZdniQED3Gpft9azmpYjXXnDpPVKGqhCHu2Ub9qTnQPNwoV",
  "key39": "9mQV1qFCZsNgMHYd4hznfx75Vxwh6WQMGMQhHH926z6drNFx5bPfrsjXNMi8rwzobViypqTt7BtbmzoxP4yJLs8",
  "key40": "4sLYZ3uLL9ubVD6BaQp2z1ujPyDfkAy1HtczjK37DTKPFnbwYPM6uEnwc6s1Ge5tpecwiDRKmsDf7rPMKXqxU8JT",
  "key41": "52jrHDowp3LgggbeJVRVWbLqA3frccsap8wotsndadAp2AvHzLRntpWCEQ95wyR2hhqpKzcy8J1XvcBFBDsc7Xdg",
  "key42": "39ASEPCTNBU22MAQSgCgyo1VKVMTZ1jnivjYkwp2jbVwKEnq2niF8aJ9ZJuRrMNizNgwH1vKhVSHqBX7FDWd7Hf5",
  "key43": "5EohpJrUTF2vazYVL86NtPX1QH8Fadcj7YX9yHCG54aeQhJ1Dpvy5HNA5TQ6CjBqfzcSBF1TbTj5NL5M1axQLkWn",
  "key44": "24rMAHm1nPnHVcp3P59SQnnx38rM4jMNBpF8qQomySfoUKiMGdmAPnKbmt683PPkDFJWA5VnRiJDePKMwkiGZUPo",
  "key45": "4CkAqQxFPMknVPfF567B1p2Eey6DRX6mrNuhpdqB6ioRjHneiJh8YQ9mX2bvXdk5twdnJSMQ9PLG2hhkMorkaUdm",
  "key46": "2evJocp71eyUTkuLvPNfavntPqwmrNy9pw3AWajTymHc6G9XNKgd6x16VEMoTdsVQuCKgP6JdWLwpRBebMzscSf6",
  "key47": "5awMgTa6t5CaQM1RhUe3CaPdAm6aXbr7zoDrs8WfFijezqVAZHaKQeHXpsoruWhP3oJFHoDeTjmFYkzJJJFXnAY6",
  "key48": "5G4Sgg8UmvNCNMj25NTpgEijkfXkEcwwKZJoe44wZSaCS6FwCPpQQxLB6zefVYFKx5KJ1LUCbxSEuGSsDPEQzphy"
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
