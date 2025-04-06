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
    "fv77q2tCHvsdP2cunT6HQiSHp9WDpKWTuNcTbBUtsCqXgVNPZKxMCdAEsFuncGcn7py6qbB8mBDLC5r9Vwvi5aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMgac6AVbeFbseUXPspdFzNeEu6nLbU8qEtjHNogu7UtSDhhktAa6HqFVD33fB1UUg3UudR4nZz6zcCaxEyX4SN",
  "key1": "59qo1kwhjgRSL9We9DMH1P9cbLc7hYhu6MNpX34TG426kTPJCegUGY74p7SmqGAS3Cou2PrLvK9rBq1QTvozeHX8",
  "key2": "4xhwhPPkimiujCKp3cYdpxqLtwQjZgNvNTzbQHDoJxMffs3FoApfX9rD1LF2zcMw2NrBvye3SnABgCdDMW8JAtBr",
  "key3": "5n882TcKnzWftyATMymxbt1iiMtneB23AypYUgVF5SjQUHNmQ5encdNkSWrw9yubrA7Aw7uSuZSEgoVRmPNZ5S9z",
  "key4": "3xrsHs48qFsWqhstdCx9AqAwv6jkg34GntqC2EJez3vyCqRFt48r35NzxvW5fPwHBgFxQGvNotr11AffZBgNHQYx",
  "key5": "3iC4ZRmMkBqvLBpCDBc995Mismw5JhHrPYBZiTccoHLVLjQq9XftTNSrv4J77dWtGAsEuvsjk5p2DrbrX2JAjXzA",
  "key6": "3YqULrmAgiesvSjZXK4dJgQmLGUrqBGQBff94pCUrd8aywN9fEqnySVEXLFLnKx8YpNQtEEJ2vRuhVMTQ5pSq4sc",
  "key7": "542x4Y3SjbjoYUZA7C4EwxueusRXakLJF1h9XDxCoTpkdrqSCsDFUB6X6UuRewDztoL1pkhT8uZexSCmryhQTRPo",
  "key8": "5VZior7M459bvcNV7efXpckhWr5UeKKB6XEn4cyawx9FqkiM5h7JxJi97whZwDgmAGQd6FhqmNt1gWYc3SqVGpXK",
  "key9": "39B7ciU7aCCKBd3HwMCBrwNhzUJ973hVVNAsqFDdKQMCQh27wUN2CyYog3uuavVjjKZgK6JVDZRXQKSFpnDhL6VA",
  "key10": "2rqALPum5mzSb4FMLSLtL9rCspcDU2csizaZhCUwYgdYJwRpvKaVo8K9p8nk5dc35JzqynmdH8ypSNryzYbNQ9DH",
  "key11": "SegM8L95QSssecdJUJEqMRmN1Z9Y8uRFW3q7wdSNSELqxo4YUAhhCQF36LfchKbgZmJdTQtjFTTcnyxiCWzb1VE",
  "key12": "29Vu1aKyPH8uPB3eemk6x24XkraemadCpYBBKww1WxYBLe9QjTE7S7nUvP9YeybRxbqxH71ta5vkCazWGcG21Bz1",
  "key13": "3T7E2DZmSoPHStavHVoYxNaaxF9aBGn1MZBo4EgGzsfA8rxJamys5v2rd4WTmjzvkFcFTd5Fru44i84ZoGfx9ZBT",
  "key14": "3mZ6hGjCqcrQBVWnD5sTn1YEdv6wT6QQ68BwhH9aXtBSwvQa7WgVy7CBLgQFw7UxhGgP9eYm5ArkZaiYNtZvZeNU",
  "key15": "3hWnNWMY6JNbsmJc1zqJXx96MpTEWZBmc2R6HT9daSh8cvkucSqUPqFoxa7TqzD8rjpYGSXnGjE4oEVN8xJ9pNCi",
  "key16": "Hu33gjYaA6DLDaPX5JLxNA7nSaHs8Zsg2KbXK5dt8jjPmVj9E2AK9cvUZeMNo9J3VqJNsNLKsH3aoFB4mJnJ8Yy",
  "key17": "4zCk2Z5RDW4RUoTcJhgednwUMfqg36YwzvADoed4r9hbP7T2z7EtdvFXJcXbeQWE9DDGFxHUntmUZPQxNWsMChui",
  "key18": "38JERk7f2oWJVwYF7wYiwgNpLSkQcWDoEawLCeESUcpLAYHtLXz41w46v3C7fEXG47UZCsMJfzpBxYzhsnkmz5vi",
  "key19": "4KahKmFbYAGXe4XLeDqSmCE4zukLKhhXddkJbhRu764oFuzMuvC1qSjoLCQGymE25mb6t4Tvfb8GhvLmrK8krNAw",
  "key20": "4ftAUbVP5gvYcXnSS6AwFpkXo2VPfW8iEcZ3iyC6g2g8yi4RZR6Fberi5ywGkpxPRVtRmmjfXw7kJxPbr9gttnvs",
  "key21": "VgGCgfstVnCvFdFBGZ1Nt6VG7wUFXHZefC64sfwgPQV2DMgxmrE9NJh67b4JAzv8sG1seaiLW772BL3dbDXGFsP",
  "key22": "jmEaFT8ZmEhqkirpigp7pjGDit1bFfLE4MzoSpCzWJEEZ6vK1b4uh68MJiyQLTL6bqg4x5XCjMsgQX5ej7y1e6F",
  "key23": "5Ddia1nf9ua39CFFvEZCGR2dJoVWwoXiVE9kdxmdYbjvRWTY8GrSpPvwDX1ribckUSKo9YNgzHhYj4FvT6PM9ggf",
  "key24": "hEDm2JyC6tAwuEeZ9UwHLV2niDAxqX8Mn6CQpWQ7xJm2cNdHjanzXEjaFP6PhJYqdhu2cdecCWgzRsvjDdzGDep",
  "key25": "4dyE8NFv5azsd52iS2RtcWqAX46jZdA2AEkJGx9ucTkZodLW3Fyy9fcUjZjaM79e5kyiyvBVtpr4SA1jZMgzzxSR",
  "key26": "5NvncrUd31jg3Lt1z422uyiwkgYp6DRWk61QqfbxMBVMEPdJHPwgcWSYLiQaHmUMjfoahvXYruGuxATAw82q1MeV",
  "key27": "2mtSuof3kYovf9vBqUJLeKYvwiA3HW3ASmKyJreqxxYxpxNYHtMD1B1pDEMStVKyrBUJusypDA7FTs1cJYtw8ac6",
  "key28": "2GhHNbvQ7SnMjpbAeE9PG3iW3nkuKnfHXkUR69GqV7yco113CZtf55C1XbrgSb6vD47cxxYvRj39YTr2G5XW5HT9",
  "key29": "3zSxJEhukAzQDmKvTarFTn1ArWLRrXqEvCo2xJoAyZBzLkWLh93j3eRkGqYp1RKCgFH6mdzC1reSFTFGZoVpcRxT",
  "key30": "2amBcYHYaLoJCS66CpqqNi5zxH4PJ3KUfTpmVJk1rDxJqnqmzEt9VeA6b2h7FmMMxcjjw5GRLJjeiRprwHbFqbsa",
  "key31": "4SEqSa9R4id74nnauMxwmY6WAK6m1PUvxSFEwEJGEQN8pQDpEj8mdvUCPywEH2aHCjsH8QHwKqzroMyKKDe4SCa7",
  "key32": "5tXTMfih7G1BJ4Q3YGkpvYR2cFotzU93GeEFEtZFtuHKmFtmvHxn34zt93BNEpv9RTkjiwwMTvfvTgNXZQRANYe7"
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
