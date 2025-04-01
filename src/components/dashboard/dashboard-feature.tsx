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
    "3vWhjmac7CqePdnH9G9J4MXys4P7VyoJRbuwfo8cbX1YCWVogGKhQ1TrX4Kgz2apRiZh8GsLTnn9JoLjYsmx6sNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3BzDK76YFEWfvWDsrX9L7Efz7xELqY7WgNaqEZtrm4M4vnNE9qVnKNPjFa2bYXdFjA2tWhvMNFN1zMBqm1cKMV",
  "key1": "2CX39JMryeCmFe6nKzkQQZnzXT5svc9tH3S2NFTf1GHiUNg36thtHP72EKwvGgCwNHNrWG6GzxQTzdjQtSqUyCiD",
  "key2": "3RSmKzFvDL9SZmrP24WNjEnj72kujd9DPj8qyvE4gwPUm54RRLe7vm6ZLRyyQHMu2zQ2stvGQSs9uo4aSJZGq9F6",
  "key3": "4EDpwPQPRJu3mEgRvbp7yKF9sZR2X4LdcGhjmmvrBLZbXpYKWRdfiBzBgGoPkFxCE7fvVtnd2UaazktbkCv84rTV",
  "key4": "3ok8geZGai8hMRaWxEaAGiT784XxN2z9h8To6JasuxYu4YaiSaXFLpGZr5prf59GdwgAiVL9ZjtM5bk8zQHRjTPw",
  "key5": "3dtDbp4oPQ5qB6fmTJvBsS858xVGTCcgP1gcJWrudvDC3GrrUEYQzYMp3qANPNKwoQXvohUfdsh2iYS21KTQRMfc",
  "key6": "95SxBPbHyYaDfEdp15wTV14j143HBvmPM82LpEd1dH8axd3WQMNfw7hkodDaQp3i3XX16LL8biM437EywC86eLa",
  "key7": "e6SB7vSVukAYjfRWt9XkSmrm4d5mKq4a2oLFWU5Jjms8mSmcytx17akHz62jUw1NBNcH9M37YZ2mSyhmax3mscU",
  "key8": "2ypFXryBXn5xeoV5RsZRFtEeAyFRAwVRCwUCL6kt9hgA6dRZYk3y5L7P3FguwKnyqSeVMJxXLpK4kuuNVmnjZd6X",
  "key9": "CfPTDkFCi3GAwc1pn2Gd1L5iwSChurLkthEG8PvXQTkiNydhpm2A7jTfHcbEGmhTDa6uDKR9Hp4DnX8DNo9BbFG",
  "key10": "5RiWSRqYcENviC7SCarVuhPo5FfLFeRne4RupXNgZmLNeVEQwZgJKeBTLW8d1uN9hiSPV8X4kXzXN4DEdgFTHbBD",
  "key11": "2bs2GUQXmVkgFCRwpvh4aMguAH1wxodftjwGMJJKJawyqhi6mcD1uY8U3dVBKtuQvnqGc1LdUQKBC9Ee6p6UWX5W",
  "key12": "4bxB3iQCKxt8As4FTUUywQ8inCGVNpKJ8o9WHAeAt11h3cNcWovBgk43M6jAKE2xmm1e4F51K8KCJfH8zvJv1dGK",
  "key13": "5VBFT8X1j33rYPXdRDx6tqgEv9AHYA6H7anJ56hR5RHyHFZpmQUTF44f8w8uYWFmBKwPH3YbBn12qUy7FzF57zgg",
  "key14": "66pY3Ukxysvga5mj9vCS7ti35ez3qx92ipF289bj1Y9KVLBGCg5NHQSk4s4qzuGjhLrSB5xZjpSxymkFxK8gWFZA",
  "key15": "5w2DPgcvWqb2EbMxQJFCnPnpvCjh8ZtEh3YCiEXznBHnexWRKfYu3zsgFi6PknrwrT1AfDL8CywCN6jMmWP9XVBo",
  "key16": "Z46tDH7XSqtm8r4Q6VxKx4Kv2Cd2skkGPEtPdQP55hUgUhZqZsnxV3sA2kw7ThcxPFhMP74qWsazNdcLDssD8JX",
  "key17": "Cm7dfWXBX4HTTavLrpEMSbFxdJaSD6yQKGEogmUrcssVDYXhXiYWmzjPwztjvUSgmfMxid65C1AScJrS5qyyHso",
  "key18": "3eN96FkdXpU4MbHzsRhGuiwsc4UuUNnjTLBGcZNvX4cv6ryFzujzsjTKWLY1VAvuaCSPGAryV7iid3PJHAokcRge",
  "key19": "HbgjmtG89xGWbrJR6Zxqd6SsYvCGphM5M53oAErUVMYLEprnRS1XFkdGyByLUYfKxESzHLDwJzKKe25m3X4WCyQ",
  "key20": "57h1tKtSqtCmJLCKzWDafftoF3xCKxWtxt5TedKZNgMZHWQBhhxZhBE3z2joyM3q8CFKmv3enB661o7qLNxjKeLs",
  "key21": "3XSu5MtgrzMdeRfSjjqjAFyRL3mSaQBJbr5A9Pe1gYouQm3TVRVXxGBrLLXaLMdYoFQ28gBXNhBJgA7Ew2hHaNQq",
  "key22": "2dL2mBdYqYuQTEZwcq3CxEpcdShfvFBhBADuj18Ub1yxjXxDzariHHHXXZrBMHEpMdv732T2Mq8WdMoHvz96UwTA",
  "key23": "iDqiGncyweLcLbdDc3pCZDJX7GF4fQtP35RxSG9S8HUU8pWBqsDMyZDYkQUJNUnTKqmbyqgHVPNecBoEBN8hjnM",
  "key24": "2wv8xtDcFsT4FcQdH3biQaNwpPzqzjL5x56pE5BshQ19YH6cGzdyoB7fmD6M1XkqQzgDeWgL9fZkShRS7frekooy",
  "key25": "66vHd8yM1jA7NzHQRheVX7ibhA1Yz3qijArc5oTLp1zLZ6BhrRMQ23654m9qke1hc1KrmfVzpaM4ahMZyxBMHcrp",
  "key26": "2mjdKmLTVsfPGgjzawMoTF5xR6UTvy5BHYrxhT6W6sKuEoQTfbe9EzhxSwkDSoitKWrpb6JSo12EraymNgxAukUE"
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
