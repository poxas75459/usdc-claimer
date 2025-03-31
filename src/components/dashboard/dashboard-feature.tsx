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
    "4FSCeVoojujkTM5PPKj6easKkRpCC2qERcac9eEyAjxa3cb7e93bT477rwD9pPJJYLLTdxShbqwdfah5jzFVGqCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u6smteUx9DE8naR2ErUDYL4CEsesWpYn5fJa9PzYNQczfH64CfqvWgaCaagY6MryQUN3JbhefCMB8dJ972imdq5",
  "key1": "3NdL2aXKDWQqZMckGxqiLA4Per1kQxRSJGpUfh1j61h1e4ttCoCMetVBQAs3CCPPenhtz6YrgUtQQHR81wJk4USg",
  "key2": "3pLn1n6D8YnZAWPiV3eCggcB4H5bJjq14sykQ5qN7noqH5fvttaXUYqm3hR7J9FCqUcLVp92CLPBx4qQ1ZqsLFV4",
  "key3": "5Dc3uCisA8myVJV8vogkzuhXBvf8CzuFrtFFrRFtskP2tAXi4BbAq36F6nHpJp3oToSviPAxgQy8gquB9f2PDzkN",
  "key4": "3VgZQMpZgtvXuMcXs3ngnTjSBYGcuFyYVxw5MtbM3mZbBvgjrsZbZbYexxb4EFR5G4hGQDtu5ydJwmHBPaZHuqvs",
  "key5": "5TZT6zC22AynSujDowDJZbWYoGDRGB7vxrVBRmyWU24hFmFV1n2jKW7MPDwVvCnyJQKts1eR1gDdSaP2wNNrbc6",
  "key6": "4AFGh7jWZwNUHWLKcQxFBXwFWmuXCHLWMEvkhMiRgfikcEYJooUSseGoWjpotiTuw8XrCF8Jah5xK9hjDEWgMYzu",
  "key7": "5BLbYXEjsdWbKnXWdXxvwPZLEADQj5VG8NjWNwZGsmnk6X9vPTP2niHpb3qKZ721yimo38aZDZMASaqSxVWkgZhK",
  "key8": "44rLeVoUWgDbotExaqJMtPKTDdvLmH2g68tXAoEtL4oeBhEorsHe371crFC6PgX2FVEb1FQTykRUnx9t2wBjZw43",
  "key9": "3Pxep8d7a6TA6mvnPTN2rBEuHxUWdX1kMotkjZY39EHHBm6M1Yh1L82KaaNKujMTsSJS3Yf46SxUmCpujfZwiiTP",
  "key10": "2t9gApQu13BDwJEm7rRKS5TZU7Vo3jeD8Gjejs45eU5Vq5t3d8mZ5acKABxVjXGejR7QMmusbZqnqXtUA7hMMtBT",
  "key11": "3qt1yw6aHLsrrMnqNgBKaLaenEXfbxVn8EfrnaSy82ZWadmibxGHm5AvUwUbd5bm4HqrSxfJG6QhhRrhC73KTC5A",
  "key12": "TEhusQxXXMq6qSaiTS5Ekan29dKeicfW9qQh9GNwcVX9uDu7hUg157EEJRiWdvRpti5LH9yasvZzjXzRYuZ9hxw",
  "key13": "cFxkCHwHqECjpoFDHXDb1cDno9yDbyyYmSmLea5s3Shr3mVqc8Hf89YevctucAsGt8ffopZcP28K9MtyBDxhY9P",
  "key14": "3u6LBwbCvvZ8Zh89EvFtknGPkjuLoo2RPgYtkXvMNHyjtftsm67EHaPfGMkFfmdarxPgsbCFufcB6a6JVFUEK9ja",
  "key15": "5Knz42cNYENh9JsAkpmiv23JvHUehWVtd3G1j57DYHHfhSjGsLDsgRXcAwHYNCEKuLhqN86zf6PTKS12VfHhX9rL",
  "key16": "4R4LXkzPAzr3GwsqzPsyd4UmyTsN7gMpUsriRiobAqSfuQ4LVrxkAvgDJsXUf7sg6TTiA6uTN6c4DGjUa6tdvxhA",
  "key17": "W3DbC26XfZdHsmtz86M3ajHzyDrVfT1yYT8wLYZBQDkeqFpG95sWgrDzbDaC3ervtCd9JCC6xMrzFVynNcVz5iv",
  "key18": "3N9ZSQEb8bK1vA4ZAvJnZyM82E6y4K1ZDrMyF6oiEpZQUPmxgEKTENPxN8XVCtiPC9oRVRuPk8gfeRTLMV2CAyCR",
  "key19": "31LJWambTY62wJt98vy3VsV9MThCTjmQRZetxaoFCg258j4BBAbAiKAFhu3pJJcB22HW7jKfUF32TbAWy9cXeu66",
  "key20": "jXfXFLywenfMm2se8ascPbErvxmZod4ob1j66RaSyWBgUF3GM6okHFikzabnvzmPDapoTAEGEPD1sYi5SwN4mrw",
  "key21": "4xXskm5j8QVCMrwodj5f9xnwrBmft5cDnGAEGgFPQwmxBzRu7P7HDe34AE2zj1bjzxFPHoQtxcsd5tNfNzirSiVz",
  "key22": "4S4y4zev4S1haTHeTZH1KHRRRe6TXNSnSKPhQRZydysyb3CRvxjoPjhpS6nnJ7fF5eUqHM9UZQLqRj3kvXxvna1Y",
  "key23": "5FZuTRi3mYfwbewBiVEPpM2KPqTix2xWXQTmjWDE8N9AT3VBkVScp4mLRNC3fkjjyW47pWudKYuaJRBT7tXuPYHN",
  "key24": "4SKcP2MGBsdSvrEPVzV5dhcd2xh8uXScuciUhCKu9D4D1Zha6MsJF55NQMrTTJRKyKY22farNxgHPv7bdq7YVZtd",
  "key25": "KLnkHPnYzyaZr4cJdKuyAozz9eTZsTvyT6cTPx2QBXmPnYACsqUKM9wPBi8FUE3Y1iUYACEUN4FCCZFZupUESJZ",
  "key26": "5xqkmjNR8Tkbd9XHHCcSYFkpWm67RoD9MwXiB8Z8n7c2CaADeJvDjbcM6Sm3S7RoVXqQhwSzjPaGBFEGMwAhgYWT",
  "key27": "3omVuYz3ptEcQPx624nDKhc4DnrcEMDop9KV6iC37GUdQXJGQ1u5vg5R2wCFrQv94tvMYwTAmwSC56Dict8wrFRt",
  "key28": "48ZXDgnK5R5AVLaSdhygUwdSs5Wi9vB1fgmFNKuPuf5eSYJ8tXTBpbZsW9sKsB5E2Ee9obuitS4xMDCV5jnabGjK",
  "key29": "toFgHAm5DN5MRqNaP29f6eoqGd4qdib6qN1GrsCYK28D7JpDeYs3MdWoA1WrASJk66ebftSxq9yDJ4J62WSeMYA",
  "key30": "2GYvZdtYmuUWNC2V5VviQ3rLAKjjtkrXi787p2ncSxSdPiSMenk15PQ5sbWkfXL1oeMtDQyZZ4nVTf4W4KbiCr5s",
  "key31": "2z29bnBFSd8wuAwBvevBzrmq3D8v6WgWhqmqdXUguNBqQv6pX1agjfSUq55vm1Ehi5o7g8vCbXDXt3MtVJLoWLV4",
  "key32": "54WphyKZL3XWmMxqGpqkUuJmpA1JoerfS1pq5xqdnwEj29SmKmfPv3eUnwTamCXCYZCkkVkUqr3XSucbG5wnqPpN",
  "key33": "4rx9eWjUjq2tHM3wExd7y6ysQvgeVEeoCb3ruuBXBndbFA2GL4M9xY2X61przPGVcvLkEsxAhUt36CLcCP8QE2L5",
  "key34": "21vxMWpDGBUdbZstidV6g5Lsv5Nk1kL1qYXnhuRr1PeGkTBLZciCF9hJAJTuN9GvxcpRGRmjdfaxh1F557G64q7g",
  "key35": "3vuUsSPm1Y31hFNhwcBYmUZcwLWimUiuYvWmGdH6FdmGP3Xm9aocZ1W1PQxHpPCprNAnyrVurdpFevtTkG7JMWz6",
  "key36": "4LwjjPSA7qYQ41LXJKkArwa7241xm5AjxUiJ4tHehwMqDn2h7Cy26JTgJYhpnFyXmAkksc3QPoKyZqHPj26gPkMy",
  "key37": "58fKfqaBaJpxzwUBLcDepDexojNbqEAwJKdZdsv66MS8cPAUGjTjEbccr7NoTiWcUpMio1kgbKBGWXiteJsuWRQU",
  "key38": "3XbhQqZUXrBUjmNMcmqmkRYkhzSdhU8NTczKiVkvkiSzkE9gQkGEi2xtz3creyWzTgtG3MDWnGP34SLbuRWpxaTi",
  "key39": "47K3orinVX6CAbsZNoDxpzg7U7LETtvm9kxmnieFXmaurRBDdxtZijYEuwS5dGbWjBqYa43MY6BDAigSXgBWh246",
  "key40": "5pVryHKKrURPnm85EoVs7pbmc5qj1QezLuaNHxmsS2jNQq3evCw3CV3g8Sc4TjTdh6HiCCLZBNn5CQptSAhnPXZL",
  "key41": "24gvt2BPDPwY1PCWeKkVdSWTwNz6YNrcTdiDTXjnecwxZp6utGcgs8K448Lgk6Vk8ovDA6L5L4HDWtzkHbG9G12U",
  "key42": "3YXLxfMBDrxtLHc9PcNLJ6ErCRT4qiz3yStqYbg5JQqPAcCJjRnF9QEJC5mFsrxzjRUapWcrQAu9VuHB8HTc2JL5"
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
