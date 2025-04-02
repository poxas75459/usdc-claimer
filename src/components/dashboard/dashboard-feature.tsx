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
    "5MdHcVgbKKFWKeUo53K6B9nvduCeUQJSGBGokacRynxSFNFQxtcCY7eXQYSwmU39fxQHKmFcSzb8iqQQsWQM438n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXgQtZdrAe4gQZrR9Gh7M7dwV1bej6CzCyRiVWLG2KVbZZvNo8M7fggKydB49tUQzHxcwcnTHcn4hhHGVsgAJwY",
  "key1": "3htft5NJ99hFrGFiC8MifzvVTXYVHtS5wLeZtU3D2WdxgfNBBBUBr7zGFmcjVyKS5wKYrqawH59QCMF152UdU7Ce",
  "key2": "5j8SRrcL2D7km6WE7BPMZGRFwtLs8vuoQUeGaiYVDGtwXGjbnD6gXKYZJVZzyJ9meBfBe249CxWqGT6cEiWg5nES",
  "key3": "4fQeYhpJyZxeeBkHoVEjDTCcSUaeGckGzfKiaPyQUDzbhZyFDWdbSw57CWv8jqgD4tAdixXCBxvRgxv82RJ5SnwQ",
  "key4": "5bUc1gPqAwN3zXhGpywArjXy39jPYy24JbtoSEchQDbngTvwNCYTCepxAWKBoncA2FGSX7ASuZvXA8F2NXASWE9q",
  "key5": "3QdXB1wYs7PcqL8YXjheFdLsSju2Zs6Rw22669Qt5yMmnAduHsjFdpTyEo6h1dQ8wKGNUaNVGVxesAyStsw6dPDp",
  "key6": "5pTQ27BRz9PotDvyyUgsE7GLefnknK7agMyWfmAsxnhBzS5bJoKARiTL6PJuvfaFuLohJ2gy7kngqdJ2zvMGAkJk",
  "key7": "46ThWaCAbWeHfkK3SHBQefkT21NhyGpCLcSahyYwqUd3AgryGRk9Pe8fZwurYgFGRxrXC1FkTavzAaSmpHdN6Tjz",
  "key8": "4hwTfieupPSZqCNDYC3Xd5g5eL427r3DM5mCFmaBhyLHcHuNnnK1jqNwJ8Brt8RFQwm7ZoH1FV6TGnCbRAy2fvuo",
  "key9": "XwFJbThUetM1ftvqrwc7dJQFooiWwRCPkx6kUSd9VdUpZ9JDoGhHQXjDR1W21LWZzWkTgwpu9mgSXDfNLcKgiiV",
  "key10": "UxvQ3cTje57JHRJoRmuzp6SdXnnV4jVREDc4nad5cE5hKvwdgkcYUmHc8NS6efx8144LXe1Y5HiCK8gb79FxCBe",
  "key11": "3kiNseyEghuMhmG5zrZaAJ2Gyh4NBYrQdNvhwhAcPn9FpXS9z76NMBFyC6adSe7MGqeKcBkWSj7GXRxzqxRQ1UYd",
  "key12": "D32T5FH9xmLhLuwcqoHiqUL3GAmMBDYU7zmEe8vyRLnynhFg2PhbPaKC3Vbk6rFEirENrnBaDgisVcN8uiRko4S",
  "key13": "5mvfpCuwwnoRGLvtAWjkAjK5PhiwL6ZgTS22ksjaSeixpmyf1jWiwLfVDdvgfobWWBFiJBdSLo9i5UTSiMpteNUr",
  "key14": "3x9LmWafVr7SGLwvAp7srSbssEutDN8RF9xuQze6SPhntUPr69Q9QX3NwPE6uThcPKFLXRrYUdxpuE9DFhGnuuaQ",
  "key15": "5oKgLz2Fkw9se9UaAqZ1uGtrPy2TxRN6ikXXxkjc5mzSxnEqGV7CAevtwZNqaenfwvexTUPK83aQCKdtxFqUEpTW",
  "key16": "42oNCsivB2hrTZbUqrMYpVLhcSjCvZKqHM7CpoVDXrkjixtJ8iKpmM2335YsFHKFweCmbKT9Zt3YqC9djmhZUZw3",
  "key17": "33DDJhDCf3kf8xaYGbTZp855Rm1yQRAsCYXXEdDP9q2k1adXCcFPURykRs8tZ2RZKRDYqd8TsENERHM422REegNo",
  "key18": "2BPA9x9oyA8jrV2krkGfyzYYPWRRFCrbzx3VwykbU4cHwKDLMGt9ezj9FwjJtQFsYkx4kd7w8hP86MmNjxw3WTtF",
  "key19": "5A6Psjogt87qGY5NA74S4sgKX7TiePrxJBHzUTeMQjcojoaAFnoHec7qDSqoQ91udaJdNw4TCv6Dd7KsufBLCRSN",
  "key20": "26Gch22NaHhcDhaYavg8HM7QhmzMmtF17aShE3MECzuwBRUVF7yXtZHmtaaZk5LLvAs9bpuymD7Q66RAUHkSLmFV",
  "key21": "552u7i7SCmC1UHbSaUCWNkawwKeeR34DDnPGZkLpVTHQ31ea3fWRU4JzWcxYxNbpZRG6N1nJVTAs6U9dg6hGnSnz",
  "key22": "3EeJ93L3Lw4nXPr1MPBESQSsASyUrKpT156A4X6fwZUhVZN5Z1TJXGrdpCX4em73NoF3g3EQ9JQsE8rsNgjV2vG6",
  "key23": "2o8FNBP7rwvuXLr9t1nSegvcigxHgs2Jh2uDKEsWJhzR2pYEQgHoRCx9hBDdasaVJgfoYvLk9wYudKmgjC9cZYU",
  "key24": "5g5msrHCnjxwW457xcd5qDX7uLmhKoHfKLJvyLRngoSP8MakZEoyEnFjNJNTdnMEo4hhyaLhxiJKb6pKyFN5nHmq",
  "key25": "3MfRqZccCU77p4niDvyxA4VsBerLNnxHKpwv9JHuQ7Egec9bdcBKG5tRfSSxRMoTp7mTZMrhDQvWgEyb2GQ4jpPx"
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
