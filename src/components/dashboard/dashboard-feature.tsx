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
    "2VqyvoqWkWVLdduHtWktfXL1NCoueoS7F9Bvn1rPYZCXJ3RqFCzjQw3gAYZA2nHSF5RgFzyQ2GmNXtt3N7YNQF4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNEaKs1n72MX1ui4Kv5jqhY7GVnAjqyN61qd5FNucbCY1aeB8367BS8iW5gBREKi8bpu8fmxaBzmHFvB1Q8dHNX",
  "key1": "mQ25CP6nZEhEDF2urU7zkCr1p1YVwVwPYvYSwDuDXUabzFTm9BPXgfAxKS2nJxN5EtnwdZd4ZsbpzyyNyjpTX9E",
  "key2": "4smNaSKENxSFpqporwqkV9kYGYUYsjakhnBokkUjXNSAY2vfkTWGDagE753iJLKwP5VkQ2zRp9cpyskG21roRp8f",
  "key3": "4qqRcaKTJibLtyaCE1WDbCZQ5sLrsLyUWNdhBh2B5yEesQbY1j3Eo7m8rfV98Di9aFtJEac56ZnHBqyPGLWGT7sC",
  "key4": "3ckFBHzwyyX33yUARaz6u11uL7Q1i2WvERt3D89XxqFwDXGyZbT6UBWTXAGad4U6CQsH56NmhRXkqGehcHSK1zZP",
  "key5": "dy1jiq62uUwppWGV5UcfTR1GRgEazXWUaYoyjx9gjJw2fXfomPUmJa8Art7zSo9CgiRzGQAiZRPxC3ECWFSettx",
  "key6": "5SHcyu3F7Yk55YY1HJWmbsTo1QQV1UTExaLxMimmgpyaMw3Ri8NWQdW6kpVByznoQQmvqLHvYLaKHwEaicPN9xWg",
  "key7": "2otH4fmASrrGc1cFBnsr3q3kn2vzu4oP5tT5PsczuDM5N6zaArLkrLN1vaZmsWyAMoErpY4pk6f46y79GkztkFkH",
  "key8": "3G8ULR8iKe3tEX15kPyfya3ox6QAwskk6iZAqnKvuJau2qnFPi6RJ8XWvK18xbZBcrhLNyXFQyLozGn5mJMUrKJM",
  "key9": "cXqE8bd78PBczCkFzNTEQoF2qArEqgVwhh6KVAFrUmyvhWFro6RgurmMvvcCATUWkM4sVGZ9B4wEAG1nevCuMVc",
  "key10": "64brRNSQfzUQAB27LgE91PCLrFf4dJzsfb5GZdbRk8SY9ppytSHXj6YiYLovezM8Bi8T4axfVDHBVgRgP1XHBcqM",
  "key11": "2tYS9qgbZjfd46Eq6rM3bg5qk1RXjhs2V26Y2iLeC49E92vcnLMtFH5ijnXXRwcEd55HHMP1QVGyJBhXppyCD8sB",
  "key12": "4Ku1FuuKZQ24bEnXYA3u9BDic9J2Yj3GM75u2L9bWBkR6h4UaGhpkRYE5vmJT1Zz44Rc6VbQKVyotXxExHqTJtxF",
  "key13": "4Zeg5yUA7GE6nkjxVyFDWf5ACyd5FcSH6NDavVWDpiFxgdU9N77P2s1Hcfz8QsNeH7c2BfdBt9SHdvMyhoMhV9G3",
  "key14": "3WNftrSJNjpryTMShhv3BiS23aDne8CHjTJMQ4sbgtDwkUwB9vQtuk3vpsx1oJXvXnGC1KBbKBZCaZBtcRqyQT5j",
  "key15": "5PP9tDcGQjNz7a85H7YdsjT4NXP4gQB3LLVqF2QdgPNv9yAH6hpJoTGnncwkNSgd31uaGjWJXUwuf7vszihQEUQE",
  "key16": "36HhgSAdZtTu6ztjuBW9oniwpTm86KWvmHqGabPD7ix1PVpNAnMmxccmoCCpHVFDWq9zkcTgvkWKNsQBJd8ZbfUi",
  "key17": "4BbdNbiwkRreUbRx2tQMGS3EGceKyJNYsuVo3RwqYj8nngQZ7KQTmTqRfVRgTRt4W2CrdLH1p5BqVbC3xCv2MuMc",
  "key18": "5ycUqN1VHrfRFp9X8JQYAmyVYqsSGT8Z1Ha2Q9ibHJYakQkXDnwo93AnX5sp7vS3AcQovNq4C2GBXNdbx7va6xs3",
  "key19": "2K5UKi1DVoEad333hhoJddHEm56kqBCBfqEjNnptjAXBbqw9irjWwpSe2Xyk9XkA6T7JL5KLpSrMjh1m3TVW5eG",
  "key20": "5KgyacdoJJmraNnVZDVWCDH24iNxSVKXRXcj8Dr5Wt6sBkqoDeHtb4NHjF1hoH8tPWhKVPt4z9RhoVgrBpTjbeGh",
  "key21": "63kHfgjmwBc6hLj6hNR3HyPX5egrcfFFMkzAdeWWpeoG2giWrz45dDpsQF6AWf4zcprxYCE2fasEh1jW11izEF85",
  "key22": "5BmcrTRH9bEnZvdbbtd4TjB24nSTLG1j3ubZZctEMeBq6orzrox6oNfvt5KBLMiSonPitsZwm32WnvFCunfy3Rxk",
  "key23": "4cPTn5YWNPdfKi1NdfaCZfxjZvhk4Lp9B2EhtHM5nUPLTrdE4fXsPC2pLiD1eH48dyhHouFWqynhGmQjttGswZcK",
  "key24": "4m7FN8uR8dREbRuWtLceVMLGFWtmYzh6udfB23RoaM7TAjE5Sybz33C4PfrwJLtkguEWJ8y2MXmGeZjcoA5JqFs9",
  "key25": "7mrLSQdxTKYnpVLQgYuQKWJhRweVMh367LMN27gd38FZ92TboNvWyGY95BipPzd3WJpjBcu3QZFu3sqiyw9p4LD",
  "key26": "3mFmZhoiUjKvS6975J9tZ3k6D141B3UEvoG9qqpbS6m8PC2T1XLQ2U2SnqXJqXvrSgk2Rbzfu2zdGpTnHyQc2J7v"
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
