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
    "24FtodgjwqdxjcBfkEwKG1TKbZF6NVGzJ7cEe7awK6ijfEx9tfC6jxrmZxRQnxaALH1dva9z16C8mpX4uCP3hMjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YJv12CQkW9d6gMbHQc6DDzFtCiNSqf6NfrL3fueqnJVPRrpRpcgTxVHBimPeCcLEUxsyAbteaE7sorvy5Y2BG7",
  "key1": "3edLqP66vPDU8XJJydCeiddo24KZofozdMr7PYzom2XJBzxSdzx9BZ2UfXUFaxdU5h21zzT3qfLLhsmu8uYuE7Gb",
  "key2": "BR9zkwqbqDMskg2LSVxu8WhaLGVxMUaqJRRwzxPaMSvd2JwaqUuovAkkojzYUrAczqWrRkHusCpQFqWMd95Xpw3",
  "key3": "3FFxXZfihbLCMkGKJtn8pR9fTNANj2Vm11FzPxsvQgFsQBmkMALysZRfcrL7QFMfGxuZKXa5dH1tyfEHKyY5dXYM",
  "key4": "3iCTifvWJ66SX5U12dL8pdxKLZ8852rq7TgCVMCVuLj9FbaKwopTS4cwm5JbbGca6W6YX1BQzAN8gFPsPLdTeWYt",
  "key5": "3GwYxX15LAtnZoNQTpNUGB7Tm8ZJvTyc6zChyvRzLH9tA2zJkUGJEh7rBV62DbpGwwqQ79FpZDw2MtMybSAX5Uhu",
  "key6": "2bTh73Hjwy5gbKtwK4CPGCanZi1uxDEEBAgn4vjR7qjw52mtfMvYwGBj2nQhnSSLSBHMpeSihwg6MFjGxe1vov5L",
  "key7": "3tSmaW7Kskf26jpU5NuXv4Nk8ae5HAXXuw6kESjJU6F1kRzd8AiVDLFJSaSi4JKwfnEgvPsszKcx3YDpTxHPGfqK",
  "key8": "etF8sAybLEhysTjuA32T64dHh24Cz1jYR2wvafdVokSLHZqcDo282APQhWbwXUKJrXpw6ZWUWjPtftghEaSbQ1k",
  "key9": "nBfSEubii4GoVAr9kiVAvSgrZ6Y5s8GM3dzAnvAqruWoxfCXuGKqrHnR2kkm52NM6MghZ9vUtuMViwEBNFRZ7MD",
  "key10": "4bkU56HM5ChH3iEsGSmza665UYXbAyxLviegGSesBedzeqXMk2TRXCrG5YaMy1XrwjNBz8fScnhqD624gY74ERAk",
  "key11": "LLfnTiAaSSqHhkwhNey3AP2cXL85f9bhvwpkHm5NEK9KTKE68BGG8Cieh1jC247uid8aFLAMVZ3DefFMZRxf1P6",
  "key12": "3DdCy73aZm5vDci5bucPX4YzRA3PJwmDgjHn9mjB2yXYzzyYdQ7cjmZ7p8GvUAK9TWsuULE6BKt21xG3aVWqN5Bn",
  "key13": "21oafocZ5XY7Fi5zsPjYpH6G43EJ7bMhn3sKVfp7uMAuwkabrVZ9HBVGfxmVXRHaBku8VtYEPL66JDC1wG5jLPqs",
  "key14": "5cVaCuCwDpqy9t52MGiDWR6PX5kLYjJ4EukWgwJ7M33iW4J19U8Azgin16BEomYhqGDeCbroXnJmsVcGpnrbwnbg",
  "key15": "5pgEFKFkMP24hrm49TdMWFZuWcinPcYBY2j633B3qSBuDvWasrdHMv7Mnpz2KuADT6AYEEiGZroswwBH3jC82bur",
  "key16": "2XkZzMdLZtCLAR9LSDYSLwWRgNTkJ1QxrXgy8UHjyYYE1yum78R3spaHRQ9HoDN8R5iLDkEb4GPpJPbT4EMF7RdH",
  "key17": "3yTBGviU46TXRThg8XcgpubpABCniq1QDQe6bwXmJbC11vQVaoHC3WGnHL42MYcCcm4iev2ff5AS6brC11T6s1iK",
  "key18": "4Tzy4HjAXcxSQiQ6yhjbTueoC6vSGLfC21eG38onHkDCZvFSp5SHdNM65x6iEdsVbC46bnTMAg7pDYHfLs5wmtbS",
  "key19": "zDNjcg2wv3rKxnLXETimBmSYrkef25U2BRfarfd6KLEeTbjFjxP4bvoHuLMJ1rz2oG9FgBAbtaX1x3Qx5EcRpsX",
  "key20": "3WLKuACJaC1PVwrRfbNAfDArNyNH95WHStFNWUeVWnuiPuVC6VSDEbz7qtHyLtFrPivZuTeWJ4N6rHPVVwSDKdjf",
  "key21": "5A3HEootnZ4SyHdXActzFzozhrGTC29Zb8Kpsbz4TkcvRdY2XUnWfnicD16BhAKwxNKUsS1ZEex83Pq97JRWcvQq",
  "key22": "7dgUwyx4jEQmxNEL3V5ZifZkgMQAqdjw69inrzPbUfbyxcSv1f5PWD8RQnY2B4QSVLkRQ87AttgqyjfRjcYpUJW",
  "key23": "59yrdqeEF6cfwoGy2FAzKuRVvNCYjRT5ELM6w833AwwB5Wcf53521uUrQKGcMMwhbcaaNWRyAxnLYo9MPtV51bFx",
  "key24": "3LqVnk9aJWVmkmJPNkYANuiCqKqHAFkNL6gBwXhfKEM1GuwGJ4Kke8QXSQUEpUy99oGGa5x7QT3fnjJ98Hfafkdh",
  "key25": "4GbDgBgjkfvJCxoVgWgsecUdj2nU28qQYC5WWMov8k97ttv9iVQWGftR7KbuXDb4C2fHtxBwmJtdaSiFCr1fgYz4"
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
