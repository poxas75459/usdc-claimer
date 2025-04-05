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
    "2v2FHfBebdVLcn2abkf3fDNuJZ6oHBV5F6D56sKRQ1raVJfDtwjxc7Ty6t8vYGBHoVj5SWchqNGpjhXK2gQ1YFQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u5GV5SCf2B2s3RhMqFpR2phZ2zkG4ooNrrgsUkHpAsNLhLPreAEyNWr3W5KNNXcH3Fbhm9EAXwVyagu6HHgkFhN",
  "key1": "maX4C9dfQ2NFuU7cWZeKyUydHLysynFd5j2SDdTSM1tSjuxepUoarS7s6hbR9omRZuyGPXuzPxUrDKr1MXjPvf8",
  "key2": "3UY2HCTpHHZ3TtBjvrfsQBKUoDcvRdhAWaSk2j7fSxUBpw9K8NPfbTeE8vhKGXv6kArYfnrFwnzQKppoWcwdPBa7",
  "key3": "4ZL9R5GxrAkLkBpPyP5iCMFnxDVKDGTPGjDyjKxfpmxT54zU9fJNURF6mU1Xmw9DJ55m1QwsEUeJFgwqrKSayjvw",
  "key4": "PRYcWTabL2Jvt9d5gD5P9Yj4yj6VempUL3obzLvkA9Q9cUT6yaaqbRMiFqgMUFucP3dFYawhZthhyc26KgpJ71F",
  "key5": "2eQVXuuU55AuzSSVFr4d6YdvMpTkXpei6xGnHG5L81Jkjxw3ypDydGRDhQnqwdcLGRBb8W2XQwdmSGmvBTWCQXvq",
  "key6": "ZruK3ZLs1ZqbNWWeUw9nLqAcE43Wt5Bu8aktJwYhAnbXg6aEbWieLqtrAHpZMT2zyk4x7iMvTWfZ44drsg94xax",
  "key7": "5MaHMTdVtd3gnasC3fMtxqG4DdxjDbrEHfAzyh23bVvNUnL5sakdivEnQjFpXCDuoG7AJUsLtipdgprKTQtWW7vj",
  "key8": "21UHZbr52PFwdm3AuFwekkiWAasrNf6UGG61BZEPRPWEeTMXfKwyJx2Y7eSs8187KafZrTvDrCew81ajUzZCQoCt",
  "key9": "c98xjZFu3VhPnWeVuc1HLuBezNbVZxDeM5XNkYETnqzzTH5BUjWXSAUU8t3GcueeTw3Fk1NrZ7eed8fwN5gafrM",
  "key10": "5Ai7rrdN9po9fvWhmygmp6d8F3TjjN6maAyGj8dqSvzAqjUYd8S4mJpzgqKSrjSUXvRJrTm657RiWzusjF6qCJ9k",
  "key11": "4f6Y9Vr1ZHkdfWoPXG1i7iaFbSi1g7qdqafSfdzFqbr7d7EGKpzUot8XwzM18oYKFYx1DboQWNRgfbQcQAzipEBi",
  "key12": "3Uh6MpakwFBY5QDXFBf2B6mP1WpyAYCxNR96BLBw22SKMojAtkZtzxVzz3DguJ2x3ibfkdkf96LmCtJsCphdts1q",
  "key13": "2gr1q6LN2Wv8dUHdye9bAp5mLAAwvY4psYKj8vB5MjcxjdqJwKwv8Akb5HKeJ37kYRfxQ6c2P1FB69wHpLbK2ph",
  "key14": "4eAF6JJbZ72NXz44JATXjfv1inDBcxoioisEH55U8va9VfmhFdo4gcJL9iFTBHG9HsU1K9Qryw6sV6GrbDtSL3cN",
  "key15": "3wn7W5AkEhpBzVhu3fdT8Bg5pTYkwGRBiyKcvSWYEtgwDA5TZbg3mhmtc2kWwxGwwZSAiE4xspUCqVwtCwQo6EBT",
  "key16": "4tGZmbmDxDoaQ6KHiBgTtXdQEj5vwCuqR7aPveYWvNKRhJUHhrAHwm3Si21per5H8HZoeLZC71oMKweSpzauNqir",
  "key17": "5fNahTp8ufknvMErd9b6VQnJaaq1xKuG5JxnqhcFrmyZa3qbMBBvComneiGEihH9pvL3QHH7yj2TSiR8MKBLHbPU",
  "key18": "P4HfdtSRZi4BtW8oL7Kpjn7gGsPvGUvW9okWYM6KvM2u6xBDCXrjYaVDnapbvEkbkupMWJarfL7H2WZ86LNwK5H",
  "key19": "3kDCntqxZqrXycdjtv73sW8JnDrwYJeGDgdu5JxZjbpdkB43FwNMcfbK1u2mMFpYFijNmR6oaXG3m3D8CRE7KSKC",
  "key20": "2RjVEnrsysFDPn6T8744Sf9FNSbSGfHm2HaQwhbbY6DZcTDGQhUP5uy8tLQdJF8Q8At5x1mW4V3yKo3p7UjBhhTw",
  "key21": "2AJhuVDL5KrnMTBvJLTg7E11yebPmeSMTQBCcydR27BGDpFJQz3dtNTePfn88BWjiLhVrVgm7LueN5ZxVuu9witB",
  "key22": "3np9HfXS8uD8f6ej64q9cDFdwZDUa4zyTiuYfj7rhxESBn2af9gAckPbfZbrGeZF4BHFwC1ChqwiG1ij7v8SZmUC",
  "key23": "2sFKybwXEh2p3t97PedCB2KTD9krgr72jxbkv88FCQf2shVXtAAeTuLn8idHRPUxV7JD6cZdRV8SQtzETCueZFi6",
  "key24": "3UMEKyi4Y5JW95H2XpC39Xibx25ncfBXFkDHFqpPg959ieKMRwTNKkWDPfnQ72QoWvb9JvQFuyY7gwKWV4qqcZRL",
  "key25": "4PTwuTKWGhqmuvkmp767ZhurCKSRHYU9ud7JdVTJCLQKcarNvs3ukVv7nX9xx19eAddt6KBaQ9jjXfkdTDkHFf56",
  "key26": "4mDXepFuDnq4kbA1YCCzG9zFcg74DE6tB4QcNEREYshi4TDvcSbCVAzPhwBNxPnpwWtwkXcBZQihR5qftkQFybNS",
  "key27": "2ucTWNro9EM8rBWB5YdJMWKQqCmY73b96R6PryUoKyZnRz9Pd5osvip8cpw4R7Pw7PBV8bk1dtQVajB1sNXCf2r1",
  "key28": "4Jbaic1Ze5zqkuM3gEQBxp8z5VFQigJ2sPhRJ3Tte5uF9J64WLrgaokyxzymHtSkEqzbVDjqu47hCdQwpxfa2GwS",
  "key29": "62qhjiNqU1cJp1qohgKqTABXpDBQMr8BabpZCc4Gw1v5iMbopKhewERoq42YnkZ1aAruALwuwJTWpoW6wKppneQm",
  "key30": "2TqmhPt7vnUZXqh47LZ3gNtk1iipDYGAYbSyyrPCwhs7tBAe3PqbVpyqAixcxLiS58eZrQ2F8gRsg4wEXDg1bt27",
  "key31": "4ECgFXNjdJYeAUb1oR4TfrZpdCjFcRLuuNp6dRsajXwi9WybthuQARAvguvyjbyEcn9Gynz19iGCzj1z9sQMivq2",
  "key32": "4jZv67j1jSzKKxQZKoAugNToi3ssA8PuGT4WVp9YuyEvTV73EBrXBbZsV8x61FsBpZBs2rZbyEFzsSWa34UwEK8U",
  "key33": "3PXnxQ6ZJnszxQ5ufdKNi4qeQEtGpMtqRyzdiSEMwy1Zhm5u3LRAnWP4sL8TD1njSw7QSCb8jDh5n8MCizEMKv4x",
  "key34": "2shwhGWo6qCgVVqSt3q8gfAhfhVBd1cV79C5Pe1k199vpDSjUFfQ9QRynxzBAm3uLcr32k6Fcn2QUgvMHof4JZ6e",
  "key35": "zzBzDsoG4bEwD2CXAQHXsB5mM2XHGF7nZDVz7ybkUWLqH8A5YA7zzETSa7CwUV5CRWN5DNF3gZckXy1E8TtfwNw",
  "key36": "mLVgyVneJufHQvTpMX6M3nU63gJtiQ53u2u2rHxhJyVu95qf45Bj1SzDxh3ddgZPLqAk4uR5DMw6d75KDaYbi8q",
  "key37": "5pVbZuK5oKnqLHiWuLXzdvS85cUoti9i5bqqAGs6t7pJVzax32Wso7PWPTQGsAvbU8fHw1PGtbTvjBMdMdaac4gf",
  "key38": "53eUnpbYqgfSVYv953iDq4ssYprUeEupoTLCp7tHnSd5yABbUyT6mKNKRm3wnMCeU4MuF4SKRm7ktBHaXEjKhBqc",
  "key39": "3MjjvZWkRHgnWBuTW5eTGUvsxQSQCXqho8ev6PatCDYBC6w7269WTB2aRTVP5wNo9Hvhv2qSoNBMe6Nyyd6eW8oc",
  "key40": "cvbzgiXp3imh17DFwJFdbHQTSe36a3eEKjsn7U1buT95i7kFmcBZ7AJ4F26cEe3GfaqwHQzghbSRtFY1Z9cdbWz",
  "key41": "658H1LLybSpozMmBfuZu3Zf1jkUwgWY9QNeM3qsH6MRJPUjnpmKznecaZVzjoD4FKRZHuep2oiU5hqw4AXn58vY7",
  "key42": "2oMHuNZj8p7qKJTa6J2y7LugALoBsPKtPyabwzjjJQvss2ZSZFwz4kPFfdpVk4avDbRrFa9cpe5ADR1daf1ykLS7",
  "key43": "5Yu2V1dN7yaq9qTnmbr7zaYhumr96t4CUirKGQDeVZzvs99ArhcLz9exkiHrzHoWqZomgNaHxEcn3vTEgj1y15kk",
  "key44": "3jQ2GmrThx6Hyjqd4uPdivif3c98t5trE9j5WoGX6LgQjyEq7EnWReAiq2qTzFjApfafsxn1BfnMdtRoHYQbFLNA",
  "key45": "5D5Xk1nbuvsVqUmUKxKgizorgJKxutFBqDQWcveo2WYsbh5q57trfjib7gjo9KC8ir5kcapCNTYgdaVEvkG2aY6e",
  "key46": "26oDWGKXVSqcL2ks3NmSxi6UXMyMBjVmPLoABpAMe4y2bTBSMB31BcxXqqzuAGqriTBUv2Ahs6EuRajv3eLrPSqF",
  "key47": "3UU1nLMVJLJWufaV113Z5TsxLix3mt5cpmhXGoTfSaXqueQ9cQ9zkXkHvyL4cfePcNeDgCHGnSDZric2HgqFDmRL",
  "key48": "4UsphmrqYkte9MY2suWPG6rvwgXqXhTQqP3wNYMAmTEAANMNm7BzbMptxhp59prDDDwrszXDbu9ddWbZjjEv2RAQ"
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
