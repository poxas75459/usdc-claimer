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
    "5oHeCERaZRzPnappUsCzU8jpmapfb8F4eU1EnP9gFx6GGLBiwmjTDyYrA71PrgkaAZPo3XbArdRXW5dFL768qRrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RahkiDqxV66RFnpiZaVrXqT2azR7iU4UXCDdc4tPWUUVdGESCcb2G2GPHmc418HVNmyR1LqAHtkizzWSVK7jGFn",
  "key1": "2FLuv5LUjBwoGN5sLTXry73gHoSu7Bq8Hbeu5YAtWR8egWeBxxHjtBb4ce4uGnNoTaC4gn6Y9UR8874z6SjYoR7p",
  "key2": "47hQj7tyWygBrJQVSqY6cieF1MRK1KYDYUvKuBhWtoVNSoaxmhcZ6768MSCgTTXXiDsV3HMW1JYM3uVmVnDUBVnA",
  "key3": "4waCuDoZpUz2AAACEV6HWExfagojieKQDdnBW5k6SCFUsvuHMCyQaaw5sAP19CCi9MS3Vv21aX2ZFRGEm4rgdvzM",
  "key4": "5AuiFf9VhPmeDu5MeWui9spmTi1aGuKZ95QJpvFinbMFUiJ44yPwpFbJyBUyY1aHGAXMhTxnSMUPoP9fSFVPijTj",
  "key5": "5Afua3u1kXfBq9cvbAoCfjWBm2ubfNEYizaJ2jhJJgMA8B21gATPXUf8WcaBDHNk3ffg1iFgm2y6KGyYQW7LQvtq",
  "key6": "4no6vPkdyS8YwZvSpxVH73D2rU9akyicMPjEAFFPJog3nZXUXcV6AMCLWMGCKqU76AcGHmZX2qvJQfkVugEGd4Z1",
  "key7": "5ZNiWWx85Cr66K3QTm16eKJLdunWN8sGN9r2gm5pPECdnX9YDhoFfenic3rRygTjgKiwaK3er3RK56bfyfEjuGUK",
  "key8": "4LYhRZLhxikbFqfe9sCPuAti9P1JEXHf9zp5tdUjSR4q5qozgQ3egfzbwz5i6zJeRC3TRhAGZjTbaq5BZAjWP7qy",
  "key9": "22WFeQt4YGEAoLdYSsvTHkieF6QkoWYwP4VGu9fj3VFZWHCkpFKSByRBjCKMvwqLzhbWoZRW8MVy9w2Q4fgeFzZV",
  "key10": "5bG8xqCEDjKRE5D1JC5U9qgWfCgAgwEypKY4pQrknqBjeudrRvMmeDD5GxKJzCQD3n672D2FieCFFrFxxpmxcW4A",
  "key11": "2Hs59T2SpgqwZu72MGTgHJWqojrMbDzXpQuwtXduNnMCdTBKrrj2mRa56R7v3u7cYxkcu6dNRiMWoFJ76WQsocMR",
  "key12": "2JqbYZeTGX8gFvWfEJ4oyk2HXNFj6XqVo1bjF7dGKEoPhDBQnSFbeeYngAxU4ijLgQXSxv9yPR5KMud5ktdimAb5",
  "key13": "4Tm9w3AW7SxT7Se3QTh1CN4ATYCJDrgP8yqghFDHeXVEhsSfvoEF6xqanBNT66zCRFGQDoNhNKuEJsTiiJ7DBLmW",
  "key14": "4Duxwn5hQ9nxSnKknPhVFTcLgiY1jEm9jU9Pd1x3umnV3BjVXAKGw6VYAqe9n5tB4nSaCduMzpqsbzNESzVMvrWZ",
  "key15": "2fDWP9UTBXsFG5AWGv4ZLtcj5sjn3eFHCahDJRTJUFdtjp6gAZfte6EdkUzZFAgvjmsnBnhqTcgbDiETjgZzuKrv",
  "key16": "2ZhufjQ8UsLkUfyhsDJAoXWPSB3zA9eMtf88peFbo5xmDFd1YdTdSkmrh5PD7uxtHBKcCwe31XpUriuCeRGhu6ZE",
  "key17": "4TJqDB8R21CWjyekrYnofVpgQ5RYBcVvvF5KCx8JnGToRKMQJMLRZWYxmXYrgDrPMJ5NmzJ4ju2PT8T4CDRzVFWG",
  "key18": "sYecmHmUW3AAzdZUa2NsGad2XAdXv5s7r16Zjfdn3RK4u13s3xv6Cm5MuJDyVF2JYY8y7rnQxcsA7fhSBdNBDkz",
  "key19": "2LGHyZoQBsJwPHJboyM6cEKxVJWPq2Mw8KXjUYZMNKj3zJ1ooHp2edwcaEgD3ZufhU59C1Ps6FUE7we13BNmduue",
  "key20": "2RVqZVszu7Muh9FheiAtaiBsCDnkGQJJEH4ye4NUTyBAKHoixx91sFkbhNJZcWPVgdGJqAdwFADhQGTDtuGowo8i",
  "key21": "UaskZiSnHAG8bizAQRQrtjDXBF2hRBrWe9AY3nzkm5zHphReH17b4upRuJxQQs3zJAjRD7N1XYVBGg3jZ3oa4GF",
  "key22": "dLostxJkZ3fQm9NxfCTEWkgvi95znXEwEw3GGxe3EFL8Yb29FDPzATx36zYUKzcNqsT3YGzJUawD4fLsB9qgusK",
  "key23": "5ZNPnoR97AwWAQ9kN4DPxoq6Eb7TsqiyCrzKGq8ZvjDCisT9o7nmkxfyBGMacec7m4v68BxU7NLNMc2iY8FHxMHF",
  "key24": "5GfznN6pgsU1jTAn34dVbYhb27fugk4JcpPMLgJBPd26f7uRRqw2gU6eTqHjSGSiAk4EmXAJkkiWPjAUMKCF99eM",
  "key25": "4NbPma8DaURMsfdajcrULPyCdPErbbu7xy6cwUF4DR6HWw38cheAxoagsnf3V88kjFNPsEpEtjoJsae6GJgUuxtg",
  "key26": "4m3UzKGpxT88r3cTpzDCDBLzG7w7qKmhZmy8Ww61xv8LL1pFb2tKzjF9Nrzjhy9wR6sc3AyeTW5DGuwffmZQUHz2",
  "key27": "2GCiF93T7AHvTPj9AYTEorcCfRuGkod98YKp1R1L4oBWZWg5Wh1tXEZaCaiZ4P3W86Kukhn7vd7LDvrtoM8crFKX",
  "key28": "2YTRacFhXbkh8dRk3ATLQXXt4N9gNYa2gGnazg3RFVsTdcH5LKutPKHneKRcy7CprtcwGy3emNg85STBA2VcrvnN",
  "key29": "2HL6Kna1jXFqjjC5LwvHj3Qhxf21vqXMk1Z9FKSAx4vtp2Xj7oHv7qQGCtjMLxYga4XssRNNn8TYKbokabX92bGD",
  "key30": "5oWXM7MU6DtYcWt61Pj7C2sAG3GvrqN5tUPewZdAXKFgGNCbDS48nP61T7PffEFRkbzSEnU6D1pNwdt63fsCrMxT",
  "key31": "5XnCyEjczqH6aDACXbvMA2runseQJeRtfoAXJw4MdARm9MnyEPETwmryrRvgE5Sty2AfhGins4VYxdmfDVga3uAR"
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
