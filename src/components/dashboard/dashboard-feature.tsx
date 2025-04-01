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
    "3iSe395BG8V3BqD8xRLiqmwf3cvh9wg1qAXCXknKHGY4Gh4sByRjUyno7Pjn63t3YP12FCaNtjHUUxnEjjrJyRLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBY7HoDmQpGjXMu13vgxGajqWgm54eBmNueGrErbuJJsCsA1uVJeSk18e3bNUrGfTi2CPD4WdLD6qDpju2jFqEa",
  "key1": "2RhURcz3C1hmuGH2LMtEkQojE4i4dwUaSNLvEDCppU74Y4F2gNbYkcRNPeVqjmeZCMNZJUoauV8RG4Mh5rfJ4Eyq",
  "key2": "46zYJk73aCW4fT41SQKhUWDXQNWgRSwHpQZtF3bDEq3rWtTnDtCHTJgyWrwNfiFfCdjT8GGrVykhgSxwkVw4arXq",
  "key3": "43F4pcQX8VVZ4kvZg8VuKi7kwtRnF2V1muJ6yQaNSuVYN64i9WVWQirzby2YpWEhkqPntQGFZqXAPdzWz9VQm2eL",
  "key4": "4x9za2KGubRhk2FDiJM9fW1D5kKmXcYD8K6n7JtCcT9Fy33PNMYs94TCQMwq3FfD3wtofB3wpKdQpEHaJcCDqCP2",
  "key5": "3AhREZD7G6zngkfFoDETuGjYPJ8rdq2Dnk5mk39e75sxZCa3dnsbGeSd6WHKmtZQtQfMsmHciRrNecRvfs7vUBf6",
  "key6": "5gqjGqRfYKzgF8yFrFzYhusA22wL9FokVhjxYRtQ4PFww5qnpF79btY2RvnLinncjr3GdCbi75UsPg3xi1X9NNfA",
  "key7": "4CRifJVjc1tEEHmq6UtTUk3DyHoNLrku4pDyyzLLcRyvsj53XpHaNfiPpJEfhPKdxtV3VyCHB166KBE7rWiLHYZi",
  "key8": "5Uk1mUt63i2Rt6Mt1j45HTBR1bENGCK7VGUtFD77vy4tbEZRZ1fzF2aMpwBJrh2VhYDiR6ftyzWzfwi8JRU7ePLn",
  "key9": "dz1dA5qrnh7gfFXgCQS2wD3ZXVzZNXGZrCm4cKvmm96SNcjDaEGV2KiXBUxzTzP7aY139yrfxouoz9tRpTjQkPT",
  "key10": "4Y4x1Tsg9wQQK2kbKpAr4nFyMy9auzgXvYZGzxPyU1FhxmvR58FZUxrwoP1muVmNnCyg8HPEX9py2PDCZrGvHjT",
  "key11": "3CVFKRxNQUCZPJqLqHaFCGbe1F4hm2SpechFVSrL8czMVzcsvg3TVSLspu92m1K74YxcBiaXxqyDPGWpbSZPtKgq",
  "key12": "2YSogntsbNY6DUcFACoDxJpBu1XB9kjfAGmVvAnamrHV4HTq3q4yvPwYueWKpGSPWvJwLgYWSGEvnbbtVwhfB4Fr",
  "key13": "5Be6ag9LfV48seoeabQKFugGzeSWkKEWdZAsG8nRVSQa6LUdz2kut82e2mv6qJ9u2G2oQWRe2zSmGgjDYni3AtcP",
  "key14": "6PVR38tdN2MBSjBF7ZC9GhwTkbYY1hxExrpbD8jWdVak5HXyzioRHK7NFXUzbZJQBUwU3LUtaxSSbFtgSCfvVqH",
  "key15": "B6Mpre9pCpcRmYoV8BmGwCq5MCrACSZCHryEpA14XfmtBgSkGE3TJg6dtW1pjHpisvbrSNZeepW4TQ9RXojRhwc",
  "key16": "4hoQVWzUHdbY4MApqnwc6Ma9XKgQwq4fakxfaH79mAK9Rtscfann58WGzshDK8gX7Z31ogmbvfBPNiHeZkhQDrDV",
  "key17": "4ZbbqUzt3Y8YUWsrtJeJN9azQ42spnR1NXL74347BsfoEW5ZsmEyUAqYNVnoRJTnUAxGYkeKh22hBZEsf9tAeZcz",
  "key18": "4WAeLso3hLtmUMd8TD8a7o4f3v8ebCgVDqFYUqZqLJGucRNCR9v22xh3MJZN1Lxv3NfYmqHWTV5rZXz66VQtEsGE",
  "key19": "2TFdQZ3cK6XehRRDfrTBj7GwFf2tV9v4vqvMgjL3KmaGjD5jjBQq2CcWQMHngKXYR4kuHUu8uZvzHkxtLZwVeEDP",
  "key20": "3ASDF14SqMzwn1SZk95e4mXN99F7dRZquN24PKYawpnbE62AV4znWDisgQPja6z2Ra764232RuWTEnmmPxp1b9rR",
  "key21": "5BpYEm8iUXqYa3GPnoPMvw1zsJQuSNo7JyGjnaaqXmxrboUvhPUR5fdPQhCLqd6BCBLnE9787eRWisi1naMFiWBP",
  "key22": "3dNrJRgtHoRa4mije12VW9WDbVuWiuZfAz6iu8CriPbrcz2bEzRB5Sj7NNEbTRu5EtWCo9bCk43qvzvswR1UXFLL",
  "key23": "2BapTBTwaVRtLwyjqtCRtiNCHNy5vSfiEJ6qAdsv7PvZrbZCPmciFsjrg2sHKZKMvebS8kHNfaT3ubDNbCJENx3F",
  "key24": "kDujdc4UowzZMArDNfTasrn1eWsDxVvuU9HBYMoSDAMVFYDYuLYFw8mBn4ZpkxXJRsJaMze3qhxPpMo6fcrXxpn",
  "key25": "4iYaFzGXepccdqYv7asy2pqA5dpVWD8WY852EQwm7hurN6RErfCK9eFMTkTGth3igW4caSptj54LtfHgYQYEj39Z"
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
