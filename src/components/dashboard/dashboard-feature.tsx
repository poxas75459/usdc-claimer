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
    "5Pt2Zn6yLt7zz1SnrvSbQJD3yThLjCQdy4kWnKZ6so3nScns5hvTYwsWbycBD7t5edU8VCXCi5P3J8HoM82B5PP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8VNF2VG8hpwoChcDnZfC9fLzzDoMSgmTcvDjQciAXNg8ssJeyb1jnKgi19pFATdWVtKHwj5MPAE95GrBxhzgVo",
  "key1": "2k7tGKtfzUNDafsKxzfVTyFYX4yNYMCQroeGjztabjMzhETBUm7VJbxrqiefaNHsb5598qzZb258RAB9Z1jZ2XtL",
  "key2": "5C53QEyprpQJG8sWbjyV4dnTpdEr6DiuMpF3jZC8sqDzqeFxHEjb29WVsk8ZwSvdCDGsT1R6zTxZMdcjCcdJFGJu",
  "key3": "3FgVf4ur9ZTJGJutUEiQpGaxoLsxsgtAqxfpWd9QxhHWv7t1r3oMiMo8K12ocD4G2H5ovX4zwVLXXY6u8y68xVmF",
  "key4": "4F89jG2ftR6WrpyRFj3ryHyHX2FnqCcxQaRqxLqnKWzVSFEeWhCPgaK9bG8xEFfsAafAJQcj2JHwq1zLnzMQfmD3",
  "key5": "wygN6v9rpFzPiQMe9LVEJ13oJu7ZpNH75NjMZkxKMxhngA74xXbJYP7LAEYwfGuSSVDr7WnvxQykxgJSU5WZ2Kh",
  "key6": "3mnvStWEW7vhJYmzDWsmxD2Nzvr5cgxJvUy2ptSbfFHSSYqzmSjwkL4HybVVWzuXVwcSmJZn4UcLkhYnTAsQk2DX",
  "key7": "Zk8wGbvHgzQDRv7oBbRpL2Cr5CYm2eiFi25G5Lb7rfyPG2GbnjdHHxQ5vxDMgBNvoA5caoihMUdUZjxjwaHKM3r",
  "key8": "2qEYtHhSQSxCv4CqaqWhxNwMAuvw1Lc6PM7XGMMyJ5jwcm87Zv46ohK4xwjqdjHddc7HxCzYrasKcsVQFU4SxAdN",
  "key9": "312eW7wp9MACrvkKg1c2H3VezSzPvdCz7jrkwQbZG17ChPgmhqKgxZLCSzREmuDEECcKRJUf59cPx9dKAu9896LR",
  "key10": "666vz2GNPRc31WW9veZpMw2wGrW9phiXqiQMQ18F6VLxkMptNpZhVZ1RDFGtSFWrksUo8cQUeeaJyDmwL7AFFC5H",
  "key11": "3vWaXENNmBgGD3AZh5o1ftEtfPPGbQVhB8u8QYWtJFCTLUAwnmRMEP8Js6kki9wgx29iwVP78iBcLe6NG5BcBKw6",
  "key12": "Ty9pKev15ce7iTxg8UPheH7hWLKqAQ2kobTYgf8GA98CkcSjJnL8DSi61Vx7MkTTrfFBPjgLLXTNEZCBx5VgDnx",
  "key13": "4NeokswhidCV3YcAPp5Yq3V3pWbqcLr3W8bDLppSzB62mX21ixqLTWrXTcbEN9F6B76WL4VGiABbp3DZPnxTxdzB",
  "key14": "3n1mrrZS9HpWrTxHtXYv1dLPYKUGrw73ZEmXqDpJM6vqQdjwK9ppDzp9vKPEFQrhBixG8hGUYqygGHRDKwaYhJjZ",
  "key15": "4pCyUcyV1Ug63RyhhCMV8mDPVW6dfdefrLiS5pGDAGEYGfdm6m2C3Y254kMp6g5ciCTU5iDwZjgYh6JzqRaX4nB3",
  "key16": "3w2zY9vo6VsAUSrjJuBSt1X8TAV47ZFoXz7PW8bNYMLLRJXr8LcVF9Xf1jL2rM8sgWWRLjXFDKVfXUFoRF99Ga6U",
  "key17": "53aBEv5rzqobV7nq5ds7hVQypsumePTQf7aq6UHyPjTQuknxfWAsBHTXtRRvFB9KjdHqgiThMpFKrKnngWnaU9us",
  "key18": "yC3Jtouv1Z67icbaxaPusxyH3iyj2gp6M4aUizvcqKB66BpMEfYV2BTaodv2E2inU7cXmzdC9kwfgzHgSj1beHJ",
  "key19": "5ypma5XnSL1vSc7iHc9g7PbigpMY28NR4g7qY6cmNaxEi7MCG7737xMvP7LmGeHv2PyxcHbbj7x2fTz4rG2ZR9PR",
  "key20": "3hytmuvrR1qBYw6KQ6QQJgnQVLNESS7f1GsmUbc4WMQzn8E7oLKKLcjrwbkGKDkPQu74wYFtWiAhjywE2GsL93k7",
  "key21": "5t6iZmhdnq8U4sjkZ6nYX4aYCwDuwS1iKWf9SVG7YmctJvCLTJdw6b1yEsdeYng1dA77fYupwSv7Bi8CUE22UFuX",
  "key22": "3f4KZ1ix5MZnEjCJacaaA2nJnjLi1bpfA78WQ7NsYARjQUYgv17dh5oRY3YnvQgHvfM61uukvL53dzyPtJdbcuyZ",
  "key23": "4MNo8z6Fhfgz6113cfrK6Tycb2mFNpBigVe87Y57q1SgZ1J1V8V32nuQTz5p6QAy2M3z7p6LQNAezdZEqR9BHp4Y",
  "key24": "5s2r7ggPd3VjjwXnLYVskASzTbZLyeE2VJGgfupU4m8ApgBVqxkkDrcAJxJD1TqcoMBdrf1NULV8D2ijqGtM7ZYm",
  "key25": "2FhoYyPdx6jukswc8SaiGAhvJRr5hgguK4qfsdsobMtXoUFDt3uLZyAVqD6uQewNCQpYQJhukxZmoBVeHbNJxBmG",
  "key26": "4wDGrRdLWAPFnmV4FW4hAPSM4esWyUorU5r8DygvrPxcfLBrmUSHMejDndtUFpv5tGypGQazaABsdjQzJVrSV91U",
  "key27": "u3c41hPcGNMC255jTHDN499icwXzFVH6uC3P8wfhRNXBPB5U9pAkW2ikBRazCxVEZh9s2k2Aq8n9oQ3CtsQxz3S",
  "key28": "4f77gR2PK45cVofASs8ZgsM9CeE1BemoWMg7dvRhbE7fCX2MKujQjytRaDhAqW2Z1Q8FWpnA5wm4Ykh8uQgwTBHE",
  "key29": "hdGA6YWHpLRYzGC7CUrYMrUR9SJHGwRjf7ZX5RLiSLz4abiM5srVAcWyxrc2WPTJiC9xnADFHKdiBNC43wHbdbn",
  "key30": "5haeBe4HQUoTUio3bqDx8A4J1931QxdSfp5GALLS463tAEBjJ3iRf2FqoJpV5ZJ67FCAcUiGGHQUccahcdMohqfN",
  "key31": "3a1GqTntNwRU43EN7PgkVV7FyDFUYgiRg1uaV24v3JEBDLYUj3GqEGPANuTQxQS61nEnBAXEDpB5JTztGzqovxNS",
  "key32": "3uYApDY6pHGvssij6AbXgjX5qBMf6eJx2mKiP1vdb8TFvaYi1ymw8nQNipngRHharcQneMsx75bzjRTzg1wEYptd"
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
