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
    "Tg3K7RWc9rZ4YBo5D6zejqsP3xcbcb38XCjDuzux9dXR8nTAbi5h4Yx3GqJtJ9KqqV1L9oRYdVU3h5FYFJdgTBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G2hqLY82zc3MUyzz5ByyoXETBMkiex7Dw8Dt6wpZg8cU6btXcyHSFJVPfkyQ5sjfbDQL4KWd2btgY87dBbmbat8",
  "key1": "2uLcWHPYZqucb5CT2XxjaD5vZVF9JfhkMi9oNqXq4SD13LHdpAsc6FzymcGfnvQajqpEuXSkBdxxVfUa1iydanPN",
  "key2": "4Q4BoSRQDd9iK2LjsZ2qwEdyGoN88pQbcE6n1XvWhL18bkg9cXg6Tg3apm4oBgEy5PSZTtjAB2RmEPiAXxyTnpfJ",
  "key3": "mPEfTy2uLXrgKw4e82PydEZ1dzDXBjxuBhpPRTM6dJmUDapft5rpJHyTfwv8bek4FXiHbL5MsN98gC5Qusuvbke",
  "key4": "24oRSmhLr2oBxD5tbGJwo5XNSXEpWuTT9BRuVw9FJEQKmDyo5SQzkvDLAY4ctZs7ccYFGXYKewQ5P45T2dvDAFAy",
  "key5": "xAL9wHf8K2hawuFbQ8RDr9hH13r8aFqgk3kHUC9cmkbnfqV36jcPJEUfXyRZTKWHE9Fb5NobddCr9K16H3ApZad",
  "key6": "5K5RNCKm1y3xo4Rsec24rX8jQdAYkvMHLjboZg832oVU2dEanUgjQfgsbAJGBG6RXoJ73ZWAgqhA7e8mWPBF1qXN",
  "key7": "5kNmnRKfFxZ3ar4LyNz9Bvs5ZyMbFmbxQgTMgXuUuA93Va8ZR7SEJL22CLmmbY26rv7HAh8GZwNQ1ff1rH6krYz2",
  "key8": "4BkG9QtFgKqXTjSWFEusUrso9o4eswwNT7dSjGma74nV3Y7mqcx3yADewefQvRrh8qrbCu3VaEnKk9QpPQzpcGV7",
  "key9": "2bjJ7AqrcCFvv6kLJGNQQjqS8rgDJDN6eL4K6SWemiUVzsUx8NtKNNoKP76JGoi2MrowXDmeaLenEnF1jLuMmYVN",
  "key10": "3GL4UfqkT1B92TTK11EUhQnisk8y9FBmitYmZRTMx5CXdvAVvPkeVvvVWA6BgQFxUWpCd5F6a93CtKnT3aZ865Gf",
  "key11": "25cmJFs7qC8gqAmgTEVGXhvXviEg9ECr3Hvc6HLHbcsAKoqjj64Vp21ATN387c1BdzUb991JiHjPn9P2nwWbanM3",
  "key12": "64Y4tuzbep9EaeZT2yCNr3hC1UwQpKUKLgNVLjzc4MbGsmREFXspbwt1PhaUztvJnz4DPKZbu7EwPf5xGfUT8QAc",
  "key13": "2YcqsHfmqk5p4tee3hs6WvVhNYysL8GDvtz7qWwMNQgVqo9woMYyyBUascb48thVjeEeW8wH26Zh8aX9HcBL2aeE",
  "key14": "2FrnRyQzKoYHVqkPdPM1iagEbQeEAJX7GnVRv8e33AikjdJpdot2AmFZdmH7aNsCPkRKGsZk1iN65xQ8FtPWxo2m",
  "key15": "4WaBBumwfiizTB3hJFfPVgNtfiy9b6EMNKi7gUMCScaL9Q8f3LPKtbcbTrkWpd9oGQM7PqbJdSJVSDgJEzZ7g7uU",
  "key16": "JpnQw8z97FzmDDtgXvaKrAdTPQ5PoYF2Ehnqk9FJCRzDZQJGCZtJL1W99fbt3ie7MHspCn7SJWqfKRmnAVcKAQF",
  "key17": "dtpvuKBTdR3RFAnEWgvhxcMcygmmuPiHcqiUc5BMYHLPS2T4ZL3Bbuuako4qm96XkPVtBfCryX3GRdhY1BSvyiy",
  "key18": "3nUTZQjgmYC74wcEV7vm4xoCSjPohwFAvJg4xHZNBCCjeuRNkWLuHP3KkNa9hRhkNkvK1th6zcrkmd9Dzz2PJb6t",
  "key19": "2TjM2FZENMAMcmRFjwbhjMgpHJ2wSz9q24jBn3rXp9q1WKiuoD5kQnA5X8Jnw8d4JfDkYvhmS4wL1V4xvYxUvByf",
  "key20": "5zmq1xZHeBmKaKTwYrAgcjFysBowC4baoco3HfWhVJa1PkQHCSs6FdZ8XMQXRhY4FwZ71k4vqu2M8M4b1sSxrs5x",
  "key21": "5RpqfAw9A49GdoVYNhgNdfjLLpKRJfgYk52qkKcQ9qmuZzBM775FHV2r44kNAoMdBaNWkmYrZoPYNYpySreHWyeP",
  "key22": "352WsCZq6JJ9NrgbQTHS9L24nis2EM6KdihNwwSYKAskXsGJ5SjJhDS3wXL7REXFPzceiNVR8r7gF8eFK4ER9iYP",
  "key23": "3DKuzc8sP9zwuGhX6WNVpM3WE5JmdTQcPoYXW7rSKeoj9DRPQzLyknDCGXaLETT5AE1A15Eq2C586wPKAozv85Uk",
  "key24": "2w2P9rELPjR5bBYA2ZfFuyxkPme9GopEiwLguhtTNQwL7xQUSH9gVD8nkHC8wcJhKmTDxXiBU3VtiBf7cMzeTCwp",
  "key25": "4eB4BQ3wHLJVfumZG5X4CjYL7ctzd9qVnmJJawXnTE1YufU7dsaujcWowsVD4X4g2vG3tCV3RcJhJqjfYsWJZD5X",
  "key26": "kfc14DhZBggpDdA6jvvRVM5CENzx59x5iJPeXUQszd2gKqHU7W2MXugqqFbotGtbU8o1su43PovZowPKQo1dzim",
  "key27": "w9yVEMZkhu3PYuxeVPQSe2SfUAn4ycF2xBsXks2QmAzNCEsZNqh36Qd9gwfvE3A2voDcK5QM7PJ3hanRknXd4jH",
  "key28": "37zZ7pPhQHeT9VdWeyRqiwtpZMawiUd4SixJJPMSJZF6ArhQ8hTbQRdf2iYmStHkXHMj6jqzy2Mf27ueb9YfERoZ",
  "key29": "5x2XbBSsXq4AD3j7w75qsPse9yv8AX6iWDdccqqLqLY9DMvT36ZjNGdo1jo9ywGYwp1RYUafCrTe93eyAtRc1huU",
  "key30": "5zFHYKqT5c1XEFebp1GagJ9CiLn9p4Rp12vR8x7ws9CwkaY2mMtBesGNPBCjirbUiWR77quMwaXC6zvvBurG9chX",
  "key31": "3ntp1L1HU9BBWwsVfDbYBhuFhitvTL3fHLcyPBP6BLtsRNNgpHL1Wq6c1qNkvY8drMbbrZ2xZ6s2VksJ3dzv4kbb",
  "key32": "3ymwbfYNiXyREzk45pGsVsdvV2mbZg7VGEdgxEUZi8P3V4Cpc6GzYYxCtyM78RdeCMSFBdkW1g1arGK52Gm1c3op",
  "key33": "dHDDPrrH9poWfFsvvXFpMCtNHswTMn1GfpjR7JoY6cX183jvL9d98tQNLEjtSbDrQLMy51wyq2PcGxAvDskyea9"
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
