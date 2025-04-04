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
    "5RisLQnfjEZGv9Bf6ScVTqMVkpYsKqkyf2yawbMwrV1pf7bfcPoxHSEAXRC2dH89WLvismqT2NpsToCGXhvWkp23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMdUBrA6PCVNUdtzM4dfkvuYqsn7sgzXd88L4mtm2DUqLUBxzqaHzsF9372fYMaUYJMednHGiFgNVvCQmeNpHbb",
  "key1": "4f6GhybNtwErWySGLw9y7LgZ4BzLCHbwEE3xGuKGNpKVX1uMHns1aaWmQXzsmgHVGsMndgE8Zno3orqBPCpq4fAj",
  "key2": "4MjKTbZx74g8XeUt7rouHFJTgDi91YJwpDZPYgqTua4SUUg8EVxYiaTgNp7gXYsviqpA1vwfDiKZdx4zEhv7h5fS",
  "key3": "28jhmbmJ4LP1jrFJpeKqS2Wn4gTQYNfKeNPRbaHpxQ9kxbHHVv5phaoXaE1AyQNr3MGLFLRND4MayNrdQUVJSYHJ",
  "key4": "3J1SezsFcXcQZjtkUWGVk9Xh27uCmTithVhC5BmK9d5kuEohScHQ83HXkzNfcrsR3XLsKuCbyHYSQcTuHhPfcFvC",
  "key5": "5f6i2GtvAKVjdnQc5AP2R6M7Ly4xiPrrDgyskJnAvKAXSxoJHyQgdQwPV4gGo8pkYiZvozmGvKVg6RvAEeyvMY6K",
  "key6": "pZnaDeKJwD5rwkN5wEra5dEgdGNZCCz7YTxF1oCf7Uc6w574W6vX3WfJ8fZoshQxmPJkwMqucuDjtminWAqNU4T",
  "key7": "RDGNw5aCBmtgPb5ja6CnnPae4UKSfabG4Bg8mLDPsJdR5Zbuu1UsHe9rgk7m9h1eLDntSPfgM1VQ3oBoGg85Ce1",
  "key8": "5AdN5uhzn8AvRcRBHyGL1N7qhA5pXfNx5xAYiWo4TpGsGWWLD9nng7AbeNq7YiAYgZ888shfTqAYj6cYgi5KpT2H",
  "key9": "52pFQ37LhjuFWk2en5Ya5jVPJTNYLBPjNd79cn418DsE4KG2V2dPu38Kghqhk1HXYyazXKSvWgBETAeoyaYPx2XR",
  "key10": "5XQJtAgut5wYiciJtEyCGcVYWxQkMXxpyLPqnk5Usi1RxpfRC1yCj3j4jXUcFcxH68hpPAVWS8tiPVZ8WsjYHZgo",
  "key11": "3Pyf16CJPAKCULNYzFGMADZxVhLZrp9MpFzxjM8w9V2cGKeCHTQC2r36m5n532ny4Q4kQEA5Sgc6Fdf6Cx4pKNyG",
  "key12": "4gG8q1AjeWY49QJs9BNhNou8mb8T8PVqVfhFxJEVvnDrUnsPP5sMVDyVhRho8G8cBZBJWpCgeapVGDS637YijgiM",
  "key13": "T1tMESYnc5PMvDntD7W8Ea6y4YCSxAPc3E6W3ZMaJduGN1duBC6W5iV2NTFiwQ4Y2j9P281MWzt8yuFLYuaymwV",
  "key14": "4WfJvXjkqZyecivXFkCzUbjHTkwW16ZuTrKv2V6hybHgjMAMtjVoG5pMCyxtJrvBiQrpKEk6dkahmrX1RDedruZa",
  "key15": "bN7nTYHegQcmDNvp4Wh8AAiu3KYZJssxAvKH7af3BW1SYskBwTadjLjbNzmRVjoum3B6TyRrUV3yzVJHZKRbQ7p",
  "key16": "2SHTvomiGYVDjipDEHvB7MN8S9DRzJXVr1ncCyEidrLJpw2SATDYyGayugqS7miLbWVCK7ScWxP6f4azEjN9pcyz",
  "key17": "DVdb4BWPz1qbA8DxriLr4HLGFZ9pk1SCHRU2t2vjHMeVpaS1msZ1apE97s1eC6tZu38W2fDoqByTK27N4uzr8MC",
  "key18": "5cVwbfQLxSuR78WQ6S2uMDrhgDXjB3n89fbv3X6aFVym4NpTACgsQvBNcgvwDdtsb3LKxCLPer7b25uumHCs2SBq",
  "key19": "3fzZSraM1KFcnrrZQVHHGSrh5CKnfTa891edtzpaLxBjUYfFSFfuYEtyLDT5VyUUTqQjFn2S5X3dbS96feZo6bdc",
  "key20": "27PiaQtwMmASNijGN5YyRsgeKtmUVjZUpA1YN48CQ4NDTMg9PGbyLAQikHEvd77C6B6bQKppFQZWDf1tWqTWYPBr",
  "key21": "2ULSqaHfcSmFXUYdGGypd4wgkz4X8WN9HuabZ2msFRjmbBq1PGGnuQvnNp4rjJUXoznagb7a5XhuLQDDv5gcB7V5",
  "key22": "4iTzQ5uXsrWT8ZMD99FwELVYkLNuGL2jUGt3LrvQqWHGPx4Qm3GLX4yfYm7aAramZ3JzmshBBTSG2pERxQNBBmyn",
  "key23": "5rfuo8pVoP8uZmwCKwKT2AYrufhnrKPeqZjV56P7gDkaq2h9cAVMGfQLzp3aWHGroA1efTLTB1qqDfQKccWCYdfC",
  "key24": "2tYojq2i3ooVU5eyGXhmYC5SZwMcy9TwpEfz6uYCkf5t65SgSvivj6Dnz8wQC6sFJhm1wB2FENkYkT9VFicUhxGp",
  "key25": "4KziBrQ4NVeTKtCFjXb5u5yX9kgz9AmC5KtVo6ygLx5ZW84ECN3aKL4Dq3sgwWDhxLEsZRvFR1aGyNF6aNG9VGHH"
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
