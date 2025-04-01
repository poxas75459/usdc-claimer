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
    "3i7b1iig5rkF1WqoxQbr4Vh5rTxAufHmdTmZ6wQ3NrTbKePck3JbCBpoAVskGwX4Pz9ptxyY2XoyFuUBNRXTBAyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hc6sHmLtak5xzaT2hXDc8b1rxKuGkX362S3EZCiWKPbgtkYCqBfH2Jf2mhF2WSkXbrPu7w7469kFFL32Tvsptt5",
  "key1": "yM9yrLo6zV5FuLBhAxF33N2XbwS6kVDDCCDPKXFsPv17YwsNpJqG9y4fsE33FSwHrvAd6BHQEtFEjrJcqUFYtDb",
  "key2": "2beX2Kx6QACFJ3WzTY3CufEakCagDm1ycijJQCQwofJaxcLEEHAjkjm7XtCxxhVWGBzeBDG4ckY2E8FZGVCxkriw",
  "key3": "2Jx2ZjhoTbvZks8NyjdBZQBZR3bSHD76STPqfcovoiMKcGrwXPkBnb1tvLpnySCdkRW1si9Ui3976x7jZXqEChbL",
  "key4": "2sJrDXwTxYpB4WE5wyUpsiuVWpW9PzBgMpsUpyj31PWWv7e9V19DTmrsLf4oARKNBRSqVrVUhntrF9iJ8aa54fSC",
  "key5": "2etsVoc89h2T69jfPkTszqsbHsswWumaRSc4n3XC2pjVZ5JamiYvhHckJ5V8cEpVnSZodnLCPBNs6Mpi3AbxuzvT",
  "key6": "619p9uruPUCDb3dbxUz6J13EYS4mED3aQ2cqPBY5i4DxNtY9J2p7k1FvgRWW3mczQukYTNP8hjBhr5nAM3VbMfxB",
  "key7": "5XK15FqshWTuQopV2LuFJdPkVeetCCCcQepAoBzgh9Dn9YNX3cFokVsiSaV76881NHmgwufkyqTQrX2nkQFbimEh",
  "key8": "2Fms9xQJp8Hq4AEjDScaPmrknHvRAmVa8T28oWc4yy3Gvn42JgS9jC66fDHK76CYT1rAaEZpqMAfFYU1zLTMPg1m",
  "key9": "3bbKq6tWNkCEBaBYU9U8povoS4z1rz4ayhFG3ZumLVE6JB8SgZ5Y4WHaYQNCrVLt1p7QNH6cwG8GBSNVDijXUK8u",
  "key10": "2G71oK9G7NG3BHArdYFVuGKMr6YPmzGLWcUuD9s4bg2fUzR7SgPC5XnA6Tyti9ezbZ4TZX8Q4ttt2HZ4nP7dbMQK",
  "key11": "2wUmNPAyiKiQHmf92DYw5trdFERWhLUtoJYcu2VrFxRcp1TiquzuQ5TjZ47JEf8RmYzZ67GNRaM9Ctdf3Vs7fy3o",
  "key12": "3ej5uRSWzWkzCXH5er1EAx9CLdD1VCggX8FxTQx5NiK7RcBi4gxYFNTzBTBhNkiirqb79U4PiMy2K8DzEK6EkPSw",
  "key13": "3D5qpXNyUyF1pGdKBfiYLrqgMj4R9dUe2Kmb1iGQJm17mNsrWFZykcKNoWJ2rqZiT3XMEiF6PJ3D5wYXGfEfcSui",
  "key14": "3YcLwYoVXF9hRUJ6aDi9uHZeRWG6jw8XPeHJkJm9gz2AKgZHfZeS9g1J4Wd4k84mLW2QBDwKXrdE9BaVbF5zUwCA",
  "key15": "3KvCdDqnvMkn4fgwmtEztL6jkxKHTUwNLheCKu5iV7kjVydUCjER7Ltm6zuQ4Cbcmiw3xzVEvewFQyGwAWR2jExg",
  "key16": "5vzqbM8mhPow2b4ZwAMvJgic7yuaUbaLdR6o1a1Y8QjyhQpLKY5WEkUiTouVcrYepfTtYV3zxVnXh9DaPatAFacL",
  "key17": "5fHKAduDqvMdUcnDqXT87KTesoaNj2Xzkyk45LCCrSnbg2rd2fRTPUGRqgfWTQ4fkKKwR8EbBQE49fdePyxnhMeE",
  "key18": "5Zk1G1LjvD3qgp2E1NFT6Xw2xtLPmxY7mobvHJs7mNDWmnHd2Ph5DSmhzB6oU3d4LjNV4qm3Qvp4zFzFSLAwviiP",
  "key19": "5gZKCptqBRCpqnHTBB3iPQjpdnNqo1M5mJ7Pd3geuyt8yrmHUfSoLCMhJwRjGvKu8tCrPYCPwRo4QZwqkbfMU5WH",
  "key20": "4urGLLXeavP6f3wdurFtrBDD7AZwazf19RvuWQ3Myk4L3iz4Gsot3fZjrgJWdSwjeftNiyFBEQUPKD7hQbGK33Xu",
  "key21": "3AvUMun6put2r8ktmQrWpNiEK8bfUsWdn58ik7RenqNL4yoA4bkgm44VKF41vqaXbE9x3QzneM8J7tgYa9eSNn3Z",
  "key22": "4gX19wY2JUoATqtxHV4X7P2HkPHX9o8L5m4TGRn8no2GAZ8A6TwuzDcskZPKutFoSKue7MWceeufgWdsV7pGgiiP",
  "key23": "5Ca3BvuGGbzBfqUmWR2rvHsoyJUrDHNuHRn4ZHe3EB3B2RCZwPasoqTKZHDMwRe5iqe1AWzuAyzubxf588qZpd7t",
  "key24": "2CrhQF7ue2LNEHcwajx18CevD6YPnqhUSHcFnw61MvM3A3LB9PRbRTufGMYCfF8dKG7w6hJ9j55kQCwGGziR3Ky3",
  "key25": "3n1V5jCWxGmi9oRMZnLNyqkHL1DXE1kcErQjnt4UEw5jBL8ieH9RWpQffFqtjULn9hAh62WAJWvetKzEE7fDTf1b",
  "key26": "3VPzvYPMwfRnqMdX9vwAqJEGk1yBDReqvd7A3HsZmxDu6RoWVsiPo5PHKhQ3SmLDHvDexFvdhfEk9oWtqsjdRG5",
  "key27": "4vsVJRZn2nBU4c2yGJKiNzNUVF697i5kmFDKs7V38SAimAgcBtoWicCbbgKHssBuuyXrEEpGfRb1mRwPy3WPB9JX",
  "key28": "46pWWv61AyVPRoLmYrQ79wrnkCaJpxiindMpyJQSgorTNuo5BXffCFnbkivyWjz8eEdnqk4ycF6XK3YaZThcetgL",
  "key29": "ThqHwDKAmG9LQfEsGH43z79jTMG9JiCb6HoTnJYLQVpfRWVMB2AahNJb3QWsi7dt1nUYNrgFKQsqZPd24rDCMCU",
  "key30": "haq1yBR2Gs6AvSfWVKbVpgpdSfY5DRMGgpfWEcysSRfeuMKhhwrLM6mhC3PEJeqaFhBnNfdTnGdrfsWy4PYGcC5",
  "key31": "2YcHpYZnYuR5NzVVu4tyjUeQuXPf5qckG7T8c22xUca6tbn9dFCLQrWRjzd7tpGvtwDjtGVZeowozqLAzqGPJ9hC",
  "key32": "5WqoQp7DEjSpzXMzjx1f2Yhw36ptqFvVvy35ATN4EA3tLU8ovCHczTYAxukYLFppBh7hBSqtN3LcqmtpeFxL7GCi",
  "key33": "5XeGnV9V1Q15wT4BJUeivaNFoKf5LraqHKQkuKACfTUq7ksnQxHMuf4JgAx966EsL6LMtA1Zvfksz2gs3ggs2DXE",
  "key34": "5ZGHVGc6R8XdkhwTwEdoHTCXEXEXBYRH9sgqU6ceaZbmgHT2AcQrqbJmthavrZM28nW28YRKwtH7rHrkW1SurAQx",
  "key35": "3sjoWHWPVbqXKJhCzeUDFC7tL86gKJDFKJdRidK3pzVjtfwZJ5gqxhsTGrfvBosfUM1ubk92GWifur3cW7kniucR",
  "key36": "2bbDKMqE5gXrAG3fE65iS6jUYrf2LsDLvyUzeJicTov5TEb482PFVNvLxC9huX3QVvDxEKNyKyDGmGTFNCbr3vpf",
  "key37": "43YQmTUuAopx3W5ZGsnLmGBofj8Rqwiju5FVab5SmM1sJ5j2k3NMPFRpJwoizyZhyAAaEMHRafeRXNTKgGvAgwe9",
  "key38": "S2o64RZyjvQqZYGM89FJriiKrC8yvXkhVZB643LWS9YxE7hrgtUFgdDubbvGZRzsqxvXyPwqo99PHQr8LG8XWmM",
  "key39": "2CXFHJbzKXRdYyWcLCD7pvTZHn37hFgDu6imJL62bG71MeAv6Xr5nmARmeMtyeG9aug8oyNUzGqeM6x21qsBP5KU",
  "key40": "31bn7Hg4HLkmpziZBWDrK3ZUuzBcakj6GgHGqydS4NoYe3aYjir92fVjvENNZ7BcMWrGkLR7nqLpxFoQRo811xvJ",
  "key41": "3g32J1LwaPH7er3K5m4LKrAgY24JZMaFaHEue5F8bciQivQoVTqvQoaE9ANUoeNg9gUqwr9yRTV6qQ7qgtp7dZLp",
  "key42": "4V3umYgqHugCV4tBPqEoMSutFXjns5jASzoNUu7uT4zRqyAatAqwxsDzaZN7G7VkC62BtG1kNa8D6CfkyNLoNh5E",
  "key43": "3iPBeLxVGzVX8mkMwL6MwsNyCfoRrZ557ct2p9yNEHK47RbvJSqgWRZzQgLZeZMY68BVsLpA9H43AzQa7gwDkAAU",
  "key44": "4U5ZuzAP547WZHcFzGpffMXbphpjGbAu2Y3uQC7XYPCKiuNwg3Jz75YhcCyUpRLshypQQxyr5T3yw4Jo58usKvcC",
  "key45": "4mEn1MnGPbwUfNbtgtSQkyZehtXPPjFvqmPTVryctRuV2GeXKbAhL4qVkwAhJbE8CcUSb2JcS4Q7TuZZm3Qp685W"
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
