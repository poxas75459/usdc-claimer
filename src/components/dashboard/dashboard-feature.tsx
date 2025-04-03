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
    "4pgcp43eB5zmqKdPqL11Hehfh3VqoszQcgXH37q3ZtVkwJptxwL9DU2T27gaQJSNgGBh6uT3DmWXMvT3hkaXvU47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5rFfB6sXAPYBgEtmRA3uT9AgPB8wJU5g5HpkZPpw1NLsGYuMdQfXhEwyckfoZY3YxNcZ2K9Rrq2CtZ4w11ytZT",
  "key1": "4qANGW2wJXnuWKsRo65UrdcWREdmGDoL5idg2E8Bj1gxoabcK9jK1WJT6fLwXymsTDrB7vQJ8LS7WK5LrtTkAB2z",
  "key2": "3CRoXLfH2iRTYNgFi1PeZgjV6mGKodFF9A7dXRb3NZiUMibX2dywHVpvyqiSa8VukiGfbb288CuupE5azN8haWik",
  "key3": "asfy2KT5kUnSy6muiQiTDmZ3YHssZXjhtkEuT52MfJcydQhmgznhKVgPhGV1j1mSpD5Uf9sqnRMv9AvqwVVCQFa",
  "key4": "3cvf8yezaBoWriVFkqXreRBvUWs72ageEGvkVK4nsqbi8w4mjWWPcFtu8x7Q7n5Z1s2MsPgYToYZ3hwfqWnKhyMt",
  "key5": "61TaxB9eDnZH351ozoAKT5gEG8FxAgPwsRgVLTaGVtBrqJQ4hjp3vTLvPXW9vwu9EpDeP3McZnD7RRvtKwefCw6L",
  "key6": "4UBcfZUDrVc75AJuQ6ZjyfHRSijoiBkuGoeD39U9DwdxVi7eDiYYYjG9ZQN1WkyfY4Qm9LMHb7vN6c2icE18ViBG",
  "key7": "66xi3TbzYcFVUmNnzXgpJqPDZSY2qgxk5ierqJoXyhwg6wn64D4CzsC242WC6JvdymjQiBS9eDVr6RN6F3zLFXw2",
  "key8": "57KyNuqciRvyWUiiGyJejfmfF2BRaQsQXG73dW3yqPtjSK7aeR7GBbQ5rEbUUTgk95H89Yej3XxWKECECjehb62C",
  "key9": "3sJ1PwvsT66b6PUD8cwTRci9SUo4M8eEwY7W23z7irxdjJaDsVo4etPMNngfVmSrum94KV3qkm9brRYeWdceoKj3",
  "key10": "5JF8VN6zjgvG4NSeRPoxSTK5pr2wbk1G6KmpdnS2YqaMxVEYfyv721j9ACQzhea1JsyigJ6cxNtYLnBiDWpnLq34",
  "key11": "4Psi8CnysTYZgDkdamwbm58RmdEFgyXHidmgUsjVWCVMwvLYmB1rhaXZUiyQXC61mFtVGAWqDX86k6TDYhnppL5e",
  "key12": "41FHhNobjz3ZWazc2DztSpEqFePUAWnegZSnSY7EwSDMszcdY36chRCtjupLT5C4jTqVLX36FcgjVAKYTRPJSejp",
  "key13": "5J46T3STBs8UAP71PG3U9Z4YbzhsmNEbMx1DN1UvaRq48ZjgWeUzCjFvLtL6sd3SUzs5GwsxaMamWVid3ikZDDDm",
  "key14": "B9W8Nf5zvV4prp5rL29Ekr4yxUBxufuB3VhiVEW8oTDHe3xLQZn88etr4YScoBESyRera8qcD3msTcPL7bGvLt4",
  "key15": "3biAHAvbkjFFDr6UZhgi4DBs8QmDepk8wg9JMtSFXkuH5M6pUQUzHEXR7F6V7EW9VeVwsGzF4U2g6ryTXsVmpxdj",
  "key16": "4FghjzWA6dwoctfpjHLBUg9jnLtn15inJKip6KQ7xmT4TKJRgoaTf6FRan6XRt9wyzMmpHHbm2zjHqutt4utSXbd",
  "key17": "aWBAEB1vCAakwKeappG1mRE9n5D6HvDHrDNXwTwu9kanX2m4qH9eeY9HQRRwh5ND9HEUkJFnALcFvYKAWbmSq5J",
  "key18": "7AxFzkahwzGQi7xJmiqPhwSL1T3enG4YNcD6KJzRE6dtbt6G2m2rWPXyV9f8UKa3fGAsCTg9fzAwGMo6h8XwrgX",
  "key19": "34RS54mSwH5HwnUuSoEvAsGXonPrDsFdh66wWYD53KpB3awwpk1Ai7QGiodr3tgpWMJRQQHdxhxydeKi6Ejr2Maw",
  "key20": "3HRGqvyAW8qMuaz75FTM74xtjp4FTNTM1Yve29NFZnJQNU4m9FwbZq6pCWSyFv8ENZLiXwo9XFdTpq81patfL8Ra",
  "key21": "4WmLjgZyYjMV9Ljp9yrGMZzBx2e1EEtNHCZHNk6UPQHEaq7wUSprFLV1tprrm59sv83h9RoMeKP4yYKkbgv6yg8M",
  "key22": "5rAoCcCTS18Sd5EFGMBhG5ZPZJqjePCR4CJ2W42WhanTBw885XrkZUaGGY95WQ43dnMXyWPKAtugDvTpxM2J9azH",
  "key23": "34cFTJ3ZXBewFQzWiEVdmHwZUaQhkySNeaEpk2Zfu8yJ9cXc24kMhPYVnknuqY1rqzF7Ed1vVeQ3h8XHcLCzp3ii",
  "key24": "2vFfmM1cTJLnWMzwjo2FFFcWSxTnmKokMULyfGurotJAWdRZW3ow6nbcNWYRuKkcdbpZqZfKGC4WtiLRsrhMDAdG",
  "key25": "uvzuko1XdnQRu7SqoPp66i4JCNs9xQEPSVd6ARcNAAs7Frauar7aV5u4kZLu4gZcFLFnPLAoYpD54r1N3cXPzPr",
  "key26": "21EZfwkT3LaSRoWVuinDNijqw1rhFgCvkdwZrENwAH9hX5apW6zKupy7MYQyGnqNi6zWGntpfPbJUFKmDhRHj9Yz",
  "key27": "2gJxRuKQNG42qY8KaDpoP5MUAuseGjXoc6xhVsj11FxDAPqq5QbRCdYd4XZE97ffghuUKjZETGSJNzYxVaxQ99LD",
  "key28": "29uGV8RE7zKQcP3uQmV5nQoJm3wjEv7WpDUECgbwmkokGm7fDJPwA5miSeKq3As4fcwnVHZDz4JoHCtagRSJJrdw",
  "key29": "4rksGSkzUSo91nrFtXujCg1bvJHuBuPtCUWDu6bSgGfxJ5eR7px6map8wYyFMRekhGctYtEbLukeWwmi4ohhHb4n",
  "key30": "S5CCrZE8846T4NreXu48S7yx2pJeVx2Z5Q3PQAep83zzrpjfX5K6CbTg4tUSTNTy8JMahAS32eYas23LDKfE5Xk",
  "key31": "5cpZc9joBKzFwypFWozXBvQbR7g7vcqwo6Q3RAbLBzG8SdJFVfwe3rfakpXMgWSKQzdcQWjLE7yf2cNdZGygQB6m",
  "key32": "66LfjyEhvuBxfHm8wytX1Xg4sprjHrpLNGxmKX97C5iiJmAri9W7r6tt1bRsU8kqqPRk3dvhabRoU9Lc7AGgdUMz",
  "key33": "BhRkvsEugFsdcLhynLwHXkDhgJjMv8RLf6kJVKFi37g3SQqcMwBPqmph7rRvCC2qVBFtjDWp9NhTXzSNLQ3E6DD",
  "key34": "5WV6aYFjSVKpJaG3SZDQJcKVrYnwycGQN7MoRGihQS55MfgVFr9nva5EsZT67SQJeBzWyytqHKPo3PTHFT1HEcpH",
  "key35": "4TbKWDxqXsBfqpTM2ZfDVAFWXFMGrnyA3Grmv22zudAkhrZgHAW8GLBPiLzv3Ba5QCG433DQimYx9jcPUw8E3br3",
  "key36": "3jWsrN65amRvCLHiXm9wV2Q6xbWoG7MDw5FMbg5iCPq48KjvBWe3feYUSgYeea1cS25H3XN6K6fpCJuSg7zo4WqN",
  "key37": "2tkWHHJA7fgxHQMuF6YVxtkMUU381i2Xgy6csRAs4ApxXnsMKtfAkWBcKEGpLgMSEtgbRektYKa9yYvAnyfz7y8W",
  "key38": "2g34NT6NorrWfVayEVrsGxjQMH2WHRr5hzLVyqD34BqdrrnSi2kttcxW52bAPxmRVBx9mdoMVLX5d6HzcHcTVCBB",
  "key39": "28uEidThbgY26bi12HURBVnk81YAnYtjJ2Uhzuz6ZrnHva39rsxcoV3SJS9DLeeL3DCv5bSwyBttyBPNQ2g43apD",
  "key40": "2BFRzBHLUSwKrmNnAMS798hGAsfD4fdHrdqYJqmvRX22yNgsFkXp7aaaNrN5hsnpkgvrCiSsZkP7kWzdaLSbyakg",
  "key41": "4m1WrezufKn6mENcCwGMgd4hWBM31oqejd7rCssNXLgPx33gZaJLu9Tq9mb5d1xN6Xus38L13GEjMKnp1xYEmQFP",
  "key42": "2vpQaxP1KccDwfYPSBv2PpbjzJoLZ6RR5oHupeRef5W6ZT4QVCytcfb3Ste6Lrkvs3WfusFtQFBSsBGB9QXsjnpC",
  "key43": "3Jq1uKyLQFCA6qS3DWGH2Jxwvhn1WWCyswm1KKE7UspAoSN7o52tHQuRSXnDJrgPaET4HPrfgP5bSadp7kRyJwJC",
  "key44": "49dJVmadT652vJH2cFTR6enAc1YbXhnSQ3QUMB34Z6KBNaDkwr9uU8tPxNAUaXcKTNDiQ7aWtbPxFqbFpWjALH2U",
  "key45": "466M4CSw7nj6M3djza3sGr7YFuJVPPNDoK9YX4hby9641ripZmhENgy4irK7dv15oQ5Q7QvtAE5upDXBL5f8zT3L",
  "key46": "5miTi87bPyTcuueiLxv5HSCzKwENPZaasBu78VHxBYKN4bj8LCNQQJKKKLqjxjkuWerbYBKe5ehmBsijixwrCojM",
  "key47": "5LUvNqD5huxmFX1sPVmZMqx2XvdJveTH9vueSmcphu9VWCh8WXMxGBKyAzgrPkNfjGNrHaP4RmfybLmBhzSQJFTg",
  "key48": "3HedPTyJDfARMFhxe28tct1Vc5qteo64TcvHHzStPS9ZYFfQJZuvGQTBayqwZq5Cs2oHduGoF8RE4MNTiwGQjqV9"
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
