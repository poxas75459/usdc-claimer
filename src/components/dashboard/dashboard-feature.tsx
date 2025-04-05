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
    "2HP3HnZ6ZgeKfLFVpTuXe6gnDJVCyTJyNjctrfZThyR957eMWT4gjKV4ec3rC5TdvC4AeBpJhkjMLiAKFaX9YPPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQ3EPP6EsyyKg6uwrrDXNh1DYxD8fone4JZ2Gr3M2xJENhNFacWKvvKcK5UPEMYR2bRXDqD4Rue6eQLfYhhk2h4",
  "key1": "5icVckGTWKtfSBxvp6vqjwoG5ak5SJBBhf3EXYQBLq3JQyRrYH62WWJHgg7dnWpy4q5Bj19aXR12mnjQjU6vk58b",
  "key2": "5nHyGtawer295BxF6HyozJ3UkKAAVcd9VNrFBZsZX2fd1HXmSaNbfQp53RfT55b8ngpC542tRXf9juxYECMRHW7v",
  "key3": "Eycs8ysVPFSF6DnE7GfTR6ULU6dVmDsxmy1mPvJSzmUmWUr4j67y7jd36XeebiV2WaPLCWLYpq3rqwCuUvxPu8M",
  "key4": "NeBgfhpVRchs6JYMnKXvXBGKHsD8JjUtgX4eFifwwaeHpX2F7CvMCiqtcUUiHAsZMrm7c9mJanrm5NW3CbgEppU",
  "key5": "5r27McHUixBCFzxxz76gyawdvvqNRVNxuMDqKKtpUcDzeFReUie1oiExBUkymUSNPLDwX35KFgKvzK8N51kXCvye",
  "key6": "5hXLs9TDxxTqXgqXxoccFhqmtUYYUdMaG8Cdt65kxR7WzewJPujoqGXdUHuU3y47zsQEaejm9XhELwRHHP4DeFkf",
  "key7": "29vVLXo4Fr62DspjEJupLRw9LxgGabC4CAePMV3HqzDLw95QgY9zdHoywaKyEoYYKa3kUqgjp6U8B1BJxddQpQ8m",
  "key8": "5FUadURwC89Fa9bDh1swxCEqMwxYESkS8MjE8zJCSBC9F2KrYQNTbbNFjFGNeAZiCzc4Cysg5ACqDUPb1fL7qDmr",
  "key9": "3z8iCGtuqbMxrKuXLrLGNHi6ZyWD5Be7r6rCaNhAjJQ3hPoy5AtrmTpXsLarjyEG6srSRZaaFjV2Trs8kGJqFTm9",
  "key10": "2zisAJzZx67559yvKHLFZoq9veRNdWCfPrVwCh6WCENXnUhRFFTgt3Yj4HJoDffhGML3bsYWcuRrkLwuRKUT1caz",
  "key11": "3EAqqnqifbY43GB15PZvQcUUzytRfTydEUyNtWJ23ZJL7tmBRCjymtdnWr1mxyBzEq5ThdZzhKu1WBjdJRQRxPy",
  "key12": "3khtuRejTniB3cs7T7rEJkVXs6jG4FcfV2RyBuo86mg142A2NAFkLiUDzAuMKgE7YxYShNP1gy6Kzd7jdo1QkS1k",
  "key13": "2XZM14BY6hRwGuBa7FTicztmYo3GKUXyXKEjcyt6NdLHWwsGKKH184i278Wz1XqiMrrw5ak3bHTTym2An7hKL2iy",
  "key14": "5Z763woG896EL3SnVVjkg8MCyCsiYjAUWX694YPpmJiwGMT2E382AyrrHNKGQmj9YpdGQ9224tndzeaEMzocdFFR",
  "key15": "4BaEAwf88jivVXV3wT6Nmr2nAKduqmqE9fAecWNygEg9ufweZD8QxwLDHGi81znH7XBgBX5NGySWT13aV6dxhn93",
  "key16": "5DV4UpuTLnXrHJECQgTA8eYNfvGrJnkH9yFGfaVL5VNhyJWyaM9JYP5sHjyXCcSE7adjULXWctpVcwcxiaDFExJZ",
  "key17": "E4TEeaeFhxPYJoMGBWGbgBCpLcM7c5iEeLFNTUdLeGc91hDEP7W3rsAS28LWfQbkUdEwiyxEBYsFLtB4ABNDC42",
  "key18": "VrFCJPgeS4adKeiELuyvij2WXwhjXC8cRbsbzWBGuoP7tqAXroQj61YSbB4pAho5Emhu9xLhvurECcbNzZ7u1VA",
  "key19": "GFNgkgLzbprTEDLRReJvC7GWLMw92maYjzj6GZBLEEDVDiEKdScRAhbNhxsNJTHiSZEYVwYVKeZmA8CKAB4bPuh",
  "key20": "oqCp4VAbeP8drRqDxuxaz1DdNceXZQ4VS1kQEqpgsxSCd3zWMRsUzqrPbc4mWSs17cCUTmZeAJDM1DqZM8nYXRk",
  "key21": "2mSZFYuznRremMBk3C51kptQxmAUr9zRkyM1tZu2YYvaN2kqKhmg6EU6JMsxWvt5btuSUP7K1jWdzr2heRfexFmM",
  "key22": "55xWGZvBst7Q6eFe537uYwFDPH1Lk2bWWXo9pvPELE9hcrhxcif5jgFjfgXrB2SA44MwxPFhtiVEGrFjAZAknzbu",
  "key23": "4EGxbKdWJ3YtYpHRyhtgdSuWN1tspW3MupmupjjBduoKTWe4mCX7YeNRoJH1966qSnomx2RRSeJ8PRUFrbaXyxhf",
  "key24": "ePgp8QttP9Bnd9gkVczCTA2yqYJAcWtRjDDPc9WcEJc49YjbVsKvjs4oh6VtuP4bi7UooMo4RBKgqj8sJYWQjGi",
  "key25": "2Cv5bp1BahQn9R71dtAsjLLxaQAVgKPaJvN5xbU5ZLeS3Ls5oociVEY1zPAZeHB3EKcoj1kjnxy9QjvUdknzHA1g",
  "key26": "2GCjSrvP6yXka38cxYL9vdJkP2VLn596iSAGog3gtwvmxb5RueMiHV5Q953VAc2fHCvQTTaVyHhTsEpSX2HtxWHr",
  "key27": "QZ4wUyjmFV1Se92p3faS5hrwQ5K17P8Qd2RcAGQrHyGYjeQDkqXRPfq8xZ6G8LU65nywYKdG5grHtrbby6fmwAU",
  "key28": "4du43UunC2LabNZiSFv8Y4mGHcZBtiwiS7KRuWZoM7DkQsVroWms3w5CcNpFWeZAtFekhh8DEXJ6hKRwf4tuxv6R",
  "key29": "2NuZz2iHimXVjEoZErWt3G8rVzpmJewk2XPCfxn8KuhehWZHoGynyWtfUeekGmYgHcDEkKZTmr4M2R7DB7NURCo1",
  "key30": "xNcM2S9PjAR5sKf2z22RnmidWg3Z7eF5UHGBFjpQrfNmyp88tkEvhJh9qU5nC5KoVbWFxq2vuN2sFqubJyvkboR",
  "key31": "2189hGK88Ux5sgmijehdhBozuqF1jku37XjGhCxCT2Jqjmy4NXaJtaWHEnxdx6J8z7wQLH6HrUA9qj69epSCsRwr",
  "key32": "Qaroo6agPKoNfKMdubrvKk3CHi6Z7JNzuekJQ23hu6VtiwaNzhDdCVjSgjjBNaVqbUkiEbpUeqFArhT3cNfckTu",
  "key33": "4MM8XwhgdbRC3mWxTzNbxXR27jp1yZCixEi6ctNqSoaMyFKvy8ontjw2xFjXSyer6tvttojkVdFhTQSgqQSzjNot",
  "key34": "3RQYBfSFuaNwXMANkx1ZXtZyouqwMuPVPTfUHDKm4i7QvNV4AWneK6qTKRGQP3AQzBtpHpKMb5rczYS4pp1REdzE",
  "key35": "3nvvj2cDY6CGNFJoNSctFnFZqnMyFhuqpFsNkbXLdkVSHHjx22YWm9p28wt1XYev4cFMzWwQN5aUFSWrHuTh4jNi",
  "key36": "ZuzbhqYHbPHhcWUgpVyPb3yBgcKsEKRRyKMhfvGXCcSKjwrWH4AZnWmTAZH8CVounjN83bDDDENNc5qbjTuaGZa",
  "key37": "4FNXf5FmrmzuP1Vrb8WvmUYwoErMX2MhUEsa5AstXkpiSnHvYdJEbuiKLxyBY5FyCY6TLrqPYnzcwAFtqyfiNcwC",
  "key38": "4ifxokcexFu976TZGnMbHWBzGeLkoZM1qtQzJahobkfuZ1NbMVPEifV4cfq7U5TRRK7nuMU9fJrf1cSuPCXwXKgs",
  "key39": "UnGtfPMuZEHV6zPy6Mtanv4TabhovAnbDftQiDzAzjDHLRts2g4xdKugCMJYGQgtgfaNfT5pCBcadzaxNQsME7d",
  "key40": "4ZUtphwnm3VV9j7XAXacajk6SEMfCmhC7UNmmknF7B27fkcifaA6AYD6sctNtdusNJCsbJChL6huMKbjiW3QZEyZ",
  "key41": "38sjSeWaHN81MVT3VsN2ngoZesD3VErQhDdgFTgQaBm4gWPdRQR59epujPr6o9Jp4D5cAL5QUHehzwDgjsSNW1Ln",
  "key42": "3jCYvQyKuocjR1HCRKJDu7hM4TXz4jtuTFroTDq3jvNuBfaVpCLd4nBThNHogZgcrk3edozXpL2RL23kamPPVjFA",
  "key43": "Kmy7kHQAH9MGhGj5L5Pk6yvwNxGgffYDQrL9Q1n2TCSGLC8v9iAWzDLUDyeUBjPowwbaBnBXxG4h8yVwfLgTQ2t"
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
