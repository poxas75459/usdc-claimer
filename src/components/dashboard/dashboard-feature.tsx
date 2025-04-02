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
    "4BKUpTCvH73eo4vuAYV5BCwPiyUFbt7WMeT2GchyGiMx1n38wS5kcnAnpsRiCcJrkddfDwkLZqjk16746sdBs1so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3iGECXWGUhhoVqDe4HB2kbJceNGndNAerYX7G8na6JidzjpBF1EQrtizjw8SeH8ziHTG55v7uAuR6xWq3k4Wc2",
  "key1": "31F4NHsCpHZNNMDCuquUofdUVZJFAmjTenVvw4WQ21oPjE4FaGnjNTARxmFAtutpvErZSCUk6c2P5zV88LohStcy",
  "key2": "5vpRDjK6vA1YkXz4pCj2ccL4w7JDzVtKQRPFUBLvjhRK5DetsDEjuAthqttFWH3UrofwQ9tzNGvbFXoSuhqGCUAi",
  "key3": "5GqxXcmgBocgWDE3zZcF5pe4FBfnx7WMA81PTMQQZZBfSxRDiKCczr995GPKPrJ4JUdx5jKGDNUmvp83VLi2PUHu",
  "key4": "3R9TuJt3EM8Hp6c6oxUMLbqG764nMdzDvQfUzoJV4HVVVYgwY1dceowCBNGmdSU9uXtKSPL97b2c5h158G3arGAJ",
  "key5": "5yNzyNFTZUkFPAfEYt7833hxPTk6LzpNsFQ5wYSwUxFmtFd2YyoZQTT8ZYXpXufYVTcrVkRvnGabe6GYB4r4Sv3j",
  "key6": "ngGqEr3PcqKL4SkL3YaEupNo7bwA1WeTkdtEdU91h9LBSMM3LFGXjYi85gQHcXKH11pzNE8Th1y8Dw3GxxZsX1U",
  "key7": "2pZmZcCrvg2AgarbgdPKbEkNBeCgSzy6qMFAKE76T2vrU8DuSb8jEqpfcEGrtyiSL5DBAvWc6gCBctjt1qTK1Luy",
  "key8": "57XmoUKYY1mCzoWr6SPCb9xLC3KLU7HfyKrkjqAGj2n3JTkDSvxzKadKbVs4fxWYYVidjUEXThWMJmk7BTY7fb7W",
  "key9": "3m7KfUfwDEs6AUpC6BK5s1NRECn3NBK2ahARqWsEv6yq1RAuH8FejzkhEsnJDbQtDXi4oWxSCLQhVTodRYZuSVM7",
  "key10": "4MBsmZsm6DtrogYKacA1nQ9sKnj8cFYok9SqiQqvUetBLRkSgnMddaKRLxBbuXa1WGX2asQddBWpxWiRQ3KXY4jb",
  "key11": "4pHKjkM8qATdpNygocMWF8MNG7yCjciZrQKyK4CApTW2jyV1vA4rQiygs6zzBhLWtBDa796uHJsi2NAJChQzDRvj",
  "key12": "2nxfZSWmaVreYNkjv21cgwBXyHsrq2ex25bgEZKPkBH3xd1YWsJbqz9c3xt9mQuA6cH7sfnDAHLybsebk5nCL9Rn",
  "key13": "645kL6cznnVYVZLaSjTw5t44VTjR8nMPqXog3fks68RymaXmGxcvd2B9HE3fTf8WNtmpxekeSxuHbnA4C3QimZLg",
  "key14": "25iqfkwAK3pbAoiu1af2GECcKDKXCgcNqNkYCVBsU1EGsLcw7juXjsqvV5Nf41XFBehuLHnzKvhh99oXasDazQKE",
  "key15": "QdZamNCSHgxELxfoNRaY5jz7eWkzvgoMq13v79M1rCVU3aa2xtWkv1zz21GA7HuoZkG48iGTSiUpqYikBCQBBQH",
  "key16": "5zsXSJydzJTqNpr1CaCfckzi4vjxto4PM6szQBNGcGHTf4CfXcB5UCKp8xXCBryZCeApUnAZzq6hTzVd1x33htEn",
  "key17": "4yhhvvaZp8v9qR5puiBtTET8X3RQPqx91YqPSfveKWKttC3brMa3t8DTFismPvdGwQC4jiwkUuZR8R6WCVWjGGaL",
  "key18": "ePeM2n7zVMtkYmuaVzDxjR6JaFpYDpb22qigRmgzj2AYcHZ6xws5irvm79k3b85vxEbbSoCVTaTfzYnAXuNGXDQ",
  "key19": "3suNMwf9a3anAV4JsCPGiWKvfyPx2BUM9K3aYjK6VEbP2FMHFsE7RU93U6vAFF3F7fpmZS5Z2jDDkSpoSNiynKpE",
  "key20": "2iJ29ee4DWrdNxaCVcTckaTmGBEvnHuySgBvUoC9nnYMFZQ6wcFJsitYGoAvktHrrzCmhveU2upiAnE7yNWHA1tD",
  "key21": "28mndfPdeE5W6FuN1DxUmdBwPJejgqihpoN5W75bwgLpcSWA7ZyFC4gJNkTHKrNLG2LFJtUdKyMyGnyJwaEvNd45",
  "key22": "4wQ48vbFbNcsn4wAQLLQVJwsKAhUUdDRSuzrBcRgLM1xeWNA9e4s5jJNah1xuDEqwj8xkA8cJvKnPFvUgh3znx1q",
  "key23": "zhHL2zLYkFB2rzVVFk2kveDACmtYqFbuSCDLtt29ZyEcfHSbf9vHHBAWxndEe2RTZ2QfsRMYL5BUF9T5PbunLm1",
  "key24": "3aFwWM8FCfvMESCSJfGLZbEjAq9VTW4axDjna8QhoBTvrtV3cb7NVG9X9uEoyJw9D5YNUGw4ZXQ5Czf7GktLTnoy",
  "key25": "5a3FiyijhpxWYriAeddHNM5j9YSoRoNFYboRWoehttbVuA9ELWeCmEf1GTkujNC9miTgbopMsjz8camybuEBXnRW",
  "key26": "2YocaV2i2mrfojjo3dPV3uQxwst2A9CtAVXZJYKBZvawcxNpxF3sjx56FWqcgnLvx8GV8XJB1PBoanPQiiUqsTPZ",
  "key27": "v9XKuX9MeggfugMSHw2gbGYGPmSLcT35qvB6FGccSRwigEBJecLx2xdZmRuFiKZ8EpgKdLnDuSnqxqZ5CRhpXXK",
  "key28": "5tSct7PSin7tTXdAuKdRZGXLKSny6n8kExv9nxq3Q5yoswsnNwzXt8mCmydD6bnGi6iUoLCYi1xCMkYHhRXatfHm",
  "key29": "4apc69tPwWKdQQgZ7uWm534F6mhWX4DunXsKgKXEmaJ71RfbnTt2s7pJZUNXLG2yJXTrKDrwprrYaB5McNJexwgA",
  "key30": "4jXFedyrVxKo2fUV8hy1v8NRGNgCCNSrnLe15iPXzY6X7SWHBzQefAARKLzPkgMXqxMEPDZsrVeY7Vt2YubuZFTm",
  "key31": "2hS731MdpGGPFzDqptGe6L9MKbykdJfcYAivKMAFyj8VWWC9ecy4kKGsfWQhXbQtpzrQefeWaoVrBqL5ubMC5Mhh",
  "key32": "eU4bJCHrBPhBTEbwCSpdS7QCkPXoVB2Huu8H9SRQeHUtrhSJDt7UMCUgtdyVGFmFzoLx26UbqxD6Pb8pPeJvj1m"
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
