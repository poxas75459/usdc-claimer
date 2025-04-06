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
    "5hNA71NWaS3KNC6m4oGwhUrimRYVssxhT5bw4aVi11zGJMvHoAYZCechGSGEnr1eKw28DM18F8ZVBh9sgSvuRB1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mfbDLV6awJMwj7BSSPkbEz9xdpYaJu79V7mu4nfpTDGBYA2adnfdSDPLHiPvGDQXYwK186rSZrusquGiLfzLik",
  "key1": "2DhmKAqRrUGjtGbikz5BiHTUzXiVwYTFKZ6iJ7fSaZZvyfvdK6xYKkBBhDgjtqSrsm4UqeReagLGukveHnnkzMFw",
  "key2": "5b1ftLfCYxdaRy8PQd8L1n5o8mUJSDwVHjD9zYgmV2ZPFYus5fJQkcSzY4W9uAyq4kxzbJytnjxVggTTPC83wyqq",
  "key3": "reHtgTMvy8VbUZa1DBpfFxKnqiecE3sDGAvRkERfs9qA6e8Sv9EjRKr7KfSWaRXfKUDUmFg9uu4FdaD64DvhsrT",
  "key4": "2fwmdGaZHUbPWXtaudVRRSJajRzPMhdBucskzTvfSgrg5VtKRb2BvKYopjq4n3hruUPCaZrnSwQif6TZyDfSnbCr",
  "key5": "2jLc2Dgjxx42Raiz1rDtXfEaCVATjo1SK2mwgk5GSWWwvyZE46yTqvqALiQtU5BMzB8JNq7ghtdAzab8cvSHUYUr",
  "key6": "2qBufUT2tNM5fb48ZTXowWNkvNdobjcD2f8fZAVsdk3ELeeyoGbTaZeV9YQ95pj9WAPKHAoexSGBUqJqDJ4niRZ2",
  "key7": "3x1YMjdoyYVHagrtGGszfdKH7sVtwEYeWew2J9KmdEZnv6uKSapnTiUZ2rmtpxZaSZD24Ee76Y8ME5Sya7kQt32p",
  "key8": "2YbkVC1WMPc41zP3ZqBfomfVHMQ4tbxze2kDd57YjZukiRLfWgBTbKwuVr2tMziejVuc6V6tzGD6uLYSYYSHUg5t",
  "key9": "h37jMqWas3tzM5Hy5cmKiSVFt4tbSM9JhKN9FgXHwYirbrL96GPbqkXmn9C3bw8bUqTBwHV11tLnT5DKWAUU9DR",
  "key10": "4ACbirmcfGjnCPhsp3LdtU3sfpRBAVjXMCSP2Po7ebXCjB2fXTxLt5fLvrTEDodWUVY7RdGN28md15p3FrdQNJuw",
  "key11": "34952w5Ppr1T3kq2KWemeEbtY8zMCaeVQedvTsXNqoXQ5ZFoqoxUWXUiKK6ZyWHAA7XgXzFtYDtVPLK9Tw9BMVDi",
  "key12": "2wy8SMDFgjFrGrjPiDZ7Vy2MfwqjXxoWJg8sQpPZm3cY1Bhejb7pPigCCQyF6UaoEjv2n7qsWnnyoEmsuQLeCJLB",
  "key13": "2ow2usyY8qqnmMdGEeLzB2dwU98GVGBmNYG5zDJwNzPxtZ4vMMGHSwerweCLwkaqYmBqWerjkcM2qsWx8BTuzEkW",
  "key14": "5Ja1AsZyiP9h9VBLkGWe6EdPWFSYq9QmnJWw1BA8NgC3yhjs3BPFowJ1B3TeosjePYMtSbnyTuBwJ9HyPARYLpig",
  "key15": "RRXcYdnwKH8eSbgUm3UCxf3S7VKRiHAFHicRCgDdrrTGvvj4usPrhN2J5CB459HWxj8WRRbhHSJCNfTnxYD2YVB",
  "key16": "4iNcH9wsaqjtDuNsbtpN2Qvcq4LcohyE1KzhgtQpqRABdky5GZV87nLztyXxAjX6PgksTV2iNeU2PCS5uYKFnDZQ",
  "key17": "2qmGbBRvysexJZ6mGQLpbyUX8U3B3WbcdbwPdevQYJ9tor9XoB3rXwnAmWzBeHE7411dzEMPx4mpv4bf3iTKe3Vw",
  "key18": "yHnpxPBgg532Kp8zGUEmn9SmbjqexV5UmDiYRtnetH9xp8pvMzA1kxcv2LVhs8vNpDZqZEEWmij1VwUPXNb4vbc",
  "key19": "CEYEWZ3YATxJhYrtmNSCb75ZiWHspyJfHjFSwexVQS8Mb29JautaPX6cSwQknyjYmuk5HwjeZLMrBCQKCYGRNqt",
  "key20": "4a84JaMtkB13dw7C1kGPyQMSisFM81KximChtGibWVbhZsjmYiRHf1LZCTjG9Za6RRMuKgRZimdWHWb2MbrXngAq",
  "key21": "2f7s7oRAjQf4piSF1eAHsMYHgFXmWMimQhWiBVpvPdj6pqofTeng1QLwXpzK3jN6j7A47Ux2Urz77a1jhNjgdY6d",
  "key22": "4qcTwBLMef48H2ifCyckLL1mv4fjzHxHEyhaNrbfiQChxatgBKFbPioHXJ2CXo9r4jEn7TiC6F78awKZfvBHEE8k",
  "key23": "5yRna1qtmDoX4rF9WewRASVf9R8LjBP2jgprv7xmxpvNVsZ8MdVKrdeMj2cHshx561et5EFybtVajmj4TJx4qEL1",
  "key24": "3QziwSzPapfLqXkb4EFeMoN8uVokdxj54qya1qJqETpdHtQzEFEzdyzMJKozx5Wiqf91cdJtd5rDMiKS7to5Hzfu",
  "key25": "anVikhQZNMyVLERExUiJ9Pog32PAAL8xobwqAMFnbxeuyys3qqsv6bpM973sCH66SSj8nPJd9oJknMSScZHVY6v",
  "key26": "2PDnhW9QRT4TAqdqTTz52FSY16zn5s2vBcZ7uyuxeC4JWVa2WmwdDy25AecZLH1kBsR5GvtgAxDZwci5fFeNH5vq",
  "key27": "45iFxxsmqU6Qj17WZ2N5VE4p81gSaUr7tjJ2sbDankyXZmrqvf7q7dPiJA4T6t6KRrCF6hZ1hA9pjGNSVPFVKaGi",
  "key28": "3KLxkjmLDKGewH4rmMmDTK2B5yiXLRFcyqzmWvzxrofJdMxRmXnhMuoRWfKhSiDAiWrfaxrXBPMh6AwoKArWrj3k",
  "key29": "2qKTCTg7w41Tq2C4RmoXKVYMfcJWQodnF2G3jTkuUetq2X8BhnrerGzb7zCr9WKTiKgodeTHAuYfsVwNSgmi6haw",
  "key30": "3zueJKys2zWidwmwYMtQUyMGBForS1xHtz3EZf4y4F5VbhotJ1GG9Kp2bxnwmnHha5oo6kYVZJNXYfk5X91mAH1J",
  "key31": "5xmqAuAvYfc6f3QPQNoozSbpxBhqYKy4PFLvvSRHLYqW9QCrBWx6cbutLkrGnCw2Uena7Ax1BakoCdvU9j85BZv6",
  "key32": "5ZQCPGqbRe9YstTYDRPdH3qYwaA2KVq1pF2zAPMbxyXkFUaegKCa2mn3H8pxk7iuRvVDHgoHnBfd7dUN9sVTcA2s"
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
