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
    "3tX2UF3ZoZSod6c1Vn1ZY9CjRjseVja9CTqyeSoj8XMwLWDoCdbbmP3rsJTNxCbLHVy3h7dSfgFcGuFDcHzfdkqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dB1NcBkjR3F7BjEx7FbxEVAbQhNDdtyP7xckH4Q9zkCniHpYdztCtMb9mi3YaXFaYKbyg7pX6nTy8taT5Xk1Gtk",
  "key1": "2iga1AA1YQrs1ajjymXu4bNn5jXRu1cFVEBoN62XVpKNFHUbbg6eUP3NuRvZbiuZFvD9JHjDo3qnsvXhJBqWjqq5",
  "key2": "3jomo81Pg3kATkt2daiev6ivXeNARnMMSQkNPkj2kjap3chAJ4cx5yUgA9gBmqBMwL2UjrSN6e44QMbH1yq4z7wR",
  "key3": "EzxhLH3JeWWfhw4JdYiAxv3wsvC9w5Eb7MzEkNWVPekSAAWyufMGuLzU7nPzAyTGNY9Ds48DRL2WaW9Pz7fy4LN",
  "key4": "2a35zPCEoe8npL71cw6yK56kp1hX3CRPYNikUdzEzo1tjX2bF1CCNr3trpYLh7zodKvuAUxGiEYGcvobNMJvXBfd",
  "key5": "GMY56kffXC5xGSbcgr1qdVK74wo4rR35phKJP7tH9TzNRja5kqzSiqxYvreufMTXKqCYYXQ4VoJ85ESWSaagskY",
  "key6": "4jrv3YkChWQhcBBhhyZN36ErDTsn2LgNH871cS1nPq6tVTsCR13ynxtBEHfhmYU8qieq7D9PKjFBTALwi3Doptbd",
  "key7": "315qaizuY7uvvWd7HkjmqNFpPewfNpXYxrD7Wb6Ts21EKMpMiqMdD9wjDAYP6G9Jyyqk6MkmcQsVbrpvth2ycSHJ",
  "key8": "4Yen7hUzT76fBPCCiK4iyBdNGnGcP1EexD3RSoJK3241HAZvRojEYQPEcfF9FRPB4U2TGF11Ftt6KXSxU3ttPqGy",
  "key9": "SYXnSih5V7dJCngouqirM1YWcBTNGijKpk3sQfoKXxgh1C7kAXUM8GpvNVhXuqvDzdBhqFWB4ogDH5xXJSdUuhk",
  "key10": "5uYq45Cvw9B6ENXUsVaoKwhVuqsLXXjsS4ER4cRKjpCdsY2kTwu4PKmC8sErxfiFexhTDriun1RckNZQjNGRMexC",
  "key11": "5TeoFkbubaWXpk9V9cMLrV4pMqyTVc8qsZw5BXoWRVTi9t9e2f3fmk3kbjeV6q6dmb1rWL341E8y9cFtuB9ydZWK",
  "key12": "3sa6tchSUW5n39uZX4xXcvm1dV4MAVHxpDneAUuD31spykmTLrjUX42L2T5uBh9572aYqXRb8EwYhDfZfny2kV2E",
  "key13": "1mHYcbWEnAbMLkj8TdcjGCEXTKmLHFpgLHW2TncCk5ZaxttaXW2UFJhm4jnjttaxxBJJudMZJbLZTV5exggrDe",
  "key14": "3LJNjv9pmUDiuk6QFnPhcnC3xhprG68zBDebJcjdknvyiFu47KJMtye5iNGbsH1NwFYrxwV77Y7aHzzanXMHwbcg",
  "key15": "VtYc4nZJctdd7EYtnm4eMGYoUKpX2qMXYyhj95LEDKBo67vSHTjt5NxqdNMse58V1ooFTJG6QF8WwaZDUN4Xngj",
  "key16": "d5HmJLqwZcd1SASWJ2LRomGrjnzakHFEYaNZQ7KhtiyQZa9SwcgDmbXeF6DQ3DYiiAFCjBR9e9q1CBUzM95kMMf",
  "key17": "5LEuvouUMYVZuXySrMtkjUQEvB4KkrnLJvhHWwbVLWycZFMFuhoo25D3h8NPd4VPQxh2s3ydBfzfCfGNoMdGkYf7",
  "key18": "5yYn7bQj7haykdhdK2TkyearxvoFq5qfdZYaLXbcjCLCR3e1dGfdssbJmQ5gPG7d7Pxs57MGsLUui4gZhKaLisZ2",
  "key19": "22SVDGcwJ8H395rdmfaLmA24nuhZTGkuGApmvqmJEgFfaVpfHK5aXbiGpRcVVrTE3YDpMcSuE432tVrrEfjdWtdU",
  "key20": "3LjFWT4x395xv9wPUS3q6AjPhuwSk8VnsBBhdE4Wz3yyVNNwqzLFmefvgjtmgP4x1X4n95SudBEtL3vbpThEASd3",
  "key21": "2eWD4po59kcjWyDr6XjWqbFyFAGreEhK9vSSxB824a9mN4H3dC6WSTVwBrm49Sz7widFr3dma8tniG4err8rgMC8",
  "key22": "9iMdjm2tWMUYYsGtg1fihfsBJ4xdK7aKbnQ6Bvc6Ja5VJGihFsKXbMfwwqP8munTeaPuyYNt3ztz4uqwAcu8MGd",
  "key23": "2VdWem18GRkExWBk17jNyLngf69sE4bBF3An4qxvNL6ycT8faWSxAaCwAqKqMVx7zFaadEjftGxgmFUHqBSeeitU",
  "key24": "3s1aL3zqDvpzQzx9Xf66ZiTJUHm1bewgTkrSLC8vops1Y3oTbvXhduLMdf6Kidk1bB5PDfR1wUZgSNRyoReAWMfr",
  "key25": "2YxuRzCBjhoekg8iuPmhHizezYi8s4Qv3DpkNGGS7eiWxKbjvdwwL2AtKX6d22jpaLqoGPnyZ7LXqco3MCkVjLCd",
  "key26": "3xxLFnZC1MrLYdNsurByQjufxX8vMtTGTTYDsf4JirjRzVtPBJ7M28CJ2VNEGDsE6qUYFpVruVV7Kaid91z5r7o1",
  "key27": "21z6ZUPcXaH2FuYVp4mWbsRbeunnu3QjwX6LSFVfrGb1QBiaFwM3UqgPgLzkDLHisqirFBJbwcEhYZQb6wxnFusx",
  "key28": "3A3AdJ9KUbJZeTnqzUnWUqrRhKFQ3vFbuyrkUYHAM2aMWxcThpEWgqarM2REiYxE93XsatSad5UZZ456BDigs4Pr",
  "key29": "5SVhVepA6NgqfpKrZobxsjoXgxqryrXoXgs9tyFKSJvMHVhZzFWKa8Bhf7GsotYHNBJM6NTqtT1HbYy3FdGdXSVS",
  "key30": "2mZ82F88wHSu2V7wxQeKtHY55AX82fy2A4SbaE7oJorP2Za2M2qHhYxvse4Ts14dNgfHHgNVyfCBA2ERiWzibNiV",
  "key31": "3tWuTNN23vzW6adrxaGhVccA8Fnfs1g9owGYbX2iVCZc31diFLSHaFp5ZEXraMisphQScaXPK2dxTRMY5mSQft83",
  "key32": "5gwsf4jHRaJ9pik59wTwpMgHmLKq6RKj7CxgCpjwQcz1p9bXQDCecJcEAqdaBMeFVAjswRWPk89j7DqFnxXoG37d",
  "key33": "Pz12w3LXeJeSaBbj8d4DGC2bzsPzSJThsjAF3yVwf5eDGNNtpc4TbByKN3cppmg9cjmAMf235Pcp4PjzVq7oGCo",
  "key34": "YdrueKyZ6LYVijNds4E1gvXM6ZuyRUMXbjnkhBoEFvkdX5GG3oQHPAm2tZ1fkP9GSzurcfKkucYp1neRMyftqGd",
  "key35": "2tnpaFwuzY1E9anY1L8JbTTsKvzP27PSeFj6rzLbcNSuBrYtN8MVJRHAikjLRC2d7WDxLgWBVjJWbEZBezd6Vry1",
  "key36": "64GsH2Mn3jc1u5pnZ6v5L86D1tUKhggz5Ge6CL96thTzHqW9SsWZ5GaQHeRpqhMrdWMn8sdVur1sMjdfjnfU16Vn",
  "key37": "8zyggCNHsot6kabyRJ59GXx53KpkH9UZxWfWHQvqw6rSYB7rsDK6DN4xLJtu8hTz6GXkiQYXudyCtnCGV2GLEjP",
  "key38": "SEgcL9nHeUJqmGLzi6G3CQuWPZ3oMU3jjKEmKEWaJZaXxY5Q4wurQkLcf3Hf4ze4GYbPLamKLx11j41cm32t9Bd",
  "key39": "DBu9zNRZVsAXDjiBcadfNgf2km1gJkLtM9oRqrsmjMej9oPQZQ3uxq4m42k8Bgkq7ACpHuxQk255rTpu99N5qjj",
  "key40": "4qxkYEzChBvuFe5UxecDpzZfg6YmXPPAFWhgVgN5rQnaWF4nHH29i6tLYgiVMeg8adb8LXrSDBoTQfeU47H482W",
  "key41": "286C2DUsjq7EHuJAaWeXBjJXVEneeDSHAH7yTiMxUN6JFCdxu2u8qdt6WED6KUnmcXKNXcxt1QmTXPCbWvCD4Y2R",
  "key42": "4uYgBXMTVc3jfL4QrvtgyXeJgqZRAJGwu8P4CXF6ZUaPUL4rSYwxruRzx8uSExEgaCNHmWqwTdStrvPWPAn2goEZ",
  "key43": "62eYcmpHTh7jpP284hFLwtwHYmk7mKRptLPiwar9hTeWGtMGi8u1xg84hBbiBCQPuat6YMXQ5KhBX2SjpdfS1Pk4",
  "key44": "c64J197k9t9GfdmTDKnnbqQKpeePpcK6hHjnovMvnivQCvNJDL4gGhs6QQ2AUPei2FM2JFuJtix7AgMNKriRWzz"
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
