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
    "4UWUzhp8TeHcfFXt5cbdsPLj3C2XCCxk7RgZ6zgr2oDU634WK8J5fWrdVxjN6RxYH5XJKvu7ygyMBoNx4pYAXd4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Veq51hdcU1yufg2hRaygS8VssNLwJcFXKP3fGhFP1bn4TYPpezLWt77nvjmdNYQF731CwcAdnAvcMrGwHU6fYiS",
  "key1": "5d4ubiuzJn44vpPE1xUDhwNTpDAtYHxst8s9rojx471SSeH2WiPZVk6y27KGJ3NpvrZ2g37pfydwDWixdAvLQLtp",
  "key2": "3EGiizhhjBJwfPmUcdMnVnGGWb1qckdUPG9RxZtZPZFzTa8Ajf2Z837D2tn7d6y29vYG6YwJ58v6Sbp1X1xdX86d",
  "key3": "Tym1HCNByj8DtWdonys5wWL5HwzQbMf8Hbkem7F3s1Q9xKMosjaq5KRcAko61fJDtCUMt8BF9tPybRUCEmFTkit",
  "key4": "2A8pnChGAtRXF8Z3r9EjuXzkVScKATYnEA2TCgfW4sfWHMDMroMC8MXWwvf8rACs1E4hjr25ZruZz4JDLNW6TZwy",
  "key5": "4F9G89oU2b6bbXzUV2oVV7iLS5Cq6RsfSNJG1xTDwiaXmydTiK9bpfSWvU2CaHhPCBs1kmTVT4eMYwqzM5jfujaj",
  "key6": "21sVeqFottBRjJ3GY1WkVcHZgQv7wqvodeZCcxrqaCLPCDL38pMqJqFXDkp1oX1DBG1HgRHUdBR9UdtHAAVVuwDX",
  "key7": "4WJAyngdD8CVucW9NbgLNsjJmYoBRo9X5tfQGgvdcLJCaVhAiyHqUExT2MuCisRzWukCDxdESLzbtwyTZ9JqYyz1",
  "key8": "5vdwVBwAiQkYbL2bysxXLZDsTR9kg4SBrRcUKMh3WBhAdsu4pAj8oRmSWexpnrVv1Yh1NcXo7mwtGkfRnYyyBS8v",
  "key9": "4wkU1CvvuyAgZiDNG5G9pS2UnaUVMns53dKbcuDEindDPGjmkTxmWKyvQcXXm8iFdM4VJXaNUHaPUkvLyyiMJT5k",
  "key10": "2H32AP6QsjDDZzPcaUwnnhMv29QXFgdmLgSXj7yJRsVvGWqzeEaz6rksfP5XVpHaF9wTzu1TsmQJF8Yd57C38eqD",
  "key11": "4KPwDC1d82BzdfGzx9zCJEFKpDBKA4ziydivunp61Z3UK43ny7HRN6xtEJmW1AHFrrG6Qyoor81NYNA2Bj6qN86o",
  "key12": "2VEfvXFXnw5dt7aR4uv3KMwLHXj45Zo9s37dYoJqQrge7mneKuBkfgpm7V94faMmip92cs1FVJEqk5Xg9hRMYzyW",
  "key13": "NSP2NHW2T9yDuFLJJDgTC4LpQXtrthzYvkxjMK5koog6goY5brcjHUG3kNbASVAtYwFFwS38T6Lma7eo7HrGgce",
  "key14": "2rqAT15mgSdqvDYQ6k1yedwRcx2bmTsvfSieJ34MmGjB6d8C43xTQ8GGKSFLwdZMiwv7HzYtt4WoYs2yCPSgJama",
  "key15": "52JFzXUPA1GcofvHEPuNh5rVTaHTadhpF5HRyYXkkAGx7PhouCSqpfMTda5yW65985UYYr96exLfEVSkg3nPfSxS",
  "key16": "5M5Uxf1wvSiyWspB5ChH2sKxEW4NGwRaUpvXgP8tfiyJahNdFGyJWf1pBjrCtQY5DWXw33Lz6YS2wGonu3CPAo1M",
  "key17": "4v3JmvaZfqizjvpD2ZyZqMvJUfgoMYugdFeG9iGcUuWLrojEejK8AGmqxE13JnRfasufuiWqBSsa4DEN1BysNLEx",
  "key18": "53UivkQLkHGKZzeJQKHeqe6sXaG8WFoJZk7RvJUJJqrEgTE6pAsJZEsmqpCA3xNvnXq8vtq8V5w83F38eS3JZVvC",
  "key19": "3ivLeECGdgxr5hTzRvRKgzxoqvJS1Z9a5YbpPYi6cB4yBP1jjYk4cmEz3LSPPfbsnLfwCdkSUtCcDj7WGiFEWoFk",
  "key20": "3yVUu6PxxudxPgoFobQhTcvnLBfYhG395sxYdcR3qrT1fVbK8DNzb4ZSKhobatxyDmptekwsdGUhyLUhHr783tGx",
  "key21": "2hG4FnUJNGdLDxRvchacHzFKeFTpqpHKiZ5iyDyeReTc2muEeMSoa1X4DfNoZVUYsubKtr7FoFnv7nFTbw5MAiHt",
  "key22": "e9bemcZCtC3pUMWoE7rJpYWw2nTJEum99vzajs8A5U4G8Mpvp5sACG41rpUp3bFfBcs7eTrov4JaFqkgQfm9nXo",
  "key23": "BNfhLCMUyhKfGXJn7qjYwobeA8MxcHEqGTG2uAVaFnrcZH4CoxQiFxW2s17fr5YjjVYD3v9rmBgjMhBA7MgWuFA",
  "key24": "5Z8eDYnjdxbXBnrZji88LEyG2gajNqHAN998oXxcxNwdDA7ZQTVqLvsq9MHF5k7dV7NqJzt6dVdtV7R4RKEZvjt9",
  "key25": "4zxSa6wAbMpDNVtYMHQR9CzLGB4h2DAL3Ey29wQpnESJn2Jv666RUKLkDnbJezLK6m61NxBRpPfZQ7x8ovsWdxv",
  "key26": "3GDyVA7qGVgsDm48wqHWBcbtm835d4udw6LT8D4Qo1gwJTBZTyx6gPShrxCrJ1W71YV7JxhAU6PGUGbECJkmXGTb",
  "key27": "66qYQZypGm9VwqWicaLEibgM47GAxW37RrQCJACjJ8Bk5jfYPzqiMrbDgRR9Jf8g5P6yPq3j8B4FpRDfpwDsPHdk",
  "key28": "3GtFXAK1jQUyc76Q5sHrV7YKUyHQ82ydBuNTxe7HBY6zb99cBZhH3MdzsQxkCZL1UXzsYNDdcB3kLWRdcqJeyDgC",
  "key29": "3adeKmJ7y3ohR3bpqEJuU7fn79i2CeUeuXAe91Lm9mfWwbsw2k2L7ggLxoCEp7uwEiHCTVYVfByNqirtjjEfRP8h",
  "key30": "YtfPnAkDVAmgw6y3KpbhMzUhwtLRXWsfzL3fsjFGmpoF1fi13YoJE1RQFijnTStcPKzTiN5bVxN9NDS2fJnQetp",
  "key31": "3jEsHabFQVhKDb9DHXfKvKQvSACuHeVDtgYqctgawij3wkHEioNkrqnokFMmN9W52e1PVKYJASi5fGoAKerjUZ7r",
  "key32": "4w1wvPsVuNEp5Vmb8CkgfZXdGt5BJ1hpqdxJAx1s7QKrbCe9EktubnDhqD4RFuxKJGWS5FxmhvivHqG4SWRXmK5F",
  "key33": "2PFMEPdPkx1e1Wt4jECtZaj115vPdV5yvX7FhG5GdTLiCMyQJ3uDGJDYCbNaRFEhd7XgxuCueReNa6JiJ63hu3GY",
  "key34": "4B4DvSsmQ7nYHymaSq8eRqSfCM2QCt9dwFofkBhZcNbBdgPDGxJjv7Ru119mRYv1Y1i419uKeyDsRyTm9sRdBtv5",
  "key35": "5b7vxRquQSpqeTLspQDvkaerpP9WujVsxwwAynXHKjLazivsCmAebWQc1XvdqHdzNzBhUno6AN25MsH2F96UebXk",
  "key36": "m8v4JL1AUTSDcfgdqf9KbfW6CxCcaYgfgSuYHTL4RpqZYZD28X8WeXTSU8LosPogZr35H4LcwxKJ4BeuQoDdiTc",
  "key37": "4i334fvrEkDYr4fcWangxVo3XxcqRrrwRgmTL71HZ5pUzJHE4fY4p4yoqL4JaKXNP369p4vpRdLPGYPj1qrJ88n7",
  "key38": "21XQTH7uv3uJcuDzEUtfLiPY38qkg99HUgdMCuRBeu3ML6Pf3TCckqVbdr1fmjDfSZiVQy6sWS85hreMrMrs6Gh4",
  "key39": "7WRRVsrD4BmVVBkUd5qrErqtLNf52BSMhxpebx13Zr3LEGhPQRzUAnFJbCPiVV5pxnhaPycJMR67sxm49VZ3whY",
  "key40": "4Q3QtojVtj7L1G5qnyUABxn8pDGmJJZtzjxLVK1PTKbDogQv9xoSgVtcYciRB8iXbq9iuRtMpZ9HAELWLc1uPntM",
  "key41": "2sTv93YaGZ3gYeUGFSDsYkvduaC3rJCar8Zc3wHGNXt566HVjTPVU7CmAtYBnE5ZjUnAdjAJ6ZwMkiEUMFCWNnvS",
  "key42": "29wU1LKazUZNK6pEqH45DHwK5CUDuiYY6NSzLbuDzcnb6dVoqKAg4YtJ9wfkxMmkuFrEBfu9S9SR5jWgxUcBXizt"
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
