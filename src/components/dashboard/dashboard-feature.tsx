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
    "5RrRd74yvkVT46m2kWQ7FAz8yCDCgGcbSprcwGQWuViyJRWdbmC2v65eF32NxB2P5cWzD8T2v2aPtJnFZ1Bufgcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4As5wDgDsoXvKFAMCn2JYysEWuUMbwAc3vtHnA8zEhmxVBXhKEXCmv8hSFs44HT6Mu6eeAyixEjSXMXDnp1BBqHX",
  "key1": "3TmgdZeDaJaY5WF77oCvNya4UMq8biZQeyNj9THWzG43dDsmBSANN6r8SJFAXWB6dL5ijQQWGncjoNgi3CXzbJ2K",
  "key2": "3Av1MHLLXYTc7ncPBJXetUfcGSbcHCFdjLLFKhukeQovF5PmXbT979tsyx1VSuCpi9yT3Ss6ecJ2CZU2BLdxWUpb",
  "key3": "418BAEVjJbyfcaR129v1Reo7fgPALwVpmhdrFvJwUVkz3k7tKZbx1XafGJXESPCG46HZz96EMrMDD62c5RB3iVHi",
  "key4": "3uUZxf7R95DcjRv88M6TWtBSK9e6779e3sWrPms5Yfy13KC9Fz3nvfPdj22Zm7qg7WpbspHasiKuvCW8n4E8AC3K",
  "key5": "5dwgGSDUHx7giksy18ksjXRajEDX2vBkmac3TBt7Y12rwxRSS7Zth6gx3WJUC8u3YHoc15FXQ4FoKf1F6epFWHuX",
  "key6": "25gN3nTzy8G1zyJqDxn9odtDxXAKKpq8VanW1HnFnHt2LfpCjXrHQsDJzaAPf2utpjFmN2MfEjQZiHauidoZjmGY",
  "key7": "5ZQfzXpy8dJuThJPYwEr6sMQyrxXrBXRWhamTpHHW31WKFVn3GbjbbbeFXo1tBEm7nfG2nBubAmtzj3XJz6Y5gNu",
  "key8": "39BuLMTQiA1AKmX3pza3swbhAXU2WsX9H6E7M4NMXC5AK9sDFpHX7ch4SQytvvXaMYjmCKt4g9yD31gcEKo6NLt6",
  "key9": "5Mi48KHYaRwkVrSjWGLda3oQFyKU1UwyrsnLudtPruvfDqFzzY7hJpL3TQbdS9s1Luuhct7UYZGh4vCMpSpiH669",
  "key10": "2C4yYWj5a7iEAe5nGCB6s1wyrKAc6BnAG6T6ce9GPK8tN35ZPQt1fin3bkzY9zn8aeZifgrek2nYaFiVuSw4Qm6A",
  "key11": "4e1Samx3QZ8NouSRLNHgKf9DU4o7UdRnHYCdFYGnsRjQUthPg5rtkkxBjHW2JNcRybVXxvKaKuiRQjSWJW1KrAmz",
  "key12": "2nv2NQGJjFMRg7ikJraZoB3skwt9KkjfCbBMcchyoZPzksqEF3paa1VQ3ifX2UGvjYRF7deBFaeiaTs6meW4tYkR",
  "key13": "5RLKjW4CvVD4Ani55VxScwDZVzYKYAJiPZBSU8WoaUpMEaQqGb8bvScYUTaeYVbPx4w2wyUqv2avGkuZq2uUVjNM",
  "key14": "2owm7SJkpAPjf5GbxzZMtPDGS3GHnf56WndLqsaFFBTY7v5Yo5pXjmty5rJ7shCApzd4XnRntYCNnZjF1K6Qb8DQ",
  "key15": "3G3NzXxkxrN9vNdppTZV5SCQH7gKfRuDgTuTXY8S6TR1vQD1Jap3eyrMiwpH2Q3oNcn7FWUEj3tvTa5WMcdftVxT",
  "key16": "3x8B373AF8sUz25rVju8kERAWB642Q3Lc7Gg5xUCtJXt6Uqnmbjn5VDcaiZ6EsPYikSnqbktbuxUrdq6zEjGXiZ",
  "key17": "3XsPV9EgVC2wkX2qWYPUKCLmAWNbVRu9rLq5kkcEAayd18wx3G3BCiKdPVAUD56k4XDu3p3VStgZSKvYyiqM28sR",
  "key18": "2BUg9xc8TL742dJe3Va1FALZE34J92kjQ1MEbJSoVtvmfToM3XUGvz6vR21PeHg6xTqP6DnYF5NVDqimVnzAkoCx",
  "key19": "67SdbxSQ4hMuswV1vrmivKF9Rtgg7tAFmyzMsRABsybUTeopjV2vvnADHtZLmSigxpeosovwcaZTxAtkRUaX7sgF",
  "key20": "3ZuJFRan4nGTb6s6XY5Lfpn5RGDwdtkvL3snB5Av1TCFGJRwRp5H7RvDRnjAhTPr9KKwzXajdCGYunHGRytiruHf",
  "key21": "3zmxnf1HsZvgMCVP7ZsyydtJhAJ8ACarfS7aDkmXeeAkopNxXToVsYX5dXbYToyrZgu3UuzPpDFryKKvJctdWjVC",
  "key22": "h1cep26Q8CLZc4Wa1eirPntEFghzEh66KD7hQkVxxctjRghZWLxT5RKTJaZY1DRniEb1fk2pa9GHZEGkhpv5o9U",
  "key23": "4h6fDv28XputtXwTWh61Mqsjq8H938LPEuwUfymhtsDqM3rcHHNve8s3niWHEMZQsUSaqmnTSRv8hRJygDxJ1jLm",
  "key24": "4R7rJPbdokYS26K3S6fsEbR8KavMN2CnYmKj2EAL3LaMCoCvs1Tu78BqS1oMgbdxbyz7r5reGBqfT35Q4XCjenSm",
  "key25": "3JLz3EzQ3mdvEFB8StqgUh2duuen7dnCG2osPJgHit9fTJGJFEtxMU7ornb6pqLLTLpPW3tgPzHr5fhwTEVusSrf",
  "key26": "67mE3viEXsL4cJWCJ3nfwPmx293Lq2EsYiDoe5Fn14qpTZ1HUAecwPSSKzvXWZ7dGEJUshNVebA1e49sCaDLV8e4",
  "key27": "2fve5i7VaYoSAyvhu9LPB3NfPjy8jws231AFTAYC5r8Xea8eTYqRxkrfY9rq6F926eD6NQXapCS6nGRKSqx5M8Lx",
  "key28": "4BGQB9CAyjCuogdh54GDAcbwimjjMCXTc9pNQas38JWkK8jW95Mt1PxGyG7eJ27vFH6Bs2Wq5CGJpp2Anv228roX",
  "key29": "5YMjVP47j2o2xdT2QP222GE9wwYi1XmRqecBD7NrbyZ6M9ZirsTxnT5YSiGsbGqEcDQWxmhD7RUUwGobfLpPun8R",
  "key30": "5uC3FuJQUPnrh18FvryUY6JPtPEqRiZuJ6LH59Byez7u8gPHT1qBWrdR6fiidf7oZ17sLRtzh6hEUekKmPMR2u8V",
  "key31": "3j2mVwm1wV6WUsbb9HdSL23VqHpfwuuoQ3pu2eZBaNjSfUGCYJFSXruGSyx4kzEVpzYtfxbAvjFLRAnh3vqkvM9R",
  "key32": "Hko7xcy7tWjZXuuRePoLNohxsp4R1nDs58HDEw4Tshe9vVVE6oEsLz2Vg8ArVpXkJgyJwDz1qTB5dk8JnnQQVCA",
  "key33": "5YSrUeFjcgbZPoi98jwqmPB5bSXD6PqAja23gdoXNvvkY7YfbxwyasUr2ksVXuhqDWgLp3dRoy7Y3DrEET1UAjJ2",
  "key34": "2Vec8C8qN2UGeuR6NjkMrkszzwNerc5w85f1p9kZCHJthCwgTSLQ23qGmt6uZjt8rKeMzpvCsvWrAysZYWVQoaNi",
  "key35": "3cdgTavjLCejfr8QpAJseoqKvBM7Vnn3duP25abyW3GyRnHjq6xu3JSrEGBpDTgSVT6p4sxaxX1m53dCy6crK5JM",
  "key36": "4UaJ2W7DgnXNiiq8Lo54m8jSKxZ9crjrp2jWbc7mcFQKX3iSdcpjV1jwGZuDXd27VqCsiH4fjVT76x8AToXA4ucC",
  "key37": "2mzcG494BmitFTSShSFuukK8zgFMmKPmy4TLYZiVaK4FegCY7sCVRL9EBuAhkut2Qg5Ug3yfapuvkXHkLLgB4uuu",
  "key38": "icfT4rvPu3UBtYmKsTovaZjQDhJzzhAfHCuuxJXb6SmZeqnMGfSGFAwLr1PhyUzzU2efQ5WwUparv3S8UtApp6o",
  "key39": "5oowdewZtTcpcaZtwGuszKbYAm93MDDUpyUTRYBqE6RBgi3TbhL1o1ZtSMbYWWLKnXagbiHoqz2woApYnVVjkoxn",
  "key40": "4Ek3ruwkp37QCSGQbYGde1kNEv5qoJhr2RBw9nVnQgumw5rV88kZRuboWyV1D6oSRqvFNmXgLmcKHY764Btkb6ks",
  "key41": "8pKWxocMGE6E5EFSo2Uw74F3s6JGyaRq442oJxRbNQkUFa1bHYDV2CZQTaSNtzCrvhRipJn2pEXEbNreEmDLwoj",
  "key42": "3nSLEHEzQ5X44MtmCjWsnSg9wtxNRp2vZp9t5gMTFXRrTCEbH2qoMVBxXUALPuZ1bfotbTHKZU5WtgrJXMF8pbM5",
  "key43": "35vUh1t1xzTnWnSUZSNVc1MNux3fNpUwNkaTT8CjzJXWJkzhUz1MGBNoGABy4ejJGGEiNCt8uwgXQ5xDbk4BpdDX",
  "key44": "5tV3BB7Mmr5fP6YnewgJHypLk1EsC8pe4CKVAf6pkwwYBvUBTQh4y3X5VyDnCNE4ETtVCw5jsnBPz7vXXs4UUaKi",
  "key45": "A8suopZHun6NFKMy3oPHJ4RfihGmzwSpXVVb2kdUCcKXBjhgqmswpV86Zui8PuTeBZZYvPRVyp1tcM7QFaDBXK8",
  "key46": "2PNrqkNKGRGTW554x6ozrea9T9A4tEaejFtmVsp1bJ5A7VUVBPa6xX65s89hPsL9HqS4MiFzbsEjuVcLFFoWBh6y",
  "key47": "5zGMNgsttusrZDeZoHiayxnakv9EniV88s2eCDuQeKSrQhqffgu1McAXUtb34ALrj3HnmUd9dmCtGHNT1kRRRhNP"
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
