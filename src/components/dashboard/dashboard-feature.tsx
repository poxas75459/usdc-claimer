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
    "4G47E2M6RDjVP9HKPkvoVS114DrVx5yDPtZXLvNs3NCoUYceLBhT6VrMdtpEAk9AVvsaL8PKbYvGEzu3ghtXwsqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zajQpuBBfRSYechqcmh5bR6utUqnkhboHxanXe2P7QKbz5sv2PLJQ8gd2TsS1RWRHmg1b2V9oUBAqP57c8LbWre",
  "key1": "5xk6Kt4Ruj27BD4bSAxFhag6q2TRtLHtJEtA3MfE4Vydvnr1iUC7LMeJgCg6tckwsPbWGWSGHuiGucwLJVuC2vLq",
  "key2": "4SdqMMe6K2KCKRvgXuqvRnzivhHsvJgJvpWTqS5AhJ9uq2R2okxdBJgYxMKUj6t2jCdSxmNpR2AiigFybAYNkPC3",
  "key3": "36irnYt62Vvd7TjiF9y2RFLLiXB9LPS3H3r86jszor9F8JZ7wtFaJDs4UcyDVfehGYkXq9PFRZ8YHEAwSE6PD57j",
  "key4": "NBAa31okypiPiLcFDmUbe5xSf5p7BTRQUkAXYtDmvqi42hPYsdYUt6AbsKhpk9VbenhhNjc7N57aTn5tv9eKTnB",
  "key5": "2PjsaeioaQ23v2JVytp3M8JmvyKJfbWTsDZQR7rUbqeXMMZbXjaj6K6r1ZjvTCq7jifUQR5d5QPStURo4w9VRce8",
  "key6": "ky8mkrK8Ws9mJoBbrSkGjyZN1iRaNvHxSkLsAYxvDrsuXVYVNEVN17mcU2Jn7ujax4RAoBv6ozCWwccZW2ztGbt",
  "key7": "3e11oPhWF6gDWCr5b1b9ptwXzvfZY3bz5kzr18GfxkDYgxc9JvWMr2cReqZ5CkoAFoqZVTnaF4U2mbKf3QcbdvsG",
  "key8": "2bSvfr1JDXzC5GLpoK9SWcXnyLZyG1iCZ6dxWNnrNBCo31NL9j97eLix2X5eUqJB4LJUjt8DM98QPhvszpMYdT56",
  "key9": "3UTwxVd8CucA7GG375wTgtwzVmcmCR2YGxG87VvjK8geweCWVwxgDvt8SyH5d5r47krTzM4xJM56tjkzhJSpbCq1",
  "key10": "2QzyUEKQxDxSSvEmKMLo3uxMu2Et6m3awsKfHWzgVVszrFhDidZKNZCPMzu3cQ8G9MhfeF7GPAFnKFAEZNFtLcCK",
  "key11": "5jpyGLBH5uNtHPDWQRqK9VeVtwTKgMMknPTAJsj2nDW2QQkLJy5WgxFstZHpnCwvnGDXkXDN85nzAjtxfUgdCjUP",
  "key12": "4tP8cxir1fcepjkBYYNrfUsV6dVaJGCTnq5iqqXm2u8kPK9fKvKvouhnPy79N8qPEti8SnLAJTa4BURXH1r3CTdM",
  "key13": "2b3ezYPB2hTJB98xqGCesSB3tecPP1VnGRJCPC2bxsFSGxpWnM9Go1DihCEpo8pbtNWNHcZF2Xxvj9xSB6EsjxEG",
  "key14": "4JfA8xNEGKMxdt2Fh7Z7s7Na8PTZf1WmeMMzJQ6tcxGBbfEpGsTm6FuhwLrRKFjUcWm1c9GPetY4ryNN1X19Rx9L",
  "key15": "2cv9RRcvxQuCmQ7Xcx2YB7RBxaNutzrKBSLSdYWdR4jRvLGCKSQRmFFNhZt2Rvbb9ZD88vNrgubhgwiGQz8g2ozS",
  "key16": "3wfc8r3QEMVML9rWsSpZS8LMHrAc4t7gSbBcTWvi7E9JrszTjaszMYKBhss1qp3uvoyany6oB4gFctUWKQiSwgTm",
  "key17": "4JGUsMCCMJT94639z5qdCcTmC2huAY14Q6Po8WnssDvUWHxa26KdSEtaA2YzJuNSaewf76QVgu47jipJrxoSRr8J",
  "key18": "2AjrkkhxruQM9PSxfQPbmcLrLteQDER3KE3F1YJjVYsKNCyLxFFQawRjJNSUTPVsdwriejuT54DgR4b4ixzKr2Hq",
  "key19": "5ghzHkxbnBxbR18Y59eXqDkFTWG9J3AMXtpBLsM2LVR3eTsKxNa2DzyTmEUUsoS9XvPCUGa5HnNwa9XUgjkuLqsT",
  "key20": "37mM4RjP8sfsaqFsvaogEBcyRn1oXmNK93rBxfX5E5CpSEE6DSt8gmAcvFnYNhq26yimDCCJVRxDe4xhR8CQv1iW",
  "key21": "5E4iH12uqknBoxnF8ypWpppVizWm3HUVW7CTtzWGj3XXVLVBY2YbLL7LhqCFyHLgJjQydt8FYhCBnnKdMPtfin6",
  "key22": "2B31TpUYS8ZyAQ5m7TUtbyFnbZUsdExRL7ZovhWPAYQ7mG81L2adJ8bVEZtreNjht1kxzftj4Q7J9rhPobuBHsv",
  "key23": "5Vaic8eknowv26XWooMvKXaYRfzJbh4hUVS4C2eabHYaqmKc1fJbhRtstfdMSJwk6wFNfDHDuUkoTHwix5tEbnzW",
  "key24": "58aoXG2eb7bprQGrRX6tQG8CiAJhSVdnJCrBM25efNR3RhYGX2GpXCvWVHbExVdXPRH3eM7jwojwMGWdHafHdgrK",
  "key25": "3DK2a59jggNXBtVBjCPuAp5H9X96ER7Ai9TBcnyQJKdKqKYCCJkvZPWxyGGcRri5WiUWhEm2ZiJZ73YjiR4KTcFb",
  "key26": "3RvDLT8Y12BrQYTn24GbbBjsyJtKyDU9Es2ZMxKKhL3kK91KWCRXUmm7JmsVFc6wqAHqMcw2oX7xqLoos3bzKGMj",
  "key27": "238umw8nBxypVVwheWaWWNkEforUqYhvqi3tF9XP5npYtV3wHdf3amzGBGvc2xLEGX9ZCXgSerBC6e62VWvdavCN",
  "key28": "TBZKcVrKQhnqFZujEX4Q31pMe2xAtVfyhupbqWGPxFS3WL2tYNv1ad4xDSEyjWVkqgSCwRpkM8h5dfgQcjbRySh",
  "key29": "4k7kfXZCSEszSQiD3bWkkKYJVJcWSTZzebNbvwWxTU6zXhn7Zteyu8YN8DwxXx6d8AsRjQbUBhRHFvHx7554XziT",
  "key30": "xn95TYn2rsoSey7Zv8NjDVRwS9Qb7WZAbpGBUmJKCSvXArKSYujoBWkLzo1fyjZgHymEoyou6BRt5maGvmHozJz",
  "key31": "yEg9djxwnoroZeZ6bPoDRFB81GFwFYZyyRjkP3tVeR3syoqjnRsHF38fb6MrSZDMhMp2ZUFNwnJLD7bNoHoKock",
  "key32": "2zQ3reA6Y6tUfoRjs5eRjZEfCuP8jZeM3jkwN4oXpH6xbuPxvuMA5H1EMJCk2JessDCDv1vVNWswhR7k3cEnN4za",
  "key33": "67PLNN1vatH3q1FLJEW3oam5mT9XDYa7RDBXyXoeVzMTp84Re8MXYPX9CwW5siLTjRjoY4wVBgsqdWEypVBba8uy",
  "key34": "kdJJkyfijeRAvhFR2DfCQ2SMVmnAcjUqCjiNtRL1wXo3QJHmDH6SqR8m3bc47fn1pKY6xaKvvRLQ9EydFRhXz3Z",
  "key35": "4Svkj1sZaUjq2CA1h688sMNHBv8kVmHhjwxDEkBYTX9pkhDFM2vWix4CGo5JrU34CtjdB8BJrfUrA12ktQRzZyEX",
  "key36": "5EARmvqhtE8w2wnQERNvzdBucYPg89A81QRksFmp99tsSot2ADuC5Sxtjvwf4ojd3LBGZVoWSrsWLqWvdCYNPgB8",
  "key37": "3BwCMNrZUbpRj1TV6eAiUvug48ggTmW2FSAYf4hRcsoBJ5sM454vYSan2fEUmVi8g34JpXj9gXjy2VZuJYvjaQww",
  "key38": "49jhcxtqwKG3VYxdkRsaxVXhkFxGZGS8HV8FVaoCVvtu1KoAgxgf5Xfp3ZnUxcobiPV9fsCsJmUeHJGyJ8JETVnt",
  "key39": "2kG5Foe1vcRTdgzuCRkkQ3BYT11GgLjwGBPGs4oMMfVhuL5unK9VGoqCAvMCSQqvPB3aDxdsUPzU6ycEdNBZWTFE",
  "key40": "2xpTwHfh45uKjfVmpbbeEZmDynSMKE97Efyd13jG9TXR1CaXigocvkJeLMPeQGaUhByanTvjUt3e8BoQApciF773",
  "key41": "55zvBqaPAXMkAahDFheewkKzTJRFyKXzNaFD6ADwRSexv9kq9dCLvDwPBbgwtC5b9vSDwvwnbYSPcHzCLkn8CvVA",
  "key42": "4yATWj9HY6HwZ3j31m9upUHs2FvpbyRq9xHRJiNqf1AXVZydhMZSDe33WvuKnRUgN5JbCGucpsSUgydSJoRk6rx9",
  "key43": "3yti6ZKUrGLENduiwjkbgGpjKu4RKwyz7VHKdH9zGE9JKRJ5ZN2fp3xrhjMVKWY2fZPxJd3L43cH832cCAomP2pE",
  "key44": "3gGy9CszeF25bhx7J4oKD8YJnn8vVMkesXMHeJgWKC9DCcdn9rTfJUMoM2X346dKdFFfWBcy4qHcPgac4HrYUDAJ",
  "key45": "2axdGqeoaovsJfBmB8996YtWGVPTmLWLx6hMCc36n4AXXohAmFLjgdraSn3AXY6AUtEZwGY3c7T7cPZDZch4p6V",
  "key46": "38zuDxgLmhxHzxLhiqPi2qwaMxKbLMc1iL5vcib47QuuEFbLPPeVZkLRgcSZdnguzgkWi7RtNkkv2gFBe2CymC7v",
  "key47": "6dJ81UCGMX3Uy9EAY8LG8jTRSvZtdxWc434Y4yAKXEvyZ7YA54VaLjjL4LEhp11juW2guNLjBMYx1E2L76rvrV2",
  "key48": "4BvZu1Q7JZiFnzccmJu2NeuHdvaXkUGrtHXrmnPEyZYPCyCkkZ3XV16c3x4WGY7uhyBSLVZcceA4vu8zu4GwhJ2Q",
  "key49": "4Mbt21mRijYQQH6uz54pMAsTYJu5W28XZjbPAj1QeuyxahBHDEh3MssV9UM4teSVE1MwxQmEmct6xaoZG4ApAQGV"
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
