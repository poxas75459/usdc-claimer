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
    "5EAey6UtkYCpTPL2YUD8cSbbv1zDdJb8HuV1wwVXcfMnUXVv1eX3jhBN2Gk1eSkuuS7Pn4sJGCj9Bo7cfc5MdvDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXxxNSRPdRSa6Krcw5TkDeucezHtJ5iVgAAWYVww7QN3uvEZ5XmEpZZdbzShypayypiuV4GCkHLGJi5DDNx2ac5",
  "key1": "2gRC5gaLgSteRqCJM8yUpKQjQZ8vVq2tE2yovHySDpFiqevVxRTtc8zb5QTWZsTUz2GkiNZCdDj7LDMUYyJNekH1",
  "key2": "582pjwysExWHny6Nd1Ppw34T1FTupKvNKec3LiSZjSCZ5bJqNRmFAeGf3BZ3ZquzEwkW5kzE1gMDw5jxMDvy6Sk5",
  "key3": "3LHAyA5gY4cZRbV9hcoSVULtbQnRwsSsN7adMUdLY5FxDTiEYYHHXYkqbF9zenoXHTmCy6LRH6z69QWBnPoX3X8m",
  "key4": "3cYssDudV6v5goKx5WMEGxxBRr1M2MDboYPe7HDryN4YjC3T1UcCsi4hkBAbusiiLqNf44b5rTZvpReVV12g3y7x",
  "key5": "4QahS28XyrTYyFU43hxJ4DdjpjCFMdVcmHMQMEP4YVTxZa7zfYRLdifo8PrTmWX9qK4BsoHQ8Bf3bsncAo5Vyd1n",
  "key6": "2LTfwh9gbF189RPTi4ZxM6hA66VuksS16pJgQ3vvcPtTcHj86KkW53Winxachg4z2SmwEy9MoH5fE5XEdJaWencT",
  "key7": "qXitQduDp1p7qkopPYr8hRnkX3j8p4X8234J3Je7CahbJFA64zfipFFsuzbtn4ZcBfg6QXU7kqCYobMVVG1Aizh",
  "key8": "2XEsV3GmTCcYUz11YWnmgVD2nXntncDXL6ZLJSipi88ru2583YgoN4TsuoRpD3Fezah7x3sbvwV6wpnmaukvnkxy",
  "key9": "27XMJNkYL3qajdGd8cG3Gya6m2SvpFAjiQFyV2Cgve7LqPSnDjqCRt84iFygD9hUbL4gRLEettejgytprA7hbh2a",
  "key10": "5EzKdk3HkyTWqg3AEDXvtRCbhdJZvaqRDn13LzJ2wZgrKzxuXtiZ6GsY5gzySLoFnkYGoqZucRLiKUBt1ogtMxeK",
  "key11": "4hFHahCEPYpb116d36qsioE59dg83JFsuJdPUneqcivjZUgAGsNmco1Le1p1YfFgyF6kCabcGSjyL2mxpWaQB4nV",
  "key12": "571aCD9fTQsiGUPigPnRJti9Uuqpa8raVvv6HthpoB5bcY1kzms5Uji36WV7aNrbhsHpyshGTgWP1xvUjC9yfkKn",
  "key13": "5SPANPxYpD2McALzghkUh7uXtNLcMfEcmttwC1b8Kdv8N2bfX4tMguCAZCmdqJH2Wxad3LnaengTqigPNW6NQ6My",
  "key14": "3Sp1KPthvNAdZLY5ZfDFekU1s4Q1xsbbv1em9Rkbh5AP5tz335EuUArqTkjFL9mJKHRzMKjM1s9AtKWWmeuaJuuz",
  "key15": "4274DMZWhNUoXrQx1yfctmh49fcwT98hWBmpLYqeuX2L6tJFrBBEqXB7zEFp3mnbZJgejm7ukTMzcXwMA8Qt1D21",
  "key16": "D1D1Vrd5NUrNHTxBwmaSALc3DFCHHiKaFLLXEbB36t39E1oQYt8V6FWL3qStp1r3wYvBZxJiqZRkpvDBG9vcZWX",
  "key17": "w5vZ9ipzamTkP9NMPiSgDTZPkFqgF8gZgW348XmsaRSpoUdyJ7GY8ogARk3XEb746gkRU5c3wRZ6RtfgvcYprUn",
  "key18": "616UTiLPb2jQ82nXMAbxHdAZ8mYpxXGDj2XWsa7d3xpD9tMqchCmkcF9NaHsX8ju1mNNRSp9xgbEFe3LYA84qA9M",
  "key19": "5faTikQZ17YBseEU9JpELUFytb1og7apbS4ShAob7eYVccFL4tXFzRMc3DCkqAG66dMBPKP1gqNrMbAeaBhbRn11",
  "key20": "UNobkHxkn1DEaa8jnAjJc42j4izs7atwi8p7rgz7mv3cV8RrW9Z7i22F8TMf8bJ6g6KLaL6bDEN5dqqEu8xJLvm",
  "key21": "3etCQcMDNhd3tz3pt5259bHi932cRYD644qQiqpoGb7q8QEZ5g3VA1LsVrWX1hJnVejV9Bb736wzi9vMQmGxKSZF",
  "key22": "Ef9Jq1JX85B4BQz99whFYz1RXnd8XJ1Ugymxr4Wn2hiZKM86ZipM3d8jpzYCcQi1Uy5FHz8PfPANeYEqj2F3QEN",
  "key23": "4mgeSU2SCyw9mQnUeYfJ1UVU9hN2dZiyNDaLy2BR2Sc7fRtwsC1Ltk6ouhdhh78m6q5XSqNXaKmKwAmssMnpokTY",
  "key24": "5DrdwbSdKn1e7UU23EZ7WchJQ5GtWZeK2eE45yW2wdWtiErrWCtTRjJE5ca8eeVQngyAQ51iUpMCJeozhu2SHXaU",
  "key25": "3Fei8DoZqykyKc5gvqLQeqwUzxcHwb8XpZM3fvMoc2wULpCVwXyctspq5Bd4kCEYJc6tEmvdfEWn4A33wHCnPm6f",
  "key26": "WRS3ZF4baVAKKE8iWbXEoJe2Uth5XjNHxguG2TivRsgurNjtXrx7RGiEWReFhDqHSkqnZJULyGR3tGAktxs8pp8",
  "key27": "5oGmCoKRBiFd79cRaTzuwdfEQsY2w5P6Byj8vX3BB3mx9oMP5Lz2dJTsg5b4BgXmQR7DghUphav6FzSJgvD8iwrD"
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
