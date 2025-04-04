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
    "5V9SuUuLVowaRztvckpCtbc6t1PoKmm37AcPZPjKSBiZuF2hoHeZB9XNz3aDHXd7HW5Ms8zaxSH3kU89iK9mSrLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHr6vKt936xKomrF9cmgLzDvTjF5RzXyLv4pdCb199ToBQej1YhBu7NGkpquZ2iopeuCoWC2tpZ6rBVGUJHAKS1",
  "key1": "2DTJ8T5DTzT7PQRrpL7bpvKYxoKhqSCbk2p6rhTS88RR2qoiLQ8dQ2oh7yQ2iH8o1kEPnjcdp2b9Daz4vAZ6JWXT",
  "key2": "282vdk1JdqHNiz3Ek1Z5w2g58TuwP7LxsCCfTovSXjFfp4htpMs6KF8UY17RPw3DjTcfHYv3hX83dGc7rZcMNn6d",
  "key3": "5yLrTpfbNX8G9zxYAs26LDkF3tH2jkiqn6AyNbVa77Cwj32cBVkMphqd5tArZ6fiotHVD7RM1Yx1E6xDFkkZCxk7",
  "key4": "51MZ354x6iSquzQNkqEMpMZ9Wp86qgrvp7ZFU3N22b5FbkHQPeAtTQVdYaKNEjSCfjXhYGjTPafKwAtDfwevRHxZ",
  "key5": "54PY9dppxD9PMzQiyAwsYAcZNffMpE1XskCvdPVX3WF2qACC3NPUbArUrdd2uX26GjfmeQ9xQuS49qYCug4axAjq",
  "key6": "9i8ygJn293o6nME1mb7crMRomBvoe6bi4TN4BTTMyqYR9fogeDgcgEEbVUePqfUFSNTyUz9PBVe15bRfo5sZ7hx",
  "key7": "5AT7HPbTQiwC4896L3cB37ZgeEqreAFafdHMoMqdpwhB2ZiDURfq4q2VYL1VSFu6WWQT13wSK4im9j8WfycnJarg",
  "key8": "4GcxtWiq5hWV9pkQFXPUYVs8yD8aReC63G7kTwSFVtavKyT8uxjceEP832xyyvTG3Y2v1Nipfx5dVJo8YPbyMpxf",
  "key9": "3r5FvhfBaCGhHMvbdceTrjmKBFb48i9a5H7DBVK4U42ZEULmGKgDx2deDqWA5YfqTrBeAJjesXoh6FX13G1tUg1h",
  "key10": "3QZBYPoWyiHCs2q2UMjiUEZD6o4JBb6Ttb3JgiuPbaGrNgPfHb5y4TvRgWJEzDixbPqMJ64hVENDf88KwWL4QhDX",
  "key11": "RrfuT3kuPcg8iqQxz7RdBBwiAa9ZVyMfdaUuyieQnHgPWRABr43g8JFjfjoRgDqABgDZ7XwfHbww8m3ATAvSKMQ",
  "key12": "3KwyH3JHXc7KXhF5xsnFShXr81qDGEpommLvEpnWndT1N2wsDPyhbH6mrJJDaR3WzxdSjGQmNGhVk2t2teKi4y52",
  "key13": "2P1PYkZYcMSkQ5Nny4s2fnYUrhjTEdp2qfMoaUWBh1BWPGwJnsTnYxJZbDrdGHrLDUEXnRmzJmNmSY5oftkGMrEo",
  "key14": "2g5tWnGxer65jtD8tTjxLRtGjHS6xsbsaKdp7855ixHhBris4nmkYot732vrPorwL3bMPpC5j6TATvM6BajfyUmb",
  "key15": "2boYnEwFvG7wz4FgDq4ENxmUKjpktS3fk5GBNw4KkuBKKiieQ3GvoJDUrwK4XCFKhf8gic9xG6GXTpwztq4ZZkpa",
  "key16": "3g1FFScof5pmUTxBy8J5bQxHaeQnFRPaUdLkiiZVSW6HgpVfE4JtDECf1ZnX6WKVLYavcX4CqwoCutJjd7Gv5nXx",
  "key17": "59qaoiDKVTV8yCALzcwrQtuYiUJZ4hYouEK8eEyTFCgfhg4CY3GgbdzUk5WeknaLLz4NY7C4mLESH6gcTaSfPZ3q",
  "key18": "4eqNeScoS1pB1gUR51V4VK8bqTpTfGB2Jn9CcRsSq6DEX8W7eBgbcJ9AWU2e1vFa8TVENz2zntHzUBTph4u68eNs",
  "key19": "tajGaoGK65BjFNLQoyC7yXs3XNqyq6j7du9WiP2gh9SyPWSyopF7z4TWLXfn7nm6HsFuJz5j9BdsfkxcqPXV7m5",
  "key20": "23BvfLZTV93Jf41Tu7UzJ6cZGcEe87xdws3t1qejwFsjHkKYgf6J5c2ek7SaSSb2C8oUZUcAKNDt9c1wmieH9pEp",
  "key21": "5d2KpDUaTBeiFzpq9djWfVBgRCukthnb9qNBN5dUcufKoGfiQkXYUAaVVukrcVkfU7LLWR7wpVEibgDsGdjWTFST",
  "key22": "29RRpXauaM9soQemDpnTtNPEvXfGcpcQt4s5Zfz6huhBtA99YaZL48DvR836KgAd1Tny6Z7GG4h2Xvec5T9SYCTT",
  "key23": "4UR9Vv6x8D1hUz4MjMQik4fNQwiRu2a8WQqjm32XD3wm6xo6GkaDH2b4F5mkksLZkWHdub7YDnjNCYmKYTa3gWfQ",
  "key24": "57q3ZATYSfCrvSyQKZRtJTzBeYKwbKsfrVnLxgCGkGq1r6w3uY1UPkA7p7R6UwDtmPPCytnodVWGyy6fKQYjZkdz",
  "key25": "SXPajyFN5wwfbLjyKttqo1mAB7MbjH6HDeZ9bcarsJ8DaD2h8GASKDjY8YoiMdiFH7PKcrukqEvwGXcSszYFKpF",
  "key26": "5A7MiiyKHgbKUZfrJyrdQHEfYww6pP1QGhbYrDhp4hNZujBv4NyLBdqR1DcXMK2KxXP6GYHTk2miAFMysmZFtxo8",
  "key27": "47NsoRs57XPj9F5dbyif113NvkuKqF5TtiJamUiVtcoXpjSHWg5nNqbe49qMWVYUA4FM8aVdS3yrd4wzZeeBrBve",
  "key28": "N6aoyrKH9ALBg6MaGWPNA3EkRAab7C4oyh5CAwesTHaE7WWt7Vx6f4XAnzexu3ZcupRSDaftWT6HbmntGXVLtt9",
  "key29": "2yxyx586qWxg6aW7uZz3AYhyJZJ1huc7zF964H2FW4tjXqGpkbubc4hNQp8pQUqqfSgoVbnf9XYfsvVNSuqZrwkc",
  "key30": "2FYbkR1YJHWcxraFczYAJDv1E7th4LCAU8sTwcAmfVJuvRtBoGcrMoyKhTXvZDSaYfVdhzypPsiupyerM3uSfaE1",
  "key31": "Jf7KUx5c5uNtpssKio8rQtrjYaLNje1dwkuDCBrR2SQQk49aBuC7gtQbMwEi7ptVLg1pNJpbhxZxdyZLfo1dV38",
  "key32": "3bCg9Rf6T9fVVeUmHrpvUCfwTg3WUub7brxnZa95BZ2sKrWJMGLpDuMLCZRJBmAHGj3AbtszpLYoL8Pv9RFAFEDk",
  "key33": "4mQwT2RCm14YaV4eobsCD6mNvCDP77L7Kuopo94z2CFSzNmBNb31w7NnHo1YSzMXfLhCFD4osxJN6T1ZiMuRZUVh",
  "key34": "5aBPLEyJzWEH8Z4aWEhgPEUH1DSK8CK9dhw4rYJJWTF1rdoKHQbwSjQvbXnutgAEU1J9bqXpDkd7z9kEXxKY7k6n",
  "key35": "4J2ntCEgRsghjT9kDFkoPgLn8JiVZV79FBLpzz8BV5s6PYScvp3xrVNDycuic2t9Bu3M53W8xyTYpiFiU1R3Z8X3",
  "key36": "62fQKi2jF1YjWfUC7sCRvSjuKntZR6ikpKirHhA9TJfgHA6sfKuinzH4T2p2sCv98nrzczXwxPff815EZPkeR5vY",
  "key37": "iWzq4j7svBmufiLpD91jDP87morNidVqmGor5VCp3tDoJKKoetnQ4ssH1Fa53UQszUQNDPh4ZCCbNskT3B2V5yG"
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
