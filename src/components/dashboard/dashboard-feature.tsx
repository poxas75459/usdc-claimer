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
    "2BZX1FL9Rm8cjAhJdsHrp5reSi1mG8tzcgia9R6bLyh1AJHfncuGT3CZ2uWBwtAVuw7iEYtbW7uCDLEYHhDaQxvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBpj1CXt8swkADNqWamwufh5kMpboBBoubHH3BXKpDfn2RuipAUviUwN6Pkf39HKTfwmEN2N947F7pohvPi6xTP",
  "key1": "3t4djxTMV3bALuYJupjdt9irpo4zTNe5aum4J4qKxX1HsynbtiQRE3cwZE2TSxKeT1rSAugbvq8rHhVdXHJcfCNB",
  "key2": "57nQFqWm2Yq9ZiaQ1D7f1HnrZtQPowty8UWTJR37xin42QxXkvznHCQKCdoJ6q7X6KQhn1kTS7ZBBh9AYzX5oR1y",
  "key3": "4dLY1ahNM8kiv8NAjfonzQD5jCksUsHn5DghK3NJnvZY2yBQVty1smRofys6cDLQHeXi22t8LRvCFWfzHZNEuA2G",
  "key4": "61JcqudA3zr9MzibQ7D5jPXHuMHSjqYpzqMKrNL1dtJSbmUYBGjUAe5SqYVHCnMJ3Zjfd7rizJTBE6giiZDd3F2P",
  "key5": "6R2cfWSujwpjD65kRr7myucptoov8mgEjq4wBJJjX5wE2uwbkvsqcDBzPn96Sb5Zbjo2etxutwKQp9WRkQJRVwZ",
  "key6": "gYupLzVH2kqhVEoi2inCShdwXjm4Qk2PwYg5pRxiGXeVimvVgev8YMbN38Z5pA51Mt7QPpFpWXNJeaLmbvjnR61",
  "key7": "2pHwDYVUxMem9Qvm8ghyaJkfj32gpKoE87jPJAxc16wYF6FLY7jW34xD8sRpKbJYQU9qzf5cs4Lt42WjnB3bC9Z4",
  "key8": "2as5oYhJCU4j8gakv2m7RYgDw9LzSCAq6TCFzqaFWB2evJsLYnZKeEyWbK2wvNgyfQr4zqqRtU5veSGjiF5pu94m",
  "key9": "5XbMs7VMhUYDAvkoKtpYBSsZFKFFub4YorPYqeetPNZWZfAevdw1EQhZYvcPRRyrhmaienyTpJUvr7ALu8FZztG1",
  "key10": "3DNr7JAMRm8kNRMypnKvZUqrv6QZcAYWsrDEY7ZrjDUr1DAxhJcaya9hyfKCUESnRFhYoyaSNnmFW4Pp7uAzKagG",
  "key11": "5n5JCvphU9eSXY4wjEKz98AJsTukqT66b8238rhY6756QhCWzyJN1Rs1TdCabZucg5NNHZb42T3yUHVvrga5Zjpu",
  "key12": "3bcUkAAe3NcgdFnpUcLx7RQrMypzcjmap4nMU9Uzcb96gH35YwjUmmhJqiKwFZDtYxV6u9uwEmu1qUUhWMacF8bN",
  "key13": "2DtNKE88stx2tiV1eZ1MgY59NU3UnL1eXyuAkP6YreAscniKGqVnYqoBBNQsNx6ukjVsh2ywBSQHE2sTiZNm3SA9",
  "key14": "2ztnGaACJdTZhJouboGcfo4F5J8E6mhTZjsSW9RLukm7kUookbzHYFYj34d2z3WhsE1MLNsTuYFTpH5P6tVod8Ep",
  "key15": "2BNFtYTAU8sv15JApM22Nrx3tGu5VkVBAZJTXSbkHK48tSU2fnt5uSBYMkXjXF2StgT9h5HDSeCFzLPnCTgyAxj4",
  "key16": "5kUcW2dwUmzgvEb5eqj5f3DZ4yTgehshoomCCyWdDDaeGKxCbMKECqdR8GsUc6Hsc3pyUmb1dW3BrLFJxNAgaHwt",
  "key17": "62wAVh81h9SnpT1ZYmavptuvJWkjSnPGZru4J3osRwCJUvY7SFvGbXsnmjqPE3bApngV5eoQiZnHwDbTi9nCh7xJ",
  "key18": "38Xbp9bKFVrUyNUwGdWA4Z5FY7GNkrDjo42VEt2Eb2mtYm7zCjBTQ9GjHWM3sjUKgwUbae6iB7x1xRt6ks3JyHcp",
  "key19": "5PVLVtN7rYumAKohDCNSFZuVJHkCTseoSSZDNLPo1N6EF2WPoJ9rJ4YhnXRz4erNLG5AYRxBnumGnDB3ypkuQZpV",
  "key20": "mngHiMhge6GdJgJq1qkqQbAdWgXsYxntDVF9HWnugX6WFiD79Q5XtwNYEikaTfSmcpRoVA7RYnXMHt1ELvnro5P",
  "key21": "2NKambGVGHEmsL7HmqgjBptbFBJy2xdN6fwhLbjbJZY2JoUuhHZSERiav7iShBx8RT9brUR3syMP9bkeyrGN8noM",
  "key22": "2LvB7uvf7CjYEB3Ng9mSVKReDuD2GkkeguRboJgnc4H2LLDUiTFzFAdycZXQrjEC67MNAdfSkH68LSr8ULSbtGqq",
  "key23": "3obkQLRsUU8ZpaTA3QtC5RB9SepJYx41cPeBbtqTf3WahoiPV3SGPJKASRv8eHEJ1ybiDo6faHbvPt9KWRxktxok",
  "key24": "67adUwhgdNTQyp9AuCAmZvgDKBw54ACJW1ZQ8XKnDXzXANQ1o4EN1KKnzECvKWBDdqNH1c6gaevtpM6okeS2VNhb",
  "key25": "23bcSpvpqSnCn1TFtWZXYhNFZUmv8VKwD4Rq4ZWkLGaDXcnoijZLiCiWFnsza3Bpet5axB6aStAnaHFQzEmRPCyC",
  "key26": "4XpT2FsXbUruxfWXPczC2TJUkvCyjWCizPeckEeZBXdczgiNxPu3Zmk2DpyKVqiiXk6TAMJNU6yg67KcnKMyp4jR",
  "key27": "2pdpzDzC6Fjqr6sq6HhpxDkMaXFncjTULkiBkZYyRZdEQwY8R13HEvJbDhwL7psJGmJNHJ44GaQjxM6zwDJwGFe7",
  "key28": "3MvJnxck9AMmiEu3yKrgMoGjPAhg4dXVvJvFsN8Y8oo9D51P1HK5G8EsJoAma8hyLoDHFJ1TcSAcFgvTtpd5Wpz9",
  "key29": "2FRRVguoEMTocf6fLSXwbyTpCXxcU97XD5tMAURwCZHEtjEMf6LSdiJ1A5ohthrziXjPCtsqSDuaWAaAXpmEWzGY",
  "key30": "3UKdJeZquPiPkU9A8XhXy22g8DksMaoHt8uYUhowjZRQc92Y274qUQR7rsNEkkqrU93Wbg5CMKADnkVAiAnh7VZe",
  "key31": "5ZXdPb2Ue6WYvnyDRRMR5ume48FhU1LHvZRk7FjmQVJ8UkoFJ7m182XgvfMcgtYngijUdiJRqWZiMqAYQFH8j4Uk",
  "key32": "2vvwiZLmKMxzRYeFxyKs4yLTLtHxRYB58rg1MJiMWktx8aLRk9oiRzC32GHHdWChNav9Pp2JRoTSUvdahjV6Tgvg",
  "key33": "U99h1jcPbj6nVRT2R3q5BEuZoKhnkCbd5vN4LdU6QUxikhWGpvk7N8dngrbVQjWRK4xG38qUEZYTYQunpv1BWK7",
  "key34": "5rwMP4ACQvrWGBDqSbPZQJqUrNoNTct3PsT1T7WmocDcLPwafbUakVWrxAw2isRmJ1khjcFxxixHi99Rm1FMkBgv",
  "key35": "5FMtjbYxFqDKgi1n5cvtLeCzxDiMEKGLwyprjUHL884PLL9nNKVgvdzuxN9QfyqEGJL2PgASRPbqW87xhACAE7ra",
  "key36": "5TLMdJGhNyh7vBsLPESSuWyzxhT2zMqzr2Vn6yL8qzv4cKEyMgoxWhynxFZWcEpq64vY2uGkM9fVVqMAT81riYgd",
  "key37": "2XyDUz518noDQptWApj3Rxdhao2o5R9sN2ifWfpeZhdB1dzmhnhNyU2Zxvjp4pJ6TuRwXv3LrjssKrt1479QzBbd",
  "key38": "2PjMzzBZsRqa5Gy1kCyHZnDVd57iHHy1wrYofk4aRm2LqFyczZ3AUwyiDKZuweHG8Z5a9SnfoLep4MH3RyfvoJfb",
  "key39": "TS4t1htg1dRphu9VGSKK3CK3dMLsxDz3Yw1cTKhAfwFiG8qWGDMwTyjKKATC2scrRC1JGV5rwzbuncMwjrYmhZK",
  "key40": "3JhgA6tuHpRrnYtvs35Lpz8CGjeoWCgmjZyy7Rpmmz282PZRZpP5Kdm1ZYvbdPmg5HErSFz6ULVniwJVSwD8wBHD",
  "key41": "3VZTANwsAwQ3gyAUkyMDbNUqjJca5N99TqrwJsNeFaFcqqSGP2u8wE4v2iYDhYT3SRDBHFeiwDVQmPnV72fFFWk5"
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
