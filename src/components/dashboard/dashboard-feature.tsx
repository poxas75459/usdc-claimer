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
    "4ePfbdB4eA8RyERv6dqPoq7ToCnnhDinhg5ogp1JnuBrBKL3EJFLvjnxCRnwvwMgsXsyT5Sx15oTFbDMb3mcxmMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbSeTN9LUYUVqTmkqrVJVrcdDYefcgKfF6QrG4qmRwDN5D2Yhj9WpYhHoZGJqR7cEtAYC3VYhdFcFvNxgiGK4j4",
  "key1": "burKPvqZu6UTq1HLDMy1eR26pKUfkdRSmQmHG8q9Y6X481BTiXseh3VkV66dJHorc4WGch4uLFafeKteJHcMfjX",
  "key2": "4QcDXLt71SwMKkveJQprYcboue8fXZJoAEtcSYvr6AAUpZYWzFf8qkB5HawMhwDdVnspH2xaxHetAWdzHWL6r5ye",
  "key3": "2qa9k2L4eCDefCkkr7sxcvjSLVP6snTETbHAonSNzxURpohmmvbDKbeq1Wn3Ro8traj7UMJTQifzrgHqHZSuqJLC",
  "key4": "5STVxQixHqjAU4zrygrtXB6j89d3pVSBnzYZmaayecofoimJ2q9F9r51At9KS67pV382vgYxvmb4aLL6ZvxN1cAQ",
  "key5": "3Nhdth6BSd5cQHRva2DMj1cBcprYSBq6Lqn4j1y6rtADPo64dP2itJoa573o1pC9n1SBrcNWzAWCbs31VZGNKKPr",
  "key6": "5uWe5qkcHz2Ua6CjYqUUQ5Xbz8dHMCaLC5WFpiWR9Hspqmz4nqdP16GuThT5ZkPNoJ8SWbXcHkAu4Utvjqoo1Pgt",
  "key7": "3oKXthhEsr4roqgGyKajnVpZG9a3uLJ9qXXG8cW9WMTTuimnvfhHeNGPyZaXB8frWJrt3ckWf6V3qJVBGijtEJ9z",
  "key8": "4DrXcoZZnX1Ujoz3wTYpeHmkSSPQHkPve7ccgPXcvh1M4smYrepCptFtHPpz7tgkGS9SQm7WMdtuVghvhUJ61RGE",
  "key9": "58xWdUh5iCDKZGUpoH8grrrLVdVizkqnFArJ2vhFPsa9edFHsaKNErKacQ9WMbMaAkkPmS34NQ1s8ReKXV1KSd5Z",
  "key10": "3LH8JHhWBt3uc5rxGLXGmPTkZALt5PXbkhXq6BTrBc2AiGqzYBu1sxZHmuVLcHK4BPz5s3aFStAgAX3MhpZ5Ef83",
  "key11": "3L9yxgudvmirn2iURiAsZXtTr9D7jBDa99GafGrNhA9vCoGmS3HAhEjJeAVuCBh16f5VGSs6bEUXCW6KimMDut2v",
  "key12": "36aYjEwLfLbs4NtPRVN1Dhfc4PdLPvBNnRpH7g2H4Szf8csLpeWWpqimBNWYw8kFcXHLGWVbRvyKRAuoz49KTBTK",
  "key13": "Z6QVZ3Bzfs9AgRkXDb1kKuh3H3ZNpQViB1hWWfCGtUGpYHduxwCvUrcfCq2fETTeERBh9gBdoZ59mvRx73rrgzH",
  "key14": "4rezMAuV7Y5yrfy9526ux6uCH5ctfFQXM1pB3nRdc4k8a5kaVznFRu6TAwSKzovT8br1Vjx3qF3DZTwjgkrvTDdb",
  "key15": "bEF6X3QUMwhNXedeLv1EBreEGNjLSiP7MS3S6hxGucSWdrp8AkKMvAxNskyi1r6ZNQESvmRze62W3SzUDfmAZZP",
  "key16": "2r5gbStsgDdqqUUG6eNn6k4B9o66vj55DyA837K7ziKdVPBkU19RHdnBrpCyZehQX5SKgZ8Cvu5A55DqCf2LuMdQ",
  "key17": "VZH6RYCVWUWnQohhGM6tN7t3y4oTNvPQd1UXaNVbywnYjiKU3Fwuw7Ab58cVN9N6p6YGY2UtyCNzGqPZhnsapiu",
  "key18": "48krCRjDe9sa55hBwbkfHdseSUNRMNpQFuSBmw8yGus3QyKojvECKGatn7SfB32bK1zoVh7XsT6UomxZmkXmNosr",
  "key19": "2apTadUWhyZTGHTRPrx8ECX857ZiEXrEeeP6EiHQb1oDRw5L5NknGAaT2StKcxZ3vzwBM4ZaMqTKBt1p45TwpSyy",
  "key20": "nEi27cs8AVhN31PCNHpc6HpXJ8zfF8E4sk3wjCUaj8D7d4JGZrE1DEvcSGkr7YNFyUWjZdz7f6vBzAPybYY8Cww",
  "key21": "5kF1H6oGnKZqAqLTsoPZqsbthU3QCe9hKM1YpTrVfsNRRhfyHvoA8xcicVxuNu2yQXPyNYCcqoS3fJ9xrLWGQv79",
  "key22": "2M4xGs3msgztsPT2GGcuaaQwpwfJQkBM2Sr5gbsVNvsZCLuprAgmET2bmPYdrYHVCjgUx56r89ZAkz9yUszDPuRV",
  "key23": "63Rvu5xH96mH3bhbApensrXptGP2GmmXNbXPi9BNWaoasRzdq8ajQJMipjVKRGE5SzvD5ChgcvYTRpYEDTr858Xi",
  "key24": "3tyP9pqBHhH6bh1DpwVw6FhE6kEDKzYr4D2yT7utfsN7xhNy4JSVxoM8KpAJbwdSd7hbhE5ZE4Hd26adAWwXSfeY",
  "key25": "26rtGpwPXziFZKzoWrrd8ZQ39jRGPH4owy7dSU7vgmQcBxk38LMWkAgm1knjWP46pzXMVf1z6vJaTadRoBjZ6E3u",
  "key26": "2wokjAjTxjbCotYXvM1NdyyySHxEb7RAaNWDgjo7zaqovrBXMGyTne4p1Gt8yiSSE7dnZcmrf6vhn1yMNTAjUwiw",
  "key27": "3W3ucUoPuBSGhepTqCWUKjH8bfZVA1waWftaqoughyKbAzKJPk7RBe5UqP4i9Yk9skbTrqnVnncQGnZ6nCQUS9eb",
  "key28": "qRAHS4Vf8wqZxu2RwqTCjNK8oGHL95CVQ49Vi8LBABNBC3dydVR7p2hfL4hVThr8P8xxjQwbF66XRAPAv1r16Cz",
  "key29": "3bnK3o6JyPnVKGB1jsRqGReWnUBdziCGEEEXynDsBTvcthWDUwfDrV8WBSMsR56TUxMrDzLAkAXFAr1RRTQUsQrN",
  "key30": "121gK5HRAdCj2NxnptA6FPgKW5fcwRBK2pjA7ULBiYCyQkaamwZWTGDFcUGzGnY6GtRqirR4oP9ZRPRi9Uhu5Zs2",
  "key31": "3PBHuApyRvaDo38s5PE9n2gjohHVDXLrwSZ8ckyruhM5bVgCrj91TeLgCDCzxWiR3vWzx28jCfK3WPx8GLC9T5Yk",
  "key32": "67Keke9jpSqDYR5pm2QqT3etYTudnj8doBZweT9P36bfssiKD7Mu4bTnPZ3xU9WmhzYBLU2s6X2qbBHpJpPvf9CG",
  "key33": "25bs1Hzfpgkibkcr2W4rY3iPY2ZbC44VYGSStnEiP8hJ5DrXjzGrzPBWN1raxvnxfXPVs5HBAQichGVpx8QJ7Agk",
  "key34": "33PqJ9K9pZ2a6dkGMbEmVja9teFWfVuto4EWwEfLxHCcfNNH2tntzQNyW8h7T8PdznUNm3N1srRRL639KBxUNyD",
  "key35": "5DMAsZVEvfwbwZnPHrxvhPZi2pjU1AJj56bJFdww7yAu8QuDdc7XgMUWh76BDqf4d3uk4tYqHs2Asqrryyoi9YgG",
  "key36": "33K9gCSiqgFaAW8GSUyzVJ5tdEXufiZV31Qxnyr9PCuVKWZTH5rietJD5cFJD5EEX9Jj41f3C6stcCGV8U1tD6zQ",
  "key37": "avW92wVCbkbXM11xatta4YMX8myyhXYUHwbDNxkEhFW4qbT7AMEVt53d8Gh51ErH3QRL8DR6hsZBqDT18oYc6eC"
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
