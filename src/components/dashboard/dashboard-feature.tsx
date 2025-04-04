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
    "3SEtdXoCGngfPGX39URiQrcigfS8Leh1uebqakAcB8AFnA7oa8tGdMjqb1tecDqqn1x6v3ua6BZQzRbyY82eydvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQQJSmY9Lw6iy1ynqQJ3wHJW7MNT3QYvAyKU2TSsbfSiAy7udBNwe4wkVT6XBadGn3tkEHuizD5QXMVSSszZqUH",
  "key1": "5MavhDDLJw32Q8YKTSdg75RgB558cJ5aQ6HEeMZbgBAZfBxkCFTw9CbE3dKRNk7x6RWXmxjWJj9bkepiyqsHrk7q",
  "key2": "Je3SQdVq5pEsvkMZWTQqEeaHNcDFhQjdRauBR4k5eovDJ8u2UtLDy9PzBeurZHGNSc4SwWqQJDvpuvo6VqgVeZG",
  "key3": "usdZREeD8at3xMXePSzNwthaqEopqDij6bS8HHWfAxdNmoQh6sJLZcVyVaHLa7Kh9vPtkF173JT5cBWTUqaL9zZ",
  "key4": "2gkv2rJZZUVVQKWMeM51SDjRKkFyVXewzMBfM6FymCTbViuBhWDjXfPok1J8c1dxmJQxY4RrbRmGbXXDjp7UztJ3",
  "key5": "uemPzHn7VGQsdrpKRUDurMqN1z7qh257s4FSCjJgrb8ZT4ZZu8DL64DwPQS1uCn6DgFMNC8CaV3SqFdDD8HPvP8",
  "key6": "MrhFAoRoeNVH5pwwpnhz4K6thJEq99sxGqMRcz3UmyaEm1zo7pbrGwJW7dXd4DAkAAhGL8xpzT1xn7cpeSbSQ5Z",
  "key7": "5gw4GLP7FfDgPWhBiyTYXzJbCAyMexoMEnh33EKSSnnoXN4TEreSe7yzsxd92k89bPFf9buXdfLTfSWDj856Pivj",
  "key8": "41W2bgkFkMkBrVub8pv9BcKFGd4GRZSLfPLucZ2kiJxuWeG1B1iefkVhvdrAMsRhRve5HAxPamw9KpaByeycFLjV",
  "key9": "3opMLrTSEpq3RoGjdbENc5deYDJamGfszzPo6QTQ8DuSdwdAdqAjkmkusYGBnHD6taJWYApkotwpuZsZ3y4hoSYv",
  "key10": "3onvLyuWJSzEPi5fr3rdQPh2NF4C8LiRXAy6pF8Gh4ZrXp4K9QtRkmhp4jfx4Y55s27Gy4w5yTYWaY4QUWJJhCEU",
  "key11": "5FctLqoX4R31MUsFXKGRdRuL8YTggCnrhJsCgzqdHa3J95GLiWfnVBuHRhBPjCWhQWissWN6g1YNF9Npc3WG3HZt",
  "key12": "4ejGUMxcaoZ7KL5gf4Y16T7Dr4wLqiCJboMqtkmkUU8K7Yf8pWxKvwPLfbo1j1fLMst1sia8XMb9jakVspbiE8DQ",
  "key13": "425jtkWL8K7emyyMT8Crg1jButeSthRrYo7PstybhUuJbKEKcHB1XUsDJgQRqi1cEYPJCCPCPbDpvF8cpakmKnmN",
  "key14": "3LdUan6AATSWCrE491PEdnYfCi1PqFkAaZrbmzS3K7JVJiAeKEXbGmavKBCpjqos3wazjMqcPJ2VZgKP4769pqHj",
  "key15": "pm9pLhnmTgNxpQPWzgubWapJrQ349dS6K5gieq2byBsdBdXmCQtQ4c76H5uh5wJffPs419qrwNqkrmYx2ZtcJYm",
  "key16": "m1oZheSMmkmWaggbtn25qjuUNW9RCAAmmRRFRuSKELEcZR4ww68Q3B85sN1cX3wfpZjdCUwDH8rNhiDtVG4Hn1c",
  "key17": "1RvCCzqrRi4xCAZViuS3kkU8ffWCV6btUBTKQQeXWHBRgY7WKMPJUf9Csop6CXJceoJyrVmXTHiz5dYKmzHC1XG",
  "key18": "3DhwNkoXtY7ikPfvhSHmekKB7NmiYH9mD7jjPbCKAVtNirJqXFhznDL7EREapDe2uDX41gKVKwtEUJU36vetbmJf",
  "key19": "NUBDe5tSczcqMnNn7XH91dTG8LgsffR6rmMsA7u97V9hrs2MK8Q4EKSC5FGkVpQXfXzY92tttN5guLZQWoMCpdU",
  "key20": "motHbZy6LD3HGuS8wgGE2gVWm1vVTFxEnfZ1sULF4kSTG2hiiSU8Qegcad2QQii9k2eVSebQuWEdB4WzeBsDAX7",
  "key21": "5R8X4KN7VU6Hf3z5PEwMWiBkCotB77AA7gK2wGx6Ffn2f7JWKdfynKQfUGLapM59aevX7chtaC8gGu4VM88ZCzeA",
  "key22": "37gXBibQdsDEc56X8bTLUk8oDrhoFqVtqAvmessxZrNYUsPWMtjAoC4gru5PyVtNQRx7pu5v2fcqS4erupzNzhES",
  "key23": "5vWyD9N7rr6B8eBx7WfYn8FcTSZP2dMxmnadzocBrhKbxYHUkQGWxc6CN4SDY2EyhWCztAUbWhM6nBnpbtD8mLP3",
  "key24": "4fJpVDMVruGRpTuK69YYJ1xc8wXBhBa3xj4QXFtdbj11mc6VNPsL5kGW6rTqTMsWYXoGJVoMmtQm5nLkuinunKXZ",
  "key25": "JFjccmhPz3ibFkX2gw8V8SUCS88v7fqzM1y61wGE38xsEJgPqwMjs72uTLUBqeUDs3HU1cEmcvKn8EaHbZtA5Un",
  "key26": "ViQiZa1dfXjidtD9BiCxWJxbuoRtxnFMnG42cgTLaPZKVp8fcVgEspZgUdAiZFYkv7CVhHWMjDvCC6DHCez3H5C",
  "key27": "3un54UA5a7H5PmgFZ1VR7bRmzGkNzxWCebhCaFJ4WJkGgXatWcGGEWqUaXH9xkz553HA29feZ6eeevvGDy9KsvZh",
  "key28": "2EAPzaofZTZ9pamqQKotJqTpAojSdFUhhToFR3Z7AZaweYfr5GErufSHEcL9LxXjYiNEQKwohBDuCaRKiNYaTpGz",
  "key29": "3RyjagQsRr5KyxTVgmjAcs4i1BzbuySMJc4ATtMLVHgT7EPP73xfBLnnmkG4B7unVEvhsrz4TW8hasdutvxN1X9P",
  "key30": "53cUaTECHcDaAzr8nhsCAGN4G3Y7Ayt1RAT7GzyUJZfLvyi5hbYYvnLS4GSzrxJqSxYjFQ3wNUseQFxS3wFCSbTK",
  "key31": "5ACK4thBfJp3uX5o3P93qcJ9zMebVC1owqtuuXqqfAAbqTLYy2yZw5PSZH9bGnXG3XoP5sW2hRPNNdz1BrVuJNfR",
  "key32": "478s1EKCQzs1U7SHiDRkW8chS45CLEro6JjSFRkx8ydratFrq3JpU9jXt5UZz495KQHeUJRG3j3Q3RrTFQVSKZjY",
  "key33": "2D6cfbxFUSjxk1gZFcsDrLXyh7kBYGBUkRUmzxGT12XcbuL4GkiLygHaTt3T3pL5vxf5CFLhErPgULAiwA1MBbCH",
  "key34": "32URHNwXHVW23CCHgrbhBGK6d7GUKPG71RTnM53A7crnQKqh92dHZWpjeNBimjdn9g1a1yoZYa8XQ4wNBEv66mAm",
  "key35": "32tE6rWh1LHjgDeyKfchcpPoNLPZKMDYyNcCM8fW717FXjF26A7tDu5XgN2hjHq9rn5eFoUPY1dHHuFH2uZJwSQd",
  "key36": "4P2Snif7C1i4Ww3Q7qvsYiN94eHLwxX1zJMnUjb16FWL7p9prfUUu6z4cteSLwipJ47yG7dbxMcCr8EJnciD2FTh",
  "key37": "2y7TFK5UjbVvRt9zU6uD2Lh6HnwtJ6NoJemETZStyL4tAqWmgMe3Zdi2FLtKyuS9jXFweQUKoV1MTZGWsFRKomiA",
  "key38": "yPBiA1mPu6tfnRvRHmDbqzqEf8nqAAzjR1wbJYe3nKjwk2KCw9TmyhbppzvrNxtp2qU9WTzKcRsbpm9HCrnugtG",
  "key39": "Cimohd1p8pwUpRuZZfb8crAmuWu2Hg5qqzVQnLvg7ov9K6vUz6PuH94LfZB6hZcH4d8KrH6FxTobjfajQPenv1e",
  "key40": "yvWBQjUJ4fPFUYqgTobC5RdyjMCXC5VByFYM6Jf9zRZZbSE1G3jrADRVHW9TsyPvoXm4eweLfr5x5mPLReHvJYn",
  "key41": "viwcP7T8GKkKmSfyizgr9a2LywWnA3jxou6pTipo9HR735RX46SnvbBWDmVRHwDTXQAFuwqn36aWcr2aT3xXozg",
  "key42": "7hk7fEs97hE2wXwipEq5G7UCMHapBYfXwdAsooMK5VfYYbXJc9VkSvuQjwCaLztoD7LG5QrXPKcNpe8yhUXKXbj",
  "key43": "4aSm8gy4hPcxXQxBNTYSL11nnRUidLwUwNAz9WPtmjseTK7c21mtsHANFZSbX2UZbzx6t3xQDzT8cFYe6jYsoVZb",
  "key44": "4ifLKhup7WMyDHS4XXqsWh4FQWEotbFiEKVThZ5LboQAULAs5EJKsE3ZguXUGSfYShixJY61A2piAoyFnp4Equ69",
  "key45": "3enujHuDJ1TTZmYQRQourFfcByrkWqhUrkvyFXp2tA6QPxRJXKs3hgnVqjATpbBuMkPtr4VP1XwnCHvyLyoQSU7V",
  "key46": "66DwVzZ9ixuA3De2Ai8RHLfMsSFbV2urTFH7eKCuXquVr8SoJawrtoZM5D6yavBbVoYoi9rueC2KXvbGAEie4ox9",
  "key47": "5BwbvSYdrLq5Xkbksw4UcZjy3KdjCmRt3qPumQ2Nx4hV58agZdQmzz5bL3RXJTYEfvf1y7NAAbbYBwDags45jXKu",
  "key48": "5HYvo1SfnwnYL8xmJD5kAbUAkbMKLH9XFirmnZMrnnLzZmonbavs9dmZzx3eyufmeNH68oP3W9nuMeVVHAFVUgDv",
  "key49": "2gTn8wqEFWdqywvByB6XbVPKy3soeoZLkSUzesYabV6yL5W5z5E4nsR9Ft6r16LCJW7UFWiv2Nk355U5uc2aHp5S"
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
