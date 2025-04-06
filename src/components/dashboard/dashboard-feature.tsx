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
    "k2uqR12vfY28uZXfcr4CmavLSESqxfUZf4QmJ9Tm2wno82jMJTRbdq2dBejRp2uptN1JesJaNEsNfcuR56fMVsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHc8THFy8NgWLBw8SW6DVPA9robZQr3BQdwXoLPUqNkfG3KvZqsN9XxCwsQL2Jmcxa5gWC43VmyXG41t1XxvyDg",
  "key1": "4z7wdqMZBqjQ6JiLY26bEmvHK4fNfMykSQrJyafoeDR97H5wgQwhcU1kNkgtC8tb33Lg6u3yYC67jjSGafi1zWVV",
  "key2": "xVfRZ5C3mAb2zpbvrDnkSW974XBcwv1ZM6vGqfeG9mS8vCWVM193N31CZugZ498oBD6LWNT8nPKDLWJGH5YYJbQ",
  "key3": "SLm6fK2JAeD2FQsVQmKjt6BLWqm8YDUiH7FgRR3mfLnrD256PHSn3LVk7KpdHVN7Bao6yCdej5f67diPZWMuVN1",
  "key4": "42MKbbnFFsVVaC21C9zv1qGks5SQRS8QeZCPvAs5JqFfVeW5c555hbUXA1NXAgBJz4c45iiYXKE2HFzqzGr9ghsm",
  "key5": "47g42Cc4mrzX5KJaWYbyUMGjTencu7YnnNc7A4qyfy1QHcjQXQVpYWpnGk8Rnj3p31cQfdWYi53x9LNV8Hofdhs2",
  "key6": "3KtVPgKaShv3Tj4XRMtJRYzRVQCnXwkhGUqf1rdHdLd74FXGhjRJK8JcShMJLwJQRJWfRG5Z6aJrQvZGr3wpaewt",
  "key7": "5PoeAjRSXXK8bhVt3XVKjeEEYtaE9oezGPLsPy2bddH2VqWYpKjJ1suAcEUWaNe51WWk73Lv6W6dyU3Yw4teKoak",
  "key8": "5vvHG5FmiadSnWCQrrg61MTRSv2Z3UBDpAr9kagq9DsjnpxPpSbLibTrjzfHCsSaLd5efGsAENRks75AyqTdWwtL",
  "key9": "v1yfF8QGC58bBbXpGM2TvCXcgnTW9oPV19LmPWXG8jgbo3xovQGL8aAoJEWhgQyhzt3CvVB73bUpvM4CGoYPSRP",
  "key10": "5vtZt95qDm9xTaHMaAMveu4RW4LsfACsW6wYvviPUajZ5KAhnYMHJaf3sHPb2ASTxKWXestAKDyaF8aU5tR37XvR",
  "key11": "34CKeUEQURAuNMjfSWwrxSzpgZBfQRUE4UN1gFdXFn4ZQE5UTfqaHWspEzSAcqJgXpWgzQtwAoHPRSn4ddsZLHb8",
  "key12": "4hndjRwdB1VYQpPguMdwibC31dpFuv5EzCMcFVv7iTDjD1ppFkEkhpwBWLHaRLCW7ziTpHMPYshSvaMpsgESFpSr",
  "key13": "3spADa5s9XwvsgP4zQEynwnPcNBrJfq7WujUeZZuHMocNFyB1LEn3CPLuKwDU3KvbRdhZZRpf3BEKue9WosZFu4k",
  "key14": "4LewCALvkYgyNvBWMJ3Eu7LNuSWqtMWJU6rQx44HpPknz8fWD13yB6GmmCVzcyjzNqyTgq5g4YJkjtmrGc2iwAFv",
  "key15": "4SFSqhVwvrPqksqpKijuBRRyUC4wDiSRiNbJNyrNL2riL88zxmPkEvfQ34zrVHc7Bk8dmtqvEqtq6XjmfkcJKCLS",
  "key16": "2bwQgoC2EXEcJFJ4NzH9e9C1fjA3eZtn8NmUVrNwTUdDkRi7RhXXQwDtuuHf53bBRGa7YyGZuZLjQNJnZB6d31Mn",
  "key17": "9Nt4hXicKyfadnJdqomen5APysJFK5jbfic7NLohqB5XdN5rQ3BgYfTNV3qjYq2HyMcxHSAf72QTdSQwqtGkgfA",
  "key18": "3cj4c3MaAGn6rU4HsthSjbwKVHPPtpt2yPcEzyvm7bBY3VKiypiH12ShbYrSbor6yVgL6r8GUXJJvhPgthdoewwQ",
  "key19": "41ToTaDHUGi1ucNgJtwRzXkdzwYU9aTaeLRU4k6FsrKm61aBnzkwSEiU6WMtmfcnbXJezAUdVsapLxrkp6W3hTAQ",
  "key20": "3Gc67zx8F33uaaEfGnUb9tHzLnksqkUXrEQypKViCVKYst2Y7L6gqqS5MnU9ZMnuJ2NAqDC2VmJWiTJKdPNSDUrD",
  "key21": "5UQ6q5nTdPLLcKKF5E95CavcMX3K7qYWxU4VwvPT44niGKMFbSk7d4YTASDR612CnRNL2ybEPd5Ppktsqk53Qsgp",
  "key22": "4Aa1CQfCgYaXf3tyZwMXQoSZvwQMy46fGiykR5QVjj6rcFvv2AYxKREixToL6Q6dGxRQvPmbgybmPAHjLtiCs324",
  "key23": "3koCu3sYswojDfTQkSyzZaKumtNakW9zvwPzK25538YuaYmT6ppZX7n2QbLG8kYVGdcYrNyPyZEEXd4E6VQLM7yf",
  "key24": "3v6FFW9d3YmWj5fyGUp7ywgL69DSmikUVWi87Ko5nndrS4VLzgVdWpUtRuz4xWsDzt77QuMcB7uBnBx3EfqbgkqE",
  "key25": "3eNnepNZXEgeHjagV1PyEXCz4W3KzoZEC583Frqx8PsDd1DGjvtfWPfb3yr7aDtqoakFhtcgfRhmMyR1kAJa2uxy",
  "key26": "3UFhdvjEpGoGS8LpobqiWPCdwBDr2ee57BmRk7LnGnmWyVcghAKDRWcPwifHdJJdcXWj6xrQo9eZmKH8riwptxZT"
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
