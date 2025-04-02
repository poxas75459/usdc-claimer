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
    "Bzc145oz5Bosz9CMMuZ5ii7A2yzPZE7PKbvsvsRyB5P3FEzeomE9kfHXcFrAd1YWGZkWvWr7QDtF2cHdq2TGJfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZJrS6RQfM2TrPd9zjKsriUpWotoaiBUUXNYmaaMhG9thSUuKzu5duWAPdq9XkJ1MVhJdbF61jH1TdAg6z4KPSn",
  "key1": "4WZX7w59aEBrMmiVc76b56GZ7TEQbWxyxHKV84gRD1Y51ZQgzyWW2FEDfEnhPPDsFLCCgwywgtKHxQJ6WMiNV8sd",
  "key2": "2KAaCLi8t9VEDnktLJNF1ntv3sUqd3c4MNkc1cBBb2AgSkNqZenfWkRckx2dSawxejECoHdUnUtb4WquriNpodfr",
  "key3": "42rk5x9ZucLXH3nDudnEvSLo1mc8pvUfZcZGeoQgpKmFHcuFMdChTp7MVssE2ehCAGpSCvPYoPMjBaMgP5QBjWZ",
  "key4": "5cwpoaYFRMdVZg9bwvFXvRA5PeJr72G4vm39hsUpnCGoBgrQ81yYCr1awuHx7bkUasoU6h82QSd1XT6CL5aTCq1",
  "key5": "4spJoy1KKYELqoEWNhy2Lh9QnNVYptdeukJeMUxFFJKE96ForeL7ikyXNen9yYfhRm469pnLsFkuec7p2bDPwcn7",
  "key6": "5pXXSfchMB5qEuXsBSmHsRa46z4B29KaSMpKb6tegWnk5YuHs8DYd6dvAXp52wbw8EcGcvMAqxGV3umXankf34VW",
  "key7": "5BHP63oxg84Ejnrmy3JPVUMWNfFc4bC8o1BHwbSBuvTNTNg6k7o59gkrgXkJnGxwnJuCfKcQjMRXQb85DeeuM1eX",
  "key8": "59zWdxqUMi9nEozYzvRYXmdU9ojUMzSEK3ii3pS1AH5Bg9SdA7CyuxRFnejrjKXf88hhz2FnJpxbFV9Zr56ar6Ni",
  "key9": "hKkttLEUtnnpv56NzcyiiMPDtMfv7QUoVWqGJnkTWyj8aAEtcDWffLXXhBwsQoiDUvMMT9ywR3TaaqcoAs7EYzw",
  "key10": "4QWf9AyJGwwKzLRdXuzR6bZdgXnUs25jz8xwSabU2nR99V2QM9H7M3wDQi4ZX4HQCuZmpgyBN3pyRk3Vm83nw76p",
  "key11": "9bFrjYBrsgD9oqiJJDtJooos28p1f1zb33dtrWuexPSWdYmRseXnG9PjTWtT1gfDHdzp3PmUPdN4hgiMHDGLswo",
  "key12": "5ER1ss3ufewG9G1F2gz4j1fAk1WVWFKNWFFNi6ERvbzJpoAaFYXoxHXh2aXfxkVhvFyZLwcPrn391dVrycZUaEBz",
  "key13": "5yBGBLZJ69VFafkJuqyHhKJUHSNEa4vF3Er46UUDCGvRthCKjZ3SKWsW9Js2bSD2ezJAJFEnNogoGKRbzU8WwhTh",
  "key14": "3PnTm53bHhEzdXMDqRk8oRvP9nfTBKptumniSmxbNhTdiFcsSH7LZHf8xVrgM9ZG1dZdwGG1YcAwgnCowcZ84pea",
  "key15": "2WGGy5qYW4E1C1wwC5r644gEAvHEm8XqK4gBT2WCoSKLM2PNWR7gpif4Qf5JmFW9RfZdr1SB9QPPtfBJ7AYkqPPz",
  "key16": "4Rn79HKwcmtn3o6bA5vbFeC1sk32Hib84ZsPmkTSq3iNgdDNZMKMMExxYrwrva5toNQBT1uRmtmhjcdRcv3Kx4rE",
  "key17": "3AEir7AzfT7Xaw3ShtSoWvDDDRKhmLP9uJPdU4WHoc2KzoeKrZQvqfy6dV2WWUoeR1JwBswYwGZy9Tb1Y5dKeeXt",
  "key18": "L6yNd55UajhHHqqx22oSEJZa4FcrWdVu74w56XyveLJAKCiCbBqzHNgbRRHfQ1h2TCy1mZvRuGBp8RPrGkkWuJg",
  "key19": "pkNoMov2YCjWxf1qcUVKk3ZsgFRq693sx6kD7uVpyziDG3WjxXF56p4BxMdwkLuNFnZETmsPvVgM3qu7CXxmERQ",
  "key20": "5tqA2FpGrSx9T29JUkTKrAEdeTnxV7P5rDdYbfdyWTwa4PjSrfASuaDx9vkPAKensxeKaoe8MTLDP9YMcE9QQbCH",
  "key21": "ELztEJvp66FwCEsPxZpFpsmkXCVUfhJyQpeT3wX6sDUQNGXdmkume24eY44bLEcneXBM2i21pzoMwFjL4LGaZh2",
  "key22": "3k4pPsdFZcYCW5wa9dsxPSnMJ74NrREnKJRLwgCQTww7RmLiHpWLBAM7ub68RgHzxDVyBPhhQrHYrr7vT6RUK9gy",
  "key23": "58WPa2RLT1GCQZMnoPQQheHjftfBPPUXrByHtPWR4x7dmWyFwuizcXYZTE71ELkYAbmLnDn4ufGyTeXbTKzaZX7A",
  "key24": "3cn4C3A1bL7CREzHtjQ8P7z8fwwS9umUd1YjXdWYdRPEQPh4o9tXRBxxob9pg5WMKZh6Ra7ugnyVJF7nsXSSbvqu",
  "key25": "2t7SKypRNJPwxfE8zGWkf6YPSZdtCfjrssXn5Bk8vxMEZB1YZYhBPKq7xnRk1R4DPiF2ZycmApMqdETn62QjBPQt",
  "key26": "2iUqUKeRfXUndQjvZiHskuNZukKy2LToQpRc79cVMwTYo3giWbgZeVCAAU63LE6jwioNWLu5wTCFYb8ti4TujqhT",
  "key27": "y2JA8ESzpdUb2dhdnt4y1pMfDm6K1GYJ2yXvtrp8x9oZMWQg9zwHLvk5XJxfuZ2Q9Gkxkq1R9gqN1xvGzQcXEPV",
  "key28": "sYj5J1D14gUFua3A6DdArACiFRKo8TdB9duJUZdgYoPbsnvGKJ1ih8Z3wURsG5abqbHX6v3J7qgCinTx4jSt5KQ",
  "key29": "Gf2pSAXUDQCb9Xx6oWSdJTbfqHRk4NNNi4YAkGoRzBjhFwk1HLJ38KnWhuo2ZC3W61X6pVUxnyx2pevjX6uD1kA",
  "key30": "2nJ8Qy1hioKj8ZgJHnt4KXGhyTt4q4HNyDTHwqDb6JNEqvFSBVm4YhSG2iaFiGLDmYTq9oqBX3Fsz7prYV6N5Raa",
  "key31": "bfoN7Qun1ywmcm5RQgd6MJ2BSq7yFqNf35p7cSA5YKGZSbbYtsC7jpahC5ZCWxNqMekWQWgrPJQ8sn5r5r3uz11",
  "key32": "5GiXmARhjgw2Q4SRcXNh1ChHtKxbjiyHgWcXcRAtHCm61Z4Nv1Z77podSxRG4FJPcC6ksiRia2m321XaL2W1TDPd",
  "key33": "4VqqKnQUNY9sYXzWYtsi9G76Y3unfg7VpUd3oCmrLMbWaRNvQXpE8DSUkMMzB4UFjpSMptYkxBHT7jM4CwsQu8dJ",
  "key34": "3MVReN8aZCHKidb6cdv2AvDGFQAqh6qXV7eDBL17EBNqx7kvLDvsCWWT8znw6P3aNMny7NDxGPhSFDb5RqqQmoyH",
  "key35": "4tCWAVzt1scRTFjVhtEeW9DNTjn3o7v9SdMMsH4F5QRmt1kVU2Pr818zaiQmnZxaA6ZkJY5K6uSvnnDrAyh4qJS2",
  "key36": "6321ZGqbHv3NJtu2bWjfHgxd7pNJ5n3hAcQ4aJNBc9cE6HfwsQWbxPdte7d7ZQaSXbZPdyuxLuWDVxBY5Fv9LfNZ",
  "key37": "4mVxRdbHac4mXR1ZhGo17JwjXJXHoPmnFU4f5B3EhDBh35v43xccHiDq8wthaSWtSKfewNhjJwQWNM9QarmqJqVk",
  "key38": "34e95bbjsqnGVQctPm11EN1bUN8kq6fBRap7mbQmRgbCrCXvdps6E39BJeHtpaEqurgHoTkTS5ByuEkxHHRiWPTY",
  "key39": "4csem5DRWKvBmZFzbVgLYvFDwfXqu4EDXtbTQ8YXbUHY5P3DgHRzCwb5TMT32TJP5ttgiQSoYyM8Zy2VW8VyBtn6",
  "key40": "3igkoEqMjKhC97vZpYsARnxoxWG2iN5yVc1rrwtBnvgLkk8SGPSBkPqFcmxRiULXgFREwbhdeXJc75TheXxUaFLh",
  "key41": "5UY3fCiYY8kkHB2p1QWamfU55PPdn3pq6VQwLuajzjFgmXNngwDXsqf4JKvZwtZRJm97Hqa332T4zY8NP34Be4Jh"
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
