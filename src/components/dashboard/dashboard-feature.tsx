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
    "3oEXbwcawSyN6niv3XPhB9X6fxjmVg1c8WkdyyurX3SZVWUiibjJz9FgWLBUvNFaif3Dr8dbMYqnfeDFifpRxQg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63LbD2hD36VyWBgn1Ns5gR8eJkYXC2SHdPT2DyP3PCp5BFi93RZJWPuQqnY8htcEvs4av4mwN8mg6PQSmqbsirgR",
  "key1": "KAG7Lf7y7fvxrYLtvbDXkcPyobay9a6eHW3TtCEHBapxZd5rZGZWW6u8YiZcXXNCi2QWpiU61CWEc4EgumACkZt",
  "key2": "iwAfTVCWdtcBcRzQ1XB1zEYh1vvVbET7DuoJrM34VQGPeunNayiHmGs9s3Mkn5wqD2vub8wMPjZRcRDPkR4xxn1",
  "key3": "536TSSBVQpE6jG5Eu9kzxivP85SWp9JbZg2dmrTJLWxGT2pAmDZxNd3GDsf5BgMEixxf2FCjSgkrbm6U9AJ3Zbse",
  "key4": "3eSmfZJto9cHfRwEEQSK14Wo4p5jefvciJgATDaHdYcaaQab7R9iX6gSSYP1SUT7qR8mg8eFKbfSSMhT2S1hJYK",
  "key5": "4sgZYBc8Ccu1SSxDVK3BvFYn6b8forZGA5SS44jhaQ6N2a3EiQmFZeytsZKwhJpz8UuivBGVYo7RE3LEhPPVA72y",
  "key6": "4LWonagtqXfvfRkpApcBfRKR77C2gRLA93MKzcv7qdeUxesUAtHEV8F8dAg9Ej8qnTJ3gmzYh2NXnfh7WGFSxMmh",
  "key7": "2Ra832jE1Fnxbstokzwv7NQNJv95dqBxbX2HTRYTUd3QXdFLSXDQ1B7YvEiEuGzHS7NoNiXojVCRD3VjEky1DBGQ",
  "key8": "JNdJkFeLKtENsz6UgRG9USsGXGhMrjzpbw9RTpeerx8zGurfqxmPfWtHgw2wneHMZRJLBMLn1Xkk8CqVNJfNDSk",
  "key9": "5K43iNEfRVYBPsZqwArrNQpLHDY9HqxwjreF1sXkTiX6EgUtQepRhagwnrizVFrhf7qSUUv7ai2Gspsh1FTtaMzX",
  "key10": "vJRTS1yshpysKjgcaxJ2fRaA8EBRbN3QU4aUHGb9LNGaP4WCoxDGEMiyMuNrQfYTYKCqyvgMNDTSPNVa7JW5i1f",
  "key11": "PBGhWUV9ggGMqhXqkEfFrokb23nrdoMCBsu85xeyVVXZPoEpCyaWNCuFb6u2ixefZxXA2LwvVccCBco8kqHUysz",
  "key12": "5Ei7RvQnPaouaLeLbDhYtHuiZpgtK1MwuNKAXUbZ4Jrmf6KTAh8s7AbABvRPcMNPeHrEtNnXyPQsG5XwSAKfy1c2",
  "key13": "4cfpURQMhn2w6uDyMLerN463tnRUxfaYBECpyX1eNwfQxYSD449fS1PVWSkkoUXBNzHkVr41A5UThMUKbB5Rb6wQ",
  "key14": "9wzf44btJtaut9Kj61iXhxhRAfNLgLuAuV1PwPJqKGp54V643BwtFiEzVwSoEB7o6QhmHQoxhxfXxbGNWd8DPfK",
  "key15": "3iY6iRXxJfGmo9s67mgp3AqUrrGUCJzWAYm16Q2LcNWNbgwGD49YhAf7gfHwsXGuiAXMFcVdnZbCYMEu3hm9DCvZ",
  "key16": "2C3ovixeu3a5XeJ1Gf3H5eY1ec3CAdSiKeYgyLFcXsrjFpQQKeoUzruF8iritSrEvtuSbg8vV7pqqLU766YariE3",
  "key17": "35tt8rCfgSBKanGFcT5mqgqcpBNNt6UmBDpcvCtrHcYbgf4eXppmBCASuNh4cdTuzqSCaH7CthoLZejjXx6V82ub",
  "key18": "4WmVfmotVYK5HQeFoRaDCzMXjAibvcjpWK45rNB1ubApyZYUuCJAFYkjiLJR5f4AEt3nxNQfMB9ZmWfZ152taPYg",
  "key19": "5zDf1bvoXNUhLpRQk7aHjTCpXokefbpyankK5GT9C613VAT5eMbpM7ECDej6Tm3X2Fp7AA7gj9NTHTCjdQSarsnA",
  "key20": "5Lvjc7t1gi6KLyWZ8gKTnn9BnKHebPGLoCDeMTFShioKAn2pdgYn6kumYUsipkjqftNPiQV5oUzzQ9qLsbWYdYbx",
  "key21": "3t8Dep8R5PYs3uuQ796uudHytVZGNUgcVCqDJDH6vUg6ezUTrgmUA6t4cxpgcahMUbMeyR6bqXmkG9t5Z91CXNvR",
  "key22": "4qDsSj9ojNnkiSe94ujW4XCQzHbFD3CKWPifdLMAKurQViZWdiGK3PEAde2vey2VttTiQU8FunizT8wDNdRsggAZ",
  "key23": "scotPdqXLau9cskfgDyLswXRLJFuTdrXiEjsyb3R84n5Se8nhLnqnR7hw9fuDFFP2XkKnpinCP7AK8HihowR7ZM",
  "key24": "gwofaEvuhhAo2ip3WeDz5DHmsk6PjH47wYQkLsQShoUgE41tgKm8YGuiTpNmoJoHC91wB3HWfvuGT3xG9hX1SoL",
  "key25": "2y51UgPurzkcDfh1uNAQ6YAiywumgtu6rdgrYUY9hXgkmJzoPV1VkC7V7cYFLyrCGi6Bp8Jm4eyVfc9TdnQP4onP"
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
