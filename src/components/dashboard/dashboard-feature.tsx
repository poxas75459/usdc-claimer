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
    "3x5ieagXKn5fzTkR2WeCgzuKKrXb6xKbxXNS8pmovgafqKZ8Z2VLXKks1MfMYRxvZhbfMRkjcrbURPwNtoF5ZDYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AswUHqobe5a6rZ2dYUQAkNzufojUTTDKDqCD1HTWYRCvH5JYxjgUV3knKnbGineMxH9PzoAibNi7saaTSkqfEmz",
  "key1": "3Ertd7gdm8q3XXGG6NyVgqNcobPeZNUiiqymbLdNiVvxaXDPW8nroLfhxnFo9Jh2e5zRhVUBGtuPypiY9H4jAFue",
  "key2": "R1Ks54VEpHYDVzgAveXUSoeQ7R8HEwL2Y9ryZEVHTGZLNUvL7xf9rhqsqUUP6z4Uc25Nbj2GMBf39KzuM8Sjqd6",
  "key3": "2B4n4vCeKbH6xgWu1fxaEVje4KBf5cWuMYKtnULacPpKJKLerQRay6LVE6zwHdQCsC7SQpNdJGsHd9NEDHgeUJpg",
  "key4": "5DcMk1ksjPmkPAGf7RJfpXSkMd6cmQZEhX1DYbbemMHxtZZvxJLoQRVUBxAzKdrsHL9MXNWP8w6MfJj6ZkZrYnJp",
  "key5": "5Qfe3gegEMyGLs3PHEt89QfTCd4Jr2NfWmAkDSzApiM1MRkYRxi8FF5iQpajnPkEHPueaNaDMLk1hX5K6Zpn3dig",
  "key6": "5S9yosA4RfACVw9F1VSZC3yH3pXhQeLVQtnfKyvJx9CCkgR6EFF12s3RbEX3GHUVsJkLVDqHYQdGHBAirMNTYZYq",
  "key7": "3p9eiFfLaxfp2ZixX25CBw9bh4MxPW6HajUchy6ecCow8gt57aMbVqbimbMLQdJTPmLsKjfr1EuteuC6NUj4mnvb",
  "key8": "2dW8y8fskRAK9yoVrC6LsCL8ab3C4NwG1t3zD8is8K85kpzZTjUddXMaFbQekS5vFmXcKCAMpvVhgtJEW2fREa3i",
  "key9": "4ZmR8WwkXqEb4yxxWqvXy2hXacL7QH1Hpj8ufSdPGgJKTuAZXz5RoRhKA53LmAPhoNYiB7bLeNbdbTNTTYKJJ13Y",
  "key10": "46X18XJvsBVaDoGqFrEAFT51Ed4tpgvgbdpfRbtSXTgVYxxn5VaFEDUcRsbDZ1QjgXDbNXiX5KgxEsuqhjNcYbNZ",
  "key11": "CfNz749NdTnNGJRSHGE4VfBSoLcR7WjMJ6xa96KgKXBCfVFyxcRG93xDWEeXDmjRhs7x1uEHL6bj8JJDE1QjfBr",
  "key12": "2VHso71sU4W6BqGb3aLfWbjtnAQX39auJDVocR9pEESWmhRHNkaxYWLShoNTVAEMUA2ma5rnxATm7QRoYkDUSxXB",
  "key13": "4d7Hr9QwU8Y8MzHUfpvirxqoozoC9wAcR4Hb3kRA3sRmEnUrSKEDqfT6SFC89MW4eoNChcKHf8zfhxyn3GS1kyve",
  "key14": "2Q5Yj4rSvbopayjzncQ4o4XH5LdAEi5DnFsD8hG4QcFqyK9wCuN5K4kGDjP3SC5F485fgheyo6mokuWpU2Kk2i9Z",
  "key15": "49jjeYnN28YhVg6nnNdLoR7GjwcEFeuNPmkbPX3aySo2ML8rHgsbcKX3TMK9wVBxMa86jceUfa8G19sFwQsHTrzB",
  "key16": "5xNrBqdz89zDhuQiCYCCmiM9G6V6q3Sx2tpxyuimDULmHqf9yhweTBFFYKuTiaHP8gbsjsRx4MsJq9kayxRjJJac",
  "key17": "2W1ywreYD9ihUNtAVimWLr9KHwdA7AJhSF1V4vB7LWwwqCnS7F2gan7KQhPVAGbTWYxyvg95nn9q7dGhDXgFqcMS",
  "key18": "3Cwnz6n7ixCHrAKzoVwbGJEh6TakStZDpFcQavChBELrP5RYeYM1Zx9U8NgurxkY5FxxAFtF7ry6FAoBPswpjp1L",
  "key19": "3uqFR58sZXHfdkkcQv98VC6nieVYJyj3JP5Wf9m69niDMhQm96YCTdQSDXETp7RYKBKz635JTESqT4yjVMwpWfZ8",
  "key20": "5y5zgfpuSAcPzNkiTpVQAvrcHdU3hnRZAjpuRW4ekkWS46Z8SN8a3tGuWu3EVCVyY6AhcKNB8dGRKhysj5QQ84FY",
  "key21": "384Z3xR9h2oHjzAeJjksN6Hb2XzEjCKKECAQGGFLymj9yV28kdXvzLLwGPo5TdCumXirLq4RFukiNySnghW6oRkN",
  "key22": "2ejHtwAYvVesxGN9K3s92ukvbo5r1ZGrB4PvTUgJX4znw851HrUSuhZLESsHLwv3YFU36AFcA2DSMjaMLBVD1SZa",
  "key23": "44BVGRtvEbdSncpPkgDdvASZSh6kT1usw7opexNNvWy8iFUBJcE8nWhkuWBY8Rev5P8cfYMAh29tGZTJ4z3EFJDf",
  "key24": "2gkohWD59tUjF3ozEewtvD6pfrKbgbJ4VU3w9YawS6mfjCHosCyzzu3UzWytE88CQajUbSsEdPApyi6D5DzaFTAa",
  "key25": "343ZE5fuJgFP5F6u9PjCrQEofhx3LR88yAo4WrtjitRtgiyGdVj6rt3wnYqsCX4VvGSJUZgpmjZ9zWT2KNbgQ54t",
  "key26": "3dw5JSiXkafaotQfWnxW32kAQR2JrMV1DMstyrxjJqzRyTn69UuXqdkuYx2mw2AYdu9Kdw95hD5XbnKaFsHKesms",
  "key27": "dSTLSA3qbVDH7VUDzhTCzfWRUToKuNHW8sfFfLVFmZEkqXup5ugK46pD59MttdBp6Pep4T9naxa1ryHSbNZtjDk",
  "key28": "5vttGpTRcEFnBzy73NJncBzGLkZ3aMbLY4CdRGXRe3ZeCns34PWWZ5877jp6kjZ6TmoCrit8oYqskJBTCPuSxKA9",
  "key29": "5vjGwULYUajTjRB5jwH92HLw67cJsJczPmEqXsFe162HS24vmaw61yQadEAnaci2giDxeC1dRN7vtiQ2eqEJHECr",
  "key30": "4BYEabpyP1nDdGDetDrG4675XEN6JZ5LkwFqy3h3fyP82MxXwbSxUoUGHDDWtZMrhLM4PGt6GLMasdVGsqrh2Bn2",
  "key31": "4jkcCu1NhmxvB82UN815w1LEyAzTnmU2DNu4JusxvXfCF8kEkGQN6yQdqirexzxNA7HiinnbGZH1NzxuV3XVv4wd",
  "key32": "4bjyuqHWiRwNDQLBBaP7W78WGuvAbq12bmCsjYMihZxSvCEKvvDLEDRdik5aNNBvEyX8xj7h7gpAFmrhJQH7pRYu",
  "key33": "pa7Bos6JmJfzhR8RqUamG9ayth1jwuU3wPcpiLj7QLkA2ysVoE4uv8aBddFhZHtjZ5X6UV3qhtLypaFhWP5GmpV",
  "key34": "3H1BTDZRTaPzLfvw7L1QgFvXmRf8RV8mhdyHkGGXrGpSUiAB8ZAY6bKPmBouHtSiaquqQiMupvWKv2EFaaqrjmmQ",
  "key35": "5M7nUMLtnEzb6QF5i6QzNLYZSazQ4fYZEqxdbuzxqzcQgsku7xeGN7s4GhpLVbCDaRkndMXWb4Yo6g5GQDtiSUXW",
  "key36": "5mK1hC83A56R16rvG3k2VTYvpiRqLmngPFndaYxQvm73coebb3ey3bzqYC1394oU22dEoj3Ck1db9ZF54XQz7NJ7",
  "key37": "5Vqz95yYTUWx3rxiJo2yaRQJAAWbAFNwUKYKBFbGJfAFv5bjaEc42uSJVo71x9VRbptSN9jNqRnqvFVubTfZSixR",
  "key38": "3TorDwc4y8NFzG6UCtd7MgTxkWAZmd6w4FpuA8sgPtu42pQuw71FrrN6eFfwvhrXQXP242cKPDuSy8b7cRDB1jEm",
  "key39": "BK3U5fbRXQCDcJ2wqspawfsRQTA6wLbRFzQaEpiYiL4WPcXRBMGUb9HMxxVy7y2Xj2earXBwVZPAU82zAKc8BwL",
  "key40": "4oNQLbkSk4YND5TnwCbvoq51EChKUxNi5UkLwHTjwkfKxVGW5FAoQr57oN5iKKxQRywKJ1Qch4pcgDyDHNZwL5n1",
  "key41": "om6aCpxd5919z6zyrqTSJkNEBqQhHsKnsz2sTcQUTWUhQ9rzCCGFH6E4nztTyvRmWKXhooZ99xH57DujrFUj7MF",
  "key42": "3ocQ48paB7vHLCfTr7gQ8xnHtUrppogjdvN4Fn9oq8z1mtxQcKngGeLdF3QCTr3HuvnJ7CTn2h9sXL1evZp1bgo4",
  "key43": "2iwY2qVmzPLKmgyXNf7jpsyQn3kncpmQug9B9Xm7qAEXGsDLNCkjd3uK741HoaWVN9RAupNi8NRMCbSFxCukPU5N",
  "key44": "2F2yDwXR7CD6vwzbKd6pyHjeTNQ77JN6Qo6qKN8yUV7tzN5D6XH8diggMYqCeuvAhsdrfXotr6N4gFv7rryr4mad"
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
