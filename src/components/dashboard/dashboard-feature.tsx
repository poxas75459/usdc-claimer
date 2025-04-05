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
    "5gYfDAnkPEoSgvF2vFnJ8RNp16RmSsyuwZuuAfx3JgMPnztq5ez9LNNQUY4HavCwAnuZixhqq5yqrTdVmxHpbpBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYyi3DMVRDKk23ESWSBWPNs62enPwCBHVJmcfm1zsCk47dnYA8hBrMwqBGJM6LSaVHZzgupFA9dWG7qKbVDZzeN",
  "key1": "4YXsfMLYWJ9wSBQ1T6ReBd9iEWjQwMczya7AEe4TBL2JrTpn6B8FYyvsGx4homg3B1wzQpFJPpUajcNpToSNxcVw",
  "key2": "4yijA2Ca5xJfshLhCbRuDLgV1D8fnRdJwYay2drTg1K8wzWV6wwux39hSc7fosNsu83V5Rj5Bh27gBPWPMh9QH4N",
  "key3": "4M7G9D9QTeeKUkb2pirzSJJ1tBsEBVcrgEAydgjL36GgTyTBZJQr5Uqo3w7uKBAAcYSr2ZyVKvPMNUGwSYk4yzpc",
  "key4": "3wH24tEBXfvV5KCScuDah63FHVQfhuybLShsuUaKkMhwUbYr5VS9XZWbzEHYhiC6hQvGiyKCam7Q68bWGMQr7zBr",
  "key5": "58KovjtkXBFBzTmaBnZqFAwizoDu9ACjsJVSP3bHr44AGAyYeinwJZ2xf9vnABiGtKtNv3yKjPYGzCZE6SnSuSdH",
  "key6": "4hJLt1rZtwUAyDPvaxgv7Cr8PYLDtFE7uKdkK1DKZ7p8vrQ7gkp1hicx8tME1nPm9YSB3UCB32nAFRHxGRAyEqCg",
  "key7": "a3ZFEUWQghBG5rkfcsKyG5aTwb9vmnYPkc564BBMz69BD73arwSrciswwyDZ9rQayiwUDTBt5tjWQNSmsxjTgh1",
  "key8": "4Jz8vcWyH76qhpGbHmY8fdjWgk4EFPZJvk3WAfksJq6im7yfEPQX1RoFbd5dENXHsAULT2og5BfRTZSPwG9Uaxnh",
  "key9": "5jPobhaEKSLYQ6RkE2BXffbeRkdHEKBD92t28zkYDnV4E6JWcbNJ8w6pYat8z1FLRLrj2tmns3DfBeAQvG88iktR",
  "key10": "4YsLi5xGKx9qBWXr8d7uSR1GyRdMgdvo1B8F1fxCE5Zxduo2odgqzh77VzfJnMuwAwkJ8yuwFQMKuDybxc28eeik",
  "key11": "65JCtTM3VReLGnUFcNEXLhabkte3mFZuFBtMaHqL9no47m4gb47HZVEM5rdigR4R3RahBk4pohGMHjJrXLSmw4Gs",
  "key12": "3pk2XXg5crgMakFB7HQ3ZvzKHtKqxAAcjWXnnS6fWAqNbhdXvHGPpwDDqkwo23WiVB2BSP3C9r3W6qThtLhgriPz",
  "key13": "5ncRnMg3XzAUJyutWSvUHnptGMgnDvZJxT1WKhma6hndcfftw9MUqDAsuXHhVFQBtbfXwUSGZHVpiTUWjJNekVnc",
  "key14": "JfPSFYRvZVSHQFzcT7bocW8YPXrpxrkRNFZ1GHYggXu6oCWx9jBEPrrM87pbaK39x1rzdCpV9qLtzP4unyiQZrM",
  "key15": "XeSNqduqj2jV5brcbgVsaFsT6gud8etw2ta6t5zT3nvq8kG3ML488arK41fFdoxUgudJs56pas8N6EgUBg1jDhx",
  "key16": "3Sw1U9bEYgsvCqCUXckRXs2sSgSWwqG4rYmXYGjA2Xtfa1VhhncgKkJWrZvvfuPpzPk2knry5mFfiYkecTgqM4dG",
  "key17": "2a9y9jRpKGayVewc4qfE2cMFNuNuphPxkdyM8qzkiEV7guysdTWXof84bcLBubf9fs7yQmjYDyo99fW5EzTNBbq7",
  "key18": "MsKgAYCMXqVFntJGmQiEu5QWatEUFsvNhPn6cEWCcGRrRymbir9tT6ZxXtAzkWVYZUcu6j3o6JsvLypkXbPQ8F4",
  "key19": "NkCUeY4JXPJmqG6dsxEcBEBys58GwjbvKhs6gi65FgnypHNp7oEpozzyatDPAoocNc8RgFH33YcLajNS8t6MwoT",
  "key20": "3gcedaWVKaArhzEq3hn1x3YZVwRdVds9DL4drqRo34j3HEebeAKagk9V2AKoZBU7Y6SrwRj8FPtncnjp6YqFf3dJ",
  "key21": "3iwFgg5RKR6jjt1BZo7j48MUS6dzsWgr5prDWbC5xuo7yzKVs1CNc7CCrMpvocwtcULouXC9dmuK1eamiEbq2j56",
  "key22": "4SvLSB636hkC2zEPJMNHzDXNTT5p7aiydaShDrAQ72t6s26vb9FWmvkxkNdS354t84JmFATEYfoJRMW74JHUUHRB",
  "key23": "2tu9W2hoWgQKYSBzEUBQMi3VFK18UnfNSgYsVodWEgLR1SXsjc9vitfrt4wK2hFX2krCud25MujsLvmyQfb2yX4X",
  "key24": "4itHB2wY85TFVYm9D4VE8HgPHLPHQTzoC5XEZb9nsDvRFMMEBRQkwDSH1BUiQq9d9iRqJLKb9xC2Ce36xWr77Pdm",
  "key25": "43nSPiPBwvxW56AqBmitLpb97v4hSopVqAYbr963EYPGjnxA9aGsUD15JrVqVf2v7rGpbzpQ5uMPoi7WXYQJ6Xmj",
  "key26": "2JJcnQ8eEY8QAdLcxHS7FsdhDFaFk29qa4LC5sqAmGqzA7SwCxUznZsRcohsUmSv797g3mKE8NAiPGgzGY3GB6GM",
  "key27": "4c9LkxuaRvPvbDECNRfffwhStqnNajKB1Tf29S4mk2QadDtxstqDEdSzcSag6RS7zoQ8ky6kw6J72bt38jRnvs5U",
  "key28": "JxaSa8eDS45njoTD2fiupZBdsisnzr9WYerm51r3kD2iT9daoMCnJ5Sn2iWbTm4D1J9DcqKWuaRjk7TU9Dkeo4v",
  "key29": "5fL6o3tZiqqZMiiErtpksUCwpiqSX4ED2n83TCLFdi6hPYbsAXRpZ7nSpQSFfQLAcU71uBEN3k4Zh6M4bSuVVXyP",
  "key30": "iYLNw6tvsdy4t8xHZaGKQQxobACAHTxhLaUuomvTHtoeTVgKnXonarUHHZfN1tY1P5dMM6ExADqkAGHDnY541o5",
  "key31": "3fgPvdZ5Kfm8uXuvi2Xs8EwDJf1DD1upwvebH2PV3rmZPGfhhtCbDzTqS7iymq3XAuQAqJf2Vi1SmP9svZyJyY3p",
  "key32": "4Ttzv533qYPdHyU1DoWTfbwsJYZ772WVvGWZjy6doBbrpjRP1BvYSPNSfVNQCuH4wJf6gAZbVZ4npn9Vap6enAYx",
  "key33": "3uihVgMGUVwCEY1NQw2FHC72DgBUcqSxEmCz8BbnkLPhdrpGBcyYtwnb25aLJ6BviCohDYB2A6VqiKD551ieEp8Y",
  "key34": "2BKksAsQJjjdqSpAno34GKbkUWYF7H6x65UfqChh1Y31DUxrDmKfrxd62VJRTQgEHASy3phHiU3kBUGPvZ7qdsAq",
  "key35": "4VuVRAVYGYV5QnebHEkZS3izBoCmZkm3YxQYM322cq3ZRJyepYFbzstSvfkZanYhzVGE5ZqVSALWEDvXJmxC9mGo",
  "key36": "4i6VcPA61TgMvLUwkQDWvNSERE4pVkzrkMMdprQHWKVgqqFupPELyDqs69LRZUhaC4AN5emmrZgRTN9fhr4fwYo3",
  "key37": "3Bm6bw87sD1CkXPFiSuRv4GWL6LxQjooYy5wiWFWGCMFfXRX7exN7WY6VTxLkQvX7qPx9nRmfHdBbVVVg7HMDzge",
  "key38": "2yTBCUiAW4XF8aKnsxSdY2biwG72gkhiXyf6SCKYjhDDb72BtoBeAcXSt39PCwXT5STL3QYnJbYtj35ZJ9cwWt41",
  "key39": "3mujhrvBaPnB3fX7U2xxQGqYNaSFs6qv2SDfTPyu7NDcqNsCM6U9pADVnSTTWkmdF5j8vusB4gLnvzTVvepP6Ak2",
  "key40": "5xXZyRpk4qPPVudC13i3AxNgc9J9Cmnat4rtXV1NHkLsMY5Vr7m6CoP5EFRYj57HgeAAHsofxfT743czCiaJaf1k",
  "key41": "rKvQDAaAKDfF64uJCPJGybLf9bWxkVWqx7BFUKLnAfuzEMumucGw3aZdDBAexC1Dnmg8nLTpUebL19GfQ7Rtjhm",
  "key42": "KPhyom2zhq1jkyKn4xa7fHHosDZ4JfdbeRWzjo2DA7o93Zx1i8NC7zGomMQjjKufLfPh4zGVyZrqFz184gbEVzm",
  "key43": "3aygsRXb1dMCXVx2Zfm1GNo49uwb7GvHoBKocp7wuULKN8QPG2C4N4wc3VNC8XTHoWot2UPmbLbXXoLomL4c2BTu",
  "key44": "2RbvfNDosXj2xMXgacYTbYaiGtznP4ox66KM8wy6evnQYUidcwkwkAYoLoKFM31Sa4DuSr8JAYVSyHXED9nxbRRJ",
  "key45": "4CVsA66yuaRpUaBQv2WDyFv5VxRXe9WFfjtoCBxHhYouNtYtkW2E4WxSvy99VcL66YhPN1S3QnA8ZVNA4Gmr6suE",
  "key46": "3MvvvmdLFjB5iQxWmyWYnTrKmWbySQoYeNtf3UTAZrwkwyzcRUB6osK4hdewZBc2s841iwo6JTWqmxhn1gawauNK",
  "key47": "4VtcS9fFEGFr4v9dpfgFr19w7jgL8coxFTqqq39DVQtMbNseF6KrPezWAq34HBFvEd7U9AVucGAcKYZ3NT4mSKVe",
  "key48": "3Xvb7j5zkJBGNTVcJdrGWqXhqUk6XrrxtvXknRsYtg1gDggLKm9vtrah2egF8DfzgPJqxhDngBwgDpJEyBgp7dr6",
  "key49": "4JkMpz2R4DgaohrNN9GW1ypqfxwVcyD3ayhPN1JQmfiW8V2dKc6gN6Fz5LhEUyYYSsuVobiiYgUKe5yLgxQKEJsS"
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
