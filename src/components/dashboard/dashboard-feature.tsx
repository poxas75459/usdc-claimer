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
    "2WCTW1JB9Kg9yC5fj9Xx8NNKWEU26LQweVEE23Cc3axKa2ZiQthUJUPxHhSjXFyaUE48k3xSG2cfQtFzoFnLx7cJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfvbZJxmbcjuqzLRRv1oTXpxmT73Db4P5KZ4FveSTM5Z4WuekBubLRXEfJqXeX75cX1A36aDcB1m2S11P97iX57",
  "key1": "4JutnUMhVnpxpCprs1CqUzEiLcFaxSTFrn2frDQ3mg657JjcQx6rUxLXkrPtPg4MBTYLDym8gfu1sPWhZrQpDR6Z",
  "key2": "bct4vHkxMFrMtJvhL2iBRGpCVyVpPi9UGkZMv4G8FWBwyZW2v6kSHJx2cmiRUb1tEtiGtLLxSbY2sSKkh545Npe",
  "key3": "3SYuNmnpdrdH9wr9DGhu4DZvYSFhYKvTr7QB2FR5WEwDybijhzhLKz6eJuCPfDGJbkAmqRSGZ9r9XWsCuWnZKFyP",
  "key4": "4W5AiCKCuUp3j5Uxquu9KtGhEjndimK9weTw96JFxbA5X4osAszuREoVrg3EMoPZSVUCmTHomfvcxdPaaPgQXAtg",
  "key5": "2UGfrJYwag6YrJNynNuC1CuQZc9x1APMAcuUvxL7ymz3mTtLt5oGVkko4PbKY8RZW9ryVXQc6Pbnjan7JaM49Wk9",
  "key6": "5LfmzRvqaB3c2PdrMshQ23ZmCkXzG9hWJLi3KBGXGuB1KHygKwT5fzkWMvHjGdWxfSiCcWrV7eCwUNHvNkZdvuet",
  "key7": "vVDkABasAg8wLrnoJYrGd4idF7nQG4Ma12M2V8UYdkJPNRqskKTDuJs1tbDhVsZThJy2WhBzPqEAfegEomHCr5K",
  "key8": "4VPSt2Zm2PNxYE55DuBDNdyT4BEs8kAK3d1j9BwwKnxPS26GU9nPiffdKwPovqWip12422ch2du5yFuSUYrtXbbk",
  "key9": "4BVWdCVBi2YtAcwxHq6cvgKQzNbcdwrAVxbKGa7hYR8RDuz8hV7z9ur9x8mBzuKrSvQFXfhB89DRWWrPSFg5Pctb",
  "key10": "djLESChrzXVjz63PrHd7rdLejWn3iSgBbuaDwm5MVQtsVjxvwNFXguX4ACXfCnvXYrErsJciPuFPadya4ooeR7C",
  "key11": "4NDMKba3dKKvPx5AFVwqmJv7zmrcnLPjuCpF4xyxzWRcLqZc6jJ1itczUMp33kgnmJimPDmZHQgzBaKytg8YZKAW",
  "key12": "zoCWNY1xowdbTvxNkvXCzBZ7BYMuuXTfzwQZRyChZSNe7RW85SQGtBg4VVB4JMoXtMRty9EoNDERM5vmGN1UvFs",
  "key13": "oWg3iy5rVBes2SZT2NgZaVm2QJgz6C2qcMu9T4Nms1tBHtCPo1CFmVkSWbigvTSdtyCoMMeakU7jTGCGbaeKcZR",
  "key14": "2Q6NUgQzf2q1iDX3KebBn94yX8EkH5DfAQwA3VV5hfDcQYj67mSFNgYHSAETdEbBm3DoLPepBNqNWC1uAm59rsgf",
  "key15": "3XJu3nTLwkKbBh6NQNqBNyC4oRE6UeQuQExY2jszeYeypBGp7WdWhQ647pYc5q9gfzfvEiRVqTqadxfDsjdQFQAJ",
  "key16": "3Jt4qZaMLVqQeacUbuXCNWPQ1nU5KkJ4R2bWVVAXuhf8XbDLo9idxqYnZC1fux1H3VK2zaQ2joCKvweDMTQoDxtE",
  "key17": "5uV83VfgHFXJDVADmiz3zGGjRbyDgnyX2gdLvowmP46fT8CcYLvLnzz91oVYs87pLfrYrtv5G9JXBZSEjhqCPm3X",
  "key18": "4ukeaQs6rA9o2gbwQ6wPzyYJvwzUsRQUZTGRoD2zyeeDzH9gaHWVF75tkNBRg7Uzr2zm22opY7uremewvS4Jcy6v",
  "key19": "2hDSU7njewTCkKrTZdsd4MVwWLLhyx1pHXCwQrMvHcbzJqjwYZyVDWnAYpvriBjtmU8dgvnxmnvpGabmvpzHMcX3",
  "key20": "5u5jE5UKd2FCbCYcJxPaQBaDNamAiwqCCpLieAb7UUdxcefa9VivdWHeWZGbsirGH6FNePHDjh3NoowwAAn2d73g",
  "key21": "3yyKv8f7xHAb8cxjPoXqyXXQqpjQjNTdwLHjYPv2SFAZpU74DBwYSrcLKVHj3hCF4a6opvUFsnEFs91JDaR4beLT",
  "key22": "35ssS9zCusvk33tLShWttYBG6w7LBAYpMM2EYD2cVLpXm9LgVDX4jaTNPmLnytBDnuL2qy8qvAe2jzR7sBF7vdVc",
  "key23": "ENazN3KVkHEfebaJSAKy9zYjoSyVNQp5DirsmCvCDWuZVp6EQ6XHpKsWJY3Qkr5jhyoQCZww7ZukXichQy57SvD",
  "key24": "57tNR59dwPBujTRNhsHXEmkxxiegCuycg86ND8PevrxpgvqPRPToTFKag758FNwKSxZ6nsxmXqK8ruZiTRM6WKmC",
  "key25": "4wGsPo1UySbdbnaGAhnidUD928w6fFA9JiHAdNaHe8y8ucfvp5BieG9dqQ9GJn5gxiizfHnbpjbWsEtRG8wekAXv",
  "key26": "k22fmnptiApcECpf19KQAo7aXm3PeAHqg2tWztepYJhN5dTHsie9Y8vv7cfDZMpnF8tN4EJ13Hpf64woMRQfdf6",
  "key27": "5YWdTQEKBVEQQxwGaEdu3RngsVQxGDihiihqrwxbjuGzzqwqcdBFtd2Rg3D7WWxdrpbwnaPkbXvhbCTMZfDtqCBz",
  "key28": "32AiV5qLBYsq5117fpqxTwyQeUsNYxc7d5kpNgakbLMzb1Hk8QugV7WWxir5Lahu1HpPRcWXH4afbW47RbMxrGaK",
  "key29": "4XdG7rz1AuSpTzo6ahmvNM1J7QWvLGnajCECDCpPjuq4rnh1Z8934suzYzhRScVo1ZV5aYQWci8qkCUdde1eMsaS",
  "key30": "4VWeL1dQc4yW8cJT34cpy3dhG8zGMkfiuFXpLzck63RWZXxfvworVnbtS4p81QnD5CgDTWbNCLD3bDLqqJcrVGgn",
  "key31": "62JofK4kP3mE4qqQtJLYGthM53TJErjZWecZQccUw8nqyn3frBjuAVjD15Ee7KUCxfFd55Xfam2CwbimTWeFWcXj"
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
