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
    "5cEuWw7B5xES8kpgd83E9NoijroGnN1ZAzBxNDm1KpHPEZvsW6ubDgzoBuDfws6j45DfVBCE1YBR3xhNF8FoTK39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J3A8d85BmzQVJSGofSBhovgCGjdGMMZBDeDV529DzgiR71VxAv2oA15be1tquDkgkyMwesTLtSXaF6AqPaQTg8K",
  "key1": "5y1uZk3ydwVdawZgJvLtJ7JiTyk2UaZ3u5SSZhx538bcobAkc2oxUw9rQBkLUvcgy4CxHbYuYruWJH93SQRiYpQG",
  "key2": "5rjaNw4faBVMt8SdahofAQ9M2rdRNfVE55ddwuykncT3W6i6645hjRdtvQjEUsL7GY2CiRj21HfyTuhMLC7RzMeW",
  "key3": "3H16WVGtz1FS3nHPFMMUPSUng6uipeZvFPYjbtf9tVDiPTXdFKAvfggF3G3TcwgnapqnBNKkz26cVpmSPRcY64gV",
  "key4": "YzK9GQFYqwnfVd14p7bkqBLwVfkUXbjKZxF4magjJrMTWRXm8XjLXVFoBvzy7GVYeB87qqWwBTNXteh7EAdazf6",
  "key5": "2BKfGkaebFE7opQ2pysqiE7LFofKS4rrQK2XCfVmivcwqWSfYvjwdhPxRKoEZ1nZ1fvUJpNEnu7hSHqnDBPnLPYP",
  "key6": "2R12jFXAe2aPizGeEg9Ajx7xJdbC7FMVRbUKXn9ZD7YXgNiga9wiP6pCBbjF8tktWo35UJfq4BZq5mZX2em52trr",
  "key7": "3YfY2mJCAv4D8bX7FXco8BRyi8quhrBGN5tH4k9q47oc72nmanFYfPnvPS8A2x7PJY6Uh9JNvNH6cdTdiAJRWmTJ",
  "key8": "AfmAJewUhuhcV6hXw7JSfBwBV5VTwViYTEkRtDz9XeBURbEZhB5CT53EC2xMaUnLYkfNnHkMQFBM7HPgnQCE5WB",
  "key9": "2R6AHQdaseya5HGgF2WcMgHMvvz5RwtxB8MyTLXcVyzNxmm36ZLhoMrfwa7aBHmJBd8vsuEEwpATiNmWpBtuQb9A",
  "key10": "5BZP6xjJzmBwEH1YHpxU9vXanV146n6XmsJhbo1UpAc6f9toRoj8uuXPJ1fEB4FheVqV7MGr5UsuoKijMEwTGtQs",
  "key11": "5CEryLVTFNAWQbBV1PvjygwfKhqowPqXLnZdPk7LoQNoZow6khJzzz8sUK5HKMpvkLxUWBh7XkWUAfJDAT1ACTU9",
  "key12": "4U8jsXN7TBcvo8QuUyUejQxZArs7ooVwaxWAEVTNY9QBdPbuQrQAg4Lr86HUEGYNyiW9yKHTQHyxVAy7gTeUpkVA",
  "key13": "FTyoQTzmXJ2RtuWu3Rq7U26oz5ybNxRXhdMjfJFR8NY7g6bzRfUgQTHsPex7pYUB9Jo1cbV2UcXtrFpM2M3otVx",
  "key14": "5xkYty1GT51Z6BF2yADFuu4iy7AJJDTxkq4RtFpce3TP9JZ5nNFEu3PSUnikCmx6PdRGjikGuXCrU6AyHBsLEYyQ",
  "key15": "5XBKtmFgPxDFcthUJfFdgDkusR4mpuLES9c5h2zHebEpwaWtT1ffC5rJKUqdiwyGmncgd8HrYfNdzCJk9yL2k7DP",
  "key16": "2BvdgvcifXqrNoYuYZXnscYPnN9HqtQDFUVtcmcbUg8ixJaejYUrC9sYfBBCrDDNQjYcpccdAzZAGWmuyrFXW5oo",
  "key17": "3bKMbzc5odSS8CYtDEniPsjwV1VbSUzm28vf9ndo5SwL8jKMN4Cmq5UXCwaPGE2kM58mwLd9re6R99XuwkcuRuYe",
  "key18": "2HRUHkiGKfg955jmkXun6UtefsxwGwm5TJsLZtmWBvF7v3BZBBNSqFPiEstkznMeyi2sya5dXZ9Poqk9C61skWJn",
  "key19": "5cUrqz6hwu6bZ8PGmmH6gq3Cg3PtCMDSiWPp29UkuMiWpZY8hr7gsqG1AhoKW5LZJ97vtk2GDnnFbCRhdzqquCQR",
  "key20": "2ptRizK9Xx6mb8m3Vc2jSyj6PfjGUZB4MD5qrwTB4PEmgBs7CK9CDeTkuQH4LGDrgkrFKRSk88H7WtekLJ9SptWP",
  "key21": "5neh9vyk9s5q1Vog9F9kwMyrsnsD9d6Ma3ZnmeMoRZHfQHoQ1V4moqzFrCsoDhkvFapps6HoKXHx5GLrg4PLZtFF",
  "key22": "4UmxdrRnm8LGQ9GXcntRcvaQ7sCCLca9dfVdUMG6gakWMyvwipjV7ZEkydq7X52WmTkb2ZXe9V9q4x5Mkf8AsAz",
  "key23": "CNgk4vWEPakMuZJTfvnKEXAQjLm3nhfUTm5VSGVmeTi3HfBsWPCYPzJXk8uE1f63jbc5nQGPdYqBfQTBuwNt4dQ",
  "key24": "4T9kGiuhUWxqfTGU5DtBHxfE1n9YhwqVzemEXga6LFRXreNmj8YnGkkfJmXZ44bi9icDas3Rm12SiLhVygTYmXjw",
  "key25": "5gjPnmUYD9x8LokBcYdSjFLThY9FENJSiG7KqzBMK9FNbXvmb5xmzyumPdufaE3MoBY1Kct5iCWMGWdjnWivBNEy",
  "key26": "5XSNDoRuoYvTs4z9nHszvmTzrP1Efacu32sfVE7vwSHPttBztCSC2MjHaoderZ2ymEyCv8ufz6Uiy58MNBrgNkkn",
  "key27": "4wrod4bggcvG8C3gXFqVu7jXPuTtdMQDbYuXqdCRnvPW8wLqJNaPLANUxnqMiRUPBPiudAi5kHt9eNoVLLTLj8U9",
  "key28": "i7hfXEyv5UWke8giaQpST9i2RC5QBF7XQafRVu2d9WFeMW8GAcxUz2yp1WsdDas5xx1L2n4e6awpHZjgkHLJctF",
  "key29": "5AAhrrt5ub9aKEiPWGGNNSRj8kQqH2HjJzTAonzu7uxnVmjqy1p6MLzRrV1171bDGEsGhJEwkaoV2cEdLtS7oWZ",
  "key30": "3xXAiLdiJUXhRYCXNNorawKN5hJkM7bLxwqkNcfVd1iD8aSHB1sXN6UpxXF8kzvswTtk7Y98P4254gszbo1EXvXC",
  "key31": "4236woK34zWjBEii5sTv65AD2AobTPTMmpLSsDVhEwHoegbBQv4uPaewCmySxWGQjoqFrQhBTDkFRwn3o4eDr7xC",
  "key32": "4QdU87PVYUiL797NtVDV3gSmdJ3bX8pZGNVnSZMwAQVmpkGFmGxZfnH2EkyiakrFxHup4uREEifFTVtWB49652xk",
  "key33": "5VbF71QhQ7GKqysdsfP1bRcyEDxvEvzQZ8qt3XcsyEsTTjkXj4NKckWbRhg4eeVUMsDgB5RHQToyoiZMNikzrhUx",
  "key34": "ZeymkMRwZMPp2YzJPYRubk2byDCGuCWnQEGn1GhA3i3JHBcSjNDmZ8WBpH4zGJoGSHYxhdEiJ9nmUHLu7GPMD6J",
  "key35": "X4JrHE3r2eqTfqGvvyoLkFYJSx2xqHy5Mp7kExuACi956opUxJ7GQJGwvXCRjcrjdJszdQ3fM5VjwwfMdLrQxrr",
  "key36": "2P2Yp6p2HoVMD2KchUi372S9gG3hD2KkzHWQhnsouCZLNcsacWHZ1vmu8iCK56bUH5ga6wdnHm8VJKTkpcSaXzsc",
  "key37": "3SEggqEkgqmk62Fc6LP7WJQLoZWrbzeQW1gy4nh36eYFHJBs2JhedFpwXEwCckq2SX1oniCHSdcAiCo2Z6Cr7Rnu",
  "key38": "5thXwX6Lio9gQc2ttcB3ZxxuDP75cUDmGgky7vz3rVytPVFbMYLKJmdh1fwzvgAjXveEUeBpp7FFFmR1sJ8TLsuF",
  "key39": "4vT486aXsJEamSasufSb1hkg12VKJWUxCp3rbKaMyQFcscSG7no3dW5YjW7JXNDxSSEWBzcJSAQLAYF7dSaPJBkC"
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
