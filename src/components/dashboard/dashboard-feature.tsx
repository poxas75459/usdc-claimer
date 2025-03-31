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
    "2Sneoci9zGHyVmzm34S52iG5B1dJB3tWgT4fiVdPHQu9Gr7pM6SfoosbT2GH9CkCAJxDdJidWHREkd9zwLNntVw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSyTLZYgqKM2pvgRNkYXgBEYbs3o1PGq6k1oGHEeduaJ96SEvynx5oV2dEt5W1CC8v6NL8i5C2po5ararTsZ4Wc",
  "key1": "4FddV6fCsFNguV28CxMYnjVM4vjQ89WPHfDLGkEjQga3GCRDaPG2ZLXFAbDptuNbCx8csUU99UCuKSt2DHmq1LXi",
  "key2": "5rvakcpm7CpEHD8DaQKN5BCjcBnbPp3WWoPo46ZoKTLttPp9D4cZwsu7uVFCouvngi8TCx7Y9zxNb23fQAzboK4y",
  "key3": "5F9s9avAccYqCCLCKsVTfFkpJpyBthmaQ8ZqeMkJBeEz7zS2xFrFzfZT6pZuTnUruJrs4cNKKZGPqgfRxZBzb6EV",
  "key4": "64EejhuvNKBK69qtLiFVFMcG6iai8FJtLQUVHh3CNJfavMzXNZamuJBQjJ9jExBNXxLj9BjKhLheMeHwc5a6QKQo",
  "key5": "3naxFE6dcTqvhfht5G59BfAUMnCg5QyNgaTPb26HW482ywT3w5EdbbqLK2YNV3TvM9jzArs4k8oU5zbMEXXc7arH",
  "key6": "2yD6aCjoEjAMJkZ2ycybf1yKG6DYmaMtpU7QPyuvxi9M9eWD5oE2zdwYsCXpZoKFTQg2tywnnKBb8NeECK8Gm5g3",
  "key7": "tmPnjL1vewCTdcVxmXvxQm57AhDae2U8yBkwQUC3FGzSTW5ekNehvcYMQWqL4gZkAS2ABF832mN6HYhudU19PJt",
  "key8": "2BFiLhyk2VEGDvYhitKm4YCxJvMeBZB7SgZK9Sm1FFPwCiG247qoViidjNRTzTkyAT894sP3QNFLrT26295CgqEw",
  "key9": "3yNreFk2zFXTCJX67sg9RjDf1WHawJ6GBChr6HHSjRJckefJHUvpmUroPuPUU6TxRf4JZYUd9Kp1WztCrt6At55S",
  "key10": "4UjzN3hSQQQ5fSc8psZsVrHKbt9xfNB2Ld6wLaqen4MAdSyKJHwZjN4ZKZi673z3ee9Z8AKQbwrGmcUT9pnxP3Tp",
  "key11": "2eMULyQe2WMS9B6tbuDdBYQfXPMiUmX7wKeSowjirdoQR78Xu88aH1sPUXQ3UDDstjZgBAz31BsMS37H5AXnk318",
  "key12": "iYfXdbEmovzSw4zhtZFPxrg1SyCKorPQj4oLvgLRCDnTig3b97jMUc1YptPQ97SRKrXDek4t4mpoTM4rB96uM3R",
  "key13": "3QxsKokfBiA8por6pwP7TtyZNVPuyrczmUEdkmdJivFKqbgXKjnJjfncMAhhQnoe8kvr8mrZ8f3UjdSPkUeEEEZi",
  "key14": "LhPMXnEdVWv9y67VPAyBZaQPGzkTyctr1pSor28iVEAcgb3DtuSM4fb98texfrnj6UikGeLR28t2uG6J51KpEoh",
  "key15": "32gxsaKHFLT2Mjn1ziKNLKZu7w1VYRNXxi43MjkN3rUSyZpqRfshJEwohTbY1q6D7nuLDWTpixVLT3GxqChJqk7G",
  "key16": "5oGSjAjwZg8UaBnwJktJgW16NJ2pkP3VjxnxymBihiBkyfMEESKMuLZzqjpvTCqvqEtetjFnqzAzXbRFodWa5jqn",
  "key17": "CNqwt76hmf9toziHy6D6bBBTFBqSRn37U7JTph435SAMGV7soBKQxhbVYHRQntKjXXAnYm74PNKwNYrWi6eWtS7",
  "key18": "YL7F4a7CcVxe6tVDxUhgzv137DXJUEeSNTD3jXqaBeabGHowWYmBNWntzfj9eFEtNBKfEmxZSfnAYsX6ELpsQ4N",
  "key19": "4v3Cgbk66DAUPBUJcJFMEHUjktszdtQ2mL48yqMvswbyhCyBENaBxtVizwBFcfKeQ1j6eNfQ5bstxfUPkQtDA2yW",
  "key20": "3x3x6tvjVhajmgrJqgKhGCpZUFJDmV6kp4GfFoNQhTYbQiWS7qYj68qtr2qM35kxwteS6BYPeGh9U5owQqLuNXRo",
  "key21": "3E7FWMotsjkqc717uhJgNjphiDqk4duZDpqMiuGJxXb8xksdbdVkbx3q21rbE8tAwT4qccfZvGZmRkQrjHrEAiDY",
  "key22": "5rnTZTbtJpvoYd2e1Rb3399qfEAQFTwndy941LQde24gjU2jM8rZYighTBZ8Sg7osteyhG2USJby3Gg5X8m87Vx7",
  "key23": "3A6pxKZXaT7521DmAqsSkXbSrxRWKZp3tNR42QAjJxKMtF8r5yDaKJtXVFNZsX22hKaG45EPDMgdEHNVzAjfZux9",
  "key24": "5EXaiVL3vzE7h6pdVCPfBnZVQd29WDDVG2HtEyCUX6QAcvEgzyHmiytv57t58uiGAA84YJpC9XYQQucydHNfUE38",
  "key25": "5jdpd5knKNqvG2axc32D53SuKP7WN1kaq2NPcj5JcPwcSLNHM8k6VupktaiB3a6hAPobCkMTJzhtJaDs8to2Tv8N",
  "key26": "3jaL3Bgr5TMQg4JiKQ2bg3Mfoy7LSsp8FuFGqjdhCKwLSYQnPCzerLpAwvNsfnbK9viX3AsbsYtnwHUa1c1sm1f",
  "key27": "UNJH8qhJNFFqz1jEurcE3LrTGhKmFw9jBpiUuXimYQjTfKjp97PoibUdwa4d9EgZizjdx8ZLy3Gw3HnDui8ZiQB",
  "key28": "61Nwmg55AwTAeesb1KYXfGEHcqbD3Wcm5ZpshgFjvf4rhM1h68oeKjtZNRyKg4NwZmC7NRKbihYKMogeJNV6V5Lg",
  "key29": "2SE5anQUawaKEpqfrjPJeMNy6L277Tsyt97YMmZXGGEhm6p7wimMMneMc9onwNvpWt8AAP9oq3txcR7kUf77NJKz",
  "key30": "NHUMpxs5UUc1sHwdgdeGJsY8EHvDhigtYd6ajcwBz5KjVJazittcmMgTUcNLLSxn1YNn8TukJh4DVBV132riSCJ",
  "key31": "4pHqW7mZfvYi9uHAZUsPyLwUwoEXPjJi6vhqsBNBhFuKfRyh4TzFWrRzm9JxFzxNui7BL1vudhAPdPnTicF8gG7U",
  "key32": "3vzUuFzJjrrBEMRx7h1CJAj8d6UqPSLos2DurXZYkp6mxh52rP6HhyTeg2N1exFujp9J648LfkRsXE7MMuhiiGnh",
  "key33": "3YUQtoK5vnPBzA9JKZbCWK9G3yEYeQcM9JTuh3m5X7gGuRU2rFNhiUqNu6TbDfmyYKCrX9jv3jJbGBJgHSYjZha7",
  "key34": "4TsLBoNLrmWarHLPA4bbGYgEA9SivnoH7n2HkTD5U1mzvy3SatpM11FAyhh9rEuAUTrAmhBLsQLCZcCevvD22M2e",
  "key35": "37b7cfLWjt7CVs1ZTtwFtJZwFEUHbULDkGABLhQe2z1oZ2PhzK2CyHc7BefNVoeMjE34rdmNw1DAArVNduPbWkyt",
  "key36": "5wYG17hcxCWtoEDMonk85oa4chSEF57qoD1G3P1Pe9kpfVGoCMvk9cCxogHCXXQx9Er3L8S6bmQorDuNATNedb2Y"
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
