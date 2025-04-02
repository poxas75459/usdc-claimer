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
    "3C2vVWHDdRZ3ndoTWbeVMNq6LsRfk5PXAR7Q1TzajzuR1GjRpnk4t1EdngbP84Yf66oEaJVuiaHWXgZCseuyaZaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2REnFyFew9UTtfx6EafsaEty95szGQPqm8wZYsBwFBdco5iRNe5AWWkGoEHzHMGPq3pRs7eWKZVvv8P29KYw82",
  "key1": "bRUtFiG3nCftUF3b3qk2yFWmv7tyvHVPyFJxnR5qsj2tppFSURVsiPksY1RMeYF4qaqupaAyyP1XQh9Xeh391nx",
  "key2": "45wC3xmzLD88RhWATWNMCH2NqDTR2ZVcHFhugVkBfNBcxr7j99oztDd9fZQwZN77RkDGj9b76Z9u7GLu9BVaTaPy",
  "key3": "5ZDCjVx1rsVHbYRpDCFXQU93tBKHuf4PFv5P4HWfD5m7EWA9joWVMSwx4inJGbbkqmTccg9uVEzj3AqShj1SUANs",
  "key4": "33A1fMwVtUkx4xCggJe2ucddpuLBjebNGej9D1Dm3YApQdWnzpniftbyRvgqTpbGkivwRAm7gcFhVnaezuGrb4Ln",
  "key5": "3fM6RZWyx2TFQVLdaUffJ12yAyWfTSEtEtHbnfeVZaiAY3tgMVbYJBmkp7EauE3ZK22NvCyB1mPZ7fRQbL5GATin",
  "key6": "3d239hQd65WkbHaYxPnrZAaSKQ3GBPhqpfdJxMpuMvjK8ZPBuYRJGZHgy9zPyB6zGE6SDuCQwDxfwYU9QfYBE82z",
  "key7": "3w8LDXsGw7Ft2uqoD4LeZ4pxmfW9vZPwR5HAYzMSaN1QnQ2HbSo49bWww32S8bZxGhY1VB16C5nesDD3KiNkNteQ",
  "key8": "5ZPq3LtTSsxKHnqh5sjUSQURhXCsDNYVn2ZhQzUAaiTah8khrqjr4zwNcd2BG526qiWrgpZLcHTXBGvGbWUgwowy",
  "key9": "HX2H2mRhyiJMrjpFWAjsoaw46sJHBWHexqAFz19hkRGFAcsZM8Tc4NT1NYQ3we54Z2bArDX31SXzt9JSJCSV628",
  "key10": "5DgSSqY6TMDySzL7hPEJCLHazxVYYNBG4hpTensXQaxSdg2VjngzmA2Jc2uV1j8JQfnX8FxSD8VBMxFVP63RjyEq",
  "key11": "3yAcqYMSvyw9bG5zReGgyrZojSjuxmkn9b35VeQcMHYLwaQeA4452XwXiqre1hrLAYtknKEYU63pzdqS5Vchk7PM",
  "key12": "PA6JpS76a9mLsnDRFqtBuUTKPerQTManXJm1ucHyC1XVWgb9t6anSHfb9EsQr3kLtqwTp5kz7BAoMDjoLt3xX8L",
  "key13": "4kYCyKmW45bytC87h53G2zEwkdpnoQ26EarVrb5vUJddjJyREkohSEaJbadzn6f3f3CYQ3uonVdBQ4iTcWBLQsHK",
  "key14": "dq51wE1q1f8Htsvqgiz9hfP5xJcLtanmKGgSmENoxQiNZMLXzmiWGiU3vWizg6Z25HXfKfHuWPKSL6Rx1mpNdbu",
  "key15": "2b9SjjZr7hV8XWnggixo1Jm2w9wsKt5o2CjEshFCkhZiagvcptqteyKuNJQ8MgdrHK3JzLuZatPFVQWDjZFyG8jS",
  "key16": "2wxXcVDSszsoYoxPC1zRwQLQbkn8tAWiJqi2DTJePS3yMvSzh6Yzf9wgdNDYeijXiLeLGBPJChqEvk3d8QUs6gU2",
  "key17": "37y1BdascBRNT6q6YJCRu8NbihyUg2VrcwEiwyUqAupoB9PSu4EFuZ76Uij7HYER2WWgCKaiYTEsnbeCQqh1xM9P",
  "key18": "4V5xRYxBzZ9oE2agJiH29YskbTxFSyxsnnbii12fFj8vgScfohejuNFoiEqcAbPWpYnspicwc5GtL8pb82E18Rd3",
  "key19": "2pN4wqtEP4wFZT14aHpv68aLRfHcgGgNjoJ6GzWicnvxtmx3wrhLmiSVVfAn2izVhhVzRqdnYYztYTE57WcqjQGN",
  "key20": "2Tc995WXdfKxdARx35vLKnms6YBpbx7hdpoNEce5wsV1A3RmXm35CCB5q1KgiomtxxJoNUQ4kdfk2yRiFkxx44bx",
  "key21": "XL7CPauu3nSnRf3Mj4kwYBHQWKZ8gWmhSdDBk2LBeEhW8DJq3VuBV7b6crboQsCHofjEqwGicCqUcjZdQx1VY5d",
  "key22": "48dfy2g638T6te9849z8cqJg3Wr9Z8wcdc9zXqEpK1roqeT4avrSH2Z9U7sxpF59oJzZMJiF7Jb64YDCjeNAWeDf",
  "key23": "3iv26hzjBG9uXFHu24XRLoXgW8eJSQ4kPKckYzKFyQHLn3ZGc47U7fWexLuwKvhqLHJH7ckwaFx2NqNounWWQUZ6",
  "key24": "3krNrSR7EPJ1oLyb4ZAVcjLhM2Uja4wCXdYKEA6WsFSsLf4pBpnSamYy6frgoYqq5YHogZsgtaaESNCSQpS1HMwJ",
  "key25": "2vCLcw1EnbbiddzZEqd8on6MGVYLZcQ3veicEkSWanUoQ1WwfZnfdSmN8hEj5UdNRZtJxnLcw2Kv2pfHbhbwYVc3",
  "key26": "9Fqkaqg8QhJtJvJwGoFzw55S27j81GhjcVVPe6wbXUyZKWpi4dHS3ab7WgfhT45Vm6a7ti8Eua9S1YCaBUFucSb",
  "key27": "3y2KzaywpDssMzKeJyointqFgEjXkU9R5DJRjjbBKoNcaSE5anDj2G9y2Chs9G1FHwhZ87Trt6CuSBsSKKRwB2PJ",
  "key28": "4SpRxDURDEMb8XYfptVebwDUB9y6NepsHxNrbCSdiyJnrrRD7V399jcB6Rou8j8px5wA8bSyRfWFuatoHQcBbRyv",
  "key29": "2A184o68PN3V7XZf168NcJMEPLnBDiYFwfaENazk3Pvy9JNBKcvBMz5eY69UUWZN8wChGhMKb6a2PH9pKzY3B8g6",
  "key30": "4ucvPDdphbE9vpAvBhtAsQLStcwwtg9p1UXPdVgc7YM4CB8sKxcJYidNXCW6i79p8rg8Y7EgvB19kGRQ7cqTKJN7",
  "key31": "663SygvH53BEZX9rx4cW87pBDFSW74j4Scc3FqWEvxZSJoA3wZTsSZXiQ3wUopDPfcmYd3PpzjZTqpYiU5rhfcDL",
  "key32": "27tCMFi1bBfhpNk8wf7UjDNbZmFYTPbGvmp5PKgppQZMxbuLTwdeG9DG2w685WvPGaYY2ZoonJffofFFLoiuuUqT",
  "key33": "5W1LEU5m1hNsZUHQFteSTkSnQjNMoWWfNsyg4BRA7E97SLJctrBpxTMJVvAhALDBHhV1ENKNMmvSokNxxG9WkKCb",
  "key34": "5dcZQckXQDexS79EiCk6BiPGMMLFu3xmsYSiahnQYQ6mdeJEQnM1Qwq4ijw7efkR93AERpGcZ12VTSc6P1WpKqru"
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
