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
    "27tD4v9sGBXjnGdEkTsUKtLCxtQuCepS4932RNprprz4Cmk8cKoGHqhzXv95xQVVb5Q72cdcHooFGHe2D7xc3eWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7zdMjeiwWM4kYYqdKWyYpaFprZHvH5mY1CXmDMYfs5UugqAzXBe7NS26kr1qPsgy313hyxZPvqxzwJ9653weKz",
  "key1": "4PfxryTNbFbwhauYtruiBbem2Ax7otGpjRUyimuJJtYyLUF1ZT9RvKW9oJVGBRe1LyFzg18vNUVeyUEU2icCzf4p",
  "key2": "3FtkHDrQB3wMaZWdoiufNfBbJsuMEhZ5aLTARrXR3LFHVQeCB3mLeGTvDrBxygN4pvWXeMSszxJ6pvuybWc4DfvY",
  "key3": "2yL6SHiiGMyBjrgoiqBZAHSbicp99d4cu39M8cjETpExi7jcLgFtmtrmcdr7mEubE15hkdB7cyuTv83GABDJyoRz",
  "key4": "3KVCVaY5W79e9momLVVuG1p4yHSsYUyH1AP4HPcroCwvqxBuZ6mtmDYJfLqCKq9ta8wxWUK1soZTG9tJgAesPEaE",
  "key5": "9T7aYE5pEPVasZwQUtK1gXULcsz1L9PJAPMDF93u7cUUiRZv5C86QdShir4LahhgrxT467mbq9DN2fF3YDhdope",
  "key6": "4q6RkbYyvwYfGGZfcHkqwAPi729WbeZqXC3AcM9mVVyjRAtdUPNiiWaJcDWnwqFQE4PiZqPKdkUwE7JNx8LXTLQ6",
  "key7": "3FBBxEKtF1uFj2KDNNMFzF4bGhiMBwreb83SizNUjMg9d1mCDKb9WXL1QXfp4zjZYDDjtMskSQjkBkx8vWCuFeaU",
  "key8": "p3pc4UJz9GE9t8JhAWTUQAMvGhy4sV3kWuE9qZHtRbvDJRtvb8L9Un2CR2zNGa8Ca6QN4BK8sBYeJbGbtnNPZ3T",
  "key9": "4NNN6TVsEuwyE4phS32hod1NHxYF93Gd4mfjB43BdqLkQrCWhcd4UpeTCzEu5oFticwyGokkMdEpNdRbMeHeaF1F",
  "key10": "3iPhSsmHwrEc3rWRAHe9v5UuzEJ64Jjk2TA4vbdWuBYPJ8sUftN5FyGXqgFmffEZSdLUn2ceYAyrEFD4bafmBaHF",
  "key11": "2dxCpB5ApAkjW5sxyeSjAmjPcSmfDy8xtwwNVNFBK2JcCYYsJNqfRvxAGpArUq8ibCPoHbVydqXACUfH7XCNi1g8",
  "key12": "4U2kVjjn5ZhXH7WBDmugzBMePuoqzxtB6iFZFEwicXcvCVehnLutQ7g8dNFGo7RtHcqnZZBXgBqJNSTPdzXMGUWy",
  "key13": "Z38F8UZUcn7EQYQ45sD9D3LFTwBgU43efXW9LJRn21A5tu3duZQZrDhui7K1LPFxmfLmnuDSJFewCadtLfn8rb1",
  "key14": "1EqcfR11qKs3FUqnhPJTMHxXzYjnqjeojNvpB6oVJ1FLKRC9KKZi4qhNTb36UDMYubEwsZ2Jw7XeFKWg1sHFNBX",
  "key15": "48YAtdpBjY5XHG4r1P2zNFeLVn7Kc5QGQ7GEneDYkk1pLvBLWBEfgZT7fkgBsAaYqrir9SKtFtSyigmMVbtsPqzj",
  "key16": "2NwhSEVZv5ovUNNTwtKQRwriLHJ8nEQdaGryV6Rbo6rjwNptjEC8TC6ypEidsw6o6U31k9R3VntuRVAt9PDvvMhc",
  "key17": "5ieVV1K9aF6dQVz5GcWgkWygaMbNVRUDq6Z4QYTc7BVs9RCcAsHpqkpUpEhU3c4Lec2j6JniN2SYArGbd4FUfFVN",
  "key18": "36EQmfJpUp13zv1GVFdMQ95BaMV1JRY1XqmYBvQbsNJjYBas7zFi1Usp1vkMypn975dtfDSdRaUeuTS5biH9PJYz",
  "key19": "32Ar7kvxhc7Zohhw5ToXFEDPGRLZFhfhg4YXADjZb9AdcPeMPvjL5rNFXJJh2ASuVwqbLspG26V5d5nocZEGV8aj",
  "key20": "4DqAPjRz9pMp71UvFhbp3o7rMirT4PpprZfeR7oHvKgaz5Pnf9BTZSEiZ6hUKwhPktCpxp9kzby5aF5hA7BY3jKc",
  "key21": "2S2dE9xeamrqXe16Diqhox9tmxfTVXfJra4rshiE8CszqokdjdJiN3XU9XveToSQzCEhRJqDYfAK3XqBqmUJt5C4",
  "key22": "57EkVbLgPCLKsYnrkwM9AbhsFM6J2j7fF1W5Cs1EoiYexZCg7BzsoYxwku9S4sTcDBA2Rgbjyt2ry5D8PRG1srxq",
  "key23": "uUJYXQfdoXNd6L6PaNGec1yzTFQp3ne9JAdNojZWRUewyY5TW1jTQNYxWF1CF1kUkmQff8heuuZVmt7tDQxLgXL",
  "key24": "33H5voMrCkHypSAxbByNYaFN8vygN7ekPfZXUWGvLyn2bFvMunTSp3WNjb5yy3AkK8bTcRrsy86fTkG3tPpNCMUV",
  "key25": "4Zy4d1Hu2voyn4cJLSX35oPq1yrB8VPcKAJf1wceG6fc2yjtVm179MxZmPtq7iZmkfEYKKCRDHq2FvRrpyivHK36",
  "key26": "fRVutsjPqnfgPB8ckXbFPPkLeXtAzqqoob2ZpcofMQJuvxTZEAnQbqozV5Ddp8ubNBsu4fN8Utb5WKGEnyPuE7t",
  "key27": "3GP4QFC3QGPPEwkA5WHRmmyzTuxJD3ZDQdPRSCXuQdtyr5Si31NvezVXdbn1dHrdqv6VQ5FmAz1HgHntR3vLFP9B",
  "key28": "4K62XAAzXVDpXR1dJNkx5eGTxUQZGdD3PQxLepq7Xa1VcuGGxsYxePzRwSEz18doeuUqyB6qHwAFfky1RYBZhuM4",
  "key29": "518PM1SA1kWefgy2uMVdNX9aWtQ9Mu5Wg1JDSmiKPLpunNzxGT1KUTaT8WS1LZUm43E9PQfGsn6GjTZrjsNFDxbV",
  "key30": "2HQQkeah2zy5hsVa4XKdWUbzgaU7T9v9KSKZnkTwixXXsqKfwwWPkDBv3oxR6MAh1zTzpKaJrq9aozVi9mwCnFpf",
  "key31": "55rHQd2ngDRQeuDS3z413h1HbSfo124xEjXeXTru2VFQ8VrLSxJY1DVMZRtUAfgXJtDcACtp6qbY6sbjFsXsGD5Q",
  "key32": "3sc2W4TiRhgYa5SVmeB6m75ZEJzcxm1Mn12ECvWn7ajbrxYbKTrHhLzFMokUG7HGj6GpGsWeNsNezcPrmcrmQRDH",
  "key33": "4NEbFuwKza6uQ5EdF6hX1yeAaDRxhifYrgasaXWHLgAQwJXcz4MXBpBoNyGUiSHXFXdHL7iBVpaqDQ481rQpmepi",
  "key34": "5E1s5t1FcBQjkhJkgzQzhg3ikeP41axjWDzW47E8Jtgd5TDHPYrQmmyGYCCokQA4necLFKNTYWQ9oEVzqY49PPDt",
  "key35": "3qQSkLbt9UwDxghPiRvyFEX19rJ92yRwmceDT1FajPd6oZiDB89pm4oiho9i1ayFj36Whf7AH3azuqbFRPEsF2Ec",
  "key36": "25q58NZnFKms2Tt8rEUWoGn8DRGV4fDKeWAJHk24AiHvE8Ujsr6oUbbbiPf5JYXzN7yPyHtr3NJza263PzEjFwNT",
  "key37": "5Th2gymcQtLkBAaChFZSjY1MneCCs25h4vRsddRzX4fQig6mTKjcvWtT3SJQDnuJdZ8irnCFczCWapaHKeCdprCx",
  "key38": "5ckurzYdhkE5AJcV6jp3QHnJDBePojAnpSqNNsATh5DsrwMCAxKWTXtWHkTbBBBSMgQbpqLvWHP21tF8vkwFDYJe",
  "key39": "5ezb95QMnZjPncjdkjeGk2cTBGUgJWMhQgrQuDxQj3RHg8RiD7Tmvg3AgT8Xy7eSV2J3aJyMzS1MT9yxqyK9bLEL",
  "key40": "XW3eUVRAf9DgCBpTcLj4FK5VSHyAfCZVGYrLMRMjB4RrCLAh8PdrK9ud8Yg4VwEj91kbzhfGNhyqP8zNkKcCPed",
  "key41": "989E9iDWa3MZLgeXcJAiDy9kfyBVfvGnv3b486vsPg8PeecygAtR3BeVvVhw6NizjnzEV9giSQXUF9aH7DY9o1T"
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
