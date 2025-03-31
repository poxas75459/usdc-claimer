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
    "2fvn4c69c2wdRaEjuvnGYYmFeYaMaU8qY5BJQddcZxTQVcyJc2iEZ1NEuQLRDvJ1TfmDgwxnWLmPbMoZeVikGV96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ckqgtyex8FGGUtQ7Tg1e9fbAgLHFfRKsTZpMXdxtwXQWM1ZHxoNFYREjWJshxPJB7YT8jkR7jmtzF5VpfGSH1Vc",
  "key1": "2ZmAwzeGgfs8BwAFJiP7ibadETCfpghmyLnE3z2zrQ2p1cfnopxZtJvPow4bXF5C9vUGpMBHKrRa6CRtzWadt3DJ",
  "key2": "24xasFsW6C9xgDy7k1huRgpTY332Bymu2ruE51UyXPwEJcb7FiPYdmQLhK7rhEHuDodtM4N4L1C2xrbsAwjABDsH",
  "key3": "3Gws2iU2E91fEWxgv6X1CXzDaJsH9LcyEgUTodMr6XEBbrZbR4Y7jqHbrbBRNfJXB9ze2tu7ba6CDotbeiP6KTWV",
  "key4": "5s7D45rSHC89skJtu2t2MdxXUk8kjLrgd8cE6nyW12MHPRDs7ZwfftVgaXxEfB4Ce6RDTy6v2KFbqGAK5YkZKPoV",
  "key5": "4jooFKK4sG8qDL9dn547PzRKDeWRaVyioksiQxJcuCXdj1sq4Ce3HRyunb1kHpXwvGypU7wF67oHb7wsEZwZXC6H",
  "key6": "28RoKrmv2T7PjSYQj7vNUmfqVDzLPUrHymnLmDWDL6DFzq6tAjLvdjscDwYbxLFnJUYRkFnEuU2JrG5jGT9Pruhk",
  "key7": "HtBE7v2phwtDrq63H6vSYpUk9a3SFKuVXD7gbzVUVxLjPELVdmDNPqHvByTTPXJRUnF8fGKcnMRCF7zmi6tvV7Z",
  "key8": "3oJYwDjE6Jgm81FUfbY6TDu1JeRqmEvTKh8WjD1B2UNrjTUyqKzsYTNtiKyqEqdAg15wnfhmeuZa2tkuxBjo2j3U",
  "key9": "4aMqJ2FU9JFWHEmjBdoz65yhGGYTnNs9axj1UqPT43dsv37vsRzrNSkR7zDrC6dHr6Vokmzc7YWADzLjuQV2rj28",
  "key10": "2cmz8sXvKLD2PjP5LLuSVJj4VdRJrkrCKnTBy3Bv2fdRqLainCFxK7CSsBbTCCD27sRkCEFkLTQ9LoeBFt1q28wf",
  "key11": "2PGRLGboh4mNsZQuKoQ9dHJKRBsCrnyPKETdVzAUUFXfwm3jP2c93jro2jeJuqrF9C8oJ6HdmoAhGmxfSX41jLsL",
  "key12": "3h12MH34AAxDDd9Kxu6jMhWXVn11JZ2r4mFeLcppFXSNfpifsTfuifx5ma5uCyz2o3fRUXatweZPuCtHKCAwgAWE",
  "key13": "4gmi95oA9mWmVgQS4meuGeJReez9J5EqPkh3S7igcyeEtM8mJZrwrXg4tnBksp4p22LTMM5gLKfD1HyEpSZJLXmB",
  "key14": "3mnpN6YckzwSHVA9wsiecKqd7YYwBD1YbGNaab1u1Xy5SStMkjP1Ma6N5wQtFC6s6F3Uc9RXhnZSUZADsURiTqcQ",
  "key15": "3ycckv5mAqjhHpFhQ7tkxtx8aDBtoqfttnacwtE1cKFJDz3rfLCqZxqF1T7iWwPVStvXN29LWYWzqA6YFprKFrnN",
  "key16": "4PbH2sKf4zyeH3ExnTjumB5dkNFkiUTGzs47ijevThnvckQSfpRsf15nhS5JpAqWgpfCg8BGefTcqLsYmpqvDy39",
  "key17": "5S72NGFqiyNvurDuaGuCm2zJ8vyaQ4wLPeyXpQPL1s7k7BkHSkfjRaAcM4gq65dJ34jNKa5ifLpB4MNkcGfm8zPf",
  "key18": "4XBM9N1RiWgEWFRuo1X58mwnHk6sryDV2QgTtw84vxGSji3YYjcEeAFmobgGLrv34qFgGFv2cgawvMHFjp7DouT9",
  "key19": "2Kvz5EooddFGYyvmNxHwRRM1mbjzrYKb39KML1eV2iAtSA9Nu138Z1MKLtsKv3P6nmwNDjApx11geBythjkzBYBq",
  "key20": "AcTwN3tn39S3cUDfBp5vu8T1FDmpFk3P5p4Bad7bP7uZbMgpxLEmVJkZW8Jc5cm6gXFYRLMBHyrDsdTsqMySwEi",
  "key21": "61wjyV3GEcdNhmUcX54p4G6mdr3rGeVqDPb24B7HHzSCD1fi5zMzMZjoEK7JTooWGAa8mjgBCmjJXQZKuXj1hsb2",
  "key22": "vWMt6pcQ4EH2FgeY7hZ2cC8i4k8JfJmb7bBm6J1VX4DoxUBBce4ikie1jZGwSswzNxEBucBWrHiEehFn46TNeF6",
  "key23": "4cju1P8UP14R5fGtAHFXV72qjfi3wPwc8PwDMnxKskpuD2UiQ77pNi2erTCeeyHFFkwQihxG29wrHVoDthhHg22P",
  "key24": "2pJVzrpEJV7orHSunVEsgseQtEtUE1gwntBur2enGJoNuVmK6ufE3u2KY2HCWwsc4n48dHr1K3LYh7BZmpESJ26K",
  "key25": "6SuSX9xF3WjtWhnFJ9V6BsfGnMeKbpsv5t1mEuWpsAwAsMuU4QRVMUS7Wi87ebrTs4z8W8yBSwmiPnRCJcAdami",
  "key26": "2tqxnao4NQcs9akXppdBSfTRziBGGscf6uFeXa5uuv4uS13WGjtp3F6bynvmxs7du5ZHPgoDC9jfTvmXUTzXBRot",
  "key27": "2ZSziP2372KeqQHZLR2B3hiMbHsX8Nnsxfn7UJFpE6sWdi23bLc95GeaxLqciei2ziDGoutT51tX9Kzc5hZ5E1qz",
  "key28": "2zviBhH284RmtxAnaT6EUdLfpPRBrWhsiQWsaYUt6ejMkS4Lph33wreecJiVWQZutvPDvCTiC1LReCgCNpyxmpa3",
  "key29": "5TP3cSC2BbQfMpJwQSgKt8hVNqwV8qqZmqJVhnTPScG1XZAiAD7JXMgQHbyqoFHdbq4a12tcKZ6geXL1qpzt3Y82",
  "key30": "5RLbVVRvLHUviaqVGj9rRg2CAzCG3hp2U6yBjnE7YZdpJBwj8g3UiqfADAscZEcjHJYSqyF9c74yyKerwhm59Yaq",
  "key31": "vTPzuNJmCcj6o4U4XgQECwPSNbN3Kndma1gNaGVjmyiUQNoMbbsaV517URw9K3TG9d6pxPP8ZejoczFBGWjxL4F",
  "key32": "43nGMguRu6GpfzXHCvYdVBzFZcvbuJY6gA7Q8h5j9mfQQAjCs4DPMowtWoZietkf4d3TyxSFXeDBGRnPV1nV57hZ",
  "key33": "2pat8pESmUjSfhaky4pUrGZMZtKHb6w6x2QLBvfcjGQ2kFSVgG9RxDUmHYB75ZmF8prNimtWwFyfvR7cRcexCitw",
  "key34": "4aERDnA2qjf4pB6B4EncWWCEihNXPL5P7HG9ZwbWgPAtCKDZrCGPSamj7DWnrEb5BPWPdmYoq5PC4P8MuWSEmh8v",
  "key35": "3DxgoSF3njYAhHDhUKxUGwZD92c3Zk9Cd3jtS3eJ4YFW2tYbnA72D9iNgRwm2sK4TMSiYMYAHhHec5w8D5rHh2H4",
  "key36": "4f26EkgGJmqsp9zXyuf3X3LBz1ZeFyx9AwjuTbxf3RokAcJB43w6HvrYDJhQUvd9Y6BbPRzjMAUGmr5DzY9fbQVU",
  "key37": "5j91PJtj9UXKnqf1ZZyLvfyPiARvUfU57c4d2ayWo2Zfc4HiCQWcnhuJQaCn3HPKVceruEuth5v6hMLXwQZSWXtj",
  "key38": "45gqsUkyFsQsKAErqonHUeJ5v9kQhHf5htDPisXU79vT7LCe3eda5E9NpXCJVu77Cj41nAhqwYxMKBvkCLNwaw1L",
  "key39": "5hMLHRFgdSnicDi3Uz8gZcM9U8kn2V4H9vJ1pno7dwo9jjqd9nR5qTEG5GcGEu39KHEwf6MfyVmmkA7QQMTzskTL",
  "key40": "51jWXWQ5D4d6bBuvFXz2dnNgECCpER9ZHbAnK9grUQjH2AGQ8ZaaNBc8YqhTEkXtt2k7mUP4sh39RD27b65GvEYL"
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
