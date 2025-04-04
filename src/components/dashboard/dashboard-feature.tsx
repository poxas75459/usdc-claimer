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
    "2GFc9GomS2k8oYZxsAhxxfDDUMRTXq3U2bKgfYNyGmPUjvXkGgN4MZBAqZDRzGEzGj2eYNKoHaBcgvvFvP6n6R5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vcRGqpVbHjkPtnoANMLT3SgZjse6UobMfLTF6QZ8QYtHEAMdQ8PrboLEajNZzDrwM9xFcHf5APF1fEAQ9E9v7Ui",
  "key1": "5PbViWRHCkJgSKxCXiLTQ1DXDUyoGdQ3mjTzfA8g5UnLAJ5An2PSYMViSKgPNX2CK4keujxXJu4QZdNyrtQDRNpC",
  "key2": "5voZkiz8GVb3aHCLB9eSuQ4RmYaQFVVz4qy2omefEY1uBKmCaYyAFsCXWRZhd2YunVt4SQ88PauYds3std1Dv7D8",
  "key3": "4L83LLK8pqEM9oiq858ywRoNYVedrqWioU7ym2oXgGAVKHX9vkT5E1C92w9zhSGGrHWNr3rj8mNxPZfumY7YnbDW",
  "key4": "4jjwSX14JdzJcGUb1oFBmAgcpDBh5mDbtUZUoeCybjLaEapgUD9V5ngpdfyqaa5UTBkLuVjNg8NBcHkCrsEYyqFT",
  "key5": "JPedCCn3xCCGe95ZTYHBRh3DfWKrnaWsmDmyni6jHvn9Ap7EQYdrbYn5cd8JmW4K8N14ivAVgpf3dHTxJUx9fsd",
  "key6": "3bRLmQtSCEBGKyehyEoDboZeexXDjC6eU4PNmHTNHuuAHG2KmKQpaSaG4WZHFjj6hFUfLTg11jWWf8pkcdS6AUve",
  "key7": "2QhLsxKQ79mA68eLMeQx2xMFmxjUKKJqixPxMYuCaitxh73qZtXuTB9hnMmfKUvnXGc8YuyjucgDQvqJyAmwHvHj",
  "key8": "5ResMUm6oyb2sLGc54bK4BHovxk7TgNL9a9Mpm4fhREP3ypJbvpT6VRG9CUZiqscG2U5BFPXbHD2RJti1BvVNn5C",
  "key9": "JSLmtqNL8hVv8bPjx6hVJVcmdCBo6yUUjtpJ3vYJ3d5L4ShEVQzj2dzowW5xMfUGqPRSGfQFuUmavBJvYyVqtiC",
  "key10": "2rMUKUN7uJfPJBERoqwZp6kntrc6YrEkLwZtNdKDSUgYxX2uHBeGEGJFqqSzaspBmEy1FUeYHMNKbhSx1rf3sCnJ",
  "key11": "2VbAHcoK2z487rgo2Gbe2fof9WZvf3WT79KHBR8cHvCsejmtEJQFD5JymPe7tPtEGy8cPz83qDrxq8Ctu4GB3jqA",
  "key12": "5TYCyZu8dZep9tsnr3vSFcgPeQqZJtTAjAZFKXD3Wj8FwKJ4DEsEyYw6x5pzDHekJuJn4mcVvYLHL4Teov27tXWp",
  "key13": "2ahGwZLb3hLbjF1e5YVBvRc7jSXpRn37tHtbDedM6CP1Jx7wq2VpkpfrjQA6Zr2ALXcmGqTvnrrsdiSNMj2N6G62",
  "key14": "61iUT6jiEmsAxVffK9aowAx2MoLsxuhWT6wzP6oNXvNhov3wt5msyLTtDLY7MNJCNTzpqAwowny1iTznbkYVNkjR",
  "key15": "4FDTWaarzdbEzFjyFKch5UZwFuf21Yyk6GnCjh1vxFdyf66aWz3omDKietCupowJPuQTkQfXjvYhtdov7HQFdysR",
  "key16": "6faFVGfNTXBMkWTJuyKQs4jDk2HhYJzUvRE4UgBp9jAxFuD9JjCdxPADqNRhxPQh6Zj33SpM4Zfde1NGmoRi9ns",
  "key17": "4E62mWfhRSaDnfp7Ztzm6xVcdMpoP4hQeXRNZBYrQa9Yuuo6WCjVWMabg3bhXv7NsvbHzrVzqVfgcjSZQ7DCU12b",
  "key18": "5cJxAydVbvs8vup1J49cwMRxELXe7LgWYoQXiwfSMMtJgzz8v2n7zxkrKqRVBqeZukA7vqd3R1sC6BzkwHA2TVyf",
  "key19": "EjyJsZks8zAvhy3ZCdzxVQVSVCvvfc2X8LvRwrimvvgMQ6H99g89x6k7v7wCesWHPXJZeJDQqEiUjsmwDacUnKY",
  "key20": "EbVriiHAQenxfLFu29NZVRmnZicr8B81x532heYbTZUraZEeLwnC1cJRpfjpCgd2f2YUWKK2DnH46xgvBAfqDb5",
  "key21": "38Ny6shPTcU17wk6CP8zmJWGHfV9bAdm6P4rTeg3UJbSBQKT7z56D3BZUT8Jye4wCX9WaZ7mHT9oNFaQHdBsQsqp",
  "key22": "TVDD9avdp5ZPV3UxgoWajxC86nwvECX3myvncVjsRXdDYSZHbcrhUJCfv6taxBDw3WVmxjYjZawKma3HA9B5FUJ",
  "key23": "y2TrbyB9YYUQaCRyFms34Ed8R4GB2VRchF9BPZvMNBsRDkp3qAyo6RBjqoaqmooriJfqXdAEQZ5PQYPdV5mLVeS",
  "key24": "5BE32x3vU2CnJd2GWSWcDGxWJamoxM3UT6Jz9sHWQCzdtTvTAFA6zGMkBCANbrW9YczSwYmbXrzxWEjnMUDVyKV9",
  "key25": "4vmyLLfN5Y5ybzD4RxinxdchtRAwwLoa1NkD51KUKx1MWynzM2sFdEoH8VWJWfhyqS7q8YFk81qaV7H4YqjDVZjk",
  "key26": "paSwAxBrR7LKUo2JEHXGBthLkV8ZWi2F5jA9wfXusHUM8fXdDWh5HoPBQXbvBW2cbxhJyTndKmsmMt7yvtDmxtF",
  "key27": "33XdH3uo3PaFZXgccpyQ99BzzWrW5K4o3MRyRxY9GFcBd46a3NeutkDzNYoAPdcsSeA4MZNUPxZWp5mpJiiDkRwn",
  "key28": "67J6yisYi9hncKLTW8pMk4JbeDwk5BcU8ydQ88bmHkmJJutM7zM4A47EAXi3h1WnaeXJQiakMyPJB8hXw6nCDYEZ",
  "key29": "3ycq14ktvDLPxbzq2eFoT6vy5oAErGAFouWEH3D6zitSguxKd1UF9Xcn5sTsrH2A7E34VWYu1HyQjqdbFdn3X2Xb",
  "key30": "5UorYc4H7CF3onz66PP6pjvPxAj9Vd89UmeUDqh2dPXRAiLBEi27PsngjbVqSpnYdFBYoCVDME61ej492yh4ywJP",
  "key31": "2VkWzrJqFrsb4JrFeFTtKuyp2Q2FkAspzthNpvjLxQic7iToPTSWSE8fjKkWR15uLdc8e1Vq96zHSgpCRuYopnvT",
  "key32": "5wU2FmGh8LqN2aTiXVtVY1vYaD7BQ9Ap14mpGDPHS9JQBn7FQVdM3pnQYpa9bg6d68e4jZCLtv77cWxQYsoFjqiF",
  "key33": "2Kstsim6ftvjNRuv4AeRBVsTeHBuSWieDdhzkYvNfN7Q1X9nH4UqGqMc5k96R8AZJYuWD8rMSdyPquchTrFkh6v1",
  "key34": "5ff8p2J4hDo6XnDtWByqRaSeGKyE7uUA6YSbFsjg8reomZ4QtBtKDNvsD3BwjCNo2ViBbevjxb8PBLL9uvTtXJF3",
  "key35": "2EifzrkLhsguNTewnBSobxUWrYhVeEQeX7PhjokuHcnMg1HKDLTugjHc5cpgcNoZdkKKseQSh14eF9fRHHcWmwFE"
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
