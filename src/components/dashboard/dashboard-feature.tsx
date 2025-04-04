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
    "5VqhGdcQAvuAPuM3vAGoRTh6j37Ksnw6QdRnZgkMqMTb987cCkt6KL5aCJPVSyBRYAN9cTbhDNHN1kFXNsTNtmeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGXqmEHSBRKtSka5WEqLT1zS44fhwsBkJhPjTg7NiySP17rJCA66xK6JU88FfgiiXXVuiQ7eY7ZvYnHd8TjoG3y",
  "key1": "iHdt3yB81cm2Uda7KxztLabXaAjcSzFHvcfWzcEYPci7PZCMvSuBHQqcxH1idVNDY3vTEVSLJvBjYgeyPRnXX81",
  "key2": "3LwZPtUGaa67m4tAEsnSqEx7MRLZQTnTAvsPx7QtoUzcSafiiEFRZTN8Pkg85eGiqgG3MS8vkL29pNenAh96NWTf",
  "key3": "2FYHXwBtySeeErEDAjXh2HbXzuEghd5vh439nKQSGrkyc45du5J5QLzFs3TRKAV8Xb9iXvvwHAejrbFh8GxfcHJK",
  "key4": "5KhwZrzSpBSZpSKvGBPdpiRgfAbr6AaWcAcmSjvDbS4pxmwUfYJhL8u1inm2P4EwqWsZ2ZvEdXv49Txy2kPpxNvu",
  "key5": "uPyvp3c7rnuLpmH3pQ5srfPNqrSnWb5TpM5heCmT1JMzGkgLAkUiePQYx9yv2FsXuC68YmHQfqmFJ6o2YLEAfVa",
  "key6": "4jhmJTy8K7nhLSd9hpK2hB33XjyyfvuPrmoLLAYHb22WL8cpbv8wa1jV1jE7PJueh8s43S8q4ZB3YdwNLd5N8sMd",
  "key7": "5K5VygkeW9usVpYb9cm2XT7L9HcNzD4jJSMtanRMDXMpEQLRr31EBzJB4tHwWmnDEi7DY93y7Qzd5hEuEPdyS9yN",
  "key8": "5xZhakTuTL2CzYv8HxDX55fpkgy3gP5cNanLyGL7q2XWSbQEqfgQKcskwwZ7sx7b7gQ6HafdqGyRoBjKcptVTSQn",
  "key9": "jyZg2DdQrKpsLVfg5VDEXVB8q6owTPWTjzNTPRDPK43VPn1CKvozYSiPQ7E5y3aNcDYcHw3cfFW6TemCu491an2",
  "key10": "2348wY3csys44eWHoDAFUBSd9V7DMkQHQBJdtU34B8YjgKCGQLWZG3saaoc6t93862zXom9f8yUt7pVdUhx1uYDW",
  "key11": "3Gp8m6RwkTYinANWvsQCDo2NgYJ3wUwabgnWXonevvSxNwgp3LsRhUKf9cJjAqByvha8hqze8qbu4Xf1Nsy7NYo1",
  "key12": "5g9qXW4GdjppWuUuRM7r6PiCVgFbsSd1pupopvuCMRsZZibPPCtgmEENc2dwBUnLBzoFFicJWhGfvGb3HK8a37XB",
  "key13": "537t1bt8812yCUznAJvjBuzrhVRVzjvY7dQgbtZVYLioAvR9HBqMXMfTu5yw791ePM1E8EKumeiwaPVwTjDtRQwf",
  "key14": "4hVU4coeTSw6u1FeCYpr3NbgamybWqh9ByNuiik6yuMPLj9yt68Qa4DTQWUTothyqeffAZhyFWTvk3yk1YmwENgf",
  "key15": "5awj1addExF3UMspvQNY3dxsTkMzbiGnpHzG4zZBsvqbP3rqu6mA38L4fu7JTvXscMQ3Kw1ryTs8CeuMEzzqVCpP",
  "key16": "2XUSn6G4LobGFz3CSjTsSfP9qwcaHFiBGydQSHR5LMgJwj9ZDuVtmwLLmps9ng7LUahubKuHF3NgtvB9o6vT6D88",
  "key17": "2kC1BNWvmcsjFk11Hck6JFGC8UKW4eAPckvFSbQftrqjYTeQWPY1BzakgR8cxXrSqos8y7jWaVK8SWHNqUZcvKQo",
  "key18": "53XSuXnnKpUfhenDn6F1asq2thMz3boRPP3vhRKHGaFGEPGsYyREnXo2LWb3FabTwnqf2tqjhnLbcAwP1K7BZw7H",
  "key19": "5om8jyEM8CjoJDCXgha5Yc7JwKuqiczXLXSX6KpgnvL7K1Td5rtmEdWr7doPmeatgCZUtGseDy99Y5B3ndy1TcMA",
  "key20": "2JhrJsNwvdmc94gYs8Fo7RpyhxSUK4yyrzPxeTSGseSVXr5ibatuzshf8zzJNgeLFDTNWngtTrBntdnGgaP5RQpx",
  "key21": "7MRkm4BF7NF7dX2xMgJUH7jVcePyNBXc79gdbwG2gp7ujmknqVpbmr6afXmMjhLjGWkPXQo3xfagwNjvVv6jYFd",
  "key22": "2W2QV61gdY23W9Y68MvGWVFYKM8QPnUKMHdEeeYgMDZ4PMDcPHNwLmTyDGt9qzCRJZPnDfw9PPvxNvJVCWx7aES3",
  "key23": "4tKbbTEkgD3jjdmHcWbSof9L9tAB3s1J2XSj25j35LLqN31XbJxXuy8wuKyHrPpkcNagsPYsA95hAtxs5rV2MhEr",
  "key24": "3CJ2PkxuSuPfTZEsa9NjtMvCGY4RqfDuJXy1jnrY12XB3r97c6EW4t3En6EbBoXMDxt3wmWTdiquYaJ7dWwUhK8b",
  "key25": "5mb4rDLJwdddRMxrWAndZi5BBx1zmjiPzvSxbf7SQTPwQHcs16Ps49JSYYoJfNC4wK4bdeCPAr1WHTBM8qaJE8Dh"
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
