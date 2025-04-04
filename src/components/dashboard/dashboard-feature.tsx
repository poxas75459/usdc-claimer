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
    "3YzvgWae1s85uyWmXa3ZrvgBZ4hVAeJWegedcYiswkcQoUZsZX4A18diEeTFoLf2d5uJxmAs9nryrnDfDy8Mp2mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGftNdUQ91hQk2yzSQihECVQ77Xx6BTS5G8gVUoZfcEfmTNB4QBBmGZmLkG55TAkCiyTPUmwCv77ve2a6G9EnM9",
  "key1": "3ZwYyZYrvo8VZynPwK8ScbCmcHEVUHs7LMUgodedgcwtffCx9Xrhhtq7eRoR7R5yZMD8FVo4mir2LREWLBL7DdhV",
  "key2": "4w2kh5Rm9a3ji8hUoe9BEQzepK3zYsm9SLMUEkxpYTMVcPSu7gEx3HLFeXF9U3x7z6xtCbg9wiCrXDA6yxv5q26n",
  "key3": "5jnPZbHBJ1tFm6qPZTrG3QsnCV886PucS2zZccXBHSi9bQuoGhFH9quoxhWGsZEU1ZFqFGfudohGNWASrXV8Ghsu",
  "key4": "4GqN81sV5JPGqvu3jU5SwweP3ynzdzDMQ2S5vXHzec2MVAgNv8B76yzsvQ6hejYpcCZcbzHrJM57mygV9cqvZ7Ej",
  "key5": "4bJFypXwY1okP8ZTJR5AMnQ5porWhb234Fbn4QFoMAYxbPBEtrQdmXn4GssStYX9eEicnENxHEkbHtZMAf9J69vF",
  "key6": "579BCAErFkqgATEEQxQwiGcdepcJ4YMLJCVqWi7ii3UchH2GsgSmFvfz13AqMsAGfmSjvnCyKVS2AGcUHhTYHPdK",
  "key7": "4Rpk3s5kxD2V5ggWbHWJAV5mHMoZ4YkR9yjL4Zqrmn9NXrjnzByqtRoesiaq7CZ8okAH62pA5BHnTAhmQBg2nS8x",
  "key8": "4RiyD9ps5bMhVRjEByJXQRo1BqBZLaR2r4s2ZeATKd56emYrp4eankwyVTZKREprCqRUNu5YxaEMvyGqZibZB52F",
  "key9": "2KYrTfnSdXNPokyHBBCJeoxK5LpLbLuU4LE3WDZnGRKqkyQ5cMbWEKRXPNNMziwHpjXccLRePYhTXjAyYGf4AQMZ",
  "key10": "3CJBHQ9mrKyNVPWr4FutgHaG6Y1FVkxXVYRQLzFz6atkXGdMYWteiWyxfx7zQPjJStsBmWqGczcNS7R3i4LMUNLn",
  "key11": "2ty9tYGCGU4KV13KqndfVzAmfKheqcmLpwq8ixPHm34SsfzmW3jXPmYhJ91ci3yAXjvSanH7e1gMnghRLCigiM5V",
  "key12": "2BX48e4fdU5e78YyXpnsDHRTncYpLy7WAT4M65ypkm3sjHgZXHMRfdA7Wp1kdFTW8zMwFHjFSdDMDMuCDvKSkqmP",
  "key13": "3A7J83avucex8tWH3KVHyhxkBPt1r8wViGD62bjfVEh8dDpL7PdSm3NRZHQnS2YdeoYAtSMUnykA7PUQ79hEzZYp",
  "key14": "3igKBZWNhiDg6qgJVQHgf2jJ77T1NX8DgyJ7XWXd8rZjAAZ5wdiu6ri25XCuquZ3S6dKCKC9XvWkJ2JXUWYyhVPL",
  "key15": "3vuAPL3azBWNVigNMekZZJck4qHTNrTSu1jWr1Su4eZX8NAwGUHrtZaUd2UB1kD9uBtwd5X7hJ7LDCA8Bip1914o",
  "key16": "PvRkmKrgVjShBkDwGm5RooU4SVcXjKsLjLcXfyG9ifGA4qcuzYHb9f6i415FX9MWdambRzdjJjaWifFwSUxZMYd",
  "key17": "3RRPyj22CKJpmdW3XnBfMfsYZoDJBtNqxrTXTykvV6E6LYBGkCEvwGTC94JQYRuG4jmfgYU48kgE28oy7x8HExYo",
  "key18": "3fHukCWP6XG6cU6i8o2CbddM56H9Wdk3XYJKAWKcaMWnjtgBnuYY5y32MfpbxvJv4gtY6Kc5qwzFzjUg5T5heXpU",
  "key19": "aV7JQusTGQbCqgA5LYBGZhxLStEX62UFrWmBK4NP7x2FbPuC4CpKfxaerDvURLAnfmRJNGSxEMn3Hd55EcCsKNz",
  "key20": "4sE2EknyLh8Qet5RKAvn9TGBKjUrD4wMvp6UjUUCP2aUmNm9c5pTiNoucR9zHMvLwxcgtJrN8TVCkWXDUobTmDtw",
  "key21": "s6g9ZKt9G7tCmZp29uLHdrwYmDuPJp1KD8DyZ82D2E5jNAde7WxqYL4Vd5Be2yfz7aBD2gPNBv6Na3WAdWWE9tm",
  "key22": "5wyD7bS3GXUZUVYrWowq5ZpY44H8qGmpk9PbhdnrPvGg6RJG9UC2Mf3VDYL9N8WsRyCbavsZjMCz4RAgU1X3fVst",
  "key23": "5uMqUY4ybrpiesWV2MvQmuvYaPp67YpodztHyqB9tJXrK5BUrgoLZdViGVUYDXCSVZd8WbcPbqVGghG84hgRd53i",
  "key24": "4Cuj9AXCcLZiiV52Q6UxS1SNuZAv255BKRmLz3B2S9phDd8GSiscLRFZHT5vk2xrpqJ1UPnQum6SCRFRY5msthZA",
  "key25": "2e5RGMsfMZtX8iRaPJ3FkDF18ybp7nHNFxTKrueLHiyKuGfwJenVLi1TgPB998jUD9JgxmnWSXahSv6mkM9uryrY",
  "key26": "2EBQs28F4tbJCziDwsJNs3VgX68T1EGYjg9BsDngzDySu44k3eYwEfTFUJtt8kjiofjZsAveMoEa7kWh6uZnqAPu",
  "key27": "2WYKKzPQpvJoMTPiJCMoUUH213gkNccwm656H6b4Z1NZ2oyKiLaLwkmNG2BmdyarCLfMtvCe2FU1BaFWSAbxVdvM",
  "key28": "3axG7FEvrxw94i9nGQDmwi7MKL8JPK69DeLffp2aB8TgTejFsJGmMpguRtuuPT5zwjHgsxusz2pHWUC8N1MU9hAF",
  "key29": "giiibvwkd24CnfJwEGDqPcWwqcdeZn2HNPatWq9weR5YdoDTyEiryMF8UF8NmUrXQNnNu7WFvNHTVTNu3QZCMgA",
  "key30": "5opUEHRvpyokT3GFZVk11FAhTARrgfqZQDbUYgNFXzR8yVjuMsxDMDDU6nDjpvuMPuYtqM2TrYcho6uNMFwuVafV",
  "key31": "4wywxrdbWscF85uJyNDtBvCtNQDdAByD6iDSPxgBY4TZkgBFhnTcnd38uUVdwqrBxbUyAvou5bReZyBsoqxQ4SfC",
  "key32": "5uGjibkvLmQq2CidEQC9jGtUzL2FeYTb2jSPpBYJusgqWLvXXt7AiZktc1EDvXbjjuJ2gJH93wD1cxVrjpuHW2HV",
  "key33": "3BjiJ7YRf7NxLPxL7S6KhKY5p4pwDa8mEwxrefqzvCKKcsPuGvrr6pVi2d9sGmgnCS9M7R645hFtwitw9U4FNycb",
  "key34": "5FBBC8qQvcsTztHyKXJSj4j3wqtB3ayfbYibuMhWjNRmDUWfzvMXXRjvqbd7nAa6MDbWyazVFsCGpkaMniyo8PPY",
  "key35": "2msZXsVVBkMVPXDvSvNymtcyLW7NNwQt1Hkz5kErtxY3XdQLkof4cuRphnQvxzZ4yctmWjvDVzD5kKQkqVRA5oKK",
  "key36": "1dHmbydSH8HH3B3ZhQWAmyLoQkxBCJp2njptMuFnxbXgdFEDqiXiiKvSXvWnJh2sX29hJ4coRx9j2E2bCUHhcf1",
  "key37": "2M878zrmUUnonpZrf7AU3fdfVYBRVzozU5hbeMKUnANH4fErCxkrbtR79kxQXL8jStWV74qgjV35WaZymRXzz7Ec",
  "key38": "3Ktsuu6faJLSTGkeYkDvZpcNikaxizpnzDtNJRdL4An15deb45KFEJuSySHNyqYmRtzV9A7H8PZrpPxMmbEF7w7w",
  "key39": "Cgswi79Ca8NigMsz4GgQWYwXztz3TTKW91Jq2WEh7oT8sZdYqyV5FbWPkp61T4K8f1Q5jHx6Ytp5M34aa965wWq"
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
