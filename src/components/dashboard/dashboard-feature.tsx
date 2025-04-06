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
    "3w8ZsyVziSksjcCezU9qYZzfQdyppHRQ8hv8Cc4ZB79vgJczgiUueq4ryacgPSHUmdb4yyzKAiUV41fTYN4Lkkcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59A1Vabw9hJcfEfp73ZMtqLUHYz4ieNGPogQsBahXJwMxqyVnzLfwUM15XznDMP44NqMF5ETxdcGnxWeWkpQakgE",
  "key1": "3HfDSw8bc9ZHStrhDYxy8kVAWkA5Lmo8i82toCo1rxPwuVujENpJ9EkaN5H4RJ6imz6ti7rPG2ZWNvhU2cGwBRh9",
  "key2": "4EfEi9jpL5PLAWrA3LEdczUScmZqkgeDYcLEPiwPLfgiuoR3oeKP7QNUu3JV4tLkNZ6yRnSpUnDh71Xipa2R62Nd",
  "key3": "5KARyT7ZY3r7KGjtBQSMRaHd9GV7RUJJ1RMhcK2SxzK81Fuc4gdocq3gNAm8UMM3tdDbahS6NT5VTXnEdLgDWVgJ",
  "key4": "3qNYdcaoQVtVtSnKUygVHLs5TYFEPsPABC7bzABXVMqMg5yHKVccehTNLVbxdHCseNoeKS7tq7SkgDn3V6NjCAbL",
  "key5": "3nSfk5YXDPuW6bwn3xQqNG81Yxb2WPG3yoBWnqVZ9hi6LEMQoNBq5gPvLNgD2f9SqTcpPuaqZq6F2bp4UwYEbUGV",
  "key6": "2F5JEbmJ41A3HSZHz1K7DfBxDmNKUjU1nXt9y5g1VEtkbz3X5a5BCX9fd1XoMpYLPd1g3fQWSDLXRBsewnYne1Mp",
  "key7": "2d9iAeGqsTu2bi3dts35DR3v8Ai8RsbB8Fr4cN4MS8kiUgspvViJmwcbG7DqkiY2usngJVoPETAxAYYAmJecrc7L",
  "key8": "2PXZ6XMBC9ixm43sE62i9XWmSJvt29rwuqWCdtTFkVcLfgtrQZpv76wXm4F4bBtGUhazVg1wsJvPbMrLL51NdSNn",
  "key9": "5iLRcxqpMq4UUYhqf2BnoAK4CQAkUrQUG7WneZ1GvqBr4c8NTqgB2wtRtauTrrqQkh68feEQRSvWWZmdCumEkw9c",
  "key10": "2eJU7hbm214yGK44YoPToTn6CwZccFgAfzL4e4YqCwPFCVsaQbKFTyWmho1YUzrzCzypaGRik94BVCAhBUrciBEv",
  "key11": "4vgJLVu2zcPuFiWpUJfRYYaU2MXZrE4W3ZyfQVscY1VzSfHFcMpHwGTo6cgwtqKUnks1yPQBcXqq4zeFZX3D5Vxb",
  "key12": "4iGzDa1Z13ZL18dtwZ8Bw9wRmzWvXhdSdPYjxYrbDYA4RUtswmxVVgyk1XSThEeUo9YZXWFPRbLstdgmcFVHYk8V",
  "key13": "3d2fR4VhfQTUHjiiuioKcsNhxRxgucj6Lab39uunqyNPfZBReksZkEzBABv29cJdDgfYD7ZdUxtnLwYgKixpkfze",
  "key14": "PMz7sSsBM9CVUBtaw14UH64EC1TBoGgUmw7ou4YpqfVJr4qnQaXXmdz7nA7gXVNAtGosfJdgBMU3xvFaYyShYvr",
  "key15": "5xyuR14p1zcHJXfTeriQpbkjEovRWNvenj7gVPUHEDRuL2zNeACWoe3S4BFneVvrjGidzcJS2fJjfQm1bHynURac",
  "key16": "3Y7867KWdSPCqHWm8QNdfARcaj5YRSQqL1LwQvGjiPTUfwzuteUe5ZoHpPPiiRjs3Crk2F2rtB9P4JfPwECiBg7c",
  "key17": "2TxmoQVqG71zkrWMsurn7AbbHBceTh11aucureYWT9j66ifztroyeh8BrMFSfcRrYrd6Tvt94hJh4a2QEiNbUs6R",
  "key18": "4EjxJnJ7J1HuECzdedryKz9nmtGwctTVkB3c1EdNUzYmMw3eqKEkNooQuiH2dGcXHKzFqLo71455cZdkbp8LQvPb",
  "key19": "33WDE6ky7om8qpbx2VeGxAmnMz7unm13GR4cY7oUmQhe6qVD6rVy6838ByFS21ZGHjGaCeyeUqBz68d8N4uid6ue",
  "key20": "5qF64zWmJtamSmcM6CdzW6Yh7RBN125cvhzniiqnCbVPPf2tm7HhxMvvUSNeVLS8RjB3hzYswvCTobjMJ6A1jCG6",
  "key21": "3quLCSxKyrVbGJBLp25QfqciRQM9A59QcfoUs6Xsd5KMsRRkPhwSwKsE4s6fi7fvkCTVe8uSFa6WdXptW2BFtU4F",
  "key22": "SX1TcHHFscaB7cGiBJSgdbRuyy8sCvmQxTbngwaoGWP6dUNfWdyt1ZbEnYc2WjgznEEgA1dEhrQeky186QtGtYr",
  "key23": "2evmFGNgi3V1uW5sqiZCShK51DkC38z6fyD4JAXKucor3XpFn2AiRxg9eV3w82NXhHnEhWrmVCmsHjafsWkdxSXR",
  "key24": "tLdXcbdfqCF1z7H6nVgjq6JdJ34aicjXmDpztofjGBmAcVdeChmHZprCiaDarg61hdEfoZMG4tyEFrtcs3frD9v",
  "key25": "48CBt244njUEYZ3MwXAdzYcLrufPr2DEnukozqpUv2d3Jf7v6s5aawt4A7gVx8BeMf1jHsopT8MKzDWn2CeKRUBr",
  "key26": "PRpU5mJLUG3NM5YQ4VusVRFfvmVvQVMqHHGYCyPweZniXaDpykp3y1os9tovK9yc93n4eSDD8dgDGEWK9zXAGc7",
  "key27": "d4hSSwPrVkjphqwGz6VVo68VhvD2xKPKjvDZ2EUFXHZYjarye8w3nWRqXyjmb7JiUnwGfjuwRNL7PvT4EGGHpBM",
  "key28": "3fKd161WCXqiRSaiNxDTsWRVpDvLU2UqQTmY7WmTDF1niBZoGzythMFQ6pyPB6ArmyRSh9hucaRdcxFpc9RNTWaq",
  "key29": "3AaTP9nmizaX225JqsV94jspxPVZMzPuxGKr4Kg5JPWdt9j8gmeXJ9mdBapSAecem4ukCbipjvhUgCAXf7vRgXUe",
  "key30": "iNRbP33j4TbXPxd9GdvVQh9KNxe3uHg7t6rmZ3ANpD4SbGYXVdzeQqx7ybfVS5xDUYmYZipA2BPCescZDotqrdx",
  "key31": "2qnQMbyXaAJ5zhDNcEdiZsoJmjMad9DmRGdDr8iQEYY7gDTMP6DRpY2Ug9KedxM3u8xqqzjiCoD6XXaxb9UGs8g2",
  "key32": "2GLnBCoivdiYUGQLVokXLMu6MD9rYvFN3H81jgu238yaVJvnWJf7Cupbe1NK4nYQeuMY6ESjrA9oDjVXQnCa4rs5",
  "key33": "3KDDvLwHDPMNVJRMX42m4MmGUDj3u8jbYsiZswRrYrPqJAB82GbKCgHe4FMn3R8nq5dvdqYHVqEz4PzT4z7qKybW",
  "key34": "4n5UjviUQLmSpKgyngjbcW1F2TkAXVBxerDvLe8rvHs8kK8TxNuzLMp2C2HADNxc3QhsYsmh8N4Xy7UNdUJShgRT",
  "key35": "464SUmUCxV5ChLtYCxj5LFLkRHiryJRTWSCRg48yvSMjvnSJC64FzsJHadkUJGC8VHkohnn9JgVs8SVLm8RwGunb",
  "key36": "4nJCArNKei2GHV5NLKrkF4Gt22tLHyArL2BVW2AjxqqnrE8u3Vro9vHfX7re4LHkruuDTiTB1p4hgN5FgeiNTsmq"
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
