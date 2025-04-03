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
    "2u2QSVSXhCiFaLiWXNqqsN8Dkv16KBHM5VetiiYuas7HQgH5q4TWDK9bxqxNgDuYaL5QSNijqe8zeggiiM3zjbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9Q5iSaTkLXwxrPX74MTnckfeskrPSnqjPcVcUTDUUuftwqK3UoA9r5TER1BEo3WTr9JX8Fhhv2obc9VoK7XwRG",
  "key1": "27apQV7yYXpLhcSav34jrDXL51aJNjocGbci2Uy6SJQLGBEy8UjEZBrSUg1L5dbDPLaKTRft9RopM1tUkCPKimyT",
  "key2": "3ucpKbXisJybCAdMReFKgTAuzLJoNbVkWa3yazCBpZnPMCa7XtcaRVXryNk496WsunupD8fAH8u7gJtM7HrAEfsv",
  "key3": "2h97NkUYd2kRMrdymfRVvv6rdWDNhwCchWzJFNa73DgYZ89GM7T6zSb7AWVtYy97A2tsKxuwc6EJUdb5QTP3ZqrT",
  "key4": "2ekioEiLBrP7q7vv5vw9dN5dV6Nc62DzxJgdxfgy629FtmgXahkkwDT1sTxJ5NTjDhccaQev9pdc5aXNzdgv4qh1",
  "key5": "5hseYbxfAQbJS8u2CYn8c6X4yv8qhU6egagcZyndGhk8ugezSAonDQCE1gYvre8RAREQV6ZrDR4Bu68Vu4R4GBNk",
  "key6": "5Nqn2gNo1ab3PCZPtVKHGHv2MG6KNEz47pnZdUE29cYfNwnUdAj4vzTLod46svGfrFhARLgyj8rqRv1AADLsZZP1",
  "key7": "4QaJnhEpdsdeMuuquB1JkoDayawci9JnNyXcmap3YjbtRyeaD5D7SmTXY686D7BoDLTRmJ8qE89yPP4pGTqWTFgK",
  "key8": "5x6PksNai7L8wJc4fk3QyqG54KcJZYNL2zARhdtqKYbVvP4Wacxbdo8BNVNnZq7CVptxKsRbc3D3hsUhem34nUf1",
  "key9": "iHhKwXf9GhUPS4XtFStAvPDbubEJGGtZyFF561r5hdHcY2CqWs6A95mfm7QjY4JtfTJ5eB2mpz1V11XbdMLcjqd",
  "key10": "2jYCRHDZ5q8PcJiMRnSRfsLrKVVreYwq7JYnbYz6B1WXqZ86uPdgLoD1RofqgDDfUtuSEnCVJKLUEfcCkqynfHBM",
  "key11": "4juhqCG4txr94cMwEpwjeEGAbXWZ1Z7pFTYjwrwDbJQTwvFj8MgQ2H57ytRMMaFwxJVhZC5PCete4y6D63rygFq4",
  "key12": "fLKkErgBjz5NB7DGxPvLjN8wYYbcGycKGc951g7myfz6MqFcfm1FXBnMXhxUnGVd8CGmki2bBS81eJ9Aceju1kS",
  "key13": "5RZrybM9EVcqbVeyumo7mEivKFCUszk9E5QmcUraoczCTbVkvgfYUE12ciaFwQG1TCReNGeSbc9KLb8pr3gDvwxr",
  "key14": "2N3HzhSeWJ4EAT68AtTj84KPGrgmMZZSnkjx2iwpjM6nbTgsqHSwWhAj9z5czh6FvYBEQSr5vMksfkY5Dr3os8yQ",
  "key15": "4ZGu3t2AqbT2scm4pYVbnVSTRHkKWMRy2ydJFHAcsUp8gUY2FvrC6gchXC3r1ddz7qNiBAGFYJh59Uu2vJ9ZFvaz",
  "key16": "2eCkY3WFsAdtHTgvyYbSCNC748Bp2TAugvAgq8qatvmQPRT4rN4oMBVWAjtwPiGSeaKN5aG2AiGZVL2uTtizmNKD",
  "key17": "2PHqykgokM4GMBrMVdseSPGCar5WbvtmdcqD3RTyvcW7hScawY5bpwcYrygbQBwrz8K8QbW4TdtNzQtHKvZBN3mQ",
  "key18": "5Zg1X4NK8Bz4MgztejSthDvqXTDbRc49BtKNHaozfnS3yZNZgkQjKM4MTH8wekX1DpFRoJ6YFZkbMUELVZhdmSSo",
  "key19": "4bMJuJgUZn7XWJNjJJ3xSDaHZRcwuqsFohpmBXmzBt6uaeA8Kf6hnB7WtmnNV2HfJm9S8d7NnQMzUfUdWCP3r2Ci",
  "key20": "2SetFeopQiVdpASd6ikmPyEQkNCGNbH9CdoZWyENSjXkMj8PCU29cgYfsUFGRsJtdtrQ8oJtqiJd83SC9rNzthh6",
  "key21": "65aUx6GNgZvMfZs1YjNF9mx47JQsdpHLdS7AHpr643XFFsJneaFR9VYMYEwqGiTfeVm78ndVsK87VQuHkWzsYDVS",
  "key22": "4mQZC5jTCnseDAu5bqN9r3YHEztc9tYRBBfToKu7gZLJXwsNwzELsPM3pbnmSaWyeKGA6kQKgayLriNL1cdGx1gt",
  "key23": "2bsjyhcGhv65byqrvGYwcYFwC1kb2ahrdDNjEi9HgfLCMzoTpiw3ZEYjSGNWJMhMiXc3LyrXwxUMkTtcjJwhnVN",
  "key24": "2gn9wYc48YfoYtx6dV2TLXGz6ajWpx9F6CSbi54Sw4be7pUQXyRx45KvJqWECu2PPXC4Qrd5aQfN3j4UFfs41tYh"
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
