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
    "2C6a6wwzq4Rw5UhVRmVNr7zA8WQhGokbggggzv4CxVDJ3fFzyzs8bU6ZinsbXrWnAU5P1oAypW83C5yPUFEDpNsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5DFtCWBD5jHdJybzDWfrGKZcJzQaQ91zQQpNHuJ6uSuqvuvVUEomLrK2Hdj4ghxC7ZDAcqLjkNcTJjHKr5wuAx",
  "key1": "5XKXHRLZwJB13EvPijmur2c9D6R5AGjHgMPjnHkPd6Z3pmZ7X5SdoXhuaWaiAGSwLJRM7RGAoxX3c16XWWP8fAqi",
  "key2": "2m3GGBTMn7yVG1tqvKMuygL1eVgQEc6zAyJikBRyEytc8Aj6e2SGk5CRLk3heseRouEcq4mfpPVzfT4o4wUYuc5H",
  "key3": "4JmCRFHJnqGPhyhRWq5o6wdaa1V7HtpDhbwMfPF9E7AmC3Jj9vENk8cTbfE4PobvaANjpRB6z3qscwnuPypu6gAv",
  "key4": "4tWZ9qVMBQJT5jDFkcEZ4QKJL6KUnsQFzU2jeZ3EnAEfJaoEGfEJNjjMMNr92vEpAadeqtSf1tsGd44SVT5UeWcG",
  "key5": "g7UDKj91MtNbkPMpCXpoiNFTP6jz285uYWurTTpG4Z2y3XJtNeL8QJdtADAbMvds8jFmHNgkeLuo1eGU2PNatx3",
  "key6": "TrpmYqzpNTg2PZPTScEAT44yJNSA5KReLEK51haHWckdWkrFaJvRFzxNAhvkHuVmUeTg7Z47rPeHDwG6AwS1P7G",
  "key7": "cUqc7okjxSv5e5599fEL5gNTJfddMxyUt7fogL6e9qi8HZPjLMJcQp9W6MCSJU5nKkzejE46GRVh4oJazCrcnqP",
  "key8": "3agGArtWdM7eEEbxXptjVgsppmCJ9NW6eMrWm8XViru8aAG7nLTeL3pEa48hVk7zssCachGPgThLV1FUGtiq6Dts",
  "key9": "523krRmSBAj6XyMeb51Rmyqy2XUUykNgU7ew3Jh7ecUiqEm5LEkiXTojkRvPSFTa2Ww1SgFYQgHpgnryf8cUYhUK",
  "key10": "2KXFfRTJaMekvkPxwVWSyMhVt2wh6jeGY5bEkty9XtC9YR2AoybD548PFZmDswdeS56fyp4WLwxSBwjxmpH3Nywz",
  "key11": "uhPvFxqEZKiap9EZFmMQiGRHoJ6p1wjEcqgmZktuHN42XNouHP54SMuKydmPNAe5q4uXBQrwUnkoYdgC4dNB538",
  "key12": "2WXxVFRrL3bzcDfR9PaH6yHvyBeifyZVPUJzaZJjpXwwQp75YxUcWjYeeVtoGWTwnqKf19hehSPbrBmqrVbTverv",
  "key13": "5otNEv8EWhdPdzy9T9tqhvcTiGQ9p8j9D3N4kSiWunmjuX8HkF7wauwvmS4eJ6L1B1hQZUFs6cSXkKVGsQchJx3n",
  "key14": "3P73jmUYcJoigTFUSr4aWz3xXhUGjHFetXpTEMK3qJs4qBHazHgKQ9qEDUqJ5unQtVYTb2w3QdvxLqY5vpBqzado",
  "key15": "3ThpX1zSZdmyASgY9S6hpZ2TJpU2iamSHVfRckcz5psrjgQqdV3HR9cSKm3AP6D5ZcRrZsKm6Rt2nb6B2Pyn3af5",
  "key16": "5syagwNbVRSmpJ33U5AmeDae1cecGNQ7vRTPSNHdYis3VaVgkjee1MnGdAwMJwNcrGSiuezu3dgHUcwzSnDBpH6W",
  "key17": "32NnpDoAm28L5DoBu1EP4Ucqc1i524rPNqtWKrLS3p95VV2twWT89BBYkjaeVcLw9TpyA5pjUnDxTmKKqQmYexrn",
  "key18": "eQFhMZ7ziZpEXZeHiDaxRxo6f6KVfJ8vDiJr36V8uaGP3xoT42MyrvqMteoXzQxxkjEBGtfJHyyELCrn4ULKbjQ",
  "key19": "4xtAvJRwDzCtCqcmKc4RSBwji2nSDEBFfHyHx2CoYKRXofkXv7qxA1PPT186XefQbvaNbHFGPKuqm8m231obpMHo",
  "key20": "5Ci8QweMeRFE5GPTtvuP2jc1Pvm7gnwYRbA5S2pRNoJvQi6S7touLSQpX4cLwkMfHMvynbD2BwikTBgZGSxYzuWt",
  "key21": "ncjTmXnnTX7NHaDtrpxN3HaUmhKF2Novaz4cyrQvb35VGxaJnaVvyMhiQyshZvpaSRyJQHv6qdGU7bon8yRvCCB",
  "key22": "59B2M6EwB9BpPDSCfFkGBDM3ewrpRqVErQ2dHq9h5stPAH63Ado8aPNDEqti7qWAg17JwduvjZv2H7XHAsehDjyr",
  "key23": "4kspkKiFxeq6kgGtBsKzYhaSUeyF4c3JUwGcTM28JmogbMeGY12UdwKwxLsXe3PMTHFUAnjMq3PnAHfHNbbdBHgR",
  "key24": "466SEsMbU8d2uNZnG5gv5nvPiKYW2519mT44XDeucR37vLPdmPQKSwenfFxxYpYYctcGPeaE4bp6n9VDGcPngLdu",
  "key25": "4W141zJ1pY6VhRPZ1XNLdbKroexLiHwr9dkNZ4YK3hoUQmTZtszrRurd7omYCFM3B99wFb4uyNzEM3cmVBaivF9w",
  "key26": "5ykKhNqomryHZMmHfiFrTGLTzrbhYMVXfKH2V2fZg4pepvWxBR6QaT2MnEfidsTLgNcxPdsnz9NH7BGYjwkJvAqy",
  "key27": "xGczUTyJikxPXjkWG3thV5a4cMaenbJVaKYWXFvQ7hQwPa8x9KmBXEzeTmZf3XxVT1bQCBDGdVabix7cyCnC3Ur"
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
