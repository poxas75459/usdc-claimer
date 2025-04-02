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
    "3ztHVbvpayArq17hdCDxA1HqbfehuJwryeqoWUdc6DmWGVPYxVXbrVPsGHLXM5cYE3AKz29RN3LZbCmwRbHDuYXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RfU6A8CWAC4LL7xrDcXnAjFzTbLGVjYg4rqqzNGhVd1DzLTGGh5M3uGSv4r5dPCMh14JTMJr3YcEtSsSsJBPahA",
  "key1": "4poPLCjYoyhXcqv7Fduwrtd32qbRbDTvMQnTspnYyQRnY6RsRrFLLrsPRek5BFz3QgWA6mgpQ7z8A1o6vRLPhMBu",
  "key2": "3oBBKn5ZGAKVHU3cozZ463tSAAtPwe43S8DygM5akup5WThTLG2fW7th6osAuevWLZgGKeLsQ61Mj8nSQ5NF8fgD",
  "key3": "467vQKjD7Ne9US3LUBaeN215ae2YR5XjyUBM7nuPtkQQdXwX2xw96ncoANSEz8G8KkP1LSg1jj9yZWZKPMEd8Bbc",
  "key4": "5vzvJsjPcpKmDtgPrF9Uj2jwW8n1kPs6b97wwf8n47NbQkGT36Pb2BuqMa79vcuh3WLSuhdHbjLLf3pkXsnvqKHM",
  "key5": "427uS7oQhVXnUXBizCa1LeENWeTpcDNX2uXaTpyCV3kGv1gQDZF9sZsUs4QNCfCJCPt5GYSaTaPDjU7L4vcdf3pw",
  "key6": "3xsfoSbB25bpneaX38akwkkD95eeZxNz5nmaXHTumxHuJzVxSoG99K2nqAApeJ1mMg1hjsLEHyMnF66fbJQLVpp8",
  "key7": "4FfFTZAUFUhNgGWssKAuQWbUUgaD4g2Ak4RQYt9WHaUjsNz2QP2opsvVSipeZwGzbiFQQhPfgcgbV2d9YxgzUCsU",
  "key8": "3iF8aKg34Djto8y7ChpruxLRbhrE4yFHKqc5spZGLwjFknVrVXbcUiyzJ6nTFLhHR1xTDB4hV9vTYfcjjDQXMcxN",
  "key9": "2V5bjN7SfwQFw6vUc6SP2csiyNVTdJDRUS81EHg1K2iJ9Gk2yAQ5o3Lnv335AUg4xKbHXaX3Xsjk7qNevHu9Wsyb",
  "key10": "4zHnp3w4eosK1mehTbaLD1rQ8ceUDFq7nRDimvWkbULkjDevMh3HYv3gdvzCsevvXtDMdqhK4QD481M1QdHaEu4",
  "key11": "24Xco5EV3v9cAe53yozBaZyaDo8hJ4ydmTgMnqbJhwV8FvY5Hk5goGPQK1UhvhfhgD1BGzH6myn2TdNFVJuQtLLo",
  "key12": "419fogiEA6ASmxsifukLR7g7tPYenRZtLhrrKshG2N31HqsojEoDiPZKkY5LbZ3885Jb2VkpSaJbNv765f2R1WzU",
  "key13": "2yjYZQPg5oP6tczr7GpreV6v2VpNTySdvzAuPPtXhYHkXri6XQVt6co6dw42585x1H1DzjejWcms2hzkWp1sWnGV",
  "key14": "4uFtV5bymp8j5ydjY24tHeMDseMYBp4AqGb3G6973H6EypRw5fypRLsi82hRCQBYee7MEdCeRa9aGjrRE22txdM3",
  "key15": "5jYn8MUoNEEquUKmiJKXS7HJxKVVteycwkH9yyRLGFzT9bSfHkpMiFJyiVAFWDmcFUwPztejPhmXGAeeiSh81rA3",
  "key16": "3JnhHaPEzmphG2k3pehssm69Qz7eXpGaPzPffFGvrFrJEgf6Li12dqdmaMAeGVTM2cn7cNfDmsNDbEHMaSVZrNia",
  "key17": "2QR6f9vhHSdXs7Yxe2dSfXNVsi9hDPu31fSc8gCjCbyrYg5QjXrtXVdePhstvfenCPEwubFf9yaAABydmXU5RwYg",
  "key18": "3AHcebRVJ3fKJSqbmVoWzyKuvpJXs4nDuismpxngwmMNqMm326BRfxTPDPQnkiXSpMrGFbF32xtcyNY8vPEqN55d",
  "key19": "hFAX3snratecDJF8YH6u6WQSgeHVuaSXbrYvrbCRqzAHL3fcJSVQ46jx23Q8XfReoFCMBSExhVh6TG7zUZaTuAK",
  "key20": "3HZXtoAyhqYaJGtJ93MUijwxhxwPGxjhKZHKXEFKRbpFzb52Va7sfZDtFFrTYNA1NkwdarcGydpNdRRQZijFdF7o",
  "key21": "3uunWjhSy1c6LmfVrzopd9mJScuxoHhysp2DgTNBY52ZnVBVhQETC3iyji4gX4Wmr36ZzLrR6mVhjKRf8DicfnWg",
  "key22": "4CqqyaLf9g314TuA1oUErW6qBH3N2PHMBQ9WE9P8CZP5fWibP5aF5iQ8Hd3C9DGK8BZ82Y8qnN33DtpiPuQ2MBJW",
  "key23": "2ve8SMbhwF27TVmf4NscFLqoN3aoM3ZAtNZMkZXi48EXH3e8S33yGt2NKwdFrEiw6t62cmkcK94oiPyy2tiyjCH9",
  "key24": "5CEX4PTJzkX3qir7fYjdxLFQq28pM3fxdvUiMoQCtEXSoMJyNkgKwkU6CxZpFj2Ta2HRxNqh77s94tEgs17sQBcM",
  "key25": "Wd81Co8w8Z9cYEDSpJ1kC2MyhsJJUVic2dGi9tAYTWFZPLhtPNqJyDDmDq4tEWwcfh3yzXo3sLTLUC1vzK9qwbo",
  "key26": "66Z6rxF44PRqPPVUdv11q8ZRoeRQyB46jX9hhmKvLMiDWBy4fxZ775We2NQ4CmvwhZHyUT84ekAaDN6rLV1viq8V",
  "key27": "5fGYzW2pomD9MHYmhH9B4AKXhbMAPYqF4d6CyR4kYaihWkStDPY8W1TmMSyosJjezWAePQ35TJHVxoZZtoF6VJwz",
  "key28": "4Z1CVNJHBLaKX939fyHH6GXgyRKfNCEPjnKZtuNkgeeMnAhM5Amd8toDs64SFHYtBHbqmyNLxyEWFanfJnpcFZT9",
  "key29": "4ayTb2GbTKYf41EGqDJ9qDzyiZd7DCsMTLwhZfYDWVdfxuvmUzDpSK9ZnLCYw9X4DryZdT5kPWLdwwMRS77h1d1a",
  "key30": "43qKeNuA9YGuyyvV9omznyhc7YqGfiMLgQB5Hq1PuYgu5d4dJofW86EJE1WdtNqPJdYzv1mPaW8GA8GtA9orTASM"
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
