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
    "3ecF2xFNdG7jhwt3CmbBMXjPNFB3SBGnwyFHJZ7v8bjBg96orGT13KgFMQP7hb2X8kALdq29pXoieWv7xMhvcCWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PoUK6VG5KKS8e5fTBfzmntnndkMpxjDG68QgKUopqttXfPDsNj4FAsPhLMvfPGvjx5f2wHApX4nnirsHPF7UJUz",
  "key1": "4nYurBvAQb3GVWiyeahyuJAr2Tqq3iexqu6ehfsHY4iyHaGySB4E5SEfPXy8PuVvzQ73D9kEDPiWgNpCLPuEnLft",
  "key2": "2ibKXobPmRyxHzhsXysY3ETQNiBNdB6V8bpbhxfR9UNj8LeMDnDsdJaQUYU4de9vy8hHKLxWLtX6yKUreiraxeVW",
  "key3": "5LkWCSa2DgaWP2vV22J4QjbJWyuRG3AeQu1ABQfLbmMp9Z61ePNbAidsqsVpQ2hxhAT3hfx3tmzwkdjjzaMqbtse",
  "key4": "5W15qp7dq1ZiFsLJAETAejQikDztcqdAWN7jeZK7qHtpLHtuye9xxuqBW1wociT7XzPfXKWYCwJGPZEQXSh5zYiE",
  "key5": "49D2BRdNciPh4DuCxNozshMsVkHikHbErVtioqhc6mSkyGBEefrVVhKeMJRWQtAUN4n6d93LAqE9ts5wrTWGt5dW",
  "key6": "2xofJWFZM78CXssPEZ37W4ju4Pe32hTdoQhZxN1pWZ5tyMEuEbdTaSw65ZPioyB5QHh2wUr1npCeQtrvGcnBU4a3",
  "key7": "3yBsGzjj1tfPwK332aSSQmdJJwEBxS73aSrQBVen1c1RGkshqTdUKuQzpFk4QE7KBdXWS9THvuRwWfJTFmMQAKR6",
  "key8": "g8DLqArPEzFQQEYj5CJFnH9eYivrSkzEnjKtGQeZCKb5cFb13Kx6HBjFHMjQGpSReizCBPVdtSv98XGrzQUaNT7",
  "key9": "3Z1Qf2mANLjf8JwW57RFGYo7rhm5bQfKwk1c2W4NKk6Vu7S1LyGJiuVNg1UUt37xZxrQTzHfdutQLhVM5T2bSrRH",
  "key10": "5AoBe1GwSTtmMWVTWqAwJZZQrtC7efPLpR2TyJ5ShhXnSR799KL7E7r3hLwWqpmiTxpdABD7nyz5dghsMx45Ze7i",
  "key11": "3S3t9mpuTpwgaLRajD9xxBvXgLS26fdEFayxF34K9UJkM3EJCPGyCGCN3NUk2d45ZFKf8VyyswxKJYkRFSbAym9m",
  "key12": "5y6m8WwC3WUQWMtbv2ZJ8DcDj6ebVFiUapYj2eSW8eEnnaw3G7DCupa3j6N3LBaDbdfP5Voa9Bso3a217gyUjNcn",
  "key13": "5csX66kDAcgHyma1HesSEMWwdV9oeReSA4rJAMrjcR94xCq2VGzcvNGmjKYyGPEWwbV3WuYmtFPZGTWFay9PQeFe",
  "key14": "2MGrJEQcpQaMEbd4aDsh72i8BvPm5955QCwwm4CY3cVqB68k5oJxAHZorq3Rwu7Md62rG38UcuZCNj9qiavivbG9",
  "key15": "BN7AGkNkQq5zwMVNYL37umoRd18vXE5gupf9ZjR5WpcWbeH7q9Ta4YdgSmgAJR5QwX5YUGSampJGuaWeNNaMiJN",
  "key16": "3Kb6Gq9Q9YNaZDin6rUj4CgHWqzrvD6bRYxJzHP2PpkFd3RZdukxrGEgYaaG5TVq8sjBnVfXdpW1CAaByDAZyikV",
  "key17": "3XhfmHDv7gYv3syfWw5fiwnvx2xdZXG1e66VmMZT1c62dkjfNbySuDdExPZLMVPYWRzGpX1F4iTx6ntEbEA2Gd2g",
  "key18": "58ABkN59LPoyiRLxb5wgmL48iUZZBZdySmWzaGVHZH1FCD1Tk27xyKzE8FfPoBEYW7KrFn2TEoeaHHy4JGgqxQ1",
  "key19": "TtV32RjQrgrBo3hrnD4fLW7g6ghLJ8dGuFgZJb3CC2QHjUbWSuf7Uh4tXYmK4zXzqt1mSPvtAgSnTxmhDeE7TMD",
  "key20": "5gg9Fjzx9feHVZAheQe9hb1LnW4zs1a6xP7hwJLjeBiw2yfZNVmGKXj7LfnAjxQ3KWPvSkNjPnDboYKZg933hoWV",
  "key21": "BF5SnGZdLhXS8EftTa1xg9AeNiHX7tHkqGFgHFdXPLxL9qzyuiDCNEzuyfyi4WVQFDLEEKEdAFYsxgQLfrT4DWS",
  "key22": "4tj5EsjecA4YPJMoSUNiPZDVQSLkYU51jp62vkGuK8JHrVhHqaoryjdaReCiTKogeVhYhydaysVq2stMzmcUPPYh",
  "key23": "4A7MbEQHd4c8SrHrL8zEy75m5AWxXn5EpWns695n7i37V5DR8ZEFyp28GssMNnL7XF8MFjnCqGoBGHcsaNsW77FT",
  "key24": "51noBrVFuPbSimxpwL9EGXSrHq4SQAAfijUJ7J24PsDjmfCf271izjofFxhjvwgqAAJFZRbzxFcEJ2fYM17ZWF5A",
  "key25": "uLVrWbQ9BPG4hC9A5TqEq1r9VWTU1tMjmRa8XYKouHdZmnHtCpv9zmdcC5kzHfMEDBbfJuVUox62uTNW9ocjZMW",
  "key26": "54a3R2Q6LVSn3Se1FjGfgR9sMK1dBKbtjpY4HGLK2rU8yXdbxKjoFf61U9SYuaA6qoeEyLA5w5u4JuRYCz66EoPU",
  "key27": "3mr1SSJQnguvuuhyoT5QPAx94cSujpQNc7QXUkqtyPhxFMwKLQKuCZJ8HGkDgnUP6UGsXZRVH4ApVaCZbkgRFHWT",
  "key28": "3yhhpxCaioZ7UvtWtow3QrNMQa2ERK6ifRf53mKSxiPxYKjwD5rSFNkMdeFmynV2RY8dDr2fzxNHYR9THezrNiiR",
  "key29": "27bnxvz33DD9YHoucAnVhyLxbFJCcJJpyocWW1wannsg17DYYFqoTVGa4GLGNpXywVMLeeyzBP7CPXpC96iQ6WL2"
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
