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
    "2Dz7pnweyfMufERHpFfaCmTAqTSxzedfAMr4djLyBzkqrVKJWGGWHrGSKY2itxKeLkLUNHgnu8QhA2BmKATXbU5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVY9AQsYiPoY11rWswXnms9DsYpYp6pyEAfLkj3Qo5175mqKgqqqhcHRUD5tBx96a8BGuE7NhGQ9wfK8NCcfmMP",
  "key1": "4fZUmRiEyjuJeamKKm3ss3xqCv1Nv33EVKURMYuf144vYpXTSxpsCkEvjJzsUMC7iSKk18h5YkLddRo2dB9pog47",
  "key2": "3E4gxMTWHpuumqzLkefPTA3wrjkSh8Si9jnKqPVEGEwtnwWrgGeqDte939WmzBuJTRoXDo61sY8CLFXikd5me9Pg",
  "key3": "5JJEP28BFYfDBuA61eSQS1uVjHzaD6wLMmAwvKBpTEPMWtWn4AHmHYaxfntBhbXuLNKJdR1eJYXXL3coWNxZo4F4",
  "key4": "myibpwqr9eo96AMRsfzKWogJ5kQ75RgrS4ioxGN2B8MsepiLfdvphA3ua5zc2GoeGwGe7jNccrWvtCQfeaRkGBT",
  "key5": "65oJw8XriAUNHxeTt4A7C6BakZRLQGjs1vz35u79Nx1U1K3K9AVbZLAq3z2mFkdmfBKCiGmQDaRSRkxgkgKRfoFF",
  "key6": "2SuGbSmTXUHqwLHsu25GrqUpcA6LmhYF7D8FH3iJz6hRzQ4TmwkUQDQbNnzFG2jEWAzHNBiEzxk8ruTxDWa52R6x",
  "key7": "VkiBXz3odFGfZu7ZnEniBBT6f5b1pjZKPSLcj6tuSkmf8fY1DZaDBHGcM3nMMKgb2ocg2bMWDhNV3euWFJmBv1U",
  "key8": "3bEmTC1TUv3Bh3HUF5vjb37wfhAS4cD1b1Ptgj11VyfY59uYKSoVfHy8XSaFjPh9uaD7uNMvhPuEXzEzVtLBcoaM",
  "key9": "3VzBgzeTFroFM1fdDzaEZHrpchWTxCCyAsLCehrZSUcaw9nxPRgXDX6RgPJ48XNdj2wGnqqLS6wKvpqhmoR7LTRN",
  "key10": "5EfrUNKdp9TC4GJUCFkt7HVB4oCwgaUTFtBtwcNT3vnDrykkB13hAAU6F18ztRwBwQ4yJ5JMjaFC4WGzKb1HFYRo",
  "key11": "4FrqrqH1uKLGFZ1B7RouWZ5mjTw5B2cVwHu6K5W8ucGa4hcTNVkjxp77c1cCK31Z2oK2DGNNYzqtHx2XpeoDaXMW",
  "key12": "5Fn7WmY3ffDAWfWDokowWbCLcGMFZqPyFNCkmXSwrp5wCr7NbWqQkfRnBPM7iajBMmvyTrjUWxsSHVpmUs7EwDmB",
  "key13": "5aq5db2uuCnD3WF822qhKRF7oHEWDBBZtnZEXReShbF7SKDGmTqqeSCWQsxQWcYjduaobRNocvY23KDSG9fGbv1t",
  "key14": "4VChuB8mh5ZE1BKcdV7DnKr4EvjzE5nswZJJcpjwRqxHubgXi6CC7rwMn1TfmBDXD2kYJykJHWSaQuuA2VHi7MVW",
  "key15": "3vp7qhh3NLZYQpVctZeU85J8xTL4dMzRTfFEdW8hM43zuizKWgVvxGzuXiNccdHSi5y69Guh4uwFFtcLUfmkh9Bo",
  "key16": "3J2BZknBNiot5Zbz11qrJwK3rJdsZGnauwAZhiY4RkinwEotL3bW5XtKUVXi9cKkLBYYKpuNrYqd6Pu2gBfYc2Aj",
  "key17": "5C7QWVRmjWPM8USJqi8pbMfbyunFhXo1tYvyFT7iwkDXAnLBYRbZBQAD8XeWMtxf4hbAn9MxE2h8H5cSJ9sQVv4x",
  "key18": "5Y6p9JJKA7XscgATQaQ4CEsDMtCj3vBPRrvr6iDZEjib9XBkQb1cJv2YexgQMRCsTV3UhnDihTRhNUHETJWdYSQc",
  "key19": "4x5kdenrQqKpbBMET386CXymupJ6c8XcvnK8kZb6VQ6qNH54sjSwn6Tc1kUvexHPFv2FdyNK37CqSFyT3bi2Eok2",
  "key20": "3T7ui8UE5hNKG8C45rFrJbkmjxiABzgMmsANN9u5tiZ2DPPXdgdFHTd48NLyX4qrwiczsBgw2PmdJbwNByJKmTwH",
  "key21": "QRR7ivABJTppbKhnEQx9djvMfTmqNQFdDp4pLpKpjjZN5ZaW3e8N4FDqdRYEGc1n9DdkbtDnRZkmqFHRWxydGVw",
  "key22": "2dCNt4khJEn7wgui48fEH8kVYBbc9TLS7Pmseja84TBDB5exW2ZXNNPyhodKpPzw12WPfTSPAoUAzwzJ5qTB2CFk",
  "key23": "3NbdXHgiFrAokzLXNXumj5wmMafnEXo3gzcPnh1ggHA4YoyvQBHom33q7WzDcAcnL4TtGBwUntz5SQ22EZJo2RVj",
  "key24": "3uK9uoNfZEhvH3h57fbCQ2THu5zrbguWcAQpTJRj5YMB7iA3HHrAtHoBJV1cqg5hVWRZzdQeD5PYF3RH8t4hcCvL",
  "key25": "2Jfm6EeUbcchgzLwWWMUHcephbajQB8cGpvm9pdYBK5bKr3mnfS1VWuawmQTo8AkKjsiUCDGEV3FcXFDnN7M8zjP",
  "key26": "qpWQ5EGkHW1TtdKrFeL1MBQAnkPTkqoFdkKCUATMvcTUWAimpq8TgEwJ376Wiypn8Kihbn5Nz8M88nQWyttBsiM",
  "key27": "3pNkgQeSsFUDtZPqpskNfSqMsuG4sVpXbtg8mwVZrHEDs4XrrRkuEdZqUE3MY6ZqEuC8xe8HH1jXBR1qo9dWAxGf",
  "key28": "5Ef6ihf22sDk9hKSFfCnFg1HKopFzhamEzeKE98eoy78ZGVCZ69UPcUC5G5r2XrwD51dP2EYwiXosUQitRqw9suq",
  "key29": "4tkyUCeZyDtbw5VZb1L6VrRVCrT1QXkyYMtF3kmMSbHJp1swgya7LEbAyJZDdAmKNNNgemZ8fdar9qmHaqWGzWJv",
  "key30": "3AsmbMMYkqC7PRG3WStUeETPxK7m2sMyhqoZHdi7pYqVNAMpztKibYLchFQbvgF7vGU73kk6PkxnLVxVwhWEUHME",
  "key31": "3EyqcJEkuyckH7AYfQNFJuxWpgnrCNUYB716JF3hrgQpKsJFc7oUxhoXw6ybVBqf2qA5mT5vdJMAMniu9faFCrTb",
  "key32": "4uJ5HMC2weJ4WMgPCAyR2y2dxSqJP18yxadLjg1bjwEFb49MNwVcEZKpXyPThaNJjPfPHf5vBUa7Bw5VhcX18Voc",
  "key33": "2eMeJKJ9S6PxXJLTfZB1s84Fo9HNe6mtRmfeth1uNhkbGgcJ6wDuSjq4nXge7pAiR3HwyCFLJdcxczh7Ej2fiqcZ",
  "key34": "3iMh9VupnyjXHNXvEAJPPFJR4J1R3e851UGzYjrib3grGgk2UXJhrMnR9kuKDxoLtsdLpaG4QBAoeniopQHZNryy",
  "key35": "5nPYiMAQPafrtMWdzRfRitWQezAdM61ZvqyLdYZrrbsQJ43rwbtRrGuwfdnBfaBhUfJrsBSddeeVNAXExpXC79wX",
  "key36": "4tiuSZfs5hFsWxw6yUp3cmN45CMvQ6RhbDX4MKQYUDUdWtzNDHyHKvdE1W2pZuYKaQJkzz5nET8PG8R9EuWwSzFo",
  "key37": "326RpTmCBD9ombV5VJxEXLDcJ5Pog6tQ9g2j7agonbpN5TcpUEaErx6e6ajbLtE7jtHgs9usBWs6VpHMzWzsMmxX",
  "key38": "3nudpVkvXNe431bjtVMfcME3UWw6rWGKqxXXPve2uCUo92c1TNhC3oPUvfJhCTssKvXcE85TAy9txZ7EswwHHv2W",
  "key39": "4GfmpSreP6iniFqZn4UA2cgzsmGvPfr1RenN3mqAqVVnWg6ohJWoYw6eHnRh4k6s1MtZxLsixWtAo5GGDaPBPhzM",
  "key40": "JfXPyBtBaSHpM6ZWnt8PrCNY7bqEHNXCRWxJg2KDf3xzBHBWzEu8jFXQ7NLDYK9hpf3FfTpjBJaC79X96cpvFwF",
  "key41": "2gZAjikDUR9GH65vm8cEmCkXazsFRghAJq3m6J8qkhqHRCZRV5S1J1hSWio8iVQ9RR8TQgdRPu4RWKjAaCWiqGxK",
  "key42": "fED2nAAeWxSRt8nEBXoKou6zSv8qDEWxo15TgEEe53KZKWpZqdPKmWZeFYbMdJvNtsBoymZkkba64v3huLnARiW",
  "key43": "5Ux8c9CL2EzLLRuZrj4J6ZchN7VTj2oNkynW67a4WSyTZWfjxUHrK6iCUZ7oNX6egULTE1gvQ6qGZD1w6gRESy6h",
  "key44": "4XWH4zhjHYyDASaJdsHpZJLY6jUBHcv1ytdcgdoJkTwwFuhfLNTJfQZkQpmTKzAikDyST2gH6kAZ5yQEsNa3QZyP",
  "key45": "3J7NPiX5ZrqdBXCg7TnpDARwqzBdtJrWJg12ujw5LmVShcEhz13A6EmBBqeN8M2yqcorgxaeK9jS2AytggzJGb1N"
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
