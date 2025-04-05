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
    "9UsLScQ9abP6KiNNk6pDs23TsMiDqffXruACAxuiJx6CJRMqQi6LUBTFwpQ5A8ZWMrixmfiVHze745hj8KoMmPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GhW3T86koNm5VuK8iCspmnuJuLx2b2eiJe4x4GjzVqKBrihMoutcSFNCkGn3aMAoRgq1uduSW6pL8eNEqiAiL3r",
  "key1": "3ZMW4EFJBwB7hKn8R5qTYYnArRN5i4izVFJcNBfGb4LmEMro2oK2sTVQN2ZJZFiLUaNxRxv2wpEPFVpB4MEjgvYh",
  "key2": "4r9Nz2SrAdQf2wxoJF6q2iXXnb4um3xJ4jEhDcv4sw1VN7eVxGffPzdk1HkV9Q3uc6UESk7GvynLDdnrqqCcVxHq",
  "key3": "4WT8AgeHQLs3TZA1HkiFgaZn1UhWMF2uRiX5wwGY9vxQgJztPBQ93mGaGkHmFySeeuQebHY7FBZnYenfRqPDCMa1",
  "key4": "4go2v2R9AtrotcdbWdieb1wCusvsneBf41VP3sb4CqhDzEzgfk7CguvZeb66FgqFzqh5hoHA2i22gDms3W6TA2S3",
  "key5": "3y7Zhkqdwoim9d9UL6Y4xXZBEtnyKCUhcqKpFU2wcJ7V5ZKBvZoEayGR9qX9FQCpW2or5KsPpEdoD5BbvNatgksu",
  "key6": "3iRrMc1yQGRpSdESZ71UZQ7TLbPeWhEn4Z7DTTrQ1zD1EcueFoGthvW6PydkptSn4GwMNUeLnGanT1e9ovRNjok3",
  "key7": "21nUn9soKjDbBwNgFr77um6kumGY2fpzcvEWcZ5uDiK5nisN5G7vyGW9nBHy7GsfeF83imw31nPBsqX3tschpQxZ",
  "key8": "4UzjNb4ZF1mqGinousF39U1D6qF5FgFZednKCr7nfiMw6Uu2zmG7rj9YSgq4eh2sKGS4f4nUxxEAN7r7GTrLDDBv",
  "key9": "2wZRA2WxFbmnNBf83Pn4Qy8vwo41ShoUbkPDhk8fkAffAEMuUUt8Y24ZuCygknMokmQMYDnipgMv4JjJpikNTzaP",
  "key10": "663t44yty2AEFhEwRHCrhnzYrSqtyMUyCQeSLem4mVfz9ND5qdEUG546SqsDcrwWiMDyn6uqEXALkVC2r3BZjefG",
  "key11": "YZUuX9ZaBTnccxwUcMAfkqT8ijKp4WeyNNfUhboFBtCsTgSmtsBZrGYGmhFxnzmq4DM4KosbJBVw3XY7hs2Wnfc",
  "key12": "4swkTUGSiMRAydZNEHj7PjFNJ732hDnQwxYgmqCth2rpdCEuPWvL3JThA2BDuRqfYKxv44YhuSfekU3AMNXFviL",
  "key13": "3TSWVC3uv4H9tnSKsRtK6yEdqoGZY8iMgCfPRpnMf853XUWds4fiAz7J5DrqxdYJ9pFSJqMxYZZQ2iE2RGHWJfsY",
  "key14": "5EnArio8Vchy1rcie1dMmXbgeY1Pd7i4cfDYRrmMNRkDNyv68xsDwALK5bpns462ProtxF9nGeUhJ1AcgGFY95qD",
  "key15": "3Luxsv3K5M7BTYrun5KtfcA7QFwzRwRMbjnTajysG19bbMg72x94MknqkjfXzX2hDAQ748Qt3BA348poTts5otR6",
  "key16": "3j2EbgJR6cWfPpwVLqDqkiEDfAgsGSU88dznqFfEquzUzpWPWj7AFKwgrgYjgavF7Hojb3yFksCBrLqFuxZe3Kpw",
  "key17": "2rZ18teBEqmKBtPCyN7zUZxEVbQQqCPrRnwR6JCz5vX8JKdQrk3ToY97RvZRsk75NJTCRruQZAx3Jjj5Vv2rsEjY",
  "key18": "4EMfW1fK9c3YEBiiR9EakQgjYtD5hv6rtrcZa1tY8WDAUCbWZtHn2J9HpTyd2XEFWgn1MNdTEJVRJD7cyu7C6tFb",
  "key19": "4RRyDjX2tMBkVZzqKqTsaJX38zyM4uoKK8XYQnkCXC87pc4b9PR3W56imXBww7BTt4jykYyeNomtpMv6GVYjzvmA",
  "key20": "5y3XDb1TwxrWJtR1ixcJupXj19Cqxu5tpV6no2KPgzueQoDgn5vbYGgV5cnML8p9oLr4C3NJeif8jFVSMmjvV16P",
  "key21": "5gxMxBKvyPqfUZFMr4eqhMFUFhEEVDEsUjbP1DikrZGvYx4FdEsEGumo35w3wtQs6W53Tv76NeYcZixyfPn9otN",
  "key22": "5RWt67ompRQNxQ2ZYUxQ3Ct28jop3kshEjoqMsZ3q8BEzRqshrD6D61hbrSwARH3DJnLJsy9ya1mLsgNKHawQu1L",
  "key23": "3EBMU2H3f8KpcxgkeLzYfJ1cjPU7nG3Zv11Y59J3PW6LBtkZ2MNzG1SDJzHQgJ8Vbd3mTrXSHas8dxCRCz7XGefV",
  "key24": "3UyczfgfyuWot6XY5Nnz2MVN3MvY7TnkeqG1w7xxN6fP4uKh9cVtpZrdAau6EyGw3CscyPDFC8dgoqM9HkP3zGXD",
  "key25": "3kGUZQa1rooPqFkE29kt45hYNXJS8w92FjEksi2pdYaUNjjERRNEBq1NCrnsBGL1HfmaScRcSbgo8d7hdhHwDkX4",
  "key26": "2vwoYmggzyGtZFkixegRDvDR3fv4a7QrbiFiYMD2nDerXE5g9D7urnXA6UxeVvy5tcYpLFMCYybwHLgz1UgeXdvN",
  "key27": "4YaBWYeZgL48pToSnsyeB9VYKFJZ6bf5eGo9A7nw4p28RfbA6oFjfWvWhMGpRH1i4kCfW5kvpRsTY9csNeZp8TZT",
  "key28": "5xPGabCKdByyrjjXJpG8P3uyBdWY1vRPDtqZAuTt2i7op3pMqMDW9Mp4TdNXcpcimuKhkv1q1pS3YABsAehRKmNm",
  "key29": "3KQnbZa9vjvCuQNSacabrTfW5sGNY8DQJEPCX25i2iHuauHLipoPBj6hWTjaxu6oxQRoYQwRarynXnv9aKRmSxia",
  "key30": "5qbyqQ1evSJxzXQKndK6nBbBirEVMzyinPfYUVWAoigu9hQaD67XGWr6sxxkCFZSm2LdFViomVUotZ2KrSVUw16g",
  "key31": "62KaNvzNLCyNwiUcYkGsc4Z8LRh25UEdMqBJzVMCCbwLZ1hs4CzXWWGpK4xG6dnR8eb9QMz6Kk4SbEts356k41uQ",
  "key32": "2VvnAaWK2tN4xEnk482dpuCxjz7fVfAj8rvmxvAHvWFdQwrYRHwbRddFh8y1SGsFgGggSNc3pvAMUq8PpDtW4sfU",
  "key33": "4gp4frJ34AieR8oPqLgyqUWoptLRZWF4vwiHNwN5Wwf1UopbiSTAWtWRgyZ7qWt2evVkCqd4PrYuoTmkUeQ44yhj",
  "key34": "2m1RvRpZzH6sMXSGi8iASSnSDxxas6WpWp42YF4LFAmU5rWbwCBVsdyNxZXd1D8RhzsoviLE4JAzz4fBcfgGWNy",
  "key35": "486TP4wMa66FZzX68aDeHnqppcuVQ2maCdYXoKWdPH4pSVb4GqeNX1qV34Ji36rc3SSAUxKbbSUswmCxZUaQhLiC",
  "key36": "3Bi5HMqrcvmTCx1r2pA2NtUnQEdC6RgRmJs5v3LK99msruR5M4UL8o8ZEKXuKU3M8Yov6iXanuJytP432bmo9PSr",
  "key37": "5syvVncAEwCuNR9Ct3XVtVkafYD1W683nQu1YtfCbAEt8tjghXrcjKRAE3p7mTCxwKTAsaYykPimo7g7gxq2UvcZ",
  "key38": "5xy8HdQXFZgQV1YXS4Ngdo2o37aSJdHmwM1XNQ2wSAuznqa7hgMxdjSwyGijJBnUQdwoj4amDM4ULmPJQeCv4r4c",
  "key39": "2stEf2R8EMR79b5kpdcP777nnukjtm4y7XNjkTSAPbpPdaNXEAqdrhFjGrgLvRf7wxz9bBgVs3YCgi8qSvHGmyPN",
  "key40": "2oHcSqRVAT7RajSmyeENNYcHzt6KqYMVCJsNyRriXtqp8QkcmCznxokZUyFY4wJ6sxzK5fdifavjRCqXdLrXAbG7",
  "key41": "5rWZsxRE4YjMYJMtBz4W2XgNpHmMnwTNiTQMWeq9QK2thgFf8n8M3brjyhNFLaxBBvFKVq6SNK4xztMtGXa7yznf"
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
