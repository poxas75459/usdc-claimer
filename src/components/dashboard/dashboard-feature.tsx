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
    "3hH4ecFfgYb3e3yqu57Lk6P61aKyf89SB2RR9jqmxSe1nFLpT8hoRFrtkv6usAV3Aq31xNMu3HmCkVgmgC1FEd8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DpnZMqZzxA9tVeKMTDiBhHr9c5SpS53vN3C7cLL1m7tKy6JLeP9uC7YV64THMMRGNxZqfnevkrBQAWdNYKoPoNC",
  "key1": "5u8doAgPHAbEJTXktt8p68qfjTtAekTRhoHDxfeKP4oQad7cHv5forqCP6ecx3bTnW3RM3q7uvSoP6x8PEB4888L",
  "key2": "yvrtNBCN66GXPffQXXMpYum23do5ZxjYgU4ydAbAEfftyhdiZFHUYA8E1pTurVu1JiseWs92BjMLu9mderrNpR7",
  "key3": "23Ee3zrros2PhTjWcgqjYeFFXgKa3nvyUY4X2ZVcgxScWR9Dh4aprkaYS7aWSzuTMeeDzTRqPuD3uFg2vbKawmkm",
  "key4": "mTNFHAbm7L93CfG2ABCtfoEwbgXuWeJ7mvokjvQBrnZzBgakk5NrduJaPfdXhWaJk9TBY9Pu5BoXu3EanRwjg4J",
  "key5": "2DS7mBVskofKrz4aZf13fEc4ZJo69ByWUMn6uD3xom1BcxNB1qHnoFG6oN5JZfMKpvCRX8NJsbmys1YBYAYQ4m8y",
  "key6": "5JxFLRmWZwbRagkQDp24Lajb4KSx1F2b7RaQmwnh4h62EeYxdgyRaWnAq3UUTcx59RFxJaSekNmBtLJb4PxbVBgr",
  "key7": "52snE7kUhAkohNFDavkkfVpbe4mdTfrJcCAXp9jcQ5Brqnr8KkM8kov8aHBo1pCSfKCgQ6ufSLk7rmYvNKNxLAta",
  "key8": "3fXPbNa17TcEFpE3B7T3FkJrLUzxUQ2dyTtpYHmUpxoaTTDWzeTrdsqCoNpUoJNcjSPT7btQE2BLCoiPhcM8m8z",
  "key9": "452fpJNKEWArdNdtxfUpUSb3EmuBqfAznyyq9U65FAuj9zoHzi6vyzfLyDb4P2buxZfQKLsRhpriNp4resRzR9Ni",
  "key10": "4VRPuhc7vS7bW9FL4wXMRJJwAhvF83TaJTbzcCcjUBvLzifbHCLXkcDs9DqqKZcFey2DP4XbqX3Y6cLKGFo4J9hg",
  "key11": "2C8HPhQqpurU9bW2bLYiQk3nWoqZPoc9aQQ1qtkAQ93D1ztixCqyjudfjbsLnhAj32Z5iAiG81ciBsnCEE8HjKqW",
  "key12": "39GhXwXvVFDGrzV9M2fHFCH6SQ56SyVqZ7QcfDuSqt3BHNdiGF6UevnYC4pjJcYGJ78txDMWmzypWFJiUqEnq86c",
  "key13": "4RRCHaU4ZN7H3kdTURjfReh8Kdo1GCfw6gwShF3vcS9tLJ3aFHFJ2iZLjgzGqpg8PjbK3coMwSi3nwQYwjCwwoUE",
  "key14": "5g4JqsVb1wFM3ncXuYH3nhuyxJ3H2Z6hdxZUg8FzZx9PQ1HsZWdMtGwMCYiq8gs56zqtHaKsGx1PdEcw1TgDDDmD",
  "key15": "2NpNbcN2fSnCMXM8W9YqFY8uAS8q8AL3uZgxZDJV3hEr7WERmUxgfGY113uDucqFhWBVUaRCDB1W2LcqhPQyNU8X",
  "key16": "4dnKKnCVZLT7c5jLzvVCTWTth5cx1anec25gKcHUdV5aFiKSxDvXxkFekS4PKXHk4djZkHXSQTXwgckZ5cSeRPPh",
  "key17": "64BwP7uueohX1UK2mRaB8kUUWr9UZicHWWxwBTYaS7ZZwwxcupgN3m9tMAirDvFp8Ekn3fyFZs5E11LJiQCFwJpq",
  "key18": "61MzTYQjfntNBHh7ekXbmzUptFiUEAVdmSG4ozfosmvpczThGm3p4sVxuvrZ3kEznXaSYrBndFkpuDLyvprnaXjW",
  "key19": "uUd3YfKWicxHfi41yN3S7q8rr6DWVgBXwDL2s5beLRptWxzEqcChPBjeBBDHxSY3X6nApV6FGGH11SUDp95paY6",
  "key20": "ZrtEGB3DiP7WdWiT15hcboDvjsFNrfqigVeKZJNyRZGcJCKsKixXbbmHyPsrEMewpkkxYCwTCWXwyBJuR72ejZH",
  "key21": "3ggHHgaiHAbmVo1UigCAFqn1gEfQ1q51SohJrHdkrdJuSXJWYFZ5ufdfPTDeUxnnsuEncFHoiatuoaqpMHyzhEqn",
  "key22": "2Cqr7sHR3tPr8ei3CWqeiZS1PvueTp6y4rfFexR3Fj3RonMG9rnhuUK2UtKd1q2q2CkG6TfWHPvTqpEnUQhPtQ2n",
  "key23": "2qZcvQMiPAu5wx8vexXu6duJaq93MTAWQqaacveTCNR1ciSKAa7Kz1Mp6N68SM737vBgYuxfzorVrmCGCoQwXFg4",
  "key24": "XR5H57WJq3s9kVQ4f96e951kuRu1GFRo8RA6ZgBHry2iEiWEuKGKnGowaCGBkiJy1tC9NcASu66Pxoz77ypETRf",
  "key25": "3xPA9uhRhDrXuUsADfCVskvHpojYJyKLuXEwTYsoypmJWVjeRXjxJDdLa12FJ14M2khTkzDBam565aHysqkyx5pu",
  "key26": "2ssb64kmfAiksN68GTp4G6Fv8NtXSp4gsbeEVdyvSurfUzo4Gx2wm4dNzztHPB92Ct6MBP7DFtEfoHV8GvzPXCcZ",
  "key27": "4fr5eASYBC9BrNyaQzuC6kYZxHbMeeDGJTAXnK5BhrZVpviMwJASWcfVVwYvpHg1eYk74WUzM3vRTaPz11qgT3rS",
  "key28": "4kpLMacAQM9UjE5wmUnjwWWcU9x4DRG2mPgQBoDBEe1SocatWxzqrm5AJVf6Mj7KGMsHpcKYTz65jsMcUXh9t9nT",
  "key29": "3BS5vBvBuM1GhoziurmYjXxnwXQvXaKS2GQU3f4A9AT1RnQzW8mLvLXuX2Nm287Xfg3oisGgBwxgms6TNsWzbipp",
  "key30": "83LxBe5Urui5HmaZdmYKsFKHm2TQz3nYg75ZSHuriMj6vveAgSBhQ4ki3ZvdaxK644Jzg9urZYxRKxkSpFZs3cB"
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
