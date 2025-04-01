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
    "5Z5u9q5waqdNzyz7mPxLjh57D9P4HLoj6NHv8at39MajuZ7Wv7EWCqk1iG8BzpriPibjAFtEUjBSqjQjUDBUMzxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MpoHzTR7WoFWKDJ1m7s6qpkGqvWcQXsqXwocKHMZQFbg5BhLz2dG17xLoe84UPoXBPGSVbLc6UfqzfBh6ivHaQV",
  "key1": "4Zv5EjvE43y13UAW5ykhHbebTQetQryQERvZ5zrLrG9Yo9aqecGcqEYZgRzUBUbSiZeDyzjNk9paf5djrFqPN3v3",
  "key2": "3GBwP2em85u9PZiNiUr7L1DJpFiUMXSkgxtEuWxtLd9MfPeFMsXk6dbWJ5getXxgkVrzMd5zy8mWL3NRWMhsuuMW",
  "key3": "5A5DGYL82BPuwWaDEmBpjoHVWxtfveLinfGK5HFSSNnoR6LhVTfVBWpLSPkidjWtm7rjnbZF8ND2pwB8MvAwFDfz",
  "key4": "3WCVtfx2yLNpHsUYXQyPXcnTvg5hhtTtmzhY9e8wuMaWzLMsVgZu3mdpTFGpwjzxLtqTCGJJLTjJxnaK658wDggn",
  "key5": "54ucX6za36mmnVHGJCw6WoVgFaCGi36L3a76iko8d8LDsJfpd381k6DPf22wue6qgitGNu823wPXJJyyqRHfrCk4",
  "key6": "YpumG7Ga5rKMivxGPh4xWv96pDtJ3dXAkXgV3bTdvfKRvfuya9xGMVhgW2AJLRQS6pJjrPm478V5MxQrcUvx3nr",
  "key7": "2sb21sYDAoHYVJecqEx12KvFn8yEvud91ijCh8DzSzKjmEpWbTnQbEw9XEk5dkRq2Hyfu6zA8wEV6FHEPvRDQvE4",
  "key8": "67qXe2SLbVhRMXaDvKUSKRrrC1JEgaWQvGVHqDJ6Mga9dZHRT32DRHwf4L22CxrUnqcx9TCp9mbBCYXyvzcaBd5v",
  "key9": "WWiWQiuqzs2zWiK8BXwi6XG1WKG6MC5TL9EuDYuXqmhGv993W3ZeckuvzJrmcBfxJcwbWiJr3cyJAReYkki3kRU",
  "key10": "3sHqZ1T55QZSFP5Qz4U2jTKVjEM2yLJUspEn3uwCFpTq8qURokxpJc4PGqngc1ciihwq1TzpKvadQoNKzxYZgghg",
  "key11": "2Bv1NadjQsAwGVhgRJBwKrsU9eGcZZfLVfMGXRR12h3KyNMfw2DDsVWWa4YSbU1HojPqc275bp98n91Kypw9gg2T",
  "key12": "5RzYCEUNwfUsXFdovVSTrAcVVTejdLjVxXdhswMKpXxciAsNchL8Ntj7fqbBYd8qeUte3zD7bbpS9PCeDNjDNJRm",
  "key13": "4hxy58j5T6tNa46DUztBkC5Nrtbw8Qmtz1rsy6oLfTemdVHyX1DeeXvxbYBkb4xvxry83CuSBTfgcZkJysCHvL1b",
  "key14": "2gxRa9tKnVSjRi6WsKtP6tG9sWMvBuVPgpM6i9fZcNp3tnZtH6jbzC8p9ptudykUbGjqjHrNqAuYpYXga5X3xuQt",
  "key15": "5v5e8qB1KjidRK5z14C5ahGTouLUaP3azEGgPiuBCRTkqKzCBS4PL2mMyKQLWVxY3LP8w3UHoGg8KMCmT7oqxc2Z",
  "key16": "43Lwdsy9Ny2PwAmx8CahtU2xNQgaG1AmLWQCN3PFsT8558DkLniMZceFG1wstFNwgQjLEoddHoN4ip16BKvckpT8",
  "key17": "4QkyBZjB7YBW3kRB1eQyGZAJajQbMLviKYVJXbkBcVHWTbULJk8p4K3cLXaA6VYHz3MwzNfFz4D6DoHAXSaW5KZv",
  "key18": "TLVGrxazbjtCaRokcXkrDB5ZScs5f4JytBsRHsGrCKNNSPYt5uypxkW7ddjebwZ2f76b8gMWCRNa2USepDMMGPe",
  "key19": "27HCdm4QjF4s5x3kiKMYUFBnNo2MdMiLcoUGh4s7juS4UXCQixKNss5cKYUHqEVUf9fBEC4ZNN4Dh98FyFbtCZTR",
  "key20": "5sfgF4h1uwC1JSJmfjsxC6MGaefPr627D3Fj95AgGGXhjRkRddhZHXVyHjkHtyyZGg9saRYMyT2o6zPEfXjkPgV7",
  "key21": "N7shyYbot4yrZH8TbKwFZhSVWiw37LLp2ve3TpHa1mnv7Sxo1dJYV25KTkUNCMraYthKxCoMKfYL1LcJu1sxszp",
  "key22": "4cHi9LWDMccpvij4jHNxqNwE4z7JuriWXFu75pcqUDGpdQ7taxm3E6phqxZ9eF84sPnLcodgEtSke1QdcvNyjj8Z",
  "key23": "3Fzr8t2DgkB22M8v2P1mdXKdiGPR7zBTKi9DsNmQCW8vCJ7Nb4urJxGzyCHTXSqqJqee9vCoRiQvZKU3fPYdcfyc",
  "key24": "2RqpDQWVPMht4eSBXzGUDaxeVXj4Hx9KkLxkhUE3SF3Kx6Z1qEo43fxb6wJpBQHomSzyaos4EKeKbMAABiC7vyxH",
  "key25": "3obuEeTHfP7R5QgGuuEssgxZpam5UnnyjGwmDbTCKpk7HygH8iwjgEMLqBjECQ64KB63p2bU1SuhwTRtESXYxsBt",
  "key26": "3oJJCTS5Fyzjd1TcCBkbXEkqhaBKS5WNXfshGPqF8SksiuaYLayjy4dQQgd9qJi6tJwnj7uK9pAfQHGHmTmouC1a",
  "key27": "5hkqZNCop9W5jVYuFo6fmAxxcsGXCE5mkU3Q6bKzs7tNKe7c1XNTQVHX5YKcCAxc1cY3DCqJPs1WAoGZcCapHWcU"
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
