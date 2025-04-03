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
    "4uiVbAEeghFvrbDvCdx737JURs2HxPGi9pjaDvTTByQ17ms7HAfdxuexqx56HuFxbx9vNshfbeEjZeLaiMaq3HVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UT1PY1Y6qJDVi4eSnrE274GVsdjbj3VHqNj2asEj6pPXCM61MFss59DZYWKwfHbaB8wmJAYB8yuiV18Ts3EC2Bi",
  "key1": "2dxuCHHNW4x8i6VcrH8CRdTzzwRBNALTHWke3TN5kdMSgoLpnv29qdhHXEa6KvsGERagvGEEh573ggfcvn6Jf6Ji",
  "key2": "hA5en2rcJZrFXaCSPYAHBR2JLj9Dh3R2RXDAMt9k7E5MxTU6oRgoXUAouXdLhTk9EKZ9o5GYdeJAcxDLQD6Uxm5",
  "key3": "5a1vCEhDFmXhU7joKPe32H43vqo9mDenu98wcxa3bcCNMGm75ize3LeWxchv8KizUgJGqEHTham9UA3Qhabf3GBP",
  "key4": "21wmoMWiAV72j4BEHn7emQAfR86AwDfPKJxGT9SzD6enet13VapLHinZ4ziiyjeg7b9gVkph2kDJP3jQvYRxRqFJ",
  "key5": "4utTBxzxZLVfykWKuFdNEv7b1PWhgjTHWyR1wmGUDcuEj5RAt4jNW3jDkD2P5PFkkcwWrjeiwjH9KEvFKVod26dF",
  "key6": "42tgBjtrdLkRkZM22VeeEYzePp915MhAhGzqrK3hEx6Keo5hfP9pzGZfms4duC83GRKxXwkzGCQs7Mmfaymuja9R",
  "key7": "38EPgCxozuTNDxE2JC3QS822yKLFMSf63wfJWt6u8omKpA2VUaUYNpDJfC9FCTXqKRMpJyZXP1uwdeA6aAFmSBbh",
  "key8": "48sE12hZ4SGLiHu5LxnqRZ815fkRSJTDtuEHMFw5txNBa7PqG8y4qNAqgvQvmqqpowE27T77Lm2SLSw9CxStyGiG",
  "key9": "5Bg1sjd4U5gej8Fb6wjPdowC8hEnNCWbVV5fQrcJUdGJ99Vw87AtJH4dpfePJibT588gR9uDPgM1VunEhjgtA2De",
  "key10": "5psZ9CxESeYSMzWNtqdMAKpn1Hz6Ph2Rgt5mmBzF5TVNK6jCtU9vuNE1EsopjmVrVrDWVsPKdCGwZcSYAwoEyvmG",
  "key11": "21WgM6dhjAxAYjyqUTPfRosddRtPSDDGhorartz26rv46GbS5tKG1W9xSAE8PTHzZKp8E5tcsBqEjfAiiJM3fadf",
  "key12": "4MnQXz9eTCBokmBVg9pcUbz4SqPRKoGJCipSf8gDuPpxUrS22F4UohZaw9z773LTd6nB9oHjLzZ5oRRGwhyWgP7E",
  "key13": "2vS7efK2sbHxcBWSTvzjM1jTycDZ69sAGqCCZrGSKMHAKDuFBStRGNTw7CSJgd34UVkbUbpRXcy5snZv5CCQ8tfi",
  "key14": "5KPkqsap3DhEp5qwsePFSahb3Ysdr56zQvWArgBbsxqjv8VGsdw8x6T4f2pMKFbu8PJpKPFo6j1wHraKtTj5aXWT",
  "key15": "5KAR63ZAMgiBjnE5AY6zvAL9fEU1DTxA8tPpEegPFdw3R4Qdxj1oZHiPqtKmSkTwAYxSBofrU48NzUQKXvP5qdXz",
  "key16": "4g2ByLBurunMheFxhSfugyRxpd5mJZajnWdypNmCJJHACydTBo9vwKQRiXwn6aUC2wZHgMe7rmNbpPtzGXvSc3wB",
  "key17": "2Rjwtcf8ZmGgucem6qogVtWoHMT62AjqZQz9GYcFBTYdZzBLC8xxR3XH2uY7iwyg2WuQEt6RjG2B6wBtR1WsV4iT",
  "key18": "66vwLgsqjtqENyenMUCyn3disbDk6zA6ZzGDMeoScE3MrdNEyrSXnm6oS7DbLMQu69aXf98wgbEU3T28xW8SpVaY",
  "key19": "664QMZePGR4d2RmZ4WMmphAWm7DGgkzBko12qAa4cE1pWLQES5uokbg2L8vhkWrCBFsR5VmVY6QCRUKz4wX6UhDS",
  "key20": "4M3SQ8Fp46HYBqY5GGaqFHmEE8KXsmS9QAoKm8HpRprB5G8oJ6Z1AJTCuXSFH6MuBAWLwwTDs6efAvZxe1kpGey6",
  "key21": "D3KqU7Q2dXbzq1XJQqv5xxCmDKxTRrbzkpdTPpcvTGVf8F7GhqerBTbxPwgWFZZjCvdLkpeKwfKWL3NKGq6dhkc",
  "key22": "1eN2Hj98VJ7qkfPFxuNJrKJkhXG3aSJM4Vd81mAKzrc3HSzBMPfrD1pvhsvuvBctjJRwLuUqUVs8uNLy4La1zJ9",
  "key23": "4aS51jRNkech94BFMS8pZ6un1uGibxe27YowviPypHUZsmtpbiDZqxhWjAmQfML3qeHVB745gYpP6FxZjbWKyEBL",
  "key24": "4AxjVP2i4Tha5JniCAkWW3JKZ1gFTb5erwrCv4VA6thSFxbQa9YMWqX27h85rc31svmdNZScM2GNKHWWtmGCBJHU",
  "key25": "27ut78JmjnWy4yHLJipwLFhrEke8EAGxsnyBwRAqzj3KQoUFubCRq9V4aGxGLSEQFDkGn2xWKAQDgsGtu2uBPPsc",
  "key26": "21dzanbcDquuVjvG9Qr8jiSkFxn6EpRfBpRXZt7GhvY2isdQ2Swe25gCVhThnAd81E2mYLLd8K9RADt24yz5UKRw",
  "key27": "4gzLAMndekKqFfk9GkLqR4cMsy42Bj9M6b3mN1fBD4AG8BbXMf4L27Fe1Q5yZNdXRxg7Y4AGVrWHZg4GZ7i1VFh2",
  "key28": "kPYqSUJFbDrnH9Eq7MHMoWdNVSpXrE5AMdfMxYPmdqyMVQUHUmUV2DgfbUbdNHtpZy28K9m41dn41H6Bss3D9mz",
  "key29": "2sMLGfTxoxWgPkLLEzyZJuZkG8ysS6amdZSQVPC9mwCJ1AuZ13wiNikjyeFigfWmWuJvWHtxFzS2M2hGXUoTN1Wq",
  "key30": "5nTFc1Kn4ZmBwPXQD5PAKZHgpU3AQrbS5gP8cFNSmbf7EQHXX9EWWCHwYKyJgJnR7AvKsDWYRUU9jve5ZTBMXR7n",
  "key31": "4zNQo9ZNrTLihnhqfh1qVZSbas8QqJ87HUgXWtZEb4jh2VCmZhexDnNDRTbTCCxGs8wcBoCRo4BtnncyxbtqM7hW",
  "key32": "EUpNxeRFH14wEHcXJQGPz3dM5J5AKP6DFa12cbRs9q8Xm4N922jqcE7472XEkuQWuwjvPzDjSicHuKpusyuTBj3",
  "key33": "Y959nZTha5e4PPMcBd4vJAqDs8QrdVUjFGGdxFgSJjoorwi9sLxChhZg4Y4GL68vQYAbwZLLmame11WoEkoXnHL",
  "key34": "5WTpA3rZxW2qDPgPip1JcxJYzRj9ZHLrmFsh7AdVNsneJ7UowPCCL5JsyYwVwU7Dnom31eJKoAqh44waWCGKqihi",
  "key35": "jG1THiCbuRghVioU3UpxFa8teXM6N6WK2jH1FAprv31BqH6vcD2MabTQxsPKajHysnxZLvCjzkrj3VijxtAhtd1",
  "key36": "45Py1vjdY86Di6mRyUfMFoq1saa8tJEsBFqR8shhaxcSDSHFQdj3QGmi2WRyV9wkZEaonoSsMA4aKjrpwEh4fNg7",
  "key37": "3utptdFeaCCpAuZTbUxCNzohjRL1pshJj53XiCB5dQAhWXTxbFrekLE7Q8mbpiktHkyUxkGByinXgo25dMNM4dMF",
  "key38": "5pKBFoWqyF1Taw5GMGqjiwKgRzoZKbZ7exQ5Bqsy4WXKu8Q2AcPDSpVTTSV7ssLRTf4N5jaqX2LpzJaDZSQwiW8w",
  "key39": "4dHPo98K4PPdqKoiys37EJ8A1GK9w5zUFbyArR3aFHuM8imAUEk4MBqCFp4P3SBm4z23ACLvCSua5dxMwFfdgQZE",
  "key40": "5gH5ueLahbv8GEnCFFB3t1dqk8kyQpppPwfyf7yGSrPs1PLwusiqboNBLovccCxBuu2TRikhk37J1CNf52M8iB7N",
  "key41": "4EGAz7vLfrx8Kx9yFJdPKCF4cf4NGhdVbNhc85Xf8EvhuBzNPg4rZMjju7KqciHupk9pe1p3ZRQxhV3uNWuqqVWM",
  "key42": "5ThSYLUt9vfxN98gZYbwQt7CgX4Hwd7uSozSpuz3QNyXbcjPiFR6ZPgauSTyCtJXv8TziCkot1AjZgqQT7xMLCSE"
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
