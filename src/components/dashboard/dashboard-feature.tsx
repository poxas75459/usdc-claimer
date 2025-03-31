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
    "5b26A54QqDDLoqgNNDeMEn3mWQPiYtiKJVRndkkTXLFU294tpNwMyPgeZ2EFty79YYRt8asQn9ArTxgC9PKkp9Zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GAC6ZhzxmVoLxyXkHjAv47FPLAqE6MhDrzZg5V5BcrBCiqr2h4H8UCLsV8Avyw4N1gUdFPKvZk59jgmgYFuwfaZ",
  "key1": "5rjY29JoQiFqFWSJWYW4axyCTsJAGWC7ixJkMhQU81M42LMbpXtkLC1quV45gsjYRyHhFxkDNbAynnANNFDfg5sC",
  "key2": "3P23E7yYXFPVz2jgmYPHnpT1FspuYjXVfFmv9TWyZk9uc3TxQuHXxAat6UqGyEQhXJJskok9aiSavdojL6Cu1oat",
  "key3": "HkFwHpgUrakzeW38wkxeRzwe6MJmucBCE4WKZRFxfQQLWG3k9UziQdUWfNpQgYmF7Hgh9aUsdt6i4SYmckty2GM",
  "key4": "jCo2JTW3roouzvuPowHsgLZPapHoAofCQcYCTyVQumADngTc4f98LXWTYvKDtGttBeDZj4TPsqdDPW9WmF9XY1M",
  "key5": "61mngjDUDEDxR13ZEiv33Z9xS9DCMXjAEt7HAMy7FpaeWLtUT9sZW4ScjPVaHoisP1pMdmXz5782K9f8kb6YrZ6V",
  "key6": "5h232PiqtgfFvFWnCNY48aFkE8JiCyQ7Ud4iFNS9Q8Md8ziaBfbzEBmV3V5EAgf9M1oDyjC7REpjWcVhQyoLEaXi",
  "key7": "3s7uYsqnDKieqhA4yXUqgD9rKBKw8nPDTkaQmsiEZK3yPAqdqWTCCVsRg8T1i9grdzNN9ys84Q5WanZN6zEVArtA",
  "key8": "4XLNUPu1Sdp2n9dk2xMMEtuRfDnj1ndxRYQftSVztqUFtYHYYFNBrHNt7q1GRqAJFHbYQn8LJ1ZaeM2haAr8rhVF",
  "key9": "2jjTzDRyFgJDvCweupgDpAEwizp5FF7scY69UE6ogAQK59qHB2sZp91e4bLxRUCdKAwSxEakFZGEifEj76H3kyEP",
  "key10": "SfYaQwGVtixUepmxZex22vUxcdairPigYfKyXWT4iXJY7v3TXpWJfN2vRhY6V4qLvgxmKBh445sJrdAeMNfhTnU",
  "key11": "ykFyAN5d461hgXfvbeYCb6mNUPuu96kEcFQEbR4CwTokxp2ZYUyXMcjEPpaunAaMzMjVgpZMgSUgtUFVNowBngW",
  "key12": "VNR9Kses67Z1iSsdBWd9u8Q78d2L5e4y76Vf4wZFcDZGrcM7rzd5AM1M5X4fvPTxu2X7bTHD3hZFaUoN93cPR6w",
  "key13": "2ePJoMM8FAR1saSnq65cHMa9eLd3tRrWJTdGazuEKN5KB4df7GnMLVDKzL6XYWLGhA9jd8xwxs6KnoMGaqNQw6dP",
  "key14": "2X8qWmoQcEMzvjvnnakbeTLYJxTmNyi1e4m7oeyD4LvyduFcy8BBYvcitXrMv1JE61GEhDgxQqqbqPWis9S7Rfpb",
  "key15": "3Vmb3Bqe9SZ2rz5jBYVSaD15foRvaNzFYLfq3gHWR5ckwjzhcVhMLHE7oJEtuPJJkMsSyBnw8b9k6o1chHoddx81",
  "key16": "3U6Wzg1kbouVXnTkZWH8GtjCVoduxL41ZqzQmgKcSUHSoaqAm8yQLuNZKNxTyfQ4ZN5SxZEvpkDPYBSg8oYzmBzi",
  "key17": "4jX94RRw6sp8ATFdxGRGZ1Yv7NjSnSKXhj7PCofpecnaZnqbF8nQnLjmac9XAzNiVjaKSHhbUwPJtCnKcvwU8v3r",
  "key18": "2qaTX2U5yg8whW5j4WANGWPwvCJdUZ55UZkWunvkaPRFt6arQ1RoUhnbv2oVD7xG8GZUdv5Q4PPTgmtyVFWpyBKm",
  "key19": "5FzdtAPebYErpNedni7zoAidqxmF6jkSdNAfGCxhxGXMYULGn4N2s3F7WCcu9WBxFXt7pZcFHUNGEqAJCqt3RZGt",
  "key20": "2Z6oQ2BDeZEh2RQm6QnQi6nzxYLYFznT5aeywKWLaxCw95nasq7NkjcTe78QtNvxVHiNMriHVecpoDDtzCGsuVGQ",
  "key21": "vH42GbaCAJzYpJ6yvzPnCbfNQvim9whT8Lz6sQrHLWpxpfYRXQKVuYadJ8vN4kKGJVb4n9uCg11h6kbjzjmDJWw",
  "key22": "61U7c7qjVKD9k2be75roFG5epbsGNuqL6MQ4ed77ne2ghqyAizvxfQyNuruB7hV3cB1884o7nvc8Dczzy74djB8g",
  "key23": "5G7DKSmAM3QmTBCc8FEjZ24NhVHz11ib4X8hJmVhv82QTN5DaK1XqvJem2S7rLVbXRD5A5P875JWEvM5iHzscGGE",
  "key24": "3bCs3kBcu6AiFhTmeTVdBaaYco9DQwABxnwQaGWkhSJXg2Vs48S93hoZxJdgJCjnZjWhxefWpEEThcMzBw8nDbB1",
  "key25": "42bnxzf4vWq145rYEvM4zhcA5Ez2iTMLmA98XAaDKdbani1f1PkYAqACkorX41m72eHKC7X9FJdrZb5QtSuhd5nS",
  "key26": "TB5CuKN7eCwTCB4tsfoTiu817aXf6KDwcjbtDkicaUs99GcFryE9X2etnZW6x8rbhJ5fEcGe36cWz86ct1uonQE",
  "key27": "46kWWJYMmHgpKSVhf8UThLHN1Uy1Wk3iRMTEJ2zPTFTT77sKKjiHzVwPeVN5325D4b1hFKGHxebKsq9bP5FVPDzq",
  "key28": "2bmNLjcnHvn4U2CqPcixKDkmEcTYwP7u3QLGKtsYAusi4GTgcLAZJFDtEainzRFiVJUyBYECM9qLpSMVRwVxQHso"
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
