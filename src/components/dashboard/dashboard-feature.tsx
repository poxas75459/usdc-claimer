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
    "5WD82oufYVntg7GYr6ZzPTMuNH1ZLbjWE8B9FR35pRGdtfFNEDtmQFgUUkfjvUhGYQzjwfYZto8rxgy4aC3R8LjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqFGb8tXfy8WtM78jMGiTrC1VPn1egxTnunCqZjyZB7QqQ7y39KxGu9FSj7f1X5jE9pFwbUWMN6p2FBqLY4dadQ",
  "key1": "Bm56geKZLWLXTtEEJaLteX5egDyKwDY6NqURm7jwaRAUwppk995dcQJUaBc4PyKC3mke9h5HYMe7WjFmF3xKa81",
  "key2": "38GmFZBiCZfKFfMBiTz4LteutHWZKanL24x83EvHHMYTN17bJDQ2bonV7cYsqZGdYDZvBn4gfbUaTfhZExQofGnE",
  "key3": "32RWKoALXd3hthCgjnuaDKHafmqtKcVcBaBoZQaCGMiD4NqaW7URUB8yk47gRAYLeZPbPriRrwG5PadZmdL28AP9",
  "key4": "5QgzGeezSMuiHjgLAHo7rLgZizYNH1ypo6tNxpJzQZoe8vuiZS5gz445bN1gQzaGqT5maGhmDeLvF8esjjQUx1dD",
  "key5": "nmPjwvK4mZ2KGPQL3HPL65gzrneYFq1AJpZ4pWBw6n2hYsNt3gB4jARvadUwNxrBeYDzmwQeow4E6VY79DWAhvh",
  "key6": "aKLfCUTpQ4w4sqrofiJ7ZAzvi4muyirMZ5meCxx3JEkD3mFPdLZBg1WphqLfoq4coCC4rnvLj2meqiQt62idtGY",
  "key7": "54YHBSRqffngNJELYHW6XTNKgrEqVZephsWxAAgfEoMV9YvgVWK3MFFxJeRKL4FC83bh6V7QnPE947J83siXvmTt",
  "key8": "4EzXozFkpXRKuGEwTKCKeXyVV5BkiiKCwMNsTfcsei9NqvbG5sYTc7DucPdv82iMZUR2H5vf7GUw1hhkUEiJ1Diy",
  "key9": "4MkSGVyzvvzqpEXQK5cL11pm21V4ExRGiPFNxKViEtbF1P3LCVq9546wTY23ewfHqqzrSBLiKw2XiYuymJBWRN8t",
  "key10": "4iTBMAvq5oJ2j9aCKTy2zkgqts5vHsUv68Nqb1vYyjvF4PtkXxB7VDBY9o4uiTuZQXcMfg34Yd4LJAnDsBtW1Auq",
  "key11": "5jSaKFxxUB8shYkmyzjbuaGDaaV8gJSnFJaK96gpmL1usBiZZA15tp6c1DQeu7wRPn9SLStZ74nUwmsP8yKLvPcY",
  "key12": "5vBtgpSJFn1s5Zs1zK9zPnAnPkKjmebGpem1n2Dv9DW1RC6iiDcyeRC6EV1tsXN9t4ted666TcKfEiZ6pxK3oMU3",
  "key13": "48GGMoPtGEzd3PESg8hL12ye8dxCZWsDCLoRrUHKxBnqqc5DYkP1azWajTRiGwFF9wSqXM6gZvHWgaHxzVjT2kBq",
  "key14": "4h7KT7vm8V4bQRxZyMgbTLrzsjfv5LtuMDuoD7sgR2vTruPvsZ3BtQeiHGLwyBpbBgS1E4ARMqcaAhrJXp7NeEzm",
  "key15": "3rjtWj1ddigiEwzCqkfLzvoAcArAY69E5p5p5rBjAwQNj8xUm9cwVnjmFcPLfCrGN5kLetPHE1X8RczZnuPezE6v",
  "key16": "2KqPcX3KfXMgVsGiUjUHvFyqokb7tdYmLB9R2ETMFydc2Sa8LtLXtzcBe4mYXhwYfYcoq88r1RyN2t26geJSgkFV",
  "key17": "5qxeGWbE7uuam7nzuJr59ko5ZgzhXaH6Wr92p4LxMhKV6NfdZDhs2894rYQa49KSjNSnvrC1ReH6BHv2aCew7pkN",
  "key18": "5Pooysum2H69RrTkv1CZNNkZzTC45dBVi91S5tqDbLXBioa1tuZdZYVy8RqZfTgfjmLnFrxg1t41QFpdohxqL2p6",
  "key19": "YdUh7fdwtDkg93U5cQy1ccj1yaeWjs8xrEdWkx2xFBLKpX4CLYbvxv9wzUb5XFPUJ9MuZJeqbbLkVXdggHuumZN",
  "key20": "3pprm9dJ8h6tuHGj5aJbN8YtZ3vNHMa4GSup5Dha677VUeWLe42yMrdAayqaMCuGGw1oLCAN1Qffk7D5rCXidage",
  "key21": "2rwFdUxoCVbdL5mrbJpiJzQpd3a61Nj3Tethsy6vDtMkjVHTgoGdEiWEGA1qZwDgPoPou3yMyXVJRptyxMG7nxfW",
  "key22": "3y3ZQMP1QvUK69hiDNcKRskbdcvbXgho5qvB9jcTkFKHWz4vYLC3B98NVxZpe2Pdxo1Sd9PUjMv1XfmTmu1r6ERe",
  "key23": "sf9jhYfuhadPYgLQxxrYxFKBpXcE6CtBD2zMmWqakQTPBjKgMQ3nhSbzK593oFzZdYzAu9bo9fgANcJNXgSrh4c",
  "key24": "5cMjLkYfhiJePW9khSdi6ZFYGLGwvwtVt4p1smzxghneQGVoFPnF7JbupGtQbM3VD6DeKibdLDAR3niFrssGs9ej",
  "key25": "2wChRSmDsETq1MfM3Yo2kVSdQ8Xo53Jf1psmwf6SpTydxaUep3WT4Ut8omRjEMWh2BMuMvwmGa2FBUwvPPfvAVAn",
  "key26": "5ot14QKMLtoVXfn6yzjaY2RQyfNPkhb4jTqJNwe3YWzqTtHe6auDDEXsRejWDrZXpetPsqKiGXxfEgXWD9qCfPpG",
  "key27": "bTCTjgBHWhQ6WSNUpCFFnw5n6vKnR7UDhLkx4hJhZR2F9Ztxt3NWK8bCwRMKFm1gviwpADn8QPNzJagHaVHtUni",
  "key28": "4R8rGTMMWNHtywhLnJphJT8xF1KwKyypWuN6qvGQg6dSg3gQnHYYGKC2eXz1X5MTFtCrcoBdEAKQfWR6ooHuakJ7",
  "key29": "5H8vz7nfXLKfzBUTtGYcbQQyqFBwiRxLUnXgF3gfBNqBxsz3t77hPgB9VULr3KKSEHBuU9reBJJCYN4hxbk1CcRp",
  "key30": "5wqufnfvXJypg2vjqABFTNRbswpAoHsCNVWn4Y9Di9DdkBrc6tAEUZsyVykMp5KV7xYYb2YEyi17Z48CnVqJcAa9",
  "key31": "2RcCmdQuUf5mpoTfnsqPi6YMCTALYdeg38gt1fg7dpXZRbNr7D68QGSmNjYw8LJjAZXf6LidRkcoCbLga5BnDWNe",
  "key32": "PeHdpHTUS55ShMVun7PBCpq6oqfECgRfzfyEP5Sn3aFxCSaCq7fnartNuWuCcmhV3FNyhABZ39Q46VUap26Pj3H",
  "key33": "573RWvLDUySu8dQXcH2T7rDVDgVNhVuMALd34evr9JhEHRheV88GH4b8wSb1gx2UsKYRAiswtixX4UqjPKBdeg85",
  "key34": "4QdTjTEnC36EZQKWxV9XzmMdWEfFsacHenE1xB7fjSr9r2HLcMjRQyYJk8wuw1kL4CwbJvQiEQEbkLgDxYBBkDSM",
  "key35": "3wTL3Sw49xRbn1RwQmitefVqubJkVX4n6iJXgmH3tZzHk75Sq391nJvAtQnQ6UijjohdPmLPdM8SQNcN1zjsKTtp",
  "key36": "PQeaqGhbNE5eCANb7ozdtg99UWdt7pbnSD15x1EUyrBqep6ZaEYJPKCwhS1rEMCAJExkBonnucJyQsjQsDoZzaS",
  "key37": "4ZQMGLXLLgrVnS8vgEZjCuzLBm4Uv1FbvqQ5XzL22PZcT1VSs71jziAyMZnNncTd9QEgEUq3SFe5Aekw3sHg9gUS",
  "key38": "b65xqZMsy9NpCRnMK7KNqhXQDKVGX591m5CKZdnE73Dea164ig9PZZ461o3kjgTHc2FYkNKJ3C5pPSz2oWjN7d9",
  "key39": "65NFzXmewKruBbhPTLrvXPVW35GhDV2BZdwn1S8Ghg35sgFKf3B7hs7vJKnZ4GjNQgUuZZU3fL4rD63jhBRAxbrJ",
  "key40": "4hBztzsqHmgJMpmV23q1PxAAvAHECkCQmnSfHTGJG5LgYT2ofZGh4iGSQgq8durxADEt66KjMwrSmCdwebRuyfNy",
  "key41": "5sfm55me9xMxbgSgbtCo9Y5WJz4RkLwHmCMrpWKkNXKck5Q54K1LK1uR8CEBz18p5zA2Skw7nNvgSEzwVhMAMmvh"
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
