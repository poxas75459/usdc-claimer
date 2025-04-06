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
    "rWntFFAFzV1Pet9AmnP1xZX3RQqrC73SC4GTu4j1bcH4bdabYnQRGND7rGTKJJo3sGnhKFhs2ZpCsBznuzXXmDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8ttA5R3nE8PEEAyrxajNVk2QFRsdhiZ2MXMzR5H3p6RUKnY1892HrBcVsA99j1NfPpCTnm6MYPW4YPnsc96Bi",
  "key1": "4z3S82QaHZZNRWdjLJe4DGWyNhqJqZUVVxM6xpkLh3xJefusuC1yZ73Nc4KKZzLFcNmfGyu7VEHf1A1Ji8jZC1MS",
  "key2": "49Tm4XKSZhdan6NESmV9Brn5tR8KefPFxgk1rkXq7Th1qXiV1nwX1HfxpqH78eWKx22AntsCiKybRbnCbxj49ZRw",
  "key3": "UKtLm5U7wDa7Bx6zLozTXDJt35ZUGkE5hWmfnfurT1Dm45VGEKuBnvw733qLq8E8YXjtEBhyj4G19fnyWDGzKFZ",
  "key4": "4PhG5u6923QJX9KPg4d3rRAuFgCiyn7UBwx15f2ejfKvNACqtXrLzaQQZqcrP6GuTvaQyEHVon4iN9zhBSSrXo5L",
  "key5": "7u2uDCsQN39KKqBkgrfXTdwp8RCsFwXNRfTaaZKomjpR4F865Noonv5jrFDLuJBNDPFAZm2pz5KUSLt7M8x39US",
  "key6": "3VELEA4LWAYiFES7FLmEkm1Bw66WDX9cZ5X9pNpo8NjKfDUafHyy8XPvXsVe4iuSebBGHcFqupxDtSNGnjzQEqdo",
  "key7": "3uavY7r24gx4WFb9QUwQdJKzPJL8FFDA5wgPiRWNzL9FjTEAe3mm69oaBEMzm8by1Ra4HJQ7VRUG8YgMgvAKoy5X",
  "key8": "WF79Q9fB5iAL9acLuPZ7XqM3kYnVG4ssrqo1r8AhAMsM1CWXtqavMFEFRVhpH1PAhuoqbyeKNwshTX4U3V6VjG2",
  "key9": "2CdvJYkmfmxookCfWVNiapmQpNbgraf22Sbx2XXf2b2CYPfShp7jtVEGdvrJJxiDv1oTsUPe4UngpEN8QaR23rDN",
  "key10": "x3399oPSyfX4ezF9g2q5k3m2387J9fsMNqw5atFNr6z2eTBVDS7YFKEpFDrmkU51MJ9RpqnHMBBGJs8af8Jjnv6",
  "key11": "28wvebfa6ArK3qKBantYrUWMfWrGbHBtqNPhqCGjKvP1HZfXnWqRswUVFFHYmz7HA4hih9B8r22cScQqEdpDw8fx",
  "key12": "2sTSVGCL4e16tsUz6wGhFoJDJtm6mXEMFBwSFAU11CzZnU2rLHDsgBWH7s6aieQbercqGJq5dEubEPdc1oCAxShg",
  "key13": "kfSRKyg72zYRu5cCaq9yz2X1RFcnVY5swZMmY8s3QLqzUa7u5MkhKuhqm4RwfKvhhxThJPwpxvferMXadx1anfJ",
  "key14": "58GxvZCQyQETfL8vyqGhD7bcHEe1J21y93fHqJPjggt95uJ6Pd2TbCiK8MyzSXTdBdJxZu2xrPynM1wQJog2fxqU",
  "key15": "3MSgFXGQK1Zw5VUTPxoMQjoKmPkmMAYMDcUk9aHgpVZ3Kdm2rK6knJXgY3QvzLkXBt9t5y4j9u8KtUUPU9H3P78V",
  "key16": "2Z63TY2ZeG97t37Ss4SWTJeMqfcLSK1LbyuVEcBUP1jamWSmXfu9K9UuoUjwGsNMVmn248moc84b9VcmnhAeGrZC",
  "key17": "5mZthaYENh3zX3VinsZ5XvyGmRXGmtLjFnWMh45mjvkk5k87RdVdqbDBrGUrX3qqdnkRu2BZkjSamH1vWTsRzdbx",
  "key18": "3ZZgXAdGpQ5R5QMCxyAwUXV2BPdVV3sKLxqMUVEKB9tqW7gHRdTFN7ZEg55oqpUbURkqFhYwvkjApCybE94Js7UL",
  "key19": "4zc11mPqA2W7oekLAbigG7h7koh7pcQFV7y389wb9XTfrxuEDmWCtJfxgeQXm88kKhXRhoYQNgDWi9xfUmKtK3Te",
  "key20": "57TFuyVUxbr2UU2z4A7vxv8teUuDHtuM6SPH2goLxLCUhmqXa5eyNzPeUmJxtJWUJHZCAXZbCjriGNBJ6J58byig",
  "key21": "5AzYFSRJn418yCR7zzdp1Xfcy1NQ1zUec3SuVCcsHNomVMMuuzEBLusdqCHspnLD6fZFW3Lz3KZDU3C6hegeJEUN",
  "key22": "F9rDgj99Pcy9s2i5QC3akuqCa2R4UoTfWASWNcpUrCctmFnBK5b7sT4AfgyEDkWEEhDSPGZ9xf6piUFqEi6vG2d",
  "key23": "2dkjqsTkL8Yfu7pCcPn8wsXLiY3grVeCBeJyQNvvfMmSXCxRsCQvQQqkpCSTBtW9fZ4e6GvtR29YgcmLGBMmj7Hi",
  "key24": "4FwGtNWFCNJyjmADunV9PhvcKWYwPuTvyYPpXfLrRUGke1wr9kzm8w9pQG9UrQqXabqS4R2CYJKfLf442AHDiXaw",
  "key25": "3nHpuMdCF3pFwWjT289vEDrpszedtpDHtJ5ZoGd6gzSVyAhk7sx71DgfnRru4eccvn6c6mqeXkVjxdGSbuwRNE5T",
  "key26": "2LjEnJmtj4oS93MQcruxnAgaxz1jtCH9aMTE9heiED6wDQXeBJbdnG9SxLScaPWVpRer2ybsuq3ERCnNCr4LZGB",
  "key27": "t8TqFwiwKZaoPvaksD6gkYtWng19mtH8PHe6npDaFNtYgxhZCVn97sDibQ5iM5XGjmpLMhtkkScNg5Pi7WAMftG",
  "key28": "2ufzfbsefL9H543LTaN9gcsG3KTgmFfHGaXrhvkZKim6qLHWpvP5mL7NR9HX1ie3zhCGrnEKZ6rurjr876uJuGQH",
  "key29": "63CYVqwdys2gNiDmvg6A8TscHs67sgBPzhrwBZMf1K9U1sgPbWky2yPFciVArWftc8V9MbRyBoXDSfmc7RBvbLB5",
  "key30": "r3FyWsUo33HyC8pNR2Byr8JyFSqokRSVJ9Ne8qJEdV1d68r59Fhz4gBgFnXkMLYtoSGPpwU87BZUkUQZdJhbK1z",
  "key31": "56gyUPRxt5C6tE2cvYnzbStXx1VC2PwTvmkfKkNZnj16kPKx6XK13NNaxRPzc1VAQJMvpfVxzF1s5Cfpabs3aRmf",
  "key32": "2JzWe9t3bknwUvnP6j3Ksx5k62wae5KxXekjLJvZtsyEf7JtMCoECisdkRD9vZ7eQDriPfKKihz7wgNysgkkuQxh",
  "key33": "iFKDK45Y4AKceN2krqvcpmVvpH63uX6HpWELZZ4i458TsV2MnY24Mt9WiLSbVCVVopVi8fXJ3S5S2Hhy5JfSyJ4",
  "key34": "PCGWsSMu3HqUQGjEUnRVtcEvuZQq2MJMHKCMMQPrGDvcj4Tqak6tqs4uper2jNnrSmUT8YdkNjJKrYsFAeCESJS",
  "key35": "3ZMAbsxqgFjLUibXDvyEF2AWvcGzrTnMkpDDex6B3gkzWSgMMGunUrB1oAGMNgn3NDi6LZujXrstDpoZ3mJmkQVZ",
  "key36": "rvYrWEDDrcnw5QzWTH14L5nxU68oJT51m9UZZAdveXEeJo26VieuJhGkvxmxs4dzx8DAZ4Wi9GcLjaBZhUVEzBe",
  "key37": "54brqdh2TxEUPZSiSJryJV6325qm5zM5tZN69edZMqxBC4PhihB7YN4GRzeFJ4yGuEpqKs3AbAs3DmDWoRUfg7Ed",
  "key38": "e7DBJcuNS7WnENQoEkWxcBG8688qND8cyYVRMEu3Qj1mbhxV7c7vedroAZ7fr8hEfiuYU6kRtEB6TK7c1A3WqkN",
  "key39": "4EmgrAqeTuheob1Y6yxqeebsyYiLqdr9QfUjzedZ8SYtQNEjgvoPNpCYQWzgj5vNaJyWoniwHc2Gtc1exgc287is",
  "key40": "2tyy8q8tfdQiajvt9EW99NWm9NxzXBdMmpHfT5nN5kzo8CyKMmKSHsNvFtdhxa8LhNNyxy4zh9YZdUNVmgR5mXYc",
  "key41": "5Mxp7JTmqsPTJ9qJuBYg4AJcWKj2yfQwj9uMrkb9nZRHNsa3ShoucGiQtAdCqdkSqXPqxwDSQe8kEJUMd3XTZvWr",
  "key42": "2MHNPwyinpuNis9BR3DDRBS8g5qF26VeLBUYFkzGLcrerXZjpxg2Eiyaw2US4ddMpwzrA15Czg6fdoWdFMu3CHq6",
  "key43": "gD9WdfCUp98LitsgBn6BFsr5UYqN1sZzDwskz1jTZAp2y6AUkmoGMVyBXcXAAi21obts5NNpk8yW4pw7kcPeYBp",
  "key44": "Y7WPEakXxJSwyFbGrWKMnuJph3mx2HEELnzS63am9kivFZNi1xXDUZdLb3XRf7Jevkn2pp2JWwAsot4bYny8oNx",
  "key45": "3wRTQQEaETdx1dgpRBB4n552f8paidhLUqmN9fCNzh2hMJ1x9A4bzD85Pd7LnReT8LR5Un2WyW1wjv3wxxzAF4zv",
  "key46": "5yNknGrqgpuYYYYQXSuxrf2XPgyxYzzZ6ZwSoCDcycWu9yXCUGzZRMUYptHHpKNwf5vXzoUSQrNVw4qgrVY3uh18",
  "key47": "37MTp1kdH33W8H4QLL35hSca4KJNamZZwGVd4fUZXiyLE4839Kn3uDbJ3LHEpZUEMDYZJWpHw3x1cSFfvyPJa5Gz"
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
