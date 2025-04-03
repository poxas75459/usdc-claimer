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
    "244ubkCFH31CizJiE23rBaNgfi9nz1JbLY5UBWbXRRAXEsD8Mn11CRy5NxrWbH1f64zYdezgcmAHB8PLbXWm4PoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55un36gWTqvY2aG9711pY3NneHZFwZNYXFdRZyPaS9BHdYNonQD5Azr7ZWHM56GCWZp1fUKpJQXbCggyRA4ofpg4",
  "key1": "2snGMCPzAPpYGDhnbBNNukgJBmNtSLt2aWk4qBg9kmiBRoJaqkB93FrWoeuAgh6LffcQAtqH3AkraEATD6jeZ27U",
  "key2": "2WSk7ErMURyoodPrT7y5D8zSMvQyUbB2nnbHDMuJxbGoRJocZA4ekKh2xCfWAniHzogVFMpNBDpS39mgqzMk18rM",
  "key3": "2g4TjZAbQRALPkZYjFJ2ZNVFHtAyfX9XWRdUNPR96Ut2dX3CBVsdUeiAyAjZDRcQspFdsUXHWTcf4XBisjjUCdvj",
  "key4": "5AB2HwhsWvtqspg8h8rDY3kFJjg9sAXdFFn7gwqf3RRCqpemEpuUw2zqzSySKr8nHcvrRXEXaGivMeVuxrcwXDPc",
  "key5": "24WG6xLWp6ELeNbRJE7xeMK7SqxKbPtxQifJkFan7pM2ARRrbrNSuHru3rmNWCNGxdRJGDeGveVZspb7he8tTrXb",
  "key6": "2z4oToNYD6Ksvuq1jEUbN9snRjxRhvG2jvhK5Bw5tooPHbpFeDtMYuh3qSS8hrbj2NWz5Ra7bcfjkvTYdCcfDn5D",
  "key7": "tvi4tq1tn6vPvi1iJLqNkcKBH88XbfGvr7YkdK5antVFrcHFLgZRGudr4SiXv2bLYvrRxLESDVy5xY4uvoNLn4S",
  "key8": "5EedecLTL8syVsWr9DQsJyJtHHCWBEyhtpePvWX43AR1KWoBsctJ2CyZbwTheQL7tZz3ZKF6GBJZARfR54qcnsoX",
  "key9": "M2M6iB9X1Gpjf79avGPW4ZDcG8bNKsy7fBtRnCbzjMwnfkXW5SNscZzeGW23DTtxRffH6KH1eHZVQkFxS4tSD4Y",
  "key10": "4acEMYPi4kZGUNkx2dFDG1MnnH6XzMvGmeucwyp7Ew6KAUS1mFD51wmKetMM1N2w12K9KKaj5KtqPTmhWSGgM2ph",
  "key11": "28hZ6RmB4bvTyn4XEar8uiTdg5CEHMKzeajTZXNVDWjoVzDRo5Cph5L3qSKPoUTNPrXMki2ypR67a5wEXgnu45eU",
  "key12": "5P2mSBc9BaLRC87LrAMfQq2sxBswjTCPN1uGe4di3QZbxgDfrtxD9maXQDYuYQRZFscuCoYRXJ28v3ugiUiFgwpP",
  "key13": "4coUR3X4sXyKLSUQ73v1m6ZgfNreDddKVSN1Nn3ijM5YBvV1zzfJXrqGLtQo3UqQe8jT1ydNUsfhLLgARXf3SZ7P",
  "key14": "3zWdZdVNeFXFFHsRH9DoBTE93hoa81HDjJYorMq1u3BaaTjbd84utjNz9cqs1GgDu69hokygj8aS3tQane66HYYu",
  "key15": "36eLVY9YjiApJ9udhG5UuFkZjYskx8qNpu1TXL8QX3LkDAa1XXpgik7rEUmpJYo6UnckB9tAFzSvueLCsXxFiAwa",
  "key16": "36FZdFsX1N21k7d5y9HNApnhu1qkXtDXc2LxKEKfpYQojhQ6Zdd5g2Ean7dAhpeaRfWgUbpvRA3PrY2VUJXkXJg7",
  "key17": "Bo43bQwrsBot3YZzfM5oJV1ZAMy3xdWeJaExV497sJTZY8y32j26ietuHo2ytGi3tsuvvk6v9Rmqj8zTYNRaMq8",
  "key18": "5BhMxTpPADmHpdPZaQB1YYPUBwVVnakKcdmkF1qbFEtStV9WosxwYFi1tijZENrxZBPzHeJFfVL2R86yXepdD64W",
  "key19": "b7apUGTf9NjTva4eH7WUqawPVYJpw723KqaWnRVawW1txMKj9pinugXts6xGouiyTX4BRfgZrAkTBvcifqNoari",
  "key20": "qB33z81y1JQBLFHNzArp3EUY5wFLFSDzMoVzgtXpGmsowSAPbt1oNTe8US62rqdb8qzYuPzhiKCgxAx7L3grbPg",
  "key21": "5TDiQHXkH3Ra54KPe3jUHZYYrczLxtLkxMwhhY5oiWv8crA3a5dS8M2qRQ6pbfru2zbATPFG95HFXmYETSoNozEh",
  "key22": "5QUdPaakh2a62ppDnNtUJxYFXqw3GVWnkHcJySNTfGtAh9GiS1FVune2JPHhwDTny7AohPr5yKdRbRLLgjXLFn8A",
  "key23": "JgVoKN5kU6Fa9cDzwqsRBGedHyWyB8bqxiP137Wqm1oAxcd3rBT92bARWXkJw9Db4b7mPdpT3kyig3m9NVGz4P1",
  "key24": "2kCDstZyeFpa1vjZoKQBE89cptRnvjMbADgikDx1NZHED9jW43RxMi4hWNLQQgLvMZgBZceFAa3WiQRYh7CmBhoD",
  "key25": "5MRG9JWTCRpkxdSMUeqCopQWtBXzsjhwF5yQx2EyAiZsVdXZaxika7ouGNzZESmRVNj3LTDBdR2HYpEisnpC7WkV",
  "key26": "4rK2wjoX9QaJBdBPFYMT9vyp5U1dbLsK2UMuEvNCc8vBN8fALVmXmsKwa3oYCHWxZE5wKTZJ3RLUngdue1HJYb8S",
  "key27": "5U4stjgu399VSPj2iSNrBu5yRfKVBmcpZVX2zmgcdFsqKW3GNKqsqkFdnRJS8CYKWnmkb4f8XJrD67SYdi8cfhuz",
  "key28": "483FXUukY7WLJpGYnWzQsfB7DXwM7FPDmY9F3cBgMc6tyuCdKr1zoHgjEHt2q9B3Css3pW2TcnAbq69AuzwFg119",
  "key29": "2TjSfW3Qrmja7uDHMaqHuj9oJgSMiLHN2ru3XVMKDr1xAP1zgfYiaVSnuM2EE2ZcbyCH3oArz1B66s5sYbZYYjD6",
  "key30": "4tu37DXb4ReXwfX33VGCcaJ2vggEHj7FNkWhd6kVLWLfyNrbqCHJ6bC1z4qER2KCuopzcWbkyQBJmJZURf4mgN4B",
  "key31": "5cxBSVQMVtUABrFRf1HiFy3Zb8DedjyGK7y1TyrQr2ttZVnKqzvoMFty1nuSYBNm1ox2cKr3q8y2kX48fYb89a4A",
  "key32": "2onrbiKot3sRLbvgSUgUfbXtZekwZJ2soTXQXdfsFf4ixbHMpfaZv9AQTAP6AP3Wq8JxTtxwHSYcw97qzkP3GAZH",
  "key33": "VSm8DwPfaxwYxxy1212m68tq11JU3NCPa3qxbuNezcPquZsjcfcgwY898Gi2em3iEVWWXi82RKjyaHNnAxgPAR3",
  "key34": "457psLt6AFXrV1mPmU41VdZdbPE6DbRmpQpge8p2Ez5YBHMQXiik3cjNbeDsfAr9tm23uyc2eDBDYptbtNbdguAD",
  "key35": "4E3moVrZ2VZcoFiEcpfdu91CHFtPyUQMFUFwRMcgs63hf1dHLRebGQiixo26efnpFJpgHuRv2vnQocv129JDAK2u",
  "key36": "XvDjJBS2dBN7DH5ZdHagfy6teLZzvtR7VYGsS5TXdeEoNo2JmRZaq7iZPmX9vg6zXbjzYsDxXtjBW3hVW7hLaB5",
  "key37": "5RECKsRm6bkReqb7sP5mFz4wgEbZ1rDkLcLV2YtAnnpz1WVvTFTwQwYXnorFeauE6SVqvuCNAcCtWNDwREkX2Svh",
  "key38": "3gDv5QwiNe3D8fmXUQy2esiq7TLcvAuNJYAJ464PCWdasoS8ZsqKfSRj1sBtv3JaDby4VLQkHtHaBFVk7og9FPo",
  "key39": "2VinSwe8aUtNxxQmjSAEumqQxFj1MeUhXLHFswobhPQyVnA54xYykfLTnSGFAN3jjwASKQFVwRHMmuKNVxqohTnT",
  "key40": "4JgWWz9NCwGFVsgFkAfr6MefRpw5rgRCFwCLk8V7qqkYeQeycLw8i1Za3F9mdoickJg3E8oU6De52nps9sPphfUR",
  "key41": "31CoHbeJvPZfvv47g6vwtjbUJYqD5YPhzok5ZZaEHgY4147yZWrQw8HNLJdwVuTiLmq83vX71H2QZXKqWSSrwRDD",
  "key42": "54Sx94CDJww4D4cqV1RrwPTvQhQ5XLCXd3wid7tgRBW4vzAWNVQ8J5jS1KfWb5uXZnMuNH3ChUHxW3vz3fZwXLGx",
  "key43": "4c5NwHKVEe6yyatYUuMygJHxGutGqYS3VFN2pQoK1SRMF2zqW9QKLu92kfKy82VyBBaa4qvqwaL5iaLqgpuMygEU",
  "key44": "En4XvEsEuEbmz5ixodyemp8ptMbHKJiQHsf9bZJZvkGpyDi9czqKi2MqsGMa19nZUbCTFLNA1g8JW7PhnWMW9Li",
  "key45": "4Yz9qJWnTWXBQYnf6swNwor8Qjh1CJKqkuFomtVxLjFXRGQ5fmMrnpaNh9CfMj1o5Zt3vmhEBerefkzuhqRdEqsM",
  "key46": "5jRooyhEZESBwCZHJKPbKwnjwrEd1SqG8QWVcHj3Ek6rZeBqYwfvv7Jzp1oBuiBNUozy1urr2GmKyrhsiNZTDTnn",
  "key47": "2oQLbCe58fsSr6w3Xcyxqv8foFCkkpv2Yt43ez53y5DjM7K85LsANzv3Tvop8SZv2SfDNCUZMp32BU7eGp59gXj",
  "key48": "5mg5nXzwWmuS4ywok8wQ8BB21qTCnqRu7bs6ipsNqTfz4aWjJN3W73wJG1M9723zxQo4cVHUK3UYSwCvFrBNtkN"
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
