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
    "3h3XTD3WKEFuLu6kWmAU5UEMKMC3AT9fMKa4ixFaQcC78RjtX9Z3Eps88pdNmHVGQBULn2CB6yEx3kKweNcWDDo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qdzQVBELdJDewWin78J5hui4XFfJkTrTPrdftUZitJGKq6bMpwafje3DQfbvjwjwZbvKNTRbimtuQJQfFp1pGVe",
  "key1": "5c5Pv1GH5V5fJeMFmABmM1ZrPHfmFsp74pXZeteSFUFx8Nkf3kitLzenrXRjB6Ykff4VVQUWh8PHg9jBzasBbVES",
  "key2": "49riHxsxAMHr6RpcCVDtNDxjnfAVebVQRoNA93NTQ2833Gw8up4Qyg3D3szN7zbyzakyQZsm7HnHkoE4V7QrgN1o",
  "key3": "2KYhkmGbcVXFVsVyHHKXrBaca1GqniCdFfcYB7KWJjLtEaq7oQY18ngeJkH9uVjZ31JBwLDm8r18etQn7J6m3cdD",
  "key4": "5BoLMkXtESd8e9aMtrUiEcVZqiSVa7cbcmF9r7F6izNTdrieRQBSanP9EXj9NzeXfok79jFbwS9Xuc7h58pmZ4TF",
  "key5": "3FhPaxnnRfSosv3KMAhbWdkoyrkwSPRgEi22EEGXtDofsByjyQgD5gHoZ9FZSD76e9iynyj9FWztyF3iku9obkGA",
  "key6": "3fQD1vKUkpcLENqEXbZkC6YkUWoRnhjTumjvHoYGLGvSSK5JMguCQKagoRGAfunFiE147G2e58FCXE7NBZ1zPhk1",
  "key7": "3YKhDjvgobcHeAL3X2BtEGsiYN7sv3HeP3dc9wdfYhUvHUnqPwk3yoKwu6mUsGF8GSHEXt1T4ALED9bUe1DvEEPu",
  "key8": "4GVAkqjZf3igxuwXMz7Wxf8jdrRiaHFiWpF6bwA1d7SGDNq7QfcMNGJd98N5ukH2cVDQqWwzkQJ12m2Cb9Q51pmR",
  "key9": "5z97i1esxXDDxRjy1meN6ogGkxo1nsRnvU51gxAwSAvP6Fmo9iHSgspyTAFcgY4ek7je6po4heiiGNifGiiVofRe",
  "key10": "4Si6F25G5acxHEpeQqX8CwgzKY4NbQTvs5482y993GhEMBpNWXE7Pd6uyGJbYjaAuCcUZJe86RL2Mg2HkVXb6Det",
  "key11": "5xskw1dmD6uGQDCBRzKtfAuNie9884VdZfZxK4GKjScmx7cQH1gQLaeEkQuZCbdqKsaNnvzGGwyu8gXtqtHTDfcU",
  "key12": "4rUpXszSP54M28c2nLRCUcb4Tk1WN7H1qYHjPGsoJ1aM4okSixYQThbjZ1v7q4JjU2ZV2dVY8iU3ot88uYc5tXRQ",
  "key13": "47UcxgNqqaRtJ9nwCCgMrsa25ivP3EVBMfjcySsiniJfLXwqQJ8Chv3GvCjMqDgPdaf22wuua7dAbEdviW6vCD9m",
  "key14": "3XKTGKwYGaciZuHATasaWV5CokuWQRERM4sjTNCwYnmyvkpXfkuftbmZPCQEpwFz8tpqH3nTX8SZ1RzhSmDokR3J",
  "key15": "nCNCdPjhKqwet9kHb1YT6H7AGxqKzf1jXQAVVJgf2UPXKSesce4Ww5h8FbRzkEt7CzqbM578QGwXXBSTDyaY41C",
  "key16": "2iWhuhJtWYseSprsJufy1z8V2u17MSzy9tMBMZq933dipAAmc3BxvWPgQBMmKrASfAxg1qFbupmyZ3nV94nd2eS2",
  "key17": "3ARSurzLL9MA8H5ZbYX1bdpjBVcqRNRzUigjGJEaRhTTu4d4HH87jwiLf3ZXu5EXDy4ncNhBLV9TWD1CfJJQrQ3D",
  "key18": "5CDwoEukDAYWaRpSkiTXEfH64KUPotpfgpqAy86FHC5EUi7XSH5nXEuYDZRPwJupDhTL2YnGJFeprzehFu1xcNgZ",
  "key19": "2Qndifzv7Am87Cy1NMdejk1NTFEbDzECQYAEUJBx9XR4yj7oTEBtRdH9nW9qBKU2Btu3U8L6sVAsyGZqkQgAdjdv",
  "key20": "pb8bZXKHr9EPbmEoL2GsA5psQqhY9uPtPJ2zBKCD6gozpUYxWC5gmYEBK1saMGBmbej3spYGPhCKdokLmBFwA7D",
  "key21": "6KN68HcWPoiHQpu6RRrnjNZc5n4KUCuX2NV1RwPL5kjonUssYzyGXtFACyUxaTA89Crs7ZrYp5NJAEJXtydLe6f",
  "key22": "T4mGuvM2BAHqKcGqxQRzPU1cuZJcG4aJv8sTzByt4HJwiEBzvJm6piY33ZxsQfXp9Uez8E68tmdKVuUMpAR3aqs",
  "key23": "5y8ryFUDPVFEPV2eEufR6Cr9B45DeYH6fqMGyfSxXesAKdSjgZKGsY3tJM7dsnChkcagucCAbUsTpDYwvo3UyTXr",
  "key24": "5kGHnbXEHvRoVgdKCn8jNFw3xCN7wApVsDRTEEwdNpGtwsdjKLmZy4gkHAFTLTP1JXC9PHrfsyh5njS8zBeaCsKi",
  "key25": "4j6Mu65FA13dPEpowQdHwbchbX2ky3TwRhG94DX5G153Nf76tsyTTjmshgN3vSe3mFnLo3jpDLq5x5MWbhzArc69",
  "key26": "5QGH2TTGLQCpbKqLSFGstmEY4be8RyRHTqrajeVVEi3KgxxFRTgb5Kkmpr2f5MZ5xuuLkmbPnf7j4xzgWN7RF4ft",
  "key27": "543UMQUXDbS4fpUH9ADrL6UYmvH1kzEW5BajB6iFqoiVekcs5HtWRJGB6piR8k6mgcgpuERPSCwaUq1BtJJt6VCm"
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
