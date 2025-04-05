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
    "54my7oqF8SjDuw1ajZHCC8hJ7eN5b9htwyKRpfz3cSWKoJvzBe3TG199hHqep8xWPEvt4hbEKWGYRVpU6jc3ejPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "393rigfkEzgTeu3h7pwzVQB2Ep6qbwgFw6Kfr7dFMTfUXVY9uprbRKMkJTZbfmqhR7uCsoGc4EhxCjDD21HfcWC3",
  "key1": "4h9F7bYnnrMeq7aMnympJ1ccYgGFh8p9fUt95BhmGWL41wyWCqVFXU7VQcUV47z4pshTdTxTFjJ9gzdEGyEF38mm",
  "key2": "4b5ssWvhUdFXcgikt3nCo38eVThk42ouA2KCDCRrvDCmZ6QurQssTUXdvjLNQmJ9bPhuXVDq7a93hLnziARF5w8j",
  "key3": "4Zxxuk7SztKpDJP3Sb6BSxBk9EvGnttSEafrUNxb7mRLBSAMHtBWNFYNVsUWv3MeUbthVDbbUUhma5fGHFExdpNQ",
  "key4": "67fm3fBMnJ6kerxBbA7PcqB8K4LnGfgX3sck4yJVDsj7HMmjMAbqE6QL7co7X8wtpYKbJXxpcWkm6vd674xkGGCh",
  "key5": "5CNFHtqNBK1RNNi64qJWnVdzAE1x962P3e3BBybehVJKvxzFR4x8RjGV65nvPqAfs62ZqhWBsdCSpoUyG79NstDc",
  "key6": "nY52916eVrUFoZfP7hwj7mPmM8DLDVDQvpYhMMKmaHDYP8g5TkuHHsvARrNtrLWT6hJotVkP9uk3nKYX2sN6gQs",
  "key7": "3xjghWG5f9NHL95PTZhzco1m6eq253YSW4ZWzSoDhEaVUgYpXDidVyUFbfxgxkcVAw9wY99acjkMT3yKf6Fv1dKb",
  "key8": "4WbTjobVVHQzW2k7Ca5xFgUTtGFVdof3KUVVTr954MJr4XT1vo4Bvgvp4azFdmSm5SnAYr8Wta7bYUAuTDqkWduE",
  "key9": "431bLngWKnDQn9biPicfcKdkn3M55Z8f7htbgk1MaSj6Qkin16YWsqGFZVbsog24BRLjkLB9o4QWQDhtA8k84tcD",
  "key10": "4XADKzUMcVDW59YXpZbJdop3BZjd4p2hAggM7NXciefDFoGqJo2C3vUegGAAY38CRGgBPUmU55HEaZ1QmMJsuHZG",
  "key11": "3FGkxWY5Ug58Wv8tJtVBRc3rBeXfdUo7ox3q6dp1hi22iPugn9NQUdbtfYcrnVJTh1bZjhHS7JMv2PD4osCB61Tb",
  "key12": "3BbUgJYLPAj4aPJE5ozDKstWxMDRMeXiqbb6i5DZjGsjN8eeeuMSMomumCUaBsRXmxwKnKsFLt2ffEzMFDXzAzMv",
  "key13": "4ek7gdzhegQhWt1gyEBj6arAGKYyPrNjvvvLhbE2SS1rqhNpBrq2XWCSDpL9azaiYPw2aut7t6e9UnB8BXrYnjmQ",
  "key14": "2EDEcmLZcPiD18JUqie84J5Xt7J2jiQEsn8hX9yuh9ehW2hxEbxLJZNTmzBsAA7xLeDvQXp5imCVMsWa3sRxEEqj",
  "key15": "42dtR6aKv5dZYcgiPANzFR3QjEa8qjqUd3vuoP9EZGLDzbN4LLHnsEABW6SNh7uNxcKSpCJT7Km2Wj2Ctk32Aykx",
  "key16": "afv6vntqecAxSLMoXe3t9Pwrw9LgQNhgUnC5xjkjZjDjevDCY3DzjKEU7Zi5TnWrAqAckvpr6CqMdAMuMhBeEGU",
  "key17": "3B4ZoLErAXBQh64j5MSdDd4TGFH9KiagW4JCgQHMS9xWNjpP99mAKUe9PKQ5qpWEjFwAgeru8vrhjn1jzS1dAy7P",
  "key18": "3zYF9wnWVNpdThBwVdK743YaChaAAjKNH5oJFKzYXpzdkwaQ5h9W6rm4meyEfHfDEboJwX8fqwV7DA7vYEkxhpnH",
  "key19": "oneFeFAAXdMWcVmbmnjhk2nn5wpKwGdxN28gjkgkpkKxxUhv2tNG9pj9SAn2nCQ3tnd6ZDLGHDKZGwKH3ms9MV5",
  "key20": "NTzt6fGnNuiuTdnm6s7vkkf48AUrSvJBP53pCDAFvp12kGoFcbeKzfZu12AHwfHXW3B7vMgHHxVTYmWU7in1TrG",
  "key21": "5pH7MSH1gEJKu6DDd8guaGFyf4FDZFf71nYjWYr3F9t56gTpKxxmDrmtS7JboV1rHz4FHy4voamPxJcDVZqX119Z",
  "key22": "5FnFW5zEiLVntimdyZJX5DYTQA62Fqixv8iMEBfqF5J6NtqRm4NFAUdTmUoG6DuG6eqymrJfhzAyN22PKr4MsCo2",
  "key23": "3VDhL1HTbkYKFPFHmqKxhHBPLrQmvp9ZSRbzdX8AMhZSuHRpWyjqo2fPsmFTUyxB4mSeRbuMUeuzEXxwpwPrne2m",
  "key24": "2BTccDL2vmc6LrU6pm3iTLCtVeNeAanW66ficewBdoXHBmmNsDnvjFxUd73VRTdEER9jWoVv3hAUA5RAmfrsLuFg",
  "key25": "3Thfe7QeKtNW18k28Y3Y3ws64fHxud2vEwffzNUpMuKpFopuqfVTUuY1HGrh1he2pQ96gyMMhrkVXz6AUGQN2mz4",
  "key26": "483UXepgCJx9sPh2o2VWjsK2yxtafVuc2oCb2geVZSD92EKgRMDnTw4wA5o29J1uLavDhWxzUmYKrHv91wuD9bXs",
  "key27": "4FwYT5JHiPhECmkxLPABpWNHzNbWeWARS8WqxUxdLLqhzefxFRzVgBTpML16oQhDggVKo7bLSi3yrrkUpwuzPR1U",
  "key28": "fkcVpQ1qg8SJRe32jheWAoLKxTdAfMBunanYfexRFYgum965rXMgirkbCBaazmMcMsjts7bf4xz68K5RXvXzyoA",
  "key29": "TssGPuMgJg8kMR3fe6xfwbzJ88ukjNXyW4gaHN7EWK34AHSh5dj2Vq8AAEWi4khH6W4tKeSVTtXJrwtSH6PG9iK",
  "key30": "5cgWeKPoPbGu4gqbcjrfWWLMAwPjj7UK2WHxgJS2BhfoPwYSf4EX4uWrGrD9pg6ysbuvND4fezXbgZB9FZ6sVYAv",
  "key31": "31oMhF8vJwt364FPvJEZkY4U59r9MK8sfCrRTGXsNkoqfUdLyLrE3kXb54AmD37HUmj8UVMN14drjGNiyQT6Fczt",
  "key32": "M1FjatB3ctvz3msrWbYqKVh4LgsFSqTFpvDxszf8FiPLwGR8vkhmZ8CfGrz75aXxLdNXJqG6fHDAF9N5JyeguNY",
  "key33": "4omjvgPSiGLtHj2VGRGWdfFtSD1C5jpUz23VZja6DEBMRTHhxuEQyeVLsYoV7v2vgvgjpojNacA316UGaXwmpJkA"
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
