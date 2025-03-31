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
    "2MxBo4HEcahwswtKLdTVbr8PRKk6mXJod4KTczBoNeadqJzqznwymezaKB3VNhcNANUxsd5zeKYe2RzsV2C1yF6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YauyZh8NrN1bfyWbvf9qfKXxyG6a4XSYNHiSqKmxZMtBiQmaxT3y1LNuagMVnyyiCkTi6qPhUmUQzNLj7fiQPiL",
  "key1": "2NkxBUjWZPeMgV8BBzFKU2VvXnNzQYWnMys8VW6TKNxS4oPqgx4UqtaZsXw7rEadTuT45HnXnSdnWLbB46AsDJ24",
  "key2": "EzdXMEMvKoyTi7RJ2bjmVCp3eyfb1WG9qFF5ofs8U3VDC9EeJ4WwnEwSVgKAYYf7DwoX1cnLPx2iikiGgwYqx1M",
  "key3": "3A83uY6KTFnkAAquyovHCrxrcQiBvNQuDzs3RcQYsVFvTLcKnywfZ8tr2m3Wd6hKxgfQTSLQZmak5py67YggNQft",
  "key4": "44qSRpWuiLFedTMZrqBXBYPhHHTjq38Ru5fQos8CFW6GZLrxPBN9S6odweo9CPPeKf4m54jHhuXXT9SRrcvNLuGB",
  "key5": "4J7uRcav7woWNTg9FMGfyrwqX79vhRsYJWx5RAcz3dZHeai1h4Bb1fzdg41KwPyXxGLDxjiFZpF43iDNfY7nD5Ae",
  "key6": "3S9R6Sihtqr93vxdjdNhgYksz8Zti9KGWnb74WUQSTewsdPsR7bXCjnwpRV6KQeJXpPp6YE6uLe86kSoi2fxNMJv",
  "key7": "3iANgfCJEDYX9KRm3ZFZUgshdDNQyLBWdcAV4FXujhJeh5JA5vgMAwWFMhxBxSz8qgwuHy63BmAaLQ1TpXmWjJ4n",
  "key8": "24udw6fnq9dRWwmCC7eP2PPva9Q2JWviiHfweUXmAE18EoZS2cxb7RmM7BzLM6iPhgguAmMkefXT6TbZC9d1e5Fw",
  "key9": "BWawA4keQkan7uugiz93EHqMDYxcc5TXxxzrV8Ad8svXorK9JWUTpEZQSd875u6YxUCzDvw34qQ4GD2oge96ZEn",
  "key10": "23kEkhpQ6uoCzwBpDvBCJi2DHG3CaELb1VyJzkT679xkX29zWCyPUFcbYwK4nBQeR4KUN9dNe8DWxaARN7R9wPxi",
  "key11": "4RNFFfDTJquv8AUjtWSjTGmt2wQQUTfii1FQhf6vJyga6WBcq4gUAWfagNWFoJQA5gvRmVpfgMeVyCS9nmAbH9vT",
  "key12": "4AmxgCMbtdRNu8LDapgpztHag4KcHhpfJv9gt939sK4a4Sy5U4DFJ4V2DYWBX5N7EU8a2MBjtb6mnEMV2FjX6nFG",
  "key13": "5ZZ5Ft2NDLCsdPZZhEG8hn1zuRdcejoX55gocTy4HdCD344x9k2DLpTnfQW3vkTu7acArKhbYhJQxsrhVm9xuv4G",
  "key14": "49vwKVRByBpLUKUwq1W5ASWwHaP7UTWExsV6AvDWPLXy59mGAgViAHBpk8J5zKudQZydGAFhe2y7RPCeysMqc1Hs",
  "key15": "4HXJohTU6ACqowPTzkLNuKV8Yrakrs6oWE1wUUNVLb7vxe6T9XHXfr1DGNBeFyThj3GaMdczjb4VkftnEG42zM5T",
  "key16": "2onBXQMuzMpx1WU1pjJSjRUqP74ccaEupqb4tHx7b8CyVHU83Mr9esV4WLvr8ri4CenkL892MmDwFRPL34BFf5oQ",
  "key17": "43VXyHwnsmEekwWJNDWk4qmejDRvF3TqVoYZc4ZfP8HrRptjXpc1ZW4ntqqTKhu1omvaT2MWSw6LFrBLK2bmzvyD",
  "key18": "3qUWBJn55g9TDmonVxcyted5hrJR5SfhQFTcpQQCpDF5AkJQBVtkouidLBrCtm1KzonUeAoUguDSBXqsXkMZ3Enp",
  "key19": "3hQP5AmAYyhD1rfph8N2oArNV4eD58pHcc2KRdsWnpfPtY7vsihKZMQWSvFurTWPYNPoHGeBnthL85b1d7WwgATM",
  "key20": "58Zj4szPEQV49ay5UQnP72b4ushHjqv6tJyqnTu8EoZY6P81sEmrN1B6VUK8NQYSkuRvYCw95DfuQMTGFyXWNcnu",
  "key21": "4hoendd4zYYyqzKMCjyaGripKdZ8ZwgcPP3ZZSo8R6aF5GdKQYnV13kGn7yBkCcYqhtmdwuQqRm4Zf8XmojTc8EX",
  "key22": "4daPVLj8qWt1ar2Ubx1Ax4zbbsbprUi6iJjS378x8PaRr9cBbVRFaGM3pF2DKUCGNik3WjrXcW8pJuw8McRYD5Q4",
  "key23": "3SzpkEg6wDSZdWTLTFiKLZez5Q4keXDjq55Pk7mcCRtxGPUBjMV3M8aW5bDXZ3oR2oyhHNCsMc5a1ANB9jHpBd2p",
  "key24": "5AkoGDAJFWdwdyETRJpTFQjPoTsJWCLtYjpGriffkcJZBo9oFnW4mC9bpsrmG33vH1R1m4PcLjPRyWVbifheKAY8",
  "key25": "3Q78aGepZNiJytRsQa2jJjWADiGbmdGcrdm9b9LLQH7XEHwrVtMQL1td31zEhk2EHJ153DYK5ioZESGe2dKKgsw2",
  "key26": "4Ue1W4C3MTBD95jLAbyRWuAniqwjLjFfE6S2MJEgg9tY1xLwvsBsobJYkWQCBStxePdisoEEeEj7qyNJos3hs3df",
  "key27": "5s3do9CtSVseY52CVRWt4trNMRQic8yF1597d2JprREVJN9FAvzTTozCHb4N17LA9SFrdGsq1zNvW9xNHGuWbms7",
  "key28": "5C2Xd3PpYyhvcgLT4SyGvWBVtyXsLL19apzzYRw79qKUaQAjoShAAqFAR8LEpZrvkHdPi9msYgCRFLh7ucBLh4pp",
  "key29": "4ZJtogrbtXvPyLZGPcwUUNMDAj9ZnpRh4sPWdUQPbNY17TKqGGfPXnnZktvpM97X3571DXFUL8nxKckqD3VRse6f",
  "key30": "eiDKRBeRXyU7XQNtM6mAEu69Z1cCMvw9Vxi53kkxwMVqa4XzgqWvSirk4DHnwKAPFMJ3JQeEFWydbnpx63Drwai",
  "key31": "2wf2gGqsJe6dUL8LdTEHY26UtMhN5z3x9S9QQk1igAubmsLrRWvSzDk5x8hPe3JxAEw7CqSkgdP6qWudeEis9tNZ",
  "key32": "ZoSNFvexRLAqxwF7BUTEv2zbMGZrpgG8w23X6Hhyc6LTvKqyWKmNXAkF5RxrFiyhu1tSfqJU99BA77SWYTbAUoz",
  "key33": "22fT5vLZvq75LJk6TKpmKY4NMkCFwHXmR55seo3pqPAGsKoz7zKS4exnHzHfbdpdMJWBYT3mJkUYwyQUZ4HeS5qQ",
  "key34": "4L2g1he1b6fgFsw6uGAYRDccnHoinyhGNCUPX1caYFEjJdZoJVdKm9uVitJRTdWAw3D1BEicFf72j8jyuJiZUt5J",
  "key35": "e55RYWAnRops2cop9BPJUspxs7yQ59A4CuUCneqCQETKDSDXzaDbWAyhJ4YmH1huRxRrxLQvRcTka24xMfEHV1k"
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
