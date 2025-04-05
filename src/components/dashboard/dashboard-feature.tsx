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
    "EMCGradydS2RVGh9gJJs4E4X71Rf6Lms9u6QSf6hhJ2i9RBdb65w9H6ohk4MXPMWGvrzBnjxg39jnkbRZAqA4Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMsyF2mjE1X3aAg5QZstpVGKGTc3xGMFgtz1X9KtqmYd3p2R12W7SeFGDhvzZNH2JWLgJYyc5L5sN1YqZCsCXwd",
  "key1": "4JX981GkGZ4ok82NVhHEQHCWDL5qjPMfLY4NxvctuH9HKS16AVao8obwSrYBzyjhApp8zQwDcU8VwKWSEyqszGka",
  "key2": "4SB7krGM3QTB5FEoRB1brYS2uNSyXHVo5P2NkX7w1b6t5SrqoouGvghfoUDWwMXL7LmXv3Xjmy55UgLd1pG24XpT",
  "key3": "2Ayr1stEi73UXSGSJvLqvjZo6Xexr9d1xvguuc4cd54UuFeVe7X4RA54oJUyqu1EGYitYddEVPu8eZT47yCcWFFh",
  "key4": "rggUByoo1r86PwKyEn8ZdmiRryGg3MwWsGXb7nAH7V4bjXpjLpoFdMjkSS5cZuAy56g3FHoyAtHBeytVX8tWsvc",
  "key5": "2VJVjyi5p7iiQnJVwpiCa3gSByZEQXovJHg7GRAJkS6uU8pppyY4uz6DvWE3zS2KX8Khsvwk5nQTeVMTn4VFGkfh",
  "key6": "3qA8eygt92g3R1qPN9rzPYiNDpashtFz32ouQqbmNEK9oWGWCyx61S6K5EN7PmUjT9ZrD19e23dLv6XVykUAvsG4",
  "key7": "5EkBMQBr79TT9w6WKg3yFNiGDDDuK5gSi4YzunVZvsRdraL9M51DECmLwtgdu1QbccB8MnzEahYKJdVZ73FTay9d",
  "key8": "2ZXBydPN9bviKjZd26cMYvuhBJxHz25fqQpb1uXB6AbCYHbkaMdx3zmoEAfyMStJKMF5mMwL1bdnHiuqLAYZsKVb",
  "key9": "3p9fXnqG9hsbbWZJB8PAtMuxSUVRDkZMPeJaYmcApNs6DmK8At1wXq49ckMS6Q9WAwQwk7vV8awbaKV8tR1iVxkr",
  "key10": "4UFANb7Av4Apq8A8WQdUKrJ994r5fZWdWMsA1uZsf3fqKo9Qc8hpuM5MUvmNwGSPeorh2xCQEcL4ywzdMUtiZ6UK",
  "key11": "4tKW511JMm6bGFYiTMxhU4QcfASM5nt4m2Aj7uQ8JrpW6ShoyjueCEm6NgY5wNh8Um6NJohqUCcmHZ1akk8Aggcu",
  "key12": "fNc1cbLTcWfhsCWFQyHeydSuqLdXRsBS9acLMLE1SPcZKHLx9VV6FJpDnUe6AP3XsJDcQNTKteL2ZnKrnue98Rv",
  "key13": "2utZ83gUXugpzcJXR2rtiFqqeaKExY1FHHCaweZ9r9zFgwhebeFZZYm3Wrm1Vg2esxAP78qaMibrDq8vBQBQsKnQ",
  "key14": "4DhJbqUAKoJrLfbKV5VwRijBC2Qg6kQMH934j1pd8eHusJpVQQ5kxHFWchzVoEoGscEXZ3MYupKEaNL5pZHy8fzF",
  "key15": "66PPbXVaUnWkqAMs68SEMJMZ3aP3K1ARnY9jXwbVJyWbFdfEcxiAuaAWGHMhNZFopiPqDwY3amWrEfRm7DiQqeaK",
  "key16": "5S9fcZh9tSZXBpnXtQXmb1xkwGCMYZHLHNwE2kbJJpgiZbz2DFxfvkPirN9XtxqbXEWrRkFtDHhFVRDsHKF6fg2i",
  "key17": "51y1mq7eBksgRgGqtAfUiK2fboBkXXb5tzsE1jcgazPbngBHf75evauXNb7J4Fv7tYeba9Wk8Lj3GP9VUzktB14i",
  "key18": "5bvApcbfnoc5iVFzNt4inp6US8pmLFFRDSWovyDTHB1zrxgRNrB2b7pqEss9rab77cLKafKK54vYaqDNDb9sExxH",
  "key19": "4awGoRJxgqRvipzo3ePtCnFeRhLfTCimTytFSkKcCFTvsQFgW3K6n1Qr2ecc3KLxsc92EsevqRk1UsQmSEzVTUEs",
  "key20": "FqDW4BBS63sJ3VuNrBFeP61oahsYov7HcTh7VbL4AYkSK9AjesfjFt2F4tYARdd5RXQnGzB4eMCFDswZZyP3HHK",
  "key21": "t4JBwQdKy7m1ciTZ4Zo1SLUG2i9AJBUXEBTrjNjUXK8hGfVoS9W9HL7n44zJHfkXzAJc1Qtbz6SPq7xDgzusVTe",
  "key22": "5HDS5yhDm4wcD2fGT8asgpfaFA3kR1rwBnYpNZ4p8pTMKc6gz9bfw2mZhW1dRaPnYnp4vaYn8nR5ciKdNscxoLXV",
  "key23": "5yScSugxfFbG94dWgHKFJPoDBkcqdftZngWPdHxsF39yL4Ai9qrifzU1HYSdxtHe25Z1ChgiiN9NjqdtZyw8GZmH",
  "key24": "5AsCgrD71DBgFDf5yNxennwHFbZPsCpptDzD8R2nNx18CthkhuuBGD4QAAVxsi8GpzufDpbTRxJ7gFXupvynXKV4",
  "key25": "48kU1peRUwBG4JAM4wP3aR3b3QKXTNKea5G6T7MscsBWDiNQ86DNeuqqBBVSXNdxPHyibyzCyvQgdwdcPmtjYJDc",
  "key26": "3FrGJvKQhzXHt7Nzhurb6zZMPzx5souw3fgDwqNDLRAJMkfmNm4VUXeRokBNj8KfxVTf71wTGyV7K6mMVybGj7q3",
  "key27": "48Q3F4TWr18UWzfWXtP4AWuinYUDX3kf5f9mPzft2dPTgXzBt29nBHCVsmxZamYc34HWR5ckDGKMgmYZ29d9N8cD",
  "key28": "293K3JEd7U3kAzNcarvt2rHc11AyqXWAEu2CB8eykh7mg3QhNCGU6P7Vo84D6eqYYjzMZM83EGrdmrVFLiyYLnnA",
  "key29": "28WhwRG3hsZiQHxHzbE4g3MRiJCvs7gZKQuodHi1bKbti3bPtBkWtF5bbips1FL8EujfBXn4NqWTQ2R38Eedo8Ju",
  "key30": "Bzf4wvXBTqM1DXrbLBviKykySsKcLzcjatCa9e4BWXfgBXj5aFz9paF13KZnoFydwYWeqfjP8GoAcAFXfUGBE2G",
  "key31": "2UpFhXqn43zuWQaEUf9XKSSpH277NF6yesGLK6uene2RPBugooQWYPE2BYxcHxsQvjD5ZZNga24fKDyD32gyo3z7",
  "key32": "P9u82oUoThX5Cq9c2GVGo1H6QqFnQaFE8juNSeyc6zB1FD8j8nm67rqtq6NaYnsiJfQGUtzkDDHu3rnNxQGqgMW",
  "key33": "2GXan51BnPLrhngYjsMhZKukzUuuKQJ5NwLewZ2E4g6FRKvyVNDPj8gHcXhUu1AwkKArwU2RUPbFk9asVP3WZ1N7",
  "key34": "63UCLzowVfjN54NtJ4LAYcqFZ2bR1siJdw27E5TSWfQtMhVnAY1uWzNPxqnsXWZKMEcMWiBp1sDBRkWNZPhcPK3d",
  "key35": "4tRgKDd4ZY4bJrSn93U3LmJSAY97WzNZwieTjHm7Vqz4vPw17sqzRnUydYvTtPYXuYmLzELoN1w8EwG2TUCbAhP4",
  "key36": "dWwzmHBbhN1eKRHvdgbG7NLrzDJqCvsD4gA92LE1txKL85KazPmxEgNrTJ32Cd1nBaiVPbytM9xtS1DnHiU43qZ",
  "key37": "2rZuDei4QD4tXFmbFCzgwMNxZ7YjFbVimr64dgni5owGUFjVKQRdSbDUwB9JuZLYaLtGCkcezGTw5UKC5oauNPbP",
  "key38": "5p2JKyf397cL2MmaE42PozNV9APcdTySF3G8fs3frBXvbmMYnjz7YgMSHpcXZACjMqSuM3CKyYFvdJHc5u1MWVkx",
  "key39": "276tBr1DKaxR5y3yyrTLxKghF7keEq8QZjQU5Sy3CegjcQGsZtCaLdwNhGdUB2Z1oBZmwbhMWz4x3p5tyR7VczYA",
  "key40": "eDJ3e2xexfUMtEbWcp8LxddpU75rR1oU4PFAxkDjryMWb3Kfwqu3nsQKVWDncsf4YzewX7BoJJmTGSA4NwCR4Xr",
  "key41": "5TDJ9mXNj6xb9LxZcanwWor18DK1C9yqrfBQ8snnA8fti1dEZaV5gJA5uJs4fa3aBJqPaM4WcNv3tb4Kav4crkr1",
  "key42": "42TrShYg1bxUqooL6ZbSLb7WtZpyT1me5S7d1TRVUPsUop5BRAi16Ca5cD3QazBgNmRBNZxbnmPtCNGwy3vGuuqd",
  "key43": "5ZXx3TgFakYcsTXgk2AqALF7yDVaLCuTutczHTta1CBit56waTp5h6kUJBSj9DTmhMySWmMGnoFPkSNnZCqmzdqp",
  "key44": "5mhNu3F4jUK1NbbpvAq34RSi2BA8qutxTC5UQ2xWSTFwvo8dbX3ofmNV6SzKknwSnjVmfUgzt65E3ycuSWkbCmA7",
  "key45": "3QmL9tk8N1zdKHxVNFHnh3kvqvFA1aj4QM7PCsZvw4aXEtogvE3a4y9owTPGjrj7VunmNU8pfZDtKzwatPUDSF1h",
  "key46": "398ke4jFjzFE5airNacDunCzgrtzAB67cV2Pzpt7BLNG354EQDmYMHSyzdZSSsqiCQCtPCdTe996hGU8PRLLRJVy",
  "key47": "3htixd8drDVtWP3wp3vsHXkLRHk5uCdggmsfvu9aQ1XQaxGnqm2eqMY2pHaTLkfk9daFWUkqdNW1AXBzbM3DvQsT",
  "key48": "oG5qC3CaPHiL6NnBHw7ZuFtPRNdSXcq1dtu2jeZ297zVgvBLEWAGqDSjsJvbgV3vWndUxkSeeg2uTViZVhkmCLJ"
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
