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
    "QBUgTEL2Xkt7gGNttSVNDSD8TpH7oEcEQeudkQvTfzMnAYMScNLR1KDxYw8duVTLY6P217QHxWzCXwxgZNNj6uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YenYqzySRjziJDcY1Y2nfwYkmaEwLX4prSxMmNLE5yfrLSLhJUZkY1dwB3xa8gKcDssn93Nb8cfRN7P3JnHxtoL",
  "key1": "4MUsFsXbTTibfu1ZBzcXtD2q1MmxVW2hkKmsRCgWZNgBHS3ThC8MYZskcfBVKaa5QVYHq9rdbTieK7jeo9bEHYyC",
  "key2": "3qEAeCZQSeyHJda4rUjy3V2guxUUYsZTDtMGsPNvcvuH44TUYqDGYfPDLJpDhctLasNw65Kmm9wNTpAZ1MhsMAkX",
  "key3": "2jY9meq85GweDp3vnkKxwP8PWJHYVdnzyzACT86G4BFvDtvSjXUVGBNdCnJCVyHu7QpoA9yCezE4bg5S8Nh7kMNN",
  "key4": "3Bg3QDSag3PhUiLBpdmQcZQwKRmJG1WfxV4igQK3jC2NmGCWXbtjnzKVB5FVKwbHyy1DKa22igAD1uWjdANRYhSv",
  "key5": "erYwE9rbJph9X4aCAt1BYfLqJ41vF1xACsFcGzjXXNL8Hkoc7sWenRogNSTsQgMqaPxbNiGV7WSprcAnay7MjTu",
  "key6": "4HnGYVDvChstGQKoF8xxxW2V9FuJtHNs3aazD6hZtGSNYA15eg7sMLDcd9sRfLZWk4qGR9emFbX2mWQ74JVRUbG7",
  "key7": "2KhQhwUtxZXmKaGEPonfFKEzxa8sp6v9z2RRkrXqWAxJQRMHAc42D5FBWXRUnaxu6zsiQXoxTg6Eq47xAK5ivu4c",
  "key8": "2iJGEyVudjWEPAXjXpdAHyF4ZMyHHc5i6PuBca8Cx9HyjExwjXgUfXNPtmiAhNj622y7wke8ydusMH1rAgqeHHNM",
  "key9": "2YUf2QQZoARgQx5vwZDwfYG1DEd6YaDwLYZG8G7jwPHEsHABhJJHbSkcdMNx5bKeAf747aBBKf8k9NWbbnX32Kxr",
  "key10": "5Gm3682TBL5zQvmbR8xJ53rErkamKubktokNvG7FWF5VCEUWxPkGJ2TZpNXC3MwFQp7t5tDdoD3v7WPyXz5N4m6h",
  "key11": "3aXCsA5JTjvUG7mGGZThUiSjCCUzb9GZhpWmBPM4cvzDnH1GxSB1CGYZ9d8C2xhNSM8WwTuoofnBFVDZ3V6q5qC5",
  "key12": "3JFxuvHiv5VSTCmkybiVEqZEt21P1P1bPJpw2gVMwAZsgzDMJDCfmcR83ZYAqdv345C4XothP8yhva9duEi7tczA",
  "key13": "5Rxaez2PThnPRMpJweAotviXGnLW8hkprrryzthDnxnZzRjq3dwan6xSBjyDhYwnaF4aATTrDKgwp7zoqbRuFBK3",
  "key14": "5SAbmZsUFBL4BRzZLX4XF3KMvjH7YuLhqv4xi6sZPuD4fgdHUtfq58oCRH8zypUr7iWEkXMwgnA1XewCs2JjZRpV",
  "key15": "5MVv3ygW5SmAw4A2qQo34DQ9Yu2rWC2ogzcLofxPks34mvSLFmKc9Fkr7r8KAp2jwQkQhzmDGYzCiopTM6ZuMHoE",
  "key16": "4CgesvjczYefrPvRBRVBCk2TMsmM6dNLJsRdVNQCCu4bbVBy1zqq3muj2WvPZYUMtXMgZr5Knwt4MrLcao7fPRfN",
  "key17": "2aMXfUygBsKErL5jYGMVJ7NAmurBMdo9JSt2Ptea7TmgmxQosXFmpQHYUWw9PjYBnxPSXF6L5sDyzR652c1obNRG",
  "key18": "664J1y2eiPqDFUHHU4B31nZrbtNPvY9eWYKg3xMxcQH2QR8T2JkaW8YksNBQZgVatsS4Ub3QujnSRxE7XJ6tjkF4",
  "key19": "29a8nLSCwmgG1DutYgAUuY2nWkToMXXrA4wGe4pDPUYxciCPNekZUpoYwj1nAU99QnBW7AYG4yJcpLEHr2a3YmXw",
  "key20": "4EXHu5AnagXB3X2FMeJhfTY8i7SvxVCaTdWGzMVD4QkeQNJisy6pGt6z8Gq8K6wBVUBgLrFi4iiCBBE1R8Mv9p7T",
  "key21": "3C8YRcDCt48peDczNRnfHNXuP8VZuEKGu7bHHyUC4jFzp3DVuYBdpct9jenYjU1SDrQc2b5XBLUoVb6eo18uDRD5",
  "key22": "4cKDmZUUyQaA1civCuH9AeV7v8w9JPyddh5VMFYJNcBv8zXBoutr7rSTuApwnfckvMpgaiHpAeVcfwHGxJv83oqF",
  "key23": "2buSbjMTqzbMKCNbUM7dxSCDdYpcwxrG3P4HeD8N6tqyxbEV6rJteTMQcx7WJPzLrLcmPxUCe5k8cDDriHrwVuEV",
  "key24": "3y5YV8yB4j1CvK9ED1aeGMQ4zKDz3UJFpicPdSB6bkgh1pUvozxYK3P61tQiHEgtWQhoN6xHqEGzWX96Ay3nJQY9",
  "key25": "5dr9SkVDANt1hdo4CxMPzRBpQ9Tcxa1dphyMBc4GhfHuxg8jBD41kLHWaRvjEh4ML3ZqQYvhqmF1b5SLfFsX3kMA",
  "key26": "gpUuQXfKHMsSuja3DBKR1LqRcx3Vy2j1qPPDpm6BZKUWERYM9hVDGRmX5TevUWohmxKFjU87usMZad8JV74FcTp",
  "key27": "3BjEUmwtioe5NLRPPE57yKA7iizop6R8PzD2pUorYBB4czy5FGoHNvg17PPHSxRirk5CnaSBEAFnH3udzQ2QBHZC",
  "key28": "4ELuxqfTSCc1evL96hBNLcsgD5majTEKjTrTmP8CN6bXZfmSr9SDZKivwLfXhD971TtQHVw6k3qYAW6zbywy2D56",
  "key29": "2Tm15rSctt9w8VjtqrwpMeAdWQGF1KMPGmuD2YUStE4sZnHZaYgAmUp6aPDLnjWPfFgm1m7L4ZFTRTKL1aYmLJJ8",
  "key30": "5ZrEajocGu4oPnxiXdefGErQ72zt8rBsrfVHWwyksTv8DwxcKik6CQAHMkjjxXFuMPBXUsPyAZicdESevcPsZERQ",
  "key31": "4U4iwCgE111ZeHU9ADZSefqKsjN9k6SgVJmYyKXf7TUzSFMEmM9FjGd3g4eeWBprvGudLt1iDW78BHpt3hSwZcx5",
  "key32": "3wfTj7Aq8Xupm5gXwC3pVj1xP4DdBxpSMYc99nqkDvqHHh9fJUccspjMgtQ7fvMruvexuaqhs1b9NjuokwiEHAYg",
  "key33": "4pRUhnAP4HrDqXvWT8bE6iBfUFErUhcnHpQSHD5tq7bwFjKsmeyDUvW8NJq3fAaxVxGgMMduUhrY8neoP8Fea9qt",
  "key34": "5TwDFXSrY7PFrurAYRWaCZoqHGYrXAGJsLhNwv62EVrvmE4rEdaqfhVRKp73YuDkCdN2RwSxHSdKFbEk25M5Efqv",
  "key35": "24EHKYdLGT8ejokoawi8BKNMzsEKsFPWad4LxBW2mmWUSRiCxtJvBtksYVTjmWSUG8VysBBw3oQKQ7okgNXxmBNd",
  "key36": "vYyWoXtiL6w4UWgDFguT6benryLGtRrkdkqh6C98NUvqvZxG9es7RM394ng3aSmzsiboyiZJNx9b3avS27gzutt"
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
