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
    "3Ns6jRjE98um6SmU3kKuowsfqJa9CaXw65EUWHCpa6sX35Dt9XB3s982g7yHC9kH5JALTdhnwCHJQmiHue63qDft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oY41TXLC4nUuN7cZYE8NuxnmqiY5ZA3nTZovtFKuZkbYpxZYBWTsVF41mWFhTXykRWpBYYxzVmb7VG6YvYyn8yN",
  "key1": "5vpLDRco3KqnBpoFtPZUMNGQ3QQFUTHXrcQR4cjHVzyvPQQnKi71kHhXLuhJbtDzZJLLByKxQoWKdAzdURRzXprj",
  "key2": "qJ5US225rJdcytgcoN7PWa6UcWFVSzXWumyQAbcqu9QKiGNC4PBpvqqnqWFix8RSCMKBYT74oyeajTrX1nXLdeV",
  "key3": "5wHtqiyjHom8PX1wPy8pDEH5RdoXYoqX3NgvzorrkRePQayMNZrzUpLUCcx9GzvmEYqV8oPyZYWHJY9E5Wii5qj8",
  "key4": "exapgJMg6hLHCXiBSAkTar9t6D5SitB7paNgFi76xL22at6U7i8jQkQEWVkFjMRzrJUj7TUMNgtYMTF8Sk4Edko",
  "key5": "4HKFPkTzNvzfqQtsAEaEzM1PMYS8gDDS1ivFDhkwvUci37V1UBXR28wdoKB2hs1vG9VrqLYKThS1NMTNUPvjqPnp",
  "key6": "4qFDAZcmxhYGEVKuhGbqb32rHsfaVirjDn22EBEaKNZRJp3jV13gygCkyz1U1a8tjWumDCaSvBgiEsFAm7s1VQ3T",
  "key7": "5QnCakj5A2gg8rMaiFo4TabSR7b2pY7yhYCxxRoPiEuQiyGMCyoFQftMNYNvicUH3q2jBAhq6R41BQ9mxbmirx81",
  "key8": "v2gyNTUuabWJmigtYqJmFP1Hqqf2XHcnS3cN8mBJXs4gi7ttKzb1QygFNjEJR9f9jbSGBukEM3mEbJ3sSA8k8aj",
  "key9": "2UMHWF2vDwCAFiD9r1txox7Wxddd3zv4MCjmt7roxDeHdZxqemEXZC3LxHnVABYczG8nioYMCjA1MoqgGrntzV2",
  "key10": "4JxQUF56zxW24UoUdyBnfFGMWvWDbKnMMDqQR5Ksaww6dR3Q17B99JnPQQUByJt3JjZcCyPHQYsMn1FeAjREKS5v",
  "key11": "c2L7Mi3tBEqZqLU8vWiDzRw8CzZKmv8244UUUZwgXWoJXCYkXbhiVfHnDJERFi4DzhM2pagbqz1GbiYJwTBnbyo",
  "key12": "2FvmGHE3ffKtzDKNUHweNddfKPD22qUm5JUoEubo2nPUBPq5ZTfdvtd9XUsVeRUmfPfAWmymmQtogZd6rL4NdAP1",
  "key13": "3bmv1sb1MpDxCHj9Q3A43peGSnYXsDUh2HdKmqNEBu5jnQSxPviYwgabQJrNnVASMao8rP9imKjQaztQkMgDtL3C",
  "key14": "5oF7ia8DARwdqgpFHy3qXj1kcJxUBKwvpz5UJQVJ3RkQFKLqQcknhMPH36LMjwQBUuR2uZ8Yd7gdL3nUUmmsLWvz",
  "key15": "3Fv6DM45NMLtT3qpqWgLuQkd1gGGq3N2wru4ZBNKsqYd9ESnqMy2UDb45nmh84Pjw7TyBb4mcAviwufnnBCnYWyf",
  "key16": "5XEQSfasYL7x1jhTLQm8PX5feNy5xkGT972PwY7p2RYHiPJMtGWww3JSHNHCLuhqLGtaTSPJ3W3gw6zHYg2pjKMa",
  "key17": "5zMEvHFMG61AJaoW3KnUV5o89gaAP6t44z5dE9i1zDyR2druCkgj5KYbFwCuLgxtuFG6UR4PppF8FUzksZ3XLjq4",
  "key18": "5LPcmx6DLL4ZjtLXdRKPJNdDJ2FdjQN2GQ5457mAz9ZAzhZeP22MrEGFxqsBG55rYwzpWcoVpzrSYPZmysfLC6Cg",
  "key19": "5uh6UZddnSmjcCZYyZ8YLhfsFkzaoAGnsBuGjNPs5ZT8wrezRc7A75vPckW2qp3cqLfc3A5ZK9HgbsKo4dNNXZY5",
  "key20": "2R2eqk9ixMg71D8j6MVXBRnxTfCfh82Tb3U27CxA2Sa2sj8teB3kkuCsejmj5hGz6vo4AEac6QW3146ADXyZ4dWE",
  "key21": "33rM2WnvcffKcqL9jV9uXYWqfRYUgpG9JdBkj5j8AEYUHsCVfFnr9Sn5M5MGtePmcfTCWezQ23aFbZNQiReurCYq",
  "key22": "39eQE2wi7Qfdk9rXrSJFJaKN9uQk4egeUWtMRQ7PGQ6NCJwD9cFbMN8RzcS2y34S2zNWknrz1wYVga2HJCrcw3kZ",
  "key23": "4cwmnSC9CGiVLLeVwXJeHiJcwA5h4FTnvG4QammuF1irJTc1QbCZ4eMpnaxG9BfPEhRLQjn9gFJddMHRXmNFxeNJ",
  "key24": "67hY9bDrTYpbDt5fXojbs2caQ8Lfyr8SMHEG9JLiVPGR85np62GgmF6sk7kuyL7tG51Eqj1EREZhWuFUMLX7e6i1",
  "key25": "4pTfawpR5iCN7XUmjDaCAtUUTFc76eZRcPeWFLg233G9Lk9drN54RxjaYVgDhFzjHk5dEQSVYV5PNpo7jCKbZ7g4",
  "key26": "4fKDPrBeNN9VwcuzZn1UAxMUr6rh3HE9BG2S7pG7L1AxNnoAmYSpyb7iCksgpU6VP5TnbmvEuzuRveBbA7cP9xr4",
  "key27": "MoX6eneikvNvfpX6mEzBaT79L3q7ZXgRv7LM1bvShQNBwM87n9p37ZWaGgSYNtvvJ9yAg9hLMmrC3MCcvFZYzcb",
  "key28": "pkmfpS4CPJyKi7ktsNrFHsPrVLek2fGVJ97PnefnFHM9jL3CaYAiVXmiZmJBUngRMKe7cR9aohUY5eiEaiUhfr1",
  "key29": "Qxr5XDkXDD58fwBjUPEYmtKV5vmHLmNkh1cfDtPYGtyCzbF2fGty5YbuTAqEyGfAxUQLq8SSTEv4SPg3bE1iRnN"
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
