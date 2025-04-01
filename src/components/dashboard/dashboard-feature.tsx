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
    "2PLRV2TpdNr23c21bCVHAtqpGcS5FAX6UDzq7BqUczttcfthujprhGB8VP8vedifACj4747JPPR1MD3Uj4HKqsJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4sxj7dA6w14nEooEJ7ouPVMT9cTw7h84GgvasqNgPw8PLDD1q1aV2Bm4K4aW8uPnyooXtnv6cyRAZ5cV7WrXui",
  "key1": "wyg5nuHKBJWPPc5CC8mXsahpPc2PTC6ZRCK4coU3WvXctKCUjJaLTicdiAdPCze1UWGStwvzyXUqGY9K1CQEoVr",
  "key2": "5rgz3yF86AjTg3tqYSDeX5yYP54uSSkHS3JqCtjqohAfzJm2Rsyikuq34kYguEmeQYDBxnc1rbqZoxELRdfkg7Z",
  "key3": "5TeoxsY3K8pXGAiWKsNdute3f8tXSN3aEZ7QZeTKkrdUohkmLHWuqd2rRWC2sYvb26qg8kRMu8GPhkyCA6MqRE21",
  "key4": "2LgffXS5mZQNTs9unQ39j12uM819pWMgqJdCYT1jdsRiNKjWxXAwvSsxULJwiwLyhstTv3DNhmXJM3Dxx6hSMxQ",
  "key5": "4zdSRXmNvxdnezaWZ7DJxCXmrfJ9YZYEipsXzW32MdfvG2t8weza6rNxQ4Y6oQz7NBT5FMg8fVdXjMfXUHkmT9yJ",
  "key6": "5qZJJpV53hHwy7Tx7H6tzZUhcE2gfW5ZBketoZ9sdNZahU7pfYqcyC9knzALcBdXVwCLdiDbeUiz4imLduWMgde5",
  "key7": "43vTJcS5hxLhwD4CqsDxubgGjksjsr4VsDN6tVZQUevZtJKJWFfaYxJTTj7xBN3RQLHb7wYweuXVa9C4RkZXBF2C",
  "key8": "2Cv9rv9hkX7kLCcFG6aeDAoWMwqCwnbqUHZDyNXJhRpj4VhhaYrF9kkJzxZumemTAsfxfSaPMhUR2x5QiTsG6YVq",
  "key9": "4UsQe773TfFewK29xhgjBJoGjGQVBmLCvNABCi1ikgHpjkBid9ZuDVQXSRjMoyc8wM7XP2owZhGC26KKAsek3fsV",
  "key10": "2i1mjdPBYHRKrDk5ApEU25X219wR8FcRUNumpLX1d67DV6usmwDbGUVpGYJaxozafrmpJCb98ewNsgB1FKPePdqT",
  "key11": "3gbeREZh5nZPKQGwNUy8kYwPSs67GsPjdLQhvME1bzV6kU9Ly49JK9ighSpLvJqZh885ZFS5pG4gupaumjLtbBMD",
  "key12": "63FnyuLTDckLvq4n8Ra5MEJbThn2HpSrrZUaggBqSmqitCU3rUiLEBECwZibeMdJWf67B2YDVXvbPGaXaYs9hBJv",
  "key13": "2muGTkNt7b6B8TWU1Af751eE7We4WdiPrhCfDcr92LA4L77aVuujThyYPBuAsFAapraVLUecvbYUxzJAVLqaPG7a",
  "key14": "3cfjhBLcj6LwWpbBMV1ihErJBT3hMGN6Atxu27E5HbWxAzRmTDGfR6xWiAZdkwCb4eAytEB8BayhrF16TguVdub7",
  "key15": "5cXdah2ceu4EEzfZz3nyS5iypNFYjtVaeWGALmeFw1qyFPG6QAR9GwMoch13geDpQZ15rdWCQBJA7MCTQesPAUZS",
  "key16": "s3ZGxvHPAsqiWZn41pcwJpKucihm2VqJGiiGKqcYedByVR2tB6Uoh7QeXRYuqnyT43nPGt8pAA3hMK5dJvuD1wA",
  "key17": "2uVcLkkMfSMGiFoVrYtuo3EQzUBG2NpHpNZUL2DxnLBEmsAgkq5guKZEYTAuHisEwGkbL4o4UUfSn9AHQtRh9KrX",
  "key18": "3RrCnGmkajospvqDuB3UeqLm9w2QG7DmGHU1qP8gLo5qnxgU8HhPjgRapo92PK7d2NjBvirGSFgP1ceNJEncFQvt",
  "key19": "5m2VdXWYjCv499w5skc5csDczCT2tXGqiTMMSQDms6SxaPSQjGudyjimpnWwgPS6TjVcVXLjawq5HmaqS7x7Us5o",
  "key20": "38NkpsPswstYjpx1HQHmiMXjRFXJ4ejzY93dmqUF7kY9nFT5dvsoNKSPfkAL7qPZQS2MgB2sKX2mtX5LEifpH2tu",
  "key21": "4j9PkBy61oZwRwsfXyFJ2uFreiyCekate9hYbwLCddhkMbyJje6xEVdDh3QownmUSZHshBK5L9krxhvgdSyBup9G",
  "key22": "3YFajdhMhSgPJ1kj7mzzvuyeBzxDHHT4Pjy7CAP8GYuxNcaxLXjVDnMe4egADYev4HC9Fju379f3NMJutfLVi7tm",
  "key23": "5fABthRHASfVA843uHYSDgQyWjjuZdNRbDH5mJej1xsE1snSbVGZuJ7B51t5MK6ZKGce4X56H7iAGWyjJnk9zypE",
  "key24": "4pSdLPbjPfgahkQ735QiL1Nr54CJJ7D2vfdJq1n1Es9VjpwynCWSenY2Trdhaw4vojnbDy9VYmNTf5j32kcUg5Gb",
  "key25": "2SUyJpz6FvtWUgxh5ytr2E4pweRgTGpZJyd41vhnFwdYb95GHcUY1NM7QDMf1rTdMUYoZHBsqLYYdXGzyToEjxH1",
  "key26": "5R7GyFTpSdzbZgii4RXx6oqoVgnGnuZutC6GVB1arsTKxUbbbHQ1o1xLRkFP4vMjoUYYJ6TwwsNteTfLp4EvcttL",
  "key27": "3mQ4hfWrUbTggnQ5pDozFKM8tYxQsqgioMTMc4rgb9xkygwSGoYibKxZfRSsJg4GKbwEaY973jrTD8Rx9r5HcCAC",
  "key28": "4UXZf7EZh4Rv1iW8QNr3JMCR7nNAfAbF3Z7mcdg5tKba11acwUCnRM1ZpJ76d3AncZAdk6Q2n31DvYLQo7YcTZmZ",
  "key29": "3Y63hKNyTERrFpUHfiWgiTiigu6h5ZJZTw5Khw9pXNsD4FKAwFKs9MGMAfDMnu2NmGpYhXP2Fh5qVDSZ2mRS1qg6",
  "key30": "2EqsBS6zgYt8uJLDkHPsmuLjH67FieJmge5aqt9B72EqWqrS5T2AgoggtcAjCHC9KwJ4hyrosquHcJb5y8uS8UNN",
  "key31": "5RFtsGzki7R5zUFvAWmrFiGo5bVapSGXuP5ERpi7eXHi9RH5U1GubpN7Q5VBxX1P3eP7urBKuGHP8HH9qBGkeY7m",
  "key32": "5uDFoJsnmrQZP3FL9pBhNy2CFHj6tdUkhxEH9JiaAvvbYkCS16wwQWtk87xgCEXiQQV4yVJEj6QfMxZnppmP7AHh"
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
