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
    "318vYeFeLAqvPevpW5MeHSo4BvQTZfTaGqDth22i6rbongYe8HpCgwEt8pgqmBX5vKMLku6rsPcz9vj4scnyoRKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RqqiiGTZt4ZuVbnr8QwL9kvkJKaJ3jFu1xMQenq8UN6WLUBLA4639AcQNpgKkjDMyDAfPov4nydNEmEnVYFjYMp",
  "key1": "27FzNeJfMbQcwCu2HC2tXTd9armvDJE6ucsiYLXNsjUumXRX2cXLNjm1rE2gajmgPPfmuL55F5XP5CoRytrrQwaB",
  "key2": "4zznCf78km2mSvmHHL9NiMabM4DmhaBCH3naKdqEebisAKc9MSGD1jt8DLzaTPMG9sJrrynGw3DnF6ryV68jc4YZ",
  "key3": "4gdXSvyC9dL72juNmc41g9oHx6tsKrfu3B1A2nRVJFLCA6kjk74zartvvmSEcW4ci9mhwwpPwcBYcQeB5tu7UKVM",
  "key4": "Na635VqHSoQngCviUzD9M8zJT3sNNAYR9Fe4jd3a8eTSnBVLkyQfy9GcDyyvaw3Uhmoe3rsjLEmQmqzt5dpZgCD",
  "key5": "o6VVMGAPEbLaShUhX49ebx1CDK5YQPNuj1AC3L6NSj6RQ9wfqyxGWB5E2ShfYaNy21S5qCtaooP59LB6eAfCrac",
  "key6": "5CiEqjSDPXfFXbMQMwUhekHRULCpfC5HJ9Gd6AKqnDXGR91ohD2ewed9d5iAFgp84k6SnZ6LNTgBztdL85dqfiWz",
  "key7": "23q4RUYVVX324vaQPp42VHvhNwXiXSAp2uPvnZtDbcBdPHkrFzebCEwtSLfv8gorgzHgBypMvB4tnJAT4GX8U2Vb",
  "key8": "57AQRmn1rV3jjoeMBUmqxjPfVZunPVG1C6Q2aknrtagzjFHRUZeiBHGqjD6iogvHzK4t6BnFeF7UhpUNkiL8XerR",
  "key9": "4HX66R6N86bMQHcShx6LtonQDFj3Fo2DKfF2JiXcAngFUi2ykjTpXFsD5EW76rndsYRcoiszUY52r9kfhNdrtV9K",
  "key10": "29HMs65oXVax69UqrtTQ2pnV2J6W3C9KJnYfc57nykRdKarjzpXhpA4EXjbex9gXZ2L1XUnyq6pr2j7z4Swd7qhr",
  "key11": "4Vzp1Ra5eFW1edZWmiZcoARGTuK3kxhoFRcpAktxEjya8txnvqUztWo3oz5ndAFHHEYKftkoopVaXXsQtDGfzyhj",
  "key12": "5e5v3zV6CHXrgAQhXkCyCshhRDXDS8r88vMREiSHtRthjvnuV6ZuJb6z5Ns3S7e5WyqCrq5DE8MT1rLWYqVnW9de",
  "key13": "3AukVBKoBmLtEUsuEu7jpV18LhLdx6BMFU27WP4WWCNVb7i4mPdPAWxE3LrLiBxaokdXhQeDgmjJ3qcw4YHKPrzn",
  "key14": "4U6GTosoUbB8fQvfcke7i7QP7LHx1wsW85cvsEtawGfB5KFb3EQ6P62yUDLHfcxQhHDWb8wRXsdjJJEpmQiKSg3p",
  "key15": "3TFYn52GYgvorY83S2R9Ku5sAGUiHwqufmp3PthCRGE94tRnNefwbNe8MfFoC4q4C8QSvtVo4SmbFDG6f3FNEvqJ",
  "key16": "2ie56BU1y6tjeZjGgUywBxjFybepgenmLiBNKGEwtE8iAXyCy5mGsgZEHxwjKE8w285iCtTqPLtT92WLhNP9axY7",
  "key17": "DxRctYJsZihL6uABRpwAihauJCrXDF6RXgWUvrNuBXqUACWRojJW6LsTigZ3sPZAuc5ZhHoTviWX8L3p2z7v7s5",
  "key18": "45ryrv5cJGwfRrPta1xTyGo6jEC25rUH3ZcG7LiYhQoQySs5y9iYqyognyDDSDqjgEvMFfuiRSt3CipnNFyrytx",
  "key19": "9z9T3tYnxCYMG24JpPZwACXjuuTjE6tg1tW29uBZCGHEvQ2pKsbWnDTnXmchzsTFGtZk6KpsfMnNe4DVinyS8H7",
  "key20": "5KDUNRiG1D4Dufr16Vs8w9XYYvDn2bRxHJJAvvTJYeh1urCSJpH6W7NV4A67og4hejtbwixs4v7b9W5CMQbzpe2c",
  "key21": "3DAKp9frbB82HT2FGRwubpp9XwWsKSvxPRHt2zvDayrBMagfDMTaXPAdU5j5JvdQ4NewRaoCDXWAJY8hzsGCPrUd",
  "key22": "3EHeTGpHaun6iHUgebC3kJV3F3FwfMu4PArtkE9D8UoAshYpup743pvEdrobMSAKbUeKDo9oR9NB6zsbtBrHPofA",
  "key23": "5F5Q1GYLbRTQGKNv2P1PbTDCgNmq9JZoeMzPigUnUxH6qveWhHu8VaVCdH9WNtx3u8gFwGmKGyGmQT61naKfLrho",
  "key24": "4y5JE4jMSySNHT4y5vTXptyvh2P1LxwnZYUpcxkHCikt8RxUVewAL8eFSxvFsiKrYSNGPY3aoQgKqDhvaKNpGvtn",
  "key25": "2gpu5EngTYFquom2aYPYMwMFD5dRwDoTqhwTueS2u77WkgguXh2KgRiBWTrc85h1kUntmvpmwdSASxRjGvt9LSUf"
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
