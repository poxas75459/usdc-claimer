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
    "37fnV3hYN3vEtYViuWttndvCUT2h5LSdVZBX7Pwf7F5mkNf3tR8Gx9HQrtMfVWhnnn4mweZLah5Mj4vbGgfj8WR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FXS723Pujz1RfQGsM7fWU7MBSDdgB6uCzoe4uVGPYWwzoAtCnFpyogugNZ2PQwRfTXmBjKKTjxe4fbMB7tESB1n",
  "key1": "2eqJGNGnnq6hxV3qrNpYyoz9p17kWrbmB4HmGJKy1mZJbzNBi1b5Kffo1gtsCQ9Q7MWh59U7vnTEyoqnHWb96RtT",
  "key2": "4VtTyLPPY5pvSFxifCB2aX8evHewVqwijy2fMDyGVTHKekHukt9MNfck7rq5MCLHXxay7ZHB2qJ7wvSsgLVv3wuw",
  "key3": "5WEhaNZ8YGU138M8Cou9YzVPzEGAiEtVqXMRacUnRZxNwkVg7Wvs72kLYCvFu9qSMsU4QdHGqYzMdFu4fR9AHYfu",
  "key4": "24fE4XEQpNny2tE7vHk2cRiczxZKxKv1opeTgkqSGfqgw8VXG8d9tjxgizdKFuiPyY5fFsbFLU5ALfCbfXJQat7J",
  "key5": "ScfTfcpQeuM3mencBq2LYTKuqdf64CGm4u2fYymo1cJ1JwX8sctDWgCnuDAnHtw4eZLjZkhLQn8C2by2dueUSBu",
  "key6": "5Y5fD2GmXxTn9GVASKT3mdhSWonJauCnhKL3gKrhyBaD9ZqQasg8729ff5G27rMESuNk8u29d2wH6phyQpwQDJRb",
  "key7": "51d8FWRoi2bWAWTD9J9uMqU1s5m2hG7UkxFUxJfLz23voPfrD1kkj8nDTEaNL6V1TTZGc7wLfYDUfDF5hjRHfaR",
  "key8": "4zVDBKdBNM1t5DCzn6QAyzencj9enrKTnvXhVc3oPFAa11LGD62zwsujLCe8HwtkYxjp34sabp6KohVopDBakxvZ",
  "key9": "C1MEEcpUgbR2GRApV6wKFuTcJEsywP7cwcEQZwxd425aJ3M1DmFLFqcF3Hud3F979gbwCs3EKrujYrE9BiJnVtz",
  "key10": "2fe2X6mZiM87TKbdNiuVirKV7onc33ujMMF1MmGt94MHM344s7QBz2KECB5MeRX2MUS9jPSZmtLTta9nN6i3pVHN",
  "key11": "4nopFCvMsJrR68nmqQjAUQccmMEzxL38zpzN2dEikWGnauqKhFsPzbVBqnmqpiQYKjUqVFufdWKKF4Y9YcMtQrbP",
  "key12": "5n4UcjC2AEhr526VPwGAndyqUDok9gkAiFqxbwG1h4q2PNU3poZEMi2roMRPHDrtLUrukL14VWQsqng6cqnaSsAU",
  "key13": "38DmAmG2U3iaHm1uyaeb3mwmb5Yw5WcA8LqxnYSh2cauuGdLEadzHw3f7ReLdzKJqkEEamtff4hpFYGGvT4DsoGS",
  "key14": "44NdcXoYAJm3EzeURwgDEpXDNL6y8PGTA1Vkmh2mxWZgtTAPpMie22btVRyAvTux5o8BTJ3CeJftAM1e8vuBeELy",
  "key15": "PFkcQUZQTV8Jcgt8eBtpU4WmBB3cLVkEE77LYYcfVxCchJ5m78QG6g4hqPu4Ff1oHLNKnXx4isAaajFBQmPRoJu",
  "key16": "5c3JAH8yMT1twTkqJpQztrp9M6xCwB52n2n8zEsKZoNJCwNmPkHjwyCT75VS3RjdTJvjPwMW5op1rEea6nSN1LZg",
  "key17": "5fwPuiKRQNbx2UzTuJdTfynM2JhCiK2pTGbJEdtgNWj2mLpgeoCNEVzbshKJd3GuWG8ppH16PAjCorcXVfGHVibs",
  "key18": "3w3pHgjvQSHnyw1iEw5Eizgi2o4SUCWDEm466noW5ZmfMYJ2mQVYpt25y7tNy5wDsxivcLDsiUTmaqtmhcekt5Q4",
  "key19": "2Pox92rcLZHKW82i7P3F8qi88gTjx2rjZh5aN6VyaLXrd6uDpwKRKngwmJzTDufnhTBBBWXBwfKfTa1R8Fko4UEL",
  "key20": "4neV1eKha6cbEYCQagysdLqCEwCyoon2veQAAq9qiNy6HxfcstwvjSPd1qbmnxDxaUEa8Nju1DkceEt1PyMjLAgZ",
  "key21": "3e3Yes3wD67wESYwjS6VBwyu5xsD9rEuaix6bSVuGynxsm2en9VfAG73eNVNHNf1pfGczyT3nHHZ8X1efUZm1Voq",
  "key22": "43bYmqJvuUW9RbtQmZ8DwtaB8ApB5ey9Xeam2M72TUun6UJvKLM1zU7op77M6nMEA3oC8aXfNM2D9HczFhQ3JF5B",
  "key23": "4nRCwrQL3k1E8UDBMg3EuWLsyG3wfWVhvVAMbDL9osEgCmEdkDdrbLAaqsc7d2aD4BpBtyixL8jP25MvE9i66i2V",
  "key24": "31StNjXHtTjYcfqAJy9PiVTQQCNTDgW9coGufQj2ibteaU8gFoZYpC7v8WFFyJjvFBiM828D2gn7WtZr5twspVgp",
  "key25": "344q5qh12tQ3LW8cbWMg3ywrYkYh3fy1voAUC1DFE1yFfZjoHB6UCY7GZnS5HZhB3vFFKrb25j8QorwCJWDda4pH",
  "key26": "5Vongszw7fH1oKMuFBCRBgynZqopZ192Ypu7AiAtLb91cvjqHr2AJYjsaFCTZDFsCRc3fULTwswwycn1nZ8fEPXw",
  "key27": "2tjdcbcjaP1ecPbS8kPeb1dn2p8BbbRPF5DvMBWLeRm4SaMTedf8wVVtgtiVMczdQ3JRcqztFsUz5BizULGxkWae",
  "key28": "4ngmLywo5y2b4eWRZtyPNncNoU6Yx5gNwdAhK6MpTJGRpokPXd2noPjPdNxL5x3kRWYEfj6UrU3R5WvJrqn3zc66",
  "key29": "tSUEyJCYmEc2bNgnDJkKZREZLar67SppGtywPz7Knj7mNmsvaV1dDJMDuo6VXQKqAn9UuEAL9DaNDHhv1TsKD5E",
  "key30": "2MHuCUEB1oErosnY8A5GYCDYLgwr7cqtQHxVdnDHZkD3i5RWn56yKEv122s8TRj8hSQPwqSwugRyy5jVwf3cYMYK",
  "key31": "2cKwHwDAVHbhGet4vNSQomykJLoejwVKvntzdBKLtjRGWWX6xibPemqbAMcRTADKZit3GpF41YVNzFNtYHhQDry6",
  "key32": "588yoDHKjhkePyNZRXUWuUNCPaduF5uocVhnWXbfr3G4Xx8LDyg8mC5NcZqiLpEuttETPGnQUveowiceYZ2gUFhf",
  "key33": "2Dq4u1wnWkwn4Vz2nvwhirkrraFAkUAhrZz4UwYVeJqRJ1HGB8NbaYJ3b7ohKLMDB42pVrLLqw45rNDuGYgLQtSv",
  "key34": "2hjWR4fP3PDqvRCk5wyEMhJL42GWexcyqFAJPVW9MH3wXVxjTF8SRLD7dksg6Lg8Sac1jBfUyVVVqptWK9XW9FDK",
  "key35": "59WL9Mh8DhpgiM9aVUJ9n6qxTUAN8gbtLjnXonKZHXJwPm3QsrTGPvPfh55YX7jzCyB7cX7iQLCjzgVzCusfn9P7",
  "key36": "2tUqit4FRk2mDUMPGY3XbfZndYugdXp4Ee5DKE2eGdj6yF852aWWU3oBGbj8UyyA4tYSQ67rc6dmP2U1qSmNRhwR",
  "key37": "5phtzrFvkfdFU4AQE1QpSyNsrHzjWEGjshmXXYqN4gC3ciVx7LhfzfpKydZEpNFLmiUYm46aKrZQCKssXqRydmdk",
  "key38": "29z2WNQsPedo7gBKopyNmie3JSxbWrnDwEwDTnKek27ARrXYkycJjUXRxtR6KHmy6rYk71KdMqxGmFhritXHGLNW",
  "key39": "am3AKM2HumTEnULP2i5d5ozeyuhxcrygcjKHPw5bReZeCK2VgDNSGfGFvCWdA5PJG6pGhnuLW7UGXbbw4EFSg6g",
  "key40": "44pkzqULw68Bkudy19yJhSShSx5HnknNLSCdS7TBFJWE2zGWeXwwZNPVxShhvGZ61LiUmyxUeCQnhzbitqvyVPES",
  "key41": "54FhvNMcYaw6MMwRyzckucFzG6E8mGkU9sYHHGWLKZUARSwXCksJ9oWYBX8qGE49Hbjoc87GNSy6CqLgQjaA2qZs"
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
