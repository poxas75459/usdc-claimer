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
    "4Mab3ghkBKhDmMq9YyG7tVkA9M4dzxLjLiZ8i5yt544ECPXwFNKGHGysHzhediWoG2o7iTKArazgHuUwP5FLwgAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpgvUNP2thdz6NbMQpSkVTw85R7NuzgKK8ycfxNiAPnb6Ln6qnarzdoEacupBPdv4G7ZcTWsYpq3nxhXyZA2XNf",
  "key1": "4Ns2Xe7w151SkYFU8mXSjQtwvGkmamUMu21pfbLXpUgPVCyfPe9TRfhrJumYnF9c155yAc4NRq6VAXc1zznmutLf",
  "key2": "cEGux7iJB6MMAQ7KUve29fQykkh2kVSku5zyRTwQuw6siv9cQbFZtpZUC4GeeYsSTH9jVGmCJfcekwY736NCaWX",
  "key3": "4CieC4vHs6T5iqTYbLNc5LL35JcTKy1scPgkMuq4VeLpMkgofJrHQ8qd5hBxdU7f4RH7uw1Hd45sByrDa2FjXp2c",
  "key4": "5sPjzYoBAEJ1kH8o8fanSvHRTFJjnwHXDg75ghZXtfcUB22XLPEEhGE2rZskLgeSLsqRJkqUwBdSRcy7ziiCw18C",
  "key5": "44Ctrexai35pLg5mGvhERYQ3kjsGioqAZFGSCt4aLZfwa2cDfbbg94mSLJeY9PLuQnFuzwexPT1be9vicsBz1Gem",
  "key6": "4RtVYC6Mt6Pe9Ck1fEXfSgEozLovvDVancabHcj5GFHByb3cMb53gRiubX1BTyUxVBsc2zjgtaX3kb6arc7ZcfGc",
  "key7": "5s4LuQw8KxGUbS7Vpjcyhgcp3M7DnaiDyX2Lgz8AZPU5Y9oSqkBMVxQm7adh3cy15yWKpPJWcCFZBwfwjt9mTnzM",
  "key8": "4H5UUL2pVgefsDVC4Qx7ja4fJuj76MNY9VwjyY4mfUGzhQb87UXcbYtsbrx41STG96EAmqngrmSKj7u1BVDFoZ9V",
  "key9": "4eTtf26c2GFJaviWxyDG9zPbsxe1zVQFL1pXM3xaWMT9MQRFLHdpVYb8Ghs1GCmbjeET3fGRAZtdTixF4R6qhtg2",
  "key10": "3bQmV5t8DQ8twefYUySUtvNcEU7NbKG6oyKxuhqrfZVLVwau6rsX1H87aygvveZD7d2pJiKqdNRfWbAxKcZuWgKR",
  "key11": "sGBtfBfubzsSKYG1EmQvu8nxjS65FA4DsC6GeN6vs2RT5C8TUHfBJFNvq5WFdfQDizvHquVdhtQgsQYDSgjKgiu",
  "key12": "Wo7YWxFHZVrj55qDk4RqjvPTbWUs6u2Wrnr7C416ywTNJLW1ii7dyhUyWHcu9KHSh5QaRrwR7iA7zJXS7M8nMRh",
  "key13": "5Wope6XUjFswZPDeeppGPRRV54Mm3G6F52qMfGmsqunPXorpP8sFXbwqBbamzziLUK3ctaxnGAZNkqL7AdL1drFx",
  "key14": "jat43bpdvdCSRk3QoFhWCQkbfrtK2w5YsddeyfXtHn6kPcUyvYiik65yuSKH6CaFJ6q5sq3E28mapc1jNDttrDF",
  "key15": "VY5LYb2HaP6ZJtdomFSrx81WSWJSCrbfy7NjSDxGFFrgRAZVwKw2H4jbeYUdtm398rA4Rty6w94Nwine9qPbapE",
  "key16": "5B5BcWVKDPy1FddaUv2CEkGqRyv8pKD99EJ94taNcz73jrGYrL4oG7qQxg2Ybd18ssUEzfyca1AXw5kw27gKNjBW",
  "key17": "53AFWoQMq4QmSSVLi6cE6pF1upPAZSfDHFyqoQRTuuXhin4frV7rZtWX8PgbxMw5tkdmSSRLYa8LWqqoth47theg",
  "key18": "2iDfL22sUj8vpCgu1qqkGb6muqqhdnErzy8sqqTXxjjwDLCxFXqSufuyZWwrVj4EBXWcxsi15HcWoLJjHD6ZxBg6",
  "key19": "3nNZ5rtQLiD26MvkHjzGveyD7jViccsfwNexCAEHra7rV61Usxw1JsvQfEY7K6eZV9Uy7gS1X9t837rJTTbYAQHk",
  "key20": "3ugKNu1dKcfSohporrb32fUUkWNpPTgZdzxt4jypnrmtEEHCNocxkYGJemHeg9YFKCd1edcCxqqZAWxnQES87251",
  "key21": "2Ntj8NFFzKhaTNhbnhHysv9LKaKRUXpKNEjBrNuG5Z9QLtez9Sd3ojxDg13oLgjEeT52vSth2gwPhy3G3bTpp9Wu",
  "key22": "43uaHywxHVEdqCaL8Aysw5YcPNaV4T5R6Thk2WHKaswdZPEM5opaXyPajtLGmgiaj2XFUx4vViaTui944sT4113a",
  "key23": "HPqacWvC7iGyFyCgbUFYV9prTqNx89JC3hy5ofT4MhvraMThozVW8GDmF28bNj6uQAeLktXraoegzUW4iWfANse",
  "key24": "3D3kvU84i3pJeASDcAZZqBwrP3na3bvC8LHr7oJtehy2sDyGdRixKdRtWovuxsu1AxdfYcYJVGGcQ44tWdJt1xa8",
  "key25": "5GwjtwaD9j7AMwGjku2pqijwAXoLXANzv2geaLVZCRSRgkV9ywNg6bEG3eWHA82xMGXho8zm9QtKhWoFahh44h6h",
  "key26": "3ytTigoiRX6KA9h3xbvUuyXwBNBb3y27kSgkrojnGo1BfmqoFENB42taBrT38UXVfwiKRsTGjDaWpLGScbFm4oQc",
  "key27": "jPsnh7WWVLVNzHkmf9a183XmwZq1XoArePScUj41y1QGji7LmPZ9Xc1z2pUFDD6MNseMNahPnbvBRVno8fMLX9x",
  "key28": "aH4koNnM1LgEV3t7pTNCCytng7ArGyNxdoY2aMR9UKNDQKh6xo13TUotukQg8UJdro4inMpgSBBJDCbLajmups2",
  "key29": "2F5VcW8cmAjJQ6Q19BMgBj6k6sLv54u1Fq24W5sxp9YQDJxfbGkc2VhyLqNoqFfFxbVLPsrF3goNL2jDMyuMk9it",
  "key30": "bd2zecpBwzNnqAExrGsjMdvbEKCUiXYsPEMpdiDRi1S7bLioqVQea1XHzWP58uQiSWBxysXyYEk8Y4stk4ZqzYp",
  "key31": "2eoMrRgwb9aeptsTbAcyNJCxuHvNbyiudf3ZhqYZPR665StLugi1QJpGvXTctv1K4tm44GsKTWav5c4RMEc3KZAi",
  "key32": "7Ax9MywkrWqzkRNdgcTLWZCkYTHveBKWS3TSLiFzGGbrQ47hu8JgUyuosEghBhnumnimWi7uXoq89jtKuHGe9fX",
  "key33": "2RmJyhqzsbW5MVwFn2wZivNUUWUyqkxhL77rHWCL8cEJLEAFDegogANwD8vLAw3gPEEH3AiQeNmNoihy9Z2Q6C8X",
  "key34": "5cSxZFDGsbi9YLWvoM5CBdSHqwhUfFDZhqZVoJG6g235FCQPwdShiqLDhEQuLffCvA5R2FMA3AFc16RvXV4ZA6AD",
  "key35": "NLxhzyu2iKsdmHNJJtSPmsCfrHAuDvFsh3MJPK8dVM6hVSh1W2Pg8DXm1f4gP837z4pmTRGuyZqdvXmL8KS34PD",
  "key36": "5MsHygosRnKH8RGkaJ3caegZEwV5KM82qui6W3p4rZqzwV4ZwvmPQpV36kMWau4twDzZitgrMERrkBezoGYiKFHP",
  "key37": "2K2a7xJT5k8wwc1huZY6VPqAFCR2dvHGX7Z2PfWt4L3TWjQBwdyJGRhdMDLHNdRzJtn18TZ2YS2ogKh2sVw8ex5n",
  "key38": "47naNHHV1JSTdTqQwS87gv92Dq8BzFUGp4wMBycMN2eD9Grv7zmtGWzMwuP7W9z9vDhZjoS3ejZ5vXnQ6U4yT6xb",
  "key39": "2EjFayZbhU5a6jkmVT1y564UR1XgAu3Ec7epGpZy2MdCzgLQd7M3hptkRrq93YpjMxa4WgBShbpVPLEeGPerAXBq",
  "key40": "K2szRcvJPTNjEisuuj1uV4BdbzCuXYPJrwYJgX31iGsB2jEntvYdgsrsk77XszNgkkBszaRLZKdTr3F8rmg9eMT",
  "key41": "4Fs8J3s3RCH298yxVXLRY6fgsWJuabNzcTJQCXzh9d8AAmpVg2JEpxCHJbXk1isS9xNmpBzNCi7KBEyk9nAve4AF",
  "key42": "4Uz5DHekNv7UWTWGqJwBCPCsxFyHwPiw8jJPmhvxGbnP5VUaArMBHHRREwwgGAd7jEqGmgbWioFGpqH31E2FaVVj",
  "key43": "4SkBfybxEdKzUxKfRmAdfN5KFH7qtTpgfGdH2xWk2QpcjLyt78HdKM2gyBeHJ57WNMHgryoiFFp1fSv31Z8a8Qmk",
  "key44": "QpnN6yHo1bYBpZm8gLrhxoE9wuyvDE28BoWAKgnrxu5fEBhfyzx7gCpnugT5a6oMLKrPeLRuwoo8qKB5pXB8AJJ",
  "key45": "5A79WWdeVXYBx2ab5hYm9nJq5fNDTCn4YWjyry4Fyxv2j1r9ErGjBMKNGcNZjNrgBiXKt5MEJEcwkQrkMwuoJ5F",
  "key46": "2jq9BkVP8PU2BNVTdLHVR3zc1FwRkxeGkeeFNbskzxdHEvVhzt5bw66h1fKWc2JKgqh9zyxStmN622ZsbKkMNYc8",
  "key47": "2XS3zUWoEVv7zerjohukkJRNWZXx4QhaWzem6EvSdfaTrDkcrVhADLY4unM47kuMGegxHEtfbCqbXpsSzWqoqfD9"
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
