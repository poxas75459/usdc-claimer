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
    "yWPjwYpzvaWf6H4NRw1VKZt7DNS1QoKGiRRf4A5FtgbW1iveGvWJL1GnvUBrmtE6mvCoxXYiesHK2jaxoryrEjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z8AE1Az3x1pumg9WH7Ywc3xKjAcx3uVYN6LU5jUuad5Nv698zoktVLa6uncvbVmC4n8W5rh9xPcRMZ9AEQyWX6j",
  "key1": "256mswYejH6mij9iA8U68pMzzG7KTrr8qmPf6imLhwoxUKkFbpbDgaH7EHSaLM3TufkBF23LhifMcYfWt73ueV68",
  "key2": "5BHQpGRDhJygLU1gqV4ETWbWTxPTBzzEpaz2RQ66m7kZSPuX6w3PfLaadsQxVmdJxPH6CG7bnJJoUSZ4G1x9Gpam",
  "key3": "3RwNFoAPU61dcCuR7gRVLavVTTTEe7TNmoYYywgfuroPiMV4nKwKQvEi8sYrL3Jof8avizTTMzgw13zgZpHXGtjM",
  "key4": "4DJFXF8QsP5VriN3KGkkBykM5tA376bDTCjGNtuyLuGe2AmmRHSbwoqYQgGwhsK6ADsd1HwJgiKoau34aTRegybW",
  "key5": "3HK4QRHzEdd24ejmr1BmmuyPPGrc8gv3uPvy6Tp5pJCVbkZz7uzYskwX7Q3jmX3vqJQ7ZVuf6DEwjfaUtGtJEtCy",
  "key6": "355QpAQb9zRNWjUwTkXKHtPt5uBU5vEX7Mdzb64htKHfL4FBw3YVmyTP3cjyk89boeDL1xhQTKmgqAaJWeaSET2y",
  "key7": "2ws3RXrW9LGLpXXsGe7HfLryAUmojrNZNnV5uhQsgbbXSV2wp2EbZEvxpinNg29onNdZsj2UmabTNXBqCDL9P4W5",
  "key8": "5JHXxsnQBdPYCtQYc6GA8LwN3eKSxFYtVSK1xKP3iMPNe1QC3NyAuK817ua2WzjEC1fy75JPrBALhSpwbzyu9c7F",
  "key9": "2cSDnnHLnheoCooE29HjbD2FzMWkhsAqvYyYTemB67r1YnLcucXMGWUYWynbwS2npMGyYbFQUGXPxyTeV75XFsT7",
  "key10": "5BTk7FwL3RenPNy4dyto3aN84DHqbYgXc88M8259PHPhVC41smfxX65RcABKcN6Uq53ecVgbF1YPrnUyfPGbMKJ5",
  "key11": "QrG7wi4wa7kkw54mu8fx98SwopTouQGdy5TBHZognmujGpGhsLBXQZiwP2uRst5FVK8hwpytEiWtpfw94DTUJxr",
  "key12": "2zaYt6jdGoSwZJ3nnSF7JQYErqyy2zsvzqvXsVdQKR45SUC1rRfQGndrPFXpLuSYrn93bFrVoobPDHo79XmNE884",
  "key13": "42kS8prEvaoWsH113f3b8ftjCzAHgV8FCSfvpe9aqCvW7MNtF1oDJK3dKg8iWkBTNJPNA7Ym1p4SWwC71eYhgHfL",
  "key14": "39eDyHB2fKRHj5wQaHbiJrFm6vHBLgcFVP8U9yL6DUU18qSVNjAP9kqjEJGHuvhyGYqQFA3fDS9zzvgx1C8ZPb9c",
  "key15": "3Hy8ghc954c6bdjQJpFFPtKDR71c8Xjw3vwiwjiUUkLgFpjaWdB2bDs3qDQsLHmg33vVmE8oULzozvGW7Htjz6bG",
  "key16": "4mFtqtef4ufAJi5MuQhrQtFUhw36zyaujYcwbTkjFR6rRmJ3HHR7hjYo5wbcj4kNXKtxy88bQ9jUSyK73N9XoVgH",
  "key17": "4jSXWkfDPxmJ9AwU2Sp9CxEUXFGiSasPpsWeTVFjTMC597dperyTkew7JPb4ZgRqq6oKt3fHfzBAaALNk4J6q7gb",
  "key18": "QqJ2MJJL85BDSJdpRBGC4ewfVhjMxTJQEmqNeVjoJSbNZs4e2rF5QzSro6UtfLZ53mPu2Cuu2VqtHr49HcZUaxH",
  "key19": "yJooRGPcWqqDgpw819XAMGxxdATz9BivYdBNrFpmbaigGYv8Y5uXVTvJT58MwTUskgP6wjYkFtVKMiWAWjNv2FB",
  "key20": "2gUuB8fsCX3wQbRzFWDvkB4Reh5pwspkPfYrVSoKqqHeCrgmDNCruu3LCM6ZqKvZaTyUBeHPYNQX6TFugd7Hv7wc",
  "key21": "2wCVfXvmhLwfzJ7eZLzuyg4whXfGKNdHCppdGP9XrACcpmrzBR5VitZJwjkXU6MSNoF9jSg94Bdq6yN9cKn1UNaR",
  "key22": "5Ya1f3QmFiYUYzCAqMC5C4Bx2oUTPmafQ4xYpC2KS3sjzA3DWPvVp8mxkHGuM3uNw4pdmRvc6W7hLSn2r6MebUTp",
  "key23": "2m8HNv9RtT4rM928h2iCQanSpNMHToYqJJqmnSoSx1d4kGiYQq9xHjQZ9SsMbzDPzK84hHN1SqfcN4WtFrfFxKkd",
  "key24": "2VYLc7FgFXSs419boJgLvw1QVkbXNjK7MxqEC8s3MnczExL7ywB8Zij8KL59effC72eps3bcYjtnHueMo8t6v5hk",
  "key25": "2XZSW73uT9tLb3eDW4UonHuVS1vvfsGpAVZU5xBTwjGYHrgN5oyP2FvBwDRkNc9km2v2c1gWtEGvA6XimQ9EbwFm",
  "key26": "4GW6HDxo2wxLTLwgC2VqxLHeeompkC157Zo16XnjwY82FBzuYXRRPsUNVSpCNBgZajCAm187yPoxGVCdVxkKTzR9",
  "key27": "4nLHBid1AuAAgiYcFGDp2dJ6RHsSrDCAx2B8eFegeLunA4vqDEteZkKWHfXF8CZfhTLrcCtgBPpJZkRzpGibownE",
  "key28": "3R4tvuBVRV685BinjkNfjzvXUVLeY88eLyVhRDidjixLvgZwKZPyJVJp5vdZieKXJKoTbqwX38fHjvkXheH2Sq6E",
  "key29": "4EUPQcJEi5S6XeoRvsX2oM6FYdvQ1uBAXhLgydkGgJNWy44yU2pSKcsR5DSNKyNMuCrAQu1RKawkZMr53gSuazgq",
  "key30": "2B9Tw3fvtrZSEvuE5HrdsSRkTc9jxBk2cbe4rr7s7LeVyWdAUgvjJsuKMUY62eJsLzDdtUZtFRKj3Q2THkaYfkAL",
  "key31": "y5Wprdh2x2LGBwNLyrDvhhQgZFFRvGuZHQf3hLQrey4G7NpLRoWcqys75EMuV6yBnD16J9EN5eCVgTNLchTYJMY",
  "key32": "5Wn5JDZw7YLbtpo5imBAdfzYT7GwJTmBphhQ1JXytXk2GYWkPDBzduaQWCtqskKFZYgj9oKce6D8XgGcX5Wn1dJj",
  "key33": "3iwVQCMxCt2xqo2vNYZdxPNmFjyTX2s4QUjVJf5AbTQsRpLvEnPUQPS1j1YB99ozicyqNFEuKTcQLrDLRmpa7LAw",
  "key34": "5pgZ1aY64mL4PvDYvKhBVwE2P4JsdxQHrkgopXXeAAWRLAFJpksYQhAappSvresasD8bsXSHqGdC1E5LXNUtJ7Do",
  "key35": "2hPaiTiiWvukUyj6QEqCpJJ2Ubn6mFH6yDBgWQuLinCMTooBKswt7PhawRTRGFZY3cFnHW1zUBwXy63m5cLj41t9",
  "key36": "Gwr4oi415nJPSXcG9Nt6dUNonKEPkBiZrm1xfeGf1PKg3Did4Mdpyy93xUG633ePSWhGpq5XAmFfuE3xVQjunqD",
  "key37": "gMBhqevducLVESgpY5QdTYixaFmqDXu3SJKkLNrwL9ycDt57imkM2dpkfPYhMF3PAzRRrbbQgungyJAjYWb2E4N",
  "key38": "4UfU1Eu81NwpVL3aKwf6gn3bthb9QwuwJiWY3mn1wQLhSWpsT36pzWP4m1qL78VBfdEMJqu7V4eDj9g4rQsxbcRA",
  "key39": "5QAvCfN1ktrpDcZ52MwPicThHPMVg1EaCFsDqBmQs1BU2rd3vGAi1W5B4cj2Eqn4xwM2Qv6tSDNtdP1DXxa8WCs1",
  "key40": "5BZ4XrXfftsr47nQw813PSHnW6xVPLFE8rkrsztSnk4pH8P9GREB7B52m37HDRaGnFE1hRfiet2YQt9Y6WrkcHWP",
  "key41": "4RuFUwdhwFfg3F7R1Jx7JdEWwjrBmJxMGCSHmFZKEUEWsyv39yQR4jMpQ4iqzXT6w6X5gdvMywZZdJdgvx72UQiu",
  "key42": "3WuJCrpsvurBTvA35RS8TgnNFBoErRjLofvoj9Y8TDpDYrk4AwgGc5PRhJWpvSSgUBdJuNLSCNgc3zjWHavsMiKc",
  "key43": "2rfxpGWHVnUxCgrBYkn4aNUMThodFUQNbW46xdVTyq7Xoy8fYdpFhpQtcNoTqqK3jnSgjHS5p3b1Kx5LMug6nUMN",
  "key44": "4V5qEN9aAnQVPTCwPhHRFLZLMk8obeZ6F8A4XpQZWkDm2E9jRERCYSQYixvpVKuzKTjF555efutLcro39F2HQtLi",
  "key45": "5DtoSvcoS7fe6kikeFviWCCNkxzmwMSykTbJEXR8gf491U2z7DENuiRdES237TLwEUon4yeC4uTXSueNThxLyZTp",
  "key46": "2EEfHwFUqaG5ULQ4hh98wYPdNVrkK4izEtzaKFyT4x1RNoFa564LQ4rKV87q13X7s12Ur6DBKCzXf1sNRraspkiq",
  "key47": "dBSute6epnrJUTo1f9ryj898zxZpeNut6GY1usf7HcEKpfxfVNxgdrSExniLL7J5x9ZWJpitPk4dJ6fmQ8r5Gdb"
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
