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
    "3te1EoWF6pTNGDYxamAHJWJWvTo48wanop44cUQrDvCWQb1WZiHLYx98nVSBJBbAZ5tMYp8WY6hDcfaLoCcihJTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkxeGQ7NLG4n2aChnJWJUWUNgi257VGBh9K1UGwvBSVjAChRZcfMBjjqbkvGxnrXDLUGBdkkjW75pKx5ytbFLzH",
  "key1": "3YETSiCmLmRt2vRSWZSbHXK7LtL6B8TJHmULPAKtvduWuE5J3NTyyKG1yYDBRPoHsTQGD7D8sQ4dGFRbvPSdXpuW",
  "key2": "3uZYTqqNxP7wCXWgT1WmwHv8WniXZo8Cv4LGvrFUeNWiXVbr3bsFjwrt5M6hQyFajHMm6QPiizAGNw6vHbD8Eg9D",
  "key3": "3C11b9WchH4T1h6h2fs6saU8WDGSHpHX13Vwn7oeYxgckYPTHGJhhJhqX1sZSqLNG9AUrRsDLqPhsQWBzZuk59av",
  "key4": "Eo4PhkMkD8yLH69FUwjFKRpcLcQq2RXCu9VAQyWYHCoYxyfweynmkKJhvuadpX9DEmeb2L8mPyNLJaZfrmd2hcd",
  "key5": "43GMMACkvGePiFQ5Nf1LFbqUzNtLiuytdXSahgkUn27UccAqYawACvaK4t1rUcdNABXw6srv2mjeA7EeUsmQkeQR",
  "key6": "AZWcSMwsvjpQWzBdatu34vBqLPNXn6Zhx5KiwtXN7ZKpLsDbVJQTqGbkdyN5idSdV1drb5Z63DsXFMm5VjXB3R9",
  "key7": "3vg9HLNrzPRpKxY4AVztmDmGhddnZajiFQXyyE9RBvkvPqC3EbuJ9cQNQrvPa7ZgfC7NtMfeCd1Hxw8cNgur1uSi",
  "key8": "38mijLQMR5cBCJ2oGDiU9DPTRGrBQWTN8VsveRJ71g2Y3yiPs65FvjuJAndBApBuPbvitnFec8pDFhFDZWyvLGts",
  "key9": "5Rryy62sEuf4yTyeWJDGviAVyBFXdKXW2hnzdVs9fKxJM7okfARccHLyf84MhaLuCXZvF4UVMoXXrZx5nc3bvXPa",
  "key10": "3gjy5X9fCKKPF7u6PezNdatXvg6Rwe73L7GwXCYJrNAYMW1LzbMgdDmceYLBgAgGq7Z8KSqeDW5h1cZLz1SidgSB",
  "key11": "3bdvxKPzczAMeCFx8W7fZqfX4NDREJaZYRLmmcmiw31EjUHjmsScSnQNjYkjw5HPNf5vAXWnwP2TXpZ1ziq9Tnsy",
  "key12": "5MNe6KX2rzoaxdYjBEqsihhaeebpBF83XnR8bgCaPeBHFHb37NtcC1wPoXgX29DK3FETCNbuhtKNDEZxe2U4ZDRv",
  "key13": "DoqTZshxA2gojRrVRUgsH3mrPJUVyVJxm2vRqNkQsjZ82X1umsM6jRePMevyucvo9M1D385jKZqC6VJ1rr1GbcA",
  "key14": "yVRSKNzirYEE6UNGsbSHujXMRSqzsXKcQRdc12CRVQShJgbUSiUgoqFC5NEu7kvBUSY9ZteiaUWCz2N4pBmdSM2",
  "key15": "dFpRgSHhABaQJ93vy34w7G84BUXq1Jf6yh82fzRnVQtWw31oVjdWKCK4FRDKXFDTuHsaow6kwsWxessdG1TywFG",
  "key16": "2JTUkYn361ycvVCZEV1cs4fk8EyQoKRdn1YziismbRyr3m7RBPUmwqPSLrKHtVHbB5kAiJbA3jAPj3qLBUvBqfiY",
  "key17": "4FrQf39RoU5ad5z5c8AXgZ4v1JqGNus1NbC8n7xRifXKkk5ACzkpqQpcQhYUconRJSj9uiYDD1hy9uckneDi3eaJ",
  "key18": "4kkDFqkcVjegLfxTyXV9wNsYdSR35uyUwY2UK3rjUJEPWi4JYzCTpXhTHRdjjfHZZKr5MumgkjCjNoprCXRRHN7e",
  "key19": "5kD43iu61PJwUTb8kugdFawp5xhU8LMrvtnd8bUM4BNC8WSATRDZLaFUorVzxaNnz1oQtfGENTBfsP1igjKez52h",
  "key20": "27FqCBCWBTCmkhXk4XFENabrGPngdiR8i39uMeZvgqnJDhJTeveoprGgwxahx6M6FNvjmrJEnuwbxSRyaB8DxTSd",
  "key21": "Dw21xZWRxyxwVGA6nyxmQ7feVQKbe7ZeGQb6EoimRYYqzSN7GCj4BDbvQC4MduD2eTuo6urHGXZAAxR596iqmvC",
  "key22": "58MjvmXNG45hxbP8jaDEY2sQdxAnqUdN2K1Rov2M2vLkQSC5Xo17LuVddaaSkf3moWevch5MsiZxPDD2Yw3jcEY",
  "key23": "4LLmXMvNawzRyqR7Cmr1w6wRfTaYdjxAXcixe1Q9q7uTUTcQz26eFd6RYMSHphrUrK5JwNK5z95tcY7hVNbzTmts",
  "key24": "4pycH7cXm7WrkhtKSM8RLovHV12D9CGh81o7ffNkd2yKDsG2jFwQRMv4RRGuLNpKeS3mNz82VbDdQ5GB52Djo1YX",
  "key25": "2ViPDXwLU7fWAiDSURzZPFZ9TaXSZzVhFQXZqLacJiv4t77xjf2pW4zka3kzwwRaRqHM1ZthbWE1reRuCqaxb6nS",
  "key26": "3tzC2gyUeS7xY3Fd5NMtU3rbbhmt7XRQJSu9iW3aEBCyZuYGBZm5rWAFvBLR6QgHbv7zPs4rRVKqQydRK5Potn7Q",
  "key27": "5qdYWuc92LHW8MnPPsSJxyMhGMwTjpCiwQUuDhErgwhNou47d3WpwqLy429Bi5DjHZm8zJr4QXjnNUZakh2QaBMk",
  "key28": "2hfN3T6pU4VgqZmKVUcGwi5vQF7x6NMw8gsbKVTWatbHGitLBqzxUDWoFcc6uGMqNczn2fR1Tpj662uVM8eomDWE",
  "key29": "YpFwCpPuamwCoj19avfomJASZJ6ZeQxsUW19MnRZjbqdUW4R1thbm6dkUABPZ1hwbSYLwkkXmQ58c9jWLqJXFX2"
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
