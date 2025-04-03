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
    "2AvjSVTBgzHqXNGGSe43Y3rdr25dUnM6QyBpjVmrmkV2iBRxAZSxoyNj2PRz7USvXnnbBLkHAAPX1AQDPNVbXQZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAVAhE7HKuzuVKKcLKUZAqqMD7Txm5R41hRiCi7svycmrABptgW12jDMaVZWs7C11tVPiBTi2a1zaXzK8s5rdnW",
  "key1": "Y56cLmrPeDh4kPL7G8DSYFZRbV7FWYyFDfqz7HM7NA2TkoDC5kngUAqHbcak9hsjYe7xHrYBDBguae3V1DQrVe7",
  "key2": "oMDyxXgVuPH2gdwMiurAsLncNM4jDWfXrjvbucVEFwWYGfFTSbmEc9yDvtztctsgrJSJvABWfo1HVkTXpY1wqGA",
  "key3": "3LWwgojGzuhXU9kwnHYSdiKDaSNrh8ZsVn59SFiu9nVS2Uhv8b17noohNdxzyYh7xiVZU6HgVkLCk1T1u3XpoBrq",
  "key4": "5PcUbaHAgGQS6GyDkbKEn8uiJPkToMuNQAGvPt7SjEJ3iSnMRgtU3MMYRnNrQh4tiPRUbKcEunV2FuMqAyeXuLNp",
  "key5": "1yN4yEbWDD3784uJ5eWDuJnD4e55kaREC92pVJ1e6AiH5oVDDERhKF2uxE5YCNrGVz5RXPQ7A4PXyCuf97ZiyYn",
  "key6": "fG4CYYtbgk45Dhs9veWURwtb71M1SLQcuWaXUACBWik5xKrBs6b8gWBQGJ1rKEtuDeQsBmJLzj5ETAVn6GqZMfC",
  "key7": "4nqNmJEFJEcFD2isKDBdMEygY5po8wYERZxFfVCmtrHHGTF8wBBiLgeT7i6Q3g2xHHChE8UoHHgLPuCvjRQaxx5c",
  "key8": "3RaU1XJTF7xiZapimV2UxpSHw882bSbAaBe5d5s9SnMUY9xdxfFMwP3g9d79Rm6tifYzjj7ttt7R5z77bW9VWTNm",
  "key9": "24SHNrwSfx11gXcF4dJNBzoRiyuYt91yoHVLj8hZtrDFqWmxeR7US6ffEJ1AFeMN3YTFGqyrrgQhTKbdP1DpKJ5o",
  "key10": "4ayGJXLjuCXFGxRiSDj4yEqVnCiyX4WWjk8kCeAJdHMWYx3wqKYLaHirREdDSQ3mEja8hF4LJRCtf2v5MKJ2B2Jg",
  "key11": "3GWkqmXAYGzhpMwz3WqtKTdAsbxiNatx72niytp13SygqWGasoxTaVfRvzSSonB33FgNXMgXnkLLtndX4ttDfNF6",
  "key12": "22FjEUsU1K1PekTbQtiR2HPG8eM3Ge9hZmsjU1V64yWGBvzw36oZ6JLqKtGUUkNjYTprvSwDVMStbF2SpwWtKPSS",
  "key13": "x4sZmkgDA7yaCK7LaAecMyYkFrQLNLzmLz5aBkdL3At3Urnc74mgapWL6Pnf3oFytLPjzKbgXMjwxDyGjkubYiE",
  "key14": "2N4rfv8xhavj3YUvHdbnsjd79cCZxrib2ob3SP2PNstewKyAhbZ2gCMPHk7m7MZGu6MyBU7Waqf4R8mz5zScL5B1",
  "key15": "2ghFKUPjazTpNeMLEQxVu1fih78B128ersrMzsimDZf28XMpeoH3GY3WLqGiGZ3pZxnHUbKYoX6RsoexNDturm5",
  "key16": "3goCpfuEDj62nCRUNqcH3LpknDkPFLTt8fXF9VWD8PHUR8ftfdSoU3a3rZqtmtguU6noFffLFwmGgqqaXFoyZT8a",
  "key17": "5XihYwbmb5wtfhKWxC1qXKb17wiJoF4uKf6wguUz1r4rojvWKHip2xpuCv7SQH17JdQNNkzz6Hi6KvLf516K9Ffe",
  "key18": "2i89prK1RxbmtmWJCk9mGYXooSu9Q3GQRSoDUR5yioapXAkVFiyUHCyC2jw8Hg5CUGjZEG3GqbBKUPz44gVGjvua",
  "key19": "23kMf2pC5aoBhJCYRap3Wa79UYfwp9Cq4qZMNAvAqzw2G6RPPuKERUEE1chGW6DP8F2RUVYveyGomRfkGANsAfCe",
  "key20": "4iGmS3HGtmYbrDgjGk8qmYuDLzsfv5dBcQqYy8zb5rxamGP2HTQh9WoRdy6vVm4iPS3UpXPYozn55zDzmc4ZpwxD",
  "key21": "4VGdiquxDXvk7KMrJGmhhFeS6yMBGvWeaYSJafdTp6s1qgdthNwj9twMWDMBJjbUCmN4gMTKzvCHwGybPCt3Qe7Y",
  "key22": "3imAmuys5PutbaE5VfTEXpG1fZVpqCKFzF2codj9ea3FZ5bYWMPcNasEqR7T97Pz6so5maSsDF7cwsSioj4SjCHx",
  "key23": "3GtUtMM8Wn7Vezyr4BDrfMcLKpmQD4q9eJLzKhmt2UvZC8qHw1SeoPihGP4EYU6hx9beqG8GV9g2sSdmFvAa3Bra",
  "key24": "5UsEBSS5sgQf6Nnu7WD6mCN8E5HKVxJyhearyxJ1u8BzvoyezrqwY8h6hiNY5fhZnv4iQhmnw2bivi8DW2gW19TB",
  "key25": "2Dk3PYs6bkoXiRGGf9n2Mh3QP4iUAacHQnQUQMnQxxXxhgryw1XrCtdZ1XShmSAN6t7DyLugSgNu5QXBcj3arfAT",
  "key26": "66SL9RJE1ptoZ1sQHnHP5sQMoMcjErJNkpZackzujN6XMBVd5wnqay4qGu4Xc34vdNoVmyg6Lo3iyioE7nePkdCB",
  "key27": "3tRy9CpzBt9kEhUSuUdrAWGJykJvGVg9DVrTjZ2Vt19325RFUBpni6HisVWMAgqdiRJFofrun3hFZHjy5uTGE39E",
  "key28": "YY7RHJZb6p21kVKm8UMckUu3oovrXJN11eXiG2iHnLskSyURDGrwzPtBpajrfJWzAChCS2MwLp6uQ72cnJMg8j1",
  "key29": "JJxXNRfiiKP6T2ACJ73Dx8NP2nBSQ8PQGkPQkcvjTp9xPS4997gvoZ5dsf6eFxLAv7ez8nCaNTLc56BqjAYJSHE",
  "key30": "4HyRiDTq4vWJwJL4WBWHmKnxzYPPjwSbEiZFVWq5sVvMBABZswFZQ9KJnwKnkqX4WQSoiMBpWJ6DTq8YmVZ2KxSe",
  "key31": "2WzMPz8DqQE7ZZ4tCKn9dGW1tcy4hyrm98TbWMZNzMQiyt69hJAkRF1XccjyKQTonngQqKaH971x2AXq4wNNDnqR",
  "key32": "5hJswedUEN2s3t9wmc7brnJTA3GDBpw9pcxJSRHmRKca2CsURmHMXcRMERcN886qWk4P8HFtPcu5epvM8iefUnD7",
  "key33": "qV1v9zT4yCj9GtZfr26WqvJyV1dHLidT2kGnfdcNFsdQ4H3Ks61CgfSMkfqDo74W3virce97dYqGgiAiEmQZamg"
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
