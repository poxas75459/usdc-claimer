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
    "3opSXpj1VhmVis8VVquxKy2PhGfyPYtcmTunTYpXXwaC97cpt4NUhAuyczTDVHiL41AbZajnXLwkk73NuL5xkTju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JkKLTUi5rjNkH22C4ws38276HaCvXocuDH9aughSCz22psTsYEAEnbnGpicVuKLUPZXjafuahPJeJ8aMNQKwVEU",
  "key1": "4G1rrp6Tw1rEqxZotnfSFtFW5DrAenJJEHdCLSdibQL71s56b2kNwHvB44sK4cYMbvUYKNj2F6upLfQPhrNiE3dT",
  "key2": "5X4tt73KQUTDaNbdVaNb73Bbas9JgKkiR9ZwW5kpsTGpezuG3UB9kLUePTSzVW4K54fVFH6Jztsp4M1zLuBKYAst",
  "key3": "4r7rzJm3tSjaUC7U8zmSj9aQBjtUDhCkRAbMzxXmprpwDHdhpTWx41Jczqvxdv8TatSxo6xLp5BReTYWSscn6TSm",
  "key4": "gWEVdQqtgNSeJ7j9pCqbzJDRFKNfNVCGCtcFToh58C5WwkPscnRzHa8Z8VxxfYg4TZ3ytS1SYgoeT8MTfPLy5kK",
  "key5": "3V4d1TKSy2CU7jCCazxH1CHvpJUkkz5KgarWWsMH31P4ZiYyqdiJHpwfNZWmShaCvBeMjDs9CCNKRGxmi3K6kPR7",
  "key6": "66yYFhaVgRbgELCkUJxzdrhdrF5gZGdwcC5GEbqjLmkAZHJ7kWoD5domvibMgGTx6AACJKZ2wXGzdeqxvj7fVyn5",
  "key7": "5c9VFFLHQ3yHp36ysrnKVWGk4ZHGstW4uYYevuE5BEwSYXWeJQXocrSiAMKeEp3NNPkojL1hLHDZVNMuBnVSEa79",
  "key8": "5pUee83igNfsxAQQD9nk4QCNxMvVo7AZwmVx68GQ9oRnLadRqRPhdd6d4cYwKz4Qy6gWkXi6FPpLPLoVLdqDa9U9",
  "key9": "368p7oMy9QHfDMxQXUaNnTEF5RUPgojR2KSxhmLNJdBk82fMCNk1CTqnBdTTjnJS3YXugVgEviWM1Fq75h7eMxPk",
  "key10": "4zwEZMPULB6EGrZ5C7cXqPWcbUXPWUhLQBqs5Z71ALtBdxcDTt5ZRsXaeSfn1k4X8qukHEn1nysbospy3XAHL7vg",
  "key11": "4oZJpJS5AMFqidepcEVDBmani3jeC34dgryKvo3zzApyDe2nxmUGkFwfunoTd2MPuKaKJ4QwkXKeXN58MoNkDghd",
  "key12": "2uo4Xzdq3RrPvPoK56CQxR4o24oStqziJsZouN9CjEWvDmaXtJuEKscFT5VuwuneB7rcMiPS91XvThsgtqgoGJus",
  "key13": "3UH2xkXb2jJt6VX7gEU7jhYmyqDFqEk37nFJhfEaJEPzG7KH2VcNBoMLB6rAedVNdnBeRJbzcE1KFXcQBwyqnBkQ",
  "key14": "5KgTXxxAi2xyGSMsdpAptidpNX6VRtDVofREYFnP9FXZiXPykwUrfX8RCrbGxwjUUUVxJKMkzrHFygv61UL8pdi",
  "key15": "27eu6zVz6DE8yFjaU5A9Tdoy8V4e2kEJVWzB7YgEwEE21aCn7sTp8hKMf12e2iDJ8vXi1dA3SBQNuQuN1Z3542Jx",
  "key16": "YKCC8sdqS9y2z5wh1VCRdVeFpuhysbc3LS4QxzGQn1h8NGmrfZDKEPGrMPwxV2yrm7vCydDdjG7NBrsCnvwJqTb",
  "key17": "5zF4qwUDxPGohMFf3JJMmLpoQWe1cafCNMcX4C6HCKy5pKpHNZowQYYJmKRuMAx8aWK5kP16RJwefnsW8QSSicwj",
  "key18": "3HnCKFZAxFk2qbKyHtFPDKeQfoNUtQKYki5k2SB62qLayFiqF7C3HarvXaF5X2gtyqsMXFvNgbtwZtA4c1aYkb7A",
  "key19": "tEzHLxRYpxbRM37HusEqrzRWPz1M6yrjAS7zu3aV9keDKdrKqLjukRCSZoEP2ZuqLERWw27ekRr3h4cZbXjUBQC",
  "key20": "4tq3QVDDWY5dasurViWC4azeJEE9rS1rap64vSVo4e3Fv8UZLcyVNDeVQxTGWSXk3EeRJKRAj6o3kuY11Rbku9B3",
  "key21": "5sUiLe2pd7Xreqf6teidXTZUMF7cvG49C822o7PvedaXhmJJDt8arePd2jNPkWirNvqkCnBVuxcG379bQmAEtRTz",
  "key22": "3chDaRZJToTYSay82XyqBHk33eFqCj9uuUwvFAKfSbFHUnmmrE9dR8L8MCEP18tqr4wCNwABDj557jwWVSQKnwKV",
  "key23": "GaAFjhFXC26PsYSr3wHVgnCRR2SVbDScjmqiT9htgPXUETe74e8SzTxaGGCkS6RDL4XHZFWHDLD2KPT5zv5MR1E",
  "key24": "4MF8xDCqnnLv3PNz1EFHNJrNfHB7vj6GfhoRYGMfCN1CktYyja1L51SwNZZAJVhJ4hfobMFD5kadB3nSAznpGGFi",
  "key25": "2eBa5XHgJuS4E1WWydSN3KLwNYK5Ywnc7NuoKxdgch2PtByURJjLaofNQisCq9ZG57aQ1rwjr6wNmhNWMFxtf45Q",
  "key26": "3X4t3V6wwXW9fksafmvdY6REMgiaLrYVZuAsDMUH6881TrJ38LhumzqMAGy8Scjnf231r2X1t2sLuAcnrfZo569f"
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
