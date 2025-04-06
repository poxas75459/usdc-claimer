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
    "3MnzMssLjGyGTVyefFspJGh5Q3ZdNVVZKxpY51KRCzi6N4m9Muy9DqFDxjVQWpuk9NyJyXUjzaFh4sMhZsLmebkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSsEgYMCaxFozvkygZ4ubGiCdWQ7Dqw2hmSRkQFLKoWk92vkNyA8GxetwZzQpL8e9DMGkq1LTYEx8SqtwNah6DB",
  "key1": "21PJVvCqHZhiHcrS5DSyuEyjZaPcTyLHZarM2CuoS3Gy9LGri99fpVbbiijUb7EXKCAUZqsaGJnLWLQVAZevxUBp",
  "key2": "431eZTGTQYdouydbE1YwTnkpxxWhNvySgv7HpsFgLNjR7YQZNw5pdpAN8y8Wh224qSZvm25sgddxJTgLyZXxb3e3",
  "key3": "4vfzKzSMX9puHMdsjhGojxmdcn2zSattqT2Sj4gHCJY65TeAUCDJoZHA8dus9NjJLhaDtXHiELAH7CzogWqVr4fJ",
  "key4": "4nhR3T9GxK2xw99aXb7wzumRdER1Ujc9fXmBVrEebkHjFCF72paMuMFQvyeCWwsw1sV3be3yydn1e8UFtvTsQugZ",
  "key5": "5PgBVuDVRRYgiHQvaKceJrT8Q7rzUJfdYPXJ8NGt3Ni946ot3xznm6BPgX6PxcmFBbKtyhDmmvrijCujDG1LShaD",
  "key6": "5DKoKLQR23wM9GhSgpbRq51uSso4AUu81ANohtkXbV4rFQY6xoCRJifkwyVbSkRBVpx3tmZQ7DBsDnnoGPTctTgV",
  "key7": "h2zFN34vnED6JHA7fMgm3ABvFw9HLNy33WykupQVR4NqWvxbdaKpcTcK6GDLb8gYCAeRWkKv2VJFEtPD9GWSFRq",
  "key8": "CXbstAhKM4GJDxqqfX8aWMV9dq4Yh5jGFe8gMPUxvhag1k5pAsi9oXphh6iL9q7NiUXmqXA3UvnFpXRLcgdpwYv",
  "key9": "4F7yQCoyKZf2G37Xd7aKZznQK6Nqs2Pq8V6GStbKPdsmYjk8tULGXDB5AoaLyYv1jCa3QXVait5KsQbnKkfEGxmp",
  "key10": "8BqNJSenba7akirCi18VDimkNdsC2HW4tcgBb3yh2HBbhnuK5juA927HhsZsxXTrph7UCCrjcWutMRFhYVA4WVB",
  "key11": "25PLV64ugwJpk1uoN2GWveEF9DEV1SiusZYY5wAgAjQDLmNBwShS6MQp3ysAEhdYT3qCW7AzJG9ZDgatZbSTukyb",
  "key12": "2TQ7rs5GzmKn5cJxRfNREektFoL5UMf7V3U2iWYNkVBUBSREEj5Whe6ZTTrgpm1S9HyuCan6mf8udi1KFDyvPuqC",
  "key13": "5umvHFGE89m3h2zg948Wrjb6GfZcsKSmfRGW5FG5xBn882MoGvCjFveHsbHgeXL45GoQfEJ92zVAyWJ8Dxio3MCo",
  "key14": "2tePUFYBL6Re3sgLfuAFCAwrYuiQGDm7tENSfC27MC68WusqzWxDvQwRuv8u5jni7UtZoowCy5pYwZa2ryy9aemY",
  "key15": "3p5vYSzUXgapR2yW5pSzN2No751EdgZTgGXdUpGjewUSH6pai95TsGG4j3djV2nZgz7BmaZSx1UEPRQtTj6TYxx",
  "key16": "2V9bcBGw8RDPc6eFciWhbZPe6Tt5jE8i64SsTvTMJRGYNW8C9Bbe5Wcn7uJQEAoXTtUHfct69i49LjrAh9pkRNc8",
  "key17": "4udtixZ8oTBDLDs9HBecxPJN8u237erxUZYcnHdkndjnKk2Ym9grLxsaGfsTkG5EEdSjPHPwRogHaxwzwyZ1tz9A",
  "key18": "3j3Kab1YPGKPUEkMmiHPBprc22nqz3JHpWDhdnHwC75Heunh5EEj9EQWb3vmuYoT43mfu44KH3GBmHYzvKC533Vx",
  "key19": "4NyHvykn5BspoyFX3fBw2bLn5t1Zoyni5CeEyrcMMHvXjPoDVe5G87jMgp3F46e1GZ8CQMiapm4nKpAMxwhSoyLk",
  "key20": "5RspN1TfSdUHQ1qG7ua1Gw62S1N7QGDGcWRKpoi9V1UMVJjqk3g6jrrTNNY8NwMAE657utD3qrLQaKGrNfdQs17S",
  "key21": "2bHDHywTCrx8w1vAmAdoVcvpL2J6xNcQFC27KpTdqKPPf1JAYWKS9mRotVcGH62rQgDsoWqxQN2RJw5U5E2UQdBX",
  "key22": "4mQtP65sxEUfSBGs1wCVzHnoP1ejCm9rX3hMDRrEYHJabn3jMYJ7FvMZnBL1mr7USUrii7yuL1c4Y2RVbu7goxk1",
  "key23": "3BdBMMyUyMijoxsuY4P64JEx9Zh52FDwZvynnr9yZDiXgKUzgBTQGJsnCTazPP7pFkAxYg3LHgysdUZHitu3XdF2",
  "key24": "5RnkpErWFPdLZLeaBmiR3Mo9vK3kFoCPAEPfzwoFCSjpB1DoRNjgkDuRhAZt379j9mmvVkFpDx4R2BDf88bXpDup",
  "key25": "4Fj6rXqnZurEDHwSgH77uF4pgNBRDYiPhmsLGMFYjaZeHBX43BUY581jMqzvJUMqv1uSVsUhfttsUsQjkXJ7jx2B",
  "key26": "47FHFw7ByFicZZXDeYzYBWcsLddwbZqUFDgdYmdPBNaATHnopVAyfR7w3pyXsWdNaWTjyfdnEPbKkuCtWkPcQ9AK",
  "key27": "3dKPPDnBzVSGEWJ6XdGNYsnXbPtmbKsBfi7ZrujyZDLfq15AE1GPHQ2KGnAv63rharHowoTeA3SXC6HfM8jCKgdp",
  "key28": "3jXdSzaupAKecgxeTDsQK8dBTr3gibzpkfj7DZcUyUYkyTW2mMKBnN5eJxtwSc5frrUf7VRuiwkUKYKFYqyZAwGn",
  "key29": "2T9cFd1oq3RS9BNi8e2PkyUVPjEABPVvdB1fqyrtVKw7Jr6f3q3ApvzzJx4mRsDi8HhHk6TfN83Pp6MAAGRFmYua",
  "key30": "4gEEFbsiyw96qLPduZKFA22B3mDHrUdwu7yvjrW9d1QgfRVTsDZktyWVipp4t3tXP3KA7NvtPcvf4pCjU66cyywZ",
  "key31": "3an8z7ZKD47yQcPqbj6NjiFPupRZH5VmvNrYY3RVdvzuqd8PzbJNTAXFZWj3KtNNByiCSABPFTqZvuCj4U5sN7xp",
  "key32": "kfuag61CY9kr8xT5EYehCCXQRCZCSjnCr4ZCFuzbFjT1D5mTJnjXSs5u9NkcU4esTMbAKVDwBDCvAwmnwvbVrw3",
  "key33": "48xsBHi2Gp6VRvYUHfCswYPf8DQNVm1qs1i33wKXs84SSacmJc4JnyFzhpSpo5csuyNvqiwbmoJQL3hCx2c1iFLA",
  "key34": "3aQq66VGPDf8F6863JvvXb8Qdfi8452hxPwZjtfwVoWmzPjio92VMvyA8VSpmn54QvHPh7wHH9NecgMzAQiF56K2",
  "key35": "46xXddr5z9C7hu7N5iW4GVKhnc8tvWY3J5aBhQZkcuorzzvymyU3YGgGigX6wJbdzaW6gX9pqcbfgxcu3Z1C3x47",
  "key36": "223dzdKLv8EKvsj8dK6J7nGBf3R6RYNjpYmn4wduMg25qWRP78pgwnFCr3Mqnm7s7X3opK7xbdYbAedTKYRFXp6i",
  "key37": "izy2yFKBDwajQUebQzSmU5vfo1dw5RVVc5444u2KVtA786o3CMThWHZb3wZvxy8xRULjJpfHKAzWeQWznhKRZt2"
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
