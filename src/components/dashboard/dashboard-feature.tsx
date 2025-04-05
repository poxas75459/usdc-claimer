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
    "4Mf1fgwe77X7N6E5sxaiuw9MnMttUcf7LXxjvtd3RAcqC1eqDhDgnhydeWZVYADX7rhDg3XSq8gWBgrBtsjT8KCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RtBrJZ4jhubS4nRx1rdR4QjgYAPhCvchi7HVSq6vSwmJ12xu8YcNWib9bQoDSBq5goZMHLzs83E7KWst4YEPSzN",
  "key1": "2y6QCXhtHeQ3PdudkcmdbVWcVXaTqNQS4zmbATiJrFdgbCxxXw3UmRycJFBUnGfRyZeMSK8Bu1oAaCKRXsqqo6zF",
  "key2": "SDD46DmE5vB6MKmBfLPs9dbSJW6knBmqA1u6Xx8pZkvmCvcuFRhhC2gUeguExbewVQCR2E8wNpCgPyxrP2SCsao",
  "key3": "5KfJUBpiZNC5fEH11YUPzFxfxror4nGTJr1x1paCUwg1JCfsEmgzUsNHmZUVnsxnEs7EjeWNz9XwDG5eb3hZT5Tf",
  "key4": "4oyWQQtQ6SVLweQV2cKWDBKJTUVyNm6rgMbQUS5TkAr4681ZF2nbUEJ83azaJFiUXeCddRNRJDwxF7rvM811jZ6Y",
  "key5": "5VJEGpBhKECXLGksngUwS9gYbWy4JqzdX1hYiFCWVRePQCBPpywhfnfJmq3VCprSV4t2ZJGe19dLb6VTUFsbkogt",
  "key6": "4xqvageoXmubTRG3v4ZRj3qCfRHnzwibvzzb43Cjg32y1EeTLKQAVRthPWZ35TSVX65nkS6jK2ZJy4eMHhBLKD4r",
  "key7": "2o7kLcx3gdrMf4VF4sQwVvtkkD8ZU8nxBPpyk5z8j69XZ88hTf6wAbiB91AmnnppN3WiQWBnb1A75BsixxprtSF6",
  "key8": "iv3dXC7LLBWww7FB62GXVUsZ13ySoxnYrK29TQq93G9W3Vi6jPRmRFzRPw4uf2Ey4V6rvbTNFVKyFtfQbYTgCM6",
  "key9": "3oussNoYdxdQPQVZZBWAT2jy7M1rBWgL6s9DsRc7qPMC6vSdVjbtXEABreuHizrxrJiKDyUk3UMBp2w7n2g8rzZS",
  "key10": "2hnJbjniW7uxLk4TnSMRbHoX2PesbWT57hGVESsbu3jiMyrVSHsgASCCupnsKSgrRKTr6vhnqdUvkzwDP7Qacsb3",
  "key11": "5XbUmcaCqDr7fVYgLGnG89srktQ9XcwGmmjfeyLQfNPsdXYYgYsvUEP5ddoo8CJDdNTRYrtB2SULM2TNM8v34v3n",
  "key12": "5U7FNmk364xQ1Rb2VfBnQ3zm5hBFCunr3heC8cDW4RwjH2oE3xPG5iXrwecTQvmCH5ai9okAkFv27bc3XG9SDC7o",
  "key13": "4WxEmubNQi1ceRJXn2HP4AT94rssDihdEnQ1wfKf11d4SrJYqrYxf5EzbRpvcUGDp3b5uovDu4zX1MbDKLDfzANt",
  "key14": "3Ta9nRQFLS9C53zxvT2AE5bJayEvUzVnXXQnYe47sgvKCH4kHzvuzkVMjB6bFr2BQqRNhWJghqWVx9Ph3nmTSMhf",
  "key15": "5HBiHQAEmUBLSWdVagwgUdYQ4g2BrxzWfxnBMjBcZBmG2ijLHAi9aVCz3LZqzLh8Th1apP9w4QDfrWwk74b7NFPn",
  "key16": "Muwrc3Ttugn7qxgp4oXXvSNivCcnukkvnEPYSntXzjGUYCkHqRu5NPiwinYjNzxUGRtMLhP9RfbkEyX7vG5YUcc",
  "key17": "52VS5HSrDRDHSRvjDLq2LCcTGSdEMToPHawXeJ4goSHTFr2q3xcpUDqWbYFRwPfQxxBZDGqe15Jd4sVefHKzgKrJ",
  "key18": "428584VGb2Zii9j9mnXMuC3SczVcBJtn6R3c3S1EbQSuo2wwQV7oQGfTixJFLFS8DWawhnEtHZDLHeZemREPMnAh",
  "key19": "3v5rE6upmgKxkmqsDxEaDoeRReMGkr7QGMzVSGZ4XB662YugAc7ComvdZp9PwMfhNMaMezYc8Mctpq9eBQDxw93u",
  "key20": "329FndWaCt821MHZ8L4W6R19t9V6hQeuYJ8z7oXSrj7kst14Xtr4AN5Wf28N6J3FETBDPAKHz1azko7XXLwwZKM8",
  "key21": "24jY2ii7m8X4TosjKP68uTTw1Ckj9ZyPxEcc6tv1HnAHTmWbPkEkyJ32bPEt1aZ8rmGs83VSjvTZ9BGs3f4Nrqgq",
  "key22": "2t2D8QpHtkAYYbnXx44H7mDQfDq6GUPkGtzhVXpZ9CdGLEG8EBr5C8fKp58HZ82JDzkmaMP7LNDKAtNj52KXBreW",
  "key23": "66gFgzUAAavnaDfzSE4KHDAroAGgkHVW9TnmhfTbcNp4WR51eEde1eWR3Ug9phoYQtHwFwxkUyjgwJER4GaWUU3x",
  "key24": "3qtDyf16Nf1B9zpJJkT9Z8fyVqiahvwy4Zzbwi3Cc3oKRwz6rFgfcbjvNd6Djw6vQ2hmbbnjbFZZc8arxcfE9qzC",
  "key25": "5Kdz4LRsmRTG8gMgDPK4t3MP7roS3dyWfmPPFk842pJwmiR9gt73QhSfAA7ybh83iwiLKaKqfZB4MjU7Yp75NvWo",
  "key26": "5mmrwwiwkE9wqcmVoKvykwxJB1d6NdiMGVjs5SRqQ8yeHtpeT1mZfyzdctqj3BLJLsBVfDqBAkDQvZ5WNWXYowAp",
  "key27": "j6nkcc4Txyh4hv6yH6gbceHtqUXjk8PQHb7w4WEoGLJ6C3N2Wi39RibHsEUUiwYsfUKN4eP2FqAErAb2c8LzvoF",
  "key28": "3MYhDxmWqpXbZWrgmpi5r8WTSe8abAPH3ypk7VCmK2o3gv4Tx9E8cq7DdVg3jmUmBAUvTpYjuYXiyH2Xd2MBGD77",
  "key29": "5DFKeg3XwnfVzLZi3zg4TpyS4R57mJfV7NdWkTN8hMypEVBJVK8h2vVpUZrGHoifK7CbhkQx9QLxFV9RECpLBguj",
  "key30": "47pq9ZDAuyb6tnWGXek5oUq9CD4QmtU83mbDun1rJBSbWw3w6SLxaKCaKmgfNmNEffwwHJ4gkrWZz9rk4Szj8DMt",
  "key31": "5uzzmdvPE86FZwzcZmQfqxxaqkCo9AoE2xpgefihT7xEgsbp3v4wF319ZGPrFVtBsEViKQtqSxHZFd6JM79pW7dJ",
  "key32": "oYsHTf1dUfUv8nGkzcgwh4zHpD6kCsrQQQmWkqTdGURoXtYPfpXDFsixwLWupggBKiUTtYjQSrZ8H8UPCfnCgXD",
  "key33": "5CMn9kTUabti8HoPzjXkw1tPxGRkRrj5P7AEmAAS5PX4AMNjEHkR2vHcQLv6fcRHNHUua55UzM3o3686Am8mYrG",
  "key34": "4zyrka11ZriggBBgWnob8XaBMoLaE7GwUVFCT5VM5W8g5kBFh4nzcF3QF6izwye2avNXq4vs5Y7cEaMFcBNr6Xyb",
  "key35": "izDfy2hUK15vRqDWcWa3q19hEsrBifRBzzaZGKWPb9RrKrcpQDqSgs9jmnHVWEi91A7HXTVxeFkeUw4DNRwM1ek",
  "key36": "473XTdmDGnKqFXuSYLpg7YkgxV85a3GQxGjLnbD75UNurunUyKsV4wpr88xXdTLUYq2fPUbT2u84duCxN7Pmbuzk",
  "key37": "NaNakVBQs3KHDxhgy2mySYWxgcbTikxuQiBPxwiBfrCWoEbx3QpW3obWfy63L8j81dhtMSHvdNgqq5kBo4pYTCc",
  "key38": "1Ae9K2s81sA2C9V5zo6895VR1fTaGHuhWe6pcme2sxALN7tzB7WoTRuJvpFGwc7dmnxQy6rLH4FLV5QHQFHzfU4",
  "key39": "dWrGkrfeJRWu1TEQLi14bzjto8sKEoRfwdgs5PreufUfYu5v9CyAgyUFazPCTwHdjLVnUaYomdc86f71pr56QuX",
  "key40": "hDfzpngkHzjEypTkbkz8Q791PpeM2vPmM2cvh8nmAt7J4yYgDn6P3piPJivn5QTP7tpWMeq9dDC69ctU5SAJqQP",
  "key41": "4iaGAXbsTwuEFrmo4u3KuNmw558oYyEinY26jMdZKEsqtoBi7CgFpYY193JjbLhZ51CzffMMr6J39RV9m3vXXvXD",
  "key42": "4jqDQQrBm4Gn9yUvbVRMdhJaSjeiktmgnvtCuU2Sr2WaS6VzkTH6okktePKQpNn32SU622T58myT7z1HKXp63czS",
  "key43": "59uiDSHBEWEgG1wePNbRCWXZmGr9tC9X1opYKLeKVLez4AHc9kn6LUr5Cqs2TTEqX2SUrqrRomgXV4qL1XmbbLVa",
  "key44": "oqKbHHYKHf2q4feebkuNX4nsnCZnCUfRTxPuMDwTeHZfGDvYXnw8KNEvwkq6jaVaLa3tFHBudMHjY3hGsbvGqhK",
  "key45": "4oddD4RAjT7oSHYCAfpeUFd8zbBrvLqAvM2M59N8HCKBoJFzhdmsGYEJHK77zWtqmXzbTwNKMvZH2C6jCj9QyeJm",
  "key46": "2Z8DUoeHEQ26ATtd9XN8y5RF9FoocPHTPZrHVRiirBGvxUBCT9SWcdgsiTcjmtRBQDPoXkT8Pem9Ly3KKE3wFcqm"
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
