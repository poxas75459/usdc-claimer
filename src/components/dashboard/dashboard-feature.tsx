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
    "5bawwAbBjJrF3zncdqtp4Ufq7msudoXg55QuQWekx8mQYyHguuc96uSAaGdZF9rAG7jKz35ze37xzwMMC4v9KEpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J74mMT1TWaaE7ScfiK89sg2niqEV2dQierw1kCTooTfr9k2aKfevviSnCDWQuKKaCE45q59877rCWeEZbNci3c",
  "key1": "2CavLxSqJ9NPifc7WJcbHYQgYJby3m5tMxn2gyaYUkXSAgU7x8sDEUy9BAWXs75AgPbe9Dw8jYP8H4uX6dakbP4o",
  "key2": "PmyymCbXUenZ8g7Qyc4LX2gXTuVau2ouPFZfhpXw29kQDrqJgQUrYvB4zQRQfT9CNZ7BT8MF9Qh2QdMg1gUatRw",
  "key3": "29f9jac7XbGHVNUpoYvFU4xq32D29c3qpirH9kbZMvgkYEkBAUZkiDwVwDMh5RacG9cANG35o2ZciHBK8ZtRzHUo",
  "key4": "4UbFvKFvhKaWutXbmCDkJjLZh6REb4RRPvpjPhEoZxvF9wx6eMhWk27q8PSeatNfLot2qqdVahSZHSBZwMHzRem5",
  "key5": "3mo5N4Zgbnzs7K8CXjLHWbWVEo18iPmB3zHE7utLzbuXmBDF4LuLtLu34DcvujYmFBGxWjqEqK9BpxTWFK2VU8W3",
  "key6": "5zMTdvHgnorxq61xuGsvAtKFh7n1LDBKQQoh5Zx4ePfU2d79y72QxUvbeKCvPoD3zCn9vovdE2hoFirdjbq8vUmB",
  "key7": "67byzf8ZJjdPpLH3Dug6ozWGn1FixPmtoXZiT3f9QgSLWZG3vVNiJHgaAoaH5W6stdNJjQi5g9KiJCBxJ5zAksdL",
  "key8": "do3e6ncJAkbQaRDh4fT4PXHmtmeSfhARKG11wEKxaM3xd14QhPrVrJPzbnLS4R86izqKXRyF28UfXZyUWWGXcWr",
  "key9": "27ZYtFjRvRDZZKTmDEF51MirkKDb7J9AnjkffuftGfMs16KUDJ69cnUDhVnUDoVLv7rhMnbW1BWrgVnxdgc28yt4",
  "key10": "27CW4GVGntN66oaW74ksgjdVvWKuRfcbsqZjSzENqtpUWYApahEJby7Gw6Lxpg8CfJ4aeT7n7N8uWtnfKh8Eynx1",
  "key11": "2aaHaxzPsqs7PjexXwi7RzGkWTd1R8DjDRQ4yF965BEALA5DMriffn6wCD3Za9yabzL7DztaWn6GsYCkUjrZkzEe",
  "key12": "T2WMqTrZ2tJEKztb2kqw3A3BXzXGhf7Bp2Urn4ZWrpbVxigMkqr6nidLdsyRNGXfwVK4Q662fuDzJb28LjF45SH",
  "key13": "45gfhv2Ze5EJSMBZ8bauY1dyavV1MtSoEmFbZevcG6euBUc2dLWTRhM1Vu91xtgnkdy7wKYrdmCyVPGZijq4KFNp",
  "key14": "kiArSvYspvuvJ18nZYSD1tDLDr9RuyP8mSbqvMQFeK24iLk3mcEgCocf8d46i1sNtKF7RqgBfFyfvcvWWseoVem",
  "key15": "4YxQUeE6JDVDczuddbskHxuHR2nK7MV1t6pnSH69eRH7p7BTPXPZPpDdfNb4C2kJfa723xgWYSrCCCYsedjuChZd",
  "key16": "4fkf8CwX3GoTWiZDP6iJmC9vAnyoVa3GFyVjHthY6Fe48PHe2GpvGykkNhKoYWLJcAk3oA7tNgxgb8zxFzTSPeq8",
  "key17": "64G49TRK72t54fUBaB1TfMKQnmF1JPWT2MA1Qb6cu1SViC74BCApVe6n4WePLKoGsXEsQiSPQ9ZuNCedjKYQrLTW",
  "key18": "2yUsm5WmzBJX2CdbvJP67GUX9DegXK1nFqNofxuBuzBSr9UyKjUdDZv8eLm4FbG48R7rzwwmstHMqzmAxnk5V9Ai",
  "key19": "JyX5DTbsCmX2zZG8bsya1eGGFoSqemuWoucFYBBKDTQJ3xwz94vRqeJ54NAqi1u73r5DshwThLcVFwTTsPLnxJX",
  "key20": "mr2mabfggdNWUuf9c2XiEnU1wJkHAVQBCbG55CufHLcrZRYbokdfFqfbuFuUZBz3KpKfJtpi59YnwpfuFcAN7fC",
  "key21": "FYgK3jUNCEQNbi6iho8pgHJyHALTpCjqgss4t7mhgNqkxyu13RQmgN83D7HdRhmSujbUuWAkvgjL199DQCvJj4a",
  "key22": "ankNPbj7U513XUTEizuyymC1LqpN2hgdsugTxmunqU6WmDx72W6UHBhnkyuDH3DpbX5KMeGLenpwjwPBMiHPDs1",
  "key23": "4qhjENUab2jHuD8Ee5MaCXxj7dqLXB5NxNCPmoEzFvtfiZGp2AjpZjtoCEGa7gQ9kuQ8cEgPaXTvcY8qinusLas2",
  "key24": "3drMSMgNuueqqpCWFnUANnY5179UJHBLv6RuL5F6WXohPky64juDuEhMSsnFJFyNh5Fdzxj73Nofq2KSE6iFZ3T8",
  "key25": "2QMaA8t2KNSMWpH3hyP4nic8afXmHVY4ySydgD3scEUoHyaAHAMYZR8d3jgwubc2KUPVZKVwwwVgimmyUr4REXV8",
  "key26": "2YzPXMSfKooayWqsXR5W2ov7aHZotU7yjPtA4dTR7baUQLTM4AoHCL4nTM2bkqToruUhbJYoATumjvJdVnLVQKKe",
  "key27": "5QXUWRQuzXsu7z4jSvSJQ5kwRHravFSzjpbEhXZWrEpJGgg6rgh5Yi4ccgo2WNxTrDYAm7TxX6eSMDaVuxcqgkrN",
  "key28": "3y1f4FyeTsceGfCKixMvMncCjnzeB46huBoDFGz8TCnSxLF4mRNFQZ3sgfUAgCqUHjMXogPdT3BpV5WuQUJ25kF5",
  "key29": "3hq6qp84oHHrJgNK94LUmCuJrwvVMCPLmVGV6i5kwH3y9dAF1cDvwEXHRMXJ25TpY99QRZZzkcMzkNayxfc2uU6f",
  "key30": "godSNQ6GFFAvbpTnjRwbnYUzUdvB6TSnNKWyKyMrDHQ5LbhnebiFYUoyJ7bbbS2N7PHZdxrYk4bn8BuTnneqKUG"
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
