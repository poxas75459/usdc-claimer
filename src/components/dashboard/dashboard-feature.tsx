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
    "2Zko92aKXcxXjaGJCfZCV5WiPUbokFSUCQaNFiDRAmCcGZSqiwsGqL1BoH7Lqut4upPoVQnCgurTcKyrNqFVVJMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r9eAYEmtCWnsUosYqC4dVdwjKP4gD4NkrnEjJ2PxgDkfaZPn4yCBRxZNeAFETTdaMjgecuf49wcXZ99XoBGEVbV",
  "key1": "16me8xaJC5A1hZVHuYBYs7a3h1YuKy63vW4Eb1vjNzuV7btzYmCjCS6eaFYd7HKsqdbpfPa7w3BRNtJ6i9WWwfP",
  "key2": "4kyK4v6zFp5KW5Nswgv6ib1ZEKwCoFh3hAwQytM8pPUzaurYudYBdeMMNVef95JuFPDGL3Lrva8FfSjCYumD8rpN",
  "key3": "5ZRgimVk49XVo8A4weX6C7GoeLvCvw2UQjFkWnbGBWQ7y6DR54f4xp8NbwhtZ2R8KSKsfXnYGoB5i8ikg52M5tcJ",
  "key4": "2qkv7HQLnkDY5a4teMSJL4dE1j68h6XmJ1NZnyrCsFYuPAdc6MR2BK43Sj7Lc6R1LZa8MFQeXG9C9j8MYbVzw9oe",
  "key5": "3ENG58QR7Cmata2X6cxoAvC6V3UMymYaopVrvL5hgj12KxmD7ar1kS5QcYU6FSBHbvCtXHkWLqgaWA6rFDZn5rcS",
  "key6": "6j1oJraaETCH61HrGG4sbTqxHAxdwRpMNWSXNwJ22qd4rVyqifjs8JMUkRmQGTMDruu9YzNMDQRyoYYZW4FmVgK",
  "key7": "dvRViBvi58oaDYc1pS9mzhGnLukeB3bMMnyXEi1CLwXXop8UutY1SuRJJQBvkZCqPbb6E8JSiwJeZLp59tK7y9o",
  "key8": "2bxev3LWNUcKs8tWZw26XcuZet6Z4E8DS5UJb5Z9M8uofjEtR1ed6xpuqse7vyks57Z4sEwDwttHNBzYRjK1ytCG",
  "key9": "CYk887iQZUREA84VPadrvsPArPRXToETq1gfhAnBwUsSUUNNkrfstD5FConfoHZdZEcPNe7QEyxVYRCrjVXrnYA",
  "key10": "5nooAQXAhXXVzVCsaRUuK6R3aCBSY4Nkm2fq4XHgV881HcUKMs2d1UuE2MjCR5Hu71dhxAm6DSHqwummqRcsKZem",
  "key11": "3J1Vh5LE5JwdA75qp9qgyGWTAUu2iat5zaUfMHo7jRC2WRAkzfnivU9692MaxeTgE8ZthVZHfkWRZjRnLYiVCThC",
  "key12": "49ffzHwfyDvExdLPtR2rDNvefrruhsdtMx2yjE5hQ3KgLFe59yfYiQnqSGkZsU6AB7uzA9nWVNs93NeYpG5BjC6L",
  "key13": "2hS3yvf5dWdWx62QqjSKXUryJiJY7k5Ei7KqyicVzuSBnUpSTXXxArBXQJGENzm1iaSnnKBoofPA2nEgSnkGCrJU",
  "key14": "3eDZVUEoSrmtk8L3n1fxUJMLsCjcaYkTP5wbGYGGKZP4qG74w1HKGqccF9yJ5hY6vZgZv44e7Fqk9U6mk4JP54vr",
  "key15": "2B8HG9vNcy7ZuFJDa2G79CEG6czj5Hm7Jcvuea4tfeYmENiLzNuNvaKn4dpFAntWL3kc57CadykmcrRFckk775n2",
  "key16": "2hRLf8cLkzyitt9Y4rhpxZrBKTwCEwYnZFmXsxvArAGhhPVJHuGoYUNUyf3qubiS75ManMjvquvXiJ5d676tnbSx",
  "key17": "2ywg8bCWkXbq6hCzFx3khVsXazGVEWswT3WhwHAEi39sb2PHLvjsKPZqNA5rQpLEZC1U6jYzv798XreZN7p6jEAz",
  "key18": "4aTPKehdz9fYFzhUsy5jPguWRDrHo8Net2uPatLL2v6Mo1thAHv8qWSE7vyuBSEkzmeCBgdmzXda1ukebnxq3xkU",
  "key19": "5PMSphVMhLXTvSHKEMtuGRAphosnUBFiFRWoGmgaP8p98bjzs2oRimXXnDPQdKCNe3So4GwXJYwF2nakzCHRRk9A",
  "key20": "474FmyCRSVkYpoBEg1bekxk5YQqQu55opA1cvfQbFuSgVdQEvC3kevhvhRZUSHCrqBWRFcSoBYJkr7p8RZvYie86",
  "key21": "2DoTemm3xP9YzVHNdhvLrFDQcfjjbxCsNmsEqaDVTbchNzstkCXBqy9id3viC3d3sHydrHERZspBSSWAFF3p8XRc",
  "key22": "5K1DvTj9SMb8dV7CcoAqdnaqnfH5ixLsCrptjtXY2q2AQmJKytYK1YS8cZ9AqE1w1fbdMG3asF1jeoaBukLGKf75",
  "key23": "2cc97T3CdmtjzRKVvtohxWMrmfsmSt33rXeHQmXP936wyoX6FoJCT1832L7cyqQPwQex7xJutistiZwYLbKEsG4Y",
  "key24": "2ZK5NTZ4XoK1Lj1fraXWB3j3hkPicLJHxFqar3oMz9fndphXhJ3pV5F1gzdyX7VZjyLuNubRnRJdZDZPwSgbnjC1",
  "key25": "5bX6Qsb1d3dRiiNkeTFYEsNUwPyuFwz9Aw9ovJ91KBY9LKLvEmVxJKbDje5HyjDyf4ghH8jpSrzDEmHCKgfNPeju",
  "key26": "2VDzw4K6J1JgGKTachUCqC5Stm2mUMRApBmzxeoAfYPWz4AGUHkVJ5qGKdTcZi1ycsWe7ccr8Qs1bG3ZxbCfhrK1",
  "key27": "4v3G9cmN6LPCsKeyoCh2RriNyFyKE9qtpwKDkWvfCYbxPAx4zEoeTDA3itcoaDh6ymYv6nTWtxq6TgXyKHw1LSzk",
  "key28": "XiK7PN7UWhXgjdvK6JqubJgN9XPGej2zWFa3LXHUrkagT9j1fr6acSE8zKSzJaYYoAyJKgLpk3pMGJSYSkTxt5Q",
  "key29": "38Z2kYz4LgV53tZWGHPwWKxCytDJAbDdReKYW4ei9EBk5m64fNJf6d4ZkoXL8r23ezyKfGZ9WsjB2MmVTr824Y7H",
  "key30": "4TxnJ63FitUtVj1eZ3F2jqj2zfT81zadLTXuFDG2H4oqyrzwfktnjH1eiAV2FfVqrZRVFpduR7dFiDqBn27ycy7Y",
  "key31": "4dDMnADUn1k3tWVMuaFUnvX5yM5SdqZA5CpbVmuhPK9vcoWFBNCHXcQUn7keCjYSu2vfkyC5ZyDQc5Gq1YaJf9oh",
  "key32": "2ByeiDxPKRT3aWkXbQuiNJzFhgsFbYA7V2pgJh4h7ccBiLNjMm8ZuWGZ6GiUugzbC8jYxrBVZ4c8BjZUa2FZ2cTx",
  "key33": "5wGJZZiCnMcbiPhHaocrx35wSmNR3stqUPyVGRBCWHyHr2ryuDfwwiGjWz6TqjsawsFUibmksoy3KuL5QhRaqCv6",
  "key34": "3aDTTM24ibNUE123uVRxu27n1sg11rvX6KZC1ognwCYpa5GgAyY1Zio82zFEjMueSNVBw2A5GFpqadLZQXHqjt52",
  "key35": "5Knfub8ZgP9rUUTptUJCnrBNeyiwKcm6oACjnkJF8ueRkjqrnqt5n6cuP6AF6Tho9cCmqdMZW62C5ZMuBBJ7kvt4",
  "key36": "2LNEDPDPCWdnByxhATwtSbbW5KwDhj58raqj19AVLUWZzKhcUg6FSfyik6F6sN8cVGfDiSvKvoNWUSqEL1XF8qda",
  "key37": "4TG6iqUxLzYxKmvKT2viwHyamHDsiHhKuCsJBf6qVuqrLpGGTrTXb44hFe1qs16aDMe843GeRwxmfnzWx9jdz7t7",
  "key38": "4HQLevJpTg6xSS3J887m2yfbC2TnzADtZMRjGR4pTr8ZFefWgRD556XB8dkNhLJyqy1mvMnZNgwWXDDo2N1gr8RJ",
  "key39": "2NHDH9Qixsr19ezzC7QVcT4rkgNi9k4wADEJjeyHpCibj5dbS69ej62JookizUscR2o9xYnR52mAZySXdAJckQd2",
  "key40": "642dYWFoW95f7jq2JnPo1CHv25LKMbAGawjdC6KxxxyP4qFhTuRRsvrDPj6WkHbGX4MgpU4RSG27SY1uQQmPzzwr"
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
