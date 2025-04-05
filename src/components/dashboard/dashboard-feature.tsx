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
    "583Fm3t5zzcJe8zpabxRMPG7Xy1s6jYeTJBXN8dS8jkQyTLrm2srsnrpCHagNzewprVwZeErhkYnCSrcoxs66HiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAc97hY24sz5UNiodUotHmYnFSZjh1mdnQhWMBWbZyRrF3xeAHUfKS9JevrMpQFfw41Gm3AYpVVVNWxNzwUFHzs",
  "key1": "4yJhhjkb6JZAgb1dw6NzoNWgzhJr4sXHLCoyYoyQ6o6xUtrBosmB5tzkdYn3ZTFiCjqqeg4nGYcZdcfhfVs9h3NK",
  "key2": "5ZXcsBxpuwnPqXBPRXQ75rhH2k5CW7bhiNNntK2FLwcvBSLRzNda1Pdc27WqfrYvvVotyQ7XYPy4KKbJNhN7iNhv",
  "key3": "5WJFn8x5VEL8zpHiPe6B5XtF35LpKPsYkKQQ6HQ3LETEnYpvUfGUxcpEAmXH6n5oLJgb3AQJjL6xMiDZWrzKVUMi",
  "key4": "C1v4dKmvjXp39VX5t7muSb4eVMPzku1eMg68gCnVG8mfybrHxadZYMptb1AF95X8Biq8rs1aC9f9qhKLRcvMb7e",
  "key5": "2dK6jBJG2RpZ9wkdX6VqqBQ2JU7qhh1y82eU1NKBXj6GPqGX2f5cKZcuwjmyuzHsTYzVDbVgezxWSP2Qrb9whvZk",
  "key6": "24FcXB1wHZvqQkHxZEzbsGHPQwdq9fQ6VkgsVowdNuho7cyhZBsoJJkwra1nbjP1QpVJq9Wo69LG3wqqk8BUfFwa",
  "key7": "qXPWeiJhstskoaMNmS7zVD7k9DHWRnjh33de6HB9jnimvyDAbJqta9handsrCVqxrFWFjXLDaV4xDiVchCpkAH3",
  "key8": "RsV9vghRTNdqCa4ozxsZZ1myTfWXS3dgha53EMwSuMcQZKzUp1xvGJywuLDRkPkNkydJzeGbAFiJqi6MkhZwsML",
  "key9": "41ZDaB3U1BPznHRZdKBP8hvYCrhL52sW86ig76875Ms3HJq5Qdnrre4RdSkMXsJg4bXfRRULcJ7noDmLJASZVPv3",
  "key10": "3UdzyxceX9MuZn6riwAPjiX24dDxNC6DqLzqWC6EyvgXc6UaEfNS7bnzw2QNXZXekEHBzryfqzS5Eg2pdpaS5keA",
  "key11": "5mWkVuLVRmeNpfA95uPzZNay93Qeq5zZ4C6utSbYgeyRqiCWpWfdLzVjATh6q4bnYPx5z2tPMjFNcU454kwu5mmv",
  "key12": "63UzhSVZE5RckViqRXweQr1HvinKXP8QSWP3SMKxjbkbjaZ3nNUF1EkTdNae2YnPH4aSWvzAwY4LKHmoQVoyW9Ex",
  "key13": "bwG5kJPx1p3HPpwGk5wSfDjwSBD5oUqZ7fP3uANyqRL6YBxUP44T25CkpkKo2wgqBUdy9KvnNYD89yQFQ76cBW9",
  "key14": "3UHQWjQz9jkTCGK3RXZyXbRXibiSGr2Uw8AhG14cUuG7sRRSWiWuif4ahLSJ4YWvHHonigC2gZTihztDn953iz62",
  "key15": "2HVqwfEfSNMQ6ieRcb9zZ5hhuNTvjyDMkrQ3iUnuJfNjj6VNU3QL2gWsUCy2ubA69iDDUhXNJyqLgsbEAEqNwixE",
  "key16": "2gUKLn1mdTEEvo64G6Y3GDcyEStT1U3GptwePbR3haPmDcztPe6bvm7kTcLHhEptENW3iBYLQ4EyjVCCMUuKFWC",
  "key17": "UmpdcGpqTcdtQpRD4cdjf9oUDsUq3WAagom2hcZrhxoS8xNfpb8ft8PSErYFgfgmcBAoFvKSQbhN3CRVB63vh7V",
  "key18": "4kTxPbFcV5zwSwsYMme6xecJHkdqrCGebvQcU8nQ8umhkUdKV2h2m89duL9o6kuuk9a7kU492CmL4Jp64swrcmqQ",
  "key19": "2GVLHtJpXdFHJNvrc2GncfbK6uJViyKJ3z7yveQwPyQFmyxC9zMdSJD6x7GhEmyER5kqowiZ4BBh6wt9v4s3HMMc",
  "key20": "3LxGXskmWJj2CbUwCW6GRFDkbtjNz21rj22zFMMnF3qWhsveHtSHDEwDSFQ194V4xSPDmUERP1E1i64rvNEZYiNw",
  "key21": "GqWybkRh7iW6HxnsAnqNgNiRtUNYCFxJJQ7piS8rWNct31TotpksnSqtERGb94jJUnQWwKq2FLpaCwWTgNHu7tv",
  "key22": "5T71QeUWcd6p2a2Fi98wsqqBY6sU1cqNGTF7D9ZAQmLuaVTkv4f4tKPbN2NzRgoc9SjoMdP1g1jNkyFwy2MJB11i",
  "key23": "2ad1r5foFoYYmBP3QRGdqmuqQv9c2Vvhe7DTzyg6dCivDoxuXnC17FKcxzWKoUzFA96mWeaAyujWp9RvqcrMmQrE",
  "key24": "5HcEopZiKvcqt7Y1iXkqR5zNpQKYv7JrroA6jyukvFw1FD27GkctCGhvucfcU1c8NHTyRWEFXJ9kKL3BrpaDf8CF",
  "key25": "wBJV8PxFn5YEAsBRm9jmG9a7C2DerAV5nH5T3cG1TnmgyvQPshyxAu7AhjjzX84M1TcoqoeAeFTn46t1kuGE6Sz",
  "key26": "4v2HDBt9zgj3u7n9G51x2t1rvhqjkQhkWZXCR7oyYwbJUKMSudByJsXSo2UArPmFtYCkyYVj6rS1kHwaicg4MCz3",
  "key27": "Pxo6NGKw85xSLFvAAz9S6TNYfaFbExYjA2UrdvXoyVFoCJd2jaFcBtjyxDnCVRxaPHtwrUbXKBxp5Get5HxT7Vs",
  "key28": "3SxuiTTcqE7Wa7arzncLc54DnWREJJpa1QXZ5EWSCt6hirSqziJqAMhxfREtMFUXFww14Rwv2Y2uC8K1EBPRf84n",
  "key29": "2A3XAKt4HFtPEgeVu9tf3nNwrTDZdicxwzWKgt2HtQPpieaoKSy7nVFUmrMWCgCqxZa3xbpyGffJN9w2KFPWHcfH",
  "key30": "4MGe1oSsHyftg8PriGwChT2yMZJ4z1QvbTMzc3Q5BFxEE3ath9fguPdpX3gTwhMQ2CCRwe1G7CAz6izwsssvqAME",
  "key31": "3gWuqBeBhWqAieWChkshfitY4SX3yWFqsjKnYDxm3iGBvRp7m9FxvdZ5crm1wM9nqLUwgUqtzptdBZ9MCWzr4wjg",
  "key32": "2jQRN41tkDQTpA88UdhYaSGLVcHA4ySJ2Xvcssg6hFMvx5bu33R56sJGZf41sHuqGSLxvo75PwuXpD97tcmoMn5T",
  "key33": "2jKjhmH3TxnZazCxaqHvczhFT85h4TsbhcCoE2iz3weixVv3xvzDs7H9rJ8J8Acv3JUZZvZDq4WinYK9mYFtBTA6",
  "key34": "3j4PNV768PoJ9ymc5QUMXQTkhsZHgXkhnm8dN4Rp3PVcDKtyfwZDcmiWPDCnDJzWw1ovqzNEAoJUENpixA4H4odW",
  "key35": "3JGFvHZcLRvhke9S23M5gpWBNkwVYKLmXsigSu6PgEYeKayFZWmkXwj2vG7PZaxNHwbDgArQF6WxynwuTMw8qcDM",
  "key36": "RoS71QxoZmSBUQgqaPta9tPFEtxzVNAdfNUnx7ZtxLq3kSGXdcRRGAgSkcAhTScvPU9siX13gNn8aJdwEbWv5HD",
  "key37": "2J7UVBxyyBWJ4H8vjwsUjn61a2APoAPAkZVBF329g3V29UFDKPRx2VSMJigpqf5qpsoht2wmEHLGa4D9wvCMEfoh",
  "key38": "48qB56QmPheeJe3Xt5N5w1QYrBQSwCKYQ8ZzB6SUVNMtyuyzeeQfYjKWrMMVbwhSirXAaHjgFSvQvDyd1gJJHhxu",
  "key39": "4fqXdRLu2q6ouQmme7GbNcc1dHNbTRVnvXyUUBCQNw329ap1krdGEp4SJ6QzvtnB2gt2DChXVZ7WgSJWYBusFCJW",
  "key40": "2NA9Pu9iK6E9Tcb5R3KPKdRuknMTqtkN5bUfHT2CopB6DqtLpf8zUnp1JJisgkHUzQj8wbtnLCfPdBnybJ1N3DF3",
  "key41": "4HX92H92YtkzMFayJVQ5JwYoPSziTbsoAhb3C5P6cuiGyJXcCsECGbXpSwVj2YgbREDyKtY4U9RLgLRy7vm4G4cF",
  "key42": "3D5DVquEEKKVx27aFUGgsxyoBfEt5aAofapqz262pViWPKtWih17YtjfAWBqUMVYtJrP3qFC3DqLU2xG6wK6bpE7",
  "key43": "3X6npfcPrNnawGQeB2yAJWcB9k1YaiAFCC2k8aKedbbsMSP6PvuHLtd8gbw6i3P9Zpf9MUEWRYajxLTHyxFwZCG8",
  "key44": "2TXGozG6AcYriw7Y9nsE2LEFweyXzczzShHkzvUzLPUy7MxLAoLgtxVpvJYJLA6sfLCCbnm85avJNBVvE8Dj26um",
  "key45": "4Upj2fjW5ZEZFXEnL5Tf9uNJvvDPVg6zLtjPBU3a1KWn78z6Dav8S2KBFLXPT8vmN2fz5k36BXC349DKKqrDMzMA",
  "key46": "266JPyQ8rugwTTV42ADgV8Xn2N5Ue2ZSZKLyF7S4QHG39vEVkbVdAPHmkp9AhtJVXRLWxda6CcPpcVNsU1gzpEsX",
  "key47": "21vZ3HRKDCH41GSoxeCd8z2Dxv7rbSxa2p2VKUoA3EAEGdozq9TnF93bLiMr4XAKywbDFtzQKwSsHgVRPvNpu7KM"
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
