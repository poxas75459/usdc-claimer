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
    "5rGE8kjwJZT3UDJj37QEyNKMjZgBeMMWtsFvZ5P7cgirVkAAoeVuVK9rw5WJ3Lop9fhNyqFqvj5AVV5Sz2DY1ePP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yVzjwVbJP5D6YjiNcEX1eS9BGd3YLYVCQEoYRQvjaRU3SvJTCnS4EDNQr6onNVoKeL2ioBVdz2XBFsGs8NAevRq",
  "key1": "4QhDq9scaJzNaprBJsrLWH4on1Q3K525nizeDXPHcMi79SVyA7aMvCLdSZSdpmPmmBQaMuaCTZH8dZMHXh55tH31",
  "key2": "4GFTbPjCuJdB6baVUsaxqdSHpjbh8EP6QUFxiNWAPkAxYyMmKnnzXQCbSzwSrS4EayDxHWwR2piRE2LV67DzTUZ6",
  "key3": "2RjpUwWVx1K2cPaYFuyemMZXthjx4dg8NWrGzmVrt424zzxhVrCkCzB8B9JXohfVD5xASZoSE6eEHVcUCxukkWSP",
  "key4": "5BgN21KNgBVZciFBEJddML7ahtpE5nkgcsy3GgSMVwvZEQPyZkDNUDiQL2FtAfn3mCXupTpPjYojfKuM1bwaRa8u",
  "key5": "4Fz3cXRWyxd8CjWYqkp6FEiZLZuYheWEQKgKitNzX5P4SS4yaEWV85eoHFo52iym2n3MNdz3JjN8SoNPrLt7Fn7y",
  "key6": "2pQ5LF7TsL3kq5sMN1FxVSo5njopFro3ASNCDENhmeMNixkW1d5qempRVykhCLAM4ZmyqJrg4Wp4vRNZLfmrgmhP",
  "key7": "3N3JWXhTMnk2EqUPqdsXwPTBoSdSp2h3aVFMP8pnWPTL1iD82ZCharA2kunmaaWB7Q933gcZhxxdURG8cBtNrSPQ",
  "key8": "xqDGSRFWrzZzZrrtFKHuueYNBM6AWgkUzpAn9ZVMdYWfU4jsSTTLj8tF9bYNiSr4p4j2h4xZV5msgQk8smkERSe",
  "key9": "5zYhhTmtno8jW64XZyZsEUJiLLBdsThnS4kiZ4RxTFGV6M4nmoQ6GHoTnpEipCw3k6SJTJCaY1eedJ47VLruvV4k",
  "key10": "2VKXxbJRuUC97QNd2UcpUVucyGvejKCCuD57oqPYk9AfmxfHPUfuT8KzK6QkEmsnmCEiPYpejYXgsGBgVqeBVBKh",
  "key11": "51JMGYciAAevZaCibVjwfVL5ZTAp8JyZhiMuAxPGYYUkkfd3Tm43jttBKgZDxTLYXeZS6WUkNdgD57NuMT4N1hzc",
  "key12": "2wani2uosPsrE3NeA77QeFUAuEUi4UJgvqfnoYdQBv9MWNkZtzR2RnnQ5ZB814eipWfXYQXEwZfq5nWXuyhSMijV",
  "key13": "2vKs3roQo9HahiYH5EaptkB7S6eAEp5jMza6FymTqBU8SBQsJo63SzaGk1BFUJxhnKSbfSudNq8Ad98QKqdKFGS9",
  "key14": "3MU45zVcUCpW4i2WifeCwzgc8KbLRPg4wynKQtQvBeTyRxXnLnfv7WWARBhKKQ3kp3Z8GWgV8cjq9ZbRGjAFK4DL",
  "key15": "2AhHNVakTmZDCZA2z9zcNNvPDyKV43oxiTqBjXTvGsHyMfWjriWjyXVbXuwcFXySbVLqyjEyHGByPY6hBvnBwrc2",
  "key16": "3uydgUdJRDiwoRxMR5GKsXovakh9NuYLRn6E5QRAs2ZXg2C1RFFEU3WRTum7qYdVdDjeZKQ6wAUw65BWCXHfMQcR",
  "key17": "212UwXZUhBDob5A1mFr2CLTBYQEN7R3HvmL2AyJNQHiEmoD81gXuCAFmRRNcNpy7LxiQ35cZ7eijqgp6UCUtVXn8",
  "key18": "2qfQTdUURxfEa14GtQUuKS8m7ZoGmp34vUGuZ1oCL1amvQaNZ9mYzqVtw4amXPtBaLkjSavzjVxb1UqWNhXSUyDg",
  "key19": "4hbrg3p6xhcaEq8vWz9qxDvQfnMucjRaS5BUSTtiy2JxiAnf2EZCuMZ299v7yvmqPWtkGgK199uEY6ApAhAfzLGw",
  "key20": "4xnPSBZeziW6r4N1hZcaiBr2i34pzpcGnH4BUn8LANYukekn4R9r7USW1qkP15yJsXMb8TJnnutiLnW6zjPrE3De",
  "key21": "43cD3ZbUhqniNMu27m8yWidsig9vEf6NykLaj2ZXSFSPnQ1m7KMnM8jh3TmCq7PjaT8EgZVReHgGJKm4EPhQryWQ",
  "key22": "2vUr9XeT9HYTQSH47jz5tjqYmYJvmMec169BNsx2yNpBXaDHEWUBsfUY9yAsTKndThe2rJ2fDQGsqDkcsMraHyMT",
  "key23": "L8T9zibtBJsWMERQnZhwjFn4zHjRFU9rF2TjSgKXo2pHerZKby62t3wtwLE1CXRnrsmgGTYEhd8vLSebXF6xhJE",
  "key24": "31vwLyMQPcgRnV2NPo3ZJsogcCzfEz5rfHAA9qLsADHiUZohWNks2z8V1fA5pn3Eo3sunMshndK45DyhdxB1byrg",
  "key25": "2iGQ7GF8UJUfQ3qmWc81w42JShxTVT1oTdnKM8G7o98krCRAz17cQRrrKkX9jiBesg5rE7QXWzoAvBKf53ZmuSDG",
  "key26": "941bu5b74nY2tzKKtAeZ1dDdGUjySCEmiZHDybKb4QrWtYYdsxtA2uRVz247vaGHiz8wPmnTLgoJtuzj6WnB18T",
  "key27": "5Uhr3fi9uR3QhzT2nFkopN8wYiV6tkH7r7ey3v1ssNqgDd9x7bJvtXfGTpdZVDWJcwYKStK3fYjuDm5R8Ns7DMU4",
  "key28": "emC3kJRraxXkX1EkMMvirD8HbWbT4rb9i1b85EWvpGQhWrXtPVDSoiYCyfrEctsrX6q3SDDPbaytobyfiVNtHoN",
  "key29": "fh62FkoxRpVLB1fEMrbMesxBAoBmSg6oZFCi2vLJ9d79kBMe54NZKRPpWnFPnqVQVmEr1CYYHHi58WC3UyhxUbe",
  "key30": "26PMo485ktid4N32qNfE4MKnyHKE7dsKg1YKP6nr7VZLLmhXdKRBzUyiUcsfc2Y9Kdj8adW2KXVMhHhZkKu7DfXr",
  "key31": "343YHR6CzNF1mzftWUkN6qRDeU3i5nQffA6ExP7yZ81Kf1Uj1uJdnnCya1VfrVv4LDHWZtafU2yW4LWkgdYki67y",
  "key32": "3nzXcx5HnQ4piXF4AqVny8HYs8w4E4QDJPMxvLMGQ7vman2DkobpGUKcfp5nL4J9JmFyv4Njxy3RctR6G51sGGU4",
  "key33": "5AYw8ofUAs3cyM1uhLX9j9cVmeqFQNSGno7u9TcdZSQ58GMTJfW2qzKUD563sJspHDUeesk2K7erMF9bXKDUf2gs",
  "key34": "35EXg6exywj63x4ebff2vi7HyP3SnUrnxmGAxumedX1q5epHRPG9KYAxE3ZJLAee962Xt87dSRkXZzAycDEmW2J8",
  "key35": "5fQ1BT7tLTV6PKSNoHx8D2HYDZ3jugmGcJvYmuKd9fxWqu761B9LT5J34CCQUZiSLwtqNCEdAd7EQsJ2WsEfYdRi",
  "key36": "6639HNh7ErgU3DZ1C9tm65NRd7JWjukKEgLtnSfu1Uta3kXskZAJ6SBtjHK9zhu5HC2kCnWHjSs8kBYteVzUjfbu",
  "key37": "2YC1XTrcJc3AB95P1VXdNEnqpczpp7X3oAyDSLBRJ62FXwwLC4aLC6E9xNuKCJEBK56UmNJCjNYrGqP8wEUw6TEE",
  "key38": "4M7wV2FM7EeLJyMyoiyQYogMTnB6NZ4JZTfmtJzFWteBdoHBtNjVduPqrRoar1jTRy8xqRbneqYf67eXoZ2EXFB9",
  "key39": "Tb8dkVZR9Eyc1QmwMsxojWqUbghTVzFVgVHxropJEq4qjQ6ZEYuwKxSwDatFa8ND6K3LCKWn4Qyfyxp2gZiaZTg",
  "key40": "5EfGKtqQhnUxk8wuaUqkxrU3MTPMiJXScTCZeqhaftuqP16sA1sVSAGRrcSyDFqtBgbNPaPeXcAtUjw8PgU7aAM9",
  "key41": "5NNR9sbKJ69c1NNxgWuhGvEezDeRmyrg55MkzEEipPP6u3PYvg2i8EwvaUoJb75pR9WvddZE2ucXRXbaRbMNj91Y",
  "key42": "n8gjWvQ1LAdQEB8KSvFGmkyHDWwbL93eSHkUb4GUUt9zJTvhm6KKfxH2CVNh54hfZD25YQJPwzNcQA7ubVZWkjm"
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
