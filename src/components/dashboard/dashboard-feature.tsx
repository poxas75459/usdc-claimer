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
    "44cexpMSxjEkj6jBB69J8mwqXqDyPk1xS9mPoKQrbBxVksVBPtAAQL7CQA3NwCxTm2MQ51PtPBqMEUtZLDHUsUfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FaNpFUi1hjApEQ6KfViQwstgnZ81nJb9Z86BsAmraTVRzJvKiWy3DQoEAMin3gAwShfNequBjUZKEcVd4vo3yzu",
  "key1": "55XGD6VT23uDtJcpffrtyc6BEvKJn6kxc1EHQQWRd4u5tnrk4Y7YYd6r6NgEeHupFgTJw8oWXpSjxzXwNpzHKwaY",
  "key2": "627gjV2eNnoMoXdGyAX3mMN4v5oGsnkWj5Rif533LhoUPk6BNj8z8zv6199Ur7nQbXN91CuXNdq9DCQgp8MzyNrQ",
  "key3": "4BkApJvhpZcuE8YigWER7XRwV3Cec8eL1r4bVUi9dGTzEr1Zw6NzLNKd3CSJ4xGuRS5ihw4iiom4QmxEfMwHRHFM",
  "key4": "4GnQEgw3f56mUo4wfzpcot83mQwmPvSgR2cLLiE17FhUdyKutgkUM91TWYY3yfivC2b8vuraeSWvfRf5eQd35rfY",
  "key5": "5rkF63UyezMjtgSgXc9tTUxCYag1ayWM3JTgsDGzbDPtDttGDg49CFUSGURGv8MqKx2kw5eb7UJ56DvtcjyJ14Sr",
  "key6": "4xswKK63k3MkQZEH9Er2LwaMbpVY4zPhPepBmv5eTCoYDRQqvBcuYh5JBdyJwuEDeEDmivCnW2M7x4tEc6hRh1iP",
  "key7": "37pfWuLYHWkUkJjVykv5QmneBR9crryqKWFkSev2p4zpuxH2vNBuHnK89HMuiPy8txCB2V3Qh5CQihinrML8wTc4",
  "key8": "3xtu173L1AaVQLKpNkk8FCvcuiyWfRxhMd2E8Um65GktJPrYsfKfFb4RPZgYhFcWedwRuWXw2Zy9GzdZCjKaSHZF",
  "key9": "2wWE4fjWcn8LgpPW1GEM6rczpVEdUuMUN9Ttp4xmacxfbweAPG11JcvrdNjbSdc21G2JS8EALPHucuw78AYNanfi",
  "key10": "2RPnDyVNb4rCN9fpLtVuifZHnegwqazgwpsaMmnM2brMRvBZPtQwNB45mnCtEHwf4JmDd9kkWbr6cr7SNsnWytz8",
  "key11": "BA1Fo3oyDMB6A9kjXPxfzmkSPaJKgPuvSN8qyx1ziH5gsCsL2q8oPUgrbvkx9pouFXyFccUKLd6Ds2Q3q4j5DFM",
  "key12": "2cTa7N6oCHy5kwLrHhTaJ68g17Eb5PdZAcoAzjtNNNfTwyCCmE7jh7h89pG7NWyVbnSJpkNg1wwdDY83cc4yzPCX",
  "key13": "2Bm4nKDtDcL8TiZxGycjPwBMySVoCcys8vdgZHTQzBJYDh8qwp5Ji6pu9RupoEnU7TtZmjsYJMqTuXRoCktQF175",
  "key14": "3KfGtAZU6nSCSYRPMqyP6DqndCz22fmStTKWj2xSThADQaunrPUyvFbMzj8SDf3NFHy9zqgXtrLv5sVMXyYXbit",
  "key15": "xVvoQwEsATkKgR7Vib9yvr5xzCbkLJSw89KMQnQ4niV6XZCxRvWv8ujpFAVpED9voWnqSfN3JCNUBAdkQbMDr2G",
  "key16": "52LZ5VQnfvu7aptDSfSve3V2LhgYQzAF1ERBjBKYC935Hz2mpf3qV3jKg49hgrmbrmn98DctBSM2s1DcgpESHyLn",
  "key17": "3T3jRjpn6TE4jaQc6ZT4rcc1XYAGyDsN6134rNK33XQ1poqTys3CRUAwUajrGt2RZmucfxVWgJGeMDnJSZwMJ7JZ",
  "key18": "5sSWZDYaySogqGVCiDBse4JvcsQc4mPPdyKyiNkFGxPeGBKHzYA1uZ1UcQsGfwzV9TX7gSM8N3T4TKnwSmuvBuQz",
  "key19": "2fLPKPWGdwYCVpoQu9vB5fQavFKxw3F12kzkVZnwgVq5wK2jUqtAo8wnGZePRV8VwTmwh3GLdcCmtiNZ4bwB1k3A",
  "key20": "2xXksfpzjskudxQdyWfN9rQTJiZ9DHSA94dRLB5W3FaJnrkjdjwB5ecdRMe8zr2xu26KRHmWuhvVBcXEF92GJSSN",
  "key21": "2CNKTPTEhZKtZB6kCqtQxeFiEyFYYAFJ6B6hzbwqTVpnZqd9QUiPSE95AjWQLxb9k8bh58ASrL2S25xTgNz398od",
  "key22": "2176tovkM4FGq5B36xX2XUcktaCzEjQCt7amMMKs8xyiD9zjnQHr5Lj8GfExSfxfTzsj8eFJD5d5v9pqUgfVVh6n",
  "key23": "KLS3HJaFiMGG5m7a9R5eXQp7PAMJz4SnZQbLcQKRQhQsjg5aw3aGDWgfxSPd725KAk9xjeWmtUzDjncE5Nfoyqr",
  "key24": "3YmD1BM3e65WQY37rLsAEj4Xk53NpbXKgLju2CTNkXs4wmTBtM3eNBYsnYHtBae2jPtUPjwhmB94AnXUvE1K1kWQ",
  "key25": "5k2eDkshRXSyXao5HKzVoHhV6GZ1rj4izLX3PpQVqbfoiJYtQzQRMS2c17SUBdWcg1d85xNVhCvS4ZSy8gVfjm34",
  "key26": "677GkHTfa3UmvJVA1NnCKSFw9arq2m1UKjkTzqmf4phe8Lpd6wKKwFqL7iCpfQBcuUpmRJkjULRye4qLPj7tuPpr",
  "key27": "2MudrgB5pYPa4k9b6LBxqSiTfuxEUf6SpMrELgJCzkvSQHH3Y6hJjDe1PsMdtvKkL2WXWyz3zZXyyjJ5r6YYbrg1",
  "key28": "W9DveP6rxJDKBS6AjCx2U165fKhP86pNEf9xv5eqgFDNHL6x1g7C4ss8cWipFMbnHb61vm6873vWC268GRpkRdz",
  "key29": "5YfgZvTE9NXd3LhXdS9mNH9MXXgH9gpiHbewE4oMNThVcFktfcqKoFyrUMpR9Q1KSQWGr6CHCYgadpUq9KdwACyN",
  "key30": "2iRxxLTh2KxumYVGiQVSRztWcJ3kMKJwpDNwMwXzcQjq7csCfdGMheCZrU8Gn9ZLdNMySLoYTqSsxMfv1Jwag1ur",
  "key31": "2SAPbHZmTfHiWwYNdV9SwzKRtRqMxJhSzt9V8DmQNCKSADsNJA4TGCmeCJ7Ec4UiavB9cUGTzZEU3E8mYp71sRMS",
  "key32": "3fkE6oLFsLWnZtVzerpJSj5S8hzE22i2ri3LLNLFWiF5fSJYabcQBZafvb8vuiVFwJuuE9zfWRHf4XBg3ovgPWkw",
  "key33": "5oZxwBXBHCceQ1cQo9AtfqcY5cRhbqYqTsyWSSfo9ZHjSXhWHe4Uezcs7nrwaADFJacQ6yYgnZfRc7LdRBRTqPcJ",
  "key34": "3X9F7qk4YBGwbSKmrWSW7HoJDRUrgsx5nP6T2UEMA15RTJsfkFb5ypxSZdqgbJouN4Pyhd85RFvQSdMxneCr4BjQ",
  "key35": "4TeBa3H4JmFTCC68Gf5qeqKCfw3J4NwxBLUgFcFxVu1495LP2vwRAHsZGSpDyqZa6H6m568yhu8P8KM8cCrXJpZb",
  "key36": "3qCtcvcJ9EmTnwxJ7xugVVDDX76ekKhDsX6wrHgKomgTeKkq2ngNDxnuFAEZCujbfZ2meGAXwQpDoMuRe3aWkfuE",
  "key37": "4hiqaFrA1fYcEAjkoLzRnnRBawtKJmdgcdRVwa7NoSBxE41BeuQf2R54oKq8CKEeW7wckbSR3hgBM3E2fiK8c5dw",
  "key38": "4zVyQN5JgWGRADeYWjmE65gZpSM2rXPNfbpv9fPKopRcd73aSED6D9scgRMqQA9MZD9X9dYuUG5MBQwnLCVpdLi1",
  "key39": "24nLWZjvaRSQx4BVsTDgGF2YwLx3ahYV4zXBaaU2GTPkdaNzABXXPJ3C8uiqAvNH2w7Z3zb1Pq9HuMiCFxYmLzNh",
  "key40": "4JBZHMigyDdqXAa9pBoehkTYVE5W36C1XVmqyzYbUnKc2WHYebCZBBVpDPkM8XnmH87WKygXxYEgAz6v4QgUb5y9",
  "key41": "5SDks8cDDDgcpxYPYiR3LDCFyCxeCpdXGeQfcoG4oi9d6rEZwdkZWG9W1cCnWD82GSFnNgRfEsWHhN6EUKzE2hC1",
  "key42": "5wnLUPBhXxr3oFDQsEYBfjkYq23vbtigBcEsk6fuF2CFuiJtrc5QuARXEGDsoVknhWR3uFicj2JNcXwrJCKjh9WF",
  "key43": "MWPyLjfSHpznSAm8bXyFD2SeqkckuxpYk6GdmU7SvT5P1VyoUscjHcrU8yGw51jocxMXaKrvtQkgkJnMEbfgcVy",
  "key44": "4W86KTA9Jo7tsuUuW7xxLosSdDhxxdF5YxzjZCMV15Na7883KVpC9yHWWtn3F7aSqSZYL5AvE5s6cewDgQJj56RU",
  "key45": "3XLxzCzcgqpghE2a5eZdhMWUdSiVZUzp3pGNxxuc8H8BGRbBU5ftjkKcEsec2PVAoraCQDfiYFcjo6PH4rLof15R",
  "key46": "1RDymYwE5HwYUaLhtHHHH6K5oTBkByTtytwDVgKLcPq4eQuekgvVsAZ7M7Y9FUGq4VMcZZQpcjUw2iezxp1i5L5"
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
