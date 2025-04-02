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
    "kMibkHNXkLJpLGb2LRWNbH8YrAJvpTkYT243TBkctPBtHekS16ERCWhvMW8cEuddhVU7oQ4swCjCjbKXCakSLWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jPtZYJukxMfCqdMvBvxfSPPDytGZWtUA87eKvTp7KXU9jNhJKEys5x8XwwLt5aujEtUoTu9zjvwS4xu2SqoEquN",
  "key1": "5H83hTwHeUbBwZRNMpDyYFc2wgo1KMAZabQmsd84LRdcuYXeD8kYedjY1aCVTtUBDD4B6KxhzK5LiTm4R86sx22m",
  "key2": "5k1owiFw4RuE8mQoZnkhZDRsgwDKfrrYKGW8kEXwzi3oxEWXMJfkvA7fKkDzL24fmb85firRw8Sy6FjUF5JnyXRD",
  "key3": "2gZ9DLbspgEEoYU37VMSubCr8B5sCBWHhe5EZCwqS5sHUB9jPqbTK8iHGnHHp6NGiP351vZCYUg9QCq4Uvc1NVqC",
  "key4": "286KejMyAJXLj9a8niGCrwAu6aWLVxeWnLGqhq6evBBEEjRPe3wsmiEmeVNahH5SZCJguYwbdQkdDGRLivX32uRy",
  "key5": "hZXBLHrmtkbKKbLxgd82uKpQiv2tECBFqaAe3hJEzfBNcz8EutuDdBEKi7qqZDcGYxmd1UXuMHPpVAuE9x8TSwR",
  "key6": "5dRbrUXgeUPr14ECHu99MuwoWf8hvYkKrUFDY3G9x15pxKFSzQzvJvjLRxibRkPmS9gKcXtqpVqqh51RkFr6tcE5",
  "key7": "VjqN8kPBNWSPcEbwfqJEWXfaTQqe6oiFA6nb5ZW15ZYqFMzoRhZqopdecbxryMZYjUuHRYdaE5Q2UMLwrWXR5Ed",
  "key8": "4pceCAK4ehcs656vR7Rz3ZSWfWPjbWjzD7YzAqRYsazGZ4TXZktWX2aLx9EywzAw5jNPkpG42WNYZmTi9uwQGbdc",
  "key9": "2M1uDa1fLTSnkiSfxgZThoxxEj6Z2MVjtQmygFQoReubuPemopFpit7VeLqhCZdq4hmchpF9GSJXMwBJpWr39CUz",
  "key10": "5KcpafEFoKiLkaeDA9aFbfhPxU9F7BPAZjiUbyGqHHRVzPjVy8eSPiu82SGT7AK72pENYzFeNJVhj5re6fxweXKU",
  "key11": "127K7RbXCu6uw6jpiwm79Mxpp9zLSJWXh9DM35SQQ7W9fxLHjCcgDGUqfTAUzhqsa8qJ9z1F97xMDcYXp3ZSuwNE",
  "key12": "5vWU3VoXNNQzyHkaK2WsZ71GWZApgrpv7o2E7yx4fY8Z9tJ38w8queLYuaTiwisPwxkqSUjPhXq4B16pLepP7dSR",
  "key13": "2mxCtn8uakKx1Bb7UEeNqDdPtun3uLbxBRuzEn6wHK6BPeabTDWWQ43kuT7NcohHPYMGhx4EDUPTXCLKn5PTm3cb",
  "key14": "sJZvTyxFPHyere8XVQt5PdcvQGd95W6XbjckTHL4Map2eNBkvgQ2gKHfU3vBj9WdzpwLFtfda58Q3pCAYMm4ba4",
  "key15": "4qwSUde3tDPwaAXetfaEgwGk3vkGNu5TBjYFJZEdhq4NMVNWt7LWgdecnzefMJUsjVUeEio5W1XkgWnaN8S5tCRe",
  "key16": "3j4xhEbSApb2ChMUA9Wzfr8yTDhae7F6tgpsDm3iezeSH3zLNTn9RrjPq3wJmcsW81FAAE5FS6Y576d5MDJPF72e",
  "key17": "2xbvBMpni7rHgwdknW8mSqzySqNzEPfzMowF191XPpyLXAYQiMbZxvYQ9BSSkEc8w7kF42ZLjZytWVXZ56BPR5jq",
  "key18": "22HbCnvCc3ZHy8zeWLApnbhDcHNN21q1mupdMXpB2SPsdzGrAUammL87jBW3fzY1nVWyXXBiMug5Ynq2Rzomxwp8",
  "key19": "2WvRcSGnRXA8rHpTMU2rYCcWQuVEYrhcMouzArnhTR1DXYxNXKLPtTop9xFW9svwRAjUfCjZkoxfRu9E58gT1os6",
  "key20": "5yi51NqTh3v8Lt19njtB9YVLHLCyRddgGWXBCV5d8s449NHw9dHWyuhmczhKo2BVoSY8p4AMtw6vzhg8dsEg43oo",
  "key21": "58dczvgMozSDfhru4JanxVyyjp4Temc5NFTfdD8oARjj67yZ1noJeHXvMoDoqnF1i6Nqr1sLnaTL9NXyGWEQqYWp",
  "key22": "5trh9EeoKAWQqtRMTNtfeeC7hDx2VWjCLd2mwNipg25kKkyEfJghQC6hu79PG8WjT3hjrTx64a6JNDtceyrutd9X",
  "key23": "UEUYd4zXDEm4rAZ9r4Nb9M2xZrW1cGMWt6JDfvotfKvJDtRuF6zP4xGs7QhTgrg8CZmpu19h4hKrSxvpCdsjd1e",
  "key24": "3rSrcEyYaaGV9j5tBqUYJpEuEkDYoRURTXMh5Q9ycfuxbi4HoHAJ2yQrKkwNTqyLoRE6VLKeyH6GH72cK9ChDYN7",
  "key25": "4i6P8f4RoEi7kJptVKPrAiKUjBvtgK5KJUU5bMt5SDbsQmz8TiNbcr1V4S39yvDJcxabxPwjaxrnjunnAHC8CLGw",
  "key26": "2oFYdHkg2SYkgYZFx7GKnQhks3c8eXAsvQStiqeTTiq8nXuwojY5CkyXhVGKi2kJFTMa7FK4tNz2TZJSykbpiE4S",
  "key27": "4dZ75V7C8fpTmQggt5p6kDGp2vrnLyWaBGiBeg8Bt5kuFTgfPXRobT7d3EwwPKhNZ1FhePBHZZxXiErQPE7zPXkU",
  "key28": "39zKpvcN1jLQvn81MeNRajqSwgLax5dH91a1cQFazAuZdDQbj3L44Nksi5cFmPoka9PwUJNvCo3ZEPXa43QojvX2",
  "key29": "3QXEVSk4qTTpBMr6otkveAX7UqetdCXfRCgAtQ8N4wXEusNifrmuZ2HbPpx6NdtShBXBimo8Yp9h2xAqfYbtq5kg",
  "key30": "66bou5jLLZPF5Akuop65D9xY59D2EGCBq3eKD7xVfHMvc7tFoaK9dgZ5X5RuPEto1diwdgqh1vuY1FY7kGunknMn",
  "key31": "3fj8AptsD3ADukUoKWC4NreBvFVgowQyCuTdGCuW1CnKQw9Lo8mwoV6dUSEYju8TUu6gtFUHoVDq95tVBNC9zDsz",
  "key32": "5istykdwDs2eeEr1rFXKwckKm7gfG9t8X1YLEihDPfSXSGHY8VREW4mYawRhRLpEwaEJC8FdeGJHMsErv3TfRc3U",
  "key33": "4fzUoTjSmWbcrU1NDnjtBPCR9CsoGwzHbd3banib88Wi2P2NcBb2WGDcPh2KdePC45umpUFjakGEZ9gqJiXL4DvB",
  "key34": "2tDm4RykQhScCXR5agPqxo4y4t9QAQURgyrFdL4kzyv7FcACAvG41x6xf4hBD1XYjQMJN7eXUoYR6DFiiGHUvfX",
  "key35": "52ZAWr3TfzGJVsJywFJD1JozNh78iiDu7PrF33ujmuijKosY3VkEdUZesNM7B1jCBXBontULRTz3s34CM94xZMTZ",
  "key36": "28wpKxGkUQYecr4upKdLJvJbQDcvp9dQ9BUG9UUFtMiRo3atHcq474TnHenyad4hkH33k3D3S9cPApQqrcX5d3jm",
  "key37": "bLa9B69qKUPML45za5NxEyaR2Ck19N2GjvEJRob87PgNk64xsjENDhm4Y6EyBqN98j9TjZHMakZqcxg2rapz9nL",
  "key38": "2CzAMDDQbYMszkEeYn2fQ7bvTf8kJ2MDbjbipfa3e5nbGRtP4kLiHBcdAgDz4MxruFk4G4ck8D18wbYCib3yQYhw",
  "key39": "31jRFU23DxLGodh4wyiNSCyNfq5FRH5obvC2NFZJkzSPUgFnJ7LYfF2bQ1WZBLRD6QavZyHv5sEUxwkvTpJvpSxT",
  "key40": "34ftmy1j3CKTnmwWymdhRmE78PuT5g1h6niN9B8G43U66FyQKRvbQi3k7MPqcvkCZoNVJTXAvkGYBckT43kbmRmL",
  "key41": "2RKbX9Q3i5VoWM9Jh3i1hToBTRb7CcVQynw4NUtqekMkfNDa1dpU6dJeeJrMjCwd3Uxpizd714rSZhfcaoUJvMbt",
  "key42": "5ZgPTqqAgLXSKSJLPqgiJNZZg19HnRD1qfWcipLNMSyHLWXzgmZ4Cq9TCCnhMjrT9NhbcrpgriZfh9DPwJgy3agY",
  "key43": "3MRm5unmPnnhxDqNzQnvKtmFS8CSTdaGyXhrkjA3NnuaQEvmA6GB7jPnVxit3zKRxUNpb7iTkwj7dM4AAQXouTen",
  "key44": "5TsASrJbG7j5PRbKzXnboyDM8sypT4qVh3ZyZd4vKV64VYsHPYfWe4jxk4hftd4EnDQ3UeadiAHdsftv4NxFStkQ",
  "key45": "4SosvtCmiSC8zc6Ui9rfCvcZyfzzftVtTFd3kXJpn46pg1psPrXezWzidycsideWV18o5AYYKiuszrDdcwwYLhhf",
  "key46": "47ifu9t3gmNALHUHtZ1yKMcsbWTtZ7pG5hgTfM2Z2vTNerBUbCiYY65AavZRoHCUvzacQPj6HRUwFCS3v9j8vyX2",
  "key47": "2c5cLhW568ioGqigK87z5L8U7xrTariM9csviijMMipTU86v1DscnhWysCZQhWVB5KEewR9kvvrn4J3QvtM6MNen"
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
