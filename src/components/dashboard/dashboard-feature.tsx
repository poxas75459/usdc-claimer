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
    "2skxxfj8dL9u2aPdaRru23QiZpGDWJq8L4bmdKJdiKWG5D1PDtm9R84HhnuvKQP7gsM2ZugBPS7xjtmiucMDqYXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313fTjpGqwmtJicGEVksEv9YqPaoUZixAWadYFQLnA3oux13Pym7uspE7dmusvafKS37UphsigbeHV1GTf5f2WWf",
  "key1": "3w2RPAQAfsPzBshHBYuNVnvjZ2mUpqtnzzgJbvCahDAq8aPx37yt9ASPcreRoqKdss1oQV6vFPuNafhhVqfdNzS6",
  "key2": "3Jp97E2BKYju8rCEmZGzaR2muJazUribaovmUZA9KynwraNTXgHEMPVqwHZcQsPNG7yfuTzvZjd3wpTpmQswQtKg",
  "key3": "39xgwRfc9U954Pe7i68ojxKUY5CuLb3he9sDUyohgUquaDuoUgW9xaWaPGKQCo1JCJDCHnkjrF7LmQC2YEQ233Uf",
  "key4": "3cxFKtdQ21vFVbVdLRGrn5UESoLsknFQx159qHHNYYom8XixuGaumbeqMSQ4PSfoM18hiLJUNKHXh2MgBjgj6A63",
  "key5": "32s9KGCBFn26hNGWQt918cm4TpteVAzC9REjAh6WCBdadXexkzLBEQroBpxBa3TYNsWo8WuLuzjExVAJ6a7fPmKU",
  "key6": "3SZsu5kNUecqGx9D48jk4roWxxonGQ661gc9u3ZUh6aupJ1EX85gMT9J8hs2RDQ4QDKCRExEC81cKPHn3gCGnNFp",
  "key7": "2V2X6AVdiZoizRivmyRv6F7cbEPZqtwEkt3TC82uMec4rKg9TK3cEtRnUECpaQsuK5UMSbngZxUWX9nBBsJYKA6X",
  "key8": "45eVWV9oUMkxunyHESviaEAyiFxsKuvUx4vyey7RWBUvZUTuoF5fQ3QBj5KKr6iYHYjwEDwpa1BjeGzofp7NEHLB",
  "key9": "CYeaYb5oR5ZgHs2nTbtCSnXbRa5rysQcu9DEE5p8imJZqCe2UZDHmTyigpauHMUHNoVh11ge9FQBbjEXk4jsNzf",
  "key10": "g2ZJDusKP86eKhRqAKy5NMKUDM94CdhE71jvw2nYyw58T2EPMQhx8GxpfvFUQm72C5rGCjtxwTAcF4iG3AMSJXN",
  "key11": "4YsnfpgHnm7G3Uon3N44wh3CEda6VeWfbECSmfC9xUcazXEDph1xwVqHu4jiKV6xTw8pHujHWkq9vUfGaf2LzkXi",
  "key12": "54oZFTvimVtooUD8V84XYCPow1RS2mQpeZA7145Xh54Jo1fqWiV7XdhhofXGNmztk6mx7psKu6qu6eFDgCPn45KG",
  "key13": "28tBTrYXwPi4QrSdi8JXwrNb81ubYAVeH34fBZVVTsUSeJWzUyGqpRSs3ta8qiQwaEneyPFwKwpwJ3muy1iCZdVo",
  "key14": "2RGqk6DDhaVj8uuVfBiApSHHkKXTNbaejZCviRd4n9omXhFGAgvCZyttp6zRByynyWdL5LfyD24XGvzadhbKu4HA",
  "key15": "5mZyXKpB6s2NFH3PJBNrrGJfCu4cwH5wSfC6YoqkaS1YfTgbfvReto9cWuAiACP2QHUyKobcpWrRq4ZQFrA6zDva",
  "key16": "wKmS9AinM3hakaqi3aXxvGqLSDfecrudUNfhXGHejQXFnQnz1dMTYUYaS93MLgyesf31PzTjTARS7Cr6YuvpMtd",
  "key17": "TJfeDsrP6tk6FvJgi23n1kMDYBEh3UqggyLXKCiVKzKVLM3nvc2E89EKPm8jSLczRdoyFhA2X4pM7C3UQ3Vb3kB",
  "key18": "nL5jmtxS46wjgainvsahynC29itUEU4G6Fp2depk3UWpediWFdfeU7xJC2dGcEywtXDw8EaoJJ8ZrVieFqSFnxj",
  "key19": "5GZk3Zg8MD1pQn3JkxanJbKVEbVVLGepDT8uJWrrpdgbBJn9cQ2DES3yKXeT5UkM7dxhHY5uBMLRa6yZCpKKb5Nq",
  "key20": "3eya3HuU3Ug2M5iE1AEhjbnxGEDegUSGXFKywb8S2urhhUU4e8T6Hhd2mZQqYpurUybVWGTkVdL8FVA62NKyched",
  "key21": "UGV8YaoEV4VFtaaRvKLqY8Kx8T7fTn4DiPqugijJgEbS3HaMKGEGYyPWUZQJXU9xKSLix6L9x7cWBFunYfVAoDU",
  "key22": "3toDjk4bzEta5ZVvd7tHsAkzn1mwRjUiFd4YTmBMy5z9DUwVRqeFfrqFwZyxGoML2cxaq5TJZecMULp1hEwSwg7h",
  "key23": "yS2kz9caUq6Qs5WPtoBXqyYFXKfUDRTa1vamiu11X5vX2triyB3S34yJAhvuUcnJTvdyNJttXwsvsnKZkj8kvT8",
  "key24": "muL1KTM4FCxng5zPreDvbS1Tqg1hyeKYM3zTHsfcQVD85jzjC7ekE7m73954wHqAtrw2coezgT6dxssTN1gaBjN",
  "key25": "4kcsohfPSS1gHpTL2qwusCbRSGuhy3efc47uK7mgnNZB65WrMuyqPQ2b6N5J3f8avonkpE6HN5VSBVfHVvUqvChu",
  "key26": "3n4iqZgAjg2teGbb1F8gV4ieWE8DeS1CMn4XHpWNYFKscTqrEzWLdNb1EoiM2o7LXqivCzzaGZn3QziinRLXooFy",
  "key27": "5bKJN4oSWjBz5rFHK7bbf2Pm2TWYh1J2gB8n7T8bjFBerrUG89RT2P56Jf9p9Ax4XwR1Vbgin5TSE11xtW9AjJaA",
  "key28": "a1XkmRmj2MK8DUQmSZmG7daYWrJx8XsgkUQ43iDVjeHC8L8UpywcoVGVKn1erTB2JAu6A2zTDPRLfrP6pdiPfXb",
  "key29": "2Wn9URbYx6oXd8zUtdKC74WbUhgmUpaoN8yJ2mNhQ9GaJ3VJtFtknoyZGsPvqLFsYv6aiqqhYausqJBxTHGvSTob",
  "key30": "5ajcG768SHRjwVejwbYH1MXtG8ZFn7piZ6WR9Lb4uobe5uvgCkx2UTDaFEUSszxr11iiHr1dDKZHUmtCML5U4xdf",
  "key31": "4Qgc3fexsc1AauxbVsPrYPVogYSx33TQ8abEsbgajwmTTZtfXVrardw2sEEffbdfxK934nL9dnpnfQin8Y6RnzuL",
  "key32": "5Lkc38ZVxFkQfwZmNF9Sr1F6pLdW2icowKbiEtG9piFAnqhUYjttZH5pfa5KHSEWhhw4Xs1EHKLc6riFH47AUsgp",
  "key33": "E4zZw6KwioMnpTm6LUi27k7fJPzWthE81PdrBzyx5EraoUeH8o6tdY3UEJdCkmW4DyTRBKYQE6CchWEaQD5M11T",
  "key34": "2hyLENGFTx18mpy2ZbY2vauM1mj1f36HB66y162Z6zNwGmSiqaPLptZKmne8KbKGXui91vnKDPuUeB5ySV231zPW",
  "key35": "2RBKzp26yXXWXyvxet885erKupUJan4Y8GstTzbanfm9qR3FUbPxz8T2dUuRihLUiQ6Xbx8qxjwSgtY4CLKje8C5",
  "key36": "4ykisGD7rqYqCtRST7Xwzd3Rm7cyL9Ah73GrQ6oWDCiTUjkp8rBJocVGF2uFzVyns7AQvezAuFpy8uaqLpiMpA8R",
  "key37": "5hrBFue9sLbz6ZsBE3y3Xk37BP9uBGt9aAVEk5rvdfwmhJ5Qm1QZV9m67BeqSRbokRuaFUPsvgnDViW4h6voZjYf",
  "key38": "617pqSWvy5ZdCS2PjJEdpBUECrf3fwLnC8vHZe5eCSPZ7x7FsdyGMBrcbpEKNjx7UNECPAfSM4axXgQeik8g4Hs6"
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
