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
    "3Qwnp5YU6oadGkCD5xLvRdHVKHkK4UEGGcUn9WGHmHS8uxcqD3QjHEdqbxtxieP8a8i3ZbznyNJH9PWEJtbgYmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bffpeZ6L6VV8sJi2G2tNLkUdHWsWdbcHaMUjVt3K2kX15Gi1mCnivTHGyYCjT2U62SwqDNHDwsuj3Cpr4N18qRj",
  "key1": "4BL4TKedpXcLUXpBVrJ8iAW5gdmGpsJaDzSAZci3LpTh9yZkqZ1C4uCuxADDgnsydag8Ln8oL1mt1YQdXfpngPXj",
  "key2": "5dKUfCH3whjsUSVETPwQr1HfLdX265MtFRaDj2Kr6YsV2hsrzGPB9izRvvY1stexKFvTxwuhdX32UoDRX1HmhUBa",
  "key3": "3BoiVuytMBeR7ZDSWKnoWF6VsG8FgUVcvjeXsLqbr7HsUyYPvLyA8c89EGtJZ3AE6BBQsmjA6MCVZ6yPNG3Qwbby",
  "key4": "3yVU8KrHjxv6BvtgZ291Cnp3XKz8WzrTHtmUsvrZfeqs23ABmndRZmKQMqVWsZ9euHVFd4xW7VPNR6zHrzS5RH29",
  "key5": "4D8tJuSfu8bFLR2hdzxD2oLk5pcHcWdMiBqz35bXrtj86YDzfZG1s1dewppkcxcfX3swCXY4cUsuyPNyEzdC9QKe",
  "key6": "3poJmhqijraePPvKarWoC3R22tfwq6XPfzDPG13arsswucZYfc25DofGyUvuPy3FrpNg8Pzhipyj79T9dzYrwnEk",
  "key7": "2Cr5WrxMRXvvJmEabHxxywFNdBLmmURhAah8uMqWb8KSyHdBpt1zarNt9XsrjokCq11KcHHByXfUEfZ9U5QMiUPv",
  "key8": "2bTMxGpCeVDhDpLo88ATe4a1BNUHjpNdNJCXKMDWi4WjENu9rGT4XNTRLydpqVHAXjPbCr1LAbM2jfCq5XhqjmX1",
  "key9": "3oocFmV4SaD9asnUZoGnXPr4meuBVt3aM2XiUWFoWnyXuT7LaA5VVrBQFabPjFqf4sfcRpwVF6SejRdA17MeQMf5",
  "key10": "ozMkg72Smm23FhqZd9grkFn6iQKWv2Jvg5nUH3SeqGbSq1ZMFGsQAmzza7sFkqDrbnmVU45wzczMEzMUiheWog4",
  "key11": "woMnvYCVxtWgz3e15oTDbkR58s7VPyepvz1Dd1p1JX8sgxsH6zcaa4WwycaZC1Roaac8FLA1sZ65R6g5YSVQWZC",
  "key12": "217QUJjH4uN6ZvGtmtNgqUWSVXhXwj4w2XV5woYLAmw3iMjZSbM2aApXwgVjVkB2cQDsYJ8m96bQBdzwWH8nrDje",
  "key13": "21TZMVHdaMSmdZJttdikTV5ATeBPs1vENhNHn5gqSeZoSSvat5o5Bk4W1v2BKMF8kNWmyHergK81PjA8jCP68una",
  "key14": "5HRmYeE5hvNiaKCs2fjbFSYP7gFhAJXFB5C6R5MnuMBmmMHoBvge3hcZiEeErbMTdmDKyAcr8J3WgRU8ZL6jbfsZ",
  "key15": "n8cbBPHzXv3u13P8R8jqVryDLHomcHtLrHsqkVoCyxM5iuXqPztTCG72jETJTmzJc94mWN5f5gwanawtogm2P3S",
  "key16": "awiPnrGDodfMe5F3Qswxic8t2PWJA9iWeHzpXPe4vB5BsdgKwreaDxpLadWoUiwP5rRsUTRjUSKiF6pdmTtsjnJ",
  "key17": "3q5dWMXHBiVzNUdaBTrVAc62vCzCr2XhjKpdpKKioycnSQV8MypWmF6fwQzBVVdqKa2NJx4zYhhm7FSTRm455dHs",
  "key18": "3w2Pbu5Cf6AAgw4UVR8Pet1gNTZJAdsknBDy3ZiZFV5Wr7vviaMSSrpySWM6e6EXvHrbJz3RqSHpzYg4xVXr6ysh",
  "key19": "5WGev6Chh8yvi5cmfCPQaxSq1UgqRjPULRh3FUgfAb2gr8bP3b8FPezd9daFNXT9qNnoC2ia9YzQBMUAByGqD8eG",
  "key20": "jhUJS9NBX7k9ScTVnvcE4njFsBgBEy9yr8VohNM9mqYWsngRtoDUXveNVGaPxt6rPaposeBjvWM24bHt7DukZJ4",
  "key21": "4aRDMXw8ZsHjRm44RJmZZsmEpvGLGmzwChz5oQKy63qn5SHbsDYAN9Re3JredoQfoHwv9RUVvAdHgNdCcBFXnP6w",
  "key22": "vVP1eM5j3JqECELrivsL7vKXKkdYy595nKQL3YPiCLCvtEmf2pQ9WDbpJNEwmG92Qd3GNBe4GRcJ9Sb2U9gvyP6",
  "key23": "3bV1Den9UkQTKthK4mpzNJ3vrGBM72g3j4vW7yjCeo6EetMJmd38br2x9cGB4jYM2D4y5jbXT23UAQcUTFmPfbFx",
  "key24": "125CdoGws5sS6NVRhJAz1VkDT7yGLMmF5Tb9JJa7rXur2iRmyfnpLZd8Nf3KVGNW4qJu1wzzQnsMbXMPLWkmWbZn",
  "key25": "5Xe3P2wyvW1Uop4cWPworJqxHWkJVqAw5Mu84vyR8ztbyAPVa79fGG4iB9pKfjFm5AkjE7z1VuKDpRmrjgaf89A8",
  "key26": "yTYu4N2fc6rRcgKYDYcdoG7ogJBiysVc6wuSTZWhNTJF62LcsQoNL43QXpzvjeiUKbZaJaFz1HstDoXUAC59ZbW",
  "key27": "DRDn18noq2yL1vojs86LYKwFVDPyR9RKCizUgeii8nieJjTf87RzZcJJzrwXFqq6RLRPcf2NUKnLkDLEcpXSbDk",
  "key28": "4QRRK5bLkRnn3xxEnec7vXcXDwMokGKH6QW3mPq7MwJcgZzozzQ3WpLmE4aFNoSPXU8wrSkGnAnfvi9ZpGHsdKvn",
  "key29": "3G7iCpuuqTXJxGFwnHbLiTmeNtx7wYyyoMjt2X2T68PthBLNo2RbJXQH4dVjrhicaxvZ3RnCn8RBkHpURznStAqS",
  "key30": "4xQ3VPFN8QVcLaibDwusak438a3GRm7jPFxXTJM4pFynGffNnjcfLmao4RU1aVVEWMhSUhb97UZCyje9qk5SbFU2",
  "key31": "5ouiX4FQhPE84j8dSRYvxDZgJKoRYXXcU9a7dCKWR2kXsdv2HWH7qayXN4vpbNbp2j73xUseised4ARixBU7sLex",
  "key32": "5RDWQezNu7AcauXLLzKcE9AgDXabU3orMcR75pHs54b9vrMEDT3WRji1w7PSpJKarJLgWat875jt7qCb5metuGeV",
  "key33": "2wFP2ax5YAUJbhUgkwkGbVThPFqeQmQs8ccBtjgYm2JiUnYJSfcEFUoCtuzw29nK5UKFgaZnze6ZyrRDUfrabxig",
  "key34": "4wdCWohn5GqF11h9315Mm6dkyiFhjkF2YQ5vHKgjPbqwoxVy1SxmqGCGKypqJP9NVwqdDcFKm6EYrhZn2NJsEjpn",
  "key35": "4K2Nw9sVC3TjCNp2vG7BjnM1NtnA79pPtLKwEFH5GzB5z2UgeWEQgMPMwbVRM93fNX5tiq8pER9BWpoEd5HwBKzJ",
  "key36": "6ZqJ1MHPxwSAXSnRjykFBrgBJ7o4tzxBM3eWrTSabPgEUSpmAZzEpxFEPcWsAtSrfdAwVWJNRb7Gjpv1Htw9U9p",
  "key37": "3D7PFbGZEtAB6nQYDBwF84UBuTa4q7jd61jxW3DHaDpcy8uTK9T3iwDNkkgykwmgUFyafnrkrcddZNw8JSFKjDmY",
  "key38": "5ZJ6acCQukwYSmQvF3CGq3uaM8czYiCTkBuhCD2Qpf54BKa5GmdiCEBjk7sVvZjCV9aUVmv9kcMQtvkNfmVkRbCc",
  "key39": "2Lmh6jgHWBhuF4R6fgyXH7aKddgVYr2QC8qjuNDU4MeBpNb2bZahFB7kTPa3CovvtqGbDPiwRN7Svw1nA9nkDMx5",
  "key40": "62FZUWqFhEdUMLKnR6jKpyZ5KCxdTo36F4Lb5Uybj8meNkxP6a75PQzY9EJx99J2cCC8snsn36ryypvRfo3L8iWH",
  "key41": "41Qz3EpQNC7pXbNmbZmULSQXWksDou9w6j88AtpLGLUHA5j1jwsc28Ldp44F466a6ymJyTGZZ6NvR7oec6RTQSVh",
  "key42": "3eXsKadRmPLXLKf21ic57wz5EpmzAz44Xv4rqRHWeKtMTKE5tzXJPUQnZhD2S9mtUqiyzCszbqiLmkMWKYb3LhHm",
  "key43": "4b2fC1ztrgR5BTyejSAxRQSSw8xeCEDS9W384ZMpoQThiUAEDKWcsQ7qYUVcm8YYtxCo1wjyVqJCf7LDyNFKUvo6",
  "key44": "5XvsxhqAVsZ2qBv79Z2gndUUEatQBZ9AFSpot2dqUJXLbrcDVYC6RrmYGJ5yHyc5HK6W23d6Lk6vfYxhPveFUo49",
  "key45": "5TJAf4WYxxaHTZsufEsJmhkTf9cJU2qLJNXmGVC5poMBqqvc6JxUckazxFmprd42LbTdf7UcpEpz4ZmzGqeeZpsr",
  "key46": "31drG2juEYoNmoKJZVCsuyiVGJp4nabLpg3gzekYn6K3JPXtQ1SHBfYy6XzRz3zeiaWP4sYgSuxZeQQq5Ntse3GP",
  "key47": "rrHDevhZvTV8HFBBR27JKdiZBT4USA689zAgKcfmxVGEmNG7eU7C9bPK54V4QbP3fUE3FFCS4fft2svW39t6NsU",
  "key48": "bkLsbmU5FQDXrHqkwET3dnLLav7kxFJGakKq24EAAeHF7ScKzt3VpXZc7aqdq4SRRbbNHJCjYqRmwdSBxX6fboS"
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
