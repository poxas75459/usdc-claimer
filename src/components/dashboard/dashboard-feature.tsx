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
    "2iwyaGgtgzoKJqZS7Xqt5ebsgQWYCKYh2SYCvoCh1tRp2rS4eBkEDossQUxyysDCvq3dEBLHpv9PsBkMdPRPhFku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h76AYJmMiduim8kjngCMAcQP35kSFRroH5ucdvzPG1CHyUrLiCDkxBN3nEJvYYkpDbYdJzi6iFaxMZennPA1GZs",
  "key1": "66VBSdcpGd7Hrfe3tui4KL3ciVs7pPp9KBh15kQVZiPcUf4fCd5zRV4G2nhB6XjeHKNyV7iMPFBadbE2AUjCDQaz",
  "key2": "3aj84eL5Mya1zz3buFyP6EGYyTfqCw73hhP6dD66D251UeYHLifgFWFDkaEECDDCkB6HceNdiugS167TrDF1ApsL",
  "key3": "2gmYQSsBLMTNgjLaW44Y1SjX6w2MY6WeQxKm1CrHmKRsQiZyrjcqsxsWLdzQHPEo3k5aY3YcCHsyoguGiew9ETQu",
  "key4": "23qLyDi1urDHBx8EeKDnqemgLSNNmsqFquDGGfTGS7ezKQLqXuxK2DmUVoSQXdjeH19bbPrBwzvNEbevGyHy8rta",
  "key5": "2RFib2RPKQBJUSyZaBp59JDobYVojbPn1USP8ixuknLGmJtUV2RozZ9mh1WuY3nGbeZs5cG3buhrjmT9rNMteuds",
  "key6": "3ksV5eUbKbLTcUbi6eqJhUDtPrXtqHbcUb2iHWRe2qYwsLUjesvnDRVf9iqPkLxb1h84w7ZodvZHoUY1oUtyQTZ2",
  "key7": "4UyoNBRR4cDeyTCELh1vFsYqFfGH3urx1wZqBTbTeFtSATbze7HJxptWs7mddNtJjCNKDZrBRXcr3rNDjxZjYecL",
  "key8": "2CGh4rPKpiCGEEYtgdRzGrWmcAemn1DurpVe5P9HwtH9xFtSjxpNtqevepZMiXPGKWM2PYGgqgs24JqtAGV2T5pz",
  "key9": "4d7EZp6YfAzr81USGNhbbR2wp5Y2a4WKDfBEbj7f8QLVYsn4eTcewHAGLsod52Jngbtjy47bi5ckaUmMSHR1rfSB",
  "key10": "5jCLuwHZJ1NBkBkAX8sSrJJnYmx9AHTqpT83NneZjS1QsCDQGk9zmyf78zwjrB7y4zq1d746D3BWpX8xUuciiocn",
  "key11": "4yGP7wN5tmpihKHU5oudUcx7QoDD23B1yprHTn8BNHBETQgcmtXCrfFutYUeQBK5assMCZk2noSGhDC7QDLxvnUn",
  "key12": "4Tz1VedTjfmNre3FjWQY3awB9NdrX3FW9xL3ZAQBnzcv5HtiyLTYeZndzct5L5LpzGMPKa1ek4cSMRxk1yQHpx6a",
  "key13": "31wXzY9jYumviZ88tr5PKqhPNy82HZidJBygZB88LJpGroFyzh5vbDFCh4LQqBhPTrzY8b3mQp1w1L59RXJdt7xd",
  "key14": "2odn56f7djNJg6ZmQfm2kxdXHFjSFh6A9sFQa8DpZB3mPqgNUTCPup5qjxzGWJzpG54Uy1b4QjcFdz5FBvEbr5LH",
  "key15": "3Rkw3zuwinqowbrHj1k52sq22GrBeF9RF8UfM4sG9mBWNnguq7f8T4H7ysfc6idYPba4eQQWNiaFBbgLVsUZK3FE",
  "key16": "viuZYuS1YKMAY1WtVKgaVfi3Zw2zL1C3MzWPmho2HAaTECiT2jZm6H6NA4AqPhLxNNwnHPpsnWpQ1xbffJphbEN",
  "key17": "2S6jK5U3xtmFcKyg9XRHYFJWLF3Y5euu2C76zCZkgg2Kc47ayiSyvpyyfy7MkSTRyv5eGfs6FnANrnE1U2tRPKGK",
  "key18": "2CrMoAVPJviLTk9d6y6XaxH4eXKiJzTi9A4FmbsG1PKBNbsKVtoW9k2q5BDcpFuSafQb8udAe44d1atVD88QevXE",
  "key19": "5h55quKmtqtHT5rKZDnEftw2jNfojfcBFByTN5ZYzUaft9rfJyS8MXP1Mvv4RxmNFpbm9j3rZY5rc8GTCVVqXX23",
  "key20": "2YuQHwC93tLoYZepa7gBPAhXDvJUfxasSqWxPYhDaQuzCA7G23yXppVpBgPsPZ9ZBBDCzn2N4jKjZUAW77zfpMhm",
  "key21": "3qscxQGcVVzc5X4pVGuPgsCsuKJuB6112isfN2MNmLDhjNuefw4AgC9TczmbPqps6Ug8U7kcPEk5AtmCaYrWT1nV",
  "key22": "hTwrHcoCJtRqUdz4v2FjbbVk6a1a5qtymZLy2tScV46FKyjAmfN4dq7ccdwas5bgPrKtcYZQptj9J2S5XafcimU",
  "key23": "55dLVyPwd6iLiFFUPNFZLCYxXz6oN8U6MA3wH1gbBr1nZ36SK3CDXNqdrs9fB2XWdDWs3WTkLGqSNbn6H7rWuu6X",
  "key24": "5zBEQbdX3JVw9L4NgVmAb9Hf2wKBNf54imBygJj5tpEvYFWW7bVfY5SKJuPUVtQjLJf7DrpoToTaAJ49mKkZ1JYk",
  "key25": "4LdirLQYfAHDLM5ebhA9CgW6RStfBzqPvsYtehEneEPxioqPkTm38yRApewF8Bp8nCEZyuY9bqGyUc8MdxXiFmWe",
  "key26": "23Z7FR4pEvqicbqUVCDhFD3mSjLCN3SYciVDhT5L6tGf7yiPTx3sJiBXFa5DPuzagSN3mEESJaHXST7KLmWwuLYw",
  "key27": "2w9rVPfmHM72rDmogt9sw5sbWWnwRCW4T1N68McQQmX1rkB6aaY6ex1sNKKrqPxgX8geGLqUBmV56eKTh61PdPww",
  "key28": "46ou9FsXuDvNGsZfhyPVXiXssup1V6cfDRgBBoEYsMnneuaSyFZVKU7ZYVeMvEPRywRknNs64amAEiqcGM92EmEY",
  "key29": "3axgkknS3mRiLkk7xXUA927RgWb4vo3QraLFaRMpCBwYwg3w5RtjLPRsdYgs8v3VNsGoZ2HSweTk3ioucGthNr1W",
  "key30": "4rUSU4cqBqyzeWCEwtXTPp8rEMgoJfYx9Gwq7Tm4vY9BFH8mUH5Newbqxa165YSHwLPnontRn8g9fuegaxu8uT2A",
  "key31": "3S6AGvc5SX8SMEootTfY1i8kH1gYEqdb24B6Df48zjmaV5x4kxWQEQgEgdT3qjmEw5UB3essH29pB49wySgyGQTy",
  "key32": "5k9KxHbMecNqWtmavWRsBDdT6gnecxdioQm91VLpUGvzhP3ZJAZoR5ta1wN2JU21TU1rraTbZiCMdmEH7XuaBY1A",
  "key33": "4mrJR49fTCiP7qxjxaT3nwK6S3nDHhURbd3JGTivqYUyqKYUMhj5wkZxpzCy3DFYn1QN6PUemoT5CaJRgWvgMw99",
  "key34": "57Du6ysmik2gWXKyurr7taZ1GqBQHLj3SwNUq5jspYDkG4iDgNqKrp2gC8tbemK3VFFyXEhAtaXXTNLSRrGPVWB2",
  "key35": "4TuzbtMqT1g4ZcWT721ocA7jqTVWwTrBPv6MFokx1Gg4XCj4Uuxv69GLsrY8QkUpK6gfj8nbJmxfVtizLNyVUnk5",
  "key36": "WTfits9hM3Yr9Pd8tKVNK1fDWZg9bwYyCLDqvzMG4rPconbr1myb6VZbA5jz88GSZd9i6G4YebdnBsVySpZTzQf",
  "key37": "33CS5mwQoS4fpUVnQmo1akZHc9GryiqUkFzqddnHboCziCSan7wtdsQQXJcXmG1xeMfyTeEJBcZbdZWHBoR6wNnB",
  "key38": "3ozVBmszLbwj2ftdhiRUZ8GQ5FzuBsgf5ioUfTQXu3jDU9PQE2uYp3E3ZTJPRUUHkaTRYhXvREtzuEtmC6FoDiU6",
  "key39": "668Z6ew2TtcDHWowidadm5iRfeJDEwMkyWPU9GDmLqBCbWhEZ35dqxyt47xrXr9HYtwsW99fAq7JUhGFYMHbaqnd"
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
