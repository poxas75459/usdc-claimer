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
    "5Dsh7PESoXMb4BLC9gZ8oPEFWGikkCnVmzij2k4HveEq5AhVuio1RPfr9rDq5qHKZt656p3vqkyD4BD1XSAmx8x3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hsLYqWRksJ8iA8LezoHhr2E6PbQjqR9MabV8n8MjksUYQnswUZ7HMvyAPjLxoZnDGFsf6MBdaG8CxTk5VQm1V7H",
  "key1": "DYUTWAdPXvfaD94aa61QrnUWnY2HKnNgiEsi3MZaWYVUWbM5D6yTrUbLfDkUjnkpqNqs1GiVMyw8npjkhJZ9Weo",
  "key2": "3pRksERDKG934LJHnaZ8BhFUswzBRwGRjd1uoyVJqGR6YsDZmxCrxgUXSNrZhgRWFok7TWkXgJh6GE1fanb5RXwt",
  "key3": "5CWWaFNKw3Ho7TmUdizxLXcNfdYekjb5Ft7HDcTm5C3nJkgY5LQmMLjs4ytqFbBeXejSTbB2E9YKfeZpGJbJVZYX",
  "key4": "4A6v82x2hqxzMtdg3nWFdRjYrQrKViZB1kyCN6eiUGSDQXaaVJbYEbVawsfb1A8Gg2AXmLTSH3jUDy47JsaaqJdn",
  "key5": "1LRJQhV82Ac8J5fKmish24dpva7zWexUtSfXG1zD8zu9iiSq36j8XLpojcimF4QTVXiT33E4vVgo296JzyQrqgA",
  "key6": "5w82M6hGPB3Cs7Urhi1aK7h6LM44z3XnkEJHSZ2KjXX312FB11moizhBSpAaMoFR7C7kLis8Nynj1hEKku8AaU64",
  "key7": "3KVc8cZLJwp2wiHEMdhtEDdwvWJ1kLwRVrJFK1XGqZQKUCJmnDr6XAmnmeU2rpGiUDK3zevdmy6rQFekPthvT6dn",
  "key8": "34dkzgwLZpx4N3CKFwGNNzfCXEw9mBJmtYi64T7DYsEAooeSeTWneLTwE7vAQLWeK9Yjje3AbXZCNjdMXJSen8fa",
  "key9": "22SRz5BEeibvAdEGK4iRFNSugPnDpW71yrKNMPoJ5H1C7o1RXmRJPSDJ7jEYYkS9z2B6Z1qEPkHUob8enGnbDH5q",
  "key10": "4fbBRkVvmdoMnxzSCFjdmj3VJQ3bgxucs61Am6RSNe2VpBZxybK2LAQqGcL8BtCsVJJjfFwy3tJG6kmS32Hv9cQJ",
  "key11": "4StJJ5wGXyUaSKFTGRvxtNPFXnsWRsReihPWMBSQhgeCX3tBZn7zAgemyqrVgERLoDfx2dykRBTYVAYfidYic85K",
  "key12": "2BJRxx1X5WoUV6mSgpBmpUp5Zc1rv4arXAukKrYCbEyeTrn8uChBpHLJRDMziLNf43FUz1GhkDmC2saRXx6AEYHw",
  "key13": "5rbJLtHvbbKfuGMq2nVtqk7TgCt1ogneNtYzrVDD2bKxagaa2gBwfFgr9YNM3Qt3UR4mJaQd1vcPwqEvFHWVdcxD",
  "key14": "22fqLSKiHNMvMabxdf5ErY7cjSvxjXJaWhHncbjvr18FkH4td9tCwBMCPcSrvW6K4Qr7FFSd11BrY7DpBxsN65o6",
  "key15": "4sPzHQ2FncPLKn73dv3yZF5AsFKrrnEnEnu5QQm1htFybZxcCJroGTRpiYK9RgYpjd9kzV8rv4EbA1GY1SZ164kZ",
  "key16": "2EMnzTGdx7vrtm7MUrid5J3fxmehg3RW7f5UKDCt8SR5YgFVK1VQcAZSm4qtKrGgEXkW7co3AvkRnmRRScyiS4dz",
  "key17": "nTjkd6Yf3PPmWkYaKmbXbkWYNSPvz51W58JCMvsMH8q5YntSPA3yNwU62jRj4ZpTEnJsFaMtNyBR2nt1hY9Yrw2",
  "key18": "3nrNgf7VN9UuV73aP4AwZModVNzWvAFJ2eUgUgMrjxm9EVo3jWJFMmwX4pFyjhVwnJDdjG1dhPoQ92EoTyxiHTk9",
  "key19": "4PF3dKsLvbk3aHokot3nEobZeZL39dxirAz4j1ptcjkTL21bFDMWrpx6FmJ6JAAzZaDM6QtPwW8g6ig5JNuSe6Ds",
  "key20": "WMeLFdy4oZeVghZExUMCdseG6VrrvN7Tzw4zoHroFi3JgxuQ8hDcvEnMS5iegwiEVpkdBkLEgfQA8GL67QE9Jss",
  "key21": "3dFgx2VmgGE6Nt74SKkaucdjHfUXXPcqZyYdkhzbyLi7jvZmEQL1N5YdyjTBmoXtZkSKeQAsP4q38kK1QnDhcF9A",
  "key22": "5vqsr9xZQVPW8TTCwHgaqNbZs48VGjE4Pw65HCefNQZZMVXonAgwPMuyfHskYXAjPcWXmtojDGJJvfqhotMWgCN4",
  "key23": "5bphp7PoYpt8tUhVbYsPjCWegk8MRKtYBaBEJj4ZH8BfmVf7fZg87Atvz8fiX9iNEuJQ7wYwjwjkPMdprn1MiYF4",
  "key24": "2hX7cedAttGXoACwxViRmnyRcaq262enFcB29mZkWqrPxg9revmMEzNzvnT7j8S8RSoTBiL4PBhTzau9UMqkK7CM",
  "key25": "52qic9xYub4KvGNs32aXCpbsubQArWiD4iYi557Svg2BdVrbVMjA88wDMST81btiB6Ya9wgm7TM7MTD3oP83ocy1",
  "key26": "CjecAPftrC3aqhmg43agET2RS6VYS13e2cNfS8oY47LL9TaUuFwkx7QW6tSQcwbtZDNCvtGR3PhKEMTatMLnrPG",
  "key27": "277HRdYWXHzqWpBE8GAKW4jPDYxu4yg4uVkWubsaY63x96tW4k5hibfFx5pHnEZk3SGtPtfEG9iPwBQSZm4tSke6",
  "key28": "3XURRmXXHYYoPZYxRq4XuBhMdsXhgSSsoRZLzgiyCpn9WWD2iSB5HxqrWNbT5uWFv9txzMxasqmnT4yyG2uHYakD",
  "key29": "3sJonCZXAnLnWXE7wSah94usckGkqfXvoJxASqhqwG2LLTiJURWxFEsbjUqvGe3dMzNqPXjzkjqruVwm8KWfjsHU",
  "key30": "2JZJgsvUHKAwgWxvjhyo5szukybgzx5bE3FbRq8gwzvbWVqa4oYf1uVnBgVaTwv9gqS4X1yeLaN56k1yEdE7rKeX"
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
