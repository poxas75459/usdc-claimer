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
    "3gHJdyVC32wiNs9UwhzrZggvK99wZAgtXXnKmk3Jib2tQbQQ6hoLgnd3vBc2tx3rQ2ZNTCELtQEgx21FyGdG8ynw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mRXbjVJs2XyTXw4uTSGhChFygxxUCWm4pfGxSWwB5uDSwTbD5wMEMWvDaUodBkLjBkk7PLcmLRSNiuEw9RT4BbD",
  "key1": "2KUGcLKEqXiRgFiVjLZCRqTC7WNCfUcbjdmNq6L3EZM9cnfRj3UWP1MqqxZsMRYVsx5RtWvnViBS6i8QUUppq2cZ",
  "key2": "3hhuQDwaLG9Dsy7CzrfFS9V7stWxTGDLwRsc4FKUjggazgNaUC2epPLgXMmzR1JvD2bHUaXg5Kbr3EpYBNgShHSr",
  "key3": "23w41FmuNmS3hx9bhHMHMuvdx96MUTvZeP8akeRpps7BMZhDpwtQMPx7ye7z9wUe6KyS9NjU6mHf53v9nYwevyUW",
  "key4": "558XrMJewYjWEB6ZzhR8gdri45GYwkcayDXvWry9Yrr8hCCMBLVjZ936p25XWF8iRa4VN452s96CyL3vDfBfgeDg",
  "key5": "542DfCEHZX8oYkaGGRnE6whHgnc44rBhR9pJQSxy2AQR5DemMWUmP8gU2SKKTHm6tsjUFR8xhwdAwUsUwZSAkDNT",
  "key6": "38APZArVpm9AnDGsPc7CDbwyogaZnKhGyy6ybMH9dXsihfjjYAjpYt6ZK345cTrF6tunPtHw8vJqYy7jKnxVcEBV",
  "key7": "N4HxmnBViVCVL4u2Dux8pcGJPrxVm1Gesv8bjQsmmZ2sCbketit25U8tgazjktFm6avwbxEevqkpGKrASpzKSqh",
  "key8": "3dqdS3mbXfTkHe5jvA7SLt2s8bZdn4Ka2FdLhLGQGAHQZGrn1T5JFX2grSV4LDc6SjhYV5qRGC2CT5hHK6x6avDa",
  "key9": "5pLKV8mZnRL6fDJHnxKC3knwhMEu6bhbRZBySJuY9d8X3h1uz1aDQsyAAWR3picvFk5iA688k6KWwJw2WheHD3QY",
  "key10": "4gZS2WSyYeJvESpUck2ukzgvX45LajPrVpjXHEV7FvRR9HuXzCAo1HE24yBE7MWzzM1aS8D3xLmHjaoriiZJ9Trb",
  "key11": "31zLhuetLxTRf4F1N51hKkyoPRKj75pX7o4K8gKGtZnLdmFvFEdNspj7eUWAw68VP8YmP6ktgubHZqxV96YRdNoe",
  "key12": "MyKj9mJLYeyE1ifRU93NnoCsXSAytHwHtt9DqLuDggShbUBzEcDrxMnzHiTAeUUHxzGSj57eY4VLSf6eq5goggr",
  "key13": "29ECU74SR5FHEJcxn2xNtssczLwUe97erbiRtYubtoEmboiBG1EM5XN6rEeX1KdE5b5H6ZetdEK2K6xM5rKwrbdi",
  "key14": "5GXJzVKuve6QeBqGQ6aPh1g1jb3wrkQgWUsMx7q9ZwnTxjSzB573HFXztekhSkgEuQtZ3RYyYNudrXiGjH7VhWpm",
  "key15": "53Xy1NNWnYFGtMP2S7NFAR7aWYuUk4R7f6nRvAneTDhMzrbYquZXenKL5TV1YyhNdoaTntyuMpUSLSwyaa4RnssH",
  "key16": "5YJpMxHuF8Yj1yzDuEG5tF9P7vWuFoL269XNbEsDifUhoJWiPmmuH7VPYWV5mac43pmNVT16XWxzLaikDyZrUGMJ",
  "key17": "ddZpHWQSre7wVe76ZRtF8FwMTeeEajACoi8ZPNgNSxsEwmSjumgBErpDp6j2NGS9aBCrvBbVRp2J6Twq8SnbHEE",
  "key18": "5gD38MuNcHHoNxL3eJzMJNramMfPBAL44dPJZaJF2dXb2b94i9VD2V9JiUAyk8Nmsswk5PFqPmGeJifRiRLdWDFA",
  "key19": "26Xo8386CUu8QD6CRFoznzqDcGqFfQWzyiPPNUJPQNH56A6fK17gw1CkRrUkdehdgk1JnRtvtHGfpBuCA4eeQAHr",
  "key20": "JcxXtuPZwrkpr6mFZLRTTgCyBqLE96AvKhHNHEvpy2rAnnzX9mypjVANMmvi6QkwiSACa7A21C7yQJJdqDBM61B",
  "key21": "4YZo4VYZd2udhAtW7bKNDozAsr9ipNcrqfCJJNx3yqMxkzvRqaGHJS62XqJp4AFbW9nCuHfz4abjjL7ZUbogLo3s",
  "key22": "nx3TVjKF4k6HB1DarSJLKoYfH7gTJeHsgkqiWDoy6cp2y1mHy495JV7LPqaMnGjapsSbcsBHSG2mZRgogzJrDqz",
  "key23": "hP6NB7AcjskHw61meiunBpvQVpC68e5Y4iYsFYVbjJuZKUoZQw1YtihjzuRoQ1ibypnXdcYTpnx8F6wWbmGhows",
  "key24": "2kpNnr4ZctfL485HDzYJJDWW3FGb3ULWHbsYMoaYdgNhLD3DBFfVCrrN6JBxqFZ3XUVNMF5pKpyYemdA48ovMhJ3",
  "key25": "hyTAjNsFpWeir6rBRrHRzsY3BnLbtWyL4mTXiNPoY3YG231FhV9GGboMPMUHGHuTGDh2XZEPCTjQqVJaZ1mMKDJ",
  "key26": "2aPwXNhhcw6rdmnWN5jVKi78kDMurSLqGGTXP8uX2xWiJAkN1NJaMoFDoTcwEhXDXUGkKwErcsBjbdF5b5dWrN61",
  "key27": "5kXdY4Xwtgg4D4EtSDtEcHmeR8A6TUW4qXKs2XuLjRx8Y6hQ14DEUw1nDgUfjYVk3NavEooDEZYcFb7GGeC1tagE",
  "key28": "5Q9zVF1kdRoQM2nBJC9Yarwfa19V7Dq2UcBcuCeUQ5x5NzLLyVEm5CzTjm4D589JU7zzoQHuD4qAiBKDGVJiMtbW",
  "key29": "3FP3hUGBy3YQkEvMN14LSX1MvRLD2TWr4atqednAN7H4qNKLktiiQrK6PqXk2GUmYbgemF5SPnMhPxtidumYbL4n",
  "key30": "3RKnZNHNmoxugy8qwUngxwcSV9FXvYQ1uTvPeUyqCp77dNQUWttJUF5thU7HCPemR9WZ5m4gUXpLLkQMVEMy6MXq",
  "key31": "2pefrjKF3sCBpcFKjBiyHkAHRzDAz7iYanaaPrgW2q6wpXim8vQwaHLKcVZ9LsapqfLKefLsVnhdQRfdY2buZmaF",
  "key32": "4os4VZMF8WHJjzXoCgg5xJ749LmeYju1WJgrCQ2Ux4K4bdthrRSgdG4cspbwc5Uaj4hk7BS6oefgNtrfNbGGW8c7",
  "key33": "pFYXeuyG1UY7RsQXQo3VFykFo4nB3Dp6RwcDsobVGzofpdEd63Xa7AftXDEXtYjzBNj25NHaXizaxkGed3fiWhu",
  "key34": "RavGsm8yeswgPFjaMs4AX4udShKxkaQ1oyH8mFph47mqfaesrdDVp7o5BjFf1H5ZNevAfFXGYEYAL3rxPDqVQMe",
  "key35": "2tySCL9gCimqqyfgPMMA76tHwoah7p5pZe9Qn6SxKxpwTgVf9o38YcS3hepq4gCHYa4gfomYcDoppjoGynCqaMEp",
  "key36": "2TKCYHp45j6Dnjq9XMHdYgSEhje8JuT3ne2ox3HGEGXgy2KtqnEbpcEV6YPNM2jjg64GgQKn9H6Xy5b2FzZt3nMr",
  "key37": "7yayTayQJ6Qc7sFRk78RzshxqUbvvXNNKAbH7R7RibpHuoSzdkDRea9RpoE6JgqrBo7hMknNFBUvpnWMESW8WNt",
  "key38": "2mJ2Tc7iGr29ZmyVbjhJ5v3MgSaeuBERBeQGXgadM5J74NoLXAJ1GiMzHSFjJgT1WNsJGbZQFRLQsuDSNP6iyjMX",
  "key39": "XWU8TzPbBAY37uqjsp5uGJp14RHZGbMsCBRrSFo5SxDBZwn3WnX9bru7KPiKnJdiBL935tG45886HD4QXz73mcX",
  "key40": "4aJC4cr83WNtQrVbm1R5euEGBeZ9bw25JAwq1fdiNjEvFu8zVQZDLRULNfYVsWgc4btNRjqiupjuTYA91M7XMjpk",
  "key41": "5LVfHbr2X9Py48KwGCZavjCA6XGVZ5DB5u3BQ2uWZegQ5TTeQGhJ1gLikZK6ngfF7G8gjFAmH3cpvLsdmkgiJHLG",
  "key42": "hGpiLqBvmZ22F7HzXfsgtfkUtqfpYj2jLjTS6Pdwz9GYuk2pSY5iEqAGNh4GcNuUiuvwBQTkVKzMeoAqJBHDzJ1",
  "key43": "2R2x8PpUQqxdL48B83HvSJGfr2oBzUDjBNru9HHGcHwWgHvjcHoyFLJxuaF6dW5EnmiBmLvA2h2zLLxyuT5uKMVN",
  "key44": "6MpiG2BLRQB5YTyUahbGmDfjtHFsQ1Yf24wcQ3JKz29sDUCx6UkJLBJUiDJ4zDCcu6iqSqWsAfrEN1U63tAdYEa",
  "key45": "C8gg7XSh5dVgob2JmzautirzFRXmP5S87oU9fGkcQwXf6yZZreQN6VniBKJPmZ8nSKKAPcimJ7i21VSQVnHWWK3",
  "key46": "2mHJnd1cqv2ZNDmLiScYAiGGCRr4Bsk6tKj1rXbXvk5gWYeraj1jWVXf6UDvfpGp2F2j95kL2Umd6v1u8ojyAQ3Y",
  "key47": "qcDiyG7woSBcjdufnroiFksg4qMCbtVMzJpVdzHmYVBUUYzi8zwFFJLyYwFptdu1R1ifNamrztLRQ64opefTTee",
  "key48": "26F4BMrp2BVTsXeVyXtJpC8eyZMD5zsWxVTf2D7dmjtVnXNLG44KTajvSQyeFuaHeaKnyxAQS4aMymZMYW9s8pv5"
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
