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
    "zogRjkEbLVjRLfoFLF2gNyGeR77dSJTR7MNSRuRUXskxFPqE71DBVV5QFuxSi8wTZymeEmdB5x4DYgiKSUxfLBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1cqhDWH5L2by8BV1BARTvRLrFfqTQ94cb3nqXCMxKPsvHqtzdYNDUkS8TA6xz7DSF6mtCnZUv2veioWia9ERh6",
  "key1": "JWCGmeNnthjc8F8EaKAjQGBVm7SuXdZXZxqkbYKVzGREDjftBy64RYF8LPvMzuFYUYh5wHLa4s9q1gRr5FkCF4C",
  "key2": "5WVJrdvVCAkTzfaEZevfyfvPRLyb5RJTnoiUFMqgSSNx5Lysys4XBRbEcrGgXKSEBLvqzvWzW5hr1a8sf2SMPc3c",
  "key3": "5D9hbumDvQzNNuDjpPK42AZgzSwdxGaHeCSXNm4y3NNBNZWoPFXEyFnkKjqF4UG2qb7GqJFwAosejHARsbYLMm8u",
  "key4": "5Vyiqb9QpEdUs4CkBAfhKdtp2jJtqS6HpUuKLUHLAZzsPpYsbWnNo1R17fyQCzuzCEcSqNdrVpPWAYTwQWgbZbNz",
  "key5": "2UYXGvRaUuSoKUt9mBCYPnYzuGuDQZnhmxfHjcAFzZPAHhKimi3wjw6LTdSiXiSDSNFY63JtbzeFvrXWSDgVg3mG",
  "key6": "2VdE8MbnXFAhRQKoWLhM7LhrfaqJWBCV5cDZxb5nmwneBpKkcSYeRa8jD5mdNwytd9kbN4Cthc7g6FoHH3vFT9RD",
  "key7": "4mRwHwh59mbTUXFJg3yEmKZ72AisJVi3ZuPBFqfdiAUmESL3VDWH8VSaVt4ngvLoJvc5cymuc29YA9svtpiEezTE",
  "key8": "5tUxc2Gf3teyGEhsxGM9y7ACwA6Fj9wpqTUpkgxu1tSE3ogUXZeXXGMmCGCPVPe8jtZsZGZCkrzRMNxsqz3Bdjwo",
  "key9": "4Xjrjyze1j4ircSeiKZtdSW1adLxuXZDyBtrSWk4g4GKZ6cPjoGTc5AuWrhzQtLQ65GofEEcMSDN4LTUBY6aKAaa",
  "key10": "5wSdH73AkyS3aVKJDaqrDVfCnGrdMorHtF6jzwuuUHxwmZJsD4mrCHWZaDgLTXVK9wDJWRbRpvAAJRHvWy3HjoJz",
  "key11": "3WoojZgzRj6GCmCm6KuiTxeC9cboaYNExCbTrTmBBPwcBptzWVudDGkHJ4FLrbZDQ6QeNWhryNQyRaHpgdpHP2bi",
  "key12": "5ctziSmhy3aVqoeFGHf7a331dtqqMFEbNTsSysSaeGLxcyVRdbWMZJfU4HQtJKeEBm6hKpW99Bx1gTstue3STJog",
  "key13": "3mkWX1LQFswsGiPQC6kNd2J7J5fYk3RnMYhtRUtxMa8tEqwAPVT2N7Xzj5NWpSaKmTnYh88pLYzFwbYCsSwmw1Rg",
  "key14": "vdbVxZxwr5d4BW8qqYvQbN6f1fc5iECsWnPchdSoUMyLrHQCopHBSDN4kPHJxpN4EPAa71D4WgFAk9Lj8eCKHvk",
  "key15": "5bQHRak3CD4bst4fmcGDmMxhf6Ke9Fhmsi4Vo9g7F7pbuVKazryFtoLbVYaMDYb2KRCxPHro8Cot3iLhpVuvj2ZF",
  "key16": "3sa9yoDmgYZJPzJqxDbRr5gjuY6E9pSwshX9yrp361grrbe3WgdfjnMCwiRT4aDJGsvFks9QfdEbqabUKCWALAyK",
  "key17": "67GP1urazFvSaVXBRTe3f1WPZox4SV2tSmXpCYX1hCHrxCsbb4tpvQcKZiG1WTCyv6pkSZ8qcyEjKE2pMTUfKucR",
  "key18": "5txumsFcYCNQ6VNHS4NQubm1iynhVKJe9tfk3d5Qg6Qdva4MjeF2o4y6fTH4ycQk7RNXCV364cn99kjsZBZx6XjA",
  "key19": "2VWhHMjNWhaaJPq27yMk2UuwBUB7YNr5MPR3Aww6TLMDo3rjDAVnYMG7EKEMqZUxL38TcK3BXUo22HChvrJM4mDk",
  "key20": "55rMuoyutYWMWtAvm33QW89oEQaT3LqH4rx5zYo9EL6r5RdgR5PMAPcP69CmNbjX6twWsiNwpBjXauZ7N7geyb6u",
  "key21": "2q4ndQU55MLqT3wuP4KMd3WqdBG5t78rp7RyeQfJvm8vGbrS6boexfwzm9qqCosQbtNKqk5FZ7sMK6hJXo6CmQt7",
  "key22": "2RQm2wq81WQURN6s7cmmKw5S3ee6BGVAVqZ4ninAnmxuGmPTuT2c11WHaAJSU1y6c4fg2wHbzSmosRkz75i1gbJj",
  "key23": "wKAvuTnGUGmr28yRJaWMoRPbRoNyoC14SeQEHGk3cNZvhN6F578f8hppTbK6cGp2yMq7XPAakqETrgSA3jEmYSy",
  "key24": "88XXcXpQ4AcETf5D2raxtJMdoMzXEMxfiWegZu6587CxbddeM2X6VKhqzRLBfFf3NLXYi9pAFKQ46PU8jkUjJiW",
  "key25": "2syFqDbxpPHVwn5pXCkjB22odfMuMKgL5n7iYXHEdDFyrpVJ5f5Q1u2RDf1BCoRM2SWc4qGPKX7f3oVGoK8Ss2qX",
  "key26": "4YrMz7jYEtgSvKzbd9AEBgpGhpuf6z1Y9SCZBx9G4A5LvHrYWu2767KSjcJip1ac4z4EB9PCJYzmZNCuk7JXnqvk",
  "key27": "2dYTMYtATHBocANuwG5x52XT9AyhyfzrGyBUAga9XY9wS2uyawfgLsLj5Am1friScoTAz26YcDwgUa6X1nPi4HR2",
  "key28": "KkgmRRCnfrKiQsxrzHUwxWS7B5rzjHB6BNmTj6nXHshERWQGuvJEQmUubNrvSZsMSPirMC12TsLHanjZJzEzaHC",
  "key29": "2K2wVJqiJHJy3UQsGvgdKGEcDq4vfLd8ej2hVq11d7dL4tHoAaW7DMuCXMBhSsr8pTxiBR4m9heCzBKRMa7oaaVk",
  "key30": "4C2qSnzfewB5Q6niT9H6G289yq5JWm4be4Juphdxvt9CVq6YXoNW79JWYFeVjy7Hk5AzskRseLvgXNswmRAnbBXi",
  "key31": "6QvCKo9NUyz7RiGyNdguzBgsEUAaJvE55VDB4TMv2tCSHBJeC3UZVFDYN71NsHRyfmxAjf5C9UmpayJ4Jjnw8Ym",
  "key32": "3kx6fJafVEbe5sRUeqnZzE6DP9duPgsDVdVUppTAC8nSPuBjB3kBsEFJEpZZPVDxZSc3dp8DvmGZ2ARVZVvkf8Se",
  "key33": "2pM3wacr8hspXVymcmHVUKXM7oh43HyzCrex22KNUbf6hUUWJy9V6wTPuomJvqcb2RGnu4pxPzH5iupGYxE8E1TV",
  "key34": "2HJjCmk8dHXPj3euYMmLXeb2qbUjX6LBenwZ3GZENZf97h4hE6hzD8DsDZr1Rj4npntkThHkn7ecepZohdCUn9NL",
  "key35": "3d4PEnqbRJXu6896dssptdkwJgxDYjLkPh3JB1kk2Krmy5J25hCXaw7drKhi6xbuaafj7VP3yBV58t3oc2Kj5Yvt",
  "key36": "4T8YDDXHCJm5qH5k2XX7oNc1J76BQDbbaFD7HcJzLdpD6JGY4Pjwq8omKi4ymsgouSqTkyoQAJ151xTXbKL5WHVW"
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
