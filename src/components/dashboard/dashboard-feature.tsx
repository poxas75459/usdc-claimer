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
    "5erFLaaNFbfCBqdfyA7p7e3yCPXMg28BsYY4WgQ7R93SEgJ1PKpqnMQCUaPCGgNuUBoE8w9n3Ujeak5VixruTQTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VTKMdYMVj4JatrSyTfLtVNGNkqouE8xkxdPmsL8T3Pe39eP6DY6NHWA44TczD64gFCyTfyoDh2PvYCwPAZmqaYk",
  "key1": "5JykPqJ1eAN9NqaCCCaCGcAzbsN45PWHKAbzgsxQ3BsFUmywxg59Bk1JBxKkYLSNULtY72yQbgRGLEoSLvGUCPa3",
  "key2": "5Zf5PGHrSNFFPH3SRYPa6Pw5xDY4Y3ZCjds9AnBnz3eqBmrSHitE3JtWyNaq29DXQHRjVqDMKhvdyRBGi8upTs6d",
  "key3": "42pZTucmyhwZ4KepNf1WscsA4BnWh5W9gBsz5W6Z9zBw4C4HN16t2kX86uVmnprZLB7sDMrpibZ9HBQmhZ7GiH8T",
  "key4": "2Ut72Yx7i48Dohv2QJunq9yoibbPRfSo5L1gYrXYBke3cbnDK2QxnmUXrggpDaz1TwJUf8ZPzgA21u3k5tPoHsiW",
  "key5": "4PcNsHYfajuKoDmnxbH1WehnXzRxrEyp7b3sB6Rk7ttyMxUzSMvo4Pw7AMKYM8GwLcWM5DFXL8H9w9omPC3DsnUj",
  "key6": "5r6FNSf4W4yy3zvcu53NjZNG1Ai4YWHyLi8m69WdTnrYXG5xPRnSdgK3PHCLdw78ZcAqsjoXLU5MoqUfBLv4h94k",
  "key7": "3Uv6URbACJ3u4uJSGoHg41tjFtjrcpp4xRxtefvZZStgNdAKh128ckz8Ten8DALNQSpKYyx3BHXc2vMd8W4ngV83",
  "key8": "5VqxRZxVeY3CbtSsFf6CuCFdB7iR6DshzN2cC8VdySdQdehL5vFQr2RCefwnUE17bM79FEnwrGhqQibWZt9CtHMd",
  "key9": "3PZeXbqFxNWuqcvYQDG66Rx2qHeefz98v8ehQFwpd6NBGPRf2aqpAPEddEJLMeoRyADjjuJkWWmYdWDEPZTCjEN9",
  "key10": "2XzAJPJj572zBPdYQN9buoBwzhrULNxtVLNDstSzFFtH8MFoNzY4CA3QUKXPzVEd8zhYCzVLvVurxkgms6DiCPVp",
  "key11": "43rbht3JQiMrEkA345hmUroHxKAEm3K5qzAeLQHseK6d2tFehkbbNQd8abX7UD9J2nLfB4adnTu7ibaVDHjiyvSn",
  "key12": "2SNXNue6mHPHAESLdFiJbvVR3FY47ZkZWVdsERKPNY2ZnGugnbbhjxEd4BJ4QvHfn7sqSUZpuo5NofgP3b1qW7JZ",
  "key13": "2npj8tG8nMCQKpgTotP9oe3oZXKVg9Z7Ra7YkW1V1QFLuRxij4mwAGV5cZGUfwyAPcGcibYViam89wSDWgATE1xJ",
  "key14": "4YTgawf4CgM9pXvYKhTcqPVzAFgUmUgoL4jsWWTSEcs9guAexCNVn8oQDZo19jBv7atpyA1X2vk6dd28BLP2isjc",
  "key15": "NecmCrkkTtbRyuaaHzYx3bTbWnw1r2kwdgsWXuVVvZKVfJ4Av9r9FhamxFLAoVSg71zXzCKv5usCVcy3d9abPRm",
  "key16": "3dUjE6pZd3i3XqXyXPHoWnLPms3WhZVeAjCi67kZDBF5fvZyCDSjrmCmgezKvyBjeCrEymNiW9WBF8DFRHxAR1Cx",
  "key17": "kzjzL9QUAS8vBAE861Xip4sHoZBaJBbTfeV5Wey6ogPeqqcLbp96Zs9cr1FpxJhmsbbJke66GaLEzvkDmnXKEYZ",
  "key18": "5v3Yq4PvibqFmTE94y88vH8X79V8MPwxAsjPtZGtyMAijUiQGa2Gi7umhfezHXWynA8kHjYybMzZxKSY8wPTSKwx",
  "key19": "3KwAMCrVKfDdtJ2xLzAP4Lj4neCwyCbKJdLLE3XewmC2WNoH7Q9837fL37iu8rpeHTMdtWZbp1jEedB4ftRA7Naq",
  "key20": "3JBzi8DWFtRzhY4tuEDneSZ4wV8MHksKPo41J7woRfxt1UXsmd5buDPpGDtrm2UgCP7GMXK9J563efTjQze3W3ay",
  "key21": "3aEzmX8ebs2gcufimiGrqdxhu9EbgXZyToMB2C51zw1c5R7sAZnodZMRYyku9NAJPQD1vUwTAQKx7fu7kSfA94cm",
  "key22": "P7U6QfRA6ChGcSmGnvDLgXqfCJdiCC1Hh8U1yXLQaRpySmyZUwjrYYEt2Bceby5egDkSKcyy6PzZwCQ2RfgTPYy",
  "key23": "61k5kZSjBj2QuYfdhK59zo5KjsamqRt74apbymPNNDQDKzpDTi1kDMfrnS7FT42JpK8avKzDCxQH3G5dqnn6QbKm",
  "key24": "3Dzw6FJdzh4MPV5AMfke2dYm2beJwabcrJUbdeQBLK47yUKBTeUpo4aZJAGahMSv56pXWzApPFVkmb3pUiFgCRzo",
  "key25": "DXGZQ9C9QRgr7Wk3UJursyyya6RMcgQj8YwWY4usjVQAG1yyHg4yo66cEDwz2JJmFoEKz9UHaJVrcYMtjjVAiR5",
  "key26": "5NMYc6zSBWuFuAVSPXXTtepPgAcmNhmpwa37BgWGVXXFtr6oYYWtW9cQTMFsQFGZjEamxESCpV13YW2NUA7h8rVi",
  "key27": "5cqPYynU3dbQ4JSQNvc1dRMa9AKizs8ACoKYegABfinpzkAVrQKXhc2sWL4G7Fj7LdfALFE16Vt4Ah9eHfC54JTs",
  "key28": "22N6BiL7feGuCETVwNPwYbUMQP9asizR8Pa9s2n1H1Kst9pXNEoKhMUAKN4ivrDndyHvHiDW5vM4MPcbQrMr7Aj8",
  "key29": "LN7wgij8dm2LsARUfbWmY1cD2Meb9wepgvkxibJgmyY5s2BMTyatLGySwkQzXx6Qdxn9uKg98pt4wPC5Uc57pkr",
  "key30": "5GVofSe5t2kHhyYK4kPPsFZfoyxSx6wbVMtfCuyvfzbgjHB9KdLaU38vMms3t2MJKeDonsp81ny3GPiK8jBzreAK",
  "key31": "3iKMcKYJtWBNaRvuxgpNpzDoCTv1Lt5HVWXkYXTWA41UdVQr15bGXAr7wpyEoBMkZTUzdUmbkawsyPPdFxip1vgv",
  "key32": "4aes5wN8LA5QEkZCnVNxLiQWDNuN4H3ttiXTMtFz6Z6xMuzrUq4FUj2AR5tNsiLa4Em2UxkbKgQufrCbnxem187v",
  "key33": "5KnwTWSdnt3HAEznHxtpWyAsB56neHkyFoafip11Bdjb7qYUxSL5bjG5GRp9KU1fKT9TL7sg4QrjrJ1mniuB2JA",
  "key34": "5Jt82M5JRfbGDJSb3EvUZfV9X6UMa2ibQoZgtFdvkSqNKJpby4ZdEb7NBapoGgXvaDNEjpANfcpfVYP6vooS9u62",
  "key35": "3NoueoCwC3dLiKXo5pCKprVDcU4C8iG3w5e2ew6T9jz797jvUpyia9QysU9BmKfdf9CPs9NPwGEZoNu4M8As7N58",
  "key36": "nurHPCkjRUcQipjLsTeCaPyek6gpY1NgwHGowNQVKc1NvZXZVT65qv6wbfGfTcSYoE3EkgYYTy2NQytciJsVuMP",
  "key37": "551YmaiFJcTLPYuzknLJspuaGHgjnGCaMJux7gTBhdWGs9GMUDbCTKNcCiFgKg8KMku3tXxsNajDpteSZSb9yBc6",
  "key38": "4R68AQvgYu9ez5WkBx5GCEmMfZGe3byZ7spHeE14s84ewEXNQGMroHzDJU5Usfbt2F3kGV15SC2Fs2opUjc4HRWj",
  "key39": "3wk39d9SSgYFJa9dVzD34MCbyRaKYpF9PiB9uzNsSRX83CeKQJijkR4vsDwZtf2A2CJTJtQSg3agbPPy5N2SJDDc",
  "key40": "5oZyVnpzYDWy9LFXVHY1da5jnozFtFbj88j6YYG8GYaHjc5zR7EuVpyFoUxoTSBTjCFgRffNfXEncPXUcXSW3vpd",
  "key41": "2buz5MMSLxJmU4HGZq8ttnqQqN4mj9oQRBHnzsHwfKtgBtJPtznaKpyHnc6yhsvC63dG26hkYv8PnZYSYH8K9iG1",
  "key42": "PE5YVTKauy5DGvn65iNqEPgQBiNPLiC33xz52afiPLAwwn7avEATZScZDKMfp8t5VXEWcDwkcAo6iaAtemQrkiZ",
  "key43": "57MbBs8229Gog6S5pf5U12iH9wfXb2PiVjYpvwc9nNU9iR74AZqRXNExCFh9oZC99HdsT3NyGYCmsHMGsAUPxvtQ",
  "key44": "571dyqqZqN7XK3XGZwCBjZPvFDEB9uhz4ndsELd4cs7M4DTfn8c55Da3vFFPZi31PHxtgPZTi2dv5g14cXuGU5Ep",
  "key45": "4yiT9qWrveeL2N6dyyTqg8pEXAYPWRN8Knd79h9egPi6jW7xzrw8ogpnRAtpKU9PHuvkdiTo2ugU3pY8Qw27Gy2b"
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
