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
    "5eUznSWLz7RxPG5GR2qqRQM2qLVrZbDqA47banYgFDg456NsEcdiqBR6ApdHxKVDBq8s7iCXXAFFB3EVsNjZKXdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56EaxMBa7keqLQPvwcGCk6gWManPGEtEz2R61unNSWNhpLT8SN6am8GSeTvwXeHrs6dHCrzUhV3DzGmpEpLk1r5h",
  "key1": "6qHyxqVfENjmwZA7R6eVG5GVMH4N34Nk252jGQkpBbYLNX7ubmMzc6mioUuUzE9gd1G9ERmx9dNhng7iNqub5fT",
  "key2": "2J77DNjaBnCx5Cww1JHK6xbNERNjTsenL1kAsHNhUJyejqyMZVtkPpNv4RM5q9xAxU83G2DUEDDms2CfnBYxLcrh",
  "key3": "2xq2c5pazxyXLGywCfPBXnSir9vcyubQbeaKjyaec6iYkWS9hRWar1ytBTSuc17tH4xLg2rtXbxh2FYTQrEuX9jn",
  "key4": "4NjzC4bQa1wRTwv9ZT1rFuG4nYZNK2o91E1ty5BEyssnQwBYNZdhLwEidUUeQ46JgUSGzQV3w3BirV4xrX6jG2wq",
  "key5": "S443Phf2vK5PsBcWfQXC5CgFXD8RpRz9PBNFpjeNTKQ6Y9CwvZa6gkCChvoyh9KSoG7QVXoQYPZoPQX3tidc3mw",
  "key6": "7oKrWf2AzpWqWZJTMwm3N8ib1hNoKFM9Q7KHbTQpDSPDEZTTBpy673R5S5Af37SqB2ejcyFCX8RSBMfuMRgcrLn",
  "key7": "4fs6b5AgEL4zzrRBKQuwsvMDHd2oZPptWCqr2cf4nhK8HeNyqX7LpUtCqezw1Lfxi5JCPfyzTx5AAFJcLBsw3hSP",
  "key8": "5SWCxn7ys8ByvRpaV5q3EV8uT6sQwasoZ9U12iapKQXkTBNKtncQ9Skk2zYEs7mcT694474LRZRFgit78of7L6Tk",
  "key9": "4nhCNB51gCojLX2iLc4FemUxCmTao7Bph8muHrUtGXWWJc6Huwoem3s1JywBZY27DouLPRbvnwXZbAJoYfHEu4L3",
  "key10": "3EcvEVg1w5HyfNXAbdQmBUHkYAcRvExmr9HQ7TG2j9erNMAZ3uZ9VCvA4Ct2XJSyz3GU953Snx3LZN6j3d7sTQEW",
  "key11": "4QiBBDR5FzfkinSxdUdTc5EFUo2VMqi6RYb2f9YjfKgvs2z61FLGV2vNXw5vP2BrbjqoooBWCZtR9UpSg51KGQ5K",
  "key12": "fnxuEM3AnAMsKdZCe4dnNoRWtVoFnTxFk566oUK3R4jUu6cntmvUzf4fWGXD6S9hvgp9qNZ59BEgVhhA1ssC6nE",
  "key13": "57W23KXpNLcrnsbwDWNBpy7hPP893ofTdxsJnxWGZ679oiqDwboxNrPgk59H35u6N8uyHLouj1eEo2WQfeCJ15dz",
  "key14": "4BrPisz6EbMbcVVBMswpna27yeGKWxiBxCPLpLMi8644Ca7H2odAWcypoXa2VDQYZeB1WjMJYw1PhDuiwVfAtxrR",
  "key15": "3EhLF1HytGuA5jWUVtRLDGkyDTTQf7UDKXX9zYNsBkNJ27hexY5H7NZYsuWoC2hZpvrdQj3nY9NqJNRXBiAsTHpR",
  "key16": "38XNsf8gNdMB4rTF9Cx36wJKpRBatkMZECyWBDqN5vvph2hm4k8nMN2WcoYtW8EmE5phXvLbnspo6bARW4rHXofm",
  "key17": "26gak9py7HH3QzWV4Tk3K67jmMTQY9M137JXCMM6jQ7LWg2pF8b3bdqyA9JacH36d1Uxy4qftnAdomGDMpdjqVnx",
  "key18": "4W7H9WvWKQURyFGQa4ed7Q4jDoJL18ypXcegEpGiUjqyyFmu2SSDCSa6KcYLmbHg1QcmjKT9YVpZrYa1eqaXsn1j",
  "key19": "54srfrPn8y6N2QjfB5BVHrcZL65qHqHWTEoqSLo13XCMhDk8edmpQR1MoDwrLUM39HD6iAtTUqPMWFkqNhcEsiq7",
  "key20": "538UzZANqjnppeBpdYuQ4b6KV5B8oYSbZ2yZn9q6r1aR88HBWjYSsJA9sRtNM9Up5598Cbeum3tf7VabF9ExjNaa",
  "key21": "44R7Ss7pxUY8RaMxEkDBQygmyj1baYgpFSQecr2dmijaqz5bAqfTQataDvm3KevFELtzUyErZfcZcoWQENniWEC1",
  "key22": "5pWhnkFVgh9QTLiSjv5hxL7qqLCmYCJzVkNNeY8pMdkedQMZQK4qiNhbtycaWp7tqkd5HpNW4YaMHtrF2wDyxQMC",
  "key23": "3HQnpzurqfcW1oMfrWQREe82GcESKQaV5spfuMozus41563mvTqdiN4jD6eDYyxui2XDpeLciie5xyTmz3ZL26u3",
  "key24": "gfMJSSMTgS65idjkmjJRLmD8oxCFmWRYF43a77zJ9GGgZwb7GjgPNEB8SQgVzprZdMsSs8FSvdksxin2N5rs1NF",
  "key25": "DQACkSLdjjeGVSk2KoaFYfUggvo6igJNnqeXXkxrVamm5P2N3CPqzFBysiZ8J5kd8FtJ4Lcx2J6bM4FwT3ZFU18",
  "key26": "4m1MNo7hQFeMire9RLq7XPzU7AwM2QSph3kHxXDj12isJpSKvwbkwA5ewB1aqwp8vTxvMCnGGUdvXrY9ZfnpkmTY",
  "key27": "2v9nrYNTb6Fp89ZfxVtUiczkNq1XWYXS7ZzbAwp9HkQpG9EF9HFfLmJyh8Ux5hQ51gJaNHKtiCUxfiGaJh2GodHv",
  "key28": "4d1RdUSAjbWbqGJeY6MAjEhrqC9pWChku5DzceJ7fDjWZCXtxJyYnURsYjhrxVSG8aMzk9mVNkNJYGzmD3aYcVAf",
  "key29": "3ZW46ryKEGirLjYREyiXmvQwyw5i8frnv7TFrnAEfJbHDzjN3D9guGAjLVPob9qrSJVoazQJDD7KfgXZLTKFWWx4"
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
