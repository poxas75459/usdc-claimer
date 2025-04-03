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
    "2ZFDJvtKVC4doX94XKToGFWNTajxb4U7tum41gaG1vH6pXtG2UmeY8XbrYSzqzckEDBat2w1Y8aN6ftKwgMKm6Qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DFKmUNiA1UPcbjD48sw9kHMqG7V27VdxEVxmb7VZBwS5bTYwusQ5fRFMSmcnELWkyNbA2gBZwYLw9G317Ab9z3",
  "key1": "58hvHtbKjFGDLW7456zZNYDrdWagcpDoaLnxTUxgoXr3S1S4YaCcB1d8zU5emSa32u1YjRPhXyeLnZgUavveScN2",
  "key2": "3x1UrdmZrKDU84ZRGswpeVtsB3iTpXQGYCPux6mx7qkjKAmYoXUAzoeq9N2UXvYeSMueLXSic72YNrEeL9V3eH92",
  "key3": "3y1knknXxodNmXEyKToyT42S4jKY5xVRhhcJiYQm22vpEwcUPCRzUknVUpPFVa5daMtGb17BvCKzSJhrb2nr7mpY",
  "key4": "4hjnduMfsBa7CwbQarRSQMrdhA7VspoWFuUFJxctREjpTPzbMoFKq8BAWarPxCCdA8m5bAPAJArxPDAxuzkS6qAk",
  "key5": "5twQsEBsaQNVfQF4FDFAXig8jppWUXAhtujNZBLGseXtE57NxWLqma3vgvAQA7q9aAL5kWxt28MXaVvSq1HynYXB",
  "key6": "2ZUnKy7BxeueaT5tSWWnADeTPoDPm6EJEhtSzyNzBK48NmqX32LHYqw9XZxbJ1DbFLcSsVMrTG17z29hkE4VTsVt",
  "key7": "7sKgkt3bEdudxXJeCXtFmGFgSgKQd99bFTZFrk931yBqdgFvimxW9u2VXux2JUvdDeUZEAMZQgqvbxTagDT23mZ",
  "key8": "LFB8i7VxUxs1qUo6MT5DnWgWz1GT3UzREoBXrbcVDrXbADQF4dSJUXoX5Qm8aZfF2PU4LD1ZuaY2oQqiB4Kzkfo",
  "key9": "4Ppz52QaUNnMys4nQZYKJKf7ioERcojxzbq2pmsUr1K3n8dhRU4uSU4zDRGbKsUW9T7JUEXERSZK35NxonUwfmDX",
  "key10": "4VfMgLHipo9FUvQsR2zc17Moy2bSB6JN2gGvGokQNsRMyLe6gcNhuAjSc8qAbzEtyNifFmqLwKkSKJixp9DPrgtL",
  "key11": "mhWYjDpJ28aRn61WY5JQzEUvo7VitjnWvXEh6cnp9UvyVhu5qUff9ZeGtfYtvugSwKTbCy2d68s2A23o1WgzQUW",
  "key12": "ynpYdQqTc61Jfrei2NiLfem23PNSVJDsXbR8PFVKqpxCmSiY4mipE22Chze2zgTdxLZqmh1JU47NZMtk3THKdwP",
  "key13": "3UmgfbMET65XbRYdbrFAaoCWF5G7n7XyFhx3ir6HP5m8Fk2kBq5dSx3vmxkCaNWPuhjfuLwdrh48WoJzHrmRkHhY",
  "key14": "67nQxGksJVxF7M1uJwzv9KQ7iaJJt4foeR8y6f3mEmfjnPbxdLLnPTC9uY6PikiXZRCXSwBPTh45TZz1u1uc7mUr",
  "key15": "4X7AtZWxunwkLZr2sBpUPKxfoggTa2YhPT3GKpg7bMTyyUP6KGrURiG43Udk92nXAf9R4Wk9x5YK8PmJSskjveY",
  "key16": "4FupDWJRLbRo2qV1EuSzBnbaf1R96Gs4H37JFydD65WQjeG6JzA4yP81ftWxgxAZtVd1Eb7rGfM6y5skknBNaUFj",
  "key17": "5BMnRkYo7uPs2PriHBXqcvvYR9mypoFHUgbgdRVvWYwqNzsXAooMM7EhewsMGXLTqQ7tLVn47uPGPXMapqoe441f",
  "key18": "5dv1DNE8DctJXPMR3jSYmKkioDnqV3kLSXcVnwjKADw39NiayFpJgREH6vmVwXgnkHxxaeLXLaghgkR3MZbEKDWK",
  "key19": "3v2ZHC1gTnzHukPtsRbDzGdMbaw7zENGyh9JVae1EWfXhaP5ScR351w77fe35qkjBpJNFfAPCV1MoVVdQ7JpfnZN",
  "key20": "2Q7urKJ767L8ZoFBvLATHN824LPQ7Hf9SWj6iaEZyWS1LjPhDFgkxgkFWRSKTDDZ62Zknmys7K99TbUEDXX3q5Rf",
  "key21": "5kfpscFDMBodFfALtx5r7SECdKAaKsfJAYVSPveLZG5S2javMNk1UazhsyUqD5ktqzMRVtHKeFZes5tnTyYTJ5EZ",
  "key22": "27kJoeFSCw58jVCFKriLwp5VVHwKLpLzDEsKhvh5bbPMyMn3fkeaWCHeUhR9mv2i7mAZSQLVjRSE8kJXZdJBfRdW",
  "key23": "5Kpac6k7jxAUapTs67cnT1WAUcVQpKRCnHqRDcK7QXdo98Jsx9U9BiH1dwVwhaatSjqgAYNxFKRR73p3QsXftiDw",
  "key24": "3jfGHJHav3bTE4cqTNhMLPiYLVcZd7Thz4yLMA7FBNxZjrKk3rPWQwJkXBerb6yuo74cjsDn5qe4wg4ZQAgSqABQ",
  "key25": "2EEQL7uANDnkrYTWHqHD2hEWAXRatxRyGURaPqr6ruYSPTytabJ3tkNBbhRVgNi5ruRvXL7LdEKixpmxFLfB3Dzx",
  "key26": "3yCmgnannTHLELwUbeA84p4HxujEdXEnxCUC8qaaWe54uoufjbakbtDMRyHzrZzGE2bDFpxABZFpYTFHfi8HJWF3",
  "key27": "2wij78kt9dUb12RJMhaDr4pZmGz2TfizRpQivDn6cs63opJaqVjszB6GY25wVzBNhnurMghckyZz7Rmyq9tDexox",
  "key28": "2qcWLYtDMfY4f4iDBq8G1KE9JQABTQH3kWDnfqZsARQ4bk8euZbGnovECDBZBfp6fuWUtYxvZjDjHzWNdEWihyrL",
  "key29": "2AdP77DSVZ8xXY7t8BEAM8c1FgZXSFTZA7KE8XxEUZDNeHj7Gn85MoozM48Gr6S4AMyebavxmfY7ehygyWV3JQvi",
  "key30": "CFvwk7Um9ybUvePT8d2SGAM5BQFhDiJtRQmwmuQJuTK8XpmEqSiYKWWFSfkZezv3Cv98sDr99d5TDNJGwqxpeo8",
  "key31": "3ebuirFfB7svkYZXGmfH1SRqFFtUYnfjpJjeCGnopNtVvFwjZv2HVTY8pJrGpMiXLNRMartjkYy7U6DX9qwozWu5",
  "key32": "25MC4CgGReay2UGiju7Z1B957T9b9UN7NhKbKcYdQaZVxYD8swBjsS7FVJURdaNZAGrZurVHcFTsJwzgqAKzd7VM"
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
