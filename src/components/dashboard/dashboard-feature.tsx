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
    "kx79kHtXgwErXVUQqdLXADXYd73rMj4S1KAiJzYefF1kTbQRf9mtfxobQKbBdK3jDk7hjaAXAbSJCww194uPq79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tXSyF6hw1CFPgksbSwUdHswwCfCPrRWXDc7WzRWFHQgYtbsVuerUcLmfMNpnjFg8V48ac9AKuwnXJEK3fWnN1yq",
  "key1": "LDugyXmJBiT7xjG14XN1abqcjXFMJ3z44EyG6iZvCttdwWhu3tF5uvHtM1K3Rzw4Pj7sNudpeUXnKe3vvijf3TS",
  "key2": "5DrKPJyaXcLaCmzwRYMc2WRgyA4MhemHxQaQnD9BQF8i7JJt8KWpmhk6uHws6rBvdbN2Cryc4SeeRLXJuXepJFda",
  "key3": "5ZTnonnqYSS8fxmwd4qSw7a4PJVQQPvfkDzUzNSB29WZFYrS6Cb38q8bzEr4XbR2u9UrgWVeJXTX8rUdydS2Fb4D",
  "key4": "3Hod9PJyKJ5ijfMzQ2DGhqTbBFGsqiz2y17ycjkbAf4Ds51YnbCHmbxUaK7qzktcr5UYZEF4xjaW1mEKYgHoFe8x",
  "key5": "5UxiTyoR4VH2v3TLW5cCCZ4hg2xeGvVHBBynwEvQVR14HTmgWK9rSBRSqFDZy67REXYiKrR6q4kanFudTw58AATp",
  "key6": "42HM9QZo48RyYgT3aNDbtHS8ZWHpwetT6zo5MLQhgm1rJSRtcE5NGTWWZx5qRFsfMdp6wP7HTQ2ttpW3P1YkZ8VS",
  "key7": "TvkKubG5n7j4eq1AQmzQhiuTivgNDEKyLrfnfro6cANshgSNv4ViUAbtVjFA5fFzgUuhH46X5EUM9Q8ddg2x36N",
  "key8": "7pzAExzrbMq6sAVrCNbyzbgPqY6wiH4TLw2zrtm58aYSCLNa5YzzCHtMgD2Uuqmn9dwtHfny4482gDQ7pwKmx39",
  "key9": "2kH1aWjcZTQNX98AKxG6dqjRn6TTQH3hNthWcj7JyASGEUtrESaEvHGKULdZij5fmDdipJ2z9GKp7ssJKjbwfVPK",
  "key10": "3HfxFgkfJEYgw41gqbzhweNFALMM9LCczP1F9LmCcLkHKUNxWYkh9DupzXmP8WuYWJc6Rn5bDJEdnUxD73EapQVa",
  "key11": "3Cjeq3RBUdT2nJC3ftegpv327JqYTkqa4z8bF44x83WaLuXEHubMuMFjWhDD52wKrmppSnHE9HB7D5bEoV89M6Pw",
  "key12": "4NnjGNNDBgHyB38gH1KYtTQUaCjYybSN2hFbgjFh1yCgNF2ki64o6mbKasaUuy4Qk6esPseKHL3KjD8KSvs8tSWf",
  "key13": "37p1qcgfMm37FLvMryu8BhRQo7mKsF1U6E3uJ5gyJ5NuywPooYvPkUHrj3m6BWPdZLkxnwhzUKNQdVyn2LqefU7t",
  "key14": "5rpdpMaRudVUcBSvGBxQr3Abjoff2gk9CiTsHz3fjku1ESuxbgE2aouAh3hs3Fn9uFsFiBWpC4syz4V3NYDyFy9t",
  "key15": "5eck8VKaAQpKGt7cqgjtMLLGYk8Rz9E32i9ReFZJWkcbRmeTdF4D37QVYapwSf1WA5wjQcyzgQMw74cH9TwSYXSJ",
  "key16": "28aBSvvLNDX7RwYet61GpoafYtQqABNcNT3wXohhp8bJ7hxbbpVC4B88EmzGocYgr3wQVELCj9aQfSQhh9xaLDTQ",
  "key17": "46PH8FQZKFFea5N4uEZh936ATFoFBwY7jww8yZqLVyHdn8XpqWzTV1QTQu6L1jH26mAXw1gVNBvm8fFM3jjCJFt6",
  "key18": "3wAXmyNe7J2UZRCJrRg1NDyPMVzZECFBaG4Ui1rptKA1UJ7bGMTs1Md4su2no9Sr9wWoCXfFG1WuNM468cEnDAxw",
  "key19": "4CAX3pngQmxdTeNBhNZmJBqfKv3gLbZnShNpXpsmHh77hcu1fB3AFaGwsT8BrMYhx4CJ1N5ym6VLsjgkfBVxN9mK",
  "key20": "2GyM5HMCvrLY7svvXKyBcfLJ3qSkL5GWZyez9tpCe1Dk3BGxbRfmQn4jF54dR9Zwpw9aqniBZqwgPtf8HBrn9sm4",
  "key21": "Dr1nApwmWECq6UyybfvUNfrEjwUF77munTNgJcqK8MtUQXeTFCvvFR7yB51MwwwChFmoTD1g3GVstPcy5c6J6vF",
  "key22": "5vBSovaWhWT4R9vbL8ipjyZD2twSKvMcc58STiNmNvR4qhoQkucVnCzhhmJVPzd2MphSxNxxaHkwfHDZihPZ4KTD",
  "key23": "3cvmEPjLcVgabP7MwH1xLgPdogAiQ7eQiRTu6TKRBznSpuNrVDUF67pZ7nQj38D75cbdtu84efQpRTUhsf2Ph747",
  "key24": "3U1vqKVo4bvoWWMLbk4azYfxeMK32UPUKXzcjnbzcCSXrbp21Myc6yHn8jNciq6Jnjbq2CUxgQc3y4D4X5esDuzY",
  "key25": "4E7e9hWcja7nMijqyJQJ1WuJSwYM9r2zuk9P3A6g23fXyCbKM1WWknEoRFZwwAk4NuhWTK7rRb76wtiHDKJ1vJbv",
  "key26": "3XZ7mVgf9bECw123MGoMg91NWcGfmai83tcgqSHGZuWd53YKMGXKDLuncQRVeTkyVQ6KFYG9ssfRXdQfwW2qshwr",
  "key27": "u9DHVigpe1ztF4nCBdZf67oLm5YxNsCwch2wu8ELFyCfFTkNieV5oqQBmz8t69kSK3XjApYQgFHi9CTLDEHAMko",
  "key28": "5pmRNzRBKzpMzt63hVTBMRdPtJAABa2mxkMtkTdiaY8xBExxXcNx4sQnSe7gNfrJLcutHnmSgFAjdf4xL6UyYKPe",
  "key29": "eFmin1i2tdShvqGhCKUJRqiP6RpNUtY1sde5wFAruRAA2BuMvVzhwU7S21f8vFj3XhZCZDZmq9ZohbvFA1FdZxh",
  "key30": "2y8xmiAS61sxFTgPszc1t1bnzq5yJePVVpVsgGLengtjoXGtsb3L41s96iUYm9pnBNw3rsJ1WBZtMTCaxzbJaHh4",
  "key31": "3z39ZzewNmVG1FYnLLP8kRjycJSRDg728rhPVguKRXtFr3vUH8UeA84Y1GV1rMib27LDGZRyv3BRWT3ePobgSzCA"
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
