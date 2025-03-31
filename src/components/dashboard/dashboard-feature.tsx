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
    "4G1fAW52SUXuoZm9HFgP6id7Kxy7c58okeL9J6Ksmj7KNcjiQd3iCQcnNZS6Z51Nr24MuHTpvReLZsQ8LtJo9veU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61GNpAjzWknKi97CFQuCmvBU3war7bDkpriYE59vWRt8XxgKxuRKUHQDkKUmo1VVLM55EWuHLx3aFWnKeQxWzzhg",
  "key1": "2ZqmATWCY52xUKdwBgwetYgD88Gh36mowiMjjTr72WxwxmCQQV3hndp4E2DwjARQjAGEKgYtDGRXwFcPQ5s7XvE7",
  "key2": "5pPJ1YMd4eoyznzCNwJnzH99pA63hBorR9KRTpLwELEJoReFQqUPUHhM8RAMaVMjeV9DoxoBWa4QMB3bkeU64Gbn",
  "key3": "5hCg3BJBkpz968RPERHyqHzvmb7Wd14CczJkad68G6UpZeAdtpvtY7DGRePtAgf2iG6fcq5n73zukNUyQ4Zng7d6",
  "key4": "21TS7Qv9HgsBs3RpNbbZ23io4H9Wt58f8y3wDP3GaF4FSPeLV4kf7X6zzj4TGhqG6WNwDkAXWekTC2xKHSvXptqN",
  "key5": "LCRW2FP3JL3KKv41RC4cje8qFeepBjgprd36kEsj2ueyfFUwE9wFNv8U41UAsaVhGh1zaV437mwPqyBUjCBBVVF",
  "key6": "4vZkNTxCUjsSbNCztTqMptgdb2jHwtUUkq1pxH89FqDHH29zkvBSU2xAHnCx6kbysCySwSidoyVdkY4cfG4hDDMk",
  "key7": "3ZGn7geYPs1ijBGyVPR6jP6u9si3gpFny3igXbgFzXSg4KRAThkDiiTy6Wfbp6jbNv6sHhtnFuTdWdPDxZ7J9vvY",
  "key8": "5PWHNrAnqs8Su1H7xiG8US5iu5C8VtxyyVDDEqvNh5PW9sheSqrGcFKB7iTCbY9Ey1nAwBpwgTJLtWmVCauwgiuh",
  "key9": "3mgyMuKpBmy8K4uJmjSC4aLnhmGEymWVLqL95RoXkGGeBYKNTacpwuEJBqxMDyp7vW9JkR3B7xZZ3ZYu4aMZmJ6t",
  "key10": "5GxdNa6SGTenqgAQecbxTpFzXTTLfSsoys5kCefm5Nt6ctUEwpssUS1dWUVVvaLhoXHGMGV3XeANeotai7Dik5rE",
  "key11": "3VU21s2LCxuGXSzf1NyisRLz5THMh6aJQrCv7XewtS3hkxyKQw7Q4ZjuQfnHkdEsmTcUZYfPm8dmGbCkdr1WjMWK",
  "key12": "4Xirq4YEexLAHHvQAV2QrVzgfChLn2VFb8yJdzKYctGmBwwGqeUmVqEmQ8N2H1rEUvpi4jfukuyNjaCaw8TvSQ3d",
  "key13": "2p8vU5vuna1YYUFx4CAtZqS4hAFuxXeVYFPASSF4JnfsRHzVHBCXroCZZ2atjcxKd39WpJC3HWSMdLVY2A5tAoVk",
  "key14": "2wHRogTzFZ5ADC9DvKDSD7DJZDb2L9qWZ111MNFFeCrjjmZb4SUAz3gTaD1HPqxCKMXbUNVGswRYgyFHZNfEFLRf",
  "key15": "43GrJrkrfE24XJCPbohwM6Qc7VcnVBopbx7E3K5vGtRfoqSy79WAB6Ym2tYuHMobf5ffGyTH3VxGMSvkjmrLUwdZ",
  "key16": "5pC9SbBpkEupwkvXB1s1sFDaZd7VmSYc18LTL43iDHXTCnbfDRVQDdShjv6VANy52vXb5KnzQZB5fuyLG5WKAs9G",
  "key17": "2nHYx8yBy8Byws7b8oLanGPwJXPUanNKwKJuDNeJh5LgMqjQDhXYM4vj7ytmYQtRJTcMHsCCxJ3m9faBkRp5ddxm",
  "key18": "4xxw9mYiLf4mpJS4uNagxgwzwgcmk7ZW1waYqes9nHHRk2jophgzCLTXRussRnH9nRKfMJCMmaVyaKUAxxTeu8qc",
  "key19": "3YLacBMEBDLCzYRt163vgLY75DGQfQ45ra9o71u2h5TjjQpqdh1sN9MNUKYyKDH3443mBCuMber1V5iWZucxoAPf",
  "key20": "2ZQohxZoaxE8bsADghHcNPe46DZGXW8eXZeBZ16GvN7U94GGW2rGoip9zirKmVVkejLwpmbz3zTxWvyZXwxprL7m",
  "key21": "PJdFHwT6agZB8prxP5rPAsc77fQcYthwgSdq3w42r84VRwmgbZXdJXSeNyURL8cb7qJBYHnC89CiSwReDYLyPiT",
  "key22": "5EV55LwBCM4Z9VCj9DdHWuPPPe3gTwFLsK1JArJLYrpyNekKC6CZbgGnxfthPNaKyzo8mR9xT5e1YPvThFxitw9b",
  "key23": "243x57M4skfmTXcXBWC6v42mv3aARwmjjNwD1AjPCtimbGQq8u3DyYUUB8ja6QMMTvj5YhzLs7DcpPo1cnswwoXU",
  "key24": "5sV2NCU2fBkHGYURgNGkSkbFJquet1N4JKn8qY49Ff16HFs8H8oW3RmMhAkyvjvhuqWtPdmQNUaZ6as8GKBvBNhV",
  "key25": "qj7NJRUcHyRFoqzteBaDgvsQnv9ofHC6yC9CpsGHu1mWdoP9DunSVqiwnEje6hcBE81o4ZFxBCpaaSesYvU7MQR",
  "key26": "22uotVvUVHZnE4jaNhKx9CZLG7LZ7R7wktpHU3emaRSJMz3bWWT4AEUyw5eLhDdLDxuADMzVVECe5YdcU2YaQ8ko",
  "key27": "4kcZFpQdUgjfXQ24GJomfHjAgjqhTE8a4xXhjxnVmw2XnQ88FznBEUjGuT7meVn8FecR1pp1hZDhz5qgAjXXsQt3",
  "key28": "wvFGsHQm5adQkZbBSWurHwmr7fkT7qPwj4aZLDdVQcPNaVBWcFqM7mpmFWNyhy8AfddCBFsVT1x4QEXGQWTg7Jr",
  "key29": "3KWbjzdgKKggjXLoLnRKLc3pzfByoLQi7P4LQgmSDpziwPkWNezDhbeCq7PoiEDDESWSzEF5zvDXqbTDfGGVG1nN",
  "key30": "5dAhy7Fswnr6weSgrikT9uJq5MX61BjEHA8XTHFHjgix9bzU3SbGchCVLxgafb4BSfpdL3omA94p9FU2tw3oP6wS",
  "key31": "5tHp5CfGFogWNTfdPhVPp83KtLQHSg5hGEumkfMnJhDQ2pXqHBX2PtzqzKw8xydM4Z4MQAdrjffxet9L5KTFvaNF",
  "key32": "5snWsupVL1xKGTdNRxJj7Ry2tjy1HcREYKa5d8ZtB8YnCLrDrGi67C7qdT1QEyjCaSc9dWCwarfquUZ3HdNkpTCz",
  "key33": "qCHTLFEuFLPZT1451hrWvyU1jFYCqNMTyXDsQLcc7BaDfqR2iwE3a8ZPHdhUc1MfyonS1eFaAWzpG7ECT1HzXii",
  "key34": "3FPxDLXzfjDFbCmxpeGPqamTZTyfxUP7nhrvR6eqLMuNFAS4vkSsnV8MASpMNezr7UmHocANhBn6VbTETgYTXimC",
  "key35": "3uwhzXqQSJ2j7vLFBPcP9ukrbskL9UdCFrUpyg5YS5SGG4NxDt7Tmd9DgexEZiimr8yQ8KKX4pfiwKyJX8sCiidc",
  "key36": "35XoVGbapGCGDFU1NGbiasN5xE3UVNiTH2D3kHeNHYfJWmRsZkeXUomMRwbMxtzjEwAbcqM9BT4ZHf8dtDtK8j4o",
  "key37": "2Rka3JzoDpR7h6YERD5bkb12PV7rTNAucmm1izvHwuJKpN1Xb7rv2D4xGu9EjidhdJ17pGsnBM8A7Bdiozd9WMeF"
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
