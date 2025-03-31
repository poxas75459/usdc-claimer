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
    "3fE1gfsW95Ax1vUeXRYED5UyPG2JkyfrCMijJmExx7ow6Vw3aPDt8v3N3ukVvx1dUQGpWhbeFZVQxx8EzJRXwFVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfzjDknBGqoVCPpy4cRcYwpucaQdGLWYQu1guNBjLPpgvCyFYibcvHqzgqa1SRvgZzEZoPkJuKb4P8A717HvyE2",
  "key1": "7s7WLEgrBGBb6PbsyHJTeAqDrpUP7ykasHdWzuk5VRRccrYmoe8g8VhBEBQny8ZbLAfR6njd2NoWP2kZxxxFrXZ",
  "key2": "3vSh6dN91WmMG2YkHiLQE9gTCevqPauCdFFLduPTgpt9kDm8fhsZxA2UNijzbGfMQZpn62B8iYJj1gafdm5sENrM",
  "key3": "5q3qUMyyeUP3FXw6c3EYBrN5Sb8h6U1pxXnfquuXiv88Kp94wT3aifvn1z5xrYyAVfXkD7cYEvW11PngCwu4wtAd",
  "key4": "25P5TjdPcusfqHh9wQ4pbN359nQsE9HfcMzrvmgWUQqTqr4kK8KUPmUerwfJNB6myZHBueJnQ5rLNZQ6ZSKM41zL",
  "key5": "4pZpwJn551mPYTyg5zsBDmxDF6Gcc3cWh974CTN1vEzXH5fXWA6YDou4ieV1JPa45KnkRa8kTDGd2DzcXtSfBoZv",
  "key6": "iSEbdWe9VutTLQC9fp5BAwpi9G7gJveeehWdGBX8gSuZxm9A5SJbsir7Ef5ySn1iiYxi99k4BeSMcFdZvMY4HX5",
  "key7": "4GUX6WskHihCEk3g8Kf2BccT3TFNiMe3uFULjnfk1Y52EpFSfvCxS9wtcbK4fcfZW5UpvZBdfQ1t6tdZLaE8AHjB",
  "key8": "4KRmXkBLPgzJRk9onm9hPZGczjDoC94Lx9yDqAzzpxu8adJcrYDuqkAJC13PNQ3wU4PWpefm444CMgX1mxNJ4JfZ",
  "key9": "43ffdVnStBV4dUw1vUXY29h3YP5P5yAMvv86k1N7uELVtYvggbpL2ts5rbTk6Eiqp1Fs6Pu2riXzQGy6iR7boA3S",
  "key10": "53cb5JoagJnC54vLNzLnPfycwkoJNZdcF6zh8iQjDBs8zAgPfK7RfXKCnWxoczStUYHb8Qm7Fm53bPk9w32ce3e6",
  "key11": "2SBcvxHM6yWb48GbmhSPTphHdWbUb7wj4SSFuZVzyyVC9c7ZvCZdeQ5u8ME1nSw2hsx98oeQ9pAtwo9JB7YkbNCU",
  "key12": "2wYj7HjYbHd4pgfTCJjrpiabRXu5H8EnQ6B5Buipss1sY4raYyQVBedoxNwTxyD6uXJpbJiHWUhXacTSw43R5Ytw",
  "key13": "4iuUnWsEWzvwQjBS3XJdbwt2QMrRSbVwh887F4m9CwANV454NNZKTjwZy7fHEyyGWzkBMP5uga2c5vTaETLgGYQL",
  "key14": "4qWnzk7ktavAVY12XeF2UcXr4eWeBZjgMaWre4g95dxarj6Grj9UFzMS5EAX5yhvKFvwK5nBSF3p3RNiXv1gvN2g",
  "key15": "3K9Ns4uw7KEjG9rQHbiEvA7rts11vKbjSNnkNezZ5YwcqQwY1ZKQdH7qnarLMHuFugced7PiAurKw1da3zbLkpph",
  "key16": "2yE4U7KNBnFDio7HF4qLX4eEoYHq6AAnnvGGNgTy74jZfEFLP6kiayRJtubyMDnHEvsyQdHKnPx1FR1hracUyYNg",
  "key17": "4fmXQzZz1Tz55V9i2nQe7W3mLYJKkLmmjjiLu15KW3nJFV9X7PDkpBbaEUt8rXZNRDFf4QG8WoqjEXZp39sXrpJk",
  "key18": "51EARoN4C9cxLvuLHWmm3J42eNhKLRfdKAdU787VM7iZYyBpuTiyFgF6MThUUMUuDXUAd9jxtrj31fk887k2Nd4P",
  "key19": "66TzSekYLFkhcepyPpGEYdtGaaCRCxG7nhinMyKAkH3ugFnKq5vHgY4omCCBSoLSMjpePfbrBKF9YhZ1YP2ADjnS",
  "key20": "5dTbDLuK4andUMbCqjxYzqsRaLV4TMsYf7rPC52jvQvU4BR1kF3GADRTR2wydg8AmR6aBdwMzyjp14erj937aJ6i",
  "key21": "5btrSMEyaMs2eenNnt2zEsP3jZV8ZmCztWU4txtr1nxZCHgiAF5BYHF3bpxGnt6r34P7a5k4ALHWqYdNQ6cChGyg",
  "key22": "22uHMBXVkj9bRcbuhUUZ9UMfCmZZygcEYcbqE3bhWyoK7aE5xqvEEyirWGpYaq56SS2ipCJUpokqiaUskrr2B5gB",
  "key23": "3VgpMKmS44JGFp8WcWEhHfzWxG9o69fTDE5AkanRbAhfpma2vjg64EyiVzDpphAj2yp5S9ZyM4GdrFcrajZR8EPY",
  "key24": "3ixxvpCkNv5X8piQmwuuweSYeF4axxTQ7YMACGTRLodEfjKuKMymoAeGeVCFtUxngYHwLoy4VHnsZipPG9AHDTGa",
  "key25": "4PvdJUvWxHvgfqPWALfWc4LU2VE6ojgb9ScpRPdWPMe8b3YqiK8nfg5bYrryuFzHG59t4xJujRTXj8TxSMRHCkC5",
  "key26": "5YJJTo4J9tpaLidFw56xQZ2xZ3ypMvmfCtyMiWEd88YDDngetuNRyKHNMqkKtYhP5kbfPKUpWXvP5rLRU333XJj7",
  "key27": "3YuzZzVTrbDLbwiY1kaf16QsubwmawVrMeLkMGdrKqRv4ejcPBfKDweEUEd8TrHzDxQRo6QDBnhgJUdtxYrdqQgN",
  "key28": "2W31U9QvqZDqjjro4wid1PL7KXTetEUiCunTX9MFMuRwrA7syT5imB4odMmthZA6NyqPUuqtfDbst1e3uUJCJZ3d",
  "key29": "2mgx2vvBzhBpSw2FNB5x2LnwK7LGJayx9NscS7RJyMcYLTrNcQsPdH7LXmjgSj2zyBptYHsJQPhEmRXu1Q7PRu6b",
  "key30": "uuPzTYyKJaQmJykBUaW9o6fdty4Ynbkk12zfftiLnkfjsyVf5aH449dvrn6UtsVR8pSc3TcgFoJZ7woMCML1tat",
  "key31": "3zWsPv94GJmC6w26x6t474Q9S396dedtiLJcSNdB7qsADjLMjFCmJbnK4mNrrGG1cBsS7bvkgJt1v9FqFmwZCJWr",
  "key32": "5SvYD5B8ZXfcfiQMCi8ug6YZCVwaanbN3sgrSu4teM8qLMGnkybAV8q5Z4CDZwzp2AXXYZrYAFA6JcropbRZ2MkL",
  "key33": "34UE9EbyVuyj8azCRVPaM8jhW6zHmp41MZdmqj4vGVVF433v7nbLz6av6K9NdxVRLGv9JgDxZ6SyDu81pcCPP5cv",
  "key34": "3HYG9MF6q6TJaSzGwWW6LRfE1DorCCfycFuGmGxzKPCUex3RzLLHxidk4MNwAU6V7dm3HqxYQYYgwmgxNw7AfCd3",
  "key35": "3cjShbNkcppipkEAD7Kre8ik6T9Lb1E1y8UNiyoHqxRZm2H37VRBxVQqCoSbBRHod2TnGzqpSeQBhyBnMuh1QEJN",
  "key36": "2BRChA4X5Mmg6wfGqTZ8etsDfZCM6zenz22pgfgcntxEPP4zpYRXQA7m8SGtuBcYfaT4DQs47hECCiD3FTvFx17p",
  "key37": "4JEcJXKr12g44pniWeRWQYp1q7DPTp6cSSAriXMi1ApqJ3TtHy4nEm3pV9mZo6uNrAjCwkJWrXjYjpBX4w6Kh355",
  "key38": "3DfS3KTFWbZiRUH88u5kuVVam8d5QKtPg8RgeKfQnNWwLjLmgDZdtXhEzeqxmHByvKZgvfx8SvFXR8GAvKZtwJmY",
  "key39": "4N5E4X4rkuAkzDuC82izq3fQCgZqyybJSe73gcRt2UQEKkYFDWKLYMwzrtkKFuvievzvV2wwvNS3WdbktP3zcb8T",
  "key40": "btafJyYSnKZrhKWsRdRvSp5K95HGxBxxrbm4rhd49rmDDywSXL5xPP7ep2rqDxdR4wnqn95LoYG6axuar33Hrzz",
  "key41": "2LmuWEqssTJhp2P4vwgDgDDjiwapMQhhSetzbseWx43YaAnqLpH8q8KwPjNpm3n9YbcSzFxZuJt9DcRHBXz5RUB6",
  "key42": "3MbBgeEfB8Nyw9r3eisWjH5M8zzha3HwMmgGPKHtryT519tk7GtRPnQQorMyGGxZddWifrtDSoA2jpW468gvxote",
  "key43": "5wTZKnfsXuA7GGvdRb4w3zp5NL82cd8w72LBEcrKtaKogm5eUhmXGjM8cWdhwsRz5TMWJ2EfQMVt2ziKoGzEkVV3",
  "key44": "5dPKvfGZ345ACjS4AuyhAB5dVoMWpHqAuRJwWzjAFLGjWYYJ54r66UARWohPLW6f3ZnDWD2H7EU4VZDiGB3E59o",
  "key45": "4LZ2SYfUeJCKqGSDq1dR5eTFJ5sLC8kC1EHqwhKE9UfMFMQYzfBaQ3r19cLfgwzqH9NQ2ATAksTsMnsah2TBYeUP",
  "key46": "494jBJN66iCXPzFiA7CAiNqubYVB4fw11vuRHkRKd3WW2eeu2kgbGGMpRopLq6fHfbmUHvXY62LtCbhi5d47mPjD",
  "key47": "Y8f29WvjKMECcQHcnWV7HFtY5hSrzzK89ExHLHrMzCikUqu4szG1VT789yoizqUMHdPU3kmA1ZLtb3jBg7RDL7y",
  "key48": "yMR8eSQbF2T6u5dB4Zrdzsf5W7SD5rC8DUFHuG1d6CZkkLmejiNN72hNwf1TJ5Rom8s4JkAaYhgCGta5Ryw8egG"
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
