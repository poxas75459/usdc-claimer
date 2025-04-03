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
    "QJcGAztjwqnE58MShLqB6B2JuMzBr8uowUzCuaD4uh276sXkLpaVdg9jqJhsFYrvWptWwZCDDYtJkFYK4zAWx2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4thcJV7nKcBishPPNjxSSZLZYB2pGqYaQiMPEE7ZeRiUSVMd22MrBQsvDcwjHcFgWPqMtvM8rg9ssa9N23tMCs8r",
  "key1": "5ApTr8Knc97DjCCGiUDKim5MwFSuTRqeLS2qeqVGSsCcgsEDcqFCsPevkZCHZnCd3jUahfBQ9jMo42gs8HALwT9n",
  "key2": "53VYrcv7MgPZdUPr2WEh596jxhsFf6fkwgLgGW4o1EhApci1hduoDayYv8bLSd4rq1RHxhwUu5dE8DEcy8fEmVyh",
  "key3": "4WJDhS4zVzhrBzLspg1KYGKt4sLd9JoJHdKPyFzwR8shdXaDuDwV1yJezUKCRBqEamLMbUFh8RwCFiruU9S2Txw9",
  "key4": "2DjGVXFsn5MrHQWQpoveyGt2ejZmRes6ig7SyMfyMUG6BnvDYzyV5VWn7zNmfYnDdt2qu7CgzZaUXuXkM5C2G7R4",
  "key5": "5onsqWGTX5m2Ao6cy3jUob4yHTrdvgtQRSeCn5dFt1NKSat9TJy2QvKhUZivRWKaB5gimR2YC4R3cqi8FKWH7Juy",
  "key6": "HVJhUo5fNixsMZbvSF7vkVPNNxgCo6reCo3VqRWi1Hr5v9c3qyoTQEX74LdM1BxSiRkABu5bbnhSgEag72G34FT",
  "key7": "4woqnowBExFh64MxwzyohYi91ZQQPU1MWXSiud4s2UDsKz8v4mqhgv3n5Q4Bor4cmMZ7VKTnwen6yy1DZr8W7fLN",
  "key8": "4Xxg4LvaNb1ETEqxq5dhxX5eJnQw993UszrHjYTRiFTxhzfpziCCPCgvw1VZupCZrd2PEXg1by9XkzCuGZTUXTFd",
  "key9": "wprkjZpJeX7PsSLAjcVhpLVrphaXDM3DGgjqL9M8UUJ1vWDHRzpSq1DUQN8U8qNc49bDLHfuuzVcLjgrFGxsbq9",
  "key10": "4ga3Zi76vUGTg8Yo5nsTTCGK8GX1S3phpWrQtWdjVGd8NLBivk1vgxjcd4uwSQJqFrwXdRBjveBw8BWjfpArKC8a",
  "key11": "5miJNEePN7yKEnecbqEHvSdTWFEgm3ri1GWW2zNHrGucrtKNmqUFxuHS7qYGdSFQNFhL5x42FXgHprxydTWWAbrQ",
  "key12": "258zsjMUQixDyPvTNneqfXGmacaj42sUAvhxtV8xHQ9q4BQ53dvpB2TJNF5KfhLV5Mmuivzy2SNt92bub6WRR86b",
  "key13": "3bbjJGEwhHQxaj6Rg9JQQgsz3cBSYPZb7cjj7nummDdVD1WcqNiDWqAkX1Y1edgJgDdcHaLKQiTBFK9n2n1wV9MA",
  "key14": "3wxZu5fdMQB892pjq9chsjXPCi4bLwAFYsnUhtXQx15cjvFkAEa9QSqvgkXMJDWt3kYLvbZkJE8wmKHcrNDNxVUQ",
  "key15": "23J12k342WYqit59Zfd88nzBSkZA88XCouh1MLsrMuAZ7pqhtoQLYroNXwphzpurBy85obdzykGsAjdx27MDJbE9",
  "key16": "2S1zcdXGLK96R444nEJgtQm2oDeiucUDuPjN4rhMHLSVvh9acMkwiePLmkxpSSHupPEtCuk1XXRywF2P3cb9U8da",
  "key17": "61hbhHmQ6mUXNQtvhPynciyptHCwrQcbMSRVjMLSNbuRitohyLP2X6ULbvgCnz7gRfrwGqLfNaoKrXCFbfvM4PoL",
  "key18": "59zkUWD7HD3TGggheL1VNMSxsQKU6Gf6HGupWtEfKuD8SESdcGqvuHm5w3YUursW34wxfg4BEzAp5RHNznjsvLLR",
  "key19": "4XNh25gdhfWYRMseMUSYdWMcMDkYuUbiv5NQPgytUH2bobEiB1omLbT5kDqj4rskmycFnopihdiCGdUKBkTNejYY",
  "key20": "cgM1a5nMWBkuX9xaSu55E9rPt2yQX3UW4DxXz9i27PzdUoWk5kq9gtjLCYRpdmj6U4xtgHA9v1XZ7C9E9LvduGT",
  "key21": "2N2EuYttrQhfhvxfUVSJRfut1NrKtyndBtzCya4vBhnLLWwFRD28rSFKL91QsXTnD6iwaW2tXGcMgVdd3zvYZhVj",
  "key22": "2eJvgEQHjDpGjcx1P6NntxVu9Dy5V2AKcYymZbTduomXLKe1jUGHbboZrr8yKg6NG5EqU3eB2p28yL3MdXSpuSJi",
  "key23": "5eyG6e3i1pCsLzXHrpcm96gkgZWJzkRaRdjWFZRwKeZQ1xvrniam5Eh3H1N6b1eUD85pFwrASo3mPCYwq3TfsYK",
  "key24": "5ChRV5c526FXnedSt35FueJtcVAZWAwKTegG2gq6Met2wJocpTsX9QMaSU3mzGb3xF5A4GTvD1atTBUmPgh9qMxW",
  "key25": "4q4HoxJW63DRVpRVkkpGJvfDonitUDvxGU5p6PqaHRvyZafbW3wPzCgi56VRUYfjcQ4jRxX2N8MUUAui1YrDm9Es"
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
