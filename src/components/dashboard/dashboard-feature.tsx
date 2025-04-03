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
    "3GFtdy5dBtJ75k5yBeHNJwyR9UZocvqUoCWCwqgQfNozJgFCxWtcVm2D3jc9t5fNtvWx9ehAyH2imamWw6QsJV52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xy6u38bt3TDZ7mvqoiPhNL3rPvJhq8uW26Zcb1u5P2kcGurtikJJaob91GtcCsvRGWJHcdtSoAWCjhvCg54bi9h",
  "key1": "5oHkniSzCtT7gGuQtgPt3TPE82uR5vyKDywX35RxHaxYhAxEbfzqp19sQN9RCRVxwpk9CjU6w5VuSMgbooWcAXtS",
  "key2": "3ps9b8ghvAdyRGFNZgq3kTmr5fp1fj45UDZMPYfUtAzF5z5jh5CozroBM4BUXBFXoTQ2U3Hs72ntXZY27V1rKm91",
  "key3": "4GR1f9kLY5eh9aNiCSnxaWW43W7BmmQrG8TzUqZPftA6oMqiP2vMoumnFt6ekjCaVbNCo1xSdfpG9ttZiRdvXnpH",
  "key4": "4pNoCYd4fBu7qnfMZBXLKR1jh2bQ2JLXQSaSNNVQ3KX21bxQuwYoqczP5GsXEXfErnuuW2W8UMgeG2AW6gqi1W7J",
  "key5": "2rHFhCUKiK4mX3yPKmv4ihwt1LByWohvRSREZHDrzCe8JktYPL7tzoPEC8JkgJCaLhQR73jbLFqR3btEaBqPWJaY",
  "key6": "5tScQnJMe8Q9cVg95frYKRMMCT3Sog2ZjpjL8wiBscAn3Uv5tiEZX3HWd1SEP5ZAZpMYcYAJrKQJkbi2UgGt6SBm",
  "key7": "Xj4EuFAJVMTc38yYYLjDKqjbL5GYDpFYqV77yUXe4NdSV1ZQeZniB6cVZf1rPc5MZM6EXv9xzw7RTzf4PXxTEtu",
  "key8": "jKx51BT3rmsRzyyeaAxPHPgqubPvSbffUbUtdcqjuNnMy2VHyowQJF5MexhRCbkZq8gD3JymkA8ErT1hgJRYpVM",
  "key9": "3krThPfTK5pAsFoFE9r2sqcotLdEM76T37Wz8XRmoAB12ftejVJCKLW7AeC9wycJr7a37Ewy9GHQapzGkjPBtCn7",
  "key10": "3XU6Mn7BSFHWduEokZt66MyNLr72ig11aECqgvjzdXEhfapQMoGbXzFjqZcaRJ9iRbC5pVub5M2PqY6CoUBBKMie",
  "key11": "4iKp6NBrtkAejnJR1c9vfzRRBjhduMb7rP6kgw5i5m9dfQmhGSHLGW2GyK5YXh8oq1Lfqe9DekRBmMW3sPBJHots",
  "key12": "2k5Jju1Yj3HXyz4LQpq54h89t7xDnEX1HcWVukHUTqgNePmdsnAhmHQahLcmDM85xdC5T9uZe8YQh23g2tPYhJtU",
  "key13": "bAPFAgwUijnvsXoPH7SXbUJyFgGXQofQhdgAKJpwRLpMTj4o6T6Ndxz8Vqg3FpbNKLwsx7mMPpNkhG6o7mXzeE3",
  "key14": "3wHRQ21b2LuYGoGXhBpwrBxFas3Rof1QmFDADvj48e4WY9TdvVBYHMo5w5XXGMuC5aqPRGpREGH66xvzkVoU8rrS",
  "key15": "HGfkPXFKvYYetFqfQzr6Hdnywu7J3P9Z5T2qx544E8cRepeHRGMMKUimx6nqQCEvLBCdD96AVQ9eb3qoC1BqWwj",
  "key16": "Fekcmfk6USEUWSenCXGKDs7Q8ippLrrSwMUPxsrJf1Cu1KVtPRnZYCeVTX4P4aJG1eFGiX1NY2imWzNFBawh41z",
  "key17": "3wyZw5HHc4oPywGn1Z7haZ4YU7PZaiD9S6D1xJvEGsj7anDbszQVCiHKB6ZPeqDHSyUGJi7McFAujPkTZBKtu6Px",
  "key18": "4eeYEqPD55GhsocunC4RiRoDbXyd9zFsCovtZZ52KwaHD8KK8eVTy8xCbuDRdupLVDqHJ6dzmuTXJeGUs92tthi4",
  "key19": "2Q1D3gJKZRNonzLeTLuq8w3z9KfSGQX71onC6MkykhogPMj1nPPQr5inXJXUSKBKB1FFdeJvtbb89uE4Eb7pHKa7",
  "key20": "3nB1rCXZQ9L6XSVRQdNYWA62oHx1bsN5wj2fXuSDgt9JcLKLvHrCNHXcjdDZ7s4A54UYq2D89sG7pdkAWKnm37rU",
  "key21": "48fzeMDfNZUoYYCwPd1ygNxTYcopfJDFoxLDmfc5ZQMzh2SSangHnkDec2QBNiJ2WkZ8jN3gyCt5VCQuzXJ175gw",
  "key22": "5kuhdkagk5ZPe5BurVcuVoZxbZj3R6SxULM19dQXs2BEFZYdkDrKX7LTujQLbgSouzNbkMjru9oxEo5mJgqh3A4Y",
  "key23": "2gWTj7mW3yB9wmDoEH8rPmtB1KzqX3bzsxVp9GFMTG6hM7joETUneJwc21im1QDc8uNHBt9AJAeiDort1EG6DK1E",
  "key24": "45HVbqrnS5JKftSUz9gBc7SKtackbKy1PXLLez33JBq7t1ExXk8Anzz616DceHX7fBXfHCQpbJXkCSVyqEb5pkER",
  "key25": "4WwuQtwWRn1knCDfTY1VpZgZYBKQtgJoPDyhbX3VdgkedJUkoioBo4eZekPhG1zGG9LisJTb22m5HqihBFY8BjM4",
  "key26": "2obJeRj9rorn5fZPkuYHATQEwnhSL5eBtEw9xbcLjA8g8WyW6onQ9vSL2EAZ9Md3SdRZyqQV44kUZ8G5v6MC4wy3",
  "key27": "5e5sP4wEmmVHnfA1t8Sb2ZS2G6ffd2jYguV7PgjMPdDQpbyf64sxwPo9NDQarx3itNt6G48gCs2NfgaCVjTAs87v",
  "key28": "4egccpaaGcJTKnRZEm1fxzHqTeWkbTT195qi9kN72NN4qscpLcsVpxZUvUsm2VYYGHPN9jX2Abzr3drz3UD6qTo1",
  "key29": "3VEe2tvDA6FxyukAZsLGimNu2YezigxdJKevWWMMVHAkdqSfa27sUsrhomdkcyn6FH7YA3VM9bwPAvqGHRhGsRbE",
  "key30": "3SPnua7aGhqWUj9wd79VVbKTfPRY7bhdUNqWfanSssLR6MpjkNBVQkip2B3vYADTvhgUCxbsvqEtFwyEBqmiePRD",
  "key31": "2J9skAnu7ChsW7vRtmhzqS4AraDTSEDuqSPchTZRycK65bKm93CHyiPAhRf4WWTcaeGJfpcZxk3CdYYzWikVWkBh",
  "key32": "5um6z8M9ywZ536wuKi69Zz6sAu7NiQ1K7BWmcNmTCKNqPwVFFjzd3npcN1fBf4R5UUj2pKG5Yw87kEXXWpByfgJk",
  "key33": "6AEkdczE2bgN4ZirUSimoRUFVWZbAPkW5LfoJCK3krV3jiyZqQsJebxCH36L1FEkPGFB2E7i1Bgvw3KUKm5FGWZ",
  "key34": "2rLyrrypxf9V8e4bThgWbSTg12hiNQzFvvTynatmEvrNPj9Y12PJd5Mk3cxLVhztxxTHMFpcMQJo4YoqVCQzhbgp",
  "key35": "3PZVGywn9guwHfgeHm222So9HHebfNowqTPygu8h89cVrGU6X42nGGaHmTZMYBLVBZ9PrT3MP8tvoLiWBcDCzZtb",
  "key36": "5bM22Eh4bJ9TxASNdF9qLaurxbCXyzqNMNwYPoXY5rohRBUtqcG8TSuduxNSjtxT5uF2xbZ3j92BcZkWNBbXnQEE",
  "key37": "4Qw6tmyYuVUhMJqsktjWJCZzFmoqXmg7QaMJ3Ynp7ktv14xPERTgar2vatFQvE5DJczUeVwz7cQSi9DvzaPcsgeL",
  "key38": "GPpbQ2Tu19PwFLHHmYgy2xvZJY9JZwJLHKXUAZA4XfmDhJ3XxVrPVkbZgLUq45Q6kjWeC7aBSYjQ3bT9qeH9JXE",
  "key39": "61LiWcVyLuBTcPfyerWdANK7E3Z4i8xmQkeNsPAgnBdjZPBV8iqxX3oR78V4hu8HycTUnS5JkEHXkJVQgd5nnPfu",
  "key40": "36dchzdy78Deg4fmLKhEDDWX2xqFQ8QT2XDhAfUf8MKDtHwKREx3iTtDXudMQmhnXZ5DwAYNScCab1ix26NzeoEt",
  "key41": "453RLNFUmdFri5VRh3e86ttsz7qeQ9cCgokmTNKAfBoWtX45D8nEFozFXonRvsPu3vL8SH2ukL7u3KEXft3XQ79F",
  "key42": "5MXjb35echNiVFC7yEMQbPGmnYpVMACS3TCpzTEBwSCiBark5uW7EEpTzehTVmMByWrkfTgiJKvhzKHe12Rk1e53",
  "key43": "3V4RH5F7fgShnM7igPH1kCJNiwF2cWwKmrwK6tbax65hncjYK5UsQmMJTCkpBX74jYfvCaVKuNQ4cozJXFAUNsbs",
  "key44": "2c4ncyGQZ478UvMQq9Eq65HQ1G6Ug5szMLRzCvGEHhEZ2BYPqYDNM26z26UCmt3te8NupoybnbGyCZwgFttJLUvM",
  "key45": "82vtFmRWFEYJs6PiwK1vRsS2YSx3V7m5bWXNnAg7Q4b4Ta1buX3UbQ5NYpPBRR7B8e7LCyMRnBsFDt7Pvb9dQMk"
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
