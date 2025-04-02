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
    "5r2aCMTmz6zKyG6JA31pQcUxhi9PD2LPWv8SyhCw3QTx66EEBi1nReHT1yiE4oKeQoYSFjGX4MRQJgJz5rEY6ZKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUDPQFtUR9QvEU8Vhwyqc2zBHqBpUaDVZkGLYacDWD9ZGbJN5RQU3xy7X26ySdXphYeR6TKNQMXwACGXkN4bb3D",
  "key1": "3L8BZMf4gfzqdfu2vZkA4eKqjFRwwLFDZpyvasFUzvvrnRHG6ntkk4nTBkR7DeN5uVWapa3j7HY3SJwVyNT86bw2",
  "key2": "2L1ogErffq7yPRAmPsSmm6tqJwai1RJCSLAxhorUSV24WQ235cVQPKFcUUFEu7zLZyPWkjvr3zZmX77iksbCv1Ct",
  "key3": "2m5G5d2tqEVQ574ZxeUab8Re1S84i6c8rVQusngrDpMCncrbqLYSzXLH2sJKcdc67ShrVC7FCDBeZCUtW7u5ZzJy",
  "key4": "25RA5AgLCSo9hdq7BVfnowDqjWzefmGTpTuBwAQJRXTFwXi5Sk6v5d1aNaNZZum6DNZRsLt1gqi1aHADZULXCGoX",
  "key5": "3JJNfGMzrzPc5UYFQB4CuwvKn4q5FTtDjZqZGBpMkhvvoDo8GF3L61XHdovMysY4wwTSNUxWZA1cRnj9LJbftsCd",
  "key6": "3bWTaHYwVWnxUv2HYsoNPkMJTwHwoGd6Giue55o4DjEyR2BAAjXeAvLBVNMvyjwqNuSU3eZ72DX34dsuibRwLrYn",
  "key7": "3GkzxukiZVrK9rmp9BtMDfQJNiJ6TqPZ2MpRyNxuE5xPr3SnmetD9cdzrfXiJnxECH7TAXgRV1dGCuFACAepWZfQ",
  "key8": "48HaDwCiwDZzkHcF4NfE1D2kwUWGFMFBmcVdxWDvZsiwM9EX6Tc5aJCmMZK9bvCZUNMD92onMvGkBvhHYBe3nPDW",
  "key9": "3P81UPRosKj2SzRvB2EwmuWCQRgK7qUqNvZEFmPy2HUe8n3FF6eq4SVYAiLFD4qxEk3Kdm7K9btQKCAcNp3QrDbo",
  "key10": "zTY6rH81hXE735dfxQ34P7tfi8jQ35U6y41Fse53Ss1sbb5rWP8BBeQTJ83uwj9WBwKpqCHrGzp6e49UXCFRPxb",
  "key11": "FL9jFzvR2Jsmf5wauopVZz7M7hsUEspHP5p7bQJaKjxEHmzSyS6yYNHgF9SnUYZYkgNrMZgo3qrgvXFqwgvkW9R",
  "key12": "4V5vPEUAKnBZ5zind6tQMhmKrYKeAZTzYGcENhSM144mv9HyuJuPrNw2cdHw2zZgYtfy9es6ZsQrJ7FfRkULwZj6",
  "key13": "3z5CQ1TZ34XMShFMR4KhL91ofZcUr8jgSd3z3oveb3TTFqXiYyHdUv1vcUNtqqtMKVninG56NHUJvQiKZ7yriUDj",
  "key14": "2hCEyoYuKhx3gfV9E7cmw7qY2AkBhZYpgDsQropnSChKEqWASNafWKEiWm96b89QZib5fwV9d3PHm4UMUQKAJwnH",
  "key15": "341TcQHUgub9fHTyRsoq17SkTj8c7G9mF6tMKCjWahfTZPKiaVLbfv7cStbuu6FJ2VRDEtGjfVroB31XeoxnTZvq",
  "key16": "5cXuF2m6ySo88hq5ugpTsExMHftHBuU6F9E18hUWjbb1cdWn6vzzeAbs44CFPGJfezuuDFpcgtYhVKB56cTHF5pw",
  "key17": "3XJyZPE8t2H6fxfhWgkWfbs5KXBtbzxxxEGdZymqfVFcT9aeBr31gcyhkBr9WptFkKQaZhfFpM3KHye4zF3wFGaL",
  "key18": "5NP4b6RiZtwUQYTmVGjYtRbQDs4KeFNAShy4Bfs3whREPmYuH5N6LkDEYq2KNR9cWE28Q55XzG6WNtLvtZuATQiH",
  "key19": "5af8gS8F9MaoTcQibvhY22S8dG9eVG1Qv4a69kEBfhKj7iGNgiejKacSkvnWZ5DdB1KpMVhexGgbQTUArgDuDqJ5",
  "key20": "341N4afhw4iyh3B4G5DervKytDP1omUbVnPEwNHGTf2qioAgcuYuAzcbhFQej2gW7UAVrKK4xXnaQkuFEmCBqrw5",
  "key21": "Nr6Y3t2no51vjgscLFy8y3HPQdnSmd1U3yJUYPnzNvY7F7VdKUdzFA8aN6VyaiGpdbaCfrJQkU1N8HbiP4mXEZi",
  "key22": "3NJ5pN7z47jK6XkT29qgBqKhZtaQ5qenEaekBJKbYyxdmKiN3pDJ7WZ7VsrzW8ArwQzeaZJFep35RMEd7TiSPy48",
  "key23": "3FNGqxWTYywiTvX3wjCu8ndg8kJdnVJge5ZkuffDo3U9oeXj78krCZjdgcvdZXXdYJCZpz6di3cgkppJ3tLWmHCS",
  "key24": "5op3oJA9QN6cdQDWDfNUuR5pV6kWcWg3D8HrVsLLa5RikpmjoSjLw1WtKLxVF6RBQfqvqDRq34Q34M2eUeQazmEo",
  "key25": "5cbQWstxTGCnufMZpJh2CNYfrRWT4Zovj9NcNSaviBobWEWdkZvJoQQRJ1ZDFJtv1zPEVJPaySRurPApSamsTApz",
  "key26": "4NidveJbVysP4iFarYAakyEDLWBHA5d3aarzY9RpLiiGCxmdgcQmKorxq945ectFxW4bfLFUvurZG2QEmjQ7wUJW",
  "key27": "G1crEvAJUjKZJjPhanVW8F5qNBCcENtHP3jvECLqAYjEavChzw99UzepRdUw5CuMB4kZYCj7A3Bud6ACpeNbHxp",
  "key28": "39ajPgF6U5bKbS7efGZ8aX8hKH75CFapk2LoS6wRYaao1PGzZ13Qp9GV5BkRfCCzSzhTHvXZZm8NAR2NMSGLZ7v4",
  "key29": "5heekoTsVuEjjVFy1xsEP445F5ivhQK6955PeXfgaqwPGwYNsi13AyWkJQaRfEL2CdBzLtpkU99wFNPaGrFb2sgP",
  "key30": "2wuFxmiMZsvX6ucJHwtEw4JpFGwGCnd1QvfZpU5kojygP7abk6UqpfNi8e8ZbnHg87visgj3tbpD8KXNnntXBjgj"
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
