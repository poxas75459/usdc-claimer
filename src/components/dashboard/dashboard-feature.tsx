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
    "J4gkMxvdeMtJPrQFeJw3UrqhqH7a2fb7H7AY9uAWLAurVd8JfeUcWzPPGSyGYBgogyNVbN3Y3i1sJZyzfM2hFP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cji5yGcVK6skPe5xhtdvS8HpYjUjeJLeshB5bP4LYqe69JmGCrCLrCKtDq9YAA3hf66BvFfUE75hkgZ5TxvMnDy",
  "key1": "2BqGGNuG14tP6Rv3sJ5TBs1jkXe45EtZopVyCxyaAt2zHrDqyQvzBNs3eVLW4gQoCRy2yE7CTyF2MsaJNN1F44Z5",
  "key2": "4PeATv5sPyQyA4jUukay8eyduBRmRJASSpxzsbJ2ZhqbtoZk6npQ9PTzs5KLQq6TqBau1HVLJSFAP7Rx7Bm4FamX",
  "key3": "3ksnmiw6g2Z1dvcMWso4GT9YTGvS1GLrPdK6bYu6P78NZK3hLN6FZ2YZ5CezymyqpdUwSuhnypYiuRD3AhPaRT3n",
  "key4": "5jrf9JUWunquhZNE5RcjmNz9kFcnkUbsxG1xUY4WJ87xzvnWNZdbgDviEzVqPg5Uf2SDvAcgFsMF6MCSTmDgJR9h",
  "key5": "4QkncU2URQW4UYiUDvvpxbZNEeBu3FzyykLqDELKFJq5gsRDc8jAnUPjRXkF4YGXLDGwyST4aVVGVRTG3cpRbhx3",
  "key6": "54CKaw3yagnW1zsCHptZG1Jw6nYRxMU8w5KPMM64YANNwduShMgeT51SksCzHsDtXx8fEiafxH6yuEHnTnT5hZFp",
  "key7": "5k5t3rFWmHyHxML7VRaKtcSfJDxKELM4EFR5ydCgqsZzE9YNJmyjrnJeLBFXHHaairR8q3rZh4b7eMVtxJH1XZea",
  "key8": "4bLYHhzQvBa9CFEBHYhqfaNFj3qRHBRbNQCatxSynLY7G3wGZLHW1Q8wQExn8prpE3g6cMgFjhZChX7ELZHs9NBj",
  "key9": "3drETyGn8cuJPdxaodUnDGmd25vZFyAZthnuxqZgBq9ArFUQechyanXs212cB3ArSVq74LmarfY5FpMpgKwxZJTc",
  "key10": "e49aefKC6XkpR7aqs5FwCAF5GRQqX8ezb65f8apPJKxrKDxmzcKqB79G1GCrDfVQhBrWsAh8E7ZJcpeWuL81DBN",
  "key11": "382GPa7RqADEUBij2xTpMwHb4qLDoDWo46Y9SoCS8NhBktpcqurP3FapcEcZd68QeaRJwrYQvNvzZk8YeEV22mCn",
  "key12": "3JqM3wSDJfRAaQosphaiYQmRDErTJUWy22Fzt7LL2iDYX1HgQhsPd1HazfCUMCG8GV3fRVcWUcxgrJVj4pWorwe8",
  "key13": "3Dn6nWK4w8Mp2aoqpyUSv3WwpQvyLYwX6CmcfugbiFyEG2AGuzd9RWAm8Uw9p4U43GYbx512wGvycMKfshhYZwxc",
  "key14": "2oirYM6XDqBL4GqapqAHVMPiDNpTqvgo3ui4KvADXEcgp1hCfwF62L6sPktNmYyXMLofPeFc9pUAFcy8B3gN3oiv",
  "key15": "4DBG6NscHRCX964sgXtPBuYJ2Sp5iTsT34nWst7feFDvAs3RubHViu7kf97sh6kCb8jQ7vHgjcLNH99TUS1Z24hk",
  "key16": "4Ui6iFmKbHwearyRMg12RE3yQCPi7ya5B9sFfk8caNCH7dXyJHP1CYxH4bG13osJ8TRwkdBefpXuztPvWnZXCTXF",
  "key17": "2YFWTw7oEWhd31ovgeRwFXEhqHijFAJxNg6CjGtyiuhBj8WmHA9MrYiwt4zi3heSiwn2fv6d3YRbuJiEWLuSWZB8",
  "key18": "2dqkuebbEUz6rbTS3NeYVw5E57QfpuSpcxtLb5tp7wWy3aMutVsWVch27WXYM2kRPPJ81dLCwwMSybAF6Hz46NQ8",
  "key19": "66UdsUbSJUPLs7sZEWyZXM6aHyeCmfLKKfCdJiQ55Xm4BLaojzcoEevPfDi6UYSdSSoMaYst6n4SR5MTsYmYCFSQ",
  "key20": "2mnQ5xZN5Gmk1NZKVbED5Ku687ta4y8nmA6G1msAKPUeuXMeXjcKXG7ZcgrfQ4DoUfUkLtWfQXvQFqYmEGHJRzob",
  "key21": "4R9ZdW1Vj4cKz4CbTijXS4NyWZ1ZFpNKxdMryrkyfg66C6U3wGdaLLdVaFXxangmjHi8P1KbSE1pVvaEkZyY4KfC",
  "key22": "x6CrkbtFyDfGNapykDEXWYiJC4V3rm9havMNqBuCsPhugqAyu4nXa8Lg7QVMwuYSuPqMRLUZJN5hkpmbW5fcxgh",
  "key23": "4EhBdN9CGgFror2nqBDUpseBPQxSKugzzFFaV1jFQXrZoFbgasatkxcZ9ZpuQRxZjqr7x8PrAa5VDH3TCLwnWy3Z",
  "key24": "2EJB3LEWVjD6qrSA18fTdid5Z68Rc6JHtpn4YCSSMxX3m3MVFSavzA2si1KiRRHwGCaXuCC54aF4ufquNcno7V2c",
  "key25": "5ivCmTnadbGDTg7qfg2xfbrSY9W45GmpEgkbg47iLMFnWrez436LyK8tBpVR3m1JazZoogWot9j4fATVjs5kPxKd",
  "key26": "2kEAzwycVe41h6xvHCJnSzKuXNfp3K4hJ5cPjcW8ihuoPhKgbEQtD446axt9tQkrPBU9XgEEZvawdA7nv3GFTFif",
  "key27": "3V6QnKTi3EwbbvXgWcjch5X7FevFVqJw6g2ijuQjp1qX5suB6kqjUQWXDCbairRRaokMq6tKeXkxNTUM6mSNqmSN"
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
