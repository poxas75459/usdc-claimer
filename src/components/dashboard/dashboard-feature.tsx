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
    "648KveK1yDB3ymugi5KyiDMZNmeKJQAk7Xk3UUuZ55wvXqJAMPfRc8SnNtdmKnJe18GncEEqjdjGBKaGCo9tV5ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Epi3FRqfcVQP76SekYonRdxJ4uFi8JNwUS887UBhwHTrQzvhSHi8QED4vve91GXhLn6pceThdL5KiHJEzR5M331",
  "key1": "5nwpUqak6wGCxYiUd882Nyw3RkL4EQ3NyneRVAk2xrjPU8KBpwbscyHKT5eHKRGSqh6fNxEJkikuX2HNzdAQKn1z",
  "key2": "3tyJ5ysqUeuX5pzMBzFwXpmBZ1DozH7JqPawMekjZFNnbb2pZmXye4eWsLu6xFLoBLtv2qVEvbAVqB2qcxSsc1e3",
  "key3": "5dAnDNCLUGgwmuu7gMxaCqCWU4qZ1QveAUkBfXErdcFEBbfe3m17Y3CyvBEWRRyMubV6RjbuZb9P6VB3m5jPCc14",
  "key4": "52G3ennWyGYRUDKtGymrdwgiCCawaVCRHF1moitEN58f1KgVQ4EzdwYpRJeP6aWDuruFjGLfrk6DoKijWGqasNkZ",
  "key5": "5LQUA28tqzr96ftwd8ZYrLTwnZdz6wZrfc1wbZMwmGJ1473Tc6hb7qXzYji9XdvbccqhiAN58K1LNHig3fXo9oqs",
  "key6": "43U4wZDMfzJKS5cb1eZXP7T2YAUF44fpfnqdssaGWLZQWx4hGUcQPs1WG6B5qjQpDXc4CUTiU8UgAU6cHFfjizho",
  "key7": "4Fwit5vFVDT5HQH8PaHxKY6qauWdMV64YA7yo4ZviZbkMny4pmQwjGJfEUbBo4dh6974j3RA1v4wkStEeyANpWET",
  "key8": "4vejiMQrxjXLquP4TNwtVxrMjf5vxSiedT9RcF4odFGBCib9fKPsSGbcftK8qdx2L9JYrzwZ7yVd5HevD1FJjyFW",
  "key9": "2nrzH1paegYURGQJovY9spwiFJB7dKYmzdCTZBvFu1Asr7J1ubv6NCBJvFw4KVRaybqJtFHBgeVA7nEteZ8ohtoJ",
  "key10": "3RRMNKcxBHSwuKoVcbacrJpVjVri6vtHGH1pUwuUQEbmhkjw8r4bb7mbR67jQ6kawKn52VprxoEkZWjFYq3hZC4R",
  "key11": "2XaTN95VKnqzWfPGa8D67geXJNNKxQxtadhE6x7rRjEMjB4DsGZfvC1pnhHDzD7JRQGydUznt6VrPdjHcxYYYw7Z",
  "key12": "31cyrPwX7kY8qu3tbhRFQmkmWh7KHQJwdfBX9s4D7t2Hb51QEWiMfYGtjshHcCju9FYFXMLpeMFdiJbdBhWTTZFZ",
  "key13": "4ScQX5Dcv1jRe9kJxQMQu92Pya6Laey1cFovj1gcJMt6prt6hX8pWwJqjMyNiSbU8yQ2KJ2WycFSqXLod72jhofQ",
  "key14": "5mmQT2xuAsDkMiJjqutrFbViqA74vvtPXRS7JgtSkDLVCDFjaXycCuLghAVxTvWgxvQjb8RxAF7MK4Tr3c87UNPm",
  "key15": "37yXqyw1x492xQ2qycqcxc281sUMHBen5aDtq48zhV3YVuAvmW5paDwsXuY3GywJHfqLvsTvqyoMmXSTJNNL4LHz",
  "key16": "bHEgk9XHYJUkBgwd7GZJrzRD784RXBs8dbjfjRZm1kJ4JzgCFdwudebaeJaknXqQ7pcuXEhqMijzUfFwSkNz8Kr",
  "key17": "3m8X4udZLMxmnGGd9UJ3Rc5SHndAyv5TV3PFp5uxquPW7tbJ5WnZgc9XBAShX78RRzbtJCWFCL9ZfCs9AFKGResh",
  "key18": "25ccBwk5aBWKCCKuk58i6kDhyeFqkaKHhqwNCnVYzE8tJ22z32mv8cCyyS5L5gT1pD2jTG7nfqCi9ogqMWLCejXq",
  "key19": "4dJPSV5x6XcFM6G7ksdssnduTegHQAYN21Y5wHSxv812EvtYqJahUJqEbPccXdHDCJZ5DV1HDz5QQJRFQVzU3Kan",
  "key20": "4K48UqVkpNBskpYQZHftNRMFXXf1LNrdHCSETbx2B2oam1xD6BMNGgAim6WtNcvVMub1KjWW14SUEcP4Mwrawznt",
  "key21": "5oYJHwucb6oxZbSMPxPb4Syr7GWKniNjQ56J3MwVFNNutH9uovmSCsYbgDJJ6J2FbQNADUUzxuepPkkyfeQnZ4HZ",
  "key22": "2bsFR2BpU59rmGzBmyUNVwXhrH7v56d7sn5EvjKRyLArUMTsZJkSQ9Uzs6fNWXqG3n7w9XsTA7fJacvcYhpPcWAx",
  "key23": "49dET782AgnnsWG9nGDVaPdrcJFjDzayRoXdRmxnBRKz2gyRGLDuUsS2mFnKbfHRPWDvefHYztQn46SzWPdcAUub",
  "key24": "CcMSNqmNXehqWe7P94ep1SrK45tKtCpvjBBextF3zbcHpCehVW1aMVo4CGgfVUyTYCrPbjdCfNLpAdKHrZMEmU7",
  "key25": "Sikze2o52b3h7UfeSkewJhECpWi18ovAud49nQNroewJEkfd4vGAD4UsbQQ5ETjNDChjKcGu1J3JnHhNGD82JtG",
  "key26": "23eEGKGgofHrYsyzX5bZtinMxez2bwzDRnxmJxK8c8V3CnJ3S5b89urDUgXeQNCATyXh2WzRsy5PNfMLdjSq1JmE"
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
