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
    "4p4Zsww1kdsth25fqqvSmxaNBpRaoZhjhEh2s7zUs8yWeVsCKF1KqT1j9tuf958YX63o9jZRcpV4ugx6D4LUo8Mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmqKYnbRFg5U8mbnv8zGT3MYfe6h2fFmVgDTiw7Qz6WMtZMAfddceCYtEYfZUBaqYf6eepau6NdpSRSykF9bDbG",
  "key1": "sjY3GAf29AKTsFJytuUad7i7CSSkH6u4j2TiXR3pGd79wjGCw772LaoEhrRr2JBLixyTmgkGoG1jeV7ceCwuyRY",
  "key2": "Ymq7fCREeiKRRpS76SRXbg1UYqQtQA58L7oPv2L4XjqgTeDArCmnqbrw6LWxAy91UERdTZ6D1RsgbPnc8EdkB6B",
  "key3": "2nRL9ReNuhseDbMmpqXEjo3xcLHewZHGWgd3Sve3bTpNbbyQNDGSkS3mLifpx3qQtaBnxxun7cKVjuabSNsQ3QUU",
  "key4": "CmBmTUFLucTMsjeHMnTfjjPqbovvJ7WPKyGHgUBgWDouVFWZ12HwF3BVD4j4pmc7FgqdopGXse8BypTpyRKTV6w",
  "key5": "47huibufVJqFkx94ZiPv4vJJY1eiypwe1xHtfgBe82pBjNVjwTw3Pqb2rrsRMKaasdiCDrcRTBxokVjAS7weonmt",
  "key6": "45fctFJcTRAvasUjJs2HhD2yX9RQA1it2aKf9sAUeT2w5xg8wXcUckQyTttsV1v8H7FRNPuXwqGtvktu9xX8HK8T",
  "key7": "4XvKGGP19LJwBnJrweqztT2SXupbP3kBVDbyhX4wKtYZ9NqasBE4BLHDy41j9uXbW1qMEpdQYByyPqTKA8Q1kfae",
  "key8": "43qhy5hSc5jDD72r61Fxjxxwh9ijqLV7eqYxYpHC2VnEwMYjEv1N8FmgXAEYRTAFavabMNJFatzSW9732tz4PpGQ",
  "key9": "3VBtkSgYrGdrrXj7r5KB59aeT35rs3SQDhNgGk87reRVB2eACfRcPKxHgLwUM7okvTWCaLPHDZK92QAfS7aWorH7",
  "key10": "2sBUpaonMtJu1bGXTYK71JjxLvwZdvKdXduv32rgYCozzR5QP8akzQj59Zkr32ym8DskSmaqcqMULAWAhx1G8DC8",
  "key11": "2wy5nTUVqZ8rNHhGJwR42zPXTZncsb1PskFJaiGL77Tbfdi5HS5yqAMvyuMrSRozxpuwcMqU2CJVbdfnjApH5acx",
  "key12": "qTtXJo86nuzxaZ3VpAhC9DD331W1wUPc9qwQGDdxWZAbAWFWzg5xKFvrLajDJjT1pzRik8AZWKQP2JbS4ib5CrG",
  "key13": "2zFFJAYw1V2sdV9MmpXueBLoTda5DRHgFQoo79ZRCk121CRphkjN3aXnev6kNCPqk9SuV7Mt1UHdHsUFpiJeNQ6d",
  "key14": "3B1QRaXjMPVueFjfiPMr2qMuVyYsGx61vJ7ih725Hu4zBTwL6t6LAJvPDdYvHd9tY4dSzh1zz9SfqbRTg4mnsiUz",
  "key15": "3jyM8QatZHERVp8cARkhxzcVUcegiMqczZZ3LQzVTPgZp4uuQfQwxbGXyx2tbuqoc462L6xcthhbZPy1xX5P9T7Z",
  "key16": "2Ffz4Rw6yAMKkaN6XtU4nxVVcJAsfUnvbFMSAZH9ymxXAhND8eytZ5YVdNL1W7mP2DtnpzFS6vHqE9eiiyEGTVfR",
  "key17": "3CEZF91cACM6GAhuW1zrKPS2qDwVzmsATU6QiV52vxkCVV6PdkMA1ktZisk5phzpvdK3vG3gsykaq4oKeHENpwwk",
  "key18": "4u1SAQCyW8PVjGo1KkZR5wiPgSunPZCwKPqGA3ZdZwcS7Ftb8qfoHQgxFeWB5Q2aUU9bv6vi4ydRS9Kqyi6o4DzS",
  "key19": "63X6ocES5cBnrbT5j1aLptXo8KRx2r59HBGLdhdrzsfpfry6Eq7m23sWXwhgNEbrdvo3FP9cf82r99WG6tckjmaS",
  "key20": "4rEwyz8o91jxH4tEpdJUoAcrGrc8PDJSeQF4UDg26kzPEKtczGNJ1x8mVVCLT6LMtAgsUqyv9mt5oMWxrYiv7Gyr",
  "key21": "7MUSwU2iK5cqqsS42pwkorhF9tFopQ9isxk39bgcCwZzXbsCdzjU72XKDiQPndPnwt8ZwjvxSqddKjLXX2kYWJP",
  "key22": "4dG4v8GBHrhktX3ucKuZs2krGx1VqSyu2CLwaVXmwSbC25uCKjSrmmUBXwQadZzRP1NScbWrzwqo5wTqN5HJDCpG",
  "key23": "61earWVUWJtxzr8gwHBwK2emX7oRNCEPGcqzT27sb2QmRgGqjAkhVeJ9nZ1yeYkQiAfXkuMZGnZxjJZFJU1d2nhC",
  "key24": "4b86Z4CtNXijSJ1ZKb6DERX7PLL9CKiw6jExRxXcW55wAuzzyw3FSRLDK7K63iCg7F1tgJMCqndoFVoF1d42Morr",
  "key25": "NEDTD3x4hvTTQvn7PjUCwjYXRudfqX6d5T1Aj7byE59AvHXzmiMaPATQb3MzC3RcJgDNVZUHCqaAUUgjyghy2Qw",
  "key26": "3ii9sWzPBNR8iirhbpNzSDiafTTcZVAnFXqCytrgxLZr4HF1nYLjMZs6k2opep1JEKC5J4NResBNCB1xUubh4Am7",
  "key27": "oRDTJ6Whg5Qu2mhrggKNj9r21v4NYP78gVCNMjjbNvTYjco71ac3k77goge4vPrB3RUJNrjXtvxYZBYts1ZNqAx",
  "key28": "5UKqff5i4tkmQYGe6xWidD75rjCDr4htytcxUKS4gLXaB5V1DCcDXuU2Zj1U2qxTMRrn57BU4JC3h7dcKiwSFNuT",
  "key29": "2kkeAnU956huWyVb8wtDX9jY7a75nDZVKhfeYto9Gjrm4MUc62uC8dE2FcgEjEdweczueRMFhwxrPiY5BNjiYz4f",
  "key30": "3rXnYMt6MRzVpZSBKSjVjvpGvEbXUiEbvHWEy81VGcrh7UnRvFsFWkzwSPeZSEWpxTmLjSDHdnMx2VueJHFCnH8D",
  "key31": "4Ans3kkmCjDbR8ZCaQh9mqMFiyiqkdsDj77E9LpfVKNgQa6182azTQamUNXjyte1PsxjjbeSfWmThuk6SpD2JFdh",
  "key32": "5zyH7isa1KnHsenT2drUGF3vPGSXvqST5Pa7zaMHubXexZ458JfUBHXJ8n182cmpkgCQSgx18A1Er4sHpAUJMBMJ",
  "key33": "4S8Bb2snGnMJ6DGbbtmXBG8MT1ZEcBWHAbRnR6UR46FRKz795cLVsgQybgQkjuZ7ZNHnSLBjvdjeEaZGorygzsBZ",
  "key34": "55j58aqhahbiTLRdety3rmX7ZKE7kZJj1x34pq85895FMLbB29yLwG95oNwoYFDAY1hNJ26Epi49xoGQedw2XVke",
  "key35": "3Yyi4LSb7fCwpiuTaDnyj1FfRfeZ5qpmGr2f9o68EYvajYnHEW4UZbZUxcqGNurKKnYnaoa7Ee7C9EJetBDQvbYr",
  "key36": "63jCcHxt4643EyjtJNcNiMyZjEH6aJc9Qee3hox7acwWM7mYcbtU87Aim8hggifrWCKjoutPaLL9FCKjonBkWgFb",
  "key37": "5UjvJ6EZc16GG9eYQaSbhkVmJ4F82L9p7d8uCsSZLn3FJDe8Jnxpu9vcYrGCmGXaNA2r8kueJNDqEj2Mq2NpydQZ",
  "key38": "F4jdbaoUb4bmHqybvyUSuBWKmUxuo97FwC1k4P7UiKgEFK9fUqjKccjoZE7Qo8aVfFxxBPQjDcgcxGRhHop1SdW",
  "key39": "X6EwV5NpxCuE7yzyt52HRREHKDPckKN3dwLDSZhGNmkQ4nsSeMPByKADp9zn8FxWryJMCf2YVVVhzjXAoFATmeG",
  "key40": "29Co4gvWugZbDfekMiJ4iHVb76Zh68cAAeKWdpH2QTw1aTSJbn3VecCRh2G2CY5JnCefyNvwtnRgGXDuGMYoLRCU",
  "key41": "GNPRrkvhBzRYPAJWYp8BUmotNkZAe2HUw86ppoFatE4khTCwpmJY9NWbN8ZnzD5hRsC5TnhZaAoaUmbM6fV4ztG",
  "key42": "5FgbKHJtT43oez7ZsEa3v4GEXkXWHmrTa7AJSJ81Cs1WgZCzPKnvbd38rRqm5YHRgxn91y43brkCe5fiBAsATZQ3",
  "key43": "LAtnizijaHtHaspi5t9Wvhafg5C913cbQyhfNzVxaawsstvvV437FvkRU7eaHoWDAgUZkPszrd7Yxvn7uLkyVzQ",
  "key44": "3JUkQapisoTWEJ9eqdhVLiPygyTRCRidyL48nyj53ZBD8ojqv1He1VJCLRVsekUEnuxPXLZyKFyj2v2gEQwQbxHd"
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
