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
    "3PJhP1r3UvUsP37v2dMxdhQFcaq5ptHCX5BmLnCjocLqDUqqNHp6ty7gRkdc272NaF6zw5hjwVztdZ1nA5KLSBea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GhzKqSonptNBEyREQZtVvpJdiSWb2aLdwJXA2KmMUC1WhS8JbDdqspcjnYwHK9P2v77GpJEgF9LGBTkSzNrhMv",
  "key1": "4ie99Tx4RNT8U4PqyMG1ZRfHDc583MToBj1sHe85g9JrbaJEsUiJbaCYDTkzdbT3tvtDdWzKy9tkaP8ZXWVSTiPp",
  "key2": "49z9kTa6uQ4yrmqxkpAfr8uLKhkUkQciavFwTH29AgHucUisDU5DGvdSiz5SB85c4nrwxDgFymWMRTkHHy1rFCC2",
  "key3": "2vNJoauQE78e4H6XJosXoaSKWx14n6RV2yGoXvQSySWd5HpHoRApu6ZCcWktvsvkBrshihEExP9n7dNoJUsY7WFs",
  "key4": "rZS2CcHCUQ6jGjn5gfaf2jTSD8cBYcNRMjqeRQ7jZ6ipWT6StvEEaCkWSd4vbn7T9nmHnQom4aQrsPagNWHufQz",
  "key5": "2WJKZQhN2XDUDTNd44WrGFAi5tqUV852CLLqyUafVnDJdorgydJkW7JXaFr5b9hTjv5PyPtK71yEUu43vsvx4UvT",
  "key6": "5d2J8cMsRwhCvj7wFcWrsKhA5WMtHsG9YKEYcBWFt1wHp5HDpfzYu5TUarENi91WVRDJJ78RxSvW92p4qaozcXLb",
  "key7": "2ZCZfJBphvydja6eWGGPzohzcE4s7oiy86PFUPB7AFFsteZEGRcvadLhgWD2rgsR6ryisfz7Krw3VKP5RnAxFSyr",
  "key8": "36H3i1Zj7mZdwMWUReQkXkZzTmkphmoC2hPeSjnFjggSY5emRoSNQcYgiLKdZPbxPoBy5HsrNAeT2fYX3TypGdyv",
  "key9": "can6xrehMSPZakioYqmNuQCSZUaJUjHXzzMRDYsa4XNybLLb99ZUWVRjTrR12ibPGpd5vJvR8Mr3mNf8beyAB3z",
  "key10": "4NRKTrLmFZdD9bFAZmJqruP1dFSmmdcijzTRNjyHBuU9qeX9nQfqdYc1sizA1DTFPxrqJZSaT7XijiGu3ar5xSTX",
  "key11": "52YZ2GWP4C9kw7X3kPV7cWV8cCTNqU3drn8Qd6oShgQMX4co2pSdW1X43WJKG8a8GmD9iYSxEzEQPKLgpbYgHsig",
  "key12": "3j5opWYH1h8zsyXQev9ndciUhGw9sfgai3SKgLHUh36vJPnJXcEY8MYiMJABxtnwh7SJGinZqMuXPLC3xJxFqkEL",
  "key13": "VctwcYScHY7iYiQDBqKNkN4UngyeBiaYZ7RThFntofWaGxVrmbQ6GAa58bPL2Yt7roPawwoU5Ppf4oE2nbVBSaY",
  "key14": "5Juo7yy5DXiYFzeenKZqxPud7ZoNbi8YKiUMActhZqHN5yc56xAEL8REjz5XTfYqzTUxYUYo9C5qwPVFkchtAGi1",
  "key15": "3D2YpMGdgyfPwc2M8qbRHaQsvdhQWZRDo3SGhX2QTxY5yEJ5UN124kSWZTNLLSb653DKP8a3HC8Px4V4icn1NKZ8",
  "key16": "3tDqCYCKHCmt4GCSoTSFbVRSPRB8vLBPWsANbNmXMVTmmVpmWdiiSfoYMHUZ88GKtYeystNefMe2qa7rkBPZXLzQ",
  "key17": "3nG2kSnzt6og3Fap2YAnC4ULD7KYAnKGnf48LgWewpTrrrazSpBregCNbR7cBm1o1Mh343MDtojxtwCFSrdgVRgw",
  "key18": "2w7jEH55seFG4BZXxWZNtnfqKHbQXAwq32HWQ36gypp55VBmU9L6vj2haLXFCF9NRoVKWg1JZgmFVsuR4g1VtXUG",
  "key19": "67FzYfJ6XCAyodTm89kLbqmFnr5PwVHn5djatShYmYG3GiviigTng8FPZM5zDpMQVNEsJbbLQZnnQsE7nDsCoP5y",
  "key20": "3dpo5ML5PTKe5kh9b8FYDvS9MKAmGEJev5pozSfyoA9jeqpbfykBEmTn9wGWJ1QRyhwiDKwQbb8TBGzxEKQN6gB2",
  "key21": "2eHMxGwkacFRrjLAyQjUCVEiwSjvr7bxAdYtoHUBxXsAnsMUDCsZKWkAjn8KSo6JZCUDhNdQbUfPuRWtAp4BwnZU",
  "key22": "31NiU41zDonA492ovUXKfezPUDdpj4WSTiHTr1ZoZVNY6iPpSpvmqEsbz6njfigpJWhsBzChDPLwPMDLowt2UsNG",
  "key23": "2HnfsdpCk23ybPEXBCtU6UgpM4efexZqG1gBuKQkefe3Rar4fjqtiXmjPTVdJatYTzxQk1Z2ydmpSjVBv6gu2VQW",
  "key24": "5vpGW98hNHWF9WhNvzmbWUvkZxAGGJb4kuhMXPA1iUTWBm2rDtbrR1u8nH83SHhVF8ZvmVtCAvBNmBcf4PyrxSK",
  "key25": "3ZYYBAPJZ2cW6aTpof2n3FLgzzPM3mZ3A8SBcpWPrdDN65y3L3MVru1j8SkwwckKd2W5juaDZBhY1sk5bBRf73gg",
  "key26": "3cJ1FCMThTEL39UJa9TNDnyqxLZtau2vpzc9ULkcLMRv8oZcW4JvuHPUZ9QeNx76XtLibXrvMXYmXxsddAk4nJPk",
  "key27": "3pfoCqC8tRDGrQ5LmKDZRwcUFJRGv1BwZMuy6heqXUqrnch8vRYqRLSS9NT2Gdge8HNz6jPy8UF7Q3KhpMq9YMVb",
  "key28": "28yctsK4MgKuLEAjLPem85c18iTvwaLh1eFFpTnyAyraRcNcHevCM8cuwipBnkNi88rQUAZYJc48XaAXUn9ZjamU",
  "key29": "3idLDvDYtnCdQdku72YGssecgMWAwrQBhdJ9NJt1uY4jvqMt8rS15kBxuBfKWiejEQGP6DKcSd7fdPZPvqsy1fdP",
  "key30": "VY5rqDdWZUBnNQRbuhSAfheDmEXafyMU2U2EsjQgdyLgEwNknAD5nDHqLTxiber44iodVx3emWCHczuWe8Htr8D",
  "key31": "2mfAnh1osykXN6teriTJSjh8Y4qfjZDUgTtDxZtmvpf8ZicbsN3siYdHkPZAaWms97DpbPpyEj1e6DMSjmYYmrTr",
  "key32": "5zEciTyF1pGGpuMDSkSf14pTnWAo1Sy5S6gTbisGAEcBYTGCFTgKjdCskeYdbe9zFJVXemanzSiXSyyctPANDDkA",
  "key33": "5v2CzGTcoGaAPp5iEVbY6cdGWuxGU5oaG5TL92CECQGoGu47bBQbJmS4E4eVgYF4KbUTCpYFQhWouBhs6E6Z4itJ",
  "key34": "2jjwC1ULhQWWF1GSiECyJurGcFTDEfTW8rgD9XzApqiM1tvYcQrSsdqiqm6tNz4q1ndNxqZF8RGzGZzqxNdhSkeh"
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
