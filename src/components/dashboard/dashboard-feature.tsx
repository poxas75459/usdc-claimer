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
    "5rNCZuhaYWgUU6SQS7jF6dWgQhLQXLVm5MECKxMT5sPLXAQDAActG7RmUcFtWAHaYswmFrFkcA2wPXy5grckyVMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MsPB6rMybFZCDvDspmgNZKTAJqkPZjHTsyJKyY8Dxsin2kSi4vqxXKE66PkAYF783Aawh2o7TzGdVeg9vLXsh9j",
  "key1": "2MFbaBGotmLTmzZksvvpCNfUVpxRx7cAYbdXSQHkWJhiMp6uPHjCjqtEYtEPXnyBJdU36WJop5CeSggBWeiN9Esk",
  "key2": "2tVazrDstJBtnSaw2tjaGJPy5Bv7AbCH98MN3fRDY98Gt12zvHKnD2Rrz8uuAfkRMwwrtScwWL3c8K38ycgSpWff",
  "key3": "UATxM2k8FhuS2GfAjGQpzzRAZVRqK26P6k9nUYzEh8maQE8vWDHKR1WDwAqG6HqeRVDXW6hSfeCukqrQbBGa9su",
  "key4": "bjUx6HKT3rDdKmq5TiHghoA7MQWHBGquK8jWn9xX5A3Dta2nnbZVk8kdQ4JSdMAxSX2Xmi3u2ADJ6xbSjDRdjbN",
  "key5": "2rSekZLPhtFRbd7VqoHTqzR2NjCbyiTim9CbZnVqtgCTLVC8fZK9kXRoFtU2XWJbA5hUKCGgFghdeFxx6FimMKZZ",
  "key6": "Pgdr6zcL9jAmt3vXVQdgQpMvR1VZeTo1TJYyZqjTGBzyYARL2p1z6cDenH8JqJZXSVSXcNW9RUfb5thyxoQZRVi",
  "key7": "5UVhtvEyYVKeSXwewqN8SZqZUz4XYs9CssL88pBvJd3eA5sBSZDFadxRAXrTawAHiNqUdTa92wN3LdiBuUW8uX3r",
  "key8": "2UaEgJ1qYSvvVz24CfVGxZpQecM6ffznvQWqYgEvQK1CC5cMmtwybwv1u1hUyMDpeMb5MR67b27kERfSpLhMjSiP",
  "key9": "3qhC9MZZKxJWgAEc4uR6MjxQWuGPeU9aXiEpWPqpT39Pbsg6hpXS3EWfug8BRG7iBvavLdBM2oAMhnadv5w3xz2",
  "key10": "3KdZGJLp1gZxUrSfriNgoF4yuF81Kcv6vcWMn3sSkxJ3fWuo9q7MSdptABRGfSFHRwxyxeiBwEbMtVdFS4zbWr4U",
  "key11": "5Jrqq3zciTvwrdVR6hdiRFjmqb4XmMmSUbtGwd8XWjFe6rQQCzwaEuayPzA5Z3VRLCAgLKbkF4hX9CmrYbjEi46u",
  "key12": "2rBchWRECc4pUkt6xMELobmn2LYBEVvKweaynDsKAYE5eUv4ssk7cLpdFro3QeV2XHo5T5k7YxAZtGYLZmLokCZx",
  "key13": "5CGVanDKjpaTSrDsH5Lqj22krhknxor6AXRwbLQ4f2jcKM18Cn9jmyfBvPFQxcssJykKkgyDE24Kvx9p6YB8KDKL",
  "key14": "5HHJERe45HcuWf23ft13K9FzajcQeEsY1A2krZw3Wss5zQSzCVQqsT1vb77z4ooqEebtDrKw3e8FViLwuNo52oPU",
  "key15": "yn2CNFm3y7CioB34KwCpCN1vyX7DugtXY1FY1mbnZUMmE13Sm3JtEhVhk4maFNE6oBRSqvV5gpdgi2HyaTocTGN",
  "key16": "2fTy74Aq9TEkBYbmn6ZeHSHksQF1hW8MFqPd8j81bJj4xbFJeKSUGke2LxLp8MrEEuu5DG1nJYnMw9ZjoA7acLCZ",
  "key17": "5fm1Y79pHHn1rFLAoeY9dvkyZgqtB2h34UVwcDAXnDuBuFHZANypAitJXjvXf9oBePXsfYgbPs4qdW2aKYKaHs3w",
  "key18": "GCEWzRVjzj51MUMVGpkAkDVSsxD5utXnvbwj5PjygvPVQoRnct5Hg6WmYnP5aQ2zicAeLcjXqtCQKXMkQiJ2pvm",
  "key19": "QdtHj9BR25ks5YUV5MH6DdixRCgunEprqpC8BZ46Tu2Ladmt5FXdEYydx84LkzgLEPavdN1T7DC2qoL2fsJvLS6",
  "key20": "v7J2QUxP9E16t97y8qQSrt2pvM2YYviZweFd1kcCytbnvCkQ2HxPbg9Gmt6caJyhXvB3YtyiMpFXnX6cnptuk1A",
  "key21": "2NdmwyYKkVk7psBDg5fy78woyyeRdtyyQhys8FTSNjsh25BHvDvGcqucszB8XjRTufCThpvuLAferFZPVkk2zp1N",
  "key22": "3MzHu2zRL1WrL5JzUMKKykLzQoRHA9kNnK1wnJkRhCzBoZEFvFo62BTY6Znct8Wc9RLiA8zyceryLu8Mrzb9FY2u",
  "key23": "2hL2GgzyehgMoeFj1K7jGs9qTnCTzx56ZczPR2Y6Bc2MAqSnT6pQXbyAGzFN2t2qRv23c6gGVRDGjJAr9h4jdtHp",
  "key24": "2vqwsiz2SvRtTwJXZfttm2wZAwyue974T1RRZto9wHkD25tpaAYJrstNQZ9KazBDHMXvayc9Q69tpRvxDkTMeZrX",
  "key25": "4ejn5mGMsyVkr4jPYV8BKVd13h9h4GLqkwAiT7L5inqFmCchH3fgH3XEvg5S2UgZJwecdgAZVsuN384sGy8rrVkA",
  "key26": "3NqU7PKqzVpSjfDUZZLEih7Zd2bPaGTaceLesejK13WZ1dQYZWdyu4f2ycVyWk9JtrFbbkzXzvJ9sLDABpcvVcws",
  "key27": "4f98XTcYL5Whb4padBjTbn9rcdpkHEVxQHW5EPgTsNuZZmEmgnE5ygXNwx8J4YkWsaD7nwGi72Kdy3bSk2KDE41h",
  "key28": "3YeLWKFTfgqixpi8CShdQdFS1b92jH12yKQwPyU2VWdQeKETEBxso6KSZdGuNJucruksE4wFDfnfbdtiWU3QKXNP",
  "key29": "474tXQYZd51V5oKvFRUttuMQQJcbm7dxQnnyAbXDvUGEVXzzybu1wzuaZvKMq5KkC4hf5UfXcadm5W3ogVkdKQGk",
  "key30": "5yik44K5SY5os7Qnznn4M18pxK8FCoMSXzLUFV5dn57fxGjELciVeL7TmrisRjfwJ3bnHycQ8rB1WNK6MUhzWug",
  "key31": "5UtZcaWwjxmx5TGccEyhUnNp4a3FXrKx5FdiJr8Hc68fd1n7wHbc6aHvJtMhescLT6Uj7R5uWmhe8b6nkbtcuv4A",
  "key32": "3BzfPT5BEvGr8SK3e5Kh73Bdi4DertQ3SPNpH4RNiPvRkokg9RXUxA8QSdACMoRGmH1sCNsPiQYydi343wufwTFT",
  "key33": "31QGFR1N4nf4puhgX7nmJikXhiFbcP5pLDyDP7RdiNvsxYv4h49eWxms4n6W2gUADj6ig9CJ1NPm1vhDUgde8GMD",
  "key34": "4WWv5B153ALsnNskzRXrfrE9p3oRPutMJJJMmpYreUgbAc7Penje7Zk9xoBGmGF8U91RoGhUk1Xw6c7MH5UDyJDo",
  "key35": "bCZxX9GQ6epj1RPQYDAn9WUCzdvBLeV23fdvB4hU53ZnfjQCyFB2HP3hFa825V57AkTBcZrNFdpEb5nPEua9Fhc",
  "key36": "4oKJfvKi1Sy9b5WsAyDtd4BAjdegRXiZ3uZ1UhQ6oHYASDdzZWCUgTmMKQ7kQX119MMiM9noPuz6h1bDyLGVJtwP",
  "key37": "4fPX3Eg8sZoQUhfjSzgtU1jViaGVxxz6HSYCt7yKA2kjHYecrQsi6aanC5WzU1NHiQXHTgE74YE6aMcKs72qxFfq",
  "key38": "2qM3ghy71FLmmqN7D61R5cpvLq4k4NDG9x65xqHhaZwK1UJChCGThWkZyV3RVXg1ob2fdMh7PY453PWVLkpCQ63m",
  "key39": "3xDJRNVQwFgTRqc2BhHmFTsjuY7yHdR9WgHexg8Pb4EBkdhVgYySnqChgBVMiqNi63rvcsMEux7whf1DAHnokgsk",
  "key40": "4Npx2nYPMXa99HzrbnTTEevtYoMRGHpRQvUkwuRwzm6L8an2f47Cq8zy1V241ovLbAEiwavWLR8dRZm6oy9PEmSV",
  "key41": "5NKtuNLDWGyF2rt3hcB7cMnbAJ3YjTtm5xAUkHgKgNefsGxAMB3ntaeX2x1rP2VcrgGFSf1Mpe6Mdwi5cBoQ2FLr",
  "key42": "5ndp6KzErmnR6ZrR4fRahJSQKt2jTQYEKkKZnARTLSMNmQsKA9YCpCtkZUZa33A5Z7k3RwUAZqeXKTTeQ6okgg6a",
  "key43": "3ZWYKaRDM6awLLCMETs8oZwmzU5c4Co83acJccwVP3XYncTewRkjYnNvphxxwpPp3gVgZ2GrsRu8www7PV2vse7C"
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
