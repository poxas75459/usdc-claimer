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
    "4JKWH1AGMHxMKbMpKeMkKTa8CykA8KpTU8TB3y3jMFEziyrrTvC4ZydTz15R2CS1j2HzQJryGi2ZzasmJHiYMAiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAZshyGVeK3RWSKMw8MebSp17vHSJmUbPhjBWN8KGcGfKRAP7UHF6FUxj3VZJ3UcYE4uG4ZA6Avfi6S764h87HW",
  "key1": "2jVChvMRxy8RZA97qGxaE5qbd22VkToVfq1x6aRBTRJi3Ax81CgmZmi33zv7EcegLr4FfQzDjhBzGipZcTEb7BiD",
  "key2": "YD2dvVZFgaRmk1zq1mNt3Y3t387JttQXFjb6QxesYEXwhrXZBnutLsz8T6zGFoMyfea1hFphEj8N9ZEBVpcXS9a",
  "key3": "27XWwbgpv7QeDKB3fSUcCt22ng3EL9bhgVyFuLytY96PaQ4xCApdmwUAdrStd5YHLy9BJwmmFbmgB6tspd7HF7Tz",
  "key4": "3yB466sbGUKHwhCD44NPy5SMey9zogjai2B5tBGwTZWMbTpdqw9R2SnCufMQqpEovhr5oBW72GfTpLe5R9zU2mE4",
  "key5": "59hqtg2k2orAwL6gYY6jfmz8gjqm8wiqmBpzKEwKHJJfZdrndqeKM2J5cQPbyaGwNmMQusmqak26ZvRnCZiYNqWJ",
  "key6": "mmSHo6ZbnYmzkaUkfNJmRKUSGdHRgYh2dxVtfi5PaXvjU5M6K1a9pkTjfAaShFJDeJk1qMZcSTLuDRGjrYYwZcL",
  "key7": "2R9mHLFKSPkFwF5HGEHY6Yn59Dx8jMT46frGfyzLVKnqD5v3Mwh7xhohUqaPKF2iUeroLTEmR8B1dpJtuHpzqSgB",
  "key8": "4DW5dCv2YrS9QQd5isPP2PsnJFn3yJfmWjam5WcBFRZmuZAaQ98iMwa8NVDoan2a8qgpeoZBVmV7FKnQvzea4Bkn",
  "key9": "5T6H9rT1LC8vhEWajeiJB28V5fN532eEh9h4BxEUhJWHwt9B1NAGsbRQv5JzmAHeYLX2w8jt7Snu9pVuwgNpNcjW",
  "key10": "4Htk6Su7F8FSrirryxvwhH2iXwtj3NzSCJr2hXR3f9uc1feapuTMTfz1vmLyyjJsPAJdS1DvCCVzLXTN6JNBG4BA",
  "key11": "EtKb8LkAtnjg8q9J1y5f2pQhu3zYB6zQN5nXt6ejBN8s5QhdQv1kYhfq8SRUK8CVfNxACxBidqV2zepFZeH93ir",
  "key12": "2Xsgm1nWqSPGsx49LCh8C2L47GxciwmaRDYm2C9P5yprT7kLdyXxitUGqPz3kgqwvogRWZ1qTBhhmzHN91ZZyU3q",
  "key13": "4eBynBbt87pzTZuGqSEtgezwKZ9ieUvy4pxMeWGyL5GDWgiQjj7ZRdjQJ2raRbZGkRU7JMT2R8jfoskCevGye45d",
  "key14": "22XeukpuVddySuXNDV3ycea8oGtE99AgXJUcZhGRDog2EUoX8C4o64w8LrB7zg9rb325mWnFSd8GZ1uormjqXPoA",
  "key15": "2eqt8UXZBye3mcgAb8A7o7ZC52F3RRusSh5WZUypbHBPbV2LKnqDSM2hpBruA1GMMaxWdaDuKzeEcvdoKpeNBeaj",
  "key16": "XNdcpEjcKvtHAWm4zp21HimBprhaz51BBfdD5v6amvsbMf3vUBMj79Tbf9RqqneLfJ4ApotELLDDr8baKfw3vYh",
  "key17": "3Uh2tD3FWzvkUrm94fQFz2tQnTeE7jhHMb6FrbFXshDnRgo4WvaJNxgFwKjJ14o4oTNrvST7omL7UjMXCUCieYMb",
  "key18": "WY7kbomsgPaWakhwHgG3VTriUmWVbEgDTgFzZ2dogJ6F57ABzAqkCg2QyjPd45SnGFr5UwthjAZEngV8qNf6e1N",
  "key19": "3mD8WMCBU57pD33LqTwZGx3mkQNMM6iqhQfYutqBSeUbJ7sGaQrhkVDmrFeBCf6PHTTLiNbfGqLSYv9JcebBX3x5",
  "key20": "4AzjKz1kiWEow7EnKPJhRC7nufisxqcgKdez4p2dHoCDEkhMah4AFxRZL2iBxdCoef2f2wPjeSfFcf8EPEiFordL",
  "key21": "2aVMBoAMnuQWMfhe6a4ftXTVj4osfaFfGxWf15dVFtSKLbC4zw7FyvS1eY64dNXMBEhamrfqtLAtVbxNSr7C7kuD",
  "key22": "5XiUBZA5WxMMRk7ATWc9FJQecnoxNFMzHb3NDKocdPfo5hwd9JYp9YK1PY8p7C7ttU9KnYYf1X5pozYCHnwkzucq",
  "key23": "4F39VqmhnTgtqnXUxpFB1zvVx3fWeGHEwdNoPPGZuZ6wKQAWcLDqTZ74Lmw6AXmN5dyNbdmqKECS6FjKPfg7Aumi",
  "key24": "2XJ8UgVFYNBmdSHXAuJk7MWv5V3iJeFGoavntsPgNWP7mLXEeoxqiVpYNBVyAihtADMAidezap19gBKiVsSF3tjh",
  "key25": "4C76HuUJ9x1pTSgazeEQATjp3B8vUgBCf4JEcZhgCfy9FH4s6HDQgC3KpNNpxYDsLbVYzS25dU2FDrh5TBKJBRdU",
  "key26": "3ZUpn1ouoy8tWAUGB3Usu2RCNrzKaFLRkd2Cmt4xLmoduY2Fn1RyRAxWcuGv4h3vtv8rx6aSVch5QjtMUngX6zkU",
  "key27": "2uKpzUhajqze6LrmDiVahEjKWJfYJQ7aNpGzA9HnXZfwW28wQ6BRPmvh8xjLuvL8hNQPYM73Rmi4j2w66DJhea1L",
  "key28": "3BtdjV5F4Xan3kGnxt3ksECgunZNa2zv4q5XhmhwCRmJt1bfAp4pDtenWRzBdotfdYs64hbV8cVKAvyir8e16eQs",
  "key29": "6xdimcJVTQBEgQMHbH1MhSzRhXMjKHmr89pZ5epzBnnrZFPVHytyT7CTnYrpcfb1vCJh4PuTBn2XmT3ayh2AjFw",
  "key30": "5wCH2eN73yhky6gxDofzYhhZ9ToUfwgrawQ2CERxTDW1iWyM4RwnYn36L7MFw9uR53R3Nk8ZSkEsS1nKQYP8wRpV",
  "key31": "zVueamoctL8g1sidaH7ZVBK3cpGHy9GVqaS7wJMKwfdU2SY8j1sZExA4hFcL1wQq5BPW9xD4b7MU2Jc5At3LR9E",
  "key32": "5PKvREa7G4Lt27MEMK3gY4NxtHuEjJrdLG8MNY1Tap46HCF6QNqhsWSaTChR44SgB1uyQZLfi3MdrY25tKAKamiV",
  "key33": "2QYZqySiJ9z2kHrWVHEGSKJaMt1kqf6vks4PpVSKbi549wwcGeok2ibrzUkXaBjc5pSxU7wMWJv9qx2AjSnbG26J",
  "key34": "4BFvdkXLV8UGsm58u2h8KPaqUga8z5GgYGmQtfcVgtPtyTkZd4GnRfFDxrjQSs2vwh8sLhZWNh2PpSzmbtRbB1ec",
  "key35": "2GiKNYRpiZCqZuyrPUYHFWm59etBRNT6FXyPM9kdhehvhCt8EHzoNv33zVShyBJtP7PBweS4RCnUe3JXgXFHNXs",
  "key36": "WaPfohz9FtLbeSxeCHmHtHeg8eBantG1PAuvkDpD7K79NNBWeCpNzpWLt2JqT6M5REc1MK5yxw3s4QXbNxVto5P",
  "key37": "2kbJCLsLf8LtC67inpPiW2txAFz9Pgy8zmzjPxBfoWxRrKwwAcje8ZNa1BhAKdhCVy6F5NybQH9KGbUnh38NFoCo",
  "key38": "32rzPPBGxX5L9fkFFpRZkgPjPKaoE1z9sP4mKm6DYttuWdX88Cah8b7AHv5CHyjYTKGw5PBoFt7pR9FxjjjvLYxe",
  "key39": "5jpVYmGmdntfFjUd5T8hgmFgbX38zjhhpcK5YsehecEGtaHoYjMPThjwNXFFMRw8CyErmymFo6WUzMf4Fy6ouSjH",
  "key40": "44DvNQQKmekYxRFQDY1U3GWfVxsXMJRiSrTerg5TZW9nN8YRjJ9YVpE8cN6aFec9He4wuceDTM1iCZbGDeQXqpkg"
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
