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
    "3RHL298rfmrcQt1wskGm1ZBx4aQbywYcQ85Q2RbEa9CqmKywD1Qc46nvoKwhTjenF9euPkmsa72J4GkPHWqerv16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rHStDTc9LMECrUwtFA6sVqW5fRCiUz7ZyJnRKfiVVvR7aL3qAma4pm4NcfhiirCsXSev8GENzhAUBaZDSWvJBCQ",
  "key1": "24qKGgcdQ64rKQAKBgoEh4niZ8NzQAjhJyPB8zdC6VndZmcqfwk4cRyZBEoMLUQBzuiAJHfkEM19yeJ6d58vxg8E",
  "key2": "VrMZtzfYK68YdeenzskDFyZVyPxgRWzd1qnsQ6CEF7q4SK3E8TdS3Cio4ggVRGphBTMfemAuCcMKfFDarQwWCXU",
  "key3": "4hTm66HqGiWgjKLBZ9ThuPRyGWfBTdp1Vhrkie32Ztp4aWtcY6Ur66v4vRDQCZPneJBidjwGiXSwXE63uyp4aDAH",
  "key4": "2Awe932fwyBUyJk82n3n8m8bPAJWk5JtTa41YMJPP77ct28HiUViJwAZ1YtBvgWDrJpz58Epbez8LwcptpbXhyP",
  "key5": "8oJgCBP9tCoeH19cbpRHtjm471a2bsyyZDKNsLnZhokQpDvgz753H3o1xcVGgeAe3oC9c7SMGY4D5tCCFsTNf2r",
  "key6": "4rwznn56JQpjj1uHc8XeZb9QxGoiuj11VWZnSXxCw6o2B8aXNbD1FdeaFQt9M3mA9cm7PCPNr3VETYm6M8Mzb8us",
  "key7": "2aavnFpHekpw9UYPryK4yJ7HmwypyQfMxT74oYGeeAwqQrbSe36vL883v1RvSmAUsjxSjmvWtKCE1hKCCYDxogH9",
  "key8": "29LkfiiHAnGjcKrcduqVQFboXQs9gAfYnpUaFqd6dvag1XYshMNj8vqCXPhCeY3YqqgyKJg1E3zX4UzAdS2DAfSZ",
  "key9": "3ToFHxbKU2DkqFLAkTepyMJPxUxJ9YXg9oLjfXmo8REsWVoz6kWXyzTw7rEkM2J322AwMk6Ksr1bDKYXm5PckUzo",
  "key10": "3SJQ4eGYeDjunu9rdqW8VnyVWyBCoPHZWxAuyyjnLZAXoqMjXY7zZ7r1HzzKNAUQUSxyaUKYyFwtDtUMsNNWqJ3x",
  "key11": "2AfBidoWogbEwPAa1QcivkRjMeXe6EPiae4Uoyvzr4G34Lwnu1sojJDUfBFbtLzXverz3Lf71vvwp45BaSbSKFvQ",
  "key12": "2a9QXyNs944ffYVoJVqYTLmZXqqXsQDBdYNGnQZwEZPkPuczsVpW2jG6MooZEsUVJwML6Bbr4Afg8DsQewGyYZ6C",
  "key13": "ZPbQ5Z1W877wPp2vUfhXT8kHWEcMD5Aq8HMUp89jsRFm4U3Hr4zoHQfz3TYvatrgGREdRgcTr43rBN1e8JzEebE",
  "key14": "3WbicutrzsNrUHfkCd9oQC5eRQFh7dK5eDS5Aq5aFX6CrqCqtFe1XYdPKjBaviTKkY3JAC8vR5ocaAVUEoFQnW17",
  "key15": "4ELsY5b9xSYtUrerehGfMkjtmvyWUgoRqoDQTQZCLP64eZhSstfnqjwcsMu3GHpumZ4T5KE6U4GE6P1wMGhvGD14",
  "key16": "4tnoqQsaA35xC6xyT3KDsbXNg1ym5GqgKXDSydqpXEWDLBTeR2QDbSryp6oWLx5Lq3KYTSus2181Y1EHW7vooiaV",
  "key17": "3ewmAW31gJBQgiseTGizmAyHpe8EgDsffAfHt8EUkmLfPPTv5UEQdYBsvv8XcUXuvNzhh3AaZa3ekMkTKdCwcCXt",
  "key18": "54yMJdCpFe2thHxRC74MvJWTwTcLRLEbrKuToBeER2tRsm5QQtWfp4iZbmjSTeKpXz1QSyLUGWutLKN9pWcSM5MB",
  "key19": "DxEXCjPdyJBXwm28QqgSptWW5rALeEPqgjcxbxEf3bCpjAJPpfDWcNGmS3wtjHXFkJKuFbj6mVa6wcUtFT4LpTh",
  "key20": "3v5SBf1S4hdyBSfGgjT84aUXiUHii8NG1JuhGwNP6uXkV1LJ6v8AuDS9pYkCGXMAiPWUpA37zJckVruJAAdijwV9",
  "key21": "4igvZTfYztTLZf3MsQ64Wc3MpLkPSw3iwnysBsH4dby3DyCZ1fWJz3HvMohwpHZVvBRWniPAUfNa5hPToqVxa4L",
  "key22": "3TtJm5eBH6NCqrycp2xKsiaVFBfWwYSiCCRwmeWkBj6J3A34UaCX1m9KaLyZF8KGyWNGmxkCxKYqPQByYmTkzxyz",
  "key23": "36ELhhwATRECtxzCa1rGrteKgytXb2BCUN14bQ9uAPmxu8N2nqyCjwVrjBiYSH1kvcrMEcsuNrq8eGuVVUgTQ5C6",
  "key24": "67g7KFGqtgw11DXqGowbVVeiEz8xSE8xsZLUd1vpPQixaB2RQZhG6HYUutjby67xBcXXTZmcY1fkMYXUKpPcjgGg",
  "key25": "46tGqDvgJ8PhEMfKZ5kZkA8DmeCVmZLzyCPiBormuHhQXayiW6jAY2EaDpdCJeyo6XJbevUg9mESSJNeZEZaRVAp",
  "key26": "GSbW5aBHUGC6avrXFd3wK6Vz1swYnioPKFeFHAm7VnbRefgG2BC7dc3ravFuYypUJhAEib3QxLPrhTP3XsQFHCK",
  "key27": "bTziUCTiY7VX7q5y72XbQjjLo8A1BEd6XF7dxrbkBA2d7buxHd5oMan8zmZ3sTwspUxW5rCXdVzvp2egU7S8b97",
  "key28": "ACWDLMeGPVaZuQ7q8jNscSePcthkAbP68tKehiprsEyj6qbSRqb7WEHSWGFEypJ3oPocFnRzZqQvGErv6dUgEJ6",
  "key29": "2etn4JuJX43sCrhkHdCPWkYpQinwp4v8YnRpPrFHKpqixvSEnyrZybChh1eevDcDAePm2EHF33Z1hXsFX5ZmEuq3",
  "key30": "5ZFQfUxSDwF9J6fGdwtohtB2DhRH8C1p55RyZ6b1pT6fCv9XwSQuBYnfju3wzKtDw5JuNXVfiZHJt1NfDePdrjSa",
  "key31": "5nWYiVwKDa1NLxrnSmdY2D4htmo55iu1dDr3gGbTYHr4zA9sYQKZjHz629xqQ844Zj1gmVx9A2Vyo5oWHSY7ZG1Z",
  "key32": "5abQqUryKeWYVCnRgvcR2MFJwfzeW61c8TNbqYQ1Ynbd1awugy4HPzmsMEtPRcXo2PQFrs6E9HUf1n4cdur89Sgr",
  "key33": "4BvGFJ4BDT7FSwBMKVoq5EkkmVcuxjqJWgcqFxHzdz1v1aBHxLpeQatVe1WTMKEKRVHeTBR1ThjtLzJDkY6vT2RH",
  "key34": "cunaWFTKdi9Gckc4XWmGXT58Raqh6Nbsp675QMqFq3U65gufKufASu1Nap2hxLyYEKYGLKudDoG9LPa8kZyKW9t",
  "key35": "V4wLid3xh5mNftDmrVSkTUMRoxpsFJxAcR9S44NWVwbFJdowhhqMpeXCaXbPNSVziUZroJMZPDfKmVypZzCXkKz",
  "key36": "4mws2Qm9vDMMPwc9UCZK6GX7jecrs8Dg3A9A7EcuS81XsXUWXQ2xmSRiVER9NfuCi11S9fiv9n7oYMsHK7Lq978W"
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
