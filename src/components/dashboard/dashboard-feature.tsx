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
    "4hKXtUzonKQYFvhC2CVzFw2Kj5hq5gMHcprmvjb55LWbQNJMfrLkyy5vgY4ehexeKJSSi3iF6pVAmy7jREtixLaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yz73my24wLwZUUnrU68tzWKjiLeoQ6qWQ5hYV44yDVfjmLXV54QvUG1ZGLetKhbC7Kv32ZWhynxMTVK2kpusSrh",
  "key1": "JBfMGUaZxiiJj1KkZLFGwHneJ3xxqK81VV4bbkosYux1MSDxWMitypJDCZLoEVma6xVTUY8Aoo4G6pZL2G8oAGQ",
  "key2": "4pzwH1vsq2hbUvbYm7ejGiQn47VVqbkPVwMWaV8C14iJWSuhQkUQ3mf5yDisQitZJC4xZ1maCTbyyPocNrNthBKG",
  "key3": "533Q8UhusmadxV7t1FB1VcoudTsuQL2SuFpBuANwT4zZN74ZdvjUvRr3rdomuNWCepwj77hcBuzt2qCEokobc7Wy",
  "key4": "4qzgZuEyiDCnxzhxS82FY72o5fcG3VVZxbGJr8F65dT6eDTgruzrZ9JQrEgP6gKAJn5d89mrF3T4z1j3tJFyTyAj",
  "key5": "4am4q8iDLkGZnNLBUL3xpZ3NLPCtRJRvvhEmpdGrFspAuDitq5Gfc4KqjfHYFMGhrNT8vgonjEnqRh8Fd5MvPvtf",
  "key6": "2rRKddaPe3pqmXbZtY9Sfa6Ac2QxAAuqPRr51u7gQQze9gvcSk2CpkcBne4EqPo2itdqmLtcPDhTUGMsgs2qVx4n",
  "key7": "3cer1JZ1Di2Cj6tSQkc6j2ckMQdk6VtRAMjvDKJCBWsyaB5uuK82mxsHMCghBTkANMCQzJqr1toTpap6VxrJMsQi",
  "key8": "hs7dMEsho4HSn8avkSaJaPfGC6GY2cgT1BvjG9jwqz7d6W1kBbVh7B37SJBHf72dewYEr6mEMXJbGAKZXvJtC5v",
  "key9": "4Xh5DHfv7h3ebxCperjSP6cMTeMaAZ75BWFZpNF16zQheSzBecssxYxTvAhBg1BAbxXsgbP63qBomenJfuW1Wn96",
  "key10": "5yhQ3Kjf9mS2Tdut38obCryGzzfMQ3DgHaJ6g2fKxAHMZHm4CJUfWrdDEgZy8CXKtNtGGuFQf8ai9raJXD9srHke",
  "key11": "2UZJMQdtnjYdwL2HTx8tZqkxmFAWvmYcWxLADnhSD2bgir1QjTyNwGCxyvdA6knvouB97bpv3x9B34bherwjxzeg",
  "key12": "566AyZ7vuXMunMnc91KpusQ1GjZf2tFsTMULEBPs99cQUWsiNUBBTAw1cJQFDUL5LbhddY66apEFnHNLDWxzGqZW",
  "key13": "3UHWqJ8jzQxHgfhJ6aghxSc4wZonZYLdL3b2YHT6w8nzrxvC2RhAh1nehuZkBVycEaTzSZkkuvxjyDGbcHzXPsnn",
  "key14": "3PPvYARfnrcnsGrxnLNbhmztNWvZ5j7ePgP1okiMsAJwVq3eG7KQyA5RPugFVTgEzepU3hHxBSojTH7FVgM6sExk",
  "key15": "2vKqkkrYNmRd4LN5zCA73Wj5jbEkY1MkCVkRM9sqvsuiK4gfKvkieF51nFobpn3e7BFRvHMdyPgNzdNt8HHPbx3b",
  "key16": "2TDz654vtw9DD5758F1o6CYTDSKTzWHMCrP1GAqhN2QtsW74WNhCH2nAUGXQ2R49ZXQDEv9cHjFSHUzdirjT4geP",
  "key17": "3Qrnuk2Sub14cVMBCRpCqDD24YmwxrMwta9rUYSMvm9Qdota1Ed6c1GLec3hYqkYvhumr3Qv68c26AN8DhfK9btN",
  "key18": "4RSC1HL7H23NmusaJ2c9VvQYZRVh3LR697C4Zd1hEWg1nnM92jy89omnnnuZYbX3JdBkVwX5oNwMv2rh2nJuGEcL",
  "key19": "2aRs8DyiVo5MYXtQdygDjkD5yJY2TCHddkhhkN7yEcs1cA3bQJ3u2HoHqqRPbusit5m1cTjwPwBwXC1SswsHjngE",
  "key20": "2G3m9ECSXQWt8KfdEk9B9HbrqaWL295KQxnJZzQ8frsxaAj3Cm78KhaT5rkVDSznfiith461Ve6AFxfvLKzbMrFv",
  "key21": "24VZsmzXrbJyJ5Vo3cEop9CjAHnuTAGEYBHUCvpzySMApWxNydMXtKpfC7eMXeMcbfY3Hq2aiUCiwD7KPRHqWx1j",
  "key22": "2vwWpXAokkrK87qoz9WrqULRboeARWFEjryhtP31Jd7JTN1XdBnwPiveosNfWdnJwEZSKGXEgR1QUdZ63Uy6bdfh",
  "key23": "4hpEUXhZvEaD5Qiadp1dUTJ6gtruyCMddAMAPjQa4FJeLoUJ7JBdsotM2w4wxPW8toDvz9y8AEQGykDCd6bifo8D",
  "key24": "3YvByafqS2sFUZZ37bTWrQda6NiNQXpaHMkTBGFS7wgdLUttP3o4jVeVaePkpzWSDDkVKJAh758VDtenCYeBv1U8",
  "key25": "4Zhto42VJNL3UMcfXdX2yh25NpAUdX3TpDTX7dZBKLBEeWiZWiCyNqiwS63Ajzw7Nu7mSdaViN6EFL8T6P4wWjS",
  "key26": "3nSFXNitVEr6L2KPhQNoJPvnQbKFHxLyYBAFrCupF9k8P5SWKESp4kiTRpQn3UCE7Pxjhera16r4JZqPKZMwRNb6",
  "key27": "5HjuUW4vnTHrwjsaKL4ZQ7ZiJZK912aVQt3MnizxTGctB79j8UgFRrBNgzJp6bahmt2571mQd5tWSVk64PJGTd9U"
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
