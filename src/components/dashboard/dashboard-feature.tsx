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
    "3SHmPp4ubpcmAau95za6zx4XKRGpHwVxxpi1jRmNQJJnbPho2F9Y9FmcZnzUtzjp5fnYVZus6EgbmSMyVSB2hUVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CVdrbN3HDFHgvQ2YsFB2d5zo8eM8s8PZuqb5wVs9ZChMJ2Dthkc8Xb2XBU2noXw21NVqSrvVeKHZGGtKQhSWgWw",
  "key1": "34QiLRRRcgvHFwvLQXh9dxUko1LbHzrriivG8MZqomYGgPqWhCyHw3b7F1JxSZJYB6zjuFXZKW11dgofhkbU6RDR",
  "key2": "3X2rY9Tijs3QrKuNuR7EjAM5i9zWKAn5j5VKaLjU1VEWah3am3R3cW7yZAxXSdwy6BypVsMADk7wHgkNFcp9zEYT",
  "key3": "5fXxmmp9E5m2WFLwHAeKbCbcFNxt6b5z92qzjzhBcrXte1X9FoSd1b2Uk27W4NmMyX3rvkyQmn33txDx67q9yo4P",
  "key4": "5QREQHrixkKpRKAAqJvv6AbAmAFkh6jjWBDUY1fNj38PAC3zt11yg9g2gZxEJTRjKudtARrmzU37yHru9CYzi1wb",
  "key5": "M1duWyyWCgg8NgZ1aKxgawFoCEqLVnGeAXQ5PWp7MicokyK5RkCq2iTTbanLMAA2cpKDBMeWjC5PEiJD5qGSYNX",
  "key6": "5i2f9mczj82eHLuSCibTg8pyC8aGiEVfkyvKQZADreaRfxPBvWyMCDfdYqeXGmUD2E7rAnCYsyAArxJCdRU1djcb",
  "key7": "4zFkYDDQjN1rN855bv7yTQbD4jWckcMRY7uZuF4BbyCcMvPRRYWxZ2JXfx58Ee7ZA4XYV1Sm9pouqik2hGoWBPAw",
  "key8": "4SdSf2fopdfC6BfLLnJQTnNxw1DLWfeXc7JuDQ6AbEgD8kevDFMKM29R6m9yQeRJvCkiAjBzXmPLzb4nK1PbNhqH",
  "key9": "5DsQKVED4zZhi3qh9it8dw489bTc7bdwgKZQPQeGKncLGHhaTPvs9rwdznrHr8Ro4xBHj2h4zPvcraVT3f1g2UMd",
  "key10": "NSTLXMUYJBdnAUi9S9u4HTywoqsWjNrp1skAs6yn5uHzybmmybVqv37CnCQv8HYBMPpgnqGARpyk4vUNGoiUjXy",
  "key11": "59AhZZb6TfJ4W8Af9nnSxCNvv9a7V9z74QjePqbzoAzY4PetEzZ7tRYibTSNratBpJrc9yN6GjfbJDx2AcQKpu3n",
  "key12": "5ARihPsPEGeEWqbWDtvPwnZLhNgBxzSXXxiM36jtcJ33nGMhkJUy36tZEVKwexcEcKUEBKAW8JtZ3w7PEM7fTMbt",
  "key13": "3iPVvSTUQKRxzJXKD6kcYaWuJNSyz8qnuYD5LyczsCT7DcnW9Yw8vyWtREvjy8tr6yqs98zGgfeK3CRta5R2FDaL",
  "key14": "2zpbSuYkY4RvrJGpB8aDRrbpSGJFXJvg2oSUo3r4aTU5vTLAfn82QB35TUobqwKQb49zAosk3qb8qK8UNw6sRJmN",
  "key15": "2Q1QSp5AqopDuxiMsUxifUZfATb2VPpND1AWq5cNQAeMnc5o17YLHDEryAwyZ1bsUmhb9RUVytmwXfNTb1yT15DA",
  "key16": "4yf7fAZcVEGx4U6WQT5uf8VUkbrrdbdR8RmvQNJnggzaQwD17VCUgr1Npa9aJFoRvyniPcZWuBzn1D7F1u5TdxTh",
  "key17": "2h4vu9bqMtkj2794XMrqiMBRVJXpRyx3JeTEj7UUuxgY7r4SGjY9CYA5V1rS1fuiRfQn2vk3dD6kb23FhqLu25Ux",
  "key18": "3XRU4k1xMuYE151xiSNAm2kedt6mVWSyjgxjNGkddaJFpovtMaQUFnDfQ6Ea18Z1HNuse2Hgda2bbbXWfkDrycsp",
  "key19": "3M39uVFPb659wFAq4HFHey1wA8eLdFrqHyamDeeKgUeSv1fxXXKdnyA6RPiMBfrHGqEgiYfV6JxKCQzc3yHrrcwQ",
  "key20": "yffhUay4TsKdLBmwnokMf2SiRjCqRGP1hr7pg11vmyLeWUCZRU1u55bU7gvQpGonNPsZXXwGnfi6kyWCkiaGvBF",
  "key21": "4LEtZM5ktfdZGtniiHN817akosJj7bQ41FBQDYzKqJVJo1tNLPVVoc8Q9jwSPC395ovGRtxrPY1sHCUPPZJEuvER",
  "key22": "4RF2XKWyfvv14RdS5iiYoGM8t7uSn4cMBD7fKx25diyNhZ3rmg6dWNyPLPYguzm5i6VsVb1xptZQg8DvTpT6nde9",
  "key23": "52ajrV4NeSeUnWr8ioSgw3MDuktQUXyLvNDEPNPydKezj5SkfpwxigPjqfMk1596hDL1KBvQkotX7f8K7gfPyN5Y",
  "key24": "3iyPxQHAmwxrd9GpLzrCeogtpCW1UxNjqjckRgV4uQk4FvwJvdkzmoMpxqVAC2jY5ZkyMrgwqJ4ntS2m1P9h7CdF",
  "key25": "4HsRuzYjvu6NVNRGyX5TYemcGw5sHNcj62pH9AepQykUzt85qHAcokTbnwVU5P6JBLYxMD9skV9sLqL2BgXdeEaS",
  "key26": "2pND9maZHJDp1v2aRq4xSStEcqgHyrx4XHf9ojY48XteGRLKSg7UneaMjYGh4rZgjk1C1uNzX4rGAoCAzHFvekvV",
  "key27": "2Qku9WABnmn5SUvTL9pt1vqMXityEopvPpTb4FFDmutuHEQUE27ipTD4Piykn9nvFZvfNbNSyNFEgRV1FRwRwxcf",
  "key28": "4ZtmEBuuY8eYgdpdo923iEgN4kd2iiWc59Vbr9ydRX9kGXyYarKgLm6gPdXa6GCic9BbUoVxR7drcQ1J6JgEGgw7",
  "key29": "4BoaBMNgsUcn93XgRTnFbAkNuUzssf7iy8bSkkmnzUmocyPQgQ1D5wqC7sSw9x2h3K3WfMZ2qo7WvEU8HCTZJwaL",
  "key30": "5FRuyzdB7XKK1u6CuFfk8hFLF5Bh3eQE1eEULUtfWD8C6PhNfzFnMMxifrcxp9VmhvpMJBoE982yrMWiS376ifGj",
  "key31": "4owmu7jozC1e1GYzn22VKQ4wLjmaudM36UDd8ALGinSVUMExF28ssZeQovdzVGbH2dRSVn3Yn63q5E3ji8ZncgsW",
  "key32": "xFZfAQihLm9QXCP8pzMj8LHTBHuEWxcqZpPR76kdkBUjwNN4ELnCkm5s8RrwUCoTqHy4s7KwFcYRSMkN6YmpoRL",
  "key33": "2cigexodrYjwrEFeqqmQKREST32Kw6vnMscxzMPFnTURkU31zRJo9c9qBbf8Ukuaj92jdZ96a56hjnLZ3SZPmY4q",
  "key34": "2HvwgpkkgjBr9cUVyojSmnSqZFgTAnyADrX91xYhUwLGdwMDtCyiMEuTUFwtCfozfxRCkr8FtEgVmyhiGCMHXosf",
  "key35": "3VabEom5B9dEqJqYyGVhKK3TCVJ1XHR2sSmhob49Ut68H2PpmiCXBQSbNuR5ALXuRiGoACUipPToEUYy3VupYyHn",
  "key36": "5NCyRE7VB9PEBXLv4MwENyPFFdjWoogMCvt9CFyaZRddZhin78xxtNWknXX8jzE5aaWarLvR864jPa1ozXQnX5bF",
  "key37": "31FZr1adwqAiQgVCKKqkidwT9EoLyLBzTefnKeEzz6B8MDDdtrXjXphLF9zLkmZf1D3VdpC3bH5Zn8r81DNgdCXA",
  "key38": "3r8yNW7TEBKZ379hLrnR7hMKcMx9LsVTnVyDRtGZYQSzHo9uanJEiSuhRFCdS5C9EtrrR1q53Jzies4V57AcTMGn",
  "key39": "5VU4fYsgCjvwnFRzJp3GLvyWgxyA6bFRdpA7jkGXAbKrhqCjboe53pp6bG1a1WHp6mWpjaDsxGtp2Nu2fHJUYZNS",
  "key40": "A1C2rHKS2BTbmxV5sRbUKG1nLpaTn6k4YkXYB3idjF4yZPYkm1XGHAdfC91aUz9GSSLBFp1dDD7pbC18kp5t1ot",
  "key41": "4puNnCNhKYVdn75VxkNh1dP2egpMDXrgT3UHn54d5EuxktxLiVwa2oGKgfpBY1XgbbT12n1oB7ZawbnCRSGLY9RU",
  "key42": "5dRfGtaseZd8yWUsMY9f32BcgTJ99fKsZNoNdQL8Bd1zXnLmMbzjbWUtgJk7vAADH2XUu8ew1euUo5Ax3FiFbiYb",
  "key43": "679EHJ5deFgmJjNMUZXVsUMdP9t6bNiFj9jzZ4iQEtMWdGNtyHCPq8T7Gay1VRdRRqBSgFYfRmXMsPSoiNUysxAX"
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
