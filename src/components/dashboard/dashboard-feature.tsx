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
    "2DrRkSywERXKM3SmJ5UCM55zYpoeDr2ktUtjKhPuVWkoKuEVPs8rMSZshczNKQg1Q1RDMDuWGv6vpS1acuR81UuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBVqu7D6M3AhrD7iTfpKrArfLjPdwjtNFTzPwQmWoZZeeN3FPNURgq5x3fkFkNRzeJYQTb7V8jQTeTHwTfHsCjH",
  "key1": "23vDMBAezEkmD3JYQQRW4CMJwYu6z1iYaVGD7pXupvJnv8jewWx8TzZCeUvvBZSLieimHc5WT7nWRuYUC7hS6Koo",
  "key2": "5n8s12NkR2M2pq7wg7W7pP4qbtdHZqQwWKZgW6Fv7zdd2BrUTEP8EAvXnpicEpEUM2hzctzeL8xBXxgLNP3PyyZQ",
  "key3": "2c6nBVMiWhM56XRp8F4XAajURYLmZgK4gi6nei1pmHdDzefpN5F7rCp564KubZHiQzA2r5eEN1dLK4KgLfcqkH4D",
  "key4": "3mPe21g3Zxc3Uw7WyTH3r1jVxe31cPPSZbs54PETCQFYneVjQCz2nMqckd9bjEuTGbHk4FQ1XbUy1VNLupvDZLbV",
  "key5": "35c1puQTbXF4dMctuyiANz3krnj6wrLaNqygpHhQLE3gtH129MGoyUUrHBRnwwBxDyBSBTiqe4vmb1rRPf2auVuF",
  "key6": "57a1hbe2AhvYNZrgeNQN7gMx8j6uZykDjvsoziqHfWN763Ki9mgyak5nHHxzaYZEcYgXUpdfF27EFQkbEyoWGjKu",
  "key7": "5G13mWQQx97PeYPFMAKt6DGY5w57gVLtzvFoZX4ePkMPL4f4RMrBkGmffpMvfZSFXFU1fJZfaQ6rpBdAtVuBDN76",
  "key8": "4oon2jTeMW1NF8pG9aZd6aRvK6Nxssv9zN2sxgChmkACPwWzEE94Yy71nAvXwjFPNehxYPYLwreDmJRzkKd5Uay6",
  "key9": "4EAUVrV1vBhadSvPYSHpH2nMFpxkTXtv6oZ2PPtwc5wFh5rtT6ot96tLbFyCf5KQ89ew8xJv5ueDbMTP9NM2vJuZ",
  "key10": "51pB6TBRruyLphzXrPhKGE5HWoyJvBYQZvQqKLdzaQUj9RoAXGfGcFQCxCXV2fnzzNY5PGwEdjJjN5E3YW6D3ea1",
  "key11": "5JofhXZ2ycfEazxtt3LSXR65gAh2mToaJh9vWwJvYarzvhjJMHsWGft7c1RR8ueCPfYYWUsavbRzFb9v9g5MjeCn",
  "key12": "33PyGuWtHVKeLPqvQho8CzhPC3YQq45DmNTQJWfpuiyMEzu31xyKJpmP4HTAMDPqAV4iqaFQHj9ikTs8nTpRR6Aa",
  "key13": "26446SNGWsaZ7yhw6sohraXpz5iBB5JYpNw6vcbwrJ7Q4ubL4esAiccEFcH1ABe9u9TuA6HfCx2g4pdDUouWgDp5",
  "key14": "2gzHGkk7XbRqJtU5beq189kDQWGa72UJBQvnWFcoE9MMov31UQt5HMjbQxqbKQXTazfsaXA5FYhtaWsKmXxrYdmu",
  "key15": "wWZcK2fF8TRd3asunEvSPk4CpoBmCchWFPpReZzM8xi7nStrLqWiD59E7eknfooVWP2697ZH8kiLvS5ZFSdVYhJ",
  "key16": "2RbgEeghE4or5iJGxj4GHVTubNrQNWYhVBNdXZMxF2T8D1RE5L8HWbY7hQxxWkMsXwbWy75PTFGM8xNKRWfBda7e",
  "key17": "46f94GpQT61N6sqitWkVSsvarQfVeT9a7sxu1c5tpTZjT8PyKpATM86k82YmTHmpZLnmqC5xjbRkr94BVsuyveVr",
  "key18": "5cPfsVrjAosELa3UagEteusVekarhthbWpFDVm1HvSLTCL4PoaaNThwp8yHmyUgGvZtudhuN4EZzxDahtgKYeJzw",
  "key19": "3rMG2jop1niT5niX6zoGvD52cdqvJWxcFNjQuASd44LjyKbXtUhzhnNQbcm4gJSAbhHScURmwETw1QLpy79NugNx",
  "key20": "phebX23Rtjpn5B3jHtgj4RWWXp8H9c3F6U1byddcVoWB2epa4sXKdnhZnnh6uVoRLjuB1nhsWhBio5X7sa2Sq4n",
  "key21": "3Zf3H1ZM8oUiQuhsTo9uXdQKouPLSqHZuvVVq1xBkLyERCj8a3KbVbegmXppvUvxddhjber4ckxvStgG3eaumjUc",
  "key22": "XbUTuVBmmfgJvDqiN9ZuLS4ViiXnqwkmqHE66BCf7mrSKeu2577mrq83kMMEoMcyE7NP1bedpxa2HEFLtxWhaSh",
  "key23": "2mH3kWAyuJJGWWWF8u1Zdbf1mPeQam6wbyUsiDuNnvG99e9zpQ6U3xHdtGsrRWjccyRtAZetKu6KDbRuuqaHMenJ",
  "key24": "2TcBb6BhSo1pCradWZAMnFCkzL4xVFgaKzMbBYgbynL2kkeuruBdgNWuJ41ymPVBACwFvCXVb3XmSR3DeKVc5tcQ",
  "key25": "43rt43nBf8JuredzuFEPZBHcyx2TmQXRRmcK8niuJRjVg9tzQJoUBkEB138m6u6AaSrR7B6GhYbm8nGKMnMRaa7u",
  "key26": "MivCvUuvPbjFGfbHiEyKmSXoUPuBdiUF2RCFu34irCDuiUi7Emu8msYZ5j7juceS16eRKxGWaqH99Ep7g5jhzaz",
  "key27": "5TU6LyPVJcHXNAgk7ZJ5cWuqkFjgxMFCwD2j6KBL81tAk6WDA3YeJzEUPmMcgrErbxkJV3tKo9kShov11JvgPfBZ",
  "key28": "44t1pASgwUya2uNGNrctBxYFgatxX5c4AKCWUokJ14Ed4Seb1Tj19HMFdwsooKbvLKRngBYkTa3qS6Ux5xXE7pAN",
  "key29": "HHc42GEDE2rytsAbWv82Vkpd26TGjrPDeEEH4iJvazChwNpwsckvX3ZxVk38awx32vVymVeNsJTJ56DjN4DrMbn",
  "key30": "5GWKCADTYM3fnsUanq5pLJYGVRUCri1JQ5G5tN2u98Lg1Eeh7xFSskv7PdAsp3ooHeZHp7y1jDgcC7gsCTnJFxbu",
  "key31": "45eJ1zU5ATtPBfviHkUyPbRLa6CKMpLqB1dVXS1DChrxRH7N3KKcnSbT1o9oSwJ17qN6wxs22PjhAHmcHpLFju8f",
  "key32": "222MFcHR4J9tUghbUaPbepCwyGSPU5yfMUEe2GQEuixraS9SRFUgFmkqedJtKuR2hp9NaT5r8NimgsrsMNeEThQG",
  "key33": "XLaR1QMmoQ2odtxE2E6EGmStvWpcFHWVZNmJpn64pf5qBdvtZnF88uoYetqJZnwAxPkPEgM8V898mHc5TqA4xsv",
  "key34": "4LrPXjNemVhniX8nVhYg6syUm2TXjnkHPUAq9cXsWx1Vi2fxkCShA8DYs43Jr5m7p5dKvbB76B1XeM8f1NadUSwm",
  "key35": "46fU2KZejWSSXQqFEghExnxZWmXNc76THniVnLFoiwgevtbg16HdA6j535LrtXvzCi9S5rLk3V1HCa2qjdVNbTyu",
  "key36": "2bsUSaUeghYt2GcqRPvJ8LoobA8jhtW3jqJBV1FUsoZqjyFjRPpSLsECeJgPUj4hn3C4usk229nuqUG32nm4nD53",
  "key37": "66gjt4fCXsaQgEGMx1GU6hyJ7cTpYcJMJvE4yca7UmmtH64kDKma15PMhhLLNA1UrRKR7whqR9PLryvXFCR4ArM6",
  "key38": "X5HFCdNb2Hbs76z1cF39CiBKyWY7t6AsiNUD2kSzuZasgDhmJ5hD9ApspXZpvP5DVswciVoXo7f2hWtJ8WAJ97Q",
  "key39": "122DhMCD9pTrZz4c2EWz1J1PXxDfr9rDpsgRuSfUvSFC3gNZd3kr79v81k4DjXiVviBqdY4U3jVRNtoj8zwtZPbL"
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
