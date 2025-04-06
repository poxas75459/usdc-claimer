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
    "mYF9t4Hf9huMjfpLNPBMfLYPuBUDkttV7Yp1HhULpDJqUm3fpGNhvYH3JTAFDvSLu2gevmBo4aBe5kxELDKCm5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45vmWq1ibqXmdbK86E98woZXhWaYFDn7MTuuGzhLnwL2sZpwNHdGTSBkpkRWUNdTgGkuNBf1Bc1zyDWLsZhreYg1",
  "key1": "Y6BGPjZeNNpkKQUU6fsTbCSYyCVS2i7r1fQtJ7CzywMk94wwJKfkdJ2RUNe1KANngetsuDbprwQCTD68pr3d9Lo",
  "key2": "5HuCoq7KJCiaYcHdo7HZ6WqKJVnNjh95gwvcKjBUKVnPGbAy6a2seBPRWWLSxgGEPUnbenMuHu3u3djDuUa3UYDX",
  "key3": "3WGRrudbaGa3sHPvqsF7RChBpr949jF2SPK6Zeh9t5UuVsQ3JRdv5Vf4HWYfuAoU8QcwrMDbbfV5594EDrKFrV1z",
  "key4": "yfoAbtG5YXwyqc4968yLGpHNLFtA9PEfmAi67KavuN4deS252oegpEup2uphH6iSpKHRoJh251qmPBJjtxuxXHr",
  "key5": "a4eVmqe6GGAd59ou9TWri7AevbpRD51CmBKW4d8eAjbHqjrQssKrc4jay6qxDVa1q9ymRKsgnZcdr78CSfMWSbc",
  "key6": "o1pqVsg6oi2CoEKAwLXX7K8WbiDrTPoz2UZzGfq6PjPLD9VdBpaG6xJvtJ6zhD9vsvAWkPFANNFghMgviE84XM8",
  "key7": "26eYR4WMuhnd7yDLo7zd2BcPaXsUPgTJwARzQ8ohCNbkbct6vD5q7cHWVMQCiWfw3CCgnRYiZTsYuHZEeJGUZSMX",
  "key8": "2Y5F6HN2mCTjmiUQesJXQe5txe7FTt9uEhtNqYHxffqZfhZY2sYvxzpy41yFQMT648GGpYwxN1Ju8gDobFyNT3oZ",
  "key9": "2S2zn5jXhGdQgt2f5YvxPxGnXk2eHucDBSm4cyEY1MsaYrdL9RrSkksCtC62rLr8hCDPW9zDWdkKkuwRSaykrc1m",
  "key10": "2vtBMtFt2wfQHtKoY88nzsvyxbVJ5JzTvPWEfgQTonYHgmBxjkgsEzMCp1V9bH71Px4h7nnRJTNL28bFGJwSgbMf",
  "key11": "3RQbskAotZpTvGXaTyHBPL1mNdXJzDes5xS6uJaXCGYpok2DF3XC3ZeBzyiAy7itLgo23NjnoAzzzZmzLeNJjW66",
  "key12": "3tnMuFwha5tHYWqGoirM9pp7otYxyHZSFW5ARQNEadbgrg397yWS6LLhgXqEUX1FaS3PpzXngf3sgALL4XciEfA9",
  "key13": "3sXfJKuQn2bfZ1B35xkuib8kLwZBMSRUYV58hECi2WzoLiJV4UiFmhEtNVSTyMpjYKbGSfYuDxSe4y1sz19HKQAh",
  "key14": "37mcrS9NyHeeDLDxiUKNQNeVMZRH3Sv5CrSnZrAiEHTD5dNBaRhHzrbxrvt1259Sbn5Waif5bGMva45ESuVE8uUH",
  "key15": "be6SVccM3tUkeBu8c4ck4vXDixhCtKBb7XPnffuQvfThZEcT32jzg2ifXjbPZGUii7xW6jxg8ZtyQLU4UhkyuEA",
  "key16": "2iptkK4wuvKgFy6d2w6Ny6dd7yMS78VfYXvhdyVjVVpk4SjWiD76kJ85TbWwhjNzU8EBnG4AbHXZUbZ9njpggtcz",
  "key17": "2eYkgWv5Pq2McroLTCWihJe519L9zDXVnDpyL2hpDH7hcr5j1qQLiJwFVJQbtoRr1dXFcUvCJs72hK5W7tgZd4rX",
  "key18": "6553SkXpGubMgsM7Kd9uAVMUNNHg2bocmFPGo1gaBCCg13DUXKy2nNzmjRypuf4Caznbtr6EKuHe3ZP9EtaiXjrp",
  "key19": "2mEpaN2iVhHX2QwPEj1kB9hq2R4TDtjDNix52nHM3SJzEs2JLdeazoB3LAAVhkg9AweQMYouKhzmTZQfiBHiSgA1",
  "key20": "52a9QZuEEXSZMAEP74jeJ4VRbcXsbmK3DCW8Xo3F3QEyo1v4nHXcscwG9F2arLzyV5wAdHvnC8dEPqUQeYMfTQ4w",
  "key21": "2DxZxWBfKTYCnXArTYDfQJaGtNBssuCyZNPzJHzhjqZec3N2u5LHQ4W68zz9QE1cQdVbfNWC4RdCDUZSVyiiiqpS",
  "key22": "5j1LDFBw4SXAWB2zusQQcg6MkphuWkMpSsygauntvGjAjBdi19L8VaVjtndC5JT4FauiCxggSQ9bWcHEo8b5rHZS",
  "key23": "JiJ89SLKM2bNZDDtbhTqmt4DmM52WhVzQgqHgcT4utKqkddvE85DwocALN9xvMMqCsU3VkR1xwLGHWq47hRHVhL",
  "key24": "5hBawtM2YhDqhabR3CWhuRZqP2Sa9om9KXtuVjJ5qc6ZAzP1xNGuK4bX47aSbHhHJ39vFxoHKwkeyKWKsFZsKBEL",
  "key25": "2EKBgnXx41n52NjLeqEo81yG46n9KxyjrSkhw3rHKFfZDb4CBuFtJDFGC9vDK8dWyRkpQh7sZtKo5kgqMXXyfWct",
  "key26": "3wqYvk1LsFwCiSRyXKDGmajr3JBMBEqB9LGNR7WAD1Ft4ypZAuHY69HCxs2ETmUnS7E1MyrpuiyguMPhxmGUn8aP",
  "key27": "22bZapWoWYAVE85sPUw8j1aS7qUPCSYTSnVHSsbmPRRCHxseWcG1pMnBwFqziidGzuUqstQbCJp5sVdvFpDCbqai",
  "key28": "2gz1RtBye4aFkBHjH2GPDgK8fDVVhfXrjQ1eJMNqH4ajgGyR2rxturGS2VB8j9DX5gyqNwYYsDVP1CeMfiku4eF2",
  "key29": "2LmSWWNHDDu5bKSfgrRHbuXm5L7LPHfyc3JRQ3sVUHcUhNWBaGamzmqUMuqgtBxeeqrwu21dWtBEj7uB9vpmcJG8"
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
