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
    "2rViNNrFHHELy3yDF2jUonhJ6FCBDRjKgUHBhZdyXSWiGs7Ci41YQk8MNNWg8GZz3J26xSQzGCrT4YCNzP842NSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ugb9r3Bv1U4mC1rYehtm41vLnLWYTgPVGCtgxV2jrgkaiJoVeDcm6QAVnJCUWDXnA8HTsiFurdY3MZZvXDtvNze",
  "key1": "4S9GSauuqE4X688SsT4uJFSsNZ8EBjFwpzvwFnReY6QwVp8JB2m32jP12tjnNkQpb695S1FSTSJZsFcAsFrGZy4q",
  "key2": "2zA1HoskpeEsfZWLTZHEgMT59rsUGMEJvrrqUcUGD6HDDHd2NdeHepuoZXfJR5FwWbxY6cAXrvkwneojh6rVyzVD",
  "key3": "C5LXEeXPXPGUoojsxUziJZ7sHrrCEDQuNagYWjmsFhETeLLJQxLEw8zfBvDrGD7S26zESeGzCSzf9sUCRkh5KW7",
  "key4": "59U8RJZTg7Xx7ZxGRZzF2aN9B1hwPNnTyamYLBXVtoGEYMf311TpVEBL8ZwDEPBRHNbPBgkTcAqCNc54KHkTjEKt",
  "key5": "4hLJgj6Cq7waUyYqNzJh2eWNxSsZd58W6GeCn9FYkV2mYPrMYfiwWJgdhsQdTwSstAc2aDQnEUc8ak3zhX29dxHL",
  "key6": "3Qh2rXccbcEkUom3W1SamYd8X2A4dJmTFRExwWor1LQ5j9KB2Cm15NrbzSkKj7xw8KawzAZsRkzw6MWzd5WhafpU",
  "key7": "3DN1XCCcy12yuXb4eVpZUo3HMcXHNKtoM3RzjP3759tPRtJpngdgeBKzQMmtiTjaFbU2Pj3nNrncBF8RmSx49q6U",
  "key8": "PyKeK6cssdauS1PXzPUHSM6ow3LArmRLQYpCvSb1uDNkePBonGmyTqzaXrq3tErK9NHnxKz5AnZYezRqH7oRx1a",
  "key9": "3XRsan6ftubBc7vo1YBmHDLYqhPAS9xVCr5xmvm8ofHbXUtemwBujKHM1VDiJ5qMjv54CTe4WQDZi8E99Bdt1V3z",
  "key10": "2T5U2zspJhqgamK5awKGdDigoinMD9jTeEEaxfuX3Zvp2ffJy7xZbw7PS67c7ndqGzSvNSMwccxw3B8e3eD7987q",
  "key11": "4CwfJWxiy74LMCYEptcb8EmsCtcLbWjsZEsxfoEg7MeFXCuKXs4jmEpg9KWzmmW9kcgVJzBbnnQTSfbf9CU4fwrc",
  "key12": "4pToLiT8UtCmEEvfUBZ8eSk9PaU4ppW5J2BfKdjpSwY1bdt6RDLeMjyNmP7EEhGw7JsZFR4SHCkzWxF4sUjYazPH",
  "key13": "31XLyYRYFEqCno9Z36xhXgqeMFoZji27Np9tDYasEwgdHqgXXLCY3RigHf68YT7Xp6ufzVJjmfHfT3ZAPuLUE1Wp",
  "key14": "SgK3fuzTR1ESEH3kfTjYXDSNiEGzTGgHzdbaao3gXAB4mdpWa7CyUhctRfx84YdQ2qg7V3dvNN6dm6wJhtnn7FL",
  "key15": "aQJLj9YxeTvnQUXbmVvD1XeuyyLQjw3WStcNTYoakbtdvH9x1BUnt8i9QRp25Ca57APSzE4MR8zQpriZQmbRxv4",
  "key16": "27Kdk6qk8SA7orVBDib6R7kMeTYtjLwCuDrugRMC9JGnLQ4Tf8xHuKe2QhhQSTqz7e7hLSM14K3khENbM5hRy1aJ",
  "key17": "4QyZLP53AMJVNtSwcuKxH9QyCerFDcQQfMUusrNR1R9CWSnbJVHQ2VRmN6NrYvQnwfvkV71GLr38csACMrGNbreH",
  "key18": "2gzLBomVT389wWW1GcyFNaRwBjF3hbNR8gzCJ4sCg7StFRYEuUaPtm77F3cRdVBVtA1fvR6kPZkAB8rMgU9daVC4",
  "key19": "SuyKgAqKBkwAkemVRZNBiP18MQ9z2o788ZHRiFN9wpjLtYk7QkSMw2zqsNCoyKmZ4GZdAh7eBXsVrUNYe9w2mZw",
  "key20": "2q3XFeYnCgAJCVuSSyYBuWy9ED85PCaTezw8K25AtjW47JH1UttC828XF1gdZJvF7L3rQ5Hmo3rQVH6gW1D5rzz3",
  "key21": "5uedaXcPHWoS2R8nnhgTP4WbbK6A75YdhqzxHKXyCmCJ136YPx4Mz5uNAgY3LxMkW6u7vnRprUatVng5q11SQ6Mi",
  "key22": "4y82zfAh7Zx1ncbAbmczDxPEuqnfX6VMi8bG1DGnwmWYVr6CQTKv6rVQy4jh5kwedeBMXWuMifZ5WomLduNJScsD",
  "key23": "5iHVbs6CEWor7m5hXgAYH7vMUFWdTpcW5x76TP1QCjY1iGLcGDbvig78ZoX6YseeSe7AoEQPekP7wJecy2pSkPm",
  "key24": "BYJd2EWXLdwnkxLEW5jpbL1FR7YeDTD3csQENeWTAZ9p8jPYQuTJxpXgPjZ7zaH2eSD3JCzXEwGhh89KCwqfCN9",
  "key25": "3ncGzFsM35Fqge8R6wnMDFB1oWnA6hyP8XSpiKpaDC6g6Zro2VuZi8LR7hCCdHoGPZegcu8c4Z8EUFTqPceKDmUi",
  "key26": "3HgB1ETMff53rvmngFysxuGyUCnweZLM4GYGNCGQAbLYtUCqCkHsJ5EuVTsZeRywU42FYW7gVgrywAUoVPYefWTf",
  "key27": "5DQdZpaUbWNHesdUhRwEsJ2aBWMMjgeCC2nZsHoqxiYrNq5ssZ5tkYgjVAvnpdvv2yGoi5cQ5xsLjxbM5N8pqRKU"
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
