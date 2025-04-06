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
    "42euioyivYWPbte2E7eN8SYLTUsb98vx3rSojFN2eid45u4nGJ9RsmskxoHcnFyaULrbjS23GSgyjdtfKzS2evGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h4DtDWAsWMpPM4P41JBHnSehJBnfUXbcL5bPcyxB3dnu6xfz1hpPowZPrnRm2vwVXiaQz1GLDNehjzYxuW6pkaN",
  "key1": "SEtdu7eKDbVWqDga9itQjC977Ay7XyVKMXLyD9g2NuQGue6aaWNnuxgAt4EeC11aRpSFms3fEm48GMuNfhwtdtt",
  "key2": "42t6yKjHgP2rBrHd88rn3qBjfkeneDXsDSETCjUgM6jHK1DaETji8q1bJxNMp98J3WjFDryKDUPikP1dckaYg6JJ",
  "key3": "wqkPpomJ9XMNTeUYkaDjkWpRtQjwq4kjTNHYPtLY7Y74XQaftagh3jy6KZ9yCSQ7GKop7JuJnYeSdZJLR8Mqqi3",
  "key4": "5T4QMSW2Mcwru7hgoqKZe4S1M8E3Fy7EHTt6rSkkLFgWHs756d2aEfeiPEs1yb9iYfspN9cc9YMSvxD9DZMT6DcH",
  "key5": "62bv5NJF8p5CCcFvpcVokngvarWfGYy5ydgNETHDmqqmK3GA6WqY22n3nTJy4QUUfKADUtv5KaNwKKa99ucwvVEp",
  "key6": "2F6yuf1e6dm4drsbEaELLPPhYd7Z1qqQrBrq9Zt52uRi361sgQePxQSg9XTH6RPy54RKwEKFFNyoT6nR5m6G4BeU",
  "key7": "51Sqbc3dXRCHJkfckfcKiwJmuUnS3xAQYbCwAoTqdbFnyasZEzyPAi1mtXvis92xAEorqjpQK8bztr6dTwWjDgvi",
  "key8": "4xePyWgLjnbndUgG22joWzyBHWmymfSKs1QNwy179Y2YBatmctMTMDsSgXLja3h85zvw5Kb25STEz3jxJ1ZTiknr",
  "key9": "5KBDV5oQ7NZ7WpYoxkDvn4MUtAFVdt1AAznkxYM9Vjqt99W9xT9cjWRCrR8ZKBiMufuVj8FCbrfio5ECAuZZMXmE",
  "key10": "4p26on21H5SKeXXpJULpqhesRLVQeMzxbkx24b8DYMfzf5GzzRnNYAbFRrspZCTyENRZRwHoT84PVffebPjcm8ja",
  "key11": "5wiXeBzDywidbKevAraAm7mwy9mijzfHKPm4TVKLNd77oo7wNDisL8DM3arxa4TZ38rHLx3NnrwjnMVDV6ZfR3T8",
  "key12": "4UoBtCZSTxRHm6A11QPsHGHsS6CH44XkxJTmPy8mrkzWPbFpeWGGXtVFt2afMMZqGxarwLWzetViM6YK1RwZ6tYK",
  "key13": "59t1iBfdEmprwUZqygxTGxkoYf3g3WVbhhBSyV38fr8YeKY3nW2Z3YEG9owTf2WHMabVXuYP83QYpZKafFuXgiX3",
  "key14": "3s86uZ2oPAYWTt7D46K9H4xdiURi6v5YGtxaZqG4Dhj8Qvop6462GAPYNNDUCeUZRSyFf3YQQuRFAiCam3rLJnzk",
  "key15": "4XRed4JecA2dBc1fAKd8GpDKpuyQLw9rNwVLpLVzHHsNQDD68FLXf5ugcdnd1uCu7EKMkG3EaGnos99KEwc9RcDA",
  "key16": "673WJj6MkmabNfmouQ9gLesjdj6HuWHZG6nZmVBHjtjC5cddhTxgT35ZXjYywvJqJdPXZyFxG8vZi1kZCohy6SNZ",
  "key17": "4Fu7z5aUaXwcLazS2iDEkrtT98h4JgjMB56hJ9hqZLzEBH1L58pGK344cRDRJKNC5EsaEPcpPPv672jodrUNg18x",
  "key18": "4gMVoHXM3mmuMGfvRKaUhgskCmjT1fCq8rBtGvHxifwwnKhPKQEx1dGrWPwSRHeG6E3QnBhwybaEYrioPPce6mgX",
  "key19": "45QREa2cst17WfHs4vwnZNdjTMwirGkXGBdgiweXystGRrUeoVz9QsXX3QW3cLkANycJPdMuo9nBtPceCyD7yJKD",
  "key20": "5wnP3EeYZfGfQyWDRab1WEmptjzNvbwdZNabuomjmZmUq4giHpweKdogF6eJf3wNorzb5wvL1odhL5wBKNWgKxAV",
  "key21": "45rfFr28hLb9aKkpxYTP8TJFZFZ3ByNdzqoQMPgiGHh9PFnrdiXR1wDKCeT3Ym6gG4ozvDhg1Mi2aEiZ45s4Vo7R",
  "key22": "3zjPLxNQuxfnTd6yBAS2HK5sdKa1P6XoFSWGEmXkCBH9V5bXRC3v81yHxuPTLsaYY58pU9HZL68h7LcLkuqtHpAA",
  "key23": "3iv94m7YSvzpNtD7WVmXpRZ1ckDysX8eqEY3yQGVnJiT8L8uiWdYekSt5raJ8dnpmPV3s4GK6Mhk2922kyixpqMp",
  "key24": "5cTyMLqQRr4BYmd3TWhf6HG59TNGAswEjgELpoSKDUGX5tuoovAHU1SPj7QSf1EezacswXchKkS79VXddVFpFESj",
  "key25": "28wkn4NwkybwKvJHikruCBufK2pUR72hMpFNLC9jy438pYVvmEiRsoXK11LL5yXpsG8QLphVJEnyiSkqFXmKeW8P",
  "key26": "2oq2zix3EkZpmdMNiwWnekMe5dBymtrAiQ7d9zvjkGAqKtaSZJUKScRwMoku2jBQkA9KET4u193fy7kHdBUtEBUt",
  "key27": "5Wur3zA7kJZQ2JGn4oo9g8G2NdodFpAQqSsCLDxCURMrrZwt1Q1Hy2F5LTNjenqJQtCrr9eWwVsgCPsK9c4NR9AJ",
  "key28": "4iFWxwcibR3uY7E98fpW5upZwjFGDVuotCZyLyHX8TeTwJjx4PVDaT5BgKSNBdfyr5mA7rva865LZ5yujTyAAEfx",
  "key29": "31wCK19pWeqg6RwzN2uyCTe9pYWestSnQ3SJvKm9yt34eJ1foAmAhuEwWogjGBpAPvjA5CF3RLd3JeCVA3W4Lo7W",
  "key30": "5Xs2ovs1Fu8N5zdQo6SBkAT4YG57kTy2RfYU2VbrUji3MohpBKWhqtJ9UqUVfnhnbgr5zfLj4Ft2KuUKcNV1cgD2",
  "key31": "3QBkrWpCWhAoE6QnoAGrGAWdgf6JcoYqhPCfX1B5r1d62XBKuRywti3Cx1oezvQ3BGzd91JJHynerC1t56a9ZgdF",
  "key32": "i9LM6F9kUJMduyMtNKFzz9d6fcVAtKMCWsgVxFDKq1F9bFHJstDbXcWgKBPpHsboDi35MKufT2RUXaHdAKATLHn",
  "key33": "4dyLjjyiBQZzyE9LNPdjRiSs9cKPH28YKshJpm3q758jLPFMdsHhzY83amAm1rxGJLLNRC4SJbD3ypnGfGRP4LgH",
  "key34": "4oJC3sqWDjXR2hsaZc42sURVmuMqrW155tzVzQAMiVYHYhQCJsNga4uAu3FbS6vepoBEs4Bju66oc3Yt7QUTCSg9",
  "key35": "YkSYU2Caj7EmeqYgDQ2RhbQiSWWAzkUfzabSFUZtnHvGNYVvJSEq2fyhr1qD2agMcU5YKodsYG6HvH8bbHZ5yKn"
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
