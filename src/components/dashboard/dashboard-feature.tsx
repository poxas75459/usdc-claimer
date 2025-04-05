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
    "5712ynkcXjPG9vVJjBQXZkDnxVNRyNG3mzV4cbo3ywSArL1JqhnGHFfyDXj29xbHnWCNMG4LXNHJwyfuR11PP3pT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvD1LokUsoVnw4Z7hkmKoW1r1ENhssdCuq1iNrDU93Lf6oCQ6b4pvtL7kwz5XV6jcVuSXYtJas3uyShURe5WF8c",
  "key1": "5RiAi4MxvGPxEcfkgmiqXNJh8gNHKoQaGr1adsvcdmPUsAjDj9cb3C1QCDATYxtGpy6N1XegFtq3MxSbRoshV3nN",
  "key2": "3NnkfbdQJpH8qLXnEiL4fK9QbkxvUY8c2FJx5Kbx48T16Uf5rGwSp8mS9EAR5JAU25Mw1QWdkAXvznk1ZAtHtKpY",
  "key3": "3mh5riBBMWs3t6P1ZgoQrHjEC5Ct2sVr8rt76iGGaJ7SF84eXnANngsYP4Xa4NrQCkgFDbiDYt34959mKcJQ1NBH",
  "key4": "48xb14nYNyVnMk2BeiCFTLRLrfNVNCLScsmePSYffUQRwQ12Nm56XNaqrzwncChsRnDjsQz2te7PqT8V5zKEyVFk",
  "key5": "2W3Fn1YCZLA2qxvftcMQq3qFMNDhKAz2EhjRpvamWsfgFJVsUgce4z6TN3oauDBGhLracNnAJW8nnKVvfoBhPc5U",
  "key6": "3bdGimXkChAzdDK2F6nQzkTnLainihCrZ41woyAruJ8fpGbuVKA86v68JPWW4aJZqbtmpapV8DnE2QChWt1LgtrZ",
  "key7": "3GrAB5siVTgj4zQxY5q9TunXd8CyEivWeqv1yVoBSCeseg17KWjrNBHyFUGDueiLGxkg4tj6SqDSukeBS5ozDk22",
  "key8": "5dNWR66qiF9ohLLLzNXjQS8cLmqXd5PnPbSeUSgfzjuKJm4nnzx9quhPserVqQKqSFHYkeuGGHvExxnnS3NipjPW",
  "key9": "4uydVVDhuS8YeAdzxZgyPGPCULcTX9B6imQFmJrgvZZ2eosHgSYGYLw5wuhpnGaYgiZey5SxdLadnjTERwFVJ5kV",
  "key10": "4nsxyjee79EWHmmvPRp6HqWvFd4W7xo4TjnK4Q6skpTz9TGMaGsrh8AqUdGgoKqgyZ2pfdeWpMyzd9Vnp3pSaoGq",
  "key11": "65ABocBqMshKTCgEQGHWjqxptXGrFTK4kHaFcery2NyURjvEWuDy72typLEcoQosaLvUGZHkG52NdhFd66y4TBYm",
  "key12": "3CmfdhDHmfjLVkyZ3e7rojrazY5PHsD4X5FzcJgZcibqiSoWg7wf4Ds6htzn1ZJUAXe12rXgqmQm9j6XCSFCyEa1",
  "key13": "5ayZUWUs2XmhvVU18hiJSkkBnHeZchMEMkiAftmu5kphQHV7F6CumBpiK6E9Sff6ZjT4rQkRt6rdNxyLfNctUugn",
  "key14": "39m5gCMoKxbiRsyhqxqFFx3jPB8yhVAbTYUom9jW6mXfU8pTZnZGWdmeMupjMqMczHheSV84j5pfM83hUbPSqL4M",
  "key15": "38ouLKvqLsSSiNBsiGEfx5sbL8yXqHHgnAfBUT9fLdLzKNm5382J88rbdNbxfNeWuWQPkMCfuj9tAW6Lvpe6RsBu",
  "key16": "3Pta1mT6cMk4vrxbtwizNrcL6pPTbFVXEzCyvPw1ug9gbQidtALBJvSXnxfarQKiugvZBwQ1jrNm1oKsJmjLLUjN",
  "key17": "3rpJNPSVRvihedx1Pdwv8FaHJKNyjc3ExUH6aeVmzYRy7DvTfykg27PxWbcg5nYwkHBHFJUbKwUJ773t7NNUKDtH",
  "key18": "2u5Ed4HoY9wMt7pdgHUdQvzZTDnYXXgM6wy8mizuurkwPLvQTX8is6j9cBYtDTroiL2AYkSfm7RrWDm4w3Up6Kzr",
  "key19": "4aeRaixJixLgUb4qSboee3BJMenni8nZ2ooYRUQ3ZZ6BCy4fBfvULyZ5xhCCschC9NnTzfQRJtdMLNMgBBgpvqtH",
  "key20": "61o1yJ6HAaBFnwuitc4mc8eMnDmuhUvMr4axnagirMo9WXdrhHEouzaJQsARYb4G4ranaN4gw7edw81PTbDvb3vQ",
  "key21": "2ggXCrMkAffBSjx1buPUEwX9viLhVL8DMdQAY6joLeUGyCuFy2zjBA4SMEsU8bhwkG6tBmwsHr18p6ZyXouhD81S",
  "key22": "59MdT8xTkqRD61XoebPBvrfSFgr9y4XtKCcp3YC1yUu3BxydLfy6vnv6PX84ak93Awiv6ujEKGm6DS5ephjzLWGv",
  "key23": "3Z1FpFwyxatDSXTvqgQyaxhifDkbeXsPFBjyhdzSDLnY5bAQSkCVrnsCLRitb6UaBWKkS9GEMrzrkPGiDfyc3SqN",
  "key24": "3pNZTaRu9FAuNv2mqLqJeRwmpHxDeLR7sQcyV7CwdTEjYZzfhTJcHyMac5K6zRdZDTVR7wVfN3ouepetyG1MK7Mm",
  "key25": "57tbNeJQqpq5KXkxXHppwM7c3JGbLjMJn9WKeF2taqnhhUBsCT7rFdeZhzy95obSJd4Kpchp79Njzntv87zq8njo",
  "key26": "6abDVXJi1ycZ4Nzpo92RGwshEM4cJnLi7XrRFaRqBSn7C9dqi4E9Gz1UjyemoRJbEvebwuttaegWopwXCSGHDZB"
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
