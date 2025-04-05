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
    "4REF2CmA3ToYXcZoFkUcgBQJNN9XoRs6DT8fPrhDEXVWsr5Jm4httmrvXcpyU5DJ6wsV14R7Rv6dUC1HEifBdZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oEYUut12M1q7PFogLHY6woHnmCqqAVqPm77qCipuFq1LudnDPBcE7JURf7xygtSDPGFEoMVu89NyFa5nRFFAz8q",
  "key1": "4zcnHryrjBf5dBPQ5pp4x11WRcr849NFABVaiA25hJhC1ocjhrpZ8bqPsuRrKGR7RPt8wxzUVqonVjBHFnptYpuR",
  "key2": "5Q4oaGsk9ru56ycnDucpQsTEpUChHbwNEzAkuSzt6vtZjvQehACuBWy7soW4rRAe8aZzajfujYDCZrfGQ1FKMcWG",
  "key3": "4k1aqVjanbtmsHnHxvDmXPWguFHgAWLKnrkTjwhmNjGHdPWsFpQMnYpiZx5bX72LpgXDqtiXXUHyxJCZGB8puHts",
  "key4": "3k8eV4Z1QwE4obMfWj86dkZfXjEypPsF8hMisWR537RW69kjyDG69gecho4cfzJBcwmPs2o6ubUMTwGrCXj72fNa",
  "key5": "41ECABa93CqFWEDLYdAkFUFXmecLFLrXHPsbX2toqRheKazc2uDVK33qrVHi6SGideeykUYut868NyMUwTeYcBT7",
  "key6": "2FrQkfF8AwyeNTxrBMmuP9mSNgCfJG6BwtHCgdPLHP8SgD96cV9R4NYY39kTtYBz2wp5TXfjJ1BG75k1fTYVAs8q",
  "key7": "4MPrTiiWTSyjm1yutywRjS5tvuN1oeTryG8BZGauaWFWBGAimayudtQ12kStifCpQWiyiWNug4mUtNkiGEhumJg5",
  "key8": "3EupmXzLhPArdNfcFXZcL7xHS1bNgwp57ZPJDh7RRJZWMcMAxrxiwN6UsthxEokKbGQPo1LFoYvrz6Ey8FpEDd5D",
  "key9": "vCgwX7KyxRiq443C4aGCvbQLW7nrVGfkMF8VsDmP4UWVk7NSpVDcNsiLpnRMB5bzSxZD5Xvt7pRNsdFgW9atKm4",
  "key10": "4xR8Q7zpgwfe5tJG6DWggNWYki2JvmhN6yKWgaFC6GzbeCkGxGUCBd9NDvpP9y6ccVdEqkgzhfEuunSNXZtakPyj",
  "key11": "StT5VHwGdqizTyEks34B8jWvhbJ4ESn1neFw6WasMis9gz317v4ZrpzTvzv1ztrdCAxWPEHLddDQEzhsp5dQUj2",
  "key12": "xTqLuTumu9DYqs8GV7JUpHMBLNB67RCcdEpXHWRb9vzre4VqTgkK2wjqmVx5MabG9TYoC47fV8VazaFYgy1tyXv",
  "key13": "uVJMBM6NMxZ6tjZJLwgUXmnshXvizn73h7R4Nsghz99wS837XY1KHsDiMehJ5ixiu2NVmNCTyjz6mPYGUztZ8ZG",
  "key14": "2ZWDPLYC4YSwKMPN8pqv8KKgUzucgv89ftoc2JgmdswYfBE8F9HntBGkh6NMySPhK8EaMEL75KVLbpfbcY7WFckP",
  "key15": "5d9AVMTuVrJqpeSw92sNRHyMZXqts4vZDBrjTx7sPBhUjDvFbzWfNeGQm66iYYNMFcmLZyf7RR4695VsDLENr2UE",
  "key16": "3B6RSuoC64vgr7ww62Na6ekKhoBDipYU17YtHYN3Ytm4k2EPqDeyJv4A4KjD4EGUD2MYSUq3wUqVydbjtwYsmHCg",
  "key17": "34fi2VrsUughJKdRDAdyQF1JnrSZ885mMToNka9bWD2W4uRipsSBAHNZGpCbVDRLX2qt7hHHki5WhhUWjCbbDbcU",
  "key18": "2G2eaBVanrLVrshkp8ohzsXZ12nzR45F2bMgXrhbmyc4fxEXHkaUri2UuJ2AMhmYH68DMhTxk4xD7uXYmT8pxzJJ",
  "key19": "5jsBK7Hgh4PFSKkMoyaMZsPHftVQkRMFeVZcSRi3voMko5rj7EPjrJtv2sAgPTadN8QefeY9P8uzbhNV2CPmsvy6",
  "key20": "2vjnJzpTkyQXBCFgcuz4tEr7dpypdTqEtMPyEftvXoDqP414GbaoDEAUKQskzDARcgMuqg4a8cVFVRacUk2n5gaQ",
  "key21": "2q7XJuiXwWpyY1nuQ1FAA6b2epuqUPSSxn4tXC8z7cfx8s225YAwAduUCVWQShtTMXTd1qjniB4xJCrEHWFYAKyW",
  "key22": "4WFDy2TEYwef5BNzLrJUnGYpAa67Est8fvguGb22WNQhpTC2syFZB48Y68NV5wETEH53EGm31FDg3VNGt6ejgrYp",
  "key23": "24znMCrN81yuE6ExwrTM9cAfnTwcQH97VFmxLRPserjeUsE9NZuwoC9uegSEpKiAAYKmAWZ4c4c7UsLB9Kny8uuH",
  "key24": "3DD126ZuzfAhiss9d1fF1y1FLCmfNj35k4UmqZjiiwbMFLBY8N7JsLQiBd9Becc39nHNxgKEuZ2X8XYRett5f53g",
  "key25": "2tkRqinufSJY2V8AXmgWNq8zENkpmi6ReN3kRpSewLFqedhGKDiWyMKuo2STenRmgGFu1ki9GmwdiDAN25thpoEm",
  "key26": "67erCk5qyuGgH8Wz2smHua4uPHie7Gnpo7iPEpK1xamUrVR7sgSDV1suwpuoZNhcye6U82n9odJxBoesXWinyPXS",
  "key27": "i1CesfZbUwrQeNXuWfrDhp4C6FPe744mW2Qv6JwKRZNRJ4FeBNjP7vEGgwDCpZd1kYCq53uGQdmLkoFun3v4d1r",
  "key28": "Na4GPdoHbvu16SjeMvczKZL4F8nJ5ebUehjAV39VFw1sJM8AkQk9bRsrUBq5gu6LpXSVbguqZdHxCKqbvhAXSbD",
  "key29": "4anLR5jpqdthj7eQhx4pz69RG98jmNCiYWVJxR7h51Lfn8DsmixHc5dAkQXw7xSnZuYQeTTVobSKveiRvA3k3dMr",
  "key30": "5gaiT9pBmpVeXevJwEig6x8YdLdJg3NRUYHeEbNhJhAdCKu8pQr1Aag8JcG87ecDoLcYHDRhKSArGxBorvWL1QTQ",
  "key31": "yvt7q6oNKUF2hnXpr1gNjmBNzU3bfL35ipciJ3gMAHa81fmoGDrN7ienLUqQNbubrNRtJoReCrkDiqwNsbSkYMu",
  "key32": "2RvqPkdvrE3b9RauDE4H9AanSFtmM8cpj9K3Bzr4rm7k8jajvkhdHwe1U87Uy8Q8JYPs3fYoe4mesUQK6o7FZ9o2",
  "key33": "q78sfLhcK8oiTPsVD8WCSgZLGZW4Uc276jxTegDyKmQ8p6TwYFGxH9mj2SsGaPsLDYd9N1YMgSpVwvm5FGNCX7v",
  "key34": "4jhnK9No7dqgAg24PXPXzbiczFd6WxqRyTetVb5uUqJY7vSsuiuPajynT1xtutv4v1x2DWtkLRozKU1hW61R2jEs",
  "key35": "3KS1mH5RqJMSbe7ebobgruxRgL49rpKqHEku47ZLHHAo4VLuWc94NnBctWxFZG9UMpvqew918U5UfKdDL15Uaewq",
  "key36": "Z4ey8VYdSiPzUSTa6gF2A89ry7FYJvHNj2daCEZqN6dLJEEjZVNXiWGorDNGv4amwY8XUfuqc1VZuzQoMpiC2Ej",
  "key37": "2EJkqg9mhywj747S2N6WuSMMTH2KXTwvvz2U2Q3SPck4fPuwekd9rmrnb49aQdYCJ3B9YGFFRKdMuPDBipswEt5V",
  "key38": "4EpyXinFzFbJBBj3J8SSRLBdwPePPbgzD4U57BzihdccU2g3ZH9UbbBFLr8vx5NKkg5GoWikBDQsWh83Qz5hMHrD",
  "key39": "28Y8FP6Kx3pgtUsUoBEjL4Nxh1c9Z2Jxc5DFswhjmHbGQeK33saTGW8TkpEEqDaPujrnKC9xRqb28ECPG3tWB4wC",
  "key40": "cru6YieDA9yutVezeUE4ypDnzrmo6E9mA59VrbRZo52AEtEgrBDneXSenCn4gmUQNVMPBbQUwYhfr3j4psVbFzF"
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
