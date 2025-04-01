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
    "4KZjPGTk7D24JQMgPXdxTJC3wo6WEL65Y9VT3qfb4W5spSAcK7i4t395JezQPobiS7XqnxTf9RctD8NqeKWFmA67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPFuNryhbmjCCEbSxrNhsGqtJHFqxwoNiscB6Yd3m26HsYpPNTxFfQFENcadTiMudJgmzvdRd8DMcv22kRVeSfx",
  "key1": "3DYv5bQUezY3Z4gHQdbc9N5JXBmQ47afoQUVDtYBqdc3K9Ei8QGz8Evs9G4gSLN5tCG2wTN6RhmXhBKEB2UsFF6Z",
  "key2": "zNtZ79U1V5cQAzeVG2sFiMJAYnFfBPQyW1w1C3dfmK3qwsXiFJg7ydTzt9g5zDrFH9LVpBuSkAjQbgu1uukoVr3",
  "key3": "4mCep3m9ad5sSSHgPgDK6W6TGsPCD9Y3f6vaHLbUxnYCXeWHaopxj8qPgDVZcAdp35R7h8GqV6B7Q4Khd4Qwb7Fv",
  "key4": "2nr6zwibo524jCyinDis57y9kAQquZk6pAtSURQgjK2FfipmPkaGv1wEV3gdeY21bncMv6PUEdMKirkt2ovrvcLD",
  "key5": "3cFL8JPtgxCigsXmskwSUUTfphnoBwp8b2zCNBQ7aaPvgWLr9PRxwhvDeHe29oK6nYNX1de98KbswgFyPjoAytdW",
  "key6": "XLGGpazB7zybbjBT7iEZXH1SWxgs3oyNxh3UtwUpCoG1bzzJwAQr8rz6LLm63aPhmDgvda5K55hiXFjskdswktu",
  "key7": "4ZfqW9EZVSCyPdZeBZKZv9KKN38RvsWsHnwo9NHuSRiqvpHaAJUkEECpAFSJXgiUELAJDgsNe3w1nRMm558dSkYf",
  "key8": "3zgzBhV36oqDjfuGTr4NS2egosNXhn7NqkFMgTcjdGaKkJ8riUrt3AQRY2daT1ThGYojFzEB9jmou93mBBX69Lgy",
  "key9": "2Tez1mibttYrAF1vdxBUdsJBiMVHCVpShotPgjWLZyBpA4LrAasuKnL7JbmW1ud5XCrSkQc44zinWXSLJYGfiDRC",
  "key10": "5hPeTHSsUWEw4KcF9N5iBzh52Cc3wqEwE5PZVbuWzQocvcNSU3RviFUAHCcXoEDDV6e1TrzUvsHaXPB7uqcVy9zF",
  "key11": "4zAKyad4EFhjv9oEMkvbwtmx3gQrrxKEtSqKhybj9x6iUvnW3QZ9dK4aYkZgynSXtSrC9m8ziqgvaBRdv6HFUDfn",
  "key12": "mG2w9faFgMWeCUMyYQfEZ9zJ1VnJRps8gL8jwjyhsPrbMrQgLxoo75sKn97HHDWpWrG9zFW6ZfhsZhKnnqvhLMC",
  "key13": "2ByxNwez18ws9pA6QG58AxEwXAi1NMJprSH3dXNYx9KcSo4msPWCnQQgXMyrsf6widMcbL2YjTkq4pRJonKDwVQm",
  "key14": "4Rr1eLq9BPT1EUHKmBXtcmU7xYWeHyEcvcdUE4XDw2mLbfBp8PLt1cAt7TWdNgYmVVA9SxixxvPt6t41Eh1EC345",
  "key15": "QVmN5fgkeYdD7zRGRdvWogEJAfsegCEMURBB25ovq17gnFKegP8msT6bNBzexXfiAGpSozh8ks53CiU1kaTPeGS",
  "key16": "3toZWLZGMb2Xh1d9caZouTHmjGjbMwjZvLVUaNrstNmQLqjhusBgZNHADuTbwtcMHqD4vKzu4YuKcSDAroMtQ8Lx",
  "key17": "2ozhBpoGygg5atinjAVESNh8qccw2y9yA4i4y3n6jt16BZzwjPv6ugvBqyfFo5zgy8fjRZMMA26ZiaWUtXSUtdST",
  "key18": "3WFr9jUKQsh7xryM7auxejpMtasLSsrwe4c2hy5Pn868LQ97rP3WQSjfrwtFsx459bpXrCz5gkuR9GWykXpv2teG",
  "key19": "2Lh8dxYX9r149Wogu88tsj5EMvPX12UbvCKU7eUEPNBNW17562qugywVG25MdvwuAukuS5bzH9NUCUA7EPU2BbDj",
  "key20": "4Stbk2e8m9UaeDXG1nKckDzxTB5XYznFq9D6NrJpvyQoyyauByD5ZSpB2t9qb8z67HB4bSyHYYLx79YrAr3HdEy9",
  "key21": "XEPDiLXV4yVArrTT6oD15wXCUucviUKFLbiWx8uMX5J6zaehsbztXASAToZ3FeqBqMSCGN1riuL8ZWeHqmCy9EA",
  "key22": "QK8gb19ScJeAk6wkWcqw6u8pB8avav4YNpyqgH4MvbxwfAMPrCz4MyNYi9x7qr67RY3RaHbZ6hDCcA2jPZrNfMm",
  "key23": "4CJa6Hi3a3Jtrz2kkFK7yjzEhHNcSkVHxnaTUz6kkfbDweVsz66TCaTnhdGXSVEaV2fXiZjxhug8Q9FkUcLfhUnV",
  "key24": "4sej93c8AZmob94QQrc3figK2RMCtEhF6JE2AAADUwJrrAbenCek6vxx2TsjD4MknCGywMTSfjpny4FZMTTdAaNY",
  "key25": "5iNpLvbrWVne6G8xtVvjc9Dpek1Zcmy1H8QdGSKfmQpka5f8dyWjmArL85qntJD4a8LwLsygfxDPVPh6m1jokHu8",
  "key26": "3H2YERsXEY4p9k6zVUKcwiXmKW3tQfQPfLH2wtiNkDqqRm9cFW8mbpZN22C4sqHTRLx3mUrSLxAj2RJHqrww59T6",
  "key27": "5r2EJhVMLKqU5PPSFWznGvLz4wszX6TXgTU993rN2t93uYagfHeVWHjcsA5mksYWpE7AiaDsouxc994MgqBXQBfL",
  "key28": "4tgPW27DyCbmbTWyrG3sv5BKmbh1rZfDM5BodB3rH9usLxavGfeG2CGq4tK2Q9hNotFkj9Jxuc3Hfjc22osrAsmp",
  "key29": "3X37GQchjxT633au3NgkeGVKkziM3p9i836Ew8cZuxPSK5gpf1CmgcgdGVhoNaK7cWadACY3a5P7tozuS6u5yua2",
  "key30": "3ryX83JvkgCNLji7JuKgf3HnnuqXUFoosGz6qq1entNZzyRETrd99wuwGGt7DvFh6uRg7uX1YS1xkb4sfst7zrYP"
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
