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
    "4EboEC9gNGYtAjcRq1megx7ANtScR15DYtNoYJPDrGTZJWXn37HeUfbGNG8ARfndYLuJoMacvVFisVnSTTBxdKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TyhxXPDnKrqFgYaYD7jk5QjC8BHEuJGsZgQRyeCXU5ftULn9B5oBhC8yT8qY9fp1HbhPMSty5y1g4pRkWudN5br",
  "key1": "GdKfJdeqFBkaDrMtRUL4yxDHJg2ARpHFKDWs7Yp9UKFj5NSTCtqpcWXMMbKrsPGS8ewN9nbBNsTGbSuDHmPQA2S",
  "key2": "2imvPfaVVU4JKjuRtmiCk9beSMu4j7hsZTZsbVX3UA7BVf5M7YwnkYZXmrzvJwED7xXr7Tw2svQsys2SitihWzQB",
  "key3": "4rMdMqmxB8bLyjTGP1V9GdSGskZB8v5sE4m1tzwk4yCo3QPafscNzbyad5jWK6UQGzRLgR7E6gs76mpHz7opEmhE",
  "key4": "5PXZQbZhx2TejCGTqPe2C6gAuuwgmdPufiisJq9DN6mxDPgbHXMhzi3C7R3mCavFnecMJXvptQHCVFXVWAUCygWP",
  "key5": "3f7Z3XvgqpNxXKJcTjKx4Kj2aMeNhnhaJDWTCFAabK84SauieibzeejizccbKhYcB3L85MYJBHfUUNm2xiKEyDsK",
  "key6": "8RudSU3q6A215MXWm8cno4kEiLhK1wVrZ6TWzHQM8rHmyBNUVc39azdJ2uLrCLfiJ3TJk96hSBZtiAW77CiFpje",
  "key7": "3qRDJzFdU8fAKE9AW6N9he1QfgoETpUmbRLMVGBKqRbvSYd6tdMkYrzX8oN2cwnKMkxodhkLZ3tcdhhjZSfrhU4E",
  "key8": "4xx5Wmeq9KcN6MLRgGP1CrmXn5EvcRzfGpnkpJPCY5mkRdiJssTnL6WEtBjGiUwmqVW5kQgqBj1qHLCvksaLm7vB",
  "key9": "DnPYEuBMAG7qJbMEpVLSc1N6AGYcVrCGtCAwFgQ3AbeQpT3QXim8TduXB5ez6CQ4dWhEF98KDVpxtCNUw5qeSJg",
  "key10": "kjqrpkNh1PBCP8drQ2cxLjazm4BC1fEPfeENkfXWynBTggmhQXWCqmpY6bXdL1xmUToFb1NSNEapUvN72dq2Fq3",
  "key11": "5VhCdzxoKESAn837BZ9PcYYHiG5TqT8QTdwUGr8iSqzokiDT9X12GzFRs2BAPsagZyFFLufv3AVDRG73rfy2oB1w",
  "key12": "31H7ENeEf6x9eWdDNuW6EQ6m6XYb4uAzS5joipNw7WdzWKUgYpziRyAWQHLcswPpEcQJHnPXqKqBRyJwL1DEQCyN",
  "key13": "1c5J1YM1G1LMmCSecWx2qMLmKqExYqS96cDq8NPBLJJ6XDR3Zi3psuDoZKZWugxi5ZBhchiEocFquuJeDxrz5Lo",
  "key14": "4q27Sb6d5ucX1SCLqvLacm9A355bPBLT6H4knM3wHw719jHKoxpV6HVMy4Bpka6PYVnTg5p1DZprv2ZjFfVGYj1X",
  "key15": "XATpe4d7kRqGmEYCVZFiXXc61XUg84JQAw15Y2m7M6AVx3yPKstqHcAKXEyw4fmKorqQsgS6yC2QqCRKELRfoCp",
  "key16": "4HXZCTS15XKhbYN2HNQtGUvYbNHhjenyuLwuHn95xmgfUkrBRwGnTXd32FaaWDGzaFpNyJQShHJXXTriqFvYsKHK",
  "key17": "5Lodfp1biLjm7otC3zNSqaogPxoBAUhi7aeV6fRCMMVGUckYU5hGqfEQomDp9MhcMjnMyy1a1tf4E13kPeqkg2Yz",
  "key18": "4oCEFDNzNpY9eiDYnREKV6hE17FatMowsXqcDgAMufVkGcf4TBhsn7WfDjpuZvoX2nVjambnygNo9Yw1q1fKs3vB",
  "key19": "4zsW8oKFib1fmnnsqD3jNa89SRGD8ecmecLzrxpPTR4LpnonpDf24LBkPTZdzw5V7xncVY9AvFSKmwB6pRGWAiie",
  "key20": "2Dthjm9CxvFzcdZhG8MBG35HHBCGB81G2sjfuFMPFqPjaLVLazhbb5g2L4Z7gzopgvARSHGf8jnB111EFNhwoaFP",
  "key21": "ugvoZKzh5fXuysVBreJQJhTf1Bkp2nRi1vSoBy8Pn5Zgqa4wzz5foAnMp26FScueM9ECQb7ooPxgtottAk2gekH",
  "key22": "5EdcvP8mnxaKpPLHqa9Bvs7CT5NTGd9Q9wEex2eoPw179u78ExKE5fX9p9azqDi2hbPaeYRpAqkmkTzAzmE49CrT",
  "key23": "8WdvJAuDoJX3agdjxZbV1us3efU5ULGkM2DuP5UpEUCcgXWwYX9gC62872NCUYRX7wWb7s6z6ecN2UaEqqEDhqr",
  "key24": "35nE5paVQD4FHyjonSiqNkRes3jhn2XfiLg3xpPVwex8YuBe4yjRA9XMYLDrq3EbVqoKu5fRBPUrWdbXAyFFrF2V",
  "key25": "eWhK9cLoYXt4bgiQuanjioem2kcMXNfFMZ89LyX1nP72BuE1acFbw3U2Xp7DdKsge2aJZrnzX3H7PuzgzDwfB4E",
  "key26": "3BUqJwye15xAvp9DJDapCZpPbsnYXSR2qYUQiDMTeBtrG4aG9i5MdZPca6VMU37EAnsCitKJx6du852SxPu463cd",
  "key27": "4Q7VyNzTWgVMPDETChGhF5c4djRayb9eTpbwCJEXZUDH6U6ntaeDmEW2hLGPqXiMX7DZXjJHfHWkuK1LbXYmxDaD",
  "key28": "2Umx6KkverTRanWwkA2z7kkXACvH8hJXdrRKDF46wPXj97bKSAaNJqDfkpDLgR9AE3uQp5ww7x7kozpW3fpyQSd",
  "key29": "5fxEysdbGTZLGNPtLkZAuD5dn9foj9UYabiX5bndXKTA4kyFB6XPyw7stiuZQAF7GtQoEJEWPGpRsT378p49dTQB",
  "key30": "4vjkD7pe8cCv6f4sDbB6L6ZhVRKH36sRVa545urW9FZfMLdV1M3eZhrhjHmY594dCLpEHKfo6xsU1v9Ydzr9Pk1r",
  "key31": "vgBJBWM12Z3DNVT5pK45Kta9CR9YU1rRhwm4F8BUJe77NSo6zYuL3VWHyVTojgi4yWYvhCZWGw6jRLQj6mDmiPV",
  "key32": "2cgFwN3NWWkXX2KDhCa2cH7wGeywoywKsP3SKKEfpJaeTmBDo7WppZn7UVrnmH31nZsZQXXKRtJqdqBPcQ9tAiGy",
  "key33": "5YdSvz3ebCcApNLDapMHPLnoRBSaX3R1kWTqrSjh977fd1eDo7ACdbmdU2M4wHM3Exy77HN9vVa9datYAhduMjTi",
  "key34": "3cW675MBYrYXYw1ZvT4Bu8jTZg643BSN9ZVDCpYE3USwYVGXqusw2KchnBvdCzBnV1RYEY4mPxDGDdRwzKbAXcCG",
  "key35": "4ajoohPEokx4bL2HwwcJuAPfwthYkkzogTUmZQUUBdsYsxwjSK8wVvBEK74VSQecfeUcdgH8YF8eMRDQUjmf9fAw",
  "key36": "335RQhS1HWh7wGQwD7naRL5DomrozhSyMs9QP4ejwZb2FU2AAKrjwb2hf4tL59Ahy53CmmowQWGTjyYyBxghzv8z",
  "key37": "4oeRyTzaUcf9jkdPHEjo97m8PYExFCABq8pHDhYeUCEdHXQnzRGYPzGkACCsTcWzCUAnqa7d8ZKhiUtx2pK9fxtg",
  "key38": "zda2E3Zh8rHZk4RqaWGkFvosQoHZJ9tYidqySi3CZUaFmrt9qrckavz5jeKXXJ4m69Uscmujfu8SpMf6anpMAwK",
  "key39": "ta4vjUNHTWqaFhx1X6FsAc4Am1X3TUMqWnuyejFRhFpf93vcoJ7cEYu7imK61ddf1fPis3KCtwzaCsFrFAbuUpS",
  "key40": "5EHhjk9zNha741wqTJfzfBztBX1DQV8DCZ3dQc3ieLiGAouMm29V34YHVVWDREFwEmLjd2KXVhEN13CGUNcjPexp",
  "key41": "m5kzUxfLcbeKftnSnxrbWghiLnf1JBeRRnTyWXAUdPLZyLCSqfBY1X8LDjy6TAf4Q7S6wAqohNcxyJ7U9UunRVo",
  "key42": "5AYovdteSbDBKJexorNFc8CiLcggUd5dANRM8i4gmsj5yVxtJCxZfzbQBR3TBBRrPaDPqU9gMA9P59uqqJNrHSAt",
  "key43": "4z2rhdSVqPtr7QZTxXk2MhHfBCc3RytrVE3j7y9H8yWnmwHiJnYBKXABrc5AJ71us5xgftDWc5eJXYXnSVFgZDor",
  "key44": "33u69aDy1CkML8qPM9Yie4n286f9Crm5RDGWGAqvKtkd6QpPRuyA1RGoxYiU45mM23vFZRpCMdfKAiaHTjv4tXww",
  "key45": "5ARsAbgr85vCvXy7drWcir45zR9VsiGjorYd1oXFWRvoA6RTHwpgG5Wg4YwkkgKS9xc9GRhXR6ygYwMSeDXutXqE",
  "key46": "2nfv4r17soGEV5VUGQmrEwgzc6MuU4b8PB9s8TkjmdURGc9GDpcSwSuoLzFihyYHcKQMhKKJCY2iLixbxKSmvHtY",
  "key47": "3FUQEXdoXpHQXaw99gMRcdkpHEM5E6QQdd8dcuhwAJfPTwsUV4mBfNqLvh7aiWuHkCjr2ktniwgc5n9m8HwU785V",
  "key48": "DAgQ5YDZ7tawXkWGwMzakUJ4Tt7cMtcVUzzqL2Mav1hjWb7RvTrZCkJVFFHdjiuDmzYTcpHtjghpGQhs9T3UYRD"
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
