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
    "4SkvLuDTh5VXdBa1QVSVfuqWUt2QDv8xSxiXbt8tPdqN21rgH7ddPiS86qEvSF7PzaMTtqqcEjfvxpGYXLUt4bSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U6gUq7onGmyahqUjBUpea7sw5ZU7or6ud4XKhy19ZjtPb2urRaw7Lds7VNmaBsryKNYPikFcxeQmiFG26QoLFHn",
  "key1": "2Gt727CE89rttEYkHYA96x8QaBrythnHPgq9uE9NP9DsgFPgGcv4FJBDK33uSGSgZaUNhNXxgSsJuzuzERV6NJjt",
  "key2": "KMGQEEje9UUprYsBbRdVV34JffpNbmFurNSd8Dw2qfiR9UiMewj3aAEry2N8EJsLi2CJhSAyU6uvMkZxuRk8xB1",
  "key3": "5V8MRYP6DcPWfuAaeVcLrGQwtXHPPBWsD1VfH8oaTp4VYAxxEi2jXcYoQAjgqszdWtQnR1Df64cZcwSNSEjqv9ss",
  "key4": "pmdmPQjddupkonuqWtcCC6F8NwRdTpMVXHGHq1PKFKZ7mYLhLj2gBLNE4DS42Cd6h1Rzgg7bLmoSwH7KZppprd9",
  "key5": "uyRBAmGVKq1vT436MbJcLK8fxeN9rPjhweppwn9DTWmpL3cme77ncTHdhbRFL1hRjfTLxiiiBU5XMgipVMbPfKX",
  "key6": "66QfTXYccENjW3KAPjLtVsjEpL4FkEVyRDpwCPvDA2SLzspW8AFMcgSEF4hQyaSY3qjxzH16NAzUMzh4UWDA3KXT",
  "key7": "2QQ5rnSav97DzDf2U1Q41beke5HUGPKVRotMtQa5YMte5zAK88EpU7nZ8GwpXia3VsErMggcEfEDWCAQJZdW5ACf",
  "key8": "4m59GgmFm8wZvh8RF3r7aM8WBcKFJGjkZKEwfBN9Pzpp9BhQNm9imAZpojmbqtcLKvG5SG6UmcxzG1uJ5FZEe6yM",
  "key9": "2a6yia1hTCNnrd9i111p2cxpp921UAyjTk1oDMih4z2HXCa2BkHPKUikHAgoxyy4YgXGDwRAY9yyVmuQZ55phNWe",
  "key10": "4vf5yZV36epcPxvJSMhNa28j9DL5QFuVzxkvHoAay8wnibA172RDEjdxhTiMJSSG84yjDjjj5gfJ552Z2VB23NfD",
  "key11": "4wvB3CviudQFRhPGy7Fm8g4m7YhqwbNRG7NdYajbJgqp3M5v3ZscuCVj6nyjqGisfdMs71davjyDEEvSouoQQPaf",
  "key12": "2tHXjetsWQFGTuMJ8AA3MoDSNQjaDPAb19K8zAWXk8CwHVHqXezTzuHMr7A3Gnjtq9XJ9f67vYVrTkJkuaQ9C6NW",
  "key13": "4BYZotXKXLY2NhzgsTMXN4m85Xs35dLnyixC4BRfTcQjPaqv9YnvY82Ki1FfhKNEGipjLs39WpVbJZBVnMDzZsJs",
  "key14": "4zK4pRJVtED6HGc3viw2vdcvjVFCto21rkyF1bjteu4wthpPm3i2unG5uQSSA9s7zJC5s6xJSEMrscPdk761NqSU",
  "key15": "qCVrVHMg4Rs5pk2Do3qrLkWNCxNF7fE2FvXpY5eM8ML3wGgmaAqGMdwx7DfbqH8xayRQWXEANiesiDBSNRq2SGQ",
  "key16": "41gJ5NPYoo8ALdeQvFiNx6nAygeCmqvKHWSdvphtwv77h1TgYmnexjeQ2hpDsc1tZbnzUGcGHu9qgmqqNoT2KZmz",
  "key17": "3VMvTDeT8ro7E47ZU4Q376iSBoxUjCM4FrfFWZ3URhHwXwhvof3NiJujG3upa32Gckc6FAJErztoqim6ARTWH2tb",
  "key18": "5X6V1PrmSBXoch93D53RZJLJf6R171AVa4xSadbt771VsiQNX9pjruGUa7HJpjrqHYc8ofPcex1721ckXKhzck2i",
  "key19": "5pA7sXyxRAPbfpWWumR5JR25fPJt499ZiDcPaa6xT5f7deBiSfnJGoUiHoTaigmsibRc4zHRDZ5FPstWZmpBZfo5",
  "key20": "54AeHhKbLNvTN4c7YsqeP6kcZBvaTpGnpisNvK9eVwuahLETjQVocMNCXooZw8xtbEx3boHL95qR6XvfVrKL3bdj",
  "key21": "3UPv1QaMX2gmPUhvPo3bEzXSrzMjtXumUHpDhAc8j7EQf6Hq1n79SMT8LaVFZA7djY1XQNe78NCjDjDCQ7qRadiy",
  "key22": "4yirJMPjHHqsHkhMrB4jRxWdLJ8RuiYoeAENGBo4CpLZsyQaNuXUUZZGeCBuswqwknh9dBvi65PtohuQHksQuNY4",
  "key23": "5suSpNxV2JLAR69p8CcAhtgRPtYpm3NNHb7pEMvP8g9eQytrrqNLK5qvzAdJ6cgnGwEsNCyE5f2Vs3kwa7BUMzse",
  "key24": "4ppGBqu4FpasUiyGCFiNtVKg1MRhCfgPhvuWbR5gJ8BrgYzSFn1u5nFGUpyEh8GSiSVbe1NgdYdkuNWP4dP9Bvrk",
  "key25": "4u5mgCcKSZzVGYxcddsmVB1vTVqbPDaCCYm7XWbMBoKQRHhTz4SbREWeJ3jYbhtM8yWvxeBziirfGeu15PfLGuJG",
  "key26": "44szmZZs4xcc3W6fffUMkVAL1rrPSG5DKiUKpKE211zZo22cA3DnwHKVSi7e6EvzLSFT9iNhqgDKAVm7466bPKbL",
  "key27": "54yNPDPRLAuUwys7EbsSo4CWp5x5zerfxfPf2BA8WfYqX6i3RKME6AEPAaLyeeehvyCat6cH6KYCZGX1xoFzReac",
  "key28": "5pzqZaNhbiuJ2Bmr73BX2djpA3K1JuEfXGy1PC3HoPA8RGc48Z3spK7FBNDDNy55Q9he5JQu3VS23QqY5Wdq18Ho",
  "key29": "4mGf5fSqaeMrEg5LfizCup1sgFopXpvKHrK4GLXkJGRRFBRihbGEZ2jvDdwZeucrQ3GdRoDwZVajcMgkKJcXDAdW",
  "key30": "368FJcMgTE7AxtqJ1RxEwHn5hY9iDXWd8pY8j6JQsmd4eAb3BdikmQT61CM6iNQzARA6xZMNvaTgjoT3zLxVHxAQ",
  "key31": "3XFgkfFbCTmusetMu3q6HnLUJ8kcd5WwhVAZh9mXY1Uf9eL4cz3iaA2GaZomw1koExxzGZcLNqxjkh5SHktwRKFh"
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
