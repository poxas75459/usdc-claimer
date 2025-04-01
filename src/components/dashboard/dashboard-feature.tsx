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
    "5nqKasPiziRn7iSWsAubgzBdyf9dGuQkgwVJTUc6EB67j9RrEoQZ6YLFtEg8pzUS3EEUofsnZ4AnWWt63nSiAdDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3udWKT2nEJhoecoxWKD5HZLydcv7LBJtGKWASQAWSMeRNBaojhfp2fKoL8Nmi3J2gdev77BQAb5K5U3qPYWWWB",
  "key1": "47KWR9gZoo4XRZfzu6cEJjmhEtedc1zzmMrgeRARiEyH5zrjpevKkvsiML33FSYq9VUYefox2mJpSuFUqK3B8G6U",
  "key2": "4BRg5MFqJ2djX8LvTZSJQceMD3cP7CwWks96UVMEvwonzMYTJ9cQK7ZQBzPRoMB9tNF9SDUZCkAEvYpPeBdjq3Qe",
  "key3": "2AkTRKrmi89CH9MhvDCvAjrza756qEZ3WqKWryYHkCQGKN9zMhiiz1Xm826QdF5hwFh64JcX6ArcKZswpYcH1vd",
  "key4": "3jdy7uwubs29jbrNVXr1EWZk4fX1ngaHCtkwFGR79rrF1FFqscMHvdkmcsS9sevpjZxvhXh4sU54Wjv5Ghw8yeWg",
  "key5": "2Z8Kh9CmZFte4xWQEFpaThdKBRCtYZyhrJJPKaV5HPD6HSMEKCtFyWU3QycRux32RyrxV1G7gwWtqfnvc6PYo15C",
  "key6": "46iw72diEb8zeXadUGkww9WT6LfX4DGHb4sePZpZMs1d7MC1xaVV717ookSDpMeExTJktQy2N7QnNkraXGidBeLj",
  "key7": "5wpCJCvzvxnsVCw1Lkp9sZ3WS6ByTBykGzox6D6WgCNmJqZaqu2FLAdZNyPRQAjd4hTB87z3Qj8GpPAzQzbfHqAy",
  "key8": "6dtT4RrSCDU46w5XMDwMiDKzR91M3NhDHqgJBc18fhtwTMdMDB5jP8Qf6FnEkhtZhrQzT3z4fPLqeJzD6HH9gLk",
  "key9": "4SutR8n4cemDkCgCGsQh8jN3zDtGWmiQQvgnKn6Hq25kNjog9FHmH3cHK5tjcXyTpicTtJcHiPMRWCwjcp4gcTrN",
  "key10": "4dREVEoAkRxUzXfvyrqVfDs7kiprUiVD5oAVeSwuD1aXE8Nbw2jjG7JL1S5sSkH5FfbpzQMphucFAqB2yYbShatZ",
  "key11": "5239QjNZTYKL2bCcLko6HXZDFjcDPrMiP2m25Jc43jwu9RD6EpB17HdM3wZAdtbtccgE7zyps98NNJ28JopzAsxm",
  "key12": "5a3fCufoGfDfSHzzKp7PiVf3y7wbshio8gdacEu8YoZ7pnHXzsCdnBYFBaWEKbgYzYaEVW7JT3bFPuRjPM7Qp4aq",
  "key13": "5nsbMX6cCSRx6PdcJwv9wTHWicZtTMAoGTYnrDA9f9rutTGtzkRq53ZLgm1SbCEcRr1opk6dARrywgzGn3oup8Uu",
  "key14": "5KjBstXTSZZUbRnQXbuaiSbn8ngw67QXSqjVPhnGDGDekFjgpdF7wytTQzmMsdmKRXmj3RyZbUqUkP2NZGfCoxiz",
  "key15": "wu2nWFpxtg3dggYv2nsvfzGih2XKK9YhxczrRQCy1HtfcV4XrLAewLMTMusNr37pz9fHS5rhb89913KVj9XUSaY",
  "key16": "45RZzPqbD443onaaAWZdUbAf6BvZkMhmNTf2Efv5paRNq57YoADwF3jjegboATiJbvD8d2SAVQu83Z4iQCPRwjXm",
  "key17": "2SXH4pHrgKZCJ7XmccHQFoEMzUBJqczDYeb1xeBcGrhKg71MSCSW9PAdTzWq6FiEQDaqdZtb18VVZAPrW6tajhYQ",
  "key18": "2S9nYkRYNQ6LoXEAMVxwxPk8HuVHpLwdPuiv4ouPepnpKYSoC1MZAKcbpw2ghynPzPpX7Pc8ppw4TxuZfADxGxHj",
  "key19": "5axnk4QMjEA7CJFT65FgCDsaFi2vC5bjRSNjP1ofA4xzergJeHaWGzhTEN3MXuFbtdZxGRsrUAdf3265rn2NTbNb",
  "key20": "2rcPYq36AxggeTbitwx7kcUkv1DR5yMHBREA72NaXM6jvrEKZVpLjDp8JZxwqE3nz1r89HWAn1cdZfoqQgk7AmHB",
  "key21": "Rf859rJbia7C9hYgRfU8pE44fXsppfiB1H98uz5SS2jZvGsUkMzsviYcJbCc3XrZj8wrwHr8ogsq8jJVNkAGmJf",
  "key22": "5KsgpPWDLkoGQbrFqFLcaKSNM7BdVDakYaMpdVJqMKL6WvPXEsBjaiJoYY2275xHtfUAKW7vyuJ8eDvJpPm88Y2A",
  "key23": "4Y43d7TbNnymXetcXKBiAhs53dvdTeUuH7Mhz2hKVC5AKmcnihLztkvajhsnKdWRp2Y7aiaySgrwkp5pQN4UB5ar",
  "key24": "3ACsPJEtMpJJZyLvktPAeetqHTU8KFWdi6TMkhSJgxxX3F1NDQxvg9aiEKJX1RVn8yoXaeVJ53XJS8toubdCKv8D",
  "key25": "53ZFaqJHYso1ac3kvSuP2QW59rRxKSxjnHR68JXMGYpVNujY63TUjcQUSDiQxE3zunXKQ7BDpenm5kXBkXzA8fPD",
  "key26": "UDXEv8E5YuN6a6PrzqSehRcneoiYqJFYMtNFeaiqYjJ94agN5tVQ7sGFbRzNRWSFBWS3bd79fAAVDipWVPfaUat"
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
