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
    "61BZvAk25VUcxD3Chq1sjmkoew9wjtrepeZjvy3xQePVbgheAHEuBjaiiSWn4Hgu9VeArRFRfa9wbjF8wbzkNYxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bnkN6LfvhqSfKXr5eWgXdDjLzZNYndhHcndYsyscV4NTD8H381GzEb7CaN9dGppovjrCTFcmoawXLH9WnBuZpQK",
  "key1": "4v7VucVDprTBn7c3yG4vRVZU1TkATyHxzhqj4J1dHcEHY9ymwuCKbLUspggVPjFBGZdH8uG9orJ4LhyXeMwf8eAu",
  "key2": "3ynFXyZndaXn2hukjS7133dNo427xK4YVFpRdxF4iALxyJkw4GzMsjpB7buEVuhptxWPw49WHY5JZPcBbciKTHTb",
  "key3": "5G2LmNYmaCA93SenFaSm9iVJLEpBGnSzxMLzpYQCo1DKqp9qrdsEsZDre1WeVexctiRfL8LsCW4kQXYxeaLCQuza",
  "key4": "54CgKB4r3aySRzSbLTBucsbKs13xEX1aTkm6zbdxwJ5Ke18XNktN4pchpd4vFtkqUuBJLgZBbvzfqSKJybAJqxAT",
  "key5": "4ZDvBLKg8CbNEdiFsrxk81upUvxYDv97bt78uDv9Hn5dWKJkurcBvGFkYYvubyStQqRkHT5EQoYEySMk7YRvMnkc",
  "key6": "5oCyDATubMu1Y9DwYKxMgZg563mgiMuirwpvfZ9RSf5cf4uce4xXJYuaof5wAQfUeJcbWoU7f2iQNk4zYzFphq4C",
  "key7": "HnqXqqg2kZtETHhx7FjQGZtQYoUaNb9CgTx1xW4B8nsXrRVtz9oh9hcmvyx4K89HqQJyqXwAMXNRsxTsXELW9U8",
  "key8": "4Wvx7VM1WmWQzAE5CxhK6ido1c4NaNXykezGPk5G1cUY7479EqrXbFhC2wNFhbH9qXphN4Fh5BRdUmHtgD2KBLTv",
  "key9": "6EmW24EqKE6NkCj2EU7rReHpePcdRV5sZU91fn5NZG6kkwCRwo58zRaEWKbPiPMCs2rgKBfekPHJMeEYh6qAHmw",
  "key10": "2a9TVR8VosxUXsva7ZtycRfZf7UwaFfJsWJH48JHo1JTynhxzA3SWC8GpaU3LVZeAmyQofmV7PYaQLiZqnD6UiJu",
  "key11": "3GqXQyVs3Zjabv1YwgKexUviaC1AhoGozdKt7TDoZ4sEDpmptFc2dcCTWFJxu3cEQnaGpJphujvejPi9wDun8yLE",
  "key12": "4CHPyAZBv3hUJ3Um4kYWw8xJf4srp9mez8VkvV6zrnExm6F6TGvbtsLV2SXAWLMTxqP5yxxmCAgqrX11GXeoKgWW",
  "key13": "4Y4EcrRWscAw79FFgA4LAgLbehjTCjBeUeLirEWidXQY9D62z47k6Ec3w3kXGwujF3ibtjdzapBG4fTCtagyhvn5",
  "key14": "2MabN9rnWcR5UGvnA2R7wDH5y6nx6DkC3Cg5JwnGF76pyNLWCtbsmFgHLZW6v4ynXCyGHBA3V8F28L8rGLhYraL6",
  "key15": "36DTFYrMcpjr3S49W1rZ4gHSpbKjbjwVtpQvxGNzBsAZjvcEd3gHq626XnP1zVdcirPuni4HVejnAdUb7dbs23zv",
  "key16": "63EC8uf18RTkecu2uzCXHaNRq5ecjM9aQUJnbfax8UE6V19QBVKTCenSTrvxkGP2tCdcrgXcAE4p799ZTGBYDYQB",
  "key17": "JUDpkaC5Qpm8RidQhisXFbVG6YsDZ5G8jB59G5zEZTKmFTmi89R8i7dZhX3ayNG7PpdaVQPFBgZ7zUBT6ybgkKz",
  "key18": "4fVa5HzHggXQsSRvFfvoZjjMg4FS4G4tdwNoA9wkFTCw1XfAeNPagRpKpN3Tky3gpFprQ62f2n366KsxqKzdws9p",
  "key19": "5P2wUFbS7nCswfjqFWNdvDwzuEGMRnJ6DBwhvdABbmAzaQYUZ3Ff2KyAzyPC7RrNE2iJd2FaqqZyYkg8GrTMEvDK",
  "key20": "A9qJzkgoq121tZT3zC6MDs3SByAM12a9cmHXKouzq6war7wvvUsNj9SnnwaVX7NLjXj8cpW35vRnPhutvB8LBNX",
  "key21": "4T5yhQ4TBwjZqbVHr1ztkqLzRgxSc14GscZhT9vkHzkRJRig1yirXYEWym3M8Ct73H5SNWwWoCBHTngucuAnZfjz",
  "key22": "gRjKxCNmHaYxoxtc81Vu2DV5Sp5pUhpYQAR7jzB6iGoaM4AQcAFa1SH9FQfKUfBAxigfNSoEHoWJBgu9WPFzUSu",
  "key23": "4xGKnV2ZdnVarfQPcPbzjNyGYocs6wYqRfho1aAypdnBR4oRAPj1jCTAfektsrygkXJWeXs7Vt17E1QR9G55gd1p",
  "key24": "3qLLKQ6gWdz3qiT9BE5kjTt2suoZSFQ76UUREnmk8KYzewHhnFM9N3XjXfiE8tJMTbMEHFGQMUBbmnHH1jWvjfy9",
  "key25": "2LXtz6z8B5UrSuzvKGQczAT1Qv5pw9cHchY962D641GsPkSPbokSSNA3Z8AaojJQVrgttuLgqxzSm3xjtUqwSgLe"
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
