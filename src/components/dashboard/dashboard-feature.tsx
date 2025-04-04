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
    "GuUDzbiwp8oMsHMVYsA3W9fZ1UhirVFd3Ft5bbiNxEgknnstz3Ys77z5Hdv4wgpAvhs1RkxTV5xYDt5LSy5PN4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3YLvTErvP9JeUn4eGrX3fSLba4AxTZQEoaxkMiKmzhUvz3aHFsjx8zcPuCqHwvkBpRKX45QqNUVQvnsk4CTwoC",
  "key1": "v41iFdAocsKedWsvZdo4e7TYXsztqdZcr2EYYa1Y4j3EEmajFc4J36VcUivZ79k51WnhJHyZZZPgmmkC8AHtM9c",
  "key2": "mhqFCuEik3RFofxUvDFvWeYQXfmwtowv2VKQP3bRYcpBWG2Fm2jxrTo3zLLWuoVzhLJnAwcBDrcoDsYioMrDu4W",
  "key3": "VLdVkVbvt4GoypTxTqKfxvhvtvaFtacSWy1hBJxcNr6N1DF6GHdFYejkFiBsVMuDFA1g3XmMCshvccfEfnGKU2X",
  "key4": "3uxmZd6EdVfSFxpFS1Sy2Uokx35wLKiSQm35UU3GD5MQF8B4wfV99sfXFHUgEuQ4omHVKiDTRms6dew5yBXgs2fp",
  "key5": "2CNcwRXJWf89nZCxkXGcgfnkr4jNkD5GNASm1M66nmHbU7coirPX5oHCfjd3JTErfnpKAwxAtwFqXdMW9dL6DWyz",
  "key6": "vFEVQ647pPkaCKJbqSLrd6AHx96PM31cdzSDZ3fR1i55Rzu7pPwjC4BrbG8MaYLVsYjcyTRy9BfmcMbnLBMdA22",
  "key7": "4sVMKeKcsoMamnjGRopokd8oaU8uEGJqTNeqAXqV3Ln6sYBPRUYLv4qhBahm6pM63fPt4V7dbyMFnGnSTNMtbALc",
  "key8": "3SKXhhR41hGhKM5RRKjHtCTrfJi4wMRFDwjKsjnjMTxKeVnS14j37oikQCdwXoxAmdBdHdtjNRqUmfzrgBDjfnzE",
  "key9": "4Mi8RAtfYhwkpKhqC19Z3Loog8eu1h2SCpNNM2Cxg7fTBYL8nEc5Bfd6oBPhvww9WucVyqd9b9Cpxx9efuRZn7of",
  "key10": "mHCkD4xisfcyPSCtDtboohnZYped49cGyhG2ooLrTbTe9uHUkpQKPZP7bDPQbBBPaN7jGbQuRjoxPwNvKuVfYXw",
  "key11": "5NipzF17WSenPguxxDe1UvTPZYQrqBbCR55ZZ4ope5rpWKf7Ki65nV9gsCyYBvGJMecwcxF4fwMxXUH6LRe8PdwM",
  "key12": "2JyxEBva3kkYw1Q7U6pt5F5nNFwaKM728m2CkQN9YVvHAmi2e5G9wDGSZu77v94P2HX1Seg6snMGFzmphrQUXNbr",
  "key13": "5kWA2B8Hv2iXMed7mn3hNcuCrgfGf9e9Rxp3xDe4cytxaGX8RyaZXUrr12NGsV3ciKVHWRpNPdZ9bEDVqTa5qRdC",
  "key14": "2nmde751eb8kC1ih3ZNX1uGzBEgo4UcH6Y2B4Bty9KJ3v8QQ1nmC3bHvyxsumEScPVEPEVCVaQX9mGwfTY5TwVWk",
  "key15": "4dmYjYDgzCYWmBs75jwWqBxE3rhFPPBoSDCdrupEsU3x6nPf5sMM9p7dcG5TVD8jfwrzoG3b3CAEJTQt7hHZLCgx",
  "key16": "56CJTLqJEn5SprqrfP2tySatzQTYrKVDNkQrw5FXm3uaBgDwqq4rZ6Vvdhw5PThnAEhqaiHfdpZ4kunyC8UzBuDP",
  "key17": "4n5SUG7oqbpsnEkGxcxRw7ggAa6GPvQikCPhDn515XfMyEZdLXU1DNQzhxhY3FitzNpAzshzCoR6j7jMyngCNo8D",
  "key18": "4bYxhD3gJyMg56qVEbkWVp8Bj1Kuh6ozT5nq8NF6vhj6jZzoWZqmHjeE5zUrn72LtqsF3PzeTjP3BCiFDXZ54GSN",
  "key19": "65fv5g9WipFCS1oTx1P8E9ciusToiqKbCqWjJF8Ni7KrNHeDn6qhwZA53Tj2dEZ21YdXKXRQp1PAAZwrCDfA5hQc",
  "key20": "3xFQP4W4wnu7jYTzDgvXejxo2GeCoKcNTFA6FzgN1ApV3NhbDEvNxxLo6vwve3kk8fJeKCkxQmoZ9Je9Uu4GrXkm",
  "key21": "5CNimqHaxCE7K6BJJSmUmjZvr22ndTAtaxUum1SouVqNoz27tU5sHm1XPimPrRkqQWhXMMYz1pq7sLQzgCL3m896",
  "key22": "5QMUUoLUpRXaWdyn4MzMiDgeM4UCLpJgLE6HUPGTpK83BZhLqhP16w5khZ52iVmHaeHEY4xnm6UBUhFKcokSwKZe",
  "key23": "4M1DSt1vgY7wt4crmwtqhAK2Q4YfS8Tc1BRDo7RppRAGfPGctrBX5vAj85m5orQdLzP38ogvKJEzTrBKPShDMNtX",
  "key24": "2FHGmGzyQAnU2zWmyakj8mtZUASMYfWCy7nKQR1HqZAMczbUzwygyRzUokaANQHqDno9EPmGY8F6DG3M1SBimkN2",
  "key25": "bMzVGApbWsJixHpMT9QXaHzYXRKAafrnYsL5XFRqXzKxnUZqMynvbbDb6JPhcLNNJCLoHzzAaLnjhkkzM5MnZCa",
  "key26": "4bRg9mqourmjynrQqR3CscDamUzTnb1j24k4ugU8mhSLUTyqcfRsDmGpu73n3VcgNGicEpjNov9sMaeJkvTWrpLr",
  "key27": "64VpG1RwkmPXy7pZwddeBoYDBR9DnqKGRvt1hYTvP2FLhrVej81NQiYqc18a1rgNB4pYNxWmLg6GmqGWpUJTpHU9",
  "key28": "2zTTwTXqJJvv74px5VfzktQSox75Qed8BGsZbkfXBXPzqJUX7dG17m9mf17NTTUca8cQ9Dm4Vake2PSXUNCi5PC4",
  "key29": "5dCWTVPK4q2Tx49aRAZMt8zY2UD2s1biTjHTas6DtZBPGUhZhHg3dXkJT1kfEPd6v2XyYXNvQdYimYxNeyNsPtuk",
  "key30": "2iwHdB3MaoGR5SZFWuomuwdTLDYLnHA8aDZxxxjkTKTZwxJ8EtAycmk3DdqNRgi4h4FRk4rjKDCu3cqbcnf2C33C",
  "key31": "3DVVDVw7oxuLM1jmoJcaf8UmYF3aF3EGqx69wuJuKNhCUW5cnotwMNBnEaxS5qXgSeeowdag7Fhc9j4Bj7Fr2Gvo",
  "key32": "4yPnu2ArzLTNSptGaTwjNMu7joGShqyvcKEFGvdTipHopuEaaGdgA1DRN3kDPCY5cgqAQuVsgzYfyCtGn3JyF74R",
  "key33": "5EQRdojFCKEEdbQiMxr4s1cDhM5QNaZdNmBH3FqzjdAcFb5ymhiSW9wjPnKpnPjUvXbDhcmVsq1N9eC4ezN1QtaQ",
  "key34": "5UApCwH5QC85rg77AnvKxwj6ZipzodWrsJ4kWSVru1rVxhVjFtPiZ33gRrJoHAkTtQYKk1V4F4ymohFVowN7uZdz",
  "key35": "4PCyg8j3srQPCsADrPsfaTvWw9pgaQ4x3YY6Z4yCuz3zzRNAzRCz4evXLftQgQijr1ttvDuqwcP1VC8p4iSJrj3Y",
  "key36": "3bGzsMamnpe1Tq4EqUHCZfRyNU87jvrtvFNRDEd5aPV164DKManLrPN3eN1Goe3GoTA6Y2KNZuVVUj2rk3yj8Wm3",
  "key37": "3vkafH7KGrwgVgCsC2kpHJNHNDhi5ifd6hA8cy7j3U5iHtvEtrLrP141MQQKCdiF4SpDTXyPZwhhjP5AWXzrHQU",
  "key38": "4bbHugbjE4SeG6kY4F2JUWvEmrY85ib9kh6iXjKEsci7dtLBjLsK6swEepoPBZAHCetJYCXfkSruncAYZkKZXvjc",
  "key39": "3qeASXqQtuYEtpzWmJfoMTCNNp5ma96nMHV68CukQdBx74FqUNPyZJFaVrKwxfhL9mwze4pW5VGXsjJFtaM3H15h"
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
