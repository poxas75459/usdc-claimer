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
    "537tDLsxHbVQuJvihbQxdB3c78iJY6Z2UrtxfyoWjUkBvF8vfF6wBpb17eVF7ERZ1GWRSnVHkN8CopZqJ6QCsiy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wTY1PLytWiE52bzpvaVSKD4FLxHtqcqFzT8HkpGqTdjSzeSqERaNonJ4ABXsFm885Stia2mBDc7ENZrsBWvE9xs",
  "key1": "2oEM9jQhwtzjZj1qXtV6SdRqNZFB7ZEkHhV8pTvgwHrD2dGEJBPDCQsuCVt75kX1H1CH7ktSHt3GttJMWgoQRPnZ",
  "key2": "55QmpMtYxh9yahRbH9pVE6Q9WGYwUuRyW7y89KXUhEzj57JCVQXd2hSpwcTnuBToAuSNfDyjhfBjJsMDiuorLBPT",
  "key3": "58DJqn9xYBDFz11x5PnngJPxiCFKUTLkMNFGCATjmnLEHa6kSQJwH2VodoWmgTJjL6TfU6xZCsBKQ3XHP1f8XkeY",
  "key4": "3aNSbCWWTXs71jtv81FatJsoJXjtoWMq2e2bXnwUFPZ6Cff2gFXx2FWs5h8AcSLDNnqsG3peHtn9y3HsKmear63n",
  "key5": "4rCVywsU2AQEEiTpNqLhpaDe6xdkJUpRHTFCSxuhNsdn45PHiqv7aWqoFV44XPyHdnuMbnuRipJgzaPkWj4sr6ZA",
  "key6": "2dKgiCMSKq8mFXXwB5z7DiLy9CBymYygK9w21LUeSHrxBhhuiXPcgsVzq3jSHyxmSszHFSJjc9nDjyBMPMDfvY96",
  "key7": "5vAGWBEXzuwXWeB2u195eEYX6w6eymfkfnUXZwcYH163kVNXPuqcvoj4aEy5FEPbosLX3kmgWjUus4DdCjRd98PE",
  "key8": "4M6V78SQm1AeCfhEpwoJaAA1g4A2NVnEhkVAXVF4oEq4GsGVKidUd4YcyQudGcheA1L3svQuzfJj3XCQcFxvPXJK",
  "key9": "3UM16ctQKwd6n7NhiqxnkxWEAKP8Xo7cKqkHGMqh6EA1icHXBRH4tfJN4PvfpQxWQvykLpDNmVUymHwFbywcgW36",
  "key10": "29iavnNPCNtwFEWeodpzTJYmkAFKvd9iiH5NxNiCWbbxUkqNqQbHeJLyqJijwUn1SCzA7V3nQ2pKT2mHrRsqKQKv",
  "key11": "3QbkcFNxKA7cNXgxu5q8FEc7vQGNqvxZTyyypvS1cuKsyW2zfpPAoua4ENWSaxMLjDp4FN8CS4nbpPwHhc2r2e56",
  "key12": "2meUbtnsC389ek1dhy6hH5M9AboE5GzqCtAFQwwN6HFMEmiJf8TSFE5K5Mg9KXdJL9SrczxZuvQi7tkmgqBHJ7Rv",
  "key13": "77FbYsAdfa99Hf4uqg1D9rGhVaMJxfv1zG8TMqLw6JydWwhK8MPMm4hbvzc4y9oZHKqHiNJi13eAzfTtPGDaHB9",
  "key14": "65HEEhW9K5jE6c2J5uFc7DB67dFyPBXPh6WqZnLSgkMs3EtHyuicobWf1s7y7vcnywSz5C3DEiwL4pWyC59P3LMN",
  "key15": "3uFaLijwtjBvF8vf3qMcCVPnH6ey8fXbvTphZ1nE8pc2rS19G5U1EkYtypGv4JWEQutw9TdqSczuFJfByPZDGYm9",
  "key16": "3WEW4KofSMQmtjWxdniZpP1PS5KJQLoNAAUt3Rf37LBSCyeosGupKm3gxjckPZ5k29BpbH73vx9U13c1KSX1cbb7",
  "key17": "3sVkborvXq9YF4Bs8EdCK6mjg8TFtfJXSrSVCXWGzUBnwAZ2aDHALL1YhWzKNK74hxhttFeqhLFTX5tVengRt9S4",
  "key18": "3fPUVemhbEZoi7dtB2eCqWyWvL2i99BxYZgXrYYsZGXdmkzsQ95WzCWjBYYsMfg6w3UD5Sm4Rd8LofRbQWKpqfZC",
  "key19": "2FDv9FF2iQwDsXK8VLQgxQZurKHJBqhKMJ4646JT9CG2wybtGDG9TtCF7wnRC6YYtxtXiB9rNTLbCyi6n26nBrem",
  "key20": "5PRQ1Qcx74GnMtw5TcV9hyLamBrPSCuRrpYDPPyZP295Jhg44ZuQEUArFe3CQvxcNC6jZR6N39HUjBS9F3ygJJYj",
  "key21": "5ncw2WBvUQgxAc69oEqhxjR5AUQ5cRpn64kM35ajFuPHzStejPcC3ehWfmbZDbtaogkdKzngekSeXXDvUH6965EW",
  "key22": "3gg6uvBgEZ8b4Hw5gW4X9atPvfdck7i9Xtt2NT9qj28758YgpY89DDVQrh7WtPn9Z52YqVEqYrnC4i6foQS5gqwS",
  "key23": "e9ZGGLGtk7VAQEUNBNfUSeq3Px9HxPXtAUeA3msGCTPSitDMrvfsv2ojxsa6QkUkmPSzUZMVBKqRTYupJ2wYE8Y",
  "key24": "YSMEfep1ehBgQXgo72HyNT3BpAR58hB9nkk3K5aMhKUmzy5xMgiAybyjATsVspXVAifzrBHRpyHM2wze7v6rJDH",
  "key25": "qZciqiR7aKWu9j5GvJqvrNabGfHFcBnhUaLVw6mJjqFoCpBCYjFvCLzM5PDHSx7KhyHJi4TrnbXZguomYtpGyoH",
  "key26": "2K3LpAF9TKHmYepJv5MJs7uaQbRmsjKV2svMAtxe7ZRz1YoGyz6hAcyByTg8fFGoTNKqWbXCqGquYQ2f229DQcb6",
  "key27": "35FDpq1JtZLp4agkrsVdvAVdtpWejpGTqZK9foaydvtcsDEKvpkYNEqYbjnNvazhQkfko3fTENH3KZ1sscDJvdRe",
  "key28": "4NRdQ6pvcK9up29ArCihrA7d7U4GBw7wqcR8UZromY8jgfaBtAixJJzNBCvFeuEdoxCqqgoQPrni49NnwypaA6QA",
  "key29": "48fcBsXH5TBy1VHTFLqNaraqFk8oBgRZSjvcyUuDEoPbDTx7bdAHfD8N9NFkeUAkU4pFqNuVj7SgmURPVNcH8ARR",
  "key30": "BF2R9Jz3iyExKbpmW9TwmrVNrpptHreVdaYkUPSpXyPx1uLoom7s9miSf6ZCUZ8ZViCwzAGtzJbjxwqiAzHLB2d",
  "key31": "67PaUvdzqkLWGumosJD8i2b2hhYMVH2JzK91G91mgrRZAwgqYEMxkXdQQuRDWmSxXyKuZ5LWvccayS725me94cjX",
  "key32": "4TWiqp7HV2PsfB6kczCsyCGrkrUZjfyp9D6NnfFXtCVYbjZ7gWNJ47MBT5vThpsYUMzypTgVzDTFMygRRmG8992a",
  "key33": "4sM8Ytu4xC77ftCMdCWNWoi6zGi4XimTfrWVdS96deXYqk9GTBPKDQN4ecvXQX9e5FXQyVzxu6VBA3qnzrXbQaZ6",
  "key34": "eekBDqeJFjPVu7MmdtefxgmCKKbHFJAzZeRxn3Jy1iNJyozBvqGWr5TvDW9oykBUGRZbtDGC6SiGBe8kDLUNQqN",
  "key35": "5AHioproW15s1ETqy5L94Rn6wE3nXTk5vzXPLr64tbRQXdk2fEX6hLuCzA6SnsySWT7KGSt2Q19xvcR5c9NJd5WH"
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
