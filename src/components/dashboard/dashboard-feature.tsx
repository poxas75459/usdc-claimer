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
    "3yD8QQrA32ub1Fa8hbQFzZZpRVzPztGvMymrJPWRtwXs5X3bYjByMjXxgW6jfN9AT1ZW5Uv3q5Gz3DEXPjsq9Coo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zvJPg4q3dJpUqLz3WJBCHpdFWzWhCZjEi4JdvPuWbWTwNKZVWKJBTZEGZLwY73gDycDir8McVACTaf1nsys4XPj",
  "key1": "4F5svvF3y1o95uFCSCddXChnfDX4zaMFsSZtXJHKDwzxAZMWZKxcP6ZgDfPopgUcjumLeQ79rchBrqnRjbczKmqj",
  "key2": "3wNxH48R4DME3dLPg6oTYGrAqiUmQ2b83xMXSPsDn6jUTNvkstupkTa8nnHBc6eNymoRsghQLBaUEgCFyjQ4iieg",
  "key3": "28kXiZVKuDfwXb28pZhjTpomDUm6iGkjFDAMZ1ysCww1pgye335L4Pt5eMBgdSgJBzJy4gaauMCespofqXY2wgRU",
  "key4": "gyrGvZ2kMv87Vy3wi2cvpQoinWLyh6sE6tDJDTzGEcujTK7FcP66DbevKDGQPTPuuLgBaVJi18hrbotKkVJzpxh",
  "key5": "vECQJLtVYd1HW1EvZaq9pgUZbeHQVmSUKKjq6vCLUCXgwtv6NF32h3hSWNvCHfd5Aryptx2pbSgUq4tT932gYUD",
  "key6": "43cM7KJphd4gXLRiqWiRBSC1uFPPc3oUWKpxWCRWcxUjvjNpR8WFETvyoU3V8Xdh26QTQZZ7goa9SRnQhFAiDDnq",
  "key7": "HpwK6TawBXMNW31kKuH5CQ4nibLrYP3kN71Cmxw3bpt44c7kEqHANAZ2xS7zdRQKTjGVFsaCXwY7ZCaJ3tWVWu8",
  "key8": "3YsHbPyi8CWki8YdvmFRBSC2cAwKRRytAw6bcNxd4X6VZzuUfyCUkRTrHPjBccDmqHWM3D8WbSobumn38mT5W1sM",
  "key9": "4YzrDKedKjXTVTxVzd6QoAyHN3zzVRm7urVSvhT9Z7vkhVMm5iCPuEttrqdMXvSUbitZB2QZTS4pvHfq89TFMSp",
  "key10": "5bG33e7uignmdZivXDaWr1veFxANyQGo5wGUeHRPuTf2T1dyptSGHrsW8qYi99wK8SQcG6LNhcCUb4AwU9xYHiis",
  "key11": "5jtsgxUoWPfJkV5v1fW74HXGqEaWM9FXumv4zdMv4SM6eXnk4nEJQvwCm9EHKFntdy9j1KSonUHJtCBAUCMq2MWR",
  "key12": "4CuvNMukxmmeGwwLnJaLQr57jxYTU6vRCYJq6otNg7usrG4B4jQLjrybF2dJpDyu1RmtcZHPBEQHdSANtgmqTUBC",
  "key13": "5uy4RPMtQ4sLgyQfpn658DmBwqdi21nMf9RyBidu1QSmU9J3paE6Mxixtbm5eD6LjVnQArK5BxW4t6E3bwpojsoh",
  "key14": "57HPkE2aoHEgBsytuL8PUQoj8Uwzrn5ULckTGuSgkmcPD1JgX9yV9e8LtYcxavtijCSF8yDuMnQCPBKbFXxcid5L",
  "key15": "4PN5RTn4yVfrdd2Wu9XZ3k7pUQnrCT8C2GZRBTmVx7uwkmYmFoL6CpzitRAtzyM6ZagtfhqJeTDptHWbiCLsX3FT",
  "key16": "46aNPUh5Qsyq4jo5xqbCeyJatB8JRrZhu38NB4zLkWgaej3escBt3KRJDizD7wc48BVHsBDRzu2RdZcDmVsyQgSq",
  "key17": "KN7Z2WHTmME4fspRGxq23Mgfc73qXqHMNuZYYWjypG1hAZ7NTaXg7ddpUh9ZwQVESr4pgHRVFA9zQ3hUxEK7qaU",
  "key18": "g3Me4arVz6j2TzwB35zwnYzdHSErfHdakV53n2zXyMTmrQ5FwK694ECBp7BjtsfGLodEygEzoFc6bnuyNBswsAg",
  "key19": "5RebrQ4RVfPLyJcaUvNoexkzzvBNSqRcugzCUixwYQxnPKd741tN97jcigvvMx4CyAkvNWZ1c6RYW2ANRXKRHACD",
  "key20": "3SfcEaG6Evd8WpqeBFCrGVx6EQ35Eq6F9fhT36unoe9ubv6p9fVGJDnyW4b8KwS7rvJg7U3mGd8iU9kSemLkYQYV",
  "key21": "e5fRr3QuRJYrMezAkHvC6CBj2CBZmrBe6RGN1Ujj749NitprVSTfABTSek7ywUmNMJAk3kWJiwquygjaR1CsSTW",
  "key22": "55KoHFdhfVCRmJnsdNZadGV2JLzmFGMUCWLoZr9Sm9QAH2AdZU6yNPmK7GQQgqPcJky8VeLbKnXkPQ5fvMaKED3v",
  "key23": "3RNypDKbXbeoxTtQcuUStiwPgbCeaAP2GYoshFFBtkddZXMofFTsC9UfrB8T4EpZwUFQ2rSY7gTsr5VKJjJxySsf",
  "key24": "62psohHihsdtjQcWBaT6NVDYsqbyb3N8TiTmUpyE296HruENZJetU9zkE12VVLSPj5NThJVPpWbPgtKrTqKvnfDC",
  "key25": "3BZYUrjXc51t8C1VnvuGJTiy7A6YTv1XeV9nkx5GhC4rbYybW6HXtc1W4LD77WX53EzYMv5oSspBEJ2cKJounSQ4",
  "key26": "5RrgLvLZWRte1Njr5NkgSumj6KPs99AH6zTvrYfKo3k6XXCLu5XSortg7eo9DVTDgzffMvxqcoCdAKvAm67dxq4m",
  "key27": "2d55VCLVnWqzNPChk3BKE6FJGb2F2JKJVsHLW5jYfsXGYkNmqdaySoFrVYtdWYR2bct3WzVDA9zZh8SUf1EHtoMn",
  "key28": "3yByPcwMxao4wv7U7QQYAsE6fyiwoyzTcQjPdNYYu8Cy5XwhAaVo37q9VBrVAMbk5PzUbrnS3X5f6YtBV6Umo7rD",
  "key29": "455s8aGWTEgm7sS53m2oHhqxP1PtBfYdNYUgfCmhsiwRjYcRvnEx9ADmnv6wPj51WJnEZxpBrSnNVvUVa9RmCFS3",
  "key30": "2u9yFLRQrc2GNmZTisepXAFTJ4R3hwmpEfdV8Get8pQjFgAGaVzw8nvmCmseixxSTQ7RWBu4kPMkmyna49yHKeT1",
  "key31": "3whFfd9q1vaAqAAAX9Z6x6Xa6gkKdgPKfYhevipHYh5ipUd4knDq8UeCegVm7rMzfDcm1efrB7rRLzW2r5A2yQV"
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
