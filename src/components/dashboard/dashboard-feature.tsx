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
    "k2ZgLzz9Q1invPvEYe1FxqyKeNPkJUrur2YeBL3iqnikXhBsApwEDdZSPMSSbqJB5J6HMEtsxKKekXWj7yA4L2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9MsrfW8cMTp3tiGHGVayyfq7K9dC4fNbRQLBtGZR2uRBaS74TUekD3Wh3jCwjGwzaHEDD54wg4UTWuiLxSXwyDe",
  "key1": "2ZEKqScLUqrFjqCQjDjWFKkbjk7wqftnH2cshE1fMXDUsUqSMaA9XuNVNPJgQya3EJvLNbuM2PAh7d7D1pYBaWvh",
  "key2": "ta44WWqunVPvCZtuj1ujqjtktPMQvXQXa7KVvTg31N2cDf6BmLx7MEN32QDoh3Xw7huwnqA4LQztqj9ABWpj38n",
  "key3": "3tehMBmHGaZapzT19sPhTKAhjZSXFhddFKaKtaeFDinqutuz9H7sKJdxgriTqdqSX8MJtqWXPGmPK8MYduuaTvRe",
  "key4": "4CuwAQTyLLJVoEcD34z9GMKuBxtH4rBuvFVVrC4jRkctMsqGeY3mMDHZk3jpo7ZXnTj9ZvPk1HKyt39Tg1L3dSBP",
  "key5": "623bnHa8LR7bxTbYQVk5E5uA7qxEq7XT4VwUywFgN8hFw8mGw56t7poBM2kcd9NkP3WGGqSAjPUwwduPvsRkyGWi",
  "key6": "n2Wx5u16rgUYjhV8bG9yNmyyw8gLCXaqA4Lz7HmAdQrY7Btr6sMdWkdWVRpPc59X3pE1V18BtCWGSPZS4C8kvBN",
  "key7": "TvmURvY1MZDdEVpitfPxLfsNEe87KDEqvnBta9DuiFiVCJmddStEv9GtYNAUYAytm63szRq46jJaHSatiddfzCx",
  "key8": "4re38iX86uttUKxtLJDw6oan3bsXwkNXpzb6mjc6pFgGEG4FSp4f27u7u9CbnvPiDhJ493ZnsFCSQwTUf7mYR6oE",
  "key9": "2hHgHctjAXqT5pLFrA4kJ2nqjR1XTco7kyKQgVi4BJEiP3U7ttMqXe5QQaDLYtgVAwkkTmbEqoqD9wPraGCtgL1C",
  "key10": "4bJTneQL9jvqoFw9xq1poxp95R5UvFyQoTo6exH8R4BsfutNMZvyG5r29LMwiaxumwqaGPAnyPWjojBDgxvGxDLF",
  "key11": "ZJ3dKVsiBkF56CfpgPH2wYCDBWTaAAKu7zMZreBPSnEBLE39BXE5o959ki4dSVNWJXjdDvTaaB4LaojVTnz21ak",
  "key12": "4hMqA6NujKhs7Z6efmMxDkEgB42WvXeMVtL25UibS5kaLoZh84avpDBrVP8N35juPstrDpiGkSJ7mR8JMLA2DP9P",
  "key13": "5inGGpm3FAdg1TbGtGgjBRV3Q4eMQaAjt9KXkLfkGSR4FwETYu3jYFfPK66bvjKf3eJWHcd8jWn1Ax4QLSGh89rx",
  "key14": "3UyMiFD2ex31EmBBjbQH1BarbU99MhQQGn871gtVJ5C4dJz67rVo7MdLrGuSR32iRUWMo2nsMaoYvwc8DG35kvHw",
  "key15": "17QjdJ9VuHi9VtVpSp9LkZKG9988iADpBDmRXuYmeiDeHM9e1n22C2wLF394bZmD6kNpPKfhYd6Weh5Mb2zBn4u",
  "key16": "WRQ5SPiP3W373NBuASAwUi9qd1u9RdJNu7GGGbzcg4WdUgBSWXNaaXt8q2kMg5y9JXrKjsAJNyUBaUDMeuqVueN",
  "key17": "4ZL8tGvGkhacLTxacVQ6b3iTio45rKpScH9dVWKVY9c8A8Gc3Pob9Rp9ZpPyqDSMti6r2rLGfYV7PLcEZ3kR1TwH",
  "key18": "3k4SnsVxXbgEhhehtyMgpovjmPU3oEcu1EYb86RzpDDk13kbi5ZBgxFThRHeAVmnMwv1cH8Qj34DzrKbmzeRX9Q1",
  "key19": "4AS9bGLZZb2BhjwoU4TPubcMPBjhSVug7q9Y9Votnk8oJpJ44HdghugpaD1ovZJoSVCNxwAdEua6hPNoteNMC82H",
  "key20": "4fYXpd4DFbTuhMzjSsS7GV8MUvkEJJWsM2anTDqpdeAaqvd3QAn2zkCTnCAZs3PQ7aiszcnpNb71nFx267iFWzfC",
  "key21": "3dTQKQZ7GcTzxPLQpTANitfkr1DB8c28Bry5oJ2ngHctyMdUzyQcZyN3HhNu4FTnQ1ee52QfMCDWrVC58NkkMUGP",
  "key22": "2wvCBCHxBY1HoXyiwRQYsQP2aHUFKkgCJofZSG9b1PmzCRsqSepznPijwcqPCkwMEmQjiL125Y8AmFnqkTsr11NB",
  "key23": "5ft62sSrhtPZx3TfYtwXHKFvsWxTX24PMJYVgjh6k3UK47Kb9J5FtLbvbNPy8KX5A22tB1mSrHn9C31vdL7KZP8B",
  "key24": "66FaUj4PYPo3FTzd4nqJaaaC4ZKu9BYJUrSDTgyQ6GcLT2diLzUfG4vxRwcpKsiGbds84ZpjWKGzry5ShnnEbES9",
  "key25": "2tgTM42q2zCFvRHXaFediSSVGM4v5huZvNqnfUhgeET5HtfjPMVnkjA92GtYfdFZ38uX4bCv3nMU5PnjucDXt1pq",
  "key26": "2bJbwX45pjJGQQuPJjZ2KGLvrc1HcKr6t1JXVETbK3oUU3diqPBuJXPg6N5Y4Gq5MvZ1MK3YQo31YBXuiKJF8YUT",
  "key27": "2FSmCiSX7QeUw7fu13C2nvEecQCfxFERXpLxA5tusZ83XtXykwbYqksrCkGtHaiecUjAn575s1RSupRR5v5tWord",
  "key28": "2PE79xNNbXnwSwTRif3b3ECXwV4RuzpYHsaRLGDyApb7xojUWa2hG6AreniEPn2dJJch5t5PkehPxRPpdPhPAWZ9",
  "key29": "5FDfnGQaDaNj6vFKzzoBY2y485nRCqLRB8CXsJEMJ7qe3mBZEJD8nr5SqwvJuUd6jpNrCKcC1cmVZpEm8wvhhMS",
  "key30": "28gBErR1ofL55RsaheFwFR5mFqvwJv3rpjJWvbiyvUaMfsPC3PokA3w3msRgjt5KZ5wCdv1SUgqzVtAEXmPkE4Cj",
  "key31": "2GRfX9jmhhy4tW6WW8rRZv2Y4emxKfFH6eWLJCPtRB4zFM5fVXgKjQnVLoQjQm7vcNa1o93gzjNVNf5kKVZWkEA5",
  "key32": "2ruNjLLDTVukoA9pFDfhPEH8NzVSUoPFqsA4co6EdduAGGiD8Au1fxqa79HzD334WGZAdp4bj1cPpX1xGNoDejrj",
  "key33": "2kAYk5m2ijWZx4FdYyvwUXpx7i5FxiiiDqLj6vtSpZozDn8WLtsyzhHNfZEbV83Auor5a4CwzjB7psYLcnD6F44k",
  "key34": "21vC3CXA7XPPgLgtSn1Uh4vTzy3onN6oSQoqj7wWSXGfvu2L2fjCu2d2NxavFP66p3gCgaRR3jytw6HtdmvJdyJQ"
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
