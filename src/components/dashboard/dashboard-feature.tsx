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
    "x9s6HtuSzBkk26EVo6Y4BfSfYAcqhaCPyNWJwoth8WtsbKnEe29VsQuYnvtmndwZrXia95SAfFsZzkgb1Bw5s33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkMSjc7suk9aE6DswsCbiS7dJVKKw5Xk8taA6DWh2SDMX74Q7B8JC8XTpDBpsCteZ9s2VAP3ETRBozcrHUk8abB",
  "key1": "xr7qjAG3jWrmqQoNd1xY9ee9KnooBp2hLvCE5EXF1NXTrrQqfEKkKZeeEYhf54mzTDLtVM4tWDr99cBUm38ccW1",
  "key2": "23qYqiYNnVwknfiMnkQWXkjqS3ThfTYqs584NvMqon5VPg5Tnx85yyQWSiafTaAFnC1KmxNgjER7ugYUdj74PUTR",
  "key3": "27ERzQVXq2Wd86n9yFWL92db6owAFZpMXF9TDp5nhqrqbzX5bijmUj1szSSZeC5G3rUo5eAfhAqmLS1QJAuQ5TA2",
  "key4": "2VqKWqG1V67Ep6Gge5fU7ZDpHfGYoBPVAwaC8eEbS6DY2fbchwP8AcbQMfX3kNcfCtJWtHoMHm9P3m331h9EgVeN",
  "key5": "4ucU1xae8fRhEP4SZB5B7BZBY587bEFET9j94xseU2vWu7RvVRYt4A9YVNNiSDMo36YKwBF3cesWqfovAsozrEdH",
  "key6": "2k8MpUW4RuoY5tvvsYHtewLyv7fFjQ9zL4RRyDjxHqMEy1jq69NQfoCphk7X5rFDjYdH9wGZbFE1qNwYLMKcrHYi",
  "key7": "2vMiyY883psEEnF7QtV6PuM8q3epJKNHvMqTqqfQsfhbJh3Nt8yDV9KvYoSY4Kd88NLG6DZao6RsEoSrqUp5ZhhY",
  "key8": "RyPWeZyQcDLEPKGXRzPE6dgLdpgsiPy2tbBgy37B3QHXtcADD2iMc1ijnYzHe6RFMo1C8cZZg5EQJ4EUMqtoQKv",
  "key9": "3hjkttwPwYvShRZGRXzJfeURMQeJAwPSxnUbrGbgLy3Jg7yT4zoqMf9NqMUSNaqFiKpZ9Wf4QFvDHPr7Mn1rfLL5",
  "key10": "2C4emvATKLxrXrSkHXcdyvUG79T5uJ3ghLRtD8R9MzbJUYfo2JqYWxxFfcTxWVCnMvoHSh93Z4a5Jt7cXimUgtkF",
  "key11": "5jt1GvNM9KpafK2F6PRa8rtDvRUQ19bk6Xnmc1WumHUwSu4aYDagMdRMznAmD13vkNRWXLjRCUSK9RUmqoLNMMoX",
  "key12": "4HeLrGN1iChvow8gacs82AVgrqzqJTAfhKAXfKk8qucL8DqjKHp5wQUJmBUaX9jVfGdJLVUv19Yxt4ee9KTikN8k",
  "key13": "5LkXnAQWPkhc5Lfms9uhZEK5GKDErrHVJSEph5NBMk7Sxop2ufFzaSMZF6pdkp94rbxagppt1cH8S5MZRUwnvLCT",
  "key14": "3xNHGdUXRHMiBaPCj4KdPagjnHY2jYDU1rR39UVtHjBiFZ4c3VYzoJciRMT7iWw49na9q9sJYFdiY2g4ipP7sz7q",
  "key15": "g96fKGBzFbCHrvPWShFZ1QY8jcEQffW1JUFLdPhSeDJkTMKDCb4c2PTBgE96Py64sK3n8H1fkcmfp7vcaRmy3Au",
  "key16": "3xKqhgGsrikg9UhFMwkn1DqSykRr2efKojT5xBSQUQez6Y2gRTxjQWKJceECcCsGhEb3YSiZmJRxLeP2aKadPSNS",
  "key17": "mKRj6iBoLZJmK3jvZy22Fk1M7zeceQdtME6rBC9AJbDXL4DYa8RdveE3xwKCdEAgfonvSVjfBsBqGTmq3avWAcx",
  "key18": "j8gG9duprqP8M7hdX3idi6r7mYECs1XXtB77nstskYLcg3PLmiKfB58bnchgTqhsx3gGrpj8XP64Go7AMDdmoC5",
  "key19": "5d3fw2xz5s1sAG9RZkUtQwsLEMmxtsSJQraMD6dEbDrSCBizxoRJ1dkn6XdajEHyBQwaYq4nifpWHCLyi4tTRN8X",
  "key20": "2goCphB5uvN3sn2uxx1PEc6nTAjihjkTRqfRGY1q5yQwHR1c2NuPFYN9EFwwWPBybgcKVfmNR6KBmk6VANpY5YWU",
  "key21": "3t1M6kN5mBeSTJgNtHJC9ouxBgPHtqknqDwq5EK86FdgLvLZtd6h9gFYq3tgjw3Zpp9G5WLQ6TuwQeRneepUA4uU",
  "key22": "4EArt3ot5XJ8qKVitpZjLbJYGybf1vBkqodagBFYeztf61L7YaF3EXizc6b7exadN4PSyyx2h1yQKSziJRTGjDbu",
  "key23": "gi3GUTYHFoTiBwW14727buGfBiUMu3v7kPDUhPaUq11nmsk22HGu5DVGHV1BqiUSaiMqiBFhjxRjyLdVzoHJE3m",
  "key24": "2WphopHBYBv1uGSVcgFooAK9adbksax5sUzQzczWsFvonfHSQTFUAGqbmEa3xq8eVfBvNoGPiaoWfRx7AYuUthH6",
  "key25": "nyQi1kpZKVf4ThTzKGyt3u5v2VAa3qFwx9YSJoEeZeeEFf3KseVqQpL1e4jBUDSGRgANe1MJnverRYMVvb8C65Q",
  "key26": "P9M9irk9hWNSxP9YNodo9FYUNsSxLiyHSxT8w8vf9FaKitK1e8iLZa1Ppgf2soC3s5j1YUB5CXhmdcBHq9tTsBW",
  "key27": "2KoKou1vjHXVeuQTqsQLfpD22AF3ESpSSA8hHgiBPLAgGen5v8wHCEoBt6jatQp5vUhiRXKGfRj6aH2eZTb3Ez21",
  "key28": "5B8H1sSsdhm4NDvEtrQcfdwW9jng3tPT41fjBKswWn4FWpWhtz87onD3cH2eHV7u1kZjfgruPj2JnWtv9gGnviPK",
  "key29": "22VQoxPqdZ6PUGsU8bKpwxf2uNLwBmCWEge6MssQnMAXgaWFksVLJ2BSKEYmx2ucDNJ6uQ6c2M9vBsn1E6XEZxzs",
  "key30": "5V2q86aUMwYKE8bTA3atdjJYgahYpRfz42gnkp8YSBZMQkfSRPJfaAW4NqPmMqc3KdSkXRDitAezRPknmPtaY8j2",
  "key31": "35NLe9ZemUKMLd8mSYKnSjjh7chNNy41XL2TWMGr7mZ1tV9KmArsFkVVsicromZEdakPLxB8DEu3KSonQQh1s6nN",
  "key32": "qmNh2PUHm8zh1XVx9qbXed3DHbQb2iim2zQqTkg19Eh6LaRLpdktygkzXpZ3FhhgqBeABHLA5Gocky5EnL4xcYu",
  "key33": "8p55DEtnCnCnAJibWe2QNWciKAJwbMf2RJX9XCJrnD6QAxWz68unPgE64uXaaswLJ1W4AG6CUkV4KeaxeZ2R9fw",
  "key34": "4ZF4zBhoVrArGiifcuF1Rhn9T7rGacVtWixTeXwHtepyt6hgdr2cVa7KyXeGG6WcDm4Xfx8VyFnoqwT8DAsdcdz2",
  "key35": "51S8JiGZPgWH5zqhqVi6BvwS3uYkz4KD9cAtsdFTbrF5GYX3ukwN3ufiZqZeXaVaXVqD6XHeXuoSVDpxNGBQKhUi",
  "key36": "28DJpJGhSNy7tsU2goouFsALXHiqsE3zowqSgfXcYM5ERsWrEWMoPKwECV3p1daCmUWoPavcDbijQekLmKE3yu9q",
  "key37": "rEyAWc6sT8DvEv8tnSEt1V85uDteH5AJx2p2R3UZryjhYbAX2qnDjGmEJkWah8qu79Y9XaQAecf88mksJPdyVZa",
  "key38": "5uydHszQanWEN24GnCxASPyF4dtijM3ERcuwZkWNVGVc68DfJwZPxjRrppmsWmwPY28bUFvwMakL9TAvwqhpgCJy",
  "key39": "4rPUiVvrqaAey5aDLN2WX4UD5K5UYziG3RjVwJZDK92Qk8o2ncF43A4jNtzwmKPEnKEqTAN4sNFTc9SCWAoqcrnb",
  "key40": "43LZSox9JWgUmi3YdZSCZVhFAVAFC2Peb2sCWFj3mbmn7au1QyvP86Z2XnDWLpAfMyBuXz4BFvVBgfnxD1veLBkf",
  "key41": "3xzUg2jwVVkieWEbFUNWpN6jxJ5SedjGiprpT6anPZouVK6SZ7eDeoyZbTxqpcAQ17eRnuFgNXWdMoyS352ZdR4m",
  "key42": "2zEqtW78chW6oGjgdMsdgUphtiUtjjWB3NEDhtREsgw7TuD8Vg4jpraywbQcbUyv86WB6qJKt4Gfnw13GP6Enubm",
  "key43": "4NPNNRCufajQz7JBayNhG55jPGmP49y6ZZ8jJTj6nciRRahSfnDyEnw8HjHSVDqAHE3HbJANf2ZEGTaHof9Nngyb",
  "key44": "3FGUqvHvS5hp866z525cuC5NerRAs74aFFX22mgCqpquJSiAxerLf1CDdGceyiX2zpj5uUJxwDXqeHwptjvbBRgm",
  "key45": "QXGEcZBfZLdTWVXFjPXaFNPQ4mZBZfmQchCinriJDPHgSvjfJfqU63t8rfUiCCifwTGx65BikjVxNRVPAqb7nFT",
  "key46": "5T9Y3BQXHt8kyaeiMrrkTq8XbVjy8DrYPdpG7un2nV3NwBwotnFd4AAQUh5PA6HZs42eenR2gsr8FB2aM7eHtie8"
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
