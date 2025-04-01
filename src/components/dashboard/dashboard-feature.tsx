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
    "zFCiRbtUDawsVDHb9KzGtrDtE2Ma1151jnTGYeTeFouryPCLE1Bbbemoa3tUQ5vCPNu8paCwqXtwPdbTpjnwKLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFFxfUtqfJp4RA7cQeykLuDhMCW71u5BQ1jsjMeLBPv1N8YAfng8g7mxyu5ogh7n6812GhzZzuBwredGB6anqu9",
  "key1": "3KGVBp5DrMnq36At4dKMVySBNr6QDQmMKFSRYT8ig6qYCLJ8buACBkkffE9SviN2siTEDMvaeiE16nmFZ4fVh2cY",
  "key2": "5n1Mtq4eoAaokcY9gw7mQJfPyRqjeJ85UB82eNEhRXa16GtRqXPPzRsMULptaKfH1StGVjmyjNuLuvq8ubvFz3Ld",
  "key3": "3Ef9TQUDpx3Y645iVRpQqxa2SbopJfAsrkAVuP9CrxMz9wHH5CDop7fZwbwSftF5WnYexAZPcETTXQEG2opj1nBC",
  "key4": "3pwf6syHHH1tUWkjXXArBwnsjmWGNB7vKkdqXNBbNkEafGkWhmoSxcmyhYWQmaUepm8ouYvrc3Azr7PUUk1iZ8t7",
  "key5": "5Gq8kvpMRk4xMAhRpHrpgXxt1Mpr9z1rTxKPb8KXa9PPoztNaFkaXhXQKRpmGTLjuHrb7uFoWBt5di7UqMv5etLA",
  "key6": "5BmNzLz5QMDLCeg6cP6FyqYfXaWfSNMZ3RHzTPKEogLhuQGJ7s3YBZfAY9eX8VisK8jB4F3FxcrB7JU8r9ne43se",
  "key7": "XV2VrccuiNEixv2sKv8QrQBCt9Am5rm7Ba1GXrms7CutbHZQAjniNikXxgdtt3JFWwbvfEgf5HkNKVcmECfFwiG",
  "key8": "3rcNnskH8rFLp8fkt1isDRKwCJx7ozE4psYn4PEVpjXGke4rS7fPkAhTKsgNfvgS5zrftCxRoLTbdTxUheo96cMr",
  "key9": "56vK1BKUP4ppM8rDMxL7VxAYSbdaFKMhCQEkg36j1CMuPiQ8X4vXDeWvhZeyydhiDixDHmnobq1YuchvbF1kVSgy",
  "key10": "2nnt1jhR3HZXrW2DgvwYR1JuKgbMyTSjWujmB4juStPita7rYkd1RugSzw2eJfeo3TNKzFPegKWVndmdGd3zJ8WJ",
  "key11": "4jdbYobicaSbJCAmJ82XrPSLra6s8be2XBV5zLXhmaUsjZxZ5nLF8Lnrwce2J91gscsz1cCNwBNHU4T3DvCVxiQy",
  "key12": "FkWM5bviYLVQCNwbwLYNZMdXVSemm5ynPPUHKnkgkcjvPFhUsC9ZiX66F9Y8ncfi8FXAegASVpcCD78TGrYzweh",
  "key13": "5G1Lz4ncTVeUECwGw5dzsqYHUyRBoZA9hzrgTCQenGRbpWNntMwPigAPVAuyWMLJ6KaPm8XoSFdargRbv7JYvQPf",
  "key14": "4DdfgQM8wdhA9SGdD2GzS9HiQLzhX1JkdWboZcMT6vUryPir72Gvxp3WghdzcMcDt9jPzkJGpgPffUGJQWbRMCCr",
  "key15": "26GdknVH4A9ZqW8xx7oDqyKMzNmQPHBoM6HaXwstKUu4DwvqqCh32qKVoGnE5aWAowhRJrjYU7peTscN3MfBrUVS",
  "key16": "3mZEYP3wi3Bjr5y1o4of7kcGiTCFQo5Ht4BsUJCavW86jWd9X8gkauNL5gbzq9SosVkxhHMEDhgQDwBdExYgsgvK",
  "key17": "5Qx3LTUh2frnZv1agtzG7973sAZjNLmTCcUheyk89gRW8HkQUtJAwBH4gvwpL1ej4kixuT9a4a8MAgdyfuimxdDZ",
  "key18": "4SR3UbPQMZkvJo9dbcbtXHzVotWkLLGhqqEq71i6BHd5WQgNJLPHanUcrRZN8Vdckep16mkAhpwEj1VvJjceQ6h9",
  "key19": "2TdUZbz48yNAkx9APUfDhuwDNC2vxXd6TYo6hPziafLTcFq9iiERaYWJtHKnoAa1YeWgwo7uvkFMGSkdN71Qs7bX",
  "key20": "4nNQgzb5Yy5kfvjQTtuoaqckrns6yR69nCUEJNr9DntyWKnc8WQkDNAXeWTkXNtZUJSyNztfvKDG9L4Ca5CVr2sE",
  "key21": "3F3k9bCFpXJt8zJXiHi3XrvA91Z4EUVp4rYGVk2FwmbiWNYGtiYAyouyuWs5Z2duTrYzd3Gb9jEYvJZsVTSBHVga",
  "key22": "2XXwnJdvDTM3td3MFQWHjo53odZMbzn5GEjocVfzd9BbLbhzSqgpZxLLbXbb2AQ8myejGBv3W2PNv3HXMAvLoHYc",
  "key23": "3GRiuS2w38wHCpekL3AHdSgAgk1xoUsR4nRP5RHLQB3wkKwsfKHoALjrz5mbBgSC9Wz385pL3RwKhh4ezy1Mn35m",
  "key24": "35gS3cJfPdXp7NLxo3nD67zj4pARjR9s1XxigtUBeqBnsfXb1cWfEUDMfPcfRM5kqdbYxMPF8NkZMFER95G4YCip",
  "key25": "2HcPp4mrEPtpMBUP8irxsfCzv92ya5zBeYy3q9c7H4E4wKM6D7opdMEfnbZTyf98Q27SFNXT1WjnZrPYyRLkvq6M",
  "key26": "43Gz4Si4ScqUsymjqmaSig523bHzCDiLR9EGPra3MnAi61StdjeLWiG5KMBwsLysDXruyGWt75NpEzrSZbVb2bh6",
  "key27": "3eWKFpu5zrkPZteArtyj7LGsaHFSKJXDMxNHzgwfkqgf1oxH1NoqUMPYisfZyiwDiM7i3ow6prcTrKDmCu68vHPd",
  "key28": "4HHratavXtUvcKJ41N6Yzo1C9HpAiTS63SSK73vxWrGN22BdeEoDvXStrLgeJmm8rmqgzLgdvgbEmQmVangq1A2X",
  "key29": "3yWwrmeSSiuyYn9KNFKMUxjzom1ZSA7vGnC6DeiGfC4keduDLBcRhwEVJGAJ3FSYM2atThaZVqYvwipwVhTm6LtQ",
  "key30": "2HoJWkYF8KpFWe4ojjYKAvq9XjwSQRY8ZPAHMdsPR7Vs7ommUCReieC6G6YoHEBo62aQrQor2oAv8Y9hDaqXoFLG",
  "key31": "3PcbzLZXMhEDnn8Vj9C6V5vCFAFfg3nvqLqodJYandFptE6NQvN2KXKbGFPCE7x1e1nt7TuSZcvoRfXHpCuHSSG2",
  "key32": "yf3JLoXbQBPeXbHNp13wTPws8g4s2MYqYerFcz8rfn87gjQapmHFfYbzMVsNRNbpQ8zq4N3RnTK9YC3iG4tKKR2",
  "key33": "5Was71HPBZ73Hv6dKk87ymTXaWCrdMT1DzVyBqXYvf5cTPV9sgM9E1VwgUhhDcAE9nzEMikwz2URXwrwwzSLBAqd",
  "key34": "41PsQkczKWWMbGkueQY9qX8pgvZq7ojYbJ2dZXtKEjhULPVKcXHAGVcqa3iC9TiitR4wBtuLkvhi4s9w6V5JoDd3",
  "key35": "4ugeL2fJx3LDVxgNt3FXKM3mtAUdtj5g2naPJSQAkwYaJZSXEaiV1DyNCqgUYwHE3PJsZ6BMvakN7jkoi1xezeuJ",
  "key36": "5E1RMTdjzTy3QVwfC7jiM9qomXP1WsNj8Zt93Dq2Scg5urwaQYWaq4NmK3qwLkgho4Tt4B8RAV7Q4vpiJndkfaXL",
  "key37": "fEbGtjN2kVQ3CumGHVefPR3MZTeHJRPSSxVese4uEFZSh11QV8g5NC5QVkpdXswy7gZKa3Uc9icxoQ2dkyoHA7Y",
  "key38": "XfwkT1AE9BppeZuuybYSgeAHvRBrTQYghZ4QYDRg3mnjUrs23gk1jA2tzeBWLkqXiUaiAQwgo6ZitKMM7UGG7gP",
  "key39": "5mgv6ZNbUuVJG5H78V8tsffWYxUCyiP7E3wR8w5ivaU3PU1PNFwDH1b1UzQ81Cdjv91sCasPLaEN8WEPgLk3sNrp"
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
