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
    "52BnC88enzcbtt2VYVHgMZQBnLpPWJhdt6cAfdSrRgumYWNMP3e9tQ8Sqv8rzycwxkj45Gqws5YjWNuDYJXUMStS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbUzTJ9pP9BpbY1Dzm6frzgA65acSP4Bnb1o6P2xH3UiagxemLjYeEtxgzkY1z2XHNyQzpzD5LYZzhJRxeFXGU7",
  "key1": "3hjTZeQouMW5HmdWJVGUBK9EL4LW6TCxsbiAVJKgBXrZjpkHG393JhUoSVQ7PRESLg2YBBXv4mMXydVEutyST5k9",
  "key2": "2ccZaHupBsiSm2xPH3EHPzAoRNYitchontwcGrkA3DA4tyPi3KWB9h5wRrpDQy5zBPCjncjGENmogBZRg8RMzYeo",
  "key3": "53isrb6YN8oGnA9y93A4MqyJagXh35ncvKCTab54T6nMdczQA1aSHFgXV4cbvkbPY7yPYE8exe3FadoGz17kq6uV",
  "key4": "4UTo4KeFybpjkRAQZnc7gSVUgZHBrLBA8EcDQJTC5eRhy3eSFb6z17LzfQvugFt8fmCXnbi5KL6aHK5RfB1weS1y",
  "key5": "3KACrV1UqQhXNmErjRKxh8zM5A84Lfsvdw1HUzhEx3JiMYmByvy2UKW2dDnrCXbcaVPmaCkaWNirkd7QXKPFxEeG",
  "key6": "PqFd99oMkmJ1xyQhGKJ43MBCuqQQbVsaDs8iYPtE9SrhXfNMPx7tBbsJnn1aSBCyf5t6eC3CCMY1bLUZTExWjGr",
  "key7": "4RqVCH8ZLg5Acvejo681mmdLJucQebgVgfjLpPivhmowr3Bo644heF3fbZLAXDtzVeKe4wwoGmj73wimpdQjRswW",
  "key8": "5st6HhvRexTicUADFzymR6oBRSBiC8Mt8zn1wT4dQrm5GxP6kwCDzcsKR6wQsB4Vk1dDqAvomQUJY8PiaBRdFea1",
  "key9": "4cLggZVnwbreCct8hhikHQmjsJeF9n4rpBEmArg6vGNu1eqjKJwZtZVKrJwjD72VobKixKCLuPyyEPzeiXRhVuRw",
  "key10": "5Bonc4734Ggi2e7kfEGGQ8AWC1Qu7TKbygAenDZdpAnVS6mncjBc7bLnm1FYqKcdHz4MtHRsUWh2ooqhjGyLJSBr",
  "key11": "3wqXhVCEPYEnkvE68NJ534HNykbrYysr7E93yvMnBUCYf8tLLjHJKnu8yAUxDStCHbgQcz3BfS1Ex1PMNmH5xrFw",
  "key12": "5ijWobs2UH5g9HB6TQEHyevuksXtceEiqYRaWWkjFb9edrYvWHGdmc4gWbbcFYBg3iBM3G49KYdNpSUojbuL78QR",
  "key13": "33iy9FkDhq18JCW1DqYUxWPmqcqQwS1J45mSQfqwFurBn98pyyMCtpoQJFQ3RqZSkT1mKSdsz2mQmMRM7VfdsqrE",
  "key14": "654ih9wnaXPyEGsNiNKESqQmD6ZfuXqPTjuYZwbZxuxLn9awxaoVqrDxfTTBPVmTYhLnbTewCCtHyitGE4VuAPzx",
  "key15": "4mBs5r1PwirSPXcXDQjAF9Hjc6tKVf7AVFmVw2QVjARsEY9sT2K8LePhPndcXSPAAzFqLprSUYafhukvGq8d7B4D",
  "key16": "26NRPhhkJUw3dcDVghpxrSCqJmXEzakRxeVYpZCEVeEEB66nFYoKNDqMkEx2EwsiPgvAAS4n7rwMdyxDFj8vz9HS",
  "key17": "2LE3a623QPbxdZydGHVpxPNzGQsPpXyFUi4VouPUWyX2wKAAo1vsNEto147G9pUrqdF7utrvKsHFov1KrKZW4Edm",
  "key18": "pWb7TGbHT28SwAHo3dSCK5NWkP86BdvrJhCT5LSD7bUWTGngsomPaZcTCYfefMnDRUb5pwjF8iPRE7QrtQk1axU",
  "key19": "33CFNRhKS3m1F4cDuFispw3o6KKwvZrrTdchQCcaeu1LCZjmeSUsPp7f8j8PrX7GJQrEFAwL9hZdAQs9Y7wu4VUu",
  "key20": "2jgisCQGrnYJrUNSyFz52FcYC765PzQWQMepXAwcEHcFHt6VvuzJ83qRzfiGjvKqbdS7gB9u1qS8wUmvvvZ4qHBL",
  "key21": "28Eqg3521UJfb1ydxePHXiyoYk71uHdKUN5UsFZwyZNDpcNJScZLAuahUk3JqndKnBbNFkFkDvFTYtbojvzMknx7",
  "key22": "38KCjovDyqnHxKsSvQh8ZGpb2wuLD4DpgJirWF4h7ncFC54MShPVbqaD7FUFeJHYEPFAdLgr3VmqW8oyCaByEvtt",
  "key23": "42BhUQPwBwh9vXnq1XvMG3wV2aNFR262ge5T19W2y9H5BS3RXjzJHBc2bW2kj6gU2R2PxnHzSyS4QVTWPBtnK8ST",
  "key24": "3CvsKDARy1eYKyL7ky6tLXSktQdf2MgUmYN2PYo5t4dPc8bcvdrrJrFGcbu55fYeYCumhs3MoEne1t6cduDg9fmn",
  "key25": "4AAt4Mk3Rixd3mTSoqZHEv5cugDTBMvoRimcJna9y8YGYYWybAcbUe7Yeqpwvyd52S6jqoiMpxo3ibRAZYzLdr7s",
  "key26": "51CFyUYGoHqTGdXsoU43rbbfhzFRNrcdCMSx4Mmoe1Ca8A2T9tiWLU7J99kCwEBLx8fMoT5hADmHiuVHihX37uci",
  "key27": "3qwJRBnVpqHX374BA6d6wD1Qicv2fuLC7z4BaiLsWMKkw7jjb5CVxipjsSM67RydSVGPJS1pWYDrU7ZY66TTYwA2",
  "key28": "4iKjBDjz6XJ46KVgmceJg7j1sR1pzXDHn72s4pZawrr4kjqoeb5G6yAxxVf7eQgeric7sCaLpDir4rWP7aoJWfkT",
  "key29": "3Dy7iaEt46fSkeSvVp3JvDNx27B3AMNC5VNJDuQbhDiUDzJFXguRqKrhkf1QMwjyD2M5HDY7mrrb7pCmLn9qbj8M",
  "key30": "4hwhULDMN4bn2vwxByvfqZWmBjhpg9WRgNhDPRXZaKTv66LCHfMaEg7JyUB8ik7Yc1DrZ7UFwr2Zt46AKkRs5be8",
  "key31": "MJubF4m3ftRP8eybWTrFkxTEoR6JdjPVVjtVmLzzLoznmFoD1jrB6hNDHmnF3z5GrpvQbm9waoqiVKeNWoJi9tq",
  "key32": "48P84Lf2mKk7roj1o9qTFCqd3JGhcJKkyctEKHcLz96Q8GEAoAGacz93JnaZM97cRzmb2wbfuu7oNAExmTYu9YqT",
  "key33": "2DcFv7FscmQkuSvN8pxP83sHZt9c5ccd5CLFLybyL3B3pXtoAKZryJ4MdiKmndvZqzzRHEtGNzoamLrxwhcvQ2Au",
  "key34": "3V8T6x9KRQVDGiFaZY4ooX8ouB9dxiJ2wk8SETrD9zGxdqVLfCXphCTADKPSY31KarkHGmBn3fw1gkgxmdNVDULY"
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
