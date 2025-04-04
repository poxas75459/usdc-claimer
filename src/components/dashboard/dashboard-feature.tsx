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
    "eesjUXZ8A9Tptkw3mu9hH5EzZ7TpLpyf2KvpzxyewqvTzSQ56S7YTZwRXLiGggHq2QDWckHwE42dDa7WDzaDSjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lj5G7vGELW3t79vfjrZqoRU9ePBNKNMs8Mn3YxymTQonNN8v7vQT6qV2kZDf5n8naaHmnQqF9Pw5ppx6LVF8kMR",
  "key1": "5FB52vMEAWU1EGiVCsnSb3qH8nTGRfBMtvJTZ25H759kPwtzAzvHLqwAo4Mx7iNFJtwnNL1xXwi5VTnuuqL9ACeG",
  "key2": "3VDQ6FNZ16zr9nD8nbpDPoHr7twtK6cAmTmw8GmAuPHrYUtw1DQ7MSjqGLwuDojDqq5RpjJcAMmXwqP72WTAUzwk",
  "key3": "efMRk77rTUszPWuBKVDHkkUALZqtvJoiejYsHGcyK9qP8V7YVcSNYPyGatDPijtbeinBV91UpAxxHYDK3tqcBi5",
  "key4": "3iH2F7Bv16f8gEE74QDPtVhXRrLcbhZzN8XejdLXXgBxo2Bvge3kiQGr26GPe8AEDdg9o2PwtKxm7wXwEV5F4j5s",
  "key5": "ffiZGwma2Wow621CrkhsKYLr1sASak8sNVJrXBfVFs4GRHsDhfjN7UJG9hjAnGqvxYorD1abBdMQLJggcJHrv8G",
  "key6": "2RA6BDsisvrre9nyw8CRTMU9GD9F8CJBbEj3oT2xUH7rm31UBi5KXjWPiQ8a4xzpgsXNmYXd2LaWHCV7EVAYLrGV",
  "key7": "4fzWHC55EBFUv1JXRgxGkcZMzgwR5NNMYDYQjRFHF1GYv7mrdpz5zQqznhvmLEFMdUSi2bqBRzsXDGXWDSHUg8So",
  "key8": "28MEtX7TvfFEXDk2JGnNVQFDGYN2zPZ5bvYHkoKsn6i6kagSdrxsHtcTcmm8zZVUKk388K4VpAepyZiHfLLvTAvy",
  "key9": "j716DSExdcqGcScutkSCort7abk1zk29s34RLPfPKBitmsb5amAd3kpcjXYzBmvS4ZzfmjWNzQveQ3H9KetLHjw",
  "key10": "x524k6jzAKLxPaTrHNd23vAYQzmg4WAv1XZEhMbeQYGzLoT6bYRjyB4iQ4Hisby4gU3k9XTxfa5EgdCQ66zjwxw",
  "key11": "MGeKH67czyH9fSiYC9GMhDfyXmbYnRtSn393RHcWefxXUG3Tu2ousHkWZiqbHUNmfFgn4WQZr78trqVDv8B6da6",
  "key12": "4BA1QmmZK2mtztZgAvtVuH6P7ZpigbxtwpoYszAX6L6Vyv7v7Buzu4AKYbtF7m1ejqxVjYCchHXdhThKVHes13g7",
  "key13": "4vfzrSrhn5pBjWsu25RuAoZMFMHtTNYsCeBZP3NQGFsvTXETZ4xGZaVo3iPLVw1eKZdX23Tp8fDie7MGsYrJxc2J",
  "key14": "2K7vRNxYxa19spKquJCQhdqShoy2ndLVsBuX4ycvrdFjSUpdeGgbbErE9yzpVhZYyYmWhmpwN1tLTyzU9aCPhwPY",
  "key15": "UhMYweorX2CLfev5qYxREwEzdsPmBRSsJ61wPYF4pJwRU18A9iJuhd9idGu9HThoDSbR6WFtT6ZzSgcGdqQUzgy",
  "key16": "5Nz9LpMC7AborQHLQQ3pqi8fCcAyCcss4fnKELXdzAYuJwZinSTuLV6Mbayj5YYhyAt39jXrwg1J96QmcVgj6QVc",
  "key17": "4w77o2om6eU6q8ioxF492mE8sVVpRh2J3udMiaYXQe98N3VZAVStP1apcxzBDp4SoaMYn5tbRSwFMCfHApbVLXG",
  "key18": "26omAPTpUkE684i5HTXEyeEiyNByCoZcTEuGVTm1g2yhTJqvWp8cRfvgLibeSCsVW1dqAoXJxPzhPDvSdi849tUx",
  "key19": "5cs6XY42o7Vykm1dQz962LPdUDgTPYxPvmzZe7DzUiF24fJL4espwxijEmLrqyTBTsZaEbGTGXMiMgGXcNXjfenj",
  "key20": "37XwDvTYR3es61pgQmYyumk9fes6NjHAGYQL26jXcABkL5FjoPbiyHuTuL5342QbVmGRbkUopgWy216C48MLcR3A",
  "key21": "4dQXS1yUkv5rzHHMiwVmoB3md3Dzs8djfdZHmfZL7emScWHBEjQ2oVnwiUvjZaGfNo4Xp3gUDwo747kp199TjoJL",
  "key22": "Z7kzBfLuXMBSfBJwShUkaQ8D18u5ehQHGynGizNTXaeZyUH2DyF9gXFjzU87R48xgHHBXyRDXtVfHzkddKLLtck",
  "key23": "2RLEWAdV29ePfFjF9roxL8PPiyeTQK59Bd719isLoovqw14Qv6atPA8h93SrbR9x1Zp45XqTeYs5541ANP5fipFy",
  "key24": "5Ct8aCyGuUoBZsqQj53Lb6FhzFZ89pLvVCJ3k7rkgo2ihS7XXcYSfP95AvKsFhjr79uQyoHeh27LSny4Z8k8hBFH"
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
