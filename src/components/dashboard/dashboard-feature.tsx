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
    "66mDaoXjVsTTZtW4ZhDoS9nRWzq1hUGWKnfKoyvquGAeRdpsPuEL5uK7SQiqbVPPzRQmtMHYGRhv62reL6wgvcwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VNQm6anjHcJ7zvZcFRjU629RH7p4ZpHK9dUn1UQpTwe5uBaGDMxxjwMxr8exW7FDKx1PzgyEPwCrELN4Hv89vdn",
  "key1": "3mf9k2D9m3cSBHUoG4Wxo79KEGxKVCu5Rap3xPHbPDBCLQrbBvQxmr7mgKj4DXkEYUzvsQ2LVTMLAxvrNkTmA8BR",
  "key2": "5stxkystSHifHywwmwHYHfvEi6vEYLnSUuureQHWD7AcCNnBqoZsUW2NJAhd28p7ecfKFs7G6qBxh1uhGroaSgGc",
  "key3": "2iFuAJWsCiVN7nEG8JH58jMzZyTdrXiG3ewWW7tfpNGLKph2QygVdSZR3q27DZVzxHQgEvoeUVVy3eAa4dygDUgD",
  "key4": "5tg1ewHz97nUaDCKAjNEHCV9dQLwR6eHff8msF4bzeqDHZaAceC2eYYeo4ZuMJPCYeY5s5tfuDykwNHv4CnFN853",
  "key5": "5jMkeaJdVEqhumtqsYDTRPeBScwCpE9afepNExr9HAMvQyqy1FGNLZX6UBLC1tfwEEDX2DXQfpRq5dago1SUoEZs",
  "key6": "5TMiy5TBpfpcH99TLFqkWFJy3DYGmF9A6xZxCb83t3FkFesbMWu57uvTdGvZYsV6q1k45wt5qMewf1Bvp3Sznztk",
  "key7": "oehUeUTkkmSernN1MA1bQh211R78X7rdHG9jgDuB8GNrVutpLDZgAWwK3V26e23FQTw7uNhDx7daL57quUVfAnm",
  "key8": "4sHgephC8q8SsmPwukcu3gw9qNzDHNEjjDAdVBPCBCdEBq2jgTwQ4z6KxsjYSkDQ9UyPGqEcyHuDfAMgaLCqejGx",
  "key9": "4ufVdUXctKVLEBKXBDqMG7xHrCMzqpJPSwNHCbeTaxvvSWo9A55Fknsu3BghuUuk5tewmYVdxdfcUp4PaWyaRuy1",
  "key10": "2Vaa2pG9FKqsHqPqdp8BrKtA84KNQagrLiU5WojBveJxuSyviGUtD52L1V4bvmFrzQF8tiVD7Ga83LE9nt5fX7WW",
  "key11": "3VFzG7GLYrZKdyQsoMRQAfuYcPyPcCtxHAQxAkA5CAfjqPi2pRnKHWQ6iX3u9YrJ2qE23EXwU9ifkQ6NEyuRgu8n",
  "key12": "3LeFD7a5H8fLs7VGAF1tbxz6vd4WGteTLogBV5vbbbLLdjrY8KPkcn3iowLX9kK4amBAmpa5nVAusWJ6ht7uvqmr",
  "key13": "XJrDBxrMc3TL8dyFcNRgvkDv9SoyWpzt9WEjFZeBx1vwtG5DytmhFmbRuzfc9rSQsb1A3rP1K4Luhc9AcpTcLn4",
  "key14": "48tfUTf7E6yGsmvG2ZAwDzZhh6v3sk4BCiufYjJfRqa4Gb12shzZwQ4BQzFzmnsu8ypuMq7WQht82ZYthMmodHNu",
  "key15": "3sVkv3nxiF1zRpgkPNRj7bkXyvMKBFN6sEbMx1cLwdJwfDgLfCKiJytTLVWmMSG7TmpAM9rnFyiqBo6B1g54Txrz",
  "key16": "2yG9yoG5dFnwikqeTHWdFCaneK83Arh3Zm6fyQwbCYez8eekkAFuS41tSa7UBzgMFxyhWrh2UDNvrWxSGw7zrDn6",
  "key17": "2NA8kSYiy76PVR88L2wiLNPWaAMT2iM9dydJBBvtAxY2bEie3oriEKrbBmtLLK4PvWXMqZAyRhgXA8Z17p1JZu8",
  "key18": "46zVHPpLEDpTemJYftuFFzS1pLoPhBNBzPekmYRtBu5FaapsnJvfYDhL78kHS7iMMtDE7a5VRtuX5gTJapt4mk7b",
  "key19": "3V427hogY37wUGSqSrnr55iBuDHpamA33BSrzEd9Df11HQ73GixQGXgWLcgDGNTFaveCFEkHeQghUQAxdmoTF8SY",
  "key20": "4vb3wMPgDxoNwwJYa3Bb7N4MEtwGEqWdq8UewTRgaA2LTptneGXV1K3VNyCGZ8iHiBB9KGSQYGNKfF3CrpoMFvyP",
  "key21": "5rXASRex2ZPV49HcFGi3hGKVoE3eUpCqA94y8dmJy9pKewBRa8Nn8oebGuGcdX9d7eBso8Pk1Nypdbk2ugBXdcWE",
  "key22": "4nFi78x3Qv3ZXFZv7whibBxRqGsZmJyy9hYi4v99NAnDU5VsSGzGdqgxSgUTTdoaKiLjD2GjqdP3Uu1tqF2q2sbc",
  "key23": "5ZeJXcdhQMqsaMSdEre36H3EbDhHCosWuSQAyVUAJhHvtrXW7uY6hNEYqkB9fd5zTzJgf9C1Trgq57oBXt7NEfDM",
  "key24": "KgJ1x1r9osx4FVZ8mzCS3SmQJZ5NcWsxVYBCbzLEP1T1nVoRHWedDRogLswi7qmdvvgAfygsc9nGVqm6LWnAcLd",
  "key25": "N6LWY8iSkRMKhbaat1qTUoYD3nX2TCVtdRt7dt4V3AUGtC8z8HQxTXw8YhvacBpmEh5SiZc1nMa7FLxtWVktRr4",
  "key26": "jqv2a1QQYqyEYBRAzvoYLDjxGbqt28u2SZD8g8zvefaUVpJ5bEYVy3EFPeqrbMQMjHys9QkXoY9zXv9PsHuzjq2",
  "key27": "5WU3RDDXJrfeDokRvXc4FX95nkTMERBk8FCc7cRrGTgEUELtWKuAnpLFZqVateBMtq1t4fDFRMhnox4JBHx5wYn3",
  "key28": "2dwwQc272u8GmUvNEVaPLzprPCVUhBSpRUtTNSBp4h1wrk2pUGkMBB7X6SFGuiHVEjqiqMdogBY96GRmQx8jqLxV"
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
