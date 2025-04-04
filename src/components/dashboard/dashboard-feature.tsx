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
    "4n4BctcsyxafWKQUKsCubgCmihHRbipWLr9mtjk94tDjG6FWMrDG9c5TK3p9XiY7xwc3BFeW5Xzwwc18oSasEyzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yoRvf4mwwtPpKtFjRJGqRnUsy29FixzXEcd7j48MRjRMJPL1juHivxM6v7wsGE81PuZB358GRpMk19qJ6KSUnwk",
  "key1": "2z4kQunMoV2Pci7vedn8yFejSvJkmkXBZoeyYDW5pvqfL4Btjeyrmi4b489fCQ3xK9dPLsL9hcWvbeWPvJkCtT7d",
  "key2": "2stGxWdfdocLcgLEQXjWV2QBbeagor74onPQ9afZ3uVycBAJJJfNjdkByfKj9J7w43ha9jNg2GRVahQRg2UDBrmf",
  "key3": "3Kizektcgf6mmWYyYG2Hf3H2NmRF5ETLLj2jhz4isfxytWkuM3mgP7weXSn7BzDczwLFGujHfo7GuKifTpvyrbrf",
  "key4": "2L2AMKycM5vCsZ26eE5Ah69T1N1oPn3atoWqAQ6z6hAn6Cgg2yYnp3nWzsosrm6uqwvYbZqvZoUAXHYk3fRMK3Rs",
  "key5": "57MeN3bkKc9WsAzi9UKRUtkCHmmSuVnzUdgyRLAVxeEXxJDgh9wu3GnaPCShnLdE8KwZPtaoYWNjzJXXjZYvdj99",
  "key6": "3VvFWquu4wGskPzMFrxfYgzmxC73i5AapwZbBTpuj6mdxUTTBipwW5b5j1YdvU7pXBbQYfhXHnWwVziXy9EHeXVJ",
  "key7": "2w5fZX2v31dEqnZisCy7EY7jb8nDwWwjZKBJaN22cgrooUpt2vg3gNmr4zSkRATGLhxSWeDXKPeKxjidCdmaqMzC",
  "key8": "KYQTnQxFVZPEbGk4sk8z69xc1x57LvjmZabdMy3wnDMpjpXEqEDhPusREJ9BuCsgkW2Qm76bXeGEjHiGYKFfRrY",
  "key9": "zAmgus1N1YwB2ar9WvHwq8kdAVLHnF7RRaNYxZzA8s5scaReEmwCopSx6boFaj9tuJVXhvkkqf3yY7q9joHRs31",
  "key10": "4344DdbJeuYNHvSwJUdFqXGAJmKb8YSYrKjPeK88SddYLyLcF2AUPBRxsMiCJKRuFoDHiRWCcS5JaTA1dQgHcFoE",
  "key11": "3vKBYffXuoqzzm1cYRi53pCo4YFnKQ5SZfCwUeteFKduPb6BnNh7QDingPCuehMbQSbA2qUyV1bosmk4DWymPgtr",
  "key12": "5urDyNtUMzN6jfqtxsuurmsWVs4KXFctbD2jUEWE25z8KQGmmEH4YW3J73fkLVm2by7k6ia2yGLA2vTiN1PGfmoF",
  "key13": "5wUMbQEwxFmjWaJE8CVBLPpQowX52YjX3MEVutaLukkp48qu7A97gr5rkeWyRzHXpuQeCzmjLJcxCYii4zyqUJHz",
  "key14": "4u2y7a14xWDcRYTyNChETW3iaWY4y2urFRbJspWaSMh6a6yarTvf6zGFkaySnQw9DUDYcdyAMiwRnG81VPfwJGgy",
  "key15": "2focxdkUMLVqPLN3k9Sdy3Lvf7XtcVPL3azJsyHc9yZW1gbc7oZ37ETKBXSmfNNn9eZMaCVM34HLi5E7hrfCgLF7",
  "key16": "2CS5isDSQDsyrbrVfg2ktA1Rou4RaeZny1hUHgFQ4R1aqvb1oHungPKzG2PTrEuFpZy4ZoqqTT6qf23iQqrE1EpD",
  "key17": "2eAb3WJM9cNoXWiuKNtdrWfJZKs2DhR5ApwFu4jFaVUB42oheaCs9mJJRsXGg1qQDs4dWhtfWYBBF9zTY9Vo6se7",
  "key18": "5bnQbnU3Qyms6fAq9bbwyHvC91enkcs7oCmsESKETGYbHauRNhTQu19Zg378swoKCTq48gKJDS4gq6pwcFMfYMPg",
  "key19": "2eXr9eBqQakGVs4ZEv84biZKyUkUAPWiAiXmrwzABgqfxoRBqo4opB6jq99HZnY9SLKeYg363r32a4jHCxrpmzui",
  "key20": "5VsxmPvYY6WGm3geiDaYcLR3ZLwtdCGzJ5nYoDvVsDUPUGj2fBHn16PQAHLQGhaec6g33yvfBg1yFvJJuZ75JB1S",
  "key21": "5pYfqHg13iPExvioyd9S6RqCRJMbvVuCxYEhsPXvqVi4QSw4mh9X6U5nTx4DKWKFndoSpR4tZJLq11tdzj5yZnY1",
  "key22": "4DsXvWXsuHVjNwP3sX4NgdUhxRXg5XrqVyAkGTAEt19nQe9rnz9ejpUvC6UpqzCaCntTSAW1QQooGF3YKm5Uda1D",
  "key23": "3V751RsD55Uk68Vv5x6LP52jAJvG1gGrL78PQSHa8QUWtXrmv1GRtVfArWgYE9pC2ccQrkSc3c8o3fyUZji7FFhf",
  "key24": "3NdkeGP5vY9qvbJR2B8Q5EHYD1nbAE5HybVNDCtN4u7SMbMeeK8k7YK5M7pDShsXhLtfpqDBodWPiWENXWeKSsKk",
  "key25": "4fVXfbzRC2kTJWT3xsXzoPgwJ3PXxrWBT2YnPXUsm233ZXsTE97YgMn94oxk3DYqAz1NjrQwxP5gXykVQ9uJSGJg",
  "key26": "2LCyCH9Q5VD1iBNViiejuafyLKmeK4bqKM9zDPY1w3vwJh6fpLH4dpzaxgScKSK9T3mk5VRYRmfhEbg6XhqJLVcR",
  "key27": "49qbsUhjJy3WRdrmPt6J8782JN9WBFapEod9TyhY3fsDsBFuz9zrFhkYFCgg8D3sG8qdRdDKS5GWWWDsqnLhQxLd",
  "key28": "2xdTGWZ74TZvgzxSpCDyRKeFZzrcJAzk6EJLKhUUkJqgX1G7dGdKdZWvZra3962HNLh9YmB2xtyneRqcSf1y1WAX",
  "key29": "3SMNnxvuB7PWyjEksoA4TDcAdKH5KvuYNh8HxakHNdh7e3yPmzRuHYTZbkF9hzb4ALtpHGtEJ1GFsJkTCgwcFpyk"
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
