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
    "4KeWQNBiEakrjKwQBjGPRVScawo9wVhXzjRCCiKNfv81CCyRp68n68zpPYYdD2AcZJh2UAzDm4coh2sZ8R3KCD9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ULgeBUXCDniPgqTYty7ERpR72tbMbSvSxW6hG8RZTBxSLJynwVQhPkb4MYqWRus5KuNLU9Lw8h3UCeui84ZnQgf",
  "key1": "438CbRS2C4LzgQGL76VQbuPKTjgH2uEhFPeY5AGVinbYwvBz9FeM1LNAj9JTk6Mze36eLXdJimFB3wwBS2kqasdt",
  "key2": "5RVPMxF5QVDQKQQ4wZvfx5eJjuEVYSXgX3KKdQWAxbyqqHwAkYbAYUMxGnfF9zg2wtvQuzWVfu2xevXCKY7338UZ",
  "key3": "56qSQ95R5M3aTW4PvZSbtr3cuJDSxLnAGhhr4TnYS7hLdH4sjUq8umgDdkVq4xdot9CzxwFMKtFX8EiwNMw85DoP",
  "key4": "4U1DTLQv1AEvQYu8xQbFpoKvCGpCYZDqiMgM59GdjtnCL3dcQ74SWV9gPpWcRpFRrZXMrn9y2WkudjaJ5mQwFoY4",
  "key5": "473YjWcDgY6RWBupta1NsQStfLU6i472Fgfy9axrPhbcgMwcfQQZfFUyLZKRr2f4Msh1ysEjN4gHK9MjtKh48UZp",
  "key6": "5d2QCSBhQvzBmgtGVLtuaq18EsFvwPY1NtiZAR9bAefomoHbeQBLXCPrGoZhME817f9eDbhxKzzhXZbsJEVVQnvQ",
  "key7": "5UERpym8fHqFhcVC8Wqjd8yVzps794Dz3c8dokYyqfo7UBp6qJVPxdR9Fw2PYhReszWckTL5EoxAXZCAwmwfjeyC",
  "key8": "2ekTwEhdvAbUxYkSFh2NB38F9ugkKtZQbpop2cvanFu3CpikySzzh9sW2ciwcPGQSmBTcqtzLDdaka2DCf74yMKF",
  "key9": "5qPaBC2LwnChWGFnJecAJPbxm1aquJxWs4U6UZQwXDwr2A98Mif15X8HJyDE2SzoP8CoGuze2hzwCvdy8fz6vzjc",
  "key10": "2Y6HwS2WWiBFoANxxdSTaMQemsgQcYFfMe2cUY8tzocJGh4CcjPaUVAkP8aTci23axzrDKw1ss1zMB5u145cxwEY",
  "key11": "sUEmGFzKWK8TrooDpwtpFxzMQGuUnJugEobMNyyu1Pa66VfjVACaBR1F7t4xipt35dmHfA8GyvSq7xmLiPS9JLW",
  "key12": "5fxLxfEpKdTTHdJyFF3whMjEqgMhbJBb3XozWye4f5TNHSV9FHkweHkrx8mw7HtpNd7yk6YC5gu2YrpRJVZr3TqH",
  "key13": "2gKag6vrb8ehp5itJc9nPqytn4ZeG1Q7anm25J66mFTRGz6qETRL1p65EFoHGDR5zNLkBYicgmdfFXN1BFQox16n",
  "key14": "2LwqUmbKzv7fsnZZwSHg6asEpEj5WFj5ukGguV7zttn6H2hHyrSfGZDdnFz5bAuVospGjef3rU4cHAJALriRmspt",
  "key15": "5p8q6iBGK4W4ZUuBixzdLi3KLRksNtCB88zjrxi6iKRx8KmjRKNxWW32hmUTo4JDtfRox4DgEbWaqMkDNeLWYdk2",
  "key16": "5M2aSAnuMbttQD41xB1mWKoUrMtDZKuFzf8XcVyqu3dMEEpo4B6unBJN99dYACh3rjxmdvjsTqsMWt4LExY76Pus",
  "key17": "4Eg8eW7yaBu9DE6TFB9poFc7YFZEBpWiH6fiWosthZjFwDrZLhVRmhp6ecohfGnDFBLH52Dr3c6UsTYs3vW7N8zD",
  "key18": "3dKN745jyeK9p74Pjn3Y6UigXU2zyFBfh3ksTzH2ra7naR3oWFc7wtoqFirTvkg1JZC4AA5V1UwQCUYSpKLEULXA",
  "key19": "3YRLR1vxixsBcbaDCTmWaawckcvxhANocrChusj7swgqiTosoEiDyrut19xV8jxqc5opX1sPfMAYpFgRwZKQeLAE",
  "key20": "2M5jQoxZ5fo6iNxsuUdJkVtw4wzTABqVY6u2zAJX3vTDiJtt6Rk2Sc6h9rMcsh69rpfDTuRGWNwL93wKUMGjrPy",
  "key21": "3wz96Cijxq1c3Qm4JwFsSoyDXKmY9DjESzh8QF4U9ZteG3YCLY1TAt8ndjcMKonNb9Kx3xkGDe3jad8qt91CGFNc",
  "key22": "3QA399TYSFdZ5h5PSH81iR8aQJsTtH8KZ3UezxpqKFbP92XnLnWEWj83YwN6qvhT1DFH6KeBEGcTRzNH795wb8P",
  "key23": "2JtoqBqVZz3dB6G6zGoajk8CuAykYnyzPpRUtRUEtUHStZYpRUSeHzWPSuA8knMnXcubcR11dUNg8vJ2KFJoJDqw",
  "key24": "5JuBVKPQ2JJpE9WoMFfBXyU2e87qUDK7MqwSEB8tdsS47YNwgDqTDe8Uq9pft9tgzfiqy9Ec4KKSy16UWjVKMjQr",
  "key25": "wnTfh8GSMHMDEMj5wuFyUaj6Jyt32FBRRJjob9cxt5oQDbG15LivbsdsD4R1G3bmDDTPjCGbFxF9v8NS7qupXWK",
  "key26": "61bPBG13hFZWAtiGFwVdfyaRRne6xQp2ZYRuZMNkcuA6RDzfRnDqZJMomBeB69YMFk91NZ7rwt4v4pTws6qnAJ2M",
  "key27": "3RL443M5PqBxsYoyAg4tkJ8YmtKTVFShrE5q6o7bU56noJszm67WSC6E4ApJhoBwEFApGjzouY6TUyXoqwbZ3D1a",
  "key28": "5Zt3J3opQisYiNw94sMab3b3UnevhuvXAeQozxgZq2sDaMpKqZoV63Top9jrfaW89H1mEBZ6kETE3gt1rBLjjcSe",
  "key29": "5SaoQv4LigknwDgxALTbrH8gUxcEN3J3G6hFrEUVDTkefyVM6xSuiaSj8xpq4dA67o5PVcab2QByz4vebKDDYYVW",
  "key30": "65bcrNXv1r6pMwLvsRTY26EV4b3cVMtXkbY1HtqAPoSCMjRu7VCaCUh73MNwyQoRupMjyiAmhUVru31CAd5MEdKY",
  "key31": "3i7k4SfKrzPCKFra7CFFQJMQFxnunsXGDKRCnxb3FoUULe18tcUVv2hjwb1QegR5yzx2aoiU2oCwxto9TTWPY2si",
  "key32": "5yc2HMSuNcRADch5yUDu82ryKcCnUG6PdTb4mP7vGvmV1BpmST9apQkn6m2pEZ99KN2uYsq5SnK6SkiX5kr9Ue44",
  "key33": "5XagMcxA2YqanSevMQLJVummLwhYmBLsLUrRo4PNHQk9Pyh21o4XTtqdm13z6TCV2cYZg4zuaCK1kEgFormWELVV",
  "key34": "5mh2szuicz9hXrQqjUV1imRLs61xf7GfLa7SuuGiTXzQXZDVqVzKfhBCUSP2hEKGfLcTUJkH1eZe4zxnguBJUKdL",
  "key35": "5yQMxtxsMC2ToYp2wB9qia1rBHqA6pfv5KUwmPssoHNpFkt28VkEg8mEH6Yd2tjPaPMf9dBvdye6kFZNYC66gkLt",
  "key36": "5RYBTFDE9pRpgCokqnF6Gi7HXtcHjBWUFYx67G2mWe5BZgcaHTE3dge5ngDondcPE3s5XDWw6WheKsw656g2zGAQ"
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
