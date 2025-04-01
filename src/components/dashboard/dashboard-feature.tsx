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
    "kqKWjacybu8diWdDMB9RcLkSSF4uXhSVqXME4azQSeaqXL6FA3jE9iJSLAD7LETrFuwk6Ab5Zs4m3vDQWNH1rsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEf8eqVZJ9SMesor6xEqXYbbwiqf1pLZQFHDVC7eCmigZMvc9q62ByfakhpRbiTxdngipzH7MQJgBnvvMyaaDCk",
  "key1": "8pEt1Dw1pBCVBodPTEp5kXb157v8WeAG2U2jTkcVtUoVmJr8TjB8Er18viTnzzPUoDpZ9gJvAfpLp84c4XjuZxB",
  "key2": "4tLuu3gwLV7bEHQmXHDpQSa5BwXsV3pfK3Qquhz9LT5mqq3bEptCs64sinsgmxXvC3iAzpFpQ1Vv2nB8DebQq86G",
  "key3": "wHgJJH7bC6VXnzmqg2PZ1Vba3Bpreg8vhJExGDz1xgkSQiNqrEgQ8jAobq3pSToNLBSKa1cocx6rF6vHvUkXSZy",
  "key4": "51FTNG8jDQs7GmiY3sVpHHAGj7hBFR4cwtKWavYGmToDsgX2canxf3psYHquvaPmEDP8MeKyp9zRhgHCYPhsdxUT",
  "key5": "2Uozd21E8ce7r2NcgwVwfJiwzCFEsrhtxxtrZMLargCt3VZxKgHogdvEVkCStgJd7k83bm5mVHiwNztoVtDCQE37",
  "key6": "4y2Pzes55ucDurV6e7Mckdqs2CYSTDwg5fMJtGicyuyvfhAuwCrPacenmHa9v4n39yvuCwB6RaYvuiQJChit3Y1Y",
  "key7": "3TgFkaBmCwAatgWuSWeuCanCjirHfFASgVkKunfVPRFAcX1JS4Kf2LpH1M6zgSCEhgydqC62NdvEa6iVxrexP47T",
  "key8": "2pBfbV28GN9ePTXoNUux3DKzL6iSefwDEVLeooWxWff4CMXb3ZwozKdwFuSgYGy6qEm985yboZk8WXyZECQXFbyn",
  "key9": "43F6AqQaVevSTLdfD5ALM9Z4wGtTpKab8hyY4KSrVmxqkwy6bF1Doj9BZi2cw4LxcRZREGbM1XJDFMWGK1qgxxDY",
  "key10": "34NeSi4q5YPxkWAs7UN2YN4cWxrqt9ZiBBwS6etXdHFiiyeJ6LLa9Yex3bvfLeFiDRiAuts484VxCWgNorpphZiL",
  "key11": "6664GzTdPSGaqHvxrnydyFvbbStGrCMb3KyAJJgPu2uz8K2PZZM8dMg2Lgtf7eHPvFZrMkEHShEwRqWQPAGgpvTN",
  "key12": "3M8MKGPBBuJRMXKT6osskL1REgZobkBwZu6xDA7MPeinqMkC6n5uZiygjsrde8JK4FXJXifTSF3RYf7j4TQh1WqS",
  "key13": "67PAt32hEQvULBwayySZmqKQx2SS8g54PVn83Dfj7aS3EXRLE4SaCU5BTYTJYDq7SbVgsngJzz8a2Fe28vedUiBG",
  "key14": "4n2WhgE7skkdX4eYmNBcwZqA5HyVJuv8qj46o4thfp9dFDiYt1uuvv4NKsnvyDhCcyY9MPxRzLHnskRonnEXfqqn",
  "key15": "5kQZKaZiiwfKpFWGADNNHmuuzvMzDFW9djo7yD5ZC5Ytbvz9PEsDhRan3EsGopR6kdVKwPsfxy8y7yNyLbRW47zG",
  "key16": "bX1GjzXDaRaMULd58jG7gjy2fLWpunQ8Tefzop83T8JdEEH5y5HeSUfmWM55WHs5uS7Px3qpTX7gmxqrAy4AnH5",
  "key17": "HvKSwprv4VZRMXG566HW61N4uNsHvevvNuNNP1GamnENMKv5LDWzpn2CsHwgAHZ1SWNaL5BrPuVPXhcUdyZJHWB",
  "key18": "6F7aZ7yhCELn3xGyt224Xf65Cj8Q1VyVtM46uPCdiLsGAo8EbnSjeiBrjEKDLYND56hf8SB5oo3jXC12M3dyQfm",
  "key19": "2byvV4nk6g8j5eiMJwMrNW3W6Zf89hMj31CvYDHWS3Y7FesUfUTrW4f7bbporGpBehcPKKvHfmPdJDebh9BQif4X",
  "key20": "5iKnUdSz7uZUtequccd3RvE5hGuxVNSKZhkkVaLuzfkrh6pPGqgEsfGRZ2k21vqH7iWmhS2Vjtnk8veJJsUompqP",
  "key21": "3ZNR6DYmq1sr3Gj6vjia5r4W127pdwwXgTANdt2FZq55Ep52RMBSMNBKeMLG2yne8UQECQj4EWx8icqVTDXRWBjQ",
  "key22": "276c6uEQfE59Z7MpSBt3b51g98LBVbEkbX1pc2AKK1cRSnz3hNWBpQRX4tLevNrctN3he1HEiJTT4cmKrEvkyCTe",
  "key23": "5pfdNai3i8z4pKtZEA4fWPfbRCpX6Hd2yyxG8BpWZU32XTLXZrWY1awTERYvQDAjNwNDNTMFChC1JKquqkDHt1Zh",
  "key24": "21BReeRHekA3R5nuguEA2vWnnAexRsWdwyWjSCY1g16VQLsR8PDKU7YSQ39Jv5eSAnsesqWszTuXkfT6jPuhZqGS",
  "key25": "oqXkmBL5JPtSXT5ue2guzytU5s2D2hn1HsdBcKrMT6Rkv8M5ABHAb6pPf2QxFa3TgmpFdY5bP7UyP9BZnvewHz8",
  "key26": "3YNE5H9x8p4PUqmf4vx3LAEavYCLFDiQpEmCUAogy3M8fdkg515KjrKtZSmtSh4pjgKK2MFktTTci5mSEjdatraD",
  "key27": "2WKdeHPgNCp1KtwVPMjgnbhYwXt427N6WypXGpCs7uwNhh1L4bEuXLc6Y5EckGY6pYMyWNHfxKXMUrfpcyZfye1N",
  "key28": "5DvyayGF7dZeDxeguivLRy3cF4uhrHJ5eQx2U9RRrY4weyy8cCfAQR64qEHJieZbkbNXeiPdxV7ujws3cRDDrkz2",
  "key29": "28ggNXiWyCHA9hBiWq6fVvBRkAqpxmMPjEVj2tW5ArhoyfZ9r5BVaNZ9zwqf8cHQNNv2B3LFT6z7jaLsG2V3o3eG",
  "key30": "4XsRFbaYvCQtZyP7HLb7u7hq6L89VEFKb4HFhqt8ARJhXHPhGnLdKNFzUVixzGsqzdN9dKYKft2WYZiaX6dDekzR",
  "key31": "5B7RjdHQxfFk31F71EuyiDNL232JAs1b4wVJKZcocoAJgLShe71R3Kir6tbKKMhU1S8qSaUGLjXoA2BtCQzA7Lw1",
  "key32": "5VTcPWj7pMZZLxBQxUz2EDrCg5DFg9JEHwMrLfqg35WMmR36UA2sbhvJiiyDyCkZ6h7ufgqKKLi4uwwWUymAJf5R",
  "key33": "4qvfVyMDufRMALF7mAy3WfKwXNrG3oSaLC18dfQz3u3fpdgBvEyPsTBrNnX6nk4qoKXZZLse2MJWXpdvcjyhQmK8",
  "key34": "3wZpxqiuCKFRnrjMXKzU752qPHrLCwYCG6CV9mnWrPKCFjLyfTusMRKA7F1KvgeQjtP4rPKXMuavqY1NHf1PKThL",
  "key35": "2xS3cLFy48hCMVzyaB2LZ3LPm3jxJLcfDbmhLFYDf6La4Vv2hEx8NH1o6fqyNdgpJE1wxpbhgenJ4oEeiNJF2JyL",
  "key36": "nZ5UpNPoA9YZKy9Ynvf7ns4emeJYsKc4ccbSQixZ6AXS62zwqZThHFDpWaLNoJhofdCPckgjygeu3HDWMyqcgoo"
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
