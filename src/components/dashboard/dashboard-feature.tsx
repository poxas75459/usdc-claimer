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
    "4s5baEeoRPCmtrp18RV4aNZcVpu2FWE21gJU79ewxyCFkSj7cRFSZXkZ9zykkCb754iLnz7NxDPZ2X9A4uq8zcza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4thUkartG2aM1yJU4qqWGUzUjdW5GBFUW6SpHenjug7RCP8TZigvEHdSEqNVjq4pQyCrV4P9aZGqr5dtkE3EvzvV",
  "key1": "4RXUwRXXzrewm5K351qU5FVy72S7T4LHWAqmxFuLS7f5Lmnm3DwMKuDbS7X48rCgJXAbeZvViYHynbbS2KmBEe2t",
  "key2": "2PLxzFjNmKw28UfwDitQ1oUttW2d6fUqHg2Ze3DYzqk2HyT6rSkjzxSDNjAhnuVtzLa6WUvPFD1BfxpCUAwRuQpC",
  "key3": "3Yzg2Lt4VfbSh9xEbS9nPpgEYnKV1DtWiDvE4zEMxaUc6ZBua9X24aGEogiyrzFXwCm5kjqQGX2o22sDi7Rw6hBd",
  "key4": "3E3NkgqLyNrBxxduvvxswyUf6z2fQSQBqFbK5bsnNEtZ8WEKbcdM6akrqmGxozgJSFXMaoweUQ5nescVFqHDurrA",
  "key5": "4Duvk8cBp28sphEhVRspMWE7VG7y5JdHTx7Uvy29SJXpZzz1jLcj8gNJA2ggCK8GSWg9UNukoJ12Vbd9zPuqKZHh",
  "key6": "41GdD97D9CVxMqgbLkvHsupxZkzkGJGWZfGKTg1AJuNmqahXoPYcnhFhGHAoyzxeGft5LHE5WAT1zkkxhqirBjtn",
  "key7": "vDwcVUJGpxoY4kj34ezzK8xiKGHoNmXwQqW5XnoUUn7fWzscyDRyxV4Ndgku6RgGirrFKM1AriJuJ7N13pDErF7",
  "key8": "3D2rrgDMikhWNkFszhs64H8GvioyRb6XVYfKwCBweDPnp9ceXsXsgC1PtKFrZMBQgbR2JQAjNRGw25fkpWrKRFx5",
  "key9": "3iAjukbeJANyX3fSWayARdcAbVe7hMDRuH4sDcFpUz3w9waqZcahpLvxYSRisybPwybgXzV283WRYTz8jSPs5t5L",
  "key10": "BBYhsyXhm3ZfZh91hBvc6eCkyfbiDN6MWskYz1hE116DNzPG7n8hxKiqnAJP9dBggePQzVzGyAbwLiAVs1hsUgy",
  "key11": "5ymvKYMcQ8btNccRmDKwHNKVDQhRRRPuANfdzJwaTQ3iWRXajyXreqNoGtvq1xeBLVpntHG4hiMiY4TBguk2u45h",
  "key12": "4oaJShDR4PsSbpfyGujzBsaQtFjFLi7gZ4xinZdF3AUFgYXAhWKgmaWVf3aPgmBMLCBj45iuLHrn92SnB9LnzXkr",
  "key13": "5oTc7k3oynjhW8VzCmqmfWAwL95FUoJwuvuABpEpFr8ADWgnj2NHPBdXF33rqCKADpsLYvCdRtFnoYdqo6dKbt7h",
  "key14": "3PHSoZW4vHSTLrZbwPCFQVtN71ci3m8L1sBdV99EiNwcZckszKspxfA1Czip9xxkVbtWSSvHWR7s5gHh9VwBtyv",
  "key15": "2Tkz9GkefqZZogD68qUEMou27S1gCLFHsc7Lu5HLhUERMU2aGuf9vPQLDUjUwE4jrBnne2i5sWbcBub8VRGvn8cJ",
  "key16": "4WCn9djCBjPHueXZ9eTwsnequg6JoQwtrvXSAmgtAcuswYFFaRWb1VxfHdNJpRZULH1FuwQLb1vouxyhTTwJuQGP",
  "key17": "5cEH5dWkhRUdhXvsPU1YscsJS8pnu9FDKrFnPKvWhcMX3eMM87Ega45shWi31V2HMCmi3B9JyYy4p9jfWaXJxEgv",
  "key18": "312NNrSd2Veoic2MrsBBg7FiZeueMRbhZ6tGpUySa5PuTR3N32Myxo2DPFGuMWd8XMPuzrYBoRTjJMberWWVGPA",
  "key19": "9Zc7hv5xHDvgKQjdFPMRgGsxSZdn2LczMnUPt1BeU2xf3nBBgb9H2cGn63erRwRE9nE2MSpVvrVdPmuEmn3V39y",
  "key20": "3HjZMXSvCWuxJ7GKaDBWCjBqmknBKdWUdB94eaj7Xa3uRHEXHyQN2RviVuBZCBmGmmigTEPKkNFsWX3bDKN6WNSv",
  "key21": "4eeEhX4nZmozfTZs6Q2LJf5ovioCsbfyCQEGCkfprcL2dwc8BfVGSGBdDwMEQgMttnZ1whjg9w9im7tUMCehqc5w",
  "key22": "52yc6pjbDpAgkJmT2RHoSySUao418Xo1EczPJtNNNATobXZZXqV3ET5PgpRorab3CLmmxSBJ1ujXD11vejvvDGPb",
  "key23": "5p4TbrsqKRfDuTDTvcke2XErhgdeSrokKkyKbHi6qv4wocq9krnyzVPrfdBMux85axAx1mVVMmYxWgAjCeYsDEHJ",
  "key24": "4mwvhDghsDq29ShBcRsJGG2vDje542MSdPtqVTTJpdfGKaPQPewdtCLD3GYzora4ZymiwZjKv6z9sZZKg34bZSdj",
  "key25": "4fom3LNtjSBQMZUPMxs1gwh8mqgBmcQeG6zh2TxYGVGXQWM9JmFTD3HGmB83vETEhnb3SvUVjXP891AtWFBEiFaw",
  "key26": "E7Mdw5j3nKipXWW9mYtySp6pCxtvr3EybpscjTfwnC6PtLMfnAWeBg4XGA9WNXoPNEujc3RtFm8Z9ePpwKAPmcS",
  "key27": "5GxevuWAWwfxcMbgfgSJ8UvTkZ56aCehroKZD4D5hfTMBaBgMcQJkohajmfCpKGp18bjCwtbmm5idTH5x2UEz31X",
  "key28": "4oc5583TL2SxqXUbCBLRJxz7hZfnhLUtz9EswKuAr7p7unVLQbpTkJ9kHmVzm4Eg3WLqtCoZ1nac57aNZTsexoq6"
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
