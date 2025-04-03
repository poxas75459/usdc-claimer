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
    "4LuNQkgETT22d6ueCEJXeeJ2yUNNuJZ68pF5DrGwCxHPhaxBBZLHbH2LQ2cicnjyfb7wGQDoUnvn8HmV6WKXK5Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85hHjUvFKxFvnT2n4rE69LuZvQJ7KrPmZCTsFquHVJi8cwJY5kjkiHgxW3cZHUHbg5CuGGmPXGQR9ssMaXcMWvj",
  "key1": "3284juw8PuBU8Rd1vPPNzAut7SrXfJr3piWtikbJe6oUmANMTV9JcqFZGAzGMcSUi6Sv3z1CVef8enGwzyAMQsiY",
  "key2": "3JdiTf56p16CGkZNgxnoVL5J38zraZfCYDj7tWweQxQb3mJcdnqE7gx56X3FnV9drQGrHK5Ytb3gLEXqzyxnb8QM",
  "key3": "4H4y3Ez4enCDvsx3tEYzLPMMGgu3SqVPrbL1AQH4LZBjdg4G4aAdGD5Cj9KcNcPXCMyE7GyEqXSrjMseQLxvJUDr",
  "key4": "4qvYKdkKRrjBygvxZFZgtmXGmmYZj9zTMRSfL2nz5hpHjmXbWPx7cmKRYcYd1cNYJ8X8LfnkCEXYLVCVvbiZLmfD",
  "key5": "4E96NvRFS7LevggBPyDEbsuWPRR63RkkyXNsfYJgpajTLHqZWZ2E4xJULgad86Q3oXpp4xKwVpnR78Zbu5aSSCUi",
  "key6": "XvFhXkmfbfdNtNYGVfEnY56CHPdfzDq4sMe86HBmxvYY1xWnuDUCStUfrnqKjvZ9EUBmGry4Qfak6XWXsKgCYZW",
  "key7": "4h7MXwokSRPXWDqQXHX3wgpRg1RYsaNa5pcYuJx2qrt7y8Kaud7oXcBSU84CDGGYWr8NMaQNLWoHGeDJn3HLMEW2",
  "key8": "AtJQg1h2q7NfY49FjQ5qUhaJUUagJ7C5jtVUKrZgGjPAujiRfzkrCDubYv32p9pDYSAFjPZ38kNFA2sonn1iovc",
  "key9": "4J5w7fiR2DXfat58tthD1vmUbnfYBoto3wz6RLnz32qL7JBuMmm9kVWqonLe21Gx59dP64EonTGhLLh3XHvZRBzQ",
  "key10": "2Z39m9H1tUMeybKTQadF9F5icyMB9b9bSSoLyWaFgBMszyyw2ni6ojdeE5rrBSF2aJrB4GSEWwN73xHXXLyUgB2q",
  "key11": "2S1so8bv7Pg2j656BBFtGJeEwvQzU9Mk7L36Q2zoXMQ71sizihBa6uNM5cTjP17A3q4vnRjn1VStpkU78jjMhEKW",
  "key12": "oBmLYktwSLjjGEUiQnYApPv4YdgW8UQBjLTPuyeU2ag6Gjb6WBnQvKBpNUxSMsnzHD8sgkzoTLaQ1jzqvD7BWUN",
  "key13": "3UBeS8P4J1mqnwvRbrqB9RrPmev3j8VMVfxNqPUumuKNmAdpyADsgycBcotyjSPbrC9TXFEP46DusQy5nxBxadvt",
  "key14": "2BHtqs19Gf2wfZc8Pwj1sv4fwdK3US2f5e4TzrQp1T785eYxHB6kNsmZXVZ11CqUHSSFFvAvWVSZtAh4oxWwzuHy",
  "key15": "4pN6f5a8QYStov255mkW1XJzyF6i2GhHN71KyJ7YAH8dKBFNp5BXVeC9ERTtZKQfLpgbDKApfrBN7mBWVcFSou2j",
  "key16": "4e2mfumJJfciT9WSZXQNKR66B6Sd6bJNBu9ye4BsD9wDXQo25HSADXHAZubXRSEcQ95ghMreYDvxVWi93K2414XR",
  "key17": "2CsGtN5qt1j426eDcWVJukAyeuuy3VQKgS8YL1rXN6ZKvghA6rXySDppq2miCczkx1fRrKkhueStUCeTPPxUCVqc",
  "key18": "4jDKPHZasoL7wqHMVHqaDMJLWCoQT3WuNi3QB5FYjyqWFzVtiJvTUHZc5q83ghQezQkFGRNJ5mVUBCPg2bstdzeH",
  "key19": "5JFoUSUt6Syx35CC3ZcTBGruQEg84rEB3NXKkLrmz4serqqRurYAKam5fiYFhnS8r28Mp1VSXyNdtk6qmSzjAwEV",
  "key20": "2wdF4mxujEFWkwZfUhdZmBxQvPtR63V95eMRk34nhbojPAajLmvjE3iH8nRdJQJCdfXmGLRdG3MdLQLzF1oBhYNS",
  "key21": "2hNj2of6C9NfYknnjotC739a9kS6y12hfqKm3PSA7yH5WK6KnjKee2yMBShx5n3P4PAAH6KjPYwvR3243WitAZie",
  "key22": "5Kb2LAf5WWjEyKKgFPvnNP4QMWc1zQZM4n72XSTHuiooJMA7YDvxMZdmL7AUzMdrfaxY5sDA1cAncDRcPVEm32FE",
  "key23": "579dP9FhrtZBZodgYaJFEVhY6q5CY5rvEGvv93jdqH849WD8AD3MFYemy9trdwDJr8f2eHTCj1ZQr8dKRjqShLdH",
  "key24": "5HXcXQjHMBfo2azdj5PZCQhZthm4Tv4UWwG8Bpxtvqt2ycjurmwZH9XDDUxJPmNgUMQQhy7DKc5nEoVywj5BAF8w",
  "key25": "4wnrZXTS4gf88vvqhfJmfVJt6tLisWgtFCDyvdSgVdjEJtZDePDKssU618Qa2zfUZV7RA6GNKoJtPoWUvsY9bixU",
  "key26": "5kCweC7QYQHNyCnPkg2FpcFT4ygaym9jbKe6hH7NXpwAoH6ZaKaaKxta7eyuQ8DjZx8RrcNKLPuaVuUuM6TzQ2GW",
  "key27": "4QdzTY4JYUmHDdUuSyf7HH2bNvjHjM96reSNkw1v5xBvgJaWJoTtvyqFyTTLYDLxX1bCcZomySL7tijbb9ESbTL1",
  "key28": "3ZaG1nVH8x7YUuDJkLR47DGBFLyP6jLz9RR4LVAWTmFEhsxAHF84VpWvGqR8eze1yfZG28K57dsPEKs7zHdBAF8W",
  "key29": "5uuxYUrDfcgTDqGPBuNH8PqbUELMghz8fQZVVLdZ8Vo6wi4Bxx9hSTXLMjnQDUV11x7owQT1MsDDUJF2huSA9CDG",
  "key30": "5hRh8uJszxGAXrxkxMPWRiF5qSP6b8yP6A4KrZgxh6xPs7jK4RDrVLytTumUcVX3pY5FZrN4HHVKytwSRTMiPJiU",
  "key31": "57TW3PyZk4e5rduU32MPEBQGhE5y2umzu96yvseX7gkb4czGo4iUFyS2xmHU6gLVjaWnTMqeZLySoy4gxKzDHugG",
  "key32": "4CjBXSz4NY9FwfmTaq1HB5C2ATKQ7fak1rQuh8dADCihUDApYN9s5M2HkHLwHWShYLLbCZe2BaR8Sxiq8cwmc6s9",
  "key33": "5Um29EpMRuTJJ1CRyT7tCc1ZHkfuvcRxevRgUmPPyRZNgdZkQnNs9etaTyKArrJqJe1cEsNt2Dpm9gCvtU3FsNQh",
  "key34": "3YDPmRZfW4fdXQyiv3MGWYyw3mG2odCTeJ9CekiDnZJK9eqgGgMsU7155gWnfxZQRXZzwQvJFQGTx69F69t5Ena7",
  "key35": "3GV3Qs9P6XeYxaR353zyqKmw37qCJ55qCNnQXLWveqJrkbMJgdZA7asmkmEWcSFMm9FLuz6T12h8uxzWo2m7AWxc",
  "key36": "4kZHzJtryTAREwvd6AJfQfpZ5LF6oe3zGezsibmHVjPB3XPqs4PBHD5H4jsurPJhMGg3BPxkWY9gD79GJPmv36eY",
  "key37": "265WoJUYnxR5AMvxQ7p5YCFtLJPPMvnv4ZDpGSXbZmva5KC72uuXpDphCfzyTApbbUYz1MwXVcn4Nroudsqi8ioW"
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
