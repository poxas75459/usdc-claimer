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
    "5fNsGRHx3jhBspfQk7XfxGTJ1LMr86zVy1SeirXJqsanWtH2FL2s6SekXpTTJiucF5YTWpnTjgg3DRYKRgndHkDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKe4ZGpbijeReukaWSnDMYzdWgTVLs8Nddj8L9eQ4J1abkmSA8AGHeS97yjT7FNrJPYrEyrqSq2Jc6FSfHT2ySS",
  "key1": "3ArnV1MTJyVboVwBiTzXtnEX5nnPBhRUM2zjoP9sXdDvazcFVq6XGC1V7uZESQRugiZXnduJMH7sroxLbS4Nhj4w",
  "key2": "4Wny9jRrSBC9ZEKHa9jff46tKqiAd155543vaAzvc3u9qCQc6ABDB7FWESXxrpUVS88ExE9GRpAzMPcj78ZErTyf",
  "key3": "2FP5UtA5wAZ6abXEujHHHvymXbUYiouzAeAWvj46jkwkFGbptKW3mo1TJfbEmxAevxTLrgXFPhfkrES9FMTJCYBZ",
  "key4": "5aMbmjodVQ4tWQLbdjxNJjwZweGf6tF3kgLjKYvhz92sWjJJ5e8xBD41s7tPcyi1nCowbaJjXBQEQ5c1YUSk6pyd",
  "key5": "9f8T6JgFxfRurrz6d2qna9NYDJVgDWHVSEFfSxi3hzkH9XWopz6X8frsRgsyw2m5vGgWMx8sxxrnF3tbyxn4TP9",
  "key6": "3GCLz3BjWM9ZnBpKmXzdgY7E4BuCXymJp16rKFbwkERXeob87VKsN9XrFh29egt393WPU71WwYG6nLJT7Ww25em6",
  "key7": "2EEsr8tVE1snCo8qAQZeKpG8DMefrEopAvxT9EuktfuVFkbr2jRcmKSxPtvmehMTtoNvt6T6y5mfYbsRcBXRwETt",
  "key8": "4voxduUqQQ6fqCziRpWDv3H6MLyJLsgkUbVP5svttNwwpcSXDduL1j6ch9sdDPdWEzC4DKgtq3JazpfYniCvfVEB",
  "key9": "4m8PPe9vgf2gGDQG3RdQ8dgzGGd5h7oQzpLk35pHc7FQryyBFNJHimt5XMG5AMFbsHHy2Nnj9py9PPHcDuUrsfvi",
  "key10": "4gN7sQbvumSnyjW7Nod7JooY9ZkJCsLoxZ2ZgjRAbzZhB8sysf5C72zm2tjXo6E5seAMqFEoXMMXmsCGnGCnVSz1",
  "key11": "qX4H7Pm5TfPR8wQf7UXKVHR4mZS3yg46iyMfj3SyCMgLXBj4rs7wVNwC5f1CiFAuRhjhGhFEPRczshZRsb8Sq7H",
  "key12": "3wUvotVdUwAjg9QsS8C7ctwi422msRMEAHkUHmW1fxZ4vP2J5KzcsQbM4LAg5F4DbZB9Urs1F58F1m52QRr8BQmY",
  "key13": "3NAJ38FNSwHXfqmH7bGfo7zquZ3TjVMo5Wop5q9LbtqfmC9AZcubiwCzpRGXAAHjAtb3GrdKk4eYYyQNhcSudKey",
  "key14": "47Ce7wQvVLo22o1XYzhWQdZAPyUq73Kxe7SaX5Ty1j9byUwJKycajTFoqT3n48cG1kUMUYrW2epANGDVMsk3HjEq",
  "key15": "4JUUf9EP2m99onUgjyst8FfPofck95eHdp2z2PYB8GLtd1rHbdRYKmga2KLRXCLhXwKMXjW6DyaZ9QdFshEetqvE",
  "key16": "3Z6QEYu9cC8k5dwkpgRNBYkn8nbZiqoJ5Ps5TK5v2XqDRi5nvrBoRycvWq2zZvjCLdmiohbjXjxQgGEhXgr8dbq5",
  "key17": "2s15Qn5K2xZeuMuxQiXdRY6CtobmYdiBR79QkyqQZEzcau7CwFFAHKX2LBVqV2Z23mTot5WrrZ3a4HDFdig9udxp",
  "key18": "3oRbQ58FMytC2nf7Ad2BTFvSayYUAvzgzqcMjaANLAqRA5MMXU855kitEjPUcZ7RtzCSZb9eKeeTnU2gLEjziS13",
  "key19": "4vbSkioHvk51mKVRZ63CxLDSYY2f4qhjTKepVNdm5r2eNitgy7zRfkrt9bgdAXyBK3oM2E4eDooBNr1H54b8Q8ch",
  "key20": "59BNSrW5G8w3ZAqHSRVqfmSfeBDgiYvV3Xw8Fca6QDsc8CiEcCP2TAw7b54MtTJSRkrP7BmwaAEsbzmdwWyjCasj",
  "key21": "4wZV4Eag7b2zQaKbRDW3jgghTTDZznEpGsnFxVDCzFQYBr9npyoUymMnoj5BZe4MsQ9BJWcp4MwRZnHJP2Ywhshg",
  "key22": "542sJsC9oX3WFrZFeT5rkpobvbrzdzfqco5R3mYjCuatjMkNjFBLjojyEBhABQiZeCvHawiBhgj6KV26mioahb6f",
  "key23": "5YqRvswVBEbZjhX69pL2AQb6KyGgD2bVZVtRBxZq4xUx2FKUPmjPspUHoYf7GuAGVNPM1MrehvwoxNunrQm5Bva8",
  "key24": "4UCnQqQH6uxPYa682BgGLJgBcNqrWJcqRFDQbBspYhqtXkWm2VkXb2zFHHhUQQjo1YXPefZ2bwjB41ZoryKkXw9",
  "key25": "3WCLRovt7mRpm4EsAy3wKm5yubhEJJsfoP3RrDk27tw8uRgt5JquNrUStKr3y5D4rf8DJdQqupcjVbzU5XK9bFuq",
  "key26": "4cebwUJfzpHeviAygQtFhJa9ohDif3U88KNoTPwj3vbBdLejencT8fb6TEadEHPcTouDc6o4xTtp1rD1pi5qX3U7",
  "key27": "4MJuChbTzjYWbRsFkfF8MyKYCxxT8jin8acFLRRerTjUGK3mCHcbdkHkTcdHHwd42rzyNeT5STF52dXDABVG2btW",
  "key28": "GNGYAjFbT3W7JT21HTfzVGy94G2aGpg4KWg1mnPwTzm4xsA8mC7zDM5BKMGKtxMcynjReWBrdThWi38haKML9pi",
  "key29": "4ZPoFjKJDYirXDFGd9hF2bpiZ5sHyJXub49jMgTjcx1d5KPqbD7kxBR98MZdrGK93VAHvpQyTpiY984NSDQmCpZU",
  "key30": "4SPMTDfUev6mFKYtnjBLnxKJNbtnoP8WKtUy1AXSkHtmysrstD1yzB9NXQxbKsFZN4gZ9LqiP5J1kqixYe5G7W6x",
  "key31": "5NQdYDZ8Yrtd7h2qoSebtRRwZNR5ikiJRK1jvZ8D9Xg6EW3sZXGWeMgnAXbiuiLtXck5o19NbdvrwSq49yL8spPX",
  "key32": "BjqiMPc5kQoUxiVA6oMuh49GgcX71dWNhB2tTcbQj3aF88SUaPtz2tVDyweUZZGCoY8ayRqa5VAuG5gdd637Mfx",
  "key33": "3LBXJHeLhiGqdqxxbv7SQEBEfUxU95H6BvjbU3Y1DZMn27FF8J5mn4sw9Gfcz1MemB4VcD1btd7crXGx4MYfbMxH",
  "key34": "3Yuy7x5Pb7g3fJ1i4VCG9aZm2kA4r2jLgf4q7MjEvMgsnMV89WyQap8QuUA1MBcWjBCgMsAuc8oAuwqALYYcFz6g",
  "key35": "2tEg72JmwbJ88ytfgmJHrQyPrcTuqzLC8q6uWW8TKmUe9nmnB6qfHXm67He5KghFBoUSj6xv1RzafvjzcxA21x49",
  "key36": "5xnfXQdHxDjAPwc31it738ywXtBN96kWRz9EFMqgA51ZB3DJeQxj2o1tCupxjmjXkr9fjBktHsf9RYFtKT8CzYPt",
  "key37": "2fSw5ixcMdUmjK84FaeSsCCK5xTi2fZnHJt8m2KqSPJLwVg15DEQ6HbTyvbpNwisismskWTQVWRwmVxmLERp5wAv",
  "key38": "5Qg3DkYDnegv6JbxGDJXvz7nQKeSUPE6ff1r2W6neEXiXNcfFWv8jPLk6RJsaSDHGwK3NN1bfXyZw5XGK7MW9jt4",
  "key39": "3S95d6ySwz3GCJp9wT1s6NjG7Q95ZZ4ApSHtADVTzh9SQDscg3Q7GPskKAx1nRRYpiSFRMX1vTZVovKWAagqNzwS",
  "key40": "4nQWVzrLPebmuoM5hTBxqPS7qn7CzjFYcdvZe7TfzaS7yyQGwWBNCULHePcbFoMsBbVPs9eed4Ju6YWooJ6kVruj",
  "key41": "UFU26pASb7ar2JmZg6bdtZJUwC5EKzgp4Eo55zV3xhvRLg1DgghpUAoM9YJTd1hkkHtYW48K7mATBbyg6yiyEZp",
  "key42": "3C46toWSd5BNPi99ZG9xzCrXA7DdFUPc4w8LX3TQQ7oCZ63jTbP5xHDVPiXP6AuwH86Rc1b4L5NhNZNKQSuyh68a",
  "key43": "5nv5wLucvTHxd6e1VMTrR5DetGhRdZhQhSqDwNDWZpYGpWokSUzZxD2AymT6vmPa61RjjQNJj8zWRCDMQxh2VQyy",
  "key44": "3yCzJF2Gp2MKm8xrVMrJyWsuKSLruTbFvqjNyD9vxUHKE2pshUv3ahWhmeUny78eX2vEuNJSqebfSkFbJXxCDQg5"
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
