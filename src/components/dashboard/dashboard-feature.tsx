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
    "3QizKvANDHCRSGLpPBC41hAEKKrsb2F2JSC4FHS7TRWT6rGdYjGyrS7SvDPY31GsLmKtswTiyFqQVPUkFv4rjffB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1VcgVcwuxn4wGyxVoAANwDGmuEo6FWYV6htdHw7k98FY6XdJhvL156mXm9tSFzKjucjkqmXwDdLCRqdE3u7Ewk",
  "key1": "2okbNF61a2GG77jr45i1ZZwsV1ovf7GTiTKiXEr43BpyxfS8qAF6LZGWqZpXY9TPUjmAUmUT5XHT9TWntdxWTkjw",
  "key2": "2VMhde9LFW19zqpt7voii2EzR6wLVi3aWdGCthHbRXWS662orkEK4MWoc7tDRYMWPZAyuefmKtmxiTmQSK72jX4y",
  "key3": "2rXbUGB2y2esb2H1jToK5btsUXv3fopkmgPqfo1RE3Xdeyx1m64gnEEB1HSX1bYTtgsqwc3xRnX3kwADUaPRsQjA",
  "key4": "2TWScVgqLcT3hhxmNSRhPdZh5FiwVjtARxMwRVFw3R4Xz9bo6Rxshg6f952gPSQgCzKYysvBPvhe4fcZXLexXQcs",
  "key5": "3DVG59r3TVra3ci7SgUogshnHU8y4nxzRya5uaBPSbGTK1Ee5pQr6tvQAkLXgBjP88AfuJdNib1eroBm7Cj7kq1N",
  "key6": "hzFK74rVdXxNEDwBFh9iQPcgva7BTpNvJ7Mx1b3AVeRpm4wKTKweJ6yPHN52VXzy3pCnD4ZbbcLmNh1271x5JwP",
  "key7": "TuK2DBbA9uZ1EtcNL5Fy7Go1Mh2AeWaECj8KAsCKHqWgyboiEvME2jmsaQKqM4QbEnCA386jr6ZaVKkD3q2adwz",
  "key8": "5rWMosozKiHEQKECJyP9qKi4HPexuTbfAP8qMin9aMLRzXmEbkkvHv8tVTuZzy9wJh7NWheD24k1xUYLQCbJFDcN",
  "key9": "4HhtjtYckM4DKUfsb5DrhzwRbmhQjWpSPhYMza7wVHUgJpqw5DvbKgoAckZjemfPHRMrXzfHXHbXvYPJ8nV1jmLh",
  "key10": "5gMrxvznEqU3QWwQXHhE2yUFz3agiqpHEDqbrz2hES2z86Cgu5oMkN1rBhgc3uDBHBVyKSARKNWpuwQNbsFPuG9i",
  "key11": "5htijSPLud5QUUPZs5rpxjRxvzzhUzmTsGjsUGEgz4GLFJGJ2tfrNPA5qpMrPc3pg18pjEszMuNBfvDXPiAQb3f6",
  "key12": "2UFpx7WRQzF3fHbUBcFR9SHrJcXHyGenKRrjqEMzbHbLToTrFSv8i6ZxKY5QQ4macR7fs9Z6BkYqk2LJBL116c1a",
  "key13": "35oGBgBMyCH1cwfETFYNuPWpsYqD1a17Ykke3WZNbiJRSZdrB7uB4mDm4H1WzUKPNK3AWAPFamponifkHKgPCLwX",
  "key14": "57nqsTksHzhkMGmSQd3YKjgDcBsVpb2qvXp9EKAbP2pPcwRtzwSerxtMWacGGAaFZk9RQyZHYUi2j69xyFVwNR12",
  "key15": "B72ZoQAivfLAJDy56s6kVpCiLK3w7fay4xcHPQ58aX7YaXfb9hjtc9xzM56FtQb3dB7Z16KyetKSfCM8Kpv9zmc",
  "key16": "3uD5tULhoXzcSuiVvRmUtXsy9NYQF5uhhoh2DKV1b5W26Kk56E5xL25zxAekG4xU8Wt7FWgPLXvJ1Nda6pG379rA",
  "key17": "3GqRJFVe6snFrYQRyXAtzybGm39UvmkAo1rQ91CPzNFkQ1xbkdqR6tvLne6dDfnDFqpHSAjKwGqiqJcGWPKi6twL",
  "key18": "4sizCsfoLwYiBndTbL36KJUoZiLCLjnTgngDN3xw6vQntVX9UGAAurJQR3zDai8cjSEjAu17B4Qd7BL6QiTKokW4",
  "key19": "4P386qYCPmN6TcNWffo3TswXBwCFJ6pbQKxgW9E6noN2BZtmzfmA2vSuNfmtir69BkPp1DqSVphVn57qmBx7LNQg",
  "key20": "4Z2sbk5Dgt8H55DDvR6EEJEEUEi9UXbdEruaeWSwhjN73LSXHfkBUupS9uMC3Mb15BJ35AV2KaJR5afwf5TjPKjn",
  "key21": "3VpERMcWej84zMjG6dcoyBNNptrwJRmiTyxeut11shfF7smbJfFtH47iCmWx1TXV5wMLYgtiLqdAbGF8pLozDBGM",
  "key22": "2Z3GdZ3aKE5x4tJZUY7aq6j5PDpfqwbFDaxtaPKpg8CWwU6LXPV3GDQSwZJm2rwRVUj1hGujg2v72gQZb4uRsPWf",
  "key23": "5TmKZjhrqU6bXPXs6xbh3E4uny6D3FqArhsuUQHfncz23NpHp6HBLC5PpE99gPPfLRWzh38RcoBesV6tF12ennsu",
  "key24": "4ckaWvGdp2Y89j6xh5v3kLn1MqRzaxorSbNbsKv8r6c2HYhEcZM9dg5Thqft3ctmpajakwKwxD7p2PrHordhcgZ5",
  "key25": "27R45nL4WwA2hNdCymZvstdeLy2uHxYnZpjTykLQjgijuuPrfphHTwqgY3u7iQepLDypTpuoUcftp72MYJZomutF",
  "key26": "4ctfxJjkFapYpsD4S4BPj4sTCY4QhxyiraSRLtt6L2kPknSsBuHaLsdV8KLFpPCguNAQY5vY6ohQ721yBXvkoEM",
  "key27": "27XkrPscZmKJMCZf2TjQut8wpd4siBGci2GajE1kRx5oT6cK4jom7yga4mk6CEprotjgfvsfsmgKFM3e7SnqgPuR",
  "key28": "4BoiEJggoR1KQ9WKjjjbgcYgQBY7kmzv8CkkV3rSTksnLmuz2vrWBduZL4yXHDmscwfwJG3TSzR7CC2CJA8UY7SU",
  "key29": "5PoPYi8153bwrmV2FzuWM4Rgu2h9QNtQzUQPs39ahg4isefdm5gPT8WgJrb7wwr1Tym9HAuXq621xwhgUjK6kfJB",
  "key30": "nBSSUQQc5QiBSa7qv2Xr6sPQLePuJbkbWZgwZ1nAP3vUAZnk44DJ7ZG3Pxw1TJxaUM2Ys6isSg9CiRekCbWzwzd",
  "key31": "2JaJ7GhAzFCaSfWh6GS3WUyq8ELrq8uHmWpCLRtQz4pHfSzc4eFwRDXnGyP8jXpP35ieWsrim2wia5oti4jgcJbG",
  "key32": "5XNwxZ3rm451a1eZxW4sBdzb58wPdLwmZcuinkvBkk4Lq2mFT2ywm9WnSBkh7NXmh9iztgCcsFhJjM84HHNgDkKx",
  "key33": "268FGZhBBURjJkvtoaArSxGYw8J1RV3BiRWSWf9LLVxMcaUUGcudv9MW5pms5GCj5XGdxATNMkCy8PXwdzHJYAek",
  "key34": "BkbuDywn4h43nz9GaCJnkmL8iYiFYpUaDfH8JdtHu5pX4LMhG5S4E8RWAgXB2wHz6gFnq58N9TpA6bcNo1CCHhi",
  "key35": "2x6qsa8t3Y4bwmo21jX3CRousdJNw3pw2tMMG8jaaZSDUL7gWMAmsCavMVjVetjwTUpHyQivC9NBACqLxmeNNEP1",
  "key36": "3h5HJkfYJo7rQ1wPeDrVUFjD3xNzDfpCAXWHa3Yt8fYtsnvhS65dtfJY3J9NiPKWVuHYVWu3bSQPrTcGxPA5y2CB",
  "key37": "4hB4b9LnAHuo7oLxaxUjMpcW9vKxvKBezADwC95CZsranCqHBozZgFqACr9WvZidYTyxb386fPpBhmvy34eQgqii",
  "key38": "4AppZ3Vivn6KssocsgsLfFFrCjtBECagBnc3Qvy2LNpJXcWkNqK24kCUZJDrT4iYn2Xp9sf5tkgfzbN8nnL7F7BG",
  "key39": "2z8gVFnTogTavqzwKB4LHDPbTTmudvcdVo899nVrY2iRM9R65BicZVSr2FE5CEGUPKFyVWGeEwNTpgfDwbzNjKDH",
  "key40": "2uwUbmNtSeg4n7tR9NgUGTWzMLwihvMv5Racoqo9wDGAFqbSVMuEK3pPJRHHkCFgdCswRtCozPeDZfmLWXpuzwUw",
  "key41": "CGix3XhCRwMBmQmf9acDDNJxnAZurJcUmA5HNzQRqYy4UxHY1gMZs1vtqPiGhSaB1RnNU7BDHtq9EUBsSTCEZjq",
  "key42": "HSNqU1fKyr4jtrU6NdcnFHE6S66Y995hGqonbXMpvHgsJV7cdVRNem8XSfQoVgTjQ1qYN14DAVAgbRGLqEv6XVJ",
  "key43": "2BQFnCaVZJyez3G8CAXA58vGB5faorfMFymBQksFympNiVXZYGTTFsoCoyWjyjECg7R7jSznkhZ68oMuC6saez6s",
  "key44": "4CGRjte783CNQfMbufnqbnu9P9QLL4wRi558ojSHq3pyCfe36Fw787hRjR8zZH32qtTBrW2pJFdcaKxNfQSykgbe",
  "key45": "4kLaR1kGb9W158jCFn8vHJTUX2EDTPuFJNmX2atGzDCCKasL1oA1dHhRXNuRxAYFCnkGMxYg8VMsc56EJ7FtwsJp",
  "key46": "62AEbjut3gp1kKH7WhrwyfhQpAPZGwNiWyzjoudYnpyk69GVYnEF9YoNUgMZvfZqhvibTQH7dXb5P9AnHGRHtdE8"
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
