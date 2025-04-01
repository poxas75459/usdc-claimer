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
    "4Esnr19RBid9Q99P1K2CPP99E1RB9W42zo8eX4PmVnjoGpgS5xKzrYDUYC9WaZzaWn7iVeyXFcqFM1ERnsvDMHzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hrFnDgQPiQSz2YJFXHmDVDULb8f42PWrMekuj5ddKFEje55BmzFQ4YxtJiJejhUG5tEyJwN4Ny3Kj8kJBms6hiY",
  "key1": "57iwRWTi8oWFo8Do6hirMkmM5WbNBriEAtT2iAA9kXvTJpuvetJZcStZ1CaJvPkHrEiRqMSHGUC2XpyRsvstonot",
  "key2": "G5EMtRs3v6BzFNPdVbkzKiZowXYdMbHsWt6ZzgzrX6CQ9QKR3Eq2U9cU6TnWdvnCHpfXsuUqPrFvM2yTyw4aPYc",
  "key3": "4UEZx1mEEr1MSdHtw1xKo9umeE93LzPatBphqBzGn3SQLb4XbdsvHXRvdpPj4asGnMZBHinmBBsQitu48G5YKMSx",
  "key4": "2GNR3x1UBiUnbRf1ut36uf8JLKSEF7EabfqqDTnkfG3q8w6WBozs6nU7UGp78ABva4C2nMegXShTJH7BeRXtvPuW",
  "key5": "5gcpuHvyKCpTEEFMSsVgaGTrYc1JmD3fkUahhUJeP814jxcEr7gwPJhwZhqMdXecJRmU591WeZdrTsbZE5NpgZzy",
  "key6": "3LVimBLRS8nC5hiWjv1C4SeaRfUcUMEZU2t7ya8ihWhcmD5ouPC6MB5tbsWpHo6poGP2i4cF2cqwfdwfZ7eLrbzR",
  "key7": "2dYQZ9jWNgf8uMKDjTadALDP31nPcykCHJjkfbPkcY156AFpvQrSfZT19WVYkeMLPHnExfaPJZfHYEcfvPsbxaS8",
  "key8": "4pEM552Yw2aYprM8NkQ6Prt5FVFHy3dSNkuTNjWcfnuvVFS7wPtgBJbzrYEpncfs3RqU8aatGCJa1bJaa2E96jrW",
  "key9": "5Lh9Wr8ZnEkxyZGAEQLQTV267kRR4AzBq5ShRTveBaxk7AyuJTD3CooBUeqgYsjXS4p7KqWpCM6VLaZAC3Gv3qNt",
  "key10": "5An3EsFYMEh12oZD4eMdQyV4Jd2b1qkMyUCbW1YC7kvQQPjqKNi4SdvREsAem9oFrdhx2MemSQiWkfxydWEHMHfa",
  "key11": "4FVwwNMUAdeWzXzrgp4Gt3UUt8uKJ8MzrH2pMrryFmUpegY3Z8oEw59k48YNtcGrffF2WARtmqBjqSY5u8FwLpBX",
  "key12": "4Xjnc8RWJCYM9LSjdM5Nrb9gySqyRhzfciFLr8rh2DYWLFJEDK9dkhUeZy1unmuLwycjNKGVzCUNbtZ8ZUxRhPoF",
  "key13": "J1dcaqUuuCZsY6owfUdYsvGcgPkUFNE24c1EJWivWCwKLCWePkyscJdgAUs3uQ2LaTPvUGCiiQckepbHZ4yFM9n",
  "key14": "f1zLpCJStUHGqT2cDcnp3r5XXwoH834Whem1vuAu3T6mvywyYKmsLsFLofZYnfxqveKbBMtJ3NLsWRq5jBpFrG7",
  "key15": "4kzeBxMYJ7makB6B3aKwdFzX2tgoDPYpUeLBNZUdoXfL8msSQu8R7myuy9hw6dAGoYjKu1RL7w1ZTLu9cSg6AErT",
  "key16": "5QTgGBrmWgQAJJg2s9TJi7Vjw6iig8rVd8KuYHfy5tcEkyqLVBJUYrEkSwcCGdUzhoKJqw6PSCFb9HFizPg6GQCQ",
  "key17": "3RSc1zbygiZTfGUjVWbPMmMvNeKsZbh2qWeXovYDQsdACYuXb92n2MpevxdnV8ExdFojB2cXeU8qD9dtdyHJKqgi",
  "key18": "4hdrN7QULiss13qXG9qF797QWSnFzJ2gneatuLUqiaCCYtrQAUo47wLnpRe23gPZmpKaYTpcF2DSZPGB5HJkrfXt",
  "key19": "FbQbwQf7GDB1LUtzCqLpm4edHjQjdSMkhgPktSb3tkJcB5R4ffStpYuf6xoAa5TGWeLx5MG5UVLsJPJvbs7m5KD",
  "key20": "3fvCLhk1UweP5go7G9Dxftd5RRyLDZ5MxhTcujgvZeMr4sQKirLUuA8EYG2Fi6t2kZeNsiXMxFgjEnidevFjJeGE",
  "key21": "4KZRZQuex1qrJuew2z1pEVaL2pC8GzKKLqEs9Nck229nnhBRMyJ3m82znQfUZuT5rw6MPgTmg4tKKMPKdbwFFxrQ",
  "key22": "5YjnkuskxjEcJfQyXt1ztep9UB6H92zwfJQwVscFYKGbNiZ4obn3vPqbq7tKDNbuckTDzGz6fHvaLzDLLrsQC33u",
  "key23": "48FsMf1kPb8cungNE14EKnLnWqrppn4f2Drjf8wGVP9oNbdRz6s9aXTPetbW1iRMH3FzKtgiPf4fVPouYQrfbMdd",
  "key24": "HUHEKKbXEhQMkgqNTLVPbzt7mVhuDyHyy443mK9oy4YvdFZFd4aXZGSgCVB7wHN8vkM7Du8u7GQqzQ4QFk2BBy3",
  "key25": "4MbRveAfckgVKrUa1jQjE3gDFHnhXudnX3qYw2s4kjXYjx8bbEVSjd9mLBFrA6B9tZLJ8osYWZzouojSGypbHGAn",
  "key26": "KK7rV7amTFVA1rwKCYuFRKFFupZtaAZZoG3s7dkHinS3Cy5YCuj9jbEe848sAoE3WX2q1CTpoPNfWimn5Zhi34F",
  "key27": "4xitB8vFWDxoQbk1RM51gshbMyorEdUbHtQ1w5J2293rZAuFfTjNuNPcwunWirkRZND1NtqEq1mJoHBbT3sDWC9o",
  "key28": "2nBVSmuGpRzryhMpQsrB4SHZCAGTQC5zVSVt4M91uARUpQZ3EkCyUtKT6bVGfinHMUC89ob8hg4YG4WxJdnLzGhM",
  "key29": "3uur8jLCmEfus6VJsxiwS1R9sZsP5wECq3M16dhVYCi4YFHofT6BctL3cX91XtMV2cZuGQDXJiLkoUagMoccz8rp",
  "key30": "2kMTHy3MR7DsN9At8aEnjWnMeN9ejYN1SQkhGtaUUNtBTdWQUo7rdB2exezQUV3Tp4qt2ce1r4tYVcf47qupEHHf",
  "key31": "4rRxN3uH2KMHjn9mKpjBX2v8n4j7PJFFJTwaAKqRGS8Cvr4Ds2VUnjhT39yX1Ziceu7CW31wn4vd1nRDW2pT4KDw",
  "key32": "2nQHnmbtCy9Psv8SWJyVYCmj8fXdudscq6KLZHwzs5zK1F6XvVEk1pYkowQeWS4yvsJPfNwKsPbMo6YrJUVyxFQv",
  "key33": "CxsWd2Rv4FHGv2vJqjMxtNe5qkH1axCBzYVnFmQVRxTmX8bEJTKwjU69ziLHyd7o2TNxhuNaY5VbtCbmZJRB5ZV",
  "key34": "21FezviGF4XSFsbcVh8XAZfGZxndSBvm6jAxtwVmKdVQWLXbPjwAJfsJTReoZaLeTrRHxRZmctWn4h3eAu9eLyTK",
  "key35": "44q25EoFDoPJU83R51XRrtas5rqxmtkSCKcTFtNWc4PCF2wcuZvx3rfQSGhwKRK1Y7Nij6xcECVW6gSkepxqdmRL",
  "key36": "3b3esNZZdsQ7hHjWQeyVoWJBiHShbGrYsp3mxcFRN9eWVsfYz7d827mdHAe1xsQuRsTBQwG1AL8WdCEishLaFbLC",
  "key37": "5LuC9BpHpHsFgZ2o6fi115KTDN4Mytdo3zJLt8SJR3eHHFfbrbWpq6Cbz1JxvDsunha7AhmPd5dnL1zphgoxiCUr",
  "key38": "67SkALdjnRYsEqbRYSWp5VZfBAANowkntNw3eRDdCC1pwUJW5UbZSyZomXqKm8N5fbr8gcRFVZzKwpdaPFTpRsL4",
  "key39": "5GEyAQdhAZjxTxQbVKqz4TDsuXyevqSzbxiEFq4w3CTs6Wya9zzypUt3CFarz8xnj2Mau8oKFfVKaGUiYYjWyJwi",
  "key40": "44ABvQXWf6oJh4C1bd2encAevG8qhSkXQ6xnKjuT27QNMXrrq6quHSRnxp2AksKKvpNobC9PvvdzXsk3JgQb1rmA",
  "key41": "5fcmgJbx6yxrWBQKApzVe2pgpDrjHsiq4xYKdfHzF6bN8yAJ9TLbyLuXt2hGu2AfipZZsQ4N6Fj5si49KDxeAtKJ",
  "key42": "4S3Qv79mVHtYyW6NawqiJFTGv1UCtBWFSsRiUTWKKseg4ELj3z6zwSP7ybdYpdVSEC5nNWD56BgfjhcCVVmhaE9b",
  "key43": "5ZRpZoSPTycxTZCHAYJBexjtGsfrDTonTRdPrcXKL7HRDndgjcugLj6Uw6BuFBioNpxejctRUJA4cgxNRT75k8Wp",
  "key44": "W6ZH9prida6S7TSArw4kmVTmaLFiiXEQPK7qrJFeE6qcPTts6xHB31FLinRy1GUX5ZY5SUAxBdxa1CWzWamXvqo",
  "key45": "3c2SN3MVq5JNX586mkj7oZrkg5mbxooys4nzKGFzVgPZeqEBAoLNRr817hQxP5Z1DgGkAbv1BfaoyprSdLNxVssg",
  "key46": "5YZVQYukD6tjWgMtrKUsDKdDBL3KXwXmMzHrWyoaWZYrcLrZMMzwKiP3FHFSW4G2m2dc6nrurXc5E9oJNdHyibiF",
  "key47": "3kNVnFB45AncA5KEWiaN1EYXmddHVARKEjFzmzXGZ2ieFTSzWrE94hPRj8BxqsfUa5z8ceEPRMHGWq5eudqHiPfC",
  "key48": "36FHL4MVxWqkbgTreC21WprqjgHDb2gvdkPb5k3V7MXrgFVc17S1QZhMkmceqW2i5zUQLwmD3eXGJLY1EraUz4do"
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
