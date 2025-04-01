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
    "4zoPEJBPKeYAwQ58vcp8q8K1a5Dy5wEBdQaNzZzCyjv6JH6J5yAt2GguiMpasPcispmW9Roq1J4W6GjjdPFJ3ZJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qcAEX7BkaGm9XSQkwjsQjpyvi8RfBqQs4wTKJhLJztELCdPJnRy667TFP7LXdrMU4fnAKA3ohSUYdNvQurUxVjF",
  "key1": "3uTgoAVHeA1WBkRLHcmxsDySMNRt2YVgYP4e39ydfrUbfKiP7fHwy4iMkvkqBpACJQjq486123L7Ja8vpyEV6hjX",
  "key2": "3fRmP1Koom8Kr2tGqQCc33rfaeT32BWGYdxMYQAzZBzcTWMsgELQb5SkEDSjnDvd49jTd7z59i2fY4BJUa9xTVSu",
  "key3": "kvtVLuVUHhqDf1xr5zEX5HWXsHXcz6fGt1cXMiVvwQwR29a6jL3BGkujL42prWNdtfnqFVkPWgMuXG6xQLLcg52",
  "key4": "2E5qAR7jYpBbhQ1K9a8e4ndc5UjDLgft2G2PHaaHuc81TpMZVQpWGK6T38RsLgR7HErahwqvzwbbpRzxCQje37n9",
  "key5": "27XeGDhGcdcoitzLymoqp2UgTyzJJQLoyFSn5zoj22kqThcEe2mSQA7Q7kxfXtjJcAtAEMoLuytPtRFTQRoWhKob",
  "key6": "gKW3ghGQwe2AygpSBP5CG5eATdYEr9LsRwksA2vQJfNURk2wjxc9jL4twFCARcvjWN5Rm5Rfu3eU3CbzTLB2pBj",
  "key7": "27dQE6DoNUWm4L7bxdkGZY67HQkFJEeXM1ihWoNekQXmYrc5kfvnzYcGbdKv6EANE1qqqpBSyoZeHWGMAHojGkyU",
  "key8": "fz2FWPdyc2EQmNu9VWPaPSkYKVFAoKGYY5rRwbJfQp29HA6gx3UFPkEZCSQrULsQTsMBr79kpmhbogWWtfwLrDA",
  "key9": "48wEnQVeJrGoNJNsKm8iyKFZuGj3Ru4TU8VCPbXGms2111rVbU71Xvsawj1WnrhSn75MJxLrZ9fFxpZd8Ui3sYVN",
  "key10": "31DKas4dNakuyNiixYYEJQ7HQ4WJc6WJbVQV3zRH5DUM8vrb44WDu9JU56svCZ4rfbVd64wGbyzcta1xGy3ymTJu",
  "key11": "3xHA6mWgpxqPRtToLGZJgBrTQXqrRQ8cpxNJeGGnZP2qUspzDZYHyCyTVSa5oZrzwESQdwMVJytdA6FLwSVm2u4n",
  "key12": "4pMnbvH5uiV3UJadedVkKCiDbwvDUViaasv1agcqFEyuw4qErMByBo3wqBN8PJWXdzkJ5Xwi9UvFMAExVbeioCvY",
  "key13": "5n26uHTNQp8qUk4ELxR5v9UWnp6KsGEBNP2u7iNtCA38Dmd6Um1FRidus69U1KzqFZHP9jeax7XLan7FVN2Te5Lg",
  "key14": "3DiH45EmTwNQpgJAaQDAQE2iuLM7fwL4kjzSKdAcLa9MGpeZvhaq2sXohQuc4GXooLF79wcQH78MmD3GvmFRmpwp",
  "key15": "2ipbwbuhQKhHKNkcm1Uq7Bq45gS11xH8kjMzTwcL6NqG8QUwomDm6tePwb3npKrLPJBhzwnpx2Ahinw9paCQYWbW",
  "key16": "tkqr5B5rQsim8LQbGxbnJfPZ1JPgKb3NYZX4mXKXjhE9JS3uzF2osLbzYeMjrn1zteGkhxSuRbE2CpczfUB6JaF",
  "key17": "sgAGQcoReEuXC9NUdEzznCvQLob7KkKJoSyjNEcsDrbJ8piu4h5V3sQvCiCozPVi7u6TCkFE37L22GTVZ66WkCQ",
  "key18": "3XqU64mptZXcMxddtUf8gd62cwMFFYbagDiKzkASda2r9c9v5xbT5LXJb817xih6SywBBWcE6KXb37fKuHSeTVQ8",
  "key19": "3bp5JMtNnxQQc5rS1b8FhAShDFaR5raEahrxCY7t5WEnKwwa6wpAvijX9EVGDeYphKEqtHTHiwWN3NtyHGH5Qeg4",
  "key20": "4U9YZnfVdPZ19CD62MbBsULf6NC4TZvTPAcX11mHcBUFJuejDRyg8G4AJaq5BoukyFysSK8d2JpKDCDsTfTTWchT",
  "key21": "aHQTwAorwKRW4X5HMqbN5DzPnpuKB3VNM3FKiG1wV3tViDBtqhvSC23KtD7x2Mjfsq6qwmnqDPcUf8r8RoukAC3",
  "key22": "4pAhYBxqSRLLCRxUxvc9Lsdky3UfzmtWzAF4fvtCQnPzE5YpDSfsY1C8HJSqRPLiyjkZweSSpwdYqX19sFV1s3uP",
  "key23": "4z42G6eWoBYmZnFt7aZ61jhGbrA9t7dGNmCPspj1A26tXeSDsEXeAaRd5urPLbYb9WkrocvjDyu3yaTdeDQYKZrg",
  "key24": "5abnbFURRyVp9sZrWvq4MbpaJKwTgcQsdsCPZc8EBGVP7jZcaHS2JTDXzKeu3KKnBEoA9zvzZqqfLTc7W9THjYW",
  "key25": "4mkS6Mhcjf6bsKSFMnrdPwmdZYdtN3JLjr3Um6CUEAULhyz5PCCWinujYDkzhjHJ81SNSxtSxkRYDSqAGj2gayT6",
  "key26": "eRYzBZhQnnW1VSKAykjvb9vo1oHtgDwSh9qyccbBxgecvsPv1yxEF7CN3q7vTdQjMKCzqaswk4NaSPtLK2tPQXa",
  "key27": "4aHBZCeY2UWr22juYza3UTna8h2aMoLXnyaHXQeueBzE5kQpoXFvHjHgqF6FECgqxSGmgc6FsiRidopSLYbSzNGy",
  "key28": "41Y6PxPomwv1tguXrkCUnk4t8MpTYzQDbEDy4Nbfm9svsa9iXKLPG4LczVcp55KRorhadqRNhC55mj16SspXukbS",
  "key29": "2yvYaqDRXPSaZkzAUVU9pkLzi2eybBo17Do7Ro51kNWafdWJHr2W2BE8xhZgYMrNfvCEYregY8v6PLZfH6yBEwgD",
  "key30": "9e8SQ3u1gJGGCgNvp6EqnR7WWKNLsngm6BvHXfc9B9jCEggga46TXUZhN88WEU5EMJu8skk3hsx4toNDFk3r6bN",
  "key31": "4yRYqFqHVzR6eq1ULQsjprcYy7d8GLnqYPFMFRoyhbqmGFszzNro2iRSBb58tS5xDMyfKD2ruPTS4TpFVjAdQBdM",
  "key32": "5aLn6Vks99v7LKoazs29Bkf24ddexufUvYQFazntkKEmWUmughdegUNKbthhxwp3CPtYkxUrrrn97s6iRXfm1cW7",
  "key33": "2LYntPwXqHnuZSaUetaVNCi2yyDUokL4aDyRmggoxJcq7k6CW7AerXnMGoPxXX6F8smqm6fRqffey56FGCubkLHs",
  "key34": "f5AGye28TPcTHgBiVyeSyHoMK9kbs28Vw2sztq3JuiMxEVy1LUqGCMzfEtzCsnxum4p233CyLCrwBCMuNE7PgwB",
  "key35": "46hXhvauyTozHu6mjqwumUKMVmCjELpFEcba2s4uD7TTdFyeDsZUM4eTbNbzrVELScSDC62Xb2tTHUkev5RPP3wf",
  "key36": "4CsA1TWMUQKRgPDbDjVZugM5QMwACA3t5d6wDzBAwiD1UritD3w9iE8R9hELHD1YfH5QmYaupSuj32can4br8zcy",
  "key37": "5e92LQWmvvuALeo4CXtobowqpvSU8PUw54y5PSw1exx64DmJZT7DqatStvDi8zbnK5rgrDHkyJEFAs2WS4pht7Fw",
  "key38": "2LKPZseJeeGukturyEhxX8KxzUAoaLQHFdSiKty8KLcN1CouWhGWN2BEbYNFJVeUvhRtXBd2Thn4ADLyPJccHn99",
  "key39": "3ZE86WLthCL5x8va1gY47aJsvzwXZ6aDJzUzJ1S5Qb5N5Eu5fbWEbWxZorG95N5GpcrwbJYkiy4F828T9meRSiGX",
  "key40": "2LMsKnR1CaCq6EP2ccpSEcCq54pXASC8k147NzmaTSAp8TUuK6m3jdKn5cg8nkdYU2XhjKPi2TvASQ919RTqkENp",
  "key41": "5kNYk22j1SQtFQpwQfQaUYjWXsUXQq5YT7CQwKTuAyKSkdoL3eo1rC8kMkbitm27cPJNSPofsvLxXKNyhmftW8oT",
  "key42": "5X76vY2Veb8oT1WTfHG4TbfU83RQ7ci1JuQnyamBTCMw2SN9SiLuXT5KLVCXCv4F1Xcjhm5fu2UcRFSbHVGZkV3H"
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
