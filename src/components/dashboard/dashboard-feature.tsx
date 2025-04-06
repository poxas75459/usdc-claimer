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
    "cY32Z5aS5e5QNkiMpNKW3QUWzG9h7C8pXwKKoLzqZyjS69emyXBTHniA2XdqC6gdsSHoha4xQfEfZMNHjqhXp5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkVqMQZZ1WMQmoiRMxgWHTzYBynMJjiA5DdZcrnQ5fdNAfBnDo7iMjM2ZAKX7c86FruTyDxvVSMkUxdLWyC1Dym",
  "key1": "94oGVWTLLyY2Rz3k6gexeYX7Mb1SteS8ssL9LSoLqotALkTbnGyScck38zqaBcor6hKEFuDnxk2y9R3XpZBVrJD",
  "key2": "2ff357wtaxAkRYjhu434XpQUGP4oSkQDDWZz2nRdZEdxpYE4zU9PZTNJ1CCwcGnEeag9xvUq9P6omumzt9SLv7wq",
  "key3": "4xZWi9U4HMjDpr1DszvzQcifRWpRzPYnh2LM8zoaDjUYx7Pfc49JFeHzmxTgWSEeSijH1re5rUSE89ui75BB374N",
  "key4": "5Nvig6NJN7xFyQcS5pHjGTrGtCx59LrTSEBaGZdRDzdFDsEgcT1EuLeY3X9i3rhZY1CGbV5Vm4kw65hL42wAQ25",
  "key5": "4yNuZN5um4EaqPWorJMGcbP4Pmx7tSx2EdyevKWf9nroXCGgJh3wxrdbDcUvjAUXz6ktnicon4b4HHmCPfXA9Cft",
  "key6": "5ZcN1YvW4LJLvdU1cc98dq72A3VdbxbQLbQA4YmP5krhbVYPWa2Bej9Db24mUgj926efmrLhL8oMj4mpxDqQCpaq",
  "key7": "21nNnKGcNRifsn2AJBhC3MRHBaTsbk1RekivEALAzDwh9t5uztyeTaco1y56VCHWnATM6NECHfZFE1oeGqudjzm6",
  "key8": "5Dy1viLgo1VPDsWdtQi2fthi8u3SxXabhjjx9RabwKCkgLuMzrPeK8Z5pVidfK7z3fkY6HvikmPUzLEuLAxYJbn4",
  "key9": "3V5Z2wC1y5qm1bfkP8cecjqnrrsfnV2p7JuQMiYcp8FCzUeuqENwiUaoRKwMDMQ2QWg3BZLoB3aaFGLXVVMfbtSF",
  "key10": "3RrdWoJdrgiN9n3g65NiK53vHnrSkfpe5yXFCidVGUtpDgE6VcYYksnaxi6dynWYhDJMbm85kC7KZamnDFa5Efww",
  "key11": "3gt9DAVRKgQtnF6DwsE5ovdZVc16MdnoC2hT9v5puXBRYubsrFkBj1BRS81xjNLdAiGCKC8jwkk2UrzKqKTAQoVy",
  "key12": "2xoTYZefpoXF62wcjaDCEmni2KrMai8dBziKWfP3wHPs2fQ9SJ6soHy1NjwjYAk3bDKqSFAPeJ8g9PnCgiMn8xHZ",
  "key13": "5PJfLDJH5iPJ8gRNFNKVyVqe9uJQKddSLfWXx6m8pkE3tJC9a9wukZyKeNGVv4gvfFaA1pFZJwNH8kPqQnp3gC3J",
  "key14": "5fBvZtDY59tVQ1MLNXBBPUK2Z3rhPLRxyFZsTeADSMgwz7JUiykn8BzxmEVw4vwu1HPmrQkLnsVHsdhjamcurBZC",
  "key15": "4Npg2yGH9FUxWzLkwFmeEKQtSJUzRZgx4HeTk9MzZ1adV3QcSkPpCqn2QQBehFvM1vZm58SX5imQHc3i6y8AviaU",
  "key16": "41rkMi6FtgdqPMKzb8Ma3FSX8Bxk4wYqzknkNpEpxkjBeKKu9N72HDdUjmLAWYVDrEFB5NPyhcK1W3vFuz8ZRvkq",
  "key17": "XPkdv2J5mHpbJS9NayEnefTFpZ21BcWmPGJmPeWEyzoJcb8kPY9FefJwPZn4wtv6e5uyPiiEr2tYGt6oLKJktrS",
  "key18": "5wvwuKuNymyqVSZ8LKrDCq6KLyX2AfuAT7eDYSzYgtf97tXxaJf2nEGEWNTN8wSL2z77iKLMXsrFPtqL5inyuaU3",
  "key19": "2ezNVs3dhukBsXwViUNWmZPvfAdKVXsX3GyDNHUxoNSmVokxqFhpaLA9XeUpv4arjnmeiiM1GeYQTigF16QQosxs",
  "key20": "4nno38TALrcySjBM7kTGbNs8sRec1eaiEq5np5EsqQiFD62ix2kxpQFAXQQ6kLEVuZvxesYVaG6hAj5TjxbeKfPv",
  "key21": "5S2obrHeeH9SQ5zKvVa5qQ5WE1ZyXc6xZKMQETzH7kmq11vpAxFv7wn7D9W1jNhftJsKFti6bqLbwzA8WYvoJ5Ga",
  "key22": "4tHiK25dWytCUq5wyLJGTN17mfFtSzvykJxvMtcn1y5Ty5YoAC8t6Y9j4Dx2tV6ubJbZD9R2CnfM6wGXMhSKzWHi",
  "key23": "3HgAnGkywzbt1qGYKpx5TnBa2WFK1DFwNFtgoqTfXyZxrLjyeZwgZ6fDL7RAhjRzhRUWKEqLF5CC5nNegPnxGnQE",
  "key24": "59tVT2N5asYydPvQ9PM6pVNg3yrKC29urLnMCjTRAv4ixpWPuoUJAsA3ZXdhxauJD7GPxY4numnqbpnJeZFRq4Qo",
  "key25": "sSDdY2pxM1mY3zmhVuGPYC8E23W8tZR2vCbWkFK8xtTBCb6DCyrVUnymLCrWFJJcFERBnusv9cPrkascWmXmcTS",
  "key26": "38XEN4oVbn2U7tkaS4WmKKCs6bB6YMsTB6owhNmDaMiAekh4TKsyyA8pQ8eHpCBNLgcgJuWb3bVWefAkihCkpjd1",
  "key27": "jssNayxx5d3xQ5vqjLHdmKpAs3VPVuxvQKYBunnwnCWVRSEwCf5Yz9Dp8emRJio6USwZnTsvjEapV3DUCTr6B6e",
  "key28": "5V3qxLUWzUnaLi5DxQMPAcxYdPjq74XxXNs5Dg4wD3bg2aVJRDjCh7aSRMFWA4D1Aunhc7EfV1Zf7Gdsfr92N2tA",
  "key29": "3DKRkHmzqjZBQbSrshLsJyWRrGkWPrLrjkktrFkkdrMSLmbzNovghxSax4UBbhchvY4xzqFf1jju17niFLzhqSJU",
  "key30": "4ptPJTPCUBuvoewcMDZVyAFQWyxo9sPAQydyiJFC1hCRnHQdrjhKHKhfoDdMvDBwc9jxiXsvqv3emi4ypowNUwra",
  "key31": "uDw1AnYEaqFnDrVgJaFSJ5Nr6UNBgmkrqUy3AGzYZdwSmCYt3PRBJ6KmggFAcjHS8rTR83YmHvzULdJUQWUk1s4",
  "key32": "47d6zxjjLUtSArBkT1dquWkM1EYE1WBwwP7FcV6D5zv7odACdNohqo4tZF2YotMFkzLP46uJLNFFYbsFoLo9E2EA",
  "key33": "2DtjTPDDdVr6wyYHHkCzcNovbPAFGJvrUEZFEivZmRAkrdsvJyo4Q7aod1ApdyDCKmxMkZ6J2HARg3YNz3MX8Xnf"
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
