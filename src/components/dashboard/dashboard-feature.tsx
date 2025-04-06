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
    "3AXdRHFqRdEppgpU2nWvALn85uU1gXd42FfMkzDymsDx7gzqtdR71DPr93h54KDCtRns7UAoZCGNmVQAeC8oT5Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59XKZCh4gHzccV8NCK2UYbo4bAEfErvrPhr9JuYPW3XAivNBkNBdbnk9Hfce5R7BnnaDHCYmD9xFJSshv5SiR3pb",
  "key1": "4m6jLEDY6VnBfeMvN4eozxomEpKMyhkVQJGnLqEPAESEh93Em36BdeSKu9bM5BeiSTB2ivc1HFZEZ8TF3V6PUTLs",
  "key2": "2Ac7kuaha4DsLtN1Z1p8w9SoxKJgvZBR7bx2jvH5CMe7ir5d1JYayNBhNDw5BZ6Y7pyri5sGobNp7maes52gKqaA",
  "key3": "2U4fm3zGQ3my3V2zkLdLGVjsyxkuvR6ia35F6wU2JEQJ6WFy1k4ZysRhkKYEAXjLx1G1NUi9Fbqp9yDhATHLuFyz",
  "key4": "28nLynwC9LJadNNFP5ojqSAn4KCAF1N75UkwnU5JZHqGwNHCyQGWNPoFCT6rxavnBjKwQ8vqt5btduiJEbBXGa1D",
  "key5": "3TmP3i7tCJyGeaZWqZsUkCcc74YPuQqozmJixBtRWkUaYamGpeB1z7V46bABX79x4NCQuFoo7X2gfMR3xkiQMz9W",
  "key6": "4ngH181n8EcSFCPZjPC8zt7mEVa73AikWcBGccF9EQ5XD2ivrjXhvLWstwZyrdLdRWbqTg9yJccdm8PZkFRDw3G2",
  "key7": "2MuLwjv4qvEC2LhGD649hZtVRZoneJ3SLzZu2oKUjq9sAU8rgBpaidtmC5omgjUcKfdcJge2D188kULYECp5oHZx",
  "key8": "3PR7zPfQtSDTJrqinsLtHvFe1sUoYXzHXrEVs7xjhiQtqVZctQBkRwio1SnT5NCzosrqd6rJNVHEvxfQE7Eea379",
  "key9": "2wpWCxCAPfDqyLeQywNxRLN9ETpmYhrbFBkGmoGVCDVAYkGB4sNJFLTyCdcpMJwM9bXwqHdL4Zo1eVnnGZs4bnbG",
  "key10": "31Cda7FPikLNHGCjYdsWMUxVoJ9s9csW9YsFJHjmEzc9Zj6BWz6SmpzL6Fshkkf1JFtbTKfMf33iCfqz4CV79Do2",
  "key11": "Gf4rDA9fVBrikBCxeGx2k6CbPAbz8mFwxxmxTREfGW9Wk3hcHRtmbEPKSQbsYMBdB1Kgri6ogAALvCVeUFc8bmN",
  "key12": "5H8GPTvrWxZNpVvXZqmDNZhA2CvMtZ11mAaiR9rXDWGb4VWdYWfJJ21XYbSmCsAZxnQDUbXNhSoY8eeSAYtYJqVy",
  "key13": "5wXN6kTAavgvE6RRpRsfebSbhighSZgJsarAKVu5iBhV1C6FmcPp91ucM9hvJ2MGj4LX74SsbWk2ZiRzWgce94mP",
  "key14": "2JK3TMg1WpAgutRS98fe3iPsM8S6dLdgKsg5uZ93era5cnm3GmsEK1CnQC1kqKtuQ2TNRszJ1ymmkfmQnPZLymxU",
  "key15": "2B7taX7ur6HbXU2nihr6E3XBoQSfzjZNP8jugLJDnFURevnwqK9myRHsR62YjYG5YL4TG27HK3GZMA7VvxJjsC7F",
  "key16": "2xqXzBYkXsJEpSJdLsi2srDcmdsX7fcyBmUkm3ZnR8hTP8G3hNQFqnLcXhvcb7BHWFqemTaiMJia3wBiindjbPhb",
  "key17": "4i6k8gDuoaQq8w5cRo8RiNAdLiuiYfcpyUSksjcgNrUKNsKpceS9bc8cRvyh5CgNyAXK5Rgs3EseAfLS2rPftuc7",
  "key18": "3A6pKUy4VCKNUT1kwCmAd7KwBPQsbm6nuza1iq9gVAv7QdBS3MWoPXT5Ye7MugxyX8aLF3opermAP1d4qNsLGGrk",
  "key19": "5AKH4PuQ1JVUESYHSxDZg4F5QWk1oW8gkHZ24rqfdH4QFXf1zjinfWHifzFTRJfJHN5zYBk9QQ7TtoURpMy25XbT",
  "key20": "3shiN7J9XChfQLZPQpY2wH5a2npxqYoEvtS4eEn258mUZzdTnTReMZe6LN97kU9pyvKpJkQsEaxusSVQkH5FYY7y",
  "key21": "5WLMfis4e8B7rxeEVuHwjKGSBYFRzeZFFC734Ud3iPKT7HNQiVFwFnHgVLjVw8W4hRRxSa4uLLFuzHHrpLMPWBMw",
  "key22": "j2zVQZ3FxEABSCh4QLJ33PntZYmDf2TuN67SWsB9brPZ9gAPBBqfFpf8ZKWGAbieDMSEo1rH6n6BTemp1iwJv48",
  "key23": "tkKHeiZ8rrffQMCefm4CTZgo3KAkrL3pihbCKwMz9zuJaUYPNAnjaddGxXnmaWzqNVBvTVz9TMj1kwiwggDn3ir",
  "key24": "5vuxwYbhYmMTgtki1DGdBLvd34xbimjkj4RLUyZTNaRqNZmfjeaP7H1VM9VmVhr5NhWFAxfoYtQ5YNjVQ3aJNcCy",
  "key25": "3z5DwdbeRQYGSeBEyb6ELijUoEbaGVsQzTLPqwkRTQZeyaVqQM9LJWHiURpWKsUEiNwN3e9FrDcGg1Yzu3nBHuYC",
  "key26": "232sXzLERct989xhsiHnBJZpAMFR6gJXNmF6onVo1aov4sXH1iRy7PHtDtFW4A64Pp1eVExjpkz7hBqbihfbs1pN",
  "key27": "5xZds6qbtrRFFvy9N3HEkhyNrhKDPH4QxnxNq6Ty3atWoQw38cqEY1X65hHriME2mnhph2Z4gSJhcUb4uKEjL94d",
  "key28": "XjCQuG3XRS81w2nWMz9TMAGMUXLGVNTPaEtV6VRKnpzBYn2LcxAN8mD7GTk8HVfo7CGuRxN9wMVDZao1PQQCpTc",
  "key29": "64JcmGQk1BFw8NLN7SPAFyPRUe1S6fLRDex8jAUAJEAr6yzsAp16rsQx6ycTAwn4J4qgCUPZKDcUgNGCmBLn75ZP",
  "key30": "5ANyDUGzwbEGEySuKLmAAzcoTcdp2jbZCP9mVTbUZb8sgom5H3YgiyK4L3eT33L8bqykDktGM8bT8hrsJiBKvZap",
  "key31": "oT6NMHBcLQGFkAXk4LJ7pYFnbYJNtLJjjGrTwYjA2uXVUesofD82JVeEr1swUSHLqGaQeuBqeJCegVCSGUpPCPo",
  "key32": "2UxG4pBdj85bgKBcEQkGvZsdRpudLdFfeyG2k8bZSNdEmw7UBU92AzwaxUZdmYzNiJYXXC5iqVTuqtfuuhgoXLVu",
  "key33": "3XLafDo8HCenJBTWpMsEC8Pkwctas5QwwKMva7QFqzvxj6aTpSnTznEX73vgrxrqrkAg3hsnMLyinxxVpYDJ5XEv",
  "key34": "67nokvZRnck9AVZr6CVrojRKdnQ6E9tNP64MbHFCbsbCBXXkg8qD67Xp4JZ4zfC17meu2uNbZdAE2ke9Neb7RqRb",
  "key35": "264eQyEozu5MUxFH7bBpVRs28kPhwQbLmrTjUKNK5dBJNNPMhtSysLNPfAn7G2hhDpwJqyeUkrqbP3YZEL6f4ThJ",
  "key36": "457huw8CgxgMGUEbWKQMgQTQtYcUEiPx7UjCSSmcAgD8dE7pvo924fki3oLr2gfwi1sGKsfQYTwHW2eaUh6REctz"
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
