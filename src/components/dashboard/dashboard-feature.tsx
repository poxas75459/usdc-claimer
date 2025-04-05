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
    "4PKw2YZnbfrTSc73KUHqhU5tmvaYiRZe3t3eo76L6yjPncjkY7A2r4HCLQZJdAJvu4MLj84e7DYVWxHvPUembdBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Dvuw3CDCHgGkHu6VD9uBS9QePVi65zq8dnZM6SncE71hwU3gbwfZB4EHs6qeBrC7WSszJKrjKPohw6DEuVoue6",
  "key1": "JtspthQNmWHvSuakjM4KisSf6aouyBtVxynN4WmSydZEu4ReYpGM55kfHY7whiSk8bweiDtSNDuXPY7wJDQbwg5",
  "key2": "3teQjGVLqAvt4RkWVugcNH4bA7ZHAusEDDpFkqbYrxJDa7GjySPaFsjPA9CAUNY5JQmRByjhuSnv3gCr1hhfvcnp",
  "key3": "2FzkCjQ6sJuD1JKpfxPnh4MDPnU741qWX8Q55ViurtKFxkxcjFXWo8wb7crnx7WpQDWjXQLy1CdnX16xC6WCtAE2",
  "key4": "4D2t25oMJhyLzuF7dSaJqyPXwRSWzTMvegH17yaspgurVDExA8mkpvYFarmcJzz6rnMuyJctxEbbjdsgUMjPWjbH",
  "key5": "3MZLiK63FdgCbVFYk5XMozqPQf2C95N3cmBs9P51KSxm6VzJop3fMSFhdq8m4fo94xFeTdvcm6HE4Zd464kwthEB",
  "key6": "4axZUvn6ANoM4qGJexnFQ7xsTYu2SmfXQCDDh6fFi6qCpxG4ao7ZKp67WS5uW1NCfVPhgjiBFrzkw67sonK218wN",
  "key7": "5ioSkHcuxbqqsZd4bQVf5cuYjiRCbaaeRNbQcEpLhjsGFfryJs3gaup4TwCgW3aosqafigLFBhLJLj7bBBECrT7s",
  "key8": "tY1jXXyAuyUYHsdqqj6dbm1H8LK3i7kPH617U2EWyobPGDtDfeJxFzxJipHBrZfwqPdN63aseiFgtqDDoe2S7xc",
  "key9": "4zevt6xg3g9nVZUCAN2btMBAeaM1B1Z7PoPk7DonUKkZArjt5E66g6sSqrDEjA1Law77ppjkSAo92mynNzF8V93W",
  "key10": "JirgutQEm7bLNFTbCmTzU1PfmLtqy6QpGwmRmykKYg2SVgtCWy3zvRchM1oAU3zFtHgZi3zo1L44tBh6mab4FRx",
  "key11": "zxUjTU1bpUcjakk746Qdx5gPEgJWk2AnY2Bx94A17zhMJJ2zoUhYuX6w6bDKxdDoaE6hQvVjRjzCpP7GXQ8iCMQ",
  "key12": "3TEqnfCgKKes2fjCQctXYpEhzJVSTAJzNv549uYfVWse17FtxA2TWSC3TBU5vXuq22XMcPcYuasurxYKqEoJkh6b",
  "key13": "5mKv2NgXYk2t1QFVU2A6vwjcyfcvCsrBgjVVGfce5PfL7cdNErbDRYne8j2jPGGrEXamgtWLfTtkyFaviUUVxT8m",
  "key14": "2g9sG5TNVjefFXF5CeSf7TzAC8um5BU1mSNTkenppRyAZWjvxqZDc7dMW8i62DiwwS54xcFZPHzdzVk8hNwXCdnb",
  "key15": "2JXo8dTRobfusoYPJLBbZyKS4QfgkFkk3EurH6SAsb1poq4cTMuJYK1iLwKEf2PUBRfcLGqjzRMYfoG8XhjZeaB7",
  "key16": "4sEde1zS1yxg9fdEccE7bCDecHU4s1iWCRBph8erAByiVTQeYrrdoM6ZkQaaAEHVytHzffLZma2VjuxFuueZv9Qx",
  "key17": "d336r3MVHjKFrWK8U5MGNxWvDXoCBnsQuJTfdbwUpZM58F4RaArdsyACTUZBFi8AUFPEtCoWWK6TK66rxABuiAf",
  "key18": "4n8gy8D7KJGcrGTuanjnhcvv8T6wj9bwANunG8qSiT9NCKnz9PCe4WduH8SMbmQFWuizyY2vK2JQLDvJcbghtARg",
  "key19": "Hq7WoTJozUnPJpxoyZg29ivUVWYco2vRqAtRCH4kn5DZbcGu9u7FfSLuqRqmuUHYEU7BhCMmaDFS6hVkKBeUwnK",
  "key20": "3fqH5HYD94SSGiSwchdiCJD3QFGw7hbQjhZmWKKn6sCnwbJBTwi79J9XSSNcB8ugpNVTLqQ4nwzdLYvvjWzmrRwx",
  "key21": "2UfASSv96ABFfWAZYrS7BwFYTyDZA1EYhGgDswMP7WbCVsmDGSutmP5crysNiEg5x2mvXLQq9fRfcNtp6WwuGgxP",
  "key22": "2S8jokxn2CCLgtRqFhv7DKHwqUBrLH7kppqpgK66yySy6S5bBd4Q9sCMJH1SB8En1FgiNWTLWqXVmRBMrvVJujEt",
  "key23": "5j9Z19wwjT7o3PrG9xNeaFXUeeM1r8VfKMTJCjg7rWdBkstNzrNRJyaJTMq3iCP1YrVR7opcitfTKBf4LSeC7j5a",
  "key24": "5TrvGwxASPa4q7VUhkpViSXKKy45pcu9vuLp2uXxtwraHAKveQGzrRNQ31B8tW8Nt2sNSV1RHWTghMS11qGer6RT",
  "key25": "66mtoS5y8BUfZpR1zqC1g5X9YYW7zUbc1J7XUip33jEa8etMKQQA9zhpjYJbJ59igVz2jfYuMTjM4yqpUP6TWbKV",
  "key26": "41k6JPKW1K9NCJvpq4DHxLvEzNebPJzoeTVL8pVAbSRAJi3rYFJntvyRosqdqMo9MHBWuzyLe63cPxRTMEPHbTsU",
  "key27": "3i2A5SQjnh19bCpHyPvefGYLDQEKab1rbnDwsTRQ1w4NSgmXDqPoWnEM4N9EkM3aFQhnoUWfBXcBeYuFGB6yS96n",
  "key28": "5eoDhwVuxx5eXTCYpXt1yZ4TtJaQMLW3mASmPPoio9a3Bnhjhs7PCtsu6Aex2m3fKMfa5pKYUWuJuBw4PCKGoFnH",
  "key29": "kcmsyhjz8tdjvRDuWApCe21uuQPG7Xc5CALD93i7KuK57FmMQH7eshhLx4rnf3YpK4ntvzt5SeKuvRko4GomyHF",
  "key30": "3DGxBfskcraPBRSAr2dq1ys2arvBjq6Yi6MhRbphL3EnkhWeq7Lua3uE9MsnsGNMAhboXZEQdrNHrvbHghiUki3w",
  "key31": "h3dTpEbkkcN8erGiKgdh1HsKmzu9m9qjwfEop1VyuWnN8hw2n11eMwzztT3kpDN8qnK5b1oERC9cdSzwPFUGEY9",
  "key32": "5wu2RAEPRJLegPgqrC3xjmxyP7KH2LXfuyDWeAzQPsXBaKTcpkmU9hMh9rZSCSPWSCUJny8JeCHJGWsBPSPStm6G",
  "key33": "4UCmfKJmPv8JRzpdNsDHKpJLj9B9U3QzaX9cxZP5ap7fJvjp3xsGW8xDWHWP9R8bACo8HJH28hqE5B3ZccLc58Ww"
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
