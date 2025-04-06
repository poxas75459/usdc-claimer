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
    "5N9tEG4CyoP1hDCTmwwGLTe8S9cmmRZWgqsQ28gsrtqSxke27vGJ87GB9G6VoX6m8FNDFwTp6d773VPi5xNknXSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZAoZBS7n7bQgF9AkTUg2R2oTLkuy6L5rCeeFtdQUJwmaMYTiYyxKsvJb1PdXNPujs2V6vpRLyJqWsr583QfuH5t",
  "key1": "5a6LpQXt91u8EkmY98vH3zCKxmbpM2gWkguorJqmuXkJjtd5iJgautZc6vvuAUWp9A3bn6saLSES8tKa7AQCf5Ve",
  "key2": "5bDJcZmLnJLEtBKroVmr1cM1nJAQaX6L5bSMqYcFgazWLWVSnPMRZbdYq5JsDQmNPg3Mpfw7WtE4HmKtcTieEkqy",
  "key3": "3T7RZ4V8qUqvaPPhnWFDtMBb9S5PFTvhGBZTagg5rebFLd7vTNu1r2SzAX1B5yM1R2GAzivcyygLtx1yYrFgLkdS",
  "key4": "5wHNeR5ehEWiETkrhu94TJFMDVCwPXd7tLHgsFkNETZPPeRy39ti8KEEApfSHj4uc1UTt1gQBtGmm3Mp6QAtX3Ve",
  "key5": "SQ1iszNsEFyrV5GpkJFExVphuoBuqr8p49feM9rJ1fYRYvFENf6PFEtuoh4jhdhnNH6Bz2utkQJ8L3zZxEhq7ei",
  "key6": "27zu1runM22xg4ohtZQVnSTrXx2vGmohAuC2K6VvYZvVbiTpBBn7bVw7XdufGypqxuzqYa7g4Uu7Xr2A7C99jZNn",
  "key7": "4nfw2aSGs9GrNxCSoD7NwptE5UEMiWqppz36J7LFftKGBtAyg5RVid5cLvPaMQmU5pWvTLRueMU4fcCZuD8eED1p",
  "key8": "5t4x55CkRZaWjaXckzqwLJhx7UfksxX86hi6eAsfff5Mbtmo2F69zEyJrgYZisqPUPYT4TjKjk9TwWuw5L5qXTRG",
  "key9": "3yT7Z7CvNsuy2d9VJzhhXy8UrfFxceh5Bmsm3gUq48pewfezCgTe3GrXjTuKcK8XVNiUw8Wt7p7HF33X1YH1hoMq",
  "key10": "3ZnUfqw31rUrji95QAPWahm4am6biMWdLFovrvYhJ7URb1j8ZJbM5Ru2xkUkzD7PkfrSzHZ6KU1XNnJhUBXN1eSF",
  "key11": "2RUrxtbXJ93YH8V9FXj2GHR6ywkW7tYyWiqTcoA8UQkeNPs4xLU2abA4AC54bJ3jLny5PXUXTtoH3JLQQoNHx7T5",
  "key12": "5kySLqfEvK1u2ireAUVGDN4wHGDchFcnhRuvsVH6XcP7LSRKmpT7xWhgg4RpBndtJyTKcRdjL1FFteDEVoAednWu",
  "key13": "3oFqGeC4mzqGUzR2mBiiKiDxFPuWohRXX6p1277X2baXvzXJvw67gg2Dggh285jjqo6LTSLt2NDtNEM1KZRAFZtX",
  "key14": "45BSY4C4P7UW7jfuWU3UfACAC5eX4SaSpg3tabaCXQiDfXSq2khhhogDG53G8651cagvgqVbR9VDhXKzH4QfswN5",
  "key15": "tmAozX4VjWgA6wR3yttSYbXR9YveT4brMZs6fQe85JGFEFvRv9L2ABxsJ5Cu38NunF3FXk6JFJiyKq3NJbJ7iEP",
  "key16": "4S8dqeTntvEp9MdjvwPoS3AzyqPzAyYjYwkw5auxP8mGg3E89cu7goX5cf9g61m4U3aSDpL64f3pZovXGPFN9cds",
  "key17": "xbD7N9Kax9RY3Gwz4y1FFtTkPLu7Ps3BZcV2iW4kWsZjJZT9BUJCMG4EFzpkMGFW9PwFwfUjBmh5sTsaMHsvhfU",
  "key18": "3RhiPYU5aHmaQTVyucQ1jeUxrTFNRvdb1Vd36fvm1m3FqN8hLHetqByNqQAfewp5GZC2x8UoXKhXXTDesymJNMwX",
  "key19": "5DyrN8uWAWLkFKvq3fyFDM3ZV8mhigcJTmwv42ctWFKzGhpUwF4Eubv8RzCfCwYnPLooxQ2PN85eYFBRYAwFVAEn",
  "key20": "XUQd3ym2YgCu2oQBfLtumqSsj1SiahJy9SCCDtjdawVTBMKFqWZg18GidokadCNQxk6P7w2UkxS9LdBDh9E5xPw",
  "key21": "4WRciSuJbdQNZbizhf7Pqha8XaVFZK4TeKieBMmB45wKZ4dazhRd29TXZBPdvF4XfvwoN3YJD2fbYJaDdLDwtJ5A",
  "key22": "5omd6riSH2i1dNymhVD8tzPjPRu49kEvKm1gWzEp1QvSpLyBy5eyFnDar9amwBqMrQzsANWAsmPj6frGLGwS37L3",
  "key23": "5thCPtKZ9bvTjcU9DASkb91ar4UE6oJyK8jEVyaDKPjBxNor28NaDQES32ULxFHhFwCo8N6aWbboT9tzvaJBEbJ3",
  "key24": "3ZxgR6p5xg6Um6SYajykuV1QGYSTk7DkhPYbvWZkcfh9bkTaHT89bt5qnsr7MVthgf3s1KySDY2XawUPNFBBJfzq"
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
