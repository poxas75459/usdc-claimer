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
    "4oJ9Z5XmfcAjqiruPi4gza5h4QyhCED2ba8dTP1QAkDYWaKcdRczjFRZam3xqCrX9JirLYQhgA8LswTipH2XsLo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V95FbnWp1NeGdFgjWh6ot5nqgYe7FEa7v4UUAfgYDjboy8K2kaktAqcfCXEQ8hgsRTwWWWusQ3mMBTDrAonKeLD",
  "key1": "22c25w8THP5fKDnNgYrgxoc6Xs69o5pjgV37Xb2bwi8FSXAn1CcGdYFQrZLWqtCv4juejGa8wmj412ya24jV7NM3",
  "key2": "16oFW3C1n3RABFnzYTzzPobUeu7Rq8FRdPLV8ZtJ1BnoMqoP9CPMfZGVifgwnAKoYQHoQtynY5zVnMUo5A96etq",
  "key3": "3KuvCkuvLNco8PMZuuFJ5b1TYydRTaMwBqpWuHsBWwC2feWHyUV7wWQViyqq4EjnxtBQny4Utd9yYGX3WUEz4FsQ",
  "key4": "4Z2bKmtscjhTZ2mir235md5Se228UC49tm6QBT3UUkKzcYDQCB1w7VxkASLtN9BYJCadT882gR3qAh222rGv9QTb",
  "key5": "31Zgnm5yzpUudut1W87ijTXqS2MDWp6fVM4kXjmCigbsPWnnJYyTN79ZaHKhGdKJ5N9wGpXCsEvTgXfD3vhML9YE",
  "key6": "29iddvLoRdPtbeTGARR3nf4DMmcnQGbv1S6StLhZ1ZNMh7v1pUxJSqjQsp3wgTqBzZrwrTHJF8oxjmAQeqW3pM8B",
  "key7": "NNcccEXQEiGV4grLMaQqFJxbK5GGSYhZftEyF293SfW4LDtZVZQS7ta1qzvvu98KHeQ3ZmeHkP6UunmGhk7BjqL",
  "key8": "2Yz5No2x3887CmXnhx7Bk6ua8eWsYMCpqCrh2NX6yevE3nctYq51LJQGorh8ZTSy9GqX5aBhoWJSnXdEeG6JvFca",
  "key9": "5cfzNKwaw9Dn2GqnJxRjao83xwyJzAcQfrLJwPL3B8Y8FYZrdeyGCKvRF87TthwvqXPcwimyphS1vwiEhiks3EB",
  "key10": "4dAUTn4mP9DAhWJJtBHbupyLCMrA22bWpTpH7NRfapLXwN68cE2YV2RgM4dAQNJk7vUJCLehrhHErWBcq5NxEef3",
  "key11": "5TifEeZXBjEYYZXmwUmK3iD1h7r3cJWaBFGgguL7ivSxQBhacKTnEsdgKPwz2r3TaqvYubhZkWXARZgxvQ2XtNUu",
  "key12": "44G9a5fze9MMS5Lsj9yA7CiEC3xNBJKcmdph5Nsv46qMaBPA4QgvGA5Q7TDmKL78bphvnGa9CZKqJEswVzMAKpUa",
  "key13": "EvE8NxiAGvMDmBc5xkTwW62dmSxwG5YupvF81tiXrikc2DDdyHdf2YTG4vfiukEKjyStMCR6HfJVg4MunpzrDDn",
  "key14": "4ARNEPDtb98NipGFdvFGEtDgVFoP7mMPzNYxQPR3pjYsgyfTpDMuC1bUcXBHtPtQnYdNH6Ro3aDEYKqGiFd2FKJz",
  "key15": "5KWFmFxnWC3atbbPzWSfvBpT3EAjnef5Rmxjnt5Uws8UCZVwWR8QgiZEmwsPXwX521VwntN144GEuHs6ZcaxMLiY",
  "key16": "s684jr91Zqkgm57CGtZJbfpNcTtL6HdmUKUaEEZWBJmm5N3qC2XU2eHGBHW8dtSXnYiiJi8m3NhFCZXPSrv695C",
  "key17": "2ULaCka2ATaW1FtoekEPPDoSczh2ZW1GADdqGYHZYPg35JSbgFLegQSJasJsqsUkQKjkZyBxZv57QrRSTMMn9aHi",
  "key18": "5XwsZBe9UMYKUBg7TZhh9occ9wbkpvQcuXGWCdzCDTNh9YS3fpUAiZ8CRPz2UT8RLCDaEHG3UqD144P85ZWSAAJA",
  "key19": "3LUQRjB5pBp22bZRUxaMbMGVeDrBMrLZejsEiHptKcNffS1njYC2kA86YqzqRYuZwsMy7Na5eVP54ULW3RuZNDmE",
  "key20": "2CF268yLMgyCUawxaMk1sJQkcAkFsao961zhhQJAw2pTdd2Hix3qMZBbg3W7X49c839fq55ev19ipzcg7P3rbB2L",
  "key21": "2i9n7Rcijjt16cymugLS7KhiHs41P1tVhBpNthmYhjTwABMkrAjhWYWuXdPgSZyQLsc7c52kRe3c7VxV19HdyCyG",
  "key22": "4wy1BdTmVSQwCgmZstirvVfjTNfevhgD1Eu5sHLinan6bLp9MAKSLc55SUaq7zNghXEgS46veqmGkX8XhUViXWVj",
  "key23": "3YqL28JimKi4srUg9Wu4xpLyY9to8AhcaRqDsFwoctzA32qunCceZgnbo2rHWLwChGBUMEXaRBs5Rm5Zn9oFqSBA",
  "key24": "4UZ8csnRfs12W5BQevxe7NBLt6cKfHikGt9B8azQmx1HZgkGTxSp7Cd6k9g8APwcXW8ZW71PV4JkFSbPTXcD5nSc",
  "key25": "2bsJ1aYfBfeVeCHCZ5wqDU6pweVEY3Ps86LSS2pGpGZ4FpbvfoNbx5cnpKo94t5EhwPeUU8ZqJZza7th6aHJmvbR",
  "key26": "5b1watdEym4Er6q3jCDwSwNrw1ZGV6KNnLuzVpdTYPuzAEffkRfxT4tQZbZgZeRWrGvKYThEVwxXBJSRNzZej65h",
  "key27": "aLtLEw6ENTdiPV93NiCgg7oWrQhwEqiuAsKLz5zLgMfa7e8xLmGwsDrXLwi87Rwj9b8RPSu9jG2tK44pfw7XtQS",
  "key28": "45iLSLYdceFu4g3VJjxYvrYxuk8sWQ6kgy3yrzwBU4ZJVFJ31bBRyPw5GELqabo8b7Q9LJJce4ECWBH1iCBeRG5J"
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
