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
    "51wCeEGh2Kds8cpCttxmtrsiPqyyTd5Jw21HwekE4j65rfMeKUFXLLd5KkUzMBU3rYhyFTTbp6MZszfExvUKWtWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZoz869wTVXsbT4UKAbrcwpBeg7ZxsaofFFGBq7suTUsBF7cwifBMo5Njf9FAWAurxNV6ZEFapgCjytYHcxD5er",
  "key1": "4wFJVK8DjxmmJf1N2UBNdGLRcr5ggyqnrFDxFxrpMwMwbW5TxavHx6WoYgNAABDxX1vKiG8pBP2xmt7AHUg98yfq",
  "key2": "4kxc3mLyKVU1hM58E5CvRgZjuM6A6zSWzDfLWPQXobzmSDiJDzY4wV33viFRFE6FzXfgsGH9X2TgUuCcAAzcZwuo",
  "key3": "5TvXrpcg65BvqJztSfeZ1xpji7a5S4XTXUS2te8SQj5jBWun8cSZcSrHjJxFe47w3CggxACUiNEuQ1CvoLbJtgE9",
  "key4": "3TsdxQs1vBgaVRiu3kw7CDYXsmQM8Uy8jpcfMpRyW4QCW3tM7RPM3fUoyrAW9EFD72cH16ek44dzuUPdkANt1BUK",
  "key5": "2wzbT5us5sm71N2CPnioZKVPPMYZBawLQLbWTJ1p2kAGX3MiBmpnbWyJ9BbbytVh75j5mKzrAHg55VTJfPPLVMu4",
  "key6": "ySFGywBX8549uzTixeBquJgPtWNqRdcivCDx91W55MoTdMVbc36oiwwT7CBQXMkheLLVzGBdy2mjqdeTgfU27PN",
  "key7": "7SSDNrfvG1zBZECc1c1CWcT1RzigSTD13U5W5XyDzHNbh17UVYkzK6WieSTQuFQAnZDyrGSUiwkhs738Bs7wZax",
  "key8": "48TG36UM6PnehyENzxAhYYyvi5JCGZwdTFTeGBTQ6pgmx9hpwrPTpCKCP6rnK97zNj2ut31rYGu7Fvd6VZoYRwjz",
  "key9": "5baKGVRf4Q1gGcNRmm4ttEN345idL7mFMwYw5iFPTdt1KJ5h1re2jaECThmTScRFgcCrf4eYXCVsWN2Aqqx11Rop",
  "key10": "3hFPfdnuugsToCmcochpbhVUxvzpCxkjYxBQgrko2YpEzZFf6tm6NAiKP5N78uFmjrAR5NkeZCmo2AUQCw1wwSv6",
  "key11": "3u4mJ1R6GwwKbmowfmFqVmDpCW1P2SS4Nrv7NymQ6usAZgk2Jd4HQAeZYcMCWBhTuoTkKQ46DT6oNo4qKr3xBBhQ",
  "key12": "2PFyzj1gmXQp5VaK78jZLMjFj4eS1NnoG4kACt97v7DTGP1xZEo3n54tGKYACXRBBP6C9aKBp4niEYwU3zgiKuFm",
  "key13": "3tBcSodnhiojjgyKFu14hgZv2AAtjXLhk6ZyC1Rn4ixPrnJJ4cqswe8zGXdrs2zaoUZgGEDDuVZGE7dyMvKEj1yp",
  "key14": "3XYcN4qHyHnzYPXoUQLNhs69CfkevczP61PQeQ5nMSUU4KhBJwsFaPeX5u2hH7tqKtK6GU9bTUXqc7amQTwVatu3",
  "key15": "3S6By5h4xzihPGsryobYrGTigeasvHi3XVYVC4h5jqWYZuLBYcftcR3anrpLSu2zTZboE5hvBq1BhcPBAoSXV6kz",
  "key16": "2mLdLP4bqB2Fo74ffFBPM443VwdYPj88CfJCw4CK5UARBXyB7aaW7gPz33KB9Tn3M7Q7D1zVcyH7eh22mzTns9pR",
  "key17": "2pjecYmsyGajUJM41qPg6qMrXA4J2KwjNLdkgtuNgAKyjrab15QpYieJA6BzHAQt929TJhUmeEQFtZq26QwsCeXD",
  "key18": "fTVs53RPUC1rnmSdqi56Gm6AaSiR5aC1CVkQbJdJwcNWcjeN6ZFYSHZiFn5rbUXjyDuWKgXJPQh3bf7Aew8KY3J",
  "key19": "2ibPBkWA66VViJHXVEtBpt37jHW4mZNqHEN3kNuuHrtm9h6sRBANxDvv9kLbpnp9rpychbeayppPXytFfSog3rZd",
  "key20": "3v2oPapwyjd2yrPJ2CoZ2XntiKLAxZ88AAY1mQdzCosTJspbaHZLUPGefxuTm7AkUMgp6hVFAiU5bNb23CmgE6mj",
  "key21": "3QHFczc3xLuahpg6oE7HyHRhdGgd1mjVwDTA5UZNyvKaZTuN1BUdhYhc3n92AZEJyivWYnM5WGAZnUfFMCzFC8em",
  "key22": "4QxSanFuUimx6BXajwnibfNsJYG47WBF6fGFKSj3r8QkEedRrrf4qLwstcY5ctpNR63hWBiqGEWaiQirzzG59UDq",
  "key23": "S8tUTXNoGoS3KpAYa9SYVBsH6Ap4PSMdMSt67JnQJ8LuJnuL9y1ggxbvLznKE7dbBbEon4qTTBpEHFAWknNN6yE",
  "key24": "56kVDqHcTrVNHbBKthuWkFrnwqKRcFPPVqYXd5UiBzehzVu24BYcA4xwkiTpcCZpL18r5ci8392SdfUTWwtPPsQw",
  "key25": "2KACykvBLiiQsZACS51Uf7yKZsURzWru1LgdTWdTfngY6JQfT4WT5AHwBj1sNuRsk5DjK5tVU7XTe9i79tS3SSjJ",
  "key26": "kEzivYHdByExbn8baxTdzBKLNmHaB6N2d9hMn9xh1Q1t1t9sX8LkvdXiQpCUHQL2T3DApjnYFRWFXtxmeqKtARV",
  "key27": "5DAzpXUL9N45Y4bYeF79PhBjjNXhFHPwZbRpb52pn43CUhXecdPtWQ39SgsrZkr2VFkok3dGqQw9fd8BHtMtt8qn",
  "key28": "2TZxEy326786k9FSFaW3GT4eWrrcCr7QeHogXd1zsMYzDvgMAUyjr5m3Yk4zELWHtpdeDSkDAP9k7WJJRvwejtqs",
  "key29": "33G5EDcxctpekUPQuMaexfrm5X2dX2UeejC4psB6RLoDLNquyowaWJ7kcizSmZujiwYdravgsZwbGDAaMrxkZc3P",
  "key30": "4xvzkEUEF5x5LFZ6GARgx2FM2gZzadsZfb3DsJUnArUY8ecAnCgz2YbxPqnrNf64YD4DcqXcj4qnKCMuPpCamj4h"
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
