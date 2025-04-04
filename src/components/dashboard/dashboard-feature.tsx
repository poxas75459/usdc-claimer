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
    "moqKoafJU8SDjdovZ5PU49svYLNQT3Gxp6GYDFi6sBJyH85vMMZYNMZns1W2DT2gA5RJko8SmkGDCzmrC253fLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22o33fscBNwjpLMFDxYXxU27gdCjNLtdPy5H5oy9J4VS7RjWZ14b2BgFqf9Y3qfaYcjiw8ULGQEXcynyBEjxSCnL",
  "key1": "67FhiZaGnWy4vytASTwKdKqrRxiWBVZm14AH4drxjLuGLAs6RkopmbJCzLny5JztbydkiVCAnviu4CKK1kj5czaz",
  "key2": "yNwG93YdUyf8XnjRCzz6QnPijxwTFA8EBR7X8XWuMwp7e31u82vURAvM6sZ7Uq4WyVhLLGg8Z8tAqqCnPuiqbDm",
  "key3": "59EeWKe1puTH2j6D8UqkVmDDcdG3MU7LNVaqu3wv4rAsgth6HBV3cvQuE3wzSUmKUFEBKJ3wmUeXM5sMEBaK5zSD",
  "key4": "3W2621MkrfUzDtagiPQdbRpcVKVyMB4wGc7PW17rbkUrHKJN3N7voP5xBNyaaCPGvnmnFhitwMtYFYQGfWSjwUa3",
  "key5": "4DY3fKC4rFoBga3NkdcjYykKA5CF3VWcVDtR6G1C8ACk8a5MidtKHRa3Pc1dfiay8XfYDWoSeCbWLxnJ9YnruDJW",
  "key6": "rqZSSHsrYthkC2UxdTsHbuniyjNXfKwyt8wqtQu7jRA2metTyu7wuAJm8EB88bScr1w4w4pYJtBw4rDC11RhULe",
  "key7": "5VK2HMUGQZre4X5X7HYyyg5yw7WCbP72SYM2dJc7mYJs6YhmPUff6uKmQJpGPBiHQYsedcJBTHfNxPiMJmPXacWY",
  "key8": "42cmK1Zd5pn6xzZTD8PjQHPD5P5e5rQ9YqHwZrD26jyE2wv5tst5UVpggRXTd8ByB9NRevMoFnnA3B8f4zHt1ou4",
  "key9": "5DF21MFmHiKmouSBbvDgGPUNDsQNhTDTNspDzh5fMGyKnui8DA7VbnB1DsKEAyB3gnZTJTANGrmFYFaG9A9TB9de",
  "key10": "SqAyqhp13kGZEKEBzLzotf8SeEj2osYhe4WwivNupTh8LcQxBPNQWWGyEfRMfyPDdULmDSuKDieHwwYofX2JWho",
  "key11": "5Zehkax2GjAiX4cmB95DHwmAhQBKjiXu2YkycEC8hpkurh5Wzixxc6DLsFQ2yxbDdK2q8vxm87DZPCGDyb23PcSv",
  "key12": "55u1y65D7hd7tfyS1Wf3DFZyXqGQbTZgffixG69p4ddr2rBZSvSR2hjawj6B99bpszHG64Ds2ACD6c4T4d77tjDY",
  "key13": "2dSspp6eeTTrTtw1YZhATNRLhccAXnbW8jSP1j6qXKJhaFafMbjYYP3DbuUore4Ey8mkS62ftfjKyNciKYCZEzo",
  "key14": "56ZFM3awtbju6GvAPoRNedUcE1erHdzEhUqL1iee9WjKhauANyYfT53JMpwEWt9fNJEUL9V85fJcSQUG7n17aqRd",
  "key15": "4KxHVNywFnewYkJs1yjvmD7VPRP1yjkraoUigE2pZwYqJ4nu8TKLWc3kaGzkQA6hFkzFnfgD85yA6KCMsfJBA75D",
  "key16": "TSzuCMnS5hhYGps9sCyvvMntoeqCFYUFcB1FNbZqtLu2VKAeRM9TcFjNXvSo1jHzA4tAsydTjHU6CF3SrDT6P3K",
  "key17": "5G2WUVEWkz7gszYK18WRJ6RTdQxmCpzG1E36gMya7MgRHr9CucTLykVd4JyJ9F6U8EquoQXSBK6aoGn2g7xaGiYo",
  "key18": "iEWriUCQMk8guHmuoqQ5SeWm149TdB37oQqNqrqvfLEaP3veBT4WtdbQZxhUnVPiWHLEbm7xwm3GNmRzWvFP2S5",
  "key19": "3uh2qyf8yqAoqyHw7BMPjQHsGcMcwVnhScHJaBvPY31e2VEv25gRSVUDvxUc2fuwGYCQqGTDhHT19Nj5Be9QfHmK",
  "key20": "59phgbpryynDnsARqvwUYg5AZ7StZRQ8EDCTVEKp3KVXM8jM13w1JFrGo8VuRaPHh8X1daC8bKfePCJkkswhN3KM",
  "key21": "ZZFLJ2keoSw2R8qh91oUP26GqfZxjcxVYLCydck6XobyZmhqc3WkfuhECoPC1WzrY5jaMmDLm8i3Q61bgsbMnNr",
  "key22": "4wvM25Bor98QqowqadE3cmQUr8jYbcNduMgRfx4NCjnEbGmCv3ad3xMxq5qZJbmiz9EJRqy2Jh9zdm1cZmVNrqG5",
  "key23": "2DnnTB2iXxGdxqrLteKSWdwDkphQdJx4cGpC9QaYzBzigb5yUzvTLc6tiWu3kk14Zqu9XG12P4vFnSxmeucRyGzW",
  "key24": "3hsrbsQXJwWsE1EAPobKu7UPvKG2U8nnFZXrVcNepdAGr1mcXbsYdihr1vm5nbxuwrAzZweq5dUT1k2mZZ8SHvL3",
  "key25": "26t3uQFqaJYdFhkthmuXsiLP92UR7nfVL4xzNg8NjMnJrX43YCbmSEUev2eoPtcn2QXinfxu4YD6jjnq2HHiyHBy",
  "key26": "2tspGcLTbtsedTEGufiDgxhg2tZVpb9JfryJL9o4Ut8ac7JaGQrFQkYHPBvaSe41ex5L5Cj3EXDKboshEeNr8goP",
  "key27": "4oyaDiSt5j7Ni828grar7T64VhirhS4FVS1bkQfq1CPJEk1kJsXG44SrxyZwT9ZoNYVttXnqbUpAE5WwHKcmNoX4",
  "key28": "5n31so3V2kvmerWrySEBzLAdn4iJGkPLtYd9voZTDwWFrTcwkWp9DQphLfTzB6zR36PDoNWF4W2gadTccVx9FSxP",
  "key29": "3PfS3kBLv7ECDeQ4PUSGm2ct4V2J9mpPuS7Nxz9zn7gKZJfJdnb9pKeCn2Z3PvK9MKNmy87QWxcfbLdxmp8KbkGH",
  "key30": "oBdQkZKNLSZGSwWAgZBAeAwiRZ4ALWcXLZkxih3hKLMh1tXWeiB7yu9gVMntEJ6YA2srkByRGwZpxnMYq2hysEj",
  "key31": "3GUvKkX67HCumrZLRUTZFwNvHFw1epiCvqLxuE7NJWVuDJiruAske4xfsMm8ABsJwR94uSbYnLqP28p3HD18ASez",
  "key32": "YS4YMoFobdHvFVLQoxii4PUaswXPH3urodgct5fGUwyy68iGocmotDpYQcKFMqrw3hfV6d8PTHgcod8kRRdUB3V",
  "key33": "3ZTLmQEfnW8h36Dor1aCeKfCSAVRh8SoPF1256Z1LzCoUGgZiqNcxqE1RacAGeH1SAxkCEmzRMT1p8Qw8cxQEJus",
  "key34": "4Bf5EfN8Wwgd9mBuTr1Jr1UViefzyYd8w19boccCKBWvABCgbFg5Zx6vwzKE5uB5uA25pW2md4Bbw6noCHBNFZjh",
  "key35": "57V5674PNqKFwuiz9rKr5F3XjwQWrneFqcZSvYSfQxfUF1GLrRpoJMRjwBCqMf5YG1GfW5Tqd3ZLnFo1W3osKNQz",
  "key36": "2QZTJRgZgWcs8Av2gDuXqVmcJctsL5Ws7YQcvatf8PuYidWKuqHjq3FdvhuRGQTGp5ru7NRNuGDYsyTWeoBEaVc4",
  "key37": "3qmr7tJJrVqcoNBdrK4ThM7sAAcV9RTY5rkNhN4nvo5LwGoL8SLpvtxaEHpRSFCA3jAkaPasspP6SgnLUnrJv8sA",
  "key38": "um7ZUtGLMq6ChrkFckuQ6MYDKJMekfDFq3fQKQkhScQv5r9jxi7KuvRhcwQoeWyjpfauid4NKSKoPXkRRQMt4Ru",
  "key39": "4eD3ZzyCYFXDoJyY5eB5zRS7GmAW7ZFxTLVWLTBRNBpCa5xHhUSkY4PULW7fv71HZeTFXfMi2dyLsHJJ1uASxPtT",
  "key40": "21WfvfdhxZTnR4EWpjTiBf28NEr89eGGAZkQW1K82ZMhBaNsfCreR79aqjbh8t1zno4BL2Qa5QRNUSvbADC7wV1n",
  "key41": "3Z42TMexDQpox1CExh8rtR49nP4Tz379gXAuSmQ4gAyDeGLTgiPwda5hnxyW1mwVW2g2kgj3ERomZC5GHzG3Sop",
  "key42": "24qatv8LAvpeBQQRCcRhZ9xTGVCpmZSTLaXMuDCSgLTjRwZrvqkmohAXr1hop6NdddtVszEKVVCXKicoNRyFSuuT",
  "key43": "5o3p5qpAkZP1PuVyqsDawceRHBqbaRa6skaKLUvQ6YhHyySjQP7G2S1zXjHDyaBxRYvSfqfgT2oPc4YdrLv5d84K",
  "key44": "2EaGzKxh4AQARKmAhzMZKixDDqooNBfRYgy7DFEwNYV2EHwTJXxqsUAMU9YRnYD1wVbDNkzrZvZMHCcE483G8381",
  "key45": "2GtVAfffm7p5EVEn2iZDcv3wxq2V7bek4ehE8AFW3Y1kC2Y5SbhV7qwzxra4w6cCsCQLsq7e4skfBnRqvLCGggFq"
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
