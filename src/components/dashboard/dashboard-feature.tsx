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
    "33dS7jUfFAtVUW59dwQxcLi6Nh8zoisJvZztu8j7dST243i83D1RzaPcXv9XDJNMYUtPxX9WQ7M6H2GkhU31Wrk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AT4aB1Mf34iszY59A4W2qC3ZP9hVD8hqjXwTg9Xq3rQSWNuRMMzLQCBW9CzFQVBVqYbnXmLHkRNqeoquC6p1mKb",
  "key1": "654qkxshmr2rf6v8HmwE5E7nda5v1AWiko1n1rmhrBVMQGiTetZ9ura1MfeLTWXEg2MeqpxU6M8hV8g4apFkWrLj",
  "key2": "2qDATtZ2gV83SomQCXLqAK6S7kHu5BCRr6mc5su4DowZvpnL3Dje9C4hURs7Mk4z1uMhUVa1Ek2b5dNAGEGAn3JZ",
  "key3": "5Fxhmr7ejyXUusGKTjotk9fXgK41EkrHiBebUH3FFNCzPY7XaKhuv3edePpwcpyEMENrpeeFdBy3UrMQxXxJ1Z7w",
  "key4": "4LaGspm69LVZyo1qTt51VvYgJkwvpuCT2SPiWVZHcPxBfYNutnyJcfZh5QRTAqorK2xhoZnZ1asW3rzSKpAZuSFj",
  "key5": "2vsHiTXzjK2F8tgJcRR7pVoZ6nuU1VBALA9QwdWLHrUDtjCUCee6HvYj8QrduiWd8oLe12WKgzgLQ9X8EYboJnDP",
  "key6": "FuPdEKsSB4GrLNyXFbNsHy7SWYF3MtgAGiLexVMSJpudQVyHUfEbSkJmmahPcmar9uJeaEXBduTHozeXC11XYRY",
  "key7": "2ANZwwX96nEaKqNQF1VqzQfhmvSf5GmK6WrCNPpX5XNvxPqkZeJHf4yj9QMu9nFiUKCAp5jDbL49FDDYkUm5yA2A",
  "key8": "57Y47QbHbnh3U3AGGR5PwefJwP7VMvCz4MaLwYjto5j7NcXjEkMJZrMWPVW55gkRL2Y9kmXMEfLYib1PD6Q1DpGi",
  "key9": "2yeX7i8s27s49tnGn7i9buhK4TMvptNaLz2ci6ZidyqQ3FgnVG8AzJ9rvm6SmPPquFTE5RTkX93WKckw8cZUZV2B",
  "key10": "64Kva9gQHuxvd3FiJqPTxhkoBGLN4LCFgn5bpFt3ZjpytRnt86r2BpsFs2mE6qBck9pgqxR2smxiUQaZmsToaEu",
  "key11": "2y22ZfjAxWGCU7a3G35pFEJ7FienahQCNQXCZbCKCrrxmLz7A6kMTrY9hNS4r9erbet238FX34mVKSjwwj15dRhG",
  "key12": "JvXHp8gja45xD9sp9heJHXkFsD5Q2pVdEXRcXGB2HWhCQt4hcmKFXjwNMDXuBWLrtcEuV1cNK5E6N9HRV5nPc8T",
  "key13": "2pQunX2BNqqy5yBRr2WHPEYV7YuComg5bpRW5us6F5UqZo6zTDarSRVUUSmtgw4hzaXZsyc4uy6YtCUKQ2BW3n6B",
  "key14": "HV5KQiuUZ95D6gVsWqxac1cxXR4ue3S2WNHMXZGVyc3Rasx8PQE2LxyoV3arFm6CELQzPL1w56Hgk8zNxA7zV5X",
  "key15": "2TKkzUNy3NpyPGYc2ctstFPXyeJ3cYpd62HxFMsLdPqJ2FkRTgMCGjZarLJYdLYLfPM7gCZVsT9yGRw3QJnd1MPE",
  "key16": "58FYDM9Wq7VVV9xq6zZMDNtzYBfmC3YWAtEuLTxoyK35bnQb4BB1mTGupMW5bPgL7EuYNs6FmJKiyTnrE1jy99B3",
  "key17": "2eZWmF1TGVuv21EFdFEtkjtWFirLwCnrr1gwSUNifH2ZWtyNqSLeBCB5yEi4cMF1dqwanjrjouesYe9F4W9rS7Es",
  "key18": "5PctTGHtan4pU1PqEr2CFMyDh5r4dCrUD9sQTGhb1oFi6NQvC48kRpDos8J9Mvj6TE9xWFg8grn6eQ6KktCmKRQr",
  "key19": "4zEdaCUmzV3kTbty53c9SVPxbUVCwyYhqEeL6vTM6bbFWR244GzcEqbab1rFwCcwrGK2na267f5ny7rXhED7t1tp",
  "key20": "3jKsxhzmR3unUL6WMXGTnYHqxSE1GBxZm1YYfcrUcsXUCM4vdCjm8BRohDo9d4Wdpx157qrLYgCz5ZbEhv4YDhnK",
  "key21": "45JR3RmDGpbVthb2FXdi2nkvCsW9HLEBVo49bpHyMVJHxUnhaxmc3vciUYwHhAATdVJeeTzGD5XvyKiz2QGdXwof",
  "key22": "4PJbgVAbh3mGxqsT8xkew5bLyssAQofodqfig4qGHkRT3tdhtSBZZoJAwWJcPJsh698V2MtnGYqN8b1WYGqFDCnr",
  "key23": "3gVxje9coA4ixJ2Qx3q9K1VhijbVArNcZq7BnEQQoCJdPUMP8TEggQffLXo9HvXE4KD2hfcRyc2BSgBf5Wt6FA5",
  "key24": "3MJDUfxZz3M1AaF11fUJoRasXdSNfSQsv9cvS2SWL96s2kaXfDwqP5sJcgbv9eVPN8xP1SJeq3WLaEqMYutkUX9u",
  "key25": "2rpP7RDcBumvarBkoYJMfb4TDvbhBfFqsbHZPgAZfHjhzt8zwCxuuZmCYbuwwad8sfSmuAspKL9oVXoeYNi3rmTi",
  "key26": "2GCG1NBtryvkmCJKrTHgcb7Ecgs82Po9bB9viEg2SLBto4Q2sPpufyB572enrY85SxTekGCQNCFJoze9b6H4cttM",
  "key27": "3kekeodWohg38eBLs8cRi1h8VVYdtaAXxoQ9QT8NrU4a7Z59DTHu2JN3Kqf5mMFyPHvE4fw9VZQ5m5TCktEppv7Q",
  "key28": "3XRYDUFrAcNkfSrxXNeA18ecaqsv79RMRoFHqNYh8rQQpdvowtdmuNb5HpaS93Lr8UQ8n4DUjEFwkKKBmgoE6cvD",
  "key29": "2gjmpCcCnQouEq72s5EnHtUseapspMDBwkR3FoBMmGxZXhk7LFkmFYgSAxxKDgxeSSeBm454x5RPnkn4JiQNdK9e",
  "key30": "5q9kkJJ4zDkgNj13zPcMkxEAPyKwodXCDgMjFoFC4CEyMEgwrmvXcx3U6ud8QFKauujuK61DsPud64aiuMe4i9iR",
  "key31": "2H1cxv2gvrMo4E9gyYCSPArFo7txFSu2hZrYs9YADmwFQFrF3gVMKrWsqkHkhjoq7Vxn9QGjViNT1tomXsS4sDyc",
  "key32": "4LenkaV7Ybmq6zkQdVGM3F3dCFvZW2oMff7KEPvx3AXASdjuKrWNRN3Hqn5cKFLwonsVcQ3PVpUDe3ntzzYhN2tB",
  "key33": "65ruZkgr5vfuWyKBzjCJXzV1wV1XiwviA2gdNXAxwZw6raXfKikmssJiAUHKSQQb8RbbZSta2P6KHCBbSvAmn1cB",
  "key34": "3oHrvf7TpiczvRApx64MHhbzepNT9Y5bF42Xcqn5VR8FKccXgSr8SZ9YsK1e86H92b6qWAHWSfCGoRtqdFxRGUSS",
  "key35": "5Dxg4N77VFNu2zNCws2xnM7xzz1qXiumZ6j48gth83wqLVekJS5SkiBKLh4j3DtESHDcMhmrMZg63AiSJ97YhPBR",
  "key36": "3hqDDRcTWqfznmdr1sKVXSyBJMaoXmnG9D1VZzVipvTQ9kzkH9jLdbZaVUj9FHe3nE3oxT9j2v93CWb54AxJ1R5R",
  "key37": "ZgfwwiqnjSUcoei5Y3616Ub6nTy6rcHQtd7Vij1Amp4Z1xYExNhWUbYuPCxj2ZvQzcstbehUye716F9RmPCu2AW"
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
