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
    "3N3NSHF7xUSBkPcABVHdwym16pGf4ZLwLTjBVHsUM7zNMwhXjs3gLnCPcZWHpiRt7ik64LXiC9WRL3faSiaLmr8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqBFrDGLfjFLACB4e2vETJPDPzy3zV5nZZYwCpprhNYQCvUcSRkXF4ZBSNYM1YqWRFbXAkYUmp2AjnJVw6vTaKZ",
  "key1": "2E6JXnvM5QWZraL2AmVPJcaF6Ztwb1H6SUZuWci4wMyPQnra7fpj3qDW29aGwij8x8FhuR73SGQtYJxH1wBwdYrz",
  "key2": "4TikLyDuxSwSi2KvkBXgmt9YngVEmKr3EMoC1ykiRitdiHxMd4kKN39F17sUkaNhtYSz3XNfyjWMpZftmKPxTLBY",
  "key3": "7uA8CU8s6f6xTueLGUPEuw6mNcp6vP7bAHfMTxtiekG7CfKcp3ZUbnJNJXZXcLZVd8Uh38DzjDJUrgAbMhdFocj",
  "key4": "2kw4tvfyqBarnwSDopL34X51Y6on3791T24BsWjkyxUXheMHE3cWgPUqNKk2CHaX3JFyWfjtkQfsHEgFXqw56ib8",
  "key5": "4ugSWC8QA4b8uiFThR32ExQgDWPKtLCvmMuS4BrBqSXEgR3cJx5Ed2AsnDiXuB6Zkn4UJJ4QZDc75A8ZDQd1aFrD",
  "key6": "5NdUxjygDqvjXFMy2j9TEUDpEuGHeiaxor7Cox19aQukbyRzweAm3F1RXnTQqMr3aQ1kMDZ7rjNoJqNyLNxE5jga",
  "key7": "3pJEWFPmkTVrPKVdv4vAm6uMiJNJ8zkZu6RyL7hcZawjohduXPC2sJqiNHWuALnqXWsHipv5uZdpBEoQvRhvgjDK",
  "key8": "3aqKkUXGHcXZK4Z1SgUG8yXvf9kzzUMA5uae2Q9zEWksK2cBjia5H2Ycj7issPvEFPahnaAHwaHKjr5zYr6x6HuD",
  "key9": "4QDW4u2wF8XQvTGeqGHpEXhecfNFvKgfXeFS4xcfDNkXV2X9BPjn5EajxfyxeQRro8EtpAweriKQAygpt8jz9vP2",
  "key10": "2DtqqHDs9z7YaydQkVvbvyy4Ja1b2uRJDdzipFazN5ABMYSbAiBUGEcec7GCYMsSSjh6n3tSvmrJ2gDm7cb5aRTt",
  "key11": "2UbWSeT8wktn3bCU3KRRSKa8QMTQHzXL7S8iKEoA9YUxR9oxJsiAkNmsQAE7gH6DwSjD3LmVtZHDnNLHyjjGTeR",
  "key12": "cNbKAmRPbp8PN97M8Kz2iv9cJioa3rLBVGSX3yKTcaNNdu3KH87qLmESJi1b255trK3QJXddmhtcdw5NeSRfeCp",
  "key13": "5NU17K4ASijzx5fQY7H4cwmS2LwQy2Fw1YzcXpvihwPKSf8V3LkwymuKDenGifkjbUkMdSytaLTbnDMA8LvaztUB",
  "key14": "5xePtYErqyd6DdN8gBcqCT3DoyZ5ki8Ep31QaAW5rTK9JgUmTQG4PhzGqq2uUarwNijNdJDa8fs7xwog31hf1wrv",
  "key15": "28xCQmg1jEVxCYakjJXwPKA3VrVV4hj7g7aQBEuAfgKA97eKKMic5qKTG86hHhQgBHRTqsJSauvzjkwyj7XzSJmy",
  "key16": "2kKQjvtZG1yZit7mSbdSx664hGmAHcckDJsvJpmbUJyonPHncparupJgqHM8CybGpKBQZ9rbP66qLnUfpj2wTVw7",
  "key17": "5KypJ1KqPA9Rc3NgWGby5XDs8kdGJigQgpHfPzFPMgz3gg7P2AfFAjcyccEq8Ye8oX78BfxrTWoiR2dQ8fuAXGi5",
  "key18": "4miDUyCibDTkF2Emq1zKvkpUS795DCd75fr2cUzkNpJ9nxqH6k4gNBmh9fDXLz6zqF8jUJpFTtngB5mhK2NAD1EB",
  "key19": "3DKoETq7DJ1rum2VyiFrM3mZBaCcgmoCdxtwg7Nik11UZRrTPsHU1CwbJkyL5wqhuyGvPcyz1vW3Rn2yRy2eUsU9",
  "key20": "4QZi8f9BFcu7TErVMeqoJdmzTWz23ZabR5RSwWhXMd5SFSahqkttmC3T2x7GJypsAZ3nbenhJm66gHMmyfvByspe",
  "key21": "3joztAMEHQUFJj479Rm9TpWf19QLFPUryXuYj9c9vp6j9kpCENrPuQ1WgXfwp427cCLCq9K4mBkFcf6cecn4Joaa",
  "key22": "4ySFMvLFEU8RRxVwX6MvdtoD9P1Xzt3JFzDeSh9WqXpzgPGKCDkM9XW7MDRPHnH98gfsFjfCCWeEztN8qAraiR7T",
  "key23": "3Q9eVbTXNemjbvtJWpE9BvDQxQU6Sbi5JrmZxKRizZRiKKp2Nc2mZc3E74pS9HBC4hDexKEVnfsU7nny6g9Rz3VH",
  "key24": "2VdRfEPncoG1edrjEQsf1QuMdu4wogMKjn5ccmNbPqnaHfexy4a38edjjEipm3NQ7hg56gLc9KSmbrBFihA26ip1",
  "key25": "5n68wK5ewqViwgdfrGhVGRGp5RBU4TezaXu9VgG2ZmWogwGhTGs6tQ41TT6BRjuardvuwpZSznBMJCHAss77sDLT",
  "key26": "2X4tA6XgBCA7gYxPQtvrEDwm5pfuxaPoVxUf5sFJsPj9s8ZREeWyavfDuzFx4nWh2UYMXUaPcKANyYpxsTjv7NAY",
  "key27": "5sS38DDjwmQubypieQrcAjoH7TTsQA9cqCXnYMUQ4h8nb3dPqGvPuRSz1Pu2Hv5gt3ruDcWWC91nP7dniUERtr37",
  "key28": "53BdnaTMVK3gETLL9uqhGycD8ZtvaewwakUdQARuKkAJ6xNMF43StXRKjoKLu7Cr2srrBgKx91ebZ4iirM1xiv4D",
  "key29": "3JNJeFn54CfkaiTtQ5RnWLzTQqbM1zvbeJ2ZW6NC9S3ThxGJp49V8JzaBKBRFHrWETW6h3qSCTJJ6TDAivGsUxM6"
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
