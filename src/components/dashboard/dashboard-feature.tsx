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
    "49dTCSXvcK6cdeXwoH4byN1WoqQ2vkXbCDDE65jH69bC66q3j3n9yYhbZxD6apNfJvnGJLH3mypssksnSC7SVA8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56px6BwFBXTvRNp2jrHyhAqW1eNsEkNUf3uuqocnYzEWLRi61z8mAxYgZne8YPqtkoS9kjhYPdEfoptrwZFudKLU",
  "key1": "4rKHU8cPxJ3HnyGKWLBeyFFaG4C3stN7sSNRmsRMPE9izdGPqX4sxBSKvfJ9HzBP2A1yeF18uvDGHJNW5qZ4N5Tq",
  "key2": "2HEMeAwsD9azgw11vxhBfg1dXXWnYFNxvHJ3FP6zHXRjUpteQMm2Rv4WNpr8Wh4TZq1Vu3ZCfJoC2meeGV49UGgS",
  "key3": "4Br5xh1kpxuiscf26kgXuCPUsrAPUygU8m2xN1s1p5D3vhnRz5Ct1pPDuZUYBegpDeHFx2AQpgyu7AC9oWpidTwd",
  "key4": "4Xc7ySmvdcigHxV4SkZ1Lszn5mY4eEM264gXmkPiKBCrJkRXG6nGHs6xmW91LmUGkUoK5i8kG7ztJ9Y6dux9V9J9",
  "key5": "5XLPctB8Gdxx4JGHLnguTrj3fpjTVHqarYRN77n5wTyvfZ36Z2nnkPFM57RnT1mSE69dhst51BC5YpdTYb1PJE4q",
  "key6": "3cLzH69p6RbCNSmtiajsjEZvsGBGLZpGqQSWEADu61s9EN6cyPjEMYyf4Vx3e6CUpCMJhtp8eY2RqTcSrwfjKAjk",
  "key7": "3vur5ZLzy1jhJNRF8y5iMuBghMw44pjDR82tTi8taKYqyxSbXSNvEavqdyMGFGfaNXmjchzgv7Rx7i25Bqvqk4XV",
  "key8": "4aJnHqfLQpyU9yu5qZRACtB8m9sJFx6tvfiVdoNyvgQ53bGdjjfbKnDPAmr7KLeDPQwTBUsCM3n44AA4y9sLbX4j",
  "key9": "2vc67xTi1aiGkguULqMdeiqy5QuAjEasBMze7JZdCg9i2oapGB3MvnruTeG4jYG9cYA36Fr9pvTDTGjmPVmJ7RNU",
  "key10": "4pPJrgfyTabBCkBHkpamjmMBNpZVpyZpvwHGziUwdb6hFuU5tDhEawBz5Pp7RLL87htgqkGGLS26BWQPrnb5cwad",
  "key11": "uva1tfv7ZbHFSh4H1WSwvMHC7jgAwtouSXVYqty22gRZRPsCXG6W5hDJw7ASbD6kjZQnTBe1FjaZHuyVRXQPzmH",
  "key12": "3QZbJPWaEHNpKAbNSFJb5NkPmjH7CsgCNv3YoT4idDrh9ayT8UDqXW1r77GAnbupEpKXbE56m5eQycY4W3in5gmB",
  "key13": "emhpKXHqx9nVnzkXjK35np6YpDajc4ZvidgrYrwq5sWM6oF4YBLdQMio4RsJYX7wDAutneS9ayBt4hMVGFwsyzC",
  "key14": "W93Tzk71gfRCEkrcew9oKzqbJ57F1RTcsGfryjiS4TWjGGLJaLz26rtmatf31YwzoNQEfDyMpaaZWYwB5n44KaX",
  "key15": "56VY6kpn5ersxD6ytwPDHjXU6jHQ2QDeigATkCwnLu9ZevJDtQG2baCfE2RzvyUyXkLh9rFKiEsvjbtsToafp56z",
  "key16": "2UfcM5cTf7k32tGE8H7YmUcu37NR2dhCPMUoHejt94gdKvW63LPqzrytyQ4KZLEiEsUHBdjTcfsAS1ZNGUDhhPqm",
  "key17": "4eAPKeD2gqgL6n6rzB32DVpRxqc4QT2aS8dFJs1AoJHPECMunCLdJfKeCVvwv7Vuy8WNvuCrYsZ4jM22APGPw2iF",
  "key18": "5Lfd4ExYFpTWsbZvrqBh4oyS7DkY4pTRGPzvX3X74kkSBdnrpL9iFizdkieXZAJ2eZKTBG8dZLvoDZT5PQnDE9pV",
  "key19": "4u4miMmAJZher5fhau13Xz7ASPLd1MGHk5PgdN21YSxnozxH3xormeKfHb5wDgjCoujwCA27kxjYFVXTNsATeBEE",
  "key20": "gKzoT78tHVn9p3LUNMjbtuW7xT9B384SvbFQsXecJwD5mgcMQcZ4NSWgo8UkeNm7SimZaDW8j2TUDMHZcWisK7f",
  "key21": "31uawYUfVEcX3JoESzvHWgSXXhg2vbiSE3EmByH3pv2XoXSyzni5RHajygd4DMsrfhgejKD1794PXyyZVMsJ14iy",
  "key22": "SXCqGE9QLtrn5Rtx22ViTXeM66Ph9bFkoY1tEhA7JWod7k6RvMmMh8ebmdPAEGJNVxvrGsxiCm2KDaR6qoEve5h",
  "key23": "38vTcF6gr7zNiYX7Xz3z3VYgPNdp9ZmCnHUGtZbsjvrhNRTvKQH6L17971P7orH4McnezWgCLYmK8buQmNiNLPB",
  "key24": "5VbKiNFDE3ncobGhJaf23h8eNKhJozK8Eom23MZoievAxT1rxXMf8sJT8tVErAt3h9EJMLujN3jjz8jBqiWHEnbc",
  "key25": "5rZdoSmjZfttaNVn59MBiayx63nstF9xn8eegYoaRcf5xdBtMc8G1yadTsSiNcd8UowRUZ6w2TDgxhbAu4sCcfbD",
  "key26": "2ohXUzaDpUpwkLS5MqE3X5fu9YqyQnqmKiM2auF3RkR6jJnhwpXwerkV21Bp1UYSu9giGGBvq2kFV7Xgm4hagvv3",
  "key27": "Ypbz9oeCra3LuUZqcd9pWDnk1u3u9n8Q2K5JJw1CdSRbmmL4MYZMAz8NzsML8f5q5T6K5qbCsFtno9dpQnsyXXX",
  "key28": "3wS6XbiDJnU4pZdghg3479GPQ2C6XmkkSdvewKLTpcKyEyv2PTmGjeKuRJFqX7ksGStZyQA7CbrmB8u6EMUEpRVB",
  "key29": "34jPzfaeBwLeMGQ2fsTHCzPW9ZaGHn6tt1rnc75oPS5uZRmti5vQKByf9VRsSTBbSwZyNWSQCRiWeUF33E9v9T6T",
  "key30": "YoQqB9WZAmntQJberGwui48gep4bEsKfEVKsye8Fo6Xv35oypWuEF1oAq6E5mxHe2UWP93HSG3kgmm2Tcd3pdrk",
  "key31": "5XvH8HxznntAk8Qe9ttPqmgGHFU6KRX6qvfXbnu111hr2CqpEprhMocrMZbpyM6iSPZJiPJ4Af13gLGehV5qyfqi",
  "key32": "Q9yugau7u3Aqdg8aoikq9JCwBRyttYAXqe1oFTLzkNevL1aiovZWmqj6EcGmKTDrcL4QLSABuMzukzwWKzp9EMJ",
  "key33": "w6MJYZ5u3FiLpn3PkHPjdKXVVRNweuFR9rEvT8A5Uv3ybwq8WeQg2k3SQhmCUPSF15Ux3MVffGiA1KjFCmWTp3H",
  "key34": "4qjsaxoVtkuvtAGsTTxFQn58rvpqTkCxg78pLUHUrhLYgmU4HLRY3pke2hVawzssUQRLkBbeSvJFga5H77Zjc4Wg",
  "key35": "651QW2nutRYkGEUPBAxqTjgNobfLSbEiezcFeZkjRQP9zxo45YGCm5VHvax7TeMsR9kkg5PdXykNPUUPfPzFE2my",
  "key36": "4xZ6zb5YhdSyMyBvfG5oKvsTNktbdQnfh86t16oiBivW5qSwMP8chV2AyLM3DGQjbYaqQ7K9pYheAP69QD4Uqva5",
  "key37": "5RK8BKCP61vwhWqCMKbeX4ePgthBjGKV4WxTGeXieftHpqRWGS7A5DLRnTCAMCmCQQ9Yymq7atP2xev5NNPguLko",
  "key38": "5wmzKrmnxWqgPdsMnNGTeRgx5LQsWgmFoZypdtFnouU2UVom9bYnRkXH8XWPia9DF3duik12aDR2d118rrU4yb9K",
  "key39": "3vCq9i1BVTENxgKNbdnTosLdGW9vN7xS2VGxCKvQMUrP9MpKWs2ELh882K4PJnTEWpTHJDLnaVE82hRzvdaaERPG",
  "key40": "22GMpCkrp6SCmxhD8sk4rr9SqwpRQMLFLnj68XxzbNKmfkTjP5YpsaC6gqM4yZWWMe4R8azzZn5pZcBAQiu5GqJq",
  "key41": "v8sBT48MG2uizv1FevVcE7oqEk6vkeCusdyxdNWUSYhYfKfvGHxEzQ1gedsfAUXRxCDMedH3eEcXHaAbPgSu3hR",
  "key42": "5QWqMH9qSGvz9rxcGfvuzARQgEzxASYWV9uRFf17VvkSTxGtrQC2DXCSivkDSTUQpYXQB9HcRZZmC57kA3WNy5Uh",
  "key43": "2975FpAX6X8zh8nbYYrdwFm9J19PPKqjBuNYQs1fAEswLDDqvdqcuNV4Qye8oaqetpaW7tkuQncyxuxzP6RiMGme",
  "key44": "4gHgfRvWRRM1C4d43Lgokhck5EakDPbJgvfcVFhb5vKDkc75XNHc6AoTKyevqaXmRvGHzkw1eJEZag6FYv9uKUtr"
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
