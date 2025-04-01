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
    "5hc4YTGr713nMwx4Xuon5dnnDefeN5cbV2UtR5zQhgMsA8qgMvpe5FGTpanQtccsVvEGgSTvLQRfn48UwLn9aZi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1tPiuC4JvERXxM3SZRyGhz2N8XD7Vt6UEiAtARMsADapMYRh9sgdgWdUhAptWjHodM2mZb2KYjM1htj7UvNN1x",
  "key1": "51StW1edxTJRGNaZy5K4NM7HKqc1LRrZQWxmCEJvpX9woHvSfmUDHZipTySswkdpzwJhGEaBW8utneXwM9piQS3b",
  "key2": "5qN22HatHX9M89D4yzMCWMcEjKf1TFw9nrkHqiSZyKKGdDHuph8bT3juQxBe4fEn5vMuNS9hfM3nVMQk63MnptGX",
  "key3": "5DyhGHvgW11jNMN4uYvLmuZ6mMP4uWtGeDsLgJCE7XxY9mUMbzpiiE2turKMd1PCZkQmMWnzzYLjiKgh41YBtiXH",
  "key4": "vwJSeqKBTy3HwSwCTZ43n2Dnuj9RKVNzVAuC5fUcsPB8M4vs5Kg6H6QtoXtdXah7pzvXjymbfhtdiu1jyeH4zii",
  "key5": "5Ev258SjzPUVvqnVtqu3Y8K6CGiATJQbMHH212MmaytVwBWqbQDSbHJvJgakC6B6azp15L63BpSFbfEvmLwHTgMH",
  "key6": "Ng58fXVy91AgzKX5c89SJFEHc4SghN8jxAouctEKhp1JuvDaeocv8sSSCwJTc7S5qvhwvTqZZfaFPjF1pBuaxhG",
  "key7": "2bwbMtkpoGCwiesHzJvu2793Q2G3BwHBaM7r8pmBiNj4aeWiqDxt8f2v52vYrHEz7Yv7UrM5zthFyKogKrjWbXj5",
  "key8": "585RsTrTrf2WWV2a2kKMiBnSBnBGTaEqtDoFUVKWW3akqqkcrvAU2Ar78RLgrSgZB3GXB4UwP1d7TmrnJeiHj3dA",
  "key9": "3zvDkKcoyLhbzNXJsN6H8ysniUUuoTGjAenexv2u6seykFnKDn6x1TggeF5iAix8gTu6EQ5CprgmLDsGgEZVqjB9",
  "key10": "4BLNtYjrPzCkGRZQ3hvXsL779usDFChcnCN5YdDNnihjUMbtqixSXf6WaDkfbVf1EAj3E9Uw9AzFcSSGVVpLYGXU",
  "key11": "2PDAbJQPYNyg2BRtSWJCwgsfq8gkNLEZn86ke8eMLuZArhj7qMEtTwcezna1k8G2jdYimw3P1AZFLNzNszzhvt1v",
  "key12": "5dvmfKDGmSX32t3ax3hbz9xd6HFDgRBBHBtty5JgUvsHAq16zrexsprYrLn3B5yyF1k8pQGN8NWtGUZwTppDjeZT",
  "key13": "jGXRSUK9EwxnG8WRnzHZZqY3yc1KdGjzg5pKHBdXq1aStB5RVCSsnCFUdy4vRsKpi7dJ2vc1jt9qZSb5TNuFPML",
  "key14": "48mETzNmEgKAhDvws3ARmdUN7dTT8fhuUQg6JbMcmcCD1bVznSss3UAwcAizN4iTJC8ekzAYdAuZWtPD6Sm3TLuw",
  "key15": "3amqrUPCZ7L5sFXiAUstf8BVN3H9MdVFdq89ygR6X9bCUHRjzZ9uh53KtcSuDx1G5RL2txQaEAnXDgxiU54XAD7A",
  "key16": "5P5Kgt4y5ES3uiGCkTYJrC7XvhvhkyGDY1FB2Mr686WjwPrTmLU4eLJ86A8Qrth995bZC7fXSRyeVc4sS39Q6XpJ",
  "key17": "DEHk5HmQpAaadoSLQYUkzwwLnkdPrSkZMcNcaMu4Z42BHArCbD9bCNa5AMCdBK62CcxRFCFEvD34HgwgCpg56ex",
  "key18": "4UwgFgc4b5TTTfonY4ndtB59BTqnUUHgVXgd9C1vh8N9ZP3C4E9DTCARwB1dtwnoWfELBmfTrVWBxsRCS5B25Zzu",
  "key19": "XBa7o7CP3BXjPJqtBr2PEFMyCXSQ9WUBxjUWfKqt9qRXxrkLN8HWUJbXLrGxcGcQNzbMtp1XeKn3zzTs4n9mauT",
  "key20": "2kWT5nsvKZpgtwvvRDfgMiHCj5GGikzng6DctguxvgoWL7rN74KBdMFstJpVJe5dzd2jg9PLSjLxq7VeM7B3eKFh",
  "key21": "2eePTJ3StqzwV8vU11nbQq9N5X3pfBu9ZKVu5Kkwh9CoHMuBz92uqVXr1RVETaFfr6n2Mo2Vv2qJ5rKYkQEeQqb7",
  "key22": "c6jpjCkrJnC7DXUXLLwKwqdAtiweqJtdU2ZiHNtZgfRqFHerLGKo2XQ51Z52D9JHZWHhzXzMtGYpRgHxFG73yB5",
  "key23": "4p4WhAuS9P6MDUDASXGZHuZ8QoJFSxfiX1SkeJtyE2WTnfkyMYw9VpteAR9QAAqksxYsnePzNDYjpxmN75dvCGKB",
  "key24": "2P3duUzWWJ781FHuzadDnb1q9gNLdeLiJqJ8V5TwTGNo4MHS5hEZSouG4tMt2p76e39UXg7mJKgsU5f6DpxM6e1d",
  "key25": "4cZjHJRq2rEpKsQHbH81kgxtfs46xWG3JuVvdBXpRgxncQcJuhDormQssV1wiNMWJtbYjgcZK7HL3LAg9vqzb47B",
  "key26": "3TcBFZFMW44r1WNnCcnKZQwXize7KaG25caMnEmoR9ktDPCPM7k16qZjKFXAnuGXEigXe1A14TCSTsUWzaZ2PWRq",
  "key27": "3pkNZ96r2vhfMJDUz26BVXdL99VrWmrTETLYb7GCzDt2JWPv4spGZGjCH1MDMyQL869V7jMrZdsgCGxm5H8wUpyV",
  "key28": "62KsEHQgMjHiPbRD7twwvTPE6VwCEkZqiQnHHxKH2q1c46XoLatwyFu5SrxHGvYgzVzhCD1mKJMN7ExVD71g6DgR",
  "key29": "2W5HN3BrSX9ScY8CSBzhACm5oyCyjVsmJFLe51S2AEGfGtdCtreUQi75W87JwPi1YRbx9S6vAeKcy7FgDKQKwkyh",
  "key30": "5pz8CeySBqCw7cd3rRaH6hwQeMFepYAWd3Z9DbVys3Yzt6eHc1eKfsgFYcD82Agf9DrtDAsY2QbWniXaF97nLSwc",
  "key31": "3i5faBZNgNf1n8GHPTaJeUuQBRtR9jnCBDwtxRjV4CdJ1257JmU5eZj7yH9dzuhakYHDHaWF4nxAdfWme1hfqcSy",
  "key32": "3X8uRk9YAyMK4pgpe39RM7d4fuBhAs1KESAWG9jk3pa7Rj36vjQQzaVpxjWLWUHcY63DjjY8eH1JeK4GHNpjEQpS",
  "key33": "TJDysGkvJmdKwTaA19QaA2fUHbufo5MoEWgYuPx2uxYTp8LUYg7ardin4bUM3hGpdKNty8oKJYdJk2kX1xHFSnM"
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
