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
    "5ZPTp3T3PUknCP1hxJZfgTPUYygZJzxkHR8V7n7uidEtegfoqAa3GQt5yv7vyfH2yWsAXt9gM32ECp3w7kVciNf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SF2CAZ3uFmkjxR8UaQTdtADavVrG1WzjmnqHFzxUJ9mEVmbBJEwk3qEjj4ucribZyczAKW7tggW1bBpHGQ3EqWp",
  "key1": "61rXQKzpGSwbC9XzvHQDtLFEzpDAbekaEHJoBRK5JsvcfSx9NBtv5BZrLEFSFnbMEyM8Qb2as4a5CuXVaWpfdwqj",
  "key2": "vcHzgkf4qrjNyxLBmag2GbeuVBQCHK63m5GBaZRY4ze7bGYqSgd1WyTJ9g4ymvdwqSAekessmigYNDX5avUoWiX",
  "key3": "jvzafBDUtABz2ckXGGSuAe7Jb9F9mj46dbfbBWJvvqj6PPvyzYsaXrRXNhr4F6iuZcmBVbU8SnAUgoFN2mwgEbN",
  "key4": "2rmokBk7s1WEkhmFWRKtExhDGaUvmAebKv3xiBRjwXoQNnWZn4MjDyg65ehKuxxCzP1ex4EqbwxXLas1NaPhmMjE",
  "key5": "2JYbmustsUFVtoRFxtrtEzsyqXqo8Va5iu1VjYiu7aqR99HNdHnfZ5bNY67Jx79zXgu4drg8zKqcQjy3YWiZeJiy",
  "key6": "4wCFoqPo4SWvL9TARpmXMc7ckYn5n3QjMPpxMNtgUAau4xsEFcEMZbxouDD4iRHgvy8FTUjXvHQsNq73wcAi3xYY",
  "key7": "5YQtTrv8QPamn88hrD5QiJpzUr7aLFxqMwJMEAz7qvVCo8742hCj5q77AqswTcY8K1ZU1irWHYfQWt6WXTgVnuRG",
  "key8": "3TP2ULxE6uGnCbUqZMN5ifq4sABzWzwapkBU3CkJeVSYhUQqmm9qee8hYV52GvJWVkeEEwKX7AFCR75cW7bfSKS8",
  "key9": "4NsSaWWqg4GDfwsknNWYLTgU7PLhtxZNbuEpiVcxekMK4EFz5rFBxW6s4xKrJc6B7KgPFRF7nHraU1MTPhGm619J",
  "key10": "5mvvJD3gs8p6xhMHrLSYaUE481pVEDBFUP7cePvodQie4y3T8m4cuz6aKQzjbYSN7Ujaw96BjiHrpFAiXCKqQT4D",
  "key11": "5TupCE6JmPb6DPnwaeRwNfkSP5qQZsDprv85LaPx2XbVnHksYtqEFnHaFhKuHg9Tio5a1kd6ppxkFhn4xCFvZGWv",
  "key12": "5JSZnbLFE3fkQtymumZSH6iTgcNdhXH5jKfgE5G6Fb5VDcHrigFvHf8MqKMdtATruCrPQUY71sNUM9SbTwEDyTrj",
  "key13": "3hUM43vp365AnfAHzGr8y4VUSmR8yKVoEipW1SJ8ZGZnUE5L9aDwJFE1eeJp43UHsUVhYMDQCALwktGxrs39xWYr",
  "key14": "57H1GrG79SJbeGzoatQepN7dPBo5PuVVMsYmeedU5GRtK2AJ7MJQVCTyqkToQ93CM5mc32uw2WyZXAhbPLhZ3TvT",
  "key15": "4syjh2f5U59eWfiFQPWFpmUk4eYHDu5S9snh4EBgqamdq5FubwwXyrMDyDwP3zEQnZRJcFVFgqw9rW9BsSGw3Ach",
  "key16": "3pJdqnKtcj8VBC4kutoW9dZuCbwJimog1PyrGkhLbBVfKsG5ArzRQq6H5DtYFinFpS7TvcyQVrcyTgD6zEdfdMUe",
  "key17": "3f6txx6PaGn6yFoyoRwZDFWuoUB6PDE7wY8UEkRN8EDsApGrBwsxk487WDwaP5rqS9BQQiThJxyTeYyULpHEUvJ3",
  "key18": "PabE3dqqKhPoNBjcuhVqxUDYnPsx8c1JrAn3KFTqGMq8BvTQ5QSXeJo1eWB9BH3MRSEDjFKchCRkqWz6rPVCqdE",
  "key19": "3YsUJiJeZ8jmXduuHBiEwNiANiL8jwSFazWdWYG2nbBd5fiAuPdstrUL3cs6fVT9KnbFRW4eMSJqLcizKSETMqAy",
  "key20": "HTNaxZLytCbqwKebKS9uDtNMJmo1KsHi1jVknk4fs5ifBU8crzS9oBKqdcZgWa64z4otZC12hpN3TQzXjcZgPAa",
  "key21": "4Ts7t13uB3zTiWPVrPPxmMr8q1ncqMuqQZ2H4ydRCSiveEhpZ6AQswGeL8YutxvkqChTVVsjCADkyrDMFzz7j18N",
  "key22": "3BvWkgRu3Kw2m77g4vTdv7XdT7nKeFZa54tgwGGv4RLiSEdjxRysgui7Kky1KGRfUvgpdvRnejwb63m1dvrzXkBR",
  "key23": "335V8XXUQGso4NzfYp2s6ei4wCkxTsS6davFPaQogFTMorkiBiLw6v9JmhYVpUs73AMt4nnzbYz9J8NTeyVsfXSm",
  "key24": "4fFwg5pzhPv5pbQceSHKGa16DSgNmrMPrGzzxE8NtpxZRVUKBSPUxifXKJx2U4j96P7SfTieWK3aP9ArWozeEsxA",
  "key25": "3Xz7pwTWP4XcQbjtVUjaa36DHLdsVBxHwsqDHN8wWhQnLqN2gwfWD2yVBQkLfFfKVw5u6f2SUZSvFApsXiQxadSE",
  "key26": "3UMPR13yyCUPMaEsHvXcMASvWtb1hzRqHh7QmFTWuJixvz5EcyYbB8srxtnjDHT487Xo9qXZA612JeLJG9dUvoEx"
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
