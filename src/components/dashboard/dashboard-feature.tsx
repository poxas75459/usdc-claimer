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
    "2PRN5hzHQx7mRmj9gFs4dpmwBeR72ZQ4T3KsfPahpzKaJQ2oQyiTnv6Ci31UPtvxtWUYjaXhdA3F2Bq4nnZeA5LZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPh78zpXip281TNKwjdUPsF3nA7goqFMuAyjkXkEG5fuExJCokzKpF25mD7rjqbU7hQsJwfPiaykdRT296rEhqV",
  "key1": "51kqpG6EZrNiXRMkpZFQ7PHQrfPkrfFAJ6WKG1T2ncufeWvbfiDu15aWdbTHmZrMDHviMtmTzHXMnrpRJE3yaZXD",
  "key2": "4MSRNT8crZQ51kUhWmLDtsgBbxjWJzsQ1t8hzbVdFiFQV6R7LADBvcKxU4iZUPzG69kWB9M7usMj2iv2RLETei6S",
  "key3": "2Bxxi6Hn22G7ZEtWDuy6p6C5PUJ1ZtchhoAuEoJBzj6ir216q2AS3Xv1HEsD7mzjGMBJzmiJFgbxM66b2HtszXgE",
  "key4": "5QLB2m4ecE5LW3xh87U7YXV1DMzJ7qpiLLtUNRaj7ez7QnBiUWifoiPRCzDgR6iYfzpMF3h7GDseJdLWgMxaa3wQ",
  "key5": "3thx6iF5D5Su9gaX2gTN5vEyCshpKK73B9n1DkpjihoaxEQAoqxP1ozH5nTQQj5yzobLz4bBj1A8fTfASYshk4Rs",
  "key6": "5b7DTq9B8s9qmMfG4XXgytqWtciVkXH4oweEtck6L6PwPCxHroU8kui8pNMEgDPNnkLmZF6YF633ps9YRC4uprED",
  "key7": "3pM9y7Bci1E3mmzAZYdr8UqWJs9uCh4QRGjEaXQAHCUMTW7DB8BXSm1xafocZrRneGYtdAYK6qd3KugMt4bGMYpB",
  "key8": "3gkVHjcxuHT3TShfYcLq3V5HSskzagQZQvmDJFHEYEHJ1SFRf7ePjBS26LhbsDEcmU9oSp12egfk6sqfX6pikLV8",
  "key9": "4nKUXQzQ43f3MgjmLBNbJkc9Uh841P78yCP9KBjV3W91ye8dBBZRnuc38Jpmbioa2e3BkLxkArZe6FdZ9jCGmt9V",
  "key10": "5WWTevfjzvHCp4id3gB45dA489HyFefoo5zGsmxUWf1nVDfW1NEbUNfMsPfSGBuFUkS7wzuKCGtsFyzYq1XP8wPA",
  "key11": "4gm2euXfh3Gcq8hvR3NyKYRVKkzCkpQJsRK49TggQhiRDNTExjE84uHxu7Sa9UxQkcAoBhmQ6X91vAyU117Vdysk",
  "key12": "nKAgSjrh1J18yqdvxZhfZShupVKiQtXMazzjvq9hMgCewf4VbyiiV2E71SEbdmDs44NdsStAA3pGcJEryZN9uz5",
  "key13": "5LCstthUE21R8dNaohLgKUNSf8Ade7dKc4cQ8bm25bot1G1vwN2Zzb53gpRor2QSW5qfYXuvo5snxk2ejAPioEtp",
  "key14": "geeDq78pjgtTdjSeYR2hyQCpsGyvczEvfVE1CkCgi1Qerc1A6ZP6ugzuNGNjCX9UazB86hstt472nz81Zd1ZZf3",
  "key15": "3dXAmAjuLvf5FrMSYywgREv5CiCT7QhpDYcNHmSaY8ik7XAxWJQbzd4PVABXJg43p6WELsLeDSoSN9UjQJtFafDB",
  "key16": "47U1eLcwUUYDwt1AMHAu26QKcDDiJdGTj3maoCLkjx5TrJ8bQT99iEqLGBaxJfT7GW8XtV7BBcUUBDx3CqvNtgPQ",
  "key17": "j26kz7XsMDey1YEQYfeyFsv5oc4nGuYZ5yaV7mWnALz6mRTe8vS6wAbkkSwZFBsuJ1V9PUebaeZsJqa2bCqGUqQ",
  "key18": "2aYRuH5MMPzeDGJUMwW8rMsWQF15rmVrhntNB4CyX4QPPPgFgo1k6pSKMYuTHq9fEMGM22s3orGANtFqChfPy2dM",
  "key19": "2pxfFDwXKFvR6GPrEuKTB7hXUvJtYw9FN3AmNVDKZ87PBCXBXcFR9qHvffY5BbjUkKSshZiY6H5cyBKGoSKELwYC",
  "key20": "4QtWycKFFpW2m8miTQg8r7jkVPBGAC2YNpQFd6KZjQ3t6wFse5ZcKXHDpuQmino3kU7vRtJs7XKVWnBgK3bfErFV",
  "key21": "5t37ywNLoBBkLJyQm4mtxY5KRpev9CN9izniaCNtbGrUZ1rBfWJ8i88ABJrMfFHudSoc56TroBzemdQpNy19hhZ6",
  "key22": "3QALVK2SBcxBoTtr4iXhsnDpBSUpgFd1LMRWLbcceLZhPh3dhPMBAo5ev6QTWbcsd7p6QSGNRkHEiKk48f67X3R2",
  "key23": "2Da4d3fombJWbpBuiGgifSEKrF29wwSyAuLExNj1TmSrvbn8aNsFohJzyZ9rPfij6xmKZau8TBPtfRVC3NCfBamF",
  "key24": "3aKHpCtXXhw9fyjd64zpXK4DMqWN3HdTruyRwmZo2ZJLrFtamrzPTChjaQ4FnrHqVy67pVh3PvCh4LD6LsVByfMF",
  "key25": "5us6kCZf3DN4LZ3RHwWMrbpcmcnXYxvuEMbVaWH1VbgcSG6eSN32Mz5ojTtJzPAPqfChsqezX9t36jpfRB6mHtUT",
  "key26": "22Tai1oyzZ6CqJpqwGFjkW8NohmKMtoHdxV8vArQmxDuzeKp6XZ7pmKEw9eFmckEKLGtfoQMoovutwpC6AmMLVKL",
  "key27": "439Pnk7AusQUCqzWuQtngZWpRZrGPULU1CryzqPWxe9wtmb4FghBaJCJ5z4frQWT7sxziFu8ALG4VDQbgYXSbb5e",
  "key28": "2ySqxjLCvuwVTYkfh3usLh3EankpTsMqVoRVukToGp4xWcz9CVrRt3ewVPa2fU3ZbBXfBsidV7vprcSMiQG9e2Ap",
  "key29": "qenTcMoTFLAomXLV6KSuPWB9c74YRBHHh2bXykwre2KP6tXni15eWijvcCHaDo1jzm6qXxdqe9fTbhzw7M8yvGy",
  "key30": "br9Z36vW83wFCsmUbV4PmLqK3jUvBsTP7S8DK38H8Cvtkphc7U54bTvxEtJsZuNnwBq8TGPjYjV7VocS8z9jTRQ",
  "key31": "3fpp88fTRJvRirL6qmtBfJNjMU25EMQiMxvwPTwQkjrJu1jV9CwUykZffmp3Twntt3PPNaXhofh1PmJMSoGUihAn",
  "key32": "2tcY7uYWe3aA98yDyPW6xcTMCixhmAaxarCBtXY7NfihrBNNu2Q2QReJQcA5EUqcKg4ftdwoGaFFh9J5a6VVY2ym",
  "key33": "21NtREf8U8o4e6Y8yLdgYmeaegwRAXTGopVxUX9ZyAqWWPMdEejQdhMhpEdqc7ZQZD4XZ1BykyRvRZcUcCF6kH3X",
  "key34": "3quDzdUhXGQFAR7WcH3W9TvEzDBtVgsTLfUtBVw9sU2hy4mEEguHKUqXUu5hS9gLeDqQmcjU4H59VzUvRNh3V2Mc",
  "key35": "2dnQffX8caJsYfHMzWE33ELdmwLjp7RbeBYZpmBm9Gw6aNShLzx6x69NqwH8hdDqe9s6URBegKswTJ9hdEgJPqyk",
  "key36": "33SWg4mDU8JrJfdY652B53adpKgDJJftxWitvakixbFY28r5BUJSd2qP7xQ2BAYLJiVifSgvrTSdAFTBkMPGCW9Q",
  "key37": "33niV6RcsH5Ekh1u6PJhxFkJm3f9b89LM4nCtFDzpRLSq5bMVkrWzH6yJtRC9mYEXFAGBSPVRNXhkHddVwdPPqXV",
  "key38": "3phfPn242Wxy8cEbZpWvE92A7FbpTdJqsSq2Q4oxUrp3iJG4cdtzqgaX9Vbs6wsMyRCWU5vLgHGaJAqyfUwsGSg7",
  "key39": "dyghGGZJUr1aYXqfv12qZLyRxaiutDmacCdAhUkJAZezWm6V986VvDf9JLPGkBPTF5S5CPwqMegLSgDdjAN38L8",
  "key40": "43uva4SZ2M9bYZgro1exwthhSW6gZAqLEkN95Bj7kjoi9s9WKnrYfJ9XPop4W6FWuBB58HowLqkAx6TiPj52LyJ3",
  "key41": "5RZeihWvazCtFAGhbrvqapJFujMWzSsqiDsLTLx5EZzqRXaxnL6RjzMQk6mr2pEUVuBk3seqfnGobqMvQDfuNDGC",
  "key42": "2oXk3Ky7ANeAfwRFnCkmESABUwSWZ1qpb5wKpwSKhX5JbPtkXfydii4aP7QzPTh5RkZGL8BBWwFccHBb8Tt9Mkyk",
  "key43": "22LgKeiWgwXXuNMyjb7qCwecZLwzrfxdC7DHfB3UkJCtZYrTBARi1nXWUfCrkKevYjw3cTe95DeF9m3SUDiYFZo2",
  "key44": "4wUw1bHWqxcMZqqsa8FwggynYPYP4CQCdR1gQesZpRBXmeawMQRhA19URw2WxsZRnLG7Pouk2PE14ADRRAXA3dfi",
  "key45": "2CqJTp7GcoLSA1hmacHR5t9DthmE9zs2ruQNQbPphD2Kcr1XDTLKiMCe4ZZyD55MryUhFmNsiXHjKWaAQc8Ny2uF",
  "key46": "5qpxSkeNQopwt1NicknRdQQNEp9YVt4nxLoN9LiLEZvjaZTMY47yTafiyJLEEjRLFCbxtcE3ypj214WWqms79eVP",
  "key47": "nsPGchB9KrkcgbNsRBxhhzFrD7oqYha6CicTir3CRLDQMANi3XX1aJwYBUUZrJ8Uu1L6B86fMtGzaH2n29jCUpR"
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
