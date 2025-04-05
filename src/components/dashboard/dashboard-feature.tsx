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
    "2U6zqPFU85bvrDcBAgXseMEBrNk8wjVMmvtWfN6TVijw6gB5SET8ESiT3HP4VedSpseywmtjHP5fvgpWkRijChtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EF5QJc5TqPZGbmpwVTguhp4hfCePNLmdjBspTqAJwRMARhX7aH75P1FbaVccJQg4396V9TCXMpdggW3q7sPGkgw",
  "key1": "3qRMP3LP3GSG6kGa1nfHyAsgndfsbvBSrC7yNCm7NWpTpUtPUKEqRCdHAfXzLSHpVcMRSDfDHGiCFNmrHUBuk2Xb",
  "key2": "4tUMg4jmi5h48NMapTsnFHr5LpNCKWkgumKcD6WoDT5uC33sL7qCZiD22dfXgGVEtLJg6u2kdbhsvYemhoy9XHFT",
  "key3": "3YUs4b6jbpWXVDqabkyG6TuZ5n6CXEgNzQMnMPncEqjPQJb81QPsUK1THZJ2nJctpPs475Pj1eYRu7jrkVHvJLJN",
  "key4": "5nwQCawHZkkP1qJfoYfaNtZuHihCGrNuZrENu5zV5GRWT1N2vb7UEYQigZjuGocN2jCj8jeM4N5T4AgMtiDEBdWH",
  "key5": "4M1XrxChvaJX81yKoPAUcUqpFDd4Yp8RzFEZhWJfVfyS2Hbjg6AALxVzGA5F1jLAH95qEhpuizabKFLm7ju6AKbH",
  "key6": "3BpvvxxmL32ukD656CK43bf2BjHUGE9uW3Kqq6ZvEN2KMBVoiNYLRkJ8RrwGfQhPTyVzyi5aypxx7TpdZ9fnCuXc",
  "key7": "2mCB5wfZnS3BYKvCqv4XmnPnbenbiMHtWnrcsa7FVp4jDCho1HFPeo8KecNyJCwGqaYHkGCEnCV1aG18yTezcqJ",
  "key8": "5X1h4j7c1yGYumRRvEvY6daLdtd8yTBKSAb8C3pDT47zxf7uM9h4Y96BXGkJfdCTjrkFYkpzDEBR43KNppcW2KiX",
  "key9": "5dUW72QZzdWhEVYMVmBnj9eUT3kH83Uq9LBdRtkQTNZKtv4jUo7545Cq9JNULwuTN1yefwsj2ND9cGHbDPUrit2C",
  "key10": "55XmwGqVfeKsGmjjifzrpJiqnpHVD1iHqrc7Bkwv5SCGsbC5pKCkVMrE24PSMcb6A8BQ7KizyaREFb38ce4cYYuS",
  "key11": "Je6ZCXkZB3xkFH9PxowPfZsr2vDcZs9ekU5df48pbkMrcwk25iC3sTdyjFpvP5pCzqJ5atMcm3RuMv1rMGDhJGS",
  "key12": "dTGWGCcBthBwKvzrbiDxE4jEP31KrRQTYQt434M4Rasb54YRUvqyLPnZo3PHVbz4466agJxofCUhCnGV1RgrL1n",
  "key13": "3BBmXavLHLXWPULRMVhU7QHUsCLCXPvZ2GjSabkpcvsGKDaGUxCvSWo5q4mzxTAvqVNzj9oBPpa43LoFrFgevR9a",
  "key14": "uYjAXh3PmYuRaoZf4KcukTmSjc3LAvWuGey6EufitZBWr9xKMLCVxm5xfXkNStWrVz79DBNjYvKVCGEmKDHXTXK",
  "key15": "24J4xGuDtpuZhnDnJzpt2tLcdakjoSge4tvpaFND6qYeGecJnEYdwFc3xC3o4yCdFecudHfkq1nTDg5bMtmafVmV",
  "key16": "2TRsRupmYcYBGaSdnQFDfHkxBVpUq1ApACkH76AJJJun84cZnRoyiizGE6TLcDG9dmRELub8mBvZvXsqAvanB3qN",
  "key17": "2Zu5Xi6ubk26cG1jvsagoArEF8sB6X1mLDdu6z9VA1bhddow3Tvh9FzMJkmMyAPAZtUoCgXGFjPxHtPRNBHePEd7",
  "key18": "493pd6RVAmytss9R9cz9nnpk6xBVnBGKV3JvB6HRihhY7aVzxaeVAqtYEcjnakHR19QCYKTNxccaHAJeKEEp7WJ5",
  "key19": "2CGtZ86wveDm324MD5f7sdejXk8gcGxDDeMzba9k42UiVDXDq7h9doh4aRBqhap3cGXs67T5gg429nVgHagcQN5h",
  "key20": "2eryYE4TaD89p6CTGn3J53euy2ZfeJFbHyQaTHvPL2Xa6WTJT8T3dusTkJkUGo5sK4ThDUtBgKXNpD5rbztpGyYE",
  "key21": "hocTpCDMAeVbWiCYKfBzzCVEJhCJP7XWnwjh6XpPVsWLasKNbyym5Q1s8KE6fZuEgTuAjWS4wjq8utXfeZtfGp9",
  "key22": "5LPPxYJJhh26LPC3cX8gBMfXnHJQPSJj9tE4f5UU2ANB5DBm78aE1bFj5xAcTekD9E3gtpx2HbqMeLwbGyvX8MSf",
  "key23": "5phAFRCa9wPF5tre8F4RqAaDuYCVUd8qXH2ySG59E71FgYPfdE1uTVqWus5DBthgxPiWXpvqh71tVuTVWv76fLLE",
  "key24": "216q6X3UsqmGSo4NtaemgGVhRyrduqYjCtfJjXa5SLP5iUQQjeYKKFZ5MT3JLViaYHRa2VgMyoMDHfYvhDogMSeJ",
  "key25": "27KAgtW9Kp6eo6GFLpiZ3tzLV7TjpCcY2HhYym2GwJH2UwCDagxevtriA6xmfRys5ydrRzqadgjyZADRax7yVNiX",
  "key26": "2EvjRDe2NjbP3FUj2chKHk5dD9kceRbfJHH2bhX8uohFWAQ6dPTQ3dX1pKoioBhZJRS5kFEqw2ZkyDHj6zUW3RWj",
  "key27": "26zNstTRr5PayZkmvwbAg3wb7tHXrMdCFwupuzWt3D3asrkWdDFchc429pTfKJSvmu8iZzscukhNsyfLnUfuZZbS",
  "key28": "2gpRqC495DnhRnUxPfw6E6JBk9xBiQVbGnYXw4U2LgVeMqcJQC1PaycRGZBbns2DFZmAPQwuhGgJ6cjSS6TjmLC6",
  "key29": "brMf3UmpBQPJQJze4hb3Ezg7uaHcapcL7CRMQkCdSk2wA9TRN2cZW2Knu6ioY7wsKAPe19andmEEadsqi8N6C6x",
  "key30": "3aYsNsSL6BVQgm3WjxngEjrPKoxcu5ERZjnge2EEbufBKc9oSqGd2d28CJcYJCDdrFnZW5y6J2fsbWDuUThufoR2",
  "key31": "5uvdarP2ES5fxUCqSYneG3FEb6Uc2ajWRmLnDXsCqcy1j3a32petP1mAMJqshJH5BbiiwJ83nZM7MoTqdN7QhUch",
  "key32": "44jH2yy4tK5wJu8GhLgJicSYsRYFTBUZxMngr2VH8xE1dqD8hQvy2mdfQsET5UdNn2qoMJkPg8BasHsdu6FkocKP",
  "key33": "39HRyx4AUHdJ5qykbF9qLrxESAyETSbPTAMGdiQafX2RHguX3TjMX3Ysfm8izjdsR6RG2n97Z1K8jm6AubpRJ9pB",
  "key34": "5KvAPyiaaJ82VM3du7Ld4qKGmYsXUvzYbGTNv8rx2buu5Fc8MQP9K3ndyTGzG8jFc5La8TFPDbVu9L6UHTUtMxE2",
  "key35": "48AkTZdf6SiNecF87uYW2ZzGgHVPGXixCFh5e6WUEYSXTzBVN6aRcJtKaFWNiYYNofmyRzJDqiaNYT3MDyFdy9K",
  "key36": "2vbmrL8w9XXfv69YpFuj4W1S1aRCUurwDGx3XjJ89URwBr1FWRJnSWhsxJuta5pTnLYEKpcjjnnLA17n6xsrNj6i",
  "key37": "PkJRZ7wugpfkR7YgDCzfyx4GjMW2zEFRW6e6ZQUzMf9S34h3FEGF6wq5UiHiDiehuc9pbDpYPuJXpH2SekdHL6q",
  "key38": "42fPWu5ivKd4PrG226dmR8tX6HpDCsZUFWfnWYGYpXm2eQiqfh43MhKThUAKgLHx6fCR2ToLza4JNTuj5JF3PXTn",
  "key39": "4Kvnvea8j7a2pXDkRP4vK7fRYshyj6jtR9zR3tcthCfiNJUzZMypJ2R2vs1DZZQgiP93HTVxLTfuBy5csFj5ZfSJ",
  "key40": "597QbQyn7r1ugwmaT5hekEdRq6tXT9s2edmAF5DYH8aR4uG7sg2HBWbcRwcF7TdrEcPb7P12YzdATBVTp2TfZMjm",
  "key41": "3wCMHQL5wScEQ43ZxvgvAv2nWrfa3cPjp5qgQiYf5RdEDsBhSr8zFXKTTeuHFGVrEtFAmjty4itcFqt5Hken2Pb1",
  "key42": "466qcRKLTRZ4MKZpZi35LKtXMnFevGyVmC1AsPUQGCperj1pN8vvXrYG3K4i6yqJp2VJhiMKdiKvdFo8yyWfSTbH",
  "key43": "33qTjezBXATnSgqTd2vBmks4f8wedwPmUT7QnNKFn6UWHCjduCRKQmvA14je2tbfw3aWJy1jkqr9L1Njr9d1efek",
  "key44": "46VVuhUsdCEp97iddxbrNHoE9gbsBoT4H6EC87v9FGWjsoAdoeVHqgb31T8UbKhxLMMMx3XDHSYXqfJ1WCsrKi8n",
  "key45": "3NaCEuX41MxiwPc5E2cCPmXqZNR2qdYp3WDExY1T8rf5nWvdB1egV7oHVPWUx9n22TZHvs4FiD9J4xMZbMuQBpWG",
  "key46": "5PiCEd1Rb5mdSnESh2wDHSnRoYLuunTDrGDnAbKGJDmktqza1G7a9w8h1bDGxXEbvMWuyjCRbtFN4sDBDAkmUk2P",
  "key47": "5CZYpGerf3EisxG4dpvtG9iDXmLDQJMHHfes7n3VoWnmVbNLuQ9wcmdbc4msCRweTNFpXCUXrdrWxEkk4pSBmPL",
  "key48": "4j2fyYSQTuBP48v4V2TgZV9JvjHnUexusQSssoCjxmLUV4JQsK2zuD7e9roVBsZkckPdE3PVU2b6tdmg1Weyovyo",
  "key49": "4qMB7TZctNErgEN2XneyTr9BfJU9ZWtyswiZpWyaoAySpAFzA7kgu3w97bvk1nNDn4v4wsm1R4icahNWDW8tRVGo"
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
