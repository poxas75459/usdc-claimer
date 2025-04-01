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
    "4QGtUEUqAdgfidHtSGEqjuUUzJiB1SVrNwFwCNcmxAy2SPkNVDP4BkW16wSrz7GrhfGwaAbZd8V3kijjLXoerqQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYoqPK6WoiCuowixmbM7exVQS5DWmUsiqZTLe5CrzddndxkCCHN5qPom2vcXrhmtASkoZpCzAUgW38UiDYu28rp",
  "key1": "2R3B3nmVe1nooiUJbBvNjH3p5gcHYmZwaYL8xZkWHHgxymjPVeDUrjhtxwp67hfnj5LJ8e7GfQBDHS9u7SkxbY5H",
  "key2": "2x1mPxWDP6AxWhrREALSbJTqZzbUu5pSjRjQvqTf2pXQKev8HNQdn54SkQz6oeZjC21asMPMdxQTV2AhQ2wbGWr5",
  "key3": "ktkPrvbZrHoSJbn3BmSJqDRGvnX4c3Rqv4Biy3XTdHJXVFNYeM6gUajY9rLLCdjCWu8BJYZEBw3r2TmfANVDyyV",
  "key4": "5y7oe3boHf8iKevr3jQxqrpBLnJ47GpyNZGZygMY39Jnf7UGkbJ6dd9qhtpWi7zEmhCnECSwFKANiXUDNatEq3m1",
  "key5": "2tB2FPJFAPTxC45viahy4vcAAqUAKSe8Wiwv2zXtpHroQTFrGcVRe6DToDnUqXus8sQcH7PND9j4rKTdXM4uAFHu",
  "key6": "4jQASnjMb4EvfgF7Ywmui8id4MfGurwjJSmwwAMvMVxjHctBbP1MzY3jRQC24tH5xuaLeUVgnmrWRPDxCoepQYps",
  "key7": "4nLDN9pRrVR8RndAcLXPyieSoBbz3tdXmTDDyfTPxLDDwD9BRcFp7yeyCtm8Kobd6WPG9XGbgwi2Qb6qbLTWZKdU",
  "key8": "24eZGpsXZTLWLKUggWbTNQEqjjrRwqc1yE3H35iQcryaVUaXt665WhRQQWHrbPEZ1MRfbEeRBHxGoKKPipiD5fHM",
  "key9": "4FZA4kCcbvL7G9KwCVbYeVgzn3nrf8CS1ighEze9LRtnYhPJvGjpgjbqQbFocV1d9LETc1krrwG3GxyeWZtfAAYB",
  "key10": "2hBbU39D1u1EnuNs1fALVs7spfczF2D5JYtid1qdrhv5RBs5FHZahXvdgeKTz5E4xskQqPDusPa9LVutC2S1fnex",
  "key11": "253xLXjwN1wuGPxN2cf5EZrcdKjQMKTG7uxCjKkn4UrnLEwmtnUXek6j5t9YmMD8sDX9pzJTvUyYMWB38hMdrKJ6",
  "key12": "ibJ72oQKEFqjRD984qHf77SfRU9ngtMez9PoSLTfVHhXYysng5VaMMV9Uq61hytsY3C4fYLkR5yWQi1qKnz6KvX",
  "key13": "4bwDUSbnfXWvxqT5rzzKmJy92vAkHsDkikxKk6bi6nLVFrtRTJBbjz5XaRNkVeJrkgtH2QJignnej5uddgTchFKa",
  "key14": "4nGvXdGc3t5K8BZoTJVK9C4nrTyDtcb9EWkFcYMcP7Gi8y3ePCrpCzTkzYpT5jGM8QQy8a1jem8ht3QiarbAKHGu",
  "key15": "aX5LXGSjegcj2aZGqVoVMAbQgGef9KekJ5EnwzN21dLbmK7EbEn15k1pdjYwu2d2LsMUpDhUhG5kF5V9Bawpyb7",
  "key16": "6gxvRLBAqg7gNxY2Zd8uj9VnG4GHo8ykb3PRpZuJetjWq3HVWdeRQ5s1aYoncnUSGHoa218cViUY1nZHY1C62iK",
  "key17": "jafQeXJkmkziYuxA5Hv1GMrm23CbruC2fWLkLjgim1E7D2EqmdnZW5pqBQk5bWPAbFExkUJ22QmUJXeGJCtqhNa",
  "key18": "3nfpYJBABR5CQiAZZnA3rcSSivhrmpR59yTiFnGX2851y4GrzvGJhjRtCFAj6bxRijJ2TXF3VyToZFsPXa9rb8bg",
  "key19": "2X7GHErrsf7UPmHjSNafhT7m18BoZCiTShJaxtfYCoQDDMC3k17eyVfCbPFZMHGyYfBvD189r8E2Drh1Pw2Ya76w",
  "key20": "SXX749M2xEfGVF75Fkj6tVG6dTB32VodFiSTX58iU1GWYcT4AbMcmH8atn8n2FNNBP3xbkpJXE4hu46YW3vvR2T",
  "key21": "K4meLVcYpSHNTnWN956zA46WwF28yogQmAUysgxrZVqfyzZQggfWwhC6cijP445fGfkWRyaF4LoVY5TMf5uEAZS",
  "key22": "2xXTGKGPTAR9BUHLMMdgUL5Cz33NPn7tdyPSGoewtyDc6hm6WRwY3T4928tFDYN4SWVP9rUpmVUFio879kiwd7to",
  "key23": "2gmgfUmEH6PjwjSaTQMWpXjrhu27on1f6NSf4r8hi2rGsJmmNUF35fovXGBgj5jM1XtdRyFSchAL3bXi9qzf8wRz",
  "key24": "Mi56RzdJZczbQQDNNUHsWuGzCXFnXJ8GkuYcaiyJATFt4KYrPgDZQpShbVojJYGkCyxPu66pf1msGBD7CkPACXE",
  "key25": "5KvcMcsPbVzSer1oCc1Ms3anNa8kN6h8fght2zRPA6nSxaGy9DD7hvErjMoSoy134gcTyN6pqSysmLEMqijKvm31",
  "key26": "4Xhr3ZKSPfqgCN4vDHEhNAZPYikSEXHeMjSKzV1SkNT4tnhmfrE5GkQdUA9GTWSQqxtXqRVC2UNchhvdK3y7uhxh",
  "key27": "vC14at7BPARh9bor1qQN3kv4Y4c3ZfDA9netBW8Sb2Bg2LdMU9oU5tYh2e32wYeu63ofQ8o7aSJaFCAYp5rSUxM",
  "key28": "3Fe8La5DXM8ixQ7kbWLXxGTby7UU4HyW8L9uHWpszo1TX12EBKSQaVfVNJJJazREoVSSiuStqkp9PB9pLhTipv2H",
  "key29": "3JiPA1Lf9jvNqPJjoaWPNSjm2BvYkFPNm5XKdGR61TYjWqKXzEuSZMGr3B7pk6tMQTa5v3yoPWHevisMw5rTYxV3",
  "key30": "47N8r55PQujsqJLpTxjy9u2AiwVe94KKdZzg4LvhVBDM9FWWmqTMxV9o4nahdoooeeEDr2NDmzNsk11JxQFYTeAz"
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
