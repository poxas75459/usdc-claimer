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
    "2KGkKGhjh1D1dSvVLFNGCuGpCgRXbnUNXaRBPbcaDgESi9TraAdbtcWV1eUSu8fNrELCCjqD1dqQcUHh89te5BPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51toxk6ctKTq39zVr6FRhopmZTg2ZrKTjcABAy514khoYhy8gtiug9SQzZ3Pa3TAAAzjvB5RhmkyKUJgYc2UcQFn",
  "key1": "47JxeWx43nSDB2Fj24LGQiRqVSfd7cJB4kQCBzHp4kmkaj7w4HTQUzSy63LExfVU7b553ZL8bsqJADJKoEC9X8zM",
  "key2": "2kasopfPu5Qgp3F3UMBxz91c9Y7ysNLXvnTcoZMkopjmSF74EAcesU82xDPL2AeF87ky8uurYWfRMg8WVEiAPeou",
  "key3": "37KMYUUPvmtK81uicFqXe2KYCFq2xfvNJffkjj4a22MphbWmjYjnnpoW43CsyFncxb47TVqLYriLMVhVpw7KyBce",
  "key4": "3sgQAnbzvWksTdGhQxYZZCYPQTPp1WeHTj8cTXfe1Sr8QnxpiWBBUPfTm7pm98MPLdEyeV1neyJYHuc2GnYPF7rH",
  "key5": "3F4opxL6pNLafjpjVSDhBxtqddNp92SicbL6rwk6sg9H8GpZap5vS6u8DrquvtEn3eBPX6eaM426bP47hatHf8wk",
  "key6": "22SxBR4rJyygFVYtV6WBb5vepfq4Xk4WnCDn6f4pdSzQrhpGc6podQg3aJeN9Tu188vrErcKmnXiS44tWLf23XL3",
  "key7": "5YGH1tFtjrMPjfWb3xmVTZ2BfZo8iQkDYC963mr7QLkVbUBTFbNbSFBmgQ5AXWEKQNpAk4kytUaxmgcZhgCfWaXE",
  "key8": "5Zxjoc41G4rNmdeYoWVShAPeddmf7zsyFzv4JPuB4m9VE7rJysFULNkCEouJtf7jS3cCgFtT3PqQhVTvKYTzRVF2",
  "key9": "gyEABdPYAsTmSXScY889ZPwjAxzXpJfXfbhLSeUa6Ys8PB8MCoy5NMVmYLWRz15DT6gA9gHtm2XMR8jVthSnipZ",
  "key10": "Xz5YonL3KHfTzVjPPVkXxEmHDAonrKanBDwAsJfRuoN9VsWhpM3svuYUZm2dnPQsQbc8NQKT7dDc4weZuC3FFNX",
  "key11": "dx6Tsfhi68M8AUnxMtwvuZ1oh5WV1YWRJXBRVkQuxTpQs3B4V7oWGZ5uuuRTwo4XSnA2smfQFahF19XCmgi8ReW",
  "key12": "4DEpPFxDh27ARRgcx24cz5WzoiUFXJUdVLh3Ei9bsVwr4WyRxjkhKz2z6ESeBiWuYUJFhPFLPQvQ9beyG9SYW85G",
  "key13": "2enmC48H8nAKPLUToF6uVFQJfnCZLCMX7eeSZYT1qPiYFaUdhpkMYXRdRmcdUXpK3CRNkS9DekGpNggHPqPiZfsE",
  "key14": "36ofQKurAEjztDn7EidW73aUigJGLFhekAEd5HoaQykyrh4S4PiwHLctJNDNFgUxXzD2qQsHyviB6CnfMCrcBgGy",
  "key15": "5aUta5B41DYhckWPXsWzQ4q6nVywcSAs7zFr3gRArv8ZTpQEQ97sY7zgoxSVJZLKX9iviv6VhxQXh5uxHcEr6Mtp",
  "key16": "2e5ChicunhcX1aiMRwL1fQAJEYu3MEaud7rTmoRrKLLwD6oPgmTe56JcjUzkwHourEUvrL9JPLCkjgZDBeT8D1kc",
  "key17": "4cStA2m233Cebb1yJmVjjdeGw5P3qvLcCqRwcCZ4uWWAjDHki1M8gjrRCtXHeBf28JCfg1KGdgE7whYHfsF393Mk",
  "key18": "4EfF6D2MubyV9VVAugGycJYivZ4xhLRzS1Dh1CcMgtwZfUp67Zm3juAExnx6yVvdJtqxWWh1RVjuK9kbfYAcGisQ",
  "key19": "4ERn45bGhQmf5VD1nwK3ZBrtnCG4YLND7rvCdCP6q12MjUhPWDkRWatRpqH893H24q21SKLKbThYKasi6HCybWCv",
  "key20": "298BWLApF8RwnonoFg2za6zz9RcSh3E1czyZyyGeHe934vGF7dZQ1eJyw6UffYx4NzFh9S1SjRLqSnEcfmcTLFqB",
  "key21": "5QH3dMojatWvcXGdgrrjzj2SvbGz7FStvDoPWkFskn9fHGNstChczCUtr4Rzm1nYHNZe3dHvLkmdmpAXSyc2eSnH",
  "key22": "3NSVz21uAebC5kzxaTPYCtBv9sGtRxkiTttAsGu4NgyXbzuSsCJ7sM1YMvv8KJXfbUiicFUAV7h1bPUhiCiVVSt6",
  "key23": "3zC5SsMYB3WaimWim8Ry56SsTcRo8Sc4i1NLfTVdVbqvuwoD6hhfbwpTT2MKwu2Y24Pjc3g9qwZFCQiThdbMRZUs",
  "key24": "4cKnptX9KzqAzkUkWx8CxcaZ8iZk1ydZdcH793Px9sjnnbGN8PrttwB2ZSg7rmU2Cd8F4sUckrvYwD8zfVzXT8Ah",
  "key25": "ac8LLuM3zgTdfe4EZQwzERfyjDznQ7yGBdDxTAoK4eXfCWvijST51tkJGroAvnF3XWhm9Qen22EnWKY6dJQvot1",
  "key26": "2s79qg6HofTBv8ZngftRHx5XWC8SjSmecxC1UGFrcdvX2xYK1UZ1S3XL8c8vSBVHAavx5QxZaeAZkmQ7j28psvds",
  "key27": "5gM4vK2HGcyfpdzX5fjxPpvzZ8pKTA8weyuALfjfuBSyBZYQb2UKYrhn8Ae9DmNPe6jVYEEVG6vp1Zkt3nf2Zhw2",
  "key28": "4sefC3cB9QyZdLaKu2sjzLYGbsht9xh6DM3ATMhccxKzLN6XT4FpShffvFJ4Z4E7erxe2gpk2htFnVUoUDuCU4rz",
  "key29": "4VB8QM94F3Gg56sCtbXv4CSLQfmNxYoNpfMJHfvCUwSFUrCKSfWWADFkgGYWeZQnfBEa48Gbn9tUZQGNayuHWqaw",
  "key30": "3Gx7fQXdP12DrAZpvk2hZHwTVeNNvYXwALs52T7tnDnaRdELSb4VeLLj9TJGgPUvG6babdHCLTuAsYWb7DWHaqpZ",
  "key31": "2prpscin3tBb5wRHF7vpZYoMeuYymJVn4D2NTFjuHcK1JjuKfd5w3pTDAxZhFfyGee7mWHQZpihv4GfSQ5bH3EZ4",
  "key32": "4TQyctBqaYDuoHVyk7KEVR1ATZYC3GufSbZ233b9zKMivroBCzwE5KYTCG9TeVnBWLdfWZynAjzG3RLa26si83cF",
  "key33": "2VLFXCrLd68DBzBc2sSQZrMKH9xuWSXov9mpCAxd4UzPVGHMjWdUiiwLjfnxVjDHg79WhuNfBHraGAaMniCxNPk",
  "key34": "43DPiCQXiXcofubHhGW1t2b1QXBcr2kZqugFqK171bqH8SUZxHzjTU61eRQA8oXkzwR6TE1AsVssQ6SQV8dqGn5s",
  "key35": "Rv44nvwbCryZK9M8SK8oXGEeqdXa3sVxV4ENg5AHrJ3z5hHmSThYaBRxVAmoMUVtnyASm8YTGVKG8hgP4Mfyo3j",
  "key36": "4RJhbFY4uuQSn1XicQxU4JXa5rdY3UhYJwfjjZJJMuBixwY8LnSxDzDioqYoydVPfwXibGQD5KGmCdpatgfoBXtE",
  "key37": "37jRK6xU4GJg2yoXq2VW1PrRxXb8wc2fNxNA2C2Q9e3rSco8njHeZr4WnTzyz3s7Jx5zsUH9eWh8ZLv6u4eqn8jc",
  "key38": "4RcpmbAXbk9pWfdiEjAPz5xaS64v58ho6Zn7pRwsG9UKYSCsrnjzkugKcB2ChPff76o71nmq7Eww2NBWFmWZ1dgi",
  "key39": "6ERQRU4uPMzaWqGUAVBVEgCc3Edc6rWXQmcexMUx4vtPWTW2PAPrDAFeCeynYLuumofrD6EetQWYU9E6zr8TqSD",
  "key40": "brBAG9HFKj2yV1bqr1X6CzdCiRFpY9jL1CoUPodX1Lw4kH1gA5AMCDp8PZHzLC7JoDeEEerQCjiutkkv4bYvLsH",
  "key41": "5jqQS9K9CbJMpkRwFz4CW7gBXLNEEdtWDnQdW6tBHH9zYqcAYC8ARhT8Vs9UGxKCGdkVUrcWFHKwb9JVA8x2LjJZ",
  "key42": "3fiheEoZJgttzEJx8ehphZwcMBWbbLRXBPCZ32PuS4uJw4ZyCZRX3fiRemKhvB5vm91qYeCKUVnDZRAhSoiXKxfg",
  "key43": "4wQYgSQ7ChHxHYU7hPgWM5SPT4FanZD4PGAk8oQ48fTBLUiLKvDXHrRiHm3YUMNN4gcjP9AApNQBkg2EjmwvP9Kp",
  "key44": "5C4WLJeBKaYXfKSGvy9G6zHw28cCf1fbUk1P1f3YvAypYj4dM9ww5U3zyMJCGYWFBrwc3NmusVqt9FcpipKLWiRE",
  "key45": "4VDxWNKHv5xh6u9cfUmwsMAbLgHSWjhKkiuUX63bxXhrB2ThvdjpohvFNzXDyToHji9wb44ByQXdaonnKPP2UUbu",
  "key46": "4ZY4Y8F4maZisFa7uBuPTvGGFYJwozqgjMpWGrEsV7uRCXiB7FP2KLrfJiqAMEs2wEDzP6rhU5busFonzUajPKY9",
  "key47": "4npeZ7eG648fQTd9K2uevSWtw72KiJtiPrnc8gRYNQEKb7wXzF6TMiKb7gmbddxQKCAmhdYu2JxgcCztoKqoRv2h",
  "key48": "2xs2rPEX8ZVaRU6pGspAALLi3w1KGFXQJbNyWG3qzAV5WQzuQcTE27j5CC2eB1mJT8mUpcwpFWtVpQ6qDPbYkR2M",
  "key49": "3GpPHehGoqhRBEUWSxtWUBYkQLztuzudoA9o6RPMtdc5gyceLNHDHze14xQ3oBMuTNvG3YyFiohG5htwr15R8teM"
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
