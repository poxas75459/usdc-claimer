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
    "2NzEhDzKfXquWfDn5wS8cf3tf3kipejLzyJKwReMJUxtrZa5xdrsfxeTyeYJtA85MxbgiH81PyopRsLLRuTyNdMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLscvrLESsXD7ewzodwSNm5kpt9UfTCttiDzaWFea9Khkm2LdfbgSCtNTSUpyXCrDS5qQwcQ7ow4CXgtqj8kQNv",
  "key1": "4pE9tYZfi8kmv4o85jXMyLXyVi1MyUVLgw4LzaCkDytnfWAezSc7WFMpq7rMZkL6U4mpGkE5UFd7LLk2jrkkfu54",
  "key2": "45q31xHNPspKJWSGEi59wJFNHYThpQpJniWDZubmAhtEuixut6aTa3fVPyGj2ryj6eJDUW3dkXmQFBbCLsPqv4A2",
  "key3": "5ox4kAbfXPXjA6TnpKCyGtqoFF6xexWC9NaBvirnLKyLTBhdGrRgoEuvWEi574Mne7jK4oHuhQeu1wxRU2NZP1Du",
  "key4": "5TCThVzAxqkNttwawFK3HALSRW3yKfvYtAvqWqbSkDVRooqJefKQFfMCgro8cDMHjfFpsuNbzKkerxDWU39hF22U",
  "key5": "wSwbVSkAg7qBxbxqukXLUdb4Y1XWikadiqakGSc7n87uPXTKVzcqjaKe9QHoDnCiEg3efB6WJgSREcKApzWdsLk",
  "key6": "Rr3mbB4d5xUowoWkfLsqk2BNAXYzTmTVXvPMUXs74LmcZddtKrfmLXx81E5k1EkTT55Kz66DHpVYeaK4Rce1iAn",
  "key7": "3DrFPLArHuWdEkvrafCBUuNpZx6tU8h8Rjz3gvk3af7NpgCXr4ioSsf8ThMfuPZh6prvh2ZtgoJaRikMKA67J8f3",
  "key8": "3TBdfW9oP1STfwxiXg3qQAWrcn8tcusnaBKDDYPZqSdW3Jck1wNxtx1FUFVa7S6tmmfFkgi3yAiYhQT4Gom51M86",
  "key9": "39uz6D2UUUynoVrwJVNg8grPPtUJb9C51wXGuk4m6zpsrkmdKAJrD3NWibgkh1Mnt32nu4HHftedSyAnPZnhVZat",
  "key10": "3cpZZSyttYx8RomvqqN1BKq4msTsNfUTGZ4XiLi5C5ySSsFivkWs8u6uZcSNw2CWQJZGcSzDW4D1XKthaAVBmJGb",
  "key11": "5naYt7vXEXkJy9SDgLHyuqniLAvBRNPNYTjjyUhBAHocKSRSUUYhCidz1v4bpqYyrACbdBosDVVbu5nvCKUomcc6",
  "key12": "5Udb7xoGuMuz5sf54DdGgDdc6DUaHx4j3YN4wG5tNuj7FbGLtfF6o3KHfaarhaCak5Rq1WFXq3R78Kbn4yWUHSvk",
  "key13": "5aRDsDr9v5dppZbgtDGzkY8V8eiJmubLYAyFYkjwdGBw7TZHpwAzHLC94u7tdh8JKsc4VzrptCm92kDFm4X2kchK",
  "key14": "5G67vtLaZH9YVQMSHQdTggR748MPwdxNLXRRnXUpTMq1X9vUZA2iuVZc6TUjyEgiERMr711RMUWa1rVN2usYxFmV",
  "key15": "4VrPuDvCu68rprWpduQi1n2q8MYSErFnUpEEcemtQaB5W4Fyv5uD339GzHeCSviEiUCDBpcbnpcEwvynY9QaYXw6",
  "key16": "56WFcsgV7VJ7F4YmjR4RNzgGv4Zg3PNyowqPxmph5UQ2iaBUoz8t18FHhBsXevC8frpbG3mGsV9CbhjLYnr4FLJK",
  "key17": "5FuR3oAQvE6k6ZAXRT95xg1NK87Fzhzfi1Zrqgo9fMX8jq8iWu9LJSyjUWQE7Wyc6bfg8tASdAdZaSpPqEez6SNC",
  "key18": "34jT4G9mNyRbAYpArPWohCLLuA2DPefMC7L46aRuY9wecAWbG67CbmYmVNkTv3WDp7KFf2N3DEBPM17XFXtfFvRF",
  "key19": "47Ked9yBvEdRcyXhD44DQh9X619s9yfrvcdPfzbbPW5eE44HMMjT2q2omVuoPuqbz9fK498Uve4FQvm38StJ8Hz",
  "key20": "3afZ6csbQ53yEB7ED8rRAZRdaE91Wr6WC3zU8hfceBnfGNS3qkRoKScbAK9w9LdkpdfyJshxepzBf6yGWmQtjoDw",
  "key21": "5vSdhKtAxjGRN6hJ612qKRuq3Hy13XVZXowWwGPc1agW7EFFjvLfins72NHueCYmg2kYSJ1gV6hK8WDnhCTqa41A",
  "key22": "cF9gxnuTDpDuKtjVYrN1pjcZytHyiVmLwKSKzDUTLMaexkQxodrzDwqPSCPXdh5fygxFKrTYCidEEqqaMU7Le2M",
  "key23": "3KcDCFTW6fc7QHFFn1KfEKq4kWNwUVSmNtF6RtfsXshb6wKVez8dfNwhicqcpawrrLyGbKQyq5N1bUUMSXukXwNr",
  "key24": "3Lku6Ai1dVSxrjk4V1md52ztoEjrb7UNS2G6RxEtHNwhYYsjdxZ4s7RCXqzqDskVyqigQHqmiZiG19FEYBWDvXSP",
  "key25": "3SwFS7sE4wDdgQ1V2vkRzK23RD5E6GSsQetdqvyddg7bkGZpTuAsdeuSM67gxVAHXEmeJz2zUYeNye9tVfvL5j2m",
  "key26": "5CQTpVLCtorHi5ji2SosnEYK3ReQ6LDQBoXgsE6YQPAgSgMeMD7C6kYv8NGAacgg79T5YPRthaYLXA2bUyxkPFEd",
  "key27": "5g32HFAFFEtffGiDKrJWfjGTvQ69mjPtYSU7mFphMhw8QFckeVx1UjApS8SjzbAwULS8NbtHCwN71PRYJqmygJLP",
  "key28": "64re7eVhDFRmKHgxBD8Y91Ae71LQyDKMvr1a4Yh3a5FYeKzmh6jZpGkfgB9ZYJE9LsB9hnkbuPrh1u9C4o24MPiG",
  "key29": "2xhtohPZFAjGbwUA15KxLPL7ZEbrordc9Ltzj5J1B2DxphvLiU44VwFqq7V1s2oeLHQogw33UKfFrgDuJqXSLfeJ",
  "key30": "2Tq5LYdw82Lb7eY7JpG9WdseHaGQujfSCdE8b5LQdYA3pzdo42CfJer7AKbjWR9K5Mq9rdhXCwySgs9g2GibcYmo",
  "key31": "4bAQ1rhqTEQr1KDBByUcMuTqnwpq8qUafwFjb3AxBGEo9vAAxGKdD5UwtknVy1uGhyYVJe1KWDEAyCdpcsw9Gfqw",
  "key32": "5TLzwsAfBFta7D7ngQxhfiYrY7jPhqLG6D9HGMNR5dLDe3sXAyRbwD18DvxPRDmnkGLe9HtLKEo1hD4wd7XYmThe",
  "key33": "LDWGG4FeotucnVtH6QdhnDg85kVGihjTK6FPSUYKdAjQkXEnQF5TzDbSucM9X2RC1twFHAUPx5qS3oX4LViSfa2",
  "key34": "E9MZq743pVyykDX5V1ERhex18SacFWrcqGoCEDeEvhCSCBf16jz6XJB4MVSaTKCT3p8MbvBNGQCCaQ2a8UynwGB",
  "key35": "2jsdCTvDXdvbsRERMoeWUjeiVXUJmf7w2WZK111krkvcC2jLV7dsDaH9VBiAMDKKkC9PDbpcVyWVTEg6fU6UuG5V",
  "key36": "2CGxnF871jSbxkKvYdxwjxRs4p2tR6LaA8w8YKjfkqzt8sxF8k4gZccHWc2bzNS89zpaASuMwfFrkbWuGFCPc7QQ",
  "key37": "67Xvib64CTCCLLAYyUCdWP7fR2gDFrBjqznHoRG9Vc77WzDPBecjKWKnB9tDdhYzXCEC7dxydqPAUJBV1Pa3iq6R",
  "key38": "34tg12SFjdRa4fijJAeba8P1ML8NDk99RMz3hGMKCEKUdYXXWHsXSif9dEf9TpZhx1GLCbCns2Ga3PjHFJN9Ep5N",
  "key39": "26fTNo7RwL5jthUsn3qEok4BgXs1TWnQ4gVyw9UYTxwsqAchbuVggTLHzt9HPzxLBRWbJky2eBojrgKtgaQLdyim"
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
