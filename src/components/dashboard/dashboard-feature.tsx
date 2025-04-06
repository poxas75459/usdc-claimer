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
    "5KA6jmTy2QeqCenSmiX2XxLja2UWCA92ebZuVGUYh23cK6yyo7HA3ngsJ7tj1KXEbDPFzXEWe5aemHsUf3S2WMW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jNM5QJBL5Kwxhyb747c1tyTopckFD1cynvwF6obqNQaehMYcAdWVGm1ePG288p5FmKhqTbcpYDLGBGhgc7mHkHr",
  "key1": "3A3gNs44z4Yh3HRAE1RJVunHW1bCQ8qC253NquiSRkXBpJkzEAYusJAj52bt5TYSZcwjVZZfLerphfCaH9ATPycf",
  "key2": "4d2hHHxF25sjyjVzSJHLjynEhiW3KT6in7e32p8QyZBopTs47tuRGzioBvz4kXxSZkuQQziD2TT9sEi6cuzyrsvd",
  "key3": "5fJ9t211whzCnP5YjqiTGie415WJ3pCGv7Tg6vpnbcJxSEsd3yDnRpshTvY3kEHJ5xRcz8emr5qbAJpaMxGFMa3q",
  "key4": "5KC5VEaypmRJd3PqNBocxCiUVTp7GgPmUV6tAP5WjaRhiSw6dPJ2UGBziCwWvF5ajswdzu3cZQWRHfRNUBE9csAD",
  "key5": "3JLgyVVUDip3D7uGckmfwhmfMfTKXxYSjRvWbFfBJ4HPBwzVmj7syJMHa37H1CE6MqbKtSbxR3LP1Lg6oazUdhxM",
  "key6": "5hoz1kjAPYpkRCpj5d8SSmA71UeAxf5uugJiFKFDfxE6BAcFVYbaVjTM2W17jpEmisRs1zC8tVXdvMvjmdLiCKdC",
  "key7": "3BxGVNmuZLrD3t4JQyaXvb94j8Knwni7HBEuJFdPBk5Dv8H4QbaQ6526Bb5g3EM5ZaTX2n5Nugto43p5CoAAtPJe",
  "key8": "4UKQ5JFmWpkYjvvFjR27ECMeQM3SFnehejYm14waZoHncePgB4e5gyoau1tXWPXkNG2t3t4xMnoPfec9uqBKeYjx",
  "key9": "5WcF7gWFtchr3YFWVSgdB7kG5D3nTY5XaFTCaiWYTGsZEPhhrJp7KkUZxcMgPyhwt4n7JS5E7UVRySjYMDHYyCSo",
  "key10": "2JJ2j6wDdg3YxWTymr1FLp64wFrG75DwYZAQRGzBqu9GvsQtK52WRWqpxcqMMPKL5wpBCcehFDafrPip1TmDPGdq",
  "key11": "4D4VY7ZQTi6GFrrCxas7Q8atNfdenWiGByH6WEnj3C6aHqqJ7vrPSfBPovbL6SwjMjXb19TdiDEEqqbLrT3FvtTa",
  "key12": "3ARDyi76G66HswDBebDCz1USwfo94Lsnvx5wkBTpoJsKU2p3b6onM5VgrsPYY7X3uY587oaHNJVAtTDFewwBP4L7",
  "key13": "2eYXRNCZkDyzn6rjhZYZbi4owSnDSaXeNYSq1jJeShkp3gZ2xYZYum2W6uaBm7y1cuJMjuoXrmhAkGQWPmY6daSj",
  "key14": "3up8nG74nDPfCDzHWJJGUiDS3UoYvYNwdrX5dNS2g9q7V7RdD7rkBNDE1NYacmS7HuBZVWuWpB6vPofx5WQm7ds5",
  "key15": "51rzMrgoVyqF7q7p7Y8pacHCBz17CkFmcCWUnv7MyKNQDf9AyftZjRPfpr2v3oRcJqSWTKjmk2ax3fQkmr8LcPai",
  "key16": "XmaSzCCCHGgJHenGN6eGcgeCXPtWsrgSHaEf9kSmxFPr6JriucpJNhngJTjdFZcfFhgN6VVAFTFMLAProtPvqnH",
  "key17": "JwHGscmTcE8hZHPyxiYujxq5ewU1epcPWDsQBbtRQTH7eB8ge7GLcBEtZTSxZv9ZvjuJNbZMAg9AZXpYLdiubih",
  "key18": "2EnQj4GaBunEEufqub3cBU7CbYvpNdJ38NsZtNiZtu5fPw2tDW2ZkfXHgyZzRQyPCSb7CTVLHtUtErXsr8jmBDcL",
  "key19": "5tudMYsT6mne7HoJGCw1D7Ss9UyCMh8i3jBvjANQ4dNYc57oFfXL9ybtwhVuKswSun7DQawdQTCp5wxbKm8Eumik",
  "key20": "2wAUwafC3KbftLD1f8h91nCPZuyKcBAaM8HXbNmXk5wnx1XN5dQSaZFnbxRn4iQwwrZMbYBgKRYWwjne7abXZa9Z",
  "key21": "5TH6XuVNtz79GRF7yfjqod5VqwC8Pp3qGRWA4ZtfmT5b2FPNsSWpGbbUrry1vnBED1qHuDEvtBwQuevnffWT6UDB",
  "key22": "2o7q2GUJwd3vfsxj1k2GiJqQWfWEtkNocSANyxSrYP4udcc7w5PuDbcYBTowTmJv5suNKxQUxHPY2UqjMfjKSun5",
  "key23": "4Hyt1VMgYywUtbDjodFfWqq88QzKrZswPupThhHmZTqvUqohfyq9FdvubHaC1DiVuW4pF3AivVp5gDNBLAFEbyc7",
  "key24": "2qgjiiDqnkLPMcdrjf34gLjvGkRukyhkNzc6uZCRvNk959h7VR4K7upvnCrWsojYk1BiwB7tKwRRBcb9yrUNetSN",
  "key25": "2eZo21AxXfjBZw6nWe4sYmu4H29Gt4H4b3pwUy4NMsx7zWcCjgrrFbtith6VmuE7YvAPjeneVB7rWibMG4BfcDyg",
  "key26": "5X8nVhho14T8xe6FHgSa7RU7KM8s9gSFmHu9YpjLs5c9D9J8BsBD8qxCBywaKMA937nm3LxkHDk5788HVkkc6Ja7"
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
