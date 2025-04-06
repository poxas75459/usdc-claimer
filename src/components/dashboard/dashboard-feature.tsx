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
    "2AQM1SnhFPb95yTmWwQDNJcKKY3Feeyr445PcACmJkQcMdjPsrC7AwvvCx4jhKM3Cg9ZHj7W9UojLzUp99hKLMHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y1JVxvzKEfctLpzMPHFdhggpMCDGcGTnyB21sDQvkVbNQpPpSYX4Xg86oSyA85BfZ9xbrXgi8pNzHMg56RVnvp9",
  "key1": "38SaVChseDAocfT28a67VMZrM1ZAJamyjD3U8VztNUK9rWmFbETFGxWttFwkCqqcMkQeyinrEUnputET5e3QqY5S",
  "key2": "4ZUuNuagVZ8MhxKpXTE621P8NxaaYWTCXuKeGzf8P1gE4eFr8SfQXJEdQ1Z5qTsJ2HgtA2unYK6FvvN1RuJfE1rB",
  "key3": "5TA8MfusfTX7ceELPuk8A85Er1xo6bNrAgXadyB9YyJFdiJYsYa6WjtM44YzYS3yd1NdoYCMbrUnfsHTRjSCmTfP",
  "key4": "473NCiz4ZxwVnptnxbfTj1UMR4nctUGdXFouFKZHSufyshYZUQfve5ad9v1k8KCm2wF1zN68XAMfiDqPzxJcPYMq",
  "key5": "gXy8nPzMawDcCp5mP6rwRRm2kLCKjPyZCpDFaYyknFhV6MJJu2tXWFsHJVcz1kBks9PGUmCghdNm7mr1CZw5LLt",
  "key6": "5BG6igXSsPHXPnYe8HKwzCGXi7YcRxpK2BWQHvjV9PuT4JyktcBsji5UbYMa9FojLp2ctac3mqc8iKM2cY25v7C6",
  "key7": "32omwqBZ8X59cG6vt7wfh7ZKaxfMg3bEH4odHhAjGRRuqTUtBcqCAuBhSKhm3uYiPyY3qhN1a97eD4Z3GsT9mM7N",
  "key8": "5xHXDedAAxL8PVzCtdYdU6H2x1xWPnSh7dngWsvH4PoGmE7QBbjqjgmPAsL8EUVp7WGVYrLsnckzEaTXVAmMrYoH",
  "key9": "2kv2nr1EekMmLN93xRAzNkhjMj467iBJKaRYrpVEE684BQwAEehW2RB5MtAotvjr7tbwyChiPVbGLPS4SXb54rHV",
  "key10": "4EaBQbKZbK2cGhAYnhKN2EJNyCQmF9HdJvxpYXJt5xZFDxhotJvw1Qzh3kKCbGsd8Qz15xdoiiK3CsZprnDyW796",
  "key11": "pQNUnh12MmedYGpPRJhTjkGr77GqcrtxfGd9zxjNMoNsJVmzQmkrh1sPEvpzPR29UXgiGpNokjxFN4uiYLLGUrA",
  "key12": "23Jhp5W5Mrcjr3hnEcDoDwdUvURmMHLPLqpqNCKQzE6eU5U3U8DrzkokpZPPC8ThrzjZgH18NNQfY2nMa1JuyZCo",
  "key13": "5JwhSBGDxjVT5Kz6mKqVPpGs9XW5Krm7VSxSG2nmx7CLF614wTrknk2xzqUUAq2eUcJnr5h6qxZ1BSepFp2kmon3",
  "key14": "4iW8tVx5rnFKhR5RPLrYuF8oyV2F5aWkT149ADDfcVZexzLvwSd8MTMeDqi3jZQ89uSNtZVNSXW8m17eHVuFQJ1p",
  "key15": "xEPGJkDuQfLtQYsEapSMGirdPUtXF96k4YB8cvzhLHjc8DYykweCanytp2Ky2GzK5K4k6FUQmABfRn2Yqa3qzij",
  "key16": "52w44XoaF9H1tfd8Jg8PxiGdaUkBSyKjQyvdJosqKJAn2c3CirfgCXJyrZ7RsjM9Tm5xMwQBUCovzyCPDEN3ByV5",
  "key17": "598QycHQmKx2DVMb8v3vmBeUgxBKKYdhzVeBinoXXx82Qj2FSaRFG9yyXsofQeaRTirfVAntfTo2nfzPUgG9jXph",
  "key18": "4FCDWFdnW6cgwuMPogqvGZqTzm6vRt6kyYaUM61smsio3mYvCpnVTiyG111WR1fBfHKD16LJax4buT21YXiBJn3E",
  "key19": "r2876L4P6saA8sQQvdYkUsi8e9WMr1bcycN2Po5DkumBpRX1CXa7JLuPJ77fC3jb7anxWWJgc2j4nHaeok3tobc",
  "key20": "49bBFeaGrirERDH7iiQw5KcV71THEz3P7hNzCAPHQTpp8yrxdUHtCEgTr6QB79PoaMwWCVkM4CFkG8pEASKndBLE",
  "key21": "3guatQpLXkiS4iKRgGDPw6KDwxD2uBj4H7tvhBfYkqc3VviYP7Ax6DAEgkYWiQL9V95epubGngTLKFdJbHhmxAL8",
  "key22": "4YPyQ4n8WSseMpH8ZZL9n3k4W2mJ43cG8qGGmHYFzmxUqtesz6NmQkwBxHNCgm2pt6tZxTEuwJAUAu4Vf3E7RX3Y",
  "key23": "31PsSAJsZ7pvU8fzgnqvJnpvLDw38cbmMC7WTfYZVWAfP4mKhjHqb6xKsLbx8UM46bvV5fMQTgfVwr5Z669tU2Zs",
  "key24": "f7WyMmEXnUX8bfDHqSDcSMopAyEp5je2YyRnamoTHVegNzNjbu7ZBnWUbmu5xMv2PPkJDpvEomNhXHhoitCDr5i",
  "key25": "5hjJdBxCoeYDFM2rwNwm9fDKXmMemPEXYbHxsh2aspS81eLLHooyhN1cJszhuq1ZQuaMKE5NfZpAjbSNq5ts5SMz",
  "key26": "4dbfCSx5yUYEN1Rhdbtsvtgc7MLSv7BeNu9eEyydegZYDBtQqqCCyeKxoPcxSr735fWXAsDdLWqcg18NPTGwipcL"
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
