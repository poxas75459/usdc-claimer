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
    "3R97M5BBsjVw9fMSyCXsBf2MPgBLS6wm8CWFE1aADsiaYaudDqmh1ZfjjyVZupMrcNUKic3mkw4cLedSH2oG6vAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NY1dqvdp2TEvoAHWvsjTUpLuuTekfJHNKNk8JXke3vgwEF9mJdaUjpcNp1YLHRQNiogYJRQKJ9isbDXq1buCvun",
  "key1": "539dx1zciEdkMd3wDLdYiuKUecr8PuxFha4ffSR89BqUrdXdLF8cxfUVMY1qS9BSwkZZNAfWpzTWiu1RpvuStUhY",
  "key2": "3quKAGs1DhTh6Evrc4oeDF1KAqYxZQs1gX3XQaaBzQDvHhj4pANtafSuzG8q5xeE2JJzaFB3mAb4Z2tmcNpV9aCH",
  "key3": "47yJJTgxQdSgDyRpNmkafFYhXQp4HFJ2N8eGCmjJW98yeLvBvXhkA7oibv2boi9eMHxoiRevqVhzy4WUWDW3ZMn2",
  "key4": "4qLRWhJEKU3jTUECRBUtfDnz1uhSHW6PqdqYTyjDYcenaLTPUktn2agPgpyVU8zU7HtqtSgAGdy9bF8tisrAxJBo",
  "key5": "4bYS8oirzb2xAPQXABo3ufhAUUrZBeDRwh4LN5MasyUXpS4QEYqGYEB5HsL2YJGmf3SH4ZKPfJS3hT7Vf14jtDdu",
  "key6": "5YoiucN2foPHGYMkuMr3jM3UKer4vxuienod5KLC254mUq8PPPQhM4iMvrVidgGmDTKSuVYejuwcGRYXAtvNsyvf",
  "key7": "33U2gBfPRrucSsi72foZURqv9CY1fA8Zv2xeBRAh6M532BUSLAQrauGs1CyWNSbdZv7LK1TTFxjsyNJqXnJZN9MX",
  "key8": "58cuj8VFtCkpj7bajR9NneRTMe4CDzzxt2ov3b5iGKQKLZhV5Coq4N6JEACrv6TrxqXdgFJZpa3QWRzr6dA89TrB",
  "key9": "3KasCJHXgDyk3DkSQMaJBD1RFHqYsVwzXUbzXJnFbWvcFpyFKJCPyyMHyKjLwfNzSD5JhAad7nmY9GAjv2Y38Zut",
  "key10": "4gqe9uBTKPdYEiQayrFaPcjCNbuo8ZfMkzivMDSRxgkZcCEVvTCHPUsj5WfWXskCXwGKj7haMyjhXPGxoTeiJH14",
  "key11": "YRhy177ddASgRdTgKgYrvUjkoTHU5ASNXocDXywwxDqeWCs1aSH67oiyitNuWX1RsHVVsRq7cnkQ3Zmn178jqHX",
  "key12": "2NnYTxQgCmt3ZnQzmXmtyzwN6Prb7xQc7M89ZX3HPf5KVErU5EL9zHSDF2fCYgVT3k58nJHjAcY3MAyP4GUPcJfN",
  "key13": "3krjmSvLDYWh3Cunh1pNEcRG4Qh3aWXcomaJa28VWN1ffxC5APXgEAmBgLJK7sKvUPai7J9hDPyLmH2QThfaSQXK",
  "key14": "5Ddp6VRyekB2Z2kgwjDuyJQRrp3arFpCHbu3Ta4n6WedxUbN6wme6w62nQNWk7iEpfoM7C7HNv2Ppx49hLLnj1uq",
  "key15": "3HeTGrAZvtHgpmEzYpjZECKpzYoRfjLUC3FV5FuKxAaHGwfA41n5Ai2pG2wHMhHY5Fi5Fb4zhNoa3NQFqHsQtcA8",
  "key16": "5axnPrNCsLV3BDe5cWqP6KtrmRkjD3nt269s13kjyiuV7mp7VGGVXczx1VaA8fQ8bvLW2MAk7SZemAv2bLuBbnsh",
  "key17": "5ZVbeuNkHadHWwvJBXPD1PnuNwJV2hrf9hCsiVADCsQvyC59ssJxQs6WJJNCHWYXEVDtY1td9okJ8twKvrSVHmDy",
  "key18": "4CFFurt1BML85AH3B3vhKGwJLhgj2UYqaypNCPocHUB1tyuRHDcZmviQjSFTRoovVP3Yno3QiracYRrjUQUDjfSZ",
  "key19": "3RXwmsqLMNChUHp8HiAaHU2WonDwhAKa2tQMQfcmtLx3wtrihjb3x6YYbuViHiovPmtZZAzZ6Rgnx9y5mFyJcckw",
  "key20": "yRJiWPdPWen4eDyVtQMDoJPQ4HmLTgR6JnnUM3FXyiVShPbZRXSbPvM8DoG4SLWDsVrUFG1oBpVXnVx32p8AMrV",
  "key21": "3u1DeM34LZ3q4531phzSKwpRQmYgZdd4vXrdh8t9cU1BCUnAYMjJH3rY77GkHCehg7AsdkaKsfi4adv5p4txRdEV",
  "key22": "4GJ495pqhvNRofBXahdBL7YxLEPUv4tv1sRcr48GqRXiDDPYC8wq8EdgF2xcyMjXAVkinytVtawPoB2ZcTN42U3r",
  "key23": "1pmnPeACGkEFkTLvQFYg4PAkwAPS9m2gHiuXPRXKnMXVuoqA5tZiwk9rZxohePKdNBXXTktyNEiGh1xL4pTAddM",
  "key24": "kiFUB2vDBxAT1k2scnsELKJHZ6hCF65Km6qVrA7KgKLyMoHHnM1RXmwZDU71A3cLKoehBQ5QqEsgEGrwos5eSzL",
  "key25": "5BkvkXEQNh9QRySLx6Rob6cK2kFW1cPLuk2bpECCDDuKSp4DDA1wAXH4rEHidUiQdqYxSzCN1e3FX9MRPW3gLCm9",
  "key26": "212VztBe8foZnYE2nUWNLqjX8Z9Cqa5XfCwNTkeQpfKpM9oJC1XbQYhisehLDzgcVGKJhABzkK7M5Hu8tscsvBJM",
  "key27": "53nkuuRvwYqxKBqTdooq3DfdJ1wKq7h4GgbSEDvoaWWJDmbQAmuoBtpvtoDMrJGT3XghEVvAMzshXchCpvDUf16c",
  "key28": "2W2epkokgxqpUEs5HFosLRtRVGRmgNU1ypxiP27e3BcEUTpnxoaM9ipbhDMhprXuzuuW7kMCVAJxTYrFFRMnY7pr",
  "key29": "gw732nGnBFdoCjutL569zi6qNPhCa7UA8MxCkCAnku3kRV8jqJDAjkcHDzuEs2xEjkYocoy8uzHhvV9RQD4zozN",
  "key30": "42A8yRnpoDqySFJ9KxBuQfqKFHRLSp1wTckALceLjv2WnCFE9Qcbn9VyAgqWYApVGdr2jUnHHk2PxWun1gaNJ442"
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
