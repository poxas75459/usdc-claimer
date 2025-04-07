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
    "4xfYbVQPqtLsxrCHqAy3zeumDLpbvywxs8CqHnbEniFgA5XM6rXVmiggV81fZoA72vjTZxo24XN8ecADFvAx4oWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bvens42vKu7fCFQ4M38wNjr9XQJDEbiT79A3ZGV5EsvjVo24iM4JBWsEhaYnwtPqRWgWs7uRFTY2N3CkaYtDuFm",
  "key1": "45fNh8UbAwwhD1f46mbqSpYpRtr6JgUPk2Z7yXqQ9vo696XduuvmYEKnHhtNwajqsns5wdRNQD3EcadFF5Z2E3iU",
  "key2": "kTUKyTiW6PgSVZwWgtZr3dcnqJWD433WwE777dV9EYePnKTFnpUnyytqnhnsR5dLFd95zjXGuuEGxewPrSh6LxJ",
  "key3": "2UfxDueRX7A6CaoNH3esMynk4u4WktXa4F3Prw8VnzZmW1zsRWsyA78gEvSsoAVtVvapVz5XC7jVJPSyBNV3wx4r",
  "key4": "2yHt1mmxYPB6nMqf32seQ6CPbK6jgNS9X58mU8TpoU479e8Tp96pARiqnd9RAGDqNBcXcoxYeXDRuwsT18gXV1Pd",
  "key5": "bw1wXY3GGSJSM5j31rSoegXTqxCxqEEAnAAuUFXgzMBSugLHUuDibeE1i2X3kHC4bFmZke6RPKztV15dDRYbMZt",
  "key6": "27q4Ac98UM8nqFinLpcB7T6c8K3tbrnWm3z6BgTQ3fPvq6Rz4ZXauwx86SnTkgDADxiZVbcZ8wQ7kYmcAfviohAv",
  "key7": "3AAD5BtmxEQquycsc9yziWx5rGDWjxmXBd7H81AMyAuB8TBv6RKUcj9bP87YYfNDEUPAPwJuFqEQ7PV2hEfMvXen",
  "key8": "5zHMTZ7AKw7AJ22uKrsNR9ssFwNdXC4ZyiDwhv3JyV2ryMEMrtQiTco6RCsrur1B2TwKmVXbuiwmvaJuLctU7wEq",
  "key9": "2vnSxkJqzoFmEZcwbp5FhGTDrKvNpXDnbWNjR3tp2pdHTWJvNGY5hdjodiwxE93qnfhSPh9YnuYs5P5GZeF9uyK3",
  "key10": "3kf7xqRLkq69RW4craxVduqPgykFxvb3sTxN1QgPKGyg2e7c9K1eUywb9TxbZyUbMsuSyD7CvU98fpDMZymAJ7mu",
  "key11": "55CVSdkJmkvqouyz4HAhoz7q7Wwta1RuEgjvVFiXXoG6oxLF9ULvzdquDBm96rQvKJnemQkHjvu1EYtKjAdHLDj",
  "key12": "xXCkpPYeMee8rrY2QFAxcTMTtHfuVW1Q3Pcj7FZnjPN447edqiJRTkTCVhPkM74nYdKFkivLL9jkrjPFFHrCu8u",
  "key13": "2w9JD5QfxtdAYSdtu2cFo6QMaJbU6hqRL6zxSULhBqdatXbz9XRpm13A7ZQCK2KEM42D1Z3svAgDEcbgS3U35FyM",
  "key14": "gc6n8KazovtNcFqk6rFMD97YooKkYTh2ALZkw57qbCuiCPQbU2WPUQXnZxLyM4QYLU9vreYyDwk3aA6rMY5tHBj",
  "key15": "5SF41Y6S6TbigAeDdUD87RkL87fdWG5m5h8vSKnvm5RcTmJjg8TWpyqab3EEN3BY5BbbjQSBoW4BcgjpM9QPHEDo",
  "key16": "3YH6gzNcBDwTfwWUmi7UzerhkSH9o1Hqi6spm3bVWc1ww5448T5w3kZxSPGv5LoKyrF8JjYB6h51LHknenKhhjEB",
  "key17": "62TmPE9ByMdTxKeyacRntZ34XjWhVikLd554M15sgkC9D3YUhD9WUgDmDJLq9cvSPXSaL7sMXtu5c1p7EYnFnEpy",
  "key18": "3G71Vwhd8FP1Z6rfkcu9T6KcYb12oTfioHZyvy68h4yvi9AydMuq6KmM9TmewdbDRow6kAn6e2arPTRudkA8TGiZ",
  "key19": "2a5As3DuMi7KBEBXsRTm9vPMYS3eEE7jje7Ww3Yz6F8fZ2D3oDFMBNWVvkSJkJo3GM3HJZJger1eoajkeALkwsHF",
  "key20": "dfpkSaeamuUWbHaZYsLyrm8zFryLJtzh2sW3HGjdtJKcVXeA1FtHtdBfXDQnC2trNi8qcqDg9GLQT1iREqM7p5x",
  "key21": "3GdWoU6GMstKUfTrRDLsq6bk6PibmbYbgR7SYyHxQWaaEUSbPvpU7L5Djxpr1sgzG3piWoAzhi3GuaUeDVSKVjg7",
  "key22": "398yKsnXr8AncyJBbabvePS7tLkQzan9fEpqG5jjZDvZUEGPdiC9HHHUeWP9FeAcQU56pCk2DX5mVb4wpYnyVztm",
  "key23": "ej7g8KJFdZdSUsDG9pdPQjDngaZmMMft5acp1yNPSSdbL1RLrGFBYNd4JYnRRxdkFF1WzkUwgUk6jnvMEmyHBip",
  "key24": "4sxHcUbPxsgzsrVGqqTi1QntXibSgqiVr8y9TytvdoPjRFTEUKwxjzGyXBrDXBUDrktu1dCsABWySsU1HSfG2iRM",
  "key25": "5Py9moQ9PiNxy5FWEDhNUcDFFD2d5UUpi2n5bHrv2iqMeseRkeUVWhLXd4tmswANZ4irNoFidBLnoVA3dVhUDiLc",
  "key26": "61YTx5akCZMP5SHaReP3f8KvEi1kEcfKMV9r6fccJxEGRUbiAnobf2AvDS8wPAdxL4DkXW9yKfEZASLJwsdPn3L6",
  "key27": "5XPD6WpPN4jBKJdQyZXBzMNehss6A93F8ctsCp8FqcanX9C8g81WtexmNYFiugFgwJTyPCSvAF6n7jWPHJkGWjaE",
  "key28": "56fKqSCPc2yG5NLYWEe5DjdM4KdEnriHcyy1NnmoRBR6c1e5oaAw8GDxtAppuaKUUrnwj1MQ9mMJe8VekGjTCCCZ",
  "key29": "2zXS5iLTgZThpQAuRvbG5rZ55jh5ywAktyETccuMN2FJFV4FAEdVhiffmUyirCtrtwy6rKRqBfio2GxpV8qBu1jK",
  "key30": "2wffbxjsjEGcjodnkhqFy6sATNQPSctBnssh8KxRDez3ycsZptuSi6d2Du48GsgzMoW2fQQHnxfG1tD18p8zKEiH",
  "key31": "65xysETzARSDhx8xxuLAB7PhcxZm8mif98Qvw2FMtrRLZGc7JqGAmRCbKphUK1ZcJkVEwPfSfEHsPg57yuMJbjsa",
  "key32": "3avDfMiuxmjgtQPuFMft1n8hYrgvmQPPVC978ECFFMRdwcY4tN4c5fac5jcn4BxcqMdQkPfeqH1VKpHYpSg3GZjh",
  "key33": "3z7BHYN215D3FkzHubvVWxocjNs2XZc1G1F3FaFQ9GsCNBVxAeJUn1xEu4W2Fd9quz2uFpDhHwrXfY8UEWvsHaT",
  "key34": "5Zirp184h5m5A2dKfdGyeSDWkKx3rqMoLY3zPc6kv7e6F7Zc4tULR4UKiUB725ZsLjuTUh5XU9cUTFiGkxB8zXBW",
  "key35": "4fDoDkT8Lk1J4JQZyBdrQ5JHRHxX4hhMLdYyoHMa5dHuGUfeNjjUNwM7GgtQ4kXSbKibCSX7yDsVsmMQGuAv5pxi",
  "key36": "3ZSgAw45zAuSxfwKzw6pcHRYofrPagFbqcCorUCiJqHUHNZVr9QE7XEQEHyN6wm1SH5LemmMhxgoAkjoUL1oRBru",
  "key37": "RoZiMVzEdq7Eg6TACsqYn8sPMtsRHRTLrBFgzvEy5t82i88CQVdsi6piq2gMBuw9BfaCT39JXu172w8XT1d3hNt",
  "key38": "236qs94jNwNSfZLe5w42PDCWqacKCYmUYM465NLXcAcL3CVVmnRu6TsiPUVtR3Fq2yJFdai77VXEvydbdA6HVRwW",
  "key39": "gQ1dPm8Zw1ZBedVvWbszGzhxUSH1zkdB3ZvrEHmmUeba7jjsQi3oxiKuJ54Z8i2JdaYidyWd5h4QvZD1DeWyH3Z"
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
