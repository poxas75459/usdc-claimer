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
    "4q8XtjUWtvnzC6Dwgp2j3ApZDD23SjsPFoWvdJmupgqbji55L9Cra9Xy8DVVdXN8Xy5m19ZNQm4S1w7JDbFJrPKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqXZnqp11Rmoa3fuFxkoSVPWtdtAw1UcvQfmh7iBEgeM6nyJuqjf6uF6zB1sH7ZHFxEC8pP4ddJUppwUd54VhNq",
  "key1": "2SDeyqDph21z11Hzsn6Xcrs2LgKfCgHYtKHBfkr2nRwmP3rhkwHvHWwP5Me64iBr2vA7jERrS3RvHhycr1gcAgJy",
  "key2": "ywLL1krgh8juENYDfRgz4zUYafzn9kQ7xu8DwNhHMsHZuMXQhgufuSAQfuEzNyQu9x9XaEjsLuSAsjPCcvM265Z",
  "key3": "4dkpbaRUrFY2kVc5aB6HJ97Unv1qCgw7G4SzhDiHw1q7Jv82bCWTPoHYuawQT3JXB4TJmHCLmbBFszhVah3dSpvv",
  "key4": "5rBwzQ7GVCwVK3g3RFPUegwZBQtxHS4EY6z2wExaRrHTfo7NKmEUsNg6wMNGL8UyUWLrk8C8bhUvSdrfAXVuhNsF",
  "key5": "3VJ77LYPUPYAb9evrJ3XSd3jWmjmpeMVoCBopEmkfuMvs8cRM9fxrwBXP9aTLwJvnnbVLjgiMsAXpK8De93bVzRb",
  "key6": "N8YxKMo8eswoVVVEa7f399QMj6KZS2YXDbbWzaCYEjAxeEaSQiEQtAs2K8t6MeUTQjfS7hvJRcxFqWTkPKThsog",
  "key7": "34ectZMRbv4SHyM6xqx5m5L1k8gBUXaDn7CZHpxYWdLAr9oFn1nz6XfDuC6QeLtV572BREoaRRSAgwF4S7QFAb8Q",
  "key8": "5gs9s4uUprDFQ1WHNf4R1QLdXm6R5YjWjib3FQQKCCRcgxQPsUcokecNkstxuX1Ad5irw342WUeAQKVdYhWuHmmJ",
  "key9": "3hYZjBfPaPYynA2WFaPR7cn5GACRDDVcGK8JjbKRF7ze5EJu78j7P3e83u8nxVUFm5Dqe6PDwcRKHFwPdo3VGgQR",
  "key10": "2vAfsp8kAZSStK4cC2cBKxkmAs7mUWfEF5v8L3m5hFMMqsMDiJ2DynCmAWE5cDTifraPwpLBU1TMSh74CTvKeHrG",
  "key11": "5VMk7LVz1MBtFWB2msHxub4LJsSp2TkCe9sPzgsEBAxGB67PLf1tHsXoufQ7B8cYcJyBPLVGE2KDZ5Mcao51nkKW",
  "key12": "4TUZSeX7yBEfwrhQD94LRT5nqcEiBctsZrf12WsaKG8abMcMN39aueKaexe65XmhNgcptcGMvdAuASqHrh55Rzee",
  "key13": "3PqyS6j6hW9rcDq68b75nDXBsr9haV2au7F4TE6krUyGeNG48S3Xg3YLbT8GymYVowMNTk7Sw1pQsgPQBmrG3Cyp",
  "key14": "3aCMyYAuB78f1SRVVNNbuUfefTV7kAkttPVrVKWYxiLJgNENYDZDqi3YEB7Nq3xxXeuXpx5iEGZMimp5ozvMjbZt",
  "key15": "5Hju8ENoZczMcW5q9iMNv8s69EQfQZKCCJbz7DddrRCJQGResRR1UuD4wNtxQfhD82BmQxXKJxgYoDKAnL4kZ1t1",
  "key16": "41RcnDAbDBP2vsZo6zQUrmWUgJCKnePnULCRSrsgbyhztKZKPEUn8Ca5Zk5afThvZjC29rhTGWrMpUs1PkmzYGd7",
  "key17": "2kQGA6SzaJ146mvpWDu3vra4HtMgB9fqPy5aY9JYreWmKeZEzuh1YXDWzWwewMFkwAHP3o7zTzoKxxK9xi13CRv",
  "key18": "5NPCzeVaVebcKVovjMV39UXVgiCiWNrMo9Xj54WSqCPeTsVaZnF2bKMoT47xtTxnhfLdunGs4F3VzY8NxMxexoTr",
  "key19": "zGVn1DLrG7nLYWwVKxvENdDc5ybCB32rNaMrRsBasKnXakSB1zmBCKttm4UKpHxVhguPaqHBeFLUPsVABkV6L7S",
  "key20": "3Ca8B765dDenbQuRGAq4k6swgWK5oGgXJNPrMXgjK6ZN4JGTWQYKCA5GWW1DZq5YmLcPdLdDcfJVYg3ymeHvPX92",
  "key21": "1wLBE1cGSBBvBUvJHi9Fxo52vfC1xqTpbEztFrK1vdbfzApKa4iqAXVDqHKEkHE5yzZTQcZoL7kgUUddop7JEje",
  "key22": "EKhavTkozehi3vkfkXyNJRVZpEY9MMJRXaTYrCFNQKvRvmEtyUw3UAcKBEaeqoKxqMA38Mu1E4pv9eMdEvR87VT",
  "key23": "mZq9oyh3LmAdCSanrM1WLRvXfAvA6stBts3b8tp6KLvm7fbj5dj6mfhvhqvacdNhLBhMsC4gC8fuFVmdZtsnquM",
  "key24": "3ie8F6D2Y3pdeUxjFdGggHstp7gHRL2129PgkBWxNFpeoHM5EF4B6foYCPGaTAZrNYboNGfSgbZupQdEbheKmo5U",
  "key25": "5nce9q6TF9i6D4Wris3dheSF4rMHsRvYt7RNYsRBaCHH1y2NQpPCupwxgf7A6KuybR9iu2Ek4m6NW66QaUhTwxuA",
  "key26": "3SqkiaGvNhDpCPiSTGnVF42C7jFPrNPx8jUMbR58bVNbdQvHDKnTbGp29cVnizGQM1xZxvaYnTkT71zioFCn2yRw",
  "key27": "46aZTQp3YP6KDBH4GiVavjLbo8KJqC38YYodXy6vJs2w3iaMKbgkgokUEKumFuU3pRBEJPpguJ9inHbJRxnKKh9Z",
  "key28": "34XnVw4kcLDds4dbA7PK9U3aoQs1gsHoMheFZx7h7rffrgrDjYQGEBDBngeM6947z6mFx7utq1zGZh36E31MPTSe",
  "key29": "K9XxSUAuv1iEQrd9fF3gqrUQWsfnTPtpdP4HbGmhpQN4emLWUFGButRgFrtAaicKJdNLfBA46vq5xpriBT7gRy6"
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
