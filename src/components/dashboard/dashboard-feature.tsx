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
    "2tSePTKH2FCpsBMEjv6pw7GfXudSHo7iJzSssvg1hqB5Lz9HWrYUm8y7HnWUFoxdzzGMLkBdzZhX8k57V54Nzchr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsLMpd27K35gHxZWcEoAWrHXCtHD3c1Mvme3hCa2aey7Uvkc579jJUZs2YYTqC9vKFGWGL9ZKiGgaJch3yKUAxx",
  "key1": "3ZwEqp58gFfvNLftdYqfC83ztCWoKEcCstJQ85EuXM7b233gvpVLbbZ8BhLtwDGWBKwJ31DywBEvgMQrwh4dSuQu",
  "key2": "3HrQ6tAbAQT64esy9kuD2tg56rQFmYoYHQiNphs8AwvwdstrvjzuknZtjh5h7T8ddcMKpKFPukT1TWavYLGKm7SD",
  "key3": "34bdeJLzeJHQkGNiUgtfwBN1F25ZNn9ahUUqzdxpAXonrg1bGEmTFGhguZpuGYFhiDHWbGJzmWamcm8Qd6j8ioBA",
  "key4": "4jeGQk1mAFKR5dQkhorQRBnvnt6VrADoYLGefcaDzoAEHPePsLBZ3XcLJE2A5VCwpHG1ArXJv8zBfFKuMnASQig9",
  "key5": "2FPLxrzMVBF2MC8EnUL9SxfAej9Bo6KMH6gjezodSLoNaDC7fyWzfMZy272YQmSKRLVH3g8trKqHheyF73yrEoEi",
  "key6": "45k8akpD5gqXELqHnT1w6AAcZAfQ8HsPw2qTpGmNJaCj6j6BQV1cCSCWsvuoEvR6xYXWJLVAeJAjDVMVtqcTGFvL",
  "key7": "3DwZM95yEEqzvyozsB2GRbyK9BpWbpkGUa4wVjGDXreuZzgvgns3qH77ikGnGGiWcdSdQP7cLm1mqPu7LvDcpnc4",
  "key8": "5qmwn1Ho17xbyWqC8aSp2MdHX49ButM5v2vPV2cw9tdouNZAAvdxPhv7Jq9whWaYokNqQ4xSTcUDT5ZxZeTmyMNC",
  "key9": "4MV8pV37urqoYGC1vWJWt6U77tCaEheAZYPuraFBz3L4ZJv4JxNjHscEEo9hGtwqWHsrxjMkqedyHJdni8L4gNUX",
  "key10": "xUqC6iJ35Hji89pHR3WzR87fBjGxvDrHFJymHUWkWg5yvPqfPhRkBCf9pWiihqNFMWcoB7m4xtahzHiUbcxSr4B",
  "key11": "5y8M9sv4NhPBgYsk68iVAJGoA5ynhEgHy5qh8hXjVj5biH2YtxCipCqVGohq3fNhphRehKyJpims3d47surXC3jJ",
  "key12": "37JZpsELS967t9oA22qT7hHFdJm9aCJmoJmtxC14Xyo8CdSvKYHHY7w3dBD5KiQ3ekrPfGoZymRLdBur1QQj73r1",
  "key13": "3EBmu9B64bhMkS28KDqQsRGUXhgTVGMPaeN5ADS9Ky22aRAJXiQctpWTVW6eFVvo47hPpEpJWUs2uhBKsApqGgDs",
  "key14": "3DTojrsV7V6s9sQXTfFhGqLNZTR3BFewsvkbMBk93y5UBnvSEoRhoDxW9Cy1nJJ1fHMHAxBR15twGy22pHwtUj4e",
  "key15": "54UbFoZ1Ee1bwpLVwoNWdZZFVktBjaVdmYTpkncp1BHp99TTCv7UMFrausJZkciNaaEr8jz1XEkHDyGuavMFKH6u",
  "key16": "2cHSH8fw9gbMahsWkizn5HqE4FBCr6zJ8RZUzN81xzxCQdjuLagbUajyRVwpvrwEbX8ys4SbVSjZaQV3dUzHhzzQ",
  "key17": "3XAwUVgMAhWzyet3xGeGowrjiRUsQKTjwRwpcPkeR9R5XkFP2Mj36PQeKdojoBb2KcmFpy1RSoPT9RiTu2PZZtai",
  "key18": "WQ7yidjn2QqufDyNX5dXCvVvgEXKAKfVduzqYySK7PY4a9A7WgmDGjXQUwAMSbSr89FwPn6a1oY552rBtMD5PZj",
  "key19": "2EZcFdezYNoS7yMiL5MydFyvFM2WG2AmeYDZAdFoC6gagRTnDcJEwfcx1aj7VfDUteQ397ruGsRJdDWZ5xwaucyJ",
  "key20": "4BJHbXLZEsH8xreV35S1Ax1e879Q79W8KSBs3h38iG7rqt6PWT4zqb4Srw7TXDqWfV1w7aQqhphNvdH9gjRKfND1",
  "key21": "4azmRGhGDjgr2ZbshRQ6Uyf4s6GWAnAr9wb1uNvccQq9uaEbAgFaPxFEPkMmEL5Hj19NFAWuvdzwWWqptF4DfPWJ",
  "key22": "LXtABtHU9dSPYyQwRo2dJ4zYZ6ipXRh99CzhHRMVZzA9VXxhVBaWzsL9qe26C1K7q1KNedj8iVorKbGSWzmGZqZ",
  "key23": "QrTwvhfbCkfriFeWDqoi5ZMmyyhmn5kHV5ruyJo4VTSz8JoEQJZdPtpxYiyLMS4NHgUK1HziZ6Wx1PSfSz1rJxr",
  "key24": "2yqKJjmR4XEXyXWzdmCmPeHNFLh3QErXYV1jBMPsGc1LL6A77aVZ7iqS8FwpokaDLUvstBDK5P4jNhBf46pLYVsb",
  "key25": "4dFeBJbA4WbAyx8CwkoMFTK3fYowZjViBu36aWRSbehvZEWEV9MnxJs4n7tDUVxgZeNP1GkJLisAfLoUxpXaE8mH",
  "key26": "21CQJK18oPbzuRQbUp7ADZREtoMBrBbhePt8spvKSoEZPkmn3suMsXc9MP49CZpzcMXN29x7HMAiM76oomPFUyp2",
  "key27": "3WqKCY2m81E17Vs2BM4EMAvj7fbZhEZMwHtsN5xF5ZsUWbyC7Xnc4Ud2nEkruQSJzzUYU5D6Gq3hEyACJkHUdn2e",
  "key28": "ZuDnQBvRahUHVhERnULrtL15Ft6mUeCw7wxXr4HVwAV9vWKRy8xNoqiu9iG3Ee7azxzJV9mRLNXhwxveUkSguKw",
  "key29": "52D93RBzVHMGcfCftMMeVxr5B25kgdBgeJbm1FZiRQ7XxgXyKFjYS89jsRxopB93BjbEkwFg1BWVjeHDBYg9eCy4",
  "key30": "31tpNTLbk9jG1fKLWk3Sdy64ncGS2GZwazqFhXorQNomiSftxss6zDVDKtcpgS21vnKWhB59YjyaeCNfo5rkrkpP",
  "key31": "2Kd1Mtk7xobz7nMtCcopmfSLcMHkXTJZfaGK4Sc77oihKzdHi5VQtde5rUoYQhrsuUSpDavCR9bHuFhXahnsCocH"
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
