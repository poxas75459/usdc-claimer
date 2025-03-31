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
    "rMVsEs3K8vf1rB3N3kSCDDqYtWpNZnNKofrBSr8DH6zuuaCV8YF4YZayvwGVMmHESnnvyGotck9XUCbVkNpNBEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T86sn1xhE5Yzce9uNfCgZaa3WJRHbbAFTQR17oCJS5p7un9xhc9Ecun9CbDYKWRTGaziWTF79o2qx4SdQ9aTb9i",
  "key1": "HWncsAGHuBPZ1Fc2wS4brrbPz4VLavwjDGTdg3sxvrthGLhaGXaL9hvFkRpi9mowLtopYwqiH7Unj1Ajg49KE8A",
  "key2": "2Ze4MWxpuXNhFGGzMUhUw9R1dqBwYeEuKmJH27GJufiqHEKmR9X8R1j3SiYjnE1iaTCJ6V7rDu346i6QKUJLaqy4",
  "key3": "B7kwVadxd9frfHrwPAdKCsZbAigZkn7Nmg2cqwx5twABd5EG1UPN6CGK2r9fzjvvSQeUsLduaxVUwKGSx2W91Wq",
  "key4": "3Y46UzTNfyPxo4A52BR2RnRXVGvtrkieSUAR9p4NuK9vLpmkUXewbGsKukFFcMuP9fzrCkdwhLzWWDjeSMQ6ufoM",
  "key5": "5kKivbfRUmdr3bcBbYCVG2kkHeET42RioYgyd4xUhtnQ53h2YmeFoBtTWhdDuEAGYKWANgT2bXzj3jdxnSrKpRBY",
  "key6": "4vgnm5TsQ3ckFRp3aLFzorJ2gKefmSMUvwuCcxCp4n4qJAtzvbeF2zEDN5nhXSz5iacUqwpyukwsErfDm8h5mAAF",
  "key7": "3wrvWfUrSzGu7uFQh7Q2segkc75PGeiT1FWSnbiajoTbfkbeZPyq8JRMqEsUjD9N1NDihfnnUz2fjSBHDXCdTRUJ",
  "key8": "2HYwe8uLJHTUnH7sgz6M9a6hHpUAedK8UDdP7NkQAdgV5LMFamqF6ktrQ2pRnLes9D7ykbXEvDpek7nV1dbF68Kr",
  "key9": "1xNSbBBrAnm6R3GGW5TjYDqCYcafqXfRxV3kcxgR7XbG8H2GvYrcBZhdouvgRepLdBMhAa4DbWqyZfCtsKufa8V",
  "key10": "awGMSTawMAHQnpJgRoMGmLQannjaiuYBZDEeUgaStULp7u4v74UFwGZopM9fH1NFdsZPFXvZkV6E94wZ31C7yvE",
  "key11": "X1vHam8udBR36vxvwDGTxLRbr6b3iktFBpDZfiNYsAi2z124mgp5unDdjhDdSiKRfoeKzXki8aKc9iicJ3m9H1x",
  "key12": "54ig6wQAs8o9R4YwGy2EAP8qSwukXbeYT5UPWk2ejKowZkdQeLBHCturGtzyw8C7n6XKKSqXkHbie9jGpoRwAW7g",
  "key13": "4s4m8DUSjLc2JrcvcBVBhQQqwmNu1aacQtbq7VrbqyKLXfPBe2LdTU1Z6KKGt6YARTykvX8JWK67Viar6c4QdfXY",
  "key14": "2NDZ7j8HWtbociCHcRTW2oohVsWcnskSSQdqVwdQu1im3N829RG4b8NyBfGJTTqoUf3VUa76ZNfo4De83LAPSV2",
  "key15": "5eVbUdgTca9rDD6EbEs1hSSc1No6k6HJP7rpXCbUfyEkoNM9TpU4jHJd5wezrqwFjomntsSPDPFnjiq3jMoFsnr5",
  "key16": "4151Wg2pf8G9RGTN18nAknKsR7JSwgAnqvXBUaWwwNv1B6fVYB2S4ueq9XLvhxQb4ACQADqAzPFPGajiGCJZcKqw",
  "key17": "2hDjrtcHJV1vWeAuNuqxG9p5vF4wUbXDnSxbTQsE2fiMZktJx5wRnp5U6m2cNfDRdTSbrEx8nGi2mugxZFqj3hVN",
  "key18": "qbDNksZ2s1zri8BLQYMyXcjRRYFp585vXmPEuW8wjHmZKZNUL42jxwytA2SHaeE9yijXSrF9vQUSjeMNzkFcPms",
  "key19": "5F4EnymFmjo2rywY6Svb92xHYL6YmiRs5jLPNBzNBwtnGoTXHXXBHP2KRuB9tKRcPNqj7VaVGwDHhAx91ZQHV5AL",
  "key20": "5FB3UDiJS4ViR3pGutPEDkCJroiZyc6pjeX47sooeKwN6rXdSgpATuZZFemUco9ExLe8snLnqBpVEbVMeLDkRJAX",
  "key21": "5mqjD47edjCEE2waNrDzqsz6i1DQE6eKTunmQqMzgbvNyGNSGcQqB9v7X13u2foyKrZZWqogG5Y7CbhFaYL5SEya",
  "key22": "2G87MPF8x9ipWfhmA73vu3ub6FoPyS49YWdwZLMC6qNrBTLbEGE6voJKR35UGxSqrQuQzULf5XXJSTYNCE7hsFCq",
  "key23": "44WUv8g7rxr16dbxYz2NenXHtLtVWc7jkJXvqZFF78k8e8mRkyasm2H2CW4HKLjKaYWd8vXhw9EM99tztHpuanu1",
  "key24": "4i1aKyLXpgRa1zACdQXXkL8idvDjFhaDXm5WRcHVy5R3SLWERfP2MAHLLUz6Zav8eM2wo6PMEaVRCXZatScXDMxt",
  "key25": "3kW7wXjrhtpSzZw7sQtdSEcKnJjTcqjLKxTFXjWq5LTy3zJ8x6VS1bm2d4xxergHn59MDWYHssgySQv6kKiAWKfQ",
  "key26": "4LoiTfYmHmnroE8HPNW75wwALHUpzxfWKtNQHrZ1hVZGA4JaQUUtesai4z49ibMStoJvmXRgWSTKxwxJ6oQdNBCH",
  "key27": "3yv8if7GDUv4hBaqeFyccwV5sjTZ7iWJCsfMerGbMPor2MSiffUCi5WAVp7KQojtgZw1P7i1rkQMJdJPRWYxBXRL",
  "key28": "qZ9Wi5a5y1bwkiY2ahxskDg43pJh1befCsuJgAYARqAxA1SubpuQfEgBrD4Y3DSpiZo14m7ET6A6mCcDqanKDAn",
  "key29": "4zJQpKGndeUiseAXgRMVcruqFzKEng6uEU6pH7DVFk7mzQH7emXaL9vbyqMKSnQ1FLdgbw3PrVupD5FMmShShweh",
  "key30": "3iwLLDeRkJ88yQu8hV3UNWq3bfJJMQN2FGBqnxvJ9UCNbjCMtayGrAi9mo3zNbsSFETHArR31ebmBZ3YXNMhfbz8",
  "key31": "5Cnuxjep8y5GQ94R1AF4ESsoZZA9bNtbYrsLgv4AxdzXzgMCumwCFNukaq3VWLj3uWomE9rftpEX6ALREUP4d3kM",
  "key32": "4isDnCB2WExMbgXdzWfeCXqURCMkG2D4ECqBg9ywmAe49J2JA5WYwpNyMBACuRSSobCwcG4XVVpLWjJgTSWEPZZo",
  "key33": "3fMJvP2JbYJfhTwntvS7U2MM985oPygEMktEzSqRc2yVK9KuXM5FJHicUgZdEbPjqYDsUMDtCvMsfKwcpGa6gEmh",
  "key34": "4ydeCJfBxMwFDSjEsewaYKvWsuVyf8BqqfRz5gexUSDZpteo3rsEs9fxjEgTC1Y98WnE9jwnzkuKjygJC9JR8vPf",
  "key35": "5p1CLPw1jJZ8FkZWCmEfuJVNAjYeepwh83zHCvwacFETBdoohFSzjHFLA4UcoW2zhZq2Tjc86oSriTp5m3Bg1kby",
  "key36": "5YGo3mwnBEPg7DD3X22B5WTYgnAa8qv12v4Fkm4DEfDPdRATeSVBieTm4Y5zH6oAu9H56VhbfHjs8aKeRAchWEs1",
  "key37": "2GZNTxn2mqSQ7YqTBYoR1DFFStUpN7yNEvTNFJ3u2DRrhcZQEYsb3PTekMDHGojzsUcixTKetrhFZMMhwdnCwBHH"
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
