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
    "24HoJ2xYU81aqGJA9ynZe4jNFHf6JKEaVLiUsA4KSxknNdxTnMeGDS1PodvMXve8L8MmHEvrAGrUAEaJURfF91ET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TstVYBG9tDxEC3TbJRuUYhbyyvT2jaVrau1pr9xT8iZPGdwFM5zbXR3YD1bBWzc6iapej4hMDUN1o2qw1CnK6fL",
  "key1": "CSbyGY7XyiDb5pjH4VYTNxgUEoexSfKpwuxEcNP4PHMSTdcXXhQ3NcxeRq8bmfXniD6UxaREaH1wCVn9xjPHUVt",
  "key2": "3QumxsrJoS2DUugovtvgt2hFJHFXDw3fFJ1mMcLy4ikXcgvFvHJYtfRLQfq3rihndLoPtVEz6jScjommH8kBALdE",
  "key3": "4LQWGzquBSvkZkumgc9S1RSUa3RpxftRa8xxTPwkgir9kYaNFkYVUnRXsA5tQeaNkfx8pHNN6gGvzgZWefZatN8c",
  "key4": "Emwn8uh71LzBR7ASpvaPZAru26NWUyDVFXcfKQKtTEVqswEFUv9aBX1CDmqTMfLekEtrch8C5UsQ3TzMRrrANMc",
  "key5": "2cSxkPMGCUq51BBxgSNaGGoQG4yzQ2M7BK57xEdfwFDcxQB71RukTKifchGnC7R95wiKgyLgqJ89W5Gn2T2qCctV",
  "key6": "42HN4MetZz3AW3cap91hRWWSvzwFkExnBCbbo2eLSBHWGuca9Lk6CA66KC87kfCffvtbwgea8fRc5v5CszR3mZxB",
  "key7": "2VsaU611KWfCbZo3ecgSJHE9m96o7dgaizxmNW336bANgt8rpe8Xjj1g5LRp8kpkHDriF3RWNWeHzDrWgZvkRkW8",
  "key8": "5htNyUGZ8DeUyvM14kEh4fXG4ugnN2NU913AtKVoLaipnTK26usiYBMMYc8enddp4RG1e63PdHb91QsQVebJvxuC",
  "key9": "2JZEBpHtWc5Vrhi9ot9awFi32wVQiByxFjKDioGYM9AtLedQc8TUVRvx7z1Y3CvBUu1G1rT4QoXRUHbzGUMY6XCU",
  "key10": "2ECW1UpD7i7ACMecWszNZFzMwAyrD4wkGudKbJdZVduQZygj5UgUWG6XMsSXV2EbbdtyjcPqVgfrheHcM16fvHD6",
  "key11": "2Rp6J8ZYXXFwVDgz2iB5KiMtMtvYvGoXhS4mP4aERuBybqyxHwhWucWJBz93JBY2jWr39tjbnT4J8NZ4ngvFnMHn",
  "key12": "3XBecoBg56R2MaM94coe5UP57hEbzs5eBq4yCoHge6szAhfLxVVEFLHV5rpbbxLAM3j5pTBgRFEehp6tottmGPxP",
  "key13": "3aGt7tEgd1ieWew9DSGJR8Zhy837CCSKwh3wDNWunAsUUHjWvmSictwRoqyhZtY3RsrtE5EE3nKwMVmmTTowznL6",
  "key14": "2mJe6kHNN6FGpi6V4z8TYmqs48rqKCtZPDJskHh71fmo31aUwSiK9q19PnREJATcp2uXpz1z11x83uUUxhM1eTfo",
  "key15": "2UtbRKBG1eV7HgVaKUA8X1HfNwbYb6chGgajJ56j7asEfofokZcmUTJfcmvpQtsUdgkpgCh22h7yuWQFbHdFmZ4a",
  "key16": "2BqdUirhmgTbSitA2Dhhwfi5i3cVGHzJbE1QyHj7fKi5yKbRz3Gmu8BCM5XT5mqnZbmzsPwoEQsuV9xPDpPpmQdP",
  "key17": "5fB6YuBaqB5L8Lei1FJPSRkoX9rux1ZhRojviDPiEH9WTkn15cY5NmppbkyHyE1TbqJF3xdmabyHndL4hnMxxwoy",
  "key18": "3CHCLdxKJcFCv5H7fdjeAp48JGw9JEQyNKYn6BS7mZZTdyg97bNnYSnXgRKiEZC4oqhfdnoQBgnYHXNRz5L6Wwgc",
  "key19": "4XfgCJGGK2DWVhW88MfeEGo1YT97ZjoygqjnvwpKpkeLzCpPaJyfCEy5GrJZ83rbmVdA1gVhAeEPUAcANC4RVL8S",
  "key20": "28zQfAoxSGUPfiDaG3h8uNckpgonNvFzAugZiwckn2uncWuDzycFcmyFuFmmZYrpXFR9s2P5C2uvKXHjijAABMrZ",
  "key21": "5kbv7AonowZheenLdSSYnAx5S22Xf4fHXryQbWpQCc7fuVdXKS4Xu2nhsVEbWuvR5KpPXmU1sELLDef2AXvVufNH",
  "key22": "3QuPT4MP956sJG8Y9ZWVQSXGQHEEov2Cj5KvST8oaohN6wAbhSWWyuMPw7mwWi7GfNYfMiz22iMmEnhHngAxLTAT",
  "key23": "3FBs8UsyVc6FphSSu4orWFLj2Khh4Bxh4n26geuuge2wnB2dtpDKUiGnnaoGQahAMfndYeEmC4BUWhyDxgVbANX4",
  "key24": "343VZSXEJK6pogmoMQffwcqz3ReyrN2jkEbNpPB3wYxU9AmnzpShZoBsx8ep1EMZEC2h3bMFyNrJwYKuV68RKLvM",
  "key25": "3j5P8hhjDLxZtXi172xiCZEevH3XQURC2ct2XPnDJcCWbG3f7PAnwXZGGqSPtEpDwjhRuejsv1UBB9NRVsx8FVvS",
  "key26": "eizFf6NvsfKUc4sai4tryGTsHyf4EQrAgVeSmjtNWWT2fGBWvYfgGsVxLgQwQUfGCsVN42a8SZXWbPJwvjEn8NY",
  "key27": "3peHUiXq1PqVPupgKd32EQyEUBZGvNuZckmvkd2R7vN2jha33vqfDs8UYzRYYvB4dpR9T175NdkWzMJYLygNSCMF",
  "key28": "2bKZKfi1onKT2f4MC8fJ7DFZEVg2Z9mhoYBNNfp3E3at5FCnKNLjXrC2TZXZz2E9HbTSqdKrR7Jj6xmmi1D8jN4x",
  "key29": "44kbp49ujEsVy4TozcNk4akg7kjZL9tYmJe3kUbsCHBX94KSEufJdJwKrEjmMFnLVEZcxojUSumNjsR6XQZ3CGak",
  "key30": "65wQdLN5S9DNcUDsGP75RabTpu6SiugG4RT8Lrh7ZedjSu8GsAiveykVfKFFBEHHqEZ9QNJGsRWwnmaujfiNFVhE",
  "key31": "3smaHZRvM6QzASZ9gBa7XikjcekBtWXoXxCtrq6bKGRTFyoTkDK7ehgmzkikevMKcFkPt8d33yaVB7DZeX72FPzJ",
  "key32": "5wjVGV9vKeTouiXNkJMsWFgjvfYw1puagEPVn8rhhCF5u5knKUyFyGNGJhd1AqrqW4mvySnj6rCCvWzmZz5xaeBZ",
  "key33": "Bx1qw4Go515MpVyZcKUYGES5kPNiSHkJQd1cPVB1oKbNgEpnKDaiMzKQcXbNM5Qhd8ZLdJNX2FaCBte54hb8Ko7",
  "key34": "3nKiawU8WTrjftEqw24YZHCYP8HmqESKguB7df9hyY4o39VS73gjptRiu7DKNDKu9PzNiYVATG1BbvFwCgdJFMkG",
  "key35": "TuWhBPcqbv1RTP7WwXe7mgQ6AHC5W8CuVJnJ43a8fCRpZcfLuZZYQe8oDrAVBYb2mjmR5VZ377tLEwwYL5cpm3S",
  "key36": "2riJkgQ9GUHXJtY6u4R4MrF69xVZ87vqVRPxTTSWQwauvgYnP5HW3dG4dZudH7NUSNNx9RR8QqjtdQ89i26KY9kL",
  "key37": "2Tgp4acuGGvfTVj1oEv7HRZx6r4ZQJ42NfvzZNGrAc2AwxwbPgbQBTZR61HHw6eYwnjgQoGNezwhRBYdoJUSgK29",
  "key38": "28MYiT9o5ydLMRyy7Zhky5sJryScPjgYK7hEJEgfQV1NqfMsZ7cdN43MVtCAX243xHaZT9X9A8EnanTKa4CHBsDg",
  "key39": "3MNdBsob8rE9e9LneJY8AVWa9D3TxCT7yDcmMFS1s7rknTb6iC7HgRu6YTa7ryhuMWa32mRRyJ1FDnAekjJoTDa2",
  "key40": "pW5Yc6GDXxniWDYW3eAzzrdtKrgwyF31iMMzcBzeEA8pvjiUgSCoL36aG9KoTTVGGzrPm7gYdB51PLRqoZyvhVc",
  "key41": "2nuDGuZn4YERcrcG8CFAcsYdoCH4rZZNUVtDFPrvMmZTieXAf2p7m1zahhxejt37SYWZvqBg2RKvnUKyTNNGEBEL",
  "key42": "2vFY228N37o6PD7oVFZwWmXNQYKzgLa1Gn9eXhuAkq6gpNvcxtQ89ggWAPaJmtjqAc1jd8BwjbZdfA8LLLrn9jbV",
  "key43": "qc3NA8AtVu9TDqv6wdvKWspVKh3CmBZSYcR5G3D4f3PTte9MRTjmYpB9ATNzv1H3YSNjQkJQxFzWPg773nBeRAp",
  "key44": "psMUuqRpHXzWaGG2XbuJwqwXtwPVoDLHe6vV6QFArgSrRjtBctRyLSGVaiPXWtQQSaoyiPrwefSghnKsCq6DrDZ",
  "key45": "2azqUzjesgP7h41bKXhZVjkVoP1kH937qsxrzYj53WMqpSEkj5xxUCZX1c3NcLaNchWcPsYBTj6Av7TktfhDz4n2",
  "key46": "WmNWscL9SWwYnUA8jYE8LsGkX8fty1igS92TGHTZXhXoStAXBvUTLnFcmnEtiZLjgJ845VJWDN4RatWwNEiyDiD",
  "key47": "3hL29TmpWzpUrjwZCQGC6oDS21hhmbufinGQ54dpXmwh3VZhgF2mK2Rif1Q3hr5NpU8hkxFkzXFZEBXzqpgjQCjR",
  "key48": "4ERUxqKHrBxjjanorgR1a5nYaAat41Mu3qdSk6u6KGspf4Chp6KevhRXztvd3k3wTCYhRN5MAr2qXQjk4DCEhv7W"
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
