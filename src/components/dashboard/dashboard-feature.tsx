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
    "5aQGhzp3riNZgYnAPtmCBzeKsJkUB6P9kQq1Xz1YSDrkyhET5z2v3e7Di9SbHE2jduXsnojZcKuogFez9dpyZqFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bg4XnqFq13hBzL6Qew4Xn4StqPcutoFLXF2Y7GKRjZEBEJZMpuuaDY7yGEdvAab2qntsqMu41HGCEAntd9xmaND",
  "key1": "23qEk4eELjiMzDUvGVbe3sNrhccPZuX8r8qwx3EEX8EhPKH2CdgHFmdAA8kJRMGeL3HahCVNXbj8qLTxRqyNxSc8",
  "key2": "MEibok2s7mL6YJwbQYsK6vCSbvHqPPoTJiUA8QyvFuHLxf6hspJWeLo7JPgEx3QpPFmRRYgqogcZiHsheSCsAoT",
  "key3": "122C5qGbCrLvdXn6iuTguqMi4tEpUDv1roR7Uz2hCST9MVKcLACsqWwij4TsRFgqPFcCtzWGB96VNAmLJxtTTzwJ",
  "key4": "4r9XQVVBzqyEx3TwP2EVps96Yrcu5LQ4VAabmmTexuWNXwVmJENN1RwPVqooMP95yjw6iBr123V8iqGo9eQinVFd",
  "key5": "545JysDSCYsg6r3amibyDhQZAQq468TCY18H3AMS1uXgyihKcMdHm7o7Gz4ZjY1CERJ9kMFXTohDHg4XgQ2WRxS",
  "key6": "2rTh5MgnFNSQCK27shzDku8qNgq3Ef1nfpiyNHrbivAHDT5CedwB56vL6dNvCkLQToRpaFopT7rKZZbFFUe7Py1E",
  "key7": "Cw8KweCQBwSpH1ZqPrXuKXkmYbxN2STCJqp2gBzZFD7Teo842yihdQFRrdqQEH9fQGKJ1p9at41tLRobtXZCD4q",
  "key8": "3ifJMJkXAtLTfvYH8bY4P4aXLiSCRsLXappAbsLx6ZBwYohbMeihLCcNLozicEAcGzGfR1s5ietQqXUrXEE4rBvL",
  "key9": "2dzQAx6NQ2NfgSdVmgqKRTLPEZgupL8qcieGKooiULqokfBJvJ7jPfb29Kzq3vVkkED49PQSdowZJW4fXRX5kMME",
  "key10": "3aExqBkdt1yEymtigKkBR5iHFCadrBetkpMcQYpxvE1juGYicCgPnBB2xtGciKtgV3jarcpRfctPx6htSbS39ZGc",
  "key11": "3ajeLre9dtdExhfzUd4zuPWuSjoiZjr7priPRUbmqvtKCTAcq78HkvTpP9u6yRnKuYKPyHeF3C2QWqsULCvDqDd5",
  "key12": "4jgTrGMcocFBNdaENhTQktuq2rpSguw5aME8V3NiuuBT3PKX2c3WiW92wncQwqkH5ips2EqBTxcyNmeCwnpyEwFe",
  "key13": "3t2J1RE5oaSgRAfpit3NvNQtxzNZ6aNheCoLKJPgaL8xtTETW53QxXLUrHxuSXyQqBwCt4xZi2NcfQZiN9c2jCL6",
  "key14": "5BdjJwfgrQoXZRRkRrcNMnodAafcNNeMF1i7a8Btwk4RoXgs7FMmBWu6hU6BzxcX16JNcz4zJkcuw8LCM1dCJvnU",
  "key15": "3xKYaSxbBY7CDBkSPYyA4EwVd9cxpVVA41gcTjxojjXykXjThM55rHgH7aUu8dBwiycSweE8EEhSfze9zHmqhktc",
  "key16": "63Q5tUm1KTgfLyhRud7fpJmTNeCNo1BQijUa6dpt1aGecatrLdfm6uN5d6DXLDaGy3qnRqHppqbcUR3Av3gvmVb1",
  "key17": "2g8u477atuc9N7XqCBzZGEw6VN5e1CCdrr9RZXpwkfVHo6zouXFLSrTL5Vy6RuWEsUadcC1hwg8fGFkvoTHRshJp",
  "key18": "65Vn2YkQ8LQv7scrbD7jnobNktrWpzg4ZY5L862vEpAPk8dHB4iK6C3Tr5fyJy4j8VdXAebWy9GPZ7odcP13H84J",
  "key19": "4K6FwpECJR1pjG2d4wftfjZeD79LAwAvLWGruqEeAvbRv6ULExqfLUayfvand49KMecxBVqprtxwupTm6bz1vCEN",
  "key20": "44hM9MF3uxphxtgVWrwDF2ZVVcqTE8NwbwrPQrjz65vPPgMcLVAqRpm5qrbr7CwvxdL77Xec7XKpzZRxuKoxwy3e",
  "key21": "K1Wf4xgASCmo8epToXndLBsxQ4FyWdq551QDeMuisdMScBGRbJRMwcNArfRNNpqzKLy8aiduSD1qrHdqGxTszWG",
  "key22": "2FLHqAgJKEUHgxkBumgqPiifcmMX4FmDXRrUHv1YgBC2ohL8D8L28fojSmYn1GDrbLhXWqs3CJ2Wi6Kmo9LkJDJb",
  "key23": "4bBhEWm6HxV6PAvookoF5Gm1jjpngweZW1Qn7buSJpdhm12ZYEeZ35XFLDRf5Sg8KGW6FZQ1Gge83p5EyC8V5KPV",
  "key24": "2QyfhnLk3AnaukYzmfTfWFcJpNmrCJLjLdfgTzbjnBXyJGt4SYKxJNrpzroQNWXTopsmsj5VsjMgDjSqbFn7MeWG",
  "key25": "4sTBnWoi5zR3Pk8cgyEPm8iF1y2rh5iUgbEByQjroVBh63gyQ37wc1QYGsD6a8x3EFggjKRiE25w6KgyQGLFwgCK",
  "key26": "cHBrtkbWeYVMpJoGG7aKqHLr4A2DjVgLCEnupwove1qbEUEY4uAZ8BBfobqsMqzM95HQkVkVyFpWeCqvqo3gHFG",
  "key27": "43Xma7q9QqLAMGXBTjpD7mqRRQWix3v2vwppthtScb6MMDtVsSEUo8V8oFdUQnm8oPsJroLuy1rjgbgPK9ecaFm",
  "key28": "oiud9kUoW6AsQyWYN19bBDmQbDUoj5YZPmw4raqkC8GuoJq8ievn7teWwtzseZKru75mJ74Lzvjkw7zRtjrrKdo",
  "key29": "2CUVJBAMCnR9ks2WACQDHF7suixL84bfd7McYwtCa4MbnEAkkU3jTUuUz1gfGPKJ83szyDxBpyUTigbfPocjKETt",
  "key30": "5Zp9U938wGd7W5v7aevYUz7NDwZ4RpKTG8NzssjV1BsuCmmYmnPuSLBuAs5m9hYzfEeoB1GXouvEv84ohmHTETZp",
  "key31": "4bchAW984rbNufYqNLx8YMHw6zvE2M1hotSPm4vLeq8TjPChvscfTwBGn9sbg4ZUe2Tn9ox9UQxLZDpKmz86VX7H",
  "key32": "4wiz3cpFKvauSrtoxTnmFmAHuYDPvc6L8inmcUegpoaMmNeTwnmU1xhzRWP5wJxSEe25bfD9x5ieqNmzGW8c1fM6",
  "key33": "53qkQXFKELc7r8MMS9T4pn6EmkNm5VdxAvGfHkB8dXdDB4f5FQHrN5Yu82k5rMSa2czFTW4YmdWphoN1ng9btsiA",
  "key34": "dd6ZnmdFHWVGd2h5TWG73Sho2mYjamZLCJRZHkNE7MzA2jBYWo2UcR2gAouLP2UyU6wyi2PBjx7tWyhEMFuw74z",
  "key35": "4V5zs9BjgP3uyQuL8C1PYjZPHQZFPy9u5PLEZvsHTJTMQKnWL4pTGQFAYAqi3r1fphWwaRC1nLpTBWb7u9Sd2Hu",
  "key36": "3adk69acNYE8XKXGNfn9ZRRUctbgpjWGmy8P8hrYAqEMqhc9rGxJNTE8DXmTnL32VxveZTeusLFTLxyUQH7B169Y",
  "key37": "5s2J2avyatFfQhrSuDz3fX6pahveYYtk1X6H3spz1hTPxyScCLRT2xCq4fKyfbbAvUtjSyhNN9SaCvvdMuTw7CPe",
  "key38": "4tf1tiZ5J66X7xPe39jokT1Ue9G6dZP95ywju7aFRAnSDncfQovhiLvTGWi5CcPBmuJBAATM8U1jwUG121jb46f6",
  "key39": "5bCaCGN96ueybeGURCTQEaYMJSTmbBw2EaDZFXQqYA2sNxPRcBgZq4VY2o6r6io9i4G28pfCWTEjZ7eJrWtfpjNt",
  "key40": "2ERStRUVHNJjAyT6Sw6enUsQurJA7A4c1pbL2Cq2XLMm8h95NbGwEx7tmC8Y8pTcqkN89NAdWxs9xxTU2pqFZW4w",
  "key41": "537bGdnSYp7zh6XWXq7T2xLFUG4cUeuznJwjxvgPm5cDUCypTUNSDWhBdzToieeyvWTiTj2CaLcYmnZ1SE6Wrzvf"
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
