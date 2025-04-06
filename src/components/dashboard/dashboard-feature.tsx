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
    "BgzNVnKExSmZckhbMhqMqU6EsfE4C5pVTSjCDzCuA3KJNZK7XhLctSegpUzsrEv7Nt2cWs3vtcH8msdxwHiq8Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5e83oX49uuJixpgRVrvqjFaV3g11dM69Tzj8x6wKgnYQNBZCAzMdCWVNpHJuxnqhNNmDNQJevf5mPCMAofbDZM",
  "key1": "4vMsVyE13uX4tstpPd97hQnPmfUUAk4aVnKiVPWvLVW2PQqD2TPHvue6VQzE52xpaqSAmPiSqouxyksbcWYMCeRg",
  "key2": "SSBL5z1Eys8cx6fDCBxfBwdaGKp1K5NtRPE1Kk4kB73NmZW5aScaHy9tjrzVHsTrVQw1bPDKgz7syEZmtR6Du2i",
  "key3": "2NgdamXvWFS5pXESUWwuzSkrMuSDiL5fhzdJkgwgLYeznSKQ1csthXwvHZj9DqCYNfaHbGhdYyDRwAmEUA9W7kau",
  "key4": "52cCEtdc7W4bR1p6PufPEdbq3oNqwL5DBhW7QrvBMZDMM2EsbweowCqeoCvQUb3gEL6hqRxQ6fUt4VDYrwF5uDmx",
  "key5": "3PurGqd5xqbtaQkQ6gsLVc8uK3aYn2YweFr1rXwx8pRpQw1dvejy1AipN4acQ8ixw8eBLV1KNnqsDfPGJw9vXNQC",
  "key6": "SeCPDzsb3gi8tFWo5wpQ6uNe5yqXA2fFBqXSqgiQYZNxtprb1RQRgE5Eduvq3JeR8kMHYvB8FeHrSDUFgcatsKX",
  "key7": "hj4xEbmnyUHmLjCu45x5JcZJSTg7QEunZmRsfa318hp6LUpaHvwpAnnbyxCGrZn5paYcFsaquDU4wcxnyHDN1RN",
  "key8": "5FGNcgX5bVYpTsQZ4GfQtGTh4F2seEZj3izc93a3efCukRMJ7u3KKaTBv82BzSa4zdzGA7LziUgBv1n21wNApEx",
  "key9": "3MUj5jrHtZoFABTxPz28ooKHTSPkZ52xVyswumHNzV95bh6mf6auKcGT23L7vtZWAJx9yK7s1TY8hFoG3MdAR6gv",
  "key10": "5Squ8kQU9GUmrzwyBadRVtiJcSwRomxnBJJRdW8SVjArtxjHfq3TNg7TBRzHzvZvdubuXMJbrVdLY7frGyM4mioE",
  "key11": "2j8UvTnLbndNJoMyJkmcNcVGf5DmwcrHvUwgsHGjRJRXZH7jJWf8UTjqw3Y5ZJfu6vCJePCpg1hYtm3iLqXHyMRp",
  "key12": "3acfCBTmbii4pAZmH1Nsias15sbUBMMbZL8xDxi9NEpzdY1UvbPubPvqAgg1ozzdduM1XahTYJrJ5t6rmmkgta2x",
  "key13": "3E1rzFbshSbvdfe7ySxYsp5eCFV7AuPve6mHjiatyBP1SNhbR6DsfKtC7eyRT9mMxLWfmAd6CXBhbXYaADfh7t32",
  "key14": "2AzXwXxG1UrTxKCfATMzGaR3yvUTVcqzw85vsoRY52aAUG3omN4W6RJwA4rTMcQWkxZMRhgcQWkLW48n5tDGwuuw",
  "key15": "keLWa1vu1Sz26cqNaerbxk137eDsXrHWdwsD9EsdthRyiZFsbmDAnbesrx5FKuzrwXUK4c2eHQo1wA6LtPLSZ2o",
  "key16": "3hkBmNy7hLC7gCfF7dibZtDmVPoHGj1ZNhC9cb3AG9KPRu2zqicDXJZn7paE9YAQrYr8ptrmhoePYQr67BFoAmhi",
  "key17": "5YqTnqEaqD8uxtfFHLN36bVcXiB6T7SefHy5p3L3F2H8k4Jaa9QXjcVt2ZXAxdtoc2FJtMqyzyEuYvVZdd41YAsq",
  "key18": "t5Vb5GRER27NwgkQmExKDovjiuP44juvYrG2aBW5jmUnPa53SYszcfe3HF9MJUGtE4L22p7rJ9ptyHKqABjchuM",
  "key19": "662vRAALJDwQZc33x7wWqxpbVZ3KkBodEyFz1QKpwVGj6dGjqW97wMmgrFJcWPzMHUEhGAn7SXSNSGJ5vcjJsDLE",
  "key20": "2pQxRYg3iPVCnYr6i5vDmQcHZoNo5Ch2GgfYrSPSmM5bQwD9Ggbm9vXDTSeWWq6u9sEDSoyrm5L6wDVB6vnVYL14",
  "key21": "4zYYDL7uRskTCbLbpbfBiGFHwWcfFHww7fwQfUs4XdVwKEQA2VUVEvHdYh72GMBq8TMNvb3YJfxvVFuZU1ai4HAy",
  "key22": "42iJyo1YrEgm5VETumRRuwms4v4giW3CB72js7iNpW6r4vWxf7JECiyWhakYXHsgQByAfnvZLokgSU9Gm7yqB5Td",
  "key23": "4JhH8GdXRQRuUHKMPyhZmRg71FR2H3g2G85aLPoGrbevQ5Qkcb3TEFJTBcJpPwH3HsGTHgrMCECV9VEAPh9rAsma",
  "key24": "663raW9gg7yZXMr2BaHFzJp7YKRaaBhg8a6LwXJ5zKsZohdovDJUTfA4ppkEd3xMMxja5YQ8fAUipjDANK64DKdz",
  "key25": "BLVvvRdnueE8gvA17VqSnQ1tYRtRojR7MLtfoDNf7njVEDbPCDRQBBXSBLDA99KceR1yrQPD6xc1885ckAvwaYN",
  "key26": "4kh6SAGWvH8buCxNHMiL8MXxYQAxcRUxNixCUVLFDLarGGXr7YHDVxtHFfHbonnEU7421rTKwaksBeLSx4gdvcyy",
  "key27": "3j8Luf5b347WrfuUjSx4e6nJMM9q2wuJHzwnfRLcCDth1HpHAYHQPpnSkKxrCbs1q7kV6BZRishxyaQULU9QE8LD",
  "key28": "DDHTfCq3cxPZPLe27pU3omy3BjcFYi4psUMn3sZHWyXwQFDYuLUP7keZrBn99X4FeW1csWyxWhD6GmvjMWziSgT",
  "key29": "3y9q1NHeBzTsbjw5JSDFwW6ELfovBXPdYMHAufnpgQD4Su62Ma5FPHHUquj2ryyrt128jgARA4s5uDVvG8xxp6Uq",
  "key30": "45UmgYgDURMFyWvSMuWpqa4yXh266ZfvNuCcVTpjzpJAFsB52Xq6YHA9qACBYsrTBqM9pJBqqtJCj7CPrRps1w9j",
  "key31": "4Hv15JiYKfzrU1Vpg4RLVRZzRXCzhiFNcrHAwu2o6Cz7gWYpc5bVeA9FN6DZ6Jm2fshd22EYHG7gpsJs64nvryYN",
  "key32": "384XRwmzSZi6nfVE9GPpjrYmw2zb6iEsGzQmgHLhq3bCDdX9Ci7v7AiQJE51s7G3tLag8grqgcE1Y8vyrTioQTko",
  "key33": "3vHJbYFYHuQWbFKWvZzHxyLkNs7jzWfRxnmktgKo1rj6qCn9JFUQ1dzNMr8QEBwXSoLpKtfqQFcARnZXkVJxYdTC",
  "key34": "4gjmZ5kSHtr9e6dBsqS65ogwz53yX7BtUTufFc3nxP59wM72qLhdxVS3ggG83AHh967o6AGNaePKNDBS4Q68j4oP",
  "key35": "oHd3eLN8Ex9DdqZkYxy7Pw3R9BQRXPbXKUwtYWKgBbRuHuW4H8cygUY6cLtpGL6j3K9Q8fnjU3uHgo9pbt252BR",
  "key36": "YKC6pZ6BxcaRgoP1FrkfxPiGKPHyvL27vvbbNfcfasezpCERyERqjmScwoa2kFR9CMsY5aa79D98fGxpMCpA7YV",
  "key37": "3Ep7BaXtN9BMnVNbDyMGN6hWjuGfb8z7WBiUEAHVUVFHVwyWSFEAfEPmYjdms6nP8x8S7gb1uxnMj6hLmv3Njqdb",
  "key38": "4vfGpT42fSQCrLjihKRAkbNWpotWsiZbRWgCqQekHVxJktd9nuQVdrkWgBHPmyoNgKpcjQgMJmMdRZZorFiLN7ap",
  "key39": "x3ASn1RQi8ojF4qitLT2cBN3VdBRkxEXrG3W9t9oiP5368xSZTnQyG3or2hUwtzdgyRYVurMMWcSdaN9goyk64b",
  "key40": "5UUt32imFgyzVjvYe9rpC3epf4fuTjGc3jPztPqsL79f3DK6RQ5UjzP7X8VRmK1esXgU9zUGmXfdATsYV2m47mrZ",
  "key41": "5NfBZVjX2aobq5okVnZS4u3z3Het6PJJjyqyY48NcGEJdJqhfJ2ze114vNqPoPE1LajAksaoVQeq2bLRi6zAwqbi"
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
