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
    "2RQnstohuukCQarxPCk5b5p8gc2D8y5Tj2Fc4VLW9RRYjuuFHxPjGP5tHvigUm3Myfm9UizVfaFyYrFaySFVVKRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obCrhkNCG5pPkEQQcqcJiDYnRBzy5xkRiSbJdYqU5xV8a269TV3fX7oMDz2Qk94oYZxQufvPjq356cQBT7TrjZw",
  "key1": "22STXDH3CTyrRmQGWh8u8NimCxJXLdjQ5k21VjShjTX4UHtYqp3Tbm6Z8TEu5MxkzeaLPmxzuoxSk491GwpwRUHp",
  "key2": "2kjouCntpqJRzMdSHPrKJYjGmpX9AvsuVT6VUEuoVrow37WnYyDmQdSn6PqikwhzSVFZPwMTaE493MD5Wv1HDbE3",
  "key3": "31mGVighBNvd6BkU2SCbYp3BPeHQqmyLUuPgn7xY4tEjHpbFhQnSCYbveFeAFfngTfniLxFp8UsgA6b8ixhV2bqE",
  "key4": "4SHP4H8CFGJwxJzYrnePN7dMkYk1VJpbNijd1fk3dik9x3eacT2ubL7nyVwGfTiemWafc5SdMXgoTnZbHKTSkqcV",
  "key5": "4scqiPrt5MRxnpnDSuSLQcR3HUWFYGkLWhnZAqwabXZ5GHhJQ9jG9SQ5WqJF1r42KXHrKHSTy9Th2h8EE4EKR9tE",
  "key6": "5x2WbHUAKo7U7hcH3a6zswWusXrE3vo4uw2hoWYdDZN4fBNjyaszYx5p2RLrLxTKYqpSHJTcn72i13MRx33f3Gj8",
  "key7": "3vtfDcKZcmrz9Z8dUXtPjGLosn3kngoq5joE6Y6vN9vCnaQp85SwYbvnFhsMts1Ampn3grRNMuBz1YxW4unxeK5K",
  "key8": "3XNrhJSqSpMuigU5SfFjtTxFM2mEVfSyzzB88RVDnrcyNc95gHn5G5pJ4yUexp2WvGDxdtjtYx2fvfdaKmWUiH6g",
  "key9": "5CZrGsdk86zUgmKPXRDLwTuZKnQaoUQEgSfjqRdjheTJouAjmqwtKbNxqQMcB5cmSi2wWkSyLWv7CHgRxt52gu4V",
  "key10": "2ZqMnDH58NoRWF3Ki6e7ZY6SK2TwGQRYSgvbg8zg9wNq5HxYcbaASkiznPnLVYj9nKbvnRWYyZuCEQoJXuDJrPCm",
  "key11": "3RTFNWfbWRnRuPpHXKaB4idZLXaCaHFT6JsZxDytNoVsxuWdnhLTFbuXCRTGSazWPWt3daii1HQrH91zEaJLGEfy",
  "key12": "xZ5kuwjBpbCKooSfbvcjSsbHVDdTo1wt1ptNacugojCYyVtDVHjUGamT83rhFywkdTfqZ3PhZZzNLna2Px9NYYF",
  "key13": "4nJ9ervH1DYXrt9L3hbJqS7vedKbiUQqU6asNWrNUAGgLfJtCZUy8Nkp8Nx4DGneb8oppTHsmEBJje9Yx4i7Cw7K",
  "key14": "4BMzjcwNosJddBhQAhri1kMTdQcVJNnVBufqbvGhsjcJoqYX5SamiZjG9epzVVmL26su7ZDfuVe2DRS97idsLQPp",
  "key15": "2AvwmaHcPApkwBAt2hDB6QwXHCiEcRyoq8RhoCokPw53TdV4xNMo9Ee7aNBes9qmhjp1eMyF1joXNmBsqiPgM8D1",
  "key16": "4q6HB824iLjoLc7mJzAxWDqrUyWv6FdAt7haixaKHRzqzqfgG8Cvqarav49qm3josAPpMsfjgANN1ETN4HSVUCP2",
  "key17": "51mgRQvL8tkK91ThKf9MGWMgpdTFi49w6f9kz7XWhmKcsMKcWNK6TjmmiXtHB6HQbvva8xCEWYHtxq9xZggGqrPq",
  "key18": "3iVk5Qvw6asQvvoHgUEnNp5w5WifgXCzxa9bN7rTfUGn1dUvy88C8LLRSKjchbmuDNWEVQ732a5aCTX7V6y5WLo",
  "key19": "fJFD1XMzWZJLdN74aZjRG9xHVSntNrLL7BBVbfKp4w2hP1JQsAFpHMzXyx3fMV9ApUoCWwb8UoBzS6nKCBZxDRm",
  "key20": "32muf5NYQFKkbARVkbT3PvuAxKXsf5qWmgHvfBXMvwCM387QCbk4XCvXS8TgXZwihGyZoYWii42GnXxFKwHAnzzk",
  "key21": "2DQHRqBF8qVWSwiXUTFQCvV85d9gvFJQZvcH1RP6Kf7zG7GroB8a4q7qjnT5TUnfnXQTnuGbwKzrPAGRNtpVAe2S",
  "key22": "5h8z8Zxkr834xRiinJ6z8171bnW17ZzmBLtYmnTaJkAYqutEcfHFAWG7o4Wwcnf1jwJjye9wYVLDbCLzysfDFobN",
  "key23": "5Z25d1UfQXWWSNHQbC89fucgAhD1MbNJxQje1TUAX11wrHFVVZdbL4UtnE12rc1zwTsJkUQ9ThABg7VthQwypNtf",
  "key24": "2rRp7W1xzY3EsHTnAjxNfNJX1T8iY5zwmwnNTP4n4BXknuba9BEyJ37J2sqGS39DpCQc1mwTygPUsqDCptxvxp4k",
  "key25": "5cxk7k9jW7fYKrmQBxMQkdrAvc5WJXRiaTyZekZtBBqtxkt2aNyXn6b4Ep3BuJ3RneAMCRJzU9sRkgAFiq37Vu1e",
  "key26": "5nadtUGMBKDZSUGYhSL4ZaaWFnkyP9Tjj2RukvNnVaRYWwXi1tohatdThEMfA49BMCNJmbLynf2wJcGjHmDAxxAT",
  "key27": "55XLSqAza3sPPbwCsYk7gkdyRk6KYS75zHmqt9VCzGBCBxTvbvfKMdF458UwjfVU424mv7P9kknKm67dKfQe7qjM",
  "key28": "5oW5UVi1t4NA6ExSAnp7Aym7jaNxqwYss3LKqobAYzUXddtTysK4Edx7KDf3B12bfbHjPT8dFyTcy9SMkYTnwh7z",
  "key29": "4xc6Q8cdyxNa3boy16bP5hsXUksXwo2irj4j8DVttvwwehSKUVM2eetai9KSANJqPvcxdewYhHPnCFNoeEoMR8nJ",
  "key30": "3R1t4285WQHUJGzGzvs8Xdu5nRw67trhnsDCWjqzD3hD6AFAD5i7qhbqnaZbmgCg23iBjsAN9msLX68nsmHqPWzX",
  "key31": "5BdrUZWYYfZYUTV1VJ6SUDUM8h99TTF3Xk6wpgePRuZYZMCtuv3cTkDqAfWQTmPE391vHmThtECw1fgR9SUqcRxh",
  "key32": "2WJ5k9jE4BAQJvdSnRbzFXUM8YQuygdRU3DdezFTpM3BzxqCEYx8tTLTNSgdfehFEnY8CfBfAYHDpJzUQV1TPXtW",
  "key33": "eQuomsxBcYCXASwe6U8oTNncCpoZifGBN9zgD7qo96hzx2h8oEY5EaHPKiGbGm7HGtQmFPphmkCucTouxDtVUC6"
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
