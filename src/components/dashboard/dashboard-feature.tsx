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
    "McqhEXWRRpcE9Um7SrSqyoGJNmZfovDQwnd4pS6AdYuZu8WiDjcGgNSZ8YjxpbfScWJD55iHHdbYd8HGW3V6M9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SFe2Mk87mBfBRTAbo9qWTWAWDgc5p13Z82uMcokty4VDc7zCuHEf8Pi47ZHVyci4jkHJyL7UzhMtEpJd3QRMJCL",
  "key1": "3hya45h1GDHTnopSFoE6FDd1JMX6QWyKNHdwXrmzyj8tTthfkmVDV7AuYy4gmPXSAmnJWEwrnoG8AZ8STHk29Ccy",
  "key2": "5vKxAKiaWhwV5J9ut5hExWabqjK9Kmo2TG7ZJogpfb8xSnKdTMojfRMj2AxVWRxL8wWEYk5tE1PAg8BUphg31rqu",
  "key3": "66RGNj5oXxyNbNxGHP9EfQpVabCaHeMS1nM9WUAcwGPAj5sQwz41zu2x8zdJN2a7b5VFSJDTtRrHiq8nR5ZyK9ML",
  "key4": "38z3QhfZUNijpQYVbupmDnLRbwEABHPBkKUv8khaBTR4iVNwCqWuyV8UnRNCsFH1HQ5jKvfT1JGm3ZKFrpAvB3YY",
  "key5": "3s8NH4xQ31HNotqugS6F9mZws5Pj6qnAwfVXXyJGRNf9c7gfqCwZR7Whc3nY2bfdacpSUDS58yxh4YPPaqSN6iVN",
  "key6": "4DkpFvAAMjR9Hp7GSA5iZS7WuTW6GTpW2VeTTzYEjeGkYDi9pxHUWLXWjGxmy1s25ModEZXWtnMu1w8d3toZMyF5",
  "key7": "5uY2KcXT1Vxrdg7F7rMaJfHWhXd6Zz48veAyJmrYXy4GebGjzwmDqsneKTDWECLAG14ctYn6ZTM2i7WdswzUVc3D",
  "key8": "4sx32QyVkKXdft7h1dh3L4KDQudX2qrSFqHmNiiFjhVXHL283DLkCk96NLXUoAbPYS8yXhnMZkd8vve2RDZasp8P",
  "key9": "5Vq6y6cUNmWDq1wDuGa5BJE3b3A7fFuojiHyV65LAdqkd8Dv7fucF5cREPuTpvWoLdseFdKts7n288VNr9oNzifn",
  "key10": "3VmTtAW1XLZBuuG6ZVmVnSKY6Yj9gCk2MD5LXCUxihLdwXLurbqqR3YZDZz2Ww3J7KrSRH86ZvbTE5cwKf8wkJGo",
  "key11": "4jabAK9w5avkKkBsxuzk5huV5GaCPrcwPDUD1qmMjSEXu6YNAdGjMtDb52SnerwLvVWRw7Bs7x95EFpWWR39e5gW",
  "key12": "4Gnu3oUAvvk1NSJYz3uFewqTsUX1qEguq2mbxyqT7n7A6o6BoRPmoY7AkesxyWrDhK6TNcxCLzh9WpNpgUPSyTms",
  "key13": "4JpxogtAATjrB9KoQmwCkLi9aPbW3pYYsxwrL3qDzJHK9HPTh5Em4NDxZcWW3KieWE72755K2ZimTe1rMcKBzDbJ",
  "key14": "4baXPUVrfJPZf4Jk3gvS8ytXfA1NE73deyyYQjtnocR5ezfLAJTifY9XWuVN7UftYKcAVyDXHGEAmsiixwqvuwWr",
  "key15": "5ZFZUZQjopNjvaJrEgpanabzLmdYSVYXd14kkYxtk2KWQeytby85NucSVARXWiPaxhUC8ENhkvgFPkNZeBLU2h3W",
  "key16": "3AGaHXysyXLnvGJLQAhWeQs6EvhkpVTAg1s5QHG3WfqrkRJeq4mu4S3Z23DoKSYtvMyEMNQBsXDovAR8rpuqTtM2",
  "key17": "4GERUUEnQFYS93j5Dgb65TtQcUwUdk7dSdgsJfuQbDRgb3mexj4EitoDq6dmLDsHLsdAdcRs8DwDTKHiayzRnp7F",
  "key18": "269aGen6HZWUFUZ5mzPTtuGv8kCRUbQsFBEBLaG7sMwuX71rgzcc7itMEvK71H1CHEn1xUCxt4ih9unsEjDAooRc",
  "key19": "3RYo77gfVw2CyfdRKbkrKvMq3qTHCu6kXZF32ivdwpJFCbYjngwCqKy6T3ESk7WibEnCNTZUavp915GUXMctqrgk",
  "key20": "38SccJ6Wsw18EULwUUwTPK9K6e8poR6ZzWSSHyD5yUEzDUGK9B2bkSkV5xokodemBms23CdXXpn62fcSUiibBKj3",
  "key21": "4zkBiVK71sRXzp88pEBXc4duh6mp8MmoLc8QbYZDr4SozV3eYFJU1WcpTfLyQMxxvLyhz4dnxZv2hQXjmNDkWeWe",
  "key22": "5M184jA1iy6deyFUL1v8M2gSeUFQgzzutfzgoAbQ6SSZ1YrzGkvVMv6K8FFsVF1gbMD2BYGriptgEbtuUmf5hvuX",
  "key23": "4H4H1QqGbjyr9iT3xxZp6xBbqdkhWhWUKUvpHZukh3nEvmHYEQdab66X8GySntiU7x7upzhGnQUGNUUAnzFcDqG9",
  "key24": "5zTuQ84rB5a1YF1Ue1G7pYNKWt3HWL7Fc6YMLAp6faTX9dioxtJRfLZHdX3GkDiv3YckpjM2mUb2SL2mbWZGwh2Y",
  "key25": "YZUnYeVWp8WDNPgb9E3TcDWhZ8kqXGMJAnjYsRFq6TA1tnbNUCo7yBmqxwYMJThfUbKBYuaxozXAmjoDGdvsraN",
  "key26": "4BoDo9SaQKfemCi1ubw4sr5s7J6W4JUBEQMEhxiMdnrcdQ8HvBiEJG5eavZuGhkeZE4fK9Qm2nA66e7cSMcwXLhg",
  "key27": "293cpJHWoSc57CX4P3BNWpk1q63SmqCQZMvjYKAGUjHSsB1XQojaWs9XvZ67PAVbqVM1ueefsTwBkUjn6rtHUiCF",
  "key28": "2YRYvcx9rtpSDKoXgcXdXYTYYdLC1PBTT7D3XFFHoPLBmuqcWorkLHF2iakbmdixzjiN7JndPEJhgsdBxyvG2pJx",
  "key29": "L8u6Z6HtGxNtrbgXqNDPMeCGVRkWzBKJJcj78tPDDJaLe2gjLNwVSq184PjFXZCoFKo2atvUX6Ra45kaBKkxXYZ",
  "key30": "4jn82DJe9mhZpTzeb8tG5oGT9tP5GsUBTEPRMktX7W2Lw7EK4KZFcARWpA2K6B7t5rVRAm2kPe95qjvhT2dXeDRt",
  "key31": "4LDU1cih9pna7vKWCqGS7xzbnFtqWDL8vDE6D1PD28q687TmJbpNgk23wiK2pvdEva9JiatpdWn63RyZRTccMdSG",
  "key32": "51HrbT6mnKd5bQDTx3gXS6HPMkhP94x7ZMB8ST46vAwTnvsAEHk2HjvWVC2Jm7WGk3XWctjWWVFMoFCzLT9m3o8F",
  "key33": "45stJ2og42ybFQ3VJBP59FgsnwVee4EECQRrRaEojZfaLTu5ss9sNsByTAS1G7UKysSKgp5P85h3YfsQRthGBax",
  "key34": "2ZxoczwHhcdfwFnWSsLWemdT6ipaZa5zGyoEgaFCBUPeLxxVTGreJDCRkXVZ77DtAVPSiBKDNKyi2vcqoxKmfxek",
  "key35": "3D6HgmsZZzK9bD9uNFN7KDsyLXrKA8iTpHAP8WrHEmZU2MM2ujqxQdWy7aryCznbjzUcRUtTQStA67bxthr3UqT",
  "key36": "3qcy11j9BR1QeKmHgTp3snTLdRcJk7yXsW7Ra2ah1uaiqfJ15TbSBEQuca4VAZzCnHAUEeaRYPpqETiqPLD6mNWJ",
  "key37": "2U4ASNXhh3JhJs5PgCBGzLAYDvxnLt22wAKbQrorKx67W9jihm9oPhZWpzZMvR7Ku3mrZqDjNKetddEZHbZsYKxE",
  "key38": "UBxhFdAoSwvFfcj2NaSFL1gx33MAETdRFG9Zrj2iXTPYfErVg4KgUk1k8NLsgYV7s3DTxe4qhNSjsUgBXUjhiyx",
  "key39": "3TwXeVc8YvwSM77B8dT6dovSKVeDtngJLabzXbWuU3xNESAVYMXTdBdQuz3EwdfjWmj6dqKpFJtbTTrhAo9DgSr5",
  "key40": "4zu4t68dJiV82CQSRHz2KU6TC4NDn2774dQoNxvmxoom5Zqm8q7qHcjgNzyknXjqDKVYMh6iq7u58aW6TFmzxi9E",
  "key41": "4oThmMg2TyoShVi9qXY9HKmDisCs4KGy2YCgkYVwZSswQJvDPRPQNvPQaxENuwT1BNcZmh7xUExgQv3KaiNW86Xo",
  "key42": "3uzceXkasXygKuFdw6EwuxDkGqQQacfLqdLRhSeLdQLBSvwWecJnkTneef6L8zkXndds6zByVQkvs2ATEJ9iyMXF"
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
