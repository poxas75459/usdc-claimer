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
    "h33J22pahhfs3awq5NTQ8bGviJys8gUvmKNzfXi5LAtwDt3Y9YcybCL5ZretC447rPLpH7Rp1tf9kS3pt9FWAPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b8YtP7scWLNvK2CiHNvr6v544verbEGnysYE3ca1juXvezG8i9BCoFj9wCzraW5wKjr9ysMTzS7QbKUdimZxwif",
  "key1": "5tPHsLAoVPFiCTQ81euV3gYMvcioH9YhvjSTYixBFHuuDoqe7obAAcDYt27MAA15At4ruMDgWbRhXN7H64bGSh8w",
  "key2": "ZKK58bVV5YzoNUCFmg3fH5BHvKtvB78Ru6YWccayShwvwpDmWq5LrF7PRSFPmJrcfp855aZdChFQas1tBrGD69K",
  "key3": "5zuua469NCWzWGR6FX2CS4ejGh3XJ5HgCw4PxTUep3h7uJ6rvhPJJBj5D9d6nGv9t7rutqr4rs1giYC96XKNwZu4",
  "key4": "o7nBDcW9bqDE2QcajumiVraegduYxwAu5pRvF2Qn3TbJSfpGGBwtpEepXB2dLLzNsXKjVqochYwbbP9qhjn1FVY",
  "key5": "3AhfCSzt8LsCM5LsgZjtvcziJzYjWkHNYRGkAgktC6LLysK18eiWbs2rTd2NwDcgbBjMbqMbvkzHKiwSXBvGmPd6",
  "key6": "uZGY5VWx6tvrpQoQmhcsbqMTvePeatFH6KzscasiAZxwWcXqdAppTpqAGenjtXvWQN42XCquSBpQJgR6hYLPXKj",
  "key7": "32wusCZ3vY1XBWSMKZFq9e39iYET5RjiFaGNu1DdZxpGSqyUHnA4wC6Gm5oaif4CGiZvHNGH6YdxE1fUs8VaCpcE",
  "key8": "32JV15zpFzJi2WLxuTwJYH3Tp1fZu8FGUZ8rwjYzsFKWBstqmAf5WKDKfKyehAzxHD34AZkvXuixw9734Ye2xZEc",
  "key9": "5366EVk9BPdGzK7qLh6yTV8dA6ETzEnQE9mG5CqSBbwDdn15vfjiNtRGvQ67cCxjcWCjfJGR44Jg2HAjXddDfVEC",
  "key10": "4xcJHFTSgUtviqtpNvv7DSXmSkuBagq9ptLo1Zpp5BemiVgBo74EaCTNPegqPxUZV7UcaSsh7h5X75NB9ij4LirZ",
  "key11": "5myj38stbRhTUQ7vW1aynMVENLqobrg2gkZ24i2ibC4pGNRenRZgJQ2NM6uVrkFMLT1PrFKpn2WvSZQ927rjRtyx",
  "key12": "63Tj9vCGPr88BQUEe1XZQN5r4iPscSevq1GVPDX3PLDc6MwZLK2FTR2y99eiEUH9U2pRTJiyhRGB1Ai87wGDoQwn",
  "key13": "3L8kLhMqV9PTkbdNwd8r5tKyA8J2S6c1Tsxr5R8Jdkgmy4K586Lqyqek7xWqyGsGc3g5L6JRxZh5J3qDGZEUwbDk",
  "key14": "29GtCoXms68XWEKS5u6oToz1aZMtKJSStA7qEVUYzfRvFs5ZJeeomGXQBYh8UgTCopympkPqvfvB5tQYvadtHRwk",
  "key15": "3SHfr3de21XWekAoGH2D4MH2zp4zT3PWWdRDnq3VEfAFtVbcVvCff11ahdeVyjsgXxVgRXKUbA2DMchF1Jc6q17h",
  "key16": "LeZqgsmhSGEM5yNenSjDjM2VxL1AbSjHPycRrMnsAx9iWHjBJUxPkFVduUz21Mao7e5FKzNJUpJQDJuMspMzgSG",
  "key17": "26UoxNsnFjg6bRQVPHtZ8WXapXUCinexFbK8usAATJog6XKvdcLSEYUTzwsa5MGaf1jh5fazb4VoxjWxAvKjFqeC",
  "key18": "37czQ3wgeW2hWzpDHEmNRDwUKiqXDfFQsGNXqyv8HqaVZtvFFei2pry2EbmKCfLFczfB158oFPQ8uKsQovJ3P9yc",
  "key19": "4Pzo81Wj6wsHkj3tN5mwQZfvRoVsDeVFLboxuzyRaXijUE6rMRU1WWsBnSPP5TsSfgFV2egwYNQAkX38yHWUfPbw",
  "key20": "4x2r274UvW6gJYgiQqeA6XHPDsGLDHNa14ZtNMZVMTi1rsrBYR8a8YTejJZB2Jh4pcPNfxoBPpwp4YDTbZ6cU2Py",
  "key21": "4FeYZQyrSgQUCFchnuJJs4HZi52u6WJyrqaWzcvVKPCkJPiFPr4TEvEcPWe3Co3uLUPbxnrhubeNeya1VsyfzKv2",
  "key22": "46rPXAqTqnz32hNgUuoZSDDLHUgkfDEvEQh5ywj7JcoTy7B7i8Qzg4RoboKx1sWxK5S5iQUnAtTGksXc8yEkdXRt",
  "key23": "3ia3ZQ3ovpJjyCBX6C8C6mkE5ZK6huSD6u8NeorssLneir2bdSFHoh4aheTsYhGLbNcdBeMr2Q9AVNZKXvTgpich",
  "key24": "4eMueiKD1RLc5w871ft3zf5SGwaD7PZqB6jucE6fRXTBXTE84yHdvXsroe9kE9vpaRTeDR1WeNwGd5PXphxHnkQX",
  "key25": "38td9QtAyqG45gWURgSuRdgQp9uVRVxceqWE9YsVKuJNS13TrcBbQ75BXDk2dX8q7wHeykmvGUQqAa1Me9ssuxCd",
  "key26": "2o3nbjZfkE4LYe5Y4C4qFtao3qmJF3EDPTbsh7Ur8CjnTZUXZfjWY67VdNAbwzkhKp7TWkSwVnQVwRXaqGDxcivF",
  "key27": "CW2FaiUzYRfnDQko2LuoaedKKHAaTmBHqn1KCj97En1VP69KvYGvv3bRpxBSkc6hTBiYCnNS1SJLWh99XZTYkpj",
  "key28": "5hYAWQ6b14owZ3Anm7xJaZGa3yRoExCfufhM9V3hBYcAaiiS1Vr6afkTQVSfKkhr7cH5kNPP13srjoCgpHeY9znp",
  "key29": "4L9PwBWu94dWRu1FsfuHLH4crV1f9MuiuP3C5VrHnSqfBLyiUn5bZKWWwMvuHxsJoLSUmZUwCfe8xaqE2Tb4jcra",
  "key30": "3Yhod76S7SMGeRa3YaYycywt3Fwfvm7TAG2kKQvmRgFjDjG2JsPUg5orSpETpfaRiH6HMhb2hfmvMJpwDgYh5LaF",
  "key31": "4zUNp76gxqw9T4JTQpHfyy4CiVtgN5RtWHNWrS6N99BrnH1AFfCJCNM1q2u2y2gZa41fzCuDEVzgtkJDtBdbPpnR",
  "key32": "WxoVzTmCTraf3Bdi5AF9pbe1FXWzG8FEe36eiEUPRvyqN1ExxpqPUgjTULSbZ8NKcXgFQo7kSsQh7FBxKEgeHAr",
  "key33": "32HSkDZXoDaUXS9P4G2Rrsr5TXmCZUCCnTu3H5JWwh5BoYfJTmWJ4q4mW5W3KMfeZpoHEMTMS9hm8PJBN4wc2tnC",
  "key34": "2voDKGaAMnZYgtyk4FQFsMgD346wAYLWUFTw5wbSd4c7PquEGuYRU1Czrd6hMYFxagkbZPGGZ4ngQUmVHfRbhChY",
  "key35": "4P4y3Guj3mvwG1bbVBfDFxYGVKYj2HHnJqTtqdLBZmZyFcpgHEeunBrFjYsQqtemi3bm5px9UgFeDPMSm9CspJD7",
  "key36": "3Z8AP8q5cAZwduvWEmQ9Wh26T7ZLiBtEttfRUyqHkAPmMLXtXav4y7NV1NXZ5UcdvNCTJyE5eQVVjy5mt3eJegKo",
  "key37": "2wWfdVU63NoNYENJXZ26QymSTYrMZs5FgwW2Fk9G5YqCFDPQ4ibMktGPL3iN5SchxgPRCxhgzSzgbaujM2iy1zPf",
  "key38": "9jyimW63DDBHubUw2jPfcbDroyQo8r3iFZXxbuPHeLuVFF189tzbUbVBW5x7dM3RMeiQ9voHjxGtGTjgoYhtLTk",
  "key39": "2bz5vy4DP72uu1bGFQMXgKTvpfEbxRzwYAa5egLjWSUTvcMGwUDSRjXvfcTdya8CXVrPNdsmffM8c7fXgFnGb6ea",
  "key40": "3QWNwH1Ev3FFRC5XDxFx44BuQ3R7y1FUxpeenLh5KiXpg7k1AcZtTKCR7RAHy8kibn6NV5FRzWEVBgwLTMfFpdYu",
  "key41": "iRRabVtgpN4m1WHKCma2zMoBZuF4hrG1Loh9Hghq2Q7SE8duyVZEsNZNAd9W66AAdKhEdohd1dqJYq72QKNvj6s",
  "key42": "4u8nQ3ng6G9JV63FJJbvbsoynh9WGT337tXTEpqfxPtg9Whw1CgpqTTag2cSgRwdafC6eL5t4Fa2yJGRPU6o2uT",
  "key43": "62jnDhXSGh9RjwJ4bmtWwuUhXE3NNgDv6589hcqyiKsswf8mhD6na3SiKY8YzFBhHZt4PJ9v7xHewWzBp1hXxSxF",
  "key44": "4VhPjKo41yRcpk7mXSuUGJwac8nHiURXrcBxVyF7vhFEzPbQjeC486BCrHcwvCGTVY7wbhMmPt4h3KdqS6rzYzs"
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
