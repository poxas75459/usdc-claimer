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
    "4f9XdWEZ1bDMqj92vuksCJL1ioVShaZDBNKpB3aHAkVKXVqR6tJydVR2veDJ787DYTUJCRomJdY6NMCyPD9UmmN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rm7cvf5aZsk7egE3CYsvvijG99Je3swJaBTkp6mCLTRXbk9xRCRz782VtHHHWF1Ez8Dw2ehRYkEqWcNkdWNA6X",
  "key1": "2BLdzREdxU99r7gDpPdmD7QjfrcTemqYREtrUcHABk2APuwnEUA8R5tcG5GYgkoTa1sGzXtAJSNQnwXT2avQ9cH2",
  "key2": "2iRkFwRBYeb3KLR8EhvJ7tgNdRgsuqAEpnvRXx8iwSAq9v8u5ZfrLAevPBL89xet4bz162YiNPX8RK1f3imL3YFR",
  "key3": "PwLugbPQobesbJZ47RhoNwWBwrrFhojJfGve2o38ym1geQ3R2T8XSinShhRAP7sWJVecgDFEeRBf2B7HfZAkoJ8",
  "key4": "4Mbo7XKK4rdzmroB2GNtHDmxPrujFuCsWutkRLdn8fKT6YXAiKi2PCN6zCWxtXfHFxdZX5niwjNZHkz69jGhvDGt",
  "key5": "3rPiAdbXmCYaDy2azWj9sAEACn7xSnQyvMbZw1QFE9d4p7iNJiy8XD1jTnrsDdSybV3yh5gHVPAdN4XS5tDsSXev",
  "key6": "4A6q8XBgxgoZ9bkiJJiwaxVWmjRKbaUFDmiiXWgpn1WMD6MFDKYvcwVc9sGt8zJSCh2EEbRKuANHkPveJa2BXhAu",
  "key7": "31UgMaZnEiFJYAM9P5PgBuj2Y24zRBz2Lc24TStE4SBY3GWKz2NRXUQe7tFUzh6Cwu4p28FoPwAyoAgGxpSK83sC",
  "key8": "4fzha8aYEMR7hbnVAgJpCV1c2m598XW9fJLcSH5F9BZ3WyQhLzzKUBVKMbzXqDcLkqzWLZYAnPQAZ157AGEjuU9J",
  "key9": "45BjaruyKsfLtAcmb5kosjAprAZ5LsPYNuv6T4uxdNmTe9j47zRgNUSukGd5Ur3guvyeeBev6mCZzsWUYhWmfA6D",
  "key10": "2qBTtcfvhTLCpcMKZ7zvsPSck4Ezf9roU372Gh4cu7TgRbLV4vV6XE59zFYUQ3oNCBdtGZc6mj5iR1HhabxDvpde",
  "key11": "22sGNcr8844hgHxtpGMCfygj2FS8qbJ8BV4p8U5CLhGHR8vYZJD2AUawtUwem1bNRmysQTnXyXGX2opmaCAfnrMh",
  "key12": "4fVh1WwCwCYMzXMjy63qnutJchR2eKqGCrxjCwr5fGEwHFeCraUtd9BKELim3C4RJa1YeVHxwWdSSEFyRzjmH4LY",
  "key13": "4ekgavWK2AvfhVAm5VgRqVgthGZPXeSVtgmwgZF8FufNfM1LW1nvUaiYz6cHxJx5u4Fws6hRDpcytjpv5jYS8gJ8",
  "key14": "2dCse1nw1cruMbF7o31r9pBhVFF3uDRPeCoX7Einj34uq7a2osHRDLjscwMoDRRvYJBhLhxeESeTQnNQSbnks5Mh",
  "key15": "4njFC5bh7PCG1Zr5ky12rJKqoe7D4DkvQSugC1b7zLxDxVXSDSpj2aAz7GB3sQwfF1M4614edSsKyDBcgHdbhnju",
  "key16": "swobQbjvtTzUzVEQhDU6hSFdCsaR3MMSGL2KN1mYsYy2qCFBJVVL9Ka2J8AremXx2buVMo86YyuriSHVeguGuNG",
  "key17": "2TebyCLQA5RtdEAVh6fubszR5P1NkcFP8m86FoQxydWZoU8VTCYjXVLdBXwtyin2yo8i6FWgwTjs8CqaynE8Pc78",
  "key18": "37xdo5sGtLemea7Fsyx2cHYCkYTVYidiBGsomZw8HFH9CDCbWg85hdow6iv3hu2FBCXyYckf61wKt3T8VDagMKLB",
  "key19": "37FF6g4QFmgZ12rqMMHHtxCGsnSpTwqqLqGUZJWqMDfjDbM4Jmi6AghmaAgUAKu6d4vu2AxnbEByLzPUMxGHV1Xm",
  "key20": "4HcZjX9rDseSUAWiXcsEnjzefg681jCLzmJVqRKqrdRjm9vETukuw7ieAepnah46i6gzcypdTe44zCXTSr5iLii1",
  "key21": "5HbpeQFfS7RhZk5tV4QvmDTFF9qZN96YXp9vbh7pr7LRrgP1mXh1YTmmN1Wf3eEd2jLVrGtdk4Ap3JkpLqknJqYC",
  "key22": "23fDPEjUZCPTgS8xQ8syPGc8cjhVk75QLFuxuV7sGSCvA51yL8bk8jqUP1KTbELWYMPYnjJ5QAj72mrHce6EMCZx",
  "key23": "61mq1uCqSiDvL3iNscucz6PPwBbucJbPbg5HuiYcmSSCTK89pF74DH9heSofr3odY3tTQinnsSepqadNQgUnHdxS",
  "key24": "2ou7PNQ5RQDXXGx3zqryFhx9bQzrM8hZLySpSvj6KdCdLiWKNSpHDodeNmGZmwymN3oJxm9BWgyjGxzUgDj2D4Q2",
  "key25": "2jC36C4zfxCVnAYgxWWzeiApF6veQtVM5ZVzgDBixTdywFQptNk4xS4Nt2AqYm9jJapR4uAdAMdfAue7RcKyDYrA",
  "key26": "2xhE4R698RZabYBDrcrispuPVhCSVzorLwjpmSbTMP34jGmWsotw1Zo8c2i43WbMrhZpnK8gCYxusXLvJCeAvXF7",
  "key27": "5u7SSegy2Uiod2sbY4DWRJvaajrBntCuBtbk6FhDs9K9L2PPKLyh9As1sCScBKK1LmxaB6BCbDtxQ2DvtHN7hEhy",
  "key28": "4T8NBSVRPYSHRtuFcwaA4TNi2cccp6hmALs4RNczjgFZFvQyVVJEfNEC48Wo1qs24WUnoTRXD4rscKqs9YCGfUjM",
  "key29": "43ykr1bdc6zbjFJiZLFsgZ7nGGC9eTqQFi2DuECaZSvhMxDH5FfbfHxVVTWsotfdCkSwkD4nAbrC1zzqdSG7v31S",
  "key30": "VPNky6GpooYfiQKpohEgXybQCjFdSGU5FbGYkzZqLYZHEk1dk2maPjhY5HP2p3FBChL5kuYycTC9NLY4wauEyb5",
  "key31": "4DfNrMQPHmNn83skR7JcgMHK8ePpohy6KKJcHTHqX66Y1Xb8aKoN2qRTAGTVwXSs7snNhYheKYh2N1RNWkY35iaH",
  "key32": "5w7xSrXHsRNrrVmuSPMxVhfzQ5e6PJDQgP2BAZ1YFJYr84ayGJ3iRXVdJ8ZvHUiXejL9UJDs3Qb4KxTDoijcvzzi",
  "key33": "4ECD4GmmMxePT85ALMdbc9b62CJ3pYJPhTfwefmP5aT5duD3j49zjTPfvbBpcLvW5p9dCB4bcyDDaJg3ABDupXqJ",
  "key34": "5a1UTdPnZyhEXygDV3Wdv5X2imYp17j3DF2GcH7dPJxQV6iFx2T8ptPsf5C8sbcHAmAiGHhgiJK4dmu549byWq58",
  "key35": "5dtvZq7GCt5wZRxGPnk66vLANvqJEVe1pPVxn6eUKmEma9Wbvxv4qnoPd1gXgFTf7boaEMgMn6UbjHHJ9WasXYVd",
  "key36": "4ybgxrsD3xmSPxVXfPWrVSTD8SHF6jAnnCMCBEeqmB4ATSY1y94eJMePQBwSmob4jeD9bAVPBYRRTByF5GE1mRAJ",
  "key37": "4Zyxf9kSaKy78qmG14zuKuGVqorSHNHXUVTfCcDFKvAtNCC6UEcGPoZQYBNGmqLGkwgrXokZWSm68TGxvaH1NwxD"
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
