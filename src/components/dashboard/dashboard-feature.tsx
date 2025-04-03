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
    "3XRWYyWvneE5f3eQq2sFiFH1sqvNJtVFMTub7SNZaG1wTKBCdf4R6YgMhwaCPY1zo6jC2DYQeBL1HF1eh8rhavDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rZgiizfEzuA4t6i6YCFa4saUMjjY9WvVLozawa5SuJUG7A1YpzBDgN3cyjkD3mgY7QMSzhgs25emUGJ4QnBDjNr",
  "key1": "3y94Px9oeCLBngw8fjsUvewZy185sSozCmqFtu8HHgCWV9QZaQJw3brjjtZBFPnHYr2f3rAbXpCgQfLpUPEicQ1Q",
  "key2": "25ZGCTqq5jFUKG8QXiWbQufwWNFeDgPkU2D7XdvMNqKrNj5JNhGCqLQjTYciEoBe2BpgcbeYPRAe3KqvFsDGMQH4",
  "key3": "295FLKDacitBXYExT9VdaKbDYAjE3aTzzUSVT3xEJxEFZdmmETpy385ZuihSHFne7XZ7umsywgr9uf8nmD3qnF6n",
  "key4": "26xynq4HswyGzswzzXmrbpwK3SyBooPoTGqE17XzrSfnbA3qfZKAckwzFZ7w7VTYrCXdVvHAdRmoc7PRPVwRCUD7",
  "key5": "2VRhVEtQxRVgqdpex7sfmcjTxfZ92Dx1Dzc8jnpzehLvtmMBeomo6bQXfsCuSBYup8fnPBe9wWAT8ayyn3237gnH",
  "key6": "5wpuzdfWBR1tALVT1bcJGxH2miJUabayoEAPrtmjrcbmW5fD9pQwrLq2r9JRFxCPRxA9f7sauHuuM5fW24qXhPuZ",
  "key7": "4xrzAHtSmTx4qqCDZzkrL1BHVWGXF2yVCZEicXqtoQsxL5H5Exns61MJ3S7Cj24pshs4UBdtpu4GftxKg8VRNwpC",
  "key8": "4BjGxT6RHNBV9LJpDQg4WPTHTJtR6D1QZrAa61U6i8dg2rkhcX7fjKYj8GFGbpguSBDNhWvsuHgt8p6WmANKR3HQ",
  "key9": "3egajSZzMGgXDMFWV4WKQtwKujkWZn2XMfHYX7AeXpJ9Lo5dU1voDnCVahCkgYdGBHoizqxE6ZR88upnc1d5HfmM",
  "key10": "5cBHc9bv9yPXr7isFhoRLTf2BE3s5ZdwJtgaHKMcs5Fv4VCaRTYPedtbo2deJgbk4wmLRzGszmoVwwFRN7C5i7Zf",
  "key11": "4bdfPfNdHcL63VQiTJSp1ZLCd76mjvXbb8fqxyUCj6ZQs9gu2CN5Kj8jpqXbsdGSx39MCv9LNji1DCiAPSpQyMok",
  "key12": "a5xrAV2b3UJtbChMHSab6YNEsGoJvQ5oHnd3H2JGNcQBnELHrQ9bxVkAWfg68yvxXP6tWXGKFi1g9NAcgbLHbbT",
  "key13": "4kUCUD5bjvfPFXC1Xd16FQ5qoDqkdHF2HNGZ7g5LpLf4bXWe4VEWPg81YZmdgFphMCkcqwid5SVCLA2adcDSmphB",
  "key14": "4kZctr2gePPvEy8sSjr2otKnTr1EYoGasx1CDaWvmnncDKHnPYH2pgWTajjV9mf7tP2Aqbjt51xcQA9y3hWmxBPv",
  "key15": "dac5Rze2Tti4bUbaMgvwiBjvEA9XQgPuYKtZr1hPKWSz4WrLT1ipGG4bESkS1BJGbZ7JAGoL4FQRvS4oejCieUw",
  "key16": "5enNDGuHs3rTa1ZgV4c2Wymnx67SLe7KN5m4qzDtMrwpd7oS4eKNwaH9dhcgQg9Q3tPdN1VuE7dSxQyM7arUDfdj",
  "key17": "2GaHkQrv4i4YYH9yqkjLPbi6v6aBNbNitv3kQuKh8gSWYhRh78AgLwMhEMPgFBVELtbPq8LAqRJwum6BiXr12wLL",
  "key18": "4owyKp5Xzn7LrCsYacaRoJo4535ieMR3HAHKDquTHr4CzA8ux4srsUBqVFoiC3fUBABhtA6SzfrMSjbabR3qekDZ",
  "key19": "2eTLtnUy7PyBaSd12XtCVk7Ahj5jNzF9ZT6Kr7DTXmRHPtuAo3gxAERC7L7E6JYEm12npW7wUk3s2KsB5oJ43c1k",
  "key20": "3utgWk8WcAK7swBAAfCp27EysS7LmyQN7nkNaH362bmkjKU38FtHFzTTr275999DfcVkHbcVz4LfRK3Jbxx6ZuUr",
  "key21": "2DdkzG7d9KWz3RoghDN3XWtKuubMzpJ2o7aUTZe689k8wcorbdESSKfNxXM2JXbDzsyTcZiGGxy7B9am5XBaybF5",
  "key22": "2zazAjXV5gH5HFAuVL8bDy3TxbDGB5LRmPVm42xc7huakU4z8wh4Wqm6xu1uoquah6eMWgucuUqUckPEaKHK9Y9P",
  "key23": "2HuM4xVyQUtSLx9sVfv2NNh8vuAMiDsKbnD3gM4XMVXDb6zCAC2XiKK7NMCVK5R38a1XeFh3hqHrjNjpxofgkcoU",
  "key24": "5btLwr1dHJvEYzhoELgApfh4AGTkXQLHjMoGToNo5Z5d8N5f8jHKMNjJdq1TYkVifTee7vz5azEZX5VjwQ712VDs",
  "key25": "62T6fEPaDyMH4SJdByH194Fuf5PEbfiXvQZ45xXUs2H1gmvVxYLSpZkPx1bswXv9Hi5cU5FuuR6XYTxhJpg2nCSQ",
  "key26": "35fdQzY6Ja5uxMv1SvSpGWHUSMXJnpiiemsaQFN2byiyMXTT1ubdj4FRQi4FGjhfRiUcRXzmALHVay48t6vvwDqt",
  "key27": "49SS3VmLuEJEHQGhExocvB9iXyqUwDy5qjACRvysyxpd8XtAMk8d78u8W6iLhfiiFaQrDF3UTdNLz6r1u7jBaFGs",
  "key28": "34SJLaMwavMSdBdCYbw8u4TTNe9eWskdHyG1y2TsZKBSei9WBEkc1vZbL9u1gpFSoCMZS68zFFnTTPPb4dL2dpc2",
  "key29": "4cXPR4KQohDk8Hx739hEkgKtTCPiL9szbfT15NWvx8mqtgGsneXRuPLZfQWwxfpeEwzG5UQs7JdL4UVj2qqYPGg9"
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
