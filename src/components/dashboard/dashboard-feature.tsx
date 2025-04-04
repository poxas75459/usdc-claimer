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
    "3izYxVH2D1FrbeqJ5pxrraMJykZnYQeFix7kpFkfHKiw67g7qjH88woF1ed9dwLpLbxE6y8gQb9KTLKZvq2gsr2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N12D65muzJrYKhREp5DXnM6vJnF92YZ4H2EDvQ63PGZ4g3LuFXKHfDTR75WNSyUVL98FXcbKGUkpDZgnAunqiYo",
  "key1": "5mKat3XnL7hacqQupQfWPPq7Z9t627QzAEnx5ZRrHS9h753VkMYvoNfwNMTwsHYByZbXhM8AvnoRkyDK2pZWkpG4",
  "key2": "5NjKZPjVANU7PfHFTAgu8dCabEtJ9AtbPu5rJ8q8ctKKUd9Vr9AzQy8EUnQ9S1xw7mLUdRXXqinzL57QRaZKXn9R",
  "key3": "2AC1RDugvWZY839N1cqCWV2nWPmAhiT2WLQGZf2gGbs6tgdAFsitr6td4SF1Vtb9ZAVFNianWuv4PEBkyWe2MbHn",
  "key4": "WnqY4KjoMT78ocL5ZNNDnESu4V9T8KsqQ8tkPyu8WWLgduZZ19nCLdTH69rCFwrgcYkAVvMTPrgGKUxeZtjn12b",
  "key5": "3sVGA7eqsR7gVHKghZ7gMxEfLXzwfx6r7pmWpGmvQxFKrEVySLBAUUCAY2emKzbuYcCDDNvLMqT9KAizr3nYpym3",
  "key6": "4u9yWtdyLBvcjRCacAm731g4D58VJC39SaPzsxK83U9nk2EEMy4SNWfFhuFQYyt3pk711p7MPTmtTifsCFT5ikWE",
  "key7": "28oBaFTjCk7YxpLiUUzVQabWFJHHrLLZEq9kCrDziQHVjjtFnCPPyTYGJEV2qH2nb9B4jLj7Abkw4i7bQyrfPTaF",
  "key8": "2ime8ykQ9QWeyTTkoi42AUwRrjJCtAeisSroyNPSaCNE3CMafgaTcaM3vhhtfyWyyH9xZz8fDyqtPbqbEKgRYxRt",
  "key9": "37RWjf9zxMEHT15VdxRKVZAFFuZNX9Fsfn93MbW9FjcDycc3B9tRz3yTDEQ8nqZtLbyoTaeXSxKwYjWw1uZnLcdX",
  "key10": "5MJ7xe3rv1rHnJAVfN7cJjXzTKMzAMyqAYALWfdqpGFbZCm7uB91L1wi6sJLiUeTMJEjJtfU2W1fzvFf5qgfAeEp",
  "key11": "rcB8gFC8zGyhrDHDaaumamHKGfgkDDK1L76NS8CASPaNKudrYxhWmGmZgXjHmqKPEqwkrT5HPF5PCqbeZts5xmp",
  "key12": "3YBaqw5LCbDFfMMFAE2AR3cT2xVk9CW8m2AFUnWWQUDfmTrYsVaci6SYvCTURS5x8ZwSTeaAg7b2Uh9PqfXuX8Q3",
  "key13": "4fMnmNKtKMQHowfjjaMpTNK8cfQVrFzYE9yZps6nFhykHBJc6b13dpzVYWvYcFco8xU9mjjmaLxYLY23hgupLtuG",
  "key14": "3YX2aTDFzGKxKNXt9VGbLaGAmu8CR3o3DggLDgPajLmEGaiGiwYAU6CoDSoVdgA7zwcJ6G1EEtmWXeBcswLwcz6P",
  "key15": "4kbcXwXyUc3dKidxf2UNHaSw4E1MCHN4o7Aqd3Ak5UFJPkMQXQSe7xnoeKRQbQiTbssEj2Rxp1TFr6sHMy5oth19",
  "key16": "4fVMfroKTMD793uRjjyxtreWGSNReJi3FR3at8tQGbXgCfFwck2mCcUPVcaW5oWLvbdXqW8Mx6En4KSrvnuCPNQ2",
  "key17": "GEY1kEczsi3Ea8opqVJUdkDmjxWteZZeXW7xNttpawiCh19p61rbmJCb7YuoGVZPf6u9sZ5EeRryZcyQDEiNDcc",
  "key18": "77QwU8dB1yaA5xQT8Wg89PGkVrv1kRwCSvB6GsQu7ewCGnJirZNsdmRdwf998JPNyLP47ZaGmB8VYW4pCutfTSi",
  "key19": "iJj3oqz2takg5oEMLWT5KkKbwwq8cvm7JRErbN6QPsJzzSfGniJyLWFUmimPJKAp3T6dDgQzguvnvnuRh2YKecF",
  "key20": "3qphd5aeRdnx6Qhu1R7nrXry4ufGovAEL1WU1AmPqb35cvhVZZXs4iocMBiBYyXfA9rBofDosW46149aUciruZiS",
  "key21": "4JDR3N5Fp8cXWR3aBX27dcmfrm4gEKK8oJecXNPn8XcWN9XDwFmgThmED9CyfmKXTu4WZtjaXSEsLDKXeDzekjEZ",
  "key22": "3JPpAJFdYKArfrdChmmmhTRFwa1ykTcCBJLQMCSEXaFnLryD3KngedmAN2S4vmjMTjSqqEXoh5dwcvGpD7bsqCey",
  "key23": "1uSUbaFDhdnhpLk5WiEdC6VebaRJ1qkpCW7c2De2BSbvxALhiNWgBmeeMjESaQe5G54KQkhvyL39EP3m6wVKyv9",
  "key24": "5A1CXMYNDVepSA7gmEZ5A4comuqS2SS6afGpxRDYkZ4rNb5poxPP5tDt2ZDp6opboyRRBXRLextQgxB4p5pmzgX3",
  "key25": "2eKUkCEsqLVpAVDmAdY7Gkjd81YnfcPttrgrQLFnfgD4sywa3d1JEHaBmeauy1mnCyyuC2tsyaJmhNrfduzJQpxF",
  "key26": "wKFPBXtvvg8BEZWMnAR3vNWmXuPaSVj5RGhNFAW5yhZ5u8h675CQ7kEwR9xY8bsffWCWRQRjxAEkrHNXawXXErz",
  "key27": "621mwD64MrYMxoeY8hv6ZJB2uCYFhLKL6xMVYopgyrzXmZfMqN4zJtZKTv4PFWHLQQ3NkYtKLhhNMwsZ2B8MgT4h",
  "key28": "3AhuEaYMZbUZCzzXpkNx4YmgSsXWFwiNXebbEcVExgeiKgF4TkpLU2dGU9LEkEr5xRYHkBy6qW3964gPHxzNmCqw",
  "key29": "45jz1yGeL4JvfiYwPcZZhg3jXWAwMKskh8VQxcHJtkQqWkw2pSDjG2Gr99TLnT5U11dZVSN6Yvs81JehFvC2zzdz",
  "key30": "4BiZB2WQ4zffMxBpsxzcaNMnViKUT9GhDxSYWdGNA6hWTUz5arVQQbyQAvAKt6eB5SVujJ65aBtSABBYpCrWkXvi",
  "key31": "2Ei2HKm7x4qRm5tt7oqdKuCnxYGwf9GQGPrpWkNuSrHSoKHZ9gsV28YdvVUm2U6BAwxHAntWvz6vcZDJCXvimskD",
  "key32": "2a7mSWhKvqtQfBiMNizDbH5PWCDzoz34iaDXNDpWmGrSvECwSJadzFfuabUvrzEXBCSLiGBQH3H4ZmPDW2CptYcU",
  "key33": "yZcxkcgNZGp3ZJrJXiqnPrQDjyf7sYnf2diLgwVwPwpQGuzYGukC7g9BaTkqQhLbohweY3fLUVL6redEtm83BcK"
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
