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
    "5TRgiMANsMecEJpSTniTXWUp1Vw5kiBMtnXUPf7rbMr69pSY3316NP2RoQNimykV3eKaXjaGx6NVoj7FCxHjrDXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22e9vt718LMa3XbCnkuTxWQwqrxdUnfK7S6jC6s7x3jspG4oRCbKtuEzzGGZwXwjV2vy7wgxvAagNXVbNeHXU7tb",
  "key1": "TuwHJLqVrdjHJrJFYnAeyufyonH4dQ4ZHy1M4gLvBTw2mzmmHTm3yxo92fmmSfC9p4iNcs9rBZgA8FbkjPYbHCR",
  "key2": "2mM211vrPMVW3h4U17Qafvc6WgHh7ehPTPm76zJj3Sq5KkvvgATiFUecpZipwAEDA9n2FRozyhS59xZtJxdv6qsL",
  "key3": "56MWRC7GXa3HbSZQ86JEpTnbASTPunNsVEXqJdCacTjXjumBTj3u36FoJAdK7YDEEgQnsbb6MnUcdb7px9JUs55X",
  "key4": "ENXJ6R64vykgNJTiteu4wg6ZAHaDYN5hGSEaL3bXMLXomnicq3DqVwS79kCPtTYCbEjSadkEzromgcZAi7b3HQa",
  "key5": "2HaP1aYZLFz8cxd7mUp53M4se44C5qtdfyqD7A5DqQqUXUzMA83Thq7sNt9vMudm3qb3zLTZ72dns9q2ofPJJcNS",
  "key6": "4hvkoP36HVGv8hRdkBqgpB8BytcJjwU7wu7UeoDMpg6sHQqXDvaTWVdNBwFmp5tcGEQRq8i8sbsnXEE9JZ66Kt6X",
  "key7": "jxedSbCL8ihR9f1RAJQ2WMMSfxPnp2TEtvgbBWmtMU3JQnMsUDmVhrRakL1jXCBzing7yv8SXBcu6c1tMsbfo3G",
  "key8": "2oTmSTSgpXhj1SgwrBvCPhHnTcpzr8hqcEuL7Ve5HYJWXbg5EHvVzu2Zgkmh1LhFnqWBt6Jq3wXnVNJ2nNwncBcd",
  "key9": "3KMFAWx8s7AgnaTw1hWA34aAnWsTha4i4yjiS9qZs8JF72uMJM1aA1GxavSSLiqA77dNuJT6zqVDPs5GrUhyPzLj",
  "key10": "5yYiuo26scjSzESF9VUPFGo92axZ2tp15adJQP9vK3B4H2VN1DDFdpgyPZW5WpryB1HicN2vWf1QurFYT35eKn7T",
  "key11": "5tU4FGRcyWZgnejsADm2yy6HePfA3zKfoiUqaHWdT7AQqZg6VCdUDZwKoW82oZcbvsc3n5NA976AQtMfMyS5aAoQ",
  "key12": "4yH8GoVGqUtQ7ZY6xjgABshUYvwSCMcohpzzxA6U48HEpS6cL5DiWusYSk9TZR3wuB2KeZbHVm4Dr1hsTZcqrdmp",
  "key13": "5ScNRutWt2HA6Z6icDY6bf4krmkZCsAbvrdzSqJmk3QnSLD2HjGBxrrr4cqHCnDvEvDjzHCNDWt9QiABYVJCYv5N",
  "key14": "VXme21NdjfPByUDzSBC49FffDz8vnkkpuU8w9kSWv2jjeJcmZS3EFZedLAXyMe9dT7ecEbEU11YALhbApbDoHjj",
  "key15": "4DBcAPmNhH8S8BTW1ctjYeEByWCtBQ9kWWvcfWscXxC5J2GqaFkR4GPL9PLviFnprscnmAiRzrtr6hha4ct1cpNm",
  "key16": "3ZwT48ssMaVahT8i5HpdB4SN8avNWN5Rs7oL64YxqWpY2UNo55tTgx52d65L1hd6z5H54juoydrWJj8hfepsBgcE",
  "key17": "41aKzTKM9BEHXFjzFyh4748cnk4HAHAQExuDtHtk5XvBjF5wkjdnnhtTvzmTGTLY7bNoebnohxoBGrVh41TetR2m",
  "key18": "4mZPf9Vov2gqBuKs32Sanqbx67JE5ePEDUabqd4NbfaDs7iEksW3E2SeALUPSayxqS3SApfPCpU9N2QzhCQvGGoi",
  "key19": "5y2xyZWRv2Pa8qvwTdztrJebZPxBnfch9GFRL8TzKiEbrxjEaPZPGfahFawPgtHymoFi5NZPwd3fSKaRFpLLnDQ6",
  "key20": "4HAyA6FgybWCAdViawPp5uZGsH5npHC6ZUuj3qw85XEWXDxq1oW5NPxEVnJDBbtSmGU47hYKEu3M7otdEVhBS8Rv",
  "key21": "33tZPi4LzNxiyXkvaT3DvDHRrpEuRZjLUMjgYRU8iBx1zLbFuFsB8LdZTpQkLkjwcGZC4GLj9ihQNw4kLm8VuNy5",
  "key22": "55T4TCBVz5ii5eRwFTLhrJ6syS8j4QK1QRjFUnKGA7BgsVnAS97wuw78vhRfuQXeqhwLAmraSmdJCGdDAUvJqx8j",
  "key23": "5GApiWda8AX95X9cwzka35iq4aJUcjs8HJ8XTgpgeoSqZWdqeZeFegxXbsnVmanHNdSjYJ2RXjvAxe9PFNvVQy1s",
  "key24": "5EixsLe9fqVsfxcKuCqxRCPYMSFypcbxtK8EsU1mWRHqAVhh32YfEvgaieqZbv7gjLLHNp7twKLtNCF18sCGGeit",
  "key25": "H4PjrctFdHXgwHhGWmgPnytB23buDiZnP2oefHQW793KrgR56J43nxaDQuvMYc7e6bpiHnZsxYDatbanQ9uHUeb"
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
