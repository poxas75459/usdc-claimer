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
    "2KSVsnPqM3mmEMqXNVkot4kCuvgJ5jrj3SkXkMgHBz4SHJDArtu3H5Jg6tWXvd3xgGjskWeYuYCdWnxdyMmWgJCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zYptYyeAkiDGPVdvtiLdPE2YQrRTr3Vmu5rNjY2RuudUhxfnbuBVNtDdUoh9Q8aCbPA5Bv2qTSteTRQYqmrNWcP",
  "key1": "2yzVW35DRBvAkuJAvrUzRDSoyX3hpQCuiRtA9LnX2VatiVFTcSEEMqW8UURTHBAgKGVwutsWhhwqmKMZ6wyZz7tD",
  "key2": "4WUtevmF3Uj8k4Qg5get8dMLDbgvjmnEZM32JogCyN7c7YrPXpNr8Gg4s7QNV4FRjUd34mdV5cWX1z8c61a5bgVe",
  "key3": "5hPV1vmwHJXmGKR1QqHPnji6oqEiyg36tNehtfHNDaTHA8LDR8woAuJ59ss5DSF4iQA7crmYxhnfamtAK6mvTT9H",
  "key4": "4GXKmqXWhUj1AaJ2RAdCHnL1L9WA83277hS3fTuRoaMFYxJSwK5cKYxLYRUY43PdQViGd25SegSn2Nvx81WadvZq",
  "key5": "5sjVLMMZRxgfkithQgzaZrgi81b2FCrzTiP86mHkaUC6SEx955CjZGoqdAiJ22XWJ3Ke4PabdGdvWWzgcfspfy37",
  "key6": "3czmhuea8VkbsaTMAtLPEJd7LvoWpMZNCXHYpA6fK4abw2dCz8xbr7M5ZkMBcV3hHNVK7Miq8B2GzXKyuFu9ac6G",
  "key7": "4j5eEmogerNq2g85qdM8yofnqaSXnfVBUvWEc3EPRBsxQZ7b8SWf2MZit9eB1iB7ujTyicZnPs7gcbvbJb5TLJvu",
  "key8": "3ASUQzXj158bRQG3cnPLUhe1JE9M9iqwmE4KmVatwfNqFx3F9kCMCS3ZeD5GHHTLFCuF7bdk1kUXC4BcLXxDnUQA",
  "key9": "3iKw92ELNXToQub8HY3gUQF8YFCGmfH73oyyV59pxKicmWnM5jLV2FsbMi4tUXJH9qEwndcTKUEsaBLJvYtAUaGe",
  "key10": "4cEhUH84wp1k6HqeuTpEPy8mtwvtmSkUvrjbnF1HDNe7ZYzLWpd1pDKCh2pZs9u52BjSDVuJZxqZca9FAVgniSE6",
  "key11": "5jwhBayfVvKQTU6qwDXNkKuJnqaqnKJ4gntNuDJUCRL7XETMH3EUvjCcyqPwvwxRmmKGmb76c3q3i9D7EAUVYyJX",
  "key12": "3jzyM7vkFg3ZPHnHkdvE8QcnpmAji3kTkkrK7PzZ3jbZ1cmu7YJzcL5vu1dwfRut2YXU7356JBmNhTYG9YmBrBd8",
  "key13": "xYsXvoiHd4VsymN4Wn6w6HHiTwEwVaCSdfxrMx7pcv8477AWgf8mvjKB9Tmydq3miLckSS7eoaimxEoLRm53weD",
  "key14": "22AXVxJq4SmXe68jGov1oA8wpGZS9CzZX3bLJWEkyxpJMRpVjG7GiyEk1xx7U2JtiED65P2yjTuURDAUQNBDCQqz",
  "key15": "4jwRZm1frNvHuAuBTChnhiTbhA9Ap9JkrtfGFFRoSLudkBwPM1Y981o7zjgZb7WRhT4YeBzC4udxkqTJpfFQuvRf",
  "key16": "3h6vHQ1M1PB9gtCNA2Wg6tAuECsXHd7g4qsvWQzAbEw3iUYAij7fWuDABBFyo3C7me3g9mfvQenwEukBkxGsMAAg",
  "key17": "3V3QHMS7qYZsK15C2GG95SiYjcB2knCVb43XV1L9HhhmE5ANk7JTyrATy4WMw1UGZepvFfvkjPG15nRhByFM1Khc",
  "key18": "WoSa21b6J5FGyUZHeJ7pFuM1F4NufCNo7rYZW1EtFTZeY4KeHAgYMMescz7BsMU7exWeHhoTP91n9wSqNTeVWua",
  "key19": "3YrdcisVGH4NYTbtWeEgNNVYa2asjCXMguQgT4UL3ZQoGXpd3x9XDPGRRUdjqaWr8ji4mX8F3NxkMMVeQMWpmLYS",
  "key20": "Uoq6m8Ff63hsaMN843nnGDi8LR3tmEe6Mg1vSh1dbaoa8KKNAvdvsE5XuH2SSErudwuiUwfcYsFjFb8bQJ5puNk",
  "key21": "3ftph4oec9sQ9MMZwGsycr4dLhLGWErBfweQ1zg7WwwjpLymKuCso6BePrJCCaAiodkZ2FHe8NqKF1qEbFAxDPCv",
  "key22": "5v7edMTi5g4nQTgVHgzXUMYi1qbbAEgKnjLTFZqfA4tyAHqGUxwqwRYkAqdjNiCMss1GH2iD7Bimge5w9ZcqeHto",
  "key23": "4d5vgqiLM59a3zv92AWXvAt7pTRmBNbzyUkm5BkfpurbgAxLwr46xPQirrTPSXr4xFkia2AyctoVF4e9UsPdNeS8",
  "key24": "3M2B9GHk8rm98SXGJe2Aepk3BPujwuY6yqC25KS58zuDQPMFNAJPAGGSjspuMwGhB1i99HnDYQa7kWz7p5L5TBVx",
  "key25": "4LtrpTeecLuYMNR5HuNR1LefyXyx838vh2aZqK9wstaTDuPJNB5g5AszZ4DDizueeQg3MxsgxRWeW8iVhCeXyxSD",
  "key26": "hGhusRV8UgJsqgoVzViZNDzY1RJsJraE2Y2TBjxn4zdt6NwMwszvyvuWsn8u8CCDYuGRGtaGhthwGrFHnNy4Dbq",
  "key27": "2AtuThMsiUR3ALa15otDYs9w73HsZXLrrBWF8dUHG4eEQquAq465ZM4sS614uSohRH9n9vvwMMTsejvey1eivx9r",
  "key28": "2tBjad5CyaNjHsX6maJEeotbc8jBVxZdbQtaJffNY2PgiDYnzxFSR5Mr6vhFQ9nowVeTwKJq8mQfCuthBLeo1F6z",
  "key29": "2uh27Rtq7cE7VBtREZ72X4vpnxAjkdTf6fF6Aq3xNy3HtZW9NeHivCsuZWbrxbKGNG21dzSCp13mwSFs3pkn7xSg",
  "key30": "e6ufgzggqx9LtsD93QyJ3Fgz8ZPTsmK48wButuW8RFT73GVgHh8uxj9venEEU4Dbd3jFtGJZAaRsThrQ4e9VBS9",
  "key31": "H6AiMcQLV6caBfrWQsEN2EdQpKqD7CqqKT5VMJ8GjzEFTCANNEb3a2HMSZVf8q7vfqDxJtNU72RgNjMXCoxLs9e",
  "key32": "2r2ouRMWK8ZKEDqr6YvgEM75Fr8zwGWir7Pkmrtqxnyiwu61hFxsotY9FLaGvsYphgqZgbkvgcYukMHryWVEU1LH",
  "key33": "3TL6PyLX8vu33JLQQV9VhHLXFJiaFydhFfRym3w18kgHecSEjhdb3jwijCw8c61D5D72pTJFPsUML5KXqpdVt3xr",
  "key34": "MwfZ8GQyx75hwsFvQJhsBo1ugYdivAxmAq45iM7SULJAiWeMq6D21Xqo5B6cdiCt2VoRE82oFv1Nj7Dn3JJtNN9",
  "key35": "4fcwhQSY6tn1bXk7iv1zbGPdrzrmvFFBEuUKLywKP7h7bv7ueYea1rWUhW8VvhXB4ydCpAXMiFZNFq2W4oG5nCRT",
  "key36": "28LP6Gdech2jsH2dHVsQmjSsa29rCxZRN2UdkZCZQJd5GB6qyf1NHdu1W2J94WQY3jCNtS74tnzmtJwiLtmpSmgv",
  "key37": "2u8rFPhcjrbWLy1FFVwRsjXiu9P17FzToGYNWzmrJFiiEXr7KM5HQqWzyoW31YZC6hVH9ztoWztcANzcdHxTD65Y",
  "key38": "4soSJgGaozaThnpXKJe5tH1Pu8vYJW5A2cQREiT6f76uKziycdETGAW68Z3ACXVkiiKn7qjBjjpwPuqroxY2an6W",
  "key39": "HGJDqpcxG4p6y15bM5nL96CuU8vkWQYMpGBLhMZihGTcFmJBFGexA3YmVCb2PwzbJrsHV4W9YQ8uCygGReZB2Br",
  "key40": "49zuNzZfStphHobpVu6oen8Qc6J8zfVS3mQCvqPEtBdKhbgCHg6hfvquEg6DDSwmnbvMn49HQ4RZmT9GQTBEbVTr",
  "key41": "5HuzFMCvXZHauY1ciutvEJKhPeH67cC9EHEWGfCqkecFMxdTGftjWAfu4bpm2bF789Ex5DccpWpUZGgUiunBwvsf",
  "key42": "63uZCpUDMS6cZFMTZ5b4BDReEqtb1N4973LUNdbdmMP5tWhhfuy4pVBpxP3sMSmXQhGcFW11BnVjp6WHpqijFY23",
  "key43": "2iWpWFHzF5QJBFdkcjJ7iPqAq9CX3MSLfoJgL2pzXr7ktYT5T9aUHkaTWef46jUeEcqrgn7Nrvjdw4Mw3J2XmRXe"
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
