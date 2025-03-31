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
    "2jaeuA15B9TUMueWxHSnYqmsxCeGqYYLfwrV7HfaLGhTgLqsYppVGW6a3mBUimU4VXEJstoWGAMbrbRtYXe9eXNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63PsnyS6gkXeuqB9GTEqkefbckmpBMqS4e4tiVz2ZvDMgQvz7nBDgNaqzUMx66F9sycq96Lms968WRBG5smgioCn",
  "key1": "NDAoLhWA9ix3GCSTCfse8Bbm92cXJR2RHJx1DKxb6yFDFbHck5P9xQ42w8SoBmqw5iTMiPNpZLXuH8kMA4GT8yn",
  "key2": "3ArHdo8bqn2aPcEnunRZ8woFYHSTaWjxnLaEmNdELwkEopi41YgwRU53W8Y2Ceeuj9B4LRjTUPzqiWxncs6wtXsS",
  "key3": "4ZcCbsz5sMxFW8ZFpfeuLDztJpczq5hrCMrna8MFJpcTmoAbA94kZAzt1cVh7CeUs8FSZeXQMUWSH2iPLbhUkNTw",
  "key4": "2gf4avFcQjDaJbN7eZB58XF3mJ9rFrS7oC3Wxsc1jcqo6PRkFYzJpfo9xoZHXKj2bgeBUPqPMbRXpdxhEmLx4h6H",
  "key5": "2RtseBcf6fpMZzYoQbDjwsW4TkFrw2hnGcAYyyKdkGGzFDTBeukBQBXDa6Di4B2MADRdGf2eej3kevJTi73TYkes",
  "key6": "2eKG9CYDCurwQN9VCMwkg2TrHvKbtrEt3RgRKG1Ai483PpDg6n4wxbimaBW4V3SMzLwmBgFRLQvXJk1hPdK476ww",
  "key7": "3uvYmuwCMkhqN12SxhikZiJjTp3dyALCPQVraacDqpN4N4NmR46iTuYtyYq537dWRA33XrxHu8qTbNa2B6ry6Z6D",
  "key8": "cGAucQ7hWp5nRzhosFwZj6qP1ppk6ULJrSrkB5xjqNBg7pmBKdmvmdzbSAYcmEU9LUnzErUwEov3CBHjt6wEABs",
  "key9": "3gzEAzgxi5L9Q4qizTUbc9VK1cPBbDujaHyEQbwzWeDGRnaTjAHEMVrLDoTHi8ZxDN2wJsfBB3cbXTYw3ywQ5nnz",
  "key10": "65fZwDAN3qN5E4hCZAs5RxeJDTwdBvbHJc7iEU462qLdTEvp4GUFKmwdLbRNhBBG8EqwAaTwSTK2YZvWKWHTw8x3",
  "key11": "393KTM8Xf6veZ1sT45tsdNsuF5DCsmgWp2sPvJk7y83BZo2DjYq1c1ZTpVpksMibyvpLC7puQhUhwJd9vtXMVBuL",
  "key12": "3heyL9PKezzuudDKAJdBrmo54AhzvLf9K2TmSE6unEqnD8srw1YgiB3yJnzEiH368d2cHSBUpHFPj8q8j9qVsBcL",
  "key13": "334SYdf1guFMTqfRx9b6Yqp3FrEkdpB8p4L4yznSSNpjbAxmo6t1Kg7b2n8RJVEumk67wRBZ3gVKXdiniTV4h93y",
  "key14": "3hqByLpLhFzJxEcxXgPKMWWT55A2m1giaTi1xG9XjhX58qfnPjStZywoZAYSL3BGYd1SXJSyfQj9j2qFNgJJdeCo",
  "key15": "4hAtnVPd6TGCrj19okaSeThBzVDyVxvszS7PSEQChxLYutn1vYSiEGs5pq96F2SRfsKe5gAjWVpTMQBGRLMJxjNz",
  "key16": "5fCqHWjMBJ8Gp2khjo8TMpFvRKQqcL9GyGDjfdByF4URmjZmeBF42UA3TKzPBXGCZxy7rkihELKcm7EQrEjFrGL",
  "key17": "2kXHtBtxB7dvHyi6oeSzD6gk6YkuiAFiVS7PEYGjuNQwpahG641649Q435afVpeBXh13ZNn1478oy7fHHmB6sJs",
  "key18": "5ctzUezQTG27JwFFc73MpyhWUEXigpNURXLScK7m3M5V7tTzdbBz9Vx8HwE6mvNN6UxAhKqxTDw7oYxvZCeoNkLz",
  "key19": "5n6AFisjjoxgQqeB3zat34SLvVdpAksWiogwx1rU5mRYei5LaNTERpALCNSa5wWYEe5LpjL6GaPJiv2C3q7kKHgX",
  "key20": "33zw2dSHyYb5AJFbjGL1DNmsExVA2X3ySvbLCgG5YiwUUP8s3sBvhthMFCh63XqPHsVMtzEEms6hKUkZ6NNY2Xgv",
  "key21": "37BBgQvXqoCr5GX5CdR35e5KDTYGrtLUyg3mbSCfQrsR46VqxGhc4hTuU57rMWCpF73QJssrgfHDnZWyTffYiA8h",
  "key22": "3msquzjrXBif1V6hJNkmaHRYJ4M4MpZiQWiDcvR8VAX2b3GWvKfLPE5vZjdZyDWjSH1CcR4GzswaQT9793XS1XZ4",
  "key23": "cSob4hFUP6wtrKCSQTFMGz5tD9ktAvbSxQ9jT1kjT5phyBvPsLLzUVLH4UYor3A9RwTxqfXTzNUus1sr5Ed678B",
  "key24": "4zkbnenxo82Bj4XLfumR9T6GAXMWhi74efLDeb9yp14so73SbQhNAyiWEF7cSkuJU8Ho5iir3vmaEkSBdWNdkwwD",
  "key25": "4cwf8G1CrB449ox72bnVnsk6fJekdxdhoSnshhRcL2eKZ6iZ64qmnteMKNawsVTFLQxHz1yBSF243TT173LaHbad",
  "key26": "3GrCCDpevKFSFK9iwpx4gcy8rMJGHXPB4xGvk1oZ8N4M369dVFPaZzM8WzdjQr16apLy67QjKWhLYywfyyMEE5yr",
  "key27": "3Zw4RUp8N8mk8tM87xfHGdukuq1NGPdw7f1AtKUNpvyY2ippn9mzK12S1YbsVNbKwZGvHPLeoDH7Bqa6fuYbLkGM",
  "key28": "2WQXLZDBFWg5dHm625ueRFMZ9QAPanP7Mrz9fr2WM7U7PB1diLt4Jc9fbPms3KQjFYnCaapM23fabFvJQuBAq14d",
  "key29": "3KXWHwBkHM5SWianozcY2V2fw2yGEd41Kf2ZoMMEUmaRJiLJvK2TJFAyYcX5CYRhebpa2Q1G3ZS3LJtFu6gG3fSw",
  "key30": "3jzHnbANsoEXwqFzDXnBVLLFb3vNi6t3quFQrgJ7Ug7YgDtuhFGTbpwUbHjFc1EutH9J8zoHfPKFvbzA5RcoWK3H",
  "key31": "z5TJZTWYrWLTUckdhhz6Uo7fvCiQKjT7cxFjVX6u3xyJLgvjduu2CuuMth4DYak5ANiut229uGwEhSUavibTT8A",
  "key32": "4Ep3k3qc3vYsWnpZ7JWobShsHeDHxFD3fAz4krwy6r3otj5ypTC7uhcmkgJHwWSEM4bkXsvNN9suhyi46By33wf1",
  "key33": "5fdTg67aKszYgdBaVY5Qz9yH2w6DikzeYSU3JFXWpLkz7tUMuG9gpUrvxGJbcJt12nWVjD38PB6VdNmhjr7hg7jz"
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
