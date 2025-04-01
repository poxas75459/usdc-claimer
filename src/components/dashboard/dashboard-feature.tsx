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
    "46vFREPm5ux5ds862YY1B4oeKrGiRbCEiULX4msnWiGEW14X1nn9Xhrm79F4eFkmxPAGV9RcChvSamfkdLspQ9J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtPj9pgK9PmK6k8W5HscAZaci2mdcQCkhKG3GhHofC3d9hzRBZjc3PonPN2cD6tRmvQFoQ6osHQ5epzeX44Ei9X",
  "key1": "hiypCDJ13JX9vE1RUWwz5dQRAy2rpZnDdXVuaHgUQSW6MBeQ5EvkmFycCPkYf6XyBKxp9cZvYdtxBPMMK7AtokC",
  "key2": "4GYhi2wwa9J1qFAWFwmejvxjZb51MaqfhLpjRWbLMDw6AXYq27bMVpy37ECmJ4JCkoyf4p7ZbD31avCfqMyDQbUa",
  "key3": "hCeEDo5BrXUucWTSrNodSwtpcxG1YzxzNEAASwARg6AtaGrAvue8DpDuaaoLxdNzX5eCqgn5UfZKkeKfDdYWb84",
  "key4": "4jsexjHM756VjnMw9evCuSzSxZwb1LSFi1VEqepAcRuF28yb6aH4yToVSxoxsYbLTwX6mJwur5q6nVNXkLeeKSPM",
  "key5": "3gx1vxwCUoijZQNP7SJxhpDACGM7tgqihHFgSV6Q3Epkoq75S4PfsU7hxGofexLxtWQszdspqfy86xPws7Yt86aD",
  "key6": "3hoFrYvLhvxX8UPW5CMUBT7oUzKEQhQWGA8a5jFvhMQYhQyygZN7MXjTcWVyihnkZ3pMiXT3j3zCgrKfpUrmeasW",
  "key7": "4JrT3EDtJAmfLVN3dKCcebv2uSapuHAQfFJX12V9ZWuGHbqx36H6M27P2DHagQKEBP1weoje8UXoSySrv7wSHi3h",
  "key8": "4MAgxFv7G2PF8P3v9rGK8KGZ8vzPk4DmC1jFVAyJex9dvcYSgFAWVTnGQCKiMhw1nHvhwBzz999YyYWE8dp5dEXZ",
  "key9": "44S5H5Sp14zZTnEuY4DKUyhPzqvq7znwoYEb5T4iJvQFz93sHxgq6X1kib5QpyLFEMzZGpH9pGuQD33FE6LYf6TL",
  "key10": "3GiwrxHQ3XGvbau2RQFWT9zvhiB6ZbwdWYR87gTkp2JpBpodrswgNzNGBDbmNCHro9toPuYWm9LmkVnSYhDHqv1",
  "key11": "53Tc917SFK8ipsqrnvcLx5R8UCk5C2AHs75CpwxTg6k4a2LZWMgzfKgoVUv3A7VgckMei3D7M3a6BET7QW4uHQow",
  "key12": "5YJEgTHKUw2zpDpdjE4BccNKd3jm6uHCzXa4L36ywBTeDRMNcvMXb6e8PSimvvZ15R78YeHFNmV7So5hUk1nL6gG",
  "key13": "64VyESk9cmwUa8cpBmwAgo8cJBtxGju2jZYgKGVVeLm5VjjQ9kPyz6gxg6UaUWXgyS3BC5UWgrGWmDXqc1nbFYAe",
  "key14": "3dJGCDi3ouQ5PwzL8p3i3F6aR2GdyUGrumCXJVGbVy6spr7y63JMQNHF4uw3wD64NpsgSfi9afadnYaothoWszta",
  "key15": "5SfqmopBN3zxTCDpibbQ2XLtgNEGveqJjMZmvvCvpjD2hUWtbcfjbCDu3QRvjxd4q7dHSrxa4wqv7tMpujnWiq8Q",
  "key16": "3ki2VCiTzfgYyb6FY1JEBHrhvccztAocywu9vN4pVwZdKBeeu42AbUKpTyP8H4WYsHPQFW7gc1HHAvpj4DHXjNWn",
  "key17": "59CnLUfFSge6LXZH5ML5j1UEQe2i9rhdJ3dpVDXQCqQJNwawp2fbkzFMdechKMLdWEjpNG9wPF3uBP7dLbxoiYuX",
  "key18": "511PdQpdx9cvNmdv6XXuW4zZRgBhhbUYCJXmwpSGz7q9sNRgxqw21HqqGGHWDbXdKpXhQGiQzeYB4uQKqLXLvKsu",
  "key19": "4PyJxyoTLsjHSUk5W2FDR4B17PLarz4fYfkM9kuatcLBgKyBDzK4hBBGbTEppNcLEg98L9PTFyPvSMDK34XVnR2L",
  "key20": "4sdCMYs1DssF8sDjFeUFPjA1SMLgMpiFVumARTixz4GFAUJFs2SX8s4CgBtVm6f4cMk36FpDDxTPTeuhzUoc7gbx",
  "key21": "5cHNaoGT1sBU5YKYjkvvuzLKnVAmAkSEzrkXaYhxp2UQPqrDUpj2RCKPyATELJHHWAqF46meWSFuAjQfYfBFsQkn",
  "key22": "5Hq1ByVRTmHNCqacTtLwYZrfjtsbq6LhFswp8gjxvNWdnJne1v4pkkwtUixdhsiTRXUWzrn3ExtnqbD61Y325pzF",
  "key23": "63DGgy3DkM4RyEjo95kizGnFNGXBkwKvN3ugtoUZDGMLfQyieD2fUjR8dVUVCuw4KpJHJaBjcCALcjDAxnPxh82e",
  "key24": "4disJ39zE6vDnLL4Vebx8kNwUFKd4CLmUhoZVrt794BCvcd1Cs74jAiaVbxA9QgCKvWcyBJpwtJ4PXeP6u8EiEQ",
  "key25": "5cKjMbXSusG77bDk8U4sCu2pRUo91hNGkAshwGNPwFbpMgYvGNBKwi4WZWe1ExQDniRYYgXtAwKns1217C3mTaat",
  "key26": "2rxNgndzGvfSQahHJQ3h885Xx7LeniMHTUhT9VW6oynwwizU4MyZ46cdcA6kvYAXLo7sJVmK4ensGxkmiZiuWrR6",
  "key27": "e83e9DUBa5p9SSxfS4Dt6nhEyTfiDipXkrFTFfbdncrsgUqL4z3W3RfLuPXzaPPGHnN1QVNqjn3V1EdvS72tEVE",
  "key28": "4w5c4YGygUSdc21ZBXDEEpBLNfKRwu7w35UGJQuQueEY96EtFtjovg66qCdeVq2uLNY7VnYmiPi5oMwdD8bLHNdk",
  "key29": "4erJ221uXYkt1FqTSiAA7P6nY2ZqFhCHBZCSekRJi9fJoK7Bu3YvAsqpDxWv38e1dTCiBQqvL8uxQNS3HxfT3PZo",
  "key30": "5w5Jrwoh3XrnTZiRo14om2wrjtvQR3EetvYfvqRpm1izJK6Rd12EEuAn9ZditH2EG6WvSj6Jj1TiAXeth592nH8n",
  "key31": "4p2ph9bcTFudiyN9KCpQmxL6Gz26th57uDdPhYN9FELhnGk5VehTtoBaS868stLFWqJG5zoZ3DBeNZ1wz367WhPE",
  "key32": "2PCaWR5NZ5dt5T9mvakcZwagHw9UNKXtG3hwAgbVMEBGW2di698E1Y1z5johTa7ZnVsJUMxsfLhrs3xV7nfzvkZ5",
  "key33": "2sjFUC6M6kv5ApTx8JS3fXM9bmB3sWtJctHV18yyFGrqUerZV2jc6GJ1kZjbF2EDJr7Wv1wZvgbzYmqz2UMHzUm9",
  "key34": "5BhxCnqtE6JwfZjPry2PS9L1j17cHFm1ju1HCEguNqnqjQ9dqWS9Lp1YfAyrwnTHnYoZtaoiw2NrKLmLaYXn39Yn",
  "key35": "37Y6pADNQkQNxLvbmiPoFrgKctuGSNzmoSnPtAxp3CfzLNjdfG4Fm3M4XTnBzNUcyjtG3sHQAHxsVrTwFiVvYUUq",
  "key36": "3PdfUiGu31ohogaVBhT8Eh7NaB8vyASJcbjgugxAcMbtxtMGUZVMD9SpFANzVfCMFTht9jaZn81QzYrHWbBphfcH",
  "key37": "52ehipzXST5ZB4ojGNzXnbdjvzU8CPaT7YvYmGSG87zCAMq78thB1uQtXt9SWXwUMaH2pPhrQ7bKhDHYbeErQTv2",
  "key38": "4qdrzmMiuxPbaEWfS41AkTJsjzW8Wv8Cwqye8cqWwJi5t1NwZV1LrGBTU3cdpxDb4EKFhJYCnPYjaRGnZwQzszXF",
  "key39": "4MwsmydH18nnZ1BgYFpjUBfgRjUckSedaoiwdy2gLJqDBqfkFN1pMNhNH1Ax6NJLmw561jFyBJqMbMGrKQf11DN8",
  "key40": "5JZoWkjosX3PqeZ3v3siR9ahXSuhxymcUVgbvYER2w1iMYtAbDgsrnuBDp1ewb3RTT5kqa395EwKNYneUYjcXhkh",
  "key41": "eLbJyfLzwwMfJnEXSPjbVCwpwxLCPG3J9fTfdeqaAKhNpPuTft3hjBVFduZGAtWsA5nc1H6QAG6ws4e9z2KXvjH",
  "key42": "mvEZRLtWYH1bAad8ptC9zfNnFuvE96NMrcsjdewiaxGkyXW1qzJDUzHMefNjr4RPs33GRyNyDf6Q6iBG6P7fUSW"
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
