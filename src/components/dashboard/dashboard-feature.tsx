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
    "3fRPqfEJtgFg4U6FwxQ7XLNqKvqXrVN1YnN1ZmoKUYBQNpvaudMzv8kHaJrVxpVoeJA1HEJAL8X4KUw1i7Dr1Zno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JWZvqKSdJ3LyHuEiiSCok2fa1CVxthT6PUMW8mCfspY38RLNXTe1G8okuvMYbKd4K3o3FBtXo8sUqkHT4Rt6Hxk",
  "key1": "YTJ3hqzb2uDtRVhSGiHnU6nVbnTAEmr2kUd3GVxuFpvkPmYBG8GAbobGRK3gucPoKjFLfDBoT2YMC86GT4iQ3a4",
  "key2": "39ELsKdRbMnQvL1RPz3jkarcZ3qH6gFaUbXacL15vgmNxNscUTDYaBBFcgksYLqMwjq1pXPXYec6vVVWdvZHt8zR",
  "key3": "44GLzicQQKeEWyGtiDCed76xzFw6Ho9wedxBkxcEn1veuqWuZb1TLqmEAb8Dv27FVgLhQCEo3CdYrna8ekFgBHyn",
  "key4": "51L9KvaW4Vm5MxrVTA8pYhWajuw6z3nLTPF9UrBd7mzsgTabkaNxkZ4HT5WfF4ek5tg1rb8FfsstChiXr9tbs4bA",
  "key5": "25JPwRaE5thf8tzzMjxbRxcVBSeffCi1uoLFTyfqjhuRBkGLL6xEBrttxXYNEx4xkgLqw5b2B4qXW7c6uhmubfyd",
  "key6": "5XaoUjh4mRen3d58rn4zpYZxWXn1koxSpx1xAWMiZrKhUZFTh1uoaW9wcyo9ve8oxDDoxBpUWtn46FkfQxkDpSp",
  "key7": "5U4K132t7nu6sezhrNRWXmFMooShVqcxwtva3bxhq4qub8rKjXC5qXjbmgu7QcNU8wp5FakZCrUdE4QxcqK3sEt1",
  "key8": "5p2bj342fijTF9mWmvYmtaqdtWyjfru8Pr6scdqdq5TvBByBAMaXmhGop6yb3EjGRQvZ8UeurSz724Z297LKrb3K",
  "key9": "323qcWLqxVUj6PzP8d12LetQMQoVaLT1hDPdxKqJa8E8s47fPpmUqmAzsmdv8CNFWQpE4YWczqTrhyNKtJWQDQUs",
  "key10": "3rHLWN51D7EeXdiUj2i1PLLjGr9yic7PCqFjkdh2J33bvELNspb9JRLoSQ4qHow8xmTbWcVaPYJwCoXzFLPL7yh5",
  "key11": "3g5ped7bqK7MTEoS52kbvZZQvU3o8Lwb9SJp15teovFRwub4rGBzoQgFG1ixqsAiVXymYQUvdUF5or9pomThzZDt",
  "key12": "4eACF7XBpGsztGY3iV5BLvAn7gjMnWj7tg4u9bBu6pBYJ4fSKM7pfyyPYWkVRQme626N1yYtdimDTjCuSbEtcfsv",
  "key13": "45EJP3imX63wsRZRRWkYMSCvZs89ase6JVjheYab5irBgAvEiaK3ZSiQDx1DRUN39kDa5to1LRz9Qk8gKYDfAmTq",
  "key14": "3GFovdotCwMDrd18JGhZZAvD2NYmHEV5ftK9E71BdZuX4gNeKFpWiWqK3oWDTb941YEyPXaq7SYsKam2GrxHVxoX",
  "key15": "5DeAusnkVK4bhdhwWXjBZ75G3MS1kfBTXnAXFZuokYR219TvBkfhATfEGmfqaiy3MFQvnGCa8RHK4t7aK79YT6UE",
  "key16": "3KhTReXk5pzHa44zJJbmXBwcPuDqDie1btbibwFkRDyMs6gD4apMBSUEX6TAXJ9uXY1WzXe4bJk1vTNMz3EUnwFF",
  "key17": "5EYcbbYwbGCJ2YjiN1VameWP1QWZ2rvdDwP4rsNQVVkkLW5WpkUBBSK9DfviFZNxGkEEjQBnSG3qAH717cZ9skwx",
  "key18": "5EzX999emWLHBHoECpRJqGC2svfQV9GRqSYR76bZTcNcnAXb37LScs2xgnesX9vp42KDqcXrb2RsEBKcQ3bH6NQm",
  "key19": "TEzwA2dTcJdxvwCJoQWsDETUq6y54acjArXQ4icfenoZNx5NEh9roxyqaXEcghgCMxM1bFu2ist5dK2jHdUQkdB",
  "key20": "3btSG8g2TWWmY5eNwUCaAtLyVehjLGP4o3vrCWeszNMQkroH97gAWCoV8nD23HMXcS9vXiyq5Adwbwz1QW3qATUD",
  "key21": "5o14BJY9CCAjRd4RDds9mkoCUqoh8TFLLtXXTkDWUsUNEgSmHxf2VURk5wwCp46CwoNDFTG3RtJBEXFpgmgpAmRL",
  "key22": "3WpikD243Kj1BZhvWbHp1RVRykTwPoT9rKAwQTYcQ2qkrFohekPH7bbMyyahAU4abzTLMyruTeAWptyieNUDNX6Y",
  "key23": "4bYY7G7gZAGkqsEcCKfRvXo14UAvsLmHLk618SCtWxsrJeCa52M4AjPYj681QoYmsiUUMFnAzX28W1o8o4KSdhHc",
  "key24": "5AAsLQJz8LziZrfZWoXFmu7yE1cEfxLP3kPGq2zTyyPRwqkeFKjim4rT9qV4MusgJvHLR67KsfNPTLYuhAMb6Trc",
  "key25": "5SrRYsH2bDKMe8pNbASknwEbGMPwwgfQsjVRVACmT1bPb3whdwngrYcS77atfxxVLVaNdAquCfujBxqnhuFwDhXq",
  "key26": "2gHsNuLzV8VWK8EPtKrgWAW6QjNafUj2P6LJuNu1KVdoo9rgTShDZaRhUqTDwqPqd1DJJd89ohqYFbAyEqcWKRJQ",
  "key27": "uNHQo81ZKTjNRYcY6Vd8vD6UfaZvuRYs6S5cVBqpseECoCAuYwTnCyK1qvtpyFmCTfuFFnijJbpsEv3LddZr8Sk",
  "key28": "2UrsbB8RpseyXYRuo4CcMbbofDfhdthp5hVSj6DTZqMSHPA1HDzfgGFUet2JiNbcThnAF7PMXwuKufCniK5Py9Pa",
  "key29": "2uLcGVWKgoU4edMvv3FC2eGuz7RwF2w6hhDdwUmpTZ6Aj4JivWpxhUT4WAuvwqof4Dyykg7FTke9azwUTFVk4rGY",
  "key30": "eSi8Q2evfnqQdEZArtgnHWjgJqcnU6eQ6SZbefAq9vJ9UZSFErY9DBhGg29H3MDrmgCzMGtCsuktkTg4tB3ravN",
  "key31": "3sC5d47HrnnbeWkB1uqFkuJhnpcmVh3HN9UFHEGg12jeSV1BrR1rNPcJXgfF5NVsw7eWCq5aRDd1bGWgz5Fehstg",
  "key32": "2jpPQM7VwLFaMtZmXz9tyxu7JbnuU39VXXS2G5fw7TiecrE7rBS9Crmzve2eGUBxazegqXrXssX1g5Stt5oUKSuV",
  "key33": "3BM1QvgfPqzTtPp4WmNyvexRybFshkHf5AkR2HfQotS9yNTFHbKTLzMhQCLoMWeWSm8kRB6N8vcGhe7rJyd4Drj5",
  "key34": "4d5yKUmHQBmSFpL5guWnbgHq89ebZpGKn9zR7Ssm2aGfpp5eBwdgSQKvkeavAj2D5Za6vCPT4Ny5DZVwgLRc46Pr",
  "key35": "3sQYVTmd4J5udeh3EaBsux4qP2YECotskSdP8aPu1ofx5i8fTgiLjeL7fmMNvJ1NYCYDGZG8Zt1cziFQWVgcsuLp",
  "key36": "WCgjHexXB1pQZM1G9Ucad6wAUtSrYRQY17WnTghg9dzfngYPiNSiYCR9y9i8TNyED2YGRqagqzm2pAfbb7j7h73",
  "key37": "3FpMQ9RqZjzwWnHfiKFekSyfpkR2zhzdCqzYjvvWhQ2senM1Mk5XzT7dvVzU1kMS66eZxuutqoYddcxVax3472LC",
  "key38": "5EbR3AfJ7kQBHmuhw8LPyqAUW3pHREuGQvHiD4Ag2Ts34KEBAznFp1pXxwJAwQpuPxiGRPexxDNcRrJNtAhBS35n",
  "key39": "2SPNkwBJaFAfHSjFYngAs7PcDKdJKx4RGVicgrs4qxgXM4uLHYSzjdgBwTFhckV8wwvx2i1r4TwAyVnRSSYLdzvP",
  "key40": "33ABkaoBmuNxX4EECDHqbGWYmVYVywMGiSHgGbJqmwtiJMWfu5jxnH5F8G5nKPFhmjt1StYsT5RkTukGD24Gdyxs",
  "key41": "5t35HgQFxZwzxA1T5VRVpXwTq46kfqxbBcHh7Skoa6ULi1Xvj9GeQJbqbLYMWSzNFe3DMe3MVrZuJpGxfQbfQP5z",
  "key42": "DCufdCVcbeiqxe7Xh2BEZpaeF7nCmYJ9ykd94UBA4UdQ16rqMf5fENjmLfBoyaTrJKmDkmEmSipG72ua69uM243",
  "key43": "3C4DVob8BnhB7wuajxdA7ZE6w755oxvWhvT3EzQcUB3onBM78MdN3hJM5bZyfQiLbgfnWmDLcpLcpHzWbkLzC1a",
  "key44": "34Kco9oBVFtz9JHFg5QLhctyf4cL35Ut3Zgb3uajmsRrtwPw1QBiq6B8LEs2BGD15L7NuK2RafmbcwQfzzRWokJ1",
  "key45": "JLrcnRCXjFQWdrFKxq3pSdqVmEXAnfFETXnsD8FXvRrjtV2zLMF1UxkQwhkFwgsmibb9NpL2zPhXtCjHQJ5G8kn",
  "key46": "4ie1mva6M9vUJcQ47UJLQ867F1Qi8ETF5t2reMZiH18r2gMdRkFTbiQeq6A9VNrmTHJD53yWpoCNBdw45EcVV1TT",
  "key47": "3mhGSNyNi2qaUvY84QYMgxsEapz64kmdi1kC26naTqPfqHAo5KodqGwvXPFdy1qiGngzrw5djM5E7VJFfxXBX5vg"
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
