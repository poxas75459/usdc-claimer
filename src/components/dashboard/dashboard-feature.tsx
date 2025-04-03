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
    "3DpLmo3jgDePqH4u3LeAnZMLhT9R8ZJDAbNVMHBCoCe2Acr1eTWaezb3R3aPuSUaBemXFeaRySsrPJYNGtQ2MNyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBku9Y2fd7eZRiRda7gkzHoxChL3FpgVmX2kUh6w2yT3rbRR181FVo6NA6hwSer8m9rY1y3KDLwJu8bLhwq2PWD",
  "key1": "3bApVPTwhNgfL5eGtY2HLKgLRyqqAZTrX89xbhL2TSVg1fu1WURVm4r2Gn9Xzfntfx6pVmC6ZfxF1UuLJfkEWBKR",
  "key2": "3VXYadaXbeRs344Ee3Lcfj5q5bxxZHjpYYKH9kA37ajpuXx7dYvRjXcyvDifkK4BKHcimrHTuSYNa9xzcRwFqTiK",
  "key3": "3ZajfBXiMtwzqJ2NMXsmZcDfqHV8gXTQdAcymBZyh9AXraNuFGYYnqzQjLxcYXucpy4NQKkQzo6v5ch9BgvVuVmT",
  "key4": "41aCmyeidJXXFvvt71QsXQHE61LBZRNKRwqmuq1vM5qx8h12xU1wsFU6xWTahpL9Pq6pTD5bVqnaJ3dUPzHwaLaW",
  "key5": "4EfCandV4sCHTHS7A6ZvuFKbihFefeyq7gvyA42rLgshxruTgsEvtrKvsKuu6DoPpWyKrxr2UZoWjmyLGGA131gD",
  "key6": "GH75m2khXFZ2kXp3S2NcpKEAqvJiJd8dG1BN31koVVnp9JLuu5QSD9dwJ9dZNgfvDWhsEDhRVMVPPTyNZ5ZHxAC",
  "key7": "62NtPfFsoh8VQzSdvWHz54Jhja7zjBai3MEYfPjd2gizay2LPoxM8UG1YiU4rVAD4Q84xZ42SKrThDtCdg7XteZU",
  "key8": "253wwG8iedqFosSVapBDP8eiQFw44rTb27xQsSHDmhz7Esod8gaozQEENQTXqP4sY5qwsVYcvXoWMNQvSQzZJBgy",
  "key9": "2JuAEYneeUwQVLNoxFYBHHVSetKPpxmUTYXZeSnt1wVh3F1MwPBMoWCTfNyZ4mFirvFhpkud2Uxth6D2sw7bMZ2N",
  "key10": "3jvvgiyS79CB1dRWgmFtX83B3FghchNMwCWz9HA2qav5ZHbpfaJwAW8ywqAmqyNmQre5z5zaR4PLUMFgUyk3jMtp",
  "key11": "51N9aWAhqRPqqiygEHbch3kLJ3dLbaTibXo3phHZp3k2cyDHDhrmvPoJijpJ5g4imvYJQhjdr9iUWqrLozgeFRG8",
  "key12": "35jDTuuhsnABdeN16aFCsbLVuwNaBvEaJzCnTb38uSoybDmRMTKrAyQ5wDQHn4coJCSdUCGjez1zXC1jFXnBSa5i",
  "key13": "vzTnXDyGTmnhgXnRChTePJ5NRw4grettxneM5h656eMvrQBUh6ZgSqKBXfEzBzSqjf3DCoEaqKCZGUaPpntZFtz",
  "key14": "3Uq76DgVB31y8xGj8PtojnmdHA6SwNcAcVzG5BqW2xbcZPn6GPu4N8rNDeiYvsVU6e3okAdTeoVNpV3jxcFYviGm",
  "key15": "4fHcHYt6XTvrPHP84C6ihjtiYm1QfmqnjAi8y4mfbBzMMtWJeEeYh7hhfJtAiApEivEAE3G7frZKZsEegheaMjAh",
  "key16": "2qUaMoJqYv2N6MuUSLdDu15DDar1YWoZCufjoeuuK2vivnnZ4YXt25y2GwAnhwYyCc9mjBQMpvjgLkg44aezfUYt",
  "key17": "5oCHchn4t81bqbzaW1KdjcXGKzewp2yHfXxLfuVU1PK85pJUn4jt9oTTUtfUE5aQ4tDjfscKV7q9zTSVb5w5BFon",
  "key18": "5XaeunGw4ZxLeyd8DTsh2GGsdrTfGEHrkxoPwqMxMQLBo7Y1X11tWeVgxN372CHnfgGCghbf4xGQiKtdM3eRvxiG",
  "key19": "NWquBT9gG9Gr2cVtonf8Cv1TjuL9dtLjFpvdGoNHpfvG5QUbzDENPGJyJMwGKqkUFNpbSwrdxsoBvfubuWwydGm",
  "key20": "5MX3PZCn1Mtzn5i1dJqMRboy2vmFfzMBq2WjZEePDddMzfBhkAykU9JhvkNL3CjyXNGRGpAmhGtxc6iEsezPeEKs",
  "key21": "HZynW7YM9zn2BDkeJ7Wfdm5KGwvRDzmDXXWqpHRPFzjPoTfn7nB5qZV24jP9yEmV64BqBJEhqKKh1jFyX6K4LbV",
  "key22": "2NNLajpSHTEHB2ZzWsqCZHB8fKy1fPTKyYX2bfNp69WwSd2nWcLNb4j6KUz8gjh8zNhm3ksvKifDLrt1xHAafrSa",
  "key23": "JGXEm7fGZwtoJiUvEJobqUXbTxj719o7VFiSDMCAqiGsfq3YuxR8p1hUxPbMyF82oThNAR9cPiLCUZ74a56Eahv",
  "key24": "WBqkBvHbyMWpNKnHYtv7DexNUkoZg9Qqa5UgnfENPsnsBzzvuwvFrUX9x1LdXPZ2F1AtTuuWby2Q7NeTui2kghP",
  "key25": "5MwHuxjVFqb42DzJQMFwFEUeLxz3rjkp8YHYBVQitS7wiFBABfQBUZBKxanw5fhnjhPnS6oq6Q4yaG8rvdYMKftX",
  "key26": "4hKJiUD3q5b5bhjG3zrDwHEUAqQqRunzUKmk9Q8pCx56BuRAmAwE5DtP5psra24FQ8rC53q7LNoKGxCTP9sBDsQQ",
  "key27": "4yJXzZxgmnX1on7bXzsnjMdfam7eryTinmwcUdsgjCeKsT6cDXDiTCCGmLvZp5NVPVSTQxf2zruD1Y3TqWAwbtJY",
  "key28": "3DTbePFY5QVsgXfzzQjro5Zp7RcgEmSsRDtgokvo1NZ5CpBb8HKtsJsPup1WJ75GUMn3c1fe3pvzBRHRwiUjBHL4",
  "key29": "4DJXrPoPNpxHWLUYenJqw4vCAtUNkeg9GSYc8vXazFVRi65MpkGuEzUMzv4UaM2eYhpJ3Ekw913qvsFByayWkRLf",
  "key30": "59YyuuDxQhBqduLoxSe9F2Hvj5KdT1r9SKJBXaa8d7H4ybcaQQztKH6Pn4GyDqBhQ7QgmMpHxbPtjyMR9n3Kh6Ke",
  "key31": "2rniskphGmNJ3M8GR7d3kFZ4Pfyi6qeJtCZqu5jVxjigFn8wdtmJ2btTmzGe5mPJJ8fs3gRRzKnh2d2kkxwqPmNq",
  "key32": "9A1dyv4RnFw4zG79Fs4zKqv9MLnzuGRt2yXT5mYdxsDGpqZrUjsJ9KgjzDF6bgi5WnWC7ty1k2b4R4EVyaosFJn",
  "key33": "31AWqspnjizWZVbTx53xU73Ueb8Aktc8jAUAE9KPS2LVxCDEkPuv1fADR4kzuFXcqU8vQKAbkdGT5pJHQ3eB6BDX"
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
