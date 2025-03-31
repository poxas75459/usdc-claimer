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
    "5vnk6sjrsRvQErT3w74LJTkSqmnteXtc6x9EuqGWoYyGMQ79y1sih9CnVqboVWz85HfY3NJGjEmJtBHqfim5t9Sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TA2PvvQtmXCiaVcE34pemrs6P21vFanDRaWeyrvWaZLE5HQi8B8uszYMWMaVDar4zHmhCZV6c67URzZsspTiUuT",
  "key1": "446iUmygsDnqVd4ztuPKVSy9iWjjVHAHMb2EiDdJH2HASXBUQWDEBMPe3PPfCkfnVmuy4Fm97E25FjqYEZz32sPg",
  "key2": "3xbfw8W7n2UFf4M2mGXEHdRK6mdoCJbs5naLfBrH1j87RixhAR4sWDYTdDfyoWtXfv7yN3tMEHVqxCTtWrMrU6Fd",
  "key3": "FLAgH3ona7j8KZv9Vs5JpkaA5CXaaRi4uXSCJeCoLkFc6NcYC9UooQx5y7RVZR7ZdHfJaBt5EdVm1rTeFWvtehA",
  "key4": "5mJ6L5GYben5KekdLFpPeWowHk7y4qhkozDQ3wvwWsG4UtH3rhM6BgLS2V3VFMkFm52EbAHPECNHy23Mc4qwjsfT",
  "key5": "2F9G3VmCTEYeu9ELM1Nh86W7vV2v7nwm4hVhkaH2JohugKmbRRn2zFcuUCvRnK8B3tPdYw3gntPeCpXMwRq8uQSX",
  "key6": "mekzQff5ALvhNJ1dmKT8H4SXTzUFbPxBR1ZZvcNfHUD6g2mhU8mQ31btBSP6urSUriJ8Sw2YxahQGeSzY83UHbr",
  "key7": "5GywTxV7FozCNawzapU3tWug5v6ejkMCBvatT78DYJCgAKSgaLmmvNgCThSxQzzPoS7NPrzhq5BesJJ6WRFDCe7U",
  "key8": "4fbSG1NwZaqs4kCJApLf9CVU1SzdKqWPipjYHKmP8r8tCAQpkChdiMnAjtcBHz6vcbcsXWPrD6xCzxuJeivQ7Ngw",
  "key9": "3w5d5vdHci2wqbaKrAkqfAK1H35mxNPJkPuTe5s7i77MDm3CPtvGS3iEiokU1zEHVK9esq6De8wY58hhddjj3orL",
  "key10": "5tQVbAXxwfvisVWqtuT9VcKk9yFyrwoXgfFTNQKgMjE9wVmxVw9iMFmd9axrbEJ7tQc3YPHGg513bRnw4PrHsu6U",
  "key11": "2BMzPFt5frifTzBNcmMC7tCCi5ViA9FhGKurmeV2NvUNcc5wnVbTruAMCQfNR1HEfWDXqo6L4R6PGe19FAG4KJSg",
  "key12": "QR9myd3WppXQyNYHkE63e6E1wNFxRfbxoiPH3CcPf4kup7HSzHL7LE2M9hYtbZEsFgufHE2Hg4kDsGyddpgkvYA",
  "key13": "5D7XWrm3bWWDxWpkqvLnaqgMPmjuogfeWk7mW1cG491NRs5JBe8NaqkSPAPqo6zfXwtsw6smzKQxTfEhtGX2ejRV",
  "key14": "5ZtTswXsBbCuhhXJoTEWK7Hv6PziedUXcFjRf7G59JEVBiSAixhjF7CAVGKot7K32YNTzzPyqjoq5VdLUv5WQQ7W",
  "key15": "39NWmTgqZf2hAkzxtTa68vTQFNwSd332dS59Q13xNc2J61d6uK7BQuCSpmLC5p9dDP1ibV14Nn3hQTLRchgqtqGY",
  "key16": "3aSk35PiA5hLtNitk4SJNYR4c5WPJsh1SngBZq8Pm44c7ajTimgyj5Le7LLMtETdWgMj1TVRhsLVkeJS7Wd5KGV8",
  "key17": "5i14uZA2PHEMV3JzoRJMJ6YK1YYnvKNhaWdoE3T1xDk2nN5BAm5MEDyFnRni3Q1NUWvLb8VE3KW9cLymwjzsXDwP",
  "key18": "5K5fBLyqNMWXQdij7MF8StSqP13rtj3ztTuYBskCnfUNW1c9KTtZLrRbdibz7PcqAv7qD8PZgBYkJkU9aRkRrAfk",
  "key19": "337bYorc9Ayyq44mAXygywEERc9uafeRGrKYsPD5QMWPcLGRha759A2xdbdSKB84cCHq5pPDFXoW4WJ6vVentV9h",
  "key20": "36Jxq2wsQWVNbdcqNek2uLGkPuZM3GSwjUaSfBNUmTszFhKG7Q2NRrnJQEKceYgENgfhNTUmJSFvSvGios5dxeTb",
  "key21": "zbWex3onF3DameTRZtt6NhF214zc6c6AkPrFhiXU8DX4rws2ZztvyKZu3MrRS2LzFtEfwUkLH23TnCqKoa8FNFs",
  "key22": "3mnvtdNwhLWDve7S65ZncV3dpwVSDttXxQ4eV6NhmoN5esqxCi26L7goq6mFc3usX476UQAEhKWALhu6oYDeL2ep",
  "key23": "4tEFo6pY34FzJqfLKmSqjFu6wF5gTFup7SmAnf2FoT4rrzeEb2o6amiuTwus34sF43zTjBprgoeaGYNJko3ooruS",
  "key24": "3Es6LFXGfPWzEygxPXkYBKkT7CpkaX4ghBe8Qkur8yrrWvkp4Mij6zd1ufgYazbE9r5DkVZJ2arwpefhSAMKmBye",
  "key25": "61ruqjvN8NgcEFnXaia3QXazdKAwhruLvfb8Tq9es5qgb99UM5W8otd3veMxosr1238YwaEaTLpubqtyj4sJu81Z",
  "key26": "62Bg3nEDNFnbht7yiwt3MTDCuZpskM4L1K5MXvvZrHzVsPPWm6tAzyHkMFwvj5t3JaoQaQ9EC1WZ5WbFnu6SZFkR",
  "key27": "3LqRP6fKw9kFzJRppydgRLY9XSoVUfMBbxEHxokKbzDcfVKjW1gJrH9mttH9FyxQVG7CeBKHDRLaNHvZwA28rruR"
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
