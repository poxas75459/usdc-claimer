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
    "3jYdPNyAqdVyNigMZxcWVDZSWMHzjayJjecj6jzBp8QwmkqDWkyXW7uJ42yJSCZ7zG7Wfn5WACyBnebjrT3HtFKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tSAFC5qER4v8Gy1Q1xYLphC8jdkJgMqJx5nPR5bSRRmhWmp1tdkKUFhE9Kj4j4oDHvAfSDYLX6sc23Huws362he",
  "key1": "2bQtuT1p2md8B5QfYsKrbsWyPDP9p2gAu3mYZcWAQKVrqJEk5DxyEK5Q23ChX9MWkwVRwBVUzVjKPf5ecC9ebE2b",
  "key2": "CqkkvqUCj8PpC9u2RiRntitacyzH8j1czgUaU55g9J5TVLV77LMvnP924sx5LcALo3gLfQe6FBW3TprGJbQt9Wp",
  "key3": "2XUvjSWvtTziJPQY7bKSAQcxaQCxYNR4qrC7rREQXCshUQeRDBoN3Wcvi5DRwowoDatCTeqtZnr7VGYuvpLW4ohe",
  "key4": "5dLBdxfoKpUQxDa68PNjaecuPjoJvVVD2aRvmTxVJUWMYkjCgkApnhbdgTwpD9qNk6QQa3LADJsFCejNWgoQDfCt",
  "key5": "4TYwcShTMQDMHxc2Qk28C7E4ahB1JBYQJYLP99Xh2RSNcvz6b2VrTNKqWkjtY4Xsf1HLXk8DKLCW3aicK7QAKuYE",
  "key6": "4twoNznsSwHR9zHxGG8kKm4WKyum9dnzeGVnn3xVmLDFtkCDT4FSohnJBwGFjoV1zFEtMbGBxGSQTVjJoTcnxXRw",
  "key7": "3uaJikBoJsR6GjeXtes4uun63ndZrVBck1vRt2Qy6YbE2THd8ZP2GyznNptP7Gxiw8pKEJfU93TkqveYUTkv1Lfr",
  "key8": "5FRNnq8xbwJxiHFcRdteqwwFfAKco1ByDv2Ptmi31bgQFrreZq3AP7oyYHM6wBVJqGCd9oJyb1VHCkrg1DAesZha",
  "key9": "4q2nokNSXwngfLwnViYYFEpCYRnnDgMLFQQ9SB3yyd2t4Seu8ijwEKHJM9EW2L1KCveC7KphCe8D3TrKk6GHSNLs",
  "key10": "8uCXwvvJBXfU1E14sPShFAsaBrjtsmyTBQCowSzz75kkNgGvejfpNWwHVRpoUxK5KnDUJudrKaT1q6g8RmGk4Q5",
  "key11": "uUyRFnGS6ZtYcTZxNRxCLg2ZqVvJJx4b9EY9oLKL8cxwVBXGSBAiSTiMucFAUVt4XVXL2PtQXfPfRJLzzXfic2o",
  "key12": "4tP4fwth9cdXN8ZLLaXkdSRyA8BzBphR9QTDoJJXisKpZKCyJCjNLTu3V96vpF9ivtofd4PtEfrw6qaqgsrBGQSq",
  "key13": "7mq7avdwVd75jacc2dQ5Q4RWsVeFuBgHjJ7gfNzJLnCvj57iaZYDpk7A9cjFAT6hTZChGHCH1VyhtGiGjDVmEa4",
  "key14": "3ibdHA1sxqYLrFfcWYoyB6E6Z3jzVzHtkRzSjDwm8nnPVvNPtaSb3MtDA2bnk9i9bXzQvftzQYrS6MMgN9GZqJgG",
  "key15": "2eDo2771yyH1rA7zgA4GSfmMH3z5oHeakfKcVehLWVM6aatVafGLXP9ToLDSkUQZcFfXuPxbW83ARh7PU4gTEQAW",
  "key16": "5vboo9vtkDj9aimiqrnC7VfGoNZZ1UGHhYPdTUK2idgpDFbjqH2fCBHoLMSAu4Nm3Hh31xtS8uyGYosXtivwMnMq",
  "key17": "2NBw4Rt9Pg8LbSbXnHmUw1LLkYygGroM9LZQvVu7zyLdXG1rRr5GB5okdmhhtQGQ7sJ65QgKtSvjFM6DPHiUtwsF",
  "key18": "YZkYVxgSBKjL3J2bt1Cp3DLbxcZUGrtfTy1H37wJoJPi1jo2QqcNt11LxZe6YeQHdAXyFb91vCLqddXJBJZKtg6",
  "key19": "4yRMZ2DNor1193a6bwqSG5pgEVRf1BpnzPeijNxgGcLT8TGo4GurZbqH9m18pC1TpyKEnRmyYPcjXYRhrzJ5uXfi",
  "key20": "4KSu9ZwD218VUHrsU9fMN6YpvZMUzZXNcqJ7H922B6ofkTPHgUFcG8PRr8JMLE5iJ6Lv1PFutEVT4y9tkVbagqCb",
  "key21": "2YxaLYNrhCRmVfuc6cAY81BhtVySte19ziT1MjMrvHfFS6vLspEacePxCBsE5W86K6b2xcHKDqByE9fvHh7bNY5v",
  "key22": "3hQeh1EwffNFZnTAEyZCpqLCfr9esuVm18vi3EGniLBrSWQ8fSSDERN16Baoe4y2FayZNmqg6z5ZbyjMYzuUv1Kd",
  "key23": "4juzPSLR33Ds7Cc1gx1B33z8Xj4iBLLdS3rEGw5pcvMNpNq3scy7UDbovSyqM9MiCqjhGBv83hcDFKEE19Gin4W9",
  "key24": "3VWAsKS848TEE9T13Pm3QDjC2Eckgdj7oZhhPkMNsbXfGNcxPk6dW5Dra5nUJLz78wRH3keZMmWJH2RBkNTvAkhG",
  "key25": "62i12MzdqcLShc5jWTQvPi5jAJRox8KQKgfB2Gi9RUkFrhhHbv64gW5hYRxutNkTvcSynxHScfSC1HinrFFCdFhW",
  "key26": "2kRb7MGwqy1q2cYxFWXgSu85i919ph96Am1V9CPxp55WcGNqfvbnNZGz91dADY8YnqBJbrFtsy16rV4pxTNULUfB",
  "key27": "3DYtdp4cMitLwDvMCjNV8z1SoVvA3HhGCeHudaNDBmFsJF1KCNr1YF3pnDw9vyZrePVnbfxuNotpKhhXXbt5cdLC",
  "key28": "XyZjrpjnYr537FJPve643evDVzoSGMrb3BXVPjS2h8R7JHz5osMHi5KbYYxNUW9woZZ96PgjycFEPDVXT6Kf1sB",
  "key29": "3KGxkZxZxYP2PN9zSEdY52jQ7x2137cqp4dyQKYi26LPqPcHuo9FN6HRPYzMRxjhcBjT9FJKQVHC373RJfuaXWeP"
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
