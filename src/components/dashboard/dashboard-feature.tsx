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
    "5r6h22b63NHNtQ3pVducPwp2XPq6ZHu6Rist4nRfRsF1RFwfztTnirZXyDCnmAdCz59jpTm82WR8bT2fP5X9xvTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGftQ6qLN71cRVHSqMfWjbckoX4QNxPR6R5RATTCkB4xka8odf144rB2eHrnpg49nvJTkkBGBYWF6aRR7BCvi3t",
  "key1": "32iu2cBLPvMctaubjiaEUjcbjsfXcn7Lar3fPgGXKmNAhJ4EdvokXPywLPHkotqgxEYiDwNJdAJ9GL647Jp4PHyR",
  "key2": "3Zdxq5doBECgYE3kZjDMtpx6ds8rGZnaHNXKKri451aATTf87U1PY6ifejGJt3bkvog3omCnN5N8NDkGBB3ipacb",
  "key3": "3gdRgtH3QTJTUqwYjmovBjaNcavbCbEqZ7v1LSWxbvZErVeWvndpwFcFzRVgbuVeT2D4mvA1KwJQV9KCwRUXfN4t",
  "key4": "5LzJBhiubT1Shq4SadmUSNnogkbSeURNpaRxr5G7KhhT2MDKExG3Lmm5GMrPRnkVTKAeiCYm4Eit9X5b3peMqx4u",
  "key5": "4NgYi41UTXaEq28TyXg9ttXUDGBFBJh4mGw5zigoQZk8eMx87z8R7WWwo9AgjX4ztTbdu4bBgssbXiVDB3Xsq7Fk",
  "key6": "5MhodSGupp29UmgvaTsVuGAvhWXNEGrtWFd1AAPrDRR2pKEBp3DUZURbEk6wmmyX7W7x6MCDAg6jG3DUzbTBHeFj",
  "key7": "2jkGgobCafhxinKVtQpQL8BRg5AtodG7bMdXczJPugGqwVUL4KKRhtGWR19J8GR3h7SHZRKPE5GHeuMi1oGLLQFM",
  "key8": "LCsSNkW9mNDz6ooMSzBmDjpSGcJcV2vKHHJucHCccGdLRZ9vGCNZbFY85ctaG1Px4jpsPV5MjCCpf5faoh8SRuQ",
  "key9": "4axdZfYbEELYwq6YhRZRqvqsBNwBk1o46kmbwb3KLXWfnNn4DW4rZ7npoH43qto9gck3hv81ZmuMqcN3MBWaBVVw",
  "key10": "4nPz87jvdJs26mg7W7HTjJTYpW6Rg11NFYpfZw5aSpuMBqkqm2wiSv4feUcb5EnhwPsHuGKpBiAjbjVUofGjuLQt",
  "key11": "3poKDawvpt1YwVLVqbzEiR98CCXbrH5yM9YR8QmqCJpCt1X7WJN5QMBxcHcF86jNZEQ4XPLS7wyUGb2D7h82jSEK",
  "key12": "BsWaP4ytwYXVTYrgGRXu7aF1oMzgnnM7NsLXUGvZsHctvvraGd1dx7KuaGfcL8oLZtC5EYBE31CvDMQm2jibqoP",
  "key13": "3gC3YRSMBAQd25d4uSKnk4zF3ek2s381PjAU4MVVtfckdyvkzodinGH1VT6a697e9yz7qAJwnppWdcsQJa7ZkMgW",
  "key14": "3eaczdviVRwQ4QFoGBRznMJtft52cpuVqbk1Rpkj9GCDc7WUBbrmHN82SS8LTWvyMqVCvuhz6GCAQpS5vyubGnN2",
  "key15": "rDGHJjRnKtD68cdQeJvz2iKWsAWgnvbDUMcggf9bxiSDviwFkAf8arrzYuRh6wnCfceNYe1o5uviGao78oGba9N",
  "key16": "46hmd4ibGRWQU4y6aUL3qhfWEVbyEV6QtM3mTaigrYjdT8VMZ63vTh8KGo6SCDHF6j6GkaRLh1zNFKd8sBCemvW4",
  "key17": "5rmE8crqqmgKrBSab63Dq6CRSER824cWfjL8jczZFTFXSDesBbBtDbpCwPLSv1f29hYo5TpENYY3ajATRxgT9jhF",
  "key18": "35uneonr9sujS6M8gcQgZfnPBX5bbkKArBBD4PLzNbM1rw3eeP8nWTzgXYHamoeqp13b34a4vcKBfabq8WYr3sCk",
  "key19": "3KkGt4hJ3JpoH2ncYM4ZwzjNnq2Hy5mFG3jSej5Bk5pB48asCpSPhNuqB4VxqrF8rMpu39ykd6gpvQ8NrfrN1bST",
  "key20": "5sX6sBYc14Bge5Mx1Hb2BCUNY8vXsg7uNMWTn17Fco3rkQhawfmL4tDJQ4PGh3JZNpLddcDcz85cYFqp25er5SBn",
  "key21": "5YPiwpzE7rUtuYZqLXU1npEycsNWUCPuwqDtXbyLnYbEJpaLK9ZJXzwc7Ft271dn3awvzcELxEFQkLMr9wNks76F",
  "key22": "25UQPQw7T4RCJmbRrphuMxoi9D1mxVEnEp9GKLRYbTusrJ9uYcycbRfacP43eF4wCP17rDE2q5uHMR8p6sbKN8hz",
  "key23": "2TYr6hM562em7ZHD6VPH185C3NaT53RgbzeMmL8T7MvhPNMJEDbuuWg6h3cDot4a8Us6ears4QSLCL5ZdrUXR6p9",
  "key24": "4n3gaDfTV68jxTfsqNcLp3yN3QJpDjjjVNdmsNBS7FnzTrRH3xaUp74mUvcD5AAPHGxU3xVvfmJUMRw1r1kDfv7h",
  "key25": "3r8Uy44W58h5JwFX7RfJoxX1Bx7XnxCnSLbjtn4r6nKgse9oRZLzb4QdZnkxdfuuFVHXa6g5TmFkg2LuiDoJvtFd",
  "key26": "5RE2izbkZxCRhqAeQF4xXYu6s26xyBgv6KNLAPXN7hwNFMj8UrJevMmCYJPzhuvGuspWaiV5QQnazmfJthDVVWUM",
  "key27": "5iBQ1bPFuF6fNgySqX3bAaDLSCsoFJBHqnkoP5YpiAHGkMopfeRF4HBwSq85FCSyhcNDqC9fauDBFiprXJoauzwZ",
  "key28": "5RMYdn3LbwaqV2XYBVUL3gV1SzkB29jUB9WSwHQ8WWrJraattEzw6AJYBt8UcsBdekoDzUHwdYydfbruwad2YNVj",
  "key29": "2LYJvgNu93FB5KvsRdF45Q7LBo68UbVgK3G7BYUa7QHmzEyeeDRiFM6sxNS5KxJHMrNraCiqxMReRb5ACFDJuVvB",
  "key30": "43cr3mrvjwFdeXEooaQo4i2QDUqAsF54qPAPehE5kNosUnKJoQ3SSAYbxzbTVHq2EbvvoVXGKoijuXpbWNELkrSu",
  "key31": "59W2QnbzfLyXm9wcJZ5p2wvT29tDnfDkosjfXg83tjmTzhrfQgTQ9vn2LhVZhNAm7W1CR6JYyGN3ysVS1cTXicGp",
  "key32": "KzHnPJ3tj3hDPCMEb3efzhbeqXmt9tHax2icLr3evautxsyjFyVFp3nGRoeBv8XFCG8P8BTUijAW6vbTQt2G217",
  "key33": "3krSic7j4Yw6dfkAabqZh9tZ7pWets1qnQUR3EjzgzAsHkT1sArRgm9XsVnLhtJCkZs3qggv7jMwEtcmkSWNVc2k",
  "key34": "5VCM3cxx8ctSA1pbxUddGehU6CK6z7Mi3j96NqDKQfrkjK9uTHYFcjQsnh9oQuqq18YS1Z1HyVuj85RxHSbg4fPT",
  "key35": "23KynwsjkZQ41pyJEh9nQRewtUvaCHdyFeFQ4L9WvzuKf7xeZX9MaD4YBPnbmBsXsgJTop19zRZgb1gaJru2cELC",
  "key36": "3VKyUwz6B75hsckMbxXd6KV6pdcKrXU3E533sfZLcsPh2hpjY15cyP8gwn6P8ZJ2nnCiP4P3yvN5kUmnGo5RL3C7",
  "key37": "5uiFbfk9nAFJL6QxS7f61e1MKqjUv4Qt2pwwyUqgCAxf88WhjFGYBrp1VUHiDzdPHJZAwL7m1evKZDKu9RwZv81M",
  "key38": "56PtLvMihgEkmKaHSZ8wpBwhPHQgAXU96KcKUHX3KRA4CdqgVoa83mh9j8DVbJgyPLj5H4kAnpXtubmBTJGvPsfF",
  "key39": "4iuYJ6d7RBUPH2MR2QVRio2MRZek9xNMAyh9qvDqVnwwFsELTs5N3Js3cNoPv1JVMy3z5oxSNPPkkFrNDA8vzdmh",
  "key40": "5mH84A5quM8hNVHkfrpiEEasX7gpS9oADC4o8DPYLXQ8KW1WwjiHAPpjdjGPqHhsA5DVCQS1cUsWCzQr524MBYTF",
  "key41": "5Ty5QXgqLzeUFnWi16L9wuEg453dFAaFaWjfLLQSvphBsPrJCcKrqeb6cxZyh2yScM5dBMee4uZRojWXyH2jj2s5",
  "key42": "613dV6qgxuWAYX5kuZpoArRZpJ7n126WxX2ViQMX9P4CXhCqGFjDF644f1TVxpmGBZkLvdNxDbCDhhHWJRcTgyPM",
  "key43": "R4L634AmyFQeD9jMtT5VRYTPd88mHoEvEQhLrtqVgTg83ERgPWWVT9pkkqi65d8EzajgoiXD2EdDEk2Mjr3mcZK",
  "key44": "a2nuHpPWCzVXWBndwuL3ixR7iqGGpVwbZ4bPhf4F1vWacSYjmviSaBgXaS4Paphimrn39rJF5HqjG2gVgMG1kFZ",
  "key45": "4QH2cYS8USuECx3M3T1qgLJhBbiFzYq7h4izoyQdvi4HUan6UF6wtCcoik7uqAAXAy4iwKzUdyPuVzMnXy2mcZuG",
  "key46": "2ioLk1Zgb6aUKbwgdc87Fr29QL5nsRdyoZPrAxiMvp4C5KvMn1MA3jFvoinyLjrAecKJ1XVnZNBW7QH1UKWdQJ4"
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
