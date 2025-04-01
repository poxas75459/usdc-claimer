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
    "31sBK5x6d37Xe2ymTMYPxJNuuMsS2gh9zkNh7oYhuLVCREYqscSgYHQUfQrDAXNPega3Aw5JXP7hb3aYs6LJ5x3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LoXTg9913d8qDf8y7aHcuxwPF8aLJHMYnEtfnjToxKKkyXC4mxBSxoK3bL3i5n6gtfKok78qDW9iDub3Ubyqg5c",
  "key1": "3P6RY4Emtj3UEGZvLHAkJizGWEuWMdt2zZswmRtzBmDD7svY8yX38Yy9nn9Lt1mMn8aBmQx9XimtL9GaJr1EykLw",
  "key2": "4KMsXFNvokGiS93sHMaiuMyc84xiDrdn6gNAJSr1PVDvrsczEsRiF2vEASTVmKcCs6aETPS7JfhzmmBKh1hyQxvE",
  "key3": "5LwjcGRKuHL8kw97RkJVtvHBffVSNA7CkHLL369rrjcVnQaL8GnAetMC9QiZhhhhF6a1reC9TjBDmnUw9UeoygAB",
  "key4": "541gPn8SRPsw27wumsArZv3E78iiQQpDv6wpu3Devix3Eqk8g9JYdfVtCxURU9PzAEz8MvBdtUJiR5LHFwiTBgdU",
  "key5": "4SuxSqPM1xVbYgU4ezGFctAVWuijkAF3svghLEZozEnFX7NCq6MG6Yd6HDRWhngYNtfW86b7kwz17GmUfSbHcd55",
  "key6": "2jd7KQXeyPRWV7L7r82DdUW41fMSrXXN1JMcCHNsHDsr3x11pLkAdYhBF6SwQerGRCTg7ZE8LcYqeaTxpDx6kfzG",
  "key7": "2Qpe62RWobg9EGbZHyfY9mkQuQTKMAnb2fSAd5qwdP9nReXid3WUxCxq1yV694vSG588AEDrwQR46Uj9sRFJMCbf",
  "key8": "5sCutc9uiaGZbzfrFqcWjTeJb7Urge5N3L4PmKf5icayy7SizBGd6gPck3CLjC5XqFUBxtJAMcXGdcYDoxrCuatv",
  "key9": "63h1bGv6dzJzs1MSYf23MRv4zsp686KHQK7VpsXTdUFcoNXSbVMnfDPx9yWg1ikwejqEAKCM4LW9uhPuEYurHwYT",
  "key10": "fDd3noxNGqZhFu2xz5YDmrShmktxhR3DPaRA9fDcE2ZGvVfWg6k8nkbgvVZCDXV5cHiQSHSQnUuRqYGqqjQdZtC",
  "key11": "5mwd1hmZA7STE5WyjohNM8B1yWtaeXSmhs5EGtgktCwck9wQZTmXhRJKKE4m9CrSQkKYzihvs5XGfo82Y3BEHaXF",
  "key12": "5QH1MHT5JN92Pjq63Gb7594L16vnvpD8wvkqmKMZADy9xCiNE7a3uEAvtN41DnTt3e3xhaZ15xJxn3YLHicdxY7J",
  "key13": "5C7Brct5P9x9qMi31wUp43aKHHS2LLHvZUzcboL1zamwxP4TKNViJqEeCYpngRVpTF6i2LpBXShzgWnN9cFA4Aaf",
  "key14": "zHMQFKtyHcrZUD461atoMh3uKsudZnHcJyByus3MP9bkTMRNHUNjVRYt2kqgEUF3LuhPewL5U7ju3yubJwQz3W2",
  "key15": "3VpJaUMoEdu11jeKzmfeoj5x47pLUHH9zRD3dVCtomVcSBNeNYmhdy4KBw3FNhY6M2ARtpP1H2ZCa19afur6Pgzm",
  "key16": "5DuvL8dwdmjemDharvzkvk2sANSrBp4ULZBjfxkfNxegNSZU5aJdUAFx98kuoAgRBga3Q4MP6KzwvvKtNWCsoTPS",
  "key17": "MHJHCfFAmh2M78zkabGkidWsA3KY1bBa4P5JiHXe1suof9bjaX2btvxVyGP2FqZrRMwpstDZEKg2ruUPGTxZafT",
  "key18": "46KtaH5RPDwpjzCHQB7EZqHyKDExuzLBR33zCDH4EQgABzwJ8o9PWQWZ3x1CNNQYyAHjpCmDXa7R6fkgRG8vHRCn",
  "key19": "2FWdGRmVtKeznAVXwogweWubpLbcQLWgjnBdNEmyHoKXJr3QEQfjBtAjM4JNYTm7usvKa6TnmB4zZtRqsZD2mgSe",
  "key20": "4dnVc6eprZKPthFRwQqUqQEkfHX9kS2KJo9jCKBiezr9sBsJt9Xew8PfSe4p99KqoWDy5rNtJkpekznjqjM9EozH",
  "key21": "5VQgHhALWvncBvscKxSngKtwxkKeHdzHgUiFobDYwK2owR43JnbBnvdpxa3tThDW7J7zJeVtsLMpHVpmWUvuxZec",
  "key22": "2UatAxab9XPsF8puuZV3B93SGqSpvLqow2XgGu3GbpTqbEUxmTNSoigHXcqrvpMrA4tm41ziNpc7Dqx1xcES539U",
  "key23": "21kPAG2nNJJqxzEwjWTdSSiYbdEYbDXFqprSuMyGhFL1JniiKV9sLvgyjjm6o7xt5k7Tv3mHCLyECnHHngshwA7L",
  "key24": "4RZXa5dSCHxVRB8TYdLc6VQWjZb7nFWyLCF2WCoPZGDGi6w37GcsR9KoLiwTiuLL5KTqZZuNC865ByYSLvJyDe9p",
  "key25": "5SzY6E1vD6uRffTwfN37Wydm3phta29BRs5D9HkRRSPR6XPMTBMLfMgjTfzfpXrF4RER5daMwdWbHxpPJYuLAFCk",
  "key26": "2YaQnQGTPoaXxetQDpPfzSfMy8jhfTZEGqRxwTDsRPTc4w7tuCxz9bTMvckTXB3KTrcmvZ4u1rATCsuZ4EtSaNsW",
  "key27": "ipTbWTh5YS1dAjf27B8dMqEnH3qogY6GyYdBmeexmSVWJWyxKYqzKs5NJmMciYGmDhwHrpuz1UTQMSJKrRpABWu",
  "key28": "38u1SFcXMzDqZeDZ7PAUYAjiQc53k6sUorTgLZiYx44b9uMU7X4ncHzsH2fp62upmeJQA1xYUXyLwpY5gdWJcKSn",
  "key29": "kveDcUWmVDfGxhJZVdEFf3NqSLbe91CN51bWGvbn1TdqiDRBRfaW2fLc1EPi2rwQTsfauemZiGBbtFVDRJGZWPj",
  "key30": "naYUiJc8FMPSgE1v1ErGezuQz3UmUqNKv2YvNXV6ZqT8PJphPPvjvgafQKFEeMfMZyPnBJss4Dr5mubwdqASnDK",
  "key31": "454XT4zZHqb4DvfYKL8Rtmfqcdxs91HebLSe6snha9AKVLScHsqiFYYWoGzd7vqKbc5TnfZGFN7fGYQTU2WWaU5V"
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
