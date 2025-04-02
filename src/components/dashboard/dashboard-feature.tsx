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
    "MKEGtKBNTvNz1j5p6pWhtEcFcrCAVxosauUi9i9TLphsShML73RJpFW5nGYnczwgxns9vpooedqA5DwQx9zecKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UyxkJmGucVBrQM3jjFgeMsqKfkRZRAGGHr2fLczV1vbpvvTFtWZak3VP8WnmkJGEKcK2qs8SotrAWKeX2vLxycs",
  "key1": "6KvJUFvZ2gP1VJN7dRm577Xx6PuCYu6PtV2b2riAPC1kDvdKrGNRfhiAqa7s5nvuhpx6pUQQ8x5QKag1uwVYZeZ",
  "key2": "3UASPZqUorVmuCkbPjzMzuXeanju9WA7fNqgPd4XoSoBFMcN1szBurYxfj6fecLXjFyno4nrgXaZmhyVPQLDvQqW",
  "key3": "3kKkbryoRJxqBafT7EPT9xQjgZfLqbCqAMvbEXJx1BBs2NSLsqqFQGLmYUt2bsDu5dk2SrM7tywAiTA4vr7mNLju",
  "key4": "5K7ZGPWeP7LqRun6erJNa1KeHXh6W5jVGSRNkFCD5m6agHWwtkj5K4SvwCSf7CP4cHL4bfgwZkTkoeb5Ap9dMbrP",
  "key5": "5vCV3yCA349Sj98kWyK9MqbFKavmYJQXpUapDY6VnuvCQCJtvWZYuyVQFfaS8Fco32HYzH83hvXvrpxYjMiYfP32",
  "key6": "tNW6YLmopwtgk9GpttLPk9d1VzXkEyShfEtAeEW1VePERjNSw3Vgvgw9pvBUeYfkm3S9aUDhEkeBZKQyjzMEqdo",
  "key7": "SWzFjB3amrBv7vqP77TDbKpvxL5G5ATAFrxVVZPbmqjgVNvxzKnsnRkhcawnhzeY11tQucNjpkijMLy2PzRFisf",
  "key8": "56Fjw4r7fRM9gCWHoyTXorUL3ze9Bq4gHPWbG9RrgA7HmkQGDgwh2sqYWvQwUSikUqoPETK7e35thAaAFPcwVuJp",
  "key9": "48B7Wsx94GyPTMFu1UFLDHRMGLRmQC2SsmWukS3iHa17eg6zAxbfiTb3gKE3QgsBbSBsw5WDKWw2uzuLVA3UXo6D",
  "key10": "4eG9XFdVAvqseRovRqm1jYbPbvCWVe2ASXyGRaG1aog4nm5DJ8e8GV5KWrcqHvd5iQv6jGUjgPiRKXmkk2CSatEf",
  "key11": "2U9AzELhtGNvgL7ZeHHzrMXsDwd2J1pD46NkL1ccjSDUNe9exFD8ePdb1zAAMFCwvVYjku2tUSw7Er2nH4McNnxZ",
  "key12": "1sruZQAaghd8dkMPgsZfSa8GCgELofkGCPkVDtmDRXJvsNmSbutZHQ4yiaihr9u1k94j5VamJfx9dogNEoLbHkz",
  "key13": "3yydkBgWq61wRWjtUjCNfRdZQyudTaTyD5ajYZikcWafuVCojuam8kmVHfySTUmpHNin8tYhuZtAaEuqWD5QBs1A",
  "key14": "54zbih44zbh9CEEqdXL1FyE71Z6FBVXe2umvtzfUST8bHGNp7mUnHUMK91mAgcR5Xs7ugWJqv4aTwTGxaERGa3or",
  "key15": "qvbLHSwpdftL5sNe465VrJNj3c5uAWAyBwZvkEPhzeHKZ5sHYD2qV6TWUw1dPP4QyQvNpcg3GXfWnAQDeD9bXxS",
  "key16": "3wJWxH9N41xddmhtAQ9gLQC7KxJhC6HpztvBs3CEqb2pgDY5CBBLwX94XBM2g4PybzYXtQwRvkae7rtgsD3ZPoe6",
  "key17": "StNt6ZRjPsH79Ew47hTgosqdJzBPPtfx2yFB2ZJWx9xJm4cNL4Qy2c8grcm3cpXVJJBJGRdwuWHFdWpzmSd9aaj",
  "key18": "3Z23MWxJFq1UGPwdsYSfw9oLgPBJhV1fMBgWxbPw5SdxE6a4iXcdHk4GuhBoRWemjvNAnef9UGve64ZxMeKNEw1j",
  "key19": "297ZotDBYbidDrkqBN9iFHZzbRjkEWVPBc8mYXrmfnGrSiRTyJZwDdaXG2HcnZpntfh1FjrkZnJDomGDe8VnerVj",
  "key20": "5R1Dx63uyvWajcNbWB5KEASs9eryAnHGd95zmKF5LmAoS9k4rFyLAwbVCXp9cFRfhEp3z4Qx3LTvSPJ4gvcAdTDu",
  "key21": "3dDyCGCcEUihJzhgKNkpfVjcihR3Ks38mNVS4AjBcVjosojeJam9Ud64BjMZe2XMktksghtBMSDG6sNbiqCjisvp",
  "key22": "4dUdL4tejQcnXDnTCAf2z18kUGQZxjouHp52M7fpLZBBwkgdsQxa9zsADszcmzRJyFR5yRgZrNLrqWfZVTAYEMhL",
  "key23": "4PAbxQAHmcVH6a6Q9kF6MqcvnYAd4wzsHDjbPV8HH3zo2vQJz57sNZfLADAhyF9FmXXpzBaMyeDA7jXxKFKhnCyq",
  "key24": "4sGFhNCzms8Af6GGkUKTZYPvdab8Acg31WdJwmRmprrs4xoQHH5w56ay2Gz6JGrvp7YsLeJxUGkTqRQdvvbABv4Y",
  "key25": "fXQZXnsye5AC86yEU8STUPkToYtFtQXG4W6WsaBED46eYGAWbYsNnHD5cmGShGfMuLEmKeXYAM39J2kfU5SPEhz",
  "key26": "3TYmnjeAzt6a3ErA5UJaeouwqngnTLS1mdZJCL5mbi5BHAWjFW4EuRqoUApEJ6btD8xgUEqEEdSJAyC83UXnH4Me",
  "key27": "5Q2AbDcSjSDcfM9odxDySoYjG7zVuDLKUwv6JYsuudzYygzVyv94HAmkSJ5uXBAVEQJobfbqhzV9eW8ja2iomxzX",
  "key28": "2qwx2hXjgnAS58DG2zuxKFicyHhETxhF8TPmVDU4Xm3dTBTVzcrBFo9CiuDNVFzNoRQqPr7y1xHfL5EqjMMHbD7K",
  "key29": "5QVgt4W3c88qvroMXPg5Dcng2kGt8XJrpwLZLFVNH4Mkcdk3yRiQbKJexXCHhAdqKt5k5hXNqzbffKtoJZnDPcYL",
  "key30": "5z49KPHu46bzmmc1dXJCjjUapXZJikLV8Za6E6yj3MyFjNwKYpZJicdX9Wx6bZZRpKiB8ee73T9vSwLF5DCpCySg",
  "key31": "5tfxU2SGcHgNU86zxDB8E1pDVdBTaSDkr9QbNC5nxUEsVzPeMK9WsThkVc8rnA4Xai1pDomvqPuzQUhcpHyj5FtK"
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
