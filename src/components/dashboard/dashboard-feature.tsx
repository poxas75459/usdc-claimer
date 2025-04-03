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
    "5bcg8T6J4gowjioFtGRGhypJ4aYvfyGAmDhZopgh4pZUSpW4XZyjPYqX8MPGvDTMYe2gVXp9RTGB5jZPCHCXFoWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfxmbRU7Qjq66iCBStFLRyA5uty2DhrPMWb7YvdLbfMkTdVFvkumhhX9NY4yFZXWDsf9xLcX4X8VSqxUckKUHPo",
  "key1": "qZrmvWgs69iRyqwbHpRjncxpdL628WvQPXAnQUZnA4VBA8PowYb3gAhKpdXudGoSso2sUigXugKrLzRouLYUTaf",
  "key2": "4hMXhX4jUWvBbYKwQaC7Hmj8XPLM8mD4F4mtbrbjJMwTshmcsYhXGG2Bs6um57zZEcy67zD4evyQLz935JENdQDo",
  "key3": "169xNKYPG1MBpsYvv69yh1KbhBnbfRySkLfxGvskFJYWG9aggg1ywL2yKMzTTB5k2rjZYQUQfVvukc4UPta1Zce",
  "key4": "4YcGqbfNJgdNjRHVsD9qTpMvbBzSaUEBSccQimzots1kmC46ksT2vDVSXZmL6aTBkc78iBnZjWQbkYDwa1rU5NLJ",
  "key5": "2cykzxXxKRSMyXhdrvSCyJT9zGh89kNn4QU4yfQxNTuqpYYHwCsEgkHqQ7JmjspmNjkVWt7EiqzB1NNtTFgaS7k5",
  "key6": "358rfPWUt62DN7WGqaVSWybXyMKUaT5C9h8uMLZbpvTemjzbCfvhBQFzZtgp5mL8YgjbCFkpDM7b5iYh4nhLDLgX",
  "key7": "29F7HskHyNDZNWgo3hXVEDh6k2t7tCFmLkMa2VqkkBxmoSZiCYRL2oz9mrgHYG7keEKoNWrzsmvaWkmCzn55QbCR",
  "key8": "2uVSdNxjDg8PxYA2XS6B1nAmqkTg6Y6QaSFj4NK6qztEnvccWJy8pGMSHFWAAnodCUxKkzDT1RKPt6rTWKwWHGPq",
  "key9": "59szCPfzQULXv3m7fmGAy64J9sGvwJvDmFnqFP4UQ6oJBfu3u3ZaQ3scnTM6Ms9DnMGA9PJZopxdAG7AFH1sT365",
  "key10": "3YSuj3vkSthRDaWYyrrKUzEguQCcXPKy2HUF8pfMvB1VjKWfYEC6afXZvC9xqzzMFC43VkLkWymWdH6cjv7sjgvK",
  "key11": "3BUfsiD1ugru8QDHTDG6vdWVCbd2kc72HwRKhxpunE2dsQFeVR1VeAWL2oZW8RzT6YVzRaRtTb96J6EdZ5eyW8WY",
  "key12": "P2LoBQimmbVaQSQEvPPQbtKaZCh4TGFdDQ7CbYPGQCZSzZE59aopgT7jm9h6wsuCkQTvi7W4TbQnC6qocSyiwQi",
  "key13": "2569iH6G5ZtoU4ep7Dc7e6yMuHj7ddDvmptpTvgtjQ1ycuP1eAA69TziwpdegyBaF9KTZ1VfT5bgHqPANBMHAuDN",
  "key14": "3oSxNyTXqTHsBjUqhKTSaesSzbLViL8HGs9sE6iLT4b7yExPGZR8em2a9QqJYPfynJiN933JmTtqEYyufEpZbAfs",
  "key15": "46HF7oK92sc4d7qBk8CS2MFgi7rigVKD91ZUYDf8k5FmPF3wzTmqRRntbDAvR75YN5w3ZpEhM5BtqzXG8XNGZsw5",
  "key16": "349p6EXiiBv4Ft2tGY5zHTdPgM8j44ha7TejRyr8BLgQ5fDcUL4rMmpk6unhKq3D4B2hhCKTZjfrjMqxHdJmMYZe",
  "key17": "57o1ejfJq9suVcwZWuhWUNK2XTtBXUvy19qoGE9fhWHvZ9uEvzV97quJyNbTUnvmxYJsbkf1mQxBo4HcxwVjPpDa",
  "key18": "5zDTXNeBZDtZbaxEM5QifR7g9V5Uz2qbWKqP15UL7T9pVaVoPPt3DAhoUfZKQybCDYjmcJVine7DuWJzTW5ebBkn",
  "key19": "QLrM97Jut1rYU9RwNgGBUFnr9djPK3Q7hB1TKzb3197YtbVFS1wp6SSyLn9c4UJCSjHRbXma191chKEgHwpPeVY",
  "key20": "ph7mAp2guBRksjvrpWP6JyohkMmdoH37rHhfPA3oARbhHoqPBdHbWks5igCj5kbNosEF7pyoAdFF3YDjT7seJxQ",
  "key21": "63Ck4xxcU47JCvTARXxrLoAkRozGfoLWVwiwUwnBbCFBmYBJ6dXZtZo9xiP6n5efnZ4FVPDPnmWdn1zH5yGMnHP7",
  "key22": "h6qec1P3NwUSFzd6wNPdNsvjpAnYaEfWBhrPx96fPRukjE28CCm3NK3sufrBypXhXGj7qLEVHkvGWDut7qKDLkc",
  "key23": "28q1pgDKot1mhHWUrY5XYyoeSLVLvHJJWxopM5bwNb4jyviFMUrJ7cofn8Fndg6UWMbGacjAmcr8Eg4BLrXAGT7g",
  "key24": "2caVLk2QY15pD8bzKeNzmhWVwae9ePf6C4ayBV11JbvxLo38wJLCxzreFMYN8DSFogcHPLDyto2caHirotCj23Fu",
  "key25": "35KyiW9ohJF18Lt57LTnqW6nxtEmv4w5VJdd67ogMTMGYBg9BpcbHbuR6JAdR7HQvDdzjmJCYEKx8Zwj7BdX1UgM",
  "key26": "4bXMPwBNKNUR8RcXMUYk2j7yux3Fvp7RUZswX2VCvJdfsDpyoEb8PdgCJewicGU9GDA2BTZERSPcz2AAXC9Yayqb",
  "key27": "58yY3FFJLBafvdXc7dQMtRC7GEpgcwgv6eDFv73xPurg7iBxCdEwwmZpyPQ9sAPjd7qx6xDkoSukAo1EgfK5ooXo",
  "key28": "3pm1JtcSnCb8pGSZibYbrG3jqrx8TLq3aP4D8gfNMJLLVXZhaUbe4Kjs4yPW9zd6cy6pvWp3MkLdanYtnnYTS2qZ",
  "key29": "2DWbLguiyNDrTnaUty1xLYTr5RTMPHBq1mQ3zkAN2hLSyMDQxoMQqVCwq6d2NXJ1Axjt3GkpWmZTN1wmD8dhXzRD",
  "key30": "3NmxXvECUGoLBo5DyX2Z8NfzeAjxyEga3Dt6ymevQYbevfvzzFZSFNNpSqMgrXFvGDcEBcbbAbq6dJ6GGWhuix2Z",
  "key31": "4rPMDvbpg8mrt2GrxUp3FJWTTToD9odzQ9XFPYksdLUjSXPXJ47wvSc95PicHJL7xZfmoJBMBK5mVwfdDddUFzzn"
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
