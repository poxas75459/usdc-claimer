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
    "5ncdgsKoLu1yLErBFmtMJi1m3WPDshmwWYJiX1AeamDEkinCuXjeqZtFCE7zEaGVMibuf1FLLxfP3fS4e6YPsQqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxc2ZAEPSSdUqkS59w3ZWdRx3X1aCKXX1EoMnNfB3iFwXdAC2p4wS4v9DMF84hgLFHSNsGnPn1tPThC2uNjLX6L",
  "key1": "3vkygTrFkkz61F3ZcX2xWZs7vbA6xQNFrQHqJH1VyghahbWnYN7VyZA6h6Edek23pP2onZ5Kc8Z5X4oxrH7XW87m",
  "key2": "277yesrSwrhpMHnSbkLLSsiXzjC7276hmuwkETmiE3ZmpNUo85y2o8oNARrBxrtoYVoj6KmKRv9wGFyQF2XVujv7",
  "key3": "ieiwSnehveqc72tJAkiiTMqusVw5kXaJNUKvA8Rio9S6okMiB2SQjp7FW8HoASqmtiKXuNy52rG4GUVYg8ttKyM",
  "key4": "3cUasZJxyhzSrAVLx1ctceJ9VzAqeJcTRmgsdEtodeQ27nFsF622W4imCZ2wg2FvdTpkCxH5bbVoKqr3iBrXvBpY",
  "key5": "4TBGcvTXkV64VoiZbPYU9yQxTPWQkHpAdAqzjbwgXo7VLHAde5BbJze5TeqzPEVXeFx22tKvrMHt112wVpAEaRS6",
  "key6": "3WyM72mZUwyddEVTiCWiXo67f2ZH5Wsr6ppW9EvzCmDRjPxax2PpYfoTPjfPuPkFQb8cEoa6W9yNkkWJz8NweFL4",
  "key7": "2eTonk6UZMdjeL3FSxvAzqnWwmf9osid5tDzritFfVCEsEipJwvfEC3BdNDrRJba7LsEj4wJQM4ruNLZas79DPhf",
  "key8": "5ZUwefgvdJkR387Ho8cPVKVZjY6KsbtYDSnfpvKmXfk3TP6u5mnbat7Zy4icKJpDc1jtLdrPZvDYNt2deV8MfxDq",
  "key9": "4PFMF8Z8SDSMXMSWtdmay4PhxMVGZD5QneMFXfQYTxdXCBLMEjpwE5nuLYK2babghxCxDMLqgWVhUGuNcFQzJw8b",
  "key10": "2jFPG2bMVVBDqqDjPjnAWazMw3yPTeKvv5Y39475c4MNBsKFDiawzdq9SEypt3vj17qShbf6C3SVjhGuahUhDUdL",
  "key11": "2eUN9fQ4jf2chMtssuJ66P9a9j5jLuurKEuWiG2nwo82aHRMsreYp6w9KLJDSAeoZhKV3b8LZGnCT8orA64omPEv",
  "key12": "3fvJ7G9Qn9m3wKZTiJiPQcoGqaHGtC7qZ4tzdeQTMTJsh8G2cbKVnmk4VttSZ7aFg1cthGefp4fUdSTp3jdVVGeb",
  "key13": "5xddPix65EQMBmDncBXKYwA9WMGycSMjy62Pof6AYbRAKoK3pRheWMxB4pzAxkHQYPp8U3qE1poVbDzVm1irNPVd",
  "key14": "5ZsBbMtj6PdWL7EMbJwKdzXYdtPMjPoHWXhcLCHt85SC9XVoDasBKD1gdoy9M5QFQPEZ1yGxLCBvKN6S7k26f73j",
  "key15": "5rJsT7C6p6nRDaDrDnKtK4HDsPuQthuAZyvGgMq43zxwJoJ76hP1XfXjXLPMuc5t3iEh1ZbBd7xSZgvyw7XoKhDM",
  "key16": "5E5oCXsXmxW2Dq6SZ8usZs92sejpBoJrDfNLdnCLVuFFtoExv8LYXTNr4rnYbLw15ix6KeFvPXAtPS64pjduLEUk",
  "key17": "uPn7Jx19mKRvF1hD9Hs6mxhizMnPexoqYgSYaVZm311SQJarzKMabqPughX1ASqSwF4AepvTUTGC1jfZRpP9RGz",
  "key18": "64G1gdcKK7ujz8iTtUegxsNaEEqQ9mUE89uuGh1d8XV3GZfbmxHQgp99YBazr1cHoZtS8GFURXeQMYnwbQLZpWhT",
  "key19": "4jBgd5p93rQ4kDnscPW5hEk4jcJGWAkcrzDmsFf3zMqQnj581v8J8V6MSvNyUGzEwvNjjrYMZPd4pr5hkLU11uvC",
  "key20": "5nyfQoPz3n5KDaKz87SpoZYcHvXZkP7d6etrm9dFKYcVeYUHs64wPgXL26NqpfwRHuwsAhjzpSrPMUhRcE6pe3js",
  "key21": "521souAgCrVdns2cLbU2CNHZDGGU5yooPkWwxGZcnpfJeEAU2Jxh17Yv4YgW8azXNL1cy96i3nATKHRNURng4EZY",
  "key22": "r9K8DPVvGtztXafz8zh9bGN1z52rfb5Ng7u5zm2QwVVz3tDY87nSNgHVWZCucxnP7xZi7vDD1tqVzFPwq4WYMPh",
  "key23": "2HykmX4QbZpgBpNeF8ifueH4qdnbW5bwqZ6V1Z52EVRqgLRSmhTpnRiTqFab5CAuys3taXQshrqSods8GMG5pNeg",
  "key24": "5dLWJ86ka7yoXACc11GACBmNFjCxG5X1HzE3ZBgQAp4x8BZoDFrXXBCrjM6e8hiCB4PmoDTRJJkibsyDk9EJoRnv",
  "key25": "4cWTJgBobEiGUqDaJ2izzbpKvWA2Dze4QwFvKTa1KAgARSNuUtzd1mvjKqgX72xmGZWWbb7bdVtYErB98iMEJMFj",
  "key26": "433DAR3ijChGz9S4kpKAfNs7SPEyQG1bkkmPVBcTkicf6PGX4nZpnyTEdBbT19J9s8FLKSxDB1xiX4FxnQ5putjC",
  "key27": "5sSwKgBWt4ngGXzTh86k35HYGwd8akFB6ZLZHHdqyEFmA72HVprgp8bNcxU9bTQH8YGoyrnK73PsppoDM1pifvsy",
  "key28": "5FffPNDpqMGgvrqdAppmZkqYM6fBGo93vzDKGsLLmMScPMeBabGXLnZzxh5E8zcpq1beGyCkxQQdC2Vq5nm2n1BY",
  "key29": "4ocLeULEDxH7Una3wPaqifGKUYnKDxpddQTBENK8nGiPud36Nz6qxVgFzGuzBmToCSbfJajPFpqR7Yy7Yx9BXz5K",
  "key30": "c5yNW3PC4Bhji9o8wS7CJ1ZCo4G6P6ykt4bmwXRYV1yCxsu2hbpqDCvvyKcewNWjdNkXzpVLPeKxz1uDdC33Zpt",
  "key31": "3M1nJpRhmnAymW1UVzkj4sj9hUJg6efMV7a9cZpzDaKHAsmnESPWyRvRiHDRgJVvEBn1zWPsHDBBBt91Bu82Py8y",
  "key32": "4SC1fdP9EFyKHJsdRjysTfqEgNom7wuUR9u6rtJXHefVwr1seix7JF77YCdca7omgUiEqaMsqY2KC5NBHT9e4dYF",
  "key33": "esi227sdDKZGGzx4R1y1iiZdf17aH7MmS8zBcm6KR6eYeDwmfxycgkWuSiM1eX3TQ7Tpqt2GNirw6hq8bUVXYJ8",
  "key34": "ArAoyH5z11dqwTFPLRE2BAntYXCA47utWDR9e1xVAxoGMq9x9VZ8bhmbaKKagjT4EPL6JQ7tvcmoXoXykH6uBRU",
  "key35": "5rhsGTS19Y2LyiPbfiuJTFWCM9HGUEsDttWqUGV3EkhXrLoMAMLToqFrtVTkV4tVxEBxq6GxzVv6pZYYX1mz9qZT",
  "key36": "NW7G5fePiNNjamTcS7CgDKEAB6ey6cYeTgDJ6pemanfEKasq5hQULwrRCVFLdSoKayVErDFoikp548jESHC3oCW",
  "key37": "2U7YFDt9GwwpdeHbEty2igmb7iBkoJyj1nwLrjYGMBiJdy6HqTnV41mgdJw1kECmUUutW79et5gMNCwicEn5L4DS",
  "key38": "4NHfz2JYUaRsheTnbm8vurxQzs8qjCi3SaUNa5zQ6HV47wMBV2udxCHSA1TPKALu7v32eXybUaSjr5DPz7qr5Y3C",
  "key39": "1wG9kTCoLwH4BVcZJzAV7VYDG4xVj9jbevYDg93EbFCxvhGAhCmLowis3muabfsi966T7usaNhmJvtE9CTRdqV7"
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
