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
    "4Vi5JaLqfLmqH5TunLWAVimeC3N5fBVkfSCDSTTxPoWbdR13uPoXdKyPjYxYjW2yxZ4hfhz9siagUatNGwhfzJro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qzw9MokDciWAgMh8mJZJQjjEynafMBhzwgXyov9u3C6javBM78euBrfUakNAQof1cKBZ4LW9f7vSrb9uupC7qVu",
  "key1": "5Frs42sNeUpTDAnjPBQLETa9ikyZS8HeP1ZCZxsZMKsnxUyrJgd5Aim9qPGGa3A8bQhkwwBH2SQeuHy7Ww2cijGS",
  "key2": "2cmuuj2ffRSxjWJ36UxvDxY5HMfUWgP9m6kJ5HYpZ76XuhqheDvsGUTGu96qd57WvighHR9Xz4uFYe6RtRvZPbuG",
  "key3": "2Bk9P3WW97KaTojK6e6VsTUzS3oCTU5NH1h3442479zB3iSNx9PJ45jycJB4Wbw2GD6aCPCdPggtEiRpu2MCqUHD",
  "key4": "4gqKRkVswwLyjvCK7vSfRnqWYRnD23W6cBrEPqzBY1xpFpXQUov1U2hBCZ6dShK4mGsMPJMNxPdSk5xBsTvFyR8A",
  "key5": "5gRaPSP1MCCkHMnj7U3B6iDM9fTJXB3tkwfc815y2uWkLj93GMeNjo1VJJpZTi8bcBV1haKFooezaMgHEc6meTkp",
  "key6": "66AgEvRwALA4BADS1xWG1gfLW4gq21Ne2f57kwoVQDByH6wJZP9MRbVhUJZM51gQK77auAygSN8aNTyY22RFVHht",
  "key7": "3FzqguF5tAQ1zm9rdAYEdkizEpTadAb8uzwX15UUjUj11d5Mg4u6emfmPG9TRVAG1fAHQJDExRojvjd27EVRLST5",
  "key8": "2ibK8diWwJJjCwYwYuEmo5ADfQXTtE586PafBf8WMTNR2v4Qx9SRU8a2yFukQUwF69TDYwTowqD7DFEdkJUqM9Qp",
  "key9": "5RmsAmMvuqjcDwJyvWaP8Bv8SSMGyMdSueBrrfNsVnDLm6PZurq8cRCCbg74f12KQxc6pSknP4t1uMMd2mS9z85b",
  "key10": "4136Nvg7nJYAfJd75hcaqZY26mFE1zhwGnDwhCcf5qNhM1s1X2k9ELLaSyiHPBkpSCHH2HPKp86VbWGMNyPCHwBU",
  "key11": "5jh8hFdcpb6KViQJfsTXuoid4fvDmfqHy9RbmydhxKDDjemTKKvjDcUMCVV4CpYotDHRnyNKTvsnpPZWDoGLrjoW",
  "key12": "3cWJtVb6n5LpVja1eNknQmHeBRky95NcPbfEf4mPyJSJHJj5dZ63wagVvepLKaKn9GddxkEZBxQzByaZgNcJTwG1",
  "key13": "5j18e7YUZV4rT6GMNmdXnrHJfXkKpJD8KfqMqk4tfNmDcCkPrh1rJeTN5ycbK6qdNQ5aTxFZCjRECrXsnmukD7vm",
  "key14": "4r5uujFJJ3MYi1CVWgD5UedNSkSgQXGUYYh2upNyJugVjVZbYvQ95MPKtASbjUArw7CgmSfV3rwFeaR6kg9kfcWJ",
  "key15": "2rCUVkpnHSV8H6W8niSw8Kv1ZK6uvgCQsfMNriXhjZyZJbgdPk8Ed85dETqSLeDXa24R2Me8QkDGpt4iSpZ3EJPD",
  "key16": "56JkFWXuFU7B6nwrkXv8MJfQNGmTZtAMhib3vNJ7Lx8yJR7pKKwCoL9PhsQQJ7CEnti5e9unRW7QQ6d1pw7cBTR9",
  "key17": "EjsPXmh7zjgiekZHxXz5wV68v7QSS6gtcBSw6FwXJXQHvv2FpxDxGxeH9XUUe2hbPy9W4xjmVi7UdNvxpPDWqQW",
  "key18": "4zeD1ifwFrhL2SmkZjLRgVSfaprnknBaCpscxUPJJcwwNA7qwxGNQCGUfx5vvNdiz5x8sd8KyEu46KKhQM3uVLLZ",
  "key19": "5tDjqbxiubngVL6Q6Tsyanshb42MXoBTi7RR22RAbWiNqFtpnWnDmH1QsGxdruGc2q2mn573gCFs2hAFjse1YiCd",
  "key20": "58pwMUYVUw9QFgxb4XaRTY1vHzmHAi6UTVAdxR7P7i28rbAco56jgg2ECjfufNgeM61pHFHnxPzp2BMZesSvFiWG",
  "key21": "T7MFrDTsGafzi1otxSw4MBHLfQvG8RrT47atKNGY2f1GvQKq7TQgPjXseB5GjuQ27nMnXabqFNcJgDR4Jezpvyq",
  "key22": "25p46bgVFuND8vk5GDVLE11PkqwcW6j9kiPYwpv2nyRrfP8D7grvSsKp828sWPTGXTS3iMJbXkR7ZhozqjwknkV5",
  "key23": "4gcSqY7YMnHn89CrWpnUQc2UvTxgEkRpQpbSjQoof5238mqxGJ23DdgtzVoGPVAY65vPnm6xYq62x9qWw2CMHibv",
  "key24": "3tzvJiYscUSmF6Us1oAqWBXBzygMYSapXwhUqwRomBvEygjyxuBHc7hNYWYNNhdrEDSjFAE59NNsvrqLAvRXMYsi",
  "key25": "5pgSDrMrM9TZYfdr2PhgopwvkbdKv9vqwEP4eT8p4ucTVNMCE8TpaixQkauJkgJtHrzAmFgetWZLb1cNavYnorYQ"
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
