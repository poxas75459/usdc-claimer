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
    "2nBnrfSaAwQCVeJNDpcdnKQ7XDj2NxwiZunfbBbbk8aHcaozuk6pQRftCHvwmoEn4WGTboS6WZ6wVRgd6cC5mNdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u4Hk9KVXEy2V4C7VnrosvMcoPLoCyuyYJfyB5D28Lf25WSd3nEsiZ4ZbUaD5gQ8JuHhgexRd4SvsYEZUFijZo8u",
  "key1": "2TwBSYvkFpDffHHF7LZE6v1zRxztQettHGZ5LY2dpJuNT7Vf2iEBz6vwFKSTdrKC4WUen9UUpmSefc8dXEFfnCpW",
  "key2": "hicsGAarWD1NEYtLNLDUwPjqMhVCN418xDDrfgTUQponfkobMgj5K8j4RpZxt1MfVvcQyLBmw7snLtnmQeRAw2g",
  "key3": "bExDXPoMXxnMgctM8eKQLw6JM8igm7jAdboSnG9363WpRfDqUb86259mDcam8DGqLpHN4yx7Kb2AkD7NFhcNDMk",
  "key4": "43RYR48rW9ZaHTmKPyMMgubnpzmnC6DkYojsPvHh3JR5JuGAyBgihot7GS6y1S5zrXHAdjRpzDkPvZhJVS12n5RE",
  "key5": "42LGvCRVngJz119n3duFS2BHTKMysdokouhAM2H4mJKHD6KjU7S6TH4w2RP3MA78vywAFUUzK14p5Zox71sLqApS",
  "key6": "4YTy6PsuhT9WKQ7BJrWrSd9JVDdn143jEHsQpC9wfycEBFzz6qzQfEXiLAV5vjTARYT9NenUeRBDDqv58bEuvhQP",
  "key7": "3Ym4YC9GLhfbrqBnhbekxqHG19e9za8ViPGNdJ3wSLUmaHjUKxFjhDm9jKG7ePWpSHAqyK314uH4mqA4QUdYRZ6R",
  "key8": "4XfPHmKTswtq7qYqpYvMLuK8m6s9NvkNbGon6bezA14zCfBg7y8vbNNNw6b3qKs4fCnCgmWkm8sko8W8Lh6hc5j",
  "key9": "QVaska7R7c76PMwq3GYfNJ1qr1Mcec3m4qb2CBhe3LRAYayq4ekHSt3gJzDLnDC1R42ZCc93TKCfBusFis5dsjS",
  "key10": "2F3kiT64Bth29aLz5HNhVW1Xd9c8GLvMBR1jqbgfwWq6vkDVCXdvyeRZrWNxTaWF1p1Bxm9PR1nwBJZwqXLNcb2Z",
  "key11": "51M8RnrYZUa5TGUYG5ZFnXKeB8jpVjhf4VZofVFyutkpAeUn5H6SeZZoT7xnKor2Sspgty75Z9o8Hxfgqr7rLTc6",
  "key12": "341cKhAVWjKHRNRbvWk99U97iSXMYsH5dETkwX9uoGBoKJdMmG7uFwp9R4xoSSrC6BoHqJaP9CstG8S3Ki9nYK7w",
  "key13": "2GK95AVACGHJ8aBVQ4nyMm6WHge7Lt1NrhRUUdfXTDaAgR11tvbbmhGBKNQX8fbANsiQ5i6cXoBv9hZtUAHJ9zAe",
  "key14": "3kZEjY7G3NP7DzhubNgMaUuPyDUHJSM756EH82qLZsExADzn2XHdYhgkv5TDHFRS3FMfc7MtchR6ZJkk7BejPEDQ",
  "key15": "4d2PLcfHb2phEJo2U1m2ozyTRHFWvWG6o5i7DnhdYqditc7xNFDruodjXP9mM3NZzvRCQ8vwPncAbBfyviMbsvZA",
  "key16": "4EtTA73dDpfNE71TxBwSN9WXRTDYgCXi2z2xq6UF98dWiLXjRLFsY1RGQY4ZFhUGEeTf1Hf4e4CGAYy8eREsKFQs",
  "key17": "5eJx83bXVTyQDSqMHZU4qwseYhkG1tf2QVvmRHEXoBQVsgWkfArbM2JmT3ZYVMdfLwBdbfCW6pjZs1LF5Uj6JQP2",
  "key18": "4dMeZJnc3ANHGeRvXJpwK26pCdavw7DLyQjGXN47sDgeoct1P4pTSXANB1Z1X7d7tAsQZ5Ymx67RsU8Txd6C8vAW",
  "key19": "gQEwZb4FK1i311ZnVEe56Zj1ZzaJpaJ4aKEaFK2mZk7zX4P6sa5GqwDU96kqEK2KA6eK9y4pTUedV19nmMX8KvZ",
  "key20": "2RipRLNasxSJYVZYkKmu8kFU2h8UCNfcg3B5VtUcrYgZGWa5LVGvKcgjQuXYniFEjX6AxdX4XdFHXw3g15gFAkrD",
  "key21": "2NxcZzp81n7FZDitdcJkLfCk9ex1UHner6qRwWvZzYznHsdQ7FBYNh9Bepi5ejDUkdkvtiAtzJHxfUVeRPG7yNdT",
  "key22": "4vELcg9ty6N94kcjhF6EovrxXeKJFAsJcUAQnnPRKQJ1zRT1j25B4REpuCLmgfCM69e1BuJ2xjTkoHBLMx52fBBT",
  "key23": "fan5RVDkyrG3A3yXPCtenHnLkjN641pg47C3ad2gm3iUDazbgh8Y9suCpvsj6HWEG8LurmGC7T14eGoy4Cap73k",
  "key24": "3uGR9PpwgLkcCGgKRiBzaaJxnLsrG45aKvytPykHrDTK2sHN54FReX1MUMn5iUwvRXkZ4rDhcYYEvGCS7J1tZHLK",
  "key25": "43ejS7rU4S5y67Ktx7fyB9qnQUuksYFKNWv8KLw15NtyFBDGHk2ij9HfbcdipLAX3g6oxKTGX3WmuYCGkjKv6G4E",
  "key26": "2ocL6t5oyqzZw6hgVesFEqXF2mUQiZVvRSEM1SgoHQhKhsakRdfkZ8gB2vUJpcmNxAw345zqDRLDe84qfUX5yQHC",
  "key27": "Trvr7bkqsmbrz7B4ibAvETJaKUSKJeHkBcaZ8JAhpyd5uDhS7u1xPd7B1vntvGKLmuQMN6Tz4SC8chxoGPrm2bo",
  "key28": "4qvTmuo8fYXkDaD5iTNz7ntjTbqUiM9W2qmW8FvgZrPSgC56RvRFc2cK9MExbM2MVaW1Quvy29uNNuXTPkBBeG3T",
  "key29": "mafDePx9oykWrrSCyCM7WGtoKpK8mTNbzSTNtbao3ZTV2xWLNvpQpxY872TjhamjcX4RJWACcHC3haCc6amX13F",
  "key30": "3fCLfgvskjqPhPrEAQJswwNedJ5rdD4DbmtZBMLwNE6vr2p4yrxWQodcJ1bcwm7b27ngHw2CG1S12aMrg2VFjmHa",
  "key31": "2a6mNcxNrBY6a4XFuPHunqEAzHrdie7KNfLjoVsDoCHctmgLgeysfqt5PbazUuqxkv9xFkWH3eiRtgCLtv3iBXa4",
  "key32": "3UKz2eN9LXKeVewF4NviD2N3fFWoiGzVm9aU9nsJPyxEAoNTKdmPsmnv6GG72g6LX1vNqhEzYRjrWVK7kBiYUs4r",
  "key33": "2YTbgbP6K3t9XmW1PaqmiVR4zxRwLc5Jg9KYiQxgGLy4RQb6ZBGGGTJx7b4LkDpnSVAo9jvGY9PsnjJKGjWk1aFx",
  "key34": "34GRHhStgLzZkQEYdoGawqodoXBxuFFMtdUE8QjRxhu4SvuyJPYhnh5wTnF8stdJQ6DPcPeihb18vgsuibmTMUJ2",
  "key35": "4XQrPZ7oyoGPTVKFuMkdSUopzeYVkCzebNKTcGnceHaaNDq51Xnm6gUnXbZceWUKUaoxjmWoxNSExbvGZRpAtD5T",
  "key36": "2B19GLXZjzZG7HhkydYVAWcvqdD4FNkajChi7FqfzJwbZV8sn5N1rRaqrn7gMoMjRytk1LTsekrKed7eqmb441Hr",
  "key37": "Ucii3CP62YhUTTwuwDo2kUBFJrLWWugCPrg8RB6THS6PTZ5D4Yz6moGpVL1SDVf28mxQxkPiQyeW8hrbeERN3Aa"
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
