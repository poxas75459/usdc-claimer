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
    "42TLjgKSE8sRjgBLba3Mw1RPZt4V3GWvkFv3pBhwfPDQPekvVCpT8CR2JPjNCUVueHDGLpP9qLXYahkUPwaJafY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4Mfdh1z29HeFyU6sNe4Wx9aYfKVT7uCdpHLzkvEMYRZbUmaQhP4KyAHRY93Z6bTENv8rCcQ2TSUTZisTubeGjH",
  "key1": "bBA29HzFJ5Q7JPWgFHbHfYKpfMg7uGxU41sQ2uBeyqeZ8MvvKwKyv1D7c7JnbsD2DzxJsTjm8QDQnD1jXjxtfuS",
  "key2": "5oaHhK6SFhtj6HuuPpweAyQtFVhYRcJwjxc4SfxUtSrmt8mQEbaXwZ7v2dkZa2xevGpGc4UkRBhyaFZeinRLJQsJ",
  "key3": "28wuGqEnjMEX8xeptRj5yJ6Yng4JB4MuEP7rWHmzuWxJxBuL3ZsB93esa4jaF2EeGDwHUSuARTyPy37NXxofKyv1",
  "key4": "45QFGZ19PedtyHgNSTawGhch6vkWyNSXVzHcdxnxeDt1bS9dcRYoiik567ZszuyqhU9fStuXUaPBaLpEvSG21sJd",
  "key5": "VgUYh8npad18WcKKvknT5j1iTBd8Y7uwv3kqw66jCLTf2Kb5kjMt1vbs8dAySM81hE6BzTgEjTehU45b7yPTSed",
  "key6": "4PFezRzcKqWSjW2wLWL8WexTobKx2rf97HQDfra4Zkx5PG5aJyVisfuz8SUezZPUW1gqA5zSXk1ixvACKErLbW6E",
  "key7": "67ChoFJvwXXwH1pxsUqtaiVP9v22mgzuN8UCfBnghQBeRfcL54wAgUDCFtDgGbbctxFEuNHpJJzVk3AYgmZm7zDC",
  "key8": "49nugkVyQuZ7d736XhD9nw6JEpyvgASt5n2gM15tK2cMqEzMuagLwA9eaZr3PTv63WdCzjnc2qLGaFBWYnJQ43DQ",
  "key9": "UVv175hhjZkCTrPnfEyff6a5oHMLhtUhsHMApdR8ndc8rWaL9UAZ2xKtgJruz2ybJdMpEYUPFb8Me2uNzhwpHgH",
  "key10": "RPEc84p9JShG1EXv1UxaVRG3N1pUfMFxcQ2jLSpwKMj7GfR95YUFGiCLmxgMhA1fCnwdK1R1FEEsbKGYq6rysk6",
  "key11": "3kQaHbu9cxGhLYtit2bT1cLL63JQCc2PUKdcXFRHbW1mydrJW1PFaFG9mREWFRDqouKgzn2B8TvoTYDfh1kiz7n1",
  "key12": "3gBtuswxTKFeWxGxwtJKcDZvc926C66TPWhNDW4PWh2j2bk4SQhzw6mtrd2Zw41VkjgGWQi3xqd52CgXdyapGFHa",
  "key13": "4S1HmRUBi6tY6qsykky5NpQQZ7SCD1jgHmS6ZivWXxDhqoskVqPEJipgNx8Qc2VxBE45xsLEteK2ZER9tzBy1ZUN",
  "key14": "5J3raLrU3wrKgJj2LFLiE6gPxZUV55yV4uh45tjxktTkkPFMHChYNrojtT19WvM34XD2tVgHfVxj8fMQz2SDqTkz",
  "key15": "2qa8RiEgnCJFn5KibeQaYvh4NzvS2qkZrqk1FYYoaJWeDCUYbb91e7gxEuCuw2gcQADTm6L3fS94fRUbAr6pKGhm",
  "key16": "3SPNa5k3H5HKnmAKeyKwNbLLRnuwHUmEHHhV2h1CeberaTzBoSTac9FAxCpnQmBS6tWDQvMaSKjDqBTAvU9enbHc",
  "key17": "56K1Tanb1avphrfqZLS2NZFG1ux4zTuhZnExWiC5mj9Yq7GA8FEyVHtXnFGUeLc5yc3bYiMgCaUbAYQD8sW3dGHQ",
  "key18": "547K9FY52qWrijQQDURxWMTScmhi3JDJ4BwQf5EFspnUnmoW3vRR9pDMPmGKEEcA1X5whvNLQ3ofxzE1n2xgg6nw",
  "key19": "4Q7CJ5W7ksMR5vKKbhRHq8LfH9zMxKKEDxcHRkcyzzAXp55mBmvp9N27TG2h48airVLVfVaXU72uViG8HNNY7BBU",
  "key20": "5JxfTgJHXkjqZPcNBwdD25LijMNUCpbp4PGwUB28PvsyGe92hzmHUebMTrmVH7kQMQt5sE1w5E8Xpd3oZQAkJk8B",
  "key21": "4JstVah724itiQYNxcSGCHxeP6fEhEokGtNDPP4rm15aonswVMJrChA9CHGaAvE9hBMnoosktcvhALuHq5zhrVjr",
  "key22": "5jkpyFRMQKaEAKbk96uYzxMmVDNDqJ4rBk82CXhYwQCiZGPGVS7om4nSKXAjA3GmqgAABmxokJRR7QBk2txxh6vf",
  "key23": "3Z7Bz1xwVcamFrKnqVKeAE2cJWYyheP1uSaCuwC77mod5TULpetJ1fn9gYqWVZfZFKD73j4yvNcVUd4Zkjitgkfr",
  "key24": "2VhuV1gASDt8crXtopGUAXBQTjCxEeM41o3rXezkk9XMxPXHMkrFDDmzXEy6ZksQWy73tg7sz8UTTGYjWDHoXaS8",
  "key25": "21fQUEm5Nj755PuhxESrNqJQ6kejAXbcadZi71AxucMRhFPyjLhe1pePs8485DQwYQXhr93gStKoq6WRAMi9n3C7",
  "key26": "3HGf7vMVHgEFFm1p7bDZyY8etxgvoFFkc2Adpwgr9jhB4MNfU2ksaDFMREtLhCv4wQ1LTMuV6PVoQetoSimER5yD",
  "key27": "4v2f7yQuyU2U9vauUamA1bCQkDqV6CyFNcTaq9Xwd6K8nnJqMMMZivnaTB4fwHpeNfXXsxou6ofwz48VkdrxU8hm",
  "key28": "55T4bej2tLSDtqvixdYJqhKX6ADQw3Syag6sRXEszbj7AQBWfevqsyvnpdck31tbmsm9NjBvEsMrNna5FudFCAcy",
  "key29": "5yAtdb6JphLDNpeyUrWwdyapvEbwvUfwN2rBEpkZEeQUv2GKvoZMx7YyRJTEAnG2cGw1oSWnR4SP7vzjwRX9SZ11",
  "key30": "2cr9tVQvBE7pip8A6qv22aYAqQD8vrnbtF5btqFVFSKxNjT63TRWgrsPv6n7uMfCcDKjwZwbCkNjUqzUVFEwxgoJ",
  "key31": "2AhGFUigDWk6VpSxhST1DG5XGeuZmc4hnZdbqLwZmadymRCXqtXY9jpWds39uPeisBBCMUfDujJMUUscFDJe7mn3",
  "key32": "3DLw72bRSmZedok21zkWnnFLwtPwYDYuM5nJuMhiN8zzFQx2unzjqKLyhXkuyq6Dh4dnuDG4ZSvuB9cAeiYgTmbc",
  "key33": "32JERFN73gBQuvVsDUjLVSEWp8spffD1Hwvi6ubYztRU77YaGnBMwsz5joAV87bL9pEE5h5buRoRTefabzMGGzgY",
  "key34": "4jZitk98Fm1KjUswcBhAeRtpGeQV2XnnAxTjkdyLkUpS5ZwNkkKpjaenACYRWw9D6KDsnpHcui6t1KX3CPn9AT3p"
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
