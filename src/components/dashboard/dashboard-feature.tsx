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
    "5SD7bEeCGJX9BarJDQrqMBD2XfCSx4jtv3zUYVyyCnZdFAg266ATtXELhqGvhwcKj7wojhuX1tco94aatMP1u6BX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59rzg8qagN4Aqv3CWq3jskMiiQcXDA4vSmCCWhH9NwgqapGq44dRUJPLKgw2ZMucFmN7GnwpQ5YsbWTTvWQyLQT2",
  "key1": "uMsDNEVveSbNT1WJ9zSgZDyH1xAgfFqcJ2PusRa7DF4LMKHeYqahnZybG4X4PSRo2j3fxvB8YUvpptoUdxQiqeU",
  "key2": "3BbVYaw7hhSVHxnqkdFmUHzA23aYNZZ62ysQY7B831HPGNsiT5gJjHyuXgmzpY2NBY9pyUkJzDAiMMzXNeVxYnUX",
  "key3": "vnfb12ucFY6U1NkAcbKuqPaWPP5z6XAbfEiuGdi2PQgPoFyQP3ZbWWufJA2QJ9W2BgJxQ5q8kcKdosBBp4XrKJ1",
  "key4": "4aZ1XqMMF3FpdskoirmSKqo7gzwTiaxozCQZhVPRHYjmrzo2LhyjRrRKG5RfWj1F1DQJppNcGVvRdaSy8ouRbQg3",
  "key5": "5vhZpkFWQ3jZWtf8KYTSkvTZCh27eKtABkw34kRoxDuoAxBYdbm4rW5xskvLWwfJocRPZpJY2knu37D5YjgA2WLU",
  "key6": "4LMJUnZiLNqDpeHqg1jaNvXhzUV9Zhz4ZZF9KkN7vFoWQwf8dCpRBWr8B9mkqod1dSAWYVwZ2Gj5bFD545UqGrQu",
  "key7": "66JZMbZvi3UZJjMTqNdfbzR48ZAxWDHbwXK7DEwhhAg9w8RSUKyZEhRwP2C27mrSE4zc6fpdiPiunvVthgcFjih",
  "key8": "39dcrpqfN1s1jv8LLagtMmNuYguEWed3AV8vLvh8aaNgv6mS2cQZVhHnm7BCVDVXvLfVvxQ2RDGCFVp4EP8b55CD",
  "key9": "5Pu2RX9PFGgnXLDvzdoduuKhTMdUG7tCq3uNuFKEoVo7ZuGqJ738FLZbbEE1VYgXZXfRU4SmnygqJTvATGN7M765",
  "key10": "5fzYjN7AWA6sDTgVsALq4djA75DWtWoEExsRtGUXPug2npyNEnr3C8EEyRuNMux6gLJjgSeDf8Jq38u4XK8UMdJt",
  "key11": "3ymwWsPzsUi8W84To5PPB46MbuidVzfqKdykT2ivSRFQsDmimKvceP43sRBCbCcLhhLRQrYPDVASiAHJQPZbx2kq",
  "key12": "5SLWttA9jW1CecE8K2Pk7rzKu93PnBDCCQ858BNV18XSaBDKG7uwtcqqDDE6qAGeBYAcbwSsaDkP36u3H4SmPasJ",
  "key13": "5f9E1cmuz22Qk7KEUa6GF6EuGQhySDYZ1F2fD9unYyBWKb4RsZYwWjxzuc6ygjdoMUwV76z1cjTQXsN6rMeRFCZE",
  "key14": "GQ4SnLRSdcjkxekzTcwHmqFqcdzPpkLoAqKMggHP8j5gN3Gzch6AGrH4ERMqAanvD7MVL7J33RPxpLPh1rZx7bq",
  "key15": "2bVE1rPx5X2VTz7NjHnpDhy31Gd212m25awqBhTxrUqHVk2xm9HYS1BX7sYTQNrujoUCz2GAcmxCzcNSfukXjwwB",
  "key16": "4KyepFjMyfaD4sb5Wgd1MSDWkmecEbHzZzAyrc8XgmgNjmPPgE2kifPeromnN4z79u8QRZ4PWha1JSdPRHawSR3Y",
  "key17": "3ugXzPGHUcvTU4ptAki6QfRkEn5r8evmNuoznX6WMHaDzBbZDbF8m2yuhCwA5S1CEu8zTqeHgyDrwZsBAXskmuST",
  "key18": "2CvzKs97VgnTqrVMYxaaTXcsRQcWP1YSsyeeEPL3keatj7Y88doFSrDKz6udWdXwm6ihHbdNW3rxAGJdHBSUZFvA",
  "key19": "4V35RbenrXHwwVR29UsthKDFvn3bFnz82WJ7sxVRFhHzVT2wQzgJwvXsh8JrRrBYX6UgL5PM6cL5N4iNx2wR4Xzp",
  "key20": "5mLM1xr11F5utSU8eVTXNTt1Cqw9FX2xyTHwswarnTX2zueqPoA7aSm2ZtGUnmtKsogTDLWkGEj1WesRFAPJgxQR",
  "key21": "2NLoKe9pUUMbpJodWL7CVKQn9dwTiwdqfnoevF9piNFvbYuG8sFdvz8YxqUeMFWutoTxoJNiU1NzkyH6S1hnw4GF",
  "key22": "4EmFJrXQ1XJmq3R6ETfNrSV3dx9dvLt6BkB1RYov5U1gDemk5AfM7s1KumSyjpEzGTnZ6whsqS1oms17Hr2qJbRL",
  "key23": "267yaAb1p6ctCQJdxnNcsJSGwAPham8UHfpzpNaTPsWsiYKAeZpUqTcwDkgAdcAthUMybGyYMuzWtiHsV8jAUewx",
  "key24": "2Raavu3bXs2XND9fFEwV35DLkjw1hVE9i5QDHEa3pULWGsBQR8ZXioUWNA2sMicfhUWkyzG6yQjJSeH77hroKP4n",
  "key25": "5LvgTSyQMaktnz2y76WHQ3oDQwCavhX5Ybdfy8vjYNFN26LsPKHN4Qs56XbXyLtrggzsZARy4pvRTEHssGVz2w14",
  "key26": "3yrHogaLHpwpUKNngJSgzBz8xh5xDbTBNKeRVfDB6QRUCiXAdZ6R1bVUkVcUt5ybUDfxkib7kskuZiG28rGQrp6g",
  "key27": "57FLMyMnYA7MziRhPW3cmHzKJ8NtgKDkiGkaJ464rPizjNHRAZVBcQHYBdcNDhmACTo7CQdrxZxdZHW2QDGPeG1o",
  "key28": "4G1t4CLCedoDnw632B96M37sUALsQ1zYikp3rJMYZH2x2JLnNfPDN12tLDhVEf3Tf8xd7SoKS5XLAYUebgHTAXCW",
  "key29": "26iJfZP7r5VbN6FXZhhJX4kEvnqcUecghQrrrgqxp1ALrC6SZ1Q7HMdXaRkf3Rry1xpgHfWcFJWeKifTDMJi7tDk",
  "key30": "3qhsERCMpw591E8quK5Y8uvcffjmWi2inbpfh37XALqoHuMBHpcD9C7zbEn3adZKUJ6ejvz5DwF1cyspHwGwzggq",
  "key31": "4gKsQXeepbD6UUpK9nE2xRKE8nvfh6WoVZD4EzJ5enBgdiyVgeGpMH2E3yUMUubsaGvqNSyoKPi4Y3TAfb8Woaz5",
  "key32": "5Kt7adVhwvW4zaSyVkboKg2HQYpcRWgM5zGmi3bq9gZnvjL4XScwAqgaEvTugzapeWL5BcKZx8bdB564PSuYQDmW",
  "key33": "2cUCN95pxC5yHr3aDSWyETvHJUfGNvqUvJmgZWRPbYwkxkWNwjRDN9LDhQ1AZSZ8odrue2esKH2JMSR12uqzykpQ"
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
