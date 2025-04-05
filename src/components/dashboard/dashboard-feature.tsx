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
    "2D1kNARas3SGAkM29ZDBJ1HrEgJDRea1rG93qbixkAVhsMaDaRr9GhYpZaE3PHa4RFYdvexTuQ2LMpHdsSHizLGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyvwNJd9KDPveTJ3TTVfxkwkQBq8KZHfftV9tugJQGt2pxtd88KLKKq7jhftbq5FSa49sjRWSmfKXsftf4Ssga4",
  "key1": "2EMHJzhhmBdEKeButrZpnjd55yetx4beVtMV9L7CrnWYZQj2P3yzsNKCiZRWrJUxFV1NnBHHmEvXpstJor4zSb4s",
  "key2": "3CrAxYsemJmKbFD4vk5n3uoic2ZqghYzPnSwwCR1Vn7Bwmezt6py1TJ2GecTXUGfbj7Nv3L6WA9bnYpMeJp4qwv9",
  "key3": "1r8TuG1YZJKxWPxGxUx2qSW3Tz4Lk4Qyd7ivKsHGKSezLLnHfW4CCHrZoNx16KA3bPz5rYkamTPFPDzaDGY2kWi",
  "key4": "29Zga9pr8UdtSmmgvHc3ER4qggrZXwJUJKT6tTRj1t4ZMwvtAbeXAKcYN42SUXujFaLhutVvvisqLVKv1nZ8K4xe",
  "key5": "5rA5wRPaVh5vdDr9vxUoSkSY6ApzarmCB3PuDW47UPU8RyBWoytFCTbGYjyaZWRgBYdpWY3Wn5FiKjES1ErkdG4D",
  "key6": "5tLyr7gj29GobKmp5Jie8Sbgo6W8DaTdx9mo19wjy5JrEMRsjwejoPWZAbkAYNDUjVdopC8XjsMohgrXfUbs79HR",
  "key7": "4fZ9PsiaEXpdj7dMHqF9V12F8wXQUzsj5Kp36NaKSYUZgPDheA7iPi5zFJ2Eczxe7BVS4urn6minPyGqataqLPe8",
  "key8": "5NEqXgATKc39S3LxpX3kZx4A8BEtS6f6cXvHFwtcduaXpSaGA7gnhYziMoS5VuzAapWkWjqEkd9uW35DvZ34BpBA",
  "key9": "2bX1zB3S7JxRavExXZopXh25xUekzc2wMeaU1beyv1GF331eDwHURuhAGHWkLBepjEvsV7z4sggzUgJZpejt6nRQ",
  "key10": "42P4z2vhR7eHFFQJm3imaczkPWnJ7M2Khc6fuC51e12y6nwYSbqPRBBmjACobXmxiSfWUT4KvynzziYejCsTrWtV",
  "key11": "2Fmc3NcdEPZ4PQ4vQp2ZjCTnfrzM6pQ9do72y1qM7WSRvKTh9LGbrDJ99WCAjy3JpkE4hA9gwXxLvcPwvh1xvoLi",
  "key12": "4sLLcu6EKqQhvgbA2mseWN6FQpggoF92b31vMiwLWHhNJhNjGEjRCYdNvYbaqiSdvwMSBPDBra7WsNjR66sJJeUW",
  "key13": "3yUE7oYtsqamNcLeQYYD111oPmNK1MDggsQedNc6Zyr5s1LphsQjDVg6uqkmpCaGy5pPxvRSRKmtzXJkJUTnLTvY",
  "key14": "3EqdhkGSXgU2R9Tn6fDPXFa5VPvwSFmmHZif9VjKVh4sc4uRicZwutYTii1DzMpZpuXeUNjr3AhJHvk8WZ47ZZmU",
  "key15": "4NPK39BTxsRG7jGyZMCxW4ctbcV4GNwAX8fSQRYwhwQVLUAaFCXxKPHKys98EYM7RnoiekLSZnWbPs6tjozcjcq1",
  "key16": "3bNtPMRbnVpYz8udDCZkTqDSt2ESas9GfXUXaGthzhQ5jjWRbW5T8jcKpDxSm3YNGg4Y7JJd6FEUKGPEpjjAcwFh",
  "key17": "5iqu5ajFzh1oRUfrcM9RJxUsUQjUu9cfQ4DgQ4VhLPh1R3otzCv6DP1EJUHqNkoJMTB8QrAztKxPGLMPtdEiNAEn",
  "key18": "2kJY1NMY3CLu4RjHbFM91tgYicrJMjr7ry4N6fbNxzJLmYmLF9GxjksjFAvE9fQ4egLwBUBnxLDbWFeaJCAWc2UY",
  "key19": "4JbR1mCzkQEtVTJEbZvqqo18mhcr4wJKNGnsNAvxhh1xvU4uC7Lo1c3MYCVx25GzXk5R6cpVKWg14ZNNeZGZyCS8",
  "key20": "4RhyFSQRzF2RFPW99WrvJmrHvb6oJrVWdmHuaf9f2aQ7LV2Uzf2rS4hFvQwRqm7tYSizttr4AsvHaVRBSDEsjVYV",
  "key21": "3dNDAkXWGoXmy8arcANMf16Dyu7KLxoHpcYoo5NidimSsNhf92UPKzYvdeiJVX1r7MG6ptokXoaBpcDGbma1mJWX",
  "key22": "3A4XriCnjCiaviFWBbhu59tYccTqdJzUbka3DBjiz5vyXynwXFqzQ3RsQwey9GAqJKB1Y2eTE1AdwZua8Ak4cCQd",
  "key23": "5JV8Tw2rPYMoQRqC6DhPGz8sPZ7cTo8kxt6MPnhLNgwYUi5kGiouHESL3ygn1FCEp1SGukTFypLsTKegBcKp1NPo",
  "key24": "4gioosBJDkRMnqXswSeNvCLN6AVimYLQ5NxaaR92yTbtiuM18JwqpZLfzVVBXuvuaFhEXjDSQ2t15CDoWdWmK5Qf",
  "key25": "3ftiQMbt7EiLDxx7SKe48WdCfrWdGcE7fQUSAh8M1cyrz4XQyrP5czZR33P49EhBcB18ZWgCG6SogN6cRNb7DtmA",
  "key26": "3KH95bgZRm2G5xbBPoPi41saoG4T9ZwCJsvFTyFLFDB3BSmB1YZ84aC79bZZvkyiMZvfjmLZ9GLZi4jMpFnVRxxo",
  "key27": "39uvFBZE8zyah39UfrLrhebU7RsWDFWcGuLDW1oDTZKJTQgcNr1Ngiu4NJfkRdobWpeyM4f6Ty2sNWvRQPBGFxqv",
  "key28": "3KL2jDxHTCmYTFHB8PxzE1HAjDqVUcorokBdgJT8Kv3XfKw1wPw3QixFMYksEgJPrA73KdhsV5BVVQAYcw2oCzE",
  "key29": "4NEsLHE1g9dadiaezHcbtHdtaFMUcJKZ2g8KiTroN7mBVJi2pmnGawaLL6s1hUcwh4JdGdN2qEFUFwoaW1UuLUPi",
  "key30": "4ZSk51ChLW7P7SopsbZq2rbiSgZYeEVTYa3NGXUFZautu2A4MyXUFJvowvpmdhK9JJocoDD7nYPwxDt2r4cykDVF",
  "key31": "2ezQ6ue9yK5cxTgbQnqeLCoK7ezwdU6KwyqrwZN5TVAvcvBKfQRYCyXy7m79Swnw7PececKeY8XmbUAS8m6BKyES",
  "key32": "65NNFm5XUiSsjNmZV7zvEHZ5kqpANASMqqcmgpEpLm9HwvHtWykVJyrRtcq2PXwph2angFZaQ5qkaXnuHkiRm28K",
  "key33": "3itydzzXL8BzY5goD7EbacFCazm3NG8ouGdJDxKaBERX6w1sUoXo4xd3LV5rjjV7ctFdt3ZWAjfY28nByyyxWA7Q",
  "key34": "3HhR3Go2Mn2xosfRkB1uDUyPRbP7bXEKQhak7HNwgejf5NZkEt6v1KtNXRxipM3uZiWtneKvaPArTq6LUaxdkz9v",
  "key35": "5QJ8E2v7Xi4HwHCAYwhXgiJwGAXcUPiFDPZLChsRxg6JNk69FyJvavVGwC26Pzuuk1gxzFXKk6gcFR5Jpdx1sLrG",
  "key36": "54uxsiWxuMN9urNWNC57Y6S5qxqXcQZzZcZs1atLetTpL2vkPaPtWD2QAd9eot69JFoefQuUn1Ugz2W8YqRzQzyz",
  "key37": "3iuwmSPQZN83ic1suKYU7aAkSvezj4rvZAcW2KZzUziqMEgHMQzyHka81P3oD4sq5ctPEuvXX2gVbdH8rMtDFp3d",
  "key38": "4xgjA2qD23SkC3mgts6yGsgKZotmYaNZmwUWuVGuV1Jfcx1yWpcMSEPWF5ekxby7YZFbQw77HTgxSeSUMEu5RTJr"
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
