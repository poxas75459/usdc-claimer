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
    "5yCwCL2vo2iLXfvtPt1hJ7dBrJ5mSuc1DY41aYLzxeVgrRd8h8zkpo1rhWKMNYQZyiWAg1Gei7u99tztxJMmDnxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KHGn7EjoA1JRrx39n8Ee9LUuzoAPnTWQRYNr6HH98unGaujEWfRyq389BczEaAUhnVYjoYF4Vggd7NVHBMN8gar",
  "key1": "dVxQmufKeJ4Ku84VRQL7SJjmKMAvNkEUupexB5pHyGY19781EohAPngrR1QXdjsEkgpjojqya3V2SEGix99N7na",
  "key2": "2cWRV3ztCkZrcyJHv5hUTz7JFHgRGB7YVKte7rYooyw3HMJARWx2JQGhqrsCLE9VK98KvPT7hgNQr7AAJgtrNuXW",
  "key3": "TJFVW2FgGc9o1U8GDGZ3kEydhyAFo71GqQ5nB2J5aSD5ZMafxruJQa7CToUpZbjEEZhLj7vfMstB1f6ZHVNWU5Z",
  "key4": "5vTniXxpTJu7sXE18tfQ8T4v2B7nsUyuGv3kDNuDG8bbSoygVcoQ1LzZG3MCUz6EF3PEFBtGEmDRyVfgvKC6sEAx",
  "key5": "2yoWK6hQBjLKbCa1RmHoo5LJmTzA81tia6RdBvsQSfijFmTioRETxQ7oiJE6oP2bPKqJUaVWAXMY8gyA9youYs7Z",
  "key6": "3KPssZEaTR7JrNpqAtn3wp3tgtUeAL5DtjZnGhPAaLtN4wGTq5xJkXX2vZZMc96jxsmGNd4PrXreZXX5haWD7TQ2",
  "key7": "4nu6TqLjQz9dFpUqgmK5NySiDUVq9twUZKAuzKUYmQMMqSmSrcSPneoNNPdMNsG1iQ7UwyesctCpaJpB5J4mfUCV",
  "key8": "26VHjHTRuKFUpzi2HcoFTR8HQH2Hm5yLEigdm6rrrm1XMkZpVaakTdQMTRssZi3EXaD8Cnjn2wv62LTt2jj7Z1G1",
  "key9": "2h2agJLmmscqQfjb8mkp9AirfnBST6TMqqJH7gdN2HbjJu2qLRCJGZwV88Gagns6tMnuEz9R2wXR7i6oKsQpEv4o",
  "key10": "4rkQvzLU8dwdPZXCr2P6BXPAP51w3iVsQc58wmGNu2dsPCwpczDzDs1B3q29uwtSpQrdUgugxDZLziK5ZewgZ296",
  "key11": "4Gywd4y6ZF6C1TzDyx9as6SqPSjtcw6EcLt5MKXVZzVHhW5yuGkcSfQcyNajqDmXWLzWKqvA8jBMtwp9YLsEHhs4",
  "key12": "3iPhzfXTy5AQeAZSv8cFQvMYgsvJUfeg4k5ygER6jCpnD2jLhb6LT6TqKWhe7BWzgwFNyqiPVo3aiSB4wh3T2oGV",
  "key13": "42NPLTU8oiJ32nSZdjBgwYqDzoe6mDKurYEHsdNxeXBdELG5fuvAD3xSceeCnYyge3idWzmT44qeHyLVbthZEKjx",
  "key14": "33ALQ3YsyquL889f17pydE211pYP2PKf7R1Y9UMQm66BzFweRpeGVWVDXJaZZZe63emhS5cMbjUSRk1pi3sb7MN8",
  "key15": "SYRsF5XLFQhvJCK8eE6TsyMu4x8CB5niexyCao8iAHdWGRJQVXK2gGrmmf6sefR93KZ2BLaerEVyzaFKKEveyQ3",
  "key16": "5PqzzdHXg7Bp6NZ59qB6dbPLqCX8vmKAezDpzgzcqkTLiLTscfbcNW9HZv5yY1iJqfxdTv26fPbtRsvboLhEvJbA",
  "key17": "4DasEUWeVbkd6hhHv1jJuRgfSJEYMD8qPJfuRrMkjinZiewvVuqfy4XzFaXHN5o8i6Gx39YjM95nQdVxyMMkXV4x",
  "key18": "39VkfQPkW5dzT9akEhN3JMkNFogYXJnkanP1PQnHzYpuBBD8jN9m51VdVEBR1N1XJmskhPEfi42638AWTpwEX5ga",
  "key19": "41sbTC7iaLssLh4dvJGt5GVRfWz4pVtHHGFgvqcdFyinPcGSEPbpZgrYzE2x7PyuizgmUbUihvKyEZQ9mxPsu6M6",
  "key20": "4S23U748NvSTXdXf14BRJiMnxJ2PNEsmQtyf1se1Lt5Dwrz6sHasc3atFstmCHNPgA5amV8pDMDKYKNxDjGAh9Qu",
  "key21": "2PUyJJCAvnr4WTT3ECUMki1qyNPmS7e1ZMeAxe9uadTRefpZQi4WF34oPf81ukimwQnW6f7JqAWVroccTrjBzCNM",
  "key22": "uAafqRW2BJMdj64ioaqTH3RWGik8e4osmNTLeekNgb5aU3giBJfp4Mxj1p3mFJRMNvShbCLCjZMTLs4JRTku9Xd",
  "key23": "2byeDoR23EAK4bwZ6wT1dU3H9xpKeJhFjkrbqaitrLn5AEv9PRqgFrRneGMBfsGE8mYWvamygMStty4VtT2u96Md",
  "key24": "4XJRcxCDMN7yGPg2AvZ7wSpdMzKvHY2mHJ4qeZKuCgNmLFFg8g5Zueokj1NL88KtK1mzqZQWDBhHc7Z5gRPGGUAi",
  "key25": "3aLfvpo49TzhnoK6SmPZyXuMhP6M5i6gLfJpLFEyFrhG973KuXXhwCATewce7dvRen5B5pYMYFaks7hfc3JtRV1T",
  "key26": "4KhGU9TUcYNRMrNtrGHN4oYdSVarn68LoF8prGerqQ4Nka7dHr1477Kq8fg9XsxydP6ZKSG5KP4Xyn9P6pCmjBbU",
  "key27": "3Pq6n5oiitxmwsT9YvLRMecxAKSoEmQhAzHMB6BqAmZEgveL96Zsdj7xQrrM2newzPGWrAYy2tu5F7pGma54b59y",
  "key28": "fpY5fT52idPbEhSQhv6M9GxwNjMHXwB42H52AKSk9nhSx3boczV6qUm41RW4GHA8VGhNC7C5hoCVfPBSb7qWZSH",
  "key29": "3xCHtLYuQqBprRte1wTbxTStvTXr4uJ49bjQMfNGQW4BGfDJ8CBoWhxUhnr5ZKt3hWLZbf3vCbQCEGXtRUKu4AB",
  "key30": "wLJJhQnvTCtjUoCTFmvtnMncTbd1ZQ8kDM91A5N5Syh8kkA1h7VsSSh32wZkWPCmRis8BWcH222cyoC4ZXUviCP",
  "key31": "61xQWPoZsLEMQteKqzi84SL9bTxYGSuJQe7fyeynALC1REPfWZRHDTtp2CSdV5JtzEUJbefXhp32j9uTD9MS8soJ",
  "key32": "2mMCMkYWvnAPEPcMf2UjnWxKQ1tH5gnf8RxafvASPAz3kKEapFUEzqvfSeV2EcdaZ5ongnMcYo5NLGgAuHNFhjXc"
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
