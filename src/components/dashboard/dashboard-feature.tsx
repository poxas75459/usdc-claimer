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
    "3ADMRaSeskCdBiDUzYXZcqt7QGnHAsha948AjWa4F4RzuZdFi3V2mZcnqWi81G1sULyawQwvtMq9XEBF4L4QZiVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DgaPAseKneBVPU5AhCT1G31fNAVfnsoddrkp1rVqZNUYTq8dSYywJZxgJcFACMuKxUerHWx9CmoieCDLqTrQtPE",
  "key1": "5ZjcWyY5TL6JEVwQJWL9BeB5CmBMpu1yePny7CdQBDTqi9L24NgdzEy54pbUxF3FyWWXDs91L28LoLmHhKQuaAwM",
  "key2": "4V4iHaAzv55UHGc55Ua5N6yBxsxjBduCy8Y9xPm6QToqj7tRBNvk7XWiDA8FsMMCi4fmF5KAM59PwzTAtGfJYwds",
  "key3": "4GgCcBvHwbfLK4nws8EaUvkCs8seBVrSHPhi5Y8UN65J8eGwdjeTTgHoFEp6ndZdC3oWmAvp9MDFUVKanPobLkPG",
  "key4": "4JmKZfz7qdqW6cqjn82T3KKSV43V9LhFqY4t3Fopz5k8ocneS7qu1iwcWQAGHRJW9fPYyUww5iRLCGiy2gnTYvuM",
  "key5": "WVSfMmoLnvoux9ucfHTobC5tpqL6kRabr1m3qjyEkG59zyiykZUkWSBHfo7MENQrj4VY7VJABRg4MCokLpQKf7P",
  "key6": "3vhcVnGUndysoVJ1dRStdXDWEJdrrFky9f3xn6aVLfAm8LRbHnjNJDjS3A1VeoggUiBNrT6Sq6bZ5fPCQz7JF8gn",
  "key7": "4KNGD69xXT6SbKgWvns9UbfmhohPGgE1VEJwmdzqeWcypwycM2RwKtY61D82y8ntvi5Jj7rkUPxmVdKWBHFMFoKR",
  "key8": "Yv9EHDrGB8DHNNqrnmWCmrcJF6kH2DUgxYLLjKFe7JyTuwdSCwEWKPyyjkcohphr1PcN6ypqgug7uj2DPzuCsau",
  "key9": "QV4BSiqcarZ4sEnTg8NcZWs3U8vmHihGhZvKwi2wScHK1jHHauaPThEKG4p16gWucTpYL3uAx4g16HMVShW8TM5",
  "key10": "3oaL2jaK1eJsRfMTMuf2AW9JcWxJEaK5ePaXNw7jCdht7Z56NxCoSshmVXECMee1JGEQD58RaozTQrGyAxEpuhs4",
  "key11": "2tPQ5dxkEWtEiysxBkGkgiAym5MACazEtWd3ao2o31d9HkK8442XACrPqkrNYUPxDyH3ySxm3VTvEmxgWug948Ro",
  "key12": "5ELmtVVnqbRatBPd3z9492kzY58m2CYStn8ttHWgjLhPwFGbWpj7m8Ty4reP9LCAkxuGetgViGSnv5gv9FbXxDrM",
  "key13": "4x2pehMXWbHQspaDrQShRJkQs9yzd74GquYqwFpB4M2FCJLBKPgwcqEBnw1Q7j9v7DUDVcrt7AKo9emCdeuaFRGm",
  "key14": "bSAYiuNDLUXa1LHBQN7PbzSEqAyggypmdakJxVidodQPvD1WJoTUyguGqpyXXnNhudjy87P4tb1bKST9n6DhjRV",
  "key15": "2xUSDcPT2t82jFr3H56V187kmMpGMg9SQC8FA6mjMQ2ZjeXX7Dw56NAiCnCFiHiHzfQtC866TSyhYgT5QRwBEDqD",
  "key16": "3CsTn9E3EhwNXCSuzrUHqfD2shfDGn8q9f6J2LnQEqahot9SQmLQpoHtGrKrHHJXytRnoW9ruGwiwPAnYvk2519b",
  "key17": "5fFvzXsXk6WL1jzjRDe1Zss64w36D6BMAd9ifKSVN8pLNUunzSPng569twhdYaRMXdmpF8k7jcKqDshoFr1XZfXb",
  "key18": "3MuandzhdW2n6mRrku2oAK5Gu8ETjbFBgiaTmTkFYgEdG18rqT8TVxfbiznMgtqfGJuKLm8jBkiAJKCuZahPRMiZ",
  "key19": "53Y4vWiayRJtp7z1Yj1NEuUpf3LNZPBhRUKRFArQCAmVQCAyMr1zwG95dGRpKsotjMcg2D4TMrvcFkpJC5op6pZJ",
  "key20": "BcVxRQBL7mc6fXhGg8cEwGwP2QYABtrzhTYgQTm54AEVtvXotURdfZhFb4e1dzDFbskaExBvngHFmPuANE7XdHN",
  "key21": "4NsHDF54eDeBb6Cnk3f3FtZFMtGJNDPfEaYSmN4GQty9W6nLkQaHccgRbFNkMmtjenwbQTmuQdVoeQxEb4npYvdt",
  "key22": "MEquFATXqfPbQSx8ZkG78UzMu9tA142TcDsJawPQoYz4DeYVqE4HwPXPQKyQz2f8KMqhGqRkZErgWydXfGseiKs",
  "key23": "5a6BdDsgUpPiQ3D5Jk3hwkJUiMvWVSfGTuXLvppF2E1Q7o9WWdiEjNF3GVPCZ8yriLpdxLbg7LE9DmmjXKASvnC4",
  "key24": "rVEmX1SnfcN5QoUxJDVrJtm9oikbCXUJzSnQk7gwiB4XoC8fHgQq6RaZxjzBKpqiTrsKDXk3F5acoQHGLLfe8ZC",
  "key25": "53LiebZfnxvgsFH1r2vcQTzwsJSPzeUi3s4HuEQ72N8meYVHgWoW52gQZMetqJGPaEMH9CJqZHA1wKNzBhvZKBix",
  "key26": "2E9wTqPLvxkAY1iHa2WN6dDsaty1njB35thGJYa9gczcHq1AmJnYgrpo4rtjrQzNADKR81s9ML7dJUE1r78N4xpw",
  "key27": "3zRqNEb7nXPgfdKuN14UZQqq6jEenypgsx5HhbLwywzAxMXhBJ3bzkwsXsQMQJqH3WJTMwygZt289FKV1wbPkTZH",
  "key28": "64c5MeGgmirMjDRaKhhLoCvdZnyHNgTaha8QfMcgr4HEHWcDW1L3V4aL3hqkt4xyrYCKZe9j8u3zNZVUCx9Q6NYt",
  "key29": "Y1HZ4pVYmWMbgFpNQWM7TH93PLstzocJcqbbEMvYYvSqojx7U3LeUJWdQpndjkVKj4LEAE1oKuBqAoLnuQKSMmV",
  "key30": "38R8iK8JfD2RLHT1TzXgPhdcyvWc9x8jJ1zufcrY4xNWfu8YgidGmXddC51AW1ZDH4AjKvYEQ1HKAbyTGgvXY9t3",
  "key31": "2pAsAyoJWczmVZ5dZwYynN4MrqAviqJXBf2obFAWivJkDf4bcaQruignZh3SnDWx2ZsfygiwxXHHieKZHyMSDbiT",
  "key32": "29Kp7wPWL6h9oQnGfAWXM8e1GMB41vhquef2ndGRVAAdSyVyfRji7kqu56gjaHvJRK5ZSQmA6CarmNX66bypGTRg",
  "key33": "2uVKBnNoisYomUTt2JnG5i3xJzcFgLAvf8pj1U6xkDhojUtY4yFuWnxXvGAvcYFBzN4tVJbrJrsD5VahHfSC4UJQ",
  "key34": "28sjqov9KtEvcouaxPdL9M2iZkYjcEJkkExvAUH9xLXD9QZdUt7GcsWcmSyNMzHSmjf9trqJKk2iQtaERjgnfTqM",
  "key35": "5YyJLocZKsH6Snbs5KUjzy9NNaAVDUoFR8o3ZPGApPYz2VTFrAt9rKRWdqAeN9ZAxxzKLwdTiB3bsiYFgYZV5M4L",
  "key36": "5jNvwKAo3LMp9fFSQF6ZBx52g6w555fndJHgViLyv6aUWVc8pGN4w1ZKP4CNwn3Png8uzipkeEZdWm17vkTSp5AE",
  "key37": "4CTT3C6gn6eQGdmDdU7RW8Veq94AxA7EKGPxj4wyELofBez84W6HkLbvZPvC26nF7Hyai3QoyJqbLE1R8n9C7KMD"
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
