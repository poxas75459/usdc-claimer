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
    "3B8pBTAsG2Zh1zqT7Fiwd5cyzHBmrqinfj5QpdV6cURvkYex459A7rtDcCYhouEoxGTCzBbV5dfXon1aptmUVNPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UhLCPrzJWR8ks5avS3uKci9wfqmPWsMuLRkfq4GJnyAzmAwFtnnUm4R8gdEHoRZsoyPNHUPGcUNRiwofA7sevUi",
  "key1": "3NqmCXpLjVTHWQQhzzfDxZ9baqzTmnYJMnMuei63db9ja1oWJJ9eBGH9zLuJf2b2Zs9Rsd3LTLGWLJfLSxJt3u7P",
  "key2": "36JH26kGUTatPbCXqi2F3DnKFSe3EmiHbGg3qYqSvqR9pVq9qcJ8ZWUs5eHvJjFBnFVKF2GTM3m2FAtcexXyZBjL",
  "key3": "5VGKZsw4ZCSBxwh6YVxVzMT4Cs3XvrkBBVS7pvVYNk3pGT8AcHhQ2wrusBotX3XCCDY5PKLHYxA7D5rbnXvxCfCG",
  "key4": "2WqA2EBytrYFHHy8vyxYnn7noqHLbp8u44D1ZK4igZgVxiZRJ8BkTSKDncKVvRYvbJwU3DsbcGe6jMjenz5HjpJ3",
  "key5": "2oT5L2BP1zfc7CTefvhEhBih6YubHdGksxUr2QJjxUugm9tFSJtRFmGcZhGg3Q3XypwNe3ncJ31njMrb9kQt5cXo",
  "key6": "4Zs7osFrUB1UmnhiSuEfj629WsB8SAQE7Awm7hZUfv6fqZ2d4xhpEc7wBAA8k1j1jdTJiAMkqT3H63KkkkdxVw5d",
  "key7": "2kbFMbQigVs1UPReoiWXtYAWTMrwZYF4PmdV7tKmurzTj4BJKHLjXr8TEnxnF98bTyRQf59Cscyfw79E6fRudWZK",
  "key8": "SP8JLjyhCA3mxmX8NazxCPFyk4m9pFPUvYrDaXTwGyaN9RtzDvoi6LrJf7GFo9aNGhnkXSLNpbVJnoPkaDxxtVd",
  "key9": "3Eui9Cnw4Zq2XUNvFuG7PsX7CsMtE2NE4pd2WocYB9huNwMa12RJNo8V9mpoKdQgpJDDZERVNbXFfws8jJwUrsNr",
  "key10": "4MwhyLGb3LPK8yaSFiw8VQx734Wvg2JksuYmuszEqv5XULnaHQtqN5evQJEYUfvmC4K1cfZb71WwiVhG5Hbm23mD",
  "key11": "3NDgfynb896aHX83XVY3SWg6BDoUr49FkuALkLMD6CgE4jRrzjNAz5k4r5avjzyX3Jxu3fXm219Cak4vtxH5GxXH",
  "key12": "gAp45RtXWAR3SQDJ4gL9sKULJEfRN1r8recLi9LpaeepSHJtNR7aaH28NdayUVeJ5vXP2xSMd7gS2qH8XdcLJaH",
  "key13": "5UpBEh58whbUYzbRtbgk94NpPEwSpnHgJDtNgfZyyf67STZp3qo69mRpcfX4gaYEPQn89CHgyMJyK8ALXAKpjaf5",
  "key14": "vxrJedCxVhajaC2YG23jDqfksrBMs9LYP2KsA8EVHwuvqKWF9wqLFntcZyWZzw56Kr5JYNYe827P5KFYKKuaQ4w",
  "key15": "2TgYxQwcDnUYpvpj6GPcUSbYkZwZ2qd5T52iqHa1ku45U4p22pyyyNB9GHecYtd2Hmn8xFqxWuNsHYzyQwfsRYxw",
  "key16": "4UXHjTgTjz71vD6o5CzwH6BFRuTAysQR8seSWBCTqwNc5JoP9NRBVjpkw3yYoF9qdy4fdQHtwH8W6JHJETaomjyL",
  "key17": "dpHDYApRraW8CDMK6qZhat3556o1d5jxwCk8CLUx4sQyrapH2xurDaU3f5YFkx6aHQEWWm3TurtgcezvihMA343",
  "key18": "5biGT3jd4R98dNMkzf82YotxPfxiPXSGmskw2rgA2FTpxPDgYTZFbeAGxEA9A4bKDFYGBiDnqY8rm5QEoa3iRuks",
  "key19": "5cCL2nM1gjm8aP7gnN6rzTcHeFrUBDtSsCwxqT4KjumAfeZHTpk8qbMyPK9gy2Vr2kD85YroT1grrEury4ScBkeU",
  "key20": "2TzpZbjo1bKRNdUeoFscgbVZ8BW7ULLZ7FpMCv2zHavzbpYCQ2DckHigGsq4PQH1rsusK3ZMqku6d8Nws4Nk6g76",
  "key21": "2gjF29wkLmzZR49PgdyRqa8FDfmeEC3tb7miNEsjWCg4d56vLmEXoYqrwR78yFsjDwCdLgfjwjYHgjizemBAWEPf",
  "key22": "35jbMSfb3iQvwH2rhPKcMrVz1SxyBd3ueRmWRu5vwrR2eCiGJLbtQCuSFLqciBZqLAzGcvrpTxuDg5simmXWYEUS",
  "key23": "MrUtvTNfpvcUKUmA2o8mZScNzTLe4FvPnXEjPWFhVgLEiMAa33BXauAkPCM5Z5Lei3EVvYWVtRAFJr8KcmNREDs",
  "key24": "2HfMLVcAqoTKKyuU6pqJk1EP8h9t1ZCpbAtstth3yhorvAN2N2Jz1dXQ4X78zDd7jDYatoPHSgNeXDPrDhh1nNrQ",
  "key25": "5uTuU5uJybgGkZCQGPR7KE6ybB9GkdozWFetusTr1E5nxaNir5kiJDMSrGaMSnfoFnykffQsonnsrPkq1KavGtxZ",
  "key26": "4xHJWgzQ1tyA8b6hTBYRb1fZX8zc312R7HhGBksCMGQRAT1CM1WVqbLS4E9UQMA1TzUyFZ5HVJgJuhacGAJb12tx",
  "key27": "dFix2TaqctYS8nK1HPf58GpkTgyMgySULWX4RhgeWwPBSJWktk4xLCyryGSUPWtXerCsHx2RN8sigPrwsSsVy5c",
  "key28": "4WucZHYYx7cYVNMBP3gsVEUoMDcLnNuzHJKHbosx2fTnJP4Jzjj65Ciq8jJXhYeiPEdpaRNNXHnnVE1kiquuPfo4",
  "key29": "46Aicc9fsdzo5HGfd1KbcUYwfpJkn7RgWTd7vpcppYQFgPHMDE7hUipgRHSgCczPkoHGYqxJoXYcjnx4m8jQDUWA",
  "key30": "2WAzNY6s9XqJ4Nj5YEbk8FuSrNNMbg7Bo4vSDKPi77HFcB4fKtKd7Q47vdTkK7G11GgCyfuSoxQLZV8Aneuqcgwr",
  "key31": "4DFQxpUwxRN9jXNMQmUKrWhCPffPJ7RCpJVRGjkSRuDnK9MbHz547gcwmzp4hf5szknVKp5R4Pvt1J6Mp3a49ToK",
  "key32": "46AUySsx2HF8BaDmnLDptUJyNcsXnkjnc9bkWeFjE3tD8knEB7AoL4hnEDA7VUwcSSzm2dpxX2iYW3hPcgsJ1nWz",
  "key33": "239PQgi7NZWxrTxuhVQD3XjJsp5FzRkMHit9nxt8F8qGVHR6qYdzpMkP2wNNGPjKZz4nxwgCS6nbCKEJGsbQPUNj",
  "key34": "4u6W9ksmxcXHohG9QrhJJ6Z3ymwdiiDU3kMxiVQCXMyv4WdBEq3Dt6eNEdiEVek7sD8zUddjHFQANvg2SwgRVTrK",
  "key35": "2Lg18g3DnkcGMCLzqUQ48sKH7Nkvs2t9qcBohqJersRHQwDWnr3DtdHvz9d2viMEcWUute7AAuJhz5iHyiNEvz32",
  "key36": "2t9NSCuAYRS9fqFtcjURYnti6gGj4KhVaTHdEtpwdH9dxnvF75GConrtmUi8GaaUoDYx5rD34kkZU2ujhNLnhXkh"
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
