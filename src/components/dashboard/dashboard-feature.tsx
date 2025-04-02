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
    "2xaSZYKnbovKh26AT5mPzdtiP9ZFMz3NZW966Je7KDf71fCKyw1oTa5QxCmjaVo2i4hmqvruyP8Y8q7C3wtAbyZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUBTLpu6a9ESmyJTNdi3KEJo8c31mkhvPcvAaux3rPPmwiy9TRYJXFHPMcJECx4QcuAn5YfAPW1RN6D3MWfpC43",
  "key1": "3opMsRrL7WXhusxZg3jPmR8gfx3LLDXrkCmwguMsT2y8WKx1s4LdGzPS5PopZDsCM2eEoCTWxQABwiSyR93JnbmU",
  "key2": "4hcmhtZkqpdkd3WmbkmUBB7sA5tBV9XeYdV3YM3R6NHdwTiLKpKBKeBTi2oD7Q2BJgu5GZmbZ1cJ8LpztTNuW3CT",
  "key3": "5XcYWs3M9RCxCg4adhmMooN2RT27qbiTDVT8vve1a1D4F4L7Rm79NY15kVdbCguiSXs6qfxcpvDan4uqrJVamHoB",
  "key4": "4z29AAYCA9yCtg1z8h7fBArJi9oL94Dcs4hJknJQid9ymp4AypXtJC8DETgxYW5q7nRNpXHttxGTgaCVg6Nw8QYe",
  "key5": "5gz3LhXx1FVzyTFUBykre9jLoWc2o3DxNwf9ufoWEzAKm9XTnn3vvyoeNo4GzJfbFdrT9wpW2vEG4TmJbiQbgPU3",
  "key6": "2zgQDHTiCN3m76Zdn34p9ksWHAdAoQVYPabF1Z5LMehD5YbbtyXGVoUD4USF5VRVwSnz42eRfyGu3B7GG8BFk4oT",
  "key7": "2UXf9k8Ds4Mv679VL6GtDjyTsYkUzomK38PTqGXVURqiZZ4r67U7Sf6e1jVsJzLU5ACDxENoY5nat5D7WzZpDMPL",
  "key8": "4r1paKHWL8af1ud1CzjsXDUHKxKauyXX9r5w8Ds4BKevMbE7hmWNu4U3GtsWYjySYJY2nAhDp5g1csCxjpjqGqNe",
  "key9": "4TTWQQvrFfHe6nrgrSGvP8KKPjAUC6yYBjt1R3PTRxbrLyGmMiqctfyMhLKbJ3bPXt8Q3EbH36bMR61Ygo96rzKD",
  "key10": "2vXmEQ1zq8V5Ad15sDgYV5RnCWEX7HUy6HEMKUmVq8QGdXErHXHjMNKjKxVi1GzuYVz7tFJHqNDLPt6vzgtyctDo",
  "key11": "2ukvFftJZFJWjd9DxCHXq2oVd4S6y7m2Dap7AAArWfhA3f4nuWWbUapuF6H73P66V3iSqjFAMCL6KWv1q2i7gXjv",
  "key12": "29UuC3ALYpHnFMbPGYdbWqZzt1gMhzMCfYRZF4bDPjaAPYh2w4aZg8cbmc4n9gqqt9BHkWZwhKwr8Z3647ywv7iq",
  "key13": "56Y9V7ihAn5TSyhfvF5EiW2c8TpFniQySGHkcueiJXiqgpVmP7fsuAsL3s4CMbA4CqQGPaScxnz3xRMGyYnqxrcr",
  "key14": "3UdrbwXEd1Dwf93YAmJEG1HXc1DauwCwRZ2xHvrzVWb7fXRCj6DMWmV6HL13bcywPBFr6R8znVNFkv1XvRmgq6SM",
  "key15": "5dnfWAwKDXDyQeyZUVk4uN5KPVWeh7ebRdrx3LScG6DGPfTVLTmXkj6TRaETAbEfdSP2UcK3WMhtridTZP6WNpiA",
  "key16": "5zRYAtXAn6qgCgCJCfMyTgFZ9YFxrub8UeiMiHvVRkgB4hUfykS49LKDmf7QRmLpV7HCL5Mgi6nn6YZaZi7ridwH",
  "key17": "3A5BnhCLKMDxaApixnnupEwJWpyVwaai6U5SXuouTQuPqduow5HbBo838b7r7muX3MCSQ1yoTczecBKqjrGyz38b",
  "key18": "42ZcZfuUXvUkA1LGGBUiYke2mxiznMXcoHnZQymDbGVRHgpP2eY5UvXBkVLbQvSAigARPuCRodHsEiaiyJ46EA4z",
  "key19": "5WW35BtxxXB13N52G3M5qnfx6kUosZk5bBNfejpXUfYPUuaGeA6kDMHKoQVD7onV1aBjoWGmSD5TWoTfLzupLKj5",
  "key20": "2Kxij7cYjJNvvXnbG1Pm2Cf9tkRJjHJbwcvEg4cBpTMetc6izVgoCQ7yGRqJ2JzDGe9zjouACG7uBvocaqmNRbzL",
  "key21": "3TETDVihczGZrfKHRXvarz14qyHkbY4vyTwF83UDd1pVRmciVWXEsjQNeanx6gJgJvgfvEFML5LrGMqJvd3m7t5z",
  "key22": "4pqGMoqNdH4ifSJpDWjQHPmitzDAxDyL1XtEzkboeZeDJRh2JJ5H3qyiQG6qcu7nqVVKJzD7ifd8QWnAZdmkeM9r",
  "key23": "2AB4gAheGvFM43PuCy7EagHXjNwrJbVkgSTkARzq4kfVNL2QCemzN4QEYyABv84NLf5Ck3DfpzN9DAGpegn68z5Z",
  "key24": "317yDs1Z2t64Zgko1RUExmBJSbWZnB4GusffoTf6EjwevvkUgMtFKm6pP7xt638niFR6cMoL8vwvsj3pQAxYKDAL",
  "key25": "3Vr8CiXdxTwcdnprwUtjQ2rxvZCpkQsCJ4tjahRs8MBQML8BBe5Bv5GVtJD1qNGhfsZW8PysJUP1ZiXcDMYWe15Q",
  "key26": "449tpmbE4rCA6ZmfvPcT8FWYxyj6C6km4cp6ateXfBWhUtG7mBsC3fdhQLUGeYu9Lai2m4PBwZysspcSAC9i71hW",
  "key27": "3E6nPgpdYy7sHeK1EBYUJ2Frsipqv71MMVukd4SQduRnxMxdGSXPnyw8ewoaRUYG1qSF4X87Ef5zCiL8UKm5oyuR",
  "key28": "2KWyEL5KG5ECc5pn6VRx8UnTuDYsHkZKDRQxeJNHZHFsyMHGzWFMBFKPvgR4LvFXmoFHEWytVCvGNR7r2u6JKK6s",
  "key29": "21tBtUKsnMeqYYA4ywBg9SPAgXLE2iDukvjg6NjvG7rw2tGZnt3SNDU7wt4QxEJF2hcGcZVGWPosbrtkFVBhk3d5",
  "key30": "3UY2RnWLfWLCsJMoGc44d1exN5AJwKT1dsUDHQZo2VY8L8ThzLRjXRXHukQHHMFX8UxR1wyK5Ks8zvyJrwyf6PXE",
  "key31": "zEi1C1H5ZnSJqA6hZDzxR5sQ5QUS34fNG9Y5La4qAfbQ76hMyG45eiwX8eJP47JM18Uce5gDydMf6GUTY3cQnwi",
  "key32": "5g2DWweSbocYrqwQYoweEhVFhbCX5ucujGbW56iw4QNLCaPeKk3n8onqWYe9xB4fmkk81Dq6dmTKWHYcmyw5T6Hn",
  "key33": "4vizLB1kmmWc8eUq2EskEnyR82Lu1cqphvobx1hDoRbDfvgJu4MTnuPppaqcy44TYDrC9uA7U7AYSUNSkhh6wAxN",
  "key34": "4T5Yh78u8rfYxNobT43TaxMzix8Q4vRfrRdNmL9wAanFXfh9H8umB9pY24fibXr1SW8uL8jczm3dK8XMueTP2wgh",
  "key35": "2JtDURn9HQhphJf5B4CfqQ4bv4UKTJUet9Bvyy4md6Qm8rs8gn8WoCCby3HXhHoJb21sEw26gHZitatRFgeKaE6m",
  "key36": "2N3Lso54JEHKxo75qYedLeEftSautDAFmkHCMViZc26MJmzaz4KuwgJFdpgR3GFdasoG7Gki3t12zE1qe8wCY2L2",
  "key37": "4wKWZ2WemuhihohvziQz5i7yUm7cLyTq6aXR78inngKMjra3HRuieJDVJYaE6AJNuv3DJaeCMBeK9xxhbRqfSo1w",
  "key38": "ub6PeyKNeyHEvSdeL4ZsMSiQZpHmvYXAzrv73GGQMCKK4ioTd7UUD8e4JkwRwR7eLHf1PtNTA8Gr1HjmMWPd2AF",
  "key39": "4DKAP9mz8U5o3Npmw4tYNJxbcJtyRb65gro1dvaSNpPBbQf8PGv7L6C39PG2mDCGwdsXwSF6LHSqbHGogzXNYRxT",
  "key40": "2iDcLeP3Prj49vZeB7rNdeTJdgxoeAMJYGf3aMin4HkRJNhimwuCMAELrEo52vnZdVdjjdzR9oUXe9eNZhLPnMjL",
  "key41": "56evUiMBrz2v86txDFsRpUUHa7mYrJtc1R12tgFxeesCmSgCicUWRnyayJ31rGTeTmX14xSQvMfM1PvTGm37dJQm",
  "key42": "5oMvv1Wtf5ZyJLVxBj9GPwMGbrLfPuD9TqjV5bgqF6x5AuJAx6wc8fdE3bgJLKbkNZh3WpE9zE1WCX7GzQQqqLiJ"
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
