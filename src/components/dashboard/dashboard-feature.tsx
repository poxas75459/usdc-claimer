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
    "XLTg6oYFQPZcLTKgirPvnLUFEt7u6DVnkKwKdgoUdJy83G9YX6a71y4RudPtFeSeLEg68FnNrRUEFgTC2ekjorw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hEEo4HKERZqiy1F1byjfUZTDLMzoSHZS2ovbugoaF3PEXuFuwistPy5JYuDA2Fqjat89VT91xA5hJ668NVHbm",
  "key1": "5GsdpvBFftEBwR1NAzeg4w26CWFTEaCEfFXUMrMaRrdM1epCcmErRTdbrXTeyiwcNeL7b9pUziCF2qipABynoYxf",
  "key2": "3unt9x4RohfdKNvJ7VZkvvXzvfNVXVx2PH1Q9gfmbpdUWT1WFHnuZ3M6TVi2XtVeydMXzdkAjRjpAmvRsgymwWju",
  "key3": "2cEBtpZuw8CqL5ZAd7q1f1S7boTKXpjBcAkgRpwJqk41HpSyBV53XwVp3fpd5g5VUShNUDhdXfjS15uJU8PxEAtr",
  "key4": "3UDu5Zx9y7rJsmgoRxhfk4BaH4kUU96BcfHKS7NZBVu3UjUfAd5VcL4c9uLpZnTmfr8ufp4wvf9y4zbztToSGot1",
  "key5": "2v2AQ4P4XcwKqdyvszRHFFyvbicegY5eio2w5avjFwfwaJGMLYmWk9kcCKPzL1LDFXjkaqPBXnmvQT92rRVRHLWn",
  "key6": "4XYZXCmCN64Rz6CZt6iEmrZpv3RCBXXgG6G96y1Kod2eDfcMKvPKdyEdpzkeMp6PEEqP4A11LDu9LGyn8KLchis3",
  "key7": "hBHjA6DPS1vHF2vq1bm9odfCBJr8VHCfpc8kYpYvnEiTs9XSo8Y8Ska7PZMxpdAyqZVsjRvbHnMXJ5ccspH24tA",
  "key8": "4ybVEXco4Ce4FPq6QWmgLhM3EenMgCyiMR9Exqwb3eLeRfWZ6ZeAsSRUjD1FpYfMHBTsVmFpkmtAkckfwgZtqeaS",
  "key9": "2Gjyj6ycbstm82qDrMxgZJFEKAtBozRrWb9jVxjymqcyiKLhVNVe3UmdCzYxBXKNMR8L6haqzcfQvxh29C3gpviU",
  "key10": "57s2W4f7HhoJqtn9yo3vkz9zW5UiSe6MhVcj59Bot3nBwKWzYWfARx2djz5PumFt59VrLz1w9tB57mArN3c1xGug",
  "key11": "2X988mjS2WgpxFSredUU1BcWeDZTZot7WcxF47UGudWCGfqDTtW4ZX4pFus9UHWVX43RpVi22kZbigB7hHrDwkxj",
  "key12": "4U72cKad65cQq6CthBRhcLSVjdBV2quTvJ1rQYuf3SkH2zwKiDZGXC5P2VY7uTAWfKzKWLZyAk2QHwno6dZuc89k",
  "key13": "4eGUvjwzsDKMF9jgi7uEhdkQZWJpRWXDKhfyu91r4w4XcWE5CsuE599NG8PVZeHJ1ARzzi2bBi6hrDA83LduxNCi",
  "key14": "5LEgrDZHRRSrnHWrZEktGWPzb37xvkdBhDFhpxnAat3FF4yXsXcKFCVRAiQ6XFADQwQFLt6EWa9ykLzfSNeuA34s",
  "key15": "64Py6NeMkXrrv33Xk3ioFYBEdk5U5HrNtFboEt5z9F6REVJaBwGNUgcd8eGD39GfWUFN6LFnmFYioTSqrXCfjhdC",
  "key16": "2SuET6sHAmbgUguzwjGtTZ93Wk18XhLQBF33YXKLzqByaMK9aeF7t3eYrWSbRaVBp5YhRidXfQg7nMxwJyWmyACu",
  "key17": "2o29zhyGGwg2YBduW1GcGywtp6PciC9Ke24EkVGGhX2NeT6rfgkfrtueCruBBAKEgGBgMH2FTzKzYYXfsYPWVir1",
  "key18": "3j6GchzLNCWhamhtEnuNgahrxCANWoxbJwYbuD5nR96p77r2vXNovsfMCVdgJvXBGyUwSRhHGFFf73SHfVFTXV5C",
  "key19": "3LqVewqReAhVhbdomd9vpX9hoxRzjkkAucDj9bqbW2ZEk1df493Z6othDCHCL1N9zEZxZtF2UahULyV9fJLqYtRj",
  "key20": "vMFoeqTFWTwJZkoJnJW2MWkZMkzRiv7i6trPgnsKXsiJ9u2MWQEhkNeCu6VWWd9YuMFCdnvf3DvgVq4gGnxN7Bn",
  "key21": "4STCvM1Z3p1N7WC1zB9LLZj7jvCs6o6Bfn4T1c7uZ593f4qP4C4fALKXAd8mMjvJ8EAx9g1oE7MRBt5iS2BHMcG9",
  "key22": "5n1C6c8csEvhBuChixg88twvAx8n7aXuuuP6UopUt72tfRGZGfULrv6AjTE3pGPRiWykceDfvzrebifbJTWzrSot",
  "key23": "5gZhC7onr39S88bs6UnYFuKNB7kRkyrSrpaExaKbTM18ywC7NnRbkJkZJx3AmF7MwnGEqguvh24tXYi2zV9sF684",
  "key24": "5uR6UtunDeQbHr3xA1HFa72yLRu9DfNfDhjuYb5nXRhmBS8MQv9cVUiTBzb1jAGSYyaJ8wTBrRhq4SHqCdsFNhW3",
  "key25": "4UY4dDmGbJeeTdnNiXpWdd4FQa17isfmo4S72tnbzaLW2F5cRrALuXioEouBAhkm232kvVLuMpgxrpLCugsaqSTq",
  "key26": "4GqwGcappTHYrefdhiG8qBFENxXrJVPBYidX7ykdYhykUb7HMkhfZYKB7x9JR6FHXRwFWrT5w8biF56Koje71dD",
  "key27": "2UyRSvYjMsEn2o2CeFvRuXkECzNzUv1p13nausw16J2oRxPpVa8iyZxXA8AEvj4ntPhSpRvPhb5BmLhRiWWeYKzz",
  "key28": "2m86K9sKg3ksAeGwKD5juoB3DRmYegVpFfSpLrpKuWhm52BPAt1458LbLf7AcZPEEGVqNXDTwDEKPhYKv1QiKeLC",
  "key29": "iDBXvwwoDEJDxv4W6SyUSBy9bTZ1146jBS3UxG4zi4Gy6j7S43ti34EAk15jBVLsmgbcgHXT3LYYQJR1nw3G8hb",
  "key30": "3NaHbUqFDUu2Yk72nV6FU7xBNbS74NmSeP34JbGFVnSQUbqUezXYNH1nvu8Ek2YPvK9HdWw4WnH8G1HRdhzuuEGc",
  "key31": "5jh9bd8eBHNZgg6sB1r6A9SKu6SNGB6qGovjGSHci5sPki9uFP4mpPtNs3csyPmE35N6qjRxiQakUHdK26ihjpgn",
  "key32": "4gGnmMV6U1defQrQeMgDJ5rAx53DEDvKZSkDPaVMWvebEMvS3ihvVUTAgvELCcAgggqRrQKmvePAvojwLcAwAV68",
  "key33": "2ZVJy43seRoxtCkayZFqZo91FsWegWYz7DxpkdHP3JLfB7HUMxwase3T9rhnqLfPZmzMsDWGi64vVDVKvdD2JbPK",
  "key34": "26hmse287amYTpfH9UTAje4Y9otHThXs96LhGJPQigCeHc9Qz6jzsABo3JcCJuzHpjzXwmKetMjQLq9KKUfNiSjE",
  "key35": "4DaaRFBvvrQRjkZ5PX5i6aErHwdePxhTWiwBHcvjT57VXJF9ZgV6LU4tcbESosLXFkCBBkZhmvYxdwQ2ksbshdK3"
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
