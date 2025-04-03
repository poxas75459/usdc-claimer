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
    "2iPxNGv7XXJsiqmcxBrvfMihrfXkCY6nAKgK4P42NJNiuujS9avuYsp124Rt4dTW1Nic8GZzaQjdsnkFEmNMDW4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKj9CJw1XmvShue2GaBGAS5FhJTJAkd5WvFAtbwDSVaWuLx7yyw44c5KzGUendpGLEvi8VEbtRRUYLn4YkQfKZi",
  "key1": "5ZRBfWkBfpBQzfPgeXMedjgSpooNx4LHKfqm56NhGiVaBeSVLGGk8FurQjbGG58YkSbn2BFhKxFcNLpnaSjqeqX2",
  "key2": "3onEUWZRLNnJefWAkj2qZnTF4pQMeJ8yb1ye3pV9QVFHgENiMD1bCw3VPqfp5Fd1h43j3PPhUrhBRFuManrZ9RbL",
  "key3": "2es1ZDQcCUJi2f6QYvmLewGcwLMCxvHpGP8ATvaoKY2b2a2mwJBwYqk6Gc44QepLNhMrT4oGN93PnQxxGVfjGjLD",
  "key4": "2x7Ukakv8dnW4b14vJbzMv8uW6xFVe934UhxY4YiagefyF5nXKYorwdeQxLSMVVTwp3gYSwMj5FK6sRueiDKE2Wy",
  "key5": "Tw3D6FZpnPKAqnG2jpAoB13Hjxpc8xoQApS6dCGtKpbNQS7zpwoJDCBGsSd2J9dzs4S2h7C4hh8zeX4nBx6kuCr",
  "key6": "PBWXCm9E97bMxBkgCMALzyARzG3Qr1AedqnJaASgMMdjStfprpVws83NjSPg7SDrsLmY6vzxouSp3VVioQPHAzP",
  "key7": "4P9nrMsVciw6cSGFyZMQdaaGh4kRcJ7Zfuy6A8u36RwiCxbmmkEZAd6PzBd6hg88HBUCJ19pBxLdpXZnGTgw2wLw",
  "key8": "2MCfbh2V87VyvZk1oKy6sf7Q8xY2pBgWzv5gS5rmSrQRs4NUWeEV3hZjX5XZyC5uSJACgGJZp9tzenTqxpqy11yx",
  "key9": "67ALymsT514y3uwD87LUqePVaJtx5EsPKzuAEAqa5XTha1FdkwGZKuQTq18aW1dSefjvYRe5XVcLd3DZqEFNaR1r",
  "key10": "2yEENYwJaGLCv2dWXA8SeDfdiH7jgiiH616D7wjqwBxtK8a7LoQ2EYKsDH5wGWYmaAMAJWFB8ZSkB1rPCfYpywzz",
  "key11": "63PWL2VKSW2dr4o4oWLuT6PrUGCqtJD32c86e7KzhoJVxbiMsLmHNZ5ziVmdPSoejbBREUVqg51TdH52bWaNtd4",
  "key12": "4ZYWBtMQjtCUFqqxDpCJ2B7BhcT1nNAMtwVrfjGpkNukKidDwT7C8nbRFu2nY5ihHfbY2SsJRJh2yQCGorUN9gwk",
  "key13": "5F1fMeY7XK6AuzLBpa11aHZnA1DJYnkHbu2grzMH1F92GLmMpZA65CuN7hidZyn896bVKMYGT94vadQ78DRKfEAe",
  "key14": "4xikdjo8MZRDn2K5qTZTcG75TWbUb3nR2gn3o46AikKaZcBttNoG3gqNWL4e3BRZSZ8hT47f4M7khrV4nVi3xUX9",
  "key15": "51y5YdZCpJzUMyXuk6xdqgJ2dULZbrfxnJdtAVwNhSrKzdyEJtU3a5JQ63997cfQCuQeocmHqHeLnfyHMq2pgQZf",
  "key16": "NjU6W5etgFGVbLGcCPhgv3GEckeRQiaxRKro2eME3HEyJA2vNzLgEfTqYsyW5G9LcsTYTaECtgjNhuFib9kHksn",
  "key17": "5JzL6BmprcZYP8GA99bPGdanfcARMK3VnmXpmyzGhBYQyXuNUvJ3HjJh9f8WNbEtfXUUuzV7eKgNtFLqQmT2xKrC",
  "key18": "5gPWrcyJeqkkSJHd5uK3gDbv2PfBUjnGTmmXkRb6QUcFBghp6PE1w1DfKkEkzp3yyMCjKEkDMsFCsMgA38qH7fMS",
  "key19": "3VBwZY1Nvh11mDvFm8tdE5XQxsRwgvBmEfZvFA8XzNXRskAVNjK7Vq7TtJcXogC3iWdyuX7cBCeXxv146h4ywy4m",
  "key20": "mcVpV6WYGYWFfUpg1J3QEE2hsye8wTQKykQjE6WhXPCaYfEJFEsXDHJBrfx9qu7cEwUAwKqLTAX4ipcyYh411yz",
  "key21": "3RQFmQip8hD5NCtYnxeqqY69nn4XuxTuCcyNp4nuU9dF82iCZUvYjFzuKPGndDq4LiWAhkjcg4FUphh1aFR6ef6B",
  "key22": "61y5SgLc5XGRsccxCDLh1ixhup6jPCUU6TW788uy2FxfkyPDrWKibfrHs3EySyxiojMwKpfkVZDubX27kUpRYbAy",
  "key23": "643YYRurYrx63K6UzUFLYqxB3ngLQBB3qZcRnyzdVK8YRq5kcccE55QVWNcFwHuxdi5MZ4uATsUohpJZzLW5ij7a",
  "key24": "3SxUsLUaJhoXD8ChAnkS44fHfrU2C4CngvgNiAU3ifiQEmQFHKoxNmcpcubyBx3o8x9NmDM5mucKCCSUozaPrWip",
  "key25": "TG4SBpLkXyUxvZEFYpw2VdPK3ZW1NY5trRFq2YzypYDTbnvSKGXVqx7MxJrxC2DTe17hbCKNFY7hVRdiifcUYNQ",
  "key26": "5BAKdB7jBCfY53ssckbaimvbrDa7AxBuRAYm8cAia6vAYtMhsymDwbmXXevfE5CdM83ecjqeiTKgAkJsn3d6zV13",
  "key27": "3FNcQLe58224Xef46sNxLzwFgMbRGVndNgq9UA49MmSrXtzcoV4sNgCDBh7hAVKbMNoSv4m67dFi1koaE8Th6EvH",
  "key28": "4DzJcz8FPGjnRrHzKETa9tL8dJXerjMCw5QJmry73C7Hi1fS6xVtTA5daDpNPbDmPubz9sQkhpTQcY92ZS34UHu2",
  "key29": "3poWCLNdKQMu7vsQ4YWgnoRE66kFLNNUnXKJ67NYDoYp5u2PGWb3KhW7ugdsjJBF8CFcLxdM4gtaKGJnzmn59FXR",
  "key30": "XgcP1sQxnksHoezeFxARK2MouRnuthysPFuv3zi8k4gv15ZoHTk3NCbo8wMrsWs4BSWv82fuCKgpqPQgPgsNcoe",
  "key31": "3NN1LFi9WFDY7FPQuLeDB6XAjg6xtHZhrDfgLqyUfDgDuzUBQS5bBb68KQeUQ7GKonZQ17vj22N1adBzq7tz495M",
  "key32": "RouFS9nJodxj53LhLV53UfS12HJByo5yvYAmr8k7LbG7nD4gg5aiEpi7vZFZTEZc9329777Anwzuit2stwXq8AW",
  "key33": "MHW7mEnUiY3F7b4g3kMqjwBrU7EpKx4Dd5iYnWvhYyxWLhPia7JyH2JqZGYoarrU5bLeJLQhW1SUhexbBexPPca",
  "key34": "4QyLyrh1hCi54TJJRJiJBqWRN5bKyCMUYWnNwd2YNyPnKcF7Pk1vWbrMceAw4qrPEcLcUmLKJeagBj5L5KwkMsEh",
  "key35": "uuRjMszUiPtcXAg1GspVnQEjcmWebWwrGHGv5k6HgawUKGuAUYxhw22AcQnSccAVf1hH2VHeyGGmyUKfs9iNSoA",
  "key36": "3oKrnvmXXUpCfCYpyHGhEVsTnbdA9aS4BY9noa7hiYdv9c4VaevLcDAzzCj2ehZQT1HeRwg2t3g6LJETNhunqZrU",
  "key37": "5rUP6EZoo1ipyUdQhbaE5aYArMnddVgRmwNks4q6TgAbix6BPHJ5qPBn2FjrfoBygeYLVLWkdupMsEvfxQRt3B3L",
  "key38": "3qWQGqACystG6GyX9VYYrNP8xKZgcoA9da4WxbPcuiBh5JgqMyggF6q4rasamLpS6nrtqLisJeDL4YLcuqfSYMqS",
  "key39": "3i1z7U6sUQyGHXbwQpgELZ9895yu6a9DHBhrkaRB5gCeF414dxrZETGdBtyh6zXWJ4GRicc5VMjsTMLMKvqH9TaL"
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
