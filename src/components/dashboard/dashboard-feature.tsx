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
    "Js8wP1RN4SMBsuHjh8ucYTdSUK2wdS5hfzG8JnkUTdDEt6SF9Gcz9zXZWUmVCpjc7A2UwYjVT3GjM6BU7aAc5mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2NyxAhVjTjhY8DAKaGahVtTS35m5B6dMzyLYzT1M6D6Wao5FK1k77vQtmLfjp2uGHKtnTYiQU22RzfakD4s2Rr",
  "key1": "2VtaJUSy8DFwPA7D3wnWoRnVfEkKLSHQu3bDjtfRtHkLfXCAEN8z4YnbK4PgpXAZdA4noPVgtsnTsfUpSRwYeX3w",
  "key2": "2sUxs2hWmSTPNPvM37caw7ac6vZMQh23HmJ7qgQCvrDVFwigMw1v3gvdUj1xiTVx6F8JrqE4MBZ3B4adzcqgiPF2",
  "key3": "2dyPZvbKjHCaM8fwZBFPfSLS38UEZqkDFV8qf9Anp1ssDXCgsGMxCBMmFPnkufdPqJJwWH97Bs6gd8t61j8jJGPz",
  "key4": "2dsVwWtNRzganognz7Ho3ZfGKSso4ALNcFPNPPTBpSXwbnGFn3dWS2qgP1QWGs9uYJuWAU2MFuGatZiUyEjPykMz",
  "key5": "o7iX75M6L5MFdUndpAVqmbqidVCxUqe5r8HaWgVwaiMUwGMnsYX4nep9B89iL1nwNy8Gssx6xexguFfYdscVMmh",
  "key6": "5FZknPuFpiDCjfndUKYvkYiJLU4NgiRifN8RVjv9zqB5VtiK6EZp9dc8pnG1HrxsxgbFDEDFFYRqoXaGJra2KQW",
  "key7": "4Yw6bsLpzoz1c2dZzZ6p9omqwyuGccsXgjmfWBDMdHLF34fS9vLv5uopr99agHPRpLGn9NTDh9BBkkBQji61qmV3",
  "key8": "2Tc4trMz9u2c51MpXMPtqbF7Sx5GvNQXtgsGov8hYTBAwNxxEKamC7xquogqbAdfgcFT9sSivAjH4MUA3p8jUHoJ",
  "key9": "4aBs6VVy5TgHRkbVHsNup7NawTLS6EGmgqWyrDbSU8PXQ1vsjcQiqXz5Qz7e5X146gxFxESnse2qAutpVvMRdgTa",
  "key10": "3SbFoegw6JGwa1fM5vM9VyttAyK1VrEzxLtaLv1C9y5rospLYhfvF2Hki7o211WUQJ7FUqo5Bzkt2NRJFGMDSUnK",
  "key11": "d7L3rkzrbvB8LKzGFRa8kH4KnbnEHKgLsSAkXoWtEbao51T81WWCFbTX7yhz6STsDcAxb3F5q3jdUrGpXy48ogt",
  "key12": "4KypFCHSV47nY3xyJmk8sG3KkZTzbNXqvKkSvLtuGJg4tuEvKi8qywm5sgrkBDgj6JhtGQAp9jqXSF4fzZPKSAm9",
  "key13": "5a6vEMbiv7Us1uxViPjbw2mYCEQZMuk4TGsxcTLNUnfuVnphx3qaCB39FzyYmQQGBjazFuK4GugbhtSjpQ9VD2Lx",
  "key14": "4s6j7L7zC7WA6sQRnKoyjgRJKWBof496JB2aZWC5F9EU7fru1CP7pmwzVmDh3w9Sb7itfQNJRsK4gkiN7v2udGhF",
  "key15": "36wMs9z3b4tsd3RvMEYU9k6MQVSFtnd2q1AzD8oF766TjCTcc2QWqRqcwZExhSEbem1hkcZ8nyR9dmozJADLxs9D",
  "key16": "67Q88WSYNKiFuMFbmEjhGdFtceqRqHQ1rFkqQ8vLKFWJmFtVjT7amRFihE5GvgR73m3wm7GYtPaaC5e7T6i3n8Rm",
  "key17": "2tCsewtkPsWqHyM9hj7tEEqws5ofu5J3C6FG1J7UKdoYkbnQy4bCo81ieXaZdZjjPxjvJ1RvCuLcTPwt9776Xbwu",
  "key18": "2mTMee4qLL1asTst67DU6K4A43QfNBuKuj2joDCqzA89CR77n2KWgHsWNHHiPdDBDkk4Rag3TCggBncj7FEamFYF",
  "key19": "4haUFBPrKUuZkwD8PgnkyhrCJxCQPMD8TbcQKD3DYnK5ufrdfsctMskpx5gRizZ72qQvnR9D8G4Lpe89w5HBuTCP",
  "key20": "fzXgjvbFR4CKQF21BS5Zw6VsNPXiFjS1BUwJhQCnmUWAj8JDnizNFp55WFC5Ck97Er5wFwK7Eiazwd1wMGjPQU6",
  "key21": "xmvUi2L5DpkzUQD3guEENkQkYJ8Qh5nASPCFzfRGAFbRKjw2YyfU2tW2EuDS1vojVQMdRsDQP25WHzNJrrUB2jT",
  "key22": "26G3Kr4gfWcBRr1mth5pM8sJASVjSTLUBkMqJBGDrwAzBdJCFeKVkYVTTa91hyKCoTrg27bkAwMTiAo4a7hEAV98",
  "key23": "3RyMKNMrJigLdxdSG4tsvCepCREL3LVHwnEtSfGcEAwKDXmh8JdDqaaHgzcNBgmFGEKkGBasCQC6b7k8dkx5cjzH",
  "key24": "9pWskbpqGRi4i4eMsgALP65uhAbE3hyJpCEfX8rYLbo93UgaB2gThMZcb9d69hsLZdhUU9scPApyXzW8MvqJG4h",
  "key25": "3WNhxqzk3igLyGyH1A9uffo8zPuDX4HgCkVk4NBXgr2k1MNjqRxD2WuadqXRaP4SnLncAvwdjjxewTW9CGFh5wsB",
  "key26": "2XDkhrnB9wnYouiSJDRtkW9ZWar2JjcEA8YPoQfbCqCjGFTwEnUWtHL7JWvUKaitpyRbztuguLh7XYk9De8GjwAv",
  "key27": "48hsCVcRfhzCxaovkLuZqtk7FAmwxYJD4Lq2Z7wkVhyRmevoTgtTz3evx1yoD1rjaRhAZP6EeCJEZgW7i5CT16ML",
  "key28": "3ofjvVp4Vc85Byar3naMwAM2aQy8EdJY9gkUmq2ddRXDuJh3fj3jSBh63gPjQwbrNSjXerFm1UCkipF9itJ5rvDK",
  "key29": "4a32Kc2EwvN5bKqbWzUL4DA9ArtkR2XzgimP2u5z6Fvenun1aMiLKRc8qxT2FVgtMUEThYS1Wbh1SKLPP6d8q88W",
  "key30": "3Fg8UtBkuZT7wLaP3r9n1akBbpsmA5fJ8sFNGBUdzYFfW51ivC9j5jT46bwnq4NFrCqFhvCSjah69yMVhtqs3zaD",
  "key31": "66JaYTYW2cQTQnCnqpP8Lk4cKYD1zSWFuw22rJMTQwQDMd5cLu93mX7DJsVbZjZQNj3f9Lr3Xcj7gu8DWJEigarp",
  "key32": "5usSaBq2TmqxTEgH48vgfvSbGqiXbkHC5KL57Uj5DQ44mvb6XZqCyN3gnmzYQbYSyvdgxvwqmxzRzLQTJXsJYGX5",
  "key33": "2X55UaBYQN6ks1U7x9DmEkyCcLdosKrcMXanEfaGp2UKAmzVz38yu6Z4QSVmGTDe6NoEiVkemUzUp3Les5xM8Ynm",
  "key34": "2Ay2pQCrxpqFTX37NyBFKnCagii1MDSv5qJjnEH61QSV3p52krK8UHpE4fJRYr2owtmrRw5PVhGb9apxKnTy1BuB",
  "key35": "2dekMDM5dQJoY9CBJ19mKW7nNmVmZtgURDNb1j1VGxgBbEpj7aqU6RoQ3TEhoE2QR3TtjZVtXKEBvAmKF6itHfDJ",
  "key36": "55AoSkDcPkCnvTpQ5oC2cnmFt9GYPr5pG6DFsUK7qzpXyxk9MKXD9woUEHEtEwma7awEQsqQs2ofuGv1PGQEgrUY",
  "key37": "5c6hX982m9bCtQkCxcHygzxrf4KaFePnECBXxuwWxo3DLiFk765of8KYFMrb5w6ftV3xzeuqr6Eoet3pQXPQc3NK",
  "key38": "64NiUZKmafBQ4SsT2kEJbqhJ9KhrPnvh5M79iSyLSvKp99jW5rAw3o5Nkwsem6Wf3Ne3q1zHJJuu2RrQVzrqPJt3",
  "key39": "4z32YLjW3Ri5RqEPXNRJY8Phm4hzb4MiXz7tYJ1LpBVqBGHsAa2dHFoLqpp2QaqSF8W6aihCRKgfRs7tqpAi1fk1"
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
