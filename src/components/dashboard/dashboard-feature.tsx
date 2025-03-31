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
    "3RppFPo5Kac5L1bmQPhiwNuFauMHNBrQ5hmQfg7zURU29ZzK5n8F3i3DxPJkmAMB1CqJC2DK6L6kZ7q67m1Gmfzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b31RuCxRY6U7M7tZWiVfPY5rTdT4yEZWmaoQbUPzgEDajPA2gWUQF7FSC53CaVV7Svj9RRtvxfceCFxTcCC5gB4",
  "key1": "3AB3AsaQMLUYcbtzA5fudJUoymy4weAhKzvWcNmAMDUozACYQx6K59pwLJxwtZdbutbngzKZUFsC7tjjZJweBmuC",
  "key2": "4kGwLKEsvgTe6g9aueiNPLmT81Mwo9KBCrHUV7YgaeWQCmzn8EQd8Hh3LLTYZBv3cthXXbynFPV4d1vZ9rQEU3H2",
  "key3": "4c4URF7a9ksdAW3xhehLQHYYt4TdjNRqNkh6gJrbiJp6a4GX3jFzrue2XeURkENXJpVccEHk2WBqsQHpUvHtmfWf",
  "key4": "3YsJ8WdEpiowkwxPScWvpZbF7jCxojz2p5PFWf5MqYLfcrDXxBC44BQ19buyJyBWsXRxFpPFkhZr7X1kUje2QvXf",
  "key5": "63why5uecHEmZvG2QMLLn2sTXWnwKJGK7yCUG4UzYCW2caqThZYeVpQUdmGrBQK64xe1uhBUAPqwXiahgAF8LEJh",
  "key6": "5uzhHcfgey9rreyUukkevGubcYm9uempx6zrEogmKivhNuCZv557TB8sjF8A1LTqdmZ7ZDgeRYcfC9F1AtkWZxX9",
  "key7": "5aW2uQ3KEDGnqH1xKcLmkYLhSidGjA2271gw1qYSkdPMW7GZXLFJVm4jpg88gLrqSWriyWu8h44VpM8nettDh5Uu",
  "key8": "3iH6KxigY3N5YpFmcd2yg1TRd6xRCzfsVWkXAqVt1fmkpypWVobaxJSopB4dZSZHHcjPfpCh1avHDHQcDpdYigne",
  "key9": "4sA7j9G7bFrUHB93RgMcRkohs7qhy8mf3qATdF7M7tQbxr514ZDqec8FoicyvjSMPY7K9j8hiJhGeX5Zf3Z84TDh",
  "key10": "39jo3QnWdtVAu8LJtVnkoRUviAQbMcZxVRfb4Z7GRKzPR2gh2hGJDNE3BfH2SxhQb5HMCuMG2CLLWumhmScye3oN",
  "key11": "4y8TmtwUKzDv7CoJ7hWutB9RbAgUuq1Dp9E3AY5kbecg8bwys5nzYGmyPE57qLWJjpN2v5Nzxeed4Zm3ufVWwrcR",
  "key12": "2TmRjMeb4TbUavARtaLL5KeoDrazq7GqLfRGfDZ6NMkV6RmmtLm1K3p1Wz7h6j9NwaAyfDXzcb7HDK1HhiYqfAxb",
  "key13": "4pjvCwUSmWfPkDuNVqe6BpoukEt5GBmVSdkTL1PTH3dMz9nzLRs1gGxoPsfuGG3Rg9k7LHxL6XsmH9z6k4aTdvMb",
  "key14": "3JWC6pZY5kjQ99jbT8D2h6yZFM2nHupqs3g29jVnbMB9uzfxDkPsM56HCphnDPBfuD8ekztMqaJJ4Pxee1hZWsMZ",
  "key15": "USzVWdBBXiRhkfScSa8UELeotcX4yYL6dRHHPQif6xeAETyDkq8pB5tYBrvT4LDca1NFcFde7HgpSiE2ELawTx3",
  "key16": "5CVS81REJ585CrVNvRf9KYoJPWMHhCoseRYKGwKGinK9nmRg8ZfcY8Hmu6BwD8Vprq5Zj4SrbVQJmS4JF8mCvhyq",
  "key17": "5oemxMtB9ZixbeUxNdUCMz1uuq27sYgEKMx3vHihcCpALgedHu6PXLRrczSUnB6X8BzEDKxtiLvp9j9JMnzLTRBN",
  "key18": "4ZmBaXpqe7RvUxLmEKESqb2iWajANXvvBaNjpS9sm4agPVNCSnNkM3PSwxnwSCPUvoyTgZhHAGXiPpDDU7iorLkp",
  "key19": "3iYnf9MojbgH3PNqiXhCrMNAFvjscbZ7jdmhMarDTHTX8U1VdEi26PjN67FCD7ntPC5CvMdm14ovbwzSq3baSfV7",
  "key20": "49zRw2HV9u43qJt4mFiHqtseq1MFg1YWVSm54SALWtjMA9LUwYa6sH1oESpuECU8WSksqroFrLmziioUuV2HLc76",
  "key21": "4nU2PjHevFC8WLaQU5F7hyEbRYooYVzNJpPg283tNUE7cD21zuBfwFRrJ39oxciBmDFwEumhEkauoHBxuW3n9vjo",
  "key22": "3UPe47X5NoqeFF1aP9s53MtmxCm7K2k61DGnphwXbuEqzvFBSoDEVexSqoUf3xR5CEsXs4QinJGN1XFU2c6hG5H8",
  "key23": "3xJn8iEduGege5iAHTC4qqz2MHbnMa9uHjFYaHSTCoF4ghB46bWX9HATXDSwZrEySNDda73FKVuJ7FwNhEkwXkmb",
  "key24": "3Se948miYKxpicMQ45Kzhh5aSRSwZicNdqDGKmGtDJ8HmeknXTE9em2SiPYaaDFQkrKeJyVLF8DV7wBtG8i1qcc2",
  "key25": "m9Vh6dMSHPYvbuMW6dNYdtfAitgGxX7bkHxbtrrq1RaAstVdmz2iKz2dzxyPdg21HxF1of6DjBbjSCyxreDHW5X"
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
