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
    "2ewhw4gsy3zMtmaS81yqjjMt3vgnENkJ6xT4FgfyMhn8iDovhMrpxkgQTuArvFp7GgCgMHP4K8W6YDNdLrWfVNnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aNUo1Kh7rGBV3j96eZfe7QxAjhZiaEGEU4ZSVN1RVnaAfKBPxm4QnvGF4GdjRuuA8Uk28PYxoMuwNe6chAcLpyv",
  "key1": "2yLMACMxAqb3mAq3WE8BSYKiWafW9zRvckJDLcrJDHhyt2QLX6ECRE3mNJF4tRxnKhcvv7Qez8GAWoVDj9XnLca1",
  "key2": "xedcj4pN2C1HYfH9C7e7io9tpVy18TC3jW1wbRtvcHvscA4nn8ijnzkMMwVUS4wFhTB4AjXVJbq5fNZPEGH4PEm",
  "key3": "5U7TBJTGbipHWQukZJgT6VoM8yY9cmbSwjA5hCqoAhGpaVcQHkxm3yMayD81mefc7sPBYaTGCAMiEtaL5v2SRWLz",
  "key4": "3jMhoeexPcgwYusPoMVdnWft54QU5FBnwaEbDMQZMsjV9kKno2Ek35C5QfqAwwkqESxEHxwQsjWBfxcZhu5gwTBh",
  "key5": "4yXsrErj81qm1tuZgGbkHKgpoS5t32ftGYdAwGEitAVTMYAJBUfuAUfK3VZ6ZxhKFTL4voDCsnHz1D1yo2kGutNK",
  "key6": "4KVQcSFjYgd4mhvPpx9ANN4W7BrckvVXgPhshPPRaABcYnAf7VPaVfAmLfKekLw28Ho3KcsaARRGvGaPWcxrJqfr",
  "key7": "3mCANug87xztjDp4CFa1qySraVgwmfa48NnjFmX6AiNKmHscrBQ64EHqnUJCuHTsnMmvWpXKtcBoEUSVwH8HsPkC",
  "key8": "5iFKwTpTozk1MTY1CN1M1HZL61dWFgJYy8P32G5AQz5Gj8TVwSUdZaBUX6WfqM5gZTCiYce9rifqMK9B8w4goTut",
  "key9": "5Uj88kGzPUdsDX2mYCy1Ve2ZXMNKSR2u7ZLrRZ4UE5mE55DJwkDNPZtvNtC5bqZ1qg2de7hpjrQHnNhbnbKe7TAB",
  "key10": "4j3Fyiw28WHsUm62SZn9AUZjFnmXMTk6XTPs7VgBaUpD1wJwpfqS661FdFBjACvZYz8jmxJuNxQSZFWyKr4vGica",
  "key11": "5xJgQAP8Unc2ACaJWGMNjBRM7hA3fL7ThcjA9fmzaoAbVjSojkotjRmieyiJmHSvEqpsfqD4twfXf7R3qqkdWoMA",
  "key12": "wjVcJZpYiDhpWquGYDawRQprxtJhosjojnGQ5dMcX81JNsSPgTPMUDx8m2u51G46w86MSGFiES9rJXkNFa3qqsu",
  "key13": "iwadwgs5XZrQoFWw9AknNzy1Y3rGaPm1MNzvV6Qrk6VVPS5iz4RHX335zYKGrA2Ax3GSWtji6Dr1ctAqkgArW9u",
  "key14": "5SDTmyZvWttGZH8CJ9rbVDpvssiPXgZqPQAV5gt4JwKwssrW8A3pXAvXYYFypZAiWi6REyiKrCZ9wkLWGqTsKWgk",
  "key15": "2XJSUSudz7dYhvGGgJMmgqiduECiap1CYYA42jmPcxXLQfs1wEhZ3pLqwwyJ5a3WFhCfo8LrYNvuUzDqiqDMRzwL",
  "key16": "523Sj6kU9xiokDdVmTmttRxxxVGwjGRsS61Z1GUwZPDtZfCKZMrq3bSeRxrMDe8K6CmzhKPfLPnSXxgH9zczqLHZ",
  "key17": "2pv9DBLQGut1kvsFt5RvCJ2dEZ92N3Gid77gRnRQrGYPR7gtHweq16NkhdtGZ5AAMKVfCnuKvmNFRuBjaKVD8yjA",
  "key18": "ze8Mx3i76A9WewQVG8ZwFnGQWJhkoUrxkk2i7WTWjWoduijjaAhUpoduzjWQ21nP6XN9MPSecXveBdHpyz6pGuH",
  "key19": "cNtrZm6RGngdfV2gn3ooBJfthvogdGJAm1p39ZTazKcat91Ke1wpGSGk13TdKh9xZoMJTQo1mPQJp1B59TUqdS3",
  "key20": "YXxN6XSv5M6ZDQ9j9aGVJVAqx5asokPD3WyhNYC61hMSe63PSE6JnKENpBc8hNr7N9QFKBggjiNF7dS5pJX5N6E",
  "key21": "YA5xY4S8gsKswHKErpNzvyqgfmAcpSFhCXLSJajWK5CoQJSrpz48oGAQ8xfXcQckrAnqDKNyppUo2gxgcWKo1Gp",
  "key22": "2xQkMpiFmE93ahfZ7VJsaVrJCgfmYbBcmt616FwpAVSjRfEuKWNrXmpfpdR2UierZJJ76mChXUwEXczXkpTirzio",
  "key23": "36QeCr3U82nezzZiy3SYrdntvekcbyzy6crsBgCPgqQfVAYaCVcjLY66v2x1whCxTncpDgtfxEucAe6S91mNJ7ry",
  "key24": "5ubiuszeZkSpAfUpr7xkibtF6WLxWksAUNkQVSk4VbovyqBpgC74cVBAsYM86toEyuoiWzKCDLuAFHH7F5rQaPPF",
  "key25": "5HPLV5g6RvQYpgVLinN7XHXNpCniyQoKrwBDhNg243piY2XBy75688cC6NePvZQCTuChJUXw8k9dfAg7Sd7jwYLH",
  "key26": "5wGLGzBHNGxfZs2dZxg4JgHBBvuzHquvQRAGAsYSjgNpohHUrT961gn2Vn6RXL1ikXJ3wGe7cQ9VophFJCcjbSLb",
  "key27": "4zHwxYubqAfXGWAKeXWqNKUd5Bhe76W8yZL9fTd5tf1fHy1nBMHch8k3g1XGw3tXWpJcSzmmAGMLYJ59kNARLoKJ",
  "key28": "mapiV6frLnRDNRUAotg8W4emXxjaefqRqnwUbGuQrJoJSrwY9kAG5JzCcbWqaQbxDZ5aNsvbJ3hX1rooaSzVgEY",
  "key29": "vWmc2qPxsgS2pF2d2vWthfqJnd1hzNgCi4ASx8R52vGpd39oroFbX4vhopGT6U7pEfGyxHy3H4KWWhwoiqxkERh",
  "key30": "4TZan9pvxzf33aDAG7km7qJeoX2y71TDnXsZHyX9ozFysmSnfVSHmfteeP4JMo1K17ePxzJAQ27LLngqJ166TygU",
  "key31": "2BvS7pfcY6vjnyeaRRdbzBta58eVEiNU1MiikaUZmPRcNK41QcFuNHQy7nqFCsXsBJLWffV7N9moxBr2RHVY6a3g",
  "key32": "5ZfT5pLeEux8hgrQLEv8oZDBRatnYoYTsMVYPhDeV9LLqitsEdtnouvkgYKm2i1WXkSS3DceDzQKdoFsVT94thSv",
  "key33": "4MF7FnrpKVBuhGrBNczBEym5hJRtQZH7wCWbAzQi9MBsPLjZsd4QrVh179Ed5v8gxqxLgaaS6s44WuzJR61nNMZ1",
  "key34": "3UityzAgRUihkBAj6pHnskmfbz3T36XGysJLqFcDuakJZ9cKTciy5WnD4Zj7AniexLdhAL1CrbUd9xqCDGxgBxgJ",
  "key35": "yiaUrtL47xCB81K9fx3xgESrvMcmJqJxiiwLwLACyt2kQiQYojvAHt5ftLNkZzhoaYHnxZQHBzfnhAWV3GnZyUY",
  "key36": "2E5dzXFdAXChmYotE68wcFgLC49dydj81VkZeyGWxdRg9ZdonpWD8q9QkmbpGoXSEQMP7kVo5wuWdE9qaAoNNgh3",
  "key37": "SzKqhj7uu4ByavavDwB9G2Cwfksdwb4BJy1KWDp41tzjt7eedHxzLByxnvpZLjGM4Wjzt9B9g6pCjx68GRN8oA3",
  "key38": "5JtVKE2yh5p875gdLbUH3Y7hxk1wiXh8ZVdDywyyeJLgF34ov6Um1UdP7qdBLwNT6tjzuQCg99yusmkkVdF3KE3D",
  "key39": "28xDUPiEexCvHJCRecnp8oQtsHq8uqN2HFYwyKLRpBq8daJDm2QxKdtbz3R5DrSvavqeb7ed5NnDYerDA2ByvxmC",
  "key40": "obvpCp8mYJHer4MSt3N6Hhfqwsw8uxnyRMgQu1gFveou1UBvpT2Um26UMkN7ZFbpFDQAmwnb1kFKBArtAoeCbBP",
  "key41": "5dHPFqpAqkQ6jy2WuoPmns8TNMuPa7Qdna8BvWKk31fzWnboFytJ14fw1dBkeSs93AsRabfxGUdWWVagXkcBqCHo",
  "key42": "5sodQhBBfYmNcWk7xpaHoqrrvRGgEqyP5s98LuvQNj7ZSwGVx5RHp91fVrjwG8nM1M9BnKD8K18Jebkhk6WxJQMh"
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
