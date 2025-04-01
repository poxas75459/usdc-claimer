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
    "37gvaA4ZVBBmXCknvmh2gHxwfFJL5jF72ga4xRCrCJDo7yh1LiBU7s46B5RHghQh2QMAdccpPUL4vAKCLBwY7Xhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AbWzUd9moYdPHzhzwi128ByEzZqt1LxoZvCsis2WvAy135rFowyXxhKMxpRRAR8GMKo5S69kmSf2hzr9csSrAMA",
  "key1": "VNHuaPieBgJk49oiWcxuT3DR4MhWNifXjTgVCNhKH14DvqWRpy2C16jfs11TySk5ZtwmBRL5vj4bBZKqifLptMb",
  "key2": "4iV9hBh6dR6UvisYDvP3QRp7GK1MPwZdm4e6JgGQMjxi5ioiCnHQHskSptDx9dgrKPg1WZTyGEA65xzCvEpGWw5p",
  "key3": "2rafgXdYCAH2jRgp4aUk7pktHNkfmKGGteocDdkA35DBYR5SRANgNsoCeApRxr7bG5ykjgCX5YLBPY4yBxwPmTzf",
  "key4": "5qSYvFiCMjsAXXCFkgcnonqtQ1GtejcqQDa4wLSscSgQRYTCWPyskPzBXYZKdzYR1kd2zkHSEeqGcTnf4wsFzC9z",
  "key5": "3oKvFRfSaVD7dc6WF9VHscFY33fXmHgmqXS9sQXQnwsmumbNPmTmQvBcGhnBtkFcxSTZwMfEFm69S7eim7rYRXZj",
  "key6": "WU49HehVz2dYQWj8XgtHgbYQpVJiwNvpdbq4ccLbSKN2va4XpMRjPF1rQpPZWbACP4zF2xG7Zdv2s6mzmFTaD6Z",
  "key7": "2JJfq7FnxCfJh2ewGn6XkPQgWZe1SGfZFxUY5wcasF4rH6Qx8xcwPWSKhLKsaaa8tYMQM3JUSKV2rbj4E8BBEXdz",
  "key8": "2qu6RtkwxHLtAmcJSEX3oEUgFvNQsEUJnYZsbYqGdaVBoPuE2A2K3rTa7sweesgpNfYvrUEzWbAU9hRPSsn3KbbR",
  "key9": "62fuVmejZUoN9rk25yRx4H4RAHypQnhxyDSho8bYKXzfiRRYAfvzNfANc4yWZC6NUxf4cfGGduedYpFGD43ch4wo",
  "key10": "3sLUwPt6JhPswFVjYdxE8rxj4nPciNi3N9DxPrbqfWzDQ2MsDGJKTxUFsjMYBnmRcqPUfPbpo6spJDDZGaf7x3go",
  "key11": "oZzehSdnxyc3KspyqCRkaXjoDxfFcnsaKzGZcrthahqZDrfYN5tBtjWA87agnwDSqLr2P4g686M6dYBm3KSHFdC",
  "key12": "4nhhY1uM4sfKDM7WXC8KrKC3TpESf9jktpNYFcqKj9GavshcGXX2A2ZxvMw9nzTmHJjWr9VfKwNYvZDfUrL1mVhL",
  "key13": "2aca9cbvCjDbxWruyUGSzgZbVSrakax8sCL9Fewe8DuHrowW4tKqdjLVsHQN4E35QGAjnyeLQUsXssLMn5DzMv1w",
  "key14": "2sbFtjj65zLNgZUCmcgcudbANVPdJBC4KpU9rQW22conew7NvcRw954pnf54vCPey6JgEAHp8HakvU3APSPGVLjk",
  "key15": "2EFsTxK1hwZ4P5Bf4pmWFgB43WAJ1ZFgaHd1JrP6UJmcktuxhr1diFnJfVVV5UYbikoh6J22FGXuLNUsujNYZQM4",
  "key16": "3A6YsRxQQGyT2hZ9LGTxGfAkA1ZD8VvH7ZwwHJDy4AfNBdJrP3xKw5FUefCEb25szYBgVM39Eu5N3HJovzKX7LKr",
  "key17": "2W7fXoMPDTEJHVdKwd5Y2rK5KeLZoX7oTj7WUhqfhKZ6oruLvPY4VBAA83CN4wXDBRd46aka5B1JXoguhvuJ7xLF",
  "key18": "aCGif6TVdMskYUycdrtg82qMfCSA7nHQnUQGpYKMerKZidviGWmqqsenFz9uwAhXumF7mJt6Tg92QFrJWR6MBfL",
  "key19": "2vgmBKfdsPX2pPcs9XBNySgYQaWxki9R1qEnvMLyQEeBw3M8SdhzGC2Gs1g1geW25KDqpE1Z6fgCqigCGbrYRLM6",
  "key20": "5KL6zLMkzWDcqdxfTxs7vaVmopiV6yzneZUQNSRVPZGLMq8RDwT1GuQ77LorPeS8UfRmPmUCEVi5PsAfLZGXTRnm",
  "key21": "4xQGtkiYb3TzhoXiExXTzbhKqjfEYzfsoMvqhypc4Z5JSjmzvG7zn4ywadLstbYpbS4op4ymj1FuEoqcbCRtDdPS",
  "key22": "66rTiF86hXeNc7D8oQZ3weCgJRyfAUk9CHk5o8Tn1AvJDugDbVfDXmbPqheaZaoxMfQKVAjxp7FEVnrPeogfVkSu",
  "key23": "29bPaV62RF9Vz1KWGnGb7DM8LxmL4RjiK4JYzDW4iGk7QVxdZBASXfGgtThNV1LkUADn9AtqvwVNfzhUjDYUzwEq",
  "key24": "kgtKdCkEfTYKUKJSJNpafBL556xbecThM9tMR3rLhZ4BRUsMT759wuCjYtSRuqbK5ENPV3A4iw2T3ym4qFwFV3J",
  "key25": "5rwZhKL3vPvNRe6eViGTpwJ1wg6BjvzUDRSPqSTaTjumoNPv3xFFvP8nFTVG4oA5HeNFPipkMQsqYQwQAFtktCBY",
  "key26": "4Bm3igqonUSvT1p11tf8mw88tkh649m1ccsX4nmNxcjo85V7noDqGCHTuEXVRBKPS3WhLUs61xg6F9QRCuCBTdVA",
  "key27": "5bPsvXWZVAnemBEbqVWGovPY8Piv531AoNrWA5CY9A42dSF1KdCVxVHxMEPNJi5RQjfXdxTzsm2FVgveDSm16c9m",
  "key28": "5EQxwNE2YjZK72M67vkqUE6kKc1kf4iRdZaHD2cvmjht8L8kQVPRmyjuAGnNiD6spWn3X5aPhieJSnChxxZejLHn",
  "key29": "58zwb3cNNiu6oz74zUixYZ1XJbSd994bY8pDnZXJ8AdoQe1Nzt1rcpztDbskGiyi8vLGUmHeMwCp9nhkENPxj4HC",
  "key30": "4tMvCzgJGcCSDvGfHKsKi376YhAZTHPm2rTwfR1a9Xy83DKTKXAbfrWWbPLqGofTCKqhffgVBQGju6q7F4g1zMKz",
  "key31": "5PnCm2NZaCwzRePNji9XszLEuwd1aA6bXroja4dRhTH7wvAYmkbK5PbNcPvTnuXehRh3TUouxTBAJjmWKVaeU8J2",
  "key32": "5xcZTdE9BgtWzexDB4iKty7Lt6eyBkRAfHoLMR8eCU8AguEswSpGavZb9SSiQxbET2bKrpa2ApHNkH8sb2o8pAZa",
  "key33": "qE2SVUeBDWi98ao2DuQUpXayLQy6F4JHzPa9fCddSXDxeyrQtGghNbLu2xyYXTkpbt22XCFZeXBYdrLkUGVGFjQ",
  "key34": "n8gBtFAW59kYqn9tfUbbxtiEPDNXzUKqxwS36yb4T2BUusvsNRnEZeGnSsHcDcsSzwf9rFsAU613zuQa66CdQEF",
  "key35": "3YPwQn6ipg5GYfMsVpwZZbNoLgT5bTdwPHensFUxEqSSfg9auNg7rP3vcbiwTAzFiedijMj3DRdPcZ8dQrfaWMJE",
  "key36": "4KfehL3qw9Rmis9Nu7x896QjQcAwbMiFpTJCzrYzms2go7PQdWtRxqTaCfT8vbnQaUTvMsgxEz1vNeQzX9DMd3Sw"
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
