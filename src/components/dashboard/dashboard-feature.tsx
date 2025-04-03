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
    "5LUKHQ7jYoBajgkFkQzg9YWfpF6AnVidJaVxdCLd3HkfC6yvkeUFFmxgkkY3t8PhesJbmcAJHz3fwFxFP48FiUBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VdSQSG8SroaTLgSiqg6uopfd8762i59mgHQXfdGPRbeKGQyHBdW6Xq3yaavsm6Jhh8DjhtoWiKopuyPHy85t2YV",
  "key1": "nyaRWcsDvuLM7ffJ3ioSdJxfoSKN8diG9DauBRFh6PaH9FYyN4xwrCCTNHpBB59hbTeD5hkzsD84WvUXFFwgGMW",
  "key2": "ymk1F5NGZT911mP2G5enyxVHJVk8Aaids1NiRhm6RmR3kEqhf5ZFKHQvgLkMyWXX5SDyXeSaMbYBRjPSDFduonf",
  "key3": "2sQHDhAGL43cJ8ohvM2VcsWaURQbMYq7c17RiN79eHGJLTyrnRu6FthnvEcw813aaECiuRSQBrbEao14d5ehK933",
  "key4": "3jHpaxYoF4bQZTFsiXi7xinB46ay67RsDUD7Y1uR7NpmZsEvGmgaxw2nT5AnYRYsHc5DrsQ6ugJSdZxsXTTXCAd1",
  "key5": "5XRnNrsH6GzgWUFSvtEaKgYw77T8vERob4w1HXLb5yntAWbjPJWgdEpA5TnLrgfgDTFcN6u5Jpg48AY7PxQyrE6",
  "key6": "3YKzkXk6CVTXssoxCKQL2bKTKpYkQMdVsGswzovjNzu66eLBfV9dWNx9gbqC1Kcdz4htA5WEnF5zvXKZLLc8M7Du",
  "key7": "2srsuLaXjiZ43G2K7kxamcarxuCkQpVrTFfus92zpFRZ9C8SHFmAC9cHyp2LaoChB65ysUpT9S18VzxVxCNsCXE8",
  "key8": "2QUoMYVydgAgsdapW3y3J4o8ogonGAyPywgLjr6GYy2p7fBT4edQmAozdFy2kcEk9UfTCHDZaqDJYsEKXPBQ93JN",
  "key9": "432CPbXL3GT74zET7roDtN8cL3WncKc6MpMoCM2fqKJMVdiKsJUGz6TBZDwGdc6HMTEbc2pSexEyHweNAJPu7v6q",
  "key10": "2VSfjKK8ukNBmHCwS2KxUg3N1rY9Jk9zNUFs2tLzPxafMVjH65LpR7TGkcKRSdwF8q55dAhuvwj5BK1vYyTS698D",
  "key11": "3dDF8ts2hf8Tzf7xDGuTbexGcKJ3aMZkEpAqvsDCnf1usS7HtEXmd6ow66PKhrZdf7b297q1A2VhRYjYN7DUkDbM",
  "key12": "2aHUKrPA3bJzwep6VEdJ69XEyb8WoUmYGjchiXxABLnKjzxPZ5PPUwdY2XZmMsSi7xfoiGHBzkt4iLK5DV5VtiB1",
  "key13": "4RixzchLouVUNdeX4uPMcakmrnC49RgvKHsYBiBZhpi7ToCPygp4BEAZQepzbLgmtWMN9ycxya8YzuPfKAY8cdUk",
  "key14": "37dH4tKfmCnUTiJY816AHqTjEUg2Xe85Utg7fX3QaJ2cy8mtwxbF48LaYSMWmSo5RehM7GJhYpYFGTuGi3utnspN",
  "key15": "4zZD4Aj93EtVaizpyEi6anpPPrU2AyA5fb4VAooU3D6nrRDCHRAStBVLUWdpcFU81hPMLcQcAvqC7oNgkra5PtJi",
  "key16": "4WJMSG959bdDc57rTL6to9yVwjp23TZJkETytAXSEuRQ8mq8WKC6ziRrRNRMVbRdg4bKzgVq7tkFDVPfWmmQcXZB",
  "key17": "4afJtK3xLjGPsJTojj6UPwsEDRBusNcNwfnD5e3gESYwGJDeCdFT5mtxq4VmhKSHxQfcV8fgp4VX76KHAsWXy78E",
  "key18": "31CHyXLfx9SeiKnZmTbiLcXxo3o2duz6ZTcJAfNpV8wBeBebWtyvkqmScrNxiWmvY6TowKLPXmpYRUc3vK19SHUV",
  "key19": "4hJaRk1qsojopLDZGQ5KnjXWbiitB57LZVDyFf7StG488FmqM4ZxCeoHUkSkevogwwQpFMmXSZEjkXbKmUrEAkVM",
  "key20": "3YjVdKmFXg8s2JKUtJY8X1SVXAuSJ6Jq1LDovechSDBnRYnWYmr8fXWeTMyM63RYzdkjnBi26Cio8kEGNBR33rcf",
  "key21": "5i2vKvK6XhSvi8HkBVFiiF7Y9Q9m442wCSyfGa4DT8or4XuSJBEYMBjgpoy58mCF713iXwdSR5ZKm7A1Tzumdy55",
  "key22": "5nmEZncU2qSjzGnzYEnxa8So3c9D4xAsyU43ZXdKfNRjqFiyzTjGVEgVeDVosEwH3Dgh4iGbDpzfWRE8pXvEmMJF",
  "key23": "Z6EwkBf321BtVa1vKxfvU4GixHwPNMtrmQz8dL2tDiSSMZ9KsFtKz5hbNMWgioEbB5Mw8QJq59RcYhDYy55es3M",
  "key24": "56tW75Abv6K8MFZ7nDAkSa8i5CKJyagKeBk7yFp2bym2ERcDVwNEAzpdNMtADS2UcLT9U3WwMvHjJCBmjS1WBCAg",
  "key25": "65Fj5sw3kQzVZzQf7ssL5kMJLJJseKgidETvdqZZD5K2PUmYpTCtMz6AWRfTCUMuUJREUqWf2eRJ1ZYLWqCDfixg",
  "key26": "3JAYzPJrzoXKatx2oYJd3kmgAaPqrFUQCXtRCMr82QzwEgXq7CJoyyCK2d8A2JG8998gyEB8Q4K8x57LHQsRMaQS",
  "key27": "4G8iQvziWTZqybJDYp9ym63X6q6461xpyCaJPb4LjNd3byeS1U632NZUstLtJFrEeMYwtqQHwzxiPtV2XzLorQ6x",
  "key28": "46h1QjJesg6EKqfsqjpSgMYWycMmMBmostDLUNhzrNAFfGj2wwuHJqHmW2rNTdRkmANfXgr2kVUcVk7rvcAbH74V",
  "key29": "5BqjCYRa5Z5mQ2zQE3LD4H7NbZC9aciNgwjM2UGGfcYMgSTieV9xNCNSyCd5PhUVmdY1hVufERvYJ7oLu2RBJ9Kh",
  "key30": "2xnWfrhA93cp6hPsMAWuGgk6GzzcWfzug3tAdn5ThafM1d7F99JQHv1sAqtoiV4926xadpUbdxBRpg9S9GTWBpf5",
  "key31": "66ReYW7SHAqVRf2iJU4ncZyR5LpYrqgvpdUf31q99xRuUWwkuMdjjcBWKaZFa1Yx1CyTNKHG9biLsKkrHmuZVWk4"
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
