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
    "4AN4NEmLsnmSsuJWmX8gfcRtGH8kZZHQXnzJj7571DYKjtMLf4nMDCrGKKYvHP61DDecbTDaxYhYsUBMhJRqgHUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VaxZAUGicc4ZQVbdsUbeJdDCNUCaEZBgtKPHvAgG6TaMjuYCzxBghAwbF75B2DxTV4MLKhSrLnHBF9pBPsQzMtF",
  "key1": "4ike1NeVF8swqfveqN6wRDomFrzJTjBxmJptT22GL2HVPMkCuEQLs5yhRyv9qA9kZopAVUEVETYoAYwCE7GFZRow",
  "key2": "5CKoe7pgX5aNZwtcAcaHqtfbfJxcTAoF2ppQtm2aFUQ6D7wuJueEdvHqDRFeq1DC4tfLne3ExWX79ytbk7Mz5gYC",
  "key3": "2joipzXwDg3GzmVeULX5HvUWyZAtEc67bQggcEZ7GQibWB2uqKEKLioJz2yJcjkjNtbtWPzgXDPwgeYwsGkxnGq7",
  "key4": "4xqNuMq1KjXtojkQv6uKHAAvTeGn9k2M8tZkGiYud9vxG7QivEZjV4YA5rB6KJbcbZpneqvRM8RCM7wzuami7LE9",
  "key5": "3XEPrFwWY1iz34a49AyHPBemw4wbVx58FYVTXd83V3rtiinFpqS1MjZK8u99B4Xct3XWWbLwGLni41qmAYAJGLqC",
  "key6": "3usEfLMBwNtqyiaauanL1Y2TKYnkBZwmPUNaH3VJWexZxCRAebGnCdY6THeLEHry5Bia5hr5mDzWPMVevMYNa8nc",
  "key7": "2vUYdvmepYhvvJeKuiZJiaXRQ8ExtLLrpbzoSriF4HLb3fxFiiLvRz6PYR1veCNj48ZPqfgkjGnYJJsmvz4LmKBQ",
  "key8": "65U5SUv3Dh7BR9YZNTMaQBTnRs9vMnbJtzTwpA9Fskv65L2uakeWwiKGaZ58JWiAJUYozfnqWxvFwoPS2Kfj2wry",
  "key9": "3pnQ6iiWEXTvzAvk8Xfd4rfBthP4kkRUZv8fVvNVV4Cm5bhiHJMgoh6BtNXW3199d5XVi79bdSt2jPpRrRpxFNPh",
  "key10": "4kkp6UFGSzusvxCdhhZJyCHRstqwG2cWwyMRpNd1fVifWacfAfFKHXdWs1cjeXpWxkNsMSxufx8GRhNUjXNhmh5W",
  "key11": "5KYV3SRy4hnqSZvvWusyHd1XgAz8MMQVZ61QVrE9DjWhgCCUyRqVLKKeyg38X5GMrGmBX6FAjXqcSG1MV4EfMRPL",
  "key12": "3FJ4PCF1ecJUfVcyr8XY8Eg79eHrSwAQTyP9ef49fHgvpvea23EyRX5hw1kSBL82eH6LjC5EfS5zPQ9uZaZzuwSb",
  "key13": "5FPKY5YPucemFv5JAVXqKox3GevxoGUYRpK8sR9sF6HpANjerm94iT7PNwkve1xR66vZXqSx8HEvQuGA15tLu21f",
  "key14": "67NfRfaB7XQ6XtLs3qCkLUC6QSrqX7CBR8JS7QdkW46nY32EA9TrZ27URgzLD7vVK1Z9SC4nRg5gLP5XwkmTQ81T",
  "key15": "2a1Bg7BQA3Z59cwpBpnakTagoLKXqjNac6FnxPPoZcKzQgiPrTbLcCnKt25GDMn4JuJixcFdARnq9U7DHSrpVt7G",
  "key16": "DmZL3fA8DhWFjGAYpBQhU8puFzFRUDtWuTcbikUX7XyHDZf1zjpC1XPEbHpoVJ2zBnYp61JCaw5xDTnqwQh6M7F",
  "key17": "5LPXcCqfDfkWPdEhE72tNJbsSL2c6NQ8UoRJN914D6KP3GppxeVHP7VMjfqDkCftiN8WWbY7Rsp2S1fPpBAtcsUu",
  "key18": "2ercuQbRvPquArTE1tVeFCaXK4MgFjEoRf7SuSsgQdo9ost9NSvZyinM2pJaJzpwV1Ex4vaBh7cUNqUmLYDpBZda",
  "key19": "452UnaYZxMMK9YBtG9J9E53V2bouoBR79jZLpi5LRTyHraAfDqjUUmJzGbnkZRsLD8hqVxEU9A85M33gs5QipPdE",
  "key20": "mBdh6iFiPV2vSz2CA2mV1hv4L8Bo9S2m6osAW9eg5AH35i3DxGeVjpazJx17WUrjCXMyEFVBD8CoBPvRiTS5R6Q",
  "key21": "5Ui5AhthchCRsQEh7AfoMWz9BgEkGYqN7Lt18ecBfpHNac4zbUdXRGqsPC8vdp79vHQJXq6uhxweZPsnUEfwdmfd",
  "key22": "hebFrvAVRcUC1RXLkJ5NbQbqqrX3UhNY382aHevWapbKrFPQVvge3AALFxAhZukqZ4LFrytaMwicG6jdYX6XH2H",
  "key23": "3ttXUkfnssjNbgpwXdxu4NGKXbyN2d1YJczXyeNragcoEbA4QZGcLtU2QeXasrGaSjBGRDXFfJtWRR8nBucyTRrn",
  "key24": "3rKphSPCbQkZ3UU4oh2LWfGzqUn5Z38efuUx2xw5Gctp2daQkfpCzPMEU3rdi7ZRS2xByHmu8cQSjttbQF5ShAXt",
  "key25": "22vySEWCEkZ7qAjSY2g4GuBSuUDqvPq33xsPvRbyYRXCWHQGCmQfYH8y9huwiWh7LftLbd2SLyFy4GttWFsw2pbQ",
  "key26": "3U236G5iE35vf1GofDshEXEQGhZLg7AyEb3CHwAjWSn7Kx54dKN5NqdHyfVm7gKaVT2rd6FH6TEPw9BDd62e6HZG",
  "key27": "5qYZmv19JHGhx9qZZKR8uDzzALRCX5ZoYy54Yv5vjrY8GAUyFnEU37W6886hPkhkZgdRcSfnjVFHPmDpUFPZftWx",
  "key28": "3WvgfhDwA3ABPwdXgWY79U51imD6DTDDx7BvgP3x2guYkGjcFhaLrb36bqqJxX4xykN8UeDMKRph7mPftZcMWUAc",
  "key29": "5ZiNoqXr5GrG1AphqYCrFf8By5NoUNL7iUBqgvwA1NE59yngepGCzdZ7wB17Wx6HYQFX1YKKmzVoSo4FEzLEmteB",
  "key30": "3nhqoBUBAKtBCjPN2Fe5oMpeQW2feuZuoGkDez6DZgfztNLnRTKuwAoG8fSZTX7sczyKtfLD83vFRLMscJiFsgEx",
  "key31": "fJYsnoNqC1PNMBWCon5Ewi7nawUkD3dpjYegMtLtckauySuYZBfMLdLQKA83R15d8uCDyArHGt8D8DDjZ9x6RWv",
  "key32": "2DyoJxHxQeAdcMhQzpbcaBYx6Cn1YBdmHVjhKH86e91a9DbXhTWtrbHgZwHP6ncHztSrZwRrAa7WAzoJdvFJx8H7",
  "key33": "3YqGcRxVdH1XUUG1j28SFWkog9D9U7LXjdYMProKePYY4nd2SYPT2nv64Ewgm67Wi9RWRHFK6jGaVa9JLhtGQB1a",
  "key34": "5DSqJxFc5wdxr1xqd7t12cgDbYyorpu6wgNa3wfSJ77USPfNPzrDtUVofyesqnsGgudyKPA8qnmDYvUnBptCf4sz",
  "key35": "3Zaw5wgTvJ3pDQ8rbFoX1kephjvQX69Qror93suNMmHVZnPgV2fpZkJffbqFbMiU24mSAZGE4rUkahXaDJvoFDTm",
  "key36": "3vuquUUPoGqoJc4CVEhZ7s8Lfu2sFJ7UxJ5jiMpPCtsvvCSJo7xtcf2CkxsgqzcwS4zpzXYxZ3ggLd9bdd49yuMU"
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
