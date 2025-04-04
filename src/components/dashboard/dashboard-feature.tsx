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
    "3kEHeH7UzFAFXLcptMTVVsr2baiwpf32zDpmUqxHK9yjxxAuBsr6htDnSdK3eyNDLbcmbJYz3BUczGFGwZ4DQPKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNUNvSbWHyBVwfF4gpK5E6zoAEUj8NKz83eRP6GJeDVsMTRhEj9Bicm621eXvgG5jZr4AKWEtytzKoCcjcjbWih",
  "key1": "4Bbxhyvu2oYzB8baKoaNd4Fed9WHdVjHKH3AoQ1MbJbwcEKSgGpam8YAvWaEd2n8JWkyWMBFEzULh6p15JpH7QHF",
  "key2": "V9FswNXam8ejRCFdtL24V2HHtcY7mwUEWkJjY85FLsycrFQrpzV2Yo1Due7sXdQCotCwStA7eRCoM38gwuKNzFd",
  "key3": "pmk2XyjN5TaCyVvoEpEaDsRRjLDYpHwgjtVEMEZj7kEadKhB33RZFHWEfZ7EBgsXnzyxLLhw19XyT2tEE8EoRU8",
  "key4": "3zwQkAGXrpWEeMimZrYroNhrLYsBvxv3Vpuiirb2eEJWS73Y4sv9rioYYaK2ycTU7pgPhwNW9pe8cwaA8ehtaBRr",
  "key5": "NaJMpzQyXkjsfLLVtiWGw8rdDziDGBNBLrKGham3LZWhJVYXgrniATMmS3QHxu2eE8hRhMVSVHJ5JU5Gqfu2X5y",
  "key6": "LNhEMT2N2Wbc5meV2czKwsKTuiiRapz4EWgyhpfCi2ENwHmBNePJ6iXvGiMoBq97rZQVXrLXqu8zL1PMCHdX91w",
  "key7": "56FRR59uhQVtWeCRZ8NzB28dWR6DeBD7rgsgnT55VSuPkiGUoDfXR4ENMqPL8xjd3QbTjCk82quyuMkYfhSqAgwo",
  "key8": "JUmdLxSoNoBMkZN2FKPJkPKwfVmY7ZD6eMWt6aFxpftGuZUjQ2H8dTSCX9mY3ybS7v2GqNBgnqWzCa2eh97WSuZ",
  "key9": "2dZycD8thgLYGPptvJNX74kLVhYcKLcHuzHLb9cZMQf8vh3ezSAgvne9YYRbsP11wxK7HnmYHqf4hzLhJ3FnL27G",
  "key10": "5fsvzyYeVnK9Dj7WD1ZEu89aQumwzRsJVdmj1sHLLYBfZjDFMYs9mCXKY9XbG4Wc5sG56dcF6WZLXbmMNzXCmXNX",
  "key11": "5JnPLRkiWzScs9hDQKrtKjdpMdCpDE8FEPcoxzoxLuW3hmgHkLxTaUKKTkUUP4YC74BUHXgehTkWvSEugoS3Tj7n",
  "key12": "3X4ZeqpvmBvQnUiuKihNmWPUW6VuWgsy15fAdwD3NrreqfqMsUduFrPo4Z9VNZKm7H4sYXP5gLGXtbFV2bKSCDqv",
  "key13": "Rpug87NiM8FUpGSXcC5wasc6EPzhQXinJYGuZdAPjsrUwZ3dKZpFXEXNE1b76rdEEjyXrjeDKnwonZF95ELiyLm",
  "key14": "2wiGAdTkTwSbpntLJGq6v4eJUrVPaKDrrZmkMNyzp9rT8wuTNN2UcH5nNFXMFe97SXgBhfzsXqWzMgsBm8FGReAT",
  "key15": "4QXLoWGMaJHrJNDHhUCGcoGRqJWtwNjDN6cnu1gzooNoTshfs5MqwEwh77oKcWECFWMBw9fWwpAQ6Wn5dYkZSxSA",
  "key16": "5mpbgEqCZEzahqaVqJwjjrvh3LwPQcwna8F1o46egrv3r9vZwuen2LzdELQmjwrs17wdmart6tkQp3PBAxqc4BWk",
  "key17": "5W5HEfAtW8gbRBM3sijpP5Mrf6CNWnnZmbpzQTut776UdvfTQzM2Zj1XniGB8FAHj4x4wgZ21ev2jKuCMXxkHYLq",
  "key18": "F6tNXvMjUyE6hsXHhsEa4EG8V3z7rxzyoRWDB5BXEdKMLcGvQZqcRkhSXbLbrGwQ9UL6cAaiGyanJbUrS4xSyZm",
  "key19": "3JuXDWBswawowvAb9x545bVS2tQ9kFZCWtDLJReDz5BbfuqmHyzcKuNLKYCE8JexxKUjJpX2xfS8g42CUkheQNiH",
  "key20": "3buK7z9R8T18gUvGffmAon5s7bmjL9zNfimmPsQZyhzFxtdX21u5FEYpgZmNL81CK2ro9UGwnVFiezpP2qg5Vkv9",
  "key21": "2pRm83nFxSgX3emMt6RhYbJZn9qtAF9oLpXxszgxYFfANPgkcn5Js1swUh4kTDk1KrDsDBU24KwLtN3exEoTxf9u",
  "key22": "4dRcp2JkHbcM68YA8uUyoN7HJe8nh9iNw9jJmsLiQiN6B1annCprRSc3ZByHibXzwzoz7QE9Rn3dbb4AYZn32MNn",
  "key23": "5GBSbgCw19EA2aLsptFi39Dd9peJN3AUUzX92cBob4a2ZwiSCgLoTsE86QKcV231ZN9hzbS78dc6ouZb2dzuez6o",
  "key24": "53zTK6RFM5MNgE8A8Cp6sheosMENqpw6hEj5wAkJt9t893furXTbsaBTYBhDKMDSACD7KcFKXrewBv4b9stavVHD",
  "key25": "2PycrUL1iRSPFJPzD8dQRf4T4iyGHFJfCjUmFbWxfJFx1WHVwvWfn8JBLxHhuawvKzoDMm5PFmHne5Y9wVewxCsr"
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
