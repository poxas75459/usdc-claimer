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
    "4oSyP5dviybmU2HX3Z3sNDJYEN7fesw5ibfg7Sh86SbgmzAwnUea9XjNy9nYuMEFNmzYxgypEjPHtV1yyrAGWhPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAnmvf3CTZcxPnZxvrxFDMvguv9Pqquu5abpHYd6UhMEJCegKKau2L4qQ4TXvqjEpUUmjbjvFekDytmoQrxhmLs",
  "key1": "2jwmfsEVgorDNDwjwkMhJgcg9h19F5UtxGRmcwDYvGc6eUACzqNa785GUS9FDXgizvXE2ttMcAhn6PMsT6ZbYcMV",
  "key2": "5HorVip69y1EANqwJK55KHGfph56KnYNQfKW3W1W71PVJ9A5eryYtk7PPGUh7A7fn5a35YuFyuy7uLc9oocrNV1B",
  "key3": "h71iFtuECCTuhX4dh6yMeGFumsQCwi1Po5L8iMrNWCFQLQS9zk8DEF9ZrFSD12JZN2onwocP4dj4peNYzyZXdyV",
  "key4": "3oxvomYLWWw9AxHSYdnLk7WaoZ9niD35raz8xiATJ8HzKmsewVcZVXhNVAnJHbcJ1HptVtKnwxppvibt222F54y4",
  "key5": "659ScjfP3UhoYiBcksWvNc57iKVYyMPtkk224WqceWef6s9941R5h26hQjM4fBGUtnECSHL4kRBYXC28KdzMErq9",
  "key6": "3x8XRnmKqvXarhRJTetQrHyJFtdyR3NSEr6jR4DNrpd82BG2tYnkA96GJArQ9V9t1efXcv6Mv1zmPxaNYyu3xBcw",
  "key7": "2ePyaDfMeSkps7tdBaznSAmVhFfd8fzHkTKQQrgqKovvaox12hPBBCfgs6Qopf8snjUxdexK1H7rwq63wBr3oiMs",
  "key8": "58HHtrUMYhBpecSgWHF6T1aSYb6xeUCUFhdeLPKWWfCXNapGTFW3iNXHignfSzqYYVXPcyeDdhegf5EFadcpeLxb",
  "key9": "2a248TPongCfQpiEbfWNk26ZA7jarwfzq46dpgJDwwUkL1QLXC7Nh94rm6zArQKRaU24FcT78p9nJv6Ua23tb9Sv",
  "key10": "3DB2HYXQdKZdU2tEFAWnCZgwUpzzsvb8k8eiWGheQkgigjESBhTh1NXVbQHNZVUfW8wMvbva7b95844MvRA2qFr6",
  "key11": "4omiSf8RrqYdZY1AAXQYNDQc78Qg15TpmtV2ghQMk1xcs1ibFeTQqRb6DcYTeuuAkGVwPaCHd3wgSxNQmNVVXsK5",
  "key12": "U5RYQvRGEwBuAQ1PyMhmbMES6M1S4obwoER6rpjr6VTpms6wT9vNT1tBCS9yyvPjBdLJ1WaHy2tvJNe1ix3zptN",
  "key13": "5cCxASKk1het2BqkY9W6ki2X81b6nAPqAiSYDwU8Re34HWbTcc47d9kjy186EkYZjLsHcHqUw3AP2nVVb7cWT5Ak",
  "key14": "y2xPj9RGmhWF4VS6SXAkYptQf1FfrS61SxmQLJYPUAJ5fBHdHk1CmqQwbKB98gKhAD6uET71wu4LLGNrZKrmVPH",
  "key15": "29FCxGPamZf3nYikpGbE2oLjLHd6cUKLFQqxqQyULb2bnZKb7qQcoqaoHrxxuoN753iYeuXf7XjifYeX3VjAw7Lg",
  "key16": "34eNtdVZFACGE7KAxifaAhMVeVRxjQsG8mtFxGUm8WbcqDBxFsr5dSNMExXUrGQJ6vfA6tBhGVwA1CuEL1xDJi18",
  "key17": "62bREk6max388PrZEfuXfSnvKGUq3G3w6ZG4dmB6Sc27LDB61zrcbR3npC5fS9dUgPiLyyyDn8eJVjDWTp8KbFrB",
  "key18": "2UiCqkL2TDzGVY5A819U3BGTp3Kc3ruEjoTjqRVRJjUPr7xxHS3M2jn9V67pGG5AxRcgq7U6qF8szZbfR7PXYhMN",
  "key19": "4paPm3PqFm6dyek3c5vVBhfh4D6KUegXEQ1QoSkEKZW7RiVUTNro9T1xsoEQNEfEzJR9dHuYc1X7qh5oNWhh7T5n",
  "key20": "4wPsNAXZQuPVhp3LnARJXnD5HvenGHTfuqmi4uR7fnAKeew9qHmwVpb2wYhHYVHMupXx3HxnWuLL6kABjVvDEG74",
  "key21": "FS981nd59JGE2qNevMaEjSs5ZSeTmPgCeRwQ1ZgbBAssRYyrXpHkB9WuppGCthwp4gySCA4XwMSc362Pte43Npz",
  "key22": "VmemRvqBC2137kno6TFQbGQJrAr3A8onL6cWMcGqP7kGawQpThTSErUzrdKdo2zm9qenZHYR12xFEYxKgXnSPE3",
  "key23": "27KqUBVrNTAMR2TkWb4X3XHuFNV658q3BDP2oeCufTQh3ebRPKViEaTUYTKm4cq9oCUmnGrodheG67xdZBvExeh4",
  "key24": "5Guy416R9uFsySjMa5yWGa98juzo8nXh13aEY3HE1cZwmG99X7uo7Epur2rNeSkMZTj418Gr2kipCRBLj6ojngm6",
  "key25": "3cnGwx5fk3C4D8R12SgTXzrGkGCTe2YdsYMth1JuBbr6pLotwvDNS5hAeNgFHsC97sHFbduDB43Tf1stY9LuAfbz",
  "key26": "2DPnVJxeZqL5sdxtc1M7RfdyQKKYJuPiUQSEZMxizacyH3wZYnxoobVgsSsTzzpLwCSfr9y7srLo2A9groETbuKz",
  "key27": "5AfaN95eWW4NWowCY8Jk5pcZaKvRP1w1kVvkJF2KroLrYhvfvpPAxQxHYvy1yMC7Z2AHjbGtWu7wGNoLyLBKsJj",
  "key28": "3htE5rNVXrQ4UcaUjZJpPhWQDwLPncQv3Tta896E5g4vKiZtM5v1sgNVKBeWZiibNyyYsw2LEQNqmcK3UsvgAZwK",
  "key29": "46YNRAYoC9LVR6v9bgN9dTbZPMdporiZBUZwZQzLbFGfrJq9f16GYVvmhYmNjeM2BtdgM3rjHwUXrGZm9vRqcX8T",
  "key30": "4pGM52ei1WwMqdzYetLn1mzaY4CbvEEKFuEfVKxom8T29eJx3BBDjsdzV5kT1xPD7U2S16AoosrepXoYRpcJambY",
  "key31": "5m2sHe2JigVK1i9wAmNYWPAixfx43HPnH32Z4xJEuanrUgSMCgSeK9ty4gbwc7iXvpTt1ByaEchFjfrCymxVaXbS"
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
