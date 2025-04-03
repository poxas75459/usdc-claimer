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
    "34umJsfsa3GtkqNk329Bqe3DnePSUXii7wEwzBmxjvKT8hTMc6y3ZvjmBbsLdTBo38gr5tLuV4uzKqmuBBG1zo94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMo7qt6frbpG5hDZh8HuZu2DmrL4YE65dUwf2XP72t75yXcyoQsgw5UdVEyhmBMuR5dpkrMTZHLTJHE4SPidfXo",
  "key1": "4UWNrwiijzt3yXhmBnGH9F9pgb5SWJrwgpdqyJoydjQYACgTfhhuBZ9pGnmPaeSUe4TT75WzFHdXCVLRCXoecraN",
  "key2": "3vA4p8PJxuNkdDw5H1uKVenD7ap7aRWR9xiLvtjxU3RSY5bRKxeGwaKTFb8cRzUZ7DCjJKR2sATKaLW8VkPVR4L5",
  "key3": "4FUAhrPcF16VLZRhKTcgxdk3mtSsq44Bv74s2SGBvkHEd7WGkNpvKzGJBATgm7u2Asf7L5ypXJQQdoUQV3EC5fPV",
  "key4": "5sctoybr8S8bBqNpw9qVauM5LV87BbP19UAMMipcTcn8GQaoQ12UZhvzjbeiwoyEArJgx2FCgcnQnfEoYQdPwL8c",
  "key5": "Zg42bcQ6kLZyJHrd5VFarnpXewNhmYGhWZM5x3YT4h3VNZ2CetjKFNzi2bPnToN22Ld7dc4CsDVYSLTPEmJpuZg",
  "key6": "1PPaSYzr8p1stbyMVSHjRvjnLBF8E5WbNzBYZkzLki7L6Q66VnV8wwzXknRZJk18Ho1WbvM5zfT4nytSr98pnCY",
  "key7": "3nJgtH8KWz9kXTYyzjHFMsHFPUMh5mBuYmkrsTdYLvZiKuqVBdLZp1YVXxmC6CqrTXgKpExfU1SadpfvHqdTCV9J",
  "key8": "5MTzhjYhizPP8tK4kdCzXNrow552xfzKCbWMzgy8s5Errzc1yELvA95o23rYwvZxhXAcADVJQCPoFAKSbBUZqG6G",
  "key9": "44Byjp5mDqoHqN1UyAZ4L8iWReLdj8kkcWj4BP5dbrjPknd5zDYx7iQee24UEVwNXpuz2ySUvDMdMpaYHNNHP4jB",
  "key10": "2Tx46rf6qE58PFGPH17nw9g7UptRFt2RwxyKDWbGUBuEkeMdmfDReKHtyVTDJxVC9ozKMa5BAabtSSHwDkWdw1qx",
  "key11": "9cS8Ut6FQFTwFx5VQs1JnDRxtnTgQHiD7D7AGBs4DmB5AYLYZ2kAfDxhKeDzfWqpUNMS5na3evfUJ8QpHuCS9Hn",
  "key12": "5z3eCNi1B1J8uwz7VQesXSvE7kWZ6u4zQG5WgsNHRX1YQiziArcS4aHmDDVRcpxh9BTsCcFuAeV5cYVAjAJAeaz4",
  "key13": "3HZbEZwXzBnVN6cC3gszQE2yUU3J7QuMqNrD2ASMPq5mJCEsrejNXvZze1yrV5wNbFYEJGGyu4y66x7zva4hgQq7",
  "key14": "3h3tmaerj5ush9ohxCRdQsqErSHW7Cw727yMHDjSAwsCtKM98JQ7rwoUPWmzUch5AnTZmaZ4qwfczU9oq6yKYcnB",
  "key15": "fHVaLbdBowcbo39wYBMG8nY4nHLWWf8tbDLDL7fvNBvSV75ZSQLWH6BRTzPtuSJz5Cof1TixSc64EaArKQMEK6q",
  "key16": "4mzmJvwZRgBsZa5qRqsxnxmMxF2JR5fRK6yRGtpvBm228FjNfZ2GT1DHRsYxXSbD3oZguN3Fc7TBeHfwb7Fs7sGa",
  "key17": "4ruR8e1HYbJFRRtkZMooyutFLN5J1K3zST5HaX1q5HdmL1VFgzz4ULJKoPYkjjuoDoVxzeTKYVMsnjAN5CAreN2G",
  "key18": "5hKKsnDoJpDWPHxXYUmsT39MDtFrDXpP8N54p1KdVTHXjcCrqvxcUf8H3RVm5AGXw3enGK3aMnoUv1GZN9pe7TnJ",
  "key19": "3xgCY3DguYxCafhzH19pwKQ5Bvxs6NJaqZxAStwZFMBkhgt6YhC3GD3MLy3mtu7j86nKqitXLYpzrXCSX8JZtzE8",
  "key20": "3d7Edpy9UjqirxUFo6ZEg1UEkLKXaokfKCRCDpAgSbP4y3izyApzPVzyjYTFLeEWxZgZXxo9ow5ReBVGNcgiGbkz",
  "key21": "4qsV1NV9VB1zyXksbUxbQrxoLVJ2ueZMjysFHDnUKDgbcaievsqS9dfpyqziRHEBFvPB7KKrerNu7SoZMYyFFgsA",
  "key22": "4ycsRNGSa3LjFLaTrXdzMNAzMCRWqg4vSXboYwN2YdT3cxcKNHssUs5iwSweH5ZRXT5LDGXgd1hmsdCGdUKmNnWm",
  "key23": "59JfGor9TmUUjvuHwMLxHeFXsLQYG1FBMgheYeW7UrycETEqpGGpLpwjdyMsHPedVgTreUN1fvHAnp1mn7SkJTFQ",
  "key24": "r8Unma3bMk2a4osnZNS6pfjBSWjhCrRzGAjXiXtNMFP9HmPpoAegS6RPCzRWTUmjt3wbqRxmJVGgmvaUa24yc3u",
  "key25": "5XLjm87TnamzQKujeLJ95pbAdDcjtWD94iDumvo5KvajpjuTt4Yg48hPdo2aJC5UsrDzWrWJaZBBwy1CiUbLw5Za",
  "key26": "26dkX6kiwJWUNyC5ZbXHAmfafoVERbw43LqKMxGGtpx8MYwQ52Gor3cZamQQY4XiCjrLwAZDBuXXXor9DP9crnfF",
  "key27": "4WEttQKHx9QLwyYE6skCerxiz8KzP1FVVPiMP2asmxjhskpNgcMdbgQeaBn9vGJqCeCiSmWysmq2sCZej6aJeayG",
  "key28": "271UkWMtUMU2QBNdxoZ8ChzyxEFYURHSA9fXVkS1EJTTdVqZoUFXiqU5K7zEdinbxLeqvCS5pcLdtP8jqRyVcU1u",
  "key29": "2jS3BLSguMpPznFWwgSSzxHNeANedkGYtAfpmDoghoRV2RjJmXTyoipfQiQcTbjfncwxno8V2EJYXogobwHnaeb2",
  "key30": "4eVwaC8t3T8pg11aJkzYrDLJL6ZMdRjJizwPbkdH9yz1LFjcyT75ghQNnjG5frbbWeiUyPYWAtr6ueccQJc4MowQ",
  "key31": "599P7uE3mtHC5adhW1aicdA3KfqeVahVqr6TzJWqehVFBNgFvdRQspwYAKLvrfCv5ws3VJhd3qUVUwtKFPLuPwFe",
  "key32": "22wVFMSPDBhVy83B6P2nSGd4hdBwcuA4Jvc2S46Pq6MG1GwmLnDpL5JtRuDX2m9FKWGXurfcYAU71vXfSUarsSVM",
  "key33": "XwTp5rJoUtkgRXxx6yPqJ9FsfnHnwbeuxKLi7vFXVHMAkBSyQWXBvkpWrqzc7h8UCn1Hf1MXnBSVBM1LM8vcC8B",
  "key34": "5dHXFCHKnyxdSZ5sYN2LYB9g4tD9jKYjswzvji2HbVurWPBK4TszAk2uFBKivFK5mjVroeRvy1GNCVCYYV1rEfVd",
  "key35": "kapeSXBN6H5avhx91UTEHYkJM4EzUuCD7cGz6yDAjWEKj69x29Bik4Sj86PWbhoaAMGMimA426ikJ65f5YUGrVy",
  "key36": "1JU9URbh1bk5Vf5tmCQk2nvgcrhczvpWvg6iczRvHHqcbcqcMxwJhLCivHs3oMAPac9CZdCCBTWS1KR5RrtdYxA",
  "key37": "5oNNFwjA8GiUTBcXY7vEpMoJBmRfwCpnU5VRyS9YdieL7caQfixaAQWnihp9NxBUaP6LMBFXK932rZ2Ndm5uPHqi",
  "key38": "uAPfg2557xX78YNnGirRhRkUXpNjPiSf38GRfc1RNFJXiPobumbZoK7rEqaycWomaUDHm2F6WCX42rgewJR31GF",
  "key39": "2Wnke2uRCvscqmqQKvmZqxVNpPRsuHXYaykphSUk5vNNgnGjVVCNmbztSRcMk9eYnHWx2hDyHkfNG6oJRjECbb5J",
  "key40": "3e5KmTKVsZ585h339oJPZxjkSbsMQceiBSe4fnrTqSopphhj6ywjQA9avws5sJwjuQhQ9bmfXZZHG9mrwh7PNbS8",
  "key41": "AqzuYUiiohNxnoNVkErpZGT7FHxkyA7m3Vy7HCNu7QGijjr4BRc5mRhepv5hWZaGCUJRqR5zdMZk1UVyqbKKJb5",
  "key42": "5zKWKyTgk2zFNRQPbke28NzmNZUKBSpCv6jKjhWCKGeZfWCWskbUWhfvENYTgJzVouTbcGJ1icDN8hYrkScXNbR9",
  "key43": "3ejdZNTY29gVhMNN1b2dKKvy5NxF18rc6sbi54wg7SqZptdNx7B6TMrkrTBNN2bzDQhxxmdAfsKzKmMHpog2HnhJ"
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
