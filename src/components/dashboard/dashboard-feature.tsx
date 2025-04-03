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
    "5a172PZamkCwEFi65JLxS9QJrF2XMcDYhNrNP4LFWX5wXtN2ZgEErdVFNinQ79pkBFRGzUvKAMJgkr3QrebE6Ppt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arttZAyvRMBsXATbtomu3uDYTwcxQQPaJvV7B5zzEYNBcBaGEw3rJ1Mp5kPNDSM1pb9Lw2aoTa3jdUH4Cm9APKm",
  "key1": "5wEPmEAKAhi4KATmLauenx1kAb2WyqRqjbHC2jkfTo93ffSB5yph3c9drESQTh7k9UdzTNQfmzs2ZNx8ZH2MVaAw",
  "key2": "4RZM5H6owdjwhvThzGRqALCQXwePDCT192L8ATgHsX4EjoeLg8ANx7XzZQQRhErtzZcAuFaNMvmca672GGPLJAmY",
  "key3": "64Tshwzy5yFqnT7Nd6eU9x4CPonYL48DbzFyW3N7PK1rVrRJ9VRkba5RKH6FteJaLX5wFzKyiMXrMg6WLUaXebcA",
  "key4": "5FNhvtBCXa447EGFESBWJBjMNgiAv9mt3YMrJhpKXTxENNtXjGVFe6QUMBYH34wZMvrjVJeTZR9LHoEcXauBeHDK",
  "key5": "4TX4jX1nNeGvue58HifRWof3eG66xdhs9G6HdKWnetrJmfPdiwF9AsvXijwtNYLcm8zNNVBHU2N4rQdfHn9ioXUW",
  "key6": "2mSPYvaQqrVMvQ17fSQhuBjDnV91uWLFJHai3QKe9x3jwF8g7aiYAz54eREPqbgUEzFM7nXUkQauLcNRwpFj44i5",
  "key7": "29C1sc9aTvHvyQDsppyZ81859xHfdRG9JyRrwG1p93jHFtu6sKZJUhrHxKv8oUg2dY6nHZnLXwhjaWAyB8yPftcY",
  "key8": "51FAbK9632gU1JXE5MiQuFjmpSbCEAKkeRqkcytmV2qbfBt3aVRhoPu7A9XwAvAqLGDeLGthfkS67qfWdVTfuBSW",
  "key9": "jn7ZNVYhukpJnpiEBahx7239aunf8F5HzF7bzAMosFxUoHdb35RopiCHLagDxz12o2oW1uPSLsuXcokk4ZQ2Un3",
  "key10": "2xRpTHtxuvHXPTqTK529YYKhUtQcBwrSUVES2mV91rGRvar3wnvCTxRzRUKwmhwcnwwRtwbpGRDg2Ghaqr2SyU2f",
  "key11": "5xkcEzV3xG7zs48spZWtyZq7Wb9kCo7dSzS3JcWezcZ2oSHcWKhHnHFPMcFZ5FnZcfbpvEfi9TRSV4SsPZdhQwKM",
  "key12": "5iwZquom6kW1uifaux8V6ryFArcb7H8bwufNYu9dEGa9YRf3e9ghrKD11Ccse5HFJUMmzsQ1ZBkEcMmocFPFXja6",
  "key13": "2iX6ZDzKzQniH6p1XzNjvppSqJwmbVUKAstQYnf5huFo9py99AQFtCKQV2Jk7AjS5erXTUcADCZFNVSypBvBnM3g",
  "key14": "5GKVGumKbs5Rhqn5eH41wyj222iBG2iPeB9t7yiUsdFKcC5G3vU9ixF3SFQtUtyDJA8sEApC91Rod2GweQNtowGs",
  "key15": "3jkoM4FamS8CkvKjqMY25jhuFEwqV57J3wBnaun1JKG6J33XfDppBKqv8HrHCK8fXMXywTRAKYKVyVcS4DboR9aL",
  "key16": "3TQFSeotsPK8poUo6WPR63aj7BiJED2YmjeJoe8jEp8bbLvQ6FhtCj67kU62JsQQE7zdd9h1gDwfzp9466r5pshz",
  "key17": "2JTtgZ1zoCQfEFgwrZ6aEcq37tHeyCPNX5k4cD9YeZgMGSvBPxpcc1ZwBpcJ5YnZa8gfsywnin599ENwSb3SSqd6",
  "key18": "2tjNLG418WPVJViuuoQkLGMA8nkKc5Vvz3MzuRH9G5KHMX23E5EqehbRTbXL8qr3PeD8yE1aifibRNvqUThvYEKh",
  "key19": "2RZWLhXxznZcG9a1hZHMrKUQMSxY8i7zySg7tbtRmXA7mGQAtCJDLT8zEALS7tHVRXDHRP86yjnPUApLBbu1rCUQ",
  "key20": "2LPpVjDZVTbxiCdvz2cCPVCiZqYJ3EPBijxrgNuTw7h6cMTPaBWZeB4kFBf5mejiPsoBWWFhE9ty4Sc9XfvyD2Zq",
  "key21": "2yeFDKQ9hq2HaUGwu9iuZ6JJYJf1TZ9LPf9pq2ZhGFNfKkdmTHCkwL7SdHVC7LbqJA7FC4fkKMntmYtTe1d73AXe",
  "key22": "CpatpZM9FzNegZAdGLyWGxFmDRvm8ZnBhjQH93tXo16SUMbc38j2njf2VJbZ5YP4xXnMhcdFEzVnYjrNSVgAMDP",
  "key23": "2zKxNjRjkaz88gi5LMBbVybWsvEgs3B6q7UJSvHML8FxMBAhx87fLY9omUb2j471NbxzSC4acyNRsYJBQa2oNrTq",
  "key24": "4vn4YSg9UatVRYshMd49Lmwe1rzhgGmrbi7MGo4X8m37cw9tCLtm3n6eA2iVTaRBSDcN4zK3ANq1k235uQMUEXeA",
  "key25": "iNDv67AaHCR5HWtKHxfgMJ4TTAG5CTUnLE9yJrf4tp2xGJDdp2csnh5LEivfxDe6xi1P4CcTJe2Gz4iaaGv312M",
  "key26": "5CqHbjWRGFaR6yPekJwrx2i2KpErhPW4zdNFwkJs1PPDn5ExXUZTRE772ZizZffnQrmbjkgXeZU85NyJCwhBqJK4",
  "key27": "UtzBoBzjGJa1b9uZsMkFSwAa5UPrvGQHDk61mgdd4BDfR3xWqftrskELur97v91ASigns6odEzsCV6PXSYY4zcS",
  "key28": "5jSwirYC1DzF8Tj9vApG6saxTUTaenHRzfm17CzHtA29S1XgqA9istsoyDrPZnDZR1CDbbPGUCigu9Tc9jiCpzrs",
  "key29": "GJcG9EFBdnn4Vudkv8ScgAQPAEXxm6Byoass6JSSJb8hbUyfw9PcLEj47DawR1fVavhqL1Zeicsf1D4Ain5KuTG",
  "key30": "3TwsKNQbRxi6UdwS39wxJQtBrtPQooLogbQ7odwtJ2m1kmeNFuMu3HC9U8qqbs4dDwEZ3Rved9GexZPZTZkrgUPJ",
  "key31": "3UCh2XfNQePwWoVBatitfnxkPw58dBH1MMh8mZnvFDMvMsTyFLSF38FKNBS7u4FCSnP5tXPPWgjSR4nofYwgBY9p",
  "key32": "57uXH8iLFRfmUXAj4WEaQeeieHNiSLnctiXW3ArCAXnRDzoH2fDHFFWQzbn8ogVtcXq2MJGRzg528bLnbJc1DusK"
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
