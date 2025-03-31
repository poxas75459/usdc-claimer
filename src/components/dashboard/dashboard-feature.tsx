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
    "MvM6DRvcwawHhx3Xv6DDibQDAVSWNfezLH5XzQFv7XUNowAu6RPe4EhHkjTpzH84heYxJgd5g47fXaAGUzwqbRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vi4pn5e6rcPJbqU8X7JbqxW6YBNpihNoJ7v2zptFs9gpxKRTkcz8yb4WVKTzsqNJfNAwcrfh3S3mm8tWCrTaqKc",
  "key1": "4ip8ekMWa4beTqxLMbJarwf2dWhD18bwhzWguuvLYTBcEH7dtRDuEVM6Pcnt5FrpyRwhqny5VMWHdxCwYb2w4Gta",
  "key2": "HWV1JHTLhhF5SQruSWZDyFQ8qjRD6FPZ5QBEWCPtC29Ut8bXoL1fvPFjBtrxA6yAQkTaM92yAhDjXRRNMzMER3H",
  "key3": "3e2MgMGTuzpSDmo1HPjTgBmtVnxeoVx851DMvikfpBRr7f42jjgb4ZwyHCAnCQ81eykXZHgpfCQTjbBv8dUSBoAa",
  "key4": "2J4b6R1yCvHyQtB1Ti5tUYZDHDTu4N9WNZSphZXtnc1TUgsyTc1hETHMnU9NpR1v8h8zc63V5dh2EguRh42QJzeh",
  "key5": "dPhaesdMeRT1AZQF8opfEg7XJMRuiAc8Hq4MCTJ1rCQJ48zHERxJtMd97KAFcjziwEBf8Q3KZAThsEDtL3uLErv",
  "key6": "51zqW3AKbTBN4MU7ihF8WCbWKWSdMTBdH1jVirSFCkafA5Tzvj7rohpZuyE7BRcTcw4RHR7if6a85R5p7bq8rdpa",
  "key7": "2JSuzN2beuHWuo9eh2a2dxoQPbtRkusVTTzqXbYDs7vs2uRmEhk8CgtkViHaPUPGRuutnppsqNMVuHG3CFzi6SM7",
  "key8": "z3oD7pRTKJvYFFtiLcz9SEg3jzyJ5eEv5WBmPNMRCemwkVr8t8o3MWa6nh9EfpGZTbVxLpiNi4KLhiNKBadz5iq",
  "key9": "5UAPAzVaivSvQWmW3SEwgjEYpHLNxBSDRtDnrWtqSruEAKRT6vTTSu4pCT8BBWppu2rCBXmxgumNB27jrRHdiqXa",
  "key10": "5GEQ7T3LSH6QDRkGTC6wgtaskJZ2bvtxmwCBctCySuUbwU8cvzzMroF3423t5PsD3yeq3vEgw8TP8Gdhs3ZJYjxv",
  "key11": "3BEuQqJ1DFLiRWjQvAfU9osA1eqnQD7M54uuv51CkTvW6zjzQqH8YC3rMieBrw82piyjbXDZnGzb98a26QtqbuXe",
  "key12": "jDNnphTos8WaArT12Xj8CQY2WUP9i8md4EWUc6Be1wsCJNBaQSpegGdmbho45sMyrFX1NGhTCdxjScaPvTNFFbz",
  "key13": "2s1fLVV29NNQCyXPjYBXGoik6dx8CY378nCwjgkFq1wyLoitnEKWeYGAGbmBtfv8XGPtcRUM3WD8bE3kjFzoAkrm",
  "key14": "4WpJeeSRbxSeVRGPJy1jogagY5dL75c6d7r2KBFEBtV9M3K3Aj1VrW9uSiqoHxwje71XWSKRuikSHDqn3sWPAjLv",
  "key15": "229UjtZzahWuF8VtKeGMJu53xkKE8uGuPV1ah73VYezmoZVawTwPETnaDU5q2hqBqw1wYBQaWkqAy4UibStiiNF3",
  "key16": "2xWS2HAQgSF3vRUhrVFXaaiNcWysjsv4Utcdsbxfng7rjyCbSu4CZiYiRxGqw7z8P4iShW58eqfXR3ZUMa89T6t6",
  "key17": "t8JtDi6f3qstn5uQfUgnhFcTWLGGPy8mQyfoZRxMTTREKjAQhCUAsfMVfr1yCwctd3CAcjw8d37fNswHg2fmFbt",
  "key18": "2yNMMYxkG9eRpKnCgTSPfnGoSyWx22beeV4RdUQZTPADsihpMxN7wVNebVX3FhuxfWY6EqDetB4jSbcZfrZ67Bs8",
  "key19": "4qMUWCuRPBPrnMMc6Tn4HrhupgM8XgyA9Z6Hi9Vivw3GQ99AXrkeuS9SAdrR7pZLjb8jhEApAFc1bK8N3Bqj99Ce",
  "key20": "2vrkTNpehR5qHALkHeo4xEtWwFDbs2nA5PeEyoYCnum9WSzQa4tiUNmxe1BUnJVmaAdDXJ3hLtasCbP9NWD7veWz",
  "key21": "5YqE1jsw44a66PxN9DgKokaVZkwqRFuuxSYSDQUPnK55Fh77oFjpWZXMzJwuJrVSbvZe8sLS2ynorFXFhQPY8WW2",
  "key22": "4PKzK48sWnkBduAehD6rBSsgeGjRA32iBKsYHbVgrkf9RtJh3na2oYVfnoJoWc1idoKZKANM9nnLA88p1TNd3wip",
  "key23": "3Xi83aGHBPqhDrtsiXbjtu9DmRutAXZriJCVAmof2RobNMfUux1gtTEYFn3f1jY2QYSDLaW9PyQE5qSbPi1vWUMj",
  "key24": "36ThGVDEpjCHgrVHyPydA1pvCZAjyJYKWvu9H2K7e812aSBBZjmpqbDGNBV3UjhVcvFdk4eCND9sXxrZdPsQppYm",
  "key25": "38bWAkH9WTr39ueDf6PJKjVaYoV63bkmsq7NAn33xC42fuidNevcrFXfkKeWnfnxogUWPxemc5fDEhGWMrg8wwHj",
  "key26": "P5gyGAc3Cf5EQziMYcHA6khMSrbdSBqHgJj9YHShMt7CuLFPhiWPoqjiwGXLoZQ6pxE3PdS9Ck2sa3vX9po5od4",
  "key27": "548yYqnqtfU4kMVXhAaVL2tJzVtoJroTviRT72fSVQcKbvmaeaGP9Qi4S6pHDMsiAGkEDhrHDNKF6ZQebA3wprte",
  "key28": "jjxXKLPpRHuzD9iv5kgr2Wco7xCV8a3yf1ia9vpbxstUeogM8fdCoMRNcKakaRU1CMXUcszi3NwhPr2e4ptRncZ",
  "key29": "dqms7d3nMFtDRCEQCGVwKqRW5Vd5W5trphaqdSg9ECkmXi2VMofv3DG1wYPaTqrpTvszKvm6wQAUq3hdBhVUdYa",
  "key30": "57Mx6oZUn9ZaVfP2qEj6VQBubDkdgAwe51zuP1H8VGxd4bFxt3ZXLxsJqxxMosNean2cYY2czb4S6EkyWx51yX7S"
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
