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
    "4a4K89p8CUgtNWPf2AosJRdS6gZdXLGum3gMKL4XwuYUc4V5T6HCHhGmTZnKNEJDSbCL5JYrYu6fwaQ4ySH2LTRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3ReAMqCkWqHZsEeb9gkT8BCzjNEQ2sDzjGuLMbtAnT4HsjsixM86PkDtzGawAidGdPRKNg88xhLtPuwPtZ8FJL",
  "key1": "5cPuX8EjQ2tWeRWbT7JYQoMuWi8ViwnxCCMUtErZCVowEcN9gXEEnCBjjxLPY8KMXDX6X9W67Sp91gpYT1ZrTEjp",
  "key2": "5bca1DBkqcYdZkBTHLoJ5WfZT7xzGvfDqjmZ2Kj1gBZsvsqQXv8CCjJMzE3PxwcSKELYF48hVCbwhYapviKQpuRJ",
  "key3": "45wwRXZwSJsyUh9iGTX9T1DhuB2BXguJueMvRN1rTXj4rv97yhtQP63FM7UFrNLHGhsRY6xiRLYU5sqiydDeRqzY",
  "key4": "37nLeBt7U7V6KoSApoS3LUeuykpyx6D3jqeH4RyUbK1sGk54EgJG7v5to4tNx5EzUBMxeZyrqHFE1GkY8Ym3U8EH",
  "key5": "2RaCP77JJKCTs8dK7ryvYZJXsARuzVL8PfNnZievHtTQKmZhsUXuFmYSQFEkP1ayXr3UJ5YV51FwFxP5Z8USNKMR",
  "key6": "3dRyordNYQgaCvMVHdmVs7KTTWMTnwumoz6G74G3X9zZooeJ44oteqULe51bvpkw4B6EDUDsJLWATpYtent4gPA7",
  "key7": "2Gu9akCG1CN2bqgqgibqQ1y8RduLjHePXrE4uw6Rs88YmLfzQJBSTjuQo4Lz6SLMu3qfXDWFYKdt5faiYxMr5wx4",
  "key8": "3y8YNvTSwvAR2dZNS582e5SJjoAzn666xQC8tN2KmyMsoraHMAia7WzfnAmQvBb9jWMcHeu16TZCEq1xHfBQudnZ",
  "key9": "2pTxu5VuaebtabSpu9EbkWtiiUfSV6bUDaJD6CHSL7hdRxg9StE8Eb9bX4qnutdgzK2dBVCcEkWhMdJEnipnNr5k",
  "key10": "UYg92FQwSNgeYqHt6WuZJ9rpFc6GkhSpMpCJJecVTiJeGy2AWd9UFhvvRn5Py65bFjdATWKiFNsT8aAgfu7jJuu",
  "key11": "47Jwips927FaqoRejtUsFNGE1tbgeu419ZSEwxDBDWKigEQAyw7wKL1HXpvaG7UrpWVBFEBFbSk9dW1EHUf2pgun",
  "key12": "5qMY2erN8mjz9jhYhathYtStedzH56cBwWf8Ci7cQc2tt45H99MDv682duYPpyLUX558azHEo7wwEeufnkMfAQor",
  "key13": "5detngrCCGnCx3bbrxpR691aRui8TzVMZHSqK6aGQjLfV4GvfGzWaP9Cz2vLPHugGABZ4q8FvMSE1xrraEWZSeJ9",
  "key14": "3tszWoAazM4EosCnZHvWZcqn8Rn4cx1jn2ciUKyiMRQvC12PQ7d9qDyjK9q6vNAPvPk1Z2vYme5pMT4ifvsDSfZ8",
  "key15": "2GTeN5C9515JrY1KU6G2rfKhzQmsoXcvyBdGa8p2eiqtgEcmYYmSgoTRMgvqA8JMWg6HtF6Yzwbx6jZeVMq98J74",
  "key16": "2FkPJDLnXJBZeVBjdDLdx2WPcCCH1K85noJa4VExyQnXfEPG4CWBC9Z2y1VfmtkYvyfXHcK6VvKaCfyjh4ZeWHHN",
  "key17": "2MfHJabbBuSvTnDod1zE4MNLMvreTzfvTx9RectTKXxBJJDrxQbTpWYYctguNkwDnTs6vhYuVhxRCcdpV26962jd",
  "key18": "5WA3krZrgCzKpEZTML5po9hx6NEhtZsNGv74xSYe4Lk9EYprugyHgMR9rxbvjz9EtihkUg5ogyQbAkX2Z1X3vnAe",
  "key19": "dtMjR8oZSrZjseD7QojG34NWx5zEFGFNg6U7LUPSyzVtHnd7Ea9ViPjqrqopt7Cp7rtZ8MCAHHqCYD2KJNTmLQ4",
  "key20": "NPzGNTJsNM8UsqTUPZH73WJW2yPQXokjBi4kyavPXMys3NUnNC3d65jQ9WipLEsQshGtcNRBrurLYfUVKpwgjS3",
  "key21": "3vfo42J1i6vD1z3nqSDRdqkNeP4ftazgpP4T69sTpfxtRtuEFFzSj6RmbM9EqxLrUHpsaoHbraYG9TBG3e4n494W",
  "key22": "V7DvRXRkV7FU1itiJnPToHJZi3kNoWEmL5rgU8Zvujcj3P1PDxBpLMr5kSo6Z7FmPqz3emVPBieXt7svLpipw5e",
  "key23": "4ZLVq7xpS1dauMEvikxMyKnvg6HNNnuT6CuhYXZFLmiY3KZrrLroVGwQ9zkcvBpaMHwf9c8c4sWfmhcMo6cge37f",
  "key24": "3T4cV8XDmwpcENq3qqBEMVKumuMNteDB24kBevwBkyyrFXtTwuiV5hdUFk8Ed78Dw7gULAfn1ysbZy4GBrmC5iDA",
  "key25": "4pWzT9uMZD22DiDV993JD6qZWjB7DJSWvziHn34MEdf4mZJavvwPpS9bF15pPUxePJTDwtXLK5661R6wVvBCMDzX",
  "key26": "5DS9z7oACvaSRRLmSoBTx7tQULWuRozHofKtbxefejxRYnMpBYJRnTHRbijFqcEy7HAuEDbcAunL12DNdeRMjhWs",
  "key27": "4b69aXyb3pvewVod72yiazgsEomX6R7u5JcDSsjsMPHu29Any33krRvBeJ2UEfML1tBmQmGomHRAHQ4rg7g2U7Zi",
  "key28": "eXkBaLm2c1hpGpsDHvp7PHvpaxjuXtuwHqPtvNyZQ19aT6KKjtotU3GnikcVMttHQsCNkYzdHk1zVUJ8iVJcN79",
  "key29": "5UM9J7KcqvMCz4qtmRZX2zpcvqpnfPdYDWXbYdmNCeP3GmXUNhL6L9AkqwCHeXWsffdv9WYWZRJif15j1c1XwF3x",
  "key30": "2XjxnZ2bcyZtWPWo7P7rBKyJ1yyWrZgt1Rajnc3EX5E6wr3qSLWZs9j2gUfLVtQFoyvnXbjNL2ZtbkK87umSoSfQ",
  "key31": "2PquaHfGmNLbDxeSugfwEpYT7GTgxS3dTJBB27xpTuVUof97NyqFh9qbrZe73vsdXxyjaJqrEVfptdA2eg2KsbfS",
  "key32": "3Gp8HMQZfTRj4T8DNi88dpmJX3JJnmmvmXGcADmqKp1PBhXhgKXkYeLcJhTvBGj6r9zqWqdrAwSCfFkTFp7gNihy",
  "key33": "GXfkzPC2ekKczkRBCrezziL2HvFZjLgFjzBQ5iFwmM2tS7Uo86tCeMEoG4MM8587apTigoZ7rubXBMABcH9MYZY",
  "key34": "3yHZqLftiXUpqpAfyK89CmzTugj1NjZxsZ8zSXoEK5w6L2sRjyRChLPLaUUHADzmJqHn7NiDfcVuMgwGdmdBwewn",
  "key35": "5TyNBzQgFkjEzC5CnvTaEZ9gtjnW4ZoPEqKhTacZ32hGRGfQazzwLB8WqVAtHxkL4YDCinxxo1D5mjZkeEWEzzyr",
  "key36": "4Mwu1J6JVa8YRHpsejhU3UsDaaPcbR3VsF1Z3shCyHAfBZrWBpM4bhs9EPJCxBoKjHFYe1kxyAax9e6s8Lh7iEK8",
  "key37": "2s5LPfAw9kLzvAgAKe18SedK6WeBbe1AWFLqogqqL6DBxXNFaJ6XmTBnkwNuYSRRJjKexySTkDMAWeLdjM3dP2Rv",
  "key38": "3Cwx6uN5bc5bE2oZJDDL1JvsZ8JC8tXfyukAiaj1nhe87R2fPFcyoH7b2P8en1Ytt4ahRXnpVgrdWCQDph7zWnZp",
  "key39": "4oQqbtnob1YJRzHQSCkpNTUCGWYFc36SWpG1boqEGusY4r6YFCCfUeH3MhvAVPjAQsTdkMkyYczEUY93zPJDUmTQ",
  "key40": "j7EwnhRAvHR2esJNjUPEPkPsdLcccJUBLJiwRHU8tvj5Tj1UdVVC55nmCJ2MbXHQDeTdjWyoK89XguVeTgEPjmS",
  "key41": "65bLiih9Kvj3u46AC5v12wWRDvxHxDrWJkNiqZNezTmzvEsxyGWQYann6vyuSVgdypXqLTrHG22RanaiBuaVamXA",
  "key42": "2u6gpyZ6BWUCc2jcgkFFq6s2KdnKaRRQ9YRbcSxLCjqWSQ1q9pDZEUJqvvJsmbAtXH6v8ptjNR7wRKKbxQ2QdViU",
  "key43": "bPRDAU7pKiJ3rKCEQpAN5GUDr6sckxooE5HqobP5VQRSWb7Cw7UNzmuAMkZxbWD6LSCwjz9CAsNFdtBx25i6DqZ",
  "key44": "CJHWocH2gpoQ4j4H4Zo5dC1bzNgN2ng3hpZSAb3UB9uPMgkQouvmaZYqSgMsywDMj9W5xstUqbCfU1pyDKyiQu7",
  "key45": "2MepzwqKZMJnpMdPWtrangPXFVi5d7wYar5zygb2tKmEAyogEJLSKfrH5AJeDhtHuMK8i56eHKJ6rwe8ks3zEsXP",
  "key46": "5CeCzh9ioXMkMGyz9xXLeiV15axaQEzB9deLBHYZTFPXNSP711zjihZuyNLQyEtnhU3A6TtyuuP3jvRg2CbBnZtJ",
  "key47": "xnZho6ELTpfhgNSsoo2rgYX4Z6L5JCEcPYbUxF8KnXu42SmrMZvGRXFUuxZcgLdUF4RDdmJxB9a6ucRRN7iAKA9",
  "key48": "5mcAnYBWcrTUTAnpBbieZbDfP9DnCTuNJbrCRY6ZLEQgRd3XSZMsSU8geLHpaMc5fLH3x4Kyc54cAt4zqKVKJx1B",
  "key49": "59rJEeR9yU4XRpNrJJTpvu57HnkS2ZPaMwtM5m3uRQjjH43CosHhkkcfyMzTtUukgisHZvNuQ9ZJ2Pi4w42dvcSc"
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
