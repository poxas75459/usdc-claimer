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
    "3bn11DsyhEE2B5ke9drPNZaudKMGe3RJszvoefQY39BhdrVhLxwwG8QdRJJaTyHXdtuCUA12SSozTFBsJ4bzCZYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZS13ExFSUkkXj1rQfaceEYbSvdBry4ZC1Py5imcLAzwq7bR4K7LibRbpyXW5ZtL8zPzutS26FjqT1DHJz6AeM9B",
  "key1": "4qQpyax4ZHZa5pRq3YGfwxPLGqbvtJcuC7ufJinhxanb2MuSbnGFYJmgmckDy5x9fzDifH36JKZ1KJvs5m8eX5jm",
  "key2": "49kcA7m3dw96eYce1hjEjKQRqypxn49Gtt5T1bfK7NQDS3SNe8cfd24yBQficLqqjLQrueYvhm1p7BjWkZ2cyiYZ",
  "key3": "55ZE1uSgDsMdFFMtJxswJ842Ae7JqWLec6U9ucNTFjDVK9u1gmLumGGoxjpYWanfKNs9sTY2KcTpQ5KGKtusfk4t",
  "key4": "y8LnyKyqnHJbsYXdcyMRWKnKVtZSCkaa4XtKj6vGR2DPBYzjZixSRYCT43AxXVwiB87EQqUf3G7oyURkFzPuH2w",
  "key5": "3iLj9Zk3124DLgjfd49dcoVYCBzNe154jN9Q7uiZXJZi4CtoU9KK9VxduGyNmyPkihj2wypSZQqPwiqPXpnszjc1",
  "key6": "2aUa6PmDTSazdEi8kLt8DB4VyQCPWJNzFnyDPakbCfw2hKy4EbaoEEN7ky72icdQdZeC8GheAq45aJ3FpY6zW7Kh",
  "key7": "5cV2hqFKPvMkdR2ZBGMeJRp9xeJ3LhRTRuRTmHjjLfZVfr6Ft7PFFvVsvHKJHdRmdF74gHZW6C92kJtxqmgf6pH",
  "key8": "j3n4STWMPZEcSdhpXn9kwnz58m1WMmeZ7azVk81xtXzu585Dsm8iwTKeLRGbHd2QyH466MyVWzEhsfLHUGU4rYD",
  "key9": "UWhayjmG6t1utpbbsa2bm7w8kBUdWybe3stUL2xJMYreahuMdJnsa8xzQBdZYJSVygu4XmxxHFr74y4jgAkSV9B",
  "key10": "5QLwAsGsppqdFXYT3mcZXwuVmXDX3wRv4JuFg78a3uXZsB6JzJGfQLNfMUoYC18wQJ2mbwG4VPp36M2vb1P59p3a",
  "key11": "2TPjoiGoB7xA5TVNLuYBYdzoLMuYCDWjpbSyx8mgMp2QwsmnYsM9oY3FQMwJCuZHMY6eXbKSL8iMTnQ4XwVnLM9h",
  "key12": "2s4XT2qeyZygUdc4vwX6JQ6JHegHP8n5RMs1BETDAnuit7XKnkLR84419q7EoVvftZJ9UDkQJeEh5jxi3TVn1FXW",
  "key13": "wZxUqN2TWqX6xXvAVzeoXVYg7S425qNgcR5xSeg9NDG8zfyufpNEfaagZNZn9LHFaEt8xfk8KcyoCEk7xPDunem",
  "key14": "2YaRku3YgvZqnsNZoSFFZbivDTgTNkibH9btf4PxZZtTMujwxhhRoFo8SyBVmfm55Lkm45mhzXsy5e2vZbZDSZrP",
  "key15": "8XhDhUKBSzYXWjjzHcMqmz99Kdr4pW6wcXvkAducnpguXYtdDBbaiKxUzhBQCaHaFzeYZb6TX4rrgKY5SccmLUi",
  "key16": "3snAwzS6GCqiF8j7y9ZgZjo7wEyVJtN5UDcX9dec93TjD4otJbFPdd9jFxzay4nBadKAJ94PU7gxcsifJbYiWhPw",
  "key17": "4QueFW9A8ru4xDzWT49UgfHoeLMHWSQzfiMPtSzZucHVXeg2GoUqaPHNDzio93kvdhizPKt9yAepWWTSy7433q29",
  "key18": "4WnEUSFu5FUMn7cX2njW4rzzEG5eiXMVJ8wSsa6X531ApBeUsLBbjrWSH6apfGDtZHrPAH4uVbHscz7j3dUz3nSc",
  "key19": "4T1wWkV6De5qT3K2DErLsvt7Y9zwLU1cgXGf7EXaTXxgziC4f4Dm4UHrHBEJoTugUgm5jFzpa5RYDFQw4PamHqkb",
  "key20": "nnLzYREUyxJVUbmEwNxGURJjA7gqkWWEBG6QtyqwMHSv8pvwF7mQBkusnCN6Luavee33BqZugkgghyiQFBZHqqD",
  "key21": "3oNTxNbRGDkA76hXETKiybWrYtQKP7hExeaMNNDoJdbpWU1SRdrvvMzXWt47kxwWXj1esrEBoaZjNDzu37qY5RTd",
  "key22": "Nqp4fV4kUbMhZcYBmu9J6icFsYZM1ik5UoxNw5grRPu2NKdAgYEZYVVCt9wEX6HyqDPtaWo61K3icQnjpnxkxDw",
  "key23": "4CUnGH2cbCQUK9ezZwbkQh7cTj3C1QdmVvSCW9gxpKds6EM86aFWKrmXDDPWLPTv8vgVYUhZiyTowxDVCxwkb4oR",
  "key24": "5rXECZTV99yXav1rVsrEMQfPoSM6ehjssX7qt6WzdDpY11rppZ94adD1hAa5UbMzME9gbx2PHgXwi6yy6r7kMGUn",
  "key25": "2rG6uefZnuxXhoRQAk8umZraKfAzdRtkogXz73xutAfU91LsNqaSvxwvYivRp85Ds7Djm8kJtw8eoGkqmY6e5gGM",
  "key26": "331ZgP6Hx4i14qmZRsJpVcoZBvsGj7bR1MqomQSEADRMj1qoEoeF8SCc1LfzB1WP1yfbNuxc3eGu8FG5cfYzsPdx",
  "key27": "46e2yPygwB1z5QtdcoUkrY6EwPGz1wYMqWVR6RUTnvvGHw6bffgT7a43NVXa6zgSNYFuTKYfP3fjvB3352BYMwpT",
  "key28": "m6bJi7JCB4qj34FFj92AnoYnZAvmRpjZHrmsZnCxPgTsiJFAMuw2MoQRcVmTtVjrCAoDHpto5NN2bVTzyuAStN2",
  "key29": "66dbBuxujoa1XGa3u7fiiH6jUAMowTPzQBkDnjjRa8MtFRphRVsxGvFtoeDpp66fGVpaEqBfuJY53Rup186nwg1p",
  "key30": "5kX8BS471QSX5KaMkWVtrNRp1XkLa5Kof94CketjkX7UxiMMVdUwZA3casGnqUuj24WcYK1SXSH4yrXcbpZbaqLu",
  "key31": "4ViEKWVs24rPyQ91M7Wbb7vG8gfoUeSUco6h8Sr3Ek79LUkif3ZSGg3YqRVKgEEhnKPnMRNjPERBGGNpBfpHu1Cz",
  "key32": "zyPps6BKxWuXoANAewoNLpM9J3af3wadbFfJEaZzkuFdCLBsmmv4vRiXi4p15AetvUF1amRijE9WRRsx6iZzZox",
  "key33": "42vJjAXEUdwdk5ve92WScasHWrG3oSLyEzRnNzfDKi66o8eboLD9JKU9bAR5ahjVeWJn4GPiLDdb1xJvhzGCHKrp",
  "key34": "2Vfng3eGPTQUZaN695cJv35aATiykWkuXbBPGniMpE1n6apw3wUYxqBPEPSoHx86MWyjpAGuWSyiRFCtbpqfrUMt",
  "key35": "5ejGXTu6heWeWBuqWgguNK9LhE41HRotaWJrNabTqxUFH1edRtcKbeHBGzfjfgHhNaMegkphGZf2V8gCj6Xh48mx",
  "key36": "4p8eqaUKH22dQ3fsSjumwyX7jMumAzrXJRzyJKyA7rWR8aQajSvWopzKkbBUEaG9swiUdW3uWx14ptbojctSH5HF",
  "key37": "4rTkotJD3mXVvmRfJhKcPJCJ6SFWYhdnmWzhfubEMKBpwBLe9xhJRqr8sRTGw33pyyGFZdXGvARZQj2S1XxBoAbU"
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
