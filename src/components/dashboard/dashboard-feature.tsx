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
    "2DPyeqhh15wvr7E6cDY4tvLQWVwBL5mYao5h9y8FbgPUK2yf9rcysabQDDpnxgqGyQe1nRe25ujqB9jDkNXPfv5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKmR7gp9G3nEyxy6JFpz635YTkamwHTo8Nyga8azB6qeeYAsQZsRTGLrDb3q4GHdsPkztQjQPmKCUVXH5nydHnz",
  "key1": "62HGFq4AkDD3pqGQGmWiMFwL6FBSFZm7STnE36MgT3NKeFcDxJGzHsFJmRRCi1Gco2mcHJYaCa71QosJdknCKRLb",
  "key2": "2SitU9u1knURhaePk1vxfu1nRea6MmoGfdQZrhojH5vHdn4qwjcobzm4kkybMFRKsv7ALwsCDy63x1YxiiYMwQDS",
  "key3": "3Kdsy1XquJWbu9kfkDic7UvmjKEgV7U7aFtfE8FWmjWdmLabTAq9cXvYbxmn4Vc5Jy3gKFJKHAPHBFAAdWAMaqqS",
  "key4": "3JvCVmqgoopFo6RZYZmmJt3HLRvdGVAjYFgQmoHtrpDmnFJC4coQvybrxyV6QhaEkjS4gfXaonQbjqrzDvfu8sQ4",
  "key5": "3PDwskU5DFe3dxsKD1M7mzCTTQoypnVMwvFDMaNqAatkbp5HzfaXDv2VusdWxGravuhQ2Td1XcGEWXkAGzwLMq4n",
  "key6": "3VS4HhyTNfPHarh8Ld7FgfPLVzdJfp4PpfsWmQMcYxtcP2x81iHgg4Q5dzWwrikGEFtnm4JEQYjkQTSLWYHAiEL4",
  "key7": "2H5HDoa7y1yuJySQUjXeLjN9S9hazLDVUTDNgc4SaJWfqty8oyhLXFSd6EiRAfm8B3jTK3PYbMCgXpPi3UZqJWUQ",
  "key8": "3DeYxTJ94q8TXw3yVHJ3ASDFN41XLg8xWo16ZaHfzhFsuJYaiyMNxJGvZPfaaZKQw4RVtK4da9XUGQs13WXPsbNe",
  "key9": "zYKEWFCZcS9BJwHTaTrsPf3XNaeZvrzTwR7JtNFT8SLZ2XGXhaG3KEqUySPLHjPBwwNVAkknidMZ1Eap9kUPyB4",
  "key10": "8dwfuDt2GH5oxVGhipBVAzGZU1w4iWtDVWbi3FeRymWZFYjoj3F1xKeJUbJMFUf5aFJydASAGNjmipNemc7dMZ3",
  "key11": "4Pm9Dw7dMC699EqkTU6D51iFLHhJaE8EV3kyCQvaKjASBDm4bmLWAQ3Wo61ysqeTcmMRcfhygWhdsk5jEuLoDheV",
  "key12": "4ZyXHZBumNtQz2DpARjV717346jfwWsBsqenn2jjcdXj1LmkYbjdXy4VeLicCF23v3WCpD6c6EDREzKWWWBtrfPs",
  "key13": "1PUDRq95BWW45nWRpXHxYW4D9FzLaSF7zQ9Xa6Zepp1iE9WoBsap2x9JJ3PiubcrZ4g3gw6ptfxdHQsCHVqARD9",
  "key14": "2VrBkX7APA7WucrzAKqgXqjxwckkr8xYEPqvCdFj13QMPBn6rh9Myhi1nBYuAgPx4d3sGEoDCTyr4RYcFGnGhs4e",
  "key15": "4cgLbgDATGH52A7vied2niBBX8tXBfgd2G1buq1ZL7RRvcG3C2GKwRTn7CVKkJarhnQErYTDtmAEiHsQH5SWGx4U",
  "key16": "2VHD1avmD7254vpw1fahiZxpvpm2JbDHjdNWPDhmQwZJPvT811Nf8YPwKr2gMYv6ndKNmRXJd2yRvQpYdBjnMc7X",
  "key17": "2tfLzJEMAiamujshBjDM7zCQAo8cms2Jx6wmE81bfXmg7ixzVCHNsJXxa2Ss29DxBjCBLPSXA7W8VwtmDZfqYEq6",
  "key18": "36nmbgKQG2fBDTix1EJtz4mTujNrcG7o32J5QiHDUX4EasQWh8oDdDehUKYRipUaitx9fkbwpNomB7MqL25giW2h",
  "key19": "4ercAdKkXi1MRNrGWU5TxsmabUe1VzHcthApXxyDwLt8Emq6mwLjpQtwZb3XL1ypE34unBPBvTrqmorzrzpdtUZm",
  "key20": "5nx17SJR9AYBcG5wgarYCLYnZ2aThUHuzcFMFTcNYMow4ZgTMuZPzE85VKDodwbqTcafytshCvJR2Bq6ka5o4NDs",
  "key21": "2b5Yj23DgJqJbtLzAwTxs2HmqkxyH6ijnLrkeSx3hSkzFvHvMWgDVTC1wkL9Pufoq6wNgY54iCk74KAREMjSq9AG",
  "key22": "5iT5AGNyqQ3Uw5DnztKnyvyHh6UgfHvQiV8Da2vLoLxc78trHvZryq9pFVdCC6ZvTWWwJBjKhrAyfdy6MypubYAW",
  "key23": "3WAFXgPcbyUfV55W5fprnMECmxtTKwRZJ5ZfWSN7H9Ga57ydT7vBVVt2pgy7ByS2VkKSwmt96dp5xbgjujXKB3hK",
  "key24": "44Y3381EQxojT3acNXCjCTvgQXd9dp9sXqWK5EmvhDEMqkRcggneU4ZYc7EL1WmrtLHi3V2x7JzuhLDM95i9Qe93",
  "key25": "4LS2RakCpQQw6YQLYf1zFr4qq71M6ADNHbW79hpoFLpTf7tBZXF8CjxLkbB91zw8LwoQhkRpS6o64XCJfNLRHgSS",
  "key26": "4HxAQmamCukDxEZ7Jm4RzL7PtxN2rR4jUpzhMK7E4VGMGgB312zpHaHCeY3o2sfZMs5qnfBR525rHU8CF8bSiL1R",
  "key27": "qo2u42cR1wh1e1kYfWCmct5bANFkbkaXg5Q9No5kZRxxKXuqfYo3rpU6LhvXgijj7zgxLYsYH8jh74fR6b5bQZ1",
  "key28": "2rF7hTj5PrNskBUwRVYumWAmNpBYh3dDDLcWukGHDQgd3SCQif9e32LaS2tNoey78tDgR9JZRSuALRwJpSgU32E3",
  "key29": "124oZepcL1Mp4VxnvHyRn4MKz1ukyw4HvYrtUa4pedPHnzr5mGo6WZfXg2Ue4bosF7ejiHTEWypbhwWpQs6dS6zU",
  "key30": "5CLzhNZaiug7awsGoXdZ8SYgoyw8av8KFX5ANUJ5e32wDZMezHgpUYMSNsXr1DjzkwsLFef4pBwxGeLo68icgxYo",
  "key31": "2H1z14XHVCY2mEMudj9UGwzKBfXdYtFba4HvScKY5uKSGGhbmYgRz5KtnDB2LHsBH3NwrFn5un8pcTFYHuexSqW",
  "key32": "cCG6Km6R1PcSFczREwiBYVPWvoWRssya5habLy1bzTp4pXzdbDAGtVKZnZDPnvKrdWMa49ht9aYwbFSVAqgR8NE",
  "key33": "3qYkNN3Smmtdm77Ubquk16CswwWLu4TEY32UgHaKAJs3qo9xqDQko1ToLMDFpqhnpPjRgWitNRQoNUw8zcY677e",
  "key34": "26itQjVhHsD2bLvvQAN1dJLKAzBVZAvkxbW2haqBpRr7oMk4bxakqMziLQkzqgCRY1NBubU6kRrJXQhegYRBDBZJ",
  "key35": "WmMaDB7Ck9UVAPLdX2Njqpozb7oxiFv2h32K1fERN1tkC3Enr1iiMfkL6po2qFywXrMg3KPPuhKqwDTcNUPUkW6",
  "key36": "567HXtbAYUZqmRKmh8z6XBa1XuoHZ1pubkXqrJBKCKwN4F4UuUuxBSQ5HiWNK2r7hztia1sxfkK7WnoUReaSHSX3",
  "key37": "4DcVH6wBhyaaJpepucSgXsFAHFDKPaGY366SgJBiYqJ76TbK8dXD7KvXhWpc31544bWhZcmmixMuftz276S5FQyk",
  "key38": "2A3WftF7qUcY6BvFip4r6BPMZ5rn77ksQhFUd1L6vdAeK24tux87VAkGXr6qsjGrF8Z1zvkK9uPqAKXLPiTEuqZo"
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
