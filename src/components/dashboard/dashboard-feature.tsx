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
    "2UkBbDR9YwYRktL22WmL4p64KHYBp2k8ZqpjPZ7GcHqVxmkQvcYpVTafRJkpHMq171YnSVQdpRjchsYW819ZZRBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPwk7fbJYyB3e15x9nWcEMawtscvQAv5D78aMNuVwqsydHpU8ExK7iDaxYq5hpT1HxpuTuBLWKfXw2CCsfKnRtZ",
  "key1": "NcwHaVNk18sKf1Ei6cVFTEVuB6WEDs6B4nqnqUfG2xPPoE49WtU4Nmfr5UyFs47QVRGgwMm6y5xf1uQLccWXKC8",
  "key2": "5o8HboFheCbBNwhKFoLGq5iZt4AWGbWgCSvpYr7kjBD9f9x3pV4mVoC8MZ3jYYNShsJoAvWeQjJuNoEsJYqELkwA",
  "key3": "rmtUHHW9iuXoNJq1renkPYJtY8XbqUmJaxiXjWkU4cVLfnyXGWbGNgQsuuMG7KbkTfDhqKbEBEdE9WCfMBuEmGf",
  "key4": "kgpUYGnYRCevEd3H68jdAXV5Kz5nywfbhhvuxNVHGw8U5847spQLXWzTEJsqY1cU9C67TsexxtiUSw7tcppoZjF",
  "key5": "4z8Wvwc5E1sw5Ruj9k3FtBS2qcmqkuJRRhGmN4FXZeLpTEWqRqrfyZUjZ23n1zH5sF25zefYQh3nR3g4qy68vzMN",
  "key6": "dAT8861eTEhHmVEZoWyFwQSGFChrdqdoWxrz6fU6ZsxT2y92SjZrsHmz4uiQv2QM5482M2FXPUB6XuvCpCbPMqF",
  "key7": "4Z69xYis45HxeTQ8UVhR6jVf7PExVejvJWcXpV2kbwamKyVQSdLYyrxxidPz7ofhvz7hQa7yFYnp9UGBoHmB4emQ",
  "key8": "G4Sd46ytp2pLgNxQLJgW5yssdafFrjYsUEGY3R2UD1uL8f2Uq3PxU71RiSqVmuisUPPgf6attijBCjHmXyue4sL",
  "key9": "3h74E5rRsqcVkv6QkQEhjQwHcTCU4bPZyJHWCudjJ56FkaXBEdbgHW7GvZySHQktUf4UV5womJ4NQyT3dJjB2ucV",
  "key10": "HaEUQmJTm3YARWTGsjWXRHVjGATK3RHe7wHzxFaqzTrjPeVefCRCyYFJsSNHBuPL5DNHQjUsAuf5zWYJdFVw5q1",
  "key11": "aV3Q5974Bpa2gB5dPFcT2X8iLxd8ChXY7qpz1fmYZQBqvEjxx2XbWR76FVB38qCJVamyDh7nAKKiS6PZWhr1Ynu",
  "key12": "4J7kogU1dQpJM8e4ZAokmeghfnHFcqSTbDvJMRtq5wnBGT7SDJJm6y8ScyeEyWpaWaWruRKyT3ixVkCgLxg46SU",
  "key13": "4nXnLuLfkVS9xowZbQbJLYxjLyyxcmoSvBgJq7Fs8duFGJnb3XPmTcSdPUnjDom8JJ4UD2vrFLRA82uV4EdpW6Lb",
  "key14": "3zhkqAf4xbHvHvU88T6QjfVq36hoo6XE4buMAQVR614KDnY5WdSt4SgoCRVDZjMrQkKHm5i8foxdHkhncFSkbr8D",
  "key15": "3P21yKWx2smSuzwL8FEqR694RNS6EdjxspzGz3xg4Rc6WxghKoQeSm15ZdiDdXrphMc9n3BZ1MZ8bT8HvthvWpug",
  "key16": "3GPjYPfFq3VhFo2dEFshX652qsF35RLN6mFwSVL5nUcJUGvS83bLcnEgoGwm6C7PBKCGHSeewvCitswxTG9BZ8mK",
  "key17": "3nbffXjTWDHuEoMQkAZdnCUEuS4EuiaXHnrbcCoYLbsJEGVDMDD7GHU2yUtEJUBaXEeYTximoSQb17ctqetQ98ex",
  "key18": "2yRFrfC9nxMxdoaucMgo841XHzMvdBJAsMdVns3zDAPRRX8yuvJxbWyS85ubqGWAnEXW1SbmxQJ2KbBUVaPuuvA",
  "key19": "3S2GwB5p6Lphq7KnmJLLqEazbf4PGRfo3a53Rnjgd8HCdGspEJhnvQoq8zwZ8pDY63gWt2uydTgxv2mHQ9bZj6LL",
  "key20": "2p52AemwAWTZ5nw4ntzDw7TSF13pWrJiexibQ5eSMdMvek8MA3HfiRMXK7jkv2bNZSZriKMw8Gc9coyfqiqK6kHe",
  "key21": "5Lx69gam1Rrxfwb9VGRa1jtvm8a8EXvJZZXK8DM2nwfyur8D45AxmADeQuvtWeBs9Tsq7JEHm8amEBvxTQqk4ccW",
  "key22": "2HWARNXbrAixiaNfzDtwyrwrZ9LG5wbuRQR654rUvgZeS9e3bwBwzj97FoattmNh57rGnaFQZe3QbFTNGR2Jw8Kg",
  "key23": "4nyN8EiDbcR1RZFMEnHmMei8VunCxv4hE4SiKxvoMuJrMYMHUvatxyrsWAeYQiitozup6t8cBLqkPSUj4pAuG3Je",
  "key24": "24W7NQvuHp9oY9ZkhjWskXcpEgXa6VsCVisbSjZQav33jUEXvn47XB2zm5DNXeVLrJgiGd4P9XxKdM2HoQGLjbdk",
  "key25": "4rNQ47b8Byezc7JHukTPrPL7RZqtzCo6GhWK9sajsR8SQanu8jztDQWHBQr1tGc617FnJJ3P7wHy9Q8xYgF7oo9W",
  "key26": "vkkXybSQsBn43pppWFSMfa8XNYDKGbhq7tMctfrhjtUeLMihx4RDogctUD5GR1sZuBqNxyHnQqn2zqqHWByp9ci",
  "key27": "37bCdJeRGaBY3KRafvNT5TT6Kip7Ed584WMY78a5vBe7iiPCarJfdBU4okVS5GbgSpyVkYDU2hjcjUNbuA3JxsY4",
  "key28": "5iJu86iW6D9xQDFZhZM13jmN5PQ17p5Dgcp37HCt8ZEc6yQnb57AkG5j3uNRktbn1Tv49fMgoiP3kX9aWqBZY9Qp",
  "key29": "5yZY5uP9wAZXVnGkptX7ixn55wvakRiLYdP6JXAKDtWpkyBRBHJuSAKqJfLZ9uyYzGNB1jm1qivPuxPQkiQ4HiP6",
  "key30": "5jsFTQDAcFNu6YwJeeZM2RvVRVqBvCG8M4xCNHnnNkjEoVs3xwyBsiakE1bcEfstQ2MqLgFDxcqPpfwuqunkaf4b",
  "key31": "4HVZaxSff2VeJmFLiyRnSi2NXHb9AAHCmdon3zwRrtcikQnoGAEsGZNGicjV3nawq3bjJUNoKXbaE6dkQmMbgBFc",
  "key32": "2wpR9R922YLBADMe1ZZw6udQqJvmiwd3N91oifg1p2b92gMXDvbUPPVG5NmrP7A7FjDBTZUwr5YxBVsTnqAnuDEw",
  "key33": "3qJqNYKRCUDpSv2Vr19r3CWdA8HSetrPsWoE4cBNfSt39Y3MuSzMRQDcDMAKLyt1dpDGG9as8CGKEacUztsDLFqs",
  "key34": "kFRAM77Sdage44rgXb9Ehs8jqKaUj1k8fh7FmmpzHYs9aEFGZfUrpeHnruRinNAr7pC3ipkjuzC5QUaHu6ekieV",
  "key35": "2obA3ED7WVBD3U2hgpc3F5pfCxLzmNdBuCVne3LFtPcQN4ai778cqVBwLNsU1G1c5BP9WjHQnqqbTnzSCA1egjSB",
  "key36": "3s2zxcxBnY4V9X7hof5b9NdT7DJsji42dL6zmMEXaSmD2LgUUUegGEdJJXXbMc6c8J3ehXEffzHMjMaSRuynYFf7",
  "key37": "2bfeEL1C5cuFW7YhZFGzVXCcHiyJdsidHPWJiBXqMw3CsikVucp6gr4mQMkxbjFCP7K7jtiqthefJHeYkFNJ3WhJ",
  "key38": "bajwvDwgtfcwwz4NrE1HmUsEVQ9VZniiN4FdcJJDhRmgNfzC7EbAKdLWog1xaqHfvkiLcf55uaYhX3EcERuV72D",
  "key39": "22MkmwTSbFCSsZD8yuJW8FGMy73agPki2vGjVPwzsAKwQLSEDFuevNuF3vPV8SvKuizcavzGxoTz8DnRqp3azuNL",
  "key40": "4geFdz4Smzdadu8h1tSpyhxiE7WmB1CTLJ59QGxQS44bEB9uD7rRWRPbLjmtX83nNBgHhr7Sk7mLd1AQiPZUoHdx",
  "key41": "DPAh4uKxa9VwMM5EgFpeQ81nr3JpFRTBfKnLJRm9KgWvEbN5Vpx9Bw4MVPjm4yBkCy2pxJ6gwkE9c1LxrKYa9ti",
  "key42": "xWcwUEufJfiGFFQpdjfuhkcA1HVGi8a8Tbup4w5hFXNCVdEUjoQY81vrbY373pRjtE93MQYFvW565jMXzVBWVPA"
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
