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
    "YYXbt6Xf1DPg4Ax68AryDSuCqNsvk5YpBxP1WfRVnckYPQ8p72vfSuQaoW1sB7zvqzYihmgs2e4cuoJpnTcGnYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZjERkBCPq666vEwkN5t1hj4miyxPimasW5af6fibKq1vJe8kpHe4XB2kdcZStXzm4Pj6X7t647XFEzJzaG6NiFg",
  "key1": "3D72Nj1eCxeTiPMstXGBLsZT5YLuUL2ym43CehV9P5c3eTkfA2miVKBTTAtW5LkQgTN9PLa1Zc7nyEh3w8KKYPcF",
  "key2": "2yLKJHAH44xDwXV3r6TdnHreDGjAxbzdYEPo7dpHL8FWqWSzjFbfLQkz6Kip35tHcdBT3XLrGg64m3cXpahZMtRb",
  "key3": "2yEzFKZGGFs5ekEkVt1uDr2i4Q5GXe4ybT8tKaULkFvW4ThmKewzGWEUxPWru4WtqBwPDvCgNhdejGnpU6BCmzcS",
  "key4": "3rM9ZwhMHdJNzWDpvMmWsWRbECFyAsa1B6w8qzxbzWZ4tV8Laxa4U1NhyQbXUWVJ7PyTtPqSZEyCf9srN1mEDKfV",
  "key5": "5SaSMtrZz8krQk51maGZZC9qq7VMYF62gYXGMxhTG2JR1Bs2osyKYnBPnk76ks3GtkCcaBpph8UAsJNDU9WkGGNA",
  "key6": "5KWhtkiNi959f2bi1dnrLWcskeuU569JzQE5upXajKbSEragzsKXmewmATYr8o4rT92rZissUpdR79oxqAznv24",
  "key7": "4hyfhXLj1TABdmdjUCJwSR14kS6QJsfZeYaFpJUKvzwc2UghAk8XmnqfUaTqc3PDekmdh8zkjnXYzBaMvCbxQFDu",
  "key8": "2oTsnfASBwtKeCmAV4H5P1fsBc3V1g4J1rXWW2BvvXbXxwTggNYFwY1DDdrnG9otMAA9tRUp1dmpMW7auDt9BA8j",
  "key9": "5YyF4A13RDy1CWopRn74rw5Gr9fvQKFZBN8B568mp4QDZBbiGA6otZhSS4mP7NSPAb2HPrsPUJtCZUrzjfyGzUXG",
  "key10": "65NPbRrCP2Na45pDerspTP5ZXnLimbCdnpdLbu1qFLV7CqYPq4auvkdaKJuFrFRMXcuhJhwrGe2JS5tVarnbdbYZ",
  "key11": "661Z9Nv1K4wteaoj6Fj8dXnFBAKwVeWWRuvqBKCpymH7jtSooL7PQCRUT4fimv7TZkswCmB5MrDKehK3JnGuffSR",
  "key12": "2qgtoykyNRUinhTE6q3UgXvLdvt9xki1FGCsnL9bCPgNNvzNukWdi5d3Uk2ssFSyrkyUqizWFpjDAxUD8PRRpyS7",
  "key13": "AZLhHHRULxmf8hHwHcG5bxwCJAh8e3Y9CbGYHdMM4edeUhWWjURKQQ2UREwryJZSHjPLH4ba3r8FyNUNi1HHMUL",
  "key14": "Ph4zUQPku4qFrBsBPE9XYqEyMM8oDkQuA1zXt9gwJjJydkYdsVmbzF7Ac4uQrbiicJqbgh95EMaGWP3vYrg1tvh",
  "key15": "3zhKCrpm4uf4XDNpKaqmDZXFno12Ce5ZujLGvXf2mWEJf8Es3V5x1hegSwLSYQ8ny4TMMJgCJDRJZvAY2X9W26uJ",
  "key16": "5VHjskZhLiCKyrk2swNndJQgG9vP8SPS1i7syTtfYMobnKv94hGnCBR35isZZBgqnxCLiF8NVFsQejYvKXoeddwp",
  "key17": "4huCyBgCx9qprfHfoK1afmma3WPbdHwksRUeU1cdcbmcSTNiHmkoxXk5y9zhEwvfjUov4r6GdDNQMhsDtDdn3ajz",
  "key18": "4BfEJxStj2HJCK3d7byxPijAG9RJL8QBajTi8wphxvbSwgAmVnrcBPa81L6aURAnb23P4VLNqjRCw5Mf6kfdcDTM",
  "key19": "2EkRaj4bXmo2dE1jfQZGcgHazrwT3mWXve47dFD6Sw1HencsvnZERvRWLgV5bWaxrjCaYuxyMDjLcWznxA5tkup2",
  "key20": "4Y1qzMBETxZFv7HTAr5FvQnFyFNBseKv1ooNgx628BRzCK8B6M73E5JcoJ1vbZeQ1SjuSbhghcyPHCU1ujfNXj5u",
  "key21": "3PWGK6a6WP5ZASqJnkyhGR7ApX4dJNoWteWS1ybfZKTb5CGEE2YHcjR1bKgmY6xxsPDgi1jfJTDoZ96Stbbq8JvQ",
  "key22": "26YK5sAisqTLUVBsK1ngtQ9fovhhU6sV8bpXjUuzmEa33woshv6MzYqmQwepP2HdGhGdAK4gZL2uu1v1Y1ZdkAFL",
  "key23": "4zJNCENwURUnFVXzFbEfNABimVeXNLkPUYmKtw7yN6fWM6B2cZdw7NMjSbD4bFxTWC9UrgjBneNxP8TtYcyZVGh8",
  "key24": "4oGYh39zHpbEgLHya7Zyyz4s9DT26CwMURhJ5647kUzpDZBYmSeV5ySJVKjX538LZuKU7sH8CbBy5tKYRr5ebB3X",
  "key25": "3jQpgwSuS6oUAAmvv5BbsrXtpnZfzUoLmLAsK2xrxj5amNV3s1zM9xLW1ZBQ6HE9ozSNPukrcGnj9G1bj32mk5Ra",
  "key26": "ViZWvtLMGWWqhCJAfeBd7X1QgFPukTuHuuZuhmwTGrUTCGDaZhbWhcWMrzGgCx5SPkArJptXqGkucoktiaF1aZn",
  "key27": "5ZgQju91pcsc3fKbWTGPF5PUPX7fFeqDppez37Hca4UwaP3mEgssWQR7aucBVktShmacDnfpkGaDEAAWa8STw4LR",
  "key28": "3CYuGorDpHXtDTMTwHaUQstsV1JSxgQMX1x6b1YQLk6ojz6G3F4UZ6yCQBtJxPXNsc6fZrawc983B9nAkposBfMd",
  "key29": "4Vj9EUgY7bqpvpupxqJfkLhVcK8tgW72Poxjw84q93aygDQVCuad2WDy9eu6JLYNy5F8p4NQTYoUxvbB1uDJR1c8",
  "key30": "4xpoD9tASVH3YzpgSfHaGQ5DvL3foWG9mcJ42VASkEWMckyrBvNnK6cdf5HHFgGvKVTCi2dSCRn98mUENJoBS4Sh",
  "key31": "4raaUrCTDdQE2XnR3hXJt1erGn6nmw2FtsSzEcSEqvoG8N4HerXxj27X8zvNtQ41W4xTjVK4FbyBGaeUVTJX9kas",
  "key32": "UgRTsvhEQ3arsKP8Uy4PdBzh5PctGLxCYnwURNShEkmSuju1Nn84MkPtBDKss1eS7c26QynfhTgNSVoKRiHSuoS",
  "key33": "28rhz2vozs2phCjeMmCHSGBDWmJGv5kXDRzdn7SFeNik8LSid6bc35iqFN9FkD9T4CXJd7LiFXfvVAxA9K3mBSJw",
  "key34": "zTph8pkXipijcetU746MPqgdcdaBwDLXmKouZf9mEaTxHXjSCeLfwbYjXETWADmNeEehMaM3ak3FWtwN4FYniUN",
  "key35": "7Bbg8LXvuoRNBSMk72Qiymos2jNZNTNmCPjLkAkydgqZjAJzb2pzsBsc2gWrHb1C5whwuM7QfhP76z4M2v6NMqY",
  "key36": "86nVGBAMQSxHjxPT1eKrNwq5fdXSqpAwR4X9VnD61NKNSvoCP7AWTSFa6vbzEzumQNoFWnfH3eMaQ7JGDsMwj9v",
  "key37": "5vyMvKHdgwxN1Te3rxP8RiazJgKk2Rxv8cxC3hc5Bv8Qqo2VchQ6dBAyC8EMp8rpduhUaDc45JYMFdCq5rpr2utH",
  "key38": "2ZpVyUBnmYQvWtCgNBL3RUWSQRQ4FmGRNdobynGNRXJ68FDzHwKVs5LYEWeAEXSNxDM9VvseE52xKVEdM9dfzZnN",
  "key39": "41BoPZT6ghHbtCcX83gESrnqMFJUwaJj4LhyMed54cuiQxm59KxSp2ZLyGQf3TWNVsGVBaCWkUnPcaB4cgSeDqyD",
  "key40": "4WypbEe5zLmJQKdzQ4vUc7AfgHZ3k7rpq5TPD1DxBzxzWi6kgkQHhNUVqukKeStxNYxe4osHGXynSKKPLtjHCVEw"
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
