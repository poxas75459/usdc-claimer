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
    "3RuxYfNYeToP5GvnrXfoysgzyK5oFnQt84QM7TC72uJNAhFjebr9bdEmdtoDm87D831HjYuwMEepPqBh7mTwqQ5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yj1typSFM1BRURDfnUbV81V2khATFD2mPU1zXC5TcZoaXtk4HfKTxWB6V21o33PGeYayjzQDYGhLj61ZjNfM4fz",
  "key1": "2sf3xVLVzacEL7vuehJKgqYC3osTtNY79jyfh4As1odkDa5e85Y18f4qymgmJEXwPDKJktdzzVhSgugGYfDhNRbJ",
  "key2": "3gR1Jwe99YPH61hdgrqi8DK4aFCiYe5LzXJJ62SJBVXhzS4v2rk5KFN3GrU3x6BGELn29hCvN46YvvjxgVxiMTjz",
  "key3": "3NCQxjFL1q1eYgvEyX3EmWptwDhiRF2u6uW93g7YkMJpCRHVV1S4CU5NF9X35fBSyfdT6LKkz9Ef9uMhVWgAEaUH",
  "key4": "5uo9YxoWzdTaWAJ7L2dL3bjX1K7q1Mgc8D2LzG2312UX4d3E5k2Bteg5pYfCqKTR21ZuqAgkYXoreajMNBnFH33X",
  "key5": "4wKETSWfsnFQ9wceDdKCpjYLaEwtkC1eEkVUGB3ryoea3F6iQcwS84kiYJqyk4QbptkXBVtsoJ6wzYHCGwKyTNG3",
  "key6": "5zWmA7H2GEogEux1YmocNX1qpo8PDxJNd3Jj1jcWX21p1ba9ZgDsBhEULrPQ3EqzDRAtutpJoK2YSvWMEHwEuEQS",
  "key7": "65CeawzcQ577gkC3npnLb1i5wYKNA39Xx1gYEMv77NC62YhC34mPYYt1spyKZNDVHvwpcdkky4LebWWx4sTPbZ3U",
  "key8": "48NLPZizMncN9pRh1DvhLF1QWAidAT31y7aTAwCTuyT2MytU3yKBRaDEgQbatNFBHb4dnnqEXcxXishuPKXcwBGG",
  "key9": "5ZwjA6y2bA2JQMFaBuSsvJsAFEnhiP212vMe7moyEegrjSRbsc3PY2RK8YK9VCkQRz5Hq9EcpJptbGjveYSmwb62",
  "key10": "57SkJumN8VvymQo1C6GU5G8daNaStB4DrgbQu4fP8gsqW58AdXWJ9QDKjmATtmriDCgrwMReMdHsPo1EVT5i4Qmt",
  "key11": "4Gq47iuKh2xxQzNXgnB4A3Dy7fzgSW6ANBX2SMpXufBxoxHcP2MwPynJqRPXXaENSw3sasPtRv81zyBvJzkCKAUw",
  "key12": "2DGCRpF64riANAQXwrSJvUZGAk6JadE5JAjL1HBEgMFtVTzkah9cp53GWLzkaairrArY289vKFLULbxDBdNhn8t4",
  "key13": "3DMMbQZL6dwsU5S7cqtZzCpPYpSCzp5h83NDDgrzurzEqSST5ViHShQwx2EH1YRvgum3p4rJMAmGQS6EK77AbWbp",
  "key14": "4Fu6s9AAWT2ycTFx9PwfgdyCrqkY2db3LS66WvzLK2DHtywZYRf821TmmKngsDwXycvHUoXCCQUHy7AGEvi5hpka",
  "key15": "4T8avPYoAFn4NJttoKnbjQyWssonggYLfa2LZnKj1TASP2KLVi7TN2cxJkHXsr1KZNfBvyQfLiAJobosBsi5zrp7",
  "key16": "2LUefvDzN6Zi2MzrLrhvKUJwsv7NWvEg8esbecVkCjundthTB9L3akwVQwTsVCq2YD9x7sj6GsqXPuEP2LynzNSv",
  "key17": "2aZAZbsUjjYFtkKJpNKQxzGc6dPEjibYy7jmoMG64VL1NJgPFuH8bqXdQo2BzSwHG2uZj9TVV8K11p54qguayAhp",
  "key18": "7CacgayQqeqAPZG2YJ6fibZuxB75uVZNRzniLdjCymJADF87tfVQGpG4RJp2HvTGnrvzRf7xUYMkCjavGRvDWZX",
  "key19": "5pouHcy1Cj3ZHjvmfkCd5VtsseEzVX8MzbjE4NxXyq4PeKjFwzCwCFifun2vLhMDDSErmZEhzQVPUcbgFEq1jyE6",
  "key20": "xrrpo2xPyrzRy3RgiE4KsiczTK9iRnGM7Gbj1BaKiYMMTERLUQ9SGLYvNdjb6mrTwHs5BjR5LKSxCjz7PBnyaTC",
  "key21": "3mFSbUstyTn5bMPLXeK91BicHaYH4tRoyZPX8mhCtbB5eQkDKXKn9vJcGGjLh42pqhUNLgsz7XboGntKD4vVyTBN",
  "key22": "2Xc7kiobNcx2E7JFuZVLpmnwFmDkQFQxwbvFWxrg7FeFxCFSP6wT5jzyfBggcSjcUbDc9mCngXmgU4TzPTSkwVZK",
  "key23": "3YMkZ3XubW5xZYmSdzaTAvVhMtpaZsKgZRS2Z8MNvaSH7XrdAVXx9Xurmy2fTQgiFDDgHREz8PBWSr86iYvkdgyh",
  "key24": "46PuAnJ786WLrVEivzuNFLy8AU7ATwEEhjyQJALmHTRytxV6VGvihGJmTzJpw48hsRaqMj3NLhUEhSEH4PDWVv53",
  "key25": "2K9mAW2ERcAYf4huqdHW5EEJFWh9XRfjWbhcPURcRwPLnxAGVRBF3Y5CYx3ZTBr1fMkVSR1Sjy8s4Ma8XrauSWig",
  "key26": "Jhhks8b1tj5ETN9xLbrKMgamECzJntLfvrr8ewSjn1VAgBC4u5fqkUyFCPFhtkFv8J7anUSVi6HyvjsssevSc4z",
  "key27": "5suE1DSqUxmEBquDEDWJY6tnAzm7QhPSvAWfWW5gR2ZVZHdxjkJjqeKKGHrjWYYSBgkPvK3TimqpneJruZQcvTP3",
  "key28": "34TYbzwS5FNx6EVSPFhvgxCdAsAGKckzrCbwHCRykoCmPBBGUxKvLgyixDixq1vhAAv5SY9VH2e4fwsmey76NwJF",
  "key29": "3eFgsadvsKoJJWvDtpigNMwmcTGcRZtNtuD8ykf6MWcpVbzCqQ2abzvCmRduNxs1hozN6WeeuaH4QLharamsKPjn",
  "key30": "4q1hbZH1GymMY33dN6vU7DXW8jC9KCH8D37pvwKzqtnZcdRGUowAnwAc7HwejeKUSyicfgiJtpU9FfxP53JfQap7",
  "key31": "4dMJWuJLp9FE4GLUWJMBbkx2BqwUPe23Z51LpmAWaipXGdpAxABMRGueMKV3D8u75X2AtiJxLAJ1mqBTEEiahXWB",
  "key32": "3cnxDXoU38x2onpkDYrm45itkRM2PcxSxSqpC2Ygw7RaDHekjNQTycX9EAWcPsPGXncacaLQDyLAFGYxuJqxUWde",
  "key33": "hUVTwuoHVtPHox3Gyh3je58xsM77K6y2uieuujNLaVBZ8DC8iTKdJuqTmLH3x182NKgyZfxfYPW38893TNJ6nBQ"
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
