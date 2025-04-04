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
    "4DgsXgiQFdtMRD1pPTzvCE2iMopMcgMJUPKY2iEhu9yEk6cNX9rXgkAr82ujxP3sQ57gVq76ehwS1xFhHnC2L63i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XU7BWeLSi4JoowHcmCqy4ZU8tPZ8jK4m1VTwJ6fq5vGGFUHw6NQQtnrurYENowvcztj1FMbM6FnZxaKcLUeMwgX",
  "key1": "2bze5A1FULcZUpwh3fZwXUAAx2hHds5YdmaYufjSQ2fU2YdZos6i5xWx33tkHUZGbhFNvoQsnsptZzLisLDnuGuq",
  "key2": "3gUt4MYM48YfB35MoPhSpjnD2sTKhtTd9aphuybuUk7HsBCCrCDYQ3itN49gqatTPefnxnFS8mEx9KmkW2H5c2PF",
  "key3": "vTo68mQ1hRgQC2aMGvzP6ax3WLVzo6h8ikPm2ueutX8iSMUrHj64vEUntELisidKpUhygsW3WYSMWNbPyDDE6SU",
  "key4": "4734VYUgaBx2m2QqUYh6wt7mdC5G9QvEwKXhkeUfXDcVrYjQDwWZjPJ7TwxS6kNsevbAL6aeGQnvNnz6QDxw2wBp",
  "key5": "61MvaDZq2Wa9ezDbuuhfkHgGDEtbwm6emsTmFVwZgBvWC7Te1m4gcPyFZeBYTpSnK9FQjrvDQVTvEKKgHC3pNhso",
  "key6": "399Y733dpS5Q7KGfH5pZPFjcPgST7t5VE7GpFrPjuJzM9GBrJFA4VUMmsWQP7jEuJVioeJgNmrrzPKNB1gdxtgxw",
  "key7": "42gPHPoiJUTCbh9damRQmSrsBvSBfgrop7PtgtMTmFheWSYrpotH6iPQ6cwMsQjwkgYpmJ92j1Y5fTchG3QJELX9",
  "key8": "3AHHGLoXcks8rj6hDmzbp43YEAZBtVQKRoPX9r5yTm1CXryRyB4aydMDbjBvPPf8XfEFYhL5mDEZmgQgWooT9jK9",
  "key9": "2mSqgru9NevgaLFve8zYhpEAqDC7R8fMhkYPkBFzXAPQhuhbKPRGaK7RQvRh86r1okjL7iWBmu6n9PHFBAevYGsw",
  "key10": "Av6LvAaiEw8pG4fmNir5ntwN8GCzid8WretUvPSqeBT1jvcBukZ5MNJNNniLs56VfLMuYPEKDT3eN1AcnZoTeYW",
  "key11": "5DaNdRpD8YMpMrvqnHCqpQaUXtE7AhHQwoSoWMCbj5DuT3DQQ6j56XGJZX9rmMUtG8EjQJj5KfbC5XcDpgtW7fQD",
  "key12": "3kw3eTnA9TThtLSHpcyGV6RY5Fiq2HjCULZb9Pvu1qtiCAifPx5fkcS2otugCtmqKenmJ1hKjCQHxoobtkREuKV2",
  "key13": "3hFoGcmthAYbfCKNNjDf4HHsfXPeZzCeYPrT7Xw4iEJsSQgDorWNyHcNhnpmp2SCshWLaLatrAwLnogZNJVC4oe3",
  "key14": "4PcPiejRs3U2cxMM6GoAoMpGjkWZ9uk3oYiKNst6DWDUHRHKfsfBGkgJSTFtoCqcz9ouSP6nLcHCSjnum4CY2YSV",
  "key15": "yxdPpDYJKDWTMwXygsQDUaYXrUD1AX945z9YiTFRPj9JmE62c8PMXRqyn2N2FqB3KeqBS7EKhiBVFJjk6QnQj3E",
  "key16": "4THdgAm1Fk1GawAoLwMPT2FLdosqSDqKWPMwFsKVvY5ad2BXBwpRB9Qga7BSh8JpMerL3WRvquYVVsDWwDM61u85",
  "key17": "2hJDDxYbiEWGbw4XcnBpqki6tbYMScu36Pn1RmUP7eM9rNQDVUbizMLKeEuoR76eh6KUVUHFRjk8pJCjWBsu8Tta",
  "key18": "2hgXAAi6ZD59h1Zcjeaenzpgu2eW6pZs4bnNrdKRXuMHwCzGhM5a7VEsmgf7fgdfeBaG5WV65eDrTSVNKQTUZT5y",
  "key19": "32xgmwC26HCoHeSZe8uh4GJoajnaKMG6ZpDbDMfzCzgoYrFi4DhxmPeM9w2XwxTAuvi7HkgUwyYn11nWchuKd3g5",
  "key20": "xF839ggd58mb7NkZT15NB9Rrb9zFAJaMBhgaeZ772N9phpL8B8cSWWWx17AkAzvwjrMdqDjDzcjS2cXMDt7vNve",
  "key21": "34dwcx5zLkRoVgHvrToL7FixW4NParY6vLiKiP9Sh7XXo1z5dg2ZNUfiwhP6ERGkT1vkLQjQVUP7AUDammgSYu7q",
  "key22": "TFdZ9qkBvrtW5MwvvpKxPSUu9sWXrqDCEV5LUhs8TbjwP39oc2FTHtgpgZhTRCRstzbvyceAcD9c4S6eVThXH9g",
  "key23": "48DQ6HGTkDDnnWo8tctPQdWgDzJYo1YeD16X4RpXVikkQBhwCasXDzZXdbjepQUYr4i32BJHoZ3n4H9ssDR8KSFX",
  "key24": "53FnB2B4eDCy8hhbjgbEmafqUJYQccMbQPJZvoGuYnHYr5Jvko3kTog9m9wyh2oYfRAuVMDuLdvee57SnQNQaSQV",
  "key25": "2rWY6b79P8RBGtjaV6ux6MoyEDvNbPSvbR2QPEzp5seYvQ7wzM778xysrYiPDemVrBE7jNfPPg3NaC2oXAL9PRUE",
  "key26": "2a85GN4oVsgHHtR2emavPWyNKa8yCbVpX88KQ2s7tGi5xUvGwK6Bdg2s9UEeNfJzEz8YJZeoiPBpGQTFnc6AZwuj",
  "key27": "27eGqCcVxeF9C9yMnqqAZPYz8XMWjQbWAykfct4irJaSWm9VS3Wqw1KuxqnbrZuHmGbJ5oKPq2k4pSBWNN9HGuQ3"
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
