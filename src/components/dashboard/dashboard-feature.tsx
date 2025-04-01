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
    "bDdZRyP8QSG6dbVmHMSf9UgdEhtmNaWsT2fW72hgmETFaKErX8V7dRENmYepRmjiyHZYnMofr9W4wc52MCZcQsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJYgtB1pUY9uD5Lgn9x2mAJxGsGBppRKAA6QY2BpSYDkydaBAoXjWYKxa4VzavMrvyAt2QwPjQuVp62WHYiz1WJ",
  "key1": "CkwTf1sKcbgRziz3j5136VtE7a62WY8qg9pkB2QSCxgyDaYkvr6J5KyVFUAvmP6CbNmzsrYZ9ZjTdysrHRXsdUd",
  "key2": "2KSsABEtcU7LgWRG7Jw9K2vNy9dGkLmTzkRmzM5N4KmreTa6RiAiGEU5wDokTMq2fkdY7YyYXvzS6T488qhZZ88S",
  "key3": "4q5tr5YQTGoFrVCm1xVCTjN4s4CtDEYX2tCn3wFmJj5R5WjNxmF9mqqk51TWSWJmbFyXsTyvhRn7AaRCZCuELj5",
  "key4": "3AKhKGmuHogb75vrwkthveN3vpWTdUexpTiKVKiqKDwmAzLWsnaC5WxtpjdcAa1aXVtxt92xyUMdXzL6Yyyt8XvT",
  "key5": "3L3wSsPt2TsgtTH5KTNYy6KgPbjLkME98MWJk12y2DzmoxYoFUNa7iN6dYbpuMRRUAnizkWutV2Wi51NUpP8GxC6",
  "key6": "3eaJDoSkhFsChbLxccuKkKhyBSkCvEs3p6JQNkZig3t8juGTtBuWSt7vr8gKXUTQsnV4sHuxSXisyHmhNpMuUhTX",
  "key7": "2DhEmcUv7VNqxBkzToFVrTY268g9biy3KShLspQzTRWr88s5HjuLt7GNJ1GRKk31Ut1afQTCpaVStB8puKfxCbS9",
  "key8": "4f9rDJF8AhSgskAdr9kgujgZSEEXXFc1YJ8j8vC2u1SmN4zetfQ2NwEjjXLCLTFujNtccXUMMK77AmUjvLx9hC3U",
  "key9": "2SSmDrMELGmPd2wCYYThw66tQwLdZvcpRWCX4SB6i22Zhg2pBacqn4QudC4QNmF1iEEaizHJqWMaqtDXR6XKmneR",
  "key10": "2zTVtcZmQs2z5m99RyAdz2BcBdBWRKCc2GXxVjQuc2zyJdcdu6ucGSJZRbdbY39ZvuwP35VvkdrvzL2arjs3XaLh",
  "key11": "55FDpLyaqbB9byt95VK997xQY45VbvT8imYimXHZzv1UpjuQSCaNVAjj36dZpMravFTKndiUJWAxzvfVGzt7CpnY",
  "key12": "2v8mcYwhbDuMjMw7Tfwveui6PQqDdA8NfmXBADJn17cbeysFRKeMdSDGN5R9DYEkmwCyk8ceaMHBGCCZALcfD47G",
  "key13": "49sRvrpnQv7CT4mpC8mFVzTMwBWsfsVddDFuLMDpbzXwSexpXvQmiFbvYtvDppbd92bb3RrMpb2EEhxVN1h66vju",
  "key14": "3r7MWr9bSwcGhmVDbGme3vzekNZKKizjc8oJhJTEywEUW4bfV4ka7fTMebqB35kejTmNLsW3k2G1MjGu5hKEJYUU",
  "key15": "3gc2uoHgyiacb3u6SkZAc3x89vGKjC84tDfQQRdgnben96X4rCfJXa5US7TYDxMbnXPjdV1QsAEnZXLqFLusSPRj",
  "key16": "4DsSvuVRbjhVWH837neHHPBu1myD3RxZENUXAkdmSeMcMbf3zqqJro9FopNpQrxHYmQYoUVufKuYayFxkMwqw64A",
  "key17": "4NWg1C5pYF7MsNGr3gt4dD7phLKtCncDRhPHRjpbT18xS7fzvnm6vtjzbCBAk5UYnAeuKoRZgdv7fakiYJuLDn2M",
  "key18": "5uV19fh7K73cXki1hKJYYMnfwcK1h5P7EZT2pqnUVyosF8kTUrHBFjzgc9dV4aTESRQB55CTMUMDTgGcQnPpRPhz",
  "key19": "paH9SeWpU7BXXYKmEPWQ7Eivbej93oSmUgsSQoSt25hDB9xNjtDwW4jcmSs8msDt6mQq5da5MLRr3LWhAeg7m9c",
  "key20": "2EBfkwtPETmN5KRQZFPVvsMw6XCTWMtd1F5ZkTWGBLa1jFKYt5vbRNBAQidXcnSkszrhKnt3HUSi4MCyzsAn5TaZ",
  "key21": "3gTLg21cEkcgYH9e2xGdVRjo1J144cGsTvAJLfYgM9YvPErCdKDrUD1m21JK6wai2iXtRnW7MAK23bRp5QnqHt3p",
  "key22": "4PMYsSFBLT1ySxh6qUGVM721Tx4uBXJWV813wXfsGMeeRHY8yf3BSMceb8q3NSuHDMTiEzJbDcEnVXZ9q1xLki92",
  "key23": "58muaudmG3DN2VEjmAm1rS9V6TKnomqsa3k4p7Xu51TDXakVTT2jhtuRQy15xqXCLZGgdXPEudrTtdELZTUuXzby",
  "key24": "aVNc94Xp5oHd5xQXDas2PGt8WgH66w6ED24A3DKHTPVRhvt3sRFRmVaSdUjpoCMWZySgTeqVci8XKDJPjAsWdfw",
  "key25": "2jj6YUwbTTyiXbg4HrHShFNdDDcdkxh8acbaYoMCsXFcU3rauMVgHgjPenZ42qUwnrWrdFFtAFqpyfq4xnQhb7aW",
  "key26": "5qmTbWz2g8bDWsHxuy1bB3HtHAdGHhF5vk7uj9oynQpfnrgxGFfKRpRvcx7DVBpZ97ZRrdL3xFk7Ks8MWdbwKtVK",
  "key27": "3kQmUNpANFXkcpGpbCKFq4Qm1vS5RmPq7QDXCRB9zQ29XaMcFuaDCgPQBUPrwmTPpmmPLPYeXAzrtgwkXG2qhFNS",
  "key28": "2dZPr2bvXsBhg1huHGi9mPGUjpaVKSzqcsD1PgCZPj7VLjRxCQ71ifKeqQ9Syb3cZL6oCXMLogypqYQgznLrL23f",
  "key29": "5Yw81H69ASYrQNs5AtsyhPfpwpCuNweGY71rzN8V5VMBcjTpQ6BH9toVJHUgsTZAbmc7zB5K8aDFxaBmCkFTC5aW",
  "key30": "4DsUAqZFtGz7jKx9KKUfGN8eov7NvLxGZ6iSvR9e9XC5q7oVGiPy2zE4w2Lx5Su5z38LN3z5FufWqJhQJcXEoVYs"
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
