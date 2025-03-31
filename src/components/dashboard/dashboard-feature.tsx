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
    "5aXQwVAxRtAjj3xTZmzivwvzGxe1rousQMt9uiC5rG1wH8byP9oRwfnvvtbhyxugnrFuY3pXS5u5oPk28fRpkxrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WtvnwiimqJDdr3thhjojwiV6Lb7B833RHhD6ho6gyBuXvsF8adc7CQwpETXEzUPD8hfgPwwumtXUNpCH6gtFACx",
  "key1": "2cQPV6RjXgvm98MMz7BfGxrdh2kEJj6FrnrYMBFxqS27pJrtdsw9HKyygfj7APj4iNW3sdVMoTvNnfwCZifUcnaw",
  "key2": "4ypDtjAggfdFYZbGhZPq4Et8skLTJyebSSUixgckM2saRVyp4CuLKtKc2J54hZzoiEwXWmwo9JiazFAnNiqYS6pk",
  "key3": "4ha8aAE6TEjaV6Va5fhz5WnAKHnDNM6xiT7JX1Kec7o5pgZT9NTeq8VaKoL4E7CLAfo8vbfCtwDcpo6tgAqqdt7Y",
  "key4": "3YgB9pepAytjkeQNgPxxvQxrGVXeHiJnQfoMnbQHWWzerGKaqjnj9Wnd9cjaAUyqQ5uyinNBGrV5GVWiZ66EJEHE",
  "key5": "51JCVT9NEArRXJVFMuvL2fP5H9ko6GRYhRnGm8WuCnAkviaFchUnBgjmFaHG15sevrEjfssaeWsDw3pAg6W7v5pn",
  "key6": "5yJ2YkSWeg1eTDwrRRAjmEpX9qDWXBDCNJA4GYeTJCSsJbBbsfeswmuikexf9tG11ApzHH35rfBm5TYyG439g24M",
  "key7": "3wNYPXpnvYwLtp3ibRHhFwfmL133yKvx6ibXR4SKgQw52b5jepctdkCh4WtXvmY5Bdce1yKxUYc3pRSi5jZiy35V",
  "key8": "5z55xH98DuYPhtnRZ3ox4JzGfqCGpkKGJs42qa81hKXSXdaxaQy5gakB5kEYugbJjUtC9vZWV4DRALiLnUHgZPDL",
  "key9": "3RDkoE1cWtFJDv6SitdQNVyobtqhMpkCoW9g69vCSWK6ErnCmZ8yh8oood6TPQ6ubVuVXzgNLKSeqfozyueTvamA",
  "key10": "eruSidAA9Q9i2nBquYBKjpkCcqYUpsHawgG37cw4euW55YtjMEYKr4UAugQm4PhAMiwphTVhP8YXBuD518YQYgf",
  "key11": "4dqBEBkvtj1MxUeWWrJgUnmT5axKvQf4QJ6Wkkdn6fBMakKNW8psD6TDThJjeZVBBCCLEXXwBGNFh2CEpxJwuZk1",
  "key12": "545SZw5mS5FZ5SCHPRjxu9rPoJWrMe67SZjuTm3xnCg12KLQQrZGdZfcQaszwkyzn234pFupu86jTMoC9SqSzRLS",
  "key13": "z1tdw5Y2TJjKnshunLSg6M81Whz5NcqSCWhCNQWxTHNejnaBVBfHDs48po1bmBhTq96AEQXs1jPG5vGmieBkSav",
  "key14": "5b2UGXGBVwQNUfhaWaPneM4N4Ra3Fu8794btNsH1DthXd3aUKNnmrjr3XNhgqc19mX7zvBRRbvz6gpRwVmxQiy2A",
  "key15": "3B2DyZcD9caooBfdhnS4LjgjCm7H7AJrnkuC65f24fjbSCSk5QcrGmD9oCPUSW4SvgsogiTyaj3jgUSQWhLD3Kgf",
  "key16": "4SCbnkUU1Cq4NLpuehbQM5rHuSxU4fUWN2Zu3PK4Ku4JJGbgf6zvswKSAmd58wqmxDsUj9GWGcyt57gCTcpPvnrc",
  "key17": "CqAd6Xetz8EcP2VPQ7kinVtNZr9ZwPFGRdtM9eyswwwv6FAi5qz3gcvbpjTYoA8PnxY2jh2UwKcuZ3dR736s5cw",
  "key18": "2W6NZ7zK91UVbMn2osF5Q6FbETjNTgNSKDgNc2KUPR54Z7zxaCDyZbZq4iKojL9uyCVfuDUtVT9iu2ETiu4Tmdku",
  "key19": "4ZtKyAoB7pStUP9XRQUS8YemwaPpFq2tdfkPhHtXFogGsH86BoFtsdsdJ3xMG9VrHfSF7SMrgarKCi3fHZu9XMFe",
  "key20": "4ZRqfSygRX4dSD76bP2VTMRejSe9kU3Wq5sVia5g8scmfFVUKev91AjSdZtn7Z855YgR5HqwrrGtmDsSHFeTdnBH",
  "key21": "3mdZEnMhjhgUrJXFQtMPNee6SyVQE7XWEaC6NJ9H6CQTJU7jpYV6xod1o2yBD89eNxSYVorrKNcCNmibPD6DTDSL",
  "key22": "645YB32PEfVz6Mmg2AqKWvzA2U9L8SCq4YjrwTJFanKHxr22qeupLJm4qpTzcAoKuADueTm3CnZr2fZbd4NrgC5v",
  "key23": "4YEXrr9stoFHFEvnKKKnPWqCNVMsMYGpHwpwdAgYHbBc4wc89WTXh5EbfdoNWJTSpRZTCfTUCdMcn5XVNQ8uKFeh",
  "key24": "4FUUsd7rtjKkTqGXgKMDJEac5jVpTmiT9CtvqZhi22dUofvmuyM4UYfz5mkDxeD3mRkYS54XPQ88Sb2GRwKaE3eh",
  "key25": "JQXxLRJNXtJ8H7m8DBSZfad9KAHzWm4qU481XuRdTXi9ZbhEZELeaj4wVp3pBYV8YpgMQJXpqdiP1nvpcN3XkGu",
  "key26": "3eiGQRju22DWFZDnDUZ42Nx6BtNhzdq5J7VnYW5iMh4bJ8QcW77CsUGv3dZVc4vnTASqmKtzmuUeJ3mL23oguSim",
  "key27": "2TwNFvT4kdB8PvtonPqbVdHU1jqkh6MwDxbc32otyYcBKYzcVu1ATWNsdUDuYVHfUkQNFoQXgvk4cuN1hTMXN1qc",
  "key28": "4Squy8gpqRwQNWQRCaBXAo13A5imt2Y2mke5xLiXFDpNmDqmkuEdYcyoscKzWJV6b2dWNgoK75v5rMZuJwELBxN9",
  "key29": "53gJ1WgwbeUa1BoMhSMVHsKSBRGPjPfBKFMPs5gEZRPaCVVCXLvmi7MGrSQ48TBQxndcr6eeWPgmLwd36PywL7WS",
  "key30": "3as75tzbeSTkxJEZMzJmk64JyZJdKRTWeqbX91oUrh3nXRN9Csj7W66MDQ9mRHkjGvUJVwyEfUmEiS3xL7zGfRaq",
  "key31": "2c42kQqqwNFDmoAhykadMamAQEY2Wq73vHFFPpbVE2Gr8pSRUMjADp8inFYYghaUVouwDcuzLtaG9jHA8vQteUF3",
  "key32": "3LgYCWG1mUCovabyJHUau97xmbXQpH2mPsJv8ACuxWRDStBGS34XbmHhx7mFKzzV6PDxv94vWiPXGqDHxTf2csHz",
  "key33": "3rBhDGxwUrSYxY647EVLH4tkX9yWnDmZKqLthyiduiUvgsWbCX5A8Ug9Jx6RVhQebQSAhZptPcztSkvQsJG1vZYa",
  "key34": "EsK69SY9dyT1g49CJiKic6vTvqTGZfRHdQU373DtZhiCR76FEbSH1LyZ46uZ1Di2gn2DArPzL5VtvnD66UrdNUM",
  "key35": "5HdeUeMGXRA2cfLtyabCzcWztXKuaTTyTnotQAhD9TPEAoDrWvEjq8kwpeMuHssYgwsCMtE5rCaZLJ181MDJWTzv",
  "key36": "5a6SU6RUabyiwY9SLVkPoTUtoM1ndfesZMb1VPsKuPLzZLLYxGaED5y79ZgB81sQZqxXnxEtbREafUntM1vq3uyM",
  "key37": "5dY9JzWFAaBLsxtbzyfegTHkRAWeAdEZF16wsKf1hsS6LsXixmjfdzF26TAj4RBtiRM4KN3zidwd52STdYD7kmJa",
  "key38": "QUwX8tM21Uh46AagUfQyFR73GVNMkmaqo9Ghysdqb9pVAd6e6kREBiWswLQCuMNGnbknk1u8GgcNTVcXtC8nBkt",
  "key39": "5o957KsQDTUi4Q7enga3pbWfJDcK6hoMt3bRWivqdthUR7kMCp6YjDdxvfs2cdKsqUfR7y876Ypy9uX79JN9y6AF",
  "key40": "4Aq12v9nr1w1Ktkx5LfcAj8M877W9s5byBMnrXdgGNAkZQDxLB5a7YntEXBfPUCSbk3ePgF5Yn46RNFRFtqEGMfY",
  "key41": "37FqAMcRL6W4FijT4ZbDr3iYgByb6N2LKTbZ6ZmWygGwXfVMqd9rMXE67Y8UALpAWu7RB7ZJPDo8A4i2xCvUYkTJ",
  "key42": "4HHEy1ivQRgMu5RVbxekFmXc4MncPb9oqSFVFryJKZHAVa4YakHGcHjkSjeheN2MdcD8kPvbYbcPkKAgjFVCB2ER",
  "key43": "2Eqabd7SbwkTxjnfQ1iUhEPHers5JZ4R3WkHe2UioHYthM1aMrxuwmF72YhLnhhAoJ5MYFwdRS2fgWCfJYcXKfZK",
  "key44": "2czoPQd6Xf4Fxw539Pb5zCTg47XKvACBjbteoKavAgCR6o29KR96csgERv6eFzDNr7YghbZzXRrTb8x7GdCWspHS",
  "key45": "hsATNZNMAoTCVKFfPNJiVWoZgEqCwzAfxKPzeKCQTFAJm5Hmgvbot1shxX1ZriYp3DRdgSB5uhvatTqGZP7SKcC"
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
