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
    "2ZnLEcAD7k9yi6Pu8ukpg8AUyhrPEYYST2cZjPn1X81uDGW4KV2H7ev1xePoqN217aEFjhYEGFarFTVW684JHv1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRhZArSW3NdHjvsw136ZxFxM3En7i8oNUsMKP5GxbUR4k6dgyeNhkFF51KtwGhqfCP6uG9QM7f7WmA81hzchb81",
  "key1": "3RXVA1svQSFXrJ4dsU7VJWapXnayCf8viYkJmifVpeebcpifqxMin2NXpu6qngd6hL3V8yHPZpdsucvsMfzqtg38",
  "key2": "2aFvpdMZEeiaJRiTEyGT12ukVZBYcMm2RZCnCK4ucTzdZCpiHoPQeCEKyj3ia4PfEQ2mhrCHPPpyXVrfujch1zaX",
  "key3": "4rdkJMW1jL7MjceuS59nmQg5HaXQgP5gT6YbfoXGDHiFxd7oe9r1voLzFuRvvn4bYCtV5Gr1AcogJ3YukQ3u1VfA",
  "key4": "3k9r7v5UTzF3k2SNbaSyQEJRmcp34QvkegxLdkPTQB1w7Rq5XVuramHeNZ4GkCS45vGiuGngsWCtSYx1eDYvvqAb",
  "key5": "21mMuXdmtD47YpCA3YNLSxWrQDACyoKwqwEQd7Z6T8g1BVc823RwYk6ScKJnbnBseCzTDkiXWEAx7fUBf5zD5iEU",
  "key6": "4rdH6v2shit6GMcE85t5Y8mfwK4NtwuF8ArdAMd1nGARY4az1rY8X2rxuM2rEC1si9mm4X5jASZXBhG8TjREiDzB",
  "key7": "138y6StG7Sdep9VSUxLRc3u9kixnJvyGrBGCUtUMNeeNLiwLrZeobX9HWEEieSbcVXtGpT3evPqNuhJSdW9EWRc",
  "key8": "rZN8HEFcA41mBykamgNPwbX4qLeFxo412caij83c3P8c9WJpuN6Axhz3MUTGQMNA52FbQx9UvmSRYGCHusVQHQZ",
  "key9": "4ovwxmjidhTjoRWBmap3vDZg4BByX7UAHEHh4UgRNR37LRgUXNyNaNyUqS5xXNBh6LWjLoGeSzfLwTnUvV7ais1F",
  "key10": "2sqUsc3YDgpVAp42zPP6DzLGyypmhtVuW57ypUeYwyhVk9BUFqXj7DjK3FESaSeMR9JGofrtkaMzyocGU53VikbB",
  "key11": "56fpZiudKyWiYYXZGESZNuiTabECbdWWo6nvLiVVRKWVA7VMakBnGgmCmkkbnrDkca3e9NE1Qzs1ekLsVxDoZZTq",
  "key12": "3HQM1X2rLNv4ftoM3o8MckAT7FH1FREMw9MFKBYQTAnPNEzos9MNwP2gWuok1f8N1yLt7qwwCLf9k63ABU9PUGuh",
  "key13": "4cijpRDDA54J7Q11ifJ1JoYiPyL6HAQNxcHpBpRVFakDG8NS2cxoD3YiHe592w7Qz1c8JfWY6JVQSntQZpUtmJaE",
  "key14": "53L3V4SjRs5do2LixyGUFBYa9T7vWnWBHFKZs25yVxP7jm9zqmV1Dz3jW5s815fYZsps243XSWMjEri1vW9PpdBT",
  "key15": "4G7Dn9dCL724okLRGuc6TS5CPLbiqibpVRNwPtBChyk6zgbgQmwAwHwb9qYQY3i1CcJLbqzJSUM2GTaAbceeMwde",
  "key16": "5dYS1sUEHPQejEVRr9RY4xdgAKe4mnfCqua8NQyq7wJXu73bmxwJA7Sfar8vf5NoHYFnFDRsWE1v3u71yTfqPLPF",
  "key17": "3w1m8ZwcKCFfQPGn8CfA5R29mhHtNFG3NTELYpZ6fiZn2StkLWLvhzWdBtnXcibqgBPoXhgiMZoaE9zTpb8tJ1fL",
  "key18": "7j47YQGiEPR7ExCR97jJU4g84RFfmw1Z4GgN2CoZXwrSo3XdmNTxx7swAdXUaHsswV8f7EZctPVVUtzHEPr4gjq",
  "key19": "2cxpoKmJbVQ3d46nVEgS7pWFLrExSJdGKGmBzVoH3WgiSMM1ueNcDPoJfD2A3A1eG8ULuHdicPH1zmDZCWMhBcQ1",
  "key20": "xTAZUguJ7pKNA34PFhBxzsRkbvW9nQDmC4ABVNwcoysyMiv4n6HzaxUQc1snHQzbPWGmXk4oxo3LcMCqzP2Ghe2",
  "key21": "5FPqt4duTQbYaNjWFETh3fh59VLh6ohZhXYQsnqAqsrHYCRoWbtqcPmnWvr1v2sCGD1T4Ny9muF3z7mYuYVJLT84",
  "key22": "49YHhiiVDwPZnxfjUTDDtdJ5LDpojuj9LBSvcn2J1Hk66HNyEXvqSoxixc2LLuaMQaHXzzcehayuxE9vmQd5w6Wp",
  "key23": "cXTMorU1pLmQ4npydiSAPRWEuEMY2KbgakwuKdtNvCwH3sbDc3VgtAzgFuCjEjgtMTQ2jPRjxQ3m66K77HrEdAV",
  "key24": "47beQvKskErHZuWrcFpgNsMDHcwu9fabV6zUUZB99FQX13xLYfJtVFPo8xVjXmVjFAfAYFJqpe2M9fR21K7gRucY",
  "key25": "5dgGwRSoF3fKFiy9tcfFEzJMv2m5q47PXY8VCegWZgKQ9uGrThesPCCPKWDUnLEMMziynzKhMWwsKpYxn12XsNKK",
  "key26": "33u4LjvQRgNHDEXkZvTF6KMGfAUNGoXUZef9tz25HRWaox1TeHSob5t8bE9s8bLYakWrcmvc7zDLLZYJubBw7Ng8",
  "key27": "5HVDCjvSb9gqhbBN4qRqaVBVFiW7wYeN75DW1DnhfbSp91NZb72os7MJe6iEAQsMt9714hAYV3jMiHkxw19HAXYt",
  "key28": "2w1Q4BXhc9h3qHZYxxAHQhBfzSdkBZgpLR9ZnqTjdwKPiFcvsXHZD4A8AsTu4BcBCWuB3x5HtwrJKS5TbURG3LdT",
  "key29": "1mR84kcxLeQGQWV2dcJTKS5iggmFKE89Pzbi2PaLY4rnmnUXbUXqkuKw5Yu43MHWpQMhYM7VkTEZm1Yguzuyyhj",
  "key30": "5MKJQxYvv96FNFXuFWKBpySgFXRDHo8jquEasS41tuZ9MmRPzuPVmGBLibJQb36WRKsL5KW91QCodyZsCygePjdw",
  "key31": "2GUEBE5NfnmV2Lm8GPM21g2H23rFYLJz5j3xcYhSgWRKPjWLny7h1hnWpH39Qpz5uTRTyXsxGdvnUcGH21vsRwsD",
  "key32": "2grBLDD3smkNEGaii1Zkabxw69H8bLxG9iEU1qbv7yfDzenYCEqAp4kSmhFTT8av1JbjmvxXFG9W23xwdxp71osq",
  "key33": "2C5WTrXxHCm8Zu7LXh6gLbRZK1xYs932YSMAKAQvusBjibZjhWDC5LLkuyoQcHoDQhQX4nostBvTpxZwpeVQv1mc"
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
