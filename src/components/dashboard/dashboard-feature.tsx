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
    "4stiHRpv79eNSCZ4afcL8xJKXjhC59rtm2dDqq3Lq4BNimREkrCUuRwUbCTm8pz83XuL4fQXut2aACoCDMbYqiZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTMeim6YWSCnMpw6uJG38F2CWdvofPh641ZZp1CyfcSsXxm4ajrRzGEVhvtXZ7kGtopzWanRvP9TC8MtHTKzRjT",
  "key1": "3SkqvXsTpoWaE3ATsXAdrMeKz3GK91hdh7BU6RsySigBN9WusXRnFEdHwb4QQ1adhdVATGsBYe7Vg2aP8aTZdfQK",
  "key2": "4BGD1nNkDWWNog3sgXjsAvcmSX9McmC39jrwc14ci9sZm7E5Py9PHXvnLAQkv6rKr1MV4TnUc5GHbG9cmy2ApYcS",
  "key3": "3gGbZunWNexRxKm9n9UhRPSMZ7GWRtjWTSzFyDZ97FHqTwXw971t4T9KZbK8GcJAuM89v863a6H22mHi6fArESLY",
  "key4": "4YwZQUwH69gzW4BiBWU5YaNPdC4K4Lm9EL4AF66kNA5oGificeC2BTxcAnjovqAB6ZHVmsfZiEK79KkD4tWQ6dPW",
  "key5": "3BdVzZh8oaQzmaMQ9aG9F3bU8EvrudEtct9KB7HGVxLaCetgDKtQJJzMcc3n4BhAJgVUf7fRUY7veiqSqWtKdw7W",
  "key6": "26gVJGqBkjZYzYmBEeABouophtSzeCVtZXo4XvbQZzQJq3EAxbvCixxJkeVfxkhiZW2aEHPkjgQjkHhvjFtPBoPj",
  "key7": "4Z9vu9qUoHtHRuMVSs97t4hp274WeQrv8nLnmfV6e2scX3MjchM7WC6ocN8CtEKoDGorL51RFjPMV6QnUB81AAo5",
  "key8": "CZbKamZNZMtJiLoSQszjkP4JxPdR5v9KgixP97Zdn34BGYurd596RbJK43PbL62os9KCYsP4B7iHUsHEDU13R6r",
  "key9": "5QoGHyHpvCzP26x4ZWNj3CxMbQHGWUF7iaiBNYqasSE3nnJS66PPx2xAwMAJ4F6g528sARDpyQ3nrLS44LTQTt72",
  "key10": "4oRDymSjh96LUgRS7bWAKPwfZ9uju1qyWgecm4nJgiCrtd7DSfdZheAkMqqbZKy13VadN5gNn1vdvAwgHuYqBkoK",
  "key11": "5XUL34SkJRZbSWd6jxNNfbpDErPq7P2ZaFx5TgTDmMkGg6unCBksW7saZKo6UeMYKYLpe8FtNFdKJ55JLxvWMes1",
  "key12": "4AvcrA8iGcSifa8NqGw12CWyngQtba4GpPZUpdiWmWvWGWBk489k3xWWFkfBcxbWKsntRcXD7dZnWH3DnzayvhTA",
  "key13": "5ptXzj2dyNasFaGkn1GkV6ja73E2qEWKuEnkWAGZsRZxT6TP81vv63niupAzof3pBpY4eaT59W44GABY7JJ9hTAH",
  "key14": "4qr2WBBzNezmhcGJjgzz5eWPUKk6E8sBsqD5ZGjHah37X944YnxBcvXMV1qRdRsA7h8zaecJH1XJL896dLdpZVvX",
  "key15": "4aBKZmqCf3hXCMgAVBp1Fa57tHQCGeNNT2j2VQNMe1kMH7LtXN2LRwv5Dtc9nvuLogzY8rEwUBpTjNPbUpX2edwD",
  "key16": "5ung2Jnz3c1FpD2rankZGbawELsoy4CHyMoD86fmMyEqYzKmTgrnE6krvpWSPCDfKA7oz6FRXmVotXTmr8GnZVKP",
  "key17": "5ZkZj9tzjzBNDbTdAztstQd1WSPSigVAcRxnMBN2it2XB1va1jitziJGxjjzxEMAmSw5vVCvk3NW9RYJskfzsZgt",
  "key18": "SQT9KV4nUU45rL8kEmrnkVrxu3RpZ74448rQDXeqFW8A8QxL49Z6UKjcSvy3G4BLd9ZVDw5wkocgeia1dEFs28G",
  "key19": "2innuYT1sGarwyqDnY7x65ExUTPCAsYNHqn2kfWrYF7VSfFWZKQWMZX7q3AoBuuXwFvTFuhz5DnG9zCpN8LGkiYo",
  "key20": "2tj5iAYn4QcEcGcHcV7vBHsMESKYFRZoqzUmfxscJaTBR1dit2sQSdJwNY79KjcWjkJ9GEQHVarxccGm4y5aoVKo",
  "key21": "3sh8gbXSQCreFBBdeEa2n5rS6LsMeYRmLYWBWVjDSYrJKy8LTqUkyeUcbUzGNaRrTKVy1mfbfBvueX7jwV2pDfkK",
  "key22": "4hNMtsLGPod8Tu4xfByzHJ6ELr5BCbsAZMhrxdQ5NvEE5bokyVEkHKXYiBJK3xQsghNwV7aFsxC9pvGwLuxPhjUk",
  "key23": "92FcjbYFd4qHMjC76PETnCtdxm9B9naTSNMMqPtNhHwZLKJoJaeCxU9TxUCzrGtWYteJf6jysdnRom1R28YQVSi",
  "key24": "3VmA8cWUMfdPMeCoXDzNjVqKBMmFkXAfSYrewRGg1UQBq1rAZduGHK2LgitUJJ89FiBytE9tBdRXp9WYCGcPffem",
  "key25": "4M7he9q6PFDCxtSzjh4EFpeqMpWQg1fLQTzwqSovHfT1McMM7voC56GQSXPhozDqv9zXELqpo8X7jUe3B1hzKLAm",
  "key26": "3HJUXkkFjGakd68zsKjXUhqwqLEEGMPggx6CM8uFa6vS3ASYHR6jbXKvC69q4mD7keog17D5Ku8u25v1WgcHccgc",
  "key27": "hrXDM3gfXg4mdeCqFKZewMA2y8MCeQFyYG1L8wuu94C3vrQeT81JK9RQMZjQXJRyFtpmAFtTpTjL9cNzvjyN95g",
  "key28": "5FJeE8WsmiRwWy2EEGZUMeh6tS5f7q6SJikFfsptRqu2FTQNiiAhFGioh5tTn8pQwpSUYvJRwAzeNfFEWQSRc6oY",
  "key29": "2XX5kbHu5hKHkWHJmQmMzgHW8UP8PruWeYticezJLPkUWyLT8KmDKCroW3XRSouJFghJ7in5hBaStVNggfEyBce",
  "key30": "62RAYvqZDJdmn1R3F7xU3bVRTCdGLsbXA5M9U5asSq99zUMQeUiYwNKn6iAdfz6hL3WfsLcWp5ZC42Gx8tS6cB1r",
  "key31": "5i8GT3UMNzPmLJkrhEsH3aHrqp8n2Bg2itF1TsqXaNmsGfaYELzJCVedFwsh6xc43ejkLL4LekUnUhaYsdEa4LU2",
  "key32": "5MSHpjhn29d4dvQqkeZcy9XpiBUcxz85iRxMH4REVP8KMv3JZjGWaz4MQ5yg9LJbpVR3uFFAdF21tgQjWRZ1eTeX",
  "key33": "2QcbDEH7ijBrZRYGAt7z5TYFG2ET4VaaNKLCaFm4zN8y26a9xqKCpWZ1TFosNuMQ5MjotmGp6m5J7qgCeC4oE7SV",
  "key34": "3P11bSPZkrSch6cSdNBTsqTj8v1mut69Vfe5ZAsdNvjxFkurGyKstdwRS1zFRBm9Gp1UgpNBFEZ7VWCKiRLK5NHt",
  "key35": "2GGwVL6R2rkwiCHFhbwXHtMeV79PFeZKTj4fc49YDWbEJbUf4AJDU3RuhYMNcy2caiU96oKXcZyhiqNcms8E8AMq",
  "key36": "4uD4khpzkTphAzMvWFWQshCZvSSfH1ptxRBZ3eLSAPuMDP2sUrt7ohitdyp9rmaVqt1WrTRUexqpKCueUMGVzjHt",
  "key37": "5wpc6DywsX5cYL2MqkyoPJp5yYZxm14AJzacWk1Pk5Qj3mxiiXZxD7MY7xy1g5cJPH5VJ7zhsYGLQ8Twq9soB1ii"
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
