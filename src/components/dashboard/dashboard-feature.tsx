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
    "221E928n8ykTAakDWka9WcxojZJauTnx4XYwfizq3dTC2x2WH7Z7k3gU3eGGoabajJDbsw6tUS3hfFtbKFDVri6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZGY2K5mgrk7uaEh1xbRAUfMifnN2TbWnac7MGxuXC2kaBBVKMuxLvLsvqktJqv8kvdCrRNce299z3wDwMjwQY8c",
  "key1": "49tugVmW2EDZvAYVF2nc893bokF2NdMcFfAoAYbUiTmULBYDmF9gRgNcE2A1iAtVDAuu2E85DwY5AFjQwrfzW7Pu",
  "key2": "2LAMzgbmuDXZBAJPexmf9rBf7sj8jZ28S5xxG1GZSoTguFYnzf9RJM4f9ZUiG9ykMX6fjD2rikWYhBc7g7Za2uCe",
  "key3": "2e6DCKJ77JXMxumLgv8mQvWvck4xEEHXAegii3FCgy2jU4E6ZuGftsJSGYbwY7cMizWqgCum8PR98QcX8hPYPdE1",
  "key4": "2BEWwwS7DeqEXRayJkizs8RvQEzmejgcvLmeEvazHLkWSkm25tNM1suC1RabAB29LuWUCeNGcAGispob2DqJ843R",
  "key5": "4AT9ogb2RtXXeXRAqH3dGxH7DoQnGhkJVvK2SvWzbQdEbZTCWvjnTq5Mbn8aqLVjCLLkNZJkktXLRTL67YFaCUh2",
  "key6": "2CRJvth43W5Pe9bZsB22yLixd8hg2h4kMkBJY41C2yiC6N16kS8CnEvWJV9oQdjti53UBFiBv4R442EAwVpxeYDa",
  "key7": "xRzxctnAtRW1kFjqc2LJiWC3C62mxg3LkZVMzNFUf6ty6szUuRF9vxtwLEXJ8uzZMUTaVrvsEXX3VvtLjxamJNN",
  "key8": "3QkXCAqLayJdtR1u7bbmC1XNpq2Z2q9BMoYsiLsnG1RcXGW94SHgJh4yMqL5PFdNbUL1hLP5RpMcMPjm7Edsykj8",
  "key9": "4XErMpHh4BhzADVdhxrJXH21kjeGTuQKUVzh6dgZQdpAwqWJaEVVRkdGRRuDqnk7S9FmsKDGspB6vQFXtL6jpCjS",
  "key10": "aSc8vPd26Bu8rKZN1k8VgSBFoKfRjBPyQAfSfvVKK2xuN4dFComRZsZWwtqvYAxwXYXRxLuGeL5mbCBXyrLp6TE",
  "key11": "3vKvZVNebVARx2JmLj5in5MxuxhJ5RvacKsvEYUcGc46vbi21GRfZ4uaK6mSkVNRQgTjZyEFewgzT9XH1WJ9xhhY",
  "key12": "3n83PaPdniBmWgF4AGEz3DBwFqGtVKgPSKn4sSmnf2x51e4xjT82MV2bmgVaKnW3KWYfTTwxouSTFVqrhFGyGUs3",
  "key13": "5QXHZhSH1tjx428MEhZ6KAAMiuUyb6c3HZnXRt3Q2yC74rBsBpRE7cEGFfF8xaNSvy7pUJwcRbkWtW9FYpkmPCVJ",
  "key14": "3LKYmHK3zhmAxVr4XkgBRyidQNRnKYj3pAxvEddrGsSduRZp1YugfQvTBv1UyWv1TaWoVBGHR8Rs5RtSHVJWxA1",
  "key15": "48J6az6ieEqbu1XTDeZ1epqQ5rR8Qnb7KymSVsJbeCLpFhMSjx921mNMnPXvkYQT6opE6s8NBgPRjqeNEx7TtHUT",
  "key16": "2pa3kJ3Q37w3bLKdH6a9p5YQqWyLjq9pZX5Zc8HRMVDzva92j2GdrUq5vDeVyRh4R7BgMy76NX8Bt4FCM24HRpYg",
  "key17": "3sENLzPwkce3UDiLEpGo2LLS6eFHgFqaEVgEt8mC87LDsJv7HvfFwPZUtiDjpASKx17X1AetEyA4iqJ4MYXugagp",
  "key18": "4zLsqH4iiCRRn81vLZ8mphz9zymmMGNgp8xKNSvg9XzHmi64MT7FUmsgoQSWhvVnXtvpdquP9LZM4FaFza4VN2Pk",
  "key19": "3b8Spx7ToRy1EcYtp7nDSyuNkiUHfUL9BW5acSthJcJ3jzq5MVeppWgamU3WWF73gyTDcayjGF8XtFR22tpZs457",
  "key20": "4PLPocwEaP4sLYoNxtDq64ZUqZAkNBfYrhMAEhe8agEfJyoSTJSfqg2qAZE1N8M27xdQjEwAEPJ2kbcU8KhuKr6Y",
  "key21": "4TtYePbSLGWuDW5D7WbK3t13GRYdmr1G1xLPQtAppxfaiKQ6HLowSSYoqbmEZHTqgEPrCZPFWG7ghjYWzuy6tG16",
  "key22": "3H74KhZwadnZXnxgR3MoNddqRvzH3QSbsZEtGKLnft5VwgEPzdQi2kXK1aaDpMSkvnNe7xEVdt3CocGkpJeQduN9",
  "key23": "2vz9MYcHmT4h5KnnDj4CMVjotFXRMkTy3KPaE3UKP1jN1LnsQ2JdYjYt5tCNVH634QRGozcQep1msroU1HLg5YD4",
  "key24": "4MrssfMqHavuqRCXWH2JX7uRKX82xBqTy8xWKwg44ZVTaEF5cx8io6ykRdV5ncH6a4nzdk5ttMQXu4J5qp2bNMDf"
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
