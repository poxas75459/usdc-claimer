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
    "4zXStv2DymvetHRwj88eqjJ5GTcJc8sA7S2pUuWTa8xWuw4P4PYmTcX3EpnQ78XG2i31Pk8V8LgXDiQvWPNHytmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hZ6uStyZCHgXyZoJwifsRKY71fcdYJvPzku4NvSph2LpqH6BJBBoP1DzsPrMqFrRSv6LSgKjsYoYvZus7Wdf6H",
  "key1": "qmnTJECczXxioD6gtWbgWq9UpHeqkiaxVHCyNGTTJNRUfw1rucqwS9ZrxpRhCDxTfRECXyP1z1otD8cyZnidAYD",
  "key2": "2ypvAdXPHzcvw6ciQxGG6bm5ifNkwYzMt1TjgEXVjNiXM5WeMSnZqH6y9ZDVUm8yervzkd7sDP6ZEbhzCfuay3cL",
  "key3": "48UT6AaSrLywxCQuzr3vhZRhAHugxjo5EynnFWxqCbpm2t2EwYnMzBLvwnUahohRCyxK35puJGa9vnywbFcKYM56",
  "key4": "27aVP5Pz57AevNMfgA2bUhBBrqtneGVJVh75gzUvYAXemncyHHHEEt332uf3d7CiRLgQSuyVN4mbtEWA1fUvN1zV",
  "key5": "2ZygvbEFy3qzGsQ2abPXUuKd57ufmoAN9njqVer4X5z3ktohV18CSggy9t2izZnG5R5PwoB5LLGZ32y1y4aUiYR6",
  "key6": "43yf9Rf3peW7YtWrqDKMeTkRPvkjybNStzAFQN9BgGCZLBXRN8i9c2EJBKdpPJaW8QRvJswW8Kyy5zeYUARAZYyt",
  "key7": "4dp3pbVBWiEx2VqJxbybigsu7m73n3NTrYVC9Xwh1yVCmGUCtW5bn8MSHLk31g2uf1XFkFDHfceAeUB8RafZ4ZDC",
  "key8": "568ynPrUBEZ4JPzqj1tY3a8h7WxBFgLqD3bDVFWAu1KdxFvkMgXKE31DwzoY8v17hrJHFVHffNAtCGsoGWfY9Jrt",
  "key9": "4E2P8Ao7csYcgfWdteB99U55Z7ZajXwZR3UEVpU5Z6qkgfnesQRFzdjTYL8DiysdmWNSuPc2ftCCuLPf6JbCp87w",
  "key10": "5zFtxAfPGGoN2h9piHfntRMAW9NvznXPTgbg9mNkjJjbSw2LiHNpPVj7eVEG6mo16jNbccmT8t9XqA5BkW6AnQ5e",
  "key11": "5bJLjgGx8vdqYJ69rfLaf3rWBU6RinZ4jPX3n77ZKxqZmxh9tg3PyFkZ9qVq6oKvDkbt3VDMhEJC7smYAA3My4Fv",
  "key12": "4fvZejG8A8bb4BweVPXUdoK2PwpxuWNLzvPWW9prJG6ncyQkGcPZd1LowDkMWum6qFRic4eSmcFnFpUJzgfk7Aob",
  "key13": "5iMaZJbJfdpNdsFkhAATarKVcReJLo5UjF3CMMTjrvYUc5xyW7SdA1VZyxxZvmz1BsjXCmbZo7NsDT3QeVNBVx3Y",
  "key14": "i9Nyur9GoU5EdK7watkPTAE5PYJ4nC1HEGMhopjwxEk1j2DrxDm6Gajt1fPyWmnvF31HJQpC1m9QFKNVdkeG9mT",
  "key15": "4AoAcUuw87UgLoAmS9rJVTzN2RAqoGmF49NZuoGyM5k9Di1Sf6jeHARRySfqMzKPFago84sMP6PhVDCjsroX5Wvt",
  "key16": "4PAotnxjbmA2G2va1cz246TgqCRp6uQozcUwN2gvkFf7QJF79XmzkRqyZPap9CWCctVnEyntTvmhw5mvyUsH5yfj",
  "key17": "jb2CpmF1RMtr17WeqE6uXn4rta7BL9YZjBu4ctQWN3Vt41mqnQ1dkiMcngxxJzU7SVPmvmxCify82k93XkcCRJc",
  "key18": "52QCcswR5cVfAEVyWkdYBaRV5TCrpDyY95nBLN7SAYxBvBP6Bjgjq5JdtD2Ft4yDDPKYGz23Q75PwAk3WgfG2RtN",
  "key19": "5xnNeKFmQWP7USmymWDWMjqXU8YCurQyrfCmx5ERgebxPNV2rBRRTrZWoqANqw7eyVZcmPqNNy4wg9hsnZ3mqB8J",
  "key20": "4PtsBC9BqvPYUE8h9GyXes7kRgwyRhwFiqSw9fdzkcdBRGVywfnHdpyA6m1y1SKLMKdDyCfSxSHojQLaMGHH6jZg",
  "key21": "DzNKkLAna6upy5qHwCmLVimu3R6fjqHAb3bMn4wDzuj1pQc1ftcu9GJ7TXS9r5yfu61SF9r1i4JY6SDmzcGbhSK",
  "key22": "hktjz9wBa6VxQ8UhHNgmAWNprZPfARD9YBPQkULGqgEBvDyvhfDMLhQzyLAyHhUme4myGqfFNFQF1hLNtkrz8uT",
  "key23": "3tQ53MxzatMySWkqmhWn1cRtfiXJAF2LtJj9nLxhxSMQFRCrxpxYMdgtMQp9KKovYg16F9TRSUR1Rxtuw9d42tPW",
  "key24": "2maSCUbauHoTkKy65NSv1PQAspPaRUjwtC28i13MpTuZB9bHiX7RqkcJNrBNDygUx1KWGHMF1BD7KCjVKamL6jEk",
  "key25": "5sMqgzKXNq8yGfyBNWDd7o6oVPYPNVfgjeGfPqoCK3fUW52FfrBQtnXTJuikejeBgew2uxPrvv9KnUkFzue92Urq",
  "key26": "5GG9miPcDcGYfw6eP7tLrd4nFqfo7DoQyMg8dZPJnZ7tzn8nudFDDgQiHZkzJUuwrjoC55Dw9DfVapjb3aBUjGJ9",
  "key27": "4wtSPLAcF1sY457MgkFpUNfNovWZ8yv88cQbCXRwxduZ5FS21VtZ9qTydwcBuJAKLVgVgmCqHCDDFuTMpsNfA8st",
  "key28": "3xs8vwhCDY5Wk9yQjXfBE6LSFr54kpJ8ScSy61RmT8y1qx4ipvrJCRDW9RTka47yWdHbKpC9b3GS9wqTv5g9N8iy"
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
