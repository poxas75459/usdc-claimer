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
    "4p3Mda5v8dJ3i4TCMsKDmWYqTanMKcofhcZe5jj1n6a9iPqU16cg7RDtriPU4p6nkiUmtxxGw2zpjKAMisMTwAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PiMyE3Zhn5VZXf6Gz4D5pEEuHa9MuhDrq6yqtELKyxA3AqjLeKJS53iixvEzsu8jBfj2GXzKfJURxRuW6k6nn7Q",
  "key1": "nVxMKjDcRza2awRR6kKzBwaZ5m6MQdfKEaEswLGQ2AGFgYh81bja7UNWi9owXDr9u4m42xJiELgjfJQs9iHBury",
  "key2": "5SKYJ8wT7djv9L9UCC6XQeq89tWU6F5hU9nwhgENA5vQPpaoPZfPjBbeWMWDZRY8XnwP74v336apwcQsCjCrnX1Z",
  "key3": "4NTgiTLJ3TFgKUeaYMWXZsBnM7AgT3w7XK4DHjjr2zRXMsunazzwa4ESXBpqYgTxT8tBibRqsDbHadzqMU6sJA5j",
  "key4": "mWngPnKku1x9dNUAcdqvj6jqAFUsoEdoLsDiV4My3ALTjksuq4Czk8ZNqvTXhxqHnYUo3qrJU2gSe6N2TEYvnEf",
  "key5": "pcFm3C2VM9vgk2zBrAFowxcMUvUiYkUSwPFRKpcbrspHAkD8R3DzM1z9zpC8m4nvKHrokg7nMX579VVL98HLVwV",
  "key6": "3yzDMrNdwvgNwyJUdoCsvnHMrottp3aJJ4hiwBTqvZdUsAE2rJn1u41gnkspxLmXtwh5JYiHbgJ2nBnvsoRvNvHU",
  "key7": "42RwwZ5VXpB7K7nugSm8D5mEyDmrBUSahrT6ncfmSswZzQqJJm53KSKW94KXGHmxRveQTiy3eCjR5mkN5RU39D3c",
  "key8": "9gieDeb9ctneu2jEBMiEnAsURorKqe7EBERjNCqrDNWyVXUMRmXYebeVLhoTzTga4iLfDff8LCv17BDv5x8d5RZ",
  "key9": "4VwcCa2Ajb7g8RcvKwzzTJ3DXXxoxkWAs8w6tx7xP1hkr8ERvLtG1indXkNRy8R1GDwM5WwckVzTHTm9v66KtLz",
  "key10": "3oSK1BLSMbScfZFbdfB3DoyotLjZ9AdqZe4gF92KW4NefodBXMrQKb5pzYfuFgb1rscw6XpRZXRcEy7KbP5vM2TN",
  "key11": "QFWhtS1bD3ZFBJHtK2BqSV9gfaLjUD3HTzCzTag7DbymXMPDaFXdqdSpiJc7rEhrg6B2bUXKyKcdZxjh7eRwiRA",
  "key12": "2Wq796kUBZp3AH1zBJ15ZYZuY9EJLaeUTuyBYd42ASzQNtPP4L5twF67JymwTWqsiCShVoWV4DQMCGu78ZeENqh9",
  "key13": "4UCJpyFeLQyLdXdKcK66iqQAuYaSo1bxQLNViopzT1jj4GJMEXEou45HmHv9EVhgSSAtkFXe8WVv5DsxXz7D3QqK",
  "key14": "2UNhgKZY2eGPSgWTHRHNTQEvK5QMgfK2wKBXgCMFozjGWZXdXXDouEWMadJoG2ijAp2gGwEKFrLR2CBdSzxcQnSZ",
  "key15": "3wbU48dyGyJMP9LT6nvW5LN5sy62LaYpHYrQnQow9D46CnB2WdatgVQz15pgsVtTr5DWLTT1sKZ2BXDbjXFNfNkU",
  "key16": "5Tk3VMtFN2iF6N4nxt5NXYbPrgifButo2gjuDoQLXhE1Hpdfn1nZZBM5vFvEh1w3XLWYEZwHFzTFp33FhEmSy8Fa",
  "key17": "2JLZGUjnxwpFBxrRs3RNHxgKF95dwijXKyUrfwVEfbvFdxheRG47tCHfL5wa8FjDFtG9u56akEdMqhUAoWUTL6z8",
  "key18": "4ShPtRiV9JmEoCqVeVc58YsjgC6aLAR1vvnw4YmK4W4BFF8z9mDnYxcaxumBybhLPNjP5ioQNomT68pNWkmjeiRM",
  "key19": "3vmk28utsoS6B3yUww3tRexUe6aYucvmJixtpUL27CX1FdcZ8MQVZyTQSK3pR1aQQ8bjZVcAJ1QnTgTsfBtPv4eJ",
  "key20": "2qNCHvgNZY6eQSwVeNywAvDCC4v9uYBwD6B3jUA7rhPZ5Mr6m1GdbxRmPq7taQeUH9VgXHu88kzTPX6KhzHaMTBm",
  "key21": "232i5kGpabg7k5kyGNkWPthBem3EAsK26V1aHtbed3F9KC5hBGbpuauk19Xt77jM524jz7VdboLKTx9dzXLYAzyc",
  "key22": "2Dk7rhotNsg4JRaCBKEzpykz9infiUXgtTgGq2L9kP7dDJQCov92fYaFpobkXTZD4vXB3yEgkYKm8mwENQvYy3Ka",
  "key23": "56jYFheo4emf9QLa55owWHw2QY3hS6PTZz5kgGwRHhbKEboxbwGwxFAQArKpfvGDn9DLdTtin5ySdxeCT17LtJ6L",
  "key24": "2zaBmrAHKVSijRQSYcPGKHrwmrtKRBFp9cYe2Y5b4UiZUKU7ortUmV8eyogm8Up1VnTKFXN3gerijGL4nb53XALp",
  "key25": "5bEoZL7WSrAkrtK4CjTEg5fuh2tJgVarDcxiYEp5hWrXfJHxGMNjw7Ck9VfUhrhf5CLZEhNJGUQSjRcSVXBxSiC1",
  "key26": "pVhr9c6N5SiKmqsR6NvhmqE8qPK5gc5AYn2siMcTc6Ac9rjgHY7vVw2Akz13RkTAW6EzEe1uRbzQJDHrNdBhLaV",
  "key27": "3oX9H3c8oxT3zxCxnzLCYL7aYkah5T7T8jbhc5pLscwY7TXTf87v5ULjndA2wGtsuDkMGRpZjy4B6d7DfZW9WPSG",
  "key28": "3bdAGtr3yCVJvQgb5DoRdia7dGgVZFcqrbgZcem7L8UU7pAe3M7sL7NLQ4snbmiod3fu8H8MJYw4fMF2wyLMd7Dy",
  "key29": "57qSQb9pBLBLgoQWvxnFdr9eLnLEe6xVsTMDbCDNk8NMJE29anj2RYuFfB5PxdBNqdhckMdv8YB2hZEZFzE9YxtD",
  "key30": "2zruZU48dMSX8MKSGT5cD9qFpx86LP2G5sHypNGHaxGPaqjmtEMbNnx6KihWDyN5zsYLu1GtKN4gf6d9HGS1YnBf",
  "key31": "3DwtEyVWBs4ws8a5rXJWYonQRco4hBrMAFe8AZ519myRA8n7L9zhoW338Fp7RBqqbC4vjycX6ZHrYPQyvcrbmUtT",
  "key32": "2ahiTvNkdnGRQC675T123ua4VM3cyRNKrGYNLbMWbht5duHK9ZUWNMz38Jas8wdchvggtoV43pyk9Qf9ghFRE4c3",
  "key33": "25Z94KoAjPeKYUkj8ix36j1Lg2nHgBK9wfw5MQA1KFh5bkL6YJnmBbcoK3Nk5K5qshvqKB9kiqNyChvJA5XEtjhs",
  "key34": "tZRHf7bfF9AW4AgvGLnEWHjhGdyQgKPCAo2B8Nnyuwfa1ujHkFbW16Pq4nBoUeHMDYvZUCoTgZyp491rauXpcG3",
  "key35": "5CXDSsBCimM2TBTmDC54Kd4d7aDAubjwdwm5unQSTRmSKqkGckD7JqtzHLKNiv1vKx8gkxVQiWLwhREv9Psy4WqW",
  "key36": "2XVBg8p3Y1GUhVkMxiTepG5bGPKn3Pyn7av8AYXswqRThVmqxsHZK7RwaZUHnxs1vNqGuEds8oyTW2x6ds4YFVjL",
  "key37": "5DD9TctS93XKTMXCKo95tHXauRN43hNaQLyjP4MQQvGduDMfRoYVt76rGp95PcvjtgRG1po3kKwYyvAPsjyZ7f2A",
  "key38": "5pwSMQg2YqEkg1f9hxcQbmQhV3BH69DBG7Fe79s3PWo7vjrPmvvb3vPznJXcVi6oh2r9Cwg7jHxu5HSzUdDsqmny",
  "key39": "4CqqJGiNW4NPPXXLiJjAtspuuT7v1NrKATZ6unAQDR8KBkfw767ekC1cxthtb29bcQxN7BXucdSnH1QhDCeRzNL8",
  "key40": "3JZtvftnogoF63BqB7EYAokmwDXBH6UHX9k5YWyQmZBi6Xa2q1LfC9V7PJozPz7vEQbyyeSNwE7kRGVXdbxCUbf6",
  "key41": "4FLVEwmQmEXzqnjePkgYSXjommEz9VWdY6ePk8PFwwGYNzFJgAFxNxb61SUs6AhoStM6JfMxKpDa8j1nuvBYGVje",
  "key42": "goCRzbyimk6AKemJiFovbPZFbkoKh1SsSwoS9f1ivMLiDJpbMqrZdQqBjTuSPWTDADiGBd2Y65cL14AhDf2bnTo",
  "key43": "38TmYvmfNXRGDzpgKnNra9VAdnA28KB4WWUe5hVRNdCCxCa9nKdH7JRuQ7uFEcEd75ao3vDuw2XWB1aCjrFthL8v",
  "key44": "2NKWfx8HxRiQrcBvX8hwxJsauveyfoTUghPevpoexckPYAq5ZaroJBGnKj1EtEXU72qFdbX1UtnbDVobQSFGjGSD",
  "key45": "5mFiQiPRCaEHEnArM9rS4Z53uMjQFnvrryR6x2M3tZPCFe4J8Kbk3Kicm3DPuwsJgrrEcLoS7WhFWt7E2zE3bJTg",
  "key46": "2GrfhoS4dFDmy8DTqwP1nYCF6JmbC2D1g9dRzLe342Aa2swK1Cgg5TSnso4R1gcbm1Mg2MxysM9chDmGsacobHG8",
  "key47": "4XQvGMDjjkCX4VvwMFMEZXzecq31HNiZDpp5rad3jxRMPDaBpeQYhKxg9XwkGjYM9mRgzGswTbb3DVaiWaNGZ7BX"
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
