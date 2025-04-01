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
    "3mCdCNeXauWyHiPQ5Ln8LymG5JF2Xs3BL2TUckKufbYhKH66fRec2KsN7GL3ZG7KYwGSZDksoZbumeSL7CfvWVCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNEquSTc8jhf1gP6r4rkhBMys3haRvbdj7wMu125sw6RsMGGgsRNcY66h9SsWgDvpzNNfjBfLmbS5b1MEkuZBPj",
  "key1": "22j1WHxmeG8NR8quBuSPXM9wCHV5PjqMMZLoUj2kXus64WCUDqdwkMoeCmEGvQKKPJwme28GJWjcdvNhg5gMFE9f",
  "key2": "5iiAF1vg7BDDT97KCFKGoiSog9iZjhL4hXpFxAwfSjS2bf4cquZj1xujicHugVMyZfphDCQjKjTrTsNkidaUxseT",
  "key3": "3ijBb72gdfaEqg2x8F973EcUuWWV7ntQfRr9G7sKH4EGuFb889Q6kzJxNxBXzAevGvw1gtTeSkSR8AaUvJoyVJmj",
  "key4": "2sKyeMe2ZquHqnUhMKTB7FyjU5TBpTE7cPck5TPbwrGyMvajSHuEVaQkCBh4Dm2AntWTUmcFjZgPrFHPK7vEVsmu",
  "key5": "vWFZJ6u5erM3u8dfPx7Vx8vQDbZLSoL8M21c3ocWnyDjpew9dF5BbAvUWMEK4MFYmnocEgyaNTPy1DG8yqAMJwb",
  "key6": "3RibLp9wvEyaAX23BiSreAKdBGUmiD9LA8NE4nsyoy7CX5jCtNY8RUFjPMkYabAeWzZJbMzs35usuhGZTP8FmXiP",
  "key7": "4yMj1bzq7AcpfjN7n8MbEkLzEnyNmNzaKjrN9mPG78B24ET5NGEaBd7qZCkpGrZy2X9pZFmoDL2nSMaLQm5xxenf",
  "key8": "fpu96UmWzePqf3tG6VRHhkeAbtQz2XGJzovhkAqYVqCC1gJMndhTrRzXMG1Em3CKBw6oHuEFbnKdkRcoDKBUiUw",
  "key9": "31C8faqWKe31hzSUSeQQH3w5autPUBLjyXK6z6got1WWpaqHvxUShKAQnjztCgayR97JbabC9QKxfW3bKzRRwoX4",
  "key10": "48PSTETMBjRGTK5R6tuUirCSUeyUwKPHtVPTvDVKS3Uov8QoaiaYJYnwDw8jg8eCVMYevZ6zvZV5tNj7dwKexC7g",
  "key11": "4ifF9w8j9oZVrm4nqLJXFHAFUQ9AjafEEPbY3h4L2FBQ4kXhEJtkRHzW9ACbE8MuwLS2Lj7obobf39LiqPEdTaLt",
  "key12": "5DKg3gJ9CsXhFeo6cUDnY2q8EjxFMonVcy88upZEwpyinvsdrvsd5SDSxVAnB4qfAg3kVsUcWbWdy9HTp92HBsYW",
  "key13": "Z87qx9fMgQThgQYSrbXtwpyysUUpCWxVqQiy6SyU1wvfRqmda4AtwELqBkiHGW1KQBC1CyZ4sU56ri8dxqcscyT",
  "key14": "5K2JDpjtJm3KK2wPZiNXhdraJNfRPicmZ2hUviSZr18Lxp2pivi1FMTu96hW3cNc2pDcVKGuB3ewXnyF4c7BXNCt",
  "key15": "UQP1CqcxUX1NyNAUATZMqnM7iMJA25wHbQ9Y7yWPGpELELDJZXERohnHos2ZnHHiXEv3QePLghEb8vdRACxykse",
  "key16": "43GzQ8nuzqwFJsRupg1KGv92wJurn4AT75Wn1x83UjZibS7oZkzVNKykArbdybyZm4q15soEYsr6VSLMpZh93u6E",
  "key17": "3RwSv89EQhtTEgt5UUNctkL6DqZpXyQVZoB4k5jeQb6YBVzH5xm6k7z5GVzTZmvB4NKcwkVaAJzpe7K2WbW35agt",
  "key18": "3XN5L16gs2Vyi3vDFuj68sio7KaD5SbKNNFGCg35BLAfjLa4dKktxxnzV5gvWJRPZwDKGN775Gdwzq1FZGaCFtpE",
  "key19": "5oggRfnAqv9Q68zWAXxirLm6kznGa1b3pn4ngd8mCTtydQEo3KMcSKPGrZuTVrYZgJnUm5aWUNXC2UawDPuroTMr",
  "key20": "4r94VqogdccPp8WDAc5sWVXVyqBgNp8ncgP93ynUXhVekKHUDL9cqx5cST8DQrcihBpFFvApuxMwMBmVhMKTVw98",
  "key21": "58VoenGvzsuuLcbbrPCTpwKWrPs93B47onsqc6srQsxWYdA9jmuBA8R8xGve8gPteMXRirHJmP2kPd64mQnJvGPe",
  "key22": "3XAjaeUzSJzSkVfbc2nE5cZ1B9UZ3dQ716keHVzT1fZNC8JjT1L9fFQpDxziok4hvGBtVE9w4hdsnZhBTETtPByD",
  "key23": "2VVLgAEe16zdhn42BjeCSho5D9beQ27BVCBr8j3g8nYGPZwJLtmdFg4M3sjLnYqm1E83xQkTC3h2Gre6XoGzVH8Y",
  "key24": "2hFd2xJ1pGvScb4pnFQy3tZA28Tx1hnKKHEhkdk7n83v6hUcAdLCKBNvPVzbgLMyyFCAqiGVmKoB4mFMovDDYdr2",
  "key25": "33bMmMYgN3m9rjvCi6fEovKmBgxCCAVpS2DCComKkVWaAUZMfrWEwTVRjqBsZcimgLLog2CXNow19iGgg1VRvV9t",
  "key26": "53czeC8fsrKdga5EXYAiWmzsHZbQRQJMP363hgLcLaYtgJMPhao3aoopQuTByDBfLZLkfGMarynvqKtD2C8nAaWP",
  "key27": "5Mz89vhMviZ9dn4JLwPTNbRrM4VFnwPJ8fiQkMcDXATWhbFXvNvKZVZNvFGX4FK8HjhLH4mQToqvF1Uk7z5XNBBA",
  "key28": "2cRUWMw4eRvsgEQFAjQAyu8SGEnEYGNue2mHmK18EbSzzZEPX4XBKRn3wicpGWEBV5poV5119uqiCsp7VcnQiPeS",
  "key29": "5edNRvTQCDxGj2aYV74Q5hiHFrmp3MAaKLFx4kRDmMuvCLBWgT8EB5hhRMd9DRunhg6PfpDG67LgwEn2HnQphh3g",
  "key30": "5pWKSHZeMnmLo6YHqv6DLRmTVMdqLwQV7gzJM83FtirSJT5YAiMgADJ38cFs3MFjVwnitZuHrci6PnhgC9XBGzLW",
  "key31": "KS35ZsxFGbpxzEs4UgcvfBYWSk1ifzj2Yhf1FATHPQ6Xe9X46C4CvQ5rR4kBcwv5HjgwuYfKGJG9oTZbAXGhGxG",
  "key32": "2qctLpsfpr8ZCz3RgzGPQvBgx6cxeFrU9YkNNThz639DwzLzyjBwiZVc8ejCX4rTnFJVtTPeLDeCLtX16WdhPGC8",
  "key33": "2xQMcfqjnTJfUN5zU6RacD2BJcozkw25ZXDvg2nHR4PbHaog5ttN1KoLEX2VrjuHNo35Lt2e4jZ5sdNZq9szv5ZZ",
  "key34": "5QF1ucRah4yvUAbSVdXmWmChfbTrVyaoh9kWP1uWahfG8agBpUtcnWmYES2biPbF4Yne64JiwbxmjzKYib8XUv9m",
  "key35": "41V9FUyYDhfJ9X2T6CWuzP6Rh8EB4qgM4rxoP2SJDjvmLwNrNTwDzRbeTAAvr9acQWyBGn2VZpw3yj5SFBRoFt3d",
  "key36": "4rY4LTUDHbWAQRkDg8LATWjxjmsmtyPjcJ2sUbvHmGWgdoXyKENgNR47j5zZUiUkXaSowk1yoQfoQXiCzvC37swy",
  "key37": "2u24UFVBRgLLz5qWPHuzp81bbmMLADCw7SnxYdeVVUr7b7unYRvjHEUAuaZ6TNGJWHCMNH2eiRAfQnspRN7STath",
  "key38": "4MxuL16kG5PwpcixYsT3mLscmzotAkTtPJKeLDNY5D8Ssy7a72T5typT9qqKcxBAWZJBpS1C6YjKyp25Sf9X6BvL",
  "key39": "5YCtQi6qFMQ6xMQakqTiUmwCsCpqM1QSdUu6T5NFc84KwuV5TsPWTEDbFLuxZZVvAR568iJaCqX9o6ZKCBpE1Sbt",
  "key40": "5PDj3vAyuuKfvAiUTdafhFULLWRUUcYayKEMEbRea1LkamEJ7z3pxo8asbMwdRJfm1yBdmDHA9DfD8sQv6E8voDz",
  "key41": "51vqNTFY33kRVZ5oLCaYuGMwBPffbx69u1SfWrEzFTcCWcTaYYpxiym1EiwURvcGhzgc1nCELeJks1w8dStxT9nn",
  "key42": "2kRt6YogGdFJBD2CqGS9z33CzYGZg5shA1ScedZrRNzgvKwJ84Qi4ZjPWZoGM1fG5KakiW8e7vmhEEuhFi2eQq2Z",
  "key43": "55DiFicsFhR5GKGLFyr1DMJezQhm2TKKyqq2bMY16qkULij9UpjLXjbJG4Us62kD1Yz8QN5mLxvd8TFCRk2peom4"
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
