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
    "4eBY2zZzeqgepD7ADiEeoogwN5zxuNhGcp8X3eT6TEVyBNwxorXrYNDD6XzCea46NDCDGBSb3aF8y25zWyDLjA5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DNsjJQvxsfLnh5Xh8tr1cFLmWERstZ1oMFDGcU5S2E8861YdjEaBNRXHR6nTP28hLXCSjSAY1dLiX14uGyB9qo",
  "key1": "4xtb3yR8Q4jBMtkqyvMuMXY1PVQCn7i69p9eAQ8DmcQhzwGvK8Z747mt9DXwotsNzM6HQ1iifMPkyWqXpG2GkC1E",
  "key2": "4AceiWEV6WsGGwCxXwrrT5dtnQpzYT2PGoaUtYVgxHyBECgUCpqo9nAjSbP61rVAutD4bwP7maXCiehfHYCe9Byb",
  "key3": "5WVvzSZwmybyiyVtH9B9WfLac3rFmJ588Tas8WujxbAstPcxXx6u1sSt3vwPVMPr9qDTX75rEVJWDPxHDRPiHHnc",
  "key4": "2qnZKMibtx4qtKsD1bbBgv4BUTy3xmmqutBNJCU71BsHZz3FvkFbG5YXzrYDqDH98zLy6B4z16uT1TLFjxubMWXk",
  "key5": "5xUow2iLu3KanccMu2i7RvNpmPUgk6ApNHm83pSbbmCyc3wrUYPm24GeGVMYJMNBps7fbb9SXJ7e5a464ZsXPjNy",
  "key6": "5FAW7nY2woXCZmeSmzkQNeYq9PT6HtKhM9zyERzfwDDL4w71SsTEaDmCT7K8YMtbCRuE1RrDcvkhH3fLKHuWfVxb",
  "key7": "2dBeyskjZWTm3TL5J3B3AHJBjEMEVYA5Hr2Hf1cu7tDxmw9tb6FSus8SB5rNRmMKx1iqBD4x5uKUr38eYENoUoZL",
  "key8": "5JwbAsepRVGkfWVz8Wcy7jYE9ReUZM5c6J14N9xaD8JJX6zCGtgaY9Li4qHGAoutiom8k5LBSHq9XBFnP8AZURtC",
  "key9": "3ismEBgcTkveax9u1MqUJGgQoW1t7ZMdMqkMeTawdWoA7tcZTTHwdpq4omyNF5PM8mwZeCh6rD8sc8Dp8GS4Ff5s",
  "key10": "3xAzqF4UuHHq9Uk7xyhvcWja3M5GTqqkf17eKoTpMJXzvjT9vq6oKshKVrT7PEdYv38jiEph2J29A5MgGoW3qXfp",
  "key11": "3RE6pgphBniKcoPmFUPbxDbzKWtnXNdEF8Gt1nYX7oiWVkTDQSnZbhp2BqBcUacG6QEoCAk4zFWAfY9SaRCRwhfb",
  "key12": "5hmgrLqQHZBqHTnR2UoyjkxyZ8McKBbfHYUGiinuHRNGWoH6ED9m28Zjw4j7BCfMYgeWcg1AkNMEMAJoL9s4m3qQ",
  "key13": "38Pw8MMnMUCr28gw4TJ4kfDuU9Y2Hx2proeEAZbm9cuejZVrsfEGMQBxKWUuQrGFeevK4aUgzozSwHFAcsqQBTC",
  "key14": "3nVB74F3bryigGaMJS7Taf7mV4zdXBYhRL2YT5bYy87t5M2gGyCRcF4x5keXBEx5UE2Wqiae8VNQ41zxdu3Rq2tR",
  "key15": "4muFmotGE3ApyzhdUxHBzDh3MqGXyFQu9YMViLxGNSLg4Y6a5gSk99KsHNEUcC88cuhaUDFyjHWpa1yKC4x9dDop",
  "key16": "2dkt4bcT2KAGpAXrhyoWQqzhndtjS1mMr8hfGNkYwXs4sJkmF36zkZU34hd9Yzs5ZPV79b3y2j6iCG5zbTKLChK3",
  "key17": "3DH7cYxr7oQU8DKhRqCzyuP2nqiYCKvW6SR3816tXVwfDZBqNRbk7Bvm568jRDyEPSMnGTijrrhxRUQkxp2wnDgX",
  "key18": "n4f4aiF2EpNEkDEGrCUvthB8nsGK3ipHQY2CaV6BLgBktJxhNqkPd5vALAbLABC7cpJp9RDQn7h4Y2j9Gg8RonU",
  "key19": "5bcq7CqZgwLkxWjxXv73DURNdC5HUPCkcpJMR46JpiUvYQggqNwiCFmzvbQvzQCdtVSWKaNgY7ThmKxucFYtjzwz",
  "key20": "5Ltwi1TqKynE1pDpD3sGXHoN19xkJEePEzYvz3mkM8cxD8XAUcRxCaqrZjxzTrcQ7ZfadhdNp8E1txekGxYzxRgA",
  "key21": "57ZYC7A9K3d4b4ZEGThkDXV8XYfnAassYYDBaPwnSoxsxFhxr93biJyJwjGnoGYLkYk5YEeXAYeK9aqb5JCPYZMu",
  "key22": "2QXhgfB3tBD7hKU2bh8AumxFaZzGTVMHcEkVNr9ri518hi3QeUPBZmCcSmzTV6D4dzbzyK1F5PGXxhTmhGVs42Uz",
  "key23": "4ecJ8MbkZjGDPJvDSxEUBrPD5ZHiLg7JxuM1GU5oBAhFQkyPwy2ut29w3RghVJA9Djsk6Ve4cugyZA27h9QtYrM4",
  "key24": "4wxaFoiQ21XRgC4DGwBHmYcs65XY5kM2FoZAqker7xtR7usNVE2VcRJdWp1pUuhmapM7LtAAneLiCD5csWwHQiQx",
  "key25": "4bk7DAVZJQJiXBr59sGRGrJAye49peX1Tnny8YHr1VDsA1rqBP7ZcBmFf9sDpBFzSVy2LFnj7y1rt2E13F4q8V2g",
  "key26": "3Qs4ZKo1BDLBb6JCw3FdUspN9ctsDgZrAz3kBwBJ5miPpB6PsADKEg2d2Fp4WP9CsJse1m5G6AoBMdZVa1wXtU6q",
  "key27": "2x623pzhWNdB77FzFrb4WzPTTo9jxcPpSvftnxXgqyJpYG5Wd1qZd4SNLHTuMX7t6Red2wHMdJxkKVXPfYQoLsqs",
  "key28": "jf3wGN5cGtr3cJrda8FczdSYYW1ZkyrRAzwESyapqLpdDR3aePrh4E58orEcPcNXbSzRTU6fFzNrvMopwVMPesF",
  "key29": "5HCmsNt6eoxsMRbZerf8Yaqyc98mug7nVWDY1XJGPd9CBbWfWQdMSxscqsMC48o9uqj8FxRuE2aK7Sx1jhKH8r5L",
  "key30": "97shRL8FCtgK15ve4qp3GNbCEodzbMTnYssAqDLAGqbirKj86HpPy663v4cAhss5xmGf5h2k4rgBmy2E7QnkrEn",
  "key31": "23b3sJJfdYiSRMn3wJigvRzWmN3xWTYUdmbL7fVn4ZhdtHiz8nPNVnUrarqhfN6dKg7W83ms3sen2ttfvH5ehD6D",
  "key32": "4UVELBdNsute1o86K2ZaRDvKMEmg8rVpcTHUW1nj1fPbT259tH8j19kLZLonEjBpv1yCU6jPSRWd49YVNsfkuj1W",
  "key33": "3cWrneZ8VeW69DEjDRGxZahidrKUPmLhgZJJvDr8uTkLeNM1i7imt1fMqz1qaynPkfFVx77CvYvzhyutjmEFM9r6",
  "key34": "27UT2AaWry1bQexXb9AKtep2pfKACBrD51q5ZwmZmL6kx83t93EFKsDQj2gC3k5tcprnf4DB7Y64LpBRwN3r9iSz",
  "key35": "mCrs1ZMv7EUXMDLgngLRUHrLQnXrw63p4CLeqPt6qwCXHYZLmQbyxP1uRXS6yYMPv8qZ2k5FTZdkH1ssDG5z9K9",
  "key36": "3fRFV8HzmTosDX9aZMFZepbNk4SuBsuHgArHbaBs3Y3pUL3TEf5HFqW93my2humkPYNxe4kexYPkt8wzBwkhMuAe",
  "key37": "TYDsuijRQkvJwSAA9uJEePiAzTRZzeQq3C1Z8accLjQQenmSAUNS3iurnyh3NGL8nb1BNL8ovxazLza9vZhBcMz",
  "key38": "5E5KbXEzJnaZ23xCGFybHbzoAT9Go8X3WDB1vcDEC7YDKcG722gs4BBKy3oiHUya8zkZb9VAykVsyKpVbPVsmQpQ",
  "key39": "5cLCYUFNXZUuTGnEn5RRvmdso2PsAq3FXuGA5yuP1K6hYWr5KLvKXuB8nw7rsg6xGeeKrXXMxeQM4RSFNn8eTLvS",
  "key40": "5fEDDkGxFjqKsKeNDxcf77kBQMaFnHfRrKd77ibCEzqmiKYDRiK1LaFrNDGVwg2BxvtD8PGWNdRJ379ZLzYBhsPY",
  "key41": "4F88SehhNydf969sXDxSR3ggjapRrS9DCRK6WD3AVDUXenm9sBQMCUhog3ivpmajUownoSrB3fTEEVVGrH7yH1ju",
  "key42": "41YKSTEYMT5aXd54i1Lazo7SaN836TpRJ5QXYq87t7MVMaxPuxYX6uU6X36kkxQXKAKTy5bsryULafGMXF2Dzfej",
  "key43": "2rdww34utrxs8r6PxcLwv8XjUosNX1ozZ8t42g378QsDEFTVMuiz5XD1ubcQpW9rHNL8ygmWQDyCsv1R6o3mP38D",
  "key44": "4vvy3cnqDztcf4Pb4SbPAy83ZxxJ6EbtGRMua2KuevuHVKwdJAxNKe6sKd8fNBoiTYpwLkFkBhufs5K82L7hTBTW"
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
