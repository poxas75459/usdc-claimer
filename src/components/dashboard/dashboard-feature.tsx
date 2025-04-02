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
    "52Rkv7iQU6dmKZosPyftxt9sE8Ue3n5nsxCqWZvocpqDZdymMTdyvEzPjtFRyPwoqeCUte2oa1TsrPgAb6v1rvSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKj9Zwi4Qq9zh8K4uD6H4qJZ6uzpgyqWzmX8aTDnbzmyAAH28pmBGYkBVRin2MRo3NR4Z7reqVgdNoTNGD4SNKp",
  "key1": "4x5bFPjFuUJE5D4Y28JqKi1zEKdPm8er4xWNm2N3s4qypRE2ML5hXhQxLRVn3h2prXYZmowcENA8VXypa6AXkUmX",
  "key2": "2Z3EP7FN2aE66aFW48HZJSR4fvARBbY9ZpMngkXe78oGYYJVMt2pYQaaY3ZLzYiWUFwqWgyCqYLvHNpbfocW8DyE",
  "key3": "2prQfAXRrK66jMNUSLJR9RsGLrPb3CeyFUj1oeZ52iyo2Z119hFn9L3QMtNPNKvAThLirP3wYjmYb4jMjtrE2nAh",
  "key4": "374yt6tnT12ZynctdRhbigdmSKvGgr9G6Jw2qmHbKZERYmrgFtkBb86nfDoMbPbdQrHf34r4Qrj6vB2RrFRpkb4w",
  "key5": "2V8WwHNARvnxrTXGn3RWPdpW5PhqE3GrDR69X7xf9YveRDw4VZyC56T6iW4pQZHfUUsXX1gp4vKfyZVD3QJc856k",
  "key6": "4qnAkPGviJZYGd6wFtVvAe75jdgAykn7BgwUmG4oD8NAH1DAdmjqshNhjjAG223PEhTXpDmAz2V9BYgsAqXdXzKL",
  "key7": "WETtXuv41vWSpTy7wjsiMou2i39c4DAb5Pzy1wRdtipbjQCHXJv6ci4i2mHZLpkfdqfdmkH4o8b5sm4AYM2Bypu",
  "key8": "31s8ijjNsgx7mP7uZ61eqYbETu7FgE7TAtgRsxiDHb4foZoV54E24Pv6XGhncbhWXp4tTJ6dArvX1nMgFCa1y1D9",
  "key9": "4cLbTr5kVAdw38v8gAWwBcyiFmY33h8HYhFLimRFfQyCviYg9m7uQxexo537g77iDPUnuGwdDdKTsUkzUuzAVii5",
  "key10": "2NMnEZoUbt3S5PHHAQciMAutV94wB9TbPsZD1UmDafLnP2HyzNnWXf8nMwjXHmkaKWYk3YdwwcQs2Z8rwW3BX5G6",
  "key11": "4GFZqRoxGiRZkHoUcaYMfuS1HNkq1qwJRqhtdanwGRjMpVqbGh2JTEq9PutT6cj2JofsP5Ax1vzeDK38Xm5wVXb",
  "key12": "3dxrfhfa3xm7LSG2qeMnWs3q4SFpLoKp9w19wWHELfyGh17MAcWoHutBgMJX2K6i4vz6v2YPcYC63NnWUzXRzWUd",
  "key13": "3APQPjcT1qRWbyrgB3hYFd4yeCwWBXMxbdKYjsc7j1cG815QZwFZQVq9Q8rs5Vy5D32ZiNKvqauKbd879HHHRJdJ",
  "key14": "5NkYSJx1nWf8kPcxXazXow1gu7Eic6Ten8xtYBWFxxDhdavtYZEbyJpqk1aaXEZWAkeY9QwRPqa56aRqaP7rjH7Z",
  "key15": "4qSF1kvAPV4cs3r3B4NUk2g8nc8qCyGsw2GtSs5BB4hTroJkHVemPsbuS2nX1M6YVhXwt1dPDayr92wgAoyoo2Fk",
  "key16": "21FrhzpuJdcXY1GjumaG5T4jub5ZBwjJvHbfLuWRoHpGcHJKB6y2q5HLPC4kiGqrjju5sPjWYjogYueKhJgjbFbg",
  "key17": "5fkexcAu9My5kzuMhFUF3qRNL2bgKvXEQ4EW7hjSovvW4qyyruXVCNoudmtKMRsQ9naA4LqBQYdXvpkKZxHFp3jU",
  "key18": "2qEULj4JHtwoVhpWLqB63wUP6oawHSFwPdzpa9rbBZ9vvqJdSpVgVGgqUcMNt6mgYGViMQzRiGNfooUHLy28Dpw",
  "key19": "E4QfB6jY7pHAHoF1pWQWsNYCWyHZm8VstmLamTSFZwYqDx6ptyvtZ3P2dixY5sZMuabYWhvTrNDUXRqBifAvkYV",
  "key20": "3QuShbBbbiEaCvoaSqXdNT4R1xBFzuDZpdPiUffKet186uaxCRqBfwu3gkBuUHj9C1Fyqxhb6P9vQv5aCpCHHPvo",
  "key21": "3nQev8AaaxxqQUdLsEv3LYjTgcozvACnkPMHVgKGHRrphxtX99c1ywCX9Thttik4hPiAaesqG7S35HnxtGNnsVap",
  "key22": "JBhgvAmocnJRxnqVuRjjzZMYANPiVi1i42fZUpLAhVjczjnNLCXoP2Z9NMsMDMcHZv828ffq8SPsz4vcL7rmizP",
  "key23": "5Lw9DXaYEaQ3rZPziRuohEKzJexQiZkWUygEqMPwcasbGdHtq6brksN8FUWv6TDYfybvvYTx1M1VCZyESvebBmCA",
  "key24": "3bddaDX4BsvhV2zsqfWK5TwFBuyeLt55T32bSH2nUN5aVqQCbWRSdoxMDE2zTHAuVHLTtBwNx6cP9fLznw15iis3",
  "key25": "4MvnYnNef9ne1FBPYkrUvbveGQ4UrqVEKkAmN8he7mRrAmd2EyvZ7X4F56Uox6BnrK5TuBbcdhfqpFXar9ZnvDw",
  "key26": "5vVyD9SchRTqRvBAUPUR7m15nvJJzWgAcg2kEmvihH6Rwy9VGSQQy3DLgFcKxvxYacRHJKbpNBxQwQd5kk3ofVzu",
  "key27": "5Uu8jaM5vjYigT6sFubBnDV7sTWV6j4Z81wNQUZ7YeSJpiFj8dHy81cXVKLju27cE3ba4mux7ct8XokEJAFo9Xm5",
  "key28": "3Evf3wPpH5WhdVoDa4LC7RMuLxt4iZn1JVzi1CAtTyrJZVhUFdNijV1zUSFoywjYJGJE2Fjsj7RdfiKo8t4rE767",
  "key29": "4QaNHWxiiKMcJHUbJBZ9DabSfi1UqoWz4Z9XDBow2271KwgrSRXu6kyk7697jzk7bvwsDmJujaVnu9cVDGrroDUG",
  "key30": "2s5FcGu999jVmfiG7v6JEjMCfCWHNjFTLhJavadASJeGooYSnjAG2Q4NtPKtwuKW2M2ao66f4majwMJWyoV72gJR",
  "key31": "2RsnBEWNjXMMPKzTbdAbAyLYXhmr6RpGsXXGSB6TwKgFSNcSuitDWmcfWpNxFL3Da416CwLSc3iPS5Po6LGtgkeL",
  "key32": "4gFoTMwo6BFzTvQDMtZPJiKHMiwmMHUvE75GQ1qEiU4w2cim2UPL1Zvodgv6zkCAPr5vcomLaRAbA1iPbVjpLc6h",
  "key33": "4jattLpTKSrz6B9G1J8bAJJNYmzXJ772BREQQXg76hcyL1T6Jro8EoTSaSoguweCDUY3gQXUvNSfnXEhcSNJSJwc",
  "key34": "66NchtfTC8TZKM1BWRgGoBPZv7no7czTvqR9vrSEXuiJSBb6ob8i6TmCayrxT7DKCtYG6m4Pnh4yhBGDnF5nkRCC",
  "key35": "3wTPWNgNPPfYFmgwG853HhrsKgc5vbAk7An5eQFaUao3Asp7ygM6byBQcFc18MN1im1qHBh7wptsDtenir5Pahbk",
  "key36": "3oKd9eiqJWiR59saiPBUi1HX3WPioPZwuHQTajc2J71jxRMyw2TCMZrXtCY8zRpEs638AwMdkAQT2HbTZLk5nuqN",
  "key37": "4hpsaKmycEqQfzg7r4Vt88hFD9zeTzTQ3wSixC8jNEuSnbWY9Q44HMa5NvrVVuCppxC1zZAXrjhcgS3NWMtQbsqH",
  "key38": "7zrDHSTqXsNWGyBnEvNGoZa9zbwJGnuK1L9DmXSMfgfVc9rWdxnQV8dLdQmqogdiLp3WCvww63uRSLxa2Tt6z5H",
  "key39": "pyFwEzG3gbN9iFasBYucxNroehAbMxdKZ1skT19CahDCrswmJAVKRZJ9JZmNMDVbsy6zxamYvYcopFr41g6bnFU",
  "key40": "52fpBcVoiXp31Ve1dDWx7CTpfhHFCW3UTFxU99eYwVxFf4wd1iky9TA2z6dhA1N87AvMShz6jC5wm6cpan8BXb7D",
  "key41": "2GjHmocRCWWrAqztF5jSBbmssYNZ6pUx4JN6kawgXNrqGABCgYk9NPimPctsXFiqaKNYZNAm3rYCkVhsPCJkFRPo",
  "key42": "uRaRv8xjDKB8DChKF5qWRJYVFbf7tfr3sx6uUKve2VL4tcGMadTMzj3tBvUKJ7Gd5DM62Jyejyc3CMGWP8VCPwX",
  "key43": "2STbfGuu6vx4Uw6bZP1zFWqYWRLbgUBj6X5t4FtL8qqwPnX5AXHTNrpxLThH8SLyBfm7zex5jL2xdiHLhdN2HwiR",
  "key44": "4Y4h7Ynn4D36tEt8oSZpmaFHwC2MuZY3QmF9Mqa7wHamMUhvoeKp1KxsvGmczQZHVkthGoDQ3jDU7aaDdCU7faMs"
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
