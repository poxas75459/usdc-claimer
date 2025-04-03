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
    "EPMPy32yEM63vJSVFzyyY7r4hak4rYjpWD9USfAyj8WDqFfaAtqsnNraECdr59wgm6TtmkN9G5WWS6S4oexZfhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kg9BbCwyw1Ks2p1BYp7gYtWQDtB3LxkTEHRrDw7DsgYANXV1gfJ9CWMnsocxUmaE4tXQg3SsXTF1eebn47JCFk6",
  "key1": "29AyP84tVx2RJqaCaxUEkfrKBBs3rjAupXxKguRUqepc4tak7x6XL4PGZsW3kxLExHPQMSAuocrZWjVskxvCp5pD",
  "key2": "3WuuToN6dQVf3dipwq4C1YdyZWGDn4EtQoySQtGh7iJB3F55jDYKdHEoBTCXRHSHtG4FkwD6e9cTDW9ByMoopcXA",
  "key3": "3Mu1iKy9ccPZ6d4oNhgvioYNAQK38BiF88vN6FCnJN4vqnxvAgxWG1TyGT66DWrzpRfJXm3QvJZodx2sB4RkpddT",
  "key4": "63XWRmrPGyWzhTGGYr5P3WiGSBdz97QeCN4TQK3tYp1gbhhb1ZyV7KKKPSJRbgBn9on1TLJb9jT7kVFckpdpfSrF",
  "key5": "FQ3Vis4oVhYMhDjfrPNtywRifpJaxWwTiQR9ahbSYEz3Xe9KuAiRWYDrJCxv2WfTSErBvvGAZpZUaum1KU9RWQT",
  "key6": "29JAvVYvyQLBjQHdrn9PJUAMyXT8h1GXvJiBPrvzXwWaW3VT7jHe3AnM6GpXr3uSeMwUP3oyHJjq6Rzciz74Xvip",
  "key7": "44GSfhK5vFGsLyuH43oPDAqBTR97RGskU6Jrd7BYx8uD8QwKXLrDNfpzBdfqzjCUUNr5ncEkaTdVgutuxxidsN5K",
  "key8": "4FW1rMuD2eHEVGvn1Kjgcs1x4sEwBDTPEzUDhq5rDNuQM1wVn2pcCjQQ6L8DvLe4AY1xbwekaajvNP7ttjweqxcF",
  "key9": "3Rc36TjvbvDVHmpf9eBJjL4jGrcEjKwNaAtVa9ckjUnUNbWNqkJzpPzWXiWNhC8PXvcFfL56TTsDtTJreMishc4a",
  "key10": "5cZhNShjeAMMuHkbsNAdXWyY2FR2rtP1vB92ukFRgLsj7L8ALJyfqQZWZoXaJQTNaANWzCGeBiULq68gx6fpuyYT",
  "key11": "3iCvKRQr2bihTSBrsoM1XZhgqHNDx3oS3qoFLrbUbgh2PEAJRm3A9JgofMvVyjAH9jKZoiW4YRtZNJLPCFkmaCAc",
  "key12": "2d17Mo8BE26E11bweoiDCUu3sSN9QKqbwWf3TU9jtNohpajJ4BKEoWpNirZRLmQBAtxssP8YXRGJqeEkeFTwkLz1",
  "key13": "5Kmg8Z433fURtoBSfrGMo6MgZybxq218pteMforoXip4nAyWfpNZCahBVRHeWjyQ3co76LQpBMyAaeQY8PcnWc8L",
  "key14": "2J5cHvA6pMjt9QKd58s28AVUaRcpXwn6WG8fhkf7HWsPhLkyZGNL6gdJyyWLifMV7VMkSEGPkeq4XiU9ZFJe2rer",
  "key15": "5Y2rFXfzD7S3a6jb2QWU3roTrecGDb92qCnHkPFhv4RW7ZsY5j9eTBCNjcirUz5fNwDEQiUL1WCkWv8S9waAWqzY",
  "key16": "2CdNJKX2jVsytsG6Tz2hqUnMhwJ6kneBSQeW6uerKUXsKfLK5sCXfHbYLNPLW7zDFCBbtMXiSwS1VpHHvHSwHbYN",
  "key17": "XyTbtHY3GSkNqidzgJATLf8YQjdDwhr5NU6bzpxpdxmn8K3irZMb7sc8WTen9sibLWjYQSDy91s49o5xpZBQ4eg",
  "key18": "4PU1ZsC8L51gKvchG2GjVpR6QWso56gPfvu8KdZ6C2qYtur657ECNkRtSsyd9qtu27pE52AaJX1CrdGREqMSdMzB",
  "key19": "VGfVH8xKH7hsFTTcfrLHdBHxUs62uCQW7CJADkodCw8QyskxYvi7rnDrPKSyRnPyp4D89C6Ur1dLUrJzSYLjgPY",
  "key20": "8q93LZuNTuPKRi4JQ6jRHfqd545wVhzxK2EHzZbvxFBxQcpXK9qPtncphwASDFordV5P6h5KNgc4zY9dReK2S5v",
  "key21": "2ZZYSg7gDhJ9zoRjyA5zBi7ersRQ1gKC9zGuZ9zchwQfuFcDLp9jLE2mQKbRucijFw2bSwrdgnTH1jedmbiUPqgc",
  "key22": "3edMC5VHahBTiXJSWjwJNwQHN6KdN4CYRoo8TVjoQtBTPBEJRgActnWqaF4oLBQH151aJgHjCdoKaxBkrUpDpHD6",
  "key23": "546eSZMZNZKsSNurppv5KtMruZuDTLF4mELFrzSXJ35oJxszmwkRs1yR47WVsTJkmRFsorxXPVxYNTHMUEcakBff",
  "key24": "5n5cX6NixqQv7VeYe74W6KUVM53ZPz6VWSLdigRNxSBGxZA8adbRJJp6rZJtGiNcVAj1ksA4nRPeQ5cUy3T9aFc6",
  "key25": "42Yq5dnc11zrwYtgQdUY77cfnbvCngGJ9SRFLHgEWS64mSoQ8cy5nDikir4vzjAp69cXBtW7Qbk8r9r9V4ftmErV",
  "key26": "4vjzC5sQ4eD7X9YiJQyjqkPPbwEzLMVHFqL7s2G95ov3aaxxoEE7bz6Q4wbC3xYa58oXJmhPXVnE6eZVxV6siVeR",
  "key27": "3GhQdUbrMqn8zj7grhDjKkeU8k81xFnbSDuT4AjHMgaJLuhJcK6iYvFg9bJ6tYU3X99s3U4aKxkfYBG4XXJaiko5",
  "key28": "2tPwvqqKkLYhJWao4N3P5k3EudXMXCDz8JL6fTGeAenoFJVqweFjQGfoRDEPb1bkyZdBPM4czfFWVshmvsX24xkS",
  "key29": "5jDYyPQnDcYwumRBgJQLvZzoqQeUmdt9S2bycTik1jTt1qJAUoRdLxxKb31MXeqJZApJUDWBYeiXtKzJ9zsQjuLF",
  "key30": "2maxfpNFJ846fzPcc7MQDz5JF13pjMbduXRuXDQCVFExfDbtXSMbGRZuTt8FEVZRWRZkH2XGhdLVe1xPrWaohK5o",
  "key31": "2cKeBDyrmyHKc4h8hu7mGf6mRxjdtsP7tTYCdw1vVymNvwaHz8N8VBiGmEbK4qs8PpU2nqfYd45s8TJ2kVLDXQe1",
  "key32": "644F6vSLCaoaayyoTz1Em7zQQzSgpqkenLEj64RHhci1MLpayK1hjZbmwN2yoyVAYeyjF28WxLZDY3geEyFZj1Lq",
  "key33": "4aS4as6W2yGwFCCBAvwkDEL6Ntcu2GpQdHeZUHesBCXK72Sa7RDANx9TtnpFvhQdZsbGvHujqcRA4cWK5Y8gRHqD"
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
