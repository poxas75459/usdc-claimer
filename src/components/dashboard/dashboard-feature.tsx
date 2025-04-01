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
    "2JxVEnBhJyfiptQwrX8xXLtzGAcL9LeYGUf9t9zd8HcCHfk28Lm2QpyKzpmJ9ziL9i4hNxJDRdnZeMEwESSGsTgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A1s7rHdSZRrDPZN28ewqk2x2iSwYXeh8s6AZV3szZx8N6EBs3UcnsCxjGH5sbMgqyA2AKTUKL15fEBeSTzMxWwK",
  "key1": "vqjRcQZ39eenVmWkUecBTWqGFHdHe1nRRixfBcZCBZveTHBdSaCXLxopZXSUdkZTeE1ouMxpyqJzz8UAMZvJXCd",
  "key2": "2qTYan99RFggxhygjncCJixzRo5LYMc7Q1fZn98nzTrL4mWtymZhQpnha8WZP8YP9HE5HvMubakFCKpnwgBRJveP",
  "key3": "57DcKhwp5dG6Z9zSUdyvFZn2HNbDRkchfKkYVEzQxaBrAyt8p8oWVqBKbP4TGT3StUxRZqa2Jj9qeMqr4ta3HaAi",
  "key4": "apE2B5vpJVmd9L1cxwNy9Byo12pBYBY1MQxTgmuHdWWzR6ZWaRn8FiRQUsr5LaX68o1o9XFioXmLjraQNArcZMd",
  "key5": "4hzK4iek3mhSPVKU5UEYgsuwgkroA5LbiVNdVqjaF6F6tKVjMnKCVFHbUkKHXTtGSFPtP2u8buTPaQK6mvWpXegQ",
  "key6": "2NZFQonFDe7kxd12reC1xy3gWEnrZosC1Bq2PSBtNQFrXoyPxNZj1TDmEQkB97E2bQjRUsRL2BrxHdASVwq7Jo9d",
  "key7": "2EMzTZuHND8159Ey4yiGPFudxXyRZCLbZMckGVj1sZQZFYfida4w1qrap8mcarJNvqxPijfuncCsay3Q1v3WjK5m",
  "key8": "5wUzFQsAk1dT3AZYe4yTAgLD1fdwoddEqnSFr3PSjQqqhKobqBBM2Sd2SaX7adSrhuLcWN38SQNJ4n2ixx4wNP4s",
  "key9": "4bujf6SAPR4mFdoPsHQBQz1hBriNvtTpLDBvrfsKRV232L5Ax9FAbfvzuqYby46xy6mXeZgmNDEFro11B9TFk1tq",
  "key10": "ukNJkZBXmXc5FoBDU2RvXCjmycPv3YLo8HLCxVQPjnbcUztxFrxZdaJtg6EUEmLAM93K9rgo5sQQ7szVPK3WAdE",
  "key11": "3LKkYkhQ545vFtzboQpucBUFheRHPSWdxWRd8aKQxz42767oBUBWfeKd7DkUPCM64KiPwq39dCAyaoJDE6WCtVp6",
  "key12": "49c2v1tRDMfgQPDnpqiCLzJiNdTatem8bC5eejj7kq9Dba8HFE1eNroMAq6B41A9QK5uxyzgXvV9hGSnmBU4wnJz",
  "key13": "4AfUnLvypKvbRvTxjJgTmk4MkTbyvxJD9cZLSaj1nu63rwYktzotYsjMSx2e1rkPjzyfoD8XfatUzTnmKpewgMNp",
  "key14": "2fUkDiWneshsotnfcU1X8E5dnbeWCHDdUoivFZqCQZ7Z9hyRgf2EfDCsfNhizJQfPPy5ef4aUKcALHPoC83rHess",
  "key15": "555hnc7YQjZ7hA6453UFLf1mgTbetckzkX5JH9TuiBvZ2vDYzStTLuRBjrFYnobz3vqjfXiYLGx41nifRGRVL5QU",
  "key16": "29KXF5h6p4B6sbyMr1t7GB5a4LG96yGVanE8Lfnn1xtt3PfUimk3jCv8YF9d2uwozFLzQfP58Vf6WH5hSwB3Gr8b",
  "key17": "5fQSYANvp76tPyUSfNeBYwLMRu6G8KCVa8tgYsEDXK7E2MkuJjPxCcFNZiA3bjinPcgw4nrf6PJ5PYpisah5DFhF",
  "key18": "a6Gm51PeutCo8BhZ3Q3W28GJP4hhFVi49ZaEgkhLGu9TsBSTJtJuCnpFJ1ibSQ6PwA19bpGkrXRNLndJCF4kD3E",
  "key19": "5aTAgJvx7DCezw3DLYXy7ZFCy1d2GQtnsqtracPYK5udS8RqbmmYzukvEaPbumRUsaHYZgrcT3YHUXwo9R2KS7jv",
  "key20": "51U9Qw7fJLXHAVJyMU1o2e7Lgyb7LBiPp7Cw3pmRBDgTYrS3EsB3KKg8tWdvjip7KbNr8vsHfg8hY3xB6pyubcwZ",
  "key21": "4kz7nC7VhEBSJHjNpRabFfq6rvLUos28zLJyMDMNZ3TQRc5TTmnYDPa7em2u9h8SrteCSXoDuwNChoUkiLkRbP3X",
  "key22": "5TQUpPR1hozDaHyvbBtjFpcPs7QF4xAbiJqW5uupfsid6NxDdnHSbDe7NrrpoyF3QYfz8RUx9dv4h8MMmcNBsE6L",
  "key23": "FbeWnj5majxjvYtsGKMC2d5Tu1ycF1WqHvxFkpCqRKcF9ebbw6QKvFM5CncgFNgSwPu11cS6R8S358ekQ94DM1P",
  "key24": "4wgeJJzDna2FB2RW96jbmSqdmVCYQSetg3vSG9z7mT1Gc8YRuKNuFntpo4vQzkzK2VQ5F7Vv2uaVb2Qiv1LqAvLc",
  "key25": "2Tx4nKPaUzZb7GeBLeAVACjRvLUzVHNShV6w2vFu55XaYPNuFZuN1PJYbuZKxhD9ygCpioqry4JKb5nNKjmF4QqT",
  "key26": "3j7cV5XUpdq3B7vCqj19uq9BfjDeBgNB1UBiMYZDmNQMoew7EeJczgptzkyFGoaxFyz2NUfCjDg6ESZeZrQjUoYh",
  "key27": "RVPPFJxgLzdxKQB4E7wvvcRXLNHHzs4wAfWVLE6Q3FXPJiZYDUFHPzTxLW11Q5d2ydf2H1DmtHKoocC4Ftkf3db",
  "key28": "3DCJ55Bw4gZ4hpmZ5JTA8A8mwai4qZhnn5Sya5V3WQww1G5G8B3eEosJcawH8Cmx9hrf81j33AJ5rEaLW6fyNFAQ",
  "key29": "4qHaEACroVb9zGG5pc97c7shwiPf3TTmyi2KEAfJuxFfAkV2Vd9iueVvFAgktypweTYVoRPJ3T6TbF3qj9Xyuct6",
  "key30": "3qjcn5k1JjJQFpzAPcK9rMTXbkSpVfxRoceTLYDr4cmMbFAyHJcPmB3XA4UHdgx1n9tPHw7qC2ML6XVwPEH7ZRnv",
  "key31": "5odDovqLgUWK8vQKLtxy1d2PrThMJxUUMNzhuu8LqtPfA2zAqB3ThsZtb7ePkk7XGTQN6vKzAxqVumE26dMY9FZf",
  "key32": "4pCPjrFcUFoZ8eKYqdYdSsuTRWrx9L5NrwL3tMVNtgRLP6fz93oggwUfR9KEmx6PagLvfTPdgrJhKCW6WdrAKueU",
  "key33": "6seKSEdLPkaXd8iFKdvqzij6AKKmWfkQ5tw7CQdfUgkGi2ksH2X4FCeuyjNCwpLn6CWQNERbcKLJqH4Ah5BTxWH",
  "key34": "2aE5pEUGvEFYxQC1Hzz3wmywEZEzERuFB65j5b7Vf61A9PQfV3UxJYeYGHTg3yMm37wZSwyQCj8CbwziRK4YAEm3",
  "key35": "22na79sF6fr394iShtgedXgFhZXsrTfnR1LW1KvTxHaNKhRWm2hs3NbHfyX98KoAuC5n3rXwq3RfBGqjQi1J7y9S",
  "key36": "245AmodGYhZMEPAMkuw7793ghKJFm6LwL4gGamcZsAivCTnAeUZPYLwGupNSZGF2R6HMFnH8fgiajnaomW8K313N",
  "key37": "5jMGP6fu9KncQqkDH46QTxpw9KsHsMVYDVg7DZ3bQVEQt7gKdCoAsSMESm2Kt8gqbdjjZJvSdwpfSjWL4j3nqC2h",
  "key38": "588gYRCwgPxogGVGoPWjf6uhzwGwcS3p2W7nViTyAawTTjz1nUFr5trx4Z1eQHMf5qArZq9kApPz6rZmCB18JYGb",
  "key39": "2cmibDL1ZjG9Kzd7phctHZCZLMHiZDp44JRippTpkR87MHNEghbnixBD3VjuSjdJ4xBUUzQ7kxxSDWgTPufYgEti",
  "key40": "MFiv2h4tmNpMuqHDZWT26LsSc7grgHpuAA4YxN6swiqk2zbNbZpQo5fWnpC5CUKWEgFA9NvRsdEppSh667QeXqL",
  "key41": "4Yu5toBZCL7e44XaeuGjMBqeuPLPTWbR2YP4WbmTSc7i8k4Cw8u2c3bFHNoAFugyKc2XKJiNBgSsG6sRvz3erxmV",
  "key42": "4qDyEQwpjj8xTU7uQtGcsKvfaVsfdGe7EaFf8e3DCJfySz8fWtBUHY8XkUPF1TXS5RDuZRn7dZpQbpgQcf8YaHtz",
  "key43": "4m1nqBrLJwCA8wsj8pyk1Kdvs6dAiKtzCRYAQccsHsiCQ5NrfnQAjbDg7jZEWCq9ZKCUQierSVFnDsfseAtja3y9",
  "key44": "3uYKnV152Grj16jsKTi37B4QPKy1eiLXx7Bnxnx9o6ovCtjZwaDrk2Ru9VxmrKkMCVmv7C9rvqnsLFSeGWhT27zJ",
  "key45": "4Y7PFcKcSunM8quKu9e7CkthkXeEn7qT6UC5C9BREGUua4KmT4kZpoSr8b2UoWTbA9bfFbQYNgsZp1PKwmt1qEKA",
  "key46": "3AeShMiTiUCf4QHUNurSAkmj2KyG2SrCB4XtFM8Y47sKUREgfvvUxyVocTk8nQTNuDV7aWcT56rzRkf8ugUqsJMD",
  "key47": "hBAxT5StmcpX1BMNRe53fc4ZRPnoC9ZxWvQHxo47VLgpvEhBqBND4XSYTBXDWmhwgaQoADGXenMJQ44PnUM2tTu",
  "key48": "43BZNUYi5U2FATQprnKKyDSJ1myXHaqdsswK1SC76qnBpQ4hbzkjeEadVY61V5NCBq8USawGWyMyrX21z7XokN29",
  "key49": "3eMYkPHa6LwUtywHdaSyRABnngnBBcYtFM26HFaPk1SL1bVhFP58A7VwjQSzJnRq39mMdBkNowRZ9VorM3QAgyZG"
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
