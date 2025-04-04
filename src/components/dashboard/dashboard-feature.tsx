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
    "4NbtLWD89s4fCobkjxyjvKbFD25Ym3QMQeyknxHSQqMKCMUXhCNUkncudRBtTZy4HjWQyZ3UjvojYJqHsoLBK4Db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nb2S47btXyZ5EAkR9oA2caDFGzH3mZXugca1amEtWzh8KFRTD7gjnxinJ1YFNghg7gskwrbrCATWCHwirYAVYbY",
  "key1": "5dPS6pnuWCDCDrHTVY3mGNELcN51mMAduv7EsWB8auFpvnGNMwFdfUoBfDCnAuv7JZb3DshzrhDbNCa4fc8ceqeH",
  "key2": "5zKo2CSh4WjPAuEEq51t7zCdVG7vdzk7RiiwgbXqfX13HsJvnh3hdgJomyQSe7MygR7VT9sj83R6AcevLPXXyUqq",
  "key3": "5uKdbtUcnDvC5fKjEUTkpV4CKSPuVRWGvVxAS8A9pLpji9vc8Dgt5qLUG6wZGedf78NXm5ebo8vvCwDJtAe5p6Df",
  "key4": "3CE8iPzkzXLwoWPL72DHRZJapKhKFWAkKbyK2hhtnVtaH27QvjxMS9FfvASYb2RhnTrZksdrsavBpudL3kqWkdoL",
  "key5": "3zytphDxZ4ShXVRP3FiBsQd8TU3AbF1BVPfQFFDc31mBjJ1bf8EtoFjZii3qWvzpneoturCrNGsiEiNywpPdJD19",
  "key6": "PWMSdKrCLqTEeq1CiBdBCejQRK8k1JRz3PYnaDhyJWzXPB1toxomngkxVEw4GxHRFXKUYZXDqExci4aLVDiuxi8",
  "key7": "P8dQDAGJFutpeDddZoHfV5H87w2m8tF4HRJD74D4YXmHPipSEVCJGxcMLqhaTWcfCCJfrS3B4xPrTimDJ9SKqME",
  "key8": "2JZorgopJiAmgBBvD9na8VZpKLdvpyH9RGVFUBWnrnmb4dvEPxxkKipRYTZhaFeDtnjPQ9uLLUNtwDavoehwhNhG",
  "key9": "38uoqDybsKngwRSZ6SdNQuYYFqYxQpnnbrxEwLbgNdiWeHFWrecGGSAiM3QvtyPWgGq9jEpPt1Cc6t3gpg226gFZ",
  "key10": "jXkyUedsmA58idN8UH8GeVgBk4pNrhwsAXLYgfqKTfSd9Ay2YjmPkhnChNYRjF18bTaLCi1KLGik11JzFkWNosd",
  "key11": "2892omQkZm9w5AvQd6hjLqPxtof9vH8HURoky8AvfvVXPAfcsG5b1ZYtH69onqHoZ8C4R4i8sfswHW9TXvDbcP9Q",
  "key12": "6DfHQnGbu6tsb2ZXf6X7NKoGYosCuSFWCa3xvDy4gErNN2dQScMDi384C39vzb4APXRukg16dmqYgWT6CLBDRHC",
  "key13": "5vtAQw5xfDspvBkuPHMm4QTsALJ9saLyrxo6d7kho5advmPbafHaM58CZzrUFBfgeUG3qmAWLMVqxGs7W9aSwz19",
  "key14": "5VkBscBEtMjB3neNWpB8c4r9aYri6RHo8bos27NWpssf6fJZ59T4XK1aADp5NZ9x29j7NHtDdQaPe21G9qb1Pq2p",
  "key15": "5MaEcaWAyaWEYnXvFdqDgU76QVSNcanKy86k1SK95eZVBvQKvDd1FBzmtv9B7TH5b4SRyaShWsCdURkj5M7W23fv",
  "key16": "5zZv22sLaj3tuDofPbxQRpDJa7XxcURhvvDbkqtJ1DJoT5CAuqJVkPFRw4HGQiXZooqtj61NQ4fjgQDJWcqWsNeg",
  "key17": "tEUSRPD4zNs7VzmuTaiFb1j3U9j8Uifvfio9iTEUy2DGm6wqftN7pGCKAmB96QNNRJvwhdcpBmyBXkLTqZLPG3c",
  "key18": "ADMNhR6TrCpCwiXJWw6atABqY1BsjMaG87VG8uXnr6p4ie7yzxHFg2KPj5oVgGe3C8WBco9A8BNUQ8sVng3ki5S",
  "key19": "4wdVuR7nqPSpuGE7wEFEFSbc1poA3CNiMWWHe6MineeSpzsocCxisJoMVYk98P6qszfRuhSCqvhZJ9Us9jEzLVAS",
  "key20": "5rN9ABHTz3YfD58p4SxL8BwQoAsbXNJgo2JXWTktnDS94AVsgg4yhzeXKPCqAJL6fSusY2KCxY7vLexHid1i3dKk",
  "key21": "UWDmJTVZXSgQfUKLKDWtDiPVyr4bUq6GezTQB1Xg8Kny2EKU25kqddxccsYFkjBZLGtQLUeKQS4QtnXK2DPpJr2",
  "key22": "4UM78bP2GgfDu4Nz5DcM8Jo3XcrLx7mo72NpGzh8SMhsGV5WgsuBuuEAR539j9C8BsJSWHYphUUTYa3K2vdYGXP1",
  "key23": "2XFB4yVDzrqjfzDBkbuhAQNKfB8Dnv6mbxWDB4CyokqYySmQNjPfouXDJp2XbpgF9DTizVjT3p9jgXwkAhKqsSc1",
  "key24": "2bXTxT2ASxHSDUeU6QpHHGExsqcprmLPdwSrg2o7RmYxg36qLLvtsjHC6C36kXCY6aqBHzQ9FumWGiux9rF1TEKr",
  "key25": "6Np6YDgF72CmWkpbFDPJq3UXWXYqfWoVATu5NacbTAXTyvnYryh2W1TuNPzwEYXKbEg1BoLnhnZCPN4RFeSisJU",
  "key26": "45QBbn9p1Q2Tr5a4CcjNapvmRuP4CSE77zwnw818NARwSXGg5yDyTjebF94T5qWFKQwrbTrk6RnXcpzLMVh33mF",
  "key27": "3KdQGXMQYpskuzeKzHD6o4T1KeqCKEH65dEcZoLvz892W7jfpM4cHrd3jYPNxuXFm6A7cfGZ9x2VZZ9LmxgNfvhD"
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
