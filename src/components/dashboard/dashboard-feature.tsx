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
    "57SYayYFaHPQzdavcRR8GsHCUavuyC2MSNuqLSQkjUHwJFGHWcadCL6pdC4yh8hFDiLXKUwRGYCRyGiHKb3ZdXKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfcwxijUSjUNc2Z5VQXtxgWQMykCHCsYaBEPTbAM158x8QFxVSTX7Mxby2M8gvSE7a9FnhxGs9YReLdXzP3xN3H",
  "key1": "59oYGyZvg4LTdgNkCdhEKuupqzQ7s3QMRG6EZzeAM7YctsEFzaHuRhNSp2GkWvNTfbDAWfF9W7SKqaHEzNXU1hrN",
  "key2": "4VkRK7EPD3pZqrZSdBgt8Go3AwEEPPnTcUY2Q3PmABKhcmMBTP3TmRBWi1G21YstdCQbNmo4q7GUGWVf4tWvrSZd",
  "key3": "2TNxHShuB9aTZ2NYTTJJJYkt5v6VrU8cwd3cq1rZWwVuMba9xVBspcgbivZGtJrmtqd1vNCRw7s9qAv9ZH19ve5",
  "key4": "4Mtni7g6wg1opb2BwAJgoWS7csDdqMWwoyuboNTmRa2CPqg67fu6rLqkaTd1Z2y9DPjPn5N8LZ3igU6MdBMrr6R5",
  "key5": "5txNfN6YkkQiF2cLfqEhoYnNq9YNzhpUq5Mj2nndeyu7kFj2XgpeYVDN5kecp5XhPWYzocMhgrMBNzTwJHb3y63E",
  "key6": "2a5K4a9XSjuYb5qfZMEckH6mh2zASeyQpEWqm1GhovEW3LjkrS6pto4CrTpNgwX6gbdm2weEh4NfgYgxPQiGy379",
  "key7": "2aU6jWWFoE191mCQUxHVCiLPPTV2YMvmWtjhzGeyCdP9NY8wAohDvf7nP3VxCFNXJLAf8KCU96okrEKQfKehSbqh",
  "key8": "2LhjmWfhqcMmKWjQFnTRPhxj1MBPeAXYkKjrbTHhG15J2DmZdMYspiVHzFobVrS21VHuryemxbWGve1HKdwdxLeW",
  "key9": "4L7jfiThxjxKuiJpFdRqeGyDPftwGwDa1wGLxdnKZLRQCKgwF4jBcNSY9Rq1HRfg2ej12buu9SuQ8rGedDCJ28AC",
  "key10": "2BpYmZLoWPKkkuhecei6wvMKdNzCr1iSWPAHRLcHQ5WbqErHo4MZ1476Y9NZqQKZi5r2pmx2MMTW6ep91SaqKnVG",
  "key11": "4gQ3FwHUDJunKZF16ZpmbRZr6f8XBGhTXMALLNnQEHoeaJxoHcd32edxCvj9SeovxhKtkXwrEdegMibyi8RuJqSp",
  "key12": "5QViPNsSCTy1X9nxGjXC96MWQFjJMiTiMkfiT7j4kHYR6ajiQvhuAmVWHYLdN7uvq3UWkaPRLyRXnWvxtoZr4nhG",
  "key13": "543GJeBZfSELhttoa4iTjkbiRebQCHatDWcUD8XJzeayyxQnjixRnXi7AFizh6g78mvcKDfy1JkMmFHZsAVBxjrV",
  "key14": "24cibf6wp7Hex8jhfsNwqyPzpZQFPm3PTLaEPyRJLaray6DvBWgKt836iJ2wi53ZUPYViY8pWP2pEc58pSq3KnV4",
  "key15": "5DmJqr4rKF5VV7GTpCPGSS1Tu7tbV7eizxJiaMqb71d19jnkSzRhrgbiFpDztaHSjXRoBUHnv5MU1zY1yj4qwwVP",
  "key16": "4zqgdAVYeFGNeDe7oiwSxu8pJGkwvJmLWNNMcaKcF318ALcHobDvUuxLR4JpnqaKfBmbz2iUS6M5WiE6KYjx7o5T",
  "key17": "22xNY2YZSwHuXGy9eT32zEqpWXYXCM47R62gSPa3utxUSSsqkyRtdgGsEs82HJQhBD6x4LupCH3kbHuzxpRDJui2",
  "key18": "4PZjeFFSuqxiwsJobmnUmnxZ1rAKc6wfSkRswMQor6xcq8cbvkxdCHEU9QnoT2A55X7K4k85wRGsYe1qojkzpxZt",
  "key19": "Q7pSjAycNpPEPMa6exfaUhaXhUxjp2WHy1HLudTfx1RWrBTf9Hd7F5rK6pxs5tGAkJ2H8sjGDHdg1GezyXAHgPE",
  "key20": "4sZYkxBwApz4yH9i8pywojDsKBy9FGDVqVDiWmZwj2yKvhzCF1GLgh4NmGS5GT8NmfpRbxY8k1yr9dCZi9YWYSMZ",
  "key21": "2BGVxqKhWxjeyAfrbaydDGhzUpwQZMtckTtJJhoysMTiKGnDtyKqTDrufajc6A3Edr2s7QN6Z8fgyTd3q2soa2gE",
  "key22": "5a3pFRhEfWskRPCjVSeUTz2yCtYMNTursUjXiWjaAckuUQK7geW4RvXWkE9Hw9t5wvdUZoQyCjfRpXJMb3DkLRG4",
  "key23": "5pJqntN4uJisjuDdpqSujXkK4EHw7QdW6aGohqv2PFGTk2LSH6PxVn5edT9vjLbqi12uchw9riNEG5nekffU5VBP",
  "key24": "679eVz2CV1YUkFMznySJBXc64xZZwQRzVBbfhttx8877Wbf9hEJyow13qjp4zakxTKWH91btEdeSa1VCB5nJgsW6",
  "key25": "2eYZLsPzLHnzkh4RP4YA2X2ZrFYyhHxfga28yuSAmU1dmUvmPYg4DTEhAnf2hcVhyEVYnXRC38A9Ev3RKniwFu9b",
  "key26": "3xhurM6TEiUrZS5SyYziXqP5DUpEHZmu3ETLN6GaH4bZ7DKfGTf2crWBE9CC52JbxQMm1Txk2aWTYxjLBaspUz6i",
  "key27": "2aArLqGi9S3HBdravaD8C9uQwRsFFUxPwtrGZkifCjDnC4sxvwSejLTdCvqEbHyHktjPfQCpwVkYVM7Q2kY2snRq",
  "key28": "3CwzLDMtEkqc2w7SEKPAHnVWLV81pPfh5FbDvYbMntqY3tr18vRxmNmTQMHzHJ9nsttXkqZZy4prnj2E4qggyH96",
  "key29": "6pNzaws22jKcuDJ1bAngq5U1GJ2mk1EZUnkrmTVYCFVgFsjkKaM1F2FqRgAy5YjG9JvAboMg9SjtortJTmqg1TM",
  "key30": "2o4LGbPJe4z3EcihFEZqwmMED6TJrz4bjN1zbWSVFHW2TCpwFLE949wLsUskrr3CQ9Yg8FZY4QuZverLjVWTj4wW",
  "key31": "4wHnoRCWgXL8ciHWrePXQGfNDWMbXywY1VYUuDCpfKuiYiojXj6HP27UretgGvLsppcYEqAggSFS5qG5tH1Ku5Dt"
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
