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
    "547PhtH327ZBrwH41mozezpmbQjhpQ9quzwcVwahYnGRmAtSCdfrbMeQD7v2CXrCAx5HvmRG75zk2MomvAFfwv3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UD56UxQ6ekfahhU7tUfkxruQr6BzyEVhBU45Za41CBPy3UGMJCEJkQZJeGUza4aH6Xe72Uo2TsjgJUhUJqiALcS",
  "key1": "wEDoHskThQiBJfrVx3tdRYPk9orTUK89VLM3AGdmxXnc3n6EY8EL9iuwr6R1YUWwzKh6sXCuLgy1vzFDXFbYgtp",
  "key2": "2m5C8EfJWngjH3UoVrojFUsm5Mv6BjnG3Giy6J4ugJqeEcX2RKyihFeiH6zj37gvuw4b8m9g9hSk6TRxKb9L5TPY",
  "key3": "4k7VsBbUbiLnXDWcV7Fr4rZLDuaSuBbpGfBQGnXVb4qDq8p1TUsTC4NhqQWFui4RK7Ykjn1s2f1h8kpJXPh3Bwda",
  "key4": "55NiBf9J81Gqur1SNb3zGWPvK1h5oPoSLEsLq2evJABGNSRjYuapxnBg7EtHu4uCCNgiyW9GhZe1HABtJu9FkZFV",
  "key5": "37R542K6YrfoMnMtnN2dJpafX7vayYRRjRrkPeYNs7MESZHTrnjuc7tcLeSaLj8r4s6hsj6frV3PfAMiYwZTJVcC",
  "key6": "45pPJiBzm2M1BAdgz6fqqMrANag8LdiULTBHVCSWKBnAwkS89QuPKLxuMnLrHygZMthBf4s36FqYydmXSBV6g2sL",
  "key7": "3Ubh9a1uvaL9iS8P4wj3kx7JcNnUCYfh1V21ZKdR47pq4tPrfRmKBqWatgX3uycnGczLDsge8YAmRcQMojbLc2tF",
  "key8": "2P7ubRUbqCAAd7vasLEquRtUZkmDpS5R7JvjGFfemxxhdfnHmCZgGG4Ldg7NgfZhnBvkRFThoeWyJEVsfFoN7XyL",
  "key9": "3Ps1CUSCgrLQsK8f5cvyGMunyrStraXQZjz4piWatkqQsMczqbjz5PQFCRAvNpt9jEDbQko9qafmQcFFNS3xd4d3",
  "key10": "3isgikrZDAQ9GNhkozS7zWqUaGEVqJhDHsyr9PQpb6zz9u6f2p2VJCbqqUVnbAF2zVPxQFNwki8ikpnHvLoWKzTo",
  "key11": "3WBVwaWAJwL5FiRsCwUBHyaawAPaJ3Drim6xdKrzRsvN3N3Yc3eSpW2hCtj8NuQCBsjBiGQH2VjbW5mBkBkSk1ma",
  "key12": "3fR2Euo6KTekJ2iTBKgQrDJdUSQjEKB83vVF1QoTtoYKgHRaAiTJYmRwSjkGSHRPvrA2yAaY5eiug9a7k8jHp6NG",
  "key13": "4WeRHaxzZ4uBLRA6tYrbQbscChLSpaXuY2wdwKbQCz9LLHyfwSM9VH14yokUe1fyGXV1z9hUaUFtTXaEKew87Ekn",
  "key14": "2V1AXrkEFhYhB6fsJVD6wWg2Kh4N1kMj6EskUfnVHvPyC1k7UrFCexVb6MWMfHVg81n6jMPTrnpJDNZ4eMKw6PUR",
  "key15": "3uxM2Q7QuTm991WniguTo83uWtoU7awVZ9Pb3DrxR8VD3fx3pyGD3kpqyeyy2GHJB3bRfm3ZRSRqBe38DpT8R3Sc",
  "key16": "oG88gfDk3ag5g5hFX6V577AmmHLuTXSiTeruMGtbJRA1oMfqwNxJBRqPxKsTeiX8qXpyywPPdJzts4jV8pzCWjR",
  "key17": "3Syn2pfpQpSESv3ApuJ5nGwmH4aeLHq8PDuKiAQoGh1FEwWTeVyi8TrcFxbtZLG62Sh6jpsmTN4dgPgH61FSQmDF",
  "key18": "4zbfsRYKEVf7K1x6K88ekcDbVdaemYf3JSPqV9WxMqJfRfaxpuNgPSAhFj1DiEK2zwvCkG6tQQJub8YeyBj4WWtB",
  "key19": "rwavUh17XF3vA3EsEaewR7Hohcy6D2wQ5Kt7DbYEPTRZB12dLG1LXdPBzUyPyoEVbLCiMhfPkNwMWrVwrDdt1tq",
  "key20": "n1oEownQ3WVG975iPiTNJzN4JKWREz4TW7zcrvd6p2iJQDxNp1T4jB8m7y53RGABb94Nbow5U9U4h8Y9HHqDkRn",
  "key21": "2caSb6xnxPgE1b71YtkyxxZJDoDu5BuEsadn5N6QfGoiRbCJBcXErmcgceHP5bJeJYGtQXQRth3Q5ofXE2MEWKyG",
  "key22": "45asojoWtxHuQqy3YMbbUwL55Na1ScMp6xp8mpWdA2M3hmPnHveocdfWtBaWwNT7mxa5os4ZSnnahTogEiSYGT4m",
  "key23": "2BNaHNZYLi9WmmhhhEkzoL8A5s5CL8pNtTZ3UeqcKzuxTmZ3RE9A9i5AmxCSBwCzV3GpiWRmmTFLng36feSqyqbR",
  "key24": "oijjEFGvXMJmhzDkqAzA46Q2LXgrCSdqvD1QXztdJZKv6tsyztUwXxoJwtUUQPTVUBTobWDu7pPSmpQpNaZSaGp",
  "key25": "5wbn3g5ny9JdvtgVaKhJi4cNvrDS8xBSfXqE5gSAXujhbM1weDiS6NQvWeUS1afWo3bjRxLRWhxgUUftFc3in8FD",
  "key26": "EkMdcSdAqv4o7aexK4EBNr4MTQHvEHoFAg7YHr5ug7NQra7Z6Zq3uExsNt3A8Cb884vevB4RigB74nsqQDQdJji",
  "key27": "3mkpM8aB9LhdcVEYDYCd8ZJ6yK1uqE5zsHRHGq6cqD5qXADnuC5xUrwriwJj9WXGhqrauR4hwsQjn78UwhvRZ9KQ",
  "key28": "3hS3ZeLJhw4rPuofnyzWr4bbescAdTVbzhd5xVeb6wLdAvwRxb1ZJz8RAVGPeAnyqoHKn5B7S7kVR9sUZCCqtL61",
  "key29": "2549R1d9TJqPydcH61QPWn88MGyBurTX3WG3SHxWH2FZTmuqh6G7Hq4oCkBPss2wGfDmnuYz5ZRyaBzqnAZjJfhD",
  "key30": "4GiybXwMQLvQuoTY7cwJFKcf82HKYihoxXr2Yq48yM4SY7uGd9fwva6R9a9rkyjqdB2eE5XUYFnpAvp12XdzfZEA",
  "key31": "3ozJEnzTK51AT4pqiKDDVjyc3XyU9uvtAXcWMXTUr6oN2GMCt3NFduMDTfwtaRQxDUiQmm8f6dvG61ySfKjMkg3v",
  "key32": "5qzsJmoqoHB9nQNcxkAPfYEYgzAFWYo4kUo4uvdCnfeXUxSU4eXzd39KVvcRRhVBtsUhZoYLLEDg1otA6S467way",
  "key33": "3MQXg77iawhaPKBg4yRSHM5BhMKXtYUmJ33r76iQhNPTdyDAVHnmCN87y3GecXqfKma3LMGSVvsY8vgqSAGrtb2k",
  "key34": "5KANtfhssjKR9dHUPVHDw8UaGGuNk5tDNwhhDwTueJS1KFECKRxcZ9knKrzHLrfob9TWWLobwxoSJJzt7kFKexaZ",
  "key35": "3KwVdRs59ptw7wwZNmMcSgv89QUoui7sNJvsRaB9moDBBEbHQdxuWjJ7o3pcJVKtJJrUkZaL6MjwzyWm3Rbvj3h5",
  "key36": "47v4GAVNQuSGat4mzuUy79VvuMsDzVZKo9ZohFhttpKa5wMrS2wXmYA1RYgfSaCkzLdZW7nX7uJXf6AnqaHxFdt5",
  "key37": "4KTApNbtLfJ78gS6AZGb3yRUhr8SGQuWCJdPejDeMFwN1dZWRrfX9Mrh4DXmBSSAXg5AhjKLFsvM67depknNJG8W",
  "key38": "4rFHRYEtUiZZTg6wM1jf779TpEWk26jtMqWKLg7HPPjJE6MdHSiC2SoFgoFy55zsPA1u21FcM82pRACqQYq7ciGf",
  "key39": "g5T7pBZzLznKu3a4jfoGFm5LiYtzseefntsbChGDdCiktQvu3e9dqf3zyZGzpnNtXPK2jvVqUH8cJo2Qt9RU8FW",
  "key40": "4cC5WLHMMVL9FN5d9HtVoyfSYYxNQUthA9xbqxRdFLq7pGpg8AHyBMcBFBHPxBTUawDSQsYVKqn5Sqs3UNSXCHKn",
  "key41": "5MRwmZSt8XfBiG5uHAw8Nhec5zSC86ubp5bdkY9D7SUdLvDUfNuvoEoK1nGUaF6nzznYcxQebipSXFW7GE26TUb9",
  "key42": "5HX3wnXhJRMgsq9Y5Ni49pPhs9JfxL1RKCsAwBcvdFTxHoNzciAeEiHu4oWxQki7p2rmd7M9YUUp5Xw8D6wkB81x",
  "key43": "5VVNzJXLZqhbMb8MhLYASNZespTPogE3oiLvm8WULc5v7cgrBk6TMQpNPaiF2E9M547gi3YYjdayEiwtiiN7GcQ6",
  "key44": "5cVfHBZVs5dBmux9BYuXd5NdiXNRiixhXrLnFhAWmu2E9CVgtcd2UU4uPRxaJxTGuiUYUkJ5CiPHAeMXQKnwiL9D",
  "key45": "4P7LGysWhZhhAQoekjfAzEynNzuSMVEY5goA5zrf79WfqCePpB1oV2NgxTZvGuZtrosAcnPZYUMiai2Bh4LdeeEn",
  "key46": "388gzmQAaWDhu6DwNhT7wL7SmbtCxJd9ob2xG6QkxuvxfTdwtZewmVRzambcr8oth9AGx57K5yhht9xjSvJ2G16b",
  "key47": "2siHUtDXwR6aaZvDYg2PLxT5WzWJSmg4VG6N8HahfXUg14yWJYXLW9zW95Vc9453zHhWUt8RM4ndHS3KHdV7NWwQ",
  "key48": "5EwmdtpwxCmNK76UnAywLHFzrTJvAGnRvdP7RznyeoTh7zbeX3d87XwdWMGZUw8AjJAxeERh9i31Z7eByFEPnECz"
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
