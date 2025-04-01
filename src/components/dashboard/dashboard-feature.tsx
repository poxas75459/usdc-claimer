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
    "5UCsceZ8GqWAEQEzVxmBbxZQrjyk5CD3ZmPibvhzFLNb1KdNK6ckMYSxqS8K5MW8BZLjan1vZd6F44w3uYErnsta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c8AmYVZkzHGsbSiwTKimiuRHasCnsMSS8KMFSF1sHVtkxCcMftrNs5vwq37FWQWNJ1fHwcKwNPngo8ejX7pkZwk",
  "key1": "354S1XxuMThtWQY4Qdupbw6ouzcQTWuNWnXvZXEjGNPCRjgYwfjMCwrT95HZ3SD6TBUXgyBiTcQqdFW4ECeLS4LQ",
  "key2": "4VTmnRSRy9xw55vZdiTYfrh7MSWQ6x2R5duNGcjAjYMCfRXKNuwx9ZEwgAsVR8aU9mV8ALbUuK3Wf38H95utkbnf",
  "key3": "3bm5CHohdWBgeRK7xTkaP9dfC9SsuYbD1dqepcoz97suKhPrJk9uLYXd4Bd9MY5vPG9FbpsQv3nVzAji3acpXnHJ",
  "key4": "PHEmS8xxy2X8j3CstCXg7U52HZVMkjyMaTVY9fTwp4RNsyDJf47vgdnJQUFVr9K6q2cpDjaGh1NMzjSRAwjwDd7",
  "key5": "2ASzAEZxUe7v2qkLuiGdUGkjmMa2gPtZXwMBb3wwaMyLFi7LbS9LQjyg7rUYZFYmCshdDwKvoEJkKiJXMeup7K5Z",
  "key6": "4zso5cJRBF6iBPdCDqM4hcg8Ru7KrwFoTQMmtJqfyMqf7Xx4Nvb1PTW9we6JXN72oYpshty1K9n1aA8X89xmAY3h",
  "key7": "55Mku8mZPmbHnMWURp6jXVoU1fctR2dAKbMiKAiv1z8cwmMzNknX7CGs8qDBzkbjn6skoWeF3VbDbsmhXB32XEtp",
  "key8": "tEiDXPKarRzBAifWECB74Lc11HqHk5cTa6sjKw8D13NHGnWcLWrxj1XZdbEEENwuz5g6EXQr2dvM1kjuE1TTNv9",
  "key9": "5XkvsZPcJmsTU9prcuMx64AXx4hWkJHJar49yEYTRbYNox3XotTE5D18sv3XyHGsq61Sbax4UG4UFMkBeidX7ayh",
  "key10": "xL5y2gdTA4KResiQSn1dhkxvF7Atas2vgF7TyrTgPqTXoWahJ61JHEL9dAeioedLqVvLJy9WusjppHuxNNWV9xB",
  "key11": "ZKnJC4WXxSWP9efUtvezbVMnESWivnRmR5RLn1X2aAbhsZ3gWHbV5XfwSoS9DtF2ECYQW1TxUGkaAabAzWYajeb",
  "key12": "35Nox6iUx6dtgfvByJ9SXG9i1FZmZeZcEtj7Ny84QcQDUbTAHjGgv5wkaadVAvqtyR1t9JvQjiHeJUqG7ZWsdZWw",
  "key13": "4WRp5etxeHc2fmyiS7moYzqZ3K4z1g3FKfX9JTu9h8o8ZA8s48cLyAomJNzw9joB7Fca6hwwWDEP9ULydimugmF",
  "key14": "37Fe5EQpmruUnhbVMohoG817GWYSiDgRVzhYJq2v2nwnfjEtvWihBbGfQgewDn4fFZDyJtPHirojgNw8NCsa8gPU",
  "key15": "3EdAWvCjjGkhgMDJHsGSvm5EFW8ZgwaJK7bxFrj3jZiDqarA71j9XUaQbXjynkEVcuN3mBwE4YawNqYqzkCoEj2G",
  "key16": "3Mf2aBuDzeW4pSkhhpGL3bxG1hmAg1D9LhQnJ2UN4rFh7VE4wVTpBYTVPfbJ8W2Gjw6GFsKbsC5V3aoFyEYqtHsC",
  "key17": "5KnmMQ9gRiPmrRG5t7BHWGPYSwgyiFEMadZ8xbP4SLdjn496dRF8rQGUYrtCgAkYXNySDhj9S18CxySTuWHkS8Pa",
  "key18": "utFRHgrrnyMiV4KbUeFoJ7nsfT5mAS8MPtn8nnLQL7tqey8pbx3c1dA2NABcqds22RmCp8WAv7zdHWzLgh4iwWc",
  "key19": "2pk3y1JKNnPA5bfVELqnRqiKHvb9FSLP5fLkFE9mA3aA1U8qnnsjUFKDrmMydYfAnENnfhnTjWZi18h7vkGmehkN",
  "key20": "4eY7umw1m9EZur11uoEwY2V6RLH7vWfdYr77BpGRwrgScQcR9YK33U9aih6mVDzEyCY7AkeuivmYFX3QRiBeeDwr",
  "key21": "2kC2sNY4ZfFszbot8aZXvTDx3mLwba42awvBDC3Z8ypw4nqk8BLLqbBNtjAiSFrv8j6yHQ7zTCbKatCt65o4bTea",
  "key22": "hXEacrXPoCCLuCXuKCfdgjTiMDTGU91UjzCwbivf85RxRWc1YnpJH9nofjbeqGBbjg87wYeuv9Grp1CcPRausFB",
  "key23": "27rrEJhXHvWZ15TcRHdPxJrmjSbVf1352YPfdcGgdQjwdWUiTpehnXzzHVQf7w2LgYBTnXHhpfyN4tzsWVd5SZQZ",
  "key24": "4ieGsutbJ9A2HiF1gmwgmrcDdKNxLsrvRGVu7LaE9kR6AFcdwhJd9yS7nvh9TybtbTQmVRYkyo6qRM5S3h9m8Mr2",
  "key25": "32cmpuKtit6SYdbBXPoDgUf9ziUEAiKHqdCswcDyVk2pq8wwPHdaUNzSZtxWCpP1fAmWEc8RhxbsYJutCDZjCSAC",
  "key26": "1ux8gcpZLgPWKzcqD8m32tbZaYk17MZtvwEXxx54E1CruhELj2i5VxCiMXxhU7CMRvsb89YY4hyxJscZV1UnHXo",
  "key27": "2wHUw52k8VJmMcU83W6dLnR65AEdhYF8E6mEP8twMh9AF7KHq4xMBwQnP52hYeXqh99hPWe6Ra9VSUaPiEBZdHUx",
  "key28": "2QtBmMpV2emphXppTvdgEzpHUZQBgQpzCs6A6t6m3HXpmgXGHrgf88ekC8GfoYyUg4HtXd72pL9xgdrff5eMxXts",
  "key29": "4Fk2AnHn5m5pqGcbGsBWbTrZy3Nk5SmYXJviGCTAFndDZLFydYetphEDXsvryUT6ZVRK1M9hnEKmBQfprawPUNjG",
  "key30": "2pqhLho4so434mtCL3krq4KWEpBjVkCtnnDvE2C6Sn1nbya9ViDnauhq8XGg3SYrpt9YjdhCUbxfVdhpY17bTSvE",
  "key31": "3YE58p9WneC3X7dod1D86Gcp5Gegx31rRbBmDubmLMLZd5nENpmUHUyyACKQy9XTRUkWGy65WiL13a28u8K4rMqe",
  "key32": "242mn7ujjnBJnssooBrdi1NQK9T2nfnefSkxrJU6hWfYks5sjRS8CpvA5XeJfWKDwMjXxcbBnECmcQF6kCMKkUJh",
  "key33": "3TApgCmn9MNKyj7SqCzZWHYthEc1PprN4BHNigBZvt2cbiSnwo5iH52WojZTGJM3FzUfsq9ZAcPwNyp3Tk3PF3j7",
  "key34": "4DC6tgQ2Dibmqv3bse3eRWbCp2Ku6yWHc3o4ptir3qvoDjSr5Vo5cUPepkMeNJhGRvVrAN59Mjh3KQmUuD6JLi1g",
  "key35": "2CmSSa3R38mpnrssKwxGVLdYwj9VrtMWNHgGMqbtqgwZmpAcUgff52bG4Sdn3qApsU5fP1Ln8d5dryzEo9aqwo5S",
  "key36": "4zYxswtbLKFk94zYxrwGiZ9uXujSeivYeGUNLV7pgm4uMPccdoro6g5AWmd1rrnFUJ2PkcYizZ4kvWmc26NP3eoH",
  "key37": "3v5wBLeNFfRbxbmcz4DiZrJmsEWgnp54JjfVzEnxWmSXb3XWejVwmhbu6kXSJNwzsnhFC1N5DBKhhTY35MYzSHQf",
  "key38": "3WP44vSFAQcJZ4RAz1Dj2qSFUs5PWVtF1Uhd3h6vErQNW279ZjvgAijPATNVvot94FheDbEXTzn74KcWfd3x5hNV",
  "key39": "3Dnv2SNAfNQhizZw7nEQp6wepqyfDiKPMcvyvGLbBopkTsPn7fucaVAe4NX9ggJWvZphvDm8f8KRmDnjZzwBCVgR",
  "key40": "8d8HfqYHonSMGoWodXnFKtTYEwWwYU4rfVXiuFFouEhQXwabk73rFJJ3r8AhiZT1uq4zJTueXFJiGTA6xjgn4UM",
  "key41": "5eQp4b7LjxdX95Crbwbgub6QNB9B155orQwuzcWC3bGuGChW3j7yZ6j6nNbgFVf8sof5bku9zz2poRPktAg9DCNn",
  "key42": "3yDhJmi7yVjKa7j36Yr4kw23Jx2TNTMGGsZtkzrZMpwS47pWUNMbdafL6CmGniTXStvY91UYJrT7bjLVoJriLJKE",
  "key43": "FY1DgTjEccymzmSUATZzbt4VtkDTTSve2zPjzncjGxcbexj3pUnkPaXEfouEd6GfYjkfwdRUi8XnZ4TCMCSB2GN",
  "key44": "2VFZHva6yBKVUwDUJn8gVdD9Hg4XYKSNS6KSebtWMPLmm5srQ5sozQMZPMuHuLARcQa1Gc43wfVLrRukcGknxdiW",
  "key45": "378yRSrhq3Xg3n2TAhEzRTzNxWqJXEQ1G6PyKnYyWfwLsAajLgDikzcCF2xkhXxVaoHbQrqvSRCqRb8qfU9xbcVk",
  "key46": "4Xd2AVCCMQrb8x1612aMMdtM5mNqNNqNxGM6Ku1vqLytdCGtF9GRHPRj73pfBbcY91XFsaGXMWkpgyisCgy3A5ho",
  "key47": "2bpED59M8mFBdF22PhKCtuZyc4dLqfarDtd6fSD4Jrx7ULHDT6o6pL9Dj1Na66K1WVxYpAAoEcWMAdH3Nvycthu4",
  "key48": "2Xhj3kqB7wR3cgfQr9LLWeXZdp1oPzvDrGL6p7DQ5i7Z4FPUcgZ1HQavR9U7KBcjz7j9EJnLYNNkTaMkUWuP3wLe",
  "key49": "4K3yV3rqKy1iH7LkksxMzRzTA6MnkZGYjdFknisTgPeBSEYCADPE1RZwe1qdSuzjtCCfQkPZgUC4yQdujLiiaAoo"
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
