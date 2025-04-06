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
    "5Gc4si8x3B9DbvNVBGoRPodUaicM5SFib4S8iWTDvY9B2yBy1i7PR6wQfopbMPjh5fNXwLTAidZB7To8148D6Ttc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7ufUHHPbHDep8bv2SAeu9xiXtU3HbPJEQP1BqAccnQcDMQF3cDnDG7yrRP7UEZpD8v8Vrdmp2fU2NkoFJptrc7",
  "key1": "4HPrHVpLUkwzvXHWuWFYmZx7MqHxKUnFUMEZxp48M3ZK5dFsBKqTuLHCFvntRiFYLfvZsws2NkUv9GijjX43YMse",
  "key2": "rKyVq9zvBj2vYdp5Cu9QKfX9yoPGJBhsVxVzoWaFcQodAfW3TkKB6cWjcZCf9XyKRvJkT9hqByhpbWNxu6C6hWB",
  "key3": "3ULYMxGtsip8vYgX5xQDMaFvTeCK8eA7RErcvLs7ss9gPQAraJL2uMXMWr4a7hEkok4cq1qNJTKM8yHD8AvCFuJX",
  "key4": "5P5qHHYbBRreYEJnunYfwcWDqMDxWpXgALegY5FVokvjufaT9tzUaVDNkRxbmbJivfjY8Q2qY1FGaZ5cAaxF6an7",
  "key5": "mN1rSrwVLGeLFnBM6v88brvYfzkwrbPfs3YCt8xLqFtXJGPkQumKGgeK9o8VsQD1jE84ACuV3SEE9E95gpYrPbA",
  "key6": "438TMATrwCCdSamU3NbBtVd7TbBCx2qZLfUjY6dXRYxiQXKtk7iFsbJkoY4infs9PvkEEsujdZbKQ1eG4B8gab59",
  "key7": "3WiPLw2dNCBSTyFgncJFeempk8gZwHVXZHdoK6xvWBJeCwAJu1zQs7SrwgNFkVwhH6nSDFcyRwmiRYyNYxKkurXJ",
  "key8": "5epgqvC4CCVgszqV4byU65mhN23L6Cg4Sv23EA8N8BUa6kXUZrGCsus3yUQYg1oNWxCP1ggBUxWkhtt1rmXJ95ZD",
  "key9": "5bttGuiFTPeEcxwuWfSEYK6sJA6TTMFEjH1Vq1FsLusubE5YfCpTtiKwr5HnDZ1HBNyprtArDcuK7sjYyafyL2o1",
  "key10": "mwXXdJcCVDrAHzzuvhCizeBepofusb6KqoafG43yQHBsAaXCJzeenqjYB13xzjyh8gYjqBvPAwg8xwjYY9kePhe",
  "key11": "3PLY3E22ErH4iAR4b3Rse52NZ1wGzTTq7bxSJmfunYsP6ZYACNVFxxCTBSBc9JjyRLLh9Thtcai5RtSeKGZUtrR7",
  "key12": "4zPUwf8FiiEnDsApVQFrUbWS6Qs4uXx11nkq4XJZ8c1WpNtWuchiCXaTHdrjPLFFsRKKJT41BwhL24U8UaUtyB3T",
  "key13": "4xgE7FDURbXbDD5mDmk2yJ7YH2ped3kyDmi8vPs29EnXrsqryvYLk2vT9qGDpQ47vnRrYJJzRWarzJSrNj4aGXR",
  "key14": "66aSagQbtK9W8f2qmESUX5nofh7Rhf5S2SgwTgWAJEJaLatNaF8WBzwpFtHXTgmweLeR3zzmyHdpzdWN5V5zhwjh",
  "key15": "5x7ccprktxipvsC1QAmPfgeDSdNYkeDDhp9PSXxQpEKbMr6hV5Tv4YsmHQxDuQXBrqmXw6uqaJ2nf6etchXDuXDe",
  "key16": "2gQ5RnxEroq4KBxabaVoceraQnPuibEZwL9X3VuZthaesmExnMfkApxFgHjjWXmE3omGBW6GeybQVQuRjExzHMSM",
  "key17": "svQiMtC5eHcxyPjgbnPWrQjEudbbEczq5bgDizAV7UptcwHFxQDyWdeyAKvtrHoEeNkWqNHPqTKJMV8LHKjYj3D",
  "key18": "3XmBWvzLFVMJpPeSeUhUCAc4yHvZRkPJeAp2VEkF1CaYJMbRWSpBzmFhpJjG1aRi8EsJKi2UDC27nX26qru1vyoX",
  "key19": "2p6ZLT784zb3LrZrFQUYqX3QWC7fnPM4iZMdwgrdmjsGJa6PCx1n9mhFsJ55yHiQqagwXzJDUwrppzWJiPfodKte",
  "key20": "5LuuEdwz1zWpzy35gQqc2dmVtFnQpniVMPvGsvYo9fkVfWHNDGyJuLxoiuDeBvisaTfHXzSiNESWxRKt8aLMv7FN",
  "key21": "5WE6FNfFnzNw9hCwpB3yHnfYUKeiJASz9Fv5d2DnYNC2sAxMAQkb1EZerBDVpGNApwL6g5ZTGZcBD3G5rCsH6Kiu",
  "key22": "5ZFR4cZshY8Yvh9bXoNsVLTyCC5uQX1nPHYT8hQV1q6eD5MvSHANZmP86nqzipTZNmHxEab1jBL7by3CPSdLPvU3",
  "key23": "4qjpUTBLiyYZe2hzCReWDUhp7UogBTZoUMGhVTDtmtQ2rvLWRWEeEz5ssL15f8BszYtRU9wLJQkm3Th8TQTA7TQU",
  "key24": "3ybguXU1qHHy45hErfdMFPRWFfyuEq5Nm7F3JJdwXuo1TtnocLijWaHfEJf2Gsssq74qiFDQGWtWYNEMaLn65JKu",
  "key25": "5gurWKBoRwCfLseomz6AwAjVnjT6RcAiMVMkTyQkotJdiKneFMoEzzxAWeR8YB34n9DdWSUN1afnH94dsFati6GV",
  "key26": "3cjJsBGXJLCM6QNRbfr5bTGgNMCvnTPSyE4NEj3tLGrruFdf6ZTx7AKkmbrf5NShWmdQSQftJNMnJb5MyJJUPS4K",
  "key27": "4dZoAQMV5bgM6yv69japHRJMnZr64B9qV4abbFeT3eivC3XpB4pQecZqY4pQmktuZVEAbQeRWBXUT9HkXCwzpeDB",
  "key28": "F1LvEZf8w2jxjNVqe2kyG5RCKC5HTjcwVdbweGdSwJ17TtimEzHviT1TvNuGxX7BmaN3qpN1Viv2vFgtFzp5S6y"
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
