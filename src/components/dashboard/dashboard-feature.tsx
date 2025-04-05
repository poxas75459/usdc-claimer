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
    "3vv3oHPyNaHPLoF67SKP5b7nXYFW2ketU4eFmtM85nMvEVbtQvpTVHrtohykMYwWR8v9o1Rh3S1xZ3MvA4eLhn22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSqcGCdHAEZjZhVSWZzTdvvXJhSuQUWvXtUgUu7oYiFjgXWm6dVfyNhiaFAEu8XcW3qz9Tpx9wZYyYfk66Bo48E",
  "key1": "2HtYdcNC29kdNWLaCLsiBd35ED21FFD6MRCnLJkBRQiMW9AVWp7eQe7NkV1hJhNH8Nt71vb38iKy4cCvS84J2Gqb",
  "key2": "3YX2YbyxB77Pmax5tE9pkzVnZBbdbcj4LsTuxc7GCtSwuDJrYZmenEoXYDnYBBqDRL6Qmh4A4pjZUvV4KfX5V2oa",
  "key3": "CiQEdSS55FYTWg4Ne8CjmRkm8UUBcHrAbx7Mkht2FrkVCF4ii5Wj9HF2NU6S9xH3mgmsdU4Ti5CbwZFshvU1zGX",
  "key4": "3V2HZAEKpFn2VpmoR3qFPboQGLqCEY9kwJpRufw72qhtzKmkX7spw6jNRkQe64ykwHzjuJPdVUKvQhPGHXzekm5D",
  "key5": "2BuoCxAxG33EWVikYw7QAgyDkpLncnBfgFAvG2jcuXACfMQa5MHe9Hicj9BsunbjTQmhnYB1cdrAL5fQsS4VhFXo",
  "key6": "3AvuoNz8AKUnF4BWdTwiQCmuwgiWTBor7kVxEwij9J2GPsd6cFcjoZvD1cnSHt1pDiextDEinZ1y7QTrRm9b9mZx",
  "key7": "2HL8N4c8B1SiEvXbktPmtJXbY9QJ37hQcSrnWEa7yN3TV6Yuzbs1iyJd7Ep4GTyXTDT2pTtqgo8whA3JCb4QH2B3",
  "key8": "5ZXecEiCrBLHf2XWUujcazVsqBB43NLQXycjEtRpD99729UhsuBXPus2VZdkj3j8VXpgbaary5e5z2GZ7FZhYKZy",
  "key9": "3bDqFLdAC591iz5h3Ci33T5vfrut1Ba4oQgPRuKg3i57ZCw9vL6hc4YKWqcGkZ4TMpAvYrAVHXChzNyaurTpdvw1",
  "key10": "4eUQ2cQhzUvnf81MZgtrXSd6QXegoHdk8P1kUXSortUMJriZ27xPSYr6UpVFW9AmpKRVxiD6PM86p2uUcMZKaudF",
  "key11": "4KxppkxUHVAZCBN9ySE98hmdGfggghDnnRoAKxppoqCzmfu7dFt8g6dGKSsQeNNVtbhZfPcp8b2HkPDRpzDtu9if",
  "key12": "564Vrc8Zr6zMGn9orPQhgXuCCefcFeuUbWn7RwGV6jHciz54gKYWmWHRGCyNvfJGP81Zxku9Up3VU6ocNtW6PAKZ",
  "key13": "38zpLEyMuEexyydHRKDsuzvp4DpbPpT8UzpAoUZjaN24oCVUa2JrgYSZqpJSCg1wpCynbgmVTrStWkEtJrebo3TM",
  "key14": "4R8HPMLsGuJHCHd13BPUQ52kHSRvbiT1ZFzLoyBDafqm3tQ1WJeNeWifsXS78WVo5XK4D1hRqvNMEPRD34ruZR2J",
  "key15": "36zyjo3evUmAsn6z5SMp4FXo8FSe2gYCN37WZH7nNCMtVAWRY1adCxVTh9c3uNnq89q8eepMvcJVdC53WcFsX9Xx",
  "key16": "5hcoHonoj7sgaXUMceo3auQCJzr7C74f6C3eEDSChTsK3QFWgexKftv8QsjmaaDz7z8VyAB6vpEPLcmycYgb2t2b",
  "key17": "5227VcaQS6aMcfkESe9NmeLUAnj9R3oD7JWZUXXFJ25PTRfUBGAcodiLJ4TRu9Sbi6YrmvK4AQNdKdL3EGHsNdcj",
  "key18": "4WNhdj41oW66VkysBkeg9vyVFXW4pM5pcStFK9dUDZU4SBxsD7jTirnoJx5cNbNfytJyzgVPaico6MNqy3jWtSc6",
  "key19": "3EEJroDjpPheds8wokzWZRc1VZ29SCSNPe7JoxriYiTH2kj9rtGSu7XuQQmS8hJEhMiNJM6AkHuKXwXrj74NWPF",
  "key20": "5XnVRSyCqHYXBPji8WYhALAXJugMUdTTvPtY2rJFwMvZaLkP1wKHC8Gy7jHUWWzrEsqHRC8HkT8ADsXqVX3mVvTG",
  "key21": "4J4HoZUzjUvvngmRjfChAamgrheG9nHg4HCpg4HsaQ515gvkKUSnkJBjuefKF6Heq16ZHTBJcgrARU9vJkfsjq4a",
  "key22": "5RjZnMJ8UL9r4ZSwSy7xiVWTX579iiPNekUopiUzf6ui8hXwzkw6ErRf5tA8zGnR7dJPqNp6RJ7fkM1JQc7UkMxo",
  "key23": "3Tfx2y2c9SLpnkqdpFbbiSbyjoHbNBwo7J5JXkpoLtTGLrs8SW4nqBsd71Ya2fNde59faXUzZyRRJakDMX7A3M5T",
  "key24": "4ZfrhJezz8YXdn27kATySxSvLFUbXmqA7SaRipkhh5rRdidiX13DAD5jfC75QKB9tV4hGiYykXeAPhVq7qS4WhX7",
  "key25": "4jUsTwMDWDp5sTzLPtdt293Xw3aDmmkn2VDZuCkgY1HYHVaaeRS2WMa2ZkDikcgxWNgBpWvRfu5tNzBgue3PGanu",
  "key26": "5GP775HWoJ9cveSMmUTewu5w2zTxphVwjxGHp6SoeJ6XuCaNWfoqCSLLWz9tgvsamF84QYcmc23mh8V2zyvWvx1A",
  "key27": "2GoJZ3YVH2A3eiv7mxMiqfdUdNeBbzaFw2gQZVLYRFnzdviCTaXwABZzETUu6SNUe5KKYYmLUgZ8TRWt4HbhqNcB",
  "key28": "4J8V8rHsymFn9oW9xxgheyvquRaatR3xHBVV5H37wD36sdikgbQJjUYxPJckaJ6kHzmbqaqHuxC67GhTvJkhCh9L",
  "key29": "ZtxSDmLSz7AcSJfVoPZzhMxXz9YmzUEeUkJpuFkYXE2JJ5vWuMXi49NHZLWqTJd6w55AR7LqGeqjCkWnJ8uaSjF",
  "key30": "gYhcpsvEr1B4N3TuwmE4NuefgL2h8NgCUHYMwFATyYjoYMNTME3kQBdLFyKwaxhkgetqngZd2ey6cBMx7avSDfG",
  "key31": "5sZF3beKPcwKdJ6Zhnk2RhzcAEFWBuDMK5HvM3ZkbbEm8yrLMJUu3H2AnACP92X4WmFKfCDuZuapH2ZbwUG76ruW"
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
