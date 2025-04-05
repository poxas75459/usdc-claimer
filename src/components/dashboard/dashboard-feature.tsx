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
    "21Z11upoxrpkWLDQW1rdzqLPUgTjEGMzwuZKSU3SNjxnZNPPpxX5xNFsDF6MXtzWgR7L3piC6rG9Dc2qGCCBchZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QaupG6MRfm5o87wjRj1AtHYJNdiusD8ZRHmEDibok3JdEYpgfLnvYhg68YPDsAqX4y83wBpdeGb3JDwHfbiCqTb",
  "key1": "2oPXEoirGjd3Ey4sqjzNvNbjYLrWjaLuEwAXWbobmLDXHXgBSrCbkDe9ruwxR5XpEWsXhxLzXkmpWKqLh7qnxRep",
  "key2": "5RNHHCfdU2QXgbiXtM6Aetb51xW9FnppNBmq56nktikaHqzWPLWqqq556V4vQcuE47FsZBvoSxY1xbMezvxFbB2R",
  "key3": "5QTkuQchDaod2D28fXSQiKgjjhMniNoKmyc1fzxaFLQ4n5kWPjsEFFHfSpiDGtEx87rMC1V7mPauFSqsCadf3ght",
  "key4": "5UTpYX3MHT1jfxh6f5R3Y8vrr1kmSpsnWEYoT8vmddaLi6vQPj6dbaVZcaTffJrPq1n43UN2pWMWTLe25f9PqYmJ",
  "key5": "znkASgeH52woDCcTBZdHdLktZrx1QfFP3NZBWxJoY8HuK6pECA6kensATazyoWzzETRXuvrN5XzjZrVYaouc2HT",
  "key6": "4QbaZyL7BeedCoyfDoKxGhG5XHk7nACX17RgbVayzJcFarvrafvnLsN2FpEPwM7BmXhP2ut6P2aCCouHpkWdfgDE",
  "key7": "2zXMcnijv5CFzJX3owjCzvzv4tzj6PAPoxuM5rFfpWZoBk1tt4uYoy8WheurHqmfEczhnGDHwjoNLsEPnuh8ibe",
  "key8": "3yyf7LiLuP7etRDAxVGK2VddUoL1h7b7XWBtdXbJ7vLhqMNxBjco5HpsEjqwGUAdFtL27bZF3ZsuPR4SYb7uSZ85",
  "key9": "5DB69kCH5xidRBhDFrj5xp1A8zkeG6nzrEjJg2uT9cYFnmb4TyntUut5xF3qu36cL5Ltwzvo1sNNpNaF6BwQXi7u",
  "key10": "3SdXTxMWQmBn1RzQQfaqN7Nc8pWwSjLNWiypxJsrrtPyQwmkve5xaQad3ccmb5vfosnBYVMu1M3RskVjLhxwc1yg",
  "key11": "Xr4ybZNx5vZmRNimmfF9UNXvwnqZ7Jj2tbyDe2z15pMhMfitedBrNGohffTBpgEaNP5WaBu67Nx79BMVcTK2M4A",
  "key12": "2aEXtaVrDFbaThMnrj9Z1Bf6wX7F9U3aHqcLpEydLnRibRkbCdMFRSsKWitzgMHuG1yR3tyAnQt6XmnhHPL3yUS8",
  "key13": "3KzYrZKK5JrqWBDhNcCDAaUzSAaeaxU6eBCCm39f7DAZmLb1oP3cuW7krdu7S6b5ELHMKWNMrYHz7tc5FSb8mhAN",
  "key14": "5WLbQf3anRycUG31Ldj2NzUinFncDuhaUjk6Hzfuj4GjPfmYCPNbJhMc8qUToVds1o25VjcK2AAbr4NdU67ZnEHG",
  "key15": "27YatH22N7XiQJQJ1TVYWxq7TvXn8Dtwke3TtyPA3UqPy1iEaVq3MQREgxEcQ4zRFtSh7JvqWvt4e5nVyDuUyejC",
  "key16": "3a1BD3MndrjAsHnsrNPB6wdFS44tBupDZebtFQoaNCSm12pwrLJR6gQYr24bREnMseQKBseFU7Hx3YtFmXEP8qEk",
  "key17": "3VNLyRGVMaWnomjgcmNPBXcPZavddW4gGr2XzDLXhBa27uApqQp6rxYwVrLjEDHxTt7nXXygn4N3yyMGUzQzoY3W",
  "key18": "3jKpDZSay2Wfk5VGAvGqHKaLqSzbiy85XDJvvgH36QsbdQZN5oJN52SsqNJXmtZPVbWfuRomt4YExoxXh9tdaTXH",
  "key19": "PR3ivYZfJ6sDrtkbSgahYXL1mnAK6BnrGv2o22h7AE1FXRoUALVtno4DQ1cjC9SQZuGvTQUBu7teJkWkYbsp9pK",
  "key20": "459YjCsgeqVccD2bfwjxJhFvCyNUmhsfUDazXjv14sCUr18Lz85fh8rGYBZGPkwiyRUQLF97RUG4enDaLbQs5Ypf",
  "key21": "396CpcabGTivYrww3GTwMn9MWp1nrir95oef8MWjejTiaExv73djbGn9iMidqxNiYW6FBtihqJmuJBYhXc4eZDVy",
  "key22": "2cqKSoHUg3SwYNsxTNrWAZjYiDGTo9Y7ZPRrvqwPQWZAfSMHgjDn9VgdAgyatRBYsYuDTtXnsTjW9C4SnHs6ftDF",
  "key23": "2BiRqcEi8mHvR9Q5oYC667Rtfsv67J2xZn1Qm9baqSNotiStgJtY2km9FTjjqzRzpPYwLFrrHvTfQ5VDwCfnnV3v",
  "key24": "32pdwYkomo6PdsXK6MGQDiNsADgQVrx2qVAFDjewbABz68pQLE5LAGid4Q4i9iuH9juiG8AxXUFw1wZpyi7JagJb",
  "key25": "4TCP8CSKDxwQZEX93LMiFY4um1kdFKpmho6zg9WZ359ap46zJRUYoc3Atm6RRB1yooPJpB8k921iy5h1opeN1CMM",
  "key26": "3H3qPqL3CzHXQadUn1mZgKZeMPmBFThwk8qXaZ14o1NKJVFgBtHqczGb3p8EMw6CZPRXGpbMBwHGtggJqrWazBXq",
  "key27": "3ftTyYPr9eJidhGkiUnzJiQJW3NPrN5JH53yHgz8WnoJXV9ypikewUVMgLPRVnaiAyB7YvN4FBVgVvuqaFBfaESG",
  "key28": "2p6M6hQGbPP2hhL1KZg7vLa7AUB7hKrSNBoaPQjbSZbS4iQap62tU5BZ447bwq9nrQxB1vT245WpaSmU6ihbguGu",
  "key29": "HB16pSTwJ7xSyu1u6svq2VBnMWJygMUbYPFkjFYkp8LmDx4g3N7VAGeYXH4MeKQNTMw1AY6w1UvbdBuoTdyX2Po",
  "key30": "2mej7b61hiuNX1JeFGpxwiosniw47u22vE7ukzDX5cFnwedgvYyc9yVprJjDQnkJgTkh7bCZTPwXZfZabCEU3AQQ",
  "key31": "2ScA4iJJAoNbE5pMKjX961tuJDTpmq6nKPK42C6xLBuqrMhZDM5FN3BAx9uvnVKZBFJr2BkhEjstQobn7dxg3nJY",
  "key32": "44MgUYxwBPTFZoA43xxqx1ewbhJRVYmUDjGSdtjSHfo1SXNLN5SCzTeDAYnCKunKdxiBhusjjUdBnm5zAZxefUNR",
  "key33": "ekWFQj3NtqaosMEPRxTALqWYvUuzWTbWnkjepDPyvBe6QVGGcBC4BvTMAkXNB5WUFFbwTBV9TpFk7P3PRo43syh",
  "key34": "3dZgfMVjECcX8NVma1GLdNqA9j96F65Y6As4QhhqFT41uvbiRLBmKTNaRJMXt4NLyEKWWm2dzD2J4mDAZeB3z3n"
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
