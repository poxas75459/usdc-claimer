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
    "9EfWFk7KLb2hWWSG3Tzu6BLX7nm7LcxqWSKfdkG7F68hVA14jtjFpLEY4Mpv3oCdhyRpccySYT89eLXUNWXuWGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJ6WLX9vvcB4wmHE7aZ85x22pmZrX5x3HRAT9YUDzFrfogPw6E7LBrTtDCGZXU34gM67fx1ZNiq9NupE2R4cSi1",
  "key1": "4F7e8if8zChNyaC4xdaxDASHhYEn9342jyJKuQKjRKBGCcp6zpigfb7st6d3SqoHmhvBRV6txako4aEbBdUXmYy8",
  "key2": "5tbnvHCS9d8ydcx9MF4Htwh6vnFAVTT9c4x1wUe7Na9Z7bjehBPzjUUjuvQnccWYyRzeQzCHrc1D1YN1KZsGTxFM",
  "key3": "3i1vry252QwQMf7dCeAjZQi1qrhwJ9aQNgQStFfEtZkorhWddkihNUUhJPYzWpk8w3W2nidmTW9XN1DuAw4VfwjL",
  "key4": "2xEtXtvqcq6uK8857i5znGtfsKfKyjCyx8DHkP8wGUPFbdqAx6zbvPGkqR329aVDxP3h31S6GLNA9LATS2azELts",
  "key5": "4pRH5ePHZXLAGoDUvgerXC8qTEc18PV6fSMEaUBMex28dCP9FguNqdtjkX6CPVKWoUw26EK39iJjSyAaXedtQydd",
  "key6": "41cE65xUTCZW8LXbbUPbm6UdX7o1d9ScqQY9VAT9Ei6daPKg88QRppMAE2NLA7sYqMYcRyD84TseW6dyMzgwhn5a",
  "key7": "3pp9y1Zgze6xNEe7SjNwSPGqatSvkRiWuNHLAdPzpdiikmoahoJ5nfJqmbCQtVcG4fdBgsib4jjUda6QyH6zMJEu",
  "key8": "5Mho1XTNe1D5QqD4QDfQz9iCMfWvaTcUk6r9kGYqDJk6iLfb2qSpJEV1LWLZK7BWKP4rNF5sPztUoTG5iDf3RXrR",
  "key9": "2i4LSv14JRBxXL2MKe34kKfirXeoN5bDQ2savKLTbZm5bunHqJwJpZTPXKFDQkryNSCABgus6Dx8jTX5BZyCfnRN",
  "key10": "5h1BTv27rAxpUcGhCU86Jifg2VqHHf73K59Gr9CG4c6BsE8UpY7TqRJbu85xPcAkBkmzLnAaTyTctm6HvvtGaykh",
  "key11": "4ZZgQjfAydB37hNPYsEMcau8ZY3Xv7tNQvoNan3qURY73CCSGDe6x5ymZu9p7V92fkE115p7TSecnnHvkKjfQ4R7",
  "key12": "2uuNgc4wyaG5Z4cDjVTTTRfW5e1RT5nnNc1a479bwY8Y7qStpLREXxpoBGtwFNE3CR77J4vEKR3A4GF3Lvk11rZW",
  "key13": "4Bnyo8apW7tvqMVCPZAWwfaQqx3eo3ztkvZyRfcY51ezmLjsLw6tcgMRRdcoKqLVSZsdkdzGCaHAdxXtrN5qi3xa",
  "key14": "59fwFZBAfBenzyfTWAD2c6y14kccZPs1rjHe2ub6ekTaziXNXK3pnDoZjD2QVu8fhhXsZBe2rF674mYCmRY9kRjo",
  "key15": "3zYHwg1VorVmjaiDVb9ehySeQHxm2nWZvj7AAyAvBHzfjS5F2gQdqd3VbiVuuz4H62pVuotZdpdaLpCsDi4rRwsF",
  "key16": "5VXk3XWZepuK2qbYKVLdcD9ZWU5JM3VKVZKhMT24p6U4xppRZS2Af8Be7xEtEBrfm2pDQ1VN2znUxBD2D4BUdVt5",
  "key17": "4CiMtNTNdXjBi2q5bYkciC2f6HD71DYoNDGwAqjyamqDkYAgTGA5nvjEeSK6B6FzY46SC4C77iryh6X7qvcMEYCS",
  "key18": "2NfzpXKJMpNN6SVvQYrm99kEkqiL4RPv5imsYL7RYY1US6kSFmaj9Hv5zKKDDkE3nKmr57KUkVWgBko8PccTA2Kz",
  "key19": "4jNGfaVGUJsBMwSzM6bgBJVuq7RBZMG5uKsbUvAewTf1PQags15a9zf37jx1H3UwdTpRLvJ8wDe2dBTq6Yk4qyUE",
  "key20": "3cZnj13edrXnX1essow8Z4DJCAgKUmfA7umX4KZLeWmBAxsYM2puxWvfx9dizx7GLHHbZhEVaASFyAspnZzaxASD",
  "key21": "m75KJZZ4o7KLQcm1wUw4sEsJAo1a9B4JvLztt9L8KYoeQKn863DZDjijuWT5WouYX1FFnhqmc4fXraKgh8ecGQ2",
  "key22": "2uRpJb52PnJT2B9FctVFJYThbLqozVesbKua3vWVHNoLA9xZ1hJg2AG17CmpSvU4HwwgAxQZ7vyBfMuKaMKSXB5i",
  "key23": "wxERWqvjwY7uJMpmCvUqE9ST8cMy3wFe7mt5R4yrQkvDYzGzNaF9Q3LMMc3txpfaswERNRXnRbHwJkZjUfbK7Sd",
  "key24": "5oyFu6hg6iiwLPfTRsqn4Er6gPUqGU5v7jZytnFGAc6cYGKjsvnHsZQYvbPd2aiBPzKgYt85Kn3j77PJXWZasZkm",
  "key25": "2dQeUWaBH6Mg3ovbYttqKY93TxYKTeWhnRVDV278HSL53dR899Eiu5JsfV5KVrU9sQ6HapyVoyuVV5zjYy9Q7kdg",
  "key26": "3PUcUBYxKcJ2TSPnzTnYJyVmn9RqaYLcCUVo9PeJAsYmyBD9FDDhfL3Wzte1Y55t9ChyqRZ1xfMFtQCsgXT58q1S",
  "key27": "2KxpYbtHmPFNrBxTz98C252Nz6i8YHbvzeLUJk6pvxYRS4LUFDj52VF6zAANmsBSspWHzoGHRoRmPT2KKfWiBkEx",
  "key28": "281nsBRtms2LAcDgBUzKNEQqJwdVTLk7RwHDxKzSE2cG2jJqG6X2zkazq4teSQi9ZDZDBAZx39NBG9zN4eiP2dEh",
  "key29": "58Hs71R1DsZ9yEzp8i1MxPYgYmuS3L6Nsq9HoXbjRqc9MbxjBudGLJDq9P4Zg5B4Dah1BtqNvw81Wk6ro2tLA3GD",
  "key30": "57eT3N6ak6VuJk2ccd2EAawyPuL38ymyVjHNGwWCvEtoTTSTC75A9Xdoh2TiaibzfxXkoHbMCcjKu6YXApmnLvs2",
  "key31": "3ARhdB6ZsvgaiFGvT2bHGZKi59FSfYGCW4XqSKBSLMrD56vSmP1wjqK9MzVS9iyChRvBUgbJ77Yrr2rgGLGG8999",
  "key32": "2rngii618edVdUV7uGfk6QW1x5zPMk6GEUxUfQWMENpga2SE1PErJbPQ1rB2mCy7MJSKQLsjroBbA5NyoePL9UYb",
  "key33": "5pgDCRVFKRkgPb2Qtr8ZSCcSVinVpEhqANpLSw7E9zJF5QjQ1ciobDEdvDjMdx2ZzbJqL2oKSboHroTHQn55EC14"
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
