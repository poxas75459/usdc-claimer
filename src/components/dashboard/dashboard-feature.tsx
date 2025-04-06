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
    "5iuGEW5YiatC9TfKwHpipNgtRMrkv5YYHt99AuDXPd4SLhFaGAVjKFrt6H9W8jYb618WyH1jxHupYCaqZMuQS81K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zhiQPmCFSFLzw7u27s9Pw5cGPHLc9bqbHbg6BPXN6w6t7X9aNZGXDxB8EiUiHEYF2nVRZ19zYg3opJfkK7GZH4d",
  "key1": "C47tRj914uBAstSsdXUJfuqD8CW2QaRzo3jRYMyqKRn9QhLHJF6MctQRPvf6QuccUMm8S8LieYL3FTzZVQ7j4t9",
  "key2": "51jxHY5Ksw9iFKLnaTJZ1cYEhyuVh8LRnHqE7z8QF3FTEVbDtL7g6zZCPgeAu1WiGoScG34x8afocwZVkcfJ3i3D",
  "key3": "3nTakNr2BCP5kuL4bthGgFJMhpfuKmf98HESo8tya7SHxQUV2pFDTe2bBnrscub8fGpqRTbsEsFmSiW8LBoqYtLX",
  "key4": "54nXJiUGVRtoPbLsKMb7RRuVfKN2XR19dttj46SvYMBsciTEwiQJBvfx8cJr6KqvWJM7RGpAGYqTLBz3HUFXqHbu",
  "key5": "5SZjxXZDhkayqhRRrcjsMZCG1AX5btyhYjMDoP3wGatxzQty1VxfLaGYTNwa73m8akXMN1cbdmFHQvPxakp9tDxA",
  "key6": "4x29BCQKwjEcFA6dTDeb8WtYZZdm2H8bsgtALmn3KEpBeoC9GxebJjZViSMtbwazoW6Ue998wJNWXP4crdBvaW9Q",
  "key7": "53BkWLqs3PiWwF1hPJag6HfkL8ivwuTK6jK7wnZ423F9oK3zg9T7tqjnr69tDmBnAbkV8cTNCteK24vFzAS286rr",
  "key8": "cX5UeRtmjTtYxo5hasfNetS1qXBYc2X8mrArpPCdCVKuKY2Bgk1ZYpuGDiUUkhJ7dsEJx7wsiXJEHewbLBz1KVP",
  "key9": "4XDrLcbt1mAA67tf4yPpvzVXnEtd49rJqK1WzpdmVFTSmChQWaoCBz6rLWnEfz5bVZtiTaGYRdFJPXwhDa3Mdif3",
  "key10": "YZ3w21vEsUTCKRuTNKAUVNkyP6v3QLHKvpdp7zJvvWCDkZVX2BUoany7PdwN14hAGqeB5XWEYNvEpmZYUEFUeEE",
  "key11": "ihM925mdi3D1nZ2taZqB9o4Y8W54xHKaDDwjNcYXtwJ3ggXD8UzCdFZ47A9eY1YbFZ1BqNgeeQhF2dsh5NToEpg",
  "key12": "TpXSWFKQbyj2PvX44tfHGtknbR5Sc9KNFMNfyvU4AoYi7vcyKmEd7CfCf81kodgxHXNG3kg4mRdHuAWjYQfaoaa",
  "key13": "3znLYj6FAstGCY4xBfKbZLDUpZyf7gyPXJXAFHkCcMGKBbxYQ9vjYZKQYkr7wc1MDHiqjrt49SULCQUTsjBpKKhb",
  "key14": "CeBWk1mozDmo5Pyg2SGzfiLTSrppaksfNPuLP77obUGf7NWJkcWpGcKNZa7HAPLxWzRSMH1rTfJQJfUPfkkw4XW",
  "key15": "46yiMyBn1NJFvMW4DLPeDfmtZCSfCjHEL98nHVjXAinX4Wm9bj24fB7LqKgA1HvNCfoQokbpGLV2J3JWRuC5AxSG",
  "key16": "5FNq5WTdA7PCWnN6z6WHZpP2MibZetsH7Ed3t3UX72j3kgj3Hrw3pF1wAjYg26xGpJ4aRdV1PZ4mcGvYEtGZSPr",
  "key17": "4d5T9eyq3RU1w6nHXe8QLZUArwVCNCXuYLFimW4JGNMeBR4a4QLBgkQuwBmQCJMRnD1Go4Gt7F588Eg1rKDDA9Bt",
  "key18": "2Emh7QyPqS9J4tnmsrVHuNQoV5mBPfFkPbEbhcpybda59mFygdBBeEw1Pcp1PES9njF9ipovNfyv2XBw5rk1gLat",
  "key19": "5k8qDVodNjf7HZNnzWxaFQD4NfgmeVTZid7NAtVFqkUUkAyPqak8tkr5TrTwNRGXBdmHCQRtYDE2GykvEGAsC42w",
  "key20": "Bppb9WjBJC8h3YzhQmvhNyzhssuBTykdTEpxQaF9SVEgfYifF449187VzmcEesoHzgsohmJZBVcgXdrhBiiFgEJ",
  "key21": "4WAQJkAKVonWYtHdzbiVubbdAEbLK4fj3dz8MDiFD9jtnyuuFHKJ2Zs6cGiNj3dBp8o7CwucR3u68BsRs3TbDz17",
  "key22": "4whun5D95UT2MBiJon5oYQNzFADG9WKmktjTmMZWDiMgyy2hyZf4CpG1ks2kT37eX5aU6NQ9z4rZJjUPZCvAcQZ7",
  "key23": "5qgs5jPjJqDZPWcGhTcEBUJ7f9d9esLQoBnNyAFmtHDCs56zJ5UBhYfVwNrn6Eimsu5XSR25m6pxVmGJcBzdRzFm",
  "key24": "2D7PxYHg2YWgSfGWrtnzknxFbwj8WCDDgVq2mDtJFqctjMjPSaw6qXFd2Q9DeT142QdmPWaBYTU4oxbztLJEt6V7",
  "key25": "WMAZFv5xbWKZk7wR95HKW6i53actdXA6fSpagZVD1YnsFBrspux4ETc1QKYeAZnou19Svb9KQ25Q5nTeoKmXKsW",
  "key26": "2f7VHwmY2CzaSB2PEH4FmBhaXKWVfo1Mrcy3YT2FjesKawD3md1e4fvkoyDSJhD6Z5T3uPHifP6F6edb1ZRnSiSs",
  "key27": "2A4ccsLcmjvC63dVx3jnjmvawxMJpNgHDRgmDCjaX1GTRjCcAzpMiQh3NSjjCXVJN5FAaHbDFo7PuzphmYCDrL7S",
  "key28": "3XTXESYLYRsNoXU2JuWXC17k6TLwXuNXJLKc9yzX15Y5eiz1vXKbbuHicragJqCX1bWD7co4LBGhbbNLWF8GJ6Jc",
  "key29": "2KVa1L5kvhcE5pVkVFPiXGQ1ovEddcxdLqQno9ziJhRWt1jpfpiJAAiw3g4nWq6EsxKm7pSFraePvKcL5vxMPHEJ",
  "key30": "4GHy2PpwSnQRTXhHLfJZB9YKgARJVsCAXZxx46hLvY5HePt4xrwrSi3X6fV8gxw4iMxHaVyNoT7c8UUfedSwUupL",
  "key31": "3vCWMJ1FFTomWhJh4wv6PpPQ57kzoZaLEi1hCnXheyFxVsN3wzrAzyqndBhiHfHJ7JEbE7x2FyMBgiqH8U5p1wzZ",
  "key32": "2ApZhp9kyNWTRPDZrMm7AhHL7BKtYXwdM1bGeT79gnTAUkmYRg5oxAyMaDe14YJ3w8kZ6DvcN4HKskfMWuJeJnta",
  "key33": "4uxYP14Mipqns5EZoVnFc6YciJGjKRbfiXBUhrgYZz5GbPrkA6KTxR3CXC5Y1PmeZkkyqFCesbPfdYBaJ53iZMeK",
  "key34": "5qBp7bpwD9tKRYkMi56NuE8cHp9JZgcDZdCU77VyQHPNbV7XhsiJtunkeyv99y6yN6kugjMmHcrMhxzWoMMrapx1"
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
