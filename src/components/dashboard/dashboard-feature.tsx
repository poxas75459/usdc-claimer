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
    "4oLBpy7KzNPMJogXGNmDRVPFc6tHerBPLbHZTy8agPXxxEpSkFV8nkmJxgqnZXQNF6QoKqfeR2HPwH7HPDE8udHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHUA9QiKjaffvXzgbEzZaVkpbgD3CTDwywiJY6qbAzZutscnry7AoUDD6B829FVcS7SvwrbUNFtpZ753QorKT5o",
  "key1": "36uoBxZXQKMZQ4D5wr689WG3cmAMgzcHHeETXcafh4UWVikCkFJK1ihTbvyZbXx6fcj3icuMARr8vrLMcLFgcmhN",
  "key2": "4gQvRZZrgVj69KW7iGbxMwCp6u1WLxdnSgLQzz2DDadeBsHDCnLcwytDnV4DP7bTEDyoZmf6BMLb29zQrYZRhqiC",
  "key3": "5mQ6T7hCrUPv5Sm29xc32p6JdpzuDvziFqcpDQzDzzozsF46yUCkK2pUWYrqsYRQ4ZtZZierZguTMkf4DGL6LQuy",
  "key4": "5R2iv7WL4JCRYu8wCHNiSb62gh2kjSpKq5Wwu4qi6eib2CWXcyQDMMG6neqbHiBfSCR2ScoE8G36UhqPQhkRqNeB",
  "key5": "3MnRKDF45v723n2oWtpNEFFKKfSSJtivV7cggYbG1ny7hNF6RpFeuUqyhvgmvi9feDoF5wPGt3rBNUE95siuSVGt",
  "key6": "4aXE4JRpDLiTCFW2LDDQYCLa7RkDVyWeehL9QJgqGvSezap8zyovH952cKghiNMGdAunMuJioWCo4x35biF3gm5D",
  "key7": "3RV26HxDasauN9Z1ExoUZsmvvice5q5W1ARBJzCkqooXtdZiKPxzxeRPXpj4AbyDSBQMtzCff2LB4oaW5gWw1gsc",
  "key8": "5UzZivbyrCvR6wYzQTrS6m54XUsmc4GiyX5481rEoVM5NGr7eFFCQ3fKL98KDyxunLg1aEc3EcuqVooqYSXCbxHu",
  "key9": "1xwxGaTm4rFrTe3TY7iULZ2bqCAk67R7AU2jB7R51D71sSRXJJUy7uSoYrs1fZkg17Hk1wGAc1J6xpL5Be2kAwm",
  "key10": "5srP13Uq6QuU6JVEzij1yNHZj3aazADEb74M5311n8Gyxm5gn79tghm5zXGdgjLkFrBUHSdnMVNu2Zj3D7gw4RFo",
  "key11": "4HqtD7rdUon3fUXuVNuYJ5xov5GdgxKvYKMD45QwBrHjf7dagzFH18HTjP44gXUt3gGRQ4HbVKQgG8jUPMaJeqQR",
  "key12": "4fjw8tkaGv2BJvqEeSYWSfVfNpW2BE3snhhU6tsnwdiB8DUmxxLFSnZBoe7vVr3W6aVij9H9AeFMakaBu1EbtqV6",
  "key13": "PR8wMQpaUnmMz77RxGQVgfKJPAywRQnL7CSvBZcREZZyBS1HYZAP9ZTMe5Dn597kaYkA9TiPm8bcck95mQzXd8Z",
  "key14": "C6d6L4EPLHnWCT5r11vF4qPVsEGnrbJtUjgVYe4o9RDVf7LMDhW6VUULep6ZgwRPgb84s4tApKci7gYsB9VYove",
  "key15": "5qfmq8ZHC47Kkzd97gZWUBXBiMpE76af3GvcbjLfo3GLYXQjqZRU9XqL8aTiv26Rkxa3mGtQggqqrW6182C8FTn6",
  "key16": "2eEZDWrKuiv2H5gGfP9hgPY72yHs7Dam2TFmPPSCHDTNvcZ4ugDC5AwWR8sDuLfMJ94kMivo6QkgreCC9hfE6ig9",
  "key17": "2CywqV1AQsJxTsh2XvCDwfk8Usx6FVLdEmhPhUs25bqQebWeZfqZk23woNgLM7EqKDdk4wJ7oiffiTooqaVeHMEZ",
  "key18": "5UYYQTewxq5fPi77Uruo4EH6sfNkeRPenfHQMYAiqUbjaCDwVnbfkeEVLfz7mX8arVJyKCN5UFV7TdnfhYTQ1kuM",
  "key19": "3jkx6U2DSpAmaNdQKH64jzCQiSXu3fWWpMmZ311q3es4UbEHLnu41t5NgzhEBstYXysxRQFVXpG22BB22yFdUYBT",
  "key20": "4BDKDi6WVWKwbBKna4HrVMZhaauGsRdsVJnXHX8NLCPQetr26uhaMNYtrEbKfrfNQZ3SiMZYEZ94vM42XVAGKrve",
  "key21": "373Q58zfHouW61a7Ne9Bwr15uWEMrvVCszWAY4bXCAphYkXgGuHmy7Tnh9WTLi1F3dvAbnVqBQG83p1VMLsnUZiV",
  "key22": "2B85tMg6ximXXaJJfb2f5SFyxJji16KzCc6kciBHoPq9SRzPtQZpuCzracj8TfYd9LFoYXUawfbZu7T4aEcczcrE",
  "key23": "Z5iY9eYyj3RuwRbGQiza6dFY9jXUfJHkat5z4uXjSx2xF5yV1W3XUUpYzhZcQKZJ2APpt8Thc3c4tBic4igKUZr",
  "key24": "38chrgJk9cPjwtTTdkcCK7Qp5YjMNHgELKmoaTjUeDRJQpP3Xto96HkaiBCm4gbMCNhHCMNMkUtW5LT7oseL4UD2",
  "key25": "5UQaxVT7ejh3sBm98txq7u3FvtVCRYR86qVMUngxycr2MMFmfEtmEmVKxKzHz6HPkb6c2j48RLPdiaNYgrQwtgGM",
  "key26": "2tPzHCyadJ3yUuiGTzB1sJiNE1buugXftU7TpVdekqgmrvSnszJfyLDyGA9uCRbX7C7UoopSYmFSkZeHD4FjtZ4p"
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
