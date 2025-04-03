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
    "kFxsRfGEUUkVuMpLXBLbbt7RGNNQg17dLyBBj9kLjmt5iEyzb84kBkRhxdXDktyT7x2n92P4L2JbTPXS8Q17vik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvsugiPDANAgYGmXfTHWcKsLxJD5gnaWnAzZaAA3bv97yd8ZAs8Nv6sb19D9msutF6U2WwfsGCyrDPsrzQ9roy6",
  "key1": "4WrEqFMerqMVcz2tY3c7KgaMHFnwRwHA84FG6pDDUDWUE8pG9kxvPxgH4iz7rvjM4kLwpJz9o3uyRmxakzdTqarq",
  "key2": "5Zb4w4gu9SYQHeWcRvi61pqW4YyYjH6DRSBJR34prNDSReW35TiA43pScA1x2t5F6dCCTLjXhDjZ6jTBkb85YVjp",
  "key3": "42m1VUXd8C9SBuWZUNvXdxwWZ4iyNeVmSfXRWbnwC5DDoirUn3H5atrN2uJMazfbgWn7joAS88qD6ss2oFeF2aoF",
  "key4": "3LDvPyJ2pZDfYj7DsMj55dkSPCxNyjrsx4eam3CBwqkNtENedyGxD2wnozjLD92fWcMRFAvGn5ySz8UX76djTMEh",
  "key5": "q8oEnn2bPSyyb1qBSitanq7k9LfnV4zUUWMGG417gKFWyCupuBQjcfDGSpL9JZeNNTAzt4vWnA6C5YwuzNwADtw",
  "key6": "2nQVnS2cqP8pap87VKCm59fvPtaxXuWGhPYt1u99gShvfRFbLs3YcS2fdzFsMHmYbg7wa4kXidkDVPZhyhVGV3Vy",
  "key7": "2aHXpZ8o8xswdR7TXWPkiqhmhTHuDgfPJAL3Ug7hSQMwSLLJYSSRkQrQeMLSz87AAyKRoFSkUXUp6MKM68nMQ4Vw",
  "key8": "2t3QGAoD5sVakCbNWDofWJvHPwiKGZsRZ71MFG2Mv5kyZ6T4JVvfoV3W2FF4nEZiBbPD9U4CwWU7LB5q9aMsp97i",
  "key9": "2wCuxDCse8m5wbmtTMpugpEuPpkRZ8JQ59tD3THAtf8Kq462XqrreexK5nYXLmsaQ6BrirzB2KTSY68Ar7KDSqqG",
  "key10": "23D3bhRKKvNbTbBWmHnmN7SMF2bveFL4rWk9GrvL4QoHqzjwR31XFkpKLamc3rCoXZYbSuYv3PP68AydU9Ss4fee",
  "key11": "4RVqWbvaVg5hzFQPnTYyXK2ZUzY3D8vaHK5SJbEyCiovVeBqwsRntkAqZikuYaUSHEnA5RhzePov5CuupAf29RKv",
  "key12": "3YZ8e3TrjRNRM1rUbPkMCDYhjH2rtMNqS43gpzP91K6mpNdZtkEu9udP7GqaLscLmauWSt4iyQ21nJdEGCweJRft",
  "key13": "3j9NSoGVATigN87qyzUDpnkPiE72iSZRwB6ErefcQrS7twt526nZkWsptGbScrdZKWFgzjFXTESKanGuUkUJtE1P",
  "key14": "4zwyZNZMXDDXc7iqnWKfwJLn9uX3yYT4Boqj5cxXdgd3FoUKhEShJjrstcdfWtXjSsC19buwr9wvdm1C1LoCeY38",
  "key15": "4FqUxr3hRQ8tbRQSygVyyxaekNx5M4LJCCwL1kP12e72QgzUgCXWn8YpvNvjRgEpNNmGp6Sia4DDGH5wwyffdYN9",
  "key16": "5fAH8fzYECUQPgrfx713PoyCXdF8Pysnka48MZGyfjJTmiU5QcTNFsHQCreB7LSSAwEvx75BGLndR2GsFKGLigxY",
  "key17": "3yAe66EccPUgvmqpRxj5NwZFMLZENSUDtcD4cw2hAXYbXjQEbgRPiBQcj8QoYUquvpFaFrvHxZ6SsCyKrZLggcZV",
  "key18": "5zYyNryZztuxddTNtvC1N9mvW9YS4mesPBYXkrGmmQGVPzvmK3d6UEe8Ppe92JEaZpkemN7cNQurLqjnpVpiygBX",
  "key19": "5e1s1nuFexX7K7UjPZcoMV3qKbSuWPffrS967PY4rEgGrXPrWJhvCE1HLkNfKd39bA3wxXCWSj9c1zUCbyiEmFKi",
  "key20": "2pNGyzX4bqm2sJGnEdGW7nAGLaTnyDPYJa68xVhTzZpptathUoGrsFReve2RjXPjPPn1cJ9rHC8pgN3J4dARssow",
  "key21": "2ne7UHWcULaVRMQKnu1p8DJ7emY95L6o6JYhhkiVGH5HTf9BwH2qEGNeGR8FQwrHHSDzD2SXrqi1P1L78ArZ37RR",
  "key22": "4isrLQEipruHQn1VHQmZm78HLp4Q19ya7bNDAhmZMwruAMCMRtchEWWzPTyXWWkq3B44Ztzqb7yD4zmH79XhJjfd",
  "key23": "4sNCuAq41C9MhX4ug995ePMXNyK49MjShQU6RgA3AZo5ughbEmJ2rY1cwC6AExMwXNYxChDGiZFT6DU6PRtwGXQ2",
  "key24": "3nayhvUCUxoyKRy7uybB3UtQvvUbaMZ1KmGGkuY4Hd9MzpHN7EGXENJAvXzPAcGrKhgfvDhUTPa8BaBgpK6346gh",
  "key25": "2yy2MzPXyR3nMXuZm1f2BnoDNBLU7wFTFvKusvrqmv7jB5Wq63FGcYc4jEaTC5WQqQjNtL6Uge9S38ybJ71wNtyv",
  "key26": "3FZ3t4Wpbmuse2Gf83pHCVWgoauDeDZ7Zgnz3JsjJcan3B3uNzhidb3tvoXgYLh3eiZ9mBLkQqSmY5qxXPPyL89S",
  "key27": "2iBnwx6L4DNFWbRfuEDeDYRkvnsjLn9fY9bkBQbpgXutB5h8CyTyF5wfgBf6DaCdLNroDNnbt9a1FrmQ9mp1x28f",
  "key28": "61DF5TZEFYdncm51uWjm5feLaBJFe4rVBk6BiimMcNHsAySG3G21XMdfZUCkF3t2Mf21E2hBEZcQ2yKrpsf5xJon",
  "key29": "EWWjtsgeQZgWLQabSrQhecr3y4xuBbc7tRAYodEU7xYj1HzJHNrh8AjG59ADV1soSAyS4LTiKiVdzZShLvUSQDg",
  "key30": "3C1hDtPwU3eqYBqEHStbefQb58GYr7wU6dTxgaSi2be8DLTZgY4DoydRhdfYVt76xYkUtXAfGQixbY9n4bQzDDsj",
  "key31": "5zghBEVMJkzK2LZh7ZqUs1UPc26R8Ju3YvYGCB5W2jpx7ZFrnjqyKDtWdNf26PtpwpFjDojjWaVkEEqynzUFEhHm",
  "key32": "57LHPePYyMLLde3nKjexE58e6DyugjQfjFBNm15QBxNHa8vXWrpo5ZSXjz4wzwSArfyY2czS2bCcxEUHhhmxz1n",
  "key33": "jCarXixgtoiroTfQ8uADS8vVJxxkvQUfoMLhomjm1a82VnkqniEoqNDYgaySg1kSBVwFP81KrAMtpH8N7DjsUDK",
  "key34": "5A41eAmmdygW8fe3ujdghaFV6YMtVkkYhVwv7gLFsiNT1empDiykDwEZRUaR3K61h2e9WxwWF5CvNW5Jqf4STzzz",
  "key35": "644GxX1UtgdBHabi85R3avsL7HNmwhT2wGdjwj7TGBVeMt48EbVkhtSqeukWngZr3iP4rdM7kN15mDe91XpC8AxX",
  "key36": "3TaG6yDA7VnWQ5kw89yk9R7Egq49fv1k9DiMbkmPHNDRXNPDu1okDDYavwWUvXUcpk64ZyDK94d319mnPAKpLczG",
  "key37": "2SGXn6B9HzbgnFri8guP5HYxWnTSGZPr9hTcpUE9yiUFqRW9oTGARBdSHUquStxpZp1xHnZMeoo1ZGt9BpfpUd9Q",
  "key38": "3Ck95nDyzURHENuUFHioBBUY4WRGWeSz3PSbXBvCoNzfpUvcWTuLU7PbWdMHWKoRnuC8B2FDc6fCDQsXYLNGwCoA",
  "key39": "3rDENRxS4MUJMrnNbCpc5ZVPYnzZf1yKeHMDL1M6EgnGukxAL8LuaBHx9NGbrMhGBtJ81ARk1XqJnKoSRyH2QRmG",
  "key40": "22pzJBU6r8G63GLnnTJAvc9Rd6gvdfFnNC4Z1ZoQY3FqFgZe2iJX6Qf5SkhxKqSbHEdCtHP1UqHB95dXuVZ4jote",
  "key41": "2u8pAKXosanfFhP5ZaB6H9iHQnPrAHFYhULXNncSHJCgyJuwHYhjno6FZmKDd2hXmSuMHnMLpGoQsii9KbLdRvuC",
  "key42": "2XeNLpLArJ3pQyfmxiuiC1DxDiqk5eUGVHq7HptcQ96bZD1J1MCasN89KUu2Kc5u9DARWa7WjxUKkfekpLMNSt6G",
  "key43": "376tDS4YCgPxhEk2j4oK3VhAcyPi8cg5MwtthFDd63qgnEaB3aTshonHMADcANg7hTTTMbC6zdtwYFvwQhWMQuWp",
  "key44": "41CxXQVWVqihjsT7rkXAhwhMXtQDTMoJbsHiBkrrjkxnossNPv5wckuWFqwdNZRSaL7AFhf3PanVYRZc13viuQ9e",
  "key45": "5NSS6hj4oie6nEorHwcSckqwqUsLjasMMMxLEahKDBmbZxrushTJtXxRvXBkfqoGXjeFvzY236fCTUCuwKUpxZ39"
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
