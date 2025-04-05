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
    "4qukjgfWeiwaSvfoT7DNwf5rxjeHCTX1YMGHRQA46pBds3tGNsHDoEtWnn3C3nQ7xnmcQ94bRXWefGDj843pgqUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q8QhAEb4U12n1VcP7AejgagyuDy4XrW2zYCuPy5CAjc4VrWNBYvwH6Ax34pUXvfPyM47U7dvkZ3ga5FmhTRzjr8",
  "key1": "4bmwL7St2oBrpKqrX1KAtNkMnvtcNBhAGHd917gYW75XkEH5QupiUx57uitvYT6tTd55aE9cULCvPNXdNf4nxaa8",
  "key2": "2vUdomNyTHmvZDnYeJtd2aAzzR8ihmHL27431pYFnBEQYvctoBPd2EA2smYx7HjB4jS2VNNJUdf1BsyMVJcFo3Ds",
  "key3": "yDrRVKg4PJAbxDQ415FxcYYb4ztYq4FGom2GdwjeZgNNQEDR9QSVDpGjmh4mJ6HgD2yPN77xHd2BcTDzvfGsXLy",
  "key4": "CdEXPES1UGBuqXTE8YMtRbXxAgURTN9dxzJSsi61dWmA2zuuNdAPjgqd21dGwZrBpQu49t4vL4rSF23fPzvnfdL",
  "key5": "2mwgq1dA2W1XGqMw2yvk76a7FxEvjdqZkhg6hzCMtefJx8zoZAcM6cZugNZ1SiN6QY4QufJ4K8Ff1NpnWUdvfVF1",
  "key6": "3tsHuvR7TfxnQ5VXajUuuYqvgoL7f9m7S4REgw9jgEjWjCq4iUGSA8CGafUqgpmws88crfjHy2qjfC8D6F3VyGtZ",
  "key7": "38wxJXN6M3tjitVrNmwhbb738uFqsi7JPMnmg2F34g2tZZeFmoYRcHyqiMdtR6Pei8aT2fhrLtf84AxBiZdXWoi1",
  "key8": "33ePh8JRUJ4wtq4j9rrvGZr9Wh5AT6JAYuLmkz2f7P9KRjLcXsCEwU8uZAqUogkHfqZrD7aJQvPTZZmda3NJLtPE",
  "key9": "2RnGvHE7YD5fjL51nGUA9C3UWeqC6MR4NWJBkhuTnhhsP7sp9gKnjwz7cFTmbuZtnJn4Unx4hdaG23dVFqanZS1v",
  "key10": "5eNypfjjMbNYb2eKtfRZUFSErtJ2MiZY85b5xCh32t9T3CVBqbSYKKxQLFJhgV7cPqRAjz7QEBLWykFesQ6FCrj6",
  "key11": "27JkWmpmUXq6q18kiLed8aeHdSes1sBN3xo66QtqMkax9SqL1AtVv7sEJecs56zDLEWxxacnG8BZ12Er8n6gAMfW",
  "key12": "2bHrJ4RwtikcVjtGhNL5SRiW8dYYrCoXnWGGasHeoNKkXg5dgk8vAbz93VtkSMTjjeimzx4wVnkE4A2TZvAJxPCt",
  "key13": "4RCvBi2sHES5A3K2sAgMVsRcUPurhJVMrhsuyW4Yi4jozsCyWcZDoCTvWiRf736xz6RDQmpngQVdSmo23bvmQYQE",
  "key14": "gyUYAUJGb5KvKNZByiDRWdWcmHm7uWAMN9oy1U9FF48sBt7aYue8TRCBQn4L6Eypm4kb8ZB3sZhnxzmYwGQv3Tv",
  "key15": "3PMxQTgHdvfsp5KJZSfBNYQNXfRLfpfQDEN1vHtym4DkcXuTZsvNuTRZXY34Y94mGQgr4ZJWMa3jnEL77M52HUJJ",
  "key16": "5aEQRgLcrMAPNnEjNEAFf89XbK7MGcRWgwx8u3KKqjgjmWpUXJvZJEgL3SWpS5xgqN5H448mHcYebkStF9jmMYEs",
  "key17": "4oHoiWBdNGNrq5srMhiWPgUFGMEpPRJTMcdF9nkhWr2do13uzF6JW2Hr9N9VAHMsyHXXZMWE1yac3abhGZmTBPfY",
  "key18": "25n9gTo5AfjM1vtWT6i4z9zj5p1ot5EAeEfqZCzKvceaoP1C4d72fBYvQmyzgPMWA99euq8nV4nRdtET5Rgj8njw",
  "key19": "hUVuKCg6afEVDzTwLvUTqpuwxqLhstU7rM9ssh5gei9KwU4kpYWvAztwEGUwzmUuvJ17zPUmwSv9u33wWrix8eZ",
  "key20": "aBJ4UahDUP8sf9Vjm9ezm5LbiWqhcQDPERvGBGf6ro9bcvf376PSgBWpMmY5SL4LJWDcNUqZ72eFUae9d2rGxEB",
  "key21": "TDdoG6wfQ8AH2jGqnwZrBkYHP8UE8E2NpL98Ge96x7PmZVWQWxpxE6ZSDi6ArGotXCa6uHEKrSztuizeUEooLGF",
  "key22": "5dCUAA5sJgFkKSCVpxS9mR8KZzwkhM9KAVZUcq7ND6VfohbJ4hsUzdV3H1h5ociowv5Usma3kRbNXSAYjj7Gaunj",
  "key23": "DgwNi49dXQT83qe7nVk8zgpN4w7JCviKbAYP2GoB3smnAiC2YdnDsNmE8fgPXKruQybcM3TJeyMrBC2QY4cQjDg",
  "key24": "3j8gmGNhN38AqUyG5NBNRkiMbYCpNKnaMuT8ggRkzx9ae5dqVeka5Fv7J526UsgzRRwpusVvLg9QHCTYg7kyJP5D",
  "key25": "GZFhYRnfXRuLNs7ZoxyQB2csQfXaL2arpkxy86pFGCvrtDnnDWqxBoydE2LkK3r7EhgN4th7KK2y3Mf73ASiESu",
  "key26": "3CvTGTmFnasp82du7cLe6AxzyKN59yNsLAMYBU1VeFibr58SqiergV5mh2aCE4Mcmczc3JXf4rBoiQTWGdWWDtda",
  "key27": "4jEBSBm7mDHVhfnXJcYERLgKPKp2PxBvE8TatghEJdwp2wT3LyL9kwBFaHMXWAXG8QaTAu6FT19mi5LNzs6ctphu",
  "key28": "62TYvNsfKuyf1MNmyCe8Szyp42SHuaWXJoGXQptUP69Gd3gLgksLB9UnYoyBzZjUKatxM2Y47H1XxYDy3241dCgB",
  "key29": "2b1HfDJsGZyQDPn19BCYuZdonDE25q5Wn6LAKyAZEuWEiqfi4F66oinP85tk4t5CyhGkaq9gxAwNqZcvD6LKczns",
  "key30": "1xYY4YGNLynw4pT7vXrPMuAzgKGjkxA5UgS3VK1T5Xbyxz17F3a4Gj2MMpDMPAdakFD15eoP1DzMHPK7VAntd1i",
  "key31": "4aYhqUi63kX3myGGMKdLwrXVaAseL4gvGtSdVrDKcEco2t2iruKraSHw3ehNx7wESRwyefxtox6kSWmuv31BD4B3",
  "key32": "5x9Drzdh3cUxtT8wpM5LmGZHuk4m7jcCs2JQKSmwXrt5b36YVgGafxnkfEwPPHpjQf62rSF2h4tucpn9WeKwXpD5",
  "key33": "5s651Gujp9RVQbFaUHXgdMQyRUPfzckiKZeSwFrvk1LUSMnF12XBuEY8acDMgxW3bna6cFCfb59Ka3kv6fRWNZ82",
  "key34": "3QUKKNFcPpqBk9y2bi9uo48zsMMYSVhXjTFDzpoxCDoyLU3LUMHQrioUbMwyF6mM8rjcUaoPp7hRsYu6YJugjuxU",
  "key35": "5B1Yjp7bD3JuptWKz1QzFtVkzfiLYMNrDDoM5BT6eUQCbgCNEAX78tTYxmn4jCRMawiaL85RDBLayzXHuJ3wMseA",
  "key36": "3UbJ4xWSvsT65gNXnN9tZg18ypw3VuRgdRcgePvuwo86e7piFw52Gs3rMuqaWt9gyqJCsWwXKD2AQQ8dUDZ43J21",
  "key37": "4N5JSm5q7pqrfuVrxvRani62mYoPeiDwQ8hjNd3gcKkERMAwy3gJ26Js7aACnUREsbAAvASiLLxE6vQb8vPGewgK",
  "key38": "4eG2B9BrCC1ia1ZFSJpHQE33HrZ7bnKq5t7bDrs3MLNwwCLFAu6XSA8oaLdjMZRaG3rHPnawT6B5ABAmg8tunHig",
  "key39": "5rP3odhXKPLhdjmszWGS9bFe42m6HtSs8iDNohZbncyfoSRV82YYSUdTH2XHrfdV8QxFtaotfbSzFDXswHzHxfte",
  "key40": "cnrtr9iBEhUSUWAWotJAqfK8hmsnvsQJM78S95ES1zbWN8X1K7GCL7ava8UMq9ZcKTyYrreVcrFXhr2cTUNZfWo",
  "key41": "3o4sygBMuuKaDvkayGHe9z1WzLoMJNRRX8SxBfCzeX4FQqD1obmiNYUfh4m4qm9n8rGo4cixhSqHGazjbStziZAa",
  "key42": "3pkZauu4rWKbheNTHYbpiCtWivTHht6ZQebsmJrmE1H9ezMGbeyybiSLz5VK73QjYPH4BtsvSNNwE5vgUKVsw3hz",
  "key43": "4aUAAw8hFiXS5KWWrscZb3WDmcFknguhqmAMSiM6fLrcX9ZScwLpti8oLPKTxxtsnJJ5kd2v5KQPYPEnVnXkKFNJ",
  "key44": "2bs75w7PeunWHj7qZKEKK15oMiBS4wiCJSpjgkoUjMds8Wns8WnA9jnpVHtdjnxQSkeS6jnQv87kW4J48RwsnFLh",
  "key45": "vWjR53YuF185rbFr15AkxEvZseYk3cxhLhSCsH6rG7o5WFY7kiN5dWJu6e2zZ9vgac68XMh4H1egPscE3paXRg3",
  "key46": "2SJg3UBa34p371CtfdmaRtzkmFYFrYCY39WVzw2VLza9EQfCqWZzk1pHj5B5Tbvy7R19QAiwQSAsCJgqitU39NUZ",
  "key47": "4QLUgpqVazdQnQ4XvdXGdHscHEirptjeuZgvePH9ehwET1BjaXEPcay5yWDdfT1J8TCyngkGUia388mX6qnFJ16V",
  "key48": "32zAP4YZDzB9xJfabgdjyYMQZLBeJgmk9NyrtiQHTwD5US5qScZrBKGAVFa6hepNNi8Upzgrb4hDaipFS5mv4qj2",
  "key49": "4fwX3KnQCncc9LzKAibDd6nfffcLsdTgeRCuvdbVSLtmXEQh8VqGHGZuDu8ASEWHjh5Rmi5mYqfYgAzJCc4bcRyE"
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
