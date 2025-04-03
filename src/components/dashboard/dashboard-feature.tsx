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
    "35PT9tdSzZUuWNLk8P8uW2UX8vAkH6f9kXhRTjc6DGfBLvNabG2uJqhLmEEgyThEPXBMxniJ6LbU1x5AexpWwKXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjAztY5XdmkfenNAnBTnfm82ESauLMr4JFSS5iMkdnZDStFoBPMVbodSMmwANNFSjhPYPPqnSLwFPfC8fF2qWP1",
  "key1": "37CptgKUjDrJm6FdRBXEFYULYXDVbfccmodbYpFc2BhD1Ht9KyjNtUgA586wfWFtThnaYNh4BiRuQcDMhkLFTv1w",
  "key2": "G4dZiaNia9tu3o3GbJr2mZfZd8anVaCTYXDCPRKJoxjACP9z8efr1BFEijDDM3P8UY29w5niT913rG4yCDpKi7p",
  "key3": "2VkakdgAfZzneNY2ny3cDQZ7nENCi5q2NFRVLrjiCE8dXPboJxvhBkbqc4kpQPHiMrUDYPA7HVbVeEVnHjmQWYM3",
  "key4": "4oU7oSektYZa9g4VzWufYeKpRSjLhj4yohqwnPEdEJ6FRaL3miayRnMThrSSov6q1foS1pTmP7r6ADYCXUf8Ta4k",
  "key5": "4kMrHWHd4D2WDDWg7SBe13qW1JEVmLzdS8UeqXprCsDbWRKXEF6QthnXq7xRZt8cMf5HBAwoY9QPRb5tdo6P96zo",
  "key6": "2iJCe7wjTq8PsMU8BZjDoaBkHY7yGXA3xSCLYuqZLafdmaLxmmmtoS17FhgTP8BYfprGDy557HvGFhM49dqU6ddR",
  "key7": "2jmvhMLGVjYaqaATWpZtFmAv7nPxXuRBxvhD9zS9sZGHy2SijdCeMcbbxoQD7bW4sSED84BofHvPjPTa8HDfnT4G",
  "key8": "39CoLwkxr5uTkFk2qnG6DbnQf766M5yw8CoCdcdczDtQkYdd1DPbxCZVbPjgAiqaDWHsxfGyqvqR8RwCVbZmFcrr",
  "key9": "5sVCQMScsVvsjKbZWzJPshGU6ETcHnCzue9NGVdmdVBguuBC963oW7ruLYYS8UdMhyCFbWBSUvxPXdJcZM5X7uHL",
  "key10": "aLS4cV1FxLwZNXj3qpMRaeHSoDS1KFF8sbiZ9dHMaxA4risYWfpakE7ZMJAybPBTGt3oqGPNHoQHLSqZJ6YzWXo",
  "key11": "2WCYs3sjDjF2uNCS3FyiUccGCP7s7aG34XrGYQGo1kprJkvBdqTiakguBLrR8jV7ziiZczrvhhrPoodRUd4c7ehm",
  "key12": "2hJx1qcHuGRdQVsFmkay8f3pgqPxasNmVbBuH1m6dWyNRVyQNUYLC3qHryw2eN5kueVx2MccSzfk27amqphgHPDy",
  "key13": "3K3niTwMcQxhcQzP43upvkQ5piFY5T2bsaE5BNzV9SKY5xKZBFpToSuspMRJ6QHLJWxovMSWvn1ELecwp44nBskF",
  "key14": "3UjUR3j7gUpZk8g4Q3zMCwcHMho2Nacz22jPtQ23SRQHYmAfM8QSxSTZj83aSZjnBnHCvvTf2AZrfTTE9uYb6fqV",
  "key15": "5VZAWkhwMUYvdvK4LUWWLudPzypV4vne1nNGLiFXHFNvkgp8hhXxZkuDuo38xTaYLsaLVauwjvR3JH4TQHaJCA8q",
  "key16": "5uP4xoJTekhpKy7KynhrmdxNWPjxrvy3YrkY7pUecw4Q93N5XCHrGpSxPUrWdAMoBadEgWvS5T6Hgsa3g2cstNyJ",
  "key17": "24imFEBodb6HRMXTdmsfizQEyC6RJuf9HbJFCKPZD6P9ULvsDdM4Yo1zSB2N8w8XDM7podWc2WRXbDPEmVvrTJeC",
  "key18": "2S7qSszwkLpajDMf84J2DF7BXvQFF8yUH9YhH3yZWenHRzovti4VMHHj4NCxUryWp6YYopzvWNo6dFnv8EACRAPL",
  "key19": "63JCaUaUHuRWhBTchqpf4nkRhMHwFJAqDNgdfHcNRg6mZWP2BuyHDUF4LGH8NwFc5NA7aE1821ynrkMMWMv7G3AN",
  "key20": "2eZsfn3ZCvCubUSsJSbsz1KXDAyonAMXomy8acPzWDW9NTJqMkrYmpUfTA48JyoNvb7UobFkWKWeXWMBydAZ38CB",
  "key21": "2v4ev8CqSxWwT42zoPBeJCaCCoKStaRKTqVDYgmnBbpqxcfzrFHcsKu9ARtpVckGvb4tV7MJ6EGoaE2ZVT4EbJ2P",
  "key22": "4N1zNhUDR6mu2vKVjCHy8tSntSQckSvRiXqm6N29NeneuzBSAbAjEGjyQuYZ8tNzq4L6RPNvsfVwD51k2kLiiG8C",
  "key23": "UJ1zpT1oSey2EkhwSN5FZSH1jj2xu6EipJsZdnZqhLQpz8Kk1P9j79xu3oFwBKyitTuHuKEPDgEbyUaKj9JiaPS",
  "key24": "4gqkHFnJNkwxiGGoe2xHhmDn9ZJAP7Ppb6oyidPAtJrgZU9VHYy6DaKKTDzz3aZcSZ7wkkLbW4fdSWYBs1h3o52X",
  "key25": "5ptztq4aubqWsBZzWcdJ6rgyvJTA7T1vHcjLSifcJt4CpzTYn8GptmfwuwJovrD3KzcvZzgVc1PvWF4LGWryr29u",
  "key26": "4b7GnV798GD25wK8bMo6JCrinnTskygfsgwWjwtRkwrbDJ8anHB18sqDDyZraGEhp5Px7NJzkeYtDgw7DTHUhqJa",
  "key27": "2GNqE2q1GnjveCGxCpv4wEBzhJKPFzd5ZK8WdvhHnqh7gNBjWF2qyJkgVmtSzpdErCTQQ73inuDTRy3wYbABdMit",
  "key28": "4z8qUPBjhF4BV9J7fMVezAUC6A3WzKKQa45jZaybTATte2ijCpYufjttLDQkT9KPgXxjVx8prN8uTifi16WiDbKu"
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
