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
    "4x886DkBAUEiBZF22QpcZnTHvcaxYMmTox1PnwHDanP8mEWPi5v7KqL4nkkkc8ysD7C5oABAgAQXKdqmvLqsiyGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUC3Bfd5PPGB7VyMerz1LQqjpeVriVcfBZX2hdpZ8T5gbzH2cvQJh16XPsysyaLJ1fRuJ5RreQ3kMtghQ4U9Tkh",
  "key1": "3D1JwgtecWXpfnkjk2HoUnXLH21bGizMpgHX6fTpEFB6Q5bN2We2g2KTit863HnT5JtahV3e1v5ELNDbZr1JLKgE",
  "key2": "TJZL9na3AMcZ8sQSnvGaKf8pthrByssr9FkmK8YtLLdd3LYRuJQbFHeNsCCihqqw7jZGVCmWdgbxvGbXabCdvax",
  "key3": "nuK5ebJGkZL7kntTx8vCSnXe5uCRxqGnMM4RPesKn22Kctgs26beAM5cnnQuz9fSKBTyY9ykN4mCEDTRwzrUdX2",
  "key4": "5bpsfipgvfKuDF9NARPkYDGFYpZR6AaMxixeGHycyV5YHHgYMwMqDDHqxSgyNwVzy6114w2pjHzgz8h4EzUzQYTk",
  "key5": "2T1ctb4FwHviqgHeexyYdZngYgnxncXXbGSvuzDgn7evz2gKXZkPnBpRPRhn2Nkvr5VJs9NrmQ688PatuAiqXEVY",
  "key6": "XjpdZcL5nf1AF6oE3QpQRabAJwvu4EgbQQWjCYMFwqSEwWYLB1xcCXhEZwQSKQU7yzcoiM1tsWaLNS6xdfySz64",
  "key7": "3UnzoPykGtedGqy5Q2gQGfirkRjzM4gFtbnshyQDNfnbp9uZfVYmn5m4wNJrFZEDQwoamdeW4BotVR2RELoHRtUh",
  "key8": "2Twna3KediBFGu1LSZarMwc4QbLXMmpzQXKXSN1DgB1a8HhJAwjAs8vPhqvox8sjSvbSMV8efm8USZc3otZWkXVM",
  "key9": "2H4EerEnzoUoxLJ4KJ7JzU4AhaKgWCzPt471H1x5NdcgYvfGEDNc7bTLQ2NMUgVZZPhLBN4z43TrKfkyi7FqBg69",
  "key10": "4cnjYF9LxinXZEezfxVrWdTDwViwkEWEd4EJhjuzrfobgZ9NSMPfhys2xnAM9CZGr9JYVUhYDTyhb12AgxNYr9G8",
  "key11": "5Ka3FUPN39q5HcXM3ngi2jG3EzrrzcR2XHHy4hugAgDXvm15QxQ3fZCqEHzyAozumgThw9tNfBNbm5DPRyF9kn56",
  "key12": "2qvYoP61u4WRW3mpXJkGJufcv1q2MfcYLUbUcfLzCsJ1hzKELA93PvTsCR6ZaR26JN2b3kRXAmp6fVtibGtiKBSt",
  "key13": "4Rn3fc7LoPQm9zuaGFKozi58CkDtpMqAEWr279WeHDRu3WtbymEx6YPrZEUqVsW6yHU56YuR4rodyHQNPPb8tkJ2",
  "key14": "8amp77cT8Er2mRvqLbbv2qBTQNDQrSTEJG4JpWbP3zL2d3TzFmGqgwHuzA63N6PAavhxN16Jzw2U8dy2KUuaB62",
  "key15": "5CAZs7NiaU1zFiwN66BpzroGeJPjgvHdZBPY8znNFbHKVMqTmWJDPRYksToGkM3tHPHfMfrkovaqbxAGXyeKDYR",
  "key16": "43pfGXJPL4Rqehyhpn8PhdQDoVTqqMQLFv4NnMLawF8PNminhrjg81YbcUin4kbGbD2zRcnLdtgaaeLiX9PodeFq",
  "key17": "3oEv9W1Xs8rK3xcqim8S4YMXoqmJRBagxcqPHHFTDqepeFKfrpsstzF7BoWd5uP99YP8rHEecyJUwVua8N2ijSXD",
  "key18": "5smdz74cCQsLXHQvTxCpLgoZHZYJjVtSora3UGh8eD6SrVxH34MChETmvebUnCnDetoAfU7aS54NnEqXFNYVo6pJ",
  "key19": "3WaAjZcRFjgfEB8sPkYavjf3jU4XPQ8innGpcFBkhuuJpataWCwc1MNo45xmYD7V1KdQpTf7rZB7ZnrScGDVnb52",
  "key20": "5gTyN57Dmbrkwhqido5oUSbRbebPNhR8ZBxk7Z9PtQDwtDeHA4inAtpcUzb2Q63n9yQMYfWRQGGet4y94GUnchrj",
  "key21": "6LaUT4PnbZjqtARr93SZDZR2EccWTfcJq3QVemi6p3vtvUkud1NxX6f1tZ6Xc7wC678JyhZE4J67f588qtxodC1",
  "key22": "35fhSUPxZyTMXdd69PaQYe5f9WAfXRG9ufH7JqyEMavwXYSJAjnx9kTxfk4xzoUGfpcsuZxkcoQ7FPVHkG5poheD",
  "key23": "YuMQgAZPzaTTgEDdSXfLsQwXpiqLEpGSK7VeZWizkQSLXod5icdtT1up7ShpDVBNaHmqYptFsztHvs6cHj6XeRB",
  "key24": "37p1F8nQ6V6rc5xQjHjxKwFWikL9cTgTFg729PjSFDi4S7Vq1ZMJjjAcYjtrxyRwEnwFxWeGJVNWNXKvgrGXmCXk",
  "key25": "25b989xY2hjhp2TrGrWaDtWseS2kN2RVKGq4wvZvxmknyUd9s2z6ATu1sYUCpQ3QX2pzhzfVepWfQD2jWoCLfTmF",
  "key26": "pH8LAAekyayZFub58VS3bRaupzXANejmisGF65QB8QocpFN3gzo6WPvVXwNaQo36JR9PekpaqBdoGoy7UyTkCFa"
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
