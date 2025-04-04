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
    "55Kp9SLAmDNPJryA2uP64ueCvYFKtDGMDAuctYxuC5iM4Ae1cyGr2J9FiNNpD52tgfeQnxPhdigLUmF4HBLykrmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUaePrt5RHZdhpkXjXkFUdChHpX4wExFqafxo1x6WyLLGQvcpaU6cEBwHzD2LJx8QDetEeJKG3Nz5YFFnaRfPqR",
  "key1": "5iNrwhJhNzHFN2g87rxtUGtPQFEMZHqQXxRg1Wsft8j2ZypU8YY4rETX6weoefpe1TTZwvr8y45QvYEhYV2EwjpW",
  "key2": "2676n1Soa3vKUmcZFUzspbZXs94pEd7YmMhwbJcHVcQmLR1bWNoUQw5SFygcvxJYLjyVCaCSt8zEGoNHYUcZHMXw",
  "key3": "4Y4jcY57JStVaVpeqngtqTZNY2rxmL75NWsqKToMPYxZd25WUhmVWhGaWj76yjPQZFxUQEUZod6p2eTqTBRk6ze9",
  "key4": "5nVz82srJLYRQfHc884CW8sgWZL1PeYM9QKuNCjz6vsMBSxSyeSjwurKMKkGPvcTHG8rrecJ3knrjMzG7PZGUvZr",
  "key5": "2MHXS3CMXPz8HqbxdWK7Cv35crzoy1dYgkBKCsWEUwXsddf7jBc5C3k157LmtUbgq42b3vohei6qdDDuM4cDTq8f",
  "key6": "ovKaRM2hqqL3UPsmzk5SZq3LpiJzrVe8KcWQzVNn52hRQrYL7RAmbLitrFR839BD6TdPUr3nhTDf7Q8rwEAKSfQ",
  "key7": "4ms2owUMuMuTFusSHJ4ooXETr4px7KBaL2ov9m1mbVcP3gkuBahcsJzZ9gKSGbipymh4siFDjcPNY2EdQLWJcdAz",
  "key8": "245zbd4Hjeux7YnVDVqYuqjAGgEYsnGbRudZiB5gNDe7jV7cPmhM7CxbEDyjqst6MEvPvVV9RxZWjp311DwiCsCW",
  "key9": "3diE4d2NrhofALbyMV1kFtzzHfT3rWhTVmiWwHPGipbTs8MCVxSsSjBY4yJ927qPK8M29ztAFDmh7LBzh4jWTARD",
  "key10": "2KYddpWWmQmGC2BkfdnyRrm8LzNz32tvyYC2f5yc9NGHw3nRUDp1Xy1PzRyyBJnifubvNTAVss3Qa6WcMPE6QW4v",
  "key11": "3qTpxJ5TLd3sQzLU6pheF9yqkL57jipsVAZmDneSmFM8b5aCYJDydEsuxLGaQJXh2YEuqobiozKh3H5m1zqGyM3E",
  "key12": "4g6apm1BCZLGdHjwSpE6TGpdkSdX28J7o2mJ7SxGKDF9f73afSCqJ1Mphpr9pDtXLDAmcEzrM4H4e7UdYqhubSr9",
  "key13": "x7P6iG3VLhuaopu42V3juPh8thfcZBBkBnMgZgZGYKWcyj2iBdcjJw7JiSF7cDKTnuVCDeokGp1KubrnP6FgoUm",
  "key14": "61Y9ipYv7RdFfFDyzySCycHMCGcd5ztTFsDTSoEXNYbRoPEu7xNf6ndfpeKGUPJK348NjfnZTLhK9vsvVkhGxkGR",
  "key15": "oquwkQwsTiyaANJ8aTaxdwtYD69eggR4UZgCfkBdD2PJUQxtteTaZyCkLWrcHcMGy3Jge5bCPFJHyKRFbStHamk",
  "key16": "55HhcrhKx1QnYUPG5dESEgnbhs9FmS4jy9cP7PHFWBVQ27YbByJpGuUC1NBNqiuqB7AzhqzaiiHVmH3iu3viRpfH",
  "key17": "4BG7FPGiZ7A62ntCp7HNUyjcAwvGe2SZ686oTzmoFcDDr5ijbQJLjwgKuuBH7TaRfh7CBK2Qym42PQiBpNzw8DQb",
  "key18": "4g8oraxGMLREqwJKMPHSky6USMFc5njmr3LxWQbBvqz8Pp32GqPV2bJTsDFVwnkihFvUGNR8AjJ48ve6uv3y7NgE",
  "key19": "4F6adoNTfpfGPgNUbLdEkJnbFGMgB8M4trZRRh8VLvFyKkYdATie1UubHbbDQWdTZVt7DyRpxYYBYAQkt42oAGSz",
  "key20": "5rfHGdBrcRe2MDt1jjtJ2EzosmGiJaT9RLC7DDcwwMtSkQF73fwx7kkR387HKBwReY4G6Z1irNWUh17SCdqkpcwd",
  "key21": "2YVd9E1HgSRib5peZD1ExFwAzz7xkmYx5RDumf58rA3H4661JLNdvRu5aA8jgmJJ6Bky9HuazMZCFgYDXJaLW1aU",
  "key22": "29X4CCfDfqBGV7DFQpa5puKAJAtWsYrHdgvSkMcoga3JPSAPKZLMPdJQ4K8B9kUSorMCRnmxz8N2EtUz7bBa2F9v",
  "key23": "2pkeaNVjSCU1FSZZsdKHjGa9sVYQdkchD8jkM17Zjj38BxCAx62bUvZSMVxTLB2VawLuvxKd5k2H2hnbXD73wjqB",
  "key24": "5arcfAKXdvbpfMtA2wifU7ftk7LkHTmWBwRLtMDqfeg45X42CgdEUUA4DXAQQS8LdgiJiEc9nFSXvQ1nhPWp83VS",
  "key25": "hvowZE4jVBm3LoK3Vu8sZh9tVmju8M1vxtCMRFizZMb8BcbFUXwjM8BdNHVLiTMhhi1yLWxHqH8WevbFUymfn4Q",
  "key26": "2wdHkY2CWfh1mBEAG2trtDSCrkoHmZuKD179APWbpsDKCy7a6PrVyWChuv3u85sSUyFdkS8n1XQuap4RfvDTnpmV",
  "key27": "52bEVGmPeK9eiJaeum8q68JNFrTcNuz7af2HXFCuMTBZDHWWGZ4RUfLNZJKLg2Z7nTU81gGzbG3rL9KbNufaJtLD",
  "key28": "3mGzByxY3RFEw2DkTopj774vSFqxVoJdri8Nsn8XN63Gx3rzeoAd7VMJzMGJwZG3reSknCopjUqLQPKkUa12TgG8",
  "key29": "2RX2Q46GmSsZytU1oU11pTndc3xNzgaMhY65TsbLWxk4rWKGsNELgBfBGpDkBu3cTagHQztLXY6cicVMWL8JaVUt",
  "key30": "4fqe8PBnV7wwTCTNxxPW8JppUgkwXzB7JfJTUgnxhZ34mW96B1fCnkMEFQYQyPFrLFHs2DRkyTabsKWHUg4tbBJD",
  "key31": "RYvFDdBjH6ggyMdcW6qRegWGdN3PigjJw77LhCwsiN1haEoDfYUHHoQoMkHRsjVbwaCADQqVqw4CPHhsUig7brq",
  "key32": "347jY7RZGUKqrvfdrCsf5PNnnQpv9eXdWy8TMjWf2vBm58g5Wyf3iv5zypHwrENhkqhu1kUv3ijs8oWM4TRhQfF7",
  "key33": "Emh7opYdbVQZAeND3nTZYQv2hF7BmaLJWz55iTf5soHZEGUnDUh1fx1PEcLTz5tMaHqJABmQjLLRdCoGwhrxr8w"
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
